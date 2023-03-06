<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\PhoneCountryCode;



use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\PhoneCountryCode;
use Modules\Core\Http\Services\PhoneCountryCodeService;
use Modules\Core\Http\Requests\StorePhoneCountryCodeRequest;
use Modules\Core\Http\Requests\UpdatePhoneCountryCodeRequest;


class PhoneCountryCodeController extends Controller
{
    const parentPath = "phone_country_code/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "phone_country_code.index";
    const createRoute = "phone_country_code.create";
    const editRoute = "phone_country_code.edit";

    protected $phoneCountryCodeService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(PhoneCountryCodeService $phoneCountryCodeService)
    {
        $this->phoneCountryCodeService = $phoneCountryCodeService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->phoneCountryCodeService->index(self::indexRoute,$request);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create(Request $request)
    {
        $dataArr = $this->phoneCountryCodeService->create(self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(Request $request)
    {
        $phone_country_code = $this->phoneCountryCodeService->store($request);

        // if have error
        if ($phone_country_code){
            $msg = $phone_country_code;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function show(PhoneCountryCode $phone_country_code)
    {
        return redirect()->route('phone_country_code.edit', $phone_country_code);
    }

    public function edit($id)
    {
        $dataArr = $this->phoneCountryCodeService->edit($id,self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(Request $request, $id)
    {
        $phone_country_code = $this->phoneCountryCodeService->update($id, $request);

        // if have error
        if ($phone_country_code){
            $msg = $phone_country_code;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

    public function destroy($id)
    {
        $dataArr = $this->phoneCountryCodeService->destroy($id);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){

        $dataArr = $this->phoneCountryCodeService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function defaultChange($id){

        $dataArr = $this->phoneCountryCodeService->defaultChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->phoneCountryCodeService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }
}
