<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $admin = Role::firstWhere('identifier', 'admin')->role_id;

        User::create([
            'name' => 'Kochan',
            'username' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => 'admin',
            'role_id' => $admin
        ]);
    }
}
