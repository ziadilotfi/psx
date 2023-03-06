import{d as T,H as j,L as A,i as m,aB as R,j as q,ac as _,r as n,ai as G,o as v,c as $,b as a,w as l,a as d,p as u,t as i,h as J,m as O,f as K,g as E,F as Q}from"./app.17cd73cb.js";import{f as V,d as W}from"./PsLayout.dfd88468.js";import{u as X}from"./Validators.52e283a4.js";import Y from"./CheckBox.0cd71903.js";import Z from"./RoleCheckbox.c3e6120b.js";import{P as N}from"./PsInput.1d284888.js";import{P as x}from"./PsLabel.22ffb702.js";import{P as ee}from"./PsButton.e57c4d7d.js";import{P as oe}from"./PsTextarea.a073ad3a.js";import{P as se}from"./PsLabelHeader4.58b3b4f9.js";import{P as ae}from"./PsIcon.05949a2a.js";import{P as re}from"./PsLoading.6ac4d83e.js";import{P as te}from"./PsLabelCaption.88f9aeab.js";import{P as le}from"./PsBreadcrumb2.49a3f56a.js";import{a as ne,P as ie}from"./PsActionModal.f014cce2.js";import{_ as de}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsDraggable.e6494ff8.js";const ue=T({name:"Edit",components:{Head:j,Link:A,CheckBox:Y,RoleCheckbox:Z,PsInput:N,PsLabel:x,PsButton:ee,PsTextarea:oe,PsLabelHeader4:se,PsIcon:ae,PsLabelCaption:te,PsLoading:re,PsBreadcrumb2:le,PsActionModal:ne,PsImageIconModal:ie,PsDangerDialog:V},layout:W,props:["errors","user","custom_field_headers"],setup(e){const o=m(!1),g=m(!1),C=m(!1),I=m(!1),B=m(!1),k=m(!1);let c=R({name:e.user.name,email:e.user.email,user_address:e.user.user_address,user_about_me:e.user.user_about_me,user_cover_photo:"",is_show_email:e.user.is_show_email==1,is_show_phone:e.user.is_show_phone==1,custom_fields:[],permissions:"",_method:"put"});const P=m(),f=m(),h=m(),{isEmpty:b,isNum:S,isEmail:M}=X(),D=(s,t,p="")=>{e.errors[s]=t?"":b(s,t,p),s=="name"&&(C.value.isError=!0),s=="password"&&(B.value.isError=!0),s=="conf_password"&&(k.value.isError=!0)},y=(s,t,p="",F="")=>{e.errors[s]=t?M(s,t,F):b(s,t,p),s=="email"&&(I.value.isError=!0)},w=(s,t,p="",F="")=>{e.errors[s]=t?S(s,t,F):b(s,t,p)},U=s=>{let t=s.keyCode?s.keyCode:s.which;(t<48||t>57)&&s.preventDefault()};function L(s){this.$inertia.post(route("registered_user.update",s),c,{forceFormData:!0,onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{o.value=!1}})}function H({data:s,id:t}){c.custom_fields[t]=s.toString()}function z({data:s}){c.permissions=s.toString()}q(()=>{e.user_custom_fields.map((s,t)=>{let p=s.data;c.custom_fields[s.custom_field_header_id]=p==="1"?!0:p==="0"?!1:p})});function r(s){P.value.openModal(_("conf_modal_label"),_("core__be_replace_img_label"),_("core__be_remove_img_label"),"image","trash","24","24",()=>{f.value.openModal()},()=>{h.value.openModal(_("core__be_remove_label"),_("core__be_are_u_sure_remove_photo"),_("core__be_btn_confirm"),_("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",s),{onBefore:()=>{o.value=!0},onSuccess:()=>{o.value=!1,g.value=!0,setTimeout(()=>{g.value=!1},2e3)},onError:()=>{o.value=!1}})},()=>{})})}return{validateEmptyInput:D,validateEmailInput:y,validateNumberInput:w,onlyNumber:U,form:c,handleSubmit:L,handleMultiSelect:H,handleUserMultiSelect:z,loading:o,success:g,replaceImageClicked:r,ps_danger_dialog:h,ps_image_icon_modal:f,ps_action_modal:P,input_name:C,input_email:I,input_password:B,input_confirm_password:k}},computed:{breadcrumb(){return[{label:_("core__be_dashboard_label"),url:route("admin.index")},{label:_("profile_label"),url:route("registered_user.index")},{label:"Edit Profile",color:"text-primary-500"}]}}}),pe={class:"rounded-xl"},me={class:"bg-primary-50 text-secondary-800 py-2.5 ps-4"},_e={class:"px-4 pt-6 dark:bg-backgroundDark"},fe={class:"grid w-full sm:w-1/2 gap-6"},ce={key:0,class:"flex items-end pt-4"},be={class:"flex flex-row justify-end mb-2.5"},ve={key:2,class:"transition-all duration-300"},ge={key:3,class:""};function ye(e,o,g,C,I,B){const k=n("Head"),c=n("ps-breadcrumb-2"),P=n("ps-label-header-6"),f=n("ps-label"),h=n("ps-icon"),b=n("ps-button"),S=n("ps-image-icon-modal"),M=n("ps-action-modal"),D=n("ps-danger-dialog"),y=n("ps-input"),w=n("ps-label-caption"),U=n("ps-loading"),L=n("ps-card"),H=n("ps-layout"),z=G("lazy");return v(),$(Q,null,[a(k,{title:e.$t("edit_notification")},null,8,["title"]),a(H,null,{default:l(()=>[a(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),a(L,{class:"w-full h-auto"},{default:l(()=>[d("div",pe,[d("div",me,[a(P,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:l(()=>[u(i(e.$t("core__be_user_info")),1)]),_:1})]),d("div",_e,[d("form",{onSubmit:o[16]||(o[16]=J(r=>e.handleSubmit(e.user.id),["prevent"]))},[d("div",fe,[d("div",null,[a(f,{class:"text-base"},{default:l(()=>[u(i(e.$t("profile_photo")),1)]),_:1}),e.user.user_cover_photo?(v(),$("div",ce,[O(d("img",{width:"200",height:"200",class:"",alt:"Profile photo",onError:o[0]||(o[0]=r=>"/images/assets/default_profile.png")},null,544),[[z,{src:e.$page.props.uploadUrl+"/"+e.user.user_cover_photo,loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_profile.png"}]]),a(b,{type:"button",onClick:o[1]||(o[1]=r=>e.replaceImageClicked(e.user.user_cover_photo)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500",padding:"p-1.5",hover:"",focus:""},{default:l(()=>[a(h,{name:"editPencil",w:"19",h:"19"})]),_:1}),a(S,{ref:"ps_image_icon_modal"},null,512),a(M,{ref:"ps_action_modal"},null,512),a(D,{ref:"ps_danger_dialog"},null,512)])):(v(),$("input",{key:1,type:"file",accept:"image/*",onInput:o[2]||(o[2]=r=>e.form.user_cover_photo=r.target.files[0])},null,32))]),d("div",null,[a(f,{class:"text-base"},{default:l(()=>[u(i(e.$t("user_name_label")),1)]),_:1}),a(y,{type:"text",value:e.form.name,"onUpdate:value":o[3]||(o[3]=r=>e.form.name=r),placeholder:e.$t("user_name_label"),onKeyup:o[4]||(o[4]=r=>e.validateEmptyInput("name",e.form.name)),onBlur:o[5]||(o[5]=r=>e.validateEmptyInput("name",e.form.name))},null,8,["value","placeholder"]),a(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(i(e.errors.name),1)]),_:1})]),d("div",null,[a(f,{class:"text-base"},{default:l(()=>[u(i(e.$t("email_label")),1)]),_:1}),a(y,{type:"text",value:e.form.email,"onUpdate:value":o[6]||(o[6]=r=>e.form.email=r),placeholder:e.$t("email_label"),onKeyup:o[7]||(o[7]=r=>e.validateEmailInput("email",e.form.email)),onBlur:o[8]||(o[8]=r=>e.validateEmailInput("email",e.form.email))},null,8,["value","placeholder"]),a(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(i(e.errors.email),1)]),_:1})]),d("div",null,[a(f,{class:"text-base"},{default:l(()=>[u(i(e.$t("password_label")),1)]),_:1}),a(y,{ref:"input_password",type:"password",value:e.form.password,"onUpdate:value":o[9]||(o[9]=r=>e.form.password=r),placeholder:e.$t("password_label"),onKeyup:o[10]||(o[10]=r=>e.validateEmptyInput("password",e.form.password)),onBlur:o[11]||(o[11]=r=>e.validateEmptyInput("password",e.form.password))},null,8,["value","placeholder"]),a(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(i(e.errors.password),1)]),_:1})]),d("div",null,[a(f,{class:"text-base"},{default:l(()=>[u(i(e.$t("conf_password_label")),1)]),_:1}),a(y,{ref:"input_confirm_password",type:"password",value:e.form.conf_password,"onUpdate:value":o[12]||(o[12]=r=>e.form.conf_password=r),placeholder:e.$t("conf_password_label"),onKeyup:o[13]||(o[13]=r=>e.validateEmptyInput("conf_password",e.form.conf_password)),onBlur:o[14]||(o[14]=r=>e.validateEmptyInput("conf_password",e.form.conf_password))},null,8,["value","placeholder"]),a(w,{textColor:"text-red-500 ",class:"mt-2 block"},{default:l(()=>[u(i(e.errors.conf_password),1)]),_:1})]),d("div",be,[a(b,{onClick:o[15]||(o[15]=r=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",focus:"",hover:""},{default:l(()=>[u(i(e.$t("core__be_btn_cancel")),1)]),_:1}),a(b,{class:"transition-all duration-300 min-w-3xs",padding:"px-5 py-2",rounded:"rounded",hover:"",focus:""},{default:l(()=>[e.loading?(v(),K(U,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):E("",!0),e.success?(v(),K(h,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):E("",!0),e.success?(v(),$("span",ve,i(e.$t("core__be_btn_saved")),1)):E("",!0),!e.loading&&!e.success?(v(),$("span",ge,i(e.$t("core__be_btn_save")),1)):E("",!0)]),_:1})])])],32)])])]),_:1})]),_:1})],64)}var Re=de(ue,[["render",ye]]);export{Re as default};