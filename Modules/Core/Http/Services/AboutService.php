<?php
namespace Modules\Core\Http\Services;

use App\Config\ps_constant;
use App\Http\Services\PsService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreAbout;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CoreImage;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Http\Services\ImageService;
use Modules\Core\Transformers\Api\App\V1_0\About\AboutApiResource;
use Modules\Core\Transformers\Backend\Model\About\AboutWithKeyResource;
use Modules\DataDeletionPolicy\Http\Services\DataDeletionPolicyService;

class AboutService extends PsService
{
    protected $imageService, $coreImageImgParentIdCol, $coreImageImgTypeCol, $imgType, $dataDeletionPolicyService, $noContentStatusCode, $successStatus, $show, $hide, $delete, $unDelete, $viewAnyAbility, $createAbility, $editAbility, $deleteAbility, $code, $screenDisplayUiKeyCol, $screenDisplayUiIdCol, $screenDisplayUiIsShowCol, $coreFieldFilterModuleNameCol, $customUiIsDelCol, $deviceTokenParaApi, $loginUserIdParaApi, $userAccessApiTokenService, $forbiddenStatusCode;

    public function __construct(ImageService $imageService, DataDeletionPolicyService $dataDeletionPolicyService, UserAccessApiTokenService $userAccessApiTokenService)
    {
        $this->imageService = $imageService;
        $this->coreImageImgParentIdCol = CoreImage::imgParentId;
        $this->coreImageImgTypeCol = CoreImage::imgType;
        $this->imgType = "about";
        $this->aboutApiRelation = ['defaultPhoto'];

        $this->dataDeletionPolicyService = $dataDeletionPolicyService;

        $this->noContentStatusCode = Constants::noContentStatusCode;
        $this->successStatus = Constants::successStatus;
        $this->forbiddenStatusCode = Constants::forbiddenStatusCode;

        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->code = Constants::about;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;

        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;

        $this->customUiIsDelCol = CustomizeUi::isDelete;

        $this->userAccessApiTokenService = $userAccessApiTokenService;
        $this->loginUserIdParaApi = ps_constant::loginUserIdParaFromApi;
        $this->deviceTokenParaApi = ps_constant::deviceTokenKeyFromApi;
    }

    public function create($request)
    {
        DB::beginTransaction();
        try {
            $about = new CoreAbout();
            $about->about_title = $request->about_title;
            $about->about_description = $request->about_description;
            $about->about_email = $request->about_email;
            $about->about_phone = $request->about_phone;
            $about->about_address = $request->about_address;
            $about->about_website = $request->about_website;
            $about->facebook = $request->facebook;
            $about->google_plus = $request->google_plus;
            $about->instagram = $request->instagram;
            $about->youtube = $request->youtube;
            $about->pinterest = $request->pinterest;
            $about->twitter = $request->twitter;
            $about->GDPR = $request->GDPR;
            $about->upload_point = $request->upload_point;
            $about->safety_tips = $request->safety_tips;
            $about->faq_pages = $request->faq_pages;
            $about->terms_and_conditions = $request->terms_and_conditions;
            $about->added_user_id = Auth::user()->id;
            $about->save();

            // save image
            if ($request->file('about_cover')){

                $file = $request->file('about_cover');

                $data[$this->coreImageImgParentIdCol] = $about->id;
                $data[$this->coreImageImgTypeCol] = $this->imgType;
                $this->imageService->insertImage($file, $data);
            }
            DB::commit();
        }catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }

        return $about;
    }

    public function update($id,$request)
    {
        DB::beginTransaction();
        try {
            $about = CoreAbout::find($id);
            $about->about_title = $request->about_title;
            $about->about_description = $request->about_description;
            $about->about_email = $request->about_email;
            $about->about_phone = $request->about_phone;
            $about->about_address = $request->about_address;
            $about->about_website = $request->about_website;
            $about->facebook = $request->facebook;
            $about->google_plus = $request->google_plus;
            $about->instagram = $request->instagram;
            $about->youtube = $request->youtube;
            $about->pinterest = $request->pinterest;
            $about->twitter = $request->twitter;
            $about->GDPR = $request->GDPR;
            $about->upload_point = $request->upload_point;
            $about->safety_tips = $request->safety_tips;
            $about->faq_pages = $request->faq_pages;
            $about->terms_and_conditions = $request->terms_and_conditions;
            $about->updated_user_id = Auth::user()->id;
            $about->update();

            // update image
            if ($request->file('about_cover')){
                $file = $request->file('about_cover');

                $conds[$this->coreImageImgParentIdCol] = $about->id;
                $conds[$this->coreImageImgTypeCol] = $this->imgType;
                $image = $this->imageService->getImage($conds);

                // if image, delete existing file
                deleteImage($image);

                $data[$this->coreImageImgParentIdCol] = $about->id;
                $data[$this->coreImageImgTypeCol] = $this->imgType;
                $this->imageService->insertImage($file, $data, $image);
            }
            DB::commit();
        }catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }

        return $about;
    }

    // ----------
    public function index($routeName){

        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        // check permission
        $checkPermission = $this->checkPermission($this->viewAnyAbility, CoreAbout::class, "admin.index");

        $about = $this->getAbout();
        if($about){
            $about = new AboutWithKeyResource($about);
        }
        //return $about;

        $conds[$this->coreImageImgTypeCol] = $this->imgType;
        $image = CoreImage::where($conds)->get();

        // taking for column and columnFilterOption
        $columnAndColumnFilter = $this->takingForColumnAndFilterOption();
        $showAboutCols = $columnAndColumnFilter['showCoreField'];
        $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        $dataArr = [
            'checkPermission' => $checkPermission,
            'about' => $about,
            'image' => $image,
            'showAboutCols' => $showAboutCols,
            'showCoreAndCustomFieldArr' => $columnProps,
            'hideShowFieldForFilterArr' => $columnFilterOptionProps,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];
        return $dataArr;
    }

    public function getCoreFieldFilteredLists($code){
        return CoreFieldFilterSetting::where($this->coreFieldFilterModuleNameCol, $code)->get();
    }

    public function getAbout($relation = null)
    {
        $about = CoreAbout::when($relation, function ($q, $relation){
                                    $q->with($relation);
                                })
                                ->first();
        return $about;
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

            $coreFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type,$isShowSorting, $ordering);
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

            $customFieldObjForColumnsProps = $this->takingForColumnProps($label, $field, $type ,$isShowSorting, $ordering);
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

    public function hiddenShownForCoreAndCustomField($isShown, $code){
        $hiddenShownForFields = ScreenDisplayUiSetting::with(['customizeField' => function ($q){
        $q->where($this->customUiIsDelCol, $this->unDelete);
        }, 'coreField'=> function($q){
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
    public function indexFromApi($request)
    {
        $aboutApiRelation = $this->aboutApiRelation;

        $about = new AboutApiResource($this->getAbout($aboutApiRelation));

        if($about) {
            return responseDataApi($about);
        } else {
            // no data db
            return responseMsgApi(__('core__api_no_data'), $this->noContentStatusCode, $this->successStatus);
        }
    }
}
