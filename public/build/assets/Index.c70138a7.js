import{d as g}from"./PsLayout.dfd88468.js";import{d as f,H as y,L as b,r as a,o as l,c as i,b as o,w as n,a as t,F as p,q as w,t as r,p as d}from"./app.17cd73cb.js";import{P as v}from"./PsInput.1d284888.js";import{P as k}from"./PsLabel.22ffb702.js";import{P}from"./PsButton.e57c4d7d.js";import{P as C}from"./PsTextarea.a073ad3a.js";import{P as L}from"./PsLabelHeader4.58b3b4f9.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.05949a2a.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";const H=f({name:"Index",components:{Head:y,Link:b,PsInput:v,PsLabel:k,PsButton:P,PsTextarea:C,PsLabelHeader4:L},layout:g,props:["transaction_statuses","status"],methods:{handleDelete(e){this.$inertia.delete(route("transaction_status.destroy",e))},handleEdit(e){this.$inertia.get(route("transaction_status.edit",e))}}}),T={class:"py-12"},B={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},D={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},E={class:"p-6"},F={class:"flex justify-between mb-6"},N=t("h4",null,"Transaction Status List",-1),I=d("Create New Transaction Status"),S=t("hr",null,null,-1),V={class:"flex"},M={class:"overflow-x-auto sm:-mx-6 lg:-mx-8 flex-1"},j={class:"py-2 inline-block min-w-full sm:px-6 lg:px-8"},q={class:"overflow-hidden"},z={class:"w-full"},A=t("thead",{class:"bg-white border-b"},[t("tr",null,[t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," # "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Title "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Color "),t("th",{scope:"col",class:"text-sm font-medium text-gray-900 px-6 py-4 text-left"}," Control ")])],-1),G={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},J={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},K={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},O={class:"text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"},Q=d(" Delete "),R=d(" Edit ");function U(e,W,X,Y,Z,tt){const h=a("Head"),u=a("Link"),m=a("FlashMessage"),c=a("ps-button"),_=a("ps-layout");return l(),i(p,null,[o(h,{title:e.$t("transaction_status_module")},null,8,["title"]),o(_,null,{default:n(()=>[t("div",T,[t("div",B,[t("div",D,[t("div",E,[t("div",F,[N,o(u,{href:e.route("transaction_status.create"),type:"button","data-mdb-ripple":"true","data-mdb-ripple-color":"light",class:"inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},{default:n(()=>[I]),_:1},8,["href"])]),S,o(m,{status:e.status},null,8,["status"]),t("div",V,[t("div",M,[t("div",j,[t("div",q,[t("table",z,[A,t("tbody",null,[(l(!0),i(p,null,w(e.transaction_statuses,s=>(l(),i("tr",{key:s.id,class:"bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"},[t("td",G,r(s.id),1),t("td",J,r(s.title),1),t("td",K,r(s.color_value),1),t("td",O,[o(c,{onClick:x=>e.handleDelete(s.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-red-600"},{default:n(()=>[Q]),_:2},1032,["onClick"]),o(c,{onClick:x=>e.handleEdit(s.id),class:"hover:bg-gray-100 text-white hover:text-gray-400 py-1 px-3 border rounded bg-yellow-500"},{default:n(()=>[R]),_:2},1032,["onClick"])])]))),128))])])])])])])])])])])]),_:1})],64)}var ht=$(H,[["render",U]]);export{ht as default};