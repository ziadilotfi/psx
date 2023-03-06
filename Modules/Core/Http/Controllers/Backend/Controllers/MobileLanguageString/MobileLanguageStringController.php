<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\MobileLanguageString;

use Carbon\Carbon;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Core\Constants\Constants;
// use Modules\Core\Entities\MobileLanguage;
// use Modules\Core\Entities\MobileLanguageString;
use Modules\Core\Http\Requests\StoreMobileLanguageStringRequest;
use Modules\Core\Http\Requests\UpdateMobileLanguageStringRequest;
use Modules\Core\Http\Services\MobileLanguageStringService;

class MobileLanguageStringController extends Controller
{
    const parentPath = "mobile_language_string/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "mobile_language_string.index";
    const createRoute = "mobile_language_string.create";
    const editRoute = "mobile_language_string.edit";

    protected $mobileLanguageStringService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(MobileLanguageStringService $mobileLanguageStringService)
    {
        $this->mobileLanguageStringService = $mobileLanguageStringService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
    }

    public function index($id,Request $request)
    {
        $dataArr = $this->mobileLanguageStringService->index(self::indexRoute,$request);
        // return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::indexPath, $dataArr);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->mobileLanguageStringService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create($mobileLanguageId)
    {
        $dataArr = $this->mobileLanguageStringService->create($mobileLanguageId);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::createPath, $dataArr);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store($mobileLanguage_id, StoreMobileLanguageStringRequest $request)
    {
        $languageString = $this->mobileLanguageStringService->store($request);

        // if have error
        if ($languageString){
            $msg = $languageString;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

//    public function show($id)
//    {
//        return view('core::show');
//    }
    public function statusChange($id){
        $dataArr = $this->mobileLanguageStringService->statusChange($id);
        return redirect()->back()->with(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }


    public function edit($mobileLanguageId, $mobileLanguageStringId)
    {
        $dataArr = $this->mobileLanguageStringService->edit($mobileLanguageId, $mobileLanguageStringId);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::editPath, $dataArr);
    }

    public function importCSV($languageId, Request $request){
        $this->mobileLanguageStringService->importCSV($languageId, $request);

        
        return redirect()->back();
    }
    public function exportJson($languageId){
        $dataArr = $this->mobileLanguageStringService->exportJson($languageId);

        
        return $dataArr;
    }


    public function update($mobileLanguageId, UpdateMobileLanguageStringRequest $request, $mobileLanguageStringId)
    {
        $languageString = $this->mobileLanguageStringService->update($mobileLanguageStringId, $request);

        // if have error
        if ($languageString && isset($languageString['error'])){
            $msg = $languageString['error'];
            return redirect()->back()->with(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

    public function destroy($mobileLanguageId, $mobileLanguageStringId)
    {
        $dataArr = $this->mobileLanguageStringService->destroy($mobileLanguageId, $mobileLanguageStringId);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        
        return redirectView(self::indexRoute, $dataArr, $this->successFlag, $mobileLanguageId);
    }
}
