<template>
    <ps-label class="lg:text-2xl sm:text-xl text-2xl  font-semibold" :textColor="textColor"  >
        <slot></slot>
    </ps-label>
</template>

<script>
import { defineComponent } from 'vue';
import PsLabel from './PsLabel.vue';

export default defineComponent({
    name : 'PsLabelHeader4',
    components: { PsLabel },
    props: {
        textColor : {
            type: String,
            default: 'text-secondary-800 dark:text-secondaryDark-white',
        }
    }
});
</script>
