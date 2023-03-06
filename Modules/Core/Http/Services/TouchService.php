<?php
namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\Touch;
use Modules\Core\Entities\Item;
use Modules\Core\Http\Services\ItemService;
use Modules\Core\Http\Services\UserAccessApiTokenService;
use App\Config\ps_constant;

class TouchService extends PsService
{
    protected $userAccessApiTokenService;
    public function __construct(ItemService $itemService,UserAccessApiTokenService $userAccessApiTokenService)
    {
        $this->successStatus = Constants::successStatus;
        $this->createdStatusCode = Constants::createdStatusCode;
        $this->okStatusCode = Constants::okStatusCode;
        $this->internalServerErrorStatusCode = Constants::internalServerErrorStatusCode;
        $this->noContentStatusCode = Constants::noContentStatusCode;
        $this->notFoundStatusCode = Constants::notFoundStatusCode;
        $this->publish = Constants::publish;
        $this->unPublish = Constants::unPublish;
        $this->successFlag = Constants::success;
        $this->dangerFlag = Constants::danger;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;
        $this->forbiddenStatusCode = Constants::forbiddenStatusCode;

        $this->loginUserIdParaApi = ps_constant::loginUserIdParaFromApi;
        $this->deviceTokenParaApi = ps_constant::deviceTokenKeyFromApi;

        $this->itemService = $itemService;
        $this->userAccessApiTokenService = $userAccessApiTokenService;


    }

    public function addItemTouchCountFromApi($request){
         // check permission start
         $deviceToken = $request->header($this->deviceTokenParaApi);
         $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

         if (empty($userAccessApiToken)){
             $msg = __('core__api_update_no_permission',[],$request->language_symbol);
             return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
         }
         // check permission end

        $item = $this->itemService->getItem($request->item_id);

        if (!$item || $item->status == -1) {
            return  ['error' => __('touch__api_invalid_item',[],$request->language_symbol) ,'status' =>  $this->badRequestStatusCode ];
        } else {
            $touch = $this->store($request);

            $conds['type_id'] = $request->item_id;
            $conds['type_name'] = 'item';

            $item_touch_count = Touch::where($conds)->count();
            $item_update = Item::where('id', $request->item_id)->first();
            $item_update->id = $request->item_id;
            $item_update->item_touch_count = $item_touch_count;
            $item_update->update();


            if(isset($touch['error'])){
                return  ['error' => __('touch__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
            }
            return  ['success' => __('touch__api_success',[],$request->language_symbol) ,'status' =>  $this->createdStatusCode ];

        }

    }

    public function store($request)
    {
        DB::beginTransaction();

        try {
            $touch = new Touch();
            $touch->type_id = $request->item_id;
            $touch->shop_id = '0';
            $touch->type_name = 'item';
            $touch->user_id = $request->user_id;
            $touch->added_user_id = Auth::user()->id;


            $touch->save();
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];

        }

        return $touch;
    }

    public function deleteAllBy($conds = null)
    {
        DB::beginTransaction();
        try {
            Touch::when($conds, function ($query, $conds) {
                $query->where($conds);

            })->delete();

            DB::commit();
            return true;
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];
        }
    }
}
