<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\SubMenuGroup;


use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\SubMenuGroupService;
use Modules\Core\Http\Requests\UpdateSubMenuGroupRequest;
use Modules\Core\Http\Requests\StoreSubMenuGroupRequest;
use Illuminate\Http\Request;

class SubMenuGroupController extends Controller
{

    const parentPath = "sub_menu_group/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "sub_menu_group.index";
    const createRoute = "sub_menu_group.create";
    const editRoute = "sub_menu_group.edit";

    protected $subMenuGroupService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(SubMenuGroupService $subMenuGroupService)
    {
        $this->subMenuGroupService = $subMenuGroupService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->subMenuGroupService->index($request);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create()
    {
        $dataArr = $this->subMenuGroupService->create();
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreSubMenuGroupRequest $request)
    {
        
        $subMenuGroup = $this->subMenuGroupService->store($request);

        // if have error
        if (isset($subMenuGroup['error'])){
            $msg = $subMenuGroup['error'];
             

            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

//    public function show(CoreSubMenuGroup $sub_menu_group)
//    {
//        return redirect()->route('sub_menu_group.edit', $sub_menu_group);
//    }

    public function edit($id)
    {
        $dataArr = $this->subMenuGroupService->edit($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateSubMenuGroupRequest $request, $id)
    {
        $currency = $this->subMenuGroupService->update($id, $request);

        // if have error
        if ($currency){
            $msg = $currency;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->subMenuGroupService->destroy($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);

    }

    public function statusChange($id){
        $dataArr = $this->subMenuGroupService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }
    public function screenDisplayUiStore(Request $request) {
        
        $parameter = ['page' => $request->current_page];
        $this->subMenuGroupService->makeColumnHideShown($request);
        $msg = __('core__be_screen_display_ui_updated');
        return redirect()->back();
    }
}
