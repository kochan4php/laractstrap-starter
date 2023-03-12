<?php

use App\Http\Controllers\Auth\AuthenticatedController;
use App\Http\Controllers\Auth\LogoutController;
use App\Http\Controllers\Auth\RegistrationController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\Member\DashboardController as MemberDashboardController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', fn () => inertia('Welcome'))->name('home');

Route::get('about', fn () => inertia('About'))->name('about');

Route::middleware('guest')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::get('login', [AuthenticatedController::class, 'login'])
            ->name('login.index');

        Route::post('login', [AuthenticatedController::class, 'authenticate'])
            ->name('login.store');

        Route::get('register', [RegistrationController::class, 'register'])
            ->name('register.index');

        Route::post('register', [RegistrationController::class, 'storeRegister'])
            ->name('register.store');
    });
});

Route::middleware(['auth'])->group(function () {
    Route::post('logout', LogoutController::class)
        ->name('logout');

    // Start admin route
    Route::prefix('admin')->middleware('role:admin')->group(function () {
        Route::get('dashboard', [AdminDashboardController::class, 'index'])
            ->name('admin.dashboard.index');
    });
    // End admin route

    // Start member route
    Route::prefix('member')->middleware('role:member')->group(function () {
        Route::get('dashboard', [MemberDashboardController::class, 'index'])
            ->name('member.dashboard.index');
    });
    // End member route
});
