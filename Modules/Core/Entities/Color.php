<?php

namespace Modules\Core\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Color extends Model
{
    use HasFactory;

    protected $fillable = ['id', 'key', 'value', 'title', 'is_light_color', 'is_dark_color', 'is_common_color', 'added_date'];

    protected $table = "psx_colors";


    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    const tableName = "psx_colors";
    const id = "id";
    const key = "key";
    const value = "value";
    const title = "title";
    const isLightColor = "is_light_color";
    const isCommonColor = "is_common_color";
    const isDarkColor = "is_dark_color";
    const addedDate = 'added_date';

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\ColorFactory::new();
    }
}
