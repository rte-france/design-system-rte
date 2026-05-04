import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{a as B,b as F,c as Ne,d as xe,B as Me,D as De,h as Ce,i as ct,j as te}from"./keyboard-test.constants-B5qFTNXN.js";import{T as v,a as ne,b as Pt,c as Ut,d as qt,e as me}from"./timepicker.constants-CeHYsdFC.js";import{u as g,e as N}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as ut}from"./testing.utils-mIZIUNbM.js";import{u as Lt}from"./useFocusTrap-hirPcXE8.js";import{R as Vt,A as jt}from"./RequiredIndicator-Cmvl3eZq.js";import{B as Kt}from"./BaseDropdown-Bc55FiNe.js";import{I as ge}from"./Icon-Bc7wfgCv.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-CAnB1cKs.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function Bt(e){let t=0;const a=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{t=0,e()})});return()=>{cancelAnimationFrame(a),t!==0&&cancelAnimationFrame(t)}}const D=e=>e.toString().padStart(2,"0"),L=e=>{const t=e[v.HOURS].toString().length,a=3,o=t+a,c=e[v.MINUTES].toString().length,u=o+c+a;return{[v.HOURS]:[0,t],[v.MINUTES]:[o,o+c],[v.SECONDS]:[u,u+e[v.SECONDS].toString().length]}},Ft=e=>ne[Math.max(ne.indexOf(e)-1,0)],Gt=(e,t)=>t===v.HOURS?!!e[v.MINUTES]:t===v.MINUTES?!!e[v.SECONDS]:!0,Wt=(e,t)=>{let a=e[v.HOURS];return(t!==v.HOURS||e[v.MINUTES])&&(a+=" : "+e[v.MINUTES]),(t===v.SECONDS||e[v.SECONDS])&&(a+=" : "+e[v.SECONDS]),a},G={"rte-base-input-picker":"_rte-base-input-picker_kgxj8_1","rte-base-input-picker-input":"_rte-base-input-picker-input_kgxj8_32","rte-base-input-picker-button":"_rte-base-input-picker-button_kgxj8_38","rte-base-input-picker-icon":"_rte-base-input-picker-icon_kgxj8_41"},lt=({id:e,value:t,readOnly:a,onChange:o,onFocus:c,onKeyDown:u,onMouseUp:y,onOpenPicker:E,isFocused:x,pickerInputRef:R,pickerRef:M,ariaLabelledBy:b,isError:T,disabled:h,openButtonAriaLabel:C})=>{const _=!h&&!a,A=!h&&!a&&x;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:G["rte-base-input-picker"],ref:M,"data-focused":A??void 0,tabIndex:-1,onClick:_?c:void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0,"data-is-read-only":a||void 0,children:[s.jsx("input",{id:e,"aria-labelledby":b,readOnly:a,ref:R,className:G["rte-base-input-picker-input"],value:t,onFocus:_?c:void 0,onKeyDown:_?u:void 0,onMouseUp:_?y:void 0,disabled:h,onChange:o}),s.jsx("button",{onClick:_?E:void 0,className:G["rte-base-input-picker-button"],"aria-label":C??"Open picker",disabled:h,children:s.jsx(ge,{name:"clock",appearance:"outlined",className:G["rte-base-input-picker-icon"],"aria-hidden":"true","data-is-focused":A||void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0})})]})})};lt.__docgenInfo={description:"",methods:[],displayName:"BaseInputPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},pickerInputRef:{required:!1,tsType:{name:"union",raw:"React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void)",elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"unknown"}]},description:""},pickerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onMouseUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},openButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["BaseInput"]};var d=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(d||{});const ae=0,Yt={hh:"",mm:"",ss:""},re=[d.HOURS,d.MINUTES,d.SECONDS],Ae={[d.HOURS]:23,[d.MINUTES]:59,[d.SECONDS]:59};d.HOURS+"",d.MINUTES+"",d.SECONDS+"";const $t=(e,t,a)=>{const c=(isNaN(e)?ae:e)+a,u=c>t?ae:c;return se(u)},zt=(e,t,a)=>{const c=(isNaN(e)?ae:e)-a;return c<0?se(t):se(c)},se=e=>e.toString().padStart(2,"0"),Xt=e=>re[Math.min(re.indexOf(e)+1,2)],Jt=e=>re[Math.max(re.indexOf(e)-1,0)],Qt=()=>{const[e,t]=i.useState(d.HOURS),a=Xt(e),o=Jt(e),c=i.useCallback(()=>{t(a)},[a]),u=i.useCallback(()=>{t(o)},[o]);return{moveToNextSegment:c,moveToPreviousSegment:u,setActiveTimeSegment:t,activeTimeSegment:e,prevSegment:o,nextSegment:a}},Zt=e=>{const[t,a]=i.useState(null),o=i.useRef(null);return i.useEffect(()=>{e?Bt(()=>{a(o.current)}):a(null)},[e]),{timePickerDropdownElement:t,timePickerDropdownRef:o}},en=/^\d*$/,tn=(e,t)=>{const[a,o]=i.useState(e??Yt),{hourIncrement:c=1,minuteIncrement:u=1,secondIncrement:y=1}=t??{},E=(p,S)=>{S.length>2||!en.test(S)||o(I=>({...I,[p]:S}))},x=i.useCallback(p=>{const S=p.target.value;E(d.HOURS,S)},[]),R=i.useCallback(p=>{const S=p.target.value;E(d.MINUTES,S)},[]),M=i.useCallback(p=>{const S=p.target.value;E(d.SECONDS,S)},[]),b=i.useCallback((p,S)=>{if(a[p]==="")E(p,se(ae));else{const I=$t(Number(a[p]),Ae[p],S);E(p,I)}},[a]),T=i.useCallback((p,S)=>{const I=zt(Number(a[p]),Ae[p],S);E(p,I)},[a]),h=i.useCallback(()=>{b(d.SECONDS,y)},[y,b]),C=i.useCallback(()=>{T(d.SECONDS,y)},[y,T]),_=i.useCallback(()=>{b(d.MINUTES,u)},[u,b]),A=i.useCallback(()=>{T(d.MINUTES,u)},[u,T]),V=i.useCallback(()=>{b(d.HOURS,c)},[c,b]),ie=i.useCallback(()=>{T(d.HOURS,c)},[c,T]);return{internalTimeValue:a,updateTimeSegment:E,handleOnChangeHours:x,handleOnChangeMinutes:R,handleOnChangeSeconds:M,increaseSeconds:h,decreaseSeconds:C,increaseMinutes:_,decreaseMinutes:A,increaseHours:V,decreaseHours:ie}},de={"rte-time-picker-label":"_rte-time-picker-label_1wpg8_1","rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},U={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},ee=i.forwardRef(({value:e,onChange:t,increase:a,decrease:o,onKeyDown:c,unit:u,withSeparator:y,readOnly:E},x)=>{const R=T=>{E||c==null||c(T)},M=()=>{E||a==null||a()},b=()=>{E||o==null||o()};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:U["rte-time-picker-segment-container"],children:[s.jsxs("div",{className:U["rte-time-picker-segment-controls"],children:[s.jsx("button",{className:U["rte-time-picker-segment-controls-button"],onClick:M,tabIndex:-1,type:"button","aria-label":`Increase ${u==="h"?"hours":u==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),s.jsx("input",{ref:x,type:"text",value:e??"00",onChange:t,onKeyDown:R,tabIndex:E?-1:0,className:U["rte-time-picker-segment-input"],readOnly:E}),s.jsx("button",{className:U["rte-time-picker-segment-controls-button"],onClick:b,tabIndex:-1,type:"button","aria-label":`Decrease ${u==="h"?"hours":u==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),s.jsx("span",{children:u})]}),y&&s.jsx("span",{className:U["rte-time-picker-segment-separator"],children:":"})]})});ee.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const nn=/^\d*$/,[pe,fe,an]=ne,Ee=i.forwardRef(({id:e,labelId:t,value:a,onChange:o,label:c,showLabel:u,required:y=!1,showLabelRequirement:E=!1,readOnly:x,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,isHourReadOnly:_=!1,isMinuteReadOnly:A=!1,isSecondReadOnly:V=!1,hourIncrement:ie=1,minuteIncrement:p=1,secondIncrement:S=1},I)=>{var we;const[P,oe]=i.useState(!1),[mt,ve]=i.useState(!1),Se=i.useRef(null),H=i.useRef(null),{timePickerDropdownElement:dt,timePickerDropdownRef:pt}=Zt(P),{moveToNextSegment:q,moveToPreviousSegment:Te,setActiveTimeSegment:ce,activeTimeSegment:l,prevSegment:ft,nextSegment:gt}=Qt(),{internalTimeValue:f,updateTimeSegment:w,handleOnChangeHours:Et,handleOnChangeMinutes:vt,handleOnChangeSeconds:St,increaseMinutes:be,decreaseMinutes:he,increaseSeconds:ke,decreaseSeconds:ye,increaseHours:Re,decreaseHours:_e}=tn(a,{hourIncrement:ie,minuteIncrement:p,secondIncrement:S});Lt(dt,P);const Tt=Wt(f,l),bt=P&&!C,ht=n=>{H.current=n,typeof I=="function"?I(n):I&&(I.current=n)},kt=()=>l===pe?_:l===fe?A:V,yt=n=>{const r=n.key;r===B?(n.preventDefault(),ke()):r===F&&(n.preventDefault(),ye())},Rt=n=>{const r=n.key;r===B?(n.preventDefault(),be()):r===F&&(n.preventDefault(),he())},_t=n=>{const r=n.key;r===B?(n.preventDefault(),Re()):r===F&&(n.preventDefault(),_e())},It=n=>{(n===Me||n===De)&&Ot(),n===Ne&&(Te(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const r=L(f)[ft];(m=H.current)==null||m.setSelectionRange(r[0],r[1])})})),n===xe&&Gt(f,l)&&(q(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const r=L(f)[gt];(m=H.current)==null||m.setSelectionRange(r[0],r[1])})}))},wt=n=>{const r=n.key;if([B,F,Ne,xe,Me,De].includes(r)){n.preventDefault(),It(r);return}if(!nn.test(r)){j();return}if(kt()){j();return}else{const m=f[l];if(m.length>=2)Nt(m,D(Number(r)));else{const O=m+r,Oe=qt[l];if(m.length===0&&Number(r)>Oe)w(l,D(Number(r))),q();else if(O.length===2){const K=D(Math.min(Number(O),me[l]));w(l,K),q()}else w(l,D(Number(r)))}}},Ot=()=>{if(f[l]!=="")w(l,"");else{const n=Ft(l);n!==l&&(w(n,""),Te())}},Nt=(n,r)=>{var K;const m=L(f)[l][0];if((((K=H.current)==null?void 0:K.selectionStart)??0)-m===0)if(n[0]==="0"){const ue=n[1]+r[1],le=D(Math.min(Number(ue),me[l]));w(l,le),q()}else w(l,r);else{const ue=Number(n[0]+r),le=D(Math.min(ue,me[l]));w(l,le),q()}},xt=()=>{var O;P&&oe(!1);const n=((O=H.current)==null?void 0:O.selectionStart)??0,r=L(f),m=1;n<=r[pe][m]?ce(pe):n<=r[fe][m]?ce(fe):ce(an)},Ie=()=>{var n;C||(ve(!0),(n=H.current)==null||n.focus())},Mt=()=>{ve(!1)},Dt=()=>{Ie()},Ct=()=>{Object.values(f).forEach((n,r)=>{const m=ne[r],O=Number(n);isNaN(O)?w(m,D(0)):w(m,D(O))})},At=()=>{Ie(),oe(n=>!n),Ct()},Ht=()=>{oe(!1),Mt()},j=i.useCallback(()=>{const r=L(f)[l];requestAnimationFrame(()=>{var m;(m=H.current)==null||m.setSelectionRange(r[0],r[1])})},[l,f]);return i.useEffect(()=>{j()},[j]),i.useEffect(()=>{o==null||o(f)},[f,o]),x&&(f.hh===""||f.mm===""||f.ss==="")?(console.warn(Pt),null):h&&!R?(console.warn(Ut),null):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:de["rte-time-picker-header"],children:u&&s.jsxs("label",{htmlFor:e,id:t,className:de["rte-time-picker-label"],children:[c,s.jsx(Vt,{required:y,showLabelRequirement:E})]})}),s.jsx(Kt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Ht,offset:8,style:{width:(we=Se.current)==null?void 0:we.offsetWidth},trigger:s.jsx(lt,{id:e,ariaLabelledBy:t,"aria-label":u?void 0:c,value:Tt,readOnly:x,onFocus:Dt,onKeyDown:wt,onMouseUp:xt,pickerInputRef:ht,pickerRef:Se,isFocused:mt,onOpenPicker:At,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:bt,children:s.jsxs("div",{className:de["rte-time-picker-dropdown"],ref:pt,children:[s.jsx(ee,{value:f.hh,onChange:Et,onKeyDown:_t,increase:Re,decrease:_e,unit:"h",withSeparator:!0,readOnly:_}),s.jsx(ee,{value:f.mm,onChange:vt,onKeyDown:Rt,increase:be,decrease:he,unit:"m",withSeparator:!0,readOnly:A}),s.jsx(ee,{value:f.ss,onChange:St,onKeyDown:yt,increase:ke,decrease:ye,unit:"s",readOnly:V})]})}),R&&!P&&s.jsx(jt,{label:R,appearance:h?"error":M,showIcon:b,href:T})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const wn={title:"Composants/TimePicker/TimePicker",component:Ee,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},k={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[t,a]=i.useState({hh:"",mm:"",ss:""});return s.jsx(s.Fragment,{children:s.jsx(Ee,{...e,id:"time-picker",value:t,onChange:a})})}},W={args:{...k.args,disabled:!0}},Y={args:{...k.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},$={args:{...k.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},z={args:{...k.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},X={args:{...k.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},J={args:{...k.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Q={tags:["skip-ci"],args:{...k.args,minuteIncrement:15},play:async({canvasElement:e})=>{await ut(e);const t=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(ct),N(t.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(te),N(t.value).toBe("00 : 15 : 00"),await g.keyboard(te),N(t.value).toBe("00 : 30 : 00")}},Z={tags:["skip-ci"],args:{...k.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await ut(e);const t=e.querySelector("input");await g.tab(),await g.keyboard("a"),N(t.value).toBe("12 : 30 : 45"),await g.keyboard(Ce),await g.keyboard("3"),N(t.value).toBe("12 : 03 : 45"),await g.keyboard("2"),N(t.value).toBe("12 : 32 : 45"),await g.keyboard(Ce),await g.keyboard("2"),N(t.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(ct),await g.keyboard(te),N(t.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(te),N(t.value).toBe("13 : 33 : 02")}};var He,Pe,Ue;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    id: "time-picker",
    label: "Label",
    labelId: "time-picker-label",
    showLabel: true,
    required: true,
    showLabelRequirement: true,
    assistiveTextLabel: "Assistive text",
    assistiveAppearance: "description",
    showAssistiveIcon: true,
    assistiveTextLink: "https://www.example.com",
    isError: false,
    disabled: false,
    readOnly: false,
    isHourReadOnly: false,
    isMinuteReadOnly: false,
    isSecondReadOnly: false
  },
  render: args => {
    const [value, setValue] = useState<TimeFormat>({
      hh: "",
      mm: "",
      ss: ""
    });
    return <>
        <TimePicker {...args} id="time-picker" value={value} onChange={setValue} />
      </>;
  }
}`,...(Ue=(Pe=k.parameters)==null?void 0:Pe.docs)==null?void 0:Ue.source}}};var qe,Le,Ve;W.parameters={...W.parameters,docs:{...(qe=W.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Ve=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var je,Ke,Be;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Be=(Ke=Y.parameters)==null?void 0:Ke.docs)==null?void 0:Be.source}}};var Fe,Ge,We;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(We=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Ye,$e,ze;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(ze=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Xe,Je,Qe;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(Qe=(Je=X.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,rt;Q.parameters={...Q.parameters,docs:{...(nt=Q.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    minuteIncrement: 15
  },
  play: async ({
    canvasElement
  }) => {
    await focusElementBeforeComponent(canvasElement);
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(input.value).toBe("00 : 00 : 00");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00 : 15 : 00");
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00 : 30 : 00");
  }
}`,...(rt=(at=Q.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var st,it,ot;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  },
  play: async ({
    canvasElement
  }) => {
    await focusElementBeforeComponent(canvasElement);
    const input = canvasElement.querySelector("input") as HTMLInputElement;
    await userEvent.tab();
    await userEvent.keyboard("a");
    expect(input.value).toBe("12 : 30 : 45");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("3");
    expect(input.value).toBe("12 : 03 : 45");
    await userEvent.keyboard("2");
    expect(input.value).toBe("12 : 32 : 45");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("2");
    expect(input.value).toBe("12 : 32 : 02");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13 : 32 : 02");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13 : 33 : 02");
  }
}`,...(ot=(it=Z.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const On=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{k as Default,W as Disabled,$ as Error,z as HourReadOnly,Z as KeyboardInteractions,X as MinuteReadOnly,Y as ReadOnly,J as SecondReadOnly,Q as WithIncrement,On as __namedExportsOrder,wn as default};
