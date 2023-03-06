<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\SystemConfig;

use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Requests\StoreSystemConfigRequest;
use Modules\Core\Http\Requests\UpdateSystemConfigRequest;
use Modules\Core\Http\Services\SystemConfigService;

class SystemConfigController extends Controller
{
    const parentPath = "system_config/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "system_config.index";

    protected $systemConfigService, $dangerFlag;


    public function __construct(SystemConfigService $systemConfigService)
    {
        $this->systemConfigService = $systemConfigService;
        $this->dangerFlag = Constants::danger;
    }

    public function index()
    {
        $dataArr = $this->systemConfigService->index();
        $checkPermission = $dataArr["checkPermission"];

        if (!empty($checkPermission)){
            return $checkPermission;
        }
        if (empty($dataArr['system_config'])){
            return renderView(self::createPath, $dataArr);
        }

        return renderView(self::editPath, $dataArr);
    }

    public function store(StoreSystemConfigRequest $request)
    {

        $systemConfig = $this->systemConfigService->store($request);

        // if have error
        if (isset($systemConfig)){
            $msg = $systemConfig['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'The system configuration setting has been updated successfully.';
        $msg = __('core__be_config_success');
        return redirectView(self::indexRoute, $msg);

    }

    public function update(UpdateSystemConfigRequest $request, $id)
    {
        $systemConfig = $this->systemConfigService->update($id, $request);

        // if have error
        if (isset($systemConfig['error'])){
            $msg = $systemConfig['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'The system configuration setting has been updated successfully.';
        $msg = __('core__be_config_success');
        return redirectView(self::indexRoute, $msg);

    }
}
