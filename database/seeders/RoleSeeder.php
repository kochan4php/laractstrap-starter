<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $roles = collect([
            [
                'name' => 'Admin',
                'identifier' => 'admin'
            ],
            [
                'name' => 'Member',
                'identifier' => 'member'
            ]
        ]);

        $roles->each(fn ($role) => Role::create($role));
    }
}
