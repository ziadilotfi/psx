<?php
namespace Modules\Core\Http\Controllers\Backend\Controllers\Item;

use App\Config\ps_config;
use App\Config\ps_constant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Modules\Core\Constants\Constants;
// use Modules\Core\Entities\CoreImage;
// use Modules\Core\Entities\Item;
use Modules\Core\Http\Services\ItemService;
use Modules\Core\Http\Services\ImageService;
use Modules\Core\Http\Services\SystemConfigService;
use Session;

class ItemController extends Controller
{
    const parentPath = "item/";
    const indexPath = self::parentPath.'Index';
    const createPath = self::parentPath.'Create';
    const editPath = self::parentPath.'Edit';
    const indexRoute = "item.index";

    protected $imageService,$paginationPerPage, $systemConfigService, $dangerFlag ,$successFlag, $itemService, $code, $parentPath, $getImgPath, $coreFieldFilterForRelation, $viewAnyAbility ,$createAbility, $editAbility, $deleteAbility;

    public function __construct(ImageService $imageService,ItemService $itemService, SystemConfigService $systemConfigService)
    {
        $this->itemService = $itemService;
        $this->systemConfigService = $systemConfigService;
        $this->code = Constants::item;
        $this->parentPath = Constants::parentPath;
        $this->getImgPath = Constants::imgPath;
        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->coreFieldFilterForRelation = ps_config::coreFieldFilterForRelation;
        $this->paginationPerPage = ps_config::pagPerPage;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->imageService = $imageService;
    }

    public function index(Request $request)
    {
        $dataArr = $this->itemService->index($request);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        // Session::put('items_url',request()->fullUrl());


        // return $dataArr;
        // dd($dataArr);
        return renderView(self::indexPath, $dataArr);
    }

    public function create()
    {
        $dataArr = $this->itemService->create(self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(Request $request)
    {
        //prepare for validation
        $errors = validateForCustomField($this->code,$request->product_relation);

        //validation
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3|unique:psx_items,title',
            'description' => 'required',
            'category_id' => 'required|exists:psx_categories,id',
            // 'subcategory_id' => 'required|exists:psx_subcategories,id',
            'location_city_id' => 'required|exists:psx_location_cities,id',
            'currency_id' => 'required|exists:psx_currencies,id',
            // 'location_township_id' => 'required|exists:psx_location_townships,id',
            'price' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'cover' => 'required|image|file|mimes:jpg,png,jpeg',
            'video_icon' => 'nullable|image',
            // 'video' => 'nullable|file|mimes:mp4|max:1500'
        ]);

        if ($validator->fails()) {
            return redirect()->route('item.create')->with('product_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route('item.create')->with('product_relation_errors',$errors);
            }
        }

        $product = $this->itemService->store($request);
        if (isset($product['error'])){
            // go back to index
            $msg = $product['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        $msg = __('core__be_item_created');
        return redirectView(self::indexRoute, $msg);
    }

    public function edit($id)
    {
        $dataArr = $this->itemService->edit($id, self::indexRoute);

        // check permission
        $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        // return $dataArr['item'];
        return renderView(self::editPath, $dataArr);
    }

    public function update(Request $request)
    {
        //prepare for validation
        $errors = validateForCustomField($this->code,$request->product_relation);

        //validation
        $validator = Validator::make($request->all(), [
            'title' => 'required|min:3|unique:psx_items,title,'.$request->id,
            'description' => 'required',
            'category_id' => 'required|exists:psx_categories,id',
            // 'subcategory_id' => 'required|exists:psx_subcategories,id',
            'location_city_id' => 'required|exists:psx_location_cities,id',
            'currency_id' => 'required|exists:psx_currencies,id',
            // 'location_township_id' => 'required|exists:psx_location_townships,id',
            'price' => 'required',
            'lat' => 'required',
            'lng' => 'required',
            'cover' => 'nullable|image',
            'video_icon' => 'nullable|image',
            // 'video_icon' => 'nullable|file|mimes:jpg,png,jpeg',
            // 'video' => 'nullable|file|mimes:mp4|max:1500'
        ]);

        if ($validator->fails()) {
            return redirect()->route('item.edit',$request->id)->with('product_relation_errors',$errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()){
                return redirect()->route('item.edit',$request->id)->with('product_relation_errors',$errors);
            }
        }

        $product = $this->itemService->update($request);

        if (isset($product['error'])){
            // go back to index
            $msg = $product['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->itemService->destroy($id, self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function duplicateRow($id){

        // echo json_encode($id);exit;
        $item = $this->itemService->getItem($id);

        $systemConfig = $this->systemConfigService->getSystemConfig();
        if($systemConfig->is_approved_enable == 1){
            $status = 0;
        }else{
            $status = $item->status;
        }

        // update data for duplicate item
        $update_copies = [
            'title' => 'Copy of ' . $item->title,
            'status' => $status,
            'added_user_id' => $item->added_user_id,
            'added_date' => Carbon::now(),
            'updated_user_id' => null,
            'updated_date' => null,
        ];

        $duplicate = duplicate($item, $update_copies, true);

        // For deeplink generate for duplicate item
        $img_conds['img_parent_id'] = $duplicate->id;
        $img_conds['img_type'] = 'item';
        $image = $this->imageService->getImage($img_conds);
        // $image = CoreImage::where(['img_parent_id' => $duplicate->id, 'img_type' => 'item'])->first();
        $img = empty($image) ? '' : $image->img_path;

        $dynamic_link = deeplinkGenerate($duplicate->id, $duplicate->title, $duplicate->description, $img);

        $duplicate->dynamic_link  = $dynamic_link;
        $duplicate->update();

        $status = [
            'flag' => 'success',
            // 'msg' => 'The '.$item->title.' row has been duplicated successfully.',
            'msg' => __('core__be_duplicate_success',['attribute'=>$item->title])
        ];

        if($duplicate->status == 1){
            return redirect()->route('item.index')->with('status',$status);
        }else{
            return redirect()->route('pending_item.index')->with('status',$status);
        }


    }

    public function deeplink($id){

        // echo json_encode($id);exit;
        $item = $this->itemService->getItem($id);

        $img_conds['img_parent_id'] = $item->id;
        $img_conds['img_type'] = 'item';
        $img = $this->imageService->getImage($img_conds)->img_path;

        // $img = CoreImage::where(['img_parent_id' => $item->id, 'img_type' => 'item'])->first()->img_path;

        $dynamic_link = deeplinkGenerate($item->id, $item->title, $item->description, $img);

        $item->dynamic_link = $dynamic_link;
        $item->update();

        $status = [
            'flag' => 'success',
            // 'msg' => 'The deeplink of '.$item->title.' row has been generated successfully.',
            'msg' => __('core__be_deep_link_generate',['attribute'=>$item->title])

        ];

        return redirect()->route('item.index')->with('status',$status);
    }

    public function screenDisplayUiStore(Request $request) {
        $parameter = ['page' => $request->current_page];
        $this->itemService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function statusChange($id){
        // dd("here");

        $this->itemService->makePublishOrUnpublish($id);


        // $dataArr = $this->itemService->index($request);
        // // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }

        $status = [
            'flag' => 'success',
            // 'msg' => 'The status of item has been updated successfully.',
            'msg' => __('core__be_status_attribute_updated',['attribute'=>__('core__be_item_label')])

        ];


        return redirect()->route('item.index')->with('status',$status);

    }

}


