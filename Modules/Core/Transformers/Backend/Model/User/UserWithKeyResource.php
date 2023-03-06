<?php

namespace Modules\Core\Transformers\Backend\Model\User;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;
use Modules\Core\Constants\Constants;
use Modules\Core\Entities\CustomizeUiDetail;

class UserWithKeyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $dropDownUi = Constants::dropDownUi;
        $textUi = Constants::textUi;
        $radioUi = Constants::radioUi;
        $checkBoxUi = Constants::checkBoxUi;
        $dateTimeUi = Constants::dateTimeUi;
        $textAreaUi = Constants::textAreaUi;
        $numberUi = Constants::numberUi;
        $multiSelectUi = Constants::multiSelectUi;
        $imageUi = Constants::imageUi;
        $timeOnlyUi = Constants::timeOnlyUi;
        $dateOnlyUi = Constants::dateTimeUi;

        $changedCustomFieldFormat = [];
        $customizeDetails = CustomizeUiDetail::latest()->get();

        $customFields = $this->userRelation;

        foreach ($customFields as $customField) {

            if (isset($customField->customizeUi) && $customField->customizeUi->enable == 1 && $customField->customizeUi->is_delete == 0) {

                $coreKeysId = $customField->core_keys_id;
                $value = '';
                if ($customField->ui_type_id === $dropDownUi) {
                    foreach ($customizeDetails as $customizeDetail) {
                        if ($customizeDetail->id == $customField->value) {
                            $value = $customizeDetail->name;
                        }
                    }
                    $coreKeysId = $customField->core_keys_id . "@@name";
                    $changedCustomFieldFormat[$customField->core_keys_id] = $customField->value;
                } elseif ($customField->ui_type_id === $radioUi) {
                    foreach ($customizeDetails as $customizeDetail) {
                        if ($customizeDetail->id == $customField->value) {
                            $value = $customizeDetail->name;
                        }
                    }
                    $coreKeysId = $customField->core_keys_id . "@@name";
                    $changedCustomFieldFormat[$customField->core_keys_id] = $customField->value;
                } elseif ($customField->ui_type_id === $dateTimeUi) {
                    $value = $customField->value->format('d M Y, h : i');
                } elseif ($customField->ui_type_id === $textAreaUi) {
                    $value = Str::words($customField->value, 5, '...');
                } elseif ($customField->ui_type_id === $timeOnlyUi) {
                    $value = $customField->value->format('h:i');
                } elseif ($customField->ui_type_id === $dateOnlyUi) {
                    $value = $customField->value->format('d M Y');
                } else {
                    $value = $customField->value;
                }
                $changedCustomFieldFormat[$coreKeysId] = $value;
            }
        }
        if($this->user_cover_photo){
            if (file_exists( public_path() . '/' . Constants::originPath . $this->user_cover_photo)) {
                $user_cover_photo = $this->user_cover_photo;
            } else {
                $user_cover_photo = 'default_profile.png';
            }
        } else {
            $user_cover_photo = 'default_profile.png';
        }
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'facebook_id' => $this->facebook_id,
            'google_id' => $this->google_id,
            'phone_id' => $this->phone_id,
            'apple_id' => $this->apple_id,
            'user_phone' => $this->user_phone,
            'user_address' => $this->user_address,
            'user_about_me' => $this->user_about_me,
            'user_cover_photo' => $user_cover_photo,
            'role_id' => $this->role_id,
            'role_id@@name' => isset($this->role) && !empty($this->role) ? $this->role->name : '',
            'status' => $this->status,
            'is_banned' => $this->is_banned,
            'code' => $this->code,
            'user_is_sys_admin' => $this->user_is_sys_admin,
            'overall_rating' => $this->overall_rating,
            'is_show_email' => $this->is_show_email,
            'is_show_phone' => $this->is_show_phone,
            'is_shop_admin' => $this->is_shop_admin,
            'is_city_admin' => $this->is_city_admin,
            'user_lat' => $this->user_lat,
            'user_lng' => $this->user_lng,
            'verify_types' => $this->verify_types,
            'added_date_timestamp' => $this->added_date_timestamp,
            'added_date' => $this->added_date,
            'added_user_id' => $this->added_user_id,
            'added_user_id@@name' => isset($this->owner) && !empty($this->owner)?$this->owner->name:'',
            'updated_date' => $this->updated_date,
            'updated_user_id' => $this->updated_user_id,
            'udpated_user_id@@name' => isset($this->editor) && !empty($this->editor)?$this->editor->name:'',
            'updated_flag' => $this->updated_flag,
            'authorizations' => $this->authorization
        ] + $changedCustomFieldFormat;
    }
}
