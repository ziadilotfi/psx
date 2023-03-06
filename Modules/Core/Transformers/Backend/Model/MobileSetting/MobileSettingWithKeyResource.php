<?php

namespace Modules\Core\Transformers\Backend\Model\MobileSetting;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\Core\Transformers\MobileLanguage\MobileLanguageApiResource;

class MobileSettingWithKeyResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => (string) $this->id,
            'apple_appstore_url' => (string) $this->apple_appstore_url,
            'ios_appstore_id' => (string) $this->ios_appstore_id,
            'google_playstore_url' => (string) $this->google_playstore_url,
            'is_show_admob' => (string) $this->is_show_admob,
            'fb_key' => (string) $this->fb_key,
            'date_format' => (string) $this->date_format,
            'price_format' => (string) $this->price_format,
            'default_razor_currency' => (string) $this->default_razor_currency,
            'is_razor_support_multi_currency' => (string) $this->is_razor_support_multi_currency,
            'is_show_subcategory' => (string) $this->is_show_subcategory,
            'is_show_discount' => (string) $this->is_show_discount,
            'show_phone_login' => (string) $this->show_phone_login,
            'show_google_login' => (string) $this->show_google_login,
            'show_facebook_login' => (string) $this->show_facebook_login,
            //'is_show_token_id' => (string) $this->is_show_token_id,
            'is_use_thumbnail_as_placeholder' => (string) $this->is_use_thumbnail_as_placeholder,
            'is_use_google_map' => (string) $this->is_use_google_map,
            'is_show_item_video' => (string) $this->is_show_item_video,
            'item_detail_view_count_for_ads' => (string) $this->item_detail_view_count_for_ads,
            'is_show_ads_in_item_detail' => (string) $this->is_show_ads_in_item_detail,
            'after_item_count_admob_once' => (string) $this->after_item_count_admob_once,
            'blue_mark_size' => (string) $this->blue_mark_size,
            'block_item_loading_limit' => (string) $this->block_item_loading_limit,
            'follower_item_loading_limit' => (string) $this->follower_item_loading_limit,
            'block_slider_loading_limit' => (string) $this->block_slider_loading_limit,
            'featured_item_loading_limit' => (string) $this->featured_item_loading_limit,
            'popular_item_loading_limit' => (string) $this->popular_item_loading_limit,
            'recent_item_loading_limit' => (string) $this->recent_item_loading_limit,
            'category_loading_limit' => (string) $this->category_loading_limit,
            'default_loading_limit' => (string) $this->default_loading_limit,
            'discount_item_loading_limit' => (string) $this->discount_item_loading_limit,
            'mile' => (string) $this->mile,
            'video_duration' => (string) $this->video_duration,
            'is_show_owner_info' => (string) $this->is_show_owner_info,
            'is_force_login' => (string) $this->is_force_login,
            'is_language_config' => (string) $this->is_language_config,
            'no_filter_with_location_on_map' => (string) $this->no_filter_with_location_on_map,
            'chat_image_size' => (string) $this->chat_image_size,
            'profile_image_size' => (string) $this->profile_image_size,
            'upload_image_size' => (string) $this->upload_image_size,
            'promote_first_choice_day' => (string) $this->promote_first_choice_day,
            'promote_second_choice_day' => (string) $this->promote_second_choice_day,
            'promote_third_choice_day' => (string) $this->promote_third_choice_day,
            'promote_fourth_choice_day' => (string) $this->promote_fourth_choice_day,
            'lat' => (string) $this->lat,
            'lng' => (string) $this->lng,
            'collection_item_loading_limit' => (string) $this->collection_item_loading_limit,
            'shop_loading_limit' => (string) $this->shop_loading_limit,
            'show_main_menu' => (string) $this->show_main_menu,
            'show_special_collections' => (string) $this->show_special_collections,
            'show_featured_items' => (string) $this->show_featured_items,
            'show_best_choice_slider' => (string) $this->show_best_choice_slider,
            'default_flutter_wave_currency' => (string) $this->default_flutter_wave_currency,
            'default_order_time' => (string) $this->default_order_time,
            'trending_item_loading_limit' => (string) $this->trending_item_loading_limit,
            'version_no' => (string) $this->version_no,
            'version_force_update' => (string) $this->version_force_update,
            'version_title' => (string) $this->version_title,
            'version_message' => (string) $this->version_message,
            'version_need_clear_data' => (string) $this->version_need_clear_data,
            'deli_boy_version_no' => (string) $this->deli_boy_version_no,
            'deli_boy_version_force_update' => (string) $this->deli_boy_version_force_update,
            'deli_boy_version_title' => (string) $this->deli_boy_version_title,
            'deli_boy_version_message' => (string) $this->deli_boy_version_message,
            'deli_boy_version_need_clear_data' => (string) $this->deli_boy_version_need_clear_data,
            'color_change_code' => (string) $this->color_change_code,
            'added_date' => (string) $this->added_date,
            'added_user_id' => (string) $this->added_user_id,
            'added_user@@name' => (string) $this->owner->name,
            'updated_user_id' => (string) $this->updated_user_id,
            'updated_user@@name' => !empty($this->editor)? $this->editor->name:'',
            'updated_flag' => (string) $this->updated_flag,
            'authorizations' => $this->authorization,
        ];
  }
}
