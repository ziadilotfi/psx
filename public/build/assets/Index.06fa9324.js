import{d as F,L as v,H as w,i as r,ab as O,ac as o,r as l,o as g,c as k,b as i,w as y,f as H,p as C,t as j,g as A,F as B,ag as T}from"./app.17cd73cb.js";import{f as I,d as $}from"./PsLayout.dfd88468.js";import{P as N}from"./PsLabel.22ffb702.js";import{P as K}from"./PsButton.e57c4d7d.js";import{P as L}from"./PsTable2.559b3bb1.js";import{P as R}from"./PsAlert.28e258d7.js";import{P as D}from"./PsBreadcrumb2.49a3f56a.js";import{b as V}from"./PsModal.bee9bcb9.js";import{P as E}from"./PsIcon.05949a2a.js";import{P as U}from"./PsBannerIcon.71d1b60f.js";import{P as q}from"./PsIconButton.af329d7a.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsTableSearch.4ca5ffa6.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";const G=F({name:"Index",components:{Link:v,Head:w,PsLabel:N,PsButton:K,PsTable2:L,PsAlert:R,PsBreadcrumb2:D,PsDangerDialog:I,PsToggle:V,PsIcon:E,PsBannerIcon:U,PsIconButton:q},layout:$,props:{can:Object,status:Object,coreKeyTypes:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,authUser:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){let c=r(!1);const h=r(!1),_=r(!1);let d=e.search?r(e.search):r(""),m=e.sort_field?r(e.sort_field):r(""),n=e.sort_order?r(e.sort_order):r("desc");function u(t){m.value=t.field,n.value=t.sort_order,a()}function p(){selected_cat.value="all",a()}function b(t){d.value=t,a(1)}function f(t){a(1,t)}function a(t=null,s=null){T.Inertia.get(route("core_key_type.index"),{sort_field:m.value,sort_order:n.value,page:t!=null?t:e.coreKeyTypes.meta.current_page,row:s!=null?s:e.coreKeyTypes.meta.per_page,search:d.value},{preserveScroll:!0,preserveState:!0})}const S=O([{label:o("code"),key:"code",hidden:!1},{label:o("name"),key:"name",hidden:!1},{label:o("description"),key:"description",hidden:!1}]),P=[{label:o("code_label"),field:"code",type:"String",action:"Action"},{label:o("name_label"),field:"name",type:"String",action:"Action"},{label:o("description_label"),field:"description",type:"String",action:"Action"}];return{visible:c,columns:P,colFilterOptions:S,showFilter:h,clearFilter:_,visible:c,handleSorting:u,handleSearchingSorting:a,handleClearFilter:p,handleRow:f,handleSearching:b}},computed:{breadcrumb(){return[{label:o("core__be_dashboard_label"),url:route("admin.index")},{label:o("core_key_type_module"),color:"text-primary-500"}]}},methods:{handleCreate(){this.$inertia.get(route("core_key_type.create"))}}});function J(e,c,h,_,d,m){const n=l("Head"),u=l("ps-breadcrumb-2"),p=l("ps-banner-icon"),b=l("ps-table2"),f=l("ps-layout");return g(),k(B,null,[i(n,{title:e.$t("core_key_type_module")},null,8,["title"]),i(f,null,{default:y(()=>[i(u,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(g(),H(p,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:y(()=>[C(j(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):A("",!0),i(b,{row:e.row,search:e.search,object:this.coreKeyTypes,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter},null,8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var ce=z(G,[["render",J]]);export{ce as default};
