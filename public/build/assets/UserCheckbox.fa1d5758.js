import{P as m}from"./PsLabel.22ffb702.js";import{r as c,o as d,c as n,q as u,m as p,J as h,a as _,b as f,w as b,p as x,t as v,F as C}from"./app.17cd73cb.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const g={name:"CheckBox",component:{PsLabel:m},props:["permissions","customizeHeader","module_id","oldData"],data(){return{arr:[],error:""}},mounted(){this.oldData&&this.oldData.map(t=>{if(t!==void 0&&t.module_id===this.module_id){let e=t.permission_id.split(",");this.arr=e}})},methods:{handleChange(t,e){this.$emit("toParent",{data:t,id:e})},handleError(){}}},y=["id","value"];function D(t,e,o,B,r,i){const l=c("ps-label");return d(!0),n(C,null,u(o.permissions,a=>(d(),n("div",{class:"mr-2",key:a.id},[p(_("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>r.arr=s),onChange:e[1]||(e[1]=s=>i.handleChange(r.arr,o.module_id)),class:"mr-2 border-1 border-secondary-200 rounded",type:"checkbox",id:a.id,value:a.id},null,40,y),[[h,r.arr]]),f(l,{class:"text-base font-light",for:a.id},{default:b(()=>[x(v(a.title),1)]),_:2},1032,["for"])]))),128)}var P=k(g,[["render",D]]);export{P as default};
