<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\StoreLoginRequest;

final class AuthenticatedController extends Controller {
    /**
     * Show login form
     */
    public function login(): \Inertia\Response {
        return inertia('Auth/Login');
    }

    /**
     * Login process
     */
    public function authenticate(StoreLoginRequest $request): \Illuminate\Http\RedirectResponse {
        $validatedData = $request->validatedData();

        $username = $validatedData['username'];
        $password = $validatedData['password'];
        $remember = $validatedData['remember'] ? true : false;

        $fieldType = filter_var($validatedData['username'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

        if (auth()->attempt([$fieldType => $username, 'password' => $password], $remember)) {
            $request->session()->regenerate();

            $role = auth()->user()->role->identifier;

            flash()->addSuccess('Berhasil login');

            switch ($role) {
                case 'admin':
                    return to_route('admin.dashboard.index');
                    break;
                case 'member':
                    return to_route('member.dashboard.index');
                    break;
            }
        }

        flash()->addError('Username / Email dan Password tidak valid. Silahkan coba lagi');

        return back();
    }
}
