import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as Oe,g as ut,d as te}from"./keyboard-test.constants-C4IJ8E3i.js";import{T as g,l as ne,m as Pt,n as Vt,o as Ut,p as me}from"./timepicker.constants-CgjTDnHz.js";import{u as f,e as w}from"./index-C4S39nCK.js";import{r as s}from"./index-G8LIXM5I.js";import{f as ct}from"./testing.utils-BE-6QaT4.js";import{a as j,A as F,b as Ne,c as xe,B as De,D as Me}from"./keyboard.constants-D1KJQ2-m.js";import{u as Ht}from"./useFocusTrap-BgE6CX7T.js";import{L as Lt,A as Kt}from"./Label-BZwpSmrJ.js";import{B as Bt}from"./BaseDropdown-B_KNdBqD.js";import{w as qt,h as Gt,B as jt}from"./picker.utils-L2kXuaHr.js";import{I as Ce}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-DLPtM2IA.js";import"./index-DSdvzt-y.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";const O=e=>e.toString().padStart(2,"0"),U=e=>{const n=e[g.HOURS].toString().length,r=3,i=n+r,u=e[g.MINUTES].toString().length,d=i+u+r;return{[g.HOURS]:[0,n],[g.MINUTES]:[i,i+u],[g.SECONDS]:[d,d+e[g.SECONDS].toString().length]}},Ft=e=>ne[Math.max(ne.indexOf(e)-1,0)],Wt=(e,n)=>n===g.HOURS?!!e[g.MINUTES]:n===g.MINUTES?!!e[g.SECONDS]:!0,Yt=(e,n)=>{let r=e[g.HOURS];return(n!==g.HOURS||e[g.MINUTES])&&(r+=" : "+e[g.MINUTES]),(n===g.SECONDS||e[g.SECONDS])&&(r+=" : "+e[g.SECONDS]),r};var R=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(R||{});const ae=0,$t={hh:"",mm:"",ss:""},re=["hh","mm","ss"],Ae={hh:23,mm:59,ss:59},zt=(e,n,r)=>{const u=(isNaN(e)?ae:e)+r,d=u>n?ae:u;return se(d)},Xt=(e,n,r)=>{const u=(isNaN(e)?ae:e)-r;return u<0?se(n):se(u)},se=e=>e.toString().padStart(2,"0"),Jt=e=>re[Math.min(re.indexOf(e)+1,2)],Qt=e=>re[Math.max(re.indexOf(e)-1,0)],Zt=()=>{const[e,n]=s.useState(R.HOURS),r=Jt(e),i=Qt(e),u=s.useCallback(()=>{n(r)},[r]),d=s.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:u,moveToPreviousSegment:d,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:r}},en=e=>{const[n,r]=s.useState(null),i=s.useRef(null);return s.useEffect(()=>{e?qt(()=>{r(i.current)}):r(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},tn=/^\d*$/,nn=(e,n)=>{const[r,i]=s.useState(e??$t),{hourIncrement:u=1,minuteIncrement:d=1,secondIncrement:_=1}=n??{},E=(p,S)=>{S.length>2||!tn.test(S)||i(b=>({...b,[p]:S}))},x=s.useCallback(p=>{const S=p.target.value;E(R.HOURS,S)},[]),I=s.useCallback(p=>{const S=p.target.value;E(R.MINUTES,S)},[]),D=s.useCallback(p=>{const S=p.target.value;E(R.SECONDS,S)},[]),T=s.useCallback((p,S)=>{if(r[p]==="")E(p,se(ae));else{const b=zt(Number(r[p]),Ae[p],S);E(p,b)}},[r]),v=s.useCallback((p,S)=>{const b=Xt(Number(r[p]),Ae[p],S);E(p,b)},[r]),A=s.useCallback(()=>{T(R.SECONDS,_)},[_,T]),P=s.useCallback(()=>{v(R.SECONDS,_)},[_,v]),H=s.useCallback(()=>{T(R.MINUTES,d)},[d,T]),L=s.useCallback(()=>{v(R.MINUTES,d)},[d,v]),K=s.useCallback(()=>{T(R.HOURS,u)},[u,T]),oe=s.useCallback(()=>{v(R.HOURS,u)},[u,v]);return{internalTimeValue:r,updateTimeSegment:E,handleOnChangeHours:x,handleOnChangeMinutes:I,handleOnChangeSeconds:D,increaseSeconds:A,decreaseSeconds:P,increaseMinutes:H,decreaseMinutes:L,increaseHours:K,decreaseHours:oe}},an={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},C={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},ee=s.forwardRef(({value:e,onChange:n,increase:r,decrease:i,onKeyDown:u,unit:d,withSeparator:_,readOnly:E},x)=>{const I=v=>{E||u==null||u(v)},D=()=>{E||r==null||r()},T=()=>{E||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:C["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:C["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:C["rte-time-picker-segment-controls-button"],onClick:D,tabIndex:-1,type:"button","aria-label":`Increase ${d==="h"?"hours":d==="m"?"minutes":"seconds"} value`,children:o.jsx(Ce,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:x,type:"text",value:e??"00",onChange:n,onKeyDown:I,tabIndex:E?-1:0,className:C["rte-time-picker-segment-input"],readOnly:E}),o.jsx("button",{className:C["rte-time-picker-segment-controls-button"],onClick:T,tabIndex:-1,type:"button","aria-label":`Decrease ${d==="h"?"hours":d==="m"?"minutes":"seconds"} value`,children:o.jsx(Ce,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:d})]}),_&&o.jsx("span",{className:C["rte-time-picker-segment-separator"],children:":"})]})});ee.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const rn=/^\d*$/,[de,pe,sn]=ne,fe=s.forwardRef(({id:e,labelId:n,value:r,onChange:i,label:u,showLabel:d,required:_=!1,showLabelRequirement:E=!1,readOnly:x,assistiveTextLabel:I,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:v,isError:A,disabled:P,isHourReadOnly:H=!1,isMinuteReadOnly:L=!1,isSecondReadOnly:K=!1,hourIncrement:oe=1,minuteIncrement:p=1,secondIncrement:S=1},b)=>{var _e;const[M,ie]=s.useState(!1),[lt,ge]=s.useState(!1),Ee=s.useRef(null),N=s.useRef(null),B=s.useRef(i),Se=s.useRef(r??null),{timePickerDropdownElement:mt,timePickerDropdownRef:dt}=en(M),{moveToNextSegment:V,moveToPreviousSegment:he,setActiveTimeSegment:ue,activeTimeSegment:c,prevSegment:pt,nextSegment:ft}=Zt(),{internalTimeValue:l,updateTimeSegment:y,handleOnChangeHours:gt,handleOnChangeMinutes:Et,handleOnChangeSeconds:St,increaseMinutes:Te,decreaseMinutes:ve,increaseSeconds:Re,decreaseSeconds:be,increaseHours:ye,decreaseHours:ke}=nn(r,{hourIncrement:oe,minuteIncrement:p,secondIncrement:S});Ht(mt,M);const ht=Yt(l,c),Tt=M&&!P,vt=t=>{N.current=t,typeof b=="function"?b(t):b&&(b.current=t)},Rt=()=>c===de?H:c===pe?L:K,bt=t=>{const a=t.key;a===j?(t.preventDefault(),Re()):a===F&&(t.preventDefault(),be())},yt=t=>{const a=t.key;a===j?(t.preventDefault(),Te()):a===F&&(t.preventDefault(),ve())},kt=t=>{const a=t.key;a===j?(t.preventDefault(),ye()):a===F&&(t.preventDefault(),ke())},wt=t=>{(t===De||t===Me)&&It(),t===Ne&&(he(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const a=U(l)[pt];(m=N.current)==null||m.setSelectionRange(a[0],a[1])})})),t===xe&&Wt(l,c)&&(V(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var m;const a=U(l)[ft];(m=N.current)==null||m.setSelectionRange(a[0],a[1])})}))},_t=t=>{const a=t.key;if([j,F,Ne,xe,De,Me].includes(a)){t.preventDefault(),wt(a);return}if(!rn.test(a)){q();return}if(Rt()){q();return}else{const m=l[c];if(m.length>=2)Ot(m,O(Number(a)));else{const k=m+a,Ie=Ut[c];if(m.length===0&&Number(a)>Ie)y(c,O(Number(a))),V();else if(k.length===2){const G=O(Math.min(Number(k),me[c]));y(c,G),V()}else y(c,O(Number(a)))}}},It=()=>{if(l[c]!=="")y(c,"");else{const t=Ft(c);t!==c&&(y(t,""),he())}},Ot=(t,a)=>{var G;const m=U(l)[c][0];if((((G=N.current)==null?void 0:G.selectionStart)??0)-m===0)if(t[0]==="0"){const ce=t[1]+a[1],le=O(Math.min(Number(ce),me[c]));y(c,le),V()}else y(c,a);else{const ce=Number(t[0]+a),le=O(Math.min(ce,me[c]));y(c,le),V()}},Nt=()=>{var k;M&&ie(!1);const t=((k=N.current)==null?void 0:k.selectionStart)??0,a=U(l),m=1;t<=a[de][m]?ue(de):t<=a[pe][m]?ue(pe):ue(sn)},we=()=>{var t;P||(ge(!0),(t=N.current)==null||t.focus())},xt=()=>{ge(!1)},Dt=()=>{we()},Mt=()=>{Object.values(l).forEach((t,a)=>{const m=ne[a],k=Number(t);isNaN(k)?y(m,O(0)):y(m,O(k))})},Ct=()=>{we(),ie(t=>!t),Mt()},At=()=>{ie(!1),xt()},q=s.useCallback(()=>{const a=U(l)[c];requestAnimationFrame(()=>{var m;(m=N.current)==null||m.setSelectionRange(a[0],a[1])})},[c,l]);return s.useEffect(()=>{q()},[q]),s.useEffect(()=>{B.current=i},[i]),s.useEffect(()=>{var t;Gt(Se.current,l)||(Se.current=l,(t=B.current)==null||t.call(B,l))},[l]),x&&(l.hh===""||l.mm===""||l.ss==="")?(console.warn(Pt),null):A&&!I?(console.warn(Vt),null):o.jsxs(o.Fragment,{children:[d&&o.jsx(Lt,{label:u,required:_,showLabelRequirement:E}),o.jsx(Bt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:At,offset:8,style:{width:(_e=Ee.current)==null?void 0:_e.offsetWidth},trigger:o.jsx(jt,{id:e,ariaLabelledBy:n,"aria-label":d?void 0:u,value:ht,readOnly:x,onFocus:Dt,onKeyDown:_t,onMouseUp:Nt,pickerInputRef:vt,pickerRef:Ee,isFocused:lt,onOpenPicker:Ct,assistiveTextLabel:I,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:v,isError:A,disabled:P,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:Tt,children:o.jsxs("div",{className:an["rte-time-picker-dropdown"],ref:dt,children:[o.jsx(ee,{value:l.hh,onChange:gt,onKeyDown:kt,increase:ye,decrease:ke,unit:"h",withSeparator:!0,readOnly:H}),o.jsx(ee,{value:l.mm,onChange:Et,onKeyDown:yt,increase:Te,decrease:ve,unit:"m",withSeparator:!0,readOnly:L}),o.jsx(ee,{value:l.ss,onChange:St,onKeyDown:bt,increase:Re,decrease:be,unit:"s",readOnly:K})]})}),I&&!M&&o.jsx(Kt,{label:I,appearance:A?"error":D,showIcon:T,href:v})]})});fe.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Mn={title:"Composants/TimePicker/TimePicker",component:fe,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},h={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,r]=s.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(fe,{...e,id:"time-picker",value:n,onChange:r})})}},W={args:{...h.args,disabled:!0}},Y={args:{...h.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},$={args:{...h.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},z={args:{...h.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},X={args:{...h.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},J={args:{...h.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Q={tags:["skip-ci"],args:{...h.args,minuteIncrement:15},play:async({canvasElement:e})=>{await ct(e);const n=e.querySelector("input");await f.tab(),await f.tab(),await f.keyboard(ut),w(n.value).toBe("00 : 00 : 00"),await f.tab(),await f.keyboard(te),w(n.value).toBe("00 : 15 : 00"),await f.keyboard(te),w(n.value).toBe("00 : 30 : 00")}},Z={tags:["skip-ci"],args:{...h.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await ct(e);const n=e.querySelector("input");await f.tab(),await f.keyboard("a"),w(n.value).toBe("12 : 30 : 45"),await f.keyboard(Oe),await f.keyboard("3"),w(n.value).toBe("12 : 03 : 45"),await f.keyboard("2"),w(n.value).toBe("12 : 32 : 45"),await f.keyboard(Oe),await f.keyboard("2"),w(n.value).toBe("12 : 32 : 02"),await f.tab(),await f.keyboard(ut),await f.keyboard(te),w(n.value).toBe("13 : 32 : 02"),await f.tab(),await f.keyboard(te),w(n.value).toBe("13 : 33 : 02")}};var Pe,Ve,Ue;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Ue=(Ve=h.parameters)==null?void 0:Ve.docs)==null?void 0:Ue.source}}};var He,Le,Ke;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Ke=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Ke.source}}};var Be,qe,Ge;Y.parameters={...Y.parameters,docs:{...(Be=Y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Ge=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Ge.source}}};var je,Fe,We;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(We=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Ye,$e,ze;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(rt=(at=Q.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var st,ot,it;Z.parameters={...Z.parameters,docs:{...(st=Z.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(it=(ot=Z.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};const Cn=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{h as Default,W as Disabled,$ as Error,z as HourReadOnly,Z as KeyboardInteractions,X as MinuteReadOnly,Y as ReadOnly,J as SecondReadOnly,Q as WithIncrement,Cn as __namedExportsOrder,Mn as default};
