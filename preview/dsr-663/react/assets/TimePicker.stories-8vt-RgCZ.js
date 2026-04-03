import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{A as F,a as G,b as Re,c as we,B as Ie,D as Oe,d as _e,e as at,f as ne}from"./keyboard-test.constants-tRj3kChN.js";import"./timepicker.constants-98O2vrMr.js";import{u as d,e as _}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as rt}from"./testing.utils-mIZIUNbM.js";import{u as Mt}from"./useFocusTrap-BvDcNP0_.js";import{R as Ct,A as qt}from"./RequiredIndicator-CnxxEbTK.js";import{B as Ht}from"./BaseDropdown-BFt0BBZT.js";import{I as ce}from"./Icon-DOkBvtOM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-DAYVbW7O.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./auto-placement-hBju0MTR.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";var t=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(t||{});const Ne=0,Ut={hh:"",mm:"",ss:""},L=[t.HOURS,t.MINUTES,t.SECONDS],A={[t.HOURS]:23,[t.MINUTES]:59,[t.SECONDS]:59},Pt={[t.HOURS]:2,[t.MINUTES]:5,[t.SECONDS]:5},At=(e,a,r)=>{if(e!=null){const o=e+r;return o>=a?S(Ne):S(o)}else return S(Ne)},Lt=(e,a,r)=>{if(e!=null){const o=e-r;return o<0?S(a-r):S(o)}else return S(a-r)},S=e=>e.toString().padStart(2,"0"),P=e=>{const a=e[t.HOURS].toString().length,r=a+1,o=e[t.MINUTES].toString().length,m=r+o+1;return{[t.HOURS]:[0,a],[t.MINUTES]:[r,r+o],[t.SECONDS]:[m,m+e[t.SECONDS].toString().length]}},Vt=e=>L[Math.min(L.indexOf(e)+1,2)],st=e=>L[Math.max(L.indexOf(e)-1,0)],Kt=(e,a)=>a===t.HOURS?!!e[t.MINUTES]:a===t.MINUTES?!!e[t.SECONDS]:!0,jt=(e,a)=>{let r=e[t.HOURS];return(a!==t.HOURS||e[t.MINUTES])&&(r+=":"+e[t.MINUTES]),(a===t.SECONDS||e[t.SECONDS])&&(r+=":"+e[t.SECONDS]),r},W={"rte-base-input-picker":"_rte-base-input-picker_zk6tf_1","rte-base-input-picker-input":"_rte-base-input-picker-input_zk6tf_32","rte-base-input-picker-button":"_rte-base-input-picker-button_zk6tf_38","rte-base-input-picker-icon":"_rte-base-input-picker-icon_zk6tf_41"},it=({id:e,value:a,readOnly:r,onChange:o,onFocus:m,onKeyDown:y,onMouseUp:R,onOpenPicker:g,isFocused:N,pickerInputRef:w,pickerRef:x,ariaLabelledBy:E,isError:T,disabled:b})=>{const k=!b&&!r,D=!b&&!r&&N;return i.jsx(i.Fragment,{children:i.jsxs("div",{className:W["rte-base-input-picker"],ref:x,"data-focused":D??void 0,tabIndex:-1,onClick:k?m:void 0,"data-is-error":T||void 0,"data-is-disabled":b||void 0,"data-is-read-only":r||void 0,children:[i.jsx("input",{id:e,"aria-labelledby":E,readOnly:r,ref:w,className:W["rte-base-input-picker-input"],value:a,onFocus:k?m:void 0,onKeyDown:k?y:void 0,onChange:o,onMouseUp:k?R:void 0,disabled:b}),i.jsx("button",{onClick:k?g:void 0,className:W["rte-base-input-picker-button"],"aria-label":"Open time picker",disabled:b,children:i.jsx(ce,{name:"clock",appearance:"outlined",className:W["rte-base-input-picker-icon"],"aria-hidden":"true","data-is-focused":D||void 0,"data-is-error":T||void 0,"data-is-disabled":b||void 0})})]})})};it.__docgenInfo={description:"",methods:[],displayName:"BaseInputPicker",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFocused:{required:!1,tsType:{name:"boolean"},description:""},pickerInputRef:{required:!1,tsType:{name:"union",raw:"React.RefObject<HTMLInputElement> | ((element: HTMLInputElement) => void)",elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"unknown"}]},description:""},pickerRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onMouseUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onOpenPicker:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ariaLabelledBy:{required:!1,tsType:{name:"string"},description:""}},composes:["BaseInput"]};const Bt=()=>{const[e,a]=u.useState(t.HOURS),r=Vt(e),o=st(e),m=u.useCallback(()=>{a(r)},[r]),y=u.useCallback(()=>{a(o)},[o]);return{moveToNextSegment:m,moveToPreviousSegment:y,setActiveTimeSegment:a,activeTimeSegment:e,prevSegment:o,nextSegment:r}},Ft=e=>{const[a,r]=u.useState(null),o=u.useRef(null);return u.useEffect(()=>{e?requestAnimationFrame(()=>{requestAnimationFrame(()=>{r(o.current)})}):r(null)},[e]),{timePickerDrodownElement:a,timePickerDropdownRef:o}},Gt=/^\d*$/,Wt=(e,a)=>{const[r,o]=u.useState(e??Ut),{hourIncrement:m=1,minuteIncrement:y=1,secondIncrement:R=1}=a??{},g=(f,v)=>{v.length>2||!Gt.test(v)||o(I=>({...I,[f]:v}))},N=u.useCallback(f=>{const v=f.target.value;g(t.HOURS,v)},[]),w=u.useCallback(f=>{const v=f.target.value;g(t.MINUTES,v)},[]),x=u.useCallback(f=>{const v=f.target.value;g(t.SECONDS,v)},[]),E=u.useCallback((f,v)=>{const I=At(Number(r[f]),A[f],v);g(f,I)},[r]),T=u.useCallback((f,v)=>{const I=Lt(Number(r[f]),A[f],v);g(f,I)},[r]),b=u.useCallback(()=>{E(t.SECONDS,R)},[R,E]),k=u.useCallback(()=>{T(t.SECONDS,R)},[R,T]),D=u.useCallback(()=>{E(t.MINUTES,y)},[y,E]),V=u.useCallback(()=>{T(t.MINUTES,y)},[y,T]),K=u.useCallback(()=>{E(t.HOURS,m)},[m,E]),ae=u.useCallback(()=>{T(t.HOURS,m)},[m,T]);return{internalTimeValue:r,updateTimeSegment:g,handleOnChangeHours:N,handleOnChangeMinutes:w,handleOnChangeSeconds:x,increaseSeconds:b,decreaseSeconds:k,increaseMinutes:D,decreaseMinutes:V,increaseHours:K,decreaseHours:ae}},ue={"rte-time-picker-label":"_rte-time-picker-label_1wpg8_1","rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},H={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_14sla_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_14sla_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_14sla_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_14sla_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_14sla_43"},te=u.forwardRef(({value:e,onChange:a,increase:r,decrease:o,onKeyDown:m,unit:y,withSeparator:R,readOnly:g},N)=>{const w=T=>{g||m==null||m(T)},x=()=>{g||r==null||r()},E=()=>{g||o==null||o()};return i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:H["rte-time-picker-segment-container"],children:[i.jsxs("div",{className:H["rte-time-picker-segment-controls"],children:[i.jsx("button",{className:H["rte-time-picker-segment-controls-button"],onClick:x,tabIndex:-1,children:i.jsx(ce,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),i.jsx("input",{ref:N,type:"text",value:e||"00",onChange:a,onKeyDown:w,className:H["rte-time-picker-segment-input"],readOnly:g}),i.jsx("button",{className:H["rte-time-picker-segment-controls-button"],onClick:E,tabIndex:-1,children:i.jsx(ce,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),i.jsx("span",{children:y})]}),R&&i.jsx("span",{className:H["rte-time-picker-segment-separator"],children:":"})]})});te.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const Yt=/^\d*$/,le=u.forwardRef(({id:e,labelId:a,value:r,onChange:o,label:m,showLabel:y,required:R=!1,showLabelRequirement:g=!1,readOnly:N,assistiveTextLabel:w,assistiveAppearance:x,showAssistiveIcon:E,assistiveTextLink:T,isError:b,disabled:k,isHourReadOnly:D=!1,isMinuteReadOnly:V=!1,isSecondReadOnly:K=!1,hourIncrement:ae=1,minuteIncrement:f=1,secondIncrement:v=1},I)=>{var he;const[C,re]=u.useState(!1),[ot,me]=u.useState(!1),pe=u.useRef(null),M=u.useRef(null),{timePickerDrodownElement:ut,timePickerDropdownRef:ct}=Ft(C),{moveToNextSegment:U,moveToPreviousSegment:de,setActiveTimeSegment:se,activeTimeSegment:c,prevSegment:lt,nextSegment:mt}=Bt(),{internalTimeValue:p,updateTimeSegment:O,handleOnChangeHours:pt,handleOnChangeMinutes:dt,handleOnChangeSeconds:ft,increaseMinutes:fe,decreaseMinutes:ge,increaseSeconds:ve,decreaseSeconds:Te,increaseHours:Se,decreaseHours:Ee}=Wt(r,{hourIncrement:ae,minuteIncrement:f,secondIncrement:v});Mt(ut,C);const gt=jt(p,c),vt=C&&!k,Tt=n=>{M.current=n,typeof I=="function"?I(n):I&&(I.current=n)},ye=()=>c===t.HOURS?D:c===t.MINUTES?V:K,St=()=>{ye()||o==null||o(p)},Et=n=>{const s=n.key;s===F?(n.preventDefault(),ve()):s===G&&(n.preventDefault(),Te())},yt=n=>{const s=n.key;s===F?(n.preventDefault(),fe()):s===G&&(n.preventDefault(),ge())},bt=n=>{const s=n.key;s===F?(n.preventDefault(),Se()):s===G&&(n.preventDefault(),Ee())},ht=n=>{(n===Ie||n===Oe)&&Rt(),n===Re&&(de(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const s=P(p)[lt];(l=M.current)==null||l.setSelectionRange(s[0],s[1])})})),n===we&&Kt(p,c)&&(U(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const s=P(p)[mt];(l=M.current)==null||l.setSelectionRange(s[0],s[1])})}))},kt=n=>{const s=n.key;if([F,G,Re,we,Ie,Oe].includes(s)){n.preventDefault(),ht(s);return}if(!Yt.test(s)){j();return}if(ye()){j();return}else{const l=p[c];if(l.length>=2)wt(l,S(Number(s)));else{const q=l+s,ke=Pt[c];if(l.length===0&&Number(s)>ke)O(c,S(Number(s))),U();else if(q.length===2){const B=S(Math.min(Number(q),A[c]));O(c,B),U()}else O(c,S(Number(s)))}}},Rt=()=>{if(p[c]!=="")O(c,"");else{const n=st(c);n!==c&&(O(n,""),de())}},wt=(n,s)=>{var B;const l=P(p)[c][0];if((((B=M.current)==null?void 0:B.selectionStart)??0)-l===0)if(n[0]==="0"){const ie=n[1]+s[1],oe=S(Math.min(Number(ie),A[c]));O(c,oe),U()}else O(c,s);else{const ie=Number(n[0]+s),oe=S(Math.min(ie,A[c]));O(c,oe),U()}},It=()=>{var q;C&&re(!1);const n=((q=M.current)==null?void 0:q.selectionStart)??0,s=P(p),l=1;n<=s[t.HOURS][l]?se(t.HOURS):n<=s[t.MINUTES][l]?se(t.MINUTES):se(t.SECONDS)},be=()=>{var n;k||(me(!0),(n=M.current)==null||n.focus())},Ot=()=>{me(!1)},_t=()=>{be()},Nt=()=>{Object.values(p).forEach((n,s)=>{const l=L[s];n===""?O(l,S(0)):O(l,S(Number(n)))})},xt=()=>{be(),re(n=>!n),Nt()},Dt=()=>{re(!1),Ot()},j=u.useCallback(()=>{const s=P(p)[c];requestAnimationFrame(()=>{var l;(l=M.current)==null||l.setSelectionRange(s[0],s[1])})},[c,p]);return u.useEffect(()=>{j()},[j]),N&&(p.hh===""||p.mm===""||p.ss==="")?(console.warn("TimePicker is in readOnly mode but the value is not fully set. Please provide a value with all segments (hh, mm, ss) set to non-empty values to avoid unexpected behavior."),null):b&&!w?(console.warn("TimePicker is in error state but no assistiveTextLabel is provided. Please provide assistive text to explain the error."),null):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:ue["rte-time-picker-header"],children:y&&i.jsxs("label",{htmlFor:e,id:a??m,className:ue["rte-time-picker-label"],children:[m,i.jsx(Ct,{required:R,showLabelRequirement:g})]})}),i.jsx(Ht,{dropdownId:"time-picker-dropdown",isList:!1,onClose:Dt,offset:8,style:{width:(he=pe.current)==null?void 0:he.offsetWidth},trigger:i.jsx(it,{id:e,ariaLabelledBy:a,value:gt,readOnly:N,onChange:St,onFocus:_t,onKeyDown:kt,onMouseUp:It,pickerInputRef:Tt,pickerRef:pe,isFocused:ot,onOpenPicker:xt,assistiveTextLabel:w,assistiveAppearance:x,showAssistiveIcon:E,assistiveTextLink:T,isError:b,disabled:k}),isOpen:vt,children:i.jsxs("div",{className:ue["rte-time-picker-dropdown"],ref:ct,children:[i.jsx(te,{value:p.hh,onChange:pt,onKeyDown:bt,increase:Se,decrease:Ee,unit:"h",withSeparator:!0,readOnly:D}),i.jsx(te,{value:p.mm,onChange:dt,onKeyDown:yt,increase:fe,decrease:ge,unit:"m",withSeparator:!0,readOnly:V}),i.jsx(te,{value:p.ss,onChange:ft,onKeyDown:Et,increase:ve,decrease:Te,unit:"s",readOnly:K})]})}),w&&!C&&i.jsx(qt,{label:w,appearance:b?"error":x,showIcon:E,href:T})]})});le.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{id:{required:!0,tsType:{name:"string"},description:""},labelId:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"TimeFormat"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: TimeFormat) => void",signature:{arguments:[{type:{name:"TimeFormat"},name:"value"}],return:{name:"void"}}},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:""},showLabelRequirement:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isHourReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isMinuteReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isSecondReadOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hourIncrement:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},minuteIncrement:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},secondIncrement:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["BaseInput","Omit"]};const Tn={title:"Composants/TimePicker/TimePicker",component:le,argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},h={args:{id:"time-picker",label:"Label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[a,r]=u.useState({hh:"",mm:"",ss:""});return i.jsx(le,{...e,id:"time-picker",value:a,onChange:r})}},Y={args:{...h.args,disabled:!0}},z={args:{...h.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},$={args:{...h.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},X={args:{...h.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},J={args:{...h.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},Q={args:{...h.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Z={args:{...h.args,minuteIncrement:15},play:async({canvasElement:e})=>{await rt(e);const a=e.querySelector("input");await d.tab(),await d.tab(),await d.keyboard(at),_(a.value).toBe("00:00:00"),await d.tab(),await d.keyboard(ne),_(a.value).toBe("00:15:00"),await d.keyboard(ne),_(a.value).toBe("00:30:00")}},ee={args:{...h.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await rt(e);const a=e.querySelector("input");await d.tab(),await d.keyboard("a"),_(a.value).toBe("12:30:45"),await d.keyboard(_e),await d.keyboard("3"),_(a.value).toBe("12:03:45"),await d.keyboard("2"),_(a.value).toBe("12:32:45"),await d.keyboard(_e),await d.keyboard("2"),_(a.value).toBe("12:32:02"),await d.tab(),await d.keyboard(at),await d.keyboard(ne),_(a.value).toBe("13:32:02"),await d.tab(),await d.keyboard(ne),_(a.value).toBe("13:33:02")}};var xe,De,Me;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    id: "time-picker",
    label: "Label",
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
    return <TimePicker {...args} id="time-picker" value={value} onChange={setValue} />;
  }
}`,...(Me=(De=h.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var Ce,qe,He;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(He=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Ue,Pe,Ae;z.parameters={...z.parameters,docs:{...(Ue=z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Ae=(Pe=z.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Le,Ve,Ke;$.parameters={...$.parameters,docs:{...(Le=$.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(Ke=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.source}}};var je,Be,Fe;X.parameters={...X.parameters,docs:{...(je=X.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(Fe=(Be=X.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Ge,We,Ye;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(Ye=(We=J.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var ze,$e,Xe;Q.parameters={...Q.parameters,docs:{...(ze=Q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Xe=($e=Q.parameters)==null?void 0:$e.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ee.parameters={...ee.parameters,docs:{...(et=ee.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ee.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};const Sn=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{h as Default,Y as Disabled,$ as Error,X as HourReadOnly,ee as KeyboardInteractions,J as MinuteReadOnly,z as ReadOnly,Q as SecondReadOnly,Z as WithIncrement,Sn as __namedExportsOrder,Tn as default};
