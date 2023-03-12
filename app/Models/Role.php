<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Role extends Model {
    use HasFactory, HasUuids;

    protected $primaryKey = 'role_id';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = [
        'name',
        'identifier'
    ];

    public function user(): HasMany {
        return $this->hasMany(User::class, 'role_id', 'role_id');
    }
}
