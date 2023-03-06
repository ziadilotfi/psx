<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\User;

use App\Config\ps_config;
use Inertia\Inertia;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\UserService;
use Modules\Core\Http\Requests\UpdateUserRequest;
use Modules\Core\Http\Requests\UpdateUserImageRequest;
use Modules\Core\Http\Services\RoleService;

class UserController extends Controller
{
    const parentPath = "core/user/";
    const coreFieldFilterSettingPath = self::parentPath . "CoreFieldFilterSetting";
    const customizationPath = self::parentPath . "Customization";
    const indexPath = self::parentPath . 'Index';
    const createPath = self::parentPath . 'Create';
    const editPath = self::parentPath . 'Edit';
    const customizationDetailIndexPath = self::parentPath . "CustomizationDetailIndex";
    const customizationDetailCreatePath = self::parentPath . "CustomizationDetailCreate";
    const customizationDetailEditPath = self::parentPath . "CustomizationDetailEdit";
    const addNewFieldPath = self::parentPath . "AddNewField";
    const addNewFieldEditPath = self::parentPath . "AddNewFieldEdit";
    const temDeletedFieldsPath = self::parentPath . "TemDeletedFields";
    const indexRoute = "user.index";
    const coreFieldFilterSettingRoute = "user.coreFieldFilterSetting";
    const customizationRoute = "user.customization";
    const customizationDetailIndexRoute = "user.customizationDetail.index";
    const deletedTemFieldsRoute = "user.deletedTemFields";

    protected $dangerFlag, $roleService, $successFlag, $userService, $code, $parentPath, $getImgPath, $coreFieldFilterForRelation, $viewAnyAbility, $createAbility, $editAbility, $deleteAbility;

    public function __construct(UserService $userService,RoleService $roleService)
    {
        $this->userService = $userService;
        $this->code = Constants::user;
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
        $this->roleService = $roleService;
    }

    public function index(Request $request)
    {
        $dataArr = $this->userService->index(self::indexRoute, $request);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create()
    {
        $dataArr = $this->userService->create(self::indexRoute);
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
        $errors = validateForCustomField($this->code, $request->product_relation);

        //validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'password' => 'required|min:8',
            'conf_password' => 'required_with:password|same:password|min:8',
            'email' => 'required|unique:users,email',
            'user_cover_photo' => 'nullable|sometimes|image'
        ]);


        if ($validator->fails()) {
            return redirect()->route('user.create')->with('user_relation_errors', $errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()) {
                return redirect()->route('user.create')->with('user_relation_errors', $errors);
            }
        }

        $user = $this->userService->store($request);
        if (isset($user['error'])) {
            // go back to index
            $msg = $user['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function edit($id)
    {
        $dataArr = $this->userService->edit($id, self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }


    public function update(Request $request, $id)
    {
        //prepare for validation
        $errors = validateForCustomField($this->code, $request->user_relation);

        //validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'email' => 'required|unique:users,email,' . $id,
            'user_cover_photo' => 'nullable|sometimes|image',
            'password' => 'sometimes|nullable|min:8',
            'conf_password' => 'sometimes|nullable|required_with:password|same:password|min:8',
        ]);


        if ($validator->fails()) {
            return redirect()->route('user.edit', $id)->with('user_relation_errors', $errors)
                ->withErrors($validator)
                ->withInput();
        } else {

            if (collect($errors)->isNotEmpty()) {
                return redirect()->route('user.edit', $id)->with('user_relation_errors', $errors);
            }
        }

        $user = $this->userService->update($request);

        if (isset($user['error'])){
            // go back to index
            $msg = $user['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }


    public function destroy($id)
    {
        $dataArr = $this->userService->destroy($id, self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function ban($id){

        $user = $this->userService->getUser($id);

        if($user->is_banned == 1){
            $user->is_banned = 0;
        }else{
            $user->is_banned = 1;
        }
        $user->updated_user_id = Auth::user()->id;
        $user->update();

        return redirect()->back();
    }

    public function statusChange($id){

        $user = $this->userService->getUser($id);

        if($user->status == 1){
            $user->status = 0;
        }else{
            $user->status = 1;
        }
        $user->updated_user_id = Auth::user()->id;
        $user->update();


        $status = [
            'flag' => 'success',
            // 'msg' => 'The status of '.$user->name.' row has been updated successfully.',
            'msg' => __('core__be_status_attribute_updated',['attribute'=>$user->name]),

        ];

        return redirect()->route('user.index')->with('status', $status);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->userService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function profileEdit($id)
    {
        if(Auth::user()->id != $id){
            return redirect()->route('admin.index');
        }
        $user = $this->userService->getUser($id);
        $userRoles = $user->role_id;
        $roles = $this->roleService->getRoles();

        // For Custom Fields
        $conds = [
            'module_name' => 'User',
            'enable' => 1,
        ];

        return Inertia::render('profile/Edit',[
            'user' => $user,
            'roles' => $roles,
            'yourPermissions' => $userRoles,

        ]);
    }

    public function profileUpdate(UpdateUserRequest $request, $id)
    {
        if(Auth::user()->id != $id){
            return redirect()->route('admin.index');
        }

        $user = $this->userService->getUser($id);
        try {
            $user = $this->userService->update($request);
        }catch (\Throwable $e){
            return redirect()->back()->with('status',[ 'flag' => 'danger', 'msg' => $e ]);
        }
        return redirect()->back();
    }

    public function replaceImage(UpdateUserImageRequest $request, $id)
    {
        $user = $this->userService->getUser($id);
        try {
            $user = $this->userService->replaceImage($user,$request);
        }catch (\Throwable $e){
            return redirect()->back()->with('status',[ 'flag' => 'danger', 'msg' => $e ]);
        }
        return redirect()->back();
    }

    public function deleteImage($id)
    {
        $user = $this->userService->getUser($id);

        try {
            $user = $this->userService->deleteImage($user);
        }catch (\Throwable $e){
            return redirect()->back()->with('status',[ 'flag' => 'danger', 'msg' => $e ]);
        }
        return redirect()->back();
    }
}
