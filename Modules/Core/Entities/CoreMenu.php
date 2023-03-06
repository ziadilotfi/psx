<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Modules\Core\Entities\CoreSubMenuGroup;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CoreMenu extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'module_name', 'module_desc', 'module_lang_key', 'module_icon', 'ordering', 'is_show_on_menu', 'core_menu_group_id', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_core_menus";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const id = 'id';
    const moduleName = "module_name";
    const isShowOnMenu = "is_show_on_menu";
    const addedDate = "added_date";
    const addedUserId = "added_user_id";
    const updatedDate = "updated_date";
    const updatedUserId = "updated_user_id";

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\CoreModulesFactory::new();
    }

    public function core_sub_menu_group(){
        return $this->belongsTo(CoreSubMenuGroup::class);
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }

    public function routeName(){
        return $this->belongsTo(Module::class, "module_id", "id");
    }

    public function authorizations($abilities = []){
        return collect(array_flip($abilities))->map(function ($index, $ability){
            return Gate::allows($ability, $this);
        });
    }

//    public function toArray()
//    {
//        return parent::toArray() + [
//            'authorizations' => $this->authorizations(['update','delete','create'])
//        ];
//    }

    protected function authorization(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => $this->authorizations(['update','delete','create']),
        );
    }
}
