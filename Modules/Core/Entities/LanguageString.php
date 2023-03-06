<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Modules\Core\Entities\Language;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Facades\Gate;
use Illuminate\Database\Eloquent\Casts\Attribute;

class LanguageString extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'language_id', 'key', 'value', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_language_strings";

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const id = "id";
    const key = "key";
    const languageId = "language_id";
    const value = "value";
    const tableName = "psx_language_strings";

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\LanguageStringFactory::new();
    }

    public function language(){
        return $this->belongsTo(Language::class);
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
