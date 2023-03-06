<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\Category;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\CategoryService;
use Modules\Core\Http\Requests\StoreCategoryRequest;
use Modules\Core\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    const parentPath = "category/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "category.index";
    const createRoute = "category.create";
    const editRoute = "category.edit";


    protected $categoryService, $successFlag, $dangerFlag, $csvFile;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->csvFile = Constants::csvFile;
    }



    public function index(Request $request)
    {
        $dataArr = $this->categoryService->index(self::indexRoute,$request);
//         return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->categoryService->makeColumnHideShown($request);

        // $msg = 'ScreenDisplay UiSetting is updated.';
        $msg = __('core__be_screen_display_ui_updated');
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function create()
    {
        $dataArr = $this->categoryService->create();
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath);
    }

    public function store(StoreCategoryRequest $request)
    {
        $category = $this->categoryService->createOrUpdate($request);

        // if have error
        if ($category){
            $msg = $category;
            return redirectView(self::createRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function edit($id)
    {
        $dataArr = $this->categoryService->edit($id);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = $this->categoryService->createOrUpdate($request, $id);

        // if have error
        if ($category){
            $msg = $category;
            return redirectView(self::editRoute, $msg, $this->dangerFlag, $id);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->categoryService->destroy($id);

        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        // $msg = 'The '.$dataArr["name"].' row has been deleted successfully.';
        $msg = __('core__be_delete_success',['attribute'=>$dataArr["name"]]);
        return redirectView(self::indexRoute, $msg);
    }

    public function statusChange($id){

        $this->categoryService->makePublishOrUnpublish($id);

        // $msg = 'The status of category row has been updated successfully.';
        $msg = __('core__be_status_attribute_updated',['attribute'=>__('core__be_category')]);
        // dd($msg);
        return redirectView(self::indexRoute, $msg);

    }

    public function importCSV(Request $request){
        $this->categoryService->importCSVFile($request, $this->csvFile);
        return back();

    }

}
