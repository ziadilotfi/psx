<?php

namespace Modules\Core\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FrontendSetting extends Model
{
    use HasFactory;

    const CREATED_AT = 'added_date';
    const UPDATED_AT = 'updated_date';

    protected $fillable = ['id', 'map_key', 'google_paystore_url', 'app_store_url', 'gps_enable', 'show_main_menu', 'show_special_collections', 'show_featured_items', 'show_best_choice_slider', 'fcm_server_key', 'firebase_web_push_key_pair', 'ad_client', 'ad_slot', 'copyright', 'price_format', 'banner_src', 'mile', 'is_enable_video_setting', 'show_user_profile', 'no_filter_with_location_on_map', 'enable_notification', 'google_setting', 'app_store_setting', 'google_map', 'open_street_map', 'default_language', 'selected_language', 'promote_first_choice_day', 'promote_second_choice_day', 'promote_third_choice_day', 'promote_fourth_choice_day', 'frontend_version_no', 'added_date', 'added_user_id', 'updated_date', 'updated_user_id', 'updated_flag'];

    protected $table = "psx_frontend_settings";
    const id = "id";

    protected static function newFactory()
    {
        // return \Modules\Core\Database\factories\FrontendSettingFactory::new();
    }

    public function owner(){
        return $this->belongsTo(User::class, 'added_user_id');
    }

    public function editor(){
        return $this->belongsTo(User::class, 'updated_user_id');
    }
}
