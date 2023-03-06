<template>

    <ps-modal ref="psmodal" maxWidth="552px" bodyHeight="100%" line="hidden" :isClickOut='false' theme=" px-4 py-4 rounded-lg shadow-xl" class=' z-20'>

        <template #title>
            <div class="flex justify-end mb-3">
                <ps-icon @click="close()" v-if="isClickOut" name="cross" theme="text-secondary-400" />
            </div>

            <div v-if="isCountDownShow" class="flex flex-col">
                <div class="bg-primary-50 text-xl p-3 text-dark rounded w-full text-center mb-8">
                    {{ $t('your_free_trial_duration_left') }}
                    <span class="text-green-500 animate-pulse" id="systemCode2">{{ showcountDownDate }}</span>
                </div>

            </div>
            <ps-label class="font-medium text-xl lg:text-2xl px-4"> {{title}} </ps-label>

        </template>
        <template #body>
            <div class="w-full mt-6 px-4">

                <!-- alert banner start -->
                <ps-banner-icon  v-if="visible" :visible="visible"
                                 :theme="(status.flag)=='danger'?'bg-red-500':(status.flag)=='warning'?'bg-yellow-500':'bg-green-500'"
                                 :iconName="(status.flag)=='danger'?'close-circle':(status.flag)=='warning'?'alert-triangle':'rightalert'"
                                 class="text-white mb-8"
                                 iconColor="white">{{status.msg}}</ps-banner-icon>
                <!-- alert banner end -->

                <div class="mb-6">

                    <div class="mb-4">
                        <ps-label class="text-base mb-1" >
                            <!-- <ps-label class="text-red-800 font-medium me-1">*</ps-label> -->
                            {{ $t('installer_messages.environment.wizard.form.base_domain_label') }}
                        </ps-label>
                        <ps-input-with-right-icon :disabled="isDisableBackendUrl" v-model:value="form.backend_url"  :placeholder="$t('enter_backend_url')" >
                            <template #icon >
                                <ps-loading v-if="loadingBackendUrl" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                                <ps-label v-if="successBackendUrl" class="transition-all duration-300" textColor="text-dark dark:text-secondaryDark-black">{{ $t('core__be_btn_saved') }}</ps-label>
                                <ps-button @click="handleUpdateBackendUrl()" v-if="isEditBackendUrl && !loadingBackendUrl && !successBackendUrl" class="" padding="p-0" colors="text-primary-500" hover="">{{ $t('core__be_btn_save') }}</ps-button>
                                <ps-icon @click="handleBackendUrlEdit()" v-if="!isEditBackendUrl && !loadingBackendUrl && !successBackendUrl" name="editPencil"/>
                            </template>
                        </ps-input-with-right-icon>
                        <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.backend_url }}</ps-label-caption>
                    </div>

                    <div class="">
                        <ps-label class="text-base mb-1" >
                            <!-- <ps-label class="text-red-800 font-medium me-1">*</ps-label> -->
                            {{ $t('purchase_code') }}
                        </ps-label>
                        <ps-input-with-right-icon :disabled="isDisablePurchasedCode" v-model:value="form.purchased_code"  :placeholder="$t('enter_purchase_code')" >
                            <template #icon >
                                <ps-loading v-if="loadingPurchasedCode" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                                <ps-label v-if="successPurchasedCode" class="transition-all duration-300" textColor="text-dark dark:text-secondaryDark-black">{{ $t('core__be_btn_saved') }}</ps-label>
                                <ps-button @click="handleUpdatePurchaseCode()" v-if="isEditPurchasedCode && !loadingPurchasedCode && !successPurchasedCode" class="" padding="p-0" colors="text-primary-500" hover="">{{ $t('core__be_btn_save') }}</ps-button>
                                <ps-icon @click="handlePurchasedCodeEdit()" v-if="!isEditPurchasedCode && !loadingPurchasedCode && !successPurchasedCode" name="editPencil"/>
                            </template>
                        </ps-input-with-right-icon>
                        <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.purchased_code }}</ps-label-caption>
                        <ps-label-caption v-if="purchased_code" textColor="text-red-500 " class="mt-2 block">{{ purchased_code }}</ps-label-caption>
                    </div>

                </div>

                <div class="mb-6">

                    <ps-label class="text-base mb-1" >
                        {{ $t('import_zip_file') }}
                    </ps-label>
                    <div class="" v-if="selectedFile">
                        <ps-input-with-right-icon class="w-60 mb-3" :disabled="true" v-model:value="selectedFile.name" >
                            <template #icon >
                                <ps-icon @click="clearSelectedFile()" name="cross"/>
                            </template>
                        </ps-input-with-right-icon>
                        <ps-button :disabled="isCanMakeAction" @click="doImport(selectedFile)" class="mb-0.5" colors="bg-green-500 text-white">
                            <ps-label textColor="text-white">{{ $t('activate') }}</ps-label>
                        </ps-button>
                    </div>
                    <div class="" v-if="selectedZipFileName">
                        <ps-input-with-right-icon class="w-60 mb-3" :disabled="true" v-model:value="selectedZipFileName" >
                            <template #icon >
                                <ps-icon @click="clearSelectedFile()" name="cross"/>
                            </template>
                        </ps-input-with-right-icon>
                        <ps-button :disabled="isCanMakeAction" @click="doImport(selectedZipFileName, 1)" class="mb-0.5" colors="bg-green-500 text-white">
                            <ps-label textColor="text-white">{{ $t('activate') }}</ps-label>
                        </ps-button>
                    </div>
                    <!-- for exported zip file import start -->
                    <input type="file" accept=".zip" ref="importFile" style="display: none;"  @change="handleImport($event)">

                   <div v-if="!selectedFile && !selectedZipFileName" class="">
                       <ps-button :disabled="isCanMakeAction" @click="importClicked" class="mb-0.5" padding="px-3 py-2">
                           <ps-icon name="plus" class="mx-0.5 font-semibold" />
                           <ps-label textColor="text-white">{{ $t('import_file') }}</ps-label>
                       </ps-button>
                   </div>

                    <!-- for exported zip file import end -->
                </div>

                <div v-if="logMessages" class="mb-6 border rounded border-red-500 w-80 p-3">

                    <div v-for="logMessage in logMessages" class="">
                        <div class="flex mb-2" v-if="logMessage.status === 'danger'">
                            <div class="h-100">
                                <ps-icon name="cross" w="20" h="20" class="me-4 p-0.5 inline-block align-middle font-semibold bg-red-500 border rounded-full text-white" />
                            </div>
                            <p class="text-red-500 text-base">
                                {{ logMessage.message }}
                            </p>
                        </div>
                        <div class="flex mb-2" v-if="logMessage.status === 'success'">
                            <div class="h-100">
                                <ps-icon name="check" w="20" h="20" class="me-4 p-0.5 inline-block align-middle font-semibold bg-green-500 border rounded-full text-white" />
                            </div>
                            <p class="text-green-500 text-base">
                                {{ logMessage.message }}
                            </p>
                        </div>
                    </div>

                </div>

                <div class="mb-6">
                    <ps-label class="text-base mb-3" >
                        {{ $t("guide_link") }}
                    </ps-label>
                    <div class="mb-2">
                        <a target="_blank" href="https://share-docs.clickup.com/24312566/p/h/q5yqp-49543/a8f0164851b3c63/q5yqp-50183" class="underline text-indigo-500">
                            {{ $t('how_to_make_project_setup') }}
                        </a>
                    </div>
                    <div class="">
                        <a target="_blank" href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" class="underline text-indigo-500">
                            {{ $t('how_to_purchase_code') }}
                        </a>
                    </div>
                </div>

            </div>
        </template>
        <template #footer>
<!--            <div class=" flex justify-center mt-6">-->
<!--                <div class="flex-grow-0">-->
<!--                    <ps-button rounded="rounded" @click="actionClicked()" textSize="text-sm" class="" colors="bg-green-500 text-white"  hover="hover:outline-none hover:ring hover:ring-green-100" focus="focus:outline-none focus:ring focus:ring-green-300" > {{okButton}} </ps-button>-->
<!--                </div>-->
<!--            -->
<!--            </div>-->
        </template>
    </ps-modal>
    <ps-confirm-dialog ref="ps_confirm_dialog" />
    <ps-loading-circle-dialog ref="ps_loading_circle_dialog" />
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import PsModal from '../Modals/PsModal.vue';
import PsLoading from "../Loading/PsLoading.vue";
import PsLabel from '../Label/PsLabel.vue';
import PsButton from '../Buttons/PsButton.vue';
import { trans } from 'laravel-vue-i18n';
import PsIcon from "../Icons/PsIcon.vue";
import PsInput from "../Input/PsInput.vue";
import PsInputWithRightIcon from "../Input/PsInputWithRightIcon.vue";
import PsLabelCaption from "../Label/PsLabelCaption.vue";
import {useForm} from "@inertiajs/inertia-vue3";
import PsBannerIcon from "@/Components/Core/Banners/PsBannerIcon.vue";
import {Inertia} from "@inertiajs/inertia";
import PsConfirmDialog from '@/Components/Core/Dialog/PsConfirmDialog.vue';
import PsLoadingCircleDialog from '@/Components/Core/Dialog/PsLoadingCircleDialog.vue';


export default defineComponent ({
    name: 'PsLicenseActivateModal',
    components : {
        PsModal,
        PsLabel,
        PsButton,
        PsIcon,
        PsInput,
        PsLabelCaption,
        PsBannerIcon,
        PsConfirmDialog,
        PsLoadingCircleDialog,
        PsInputWithRightIcon,
        PsLoading

    },
    props: ['hasError', 'selectedZipFileName', 'systemCode2', 'errors', 'status', 'project', 'purchased_code', 'logMessages', 'isCountDownShow'],
    setup(props) {
        const psmodal = ref();
        const title = ref(trans('ps_success_dialog__success'));
        const message = ref(trans('ps_success_dialog__success_message'));
        const okButton = ref(trans('ps_confirm_dialog__yes'));
        const ps_confirm_dialog = ref();
        const ps_loading_circle_dialog = ref();
        let okClicked: Function;
        const showIcon = ref(true);
        let isClickOut = ref(true);
        let visible = ref(false);
        const isEditPurchasedCode = ref(false);
        let isDisablePurchasedCode = ref(true);
        let loadingPurchasedCode = ref(false);
        let successPurchasedCode = ref(false);
        const isEditBackendUrl = ref(false);
        let isDisableBackendUrl = ref(true);
        let loadingBackendUrl = ref(false);
        let successBackendUrl = ref(false);
        const importFile = ref();
        let selectedFile = ref(props.selectedZipFileName);
        let showcountDownDate = ref('');



        function actionClicked() {
            okClicked();
            psmodal.value.toggle(false);
        }

        let form = useForm({
            backend_url : props.project.project_url,
            purchased_code : props.project.project_code,
        })

        // Set the date we're counting down to
        let countDownDate = new Date(props.systemCode2).getTime();
        // Update the count down every 1 second
        let x = setInterval(function() {

            // Get today's date and time
            let now = new Date().getTime();

            // Find the distance between now and the count down date
            let distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"


            // document.getElementById("systemCode2").innerHTML = days + "d : " + hours + "hr : " + minutes + "min : " + seconds + "s ";
            // showcountDownDate.value = days + "d : " + hours + "hr : " + minutes + "min : " + seconds + "s ";
            showcountDownDate.value = days + "d : " + hours + "hr : " + minutes + "min";


            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                isClickOut.value = false;
                // document.getElementById("demo").innerHTML = "EXPIRED";
                showcountDownDate.value = "EXPIRED";
            }
        }, 1000);

        function close() {
            psmodal.value.toggle(false);
        }

        function openModal(
            titleString,
            messageString,
            okString,
            okClickedAction: Function,showIconBol = true ) {
            title.value = titleString;
            message.value = messageString.toString();
            okButton.value = okString;
            psmodal.value.toggle(true);
            okClicked = okClickedAction;
            showIcon.value = showIconBol;
        }

        function handleUpdatePurchaseCode(){
            this.$inertia.post(route('admin.dashboard.updateLicense'), form, {
                onBefore: () => {
                    isDisablePurchasedCode.value = true;
                    loadingPurchasedCode.value = true;
                    isEditPurchasedCode.value = false;
                },
                onSuccess: () => {
                    loadingPurchasedCode.value = false;
                    successPurchasedCode.value = true;
                    // visible.value = true;
                    setTimeout(() => {
                        successPurchasedCode.value = false;
                        visible.value = false;
                    }, 3000);
                },
                onError: () => {
                    successPurchasedCode.value = false;
                    loadingPurchasedCode.value = false;
                },
            });
        }

        function handleUpdateBackendUrl(){
            this.$inertia.post(route('admin.dashboard.updateLicense'), form, {
                onBefore: () => {
                    isDisableBackendUrl.value = true;
                    loadingBackendUrl.value = true;
                    isEditBackendUrl.value = false;
                },
                onSuccess: () => {
                    loadingBackendUrl.value = false;
                    successBackendUrl.value = true;
                    // visible.value = true;
                    setTimeout(() => {
                        successBackendUrl.value = false;
                        visible.value = false;
                    }, 3000);
                },
                onError: () => {
                    successBackendUrl.value = false;
                    loadingBackendUrl.value = false;
                },
            });
        }

        function handlePurchasedCodeEdit(){
            isEditPurchasedCode.value = true;
            isDisablePurchasedCode.value = false;
        }

        function handleBackendUrlEdit(){
            isEditBackendUrl.value = true;
            isDisableBackendUrl.value = false;
        }

        function importClicked(){
            if (!isEditBackendUrl.value && !loadingBackendUrl.value && !successBackendUrl.value && !isEditPurchasedCode.value && !loadingPurchasedCode.value && !successPurchasedCode.value){
                importFile.value.click();
            }
        }

        function handleImport(event) {
            isClickOut.value = false;
            const selectedFiles = event.target.files;
            selectedFile.value = selectedFiles[0];
            // ps_confirm_dialog.value.openModal(trans('core__be_import_confirmation'),
            //     trans('core__be_want_import_zip_file'),
            //     trans('core__be_btn_confirm'),
            //     trans('core__be_btn_cancel'),
            //     ()=>{
            //         doImport(selectedFile.value);
            //     },
            //     ()=>{});


        }

        function clearSelectedFile(){
            selectedFile.value = "";
            isClickOut.value = true;
        }

        function doImport(selectedFile, isTableSetting = 0) {
            let form = useForm({
                zipFile: selectedFile,
                tableSetting: isTableSetting
            })

            // ps_loading_circle_dialog.value.openModal(trans('license_activating'), trans('wait_msg'));

            Inertia.post(route('admin.dashboard.activateLicense'), form, {
                onBefore: () => {
                    ps_loading_circle_dialog.value.openModal(trans('license_activating'), trans('wait_msg'));
                },
                onSuccess: (res) => {
                    ps_loading_circle_dialog.value.closeModal();
                    isClickOut.value = true;
                    if (props.hasError === 0){
                        close();
                    }
                    //
                },
                onError: () => {
                    ps_loading_circle_dialog.value.closeModal();

                },
            });

        }

        return {
            isClickOut,
            psmodal,
            title,
            message,
            openModal,
            actionClicked,
            okButton,
            close,
            showIcon,
            form,
            handleUpdatePurchaseCode,
            visible,
            ps_confirm_dialog,
            importClicked,
            handleImport,
            importFile,
            ps_loading_circle_dialog,
            loadingPurchasedCode,
            isEditPurchasedCode,
            isDisablePurchasedCode,
            successPurchasedCode,
            handlePurchasedCodeEdit,
            loadingBackendUrl,
            isEditBackendUrl,
            isDisableBackendUrl,
            successBackendUrl,
            handleBackendUrlEdit,
            handleUpdateBackendUrl,
            selectedFile,
            doImport,
            clearSelectedFile,
            showcountDownDate
        }
    },
    computed: {
        isCanMakeAction() {
            if (!this.isEditBackendUrl && !this.loadingBackendUrl && !this.successBackendUrl && !this.isEditPurchasedCode && !this.loadingPurchasedCode && !this.successPurchasedCode){
                return false;
            } else {
                return true;
            }
        }
    },
})
</script>
