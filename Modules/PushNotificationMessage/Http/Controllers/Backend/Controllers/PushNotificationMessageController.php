<?php

namespace Modules\PushNotificationMessage\Http\Controllers\Backend\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\PushNotificationMessage\Http\Services\PushNotificationMessageService;
use Modules\Core\Constants\Constants;
use Modules\PushNotificationMessage\Http\Requests\StorePushNotificationMessageRequest;

class PushNotificationMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */

    const parentPath = "push_notification_message/";
    const indexPath = self::parentPath."Index";
    const createPath = self::parentPath."Create";
    const editPath = self::parentPath."Edit";
    const indexRoute = "push_notification_message.index";
    const createRoute = "push_notification_message.create";
    const editRoute = "push_notification_message.edit";


    protected $pushNotificationMessageService, $successFlag, $dangerFlag;

    public function __construct(PushNotificationMessageService $pushNotificationMessageService)
    {
        $this->pushNotificationMessageService = $pushNotificationMessageService;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
    }


    public function index(Request $request)
    {
        $dataArr = $this->pushNotificationMessageService->index(self::indexRoute,$request);
        // return $dataArr;
        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::indexPath, $dataArr);
    }
    public function screenDisplayUiStore(Request $request) {



        $parameter = ['page' => $request->current_page];

        $this->pushNotificationMessageService->makeColumnHideShown($request);

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
        $dataArr = $this->pushNotificationMessageService->create(self::indexRoute);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::createPath, $dataArr);

    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(StorePushNotificationMessageRequest $request)
    {
        $noti_message = $this->pushNotificationMessageService->store($request);

        // if have error
        if (isset($noti_message['error'])){
            $msg = $noti_message['error'];
            return redirectView(self::createRoute, $msg, $this->dangerFlag);
        }

        return redirect()->back();
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        $dataArr = $this->pushNotificationMessageService->edit($id, self::indexRoute);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        return renderView(self::editPath, $dataArr);

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
        $dataArr = $this->pushNotificationMessageService->destroy($id);

        $checkPermission = $dataArr["checkPermission"];
        if (!empty($checkPermission)){
            return $checkPermission;
        }

        // $msg = 'The '.$dataArr['title']." row has been deleted successfully.";
        $msg = __('core__be_delete_success',['attribute'=>$dataArr["title"]]);

        return redirectView(self::indexRoute, $msg);
    }
}
