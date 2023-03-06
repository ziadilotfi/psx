import{d as q}from"./PsLayout.dfd88468.js";import{P as z}from"./PsBreadcrumb2.49a3f56a.js";import{d as I,i as _,ac as d,aB as L,r as a,o as v,f as F,w as s,a as t,b as o,p as r,t as l,H as O,c as w,g as D,F as N,q as R}from"./app.17cd73cb.js";import{P as E}from"./PsInput.1d284888.js";import{P as H}from"./PsLabel.22ffb702.js";import{P as T}from"./PsButton.e57c4d7d.js";import{P as W}from"./PsTextarea.a073ad3a.js";import{P as A}from"./PsLabelHeader4.58b3b4f9.js";import{P as j}from"./PsIcon.05949a2a.js";import{P as U}from"./PsTable2.559b3bb1.js";import{P as G}from"./PsModal.bee9bcb9.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsInputWithRightIcon.1f31b4ee.js";import"./PsIcon1.1b6f6944.js";import"./PsTableSearch.4ca5ffa6.js";import"./moment.9709ab41.js";const J=I({name:"PsDangerDialogWithInput",components:{PsModal:G,PsLabel:H,PsButton:T,PsIcon:j,PsInput:E},setup(){const e=_(),n=_(d("ps_danger_dialog__danger")),b=_(d("ps_danger_dialog__danger_message")),i=_(!0),y=_(),P=_(d("ps_confirm_dialog__yes")),g=_(d("ps_confirm_dialog__no"));let c,m=L({name:""});function u(){y.value==m.name?i.value=!1:i.value=!0}function x(f){f=="yes"?i.value||c():C(),i.value||e.value.toggle(!1)}function p(f,k,h,$,B,V,ge){f!=null&&f.trim()!=""&&(n.value=f),k!=null&&k.trim()!=""&&(b.value=k),B!=null&&B.trim()!=""&&(y.value=B),$!=null&&$.trim()!=""&&(g.value=$),h!=null&&h.trim()!=""&&(P.value=h),e.value.toggle(!0),c=V}function C(){e.value.toggle(!1)}return{psmodal:e,openModal:p,closeModal:C,title:n,actionClicked:x,okButton:P,cancelButton:g,message:b,okBtnIsDisable:i,checkNameEqualOrNot:u,form:m,projectName:y}}}),K={class:"flex flex-row items-center"},Q={class:"w-full text-start mt-2"},X={class:"flex flex-row justify-end"};function Y(e,n,b,i,y,P){const g=a("ps-icon"),c=a("ps-label"),m=a("ps-input"),u=a("ps-button"),x=a("ps-modal");return v(),F(x,{ref:"psmodal",maxWidth:"370px",line:"hidden",isClickOut:!1,theme:" px-6 py-6 rounded-lg shadow-xl me-3",class:"z-20"},{title:s(()=>[t("div",K,[o(g,{name:"info",class:"text-red-500 me-2.5"}),o(c,{class:"text-lg font-semibold"},{default:s(()=>[r(l(e.title),1)]),_:1})])]),body:s(()=>[t("div",Q,[o(c,{class:"font-light text-sm lg:text-base mb-2"},{default:s(()=>[r(l(e.message),1)]),_:1}),o(c,{class:"font-weight-bold text-sm lg:text-base"},{default:s(()=>[r(l(e.$t("confirm_info1"))+' "'+l(e.projectName)+'" '+l(e.$t("confirm_info2")),1)]),_:1}),o(m,{type:"text",value:e.form.name,"onUpdate:value":n[0]||(n[0]=p=>e.form.name=p),onInput:e.checkNameEqualOrNot,placeholder:e.$t("type_here")},null,8,["value","onInput","placeholder"])])]),footer:s(()=>[t("div",X,[o(u,{rounded:"rounded",onClick:n[1]||(n[1]=p=>e.actionClicked("no")),textSize:"text-xs lg:text-sm",class:"me-4",border:"border border-gray-200",colors:"bg-none",hover:"hover:outline-none hover:ring hover:ring-gray-100"},{default:s(()=>[r(l(e.cancelButton),1)]),_:1}),o(u,{disabled:e.okBtnIsDisable,rounded:"rounded",onClick:n[2]||(n[2]=p=>e.actionClicked("yes")),textSize:"text-xs lg:text-sm",class:"",colors:"bg-red-500 text-white",hover:"hover:outline-none hover:ring hover:ring-red-100",focus:"focus:outline-none focus:ring focus:ring-red-300"},{default:s(()=>[r(l(e.okButton),1)]),_:1},8,["disabled"])])]),_:1},512)}var Z=M(J,[["render",Y]]);const S=I({name:"Edit",components:{Head:O,PsInput:E,PsLabel:H,PsButton:T,PsTextarea:W,PsLabelHeader4:A,PsBreadcrumb2:z,PsIcon:j,PsTable2:U,PsDangerDialogWithInput:Z},layout:q,props:["errors","menus","status","activityLogs","can"],setup(){const e=_();let n=L({confirmText:""});function b(i){e.value.openModal(d("delete"),d("data_reset_info"),d("btn_confirm"),d("btn_cancel"),i,()=>{this.$inertia.put(route("demo_data_deletion.destroy"))},()=>{})}return{ps_danger_dialog_with_input:e,handleDataReset:b,form:n}},computed:{breadcrumb(){return[{label:d("core__be_dashboard_label"),url:route("admin.index")},{label:d("demo_data_deletion_module"),color:"text-primary-500"}]}}}),ee={class:"rounded-xl"},te={class:"bg-primary-50 dark:bg-primary-900 py-2.5 ps-4"},oe={class:"mt-6"},se={class:""},ne={class:"border border-1 rounded p-4 w-1/2"},ae={class:"h-auto"},le={class:"mb-2"},re={key:0,class:"flex flex-row justify-start mt-6"},de={key:0,class:"mt-4 ms-1"},ie={class:"table-auto w-1/2"},ce={class:"bg-primary-500 dark:bg-primary-100 text-white dark:text-blacktext-2xl"},ue={scope:"col",class:"text-start px-4 py-2"},_e={class:"flex flex-row items-center p-1.5"},me={class:""},pe={class:""},fe=t("hr",{class:"bg-dark"},null,-1);function be(e,n,b,i,y,P){const g=a("Head"),c=a("ps-breadcrumb-2"),m=a("ps-label-header-6"),u=a("ps-label"),x=a("ps-button"),p=a("ps-icon"),C=a("ps-card"),f=a("ps-danger-dialog-with-input"),k=a("ps-layout");return v(),w(N,null,[o(g,{title:e.$t("demo_data_deletion_module")},null,8,["title"]),o(k,null,{default:s(()=>[o(c,{items:e.breadcrumb,class:"mb-5 sm:mb-6 lg:mb-8"},null,8,["items"]),o(C,{class:"w-full h-auto"},{default:s(()=>[t("div",ee,[t("div",te,[o(m,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[r(l(e.$t("demo_data_deletion_module")),1)]),_:1})]),t("div",oe,[t("div",se,[t("div",ne,[t("div",ae,[t("div",le,[o(m,{textColor:"text-secondary-800 dark:text-secondary-100"},{default:s(()=>[r(l(e.$t("demo_data_deletion_desc_title")),1)]),_:1})]),t("div",null,[o(u,{class:"text-gray-800 font-medium"},{default:s(()=>[r(l(e.$t("demo_data_deletion_desc")),1)]),_:1})]),e.can.deleteDataReset?(v(),w("div",re,[o(x,{onClick:n[0]||(n[0]=h=>e.handleDataReset("DELETE")),class:"bg-red-500 hover:bg-red-500"},{default:s(()=>[r(l(e.$t("delete_btn")),1)]),_:1})])):D("",!0)])])]),e.activityLogs?(v(),w("div",de,[t("table",ie,[t("thead",ce,[t("tr",null,[t("th",ue,[o(u,{textColor:"text-white"},{default:s(()=>[r(l(e.$t("activity_logs")),1)]),_:1})])])]),t("tbody",null,[t("tr",null,[t("td",null,[(v(!0),w(N,null,R(e.activityLogs,(h,$)=>(v(),w("div",{class:"",key:$},[t("div",_e,[t("div",me,[o(p,{name:"check",w:"20",h:"20",class:"me-4 p-0.5 inline-block font-semibold bg-green-500 border rounded-full text-white"})]),t("div",pe,[o(u,null,{default:s(()=>[r(l(h),1)]),_:2},1024)])]),fe]))),128))])])])])])):D("",!0)])])]),_:1}),o(f,{ref:"ps_danger_dialog_with_input"},null,512)]),_:1})],64)}var Te=M(S,[["render",be]]);export{Te as default};