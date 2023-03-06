<?php

namespace Modules\Core\Transformers\Backend\Model\SystemConfig;

use Illuminate\Http\Resources\Json\JsonResource;

class SystemConfigWithKeyResource extends JsonResource
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
            'id' => (string) $this->id,
            'lat' => (string) $this->lat,
            'lng' => (string) $this->lng,
            'is_approved_enable' => (string) $this->is_approved_enable,
            'is_sub_location' => (string) $this->is_sub_location,
            'is_thumb2x_3x_generate' => (string) $this->is_thumb2x_3x_generate,
            'is_sub_subscription' => (string) $this->is_sub_subscription,
            'is_paid_app' => (string) $this->is_paid_app,
            'is_block_user' => (string) $this->is_block_user,
            'max_img_upload_of_item' => (string) $this->max_img_upload_of_item,
            'ad_type' => (string) $this->ad_type,
            'promo_cell_interval_no' => (string) $this->promo_cell_interval_no,
            'one_day_per_price' => (string) $this->one_day_per_price,
            'added_date' => (string) $this->added_date,
            'added_user_id' => (string) $this->added_user_id,
            'added_user@@name' => (string) $this->owner->name,
            'updated_user_id' => (string) $this->updated_user_id,
            'updated_user@@name' => !empty($this->editor)? $this->editor->name:'',
            'updated_flag' => (string) $this->updated_flag,
            'authorizations' => $this->authorization,
        ];

    }
}
