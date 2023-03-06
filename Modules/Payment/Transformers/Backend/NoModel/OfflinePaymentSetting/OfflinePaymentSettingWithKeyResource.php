<?php

namespace Modules\Payment\Transformers\Backend\NoModel\OfflinePaymentSetting;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Core\Constants\Constants;

class OfflinePaymentSettingWithKeyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->core_key->name,
            'core_keys_id' => $this->core_keys_id,
            'description' => $this->value,
            'status' => !empty($this->statusAttribute) ? $this->statusAttribute->attribute_value:0,
            'added_date' => $this->added_date,
            'added_user_id' => $this->added_user_id,
            'added_user@@name' => isset($this->owner) && !empty($this->owner) ? $this->owner->name : '',
            'updated_date' => $this->updated_date,
            'updated_user_id' => $this->updated_user_id,
            'updated_user@@name' => isset($this->editor) && !empty($this->editor) ? $this->editor->name : '',
            'updated_flag' => $this->updated_flag,
            'authorizations' => authorizationWithoutPolicy(Constants::offlinePaymentSettingModule)
        ];
    }
}
