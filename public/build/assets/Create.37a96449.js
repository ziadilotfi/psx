import{d as S,H as L,aB as D,i as P,ac as g,r as o,o as c,c as E,b as t,w as r,a as i,p as n,t as l,h as H,f as _,g as b,F}from"./app.17cd73cb.js";import{b as V,d as I}from"./PsLayout.dfd88468.js";import{u as N}from"./Validators.52e283a4.js";import{P as T}from"./PsInput.1d284888.js";import{P as z}from"./PsLabel.22ffb702.js";import{P as j}from"./PsButton.e57c4d7d.js";import{P as M}from"./PsTextarea.a073ad3a.js";import{P as U}from"./PsLabelHeader4.58b3b4f9.js";import{P as q}from"./PsLabelCaption.88f9aeab.js";import{E as A}from"./Editor.80311d41.js";import{P as G}from"./PsBreadcrumb2.49a3f56a.js";import{P as J}from"./PsIcon.05949a2a.js";import{P as K}from"./PsLoading.6ac4d83e.js";import{P as O}from"./PsLink1.148ec573.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";const R=S({name:"Create",components:{Head:L,Editor:A,PsIcon:J,PsLoading:K,PsInput:T,PsLabel:z,PsButton:j,PsTextarea:M,PsLabelHeader4:U,PsLabelCaption:q,PsBreadcrumb2:G,PsLabelHeader6:V,PsLink1:O},layout:I,props:["errors"],setup(e){let a=D({content:"",url:""});const p=P(!1),d=P(!1),{isEmpty:v}=N(),k="https://www.products.panacea-soft.co/psx-mpc-demo/app_content/privacy",f=(m,s)=>{e.errors[m]=s?"":v(m,s)};function y(){this.$inertia.post(route("privacy_policy.store"),a,{forceFormData:!0,onBefore:()=>{p.value=!0},onSuccess:()=>{p.value=!1,d.value=!0,setTimeout(()=>{d.value=!1},2e3)},onError:()=>{p.value=!1}})}return{validateEmptyInput:f,form:a,handleSubmit:y,loading:p,success:d,privacyurl:k}},computed:{breadcrumb(){return[{label:g("core__be_dashboard_label"),url:route("admin.index")},{label:g("privacy_policy_module"),color:"text-primary-500"}]}}}),W={class:"w-full mt-8 rounded-lg bg-white dark:bg-secondaryDark-black shadow-sm"},X={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},Y={class:"px-4 py-3"},Z={class:"px-4 py-3"},ee=i("br",null,null,-1),oe={class:"flex flex-row px-4 py-3 justify-end mb-2.5 mt-4"};function te(e,a,p,d,v,k){const f=o("Head"),y=o("ps-breadcrumb-2"),m=o("ps-label-header-6"),s=o("ps-label"),w=o("editor"),x=o("ps-link-1"),h=o("ps-button"),C=o("ps-loading"),$=o("ps-icon"),B=o("ps-layout");return c(),E(F,null,[t(f,{title:e.$t("privacy_policy_module")},null,8,["title"]),t(B,null,{default:r(()=>[t(y,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),i("div",W,[i("div",X,[t(m,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:r(()=>[n(l(e.$t("core__be_privacy_policy")),1)]),_:1})]),i("form",{onSubmit:a[2]||(a[2]=H((...u)=>e.handleSubmit&&e.handleSubmit(...u),["prevent"]))},[i("div",Y,[t(s,{class:"text-base"},{default:r(()=>[n(l(e.$t("core__be_content")),1)]),_:1}),t(w,{class:"dark:bg-secondaryDark:black",value:e.form.content,"onUpdate:value":a[0]||(a[0]=u=>e.form.content=u)},null,8,["value"])]),i("div",Z,[t(s,{class:"text-base mb-1"},{default:r(()=>[n(l(e.$t("core__be_privacy_policy_url")),1)]),_:1}),t(x,{target:"_blank",url:e.privacyurl,textColor:"text-blue-500"},{default:r(()=>[n(l(e.privacyurl),1)]),_:1},8,["url"]),ee]),i("div",oe,[t(h,{onClick:a[1]||(a[1]=u=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:r(()=>[n(l(e.$t("core__be_btn_cancel")),1)]),_:1}),t(h,{class:"transition-all duration-300 min-w-3xs",padding:"px-6 py-2",rounded:"rounded",hover:"",focus:""},{default:r(()=>[e.loading?(c(),_(C,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(c(),_($,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(c(),_(s,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[n(l(e.$t("core__be_btn_saved")),1)]),_:1})):b("",!0),!e.loading&&!e.success?(c(),_(s,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:r(()=>[n(l(e.$t("core__be_btn_save")),1)]),_:1})):b("",!0)]),_:1})])],32)])]),_:1})],64)}var Pe=Q(R,[["render",te]]);export{Pe as default};