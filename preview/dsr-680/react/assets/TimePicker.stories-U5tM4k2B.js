import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{a as K,b as F,c as Ne,d as xe,B as Me,D as De,h as Ce,i as ut,j as te}from"./keyboard-test.constants-B5qFTNXN.js";import{T as v,a as ne,b as qt,c as me}from"./timepicker.constants-1x0nd2Iq.js";import{u as g,e as N}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as ct}from"./testing.utils-mIZIUNbM.js";import{u as At}from"./useFocusTrap-BvDcNP0_.js";import{R as Ut,A as Vt}from"./RequiredIndicator-CnxxEbTK.js";import{B as Lt}from"./BaseDropdown-BFt0BBZT.js";import{I as ge}from"./Icon-DOkBvtOM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-DAYVbW7O.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";function jt(e){let t=0;const a=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{t=0,e()})});return()=>{cancelAnimationFrame(a),t!==0&&cancelAnimationFrame(t)}}const D=e=>e.toString().padStart(2,"0"),V=e=>{const t=e[v.HOURS].toString().length,a=t+1,u=e[v.MINUTES].toString().length,o=a+u+1;return{[v.HOURS]:[0,t],[v.MINUTES]:[a,a+u],[v.SECONDS]:[o,o+e[v.SECONDS].toString().length]}},Bt=e=>ne[Math.max(ne.indexOf(e)-1,0)],Kt=(e,t)=>t===v.HOURS?!!e[v.MINUTES]:t===v.MINUTES?!!e[v.SECONDS]:!0,Ft=(e,t)=>{let a=e[v.HOURS];return(t!==v.HOURS||e[v.MINUTES])&&(a+=":"+e[v.MINUTES]),(t===v.SECONDS||e[v.SECONDS])&&(a+=":"+e[v.SECONDS]),a},G={"rte-base-input-picker":"_rte-base-input-picker_zk6tf_1","rte-base-input-picker-input":"_rte-base-input-picker-input_zk6tf_32","rte-base-input-picker-button":"_rte-base-input-picker-button_zk6tf_38","rte-base-input-picker-icon":"_rte-base-input-picker-icon_zk6tf_41"},lt=({id:e,value:t,readOnly:a,onChange:u,onFocus:o,onKeyDown:d,onMouseUp:k,onOpenPicker:E,isFocused:x,pickerInputRef:R,pickerRef:M,ariaLabelledBy:b,isError:T,disabled:h,openButtonAriaLabel:C})=>{const w=!h&&!a,H=!h&&!a&&x;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:G["rte-base-input-picker"],ref:M,"data-focused":H??void 0,tabIndex:-1,onClick:w?o:void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0,"data-is-read-only":a||void 0,children:[s.jsx("input",{id:e,"aria-labelledby":b,readOnly:a,ref:R,className:G["rte-base-input-picker-input"],value:t,onFocus:w?o:void 0,onKeyDown:w?d:void 0,onMouseUp:w?k:void 0,disabled:h,onChange:u}),s.jsx("button",{onClick:w?E:void 0,className:G["rte-base-input-picker-button"],"aria-label":C??"Open picker",disabled:h,children:s.jsx(ge,{name:"clock",appearance:"outlined",className:G["rte-base-input-picker-icon"],"aria-hidden":"true","data-is-focused":H||void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0})})]})})};lt.__docgenInfo={description:"",methods:[],displayName:"BaseInputPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},pickerInputRef:{required:!1,tsType:{name:"union",raw:"React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void)",elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"unknown"}]},description:""},pickerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onMouseUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},openButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["BaseInput"]};var m=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(m||{});const ae=0,Gt={hh:"",mm:"",ss:""},re=[m.HOURS,m.MINUTES,m.SECONDS],He={[m.HOURS]:23,[m.MINUTES]:59,[m.SECONDS]:59};m.HOURS+"",m.MINUTES+"",m.SECONDS+"";const Wt=(e,t,a)=>{const o=(isNaN(e)?ae:e)+a,d=o>t?ae:o;return se(d)},Yt=(e,t,a)=>{const o=(isNaN(e)?ae:e)-a;return o<0?se(t):se(o)},se=e=>e.toString().padStart(2,"0"),zt=e=>re[Math.min(re.indexOf(e)+1,2)],$t=e=>re[Math.max(re.indexOf(e)-1,0)],Xt=()=>{const[e,t]=i.useState(m.HOURS),a=zt(e),u=$t(e),o=i.useCallback(()=>{t(a)},[a]),d=i.useCallback(()=>{t(u)},[u]);return{moveToNextSegment:o,moveToPreviousSegment:d,setActiveTimeSegment:t,activeTimeSegment:e,prevSegment:u,nextSegment:a}},Jt=e=>{const[t,a]=i.useState(null),u=i.useRef(null);return i.useEffect(()=>{e?jt(()=>{a(u.current)}):a(null)},[e]),{timePickerDropdownElement:t,timePickerDropdownRef:u}},Qt=/^\d*$/,Zt=(e,t)=>{const[a,u]=i.useState(e??Gt),{hourIncrement:o=1,minuteIncrement:d=1,secondIncrement:k=1}=t??{},E=(p,S)=>{S.length>2||!Qt.test(S)||u(I=>({...I,[p]:S}))},x=i.useCallback(p=>{const S=p.target.value;E(m.HOURS,S)},[]),R=i.useCallback(p=>{const S=p.target.value;E(m.MINUTES,S)},[]),M=i.useCallback(p=>{const S=p.target.value;E(m.SECONDS,S)},[]),b=i.useCallback((p,S)=>{if(a[p]==="")E(p,se(ae));else{const I=Wt(Number(a[p]),He[p],S);E(p,I)}},[a]),T=i.useCallback((p,S)=>{const I=Yt(Number(a[p]),He[p],S);E(p,I)},[a]),h=i.useCallback(()=>{b(m.SECONDS,k)},[k,b]),C=i.useCallback(()=>{T(m.SECONDS,k)},[k,T]),w=i.useCallback(()=>{b(m.MINUTES,d)},[d,b]),H=i.useCallback(()=>{T(m.MINUTES,d)},[d,T]),L=i.useCallback(()=>{b(m.HOURS,o)},[o,b]),ie=i.useCallback(()=>{T(m.HOURS,o)},[o,T]);return{internalTimeValue:a,updateTimeSegment:E,handleOnChangeHours:x,handleOnChangeMinutes:R,handleOnChangeSeconds:M,increaseSeconds:h,decreaseSeconds:C,increaseMinutes:w,decreaseMinutes:H,increaseHours:L,decreaseHours:ie}},de={"rte-time-picker-label":"_rte-time-picker-label_1wpg8_1","rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},A={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_1ua8i_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_1ua8i_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_1ua8i_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_1ua8i_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_1ua8i_46"},ee=i.forwardRef(({value:e,onChange:t,increase:a,decrease:u,onKeyDown:o,unit:d,withSeparator:k,readOnly:E},x)=>{const R=T=>{E||o==null||o(T)},M=()=>{E||a==null||a()},b=()=>{E||u==null||u()};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:A["rte-time-picker-segment-container"],children:[s.jsxs("div",{className:A["rte-time-picker-segment-controls"],children:[s.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:M,tabIndex:-1,type:"button","aria-label":`Increase ${d==="h"?"hours":d==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),s.jsx("input",{ref:x,type:"text",value:e??"00",onChange:t,onKeyDown:R,className:A["rte-time-picker-segment-input"],readOnly:E}),s.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:b,tabIndex:-1,type:"button","aria-label":`Decrease ${d==="h"?"hours":d==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),s.jsx("span",{children:d})]}),k&&s.jsx("span",{className:A["rte-time-picker-segment-separator"],children:":"})]})});ee.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const en=/^\d*$/,[pe,fe,tn]=ne,ve=i.forwardRef(({id:e,labelId:t,value:a,onChange:u,label:o,showLabel:d,required:k=!1,showLabelRequirement:E=!1,readOnly:x,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,isHourReadOnly:w=!1,isMinuteReadOnly:H=!1,isSecondReadOnly:L=!1,hourIncrement:ie=1,minuteIncrement:p=1,secondIncrement:S=1},I)=>{var _e;const[q,oe]=i.useState(!1),[mt,Ee]=i.useState(!1),Se=i.useRef(null),P=i.useRef(null),{timePickerDropdownElement:dt,timePickerDropdownRef:pt}=Jt(q),{moveToNextSegment:U,moveToPreviousSegment:Te,setActiveTimeSegment:ue,activeTimeSegment:c,prevSegment:ft,nextSegment:gt}=Xt(),{internalTimeValue:f,updateTimeSegment:_,handleOnChangeHours:vt,handleOnChangeMinutes:Et,handleOnChangeSeconds:St,increaseMinutes:be,decreaseMinutes:he,increaseSeconds:ye,decreaseSeconds:ke,increaseHours:Re,decreaseHours:we}=Zt(a,{hourIncrement:ie,minuteIncrement:p,secondIncrement:S});At(dt,q);const Tt=Ft(f,c),bt=q&&!C,ht=n=>{P.current=n,typeof I=="function"?I(n):I&&(I.current=n)},yt=()=>c===pe?w:c===fe?H:L,kt=n=>{const r=n.key;r===K?(n.preventDefault(),ye()):r===F&&(n.preventDefault(),ke())},Rt=n=>{const r=n.key;r===K?(n.preventDefault(),be()):r===F&&(n.preventDefault(),he())},wt=n=>{const r=n.key;r===K?(n.preventDefault(),Re()):r===F&&(n.preventDefault(),we())},It=n=>{(n===Me||n===De)&&Ot(),n===Ne&&(Te(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const r=V(f)[ft];(l=P.current)==null||l.setSelectionRange(r[0],r[1])})})),n===xe&&Kt(f,c)&&(U(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const r=V(f)[gt];(l=P.current)==null||l.setSelectionRange(r[0],r[1])})}))},_t=n=>{const r=n.key;if([K,F,Ne,xe,Me,De].includes(r)){n.preventDefault(),It(r);return}if(!en.test(r)){j();return}if(yt()){j();return}else{const l=f[c];if(l.length>=2)Nt(l,D(Number(r)));else{const O=l+r,Oe=qt[c];if(l.length===0&&Number(r)>Oe)_(c,D(Number(r))),U();else if(O.length===2){const B=D(Math.min(Number(O),me[c]));_(c,B),U()}else _(c,D(Number(r)))}}},Ot=()=>{if(f[c]!=="")_(c,"");else{const n=Bt(c);n!==c&&(_(n,""),Te())}},Nt=(n,r)=>{var B;const l=V(f)[c][0];if((((B=P.current)==null?void 0:B.selectionStart)??0)-l===0)if(n[0]==="0"){const ce=n[1]+r[1],le=D(Math.min(Number(ce),me[c]));_(c,le),U()}else _(c,r);else{const ce=Number(n[0]+r),le=D(Math.min(ce,me[c]));_(c,le),U()}},xt=()=>{var O;q&&oe(!1);const n=((O=P.current)==null?void 0:O.selectionStart)??0,r=V(f),l=1;n<=r[pe][l]?ue(pe):n<=r[fe][l]?ue(fe):ue(tn)},Ie=()=>{var n;C||(Ee(!0),(n=P.current)==null||n.focus())},Mt=()=>{Ee(!1)},Dt=()=>{Ie()},Ct=()=>{Object.values(f).forEach((n,r)=>{const l=ne[r],O=Number(n);isNaN(O)?_(l,D(0)):_(l,D(O))})},Ht=()=>{Ie(),oe(n=>!n),Ct()},Pt=()=>{oe(!1),Mt()},j=i.useCallback(()=>{const r=V(f)[c];requestAnimationFrame(()=>{var l;(l=P.current)==null||l.setSelectionRange(r[0],r[1])})},[c,f]);return i.useEffect(()=>{j()},[j]),i.useEffect(()=>{u==null||u(f)},[f,u]),x&&(f.hh===""||f.mm===""||f.ss==="")?(console.warn("TimePicker is in readOnly mode but the value is not fully set. Please provide a value with all segments (hh, mm, ss) set to non-empty values to avoid unexpected behavior."),null):h&&!R?(console.warn("TimePicker is in error state but no assistiveTextLabel is provided. Please provide assistive text to explain the error."),null):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:de["rte-time-picker-header"],children:d&&s.jsxs("label",{htmlFor:e,id:t,className:de["rte-time-picker-label"],children:[o,s.jsx(Ut,{required:k,showLabelRequirement:E})]})}),s.jsx(Lt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Pt,offset:8,style:{width:(_e=Se.current)==null?void 0:_e.offsetWidth},trigger:s.jsx(lt,{id:e,ariaLabelledBy:t,"aria-label":d?void 0:o,value:Tt,readOnly:x,onFocus:Dt,onKeyDown:_t,onMouseUp:xt,pickerInputRef:ht,pickerRef:Se,isFocused:mt,onOpenPicker:Ht,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:bt,children:s.jsxs("div",{className:de["rte-time-picker-dropdown"],ref:pt,children:[s.jsx(ee,{value:f.hh,onChange:vt,onKeyDown:wt,increase:Re,decrease:we,unit:"h",withSeparator:!0,readOnly:w}),s.jsx(ee,{value:f.mm,onChange:Et,onKeyDown:Rt,increase:be,decrease:he,unit:"m",withSeparator:!0,readOnly:H}),s.jsx(ee,{value:f.ss,onChange:St,onKeyDown:kt,increase:ye,decrease:ke,unit:"s",readOnly:L})]})}),R&&!q&&s.jsx(Vt,{label:R,appearance:h?"error":M,showIcon:b,href:T})]})});ve.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const wn={title:"Composants/TimePicker/TimePicker",component:ve,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},y={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[t,a]=i.useState({hh:"",mm:"",ss:""});return s.jsx(s.Fragment,{children:s.jsx(ve,{...e,id:"time-picker",value:t,onChange:a})})}},W={args:{...y.args,disabled:!0}},Y={args:{...y.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},z={args:{...y.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},$={args:{...y.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},X={args:{...y.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},J={args:{...y.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Q={args:{...y.args,minuteIncrement:15},play:async({canvasElement:e})=>{await ct(e);const t=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(ut),N(t.value).toBe("00:00:00"),await g.tab(),await g.keyboard(te),N(t.value).toBe("00:15:00"),await g.keyboard(te),N(t.value).toBe("00:30:00")}},Z={args:{...y.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await ct(e);const t=e.querySelector("input");await g.tab(),await g.keyboard("a"),N(t.value).toBe("12:30:45"),await g.keyboard(Ce),await g.keyboard("3"),N(t.value).toBe("12:03:45"),await g.keyboard("2"),N(t.value).toBe("12:32:45"),await g.keyboard(Ce),await g.keyboard("2"),N(t.value).toBe("12:32:02"),await g.tab(),await g.keyboard(ut),await g.keyboard(te),N(t.value).toBe("13:32:02"),await g.tab(),await g.keyboard(te),N(t.value).toBe("13:33:02")}};var Pe,qe,Ae;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ae=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Ae.source}}};var Ue,Ve,Le;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Le=(Ve=W.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var je,Be,Ke;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    expect(input.value).toBe("00:00:00");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:15:00");
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:30:00");
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
    expect(input.value).toBe("12:30:45");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("3");
    expect(input.value).toBe("12:03:45");
    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:45");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard("2");
    expect(input.value).toBe("12:32:02");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:32:02");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("13:33:02");
  }
}`,...(ot=(it=Z.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const In=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{y as Default,W as Disabled,z as Error,$ as HourReadOnly,Z as KeyboardInteractions,X as MinuteReadOnly,Y as ReadOnly,J as SecondReadOnly,Q as WithIncrement,In as __namedExportsOrder,wn as default};
