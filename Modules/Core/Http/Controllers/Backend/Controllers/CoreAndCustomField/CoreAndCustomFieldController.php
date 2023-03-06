<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\CoreAndCustomField;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\CoreAndCustomFieldService;
use App\Config\ps_constant;


class CoreAndCustomFieldController extends Controller
{

    const parentPath = "core_and_custom_field/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "tables.fields.index";
    const createRoute = "tables.fields.create";
    const editRoute = "tables.fields.edit";

    protected $coreAndCustomFieldService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(CoreAndCustomFieldService $coreAndCustomFieldService)
    {
        $this->coreAndCustomFieldService = $coreAndCustomFieldService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }



    public function index(Request $request)
    {
        if (!permissionControl(Constants::tableFieldModule,ps_constant::readPermission)){
            return redirect()->route('admin.index');
        }

        $dataArr = $this->coreAndCustomFieldService->index($request);
        return renderView(self::indexPath, $dataArr);

    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->coreAndCustomFieldService->makeColumnHideShown($request);

        // $msg = 'ScreenDisplay UiSetting is updated.';
        $msg = __('core__be_screen_display_ui_updated');
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('core::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('core::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('core::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function deleteField(Request $request)
    {
        $dataArr = $this->coreAndCustomFieldService->destroy($request->id);

        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }

        // $msg = 'The '.$dataArr["name"].' row has been deleted successfully.';
        $msg = __('core__be_delete_success',['attribute'=>$dataArr["name"]]);
        return redirect()->back();
    }

    public function enableChange(Request $request){

        $this->coreAndCustomFieldService->makePublishOrUnpublish($request);

        return redirect()->back();
    }

    public function handleIsShowSorting(Request $request)
    {
        $this->coreAndCustomFieldService->handleIsShowSorting($request);

        return redirect()->back();
    }

    public function mandatoryChange(Request $request){

        $this->coreAndCustomFieldService->makeMandatoryOrOptional($request);

        return redirect()->back();
    }

    public function eyeStatusChange(Request $request){
        $this->coreAndCustomFieldService->isIncludedAndIsShow($request);

        return redirect()->back();
    }

    public function handleOrdering(Request $request){
        $this->coreAndCustomFieldService->handleOrdering($request);

        return redirect()->back();
    }
}
