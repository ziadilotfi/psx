<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\MenuGroup;

use Inertia\Inertia;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CoreMenuGroup;
use Modules\Core\Http\Services\MenuGroupService;
use Modules\Core\Http\Requests\StoreMenuGroupRequest;
use Modules\Core\Http\Requests\UpdateMenuGroupRequest;
use Illuminate\Http\Request;

class MenuGroupController extends Controller
{

    const parentPath = "menu_group/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "menu_group.index";
    const createRoute = "menu_group.create";
    const editRoute = "menu_group.edit";

    protected $menuGroupService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(MenuGroupService $menuGroupService)
    {
        $this->menuGroupService = $menuGroupService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->menuGroupService->index($request);
        $checkPermission = $dataArr["checkPermission"];
        
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create()
    {
        $dataArr = $this->menuGroupService->create();
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath,$dataArr);
    }

    public function store(StoreMenuGroupRequest $request)
    {
        $menuGroup = $this->menuGroupService->store($request);

        // if have error
        if (isset($menuGroup['error'])){
            $msg = $menuGroup['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

    public function edit($id)
    {
        $dataArr = $this->menuGroupService->edit($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateMenuGroupRequest $request, $id)
    {
        $menuGroup = $this->menuGroupService->update($id, $request);

        // if have error
        if (isset($menuGroup['error'])){
            $msg = $menuGroup['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->menuGroupService->destroy($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){
        $dataArr = $this->menuGroupService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }
    
    public function screenDisplayUiStore(Request $request) {
        $parameter = ['page' => $request->current_page];
        $this->menuGroupService->makeColumnHideShown($request);
        $msg = __('core__be_screen_display_ui_updated');
        return redirect()->back();
    }
}
