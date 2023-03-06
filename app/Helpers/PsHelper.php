<?php

use App\Config\ps_constant;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Intervention\Image\Facades\Image;
use Modules\Core\Entities\CustomizeUi;
use Modules\Core\Entities\CustomizeUiDetail;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreKey;
use Modules\Core\Entities\CoreKeyType;
use Modules\Core\Entities\Language;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Modules\Core\Entities\CoreImage;
use Illuminate\Support\Facades\Storage;
use Modules\Core\Entities\BackendSetting;
use Modules\Core\Entities\CoreKeyCounter;
use Modules\Core\Entities\Currency;
use Modules\Core\Entities\Item;
use Modules\Core\Entities\LanguageString;
use Modules\Core\Entities\RolePermission;
use Modules\Core\Entities\ScreenDisplayUiSetting;
use Modules\Core\Entities\UserPermission;
use Modules\Core\Entities\UiType;

if (! function_exists('isActive')) {
    /**
     * Set the active class to the current opened menu.
     *
     * @param  string|array $route
     * @param  string       $className
     * @return string
     */
    function isActive($route, $className = 'active')
    {
        if (is_array($route)) {
            return in_array(Route::currentRouteName(), $route) ? $className : '';
        }
        if (Route::currentRouteName() == $route) {
            return $className;
        }
        if (strpos(URL::current(), $route)) {
            return $className;
        }
    }
}

if (! function_exists('columnOrdering')) {
    function columnOrdering($field, $arrObj, $sortType = SORT_ASC)
    {
        $col  = $field;
        $sort = array();
        foreach ($arrObj as $i => $obj) {
            $sort[$i] = $obj->{$col};
        }

        $sorted_db = array_multisort($sort, $sortType, $arrObj);
        return $arrObj;
    }
}


if (! function_exists('deeplinkGenerate')) {
    /**
     * @param String,Integer  $id - item id
     * @param String $title - item title
     * @param String $description - item description
     * @param String $img - item image path
     *
     * @return String generated deeplink short url
     */
    function deeplinkGenerate($id, $title, $description, $img){
        $backend_setting = BackendSetting::first();

		// check description length
		if(strlen($description)>6605){
			$description = substr($description, 0, 6605);
		}

        // $title = strtolower($title);
        // $item_name = str_replace(' ', '-', $title);
        $longUrl= $backend_setting->dyn_link_deep_url.$id;

        $landingPage= env('VITE_APP_URL');

        //Web API Key From Firebase
        $key = $backend_setting->dyn_link_key;

		//Firebase Rest API URL
		$url = $backend_setting->dyn_link_url . $key;

        //To link with Android App, so need to provide with android package name
		$androidInfo = array(
		    "androidPackageName" => $backend_setting->dyn_link_package_name,
            // "androidFallbackLink" => $landingPage,
		);

        //For iOS
		$iOSInfo = array(
            "iosBundleId" => $backend_setting->ios_boundle_id ,
            "iosAppStoreId" => $backend_setting->ios_appstore_id,
            // "iosFallbackLink" => $landingPage,
        );

        //For meta data when share the URL
		$socialMetaTagInfo = array(
		    "socialDescription" => $description,
		    "socialImageLink"   => $img,
		    "socialTitle"       => $title
		);

        //For only 4 character at url
		$suffix = array(
		    "option" => "SHORT"
		);

        $data = array(
            "dynamicLinkInfo" => array(
               "dynamicLinkDomain" => $backend_setting->dyn_link_domain,
            //    "link" => $longUrl,
               "link" => $landingPage,
               "androidInfo" => $androidInfo,
                "iosInfo" => $iOSInfo,
               "socialMetaTagInfo" => $socialMetaTagInfo
            ),
            "suffix" => $suffix
       );

       $headers = array('Content-Type: application/json');

		$ch = curl_init ();
		curl_setopt ( $ch, CURLOPT_URL, $url );
		curl_setopt ( $ch, CURLOPT_POST, true );
		curl_setopt ( $ch, CURLOPT_HTTPHEADER, $headers );
		curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, true );
		curl_setopt ( $ch, CURLOPT_POSTFIELDS, json_encode($data) );

		$data = curl_exec ( $ch );
		curl_close ( $ch );

        if($data != false){
            $short_url = json_decode($data);
            if(isset($short_url->error)){
                return $short_url->error->message;
            } else {
                return $short_url->shortLink;
            }
        }else{
            return '';
        }
    }
}

if(! function_exists('duplicate')) {
    /**
     * @param Model_instatnce $data - original data - array object from table Model
     * @param Array $copies - data to be updated during duplication - array
     * @param Boolean $img_copy (optional) - need or not image file to copy - false is noe copy image file, otherwise is copy img
     *
     * @return Model_instatnce duplicated model
     */
    function duplicate($data, $copies, $img_copy = false)
    {
        // replicate model with customize data from $copies
        $duplicate = $data->replicate()->fill($copies);
        $duplicate->save();

        // 1) update and copy a image record to and from core_images table
        // 2) copy image file from storage
        if ($img_copy == true) {

            $storage_upload_path = '/storage/uploads/';
            $storage_thumb1x_path = '/storage/thumbnail/';
            $storage_thumb2x_path = '/storage/thumbnail2x/';
            $storage_thumb3x_path = '/storage/thumbnail3x/';

            $images = CoreImage::where('img_parent_id', $data->id)->get();
            if (count($images) > 0) {
                foreach ($images as $image) {
                    // duplicate data image to table
                    $image_copies['img_path'] = $duplicate->id . '_' . $image->img_path;
                    $image_copies['img_parent_id'] = $duplicate->id;
                    $duplicate_image = $image->replicate()->fill($image_copies);
                    $duplicate_image->save();

                    // duplicate data image to storage file
                    Storage::copy($storage_upload_path . $image->img_path, $storage_upload_path . $duplicate_image->img_path);
                    Storage::copy($storage_thumb1x_path . $image->img_path, $storage_thumb1x_path . $duplicate_image->img_path);
                    Storage::copy($storage_thumb2x_path . $image->img_path, $storage_thumb2x_path . $duplicate_image->img_path);
                    Storage::copy($storage_thumb3x_path . $image->img_path, $storage_thumb3x_path . $duplicate_image->img_path);
                }
            }
        }

        return $duplicate;
    }
}

if (!function_exists('validateForCustomField')){
    function validateForCustomField($moduleName,$request) {

        $haveValueId = [];
        $customizeHeaderIds = [];
        $errors = [];

        $customizeHeaders = CustomizeUi::where('module_name',$moduleName)->get();
        foreach ($customizeHeaders as $key => $value){
            array_push($customizeHeaderIds,$value->core_keys_id);
        }

        if (!empty($request)){
            foreach ($request as $key => $postRel){

                if (!is_object($postRel)){
                    $coreKeysIdFromReq = $key;
                    $valueFromReq = $postRel;
                } else {
                    $coreKeysIdFromReq = $postRel->core_keys_id;
                    $valueFromReq = $postRel->value;
                }

                if ($valueFromReq !== null){
                    array_push($haveValueId,$coreKeysIdFromReq);
                }
            }
        }
        $result = array_diff( $customizeHeaderIds, $haveValueId);
        foreach ($result as $value){
            foreach ($customizeHeaders as $key=>$value2){
                if ($value === $value2->core_keys_id && $value2->mandatory === 1 && $value2->enable === 1 && $value2->is_delete === 0) {
                    $errMessage = __($value2->name) . " is required.";
                    $errors[$value2->core_keys_id] = $errMessage;

                }
            }
        }

        return $errors;
    }
}

if (!function_exists('validateForCustomFieldFromApi')){
    function validateForCustomFieldFromApi($moduleName,$request) {

        $haveValueId = [];
        $customizeHeaderIds = [];
        $errors = [];


        $customizeHeaders = CustomizeUi::where('module_name',$moduleName)->get();
        foreach ($customizeHeaders as $key => $value){
            array_push($customizeHeaderIds,$value->core_keys_id);
        }


        foreach ($request as $key => $postRel){
            if ($postRel['value'] !== null){
                array_push($haveValueId,$postRel['core_keys_id']);
            }
        }

        $result = array_diff( $customizeHeaderIds, $haveValueId);

        foreach ($result as $value){
            foreach ($customizeHeaders as $key=>$value2){

                if ($value === $value2->core_keys_id && $value2->mandatory === 1 && $value2->enable === 1 && $value2->is_delete === 0) {
                    $errMessage = $value2->name . " is required";
                    $errors[$value2->core_keys_id] = $errMessage;

                }
            }
        }

        return $errors;

    }
}

if (!function_exists('responseMsgApi')){
    function responseMsgApi($message = "Record not Found" ,$code = Constants::notFoundStatusCode, $status = Constants::errorStatus){
        return response([
            "status" => $status,
            "message" =>  $message,
        ],$code);
    }
}

if (!function_exists('responseDataApi')){
    function responseDataApi($message, $code = Constants::okStatusCode){
        return response($message, $code);
    }
}



if (!function_exists('customizeDetailsApi')){
    function custiomizeDetailsApi($coreKeysId, $limit, $offset, $msg = "Record Not Found"){

        $customizeDetails = CustomizeUiDetail::where('core_keys_id',$coreKeysId)
                                            ->latest('id')
                                            ->when($limit, function ($query,$limit){
                                                $query->limit($limit);
                                            })
                                            ->when($offset, function ($query,$offset){
                                                $query->offset($offset);
                                            })
                                            ->get();

        // if not have value
        if ($customizeDetails->isEmpty()){
            return ['error' =>   $msg ];
        }

        return $customizeDetails;
    }

}

if (!function_exists('uiTypesForCustomizeDetails')){
    function uiTypesForCustomizeDetailsApi($coreKeyIdsForUiType, $limit, $offset, $msg = "Record Not Found"){
        $uiTypesForCustomizeDetails = UiType::whereIn("core_keys_id",$coreKeyIdsForUiType)
                                            ->when($limit, function ($query,$limit){
                                                $query->limit($limit);
                                            })
                                            ->when($offset, function ($query,$offset){
                                                $query->offset($offset);
                                            })
                                            ->get();

        // if not have value
        if ($uiTypesForCustomizeDetails->isEmpty()){
            return ['error' =>   $msg ];
        }

        return $uiTypesForCustomizeDetails;
    }
}

if(! function_exists('permissionControl')){
    /**
     * @param $module_id
     * @param $permission_id
     */
    function permissionControl($module_id='',$permission_id=''){

        $loginUserId = Auth::id();
        // check request from api or backend
        if (!empty($_GET['login_user_id'])){
            $loginUserIdFromGet = $_GET['login_user_id'];
            $loginUserRoles = UserPermission::where('user_id',$loginUserIdFromGet)->first();
        } else {
            $loginUserRoles = UserPermission::where('user_id',$loginUserId)->first();
        }

        if (!empty($loginUserRoles)) {
            $roleIds = explode(',',$loginUserRoles->role_id);
            $userAccesses = RolePermission::whereIn('role_id',$roleIds)->where('module_id',$module_id)->get();

//        $userPermissions = UserPermission::where('user_id',$loginUserId)->where('module_id',$module_id)->first();
            foreach ($userAccesses as $userAccess){
                if ($userAccess){
                    $permission = $userAccess->permission_id;
                    $permissionIds = explode(',',$permission);
                    if ($permission_id == ps_constant::readPermission){
                        foreach ($permissionIds as $id){
                            if ($id == $permission_id || $id == ps_constant::createPermission || $id == ps_constant::updatePermission || $id == ps_constant::deletePermission){
                                return true;
                            }
                        }
                    }
                    foreach ($permissionIds as $id){
                        if ($id == $permission_id){
                            return true;
                        }
                    }

                }
            }
        }
    }
}

if(! function_exists('authorization')) {
    /**
     * @param $module_id
     */
    function authorization($module_id)
    {

        $loginUserRoles = Auth::user()->role_id;
        if ($loginUserRoles) {
            $roleIds = explode(',', $loginUserRoles);
            $userAccesses = RolePermission::whereIn('role_id', $roleIds)->where('module_id', $module_id)->get();
            if ($userAccesses->isNotEmpty()) {
                return true;
            } else {
                return false;
            }
        }
    }
}

if (!function_exists('keyGenerate')){
    function keyGenerate($typeCode){
        $coreKeyType = CoreKeyType::where('code',$typeCode)->first();

        $coreKeyLastestRow = CoreKey::where('core_keys_id','like','%'.$typeCode.'%')->latest()->first();
        if (!empty($coreKeyLastestRow)){
            $coreKeysIdLastest = substr($coreKeyLastestRow->core_keys_id, -5);
        } else {
            $coreKeysIdLastest = null;
        }
        $countRow = str_pad( $coreKeysIdLastest + 1, 5, '0', STR_PAD_LEFT );
        $core_keys_id = $coreKeyType->code.$countRow;
        return $core_keys_id;
    }
}

if (!function_exists('getCoreKey')){
    function getCoreKey($coreKeysId){
        $coreKey = CoreKey::where("core_keys_id",$coreKeysId)->first();
        return $coreKey;
    }
}


if (!function_exists('relationForCoreFieldFilter')){
    function relationForCoreFieldFilter($coreFieldForFilter,$ownerField,$relationTable,$relationField, $coreFieldFilterForRelation){
        if ($coreFieldForFilter === $ownerField){
//        return $coreFieldForFilter.$ownerField;
            foreach ($relationTable as $category){
                if ($category == $relationField){
                    return $coreFieldForFilter.$coreFieldFilterForRelation.$category;
                }

            }
        }
    }
}


if ( !function_exists( 'read_more' ))
{
	function read_more( $string, $limit )
	{
		$string = strip_tags($string);

		if (strlen($string) > $limit) {

		    // truncate string
		    $stringCut = substr($string, 0, $limit);

		    // make sure it ends in a word so assassinate doesn't become ass...
		    $string = substr($stringCut, 0, strrpos($stringCut, ' ')).'...';
		}
		return $string;
	}
}

if ( !function_exists( 'generateLangStrJson' ))
{
    function generateLangStrJson($fileName, $lang_str){

        $languageString = [];
        foreach($lang_str as $str){
            $languageString[$str['key']] = $str['value'];
        }

        $file['data'] = json_encode($languageString);

        File::put(base_path('lang/'.$fileName),$file);
    }
}

if ( !function_exists( 'generateAllLanguage' )){

    function generateAllLanguage(){

        $languages = Language::all();
        foreach($languages as $language){
            $languageString = [];
            $lang_str = LanguageString::select('key', 'value')->where('language_id', $language->id)->get();

            foreach($lang_str as $str){
                $languageString[$str['key']] = $str['value'];
            }

            $file['data'] = json_encode($languageString);

            $fileName = $language->symbol . '.json';
            File::put(base_path('lang/'.$fileName),$file);
        }
    }
}


if ( !function_exists('redirectView')){
    function redirectView($routeName, $msg, $flag = "success", $parameter = null){

        if (empty($parameter) && !empty($routeName)){
            return redirect()->route($routeName)->with('status',[ 'flag' => $flag, 'msg' => $msg ]);
        } elseif (empty($routeName) && empty($parameter)){
            return redirect()->back()->with('status',[ 'flag' => $flag, 'msg' => $msg ]);
        } else {
            return redirect()->route($routeName, $parameter)->with('status',[ 'flag' => $flag, 'msg' => $msg ]);
        }
    }
}

if ( !function_exists('getBetweenTwoDateRangeArr')){
    function getBetweenTwoDateRangeArr($startDate, $endDate, $format = 'Y-m-d'){

        $dateRange = CarbonPeriod::create($startDate, $endDate);
        $formatedDateRangeArr = [];
        foreach ($dateRange as $date) {
            array_push($formatedDateRangeArr, $date->format($format));
        }
        return $formatedDateRangeArr;
    }
}

if ( !function_exists('subtractDay')){
    function subtractDay($dayCount, $date, $format = 'Y-m-d H:i:s'){
        return date($format, strtotime("-$dayCount day", strtotime($date)));
    }
}



if ( !function_exists('checkSave')){
    function checkSave($returnValue, $route, $flag){
        if (is_object($returnValue)){
            $savedValue = $returnValue;
        } else{
            return redirectView($route, $returnValue, $flag);
        }
    }
}

if ( !function_exists('deleteImages')){
    function deleteImages($images){
        if(count($images)>0){
            foreach($images as $image){
                // delete image from storage folder
                Storage::delete('public/uploads/'.$image->img_path);
                Storage::delete('public/thumbnail/'.$image->img_path);
                Storage::delete('public/thumbnail2x/'.$image->img_path);
                Storage::delete('public/thumbnail3x/'.$image->img_path);

                $image->delete();
            }
        }
    }
}

if ( !function_exists('deleteImage')){
    function deleteImage($image){
        if(!empty($image)){
            // delete image from storage folder
            Storage::delete('public/uploads/'.$image->img_path);
            Storage::delete('public/thumbnail/'.$image->img_path);
            Storage::delete('public/thumbnail2x/'.$image->img_path);
            Storage::delete('public/thumbnail3x/'.$image->img_path);
        }
    }
}


if ( !function_exists('renderView')){
    function renderView($componentPath, $dataForView = null){
        if(empty($dataForView)){
            return Inertia::render($componentPath);
        } else {
            return Inertia::render($componentPath,$dataForView);
        }
    }
}


if  ( !function_exists('getAllCoreFields')){
    function getAllCoreFields($tableName){
        return Schema::getColumnListing($tableName);
    }
}


//if  ( !function_exists('checkPermission')){
//    function checkPermission($ability=null, $model=null, $routeName=null, $msg = "You don't have permission"){
//        if (Gate::denies($ability,$model)){
//            return redirectView($routeName, $msg, "danger");
//        }
//    }
//}

if  ( !function_exists('checkPermissionApi')){
    function checkPermissionApi($ability, $model, $msg = null){
        if($msg == null){
            $msg = __("no_permission");
        }
        if (Gate::denies($ability,$model)){
            return response()->json(["message" => $msg, "status" => "error"],403);
        }
    }
}

if  ( !function_exists('checkOwnerShip')){
    function checkOwnerShip($singleObj, $loginUserId){
        if ($singleObj->added_user_id == $loginUserId){
            return true;
        }
        return false;
    }
}


if  ( !function_exists('getLoginUserId')){
    function getLoginUserId($userIdParaFromApi = null, $userIdFromBE = null){
        if (!empty($_GET['login_user_id'])){
            $userId = $_GET['login_user_id'];
        } else {
            $userId = $userIdFromBE;
        }
        return $userId;
    }
}

if  ( !function_exists('createCustomizeAttr')){
    function createCustomizeAttr($request){
        $customizeDetail = new CustomizeUiDetail();
        $customizeDetail->name = $request->name;
        $customizeDetail->core_keys_id = $request->core_keys_id;
        $customizeDetail->save();

        return $customizeDetail;
    }
}

if ( !function_exists('updateCustomizeAttr')){
    function updateCustomizeAttr($customizationDetail, $request){
        $customizationDetail->name = $request->name;
        $customizationDetail->core_keys_id = $request->core_keys_id;
        $customizationDetail->update();

        return $customizationDetail;
    }
}

if ( !function_exists("getSupportedUi")){
    function getSupportedUi(){
        $ui = UiType::all();
        return $ui;
    }
}

if ( !function_exists("createCustomField")){
    function createCustomField($request, $code){
        $customizeHeader = new CustomizeUi();
        $customizeHeader->name = $request->name;
        $customizeHeader->placeholder = $request->placeholder;
        $customizeHeader->ui_type_id = $request->ui_type_id;

        $customizeHeader->core_keys_id = keyGenerate($code);
        if ($request->mandatory === false) {
            $customizeHeader->mandatory = 0;
        } else {
            $customizeHeader->mandatory = 1;
        }
//        $key = CoreKeyType::where("name","product")->get();
        $customizeHeader->module_name = $code;
        $customizeHeader->enable = 1;
        $customizeHeader->save();
        return $customizeHeader;
    }
}

if ( !function_exists("createCustomField")){
    function createCustomField($request, $code){
        $customizeHeader = new CustomizeUi();
        $customizeHeader->name = $request->name;
        $customizeHeader->placeholder = $request->placeholder;
        $customizeHeader->ui_type_id = $request->ui_type_id;

        $customizeHeader->core_keys_id = keyGenerate($code);
        if ($request->mandatory === false) {
            $customizeHeader->mandatory = 0;
        } else {
            $customizeHeader->mandatory = 1;
        }
//        $key = CoreKeyType::where("name","product")->get();
        $customizeHeader->module_name = $code;

        $stringUiTypes = ['uit00001', 'uit00002', 'uit00003', 'uit00004', 'uit00006'];
        $imageUiTypes = ['uit00009'];
        $multiSelectUiTypes = ['uit00008'];
        $dateUiTypes = ['uit00005', 'uit00010', 'uit00011'];
        $integerUiTypes = ['uit00007'];

        if (in_array($request->ui_type_id, $stringUiTypes)){
            $customizeHeader->data_type = 'String';
        } elseif (in_array($request->ui_type_id, $dateUiTypes)) {
            $customizeHeader->data_type = 'Date';
        } elseif (in_array($request->ui_type_id, $integerUiTypes)) {
            $customizeHeader->data_type = 'Integer';
        } elseif (in_array($request->ui_type_id, $imageUiTypes)) {
            $customizeHeader->data_type = 'Image';
        } elseif (in_array($request->ui_type_id, $multiSelectUiTypes)) {
            $customizeHeader->data_type = 'MultiSelect';
        }

        $customizeHeader->enable = 1;
        $customizeHeader->save();
        return $customizeHeader;
    }
}

if ( !function_exists("updateCustomField")){
    function updateCustomField($customizeHeader, $request, $code){
        $customizeHeader->name = $request->name;
        $customizeHeader->placeholder = $request->placeholder;
        $customizeHeader->ui_type_id = $request->ui_type_id;

        $customizeHeader->core_keys_id = $customizeHeader->core_keys_id;
        if ($request->mandatory === false) {
            $customizeHeader->mandatory = 0;
        } else {
            $customizeHeader->mandatory = 1;
        }
//        $key = CoreKeyType::where("name","product")->get();
        $customizeHeader->module_name = $code;
        $customizeHeader->enable = 1;
        $customizeHeader->update();

        return $customizeHeader;
    }
}

if ( !function_exists("createCoreKey")){
    function createCoreKey($customizeHeader, $code){
        $coreKey = new CoreKey();
        $coreKey->core_keys_id = keyGenerate($code);
        $coreKey->name = $customizeHeader->name;
        $coreKey->description = $customizeHeader->name.' desc';
        $coreKey->save();
        return $coreKey;
    }
}

if ( !function_exists("updateCoreKey")){
    function updateCoreKey($coreKey,$customizeHeader, $code){
        $coreKey->core_keys_id = $customizeHeader->core_keys_id;
        $coreKey->name = $customizeHeader->name;
        $coreKey->description = $customizeHeader->name.' desc';
        $coreKey->update();
        return $coreKey;
    }
}

if ( !function_exists("createForHideShow")){
    function createForHideShow($coreKey, $code){
        $screenDisplayUiSetting = new ScreenDisplayUiSetting();
        $screenDisplayUiSetting->module_name = $code;
        $screenDisplayUiSetting->key = $coreKey->core_keys_id;
        $screenDisplayUiSetting->is_show = 1;
        $screenDisplayUiSetting->save();
        return $screenDisplayUiSetting;
    }
}


if ( !function_exists("customFieldStatusUpdate")){
    function customFieldStatusUpdate($customizeHeader, $columnName){
        if ($customizeHeader->$columnName === 1){
            $customizeHeader->$columnName = 0;
        } else {
            $customizeHeader->$columnName = 1;
        }
        $customizeHeader->update();
        return $customizeHeader;
    }
}

if ( !function_exists("newFileName")){
    function newFileName($value, $componentName = null){
        $newName = uniqid()."_".$componentName.".".$value->getClientOriginalExtension();
        return $newName;
    }
}

if ( !function_exists("newFileNameForExport")){
    function newFileNameForExport($fileName, $format = "csv"){
        $newName = $fileName.'_'. date('Y_m_d') . '.'.$format;
        return $newName;
    }
}



if ( !function_exists("saveImgAsOrigin")){
    function saveImgAsOrigin($file, $originPath, $fileName){
        $img = Image::make($file);
        $origin = $originPath;
        $img->save($origin.$fileName,30);
    }
}

if ( !function_exists("saveImgAsThumbnail1x")){
    function saveImgAsThumbnail1x($file, $thumbnail1xPath, $fileName){
        $thumbnail1x = Image::make($file);
        $thumbnail1xDir = $thumbnail1xPath;
        $thumbnail1x->resize(200, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail1x->save($thumbnail1xDir.$fileName);
    }
}


if ( !function_exists("saveImgAsThumbnail2x")){
    function saveImgAsThumbnail2x($file, $thumbnail2xPath, $fileName){
        $thumbnail2x = Image::make($file);
        $thumbnail2xDir = $thumbnail2xPath;
        $thumbnail2x->resize(400, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail2x->save($thumbnail2xDir.$fileName);
    }
}

if ( !function_exists("saveImgAsThumbnail3x")){
    function saveImgAsThumbnail3x($file, $thumbnail3xPath, $fileName){
        $thumbnail3x = Image::make($file);
        $thumbnail3xDir = $thumbnail3xPath;
        $thumbnail3x->resize(600, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });
        $thumbnail3x->save($thumbnail3xDir.$fileName);
    }
}

if ( !function_exists("saveImgAsOriginalThumbNail1x2x3x")){
    function saveImgAsOriginalThumbNail1x2x3x($file, $fileName, $originPath, $thumbnail1xPath, $thumbnail2xPath, $thumbnail3xPath){

        //save origin
        saveImgAsOrigin($file, $originPath, $fileName);

        //save 1x
        saveImgAsThumbnail1x($file, $thumbnail1xPath, $fileName);

        //save 2x
        saveImgAsThumbnail2x($file, $thumbnail2xPath, $fileName);

        //save 3x
        saveImgAsThumbnail3x($file, $thumbnail3xPath, $fileName);

    }
}

if ( !function_exists("delImageFromCustomFieldValue")){
    function delImageFromCustomFieldValue($productRelation, $uploadPathForDel, $thumb1xPathForDel, $thumb2xPathForDel, $thumb3xPathForDel){

        // delete all photos
        if (str_contains($productRelation->value,'.png') || str_contains($productRelation->value,'.jpg')){
            Storage::delete($uploadPathForDel.$productRelation->value);
            Storage::delete($thumb1xPathForDel.$productRelation->value);
            Storage::delete($thumb2xPathForDel.$productRelation->value);
            Storage::delete($thumb3xPathForDel.$productRelation->value);
        }

    }
}

/**
 * Gets the generate_random_string
 *
 * @param      <type>  $id     The identifier
 * @param      <type>  $type   The type
 */
if (!function_exists('generate_random_string')) {
    function generate_random_string($length = 5)
    {
        $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
}

if(!function_exists('generateCoreKey')){
    function generateCoreKey($code){
        $conds['code'] = $code;
        $coreKeyCounter = CoreKeyCounter::where($conds)->first();
        $counter = $coreKeyCounter->counter + 1;

        $middleCoreKeyCode = Constants::middleCoreKeyCode;
        $middleCoreKeyCount = strlen($middleCoreKeyCode);
        $counterCount = strlen((string)$counter);

        $count = 0;
        if($middleCoreKeyCount <= $counterCount){
            $count = $counter;
        }else if($middleCoreKeyCount > $counterCount){
            $count = substr($middleCoreKeyCode, 0, ($middleCoreKeyCount-$counterCount)+1) . $counter;
        }

        // update core key counter
        $data['counter'] = $counter;
        CoreKeyCounter::where('id', $coreKeyCounter->id)->update($data);

        return $code . $count;
    }
}

/**
 * Get Paid Item Status
 */
if(!function_exists('getPaidStatus')){
    function getPaidStatus($start_date, $end_date){
        $today_date = Carbon::now();

        if($today_date >= $start_date && $today_date <= $end_date){
            return Constants::paidItemProgressStatus;
        }else if ($today_date > $start_date && $today_date > $end_date){
            return Constants::paidItemCompletedStatus;
        }else if ($today_date < $start_date && $today_date < $end_date){
            return Constants::paidItemNotYetStartStatus;
        }
    }
}
/**
 * Sending Message From FCM For Android
 */
if (!function_exists('send_android_fcm')) {
    function send_android_fcm($registatoin_ids, $data, $platform_names)
    {
        // dd("gheere");
        $backend_setting = BackendSetting::first();

        $message = $data['message'];
        $flag = $data['flag'];

        if(isset($data['item_id'])){
            $id = $data['item_id'];

            $item = Item::find($id);

            $title = $item->title;
            $item_name = str_replace(' ', '%20', $title);
            $item_approval_name = str_replace(' ', '-', $title);

            $price = $item->price;

            $currency_id = $item->currency_id;
            $cur = Currency::find($currency_id);
            $currency = $cur? $cur->currency_symbol:'';

            $conds_img['img_parent_id'] = $id;
            $conds_img['img_type'] = "item";
            $conds_img['ordering'] = '1';
            $images = CoreImage::where($conds_img)->get();
            $img_path = count($images)>0 ? $images[0]->img_path: '';

            if (count($images) == 0) {
                $conds_img1['img_parent_id'] = $id;
                $conds_img1['img_type'] = "item";

                $images1 = CoreImage::where($conds_img1)->get();

                if (count($images1) == 1) {
                    $img_path = $images1[0]->img_path;
                } else {
                    $img_path = count($images1)>0 ? $images1[0]->img_path : '';
                }
            }

            // **** custom field *****
            // $condition_of_item_id = $item->condition_of_item_id;
            // $condition = Condition::find($condition_of_item_id)->name;
        }

        //to get prj name
        $dyn_link_deep_url = $backend_setting->dyn_link_deep_url;
        $prj_url = explode('/', $dyn_link_deep_url);
        $i = count($prj_url) - 2;
        $prj_name = $prj_url[$i];

        $click_action = "";

        foreach($platform_names as $platform_name){
            $currency_tmp =  '&currency=';
            $currency_tmp = htmlentities($currency_tmp);

            if ($click_action == "" && $platform_name == "frontend" && $flag == Constants::chatNotiFlag) {
                //for chat
                $click_action = $prj_name . '/' . 'chat?buyer_user_id=' . $data['buyer_user_id'] . '&seller_user_id=' . $data['seller_user_id'] . '&item_name=' .
                    $item_name . '&item_id=' . $data['item_id'] . '&item_image_name=' . $img_path . '&item_price=' . $price . $currency_tmp .
                    $currency . '&chat_flag=' . $data['chat_flag'];
            } elseif ($click_action == "" && $platform_name == "frontend" && $flag == Constants::reviewNotiFlag) {
                $click_action = $prj_name . '/' . 'review-list?user_id=' . $data['review_user_id'];
            } elseif ($click_action == "" && $platform_name == "frontend" && $flag == Constants::approvalNotiFlag) {
                $click_action = $prj_name . '/' . 'item/' . $item_approval_name . '?item_id=' . $data['item_id'] . '&item_name=' . $item_approval_name;
            } elseif ($click_action == "" && $platform_name == "frontend" && $flag == Constants::followNotiFlag) {
                $click_action = "";
            } elseif ($click_action == "" && $platform_name == "frontend" && $flag == Constants::verifyBlueMarkNotiFlag) {
                $click_action = "";
            } elseif (strtolower($platform_name) == "android" || strtolower($platform_name) == "ios") {
                $click_action = ps_constant::flutterNotificationClick;
            }else{
                $click_action = ps_constant::flutterNotificationClick;
            }
        }

        if ($flag == Constants::approvalNotiFlag || $flag == Constants::verifyBlueMarkNotiFlag || $flag == Constants::followNotiFlag) {
            $noti_arr = array(
                'title' => __('site_name'),
                'body' => $message,
                'sound' => 'default',
                'message' => $message,
                'flag' => $flag,
                'click_action' => $click_action
            );

            $fields = array(
                'sound' => 'default',
                'notification' => $noti_arr,
                'registration_ids' => $registatoin_ids,
                'data' => array(
                    'message' => $message,
                    'flag' => $flag,
                    'click_action' => $click_action
                )

            );
        } elseif ($flag == Constants::reviewNotiFlag) {

            $rating = $data['rating'];

            $noti_arr = array(
                'title' => __('site_name'),
                'body' => $message,
                'sound' => 'default',
                'message' => $message,
                'flag' => 'review',
                'rating' => $rating,
                'click_action' => $click_action
            );

            $fields = array(
                'sound' => 'default',
                'notification' => $noti_arr,
                'registration_ids' => $registatoin_ids,
                'data' => array(
                    'message' => $message,
                    'rating' => $rating,
                    'flag' => 'review',
                    'click_action' => $click_action
                )

            );
        } else if ($flag == Constants::chatNotiFlag) {

            $message = $data['message'];
            $buyer_id = $data['buyer_user_id'];
            $seller_id = $data['seller_user_id'];
            $sender_name = $data['sender_name'];
            $item_id = $data['item_id'];
            $sender_profile_photo = $data['sender_profile_photo'];

            $noti_arr = array(
                'title' => __('site_name'),
                'body' => $message,
                'sound' => 'default',
                'message' => $message,
                'flag' => $flag,
                'buyer_id' => $buyer_id,
                'seller_id' => $seller_id,
                'item_id' => $item_id,
                'sender_name' => $sender_name,
                'sender_profile_photo' => $sender_profile_photo,
                'action' => "abc",
                'click_action' => $click_action
            );

            $fields = array(
                'sound' => 'default',
                'notification' => $noti_arr,
                'registration_ids' => $registatoin_ids,
                'data' => array(
                    'message' => $message,
                    'flag' => $flag,
                    'buyer_id' => $buyer_id,
                    'seller_id' => $seller_id,
                    'item_id' => $item_id,
                    'sender_name' => $sender_name,
                    'sender_profile_photo' => $sender_profile_photo,
                    'action' => "abc",
                    'click_action' => $click_action
                )
            );
        }

        // Update your Google Cloud Messaging API Key
        $fcm_api_key = !empty($backend_setting)? $backend_setting->fcm_api_key : '';
        $google_api_key = $fcm_api_key;

        // //Google cloud messaging GCM-API url
        $url = 'https://fcm.googleapis.com/fcm/send';

        $headers = array(
            'Authorization: key=' . $google_api_key,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        // dd($fields);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }
        curl_close($ch);

        return $result;
    }
}

if (!function_exists('send_subscribe_noti_fcm')) {
    function send_subscribe_noti_fcm($registatoin_ids, $data, $platform_names)
    {
        $backend_setting = BackendSetting::first();

        $message = $data['message'];
        $flag = $data['flag'];

        $click_action = "";

        $noti_arr = array(
            'title' => __('site_name'),
            'body' => $message,
            'sound' => 'default',
            'message' => $message,
            'flag' => $flag,
            'click_action' => $click_action
        );

        $fields = array(
            'sound' => 'default',
            'notification' => $noti_arr,
            'registration_ids' => $registatoin_ids,
            'data' => array(
                'message' => $message,
                'flag' => $flag,
                'click_action' => $click_action
            )

        );

        // Update your Google Cloud Messaging API Key
        $fcm_api_key = !empty($backend_setting)? $backend_setting->fcm_api_key : '';
        // define("GOOGLE_API_KEY", $fcm_api_key);

        // //Google cloud messaging GCM-API url
        $url = 'https://fcm.googleapis.com/fcm/send';

        $headers = array(
            'Authorization: key=' . $fcm_api_key,
            'Content-Type: application/json'
        );
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($ch, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
        $result = curl_exec($ch);
        if ($result === FALSE) {
            die('Curl failed: ' . curl_error($ch));
        }
        curl_close($ch);
        // dd($result);

        return $result;
    }
}

if(!function_exists('customPagination')){

    function customPagination($items, $perPage = 10, $page = null, $options = []){
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
            'path'  => request()->url(),
        ]);
    }
}


/**
* Sending Message From FCM For Android & iOS By using topics subscribe
*/
if ( ! function_exists( 'send_android_fcm_topics_subscribe' ))
{
	function send_android_fcm_topics_subscribe( $data )
    {
        // dd();
        $backend_setting = BackendSetting::first();

    	//Google cloud messaging GCM-API url
    	$url = 'https://fcm.googleapis.com/fcm/send';

    	if ($data['subscribe'] == '0' && $data['push'] == 1) {
    		// push noti
    		$noti_arr = array(
	    		'title' => $data['message'],
	    		'body' => $data['desc'],
	    		'sound' => 'default',
	    		'flag' => ps_constant::broadcast
	    	);

	    	$noti_data = array(
	    		'sound' => 'default',
	    		'message' => $data['message'],
	    		'flag' => ps_constant::broadcast,
	    		'click_action' => ps_constant::flutterNotificationClick
	    	);

	    	$fields = array(
	    		'sound' => 'default',
	    		'flag' => ps_constant::broadcast,
	    		'notification' => $noti_arr,
	    		'data' => $noti_data,
	    	    'to' => '/topics/' . $backend_setting->topics
	    	);

    	} else {
    		// subscribe noti
            // $noti_arr = array(
            //     'title' => __('site_name'),
            //     'body' => $message,
            //     'sound' => 'default',
            //     'message' => $message,
            //     'flag' => $flag,
            //     'click_action' => $click_action
            // );

            // $fields = array(
            //     'sound' => 'default',
            //     'notification' => $noti_arr,
            //     'registration_ids' => $registatoin_ids,
            //     'data' => array(
            //         'message' => $message,
            //         'flag' => $flag,
            //         'click_action' => $click_action
            //     )

            // );
    		$noti_arr = array(
	    		'title' => __('site_name'),
	    		'body' => $data['message'],
	    		'item_id' => $data['item_id'],
	    		'sound' => 'default',
	    		'flag' => Constants::subscribeNotiFlag
	    	);

	    	$noti_data = array(
	    		'sound' => 'default',
	    		'message' => $data['message'],
	    		'item_id' => $data['item_id'],
	    		'flag' => Constants::subscribeNotiFlag,
	    		'click_action' => ps_constant::flutterNotificationClick
	    	);

	    	$fields = array(
	    		'sound' => 'default',
	    		'flag' => Constants::subscribeNotiFlag,
                // 'registration_ids' => $data['device_token'],
	    		'notification' => $noti_arr,
	    		'data' => $noti_data,
	    	    'to' => '/topics/' . $data['subcategory_id'] . '_MB'
	    	);
    	}

        $fcm_api_key = !empty($backend_setting)? $backend_setting->fcm_api_key : '';
    	// define("GOOGLE_API_KEY", $fcm_api_key);

    	$headers = array(
    	    'Authorization: key=' . $fcm_api_key,
    	    'Content-Type: application/json'
    	);
    	$ch = curl_init();
    	curl_setopt($ch, CURLOPT_URL, $url);
    	curl_setopt($ch, CURLOPT_POST, true);
    	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    	$result = curl_exec($ch);
    	if ($result === FALSE) {
    	    die('Curl failed: ' . curl_error($ch));
    	}
    	curl_close($ch);

    	return $result;
    }
}

/**
* Sending Message From FCM For Frontend By using topics subscribe
*/
if ( ! function_exists( 'send_android_fcm_topics_subscribe_fe' ))
{
	function send_android_fcm_topics_subscribe_fe( $data, $prj_name )
    {
        $backend_setting = BackendSetting::first();

    	$url = 'https://fcm.googleapis.com/fcm/send';

    	if ($data['subscribe'] == '0' && $data['push'] == 1) {
    		// push noti
	    	$noti_arr = array(
	    		'title' => $data['message'],
	    		'body' => $data['desc'],
	    		'sound' => 'default',
	    		'flag' => ps_constant::feBroadcast
	    	);

	    	$noti_data = array(
	    		'sound' => 'default',
	    		'message' => $data['message'],
	    		'flag' => ps_constant::feBroadcast,
	    		'click_action' => $prj_name. '/' . 'notification'
	    	);

	    	$fields = array(
	    		'sound' => 'default',
	    		'flag' => ps_constant::feBroadcast,
	    		'notification' => $noti_arr,
	    		'data' => $noti_data,
	    	    'to' => '/topics/' . $backend_setting->topics_fe
	    	);

	    } else {
	    	// subscribe noti

    		// to get item name for FE click action
    		$id = $data['item_id'];
			$title = Item::find($id)->title;
			$item_name = str_replace(' ' , '%20' , $title);
			$itm_name = str_replace(' ' , '-' , $title);
    		$click_action = $prj_name. '/' . 'item/' . $itm_name . '?item_id=' . $data['item_id'] . '&item_name=' . $itm_name ;

    		$noti_arr = array(
	    		'title' => __('site_name'),
	    		'body' => $data['message'],
	    		'sound' => 'default',
	    		'flag' => Constants::subscribeNotiFlag
	    	);

	    	$noti_data = array(
	    		'sound' => 'default',
	    		'message' => $data['message'],
	    		'flag' => Constants::subscribeNotiFlag,
	    		'click_action' => $click_action
	    	);

	    	$fields = array(
	    		'sound' => 'default',
	    		'flag' => Constants::subscribeNotiFlag,
	    		'notification' => $noti_arr,
	    		'data' => $noti_data,
	    	    'to' => '/topics/' . $data['subcategory_id']
	    	);
	    }


        $fcm_api_key = !empty($backend_setting)? $backend_setting->fcm_api_key : '';
    	// define("GOOGLE_API_KEY", $fcm_api_key);


    	$headers = array(
    	    'Authorization: key=' . $fcm_api_key,
    	    'Content-Type: application/json'
    	);
    	$ch = curl_init();
    	curl_setopt($ch, CURLOPT_URL, $url);
    	curl_setopt($ch, CURLOPT_POST, true);
    	curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    	curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    	$result = curl_exec($ch);
    	if ($result === FALSE) {
    	    die('Curl failed: ' . curl_error($ch));
    	}
    	curl_close($ch);
    	return $result;
    }
}

if(!function_exists('authorizationWithoutPolicy')){

    function authorizationWithoutPolicy($moduleId){
        return [
            "create" => permissionControl($moduleId,1) ? true : false,
            "update" => permissionControl($moduleId,3) ? true : false,
            "delete" => permissionControl($moduleId,4) ? true : false
        ];
    }
}

if ( !function_exists("checkPurchasedCode")){
    function checkPurchasedCode($response, $routeName=null){

        if (empty($response->item)){
            return redirect()->back()->with("purchased_code", "Envato Purchase Code is invalid")->withInput();
        }

    }
}
