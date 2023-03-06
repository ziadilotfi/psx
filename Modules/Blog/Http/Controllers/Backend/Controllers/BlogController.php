<?php

namespace Modules\Blog\Http\Controllers\Backend\Controllers;

use Illuminate\Routing\Controller;
use Modules\Blog\Http\Requests\StoreBlogRequest;
use Modules\Blog\Http\Requests\UpdateBlogRequest;
use Modules\Blog\Http\Services\BlogService;
use Modules\Core\Constants\Constants;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    const parentPath = "blog/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "blog.index";
    const createRoute = "blog.create";
    const editRoute = "blog.edit";

    protected $blogService, $successFlag, $dangerFlag;

    public function __construct(BlogService $blogService)
    {
        $this->blogService = $blogService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
    }

    public function index(Request $request)
    {
        $dataArr = $this->blogService->index(self::indexRoute,$request);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::indexPath, $dataArr);
    }

    public function create(Request $request)
    {
        $dataArr = $this->blogService->create(self::indexRoute);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::createPath, $dataArr);
    }

    public function store(StoreBlogRequest $request)
    {
        $blog = $this->blogService->store($request);

        // if have error
        if (isset($blog['error'])){
            $msg = $blog['error'];
            return redirectView(self::createRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    public function edit($id)
    {
        $dataArr = $this->blogService->edit($id,self::indexRoute);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return renderView(self::editPath, $dataArr);
    }

    public function update(UpdateBlogRequest $request, $id)
    {
        $blog = $this->blogService->update($id, $request);

        // if have error
        if ($blog){
            $msg = $blog;
            return redirectView(self::editRoute, $msg, $this->dangerFlag, $id);
        }

        return redirect()->back();
    }

    public function destroy($id)
    {
        $dataArr = $this->blogService->destroy($id);
        // check permission
        // $checkPermission = $dataArr["checkPermission"];
        // if (!empty($checkPermission)){
        //     return $checkPermission;
        // }
        return redirectView(self::indexRoute, $dataArr['msg'], $dataArr['flag']);
    }

    public function statusChange($id){

        $this->blogService->makePublishOrUnpublish($id);

        // $msg = 'The status of blog row has been updated successfully.';
        $msg = __('core__be_status_updated');
        return redirectView(self::indexRoute, $msg);

    }

    public function screenDisplayUiStore(Request $request) {

        $parameter = ['page' => $request->current_page];
        $this->blogService->makeColumnHideShown($request);

        // $msg = 'ScreenDisplay UiSetting is updated.';
        $msg = __('core__be_screen_display_ui_updated');
        // return redirectView(self::indexRoute, $msg,null,$parameter);
        return redirect()->back();
    }
}
