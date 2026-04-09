import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{A as F,a as G,b as Ne,c as xe,B as Me,D as De,d as Ce,e as ut,f as ne}from"./keyboard-test.constants-tRj3kChN.js";import{T as v,a as ae,b as qt,c as me}from"./timepicker.constants-1x0nd2Iq.js";import{u as f,e as N}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{f as ct}from"./testing.utils-mIZIUNbM.js";import{u as Ut}from"./useFocusTrap-BvDcNP0_.js";import{R as At,A as Vt}from"./RequiredIndicator-CnxxEbTK.js";import{B as Lt}from"./BaseDropdown-BFt0BBZT.js";import{I as ge}from"./Icon-DOkBvtOM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-DAYVbW7O.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const D=e=>e.toString().padStart(2,"0"),V=e=>{const n=e[v.HOURS].toString().length,a=n+1,u=e[v.MINUTES].toString().length,o=a+u+1;return{[v.HOURS]:[0,n],[v.MINUTES]:[a,a+u],[v.SECONDS]:[o,o+e[v.SECONDS].toString().length]}},jt=e=>ae[Math.max(ae.indexOf(e)-1,0)],Bt=(e,n)=>n===v.HOURS?!!e[v.MINUTES]:n===v.MINUTES?!!e[v.SECONDS]:!0,Kt=(e,n)=>{let a=e[v.HOURS];return(n!==v.HOURS||e[v.MINUTES])&&(a+=":"+e[v.MINUTES]),(n===v.SECONDS||e[v.SECONDS])&&(a+=":"+e[v.SECONDS]),a},W={"rte-base-input-picker":"_rte-base-input-picker_zk6tf_1","rte-base-input-picker-input":"_rte-base-input-picker-input_zk6tf_32","rte-base-input-picker-button":"_rte-base-input-picker-button_zk6tf_38","rte-base-input-picker-icon":"_rte-base-input-picker-icon_zk6tf_41"},lt=({id:e,value:n,readOnly:a,onChange:u,onFocus:o,onKeyDown:g,onMouseUp:k,onOpenPicker:E,isFocused:x,pickerInputRef:R,pickerRef:M,ariaLabelledBy:b,isError:T,disabled:h,openButtonAriaLabel:C})=>{const w=!h&&!a,H=!h&&!a&&x;return s.jsx(s.Fragment,{children:s.jsxs("div",{className:W["rte-base-input-picker"],ref:M,"data-focused":H??void 0,tabIndex:-1,onClick:w?o:void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0,"data-is-read-only":a||void 0,children:[s.jsx("input",{id:e,"aria-labelledby":b,readOnly:a,ref:R,className:W["rte-base-input-picker-input"],value:n,onFocus:w?o:void 0,onKeyDown:w?g:void 0,onMouseUp:w?k:void 0,disabled:h,onChange:u}),s.jsx("button",{onClick:w?E:void 0,className:W["rte-base-input-picker-button"],"aria-label":C??"Open picker",disabled:h,children:s.jsx(ge,{name:"clock",appearance:"outlined",className:W["rte-base-input-picker-icon"],"aria-hidden":"true","data-is-focused":H||void 0,"data-is-error":T||void 0,"data-is-disabled":h||void 0})})]})})};lt.__docgenInfo={description:"",methods:[],displayName:"BaseInputPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},pickerInputRef:{required:!1,tsType:{name:"union",raw:"React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void)",elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"unknown"}]},description:""},pickerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onMouseUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""},openButtonAriaLabel:{required:!1,tsType:{name:"string"},description:""}},composes:["BaseInput"]};var m=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(m||{});const re=0,Ft={hh:"",mm:"",ss:""},se=[m.HOURS,m.MINUTES,m.SECONDS],He={[m.HOURS]:23,[m.MINUTES]:59,[m.SECONDS]:59};m.HOURS+"",m.MINUTES+"",m.SECONDS+"";const Gt=(e,n,a)=>{const o=(isNaN(e)?re:e)+a;return o>n?L(re):L(o)},Wt=(e,n,a)=>{const o=(isNaN(e)?re:e)-a;return o<0?L(n):L(o)},L=e=>e.toString().padStart(2,"0"),Yt=e=>se[Math.min(se.indexOf(e)+1,2)],$t=e=>se[Math.max(se.indexOf(e)-1,0)],zt=()=>{const[e,n]=i.useState(m.HOURS),a=Yt(e),u=$t(e),o=i.useCallback(()=>{n(a)},[a]),g=i.useCallback(()=>{n(u)},[u]);return{moveToNextSegment:o,moveToPreviousSegment:g,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:u,nextSegment:a}},Xt=e=>{const[n,a]=i.useState(null),u=i.useRef(null);return i.useEffect(()=>{e?requestAnimationFrame(()=>{requestAnimationFrame(()=>{a(u.current)})}):a(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:u}},Jt=/^\d*$/,Qt=(e,n)=>{const[a,u]=i.useState(e??Ft),{hourIncrement:o=1,minuteIncrement:g=1,secondIncrement:k=1}=n??{},E=(d,S)=>{S.length>2||!Jt.test(S)||u(_=>({..._,[d]:S}))},x=i.useCallback(d=>{const S=d.target.value;E(m.HOURS,S)},[]),R=i.useCallback(d=>{const S=d.target.value;E(m.MINUTES,S)},[]),M=i.useCallback(d=>{const S=d.target.value;E(m.SECONDS,S)},[]),b=i.useCallback((d,S)=>{if(a[d]==="")E(d,L(re));else{const _=Gt(Number(a[d]),He[d],S);E(d,_)}},[a]),T=i.useCallback((d,S)=>{const _=Wt(Number(a[d]),He[d],S);E(d,_)},[a]),h=i.useCallback(()=>{b(m.SECONDS,k)},[k,b]),C=i.useCallback(()=>{T(m.SECONDS,k)},[k,T]),w=i.useCallback(()=>{b(m.MINUTES,g)},[g,b]),H=i.useCallback(()=>{T(m.MINUTES,g)},[g,T]),j=i.useCallback(()=>{b(m.HOURS,o)},[o,b]),ie=i.useCallback(()=>{T(m.HOURS,o)},[o,T]);return{internalTimeValue:a,updateTimeSegment:E,handleOnChangeHours:x,handleOnChangeMinutes:R,handleOnChangeSeconds:M,increaseSeconds:h,decreaseSeconds:C,increaseMinutes:w,decreaseMinutes:H,increaseHours:j,decreaseHours:ie}},de={"rte-time-picker-label":"_rte-time-picker-label_1wpg8_1","rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},U={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_1ua8i_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_1ua8i_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_1ua8i_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_1ua8i_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_1ua8i_46"},te=i.forwardRef(({value:e,onChange:n,increase:a,decrease:u,onKeyDown:o,unit:g,withSeparator:k,readOnly:E},x)=>{const R=T=>{E||o==null||o(T)},M=()=>{E||a==null||a()},b=()=>{E||u==null||u()};return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:U["rte-time-picker-segment-container"],children:[s.jsxs("div",{className:U["rte-time-picker-segment-controls"],children:[s.jsx("button",{className:U["rte-time-picker-segment-controls-button"],onClick:M,tabIndex:-1,type:"button","aria-label":`Increase ${g==="h"?"hours":g==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),s.jsx("input",{ref:x,type:"text",value:e??"00",onChange:n,onKeyDown:R,className:U["rte-time-picker-segment-input"],readOnly:E}),s.jsx("button",{className:U["rte-time-picker-segment-controls-button"],onClick:b,tabIndex:-1,type:"button","aria-label":`Decrease ${g==="h"?"hours":g==="m"?"minutes":"seconds"} value`,children:s.jsx(ge,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),s.jsx("span",{children:g})]}),k&&s.jsx("span",{className:U["rte-time-picker-segment-separator"],children:":"})]})});te.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const Zt=/^\d*$/,[pe,fe,en]=ae,ve=i.forwardRef(({id:e,labelId:n,value:a,onChange:u,label:o,showLabel:g,required:k=!1,showLabelRequirement:E=!1,readOnly:x,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,isHourReadOnly:w=!1,isMinuteReadOnly:H=!1,isSecondReadOnly:j=!1,hourIncrement:ie=1,minuteIncrement:d=1,secondIncrement:S=1},_)=>{var Ie;const[q,oe]=i.useState(!1),[mt,Ee]=i.useState(!1),Se=i.useRef(null),P=i.useRef(null),{timePickerDropdownElement:dt,timePickerDropdownRef:pt}=Xt(q),{moveToNextSegment:A,moveToPreviousSegment:Te,setActiveTimeSegment:ue,activeTimeSegment:c,prevSegment:ft,nextSegment:gt}=zt(),{internalTimeValue:p,updateTimeSegment:I,handleOnChangeHours:vt,handleOnChangeMinutes:Et,handleOnChangeSeconds:St,increaseMinutes:be,decreaseMinutes:he,increaseSeconds:ye,decreaseSeconds:ke,increaseHours:Re,decreaseHours:we}=Qt(a,{hourIncrement:ie,minuteIncrement:d,secondIncrement:S});Ut(dt,q);const Tt=Kt(p,c),bt=q&&!C,ht=t=>{P.current=t,typeof _=="function"?_(t):_&&(_.current=t)},yt=()=>c===pe?w:c===fe?H:j,kt=t=>{const r=t.key;r===F?(t.preventDefault(),ye()):r===G&&(t.preventDefault(),ke())},Rt=t=>{const r=t.key;r===F?(t.preventDefault(),be()):r===G&&(t.preventDefault(),he())},wt=t=>{const r=t.key;r===F?(t.preventDefault(),Re()):r===G&&(t.preventDefault(),we())},_t=t=>{(t===Me||t===De)&&Ot(),t===Ne&&(Te(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const r=V(p)[ft];(l=P.current)==null||l.setSelectionRange(r[0],r[1])})})),t===xe&&Bt(p,c)&&(A(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const r=V(p)[gt];(l=P.current)==null||l.setSelectionRange(r[0],r[1])})}))},It=t=>{const r=t.key;if([F,G,Ne,xe,Me,De].includes(r)){t.preventDefault(),_t(r);return}if(!Zt.test(r)){B();return}if(yt()){B();return}else{const l=p[c];if(l.length>=2)Nt(l,D(Number(r)));else{const O=l+r,Oe=qt[c];if(l.length===0&&Number(r)>Oe)I(c,D(Number(r))),A();else if(O.length===2){const K=D(Math.min(Number(O),me[c]));I(c,K),A()}else I(c,D(Number(r)))}}},Ot=()=>{if(p[c]!=="")I(c,"");else{const t=jt(c);t!==c&&(I(t,""),Te())}},Nt=(t,r)=>{var K;const l=V(p)[c][0];if((((K=P.current)==null?void 0:K.selectionStart)??0)-l===0)if(t[0]==="0"){const ce=t[1]+r[1],le=D(Math.min(Number(ce),me[c]));I(c,le),A()}else I(c,r);else{const ce=Number(t[0]+r),le=D(Math.min(ce,me[c]));I(c,le),A()}},xt=()=>{var O;q&&oe(!1);const t=((O=P.current)==null?void 0:O.selectionStart)??0,r=V(p),l=1;t<=r[pe][l]?ue(pe):t<=r[fe][l]?ue(fe):ue(en)},_e=()=>{var t;C||(Ee(!0),(t=P.current)==null||t.focus())},Mt=()=>{Ee(!1)},Dt=()=>{_e()},Ct=()=>{Object.values(p).forEach((t,r)=>{const l=ae[r],O=Number(t);isNaN(O)?I(l,D(0)):I(l,D(O))})},Ht=()=>{_e(),oe(t=>!t),Ct()},Pt=()=>{oe(!1),Mt()},B=i.useCallback(()=>{const r=V(p)[c];requestAnimationFrame(()=>{var l;(l=P.current)==null||l.setSelectionRange(r[0],r[1])})},[c,p]);return i.useEffect(()=>{B()},[B]),i.useEffect(()=>{u==null||u(p)},[p,u]),x&&(p.hh===""||p.mm===""||p.ss==="")?(console.warn("TimePicker is in readOnly mode but the value is not fully set. Please provide a value with all segments (hh, mm, ss) set to non-empty values to avoid unexpected behavior."),null):h&&!R?(console.warn("TimePicker is in error state but no assistiveTextLabel is provided. Please provide assistive text to explain the error."),null):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:de["rte-time-picker-header"],children:g&&s.jsxs("label",{htmlFor:e,id:n,className:de["rte-time-picker-label"],children:[o,s.jsx(At,{required:k,showLabelRequirement:E})]})}),s.jsx(Lt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Pt,offset:8,style:{width:(Ie=Se.current)==null?void 0:Ie.offsetWidth},trigger:s.jsx(lt,{id:e,ariaLabelledBy:n,"aria-label":g?void 0:o,value:Tt,readOnly:x,onFocus:Dt,onKeyDown:It,onMouseUp:xt,pickerInputRef:ht,pickerRef:Se,isFocused:mt,onOpenPicker:Ht,assistiveTextLabel:R,assistiveAppearance:M,showAssistiveIcon:b,assistiveTextLink:T,isError:h,disabled:C,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:bt,children:s.jsxs("div",{className:de["rte-time-picker-dropdown"],ref:pt,children:[s.jsx(te,{value:p.hh,onChange:vt,onKeyDown:wt,increase:Re,decrease:we,unit:"h",withSeparator:!0,readOnly:w}),s.jsx(te,{value:p.mm,onChange:Et,onKeyDown:Rt,increase:be,decrease:he,unit:"m",withSeparator:!0,readOnly:H}),s.jsx(te,{value:p.ss,onChange:St,onKeyDown:kt,increase:ye,decrease:ke,unit:"s",readOnly:j})]})}),R&&!q&&s.jsx(Vt,{label:R,appearance:h?"error":M,showIcon:b,href:T})]})});ve.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Rn={title:"Composants/TimePicker/TimePicker",component:ve,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},y={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,a]=i.useState({hh:"",mm:"",ss:""});return s.jsx(s.Fragment,{children:s.jsx(ve,{...e,id:"time-picker",value:n,onChange:a})})}},Y={args:{...y.args,disabled:!0}},$={args:{...y.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},z={args:{...y.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},X={args:{...y.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},J={args:{...y.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},Q={args:{...y.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Z={args:{...y.args,minuteIncrement:15},play:async({canvasElement:e})=>{await ct(e);const n=e.querySelector("input");await f.tab(),await f.tab(),await f.keyboard(ut),N(n.value).toBe("00:00:00"),await f.tab(),await f.keyboard(ne),N(n.value).toBe("00:15:00"),await f.keyboard(ne),N(n.value).toBe("00:30:00")}},ee={args:{...y.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await ct(e);const n=e.querySelector("input");await f.tab(),await f.keyboard("a"),N(n.value).toBe("12:30:45"),await f.keyboard(Ce),await f.keyboard("3"),N(n.value).toBe("12:03:45"),await f.keyboard("2"),N(n.value).toBe("12:32:45"),await f.keyboard(Ce),await f.keyboard("2"),N(n.value).toBe("12:32:02"),await f.tab(),await f.keyboard(ut),await f.keyboard(ne),N(n.value).toBe("13:32:02"),await f.tab(),await f.keyboard(ne),N(n.value).toBe("13:33:02")}};var Pe,qe,Ue;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ue=(qe=y.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Ae,Ve,Le;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Le=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:Le.source}}};var je,Be,Ke;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Ke=(Be=$.parameters)==null?void 0:Be.docs)==null?void 0:Ke.source}}};var Fe,Ge,We;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(We=(Ge=z.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var Ye,$e,ze;X.parameters={...X.parameters,docs:{...(Ye=X.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(ze=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Xe,Je,Qe;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(Qe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,rt;Z.parameters={...Z.parameters,docs:{...(nt=Z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(rt=(at=Z.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var st,it,ot;ee.parameters={...ee.parameters,docs:{...(st=ee.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(it=ee.parameters)==null?void 0:it.docs)==null?void 0:ot.source}}};const wn=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{y as Default,Y as Disabled,z as Error,X as HourReadOnly,ee as KeyboardInteractions,J as MinuteReadOnly,$ as ReadOnly,Q as SecondReadOnly,Z as WithIncrement,wn as __namedExportsOrder,Rn as default};
