<?php
namespace Modules\Blog\Http\Services;

use App\Http\Services\PsService;
use Illuminate\Support\Facades\DB;
use Modules\Core\Constants\Constants;
use Modules\Blog\Entities\Blog;
use Illuminate\Support\Facades\Auth;
use Modules\Blog\Transformers\Backend\Model\Blog\BlogWithKeyResource;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CoreImage;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\LocationCity;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Http\Services\ImageService;
use Modules\Core\Http\Services\LocationCityService;
use Illuminate\Support\Facades\Gate;

class BlogService extends PsService
{
    protected $locationCityNameCol, $locationCityIdCol, $locationCityTableName, $blogStatusCol, $coverImgType, $imageService, $blogIdCol, $coreImageImgParentIdCol, $publish, $unPublish, $coreImageImgTypeCol, $locationCityService, $blogApiRelation, $noContentStatusCode, $successStatus, $show, $hide, $delete, $unDelete, $viewAnyAbility, $createAbility, $editAbility, $deleteAbility, $code, $screenDisplayUiKeyCol, $screenDisplayUiIdCol, $screenDisplayUiIsShowCol, $coreFieldFilterModuleNameCol, $customUiIsDelCol;

    public function __construct(ImageService $imageService, LocationCityService $locationCityService)
    {
        $this->imageService = $imageService;
        $this->locationCityService = $locationCityService;

        $this->blogIdCol = Blog::id;
        $this->blogStatusCol = Blog::status;
        $this->blogNameCol = Blog::name;
        $this->blogLocationCityIdCol = Blog::locationCityId;
        $this->coreImageImgParentIdCol = CoreImage::imgParentId;
        $this->coreImageImgTypeCol = CoreImage::imgType;
        $this->tableName = Blog::tableName;

        $this->locationCityTableName = LocationCity::tableName;
        $this->locationCityIdCol = LocationCity::id;
        $this->locationCityNameCol = LocationCity::name;

        $this->publish = Constants::publish;
        $this->unPublish = Constants::unPublish;
        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->blogApiRelation = ['city', 'cover'];
        $this->coverImgType = 'blog';

        $this->noContentStatusCode = Constants::noContentStatusCode;
        $this->successStatus = Constants::successStatus;

        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->code = Constants::blog;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;

        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;

        $this->customUiIsDelCol = CustomizeUi::isDelete;

        $this->successFlag = Constants::success;
    }

    public function create($routeName)
    {
        // check permission start
        //$checkPermission = $this->checkPermission($this->createAbility,Blog::class, "admin.index");
        // check permission end
        $cities = $this->locationCityService->getLocationCityList(null, $this->publish);

        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $dataArr = [
            //"checkPermission" => $checkPermission,
            'cities' => $cities,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];
        return $dataArr;
    }

    public function getCoreFieldFilteredLists($code){
        return CoreFieldFilterSetting::where($this->coreFieldFilterModuleNameCol, $code)->get();
    }

    public function store($request)
    {
        DB::beginTransaction();

        try {
            $blog = new Blog();
            $blog->name = $request->name;
            $blog->description = $request->description;
            $blog->location_city_id = $request->location_city_id;
            $blog->status = $request->status;
            $blog->added_user_id = Auth::user()->id;
            $blog->save();

            $imgParentId = $blog->id;

            // save blog cover photo
            $this->updateOrCreateImage($request, "cover", $imgParentId, $this->coverImgType);

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }

        return $blog;
    }

    public function update($id, $request)
    {
        DB::beginTransaction();

        try {
            $blog = $this->getBlog($id);
            $blog->name = $request->name;
            $blog->description = $request->description;
            $blog->location_city_id = $request->location_city_id;
            $blog->status = $request->status;
            $blog->updated_user_id = Auth::user()->id;
            $blog->update();

            $imgParentId = $blog->id;

            // save blog cover photo
            $this->updateOrCreateImage($request, "cover", $imgParentId, $this->coverImgType);

            DB::commit();
            return $blog;
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }

    public function updateOrCreateImage($request, $fileKey, $imgParentId, $imgType ){
        if ($request->file($fileKey)){

            $conds[$this->coreImageImgParentIdCol] = $imgParentId;
            $conds[$this->coreImageImgTypeCol] = $imgType;
            $image = $this->getImage($conds);

            $file = $request->file($fileKey);
            $data[$this->coreImageImgParentIdCol] = $imgParentId;
            $data[$this->coreImageImgTypeCol] = $imgType;

            // if image, delete existing file and update
            if(!empty($image)){
                // delete image from storage folder
                $this->imageService->deleteImage($image->img_path);
                $this->imageService->insertImage($file, $data, $image);
            } else {
                $this->imageService->insertImage($file, $data);
            }

        }
    }

    public function getBlogs($relation = null, $status = null, $limit = null, $offset = null,$noPagination = null,  $pagPerPage = null, $conds = null){

        $sort = '';
        if(isset($conds['order_by'])){
            $sort = $conds['order_by'];
        }
        $blogs = Blog::select($this->tableName.'.*')
        ->when(isset($conds['order_by']) && $conds['order_by'] , function ($q) use($sort){
            if($sort == $this->blogLocationCityIdCol.'@@name')
            {
                $q->join($this->locationCityTableName, $this->locationCityTableName.'.'.$this->locationCityIdCol, '=', $this->blogLocationCityIdCol);
                $q->select($this->locationCityTableName.'.'.$this->locationCityNameCol.' as city_name', $this->tableName.'.*');
            }
        })
        ->when($relation, function ($q, $relation){
            $q->with($relation);
        })
        ->when($status, function ($q, $status){
            $q->where($this->blogStatusCol, $status);
        })
        ->when($limit, function ($query, $limit) {
            $query->limit($limit);
        })
        ->when($offset, function ($query, $offset) {
            $query->offset($offset);
        })
        ->when($conds, function ($query, $conds) {
            $query = $this->searching($query, $conds);
        })
        ->when(empty($sort), function ($query, $conds){
            $query->orderBy($this->tableName.'.'.$this->blogStatusCol, 'desc')->orderBy($this->tableName.'.'.$this->blogNameCol, 'asc');
        });
        if ($pagPerPage){
            $blogs = $blogs->paginate($pagPerPage)->onEachSide(1)->withQueryString();
        } elseif ($noPagination){
            $blogs = $blogs->get();
        }
        return $blogs;
    }

    public function searching($query, $conds){
        // search term
        if (isset($conds['searchterm']) && $conds['searchterm']) {
            $search = $conds['searchterm'];
            $query->where(function ($query) use ($search) {
                $query->where($this->tableName . '.' . $this->blogNameCol, 'like', '%' . $search . '%');
            });
        }

        if(isset($conds[$this->blogLocationCityIdCol]) && $conds[$this->blogLocationCityIdCol]){
            $city_filter = $conds[$this->blogLocationCityIdCol];
            $query->whereHas('city', function($q) use($city_filter){
                $q->where($this->tableName .'.'.$this->blogLocationCityIdCol, $city_filter);
            });
        }

        if (isset($conds['added_user_id']) && $conds['added_user_id']) {
            $query->where($this->tableName .'.'.$this->itmAddedUserIdCol, $conds['added_user_id']);
        }


        // order by
        if (isset($conds['order_by']) && isset($conds['order_type']) && $conds['order_by'] && $conds['order_type']){

            if($conds['order_by'] == 'id'){
                $query->orderBy($this->tableName.'.'.$this->blogIdCol, $conds['order_type']);
            }
            else{
                $query->orderBy($conds['order_by'], $conds['order_type']);
            }
        }

        return $query;
    }

    public function getBlog($id, $relation = null){
        $blog = Blog::where($this->blogIdCol, $id)
        ->when($relation, function ($q, $relation) {
            $q->with($relation);
        })->first();
        return $blog;
    }

    public function getImages($blog){
        $images = CoreImage::where($this->coreImageImgParentIdCol, $blog->id)->get();
        return $images;
    }

    public function getImage($conds){
        $image = $this->imageService->getImage($conds);
        return $image;
    }

    public function makePublishOrUnpublish($id){
        $blog = Blog::find($id);
        if($blog->status == $this->publish){
            $blog->status = $this->unPublish;
        }else{
            $blog->status = $this->publish;
        }
        $blog->updated_user_id = Auth::user()->id;
        $blog->update();
    }

    //--------------

    public function index($routeName,$request){
        // check permission
        //$checkPermission = $this->checkPermission($this->viewAnyAbility, Blog::class, "admin.index");


        // search filter
        $conds['searchterm'] = $request->input('search') ?? '';
        $conds['location_city_id'] =$request->input('city_filter') == "all" ? null : $request->city_filter;

        $conds['order_by']= null;
        $conds['order_type'] = null;
        $row = $request->input('row') ?? Constants::dataTableDefaultRow;

        if($request->sort_field)
        {
            $conds['order_by'] = $request->sort_field;
            $conds['order_type'] = $request->sort_order;
        }

        $relations = ['city', 'owner', 'editor'];
        $blogs = BlogWithKeyResource::collection($this->getBlogs($relations,null, null,null,false,  $row, $conds));


        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption();
        $showBlogCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];
        $cities = $this->locationCityService->getLocationCities(null, $this->publish);

         // changing item arr object with new format
         $changedBlogObj = $blogs;

         if($conds['order_by'])
         {
             $dataArr = [
                 //"checkPermission" => $checkPermission,
                 'showCoreAndCustomFieldArr' => $columnProps,
                 'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                 'cities' => $cities,
                 // 'owners' => $owners,
                 'blogs' => $changedBlogObj,
                 'sort_field' =>$conds['order_by'],
                 'sort_order'=>$request->sort_order,
                 'search'=>$conds['searchterm'] ,
                 // 'uis'=>$uis,
             ];
         }
         else
         {
             $dataArr = [
                 //"checkPermission" => $checkPermission,
                 'showCoreAndCustomFieldArr' => $columnProps,
                 'hideShowFieldForFilterArr' => $columnFilterOptionProps,
                 'cities' => $cities,
                 // 'owners' => $owners,
                 'blogs' => $changedBlogObj,
                 'search'=>$conds['searchterm'] ,
                 // 'uis'=>$uis,
             ];
         }

         return $dataArr;

    }

    public function edit($id, $routeName)
    {
        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        $dataWithRelation = ['cover', 'city'];
        $blog = $this->getBlog($id, $dataWithRelation);
        // check permission start
       // $checkPermission = $this->checkPermission($this->editAbility, $blog, "admin.index");
        // check permission end
        $cities = $this->locationCityService->getLocationCityList(null, $this->publish);
        $dataArr = [
            //"checkPermission" => $checkPermission,
            "blog" => $blog,
            "cities" => $cities,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];
        return $dataArr;
    }

    public function destroy($id){
        $blog = Blog::find($id);

        // check permission start
        //$checkPermission = $this->checkPermission($this->deleteAbility, $blog, "admin.index");
        // check permission end

        $name = $blog->name;

        $images = $this->getImages($blog);

        deleteImages($images);
        $blog->delete();

        $dataArr = [
           // "checkPermission" => $checkPermission,
            "msg" =>  __('core__be_delete_success', ['attribute' => $name]),
            "flag" => $this->successFlag
        ];

        return $dataArr;
    }

    public function takingForColumnProps($label, $field, $type, $isShowSorting, $ordering){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->field = $field;
        $hideShowCoreAndCustomFieldObj->type = $type;
        $hideShowCoreAndCustomFieldObj->sort = $isShowSorting;
        $hideShowCoreAndCustomFieldObj->ordering = $ordering;
        if ($type !== "Image" && $type !== "MultiSelect" && $type !== "Action"){
            $hideShowCoreAndCustomFieldObj->action = 'Action';
        }

        return $hideShowCoreAndCustomFieldObj;
    }

    public function takingForColumnAndFilterOption(){

        // for table
        $hideShowCoreFieldForColumnArr = [];
        $hideShowCustomFieldForColumnArr = [];

        $showProductCols = [];

        // for eye
        $hideShowFieldForColumnFilterArr = [];

        // for control
        $controlFieldArr = [];
        $controlFieldObj = $this->takingForColumnProps(__('core__be_action'), "action", "Action", false, 0);
        array_push($controlFieldArr, $controlFieldObj);

        $code = $this->code;
        $hiddenForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->hide, $code);
        $shownForCoreAndCustomField = $this->hiddenShownForCoreAndCustomField($this->show, $code);
        $hideShowForCoreAndCustomFields = $shownForCoreAndCustomField->merge($hiddenForCoreAndCustomField);

        foreach ($hideShowForCoreAndCustomFields as $showFields){
            if ($showFields->coreField !== null) {

                $label = $showFields->coreField->label_name;
                $field = $showFields->coreField->field_name;
                $colName = $showFields->coreField->field_name;
                $type = $showFields->coreField->data_type;
                $isShowSorting = $showFields->coreField->is_show_sorting;
                $ordering = $showFields->coreField->ordering;

                $cols = $colName;
                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->coreField->module_name;
                $keyId = $showFields->coreField->id;

                $coreFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
                $coreFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $coreFieldObjForColumnFilter);
                array_push($hideShowCoreFieldForColumnArr, $coreFieldObjForColumnsProps);
                array_push($showProductCols, $cols);

            }if ($showFields->customizeField !== null) {

                $label = $showFields->customizeField->name;
                $uiHaveAttribute = [$this->dropDownUi, $this->radioUi];
                if (in_array($showFields->customizeField->ui_type_id, $uiHaveAttribute)){
                    $field = $showFields->customizeField->core_keys_id."@@name";
                } else {
                    $field = $showFields->customizeField->core_keys_id;
                }
                $type = $showFields->customizeField->data_type;
                $isShowSorting = $showFields->customizeField->is_show_sorting;
                $ordering = $showFields->customizeField->ordering;

                $id = $showFields->id;
                $hidden = $showFields->is_show ? false : true;
                $moduleName = $showFields->customizeField->module_name;
                $keyId = $showFields->customizeField->core_keys_id;

                $customFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type, $isShowSorting, $ordering);
                $customFieldObjForColumnFilter = $this->takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId);

                array_push($hideShowFieldForColumnFilterArr, $customFieldObjForColumnFilter);
                array_push($hideShowCustomFieldForColumnArr, $customFieldObjForColumnsProps);

            }
        }

        // for columns props
        $showCoreAndCustomFieldArr = array_merge($hideShowCoreFieldForColumnArr, $controlFieldArr, $hideShowCustomFieldForColumnArr);
        $sortedColumnArr = columnOrdering("ordering", $showCoreAndCustomFieldArr);


        // for eye
        $hideShowCoreAndCustomFieldArr = array_merge($hideShowFieldForColumnFilterArr);

        $dataArr = [
            "arrForColumnProps" => $sortedColumnArr,
            "arrForColumnFilterProps" => $hideShowCoreAndCustomFieldArr,
            "showCoreField" => $showProductCols,
        ];
        return $dataArr;

    }

    public function makeColumnHideShown($request){
        $hideShowFields = $request->value;
//        foreach ($hideShowFields as $hideShowField){
//            $ScreenDisplayUiSetting = ScreenDisplayUiSetting::find($hideShowField[$this->screenDisplayUiIdCol]);
//            $ScreenDisplayUiSetting->is_show = $hideShowField['hidden'] ? $this->hide : $this->show;
//            $ScreenDisplayUiSetting->update();
//        }
        foreach ($hideShowFields as $hideShowField){
            $hideShowFieldData[] = [
                'id' => $hideShowField['id'],
                'is_show' => $hideShowField['hidden'] ? $this->hide : $this->show,
            ];
        }
        ScreenDisplayUiSetting::upsert(
            $hideShowFieldData,
            ['id'], ['is_show']
        );
    }


    public function hiddenShownForCoreAndCustomField($isShown, $code){
        $hiddenShownForFields = ScreenDisplayUiSetting::with(['customizeField' => function ($q){
            $q->where($this->customUiIsDelCol, $this->unDelete);
        }, 'coreField' => function($q){
            $q->where($this->coreFieldFilterModuleNameCol, $this->code);
        }])
            ->where($this->coreFieldFilterModuleNameCol, $code)
            ->where($this->screenDisplayUiIsShowCol, $isShown)
            ->get();
        return $hiddenShownForFields;
    }

    public function takingForColumnFilterProps($id, $label, $field, $hidden, $moduleName, $keyId){
        $hideShowCoreAndCustomFieldObj = new \stdClass();
        $hideShowCoreAndCustomFieldObj->id = $id;
        $hideShowCoreAndCustomFieldObj->label = $label;
        $hideShowCoreAndCustomFieldObj->key = $field;
        $hideShowCoreAndCustomFieldObj->hidden = $hidden;
        $hideShowCoreAndCustomFieldObj->module_name = $moduleName;
        $hideShowCoreAndCustomFieldObj->key_id = $keyId;

        return $hideShowCoreAndCustomFieldObj;
    }

    // for api
    public function noDataError($offset, $data){
        if ($offset > 0 && $data->isEmpty()) {
            // no paginate data
            $data = [];
            return responseDataApi($data);

        } else if($data->isEmpty()) {
            // no data db
            return responseMsgApi(__('core__no_data'), $this->noContentStatusCode, $this->successStatus);
        }
    }


    public function searchFromApi($request){
        $offset = $request->offset;
        $limit = $request->limit;

        $conds['keyword'] = $request->keyword;
        $conds['location_city_id'] = $request->location_city_id;
        $conds['order_by'] = $request->order_by;
        $conds['order_type'] = $request->order_type;

        $blogApiRelation = $this->blogApiRelation;
        $blogs = $this->getBlogs($blogApiRelation, $this->publish, $limit, $offset, $conds);

        return $blogs;

    }

}
