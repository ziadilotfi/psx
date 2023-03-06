<?php
namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Illuminate\Support\Facades\DB;
use Modules\Core\Entities\BackendSetting;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreFieldFilterSetting;
use Modules\Core\Entities\CoreImage;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Http\Services\ImageService;
use Modules\Core\Transformers\Backend\Model\BackendSetting\BackendSettingWithKeyResource;

class BackendSettingService extends PsService
{
    protected $backendLoginImgType, $favIconImgType, $logoImgType, $imageService, $coreImageImgParentIdCol, $coreImageImgTypeCol, $imgType, $show, $hide, $delete, $unDelete, $viewAnyAbility, $createAbility, $editAbility, $deleteAbility, $code, $screenDisplayUiKeyCol, $screenDisplayUiIdCol, $screenDisplayUiIsShowCol, $coreFieldFilterModuleNameCol, $customUiIsDelCol;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
        $this->coreImageImgParentIdCol = CoreImage::imgParentId;
        $this->coreImageImgTypeCol = CoreImage::imgType;
        $this->logoImgType = 'backend-logo';
        $this->favIconImgType = 'fav-icon';
        $this->backendLoginImgType = 'backend-login-image';

        $this->show = Constants::show;
        $this->hide = Constants::hide;
        $this->delete = Constants::delete;
        $this->unDelete = Constants::unDelete;

        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->createAbility = Constants::createAbility;
        $this->editAbility = Constants::editAbility;
        $this->deleteAbility = Constants::deleteAbility;
        $this->code = Constants::backendSetting;

        $this->screenDisplayUiKeyCol = ScreenDisplayUiSetting::key;
        $this->screenDisplayUiIdCol = ScreenDisplayUiSetting::id;
        $this->screenDisplayUiIsShowCol = ScreenDisplayUiSetting::isShow;

        $this->coreFieldFilterModuleNameCol = CoreFieldFilterSetting::moduleName;

        $this->customUiIsDelCol = CustomizeUi::isDelete;
    }

    public function create($request)
    {
        DB::beginTransaction();
        try {
            $backend_setting = new BackendSetting();
            $backend_setting->sender_name = $request->sender_name;
            $backend_setting->sender_email = $request->sender_email;
            $backend_setting->receive_email = $request->receive_email;
            $backend_setting->fcm_api_key = $request->fcm_api_key;
            $backend_setting->app_token = $request->app_token;
            $backend_setting->topics = $request->topics;
            $backend_setting->topics_fe = $request->topics_fe;
            $backend_setting->smtp_host = $request->smtp_host;
            $backend_setting->smtp_port = $request->smtp_port;
            $backend_setting->smtp_user = $request->smtp_user;
            $backend_setting->smtp_pass = $request->smtp_pass;
            $backend_setting->smtp_encryption = $request->smtp_encryption;
            $backend_setting->email_verification_enabled = $request->email_verification_enabled;
            $backend_setting->user_social_info_override = $request->user_social_info_override;
            $backend_setting->landscape_width = $request->landscape_width;
            $backend_setting->potrait_height = $request->potrait_height;
            $backend_setting->square_height = $request->square_height;
            $backend_setting->landscape_thumb_width = $request->landscape_thumb_width;
            $backend_setting->potrait_thumb_height = $request->potrait_thumb_height;
            $backend_setting->square_thumb_height = $request->square_thumb_height;
            $backend_setting->landscape_thumb2x_width = $request->landscape_thumb2x_width;
            $backend_setting->potrait_thumb2x_height = $request->potrait_thumb2x_height;
            $backend_setting->square_thumb2x_height = $request->square_thumb2x_height;
            $backend_setting->landscape_thumb3x_width = $request->landscape_thumb3x_width;
            $backend_setting->potrait_thumb3x_height = $request->potrait_thumb3x_height;
            $backend_setting->square_thumb3x_height = $request->square_thumb3x_height;
            $backend_setting->dyn_link_key = $request->dyn_link_key;
            $backend_setting->dyn_link_url = $request->dyn_link_url;
            $backend_setting->dyn_link_package_name = $request->dyn_link_package_name;
            $backend_setting->dyn_link_domain = $request->dyn_link_domain;
            $backend_setting->dyn_link_deep_url = $request->dyn_link_deep_url;
            $backend_setting->ios_boundle_id = $request->ios_boundle_id;
            $backend_setting->ios_appstore_id = $request->ios_appstore_id;
            $backend_setting->backend_version_no = $request->backend_version_no;
            $backend_setting->slow_moving_item_limit = $request->slow_moving_item_limit;
            $backend_setting->search_item_limit = $request->search_item_limit;
            $backend_setting->search_user_limit = $request->search_user_limit;
            $backend_setting->search_category_limit = $request->search_category_limit;
            $backend_setting->date_format = $request->date_format;
            $backend_setting->added_user_id = Auth::user()->id;
            $backend_setting->save();

            // save backend-logo
            if ($request->file('backend_logo')){
                $file = $request->file('backend_logo');
                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->logoImgType;
                $this->imageService->insertImage($file, $data);
            }

            // save fav-icon
            if ($request->file('fav_icon')){
                $file = $request->file('fav_icon');
                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->favIconImgType;
                $this->imageService->insertImage($file, $data);
            }

            // save backend-login-image
            if ($request->file('backend_login_image')){
                $file = $request->file('backend_login_image');
                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->backendLoginImgType;
                $this->imageService->insertImage($file, $data);
            }
            DB::commit();
        } catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }

        return $backend_setting;
    }

    public function update($id,$request)
    {
        DB::beginTransaction();
        try {
            $backend_setting = BackendSetting::find($id);
            $backend_setting->sender_name = $request->sender_name;
            $backend_setting->sender_email = $request->sender_email;
            $backend_setting->receive_email = $request->receive_email;
            $backend_setting->fcm_api_key = $request->fcm_api_key;
            $backend_setting->app_token = $request->app_token;
            $backend_setting->topics = $request->topics;
            $backend_setting->topics_fe = $request->topics_fe;
            $backend_setting->smtp_host = $request->smtp_host;
            $backend_setting->smtp_port = $request->smtp_port;
            $backend_setting->smtp_user = $request->smtp_user;
            $backend_setting->smtp_pass = $request->smtp_pass;
            $backend_setting->smtp_encryption = $request->smtp_encryption;
            $backend_setting->email_verification_enabled = $request->email_verification_enabled;
            $backend_setting->user_social_info_override = $request->user_social_info_override;
            $backend_setting->landscape_width = $request->landscape_width;
            $backend_setting->potrait_height = $request->potrait_height;
            $backend_setting->square_height = $request->square_height;
            $backend_setting->landscape_thumb_width = $request->landscape_thumb_width;
            $backend_setting->potrait_thumb_height = $request->potrait_thumb_height;
            $backend_setting->square_thumb_height = $request->square_thumb_height;
            $backend_setting->landscape_thumb2x_width = $request->landscape_thumb2x_width;
            $backend_setting->potrait_thumb2x_height = $request->potrait_thumb2x_height;
            $backend_setting->square_thumb2x_height = $request->square_thumb2x_height;
            $backend_setting->landscape_thumb3x_width = $request->landscape_thumb3x_width;
            $backend_setting->potrait_thumb3x_height = $request->potrait_thumb3x_height;
            $backend_setting->square_thumb3x_height = $request->square_thumb3x_height;
            $backend_setting->dyn_link_key = $request->dyn_link_key;
            $backend_setting->dyn_link_url = $request->dyn_link_url;
            $backend_setting->dyn_link_package_name = $request->dyn_link_package_name;
            $backend_setting->dyn_link_domain = $request->dyn_link_domain;
            $backend_setting->dyn_link_deep_url = $request->dyn_link_deep_url;
            $backend_setting->ios_boundle_id = $request->ios_boundle_id;
            $backend_setting->ios_appstore_id = $request->ios_appstore_id;
            $backend_setting->backend_version_no = $request->backend_version_no;
            $backend_setting->slow_moving_item_limit = $request->slow_moving_item_limit;
            $backend_setting->search_item_limit = $request->search_item_limit;
            $backend_setting->search_user_limit = $request->search_user_limit;
            $backend_setting->search_category_limit = $request->search_category_limit;
            $backend_setting->date_format = $request->date_format;
            $backend_setting->updated_user_id = Auth::user()->id;
            $backend_setting->update();

            // update backend-logo
            if ($request->file('backend_logo')){

                $file = $request->file('backend_logo');

                $conds[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $conds[$this->coreImageImgTypeCol] = $this->logoImgType;
                $image = CoreImage::where($conds)->first();

                // if image, delete existing file
                if(!empty($image)){
                    // delete image from storage folder
                    $this->imageService->deleteImage($image->img_path);
                }

                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->logoImgType;
                $this->imageService->insertImage($file, $data, $image);
            }

            // update fav-icon
            if ($request->file('fav_icon')){

                $file = $request->file('fav_icon');

                $conds[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $conds[$this->coreImageImgTypeCol] = $this->favIconImgType;
                $image = CoreImage::where($conds)->first();

                // if image, delete existing file
                if(!empty($image)){
                    // delete image from storage folder
                    $this->imageService->deleteImage($image->img_path);
                }

                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->favIconImgType;
                $this->imageService->insertImage($file, $data, $image);
            }

            // update backend-login-image
            if ($request->file('backend_login_image')){

                $file = $request->file('backend_login_image');

                $conds[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $conds[$this->coreImageImgTypeCol] = $this->backendLoginImgType;
                $image = CoreImage::where($conds)->first();

                // if image, delete existing file
                if(!empty($image)){
                    // delete image from storage folder
                    $this->imageService->deleteImage($image->img_path);
                }

                $data[$this->coreImageImgParentIdCol] = $backend_setting->id;
                $data[$this->coreImageImgTypeCol] = $this->backendLoginImgType;
                $this->imageService->insertImage($file, $data, $image);
            }
            DB::commit();
        }catch (\Throwable $e){
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
        return $backend_setting;
    }

    public function getBackendSetting(){
        $backend_setting = BackendSetting::with(['backend_logo','fav_icon', 'backend_login_image'])->first();
        return $backend_setting;
    }

    // --------------
	public function index($routeName){

        $code = $this->code;
        $coreFieldFilterSettings = $this->getCoreFieldFilteredLists($code);
        // check permission
        $checkPermission = $this->checkPermission($this->viewAnyAbility, BackendSetting::class, "admin.index");

        $backend_setting = $this->getBackendSetting();

        // taking for column and columnFilterOption
        // $columnAndColumnFilter = $this->takingForColumnAndFilterOption();
        // $showRoleCols = $columnAndColumnFilter['showCoreField'];
        // $columnProps = $columnAndColumnFilter['arrForColumnProps'];
        // $columnFilterOptionProps = $columnAndColumnFilter['arrForColumnFilterProps'];

        $dataArr = [
            'checkPermission' => $checkPermission,
            'backend_setting' => $backend_setting,
            // 'showRoleCols' => $showRoleCols,
            // 'showCoreAndCustomFieldArr' => $columnProps,
            // 'hideShowFieldForFilterArr' => $columnFilterOptionProps,
            'coreFieldFilterSettings' => $coreFieldFilterSettings
        ];
        return $dataArr;
    }


    public function getCoreFieldFilteredLists($code){
        return CoreFieldFilterSetting::where($this->coreFieldFilterModuleNameCol, $code)->get();
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

}
