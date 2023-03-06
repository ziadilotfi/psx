import{d as H,H as U,L as T,i as h,aB as V,ac as K,r as p,o as a,c as d,b as r,w as n,a as f,p as s,t as i,h as z,F as w,q as S,g as _,f as b}from"./app.17cd73cb.js";import{e as G,d as M}from"./PsLayout.dfd88468.js";import{u as N}from"./Validators.52e283a4.js";import{P as j}from"./PsInput.1d284888.js";import{P as q}from"./PsLabel.22ffb702.js";import{P as x}from"./PsButton.e57c4d7d.js";import{P as A}from"./PsTextarea.a073ad3a.js";import{P as J}from"./PsLabelHeader4.58b3b4f9.js";import{P as O}from"./PsIcon.05949a2a.js";import{P as Q}from"./PsLoading.6ac4d83e.js";import{P as R}from"./PsBreadcrumb2.49a3f56a.js";import{P as W}from"./PsCheckboxValue.e5e75bc0.js";import{P as X}from"./PsLabelCaption.88f9aeab.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";const Z=H({name:"Create",components:{PsBreadcrumb2:R,Head:U,PsInput:j,PsLabel:q,PsButton:x,PsTextarea:A,PsLabelHeader4:J,PsIcon:O,PsLoading:Q,PsTextButton:G,Link:T,PsCheckboxValue:W,PsLabelCaption:X},layout:M,props:["errors","menu_group","coreFieldFilterSettings"],setup(e){const{isEmpty:o,minLength:I}=N(),y=h(!1),$=h(!1),L=h(!1),B=h(!1),C=h(!1);let l=V({group_name:e.menu_group.group_name,group_icon:e.menu_group.group_icon,group_lang_key:e.menu_group.group_lang_key,is_show_on_menu:e.menu_group.is_show_on_menu,ordering:e.menu_group.ordering,is_invisible_group_name:e.menu_group.is_invisible_group_name,_method:"put"});const v=(u,g)=>{e.errors[u]=g?I(u,g,3):o(u,g)},c=(u,g,E="")=>{e.errors[u]=g?"":o(u,g,E)};function P(u){this.$inertia.post(route("menu_group.update",u),l,{forceFormData:!0,onBefore:()=>{y.value=!0},onSuccess:()=>{y.value=!1,$.value=!0,setTimeout(()=>{$.value=!1},2e3)},onError:()=>{y.value=!1}})}return{validateGroupNameInput:v,validateEmptyInput:c,route,form:l,handleSubmit:P,loading:y,success:$,input_name:L,input_icon:B,input_lang:C}},computed:{breadcrumb(){return[{label:K("core__be_dashboard_label"),url:route("admin.index")},{label:K("menu_group_module"),url:route("menu_group.index")},{label:"Edit Menu Group",color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu_group.index"))}}}),F={class:""},ee={class:"max-w-lg"},te={class:"mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},oe={key:0,class:"text-red-800 font-medium ms-1"},ae={key:0,class:"text-red-800 font-medium ms-1"},re={key:0,class:"text-red-800 font-medium ms-1"},ne={class:"mb-6"},se=s("Status"),le={class:"mb-6"},ue={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function me(e,o,I,y,$,L){const B=p("Head"),C=p("ps-breadcrumb-2"),l=p("ps-label"),v=p("ps-input"),c=p("ps-label-caption"),P=p("ps-checkbox-value"),u=p("ps-button"),g=p("ps-loading"),E=p("ps-icon"),D=p("ps-layout");return a(),d(w,null,[r(B,{title:e.$t("edit_menu_group")},null,8,["title"]),r(D,null,{default:n(()=>[f("div",F,[r(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),f("div",ee,[f("div",te,[r(l,{class:"text-lg px-4 py-2.5 bg-primary-50 dark:bg-primary-900"},{default:n(()=>[s(i(e.$t("edit_menu_group")),1)]),_:1}),f("form",{onSubmit:o[6]||(o[6]=z(t=>e.handleSubmit(this.menu_group.id),["prevent"]))},[(a(!0),d(w,null,S(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="group_name"&&t.enable===1&&t.is_delete===0),(t,k)=>(a(),d("div",{class:"mb-6 mt-4",key:k},[r(l,{class:"text-base mb-2"},{default:n(()=>[s(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),d("span",oe,"*")):_("",!0)]),_:2},1024),r(v,{ref_for:!0,ref:"group_name",type:"text",value:e.form.group_name,"onUpdate:value":o[0]||(o[0]=m=>e.form.group_name=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("group_name",e.form.group_name):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("group_name",e.form.group_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(i(e.errors.group_name),1)]),_:1})):_("",!0)]))),128)),(a(!0),d(w,null,S(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="group_lang_key"&&t.enable===1&&t.is_delete===0),(t,k)=>(a(),d("div",{class:"mb-6",key:k},[r(l,{class:"text-base mb-2"},{default:n(()=>[s(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),d("span",ae,"*")):_("",!0)]),_:2},1024),r(v,{ref_for:!0,ref:"group_lang_key",type:"text",value:e.form.group_lang_key,"onUpdate:value":o[1]||(o[1]=m=>e.form.group_lang_key=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("group_lang_key",e.form.group_lang_key):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("group_lang_key",e.form.group_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(i(e.errors.group_lang_key),1)]),_:1})):_("",!0)]))),128)),(a(!0),d(w,null,S(e.coreFieldFilterSettings.filter(t=>t.original_field_name==="ordering"&&t.enable===1&&t.is_delete===0),(t,k)=>(a(),d("div",{class:"mb-6",key:k},[r(l,{class:"text-base mb-2"},{default:n(()=>[s(i(e.$t(t.label_name))+" ",1),(t.mandatory=1)?(a(),d("span",re,"*")):_("",!0)]),_:2},1024),r(v,{ref_for:!0,ref:"ordering",type:"text",value:e.form.ordering,"onUpdate:value":o[2]||(o[2]=m=>e.form.ordering=m),placeholder:e.$t(t.placeholder),onKeyup:m=>t.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):"",onBlur:m=>t.mandatory==1?e.validateEmptyInput("ordering",e.form.ordering):""},null,8,["value","placeholder","onKeyup","onBlur"]),t.mandatory==1?(a(),b(c,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[s(i(e.errors.ordering),1)]),_:1})):_("",!0)]))),128)),f("div",ne,[r(l,{class:"text-base mb-2"},{default:n(()=>[se]),_:1}),r(P,{value:e.form.is_show_on_menu,"onUpdate:value":o[3]||(o[3]=t=>e.form.is_show_on_menu=t),class:"font-normal",title:"Publish"},null,8,["value"])]),f("div",le,[r(l,{class:"text-base mb-2"},{default:n(()=>[s(i(e.$t("hide_menu_group_name")),1)]),_:1}),r(P,{value:e.form.is_invisible_group_name,"onUpdate:value":o[4]||(o[4]=t=>e.form.is_invisible_group_name=t),class:"font-normal",title:e.$t("hide")},null,8,["value","title"])]),f("div",ue,[r(u,{onClick:o[5]||(o[5]=t=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[s(i(e.$t("core__be_btn_cancel")),1)]),_:1}),r(u,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(a(),b(g,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):_("",!0),e.success?(a(),b(E,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):_("",!0),e.success?(a(),b(l,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[s(i(e.$t("core__be_btn_saved")),1)]),_:1})):_("",!0),!e.loading&&!e.success?(a(),b(l,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:n(()=>[s(i(e.$t("core__be_btn_save")),1)]),_:1})):_("",!0)]),_:1})])],32)])])])]),_:1})],64)}var Ee=Y(Z,[["render",me]]);export{Ee as default};
