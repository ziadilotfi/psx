<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\AvailableCurrency;



use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
// use Modules\Core\Entities\AvailableCurrency;
use Modules\Core\Http\Services\AvailableCurrencyService;
use Modules\Core\Http\Requests\StoreAvailableCurrencyRequest;
use Modules\Core\Http\Requests\UpdateAvailableCurrencyRequest;


class AvailableCurrencyController extends Controller
{
    const parentPath = "currency_available/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "available_currency.index";
    const createRoute = "available_currency.create";
    const editRoute = "available_currency.edit";

    protected $availableCurrencyService, $successFlag, $dangerFlag, $csvFile, $warningFlag;

    public function __construct(AvailableCurrencyService $availableCurrencyService)
    {
        $this->availableCurrencyService = $availableCurrencyService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->warningFlag = Constants::warning;
        $this->csvFile = Constants::csvFile;
    }

    public function index(Request $request)
    {
        $dataArr = $this->availableCurrencyService->index(self::indexRoute,$request);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::indexPath, $dataArr);
    }

    public function create(Request $request)
    {
        $dataArr = $this->availableCurrencyService->create(self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreAvailableCurrencyRequest $request)
    {
        $available_currency = $this->availableCurrencyService->store($request);

        // if have error
        if ($available_currency){
            $msg = $available_currency;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function show($available_currency)
    {
        return redirect()->route('available_currency.edit', $available_currency);
    }

    public function edit($id)
    {
        $dataArr = $this->availableCurrencyService->edit($id,self::indexRoute);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateAvailableCurrencyRequest $request, $id)
    {
        $available_currency = $this->availableCurrencyService->update($id, $request);

        // if have error
        if ($available_currency){
            $msg = $available_currency;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();

    }

    public function destroy($id)
    {
        $dataArr = $this->availableCurrencyService->destroy($id);
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){

        $dataArr = $this->availableCurrencyService->statusChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function defaultChange($id){

        $dataArr = $this->availableCurrencyService->defaultChange($id);
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function screenDisplayUiStore(Request $request) {
        
        $parameter = ['page' => $request->current_page];

        $this->availableCurrencyService->makeColumnHideShown($request);

        $msg = 'ScreenDisplay UiSetting is updated.';
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }
}
