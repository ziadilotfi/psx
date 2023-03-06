<template>
    <!-- <div @click="saveData()" v-if="editorData" class="np-save-btn">{{ $t('core__be_btn_save') }}</div>
    <div @click="clearData()" v-if="editorData" class="np-save-btn">{{ $t('core__be_btn_clear') }}</div> -->
        <div id="app">
            <ckeditor :editor="editor" v-model="editorData" @ready="onReady"  :config="editorConfig" ></ckeditor>

        </div>
        <!-- <div v-if="dataToSave"> -->
      <!-- <h4>Parsed data:</h4>
      {{ dataToSave }} -->
    <!-- </div> -->
</template>

<script>
import { watch,ref } from 'vue';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';





    export default {
        name: 'app',
        props: {
             modelValue : {
                type: String,
                default: ''
            },
            url:'',
        },
        data(props) {
            return{

                editor: DecoupledEditor,
                editorConfig: {
                ckfinder: {
                    
                    uploadUrl: props.url+'?_token='+this.$page.props.csrf,
                     options: {
                        resourceType: 'Images'
                    }
                },
                toolbar: {
                    items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'imageUpload',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo',
                    'alignment',
                    'fontBackgroundColor',
                    'fontColor',
                    'fontFamily',
                    'fontSize',
                    'strikethrough',
                    'underline',
                    ]
                },
                language: 'cs',
                image: {
                    toolbar: [
                    'imageTextAlternative',
                    'imageStyle:inline',
                    'imageStyle:block',
                    'imageStyle:side',
                    'imageStyle:alignLeft',
                    'imageStyle:alignRight',
                    'imageStyle:alignCenter',
                    'imageStyle:alignBlockLeft',
                    'imageStyle:alignBlockRight',
                   
                    ]
                },
                table: {
                    contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells',
                    ]
                },
                    fontFamily: {
                        options: [
                            'default',
                            'indieflowerregular',
                            'Arial, sans-serif',
                            'Verdana, sans-serif',
                            'Trebuchet MS',
                            'Apple Color Emoji',
                            'Segoe UI Emoji',
                            'Segoe UI Symbol',
                        ]
                    },
                licenseKey: ''
                }
            };
        },
        setup(props,{ emit}){
            const editorData = ref(props.modelValue || '');
            
            watch(editorData,()=>{
                    emit('update:modelValue', editorData.value);

            })

            return{
                editorData,
                
            }
        },

        methods: {
            onReady( editor )  {
              

                editor.ui.getEditableElement().parentElement.insertBefore(
                    editor.ui.view.toolbar.element,
                    editor.ui.getEditableElement()
                );
            },
           
        },
    }
</script>

<style> 
h1 {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h4 {
  display: block;
  font-size: 1em;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h5 {
  display: block;
  font-size: .83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
h6 {
  display: block;
  font-size: .67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
</style>
