<?php

namespace Modules\Template\MPCTemplate1\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Core\Http\Services\LandingPageService;

class MPCTemplate1Controller extends Controller
{
    const parentPath = "Pages/landing_page/";
    const showLanding = self::parentPath."Show";

    protected $landingPageService;

    public function __construct(LandingPageService $landingPageService)
    {
        $this->landingPageService = $landingPageService;
    }

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        // if(!file_exists(storage_path('installed'))){
        //     return redirect('/install');
        // }
        // dd("here");
        $dataArr = $this->landingPageService->index();
        return renderView(self::showLanding, $dataArr);
    }

    // public function showLanding()
    // {

    //     $dataArr = $this->landingPageService->index();
    //     echo $dataArr;exit;
    //     return renderView(self::showLanding, $dataArr);
    // }


    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('mpctemplate1::create');
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
        return view('mpctemplate1::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('mpctemplate1::edit');
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
    public function destroy($id)
    {
        //
    }
}
