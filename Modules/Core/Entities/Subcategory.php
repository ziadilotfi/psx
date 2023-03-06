<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Modules\Core\Entities\Item;
use Modules\Core\Entities\Category;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Subcategory extends Model
{

    use HasFactory;

    protected $fillable = ['id', 'name', 'category_id', 'ordering', 'status', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_subcategories";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const status = "status";
    const id = 'id';
    const tableName = 'psx_subcategories';
    const name = 'name';
    const CategoryId = "category_id";

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\SubcategoryFactory::new();
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function defaultPhoto(){
        return $this->hasOne(CoreImage::class, 'img_parent_id','id')->where('img_type','subCategory-cover');
    }

    public function defaultIcon(){
        return $this->hasOne(CoreImage::class, 'img_parent_id','id')->where('img_type','subCategory-icon');
    }

    public function item(){
        return $this->hasMany(Item::class);
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
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
