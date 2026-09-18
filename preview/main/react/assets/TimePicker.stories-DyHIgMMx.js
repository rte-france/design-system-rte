import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as Pe,a as Rt,e as ce}from"./keyboard-test.constants-D8znW6ct.js";import{T as E,n as ue,o as Qt,p as Zt,q as en,r as ve}from"./timepicker.constants-CynrC_9x.js";import{w as tn,e as R,u as g}from"./index-4rjIhT2C.js";import{r as s}from"./index-G8LIXM5I.js";import{f as kt}from"./testing.utils-r13wRTL2.js";import{a as z,A as X,b as Ue,c as Le,B as He,D as Be}from"./keyboard.constants-D1KJQ2-m.js";import{u as nn}from"./useFocusTrap-D2ZnoMa2.js";import{u as an}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as sn,A as rn}from"./Label-B-uQrS7p.js";import{D as on}from"./Dropdown-BM0K4W_t.js";import{h as cn,B as un}from"./picker.utils-B3Xch9au.js";import{w as ln}from"./animation-DwV-fHIC.js";import{I as Ke}from"./Icon-VewZnR13.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-Bi6533Gh.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const N=e=>e.toString().padStart(2,"0"),H=e=>{const n=e[E.HOURS].toString().length,r=3,i=n+r,l=e[E.MINUTES].toString().length,p=i+l+r;return{[E.HOURS]:[0,n],[E.MINUTES]:[i,i+l],[E.SECONDS]:[p,p+e[E.SECONDS].toString().length]}},mn=e=>ue[Math.max(ue.indexOf(e)-1,0)],dn=(e,n)=>n===E.HOURS?!!e[E.MINUTES]:n===E.MINUTES?!!e[E.SECONDS]:!0,pn=(e,n)=>{let r=e[E.HOURS];return(n!==E.HOURS||e[E.MINUTES])&&(r+=" : "+e[E.MINUTES]),(n===E.SECONDS||e[E.SECONDS])&&(r+=" : "+e[E.SECONDS]),r};var b=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(b||{});const le=0,qe={hh:"",mm:"",ss:""},me=["hh","mm","ss"],je={hh:23,mm:59,ss:59},fn=(e,n,r)=>{const l=(isNaN(e)?le:e)+r,p=l>n?le:l;return de(p)},gn=(e,n,r)=>{const l=(isNaN(e)?le:e)-r;return l<0?de(n):de(l)},de=e=>e.toString().padStart(2,"0"),En=e=>me[Math.min(me.indexOf(e)+1,2)],hn=e=>me[Math.max(me.indexOf(e)-1,0)],Sn=()=>{const[e,n]=s.useState(b.HOURS),r=En(e),i=hn(e),l=s.useCallback(()=>{n(r)},[r]),p=s.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:l,moveToPreviousSegment:p,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:r}},vn=e=>{const[n,r]=s.useState(null),i=s.useRef(null);return s.useEffect(()=>{e?ln(()=>{r(i.current)}):r(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},Tn=/^\d*$/,bn=(e,n,r=!1)=>{const[i,l]=s.useState(e??qe);s.useEffect(()=>{if(!r)return;const c=e??qe;l(f=>f.hh===c.hh&&f.mm===c.mm&&f.ss===c.ss?f:c)},[e,r]);const{hourIncrement:p=1,minuteIncrement:k=1,secondIncrement:S=1}=n??{},v=(c,f)=>{f.length>2||!Tn.test(f)||l(O=>({...O,[c]:f}))},C=s.useCallback(c=>{const f=c.target.value;v(b.HOURS,f)},[]),I=s.useCallback(c=>{const f=c.target.value;v(b.MINUTES,f)},[]),A=s.useCallback(c=>{const f=c.target.value;v(b.SECONDS,f)},[]),T=s.useCallback((c,f)=>{if(i[c]==="")v(c,de(le));else{const O=fn(Number(i[c]),je[c],f);v(c,O)}},[i]),w=s.useCallback((c,f)=>{const O=gn(Number(i[c]),je[c],f);v(c,O)},[i]),K=s.useCallback(()=>{T(b.SECONDS,S)},[S,T]),D=s.useCallback(()=>{w(b.SECONDS,S)},[S,w]),P=s.useCallback(()=>{T(b.MINUTES,k)},[k,T]),q=s.useCallback(()=>{w(b.MINUTES,k)},[k,w]),j=s.useCallback(()=>{T(b.HOURS,p)},[p,T]),G=s.useCallback(()=>{w(b.HOURS,p)},[p,w]);return{internalTimeValue:i,updateTimeSegment:v,handleOnChangeHours:C,handleOnChangeMinutes:I,handleOnChangeSeconds:A,increaseSeconds:K,decreaseSeconds:D,increaseMinutes:P,decreaseMinutes:q,increaseHours:j,decreaseHours:G}},yn={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},V={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},ie=s.forwardRef(({value:e,onChange:n,increase:r,decrease:i,onKeyDown:l,unit:p,withSeparator:k,readOnly:S},v)=>{const C=T=>{S||l==null||l(T)},I=()=>{S||r==null||r()},A=()=>{S||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:V["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:V["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:I,tabIndex:-1,type:"button","aria-label":`Increase ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(Ke,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:v,type:"text",value:e??"00",onChange:n,onKeyDown:C,tabIndex:S?-1:0,className:V["rte-time-picker-segment-input"],readOnly:S}),o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:A,tabIndex:-1,type:"button","aria-label":`Decrease ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(Ke,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:p})]}),k&&o.jsx("span",{className:V["rte-time-picker-segment-separator"],children:":"})]})});ie.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const Rn=/^\d*$/,[Te,be,kn]=ue,B=s.forwardRef(({id:e,labelId:n,value:r,defaultValue:i,onChange:l,label:p,showLabel:k,required:S=!1,showLabelRequirement:v=!1,readOnly:C,assistiveTextLabel:I,errorMessage:A,assistiveAppearance:T,showAssistiveIcon:w,assistiveTextLink:K,isError:D,disabled:P,isHourReadOnly:q=!1,isMinuteReadOnly:j=!1,isSecondReadOnly:G=!1,hourIncrement:c=1,minuteIncrement:f=1,secondIncrement:O=1},U)=>{var Ve;const[M,pe]=s.useState(!1),[wt,ye]=s.useState(!1),Re=s.useRef(null),x=s.useRef(null),_t=an(x.current),F=s.useRef(l),ke=r!==void 0,It=s.useRef(r??i),W=ke?r:It.current,fe=s.useRef(W??null),{timePickerDropdownElement:Ot,timePickerDropdownRef:xt}=vn(M),{moveToNextSegment:L,moveToPreviousSegment:we,setActiveTimeSegment:ge,activeTimeSegment:u,prevSegment:Nt,nextSegment:Ct}=Sn(),{internalTimeValue:m,updateTimeSegment:y,handleOnChangeHours:Dt,handleOnChangeMinutes:Mt,handleOnChangeSeconds:Vt,increaseMinutes:_e,decreaseMinutes:Ie,increaseSeconds:Oe,decreaseSeconds:xe,increaseHours:Ne,decreaseHours:Ce}=bn(W,{hourIncrement:c,minuteIncrement:f,secondIncrement:O},ke);nn(Ot,M);const At=pn(m,u),Pt=M&&!P,Ee=D&&A||I,De=`${e}-assistive-text`,Ut=t=>{x.current=t,typeof U=="function"?U(t):U&&(U.current=t)},Lt=()=>u===Te?q:u===be?j:G,Ht=t=>{const a=t.key;a===z?(t.preventDefault(),Oe()):a===X&&(t.preventDefault(),xe())},Bt=t=>{const a=t.key;a===z?(t.preventDefault(),_e()):a===X&&(t.preventDefault(),Ie())},Kt=t=>{const a=t.key;a===z?(t.preventDefault(),Ne()):a===X&&(t.preventDefault(),Ce())},qt=t=>{(t===He||t===Be)&&Gt(),t===Ue&&(we(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=H(m)[Nt];(d=x.current)==null||d.setSelectionRange(a[0],a[1])})})),t===Le&&dn(m,u)&&(L(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=H(m)[Ct];(d=x.current)==null||d.setSelectionRange(a[0],a[1])})}))},jt=t=>{const a=t.key;if([z,X,Ue,Le,He,Be].includes(a)){t.preventDefault(),qt(a);return}if(!Rn.test(a)){Y();return}if(Lt()){Y();return}else{const d=m[u];if(d.length>=2)Ft(d,N(Number(a)));else{const _=d+a,Ae=en[u];if(d.length===0&&Number(a)>Ae)y(u,N(Number(a))),L();else if(_.length===2){const $=N(Math.min(Number(_),ve[u]));y(u,$),L()}else y(u,N(Number(a)))}}},Gt=()=>{if(m[u]!=="")y(u,"");else{const t=mn(u);t!==u&&(y(t,""),we())}},Ft=(t,a)=>{var $;const d=H(m)[u][0];if(((($=x.current)==null?void 0:$.selectionStart)??0)-d===0)if(t[0]==="0"){const he=t[1]+a[1],Se=N(Math.min(Number(he),ve[u]));y(u,Se),L()}else y(u,a);else{const he=Number(t[0]+a),Se=N(Math.min(he,ve[u]));y(u,Se),L()}},Wt=()=>{var _;M&&pe(!1);const t=((_=x.current)==null?void 0:_.selectionStart)??0,a=H(m),d=1;t<=a[Te][d]?ge(Te):t<=a[be][d]?ge(be):ge(kn)},Me=()=>{var t;P||(ye(!0),(t=x.current)==null||t.focus())},Yt=()=>{ye(!1)},$t=()=>{Me()},zt=()=>{Object.values(m).forEach((t,a)=>{const d=ue[a],_=Number(t);isNaN(_)?y(d,N(0)):y(d,N(_))})},Xt=()=>{Me(),pe(t=>!t),zt()},Jt=()=>{pe(!1),Yt()},Y=s.useCallback(()=>{const a=H(m)[u];requestAnimationFrame(()=>{var d;(d=x.current)==null||d.setSelectionRange(a[0],a[1])})},[u,m]);return s.useEffect(()=>{Y()},[Y]),s.useEffect(()=>{F.current=l},[l]),s.useEffect(()=>{fe.current=W??null},[W]),s.useEffect(()=>{var t;cn(fe.current,m)||(fe.current=m,(t=F.current)==null||t.call(F,m))},[m]),C&&(m.hh===""||m.mm===""||m.ss==="")?(console.warn(Qt),null):D&&!I?(console.warn(Zt),null):o.jsxs(o.Fragment,{children:[k&&o.jsx(sn,{label:p,required:S,showLabelRequirement:v}),o.jsx(on,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Jt,offset:8,overlayLevel:_t,style:{width:(Ve=Re.current)==null?void 0:Ve.offsetWidth},trigger:o.jsx(un,{id:e,ariaLabelledBy:n,ariaDescribedBy:Ee&&!M?De:void 0,"aria-label":k?void 0:p,value:At,readOnly:C,onFocus:$t,onKeyDown:jt,onMouseUp:Wt,pickerInputRef:Ut,pickerRef:Re,isFocused:wt,onOpenPicker:Xt,assistiveTextLabel:I,assistiveAppearance:T,showAssistiveIcon:w,assistiveTextLink:K,isError:D,disabled:P,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:Pt,children:o.jsxs("div",{className:yn["rte-time-picker-dropdown"],ref:xt,children:[o.jsx(ie,{value:m.hh,onChange:Dt,onKeyDown:Kt,increase:Ne,decrease:Ce,unit:"h",withSeparator:!0,readOnly:q}),o.jsx(ie,{value:m.mm,onChange:Mt,onKeyDown:Bt,increase:_e,decrease:Ie,unit:"m",withSeparator:!0,readOnly:j}),o.jsx(ie,{value:m.ss,onChange:Vt,onKeyDown:Ht,increase:Oe,decrease:xe,unit:"s",readOnly:G})]})}),Ee&&!M&&o.jsx(rn,{id:De,label:Ee,appearance:D?"error":T,showIcon:w,href:K})]})});B.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Qn={title:"Composants/TimePicker/TimePicker",component:B,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},h={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,r]=s.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(B,{...e,id:"time-picker",value:n,onChange:r})})}},J={args:{...h.args},render:e=>o.jsx(B,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},Q={args:{...h.args},render:e=>{const[n,r]=s.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>r({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>r({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(B,{...e,value:n,onChange:r})]})}},Z={args:{...h.args,disabled:!0}},ee={args:{...h.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},te={args:{...h.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Assistive text",errorMessage:"Error message"},play:async({canvasElement:e})=>{const n=tn(e);R(n.getByRole("textbox")).toHaveAttribute("aria-describedby","time-picker-assistive-text")}},ne={args:{...h.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},ae={args:{...h.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},se={args:{...h.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},re={tags:["skip-ci"],args:{...h.args,minuteIncrement:15},play:async({canvasElement:e})=>{await kt();const n=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(Rt),R(n.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(ce),R(n.value).toBe("00 : 15 : 00"),await g.keyboard(ce),R(n.value).toBe("00 : 30 : 00")}},oe={tags:["skip-ci"],args:{...h.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await kt();const n=e.querySelector("input");await g.tab(),await g.keyboard("a"),R(n.value).toBe("12 : 30 : 45"),await g.keyboard(Pe),await g.keyboard("3"),R(n.value).toBe("12 : 03 : 45"),await g.keyboard("2"),R(n.value).toBe("12 : 32 : 45"),await g.keyboard(Pe),await g.keyboard("2"),R(n.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(Rt),await g.keyboard(ce),R(n.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(ce),R(n.value).toBe("13 : 33 : 02")}};var Ge,Fe,We;h.parameters={...h.parameters,docs:{...(Ge=h.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(Fe=h.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Ye,$e,ze;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <TimePicker {...args} defaultValue={{
      hh: "08",
      mm: "15",
      ss: "00"
    }} onChange={() => {}} />;
  }
}`,...(ze=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Xe,Je,Qe;Q.parameters={...Q.parameters,docs:{...(Xe=Q.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [value, setValue] = useState<TimeFormat>({
      hh: "12",
      mm: "30",
      ss: "45"
    });
    return <>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <button onClick={() => setValue({
          hh: "09",
          mm: "00",
          ss: "00"
        })}>Set to 09:00:00</button>
          <button onClick={() => setValue({
          hh: "",
          mm: "",
          ss: ""
        })}>Clear</button>
        </div>
        <TimePicker {...args} value={value} onChange={setValue} />
      </>;
  }
}`,...(Qe=(Je=Q.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;Z.parameters={...Z.parameters,docs:{...(Ze=Z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(tt=(et=Z.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,st;ee.parameters={...ee.parameters,docs:{...(nt=ee.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(st=(at=ee.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var rt,ot,it;te.parameters={...te.parameters,docs:{...(rt=te.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Assistive text",
    errorMessage: "Error message"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("textbox")).toHaveAttribute("aria-describedby", "time-picker-assistive-text");
  }
}`,...(it=(ot=te.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var ct,ut,lt;ne.parameters={...ne.parameters,docs:{...(ct=ne.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(lt=(ut=ne.parameters)==null?void 0:ut.docs)==null?void 0:lt.source}}};var mt,dt,pt;ae.parameters={...ae.parameters,docs:{...(mt=ae.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(pt=(dt=ae.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ft,gt,Et;se.parameters={...se.parameters,docs:{...(ft=se.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(Et=(gt=se.parameters)==null?void 0:gt.docs)==null?void 0:Et.source}}};var ht,St,vt;re.parameters={...re.parameters,docs:{...(ht=re.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    minuteIncrement: 15
  },
  play: async ({
    canvasElement
  }) => {
    await focusElementBeforeComponent();
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
}`,...(vt=(St=re.parameters)==null?void 0:St.docs)==null?void 0:vt.source}}};var Tt,bt,yt;oe.parameters={...oe.parameters,docs:{...(Tt=oe.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
    await focusElementBeforeComponent();
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
}`,...(yt=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};const Zn=["Default","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{Q as ControlledPropUpdate,h as Default,Z as Disabled,te as Error,ne as HourReadOnly,oe as KeyboardInteractions,ae as MinuteReadOnly,ee as ReadOnly,se as SecondReadOnly,J as UncontrolledDefaultValue,re as WithIncrement,Zn as __namedExportsOrder,Qn as default};
