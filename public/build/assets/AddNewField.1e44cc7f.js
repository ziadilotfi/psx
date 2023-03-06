import{d as g,H as C,aB as E,r as n,o as u,c as f,b as a,w as r,a as s,h as F,p as l,t as i,m as v,aG as I,F as b,q as k,J as B}from"./app.17cd73cb.js";import{d as N}from"./PsLayout.dfd88468.js";import{u as S}from"./Validators.52e283a4.js";import{P as H}from"./PsInput.1d284888.js";import{P as L}from"./PsLabel.22ffb702.js";import{P as T}from"./PsButton.e57c4d7d.js";import{P as V}from"./PsTextarea.a073ad3a.js";import{P as M}from"./PsLabelHeader4.58b3b4f9.js";import{P as q}from"./PsLabelCaption.88f9aeab.js";import{_ as D}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.05949a2a.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";const U=g({name:"AddNewField",components:{Head:C,PsInput:H,PsLabel:L,PsButton:T,PsTextarea:V,PsLabelHeader4:M,PsLabelCaption:q},layout:N,props:["errors","uiTypes"],data(){return{form:E({name:"",ui_type_id:"",mandatory:"0"})}},setup(e){const{isEmpty:t}=S();return{validateEmptyInput:(d,p,y="")=>{e.errors[d]=p?"":t(d,p,y)}}},methods:{handleSubmit(){this.$inertia.post(route("shop.addNewField.store"),this.form,{forceFormData:!0})}}}),A={class:"py-6"},G={class:"bg-white py-3 px-6"},J=l("Name"),K=l("Type"),j={value:""},z=["value"],O=l("Is Mandatory?"),Q={class:"mt-4"};function R(e,t,h,d,p,y){const P=n("Head"),m=n("ps-label"),c=n("ps-input"),_=n("ps-label-caption"),w=n("ps-button"),$=n("ps-layout");return u(),f(b,null,[a(P,{title:"Create New Field"}),a($,null,{default:r(()=>[s("div",A,[s("div",G,[s("form",{onSubmit:t[7]||(t[7]=F((...o)=>e.handleSubmit&&e.handleSubmit(...o),["prevent"]))},[s("div",null,[a(m,{for:"",class:"mr-2 flex items-center"},{default:r(()=>[J]),_:1}),a(c,{type:"text",class:"w-60 mr-2 rounded",value:e.form.name,"onUpdate:value":t[0]||(t[0]=o=>e.form.name=o),placeholder:"Please enter custom field name",onKeyup:t[1]||(t[1]=o=>e.validateEmptyInput("name",e.form.name)),onBlur:t[2]||(t[2]=o=>e.validateEmptyInput("name",e.form.name))},null,8,["value"]),a(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[l(i(e.errors.name),1)]),_:1})]),s("div",null,[a(m,null,{default:r(()=>[K]),_:1}),v(s("select",{type:"text",class:"w-60 rounded","onUpdate:modelValue":t[3]||(t[3]=o=>e.form.ui_type_id=o),onChange:t[4]||(t[4]=o=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id,"The type field is required.")),onBlur:t[5]||(t[5]=o=>e.validateEmptyInput("ui_type_id",e.form.ui_type_id,"The type field is required."))},[s("option",j,i(e.$t("please_select_label")),1),(u(!0),f(b,null,k(e.uiTypes,o=>(u(),f("option",{value:o.id,key:o.id},i(o.name),9,z))),128))],544),[[I,e.form.ui_type_id]]),a(_,{textColor:"text-red-500 ",class:"mt-2 block"},{default:r(()=>[l(i(e.errors.ui_type_id),1)]),_:1})]),s("div",null,[a(m,{class:"mr-2"},{default:r(()=>[O]),_:1}),v(s("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":t[6]||(t[6]=o=>e.form.mandatory=o)},null,512),[[B,e.form.mandatory]])]),s("div",Q,[a(w,{class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-6 border rounded bg-indigo-500"},{default:r(()=>[l(i(e.$t("core__be_btn_save")),1)]),_:1})])],32)])])]),_:1})],64)}var ie=D(U,[["render",R]]);export{ie as default};
