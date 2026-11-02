import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{w as de,a as C,e as p,u as A}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{L as Dt,A as Ct}from"./Label-_Lstalw-.js";import{I as Vt}from"./IconButton-CJDki2nw.js";import{c as qe}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Te=0,Bt=1,Lt=0,Mt="fr-FR",Rt="brand",Pt="right",qt="184px",Ut="Number Input requires a non-empty label or an ariaLabel when the label is omitted.",Nt={between:(e,t)=>`La valeur doit être comprise entre ${e} et ${t}.`,greaterThan:e=>`La valeur doit être supérieure ou égale à ${e}.`,lessThan:e=>`La valeur doit être inférieure ou égale à ${e}.`};function _e(e){const r=new Intl.NumberFormat(e).formatToParts(1.1).find(n=>n.type==="decimal");return(r==null?void 0:r.value)===","?",":"."}function Ft(e){return e===","?".":","}function At(e,t){const r=Ft(t);return e.split(r).join(t)}function jt(e,t,r){if(r===0){const a=e.indexOf(t);return a===-1?e:e.slice(0,a)}const n=e.indexOf(t);if(n===-1)return e;const s=e.slice(0,n+1),i=e.slice(n+1).slice(0,r);return s+i}function kt(e){return e>="0"&&e<="9"}function Ht(e,t){return[t,".",","].includes(e)}function zt(e){const{text:t,decimalSeparator:r,allowNegative:n}=e,s=Math.max(0,e.decimalPrecision??0),i=At(t,r),a={characters:"",decimalSeparatorUsed:!1,leadingMinusUsed:!1,ignoreCharactersAfterSeparator:!1};return[...i].forEach(u=>{if(a.ignoreCharactersAfterSeparator)return;if(kt(u)){a.characters+=u;return}if(n&&u==="-"&&a.characters.length===0&&!a.leadingMinusUsed){a.leadingMinusUsed=!0,a.characters="-";return}if(Ht(u,r)){if(s===0){a.ignoreCharactersAfterSeparator=!0;return}a.decimalSeparatorUsed||(a.decimalSeparatorUsed=!0,a.characters+=r)}}),jt(a.characters,r,s)}function St(e,t){const r=e.trim();if(r===""||r==="-")return null;const s=At(r,t).replace(t,"."),i=Number(s);return Number.isFinite(i)?i:null}function Tt(e){return Number.isFinite(e)?Math.min(100,Math.max(0,Math.trunc(e))):0}function Ot(e){const{value:t,decimalSeparator:r}=e,n=Tt(e.decimalPrecision),s=t.toFixed(n);return r===","?s.replace(".",","):s}function Wt(e,t,r){return e===null?"":Ot({value:e,decimalPrecision:t,decimalSeparator:r})}function $t(e,t){const r=10**t;return Math.round(e*r)/r}function Kt(e,t){const r=10**t;return Math.floor(e*r)/r}function Gt(e,t){const r=10**t;return Math.ceil(e*r)/r}function Yt(e,t,r){let n=e;const{min:s,max:i}=t,a=r!==void 0;return s!==void 0&&n<s&&(n=a?Gt(s,r):s),i!==void 0&&n>i&&(n=a?Kt(i,r):i),n}function Ue(e){const{value:t,step:r,direction:n,bounds:s,decimalPrecision:i,fallbackValue:a}=e,u=t??a,y=n==="up"?r:-r,T=$t(u+y,i);return Yt(T,s,i)}function Qt(e){const{value:t,min:r,max:n,messages:s=Nt}=e;if(t===null)return null;const i=r!==void 0,a=n!==void 0;return i&&a&&(t<r||t>n)?s.between(r,n):i&&!a&&t<r?s.greaterThan(r):a&&!i&&t>n?s.lessThan(n):null}function Jt(e,t){return e===null||t===void 0?!1:e<=t}function Xt(e,t){return e===null||t===void 0?!1:e>=t}function Zt(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:Bt}function er(e){if(e===void 0||e==="")return qt;const t=e.toString();return t.includes("px")||t.includes("%")||t.includes("em")||t.includes("rem")?t:`${t}px`}function tr(e){return Tt(e??Lt)}function rr(e){const t=e.trim().length>0;return{hasVisibleLabel:t,displayedLabel:t?e:""}}function nr(e,t){return e?"":t}function ar(e){return e>0?"decimal":"numeric"}function _t(e,t,r){if(e===null)return"";const n=_e(r);return Wt(e,t,n)}function sr(e){const{value:t,defaultValue:r,decimalPrecision:n,locale:s}=e,i=t!==void 0?t:r!==void 0?r:null;return i===null||!Number.isFinite(i)?"":_t(i,n,s)}function ir(e,t,r,n){return Qt({value:e,min:t,max:r,messages:n??Nt})}function ur(e){const{hasCustomError:t,errorMessage:r,rangeErrorMessage:n,assistiveText:s}=e,i=t||n!==null;let a="";return t?a=r||n||"":a=n||"",{showErrorState:i,resolvedErrorMessage:a,visibleAssistiveText:i&&a||s}}function or(e){const{id:t,hasVisibleLabel:r,ariaLabel:n,ariaLabelledby:s,visibleAssistiveText:i}=e,a=s.trim();let u=null;a?u=a:r&&t&&(u=`input-label-${t}`);let y=null;u||(y=n.trim()||null);const T=i&&t?`${t}-assistive-text`:null;return{ariaLabelledby:u,ariaLabel:y,ariaDescribedby:T}}function lr(e,t){return e?null:t}function cr(e){const{isDisabled:t,displayText:r,unit:n}=e;return t||!r?null:n?`${r} ${n}`:r}function pr(e,t=Te){return e??t}function dr(e){const{isDisabled:t,readOnly:r,parsedValue:n,fallbackValue:s,min:i,max:a}=e;if(t||r)return{canIncrement:!1,canDecrement:!1};const u=n??s;return{canDecrement:!Jt(u,i),canIncrement:!Xt(u,a)}}function mr(e){const{text:t,locale:r,decimalPrecision:n,min:s=Te}=e,i=_e(r),a=zt({text:t,decimalSeparator:i,decimalPrecision:n,allowNegative:s<0}),u=St(a,i);return{sanitized:a,parsedValue:u}}function br(e){const{displayText:t,defaultValue:r}=e;return t.trim()!==""?"noop":r!==void 0?"restoreDefault":"emitParsed"}function fr(e){const{hasVisibleLabel:t,ariaLabel:r,ariaLabelledby:n}=e;!t&&!r.trim()&&!n.trim()&&console.error(Ut)}function vr({id:e,label:t,value:r,defaultValue:n,onChange:s,onBlur:i,min:a=Te,max:u,step:y,decimalPrecision:T,locale:I=Mt,unit:be="",isError:z=!1,errorMessage:O="",assistiveTextLabel:w="",disabled:b=!1,readOnly:S=!1,rangeErrorMessages:F,ariaLabel:V="",ariaLabelledby:B="",width:fe}){const L=Zt(y),v=tr(T),ve=er(fe),[E,W]=c.useState(()=>sr({value:r,defaultValue:n,decimalPrecision:v,locale:I})),[he,$]=c.useState(!1),M=c.useRef(!1),_=c.useRef(null),K=c.useMemo(()=>_e(I),[I]),ge=ar(v),m=c.useMemo(()=>St(E,K),[E,K]),G=c.useMemo(()=>ir(m,a,u,F),[m,a,u,F]),{showErrorState:xe,resolvedErrorMessage:ye,visibleAssistiveText:j}=c.useMemo(()=>ur({hasCustomError:z,errorMessage:O,rangeErrorMessage:G,assistiveText:w}),[z,O,G,w]),{hasVisibleLabel:D,displayedLabel:R}=rr(t),P=c.useMemo(()=>or({id:e,hasVisibleLabel:D,ariaLabel:V,ariaLabelledby:B,visibleAssistiveText:j}),[e,D,V,B,j]),Y=P.ariaLabelledby??void 0,Ie=P.ariaLabel??void 0,k=P.ariaDescribedby??void 0,N=pr(n??void 0,a),{canDecrement:Q,canIncrement:J}=c.useMemo(()=>dr({isDisabled:b,readOnly:S,parsedValue:m,fallbackValue:N,min:a,max:u}),[b,S,m,N,a,u]),we=nr(b,E),Ee=lr(b,m)??void 0,Ne=cr({isDisabled:b,displayText:E,unit:be})??void 0,h=c.useCallback((o,d)=>{const g=_t(o,v,I);W(g),d.emitChange&&(s==null||s(o))},[v,I,s]),Ae=c.useCallback(()=>{s==null||s(m)},[s,m]),q=c.useCallback(()=>{const o=Ue({value:m,step:L,direction:"up",bounds:{min:a,max:u},decimalPrecision:v,fallbackValue:N});h(o,{emitChange:!0})},[m,L,a,u,v,N,h]),U=c.useCallback(()=>{const o=Ue({value:m,step:L,direction:"down",bounds:{min:a,max:u},decimalPrecision:v,fallbackValue:N});h(o,{emitChange:!0})},[m,L,a,u,v,N,h]);return c.useEffect(()=>{fr({hasVisibleLabel:D,ariaLabel:V,ariaLabelledby:B})},[D,V,B]),c.useEffect(()=>{if(r!==void 0){if(r===null){h(null,{emitChange:!1});return}Number.isFinite(r)&&h(r,{emitChange:!1})}},[r,I,v,h]),c.useEffect(()=>{if(!M.current){if(r!==void 0){M.current=!0;return}if(E!==""){M.current=!0;return}n!=null&&h(n,{emitChange:!1}),M.current=!0}},[r,n,E,h]),c.useEffect(()=>{const o=_.current;if(!o)return;const d=g=>{document.activeElement!==o||b||S||(g.preventDefault(),g.deltaY<0?q():g.deltaY>0&&U())};return o.addEventListener("wheel",d,{passive:!1}),()=>{o.removeEventListener("wheel",d)}},[b,S,q,U]),{spinbuttonRef:_,computedWidth:ve,fieldDisplayText:we,inputFocused:he,inputMode:ge,showErrorState:xe,resolvedErrorMessage:ye,visibleAssistiveText:j,displayedLabel:R,hasVisibleLabel:D,spinbuttonAriaLabelledby:Y,spinbuttonAriaLabel:Ie,spinbuttonAriaDescribedBy:k,canDecrement:Q,canIncrement:J,ariaValueNow:Ee,ariaValueText:Ne,handleInput:o=>{const d=o.target,{sanitized:g,parsedValue:X}=mr({text:d.value,locale:I,decimalPrecision:v,min:a});d.value!==g&&(d.value=g),W(g),s==null||s(X)},handleBlur:()=>{const o=br({displayText:E,defaultValue:n??void 0});o==="restoreDefault"&&n!==void 0?h(n,{emitChange:!0}):o==="emitParsed"&&Ae(),$(!1),i==null||i()},handleFocus:()=>{$(!0)},handleKeyDown:o=>{var d;if(!(b||S)){if(o.key==="ArrowUp"){o.preventDefault(),q();return}if(o.key==="ArrowDown"){o.preventDefault(),U();return}o.key==="Enter"&&((d=_.current)==null||d.blur())}},handleDecrementClick:o=>{var d;o.preventDefault(),Q&&(U(),(d=_.current)==null||d.focus())},handleIncrementClick:o=>{var d;o.preventDefault(),J&&(q(),(d=_.current)==null||d.focus())}}}const hr="_container_j9f9d_1",gr="_text_j9f9d_14",xr="_numberInputLayout_j9f9d_18",yr="_numberInputControl_j9f9d_21",Ir="_numberInputSpinbutton_j9f9d_26",wr="_numberInputUnit_j9f9d_27",Er="_inputContainer_j9f9d_40",Nr="_input_j9f9d_40",Ar="_numberInputControlDisabled_j9f9d_88",Sr="_numberInputControlReadOnly_j9f9d_88",Tr="_numberInputControlError_j9f9d_88",_r="_numberInputControlHighlighted_j9f9d_91",Dr="_numberInputValue_j9f9d_125",Cr="_numberInputSteppersRight_j9f9d_172",Vr="_numberInputStepper_j9f9d_172",f={container:hr,text:gr,numberInputLayout:xr,numberInputControl:yr,numberInputSpinbutton:Ir,numberInputUnit:wr,inputContainer:Er,input:Nr,numberInputControlDisabled:Ar,numberInputControlReadOnly:Sr,numberInputControlError:Tr,numberInputControlHighlighted:_r,numberInputValue:Dr,numberInputSteppersRight:Cr,numberInputStepper:Vr},me=c.forwardRef(({id:e,label:t,labelPosition:r="top",required:n=!1,showLabelRequirement:s=!1,appearance:i=Rt,incrementPosition:a=Pt,compactSpacing:u=!1,unit:y="",assistiveTextLabel:T="",assistiveAppearance:I="description",showAssistiveIcon:be=!1,isError:z=!1,errorMessage:O="",disabled:w=!1,readOnly:b=!1,min:S,max:F,step:V,decimalPrecision:B,locale:fe,defaultValue:L,placeholder:v="",width:ve,name:E="",rangeErrorMessages:W,value:he,onChange:$,onBlur:M,"aria-label":_="","aria-labelledby":K="",...ge},m)=>{const{spinbuttonRef:G,computedWidth:xe,fieldDisplayText:ye,inputFocused:j,inputMode:D,showErrorState:R,visibleAssistiveText:P,displayedLabel:Y,hasVisibleLabel:Ie,spinbuttonAriaLabelledby:k,spinbuttonAriaLabel:N,spinbuttonAriaDescribedBy:Q,canDecrement:J,canIncrement:we,ariaValueNow:Ee,ariaValueText:Ne,handleInput:h,handleBlur:Ae,handleFocus:q,handleKeyDown:U,handleDecrementClick:De,handleIncrementClick:Ce}=vr({id:e,label:t,value:he,defaultValue:L,onChange:$,onBlur:M,min:S,max:F,step:V,decimalPrecision:B,locale:fe,unit:y,isError:z,errorMessage:O,assistiveTextLabel:T,disabled:w,readOnly:b,rangeErrorMessages:W,ariaLabel:_,ariaLabelledby:K,width:ve}),Ve=u?"s":"m",Be=i==="brand"?{variant:"primary",appearance:"filled"}:{appearance:"neutral",hierarchy:"primary",iconAppearance:"filled"},Le=Ie?`input-label-${e}`:void 0,Me=R?"error":I,o=R||be,d=qe(f.numberInputControl,R?f.numberInputControlError:"",w?f.numberInputControlDisabled:"",b?f.numberInputControlReadOnly:"",j?f.numberInputControlHighlighted:""),g=w||b,X=(H,Se)=>l.jsx("span",{className:qe(f.numberInputStepper,`number-input-stepper--${H}`),children:l.jsx(Vt,{name:Se.name,...Be,size:Ve,compactSpacing:u,disabled:Se.disabled,tabIndex:-1,"aria-hidden":!0,onClick:Se.onClick})}),Re=X("decrement",{name:"remove",disabled:g||!J,onClick:De}),Pe=X("increment",{name:"add",disabled:g||!we,onClick:Ce});return l.jsxs("div",{className:f.container,"data-label-position":r,"data-disabled":w||void 0,"data-compact-spacing":u||void 0,style:{width:xe},children:[Y&&l.jsx("div",{className:f.text,children:l.jsx(Dt,{id:Le,label:Y,htmlFor:e,required:n,showLabelRequirement:s})}),l.jsxs("div",{className:f.inputContainer,children:[l.jsx("div",{className:f.input,"data-disabled":w||void 0,"data-read-only":b||void 0,children:l.jsxs("div",{className:f.numberInputLayout,role:"group","data-increment-position":a,"data-appearance":i,"aria-labelledby":k,"aria-label":k?void 0:N,children:[a==="sides"&&Re,l.jsx("div",{className:d,children:l.jsxs("div",{className:f.numberInputValue,children:[l.jsx("input",{...ge,ref:H=>{G.current=H,typeof m=="function"?m(H):m&&(m.current=H)},id:e,name:E||void 0,className:f.numberInputSpinbutton,type:"text",role:"spinbutton",inputMode:D,value:ye,placeholder:v,readOnly:b,disabled:w,"aria-valuemin":S,"aria-valuemax":F??void 0,"aria-valuenow":Ee,"aria-valuetext":Ne,"aria-invalid":R||void 0,"aria-readonly":b||void 0,"aria-required":n||void 0,"aria-labelledby":k,"aria-label":N,"aria-describedby":Q,onChange:h,onBlur:Ae,onFocus:q,onKeyDown:U}),y?l.jsx("span",{className:f.numberInputUnit,"aria-hidden":"true",children:y}):null]})}),a==="sides"?Pe:l.jsxs("div",{className:f.numberInputSteppersRight,children:[Re,Pe]})]})}),P?l.jsx(Ct,{id:`${e}-assistive-text`,label:P,appearance:Me,showIcon:o}):null]})]})});me.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},incrementPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},unit:{defaultValue:{value:'""',computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1},name:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreNumberInputProps","Omit"]};const Gr={title:"Composants/NumberInput/NumberInput",component:me,tags:["autodocs"],argTypes:{id:{control:"text",description:"Required. Stable id for the field, label association, and assistive text."},appearance:{control:{type:"radio"},options:["brand","neutral"]},incrementPosition:{control:{type:"radio"},options:["right","sides"]},isError:{control:"boolean"},errorMessage:{control:"text"},readOnly:{control:"boolean"},label:{control:"text",description:"Visible label. Leave empty only if aria-label (or aria-labelledby) is set."},"aria-label":{control:"text",description:"Accessible name when label is empty."},assistiveTextLabel:{control:"text",description:"Help text below the field when no error is shown."},onChange:{action:"value changed"},width:{control:"text",description:"Total width (field + steppers). Defaults to 184px when omitted."}}},x={id:"number-input-default",label:"Puissance",min:0,max:100,step:1,defaultValue:50,unit:"kW",decimalPrecision:0,locale:"fr-FR"},Z={args:x},ee={args:{...x,id:"number-input-sides",incrementPosition:"sides"}},te={args:{...x,id:"number-input-neutral",appearance:"neutral"}},re={args:{...x,id:"number-input-compact",compactSpacing:!0}},ne={args:{...x,id:"number-input-custom-width",width:"320px"}},ae={args:{...x,id:"number-input-decimals-fr",decimalPrecision:2,defaultValue:12.34,max:999}},se={args:{...x,id:"number-input-decimals-en",locale:"en-US",decimalPrecision:2,defaultValue:12.34,max:999}},ie={args:{...x,id:"number-input-disabled",disabled:!0}},ue={args:{...x,id:"number-input-readonly",readOnly:!0}},oe={args:{...x,id:"number-input-assistive",assistiveTextLabel:"Entrez une valeur entre 0 et 100, par pas de 1."},play:async({canvasElement:e})=>{const r=de(e).getByRole("spinbutton");p(r).toHaveAttribute("aria-describedby","number-input-assistive-assistive-text"),p(e.querySelector("#number-input-assistive-assistive-text")).not.toBeNull()}},le={args:{...x,id:"number-input-error",isError:!0,errorMessage:"Valeur invalide pour ce champ.",assistiveTextLabel:"Ce texte d'aide ne s'affiche pas lorsque error est activé."},play:async({canvasElement:e})=>{const t=de(e),r=t.getByRole("spinbutton");p(t.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument(),p(t.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument(),p(r).toHaveAttribute("aria-invalid","true"),p(r).toHaveAttribute("aria-describedby","number-input-error-assistive-text")}},ce={tags:["!autodocs"],args:{...x,id:"number-input-play",defaultValue:10,max:100,min:0,decimalPrecision:2,locale:"fr-FR"},render:e=>l.jsx("div",{"data-testid":"number-input",children:l.jsx(me,{...e})}),play:async({canvasElement:e})=>{const t=de(e),r=t.getByTestId("number-input"),n=r.querySelector('input[role="spinbutton"]'),s=r.querySelector(".number-input-stepper--increment button"),i=r.querySelector(".number-input-stepper--decrement button");p(n).toHaveAttribute("role","spinbutton"),p(n).toHaveAttribute("aria-valuemin","0"),p(n).toHaveAttribute("aria-valuemax","100"),p(s).toHaveAttribute("aria-hidden","true"),p(i).toHaveAttribute("aria-hidden","true"),await A.clear(n),await A.type(n,"1.251212"),await C(()=>p(n.value).toBe("1,25")),n.focus(),await A.keyboard("{ArrowUp}"),await C(()=>p(n.value).toBe("2,25")),await A.keyboard("{ArrowDown}"),await C(()=>p(n.value).toBe("1,25")),await A.clear(n),await A.type(n,"150"),await C(()=>p(t.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument()),p(n).toHaveAttribute("aria-describedby","number-input-play-assistive-text"),await A.clear(n),await A.tab(),await C(()=>p(n.value).toBe("10,00"))}},Br=()=>{const[e,t]=c.useState(3);return l.jsxs("div",{"data-testid":"number-input-controlled",children:[l.jsx(me,{id:"number-input-controlled",label:"Quantité",min:0,max:10,value:e,onChange:t}),l.jsx("button",{type:"button","data-testid":"set-from-model",onClick:()=>t(7),children:"Set from model"}),l.jsx("span",{"data-testid":"model-value",children:e})]})},pe={tags:["!autodocs"],render:()=>l.jsx(Br,{}),play:async({canvasElement:e})=>{const t=de(e),n=t.getByTestId("number-input-controlled").querySelector('input[role="spinbutton"]'),s=t.getByTestId("model-value");await C(()=>p(n.value).toBe("3")),await A.click(t.getByTestId("set-from-model")),await C(()=>{p(s).toHaveTextContent("7"),p(n.value).toBe("7")})}};var Fe,je,ke;Z.parameters={...Z.parameters,docs:{...(Fe=Z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(ke=(je=Z.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var He,ze,Oe;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-sides",
    incrementPosition: "sides"
  }
}`,...(Oe=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var We,$e,Ke;te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-neutral",
    appearance: "neutral"
  }
}`,...(Ke=($e=te.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ge,Ye,Qe;re.parameters={...re.parameters,docs:{...(Ge=re.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-compact",
    compactSpacing: true
  }
}`,...(Qe=(Ye=re.parameters)==null?void 0:Ye.docs)==null?void 0:Qe.source}}};var Je,Xe,Ze;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-custom-width",
    width: "320px"
  }
}`,...(Ze=(Xe=ne.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,rt;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-fr",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(rt=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:rt.source}}};var nt,at,st;se.parameters={...se.parameters,docs:{...(nt=se.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-en",
    locale: "en-US",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(st=(at=se.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var it,ut,ot;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-disabled",
    disabled: true
  }
}`,...(ot=(ut=ie.parameters)==null?void 0:ut.docs)==null?void 0:ot.source}}};var lt,ct,pt;ue.parameters={...ue.parameters,docs:{...(lt=ue.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-readonly",
    readOnly: true
  }
}`,...(pt=(ct=ue.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var dt,mt,bt;oe.parameters={...oe.parameters,docs:{...(dt=oe.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(bt=(mt=oe.parameters)==null?void 0:mt.docs)==null?void 0:bt.source}}};var ft,vt,ht;le.parameters={...le.parameters,docs:{...(ft=le.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(ht=(vt=le.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var gt,xt,yt;ce.parameters={...ce.parameters,docs:{...(gt=ce.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(yt=(xt=ce.parameters)==null?void 0:xt.docs)==null?void 0:yt.source}}};var It,wt,Et;pe.parameters={...pe.parameters,docs:{...(It=pe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Et=(wt=pe.parameters)==null?void 0:wt.docs)==null?void 0:Et.source}}};const Yr=["Default","Sides","Neutral","Compact","CustomWidth","DecimalsFr","DecimalsEn","Disabled","ReadOnly","WithAssistiveText","Error","InteractionPlay","Controlled"];export{re as Compact,pe as Controlled,ne as CustomWidth,se as DecimalsEn,ae as DecimalsFr,Z as Default,ie as Disabled,le as Error,ce as InteractionPlay,te as Neutral,ue as ReadOnly,ee as Sides,oe as WithAssistiveText,Yr as __namedExportsOrder,Gr as default};
