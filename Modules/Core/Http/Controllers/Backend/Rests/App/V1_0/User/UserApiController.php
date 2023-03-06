<?php

namespace Modules\Core\Http\Controllers\Backend\Rests\App\V1_0\User;

use Carbon\Carbon;
use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Modules\Core\Http\Services\UserService;
use Illuminate\Support\Facades\Validator;
use Exception;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Mail;
use Modules\Core\Constants\Constants;
use Modules\Core\Emails\SendEmailRegistedUserWithVerification;
use Modules\Core\Emails\SendEmailResetPasswordLink;
use Modules\Core\Http\Services\BackendSettingService;
use Modules\Core\Http\Services\PushNotificationTokenService;
use Modules\Core\Http\Services\ImageService;
use Modules\Core\Http\Services\UserAccessApiTokenService;
use Modules\Rating\Http\Services\RatingService;
use Modules\Core\Http\Services\ItemService;
use Modules\FollowUser\Http\Services\FollowUserService;
use Modules\Core\Http\Services\ResetCodeService;
use Modules\Core\Transformers\Api\App\V1_0\User\UserApiResource;
use Modules\BlueMarkUser\Http\Services\BlueMarkUserService;
use Modules\Core\Http\Services\FavouriteService;
use Modules\Chat\Http\Services\ChatService;
use Modules\ComplaintItem\Http\Services\ComplaintItemService;
use Modules\ItemPromotion\Http\Services\PaidItemService;
use Modules\BlockUser\Http\Services\BlockUserService;
use Modules\Core\Http\Services\TouchService;
use Illuminate\Contracts\Translation\Translator;

class UserApiController extends Controller
{
    protected $translator,$touchService,$userAccessApiTokenService, $userService,$blueMarkUserService, $complaintItemService,$chatService,$favouriteService,$paidItemService, $ratingService, $itemService, $followUserService, $successStatus, $okStatusCode, $internalServerErrorStatusCode, $badRequestStatusCode, $notFoundStatusCode, $resetCodeService, $pushNotificationTokenService, $imageService, $backendSettingService, $emailVerify, $googleVerify, $facebookVerify, $phoneVerify, $appleVerify, $publish, $normalUserRoleId, $blockUserService;

    public function __construct(Translator $translator,TouchService $touchService,UserService $userService, ChatService $chatService, BlueMarkUserService $blueMarkUserService, FavouriteService $favouriteService, PaidItemService $paidItemService, ComplaintItemService $complaintItemService,RatingService $ratingService,ItemService $itemService,FollowUserService $followUserService, BlockUserService $blockUserService, ResetCodeService $resetCodeService, PushNotificationTokenService $pushNotificationTokenService,ImageService $imageService, BackendSettingService $backendSettingService, UserAccessApiTokenService $userAccessApiTokenService)
    {
        $this->translator = $translator;
        $this->touchService = $touchService;
        $this->userService = $userService;
        $this->complaintItemService = $complaintItemService;
        $this->chatService = $chatService;
        $this->blueMarkUserService = $blueMarkUserService;
        $this->favouriteService = $favouriteService;
        $this->paidItemService = $paidItemService;
        $this->ratingService = $ratingService;
        $this->followUserService = $followUserService;
        $this->blockUserService = $blockUserService;
        $this->itemService = $itemService;
        $this->resetCodeService = $resetCodeService;
        $this->pushNotificationTokenService = $pushNotificationTokenService;
        $this->imageService = $imageService;
        $this->backendSettingService = $backendSettingService;
        $this->userAccessApiTokenService = $userAccessApiTokenService;

        $this->successStatus = Constants::successStatus;
        $this->okStatusCode = Constants::okStatusCode;
        $this->internalServerErrorStatusCode = Constants::internalServerErrorStatusCode;
        $this->badRequestStatusCode = Constants::badRequestStatusCode;
        $this->notFoundStatusCode = Constants::notFoundStatusCode;

        $this->uploadPathForDel = Constants::uploadPathForDel;
        $this->thumb1xPathForDel = Constants::thumb1xPathForDel;
        $this->thumb2xPathForDel = Constants::thumb2xPathForDel;
        $this->thumb3xPathForDel = Constants::thumb3xPathForDel;

        $this->emailVerify = Constants::emailVerify;
        $this->googleVerify = Constants::googleVerify;
        $this->facebookVerify = Constants::facebookVerify;
        $this->phoneVerify = Constants::phoneVerify;
        $this->appleVerify = Constants::appleVerify;

        $this->publish = Constants::publishUser;

        $this->normalUserRoleId = Constants::normalUserRoleId;
    }

    public function login(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end
        $email = $request->email;
        $password = $request->password;
        $conds = ['email' => $email, 'password' => $password];

        if($this->userService->exists($conds)){
            $user = $this->userService->loginFromApi($request);
            return $user;
        }
        return responseMsgApi(__('core__api_invalid_login',[],$request->language_symbol), $this->badRequestStatusCode);

    }

    public function register(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $user = $this->userService->registerFromApi($request);

        return $user;
    }

    /**
     * User Verified Code
     */
    function verifyCode(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'code' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $user_verify_data = array(
            "code"     => $request->code,
            "id"  => $request->user_id,
            // "status"   => 2
        );

        $user = $this->userService->getUser(null, $user_verify_data);

        if(!empty($user)){
            if ($user->id  == $request->user_id) {
                $user_data = new \stdClass;
                $user_data->code = '';
                $user_data->status = 1;
                $user_data->id = $request->user_id;

                // $user_data['id'] = $user->id;
                $user = $this->userService->updateFromApi($user_data, $user->id);
                return $user;
            }
        }
        return responseMsgApi(__('core__api_invalid',[],$request->language_symbol), $this->badRequestStatusCode);
    }

    /**
     * Users Request Code
     */
    function requestCode(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|exists:users,email',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $email = $request->user_email;

        $conds['email'] = $email;
        $conds['status'] = '1';

        $user = $this->userService->getUser(null, $conds);
        if(!empty($user)){
            if (empty($user->code)) {
                $code = generate_random_string(5);
                $user_data_code = new \stdClass;
                $user_data_code->id = $user->id;
                $user_data_code->code = $code;

                $user = $this->userService->storeOrUpdateFromApi($user_data_code);
            }
        }else{
            return responseMsgApi(__('core__api_invalid',[],$request->language_symbol), $this->okStatusCode, $this->successStatus);
        }

        // send mail
        $to = $email;
        $subject = __('core__api_verify_code_sent',[],$request->language_symbol);
        $to_name = $user->name;
        $title = __('core__api_verify_code_sent_title',[],$request->language_symbol);
        $body = __('core__api_need_to_verify',[],$request->language_symbol);
        $subbody = __('core__api_verify_code',[],$request->language_symbol) . ': ' . $user->code;
        if(!sendMail($to, $to_name, $title, $subject, $body, $subbody)){
            return responseMsgApi(__('core__api_email_not_sent',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }
        return responseMsgApi(__('core__api_verify_code_sent_to_mail',[],$request->language_symbol), $this->okStatusCode, $this->successStatus);
    }

    /**
     * Users Logout
     */
    function logout(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        // delete token from user_access_api_tokens table
        $user = $this->userService->logout($request);
        if ($user){
            return responseMsgApi(__('core__api_logout_success',[],$request->language_symbol), $this->okStatusCode);
        }

    }

    function updateVerifyType($verify_type, $conds){

        $existingUser = $this->userService->getUser(null,$conds);

        if($existingUser && $existingUser->is_banned != 1){
            $verifyTypes = explode(',', $existingUser->verify_types);
            if (!in_array($verify_type, $verifyTypes)) {
                array_push($verifyTypes, $verify_type);
            }

            $verifyTypesString = implode(",", $verifyTypes);

            $existingUser->verify_types = $verifyTypesString;

            $existingUser->update();

            return $existingUser->verify_types;
        }
        return $verify_type;
    }

    /**
     * Users Registration with Phone
     */
    function phoneRegister(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'phone_id' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $user_data = new \stdClass;
        $user_data->name = $request->name;
        $user_data->email = "";
        $user_data->user_phone = $request->user_phone;
        $user_data->phone_id = $request->phone_id;
        $user_data->permissions = $this->normalUserRoleId;
        $user_data->status = $this->publish;
        $user_data->verify_types = $this->phoneVerify;
        $user_data->code = '';
        $added_date = Carbon::now();

        //Need to check phone_id is aleady exist or not?
        $conds['phone_id'] = $request->phone_id;
        if (!$this->userService->exists($conds)) {
            //User not yet exist

            //prepare validation
            $validator = Validator::make($request->all(), [
                'name' => 'required',
            ]);

            if($request->language_symbol){
                $this->translator->setLocale($request->language_symbol);
                $validator->setTranslator($this->translator);
            }

            if ($validator->fails()) {
                return responseMsgApi($validator->errors(), $this->badRequestStatusCode);
            }
            /// validation end
            $phone_id = $request->phone_id;

            if ($user_data->user_phone != "") {
                $cond_user_existed['user_phone'] = $user_data->user_phone;
                $user_infos = $this->userService->getUser(null, $cond_user_existed);
                $id = empty($user_infos)?'' : $user_infos->id;
            }

            if ($id != "") {
                //user phone alerady exist
                $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$cond_user_existed);

                //for user name and user phone
                $name = $request->name;
                $user_phone = $request->user_phone;

                if ($name == "" && $user_phone == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->user_phone = $user_infos->user_phone;
                } else if ($name == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->user_phone =$user_phone;
                } else if ($user_phone == "") {
                    $user_data->name = $name;
                    $user_data->user_phone = $user_infos->user_phone;
                } else {
                    $user_data->name = $name;
                    $user_data->user_phone = $user_phone;
                }

                if($id != ''){
                    $user_data->id = $id;
                    $user = $this->userService->updateFromApi($user_data, $id);
                }else{
                    $user = $this->userService->storeFromApi($user_data);
                }

                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);

            } else {
                //user phone not exist
                $user = $this->userService->storeFromApi($user_data);
                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
            }

        } else {
            //User already exist in DB
            $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$conds);

            $conds['phone_id'] = $request->phone_id;
            $user_social_info_override = $this->backendSettingService->getBackendSetting()->user_social_info_override;

            if ($user_social_info_override == '1') {

                //Download again
                $phone_id = $request->phone_id;

                //for user name and user phone
                $name = $request->name;
                $user_phone = $request->user_phone;

                if ($name == "" && $user_phone == "") {
                    $user_data->device_token = $request->device_token;
                } else if ($name == "") {
                    $user_data->user_phone = $request->user_phone;
                    $user_data->device_token = $request->device_token;

                } else if ($user_phone == "") {
                    $user_data->name = $request->name;
                    $user_data->device_token = $request->device_token;

                } else {
                    $user_data->name = $request->name;
                    $user_data->user_phone = $request->user_phone;
                    $user_data->device_token = $request->device_token;
                }

                $conds['phone_id'] = $request->phone_id;
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi(__('core__api_banned_user',[],$request->language_symbol), $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            } else {
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            }
        }

        // save or update in user_access_api_tokens table start
        $userId = $user->id;
        $deviceId = $request->device_id;
        $userAccessApiTokenStoreOrUpdate = $this->userAccessApiTokenService->storeOrUpdate($request, $userId, $deviceId);
        if (!$userAccessApiTokenStoreOrUpdate){
            return responseMsgApi(__('core__api_db_error',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }
        // save or update in user_access_api_tokens table end

        $user = new UserApiResource($user);
        return $user;
    }

    /**
     * Users Registration with Apple
     */
    function appleRegister(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'apple_id' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $user_data = new \stdClass;
        $user_data->name = $request->name;
        $user_data->email = $request->email;
        $user_data->apple_id = $request->apple_id;
        $user_data->permissions = $this->normalUserRoleId;
        $user_data->status = $this->publish;
        $user_data->verify_types = $this->appleVerify;
        $user_data->code = '';
        $added_date = Carbon::now();

        //Need to check apple_id is aleady exist or not?
        $conds['apple_id'] = $request->apple_id;
        if (!$this->userService->exists($conds)) {
            //User not yet exist

            //prepare validation
            $validator = Validator::make($request->all(), [
                'name' => 'required',
            ]);

            if($request->language_symbol){
                $this->translator->setLocale($request->language_symbol);
                $validator->setTranslator($this->translator);
            }

            if ($validator->fails()) {
                return responseMsgApi($validator->errors(), $this->badRequestStatusCode);
            }
            /// validation end
            $apple_id = $request->apple_id;
            $url = $request->profile_photo_url;

            if ($url != "") {
                $img = md5(time()) . '.jpg';
                $this->imageService->saveImageFromUrl($img, $url);
                $user_data->user_cover_photo = $img;
            }

            $user_data->name = $request->name;
            $user_data->added_date = $added_date;
            $user_data->added_date_timestamp = strtotime($added_date);

            if ($user_data->email != "") {
                $cond_user_existed['email'] = $user_data->email;
                $user_infos = $this->userService->getUser(null, $cond_user_existed);
                $id = empty($user_infos)?'' : $user_infos->id;
            }

            if ($id != "") {
                //user email alerady exist
                $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$cond_user_existed);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email = $user_infos->email;
                } else if ($name == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email =$email;
                } else if ($email == "") {
                    $user_data->name = $name;
                    $user_data->email = $user_infos->email;
                } else {
                    $user_data->name = $name;
                    $user_data->email = $email;
                }

                if($id != ''){
                    $user_data->id = $id;
                    $user = $this->userService->updateFromApi($user_data, $id);
                }else{
                    $user = $this->userService->storeFromApi($user_data);
                }

                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);

            } else {
                //user email not exist
                $user = $this->userService->storeFromApi($user_data);
                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
            }

        } else {
            //User already exist in DB
            $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$conds);

            $conds['apple_id'] = $request->apple_id;
            $user_social_info_override = $this->backendSettingService->getBackendSetting()->user_social_info_override;

            if ($user_social_info_override == '1') {
                $user_cover_photo = $this->userService->getUser(null, $conds)->user_cover_photo;

                //Delete existing image
                $this->imageService->deleteImage($user_cover_photo);

                //Download again
                $apple_id = $request->apple_id;
                $url = $request->profile_photo_url;

                if ($url != "") {

                    $img = md5(time()) . '.jpg';
                    $this->imageService->saveImageFromUrl($img, $url);
                    $user_data->user_cover_photo = $img;

                }

                $user_data->name = $request->name;
                $user_data->added_date = $added_date;
                $user_data->added_date_timestamp = strtotime($added_date);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($name == "") {
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($email == "") {
                    $user_data->name = $request->name;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else {
                    $user_data->name = $request->name;
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;
                }

                $conds['apple_id'] = $request->apple_id;
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            } else {
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            }
        }

        // save or update in user_access_api_tokens table start
        $userId = $user->id;
        $deviceId = $request->device_id;
        $userAccessApiTokenStoreOrUpdate = $this->userAccessApiTokenService->storeOrUpdate($request, $userId, $deviceId);
        if (!$userAccessApiTokenStoreOrUpdate){
            return responseMsgApi(__('core__api_db_error',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }
        // save or update in user_access_api_tokens table end

        $user = new UserApiResource($user);
        return $user;
    }

     /**
     * Users Registration with Facebook
     */
    function facebookRegister(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'facebook_id' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $app_token = $this->backendSettingService->getBackendSetting()->app_token;

        $user_data = new \stdClass;
        $user_data->name = $request->name;
        $user_data->email = $request->email;
        $user_data->facebook_id = $request->facebook_id;
        $user_data->permissions = $this->normalUserRoleId;
        $user_data->status = $this->publish;
        $user_data->verify_types = $this->facebookVerify;
        $user_data->code = '';
        $added_date = Carbon::now();

        //Need to check facebook_id is aleady exist or not?
        $conds['facebook_id'] = $request->facebook_id;
        if (!$this->userService->exists($conds)) {
            //User not yet exist

            //prepare validation
            $validator = Validator::make($request->all(), [
                'name' => 'required',
            ]);

            if($request->language_symbol){
                $this->translator->setLocale($request->language_symbol);
                $validator->setTranslator($this->translator);
            }

            if ($validator->fails()) {
                return responseMsgApi($validator->errors(), $this->badRequestStatusCode);
            }
            /// validation end
            $facebook_id = $request->facebook_id;

            if($request->profile_img_id != ""){
                $url = "https://graph.facebook.com/$request->profile_img_id/picture?width=350&height=500&access_token=" . $app_token;

                $img = md5(time()) . '.jpg';
                $this->imageService->saveImageFromUrl($img, $url);
                $user_data->user_cover_photo = $img;

            }

            $user_data->name = $request->name;
            $user_data->added_date = $added_date;
            $user_data->added_date_timestamp = strtotime($added_date);

            if ($user_data->email != "") {
                $cond_user_existed['email'] = $user_data->email;
                $user_infos = $this->userService->getUser(null, $cond_user_existed);
                $id = empty($user_infos)?'' : $user_infos->id;
            }

            if ($id != "") {
                //user email alerady exist
                $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$cond_user_existed);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email = $user_infos->email;
                } else if ($name == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email =$email;
                } else if ($email == "") {
                    $user_data->name = $name;
                    $user_data->email = $user_infos->email;
                } else {
                    $user_data->name = $name;
                    $user_data->email = $email;
                }

                if($id != ''){
                    $user_data->id = $id;
                    $user = $this->userService->updateFromApi($user_data, $id);
                }else{
                    $user = $this->userService->storeFromApi($user_data);
                }

                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);

            } else {
                //user email not exist
                $user = $this->userService->storeFromApi($user_data);
                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
            }

        } else {
            //User already exist in DB
            $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$conds);

            $conds['facebook_id'] = $request->facebook_id;
            $user_social_info_override = $this->backendSettingService->getBackendSetting()->user_social_info_override;

            if ($user_social_info_override == '1') {
                $user_cover_photo = $this->userService->getUser(null, $conds)->user_cover_photo;

                //Delete existing image
                $this->imageService->deleteImage($user_cover_photo);

                //Download again
                $facebook_id = $request->facebook_id;
                if($request->profile_img_id != ""){
                    $url = "https://graph.facebook.com/$request->profile_img_id/picture?width=350&height=500&access_token=" . $app_token;

                    $img = md5(time()) . '.jpg';
                    $this->imageService->saveImageFromUrl($img, $url);
                    $user_data->user_cover_photo = $img;
                }

                $user_data->name = $request->name;
                $user_data->added_date = $added_date;
                $user_data->added_date_timestamp = strtotime($added_date);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($name == "") {
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($email == "") {
                    $user_data->name = $request->name;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else {
                    $user_data->name = $request->name;
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;
                }

                $conds['facebook_id'] = $request->facebook_id;
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            } else {
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            }
        }

        // save or update in user_access_api_tokens table start
        $userId = $user->id;
        $deviceId = $request->device_id;
        $userAccessApiTokenStoreOrUpdate = $this->userAccessApiTokenService->storeOrUpdate($request, $userId, $deviceId);
        if (!$userAccessApiTokenStoreOrUpdate){
            return responseMsgApi(__('core__api_db_error',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }
        // save or update in user_access_api_tokens table end

        $user = new UserApiResource($user);
        return $user;
    }

    /**
     * Users Registration with Google
     */
    function googleRegister(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'google_id' => 'required',
            'device_token' => 'required',
            'platform_name' => 'required',
            'device_info' => 'required',
            'device_id' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $user_data = new \stdClass;
        $user_data->name = $request->name;
        $user_data->email = $request->email;
        $user_data->google_id = $request->google_id;
        $user_data->permissions = $this->normalUserRoleId;
        $user_data->status = $this->publish;
        $user_data->verify_types = $this->googleVerify;
        $user_data->code = '';
        $added_date = Carbon::now();

        //Need to check google_id is aleady exist or not?
        $conds['google_id'] = $request->google_id;
        if (!$this->userService->exists($conds)) {
            //User not yet exist

            //prepare validation
            $validator = Validator::make($request->all(), [
                'name' => 'required',
            ]);

            if($request->language_symbol){
                $this->translator->setLocale($request->language_symbol);
                $validator->setTranslator($this->translator);
            }

            if ($validator->fails()) {
                return responseMsgApi($validator->errors(), $this->badRequestStatusCode);
            }
            /// validation end
            $google_id = $request->google_id;
            $url = $request->profile_photo_url;

            if ($url != "") {

                $img = md5(time()) . '.jpg';
                $this->imageService->saveImageFromUrl($img, $url);
                $user_data->user_cover_photo = $img;

            }

            $user_data->name = $request->name;
            $user_data->added_date = $added_date;
            $user_data->added_date_timestamp = strtotime($added_date);

            if ($user_data->email != "") {
                $cond_user_existed['email'] = $user_data->email;
                $user_infos = $this->userService->getUser(null, $cond_user_existed);
                $id = empty($user_infos)?'' : $user_infos->id;
            }

            if ($id != "") {
                //user email alerady exist
                $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$cond_user_existed);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email = $user_infos->email;
                } else if ($name == "") {
                    $user_data->name = $user_infos->name;
                    $user_data->email =$email;
                } else if ($email == "") {
                    $user_data->name = $name;
                    $user_data->email = $user_infos->email;
                } else {
                    $user_data->name = $name;
                    $user_data->email = $email;
                }

                if($id != ''){
                    $user_data->id = $id;
                    $user = $this->userService->updateFromApi($user_data, $id);
                }else{
                    $user = $this->userService->storeFromApi($user_data);
                }

                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);

            } else {
                //user email not exist
                $user = $this->userService->storeFromApi($user_data);
                $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
            }

        } else {
            //User already exist in DB
            $user_data->verify_types = $this->updateVerifyType($user_data->verify_types,$conds);

            $conds['google_id'] = $request->google_id;
            $user_social_info_override = $this->backendSettingService->getBackendSetting()->user_social_info_override;

            if ($user_social_info_override == '1') {
                $user_cover_photo = $this->userService->getUser(null, $conds)->user_cover_photo;

                //Delete existing image
                $this->imageService->deleteImage($user_cover_photo);

                //Download again
                $google_id = $request->google_id;
                $url = $request->profile_photo_url;

                if ($url != "") {

                    $img = md5(time()) . '.jpg';
                    $this->imageService->saveImageFromUrl($img, $url);
                    $user_data->user_cover_photo = $img;

                }

                $user_data->name = $request->name;
                $user_data->added_date = $added_date;
                $user_data->added_date_timestamp = strtotime($added_date);

                //for user name and user email
                $name = $request->name;
                $email = $request->email;

                if ($name == "" && $email == "") {
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($name == "") {
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else if ($email == "") {
                    $user_data->name = $request->name;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;

                } else {
                    $user_data->name = $request->name;
                    $user_data->email = $request->email;
                    $user_data->device_token = $request->device_token;
                    $user_data->user_cover_photo = $request->user_cover_photo;
                }

                $conds['google_id'] = $request->google_id;
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            } else {
                $user_datas = $this->userService->getUser(null, $conds);
                $id = $user_datas->id;

                if ($user_datas->is_banned == 1) {

                    return responseMsgApi('core__api_banned_user', $this->badRequestStatusCode);
                } else {
                    if ($id != '') {
                        $user_data->id = $id;
                        $user = $this->userService->updateFromApi($user_data, $id);
                    } else {
                        $user = $this->userService->storeFromApi($user_data);
                    }

                    $this->pushNotificationTokenService->storeOrUpdateNotiToken($request, $user->id);
                }
            }
        }

        // save or update in user_access_api_tokens table start
        $userId = $user->id;
        $deviceId = $request->device_id;
        $userAccessApiTokenStoreOrUpdate = $this->userAccessApiTokenService->storeOrUpdate($request, $userId, $deviceId);
        if (!$userAccessApiTokenStoreOrUpdate){
            return responseMsgApi(__('core__api_db_error',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }
        // save or update in user_access_api_tokens table end

        $user = new UserApiResource($user);
        return $user;
    }

    public function search(Request $request)
    {
        $users = $this->userService->searchFromApi($request);
        return $users;
    }

    public function deleteUser(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }

        $id = $request->user_id;

        $conds['id'] = $id;
        $user = $this->userService->getUser($conds);

        if($user->user_is_sys_admin == '1'){
            // if user is system admin
            return responseMsgApi(__('core__api_cannot_delete',[],$request->language_symbol), $this->badRequestStatusCode);
        }else{

            //delete rating
            $fromUserCond['from_user_id'] = $id;
            $toUserCond['to_user_id'] = $id;
            $this->ratingService->deleteAllBy(null, $fromUserCond);
            $this->ratingService->deleteAllBy(null, $toUserCond);

            //delete follow
            $followUserCond['user_id'] = $id;
            $followedUserCond['followed_user_id'] = $id;
            $this->followUserService->deleteAllBy($followUserCond);
            $this->followUserService->deleteAllBy($followedUserCond);

            // delete block
            $fromBlockUserCond['from_block_user'] = $id;
            $toBlockUserCond['to_block_user'] = $id;
            $this->blockUserService->deleteAllBy($fromBlockUserCond);
            $this->blockUserService->deleteAllBy($toBlockUserCond);

            //delete noti
            $notiCond['user_id'] = $id;
            $this->pushNotificationTokenService->deleteAllBy(null, $notiCond);

            //delete Item
            $itemCond['user_id'] = $id;
            $itemdeleteCond['added_user_id'] = $id;
            $items = $this->itemService->getItems(null, null, null, null, null, $itemdeleteCond);
            foreach($items as $item){
                $this->itemService->destroy($item->id);

                $itemConds['item_id'] = $item->id;
                $this->touchService->deleteAllBy($itemConds);
                $this->imageService->deleteAllBy($itemConds);
                $this->complaintItemService->deleteAllBy($itemConds);
                $this->chatService->deleteAllBy($itemConds);
                $this->favouriteService->deleteAllBy($itemConds);
                $this->paidItemService->deleteAllBy($itemConds);
            }
            // delete Notireaduser
            // $blueMarkConds['user_id'] = $id;
            // $this->blueMarkUserService->deleteAllBy($blueMarkConds);

            // delete blue mark user
            $blueMarkConds['user_id'] = $id;
            $this->blueMarkUserService->deleteAllBy($blueMarkConds);

            //delete user
            $response = $this->userService->destroyFromApi($request);
            return $response;
        }

    }

    // user detail api
    public function userDetail(Request $request)
    {
        $user = $this->userService->getFromApi($request);
        return $user;
    }

    //verify user bluemark
    public function verifyBlueMark(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }

        $response = $this->userService->verifyBlueMarkFromApi($request);
        return $response;
    }

    /**
     * Users upload Image
     */
    public function userImageUpload(Request $request){

        // return $_FILES;
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'file' => 'required',
            'platform_name' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }

        $response = $this->userService->uploadUserImageFromApi($request);
        return $response;
    }

    /**
     * Users Password Update
     */
    public function userPasswordUpdate(Request $request){

        // return $_FILES;
        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'user_password' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }

        $response = $this->userService->updatePasswordFromApi($request);

        return $response;

    }

    /**
     * Users Profile Update
     */
    public function userProfileUpdate(Request $request){

        //prepare validation
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|exists:users,id',
            'name' => 'required',
            'email' => 'required|email',
            'user_phone' => 'required',
            'user_about_me' => 'required',
            'is_show_email' => 'required',
            'is_show_phone' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }

        $user = $this->userService->getUser($request->user_id);

        if ($user->email != $request->email) {
            //if email changed, check email
            $checkEmail['email'] = $request->email;
            if ($this->userService->exists($checkEmail)) {
                return responseMsgApi(__('core__api_email_already_existed',[],$request->language_symbol), $this->badRequestStatusCode);
            }
        }
        if ($user->user_phone != $request->user_phone) {
            //if email changed, check email
            $checkPhone['user_phone'] = $request->user_phone;
            if ($this->userService->exists($checkPhone)) {
                return responseMsgApi(__('core__api_phone_already_existed',[],$request->language_symbol), $this->badRequestStatusCode);
            }
        }

        $response = $this->userService->updateFromApi($request, $request->id);
        return $response;
    }

    /**
     * User Reset Password
     */
    function resetPassword(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users,email',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $conds['email'] = $request->email;

        // generate code
        $code = md5(time() . 'teamps');

        $user = $this->userService->getUser(null, $conds);

        // insert to reset
        $data = new \stdClass;
        $data->id = $user->id;
        $data->code = $code;

        $this->resetCodeService->create($data);

        // send mail
        $to = $request->email;
        $subject = __('core__api_reset_code',[],$request->language_symbol);
        $to_name = $user->name;
        $title = __('core__api_reset_code_title',[],$request->language_symbol);
        $flag = "reset";

        if(!sendMail($to, $to_name, $title, $subject, null, null, $flag)){
            return responseMsgApi(__('core__api_email_not_sent',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }

        return responseMsgApi(__('core__api_success_reset_email_sent',[],$request->language_symbol), $this->okStatusCode, $this->successStatus);
    }

    function forgotPassword(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users,email',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $conds['email'] = $request->email;

        // generate code
        $codeMd5 = md5(time() . 'teamps');
        $code = substr($codeMd5, 0, 8);

        $user = $this->userService->setResetPasswordCode( $request, $code);

        // send mail
        $to = $request->email;
        $subject = __('core__api_forgot_password',[],$request->language_symbol);
        $to_name = $user->name;
        $title = __('core__api_forgot_password_title',[],$request->language_symbol);
        $flag = "forgot_password";

        $msg = __('core__your_password_reset_code_is',[],$request->language_symbol) . ' ' . $code;

        if(!sendMail($to, $to_name, $title, $subject, $msg, null, $flag)){
            return responseMsgApi(__('core__api_email_not_sent',[],$request->language_symbol), $this->internalServerErrorStatusCode);
        }

        return responseMsgApi(__('core__api_success_email_sent',[],$request->language_symbol), $this->okStatusCode, $this->successStatus);
    }

    function forgotPasswordVerify(Request $request)
    {
        //prepare validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users,email',
            'code' => 'required',
        ]);

        if($request->language_symbol){
            $this->translator->setLocale($request->language_symbol);
            $validator->setTranslator($this->translator);
        }

        if ($validator->fails()) {
            return responseMsgApi(implode("\n", Arr::flatten($validator->getMessageBag()->getMessages())), $this->badRequestStatusCode);
        }
        /// validation end

        $response = $this->userService->checkResetPasswordCode( $request);

        if($response){
            $conds['email'] = $request->email;
            $user = $this->userService->getUser(null, $conds);
            $user = new UserApiResource($user);
            return responseDataApi($user);
        }

        return responseMsgApi(__('core__api_code_not_same',[],$request->language_symbol), $this->badRequestStatusCode);
    }
}
