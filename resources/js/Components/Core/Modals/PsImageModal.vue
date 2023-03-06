
<style scoped>
.vue-neat-modal {
    max-height: 95%;
   
}
</style> 


<template>
    <Modal
        v-model="isOpen"
        :fullscreen="isFullscreen"
        :modal-transition="modalTransition"
        :click-out="isClickOut"
        :disable-motion="isMotionDisabled"
        :max-width="maxWidth"
        :remove-backdrop="isBackdropRemoved"
        class="mx-auto"      
    >            
        <div class=" w-screem" >
            <slot name="body"  />
        </div>                
    </Modal>
</template>

<script>
import { Modal } from "vue-neat-modal";
import 'vue-neat-modal/dist/vue-neat-modal.css'
import { ref} from 'vue';
export default {
    name : 'PsImageModal',
    components : {
        Modal,
    },
    props : {       
        maxWidth : {
            type : String,
            default : "100%"
        },
        isBackdropRemoved : {
            type : Boolean,
            default : false
        },
        isMotionDisabled : {
            type : Boolean,
            default : false
        }, 
        isClickOut : {
            type : Boolean,
            default : true
        }, 
        modalTransition : {
            type : String,
            default : "scale"
        }, 
        isFullscreen : {
            type : Boolean,
            default : false
        }
    },
    setup() {
        const isOpen = ref(false);
        
        function toggle(status) {
            isOpen.value = status;
        }
       
        return {
            isOpen,
            toggle,
        }
    }
}
</script>