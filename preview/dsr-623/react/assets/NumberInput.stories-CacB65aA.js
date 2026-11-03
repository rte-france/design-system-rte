import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{w as de,a as C,e as p,u as N}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{L as Dt,A as Ct}from"./Label-_Lstalw-.js";import{I as Vt}from"./IconButton-CJDki2nw.js";import{c as ke}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Se=0,Bt=1,Mt=0,Ft="fr-FR",Lt="brand",Rt="right",kt="184px",qt="Number Input requires a non-empty label or an ariaLabel when the label is omitted.",Pt={between:(e,t)=>`La valeur doit être comprise entre ${e} et ${t}.`,greaterThan:e=>`La valeur doit être supérieure ou égale à ${e}.`,lessThan:e=>`La valeur doit être inférieure ou égale à ${e}.`};function _e(e){const r=new Intl.NumberFormat(e).formatToParts(1.1).find(n=>n.type==="decimal");return(r==null?void 0:r.value)===","?",":"."}function Ut(e){return e===","?".":","}function Tt(e,t){const r=Ut(t);return e.split(r).join(t)}function Ht(e,t,r){if(r===0){const a=e.indexOf(t);return a===-1?e:e.slice(0,a)}const n=e.indexOf(t);if(n===-1)return e;const s=e.slice(0,n+1),i=e.slice(n+1).slice(0,r);return s+i}function jt(e){return e>="0"&&e<="9"}function zt(e,t){return[t,".",","].includes(e)}function Ot(e){const{text:t,decimalSeparator:r,allowNegative:n}=e,s=Math.max(0,e.decimalPrecision??0),i=Tt(t,r),a={characters:"",decimalSeparatorUsed:!1,leadingMinusUsed:!1,ignoreCharactersAfterSeparator:!1};return[...i].forEach(u=>{if(a.ignoreCharactersAfterSeparator)return;if(jt(u)){a.characters+=u;return}if(n&&u==="-"&&a.characters.length===0&&!a.leadingMinusUsed){a.leadingMinusUsed=!0,a.characters="-";return}if(zt(u,r)){if(s===0){a.ignoreCharactersAfterSeparator=!0;return}a.decimalSeparatorUsed||(a.decimalSeparatorUsed=!0,a.characters+=r)}}),Ht(a.characters,r,s)}function Nt(e,t){const r=e.trim();if(r===""||r==="-")return null;const s=Tt(r,t).replace(t,"."),i=Number(s);return Number.isFinite(i)?i:null}function St(e=Mt){return typeof e!="number"||!Number.isFinite(e)?0:Math.min(100,Math.max(0,Math.trunc(e)))}function Wt(e,t,r){if(e===null)return"";const n=St(t),s=e.toFixed(n);return r===","?s.replace(".",","):s}function $t(e,t){const r=10**t;return Math.round(e*r)/r}function Kt(e,t){const r=10**t;return Math.floor(e*r)/r}function Gt(e,t){const r=10**t;return Math.ceil(e*r)/r}function Yt(e,t,r){let n=e;const{min:s,max:i}=t,a=r!==void 0;return s!==void 0&&n<s&&(n=a?Gt(s,r):s),i!==void 0&&n>i&&(n=a?Kt(i,r):i),n}function qe(e){const{value:t,step:r,direction:n,bounds:s,decimalPrecision:i,fallbackValue:a}=e,u=t??a,g=n==="up"?r:-r,_=$t(u+g,i);return Yt(_,s,i)}function Qt(e){const{value:t,min:r,max:n,messages:s=Pt}=e;if(t===null)return null;const i=r!==void 0,a=n!==void 0;return i&&a&&(t<r||t>n)?s.between(r,n):i&&!a&&t<r?s.greaterThan(r):a&&!i&&t>n?s.lessThan(n):null}function Jt(e,t){return e===null||t===void 0?!1:e<=t}function Xt(e,t){return e===null||t===void 0?!1:e>=t}function Zt(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:Bt}function er(e){if(e===void 0||e==="")return kt;const t=e.toString();return t.includes("px")||t.includes("%")||t.includes("em")||t.includes("rem")?t:`${t}px`}function tr(e,t){return e?"":t}function rr(e){return e>0?"decimal":"numeric"}function _t(e,t,r){if(e===null)return"";const n=_e(r);return Wt(e,t,n)}function Pe(e){const{value:t,defaultValue:r,decimalPrecision:n,locale:s}=e,i=t!==void 0?t:r!==void 0?r:null;return i===null||!Number.isFinite(i)?"":_t(i,n,s)}function nr(e){const{hasCustomError:t,errorMessage:r,rangeErrorMessage:n,assistiveText:s}=e,i=t||n!==null;let a="";return t?a=r||n||"":a=n||"",{showErrorState:i,resolvedErrorMessage:a,visibleAssistiveText:i&&a||s}}function ar(e){const{id:t,hasVisibleLabel:r,ariaLabel:n,ariaLabelledby:s,visibleAssistiveText:i}=e,a=s.trim();let u=null;a?u=a:r&&t&&(u=`input-label-${t}`);let g=null;u||(g=n.trim()||null);const _=i&&t?`${t}-assistive-text`:null;return{ariaLabelledby:u,ariaLabel:g,ariaDescribedby:_}}function sr(e,t){return e?null:t}function ir(e){const{isDisabled:t,displayText:r,unit:n}=e;return t||!r?null:n?`${r} ${n}`:r}function ur(e,t=Se){return e??t}function or(e){const{isDisabled:t,readOnly:r,parsedValue:n,fallbackValue:s,min:i,max:a}=e;if(t||r)return{canIncrement:!1,canDecrement:!1};const u=n??s;return{canDecrement:!Jt(u,i),canIncrement:!Xt(u,a)}}function lr(e){const{text:t,locale:r,decimalPrecision:n,min:s=Se}=e,i=_e(r),a=Ot({text:t,decimalSeparator:i,decimalPrecision:n,allowNegative:s<0}),u=Nt(a,i);return{displayedValue:a,parsedValue:u}}function cr(e){const{displayText:t,defaultValue:r}=e;return t.trim()!==""?"noop":r!==void 0?"restoreDefault":"emitParsed"}function pr(e){const{hasVisibleLabel:t,ariaLabel:r,ariaLabelledby:n}=e;!t&&!r.trim()&&!n.trim()&&console.error(qt)}function dr({id:e,label:t,value:r,defaultValue:n,onChange:s,onBlur:i,min:a=Se,max:u,step:g,decimalPrecision:_,locale:h=Ft,unit:be="",isError:z=!1,errorMessage:O="",assistiveTextLabel:E="",disabled:b=!1,readOnly:S=!1,rangeErrorMessages:q,ariaLabel:V="",ariaLabelledby:B="",width:fe}){const M=Zt(g),v=St(_),ve=er(fe),[A,P]=c.useState(()=>Pe({value:r,defaultValue:n,decimalPrecision:v,locale:h})),[he,W]=c.useState(!1),F=c.useRef(!1),D=c.useRef(null),$=c.useMemo(()=>_e(h),[h]),xe=rr(v),m=c.useMemo(()=>Nt(A,$),[A,$]),K=c.useMemo(()=>Qt({value:m,min:a,max:u,messages:q}),[m,a,u,q]),{showErrorState:ye,resolvedErrorMessage:ge,visibleAssistiveText:U}=c.useMemo(()=>nr({hasCustomError:z,errorMessage:O,rangeErrorMessage:K,assistiveText:E}),[z,O,K,E]),G=t.trim(),I=G.length>0,L=c.useMemo(()=>ar({id:e,hasVisibleLabel:I,ariaLabel:V,ariaLabelledby:B,visibleAssistiveText:U}),[e,I,V,B,U]),Y=L.ariaLabelledby??void 0,Ie=L.ariaLabel??void 0,H=L.ariaDescribedby??void 0,T=ur(n??void 0,a),{canDecrement:Q,canIncrement:J}=c.useMemo(()=>or({isDisabled:b,readOnly:S,parsedValue:m,fallbackValue:T,min:a,max:u}),[b,S,m,T,a,u]),we=tr(b,A),Ee=sr(b,m)??void 0,Ae=ir({isDisabled:b,displayText:A,unit:be})??void 0,w=c.useCallback((o,d)=>{const x=_t(o,v,h);P(x),d.emitChange&&(s==null||s(o))},[v,h,s]),Te=c.useCallback(()=>{s==null||s(m)},[s,m]),R=c.useCallback(()=>{const o=qe({value:m,step:M,direction:"up",bounds:{min:a,max:u},decimalPrecision:v,fallbackValue:T});w(o,{emitChange:!0})},[m,M,a,u,v,T,w]),k=c.useCallback(()=>{const o=qe({value:m,step:M,direction:"down",bounds:{min:a,max:u},decimalPrecision:v,fallbackValue:T});w(o,{emitChange:!0})},[m,M,a,u,v,T,w]);return c.useEffect(()=>{pr({hasVisibleLabel:I,ariaLabel:V,ariaLabelledby:B})},[I,V,B]),c.useEffect(()=>{if(r!==void 0){if(r===null){w(null,{emitChange:!1});return}Number.isFinite(r)&&w(r,{emitChange:!1})}},[r,h,v,w]),c.useEffect(()=>{if(!F.current){if(r!==void 0){F.current=!0;return}if(A!==""){F.current=!0;return}P(Pe({defaultValue:n,decimalPrecision:v,locale:h})),F.current=!0}},[r,n,A,v,h]),c.useEffect(()=>{const o=D.current;if(!o)return;const d=x=>{document.activeElement!==o||b||S||(x.preventDefault(),x.deltaY<0?R():x.deltaY>0&&k())};return o.addEventListener("wheel",d,{passive:!1}),()=>{o.removeEventListener("wheel",d)}},[b,S,R,k]),{inputFieldRef:D,computedWidth:ve,fieldDisplayText:we,inputFocused:he,inputMode:xe,showErrorState:ye,resolvedErrorMessage:ge,visibleAssistiveText:U,displayedLabel:G,hasVisibleLabel:I,inputFieldAriaLabelledby:Y,inputFieldAriaLabel:Ie,inputFieldAriaDescribedBy:H,canDecrement:Q,canIncrement:J,ariaValueNow:Ee,ariaValueText:Ae,handleInput:o=>{const d=o.target,{displayedValue:x,parsedValue:X}=lr({text:d.value,locale:h,decimalPrecision:v,min:a});d.value!==x&&(d.value=x),P(x),s==null||s(X)},handleBlur:()=>{const o=cr({displayText:A,defaultValue:n??void 0});o==="restoreDefault"&&n!==void 0?w(n,{emitChange:!0}):o==="emitParsed"&&Te(),W(!1),i==null||i()},handleFocus:()=>{W(!0)},handleKeyDown:o=>{var d;if(!(b||S)){if(o.key==="ArrowUp"){o.preventDefault(),R();return}if(o.key==="ArrowDown"){o.preventDefault(),k();return}o.key==="Enter"&&((d=D.current)==null||d.blur())}},handleDecrementClick:o=>{var d;o.preventDefault(),Q&&(k(),(d=D.current)==null||d.focus())},handleIncrementClick:o=>{var d;o.preventDefault(),J&&(R(),(d=D.current)==null||d.focus())}}}const mr="_container_1237k_1",br="_text_1237k_14",fr="_numberInputLayout_1237k_18",vr="_numberInputControl_1237k_21",hr="_numberInputField_1237k_26",xr="_numberInputUnit_1237k_27",yr="_inputContainer_1237k_40",gr="_input_1237k_40",Ir="_numberInputControlDisabled_1237k_88",wr="_numberInputControlReadOnly_1237k_88",Er="_numberInputControlError_1237k_88",Ar="_numberInputControlHighlighted_1237k_91",Tr="_numberInputValue_1237k_125",Nr="_numberInputSteppersRight_1237k_172",Sr="_numberInputStepper_1237k_172",f={container:mr,text:br,numberInputLayout:fr,numberInputControl:vr,numberInputField:hr,numberInputUnit:xr,inputContainer:yr,input:gr,numberInputControlDisabled:Ir,numberInputControlReadOnly:wr,numberInputControlError:Er,numberInputControlHighlighted:Ar,numberInputValue:Tr,numberInputSteppersRight:Nr,numberInputStepper:Sr},me=c.forwardRef(({id:e,label:t,labelPosition:r="top",required:n=!1,showLabelRequirement:s=!1,appearance:i=Lt,incrementPosition:a=Rt,compactSpacing:u=!1,unit:g="",assistiveTextLabel:_="",assistiveAppearance:h="description",showAssistiveIcon:be=!1,isError:z=!1,errorMessage:O="",disabled:E=!1,readOnly:b=!1,min:S,max:q,step:V,decimalPrecision:B,locale:fe,defaultValue:M,placeholder:v="",width:ve,name:A="",rangeErrorMessages:P,value:he,onChange:W,onBlur:F,"aria-label":D="","aria-labelledby":$="",...xe},m)=>{const{inputFieldRef:K,computedWidth:ye,fieldDisplayText:ge,inputFocused:U,inputMode:G,showErrorState:I,visibleAssistiveText:L,displayedLabel:Y,hasVisibleLabel:Ie,inputFieldAriaLabelledby:H,inputFieldAriaLabel:T,inputFieldAriaDescribedBy:Q,canDecrement:J,canIncrement:we,ariaValueNow:Ee,ariaValueText:Ae,handleInput:w,handleBlur:Te,handleFocus:R,handleKeyDown:k,handleDecrementClick:De,handleIncrementClick:Ce}=dr({id:e,label:t,value:he,defaultValue:M,onChange:W,onBlur:F,min:S,max:q,step:V,decimalPrecision:B,locale:fe,unit:g,isError:z,errorMessage:O,assistiveTextLabel:_,disabled:E,readOnly:b,rangeErrorMessages:P,ariaLabel:D,ariaLabelledby:$,width:ve}),Ve=u?"s":"m",Be=i==="brand"?{variant:"primary",appearance:"filled"}:{appearance:"neutral",hierarchy:"primary",iconAppearance:"filled"},Me=Ie?`input-label-${e}`:void 0,Fe=I?"error":h,o=I||be,d=ke(f.numberInputControl,I?f.numberInputControlError:"",E?f.numberInputControlDisabled:"",b?f.numberInputControlReadOnly:"",U?f.numberInputControlHighlighted:""),x=E||b,X=(j,Ne)=>l.jsx("span",{className:ke(f.numberInputStepper,`number-input-stepper--${j}`),children:l.jsx(Vt,{name:Ne.name,...Be,size:Ve,compactSpacing:u,disabled:Ne.disabled,tabIndex:-1,"aria-hidden":!0,onClick:Ne.onClick})}),Le=X("decrement",{name:"remove",disabled:x||!J,onClick:De}),Re=X("increment",{name:"add",disabled:x||!we,onClick:Ce});return l.jsxs("div",{className:f.container,"data-label-position":r,"data-disabled":E||void 0,"data-compact-spacing":u||void 0,style:{width:ye},children:[Y&&l.jsx("div",{className:f.text,children:l.jsx(Dt,{id:Me,label:Y,htmlFor:e,required:n,showLabelRequirement:s})}),l.jsxs("div",{className:f.inputContainer,children:[l.jsx("div",{className:f.input,"data-disabled":E||void 0,"data-read-only":b||void 0,children:l.jsxs("div",{className:f.numberInputLayout,role:"group","data-increment-position":a,"data-appearance":i,"aria-labelledby":H,"aria-label":H?void 0:T,children:[a==="sides"&&Le,l.jsx("div",{className:d,children:l.jsxs("div",{className:f.numberInputValue,children:[l.jsx("input",{...xe,ref:j=>{K.current=j,typeof m=="function"?m(j):m&&(m.current=j)},id:e,name:A||void 0,className:f.numberInputField,type:"text",role:"spinbutton",inputMode:G,value:ge,placeholder:v,readOnly:b,disabled:E,"aria-valuemin":S??0,"aria-valuemax":q??void 0,"aria-valuenow":Ee,"aria-valuetext":Ae,"aria-invalid":I||void 0,"aria-readonly":b||void 0,"aria-required":n||void 0,"aria-labelledby":H,"aria-label":T,"aria-describedby":Q,onChange:w,onBlur:Te,onFocus:R,onKeyDown:k}),g?l.jsx("span",{className:f.numberInputUnit,"aria-hidden":"true",children:g}):null]})}),a==="sides"?Re:l.jsxs("div",{className:f.numberInputSteppersRight,children:[Le,Re]})]})}),L?l.jsx(Ct,{id:`${e}-assistive-text`,label:L,appearance:Fe,showIcon:o}):null]})]})});me.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},incrementPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},unit:{defaultValue:{value:'""',computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1},name:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreNumberInputProps","Omit"]};const Or={title:"Composants/NumberInput/NumberInput",component:me,tags:["autodocs"],argTypes:{id:{control:"text",description:"Required. Stable id for the field, label association, and assistive text."},appearance:{control:{type:"radio"},options:["brand","neutral"]},incrementPosition:{control:{type:"radio"},options:["right","sides"]},isError:{control:"boolean"},errorMessage:{control:"text"},readOnly:{control:"boolean"},label:{control:"text",description:"Visible label. Leave empty only if aria-label (or aria-labelledby) is set."},"aria-label":{control:"text",description:"Accessible name when label is empty."},assistiveTextLabel:{control:"text",description:"Help text below the field when no error is shown."},onChange:{action:"value changed"},width:{control:"text",description:"Total width (field + steppers). Defaults to 184px when omitted."}}},y={id:"number-input-default",label:"Puissance",min:0,max:100,step:1,defaultValue:50,unit:"kW",decimalPrecision:0,locale:"fr-FR"},Z={args:y},ee={args:{...y,id:"number-input-sides",incrementPosition:"sides"}},te={args:{...y,id:"number-input-neutral",appearance:"neutral"}},re={args:{...y,id:"number-input-compact",compactSpacing:!0}},ne={args:{...y,id:"number-input-custom-width",width:"320px"}},ae={args:{...y,id:"number-input-decimals-fr",decimalPrecision:2,defaultValue:12.34,max:999}},se={args:{...y,id:"number-input-decimals-en",locale:"en-US",decimalPrecision:2,defaultValue:12.34,max:999}},ie={args:{...y,id:"number-input-disabled",disabled:!0}},ue={args:{...y,id:"number-input-readonly",readOnly:!0}},oe={args:{...y,id:"number-input-assistive",assistiveTextLabel:"Entrez une valeur entre 0 et 100, par pas de 1."},play:async({canvasElement:e})=>{const r=de(e).getByRole("spinbutton");p(r).toHaveAttribute("aria-describedby","number-input-assistive-assistive-text"),p(e.querySelector("#number-input-assistive-assistive-text")).not.toBeNull()}},le={args:{...y,id:"number-input-error",isError:!0,errorMessage:"Valeur invalide pour ce champ.",assistiveTextLabel:"Ce texte d'aide ne s'affiche pas lorsque error est activé."},play:async({canvasElement:e})=>{const t=de(e),r=t.getByRole("spinbutton");p(t.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument(),p(t.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument(),p(r).toHaveAttribute("aria-invalid","true"),p(r).toHaveAttribute("aria-describedby","number-input-error-assistive-text")}},ce={tags:["!autodocs"],args:{...y,id:"number-input-play",defaultValue:10,max:100,min:0,decimalPrecision:2,locale:"fr-FR"},render:e=>l.jsx("div",{"data-testid":"number-input",children:l.jsx(me,{...e})}),play:async({canvasElement:e})=>{const t=de(e),r=t.getByTestId("number-input"),n=r.querySelector('input[role="spinbutton"]'),s=r.querySelector(".number-input-stepper--increment button"),i=r.querySelector(".number-input-stepper--decrement button");p(n).toHaveAttribute("role","spinbutton"),p(n).toHaveAttribute("aria-valuemin","0"),p(n).toHaveAttribute("aria-valuemax","100"),p(s).toHaveAttribute("aria-hidden","true"),p(i).toHaveAttribute("aria-hidden","true"),await N.clear(n),await N.type(n,"1.251212"),await C(()=>p(n.value).toBe("1,25")),n.focus(),await N.keyboard("{ArrowUp}"),await C(()=>p(n.value).toBe("2,25")),await N.keyboard("{ArrowDown}"),await C(()=>p(n.value).toBe("1,25")),await N.clear(n),await N.type(n,"150"),await C(()=>p(t.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument()),p(n).toHaveAttribute("aria-describedby","number-input-play-assistive-text"),await N.clear(n),await N.tab(),await C(()=>p(n.value).toBe("10,00"))}},_r=()=>{const[e,t]=c.useState(3);return l.jsxs("div",{"data-testid":"number-input-controlled",children:[l.jsx(me,{id:"number-input-controlled",label:"Quantité",min:0,max:10,value:e,onChange:t}),l.jsx("button",{type:"button","data-testid":"set-from-model",onClick:()=>t(7),children:"Set from model"}),l.jsx("span",{"data-testid":"model-value",children:e})]})},pe={tags:["!autodocs"],render:()=>l.jsx(_r,{}),play:async({canvasElement:e})=>{const t=de(e),n=t.getByTestId("number-input-controlled").querySelector('input[role="spinbutton"]'),s=t.getByTestId("model-value");await C(()=>p(n.value).toBe("3")),await N.click(t.getByTestId("set-from-model")),await C(()=>{p(s).toHaveTextContent("7"),p(n.value).toBe("7")})}};var Ue,He,je;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(je=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:je.source}}};var ze,Oe,We;ee.parameters={...ee.parameters,docs:{...(ze=ee.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-sides",
    incrementPosition: "sides"
  }
}`,...(We=(Oe=ee.parameters)==null?void 0:Oe.docs)==null?void 0:We.source}}};var $e,Ke,Ge;te.parameters={...te.parameters,docs:{...($e=te.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-neutral",
    appearance: "neutral"
  }
}`,...(Ge=(Ke=te.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;re.parameters={...re.parameters,docs:{...(Ye=re.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-compact",
    compactSpacing: true
  }
}`,...(Je=(Qe=re.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,Ze,et;ne.parameters={...ne.parameters,docs:{...(Xe=ne.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-custom-width",
    width: "320px"
  }
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;ae.parameters={...ae.parameters,docs:{...(tt=ae.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-fr",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(nt=(rt=ae.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,st,it;se.parameters={...se.parameters,docs:{...(at=se.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-en",
    locale: "en-US",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(it=(st=se.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ut,ot,lt;ie.parameters={...ie.parameters,docs:{...(ut=ie.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-disabled",
    disabled: true
  }
}`,...(lt=(ot=ie.parameters)==null?void 0:ot.docs)==null?void 0:lt.source}}};var ct,pt,dt;ue.parameters={...ue.parameters,docs:{...(ct=ue.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-readonly",
    readOnly: true
  }
}`,...(dt=(pt=ue.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var mt,bt,ft;oe.parameters={...oe.parameters,docs:{...(mt=oe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-assistive",
    assistiveTextLabel: "Entrez une valeur entre 0 et 100, par pas de 1."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton");
    expect(input).toHaveAttribute("aria-describedby", "number-input-assistive-assistive-text");
    expect(canvasElement.querySelector("#number-input-assistive-assistive-text")).not.toBeNull();
  }
}`,...(ft=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var vt,ht,xt;le.parameters={...le.parameters,docs:{...(vt=le.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-error",
    isError: true,
    errorMessage: "Valeur invalide pour ce champ.",
    assistiveTextLabel: "Ce texte d'aide ne s'affiche pas lorsque error est activé."
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton");
    expect(canvas.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument();
    expect(canvas.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument();
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAttribute("aria-describedby", "number-input-error-assistive-text");
  }
}`,...(xt=(ht=le.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var yt,gt,It;ce.parameters={...ce.parameters,docs:{...(yt=ce.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...defaultArgs,
    id: "number-input-play",
    defaultValue: 10,
    max: 100,
    min: 0,
    decimalPrecision: 2,
    locale: "fr-FR"
  },
  render: args => <div data-testid="number-input">
      <NumberInput {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const host = canvas.getByTestId("number-input");
    const input = host.querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const incrementStepper = host.querySelector(".number-input-stepper--increment button") as HTMLButtonElement;
    const decrementStepper = host.querySelector(".number-input-stepper--decrement button") as HTMLButtonElement;
    expect(input).toHaveAttribute("role", "spinbutton");
    expect(input).toHaveAttribute("aria-valuemin", "0");
    expect(input).toHaveAttribute("aria-valuemax", "100");
    expect(incrementStepper).toHaveAttribute("aria-hidden", "true");
    expect(decrementStepper).toHaveAttribute("aria-hidden", "true");
    await userEvent.clear(input);
    await userEvent.type(input, "1.251212");
    await waitFor(() => expect(input.value).toBe("1,25"));
    input.focus();
    await userEvent.keyboard("{ArrowUp}");
    await waitFor(() => expect(input.value).toBe("2,25"));
    await userEvent.keyboard("{ArrowDown}");
    await waitFor(() => expect(input.value).toBe("1,25"));
    await userEvent.clear(input);
    await userEvent.type(input, "150");
    await waitFor(() => expect(canvas.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument());
    expect(input).toHaveAttribute("aria-describedby", "number-input-play-assistive-text");
    await userEvent.clear(input);
    await userEvent.tab();
    await waitFor(() => expect(input.value).toBe("10,00"));
  }
}`,...(It=(gt=ce.parameters)==null?void 0:gt.docs)==null?void 0:It.source}}};var wt,Et,At;pe.parameters={...pe.parameters,docs:{...(wt=pe.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: () => <ControlledNumberInputHost />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const host = canvas.getByTestId("number-input-controlled");
    const input = host.querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const modelValue = canvas.getByTestId("model-value");
    await waitFor(() => expect(input.value).toBe("3"));
    await userEvent.click(canvas.getByTestId("set-from-model"));
    await waitFor(() => {
      expect(modelValue).toHaveTextContent("7");
      expect(input.value).toBe("7");
    });
  }
}`,...(At=(Et=pe.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};const Wr=["Default","Sides","Neutral","Compact","CustomWidth","DecimalsFr","DecimalsEn","Disabled","ReadOnly","WithAssistiveText","Error","InteractionPlay","Controlled"];export{re as Compact,pe as Controlled,ne as CustomWidth,se as DecimalsEn,ae as DecimalsFr,Z as Default,ie as Disabled,le as Error,ce as InteractionPlay,te as Neutral,ue as ReadOnly,ee as Sides,oe as WithAssistiveText,Wr as __namedExportsOrder,Or as default};
