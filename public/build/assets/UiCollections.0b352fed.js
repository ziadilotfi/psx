import{s as et,u as ia,x as $e,y as Vp,z as sC,A as aC,d as Ht,o as U,f as be,i as je,B as _e,j as aa,k as Qp,C as Qi,w as z,m as lt,v as bt,b as C,h as Sn,l as Je,D as Zp,T as lC,E as Jp,G as cC,r as K,c as Q,a as $,p as j,t as V,F as Fe,q as Ze,n as Ft,g as Qe,I as Xp,J as dC,K as uC,M as hC,N as em,O as tm,P as nm,Q as Vt,R as ta,S as gC,U as pC,V as om,W as Zt,X as ei,Y as ti,Z as im,_ as rm,$ as mC,a0 as fC,a1 as kC,a2 as bC,a3 as wC,a4 as Hp,a5 as _C,a6 as Up,a7 as AC,a8 as Xo,a9 as sm,aa as vC,ab as Qn}from"./app.17cd73cb.js";import{P as la,a as ca,b as CC,c as yC,d as xC}from"./PsLayout.dfd88468.js";import{P as am}from"./PsInput.1d284888.js";import{_ as Jt}from"./plugin-vue_export-helper.21dcd24c.js";import{P as DC}from"./PsInputWithRightIcon.4c565b4c.js";import{P as lm}from"./PsIcon.05949a2a.js";import{P as EC}from"./PsIcon1.1b6f6944.js";import{P as da}from"./PsLabel.22ffb702.js";import{P as SC}from"./PsIconButton.af329d7a.js";import{P as ua}from"./PsButton.e57c4d7d.js";import{h as MC}from"./moment.9709ab41.js";import{P as cm,a as IC}from"./PsModal.bee9bcb9.js";import{P as dm}from"./PsLabelTitle.9ae31f2a.js";import{P as TC,a as NC,b as BC,c as PC,d as zC,e as LC}from"./PsLoadingDialog.828a46fe.js";import{P as OC}from"./PsLabelTitle3.d3f1b34d.js";import{P as RC}from"./PsLabelHeader5.5d183f9e.js";import{P as jC}from"./PsLabelHeader4.58b3b4f9.js";import{P as FC}from"./PsLabelHeader3.9a7ed4a2.js";import{P as VC}from"./PsLabelCaption.88f9aeab.js";import{P as HC}from"./PsLabelCaption2.b11c0e8b.js";import{P as UC}from"./PsInputWithRightIcon.1f31b4ee.js";import{P as $C}from"./PsTextarea.a073ad3a.js";import{P as qC}from"./PsBadge.b81aaf9e.js";import{P as GC}from"./PsAlert.28e258d7.js";import{P as WC}from"./PsRating.c16aeec3.js";import{P as YC}from"./PsCheckbox.ccf3fffc.js";import{P as KC}from"./PsCheckboxValue.e5e75bc0.js";import{P as QC}from"./PsRadio.1eed8d12.js";import{P as ZC}from"./PsRadioValue.7f90f225.js";import{A as JC,O as XC}from"./index.0117fec4.js";import{P as ey}from"./PsCard.ad8f8108.js";import{C as um,p as hm,a as gm,b as pm,L as ty,c as ny,S as oy,A as iy,R as ry,P as sy,B as ay,d as ly,e as cy,D as dy,f as uy,g as hy}from"./RadarChart.52bdb0de.js";function $p(g,A){et(2,arguments);var y=ia(g),S=ia(A);return y.getTime()===S.getTime()}function gy(g){et(1,arguments);var A=$e(g);return A.setHours(23,59,59,999),A}function mm(g){et(1,arguments);var A=$e(g),y=A.getMonth();return A.setFullYear(A.getFullYear(),y+1,0),A.setHours(23,59,59,999),A}function qp(g){et(1,arguments);var A=$e(g);return A.setSeconds(0,0),A}function py(g){et(1,arguments);var A=g||{},y=$e(A.start),S=$e(A.end),_=S.getTime(),L=[];if(!(y.getTime()<=_))throw new RangeError("Invalid interval");var x=y;for(x.setHours(0,0,0,0),x.setDate(1);x.getTime()<=_;)L.push($e(x)),x.setMonth(x.getMonth()+1);return L}function fm(g){et(1,arguments);var A=$e(g);return A.setDate(1),A.setHours(0,0,0,0),A}function my(g){et(1,arguments);var A=$e(g),y=A.getFullYear();return A.setFullYear(y+1,0,0),A.setHours(23,59,59,999),A}function fy(g){et(1,arguments);var A=$e(g),y=new Date(0);return y.setFullYear(A.getFullYear(),0,1),y.setHours(0,0,0,0),y}function ky(g){et(1,arguments);var A=g||{},y=$e(A.start),S=$e(A.end),_=S.getTime();if(!(y.getTime()<=_))throw new RangeError("Invalid interval");var L=[],x=y;for(x.setHours(0,0,0,0),x.setMonth(0,1);x.getTime()<=_;)L.push($e(x)),x.setFullYear(x.getFullYear()+1);return L}function by(g){et(1,arguments);var A=$e(g),y=A.getFullYear(),S=9+Math.floor(y/10)*10;return A.setFullYear(S,11,31),A.setHours(23,59,59,999),A}function Yi(g){et(1,arguments);var A=$e(g),y=A.getFullYear(),S=Math.floor(y/10)*10;return S}function Gp(g){et(1,arguments);var A=$e(g);return A.setMinutes(0,0,0),A}function wy(g,A){et(2,arguments);var y=Gp(g),S=Gp(A);return y.getTime()===S.getTime()}function _y(g,A){et(2,arguments);var y=qp(g),S=qp(A);return y.getTime()===S.getTime()}function ra(g,A){et(2,arguments);var y=$e(g),S=$e(A);return y.getFullYear()===S.getFullYear()&&y.getMonth()===S.getMonth()}function Wp(g,A){et(2,arguments);var y=$e(g),S=$e(A);return y.getFullYear()===S.getFullYear()}function Ay(g,A){et(2,arguments);var y=$e(g).getTime(),S=$e(A.start).getTime(),_=$e(A.end).getTime();if(!(S<=_))throw new RangeError("Invalid interval");return y>=S&&y<=_}function vy(g,A,y){var S,_,L,x,b,f,M,D;et(2,arguments);var B=aC(),m=Vp((S=(_=(L=(x=y==null?void 0:y.weekStartsOn)!==null&&x!==void 0?x:y==null||(b=y.locale)===null||b===void 0||(f=b.options)===null||f===void 0?void 0:f.weekStartsOn)!==null&&L!==void 0?L:B.weekStartsOn)!==null&&_!==void 0?_:(M=B.locale)===null||M===void 0||(D=M.options)===null||D===void 0?void 0:D.weekStartsOn)!==null&&S!==void 0?S:0);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var T=$e(g),N=Vp(A),te=T.getDay(),O=N%7,ce=(O+7)%7,de=7-m,xe=N<0||N>6?N-(te+de)%7:(ce+de)%7-(te+de)%7;return sC(T,xe)}function Cy(g){et(1,arguments);var A=$e(g),y=A.getFullYear(),S=Math.floor(y/10)*10;return A.setFullYear(S,0,1),A.setHours(0,0,0,0),A}/**
 * Vue 3 Loading Overlay 0.0.0
 * (c) 2020
 * @license MIT
 */var ha=Ht({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});const yy=C("g",{fill:"none","fill-rule":"evenodd"},[C("g",{transform:"translate(1 1)","stroke-width":"2"},[C("circle",{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}),C("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[C("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"})])])],-1);function xy(g,A,y,S,_,L){return U(),be("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:g.width,height:g.height,stroke:g.color},[yy],8,["width","height","stroke"])}ha.render=xy;ha.__file="src/loaders/Spinner.vue";var ga=Ht({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}});const Dy=C("circle",{cx:"15",cy:"15",r:"15"},[C("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),C("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1),Ey=C("circle",{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"},[C("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),C("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})],-1),Sy=C("circle",{cx:"105",cy:"15",r:"15"},[C("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),C("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})],-1);function My(g,A,y,S,_,L){return U(),be("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:g.color,width:g.width,height:g.height},[Dy,Ey,Sy],8,["fill","width","height"])}ga.render=My;ga.__file="src/loaders/Dots.vue";var pa=Ht({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}});const Iy=C("rect",{x:"0",y:"13",width:"4",height:"5"},[C("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}),C("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"})],-1),Ty=C("rect",{x:"10",y:"13",width:"4",height:"5"},[C("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}),C("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"})],-1),Ny=C("rect",{x:"20",y:"13",width:"4",height:"5"},[C("animate",{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}),C("animate",{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"})],-1);function By(g,A,y,S,_,L){return U(),be("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:g.height,width:g.width,fill:g.color},[Iy,Ty,Ny],8,["height","width","fill"])}pa.render=By;pa.__file="src/loaders/Bars.vue";var Py={Spinner:ha,Dots:ga,Bars:pa},ma=Ht({name:"vue-loading",props:{active:Boolean,programmatic:Boolean,container:[Object,Function,HTMLElement],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:{type:Number,default:100},loader:{type:String,default:"spinner"}},setup(g,A){const y=je(g.active),S=_e(()=>({background:g.backgroundColor,opacity:g.opacity,backdropFilter:`blur(${g.blur})`})),_=()=>{g.programmatic&&(y.value=!1,setTimeout(()=>{},150))},L=()=>{!g.canCancel||!y.value||(_(),g.onCancel())},x=M=>{M.keyCode===27&&L()},b=()=>{g.isFullPage&&g.lockScroll&&document.body.classList.add("vld-shown")},f=()=>{g.isFullPage&&g.lockScroll&&document.body.classList.remove("vld-shown")};return aa(()=>{g.programmatic&&(y.value=!0,document.addEventListener("keyup",x))}),Qp(()=>{document.removeEventListener("keyup",x)}),Qi(()=>g.active,()=>{y.value=g.active}),Qi(y,()=>{y.value?b():f()}),{isActive:y,bgStyle:S,hide:_,cancel:L}},components:Py});const zy={class:"vld-icon"};function Ly(g,A,y,S,_,L){return U(),be(lC,{ref:"root",name:g.transition},{default:z(()=>[lt(C("div",{tabindex:"0",class:["vld-overlay is-active",{"is-full-page":g.isFullPage}],"aria-busy":g.isActive,"aria-label":"Loading",style:{zIndex:g.zIndex}},[C("div",{class:"vld-background",onClick:A[1]||(A[1]=Sn((...x)=>g.cancel&&g.cancel(...x),["prevent"])),style:g.bgStyle},null,4),C("div",zy,[Je(g.$slots,"before"),Je(g.$slots,"default",{},()=>[(U(),be(Zp(g.loader),{color:g.color,width:g.width,height:g.height},null,8,["color","width","height"]))]),Je(g.$slots,"after")])],14,["aria-busy"]),[[bt,g.isActive]])]),_:3},8,["name"])}ma.render=Ly;ma.__file="src/main/Component.vue";function Oy(g,A,y){const S=Jp(g,A),_=document.createElement("div");return y.appendChild(_),cC(S,_),S.component}function Ry(g){var A;typeof g.remove!="undefined"?g.remove():(A=g.parentNode)===null||A===void 0||A.removeChild(g)}function jy(g={},A={}){let y=null;return{show(_=g,L=A){const b=Object.assign({},g,_,{programmatic:!0,lockScroll:!0,isFullPage:!1});let f=b.container;b.container||(f=document.body,b.isFullPage=!0),y=Oy(ma,b,f);const M=Object.assign({},A,L);Object.keys(M).map(D=>{y!=null&&(y.slots[D]=M[D])})},hide(){if(y!=null){y.ctx.hide();let _=y.vnode.el;Ry(_.parentElement)}}}}const Fy={name:"PsPaginator",components:{PsDropdown:la,PsDropdownSelect:ca},props:["totalRecords","perPageOptions"],data(){return{page:1,perPage:this.perPageOptions[0]}},computed:{pages(){return this.totalRecords%this.perPage>0?Math.floor(this.totalRecords/this.perPage)+1:this.totalRecords/this.perPage}},methods:{changePage(g){g=="prev"?this.page=this.page>1?this.page-1:this.page:g=="next"?this.page=this.page<this.pages?this.page+1:this.page:this.page=g,this.$emit("update:value",{page:this.page,perPage:this.perPage})},setPerPage(g){this.perPage=g,this.page=1,this.$emit("update:value",{page:this.page,perPage:this.perPage})}}},Vy={class:"flex justify-between"},Hy={class:"flex"},Uy={class:"flex flex-row"},$y={class:"rounded-md shadow-xs w-24"},qy={class:"z-30"},Gy=["onClick"],Wy={class:""},Yy={class:"mb-4"},Ky={class:"flex flex-col overflow-x-auto overflow-y-hidden w-full"},Qy={class:"mt-8 flex w-full justify-between"},Zy={class:"flex-1 flex justify-between sm:hidden"},Jy=["disabled"],Xy=["disabled"],e1={class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},t1={class:"flex text-sm text-gray-700"},n1={class:"text-sm text-gray-700"},o1=j(" Showing "+V(" ")+" "),i1={class:"font-medium"},r1=j(" "+V(" ")+" to "+V(" ")+" "),s1={class:"font-medium"},a1=j(" "+V(" ")+" of "+V(" ")+" "),l1={class:"font-medium"},c1=j(" "+V(" ")+" entries "),d1={key:0,class:"flex space-x-1"},u1=["disabled"],h1=$("span",{class:"sr-only"},"Previous",-1),g1={key:0,class:"inline-flex items-center py-2 px-4 bg-white text-sm font-medium text-gray-700"},p1=["onClick"],m1={key:2,class:"inline-flex items-center py-2 px-4 bg-white text-sm font-medium text-gray-700"},f1=["disabled"],k1=$("span",{class:"sr-only"},"Next",-1);function b1(g,A,y,S,_,L){const x=K("ps-label"),b=K("ps-dropdown-select"),f=K("ps-dropdown"),M=K("font-awesome-icon");return U(),Q(Fe,null,[$("div",Vy,[$("div",Hy,[C(f,{align:"left",class:"text-sm me-2"},{select:z(()=>[$("div",Uy,[C(x,{class:"my-auto"},{default:z(()=>[j(V(g.$t("core__be_show"))+":\xA0",1)]),_:1}),C(b,{placeholder:g.$t("core__be_show"),selectedValue:_.perPage+" "+g.$t("core__be_rows"),class:"w-32"},null,8,["placeholder","selectedValue"])])]),list:z(()=>[$("div",$y,[$("div",qy,[(U(!0),Q(Fe,null,Ze(y.perPageOptions,(D,B)=>(U(),Q("div",{key:B,class:"w-32 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center",onClick:m=>[_.perPage=D,L.setPerPage(D)]},[C(x,{class:Ft(["ms-2",_.perPage==D?" font-bold":""])},{default:z(()=>[j(V(D)+" "+V(g.$t("core__be_rows")),1)]),_:2},1032,["class"])],8,Gy))),128))])])]),_:1}),Je(g.$slots,"import")]),$("div",Wy,[Je(g.$slots,"search")])]),$("div",Yy,[Je(g.$slots,"searchOption")]),$("div",Ky,[Je(g.$slots,"table")]),$("div",Qy,[$("div",Zy,[$("button",{class:"inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-800 disabled:cursor-default disabled:text-gray-400",disabled:_.page==1,onClick:A[0]||(A[0]=D=>L.changePage("prev"))}," Previous ",8,Jy),$("button",{class:"ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-800 disabled:cursor-default disabled:text-gray-400",disabled:_.page==L.pages,onClick:A[1]||(A[1]=D=>L.changePage("next"))}," Next ",8,Xy)]),$("div",e1,[$("div",t1,[$("p",n1,[o1,$("span",i1,V(y.totalRecords>0?(_.page-1)*_.perPage+1:0),1),r1,$("span",s1,V(_.page*_.perPage>y.totalRecords?y.totalRecords:_.page*_.perPage),1),a1,$("span",l1,V(y.totalRecords),1),c1])]),y.totalRecords>_.perPage?(U(),Q("div",d1,[$("button",{class:"inline-flex items-center border py-2 px-4 text-xs font-medium text-gray-600 rounded bg-white hover:text-gray-500 hover:bg-gray-200 disabled:cursor-default disabled:text-gray-400",disabled:_.page==1,onClick:A[2]||(A[2]=D=>L.changePage("prev"))},[h1,C(M,{icon:"angles-left"})],8,u1),lt($("a",{href:"#",class:Ft(["rounded bg-white text-gray-500 inline-flex items-center border py-2 px-4 text-sm font-medium",_.page==1?"bg-indigo-500 text-white":"hover:text-gray-500 hover:bg-gray-200"]),onClick:A[3]||(A[3]=D=>L.changePage(1))}," 1 ",2),[[bt,y.totalRecords>0]]),(U(!0),Q(Fe,null,Ze(L.pages,D=>(U(),Q(Fe,{key:D},[D>1&&D==_.page-3?(U(),Q("span",g1," ... ")):Qe("",!0),D!=1&&D!=L.pages&&D>=_.page-2&&D<=_.page+2?(U(),Q("a",{key:1,href:"#",class:Ft(["rounded bg-white text-gray-500 inline-flex items-center border py-2 px-4 text-sm font-medium",D==_.page?"bg-indigo-500 text-white":"hover:text-gray-500 hover:bg-gray-200"]),onClick:B=>L.changePage(D)},V(D),11,p1)):Qe("",!0),D<L.pages&&D==_.page+3&&D<L.pages?(U(),Q("span",m1," ... ")):Qe("",!0)],64))),128)),L.pages!=1?lt((U(),Q("a",{key:0,href:"#",class:Ft(["rounded bg-white text-gray-500 inline-flex items-center border py-2 px-4 text-sm font-medium",_.page==L.pages?"bg-indigo-500 text-white":"hover:text-gray-500 hover:bg-gray-200"]),onClick:A[4]||(A[4]=D=>L.changePage(L.pages))},V(L.pages),3)),[[bt,y.totalRecords>0]]):Qe("",!0),$("button",{class:"inline-flex items-center border py-2 px-4 my-0.5 text-xs font-medium text-gray-600 rounded bg-white hover:text-gray-500 hover:bg-gray-200 disabled:cursor-default disabled:text-gray-400",disabled:_.page==L.pages,onClick:A[5]||(A[5]=D=>L.changePage("next"))},[k1,C(M,{icon:"angles-right"})],8,f1)])):Qe("",!0)])])],64)}var w1=Jt(Fy,[["render",b1]]);const _1={name:"PsSelect",props:{dataList:{type:Array,default:[]},value:{type:Array,default:[]},theme:{type:String,default:"input-primary"},rounded:{type:String,default:"rounded"}},setup(g,{emit:A}){function y(_){let L="";for(let x=0;x<g.dataList.length;x++)if(g.dataList[x].id==_){L=g.dataList[x].name;break}return L}function S(_){let L="";for(let x=0;x<g.dataList.length;x++)if(g.dataList[x].name==_){L=g.dataList[x].id;break}A("update:value",L)}return{getValue:y,handleInput:S}}},A1=["value"];function v1(g,A,y,S,_,L){return U(),Q("select",{class:Ft(["appearance-none mt-1 block w-full text-sm shadow-sm border placeholder-slate-500 focus:outline-none focus:ring-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500",[y.theme,y.rounded]]),value:S.getValue(y.value),onChange:A[0]||(A[0]=x=>S.handleInput(x.target.value))},[(U(!0),Q(Fe,null,Ze(y.dataList,x=>(U(),Q("option",{key:x.id},V(x.name),1))),128))],42,A1)}var km=Jt(_1,[["render",v1]]);const C1={name:"PsTable",components:{PsInput:am,PsSelect:km,PsPaginator:w1,Datepicker:Xp,PsDropdown:la,PsDropdownSelect:ca,PsInputWithRightIcon:DC,PsIcon:lm,PsIcon1:EC,PsLabel:da,PsIconButton:SC,PsButton:ua},props:{columns:{type:Array,default:[]},rows:{type:Array,default:[]},showLineNumber:{type:Boolean,default:!0},perPageOptions:{type:Array,default:[10,20,50,100]},checkable:{type:Boolean,default:!1},selectedTableData:{type:Array,default:[]},searchable:{type:Boolean,default:!1},globalSearchFields:{type:Array,default:[]},globalSearchPlaceholder:{type:String,default:"Search"},searchOptions:{type:Array,default:[]},colFilterOptions:{type:Array,default:[]},sortable:{type:Boolean,default:!0}},data(){return{searchterm:"",selectedValue:0,date:"",tableData:this.rows,globalSearch:this.globalSearchFields,totalRecords:this.rows.length,pagination:{page:1,perPage:this.perPageOptions[0]},sortMethod:"",sortField:"",filterOptions:this.searchOptions,sortType:"desc",isCheckedAll:!1,clearFilter:!1,selectedItems:this.selectedTableData,searchedData:{},subOptions:{},sortedData:{},moment:MC}},computed:{filteredList(){if(this.clearFilter==!0&&(this.searchedData={}),this.tableData=this.rows,this.searchterm&&(this.tableData=this.tableData.filter(y=>{let S=!1;for(let _=0;_<this.globalSearch.length;_++)if(y[this.globalSearch[_]].toLowerCase().replace(/\s+/g," ").trim().includes(this.searchterm.toLowerCase().replace(/\s+/g," ").trim())){S=!0;break}else S=!1;return!!S})),this.searchedData){for(let y of this.searchOptions)if(y.filterType=="dropdown"&&y.checkFieldMain in this.searchedData&&y.checkFieldMain!=""&&y.checkFieldMain!=0&&this.searchedData[y.checkFieldMain]!=""&&this.searchedData[y.checkFieldMain]!=0&&(this.tableData=this.tableData.filter(S=>S[y.checkFieldMain]==this.searchedData[y.checkFieldMain])),y.filterType=="dropdown"&&"sub_options"in y&&y.sub_options.checkFieldMain in this.searchedData&&this.searchedData[y.sub_options.checkFieldMain]!=""&&this.searchedData[y.sub_options.checkFieldMain]!==0&&this.searchedData[y.checkFieldMain]!=""&&this.searchedData[y.checkFieldMain]!=0&&(this.tableData=this.tableData.filter(S=>S[y.sub_options.checkFieldMain]==this.searchedData[y.sub_options.checkFieldMain])),y.filterType=="date_range"&&y.field in this.searchedData&&y.checkFieldMain!=""&&y.checkFieldMain!=0&&this.searchedData[y.checkFieldMain]!=""&&this.searchedData[y.checkFieldMain]!=0){const S=this.searchedData[y.field][0],_=this.searchedData[y.field][1];this.tableData=this.tableData.filter(L=>{const x=new Date(L[y.field]);return S!=null&&_!=null?S<=x&&x<=_:S!=null&&_==null?S<=x:S==null&&_!=null?x<=_:!0})}}if(this.sortable==!0&&this.sortedData!=null){let y=this.columns.length;for(let S=y-1;S>=0;S--){let _=this.columns[S];_.field in this.sortedData&&(this.sortedData[_.field].type=="String"&&("relation"in _?this.tableData=this.tableData.sort((L,x)=>{let b=L[_.relation][_.relationField].toLowerCase(),f=x[_.relation][_.relationField].toLowerCase();return b<f?-1:b>f?1:0}):this.tableData=this.tableData.sort((L,x)=>{let b=L[_.field].toLowerCase(),f=x[_.field].toLowerCase();return b<f?-1:b>f?1:0}),this.sortedData[_.field].orderBy=="desc"&&(this.tableData=this.tableData.reverse())),(this.sortedData[_.field].type=="Integer"||this.sortedData[_.field].type=="Boolean")&&(this.tableData=this.tableData.sort((L,x)=>L[_.field]-x[_.field]),this.sortedData[_.field].orderBy=="desc"&&(this.tableData=this.tableData.reverse())),this.sortedData[_.field].type=="Date"&&(this.tableData=this.tableData.sort((L,x)=>new Date(L[_.field]).getTime()-new Date(x[_.field]).getTime()),this.sortType=="desc"&&(this.tableData=this.tableData.reverse())))}}this.totalRecords=this.tableData.length;const g=(this.pagination.page-1)*this.pagination.perPage,A=this.pagination.page*this.pagination.perPage;return this.tableData.slice(g,A)},isChecked(g){let A=!1,y=this.filteredList,S=!1;if(this.selectedItems!=null&&y.length==this.selectedItems.length)for(let _=0;_<y.length;_++){for(let L=0;L<this.selectedItems.length;L++)if(this.selectedItems[L].id==y[_].id){S=!0;continue}if(S==!1)break}if(this.isCheckedAll=S,this.selectedItems!=null){for(let _=0;_<this.selectedItems.length;_++)if(this.selectedItems[_].id==g.id){A=!0;break}}return this.$emit("update:selectedTableData",this.selectedItems),A},onSelectedRows(){this.isCheckedAll?this.selectedItems=this.filteredList:this.selectedItems=[],this.$emit("update:selectedTableData",{selectedRows:this.selectedItems})}},methods:{handleSorting(g){let A={},y=g.field,S=g.type;this.sortedData==null?A={orderBy:"asc",type:S}:y in this.sortedData?this.sortedData[y].orderBy=="asc"?A={orderBy:"desc",type:S}:A={orderBy:"asc",type:S}:A={orderBy:"asc",type:S},this.sortedData={},this.sortedData[y]=A}}},y1={class:"flex flex-row gap-2"},x1={key:0},D1={class:"rounded-md shadow-xs w-56"},E1={class:"pt-2 z-30"},S1={key:0},M1=j("No data yet!"),I1={key:1},T1=["onClick"],N1=["onClick"],B1={key:1},P1={class:"rounded-md shadow-xs w-56"},z1={class:"pt-2 z-30"},L1={key:0},O1=j("Please filter category first"),R1={key:1},j1=j("No data yet!"),F1={key:2},V1=["onClick"],H1=["onClick"],U1={key:2},$1={class:"grid grid-cols-4 gap-2"},q1={key:0},G1={class:"rounded-md shadow-xs w-56"},W1={class:"pt-2 z-30"},Y1={key:0},K1=j("No data yet!"),Q1={key:1},Z1=["onClick"],J1=["onClick"],X1={key:1},ex={class:"rounded-md shadow-xs w-56"},tx={class:"pt-2 z-30"},nx={key:0},ox=j("Please filter category first"),ix={key:1},rx=j("No data yet!"),sx={key:2},ax=["onClick"],lx=["onClick"],cx={key:2},dx={class:"table-auto w-full"},ux={class:"bg-primary-500 dark:bg-primary-100 text-white dark:text-black text-2xl"},hx={scope:"col"},gx={class:"flex items-center"},px=["value","checked"],mx=$("label",{for:"checkbox-all",class:"sr-only"},"checkbox",-1),fx={scope:"col",class:"py-2 px-4 text-sm font-medium flex w-auto"},kx=j("No"),bx={class:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 border-b"},wx={class:"py-2 px-4 w-4"},_x={class:"flex items-center"},Ax=["value","checked"],vx=$("label",{for:"checkbox-table-1",class:"sr-only"},"checkbox",-1),Cx={key:0},yx={key:1},xx={key:2},Dx={key:0},Ex={class:"pb-2 pt-4 px-4 text-sm font-medium whitespace-nowrap dark:text-slate-500 text-slate-400 text-center",colspan:"20"};function Sx(g,A,y,S,_,L){const x=K("ps-icon"),b=K("ps-button"),f=K("ps-dropdown-select"),M=K("ps-label"),D=K("ps-dropdown"),B=K("datepicker"),m=K("ps-input-with-right-icon"),T=K("ps-paginator");return lt((U(),be(T,{totalRecords:_.totalRecords,perPageOptions:y.perPageOptions,value:_.pagination,"onUpdate:value":A[5]||(A[5]=N=>_.pagination=N),class:"bg-gray-100 dark:bg-gray-700"},{searchLeft:z(()=>[Je(g.$slots,"import")]),search:z(()=>[$("div",y1,[y.searchable&&Object.keys(_.searchedData).length>0?(U(),be(b,{key:0,onClick:A[0]||(A[0]=N=>_.clearFilter=!0),type:"button",colors:"text-red-400",focus:"",hover:"hover:text-red-500",padding:"px-2 py-1.5",class:"mb-0.5 items-center"},{default:z(()=>[C(x,{name:"cross",class:"me-1 font-semibold"}),j(" "+V(g.$t("core__be_clear_filter")),1)]),_:1})):Qe("",!0),Je(g.$slots,"searchOptionFromStart",{},()=>[(U(!0),Q(Fe,null,Ze(y.searchOptions,(N,te)=>(U(),Q(Fe,{key:te},[N.filterType=="dropdown"?(U(),Q("div",x1,[C(D,{align:"left",class:"w-56"},{select:z(()=>[C(f,{placeholder:N.placeholder,showCenter:!0,selectedValue:N.checkFieldMain in _.searchedData?N.options.filter(O=>O[N.checkFieldOption]==_.searchedData[N.checkFieldMain])[0][N.displayField]:""},null,8,["placeholder","selectedValue"])]),list:z(()=>[$("div",D1,[$("div",E1,[N.options.length==null?(U(),Q("div",S1,[C(M,{class:"p-2 flex"},{default:z(()=>[M1]),_:1})])):(U(),Q("div",I1,[$("div",{onClick:O=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]="","sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(g.$t("core__be_all")),1)]),_:1})],8,T1),(U(!0),Q(Fe,null,Ze(N.options,(O,ce)=>(U(),Q("div",{key:ce,onClick:de=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]=O[N.checkFieldOption],"sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]=O[N.sub_options.options]:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(O[N.displayField]),1)]),_:2},1024)],8,N1))),128))]))])])]),_:2},1024)])):Qe("",!0),N.filterType=="dropdown"&&N.sub_options?(U(),Q("div",B1,[N.sub_options!=="undefined"?(U(),be(D,{key:0,align:"left",class:"w-full lg:mt-2 mt-1"},{select:z(()=>[C(f,{placeholder:N.sub_options.placeholder,showCenter:!0,selectedValue:N.sub_options.checkFieldMain in _.searchedData&&_.searchedData[N.sub_options.checkFieldMain]!=""&&_.searchedData[N.sub_options.checkFieldMain]!=0?_.subOptions[N.sub_options.options].filter(O=>O[N.sub_options.checkFieldOption]==_.searchedData[N.sub_options.checkFieldMain])[0][N.sub_options.displayField]:""},null,8,["placeholder","selectedValue"])]),list:z(()=>[$("div",P1,[$("div",z1,[N.sub_options.options in _.subOptions?_.subOptions[N.sub_options.options].length==0?(U(),Q("div",R1,[C(M,{class:"p-2 flex"},{default:z(()=>[j1]),_:1})])):(U(),Q("div",F1,[$("div",{onClick:O=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]="","sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(g.$t("core__be_all")),1)]),_:1})],8,V1),(U(!0),Q(Fe,null,Ze(_.subOptions[N.sub_options.options],(O,ce)=>(U(),Q("div",{key:ce,onClick:de=>(_.clearFilter=!1,_.searchedData[N.sub_options.checkFieldMain]=O[N.sub_options.checkFieldOption]),class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(O[N.sub_options.displayField]),1)]),_:2},1024)],8,H1))),128))])):(U(),Q("div",L1,[C(M,{class:"p-2 flex"},{default:z(()=>[O1]),_:1})]))])])]),_:2},1024)):Qe("",!0)])):Qe("",!0),N.filterType=="date_range"?(U(),Q("div",U1,[C(B,{modelValue:_.searchedData[N.field],"onUpdate:modelValue":O=>_.searchedData[N.field]=O,range:"",enableTimePicker:!1,placeholder:N.placeholder,onClick:A[1]||(A[1]=O=>_.clearFilter=!1)},null,8,["modelValue","onUpdate:modelValue","placeholder"])])):Qe("",!0)],64))),128))]),C(m,{theme:"bg-secondary-100 text-secondary-800 border-0",value:_.searchterm,"onUpdate:value":A[2]||(A[2]=N=>_.searchterm=N),class:"pb-0.5",placeholder:y.globalSearchPlaceholder},{icon:z(()=>[C(x,{name:"search"})]),_:1},8,["value","placeholder"]),Je(g.$slots,"searchOptionFromEnd")])]),searchOption:z(()=>[lt($("div",$1,[(U(!0),Q(Fe,null,Ze(y.searchOptions,(N,te)=>(U(),Q(Fe,{key:te},[N.filterType=="dropdown"?(U(),Q("div",q1,[C(D,{align:"left",class:"w-full lg:mt-2 mt-1"},{select:z(()=>[C(f,{placeholder:N.placeholder,showCenter:!0,selectedValue:N.checkFieldMain in _.searchedData&&_.searchedData[N.checkFieldMain]!=""?N.options.filter(O=>O[N.checkFieldOption]==_.searchedData[N.checkFieldMain])[0][N.displayField]:""},null,8,["placeholder","selectedValue"])]),list:z(()=>[$("div",G1,[$("div",W1,[N.options.length==null?(U(),Q("div",Y1,[C(M,{class:"p-2 flex"},{default:z(()=>[K1]),_:1})])):(U(),Q("div",Q1,[$("div",{onClick:O=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]="","sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(g.$t("core__be_all")),1)]),_:1})],8,Z1),(U(!0),Q(Fe,null,Ze(N.options,(O,ce)=>(U(),Q("div",{key:ce,onClick:de=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]=O[N.checkFieldOption],"sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]=O[N.sub_options.options]:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(O[N.displayField]),1)]),_:2},1024)],8,J1))),128))]))])])]),_:2},1024)])):Qe("",!0),N.filterType=="dropdown"&&N.sub_options?(U(),Q("div",X1,[N.sub_options!=="undefined"?(U(),be(D,{key:0,align:"left",class:"w-full lg:mt-2 mt-1"},{select:z(()=>[C(f,{placeholder:N.sub_options.placeholder,showCenter:!0,selectedValue:N.sub_options.checkFieldMain in _.searchedData&&_.searchedData[N.sub_options.checkFieldMain]!=""&&_.searchedData[N.sub_options.checkFieldMain]!=0?_.subOptions[N.sub_options.options].filter(O=>O[N.sub_options.checkFieldOption]==_.searchedData[N.sub_options.checkFieldMain])[0][N.sub_options.displayField]:""},null,8,["placeholder","selectedValue"])]),list:z(()=>[$("div",ex,[$("div",tx,[N.sub_options.options in _.subOptions?_.subOptions[N.sub_options.options].length==0?(U(),Q("div",ix,[C(M,{class:"p-2 flex"},{default:z(()=>[rx]),_:1})])):(U(),Q("div",sx,[$("div",{onClick:O=>[_.clearFilter=!1,_.searchedData[N.checkFieldMain]="","sub_options"in N?_.searchedData[N.sub_options.checkFieldMain]="":"","sub_options"in N?_.subOptions[N.sub_options.options]={}:""],class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(g.$t("core__be_all")),1)]),_:1})],8,ax),(U(!0),Q(Fe,null,Ze(_.subOptions[N.sub_options.options],(O,ce)=>(U(),Q("div",{key:ce,onClick:de=>(_.clearFilter=!1,_.searchedData[N.sub_options.checkFieldMain]=O[N.sub_options.checkFieldOption]),class:"w-56 flex py-4 px-2 hover:bg-primary-000 dark:hover:bg-primary-900 cursor-pointer items-center"},[C(M,null,{default:z(()=>[j(V(O[N.sub_options.displayField]),1)]),_:2},1024)],8,lx))),128))])):(U(),Q("div",nx,[C(M,{class:"p-2 flex"},{default:z(()=>[ox]),_:1})]))])])]),_:2},1024)):Qe("",!0)])):Qe("",!0),N.filterType=="date_range"?(U(),Q("div",cx,[C(B,{modelValue:_.searchedData[N.field],"onUpdate:modelValue":O=>_.searchedData[N.field]=O,range:"",enableTimePicker:!1,placeholder:N.placeholder,class:"mt-2 bg-green-300"},null,8,["modelValue","onUpdate:modelValue","placeholder"])])):Qe("",!0)],64))),128))],512),[[bt,y.searchable]])]),table:z(()=>[$("table",dx,[$("thead",ux,[$("tr",null,[lt($("th",hx,[$("div",gx,[$("input",{id:"checkbox-all",type:"checkbox",value:L.filteredList,checked:_.isCheckedAll,onChange:A[3]||(A[3]=N=>(_.isCheckedAll=!_.isCheckedAll,L.onSelectedRows)),class:"w-4 h-4 py-2 px-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,40,px),mx])],512),[[bt,y.checkable]]),lt($("th",fx,[Je(g.$slots,"numberCol",{},()=>[kx])],512),[[bt,y.showLineNumber]]),(U(!0),Q(Fe,null,Ze(y.columns,(N,te)=>lt((U(),Q("th",{scope:"col",key:te,class:Ft(["pt-2 px-4 text-sm font-medium whitespace-nowrap",[N.width,N.align==null?N.type=="Action"?"justify-center text-center":"justify-left text-left":N.align]])},[$("div",{class:Ft(["flex gap-2",[N.align==null?N.type=="Action"?"justify-center text-center":"justify-left text-left":N.align]])},[C(M,{textColor:"text-white",class:"mb-2"},{default:z(()=>[j(V(N.label),1)]),_:2},1024),y.sortable&&N.field!="action"?(U(),be(x,{key:0,onClick:O=>L.handleSorting(N),class:"cursor-pointer mt-2",name:N.field in _.sortedData&&_.sortedData[N.field].orderBy=="asc"?"upChervon":"downChervon"},null,8,["onClick","name"])):Qe("",!0)],2)],2)),[[bt,y.colFilterOptions.filter(O=>O.key==N.field).length==0?!0:!y.colFilterOptions.filter(O=>O.key==N.field)[0].hidden]])),128))])]),$("tbody",bx,[(U(!0),Q(Fe,null,Ze(L.filteredList,(N,te)=>(U(),Q("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",key:te},[lt($("td",wx,[$("div",_x,[lt($("input",{type:"checkbox",value:N,"onUpdate:modelValue":A[4]||(A[4]=O=>_.selectedItems=O),checked:L.isChecked,class:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,Ax),[[dC,_.selectedItems]]),vx])],512),[[bt,y.checkable]]),lt($("td",{class:"pb-2 pt-4 px-4 text-gray-900 whitespace-nowrap dark:text-white text-left w-auto"},V(te+1+_.pagination.perPage*(_.pagination.page-1)),513),[[bt,y.showLineNumber]]),(U(!0),Q(Fe,null,Ze(y.columns,(O,ce)=>lt((U(),Q("td",{key:ce,class:Ft(["pb-2 pt-4 px-4 text-gray-900 whitespace-nowrap dark:text-white",[O.width,O.align==null?O.type=="Action"?"justify-center text-center":"justify-left text-left":O.align]])},[Je(g.$slots,"tableRow",{field:O.field,row:N},()=>["relation"in O?(U(),Q("span",Cx,V(N[O.relation]?N[O.relation][O.relationField]:""),1)):O.type=="Date"?(U(),Q("span",yx,V(N[O.field]?_.moment(N[O.field]).format(g.$page.props.dateFormat):""),1)):(U(),Q("span",xx,V(N[O.field]),1))])],2)),[[bt,y.colFilterOptions.filter(de=>de.key==O.field).length==0?!0:!y.colFilterOptions.filter(de=>de.key==O.field)[0].hidden]])),128))]))),128)),L.filteredList.length==0?(U(),Q("tr",Dx,[$("td",Ex,[Je(g.$slots,"emptyRow",{},()=>[j(V(g.$t("core__be_table_no_data")),1)])])])):Qe("",!0)])])]),_:3},8,["totalRecords","perPageOptions","value"])),[[bt,y.rows.length>y.perPageOptions[0]]])}var Mx=Jt(C1,[["render",Sx]]);const Ix={name:"RatingSelected",components:{},props:{grade:{type:Number,default:0},maxStars:{type:Number,default:5},hasCounter:{type:Boolean,default:!0}},data(){return{stars:this.grade}},methods:{rate(g){typeof g=="number"&&g<=this.maxStars&&g>=0&&(this.stars=this.stars===g?g-1:g)},getRating(){return this.stars}}},Tx={class:"flex items-center"},Nx=["onClick"];function Bx(g,A,y,S,_,L){const x=K("font-awesome-icon");return U(),Q("div",Tx,[(U(!0),Q(Fe,null,Ze(y.maxStars,b=>(U(),Q("div",{onClick:f=>L.rate(b),class:Ft([{active:b<=_.stars},"star"]),key:b},[b<=_.stars?(U(),be(x,{key:0,icon:["fas","star"],class:"text-primary-500 dark:text-primaryDark-accent",size:"lg"})):(U(),be(x,{key:1,icon:["far","star"],class:"text-primary-500 dark:text-primaryDark-accent",size:"lg"}))],10,Nx))),128))])}var Px=Jt(Ix,[["render",Bx]]);function na(g,A="px"){if(!(g==null||g===""))return isNaN(g)?String(g):`${Number(g)}${A}`}const zx=Symbol(),Lx={shimmer:!0};function Ox(){const g=uC(zx,Lx);return g||hC("Skeletor is not installed on this Vue application."),g}const Rx=Ht({name:"Skeletor",props:{as:{type:String,default:"span"},circle:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},size:{type:[String,Number],default:null},width:{type:[String,Number],default:null},height:{type:[String,Number],default:null},shimmer:{type:Boolean,default:void 0}},setup(g){const A=Ox(),y=_e(()=>!g.circle&&(g.size||g.height)),S=_e(()=>!g.circle&&!g.size&&!g.height),_=_e(()=>g.shimmer!==void 0?!g.shimmer:!A.shimmer),L=_e(()=>({"vue-skeletor":!0,"vue-skeletor--rect":y.value,"vue-skeletor--text":S.value,"vue-skeletor--shimmerless":_.value,"vue-skeletor--circle":g.circle,"vue-skeletor--pill":g.pill})),x=_e(()=>{const f={};if(g.size){const M=na(g.size);f.width=M,f.height=M}return!g.size&&g.width&&(f.width=na(g.width)),!g.size&&g.height&&(f.height=na(g.height)),f}),b=S.value?"\u200C":null;return()=>Jp(g.as,{class:L.value,style:x.value},[b])}});const jx=Ht({name:"PsModelView",components:{PsModal:cm,PsLabel:da,PsLabelTitle:dm,PsLoadingDialog:TC,PsButton:ua},setup(){const g=je(),A=je();function y(){g.value.toggle(!0)}return{psmodal:g,openModal:y,psloading:A}}}),Fx={class:"flex flex-row justify-end"};function Vx(g,A,y,S,_,L){const x=K("ps-loading-dialog"),b=K("ps-label-title"),f=K("ps-label"),M=K("ps-button"),D=K("ps-modal");return U(),Q(Fe,null,[C(x,{ref:"psloading"},null,512),C(D,{ref:"psmodal",maxWidth:"350px",isClickOut:!1,class:"z-20"},{title:z(()=>[C(b,null,{default:z(()=>[j(V(g.$t("ps_model_view__title")),1)]),_:1})]),body:z(()=>[C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1}),C(f,null,{default:z(()=>[j(V(g.$t("ps_model_view__message")),1)]),_:1})]),footer:z(()=>[$("div",Fx,[C(M,{onClick:A[0]||(A[0]=B=>g.psloading.openModal())},{default:z(()=>[j(V(g.$t("ps_model_view__save")),1)]),_:1}),C(M,{onClick:A[1]||(A[1]=B=>g.psmodal.toggle(!1))},{default:z(()=>[j(V(g.$t("ps_model_view__end")),1)]),_:1})])]),_:1},512)],64)}var Hx=Jt(jx,[["render",Vx]]);class ni{static formatDate(A){const y=("0"+A.getDate()).slice(-2),S=("0"+(A.getMonth()+1)).slice(-2),_=A.getFullYear(),L=("0"+A.getHours()).slice(-2),x=("0"+A.getMinutes()).slice(-2),b=("0"+A.getSeconds()).slice(-2);return _+"-"+S+"-"+y+" "+L+":"+x+":"+b}static timeStampToDateString(A){if(A==""||A==null)return"-";let y;(A+"").length<=10?y=new Date(A*1e3):y=new Date(A);const _=["1","2","3","4","5","6","7","8","9","10","11","12"],L=y.getFullYear(),x=_[y.getMonth()],b=y.getDate(),f=y.getHours(),M=y.getMinutes(),D=y.getSeconds(),B=f<10?"0"+y.getHours():y.getHours(),m=M<10?"0"+y.getMinutes():y.getMinutes();return D<10?""+y.getSeconds():y.getSeconds(),x+"-"+b+"-"+L+" "+B+":"+m}static getTimeStampDividedByOneThousand(A){const y=A/1e3;return Math.floor(y)}static sortinUserId(A,y){return A<y?A+"_"+y:y+"_"+A}}ni.toHHMMSS=g=>{g=Number(g);const A=Math.floor(g/(3600*24)),y=Math.floor(g%(3600*24)/3600),S=Math.floor(g%3600/60),_=Math.floor(g%60),L=A>0?A+"d : ":"00d : ",x=y>0?y+"h : ":"00h : ",b=S>0?S+"m : ":"00m : ",f=_>0?_+"s ":"00s ";return L+x+b+f};function bm(g,A){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return y.length>=A?g.apply(null,y.slice(0,A).reverse()):function(){for(var S=arguments.length,_=new Array(S),L=0;L<S;L++)_[L]=arguments[L];return bm(g,A,y.concat(_))}}var wm=bm(em,3),Zn=Ht({emits:{elementClick:g=>Vt(g),left:()=>!0,right:()=>!0,heading:()=>!0},props:{headingClickable:{type:Boolean,default:!1},leftDisabled:{type:Boolean,default:!1},rightDisabled:{type:Boolean,default:!1},columnCount:{type:Number,default:7},items:{type:Array,default:()=>[]}}});const Yp=om();tm("data-v-2e128338");const Ux={class:"v3dp__heading"},$x=C("svg",{class:"v3dp__heading__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 8"},[C("g",{fill:"none","fill-rule":"evenodd"},[C("path",{stroke:"none",d:"M-9 16V-8h24v24z"}),C("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M5 0L1 4l4 4"})])],-1),qx=C("svg",{class:"v3dp__heading__icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 6 8"},[C("g",{fill:"none","fill-rule":"evenodd"},[C("path",{stroke:"none",d:"M15-8v24H-9V-8z"}),C("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M1 8l4-4-4-4"})])],-1),Gx={class:"v3dp__body"},Wx={class:"v3dp__subheading"},Yx=C("hr",{class:"v3dp__divider"},null,-1),Kx={class:"v3dp__elements"};nm();const Qx=Yp((g,A,y,S,_,L)=>(U(),be("div",{class:"v3dp__popout",style:{"--popout-column-definition":`repeat(${g.columnCount}, 1fr)`},onMousedown:A[4]||(A[4]=Sn(()=>{},["prevent"]))},[C("div",Ux,[C("button",{class:"v3dp__heading__button",disabled:g.leftDisabled,onClick:A[1]||(A[1]=Sn(x=>g.$emit("left"),["stop","prevent"]))},[Je(g.$slots,"arrow-left",{},()=>[$x])],8,["disabled"]),(U(),be(Zp(g.headingClickable?"button":"span"),{class:"v3dp__heading__center",onClick:A[2]||(A[2]=Sn(x=>g.$emit("heading"),["stop","prevent"]))},{default:Yp(()=>[Je(g.$slots,"heading")]),_:3})),C("button",{class:"v3dp__heading__button",disabled:g.rightDisabled,onClick:A[3]||(A[3]=Sn(x=>g.$emit("right"),["stop","prevent"]))},[Je(g.$slots,"arrow-right",{},()=>[qx])],8,["disabled"])]),C("div",Gx,["subheading"in g.$slots?(U(),be(Fe,{key:0},[C("div",Wx,[Je(g.$slots,"subheading")]),Yx],64)):Qe("v-if",!0),C("div",Kx,[Je(g.$slots,"body",{},()=>[(U(!0),be(Fe,null,Ze(g.items,x=>(U(),be("button",{key:x.key,disabled:x.disabled,class:{selected:x.selected},onClick:Sn(b=>g.$emit("elementClick",x.value),["stop","prevent"])},[C("span",null,V(x.display),1)],10,["disabled","onClick"]))),128))])])])],36)));function fa(g,A){A===void 0&&(A={});var y=A.insertAt;if(!(!g||typeof document=="undefined")){var S=document.head||document.getElementsByTagName("head")[0],_=document.createElement("style");_.type="text/css",y==="top"&&S.firstChild?S.insertBefore(_,S.firstChild):S.appendChild(_),_.styleSheet?_.styleSheet.cssText=g:_.appendChild(document.createTextNode(g))}}var Zx=`
.v3dp__popout[data-v-2e128338] {
  z-index: 10;
  position: absolute;
  /* bottom: 0; */
  text-align: center;
  width: 17.5em;
  background-color: var(--popout-bg-color);
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);
  padding: 8px 0 1em;
  color: var(--text-color);
}
.v3dp__popout *[data-v-2e128338] {
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
}
.v3dp__popout[data-v-2e128338] button {
  background: none;
  border: none;
  outline: none;
}
.v3dp__popout[data-v-2e128338] button:not(:disabled) {
  cursor: pointer;
}
.v3dp__heading[data-v-2e128338] {
  width: 100%;
  display: flex;
  height: var(--heading-size);
  line-height: var(--heading-size);
  font-weight: var(--heading-weight);
}
.v3dp__heading__button[data-v-2e128338] {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--heading-size);
}
button.v3dp__heading__center[data-v-2e128338]:hover,
.v3dp__heading__button[data-v-2e128338]:not(:disabled):hover {
  background-color: var(--heading-hover-color);
}
.v3dp__heading__center[data-v-2e128338] {
  flex: 1;
}
.v3dp__heading__icon[data-v-2e128338] {
  height: 12px;
  stroke: var(--arrow-color);
}
.v3dp__heading__button:disabled .v3dp__heading__icon[data-v-2e128338] {
  stroke: var(--elem-disabled-color);
}
.v3dp__subheading[data-v-2e128338],
.v3dp__elements[data-v-2e128338] {
  display: grid;
  grid-template-columns: var(--popout-column-definition);
  font-size: var(--elem-font-size);
}
.v3dp__subheading[data-v-2e128338] {
  margin-top: 1em;
}
.v3dp__divider[data-v-2e128338] {
  border: 1px solid var(--divider-color);
  border-radius: 3px;
}
.v3dp__elements[data-v-2e128338] button:disabled {
  color: var(--elem-disabled-color);
}
.v3dp__elements[data-v-2e128338] button{
  padding: 0.3em 0.6em;
}
.v3dp__elements[data-v-2e128338] button span {
  display: block;
  line-height: 1.9em;
  height: 1.8em;
  border-radius: var(--elem-border-radius);
}
.v3dp__elements[data-v-2e128338] button:not(:disabled):hover span {
  background-color: var(--elem-hover-bg-color);
  color: var(--elem-hover-color);
}
.v3dp__elements[data-v-2e128338] button.selected span {
  background-color: var(--elem-selected-bg-color);
  color: var(--elem-selected-color);
}
`;fa(Zx);Zn.render=Qx;Zn.__scopeId="data-v-2e128338";Zn.__file="src/datepicker/PickerPopup.vue";var ka=Ht({components:{PickerPopup:Zn},emits:{"update:pageDate":g=>Vt(g),select:g=>Vt(g)},props:{selected:{type:Date,required:!1},pageDate:{type:Date,required:!0},lowerLimit:{type:Date,required:!1},upperLimit:{type:Date,required:!1}},setup(g,{emit:A}){const y=_e(()=>Cy(g.pageDate)),S=_e(()=>by(g.pageDate)),_=(B,m,T)=>!m&&!T?!0:!(m&&Zt(B)<Zt(m)||T&&Zt(B)>Zt(T)),L=_e(()=>ky({start:y.value,end:S.value}).map(B=>({value:B,key:String(Zt(B)),display:Zt(B),selected:g.selected&&Zt(B)===Zt(g.selected),disabled:!_(B,g.lowerLimit,g.upperLimit)}))),x=_e(()=>{const B=Zt(y.value),m=Zt(S.value);return`${B} - ${m}`}),b=_e(()=>g.lowerLimit&&(Yi(g.lowerLimit)===Yi(g.pageDate)||ei(g.pageDate,g.lowerLimit))),f=_e(()=>g.upperLimit&&(Yi(g.upperLimit)===Yi(g.pageDate)||ti(g.pageDate,g.upperLimit)));return{years:L,heading:x,leftDisabled:b,rightDisabled:f,previousPage:()=>A("update:pageDate",im(g.pageDate,10)),nextPage:()=>A("update:pageDate",rm(g.pageDate,10))}}});function Jx(g,A,y,S,_,L){const x=K("picker-popup");return U(),be(x,{columnCount:3,leftDisabled:g.leftDisabled,rightDisabled:g.rightDisabled,items:g.years,onLeft:g.previousPage,onRight:g.nextPage,onElementClick:A[1]||(A[1]=b=>g.$emit("select",b))},{heading:z(()=>[j(V(g.heading),1)]),_:1},8,["leftDisabled","rightDisabled","items","onLeft","onRight"])}ka.render=Jx;ka.__file="src/datepicker/YearPicker.vue";var ba=Ht({components:{PickerPopup:Zn},emits:{"update:pageDate":g=>Vt(g),select:g=>Vt(g),back:()=>!0},props:{selected:{type:Date,required:!1},pageDate:{type:Date,required:!0},format:{type:String,required:!1,default:"LLL"},locale:{type:Object,required:!1},lowerLimit:{type:Date,required:!1},upperLimit:{type:Date,required:!1}},setup(g,{emit:A}){const y=_e(()=>fy(g.pageDate)),S=_e(()=>my(g.pageDate)),_=_e(()=>wm({locale:g.locale})(g.format)),L=(m,T,N)=>!T&&!N?!0:!(T&&ei(m,fm(T))||N&&ti(m,mm(N))),x=_e(()=>py({start:y.value,end:S.value}).map(m=>({value:m,display:_.value(m),key:_.value(m),selected:g.selected&&ra(g.selected,m),disabled:!L(m,g.lowerLimit,g.upperLimit)}))),b=_e(()=>Zt(y.value)),f=_e(()=>g.lowerLimit&&(Wp(g.lowerLimit,g.pageDate)||ei(g.pageDate,g.lowerLimit))),M=_e(()=>g.upperLimit&&(Wp(g.upperLimit,g.pageDate)||ti(g.pageDate,g.upperLimit)));return{months:x,heading:b,leftDisabled:f,rightDisabled:M,previousPage:()=>A("update:pageDate",im(g.pageDate,1)),nextPage:()=>A("update:pageDate",rm(g.pageDate,1))}}});function Xx(g,A,y,S,_,L){const x=K("picker-popup");return U(),be(x,{headingClickable:"",columnCount:3,items:g.months,leftDisabled:g.leftDisabled,rightDisabled:g.rightDisabled,onLeft:g.previousPage,onRight:g.nextPage,onHeading:A[1]||(A[1]=b=>g.$emit("back")),onElementClick:A[2]||(A[2]=b=>g.$emit("select",b))},{heading:z(()=>[j(V(g.heading),1)]),_:1},8,["items","leftDisabled","rightDisabled","onLeft","onRight"])}ba.render=Xx;ba.__file="src/datepicker/MonthPicker.vue";var wa=Ht({components:{PickerPopup:Zn},emits:{"update:pageDate":g=>Vt(g),select:g=>Vt(g),back:()=>!0},props:{selected:{type:Date,required:!1},pageDate:{type:Date,required:!0},format:{type:String,required:!1,default:"dd"},headingFormat:{type:String,required:!1,default:"LLLL yyyy"},weekdayFormat:{type:String,required:!1,default:"EE"},locale:{type:Object,required:!1},weekStartsOn:{type:Number,required:!1,default:1,validator:g=>typeof g=="number"&&Number.isInteger(g)&&g>=0&&g<=6},lowerLimit:{type:Date,required:!1},upperLimit:{type:Date,required:!1},disabledDates:{type:Object,required:!1}},setup(g,{emit:A}){const y=_e(()=>wm({locale:g.locale,weekStartsOn:g.weekStartsOn})),S=_e(()=>fm(g.pageDate)),_=_e(()=>mm(g.pageDate)),L=_e(()=>({start:S.value,end:_.value})),x=_e(()=>({start:mC(S.value,{weekStartsOn:g.weekStartsOn}),end:fC(_.value,{weekStartsOn:g.weekStartsOn})})),b=_e(()=>{const te=g.weekStartsOn,O=y.value(g.weekdayFormat);return Array.from(Array(7)).map((ce,de)=>(te+de)%7).map(ce=>vy(new Date,ce,{weekStartsOn:g.weekStartsOn})).map(O)}),f=(te,O,ce,de)=>{var xe,gt;return!((xe=de==null?void 0:de.dates)===null||xe===void 0)&&xe.some(wt=>$p(te,wt))||!((gt=de==null?void 0:de.predicate)===null||gt===void 0)&&gt.call(de,te)?!1:!O&&!ce?!0:!(O&&ei(te,ia(O))||ce&&ti(te,gy(ce)))},M=_e(()=>{const te=y.value(g.format);return kC(x.value).map(O=>({value:O,display:te(O),selected:g.selected&&$p(g.selected,O),disabled:!Ay(O,L.value)||!f(O,g.lowerLimit,g.upperLimit,g.disabledDates),key:y.value("yyyy-MM-dd",O)}))}),D=_e(()=>y.value(g.headingFormat)(g.pageDate)),B=_e(()=>g.lowerLimit&&(ra(g.lowerLimit,g.pageDate)||ei(g.pageDate,g.lowerLimit))),m=_e(()=>g.upperLimit&&(ra(g.upperLimit,g.pageDate)||ti(g.pageDate,g.upperLimit)));return{weekDays:b,days:M,heading:D,leftDisabled:B,rightDisabled:m,previousPage:()=>A("update:pageDate",bC(g.pageDate,1)),nextPage:()=>A("update:pageDate",wC(g.pageDate,1))}}});function eD(g,A,y,S,_,L){const x=K("picker-popup");return U(),be(x,{headingClickable:"",leftDisabled:g.leftDisabled,rightDisabled:g.rightDisabled,items:g.days,onLeft:g.previousPage,onRight:g.nextPage,onHeading:A[1]||(A[1]=b=>g.$emit("back")),onElementClick:A[2]||(A[2]=b=>g.$emit("select",b))},{heading:z(()=>[j(V(g.heading),1)]),subheading:z(()=>[(U(!0),be(Fe,null,Ze(g.weekDays,b=>(U(),be("span",{key:b},V(b),1))),128))]),_:1},8,["leftDisabled","rightDisabled","items","onLeft","onRight"])}wa.render=eD;wa.__file="src/datepicker/DayPicker.vue";function Kp(g,A){const y=g.getBoundingClientRect(),S={height:g.clientHeight,width:g.clientWidth},_=A.getBoundingClientRect();if(!(_.top>=y.top&&_.bottom<=y.top+S.height)){const x=_.top-y.top,b=_.bottom-y.bottom;Math.abs(x)<Math.abs(b)?g.scrollTop+=x:g.scrollTop+=b}}var Zi=Ht({components:{PickerPopup:Zn},emits:{select:g=>Vt(g),back:()=>!0},props:{selected:{type:Date,required:!1},pageDate:{type:Date,required:!0},visible:{type:Boolean,required:!0},disabledTime:{type:Object,required:!1}},setup(g,{emit:A}){const y=je(null),S=je(null),_=_e(()=>{var T;return(T=g.pageDate)!==null&&T!==void 0?T:g.selected}),L=je(_.value.getHours()),x=je(_.value.getMinutes());Qi(()=>g.selected,T=>{let N=0,te=0;T&&(N=T.getHours(),te=T.getMinutes()),L.value=N,x.value=te});const b=_e(()=>[...Array(24).keys()].map(T=>({value:T,date:Hp(new Date(_.value.getTime()),{hours:T,minutes:x.value,seconds:0}),selected:L.value===T,ref:je(null)}))),f=_e(()=>[...Array(60).keys()].map(T=>({value:T,date:Hp(new Date(_.value.getTime()),{hours:L.value,minutes:T,seconds:0}),selected:x.value===T,ref:je(null)}))),M=T=>{x.value=T.value,A("select",T.date)},D=()=>{const T=b.value.find(te=>{var O;return(O=te.ref.value)===null||O===void 0?void 0:O.classList.contains("selected")}),N=f.value.find(te=>{var O;return(O=te.ref.value)===null||O===void 0?void 0:O.classList.contains("selected")});T&&N&&(Kp(y.value,T.ref.value),Kp(S.value,N.ref.value))};return Qi(()=>g.visible,T=>{T&&_C(D)}),{hoursListRef:y,minutesListRef:S,hours:L,minutes:x,hoursList:b,minutesList:f,padStartZero:T=>`0${T}`.substr(-2),selectMinutes:M,isEnabled:T=>{var N,te,O,ce;return!(!((te=(N=g.disabledTime)===null||N===void 0?void 0:N.dates)===null||te===void 0)&&te.some(de=>wy(T,de)&&_y(T,de))||!((ce=(O=g.disabledTime)===null||O===void 0?void 0:O.predicate)===null||ce===void 0)&&ce.call(O,T))},scroll:D}}});const oa=om();tm("data-v-e1b37236");const tD={ref:"hoursListRef",class:"v3dp__column"},nD={ref:"minutesListRef",class:"v3dp__column"};nm();const oD=oa((g,A,y,S,_,L)=>{const x=K("picker-popup");return U(),be(x,{headingClickable:"",columnCount:2,leftDisabled:!0,rightDisabled:!0,onHeading:A[1]||(A[1]=b=>g.$emit("back"))},{heading:oa(()=>[j(V(g.padStartZero(g.hours))+":"+V(g.padStartZero(g.minutes)),1)]),body:oa(()=>[C("div",tD,[(U(!0),be(Fe,null,Ze(g.hoursList,b=>(U(),be("button",{key:b.value,ref:b.ref,class:{selected:b.selected},disabled:!g.isEnabled(b.date),onClick:Sn(f=>g.hours=b.value,["stop","prevent"])},[C("span",null,V(g.padStartZero(b.value)),1)],10,["disabled","onClick"]))),128))],512),C("div",nD,[(U(!0),be(Fe,null,Ze(g.minutesList,b=>(U(),be("button",{key:b.value,ref:b.ref,class:{selected:b.selected},disabled:!g.isEnabled(b.date),onClick:Sn(f=>g.selectMinutes(b),["stop","prevent"])},[C("span",null,V(g.padStartZero(b.value)),1)],10,["disabled","onClick"]))),128))],512)]),_:1})});var iD=`
.v3dp__column[data-v-e1b37236] {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 190px;
}
`;fa(iD);Zi.render=oD;Zi.__scopeId="data-v-e1b37236";Zi.__file="src/datepicker/Timepicker.vue";const Ki=["time","day","month","year"];var _a=Ht({components:{YearPicker:ka,MonthPicker:ba,DayPicker:wa,TimePicker:Zi},inheritAttrs:!1,props:{placeholder:{type:String,default:""},modelValue:{type:Date,required:!1},disabledDates:{type:Object,required:!1},disabledTime:{type:Object,required:!1},upperLimit:{type:Date,required:!1},lowerLimit:{type:Date,required:!1},startingView:{type:String,required:!1,default:"day",validate:g=>typeof g=="string"&&Ki.includes(g)},monthHeadingFormat:{type:String,required:!1,default:"LLLL yyyy"},monthListFormat:{type:String,required:!1,default:"LLL"},weekdayFormat:{type:String,required:!1,default:"EE"},inputFormat:{type:String,required:!1,default:"yyyy-MM-dd"},locale:{type:Object,required:!1},weekStartsOn:{type:Number,required:!1,default:1,validator:g=>[0,1,2,3,4,5,6].includes(g)},disabled:{type:Boolean,required:!1,default:!1},clearable:{type:Boolean,required:!1,default:!1},typeable:{type:Boolean,required:!1,default:!1},minimumView:{type:String,required:!1,default:"day",validate:g=>typeof g=="string"&&Ki.includes(g)}},emits:{"update:modelValue":g=>g==null||Vt(g)},setup(g,{emit:A,attrs:y}){const S=je("none"),_=je(new Date),L=je(null),x=je("");ta(()=>{const O=Up(x.value,g.inputFormat,new Date);Vt(O)&&(_.value=O)}),ta(()=>x.value=g.modelValue&&Vt(g.modelValue)?em(g.modelValue,g.inputFormat,{locale:g.locale}):"");const b=(O="none")=>{g.disabled||(S.value=O)};ta(()=>{g.disabled&&(S.value="none")});const f=O=>{_.value=O,g.minimumView==="year"?(S.value="none",A("update:modelValue",O)):S.value="month"},M=O=>{_.value=O,g.minimumView==="month"?(S.value="none",A("update:modelValue",O)):S.value="day"},D=O=>{_.value=O,g.minimumView==="day"?(S.value="none",A("update:modelValue",O)):S.value="time"},B=O=>{A("update:modelValue",O),S.value="none"},m=()=>{g.clearable&&A("update:modelValue",null)},T=O=>{const ce=O.keyCode?O.keyCode:O.which;if([27,13].includes(ce)&&L.value.blur(),g.typeable){const xe=Up(L.value.value,g.inputFormat,new Date,{locale:g.locale});Vt(xe)&&x.value.length===g.inputFormat.length&&(x.value=L.value.value,A("update:modelValue",xe))}},N=_e(()=>{const O=Ki.indexOf(g.startingView),ce=Ki.indexOf(g.minimumView);return O<ce?g.minimumView:g.startingView});return{input:x,inputRef:L,pageDate:_,renderView:b,selectYear:f,selectMonth:M,selectDay:D,selectTime:B,keyUp:T,viewShown:S,clearModelValue:m,initialView:N,log:O=>console.log(O),variables:O=>Object.fromEntries(Object.entries(O!=null?O:{}).filter(([ce,de])=>ce.startsWith("--")))}}});const rD={class:"v3dp__input_wrapper"},sD={class:"v3dp__clearable"};function aD(g,A,y,S,_,L){const x=K("year-picker"),b=K("month-picker"),f=K("day-picker"),M=K("time-picker");return U(),be("div",{class:"v3dp__datepicker",style:g.variables(g.$attrs.style)},[C("div",rD,[lt(C("input",pC({type:"text",ref:"inputRef",readonly:!g.typeable,"onUpdate:modelValue":A[1]||(A[1]=D=>g.input=D)},g.$attrs,{placeholder:g.placeholder,disabled:g.disabled,tabindex:g.disabled?-1:0,onKeyup:A[2]||(A[2]=(...D)=>g.keyUp&&g.keyUp(...D)),onBlur:A[3]||(A[3]=D=>g.renderView()),onFocus:A[4]||(A[4]=D=>g.renderView(g.initialView)),onClick:A[5]||(A[5]=D=>g.renderView(g.initialView))}),null,16,["readonly","placeholder","disabled","tabindex"]),[[gC,g.input]]),lt(C("div",sD,[Je(g.$slots,"clear",{onClear:g.clearModelValue},()=>[C("i",{onClick:A[6]||(A[6]=D=>g.clearModelValue())},"x")])],512),[[bt,g.clearable&&g.modelValue]])]),lt(C(x,{pageDate:g.pageDate,"onUpdate:pageDate":A[7]||(A[7]=D=>g.pageDate=D),selected:g.modelValue,lowerLimit:g.lowerLimit,upperLimit:g.upperLimit,onSelect:g.selectYear},null,8,["pageDate","selected","lowerLimit","upperLimit","onSelect"]),[[bt,g.viewShown==="year"]]),lt(C(b,{pageDate:g.pageDate,"onUpdate:pageDate":A[8]||(A[8]=D=>g.pageDate=D),selected:g.modelValue,onSelect:g.selectMonth,lowerLimit:g.lowerLimit,upperLimit:g.upperLimit,format:g.monthListFormat,headingFormat:g.monthHeadingFormat,locale:g.locale,onBack:A[9]||(A[9]=D=>g.viewShown="year")},null,8,["pageDate","selected","onSelect","lowerLimit","upperLimit","format","headingFormat","locale"]),[[bt,g.viewShown==="month"]]),lt(C(f,{pageDate:g.pageDate,"onUpdate:pageDate":A[10]||(A[10]=D=>g.pageDate=D),selected:g.modelValue,weekStartsOn:g.weekStartsOn,lowerLimit:g.lowerLimit,upperLimit:g.upperLimit,disabledDates:g.disabledDates,locale:g.locale,weekdayFormat:g.weekdayFormat,onSelect:g.selectDay,onBack:A[11]||(A[11]=D=>g.viewShown="month")},null,8,["pageDate","selected","weekStartsOn","lowerLimit","upperLimit","disabledDates","locale","weekdayFormat","onSelect"]),[[bt,g.viewShown==="day"]]),lt(C(M,{pageDate:g.pageDate,"onUpdate:pageDate":A[12]||(A[12]=D=>g.pageDate=D),visible:g.viewShown==="time",selected:g.modelValue,disabledTime:g.disabledTime,onSelect:g.selectTime,onBack:A[13]||(A[13]=()=>g.startingView==="time"&&g.minimumView==="time"?null:g.viewShown="day")},null,8,["pageDate","visible","selected","disabledTime","onSelect"]),[[bt,g.viewShown==="time"]])],4)}var lD=`
.v3dp__datepicker {
  --popout-bg-color: var(--vdp-bg-color, #fff);
  --box-shadow: var(
    --vdp-box-shadow,
    0 4px 10px 0 rgba(128, 144, 160, 0.1),
    0 0 1px 0 rgba(128, 144, 160, 0.81)
  );
  --text-color: var(--vdp-text-color, #000000);
  --border-radius: var(--vdp-border-radius, 3px);
  --heading-size: var(--vdp-heading-size, 2.5em); /* 40px for 16px font */
  --heading-weight: var(--vdp-heading-weight, bold);
  --heading-hover-color: var(--vdp-heading-hover-color, #eeeeee);
  --arrow-color: var(--vdp-arrow-color, currentColor);

  --elem-color: var(--vdp-elem-color, currentColor);
  --elem-disabled-color: var(--vdp-disabled-color, #d5d9e0);
  --elem-hover-color: var(--vdp-hover-color, #fff);
  --elem-hover-bg-color: var(--vdp-hover-bg-color, #0baf74);
  --elem-selected-color: var(--vdp-selected-color, #fff);
  --elem-selected-bg-color: var(--vdp-selected-bg-color, #0baf74);

  --elem-font-size: var(--vdp-elem-font-size, 0.8em);
  --elem-border-radius: var(--vdp-elem-border-radius, 3px);

  --divider-color: var(--vdp-divider-color, var(--elem-disabled-color));

  position: relative;
}
.v3dp__clearable {
  display: inline;
  position: relative;
  left: -15px;
  cursor: pointer;
}
`;fa(lD);_a.render=aD;_a.__file="src/datepicker/Datepicker.vue";const cD={name:"PsDatePicker",props:{pickedDateProps:{type:Date,default:new Date},upperDateProps:{type:Date,default:new Date},isDisabled:{type:Boolean,default:!1},isHasLimit:{type:Boolean,default:!0},isHasUpperLimit:{type:Boolean,default:!1}},components:{Datepicker:_a},setup(g){const A=je(new Date),y=je(new Date);function S(L){ni.log("**** Change Happened!"),ni.log(L)}function _(L){A.value=L}return aa(()=>{A.value=g.pickedDateProps}),{pickedDate:A,startDate:y,handleChange:S,updatePickDate:_}}},dD={key:0},uD={key:1},hD={key:2};function gD(g,A,y,S,_,L){const x=K("datepicker");return y.isHasLimit?(U(),Q("div",dD,[C(x,{class:"bg-primary-000 dark:bg-primaryDark-black p-3 lg:rounded-2xl rounded-xl w-32 text-secondary-500 dark:text-secondaryDark-white z-0",modelValue:S.pickedDate,"onUpdate:modelValue":A[0]||(A[0]=b=>S.pickedDate=b),lowerLimit:y.pickedDateProps,onChange:A[1]||(A[1]=b=>S.handleChange(b.target.value)),disabled:y.isDisabled,inputFormat:"MM-dd-yyyy",outputFormat:"MM-dd-yyyy"},null,8,["modelValue","lowerLimit","disabled"])])):y.isHasUpperLimit?(U(),Q("div",uD,[C(x,{class:"bg-primary-000 dark:bg-primaryDark-black p-3 lg:rounded-2xl rounded-xl w-32 text-secondary-500 dark:text-secondaryDark-white z-0",modelValue:S.pickedDate,"onUpdate:modelValue":A[2]||(A[2]=b=>S.pickedDate=b),upperLimit:y.upperDateProps,onChange:A[3]||(A[3]=b=>S.handleChange(b.target.value)),disabled:y.isDisabled,inputFormat:"MM-dd-yyyy",outputFormat:"MM-dd-yyyy"},null,8,["modelValue","upperLimit","disabled"])])):(U(),Q("div",hD,[C(x,{class:"bg-primary-000 dark:bg-primaryDark-black p-3 lg:rounded-2xl rounded-xl w-32 text-secondary-500 dark:text-secondaryDark-white z-0",modelValue:S.pickedDate,"onUpdate:modelValue":A[4]||(A[4]=b=>S.pickedDate=b),onChange:A[5]||(A[5]=b=>S.handleChange(b.target.value)),disabled:y.isDisabled,inputFormat:"MM-dd-yyyy",outputFormat:"MM-dd-yyyy"},null,8,["modelValue","disabled"])]))}var pD=Jt(cD,[["render",gD]]);um.register(hm,gm,pm,ty,ny);const mD={name:"ScatterChart",components:{Scatter:oy},props:{chartId:{type:String,default:"scatter-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:300},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]},chartData:{type:Object,default:()=>{}},chartOptions:{type:Object,default:()=>{}}}};function fD(g,A,y,S,_,L){const x=K("Scatter");return U(),be(x,{"chart-options":y.chartOptions,"chart-data":y.chartData,"chart-id":y.chartId,"dataset-id-key":y.datasetIdKey,plugins:y.plugins,"css-classes":y.cssClasses,styles:y.styles,width:y.width,height:y.height},null,8,["chart-options","chart-data","chart-id","dataset-id-key","plugins","css-classes","styles","width","height"])}var kD=Jt(mD,[["render",fD]]);um.register(hm,gm,pm,iy,ry);const bD={name:"PolarAreaChart",components:{PolarArea:sy},props:{chartId:{type:String,default:"polar-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:400},height:{type:Number,default:300},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]},chartData:{type:Object,default:()=>{}},chartOptions:{type:Object,default:()=>{}}}};function wD(g,A,y,S,_,L){const x=K("polar-area");return U(),be(x,{"chart-options":y.chartOptions,"chart-data":y.chartData,"chart-id":y.chartId,"dataset-id-key":y.datasetIdKey,plugins:y.plugins,"css-classes":y.cssClasses,styles:y.styles,width:y.width,height:y.height},null,8,["chart-options","chart-data","chart-id","dataset-id-key","plugins","css-classes","styles","width","height"])}var _D=Jt(bD,[["render",wD]]);const AD={name:"BaseProgress",inheritAttrs:!1,props:{color:{type:String,default:"bg-primary-500 dark:bg-primaryDark-accent"},percentage:{type:Number,default:0},rounded:{type:Boolean,default:!0},indeterminate:Boolean}},vD=["aria-valuenow"],CD={class:"flex items-center h-full"};function yD(g,A,y,S,_,L){return U(),Q("div",{class:Ft(["w-full bg-primary-000 dark:bg-backgroundDark h-2 relative overflow-hidden",[{"rounded-non":y.rounded},{indeterminate:y.indeterminate}]])},[$("div",{class:Ft(["h-full progressbar",[`${y.color}`,{"absolute top-0":y.indeterminate},{"rounded-full":y.rounded}]]),role:"progressbar",style:AC({width:`${y.percentage}%`}),"aria-valuenow":y.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[$("span",CD,[Je(g.$slots,"default",{},void 0,!0)])],14,vD)],2)}var xD=Jt(AD,[["render",yD],["__scopeId","data-v-61f9daae"]]),sa={exports:{}};(function(g,A){(function(y){const S=y.en=y.en||{};S.dictionary=Object.assign(S.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Rich Text Editor, %0":"Rich Text Editor, %0","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(y,S){g.exports=S()}(self,()=>(()=>{var y={3062:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const T=m},903:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border)
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(var(--ck-clipboard-drop-target-dot-height) * -.5);

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	// Horizontal drop target (between blocks).
	& .ck.ck-clipboard-drop-target-position {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		margin: 0;
		text-align: initial;

		& .ck-clipboard-drop-target__line {
			position: absolute;
			width: 100%;
			height: 0;
			border: 1px solid var(--ck-clipboard-drop-target-color);
			margin-top: -1px;

			&::before {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
				border-width: var(--ck-clipboard-drop-target-dot-size) 0 var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size));
				border-style: solid;
			}

			&::after {
				content: "";
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				right: calc(-1 * var(--ck-clipboard-drop-target-dot-size));
				top: 0;

				transform: translateY(-50%);
				border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
				border-width: var(--ck-clipboard-drop-target-dot-size) calc(2 * var(--ck-clipboard-drop-target-dot-size)) var(--ck-clipboard-drop-target-dot-size) 0;
				border-style: solid;
			}
		}
	}
	*/

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}
`],sourceRoot:""}]);const T=m},3143:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},4717:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const T=m},9315:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const T=m},8733:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const T=m},3508:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}


	/*
	 * Make sure the selected inline image always stays on top of its siblings.
	 * See https://github.com/ckeditor/ckeditor5/issues/9108.
	 */
	& .image.ck-widget_selected {
		z-index: 1;
	}

	& .image-inline.ck-widget_selected {
		z-index: 1;

		/*
		 * Make sure the native browser selection style is not displayed.
		 * Inline image widgets have their own styles for the selected state and
		 * leaving this up to the browser is asking for a visual collision.
		 */
		& ::selection {
			display: none;
		}
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const T=m},2640:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const T=m},5083:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},4036:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const T=m},3773:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const T=m},3689:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const T=m},1905:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},9773:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const T=m},2347:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCKA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDvDD,oCC2DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CD1ED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},7754:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical .ck-button{border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin:0;padding:var(--ck-spacing-standard);width:50%}[dir=ltr] .ck.ck-link-form_layout-vertical .ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical .ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{border:0;padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SA+CD,CA5CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAHjD,QAAS,CADT,kCAAmC,CAKnC,SAaD,CAnBA,4GAaE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAWD,CATC,wEACC,QAAS,CACT,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		border-radius: 0;
		border: 0;
		border-top: 1px solid var(--ck-color-base-border);
		width: 50%;

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			border: 0;
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},4652:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const T=m},7442:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:block}@media (hover:none){.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-tooltip{display:none}}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url:hover .ck-tooltip{opacity:1;visibility:visible}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAQC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAoBD,CCpBA,kFACC,aAqBD,CAHC,oBAnBD,kFAoBE,YAEF,CADC,CDlBA,sEAIC,cAAe,CAEf,iBAUD,CCoBD,wFAEC,SAAU,CADV,kBAED,CD3BE,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CElDA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css";

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			@mixin ck-tooltip_enabled;

			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			&:hover {
				@mixin ck-tooltip_visible;
			}

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read\u2013only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},9292:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},1613:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;height:var(--ck-insert-table-dropdown-box-height);margin:var(--ck-insert-table-dropdown-box-margin);width:var(--ck-insert-table-dropdown-box-width)}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,qCACC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAHlB,iDAAkD,CAClD,iDAAkD,CAFlD,+CAUD,CAJC,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	width: var(--ck-insert-table-dropdown-box-width);
	height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const T=m},6306:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const T=m},3881:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-color-table-focused-cell-background:rgba(158,207,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-table-focused-cell-background: hsla(208, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-table-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const T=m},6945:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},4906:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:focus .ck-tooltip,.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:focus .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{opacity:1;visibility:visible}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BCCC,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CE5BC,qDACC,aAqBD,CAHC,oBAnBD,qDAoBE,YAEF,CADC,CFvBF,6BAOC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAyBD,CApBC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEkBA,kIAEC,SAAU,CADV,kBAED,CCxCD,6BCAC,oDD0ID,CCvIE,6EACC,0DACD,CAEA,+EACC,2DAA4C,CAC5C,uEACD,CAID,qDACC,6DACD,CDhBD,6BEDC,eF2ID,CA1IA,wIEGE,qCFuIF,CA1IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAqID,CA3GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDiIA,CC9HC,yFACC,qDACD,CAEA,2FACC,sDAA4C,CAC5C,kEACD,CAID,iEACC,wDACD,CDmHA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC7IC,mDDkJD,CC/IE,2FACC,yDACD,CAEA,6FACC,0DAA4C,CAC5C,sEACD,CAID,mEACC,4DACD,CD6HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../tooltip/mixins/_tooltip.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;
	@mixin ck-tooltip_enabled;

	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: left;

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}

	&:hover,
	/* Enable toolbar button tooltips for keyboard users too. See https://github.com/ckeditor/ckeditor5/issues/5581. */
	&:focus {
		@mixin ck-tooltip_visible;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
			box-shadow: inset 0 2px 2px var($(prefix)-active-shadow);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const T=m},5332:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px;--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - var(--ck-switch-button-toggle-spacing)*2)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);transition:background .4s ease;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);margin:var(--ck-switch-button-toggle-spacing);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,mDAAoD,CACpD,qCAAsC,CACtC,gKAKD,CAGC,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDC3BA,eDoEA,CAzCA,yICvBC,qCDgED,CAzCA,2DAKE,gBAoCF,CAzCA,2DAUE,iBA+BF,CAzCA,iDAiBC,uDAAwD,CAHxD,8BAAiC,CAEjC,0CAyBD,CAtBC,2EC9CD,eD2DC,CAbA,6LC1CA,qCAAsC,CD4CpC,8CAWF,CAbA,2EASC,yDAA0D,CAD1D,gDAAiD,CAFjD,6CAA8C,CAM9C,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,+DACD,CAIF,6DExEA,kCF0EA,CAEA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating\u2013point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: 1.0769230769em;
	--ck-switch-button-toggle-spacing: 1px;
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2 * var(--ck-switch-button-toggle-spacing)
	);
}

.ck.ck-button.ck-switchbutton {
	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease;

		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			/* Leave some tiny bit of space around the inner part of the switch */
			margin: var(--ck-switch-button-toggle-spacing);
			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	&.ck-on .ck-button__toggle {
		background: var(--ck-color-switch-button-on-background);

		&:hover {
			background: var(--ck-color-switch-button-on-hover-background);
		}

		& .ck-button__toggle__inner {
			/*
			 * Move the toggle switch to the right. It will be animated.
			 */
			@mixin ck-dir ltr {
				transform: translateX( var( --ck-switch-button-translation ) );
			}

			@mixin ck-dir rtl {
				transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const T=m},6781:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#000}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,qCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(0, 0%, 0%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-table__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const T=m},5485:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBAqFD,CAnFC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UAOD,CCUA,iEACC,YACD,CDVA,oCAGC,kCAAmC,CAEnC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CEhGA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;

		/* Disable main button's tooltip when the dropdown is open. Otherwise the panel may
		partially cover the tooltip */
		&.ck-on {
			@mixin ck-tooltip_disabled;
		}
	}

	& .ck-dropdown__panel {
		/* This is to get rid of flickering when the tooltip is shown under the panel,
		which looks like the panel moves vertically a pixel down and up. */
		-webkit-backface-visibility: hidden;

		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;
			
			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},3949:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},7686:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button .ck-tooltip{display:none}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-ui/theme/components/tooltip/mixins/_tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,mBAEC,iBAUD,CARC,iDACC,qCACD,CC0BA,8DACC,YACD,CClCD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CASA,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCC7EA,eDuFA,CAVA,qHCzEC,qCDmFD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../tooltip/mixins/_tooltip.css";

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}

	/* Disable tooltips for the buttons when the button is "open" */
	&.ck-splitbutton_open > .ck-button {
		@mixin ck-tooltip_disabled;
	}
}

`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Enables the tooltip, which is the tooltip is in DOM but
 * not yet displayed.
 */
@define-mixin ck-tooltip_enabled {
	& .ck-tooltip {
		display: block;

		/*
		 * Don't display tooltips in devices which don't support :hover.
		 * In fact, it's all about iOS, which forces user to click UI elements twice to execute
		 * the primary action, when tooltips are enabled.
		 *
		 * Q: OK, but why not the following query?
		 *
		 *   @media (hover) {
		 *       display: block;
		 *   }
		 *
		 * A: Because FF does not support it and it would completely disable tooltips
		 * in that browser.
		 *
		 * More in https://github.com/ckeditor/ckeditor5/issues/920.
		 */
		@media (hover:none) {
			display: none;
		}
	}
}

/**
 * Disables the tooltip making it disappear from DOM.
 */
@define-mixin ck-tooltip_disabled {
	& .ck-tooltip {
		display: none;
	}
}

/**
 * Shows the tooltip, which is already in DOM.
 * Requires \`ck-tooltip_enabled\` first.
 */
@define-mixin ck-tooltip_visible {
	& .ck-tooltip {
		visibility: visible;
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},7339:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const T=m},9688:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-base-foreground);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-base-foreground);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},8847:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const T=m},6574:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAY1B,qBAcD,CAZC,0BARA,aAAc,CAGd,cAgBA,CAJC,yBAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	color: inherit;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;

		/* Allows dynamic coloring of the icons. */
		color: inherit;

		&:not([fill]) {
			/* Needed by FF. */
			fill: currentColor;
		}
	}
}
`],sourceRoot:""}]);const T=m},4879:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},3662:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const T=m},2577:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-spacing-medium),calc(var(--ck-font-size-base)*.6)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-spacing-medium)*-1),calc(var(--ck-font-size-base)*.6)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,yEACD,CAEA,0BCHC,eD4GD,CAzGA,2FCCE,qCDwGF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,wFAYF,CAfA,oUAOE,iGAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
			}

			@mixin ck-dir rtl {
				right: 0px;
			}

			pointer-events: none;
			transform-origin: 0 0;

			/* By default, display the label scaled down above the field. */
			transform: translate(var(--ck-spacing-medium), -6px) scale(.75);

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-spacing-medium), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-spacing-medium)), calc(0.6 * var(--ck-font-size-base))) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},1046:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,2DACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		text-align: left;
		border-radius: 0;

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},8793:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow))}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCJC,eD4ID,CAxIA,iFCAE,qCDwIF,CAxIA,qBAMC,2CAA4C,CAC5C,6CAA8C,CEb9C,oCAA8B,CFU9B,eAoID,CA9HE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EACD,CAEA,2CACC,iFAAkF,CAClF,yCACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDACD,CAEA,2CACC,iFAAkF,CAClF,4CACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: var(--ck-balloon-arrow-offset);
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: var(--ck-balloon-arrow-offset);
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},4650:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const T=m},7676:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},5868:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},6764:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck-vertical-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:var(--ck-spacing-small);content:"";position:absolute;right:-1px;top:var(--ck-spacing-small);width:0;z-index:1}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border:0;border-radius:0;border-top:1px solid var(--ck-color-base-border);margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after,[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAOA,mCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCTC,oCDaC,wCAMC,8BAA+B,CAL/B,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,2BAA4B,CAH5B,OAAQ,CAKR,SACD,CCnBD,CCAD,qDACC,kDACD,CAEA,uBACC,+BAkED,CAhEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA6CF,CA3CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAID,iGAMC,QAAS,CADT,eAAgB,CAEhB,gDAAiD,CAJjD,kCAAmC,CADnC,kCAkBD,CApBA,0OAcE,aAMF,CAGC,yMACC,kDACD,CDpEF",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button::after {
	content: "";
	width: 0;
	position: absolute;
	right: -1px;
	top: var(--ck-spacing-small);
	bottom: var(--ck-spacing-small);
	z-index: 1;
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button::after {
			content: "";
			width: 0;
			position: absolute;
			right: -1px;
			top: var(--ck-spacing-small);
			bottom: var(--ck-spacing-small);
			z-index: 1;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);

			border-radius: 0;
			border: 0;
			border-top: 1px solid var(--ck-color-base-border);

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}

		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}
}
`],sourceRoot:""}]);const T=m},9695:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const T=m},5542:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border:0;border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eD0FD,CA7FA,qECOE,qCDsFF,CA7FA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAyFD,CAtFC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAgBD,CAbC,0DAWC,QAAS,CAHT,eAAgB,CAHhB,QAAS,CAHT,UAUD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAvFF,qCA2FE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;

			/* Items in a vertical toolbar span the entire width so any border is pointless. */
			border: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},3332:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{-webkit-backface-visibility:hidden;pointer-events:none;position:absolute}.ck.ck-tooltip{display:none;opacity:0;visibility:hidden;z-index:var(--ck-z-modal)}.ck.ck-tooltip .ck-tooltip__text{display:inline-block}.ck.ck-tooltip .ck-tooltip__text:after{content:"";height:0;width:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%;top:0;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{background:var(--ck-color-tooltip-background);color:var(--ck-color-tooltip-text);font-size:.9em;left:-50%;line-height:1.5;padding:var(--ck-spacing-small) var(--ck-spacing-medium);position:relative}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%;transition:opacity .2s ease-in-out .2s}.ck.ck-tooltip.ck-tooltip_s,.ck.ck-tooltip.ck-tooltip_se,.ck.ck-tooltip.ck-tooltip_sw{bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after,.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{border-color:transparent transparent var(--ck-color-tooltip-background) transparent;border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);top:calc(var(--ck-tooltip-arrow-size)*-1 + 1px);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_sw{left:auto;right:50%}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text{left:auto;right:calc(var(--ck-tooltip-arrow-size)*-2)}.ck.ck-tooltip.ck-tooltip_sw .ck-tooltip__text:after{left:auto;right:0}.ck.ck-tooltip.ck-tooltip_se{left:50%;right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text{left:calc(var(--ck-tooltip-arrow-size)*-2);right:auto}.ck.ck-tooltip.ck-tooltip_se .ck-tooltip__text:after{left:0;right:auto;transform:translateX(50%)}.ck.ck-tooltip.ck-tooltip_n{top:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{border-color:var(--ck-color-tooltip-background) transparent transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);bottom:calc(var(--ck-tooltip-arrow-size)*-1);transform:translateX(-50%)}.ck.ck-tooltip.ck-tooltip_e{left:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_e .ck-tooltip__text:after{border-color:transparent var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;left:calc(var(--ck-tooltip-arrow-size)*-1);top:calc(50% - var(--ck-tooltip-arrow-size)*1)}.ck.ck-tooltip.ck-tooltip_w{left:auto;right:calc(100% + var(--ck-tooltip-arrow-size));top:50%}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text{left:0;transform:translateY(-50%)}.ck.ck-tooltip.ck-tooltip_w .ck-tooltip__text:after{border-color:transparent transparent transparent var(--ck-color-tooltip-background);border-width:var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);left:100%;top:calc(50% - var(--ck-tooltip-arrow-size)*1)}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,sDASC,kCAAmC,CAJnC,mBAAoB,CAHpB,iBAQD,CAEA,eAIC,YAAa,CADb,SAAU,CADV,iBAAkB,CAGlB,yBAWD,CATC,iCACC,oBAOD,CALC,uCACC,UAAW,CAEX,QAAS,CADT,OAED,CCxBF,MACC,2BACD,CAEA,eACC,QAAS,CAMT,KAAM,CAON,sCAwKD,CAtKC,iCChBA,eDqCA,CArBA,yGCZC,qCDiCD,CArBA,iCAOC,6CAA8C,CAF9C,kCAAmC,CAFnC,cAAe,CAMf,SAAU,CALV,eAAgB,CAEhB,wDAAyD,CAEzD,iBAaD,CAVC,uCAOC,kBAAmB,CACnB,QAAS,CAFT,sCAGD,CAYD,sFAGC,4CAA+C,CAC/C,0BASD,CAPC,8JAIC,mFAAoF,CACpF,qGAAsG,CAHtG,+CAAkD,CAClD,0BAGD,CAaD,6BAEC,SAAU,CADV,SAYD,CATC,+CACC,SAAU,CACV,2CACD,CAEA,qDACC,SAAU,CACV,OACD,CAYD,6BACC,QAAS,CACT,UAYD,CAVC,+CAEC,0CAA8C,CAD9C,UAED,CAEA,qDAEC,MAAO,CADP,UAAW,CAEX,yBACD,CAYD,4BACC,yCAA4C,CAC5C,2BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,4CAA+C,CAC/C,0BAGD,CAUD,4BACC,8CAA+C,CAC/C,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,0CAA6C,CAC7C,8CAGD,CAWF,4BAEC,SAAU,CADV,+CAAgD,CAEhD,OAaD,CAXC,8CACC,MAAO,CACP,0BAQD,CANC,oDAGC,mFAAoF,CACpF,qGAAsG,CAHtG,SAAU,CACV,8CAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-tooltip,
.ck.ck-tooltip .ck-tooltip__text::after {
	position: absolute;

	/* Without this, hovering the tooltip could keep it visible. */
	pointer-events: none;

	/* This is to get rid of flickering when transitioning opacity in Chrome.
	It's weird but it works. */
	-webkit-backface-visibility: hidden;
}

.ck.ck-tooltip {
	/* Tooltip is hidden by default. */
	visibility: hidden;
	opacity: 0;
	display: none;
	z-index: var(--ck-z-modal);

	& .ck-tooltip__text {
		display: inline-block;

		&::after {
			content: "";
			width: 0;
			height: 0;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-tooltip-arrow-size: 5px;
}

.ck.ck-tooltip {
	left: 50%;

	/*
	 * Prevent blurry tooltips in LoDPI environments.
	 * See https://github.com/ckeditor/ckeditor5/issues/1802.
	 */
	top: 0;

	/*
	 * For the transition to work, the tooltip must be controlled
	 * using visibility+opacity. A delay prevents a "tooltip avalanche"
	 * i.e. when scanning the toolbar with mouse cursor.
	 */
	transition: opacity .2s ease-in-out .2s;

	& .ck-tooltip__text {
		@mixin ck-rounded-corners;

		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		background: var(--ck-color-tooltip-background);
		position: relative;
		left: -50%;

		&::after {
			/*
			 * For the transition to work, the tooltip must be controlled
			 * using visibility+opacity. A delay prevents a "tooltip avalanche"
			 * i.e. when scanning the toolbar with mouse cursor.
			 */
			transition: opacity .2s ease-in-out .2s;
			border-style: solid;
			left: 50%;
		}
	}

	/**
	 * A class that displays the tooltip south of the element.
	 *
	 *       [element]
	 *           ^
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 */
	&.ck-tooltip_s,
	&.ck-tooltip_sw,
	&.ck-tooltip_se {
		bottom: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( 100% );

		& .ck-tooltip__text::after {
			/* 1px addresses gliches in rendering causing gap between the triangle and the text */
			top: calc(-1 * var(--ck-tooltip-arrow-size) + 1px);
			transform: translateX( -50% );
			border-color: transparent transparent var(--ck-color-tooltip-background) transparent;
			border-width: 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip south-west of the element.
	 *
	 *        [element]
	 *            ^
	 *  +-----------+
	 *  |  Tooltip  |
	 *  +-----------+
	 */

	&.ck-tooltip_sw {
		right: 50%;
		left: auto;

		& .ck-tooltip__text {
			left: auto;
			right: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			left: auto;
			right: 0;
		}
	}

	/**
	 * A class that displays the tooltip south-east of the element.
	 *
	 *  [element]
	 *      ^
	 *    +-----------+
	 *    |  Tooltip  |
	 *    +-----------+
	 */
	&.ck-tooltip_se {
		left: 50%;
		right: auto;

		& .ck-tooltip__text {
			right: auto;
			left: calc( -2 * var(--ck-tooltip-arrow-size));
		}

		& .ck-tooltip__text::after {
			right: auto;
			left: 0;
			transform: translateX( 50% );
		}
	}

	/**
	 * A class that displays the tooltip north of the element.
	 *
	 *     +-----------+
	 *     |  Tooltip  |
	 *     +-----------+
	 *           V
	 *       [element]
	 */
	&.ck-tooltip_n {
		top: calc(-1 * var(--ck-tooltip-arrow-size));
		transform: translateY( -100% );

		& .ck-tooltip__text::after {
			bottom: calc(-1 * var(--ck-tooltip-arrow-size));
			transform: translateX( -50% );
			border-color: var(--ck-color-tooltip-background) transparent transparent transparent;
			border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size);
		}
	}

	/**
	 * A class that displays the tooltip east of the element.
	 *
	 *                +----------+
	 *    [element] < |   east   |
	 *                +----------+
	 */
	&.ck-tooltip_e {
		left: calc(100% + var(--ck-tooltip-arrow-size));
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: calc(-1 * var(--ck-tooltip-arrow-size));
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent var(--ck-color-tooltip-background) transparent transparent;
				border-width: var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0;
			}
		}
	}

	/**
	 * A class that displays the tooltip west of the element.
	 *
	 *    +----------+
	 *    |   west   | > [element]
	 *    +----------+
	 */
	&.ck-tooltip_w {
		right: calc(100% + var(--ck-tooltip-arrow-size));
		left: auto;
		top: 50%;

		& .ck-tooltip__text {
			left: 0;
			transform: translateY( -50% );

			&::after {
				left: 100%;
				top: calc(50% - 1 * var(--ck-tooltip-arrow-size));
				border-color: transparent transparent transparent var(--ck-color-tooltip-background);
				border-width: var(--ck-tooltip-arrow-size) 0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const T=m},4793:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:208,79%,51%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#bcdefb;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-off-hover-background:#a3a3a3;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#579e3d;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAgD,CAChD,8BAAmD,CACnD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAmD,CACnD,oCAAuD,CACvD,6BAAkD,CAIlD,+CAAwD,CACxD,qEAA+E,CAC/E,qCAAwD,CACxD,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAA+D,CAC/D,mDAAgE,CAChE,+CAA6D,CAC7D,yDAA8D,CAE9D,uCAAuD,CACvD,6CAA4D,CAC5D,8CAA4D,CAC5D,0CAAyD,CACzD,gDAA8D,CAE9D,+DAAsE,CACtE,iDAAkE,CAClE,kDAAkE,CAClE,8CAA+D,CAC/D,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA4D,CAC5D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAmE,CACnE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,+BAAiD,CACjD,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,wCAAwD,CACxD,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,gEAAuE,CACvE,4EAAiF,CACjF,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CCpGhE,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJoGD,CI9FA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(0, 0%, 77%);
	--ck-color-base-action: 									hsl(104, 44%, 48%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(208, 88%, 52%);
	--ck-color-base-active-focus:								hsl(208, 88%, 47%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						208, 79%, 51%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(207, 89%, 86%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 90%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 85%);
	--ck-color-button-default-active-shadow: 					hsl(0, 0%, 75%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(0, 0%, 87%);
	--ck-color-button-on-hover-background: 						hsl(0, 0%, 77%);
	--ck-color-button-on-active-background: 					hsl(0, 0%, 73%);
	--ck-color-button-on-active-shadow: 						hsl(0, 0%, 63%);
	--ck-color-button-on-disabled-background: 					hsl(0, 0%, 87%);

	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 44%, 43%);
	--ck-color-button-action-active-background: 				hsl(104, 44%, 41%);
	--ck-color-button-action-active-shadow: 					hsl(104, 44%, 36%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 69%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 64%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 44%, 43%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									hsl(0, 0%, 78%);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							hsl(0, 0%, 78%);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-base-active);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-base-active-focus);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-foreground);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const T=m},3488:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const T=m},8506:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const T=m},4921:(x,b,f)=>{f.d(b,{Z:()=>T});var M=f(1799),D=f.n(M),B=f(2609),m=f.n(B)()(D());m.push([x.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const T=m},2609:x=>{x.exports=function(b){var f=[];return f.toString=function(){return this.map(function(M){var D=b(M);return M[2]?"@media ".concat(M[2]," {").concat(D,"}"):D}).join("")},f.i=function(M,D,B){typeof M=="string"&&(M=[[null,M,""]]);var m={};if(B)for(var T=0;T<this.length;T++){var N=this[T][0];N!=null&&(m[N]=!0)}for(var te=0;te<M.length;te++){var O=[].concat(M[te]);B&&m[O[0]]||(D&&(O[2]?O[2]="".concat(D," and ").concat(O[2]):O[2]=D),f.push(O))}},f}},1799:x=>{function b(M,D){return function(B){if(Array.isArray(B))return B}(M)||function(B,m){var T=B&&(typeof Symbol!="undefined"&&B[Symbol.iterator]||B["@@iterator"]);if(T!=null){var N,te,O=[],ce=!0,de=!1;try{for(T=T.call(B);!(ce=(N=T.next()).done)&&(O.push(N.value),!m||O.length!==m);ce=!0);}catch(xe){de=!0,te=xe}finally{try{ce||T.return==null||T.return()}finally{if(de)throw te}}return O}}(M,D)||function(B,m){if(!!B){if(typeof B=="string")return f(B,m);var T=Object.prototype.toString.call(B).slice(8,-1);if(T==="Object"&&B.constructor&&(T=B.constructor.name),T==="Map"||T==="Set")return Array.from(B);if(T==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(T))return f(B,m)}}(M,D)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function f(M,D){(D==null||D>M.length)&&(D=M.length);for(var B=0,m=new Array(D);B<D;B++)m[B]=M[B];return m}x.exports=function(M){var D=b(M,4),B=D[1],m=D[3];if(!m)return B;if(typeof btoa=="function"){var T=btoa(unescape(encodeURIComponent(JSON.stringify(m)))),N="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(T),te="/*# ".concat(N," */"),O=m.sources.map(function(ce){return"/*# sourceURL=".concat(m.sourceRoot||"").concat(ce," */")});return[B].concat(O).concat([te]).join(`
`)}return[B].join(`
`)}},6062:(x,b,f)=>{var M,D=function(){return M===void 0&&(M=Boolean(window&&document&&document.all&&!window.atob)),M},B=function(){var ee={};return function(ne){if(ee[ne]===void 0){var ae=document.querySelector(ne);if(window.HTMLIFrameElement&&ae instanceof window.HTMLIFrameElement)try{ae=ae.contentDocument.head}catch{ae=null}ee[ne]=ae}return ee[ne]}}(),m=[];function T(ee){for(var ne=-1,ae=0;ae<m.length;ae++)if(m[ae].identifier===ee){ne=ae;break}return ne}function N(ee,ne){for(var ae={},ke=[],Ae=0;Ae<ee.length;Ae++){var ve=ee[Ae],Ce=ne.base?ve[0]+ne.base:ve[0],oe=ae[Ce]||0,tt="".concat(Ce," ").concat(oe);ae[Ce]=oe+1;var Ut=T(tt),ze={css:ve[1],media:ve[2],sourceMap:ve[3]};Ut!==-1?(m[Ut].references++,m[Ut].updater(ze)):m.push({identifier:tt,updater:fe(ze,ne),references:1}),ke.push(tt)}return ke}function te(ee){var ne=document.createElement("style"),ae=ee.attributes||{};if(ae.nonce===void 0){var ke=f.nc;ke&&(ae.nonce=ke)}if(Object.keys(ae).forEach(function(ve){ne.setAttribute(ve,ae[ve])}),typeof ee.insert=="function")ee.insert(ne);else{var Ae=B(ee.insert||"head");if(!Ae)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Ae.appendChild(ne)}return ne}var O,ce=(O=[],function(ee,ne){return O[ee]=ne,O.filter(Boolean).join(`
`)});function de(ee,ne,ae,ke){var Ae=ae?"":ke.media?"@media ".concat(ke.media," {").concat(ke.css,"}"):ke.css;if(ee.styleSheet)ee.styleSheet.cssText=ce(ne,Ae);else{var ve=document.createTextNode(Ae),Ce=ee.childNodes;Ce[ne]&&ee.removeChild(Ce[ne]),Ce.length?ee.insertBefore(ve,Ce[ne]):ee.appendChild(ve)}}function xe(ee,ne,ae){var ke=ae.css,Ae=ae.media,ve=ae.sourceMap;if(Ae?ee.setAttribute("media",Ae):ee.removeAttribute("media"),ve&&typeof btoa!="undefined"&&(ke+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ve))))," */")),ee.styleSheet)ee.styleSheet.cssText=ke;else{for(;ee.firstChild;)ee.removeChild(ee.firstChild);ee.appendChild(document.createTextNode(ke))}}var gt=null,wt=0;function fe(ee,ne){var ae,ke,Ae;if(ne.singleton){var ve=wt++;ae=gt||(gt=te(ne)),ke=de.bind(null,ae,ve,!1),Ae=de.bind(null,ae,ve,!0)}else ae=te(ne),ke=xe.bind(null,ae,ne),Ae=function(){(function(Ce){if(Ce.parentNode===null)return!1;Ce.parentNode.removeChild(Ce)})(ae)};return ke(ee),function(Ce){if(Ce){if(Ce.css===ee.css&&Ce.media===ee.media&&Ce.sourceMap===ee.sourceMap)return;ke(ee=Ce)}else Ae()}}x.exports=function(ee,ne){(ne=ne||{}).singleton||typeof ne.singleton=="boolean"||(ne.singleton=D());var ae=N(ee=ee||[],ne);return function(ke){if(ke=ke||[],Object.prototype.toString.call(ke)==="[object Array]"){for(var Ae=0;Ae<ae.length;Ae++){var ve=T(ae[Ae]);m[ve].references--}for(var Ce=N(ke,ne),oe=0;oe<ae.length;oe++){var tt=T(ae[oe]);m[tt].references===0&&(m[tt].updater(),m.splice(tt,1))}ae=Ce}}}}},S={};function _(x){var b=S[x];if(b!==void 0)return b.exports;var f=S[x]={id:x,exports:{}};return y[x](f,f.exports,_),f.exports}_.n=x=>{var b=x&&x.__esModule?()=>x.default:()=>x;return _.d(b,{a:b}),b},_.d=(x,b)=>{for(var f in b)_.o(b,f)&&!_.o(x,f)&&Object.defineProperty(x,f,{enumerable:!0,get:b[f]})},_.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),_.o=(x,b)=>Object.prototype.hasOwnProperty.call(x,b),_.nc=void 0;var L={};return(()=>{_.d(L,{default:()=>ea});const x=function(){return function i(){i.called=!0}};class b{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=x(),this.off=x()}}const f=new Array(256).fill().map((i,e)=>("0"+e.toString(16)).slice(-2));function M(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+f[i>>0&255]+f[i>>8&255]+f[i>>16&255]+f[i>>24&255]+f[e>>0&255]+f[e>>8&255]+f[e>>16&255]+f[e>>24&255]+f[t>>0&255]+f[t>>8&255]+f[t>>16&255]+f[t>>24&255]+f[n>>0&255]+f[n>>8&255]+f[n>>16&255]+f[n>>24&255]}const D={get(i){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function B(i,e){const t=D.get(e.priority);for(let n=0;n<i.length;n++)if(D.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}class m extends Error{constructor(e,t,n){super(function(o,r){const s=new WeakSet,a=(d,u)=>{if(typeof u=="object"&&u!==null){if(s.has(u))return`[object ${u.constructor.name}]`;s.add(u)}return u},l=r?` ${JSON.stringify(r,a)}`:"",c=te(o);return o+l+c}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new m(e.message,t);throw n.stack=e.stack,n}}function T(i,e){console.warn(...O(i,e))}function N(i,e){console.error(...O(i,e))}function te(i){return`
Read more: https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html#error-${i}`}function O(i,e){const t=te(i);return e?[i,e,t]:[i,t]}const ce="34.2.0",de=typeof window=="object"?window:_.g;if(de.CKEDITOR_VERSION)throw new m("ckeditor-duplicated-modules",null);de.CKEDITOR_VERSION=ce;const xe=Symbol("listeningTo"),gt=Symbol("emitterId"),wt={on(i,e,t={}){this.listenTo(this,i,e,t)},once(i,e,t){let n=!1;this.listenTo(this,i,function(o,...r){n||(n=!0,o.off(),e.call(this,o,...r))},t)},off(i,e){this.stopListening(this,i,e)},listenTo(i,e,t,n={}){let o,r;this[xe]||(this[xe]={});const s=this[xe];ne(i)||ee(i);const a=ne(i);(o=s[a])||(o=s[a]={emitter:i,callbacks:{}}),(r=o.callbacks[e])||(r=o.callbacks[e]=[]),r.push(t),function(l,c,d,u,h){c._addEventListener?c._addEventListener(d,u,h):l._addEventListener.call(c,d,u,h)}(this,i,e,t,n)},stopListening(i,e,t){const n=this[xe];let o=i&&ne(i);const r=n&&o&&n[o],s=r&&e&&r.callbacks[e];if(!(!n||i&&!r||e&&!s))if(t)Ce(this,i,e,t),s.indexOf(t)!==-1&&(s.length===1?delete r.callbacks[e]:Ce(this,i,e,t));else if(s){for(;t=s.pop();)Ce(this,i,e,t);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(i,e);delete n[o]}else{for(o in n)this.stopListening(n[o].emitter);delete this[xe]}},fire(i,...e){try{const t=i instanceof b?i:new b(this,i),n=t.name;let o=Ae(this,n);if(t.path.push(this),o){const r=[t,...e];o=Array.from(o);for(let s=0;s<o.length&&(o[s].callback.apply(this,r),t.off.called&&(delete t.off.called,this._removeEventListener(n,o[s].callback)),!t.stop.called);s++);}if(this._delegations){const r=this._delegations.get(n),s=this._delegations.get("*");r&&ve(r,t,e),s&&ve(s,t,e)}return t.return}catch(t){m.rethrowUnexpectedError(t,this)}},delegate(...i){return{to:(e,t)=>{this._delegations||(this._delegations=new Map),i.forEach(n=>{const o=this._delegations.get(n);o?o.set(e,t):this._delegations.set(n,new Map([[e,t]]))})}}},stopDelegating(i,e){if(this._delegations)if(i)if(e){const t=this._delegations.get(i);t&&t.delete(e)}else this._delegations.delete(i);else this._delegations.clear()},_addEventListener(i,e,t){(function(r,s){const a=ae(r);if(a[s])return;let l=s,c=null;const d=[];for(;l!==""&&!a[l];)a[l]={callbacks:[],childEvents:[]},d.push(a[l]),c&&a[l].childEvents.push(c),c=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const u of d)u.callbacks=a[l].callbacks.slice();a[l].childEvents.push(c)}})(this,i);const n=ke(this,i),o={callback:e,priority:D.get(t.priority)};for(const r of n)B(r,o)},_removeEventListener(i,e){const t=ke(this,i);for(const n of t)for(let o=0;o<n.length;o++)n[o].callback==e&&(n.splice(o,1),o--)}},fe=wt;function ee(i,e){i[gt]||(i[gt]=e||M())}function ne(i){return i[gt]}function ae(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function ke(i,e){const t=ae(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=ke(i,t.childEvents[o]);n=n.concat(r)}return n}function Ae(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Ae(i,e.substr(0,e.lastIndexOf(":"))):null}function ve(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new b(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function Ce(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}const oe=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},tt=typeof Xo=="object"&&Xo&&Xo.Object===Object&&Xo;var Ut=typeof self=="object"&&self&&self.Object===Object&&self;const ze=tt||Ut||Function("return this")(),pt=ze.Symbol;var An=Object.prototype,Mn=An.hasOwnProperty,Xt=An.toString,$t=pt?pt.toStringTag:void 0;const en=function(i){var e=Mn.call(i,$t),t=i[$t];try{i[$t]=void 0;var n=!0}catch{}var o=Xt.call(i);return n&&(e?i[$t]=t:delete i[$t]),o};var In=Object.prototype.toString;const Tn=function(i){return In.call(i)};var un=pt?pt.toStringTag:void 0;const nt=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":un&&un in Object(i)?en(i):Tn(i)},_t=function(i){if(!oe(i))return!1;var e=nt(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},tn=ze["__core-js_shared__"];var Nn=function(){var i=/[^.]+$/.exec(tn&&tn.keys&&tn.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Jn=function(i){return!!Nn&&Nn in i};var Bn=Function.prototype.toString;const I=function(i){if(i!=null){try{return Bn.call(i)}catch{}try{return i+""}catch{}}return""};var W=/^\[object .+?Constructor\]$/,G=Function.prototype,ue=Object.prototype,he=G.toString,Z=ue.hasOwnProperty,mt=RegExp("^"+he.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const De=function(i){return!(!oe(i)||Jn(i))&&(_t(i)?mt:W).test(I(i))},ct=function(i,e){return i==null?void 0:i[e]},ot=function(i,e){var t=ct(i,e);return De(t)?t:void 0},X=function(){try{var i=ot(Object,"defineProperty");return i({},"",{}),i}catch{}}(),qt=function(i,e,t){e=="__proto__"&&X?X(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t},Pn=function(i,e){return i===e||i!=i&&e!=e};var Am=Object.prototype.hasOwnProperty;const Ji=function(i,e,t){var n=i[e];Am.call(i,e)&&Pn(n,t)&&(t!==void 0||e in i)||qt(i,e,t)},Xn=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,s=e.length;++r<s;){var a=e[r],l=n?n(t[a],i[a],a,t,i):void 0;l===void 0&&(l=i[a]),o?qt(t,a,l):Ji(t,a,l)}return t},zn=function(i){return i},vm=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Aa=Math.max;const Cm=function(i,e,t){return e=Aa(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=Aa(n.length-e,0),s=Array(r);++o<r;)s[o]=n[e+o];o=-1;for(var a=Array(e+1);++o<e;)a[o]=n[o];return a[e]=t(s),vm(i,this,a)}},ym=function(i){return function(){return i}},xm=X?function(i,e){return X(i,"toString",{configurable:!0,enumerable:!1,value:ym(e),writable:!0})}:zn;var Dm=Date.now;const Em=function(i){var e=0,t=0;return function(){var n=Dm(),o=16-(n-t);if(t=n,o>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(xm),Sm=function(i,e){return Em(Cm(i,e,zn),i+"")},va=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991},oi=function(i){return i!=null&&va(i.length)&&!_t(i)};var Mm=/^(?:0|[1-9]\d*)$/;const Xi=function(i,e){var t=typeof i;return!!(e=e==null?9007199254740991:e)&&(t=="number"||t!="symbol"&&Mm.test(i))&&i>-1&&i%1==0&&i<e},Im=function(i,e,t){if(!oe(t))return!1;var n=typeof e;return!!(n=="number"?oi(t)&&Xi(e,t.length):n=="string"&&e in t)&&Pn(t[e],i)},Ca=function(i){return Sm(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,s=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&Im(t[0],t[1],s)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var a=t[n];a&&i(e,a,n,r)}return e})},Tm=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},Mt=function(i){return i!=null&&typeof i=="object"},ya=function(i){return Mt(i)&&nt(i)=="[object Arguments]"};var xa=Object.prototype,Nm=xa.hasOwnProperty,Bm=xa.propertyIsEnumerable;const er=ya(function(){return arguments}())?ya:function(i){return Mt(i)&&Nm.call(i,"callee")&&!Bm.call(i,"callee")},At=Array.isArray,Pm=function(){return!1};var Da=A&&!A.nodeType&&A,Ea=Da&&!0&&g&&!g.nodeType&&g,Sa=Ea&&Ea.exports===Da?ze.Buffer:void 0;const Mo=(Sa?Sa.isBuffer:void 0)||Pm;var Ve={};Ve["[object Float32Array]"]=Ve["[object Float64Array]"]=Ve["[object Int8Array]"]=Ve["[object Int16Array]"]=Ve["[object Int32Array]"]=Ve["[object Uint8Array]"]=Ve["[object Uint8ClampedArray]"]=Ve["[object Uint16Array]"]=Ve["[object Uint32Array]"]=!0,Ve["[object Arguments]"]=Ve["[object Array]"]=Ve["[object ArrayBuffer]"]=Ve["[object Boolean]"]=Ve["[object DataView]"]=Ve["[object Date]"]=Ve["[object Error]"]=Ve["[object Function]"]=Ve["[object Map]"]=Ve["[object Number]"]=Ve["[object Object]"]=Ve["[object RegExp]"]=Ve["[object Set]"]=Ve["[object String]"]=Ve["[object WeakMap]"]=!1;const zm=function(i){return Mt(i)&&va(i.length)&&!!Ve[nt(i)]},tr=function(i){return function(e){return i(e)}};var Ma=A&&!A.nodeType&&A,Io=Ma&&!0&&g&&!g.nodeType&&g,nr=Io&&Io.exports===Ma&&tt.process;const eo=function(){try{var i=Io&&Io.require&&Io.require("util").types;return i||nr&&nr.binding&&nr.binding("util")}catch{}}();var Ia=eo&&eo.isTypedArray;const or=Ia?tr(Ia):zm;var Lm=Object.prototype.hasOwnProperty;const Ta=function(i,e){var t=At(i),n=!t&&er(i),o=!t&&!n&&Mo(i),r=!t&&!n&&!o&&or(i),s=t||n||o||r,a=s?Tm(i.length,String):[],l=a.length;for(var c in i)!e&&!Lm.call(i,c)||s&&(c=="length"||o&&(c=="offset"||c=="parent")||r&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||Xi(c,l))||a.push(c);return a};var Om=Object.prototype;const ir=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||Om)},Rm=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var jm=Object.prototype.hasOwnProperty;const Fm=function(i){if(!oe(i))return Rm(i);var e=ir(i),t=[];for(var n in i)(n!="constructor"||!e&&jm.call(i,n))&&t.push(n);return t},to=function(i){return oi(i)?Ta(i,!0):Fm(i)},To=Ca(function(i,e){Xn(e,to(e),i)}),ii=Symbol("observableProperties"),ri=Symbol("boundObservables"),si=Symbol("boundProperties"),no=Symbol("decoratedMethods"),Na=Symbol("decoratedOriginal"),rr={set(i,e){if(oe(i))return void Object.keys(i).forEach(n=>{this.set(n,i[n])},this);Ba(this);const t=this[ii];if(i in this&&!t.has(i))throw new m("observable-set-cannot-override",this);Object.defineProperty(this,i,{enumerable:!0,configurable:!0,get:()=>t.get(i),set(n){const o=t.get(i);let r=this.fire("set:"+i,i,n,o);r===void 0&&(r=n),o===r&&t.has(i)||(t.set(i,r),this.fire("change:"+i,i,r,o))}}),this[i]=e},bind(...i){if(!i.length||!Pa(i))throw new m("observable-bind-wrong-properties",this);if(new Set(i).size!==i.length)throw new m("observable-bind-duplicate-properties",this);Ba(this);const e=this[si];i.forEach(n=>{if(e.has(n))throw new m("observable-bind-rebind",this)});const t=new Map;return i.forEach(n=>{const o={property:n,to:[]};e.set(n,o),t.set(n,o)}),{to:Vm,toMany:Hm,_observable:this,_bindProperties:i,_to:[],_bindings:t}},unbind(...i){if(!this[ii])return;const e=this[si],t=this[ri];if(i.length){if(!Pa(i))throw new m("observable-unbind-wrong-properties",this);i.forEach(n=>{const o=e.get(n);if(!o)return;let r,s,a,l;o.to.forEach(c=>{r=c[0],s=c[1],a=t.get(r),l=a[s],l.delete(o),l.size||delete a[s],Object.keys(a).length||(t.delete(r),this.stopListening(r,"change"))}),e.delete(n)})}else t.forEach((n,o)=>{this.stopListening(o,"change")}),t.clear(),e.clear()},decorate(i){const e=this[i];if(!e)throw new m("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:i});this.on(i,(t,n)=>{t.return=e.apply(this,n)}),this[i]=function(...t){return this.fire(i,t)},this[i][Na]=e,this[no]||(this[no]=[]),this[no].push(i)}};To(rr,fe),rr.stopListening=function(i,e,t){if(!i&&this[no]){for(const n of this[no])this[n]=this[n][Na];delete this[no]}fe.stopListening.call(this,i,e,t)};const Le=rr;function Ba(i){i[ii]||(Object.defineProperty(i,ii,{value:new Map}),Object.defineProperty(i,ri,{value:new Map}),Object.defineProperty(i,si,{value:new Map}))}function Vm(...i){const e=function(...r){if(!r.length)throw new m("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(l=>{if(typeof l=="string")a.properties.push(l);else{if(typeof l!="object")throw new m("observable-bind-to-parse-error",null);a={observable:l,properties:[]},s.to.push(a)}}),s}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new m("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new m("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new m("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const s=o[ri];let a;s.get(r.observable)||o.listenTo(r.observable,"change",(l,c)=>{a=s.get(r.observable)[c],a&&a.forEach(d=>{za(o,d.property)})})}),function(r){let s;r._bindings.forEach((a,l)=>{r._to.forEach(c=>{s=c.properties[a.callback?0:r._bindProperties.indexOf(l)],a.to.push([c.observable,s]),function(d,u,h,p){const k=d[ri],w=k.get(h),v=w||{};v[p]||(v[p]=new Set),v[p].add(u),w||k.set(h,v)}(r._observable,a,c.observable,s)})})}(this),this._bindProperties.forEach(r=>{za(this._observable,r)})}function Hm(i,e,t){if(this._bindings.size>1)throw new m("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function Pa(i){return i.every(e=>typeof e=="string")}function za(i,e){const t=i[si].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}function ie(i,...e){e.forEach(t=>{Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)).forEach(n=>{if(n in i.prototype)return;const o=Object.getOwnPropertyDescriptor(t,n);o.enumerable=!1,Object.defineProperty(i.prototype,n,o)})})}class q{constructor(e){this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",La,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",La),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function La(i){i.return=!1,i.stop()}ie(q,Le);class me{constructor(e){this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this.affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Oa,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Oa),this.refresh())}execute(){}destroy(){this.stopListening()}}function Oa(i){i.return=!1,i.stop()}ie(me,Le);class Ra extends me{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={priority:"normal"}){B(this._childCommandsDefinitions,{command:e,priority:t.priority}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}const ja=function(i,e){return function(t){return i(e(t))}},sr=ja(Object.getPrototypeOf,Object);var Um=Function.prototype,$m=Object.prototype,Fa=Um.toString,qm=$m.hasOwnProperty,Gm=Fa.call(Object);const xt=function(i){if(!Mt(i)||nt(i)!="[object Object]")return!1;var e=sr(i);if(e===null)return!0;var t=qm.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&Fa.call(t)==Gm},Wm=function(){this.__data__=[],this.size=0},ai=function(i,e){for(var t=i.length;t--;)if(Pn(i[t][0],e))return t;return-1};var Ym=Array.prototype.splice;const Km=function(i){var e=this.__data__,t=ai(e,i);return!(t<0)&&(t==e.length-1?e.pop():Ym.call(e,t,1),--this.size,!0)},Qm=function(i){var e=this.__data__,t=ai(e,i);return t<0?void 0:e[t][1]},Zm=function(i){return ai(this.__data__,i)>-1},Jm=function(i,e){var t=this.__data__,n=ai(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function oo(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}oo.prototype.clear=Wm,oo.prototype.delete=Km,oo.prototype.get=Qm,oo.prototype.has=Zm,oo.prototype.set=Jm;const li=oo,Xm=function(){this.__data__=new li,this.size=0},ef=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},tf=function(i){return this.__data__.get(i)},nf=function(i){return this.__data__.has(i)},No=ot(ze,"Map"),Bo=ot(Object,"create"),of=function(){this.__data__=Bo?Bo(null):{},this.size=0},rf=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var sf=Object.prototype.hasOwnProperty;const af=function(i){var e=this.__data__;if(Bo){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return sf.call(e,i)?e[i]:void 0};var lf=Object.prototype.hasOwnProperty;const cf=function(i){var e=this.__data__;return Bo?e[i]!==void 0:lf.call(e,i)},df=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Bo&&e===void 0?"__lodash_hash_undefined__":e,this};function io(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}io.prototype.clear=of,io.prototype.delete=rf,io.prototype.get=af,io.prototype.has=cf,io.prototype.set=df;const Va=io,uf=function(){this.size=0,this.__data__={hash:new Va,map:new(No||li),string:new Va}},hf=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},ci=function(i,e){var t=i.__data__;return hf(e)?t[typeof e=="string"?"string":"hash"]:t.map},gf=function(i){var e=ci(this,i).delete(i);return this.size-=e?1:0,e},pf=function(i){return ci(this,i).get(i)},mf=function(i){return ci(this,i).has(i)},ff=function(i,e){var t=ci(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function ro(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ro.prototype.clear=uf,ro.prototype.delete=gf,ro.prototype.get=pf,ro.prototype.has=mf,ro.prototype.set=ff;const di=ro,kf=function(i,e){var t=this.__data__;if(t instanceof li){var n=t.__data__;if(!No||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new di(n)}return t.set(i,e),this.size=t.size,this};function so(i){var e=this.__data__=new li(i);this.size=e.size}so.prototype.clear=Xm,so.prototype.delete=ef,so.prototype.get=tf,so.prototype.has=nf,so.prototype.set=kf;const Po=so,bf=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},wf=ja(Object.keys,Object);var _f=Object.prototype.hasOwnProperty;const Af=function(i){if(!ir(i))return wf(i);var e=[];for(var t in Object(i))_f.call(i,t)&&t!="constructor"&&e.push(t);return e},ar=function(i){return oi(i)?Ta(i):Af(i)},vf=function(i,e){return i&&Xn(e,ar(e),i)},Cf=function(i,e){return i&&Xn(e,to(e),i)};var Ha=A&&!A.nodeType&&A,Ua=Ha&&!0&&g&&!g.nodeType&&g,$a=Ua&&Ua.exports===Ha?ze.Buffer:void 0,qa=$a?$a.allocUnsafe:void 0;const Ga=function(i,e){if(e)return i.slice();var t=i.length,n=qa?qa(t):new i.constructor(t);return i.copy(n),n},Wa=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},yf=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var s=i[t];e(s,t,i)&&(r[o++]=s)}return r},Ya=function(){return[]};var xf=Object.prototype.propertyIsEnumerable,Ka=Object.getOwnPropertySymbols;const lr=Ka?function(i){return i==null?[]:(i=Object(i),yf(Ka(i),function(e){return xf.call(i,e)}))}:Ya,Df=function(i,e){return Xn(i,lr(i),e)},Qa=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},Za=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Qa(e,lr(i)),i=sr(i);return e}:Ya,Ef=function(i,e){return Xn(i,Za(i),e)},Ja=function(i,e,t){var n=e(i);return At(i)?n:Qa(n,t(i))},cr=function(i){return Ja(i,ar,lr)},Sf=function(i){return Ja(i,to,Za)},dr=ot(ze,"DataView"),ur=ot(ze,"Promise"),hr=ot(ze,"Set"),gr=ot(ze,"WeakMap");var Xa="[object Map]",el="[object Promise]",tl="[object Set]",nl="[object WeakMap]",ol="[object DataView]",Mf=I(dr),If=I(No),Tf=I(ur),Nf=I(hr),Bf=I(gr),Ln=nt;(dr&&Ln(new dr(new ArrayBuffer(1)))!=ol||No&&Ln(new No)!=Xa||ur&&Ln(ur.resolve())!=el||hr&&Ln(new hr)!=tl||gr&&Ln(new gr)!=nl)&&(Ln=function(i){var e=nt(i),t=e=="[object Object]"?i.constructor:void 0,n=t?I(t):"";if(n)switch(n){case Mf:return ol;case If:return Xa;case Tf:return el;case Nf:return tl;case Bf:return nl}return e});const zo=Ln;var Pf=Object.prototype.hasOwnProperty;const zf=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&Pf.call(i,"index")&&(t.index=i.index,t.input=i.input),t},ui=ze.Uint8Array,pr=function(i){var e=new i.constructor(i.byteLength);return new ui(e).set(new ui(i)),e},Lf=function(i,e){var t=e?pr(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var Of=/\w*$/;const Rf=function(i){var e=new i.constructor(i.source,Of.exec(i));return e.lastIndex=i.lastIndex,e};var il=pt?pt.prototype:void 0,rl=il?il.valueOf:void 0;const jf=function(i){return rl?Object(rl.call(i)):{}},sl=function(i,e){var t=e?pr(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},Ff=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return pr(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Lf(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return sl(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return Rf(i);case"[object Symbol]":return jf(i)}};var al=Object.create;const Vf=function(){function i(){}return function(e){if(!oe(e))return{};if(al)return al(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),ll=function(i){return typeof i.constructor!="function"||ir(i)?{}:Vf(sr(i))},Hf=function(i){return Mt(i)&&zo(i)=="[object Map]"};var cl=eo&&eo.isMap;const Uf=cl?tr(cl):Hf,$f=function(i){return Mt(i)&&zo(i)=="[object Set]"};var dl=eo&&eo.isSet;const qf=dl?tr(dl):$f;var ul="[object Arguments]",hl="[object Function]",Gf="[object Object]",Oe={};Oe[ul]=Oe["[object Array]"]=Oe["[object ArrayBuffer]"]=Oe["[object DataView]"]=Oe["[object Boolean]"]=Oe["[object Date]"]=Oe["[object Float32Array]"]=Oe["[object Float64Array]"]=Oe["[object Int8Array]"]=Oe["[object Int16Array]"]=Oe["[object Int32Array]"]=Oe["[object Map]"]=Oe["[object Number]"]=Oe["[object Object]"]=Oe["[object RegExp]"]=Oe["[object Set]"]=Oe["[object String]"]=Oe["[object Symbol]"]=Oe["[object Uint8Array]"]=Oe["[object Uint8ClampedArray]"]=Oe["[object Uint16Array]"]=Oe["[object Uint32Array]"]=!0,Oe["[object Error]"]=Oe[hl]=Oe["[object WeakMap]"]=!1;const mr=function i(e,t,n,o,r,s){var a,l=1&t,c=2&t,d=4&t;if(n&&(a=r?n(e,o,r,s):n(e)),a!==void 0)return a;if(!oe(e))return e;var u=At(e);if(u){if(a=zf(e),!l)return Wa(e,a)}else{var h=zo(e),p=h==hl||h=="[object GeneratorFunction]";if(Mo(e))return Ga(e,l);if(h==Gf||h==ul||p&&!r){if(a=c||p?{}:ll(e),!l)return c?Ef(e,Cf(a,e)):Df(e,vf(a,e))}else{if(!Oe[h])return r?e:{};a=Ff(e,h,l)}}s||(s=new Po);var k=s.get(e);if(k)return k;s.set(e,a),qf(e)?e.forEach(function(v){a.add(i(v,t,n,v,e,s))}):Uf(e)&&e.forEach(function(v,E){a.set(E,i(v,t,n,E,e,s))});var w=u?void 0:(d?c?Sf:cr:c?to:ar)(e);return bf(w||e,function(v,E){w&&(v=e[E=v]),Ji(a,E,i(v,t,n,E,e,s))}),a},gl=function(i,e){return mr(i,5,e=typeof e=="function"?e:void 0)},vn=function(i){return Mt(i)&&i.nodeType===1&&!xt(i)};class pl{constructor(e,t){this._config={},t&&this.define(ml(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(xt(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const s of r)xt(e[s])||(e[s]={}),e=e[s];if(xt(n))return xt(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!xt(e[o])){e=null;break}e=e[o]}return e?ml(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function ml(i){return gl(i,Wf)}function Wf(i){return vn(i)?i:void 0}function It(i){return!(!i||!i[Symbol.iterator])}class Tt{constructor(e={},t={}){const n=It(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new m("collection-add-item-invalid-index",this);for(let n=0;n<e.length;n++){const o=e[n],r=this._getItemIdBeforeAdding(o),s=t+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s)}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new m("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,this._items.indexOf(t)}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new m("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(n=>t(n)):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,s)=>{const a=t._bindToCollection==this,l=t._bindToInternalToExternalMap.get(r);if(a&&l)this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r);else{const c=e(r);if(!c)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const u of this._skippedIndexesFromExternal)s>u&&d--;for(const u of t._skippedIndexesFromExternal)d>=u&&d++;this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r),this.add(c,d);for(let u=0;u<t._skippedIndexesFromExternal.length;u++)d<=t._skippedIndexesFromExternal[u]&&t._skippedIndexesFromExternal[u]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((l,c)=>(s<c&&l.push(c-1),s>c&&l.push(c),l),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new m("collection-add-invalid-id",this);if(this.get(n))throw new m("collection-add-item-already-exists",this)}else e[t]=n=M();return n}_remove(e){let t,n,o,r=!1;const s=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[s])):(o=e,n=o[s],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new m("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}ie(Tt,fe);class fr{constructor(e,t=[],n=[]){this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new m("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function k(w,v=new Set){w.forEach(E=>{l(E)&&(v.has(E)||(v.add(E),E.pluginName&&!o._availablePlugins.has(E.pluginName)&&o._availablePlugins.set(E.pluginName,E),E.requires&&k(E.requires,v)))})})(e),h(e);const s=[...function k(w,v=new Set){return w.map(E=>l(E)?E:o._availablePlugins.get(E)).reduce((E,P)=>v.has(P)?E:(v.add(P),P.requires&&(h(P.requires,P),k(P.requires,v).forEach(F=>E.add(F))),E.add(P)),new Set)}(e.filter(k=>!d(k,t)))];(function(k,w){for(const v of w){if(typeof v!="function")throw new m("plugincollection-replace-plugin-invalid-type",null,{pluginItem:v});const E=v.pluginName;if(!E)throw new m("plugincollection-replace-plugin-missing-name",null,{pluginItem:v});if(v.requires&&v.requires.length)throw new m("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:E});const P=o._availablePlugins.get(E);if(!P)throw new m("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:E});const F=k.indexOf(P);if(F===-1){if(o._contextPlugins.has(P))return;throw new m("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:E})}if(P.requires&&P.requires.length)throw new m("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:E});k.splice(F,1,v),o._availablePlugins.set(E,v)}})(s,n);const a=function(k){return k.map(w=>{const v=o._contextPlugins.get(w)||new w(r);return o._add(w,v),v})}(s);return p(a,"init").then(()=>p(a,"afterInit")).then(()=>a);function l(k){return typeof k=="function"}function c(k){return l(k)&&k.isContextPlugin}function d(k,w){return w.some(v=>v===k||u(k)===v||u(v)===k)}function u(k){return l(k)?k.pluginName||k.name:k}function h(k,w=null){k.map(v=>l(v)?v:o._availablePlugins.get(v)||v).forEach(v=>{(function(E,P){if(!l(E))throw P?new m("plugincollection-soft-required",r,{missingPlugin:E,requiredBy:u(P)}):new m("plugincollection-plugin-not-found",r,{plugin:E})})(v,w),function(E,P){if(!!c(P)&&!c(E))throw new m("plugincollection-context-required",r,{plugin:u(E),requiredBy:u(P)})}(v,w),function(E,P){if(!!P&&!!d(E,t))throw new m("plugincollection-required",r,{plugin:u(E),requiredBy:u(P)})}(v,w)})}function p(k,w){return k.reduce((v,E)=>E[w]?o._contextPlugins.has(E)?v:v.then(E[w].bind(E)):v,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new m("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}function it(i){return Array.isArray(i)?i:[i]}function Yf(i,e,t=1){if(typeof t!="number")throw new m("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(l,c){return!!window.CKEDITOR_TRANSLATIONS[l]&&!!window.CKEDITOR_TRANSLATIONS[l].dictionary[c]}(i,o))return t!==1?e.plural:e.string;const r=window.CKEDITOR_TRANSLATIONS[i].dictionary,s=window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(l=>l===1?0:1);if(typeof r[o]=="string")return r[o];const a=Number(s(t));return r[o][a]}ie(fr,fe),window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});const Kf=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function fl(i){return Kf.includes(i)?"rtl":"ltr"}class Qf{constructor(e={}){this.uiLanguage=e.uiLanguage||"en",this.contentLanguage=e.contentLanguage||this.uiLanguage,this.uiLanguageDirection=fl(this.uiLanguage),this.contentLanguageDirection=fl(this.contentLanguage),this.t=(t,n)=>this._t(t,n)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=it(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(Yf(this.uiLanguage,e,n),t)}}class Zf{constructor(e){this.config=new pl(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new fr(this,t);const n=this.config.get("language")||{};this.locale=new Qf({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new Tt,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new m("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new m("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new m("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Lo{constructor(e){this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}function ft(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}ie(Lo,Le);const kl=function(i){return mr(i,4)};class On{constructor(e){this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new m("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ft(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire("change:"+e,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=kl(this);return delete e.parent,e}is(e){return e==="node"||e==="view:node"}}ie(On,fe);class Be extends On{constructor(e,t){super(e),this._textData=t}is(e){return e==="$text"||e==="view:$text"||e==="text"||e==="view:text"||e==="node"||e==="view:node"}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Be&&(this===e||this.data===e.data)}_clone(){return new Be(this.document,this.data)}}class hn{constructor(e,t,n){if(this.textNode=e,t<0||t>e.data.length)throw new m("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new m("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(e){return e==="$textProxy"||e==="view:$textProxy"||e==="textProxy"||e==="view:textProxy"}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}function nn(i){return It(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}class on{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=bl(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=bl(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function bl(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return xt(n)?(n.style!==void 0&&T("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&T("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),kr(n,r,s=>o.getAttribute(s))}(e.attributes,i),!t.attributes)?null:!(e.classes&&(t.classes=function(n,o){return kr(n,o.getClassNames())}(e.classes,i),!t.classes))&&!(e.styles&&(t.styles=function(n,o){return kr(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles))&&t}function kr(i,e,t){const n=function(s){return Array.isArray(s)?s.map(a=>xt(a)?(a.key!==void 0&&a.value!==void 0||T("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):xt(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(e),r=[];return n.forEach(([s,a])=>{o.forEach(l=>{(function(c,d){return c===!0||c===d||c instanceof RegExp&&d.match(c)})(s,l)&&function(c,d,u){if(c===!0)return!0;const h=u(d);return c===h||c instanceof RegExp&&!!String(h).match(c)}(a,l,t)&&r.push(l)})}),!n.length||r.length<n.length?null:r}const hi=function(i){return typeof i=="symbol"||Mt(i)&&nt(i)=="[object Symbol]"};var Jf=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Xf=/^\w*$/;const ek=function(i,e){if(At(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!hi(i))||Xf.test(i)||!Jf.test(i)||e!=null&&i in Object(e)};function br(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return t.cache=r.set(o,s)||r,s};return t.cache=new(br.Cache||di),t}br.Cache=di;const tk=br;var nk=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ok=/\\(\\)?/g,ik=function(i){var e=tk(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(nk,function(t,n,o,r){e.push(o?r.replace(ok,"$1"):n||t)}),e});const rk=ik,sk=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var wl=pt?pt.prototype:void 0,_l=wl?wl.toString:void 0;const ak=function i(e){if(typeof e=="string")return e;if(At(e))return sk(e,i)+"";if(hi(e))return _l?_l.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},wr=function(i){return i==null?"":ak(i)},_r=function(i,e){return At(i)?i:ek(i,e)?[i]:rk(wr(i))},lk=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Ar=function(i){if(typeof i=="string"||hi(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},Al=function(i,e){for(var t=0,n=(e=_r(e,i)).length;i!=null&&t<n;)i=i[Ar(e[t++])];return t&&t==n?i:void 0},vl=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},ck=function(i,e){return e.length<2?i:Al(i,vl(e,0,-1))},dk=function(i,e){return e=_r(e,i),(i=ck(i,e))==null||delete i[Ar(lk(e))]},uk=function(i,e){return i==null||dk(i,e)},gi=function(i,e,t){var n=i==null?void 0:Al(i,e);return n===void 0?t:n},vr=function(i,e,t){(t!==void 0&&!Pn(i[e],t)||t===void 0&&!(e in i))&&qt(i,e,t)},hk=function(i){return function(e,t,n){for(var o=-1,r=Object(e),s=n(e),a=s.length;a--;){var l=s[i?a:++o];if(t(r[l],l,r)===!1)break}return e}}(),gk=function(i){return Mt(i)&&oi(i)},Cr=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},pk=function(i){return Xn(i,to(i))},mk=function(i,e,t,n,o,r,s){var a=Cr(i,t),l=Cr(e,t),c=s.get(l);if(c)vr(i,t,c);else{var d=r?r(a,l,t+"",i,e,s):void 0,u=d===void 0;if(u){var h=At(l),p=!h&&Mo(l),k=!h&&!p&&or(l);d=l,h||p||k?At(a)?d=a:gk(a)?d=Wa(a):p?(u=!1,d=Ga(l,!0)):k?(u=!1,d=sl(l,!0)):d=[]:xt(l)||er(l)?(d=a,er(a)?d=pk(a):oe(a)&&!_t(a)||(d=ll(l))):u=!1}u&&(s.set(l,d),o(d,l,n,r,s),s.delete(l)),vr(i,t,d)}},fk=function i(e,t,n,o,r){e!==t&&hk(t,function(s,a){if(r||(r=new Po),oe(s))mk(e,t,a,n,i,o,r);else{var l=o?o(Cr(e,a),s,a+"",e,t,r):void 0;l===void 0&&(l=s),vr(e,a,l)}},to)},Cl=Ca(function(i,e,t){fk(i,e,t)}),kk=function(i,e,t,n){if(!oe(i))return i;for(var o=-1,r=(e=_r(e,i)).length,s=r-1,a=i;a!=null&&++o<r;){var l=Ar(e[o]),c=t;if(l==="__proto__"||l==="constructor"||l==="prototype")return i;if(o!=s){var d=a[l];(c=n?n(d,l,a):void 0)===void 0&&(c=oe(d)?d:Xi(e[o+1])?[]:{})}Ji(a,l,c),a=a[l]}return i},bk=function(i,e,t){return i==null?i:kk(i,e,t)};class wk{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,s=0,a=null;const l=new Map;if(n==="")return l;n.charAt(n.length-1)!=";"&&(n+=";");for(let c=0;c<n.length;c++){const d=n.charAt(c);if(o===null)switch(d){case":":a||(a=n.substr(r,c-r),s=c+1);break;case'"':case"'":o=d;break;case";":{const u=n.substr(s,c-s);a&&l.set(a.trim(),u.trim()),a=null,r=c+1;break}}else d===o&&(o=null)}return l}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(oe(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=yr(e);uk(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!oe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=gi(this._styles,n);!o||!Array.from(Object.keys(o)).length&&this.remove(n)}}class _k{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(oe(t))xr(n,yr(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:s}=o(t);xr(n,r,s)}else xr(n,e,t)}getNormalized(e,t){if(!e)return Cl({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return gi(t,n);const o=n(e,t);if(o)return o}return gi(t,yr(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function yr(i){return i.replace("-",".")}function xr(i,e,t){let n=t;oe(t)&&(n=Cl({},gi(i,e),t)),bk(i,e,n)}class Nt extends On{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(r){r=nn(r);for(const[s,a]of r)a===null?r.delete(s):typeof a!="string"&&r.set(s,String(a));return r}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");yl(this._classes,r),this._attrs.delete("class")}this._styles=new wk(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="view:element"):e==="element"||e==="view:element"||e==="node"||e==="view:node"}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof Nt))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e=!1){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new on(...e);let n=this.parent;for(;n;){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Be(r,s)]:(It(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Be(r,a):a instanceof hn?new Be(r,a.data):a))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){t=String(t),this._fireChange("attributes",this),e=="class"?yl(this._classes,t):e=="style"?this._styles.setTo(t):this._attrs.set(e,t)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of it(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of it(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of it(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function yl(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}class pi extends Nt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=xl}is(e,t=null){return t?t===this.name&&(e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}}function xl(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}class mi extends pi{constructor(e,t,n,o){super(e,t,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",r=>r&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}is(e,t=null){return t?t===this.name&&(e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}destroy(){this.stopListening()}}ie(mi,Le);const Dl=Symbol("rootName");class Ak extends mi{constructor(e,t){super(e,t),this.rootName="main"}is(e,t=null){return t?t===this.name&&(e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"):e==="rootElement"||e==="view:rootElement"||e==="editableElement"||e==="view:editableElement"||e==="containerElement"||e==="view:containerElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}get rootName(){return this.getCustomProperty(Dl)}set rootName(e){this._setCustomProperty(Dl,e)}set _name(e){this.name=e}}class Rn{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new m("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new m("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=Y._createAt(e.startPosition):this.position=Y._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof Be){if(e.isAtEnd)return this.position=Y._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof Nt)return this.shallow?e.offset++:e=new Y(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof Be){if(this.singleCharacters)return e=new Y(o,0),this.position=e,this._next();{let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new hn(o,0,s),e=Y._createAfter(r)):(r=new hn(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const s=new hn(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=Y._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof Be){if(e.isAtStart)return this.position=Y._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof Nt)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new Y(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof Be){if(this.singleCharacters)return e=new Y(o,o.data.length),this.position=e,this._previous();{let r,s=o.data.length;if(o==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new hn(o,a,o.data.length-a),s=r.data.length,e=Y._createBefore(r)}else r=new hn(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,s)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-a}e.offset-=r;const s=new hn(n,e.offset,r);return this.position=e,this._formatReturnValue("text",s,t,e,r)}return e=Y._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof hn&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Y._createAfter(t.textNode):(o=Y._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Y._createBefore(t.textNode):(o=Y._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class Y{constructor(e,t){this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof mi);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=Y._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Rn(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}is(e){return e==="position"||e==="view:position"}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=ft(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Rn(e)}clone(){return new Y(this.parent,this.offset)}static _createAt(e,t){if(e instanceof Y)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new m("view-createpositionat-offset-required",n)}return new Y(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new Y(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new m("view-position-after-root",e,{root:e});return new Y(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new Y(e.textNode,e.offsetInText);if(!e.parent)throw new m("view-position-before-root",e,{root:e});return new Y(e.parent,e.index)}}class le{constructor(e,t=null){this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Rn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(fi,{direction:"backward"}),t=this.end.getLastMatchingPosition(fi);return e.parent.is("$text")&&e.isAtStart&&(e=Y._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=Y._createAfter(t.parent)),new le(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(fi);if(e.isAfter(this.end)||e.isEqual(this.end))return new le(e,e);let t=this.end.getLastMatchingPosition(fi,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new Y(n,0)),o&&o.is("$text")&&(t=new Y(o,o.data.length)),new le(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new le(this.start,e.start)),this.containsPosition(e.end)&&t.push(new le(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new le(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Rn(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new le(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Rn(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Rn(e);yield t.position;for(const n of t)yield n.nextPosition}is(e){return e==="range"||e==="view:range"}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new Y(e,t),new Y(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(Y._createBefore(e),t)}}function fi(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}function Dr(i){let e=0;for(const t of i)e++;return e}class Gt{constructor(e=null,t,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(e,t,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Dr(this.getRanges());if(t!=Dr(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(e,t,n){if(e===null)this._setRanges([]),this._setFakeOptions(t);else if(e instanceof Gt||e instanceof Er)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof le)this._setRanges([e],t&&t.backward),this._setFakeOptions(t);else if(e instanceof Y)this._setRanges([new le(e)]),this._setFakeOptions(t);else if(e instanceof On){const o=!!n&&!!n.backward;let r;if(t===void 0)throw new m("view-selection-setto-required-second-parameter",this);r=t=="in"?le._createIn(e):t=="on"?le._createOn(e):new le(Y._createAt(e,t)),this._setRanges([r],o),this._setFakeOptions(n)}else{if(!It(e))throw new m("view-selection-setto-not-selectable",this);this._setRanges(e,t&&t.backward),this._setFakeOptions(t)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new m("view-selection-setfocus-no-ranges",this);const n=Y._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new le(n,o),!0):this._addRange(new le(o,n)),this.fire("change")}is(e){return e==="selection"||e==="view:selection"}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof le))throw new m("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new m("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new le(e.start,e.end))}}ie(Gt,fe);class Er{constructor(e=null,t,n){this._selection=new Gt,this._selection.delegate("change").to(this),this._selection.setTo(e,t,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}is(e){return e==="selection"||e=="documentSelection"||e=="view:selection"||e=="view:documentSelection"}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setFocus(e,t){this._selection.setFocus(e,t)}}ie(Er,fe);class Oo extends b{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Sr=Symbol("bubbling contexts"),vk={fire(i,...e){try{const t=i instanceof b?i:new b(this,i),n=Mr(this);if(!n.size)return;if(Ro(t,"capturing",this),ao(n,"$capture",t,...e))return t.return;const o=t.startRange||this.selection.getFirstRange(),r=o?o.getContainedElement():null,s=!!r&&Boolean(El(n,r));let a=r||function(l){if(!l)return null;const c=l.start.parent,d=l.end.parent,u=c.getPath(),h=d.getPath();return u.length>h.length?c:d}(o);if(Ro(t,"atTarget",a),!s){if(ao(n,"$text",t,...e))return t.return;Ro(t,"bubbling",a)}for(;a;){if(a.is("rootElement")){if(ao(n,"$root",t,...e))return t.return}else if(a.is("element")&&ao(n,a.name,t,...e))return t.return;if(ao(n,a,t,...e))return t.return;a=a.parent,Ro(t,"bubbling",a)}return Ro(t,"bubbling",this),ao(n,"$document",t,...e),t.return}catch(t){m.rethrowUnexpectedError(t,this)}},_addEventListener(i,e,t){const n=it(t.context||"$document"),o=Mr(this);for(const r of n){let s=o.get(r);s||(s=Object.create(fe),o.set(r,s)),this.listenTo(s,i,e,t)}},_removeEventListener(i,e){const t=Mr(this);for(const n of t.values())this.stopListening(n,i,e)}},Ck=vk;function Ro(i,e,t){i instanceof Oo&&(i._eventPhase=e,i._currentTarget=t)}function ao(i,e,t,...n){const o=typeof e=="string"?i.get(e):El(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function El(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Mr(i){return i[Sr]||(i[Sr]=new Map),i[Sr]}class jo{constructor(e){this.selection=new Er,this.roots=new Tt({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}ie(jo,Ck),ie(jo,Le);class lo extends Nt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=yk,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new m("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}is(e,t=null){return t?t===this.name&&(e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"):e==="attributeElement"||e==="view:attributeElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function yk(){if(Ir(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Ir(i)>1)return null;i=i.parent}return!i||Ir(i)>1?null:this.childCount}function Ir(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}lo.DEFAULT_PRIORITY=10;class Sl extends Nt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=xk}is(e,t=null){return t?t===this.name&&(e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"):e==="emptyElement"||e==="view:emptyElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof On||Array.from(t).length>0))throw new m("view-emptyelement-cannot-add",[this,t])}}function xk(){return null}const jn=navigator.userAgent.toLowerCase(),Dk={isMac:Ml(jn),isWindows:function(i){return i.indexOf("windows")>-1}(jn),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(jn),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(jn),isiOS:function(i){return!!i.match(/iphone|ipad/i)||Ml(i)&&navigator.maxTouchPoints>0}(jn),isAndroid:function(i){return i.indexOf("android")>-1}(jn),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(jn),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="\u0107".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},Te=Dk;function Ml(i){return i.indexOf("macintosh")>-1}const Ek={ctrl:"\u2303",cmd:"\u2318",alt:"\u2325",shift:"\u21E7"},Sk={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},pe=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++){const t=String.fromCharCode(e);i[t.toLowerCase()]=e}for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),Mk=Object.fromEntries(Object.entries(pe).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function rn(i){let e;if(typeof i=="string"){if(e=pe[i.toLowerCase()],!e)throw new m("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?pe.alt:0)+(i.ctrlKey?pe.ctrl:0)+(i.shiftKey?pe.shift:0)+(i.metaKey?pe.cmd:0);return e}function Tr(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return rn(t.slice(0,-1));const n=rn(t);return Te.isMac&&n==pe.ctrl?pe.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Il(i){let e=Tr(i);return Object.entries(Te.isMac?Ek:Sk).reduce((t,[n,o])=>((e&pe[n])!=0&&(e&=~pe[n],t+=o),t),"")+(e?Mk[e]:"")}function Nr(i,e){const t=e==="ltr";switch(i){case pe.arrowleft:return t?"left":"right";case pe.arrowright:return t?"right":"left";case pe.arrowup:return"up";case pe.arrowdown:return"down"}}class Br extends Nt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=Tk}is(e,t=null){return t?t===this.name&&(e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"):e==="uiElement"||e==="view:uiElement"||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof On||Array.from(t).length>0))throw new m("view-uielement-cannot-add",this)}render(e){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function Ik(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==pe.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){const l=s.focusNode,c=s.focusOffset,d=r.domPositionToView(l,c);if(d===null)return;let u=!1;const h=d.getLastMatchingPosition(p=>(p.item.is("uiElement")&&(u=!0),!(!p.item.is("uiElement")&&!p.item.is("attributeElement"))));if(u){const p=r.viewPositionToDom(h);a?s.collapse(p.parent,p.offset):s.extend(p.parent,p.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function Tk(){return null}class Tl extends Nt{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=Nk}is(e,t=null){return t?t===this.name&&(e==="rawElement"||e==="view:rawElement"||e==="element"||e==="view:element"):e==="rawElement"||e==="view:rawElement"||e===this.name||e==="view:"+this.name||e==="element"||e==="view:element"||e==="node"||e==="view:node"}_insertChild(e,t){if(t&&(t instanceof On||Array.from(t).length>0))throw new m("view-rawelement-cannot-add",[this,t])}}function Nk(){return null}class Fn{constructor(e,t){this.document=e,this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="view:documentFragment"}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Be(r,s)]:(It(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Be(r,a):a instanceof hn?new Be(r,a.data):a))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}}ie(Fn,fe);class Nl{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(e,t,n){this.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new Fn(this.document,e)}createText(e){return new Be(this.document,e)}createAttributeElement(e,t,n={}){const o=new lo(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;xt(n)?o=n:r=n;const s=new pi(this.document,e,t,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(e,t,n={}){const o=new mi(this.document,e,t);return o._document=this.document,n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Sl(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new Br(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new Tl(this.document,e,t);return r.render=n||(()=>{}),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){xt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof Y?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new m("view-writer-break-non-container-element",this.document);if(!t.parent)throw new m("view-writer-break-root",this.document);if(e.isAtStart)return Y._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(Y._createAfter(t),n);const o=new le(e,Y._createAt(t,"end")),r=new Y(n,0);this.move(o,r)}return Y._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Y(s,a))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return Pl(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new Y(o,s))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new m("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof Be?Y._createAt(o,"end"):Y._createAt(t,"end");return this.move(le._createIn(n),Y._createAt(t,"end")),this.remove(le._createOn(n)),r}insert(e,t){zl(t=It(t)?[...t]:[t],this.document);const n=t.reduce((s,a)=>{const l=s[s.length-1],c=!a.is("uiElement");return l&&l.breakAttributes==c?l.nodes.push(a):s.push({breakAttributes:c,nodes:[a]}),s},[]);let o=null,r=e;for(const{nodes:s,breakAttributes:a}of n){const l=this._insertNodes(r,s,a);o||(o=l.start),r=l.end}return o?new le(o,r):new le(e)}remove(e){const t=e instanceof le?e:le._createOn(e);if(Fo(t,this.document),t.isCollapsed)return new Fn(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(const c of a)this._removeFromClonedElementsGroup(c);const l=this.mergeAttributes(n);return t.start=l,t.end=l.clone(),new Fn(this.document,a)}clear(e,t){Fo(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&t.isSimilar(r))s=le._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const a=r.getAncestors().find(l=>l.is("element")&&t.isSimilar(l));a&&(s=le._createIn(a))}s&&(s.end.isAfter(e.end)&&(s.end=e.end),s.start.isBefore(e.start)&&(s.start=e.start),this.remove(s))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof lo))throw new m("view-writer-wrap-invalid-attribute",this.document);if(Fo(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new le(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof lo))throw new m("view-writer-unwrap-invalid-attribute",this.document);if(Fo(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const l=this.mergeAttributes(s.end);return new le(a,l)}rename(e,t){const n=new pi(this.document,e,t.getAttributes());return this.insert(Y._createAfter(t),n),this.move(le._createIn(t),Y._createAt(n,0)),this.remove(le._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return Y._createAt(e,t)}createPositionAfter(e){return Y._createAfter(e)}createPositionBefore(e){return Y._createBefore(e)}createRange(e,t){return new le(e,t)}createRangeOn(e){return le._createOn(e)}createRangeIn(e){return le._createIn(e)}createSelection(e,t,n){return new Gt(e,t,n)}createSlot(e){if(!this._slotFactory)throw new m("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?Pr(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new m("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?zr(e):e;const s=o._insertChild(r.offset,t);for(const d of t)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),l=this.mergeAttributes(r);l.isEqual(r)||a.offset--;const c=this.mergeAttributes(a);return new le(l,c)}_wrapChildren(e,t,n,o){let r=t;const s=[];for(;r<n;){const l=e.getChild(r),c=l.is("$text"),d=l.is("attributeElement");if(d&&this._wrapAttributeElement(o,l))s.push(new Y(e,r));else if(c||!d||Bk(o,l)){const u=o._clone();l._remove(),u._appendChild(l),e._insertChild(r,u),this._addToClonedElementsGroup(u),s.push(new Y(e,r))}else this._wrapChildren(l,0,l.childCount,o);r++}let a=0;for(const l of s)l.offset-=a,l.offset!=t&&(this.mergeAttributes(l).isEqual(l)||(a++,n--));return le._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const s=[];for(;r<n;){const l=e.getChild(r);if(l.is("attributeElement"))if(l.isSimilar(o)){const c=l.getChildren(),d=l.childCount;l._remove(),e._insertChild(r,c),this._removeFromClonedElementsGroup(l),s.push(new Y(e,r),new Y(e,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(o,l)?(s.push(new Y(e,r),new Y(e,r+1)),r++):(this._unwrapChildren(l,0,l.childCount,o),r++);else r++}let a=0;for(const l of s)l.offset-=a,!(l.offset==t||l.offset==n)&&(this.mergeAttributes(l).isEqual(l)||(a++,n--));return le._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,t),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const l=this.mergeAttributes(s.end);return new le(a,l)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return Bl(e.clone());e.parent.is("$text")&&(e=zr(e));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new le(e,e.getShiftedBy(1));this.wrap(o,t);const r=new Y(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Be&&a instanceof Be?Pl(s,a):Bl(r)}_wrapAttributeElement(e,t){if(!Ll(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Ll(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(Fo(e,this.document),e.isCollapsed){const l=this._breakAttributes(e.start,t);return new le(l,l)}const r=this._breakAttributes(o,t),s=r.parent.childCount,a=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-s,new le(a,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new m("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new m("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new m("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&Lr(o.parent)||Lr(o))return e.clone();if(o.is("$text"))return this._breakAttributes(zr(e),t);if(n==o.childCount){const r=new Y(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new Y(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=o.childCount-n,l=o._removeChildren(n,a);s._appendChild(l);const c=new Y(o.parent,r);return this._breakAttributes(c,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Pr(i){let e=i.parent;for(;!Lr(e);){if(!e)return;e=e.parent}return e}function Bk(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function Bl(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new Y(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new Y(t,0):i}function zr(i){if(i.offset==i.parent.data.length)return new Y(i.parent.parent,i.parent.index+1);if(i.offset===0)return new Y(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Be(i.root.document,e)),new Y(i.parent.parent,i.parent.index+1)}function Pl(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new Y(i,t)}function zl(i,e){for(const t of i){if(!Pk.some(n=>t instanceof n))throw new m("view-writer-insert-invalid-node-type",e);t.is("$text")||zl(t.getChildren(),e)}}const Pk=[Be,lo,pi,Sl,Tl,Br];function Lr(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Fo(i,e){const t=Pr(i.start),n=Pr(i.end);if(!t||!n||t!==n)throw new m("view-writer-invalid-range-container",e)}function Ll(i,e){return i.id===null&&e.id===null}function dt(i){return Object.prototype.toString.call(i)=="[object Text]"}const Ol=i=>i.createTextNode("\xA0"),Rl=i=>{const e=i.createElement("span");return e.dataset.ckeFiller=!0,e.innerText="\xA0",e},jl=i=>{const e=i.createElement("br");return e.dataset.ckeFiller=!0,e},ki="\u2060".repeat(7);function Dt(i){return dt(i)&&i.data.substr(0,7)===ki}function bi(i){return i.data.length==7&&Dt(i)}function Or(i){return Dt(i)?i.data.slice(7):i.data}function zk(i,e){if(e.keyCode==pe.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;Dt(n)&&o<=7&&t.collapse(n,0)}}}function Fl(i,e,t,n=!1){t=t||function(r,s){return r===s},Array.isArray(i)||(i=Array.prototype.slice.call(i)),Array.isArray(e)||(e=Array.prototype.slice.call(e));const o=function(r,s,a){const l=Vl(r,s,a);if(l===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const c=Hl(r,l),d=Hl(s,l),u=Vl(c,d,a),h=r.length-u,p=s.length-u;return{firstIndex:l,lastIndexOld:h,lastIndexNew:p}}(i,e,t);return n?function(r,s){const{firstIndex:a,lastIndexOld:l,lastIndexNew:c}=r;if(a===-1)return Array(s).fill("equal");let d=[];return a>0&&(d=d.concat(Array(a).fill("equal"))),c-a>0&&(d=d.concat(Array(c-a).fill("insert"))),l-a>0&&(d=d.concat(Array(l-a).fill("delete"))),c<s&&(d=d.concat(Array(s-c).fill("equal"))),d}(o,e.length):function(r,s){const a=[],{firstIndex:l,lastIndexOld:c,lastIndexNew:d}=s;return d-l>0&&a.push({index:l,type:"insert",values:r.slice(l,d)}),c-l>0&&a.push({index:l+(d-l),type:"delete",howMany:c-l}),a}(e,o)}function Vl(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function Hl(i,e){return i.slice(e).reverse()}function Cn(i,e,t){t=t||function(w,v){return w===v};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return Cn.fastDiff(i,e,t,!0);let r,s;if(o<n){const w=i;i=e,e=w,r="delete",s="insert"}else r="insert",s="delete";const a=i.length,l=e.length,c=l-a,d={},u={};function h(w){const v=(u[w-1]!==void 0?u[w-1]:-1)+1,E=u[w+1]!==void 0?u[w+1]:-1,P=v>E?-1:1;d[w+P]&&(d[w]=d[w+P].slice(0)),d[w]||(d[w]=[]),d[w].push(v>E?r:s);let F=Math.max(v,E),J=F-w;for(;J<a&&F<l&&t(i[J],e[F]);)J++,F++,d[w].push("equal");return F}let p,k=0;do{for(p=-k;p<c;p++)u[p]=h(p);for(p=c+k;p>c;p--)u[p]=h(p);u[c]=h(c),k++}while(u[c]!==l);return d[c].slice(1)}function Ul(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function $l(i){const e=i.parentNode;e&&e.removeChild(i)}function co(i){return i&&i.nodeType===Node.COMMENT_NODE}function uo(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}Cn.fastDiff=Fl;var Lk=_(6062),re=_.n(Lk),ql=_(9315),Ok={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(ql.Z,Ok),ql.Z.locals;class Gl{constructor(e,t){this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),Te.isBlink&&!Te.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new m("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){let e;const t=!(Te.isBlink&&!Te.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e.parent.is("$text")&&(e=Y._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;Dt(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Wl(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(this.domConverter.mapViewToDom(e).childNodes),o=Array.from(this.domConverter.viewChildrenToDom(e,t.ownerDocument,{withChildren:!1})),r=this._diffNodeLists(n,o),s=this._findReplaceActions(r,n,o);if(s.indexOf("replace")!==-1){const a={equal:0,insert:0,delete:0};for(const l of s)if(l==="replace"){const c=a.equal+a.insert,d=a.equal+a.delete,u=e.getChild(c);!u||u.is("uiElement")||u.is("rawElement")||this._updateElementMappings(u,n[d]),$l(o[c]),a.equal++}else a[l]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?Y._createBefore(this.selection.getFirstPosition().parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&dt(t.parent)&&Dt(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!Dt(e))throw new m("view-renderer-filler-was-lost",this);bi(e)?e.remove():e.data=e.data.substr(7),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(l=>l.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof Be||r instanceof Be)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e),o=this.domConverter.viewToDom(e,n.ownerDocument),r=n.data;let s=o.data;const a=t.inlineFillerPosition;if(a&&a.parent==e.parent&&a.offset==e.index&&(s=ki+s),r!=s){const l=Fl(r,s);for(const c of l)c.type==="insert"?n.insertData(c.index,c.values.join("")):n.deleteData(c.index,c.howMany)}}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;const o=t.inlineFillerPosition,r=this.domConverter.mapViewToDom(e).childNodes,s=Array.from(this.domConverter.viewChildrenToDom(e,n.ownerDocument,{bind:!0}));o&&o.parent===e&&Wl(n.ownerDocument,s,o.offset);const a=this._diffNodeLists(r,s);let l=0;const c=new Set;for(const d of a)d==="delete"?(c.add(r[l]),$l(r[l])):d==="equal"&&l++;l=0;for(const d of a)d==="insert"?(Ul(n,l,s[l]),l++):d==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const d of c)d.parentNode||this.domConverter.unbindDomElement(d)}_diffNodeLists(e,t){return Cn(e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),t,Rk.bind(null,this.domConverter))}_findReplaceActions(e,t,n){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let o=[],r=[],s=[];const a={equal:0,insert:0,delete:0};for(const l of e)l==="insert"?s.push(n[a.equal+a.insert]):l==="delete"?r.push(t[a.equal+a.delete]):(o=o.concat(Cn(r,s,Yl).map(c=>c==="equal"?"replace":c)),o.push("equal"),r=[],s=[]),a[l]++;return o.concat(Cn(r,s,Yl).map(l=>l==="equal"?"replace":l))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(Te.isBlink&&!Te.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):(this._removeFakeSelection(),this._updateDomSelection(e)))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent="\xA0",a}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||"\xA0";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),Te.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const l=a.childNodes[r.offset];l&&l.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments)if(e.getSelection().rangeCount){const t=e.activeElement,n=this.domConverter.mapDomToView(t);t&&n&&e.getSelection().removeAllRanges()}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function Wl(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(dt(o))return o.data=ki+o.data,o;{const r=i.createTextNode(ki);return Array.isArray(e)?n.splice(t,0,r):Ul(e,t,r),r}}function Yl(i,e){return uo(i)&&uo(e)&&!dt(i)&&!dt(e)&&!co(i)&&!co(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function Rk(i,e,t){return e===t||(dt(e)&&dt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}ie(Gl,Le);const qe={window,document};function Rr(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function Kl(i){const e=[];for(;i&&i.nodeType!=Node.DOCUMENT_NODE;)e.unshift(i),i=i.parentNode;return e}const jk=jl(document),Fk=Ol(document),Vk=Rl(document),wi="data-ck-unsafe-attribute-",Ql="data-ck-unsafe-element";class _i{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new on,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Gt(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of e.childNodes)this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[];let l;for(;l=s.nextNode();)a.push(l);for(const c of a){for(const u of c.getAttributeNames())this.setDomElementAttribute(c,u,c.getAttribute(u));const d=c.tagName.toLowerCase();this._shouldRenameElement(d)&&(Xl(d),c.replaceWith(this._createReplacementDomElement(d,c)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t,n={}){if(e.is("$text")){const o=this._processDataFromViewText(e);return t.createTextNode(o)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let o;if(e.is("documentFragment"))o=t.createDocumentFragment(),n.bind&&this.bindDocumentFragments(o,e);else{if(e.is("uiElement"))return o=e.name==="$comment"?t.createComment(e.getCustomProperty("$rawContent")):e.render(t,this),n.bind&&this.bindElements(o,e),o;this._shouldRenameElement(e.name)?(Xl(e.name),o=this._createReplacementDomElement(e.name)):o=e.hasAttribute("xmlns")?t.createElementNS(e.getAttribute("xmlns"),e.name):t.createElement(e.name),e.is("rawElement")&&e.render(o,this),n.bind&&this.bindElements(o,e);for(const r of e.getAttributeKeys())this.setDomElementAttribute(o,r,e.getAttribute(r),e)}if(n.withChildren!==!1)for(const r of this.viewChildrenToDom(e,t,n))o.appendChild(r);return o}}setDomElementAttribute(e,t,n,o=null){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||T("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(wi+t)&&r&&e.removeAttribute(wi+t),e.setAttribute(r?t:wi+t,n)}removeDomElementAttribute(e,t){t!=Ql&&(e.removeAttribute(t),e.removeAttribute(wi+t))}*viewChildrenToDom(e,t,n={}){const o=e.getFillerOffset&&e.getFillerOffset();let r=0;for(const s of e.getChildren()){o===r&&(yield this._getBlockFiller(t));const a=s.is("element")&&s.getCustomProperty("dataPipeline:transparentRendering");a&&this.renderingMode=="data"?yield*this.viewChildrenToDom(s,t,n):(a&&T("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:s}),yield this.viewToDom(s,t,n)),r++}o===r&&(yield this._getBlockFiller(t))}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=document.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return Dt(n)&&(o+=7),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const s=e.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(e.nodeBefore),!o)return null;n=o.parentNode,r=o.nextSibling}return dt(r)&&Dt(r)?{parent:r,offset:7}:{parent:n,offset:o?Rr(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(co(e)&&t.skipComments)return null;if(dt(e)){if(bi(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new Be(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Fn(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let s=r.length,a=0;a<s;a++)o._setAttribute(r[a].name,r[a].value);if(this._isViewElementWithRawContent(o,t)||co(e)){const s=co(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",s),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t={}){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;dt(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new Gt(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new le(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,Rr(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return Y._createBefore(n);if(dt(e)){if(bi(e))return this.domPositionToView(e.parentNode,Rr(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(Dt(e)&&(r-=7,r=r<0?0:r),new Y(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new Y(o,0)}else{const o=e.childNodes[t-1],r=dt(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new Y(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(bi(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o)return o.nextSibling instanceof Be?o.nextSibling:null}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof Be?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=qe.window,r=[];Zl(t,s=>{const{scrollLeft:a,scrollTop:l}=s;r.push([a,l])}),t.focus(),Zl(t,s=>{const[a,l]=r.shift();s.scrollLeft=a,s.scrollTop=l}),qe.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(jk):!(e.tagName!=="BR"||!Jl(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(Vk)||function(t,n){return t.isEqualNode(Fk)&&Jl(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=document.createRange();t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset);const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=Kl(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(e){switch(this.blockFillerMode){case"nbsp":return Ol(e);case"markedNbsp":return Rl(e);case"br":return jl(e)}}_isDomSelectionPositionCorrect(e,t){if(dt(e)&&Dt(e)&&t<7||this.isElement(e)&&Dt(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t="\xA0"+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+"\xA0")}return t.replace(/ {2}/g," \xA0")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(c,d){return Kl(c).some(u=>u.tagName&&d.includes(u.tagName.toLowerCase()))}(e,this.preElements))return Or(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),s=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),s&&(t=t.replace(/ $/,"")),t=Or(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const a=o&&this.isElement(o)&&o.tagName!="BR",l=o&&dt(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||a||l)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!Dt(e)}_getTouchingInlineViewNode(e,t){const n=new Rn({startPosition:t?Y._createAfter(e):Y._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0;do if(!r&&e[n]?e=e[n]:e[o]?(e=e[o],r=!1):(e=e.parentNode,r=!0),!e||this._isBlockElement(e))return null;while(!dt(e)&&e.tagName!="BR"&&!this._isInlineObjectElement(e));return e}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(co(e))return new Br(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new Nt(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t=null){const n=document.createElement("span");if(n.setAttribute(Ql,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function Zl(i,e){for(;i&&i!=qe.document;)e(i),i=i.parentNode}function Jl(i,e){const t=i.parentNode;return t&&t.tagName&&e.includes(t.tagName.toLowerCase())}function Xl(i){i==="script"&&T("domconverter-unsafe-script-element-detected"),i==="style"&&T("domconverter-unsafe-style-element-detected")}function Ai(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const Hk=To({},fe,{listenTo(i,e,t,n={}){if(uo(i)||Ai(i)){const o={capture:!!n.useCapture,passive:!!n.usePassive},r=this._getProxyEmitter(i,o)||new ec(i,o);this.listenTo(r,e,t,n)}else fe.listenTo.call(this,i,e,t,n)},stopListening(i,e,t){if(uo(i)||Ai(i)){const n=this._getAllProxyEmitters(i);for(const o of n)this.stopListening(o,e,t)}else fe.stopListening.call(this,i,e,t)},_getProxyEmitter(i,e){return t=this,n=tc(i,e),t[xe]&&t[xe][n]?t[xe][n].emitter:null;var t,n},_getAllProxyEmitters(i){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(i,e)).filter(e=>!!e)}}),ho=Hk;class ec{constructor(e,t){ee(this,tc(e,t)),this._domNode=e,this._options=t}}function tc(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=M())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}To(ec.prototype,fe,{attach(i){if(this._domListeners&&this._domListeners[i])return;const e=this._createDomListener(i);this._domNode.addEventListener(i,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[i]=e},detach(i){let e;!this._domListeners[i]||(e=this._events[i])&&e.callbacks.length||this._domListeners[i].removeListener()},_addEventListener(i,e,t){this.attach(i),fe._addEventListener.call(this,i,e,t)},_removeEventListener(i,e){fe._removeEventListener.call(this,i,e),this.detach(i)},_createDomListener(i){const e=t=>{this.fire(i,t)};return e.removeListener=()=>{this._domNode.removeEventListener(i,e,this._options),delete this._domListeners[i]},e}});class sn{constructor(e){this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}ie(sn,ho);const Uk=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},$k=function(i){return this.__data__.has(i)};function vi(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new di;++e<t;)this.add(i[e])}vi.prototype.add=vi.prototype.push=Uk,vi.prototype.has=$k;const qk=vi,Gk=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},Wk=function(i,e){return i.has(e)},nc=function(i,e,t,n,o,r){var s=1&t,a=i.length,l=e.length;if(a!=l&&!(s&&l>a))return!1;var c=r.get(i),d=r.get(e);if(c&&d)return c==e&&d==i;var u=-1,h=!0,p=2&t?new qk:void 0;for(r.set(i,e),r.set(e,i);++u<a;){var k=i[u],w=e[u];if(n)var v=s?n(w,k,u,e,i,r):n(k,w,u,i,e,r);if(v!==void 0){if(v)continue;h=!1;break}if(p){if(!Gk(e,function(E,P){if(!Wk(p,P)&&(k===E||o(k,E,t,n,r)))return p.push(P)})){h=!1;break}}else if(k!==w&&!o(k,w,t,n,r)){h=!1;break}}return r.delete(i),r.delete(e),h},Yk=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},Kk=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var oc=pt?pt.prototype:void 0,jr=oc?oc.valueOf:void 0;const Qk=function(i,e,t,n,o,r,s){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!r(new ui(i),new ui(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Pn(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var a=Yk;case"[object Set]":var l=1&n;if(a||(a=Kk),i.size!=e.size&&!l)return!1;var c=s.get(i);if(c)return c==e;n|=2,s.set(i,e);var d=nc(a(i),a(e),n,o,r,s);return s.delete(i),d;case"[object Symbol]":if(jr)return jr.call(i)==jr.call(e)}return!1};var Zk=Object.prototype.hasOwnProperty;const Jk=function(i,e,t,n,o,r){var s=1&t,a=cr(i),l=a.length;if(l!=cr(e).length&&!s)return!1;for(var c=l;c--;){var d=a[c];if(!(s?d in e:Zk.call(e,d)))return!1}var u=r.get(i),h=r.get(e);if(u&&h)return u==e&&h==i;var p=!0;r.set(i,e),r.set(e,i);for(var k=s;++c<l;){var w=i[d=a[c]],v=e[d];if(n)var E=s?n(v,w,d,e,i,r):n(w,v,d,i,e,r);if(!(E===void 0?w===v||o(w,v,t,n,r):E)){p=!1;break}k||(k=d=="constructor")}if(p&&!k){var P=i.constructor,F=e.constructor;P==F||!("constructor"in i)||!("constructor"in e)||typeof P=="function"&&P instanceof P&&typeof F=="function"&&F instanceof F||(p=!1)}return r.delete(i),r.delete(e),p};var ic="[object Arguments]",rc="[object Array]",Ci="[object Object]",sc=Object.prototype.hasOwnProperty;const Xk=function(i,e,t,n,o,r){var s=At(i),a=At(e),l=s?rc:zo(i),c=a?rc:zo(e),d=(l=l==ic?Ci:l)==Ci,u=(c=c==ic?Ci:c)==Ci,h=l==c;if(h&&Mo(i)){if(!Mo(e))return!1;s=!0,d=!1}if(h&&!d)return r||(r=new Po),s||or(i)?nc(i,e,t,n,o,r):Qk(i,e,l,t,n,o,r);if(!(1&t)){var p=d&&sc.call(i,"__wrapped__"),k=u&&sc.call(e,"__wrapped__");if(p||k){var w=p?i.value():i,v=k?e.value():e;return r||(r=new Po),o(w,v,t,n,r)}}return!!h&&(r||(r=new Po),Jk(i,e,t,n,o,r))},ac=function i(e,t,n,o,r){return e===t||(e==null||t==null||!Mt(e)&&!Mt(t)?e!=e&&t!=t:Xk(e,t,n,o,i,r))},eb=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?ac(i,e,void 0,t):!!n};class lc extends sn{constructor(e){super(e),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Map,o=new Set;for(const c of e)if(c.type==="childList"){const d=t.mapDomToView(c.target);if(d&&(d.is("uiElement")||d.is("rawElement")))continue;d&&!this._isBogusBrMutation(c)&&o.add(d)}for(const c of e){const d=t.mapDomToView(c.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&c.type==="characterData"){const u=t.findCorrespondingViewText(c.target);u&&!o.has(u.parent)?n.set(u,{type:"text",oldText:u.data,newText:Or(c.target),node:u}):!u&&Dt(c.target)&&o.add(t.mapDomToView(c.target.parentNode))}}const r=[];for(const c of n.values())this.renderer.markToSync("text",c.node),r.push(c);for(const c of o){const d=t.mapViewToDom(c),u=Array.from(c.getChildren()),h=Array.from(t.domChildrenToView(d,{withChildren:!1}));eb(u,h,l)||(this.renderer.markToSync("children",c),r.push({type:"children",oldChildren:u,newChildren:h,node:c}))}const s=e[0].target.ownerDocument.getSelection();let a=null;if(s&&s.anchorNode){const c=t.domPositionToView(s.anchorNode,s.anchorOffset),d=t.domPositionToView(s.focusNode,s.focusOffset);c&&d&&(a=new Gt(c),a.setFocus(d))}function l(c,d){if(!Array.isArray(c))return c===d||!(!c.is("$text")||!d.is("$text"))&&c.data===d.data}r.length&&(this.document.fire("mutations",r,a),this.view.forceRender())}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}class Fr{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,To(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class yn extends sn{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Fr(this.view,t,n))}}class tb extends yn{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){this.fire(e.type,e,{keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return rn(this)}})}}const Vr=function(){return ze.Date.now()};var nb=/\s/;const ob=function(i){for(var e=i.length;e--&&nb.test(i.charAt(e)););return e};var ib=/^\s+/;const rb=function(i){return i&&i.slice(0,ob(i)+1).replace(ib,"")};var sb=/^[-+]0x[0-9a-f]+$/i,ab=/^0b[01]+$/i,lb=/^0o[0-7]+$/i,cb=parseInt;const cc=function(i){if(typeof i=="number")return i;if(hi(i))return NaN;if(oe(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=oe(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=rb(i);var t=ab.test(i);return t||lb.test(i)?cb(i.slice(2),t?2:8):sb.test(i)?NaN:+i};var db=Math.max,ub=Math.min;const yi=function(i,e,t){var n,o,r,s,a,l,c=0,d=!1,u=!1,h=!0;if(typeof i!="function")throw new TypeError("Expected a function");function p(F){var J=n,se=o;return n=o=void 0,c=F,s=i.apply(se,J)}function k(F){return c=F,a=setTimeout(v,e),d?p(F):s}function w(F){var J=F-l;return l===void 0||J>=e||J<0||u&&F-c>=r}function v(){var F=Vr();if(w(F))return E(F);a=setTimeout(v,function(J){var se=e-(J-l);return u?ub(se,r-(J-c)):se}(F))}function E(F){return a=void 0,h&&n?p(F):(n=o=void 0,s)}function P(){var F=Vr(),J=w(F);if(n=arguments,o=this,l=F,J){if(a===void 0)return k(l);if(u)return clearTimeout(a),a=setTimeout(v,e),p(l)}return a===void 0&&(a=setTimeout(v,e)),s}return e=cc(e)||0,oe(t)&&(d=!!t.leading,r=(u="maxWait"in t)?db(cc(t.maxWait)||0,e):r,h="trailing"in t?!!t.trailing:h),P.cancel=function(){a!==void 0&&clearTimeout(a),c=0,n=l=o=a=void 0},P.flush=function(){return a===void 0?s:E(Vr())},P};class hb extends sn{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=yi(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Gt(t.getRanges(),{backward:t.isBackward,fake:!1});e!=pe.arrowleft&&e!=pe.arrowup||n.setTo(n.getFirstPosition()),e!=pe.arrowright&&e!=pe.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}class gb extends sn{constructor(e){super(e),this.mutationObserver=e.getObserver(lc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=yi(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=yi(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel()};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest"}),this.listenTo(e,"keyup",n,{priority:"highest"}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest"}),this.listenTo(t,"selectionchange",(o,r)=>{this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced()}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class pb extends yn{constructor(e){super(e),this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{t.isFocused=!0,this._renderTimeoutId=setTimeout(()=>e.change(()=>{}),50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,e.change(()=>{}))})}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class mb extends yn{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0}),t.on("compositionend",()=>{t.isComposing=!1})}onDomEvent(e){this.fire(e.type,e)}}class fb extends yn{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){this.fire(e.type,e)}}class kb{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}const dc=function(i){return typeof i=="string"||!At(i)&&Mt(i)&&nt(i)=="[object String]"};function uc(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const s in t)r.setAttribute(s,t[s]);!dc(n)&&It(n)||(n=[n]);for(let s of n)dc(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}function xi(i){return Object.prototype.toString.apply(i)=="[object Range]"}function hc(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const gc=["top","right","bottom","left","width","height"];class Ee{constructor(e){const t=xi(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),vn(e)||t)if(t){const n=Ee.getDomRangeRects(e);Di(this,Ee.getBoundingRect(n))}else Di(this,e.getBoundingClientRect());else if(Ai(e)){const{innerWidth:n,innerHeight:o}=e;Di(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else Di(this,e)}clone(){return new Ee(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left)};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new Ee(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!pc(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!pc(n);){const o=new Ee(n),r=t.getIntersection(o);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of gc)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(Ai(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=hc(this._source);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new Ee(o));else{let o=e.startContainer;dt(o)&&(o=o.parentNode);const r=new Ee(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ee(t))}}function Di(i,e){for(const t of gc)i[t]=e[t]}function pc(i){return!!vn(i)&&i===i.ownerDocument.body}class Ue{constructor(e,t){Ue._observerInstance||Ue._createObserver(),this._element=e,this._callback=t,Ue._addElementCallback(e,t),Ue._observerInstance.observe(e)}destroy(){Ue._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){Ue._elementCallbacks||(Ue._elementCallbacks=new Map);let n=Ue._elementCallbacks.get(e);n||(n=new Set,Ue._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=Ue._getElementCallbacks(e);n&&(n.delete(t),n.size||(Ue._elementCallbacks.delete(e),Ue._observerInstance.unobserve(e))),Ue._elementCallbacks&&!Ue._elementCallbacks.size&&(Ue._observerInstance=null,Ue._elementCallbacks=null)}static _getElementCallbacks(e){return Ue._elementCallbacks?Ue._elementCallbacks.get(e):null}static _createObserver(){let e;e=typeof qe.window.ResizeObserver=="function"?qe.window.ResizeObserver:mc,Ue._observerInstance=new e(t=>{for(const n of t){const o=Ue._getElementCallbacks(n.target);if(o)for(const r of o)r(n)}})}}Ue._observerInstance=null,Ue._elementCallbacks=null;class mc{constructor(e){this._callback=e,this._elements=new Set,this._previousRects=new Map,this._periodicCheckTimeout=null}observe(e){this._elements.add(e),this._checkElementRectsAndExecuteCallback(),this._elements.size===1&&this._startPeriodicCheck()}unobserve(e){this._elements.delete(e),this._previousRects.delete(e),this._elements.size||this._stopPeriodicCheck()}_startPeriodicCheck(){const e=()=>{this._checkElementRectsAndExecuteCallback(),this._periodicCheckTimeout=setTimeout(e,100)};this.listenTo(qe.window,"resize",()=>{this._checkElementRectsAndExecuteCallback()}),this._periodicCheckTimeout=setTimeout(e,100)}_stopPeriodicCheck(){clearTimeout(this._periodicCheckTimeout),this.stopListening(),this._previousRects.clear()}_checkElementRectsAndExecuteCallback(){const e=[];for(const t of this._elements)this._hasRectChanged(t)&&e.push({target:t,contentRect:this._previousRects.get(t)});e.length&&this._callback(e)}_hasRectChanged(e){if(!e.ownerDocument.body.contains(e))return!1;const t=new Ee(e),n=this._previousRects.get(e),o=!n||!n.isEqual(t);return this._previousRects.set(e,t),o}}ie(mc,ho);function fc({target:i,viewportOffset:e=0}){const t=Hr(i);let n=t,o=null;for(;n;){let r;r=vc(n==t?i:o),kc(r,()=>Cc(i,n));const s=Cc(i,n);if(bb(n,s,e),n.parent!=n){if(o=n.frameElement,n=n.parent,!o)return}else n=null}}function bb(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new Ee(i).excludeScrollbarsAndBorders();if(![o,n].every(s=>r.contains(s))){let{scrollX:s,scrollY:a}=i;wc(o,r)?a-=r.top-e.top+t:bc(n,r)&&(a+=e.bottom-r.bottom+t),_c(e,r)?s-=r.left-e.left+t:Ac(e,r)&&(s+=e.right-r.right+t),i.scrollTo(s,a)}}function kc(i,e){const t=Hr(i);let n,o;for(;i!=t.document.body;)o=e(),n=new Ee(i).excludeScrollbarsAndBorders(),n.contains(o)||(wc(o,n)?i.scrollTop-=n.top-o.top:bc(o,n)&&(i.scrollTop+=o.bottom-n.bottom),_c(o,n)?i.scrollLeft-=n.left-o.left:Ac(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function bc(i,e){return i.bottom>e.bottom}function wc(i,e){return i.top<e.top}function _c(i,e){return i.left<e.left}function Ac(i,e){return i.right>e.right}function Hr(i){return xi(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function vc(i){if(xi(i)){let e=i.commonAncestorContainer;return dt(e)&&(e=e.parentNode),e}return i.parentNode}function Cc(i,e){const t=Hr(i),n=new Ee(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,s=new Ee(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}function rt(i){const e=i.next();return e.done?null:e.value}Object.assign({},{scrollViewportToShowTarget:fc,scrollAncestorsToShowTarget:function(i){kc(vc(i),()=>new Ee(i))}});class Bt{constructor(){this.set("isFocused",!1),this.set("focusedElement",null),this._elements=new Set,this._nextEventLoopTimeout=null}add(e){if(this._elements.has(e))throw new m("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(e),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}ie(Bt,ho),ie(Bt,Le);class gn{constructor(){this._listener=Object.create(ho)}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+rn(n),n)})}set(e,t,n={}){const o=Tr(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{t(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+rn(e),e)}destroy(){this._listener.stopListening()}}class wb extends sn{constructor(e){super(e),this.document.on("keydown",(t,n)=>{if(this.isEnabled&&((o=n.keyCode)==pe.arrowright||o==pe.arrowleft||o==pe.arrowup||o==pe.arrowdown)){const r=new Oo(this.document,"arrowKey",this.document.selection.getFirstRange());this.document.fire(r,n),r.stop.called&&t.stop()}var o})}observe(){}}class _b extends sn{constructor(e){super(e);const t=this.document;t.on("keydown",(n,o)=>{if(!this.isEnabled||o.keyCode!=pe.tab||o.ctrlKey)return;const r=new Oo(t,"tab",t.selection.getFirstRange());t.fire(r,o),r.stop.called&&n.stop()})}observe(){}}class yc{constructor(e){this.document=new jo(e),this.domConverter=new _i(this.document),this.domRoots=new Map,this.set("isRenderingInProgress",!1),this.set("hasDomSelection",!1),this._renderer=new Gl(this.domConverter,this.document.selection),this._renderer.bind("isFocused","isSelecting").to(this.document),this._initialDomRootAttributes=new WeakMap,this._observers=new Map,this._ongoingChange=!1,this._postFixersInProgress=!1,this._renderingDisabled=!1,this._hasChangedSinceTheLastRendering=!1,this._writer=new Nl(this.document),this.addObserver(lc),this.addObserver(gb),this.addObserver(pb),this.addObserver(tb),this.addObserver(hb),this.addObserver(mb),this.addObserver(wb),this.addObserver(_b),Te.isAndroid&&this.addObserver(fb),this.document.on("arrowKey",zk,{priority:"low"}),Ik(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged"),this._hasChangedSinceTheLastRendering=!1}),this.listenTo(this.document.selection,"change",()=>{this._hasChangedSinceTheLastRendering=!0}),this.listenTo(this.document,"change:isFocused",()=>{this._hasChangedSinceTheLastRendering=!0})}attachDomRoot(e,t="main"){const n=this.document.getRoot(t);n._name=e.tagName.toLowerCase();const o={};for(const{name:s,value:a}of Array.from(e.attributes))o[s]=a,s==="class"?this._writer.addClass(a.split(" "),n):this._writer.setAttribute(s,a,n);this._initialDomRootAttributes.set(e,o);const r=()=>{this._writer.setAttribute("contenteditable",!n.isReadOnly,n),n.isReadOnly?this._writer.addClass("ck-read-only",n):this._writer.removeClass("ck-read-only",n)};r(),this.domRoots.set(t,e),this.domConverter.bindElements(e,n),this._renderer.markToSync("children",n),this._renderer.markToSync("attributes",n),this._renderer.domDocuments.add(e.ownerDocument),n.on("change:children",(s,a)=>this._renderer.markToSync("children",a)),n.on("change:attributes",(s,a)=>this._renderer.markToSync("attributes",a)),n.on("change:text",(s,a)=>this._renderer.markToSync("text",a)),n.on("change:isReadOnly",()=>this.change(r)),n.on("change",()=>{this._hasChangedSinceTheLastRendering=!0});for(const s of this._observers.values())s.observe(e,t)}detachDomRoot(e){const t=this.domRoots.get(e);Array.from(t.attributes).forEach(({name:o})=>t.removeAttribute(o));const n=this._initialDomRootAttributes.get(t);for(const o in n)t.setAttribute(o,n[o]);this.domRoots.delete(e),this.domConverter.unbindDomElement(t)}getDomRoot(e="main"){return this.domRoots.get(e)}addObserver(e){let t=this._observers.get(e);if(t)return t;t=new e(this),this._observers.set(e,t);for(const[n,o]of this.domRoots)t.observe(o,n);return t.enable(),t}getObserver(e){return this._observers.get(e)}disableObservers(){for(const e of this._observers.values())e.disable()}enableObservers(){for(const e of this._observers.values())e.enable()}scrollToTheSelection(){const e=this.document.selection.getFirstRange();e&&fc({target:this.domConverter.viewRangeToDom(e),viewportOffset:20})}focus(){if(!this.document.isFocused){const e=this.document.selection.editableElement;e&&(this.domConverter.focus(e),this.forceRender())}}change(e){if(this.isRenderingInProgress||this._postFixersInProgress)throw new m("cannot-change-view-tree",this);try{if(this._ongoingChange)return e(this._writer);this._ongoingChange=!0;const t=e(this._writer);return this._ongoingChange=!1,!this._renderingDisabled&&this._hasChangedSinceTheLastRendering&&(this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render")),t}catch(t){m.rethrowUnexpectedError(t,this)}}forceRender(){this._hasChangedSinceTheLastRendering=!0,this.change(()=>{})}destroy(){for(const e of this._observers.values())e.destroy();this.document.destroy(),this.stopListening()}createPositionAt(e,t){return Y._createAt(e,t)}createPositionAfter(e){return Y._createAfter(e)}createPositionBefore(e){return Y._createBefore(e)}createRange(e,t){return new le(e,t)}createRangeOn(e){return le._createOn(e)}createRangeIn(e){return le._createIn(e)}createSelection(e,t,n){return new Gt(e,t,n)}_disableRendering(e){this._renderingDisabled=e,e==0&&this.change(()=>{})}_render(){this.isRenderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this.isRenderingInProgress=!1}}ie(yc,Le);class Vn{constructor(e){this.parent=null,this._attrs=nn(e)}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))===null)throw new m("model-node-not-found-in-parent",this);return e}get startOffset(){let e;if(!this.parent)return null;if((e=this.parent.getChildStartOffset(this))===null)throw new m("model-node-not-found-in-parent",this);return e}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.startOffset),t=t.parent;return e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=ft(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}hasAttribute(e){return this._attrs.has(e)}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const e={};return this._attrs.size&&(e.attributes=Array.from(this._attrs).reduce((t,n)=>(t[n[0]]=n[1],t),{})),e}is(e){return e==="node"||e==="model:node"}_clone(){return new Vn(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(e,t){this._attrs.set(e,t)}_setAttributesTo(e){this._attrs=nn(e)}_removeAttribute(e){return this._attrs.delete(e)}_clearAttributes(){this._attrs.clear()}}class Pe extends Vn{constructor(e,t){super(t),this._data=e||""}get offsetSize(){return this.data.length}get data(){return this._data}is(e){return e==="$text"||e==="model:$text"||e==="text"||e==="model:text"||e==="node"||e==="model:node"}toJSON(){const e=super.toJSON();return e.data=this.data,e}_clone(){return new Pe(this.data,this.getAttributes())}static fromJSON(e){return new Pe(e.data,e.attributes)}}class an{constructor(e,t,n){if(this.textNode=e,t<0||t>e.offsetSize)throw new m("model-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.offsetSize)throw new m("model-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get startOffset(){return this.textNode.startOffset!==null?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return this.startOffset!==null?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}is(e){return e==="$textProxy"||e==="model:$textProxy"||e==="textProxy"||e==="model:textProxy"}getPath(){const e=this.textNode.getPath();return e.length>0&&(e[e.length-1]+=this.offsetInText),e}getAncestors(e={includeSelf:!1,parentFirst:!1}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}hasAttribute(e){return this.textNode.hasAttribute(e)}getAttribute(e){return this.textNode.getAttribute(e)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class go{constructor(e){this._nodes=[],e&&this._insertNodes(0,e)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((e,t)=>e+t.offsetSize,0)}getNode(e){return this._nodes[e]||null}getNodeIndex(e){const t=this._nodes.indexOf(e);return t==-1?null:t}getNodeStartOffset(e){const t=this.getNodeIndex(e);return t===null?null:this._nodes.slice(0,t).reduce((n,o)=>n+o.offsetSize,0)}indexToOffset(e){if(e==this._nodes.length)return this.maxOffset;const t=this._nodes[e];if(!t)throw new m("model-nodelist-index-out-of-bounds",this);return this.getNodeStartOffset(t)}offsetToIndex(e){let t=0;for(const n of this._nodes){if(e>=t&&e<t+n.offsetSize)return this.getNodeIndex(n);t+=n.offsetSize}if(t!=e)throw new m("model-nodelist-offset-out-of-bounds",this,{offset:e,nodeList:this});return this.length}_insertNodes(e,t){for(const n of t)if(!(n instanceof Vn))throw new m("model-nodelist-insertnodes-not-node",this);this._nodes.splice(e,0,...t)}_removeNodes(e,t=1){return this._nodes.splice(e,t)}toJSON(){return this._nodes.map(e=>e.toJSON())}}class Se extends Vn{constructor(e,t,n){super(t),this.name=e,this._children=new go,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}is(e,t=null){return t?t===this.name&&(e==="element"||e==="model:element"):e==="element"||e==="model:element"||e==="node"||e==="model:node"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}offsetToIndex(e){return this._children.offsetToIndex(e)}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}findAncestor(e,t={includeSelf:!1}){let n=t.includeSelf?this:this.parent;for(;n;){if(n.name===e)return n;n=n.parent}return null}toJSON(){const e=super.toJSON();if(e.name=this.name,this._children.length>0){e.children=[];for(const t of this._children)e.children.push(t.toJSON())}return e}_clone(e=!1){const t=e?Array.from(this._children).map(n=>n._clone(!0)):null;return new Se(this.name,this.getAttributes(),t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new Pe(o)]:(It(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new Pe(r):r instanceof an?new Pe(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}static fromJSON(e){let t=null;if(e.children){t=[];for(const n of e.children)n.name?t.push(Se.fromJSON(n)):t.push(Pe.fromJSON(n))}return new Se(e.name,e.attributes,t)}}class pn{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new m("model-tree-walker-no-start-position",null);const t=e.direction||"forward";if(t!="forward"&&t!="backward")throw new m("model-tree-walker-unknown-direction",e,{direction:t});this.direction=t,this.boundaries=e.boundaries||null,e.startPosition?this.position=e.startPosition.clone():this.position=H._createAt(this.boundaries[this.direction=="backward"?"end":"start"]),this.position.stickiness="toNone",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(e){let t,n,o,r;do o=this.position,r=this._visitedParent,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o,this._visitedParent=r)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};const o=Vo(t,n),r=o||xc(t,n,o);if(r instanceof Se)return this.shallow?t.offset++:(t.path.push(0),this._visitedParent=r),this.position=t,Hn("elementStart",r,e,t,1);if(r instanceof Pe){let s;if(this.singleCharacters)s=1;else{let c=r.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<c&&(c=this.boundaries.end.offset),s=c-t.offset}const a=t.offset-r.startOffset,l=new an(r,a,s);return t.offset+=s,this.position=t,Hn("text",l,e,t,s)}return t.path.pop(),t.offset++,this.position=t,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():Hn("elementEnd",n,e,t)}_previous(){const e=this.position,t=this.position.clone(),n=this._visitedParent;if(n.parent===null&&t.offset===0)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};const o=t.parent,r=Vo(t,o),s=r||Dc(t,o,r);if(s instanceof Se)return t.offset--,this.shallow?(this.position=t,Hn("elementStart",s,e,t,1)):(t.path.push(s.maxOffset),this.position=t,this._visitedParent=s,this.ignoreElementEnd?this._previous():Hn("elementEnd",s,e,t));if(s instanceof Pe){let a;if(this.singleCharacters)a=1;else{let d=s.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>d&&(d=this.boundaries.start.offset),a=t.offset-d}const l=t.offset-s.startOffset,c=new an(s,l-a,a);return t.offset-=a,this.position=t,Hn("text",c,e,t,a)}return t.path.pop(),this.position=t,this._visitedParent=n.parent,Hn("elementStart",n,e,t,1)}}function Hn(i,e,t,n,o){return{done:!1,value:{type:i,item:e,previousPosition:t,nextPosition:n,length:o}}}class H{constructor(e,t,n="toNone"){if(!e.is("element")&&!e.is("documentFragment"))throw new m("model-position-root-invalid",e);if(!(t instanceof Array)||t.length===0)throw new m("model-position-path-incorrect-format",e,{path:t});e.is("rootElement")?t=t.slice():(t=[...e.getPath(),...t],e=e.root),this.root=e,this.path=t,this.stickiness=n}get offset(){return this.path[this.path.length-1]}set offset(e){this.path[this.path.length-1]=e}get parent(){let e=this.root;for(let t=0;t<this.path.length-1;t++)if(e=e.getChild(e.offsetToIndex(this.path[t])),!e)throw new m("model-position-path-incorrect",this,{position:this});if(e.is("$text"))throw new m("model-position-path-incorrect",this,{position:this});return e}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){return Vo(this,this.parent)}get nodeAfter(){const e=this.parent;return xc(this,e,Vo(this,e))}get nodeBefore(){const e=this.parent;return Dc(this,e,Vo(this,e))}get isAtStart(){return this.offset===0}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(e){if(this.root!=e.root)return"different";const t=ft(this.path,e.path);switch(t){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[t]<e.path[t]?"before":"after"}}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new pn(t);return n.skip(e),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){const e=this.parent;return e.is("documentFragment")?[e]:e.getAncestors({includeSelf:!0})}findAncestor(e){const t=this.parent;return t.is("element")?t.findAncestor(e,{includeSelf:!0}):null}getCommonPath(e){if(this.root!=e.root)return[];const t=ft(this.path,e.path),n=typeof t=="string"?Math.min(this.path.length,e.path.length):t;return this.path.slice(0,n)}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}getShiftedBy(e){const t=this.clone(),n=t.offset+e;return t.offset=n<0?0:n,t}isAfter(e){return this.compareWith(e)=="after"}isBefore(e){return this.compareWith(e)=="before"}isEqual(e){return this.compareWith(e)=="same"}isTouching(e){let t=null,n=null;switch(this.compareWith(e)){case"same":return!0;case"before":t=H._createAt(this),n=H._createAt(e);break;case"after":t=H._createAt(e),n=H._createAt(this);break;default:return!1}let o=t.parent;for(;t.path.length+n.path.length;){if(t.isEqual(n))return!0;if(t.path.length>n.path.length){if(t.offset!==o.maxOffset)return!1;t.path=t.path.slice(0,-1),o=o.parent,t.offset++}else{if(n.offset!==0)return!1;n.path=n.path.slice(0,-1)}}}is(e){return e==="position"||e==="model:position"}hasSameParentAs(e){return this.root!==e.root?!1:ft(this.getParentPath(),e.getParentPath())=="same"}getTransformedByOperation(e){let t;switch(e.type){case"insert":t=this._getTransformedByInsertOperation(e);break;case"move":case"remove":case"reinsert":t=this._getTransformedByMoveOperation(e);break;case"split":t=this._getTransformedBySplitOperation(e);break;case"merge":t=this._getTransformedByMergeOperation(e);break;default:t=H._createAt(this)}return t}_getTransformedByInsertOperation(e){return this._getTransformedByInsertion(e.position,e.howMany)}_getTransformedByMoveOperation(e){return this._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany)}_getTransformedBySplitOperation(e){const t=e.movedRange;return t.containsPosition(this)||t.start.isEqual(this)&&this.stickiness=="toNext"?this._getCombined(e.splitPosition,e.moveTargetPosition):e.graveyardPosition?this._getTransformedByMove(e.graveyardPosition,e.insertionPosition,1):this._getTransformedByInsertion(e.insertionPosition,1)}_getTransformedByMergeOperation(e){const t=e.movedRange;let n;return t.containsPosition(this)||t.start.isEqual(this)?(n=this._getCombined(e.sourcePosition,e.targetPosition),e.sourcePosition.isBefore(e.targetPosition)&&(n=n._getTransformedByDeletion(e.deletionPosition,1))):n=this.isEqual(e.deletionPosition)?H._createAt(e.deletionPosition):this._getTransformedByMove(e.deletionPosition,e.graveyardPosition,1),n}_getTransformedByDeletion(e,t){const n=H._createAt(this);if(this.root!=e.root)return n;if(ft(e.getParentPath(),this.getParentPath())=="same"){if(e.offset<this.offset){if(e.offset+t>this.offset)return null;n.offset-=t}}else if(ft(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;if(e.offset<=this.path[o]){if(e.offset+t>this.path[o])return null;n.path[o]-=t}}return n}_getTransformedByInsertion(e,t){const n=H._createAt(this);if(this.root!=e.root)return n;if(ft(e.getParentPath(),this.getParentPath())=="same")(e.offset<this.offset||e.offset==this.offset&&this.stickiness!="toPrevious")&&(n.offset+=t);else if(ft(e.getParentPath(),this.getParentPath())=="prefix"){const o=e.path.length-1;e.offset<=this.path[o]&&(n.path[o]+=t)}return n}_getTransformedByMove(e,t,n){if(t=t._getTransformedByDeletion(e,n),e.isEqual(t))return H._createAt(this);const o=this._getTransformedByDeletion(e,n);return o===null||e.isEqual(this)&&this.stickiness=="toNext"||e.getShiftedBy(n).isEqual(this)&&this.stickiness=="toPrevious"?this._getCombined(e,t):o._getTransformedByInsertion(t,n)}_getCombined(e,t){const n=e.path.length-1,o=H._createAt(t);return o.stickiness=this.stickiness,o.offset=o.offset+this.path[n]-e.offset,o.path=[...o.path,...this.path.slice(n+1)],o}toJSON(){return{root:this.root.toJSON(),path:Array.from(this.path),stickiness:this.stickiness}}clone(){return new this.constructor(this.root,this.path,this.stickiness)}static _createAt(e,t,n="toNone"){if(e instanceof H)return new H(e.root,e.path,e.stickiness);{const o=e;if(t=="end")t=o.maxOffset;else{if(t=="before")return this._createBefore(o,n);if(t=="after")return this._createAfter(o,n);if(t!==0&&!t)throw new m("model-createpositionat-offset-required",[this,e])}if(!o.is("element")&&!o.is("documentFragment"))throw new m("model-position-parent-incorrect",[this,e]);const r=o.getPath();return r.push(t),new this(o.root,r,n)}}static _createAfter(e,t){if(!e.parent)throw new m("model-position-after-root",[this,e],{root:e});return this._createAt(e.parent,e.endOffset,t)}static _createBefore(e,t){if(!e.parent)throw new m("model-position-before-root",e,{root:e});return this._createAt(e.parent,e.startOffset,t)}static fromJSON(e,t){if(e.root==="$graveyard"){const n=new H(t.graveyard,e.path);return n.stickiness=e.stickiness,n}if(!t.getRoot(e.root))throw new m("model-position-fromjson-no-root",t,{rootName:e.root});return new H(t.getRoot(e.root),e.path,e.stickiness)}}function Vo(i,e){const t=e.getChild(e.offsetToIndex(i.offset));return t&&t.is("$text")&&t.startOffset<i.offset?t:null}function xc(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset))}function Dc(i,e,t){return t!==null?null:e.getChild(e.offsetToIndex(i.offset)-1)}class R{constructor(e,t=null){this.start=H._createAt(e),this.end=t?H._createAt(t):H._createAt(e),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}*[Symbol.iterator](){yield*new pn({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return ft(this.start.getParentPath(),this.end.getParentPath())=="same"}get root(){return this.start.root}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}containsItem(e){const t=H._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}is(e){return e==="range"||e==="model:range"}isEqual(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new R(this.start,e.start)),this.containsPosition(e.end)&&t.push(new R(e.end,this.end))):t.push(new R(this.start,this.end)),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new R(t,n)}return null}getJoined(e,t=!1){let n=this.isIntersecting(e);if(n||(n=this.start.isBefore(e.start)?t?this.end.isTouching(e.start):this.end.isEqual(e.start):t?e.end.isTouching(this.start):e.end.isEqual(this.start)),!n)return null;let o=this.start,r=this.end;return e.start.isBefore(o)&&(o=e.start),e.end.isAfter(r)&&(r=e.end),new R(o,r)}getMinimalFlatRanges(){const e=[],t=this.start.getCommonPath(this.end).length,n=H._createAt(this.start);let o=n.parent;for(;n.path.length>t+1;){const r=o.maxOffset-n.offset;r!==0&&e.push(new R(n,n.getShiftedBy(r))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const r=this.end.path[n.path.length-1],s=r-n.offset;s!==0&&e.push(new R(n,n.getShiftedBy(s))),n.offset=r,n.path.push(0)}return e}getWalker(e={}){return e.boundaries=this,new pn(e)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new pn(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new pn(e);yield t.position;for(const n of t)yield n.nextPosition}getTransformedByOperation(e){switch(e.type){case"insert":return this._getTransformedByInsertOperation(e);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(e);case"split":return[this._getTransformedBySplitOperation(e)];case"merge":return[this._getTransformedByMergeOperation(e)]}return[new R(this.start,this.end)]}getTransformedByOperations(e){const t=[new R(this.start,this.end)];for(const n of e)for(let o=0;o<t.length;o++){const r=t[o].getTransformedByOperation(n);t.splice(o,1,...r),o+=r.length-1}for(let n=0;n<t.length;n++){const o=t[n];for(let r=n+1;r<t.length;r++){const s=t[r];(o.containsRange(s)||s.containsRange(o)||o.isEqual(s))&&t.splice(r,1)}}return t}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;const e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}toJSON(){return{start:this.start.toJSON(),end:this.end.toJSON()}}clone(){return new this.constructor(this.start,this.end)}_getTransformedByInsertOperation(e,t=!1){return this._getTransformedByInsertion(e.position,e.howMany,t)}_getTransformedByMoveOperation(e,t=!1){const n=e.sourcePosition,o=e.howMany,r=e.targetPosition;return this._getTransformedByMove(n,r,o,t)}_getTransformedBySplitOperation(e){const t=this.start._getTransformedBySplitOperation(e);let n=this.end._getTransformedBySplitOperation(e);return this.end.isEqual(e.insertionPosition)&&(n=this.end.getShiftedBy(1)),t.root!=n.root&&(n=this.end.getShiftedBy(-1)),new R(t,n)}_getTransformedByMergeOperation(e){if(this.start.isEqual(e.targetPosition)&&this.end.isEqual(e.deletionPosition))return new R(this.start);let t=this.start._getTransformedByMergeOperation(e),n=this.end._getTransformedByMergeOperation(e);return t.root!=n.root&&(n=this.end.getShiftedBy(-1)),t.isAfter(n)?(e.sourcePosition.isBefore(e.targetPosition)?(t=H._createAt(n),t.offset=0):(e.deletionPosition.isEqual(t)||(n=e.deletionPosition),t=e.targetPosition),new R(t,n)):new R(t,n)}_getTransformedByInsertion(e,t,n=!1){if(n&&this.containsPosition(e))return[new R(this.start,e),new R(e.getShiftedBy(t),this.end._getTransformedByInsertion(e,t))];{const o=new R(this.start,this.end);return o.start=o.start._getTransformedByInsertion(e,t),o.end=o.end._getTransformedByInsertion(e,t),[o]}}_getTransformedByMove(e,t,n,o=!1){if(this.isCollapsed){const u=this.start._getTransformedByMove(e,t,n);return[new R(u)]}const r=R._createFromPositionAndShift(e,n),s=t._getTransformedByDeletion(e,n);if(this.containsPosition(t)&&!o&&(r.containsPosition(this.start)||r.containsPosition(this.end))){const u=this.start._getTransformedByMove(e,t,n),h=this.end._getTransformedByMove(e,t,n);return[new R(u,h)]}let a;const l=this.getDifference(r);let c=null;const d=this.getIntersection(r);if(l.length==1?c=new R(l[0].start._getTransformedByDeletion(e,n),l[0].end._getTransformedByDeletion(e,n)):l.length==2&&(c=new R(this.start,this.end._getTransformedByDeletion(e,n))),a=c?c._getTransformedByInsertion(s,n,d!==null||o):[],d){const u=new R(d.start._getCombined(r.start,s),d.end._getCombined(r.start,s));a.length==2?a.splice(1,0,u):a.push(u)}return a}_getTransformedByDeletion(e,t){let n=this.start._getTransformedByDeletion(e,t),o=this.end._getTransformedByDeletion(e,t);return n==null&&o==null?null:(n==null&&(n=e),o==null&&(o=e),new R(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return new this(H._createAt(e,0),H._createAt(e,e.maxOffset))}static _createOn(e){return this._createFromPositionAndShift(H._createBefore(e),e.offsetSize)}static _createFromRanges(e){if(e.length===0)throw new m("range-create-from-ranges-empty-array",null);if(e.length==1)return e[0].clone();const t=e[0];e.sort((r,s)=>r.start.isAfter(s.start)?1:-1);const n=e.indexOf(t),o=new this(t.start,t.end);if(n>0)for(let r=n-1;e[r].end.isEqual(o.start);r++)o.start=H._createAt(e[r].start);for(let r=n+1;r<e.length&&e[r].start.isEqual(o.end);r++)o.end=H._createAt(e[r].end);return o}static fromJSON(e,t){return new this(H.fromJSON(e.start,t),H.fromJSON(e.end,t))}}class Ur{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._deferredBindingRemovals=new Map,this._unboundMarkerNames=new Set,this.on("modelToViewPosition",(e,t)=>{if(t.viewPosition)return;const n=this._modelToViewMapping.get(t.modelPosition.parent);if(!n)throw new m("mapping-model-position-view-parent-not-found",this,{modelPosition:t.modelPosition});t.viewPosition=this.findPositionIn(n,t.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(e,t)=>{if(t.modelPosition)return;const n=this.findMappedViewAncestor(t.viewPosition),o=this._viewToModelMapping.get(n),r=this._toModelOffset(t.viewPosition.parent,t.viewPosition.offset,n);t.modelPosition=H._createAt(o,r)},{priority:"low"})}bindElements(e,t){this._modelToViewMapping.set(e,t),this._viewToModelMapping.set(t,e)}unbindViewElement(e,t={}){const n=this.toModelElement(e);if(this._elementToMarkerNames.has(e))for(const o of this._elementToMarkerNames.get(e))this._unboundMarkerNames.add(o);t.defer?this._deferredBindingRemovals.set(e,e.root):(this._viewToModelMapping.delete(e),this._modelToViewMapping.get(n)==e&&this._modelToViewMapping.delete(n))}unbindModelElement(e){const t=this.toViewElement(e);this._modelToViewMapping.delete(e),this._viewToModelMapping.get(t)==e&&this._viewToModelMapping.delete(t)}bindElementToMarker(e,t){const n=this._markerNameToElements.get(t)||new Set;n.add(e);const o=this._elementToMarkerNames.get(e)||new Set;o.add(t),this._markerNameToElements.set(t,n),this._elementToMarkerNames.set(e,o)}unbindElementFromMarkerName(e,t){const n=this._markerNameToElements.get(t);n&&(n.delete(e),n.size==0&&this._markerNameToElements.delete(t));const o=this._elementToMarkerNames.get(e);o&&(o.delete(t),o.size==0&&this._elementToMarkerNames.delete(e))}flushUnboundMarkerNames(){const e=Array.from(this._unboundMarkerNames);return this._unboundMarkerNames.clear(),e}flushDeferredBindings(){for(const[e,t]of this._deferredBindingRemovals)e.root==t&&this.unbindViewElement(e);this._deferredBindingRemovals=new Map}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map,this._elementToMarkerNames=new Map,this._unboundMarkerNames=new Set,this._deferredBindingRemovals=new Map}toModelElement(e){return this._viewToModelMapping.get(e)}toViewElement(e){return this._modelToViewMapping.get(e)}toModelRange(e){return new R(this.toModelPosition(e.start),this.toModelPosition(e.end))}toViewRange(e){return new le(this.toViewPosition(e.start),this.toViewPosition(e.end))}toModelPosition(e){const t={viewPosition:e,mapper:this};return this.fire("viewToModelPosition",t),t.modelPosition}toViewPosition(e,t={isPhantom:!1}){const n={modelPosition:e,mapper:this,isPhantom:t.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(e){const t=this._markerNameToElements.get(e);if(!t)return null;const n=new Set;for(const o of t)if(o.is("attributeElement"))for(const r of o.getElementsWithSameId())n.add(r);else n.add(o);return n}registerViewToModelLength(e,t){this._viewToModelLengthCallbacks.set(e,t)}findMappedViewAncestor(e){let t=e.parent;for(;!this._viewToModelMapping.has(t);)t=t.parent;return t}_toModelOffset(e,t,n){if(n!=e)return this._toModelOffset(e.parent,e.index,n)+this._toModelOffset(e,t,e);if(e.is("$text"))return t;let o=0;for(let r=0;r<t;r++)o+=this.getModelLength(e.getChild(r));return o}getModelLength(e){if(this._viewToModelLengthCallbacks.get(e.name))return this._viewToModelLengthCallbacks.get(e.name)(e);if(this._viewToModelMapping.has(e))return 1;if(e.is("$text"))return e.data.length;if(e.is("uiElement"))return 0;{let t=0;for(const n of e.getChildren())t+=this.getModelLength(n);return t}}findPositionIn(e,t){let n,o=0,r=0,s=0;if(e.is("$text"))return new Y(e,t);for(;r<t;)n=e.getChild(s),o=this.getModelLength(n),r+=o,s++;return r==t?this._moveViewPositionToTextNode(new Y(e,s)):this.findPositionIn(n,t-(r-o))}_moveViewPositionToTextNode(e){const t=e.nodeBefore,n=e.nodeAfter;return t instanceof Be?new Y(t,t.data.length):n instanceof Be?new Y(n,0):e}}ie(Ur,fe);class Ab{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(e,t){t=Ei(t),e instanceof an&&(e=this._getSymbolForTextProxy(e)),this._consumable.has(e)||this._consumable.set(e,new Map),this._consumable.get(e).set(t,!0)}consume(e,t){return t=Ei(t),e instanceof an&&(e=this._getSymbolForTextProxy(e)),!!this.test(e,t)&&(this._consumable.get(e).set(t,!1),!0)}test(e,t){t=Ei(t),e instanceof an&&(e=this._getSymbolForTextProxy(e));const n=this._consumable.get(e);if(n===void 0)return null;const o=n.get(t);return o===void 0?null:o}revert(e,t){t=Ei(t),e instanceof an&&(e=this._getSymbolForTextProxy(e));const n=this.test(e,t);return n===!1?(this._consumable.get(e).set(t,!0),!0):n!==!0&&null}verifyAllConsumed(e){const t=[];for(const[n,o]of this._consumable)for(const[r,s]of o){const a=r.split(":")[0];s&&e==a&&t.push({event:r,item:n.name||n.description})}if(t.length)throw new m("conversion-model-consumable-not-consumed",null,{items:t})}_getSymbolForTextProxy(e){let t=null;const n=this._textProxyRegistry.get(e.startOffset);if(n){const o=n.get(e.endOffset);o&&(t=o.get(e.parent))}return t||(t=this._addSymbolForTextProxy(e)),t}_addSymbolForTextProxy(e){const t=e.startOffset,n=e.endOffset,o=e.parent,r=Symbol("$textProxy:"+e.data);let s,a;return s=this._textProxyRegistry.get(t),s||(s=new Map,this._textProxyRegistry.set(t,s)),a=s.get(n),a||(a=new Map,s.set(n,a)),a.set(o,r),r}}function Ei(i){const e=i.split(":");return e[0]=="insert"?e[0]:e[0]=="addMarker"||e[0]=="removeMarker"?i:e.length>1?e[0]+":"+e[1]:e[0]}class $r{constructor(e){this._conversionApi={dispatcher:this,...e},this._firedEventsMap=new WeakMap}convertChanges(e,t,n){const o=this._createConversionApi(n,e.getRefreshedItems());for(const s of e.getMarkersToRemove())this._convertMarkerRemove(s.name,s.range,o);const r=this._reduceChanges(e.getChanges());for(const s of r)s.type==="insert"?this._convertInsert(R._createFromPositionAndShift(s.position,s.length),o):s.type==="reinsert"?this._convertReinsert(R._createFromPositionAndShift(s.position,s.length),o):s.type==="remove"?this._convertRemove(s.position,s.length,s.name,o):this._convertAttribute(s.range,s.attributeKey,s.attributeOldValue,s.attributeNewValue,o);for(const s of o.mapper.flushUnboundMarkerNames()){const a=t.get(s).getRange();this._convertMarkerRemove(s,a,o),this._convertMarkerAdd(s,a,o)}for(const s of e.getMarkersToAdd())this._convertMarkerAdd(s.name,s.range,o);o.mapper.flushDeferredBindings(),o.consumable.verifyAllConsumed("insert")}convert(e,t,n,o={}){const r=this._createConversionApi(n,void 0,o);this._convertInsert(e,r);for(const[s,a]of t)this._convertMarkerAdd(s,a,r);r.consumable.verifyAllConsumed("insert")}convertSelection(e,t,n){const o=Array.from(t.getMarkersAtPosition(e.getFirstPosition())),r=this._createConversionApi(n);if(this._addConsumablesForSelection(r.consumable,e,o),this.fire("selection",{selection:e},r),e.isCollapsed){for(const s of o){const a=s.getRange();if(!vb(e.getFirstPosition(),s,r.mapper))continue;const l={item:e,markerName:s.name,markerRange:a};r.consumable.test(e,"addMarker:"+s.name)&&this.fire("addMarker:"+s.name,l,r)}for(const s of e.getAttributeKeys()){const a={item:e,range:e.getFirstRange(),attributeKey:s,attributeOldValue:null,attributeNewValue:e.getAttribute(s)};r.consumable.test(e,"attribute:"+a.attributeKey)&&this.fire("attribute:"+a.attributeKey+":$text",a,r)}}}_convertInsert(e,t,n={}){n.doNotAddConsumables||this._addConsumablesForInsert(t.consumable,Array.from(e));for(const o of Array.from(e.getWalker({shallow:!0})).map(Ec))this._testAndFire("insert",o,t)}_convertRemove(e,t,n,o){this.fire("remove:"+n,{position:e,length:t},o)}_convertAttribute(e,t,n,o,r){this._addConsumablesForRange(r.consumable,e,`attribute:${t}`);for(const s of e){const a={item:s.item,range:R._createFromPositionAndShift(s.previousPosition,s.length),attributeKey:t,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${t}`,a,r)}}_convertReinsert(e,t){const n=Array.from(e.getWalker({shallow:!0}));this._addConsumablesForInsert(t.consumable,n);for(const o of n.map(Ec))this._testAndFire("insert",{...o,reconversion:!0},t)}_convertMarkerAdd(e,t,n){if(t.root.rootName=="$graveyard")return;const o="addMarker:"+e;if(n.consumable.add(t,o),this.fire(o,{markerName:e,markerRange:t},n),n.consumable.consume(t,o)){this._addConsumablesForRange(n.consumable,t,o);for(const r of t.getItems()){if(!n.consumable.test(r,o))continue;const s={item:r,range:R._createOn(r),markerName:e,markerRange:t};this.fire(o,s,n)}}}_convertMarkerRemove(e,t,n){t.root.rootName!="$graveyard"&&this.fire("removeMarker:"+e,{markerName:e,markerRange:t},n)}_reduceChanges(e){const t={changes:e};return this.fire("reduceChanges",t),t.changes}_addConsumablesForInsert(e,t){for(const n of t){const o=n.item;if(e.test(o,"insert")===null){e.add(o,"insert");for(const r of o.getAttributeKeys())e.add(o,"attribute:"+r)}}return e}_addConsumablesForRange(e,t,n){for(const o of t.getItems())e.add(o,n);return e}_addConsumablesForSelection(e,t,n){e.add(t,"selection");for(const o of n)e.add(t,"addMarker:"+o.name);for(const o of t.getAttributeKeys())e.add(t,"attribute:"+o);return e}_testAndFire(e,t,n){const o=function(l,c){const d=c.item.name||"$text";return`${l}:${d}`}(e,t),r=t.item.is("$textProxy")?n.consumable._getSymbolForTextProxy(t.item):t.item,s=this._firedEventsMap.get(n),a=s.get(r);if(a){if(a.has(o))return;a.add(o)}else s.set(r,new Set([o]));this.fire(o,t,n)}_testAndFireAddAttributes(e,t){const n={item:e,range:R._createOn(e)};for(const o of n.item.getAttributeKeys())n.attributeKey=o,n.attributeOldValue=null,n.attributeNewValue=n.item.getAttribute(o),this._testAndFire(`attribute:${o}`,n,t)}_createConversionApi(e,t=new Set,n={}){const o={...this._conversionApi,consumable:new Ab,writer:e,options:n,convertItem:r=>this._convertInsert(R._createOn(r),o),convertChildren:r=>this._convertInsert(R._createIn(r),o,{doNotAddConsumables:!0}),convertAttributes:r=>this._testAndFireAddAttributes(r,o),canReuseView:r=>!t.has(o.mapper.toModelElement(r))};return this._firedEventsMap.set(o,new Map),o}}function vb(i,e,t){const n=e.getRange(),o=Array.from(i.getAncestors());return o.shift(),o.reverse(),!o.some(r=>{if(n.containsItem(r))return!!t.toViewElement(r).getCustomProperty("addHighlight")})}function Ec(i){return{item:i.item,range:R._createFromPositionAndShift(i.previousPosition,i.length)}}ie($r,fe);class mn{constructor(e,t,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,e&&this.setTo(e,t,n)}get anchor(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.end:e.start}return null}get focus(){if(this._ranges.length>0){const e=this._ranges[this._ranges.length-1];return this._lastRangeBackward?e.start:e.end}return null}get isCollapsed(){return this._ranges.length===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(e){if(this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const e of this._ranges)yield new R(e.start,e.end)}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?new R(e.start,e.end):null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?new R(e.start,e.end):null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}setTo(e,t,n){if(e===null)this._setRanges([]);else if(e instanceof mn)this._setRanges(e.getRanges(),e.isBackward);else if(e&&typeof e.getRanges=="function")this._setRanges(e.getRanges(),e.isBackward);else if(e instanceof R)this._setRanges([e],!!t&&!!t.backward);else if(e instanceof H)this._setRanges([new R(e)]);else if(e instanceof Vn){const o=!!n&&!!n.backward;let r;if(t=="in")r=R._createIn(e);else if(t=="on")r=R._createOn(e);else{if(t===void 0)throw new m("model-selection-setto-required-second-parameter",[this,e]);r=new R(H._createAt(e,t))}this._setRanges([r],o)}else{if(!It(e))throw new m("model-selection-setto-not-selectable",[this,e]);this._setRanges(e,t&&!!t.backward)}}_setRanges(e,t=!1){const n=(e=Array.from(e)).some(o=>{if(!(o instanceof R))throw new m("model-selection-set-ranges-not-range",[this,e]);return this._ranges.every(r=>!r.isEqual(o))});if(e.length!==this._ranges.length||n){this._removeAllRanges();for(const o of e)this._pushRange(o);this._lastRangeBackward=!!t,this.fire("change:range",{directChange:!0})}}setFocus(e,t){if(this.anchor===null)throw new m("model-selection-setfocus-no-ranges",[this,e]);const n=H._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.length&&this._popRange(),n.compareWith(o)=="before"?(this._pushRange(new R(n,o)),this._lastRangeBackward=!0):(this._pushRange(new R(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(e){return this._attrs.get(e)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(e){return this._attrs.has(e)}removeAttribute(e){this.hasAttribute(e)&&(this._attrs.delete(e),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}setAttribute(e,t){this.getAttribute(e)!==t&&(this._attrs.set(e,t),this.fire("change:attribute",{attributeKeys:[e],directChange:!0}))}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}is(e){return e==="selection"||e==="model:selection"}*getSelectedBlocks(){const e=new WeakSet;for(const t of this.getRanges()){const n=Mc(t.start,e);n&&qr(n,t)&&(yield n);for(const r of t.getWalker()){const s=r.item;r.type=="elementEnd"&&Cb(s,e,t)&&(yield s)}const o=Mc(t.end,e);o&&!t.end.isTouching(H._createAt(o,0))&&qr(o,t)&&(yield o)}}containsEntireContent(e=this.anchor.root){const t=H._createAt(e,0),n=H._createAt(e,"end");return t.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(e){this._checkRange(e),this._ranges.push(new R(e.start,e.end))}_checkRange(e){for(let t=0;t<this._ranges.length;t++)if(e.isIntersecting(this._ranges[t]))throw new m("model-selection-range-intersects",[this,e],{addedRange:e,intersectingRange:this._ranges[t]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Sc(i,e){return!e.has(i)&&(e.add(i),i.root.document.model.schema.isBlock(i)&&i.parent)}function Cb(i,e,t){return Sc(i,e)&&qr(i,t)}function Mc(i,e){const t=i.parent.root.document.model.schema,n=i.parent.getAncestors({parentFirst:!0,includeSelf:!0});let o=!1;const r=n.find(s=>!o&&(o=t.isLimit(s),!o&&Sc(s,e)));return n.forEach(s=>e.add(s)),r}function qr(i,e){const t=function(n){const o=n.root.document.model.schema;let r=n.parent;for(;r;){if(o.isBlock(r))return r;r=r.parent}}(i);return t?!e.containsRange(R._createOn(t),!0):!0}ie(mn,fe);class ln extends R{constructor(e,t){super(e,t),yb.call(this)}detach(){this.stopListening()}is(e){return e==="liveRange"||e==="model:liveRange"||e=="range"||e==="model:range"}toRange(){return new R(this.start,this.end)}static fromRange(e){return new ln(e.start,e.end)}}function yb(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&xb.call(this,t)},{priority:"low"})}function xb(i){const e=this.getTransformedByOperation(i),t=R._createFromRanges(e),n=!t.isEqual(this),o=function(s,a){switch(a.type){case"insert":return s.containsPosition(a.position);case"move":case"remove":case"reinsert":case"merge":return s.containsPosition(a.sourcePosition)||s.start.isEqual(a.sourcePosition)||s.containsPosition(a.targetPosition);case"split":return s.containsPosition(a.splitPosition)||s.containsPosition(a.insertionPosition)}return!1}(this,i);let r=null;if(n){t.root.rootName=="$graveyard"&&(r=i.type=="remove"?i.sourcePosition:i.deletionPosition);const s=this.toRange();this.start=t.start,this.end=t.end,this.fire("change:range",s,{deletionPosition:r})}else o&&this.fire("change:content",this.toRange(),{deletionPosition:r})}ie(ln,fe);const Ho="selection:";class Wt{constructor(e){this._selection=new Db(e),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this),this._selection.delegate("change:marker").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get markers(){return this._selection.markers}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(e){return this._selection.containsEntireContent(e)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(e){return this._selection.getAttribute(e)}hasAttribute(e){return this._selection.hasAttribute(e)}refresh(){this._selection._updateMarkers(),this._selection._updateAttributes(!1)}observeMarkers(e){this._selection.observeMarkers(e)}is(e){return e==="selection"||e=="model:selection"||e=="documentSelection"||e=="model:documentSelection"}_setFocus(e,t){this._selection.setFocus(e,t)}_setTo(e,t,n){this._selection.setTo(e,t,n)}_setAttribute(e,t){this._selection.setAttribute(e,t)}_removeAttribute(e){this._selection.removeAttribute(e)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(e){this._selection.restoreGravity(e)}static _getStoreAttributeKey(e){return Ho+e}static _isStoreAttributeKey(e){return e.startsWith(Ho)}}ie(Wt,fe);class Db extends mn{constructor(e){super(),this.markers=new Tt({idProperty:"name"}),this._model=e.model,this._document=e,this._attributePriority=new Map,this._selectionRestorePosition=null,this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this._observedMarkers=new Set,this.listenTo(this._model,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&o.type!="marker"&&o.type!="rename"&&o.type!="noop"&&(this._ranges.length==0&&this._selectionRestorePosition&&this._fixGraveyardSelection(this._selectionRestorePosition),this._selectionRestorePosition=null,this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1})))},{priority:"lowest"}),this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new m("document-selection-wrong-position",this,{range:t})}),this.listenTo(this._model.markers,"update",(t,n,o,r)=>{this._updateMarker(n,r)}),this.listenTo(this._document,"change",(t,n)=>{(function(o,r){const s=o.document.differ;for(const a of s.getChanges()){if(a.type!="insert")continue;const l=a.position.parent;a.length===l.maxOffset&&o.enqueueChange(r,c=>{const d=Array.from(l.getAttributeKeys()).filter(u=>u.startsWith(Ho));for(const u of d)c.removeAttribute(u,l)})}})(this._model,n)})}get isCollapsed(){return this._ranges.length===0?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let e=0;e<this._ranges.length;e++)this._ranges[e].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(e,t,n){super.setTo(e,t,n),this._updateAttributes(!0),this._updateMarkers()}setFocus(e,t){super.setFocus(e,t),this._updateAttributes(!0),this._updateMarkers()}setAttribute(e,t){if(this._setAttribute(e,t)){const n=[e];this.fire("change:attribute",{attributeKeys:n,directChange:!0})}}removeAttribute(e){if(this._removeAttribute(e)){const t=[e];this.fire("change:attribute",{attributeKeys:t,directChange:!0})}}overrideGravity(){const e=M();return this._overriddenGravityRegister.add(e),this._overriddenGravityRegister.size===1&&this._updateAttributes(!0),e}restoreGravity(e){if(!this._overriddenGravityRegister.has(e))throw new m("document-selection-gravity-wrong-restore",this,{uid:e});this._overriddenGravityRegister.delete(e),this.isGravityOverridden||this._updateAttributes(!0)}observeMarkers(e){this._observedMarkers.add(e),this._updateMarkers()}_popRange(){this._ranges.pop().detach()}_pushRange(e){const t=this._prepareRange(e);t&&this._ranges.push(t)}_prepareRange(e){if(this._checkRange(e),e.root==this._document.graveyard)return;const t=ln.fromRange(e);return t.on("change:range",(n,o,r)=>{if(this._hasChangedRange=!0,t.root==this._document.graveyard){this._selectionRestorePosition=r.deletionPosition;const s=this._ranges.indexOf(t);this._ranges.splice(s,1),t.detach()}}),t}_updateMarkers(){if(!this._observedMarkers.size)return;const e=[];let t=!1;for(const o of this._model.markers){const r=o.name.split(":",1)[0];if(!this._observedMarkers.has(r))continue;const s=o.getRange();for(const a of this.getRanges())s.containsRange(a,!a.isCollapsed)&&e.push(o)}const n=Array.from(this.markers);for(const o of e)this.markers.has(o)||(this.markers.add(o),t=!0);for(const o of Array.from(this.markers))e.includes(o)||(this.markers.remove(o),t=!0);t&&this.fire("change:marker",{oldMarkers:n,directChange:!1})}_updateMarker(e,t){const n=e.name.split(":",1)[0];if(!this._observedMarkers.has(n))return;let o=!1;const r=Array.from(this.markers),s=this.markers.has(e);if(t){let a=!1;for(const l of this.getRanges())if(t.containsRange(l,!l.isCollapsed)){a=!0;break}a&&!s?(this.markers.add(e),o=!0):!a&&s&&(this.markers.remove(e),o=!0)}else s&&(this.markers.remove(e),o=!0);o&&this.fire("change:marker",{oldMarkers:r,directChange:!1})}_updateAttributes(e){const t=nn(this._getSurroundingAttributes()),n=nn(this.getAttributes());if(e)this._attributePriority=new Map,this._attrs=new Map;else for(const[r,s]of this._attributePriority)s=="low"&&(this._attrs.delete(r),this._attributePriority.delete(r));this._setAttributesTo(t);const o=[];for(const[r,s]of this.getAttributes())n.has(r)&&n.get(r)===s||o.push(r);for(const[r]of n)this.hasAttribute(r)||o.push(r);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(e,t,n=!0){const o=n?"normal":"low";return o=="low"&&this._attributePriority.get(e)=="normal"?!1:super.getAttribute(e)!==t&&(this._attrs.set(e,t),this._attributePriority.set(e,o),!0)}_removeAttribute(e,t=!0){const n=t?"normal":"low";return(n!="low"||this._attributePriority.get(e)!="normal")&&(this._attributePriority.set(e,n),!!super.hasAttribute(e)&&(this._attrs.delete(e),!0))}_setAttributesTo(e){const t=new Set;for(const[n,o]of this.getAttributes())e.get(n)!==o&&this._removeAttribute(n,!1);for(const[n,o]of e)this._setAttribute(n,o,!1)&&t.add(n);return t}*_getStoredAttributes(){const e=this.getFirstPosition().parent;if(this.isCollapsed&&e.isEmpty)for(const t of e.getAttributeKeys())t.startsWith(Ho)&&(yield[t.substr(Ho.length),e.getAttribute(t)])}_getSurroundingAttributes(){const e=this.getFirstPosition(),t=this._model.schema;let n=null;if(this.isCollapsed){const o=e.textNode?e.textNode:e.nodeBefore,r=e.textNode?e.textNode:e.nodeAfter;if(this.isGravityOverridden||(n=Si(o)),n||(n=Si(r)),!this.isGravityOverridden&&!n){let s=o;for(;s&&!t.isInline(s)&&!n;)s=s.previousSibling,n=Si(s)}if(!n){let s=r;for(;s&&!t.isInline(s)&&!n;)s=s.nextSibling,n=Si(s)}n||(n=this._getStoredAttributes())}else{const o=this.getFirstRange();for(const r of o){if(r.item.is("element")&&t.isObject(r.item))break;if(r.type=="text"){n=r.item.getAttributes();break}}}return n}_fixGraveyardSelection(e){const t=this._model.schema.getNearestSelectionRange(e);t&&this._pushRange(t)}}function Si(i){return i instanceof an||i instanceof Pe?i.getAttributes():null}class Ic{constructor(e){this._dispatchers=e}add(e){for(const t of this._dispatchers)e(t);return this}}const Yt=function(i){return mr(i,5)};class Eb extends Ic{elementToElement(e){return this.add(function(t){return(t=Yt(t)).model=Bc(t.model),t.view=Uo(t.view,"container"),t.model.attributes.length&&(t.model.children=!0),n=>{n.on("insert:"+t.model.name,function(o,r=Mb){return(s,a,l)=>{if(!r(a.item,l.consumable,{preflight:!0}))return;const c=o(a.item,l,a);if(!c)return;r(a.item,l.consumable);const d=l.mapper.toViewPosition(a.range.start);l.mapper.bindElements(a.item,c),l.writer.insert(d,c),l.convertAttributes(a.item),Rc(c,a.item.getChildren(),l,{reconversion:a.reconversion})}}(t.view,Oc(t.model)),{priority:t.converterPriority||"normal"}),(t.model.children||t.model.attributes.length)&&n.on("reduceChanges",Lc(t.model),{priority:"low"})}}(e))}elementToStructure(e){return this.add(function(t){return(t=Yt(t)).model=Bc(t.model),t.view=Uo(t.view,"container"),t.model.children=!0,n=>{if(n._conversionApi.schema.checkChild(t.model.name,"$text"))throw new m("conversion-element-to-structure-disallowed-text",n,{elementName:t.model.name});var o,r;n.on("insert:"+t.model.name,(o=t.view,r=Oc(t.model),(s,a,l)=>{if(!r(a.item,l.consumable,{preflight:!0}))return;const c=new Map;l.writer._registerSlotFactory(function(h,p,k){return(w,v="children")=>{const E=w.createContainerElement("$slot");let P=null;if(v==="children")P=Array.from(h.getChildren());else{if(typeof v!="function")throw new m("conversion-slot-mode-unknown",k.dispatcher,{modeOrFilter:v});P=Array.from(h.getChildren()).filter(F=>v(F))}return p.set(E,P),E}}(a.item,c,l));const d=o(a.item,l,a);if(l.writer._clearSlotFactory(),!d)return;(function(h,p,k){const w=Array.from(p.values()).flat(),v=new Set(w);if(v.size!=w.length)throw new m("conversion-slot-filter-overlap",k.dispatcher,{element:h});if(v.size!=h.childCount)throw new m("conversion-slot-filter-incomplete",k.dispatcher,{element:h})})(a.item,c,l),r(a.item,l.consumable);const u=l.mapper.toViewPosition(a.range.start);l.mapper.bindElements(a.item,d),l.writer.insert(u,d),l.convertAttributes(a.item),function(h,p,k,w){k.mapper.on("modelToViewPosition",P,{priority:"highest"});let v=null,E=null;for([v,E]of p)Rc(h,E,k,w),k.writer.move(k.writer.createRangeIn(v),k.writer.createPositionBefore(v)),k.writer.remove(v);function P(F,J){const se=J.modelPosition.nodeAfter,Ne=E.indexOf(se);Ne<0||(J.viewPosition=J.mapper.findPositionIn(v,Ne))}k.mapper.off("modelToViewPosition",P)}(d,c,l,{reconversion:a.reconversion})}),{priority:t.converterPriority||"normal"}),n.on("reduceChanges",Lc(t.model),{priority:"low"})}}(e))}attributeToElement(e){return this.add(function(t){t=Yt(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const r of t.model.values)t.view[r]=Uo(t.view[r],"attribute");else t.view=Uo(t.view,"attribute");const o=Pc(t);return r=>{r.on(n,function(s){return(a,l,c)=>{if(!c.consumable.test(l.item,a.name))return;const d=s(l.attributeOldValue,c,l),u=s(l.attributeNewValue,c,l);if(!d&&!u)return;c.consumable.consume(l.item,a.name);const h=c.writer,p=h.document.selection;if(l.item instanceof mn||l.item instanceof Wt)h.wrap(p.getFirstRange(),u);else{let k=c.mapper.toViewRange(l.range);l.attributeOldValue!==null&&d&&(k=h.unwrap(k,d)),l.attributeNewValue!==null&&u&&h.wrap(k,u)}}}(o),{priority:t.converterPriority||"normal"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Yt(t);let n="attribute:"+(t.model.key?t.model.key:t.model);if(t.model.name&&(n+=":"+t.model.name),t.model.values)for(const r of t.model.values)t.view[r]=zc(t.view[r]);else t.view=zc(t.view);const o=Pc(t);return r=>{var s;r.on(n,(s=o,(a,l,c)=>{if(!c.consumable.test(l.item,a.name))return;const d=s(l.attributeOldValue,c,l),u=s(l.attributeNewValue,c,l);if(!d&&!u)return;c.consumable.consume(l.item,a.name);const h=c.mapper.toViewElement(l.item),p=c.writer;if(!h)throw new m("conversion-attribute-to-attribute-on-text",c.dispatcher,l);if(l.attributeOldValue!==null&&d)if(d.key=="class"){const k=it(d.value);for(const w of k)p.removeClass(w,h)}else if(d.key=="style"){const k=Object.keys(d.value);for(const w of k)p.removeStyle(w,h)}else p.removeAttribute(d.key,h);if(l.attributeNewValue!==null&&u)if(u.key=="class"){const k=it(u.value);for(const w of k)p.addClass(w,h)}else if(u.key=="style"){const k=Object.keys(u.value);for(const w of k)p.setStyle(w,u.value[w],h)}else p.setAttribute(u.key,u.value,h)}),{priority:t.converterPriority||"normal"})}}(e))}markerToElement(e){return this.add(function(t){return(t=Yt(t)).view=Uo(t.view,"ui"),n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(r,s,a)=>{s.isOpening=!0;const l=o(s,a);s.isOpening=!1;const c=o(s,a);if(!l||!c)return;const d=s.markerRange;if(d.isCollapsed&&!a.consumable.consume(d,r.name))return;for(const p of d)if(!a.consumable.consume(p.item,r.name))return;const u=a.mapper,h=a.writer;h.insert(u.toViewPosition(d.start),l),a.mapper.bindElementToMarker(l,s.markerName),d.isCollapsed||(h.insert(u.toViewPosition(d.end),c),a.mapper.bindElementToMarker(c,s.markerName)),r.stop()}),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,(t.view,(r,s,a)=>{const l=a.mapper.markerNameToElements(s.markerName);if(l){for(const c of l)a.mapper.unbindElementFromMarkerName(c,s.markerName),a.writer.clear(a.writer.createRangeOn(c),c);a.writer.clearClonedElementsGroup(s.markerName),r.stop()}}),{priority:t.converterPriority||"normal"})}}(e))}markerToHighlight(e){return this.add(function(t){return n=>{var o;n.on("addMarker:"+t.model,(o=t.view,(r,s,a)=>{if(!s.item||!(s.item instanceof mn||s.item instanceof Wt||s.item.is("$textProxy")))return;const l=Gr(o,s,a);if(!l||!a.consumable.consume(s.item,r.name))return;const c=a.writer,d=Tc(c,l),u=c.document.selection;if(s.item instanceof mn||s.item instanceof Wt)c.wrap(u.getFirstRange(),d,u);else{const h=a.mapper.toViewRange(s.range),p=c.wrap(h,d);for(const k of p.getItems())if(k.is("attributeElement")&&k.isSimilar(d)){a.mapper.bindElementToMarker(k,s.markerName);break}}}),{priority:t.converterPriority||"normal"}),n.on("addMarker:"+t.model,function(r){return(s,a,l)=>{if(!a.item||!(a.item instanceof Se))return;const c=Gr(r,a,l);if(!c||!l.consumable.test(a.item,s.name))return;const d=l.mapper.toViewElement(a.item);if(d&&d.getCustomProperty("addHighlight")){l.consumable.consume(a.item,s.name);for(const u of R._createIn(a.item))l.consumable.consume(u.item,s.name);d.getCustomProperty("addHighlight")(d,c,l.writer),l.mapper.bindElementToMarker(d,a.markerName)}}}(t.view),{priority:t.converterPriority||"normal"}),n.on("removeMarker:"+t.model,function(r){return(s,a,l)=>{if(a.markerRange.isCollapsed)return;const c=Gr(r,a,l);if(!c)return;const d=Tc(l.writer,c),u=l.mapper.markerNameToElements(a.markerName);if(u){for(const h of u)l.mapper.unbindElementFromMarkerName(h,a.markerName),h.is("attributeElement")?l.writer.unwrap(l.writer.createRangeOn(h),d):h.getCustomProperty("removeHighlight")(h,c.id,l.writer);l.writer.clearClonedElementsGroup(a.markerName),s.stop()}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}markerToData(e){return this.add(function(t){const n=(t=Yt(t)).model;return t.view||(t.view=o=>({group:n,name:o.substr(t.model.length+1)})),o=>{var r;o.on("addMarker:"+n,(r=t.view,(s,a,l)=>{const c=r(a.markerName,l);if(!c)return;const d=a.markerRange;l.consumable.consume(d,s.name)&&(Nc(d,!1,l,a,c),Nc(d,!0,l,a,c),s.stop())}),{priority:t.converterPriority||"normal"}),o.on("removeMarker:"+n,function(s){return(a,l,c)=>{const d=s(l.markerName,c);if(!d)return;const u=c.mapper.markerNameToElements(l.markerName);if(u){for(const p of u)c.mapper.unbindElementFromMarkerName(p,l.markerName),p.is("containerElement")?(h(`data-${d.group}-start-before`,p),h(`data-${d.group}-start-after`,p),h(`data-${d.group}-end-before`,p),h(`data-${d.group}-end-after`,p)):c.writer.clear(c.writer.createRangeOn(p),p);c.writer.clearClonedElementsGroup(l.markerName),a.stop()}function h(p,k){if(k.hasAttribute(p)){const w=new Set(k.getAttribute(p).split(","));w.delete(d.name),w.size==0?c.writer.removeAttribute(p,k):c.writer.setAttribute(p,Array.from(w).join(","),k)}}}}(t.view),{priority:t.converterPriority||"normal"})}}(e))}}function Tc(i,e){const t=i.createAttributeElement("span",e.attributes);return e.classes&&t._addClass(e.classes),typeof e.priority=="number"&&(t._priority=e.priority),t._id=e.id,t}function Nc(i,e,t,n,o){const r=e?i.start:i.end,s=r.nodeAfter&&r.nodeAfter.is("element")?r.nodeAfter:null,a=r.nodeBefore&&r.nodeBefore.is("element")?r.nodeBefore:null;if(s||a){let l,c;e&&s||!e&&!a?(l=s,c=!0):(l=a,c=!1);const d=t.mapper.toViewElement(l);if(d)return void function(u,h,p,k,w,v){const E=`data-${v.group}-${h?"start":"end"}-${p?"before":"after"}`,P=u.hasAttribute(E)?u.getAttribute(E).split(","):[];P.unshift(v.name),k.writer.setAttribute(E,P.join(","),u),k.mapper.bindElementToMarker(u,w.markerName)}(d,e,c,t,n,o)}(function(l,c,d,u,h){const p=`${h.group}-${c?"start":"end"}`,k=h.name?{name:h.name}:null,w=d.writer.createUIElement(p,k);d.writer.insert(l,w),d.mapper.bindElementToMarker(w,u.markerName)})(t.mapper.toViewPosition(r),e,t,n,o)}function Bc(i){return typeof i=="string"&&(i={name:i}),i.attributes?Array.isArray(i.attributes)||(i.attributes=[i.attributes]):i.attributes=[],i.children=!!i.children,i}function Uo(i,e){return typeof i=="function"?i:(t,n)=>function(o,r,s){typeof o=="string"&&(o={name:o});let a;const l=r.writer,c=Object.assign({},o.attributes);if(s=="container")a=l.createContainerElement(o.name,c);else if(s=="attribute"){const d={priority:o.priority||lo.DEFAULT_PRIORITY};a=l.createAttributeElement(o.name,c,d)}else a=l.createUIElement(o.name,c);if(o.styles){const d=Object.keys(o.styles);for(const u of d)l.setStyle(u,o.styles[u],a)}if(o.classes){const d=o.classes;if(typeof d=="string")l.addClass(d,a);else for(const u of d)l.addClass(u,a)}return a}(i,n,e)}function Pc(i){return i.model.values?(e,t)=>{const n=i.view[e];return n?n(e,t):null}:i.view}function zc(i){return typeof i=="string"?e=>({key:i,value:e}):typeof i=="object"?i.value?()=>i:e=>({key:i.key,value:e}):i}function Gr(i,e,t){const n=typeof i=="function"?i(e,t):i;return n?(n.priority||(n.priority=10),n.id||(n.id=e.markerName),n):null}function Lc(i){const e=function(t){return(n,o)=>{if(!n.is("element",t.name))return!1;if(o.type=="attribute"){if(t.attributes.includes(o.attributeKey))return!0}else if(t.children)return!0;return!1}}(i);return(t,n)=>{const o=[];n.reconvertedElements||(n.reconvertedElements=new Set);for(const r of n.changes){const s=r.position?r.position.parent:r.range.start.nodeAfter;if(s&&e(s,r)){if(!n.reconvertedElements.has(s)){n.reconvertedElements.add(s);const a=H._createBefore(s);o.push({type:"remove",name:s.name,position:a,length:1},{type:"reinsert",name:s.name,position:a,length:1})}}else o.push(r)}n.changes=o}}function Oc(i){return(e,t,n={})=>{const o=["insert"];for(const r of i.attributes)e.hasAttribute(r)&&o.push(`attribute:${r}`);return!!o.every(r=>t.test(e,r))&&(n.preflight||o.forEach(r=>t.consume(e,r)),!0)}}function Rc(i,e,t,n){for(const o of e)Sb(i.root,o,t,n)||t.convertItem(o)}function Sb(i,e,t,n){const{writer:o,mapper:r}=t;if(!n.reconversion)return!1;const s=r.toViewElement(e);return!(!s||s.root==i)&&!!t.canReuseView(s)&&(o.move(o.createRangeOn(s),r.toViewPosition(H._createBefore(e))),!0)}function Mb(i,e,{preflight:t}={}){return t?e.test(i,"insert"):e.consume(i,"insert")}function jc(i){const{schema:e,document:t}=i.model;for(const n of t.getRootNames()){const o=t.getRoot(n);if(o.isEmpty&&!e.checkChild(o,"$text")&&e.checkChild(o,"paragraph"))return i.insertElement("paragraph",o),!0}return!1}function Fc(i,e,t){const n=t.createContext(i);return!!t.checkChild(n,"paragraph")&&!!t.checkChild(n.push("paragraph"),e)}function Vc(i,e){const t=e.createElement("paragraph");return e.insert(t,i),e.createPositionAt(t,0)}class Ib extends Ic{elementToElement(e){return this.add(Hc(e))}elementToAttribute(e){return this.add(function(t){Uc(t=Yt(t));const n=$c(t,!1),o=Wr(t.view),r=o?"element:"+o:"element";return s=>{s.on(r,n,{priority:t.converterPriority||"low"})}}(e))}attributeToAttribute(e){return this.add(function(t){t=Yt(t);let n=null;(typeof t.view=="string"||t.view.key)&&(n=function(r){typeof r.view=="string"&&(r.view={key:r.view});const s=r.view.key;let a;return s=="class"||s=="style"?a={[s=="class"?"classes":"styles"]:r.view.value}:a={attributes:{[s]:r.view.value===void 0?/[\s\S]*/:r.view.value}},r.view.name&&(a.name=r.view.name),r.view=a,s}(t)),Uc(t,n);const o=$c(t,!0);return r=>{r.on("element",o,{priority:t.converterPriority||"low"})}}(e))}elementToMarker(e){return this.add(function(t){return function(n){const o=n.model;n.model=(r,s)=>{const a=typeof o=="string"?o:o(r,s);return s.writer.createElement("$marker",{"data-name":a})}}(t=Yt(t)),Hc(t)}(e))}dataToMarker(e){return this.add(function(t){(t=Yt(t)).model||(t.model=r=>r?t.view+":"+r:t.view);const n=Yr(qc(t,"start")),o=Yr(qc(t,"end"));return r=>{r.on("element:"+t.view+"-start",n,{priority:t.converterPriority||"normal"}),r.on("element:"+t.view+"-end",o,{priority:t.converterPriority||"normal"});const s=D.get("low"),a=D.get("highest"),l=D.get(t.converterPriority)/a;r.on("element",function(c){return(d,u,h)=>{const p=`data-${c.view}`;function k(w,v){for(const E of v){const P=c.model(E,h),F=h.writer.createElement("$marker",{"data-name":P});h.writer.insert(F,w),u.modelCursor.isEqual(w)?u.modelCursor=u.modelCursor.getShiftedBy(1):u.modelCursor=u.modelCursor._getTransformedByInsertion(w,1),u.modelRange=u.modelRange._getTransformedByInsertion(w,1)[0]}}(h.consumable.test(u.viewItem,{attributes:p+"-end-after"})||h.consumable.test(u.viewItem,{attributes:p+"-start-after"})||h.consumable.test(u.viewItem,{attributes:p+"-end-before"})||h.consumable.test(u.viewItem,{attributes:p+"-start-before"}))&&(u.modelRange||Object.assign(u,h.convertChildren(u.viewItem,u.modelCursor)),h.consumable.consume(u.viewItem,{attributes:p+"-end-after"})&&k(u.modelRange.end,u.viewItem.getAttribute(p+"-end-after").split(",")),h.consumable.consume(u.viewItem,{attributes:p+"-start-after"})&&k(u.modelRange.end,u.viewItem.getAttribute(p+"-start-after").split(",")),h.consumable.consume(u.viewItem,{attributes:p+"-end-before"})&&k(u.modelRange.start,u.viewItem.getAttribute(p+"-end-before").split(",")),h.consumable.consume(u.viewItem,{attributes:p+"-start-before"})&&k(u.modelRange.start,u.viewItem.getAttribute(p+"-start-before").split(",")))}}(t),{priority:s+l})}}(e))}}function Hc(i){const e=Yr(i=Yt(i)),t=Wr(i.view),n=t?"element:"+t:"element";return o=>{o.on(n,e,{priority:i.converterPriority||"normal"})}}function Wr(i){return typeof i=="string"?i:typeof i=="object"&&typeof i.name=="string"?i.name:null}function Yr(i){const e=new on(i.view);return(t,n,o)=>{const r=e.match(n.viewItem);if(!r)return;const s=r.match;if(s.name=!0,!o.consumable.test(n.viewItem,s))return;const a=function(l,c,d){return l instanceof Function?l(c,d):d.writer.createElement(l)}(i.model,n.viewItem,o);a&&o.safeInsert(a,n.modelCursor)&&(o.consumable.consume(n.viewItem,s),o.convertChildren(n.viewItem,a),o.updateConversionResult(a,n))}}function Uc(i,e=null){const t=e===null||(r=>r.getAttribute(e)),n=typeof i.model!="object"?i.model:i.model.key,o=typeof i.model!="object"||i.model.value===void 0?t:i.model.value;i.model={key:n,value:o}}function $c(i,e){const t=new on(i.view);return(n,o,r)=>{if(!o.modelRange&&e)return;const s=t.match(o.viewItem);if(!s||(function(d,u){const h=typeof d=="function"?d(u):d;return typeof h=="object"&&!Wr(h)?!1:!h.classes&&!h.attributes&&!h.styles}(i.view,o.viewItem)?s.match.name=!0:delete s.match.name,!r.consumable.test(o.viewItem,s.match)))return;const a=i.model.key,l=typeof i.model.value=="function"?i.model.value(o.viewItem,r):i.model.value;if(l===null)return;o.modelRange||Object.assign(o,r.convertChildren(o.viewItem,o.modelCursor)),function(d,u,h,p){let k=!1;for(const w of Array.from(d.getItems({shallow:h})))p.schema.checkAttribute(w,u.key)&&(k=!0,w.hasAttribute(u.key)||p.writer.setAttribute(u.key,u.value,w));return k}(o.modelRange,{key:a,value:l},e,r)&&(r.consumable.test(o.viewItem,{name:!0})&&(s.match.name=!0),r.consumable.consume(o.viewItem,s.match))}}function qc(i,e){const t={};return t.view=i.view+"-"+e,t.model=(n,o)=>{const r=n.getAttribute("name"),s=i.model(r,o);return o.writer.createElement("$marker",{"data-name":s})},t}class Gc{constructor(e,t){this.model=e,this.view=new yc(t),this.mapper=new Ur,this.downcastDispatcher=new $r({mapper:this.mapper,schema:e.schema});const n=this.model.document,o=n.selection,r=this.model.markers;this.listenTo(this.model,"_beforeChanges",()=>{this.view._disableRendering(!0)},{priority:"highest"}),this.listenTo(this.model,"_afterChanges",()=>{this.view._disableRendering(!1)},{priority:"lowest"}),this.listenTo(n,"change",()=>{this.view.change(s=>{this.downcastDispatcher.convertChanges(n.differ,r,s),this.downcastDispatcher.convertSelection(o,r,s)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(s,a){return(l,c)=>{const d=c.newSelection,u=[];for(const p of d.getRanges())u.push(a.toModelRange(p));const h=s.createSelection(u,{backward:d.isBackward});h.isEqual(s.document.selection)||s.change(p=>{p.setSelection(h)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(s,a,l)=>{if(!l.consumable.consume(a.item,s.name))return;const c=l.writer,d=l.mapper.toViewPosition(a.range.start),u=c.createText(a.item.data);c.insert(d,u)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(s,a,l)=>{l.convertAttributes(a.item),a.reconversion||!a.item.is("element")||a.item.isEmpty||l.convertChildren(a.item)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(s,a,l)=>{const c=l.mapper.toViewPosition(a.position),d=a.position.getShiftedBy(a.length),u=l.mapper.toViewPosition(d,{isPhantom:!0}),h=l.writer.createRange(c,u),p=l.writer.remove(h.getTrimmed());for(const k of l.writer.createRangeIn(p).getItems())l.mapper.unbindViewElement(k,{defer:!0})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,l)=>{const c=l.writer,d=c.document.selection;for(const u of d.getRanges())u.isCollapsed&&u.end.parent.isAttached()&&l.writer.mergeAttributes(u.start);c.setSelection(null)},{priority:"high"}),this.downcastDispatcher.on("selection",(s,a,l)=>{const c=a.selection;if(c.isCollapsed||!l.consumable.consume(c,"selection"))return;const d=[];for(const u of c.getRanges()){const h=l.mapper.toViewRange(u);d.push(h)}l.writer.setSelection(d,{backward:c.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(s,a,l)=>{const c=a.selection;if(!c.isCollapsed||!l.consumable.consume(c,"selection"))return;const d=l.writer,u=c.getFirstPosition(),h=l.mapper.toViewPosition(u),p=d.breakAttributes(h);d.setSelection(p)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(s=>{if(s.rootName=="$graveyard")return null;const a=new Ak(this.view.document,s.name);return a.rootName=s.rootName,this.mapper.bindElements(s,a),a})}destroy(){this.view.destroy(),this.stopListening()}reconvertMarker(e){const t=typeof e=="string"?e:e.name,n=this.model.markers.get(t);if(!n)throw new m("editingcontroller-reconvertmarker-marker-not-exist",this,{markerName:t});this.model.change(()=>{this.model.markers._refresh(n)})}reconvertItem(e){this.model.change(()=>{this.model.document.differ._refreshItem(e)})}}ie(Gc,Le);class Tb{constructor(){this._commands=new Map}add(e,t){this._commands.set(e,t)}get(e){return this._commands.get(e)}execute(e,...t){const n=this.get(e);if(!n)throw new m("commandcollection-command-not-found",this,{commandName:e});return n.execute(...t)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const e of this.commands())e.destroy()}}class $o{constructor(){this._consumables=new Map}add(e,t){let n;e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):(this._consumables.has(e)?n=this._consumables.get(e):(n=new Nb(e),this._consumables.set(e,n)),n.add(t))}test(e,t){const n=this._consumables.get(e);return n===void 0?null:e.is("$text")||e.is("documentFragment")?n:n.test(t)}consume(e,t){return!!this.test(e,t)&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!1):this._consumables.get(e).consume(t),!0)}revert(e,t){const n=this._consumables.get(e);n!==void 0&&(e.is("$text")||e.is("documentFragment")?this._consumables.set(e,!0):n.revert(t))}static consumablesFromElement(e){const t={element:e,name:!0,attributes:[],classes:[],styles:[]},n=e.getAttributeKeys();for(const s of n)s!="style"&&s!="class"&&t.attributes.push(s);const o=e.getClassNames();for(const s of o)t.classes.push(s);const r=e.getStyleNames();for(const s of r)t.styles.push(s);return t}static createFrom(e,t){if(t||(t=new $o(e)),e.is("$text"))return t.add(e),t;e.is("element")&&t.add(e,$o.consumablesFromElement(e)),e.is("documentFragment")&&t.add(e);for(const n of e.getChildren())t=$o.createFrom(n,t);return t}}class Nb{constructor(e){this.element=e,this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._add(t,e[t])}test(e){if(e.name&&!this._canConsumeName)return this._canConsumeName;for(const t in this._consumables)if(t in e){const n=this._test(t,e[t]);if(n!==!0)return n}return!0}consume(e){e.name&&(this._canConsumeName=!1);for(const t in this._consumables)t in e&&this._consume(t,e[t])}revert(e){e.name&&(this._canConsumeName=!0);for(const t in this._consumables)t in e&&this._revert(t,e[t])}_add(e,t){const n=At(t)?t:[t],o=this._consumables[e];for(const r of n){if(e==="attributes"&&(r==="class"||r==="style"))throw new m("viewconsumable-invalid-attribute",this);if(o.set(r,!0),e==="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!0)}}_test(e,t){const n=At(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){const s=o.get(r);if(s===void 0)return null;if(!s)return!1}else{const s=r=="class"?"classes":"styles",a=this._test(s,[...this._consumables[s].keys()]);if(a!==!0)return a}return!0}_consume(e,t){const n=At(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style"){if(o.set(r,!1),e=="styles")for(const s of this.element.document.stylesProcessor.getRelatedStyles(r))o.set(s,!1)}else{const s=r=="class"?"classes":"styles";this._consume(s,[...this._consumables[s].keys()])}}_revert(e,t){const n=At(t)?t:[t],o=this._consumables[e];for(const r of n)if(e!=="attributes"||r!=="class"&&r!=="style")o.get(r)===!1&&o.set(r,!0);else{const s=r=="class"?"classes":"styles";this._revert(s,[...this._consumables[s].keys()])}}}class Wc{constructor(){this._sourceDefinitions={},this._attributeProperties={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(e,t)=>{t[0]=new Un(t[0])},{priority:"highest"}),this.on("checkChild",(e,t)=>{t[0]=new Un(t[0]),t[1]=this.getDefinition(t[1])},{priority:"highest"})}register(e,t){if(this._sourceDefinitions[e])throw new m("schema-cannot-register-item-twice",this,{itemName:e});this._sourceDefinitions[e]=[Object.assign({},t)],this._clearCache()}extend(e,t){if(!this._sourceDefinitions[e])throw new m("schema-cannot-extend-missing-item",this,{itemName:e});this._sourceDefinitions[e].push(Object.assign({},t)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(e){let t;return t=typeof e=="string"?e:e.is&&(e.is("$text")||e.is("$textProxy"))?"$text":e.name,this.getDefinitions()[t]}isRegistered(e){return!!this.getDefinition(e)}isBlock(e){const t=this.getDefinition(e);return!(!t||!t.isBlock)}isLimit(e){const t=this.getDefinition(e);return!!t&&!(!t.isLimit&&!t.isObject)}isObject(e){const t=this.getDefinition(e);return!!t&&!!(t.isObject||t.isLimit&&t.isSelectable&&t.isContent)}isInline(e){const t=this.getDefinition(e);return!(!t||!t.isInline)}isSelectable(e){const t=this.getDefinition(e);return!!t&&!(!t.isSelectable&&!t.isObject)}isContent(e){const t=this.getDefinition(e);return!!t&&!(!t.isContent&&!t.isObject)}checkChild(e,t){return!!t&&this._checkContextMatch(t,e)}checkAttribute(e,t){const n=this.getDefinition(e.last);return!!n&&n.allowAttributes.includes(t)}checkMerge(e,t=null){if(e instanceof H){const n=e.nodeBefore,o=e.nodeAfter;if(!(n instanceof Se))throw new m("schema-check-merge-no-element-before",this);if(!(o instanceof Se))throw new m("schema-check-merge-no-element-after",this);return this.checkMerge(n,o)}for(const n of t.getChildren())if(!this.checkChild(e,n))return!1;return!0}addChildCheck(e){this.on("checkChild",(t,[n,o])=>{if(!o)return;const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}addAttributeCheck(e){this.on("checkAttribute",(t,[n,o])=>{const r=e(n,o);typeof r=="boolean"&&(t.stop(),t.return=r)},{priority:"high"})}setAttributeProperties(e,t){this._attributeProperties[e]=Object.assign(this.getAttributeProperties(e),t)}getAttributeProperties(e){return this._attributeProperties[e]||{}}getLimitElement(e){let t;for(e instanceof H?t=e.parent:t=(e instanceof R?[e]:Array.from(e.getRanges())).reduce((n,o)=>{const r=o.getCommonAncestor();return n?n.getCommonAncestor(r,{includeSelf:!0}):r},null);!this.isLimit(t)&&t.parent;)t=t.parent;return t}checkAttributeInSelection(e,t){if(e.isCollapsed){const n=[...e.getFirstPosition().getAncestors(),new Pe("",e.getAttributes())];return this.checkAttribute(n,t)}{const n=e.getRanges();for(const o of n)for(const r of o)if(this.checkAttribute(r.item,t))return!0}return!1}*getValidRanges(e,t){e=function*(n){for(const o of n)yield*o.getMinimalFlatRanges()}(e);for(const n of e)yield*this._getValidRangesForRange(n,t)}getNearestSelectionRange(e,t="both"){if(this.checkChild(e,"$text"))return new R(e);let n,o;const r=e.getAncestors().reverse().find(s=>this.isLimit(s))||e.root;t!="both"&&t!="backward"||(n=new pn({boundaries:R._createIn(r),startPosition:e,direction:"backward"})),t!="both"&&t!="forward"||(o=new pn({boundaries:R._createIn(r),startPosition:e}));for(const s of function*(a,l){let c=!1;for(;!c;){if(c=!0,a){const d=a.next();d.done||(c=!1,yield{walker:a,value:d.value})}if(l){const d=l.next();d.done||(c=!1,yield{walker:l,value:d.value})}}}(n,o)){const a=s.walker==n?"elementEnd":"elementStart",l=s.value;if(l.type==a&&this.isObject(l.item))return R._createOn(l.item);if(this.checkChild(l.nextPosition,"$text"))return new R(l.nextPosition)}return null}findAllowedParent(e,t){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}setAllowedAttributes(e,t,n){const o=n.model;for(const[r,s]of Object.entries(t))o.schema.checkAttribute(e,r)&&n.setAttribute(r,s,e)}removeDisallowedAttributes(e,t){for(const n of e)if(n.is("$text"))Yc(this,n,t);else{const o=R._createIn(n).getPositions();for(const r of o)Yc(this,r.nodeBefore||r.parent,t)}}getAttributesWithProperty(e,t,n){const o={};for(const[r,s]of e.getAttributes()){const a=this.getAttributeProperties(r);a[t]!==void 0&&(n!==void 0&&n!==a[t]||(o[r]=s))}return o}createContext(e){return new Un(e)}_clearCache(){this._compiledDefinitions=null}_compile(){const e={},t=this._sourceDefinitions,n=Object.keys(t);for(const o of n)e[o]=Bb(t[o],o);for(const o of n)Pb(e,o);for(const o of n)zb(e,o);for(const o of n)Lb(e,o);for(const o of n)Ob(e,o),Rb(e,o);for(const o of n)jb(e,o),Fb(e,o),Vb(e,o);this._compiledDefinitions=e}_checkContextMatch(e,t,n=t.length-1){const o=t.getItem(n);if(e.allowIn.includes(o.name)){if(n==0)return!0;{const r=this.getDefinition(o);return this._checkContextMatch(r,t,n-1)}}return!1}*_getValidRangesForRange(e,t){let n=e.start,o=e.start;for(const r of e.getItems({shallow:!0}))r.is("element")&&(yield*this._getValidRangesForRange(R._createIn(r),t)),this.checkAttribute(r,t)||(n.isEqual(o)||(yield new R(n,o)),n=H._createAfter(r)),o=H._createAfter(r);n.isEqual(o)||(yield new R(n,o))}}ie(Wc,Le);class Un{constructor(e){if(e instanceof Un)return e;typeof e=="string"?e=[e]:Array.isArray(e)||(e=e.getAncestors({includeSelf:!0})),this._items=e.map(Ub)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(e){const t=new Un([e]);return t._items=[...this._items,...t._items],t}getItem(e){return this._items[e]}*getNames(){yield*this._items.map(e=>e.name)}endsWith(e){return Array.from(this.getNames()).join(" ").endsWith(e)}startsWith(e){return Array.from(this.getNames()).join(" ").startsWith(e)}}function Bb(i,e){const t={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],allowChildren:[],inheritTypesFrom:[]};return function(n,o){for(const r of n){const s=Object.keys(r).filter(a=>a.startsWith("is"));for(const a of s)o[a]=r[a]}}(i,t),$n(i,t,"allowIn"),$n(i,t,"allowContentOf"),$n(i,t,"allowWhere"),$n(i,t,"allowAttributes"),$n(i,t,"allowAttributesOf"),$n(i,t,"allowChildren"),$n(i,t,"inheritTypesFrom"),function(n,o){for(const r of n){const s=r.inheritAllFrom;s&&(o.allowContentOf.push(s),o.allowWhere.push(s),o.allowAttributesOf.push(s),o.inheritTypesFrom.push(s))}}(i,t),t}function Pb(i,e){const t=i[e];for(const n of t.allowChildren){const o=i[n];o&&o.allowIn.push(e)}t.allowChildren.length=0}function zb(i,e){for(const t of i[e].allowContentOf)i[t]&&Hb(i,t).forEach(n=>{n.allowIn.push(e)});delete i[e].allowContentOf}function Lb(i,e){for(const t of i[e].allowWhere){const n=i[t];if(n){const o=n.allowIn;i[e].allowIn.push(...o)}}delete i[e].allowWhere}function Ob(i,e){for(const t of i[e].allowAttributesOf){const n=i[t];if(n){const o=n.allowAttributes;i[e].allowAttributes.push(...o)}}delete i[e].allowAttributesOf}function Rb(i,e){const t=i[e];for(const n of t.inheritTypesFrom){const o=i[n];if(o){const r=Object.keys(o).filter(s=>s.startsWith("is"));for(const s of r)s in t||(t[s]=o[s])}}delete t.inheritTypesFrom}function jb(i,e){const t=i[e],n=t.allowIn.filter(o=>i[o]);t.allowIn=Array.from(new Set(n))}function Fb(i,e){const t=i[e];for(const n of t.allowIn)i[n].allowChildren.push(e)}function Vb(i,e){const t=i[e];t.allowAttributes=Array.from(new Set(t.allowAttributes))}function $n(i,e,t){for(const n of i)typeof n[t]=="string"?e[t].push(n[t]):Array.isArray(n[t])&&e[t].push(...n[t])}function Hb(i,e){const t=i[e];return(n=i,Object.keys(n).map(o=>n[o])).filter(o=>o.allowIn.includes(t.name));var n}function Ub(i){return typeof i=="string"||i.is("documentFragment")?{name:typeof i=="string"?i:"$documentFragment",*getAttributeKeys(){},getAttribute(){}}:{name:i.is("element")?i.name:"$text",*getAttributeKeys(){yield*i.getAttributeKeys()},getAttribute:e=>i.getAttribute(e)}}function Yc(i,e,t){for(const n of e.getAttributeKeys())i.checkAttribute(e,n)||t.removeAttribute(n,e)}class Kc{constructor(e={}){this._splitParts=new Map,this._cursorParents=new Map,this._modelCursor=null,this._emptyElementsToKeep=new Set,this.conversionApi=Object.assign({},e),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.safeInsert=this._safeInsert.bind(this),this.conversionApi.updateConversionResult=this._updateConversionResult.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this),this.conversionApi.getSplitParts=this._getSplitParts.bind(this),this.conversionApi.keepEmptyElement=this._keepEmptyElement.bind(this)}convert(e,t,n=["$root"]){this.fire("viewCleanup",e),this._modelCursor=function(s,a){let l;for(const c of new Un(s)){const d={};for(const h of c.getAttributeKeys())d[h]=c.getAttribute(h);const u=a.createElement(c.name,d);l&&a.append(u,l),l=H._createAt(u,0)}return l}(n,t),this.conversionApi.writer=t,this.conversionApi.consumable=$o.createFrom(e),this.conversionApi.store={};const{modelRange:o}=this._convertItem(e,this._modelCursor),r=t.createDocumentFragment();if(o){this._removeEmptyElements();for(const s of Array.from(this._modelCursor.parent.getChildren()))t.append(s,r);r.markers=function(s,a){const l=new Set,c=new Map,d=R._createIn(s).getItems();for(const u of d)u.name=="$marker"&&l.add(u);for(const u of l){const h=u.getAttribute("data-name"),p=a.createPositionBefore(u);c.has(h)?c.get(h).end=p.clone():c.set(h,new R(p.clone())),a.remove(u)}return c}(r,t)}return this._modelCursor=null,this._splitParts.clear(),this._cursorParents.clear(),this._emptyElementsToKeep.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,r}_convertItem(e,t){const n=Object.assign({viewItem:e,modelCursor:t,modelRange:null});if(e.is("element")?this.fire("element:"+e.name,n,this.conversionApi):e.is("$text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof R))throw new m("view-conversion-dispatcher-incorrect-result",this);return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(e,t){let n=t.is("position")?t:H._createAt(t,0);const o=new R(n);for(const r of Array.from(e.getChildren())){const s=this._convertItem(r,n);s.modelRange instanceof R&&(o.end=s.modelRange.end,n=s.modelCursor)}return{modelRange:o,modelCursor:n}}_safeInsert(e,t){const n=this._splitToAllowedParent(e,t);return!!n&&(this.conversionApi.writer.insert(e,n.position),!0)}_updateConversionResult(e,t){const n=this._getSplitParts(e),o=this.conversionApi.writer;t.modelRange||(t.modelRange=o.createRange(o.createPositionBefore(e),o.createPositionAfter(n[n.length-1])));const r=this._cursorParents.get(e);t.modelCursor=r?o.createPositionAt(r,0):t.modelRange.end}_splitToAllowedParent(e,t){const{schema:n,writer:o}=this.conversionApi;let r=n.findAllowedParent(t,e);if(r){if(r===t.parent)return{position:t};this._modelCursor.parent.getAncestors().includes(r)&&(r=null)}if(!r)return Fc(t,e,n)?{position:Vc(t,o)}:null;const s=this.conversionApi.writer.split(t,r),a=[];for(const c of s.range.getWalker())if(c.type=="elementEnd")a.push(c.item);else{const d=a.pop(),u=c.item;this._registerSplitPair(d,u)}const l=s.range.end.parent;return this._cursorParents.set(e,l),{position:s.position,cursorParent:l}}_registerSplitPair(e,t){this._splitParts.has(e)||this._splitParts.set(e,[e]);const n=this._splitParts.get(e);this._splitParts.set(t,n),n.push(t)}_getSplitParts(e){let t;return t=this._splitParts.has(e)?this._splitParts.get(e):[e],t}_keepEmptyElement(e){this._emptyElementsToKeep.add(e)}_removeEmptyElements(){let e=!1;for(const t of this._splitParts.keys())t.isEmpty&&!this._emptyElementsToKeep.has(t)&&(this.conversionApi.writer.remove(t),this._splitParts.delete(t),e=!0);e&&this._removeEmptyElements()}}ie(Kc,fe);class $b{getHtml(e){const t=document.implementation.createHTMLDocument("").createElement("div");return t.appendChild(e),t.innerHTML}}class qb{constructor(e){this.domParser=new DOMParser,this.domConverter=new _i(e,{renderingMode:"data"}),this.htmlWriter=new $b}toData(e){const t=this.domConverter.viewToDom(e,document);return this.htmlWriter.getHtml(t)}toView(e){const t=this._toDom(e);return this.domConverter.domToView(t)}registerRawContentMatcher(e){this.domConverter.registerRawContentMatcher(e)}useFillerType(e){this.domConverter.blockFillerMode=e=="marked"?"markedNbsp":"nbsp"}_toDom(e){e.match(/<(?:html|body|head|meta)(?:\s[^>]*)?>/i)||(e=`<body>${e}</body>`);const t=this.domParser.parseFromString(e,"text/html"),n=t.createDocumentFragment(),o=t.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class Qc{constructor(e,t){this.model=e,this.mapper=new Ur,this.downcastDispatcher=new $r({mapper:this.mapper,schema:e.schema}),this.downcastDispatcher.on("insert:$text",(n,o,r)=>{if(!r.consumable.consume(o.item,n.name))return;const s=r.writer,a=r.mapper.toViewPosition(o.range.start),l=s.createText(o.item.data);s.insert(a,l)},{priority:"lowest"}),this.downcastDispatcher.on("insert",(n,o,r)=>{r.convertAttributes(o.item),o.reconversion||!o.item.is("element")||o.item.isEmpty||r.convertChildren(o.item)},{priority:"lowest"}),this.upcastDispatcher=new Kc({schema:e.schema}),this.viewDocument=new jo(t),this.stylesProcessor=t,this.htmlProcessor=new qb(this.viewDocument),this.processor=this.htmlProcessor,this._viewWriter=new Nl(this.viewDocument),this.upcastDispatcher.on("text",(n,o,{schema:r,consumable:s,writer:a})=>{let l=o.modelCursor;if(!s.test(o.viewItem))return;if(!r.checkChild(l,"$text")){if(!Fc(l,"$text",r)||o.viewItem.data.trim().length==0)return;l=Vc(l,a)}s.consume(o.viewItem);const c=a.createText(o.viewItem.data);a.insert(c,l),o.modelRange=a.createRange(l,l.getShiftedBy(c.offsetSize)),o.modelCursor=o.modelRange.end},{priority:"lowest"}),this.upcastDispatcher.on("element",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(n,o,r)=>{if(!o.modelRange&&r.consumable.consume(o.viewItem,{name:!0})){const{modelRange:s,modelCursor:a}=r.convertChildren(o.viewItem,o.modelCursor);o.modelRange=s,o.modelCursor=a}},{priority:"lowest"}),this.decorate("init"),this.decorate("set"),this.decorate("get"),this.on("init",()=>{this.fire("ready")},{priority:"lowest"}),this.on("ready",()=>{this.model.enqueueChange({isUndoable:!1},jc)},{priority:"lowest"})}get(e={}){const{rootName:t="main",trim:n="empty"}=e;if(!this._checkIfRootsExists([t]))throw new m("datacontroller-get-non-existent-root",this);const o=this.model.document.getRoot(t);return n!=="empty"||this.model.hasContent(o,{ignoreWhitespaces:!0})?this.stringify(o,e):""}stringify(e,t={}){const n=this.toView(e,t);return this.processor.toData(n)}toView(e,t={}){const n=this.viewDocument,o=this._viewWriter;this.mapper.clearBindings();const r=R._createIn(e),s=new Fn(n);this.mapper.bindElements(e,s);const a=e.is("documentFragment")?e.markers:function(l){const c=[],d=l.root.document;if(!d)return new Map;const u=R._createIn(l);for(const h of d.model.markers){const p=h.getRange(),k=p.isCollapsed,w=p.start.isEqual(u.start)||p.end.isEqual(u.end);if(k&&w)c.push([h.name,p]);else{const v=u.getIntersection(p);v&&c.push([h.name,v])}}return c.sort(([h,p],[k,w])=>{if(p.end.compareWith(w.start)!=="after")return 1;if(p.start.compareWith(w.end)!=="before")return-1;switch(p.start.compareWith(w.start)){case"before":return 1;case"after":return-1;default:switch(p.end.compareWith(w.end)){case"before":return 1;case"after":return-1;default:return k.localeCompare(h)}}}),new Map(c)}(e);return this.downcastDispatcher.convert(r,a,o,t),s}init(e){if(this.model.document.version)throw new m("datacontroller-init-document-not-empty",this);let t={};if(typeof e=="string"?t.main=e:t=e,!this._checkIfRootsExists(Object.keys(t)))throw new m("datacontroller-init-non-existent-root",this);return this.model.enqueueChange({isUndoable:!1},n=>{for(const o of Object.keys(t)){const r=this.model.document.getRoot(o);n.insert(this.parse(t[o],r),r,0)}}),Promise.resolve()}set(e,t={}){let n={};if(typeof e=="string"?n.main=e:n=e,!this._checkIfRootsExists(Object.keys(n)))throw new m("datacontroller-set-non-existent-root",this);this.model.enqueueChange(t.batchType||{},o=>{o.setSelection(null),o.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());for(const r of Object.keys(n)){const s=this.model.document.getRoot(r);o.remove(o.createRangeIn(s)),o.insert(this.parse(n[r],s),s,0)}})}parse(e,t="$root"){const n=this.processor.toView(e);return this.toModel(n,t)}toModel(e,t="$root"){return this.model.change(n=>this.upcastDispatcher.convert(e,n,t))}addStyleProcessorRules(e){e(this.stylesProcessor)}registerRawContentMatcher(e){this.processor&&this.processor!==this.htmlProcessor&&this.processor.registerRawContentMatcher(e),this.htmlProcessor.registerRawContentMatcher(e)}destroy(){this.stopListening()}_checkIfRootsExists(e){for(const t of e)if(!this.model.document.getRootNames().includes(t))return!1;return!0}}ie(Qc,Le);class Gb{constructor(e,t){this._helpers=new Map,this._downcast=it(e),this._createConversionHelpers({name:"downcast",dispatchers:this._downcast,isDowncast:!0}),this._upcast=it(t),this._createConversionHelpers({name:"upcast",dispatchers:this._upcast,isDowncast:!1})}addAlias(e,t){const n=this._downcast.includes(t);if(!this._upcast.includes(t)&&!n)throw new m("conversion-add-alias-dispatcher-not-registered",this);this._createConversionHelpers({name:e,dispatchers:[t],isDowncast:n})}for(e){if(!this._helpers.has(e))throw new m("conversion-for-unknown-group",this);return this._helpers.get(e)}elementToElement(e){this.for("downcast").elementToElement(e);for(const{model:t,view:n}of Kr(e))this.for("upcast").elementToElement({model:t,view:n,converterPriority:e.converterPriority})}attributeToElement(e){this.for("downcast").attributeToElement(e);for(const{model:t,view:n}of Kr(e))this.for("upcast").elementToAttribute({view:n,model:t,converterPriority:e.converterPriority})}attributeToAttribute(e){this.for("downcast").attributeToAttribute(e);for(const{model:t,view:n}of Kr(e))this.for("upcast").attributeToAttribute({view:n,model:t})}_createConversionHelpers({name:e,dispatchers:t,isDowncast:n}){if(this._helpers.has(e))throw new m("conversion-group-exists",this);const o=n?new Eb(t):new Ib(t);this._helpers.set(e,o)}}function*Kr(i){if(i.model.values)for(const e of i.model.values){const t={key:i.model.key,value:e},n=i.view[e],o=i.upcastAlso?i.upcastAlso[e]:void 0;yield*Zc(t,n,o)}else yield*Zc(i.model,i.view,i.upcastAlso)}function*Zc(i,e,t){if(yield{model:i,view:e},t)for(const n of it(t))yield{model:i,view:n}}class po{constructor(e={}){typeof e=="string"&&(e=e==="transparent"?{isUndoable:!1}:{},T("batch-constructor-deprecated-string-type"));const{isUndoable:t=!0,isLocal:n=!0,isUndo:o=!1,isTyping:r=!1}=e;this.operations=[],this.isUndoable=t,this.isLocal=n,this.isUndo=o,this.isTyping=r}get type(){return T("batch-type-deprecated"),"default"}get baseVersion(){for(const e of this.operations)if(e.baseVersion!==null)return e.baseVersion;return null}addOperation(e){return e.batch=this,this.operations.push(e),e}}class Pt{constructor(e){this.baseVersion=e,this.isDocumentOperation=this.baseVersion!==null,this.batch=null}_validate(){}toJSON(){const e=Object.assign({},this);return e.__className=this.constructor.className,delete e.batch,delete e.isDocumentOperation,e}static get className(){return"Operation"}static fromJSON(e){return new this(e.baseVersion)}}class fn{constructor(e){this.markers=new Map,this._children=new go,e&&this._insertChild(0,e)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}is(e){return e==="documentFragment"||e==="model:documentFragment"}getChild(e){return this._children.getNode(e)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(e){return this._children.getNodeIndex(e)}getChildStartOffset(e){return this._children.getNodeStartOffset(e)}getPath(){return[]}getNodeByPath(e){let t=this;for(const n of e)t=t.getChild(t.offsetToIndex(n));return t}offsetToIndex(e){return this._children.offsetToIndex(e)}toJSON(){const e=[];for(const t of this._children)e.push(t.toJSON());return e}static fromJSON(e){const t=[];for(const n of e)n.name?t.push(Se.fromJSON(n)):t.push(Pe.fromJSON(n));return new fn(t)}_appendChild(e){this._insertChild(this.childCount,e)}_insertChild(e,t){const n=function(o){return typeof o=="string"?[new Pe(o)]:(It(o)||(o=[o]),Array.from(o).map(r=>typeof r=="string"?new Pe(r):r instanceof an?new Pe(r.data,r.getAttributes()):r))}(t);for(const o of n)o.parent!==null&&o._remove(),o.parent=this;this._children._insertNodes(e,n)}_removeChildren(e,t=1){const n=this._children._removeNodes(e,t);for(const o of n)o.parent=null;return n}}function Qr(i,e){const t=(e=Xc(e)).reduce((r,s)=>r+s.offsetSize,0),n=i.parent;Wo(i);const o=i.index;return n._insertChild(o,e),Go(n,o+e.length),Go(n,o),new R(i,i.getShiftedBy(t))}function Jc(i){if(!i.isFlat)throw new m("operation-utils-remove-range-not-flat",this);const e=i.start.parent;Wo(i.start),Wo(i.end);const t=e._removeChildren(i.start.index,i.end.index-i.start.index);return Go(e,i.start.index),t}function qo(i,e){if(!i.isFlat)throw new m("operation-utils-move-range-not-flat",this);const t=Jc(i);return Qr(e=e._getTransformedByDeletion(i.start,i.end.offset-i.start.offset),t)}function Xc(i){const e=[];i instanceof Array||(i=[i]);for(let t=0;t<i.length;t++)if(typeof i[t]=="string")e.push(new Pe(i[t]));else if(i[t]instanceof an)e.push(new Pe(i[t].data,i[t].getAttributes()));else if(i[t]instanceof fn||i[t]instanceof go)for(const n of i[t])e.push(n);else i[t]instanceof Vn&&e.push(i[t]);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof Pe&&o instanceof Pe&&ed(n,o)&&(e.splice(t-1,2,new Pe(o.data+n.data,o.getAttributes())),t--)}return e}function Go(i,e){const t=i.getChild(e-1),n=i.getChild(e);if(t&&n&&t.is("$text")&&n.is("$text")&&ed(t,n)){const o=new Pe(t.data+n.data,t.getAttributes());i._removeChildren(e-1,2),i._insertChild(e-1,o)}}function Wo(i){const e=i.textNode,t=i.parent;if(e){const n=i.offset-e.startOffset,o=e.index;t._removeChildren(o,1);const r=new Pe(e.data.substr(0,n),e.getAttributes()),s=new Pe(e.data.substr(n),e.getAttributes());t._insertChild(o,[r,s])}}function ed(i,e){const t=i.getAttributes(),n=e.getAttributes();for(const o of t){if(o[1]!==e.getAttribute(o[0]))return!1;n.next()}return n.next().done}const td=function(i,e){return ac(i,e)};class Ye extends Pt{constructor(e,t,n,o,r){super(r),this.range=e.clone(),this.key=t,this.oldValue=n===void 0?null:n,this.newValue=o===void 0?null:o}get type(){return this.oldValue===null?"addAttribute":this.newValue===null?"removeAttribute":"changeAttribute"}clone(){return new Ye(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ye(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}toJSON(){const e=super.toJSON();return e.range=this.range.toJSON(),e}_validate(){if(!this.range.isFlat)throw new m("attribute-operation-range-not-flat",this);for(const e of this.range.getItems({shallow:!0})){if(this.oldValue!==null&&!td(e.getAttribute(this.key),this.oldValue))throw new m("attribute-operation-wrong-old-value",this,{item:e,key:this.key,value:this.oldValue});if(this.oldValue===null&&this.newValue!==null&&e.hasAttribute(this.key))throw new m("attribute-operation-attribute-exists",this,{node:e,key:this.key})}}_execute(){td(this.oldValue,this.newValue)||function(e,t,n){Wo(e.start),Wo(e.end);for(const o of e.getItems({shallow:!0})){const r=o.is("$textProxy")?o.textNode:o;n!==null?r._setAttribute(t,n):r._removeAttribute(t),Go(r.parent,r.index)}Go(e.end.parent,e.end.index)}(this.range,this.key,this.newValue)}static get className(){return"AttributeOperation"}static fromJSON(e,t){return new Ye(R.fromJSON(e.range,t),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Wb extends Pt{constructor(e,t){super(null),this.sourcePosition=e.clone(),this.howMany=t}get type(){return"detach"}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e}_validate(){if(this.sourcePosition.root.document)throw new m("detach-operation-on-document-node",this)}_execute(){Jc(R._createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"DetachOperation"}}class Me extends Pt{constructor(e,t,n,o){super(o),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toNext",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNone"}get type(){return this.targetPosition.root.rootName=="$graveyard"?"remove":this.sourcePosition.root.rootName=="$graveyard"?"reinsert":"move"}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion)}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const e=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new this.constructor(this.getMovedRangeStart(),this.howMany,e,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(n+this.howMany>e.maxOffset)throw new m("move-operation-nodes-do-not-exist",this);if(e===t&&n<o&&o<n+this.howMany)throw new m("move-operation-range-into-itself",this);if(this.sourcePosition.root==this.targetPosition.root&&ft(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())=="prefix"){const r=this.sourcePosition.path.length-1;if(this.targetPosition.path[r]>=n&&this.targetPosition.path[r]<n+this.howMany)throw new m("move-operation-node-into-itself",this)}}_execute(){qo(R._createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=this.sourcePosition.toJSON(),e.targetPosition=this.targetPosition.toJSON(),e}static get className(){return"MoveOperation"}static fromJSON(e,t){const n=H.fromJSON(e.sourcePosition,t),o=H.fromJSON(e.targetPosition,t);return new this(n,e.howMany,o,e.baseVersion)}}class st extends Pt{constructor(e,t,n){super(n),this.position=e.clone(),this.position.stickiness="toNone",this.nodes=new go(Xc(t)),this.shouldReceiveAttributes=!1}get type(){return"insert"}get howMany(){return this.nodes.maxOffset}clone(){const e=new go([...this.nodes].map(n=>n._clone(!0))),t=new st(this.position,e,this.baseVersion);return t.shouldReceiveAttributes=this.shouldReceiveAttributes,t}getReversed(){const e=this.position.root.document.graveyard,t=new H(e,[0]);return new Me(this.position,this.nodes.maxOffset,t,this.baseVersion+1)}_validate(){const e=this.position.parent;if(!e||e.maxOffset<this.position.offset)throw new m("insert-operation-position-invalid",this)}_execute(){const e=this.nodes;this.nodes=new go([...e].map(t=>t._clone(!0))),Qr(this.position,e)}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e.nodes=this.nodes.toJSON(),e}static get className(){return"InsertOperation"}static fromJSON(e,t){const n=[];for(const r of e.nodes)r.name?n.push(Se.fromJSON(r)):n.push(Pe.fromJSON(r));const o=new st(H.fromJSON(e.position,t),n,e.baseVersion);return o.shouldReceiveAttributes=e.shouldReceiveAttributes,o}}class vt extends Pt{constructor(e,t,n,o,r,s){super(s),this.name=e,this.oldRange=t?t.clone():null,this.newRange=n?n.clone():null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new vt(this.name,this.oldRange,this.newRange,this._markers,this.affectsData,this.baseVersion)}getReversed(){return new vt(this.name,this.newRange,this.oldRange,this._markers,this.affectsData,this.baseVersion+1)}_execute(){const e=this.newRange?"_set":"_remove";this._markers[e](this.name,this.newRange,!0,this.affectsData)}toJSON(){const e=super.toJSON();return this.oldRange&&(e.oldRange=this.oldRange.toJSON()),this.newRange&&(e.newRange=this.newRange.toJSON()),delete e._markers,e}static get className(){return"MarkerOperation"}static fromJSON(e,t){return new vt(e.name,e.oldRange?R.fromJSON(e.oldRange,t):null,e.newRange?R.fromJSON(e.newRange,t):null,t.model.markers,e.affectsData,e.baseVersion)}}class Ct extends Pt{constructor(e,t,n,o){super(o),this.position=e,this.position.stickiness="toNext",this.oldName=t,this.newName=n}get type(){return"rename"}clone(){return new Ct(this.position.clone(),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ct(this.position.clone(),this.newName,this.oldName,this.baseVersion+1)}_validate(){const e=this.position.nodeAfter;if(!(e instanceof Se))throw new m("rename-operation-wrong-position",this);if(e.name!==this.oldName)throw new m("rename-operation-wrong-name",this)}_execute(){this.position.nodeAfter.name=this.newName}toJSON(){const e=super.toJSON();return e.position=this.position.toJSON(),e}static get className(){return"RenameOperation"}static fromJSON(e,t){return new Ct(H.fromJSON(e.position,t),e.oldName,e.newName,e.baseVersion)}}class kn extends Pt{constructor(e,t,n,o,r){super(r),this.root=e,this.key=t,this.oldValue=n,this.newValue=o}get type(){return this.oldValue===null?"addRootAttribute":this.newValue===null?"removeRootAttribute":"changeRootAttribute"}clone(){return new kn(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new kn(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new m("rootattribute-operation-not-a-root",this,{root:this.root,key:this.key});if(this.oldValue!==null&&this.root.getAttribute(this.key)!==this.oldValue)throw new m("rootattribute-operation-wrong-old-value",this,{root:this.root,key:this.key});if(this.oldValue===null&&this.newValue!==null&&this.root.hasAttribute(this.key))throw new m("rootattribute-operation-attribute-exists",this,{root:this.root,key:this.key})}_execute(){this.newValue!==null?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}toJSON(){const e=super.toJSON();return e.root=this.root.toJSON(),e}static get className(){return"RootAttributeOperation"}static fromJSON(e,t){if(!t.getRoot(e.root))throw new m("rootattribute-operation-fromjson-no-root",this,{rootName:e.root});return new kn(t.getRoot(e.root),e.key,e.oldValue,e.newValue,e.baseVersion)}}class Ke extends Pt{constructor(e,t,n,o,r){super(r),this.sourcePosition=e.clone(),this.sourcePosition.stickiness="toPrevious",this.howMany=t,this.targetPosition=n.clone(),this.targetPosition.stickiness="toNext",this.graveyardPosition=o.clone()}get type(){return"merge"}get deletionPosition(){return new H(this.sourcePosition.root,this.sourcePosition.path.slice(0,-1))}get movedRange(){const e=this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);return new R(this.sourcePosition,e)}clone(){return new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.targetPosition._getTransformedByMergeOperation(this),t=this.sourcePosition.path.slice(0,-1),n=new H(this.sourcePosition.root,t)._getTransformedByMergeOperation(this);return new Re(e,this.howMany,n,this.graveyardPosition,this.baseVersion+1)}_validate(){const e=this.sourcePosition.parent,t=this.targetPosition.parent;if(!e.parent)throw new m("merge-operation-source-position-invalid",this);if(!t.parent)throw new m("merge-operation-target-position-invalid",this);if(this.howMany!=e.maxOffset)throw new m("merge-operation-how-many-invalid",this)}_execute(){const e=this.sourcePosition.parent;qo(R._createIn(e),this.targetPosition),qo(R._createOn(e),this.graveyardPosition)}toJSON(){const e=super.toJSON();return e.sourcePosition=e.sourcePosition.toJSON(),e.targetPosition=e.targetPosition.toJSON(),e.graveyardPosition=e.graveyardPosition.toJSON(),e}static get className(){return"MergeOperation"}static fromJSON(e,t){const n=H.fromJSON(e.sourcePosition,t),o=H.fromJSON(e.targetPosition,t),r=H.fromJSON(e.graveyardPosition,t);return new this(n,e.howMany,o,r,e.baseVersion)}}class Re extends Pt{constructor(e,t,n,o,r){super(r),this.splitPosition=e.clone(),this.splitPosition.stickiness="toNext",this.howMany=t,this.insertionPosition=n,this.graveyardPosition=o?o.clone():null,this.graveyardPosition&&(this.graveyardPosition.stickiness="toNext")}get type(){return"split"}get moveTargetPosition(){const e=this.insertionPosition.path.slice();return e.push(0),new H(this.insertionPosition.root,e)}get movedRange(){const e=this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);return new R(this.splitPosition,e)}clone(){return new this.constructor(this.splitPosition,this.howMany,this.insertionPosition,this.graveyardPosition,this.baseVersion)}getReversed(){const e=this.splitPosition.root.document.graveyard,t=new H(e,[0]);return new Ke(this.moveTargetPosition,this.howMany,this.splitPosition,t,this.baseVersion+1)}_validate(){const e=this.splitPosition.parent,t=this.splitPosition.offset;if(!e||e.maxOffset<t)throw new m("split-operation-position-invalid",this);if(!e.parent)throw new m("split-operation-split-in-root",this);if(this.howMany!=e.maxOffset-this.splitPosition.offset)throw new m("split-operation-how-many-invalid",this);if(this.graveyardPosition&&!this.graveyardPosition.nodeAfter)throw new m("split-operation-graveyard-position-invalid",this)}_execute(){const e=this.splitPosition.parent;if(this.graveyardPosition)qo(R._createFromPositionAndShift(this.graveyardPosition,1),this.insertionPosition);else{const t=e._clone();Qr(this.insertionPosition,t)}qo(new R(H._createAt(e,this.splitPosition.offset),H._createAt(e,e.maxOffset)),this.moveTargetPosition)}toJSON(){const e=super.toJSON();return e.splitPosition=this.splitPosition.toJSON(),e.insertionPosition=this.insertionPosition.toJSON(),this.graveyardPosition&&(e.graveyardPosition=this.graveyardPosition.toJSON()),e}static get className(){return"SplitOperation"}static getInsertionPosition(e){const t=e.path.slice(0,-1);return t[t.length-1]++,new H(e.root,t,"toPrevious")}static fromJSON(e,t){const n=H.fromJSON(e.splitPosition,t),o=H.fromJSON(e.insertionPosition,t),r=e.graveyardPosition?H.fromJSON(e.graveyardPosition,t):null;return new this(n,e.howMany,o,r,e.baseVersion)}}class Zr extends Se{constructor(e,t,n="main"){super(t),this._document=e,this.rootName=n}get document(){return this._document}is(e,t){return t?t===this.name&&(e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"):e==="rootElement"||e==="model:rootElement"||e==="element"||e==="model:element"||e==="node"||e==="model:node"}toJSON(){return this.rootName}}class Yb{constructor(e,t){this.model=e,this.batch=t}createText(e,t){return new Pe(e,t)}createElement(e,t){return new Se(e,t)}createDocumentFragment(){return new fn}cloneElement(e,t=!0){return e._clone(t)}insert(e,t,n=0){if(this._assertWriterUsedCorrectly(),e instanceof Pe&&e.data=="")return;const o=H._createAt(t,n);if(e.parent){if(id(e.root,o.root))return void this.move(R._createOn(e),o);if(e.root.document)throw new m("model-writer-insert-forbidden-move",this);this.remove(e)}const r=o.root.document?o.root.document.version:null,s=new st(o,e,r);if(e instanceof Pe&&(s.shouldReceiveAttributes=!0),this.batch.addOperation(s),this.model.applyOperation(s),e instanceof fn)for(const[a,l]of e.markers){const c=H._createAt(l.root,0),d={range:new R(l.start._getCombined(c,o),l.end._getCombined(c,o)),usingOperation:!0,affectsData:!0};this.model.markers.has(a)?this.updateMarker(a,d):this.addMarker(a,d)}}insertText(e,t,n,o){t instanceof fn||t instanceof Se||t instanceof H?this.insert(this.createText(e),t,n):this.insert(this.createText(e,t),n,o)}insertElement(e,t,n,o){t instanceof fn||t instanceof Se||t instanceof H?this.insert(this.createElement(e),t,n):this.insert(this.createElement(e,t),n,o)}append(e,t){this.insert(e,t,"end")}appendText(e,t,n){t instanceof fn||t instanceof Se?this.insert(this.createText(e),t,"end"):this.insert(this.createText(e,t),n,"end")}appendElement(e,t,n){t instanceof fn||t instanceof Se?this.insert(this.createElement(e),t,"end"):this.insert(this.createElement(e,t),n,"end")}setAttribute(e,t,n){if(this._assertWriterUsedCorrectly(),n instanceof R){const o=n.getMinimalFlatRanges();for(const r of o)nd(this,e,t,r)}else od(this,e,t,n)}setAttributes(e,t){for(const[n,o]of nn(e))this.setAttribute(n,o,t)}removeAttribute(e,t){if(this._assertWriterUsedCorrectly(),t instanceof R){const n=t.getMinimalFlatRanges();for(const o of n)nd(this,e,null,o)}else od(this,e,null,t)}clearAttributes(e){this._assertWriterUsedCorrectly();const t=n=>{for(const o of n.getAttributeKeys())this.removeAttribute(o,n)};if(e instanceof R)for(const n of e.getItems())t(n);else t(e)}move(e,t,n){if(this._assertWriterUsedCorrectly(),!(e instanceof R))throw new m("writer-move-invalid-range",this);if(!e.isFlat)throw new m("writer-move-range-not-flat",this);const o=H._createAt(t,n);if(o.isEqual(e.start))return;if(this._addOperationForAffectedMarkers("move",e),!id(e.root,o.root))throw new m("writer-move-different-document",this);const r=e.root.document?e.root.document.version:null,s=new Me(e.start,e.end.offset-e.start.offset,o,r);this.batch.addOperation(s),this.model.applyOperation(s)}remove(e){this._assertWriterUsedCorrectly();const t=(e instanceof R?e:R._createOn(e)).getMinimalFlatRanges().reverse();for(const n of t)this._addOperationForAffectedMarkers("move",n),Kb(n.start,n.end.offset-n.start.offset,this.batch,this.model)}merge(e){this._assertWriterUsedCorrectly();const t=e.nodeBefore,n=e.nodeAfter;if(this._addOperationForAffectedMarkers("merge",e),!(t instanceof Se))throw new m("writer-merge-no-element-before",this);if(!(n instanceof Se))throw new m("writer-merge-no-element-after",this);e.root.document?this._merge(e):this._mergeDetached(e)}createPositionFromPath(e,t,n){return this.model.createPositionFromPath(e,t,n)}createPositionAt(e,t){return this.model.createPositionAt(e,t)}createPositionAfter(e){return this.model.createPositionAfter(e)}createPositionBefore(e){return this.model.createPositionBefore(e)}createRange(e,t){return this.model.createRange(e,t)}createRangeIn(e){return this.model.createRangeIn(e)}createRangeOn(e){return this.model.createRangeOn(e)}createSelection(e,t,n){return this.model.createSelection(e,t,n)}_mergeDetached(e){const t=e.nodeBefore,n=e.nodeAfter;this.move(R._createIn(n),H._createAt(t,"end")),this.remove(n)}_merge(e){const t=H._createAt(e.nodeBefore,"end"),n=H._createAt(e.nodeAfter,0),o=e.root.document.graveyard,r=new H(o,[0]),s=e.root.document.version,a=new Ke(n,e.nodeAfter.maxOffset,t,r,s);this.batch.addOperation(a),this.model.applyOperation(a)}rename(e,t){if(this._assertWriterUsedCorrectly(),!(e instanceof Se))throw new m("writer-rename-not-element-instance",this);const n=e.root.document?e.root.document.version:null,o=new Ct(H._createBefore(e),e.name,t,n);this.batch.addOperation(o),this.model.applyOperation(o)}split(e,t){this._assertWriterUsedCorrectly();let n,o,r=e.parent;if(!r.parent)throw new m("writer-split-element-no-parent",this);if(t||(t=r.parent),!e.parent.getAncestors({includeSelf:!0}).includes(t))throw new m("writer-split-invalid-limit-element",this);do{const s=r.root.document?r.root.document.version:null,a=r.maxOffset-e.offset,l=Re.getInsertionPosition(e),c=new Re(e,a,l,null,s);this.batch.addOperation(c),this.model.applyOperation(c),n||o||(n=r,o=e.parent.nextSibling),r=(e=this.createPositionAfter(e.parent)).parent}while(r!==t);return{position:e,range:new R(H._createAt(n,"end"),H._createAt(o,0))}}wrap(e,t){if(this._assertWriterUsedCorrectly(),!e.isFlat)throw new m("writer-wrap-range-not-flat",this);const n=t instanceof Se?t:new Se(t);if(n.childCount>0)throw new m("writer-wrap-element-not-empty",this);if(n.parent!==null)throw new m("writer-wrap-element-attached",this);this.insert(n,e.start);const o=new R(e.start.getShiftedBy(1),e.end.getShiftedBy(1));this.move(o,H._createAt(n,0))}unwrap(e){if(this._assertWriterUsedCorrectly(),e.parent===null)throw new m("writer-unwrap-element-no-parent",this);this.move(R._createIn(e),this.createPositionAfter(e)),this.remove(e)}addMarker(e,t){if(this._assertWriterUsedCorrectly(),!t||typeof t.usingOperation!="boolean")throw new m("writer-addmarker-no-usingoperation",this);const n=t.usingOperation,o=t.range,r=t.affectsData!==void 0&&t.affectsData;if(this.model.markers.has(e))throw new m("writer-addmarker-marker-exists",this);if(!o)throw new m("writer-addmarker-no-range",this);return n?(Yo(this,e,null,o,r),this.model.markers.get(e)):this.model.markers._set(e,o,n,r)}updateMarker(e,t){this._assertWriterUsedCorrectly();const n=typeof e=="string"?e:e.name,o=this.model.markers.get(n);if(!o)throw new m("writer-updatemarker-marker-not-exists",this);if(!t)return T("writer-updatemarker-reconvert-using-editingcontroller",{markerName:n}),void this.model.markers._refresh(o);const r=typeof t.usingOperation=="boolean",s=typeof t.affectsData=="boolean",a=s?t.affectsData:o.affectsData;if(!r&&!t.range&&!s)throw new m("writer-updatemarker-wrong-options",this);const l=o.getRange(),c=t.range?t.range:l;r&&t.usingOperation!==o.managedUsingOperations?t.usingOperation?Yo(this,n,null,c,a):(Yo(this,n,l,null,a),this.model.markers._set(n,c,void 0,a)):o.managedUsingOperations?Yo(this,n,l,c,a):this.model.markers._set(n,c,void 0,a)}removeMarker(e){this._assertWriterUsedCorrectly();const t=typeof e=="string"?e:e.name;if(!this.model.markers.has(t))throw new m("writer-removemarker-no-marker",this);const n=this.model.markers.get(t);if(!n.managedUsingOperations)return void this.model.markers._remove(t);Yo(this,t,n.getRange(),null,n.affectsData)}setSelection(e,t,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(e,t,n)}setSelectionFocus(e,t){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(e,t)}setSelectionAttribute(e,t){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._setSelectionAttribute(e,t);else for(const[n,o]of nn(e))this._setSelectionAttribute(n,o)}removeSelectionAttribute(e){if(this._assertWriterUsedCorrectly(),typeof e=="string")this._removeSelectionAttribute(e);else for(const t of e)this._removeSelectionAttribute(t)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(e){this.model.document.selection._restoreGravity(e)}_setSelectionAttribute(e,t){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=Wt._getStoreAttributeKey(e);this.setAttribute(o,t,n.anchor.parent)}n._setAttribute(e,t)}_removeSelectionAttribute(e){const t=this.model.document.selection;if(t.isCollapsed&&t.anchor.parent.isEmpty){const n=Wt._getStoreAttributeKey(e);this.removeAttribute(n,t.anchor.parent)}t._removeAttribute(e)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new m("writer-incorrect-use",this)}_addOperationForAffectedMarkers(e,t){for(const n of this.model.markers){if(!n.managedUsingOperations)continue;const o=n.getRange();let r=!1;if(e==="move")r=t.containsPosition(o.start)||t.start.isEqual(o.start)||t.containsPosition(o.end)||t.end.isEqual(o.end);else{const s=t.nodeBefore,a=t.nodeAfter,l=o.start.parent==s&&o.start.isAtEnd,c=o.end.parent==a&&o.end.offset==0,d=o.end.nodeAfter==a,u=o.start.nodeAfter==a;r=l||c||d||u}r&&this.updateMarker(n.name,{range:o})}}}function nd(i,e,t,n){const o=i.model,r=o.document;let s,a,l,c=n.start;for(const u of n.getWalker({shallow:!0}))l=u.item.getAttribute(e),s&&a!=l&&(a!=t&&d(),c=s),s=u.nextPosition,a=l;function d(){const u=new R(c,s),h=u.root.document?r.version:null,p=new Ye(u,e,a,t,h);i.batch.addOperation(p),o.applyOperation(p)}s instanceof H&&s!=c&&a!=t&&d()}function od(i,e,t,n){const o=i.model,r=o.document,s=n.getAttribute(e);let a,l;if(s!=t){if(n.root===n){const c=n.document?r.version:null;l=new kn(n,e,s,t,c)}else{a=new R(H._createBefore(n),i.createPositionAfter(n));const c=a.root.document?r.version:null;l=new Ye(a,e,s,t,c)}i.batch.addOperation(l),o.applyOperation(l)}}function Yo(i,e,t,n,o){const r=i.model,s=r.document,a=new vt(e,t,n,r.markers,o,s.version);i.batch.addOperation(a),r.applyOperation(a)}function Kb(i,e,t,n){let o;if(i.root.document){const r=n.document,s=new H(r.graveyard,[0]);o=new Me(i,e,s,r.version)}else o=new Wb(i,e);t.addOperation(o),n.applyOperation(o)}function id(i,e){return i===e||i instanceof Zr&&e instanceof Zr}class Qb{constructor(e){this._markerCollection=e,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null,this._refreshedItems=new Set}get isEmpty(){return this._changesInElement.size==0&&this._changedMarkers.size==0}bufferOperation(e){switch(e.type){case"insert":if(this._isInInsertedElement(e.position.parent))return;this._markInsert(e.position.parent,e.position.offset,e.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const t of e.range.getItems({shallow:!0}))this._isInInsertedElement(t.parent)||this._markAttribute(t);break;case"remove":case"move":case"reinsert":{if(e.sourcePosition.isEqual(e.targetPosition)||e.sourcePosition.getShiftedBy(e.howMany).isEqual(e.targetPosition))return;const t=this._isInInsertedElement(e.sourcePosition.parent),n=this._isInInsertedElement(e.targetPosition.parent);t||this._markRemove(e.sourcePosition.parent,e.sourcePosition.offset,e.howMany),n||this._markInsert(e.targetPosition.parent,e.getMovedRangeStart().offset,e.howMany);break}case"rename":{if(this._isInInsertedElement(e.position.parent))return;this._markRemove(e.position.parent,e.position.offset,1),this._markInsert(e.position.parent,e.position.offset,1);const t=R._createFromPositionAndShift(e.position,1);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}break}case"split":{const t=e.splitPosition.parent;this._isInInsertedElement(t)||this._markRemove(t,e.splitPosition.offset,e.howMany),this._isInInsertedElement(e.insertionPosition.parent)||this._markInsert(e.insertionPosition.parent,e.insertionPosition.offset,1),e.graveyardPosition&&this._markRemove(e.graveyardPosition.parent,e.graveyardPosition.offset,1);break}case"merge":{const t=e.sourcePosition.parent;this._isInInsertedElement(t.parent)||this._markRemove(t.parent,t.startOffset,1);const n=e.graveyardPosition.parent;this._markInsert(n,e.graveyardPosition.offset,1);const o=e.targetPosition.parent;this._isInInsertedElement(o)||this._markInsert(o,e.targetPosition.offset,t.maxOffset);break}}this._cachedChanges=null}bufferMarkerChange(e,t,n){const o=this._changedMarkers.get(e);o?(o.newMarkerData=n,o.oldMarkerData.range==null&&n.range==null&&this._changedMarkers.delete(e)):this._changedMarkers.set(e,{newMarkerData:n,oldMarkerData:t})}getMarkersToRemove(){const e=[];for(const[t,n]of this._changedMarkers)n.oldMarkerData.range!=null&&e.push({name:t,range:n.oldMarkerData.range});return e}getMarkersToAdd(){const e=[];for(const[t,n]of this._changedMarkers)n.newMarkerData.range!=null&&e.push({name:t,range:n.newMarkerData.range});return e}getChangedMarkers(){return Array.from(this._changedMarkers).map(([e,t])=>({name:e,data:{oldRange:t.oldMarkerData.range,newRange:t.newMarkerData.range}}))}hasDataChanges(){if(this._changesInElement.size>0)return!0;for(const{newMarkerData:e,oldMarkerData:t}of this._changedMarkers.values()){if(e.affectsData!==t.affectsData)return!0;if(e.affectsData){const n=e.range&&!t.range,o=!e.range&&t.range,r=e.range&&t.range&&!e.range.isEqual(t.range);if(n||o||r)return!0}}return!1}getChanges(e={includeChangesInGraveyard:!1}){if(this._cachedChanges)return e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();let t=[];for(const n of this._changesInElement.keys()){const o=this._changesInElement.get(n).sort((d,u)=>d.offset===u.offset?d.type!=u.type?d.type=="remove"?-1:1:0:d.offset<u.offset?-1:1),r=this._elementSnapshots.get(n),s=rd(n.getChildren()),a=Zb(r.length,o);let l=0,c=0;for(const d of a)if(d==="i")t.push(this._getInsertDiff(n,l,s[l])),l++;else if(d==="r")t.push(this._getRemoveDiff(n,l,r[c])),c++;else if(d==="a"){const u=s[l].attributes,h=r[c].attributes;let p;if(s[l].name=="$text")p=new R(H._createAt(n,l),H._createAt(n,l+1));else{const k=n.offsetToIndex(l);p=new R(H._createAt(n,l),H._createAt(n.getChild(k),0))}t.push(...this._getAttributesDiff(p,h,u)),l++,c++}else l++,c++}t.sort((n,o)=>n.position.root!=o.position.root?n.position.root.rootName<o.position.root.rootName?-1:1:n.position.isEqual(o.position)?n.changeCount-o.changeCount:n.position.isBefore(o.position)?-1:1);for(let n=1,o=0;n<t.length;n++){const r=t[o],s=t[n],a=r.type=="remove"&&s.type=="remove"&&r.name=="$text"&&s.name=="$text"&&r.position.isEqual(s.position),l=r.type=="insert"&&s.type=="insert"&&r.name=="$text"&&s.name=="$text"&&r.position.parent==s.position.parent&&r.position.offset+r.length==s.position.offset,c=r.type=="attribute"&&s.type=="attribute"&&r.position.parent==s.position.parent&&r.range.isFlat&&s.range.isFlat&&r.position.offset+r.length==s.position.offset&&r.attributeKey==s.attributeKey&&r.attributeOldValue==s.attributeOldValue&&r.attributeNewValue==s.attributeNewValue;a||l||c?(r.length++,c&&(r.range.end=r.range.end.getShiftedBy(1)),t[n]=null):o=n}t=t.filter(n=>n);for(const n of t)delete n.changeCount,n.type=="attribute"&&(delete n.position,delete n.length);return this._changeCount=0,this._cachedChangesWithGraveyard=t,this._cachedChanges=t.filter(Jb),e.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice()}getRefreshedItems(){return new Set(this._refreshedItems)}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._refreshedItems=new Set,this._cachedChanges=null}_refreshItem(e){if(this._isInInsertedElement(e.parent))return;this._markRemove(e.parent,e.startOffset,e.offsetSize),this._markInsert(e.parent,e.startOffset,e.offsetSize),this._refreshedItems.add(e);const t=R._createOn(e);for(const n of this._markerCollection.getMarkersIntersectingRange(t)){const o=n.getData();this.bufferMarkerChange(n.name,o,o)}this._cachedChanges=null}_markInsert(e,t,n){const o={type:"insert",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o)}_markRemove(e,t,n){const o={type:"remove",offset:t,howMany:n,count:this._changeCount++};this._markChange(e,o),this._removeAllNestedChanges(e,t,n)}_markAttribute(e){const t={type:"attribute",offset:e.startOffset,howMany:e.offsetSize,count:this._changeCount++};this._markChange(e.parent,t)}_markChange(e,t){this._makeSnapshot(e);const n=this._getChangesForElement(e);this._handleChange(t,n),n.push(t);for(let o=0;o<n.length;o++)n[o].howMany<1&&(n.splice(o,1),o--)}_getChangesForElement(e){let t;return this._changesInElement.has(e)?t=this._changesInElement.get(e):(t=[],this._changesInElement.set(e,t)),t}_makeSnapshot(e){this._elementSnapshots.has(e)||this._elementSnapshots.set(e,rd(e.getChildren()))}_handleChange(e,t){e.nodesToHandle=e.howMany;for(const n of t){const o=e.offset+e.howMany,r=n.offset+n.howMany;if(e.type=="insert"&&(n.type=="insert"&&(e.offset<=n.offset?n.offset+=e.howMany:e.offset<r&&(n.howMany+=e.nodesToHandle,e.nodesToHandle=0)),n.type=="remove"&&e.offset<n.offset&&(n.offset+=e.howMany),n.type=="attribute")){if(e.offset<=n.offset)n.offset+=e.howMany;else if(e.offset<r){const s=n.howMany;n.howMany=e.offset-n.offset,t.unshift({type:"attribute",offset:o,howMany:s-n.howMany,count:this._changeCount++})}}if(e.type=="remove"){if(n.type=="insert"){if(o<=n.offset)n.offset-=e.howMany;else if(o<=r)if(e.offset<n.offset){const s=o-n.offset;n.offset=e.offset,n.howMany-=s,e.nodesToHandle-=s}else n.howMany-=e.nodesToHandle,e.nodesToHandle=0;else if(e.offset<=n.offset)e.nodesToHandle-=n.howMany,n.howMany=0;else if(e.offset<r){const s=r-e.offset;n.howMany-=s,e.nodesToHandle-=s}}if(n.type=="remove"&&(o<=n.offset?n.offset-=e.howMany:e.offset<n.offset&&(e.nodesToHandle+=n.howMany,n.howMany=0)),n.type=="attribute"){if(o<=n.offset)n.offset-=e.howMany;else if(e.offset<n.offset){const s=o-n.offset;n.offset=e.offset,n.howMany-=s}else if(e.offset<r)if(o<=r){const s=n.howMany;n.howMany=e.offset-n.offset;const a=s-n.howMany-e.nodesToHandle;t.unshift({type:"attribute",offset:e.offset,howMany:a,count:this._changeCount++})}else n.howMany-=r-e.offset}}if(e.type=="attribute"){if(n.type=="insert")if(e.offset<n.offset&&o>n.offset){if(o>r){const s={type:"attribute",offset:r,howMany:o-r,count:this._changeCount++};this._handleChange(s,t),t.push(s)}e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}else e.offset>=n.offset&&e.offset<r&&(o>r?(e.nodesToHandle=o-r,e.offset=r):e.nodesToHandle=0);if(n.type=="remove"&&e.offset<n.offset&&o>n.offset){const s={type:"attribute",offset:n.offset,howMany:o-n.offset,count:this._changeCount++};this._handleChange(s,t),t.push(s),e.nodesToHandle=n.offset-e.offset,e.howMany=e.nodesToHandle}n.type=="attribute"&&(e.offset>=n.offset&&o<=r?(e.nodesToHandle=0,e.howMany=0,e.offset=0):e.offset<=n.offset&&o>=r&&(n.howMany=0))}}e.howMany=e.nodesToHandle,delete e.nodesToHandle}_getInsertDiff(e,t,n){return{type:"insert",position:H._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getRemoveDiff(e,t,n){return{type:"remove",position:H._createAt(e,t),name:n.name,attributes:new Map(n.attributes),length:1,changeCount:this._changeCount++}}_getAttributesDiff(e,t,n){const o=[];n=new Map(n);for(const[r,s]of t){const a=n.has(r)?n.get(r):null;a!==s&&o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:s,attributeNewValue:a,changeCount:this._changeCount++}),n.delete(r)}for(const[r,s]of n)o.push({type:"attribute",position:e.start,range:e.clone(),length:1,attributeKey:r,attributeOldValue:null,attributeNewValue:s,changeCount:this._changeCount++});return o}_isInInsertedElement(e){const t=e.parent;if(!t)return!1;const n=this._changesInElement.get(t),o=e.startOffset;if(n){for(const r of n)if(r.type=="insert"&&o>=r.offset&&o<r.offset+r.howMany)return!0}return this._isInInsertedElement(t)}_removeAllNestedChanges(e,t,n){const o=new R(H._createAt(e,t),H._createAt(e,t+n));for(const r of o.getItems({shallow:!0}))r.is("element")&&(this._elementSnapshots.delete(r),this._changesInElement.delete(r),this._removeAllNestedChanges(r,0,r.maxOffset))}}function rd(i){const e=[];for(const t of i)if(t.is("$text"))for(let n=0;n<t.data.length;n++)e.push({name:"$text",attributes:new Map(t.getAttributes())});else e.push({name:t.name,attributes:new Map(t.getAttributes())});return e}function Zb(i,e){const t=[];let n=0,o=0;for(const r of e){if(r.offset>n){for(let s=0;s<r.offset-n;s++)t.push("e");o+=r.offset-n}if(r.type=="insert"){for(let s=0;s<r.howMany;s++)t.push("i");n=r.offset+r.howMany}else if(r.type=="remove"){for(let s=0;s<r.howMany;s++)t.push("r");n=r.offset,o+=r.howMany}else t.push(..."a".repeat(r.howMany).split("")),n=r.offset+r.howMany,o+=r.howMany}if(o<i)for(let r=0;r<i-o-n;r++)t.push("e");return t}function Jb(i){const e=i.position&&i.position.root.rootName=="$graveyard",t=i.range&&i.range.root.rootName=="$graveyard";return!e&&!t}class Xb{constructor(){this._operations=[],this._undoPairs=new Map,this._undoneOperations=new Set,this._baseVersionToOperationIndex=new Map,this._version=0,this._gaps=new Map}get version(){return this._version}set version(e){this._operations.length&&e>this._version+1&&this._gaps.set(this._version,e),this._version=e}get lastOperation(){return this._operations[this._operations.length-1]}addOperation(e){if(e.baseVersion!==this.version)throw new m("model-document-history-addoperation-incorrect-version",this,{operation:e,historyVersion:this.version});this._operations.push(e),this._version++,this._baseVersionToOperationIndex.set(e.baseVersion,this._operations.length-1)}getOperations(e,t=this.version){if(!this._operations.length)return[];const n=this._operations[0];e===void 0&&(e=n.baseVersion);let o=t-1;for(const[a,l]of this._gaps)e>a&&e<l&&(e=l),o>a&&o<l&&(o=a-1);if(o<n.baseVersion||e>this.lastOperation.baseVersion)return[];let r=this._baseVersionToOperationIndex.get(e);r===void 0&&(r=0);let s=this._baseVersionToOperationIndex.get(o);return s===void 0&&(s=this._operations.length-1),this._operations.slice(r,s+1)}getOperation(e){const t=this._baseVersionToOperationIndex.get(e);if(t!==void 0)return this._operations[t]}setOperationAsUndone(e,t){this._undoPairs.set(t,e),this._undoneOperations.add(e)}isUndoingOperation(e){return this._undoPairs.has(e)}isUndoneOperation(e){return this._undoneOperations.has(e)}getUndoneOperation(e){return this._undoPairs.get(e)}reset(){this._version=0,this._undoPairs=new Map,this._operations=[],this._undoneOperations=new Set,this._gaps=new Map,this._baseVersionToOperationIndex=new Map}}function sd(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function ad(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const ew=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:\u200D${e})*`,"ug")}();function tw(i,e){const t=String(i).matchAll(ew);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}const Jr="$graveyard";class ld{constructor(e){this.model=e,this.history=new Xb,this.selection=new Wt(this),this.roots=new Tt({idProperty:"rootName"}),this.differ=new Qb(e.markers),this._postFixers=new Set,this._hasSelectionChangedFromTheLastChangeBlock=!1,this.createRoot("$root",Jr),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.differ.bufferOperation(o)},{priority:"high"}),this.listenTo(e,"applyOperation",(t,n)=>{const o=n[0];o.isDocumentOperation&&this.history.addOperation(o)},{priority:"low"}),this.listenTo(this.selection,"change",()=>{this._hasSelectionChangedFromTheLastChangeBlock=!0}),this.listenTo(e.markers,"update",(t,n,o,r,s)=>{const a={...n.getData(),range:r};this.differ.bufferMarkerChange(n.name,s,a),o===null&&n.on("change",(l,c)=>{const d=n.getData();this.differ.bufferMarkerChange(n.name,{...d,range:c},d)})})}get version(){return this.history.version}set version(e){this.history.version=e}get graveyard(){return this.getRoot(Jr)}createRoot(e="$root",t="main"){if(this.roots.get(t))throw new m("model-document-createroot-name-exists",this,{name:t});const n=new Zr(this,e,t);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(e="main"){return this.roots.get(e)}getRootNames(){return Array.from(this.roots,e=>e.rootName).filter(e=>e!=Jr)}registerPostFixer(e){this._postFixers.add(e)}toJSON(){const e=kl(this);return e.selection="[engine.model.DocumentSelection]",e.model="[engine.model.Model]",e}_handleChangeBlock(e){this._hasDocumentChangedFromTheLastChangeBlock()&&(this._callPostFixers(e),this.selection.refresh(),this.differ.hasDataChanges()?this.fire("change:data",e.batch):this.fire("change",e.batch),this.selection.refresh(),this.differ.reset()),this._hasSelectionChangedFromTheLastChangeBlock=!1}_hasDocumentChangedFromTheLastChangeBlock(){return!this.differ.isEmpty||this._hasSelectionChangedFromTheLastChangeBlock}_getDefaultRoot(){for(const e of this.roots)if(e!==this.graveyard)return e;return this.graveyard}_getDefaultRange(){const e=this._getDefaultRoot(),t=this.model,n=t.schema,o=t.createPositionFromPath(e,[0]);return n.getNearestSelectionRange(o)||t.createRange(o)}_validateSelectionRange(e){return cd(e.start)&&cd(e.end)}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(this.selection.refresh(),t=n(e),t)break;while(t)}}function cd(i){const e=i.textNode;if(e){const t=e.data,n=i.offset-e.startOffset;return!sd(t,n)&&!ad(t,n)}return!0}ie(ld,fe);class dd{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(e){const t=e instanceof mo?e.name:e;return this._markers.has(t)}get(e){return this._markers.get(e)||null}_set(e,t,n=!1,o=!1){const r=e instanceof mo?e.name:e;if(r.includes(","))throw new m("markercollection-incorrect-marker-name",this);const s=this._markers.get(r);if(s){const c=s.getData(),d=s.getRange();let u=!1;return d.isEqual(t)||(s._attachLiveRange(ln.fromRange(t)),u=!0),n!=s.managedUsingOperations&&(s._managedUsingOperations=n,u=!0),typeof o=="boolean"&&o!=s.affectsData&&(s._affectsData=o,u=!0),u&&this.fire("update:"+r,s,d,t,c),s}const a=ln.fromRange(t),l=new mo(r,a,n,o);return this._markers.set(r,l),this.fire("update:"+r,l,null,t,{...l.getData(),range:null}),l}_remove(e){const t=e instanceof mo?e.name:e,n=this._markers.get(t);return!!n&&(this._markers.delete(t),this.fire("update:"+t,n,n.getRange(),null,n.getData()),this._destroyMarker(n),!0)}_refresh(e){const t=e instanceof mo?e.name:e,n=this._markers.get(t);if(!n)throw new m("markercollection-refresh-marker-not-exists",this);const o=n.getRange();this.fire("update:"+t,n,o,o,n.getData())}*getMarkersAtPosition(e){for(const t of this)t.getRange().containsPosition(e)&&(yield t)}*getMarkersIntersectingRange(e){for(const t of this)t.getRange().getIntersection(e)!==null&&(yield t)}destroy(){for(const e of this._markers.values())this._destroyMarker(e);this._markers=null,this.stopListening()}*getMarkersGroup(e){for(const t of this._markers.values())t.name.startsWith(e+":")&&(yield t)}_destroyMarker(e){e.stopListening(),e._detachLiveRange()}}ie(dd,fe);class mo{constructor(e,t,n,o){this.name=e,this._liveRange=this._attachLiveRange(t),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._affectsData}getData(){return{range:this.getRange(),affectsData:this.affectsData,managedUsingOperations:this.managedUsingOperations}}getStart(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.start.clone()}getEnd(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.end.clone()}getRange(){if(!this._liveRange)throw new m("marker-destroyed",this);return this._liveRange.toRange()}is(e){return e==="marker"||e==="model:marker"}_attachLiveRange(e){return this._liveRange&&this._detachLiveRange(),e.delegate("change:range").to(this),e.delegate("change:content").to(this),this._liveRange=e,e}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}ie(mo,fe);class at extends Pt{get type(){return"noop"}clone(){return new at(this.baseVersion)}getReversed(){return new at(this.baseVersion+1)}_execute(){}static get className(){return"NoOperation"}}const Kt={};Kt[Ye.className]=Ye,Kt[st.className]=st,Kt[vt.className]=vt,Kt[Me.className]=Me,Kt[at.className]=at,Kt[Pt.className]=Pt,Kt[Ct.className]=Ct,Kt[kn.className]=kn,Kt[Re.className]=Re,Kt[Ke.className]=Ke;class ut extends H{constructor(e,t,n="toNone"){if(super(e,t,n),!this.root.is("rootElement"))throw new m("model-liveposition-root-not-rootelement",e);nw.call(this)}detach(){this.stopListening()}is(e){return e==="livePosition"||e==="model:livePosition"||e=="position"||e==="model:position"}toPosition(){return new H(this.root,this.path.slice(),this.stickiness)}static fromPosition(e,t){return new this(e.root,e.path.slice(),t||e.stickiness)}}function nw(){this.listenTo(this.root.document.model,"applyOperation",(i,e)=>{const t=e[0];t.isDocumentOperation&&ow.call(this,t)},{priority:"low"})}function ow(i){const e=this.getTransformedByOperation(i);if(!this.isEqual(e)){const t=this.toPosition();this.path=e.path,this.root=e.root,this.fire("change",t)}}ie(ut,fe);class iw{constructor(e,t,n){this.model=e,this.writer=t,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=e.schema,this._documentFragment=t.createDocumentFragment(),this._documentFragmentPosition=t.createPositionAt(this._documentFragment,0),this._firstNode=null,this._lastNode=null,this._lastAutoParagraph=null,this._filterAttributesOf=[],this._affectedStart=null,this._affectedEnd=null}handleNodes(e){for(const t of Array.from(e))this._handleNode(t);this._insertPartialFragment(),this._lastAutoParagraph&&this._updateLastNodeFromAutoParagraph(this._lastAutoParagraph),this._mergeOnRight(),this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}_updateLastNodeFromAutoParagraph(e){const t=this.writer.createPositionAfter(this._lastNode),n=this.writer.createPositionAfter(e);if(n.isAfter(t)){if(this._lastNode=e,this.position.parent!=e||!this.position.isAtEnd)throw new m("insertcontent-invalid-insertion-position",this);this.position=n,this._setAffectedBoundaries(this.position)}}getSelectionRange(){return this.nodeToSelect?R._createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}getAffectedRange(){return this._affectedStart?new R(this._affectedStart,this._affectedEnd):null}destroy(){this._affectedStart&&this._affectedStart.detach(),this._affectedEnd&&this._affectedEnd.detach()}_handleNode(e){if(this.schema.isObject(e))return void this._handleObject(e);let t=this._checkAndAutoParagraphToAllowedPosition(e);t||(t=this._checkAndSplitToAllowedPosition(e),t)?(this._appendToFragment(e),this._firstNode||(this._firstNode=e),this._lastNode=e):this._handleDisallowedNode(e)}_insertPartialFragment(){if(this._documentFragment.isEmpty)return;const e=ut.fromPosition(this.position,"toNext");this._setAffectedBoundaries(this.position),this._documentFragment.getChild(0)==this._firstNode&&(this.writer.insert(this._firstNode,this.position),this._mergeOnLeft(),this.position=e.toPosition()),this._documentFragment.isEmpty||this.writer.insert(this._documentFragment,this.position),this._documentFragmentPosition=this.writer.createPositionAt(this._documentFragment,0),this.position=e.toPosition(),e.detach()}_handleObject(e){this._checkAndSplitToAllowedPosition(e)?this._appendToFragment(e):this._tryAutoparagraphing(e)}_handleDisallowedNode(e){e.is("element")?this.handleNodes(e.getChildren()):this._tryAutoparagraphing(e)}_appendToFragment(e){if(!this.schema.checkChild(this.position,e))throw new m("insertcontent-wrong-position",this,{node:e,position:this.position});this.writer.insert(e,this._documentFragmentPosition),this._documentFragmentPosition=this._documentFragmentPosition.getShiftedBy(e.offsetSize),this.schema.isObject(e)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=e:this.nodeToSelect=null,this._filterAttributesOf.push(e)}_setAffectedBoundaries(e){this._affectedStart||(this._affectedStart=ut.fromPosition(e,"toPrevious")),this._affectedEnd&&!this._affectedEnd.isBefore(e)||(this._affectedEnd&&this._affectedEnd.detach(),this._affectedEnd=ut.fromPosition(e,"toNext"))}_mergeOnLeft(){const e=this._firstNode;if(!(e instanceof Se)||!this._canMergeLeft(e))return;const t=ut._createBefore(e);t.stickiness="toNext";const n=ut.fromPosition(this.position,"toNext");this._affectedStart.isEqual(t)&&(this._affectedStart.detach(),this._affectedStart=ut._createAt(t.nodeBefore,"end","toPrevious")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.isEqual(this._affectedEnd)&&this._firstNode===this._lastNode&&(this._affectedEnd.detach(),this._affectedEnd=ut._createAt(t.nodeBefore,"end","toNext")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_mergeOnRight(){const e=this._lastNode;if(!(e instanceof Se)||!this._canMergeRight(e))return;const t=ut._createAfter(e);if(t.stickiness="toNext",!this.position.isEqual(t))throw new m("insertcontent-invalid-insertion-position",this);this.position=H._createAt(t.nodeBefore,"end");const n=ut.fromPosition(this.position,"toPrevious");this._affectedEnd.isEqual(t)&&(this._affectedEnd.detach(),this._affectedEnd=ut._createAt(t.nodeBefore,"end","toNext")),this._firstNode===this._lastNode&&(this._firstNode=t.nodeBefore,this._lastNode=t.nodeBefore),this.writer.merge(t),t.getShiftedBy(-1).isEqual(this._affectedStart)&&this._firstNode===this._lastNode&&(this._affectedStart.detach(),this._affectedStart=ut._createAt(t.nodeBefore,0,"toPrevious")),this.position=n.toPosition(),n.detach(),this._filterAttributesOf.push(this.position.parent),t.detach()}_canMergeLeft(e){const t=e.previousSibling;return t instanceof Se&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(t,e)}_canMergeRight(e){const t=e.nextSibling;return t instanceof Se&&this.canMergeWith.has(t)&&this.model.schema.checkMerge(e,t)}_tryAutoparagraphing(e){const t=this.writer.createElement("paragraph");this._getAllowedIn(this.position.parent,t)&&this.schema.checkChild(t,e)&&(t._appendChild(e),this._handleNode(t))}_checkAndAutoParagraphToAllowedPosition(e){if(this.schema.checkChild(this.position.parent,e))return!0;if(!this.schema.checkChild(this.position.parent,"paragraph")||!this.schema.checkChild("paragraph",e))return!1;this._insertPartialFragment();const t=this.writer.createElement("paragraph");return this.writer.insert(t,this.position),this._setAffectedBoundaries(this.position),this._lastAutoParagraph=t,this.position=this.writer.createPositionAt(t,0),!0}_checkAndSplitToAllowedPosition(e){const t=this._getAllowedIn(this.position.parent,e);if(!t)return!1;for(t!=this.position.parent&&this._insertPartialFragment();t!=this.position.parent;)if(this.position.isAtStart){const n=this.position.parent;this.position=this.writer.createPositionBefore(n),n.isEmpty&&n.parent===t&&this.writer.remove(n)}else if(this.position.isAtEnd)this.position=this.writer.createPositionAfter(this.position.parent);else{const n=this.writer.createPositionAfter(this.position.parent);this._setAffectedBoundaries(this.position),this.writer.split(this.position),this.position=n,this.canMergeWith.add(this.position.nodeAfter)}return!0}_getAllowedIn(e,t){return this.schema.checkChild(e,t)?e:this.schema.isLimit(e)?null:this._getAllowedIn(e.parent,t)}}function ud(i,e,t="auto"){const n=i.getSelectedElement();if(n&&e.schema.isObject(n)&&!e.schema.isInline(n))return["before","after"].includes(t)?e.createRange(e.createPositionAt(n,t)):e.createRangeOn(n);const o=rt(i.getSelectedBlocks());if(!o)return e.createRange(i.focus);if(o.isEmpty)return e.createRange(e.createPositionAt(o,0));const r=e.createPositionAfter(o);return i.focus.isTouching(r)?e.createRange(r):e.createRange(e.createPositionBefore(o))}function rw(i,e,t,n,o={}){if(!i.schema.isObject(e))throw new m("insertobject-element-not-an-object",i,{object:e});let r;r=t?t.is("selection")?t:i.createSelection(t,n):i.document.selection;let s=r;o.findOptimalPosition&&i.schema.isBlock(e)&&(s=i.createSelection(ud(r,i,o.findOptimalPosition)));const a=rt(r.getSelectedBlocks()),l={};return a&&Object.assign(l,i.schema.getAttributesWithProperty(a,"copyOnReplace",!0)),i.change(c=>{s.isCollapsed||i.deleteContent(s,{doNotAutoparagraph:!0});let d=e;const u=s.anchor.parent;!i.schema.checkChild(u,e)&&i.schema.checkChild(u,"paragraph")&&i.schema.checkChild("paragraph",e)&&(d=c.createElement("paragraph"),c.insert(e,d)),i.schema.setAllowedAttributes(d,l,c);const h=i.insertContent(d,s);return h.isCollapsed||o.setSelection&&function(p,k,w,v){const E=p.model;if(w=="after"){let P=k.nextSibling;!(P&&E.schema.checkChild(P,"$text"))&&E.schema.checkChild(k.parent,"paragraph")&&(P=p.createElement("paragraph"),E.schema.setAllowedAttributes(P,v,p),E.insertContent(P,p.createPositionAfter(k))),P&&p.setSelection(P,0)}else{if(w!="on")throw new m("insertobject-invalid-place-parameter-value",E);p.setSelection(k,"on")}}(c,e,o.setSelection,l),h})}function sw(i,e,t={}){if(e.isCollapsed)return;const n=e.getFirstRange();if(n.root.rootName=="$graveyard")return;const o=i.schema;i.change(r=>{if(!t.doNotResetEntireContent&&function(c,d){const u=c.getLimitElement(d);if(!d.containsEntireContent(u))return!1;const h=d.getFirstRange();return h.start.parent==h.end.parent?!1:c.checkChild(u,"paragraph")}(o,e))return void function(c,d){const u=c.model.schema.getLimitElement(d);c.remove(c.createRangeIn(u)),pd(c,c.createPositionAt(u,0),d)}(r,e);const s={};if(!t.doNotAutoparagraph){const c=e.getSelectedElement();c&&Object.assign(s,o.getAttributesWithProperty(c,"copyOnReplace",!0))}const[a,l]=function(c){const d=c.root.document.model,u=c.start;let h=c.end;if(d.hasContent(c,{ignoreMarkers:!0})){const p=function(k){const w=k.parent,v=w.root.document.model.schema,E=w.getAncestors({parentFirst:!0,includeSelf:!0});for(const P of E){if(v.isLimit(P))return null;if(v.isBlock(P))return P}}(h);if(p&&h.isTouching(d.createPositionAt(p,0))){const k=d.createSelection(c);d.modifySelection(k,{direction:"backward"});const w=k.getLastPosition(),v=d.createRange(w,h);d.hasContent(v,{ignoreMarkers:!0})||(h=w)}}return[ut.fromPosition(u,"toPrevious"),ut.fromPosition(h,"toNext")]}(n);a.isTouching(l)||r.remove(r.createRange(a,l)),t.leaveUnmerged||(function(c,d,u){const h=c.model;if(!Xr(c.model.schema,d,u))return;const[p,k]=function(w,v){const E=w.getAncestors(),P=v.getAncestors();let F=0;for(;E[F]&&E[F]==P[F];)F++;return[E[F],P[F]]}(d,u);!p||!k||(!h.hasContent(p,{ignoreMarkers:!0})&&h.hasContent(k,{ignoreMarkers:!0})?gd(c,d,u,p.parent):hd(c,d,u,p.parent))}(r,a,l),o.removeDisallowedAttributes(a.parent.getChildren(),r)),md(r,e,a),!t.doNotAutoparagraph&&function(c,d){const u=c.checkChild(d,"$text"),h=c.checkChild(d,"paragraph");return!u&&h}(o,a)&&pd(r,a,e,s),a.detach(),l.detach()})}function hd(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(r,e),i.merge(e);t.parent.isEmpty;){const s=t.parent;t=i.createPositionBefore(s),i.remove(s)}Xr(i.model.schema,e,t)&&hd(i,e,t,n)}}function gd(i,e,t,n){const o=e.parent,r=t.parent;if(o!=n&&r!=n){for(e=i.createPositionAfter(o),(t=i.createPositionBefore(r)).isEqual(e)||i.insert(o,t);e.parent.isEmpty;){const s=e.parent;e=i.createPositionBefore(s),i.remove(s)}t=i.createPositionBefore(r),function(s,a){const l=a.nodeBefore,c=a.nodeAfter;l.name!=c.name&&s.rename(l,c.name),s.clearAttributes(l),s.setAttributes(Object.fromEntries(c.getAttributes()),l),s.merge(a)}(i,t),Xr(i.model.schema,e,t)&&gd(i,e,t,n)}}function Xr(i,e,t){const n=e.parent,o=t.parent;return n!=o&&!i.isLimit(n)&&!i.isLimit(o)&&function(r,s,a){const l=new R(r,s);for(const c of l.getWalker())if(a.isLimit(c.item))return!1;return!0}(e,t,i)}function pd(i,e,t,n={}){const o=i.createElement("paragraph");i.model.schema.setAllowedAttributes(o,n,i),i.insert(o,e),md(i,t,i.createPositionAt(o,0))}function md(i,e,t){e instanceof Wt?i.setSelection(t):e.setTo(t)}const fd=' ,.?!:;"-()';function aw(i,e){const{isForward:t,walker:n,unit:o,schema:r,treatEmojiAsSingleUnit:s}=i,{type:a,item:l,nextPosition:c}=e;if(a=="text")return i.unit==="word"?function(d,u){let h=d.position.textNode;if(h){let p=d.position.offset-h.startOffset;for(;!cw(h.data,p,u)&&!dw(h,p,u);){d.next();const k=u?d.position.nodeAfter:d.position.nodeBefore;if(k&&k.is("$text")){const w=k.data.charAt(u?0:k.data.length-1);fd.includes(w)||(d.next(),h=d.position.textNode)}p=d.position.offset-h.startOffset}}return d.position}(n,t):function(d,u,h){const p=d.position.textNode;if(p){const k=p.data;let w=d.position.offset-p.startOffset;for(;sd(k,w)||u=="character"&&ad(k,w)||h&&tw(k,w);)d.next(),w=d.position.offset-p.startOffset}return d.position}(n,o,s);if(a==(t?"elementStart":"elementEnd")){if(r.isSelectable(l))return H._createAt(l,t?"after":"before");if(r.checkChild(c,"$text"))return c}else{if(r.isLimit(l))return void n.skip(()=>!0);if(r.checkChild(c,"$text"))return c}}function lw(i,e){const t=i.root,n=H._createAt(t,e?"end":0);return e?new R(i,n):new R(n,i)}function cw(i,e,t){const n=e+(t?0:-1);return fd.includes(i.charAt(n))}function dw(i,e,t){return e===(t?i.endOffset:0)}function kd(i,e){const t=[];Array.from(i.getItems({direction:"backward"})).map(n=>e.createRangeOn(n)).filter(n=>(n.start.isAfter(i.start)||n.start.isEqual(i.start))&&(n.end.isBefore(i.end)||n.end.isEqual(i.end))).forEach(n=>{t.push(n.start.parent),e.remove(n)}),t.forEach(n=>{let o=n;for(;o.parent&&o.isEmpty;){const r=e.createRangeOn(o);o=o.parent,e.remove(r)}})}function uw(i){i.document.registerPostFixer(e=>function(t,n){const o=n.document.selection,r=n.schema,s=[];let a=!1;for(const l of o.getRanges()){const c=hw(l,r);c&&!c.isEqual(l)?(s.push(c),a=!0):s.push(l)}a&&t.setSelection(function(l){const c=[...l],d=new Set;let u=1;for(;u<c.length;){const h=c[u],p=c.slice(0,u);for(const[k,w]of p.entries())if(!d.has(k)){if(h.isEqual(w))d.add(k);else if(h.isIntersecting(w)){d.add(k),d.add(u);const v=h.getJoined(w);c.push(v)}}u++}return c.filter((h,p)=>!d.has(p))}(s),{backward:o.isBackward})}(e,i))}function hw(i,e){return i.isCollapsed?function(t,n){const o=t.start,r=n.getNearestSelectionRange(o);if(!r){const a=o.getAncestors().reverse().find(l=>n.isObject(l));return a?R._createOn(a):null}if(!r.isCollapsed)return r;const s=r.start;return o.isEqual(s)?null:new R(s)}(i,e):function(t,n){const{start:o,end:r}=t,s=n.checkChild(o,"$text"),a=n.checkChild(r,"$text"),l=n.getLimitElement(o),c=n.getLimitElement(r);if(l===c){if(s&&a)return null;if(function(h,p,k){const w=h.nodeAfter&&!k.isLimit(h.nodeAfter)||k.checkChild(h,"$text"),v=p.nodeBefore&&!k.isLimit(p.nodeBefore)||k.checkChild(p,"$text");return w||v}(o,r,n)){const h=o.nodeAfter&&n.isSelectable(o.nodeAfter)?null:n.getNearestSelectionRange(o,"forward"),p=r.nodeBefore&&n.isSelectable(r.nodeBefore)?null:n.getNearestSelectionRange(r,"backward"),k=h?h.start:o,w=p?p.end:r;return new R(k,w)}}const d=l&&!l.is("rootElement"),u=c&&!c.is("rootElement");if(d||u){const h=o.nodeAfter&&r.nodeBefore&&o.nodeAfter.parent===r.nodeBefore.parent,p=d&&(!h||!wd(o.nodeAfter,n)),k=u&&(!h||!wd(r.nodeBefore,n));let w=o,v=r;return p&&(w=H._createBefore(bd(l,n))),k&&(v=H._createAfter(bd(c,n))),new R(w,v)}return null}(i,e)}function bd(i,e){let t=i,n=t;for(;e.isLimit(n)&&n.parent;)t=n,n=n.parent;return t}function wd(i,e){return i&&e.isSelectable(i)}class _d{constructor(){this.markers=new dd,this.document=new ld(this),this.schema=new Wc,this._pendingChanges=[],this._currentWriter=null,["insertContent","insertObject","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(e=>this.decorate(e)),this.on("applyOperation",(e,t)=>{t[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$container",{allowIn:["$root","$container"]}),this.schema.register("$block",{allowIn:["$root","$container"],isBlock:!0}),this.schema.register("$blockObject",{allowWhere:"$block",isBlock:!0,isObject:!0}),this.schema.register("$inlineObject",{allowWhere:"$text",allowAttributesOf:"$text",isInline:!0,isObject:!0}),this.schema.register("$text",{allowIn:"$block",isInline:!0,isContent:!0}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$documentFragment",{allowContentOf:"$root",allowChildren:"$text",isLimit:!0}),this.schema.register("$marker"),this.schema.addChildCheck((e,t)=>{if(t.name==="$marker")return!0}),uw(this),this.document.registerPostFixer(jc)}change(e){try{return this._pendingChanges.length===0?(this._pendingChanges.push({batch:new po,callback:e}),this._runPendingChanges()[0]):e(this._currentWriter)}catch(t){m.rethrowUnexpectedError(t,this)}}enqueueChange(e,t){try{e?typeof e=="function"?(t=e,e=new po):e instanceof po||(e=new po(e)):e=new po,this._pendingChanges.push({batch:e,callback:t}),this._pendingChanges.length==1&&this._runPendingChanges()}catch(n){m.rethrowUnexpectedError(n,this)}}applyOperation(e){e._execute()}insertContent(e,t,n){return function(o,r,s,a){return o.change(l=>{let c;c=s?s instanceof mn||s instanceof Wt?s:l.createSelection(s,a):o.document.selection,c.isCollapsed||o.deleteContent(c,{doNotAutoparagraph:!0});const d=new iw(o,l,c.anchor);let u;u=r.is("documentFragment")?r.getChildren():[r],d.handleNodes(u);const h=d.getSelectionRange();h&&(c instanceof Wt?l.setSelection(h):c.setTo(h));const p=d.getAffectedRange()||o.createRange(c.anchor);return d.destroy(),p})}(this,e,t,n)}insertObject(e,t,n,o){return rw(this,e,t,n,o)}deleteContent(e,t){sw(this,e,t)}modifySelection(e,t){(function(n,o,r={}){const s=n.schema,a=r.direction!="backward",l=r.unit?r.unit:"character",c=!!r.treatEmojiAsSingleUnit,d=o.focus,u=new pn({boundaries:lw(d,a),singleCharacters:!0,direction:a?"forward":"backward"}),h={walker:u,schema:s,isForward:a,unit:l,treatEmojiAsSingleUnit:c};let p;for(;p=u.next();){if(p.done)return;const k=aw(h,p.value);if(k)return void(o instanceof Wt?n.change(w=>{w.setSelectionFocus(k)}):o.setFocus(k))}})(this,e,t)}getSelectedContent(e){return function(t,n){return t.change(o=>{const r=o.createDocumentFragment(),s=n.getFirstRange();if(!s||s.isCollapsed)return r;const a=s.start.root,l=s.start.getCommonPath(s.end),c=a.getNodeByPath(l);let d;d=s.start.parent==s.end.parent?s:o.createRange(o.createPositionAt(c,s.start.path[l.length]),o.createPositionAt(c,s.end.path[l.length]+1));const u=d.end.offset-d.start.offset;for(const h of d.getItems({shallow:!0}))h.is("$textProxy")?o.appendText(h.data,h.getAttributes(),r):o.append(o.cloneElement(h,!0),r);if(d!=s){const h=s._getTransformedByMove(d.start,o.createPositionAt(r,0),u)[0],p=o.createRange(o.createPositionAt(r,0),h.start);kd(o.createRange(h.end,o.createPositionAt(r,"end")),o),kd(p,o)}return r})}(this,e)}hasContent(e,t={}){const n=e instanceof Se?R._createIn(e):e;if(n.isCollapsed)return!1;const{ignoreWhitespaces:o=!1,ignoreMarkers:r=!1}=t;if(!r){for(const s of this.markers.getMarkersIntersectingRange(n))if(s.affectsData)return!0}for(const s of n.getItems())if(this.schema.isContent(s)&&(!s.is("$textProxy")||!o||s.data.search(/\S/)!==-1))return!0;return!1}createPositionFromPath(e,t,n){return new H(e,t,n)}createPositionAt(e,t){return H._createAt(e,t)}createPositionAfter(e){return H._createAfter(e)}createPositionBefore(e){return H._createBefore(e)}createRange(e,t){return new R(e,t)}createRangeIn(e){return R._createIn(e)}createRangeOn(e){return R._createOn(e)}createSelection(e,t,n){return new mn(e,t,n)}createBatch(e){return new po(e)}createOperationFromJSON(e){return class{static fromJSON(t,n){return Kt[t.__className].fromJSON(t,n)}}.fromJSON(e,this.document)}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const e=[];for(this.fire("_beforeChanges");this._pendingChanges.length;){const t=this._pendingChanges[0].batch;this._currentWriter=new Yb(this,t);const n=this._pendingChanges[0].callback(this._currentWriter);e.push(n),this.document._handleChangeBlock(this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return this.fire("_afterChanges"),e}}ie(_d,Le);class gw extends gn{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const o=t;t=(r,s)=>{this.editor.execute(o),s()}}super.set(e,t,n)}}class Ad{constructor(e={}){const t=e.language||this.constructor.defaultConfig&&this.constructor.defaultConfig.language;this._context=e.context||new Zf({language:t}),this._context._addEditor(this,!e.context);const n=Array.from(this.constructor.builtinPlugins||[]);this.config=new pl(e,this.constructor.defaultConfig),this.config.define("plugins",n),this.config.define(this._context._getEditorConfig()),this.plugins=new fr(this,n,this._context.plugins),this.locale=this._context.locale,this.t=this.locale.t,this._readOnlyLocks=new Set,this.commands=new Tb,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.model=new _d;const o=new _k;this.data=new Qc(this.model,o),this.editing=new Gc(this.model,o),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new Gb([this.editing.downcastDispatcher,this.data.downcastDispatcher],this.data.upcastDispatcher),this.conversion.addAlias("dataDowncast",this.data.downcastDispatcher),this.conversion.addAlias("editingDowncast",this.editing.downcastDispatcher),this.keystrokes=new gw(this),this.keystrokes.listenTo(this.editing.view.document)}get isReadOnly(){return this._readOnlyLocks.size>0}set isReadOnly(e){throw new m("editor-isreadonly-has-no-setter")}enableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new m("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)||(this._readOnlyLocks.add(e),this._readOnlyLocks.size===1&&this.fire("change:isReadOnly","isReadOnly",!0,!1))}disableReadOnlyMode(e){if(typeof e!="string"&&typeof e!="symbol")throw new m("editor-read-only-lock-id-invalid",null,{lockId:e});this._readOnlyLocks.has(e)&&(this._readOnlyLocks.delete(e),this._readOnlyLocks.size===0&&this.fire("change:isReadOnly","isReadOnly",!1,!0))}initPlugins(){const e=this.config,t=e.get("plugins"),n=e.get("removePlugins")||[],o=e.get("extraPlugins")||[],r=e.get("substitutePlugins")||[];return this.plugins.init(t.concat(o),n,r)}destroy(){let e=Promise.resolve();return this.state=="initializing"&&(e=new Promise(t=>this.once("ready",t))),e.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()}).then(()=>this._context._removeEditor(this))}execute(...e){try{return this.commands.execute(...e)}catch(t){m.rethrowUnexpectedError(t,this)}}focus(){this.editing.view.focus()}}ie(Ad,Le);class pw{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(es(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new m("componentfactory-item-missing",this,{name:e});return this._components.get(es(e)).callback(this.editor.locale)}has(e){return this._components.has(es(e))}}function es(i){return String(i).toLowerCase()}class vd{constructor(e){this.editor=e,this.componentFactory=new pw(e),this.focusTracker=new Bt,this.set("viewportOffset",this._readViewportOffsetFromConfig()),this._editableElementsMap=new Map,this.listenTo(e.editing.view.document,"layoutChanged",()=>this.update())}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null;this._editableElementsMap=new Map}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}}ie(vd,Le);const mw={setData(i){this.data.set(i)},getData(i){return this.data.get(i)}},fw=mw,kw={updateSourceElement(){if(!this.sourceElement)throw new m("editor-missing-sourceelement",this);var i,e;i=this.sourceElement,e=this.data.get(),i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}};class Cd extends Lo{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new Tt({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(e){if(typeof e!="string")throw new m("pendingactions-add-invalid-message",this);const t=Object.create(Le);return t.set("message",e),this._actions.add(t),this.hasAny=!0,t}remove(e){this._actions.remove(e),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}const yd='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="9.5" cy="4.5" r="1.5"/><circle cx="9.5" cy="10.5" r="1.5"/><circle cx="9.5" cy="16.5" r="1.5"/></svg>',zt={cancel:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.591 10.177 4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z"/></svg>',caption:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 16h9a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"/><path d="M17 1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zm0 1.5H3a.5.5 0 0 0-.492.41L2.5 3v9a.5.5 0 0 0 .41.492L3 12.5h14a.5.5 0 0 0 .492-.41L17.5 12V3a.5.5 0 0 0-.41-.492L17 2.5z" fill-opacity=".6"/></svg>',check:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z"/></svg>',cog:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m11.333 2 .19 2.263a5.899 5.899 0 0 1 1.458.604L14.714 3.4 16.6 5.286l-1.467 1.733c.263.452.468.942.605 1.46L18 8.666v2.666l-2.263.19a5.899 5.899 0 0 1-.604 1.458l1.467 1.733-1.886 1.886-1.733-1.467a5.899 5.899 0 0 1-1.46.605L11.334 18H8.667l-.19-2.263a5.899 5.899 0 0 1-1.458-.604L5.286 16.6 3.4 14.714l1.467-1.733a5.899 5.899 0 0 1-.604-1.458L2 11.333V8.667l2.262-.189a5.899 5.899 0 0 1 .605-1.459L3.4 5.286 5.286 3.4l1.733 1.467a5.899 5.899 0 0 1 1.46-.605L8.666 2h2.666zM10 6.267a3.733 3.733 0 1 0 0 7.466 3.733 3.733 0 0 0 0-7.466z"/></svg>',eraser:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m8.636 9.531-2.758 3.94a.5.5 0 0 0 .122.696l3.224 2.284h1.314l2.636-3.736L8.636 9.53zm.288 8.451L5.14 15.396a2 2 0 0 1-.491-2.786l6.673-9.53a2 2 0 0 1 2.785-.49l3.742 2.62a2 2 0 0 1 .491 2.785l-7.269 10.053-2.147-.066z"/><path d="M4 18h5.523v-1H4zm-2 0h1v-1H2z"/></svg>',lowVision:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22 2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012a2.45 2.45 0 0 1 2.017 1.513c.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z"/></svg>',image:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',alignBottom:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m9.239 13.938-2.88-1.663a.75.75 0 0 1 .75-1.3L9 12.067V4.75a.75.75 0 1 1 1.5 0v7.318l1.89-1.093a.75.75 0 0 1 .75 1.3l-2.879 1.663a.752.752 0 0 1-.511.187.752.752 0 0 1-.511-.187zM4.25 17a.75.75 0 1 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H4.25z"/></svg>',alignMiddle:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.75 11.875a.752.752 0 0 1 .508.184l2.883 1.666a.75.75 0 0 1-.659 1.344l-.091-.044-1.892-1.093.001 4.318a.75.75 0 1 1-1.5 0v-4.317l-1.89 1.092a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .51-.187zM15.25 9a.75.75 0 1 1 0 1.5H4.75a.75.75 0 1 1 0-1.5h10.5zM9.75.375a.75.75 0 0 1 .75.75v4.318l1.89-1.093.092-.045a.75.75 0 0 1 .659 1.344l-2.883 1.667a.752.752 0 0 1-.508.184.752.752 0 0 1-.511-.187L6.359 5.65a.75.75 0 0 1 .75-1.299L9 5.442V1.125a.75.75 0 0 1 .75-.75z"/></svg>',alignTop:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m10.261 7.062 2.88 1.663a.75.75 0 0 1-.75 1.3L10.5 8.933v7.317a.75.75 0 1 1-1.5 0V8.932l-1.89 1.093a.75.75 0 0 1-.75-1.3l2.879-1.663a.752.752 0 0 1 .511-.187.752.752 0 0 1 .511.187zM15.25 4a.75.75 0 1 1 0 1.5H4.75a.75.75 0 0 1 0-1.5h10.5z"/></svg>',alignLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',alignCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"/></svg>',alignRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"/></svg>',alignJustify:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"/></svg>',objectLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zm0-3H18v1.5h-4.5zm0-3H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectCenter:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M15.003 7v5.5a1 1 0 0 1-1 1H5.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H6.5V12h6.997V7.5z"/></svg>',objectRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2zm0-9h5v1.5H2zm0 3h5v1.5H2zm0 3h5v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectFullWidth:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18 7v5.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm-1.505.5H3.504V12h12.991V7.5z"/></svg>',objectInline:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm11.5 9H18v1.5h-4.5zM2 15h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockLeft:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M12.003 7v5.5a1 1 0 0 1-1 1H2.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H3.5V12h6.997V7.5z"/></svg>',objectBlockRight:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path opacity=".5" d="M2 3h16v1.5H2zm0 12h16v1.5H2z"/><path d="M18.003 7v5.5a1 1 0 0 1-1 1H8.996a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h8.007a1 1 0 0 1 1 1zm-1.506.5H9.5V12h6.997V7.5z"/></svg>',objectSizeFull:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M18.095 2H1.905C.853 2 0 2.895 0 4v12c0 1.105.853 2 1.905 2h16.19C19.147 18 20 17.105 20 16V4c0-1.105-.853-2-1.905-2zm0 1.5c.263 0 .476.224.476.5v12c0 .276-.213.5-.476.5H1.905a.489.489 0 0 1-.476-.5V4c0-.276.213-.5.476-.5h16.19z"/></svg>',objectSizeLarge:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M13 6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5h11z"/></svg>',objectSizeSmall:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M7 10H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5z"/></svg>',objectSizeMedium:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.5 17v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zm2 0v1h-1v-1h1zM1 15.5v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm-19-2v1H0v-1h1zm19 0v1h-1v-1h1zm0-2v1h-1v-1h1zm-19 0v1H0v-1h1zM14.5 2v1h-1V2h1zm2 0v1h-1V2h1zm2 0v1h-1V2h1zm-8 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm-2 0v1h-1V2h1zm8 0v1h-1V2h1zm-10 0v1h-1V2h1z"/><path d="M10 8H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8z"/></svg>',pencil:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7.3 17.37-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506 13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5 9.375 17H19v1.5H8z"/></svg>',pilcrow:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.999 2H15a1 1 0 0 1 0 2h-1.004v13a1 1 0 1 1-2 0V4H8.999v13a1 1 0 1 1-2 0v-7A4 4 0 0 1 3 6a4 4 0 0 1 3.999-4z"/></svg>',quote:'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"/></svg>',threeVerticalDots:yd};function ts({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!e())return;const s=typeof r.composedPath=="function"?r.composedPath():[];for(const a of n)if(a.contains(r.target)||s.includes(a))return;t()})}function ns(i){i.set("_isCssTransitionsDisabled",!1),i.disableCssTransitions=()=>{i._isCssTransitionsDisabled=!0},i.enableCssTransitions=()=>{i._isCssTransitionsDisabled=!1},i.extendTemplate({attributes:{class:[i.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function os({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}class qn extends Tt{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new m("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const r of e)o.delegate(r).to(t)}),this.on("remove",(n,o)=>{for(const r of e)o.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var xd=_(4793),bw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(xd.Z,bw),xd.Z.locals;class ge{constructor(e){this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new Tt,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=Et.bind(this,this)}createCollection(e){const t=new qn(e);return this._viewCollections.add(t),t}registerChild(e){It(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){It(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new Et(e)}extendTemplate(e){Et.extend(this.template,e)}render(){if(this.isRendered)throw new m("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}ie(ge,ho),ie(ge,Le);class Et{constructor(e){Object.assign(this,Md(Sd(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new m("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)Ii(n)?yield n:is(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new ww({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,r)=>new Dd({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:r})}}static extend(e,t){if(e._isRendered)throw new m("template-extend-render",[this,e]);Bd(e,Md(Sd(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new m("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),Mi(this.text)?this._bindToObservable({schema:this.text,updater:_w(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){let t,n,o,r;if(!this.attributes)return;const s=e.node,a=e.revertData;for(t in this.attributes)if(o=s.getAttribute(t),n=this.attributes[t],a&&(a.attributes[t]=o),r=oe(n[0])&&n[0].ns?n[0].ns:null,Mi(n)){const l=r?n[0].value:n;a&&Pd(t)&&l.unshift(o),this._bindToObservable({schema:l,updater:Aw(s,t,r),data:e})}else t=="style"&&typeof n[0]!="string"?this._renderStyleAttribute(n[0],e):(a&&o&&Pd(t)&&n.unshift(o),n=n.map(l=>l&&l.value||l).reduce((l,c)=>l.concat(c),[]).reduce(Td,""),fo(n)||s.setAttributeNS(r,t,n))}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const r=e[o];Mi(r)?this._bindToObservable({schema:[r],updater:vw(n,o),data:t}):n.style[o]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let r=0;for(const s of this.children)if(rs(s)){if(!o){s.setParent(t);for(const a of s)n.appendChild(a.element)}}else if(Ii(s))o||(s.isRendered||s.render(),n.appendChild(s.element));else if(uo(s))n.appendChild(s);else if(o){const a={children:[],bindings:[],attributes:{}};e.revertData.children.push(a),s._renderNode({node:n.childNodes[r++],isApplying:!0,revertData:a})}else n.appendChild(s.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[r,s]=t.split("@");return o.activateDomEventListener(r,s,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Ed(e,t,n);const r=e.filter(s=>!fo(s)).filter(s=>s.observable).map(s=>s.activateAttributeListener(e,t,n));o&&o.bindings.push(r)}_revertTemplateFromNode(e,t){for(const n of t.bindings)for(const o of n)o();if(t.text)e.textContent=t.text;else{for(const n in t.attributes){const o=t.attributes[n];o===null?e.removeAttribute(n):e.setAttribute(n,o)}for(let n=0;n<t.children.length;++n)this._revertTemplateFromNode(e.childNodes[n],t.children[n])}}}ie(Et,fe);class Ko{constructor(e){Object.assign(this,e)}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Ed(e,t,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class ww extends Ko{activateDomEventListener(e,t,n){const o=(r,s)=>{t&&!s.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(s):this.observable.fire(this.eventNameOrFunction,s))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Dd extends Ko{getValue(e){return!fo(super.getValue(e))&&(this.valueIfTrue||!0)}}function Mi(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(Mi):i instanceof Ko)}function Ed(i,e,{node:t}){let n=function(o,r){return o.map(s=>s instanceof Ko?s.getValue(r):s)}(i,t);n=i.length==1&&i[0]instanceof Dd?n[0]:n.reduce(Td,""),fo(n)?e.remove():e.set(n)}function _w(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function Aw(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function vw(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function Sd(i){return gl(i,e=>{if(e&&(e instanceof Ko||is(e)||Ii(e)||rs(e)))return e})}function Md(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=it(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)Id(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=it(t[n].value)),Id(t,n)}(i.attributes);const e=[];if(i.children)if(rs(i.children))e.push(i.children);else for(const t of i.children)is(t)||Ii(t)||uo(t)?e.push(t):e.push(new Et(t));i.children=e}return i}function Id(i,e){i[e]=it(i[e])}function Td(i,e){return fo(e)?i:fo(i)?e:`${i} ${e}`}function Nd(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function Bd(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Nd(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Nd(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new m("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)Bd(i.children[t++],n)}}function fo(i){return!i&&i!==0}function Ii(i){return i instanceof ge}function is(i){return i instanceof Et}function rs(i){return i instanceof qn}function Pd(i){return i=="class"||i=="style"}class Cw extends qn{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new Et({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=uc(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var zd=_(6574),yw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(zd.Z,yw),zd.Z.locals;class Ti extends ge{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");for(t&&(this.viewBox=t),this.element.innerHTML="";e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}var Ld=_(3332),xw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Ld.Z,xw),Ld.Z.locals;class Od extends ge{constructor(e){super(e),this.set("text",""),this.set("position","s");const t=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",t.to("position",n=>"ck-tooltip_"+n),t.if("text","ck-hidden",n=>!n.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:t.to("text")}]}]})}}var Rd=_(4906),Dw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Rd.Z,Dw),Rd.Z.locals;class He extends ge{constructor(e){super(e);const t=this.bindTemplate,n=M();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Ti,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",o=>!o),t.if("isVisible","ck-hidden",o=>!o),t.to("isOn",o=>o?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",o=>o||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,o=>!o),"aria-pressed":t.to("isOn",o=>!!this.isToggleable&&String(o))},children:this.children,on:{mousedown:t.to(o=>{o.preventDefault()}),click:t.to(o=>{this.isEnabled?this.fire("execute"):o.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createTooltipView(){const e=new Od;return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}_createLabelView(e){const t=new ge,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new ge;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Il(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Il(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var jd=_(5332),Ew={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(jd.Z,Ew),jd.Z.locals;class ss extends He{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new ge;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Fd=_(6781),Sw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Fd.Z,Sw),Fd.Z.locals;const Vd='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class Hd extends He{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ti;return e.content=Vd,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var Ud=_(7686),Mw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Ud.Z,Mw),Ud.Z.locals;class $d extends ge{constructor(e){super(e);const t=this.bindTemplate;this.set("class"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new gn,this.focusTracker=new Bt,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new He;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new He,t=e.bindTemplate;return e.icon=Vd,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class Iw extends ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}var qd=_(5485),Tw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(qd.Z,Tw),qd.Z.locals;function Gd({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){_t(e)&&(e=e()),_t(n)&&(n=n());const s=function(d){return d&&d.parentNode?d.offsetParent===qe.document.body?null:d.offsetParent:null}(i),a=new Ee(i);let l;const c={targetRect:new Ee(e),elementRect:a,positionedElementAncestor:s};if(n||o){const d=n&&new Ee(n).getVisible(),u=o&&function(h){h=Object.assign({top:0,bottom:0,left:0,right:0},h);const p=new Ee(qe.window);return p.top+=h.top,p.height-=h.top,p.bottom-=h.bottom,p.height-=h.bottom,p}(r);Object.assign(c,{limiterRect:d,viewportRect:u}),l=function(h,p){const{elementRect:k}=p,w=k.getArea(),v=h.map(F=>new as(F,p)).filter(F=>!!F.name);let E=0,P=null;for(const F of v){const{_limiterIntersectionArea:J,_viewportIntersectionArea:se}=F;if(J===w)return F;const Ne=se**2+J**2;Ne>E&&(E=Ne,P=F)}return P}(t,c)||new as(t[0],c)}else l=new as(t[0],c);return l}function Wd(i){const{scrollX:e,scrollY:t}=qe.window;return i.clone().moveBy(e,t)}class as{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:s,config:a}=n;Object.assign(this,{name:s,config:a}),this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get _limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get _viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=Wd(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=Wd(new Ee(t)),o=hc(t);let r=0,s=0;r-=n.left,s-=n.top,r+=t.scrollLeft,s+=t.scrollTop,r-=o.left,s-=o.top,e.moveBy(r,s)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}class ko extends ge{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class"),this.set("id"),this.set("panelPosition","auto"),this.keystrokes=new gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",()=>{this.isOpen&&(this.panelPosition==="auto"?this.panelView.position=ko._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:r,northWest:s,southMiddleEast:a,southMiddleWest:l,northMiddleEast:c,northMiddleWest:d}=ko.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,a,l,e,r,s,c,d,t]:[o,n,l,a,e,s,r,d,c,t]}}function Yd(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}ko.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},ko._getOptimalPosition=Gd;class bo{constructor(e){if(Object.assign(this,e),e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(r,s)=>{this[t](),s()})}}get first(){return this.focusables.find(ls)||null}get last(){return this.focusables.filter(ls).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const r=this.focusables.get(o);if(ls(r))return r;o=(o+n+e)%n}while(o!==t);return null}}function ls(i){return!(!i.focus||!Yd(i.element))}class Kd extends ge{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class Nw extends ge{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Qd(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}var Zd=_(5542),Bw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Zd.Z,Bw),Zd.Z.locals;class cs extends ge{constructor(e,t){super(e);const n=this.bindTemplate,o=this.t;this.options=t||{},this.set("ariaLabel",o("Editor toolbar")),this.set("maxWidth","auto"),this.items=this.createCollection(),this.focusTracker=new Bt,this.keystrokes=new gn,this.set("class"),this.set("isCompact",!1),this.itemsView=new Pw(e),this.children=this.createCollection(),this.children.add(this.itemsView),this.focusables=this.createCollection();const r=e.uiLanguageDirection==="rtl";this._focusCycler=new bo({focusables:this.focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:[r?"arrowright":"arrowleft","arrowup"],focusNext:[r?"arrowleft":"arrowright","arrowdown"]}});const s=["ck","ck-toolbar",n.to("class"),n.if("isCompact","ck-toolbar_compact")];var a;this.options.shouldGroupWhenFull&&this.options.isFloating&&s.push("ck-toolbar_floating"),this.setTemplate({tag:"div",attributes:{class:s,role:"toolbar","aria-label":n.to("ariaLabel"),style:{maxWidth:n.to("maxWidth")}},children:this.children,on:{mousedown:(a=this,a.bindTemplate.to(l=>{l.target===a.element&&l.preventDefault()}))}}),this._behavior=this.options.shouldGroupWhenFull?new Lw(this):new zw(this)}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element),this._behavior.render(this)}destroy(){return this._behavior.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy(),super.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(e,t){const n=Qd(e),o=n.items.filter((s,a,l)=>s==="|"||n.removeItems.indexOf(s)===-1&&(s==="-"?!this.options.shouldGroupWhenFull||(T("toolbarview-line-break-ignored-when-grouping-items",l),!1):!!t.has(s)||(T("toolbarview-item-unavailable",{name:s}),!1))),r=this._cleanSeparators(o).map(s=>s==="|"?new Kd:s==="-"?new Nw:t.create(s));this.items.addMany(r)}_cleanSeparators(e){const t=s=>s!=="-"&&s!=="|",n=e.length,o=e.findIndex(t),r=n-e.slice().reverse().findIndex(t);return e.slice(o,r).filter((s,a,l)=>t(s)?!0:!(a>0&&l[a-1]===s))}}class Pw extends ge{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar__items"]},children:this.children})}}class zw{constructor(e){const t=e.bindTemplate;e.set("isVertical",!1),e.itemsView.children.bindTo(e.items).using(n=>n),e.focusables.bindTo(e.items).using(n=>n),e.extendTemplate({attributes:{class:[t.if("isVertical","ck-toolbar_vertical")]}})}render(){}destroy(){}}class Lw{constructor(e){this.view=e,this.viewChildren=e.children,this.viewFocusables=e.focusables,this.viewItemsView=e.itemsView,this.viewFocusTracker=e.focusTracker,this.viewLocale=e.locale,this.ungroupedItems=e.createCollection(),this.groupedItems=e.createCollection(),this.groupedItemsDropdown=this._createGroupedItemsDropdown(),this.resizeObserver=null,this.cachedPadding=null,this.shouldUpdateGroupingOnNextResize=!1,e.itemsView.children.bindTo(this.ungroupedItems).using(t=>t),this.ungroupedItems.on("add",this._updateFocusCycleableItems.bind(this)),this.ungroupedItems.on("remove",this._updateFocusCycleableItems.bind(this)),e.children.on("add",this._updateFocusCycleableItems.bind(this)),e.children.on("remove",this._updateFocusCycleableItems.bind(this)),e.items.on("change",(t,n)=>{const o=n.index;for(const r of n.removed)o>=this.ungroupedItems.length?this.groupedItems.remove(r):this.ungroupedItems.remove(r);for(let r=o;r<o+n.added.length;r++){const s=n.added[r-o];r>this.ungroupedItems.length?this.groupedItems.add(s,r-this.ungroupedItems.length):this.ungroupedItems.add(s,r)}this._updateGrouping()}),e.extendTemplate({attributes:{class:["ck-toolbar_grouping"]}})}render(e){this.viewElement=e.element,this._enableGroupingOnResize(),this._enableGroupingOnMaxWidthChange(e)}destroy(){this.groupedItemsDropdown.destroy(),this.resizeObserver.destroy()}_updateGrouping(){if(!this.viewElement.ownerDocument.body.contains(this.viewElement))return;if(!Yd(this.viewElement))return void(this.shouldUpdateGroupingOnNextResize=!0);const e=this.groupedItems.length;let t;for(;this._areItemsOverflowing;)this._groupLastItem(),t=!0;if(!t&&this.groupedItems.length){for(;this.groupedItems.length&&!this._areItemsOverflowing;)this._ungroupFirstItem();this._areItemsOverflowing&&this._groupLastItem()}this.groupedItems.length!==e&&this.view.fire("groupedItemsUpdate")}get _areItemsOverflowing(){if(!this.ungroupedItems.length)return!1;const e=this.viewElement,t=this.viewLocale.uiLanguageDirection,n=new Ee(e.lastChild),o=new Ee(e);if(!this.cachedPadding){const r=qe.window.getComputedStyle(e),s=t==="ltr"?"paddingRight":"paddingLeft";this.cachedPadding=Number.parseInt(r[s])}return t==="ltr"?n.right>o.right-this.cachedPadding:n.left<o.left+this.cachedPadding}_enableGroupingOnResize(){let e;this.resizeObserver=new Ue(this.viewElement,t=>{e&&e===t.contentRect.width&&!this.shouldUpdateGroupingOnNextResize||(this.shouldUpdateGroupingOnNextResize=!1,this._updateGrouping(),e=t.contentRect.width)}),this._updateGrouping()}_enableGroupingOnMaxWidthChange(e){e.on("change:maxWidth",()=>{this._updateGrouping()})}_groupLastItem(){this.groupedItems.length||(this.viewChildren.add(new Kd),this.viewChildren.add(this.groupedItemsDropdown),this.viewFocusTracker.add(this.groupedItemsDropdown.element)),this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last),0)}_ungroupFirstItem(){this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first)),this.groupedItems.length||(this.viewChildren.remove(this.groupedItemsDropdown),this.viewChildren.remove(this.viewChildren.last),this.viewFocusTracker.remove(this.groupedItemsDropdown.element))}_createGroupedItemsDropdown(){const e=this.viewLocale,t=e.t,n=Gn(e);return n.class="ck-toolbar__grouped-dropdown",n.panelPosition=e.uiLanguageDirection==="ltr"?"sw":"se",tu(n,[]),n.buttonView.set({label:t("Show more items"),tooltip:!0,tooltipPosition:e.uiLanguageDirection==="rtl"?"se":"sw",icon:yd}),n.toolbarView.items.bindTo(this.groupedItems).using(o=>o),n}_updateFocusCycleableItems(){this.viewFocusables.clear(),this.ungroupedItems.map(e=>{this.viewFocusables.add(e)}),this.groupedItems.length&&this.viewFocusables.add(this.groupedItemsDropdown)}}var Jd=_(1046),Ow={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Jd.Z,Ow),Jd.Z.locals;class Rw extends ge{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new Bt,this.keystrokes=new gn,this._focusCycler=new bo({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const e of this.items)this.focusTracker.add(e.element);this.items.on("add",(e,t)=>{this.focusTracker.add(t.element)}),this.items.on("remove",(e,t)=>{this.focusTracker.remove(t.element)}),this.keystrokes.listenTo(this.element)}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class jw extends ge{constructor(e){super(e),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class Fw extends ge{constructor(e){super(e),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}var Xd=_(7339),Vw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(Xd.Z,Vw),Xd.Z.locals;var eu=_(3949),Hw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(eu.Z,Hw),eu.Z.locals;function Gn(i,e=Hd){const t=new e(i),n=new Iw(i),o=new ko(i,t,n);return t.bind("isEnabled").to(o),t instanceof Hd?t.bind("isOn").to(o,"isOpen"):t.arrowView.bind("isOn").to(o,"isOpen"),function(r){(function(s){s.on("render",()=>{ts({emitter:s,activator:()=>s.isOpen,callback:()=>{s.isOpen=!1},contextElements:[s.element]})})})(r),function(s){s.on("execute",a=>{a.source instanceof ss||(s.isOpen=!1)})}(r),function(s){s.keystrokes.set("arrowdown",(a,l)=>{s.isOpen&&(s.panelView.focus(),l())}),s.keystrokes.set("arrowup",(a,l)=>{s.isOpen&&(s.panelView.focusLast(),l())})}(r)}(o),o}function tu(i,e){const t=i.locale,n=t.t,o=i.toolbarView=new cs(t);o.set("ariaLabel",n("Dropdown toolbar")),i.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),e.map(r=>o.items.add(r)),i.panelView.children.add(o),o.items.delegate("execute").to(i)}function nu(i,e){const t=i.locale,n=i.listView=new Rw(t);n.items.bindTo(e).using(({type:o,model:r})=>{if(o==="separator")return new Fw(t);if(o==="button"||o==="switchbutton"){const s=new jw(t);let a;return a=o==="button"?new He(t):new ss(t),a.bind(...Object.keys(r)).to(r),a.delegate("execute").to(s),s.children.add(a),s}}),i.panelView.children.add(n),n.items.delegate("execute").to(i)}var ou=_(9688),Uw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(ou.Z,Uw),ou.Z.locals;class $w extends ge{constructor(e){super(e),this.body=new Cw(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}var iu=_(3662),qw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(iu.Z,qw),iu.Z.locals;class ru extends ge{constructor(e){super(e),this.set("text"),this.set("for"),this.id=`ck-editor__label_${M()}`;const t=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],id:this.id,for:t.to("for")},children:[{text:t.to("text")}]})}}class Gw extends $w{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new ru;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class Ww extends ge{constructor(e,t,n){super(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.name=null,this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(o=>{const r=e.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}e.isRenderingInProgress?function n(o){e.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):t(o)})}(this):t(this)}}class Yw extends Ww{constructor(e,t,n){super(e,t,n),this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}})}render(){super.render();const e=this._editingView,t=this.t;e.change(n=>{const o=e.document.getRoot(this.name);n.setAttribute("aria-label",t("Rich Text Editor, %0",this.name),o)})}}var su=_(8847),Kw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(su.Z,Kw),su.Z.locals;var au=_(4879),Qw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(au.Z,Qw),au.Z.locals;class Zw extends ge{constructor(e){super(e),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1),this.set("hasError",!1),this.set("ariaDescribedById"),this.focusTracker=new Bt,this.bind("isFocused").to(this.focusTracker),this.set("isEmpty",!0),this.set("inputMode","text");const t=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck","ck-input",t.if("isFocused","ck-input_focused"),t.if("isEmpty","ck-input-text_empty"),t.if("hasError","ck-error")],id:t.to("id"),placeholder:t.to("placeholder"),readonly:t.to("isReadOnly"),inputmode:t.to("inputMode"),"aria-invalid":t.if("hasError",!0),"aria-describedby":t.to("ariaDescribedById")},on:{input:t.to((...n)=>{this.fire("input",...n),this._updateIsEmpty()}),change:t.to(this._updateIsEmpty.bind(this))}})}render(){super.render(),this.focusTracker.add(this.element),this._setDomElementValue(this.value),this._updateIsEmpty(),this.on("change:value",(e,t,n)=>{this._setDomElementValue(n),this._updateIsEmpty()})}destroy(){super.destroy(),this.focusTracker.destroy()}select(){this.element.select()}focus(){this.element.focus()}_updateIsEmpty(){this.isEmpty=!this.element.value}_setDomElementValue(e){this.element.value=e||e===0?e:""}}class Jw extends Zw{constructor(e){super(e),this.extendTemplate({attributes:{type:"text",class:["ck-input-text"]}})}}var lu=_(2577),Xw={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(lu.Z,Xw),lu.Z.locals;class ds extends ge{constructor(e,t){super(e);const n=`ck-labeled-field-view-${M()}`,o=`ck-labeled-field-view-status-${M()}`;this.fieldView=t(this,n,o),this.set("label"),this.set("isEnabled",!0),this.set("isEmpty",!0),this.set("isFocused",!1),this.set("errorText",null),this.set("infoText",null),this.set("class"),this.set("placeholder"),this.labelView=this._createLabelView(n),this.statusView=this._createStatusView(o),this.bind("_statusText").to(this,"errorText",this,"infoText",(s,a)=>s||a);const r=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view",r.to("class"),r.if("isEnabled","ck-disabled",s=>!s),r.if("isEmpty","ck-labeled-field-view_empty"),r.if("isFocused","ck-labeled-field-view_focused"),r.if("placeholder","ck-labeled-field-view_placeholder"),r.if("errorText","ck-error")]},children:[{tag:"div",attributes:{class:["ck","ck-labeled-field-view__input-wrapper"]},children:[this.fieldView,this.labelView]},this.statusView]})}_createLabelView(e){const t=new ru(this.locale);return t.for=e,t.bind("text").to(this,"label"),t}_createStatusView(e){const t=new ge(this.locale),n=this.bindTemplate;return t.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-field-view__status",n.if("errorText","ck-labeled-field-view__status_error"),n.if("_statusText","ck-hidden",o=>!o)],id:e,role:n.if("errorText","alert")},children:[{text:n.to("_statusText")}]}),t}focus(){this.fieldView.focus()}}function us(i,e,t){const n=new Jw(i.locale);return n.set({id:e,ariaDescribedById:t}),n.bind("isReadOnly").to(i,"isEnabled",o=>!o),n.bind("hasError").to(i,"errorText",o=>!!o),n.on("input",()=>{i.errorText=null}),i.bind("isEmpty","isFocused","placeholder").to(n),n}class hs extends Lo{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=`show:${e.type}`+(e.namespace?`:${e.namespace}`:"");this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class gs{constructor(e,t){t&&To(this,t),e&&this.set(e)}}function ps(i){return e=>e+i}ie(gs,Le);var cu=_(8793),e_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(cu.Z,e_),cu.Z.locals;const du=ps("px"),uu=qe.document.body;class yt extends ge{constructor(e){super(e);const t=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("class"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",t.to("position",n=>`ck-balloon-panel_${n}`),t.if("isVisible","ck-balloon-panel_visible"),t.if("withArrow","ck-balloon-panel_with-arrow"),t.to("class")],style:{top:t.to("top",du),left:t.to("left",du)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(e){this.show();const t=yt.defaultPositions,n=Object.assign({},{element:this.element,positions:[t.southArrowNorth,t.southArrowNorthMiddleWest,t.southArrowNorthMiddleEast,t.southArrowNorthWest,t.southArrowNorthEast,t.northArrowSouth,t.northArrowSouthMiddleWest,t.northArrowSouthMiddleEast,t.northArrowSouthWest,t.northArrowSouthEast,t.viewportStickyNorth],limiter:uu,fitInViewport:!0},e),o=yt._getOptimalPosition(n),r=parseInt(o.left),s=parseInt(o.top),{name:a,config:l={}}=o,{withArrow:c=!0}=l;Object.assign(this,{top:s,left:r,position:a,withArrow:c})}pin(e){this.unpin(),this._pinWhenIsVisibleCallback=()=>{this.isVisible?this._startPinning(e):this._stopPinning()},this._startPinning(e),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(e){this.attachTo(e);const t=ms(e.target),n=e.limiter?ms(e.limiter):uu;this.listenTo(qe.document,"scroll",(o,r)=>{const s=r.target,a=t&&s.contains(t),l=n&&s.contains(n);!a&&!l&&t&&n||this.attachTo(e)},{useCapture:!0}),this.listenTo(qe.window,"resize",()=>{this.attachTo(e)})}_stopPinning(){this.stopListening(qe.document,"scroll"),this.stopListening(qe.window,"resize")}}function ms(i){return vn(i)?i:xi(i)?i.commonAncestorContainer:typeof i=="function"?ms(i()):null}yt.arrowHorizontalOffset=25,yt.arrowVerticalOffset=10,yt.stickyVerticalOffset=20,yt._getOptimalPosition=Gd,yt.defaultPositions=function({horizontalOffset:i=yt.arrowHorizontalOffset,verticalOffset:e=yt.arrowVerticalOffset,stickyVerticalOffset:t=yt.stickyVerticalOffset,config:n}={}){return{northWestArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left-i,name:"arrow_sw",...n&&{config:n}}),northWestArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northWestArrowSouth:(s,a)=>({top:o(s,a),left:s.left-a.width/2,name:"arrow_s",...n&&{config:n}}),northWestArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northWestArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left-a.width+i,name:"arrow_se",...n&&{config:n}}),northArrowSouthWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-i,name:"arrow_sw",...n&&{config:n}}),northArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northArrowSouth:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width/2,name:"arrow_s",...n&&{config:n}}),northArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northArrowSouthEast:(s,a)=>({top:o(s,a),left:s.left+s.width/2-a.width+i,name:"arrow_se",...n&&{config:n}}),northEastArrowSouthWest:(s,a)=>({top:o(s,a),left:s.right-i,name:"arrow_sw",...n&&{config:n}}),northEastArrowSouthMiddleWest:(s,a)=>({top:o(s,a),left:s.right-.25*a.width-i,name:"arrow_smw",...n&&{config:n}}),northEastArrowSouth:(s,a)=>({top:o(s,a),left:s.right-a.width/2,name:"arrow_s",...n&&{config:n}}),northEastArrowSouthMiddleEast:(s,a)=>({top:o(s,a),left:s.right-.75*a.width+i,name:"arrow_sme",...n&&{config:n}}),northEastArrowSouthEast:(s,a)=>({top:o(s,a),left:s.right-a.width+i,name:"arrow_se",...n&&{config:n}}),southWestArrowNorthWest:(s,a)=>({top:r(s),left:s.left-i,name:"arrow_nw",...n&&{config:n}}),southWestArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southWestArrowNorth:(s,a)=>({top:r(s),left:s.left-a.width/2,name:"arrow_n",...n&&{config:n}}),southWestArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southWestArrowNorthEast:(s,a)=>({top:r(s),left:s.left-a.width+i,name:"arrow_ne",...n&&{config:n}}),southArrowNorthWest:(s,a)=>({top:r(s),left:s.left+s.width/2-i,name:"arrow_nw",...n&&{config:n}}),southArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.left+s.width/2-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southArrowNorth:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width/2,name:"arrow_n",...n&&{config:n}}),southArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.left+s.width/2-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southArrowNorthEast:(s,a)=>({top:r(s),left:s.left+s.width/2-a.width+i,name:"arrow_ne",...n&&{config:n}}),southEastArrowNorthWest:(s,a)=>({top:r(s),left:s.right-i,name:"arrow_nw",...n&&{config:n}}),southEastArrowNorthMiddleWest:(s,a)=>({top:r(s),left:s.right-.25*a.width-i,name:"arrow_nmw",...n&&{config:n}}),southEastArrowNorth:(s,a)=>({top:r(s),left:s.right-a.width/2,name:"arrow_n",...n&&{config:n}}),southEastArrowNorthMiddleEast:(s,a)=>({top:r(s),left:s.right-.75*a.width+i,name:"arrow_nme",...n&&{config:n}}),southEastArrowNorthEast:(s,a)=>({top:r(s),left:s.right-a.width+i,name:"arrow_ne",...n&&{config:n}}),viewportStickyNorth:(s,a,l)=>s.getIntersection(l)?{top:l.top+t,left:s.left+s.width/2-a.width/2,name:"arrowless",config:{withArrow:!1,...n}}:null};function o(s,a){return s.top-a.height-e}function r(s){return s.bottom+e}}();var hu=_(4650),t_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(hu.Z,t_),hu.Z.locals;var gu=_(7676),n_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(gu.Z,n_),gu.Z.locals;const Ni=ps("px");class Bi extends q{static get pluginName(){return"ContextualBalloon"}constructor(e){super(e),this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.view=new yt(e.locale),e.ui.view.body.add(this.view),e.ui.focusTracker.add(this.view.element),this._viewToStack=new Map,this._idToStack=new Map,this.set("_numberOfStacks",0),this.set("_singleViewMode",!1),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}destroy(){super.destroy(),this.view.destroy(),this._rotatorView.destroy(),this._fakePanelsView.destroy()}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this.hasView(e.view))throw new m("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new m("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new m("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new o_(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[r,o])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new i_(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class o_ extends ge{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new Bt,this.buttonPrevView=this._createButtonView(t("Previous"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'),this.buttonNextView=this._createButtonView(t("Next"),'<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new He(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class i_ extends ge{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Ni),left:n.to("left",Ni),width:n.to("width",Ni),height:n.to("height",Ni)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new ge;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:o}=new Ee(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:o})}}}var pu=_(5868),r_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(pu.Z,r_),pu.Z.locals;const Qo=ps("px");class s_ extends ge{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new Et({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Qo(this._panelRect.height):null)}}}).render(),this._contentPanel=new Et({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Qo(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_hasViewportTopOffset",n=>n?Qo(this.viewportTopOffset):null),bottom:t.to("_isStickyToTheLimiter",n=>n?Qo(this.limiterBottomOffset):null),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(qe.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const e=this._panelRect=this._contentPanel.getBoundingClientRect();let t;this.limiterElement?(t=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&t.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<t.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=t.bottom<e.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Qo(-qe.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}var mu=_(9695),a_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(mu.Z,a_),mu.Z.locals;var fu=_(4717),l_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(fu.Z,l_),fu.Z.locals;const Pi=new WeakMap;function ku(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,s=e.document;Pi.has(s)||(Pi.set(s,new Map),s.registerPostFixer(a=>bu(s,a))),Pi.get(s).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(a=>bu(s,a))}function c_(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function bu(i,e){const t=Pi.get(i),n=[];let o=!1;for(const[r,s]of t)s.isDirectHost&&(n.push(r),wu(e,r,s)&&(o=!0));for(const[r,s]of t){if(s.isDirectHost)continue;const a=d_(r);a&&(n.includes(a)||(s.hostElement=a,wu(e,r,s)&&(o=!0)))}return o}function wu(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||e.childCount==1)&&function(a,l){if(!a.isAttached()||Array.from(a.getChildren()).some(h=>!h.is("uiElement")))return!1;if(l)return!0;const d=a.document;if(!d.isFocused)return!0;const u=d.selection.anchor;return u&&u.parent!==a}(r,t.keepOnFocus)?function(a,l){return!l.hasClass("ck-placeholder")&&(a.addClass("ck-placeholder",l),!0)}(i,r)&&(s=!0):c_(i,r)&&(s=!0),s}function d_(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}const fs=new Map;function we(i,e,t){let n=fs.get(i);n||(n=new Map,fs.set(i,n)),n.set(e,t)}function u_(i){return[i]}function _u(i,e,t={}){const n=function(o,r){const s=fs.get(o);return s&&s.has(r)?s.get(r):u_}(i.constructor,e.constructor);try{return n(i=i.clone(),e,t)}catch(o){throw o}}function h_(i,e,t){i=i.slice(),e=e.slice();const n=new g_(t.document,t.useRelations,t.forceWeakRemove);n.setOriginalOperations(i),n.setOriginalOperations(e);const o=n.originalOperations;if(i.length==0||e.length==0)return{operationsA:i,operationsB:e,originalOperations:o};const r=new WeakMap;for(const l of i)r.set(l,0);const s={nextBaseVersionA:i[i.length-1].baseVersion+1,nextBaseVersionB:e[e.length-1].baseVersion+1,originalOperationsACount:i.length,originalOperationsBCount:e.length};let a=0;for(;a<i.length;){const l=i[a],c=r.get(l);if(c==e.length){a++;continue}const d=e[c],u=_u(l,d,n.getContext(l,d,!0)),h=_u(d,l,n.getContext(d,l,!1));n.updateRelation(l,d),n.setOriginalOperations(u,l),n.setOriginalOperations(h,d);for(const p of u)r.set(p,c+h.length);i.splice(a,1,...u),e.splice(c,1,...h)}if(t.padWithNoOps){const l=i.length-s.originalOperationsACount,c=e.length-s.originalOperationsBCount;vu(i,c-l),vu(e,l-c)}return Au(i,s.nextBaseVersionB),Au(e,s.nextBaseVersionA),{operationsA:i,operationsB:e,originalOperations:o}}class g_{constructor(e,t,n=!1){this.originalOperations=new Map,this._history=e.history,this._useRelations=t,this._forceWeakRemove=!!n,this._relations=new Map}setOriginalOperations(e,t=null){const n=t?this.originalOperations.get(t):null;for(const o of e)this.originalOperations.set(o,n||o)}updateRelation(e,t){switch(e.constructor){case Me:switch(t.constructor){case Ke:e.targetPosition.isEqual(t.sourcePosition)||t.movedRange.containsPosition(e.targetPosition)?this._setRelation(e,t,"insertAtSource"):e.targetPosition.isEqual(t.deletionPosition)?this._setRelation(e,t,"insertBetween"):e.targetPosition.isAfter(t.sourcePosition)&&this._setRelation(e,t,"moveTargetAfter");break;case Me:e.targetPosition.isEqual(t.sourcePosition)||e.targetPosition.isBefore(t.sourcePosition)?this._setRelation(e,t,"insertBefore"):this._setRelation(e,t,"insertAfter")}break;case Re:switch(t.constructor){case Ke:e.splitPosition.isBefore(t.sourcePosition)&&this._setRelation(e,t,"splitBefore");break;case Me:if(e.splitPosition.isEqual(t.sourcePosition)||e.splitPosition.isBefore(t.sourcePosition))this._setRelation(e,t,"splitBefore");else{const n=R._createFromPositionAndShift(t.sourcePosition,t.howMany);if(e.splitPosition.hasSameParentAs(t.sourcePosition)&&n.containsPosition(e.splitPosition)){const o=n.end.offset-e.splitPosition.offset,r=e.splitPosition.offset-n.start.offset;this._setRelation(e,t,{howMany:o,offset:r})}}}break;case Ke:switch(t.constructor){case Ke:e.targetPosition.isEqual(t.sourcePosition)||this._setRelation(e,t,"mergeTargetNotMoved"),e.sourcePosition.isEqual(t.targetPosition)&&this._setRelation(e,t,"mergeSourceNotMoved"),e.sourcePosition.isEqual(t.sourcePosition)&&this._setRelation(e,t,"mergeSameElement");break;case Re:e.sourcePosition.isEqual(t.splitPosition)&&this._setRelation(e,t,"splitAtSource")}break;case vt:{const n=e.newRange;if(!n)return;switch(t.constructor){case Me:{const o=R._createFromPositionAndShift(t.sourcePosition,t.howMany),r=o.containsPosition(n.start)||o.start.isEqual(n.start),s=o.containsPosition(n.end)||o.end.isEqual(n.end);!r&&!s||o.containsRange(n)||this._setRelation(e,t,{side:r?"left":"right",path:r?n.start.path.slice():n.end.path.slice()});break}case Ke:{const o=n.start.isEqual(t.targetPosition),r=n.start.isEqual(t.deletionPosition),s=n.end.isEqual(t.deletionPosition),a=n.end.isEqual(t.sourcePosition);(o||r||s||a)&&this._setRelation(e,t,{wasInLeftElement:o,wasStartBeforeMergedElement:r,wasEndBeforeMergedElement:s,wasInRightElement:a});break}}break}}}getContext(e,t,n){return{aIsStrong:n,aWasUndone:this._wasUndone(e),bWasUndone:this._wasUndone(t),abRelation:this._useRelations?this._getRelation(e,t):null,baRelation:this._useRelations?this._getRelation(t,e):null,forceWeakRemove:this._forceWeakRemove}}_wasUndone(e){const t=this.originalOperations.get(e);return t.wasUndone||this._history.isUndoneOperation(t)}_getRelation(e,t){const n=this.originalOperations.get(t),o=this._history.getUndoneOperation(n);if(!o)return null;const r=this.originalOperations.get(e),s=this._relations.get(r);return s&&s.get(o)||null}_setRelation(e,t,n){const o=this.originalOperations.get(e),r=this.originalOperations.get(t);let s=this._relations.get(o);s||(s=new Map,this._relations.set(o,s)),s.set(r,n)}}function Au(i,e){for(const t of i)t.baseVersion=e++}function vu(i,e){for(let t=0;t<e;t++)i.push(new at(0))}function Cu(i,e,t){const n=i.nodes.getNode(0).getAttribute(e);if(n==t)return null;const o=new R(i.position,i.position.getShiftedBy(i.howMany));return new Ye(o,e,n,t,0)}function yu(i,e){return i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)===null}function wo(i,e){const t=[];for(let n=0;n<i.length;n++){const o=i[n],r=new Me(o.start,o.end.offset-o.start.offset,e,0);t.push(r);for(let s=n+1;s<i.length;s++)i[s]=i[s]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)}return t}we(Ye,Ye,(i,e,t)=>{if(i.key===e.key&&i.range.start.hasSameParentAs(e.range.start)){const n=i.range.getDifference(e.range).map(r=>new Ye(r,i.key,i.oldValue,i.newValue,0)),o=i.range.getIntersection(e.range);return o&&t.aIsStrong&&n.push(new Ye(o,e.key,e.newValue,i.newValue,0)),n.length==0?[new at(0)]:n}return[i]}),we(Ye,st,(i,e)=>{if(i.range.start.hasSameParentAs(e.position)&&i.range.containsPosition(e.position)){const t=i.range._getTransformedByInsertion(e.position,e.howMany,!e.shouldReceiveAttributes).map(n=>new Ye(n,i.key,i.oldValue,i.newValue,i.baseVersion));if(e.shouldReceiveAttributes){const n=Cu(e,i.key,i.oldValue);n&&t.unshift(n)}return t}return i.range=i.range._getTransformedByInsertion(e.position,e.howMany,!1)[0],[i]}),we(Ye,Ke,(i,e)=>{const t=[];i.range.start.hasSameParentAs(e.deletionPosition)&&(i.range.containsPosition(e.deletionPosition)||i.range.start.isEqual(e.deletionPosition))&&t.push(R._createFromPositionAndShift(e.graveyardPosition,1));const n=i.range._getTransformedByMergeOperation(e);return n.isCollapsed||t.push(n),t.map(o=>new Ye(o,i.key,i.oldValue,i.newValue,i.baseVersion))}),we(Ye,Me,(i,e)=>function(n,o){const r=R._createFromPositionAndShift(o.sourcePosition,o.howMany);let s=null,a=[];r.containsRange(n,!0)?s=n:n.start.hasSameParentAs(r.start)?(a=n.getDifference(r),s=n.getIntersection(r)):a=[n];const l=[];for(let c of a){c=c._getTransformedByDeletion(o.sourcePosition,o.howMany);const d=o.getMovedRangeStart(),u=c.start.hasSameParentAs(d);c=c._getTransformedByInsertion(d,o.howMany,u),l.push(...c)}return s&&l.push(s._getTransformedByMove(o.sourcePosition,o.targetPosition,o.howMany,!1)[0]),l}(i.range,e).map(n=>new Ye(n,i.key,i.oldValue,i.newValue,i.baseVersion))),we(Ye,Re,(i,e)=>{if(i.range.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.range.end.offset++,[i];if(i.range.start.hasSameParentAs(e.splitPosition)&&i.range.containsPosition(e.splitPosition)){const t=i.clone();return t.range=new R(e.moveTargetPosition.clone(),i.range.end._getCombined(e.splitPosition,e.moveTargetPosition)),i.range.end=e.splitPosition.clone(),i.range.end.stickiness="toPrevious",[i,t]}return i.range=i.range._getTransformedBySplitOperation(e),[i]}),we(st,Ye,(i,e)=>{const t=[i];if(i.shouldReceiveAttributes&&i.position.hasSameParentAs(e.range.start)&&e.range.containsPosition(i.position)){const n=Cu(i,e.key,e.newValue);n&&t.push(n)}return t}),we(st,st,(i,e,t)=>(i.position.isEqual(e.position)&&t.aIsStrong||(i.position=i.position._getTransformedByInsertOperation(e)),[i])),we(st,Me,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),we(st,Re,(i,e)=>(i.position=i.position._getTransformedBySplitOperation(e),[i])),we(st,Ke,(i,e)=>(i.position=i.position._getTransformedByMergeOperation(e),[i])),we(vt,st,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByInsertOperation(e)[0]),i.newRange&&(i.newRange=i.newRange._getTransformedByInsertOperation(e)[0]),[i])),we(vt,vt,(i,e,t)=>{if(i.name==e.name){if(!t.aIsStrong)return[new at(0)];i.oldRange=e.newRange?e.newRange.clone():null}return[i]}),we(vt,Ke,(i,e)=>(i.oldRange&&(i.oldRange=i.oldRange._getTransformedByMergeOperation(e)),i.newRange&&(i.newRange=i.newRange._getTransformedByMergeOperation(e)),[i])),we(vt,Me,(i,e,t)=>{if(i.oldRange&&(i.oldRange=R._createFromRanges(i.oldRange._getTransformedByMoveOperation(e))),i.newRange){if(t.abRelation){const n=R._createFromRanges(i.newRange._getTransformedByMoveOperation(e));if(t.abRelation.side=="left"&&e.targetPosition.isEqual(i.newRange.start))return i.newRange.start.path=t.abRelation.path,i.newRange.end=n.end,[i];if(t.abRelation.side=="right"&&e.targetPosition.isEqual(i.newRange.end))return i.newRange.start=n.start,i.newRange.end.path=t.abRelation.path,[i]}i.newRange=R._createFromRanges(i.newRange._getTransformedByMoveOperation(e))}return[i]}),we(vt,Re,(i,e,t)=>{if(i.oldRange&&(i.oldRange=i.oldRange._getTransformedBySplitOperation(e)),i.newRange){if(t.abRelation){const n=i.newRange._getTransformedBySplitOperation(e);return i.newRange.start.isEqual(e.splitPosition)&&t.abRelation.wasStartBeforeMergedElement?i.newRange.start=H._createAt(e.insertionPosition):i.newRange.start.isEqual(e.splitPosition)&&!t.abRelation.wasInLeftElement&&(i.newRange.start=H._createAt(e.moveTargetPosition)),i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasInRightElement?i.newRange.end=H._createAt(e.moveTargetPosition):i.newRange.end.isEqual(e.splitPosition)&&t.abRelation.wasEndBeforeMergedElement?i.newRange.end=H._createAt(e.insertionPosition):i.newRange.end=n.end,[i]}i.newRange=i.newRange._getTransformedBySplitOperation(e)}return[i]}),we(Ke,st,(i,e)=>(i.sourcePosition.hasSameParentAs(e.position)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByInsertOperation(e),i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e),[i])),we(Ke,Ke,(i,e,t)=>{if(i.sourcePosition.isEqual(e.sourcePosition)&&i.targetPosition.isEqual(e.targetPosition)){if(t.bWasUndone){const n=e.graveyardPosition.path.slice();return n.push(0),i.sourcePosition=new H(e.graveyardPosition.root,n),i.howMany=0,[i]}return[new at(0)]}if(i.sourcePosition.isEqual(e.sourcePosition)&&!i.targetPosition.isEqual(e.targetPosition)&&!t.bWasUndone&&t.abRelation!="splitAtSource"){const n=i.targetPosition.root.rootName=="$graveyard",o=e.targetPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const s=e.targetPosition._getTransformedByMergeOperation(e),a=i.targetPosition._getTransformedByMergeOperation(e);return[new Me(s,i.howMany,a,0)]}return[new at(0)]}return i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMergeOperation(e),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),i.graveyardPosition.isEqual(e.graveyardPosition)&&t.aIsStrong||(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),we(Ke,Me,(i,e,t)=>{const n=R._createFromPositionAndShift(e.sourcePosition,e.howMany);return e.type=="remove"&&!t.bWasUndone&&!t.forceWeakRemove&&i.deletionPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.sourcePosition)?[new at(0)]:(i.sourcePosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.sourcePosition.hasSameParentAs(e.sourcePosition)&&(i.howMany-=e.howMany),i.sourcePosition=i.sourcePosition._getTransformedByMoveOperation(e),i.targetPosition=i.targetPosition._getTransformedByMoveOperation(e),i.graveyardPosition.isEqual(e.targetPosition)||(i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)),[i])}),we(Ke,Re,(i,e,t)=>{if(e.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByDeletion(e.graveyardPosition,1),i.deletionPosition.isEqual(e.graveyardPosition)&&(i.howMany=e.howMany)),i.targetPosition.isEqual(e.splitPosition)){const n=e.howMany!=0,o=e.graveyardPosition&&i.deletionPosition.isEqual(e.graveyardPosition);if(n||o||t.abRelation=="mergeTargetNotMoved")return i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),[i]}if(i.sourcePosition.isEqual(e.splitPosition)){if(t.abRelation=="mergeSourceNotMoved")return i.howMany=0,i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i];if(t.abRelation=="mergeSameElement"||i.sourcePosition.offset>0)return i.sourcePosition=e.moveTargetPosition.clone(),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}return i.sourcePosition.hasSameParentAs(e.splitPosition)&&(i.howMany=e.splitPosition.offset),i.sourcePosition=i.sourcePosition._getTransformedBySplitOperation(e),i.targetPosition=i.targetPosition._getTransformedBySplitOperation(e),[i]}),we(Me,st,(i,e)=>{const t=R._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByInsertOperation(e,!1)[0];return i.sourcePosition=t.start,i.howMany=t.end.offset-t.start.offset,i.targetPosition.isEqual(e.position)||(i.targetPosition=i.targetPosition._getTransformedByInsertOperation(e)),[i]}),we(Me,Me,(i,e,t)=>{const n=R._createFromPositionAndShift(i.sourcePosition,i.howMany),o=R._createFromPositionAndShift(e.sourcePosition,e.howMany);let r,s=t.aIsStrong,a=!t.aIsStrong;if(t.abRelation=="insertBefore"||t.baRelation=="insertAfter"?a=!0:t.abRelation!="insertAfter"&&t.baRelation!="insertBefore"||(a=!1),r=i.targetPosition.isEqual(e.targetPosition)&&a?i.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany):i.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),yu(i,e)&&yu(e,i))return[e.getReversed()];if(n.containsPosition(e.targetPosition)&&n.containsRange(o,!0))return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),wo([n],r);if(o.containsPosition(i.targetPosition)&&o.containsRange(n,!0))return n.start=n.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),n.end=n.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),wo([n],r);const l=ft(i.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if(l=="prefix"||l=="extension")return n.start=n.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),n.end=n.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany),wo([n],r);i.type!="remove"||e.type=="remove"||t.aWasUndone||t.forceWeakRemove?i.type=="remove"||e.type!="remove"||t.bWasUndone||t.forceWeakRemove||(s=!1):s=!0;const c=[],d=n.getDifference(o);for(const h of d){h.start=h.start._getTransformedByDeletion(e.sourcePosition,e.howMany),h.end=h.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const p=ft(h.start.getParentPath(),e.getMovedRangeStart().getParentPath())=="same",k=h._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,p);c.push(...k)}const u=n.getIntersection(o);return u!==null&&s&&(u.start=u.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),u.end=u.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),c.length===0?c.push(u):c.length==1?o.start.isBefore(n.start)||o.start.isEqual(n.start)?c.unshift(u):c.push(u):c.splice(1,0,u)),c.length===0?[new at(i.baseVersion)]:wo(c,r)}),we(Me,Re,(i,e,t)=>{let n=i.targetPosition.clone();i.targetPosition.isEqual(e.insertionPosition)&&e.graveyardPosition&&t.abRelation!="moveTargetAfter"||(n=i.targetPosition._getTransformedBySplitOperation(e));const o=R._createFromPositionAndShift(i.sourcePosition,i.howMany);if(o.end.isEqual(e.insertionPosition))return e.graveyardPosition||i.howMany++,i.targetPosition=n,[i];if(o.start.hasSameParentAs(e.splitPosition)&&o.containsPosition(e.splitPosition)){let s=new R(e.splitPosition,o.end);return s=s._getTransformedBySplitOperation(e),wo([new R(o.start,e.splitPosition),s],n)}i.targetPosition.isEqual(e.splitPosition)&&t.abRelation=="insertAtSource"&&(n=e.moveTargetPosition),i.targetPosition.isEqual(e.insertionPosition)&&t.abRelation=="insertBetween"&&(n=i.targetPosition);const r=[o._getTransformedBySplitOperation(e)];if(e.graveyardPosition){const s=o.start.isEqual(e.graveyardPosition)||o.containsPosition(e.graveyardPosition);i.howMany>1&&s&&!t.aWasUndone&&r.push(R._createFromPositionAndShift(e.insertionPosition,1))}return wo(r,n)}),we(Me,Ke,(i,e,t)=>{const n=R._createFromPositionAndShift(i.sourcePosition,i.howMany);if(e.deletionPosition.hasSameParentAs(i.sourcePosition)&&n.containsPosition(e.sourcePosition)){if(i.type!="remove"||t.forceWeakRemove){if(i.howMany==1)return t.bWasUndone?(i.sourcePosition=e.graveyardPosition.clone(),i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]):[new at(0)]}else if(!t.aWasUndone){const r=[];let s=e.graveyardPosition.clone(),a=e.targetPosition._getTransformedByMergeOperation(e);i.howMany>1&&(r.push(new Me(i.sourcePosition,i.howMany-1,i.targetPosition,0)),s=s._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1),a=a._getTransformedByMove(i.sourcePosition,i.targetPosition,i.howMany-1));const l=e.deletionPosition._getCombined(i.sourcePosition,i.targetPosition),c=new Me(s,1,l,0),d=c.getMovedRangeStart().path.slice();d.push(0);const u=new H(c.targetPosition.root,d);a=a._getTransformedByMove(s,l,1);const h=new Me(a,e.howMany,u,0);return r.push(c),r.push(h),r}}const o=R._createFromPositionAndShift(i.sourcePosition,i.howMany)._getTransformedByMergeOperation(e);return i.sourcePosition=o.start,i.howMany=o.end.offset-o.start.offset,i.targetPosition=i.targetPosition._getTransformedByMergeOperation(e),[i]}),we(Ct,st,(i,e)=>(i.position=i.position._getTransformedByInsertOperation(e),[i])),we(Ct,Ke,(i,e)=>i.position.isEqual(e.deletionPosition)?(i.position=e.graveyardPosition.clone(),i.position.stickiness="toNext",[i]):(i.position=i.position._getTransformedByMergeOperation(e),[i])),we(Ct,Me,(i,e)=>(i.position=i.position._getTransformedByMoveOperation(e),[i])),we(Ct,Ct,(i,e,t)=>{if(i.position.isEqual(e.position)){if(!t.aIsStrong)return[new at(0)];i.oldName=e.newName}return[i]}),we(Ct,Re,(i,e)=>{if(ft(i.position.path,e.splitPosition.getParentPath())=="same"&&!e.graveyardPosition){const t=new Ct(i.position.getShiftedBy(1),i.oldName,i.newName,0);return[i,t]}return i.position=i.position._getTransformedBySplitOperation(e),[i]}),we(kn,kn,(i,e,t)=>{if(i.root===e.root&&i.key===e.key){if(!t.aIsStrong||i.newValue===e.newValue)return[new at(0)];i.oldValue=e.newValue}return[i]}),we(Re,st,(i,e)=>(i.splitPosition.hasSameParentAs(e.position)&&i.splitPosition.offset<e.position.offset&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByInsertOperation(e),i.insertionPosition=i.insertionPosition._getTransformedByInsertOperation(e),[i])),we(Re,Ke,(i,e,t)=>{if(!i.graveyardPosition&&!t.bWasUndone&&i.splitPosition.hasSameParentAs(e.sourcePosition)){const n=e.graveyardPosition.path.slice();n.push(0);const o=new H(e.graveyardPosition.root,n),r=Re.getInsertionPosition(new H(e.graveyardPosition.root,n)),s=new Re(o,0,r,null,0);return i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=Re.getInsertionPosition(i.splitPosition),i.graveyardPosition=s.insertionPosition.clone(),i.graveyardPosition.stickiness="toNext",[s,i]}return i.splitPosition.hasSameParentAs(e.deletionPosition)&&!i.splitPosition.isAfter(e.deletionPosition)&&i.howMany--,i.splitPosition.hasSameParentAs(e.targetPosition)&&(i.howMany+=e.howMany),i.splitPosition=i.splitPosition._getTransformedByMergeOperation(e),i.insertionPosition=Re.getInsertionPosition(i.splitPosition),i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedByMergeOperation(e)),[i]}),we(Re,Me,(i,e,t)=>{const n=R._createFromPositionAndShift(e.sourcePosition,e.howMany);if(i.graveyardPosition){const r=n.start.isEqual(i.graveyardPosition)||n.containsPosition(i.graveyardPosition);if(!t.bWasUndone&&r){const s=i.splitPosition._getTransformedByMoveOperation(e),a=i.graveyardPosition._getTransformedByMoveOperation(e),l=a.path.slice();l.push(0);const c=new H(a.root,l);return[new Me(s,i.howMany,c,0)]}i.graveyardPosition=i.graveyardPosition._getTransformedByMoveOperation(e)}const o=i.splitPosition.isEqual(e.targetPosition);if(o&&(t.baRelation=="insertAtSource"||t.abRelation=="splitBefore"))return i.howMany+=e.howMany,i.splitPosition=i.splitPosition._getTransformedByDeletion(e.sourcePosition,e.howMany),i.insertionPosition=Re.getInsertionPosition(i.splitPosition),[i];if(o&&t.abRelation&&t.abRelation.howMany){const{howMany:r,offset:s}=t.abRelation;return i.howMany+=r,i.splitPosition=i.splitPosition.getShiftedBy(s),[i]}if(i.splitPosition.hasSameParentAs(e.sourcePosition)&&n.containsPosition(i.splitPosition)){const r=e.howMany-(i.splitPosition.offset-e.sourcePosition.offset);return i.howMany-=r,i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany),i.splitPosition=e.sourcePosition.clone(),i.insertionPosition=Re.getInsertionPosition(i.splitPosition),[i]}return e.sourcePosition.isEqual(e.targetPosition)||(i.splitPosition.hasSameParentAs(e.sourcePosition)&&i.splitPosition.offset<=e.sourcePosition.offset&&(i.howMany-=e.howMany),i.splitPosition.hasSameParentAs(e.targetPosition)&&i.splitPosition.offset<e.targetPosition.offset&&(i.howMany+=e.howMany)),i.splitPosition.stickiness="toNone",i.splitPosition=i.splitPosition._getTransformedByMoveOperation(e),i.splitPosition.stickiness="toNext",i.graveyardPosition?i.insertionPosition=i.insertionPosition._getTransformedByMoveOperation(e):i.insertionPosition=Re.getInsertionPosition(i.splitPosition),[i]}),we(Re,Re,(i,e,t)=>{if(i.splitPosition.isEqual(e.splitPosition)){if(!i.graveyardPosition&&!e.graveyardPosition)return[new at(0)];if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition))return[new at(0)];if(t.abRelation=="splitBefore")return i.howMany=0,i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e),[i]}if(i.graveyardPosition&&e.graveyardPosition&&i.graveyardPosition.isEqual(e.graveyardPosition)){const n=i.splitPosition.root.rootName=="$graveyard",o=e.splitPosition.root.rootName=="$graveyard";if(o&&!n||!(n&&!o)&&t.aIsStrong){const s=[];return e.howMany&&s.push(new Me(e.moveTargetPosition,e.howMany,e.splitPosition,0)),i.howMany&&s.push(new Me(i.splitPosition,i.howMany,i.moveTargetPosition,0)),s}return[new at(0)]}if(i.graveyardPosition&&(i.graveyardPosition=i.graveyardPosition._getTransformedBySplitOperation(e)),i.splitPosition.isEqual(e.insertionPosition)&&t.abRelation=="splitBefore")return i.howMany++,[i];if(e.splitPosition.isEqual(i.insertionPosition)&&t.baRelation=="splitBefore"){const n=e.insertionPosition.path.slice();n.push(0);const o=new H(e.insertionPosition.root,n);return[i,new Me(i.insertionPosition,1,o,0)]}return i.splitPosition.hasSameParentAs(e.splitPosition)&&i.splitPosition.offset<e.splitPosition.offset&&(i.howMany-=e.howMany),i.splitPosition=i.splitPosition._getTransformedBySplitOperation(e),i.insertionPosition=Re.getInsertionPosition(i.splitPosition),[i]});class p_ extends yn{constructor(e){super(e),this.domEventType="click"}onDomEvent(e){this.fire(e.type,e)}}class zi extends yn{constructor(e){super(e),this.domEventType=["mousedown","mouseup","mouseover","mouseout"]}onDomEvent(e){this.fire(e.type,e)}}class _o{constructor(e){this.document=e}createDocumentFragment(e){return new Fn(this.document,e)}createElement(e,t,n){return new Nt(this.document,e,t,n)}createText(e){return new Be(this.document,e)}clone(e,t=!1){return e._clone(t)}appendChild(e,t){return t._appendChild(e)}insertChild(e,t,n){return n._insertChild(e,t)}removeChildren(e,t,n){return n._removeChildren(e,t)}remove(e){const t=e.parent;return t?this.removeChildren(t.getChildIndex(e),1,t):[]}replace(e,t){const n=e.parent;if(n){const o=n.getChildIndex(e);return this.removeChildren(o,1,n),this.insertChild(o,t,n),!0}return!1}unwrapElement(e){const t=e.parent;if(t){const n=t.getChildIndex(e);this.remove(e),this.insertChild(n,e.getChildren(),t)}}rename(e,t){const n=new Nt(this.document,e,t.getAttributes(),t.getChildren());return this.replace(t,n)?n:null}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){xt(e)&&n===void 0&&(n=t),n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}createPositionAt(e,t){return Y._createAt(e,t)}createPositionAfter(e){return Y._createAfter(e)}createPositionBefore(e){return Y._createBefore(e)}createRange(e,t){return new le(e,t)}createRangeOn(e){return le._createOn(e)}createRangeIn(e){return le._createIn(e)}createSelection(e,t,n){return new Gt(e,t,n)}}class m_ extends vd{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Qd(e.config.get("toolbar")),this._elementReplacer=new kb}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,o=t.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),this.focusTracker.add(a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,n=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:o})=>o),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),function({origin:o,originKeystrokeHandler:r,originFocusTracker:s,toolbar:a,beforeFocus:l,afterBlur:c}){s.add(a.element),r.set("Alt+F10",(d,u)=>{s.isFocused&&!a.focusTracker.isFocused&&(l&&l(),a.focus(),u())}),a.keystrokes.set("Esc",(d,u)=>{a.focusTracker.isFocused&&(o.focus(),c&&c(),u())})}({origin:n,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),o=e.sourceElement,r=e.config.get("placeholder")||o&&o.tagName.toLowerCase()==="textarea"&&o.getAttribute("placeholder");r&&ku({view:t,element:n,text:r,isDirectHost:!1,keepOnFocus:!0})}}var xu=_(3143),f_={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};re()(xu.Z,f_),xu.Z.locals;class k_ extends Gw{constructor(e,t,n={}){super(e),this.stickyPanel=new s_(e),this.toolbar=new cs(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),this.editable=new Yw(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class ks extends Ad{constructor(e,t={}){if(!vn(e)&&t.initialData!==void 0)throw new m("editor-create-initial-data",null);super(t),this.config.get("initialData")===void 0&&this.config.set("initialData",function(r){return vn(r)?(s=r,s instanceof HTMLTextAreaElement?s.value:s.innerHTML):r;var s}(e)),vn(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=new k_(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n});this.ui=new m_(this,o),function(r){if(!_t(r.updateSourceElement))throw new m("attachtoform-missing-elementapi-interface",r);const s=r.sourceElement;if(s&&s.tagName.toLowerCase()==="textarea"&&s.form){let a;const l=s.form,c=()=>r.updateSourceElement();_t(l.submit)&&(a=l.submit,l.submit=()=>{c(),a.apply(l)}),l.addEventListener("submit",c),r.on("destroy",()=>{l.removeEventListener("submit",c),a&&(l.submit=a)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const o=new this(e,t);n(o.initPlugins().then(()=>o.ui.init(vn(e)?e:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}ie(ks,fw),ie(ks,kw);class b_{constructor(e){this.files=function(t){const n=Array.from(t.files||[]),o=Array.from(t.items||[]);return n.length?n:o.filter(r=>r.kind==="file").map(r=>r.getAsFile())}(e),this._native=e}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}class bs extends yn{constructor(e){super(e);const t=this.document;function n(o){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,l=new b(t,o);t.fire(l,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target}),l.stop.called&&s.stopPropagation()}}this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"],this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t={dataTransfer:new b_(e.clipboardData?e.clipboardData:e.dataTransfer)};e.type!="drop"&&e.type!="dragover"||(t.dropRange=function(n,o){const r=o.target.ownerDocument,s=o.clientX,a=o.clientY;let l;return r.caretRangeFromPoint&&r.caretRangeFromPoint(s,a)?l=r.caretRangeFromPoint(s,a):o.rangeParent&&(l=r.createRange(),l.setStart(o.rangeParent,o.rangeOffset),l.collapse(!0)),l?n.domConverter.domRangeToView(l):null}(this.view,e)),this.fire(e.type,e,t)}}const Du=["figcaption","li"];function Eu(i){let e="";if(i.is("$text")||i.is("$textProxy"))e=i.data;else if(i.is("element","img")&&i.hasAttribute("alt"))e=i.getAttribute("alt");else if(i.is("element","br"))e=`
`;else{let t=null;for(const n of i.getChildren()){const o=Eu(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(Du.includes(t.name)||Du.includes(n.name)?e+=`
`:e+=`

`)+"https://vue-select.org/api/props.html#getoptionlabel"):I}},getOptionKey:{type:Function,default:function(I){if(ee()(I)!=="object")return I;try{return I.hasOwnProperty("id")?I.id:en(I)}catch(W){return console.warn(`[vue-select warn]: Could not stringify this option to generate unique key. Please provide'getOptionKey' prop to return a unique key for each option.
https://vue-select.org/api/props.html#getoptionkey`,I,W)}}},onTab:{type:Function,default:function(){this.selectOnTab&&!this.isComposing&&this.typeAheadSelect()}},taggable:{type:Boolean,default:!1},tabindex:{type:Number,default:null},pushTags:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0},filterBy:{type:Function,default:function(I,W,G){return(W||"").toLocaleLowerCase().indexOf(G.toLocaleLowerCase())>-1}},filter:{type:Function,default:function(I,W){var G=this;return I.filter(function(ue){var he=G.getOptionLabel(ue);return typeof he=="number"&&(he=he.toString()),G.filterBy(ue,he,W)})}},createOption:{type:Function,default:function(I){return ee()(this.optionList[0])==="object"?ae()({},this.label,I):I}},resetOnOptionsChange:{default:!1,validator:function(I){return["function","boolean"].includes(ee()(I))}},clearSearchOnBlur:{type:Function,default:function(I){var W=I.clearSearchOnSelect,G=I.multiple;return W&&!G}},noDrop:{type:Boolean,default:!1},inputId:{type:String},dir:{type:String,default:"auto"},selectOnTab:{type:Boolean,default:!1},selectOnKeyCodes:{type:Array,default:function(){return[13]}},searchInputQuerySelector:{type:String,default:"[type=search]"},mapKeydown:{type:Function,default:function(I,W){return I}},appendToBody:{type:Boolean,default:!1},calculatePosition:{type:Function,default:function(I,W,G){var ue=G.width,he=G.top,Z=G.left;I.style.top=he,I.style.left=Z,I.style.width=ue}},dropdownShouldOpen:{type:Function,default:function(I){var W=I.noDrop,G=I.open,ue=I.mutableLoading;return!W&&G&&!ue}},uid:{type:[String,Number],default:function(){return Tn()}}},data:function(){return{search:"",open:!1,isComposing:!1,pushedTags:[],_value:[],deselectButtons:[]}},computed:{isReducingValues:function(){return this.$props.reduce!==this.$options.props.reduce.default},isTrackingValues:function(){return this.modelValue===void 0||this.isReducingValues},selectedValue:function(){var I=this.modelValue;return this.isTrackingValues&&(I=this.$data._value),I!=null?[].concat(I):[]},optionList:function(){return this.options.concat(this.pushTags?this.pushedTags:[])},searchEl:function(){return this.$slots.search?this.$refs.selectedOptions.querySelector(this.searchInputQuerySelector):this.$refs.search},scope:function(){var I=this,W={search:this.search,loading:this.loading,searching:this.searching,filteredOptions:this.filteredOptions};return{search:{attributes:nt({disabled:this.disabled,placeholder:this.searchPlaceholder,tabindex:this.tabindex,readonly:!this.searchable,id:this.inputId,"aria-autocomplete":"list","aria-labelledby":"vs".concat(this.uid,"__combobox"),"aria-controls":"vs".concat(this.uid,"__listbox"),ref:"search",type:"search",autocomplete:this.autocomplete,value:this.search},this.dropdownOpen&&this.filteredOptions[this.typeAheadPointer]?{"aria-activedescendant":"vs".concat(this.uid,"__option-").concat(this.typeAheadPointer)}:{}),events:{compositionstart:function(){return I.isComposing=!0},compositionend:function(){return I.isComposing=!1},keydown:this.onSearchKeyDown,blur:this.onSearchBlur,focus:this.onSearchFocus,input:function(G){return I.search=G.target.value}}},spinner:{loading:this.mutableLoading},noOptions:{search:this.search,loading:this.mutableLoading,searching:this.searching},openIndicator:{attributes:{ref:"openIndicator",role:"presentation",class:"vs__open-indicator"}},listHeader:W,listFooter:W,header:nt({},W,{deselect:this.deselect}),footer:nt({},W,{deselect:this.deselect})}},childComponents:function(){return nt({},Xt,{},this.components)},stateClasses:function(){return{"vs--open":this.dropdownOpen,"vs--single":!this.multiple,"vs--multiple":this.multiple,"vs--searching":this.searching&&!this.noDrop,"vs--searchable":this.searchable&&!this.noDrop,"vs--unsearchable":!this.searchable,"vs--loading":this.mutableLoading,"vs--disabled":this.disabled}},searching:function(){return!!this.search},dropdownOpen:function(){return this.dropdownShouldOpen(this)},searchPlaceholder:function(){return this.isValueEmpty&&this.placeholder?this.placeholder:void 0},filteredOptions:function(){var I=[].concat(this.optionList);if(!this.filterable&&!this.taggable)return I;var W=this.search.length?this.filter(I,this.search,this):I;if(this.taggable&&this.search.length){var G=this.createOption(this.search);this.optionExists(G)||W.unshift(G)}return W},isValueEmpty:function(){return this.selectedValue.length===0},showClearButton:function(){return!this.multiple&&this.clearable&&!this.open&&!this.isValueEmpty}},watch:{options:function(I,W){var G=this;!this.taggable&&(typeof G.resetOnOptionsChange=="function"?G.resetOnOptionsChange(I,W,G.selectedValue):G.resetOnOptionsChange)&&this.clearSelection(),this.modelValue&&this.isTrackingValues&&this.setInternalValueFromOptions(this.modelValue)},modelValue:{immediate:!0,handler:function(I){this.isTrackingValues&&this.setInternalValueFromOptions(I)}},multiple:function(){this.clearSelection()},open:function(I){this.$emit(I?"open":"close")}},created:function(){this.mutableLoading=this.loading},methods:{setInternalValueFromOptions:function(I){var W=this;Array.isArray(I)?this.$data._value=I.map(function(G){return W.findOptionFromReducedValue(G)}):this.$data._value=this.findOptionFromReducedValue(I)},select:function(I){this.$emit("option:selecting",I),this.isOptionSelected(I)?this.deselectFromDropdown&&(this.clearable||this.multiple&&this.selectedValue.length>1)&&this.deselect(I):(this.taggable&&!this.optionExists(I)&&(this.$emit("option:created",I),this.pushTag(I)),this.multiple&&(I=this.selectedValue.concat(I)),this.updateValue(I),this.$emit("option:selected",I)),this.onAfterSelect(I)},deselect:function(I){var W=this;this.$emit("option:deselecting",I),this.updateValue(this.selectedValue.filter(function(G){return!W.optionComparator(G,I)})),this.$emit("option:deselected",I)},clearSelection:function(){this.updateValue(this.multiple?[]:null)},onAfterSelect:function(I){this.closeOnSelect&&(this.open=!this.open,this.searchEl.blur()),this.clearSearchOnSelect&&(this.search="")},updateValue:function(I){var W=this;this.modelValue===void 0&&(this.$data._value=I),I!==null&&(I=Array.isArray(I)?I.map(function(G){return W.reduce(G)}):this.reduce(I)),this.$emit("update:modelValue",I)},toggleDropdown:function(I){var W=I.target!==this.searchEl;W&&I.preventDefault();var G=[].concat(wt()(this.deselectButtons||[]),wt()([this.$refs.clearButton]));this.searchEl===void 0||G.filter(Boolean).some(function(ue){return ue.contains(I.target)||ue===I.target})?I.preventDefault():this.open&&W?this.searchEl.blur():this.disabled||(this.open=!0,this.searchEl.focus())},isOptionSelected:function(I){var W=this;return this.selectedValue.some(function(G){return W.optionComparator(G,I)})},isOptionDeselectable:function(I){return this.isOptionSelected(I)&&this.deselectFromDropdown},optionComparator:function(I,W){return this.getOptionKey(I)===this.getOptionKey(W)},findOptionFromReducedValue:function(I){var W=this,G=[].concat(wt()(this.options),wt()(this.pushedTags)).filter(function(ue){return JSON.stringify(W.reduce(ue))===JSON.stringify(I)});return G.length===1?G[0]:G.find(function(ue){return W.optionComparator(ue,W.$data._value)})||I},closeSearchOptions:function(){this.open=!1,this.$emit("search:blur")},maybeDeleteValue:function(){if(!this.searchEl.value.length&&this.selectedValue&&this.selectedValue.length&&this.clearable){var I=null;this.multiple&&(I=wt()(this.selectedValue.slice(0,this.selectedValue.length-1))),this.updateValue(I)}},optionExists:function(I){var W=this;return this.optionList.some(function(G){return W.optionComparator(G,I)})},normalizeOptionForSlot:function(I){return ee()(I)==="object"?I:ae()({},this.label,I)},pushTag:function(I){this.pushedTags.push(I)},onEscape:function(){this.search.length?this.search="":this.searchEl.blur()},onSearchBlur:function(){if(!this.mousedown||this.searching){var I=this.clearSearchOnSelect,W=this.multiple;return this.clearSearchOnBlur({clearSearchOnSelect:I,multiple:W})&&(this.search=""),void this.closeSearchOptions()}this.mousedown=!1,this.search.length!==0||this.options.length!==0||this.closeSearchOptions()},onSearchFocus:function(){this.open=!0,this.$emit("search:focus")},onMousedown:function(){this.mousedown=!0},onMouseUp:function(){this.mousedown=!1},onSearchKeyDown:function(I){var W=this,G=function(Z){return Z.preventDefault(),!W.isComposing&&W.typeAheadSelect()},ue={8:function(Z){return W.maybeDeleteValue()},9:function(Z){return W.onTab()},27:function(Z){return W.onEscape()},38:function(Z){return Z.preventDefault(),W.typeAheadUp()},40:function(Z){return Z.preventDefault(),W.typeAheadDown()}};this.selectOnKeyCodes.forEach(function(Z){return ue[Z]=G});var he=this.mapKeydown(ue,this);if(typeof he[I.keyCode]=="function")return he[I.keyCode](I)}}},tn=(0,tt.Z)(_t,[["render",function(I,W,G,ue,he,Z){var mt=(0,b.resolveDirective)("append-to-body");return(0,b.openBlock)(),(0,b.createElementBlock)("div",{dir:G.dir,class:(0,b.normalizeClass)(["v-select",Z.stateClasses])},[(0,b.renderSlot)(I.$slots,"header",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.header))),(0,b.createElementVNode)("div",{id:"vs".concat(G.uid,"__combobox"),ref:"toggle",class:"vs__dropdown-toggle",role:"combobox","aria-expanded":Z.dropdownOpen.toString(),"aria-owns":"vs".concat(G.uid,"__listbox"),"aria-label":"Search for option",onMousedown:W[1]||(W[1]=function(De){return Z.toggleDropdown(De)})},[(0,b.createElementVNode)("div",D,[((0,b.openBlock)(!0),(0,b.createElementBlock)(b.Fragment,null,(0,b.renderList)(Z.selectedValue,function(De,ct){return(0,b.renderSlot)(I.$slots,"selected-option-container",{option:Z.normalizeOptionForSlot(De),deselect:Z.deselect,multiple:G.multiple,disabled:G.disabled},function(){return[((0,b.openBlock)(),(0,b.createElementBlock)("span",{key:G.getOptionKey(De),class:"vs__selected"},[(0,b.renderSlot)(I.$slots,"selected-option",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.normalizeOptionForSlot(De))),function(){return[(0,b.createTextVNode)((0,b.toDisplayString)(G.getOptionLabel(De)),1)]}),G.multiple?((0,b.openBlock)(),(0,b.createElementBlock)("button",{key:0,ref:function(ot){return he.deselectButtons[ct]=ot},disabled:G.disabled,type:"button",class:"vs__deselect",title:"Deselect ".concat(G.getOptionLabel(De)),"aria-label":"Deselect ".concat(G.getOptionLabel(De)),onClick:function(ot){return Z.deselect(De)}},[((0,b.openBlock)(),(0,b.createBlock)((0,b.resolveDynamicComponent)(Z.childComponents.Deselect)))],8,B)):(0,b.createCommentVNode)("",!0)]))]})}),256)),(0,b.renderSlot)(I.$slots,"search",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.search)),function(){return[(0,b.createElementVNode)("input",(0,b.mergeProps)({class:"vs__search"},Z.scope.search.attributes,(0,b.toHandlers)(Z.scope.search.events)),null,16)]})],512),(0,b.createElementVNode)("div",m,[(0,b.withDirectives)((0,b.createElementVNode)("button",{ref:"clearButton",disabled:G.disabled,type:"button",class:"vs__clear",title:"Clear Selected","aria-label":"Clear Selected",onClick:W[0]||(W[0]=function(){return Z.clearSelection&&Z.clearSelection.apply(Z,arguments)})},[((0,b.openBlock)(),(0,b.createBlock)((0,b.resolveDynamicComponent)(Z.childComponents.Deselect)))],8,T),[[b.vShow,Z.showClearButton]]),(0,b.renderSlot)(I.$slots,"open-indicator",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.openIndicator)),function(){return[G.noDrop?(0,b.createCommentVNode)("",!0):((0,b.openBlock)(),(0,b.createBlock)((0,b.resolveDynamicComponent)(Z.childComponents.OpenIndicator),(0,b.normalizeProps)((0,b.mergeProps)({key:0},Z.scope.openIndicator.attributes)),null,16))]}),(0,b.renderSlot)(I.$slots,"spinner",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.spinner)),function(){return[(0,b.withDirectives)((0,b.createElementVNode)("div",N,"Loading...",512),[[b.vShow,I.mutableLoading]])]})],512)],40,M),(0,b.createVNode)(b.Transition,{name:G.transition},{default:(0,b.withCtx)(function(){return[Z.dropdownOpen?(0,b.withDirectives)(((0,b.openBlock)(),(0,b.createElementBlock)("ul",{id:"vs".concat(G.uid,"__listbox"),ref:"dropdownMenu",key:"vs".concat(G.uid,"__listbox"),class:"vs__dropdown-menu",role:"listbox",tabindex:"-1",onMousedown:W[2]||(W[2]=(0,b.withModifiers)(function(){return Z.onMousedown&&Z.onMousedown.apply(Z,arguments)},["prevent"])),onMouseup:W[3]||(W[3]=function(){return Z.onMouseUp&&Z.onMouseUp.apply(Z,arguments)})},[(0,b.renderSlot)(I.$slots,"list-header",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.listHeader))),((0,b.openBlock)(!0),(0,b.createElementBlock)(b.Fragment,null,(0,b.renderList)(Z.filteredOptions,function(De,ct){return(0,b.openBlock)(),(0,b.createElementBlock)("li",{id:"vs".concat(G.uid,"__option-").concat(ct),key:G.getOptionKey(De),role:"option",class:(0,b.normalizeClass)(["vs__dropdown-option",{"vs__dropdown-option--deselect":Z.isOptionDeselectable(De)&&ct===I.typeAheadPointer,"vs__dropdown-option--selected":Z.isOptionSelected(De),"vs__dropdown-option--highlight":ct===I.typeAheadPointer,"vs__dropdown-option--disabled":!G.selectable(De)}]),"aria-selected":ct===I.typeAheadPointer||null,onMouseover:function(ot){return G.selectable(De)?I.typeAheadPointer=ct:null},onClick:(0,b.withModifiers)(function(ot){return G.selectable(De)?Z.select(De):null},["prevent","stop"])},[(0,b.renderSlot)(I.$slots,"option",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.normalizeOptionForSlot(De))),function(){return[(0,b.createTextVNode)((0,b.toDisplayString)(G.getOptionLabel(De)),1)]})],42,O)}),128)),Z.filteredOptions.length===0?((0,b.openBlock)(),(0,b.createElementBlock)("li",ce,[(0,b.renderSlot)(I.$slots,"no-options",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.noOptions)),function(){return[de]})])):(0,b.createCommentVNode)("",!0),(0,b.renderSlot)(I.$slots,"list-footer",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.listFooter)))],40,te)),[[mt]]):((0,b.openBlock)(),(0,b.createElementBlock)("ul",{key:1,id:"vs".concat(G.uid,"__listbox"),role:"listbox",style:{display:"none",visibility:"hidden"}},null,8,xe))]}),_:3},8,["name"]),(0,b.renderSlot)(I.$slots,"footer",(0,b.normalizeProps)((0,b.guardReactiveProps)(Z.scope.footer)))],10,f)}]]),Nn=tn,Jn={ajax:ve,pointer:Ae,pointerScroll:ke},Bn=tn})(),x})()})})(_m);var ID=sm(_m.exports);const TD={components:{PsLine:IC,PsIcon:lm,PsTable:Mx,PsLabel:da,PsLabelTitle:dm,PsLabelTitle2:NC,PsLabelTitle3:OC,PsLabelTitle4:BC,PsLabelHeader6:CC,PsLabelHeader5:RC,PsLabelHeader4:jC,PsLabelHeader3:FC,PsLabelHeader2:PC,PsLabelHeader1:zC,PsLabelCaption:VC,PsLabelCaption2:HC,PsLabelCaption3:yC,PsInput:am,PsInputWithRightIcon:UC,PsInputWithLeftIcon:LC,PsTextarea:$C,PsButton:ua,PsBadge:qC,PsAlert:GC,PsRating:WC,PsRatingSelected:Px,PsCheckbox:YC,PsCheckboxValue:KC,PsRadio:QC,PsRadioValue:ZC,PsSelect:km,PsDropdown:la,PsDropdownSelect:ca,PsModal:cm,PsModelView:Hx,GoogleMap:JC,Circle:XC,Skeletor:Rx,PsCard:ey,PsDatePicker:pD,Datepicker:Xp,BarChart:ay,PieChart:ly,BubbleChart:cy,DoughnutChart:dy,LineChart:uy,ScatterChart:kD,PolarAreaChart:_D,RadarChart:hy,BaseProgress:xD,PsEditor:MD,vSelect:ID},layout:xC,data(){return{input:"",textarea:"",inputLeftIcon:"",inputRightIcon:"",selectedMultiple:[],options:[{code:"ca",country:"Canada"},{code:"fr",country:"French"},{code:"en",country:"English"}],selectedTableData:[]}},methods:{edit(g){alert(g.id+" "+g.name)}},setup(){const g=Qn({apple:!1,orange:!1,grape:!1}),A=Qn([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Grape"}]),y=Qn([]),S=Qn([{id:1,name:"Apple"},{id:2,name:"Orange"},{id:3,name:"Grape"}]),_=Qn({}),L=je(),x=Qn([{id:1,name:"$1,000"},{id:2,name:"$2,000"},{id:3,name:"$3,000"},{id:4,name:"$4,000"},{id:5,name:"$5,000"}]),b=je("5"),f=je(3);function M(he){f.value=he}const D=je(!0),B=je(null);function m(){}function T(){const he=jy();he.show({container:D.value?null:B.value,canCancel:!0,onCancel:m}),setTimeout(()=>{he.hide()},2e3)}const N=je("0"),te=he=>{he=Number(he);const Z=Math.floor(he/(3600*24)),mt=Math.floor(he%(3600*24)/3600),De=Math.floor(he%3600/60),ct=Math.floor(he%60),ot=Z>0?Z+(Z==1?" day, ":" days, "):"",X=mt>0?mt+(mt==1?" hour, ":" hours, "):"",qt=De>0?De+(De==1?" minute, ":" minutes, "):"",Pn=ct>0?ct+(ct==1?" second":" seconds"):"";return ot+X+qt+Pn},O=setInterval(()=>{const he=new Date,mt=new Date(2023,1,22,19,40,1).getTime()-he.getTime();if(mt<0){clearInterval(O);return}N.value=te(mt/1e3)},1e3);Qp(()=>{clearInterval(O)});const ce=je(),de=je(),xe=je({position:{lat:38.735086,lng:-9.141247},draggable:!1});function gt(he){ni.log(he.latLng.lat()),ni.log(he.latLng.lng())}const wt={editable:!0,center:xe.value.position,radius:300,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,draggable:!1,crossOnDrag:!1},fe={key:"000",center:xe.value.position,zoom:15},ee=new window.SpeechSynthesisUtterance,ne=window.speechSynthesis.getVoices();ee.voice=ne[17];function ae(){ee.text="Hello! Welcome from PanaceaSoft. Your bidding is going to finish. 5, 4, 3, 2, 1. bidding completed. Thanks for using our service. Ended.",window.speechSynthesis.speak(ee)}const ke=[{text:"#",width:"w-1/5",align:"text-left"},{text:"Category Name",width:"w-2/5",align:"text-center",theme:"uppercase"},{text:"Action",width:"w-2/5",align:"text-center",theme:"uppercase"}],Ae=[{id:1,category_name:"apple"},{id:2,category_name:"orange"},{id:3,category_name:"grape"},{id:4,category_name:"banana"},{id:5,category_name:"pineapple"}],ve=je();aa(()=>{const he=new Date,Z=new Date(new Date().setDate(he.getDate()+7));ve.value=[he,Z]});const Ce=je(),oe={labels:["January","February","March"],datasets:[{label:"Monthly Dataset",backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)"],borderWidth:1,color:"#666",data:[30,20,10]}]},tt={responsive:!0},Ut={labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},ze={responsive:!0,maintainAspectRatio:!1},pt={datasets:[{label:"Data One",backgroundColor:"#f87979",data:[{x:20,y:25,r:5},{x:40,y:10,r:10},{x:30,y:22,r:30}]},{label:"Data Two",backgroundColor:"#7C8CF8",data:[{x:10,y:30,r:15},{x:20,y:20,r:10},{x:15,y:8,r:30}]}]},An={responsive:!0,maintainAspectRatio:!1},Mn={labels:["VueJs","EmberJs","ReactJs","AngularJs"],datasets:[{backgroundColor:["#41B883","#E46651","#00D8FF","#DD1B16"],data:[40,20,80,10]}]},Xt={responsive:!0,maintainAspectRatio:!1},$t={labels:["January","February","March","April","May","June","July"],datasets:[{label:"Data One",backgroundColor:"#f87979",data:[40,39,10,40,39,80,40]}]},en={responsive:!0,maintainAspectRatio:!1},In={datasets:[{label:"Scatter Dataset 1",fill:!1,borderColor:"#f87979",backgroundColor:"#f87979",data:[{x:-2,y:4},{x:-1,y:1},{x:0,y:0},{x:1,y:1},{x:2,y:4}]},{label:"Scatter Dataset 2",fill:!1,borderColor:"#7acbf9",backgroundColor:"#7acbf9",data:[{x:-2,y:-4},{x:-1,y:-1},{x:0,y:1},{x:1,y:-1},{x:2,y:-4}]}]},Tn={responsive:!0,maintainAspectRatio:!1},un={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},nt={responsive:!0,maintainAspectRatio:!1},_t={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",backgroundColor:"rgba(179,181,198,0.2)",borderColor:"rgba(179,181,198,1)",pointBackgroundColor:"rgba(179,181,198,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(179,181,198,1)",data:[65,59,90,81,56,55,40]},{label:"My Second dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",pointBackgroundColor:"rgba(255,99,132,1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(255,99,132,1)",data:[28,48,40,19,96,27,100]}]},tn={responsive:!0,maintainAspectRatio:!1};return Qn({description:""}),{checkedFruits:g,checkedDataList:A,checkedSelectedList:y,radioDataList:S,radioSelectedList:_,radioFruits:L,selectDataList:x,selectedValue:b,selectedIndex:f,onItemClick:M,loadMore:T,countDown:N,psmodal:ce,psMapModal:de,mcenter:xe,circleCenter:wt,map:fe,updateCoordinates:gt,speak:ae,headers:ke,data:Ae,date:ve,time:Ce,chartData:oe,chartOptions:tt,pieChartData:Ut,pieChartOptions:ze,bubbleChartData:pt,bubbleChartOptions:An,doughnutChartData:Mn,doughnutChartOptions:Xt,lineChartData:$t,lineChartOptions:en,scatterChartData:In,scatterChartOptions:Tn,polarChartData:un,polarChartOptions:nt,radarChartData:_t,radarChartOptions:tn,rows:[{id:"1",name:"Mg  Mg",age:"18",gender:1,status:"1",created_date:"2022-05-21"},{id:"2",name:"Aung Aung",age:"20",gender:1,status:"1",created_date:"2022-05-22"},{id:"3",name:"Hla Hla",age:"30",gender:2,status:"0",created_date:"2022-05-21"},{id:"4",name:"Mya Mya",age:"10",gender:2,status:"1",created_date:"2022-05-20"},{id:"5",name:"Tun Tun",age:"15",gender:2,status:"0",created_date:"2022-05-21"},{id:"6",name:"Tun Tun",age:"15",gender:1,status:"0",created_date:"2022-05-22"},{id:"7",name:"Tun Tun",age:"15",gender:2,status:"0",created_date:"2022-05-23"},{id:"8",name:"Tun Tun",age:"15",gender:1,status:"0",created_date:"2022-05-24"},{id:"9",name:"Tun Tun",age:"15",gender:2,status:"0",created_date:"2022-05-25"},{id:"10",name:"Tun Tun",age:"15",gender:2,status:"1",created_date:"2022-05-26"}],columns:[{label:"Name",field:"name",width:"w-1/3",align:"text-left",sortable:!0,type:"String"},{label:"Age",field:"age",width:"w-auto",align:"text-right",sortable:!0,type:"Integer"},{label:"Gender",field:"gender",width:"w-auto",align:"text-center",type:"Integer"},{label:"Status",field:"status",width:"w-auto",align:"text-center",type:"Integer"},{label:"Added Date",field:"created_date",width:"w-auto",align:"text-center",sortable:!0,type:"Date"},{label:"Action",field:"action",width:"w-auto",align:"text-center",type:"Action"}],selectedDataList:[{id:0,name:"Choose..."},{id:1,name:"male"},{id:2,name:"female"}],globalSearchFields:["name","age"],searchOptions:[{search_type:"dropdown",value:"",dropdown_items:[{id:"",name:"Choose..."},{id:"1",name:"male"},{id:"2",name:"female"}],field:"gender"},{search_type:"dropdown",value:"",dropdown_items:[{id:"",name:"Choose..."},{id:"1",name:"active"},{id:"0",name:"unactive"}],field:"status"},{search_type:"dateRange",value:"",field:"created_date"}]}}},ND={class:"hidden sm:flex justify-end"},BD={key:0},PD={key:0},zD={key:1},LD={key:1},OD={key:0},RD={key:1},jD={key:2},FD=["onClick"],VD=j("Select"),HD=j("Default Button"),UD=j(" Default Button "),$D=j(" Default Button "),qD=j(" Default Button "),GD=j(" Disabled Button "),WD=$("br",null,null,-1),YD=j(" Success Button "),KD=j(" Warning Button "),QD=j(" Info Button "),ZD=j(" Error Button "),JD=j(" Dark Button "),XD=j(" Light Button "),e2=j(" Badge "),t2=j(" Default Badge "),n2=j(" Success Badge "),o2=j(" Warning Badge "),i2=j(" Info Badge "),r2=j(" Error Badge "),s2=j(" Dark Badge "),a2=j(" Light Badge "),l2=j("Alert"),c2=$("span",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nisi rerum qui quibusdam minus adipisci expedita ad ipsam tempore officia. Eligendi possimus neque omnis molestias, enim incidunt earum error natus!",-1),d2=$("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"w-4 h-4 me-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[$("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})],-1),u2=$("span",null,"This is info alert",-1),h2=$("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"w-4 h-4 me-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[$("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"})],-1),g2=$("span",null,"This is success alert",-1),p2=$("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"times-circle",class:"w-4 h-4 me-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[$("path",{fill:"currentColor",d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"})],-1),m2=$("span",null,"This is error alert",-1),f2=$("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"w-4 h-4 me-2 fill-current",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},[$("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"})],-1),k2=$("span",null,"This is warning alert",-1),b2=$("span",null,"This is dark alert",-1),w2=$("span",null,"This is light alert",-1),_2={class:"flex flex-col"},A2={class:"flex items-center mt-4"},v2={class:"flex items-center mt-4",id:"r1"},C2={class:"flex items-center mt-4",id:"r1"},y2=$("br",null,null,-1),x2={class:"flex"},D2={class:"rounded-md bg-white shadow-xs w-96",role:"menu","aria-orientation":"vertical","aria-labelledby":"options-menu"},E2={class:"pt-2"},S2=["onClick"],M2=$("img",{width:"300px",height:"200px",alt:"Placeholder",src:"https://s.svgbox.net/hero-outline.svg?ic=currency-rupee",class:"h-6 w-6"},null,-1),I2=$("div",{class:"border-t border-gray-100"},null,-1),T2={class:"flex mt-8"},N2={class:"w-96 my-8"},B2={class:"flex items-start"},P2={class:"w-52 rounded-md ms-4 mt-1"},z2=$("div",null,"Card",-1),L2={class:"p-3 bg-primary-000 shadow-sm"},O2=j("Card title"),R2={class:"p-3"},j2=j("Card body"),F2={class:"p-3 bg-gray-200 flex gap-3"},V2=j("Save"),H2=j("Cancel"),U2=j(" Datetime Picker UI "),$2=j(" Chart UI "),q2=j(" Progresss Bar UI ");function G2(g,A,y,S,_,L){const x=K("ps-model-view"),b=K("ps-label-title"),f=K("Circle"),M=K("GoogleMap"),D=K("ps-button"),B=K("ps-modal"),m=K("ps-badge"),T=K("ps-table"),N=K("ps-line"),te=K("ps-label-header-1"),O=K("ps-label-header-2"),ce=K("ps-label-header-3"),de=K("ps-label-header-4"),xe=K("ps-label-header-5"),gt=K("ps-label-header-6"),wt=K("ps-label-title-2"),fe=K("ps-label-title-3"),ee=K("ps-label-title-4"),ne=K("ps-label"),ae=K("ps-label-caption"),ke=K("ps-label-caption-2"),Ae=K("ps-label-caption-3"),ve=K("v-select"),Ce=K("ps-input"),oe=K("ps-icon"),tt=K("ps-input-with-right-icon"),Ut=K("ps-input-with-left-icon"),ze=K("ps-alert"),pt=K("ps-textarea"),An=K("ps-rating"),Mn=K("ps-rating-selected"),Xt=K("ps-checkbox-value"),$t=K("ps-checkbox"),en=K("ps-radio-value"),In=K("ps-radio"),Tn=K("ps-select"),un=K("ps-dropdown-select"),nt=K("ps-dropdown"),_t=K("Skeletor"),tn=K("ps-card"),Nn=K("ps-custom-card"),Jn=K("ps-date-picker"),Bn=K("datepicker"),I=K("bar-chart"),W=K("pie-chart"),G=K("bubble-chart"),ue=K("doughnut-chart"),he=K("line-chart"),Z=K("scatter-chart"),mt=K("polar-area-chart"),De=K("radar-chart"),ct=K("base-progress"),ot=K("ps-layout");return U(),be(ot,null,{default:z(()=>[C(x,{ref:"psmodal"},null,512),C(B,{ref:"psMapModal",isClickOut:!1},{title:z(()=>[C(b,null,{default:z(()=>[j(V(g.$t("ui_collection__select_location")),1)]),_:1})]),body:z(()=>[C(M,{id:"map",ref:"mapRef","api-key":S.map.key,center:S.map.center,zoom:S.map.zoom,style:{width:"100%",height:"500px"}},{default:z(()=>[C(f,{id:"circle",options:S.circleCenter,ref:"cirRef"},null,8,["options"])]),_:1},8,["api-key","center","zoom"])]),footer:z(()=>[$("div",ND,[C(D,{onClick:A[0]||(A[0]=X=>S.psMapModal.toggle(!1))},{default:z(()=>[j(V(g.$t("ui_collection__ok")),1)]),_:1})])]),_:1},512),$("div",null,[j(V(_.selectedTableData)+" ",1),C(T,{selectedTableData:_.selectedTableData,"onUpdate:selectedTableData":A[1]||(A[1]=X=>_.selectedTableData=X),rows:S.rows,columns:S.columns,checkable:"true",searchable:"true",showLineNumber:"true",globalSearchFields:S.globalSearchFields,searchOptions:S.searchOptions},{tableSearch:z(()=>[]),tableRow:z(X=>[X.field=="gender"?(U(),Q("span",BD,[X.row[X.field]=="1"?(U(),Q("span",PD,"Male")):(U(),Q("span",zD,"Female"))])):Qe("",!0),X.field=="status"?(U(),Q("span",LD,[X.row[X.field]=="1"?(U(),Q("span",OD,[C(m,{class:"m-2",theme:"badge-success"},{default:z(()=>[j(V(g.$t("btn_active")),1)]),_:1})])):(U(),Q("span",RD,[C(m,{class:"m-2",theme:"badge-warning"},{default:z(()=>[j(V(g.$t("btn_inactive")),1)]),_:1})]))])):Qe("",!0),X.field=="action"?(U(),Q("span",jD,[$("button",{onClick:qt=>L.edit(X.row)},"Edit",8,FD)])):Qe("",!0)]),_:1},8,["selectedTableData","rows","columns","globalSearchFields","searchOptions"]),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__label_ui")),1)]),_:1}),C(te,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h1")),1)]),_:1}),C(O,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h2")),1)]),_:1}),C(ce,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h3")),1)]),_:1}),C(de,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h4")),1)]),_:1}),C(xe,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h5")),1)]),_:1}),C(gt,null,{default:z(()=>[j(V(g.$t("ui_collection__label_h6")),1)]),_:1}),C(b,null,{default:z(()=>[j(V(g.$t("ui_collection__label_title1")),1)]),_:1}),C(wt,null,{default:z(()=>[j(V(g.$t("ui_collection__label_title2")),1)]),_:1}),C(fe,null,{default:z(()=>[j(V(g.$t("ui_collection__label_title3")),1)]),_:1}),C(ee,null,{default:z(()=>[j(V(g.$t("ui_collection__label_title4")),1)]),_:1}),C(ne,null,{default:z(()=>[j(V(g.$t("ui_collection__body")),1)]),_:1}),C(ae,null,{default:z(()=>[j(V(g.$t("ui_collection__label_caption")),1)]),_:1}),C(ke,null,{default:z(()=>[j(V(g.$t("ui_collection__label_caption2")),1)]),_:1}),C(Ae,null,{default:z(()=>[j(V(g.$t("ui_collection__label_caption3")),1)]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[VD]),_:1}),C(ve,{dir:"$store.state.dir",multiple:"",modelValue:_.selectedMultiple,"onUpdate:modelValue":A[2]||(A[2]=X=>_.selectedMultiple=X),options:_.options,reduce:X=>X.code,label:"country",placeholder:"Choose...",class:"multiple-select input-primary rounded"},null,8,["modelValue","options","reduce"]),j(" "+V(_.selectedMultiple)+" ",1),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__input_ui")),1)]),_:1}),C(Ce,{value:_.input,"onUpdate:value":A[3]||(A[3]=X=>_.input=X),type:"text",placeholder:"Placeholder ..."},null,8,["value"]),j(" "+V(_.input)+" ",1),C(tt,{value:_.inputRightIcon,"onUpdate:value":A[4]||(A[4]=X=>_.inputRightIcon=X),placeholder:g.$t("core.ui_collection__what_are_you_looking_for")},{icon:z(()=>[C(oe,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"]),j(" "+V(_.inputRightIcon)+" ",1),C(Ut,{value:_.inputLeftIcon,"onUpdate:value":A[5]||(A[5]=X=>_.inputLeftIcon=X),placeholder:g.$t("core.ui_collection__what_are_you_looking_for")},{icon:z(()=>[C(oe,{name:"search",class:"cursor-pointer"})]),_:1},8,["value","placeholder"]),j(" "+V(_.inputLeftIcon)+" ",1),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__button")),1)]),_:1}),C(D,{class:"m-2"},{default:z(()=>[HD]),_:1}),C(D,{class:"m-2",btnSize:"btn-sm"},{default:z(()=>[UD]),_:1}),C(D,{class:"m-2"},{default:z(()=>[$D]),_:1}),C(D,{class:"m-2",btnSize:"btn-lg"},{default:z(()=>[qD]),_:1}),C(D,{class:"m-2",disabled:"true"},{default:z(()=>[GD]),_:1}),WD,C(D,{class:"m-2",theme:"btn-success"},{default:z(()=>[YD]),_:1}),C(D,{class:"m-2",theme:"btn-warning"},{default:z(()=>[KD]),_:1}),C(D,{class:"m-2",theme:"btn-info"},{default:z(()=>[QD]),_:1}),C(D,{class:"m-2",theme:"btn-error"},{default:z(()=>[ZD]),_:1}),C(D,{class:"m-2",theme:"btn-dark"},{default:z(()=>[JD]),_:1}),C(D,{class:"m-2",theme:"btn-light"},{default:z(()=>[XD]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[e2]),_:1}),C(m,{class:"m-2"},{default:z(()=>[t2]),_:1}),C(m,{class:"m-2",theme:"badge-success"},{default:z(()=>[n2]),_:1}),C(m,{class:"m-2",theme:"badge-warning"},{default:z(()=>[o2]),_:1}),C(m,{class:"m-2",theme:"badge-info"},{default:z(()=>[i2]),_:1}),C(m,{class:"m-2",theme:"badge-error"},{default:z(()=>[r2]),_:1}),C(m,{class:"m-2",theme:"badge-dark"},{default:z(()=>[s2]),_:1}),C(m,{class:"m-2",theme:"badge-light"},{default:z(()=>[a2]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[l2]),_:1}),C(ze,null,{default:z(()=>[c2]),_:1}),C(ze,{theme:"alert-info"},{default:z(()=>[d2,u2]),_:1}),C(ze,{theme:"alert-success"},{default:z(()=>[h2,g2]),_:1}),C(ze,{theme:"alert-error"},{default:z(()=>[p2,m2]),_:1}),C(ze,{theme:"alert-warning"},{default:z(()=>[f2,k2]),_:1}),C(ze,{theme:"alert-dark"},{default:z(()=>[b2]),_:1}),C(ze,{theme:"alert-light"},{default:z(()=>[w2]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__textarea_ui")),1)]),_:1}),$("div",_2,[C(pt,{placeholder:"Message...",rows:"5",value:_.textarea,"onUpdate:value":A[6]||(A[6]=X=>_.textarea=X)},null,8,["value"]),j(" "+V(_.textarea),1)]),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__rating_ui")),1)]),_:1}),C(An,{grade:2.5,hasCounter:!0},null,8,["grade"]),C(Mn),C(N,{theme:"my-5"}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__checkbox_fixed")),1)]),_:1}),$("div",A2,[C(Xt,{value:S.checkedFruits.apple,"onUpdate:value":A[7]||(A[7]=X=>S.checkedFruits.apple=X),title:g.$t("core.ui_collection__apple")},null,8,["value","title"]),C(Xt,{value:S.checkedFruits.orange,"onUpdate:value":A[8]||(A[8]=X=>S.checkedFruits.orange=X),title:g.$t("core.ui_collection__orange")},null,8,["value","title"]),C(Xt,{value:S.checkedFruits.grape,"onUpdate:value":A[9]||(A[9]=X=>S.checkedFruits.grape=X),title:g.$t("core.ui_collection__grape")},null,8,["value","title"])]),C(ne,{class:"mt-4"},{default:z(()=>[j(V(S.checkedFruits),1)]),_:1}),C(b,{class:"mt-4 mb-4"},{default:z(()=>[j(V(g.$t("ui_collection__checkbox_dynamic")),1)]),_:1}),(U(!0),Q(Fe,null,Ze(S.checkedDataList,X=>(U(),be($t,{key:g.selectData.id,value:g.selectData,selectedValue:S.checkedSelectedList,"onUpdate:selectedValue":A[10]||(A[10]=qt=>S.checkedSelectedList=qt),title:g.selectData.name},{default:z(()=>[j(V(g.selectData.name),1)]),_:1},8,["value","selectedValue","title"]))),128)),C(ne,{class:"mt-4"},{default:z(()=>[j(V(S.checkedSelectedList),1)]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__radio_fixed")),1)]),_:1}),$("div",v2,[C(en,{value:S.radioFruits,"onUpdate:value":A[11]||(A[11]=X=>S.radioFruits=X),title:g.$t("core.ui_collection__apple")},null,8,["value","title"]),C(en,{value:S.radioFruits,"onUpdate:value":A[12]||(A[12]=X=>S.radioFruits=X),title:g.$t("core.ui_collection__orange")},null,8,["value","title"]),C(en,{value:S.radioFruits,"onUpdate:value":A[13]||(A[13]=X=>S.radioFruits=X),title:g.$t("core.ui_collection__grape")},null,8,["value","title"]),C(en,{value:S.radioFruits,"onUpdate:value":A[14]||(A[14]=X=>S.radioFruits=X),title:g.$t("core.ui_collection__mango")},null,8,["value","title"])]),C(ne,{class:"mt-4"},{default:z(()=>[j(V(S.radioFruits),1)]),_:1}),C(b,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__radio_dynamic")),1)]),_:1}),$("div",C2,[(U(!0),Q(Fe,null,Ze(S.radioDataList,X=>(U(),be(In,{key:X.id,value:X,selectedValue:S.radioSelectedList,"onUpdate:selectedValue":A[15]||(A[15]=qt=>S.radioSelectedList=qt),title:X.name},null,8,["value","selectedValue","title"]))),128))]),C(ne,{class:"mt-4"},{default:z(()=>[j(V(S.radioSelectedList),1)]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__select_dynamic")),1)]),_:1}),C(Tn,{value:S.selectedValue,"onUpdate:value":A[16]||(A[16]=X=>S.selectedValue=X),class:"mt-4",dataList:S.selectDataList},null,8,["value","dataList"]),C(ne,{class:"mt-4"},{default:z(()=>[j(V(S.selectedValue),1)]),_:1}),y2,$("div",x2,[$("p",null,V(g.$t("ui_collection__test")),1),C(nt,{align:"right"},{select:z(()=>[C(un,{selectedValue:"Transaction History "+S.selectedIndex,w:"w-96"},null,8,["selectedValue"])]),list:z(()=>[$("div",D2,[$("div",E2,[(U(),Q(Fe,null,Ze(5,X=>$("div",{key:X,class:"flex py-4 px-2 hover:bg-red-100 cursor-pointer items-center",onClick:qt=>S.onItemClick(X)},[M2,$("span",{class:Ft(["ms-2",X==S.selectedIndex?"text-red-500":"text-primary-500"])},V(g.$t("core.ui_collection__transaction_history"))+" "+V(X),3)],8,S2)),64))]),I2])]),_:1})]),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__icons")),1)]),_:1}),$("div",T2,[C(oe,{name:"downArrow",class:"text-orange-500"}),C(oe,{name:"heart",class:"text-orange-500 ms-4"}),C(oe,{name:"plusCircle",class:"ms-4"}),C(oe,{name:"dashboard",class:"ms-4"}),C(oe,{name:"apps",class:"ms-4"}),C(oe,{name:"rhombusMedium",class:"ms-4"}),C(oe,{name:"hexagonMultiple",class:"ms-4"}),C(oe,{name:"menu",class:"ms-4"}),C(oe,{name:"printer",class:"ms-4"}),C(oe,{name:"plus",class:"ms-4"}),C(oe,{name:"minus",class:"ms-4"}),C(oe,{name:"cogOutline",class:"ms-4"}),C(oe,{name:"search",class:"ms-4"})]),C(ne,{class:"mt-4"},{default:z(()=>[j(V(g.$t("ui_collection__icon_60_60")),1)]),_:1}),C(oe,{name:"dashboard",class:"mt-4",w:"60",h:"60"}),C(oe,{name:"cogOutline",class:"mt-4 text-purple-500",w:"60",h:"60"}),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__full_page_loading")),1)]),_:1}),C(D,{class:"mt-2",onClick:S.loadMore},{default:z(()=>[j(V(g.$t("ui_collection__full_page_loading")),1)]),_:1},8,["onClick"]),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__countdown")),1)]),_:1}),j(" "+V(S.countDown)+" ",1),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__modal")),1)]),_:1}),C(D,{class:"mt-2",onClick:A[17]||(A[17]=X=>S.psmodal.openModal())},{default:z(()=>[j(V(g.$t("ui_collection__open")),1)]),_:1}),C(D,{class:"mt-2",onClick:A[18]||(A[18]=X=>S.psMapModal.toggle(!0))},{default:z(()=>[j(V(g.$t("ui_collection__open_map_modal")),1)]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__skeletor")),1)]),_:1}),$("div",N2,[$("div",B2,[$("div",null,[C(_t,{circle:"",size:"48"})]),$("div",P2,[C(_t,{height:"15",class:"rounded-md"}),C(_t,{height:"20",class:"rounded-md mt-2"})])])]),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__speak")),1)]),_:1}),C(D,{class:"mt-2",onClick:S.speak},{default:z(()=>[j(V(g.$t("ui_collection__speak")),1)]),_:1},8,["onClick"]),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[j(V(g.$t("ui_collection__card")),1)]),_:1}),C(tn,{class:"flex flex-col my-3",enabledHover:"true",cursorPointer:"true"},{default:z(()=>[z2]),_:1}),C(Nn,{class:"flex flex-col mt-3",enabledHover:"true"},{"card-title":z(()=>[$("div",L2,[C(b,null,{default:z(()=>[O2]),_:1})])]),"card-body":z(()=>[$("div",R2,[C(b,null,{default:z(()=>[j2]),_:1})])]),"card-footer":z(()=>[$("div",F2,[C(D,null,{default:z(()=>[V2]),_:1}),C(D,null,{default:z(()=>[H2]),_:1})])]),_:1}),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[U2]),_:1}),C(Jn,{class:"mt-5"}),C(Bn,{modelValue:S.date,"onUpdate:modelValue":A[19]||(A[19]=X=>S.date=X),range:"",enableTimePicker:!1,placeholder:"Select Date",class:"mt-5"},null,8,["modelValue"]),j(" "+V(S.date)+" ",1),C(Bn,{modelValue:S.time,"onUpdate:modelValue":A[20]||(A[20]=X=>S.time=X),timePicker:"",is24:!1,placeholder:"Select Time",class:"mt-5"},null,8,["modelValue"]),j(" "+V(S.time),1),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[$2]),_:1}),C(I,{chartOptions:S.chartOptions,chartData:S.chartData},null,8,["chartOptions","chartData"]),C(W,{chartOptions:S.pieChartOptions,chartData:S.pieChartData},null,8,["chartOptions","chartData"]),C(G,{chartOptions:S.bubbleChartOptions,chartData:S.bubbleChartData},null,8,["chartOptions","chartData"]),C(ue,{chartOptions:S.doughnutChartOptions,chartData:S.doughnutChartData},null,8,["chartOptions","chartData"]),C(he,{chartOptions:S.lineChartOptions,chartData:S.lineChartData},null,8,["chartOptions","chartData"]),C(Z,{chartOptions:S.scatterChartOptions,chartData:S.scatterChartData},null,8,["chartOptions","chartData"]),C(mt,{chartOptions:S.polarChartOptions,chartData:S.polarChartData},null,8,["chartOptions","chartData"]),C(De,{chartOptions:S.radarChartOptions,chartData:S.radarChartData},null,8,["chartOptions","chartData"]),C(N,{theme:"my-5"}),C(b,{class:"mt-8"},{default:z(()=>[q2]),_:1}),C(ct,{percentage:50,class:"mx-2 mb-2 h-20"}),C(N,{theme:"my-5"})])]),_:1})}var DE=Jt(TD,[["render",G2]]);export{DE as default};