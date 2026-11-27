import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{w as z,a as y,e as l,u as m}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{L as Lt,A as qt}from"./Label-_Lstalw-.js";import{I as Pt}from"./IconButton-B1jvMDIw.js";import{c as Ue}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-DUkuUEsZ.js";import"./IconButton.module-CR53g8c2.js";const Fe=0,Ut=1,Ht=0,jt="fr-FR",kt="brand",zt="right",Ot="184px",Wt="Number Input requires a non-empty label or an ariaLabel when the label is omitted.",$t={between:(e,t)=>`La valeur doit être comprise entre ${e} et ${t}.`,greaterThan:e=>`La valeur doit être supérieure ou égale à ${e}.`,lessThan:e=>`La valeur doit être inférieure ou égale à ${e}.`};function Ve(e){const n=new Intl.NumberFormat(e).formatToParts(1.1).find(a=>a.type==="decimal");return(n==null?void 0:n.value)===","?",":"."}function Kt(e){return e===","?".":","}function Vt(e,t){const n=Kt(t);return e.split(n).join(t)}function Gt(e,t,n){if(n===0){const i=e.indexOf(t);return i===-1?e:e.slice(0,i)}const a=e.indexOf(t);if(a===-1)return e;const r=e.slice(0,a+1),s=e.slice(a+1).slice(0,n);return r+s}function Qt(e){return e>="0"&&e<="9"}function Yt(e,t){return[t,".",","].includes(e)}function Jt(e){const{text:t,decimalSeparator:n,allowNegative:a}=e,r=Math.max(0,e.decimalPrecision??0),s=Vt(t,n),i={characters:"",decimalSeparatorUsed:!1,leadingMinusUsed:!1,ignoreCharactersAfterSeparator:!1};return[...s].forEach(o=>{if(i.ignoreCharactersAfterSeparator)return;if(Qt(o)){i.characters+=o;return}if(a&&o==="-"&&i.characters.length===0&&!i.leadingMinusUsed){i.leadingMinusUsed=!0,i.characters="-";return}if(Yt(o,n)){if(r===0){i.ignoreCharactersAfterSeparator=!0;return}i.decimalSeparatorUsed||(i.decimalSeparatorUsed=!0,i.characters+=n)}}),Gt(i.characters,n,r)}function Mt(e,t){const n=e.trim();if(n===""||n==="-")return null;const r=Vt(n,t).replace(t,"."),s=Number(r);return Number.isFinite(s)?s:null}function Rt(e=Ht){return typeof e!="number"||!Number.isFinite(e)?0:Math.min(100,Math.max(0,Math.trunc(e)))}function Xt(e,t,n){if(e===null)return"";const a=Rt(t),r=e.toFixed(a);return n===","?r.replace(".",","):r}function Zt(e,t){const n=10**t;return Math.round(e*n)/n}function en(e,t){const n=10**t;return Math.floor(e*n)/n}function tn(e,t){const n=10**t;return Math.ceil(e*n)/n}function nn(e,t,n){let a=e;const{min:r,max:s}=t,i=n!==void 0;return r!==void 0&&a<r&&(a=i?tn(r,n):r),s!==void 0&&a>s&&(a=i?en(s,n):s),a}function He(e){const{value:t,step:n,direction:a,bounds:r,decimalPrecision:s,fallbackValue:i}=e,o=t??i,I=a==="up"?n:-n,F=Zt(o+I,s);return nn(F,r,s)}function an(e){const{value:t,min:n,max:a,messages:r=$t}=e;if(t===null)return null;const s=n!==void 0,i=a!==void 0;return s&&i&&(t<n||t>a)?r.between(n,a):s&&!i&&t<n?r.greaterThan(n):i&&!s&&t>a?r.lessThan(a):null}function rn(e,t){return e===null||t===void 0?!1:e<=t}function sn(e,t){return e===null||t===void 0?!1:e>=t}function un(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:Ut}function on(e){if(e===void 0||e==="")return Ot;const t=e.toString();return t.includes("px")||t.includes("%")||t.includes("em")||t.includes("rem")?t:`${t}px`}function ln(e,t){return e?"":t}function cn(e){return e>0?"decimal":"numeric"}function ge(e,t,n){if(e===null)return"";const a=Ve(n);return Xt(e,t,a)}function je(e){const{value:t,defaultValue:n,decimalPrecision:a,locale:r}=e,s=t!==void 0?t:n!==void 0?n:null;return s===null||!Number.isFinite(s)?"":ge(s,a,r)}function pn(e){const{hasCustomError:t,errorMessage:n,rangeErrorMessage:a,assistiveText:r}=e,s=t||a!==null;let i="";return t?i=n||a||"":i=a||"",{showErrorState:s,resolvedErrorMessage:i,visibleAssistiveText:s&&i||r}}function dn(e){const{id:t,hasVisibleLabel:n,ariaLabel:a,ariaLabelledby:r,visibleAssistiveText:s}=e,i=r.trim();let o=null;i?o=i:n&&t&&(o=`input-label-${t}`);let I=null;o||(I=a.trim()||null);const F=s&&t?`${t}-assistive-text`:null;return{ariaLabelledby:o,ariaLabel:I,ariaDescribedby:F}}function mn(e,t){return e?null:t}function bn(e){const{isDisabled:t,displayText:n,unit:a}=e;return t||!n?null:a?`${n} ${a}`:n}function fn(e,t=Fe){return e??t}function vn(e){const{isDisabled:t,readOnly:n,parsedValue:a,fallbackValue:r,min:s,max:i}=e;if(t||n)return{canIncrement:!1,canDecrement:!1};const o=a??r;return{canDecrement:!rn(o,s),canIncrement:!sn(o,i)}}function gn(e){const{text:t,locale:n,decimalPrecision:a,min:r=Fe}=e,s=Ve(n),i=Jt({text:t,decimalSeparator:s,decimalPrecision:a,allowNegative:r<0}),o=Mt(i,s);return{displayedValue:i,parsedValue:o}}function yn(e){const{displayText:t,defaultValue:n}=e;return t.trim()!==""?"noop":n!==void 0?"restoreDefault":"emitParsed"}function xn(e){const{hasVisibleLabel:t,ariaLabel:n,ariaLabelledby:a}=e;!t&&!n.trim()&&!a.trim()&&console.error(Wt)}function hn({id:e,label:t,value:n,defaultValue:a,onChange:r,onBlur:s,min:i=Fe,max:o,step:I,decimalPrecision:F,locale:x=jt,unit:ye="",isError:Q=!1,errorMessage:Y="",assistiveTextLabel:T="",disabled:f=!1,readOnly:N=!1,rangeErrorMessages:W,ariaLabel:q="",ariaLabelledby:P="",width:xe}){const U=un(I),b=Rt(F),he=on(xe),[E,V]=p.useState(()=>je({value:n,defaultValue:a,decimalPrecision:b,locale:x})),[we,J]=p.useState(!1),H=p.useRef(!1),M=p.useRef(null),R=p.useRef(void 0),A=n!==void 0,L=p.useMemo(()=>Ve(x),[x]),Ie=cn(b),v=p.useMemo(()=>Mt(E,L),[E,L]),X=p.useMemo(()=>an({value:v,min:i,max:o,messages:W}),[v,i,o,W]),{showErrorState:Ee,resolvedErrorMessage:Te,visibleAssistiveText:_}=p.useMemo(()=>pn({hasCustomError:Q,errorMessage:Y,rangeErrorMessage:X,assistiveText:T}),[Q,Y,X,T]),$=t.trim(),B=$.length>0,K=p.useMemo(()=>dn({id:e,hasVisibleLabel:B,ariaLabel:q,ariaLabelledby:P,visibleAssistiveText:_}),[e,B,q,P,_]),G=K.ariaLabelledby??void 0,Z=K.ariaLabel??void 0,Se=K.ariaDescribedby??void 0,C=fn(a??void 0,i),{canDecrement:ee,canIncrement:te}=p.useMemo(()=>vn({isDisabled:f,readOnly:N,parsedValue:v,fallbackValue:C,min:i,max:o}),[f,N,v,C,i,o]),Ne=ln(f,E),Ae=mn(f,v)??void 0,_e=bn({isDisabled:f,displayText:E,unit:ye})??void 0,S=p.useCallback((u,d)=>{const h=ge(u,b,x);A&&(R.current=u),V(h),d.emitChange&&(r==null||r(u))},[b,A,x,r]),Be=p.useCallback(()=>{r==null||r(v)},[r,v]),j=p.useCallback(()=>{const u=He({value:v,step:U,direction:"up",bounds:{min:i,max:o},decimalPrecision:b,fallbackValue:C});S(u,{emitChange:!0})},[v,U,i,o,b,C,S]),k=p.useCallback(()=>{const u=He({value:v,step:U,direction:"down",bounds:{min:i,max:o},decimalPrecision:b,fallbackValue:C});S(u,{emitChange:!0})},[v,U,i,o,b,C,S]);return p.useEffect(()=>{xn({hasVisibleLabel:B,ariaLabel:q,ariaLabelledby:P})},[B,q,P]),p.useEffect(()=>{if(!A){R.current=void 0;return}const u=R.current;if(!(u!==void 0&&(R.current=void 0,n===u))){if(n===null){V(ge(null,b,x));return}Number.isFinite(n)&&V(ge(n,b,x))}},[n,b,E,A,x]),p.useEffect(()=>{if(!H.current){if(n!==void 0){H.current=!0;return}if(E!==""){H.current=!0;return}V(je({defaultValue:a,decimalPrecision:b,locale:x})),H.current=!0}},[n,a,E,b,x]),p.useEffect(()=>{const u=M.current;if(!u)return;const d=h=>{document.activeElement!==u||f||N||(h.preventDefault(),h.deltaY<0?j():h.deltaY>0&&k())};return u.addEventListener("wheel",d,{passive:!1}),()=>{u.removeEventListener("wheel",d)}},[f,N,j,k]),{inputFieldRef:M,computedWidth:he,fieldDisplayText:Ne,inputFocused:we,inputMode:Ie,showErrorState:Ee,resolvedErrorMessage:Te,visibleAssistiveText:_,displayedLabel:$,hasVisibleLabel:B,inputFieldAriaLabelledby:G,inputFieldAriaLabel:Z,inputFieldAriaDescribedBy:Se,canDecrement:ee,canIncrement:te,ariaValueNow:Ae,ariaValueText:_e,handleInput:u=>{const d=u.target,{displayedValue:h,parsedValue:D}=gn({text:d.value,locale:x,decimalPrecision:b,min:i});d.value!==h&&(d.value=h),A&&(R.current=D),V(h),r==null||r(D)},handleBlur:()=>{const u=yn({displayText:E,defaultValue:a??void 0});u==="restoreDefault"&&a!==void 0?S(a,{emitChange:!0}):E.trim()!==""?S(v,{emitChange:!1}):u==="emitParsed"&&(A?S(v,{emitChange:!0}):Be()),J(!1),s==null||s()},handleFocus:()=>{J(!0)},handleKeyDown:u=>{var d;if(!(f||N)){if(u.key==="ArrowUp"){u.preventDefault(),j();return}if(u.key==="ArrowDown"){u.preventDefault(),k();return}u.key==="Enter"&&((d=M.current)==null||d.blur())}},handleDecrementClick:u=>{var d;u.preventDefault(),ee&&(k(),(d=M.current)==null||d.focus())},handleIncrementClick:u=>{var d;u.preventDefault(),te&&(j(),(d=M.current)==null||d.focus())}}}const wn="_container_1g5vo_1",In="_text_1g5vo_14",En="_numberInputLayout_1g5vo_18",Tn="_numberInputControl_1g5vo_21",Sn="_numberInputField_1g5vo_26",Nn="_numberInputUnit_1g5vo_27",An="_inputContainer_1g5vo_40",_n="_input_1g5vo_40",Bn="_numberInputControlDisabled_1g5vo_88",Cn="_numberInputControlReadOnly_1g5vo_88",Dn="_numberInputControlError_1g5vo_88",Fn="_numberInputControlHighlighted_1g5vo_91",Vn="_numberInputValue_1g5vo_125",Mn="_numberInputSteppersRight_1g5vo_172",Rn="_numberInputStepper_1g5vo_172",g={container:wn,text:In,numberInputLayout:En,numberInputControl:Tn,numberInputField:Sn,numberInputUnit:Nn,inputContainer:An,input:_n,numberInputControlDisabled:Bn,numberInputControlReadOnly:Cn,numberInputControlError:Dn,numberInputControlHighlighted:Fn,numberInputValue:Vn,numberInputSteppersRight:Mn,numberInputStepper:Rn},O=p.forwardRef(({id:e,label:t,labelPosition:n="top",required:a=!1,showLabelRequirement:r=!1,appearance:s=kt,incrementPosition:i=zt,compactSpacing:o=!1,unit:I="",assistiveTextLabel:F="",assistiveAppearance:x="description",showAssistiveIcon:ye=!1,isError:Q=!1,errorMessage:Y="",disabled:T=!1,readOnly:f=!1,min:N,max:W,step:q,decimalPrecision:P,locale:xe,defaultValue:U,placeholder:b="",width:he,name:E="",rangeErrorMessages:V,value:we,onChange:J,onBlur:H,"aria-label":M="","aria-labelledby":R="",...A},L)=>{const{inputFieldRef:Ie,computedWidth:v,fieldDisplayText:X,inputFocused:Ee,inputMode:Te,showErrorState:_,visibleAssistiveText:$,displayedLabel:B,hasVisibleLabel:K,inputFieldAriaLabelledby:G,inputFieldAriaLabel:Z,inputFieldAriaDescribedBy:Se,canDecrement:C,canIncrement:ee,ariaValueNow:te,ariaValueText:Ne,handleInput:Ae,handleBlur:_e,handleFocus:S,handleKeyDown:Be,handleDecrementClick:j,handleIncrementClick:k}=hn({id:e,label:t,value:we,defaultValue:U,onChange:J,onBlur:H,min:N,max:W,step:q,decimalPrecision:P,locale:xe,unit:I,isError:Q,errorMessage:Y,assistiveTextLabel:F,disabled:T,readOnly:f,rangeErrorMessages:V,ariaLabel:M,ariaLabelledby:R,width:he}),Me=o?"s":"m",Re=K?`input-label-${e}`:void 0,Le=_?"error":x,qe=_||ye,Pe=Ue(g.numberInputControl,_?g.numberInputControlError:"",T?g.numberInputControlDisabled:"",f?g.numberInputControlReadOnly:"",Ee?g.numberInputControlHighlighted:""),Ce=T||f,u=(D,De)=>c.jsx("span",{className:Ue(g.numberInputStepper,`number-input-stepper--${D}`),children:c.jsx(Pt,{name:De.name,appearance:s,hierarchy:"primary",iconAppearance:"filled",size:Me,compactSpacing:o,disabled:De.disabled,tabIndex:-1,"aria-hidden":!0,onClick:De.onClick})}),d=u("decrement",{name:"remove",disabled:Ce||!C,onClick:j}),h=u("increment",{name:"add",disabled:Ce||!ee,onClick:k});return c.jsxs("div",{className:g.container,"data-label-position":n,"data-disabled":T||void 0,"data-compact-spacing":o||void 0,style:{width:v},children:[B&&c.jsx("div",{className:g.text,children:c.jsx(Lt,{id:Re,label:B,htmlFor:e,required:a,showLabelRequirement:r})}),c.jsxs("div",{className:g.inputContainer,children:[c.jsx("div",{className:g.input,"data-disabled":T||void 0,"data-read-only":f||void 0,children:c.jsxs("div",{className:g.numberInputLayout,role:"group","data-increment-position":i,"data-appearance":s,"aria-labelledby":G,"aria-label":G?void 0:Z,children:[i==="sides"&&d,c.jsx("div",{className:Pe,children:c.jsxs("div",{className:g.numberInputValue,children:[c.jsx("input",{...A,ref:D=>{Ie.current=D,typeof L=="function"?L(D):L&&(L.current=D)},id:e,name:E||void 0,className:g.numberInputField,type:"text",role:"spinbutton",inputMode:Te,value:X,placeholder:b,readOnly:f,disabled:T,"aria-valuemin":N??0,"aria-valuemax":W??void 0,"aria-valuenow":te,"aria-valuetext":Ne,"aria-invalid":_||void 0,"aria-readonly":f||void 0,"aria-required":a||void 0,"aria-labelledby":G,"aria-label":Z,"aria-describedby":Se,onChange:Ae,onBlur:_e,onFocus:S,onKeyDown:Be}),I?c.jsx("span",{className:g.numberInputUnit,"aria-hidden":"true",children:I}):null]})}),i==="sides"?h:c.jsxs("div",{className:g.numberInputSteppersRight,children:[d,h]})]})}),$?c.jsx(qt,{id:`${e}-assistive-text`,label:$,appearance:Le,showIcon:qe}):null]})]})});O.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},incrementPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},unit:{defaultValue:{value:'""',computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1},name:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreNumberInputProps","Omit"]};const ea={title:"Composants/NumberInput/NumberInput",component:O,tags:["autodocs"],argTypes:{id:{control:"text",description:"Required. Stable id for the field, label association, and assistive text."},appearance:{control:{type:"radio"},options:["brand","neutral"]},incrementPosition:{control:{type:"radio"},options:["right","sides"]},isError:{control:"boolean"},errorMessage:{control:"text"},readOnly:{control:"boolean"},label:{control:"text",description:"Visible label. Leave empty only if aria-label (or aria-labelledby) is set."},"aria-label":{control:"text",description:"Accessible name when label is empty."},assistiveTextLabel:{control:"text",description:"Help text below the field when no error is shown."},onChange:{action:"value changed"},width:{control:"text",description:"Total width (field + steppers). Defaults to 184px when omitted."}}},w={id:"number-input-default",label:"Puissance",min:0,max:100,step:1,defaultValue:50,unit:"kW",decimalPrecision:0,locale:"fr-FR"},ne={args:w},ae={args:{...w,id:"number-input-sides",incrementPosition:"sides"}},re={args:{...w,id:"number-input-neutral",appearance:"neutral"}},ie={args:{...w,id:"number-input-compact",compactSpacing:!0}},se={args:{...w,id:"number-input-custom-width",width:"320px"}},ue={args:{...w,id:"number-input-decimals-fr",decimalPrecision:2,defaultValue:12.34,max:999}},oe={args:{...w,id:"number-input-decimals-en",locale:"en-US",decimalPrecision:2,defaultValue:12.34,max:999}},le={args:{...w,id:"number-input-disabled",disabled:!0}},ce={args:{...w,id:"number-input-readonly",readOnly:!0}},pe={args:{...w,id:"number-input-assistive",assistiveTextLabel:"Entrez une valeur entre 0 et 100, par pas de 1."},play:async({canvasElement:e})=>{const n=z(e).getByRole("spinbutton");l(n).toHaveAttribute("aria-describedby","number-input-assistive-assistive-text"),l(e.querySelector("#number-input-assistive-assistive-text")).not.toBeNull()}},de={args:{...w,id:"number-input-error",isError:!0,errorMessage:"Valeur invalide pour ce champ.",assistiveTextLabel:"Ce texte d'aide ne s'affiche pas lorsque error est activé."},play:async({canvasElement:e})=>{const t=z(e),n=t.getByRole("spinbutton");l(t.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument(),l(t.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument(),l(n).toHaveAttribute("aria-invalid","true"),l(n).toHaveAttribute("aria-describedby","number-input-error-assistive-text")}},me={tags:["!autodocs"],args:{...w,id:"number-input-play",defaultValue:10,max:100,min:0,decimalPrecision:2,locale:"fr-FR"},render:e=>c.jsx("div",{"data-testid":"number-input",children:c.jsx(O,{...e})}),play:async({canvasElement:e})=>{const t=z(e),n=t.getByTestId("number-input"),a=n.querySelector('input[role="spinbutton"]'),r=n.querySelector(".number-input-stepper--increment button"),s=n.querySelector(".number-input-stepper--decrement button");l(a).toHaveAttribute("role","spinbutton"),l(a).toHaveAttribute("aria-valuemin","0"),l(a).toHaveAttribute("aria-valuemax","100"),l(r).toHaveAttribute("aria-hidden","true"),l(s).toHaveAttribute("aria-hidden","true"),await m.clear(a),await m.type(a,"1.251212"),await y(()=>l(a.value).toBe("1,25")),a.focus(),await m.keyboard("{ArrowUp}"),await y(()=>l(a.value).toBe("2,25")),await m.keyboard("{ArrowDown}"),await y(()=>l(a.value).toBe("1,25")),await m.clear(a),await m.type(a,"150"),await y(()=>l(t.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument()),l(a).toHaveAttribute("aria-describedby","number-input-play-assistive-text"),await m.clear(a),await m.tab(),await y(()=>l(a.value).toBe("10,00"))}},Ln=()=>{const[e,t]=p.useState(3);return c.jsxs("div",{"data-testid":"number-input-controlled",children:[c.jsx(O,{id:"number-input-controlled",label:"Quantité",min:0,max:99,value:e,onChange:t}),c.jsx("button",{type:"button","data-testid":"set-from-model",onClick:()=>t(7),children:"Set from model"}),c.jsx("span",{"data-testid":"model-value",children:e})]})},qn=()=>c.jsx("div",{"data-testid":"number-input-rejected-controlled",children:c.jsx(O,{id:"number-input-rejected-controlled",label:"Quantité",min:0,max:10,value:3,onChange:()=>{}})}),Pn=()=>{const[e,t]=p.useState(null);return c.jsx("div",{"data-testid":"number-input-decimal-controlled",children:c.jsx(O,{id:"number-input-decimal-controlled",label:"Quantité",min:0,max:100,decimalPrecision:2,value:e,onChange:t})})},be={tags:["!autodocs"],render:()=>c.jsx(Ln,{}),play:async({canvasElement:e})=>{const t=z(e),a=t.getByTestId("number-input-controlled").querySelector('input[role="spinbutton"]'),r=t.getByTestId("model-value");await y(()=>l(a.value).toBe("3")),await m.click(t.getByTestId("set-from-model")),await y(()=>{l(r).toHaveTextContent("7"),l(a.value).toBe("7")})}},fe={tags:["!autodocs"],render:()=>c.jsx(qn,{}),play:async({canvasElement:e})=>{const n=z(e).getByTestId("number-input-rejected-controlled"),a=n.querySelector('input[role="spinbutton"]'),r=n.querySelector(".number-input-stepper--increment button");await y(()=>l(a.value).toBe("3")),await m.click(a),await m.type(a,"4"),await y(()=>l(a.value).toBe("3")),await m.click(r),await y(()=>l(a.value).toBe("3"))}},ve={tags:["!autodocs"],render:()=>c.jsx(Pn,{}),play:async({canvasElement:e})=>{const n=z(e).getByRole("spinbutton");await y(()=>l(n.value).toBe("")),await m.type(n,"1"),await y(()=>l(n.value).toBe("1")),await m.type(n,"2"),await y(()=>l(n.value).toBe("12")),await m.tab(),await y(()=>l(n.value).toBe("12,00")),await m.click(n),await m.clear(n),await m.type(n,"34"),await y(()=>l(n.value).toBe("34"))}};var ke,ze,Oe;ne.parameters={...ne.parameters,docs:{...(ke=ne.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(Oe=(ze=ne.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var We,$e,Ke;ae.parameters={...ae.parameters,docs:{...(We=ae.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-sides",
    incrementPosition: "sides"
  }
}`,...(Ke=($e=ae.parameters)==null?void 0:$e.docs)==null?void 0:Ke.source}}};var Ge,Qe,Ye;re.parameters={...re.parameters,docs:{...(Ge=re.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-neutral",
    appearance: "neutral"
  }
}`,...(Ye=(Qe=re.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Je,Xe,Ze;ie.parameters={...ie.parameters,docs:{...(Je=ie.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-compact",
    compactSpacing: true
  }
}`,...(Ze=(Xe=ie.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var et,tt,nt;se.parameters={...se.parameters,docs:{...(et=se.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-custom-width",
    width: "320px"
  }
}`,...(nt=(tt=se.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,it;ue.parameters={...ue.parameters,docs:{...(at=ue.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-fr",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(it=(rt=ue.parameters)==null?void 0:rt.docs)==null?void 0:it.source}}};var st,ut,ot;oe.parameters={...oe.parameters,docs:{...(st=oe.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-en",
    locale: "en-US",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(ot=(ut=oe.parameters)==null?void 0:ut.docs)==null?void 0:ot.source}}};var lt,ct,pt;le.parameters={...le.parameters,docs:{...(lt=le.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-disabled",
    disabled: true
  }
}`,...(pt=(ct=le.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var dt,mt,bt;ce.parameters={...ce.parameters,docs:{...(dt=ce.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-readonly",
    readOnly: true
  }
}`,...(bt=(mt=ce.parameters)==null?void 0:mt.docs)==null?void 0:bt.source}}};var ft,vt,gt;pe.parameters={...pe.parameters,docs:{...(ft=pe.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(gt=(vt=pe.parameters)==null?void 0:vt.docs)==null?void 0:gt.source}}};var yt,xt,ht;de.parameters={...de.parameters,docs:{...(yt=de.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(ht=(xt=de.parameters)==null?void 0:xt.docs)==null?void 0:ht.source}}};var wt,It,Et;me.parameters={...me.parameters,docs:{...(wt=me.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Et=(It=me.parameters)==null?void 0:It.docs)==null?void 0:Et.source}}};var Tt,St,Nt;be.parameters={...be.parameters,docs:{...(Tt=be.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Nt=(St=be.parameters)==null?void 0:St.docs)==null?void 0:Nt.source}}};var At,_t,Bt;fe.parameters={...fe.parameters,docs:{...(At=fe.parameters)==null?void 0:At.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: () => <RejectedControlledNumberInputHost />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const host = canvas.getByTestId("number-input-rejected-controlled");
    const input = host.querySelector('input[role="spinbutton"]') as HTMLInputElement;
    const incrementStepper = host.querySelector(".number-input-stepper--increment button") as HTMLButtonElement;
    await waitFor(() => expect(input.value).toBe("3"));
    await userEvent.click(input);
    await userEvent.type(input, "4");
    await waitFor(() => expect(input.value).toBe("3"));
    await userEvent.click(incrementStepper);
    await waitFor(() => expect(input.value).toBe("3"));
  }
}`,...(Bt=(_t=fe.parameters)==null?void 0:_t.docs)==null?void 0:Bt.source}}};var Ct,Dt,Ft;ve.parameters={...ve.parameters,docs:{...(Ct=ve.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  render: () => <DecimalControlledNumberInputHost />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("spinbutton") as HTMLInputElement;
    await waitFor(() => expect(input.value).toBe(""));
    await userEvent.type(input, "1");
    await waitFor(() => expect(input.value).toBe("1"));
    await userEvent.type(input, "2");
    await waitFor(() => expect(input.value).toBe("12"));
    await userEvent.tab();
    await waitFor(() => expect(input.value).toBe("12,00"));
    await userEvent.click(input);
    await userEvent.clear(input);
    await userEvent.type(input, "34");
    await waitFor(() => expect(input.value).toBe("34"));
  }
}`,...(Ft=(Dt=ve.parameters)==null?void 0:Dt.docs)==null?void 0:Ft.source}}};const ta=["Default","Sides","Neutral","Compact","CustomWidth","DecimalsFr","DecimalsEn","Disabled","ReadOnly","WithAssistiveText","Error","InteractionPlay","Controlled","RejectedControlled","EditableControlledDecimal"];export{ie as Compact,be as Controlled,se as CustomWidth,oe as DecimalsEn,ue as DecimalsFr,ne as Default,le as Disabled,ve as EditableControlledDecimal,de as Error,me as InteractionPlay,re as Neutral,ce as ReadOnly,fe as RejectedControlled,ae as Sides,pe as WithAssistiveText,ta as __namedExportsOrder,ea as default};
