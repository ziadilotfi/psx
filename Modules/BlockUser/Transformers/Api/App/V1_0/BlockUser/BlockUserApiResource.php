<?php
namespace Modules\BlockUser\Transformers\Api\App\V1_0\BlockUser;

use Illuminate\Http\Resources\Json\JsonResource;

class BlockUserApiResource extends JsonResource
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
            'id' => isset($this->id)?(string)$this->id:'',
            'from_block_user_id' => isset($this->from_block_user_id)?(string)$this->from_block_user_id:'',
            'to_block_user_id' => isset($this->to_block_user_id)?(string)$this->to_block_user_id:'',
            "added_date_str" => isset($this->added_date)?(string)$this->added_date->diffForHumans():'',
            "is_empty_object" => $this->when(!isset($this->id),1),
        ];
    }
}
