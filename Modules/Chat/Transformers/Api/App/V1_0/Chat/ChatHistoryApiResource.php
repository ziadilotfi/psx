<?php

namespace Modules\Chat\Transformers\Api\App\V1_0\Chat;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Core\Entities\Item;
use Modules\Core\Transformers\Api\App\V1_0\Product\ProductApiResource;
use Modules\Core\Transformers\Api\App\V1_0\User\UserApiResource;

class ChatHistoryApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $is_sold_out = 0;
        if(isset($this->id)){
            $item = Item::find($this->item_id);
            if($item){
                $is_sold_out = $item->is_sold_out;
            }
        }
        return [
            'id' => isset($this->id)?(string)$this->id:'',
            'item_id' => isset($this->item_id)?(string)$this->item_id:'',
            'buyer_user_id' => isset($this->buyer_user_id)?(string)$this->buyer_user_id:'',
            'seller_user_id' => isset($this->seller_user_id)?(string)$this->seller_user_id:'',
            'nego_price' => isset($this->nego_price)?(string)$this->nego_price:'',
            'buyer_unread_count' => isset($this->buyer_unread_count)?(string)$this->buyer_unread_count:'',
            'seller_unread_count' => isset($this->seller_unread_count)?(string)$this->seller_unread_count:'',
            'latest_chat_message' => isset($this->latest_chat_message)?(string)$this->latest_chat_message:'',
            'is_accept' => isset($this->is_accept)?(string)$this->is_accept:'',
            'offer_status' => isset($this->offer_status)?(string)$this->offer_status:'',
            "is_offer" => isset($this->offer_status)?(string)(($this->offer_status == 2 || $is_sold_out == 1)? '1' : '0'):'0',
            'added_date' => isset($this->added_date)?(string)$this->added_date:'',
            'offer_amount' => isset($this->id)?(string)$this->nego_price:'',
            "item" => new ProductApiResource(isset($this->item) ? $this->whenLoaded('item'): Item::where('id', 0)->get()),
            "buyer" => new UserApiResource(isset($this->buyer) && $this->buyer ? $this->whenLoaded('buyer'): User::where('id', 0)->get()),
            "seller" => new UserApiResource(isset($this->seller) && $this->seller ? $this->whenLoaded('seller'): User::where('id', 0)->get()),
            "added_date_str" => isset($this->added_date)?(string)$this->added_date->diffForHumans():'',
            "is_empty_object" => $this->when(!isset($this->id),'1'),
        ];
    }
}
