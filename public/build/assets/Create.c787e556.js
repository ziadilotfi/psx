import{d as P,H as I,aB as k,r as d,o as S,c as w,b as l,w as a,a as s,h as T,p as r,t as p,m,aH as _,v as $,J as B,F as U}from"./app.17cd73cb.js";import{d as E}from"./PsLayout.dfd88468.js";import{u as H}from"./Validators.52e283a4.js";import{P as F}from"./PsInput.1d284888.js";import{P as L}from"./PsLabel.22ffb702.js";import{P as V}from"./PsButton.e57c4d7d.js";import{P as D}from"./PsTextarea.a073ad3a.js";import{P as K}from"./PsLabelHeader4.58b3b4f9.js";import{P as O}from"./PsLabelCaption.88f9aeab.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";import"./PsIcon.05949a2a.js";import"./PsModal.bee9bcb9.js";import"./PsInputWithRightIcon.1f31b4ee.js";const N=P({name:"Create",components:{Head:I,PsInput:F,PsLabel:L,PsButton:V,PsTextarea:D,PsLabelHeader4:K,PsLabelCaption:O},layout:E,props:["errors"],data(){return{form:k({title:"",ordering:"",color_value:"",stage:"",is_refundable:!1})}},setup(t){const{isEmpty:e,minLength:b}=H();return{validateTitleInput:(n,u)=>{t.errors[n]=u?b(n,u,3):e(n,u)},validateEmptyInput:(n,u)=>{t.errors[n]=u?"":e(n,u)},onlyNumber:n=>{let u=n.keyCode?n.keyCode:n.which;(u<48||u>57)&&n.preventDefault()}}},methods:{handleSubmit(){this.$inertia.post(route("transaction_status.store"),this.form,{forceFormData:!0})}}}),R={class:"py-6"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},J={class:"bg-white shadow-xl sm:rounded-lg"},q={class:"mt-6 ml-6 mx-auto flex justify-center"},z=r("Create Transaction Status"),A=r("*"),G=r("Title"),Q=r("Ordering"),W=r("*"),X=r("Color"),Y=r("Start Stage"),Z=r("Fianl Stage"),x=r("Optional"),tt={class:"mb-4"},et=r("Is Refundable On? (If an order can refund to user at this transaction status ).");function ot(t,e,b,y,g,h){const n=d("Head"),u=d("ps-label-header-4"),i=d("ps-label"),f=d("ps-input"),v=d("ps-label-caption"),C=d("ps-button"),c=d("ps-layout");return S(),w(U,null,[l(n,{title:t.$t("edit_transaction_status")},null,8,["title"]),l(c,null,{default:a(()=>[s("div",R,[s("div",j,[s("div",J,[s("div",q,[s("form",{onSubmit:e[11]||(e[11]=T((...o)=>t.handleSubmit&&t.handleSubmit(...o),["prevent"]))},[l(u,null,{default:a(()=>[z]),_:1}),s("div",null,[l(i,null,{default:a(()=>[l(i,{class:"text-red-800 font-medium me-1"},{default:a(()=>[A]),_:1}),G]),_:1}),l(f,{type:"text",value:t.form.title,"onUpdate:value":e[0]||(e[0]=o=>t.form.title=o),placeholder:"Title",onKeyup:e[1]||(e[1]=o=>t.validateTitleInput("title",t.form.title)),onBlur:e[2]||(e[2]=o=>t.validateTitleInput("title",t.form.title))},null,8,["value"]),l(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[r(p(t.errors.title),1)]),_:1})]),s("div",null,[l(i,null,{default:a(()=>[Q]),_:1}),l(f,{type:"text",value:t.form.ordering,"onUpdate:value":e[3]||(e[3]=o=>t.form.ordering=o),placeholder:"Ordering",onKeypress:t.onlyNumber},null,8,["value","onKeypress"]),l(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[r(p(t.errors.ordering),1)]),_:1})]),s("div",null,[l(i,null,{default:a(()=>[l(i,{class:"text-red-800 font-medium me-1"},{default:a(()=>[W]),_:1}),X]),_:1}),l(f,{type:"text",value:t.form.color_value,"onUpdate:value":e[4]||(e[4]=o=>t.form.color_value=o),placeholder:"Color",onKeyup:e[5]||(e[5]=o=>t.validateEmptyInput("color_value",t.form.color_value)),onBlur:e[6]||(e[6]=o=>t.validateEmptyInput("color_value",t.form.color_value))},null,8,["value"]),l(v,{textColor:"text-red-500 ",class:"mt-2 block"},{default:a(()=>[r(p(t.errors.color_value),1)]),_:1})]),s("div",null,[m(s("input",{type:"radio",value:"start_stage","onUpdate:modelValue":e[7]||(e[7]=o=>t.form.stage=o)},null,512),[[_,t.form.stage]]),l(i,{class:"ms-2",for:""},{default:a(()=>[Y]),_:1})]),s("div",null,[m(s("input",{type:"radio",value:"final_stage","onUpdate:modelValue":e[8]||(e[8]=o=>t.form.stage=o)},null,512),[[_,t.form.stage]]),l(i,{class:"ms-2",for:""},{default:a(()=>[Z]),_:1})]),s("div",null,[m(s("input",{type:"radio",value:"optional","onUpdate:modelValue":e[9]||(e[9]=o=>t.form.stage=o)},null,512),[[_,t.form.stage]]),l(i,{class:"ms-2",for:""},{default:a(()=>[x]),_:1})]),m(s("div",tt,[m(s("input",{type:"checkbox",class:"rounded border",value:"0","onUpdate:modelValue":e[10]||(e[10]=o=>t.form.is_refundable=o)},null,512),[[B,t.form.is_refundable]]),l(i,{class:"ms-2",for:""},{default:a(()=>[et]),_:1})],512),[[$,t.form.stage=="start_stage"||t.form.stage=="final_stage"]]),s("div",null,[l(C,null,{default:a(()=>[r(p(t.$t("core__be_btn_save")),1)]),_:1})])],32)])])])])]),_:1})],64)}var bt=M(N,[["render",ot]]);export{bt as default};