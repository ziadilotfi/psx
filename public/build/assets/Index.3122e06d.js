import{d as T,L as z,H as E,i as s,ac as M,r as i,o as r,c as b,b as o,w as l,f as p,p as u,t as c,g as m,a as f,F as R,q as N,n as V,ag as U}from"./app.17cd73cb.js";import{a as q,f as G,e as J,P as K,d as Q}from"./PsLayout.dfd88468.js";import{P as W}from"./PsLabel.22ffb702.js";import{P as X}from"./PsButton.e57c4d7d.js";import{P as Y}from"./PsTable2.559b3bb1.js";import{P as Z}from"./PsAlert.28e258d7.js";import{P as x}from"./PsBreadcrumb2.49a3f56a.js";import{b as ee}from"./PsModal.bee9bcb9.js";import{P as te}from"./PsIcon.05949a2a.js";import{P as ae}from"./PsCsvModal.f6f9d17d.js";import{P as le}from"./PsBannerIcon.71d1b60f.js";import{D as oe}from"./PsTableSearch.4ca5ffa6.js";import{P as re}from"./PsIconButton.af329d7a.js";import{D as se}from"./DatePicker.55e143e0.js";import{_ as ne}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./moment.9709ab41.js";import"./PsIcon1.1b6f6944.js";import"./PsModal.8d00ec01.js";import"./PsLabelHeader4.58b3b4f9.js";import"./PsLink1.148ec573.js";import"./PsDraggable.e6494ff8.js";const de=T({name:"Index",components:{PsDropdownSelect:q,Link:z,Head:E,PsLabel:W,PsButton:X,PsTable2:Y,PsAlert:Z,PsBreadcrumb2:x,PsDangerDialog:G,PsToggle:ee,PsIcon:te,PsCsvModal:ae,PsBannerIcon:le,Dropdown:oe,PsIconButton:re,PsTextButton:J,DatePicker:se,PsDropdown:K},layout:Q,props:{can:Object,status:Object,paidItems:Object,payment_methods:Object,statusList:Object,selectedStatus:{type:String,default:""},selectedPaymentMethod:{type:String,default:""},selectedDate:Object,sort_field:{type:String,default:""},sort_order:{type:String,default:"desc"},search:String},setup(e){const d=s(!1);let P=e.search?s(e.search):s(""),F=e.sort_field?s(e.sort_field):s(""),I=e.sort_order?s(e.sort_order):s("desc"),v=e.selectedDate?s(e.selectedDate):s(""),h=e.selectedStatus?s(e.selectedStatus):s(""),g=e.selectedPaymentMethod?s(e.selectedPaymentMethod):s("");const w=s(!0),k=[{label:"item_module",field:"item_id@@title",type:"String"},{label:"core__be_start_date_label",field:"start_date",type:"Date",action:"Action"},{label:"core__be_end_date_label",field:"end_date",type:"Date",action:"Action"},{label:"core__be_status_label",field:"status",type:"Integer",action:"Action"},{label:"core__be_amount_label",field:"amount",type:"Integer",action:"Action"},{label:"core__be_paymend_method_label",field:"payment_method",type:"String",action:"Action"},{label:"detail_label",field:"detail",type:"Action"}];function S(a,_){let y=new Date,j=new Date(a),A=new Date(_),D=0;return y>=j&&y<=A&&(D="1"),y>j&&y>A&&(D="2"),y<j&&y<A&&(D="3"),D}function H(a){F.value=a.field,I.value=a.sort_order,t()}function C(a){P.value=a,t(1)}function n(a){t(1,a)}function $(a){h.value=a,t(1)}function B(a){g.value=a,t(1)}function L(a){v.value=a,t(1)}function O(){v.value="",g.value="",h.value="",t(1),w.value=!1,setTimeout(()=>{w.value=!0},500)}function t(a=null,_=null){U.Inertia.get(route("paid_item.index"),{sort_field:F.value,sort_order:I.value,page:a!=null?a:e.paidItems.meta.current_page,row:_!=null?_:e.paidItems.meta.per_page,search:P.value,date_filter:v.value,status_filter:h.value,payment_method_filter:g.value},{preserveScroll:!0,preserveState:!0})}return{reRenderDate:w,handleStatusfilter:$,dateFilter:L,handlePaymentMethodfilter:B,selected_date:v,selected_status:h,selected_payment_method:g,handleRow:n,handleSearchingSorting:t,handleSearching:C,handleSorting:H,columns:k,getStatus:S,showFilter:d,handleClearFilter:O}},computed:{breadcrumb(){return[{label:M("core__be_dashboard_label"),url:route("admin.index")},{label:M("promotion_report_module"),color:"text-primary-500"}]}},methods:{handleEdit(e){this.$inertia.get(route("paid_item.edit",e))}}}),ie=["href"],ue={class:"rounded-md shadow-xs w-56"},ce={class:"pt-2 z-30"},me=["onClick"],_e={class:"rounded-md shadow-xs w-56"},pe={class:"pt-2 z-30"},fe=["onClick"],be={key:0,class:"flex flex-row"},he={key:1};function ge(e,d,P,F,I,v){const h=i("Head"),g=i("ps-breadcrumb-2"),w=i("ps-banner-icon"),k=i("ps-icon"),S=i("ps-text-button"),H=i("ps-icon-button"),C=i("ps-dropdown-select"),n=i("ps-label"),$=i("ps-dropdown"),B=i("date-picker"),L=i("ps-table2"),O=i("ps-layout");return r(),b(R,null,[o(h,{title:e.$t("promotion_report_module")},null,8,["title"]),o(O,null,{default:l(()=>[o(g,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),e.visible?(r(),p(w,{key:0,visible:e.visible,theme:e.status.flag=="danger"?"bg-red-500":e.status.flag=="warning"?"bg-yellow-500":"bg-green-500",iconName:e.status.flag=="danger"?"close-circle":e.status.flag=="warning"?"alert-triangle":"rightalert",class:"text-white mb-4",iconColor:"white"},{default:l(()=>[u(c(e.status.msg),1)]),_:1},8,["visible","theme","iconName"])):m("",!0),o(L,{row:e.row,search:e.search,object:e.paidItems,columns:e.columns,sort_field:e.sort_field,sort_order:e.sort_order,onFilterOptionshandle:e.FilterOptionshandle,onHandleSort:e.handleSorting,onHandleSearch:e.handleSearching,onHandleRow:e.handleRow,searchable:e.showFilter,eye_filter:!1},{searchLeft:l(()=>[f("div",null,[f("a",{href:e.route("paid_item_report.csv.export"),class:"font-medium transition duration-150 ease-in-out px-4 py-1.75 ms-1 rounded text-primary-500 border border-primary-500 hover:outline-none hover:ring hover:ring-blue-100 focus:outline-none focus:ring focus:ring-blue-300 opacity-100 flex items-center"},[o(k,{name:"fileUpload",class:"me-2 font-semibold"}),u(c(e.$t("core__be_export_btn")),1)],8,ie)])]),searchRight:l(()=>[e.showFilter?(r(),p(S,{key:0,onClick:d[0]||(d[0]=t=>e.handleClearFilter()),class:"flex text-sm items-center text-red-400 dark:text-red-400",padding:"py-2 px-4"},{default:l(()=>[o(k,{theme:"dark:text-red-400",name:"cross",class:"me-3"}),u(" "+c(e.$t("core__be_clear_filter")),1)]),_:1})):m("",!0),o(H,{colors:e.showFilter?"bg-primary-500 text-white dark:text-secondary-800":"",focus:"",padding:"py-1 px-4",hover:"hover:bg-primary-500 hover:text-white",border:e.showFilter?"border border-primary-500":" border border-secondary-200",leftIcon:"filter",onClick:d[1]||(d[1]=t=>e.showFilter=!e.showFilter)},{default:l(()=>[u(c(e.$t("core__be_filter")),1)]),_:1},8,["colors","border"])]),Filter:l(()=>[o($,{align:"",class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_status_label"),selectedValue:e.selected_status==""||e.selected_status=="all"?"":e.statusList.filter(t=>t.id==e.selected_status)[0].name},null,8,["placeholder","selectedValue"])]),list:l(()=>[f("div",ue,[f("div",ce,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d[2]||(d[2]=t=>e.handleStatusfilter("all"))},[o(n,{class:"text-gray-200 ms-2"},{default:l(()=>[u(c(e.$t("core__be_select_all")),1)]),_:1})]),(r(!0),b(R,null,N(e.statusList,t=>(r(),b("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:a=>e.handleStatusfilter(t.id)},[o(n,{class:V(["ms-2",t.id==e.selected_status?" font-bold":""])},{default:l(()=>[u(c(t.name),1)]),_:2},1032,["class"])],8,me))),128))])])]),_:1}),o($,{class:"h-10"},{select:l(()=>[o(C,{placeholder:e.$t("core__be_payment_method_label"),selectedValue:e.selected_payment_method==""||e.selected_payment_method=="all"?"":e.payment_methods.filter(t=>t.id==e.selected_payment_method)[0].name},null,8,["placeholder","selectedValue"])]),list:l(()=>[f("div",_e,[f("div",pe,[f("div",{class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:d[3]||(d[3]=t=>e.handlePaymentMethodfilter("all"))},[o(n,{class:"text-gray-200 ms-2"},{default:l(()=>[u(c(e.$t("core__be_select_all")),1)]),_:1})]),(r(!0),b(R,null,N(e.payment_methods,t=>(r(),b("div",{key:t.id,class:"w-56 flex py-2 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:a=>e.handlePaymentMethodfilter(t.id)},[o(n,{class:V(["ms-2",t.id==e.selected_payment_method?" font-bold":""])},{default:l(()=>[u(c(t.name),1)]),_:2},1032,["class"])],8,fe))),128))])])]),_:1}),e.reRenderDate?(r(),p(B,{key:0,class:V(["rounded shadow-sm pt-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500",(e.selected_date==null||e.selected_date=="","w-full")]),placeholder:e.$t("core__be_promotion_date"),value:e.selected_date,"onUpdate:value":d[4]||(d[4]=t=>e.selected_date=t),onDatepick:e.dateFilter,range:!1,inline:!1,autoApply:!1},null,8,["placeholder","class","value","onDatepick"])):m("",!0)]),tableRow:l(t=>[t.field=="detail"?(r(),b("div",be,[o(S,{onClick:a=>e.handleEdit(t.row.id)},{default:l(()=>[u(c(e.$t("core__be_btn_detail")),1)]),_:2},1032,["onClick"])])):m("",!0),t.field=="status"?(r(),b("div",he,[o(n,{class:"whitespace-nowrap dark:text-white"},{default:l(()=>[e.getStatus(t.row.start_date,t.row.end_date)==2?(r(),p(n,{key:0,class:"flex flex-row",textColor:"text-green-600"},{default:l(()=>[e.getStatus(t.row.start_date,t.row.end_date)==2?(r(),p(n,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-green-600"})):m("",!0),u(" "+c(e.$t("core__be_compleated_status")),1)]),_:2},1024)):m("",!0),e.getStatus(t.row.start_date,t.row.end_date)==1?(r(),p(n,{key:1,class:"flex flex-row",textColor:"text-yellow-500"},{default:l(()=>[e.getStatus(t.row.start_date,t.row.end_date)==1?(r(),p(n,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-yellow-500"})):m("",!0),u(" "+c(e.$t("core__be_ongoing_status")),1)]),_:2},1024)):m("",!0),e.getStatus(t.row.start_date,t.row.end_date)==3?(r(),p(n,{key:2,class:"flex flex-row",textColor:"text-gray-500"},{default:l(()=>[e.getStatus(t.row.start_date,t.row.end_date)==3?(r(),p(n,{key:0,class:"w-2 h-2 my-auto rounded-full me-2",textColor:"bg-gray-500"})):m("",!0),u(" "+c(e.$t("core__be_not_yet_start_status")),1)]),_:2},1024)):m("",!0)]),_:2},1024)])):m("",!0)]),_:1},8,["row","search","object","columns","sort_field","sort_order","onFilterOptionshandle","onHandleSort","onHandleSearch","onHandleRow","searchable"])]),_:1})],64)}var ze=ne(de,[["render",ge]]);export{ze as default};