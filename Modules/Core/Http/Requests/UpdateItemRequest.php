<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Modules\Core\Entities\CustomizeUi;

class UpdateItemRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|unique:psx_items,title,'.$this->route('item')->id,
            'category_id' => 'required',
            'currency_id' => 'required',
            'location_city_id' => 'required',
            'location_township_id' => 'required',
            'price' => 'required',
        ];
    }

    /**
     * Get custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'category_id' => 'category',
            'currency_id' => 'currency',
            'location_city_id' => 'location city',
            'location_township_id' => 'location township',
            'cover' => 'item image'
        ];
    }

    /**
     * Configure the validator instance.
     *
     * @param  \Illuminate\Validation\Validator  $validator
     * @return void
     */
    public function withValidator(Validator $validator)
    {
        $validator->after(function ($validator) {

            $conds = [
                'module_name' => 'Item',
                'enable' => 1,
                'mandatory' => 1
            ];
            $custom_headers = CustomizeUi::where($conds)->get();

            $custom_fields = $validator->getData()['custom_fields'] ?? '';

            foreach($custom_headers as $custom_header){
                if(array_key_exists($custom_header->id, $custom_fields) && empty($custom_fields[$custom_header->id])){
                    $validator->errors()->add($custom_header->id, 'The ' . strtolower($custom_header->name) . ' field is required.');
                }else if(!array_key_exists($custom_header->id, $custom_fields)){
                    $validator->errors()->add($custom_header->id, 'The ' . strtolower($custom_header->name) . ' field is required.');
                }
            }
        });
    }

    /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
        return [

        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
}
