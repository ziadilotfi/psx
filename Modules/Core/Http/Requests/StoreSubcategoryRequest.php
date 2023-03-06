<?php

namespace Modules\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

use Illuminate\Contracts\Validation\Validator;
use API;
use Illuminate\Support\Arr;

class StoreSubcategoryRequest extends FormRequest
{

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|unique:psx_subcategories,name,'.request()->id,
            'category_id' => 'required',
            "cover" => "required|image",
            "icon" => "required|image",
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Sub Category',
            'category_id' => 'Category',
            'cover' => 'Cover Image',
            'icon' => 'Icon Image'
        ];
    }

    public function authorize()
    {
        return true;
    }
}
