<template>
    <ps-label class="lg:text-4xl sm:text-4xl text-4xl" :textColor="textColor"  >
        <slot></slot>
    </ps-label>
</template>

<script>
import { defineComponent } from 'vue';
import PsLabel from './PsLabel.vue';

export default defineComponent({
    name : 'PsLabelHeader2',
    components: { PsLabel },
    props: {
        textColor : {
            type: String,
            default: 'text-secondary-800 dark:text-secondaryDark-white',
        }
    }
});
</script>
