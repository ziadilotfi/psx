<template>
    <Head :title="$t('fields_label')" />
    <ps-layout>

        <!-- breadcrumb start -->
        <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
        <!-- breadcrumb end -->

        <!-- alert banner start -->
        <ps-banner-icon  v-if="visible" :visible="visible"
        :theme="(status.flag)=='danger'?'bg-red-500':(status.flag)=='warning'?'bg-yellow-500':'bg-green-500'"
        :iconName="(status.flag)=='danger'?'close-circle':(status.flag)=='warning'?'alert-triangle':'rightalert'"
        class="text-white mb-5 sm:mb-6 lg:mb-8"
         iconColor="white">{{status.msg}}</ps-banner-icon>
        <!-- alert banner end -->

        <!-- data table start -->
        <ps-table2 :row="row" :search="search" :object="this.fields" :colFilterOptions="colFilterOptions" :columns="columns" :sort_field="sort_field" :sort_order="sort_order" @FilterOptionshandle="FilterOptionshandle"
        @handleSort="handleSorting"  @handleSearch="handleSearching" @handleRow="handleRow"
            :searchable="showFilter">

             <!-- add new field start -->
            <!-- <template #button>
                <ps-button v-if="can.createLanguageString"  @click="handleCreate()"  rounded="rounded-lg" type="button" class="flex flex-wrap items-center"> <ps-icon name="plus" class="me-2 font-semibold" />{{$t('core__be_add_language')}}</ps-button>
            </template>
            <template #responsive_button>
                <ps-button v-if="can.createLanguageString"  @click="handleCreate()"  rounded="rounded-lg" type="button" class="flex flex-wrap items-center"> <ps-icon name="plus" class="me-2 font-semibold" />{{$t('core__be_add_language')}}</ps-button>
            </template> -->
            <!-- add new field end -->

            <template #tableActionRow="rowProps">
                <!--  For action (edit/delete) start-->
                <div class="flex flex-row mb-2" v-if="rowProps.field == 'action'">
                   <!-- <ps-button :disabled="rowProps.row.authorizations.update ? rowProps.row.is_core_field == '1' : true" @click="handleCustomDetail(rowProps.row.id)" class="me-4" colors="bg-green-400 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" > <ps-icon theme="text-white dark:text-primary-900" name="editPencil" w="16" h="16" /> </ps-button> -->
                   <ps-button :disabled="rowProps.row.authorizations.delete ? permission_for_delete == '0' : true" @click="confirmDeleteClicked(rowProps.row.id)" colors="bg-red-400 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-red-100" focus="focus:outline-none focus:ring focus:ring-red-200" > <ps-icon theme="text-white dark:text-primary-900" name="trash" w="16" h="16" /> </ps-button>
                   <ps-danger-dialog ref="ps_danger_dialog" />
                </div>
                <!--For action (edit/delete) end-->
             </template>
            <template #tableRow="rowProps">

                <div class="flex" v-if="rowProps.field == 'name'">
                    <div class="">
                        <ps-button :disabled="rowProps.row.authorizations.update ? false : true"  @click="languageClicked(rowProps.row.nameKey)" class="me-4" colors="bg-primary-500 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" >
                            <ps-icon name="language" w="16" h="16" />
                        </ps-button>
                        <ps-danger-dialog ref="ps_danger_dialog" />
                    </div>
                    <ps-label class="font-normal">{{ $t(rowProps.row.nameKey) }}</ps-label>
                </div>

                <div class="flex" v-if="rowProps.field == 'placeholder'">
                    <div class="">
                        <ps-button :disabled="rowProps.row.authorizations.update ? false : true"  @click="languageClicked(rowProps.row.placeholderKey)" class="me-4" colors="bg-primary-500 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" >
                            <ps-icon name="language" w="16" h="16" />
                        </ps-button>
<!--                        <ps-danger-dialog ref="ps_danger_dialog" />-->
                    </div>
                    <ps-label class="font-normal">{{ $t(rowProps.row.placeholderKey) }}</ps-label>
                </div>

                 <div v-if="rowProps.field == 'ui_type_id'">
                    <ps-label class="font-normal">{{ rowProps.row.ui_type_id ? $t(rowProps.row.ui_type_id.name) :  $t('N.A') }}</ps-label>
                </div>

                <div v-if="rowProps.field == 'show_in_table'">
                    <ps-button :disabled="rowProps.row.authorizations.update ? false : true"  @click="eyeIconClicked(rowProps.row.id,rowProps.row.is_core_field,rowProps.row.is_include_in_hideshow,rowProps.row.is_show, rowProps.row.is_show_in_filter)" class="me-4" colors="bg-primary-500 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" >
                        <ps-icon name="eye-on" w="16" h="16" />
                    </ps-button>
<!--                    <ps-danger-dialog ref="ps_danger_dialog" />-->
                </div>

                <div v-if="rowProps.field == 'enable'">
                    <ps-toggle :disabled="rowProps.row.authorizations.update ? rowProps.row.permission_for_enable_disable == 1 ? false : true : true" :selectedValue="rowProps.row.enable == 1 ? true : false"
                        @click="handlePublish(rowProps.row.id,rowProps.row.authorizations.update && rowProps.row.permission_for_enable_disable =='1',rowProps.row.is_core_field)" toggleOnTheme="bg-primary-500 border-primary-500 "></ps-toggle>
                </div>

                <div v-if="rowProps.field == 'is_show_sorting'">
                    <ps-toggle :disabled="rowProps.row.authorizations.update ? false : true" :selectedValue="rowProps.row.is_show_sorting == '1' ? true : false"
                               @click="handleIsShowSorting(rowProps.row.id, rowProps.row.authorizations.update,rowProps.row.is_core_field)" toggleOnTheme="bg-primary-500 border-primary-500 "></ps-toggle>
                </div>

                <div class="flex" v-if="rowProps.field == 'ordering'">
                    <!-- <ps-button :disabled="rowProps.row.authorizations.update ? false : true"  @click="handleOrdering(rowProps.row.id, rowProps.row.authorizations.update,rowProps.row.is_core_field, rowProps.row.ordering)" class="me-4" colors="bg-green-400 text-white" padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" >
                        <ps-icon name="editPencil" w="16" h="16" />
                    </ps-button> -->
                    <ps-label class="font-normal">{{ $t(rowProps.row.ordering) }}</ps-label>

                    <!--                    <ps-danger-dialog ref="ps_danger_dialog" />-->
                </div>

                <ps-button :disabled="rowProps.row.authorizations.update ? rowProps.row.permission_for_mandatory == '1' ? false : true : true " v-if="rowProps.field == 'mandatory'" @click="handleMandatory(rowProps.row.id, rowProps.row.permission_for_mandatory,rowProps.row.is_core_field)" :padding="[rowProps.row.mandatory == '1' ? 'py-2 px-2' : 'py-2 px-4']" :colors="[rowProps.row.mandatory == '1' ? 'bg-red-400  dark:bg-red-200 text-white dark:text-red-800' : 'bg-green-400',' dark:bg-green-200 text-white dark:text-green-800']"  >
                    {{ rowProps.row.mandatory == '1' ? $t('core__be_btn_mandatory') : $t('core__be_btn_optional') }}
                </ps-button>

                <ps-button v-if="rowProps.field == 'attribute'" :disabled="rowProps.row.authorizations.update ? rowProps.row.is_core_field == '1' ? true : isIncludehaveAttrUiTypes(rowProps.row.ui_type_id?.core_keys_id) : true" @click="handleCustomDetail(rowProps.row.core_keys_id, rowProps.row.is_core_field, rowProps.row.ui_type_id.core_keys_id)" class="me-4" :colors="isEnableAttribute(rowProps.row) ? 'bg-green-400 text-white' : 'bg-primary-100 text-white'"  padding="p-1.5" hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-200" >
                     <ps-icon :theme="isEnableAttribute(rowProps.row) ? 'text-white dark:text-primary-900' : 'text-primary-300 dark:text-primary-900'"  name="editPencil" w="16" h="16" />
                </ps-button>

            </template>

        </ps-table2>
        <!-- data table end -->

        <table-field-hide-show-modal ref="hide_show_modal" />
        <language-modal ref="language_modal" />
         <language-edit-modal ref="language_edit_modal" />
        <ps-dialog-with-input2 ref="ps_dialog_with_input2">
            <template #body>
                <div class="w-full text-start mt-2">
                    <ps-label class="font-weight-bolder text-base mb-2"> {{$t('column_order_label')}} </ps-label>
                    <ps-input type="number" v-model:value.number="columnOrderingForm.ordering" :placeholder="$t('column_order_placeholder')" />
                </div>
            </template>
        </ps-dialog-with-input2>
    </ps-layout>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { Link, Head,useForm } from '@inertiajs/inertia-vue3';

import TableFieldHideShowModal from '../components/TableFieldHideShowModal.vue'
import LanguageModal from '../components/LanguageModal.vue'
import LanguageEditModal from '../components/LanguageEditModal.vue'

import PsLayout from "@/Components/PsLayout.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsTable2 from "@/Components/Core/Table/PsTable2.vue";
import PsAlert from "@/Components/Core/Alert/PsAlert.vue";
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import PsDangerDialog from "@/Components/Core/Dialog/PsDangerDialog.vue";
import PsDialogWithInput2 from "@/Components/Core/Dialog/PsDialogWithInput2.vue";
import PsToggle from '@/Components/Core/Toggle/PsToggle.vue';
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsBannerIcon from "@/Components/Core/Banners/PsBannerIcon.vue";
import Dropdown from "@/Components/Core/DropdownModal/Dropdown.vue";
import PsIconButton from "@/Components/Core/Buttons/PsIconButton.vue";
import PsInput from "@/Components/Core/Input/PsInput.vue";
import { trans } from 'laravel-vue-i18n';
import { Inertia } from "@inertiajs/inertia";

    export default defineComponent({
        name: "Index",
        components: {
            Link,
            Head,
            PsLabel,
            PsButton,
            PsTable2,
            PsAlert,
            PsBreadcrumb2,
            PsDangerDialog,
            PsInput,
            PsToggle,
            PsIcon,
            PsBannerIcon,
            Dropdown,
            PsIconButton,
            TableFieldHideShowModal,
            LanguageModal,
            LanguageEditModal,
            PsDialogWithInput2
        },
        layout : PsLayout,
        props:{
            tableId:String,
            status:Object,
            can:Object,
            fields:Object,
            hideShowFieldForFilterArr:Object,
            showCoreAndCustomFieldArr:Object,
            sort_field:{
                    type:String,
                    default:"",

                },
            sort_order:{
                type:String,
                default:'desc',
            },
            search:String,
        },
        setup(props) {
        // For data table
         let sorting = "";
        let search = props.search ? ref(props.search) : ref('');
        let sort_field = props.sort_field ? ref(props.sort_field) : ref('');
        let sort_order = props.sort_order ? ref(props.sort_order) : ref('desc');
        let visible = ref(false);

        const ps_danger_dialog = ref();
        const hide_show_modal = ref();
        const ps_dialog_with_input2 = ref();
        const language_modal = ref();
        const language_edit_modal = ref();

        const colFilterOptions = ref();

        const columns = ref();

        const haveAttrUiTypes = ["uit00001", "uit00003", "uit00008"];

        const columnOrderingForm = useForm({
            'ordering' : '',
            _method : "put"
        });


            function confirmDeleteClicked(id) {
            ps_danger_dialog.value.openModal(
                trans('core__delete'),
                trans('core__comfirm_to_delete_field'),
                trans('core__be_btn_confirm'),
                trans('core__be_btn_cancel'),
                () => {
                    Inertia.put(route("tables.fields.deleteField",{'id' : id}),{
                    onSuccess: () => {
                        visible.value = true;
                        setTimeout(() => {
                            visible.value = false;
                        }, 3000);
                    },
                    onError: () => {
                        visible.value = true;
                        setTimeout(() => {
                            visible.value = false;
                        }, 3000);
                    },
                    });


                },
                () => { }
            );

        }


        function languageClicked(key){
            language_modal.value.openModal( key, (value)=>{
                language_edit_modal.value.openModal(value);
            });
        }

        function handleSorting(value){
            sort_field.value = value.field
            sort_order.value = value.sort_order
            handleSearchingSorting()
        }
        function handleSearching(value){
            search.value = value;
            let page=1;
            handleSearchingSorting(page);
        }
        function handleRow(value){
            handleSearchingSorting(1,value);
        }

        function handleSearchingSorting(page = null,row=null){
            Inertia.get(route('tables.fields.index',props.tableId),
            {
                table:props.tableId,
                sort_field : sort_field.value,
                sort_order: sort_order.value,
                page:page ?? props.fields.meta.current_page,
                row:row ?? props.fields.meta.per_page,
                search:search.value,
                symbol: localStorage.activeLanguage ? localStorage.activeLanguage : 'en',
            },
            {
                preserveScroll: true,
                preserveState:true,
            })
        }

        function isIncludehaveAttrUiTypes(id){
            if(haveAttrUiTypes.includes(id)){
                return false;
            }else{
                return true;
            }
        }
        function isEnableAttribute(row){


            if(row.authorizations.update){
                if(row.is_core_field != '1'){
                    if(haveAttrUiTypes.includes(row.ui_type_id?.core_keys_id)){
                        return true;
                    }else{
                        return false;
                    }
                }
                else{
                    return false;
                }
            }
            else{
                return false;
            }



        }

        function handleOrdering(id, isHaveUpdatePermission, is_core_field, ordering) {
            columnOrderingForm.ordering = ordering;
            ps_dialog_with_input2.value.openModal(
                trans("column_order_label"),
                trans("edit_column_order"),
                trans("core__be_btn_confirm"),
                trans("core__be_btn_cancel"),
                () => {
                    let form = useForm({
                        id: id,
                        isCoreField: is_core_field,
                        ordering: columnOrderingForm.ordering,
                        _method : "put"
                    });
                    this.$inertia.post(route("tables.fields.handleOrdering"), form);
                },
                () => {}
            );
        }

        function eyeIconClicked(id,is_core_field,is_include_in_hideshow,is_show, is_show_in_filter){

            hide_show_modal.value.openModal(is_include_in_hideshow,is_show,is_show_in_filter,
                (included,show,isShowInFilter)=>{
                    let form = useForm({
                        id: id,
                        isCoreField: is_core_field,
                        isIncluded: included,
                        isShow: show,
                        isShowInFilter: isShowInFilter

                    })
                    Inertia.post(route('tables.fields.eyeStatusChange',form));
                },
                ()=>{

                })

        }

        return {
            eyeIconClicked,
            haveAttrUiTypes,
            isIncludehaveAttrUiTypes,
            language_edit_modal,language_modal,
            languageClicked,hide_show_modal,
             columns,
             ps_danger_dialog,
             confirmDeleteClicked,
             colFilterOptions,
             handleRow,
            handleSearchingSorting,
            handleSearching,
            handleSorting,
            visible,
            ps_dialog_with_input2,
            handleOrdering,
            columnOrderingForm,
            isEnableAttribute
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
                    label: trans('table_setting_group'),
                    url: route('table.index')
                },
                {
                    label: trans('core__be_fields'),
                    color: "text-primary-500"
                }
            ]

        },
    },
     created() {
        this.columns = this.showCoreAndCustomFieldArr.map(column => {
            return {
                action: column.action,
                field: column.field,
                label: trans(column.label),
                type: column.type
            };
        });

        this.colFilterOptions = this.hideShowFieldForFilterArr.map(columnFilterOption => {
            return {
                hidden: columnFilterOption.hidden,
                id: columnFilterOption.id,
                key: trans(columnFilterOption.key),
                key_id: columnFilterOption.key_id,
                label: trans(columnFilterOption.label),
                module_name: columnFilterOption.module_name
            };
        });
    },
        methods: {
            handleCreate() {
                this.$inertia.get(route("mobile_language.create"));
            },
            handleCustomDetail(id, isCoreField, uiTypeId){
                if  (isCoreField == '1'){
                } else {
                    if  (this.haveAttrUiTypes.includes(uiTypeId)){
                        this.$inertia.get(route('attribute.index',[this.tableId, id]));
                    } else {
                    }
                }
            },
            handlePublish(id, isHaveEnablePermission,is_core_field){
                if (isHaveEnablePermission){
                    // route to enable or disable for update
                    let form = useForm({
                        id: id,
                        isCoreField: is_core_field,
                    })
                    this.$inertia.post(route('tables.fields.enableChange',form));
                } else {
                }
            },
            handleIsShowSorting(id, isHaveUpdatePermission,is_core_field){
                if (isHaveUpdatePermission){
                    // route to enable or disable for update
                    let form = useForm({
                        id: id,
                        isCoreField: is_core_field,
                    })
                    this.$inertia.post(route('tables.fields.isShowSorting',form));
                } else {
                }
            },
            handleMandatory(id, isHaveMandatoryPermission,is_core_field){
                if (isHaveMandatoryPermission){
                    // route to mandatory or optional for update
                    let form = useForm({
                        id: id,
                        isCoreField: is_core_field,
                    })
                    this.$inertia.post(route('tables.fields.mandatoryChange',form));
                } else {
                }
            },
            handleLanguageString(id){
                this.$inertia.get(route('mobile_language_string.index',id));
            },
            FilterOptionshandle(value) {
            Inertia.put(route('tables.fields.screenDisplayUiSetting.store'),
                {
                    value,
                    sort_field :this.sort_field ,
                    sort_order:this.sort_order,
                    row:this.fields.per_page,
                    search:this.search.value,
                    current_page:this.fields.current_page
                },
                {
                    preserveScroll: true,
                    preserveState:true,
                });

            },
        }

    })
</script>
