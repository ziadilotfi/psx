<template>
<ckeditor :editor="editor" v-model="editorData"></ckeditor>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    data() {
            return {
                editor: ClassicEditor,
                editorData: ''
            };
        }
}
</script>

