<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\Subcategory;

use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Illuminate\Http\Request;
use Modules\Core\Imports\SubcategoryImport;
use Modules\Core\Http\Services\SubcategoryService;
use Modules\Core\Http\Requests\StoreSubcategoryRequest;
use Modules\Core\Http\Requests\UpdateSubcategoryRequest;

class SubcategoryController extends Controller
{

    const parentPath = "subcategory/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "subcategory.index";
    const createRoute = "subcategory.create";
    const editRoute = "subcategory.edit";

    protected $subcategoryService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(SubcategoryService $subcategoryService)
    {
        $this->subcategoryService = $subcategoryService;

        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }


    public function index(Request $request)
    {
        $dataArr = $this->subcategoryService->index(self::indexRoute,$request);
        // return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        // dd($dataArr) ;
        return renderView(self::indexPath, $dataArr);
    }
    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->subcategoryService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function create()
    {
        $dataArr = $this->subcategoryService->create();
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreSubcategoryRequest $request)
    {
        $subcategory = $this->subcategoryService->store($request);

        // if have error
        if (isset($subcategory['error'])){
            $msg = $subcategory['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

//    public function show(Subcategory $subcategory)
//    {
//        return redirect()->route('subcategory.edit', $subcategory);
//    }

    public function edit($id)
    {
        $dataArr = $this->subcategoryService->edit($id);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateSubcategoryRequest $request, $id)
    {
        $subcategory= $this->subcategoryService->update($id, $request);

        // if have error
        if (isset($subcategory['error'])){
            $msg = $subcategory['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function destroy($id){
        $dataArr = $this->subcategoryService->destroy($id);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){
        $dataArr = $this->subcategoryService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function importCSV(Request $request){

        $import = new SubcategoryImport();
        $import->import($request->file($this->csvFile));
        return back();
    }

}
