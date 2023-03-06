<?php

namespace Modules\Core\Transformers\Api\App\V1_0\Color;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Core\Entities\Color;

class ColorApiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        $colors = Color::get();
        
        $mobile_color = $colors->map(function ($color){
            return[
                $color->key => (string)$color->value,
            ];
        })->collapse();
        
        return $mobile_color;
    }
}
