import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{w as ve,a as C,e as l,u as S}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{L as Nt,A as Ct}from"./Label-_Lstalw-.js";import{I as Dt}from"./IconButton-CJDki2nw.js";import{c as Ue}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Bt=0,Mt=1,Rt=0,qt="fr-FR",Ut="brand",Lt="right",Pt="184px",jt="Number Input requires a non-empty label or an ariaLabel when the label is omitted.",_t={between:(e,t)=>`La valeur doit être comprise entre ${e} et ${t}.`,greaterThan:e=>`La valeur doit être supérieure ou égale à ${e}.`,lessThan:e=>`La valeur doit être inférieure ou égale à ${e}.`};function Le(e){const r=new Intl.NumberFormat(e).formatToParts(1.1).find(n=>n.type==="decimal");return(r==null?void 0:r.value)===","?",":"."}function Ft(e){return e===","?".":","}function At(e,t){const r=Ft(t);return e.split(r).join(t)}function Vt(e,t,r){if(r===0){const s=e.indexOf(t);return s===-1?e:e.slice(0,s)}const n=e.indexOf(t);if(n===-1)return e;const a=e.slice(0,n+1),o=e.slice(n+1).slice(0,r);return a+o}function Ht(e){return e>="0"&&e<="9"}function kt(e,t){return[t,".",","].includes(e)}function zt(e){const{text:t,decimalSeparator:r,allowNegative:n}=e,a=Math.max(0,e.decimalPrecision??0),o=At(t,r),s={characters:"",decimalSeparatorUsed:!1,leadingMinusUsed:!1,ignoreCharactersAfterSeparator:!1};return[...o].forEach(p=>{if(s.ignoreCharactersAfterSeparator)return;if(Ht(p)){s.characters+=p;return}if(n&&p==="-"&&s.characters.length===0&&!s.leadingMinusUsed){s.leadingMinusUsed=!0,s.characters="-";return}if(kt(p,r)){if(a===0){s.ignoreCharactersAfterSeparator=!0;return}s.decimalSeparatorUsed||(s.decimalSeparatorUsed=!0,s.characters+=r)}}),Vt(s.characters,r,a)}function Pe(e,t){const r=e.trim();if(r===""||r==="-")return null;const a=At(r,t).replace(t,"."),o=Number(a);return Number.isFinite(o)?o:null}function Tt(e){return Number.isFinite(e)?Math.min(100,Math.max(0,Math.trunc(e))):0}function Wt(e){const{value:t,decimalSeparator:r}=e,n=Tt(e.decimalPrecision),a=t.toFixed(n);return r===","?a.replace(".",","):a}function je(e,t,r){return e===null?"":Wt({value:e,decimalPrecision:t,decimalSeparator:r})}function $t(e,t){const r=10**t;return Math.round(e*r)/r}function Ot(e,t){const r=10**t;return Math.floor(e*r)/r}function Kt(e,t){const r=10**t;return Math.ceil(e*r)/r}function Gt(e,t,r){let n=e;const{min:a,max:o}=t,s=r!==void 0;return a!==void 0&&n<a&&(n=s?Kt(a,r):a),o!==void 0&&n>o&&(n=s?Ot(o,r):o),n}function Fe(e){const{value:t,step:r,direction:n,bounds:a,decimalPrecision:o,fallbackValue:s}=e,p=t??s,_=n==="up"?r:-r,H=$t(p+_,o);return Gt(H,a,o)}function Yt(e){const{value:t,min:r,max:n,messages:a=_t}=e;if(t===null)return null;const o=r!==void 0,s=n!==void 0;return o&&s&&(t<r||t>n)?a.between(r,n):o&&!s&&t<r?a.greaterThan(r):s&&!o&&t>n?a.lessThan(n):null}function Qt(e,t){return e===null||t===void 0?!1:e<=t}function Jt(e,t){return e===null||t===void 0?!1:e>=t}function Xt(e){return typeof e=="number"&&Number.isFinite(e)&&e>0?e:Mt}function Zt(e){return Tt(e??Rt)}function er(e){if(e===void 0||e==="")return Pt;const t=e.toString();return t.includes("px")||t.includes("%")||t.includes("em")||t.includes("rem")?t:`${t}px`}function tr({id:e,label:t,value:r,defaultValue:n,onChange:a,onBlur:o,min:s=Bt,max:p,step:_,decimalPrecision:H,locale:D=qt,unit:k="",isError:z=!1,errorMessage:K="",assistiveTextLabel:E="",disabled:m=!1,readOnly:w=!1,rangeErrorMessages:W,ariaLabel:B="",ariaLabelledby:M="",width:xe}){const R=Xt(_),h=Zt(H),ge=er(xe),ye=Le(D),[x,G]=u.useState(()=>{const i=r!==void 0?r:n!==void 0?n:null;return i==null||!Number.isFinite(i)?"":je(i,h,ye)}),[Ie,Y]=u.useState(!1),q=u.useRef(!1),N=u.useRef(null),A=u.useMemo(()=>Le(D),[D]),U=h>0?"decimal":"numeric",f=u.useMemo(()=>Pe(x,A),[x,A]),L=u.useMemo(()=>Yt({value:f,min:s,max:p,messages:W??_t}),[f,s,p,W]),Q=z||L!==null,J=u.useMemo(()=>z?K||L||"":L||"",[z,K,L]),T=t.trim().length>0,P=T?t:"",j=u.useMemo(()=>{const i=M.trim();if(i)return i;if(T&&e)return`input-label-${e}`},[M,T,e]),X=u.useMemo(()=>j?void 0:B.trim()||void 0,[j,B]),Z=Q&&J||E,$=Z&&e?`${e}-assistive-text`:void 0,I=n??s,ee=u.useMemo(()=>m||w?!1:!Qt(f??I,s),[m,w,f,I,s]),te=u.useMemo(()=>m||w?!1:!Jt(f??I,p),[m,w,f,I,p]),we=m?"":x,Ee=m?void 0:f??void 0,Se=u.useMemo(()=>{if(!m&&x)return k?`${x} ${k}`:x},[m,x,k]),g=u.useCallback((i,d)=>{const v=i===null?"":je(i,h,A);G(v),d.emitChange&&(a==null||a(i))},[h,A,a]),_e=u.useCallback(()=>{a==null||a(f)},[a,f]),F=u.useCallback(()=>{const i=Fe({value:f,step:R,direction:"up",bounds:{min:s,max:p},decimalPrecision:h,fallbackValue:I});g(i,{emitChange:!0})},[f,R,s,p,h,I,g]),V=u.useCallback(()=>{const i=Fe({value:f,step:R,direction:"down",bounds:{min:s,max:p},decimalPrecision:h,fallbackValue:I});g(i,{emitChange:!0})},[f,R,s,p,h,I,g]);return u.useEffect(()=>{!T&&!B.trim()&&!M.trim()&&console.error(jt)},[T,B,M]),u.useEffect(()=>{if(r!==void 0){if(r===null){g(null,{emitChange:!1});return}Number.isFinite(r)&&g(r,{emitChange:!1})}},[r,D,h,g]),u.useEffect(()=>{if(!q.current){if(r!==void 0){q.current=!0;return}if(x!==""){q.current=!0;return}n!=null&&g(n,{emitChange:!1}),q.current=!0}},[r,n,x,g]),u.useEffect(()=>{const i=N.current;if(!i)return;const d=v=>{document.activeElement!==i||m||w||(v.preventDefault(),v.deltaY<0?F():v.deltaY>0&&V())};return i.addEventListener("wheel",d,{passive:!1}),()=>{i.removeEventListener("wheel",d)}},[m,w,F,V]),{spinbuttonRef:N,computedWidth:ge,fieldDisplayText:we,inputFocused:Ie,inputMode:U,showErrorState:Q,resolvedErrorMessage:J,visibleAssistiveText:Z,displayedLabel:P,hasVisibleLabel:T,spinbuttonAriaLabelledby:j,spinbuttonAriaLabel:X,spinbuttonAriaDescribedBy:$,canDecrement:ee,canIncrement:te,ariaValueNow:Ee,ariaValueText:Se,handleInput:i=>{const d=i.target,v=zt({text:d.value,decimalSeparator:A,decimalPrecision:h,allowNegative:s<0});d.value!==v&&(d.value=v),G(v);const re=Pe(v,A);a==null||a(re)},handleBlur:()=>{x.trim()===""&&(n!=null?g(n,{emitChange:!0}):_e()),Y(!1),o==null||o()},handleFocus:()=>{Y(!0)},handleKeyDown:i=>{var d;if(!(m||w)){if(i.key==="ArrowUp"){i.preventDefault(),F();return}if(i.key==="ArrowDown"){i.preventDefault(),V();return}i.key==="Enter"&&((d=N.current)==null||d.blur())}},handleDecrementClick:i=>{var d;i.preventDefault(),ee&&(V(),(d=N.current)==null||d.focus())},handleIncrementClick:i=>{var d;i.preventDefault(),te&&(F(),(d=N.current)==null||d.focus())}}}const rr="_container_j9f9d_1",nr="_text_j9f9d_14",ar="_numberInputLayout_j9f9d_18",sr="_numberInputControl_j9f9d_21",ir="_numberInputSpinbutton_j9f9d_26",or="_numberInputUnit_j9f9d_27",ur="_inputContainer_j9f9d_40",cr="_input_j9f9d_40",lr="_numberInputControlDisabled_j9f9d_88",pr="_numberInputControlReadOnly_j9f9d_88",dr="_numberInputControlError_j9f9d_88",mr="_numberInputControlHighlighted_j9f9d_91",fr="_numberInputValue_j9f9d_125",br="_numberInputSteppersRight_j9f9d_172",vr="_numberInputStepper_j9f9d_172",b={container:rr,text:nr,numberInputLayout:ar,numberInputControl:sr,numberInputSpinbutton:ir,numberInputUnit:or,inputContainer:ur,input:cr,numberInputControlDisabled:lr,numberInputControlReadOnly:pr,numberInputControlError:dr,numberInputControlHighlighted:mr,numberInputValue:fr,numberInputSteppersRight:br,numberInputStepper:vr},he=u.forwardRef(({id:e,label:t,labelPosition:r="top",required:n=!1,showLabelRequirement:a=!1,appearance:o=Ut,incrementPosition:s=Lt,compactSpacing:p=!1,unit:_="",assistiveTextLabel:H="",assistiveAppearance:D="description",showAssistiveIcon:k=!1,isError:z=!1,errorMessage:K="",disabled:E=!1,readOnly:m=!1,min:w,max:W,step:B,decimalPrecision:M,locale:xe,defaultValue:R,placeholder:h="",width:ge,name:ye="",rangeErrorMessages:x,value:G,onChange:Ie,onBlur:Y,"aria-label":q="","aria-labelledby":N="",...A},U)=>{const{spinbuttonRef:f,computedWidth:L,fieldDisplayText:Q,inputFocused:J,inputMode:T,showErrorState:P,visibleAssistiveText:j,displayedLabel:X,hasVisibleLabel:Z,spinbuttonAriaLabelledby:$,spinbuttonAriaLabel:I,spinbuttonAriaDescribedBy:ee,canDecrement:te,canIncrement:we,ariaValueNow:Ee,ariaValueText:Se,handleInput:g,handleBlur:_e,handleFocus:F,handleKeyDown:V,handleDecrementClick:Te,handleIncrementClick:Ne}=tr({id:e,label:t,value:G,defaultValue:R,onChange:Ie,onBlur:Y,min:w,max:W,step:B,decimalPrecision:M,locale:xe,unit:_,isError:z,errorMessage:K,assistiveTextLabel:H,disabled:E,readOnly:m,rangeErrorMessages:x,ariaLabel:q,ariaLabelledby:N,width:ge}),Ce=p?"s":"m",De=o==="brand"?{variant:"primary",appearance:"filled"}:{appearance:"neutral",hierarchy:"primary",iconAppearance:"filled"},Be=Z?`input-label-${e}`:void 0,Me=P?"error":D,i=P||k,d=Ue(b.numberInputControl,P?b.numberInputControlError:"",E?b.numberInputControlDisabled:"",m?b.numberInputControlReadOnly:"",J?b.numberInputControlHighlighted:""),v=E||m,re=(O,Ae)=>c.jsx("span",{className:Ue(b.numberInputStepper,`number-input-stepper--${O}`),children:c.jsx(Dt,{name:Ae.name,...De,size:Ce,compactSpacing:p,disabled:Ae.disabled,tabIndex:-1,"aria-hidden":!0,onClick:Ae.onClick})}),Re=re("decrement",{name:"remove",disabled:v||!te,onClick:Te}),qe=re("increment",{name:"add",disabled:v||!we,onClick:Ne});return c.jsxs("div",{className:b.container,"data-label-position":r,"data-disabled":E||void 0,"data-compact-spacing":p||void 0,style:{width:L},children:[X&&c.jsx("div",{className:b.text,children:c.jsx(Nt,{id:Be,label:X,htmlFor:e,required:n,showLabelRequirement:a})}),c.jsxs("div",{className:b.inputContainer,children:[c.jsx("div",{className:b.input,"data-disabled":E||void 0,"data-read-only":m||void 0,children:c.jsxs("div",{className:b.numberInputLayout,role:"group","data-increment-position":s,"data-appearance":o,"aria-labelledby":$,"aria-label":$?void 0:I,children:[s==="sides"&&Re,c.jsx("div",{className:d,children:c.jsxs("div",{className:b.numberInputValue,children:[c.jsx("input",{...A,ref:O=>{f.current=O,typeof U=="function"?U(O):U&&(U.current=O)},id:e,name:ye||void 0,className:b.numberInputSpinbutton,type:"text",role:"spinbutton",inputMode:T,value:Q,placeholder:h,readOnly:m,disabled:E,"aria-valuemin":w,"aria-valuemax":W??void 0,"aria-valuenow":Ee,"aria-valuetext":Se,"aria-invalid":P||void 0,"aria-readonly":m||void 0,"aria-required":n||void 0,"aria-labelledby":$,"aria-label":I,"aria-describedby":ee,onChange:g,onBlur:_e,onFocus:F,onKeyDown:V}),_?c.jsx("span",{className:b.numberInputUnit,"aria-hidden":"true",children:_}):null]})}),s==="sides"?qe:c.jsxs("div",{className:b.numberInputSteppersRight,children:[Re,qe]})]})}),j?c.jsx(Ct,{id:`${e}-assistive-text`,label:j,appearance:Me,showIcon:i}):null]})]})});he.__docgenInfo={description:"",methods:[],displayName:"NumberInput",props:{onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},incrementPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},unit:{defaultValue:{value:'""',computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},errorMessage:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'""',computed:!1},required:!1},name:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreNumberInputProps","Omit"]};const Rr={title:"Composants/NumberInput/NumberInput",component:he,tags:["autodocs"],argTypes:{id:{control:"text",description:"Required. Stable id for the field, label association, and assistive text."},appearance:{control:{type:"radio"},options:["brand","neutral"]},incrementPosition:{control:{type:"radio"},options:["right","sides"]},isError:{control:"boolean"},errorMessage:{control:"text"},readOnly:{control:"boolean"},label:{control:"text",description:"Visible label. Leave empty only if aria-label (or aria-labelledby) is set."},"aria-label":{control:"text",description:"Accessible name when label is empty."},assistiveTextLabel:{control:"text",description:"Help text below the field when no error is shown."},onChange:{action:"value changed"},width:{control:"text",description:"Total width (field + steppers). Defaults to 184px when omitted."}}},y={id:"number-input-default",label:"Puissance",min:0,max:100,step:1,defaultValue:50,unit:"kW",decimalPrecision:0,locale:"fr-FR"},ne={args:y},ae={args:{...y,id:"number-input-sides",incrementPosition:"sides"}},se={args:{...y,id:"number-input-neutral",appearance:"neutral"}},ie={args:{...y,id:"number-input-compact",compactSpacing:!0}},oe={args:{...y,id:"number-input-custom-width",width:"320px"}},ue={args:{...y,id:"number-input-decimals-fr",decimalPrecision:2,defaultValue:12.34,max:999}},ce={args:{...y,id:"number-input-decimals-en",locale:"en-US",decimalPrecision:2,defaultValue:12.34,max:999}},le={args:{...y,id:"number-input-disabled",disabled:!0}},pe={args:{...y,id:"number-input-readonly",readOnly:!0}},de={args:{...y,id:"number-input-assistive",assistiveTextLabel:"Entrez une valeur entre 0 et 100, par pas de 1."},play:async({canvasElement:e})=>{const r=ve(e).getByRole("spinbutton");l(r).toHaveAttribute("aria-describedby","number-input-assistive-assistive-text"),l(e.querySelector("#number-input-assistive-assistive-text")).not.toBeNull()}},me={args:{...y,id:"number-input-error",isError:!0,errorMessage:"Valeur invalide pour ce champ.",assistiveTextLabel:"Ce texte d'aide ne s'affiche pas lorsque error est activé."},play:async({canvasElement:e})=>{const t=ve(e),r=t.getByRole("spinbutton");l(t.getByText("Valeur invalide pour ce champ.")).toBeInTheDocument(),l(t.queryByText("Ce texte d'aide ne s'affiche pas lorsque error est activé.")).not.toBeInTheDocument(),l(r).toHaveAttribute("aria-invalid","true"),l(r).toHaveAttribute("aria-describedby","number-input-error-assistive-text")}},fe={tags:["!autodocs"],args:{...y,id:"number-input-play",defaultValue:10,max:100,min:0,decimalPrecision:2,locale:"fr-FR"},render:e=>c.jsx("div",{"data-testid":"number-input",children:c.jsx(he,{...e})}),play:async({canvasElement:e})=>{const t=ve(e),r=t.getByTestId("number-input"),n=r.querySelector('input[role="spinbutton"]'),a=r.querySelector(".number-input-stepper--increment button"),o=r.querySelector(".number-input-stepper--decrement button");l(n).toHaveAttribute("role","spinbutton"),l(n).toHaveAttribute("aria-valuemin","0"),l(n).toHaveAttribute("aria-valuemax","100"),l(a).toHaveAttribute("aria-hidden","true"),l(o).toHaveAttribute("aria-hidden","true"),await S.clear(n),await S.type(n,"1.251212"),await C(()=>l(n.value).toBe("1,25")),n.focus(),await S.keyboard("{ArrowUp}"),await C(()=>l(n.value).toBe("2,25")),await S.keyboard("{ArrowDown}"),await C(()=>l(n.value).toBe("1,25")),await S.clear(n),await S.type(n,"150"),await C(()=>l(t.getByText("La valeur doit être comprise entre 0 et 100.")).toBeInTheDocument()),l(n).toHaveAttribute("aria-describedby","number-input-play-assistive-text"),await S.clear(n),await S.tab(),await C(()=>l(n.value).toBe("10,00"))}},hr=()=>{const[e,t]=u.useState(3);return c.jsxs("div",{"data-testid":"number-input-controlled",children:[c.jsx(he,{id:"number-input-controlled",label:"Quantité",min:0,max:10,value:e,onChange:t}),c.jsx("button",{type:"button","data-testid":"set-from-model",onClick:()=>t(7),children:"Set from model"}),c.jsx("span",{"data-testid":"model-value",children:e})]})},be={tags:["!autodocs"],render:()=>c.jsx(hr,{}),play:async({canvasElement:e})=>{const t=ve(e),n=t.getByTestId("number-input-controlled").querySelector('input[role="spinbutton"]'),a=t.getByTestId("model-value");await C(()=>l(n.value).toBe("3")),await S.click(t.getByTestId("set-from-model")),await C(()=>{l(a).toHaveTextContent("7"),l(n.value).toBe("7")})}};var Ve,He,ke;ne.parameters={...ne.parameters,docs:{...(Ve=ne.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: defaultArgs
}`,...(ke=(He=ne.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var ze,We,$e;ae.parameters={...ae.parameters,docs:{...(ze=ae.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-sides",
    incrementPosition: "sides"
  }
}`,...($e=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:$e.source}}};var Oe,Ke,Ge;se.parameters={...se.parameters,docs:{...(Oe=se.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-neutral",
    appearance: "neutral"
  }
}`,...(Ge=(Ke=se.parameters)==null?void 0:Ke.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;ie.parameters={...ie.parameters,docs:{...(Ye=ie.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-compact",
    compactSpacing: true
  }
}`,...(Je=(Qe=ie.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Xe,Ze,et;oe.parameters={...oe.parameters,docs:{...(Xe=oe.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-custom-width",
    width: "320px"
  }
}`,...(et=(Ze=oe.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,rt,nt;ue.parameters={...ue.parameters,docs:{...(tt=ue.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-fr",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(nt=(rt=ue.parameters)==null?void 0:rt.docs)==null?void 0:nt.source}}};var at,st,it;ce.parameters={...ce.parameters,docs:{...(at=ce.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-decimals-en",
    locale: "en-US",
    decimalPrecision: 2,
    defaultValue: 12.34,
    max: 999
  }
}`,...(it=(st=ce.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var ot,ut,ct;le.parameters={...le.parameters,docs:{...(ot=le.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-disabled",
    disabled: true
  }
}`,...(ct=(ut=le.parameters)==null?void 0:ut.docs)==null?void 0:ct.source}}};var lt,pt,dt;pe.parameters={...pe.parameters,docs:{...(lt=pe.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: "number-input-readonly",
    readOnly: true
  }
}`,...(dt=(pt=pe.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var mt,ft,bt;de.parameters={...de.parameters,docs:{...(mt=de.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(bt=(ft=de.parameters)==null?void 0:ft.docs)==null?void 0:bt.source}}};var vt,ht,xt;me.parameters={...me.parameters,docs:{...(vt=me.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(xt=(ht=me.parameters)==null?void 0:ht.docs)==null?void 0:xt.source}}};var gt,yt,It;fe.parameters={...fe.parameters,docs:{...(gt=fe.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(It=(yt=fe.parameters)==null?void 0:yt.docs)==null?void 0:It.source}}};var wt,Et,St;be.parameters={...be.parameters,docs:{...(wt=be.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(St=(Et=be.parameters)==null?void 0:Et.docs)==null?void 0:St.source}}};const qr=["Default","Sides","Neutral","Compact","CustomWidth","DecimalsFr","DecimalsEn","Disabled","ReadOnly","WithAssistiveText","Error","InteractionPlay","Controlled"];export{ie as Compact,be as Controlled,oe as CustomWidth,ce as DecimalsEn,ue as DecimalsFr,ne as Default,le as Disabled,me as Error,fe as InteractionPlay,se as Neutral,pe as ReadOnly,ae as Sides,de as WithAssistiveText,qr as __namedExportsOrder,Rr as default};
