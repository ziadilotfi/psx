<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\Dashboard;

use App\Config\ps_constant;
use App\Rules\DomainCheck;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Entities\SystemCode;
use Modules\Core\Http\Requests\UpdateLicenseRequest;
use Modules\Core\Http\Services\DashboardService;

class DashboardController extends Controller
{
    const parentPath = "dashboard/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "admin.index";
    const createRoute = "admin.create";
    const editRoute = "admin.edit";

    protected $dashboardService;

    public function __construct(DashboardService $dashboardService)
    {
        $this->dashboardService = $dashboardService;
    }

    public function refresh(Request $request)
    {
        $dataArr = $this->dashboardService->refresh($request);
        return redirectView(self::indexRoute, "test");
    }

    public function index(Request $request)
    {
        $dataArr = $this->dashboardService->index($request);
        return renderView(self::indexPath, $dataArr);
    }

    public function search(Request $request)
    {
        $dataArr = $this->dashboardService->search($request);
        return renderView(self::indexPath, $dataArr);
    }

    public function updateLicense(UpdateLicenseRequest $request)
    {

        $dataArr = $this->dashboardService->updateLicenseForController($request);
        if (!empty($dataArr)){
            return $dataArr;
        }
        return redirectView(null, __('core__be_config_success'));
    }

    // by importing zip that come from psbuilder from model
    public function activateLicense(Request $request)
    {
        $dataArr = $this->dashboardService->activateLicenseForController($request);
//        if (empty($dataArr['hasError'])){
//            return redirect()->route('table.index')->with($dataArr);
//        }
        if ($request->tableSettingModule){
            return redirect()->route('table.index')->with($dataArr);
        } else {
            return redirect()->route('admin.index')->with($dataArr);
        }
    }
}
