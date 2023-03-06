<template>
    <Head :title="$t('core_mb_setting_mobile_setting_module')" />
    <ps-layout>
        <!-- breadcrumb start -->
        <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
        <!-- breadcrumb end -->
        <ps-card class="w-full h-auto">
            <div class="bg-background dark:bg-secondaryDark-black rounded-lg ">
                <!-- card header start -->
                <div class="bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg">
                    <ps-label-header-6 textColor="text-secondary-800 dark:text-secondary-100"> {{ $t(title) }} </ps-label-header-6>
                </div>
                <!-- card header end -->
                
                <form @submit.prevent="handleSubmit(this.mobile_setting.id)">
                    <div class="grid grid-cols-1 md:grid-cols-2  gap-2 mt-4">
                        <div>
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[0].label">
                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_google_play_url') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.google_playstore_url" :placeholder="$t('core_mb_setting_google_play_url')"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_app_store_url') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.apple_appstore_url" :placeholder="$t('core_mb_setting_app_store_url')"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_ios_store_id') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.ios_appstore_id" :placeholder="$t('core_mb_setting_ios_store_id')"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_facebook_key') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.fb_key" :placeholder="$t('core_mb_setting_facebook_key')"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_price_format') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.price_format" :placeholder="$t('core_mb_setting_price_format')"/>
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{ $t('core_mb_setting_price_format_ex') }}You need to change according to your format that you need (e.g ",##0.00" => 2,555.00, "##0.00" => 2555.00 ,".00" => 2555.00, ",##0" => 2,555, ",##0.0" => 2,555.0)</ps-label-caption>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_date_format') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.date_format" :placeholder="$t('core_mb_setting_date_format')"/>
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{ $t('core_mb_setting_date_format_ex') }}dd for the day, MM for the month, yyyy for the year, hh for the hour, mm for the minute, ss for the second (e.g. dd-MM-yyyy hh:mm:ss)</ps-label-caption>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{ $t('core_mb_setting_bluemark_size') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.blue_mark_size" :placeholder="$t('core_mb_setting_bluemark_size')"
                                        @keypress="onlyNumber" />
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_mile_range')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.mile" :placeholder="$t('core_mb_setting_mile_range')"
                                        @keypress="onlyNumber" />
                                </div>

                                <div>
                                    <ps-label>{{$t('core_mb_setting_default_order_time')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.default_order_time" :placeholder="$t('core_mb_setting_default_order_time')"
                                        @keypress="onlyNumber" />
                                </div>
                                <div>
                                    <ps-label>{{$t('core_mb_setting_video_duration')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.video_duration" :placeholder="$t('core_mb_setting_video_duration')"
                                        @keypress="onlyNumber" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_use_google_map_on')" v-model:value="form.is_use_google_map" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_sub_cat_on')" v-model:value="form.is_show_subcategory" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1"> {{$t('core__mb_setting_subcat_desc')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_discount_on')" v-model:value="form.is_show_discount" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1"> {{ $t('core__mb_setting_discount_desc') }}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_thumbnail_as_placeholder')" v-model:value="form.is_use_thumbnail_as_placeholder" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1"> {{ $t('core__mb_setting_thumbnail_desc') }}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_no_filter_with_location')" v-model:value="form.no_filter_with_location_on_map" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_show_info')" v-model:value="form.is_show_owner_info" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_show_item_video')" v-model:value="form.is_show_item_video" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_force_login')" v-model:value="form.is_force_login" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_language_config')" v-model:value="form.is_language_config" />
                                </div>
                            </div>
                            <!-- End Mobile setting-->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[1].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_promote_first_choice_day')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_first_choice_day" :placeholder="$t('core_mb_setting_promote_first_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_promote_second_choice_day')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_second_choice_day" :placeholder="$t('core_mb_setting_promote_second_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_promote_third_choice_day')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_third_choice_day" :placeholder="$t('core_mb_setting_promote_third_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_promote_fourth_choice_day')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_fourth_choice_day" :placeholder="$t('core_mb_setting_promote_fourth_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>
                            </div>
                            <!-- End Promotion setting -->
                            <!-- Start Image setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[2].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_profile_image_size')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.profile_image_size" :placeholder="$t('core_mb_setting_profile_image_size')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_upload_image_size')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.upload_image_size" :placeholder="$t('core_mb_setting_upload_image_size')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_chat_image_size')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.chat_image_size" :placeholder="$t('core_mb_setting_chat_image_size')"
                                        @keypress="onlyNumber"/>
                                </div>
                            </div>
                            <!-- End Image setting -->
                            <!-- Start AdMob setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[3].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_item_detail_view_count_for_ads')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.item_detail_view_count_for_ads" :placeholder="$t('core_mb_setting_item_detail_view_count_for_ads')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_AdMob_setting_on')" v-model:value="form.is_show_admob" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_is_show_admob_inside_item')" v-model:value="form.is_show_ads_in_item_detail" />
                                </div>
                            </div>
                            <!-- End AdMob setting -->
                            <!-- Start Location setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[4].label">
                                <div>
                                    <google-map-pin-picker :lat="parseFloat(form.lat)" :lng="parseFloat(form.lng)" widthHeight="width: 458px; height: 500px"
                                        :onChange="updateCoordinates" />
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_latitude')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.lat" :placeholder="$t('core_mb_setting_latitude')"
                                        @keypress="onlyNumberWithCustom"
                                        @keyup="validateLatitudeInput('lat', form.lat)"
                                        @blur="validateLatitudeInput('lat', form.lat)"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_longitute')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.lng" :placeholder="$t('core_mb_setting_longitute')"
                                        @keypress="onlyNumberWithCustom"
                                        @keyup="validateLongitudeInput('lng', form.lng)"
                                        @blur="validateLongitudeInput('lng', form.lng)"/>
                                </div>
                            </div>
                            <!-- End Location setting -->
                            <!-- Start Currency setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[5].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_default_razor_currency')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.default_razor_currency" :placeholder="$t('core_mb_setting_default_razor_currency')"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_default_flutter_currency')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.default_flutter_wave_currency" :placeholder="$t('core_mb_setting_default_flutter_currency')"/>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_razor_support_multi_currency_on')" v-model:value="form.is_razor_support_multi_currency" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_razor_support_multi_currency_on_info')}}</ps-label-caption>
                                </div>
                            </div>
                            <!-- End Currency setting -->
                            <!-- Start Login setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[6].label">
                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_facebook_login_on')" v-model:value="form.show_facebook_login" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_facebook_login_on_info')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_phone_login_on')" v-model:value="form.show_phone_login" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_phone_login_on_info')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_google_login_on')" v-model:value="form.show_google_login" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_google_login_on_info')}}</ps-label-caption>
                                </div>
                            </div>
                            <!-- End Login setting -->
                            <!-- Start Dashboard setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[7].label">

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_main_menu_on')" v-model:value="form.show_main_menu" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_main_menu_on_info')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_special_collections_on')" v-model:value="form.show_special_collections" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_special_collections_on_info')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_featured_items_on')" v-model:value="form.show_featured_items" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_featured_items_on_info')}}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_best_choice_slider_on')" v-model:value="form.show_best_choice_slider" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_mb_setting_best_choice_slider_on_info')}}</ps-label-caption>
                                </div>

                            </div>
                            <!-- End Dashboard setting -->
                            <!-- Start Default Limit setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[8].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_default_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.default_loading_limit" :placeholder="$t('core_mb_setting_default_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_category_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.category_loading_limit" :placeholder="$t('core_mb_setting_category_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_recent_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.recent_item_loading_limit" :placeholder="$t('core_mb_setting_recent_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_popular_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.popular_item_loading_limit" :placeholder="$t('core_mb_setting_popular_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_discount_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.discount_item_loading_limit" :placeholder="$t('core_mb_setting_discount_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_feature_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.featured_item_loading_limit" :placeholder="$t('core_mb_setting_feature_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_block_slider_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.block_slider_loading_limit" :placeholder="$t('core_mb_setting_block_slider_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_follower_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.follower_item_loading_limit" :placeholder="$t('core_mb_setting_follower_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_block_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.block_item_loading_limit" :placeholder="$t('core_mb_setting_block_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_shop_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.shop_loading_limit" :placeholder="$t('core_mb_setting_shop_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>
                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_collection_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.collection_item_loading_limit" :placeholder="$t('core_mb_setting_collection_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core_mb_setting_trending_item_loading_limit')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.trending_item_loading_limit" :placeholder="$t('core_mb_setting_trending_item_loading_limit')"
                                        @keypress="onlyNumber"/>
                                </div>
                            </div>
                            <!-- End Default Limit setting -->
                            <!-- Start Version setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[9].label">
                                <div>
                                    <ps-label>{{$t('core_mb_setting_version_no')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.version_no" :placeholder="$t('core_mb_setting_version_no')"
                                        />
                                </div>

                                <div>
                                    <ps-label>{{$t('core_mb_setting_version_title')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.version_title" :placeholder="$t('core_mb_setting_version_title')"
                                        />
                                </div>

                                <div>
                                    <ps-label>{{$t('core_mb_setting_version_message')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.version_message" :placeholder="$t('core_mb_setting_version_message')"
                                        />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_version_force_update')" v-model:value="form.deli_boy_version_force_update" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_version_need_clear_data')" v-model:value="form.deli_boy_version_need_clear_data" />
                                </div>

                                <!-- <div>
                                    <ps-label>{{$t('core_mb_setting_deliboy_app_version_no')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.deli_boy_version_no" :placeholder="$t('core_mb_setting_deliboy_app_version_no')"
                                        />
                                </div>

                                <div>
                                    <ps-label>{{$t('core_mb_setting_deliboy_app_version_title')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.deli_boy_version_title" :placeholder="$t('core_mb_setting_deliboy_app_version_title')"
                                        />
                                </div>

                                <div>
                                    <ps-label>{{$t('core_mb_setting_deliboy_app_version_message')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.deli_boy_version_message" :placeholder="$t('core_mb_setting_deliboy_app_version_message')"
                                        />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_deliboy_app_version_force_update')" v-model:value="form.deli_boy_version_force_update" />
                                </div>

                                <div>
                                    <ps-checkbox-value :title="$t('core_mb_setting_deliboy_app_version_need_clear_data')" v-model:value="form.deli_boy_version_need_clear_data" />
                                </div> -->
                            </div>
                            <!-- End Version setting -->
                            <!-- Start Color setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[10].label">
                                <!-- <div>
                                    <ps-label>{{$t('core_mb_setting_color_change_code')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.color_change_code" :placeholder="$t('core_mb_setting_color_change_code')"
                                        />
                                </div> -->
                                <div>
                                    <ps-label-header-4>{{$t('core_mb_setting_common_color')}}</ps-label-header-4>
                                    <div class="grid grid-cols-2">
                                        <div v-for="common_color in form.commonColor" :key="common_color.id">
                                            <div class="flex flex-row p-1">
                                                <div class="w-6 h-6 m-1 rounded shadow-sm cursor-pointer">
                                                    <div @click="colorPickerClicked(common_color)" class="w-6 h-6 rounded shadow-sm cursor-pointer" :style="{ 'background-color': common_color.value }"></div>
                                                </div>
                                                <ps-label class="leading-7">{{ common_color.title}}</ps-label>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ps-label-header-4>{{$t('core_mb_setting_light_color')}}</ps-label-header-4>
                                    <div class="grid grid-cols-2">
                                        <div v-for="light_color in form.lightColor" :key="light_color.id">
                                            <div class="flex flex-row p-1">
                                                <div class="w-6 h-6 m-1 rounded shadow-sm cursor-pointer">
                                                    <div  @click="colorPickerClicked(light_color)" class="w-6 h-6 rounded shadow-sm cursor-pointer" :style="{ 'background-color': light_color.value }"></div>
                                                </div>
                                                <ps-label class="leading-7">{{ light_color.title}}</ps-label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ps-label-header-4>{{$t('core_mb_setting_dark_color')}}</ps-label-header-4>
                                    <div class="grid grid-cols-2">
                                        <div v-for="dark_color in form.darkColor" :key="dark_color.id">
                                            <div class="flex flex-row p-1">
                                                <div class="w-6 h-6 m-1 rounded shadow-sm cursor-pointer">
                                                    <div @click="colorPickerClicked(dark_color)" class="w-6 h-6 rounded shadow-sm cursor-pointer" :style="{ 'background-color': dark_color.value }"></div>
                                                </div>
                                                <ps-label class="leading-7">{{ dark_color.title}}</ps-label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- End Color setting -->
                            <div class="flex flex-row justify-end mt-6 mb-2.5">
                                <ps-button @click="handleCancel()" textSize="text-base" type="reset" class="me-4" colors="text-primary-500" focus="" hover="">{{$t('core__be_btn_cancel')}}</ps-button>
                                <ps-button :disabled="!mobile_setting.authorizations.update" class="transition-all duration-300 min-w-3xs" padding="px-7 py-2" rounded="rounded" hover="" focus="" >
                                    <ps-loading v-if="loading" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                                    <ps-icon v-if="success" name="check" viewBox="0 0 18 14" w="14" h="10" class="me-1.5 transition-all duration-300" />
                                    <ps-label v-if="success" class="transition-all duration-300" textColor="text-white dark:text-secondaryDark-black">{{ $t('core__be_btn_saved') }}</ps-label>
                                    <ps-label v-if="!loading && !success" textColor="text-white dark:text-secondaryDark-black" > {{ $t('core__be_btn_save') }} </ps-label>
                                </ps-button>
                            </div>
                        </div>
                        <!-- column 1 end -->

                        <div class="px-4">

                            <div v-for="column in settingColumn" :key="column.id">
                                <div @click="changeSection(column.label)"
                                    :class="title == column.label ? 'border-l border-l-primary-500' : 'border-l border-l-secondary-300'"
                                    class="px-2 py-3 cursor-pointer">
                                    <ps-label :textColor="title == column.label ? 'text-primary-500 dark:text-primary-500' : 'text-secondary-800 dark:text-white'" >
                                        {{ $t(column.label) }}
                                    </ps-label>
                                </div>
                            </div>

                        </div>

                    </div>
                </form>
            </div>
        </ps-card>
        
    </ps-layout>
    <PsColorPickerModal ref="ps_color_picker_modal" />
</template>

<script>
import { defineComponent, defineAsyncComponent, ref } from 'vue'
import PsLayout from "@/Components/PsLayout.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import useValidators from '@/Validation/Validators'
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsTextarea from '@/Components/Core/Textarea/PsTextarea.vue';
import PsLabelHeader4 from "@/Components/Core/Label/PsLabelHeader4.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import { trans } from 'laravel-vue-i18n';
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import PsLabelHeader6 from "@/Components/Core/Label/PsLabelHeader6.vue";
import PsCheckboxValue from '@/Components/Core/Checkbox/PsCheckboxValue.vue';
import PsCheckbox from '@/Components/Core/Checkbox/PsCheckbox.vue';
import PsDropdown from "@/Components/Core/Dropdown/PsDropdown.vue";
import PsDropdownSelect from "@/Components/Core/Dropdown/PsDropdownSelect.vue";
const GoogleMapPinPicker = defineAsyncComponent(() => import('@/Components/Core/Map/GoogleMapPinPicker.vue'));
const PsColorPickerModal = defineAsyncComponent(() => import('@/Components/Core/Modals/PsColorPickerModal.vue'));

export default defineComponent({
    name: "Create",
    components: {
        Head,
        PsInput,
        PsLabel,
        PsButton,
        PsTextarea,
        PsLabelHeader4,
        PsLabelCaption,
        PsBreadcrumb2,
        PsLabelHeader6,
        PsCheckboxValue,
        PsCheckbox,
        GoogleMapPinPicker,
        PsDropdown,
        PsDropdownSelect,
        PsColorPickerModal,
    },
    layout: PsLayout,
    props: ['errors', 'lightColor', 'darkColor', 'commonColor', 'available_languages', 'mobile_setting','coreFieldFilterSettings'],
    setup(props) {
        // Client Side Validation
        const { isEmpty, isLatitude, isLongitude } = useValidators();

        const ps_color_picker_modal = ref();

        const validateEmptyInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : '';
        }

        const validateLatitudeInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isLatitude(fieldName, fieldValue);
        }

        const validateLongitudeInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isLongitude(fieldName, fieldValue);
        }

        let form = useForm(
            {
                apple_appstore_url: props.mobile_setting.apple_appstore_url,
                ios_appstore_id: props.mobile_setting.ios_appstore_id,
                google_playstore_url: props.mobile_setting.google_playstore_url,
                is_show_admob: props.mobile_setting.is_show_admob==1?true:false,
                fb_key: props.mobile_setting.fb_key,
                date_format: props.mobile_setting.date_format,
                price_format: props.mobile_setting.price_format,
                default_razor_currency: props.mobile_setting.default_razor_currency,
                is_razor_support_multi_currency: props.mobile_setting.is_razor_support_multi_currency==1?true:false,
                is_show_subcategory: props.mobile_setting.is_show_subcategory==1?true:false,
                is_show_discount: props.mobile_setting.is_show_discount==1?true:false,
                show_phone_login: props.mobile_setting.show_phone_login==1?true:false,
                show_google_login: props.mobile_setting.show_google_login==1?true:false,
                show_facebook_login: props.mobile_setting.show_facebook_login==1?true:false,
                //is_show_token_id: props.mobile_setting.is_show_token_id==1?true:false,
                is_use_google_map: props.mobile_setting.is_use_google_map==1?true:false,
                item_detail_view_count_for_ads: props.mobile_setting.item_detail_view_count_for_ads,
                is_show_ads_in_item_detail: props.mobile_setting.is_show_ads_in_item_detail==1?true:false,
                after_item_count_admob_once: props.mobile_setting.after_item_count_admob_once,
                is_use_thumbnail_as_placeholder: props.mobile_setting.is_use_thumbnail_as_placeholder==1?true:false,
                blue_mark_size: props.mobile_setting.blue_mark_size,
                block_item_loading_limit: props.mobile_setting.block_item_loading_limit,
                follower_item_loading_limit: props.mobile_setting.follower_item_loading_limit,
                block_slider_loading_limit: props.mobile_setting.block_slider_loading_limit,
                featured_item_loading_limit: props.mobile_setting.featured_item_loading_limit,
                popular_item_loading_limit: props.mobile_setting.popular_item_loading_limit,
                recent_item_loading_limit: props.mobile_setting.recent_item_loading_limit,
                category_loading_limit: props.mobile_setting.category_loading_limit,
                default_loading_limit: props.mobile_setting.default_loading_limit,
                discount_item_loading_limit: props.mobile_setting.discount_item_loading_limit,
                mile: props.mobile_setting.mile,
                video_duration: props.mobile_setting.video_duration,
                is_show_item_video: props.mobile_setting.is_show_item_video==1?true:false,
                is_show_owner_info: props.mobile_setting.is_show_owner_info==1?true:false,
                is_force_login: props.mobile_setting.is_force_login==1?true:false,
                is_language_config: props.mobile_setting.is_language_config==1?true:false,
                no_filter_with_location_on_map: props.mobile_setting.no_filter_with_location_on_map==1?true:false,
                chat_image_size: props.mobile_setting.chat_image_size,
                profile_image_size: props.mobile_setting.profile_image_size,
                upload_image_size: props.mobile_setting.upload_image_size,
                promote_first_choice_day: props.mobile_setting.promote_first_choice_day,
                promote_second_choice_day: props.mobile_setting.promote_second_choice_day,
                promote_third_choice_day: props.mobile_setting.promote_third_choice_day,
                promote_fourth_choice_day: props.mobile_setting.promote_fourth_choice_day,
                lat: props.mobile_setting.lat,
                lng: props.mobile_setting.lng,
                collection_item_loading_limit: props.mobile_setting.collection_item_loading_limit,
                shop_loading_limit: props.mobile_setting.shop_loading_limit,
                trending_item_loading_limit: props.mobile_setting.trending_item_loading_limit,
                show_main_menu: props.mobile_setting.show_main_menu==1?true:false,
                show_special_collections: props.mobile_setting.show_special_collections==1?true:false,
                show_featured_items: props.mobile_setting.show_featured_items==1?true:false,
                show_best_choice_slider: props.mobile_setting.show_best_choice_slider ==1?true:false,
                default_flutter_wave_currency: props.mobile_setting.default_flutter_wave_currency,
                default_order_time: props.mobile_setting.default_order_time,
                version_no: props.mobile_setting.version_no,
                version_force_update: props.mobile_setting.version_force_update==1?true:false,
                version_title: props.mobile_setting.version_title,
                version_message: props.mobile_setting.version_message,
                version_need_clear_data: props.mobile_setting.version_need_clear_data==1?true:false,
                deli_boy_version_no: props.mobile_setting.deli_boy_version_no,
                deli_boy_version_force_update: props.mobile_setting.deli_boy_version_force_update==1?true:false,
                deli_boy_version_title: props.mobile_setting.deli_boy_version_title,
                deli_boy_version_message: props.mobile_setting.deli_boy_version_message,
                color_change_code: props.mobile_setting.color_change_code,
                deli_boy_version_need_clear_data: props.mobile_setting.deli_boy_version_need_clear_data==1?true:false,
                commonColor: props.commonColor,
                lightColor: props.lightColor,
                darkColor: props.darkColor,
                "_method": "put"
            }
        )

        // for custom number input validate at keypress
        const onlyNumberWithCustom = ($e) => {
            let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 45) { // 46 is dot, 45 is dash
                $e.preventDefault();
            }
        }

        const onlyNumber = ($e) => {
            let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
            if (keyCode < 48 || keyCode > 57) {
                $e.preventDefault();
            }
        }

        function updateCoordinates(location) {
            form.lat = location.latLng.lat();
            form.lng = location.latLng.lng();
        }

        const settingColumn = [
            {
                label: 'core_mb_setting_mobile_setting_info_section'
            },
            {
                label: 'core_mb_setting_promote_section',
            },
            {
                label: 'core_mb_setting_image_section',
            },
            {
                label: 'core_mb_setting_Admob_config',
            },
            {
                label: 'core_mb_setting_location_config',
            },
            {
                label: 'core_mb_setting_currency_config',
            },
            {
                label: 'core_mb_setting_login_config',
            },
            {
                label: 'core_mb_setting_dashboard_config',
            },
            {
                label: 'core_mb_setting_default_limit_config',
            },
            {
                label: 'core_mb_setting_version_config',
            },
            {
                label: 'core_mb_setting_color_section',
            },
        ];

        const title = ref(settingColumn[10].label);

        function changeSection(v){
            title.value = v;
        }
        
        function colorPickerClicked(data) {
            ps_color_picker_modal.value.openModal(
                data.value,
                (selectedColor) => {
                    console.log(selectedColor)
                    let colorForm = useForm({
                        value: selectedColor,
                        "_method": "put"
                    })
                    this.$inertia.post(route("color.update", data.id), colorForm,{
                        forceFormData: true,
                        onFinish: () => {
                            this.$inertia.get(route("mobile_setting.index",))
                        },
                        });
                },
                () => {}
            );
        }

        return { 
                    ps_color_picker_modal,
            title,
            settingColumn,
            changeSection,
            colorPickerClicked,
            form,validateEmptyInput, validateLatitudeInput, validateLongitudeInput, onlyNumberWithCustom, onlyNumber, updateCoordinates }
    },
    methods: {
        handleSubmit(id) {
            this.$inertia.post(route('mobile_setting.update', id), this.form,{forceFormData: true});
        },
    },
    computed: {
        breadcrumb() {

            return [
                {
                    label: trans('core__be_dashboard_label'),
                    url: route('admin.index')
                },
                {
                    label: trans('mobile_setting_module'),
                    color: "text-primary-500"
                }
            ]

        }
    },
})
</script>
