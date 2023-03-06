<?php

namespace Modules\Core\Http\Controllers\Backend\Controllers\LandingPage;

use Inertia\Inertia;
use Illuminate\Routing\Controller;
use Modules\Core\Constants\Constants;
use App\Config\ps_constant;
use Modules\Core\Entities\PsxLandingPage;
use Modules\Core\Http\Services\LandingPageService;
use Modules\Core\Http\Requests\StoreLandingPageRequest;
use Modules\Core\Http\Requests\UpdateLandingPageRequest;
use Illuminate\Http\Request;
use Modules\Core\Http\Services\ImageService;

class LandingPageController extends Controller
{

    const parentPath = "landing_page/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "landing_page.index";
    const createRoute = "landing_page.create";
    const editRoute = "landing_page.edit";
    const showLanding = self::parentPath."Show";

    protected $landingPageService, $dangerFlag,$imageService,$editAbility,$viewAnyAbility;

    public function __construct(LandingPageService $landingPageService,ImageService $imageService)
    {
        $this->landingPageService = $landingPageService;
        $this->dangerFlag = Constants::danger;
        $this->editAbility = Constants::editAbility;
        $this->viewAnyAbility = Constants::viewAnyAbility;
        $this->imageService = $imageService;
    }

    public function index()
    {
        $checkPermission = $this->landingPageService->checkPermission($this->viewAnyAbility, PsxLandingPage::class, "admin.index");

        if($checkPermission){
            return redirect()->route('admin.index');
        }

        $checkEditPermission = permissionControl(Constants::landingPageModule,ps_constant::updatePermission);
        $dataArr = $this->landingPageService->index();

        $dataArr['checkEditPermission'] = $checkEditPermission;

        if(empty($dataArr['landing_page'])){
            return renderView(self::createPath, $dataArr);
        }
        return renderView(self::editPath, $dataArr);
    }

    // public function showLanding()
    // {
    //     $dataArr = $this->landingPageService->index();

    //     return renderView(self::showLanding, $dataArr);
    // }

    public function store(StoreLandingPageRequest $request)
    {
        $response = $this->landingPageService->store($request);

        // if have error
        if ($response){
            $msg = $response;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        $msg = 'The landing page has been updated successfully.';
        return redirectView(self::indexRoute, $msg);
    }

    public function update( UpdateLandingPageRequest $request)
    {
        $response = $this->landingPageService->update(1, $request);

        // if have error
        if ($response){
            $msg = $response;
            return redirectView(self::indexRoute, $msg, $this->dangerFlag);
        }

        $msg = 'The landing page has been updated successfully.';
        return redirectView(self::indexRoute, $msg);

    }
    
}
