<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\About;

use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use Modules\Core\Http\Services\AboutService;
use Modules\Core\Http\Requests\StoreAboutRequest;
use Modules\Core\Http\Requests\UpdateAboutRequest;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    const parentPath = "about/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "about.index";
    const createRoute = "about.create";
    const editRoute = "about.edit";

    protected $aboutService, $successFlag, $dangerFlag;

    public function __construct(AboutService $aboutService)
    {
        $this->aboutService = $aboutService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
    }

    public function index()
    {

        $dataArr = $this->aboutService->index(self::indexRoute);
        //return $dataArr;
        // check permission
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }else {

            if(empty($dataArr['about'])){
                return renderView(self::createPath,$dataArr);
            }
            return renderView(self::editPath, $dataArr);

       }


    }

    public function store(StoreAboutRequest $request)
    {
        $about = $this->aboutService->create($request);

        // if have error
        if ($about){
            $msg = $about;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'About has been updated successfully.';
        $msg = __('core__be_about_updated');
        return redirectView(self::indexRoute, $msg);
    }

    public function update(Request $request, $id)
    {
        // echo json_encode($request->all());echo json_encode($id);exit;
        // return $request;
        // dd($request);
        $about = $this->aboutService->update($id,$request);

        // if have error
        if ($about){
            $msg = $about;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        // $msg = 'About has been updated successfully.';
        $msg = __('core__be_about_updated');
        return redirectView(self::indexRoute, $msg);
    }
}
