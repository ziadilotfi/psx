import{o as T,f as P,m as j,v as q,b,l as B,g as I,ak as X,al as C,B as h,i as D,C as L,ag as Y,r as W,c as R,d as U,k as z,F as K,a5 as G,am as J,T as A,n as V,ad as Q,w as Z,a as M}from"./app.17cd73cb.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";function H(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,n)}return t}function ee(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function te(e,a,t){var n=C(e),i=n.disabled,r=t.checked,l=h(function(){return function(u){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?H(Object(o),!0).forEach(function(c){ee(u,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(o)):H(Object(o)).forEach(function(c){Object.defineProperty(u,c,Object.getOwnPropertyDescriptor(o,c))})}return u}({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label"},n.classes.value)});return{classList:h(function(){return{container:l.value.container,toggle:[l.value.toggle,i.value?r.value?l.value.toggleOnDisabled:l.value.toggleOffDisabled:r.value?l.value.toggleOn:l.value.toggleOff],handle:[l.value.handle,i.value?r.value?l.value.handleOnDisabled:l.value.handleOffDisabled:r.value?l.value.handleOn:l.value.handleOff],label:l.value.label}})}}var N={name:"Toggle",emits:["input","update:modelValue","change"],props:{value:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},modelValue:{validator:function(e){return a=>["number","string","boolean"].indexOf(typeof a)!==-1||a==null},required:!1},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1}},setup(e,a){const t=function(l,u,s){var o=C(l),c=o.value,y=o.modelValue,v=o.falseValue,m=o.trueValue,x=o.disabled,f=u.expose!==void 0?y:c,k=h(function(){return f.value===m.value}),S=function(O){u.emit("input",O),u.emit("update:modelValue",O),u.emit("change",O)},_=function(){S(m.value)},w=function(){S(v.value)};return[null,void 0,!1,0,"0","off"].indexOf(f.value)!==-1&&[v.value,m.value].indexOf(f.value)===-1&&w(),[!0,1,"1","on"].indexOf(f.value)!==-1&&[v.value,m.value].indexOf(f.value)===-1&&_(),{externalValue:f,checked:k,update:S,check:_,uncheck:w,handleInput:function(O){S(O.target.checked?m.value:v.value)},handleClick:function(){x.value||(k.value?w():_())}}}(e,a),n=function(l,u,s){var o=C(l),c=o.trueValue,y=o.falseValue,v=o.onLabel,m=o.offLabel,x=s.checked,f=s.update;return{label:h(function(){var k=x.value?v.value:m.value;return k||(k="&nbsp;"),k}),toggle:function(){f(x.value?y.value:c.value)},on:function(){f(c.value)},off:function(){f(y.value)}}}(e,0,{checked:t.checked,update:t.update}),i=te(e,0,{checked:t.checked}),r=function(l,u,s){var o=C(l).disabled,c=s.check,y=s.uncheck,v=s.checked;return{handleSpace:function(){o.value||(v.value?y():c())}}}(e,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...i,...n,...r}}};N.render=function(e,a,t,n,i,r){return T(),P("div",{class:e.classList.container,tabindex:t.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":t.describedby,"aria-labelledby":t.labelledby,role:"switch",onKeyup:a[2]||(a[2]=X((...l)=>e.handleSpace&&e.handleSpace(...l),["space"]))},[j(b("input",{type:"checkbox",id:t.id,name:t.name,value:t.trueValue,checked:e.checked,disabled:t.disabled},null,8,["id","name","value","checked","disabled"]),[[q,!1]]),b("div",{class:e.classList.toggle,onClick:a[1]||(a[1]=(...l)=>e.handleClick&&e.handleClick(...l))},[b("span",{class:e.classList.handle},null,2),B(e.$slots,"label",{checked:e.checked,classList:e.classList},()=>[b("span",{class:e.classList.label,innerHTML:e.label},null,10,["innerHTML"])]),t.required?(T(),P("input",{key:0,type:"checkbox",style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},checked:e.checked,"aria-hidden":"true",tabindex:"-1",required:""},null,8,["checked"])):I("v-if",!0)],2)],42,["tabindex","aria-checked","aria-describedby","aria-labelledby"])},N.__file="src/Toggle.vue";const ae={props:{toggleOnTheme:{type:String,default:"bg-primary-500 border border-primary-500 justify-start text-white"},toggleOffTheme:{type:String,default:"bg-gray-200 border-gray-200 justify-end text-gray-700"},selectedValue:{type:Boolean},disabled:{type:Boolean,default:!1},onLabel:{type:String,default:""},offLabel:{type:String,default:""}},components:{Toggle:N},setup(e,{emit:a}){let t=D(!1);t.value=e.selectedValue;function n(){e.disabled||a("update:selectedValue",t.value)}return L(()=>e.selectedValue,()=>{t.value=e.selectedValue}),Y.Inertia.on("finish",i=>{t.value=e.selectedValue}),{toggleValue:t,changeFunction:n}}};function le(e,a,t,n,i,r){const l=W("Toggle");return T(),R("div",null,[b(l,{modelValue:n.toggleValue,"onUpdate:modelValue":a[0]||(a[0]=u=>n.toggleValue=u),onChange:n.changeFunction,"on-label":t.onLabel,"off-label":t.offLabel,disabled:t.disabled,classes:{container:"inline-block rounded-full outline-none ",toggle:t.disabled?"flex w-12 h-5 rounded-full relative cursor-not-allowed transition items-center box-content border-2 text-xs leading-none ":"flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none ",toggleOn:[t.toggleOnTheme],toggleOff:[t.toggleOffTheme],toggleOnDisabled:"bg-secondary-300 border border-secondary-300 justify-start text-white",toggleOffDisabled:"bg-secondary-300 border border-secondary-300 justify-end text-white",handle:"inline-block bg-white w-5 h-5 top-0 rounded-full absolute transition-all",handleOn:"left-full transform -translate-x-full",handleOff:"left-0",handleOnDisabled:"bg-text-7 left-full transform -translate-x-full",handleOffDisabled:"bg-text-7 left-0",label:"text-center w-8 border-box whitespace-nowrap select-none"},labelledby:"toggle-label"},null,8,["modelValue","onChange","on-label","off-label","disabled","classes"])])}var be=$(ae,[["render",le]]);const ne=()=>window.innerWidth-document.body.clientWidth,oe={alignX:"center",alignY:"center",noSpacing:!1,clickOut:!0,eager:!1,teleportTarget:"#app",backdropTransition:void 0,modalTransition:"scale",disableMotion:!1,removeBackdrop:!1,width:"auto",maxWidth:"none",fullscreen:!1},g=e=>oe[e],p="vue-neat-modal";var re=U({inheritAttrs:!1,emits:["after-enter","after-leave","update:modelValue"],props:{modelValue:{type:Boolean,default:void 0},alignX:{type:String,validator:e=>["left","center","right"].includes(e),default:()=>g("alignX")},alignY:{type:String,validator:e=>["top","center","bottom"].includes(e),default:()=>g("alignY")},noSpacing:{type:Boolean,default:()=>g("noSpacing")},eager:{type:Boolean,default:()=>g("eager")},clickOut:{type:Boolean,default:()=>g("clickOut")},teleportTarget:{type:[String,HTMLElement],default:()=>g("teleportTarget")},backdropTransition:{type:String,default:()=>g("backdropTransition")},modalTransition:{type:String,default:()=>g("modalTransition")},disableMotion:{type:Boolean,default:()=>g("disableMotion")},removeBackdrop:{type:Boolean,default:()=>g("removeBackdrop")},width:{type:String,default:()=>g("width")},maxWidth:{type:String,default:()=>g("maxWidth")},fullscreen:{type:Boolean,default:()=>g("fullscreen")},wrapperClass:String,modalClass:String,backdropClass:String},setup(e,{slots:a,emit:t}){const n=D(!1),i=D(e.eager),r=h(()=>e.modelValue||n.value),l=d=>{e.modelValue===void 0?n.value=d:t("update:modelValue",d)},u=h(()=>({width:e.width,maxWidth:e.maxWidth})),s=h(()=>[p,e.fullscreen&&`${p}--fullscreen`,e.noSpacing&&`${p}--no-spacing`,e.modalClass]),o=`${p}-wrapper`,c=h(()=>[o,`${o}--x-${e.alignX}`,`${o}--y-${e.alignY}`,e.wrapperClass]),y=h(()=>[`${p}-backdrop`,r.value&&`${p}-backdrop--active`,e.backdropClass]),v=()=>{document.body.classList.add(`${p}-open`),document.body.style.paddingRight=`${ne()}px`},m=()=>{document.body.classList.remove(`${p}-open`),document.body.style.paddingRight=""};L([()=>e.modelValue,n],(d,F)=>{!i.value&&(d||F)&&(i.value=!0)}),L(r,d=>{G(()=>{!d||v()})});const x=()=>{!e.clickOut||l(!1)},f=d=>{if(!r.value)return;d.target.closest(`.${p}`)||x()};L(r,d=>{setTimeout(()=>{d?document.addEventListener("click",f):document.removeEventListener("click",f)},0)}),z(()=>{document.removeEventListener("click",f),m()});const k=()=>{m(),t("after-leave")},S=()=>{if(e.removeBackdrop)return null;const d=j(b("div",{class:y.value},null),[[q,r.value]]);return e.disableMotion?d:b(A,{appear:!0,name:e.backdropTransition,onAfterLeave:k},{default:()=>[d]})},_={close:()=>l(!1)},w=()=>{const d=j(b("div",{class:s.value,style:u.value},[a.default(_)]),[[q,r.value]]);return e.disableMotion?d:b(A,{appear:!0,name:e.modalTransition,onAfterEnter:()=>t("after-enter")},{default:()=>[d]})},O=()=>b("div",{class:c.value},[w()]),E=()=>i.value?b(J,{to:e.teleportTarget},{default:()=>[S(),O()]}):null;if(a.activator){const d={onClick:()=>l(!r.value)};return()=>b(K,null,[a.activator(d),E()])}return E}});const de={name:"PsLine",props:{theme:{type:String,default:"bg-secondary-700 dark:bg-white"}}};function ie(e,a,t,n,i,r){return T(),R("div",{class:V(["h-0.5",t.theme])},null,2)}var ue=$(de,[["render",ie]]);const se={name:"PsModal",components:{Modal:re,PsLine:ue},props:{maxWidth:{type:String,default:"500px"},bodyHeight:{type:String,default:"max-h-80"},isBackdropRemoved:{type:Boolean,default:!1},isMotionDisabled:{type:Boolean,default:!1},isClickOut:{type:Boolean,default:!0},modalTransition:{type:String,default:"scale"},isFullscreen:{type:Boolean,default:!1},theme:{type:String,default:" p-6 border lg:rounded-2xl rounded-xl  "},line:{type:String,default:"mt-4 "}},setup(){const e=Q();e.dispatch("loadIsDarkMode");const a=h(()=>e.getters.isDarkMode),t=D(!1);function n(i){t.value=i}return{isOpen:t,toggle:n,store:e,isDarkMode:a}}};function ce(e,a,t,n,i,r){const l=W("ps-line"),u=W("Modal");return T(),P(u,{modelValue:n.isOpen,"onUpdate:modelValue":a[0]||(a[0]=s=>n.isOpen=s),fullscreen:t.isFullscreen,"modal-transition":t.modalTransition,"click-out":t.isClickOut,"disable-motion":t.isMotionDisabled,teleportTarget:"#app","max-width":t.isFullscreen?void 0:t.maxWidth,"remove-backdrop":t.isBackdropRemoved},{default:Z(()=>[M("div",{class:V(n.isDarkMode?"dark":"")},[M("div",{class:V([t.theme,"max-h-auto bg-background dark:bg-backgroundDark"])},[B(e.$slots,"title",{},void 0,!0),b(l,{class:V(["mb-4",t.line])},null,8,["class"]),M("div",{class:V(["mb-4",t.bodyHeight])},[B(e.$slots,"body",{},void 0,!0)],2),B(e.$slots,"footer",{},void 0,!0)],2)],2)]),_:3},8,["modelValue","fullscreen","modal-transition","click-out","disable-motion","max-width","remove-backdrop"])}var ve=$(se,[["render",ce],["__scopeId","data-v-9a1e68aa"]]);export{re as M,ve as P,ue as a,be as b,N as c};
