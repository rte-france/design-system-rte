import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{a as K,b as F,c as Ne,d as xe,B as Me,D as De,h as Ce,i as ut,j as te}from"./keyboard-test.constants-B5qFTNXN.js";import{T as E,a as ne,b as Pt,c as me}from"./timepicker.constants-1x0nd2Iq.js";import{u as g,e as N}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as ct}from"./testing.utils-mIZIUNbM.js";import{u as At}from"./useFocusTrap-hirPcXE8.js";import{R as Ut,A as Lt}from"./RequiredIndicator-CnxxEbTK.js";import{B as Vt}from"./BaseDropdown-Bc55FiNe.js";import{I as ge}from"./Icon-DOkBvtOM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function jt(e){let t=0;const a=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{t=0,e()})});return()=>{cancelAnimationFrame(a),t!==0&&cancelAnimationFrame(t)}}const D=e=>e.toString().padStart(2,"0"),L=e=>{const t=e[E.HOURS].toString().length,a=3,o=t+a,u=e[E.MINUTES].toString().length,c=o+u+a;return{[E.HOURS]:[0,t],[E.MINUTES]:[o,o+u],[E.SECONDS]:[c,c+e[E.SECONDS].toString().length]}},Bt=e=>ne[Math.max(ne.indexOf(e)-1,0)],Kt=(e,t)=>t===E.HOURS?!!e[E.MINUTES]:t===E.MINUTES?!!e[E.SECONDS]:!0,Ft=(e,t)=>{let a=e[E.HOURS];return(t!==E.HOURS||e[E.MINUTES])&&(a+=" : "+e[E.MINUTES]),(t===E.SECONDS||e[E.SECONDS])&&(a+=" : "+e[E.SECONDS]),a},G={"rte-base-input-picker":"_rte-base-input-picker_zk6tf_1","rte-base-input-picker-input":"_rte-base-input-picker-input_zk6tf_32","rte-base-input-picker-button":"_rte-base-input-picker-button_zk6tf_38","rte-base-input-picker-icon":"_rte-base-input-picker-icon_zk6tf_41"},lt=({id:e,value:t,readOnly:a,onChange:o,onFocus:u,onKeyDown:c,onMouseUp:k,onOpenPicker:v,isFocused:x,pickerInputRef:R,pickerRef:M,ariaLabelledBy:b,isError:T,disabled:h,openButtonAriaLabel:C})=>{const w=!h&&!a,q=!h&&!a&&x;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:G["rte-base-input-picker"],ref:M,"data-focused":q??void 0,tabIndex:-1,onClick:w?u:void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0,"data-is-read-only":a||void 0,children:[s.jsx("input",{id:e,"aria-labelledby":b,readOnly:a,ref:R,className:G["rte-base-input-picker-input"],value:t,onFocus:w?u:void 0,onKeyDown:w?c:void 0,onMouseUp:w?k:void 0,disabled:h,onChange:o}),s.jsx("button",{onClick:w?v:void 0,className:G["rte-base-input-picker-button"],"aria-label":C??"Open picker",disabled:h,children:s.jsx(ge,{name:"clock",appearance:"outlined",className:G["rte-base-input-picker-icon"],"aria-hidden":"true","data-is-focused":q||void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0})})]})})};lt.__docgenInfo={description:"",methods:[],displayName:"BaseInputPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},pickerInputRef:{required:!1,tsType:{name:"union",raw:"React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void)",elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"unknown"}]},description:""},pickerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onMouseUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},openButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["BaseInput"]};var d=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(d||{});const ae=0,Gt={hh:"",mm:"",ss:""},re=[d.HOURS,d.MINUTES,d.SECONDS],qe={[d.HOURS]:23,[d.MINUTES]:59,[d.SECONDS]:59};d.HOURS+"",d.MINUTES+"",d.SECONDS+"";const Wt=(e,t,a)=>{const u=(isNaN(e)?ae:e)+a,c=u>t?ae:u;return se(c)},Yt=(e,t,a)=>{const u=(isNaN(e)?ae:e)-a;return u<0?se(t):se(u)},se=e=>e.toString().padStart(2,"0"),zt=e=>re[Math.min(re.indexOf(e)+1,2)],$t=e=>re[Math.max(re.indexOf(e)-1,0)],Xt=()=>{const[e,t]=i.useState(d.HOURS),a=zt(e),o=$t(e),u=i.useCallback(()=>{t(a)},[a]),c=i.useCallback(()=>{t(o)},[o]);return{moveToNextSegment:u,moveToPreviousSegment:c,setActiveTimeSegment:t,activeTimeSegment:e,prevSegment:o,nextSegment:a}},Jt=e=>{const[t,a]=i.useState(null),o=i.useRef(null);return i.useEffect(()=>{e?jt(()=>{a(o.current)}):a(null)},[e]),{timePickerDropdownElement:t,timePickerDropdownRef:o}},Qt=/^\d*$/,Zt=(e,t)=>{const[a,o]=i.useState(e??Gt),{hourIncrement:u=1,minuteIncrement:c=1,secondIncrement:k=1}=t??{},v=(p,S)=>{S.length>2||!Qt.test(S)||o(I=>({...I,[p]:S}))},x=i.useCallback(p=>{const S=p.target.value;v(d.HOURS,S)},[]),R=i.useCallback(p=>{const S=p.target.value;v(d.MINUTES,S)},[]),M=i.useCallback(p=>{const S=p.target.value;v(d.SECONDS,S)},[]),b=i.useCallback((p,S)=>{if(a[p]==="")v(p,se(ae));else{const I=Wt(Number(a[p]),qe[p],S);v(p,I)}},[a]),T=i.useCallback((p,S)=>{const I=Yt(Number(a[p]),qe[p],S);v(p,I)},[a]),h=i.useCallback(()=>{b(d.SECONDS,k)},[k,b]),C=i.useCallback(()=>{T(d.SECONDS,k)},[k,T]),w=i.useCallback(()=>{b(d.MINUTES,c)},[c,b]),q=i.useCallback(()=>{T(d.MINUTES,c)},[c,T]),V=i.useCallback(()=>{b(d.HOURS,u)},[u,b]),ie=i.useCallback(()=>{T(d.HOURS,u)},[u,T]);return{internalTimeValue:a,updateTimeSegment:v,handleOnChangeHours:x,handleOnChangeMinutes:R,handleOnChangeSeconds:M,increaseSeconds:h,decreaseSeconds:C,increaseMinutes:w,decreaseMinutes:q,increaseHours:V,decreaseHours:ie}},de={"rte-time-picker-label":"_rte-time-picker-label_1wpg8_1","rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},A={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_1p03q_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_1p03q_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_1p03q_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_1p03q_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_1p03q_46"},ee=i.forwardRef(({value:e,onChange:t,increase:a,decrease:o,onKeyDown:u,unit:c,withSeparator:k,readOnly:v},x)=>{const R=T=>{v||u==null||u(T)},M=()=>{v||a==null||a()},b=()=>{v||o==null||o()};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:A["rte-time-picker-segment-container"],children:[s.jsxs("div",{className:A["rte-time-picker-segment-controls"],children:[s.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:M,tabIndex:-1,type:"button","aria-label":`Increase ${c==="h"?"hours":c==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),s.jsx("input",{ref:x,type:"text",value:e??"00",onChange:t,onKeyDown:R,tabIndex:v?-1:0,className:A["rte-time-picker-segment-input"],readOnly:v}),s.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:b,tabIndex:-1,type:"button","aria-label":`Decrease ${c==="h"?"hours":c==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),s.jsx("span",{children:c})]}),k&&s.jsx("span",{className:A["rte-time-picker-segment-separator"],children:":"})]})});ee.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const en=/^\d*$/,[pe,fe,tn]=ne,ve=i.forwardRef(({id:e,labelId:t,value:a,onChange:o,label:u,showLabel:c,required:k=!1,showLabelRequirement:v=!1,readOnly:x,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,isHourReadOnly:w=!1,isMinuteReadOnly:q=!1,isSecondReadOnly:V=!1,hourIncrement:ie=1,minuteIncrement:p=1,secondIncrement:S=1},I)=>{var _e;const[P,oe]=i.useState(!1),[mt,Ee]=i.useState(!1),Se=i.useRef(null),H=i.useRef(null),{timePickerDropdownElement:dt,timePickerDropdownRef:pt}=Jt(P),{moveToNextSegment:U,moveToPreviousSegment:Te,setActiveTimeSegment:ue,activeTimeSegment:l,prevSegment:ft,nextSegment:gt}=Xt(),{internalTimeValue:f,updateTimeSegment:_,handleOnChangeHours:vt,handleOnChangeMinutes:Et,handleOnChangeSeconds:St,increaseMinutes:be,decreaseMinutes:he,increaseSeconds:ye,decreaseSeconds:ke,increaseHours:Re,decreaseHours:we}=Zt(a,{hourIncrement:ie,minuteIncrement:p,secondIncrement:S});At(dt,P);const Tt=Ft(f,l),bt=P&&!C,ht=n=>{H.current=n,typeof I=="function"?I(n):I&&(I.current=n)},yt=()=>l===pe?w:l===fe?q:V,kt=n=>{const r=n.key;r===K?(n.preventDefault(),ye()):r===F&&(n.preventDefault(),ke())},Rt=n=>{const r=n.key;r===K?(n.preventDefault(),be()):r===F&&(n.preventDefault(),he())},wt=n=>{const r=n.key;r===K?(n.preventDefault(),Re()):r===F&&(n.preventDefault(),we())},It=n=>{(n===Me||n===De)&&Ot(),n===Ne&&(Te(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const r=L(f)[ft];(m=H.current)==null||m.setSelectionRange(r[0],r[1])})})),n===xe&&Kt(f,l)&&(U(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const r=L(f)[gt];(m=H.current)==null||m.setSelectionRange(r[0],r[1])})}))},_t=n=>{const r=n.key;if([K,F,Ne,xe,Me,De].includes(r)){n.preventDefault(),It(r);return}if(!en.test(r)){j();return}if(yt()){j();return}else{const m=f[l];if(m.length>=2)Nt(m,D(Number(r)));else{const O=m+r,Oe=Pt[l];if(m.length===0&&Number(r)>Oe)_(l,D(Number(r))),U();else if(O.length===2){const B=D(Math.min(Number(O),me[l]));_(l,B),U()}else _(l,D(Number(r)))}}},Ot=()=>{if(f[l]!=="")_(l,"");else{const n=Bt(l);n!==l&&(_(n,""),Te())}},Nt=(n,r)=>{var B;const m=L(f)[l][0];if((((B=H.current)==null?void 0:B.selectionStart)??0)-m===0)if(n[0]==="0"){const ce=n[1]+r[1],le=D(Math.min(Number(ce),me[l]));_(l,le),U()}else _(l,r);else{const ce=Number(n[0]+r),le=D(Math.min(ce,me[l]));_(l,le),U()}},xt=()=>{var O;P&&oe(!1);const n=((O=H.current)==null?void 0:O.selectionStart)??0,r=L(f),m=1;n<=r[pe][m]?ue(pe):n<=r[fe][m]?ue(fe):ue(tn)},Ie=()=>{var n;C||(Ee(!0),(n=H.current)==null||n.focus())},Mt=()=>{Ee(!1)},Dt=()=>{Ie()},Ct=()=>{Object.values(f).forEach((n,r)=>{const m=ne[r],O=Number(n);isNaN(O)?_(m,D(0)):_(m,D(O))})},qt=()=>{Ie(),oe(n=>!n),Ct()},Ht=()=>{oe(!1),Mt()},j=i.useCallback(()=>{const r=L(f)[l];requestAnimationFrame(()=>{var m;(m=H.current)==null||m.setSelectionRange(r[0],r[1])})},[l,f]);return i.useEffect(()=>{j()},[j]),i.useEffect(()=>{o==null||o(f)},[f,o]),x&&(f.hh===""||f.mm===""||f.ss==="")?(console.warn("TimePicker is in readOnly mode but the value is not fully set. Please provide a value with all segments (hh, mm, ss) set to non-empty values to avoid unexpected behavior."),null):h&&!R?(console.warn("TimePicker is in error state but no assistiveTextLabel is provided. Please provide assistive text to explain the error."),null):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:de["rte-time-picker-header"],children:c&&s.jsxs("label",{htmlFor:e,id:t,className:de["rte-time-picker-label"],children:[u,s.jsx(Ut,{required:k,showLabelRequirement:v})]})}),s.jsx(Vt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Ht,offset:8,style:{width:(_e=Se.current)==null?void 0:_e.offsetWidth},trigger:s.jsx(lt,{id:e,ariaLabelledBy:t,"aria-label":c?void 0:u,value:Tt,readOnly:x,onFocus:Dt,onKeyDown:_t,onMouseUp:xt,pickerInputRef:ht,pickerRef:Se,isFocused:mt,onOpenPicker:qt,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:bt,children:s.jsxs("div",{className:de["rte-time-picker-dropdown"],ref:pt,children:[s.jsx(ee,{value:f.hh,onChange:vt,onKeyDown:wt,increase:Re,decrease:we,unit:"h",withSeparator:!0,readOnly:w}),s.jsx(ee,{value:f.mm,onChange:Et,onKeyDown:Rt,increase:be,decrease:he,unit:"m",withSeparator:!0,readOnly:q}),s.jsx(ee,{value:f.ss,onChange:St,onKeyDown:kt,increase:ye,decrease:ke,unit:"s",readOnly:V})]})}),R&&!P&&s.jsx(Lt,{label:R,appearance:h?"error":M,showIcon:b,href:T})]})});ve.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const wn={title:"Composants/TimePicker/TimePicker",component:ve,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},y={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[t,a]=i.useState({hh:"",mm:"",ss:""});return s.jsx(s.Fragment,{children:s.jsx(ve,{...e,id:"time-picker",value:t,onChange:a})})}},W={args:{...y.args,disabled:!0}},Y={args:{...y.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},z={args:{...y.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},$={args:{...y.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},X={args:{...y.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},J={args:{...y.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Q={args:{...y.args,minuteIncrement:15},play:async({canvasElement:e})=>{await ct(e);const t=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(ut),N(t.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(te),N(t.value).toBe("00 : 15 : 00"),await g.keyboard(te),N(t.value).toBe("00 : 30 : 00")}},Z={args:{...y.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await ct(e);const t=e.querySelector("input");await g.tab(),await g.keyboard("a"),N(t.value).toBe("12 : 30 : 45"),await g.keyboard(Ce),await g.keyboard("3"),N(t.value).toBe("12 : 03 : 45"),await g.keyboard("2"),N(t.value).toBe("12 : 32 : 45"),await g.keyboard(Ce),await g.keyboard("2"),N(t.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(ut),await g.keyboard(te),N(t.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(te),N(t.value).toBe("13 : 33 : 02")}};var He,Pe,Ae;y.parameters={...y.parameters,docs:{...(He=y.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Ae=(Pe=y.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Ue,Le,Ve;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Ve=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ve.source}}};var je,Be,Ke;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Ke=(Be=Y.parameters)==null?void 0:Be.docs)==null?void 0:Ke.source}}};var Fe,Ge,We;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(We=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Ye,ze,$e;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...($e=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Xe,Je,Qe;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(ot=(it=Z.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const In=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{y as Default,W as Disabled,z as Error,$ as HourReadOnly,Z as KeyboardInteractions,X as MinuteReadOnly,Y as ReadOnly,J as SecondReadOnly,Q as WithIncrement,In as __namedExportsOrder,wn as default};
