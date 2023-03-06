<?php

namespace Modules\PushNotificationMessage\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePushNotificationMessageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'message'=> 'required',
            'description'=> 'required',
            'cover' => 'nullable|image'
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
