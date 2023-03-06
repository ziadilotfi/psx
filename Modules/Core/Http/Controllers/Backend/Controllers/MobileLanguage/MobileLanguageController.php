<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\MobileLanguage;

use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Requests\StoreMobileLanguageRequest;
use Modules\Core\Http\Requests\UpdateMobileLanguageRequest;
use Modules\Core\Http\Services\MobileLanguageService;
use Illuminate\Http\Request;

class MobileLanguageController extends Controller
{
    const parentPath = "mobile_language/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "mobile_language.index";
    const createRoute = "mobile_language.create";
    const editRoute = "mobile_language.edit";

    protected $mobileLanguageService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(MobileLanguageService $mobileLanguageService)
    {
        $this->mobileLanguageService = $mobileLanguageService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->mobileLanguageService->index(self::indexRoute,$request);
        // return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::indexPath, $dataArr);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->mobileLanguageService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function create()
    {
        $dataArr = $this->mobileLanguageService->create();
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath);
    }

    public function store(StoreMobileLanguageRequest $request)
    {

        $mobileLanguage = $this->mobileLanguageService->store($request);

        // if have error
        if (isset($mobileLanguage['error'])){
            $msg = $mobileLanguage['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function edit($id)
    {
        $dataArr = $this->mobileLanguageService->edit($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateMobileLanguageRequest $request, $id)
    {
        $mobileLanguage = $this->mobileLanguageService->update($id,$request);

        // if have error
        if (isset($mobileLanguage['error'])){
            $msg = $mobileLanguage['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }


    public function destroy($id)
    {
        $dataArr = $this->mobileLanguageService->destroy($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    // default language
    public function statusChange($id){
        $dataArr = $this->mobileLanguageService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    // enable disable language
    public function enableDisable($id){
//        DB::table('mobile_languages')->update(['status' => 0]);

        $dataArr = $this->mobileLanguageService->enableDisable($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }
}
