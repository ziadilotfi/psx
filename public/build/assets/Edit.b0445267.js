import{d as R,H as W,i as g,aB as V,ac as c,r as n,ai as X,o as r,c as u,b as t,w as s,a as b,p as d,t as m,h as Y,m as Z,f as y,F as $,q as B,g as f,n as N}from"./app.17cd73cb.js";import{b as F,f as x,P as ee,a as oe,d as te}from"./PsLayout.dfd88468.js";import{P as ae}from"./PsBreadcrumb2.49a3f56a.js";import{u as re}from"./Validators.52e283a4.js";import{P as se}from"./PsInput.1d284888.js";import{P as ne}from"./PsLabel.22ffb702.js";import{P as le}from"./PsButton.e57c4d7d.js";import{P as ie}from"./PsCard.ad8f8108.js";import{P as de}from"./PsIcon.05949a2a.js";import{P as me}from"./PsLoading.6ac4d83e.js";import{P as ue}from"./PsCheckboxValue.e5e75bc0.js";import{a as pe,P as _e}from"./PsActionModal.f014cce2.js";import{P as ce}from"./PsImageUpload.30e55671.js";import{P as be}from"./PsLabelCaption.88f9aeab.js";import{P as fe}from"./PsLabelTitle3.d3f1b34d.js";import{P as ge}from"./PsTextarea.a073ad3a.js";import{_ as ye}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";import"./PsDraggable.e6494ff8.js";const ve=R({name:"Edit",components:{Head:W,PsBreadcrumb2:ae,PsImageUpload:ce,PsInput:se,PsLabel:ne,PsButton:le,PsLabelHeader6:F,PsCard:ie,PsIcon:de,PsLoading:me,PsCheckboxValue:ue,PsActionModal:pe,PsImageIconModal:_e,PsDangerDialog:x,PsLabelCaption:be,PsLabelTitle3:fe,PsTextarea:ge,PsDropdown:ee,PsDropdownSelect:oe},layout:te,props:["errors","blog","cities","coreFieldFilterSettings"],data(){return{location_city:""}},setup(e){const a=g(!1),v=g(!1),D=g(),S=g(),U=g(),P=g(),w=g(),C=g(),{isEmpty:_,minLength:L}=re(),E=(l,p)=>{e.errors[l]=p?L(l,p,3):_(l,p),l=="name"&&(P.value.isError=e.errors.name!="")},h=(l,p)=>{e.errors[l]=p?"":_(l,p),l=="description"&&(C.value.isError=e.errors.description!=""),l=="location_city_id"&&(w.value.isError=e.errors.location_city_id!="")};let I=V({name:e.blog.name,description:e.blog.description,location_city_id:e.cities.find(l=>l.id==e.blog.location_city_id)?e.blog.location_city_id:"",status:e.blog.status==1,cover:"",_method:"put"});function z(l){this.$inertia.post(route("blog.update",l),I,{forceFormData:!0,onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{a.value=!1,P.value.isError=e.errors.name!=""}})}function M(l){D.value.openModal(c("conf_modal_label"),c("core__be_replace_img_label"),c("core__be_remove_img_label"),"image","trash","24","24",()=>{S.value.openModal(c("core__be_upload_photo"),"cloudUpload",p=>{let T=V({image:p,_method:"put"});this.$inertia.post(route("image.replace",l),T)})},()=>{U.value.openModal(c("core__be_remove_label"),c("core__be_are_u_sure_remove_photo"),c("core__be_btn_confirm"),c("core__be_btn_cancel"),()=>{this.$inertia.delete(route("image.destroy",l),{onBefore:()=>{a.value=!0},onSuccess:()=>{a.value=!1,v.value=!0,setTimeout(()=>{v.value=!1},2e3)},onError:()=>{a.value=!1}})},()=>{})})}return{validateNameInput:E,validateEmptyInput:h,description:C,location_city_id:w,handleSubmit:z,ps_action_modal:D,form:I,loading:a,success:v,replaceImageClicked:M,ps_danger_dialog:U,ps_image_icon_modal:S}},computed:{breadcrumb(){return[{label:c("core__be_dashboard_label"),url:route("admin.index")},{label:c("blog_module"),url:route("blog.index")},{label:c("blog__edit_blog_module"),color:"text-primary-500"}]}},methods:{handleCancel(){this.$inertia.get(route("blog.index"))}}}),he={class:"rounded-xl"},ke={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4 rounded-t-xl"},$e={class:"px-4 pt-6 dark:bg-backgroundDark"},Pe={key:0,class:"flex items-end pt-4"},we={width:"400",height:"200",class:"w-96 h-48",alt:"blog cover"},Ce={class:"grid w-full sm:w-1/2 gap-6"},Ee={key:0,class:"text-red-800 font-medium ms-1"},Ie={key:0,class:"text-red-800 font-medium ms-1"},Be={class:"rounded-md shadow-xs w-full bg-background dark:bg-backgroundDark"},De={class:"pt-2 z-30"},Se={key:0},Ue={key:1},Le=["onClick"],ze={key:0,class:"text-red-800 font-medium ms-1"},Me={class:"flex flex-row justify-end mb-2.5"};function Te(e,a,v,D,S,U){const P=n("Head"),w=n("ps-breadcrumb-2"),C=n("ps-label-header-6"),_=n("ps-label"),L=n("ps-label-title-3"),E=n("ps-icon"),h=n("ps-button"),I=n("ps-image-icon-modal"),z=n("ps-action-modal"),M=n("ps-danger-dialog"),l=n("ps-image-upload"),p=n("ps-label-caption"),T=n("ps-input"),K=n("ps-dropdown-select"),j=n("ps-dropdown"),q=n("ps-textarea"),A=n("ps-checkbox-value"),G=n("ps-loading"),J=n("ps-card"),O=n("ps-layout"),Q=X("lazy");return r(),u($,null,[t(P,{title:e.$t("edit_blog")},null,8,["title"]),t(O,null,{default:s(()=>[t(w,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),t(J,{class:"w-full h-auto"},{default:s(()=>{var H;return[b("div",he,[b("div",ke,[t(C,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[d(m(e.$t("blog__be_blog_info")),1)]),_:1})]),b("div",$e,[b("form",{onSubmit:a[7]||(a[7]=Y(o=>e.handleSubmit(e.blog.id),["prevent"]))},[b("div",null,[t(_,{class:"text-base"},{default:s(()=>[d(m(e.$t("blog_photo_label")),1)]),_:1}),t(L,null,{default:s(()=>[d(m(e.$t("core__be_recommended_size_400_200")),1)]),_:1}),e.blog.cover[0]?(r(),u("div",Pe,[Z(b("img",we,null,512),[[Q,{src:e.$page.props.uploadUrl+"/"+((H=e.blog.cover[0])==null?void 0:H.img_path),loading:e.$page.props.sysImageUrl+"/loading_gif.gif",error:e.$page.props.sysImageUrl+"/default_photo.png"}]]),t(h,{type:"button",onClick:a[0]||(a[0]=o=>e.replaceImageClicked(e.blog.cover[0].id)),rounded:"rounded-full",shadow:"drop-shadow-2xl",class:"-ms-10 mb-2",colors:"bg-white text-primary-500 dark:bg-secondaryDark-black",border:"border border-1 dark:border-secondary-700 border-secondary-300",padding:"p-1.5",hover:"",focus:""},{default:s(()=>[t(E,{name:"pencil-btn"})]),_:1}),t(I,{ref:"ps_image_icon_modal"},null,512),t(z,{ref:"ps_action_modal"},null,512),t(M,{ref:"ps_danger_dialog"},null,512)])):(r(),y(l,{key:1,uploadType:"image",imageFile:e.form.cover,"onUpdate:imageFile":a[1]||(a[1]=o=>e.form.cover=o)},null,8,["imageFile"])),t(p,{textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(m(e.errors.cover),1)]),_:1})]),b("div",Ce,[(r(!0),u($,null,B(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="name"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),u("div",{key:k},[t(_,{class:"text-base"},{default:s(()=>[d(m(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(r(),u("span",Ee,"*")):f("",!0)]),_:2},1024),t(T,{ref_for:!0,ref:"name",type:"text",value:e.form.name,"onUpdate:value":a[2]||(a[2]=i=>e.form.name=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("name",e.form.name):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),y(p,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(m(e.errors.name),1)]),_:1})):f("",!0)]))),128)),(r(!0),u($,null,B(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="location_city_id"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),u("div",{key:k},[t(_,{class:"text-base"},{default:s(()=>[d(m(e.$t(o.label_name)),1),(o.mandatory=1)?(r(),u("span",Ie,"*")):f("",!0)]),_:2},1024),t(j,{align:"left",class:"lg:mt-2 mt-1 w-full"},{select:s(()=>[t(K,{ref_for:!0,ref:"city",placeholder:e.$t(o.placeholder),showCenter:!0,selectedValue:e.form.location_city_id==""?"":e.cities.filter(i=>i.id==e.form.location_city_id)[0].name,onChange:i=>o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id),onBlur:i=>o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id)},null,8,["placeholder","selectedValue","onChange","onBlur"])]),list:s(()=>[b("div",Be,[b("div",De,[e.cities.length==null?(r(),u("div",Se,[t(_,{class:"p-2 flex",onClick:a[3]||(a[3]=i=>e.route("city.index"))},{default:s(()=>[d(m(e.$t("core__be_add_new_city")),1)]),_:1})])):(r(),u("div",Ue,[(r(!0),u($,null,B(e.cities,i=>(r(),u("div",{key:i.id,class:"w-96 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-secondary-700 cursor-pointer items-center",onClick:He=>[e.form.location_city_id=i.id,o.mandatory=e.validateEmptyInput("location_city_id",e.form.location_city_id)]},[t(_,{class:N(["ms-2",i.id==e.form.location_city_id?" font-bold":""])},{default:s(()=>[d(m(i.name),1)]),_:2},1032,["class"])],8,Le))),128))]))])])]),_:2},1024),o.mandatory==1?(r(),y(p,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(m(e.errors.location_city_id),1)]),_:1})):f("",!0)]))),128)),(r(!0),u($,null,B(e.coreFieldFilterSettings.filter(o=>o.original_field_name==="description"&&o.enable===1&&o.is_delete===0),(o,k)=>(r(),u("div",{class:"py-3",key:k},[t(_,{class:"text-base"},{default:s(()=>[d(m(e.$t(o.label_name))+" ",1),(o.mandatory=1)?(r(),u("span",ze,"*")):f("",!0)]),_:2},1024),t(q,{rows:"3",ref_for:!0,ref:"description",value:e.form.description,"onUpdate:value":a[4]||(a[4]=i=>e.form.description=i),placeholder:e.$t(o.placeholder),onKeyup:i=>o.mandatory==1?e.validateEmptyInput("description",e.form.description):"",onBlur:i=>o.mandatory==1?e.validateEmptyInput("description",e.form.description):""},null,8,["value","placeholder","onKeyup","onBlur"]),o.mandatory==1?(r(),y(p,{key:0,textColor:"text-red-500 ",class:"mt-2 block"},{default:s(()=>[d(m(e.errors.description),1)]),_:1})):f("",!0)]))),128)),b("div",null,[t(_,{class:"text-base"},{default:s(()=>[d(m(e.$t("blog__blog_status")),1)]),_:1}),t(A,{value:e.form.status,"onUpdate:value":a[5]||(a[5]=o=>e.form.status=o),class:"font-normal",title:"Publish"},null,8,["value"])]),b("div",Me,[t(h,{onClick:a[6]||(a[6]=o=>e.handleCancel()),textSize:"text-base",type:"reset",class:"me-4",colors:"text-primary-500",hover:""},{default:s(()=>[d(m(e.$t("core__be_btn_cancel")),1)]),_:1}),t(h,{class:"transition-all duration-300 min-w-3xs",padding:"px-7 py-2",rounded:"rounded",hover:"",focus:""},{default:s(()=>[e.loading?(r(),y(G,{key:0,theme:"border-2 border-t-2 border-text-8 border-t-primary-500",loadingSize:"h-5 w-5"})):f("",!0),e.success?(r(),y(E,{key:1,name:"check",w:"20",h:"20",class:"me-1.5 transition-all duration-300"})):f("",!0),e.success?(r(),y(_,{key:2,class:"transition-all duration-300",textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[d(m(e.$t("core__be_btn_saved")),1)]),_:1})):f("",!0),!e.loading&&!e.success?(r(),y(_,{key:3,textColor:"text-white dark:text-secondaryDark-black"},{default:s(()=>[d(m(e.$t("core__be_btn_save")),1)]),_:1})):f("",!0)]),_:1})])])],32)])])]}),_:1})]),_:1})],64)}var no=ye(ve,[["render",Te]]);export{no as default};
