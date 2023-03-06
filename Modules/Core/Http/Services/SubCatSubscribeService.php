<?php
namespace Modules\Core\Http\Services;

use App\Http\Services\PsService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\SubcatSubscribe;
use Modules\Core\Http\Services\UserAccessApiTokenService;
use App\Config\ps_constant;

class SubCatSubscribeService extends PsService
{
    protected $userAccessApiTokenService;
    public function __construct(UserAccessApiTokenService $userAccessApiTokenService)
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
        $this->forbiddenStatusCode = Constants::forbiddenStatusCode;

        $this->loginUserIdParaApi = ps_constant::loginUserIdParaFromApi;
        $this->deviceTokenParaApi = ps_constant::deviceTokenKeyFromApi;

        $this->userAccessApiTokenService = $userAccessApiTokenService;

    }

    public function subCategorySubscribeFromApi($request){

         // check permission start
         $deviceToken = $request->header($this->deviceTokenParaApi);
         $userAccessApiToken = $this->userAccessApiTokenService->getUserAccessApiToken( $request->login_user_id, $deviceToken);

         if (empty($userAccessApiToken)){
             $msg = __('core__api_update_no_permission',[],$request->language_symbol);
             return ['error' =>  $msg,'status' =>  $this->forbiddenStatusCode ];
         }
         // check permission end

        $subcat_ids = $request->sub_cat_ids;

        foreach ($subcat_ids as $subcat_id) {
            $data = [
                'user_id' => $request->user_id,
                'cat_id' => $request->cat_id,
                'subcat_id' => $subcat_id,
            ];

            if (!SubcatSubscribe::where($data)->first()) {

                $subcat = $this->store($data);
            } else {

                $sub_cats = SubcatSubscribe::where($data)->first();
                $id = $sub_cats->id;

                $subcat = $this->destroy($id);

            }
        }

        if(isset($subcat['error'])){
            return  ['error' => __('subcat_subscribe__api_db_error',[],$request->language_symbol) ,'status' =>  $this->internalServerErrorStatusCode ];
        }
        return  ['success' => __('subcat_subscribe__api_success',[],$request->language_symbol) ,'status' =>  $this->createdStatusCode ];



    }

    public function store($data)
    {
        DB::beginTransaction();

        try {
            $subcat = new SubcatSubscribe();
            $subcat->user_id = $data['user_id'];
            $subcat->cat_id = $data['cat_id'];
            $subcat->subcat_id = $data['subcat_id'];
            $subcat->added_user_id = Auth::user()->id;


            $subcat->save();
            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();
            return ['error' => $e->getMessage()];

        }

        return $subcat;
    }

    public function destroy($id){
        $subcat = SubcatSubscribe::find($id);

        $subcat->delete();
    }
}
