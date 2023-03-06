import{f as N,d as B}from"./PsLayout.dfd88468.js";import{d as D,H as I,i as s,ac as l,ag as j,r as i,o as m,c as A,b as r,w as n,a as T,f as _,p as P,t as F,g as h,F as R}from"./app.17cd73cb.js";import{P as V}from"./PsInput.1d284888.js";import{P as M}from"./PsLabel.22ffb702.js";import{P as z}from"./PsButton.e57c4d7d.js";import{P as E}from"./PsTextarea.a073ad3a.js";import{P as L}from"./PsLabelHeader4.58b3b4f9.js";import{P as G}from"./PsIcon.05949a2a.js";import{P as U}from"./PsAlert.28e258d7.js";import{N as q}from"./NewPsDataTable.a8752ed3.js";import{b as J}from"./PsModal.bee9bcb9.js";import{P as K}from"./PsBreadcrumb2.49a3f56a.js";import{P as Q}from"./PsTable2.559b3bb1.js";import{P as W}from"./PsBannerIcon.71d1b60f.js";import{_ as X}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsTableSearch.4ca5ffa6.js";import"./PsInputWithRightIcon.4c565b4c.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";const Y=D({name:"Index",components:{Head:I,PsInput:V,PsLabel:M,PsButton:z,PsTextarea:E,PsLabelHeader4:L,PsIcon:G,PsAlert:U,NewPsDataTable:q,PsDangerDialog:N,PsToggle:J,PsBreadcrumb2:K,PsTable2:Q,PsBannerIcon:W},layout:B,props:{status:Object,modules:Object,checkPermission:Object,showSubMenuGroupCols:Object,showCoreAndCustomFieldArr:Object,hideShowFieldForFilterArr:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,can:Object},setup(e){const d=["title","route_name"],$="Search Module",v=s(),H=s(),O=s();let f=e.search?s(e.search):s(""),p=e.sort_field?s(e.sort_field):s(""),b=e.sort_order?s(e.sort_order):s("desc"),a=s(!1);function u(t){v.value.openModal(l("core_delete_module"),l("delete_module"),l("core__be_btn_confirm"),l("core__be_btn_cancel"),()=>{this.$inertia.delete(route("module.destroy",t),{onSuccess:()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)},onError:()=>{a.value=!0,setTimeout(()=>{a.value=!1},3e3)}})},()=>{})}function w(t){this.$inertia.get(route("module.edit",t))}function y(){this.$inertia.get(route("module.create"))}function S(t,c){c&&this.$inertia.put(route("module.statusChange",t))}function k(t){p.value=t.field,b.value=t.sort_order,C()}function o(t){f.value=t,C(1)}function g(t){C(1,t)}function C(t=null,c=null){j.Inertia.get(route("module.index"),{sort_field:p.value,sort_order:b.value,page:t!=null?t:e.modules.meta.current_page,row:c!=null?c:e.modules.meta.per_page,search:f.value},{preserveScroll:!0,preserveState:!0})}return{handleEdit:w,handleCreate:y,globalSearchFields:d,globalSearchPlaceholder:$,ps_danger_dialog:v,columns:O,confirmDeleteClicked:u,route,colFilterOptions:H,handlePublish:S,handleSorting:k,handleSearching:o,handleRow:g,visible:a}},computed:{breadcrumb(){return[{label:l("core__be_dashboard_label"),url:route("admin.index")},{label:l("module_registering_module"),color:"text-primary-500"}]}},methods:{FilterOptionshandle(e){j.Inertia.post(route("module.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.modules.per_page,search:this.search.value,current_page:this.modules.current_page},{preserveScroll:!0,preserveState:!0})}},created(){this.columns=this.showCoreAndCustomFieldArr.map(e=>({action:e.action,field:e.field,label:l(e.label),sort:e.sort,type:e.type})),this.colFilterOptions=this.hideShowFieldForFilterArr.map(e=>({hidden:e.hidden,id:e.id,key:l(e.key),key_id:e.key_id,label:l(e.label),module_name:e.module_name}))}}),Z={class:""},x={key:0,class:"flex flex-row"};function ee(e,d,$,v,H,O){const f=i("Head"),p=i("ps-breadcrumb-2"),b=i("ps-banner-icon"),a=i("ps-icon"),u=i("ps-button"),w=i("ps-danger-dialog"),y=i("ps-toggle"),S=i("ps-table2"),k=i("ps-layout");return m(),A(R,null,[r(f,{title:e.$t("module_registering_module")},null,8,["title"]),r(k,null,{default:n(()=>[T("div",Z,[r(p,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(m(),_(b,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:n(()=>[P(F(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):h("",!0),r(S,{row:e.row,search:e.search,object:e.modules,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},{button:n(()=>[e.can.createModule?(m(),_(u,{key:0,onClick:d[0]||(d[0]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(a,{name:"plus",class:"me-1 font-semibold"}),P(" "+F(e.$t("core_add_module")),1)]),_:1})):h("",!0)]),responsive_button:n(()=>[e.can.createModule?(m(),_(u,{key:0,onClick:d[1]||(d[1]=o=>e.handleCreate()),rounded:"rounded-lg",type:"button",class:"flex flex-wrap items-center"},{default:n(()=>[r(a,{name:"plus",class:"me-1 font-semibold"}),P(" "+F(e.$t("core_add_module")),1)]),_:1})):h("",!0)]),tableActionRow:n(o=>[o.field=="action"?(m(),A("div",x,[r(u,{disabled:!o.row.authorizations.update,onClick:g=>e.handleEdit(o.row.id),class:"me-2",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:n(()=>[r(a,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(u,{disabled:!o.row.authorizations.delete,onClick:g=>e.confirmDeleteClicked(o.row.id),colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:n(()=>[r(a,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),r(w,{ref:"ps_danger_dialog"},null,512)])):h("",!0)]),tableRow:n(o=>[o.field=="status"?(m(),_(y,{key:0,disabled:!o.row.authorizations.update,selectedValue:o.row.status==1,onClick:g=>e.handlePublish(o.row.id,o.row.authorizations.update)},null,8,["disabled","selectedValue","onClick"])):h("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])])]),_:1})],64)}var ye=X(Y,[["render",ee]]);export{ye as default};