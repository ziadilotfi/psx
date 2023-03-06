<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\LanguageString;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
// use Modules\Core\Entities\Language;
use Maatwebsite\Excel\Facades\Excel;
// use Modules\Core\Entities\LanguageString;
use Modules\Core\Imports\LanguageStringImport;
use Modules\Core\Http\Services\LanguageStringService;
use Modules\Core\Http\Requests\StoreLanguageStringRequest;
use Modules\Core\Http\Requests\UpdateLanguageStringRequest;

class LanguageStringController extends Controller
{

    const parentPath = "language_string/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "language_string.index";
    const createRoute = "language_string.create";
    const editRoute = "language_string.edit";

    protected $languageStringService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(LanguageStringService $languageStringService)
    {
        $this->languageStringService = $languageStringService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
    }

    public function index($languageId,Request $request)
    {
        $dataArr = $this->languageStringService->index($languageId,$request);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create($languageId)
    {
        $dataArr = $this->languageStringService->create($languageId);
        $checkPermission = $dataArr["checkPermission"];

        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreLanguageStringRequest $request)
    {

        $routeParams = [$request->language];
        $languageString = $this->languageStringService->store($request);

        // if have error
        if ($languageString){
            $msg = $languageString;
            return redirectView(self::createRoute, $msg, $this->dangerFlag,$routeParams);
        }

        return redirect()->back();
    }

//    public function show(Language $language,LanguageString $language_string)
//    {
//        return redirect()->route('language_string.edit', $language, $language_string);
//    }

    public function edit($languageId, $languageStringId)
    {
        $dataArr = $this->languageStringService->edit($languageId, $languageStringId);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update($language_id, UpdateLanguageStringRequest $request, $id)
    {

        $routeParams = [$language_id];
        $languageString = $this->languageStringService->update($id,$request);

        // if have error

        if (isset($languageString['error'])){
            $msg = $languageString;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag,$routeParams);
        }

        return redirect()->back();
    }

    public function destroy($languageId, $languageStringId)
    {
        $name = $this->languageStringService->destroy($languageId , $languageStringId);

        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }

        // $msg = 'The '.$name.' row has been deleted successfully.';
        $msg = __('core__be_delete_success',['attribute'=>$name]);

        return redirectView(self::indexRoute, $msg, $this->dangerFlag, $languageId);
    }

    public function importCSV($languageId, Request $request){

        $this->languageStringService->importCSV($languageId, $request);
        return redirect()->back();
    }


    public function getLanguageString(Request $request){

        $dataArr = $this->languageStringService->getlanguageStringsByKey($request);
        return $dataArr;

    }

    public function updateLanguageStrings(Request $request){

        $dataArr = $this->languageStringService->updateLanguageStrings($request);
        return redirect()->back();

    }

    public function updateAllLanguageStrings(){

        $dataArr = $this->languageStringService->updateAllLanguageStrings();
        return redirect()->back();

    }

    public function importAllLanguageStrings(Request $request){

        $dataArr = $this->languageStringService->importAllLanguageStrings($request);
        return redirect()->back();

    }

    public function screenDisplayUiStore(Request $request) {
        $parameter = ['page' => $request->current_page];
        $this->languageStringService->makeColumnHideShown($request);
        $msg = __('core__be_screen_display_ui_updated');
        return redirect()->back();
    }


}
