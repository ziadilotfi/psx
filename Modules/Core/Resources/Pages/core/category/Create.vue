<template>
  <Head :title="$t('core__add_category')" />
  <ps-layout>
    <!-- breadcrumb start -->
    <ps-breadcrumb-2 :items="breadcrumb" class="mb-5 sm:mb-6 lg:mb-8" />
    <!-- breadcrumb end -->

    <ps-card class="w-full h-auto">
      <div class="rounded-xl">
        <!-- card header start -->
        <div class="bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl">
            <ps-label-header-6 textColor="text-secondary-800 dark:text-secondary-100">{{$t('core__be_category_info')}}</ps-label-header-6>
        </div>
        <!-- card header end -->

        <!-- card body start -->
        <div class="px-4 pt-6 dark:bg-backgroundDark">
          <form @submit.prevent="handleSubmit">
            <div class="grid w-full sm:w-1/2 gap-6">
              <div>
                <ps-label class="text-base mb-2">{{$t('core__category_label')}}<span class="text-red-500 ms-1" >*</span></ps-label>
                <ps-input ref="name" type="text" v-model:value="form.name" :placeholder="$t('core__category_placeholder')"
                  @keyup="validateNameInput('name', form.name)"
                  @blur="validateNameInput('name', form.name)" />
                <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{errors.name}}</ps-label-caption>
              </div>

              <div>
                <ps-label class="text-base mb-2">{{$t('core__category_photo_label')}}<span class="text-red-500 ms-1">*</span></ps-label>
                <ps-label-title-3>{{ $t('core__be_recommended_size_400_200') }}</ps-label-title-3>
                <ps-image-upload uploadType="image" v-model:imageFile="form.cover" />
                <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.cover }}</ps-label-caption>
              </div>

              <div>
                <ps-label class="text-base mb-2">{{$t('core__category_icon_label')}}<span class="text-red-500 ms-1">*</span></ps-label>
                <ps-label-title-3>{{ $t('core__be_recommended_size_200_200') }}</ps-label-title-3>
                <ps-image-upload class="w-72" uploadType="icon" v-model:imageFile="form.icon" />
                <ps-label-caption textColor="text-red-500 " class="mt-2 block">{{ errors.icon }}</ps-label-caption>
              </div>

              <div>
                <ps-label class="text-base mb-2">{{$t('core__status_label')}}</ps-label>
                <ps-checkbox-value v-model:value="form.status" class="font-normal" :title="$t('core__publish_label')" />
              </div>

              <div class="flex flex-row justify-end mb-2.5">
                <ps-button @click="handleCancel()" type="reset" class="me-4" colors="text-primary-500" hover="">{{ $t('core__be_btn_cancel') }}</ps-button>
                <ps-button class="transition-all duration-300 min-w-3xs" padding="px-7 py-2" rounded="rounded" hover="" focus="" >
                    <ps-loading v-if="loading" theme="border-2 border-t-2 border-text-8 border-t-primary-500"  loadingSize="h-5 w-5" />
                    <ps-icon v-if="success" name="check" w="20" h="20" class="me-1.5 transition-all duration-300" />
                    <ps-label v-if="success" class="transition-all duration-300" textColor="text-white dark:text-secondaryDark-black">{{ $t('core__be_btn_saved') }}</ps-label>
                    <ps-label v-if="!loading && !success" textColor="text-white dark:text-secondaryDark-black" > {{ $t('core__be_btn_save') }} </ps-label>
                </ps-button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </ps-card>
  </ps-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import PsLayout from "@/Components/PsLayout.vue";
import { Head, useForm } from "@inertiajs/inertia-vue3";
import PsBreadcrumb2 from "@/Components/Core/Breadcrumbs/PsBreadcrumb2.vue";
import useValidators from "@/Validation/Validators";
import PsInput from "@/Components/Core/Input/PsInput.vue";
import PsLabel from "@/Components/Core/Label/PsLabel.vue";
import PsButton from "@/Components/Core/Buttons/PsButton.vue";
import PsLabelHeader6 from "@/Components/Core/Label/PsLabelHeader6.vue";
import PsCard from "@/Components/Core/Card/PsCard.vue";
import PsLoading from "@/Components/Core/Loading/PsLoading.vue";
import PsIcon from "@/Components/Core/Icons/PsIcon.vue";
import PsCheckboxValue from "@/Components/Core/Checkbox/PsCheckboxValue.vue";
import PsLabelCaption from "@/Components/Core/Label/PsLabelCaption.vue";
import PsLabelTitle3 from "@/Components/Core/Label/PsLabelTitle3.vue";
import PsImageUpload from "@/Components/Core/Upload/PsImageUpload.vue";
import { trans } from 'laravel-vue-i18n';

export default defineComponent({
  name: "Create",
  components: {
    Head,
    PsBreadcrumb2,
    PsInput,
    PsLabel,
    PsButton,
    PsLabelHeader6,
    PsCard,
    PsLoading,
    PsIcon,
    PsCheckboxValue,
    PsLabelCaption,
    PsLabelTitle3,
    PsImageUpload
  },
  layout: PsLayout,
  props: ["errors"],
  setup(props) {
    const loading = ref(false);
    const success = ref(false);
    const name = ref();

    // Client Side Validation
    const { isEmpty, minLength } = useValidators();

    const validateNameInput = (fieldName, fieldValue) => {
        props.errors[fieldName] = !fieldValue ? isEmpty(fieldName, fieldValue) : minLength(fieldName, fieldValue, 3);
        if(fieldName == 'name'){
            name.value.isError = (props.errors.name == '') ? false: true;
        }
    };

    let form = useForm({
      name: "",
      cover: "",
      icon: "",
      status: false,
    });

    function handleSubmit() {
      this.$inertia.post(route("category.store"), form, {
        forceFormData: true,
        onBefore: () => {
          loading.value = true;
        },
        onSuccess: () => {
          loading.value = false;
          success.value = true;
          setTimeout(() => {
            success.value = false;
          }, 2000);
        },
        onError: () => {
            name.value.isError = (props.errors.name == '') ? false: true;
            loading.value = false;
        },
      });
    }

    return { validateNameInput, handleSubmit, form, loading, success, name };
  },
  computed: {
    breadcrumb() {

      return [
        {
            label: trans('core__be_dashboard_label'),
            url: route('admin.index')
        },
        {
          label: trans('category_module'),
            url: route('category.index'),
        },
        {
            label: trans('core__add_category'),
            color: "text-primary-500"
        }
      ]

    }
  },
  methods: {
    handleCancel() {
      this.$inertia.get(route("category.index"));
    },
  },
});
</script>
