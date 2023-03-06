<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\BackendSetting;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Mail;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\BackendSettingService;
use Modules\Core\Http\Requests\StoreBackendSettingRequest;
use Modules\Core\Http\Requests\UpdateBackendSettingRequest;

class BackendSettingController extends Controller
{
    const parentPath = "backend_setting/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "backend_setting.index";

    protected $backendSettingService, $successFlag, $dangerFlag;

    public function __construct(BackendSettingService $backendSettingService)
    {
        $this->backendSettingService = $backendSettingService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
    }

    public function index()
    {
        $dataArr = $this->backendSettingService->index(self::indexRoute);

        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }else {
            if(empty($dataArr['backend_setting'])){
                return renderView(self::createPath, $dataArr);
            }
            return renderView(self::editPath, $dataArr);
        }


    }

    public function store(StoreBackendSettingRequest $request)
    {

        $backend_setting = $this->backendSettingService->create($request);

        // if have error
        if (isset($backend_setting['error'])){
            $msg = $backend_setting['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }


        $msg = __('core__be_backendsetting_updated');
        return redirectView(self::indexRoute, $msg);
    }

    public function update(UpdateBackendSettingRequest $request, $id)
    {
        $backend_setting = $this->backendSettingService->update($id,$request);

        // if have error
        if (isset($backend_setting['error'])){
            $msg = $backend_setting['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'The backend configuration setting has been updated successfully.';
        $msg = __('core__be_backendsetting_updated');

        return redirectView(self::indexRoute, $msg);
    }

    public function checkSmtpConfig(Request $request){
        $request->validate([
           "email" => "required|email"
        ]);
        $mailData = [
            'title' => 'Mail from Panacea Soft',
            'body' => 'This is for testing email using smtp.'
        ];
        try {
            Mail::to($request->email)->send(new TestMail($mailData));
            $msg = "Smtp Configuration is finished Successfully";
            return redirectView(null, $msg);
        } catch (\Throwable $e) {
            $msg = $e->getMessage();
            return redirectView(null, $msg, "danger");
        }
    }
}
