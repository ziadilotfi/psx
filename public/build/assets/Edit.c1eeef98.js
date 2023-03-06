import{d as T,H as O,i as L,aB as j,ac as E,r as _,o as r,c as m,b as t,w as n,a as i,p as d,t as a,h as q,F as y,q as v,g as b,f as g,n as V}from"./app.17cd73cb.js";import{P as A,a as G,d as J}from"./PsLayout.dfd88468.js";import{u as Q}from"./Validators.52e283a4.js";import{P as R}from"./PsInput.1d284888.js";import{P as W}from"./PsLabel.22ffb702.js";import{P as X}from"./PsButton.e57c4d7d.js";import{P as Y}from"./PsTextarea.a073ad3a.js";import{P as Z}from"./PsLabelHeader4.58b3b4f9.js";import{P as F}from"./PsLabelCaption.88f9aeab.js";import{P as x}from"./PsIcon.05949a2a.js";import{P as ee}from"./PsLoading.6ac4d83e.js";import{P as oe}from"./PsBreadcrumb2.49a3f56a.js";import{P as te}from"./PsCheckboxValue.e5e75bc0.js";import{_ as se}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";const ne=T({name:"Edit",components:{Head:O,PsInput:R,PsLabel:W,PsButton:X,PsTextarea:Y,PsLabelHeader4:Z,PsLabelCaption:F,PsIcon:x,PsLoading:ee,PsBreadcrumb2:oe,PsDropdown:A,PsDropdownSelect:G,PsCheckboxValue:te},layout:J,props:["errors","menu","sub_menu_groups","coreFieldFilterSettings","icons","modules","forSelectedModules"],setup(e){const s=L(!1),k=L(!1);let h=j({module_name:e.menu.module_name,module_desc:e.menu.module_desc,module_lang_key:e.menu.module_lang_key,ordering:e.menu.ordering,module_id:e.modules.find(l=>l.id==e.menu.module_id)?e.menu.module_id:"",core_sub_menu_group_id:e.sub_menu_groups.find(l=>l.id==e.menu.core_sub_menu_group_id)?e.menu.core_sub_menu_group_id:"",is_show_on_menu:e.menu.is_show_on_menu==1,_method:"put"});const{isEmpty:$,minLength:B}=Q(),w=(l,u)=>{e.errors[l]=u?B(l,u,3):$(l,u)},C=(l,u)=>{e.errors[l]=u?"":$(l,u)},P=l=>{let u=l.keyCode?l.keyCode:l.which;(u<48||u>57)&&l.preventDefault()};function p(l){this.$inertia.post(route("menu.update",l),h,{forceFormData:!0,onBefore:()=>{s.value=!0},onSuccess:()=>{s.value=!1,k.value=!0,setTimeout(()=>{k.value=!1},2e3)},onError:()=>{s.value=!1}})}return{validateModuleNameInput:w,validateEmptyInput:C,onlyNumber:P,form:h,handleSubmit:p,loading:s,success:k}},computed:{breadcrumb(){return[{label:E("core__be_dashboard_label"),url:route("admin.index")},{label:E("module_module"),url:route("menu.index")},{label:E("core_edit_menu"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("menu.index"))}}}),le={class:"rounded-lg"},re={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-lg"},ae={class:"px-4 pt-6 dark:bg-backgroundDark"},de={class:"grid w-1/2 gap-6"},ue={key:0,class:"text-red-800 font-medium ms-1"},me=i("span",{class:"text-red-800 font-medium ms-1"},"*",-1),ie={class:"rounded-md shadow-xs w-56"},_e={class:"pt-2 z-30"},pe=["onClick"],fe=i("span",{class:"text-red-800 font-medium ms-1"},"*",-1),be={class:"rounded-md shadow-xs w-56"},ce={class:"pt-2 z-30"},ye=["onClick"],ve={key:0,class:"text-red-800 font-medium ms-1"},ge={key:0,class:"text-red-800 font-medium ms-1"},ke=d("Ordering"),he=d("Status"),$e={class:"mb-2.5 flex flex-row justify-end"},we={key:2,class:"transition-all duration-300"},Ce={key:3,class:""};function Pe(e,s,k,h,$,B){const w=_("Head"),C=_("ps-breadcrumb-2"),P=_("ps-label-header-6"),p=_("ps-label"),l=_("ps-input"),u=_("ps-label-caption"),I=_("ps-dropdown-select"),S=_("ps-dropdown"),D=_("ps-textarea"),z=_("ps-checkbox-value"),K=_("ps-button"),H=_("ps-loading"),U=_("ps-icon"),M=_("ps-card"),N=_("ps-layout");return r(),m(y,null,[t(w,{title:e.$t("core_edit_menu")},null,8,["title"]),t(N,null,{default:n(()=>[t(C,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(M,{class:"w-full h-auto"},{default:n(()=>[i("div",le,[i("div",re,[t(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:n(()=>[d(a(e.$t("core_menu_onfo")),1)]),_:1})]),i("div",ae,[i("form",{onSubmit:s[10]||(s[10]=q(o=>e.handleSubmit(e.menu.id),["prevent"]))},[i("div",de,[(r(!0),m(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_name"&&o.enable===1&&o.is_delete===0),(o,c)=>(r(),m("div",{key:c},[t(p,{class:"text-base"},{default:n(()=>[d(a(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(r(),m("span",ue,"*")):b("",!0)]),_:2},1024),t(l,{ref_for:!0,ref:"module_name",type:"text",value:e.form.module_name,"onUpdate:value":s[0]||(s[0]=f=>e.form.module_name=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_name",e.form.module_name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),g(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.module_name),1)]),_:1})):b("",!0)]))),128)),i("div",null,[t(p,{class:"text-base"},{default:n(()=>[d(a(e.$t("core__be_select_module")),1),me]),_:1}),t(S,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:n(()=>[t(I,{placeholder:e.$t("core__be_select_module"),selectedValue:e.form.module_id==""||e.form.module_id===null?"":e.forSelectedModules.filter(o=>o.id==e.form.module_id)[0].title,onChange:s[1]||(s[1]=o=>e.validateEmptyInput("module_id",e.form.module_id)),onBlur:s[2]||(s[2]=o=>e.validateEmptyInput("module_id",e.form.module_id))},null,8,["placeholder","selectedValue"])]),list:n(()=>[i("div",ie,[i("div",_e,[(r(!0),m(y,null,v(e.modules,o=>(r(),m("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.module_id=o.id,e.validateEmptyInput("module_id",e.form.module_id)]},[t(p,{class:V(["ms-2",o.id==e.form.module_id?" font-bold":""])},{default:n(()=>[d(a(o.title),1)]),_:2},1032,["class"])],8,pe))),128))])])]),_:1}),t(u,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.module_id),1)]),_:1})]),i("div",null,[t(p,{class:"text-base"},{default:n(()=>[d(a(e.$t("core__be_select_sub_menu")),1),fe]),_:1}),t(S,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:n(()=>[t(I,{placeholder:e.$t("core__be_select_sub_menu"),selectedValue:e.form.core_sub_menu_group_id==""?"":e.sub_menu_groups.filter(o=>o.id==e.form.core_sub_menu_group_id)[0].sub_menu_desc,onChange:s[3]||(s[3]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)),onBlur:s[4]||(s[4]=o=>e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id))},null,8,["placeholder","selectedValue"])]),list:n(()=>[i("div",be,[i("div",ce,[(r(!0),m(y,null,v(e.sub_menu_groups,o=>(r(),m("div",{key:o.id,class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:c=>[e.form.core_sub_menu_group_id=o.id,e.validateEmptyInput("core_sub_menu_group_id",e.form.core_sub_menu_group_id)]},[t(p,{class:V(["ms-2",o.id==e.form.core_sub_menu_group_id?" font-bold":""])},{default:n(()=>[d(a(o.sub_menu_desc),1)]),_:2},1032,["class"])],8,ye))),128))])])]),_:1}),t(u,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.core_sub_menu_group_id),1)]),_:1})]),(r(!0),m(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_desc"&&o.enable===1&&o.is_delete===0),(o,c)=>(r(),m("div",{key:c},[t(p,{class:"text-base"},{default:n(()=>[d(a(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(r(),m("span",ve,"*")):b("",!0)]),_:2},1024),t(D,{rows:"4",value:e.form.module_desc,"onUpdate:value":s[5]||(s[5]=f=>e.form.module_desc=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_desc",e.form.module_desc):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),g(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.module_desc),1)]),_:1})):b("",!0)]))),128)),(r(!0),m(y,null,v(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="module_lang_key"&&o.enable===1&&o.is_delete===0),(o,c)=>(r(),m("div",{key:c},[t(p,{class:"text-base"},{default:n(()=>[d(a(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(r(),m("span",ge,"*")):b("",!0)]),_:2},1024),t(l,{ref_for:!0,ref:"module_lang_key",type:"text",value:e.form.module_lang_key,"onUpdate:value":s[6]||(s[6]=f=>e.form.module_lang_key=f),placeholder:e.$t(o.placeholder),onKeyup:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):"",onBlur:f=>o.mandatory==1?e.validateEmptyInput("module_lang_key",e.form.module_lang_key):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),g(u,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.module_lang_key),1)]),_:1})):b("",!0)]))),128)),i("div",null,[t(p,{class:"text-base mb-1"},{default:n(()=>[ke]),_:1}),t(l,{type:"text",value:e.form.ordering,"onUpdate:value":s[7]||(s[7]=o=>e.form.ordering=o),placeholder:"Ordering",onKeypress:e.onlyNumber},null,8,["value","onKeypress"]),t(u,{textColor:"text-red-500 ",class:"mt-2 block"},{default:n(()=>[d(a(e.errors.ordering),1)]),_:1})]),i("div",null,[t(p,{class:"text-base"},{default:n(()=>[he]),_:1}),t(z,{value:e.form.is_show_on_menu,"onUpdate:value":s[8]||(s[8]=o=>e.form.is_show_on_menu=o),class:"font-normal",title:"Publish"},null,8,["value"])]),i("div",$e,[t(K,{onClick:s[9]||(s[9]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:n(()=>[d(a(e.$t("core__be_btn_cancel")),1)]),_:1}),t(K,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:n(()=>[e.loading?(r(),g(H,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):b("",!0),e.success?(r(),g(U,{key:1,name:"check",viewBox:"0 0 18 14",w:"14",h:"10",class:"me-1.5 transition-all duration-300"})):b("",!0),e.success?(r(),m("span",we,a(e.$t("core__be_btn_saved")),1)):b("",!0),!e.loading&&!e.success?(r(),m("span",Ce,a(e.$t("core__be_btn_save")),1)):b("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Ae=se(ne,[["render",Pe]]);export{Ae as default};
