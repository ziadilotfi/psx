
<template>

    <Head :title="$t('system_config_module')" />
    <ps-layout>
        <div class="">
            <!-- breadcrumb start -->
            <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
            <!-- breadcrumb end -->
        <ps-card class="w-full h-auto">
            <div class="bg-background dark:bg-secondaryDark-black rounded-lg ">

                <ps-label class="col-span-2 text-lg px-4 py-3.5 bg-primary-50 dark:bg-primary-900">{{ title }}
                </ps-label>

                    <form @submit.prevent="handleSubmit(system_config.id)">
                    <div class="grid grid-cols-1 md:grid-cols-2  gap-2 mt-4">
                        <div>
                            <div v-if="title == settingColumn[0].label">

                                <div class="px-4 py-3">
                                    <google-map-pin-picker :lat="parseFloat(form.lat)" :lng="parseFloat(form.lng)"
                                        widthHeight="width: 458px; height: 500px" :onChange="updateCoordinates" />
                                </div>

                                <div class="px-4 py-3">
                                    <ps-label class="text-base">{{$t('core_sys_config_lat')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.lat" placeholder="Latitude"
                                        @keypress="onlyNumberWithCustom" @keyup="validateLatitudeInput('lat', form.lat)"
                                        @blur="validateLatitudeInput('lat', form.lat)" />
                                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.lat }}
                                    </ps-label-caption>
                                </div>

                                <div class="px-4 py-3">
                                    <ps-label class="text-base">{{$t('core_sys_config_lng')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.lng" placeholder="Longitude"
                                        @keypress="onlyNumberWithCustom" @keyup="validateLongitudeInput('lng', form.lng)"
                                        @blur="validateLongitudeInput('lng', form.lng)" />
                                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.lng }}
                                    </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-label class="text-base mb-1">{{$t('core_sys_config_max_image_upload')}}</ps-label>
                                    <ps-input type="text" v-model:value="form.max_img_upload_of_item" placeholder="Number"
                                        @keypress="onlyNumber" />
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_approval_system_on')" v-model:value="form.is_approved_enable" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_config_approval_sys_info')}} </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_sub_location')" v-model:value="form.is_sub_location" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_sub_location_info')}} </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_thumbnail')"
                                        v-model:value="form.is_thumb2x_3x_generate" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_thumbnail_info')}} </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_paid_app_on')" v-model:value="form.is_paid_app" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_paid_app_on_info')}} </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_sub_cat_sub')"
                                        v-model:value="form.is_sub_subscription" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_sub_cat_sub_info')}} </ps-label-caption>
                                </div>
                                <div class="px-4 py-3">
                                    <ps-checkbox-value :title="$t('core_sys_block_feauture')" v-model:value="form.is_block_user" />
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_block_feauture_nfo')}}
                                    </ps-label-caption>
                                </div>
                            </div>
                            <div v-if="title == settingColumn[1].label">
                                <!-- for ad post type dropdown -->
                                <div class="px-4 py-3">
                                    <ps-label class="text-base">{{$t('core_sys_ad_post_type')}}
                                    </ps-label>
                                    <ps-dropdown align="left" class='lg:mt-2 mt-1  w-full'>
                                        <template #select>
                                            <ps-dropdown-select placeholder="Select Ad Post Type"
                                                :selectedValue="(form.ad_type == '') ? '' : adTypes.filter(adType => adType.id == form.ad_type)[0].value" />
                                        </template>
                                        <template #list>
                                            <div class="rounded-md shadow-xs ">
                                                <div class="pt-2 z-30 ">
                                                    <div class="flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                                        @click="[form.ad_type = '']">
                                                        <ps-label class="text-secondary-200">{{$t('core_sys_select_ad_post_type')}}</ps-label>
                                                    </div>
                                                    <div v-for="adType in adTypes" :key="adType.id"
                                                        class="flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                                        @click="[form.ad_type = adType.id]">
                                                        <ps-label class="ms-2"
                                                            :class="adType.id == form.ad_type ? ' font-bold' : ''">
                                                            {{ adType.value }} </ps-label>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </ps-dropdown>
                                </div>
                                <!-- end ad post type -->

                                <div class="px-4 py-3">
                                    <ps-label class="text-base mb-1">{{$t('core_sys_promate_cell')}}</ps-label>
                                    <ps-label-caption textColor="text-secondary-400 mt-1">{{$t('core_sys_promate_cell_nfo')}} </ps-label-caption>
                                    <ps-input type="text" v-model:value="form.promo_cell_interval_no"
                                        :placeholder="$t('core_sys_input_number')" @keypress="onlyNumber" />
                                </div>
                            </div>

                            <div v-if="title == settingColumn[2].label">
                                <div class="px-4 py-3">
                                    <ps-label class="text-base mb-1">Price Per Day</ps-label>
                                    <ps-input type="text" v-model:value="form.one_day_per_price" placeholder="Price Per Day"
                                        @keyup="validatePriceInput('one_day_per_price', form.one_day_per_price)"
                                        @blur="validatePriceInput('one_day_per_price', form.one_day_per_price)"
                                        @keypress="onlyNumberWithCustomForPrice" />
                                </div>
                            </div>
                            <div class="flex flex-row px-4 py-3 justify-end mb-2.5 mt-4">
                                <ps-button @click="handleCancel()" textSize="text-base" type="reset" class="me-4"
                                    colors="text-primary-500" focus="" hover="">{{$t('core__be_btn_cancel')}}</ps-button>
                                <ps-button :disabled="!system_config.authorizations.update" class="transition-all duration-300 min-w-3xs" padding="px-6 py-2"
                                    rounded="rounded" hover="" focus="">
                                    <ps-loading v-if="loading"
                                        theme="border-2 border-t-2 border-text-8 border-t-primary-500"
                                        loadingSize="h-5 w-5" />
                                    <ps-icon v-if="success" name="check" w="20" h="20"
                                        class="me-1.5 transition-all duration-300" />
                                    <ps-label v-if="success" class="transition-all duration-300"
                                        textColor="text-white dark:text-secondaryDark-black">{{ $t('core__be_btn_save') }}</ps-label>
                                    <ps-label v-if="!loading && !success"
                                        textColor="text-white dark:text-secondaryDark-black"> {{$t('core__be_btn_save')}} </ps-label>
                                </ps-button>
                            </div>

                        </div>
                        <!-- setting column -->
                        <div>
                            <div v-for="column in settingColumn" :key="column.id">
                                <div @click="changeSection(column.label)"
                                    :class="title == column.label ? 'border-l border-l-primary-500' : 'border-l border-l-secondary-300'"
                                    class="px-2 py-3 cursor-pointer">
                                    <ps-label
                                        :textColor="title == column.label ? 'text-primary-500 dark:text-primary-500' : 'text-secondary-800 dark:text-white'">
                                        {{ column.label }}
                                    </ps-label>
                                </div>
                            </div>
                        </div>

                    </div>
                    </form>
            </div>
            </ps-card>
        </div>
    </ps-layout>
</template>

<script>
import { defineComponent, ref, reactive, defineAsyncComponent } from 'vue'
import PsLayout from "@/Components/PsLayout.vue";
import { Head,Link, useForm } from "@inertiajs/inertia-vue3";
import useValidators from '@/Validation/Validators'
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsTextarea from '@/Components/Core/Textarea/PsTextarea.vue';
import PsLabelHeader4 from "@/Components/Core/Label/PsLabelHeader4.vue";
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsLoading from "@/Components/Core/Loading/PsLoading.vue";
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import PsLabelTitle3 from "@/Components/Core/Label/PsLabelTitle3.vue";
import PsImageUpload from "@/Components/Core/Upload/PsImageUpload.vue";
import PsCheckboxValue from '@/Components/Core/Checkbox/PsCheckboxValue.vue';
import PsDropdown from "@/Components/Core/Dropdown/PsDropdown.vue";
import PsDropdownSelect from "@/Components/Core/Dropdown/PsDropdownSelect.vue";
const GoogleMapPinPicker = defineAsyncComponent(() => import('@/Components/Core/Map/GoogleMapPinPicker.vue'));
import { trans } from 'laravel-vue-i18n';

export default defineComponent({
    name: "Edit",
    components: {
        Head,
        PsInput,
        GoogleMapPinPicker,
        PsLabel,
        PsButton,
        PsTextarea,
        PsLabelHeader4,
        PsIcon,
        PsLoading,
        PsBreadcrumb2,
        Link,
        PsLabelCaption,
        PsLabelTitle3,
        PsImageUpload,
        PsCheckboxValue,
        PsDropdown,
        PsDropdownSelect
    },
    layout: PsLayout,
    props: ['errors', 'system_config', 'status', 'adTypes'],
    setup(props) {

        const loading = ref(false);
        const success = ref(false);
        const ps_action_modal = ref();
        const ps_image_icon_modal = ref();
        const ps_danger_dialog = ref();
        let form = useForm(
            {
                lat: props.system_config.lat,
                lng: props.system_config.lng,
                is_approved_enable: props.system_config.is_approved_enable ==1?true:false,
                is_sub_location: props.system_config.is_sub_location ==1?true:false,
                is_thumb2x_3x_generate: props.system_config.is_thumb2x_3x_generate ==1?true:false,
                is_sub_subscription: props.system_config.is_sub_subscription ==1?true:false,
                is_paid_app: props.system_config.is_paid_app ==1?true:false,
                is_block_user: props.system_config.is_block_user == 1 ? true : false,
                max_img_upload_of_item: props.system_config.max_img_upload_of_item,
                // ad_type: props.system_config.ad_type,
                ad_type: props.adTypes.find(element=> element.id == props.system_config.ad_type) ? props.system_config.ad_type : '',
                promo_cell_interval_no: props.system_config.promo_cell_interval_no,
                one_day_per_price: props.system_config.one_day_per_price,
                "_method": "put"
            }
        )

        const settingColumn = [
            {
                label: trans('core_sys_app_setting_info'),
            },
            {
                label: trans('core_sys_ad_post_type_setting'),
            },
            {
                label: trans('core_sys_promote_config'),
            },
        ];

        const title = ref(settingColumn[0].label);

        // Client Side Validation
        const { isLatitude, isLongitude, isPrice } = useValidators();

        const validateLatitudeInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? '' : isLatitude(fieldName, fieldValue);
            if (fieldName == 'lat') {
                lat.value.isError = (props.errors.lat == '') ? false : true;
            }
        }

        const validateLongitudeInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? '' : isLongitude(fieldName, fieldValue);
            if (fieldName == 'lng') {
                lng.value.isError = (props.errors.lng == '') ? false : true;
            }
        }

        // for only number input validate at keypress
        const onlyNumber = ($e) => {
            let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
            if (keyCode < 48 || keyCode > 57) {
                $e.preventDefault();
            }
        }

        // for custom number input validate at keypress for lat and lng
        const onlyNumberWithCustom = ($e) => {
            let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 45) { // 46 is dot, 45 is dash
                $e.preventDefault();
            }
        }

        const validatePriceInput = (fieldName, fieldValue) => {
            props.errors[fieldName] = !fieldValue ? '' : isPrice(fieldName, fieldValue);
            if (fieldName == 'price_per_day') {
                price_per_day.value.isError = (props.errors.price_per_day == '') ? false : true;
            }
        }
        // for custom number input validate at keypress for price
        const onlyNumberWithCustomForPrice = ($e) => {
            let keyCode = ($e.keyCode ? $e.keyCode : $e.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 45 && keyCode !== 44) { // 46 is dot, 45 is dash, 44 is comma
                $e.preventDefault();
            }
        }

        function changeSection(v) {
            title.value = v;
        }
        function handleCancel() {
            this.$inertia.get(route('system_config.index'));
        }
        function handleSubmit(id) {
            this.$inertia.post(route('system_config.update', id), form, {
                forceFormData: true,
                onBefore: () => { loading.value = true },
                onSuccess: () => {
                    loading.value = false;
                    success.value = true;
                    setTimeout(() => {
                        success.value = false;
                    }, 2000)
                },
                onError: () => {
                    loading.value = false;;
                },
            });
        }

        function updateCoordinates(location) {
            form.lat = location.latLng.lat();
            form.lng = location.latLng.lng();
        }
        return {
            validateLatitudeInput,
            validateLongitudeInput,
            onlyNumberWithCustom,
            onlyNumberWithCustomForPrice,
            validatePriceInput,
            handleCancel,
            onlyNumber,
            form,
            settingColumn,
            title,
            changeSection,
            handleSubmit,
            loading,
            success,
            updateCoordinates
        }
    },
    computed: {
        breadcrumb() {

            return [
                {
                    label: trans('core__be_dashboard_label'),
                    url: route('admin.index')
                },
                {
                    label: trans('system_config_module'),
                    color: "text-primary-500"
                }
            ]

        }
    },
})
</script>
