<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\Language;


use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\LanguageService;
use Modules\Core\Http\Requests\StoreLanguageRequest;
use Modules\Core\Http\Requests\UpdateLanguageRequest;
use Illuminate\Http\Request;

class LanguageController extends Controller
{

    const parentPath = "language/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "language.index";
    const createRoute = "language.create";
    const editRoute = "language.edit";


    protected $languageService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(LanguageService $languageService)
    {
        $this->languageService = $languageService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }
    public function index(Request $request)
    {
        $dataArr = $this->languageService->index($request);
         // check permission
         $checkPermission = $dataArr["checkPermission"];
         if (!empty($checkPermission)){
             return $checkPermission;
         }
        return renderView(self::indexPath, $dataArr);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->languageService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function create()
    {
        $dataArr = $this->languageService->createView();
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath);
    }

    public function store(StoreLanguageRequest $request)
    {
        $language = $this->languageService->create($request);

        // if have error
        if ($language){
            $msg = $language;
            return redirectView(self::createRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

//    public function show(Language $language)
//    {
//        return redirect()->route('language.edit', $language);
//    }

    public function edit($id)
    {
        $dataArr = $this->languageService->edit($id);
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateLanguageRequest $request, $id)
    {
        $response = $this->languageService->update($id, $request);
        // if have error
        if ($response  && isset($response['error'])){
            $msg = $response['error'];
            return redirectView(self::editRoute, $msg, $this->dangerFlag,$id);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->languageService->destroy($id);
         // check permission
        //  $checkPermission = $dataArr["checkPermission"];
        //  if (!empty($checkPermission)){
        //      return $checkPermission;
        //  }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){

        $dataArr = $this->languageService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);

    }

    public function generateall(){

        generateAllLanguage();
        return redirect()->back();

    }

    

    public function languageTable(Request $request){

        $dataArr = $this->languageService->getlanguageTable($request);
        return $dataArr;

    }

    public function getLanguages(){

        $dataArr = $this->languageService->getlanguages();
        return $dataArr;

    }



}
