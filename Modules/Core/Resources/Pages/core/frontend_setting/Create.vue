<template>
    <Head :title="$t('frontend_setting_module')" />
    <ps-layout>
        <!-- breadcrumb start -->
        <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
        <!-- breadcrumb end -->
        <ps-card class="w-full h-auto">
            <div class="bg-background dark:bg-secondaryDark-black rounded-lg ">
                <!-- card header start -->
                <div class="bg-primary-50 dark:bg-primary-900 py-2.5 ps-4">
                    <ps-label-header-6 textColor="text-secondary-800 dark:text-secondary-100"> {{ $t(title) }} </ps-label-header-6>
                </div>
                <!-- card header end -->

                <form @submit.prevent="handleSubmit">
                    <div class="grid grid-cols-2 gap-2 mt-4">
                        <div>
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[0].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core__be_map_key')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.map_key" :placeholder="$t('core__be_map_key')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_fcm_server_key') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.fcm_server_key" :placeholder="$t('core__be_fcm_server_key')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_firebase_web_push_key') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.firebase_web_push_key_pair" :placeholder="$t('core__be_firebase_web_push_key')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{$t('core__be_ad_client')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.ad_client" :placeholder="$t('core__be_ad_client')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_ad_slot') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.ad_slot" :placeholder="$t('core__be_ad_slot')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_copyright')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.copyright" :placeholder="$t('core__be_copyright')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_google_playstore_url') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.google_playstore_url" :placeholder="$t('core__be_google_playstore_url')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_appstore_url') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.app_store_url" :placeholder="$t('core__be_appstore_url')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_banner_src') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.banner_src" :placeholder="$t('core__be_banner_src')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_price_format') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.price_format" :placeholder="$t('core__be_price_format')"
                                        />
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_mile') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.mile" :placeholder="$t('core__be_mile')"
                                        @keypress="onlyNumber"/>
                                </div>
                                <div>
                                    <ps-label class="text-base">{{ $t('core__be_google_map') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.google_map" :placeholder="$t('core__be_google_map')"
                                        />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_enable_video_setting')" v-model:value="form.is_enable_video_setting" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_gps_enabled')" v-model:value="form.gps_enable" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_show_main_menu')" v-model:value="form.show_main_menu" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_show_special_collections')" v-model:value="form.show_special_collections" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_show_featured_items')" v-model:value="form.show_featured_items" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_show_best_choice_slider')" v-model:value="form.show_best_choice_slider" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_show_user_profile')" v-model:value="form.show_user_profile" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_no_filter_with_location_on_map')" v-model:value="form.no_filter_with_location_on_map" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_is_enable_notification')" v-model:value="form.enable_notification" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_google_setting')" v-model:value="form.google_setting" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_apple_setting')" v-model:value="form.app_store_setting" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_google_map')" v-model:value="form.google_map" />
                                </div>
                                <div>
                                    <ps-checkbox-value :title="$t('core__be_open_street_map')" v-model:value="form.open_street_map" />
                                </div>
                            </div>
                            <!-- Start Language setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[1].label">
                                <div>
                                    <ps-label class="text-base">{{$t('core__be_default_language')}}</ps-label>
                                    <select type="text" class="w-full rounded flex-1" v-model="form.default_language" @change="form.selected_language.includes(form.default_language)?'':form.selected_language.push(form.default_language)">
                                        <option value="">{{ $t('core__be_select_language')}}</option>
                                        <option v-for="language in available_languages" :value="language.language_code" :key="language.language_code">
                                            {{ language.name }} ( {{language.language_code}}_{{language.country_code}} )
                                        </option>
                                    </select>
                                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.default_language }}</ps-label-caption>
                                </div>

                                <div>
                                    <ps-label class="text-base">{{$t('core__be_available_language')}}</ps-label>
                                    <ps-label-caption textColor="text-secondary-500 ">{{ $t('core__be_ava_lang_info') }}</ps-label-caption>
                                    <div class="flex flex-wrap">
                                        <ps-checkbox v-for="language in available_languages"
                                            :key="language.language_code"
                                            :value="language.language_code"
                                            v-model:selectedValue="form.selected_language"
                                            padding="ms-1.5"
                                            :title="language.name + '(' + language.language_code + '_' + language.country_code + ')'"
                                            color="text-primary-500 focus:ring-primary-500"
                                            class="w-1/2 mt-6" />
                                    </div>
                                </div>
                            </div>
                            <!-- End Language setting -->
                            <!-- Start promote setting -->
                            <div class="grid grid-rows gap-6 ms-4 me-18" v-if="title == settingColumn[2].label">
                                <div>
                                    <ps-label>{{$t('core_mb_setting_promote_first_choice_day')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_first_choice_day" :placeholder="$t('core_mb_setting_promote_first_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>
                                <div>
                                    <ps-label>{{ $t('core_mb_setting_promote_second_choice_day') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_second_choice_day" :placeholder="$t('core_mb_setting_promote_second_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>
                                <div>
                                    <ps-label>{{ $t('core_mb_setting_promote_third_choice_day') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_third_choice_day" :placeholder="$t('core_mb_setting_promote_third_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>
                                <div>
                                    <ps-label>{{ $t('core_mb_setting_promote_fourth_choice_day') }}</ps-label>
                                    <ps-input type="text" v-model:value="form.promote_fourth_choice_day" :placeholder="$t('core_mb_setting_promote_fourth_choice_day')"
                                        @keypress="onlyNumber"/>
                                </div>
                            </div>
                            <!-- End promote setting -->
                            <div class="flex flex-row justify-end mt-6 mb-2.5">
                                <ps-button @click="handleCancel()" textSize="text-base" type="reset" class="me-4" colors="text-primary-500" focus="" hover="">{{ $t('core__be_btn_cancel') }}</ps-button>
                                <ps-button class="transition-all duration-300 min-w-3xs" padding="px-7 py-2" rounded="rounded" hover="" focus="" >
                                    <ps-loading v-if="loading" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                                    <ps-icon v-if="success" name="check" w="20" h="20" class="me-1.5 transition-all duration-300" />
                                    <ps-label v-if="success" class="transition-all duration-300" textColor="text-white dark:text-secondaryDark-black">{{$t('core__be_btn_saved')}}</ps-label>
                                <ps-label v-if="!loading && !success" textColor="text-white dark:text-secondaryDark-black" > {{$t('core__be_btn_save')}} </ps-label>
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
</template>

<script>
    import { defineComponent, ref } from 'vue'
    import PsLayout from "@/Components/PsLayout.vue";
    import { Head, useForm } from "@inertiajs/inertia-vue3";
    import useValidators from '@/Validation/Validators'
    import PsInput from "@/Components/Core/Input/PsInput.vue";
    import PsLabel from "@/Components/Core/Label/PsLabel.vue";
    import PsButton from "@/Components/Core/Buttons/PsButton.vue";
    import PsTextarea from '@/Components/Core/Textarea/PsTextarea.vue';
    import PsLabelHeader4 from "@/Components/Core/Label/PsLabelHeader4.vue";
    import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
    import PsCheckbox from '@/Components/Core/Checkbox/PsCheckbox.vue';
    import PsCheckboxValue from '@/Components/Core/Checkbox/PsCheckboxValue.vue';
    import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
    import { trans } from 'laravel-vue-i18n';
    
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
            PsCheckbox,
            PsCheckboxValue,
            PsBreadcrumb2
        },
        layout: PsLayout,
        props: ['errors', 'available_languages'],
        data() {
        const settingColumn = [
                {
                    label: "core__fe_configuration_information",
                },
                {
                    label: "core__language_configuration",
                },
                {
                    label: "core__be_promote_section",
                }
            ]

            const title = ref(settingColumn[0].label);
            let form = useForm(
                {
                    map_key: "",
                    is_enable_video_setting: "",
                    show_user_profile: "",
                    no_filter_with_location_on_map: "",
                    price_format: "",
                    enable_notification: "",
                    fcm_server_key: "",
                    firebase_web_push_key_pair: "",
                    ad_client: "",
                    ad_slot: "",
                    copyright: "",
                    google_playstore_url: "",
                    google_setting: "",
                    app_store_url: "",
                    app_store_setting: "",
                    banner_src: "",
                    google_map: "",
                    open_street_map: "",
                    mile: "",
                    default_language: "",
                    selected_language: [],
                    promote_first_choice_day: "",
                    promote_second_choice_day: "",
                    promote_third_choice_day: "",
                    promote_fourth_choice_day: "",
                    gps_enable: "",
                    show_main_menu: "",
                    show_special_collections: "",
                    show_featured_items: "",
                    show_best_choice_slider: "",
                    frontend_version_no: "",
                   
                }
            );

            function changeSection(v){
                title.value = v;
            }

            return{
                form,
                title,
                settingColumn,
                changeSection
            }
        },
        setup(props) {
            // Client Side Validation
            const { isEmpty } = useValidators();
    
            const validateEmptyInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : '';
            }
    
            const onlyNumber = ($e) => {
                let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
                if (keyCode < 48 || keyCode > 57) {
                    $e.preventDefault();
                }
            }
    
            return { validateEmptyInput, onlyNumber }
        },
        methods: {
            handleSubmit() {
                this.$inertia.post(route('frontend_setting.store'), this.form,{forceFormData: true});
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
                        label: trans('frontend_setting_module'),
                        color: "text-primary-500"
                    }
                ]

            }
        },
    })
</script>