<?php

namespace Modules\DataDeletionPolicy\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Casts\Attribute;

class CoreDataDeletion extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'content', 'added_date', 'added_user_id' , 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_core_data_deletions";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    protected static function newFactory()
    {
        // return \Modules\DataDeletionPolicy\Database\factories\CoreDataDeletionFactory::new();
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
