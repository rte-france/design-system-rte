import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as _e,g as ot,d as ee}from"./keyboard-test.constants-C4IJ8E3i.js";import{T as g,l as te,m as Ct,n as At,o as Pt,p as le}from"./timepicker.constants-V9Xrpx_a.js";import{u as f,e as w}from"./index-4rjIhT2C.js";import{r as s}from"./index-G8LIXM5I.js";import{f as it}from"./testing.utils-mIZIUNbM.js";import{a as G,A as j,b as Ie,c as Oe,B as Ne,D as xe}from"./keyboard.constants-D1KJQ2-m.js";import{u as Vt}from"./useFocusTrap-C_kwluQD.js";import{L as Ut,A as Ht}from"./Label-BZwpSmrJ.js";import{B as Lt}from"./BaseDropdown-CgvF33v4.js";import{w as Kt,B as Bt}from"./BaseInputPicker-CPcCLI5t.js";import{I as De}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-DLPtM2IA.js";import"./index-DSdvzt-y.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const O=e=>e.toString().padStart(2,"0"),U=e=>{const n=e[g.HOURS].toString().length,r=3,i=n+r,u=e[g.MINUTES].toString().length,m=i+u+r;return{[g.HOURS]:[0,n],[g.MINUTES]:[i,i+u],[g.SECONDS]:[m,m+e[g.SECONDS].toString().length]}},qt=e=>te[Math.max(te.indexOf(e)-1,0)],Gt=(e,n)=>n===g.HOURS?!!e[g.MINUTES]:n===g.MINUTES?!!e[g.SECONDS]:!0,jt=(e,n)=>{let r=e[g.HOURS];return(n!==g.HOURS||e[g.MINUTES])&&(r+=" : "+e[g.MINUTES]),(n===g.SECONDS||e[g.SECONDS])&&(r+=" : "+e[g.SECONDS]),r};var b=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(b||{});const ne=0,Ft={hh:"",mm:"",ss:""},ae=["hh","mm","ss"],Me={hh:23,mm:59,ss:59},Wt=(e,n,r)=>{const u=(isNaN(e)?ne:e)+r,m=u>n?ne:u;return re(m)},Yt=(e,n,r)=>{const u=(isNaN(e)?ne:e)-r;return u<0?re(n):re(u)},re=e=>e.toString().padStart(2,"0"),$t=e=>ae[Math.min(ae.indexOf(e)+1,2)],zt=e=>ae[Math.max(ae.indexOf(e)-1,0)],Xt=()=>{const[e,n]=s.useState(b.HOURS),r=$t(e),i=zt(e),u=s.useCallback(()=>{n(r)},[r]),m=s.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:u,moveToPreviousSegment:m,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:r}},Jt=e=>{const[n,r]=s.useState(null),i=s.useRef(null);return s.useEffect(()=>{e?Kt(()=>{r(i.current)}):r(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},Qt=/^\d*$/,Zt=(e,n)=>{const[r,i]=s.useState(e??Ft),{hourIncrement:u=1,minuteIncrement:m=1,secondIncrement:_=1}=n??{},E=(d,S)=>{S.length>2||!Qt.test(S)||i(R=>({...R,[d]:S}))},x=s.useCallback(d=>{const S=d.target.value;E(b.HOURS,S)},[]),I=s.useCallback(d=>{const S=d.target.value;E(b.MINUTES,S)},[]),D=s.useCallback(d=>{const S=d.target.value;E(b.SECONDS,S)},[]),T=s.useCallback((d,S)=>{if(r[d]==="")E(d,re(ne));else{const R=Wt(Number(r[d]),Me[d],S);E(d,R)}},[r]),h=s.useCallback((d,S)=>{const R=Yt(Number(r[d]),Me[d],S);E(d,R)},[r]),A=s.useCallback(()=>{T(b.SECONDS,_)},[_,T]),P=s.useCallback(()=>{h(b.SECONDS,_)},[_,h]),H=s.useCallback(()=>{T(b.MINUTES,m)},[m,T]),L=s.useCallback(()=>{h(b.MINUTES,m)},[m,h]),K=s.useCallback(()=>{T(b.HOURS,u)},[u,T]),se=s.useCallback(()=>{h(b.HOURS,u)},[u,h]);return{internalTimeValue:r,updateTimeSegment:E,handleOnChangeHours:x,handleOnChangeMinutes:I,handleOnChangeSeconds:D,increaseSeconds:A,decreaseSeconds:P,increaseMinutes:H,decreaseMinutes:L,increaseHours:K,decreaseHours:se}},en={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},C={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},Z=s.forwardRef(({value:e,onChange:n,increase:r,decrease:i,onKeyDown:u,unit:m,withSeparator:_,readOnly:E},x)=>{const I=h=>{E||u==null||u(h)},D=()=>{E||r==null||r()},T=()=>{E||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:C["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:C["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:C["rte-time-picker-segment-controls-button"],onClick:D,tabIndex:-1,type:"button","aria-label":`Increase ${m==="h"?"hours":m==="m"?"minutes":"seconds"} value`,children:o.jsx(De,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:x,type:"text",value:e??"00",onChange:n,onKeyDown:I,tabIndex:E?-1:0,className:C["rte-time-picker-segment-input"],readOnly:E}),o.jsx("button",{className:C["rte-time-picker-segment-controls-button"],onClick:T,tabIndex:-1,type:"button","aria-label":`Decrease ${m==="h"?"hours":m==="m"?"minutes":"seconds"} value`,children:o.jsx(De,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:m})]}),_&&o.jsx("span",{className:C["rte-time-picker-segment-separator"],children:":"})]})});Z.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const tn=/^\d*$/,[me,de,nn]=te,pe=s.forwardRef(({id:e,labelId:n,value:r,onChange:i,label:u,showLabel:m,required:_=!1,showLabelRequirement:E=!1,readOnly:x,assistiveTextLabel:I,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:h,isError:A,disabled:P,isHourReadOnly:H=!1,isMinuteReadOnly:L=!1,isSecondReadOnly:K=!1,hourIncrement:se=1,minuteIncrement:d=1,secondIncrement:S=1},R)=>{var ke;const[M,oe]=s.useState(!1),[ut,fe]=s.useState(!1),ge=s.useRef(null),N=s.useRef(null),{timePickerDropdownElement:ct,timePickerDropdownRef:lt}=Jt(M),{moveToNextSegment:V,moveToPreviousSegment:Ee,setActiveTimeSegment:ie,activeTimeSegment:c,prevSegment:mt,nextSegment:dt}=Xt(),{internalTimeValue:p,updateTimeSegment:y,handleOnChangeHours:pt,handleOnChangeMinutes:ft,handleOnChangeSeconds:gt,increaseMinutes:Se,decreaseMinutes:ve,increaseSeconds:Te,decreaseSeconds:he,increaseHours:be,decreaseHours:Re}=Zt(r,{hourIncrement:se,minuteIncrement:d,secondIncrement:S});Vt(ct,M);const Et=jt(p,c),St=M&&!P,vt=t=>{N.current=t,typeof R=="function"?R(t):R&&(R.current=t)},Tt=()=>c===me?H:c===de?L:K,ht=t=>{const a=t.key;a===G?(t.preventDefault(),Te()):a===j&&(t.preventDefault(),he())},bt=t=>{const a=t.key;a===G?(t.preventDefault(),Se()):a===j&&(t.preventDefault(),ve())},Rt=t=>{const a=t.key;a===G?(t.preventDefault(),be()):a===j&&(t.preventDefault(),Re())},yt=t=>{(t===Ne||t===xe)&&wt(),t===Ie&&(Ee(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const a=U(p)[mt];(l=N.current)==null||l.setSelectionRange(a[0],a[1])})})),t===Oe&&Gt(p,c)&&(V(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var l;const a=U(p)[dt];(l=N.current)==null||l.setSelectionRange(a[0],a[1])})}))},kt=t=>{const a=t.key;if([G,j,Ie,Oe,Ne,xe].includes(a)){t.preventDefault(),yt(a);return}if(!tn.test(a)){B();return}if(Tt()){B();return}else{const l=p[c];if(l.length>=2)_t(l,O(Number(a)));else{const k=l+a,we=Pt[c];if(l.length===0&&Number(a)>we)y(c,O(Number(a))),V();else if(k.length===2){const q=O(Math.min(Number(k),le[c]));y(c,q),V()}else y(c,O(Number(a)))}}},wt=()=>{if(p[c]!=="")y(c,"");else{const t=qt(c);t!==c&&(y(t,""),Ee())}},_t=(t,a)=>{var q;const l=U(p)[c][0];if((((q=N.current)==null?void 0:q.selectionStart)??0)-l===0)if(t[0]==="0"){const ue=t[1]+a[1],ce=O(Math.min(Number(ue),le[c]));y(c,ce),V()}else y(c,a);else{const ue=Number(t[0]+a),ce=O(Math.min(ue,le[c]));y(c,ce),V()}},It=()=>{var k;M&&oe(!1);const t=((k=N.current)==null?void 0:k.selectionStart)??0,a=U(p),l=1;t<=a[me][l]?ie(me):t<=a[de][l]?ie(de):ie(nn)},ye=()=>{var t;P||(fe(!0),(t=N.current)==null||t.focus())},Ot=()=>{fe(!1)},Nt=()=>{ye()},xt=()=>{Object.values(p).forEach((t,a)=>{const l=te[a],k=Number(t);isNaN(k)?y(l,O(0)):y(l,O(k))})},Dt=()=>{ye(),oe(t=>!t),xt()},Mt=()=>{oe(!1),Ot()},B=s.useCallback(()=>{const a=U(p)[c];requestAnimationFrame(()=>{var l;(l=N.current)==null||l.setSelectionRange(a[0],a[1])})},[c,p]);return s.useEffect(()=>{B()},[B]),s.useEffect(()=>{i==null||i(p)},[p,i]),x&&(p.hh===""||p.mm===""||p.ss==="")?(console.warn(Ct),null):A&&!I?(console.warn(At),null):o.jsxs(o.Fragment,{children:[m&&o.jsx(Ut,{label:u,required:_,showLabelRequirement:E}),o.jsx(Lt,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Mt,offset:8,style:{width:(ke=ge.current)==null?void 0:ke.offsetWidth},trigger:o.jsx(Bt,{id:e,ariaLabelledBy:n,"aria-label":m?void 0:u,value:Et,readOnly:x,onFocus:Nt,onKeyDown:kt,onMouseUp:It,pickerInputRef:vt,pickerRef:ge,isFocused:ut,onOpenPicker:Dt,assistiveTextLabel:I,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:h,isError:A,disabled:P,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:St,children:o.jsxs("div",{className:en["rte-time-picker-dropdown"],ref:lt,children:[o.jsx(Z,{value:p.hh,onChange:pt,onKeyDown:Rt,increase:be,decrease:Re,unit:"h",withSeparator:!0,readOnly:H}),o.jsx(Z,{value:p.mm,onChange:ft,onKeyDown:bt,increase:Se,decrease:ve,unit:"m",withSeparator:!0,readOnly:L}),o.jsx(Z,{value:p.ss,onChange:gt,onKeyDown:ht,increase:Te,decrease:he,unit:"s",readOnly:K})]})}),I&&!M&&o.jsx(Ht,{label:I,appearance:A?"error":D,showIcon:T,href:h})]})});pe.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Nn={title:"Composants/TimePicker/TimePicker",component:pe,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},v={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,r]=s.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(pe,{...e,id:"time-picker",value:n,onChange:r})})}},F={args:{...v.args,disabled:!0}},W={args:{...v.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Y={args:{...v.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},$={args:{...v.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},z={args:{...v.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},X={args:{...v.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},J={tags:["skip-ci"],args:{...v.args,minuteIncrement:15},play:async({canvasElement:e})=>{await it(e);const n=e.querySelector("input");await f.tab(),await f.tab(),await f.keyboard(ot),w(n.value).toBe("00 : 00 : 00"),await f.tab(),await f.keyboard(ee),w(n.value).toBe("00 : 15 : 00"),await f.keyboard(ee),w(n.value).toBe("00 : 30 : 00")}},Q={tags:["skip-ci"],args:{...v.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await it(e);const n=e.querySelector("input");await f.tab(),await f.keyboard("a"),w(n.value).toBe("12 : 30 : 45"),await f.keyboard(_e),await f.keyboard("3"),w(n.value).toBe("12 : 03 : 45"),await f.keyboard("2"),w(n.value).toBe("12 : 32 : 45"),await f.keyboard(_e),await f.keyboard("2"),w(n.value).toBe("12 : 32 : 02"),await f.tab(),await f.keyboard(ot),await f.keyboard(ee),w(n.value).toBe("13 : 32 : 02"),await f.tab(),await f.keyboard(ee),w(n.value).toBe("13 : 33 : 02")}};var Ce,Ae,Pe;v.parameters={...v.parameters,docs:{...(Ce=v.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Pe=(Ae=v.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ve,Ue,He;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(He=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Le,Ke,Be;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Be=(Ke=W.parameters)==null?void 0:Ke.docs)==null?void 0:Be.source}}};var qe,Ge,je;Y.parameters={...Y.parameters,docs:{...(qe=Y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(je=(Ge=Y.parameters)==null?void 0:Ge.docs)==null?void 0:je.source}}};var Fe,We,Ye;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(Ye=(We=$.parameters)==null?void 0:We.docs)==null?void 0:Ye.source}}};var $e,ze,Xe;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(Xe=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;X.parameters={...X.parameters,docs:{...(Je=X.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Ze=(Qe=X.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;J.parameters={...J.parameters,docs:{...(et=J.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=J.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,st;Q.parameters={...Q.parameters,docs:{...(at=Q.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};const xn=["Default","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{v as Default,F as Disabled,Y as Error,$ as HourReadOnly,Q as KeyboardInteractions,z as MinuteReadOnly,W as ReadOnly,X as SecondReadOnly,J as WithIncrement,xn as __namedExportsOrder,Nn as default};
