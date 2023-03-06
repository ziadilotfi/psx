<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserPermission extends Model
{
    use HasFactory;

    protected $fillable = ['added_user_id'];

    protected $table = "psx_user_permissions";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const userId = "user_id";

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\UserPermissionFactory::new();
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }

    public function permissions(){
        return $this->belongsTo(RolePermission::class, 'role_id', 'role_id');
    }
}
