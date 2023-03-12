<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DashboardController extends Controller {
    public function index(): \Inertia\Response {
        return inertia('Dashboard/Admin/HomeDashboard');
    }
}
