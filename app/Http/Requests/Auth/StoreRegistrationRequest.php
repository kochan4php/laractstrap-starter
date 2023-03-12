<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class StoreRegistrationRequest extends FormRequest {
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool {
        return auth()->guest();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array {
        return [
            'username' => ['required', 'unique:users,username', 'min:3', 'max:255'],
            'name' => ['required', 'min:2', 'max:255'],
            'email' => ['required', 'unique:users,email', 'min:5', 'max:255'],
            'password' => ['required', 'min:6', 'max:255']
        ];
    }

    /**
     * Get the data from input form
     */
    public function validatedData(): array {
        return $this->only(['name', 'username', 'email', 'password']);
    }
}
