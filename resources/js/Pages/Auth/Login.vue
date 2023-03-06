<template>
    <Head :title="$t('core__be_sign_in')" />
    <div  :dir="dir" :class="isDarkMode ? 'dark' : ''">
        <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 dark:bg-secondaryDark-black dark:text-textLight">
            
             
           
            <ps-card class="w-full sm:max-w-md mt-6 py-4 shadow-md dark:bg-secondaryDark-black" rounded="rounded">
             
                <div class="flex items-center justify-end px-2">

                    <!-- <ps-label >{{$t('core__be_email')}}</ps-label> -->
                     <ps-label
                        class="text-xs font-semibold"
                        textColor="text-gray-500"
                        >
                        {{ $t('core__be_version_number') }}
                    </ps-label>
                </div>
                <div class="px-6">
                    <img v-if="$page.props.backendLogo" v-lazy=" { src: $page.props.uploadUrl + '/' + $page.props.backendLogo.img_path, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }" width="50" height="50" class="m-auto my-2.5"/>
                    <img v-else :src="$page.props.uploadUrl + '/no_logo.png'" width="200" height="100" class="m-auto my-2.5"/>
                    <ps-label-header-3 class="pt-2 text-center">{{$t('core__be_login_to_your_account')}}</ps-label-header-3>
                    <ps-label-title class="text-center m-auto pb-8 pt-2" textColor="text-secondary-600 dark:text-white">{{$t('core__be_welcome_back')}}</ps-label-title>

                    <form @submit.prevent="submit">
                        <div class="mb-4">
                            <ps-label>{{$t('core__be_email')}}</ps-label>
                            <ps-input ref="email" type="email" v-model:value="form.email" :placeholder="$t('core__be_email_placeholder')"
                            @keyup="validateEmailInput('email', form.email)" @blur="validateEmailInput('email', form.email)" autofocus />
                            <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.email}}</ps-label-caption>
                        </div>
                        <div class="mb-4">
                            <ps-label>{{$t('core__be_password')}}</ps-label>
                            <ps-input-with-right-icon
                                v-model:value="form.password"
                                ref="password" :type="(isHide?'password':'text')"
                                @keyup="validateEmptyInput('password', form.password)"
                                @blur="validateEmptyInput('password', form.password)"
                                :placeholder="$t('core__be_password_placeholder')"
                                autocomplete="current-password"
                                >
                                <template #icon>
                                    <ps-icon @click="isHide=!isHide"
                                    class="cursor-pointer"
                                    :name="isHide?'eyeOff':'eye-on'" />
                                </template>
                            </ps-input-with-right-icon>
                            <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.password}}</ps-label-caption>
                        </div>

                        <div class="flex justify-between mb-4">
                            <ps-checkbox-value name="remember" v-model:checked="form.remember" :title="$t('core__be_remember_me')" />
                            <ps-label class="cursor-pointer" textColor="text-primary-500" v-if="canResetPassword" @click="handleReset">
                                {{$t('core__be_forgot_password')}}
                            </ps-label>
                    </div>

                    <div class="block mt-4">
                        <ps-button class="w-full mb-2" >
                            <ps-loading v-if="form.processing" theme="border-2 border-t-2 border-text-8 border-t-primary-500 me-1"  loadingSize="h-5 w-5" />
                            {{ $t('core__be_btn_sign_in') }}
                        </ps-button>
                    </div>
                </form>
                </div>

            </ps-card>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { Head, Link } from '@inertiajs/inertia-vue3';
import PsLabelHeader3 from "@/Components/Core/Label/PsLabelHeader3.vue";
import PsCard from "@/Components/Core/Card/PsCard.vue";
import useValidators from "@/Validation/Validators";
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsInputWithRightIcon from "@/Components/Core/Input/PsInputWithRightIcon.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsCheckboxValue from "@/Components/Core/Checkbox/PsCheckboxValue.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import PsLabelTitle from "@/Components/Core/Label/PsLabelTitle.vue";
import PsLoading from "@/Components/Core/Loading/PsLoading.vue";
import { useStore } from 'vuex'
import { trans } from 'laravel-vue-i18n';

    export default defineComponent({
        components: {
            Head,
            Link,
            PsLabelHeader3,
            PsCard,
            PsInput,
            PsInputWithRightIcon,
            PsLabel,
            PsButton,
            PsIcon,
            PsCheckboxValue,
            PsLabelCaption,
            PsLabelTitle,
            PsLoading,
        },

        props: {
            canResetPassword: Boolean,
            status: String,
            error: String,
            errors:Object,
        },

        data() {
            return {
                form: this.$inertia.form({
                    email: '',
                    password: '',
                    remember: false
                })
            }
        },
        setup(props) {
            const email = ref();
            const password = ref();
            const isHide = ref(true);

            const store = useStore();
            const isDarkMode = computed(() => store.getters.isDarkMode);
            const dir = computed(() => store.getters.dir);

            onMounted(() => {
                // for dark or light mode local storage
                store.dispatch('loadIsDarkMode');

                // for rtl or ltr directory switch local storage
                store.dispatch('loadDirectory');
            });

            // Client Side Validation
            const { isEmpty, minLength, isEmail } = useValidators();

            const validateEmptyInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 4);
                if(fieldName == 'password'){
                    password.value.isError = (props.errors.password == '') ? false: true;
                }
            };

            const validateEmailInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue);
                if(fieldName == 'email'){
                    email.value.isError = (props.errors.email == '') ? false: true;
                }
            }

            return {validateEmptyInput, validateEmailInput, email, password, isHide, dir,
        isDarkMode,};
        },
        methods: {
            submit() {
                this.form
                    .transform(data => ({
                        ... data,
                        remember: this.form.remember ? 'on' : ''
                    }))
                    .post(this.route('login'), {
                        onFinish: () => this.form.reset('password'),
                    })
            },
            handleReset(){
                this.$inertia.get(route('password.request'))
            }
        }
    })
</script>
