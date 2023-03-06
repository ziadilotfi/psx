<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Modules\Core\Entities\Item;
use Illuminate\Database\Eloquent\Model;
use Modules\Core\Entities\LocationTownship;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Facades\Gate;

class LocationCity extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'name', 'lat', 'lng', 'ordering', 'status', 'description', 'touch_count', 'is_featured', 'featured_date', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_location_cities";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const status = "status";
    const tableName = 'psx_location_cities';
    const name = "name";
    const description = "description";
    const id = "id";
    const addedUserId = 'added_user_id';

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\LocationCityFactory::new();
    }

    public function township(){
        return $this->hasMany(LocationTownship::class);
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

    public function cityRelation()
    {
        return $this->hasMany(LocationCityInfo::class);
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
