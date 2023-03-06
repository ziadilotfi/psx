<template>
    <Head :title="$t('reset_password')" />
    <div class="min-h-screen flex flex-col items-center mt-12 sm:pt-0">
        <ps-card class="w-full sm:max-w-md mt-6 px-6 py-4 shadow-md" rounded="rounded">
            <img v-if="$page.props.backendLogo" v-lazy=" { src: $page.props.uploadUrl + '/' + $page.props.backendLogo.img_path, loading: $page.props.sysImageUrl+'/loading_gif.gif', error: $page.props.sysImageUrl+'/default_photo.png' }" width="50" height="50" class="m-auto mt-2.5 mb-4"/>
            <ps-label-header-3 class="font-semibold my-4 text-center">Reset Password</ps-label-header-3>
            <form @submit.prevent="submit">
                <div>
                    <ps-label>Email</ps-label>
                    <ps-input type="email" ref="email" v-model:value="form.email" required autofocus
                        @keyup="validateEmailInput('email', form.email)"
                        @blur="validateEmailInput('email', form.email)" />
                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.email}}</ps-label-caption>
                </div>

                <div class="mt-4">
                    <ps-label>Password</ps-label>
                    <ps-input type="password" ref="password" v-model:value="form.password" required autocomplete="new-password"
                        @keyup="validatePasswordInput('password', form.password)"
                        @blur="validatePasswordInput('password', form.password)" />
                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.password}}</ps-label-caption>
                </div>

                <div class="mt-4">
                    <ps-label>Confirm Password</ps-label>
                    <ps-input type="password" ref="password_confirmation" v-model:value="form.password_confirmation" required autocomplete="new-password"
                        @keyup="validateConfPasswordInput('password_confirmation', form.password_confirmation)"
                        @blur="validateConfPasswordInput('password_confirmation', form.password_confirmation)" />
                    <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.password_confirmation}}</ps-label-caption>
                </div>

                <div class="block mt-4">
                    <ps-button class="w-full mb-2" >
                        <ps-loading v-if="form.processing" theme="border-2 border-t-2 border-text-8 border-t-primary-500 me-1"  loadingSize="h-5 w-5" />
                        Reset Password
                    </ps-button>
                </div>

            </form>
        </ps-card>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Head, useForm } from '@inertiajs/inertia-vue3';
import useValidators from "@/Validation/Validators";
import PsCard from "@/Components/Core/Card/PsCard.vue";
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsLabelHeader3 from "@/Components/Core/Label/PsLabelHeader3.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import { trans } from 'laravel-vue-i18n';

    export default defineComponent({
        components: {
            Head,
            PsCard,
            PsInput,
            PsLabel,
            PsLabelHeader3,
            PsButton,
            PsLabelCaption
        },

        props: {
            email: String,
            token: String,
        },
        setup(props) {

            // Client Side Validation
            const { isEmpty, isEmail } = useValidators();

            const email = ref();
            const password = ref();
            const password_confirmation = ref();

            let form= useForm({
                    token: this.token,
                    email: this.email,
                    password: '',
                    password_confirmation: '',
                })

            const validateEmailInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : isEmail(fieldName, fieldValue);
                if(fieldName == 'email'){
                    email.value.isError = (props.errors.email == '') ? false: true;
                }
            }

            const validatePasswordInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : '';
                if(fieldName == 'password'){
                    password.value.isError = (props.errors.password == '') ? false: true;
                }
            }

            const validateConfPasswordInput = (fieldName, fieldValue) => {
                props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : '';
                if(fieldName == 'password_confirmation'){
                    password_confirmation.value.isError = (props.errors.password_confirmation == '') ? false: true;
                }
            }

            return {
                email,
                password,
                password_confirmation,
                form,
                validateEmailInput,
                validatePasswordInput,
                validateConfPasswordInput
            }
        },
        methods: {
            submit() {
                this.form.post(this.route('password.update'), {
                    onFinish: () => this.form.reset('password', 'password_confirmation'),
                })
            }
        }
    })
</script>
