<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\LocationTownship;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\LocationTownshipService;
use Modules\Core\Http\Requests\StoreLocationTownshipRequest;
use Modules\Core\Http\Requests\UpdateLocationTownshipRequest;

class LocationTownshipController extends Controller
{
    const parentPath = "township/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "township.index";
    const createRoute = "township.create";
    const editRoute = "township.edit";

    protected $townshipService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(LocationTownshipService $townshipService)
    {
        $this->townshipService = $townshipService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }
    public function index(Request $request)
    {
        $dataArr = $this->townshipService->index(self::indexRoute,$request);
//         return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::indexPath, $dataArr);
    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];

        $this->townshipService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }

    public function create()
    {
        $dataArr = $this->townshipService->create();

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreLocationTownshipRequest $request)
    {
        $township = $this->townshipService->store($request);

        // if have error
        if (isset($township['error'])){
            $msg = $township['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function edit($townshipId)
    {
        $dataArr = $this->townshipService->edit($townshipId);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateLocationTownshipRequest $request, $townshipId)
    {
        $township = $this->townshipService->update($townshipId, $request);

        // if have error
        if (isset($township['error'])){
            $msg = $township['error'];
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

    public function destroy($townshipId)
    {
        $dataArr = $this->townshipService->destroy($townshipId);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($townshipId){

        $dataArr = $this->townshipService->statusChange($townshipId);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function importCSV(Request $request){
        $this->townshipService->importCSV($request);
        return back();
    }
}
