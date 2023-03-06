import{e as ie,f as se,P as de,a as ce,d as ue}from"./PsLayout.dfd88468.js";import{d as pe,H as me,i as a,ac as d,C as _e,ag as L,r as c,o as s,c as h,b as n,w as o,f as T,p as u,t as p,g as v,n as V,a as f,F as z,q}from"./app.17cd73cb.js";import{P as he}from"./PsButton.e57c4d7d.js";import{P as fe}from"./PsBannerIcon.71d1b60f.js";import{P as ge}from"./PsBreadcrumb2.49a3f56a.js";import{P as be}from"./PsIcon.05949a2a.js";import{D as ve}from"./PsTableSearch.4ca5ffa6.js";import{P as ye}from"./PsIconButton.af329d7a.js";import{P as we}from"./PsLabel.22ffb702.js";import{P as ke}from"./PsLink1.148ec573.js";import{b as Oe}from"./PsModal.bee9bcb9.js";import{P as Ce}from"./PsTable2.559b3bb1.js";import{D as De}from"./DatePicker.55e143e0.js";import{P as Se}from"./PsBadge.b81aaf9e.js";import{g as Pe,f as $e,h as Fe}from"./psApiService.215afa15.js";import{P as Ie}from"./PsInput.1d284888.js";import{P as je}from"./PsInputWithRightIcon.1f31b4ee.js";import{_ as Ae}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon1.1b6f6944.js";import"./moment.9709ab41.js";const Te=pe({name:"Index",components:{Head:me,PsButton:he,PsTextButton:ie,PsBannerIcon:fe,PsBreadcrumb2:ge,PsDangerDialog:se,PsIcon:be,PsDropdown:de,PsDropdownSelect:ce,Dropdown:ve,PsIconButton:ye,PsLabel:we,PsLink1:ke,PsToggle:Oe,PsTable2:Ce,DatePicker:De,PsBadge:Se,PsInput:Ie,PsInputWithRightIcon:je},layout:ue,props:{status:Object,items:Object,categories:Object,customizeHeaders:Object,customizeDetails:Object,hideShowFieldForFilterArr:Object,showCoreAndCustomFieldArr:Object,selectedCategory:{type:String,default:""},selectedDealOption:{type:String,default:""},selectedPurchaseOption:{type:String,default:""},selectedDate:{type:String,default:""},authUser:Object,uis:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String,itmPurchasedOption:String,itmDealOption:String,itmConditionOfItem:String,itmItemType:String},data(){return{location_city:"",category:""}},setup(e){const i=e.selectedCategory||e.selectedDate||e.selectedDealOption||e.selectedPurchasedOption?a(!0):a(!1),M=a(!1);let P=a(!1);const H=a(!0);let E=e.search?a(e.search):a(""),B=e.sort_field?a(e.sort_field):a(""),R=e.sort_order?a(e.sort_order):a("desc"),$=e.selectedCategory?a(e.selectedCategory.id):a(""),F=e.selectedDealOption?a(e.selectedDealOption.id):a(""),g=e.selectedPurchaseOption?a(e.selectedPurchaseOption.id):a(""),I=e.selectedDate?a(e.selectedDate):a(""),k=a([]),O=a(!1),m=a(),b=a(!1),w=a([]),C=a(!1),U=a(),D=a([]),j=a(!1),N=a();const t=a();function A(l){t.value.openModal(d("core__be_delete_item"),d("core__be_delete_item_info"),d("core__be_btn_confirm"),d("core__be_btn_cancel"),()=>{L.Inertia.delete(route("slow_moving_item.destroy",l),{onSuccess:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)},onError:()=>{P.value=!0,setTimeout(()=>{P.value=!1},3e3)}})},()=>{})}function G(l){B.value=l.field,R.value=l.sort_order,y()}function J(){$.value="all",g.value="all",F.value="all",I.value="",y(),H.value=!1,setTimeout(()=>{H.value=!0},100)}function K(l){$.value=l,y(1)}function Q(l){I.value=l,y(1)}function X(l){F.value=l,y(1)}function Y(l){g.value=l,y(1)}function Z(l){E.value=l,y(1)}function x(l){y(1,l)}function y(l=null,r=null){L.Inertia.get(route("slow_moving_item.index"),{sort_field:B.value,sort_order:R.value,page:l!=null?l:e.items.meta.current_page,row:r!=null?r:e.items.meta.per_page,search:E.value,category_filter:$.value,deal_option_filter:F.value,purchase_option_filter:g.value,date_filter:I.value},{preserveScroll:!0,preserveState:!0})}const ee=[{label:d("core__be_seller_name"),field:"added_user_id@@name",type:"Integer",action:"Action"},{label:d("core__be_items"),field:"title",type:"String",action:"Action"},{label:d("core__be_item_categories"),field:"category_id@@name",type:"Integer",action:"Action"},{label:d("core__be_item_subcategories"),field:"subcategory_id@@name",type:"Integer",action:"Action"},{label:d("core__be_item_price"),field:"price",type:"Integer",action:"Action"},{label:d("core__be_purchased_option"),field:e.itmPurchasedOption+"@@name",type:"String"},{label:d("core__be_item_type"),field:e.itmItemType+"@@name",type:"String"},{label:d("core__be_deal_option"),field:e.itmDealOption+"@@name",type:"String",action:"Action"},{label:d("core__be_engagement"),field:"item_touch_count",type:"Integer",action:"Action"},{label:"core__be_post_date",field:"added_date",type:"Timestamp",action:"Action"},{label:d("core__be_action_label"),field:"action",type:"Action"}],te=a();function W(l){O.value=!0,b.value=!0,Pe(l,m.value,e.authUser.id).then(r=>{r.data.length?r.data.forEach(S=>{k.value.push(S)}):O.value=!1,b.value=!1})}function le(l=null){let r=k.value?k.value.length:0;(r==0||l==!0)&&W(r)}_e(m,_.debounce((l,r)=>{let S=0;k.value=[],W(S)},500));function oe(l){C.value=!0,b.value=!0,$e(l,e.authUser.id).then(r=>{r.data.length?r.data.forEach(S=>{w.value.push(S)}):C.value=!1,b.value=!1}).catch(function(r){r&&(b.value=!1,C.value=!1)})}function re(l=null){let r=w.value?w.value.length:0;(r==0||l==!0)&&oe(r)}function ae(l){j.value=!0,b.value=!0,Fe(l,e.authUser.id).then(r=>{r.data.length?r.data.forEach(S=>{D.value.push(S)}):j.value=!1,b.value=!1}).catch(function(r){r&&(b.value=!1,j.value=!1)})}function ne(l=null){let r=D.value?D.value.length:0;(r==0||l==!0)&&ae(r)}return{reRenderDate:H,showFilter:i,clearFilter:M,columns:ee,confirmDeleteClicked:A,ps_danger_dialog:t,colFilterOptions:te,visible:P,handleSorting:G,handleSearchingSorting:y,handleCategoryfilter:K,handleDealOptionFilter:X,handlePurchaseOptionFilter:Y,handleDateFilter:Q,handleClearFilter:J,handleRow:x,handleSearching:Z,selected_cat:$,selected_deal_option:F,selected_purchase_option:g,selected_date:I,is_loading:b,dropdownClick:le,categories:k,category_loadmore_visible:O,catSearch:m,purchaseOptions:w,purchaseOptions_loadmore_visible:C,purchaseOptionsSearch:U,purchaseOptionDropdownClick:re,dealOptions:D,dealOptions_loadmore_visible:j,dealOptionsSearch:N,dealOptionDropdownClick:ne}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("slow_moving_item_module"),color:"text-primary-500"}]}},created(){},methods:{handleDelete(e){this.$inertia.delete(route("slow_moving_item.destroy",e))},handleEdit(e){this.$inertia.get(route("slow_moving_item.edit",e))},FilterOptionshandle(e){L.Inertia.put(route("slow_moving_item.screenDisplayUiSetting.store"),{value:e,sort_field:this.sort_field,sort_order:this.sort_order,row:this.items.per_page,search:this.search.value,current_page:this.items.current_page},{preserveScroll:!0,preserveState:!0})}}}),He={class:"rounded-md shadow-xs w-56"},Be={class:"pt-2 z-30"},Re=["onClick"],Ve={class:"flex flex-row items-center justify-between"},ze={class:"mt-1 mx-1"},Ee={class:"rounded-md shadow-xs w-56"},Ue={class:"pt-2 z-30"},Ne=["onClick"],Le={class:"flex flex-row items-center justify-between"},qe={class:"rounded-md shadow-xs w-56"},Me={class:"pt-2 z-30"},We=["onClick"],Ge={class:"flex flex-row items-center justify-between"},Je={key:0,class:"flex flex-row"},Ke={key:0},Qe={key:1};function Xe(e,i,M,P,H,E){const B=c("Head"),R=c("ps-breadcrumb-2"),$=c("ps-banner-icon"),F=c("date-picker"),g=c("ps-icon"),I=c("ps-text-button"),k=c("ps-icon-button"),O=c("ps-dropdown-select"),m=c("ps-label"),b=c("ps-input-with-right-icon"),w=c("ps-dropdown"),C=c("ps-button"),U=c("ps-danger-dialog"),D=c("ps-badge"),j=c("ps-table2"),N=c("ps-layout");return s(),h(z,null,[n(B,{title:e.$t("slow_moving_item_module")},null,8,["title"]),n(N,null,{default:o(()=>[n(R,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(s(),T($,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-5 sm:mb-6 lg:mb-8",iconColor:"white"},{default:o(()=>[u(p(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):v("",!0),n(j,{row:e.row,search:e.search,object:this.items,colFilterOptions:e.colFilterOptions,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,globalSearchPlaceholder:e.$t("core__be_search"),onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchRight:o(()=>[e.reRenderDate?(s(),T(F,{key:0,onDatepick:e.handleDateFilter,class:V(["rounded text-primary-400 shadow-sm pt-0.5 me-2 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),value:e.selected_date,"onUpdate:value":i[0]||(i[0]=t=>e.selected_date=t),range:!0,inline:!1,autoApply:!1},null,8,["onDatepick","class","value"])):v("",!0),e.showFilter?(s(),T(I,{key:1,onClick:i[1]||(i[1]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-1 px-4"},{default:o(()=>[n(g,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),u(" "+p(e.$t("core__be_clear_filter")),1)]),_:1})):v("",!0),n(k,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:i[2]||(i[2]=t=>e.showFilter=!e.showFilter)},{default:o(()=>[u(p(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:o(()=>[n(w,{onOnClick:e.dropdownClick,align:"",class:"h-10"},{select:o(()=>[n(O,{placeholder:e.$t("core__be_category"),border:e.selected_cat!==""&&e.selected_cat!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_cat==""||e.selected_cat=="all"?"":e.selectedCategory.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",He,[f("div",Be,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[3]||(i[3]=t=>e.handleCategoryfilter("all"))},[n(m,{class:"text-gray-200 ms-2"},{default:o(()=>[u(p(e.$t("core__be_select_all")),1)]),_:1})]),(s(!0),h(z,null,q(e.categories,t=>(s(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:A=>e.handleCategoryfilter(t.id)},[n(m,{class:V(["ms-2",t.id==e.selected_cat?" font-bold":""])},{default:o(()=>[u(p(t.name),1)]),_:2},1032,["class"])],8,Re))),128))])])]),loadmore:o(()=>[e.category_loadmore_visible?(s(),h("div",{key:0,onClick:i[4]||(i[4]=t=>e.dropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",Ve,[n(m,{class:"ms-2"},{default:o(()=>[u(p(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),n(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),filter:o(()=>[f("div",ze,[n(b,{class:"w-full h-10",theme:"bg-gray-100",rounded:"rounded-lg",value:e.catSearch,"onUpdate:value":i[5]||(i[5]=t=>e.catSearch=t),placeholder:e.$t("core__be_search")},{icon:o(()=>[n(g,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"])])]),_:1},8,["onOnClick"]),n(w,{onOnClick:e.purchaseOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[n(O,{placeholder:e.$t("core__be_purchased_option"),border:e.selected_purchase_option!==""&&e.selected_purchase_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_purchase_option==""||e.selected_purchase_option=="all"?"":e.selectedPurchaseOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",Ee,[f("div",Ue,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[6]||(i[6]=t=>e.handlePurchaseOptionFilter("all"))},[n(m,{class:"text-gray-200 ms-2"},{default:o(()=>[u(p(e.$t("core__be_select_all")),1)]),_:1})]),(s(!0),h(z,null,q(e.purchaseOptions,t=>(s(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:A=>e.handlePurchaseOptionFilter(t.id)},[n(m,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[u(p(t.name),1)]),_:2},1032,["class"])],8,Ne))),128))])])]),loadmore:o(()=>[e.purchaseOptions_loadmore_visible?(s(),h("div",{key:0,onClick:i[7]||(i[7]=t=>e.purchaseOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",Le,[n(m,{class:"ms-2"},{default:o(()=>[u(p(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),n(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"]),n(w,{onOnClick:e.dealOptionDropdownClick,align:"",class:"h-10"},{select:o(()=>[n(O,{placeholder:e.$t("core__be_deal_option"),border:e.selected_deal_option!==""&&e.selected_deal_option!=="all"?"border border-indigo-500/100":"border border-1 border-secondary-200",selectedValue:e.selected_deal_option==""||e.selected_deal_option=="all"?"":e.selectedDealOption.name},null,8,["placeholder","border","selectedValue"])]),list:o(()=>[f("div",qe,[f("div",Me,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:i[8]||(i[8]=t=>e.handleDealOptionFilter("all"))},[n(m,{class:"text-gray-200 ms-2"},{default:o(()=>[u(p(e.$t("core__be_select_all")),1)]),_:1})]),(s(!0),h(z,null,q(e.dealOptions,t=>(s(),h("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:A=>e.handleDealOptionFilter(t.id)},[n(m,{class:V(["ms-2",t.id==e.selected_purchase_option?" font-bold":""])},{default:o(()=>[u(p(t.name),1)]),_:2},1032,["class"])],8,We))),128))])])]),loadmore:o(()=>[e.dealOptions_loadmore_visible?(s(),h("div",{key:0,onClick:i[9]||(i[9]=t=>e.dealOptionDropdownClick(!0)),class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[f("div",Ge,[n(m,{class:"ms-2"},{default:o(()=>[u(p(e.is_loading?e.$t("core__be_loading"):e.$t("core__be_load_more")),1)]),_:1}),n(g,{theme:"text-black dark:text-primary-900",name:"load",w:"16",h:"16"})])])):v("",!0)]),_:1},8,["onOnClick"])]),tableActionRow:o(t=>[t.field=="action"?(s(),h("div",Je,[n(C,{disabled:!t.row.authorizations.update,onClick:A=>e.handleEdit(t.row.id),class:"me-2",rounded:"rounded-lg",colors:"bg-green-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-green-100",focus:"focus:outline-none focus:ring focus:ring-green-200"},{default:o(()=>[n(g,{theme:"text-white dark:text-primary-900",name:"editPencil",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(C,{disabled:!t.row.authorizations.delete,onClick:A=>e.confirmDeleteClicked(t.row.id),rounded:"rounded-lg",colors:"bg-red-400 text-white",padding:"p-1.5",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-200"},{default:o(()=>[n(g,{theme:"text-white dark:text-primary-900",name:"trash",w:"16",h:"16"})]),_:2},1032,["disabled","onClick"]),n(U,{ref:"ps_danger_dialog"},null,512)])):v("",!0)]),tableRow:o(t=>[t.field==e.itmPurchasedOption+"@@name"?(s(),h("span",Ke,[t.row[e.itmPurchasedOption+"@@name"]?(s(),T(D,{key:0,class:""},{default:o(()=>[u(p(t.row[e.itmPurchasedOption+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0),t.field==e.itmItemType+"@@name"?(s(),h("span",Qe,[t.row[e.itmItemType+"@@name"]?(s(),T(D,{key:0,theme:"text-red-500 bg-red-100",class:""},{default:o(()=>[u(p(t.row[e.itmItemType+"@@name"]),1)]),_:2},1024)):v("",!0)])):v("",!0)]),_:1},8,["row","search","object","colFilterOptions","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","globalSearchPlaceholder","onHandleRow","searchable"])]),_:1})],64)}var gt=Ae(Te,[["render",Xe]]);export{gt as default};