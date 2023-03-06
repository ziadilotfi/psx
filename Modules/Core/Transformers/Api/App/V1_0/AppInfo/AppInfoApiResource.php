<?php

namespace Modules\Core\Transformers\Api\App\V1_0\AppInfo;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\AvailableCurrency;
use Modules\Core\Entities\Currency;
use Modules\Core\Entities\FrontendSetting;
use Modules\Core\Entities\MobileSetting;
use Modules\Core\Entities\PhoneCountryCode;
use Modules\Core\Entities\SystemConfig;
use Modules\Core\Transformers\Api\App\V1_0\Currency\CurrencyApiResource;
use Modules\Core\Transformers\Api\App\V1_0\FrontendSetting\FrontendSettingApiResource;
use Modules\Core\Transformers\Api\App\V1_0\MobileSetting\MobileSettingApiResource;
use Modules\Core\Transformers\Api\App\V1_0\PhoneCountryCode\PhoneCountryCodeApiResource;
use Modules\Core\Transformers\Api\App\V1_0\SystemConfig\SystemConfigApiResource;
use Modules\Payment\Entities\Payment;
use Modules\Payment\Entities\PaymentAttribute;
use Modules\Payment\Entities\PaymentInfo;

class AppInfoApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $in_app_purchased_prd_id_android = '';
        $in_app_purchased_prd_id_ios = '';
        $package_in_app_purchased_android = '';
        $package_in_app_purchased_ios = '';
        $noLoginUser = Constants::noLoginUser;
        $activeUser = Constants::activeUser;
        $banned = Constants::banned;
        $deleted = Constants::deleted;
        $unpublished = Constants::unpublished;


        $packageIAP = PaymentInfo::where(PaymentInfo::paymentId, Constants::packageInAppPurchasePaymentId)->with('core_key')->get();
        foreach($packageIAP as $package){
            $conds[PaymentAttribute::paymentId] = $package->payment_id;
            $conds[PaymentAttribute::coreKeysId] = $package->core_keys_id;
            $conds[PaymentAttribute::attributeKey] = Constants::pmtAttrPackageIapStatusCol;
            $statusAttr = PaymentAttribute::where($conds)->first();
            if(!empty($statusAttr) && $statusAttr->attribute_value == 1){
                $conds1[PaymentAttribute::paymentId] = $package->payment_id;
                $conds1[PaymentAttribute::coreKeysId] = $package->core_keys_id;
                $conds1[PaymentAttribute::attributeKey] = Constants::pmtAttrPackageIapTypeCol;
                $typeAttr = PaymentAttribute::where($conds1)->first();
                if(!empty($typeAttr)){
                    $type = $typeAttr->attribute_value;
                    if($type == Constants::iapTypeAndroid){
                        if($package->core_key != null){
                            $package_in_app_purchased_android .= $package->core_key->name . '##';
                        }

                    }else{
                        if($package->core_key != null){
                            $package_in_app_purchased_ios .= $package->core_key->name.'##';
                        }

                    }
                }
            }
        }
        // exit;

        $promoteIAP = PaymentInfo::where(PaymentInfo::paymentId, Constants::promotionInAppPurchasePaymentId)->with('core_key')->get();
        foreach ($promoteIAP as $promote) {
            $conds[PaymentAttribute::paymentId] = $promote->payment_id;
            $conds[PaymentAttribute::coreKeysId] = $promote->core_keys_id;
            $conds[PaymentAttribute::attributeKey] = Constants::pmtAttrPromoteIapStatusCol;
            $statusAttr = PaymentAttribute::where($conds)->first();
            if(!empty($statusAttr) && $statusAttr->attribute_value == 1){
                $conds1[PaymentAttribute::paymentId] = $promote->payment_id;
                $conds1[PaymentAttribute::coreKeysId] = $promote->core_keys_id;
                $conds1[PaymentAttribute::attributeKey] = Constants::pmtAttrPromoteIapTypeCol;
                $typeAttr = PaymentAttribute::where($conds1)->first();
                if(!empty($typeAttr)){
                    $type = $typeAttr->attribute_value;
                    if ($type == Constants::iapTypeAndroid) {
                        if($promote->core_key != null){
                            $in_app_purchased_prd_id_android .= $promote->core_key->name.'##';
                        }
                    } else {
                        if($promote->core_key != null){
                            $in_app_purchased_prd_id_ios .= $promote->core_key->name.'##';
                        }

                    }
                }
            }
        }

        $login_user_id = $request->login_user_id;
        $user_status = new \stdClass;
        if($login_user_id){
            if($login_user_id == $noLoginUser){
                $user_status->user_status = $noLoginUser;
            }else{
                $user = User::find($login_user_id);
                if($user){
                    if($user->is_banned == 1){
                        $user_status->user_status = $banned;
                    }else if($user->status == 0){
                        $user_status->user_status = $unpublished;
                    }else{
                        $user_status->user_status = $activeUser;
                    }
                }else{
                    $user_status->user_status = $deleted;
                }
            }
        }else{
            $user_status->user_status = $noLoginUser;
        }

        return [
            "user_info" => $user_status,
            "frontend_config_setting" => new FrontendSettingApiResource(FrontendSetting::first()),
            "mobile_config_setting" => new MobileSettingApiResource(MobileSetting::first()),
            "app_setting" => new SystemConfigApiResource(SystemConfig::first()),
            "default_currency" => new CurrencyApiResource(Currency::where([Currency::isDefault=>1])->first()),
            "default_phone_country_code" => new PhoneCountryCodeApiResource(PhoneCountryCode::where([PhoneCountryCode::isDefault=>1])->first()),
            "currency_symbol" => (string)AvailableCurrency::where(AvailableCurrency::isDefault,1)->first()->currency_symbol,
            "currency_short_form" => (string)AvailableCurrency::where(AvailableCurrency::isDefault,1)->first()->currency_short_form,
            "stripe_enabled" => (string) Payment::find(Constants::stripePaymentId)->status,
            "stripe_publishable_key" => (string) PaymentInfo::where(PaymentInfo::coreKeysId, Constants::stripePublishableKey)->first()->value,
            "paypal_enabled" => (string) Payment::find(Constants::paypalPaymentId)->status,
            "razor_enabled" => (string) Payment::find(Constants::razorPaymentId)->status,
            "razor_key" => (string) PaymentInfo::where(PaymentInfo::coreKeysId, Constants::razorKey)->first()->value,
            "paystack_enabled" => (string) Payment::find(Constants::paystackPaymentId)->status,
            "paystack_key" => (string) PaymentInfo::where(PaymentInfo::coreKeysId, Constants::paystackKey)->first()->value,
            "offline_enabled" => (string) Payment::find(Constants::offlinePaymentId)->status,
            "promote_in_app_purchased_enable" => (string) Payment::find(Constants::promotionInAppPurchasePaymentId)->status,
            "in_app_purchased_prd_id_ios" => (string)$in_app_purchased_prd_id_ios,
            "in_app_purchased_prd_id_android" => (string)$in_app_purchased_prd_id_android,
            "package_in_app_purchased_ios" => (string)$package_in_app_purchased_ios,
            "package_in_app_purchased_android" => (string)$package_in_app_purchased_android,
        ];
    }
}
