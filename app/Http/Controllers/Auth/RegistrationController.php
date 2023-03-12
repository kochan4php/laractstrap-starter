<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\StoreRegistrationRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class RegistrationController extends Controller {
    /**
     * Show register form
     */
    public function register(): \Inertia\Response {
        return inertia('Auth/Register');
    }

    /**
     * Process register the user
     */
    public function storeRegister(StoreRegistrationRequest $request): RedirectResponse {
        $validatedData = $request->validatedData();

        $validatedData['role_id'] = Role::firstWhere('identifier', 'member')->role_id;

        User::create($validatedData);

        flash()->addSuccess('Registrasi berhasil. Silahkan login!');

        return to_route('login.index');
    }
}
