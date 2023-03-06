
<template>
    <Head :title="$t('system_config_module')" />
    <ps-layout>
        <div class="">
            <!-- breadcrumb start -->
            <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
            <!-- breadcrumb end -->

            <div class="w-full grid grid-cols-2 gap-x-20 mt-8 rounded-lg bg-white dark:bg-secondaryDark-black  shadow-sm">
                <ps-label class="col-span-2 text-lg px-4 py-3.5 bg-primary-50 dark:bg-primary-900">{{ title }} </ps-label>
                <div class="">
                    <form @submit.prevent="handleSubmit()">
                        <div v-if="title == settingColumn[0].label">
                            
                            <div class="px-4 py-3">
                                <google-map-pin-picker :lat="parseFloat(form.lat)" :lng="parseFloat(form.lng)" widthHeight="width: 458px; height: 500px"
                                    :onChange="updateCoordinates" />
                            </div>

                            <div class="px-4 py-3">
                                <ps-label class="text-base">Latitude</ps-label>
                                <ps-input type="text" v-model:value="form.lat" placeholder="Latitude"
                                    @keypress="onlyNumberWithCustom" @keyup="validateLatitudeInput('lat', form.lat)"
                                    @blur="validateLatitudeInput('lat', form.lat)" />
                                <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.lat }}</ps-label-caption>
                            </div>

                            <div class="px-4 py-3">
                                <ps-label class="text-base">Longitude</ps-label>
                                <ps-input type="text" v-model:value="form.lng" placeholder="Longitude"
                                    @keypress="onlyNumberWithCustom"
                                    @keyup="validateLongitudeInput('lng', form.lng)"
                                    @blur="validateLongitudeInput('lng', form.lng)" />
                                <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.lng }}</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-label class="text-base mb-1">Maximum Image Upload of Item</ps-label>
                                <ps-input type="text" v-model:value="form.max_img_upload_of_item" placeholder="Number" @keypress="onlyNumber"/>        
                            </div><div class="px-4 py-3">
                                <ps-checkbox-value title="Approval System On?" v-model:value="form.is_approved_enable" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when the user update new item it
                                    need to approve or reject from super admin.)</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-checkbox-value title="Sub Location On?" v-model:value="form.is_sub_location" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when the user open the app the user need to choose sub lcoation(township) under the location(city).)</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-checkbox-value title="Thumbnail 2x 3x Setting On?" v-model:value="form.is_thumb2x_3x_generate" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when you upload the image it will
                                    generate thumbnail 2x and thumbnail 3x automatically.)</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-checkbox-value title="Paid App On?" v-model:value="form.is_paid_app" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when the app is limited user ad post.)</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-checkbox-value title="Sub Category Subscription On?" v-model:value="form.is_sub_subscription" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when the user must be able to subscribe on the subcategories.)</ps-label-caption>
                            </div>
                            <div class="px-4 py-3">
                                <ps-checkbox-value title="Block Feature On?" v-model:value="form.is_block_user" />
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", when the user can block other unwanted users from seeing their ad post.)</ps-label-caption>
                            </div>
                        </div>
                        <div v-if="title == settingColumn[1].label">
                            <!-- for ad post type dropdown -->
                            <div>
                                <ps-label class="text-base">Ad Post Type
                                </ps-label>
                                <ps-dropdown align="left" class='lg:mt-2 mt-1  w-full'>
                                    <template #select>
                                        <ps-dropdown-select placeholder="Select Ad Post Type"
                                            :selectedValue="(form.ad_type == '') ? '' : adTypes.filter(adType => adType.id == form.ad_type)[0].value"/>
                                    </template>
                                    <template #list>
                                        <div class="rounded-md shadow-xs ">
                                            <div class="pt-2 z-30 ">
                                                <div class="flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                                    @click="[form.ad_type = '']">
                                                    <ps-label class="text-secondary-200">Select Ad Post Type</ps-label>
                                                </div>
                                                <div v-for="adType in adTypes" :key="adType.id"
                                                    class="flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"
                                                    @click="[form.ad_type = adType.id]">
                                                    <ps-label class="ms-2" :class="adType.id == form.ad_type ? ' font-bold' : ''">
                                                        {{ adType.value }} </ps-label>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </ps-dropdown>
                            </div>
                            <!-- end ad post type -->

                            <div class="px-4 py-3">
                                <ps-label class="text-base mb-1">Promoted Cell Interval No.</ps-label>
                                <ps-label-caption textColor="text-secondary-400 mt-1"> (If this setting is "On", the sponsored ads are going to show in every x no. of the list.)</ps-label-caption>
                                <ps-input type="text" v-model:value="form.promo_cell_interval_no" placeholder="Promoted Cell Interval No." @keypress="onlyNumber" />
                            </div>                           
                        </div>

                        <div v-if="title == settingColumn[2].label">
                            <div class="px-4 py-3">
                                <ps-label class="text-base mb-1">Price Per Day</ps-label>
                                <ps-input type="text" v-model:value="form.one_day_per_price" 
                                placeholder="Price Per Day" 
                                @keyup="validatePriceInput('one_day_per_price', form.one_day_per_price)"
                                    @blur="validatePriceInput('one_day_per_price', form.one_day_per_price)"
                                    @keypress="onlyNumberWithCustomForPrice" />
                            </div>
                        </div>
                        <div class="flex flex-row px-4 py-3 justify-end mb-2.5 mt-4">
                            <ps-button @click="handleCancel()" textSize="text-base" type="reset" class="me-4" colors="text-primary-500" focus="" hover="">{{$t('core__be_btn_cancel')}}</ps-button>
                            <ps-button class="transition-all duration-300 min-w-3xs" padding="px-6 py-2" rounded="rounded" hover="" focus="" >
                                <ps-loading v-if="loading" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                                <ps-icon v-if="success" name="check" w="20" h="20" class="me-1.5 transition-all duration-300" />
                                <ps-label v-if="success" class="transition-all duration-300" textColor="text-white dark:text-secondaryDark-black">{{ $t('core__be_btn_save') }}</ps-label>
                                <ps-label v-if="!loading && !success" textColor="text-white dark:text-secondaryDark-black" > {{$t('core__be_btn_save')}} </ps-label>
                            </ps-button>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col pt-4">

                    <div v-for="column in settingColumn" :key="column.id">
                        <div @click="changeSection(column.label)"
                            :class="title == column.label ? 'border-l border-l-primary-500' : 'border-l border-l-secondary-300'"
                            class="px-2 py-3 cursor-pointer">
                            <ps-label :textColor="title == column.label ? 'text-primary-500 dark:text-primary-500' : 'text-secondary-800 dark:text-white'" >
                                {{ column.label }}
                            </ps-label>
                        </div>
                    </div>

                </div>
            </div>
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
    props: ['errors', 'adTypes'],
    setup(props) {

        const loading = ref(false);
        const success = ref(false);
        let form = useForm(
            {
                lat: "",
                lng: "",
                is_approved_enable: "",
                is_sub_location: "",
                is_thumb2x_3x_generate: "",
                is_sub_subscription: "",
                is_paid_app: "",
                is_block_user: "",
                max_img_upload_of_item: "",
                ad_type: "",
                promo_cell_interval_no: "",
                one_day_per_price: "",
            }
        )

        const settingColumn = [
            {
                label: "App Setting Information",
            },
            {
                label: "Ad Post Type Setting",
            },
            {
                label: "Promote Configuration",
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

        function changeSection(v){
            title.value = v;
        }
        function handleCancel() {
            this.$inertia.get(route('system_config.index'));
        }
        function handleSubmit() {
            this.$inertia.post(route('system_config.store'), form, {
                forceFormData: true,
            onBefore: () => {loading.value = true},
            onSuccess: () => {
                loading.value = false;
                success.value = true;
                setTimeout(()=>{
                    success.value = false;
                },2000)
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
