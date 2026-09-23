import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as He,a as xt,e as me}from"./keyboard-test.constants-D8znW6ct.js";import{T as h,n as de,o as an,p as sn,q as rn,r as be}from"./timepicker.constants-CynrC_9x.js";import{w as on,e as R,u as g}from"./index-4rjIhT2C.js";import{r as s}from"./index-G8LIXM5I.js";import{f as It}from"./testing.utils-r13wRTL2.js";import{a as z,A as X,b as Le,c as je,B as Be,D as Ke}from"./keyboard.constants-D1KJQ2-m.js";import{u as cn}from"./useFocusTrap-DZUQw50T.js";import{u as un}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as ln,A as mn}from"./Label-wbwhKqTA.js";import{D as dn}from"./Dropdown-BM0K4W_t.js";import{h as pn,B as fn}from"./picker.utils-B3Xch9au.js";import{w as gn}from"./animation-DwV-fHIC.js";import{I as qe}from"./Icon-VewZnR13.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-BmDTUvhp.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const N=e=>e.toString().padStart(2,"0"),q=e=>{const n=e[h.HOURS].toString().length,r=3,i=n+r,l=e[h.MINUTES].toString().length,p=i+l+r;return{[h.HOURS]:[0,n],[h.MINUTES]:[i,i+l],[h.SECONDS]:[p,p+e[h.SECONDS].toString().length]}},hn=e=>de[Math.max(de.indexOf(e)-1,0)],En=(e,n)=>n===h.HOURS?!!e[h.MINUTES]:n===h.MINUTES?!!e[h.SECONDS]:!0,vn=(e,n)=>{let r=e[h.HOURS];return(n!==h.HOURS||e[h.MINUTES])&&(r+=" : "+e[h.MINUTES]),(n===h.SECONDS||e[h.SECONDS])&&(r+=" : "+e[h.SECONDS]),r};var T=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(T||{});const pe=0,Ge={hh:"",mm:"",ss:""},fe=["hh","mm","ss"],Fe={hh:23,mm:59,ss:59},Sn=(e,n,r)=>{const l=(isNaN(e)?pe:e)+r,p=l>n?pe:l;return ge(p)},yn=(e,n,r)=>{const l=(isNaN(e)?pe:e)-r;return l<0?ge(n):ge(l)},ge=e=>e.toString().padStart(2,"0"),Tn=e=>fe[Math.min(fe.indexOf(e)+1,2)],bn=e=>fe[Math.max(fe.indexOf(e)-1,0)],Rn=()=>{const[e,n]=s.useState(T.HOURS),r=Tn(e),i=bn(e),l=s.useCallback(()=>{n(r)},[r]),p=s.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:l,moveToPreviousSegment:p,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:r}},kn=e=>{const[n,r]=s.useState(null),i=s.useRef(null);return s.useEffect(()=>{e?gn(()=>{r(i.current)}):r(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},wn=/^\d*$/,On=(e,n,r=!1)=>{const[i,l]=s.useState(e??Ge);s.useEffect(()=>{if(!r)return;const c=e??Ge;l(f=>f.hh===c.hh&&f.mm===c.mm&&f.ss===c.ss?f:c)},[e,r]);const{hourIncrement:p=1,minuteIncrement:k=1,secondIncrement:v=1}=n??{},S=(c,f)=>{f.length>2||!wn.test(f)||l(x=>({...x,[c]:f}))},C=s.useCallback(c=>{const f=c.target.value;S(T.HOURS,f)},[]),_=s.useCallback(c=>{const f=c.target.value;S(T.MINUTES,f)},[]),P=s.useCallback(c=>{const f=c.target.value;S(T.SECONDS,f)},[]),y=s.useCallback((c,f)=>{if(i[c]==="")S(c,ge(pe));else{const x=Sn(Number(i[c]),Fe[c],f);S(c,x)}},[i]),w=s.useCallback((c,f)=>{const x=yn(Number(i[c]),Fe[c],f);S(c,x)},[i]),G=s.useCallback(()=>{y(T.SECONDS,v)},[v,y]),M=s.useCallback(()=>{w(T.SECONDS,v)},[v,w]),U=s.useCallback(()=>{y(T.MINUTES,k)},[k,y]),H=s.useCallback(()=>{w(T.MINUTES,k)},[k,w]),L=s.useCallback(()=>{y(T.HOURS,p)},[p,y]),j=s.useCallback(()=>{w(T.HOURS,p)},[p,w]);return{internalTimeValue:i,updateTimeSegment:S,handleOnChangeHours:C,handleOnChangeMinutes:_,handleOnChangeSeconds:P,increaseSeconds:G,decreaseSeconds:M,increaseMinutes:U,decreaseMinutes:H,increaseHours:L,decreaseHours:j}},_n={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},A={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},le=s.forwardRef(({value:e,onChange:n,increase:r,decrease:i,onKeyDown:l,unit:p,withSeparator:k,readOnly:v},S)=>{const C=y=>{v||l==null||l(y)},_=()=>{v||r==null||r()},P=()=>{v||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:A["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:A["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:_,tabIndex:-1,type:"button","aria-label":`Increase ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(qe,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:S,type:"text",value:e??"00",onChange:n,onKeyDown:C,tabIndex:v?-1:0,className:A["rte-time-picker-segment-input"],readOnly:v}),o.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:P,tabIndex:-1,type:"button","aria-label":`Decrease ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(qe,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:p})]}),k&&o.jsx("span",{className:A["rte-time-picker-segment-separator"],children:":"})]})});le.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const xn=/^\d*$/,[J,Q,In]=de,D=s.forwardRef(({id:e,labelId:n,value:r,defaultValue:i,onChange:l,label:p,showLabel:k,required:v=!1,showLabelRequirement:S=!1,readOnly:C,assistiveTextLabel:_,errorMessage:P,assistiveAppearance:y,showAssistiveIcon:w,assistiveTextLink:G,isError:M,disabled:U,isHourReadOnly:H=!1,isMinuteReadOnly:L=!1,isSecondReadOnly:j=!1,hourIncrement:c=1,minuteIncrement:f=1,secondIncrement:x=1},B)=>{var Pe;const[V,he]=s.useState(!1),[Nt,Re]=s.useState(!1),ke=s.useRef(null),I=s.useRef(null),Dt=un(I.current),F=s.useRef(l),we=r!==void 0,Ct=s.useRef(r??i),W=we?r:Ct.current,Ee=s.useRef(W??null),{timePickerDropdownElement:Mt,timePickerDropdownRef:Vt}=kn(V),{moveToNextSegment:K,moveToPreviousSegment:Oe,setActiveTimeSegment:ve,activeTimeSegment:u,prevSegment:At,nextSegment:Pt}=Rn(),{internalTimeValue:m,updateTimeSegment:b,handleOnChangeHours:Ut,handleOnChangeMinutes:Ht,handleOnChangeSeconds:Lt,increaseMinutes:_e,decreaseMinutes:xe,increaseSeconds:Ie,decreaseSeconds:Ne,increaseHours:De,decreaseHours:Ce}=On(W,{hourIncrement:c,minuteIncrement:f,secondIncrement:x},we);cn(Mt,V);const jt=vn(m,u),Bt=V&&!U,Se=M&&P||_,Me=`${e}-assistive-text`,Kt=t=>{I.current=t,typeof B=="function"?B(t):B&&(B.current=t)},Ve=()=>u===J?H:u===Q?L:j,qt=t=>t===J?H:t===Q?L:j,Gt=t=>{const a=t.key;a===z?(t.preventDefault(),Ie()):a===X&&(t.preventDefault(),Ne())},Ft=t=>{const a=t.key;a===z?(t.preventDefault(),_e()):a===X&&(t.preventDefault(),xe())},Wt=t=>{const a=t.key;a===z?(t.preventDefault(),De()):a===X&&(t.preventDefault(),Ce())},Yt=t=>{if(t===Be||t===Ke){if(Ve())return;zt()}t===Le&&(Oe(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=q(m)[At];(d=I.current)==null||d.setSelectionRange(a[0],a[1])})})),t===je&&En(m,u)&&(K(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=q(m)[Pt];(d=I.current)==null||d.setSelectionRange(a[0],a[1])})}))},$t=t=>{const a=t.key;if([z,X,Le,je,Be,Ke].includes(a)){t.preventDefault(),Yt(a);return}if(!xn.test(a)){Y();return}if(Ve()){Y();return}else{const d=m[u];if(d.length>=2)Xt(d,N(Number(a)));else{const O=d+a,Ue=rn[u];if(d.length===0&&Number(a)>Ue)b(u,N(Number(a))),K();else if(O.length===2){const $=N(Math.min(Number(O),be[u]));b(u,$),K()}else b(u,N(Number(a)))}}},zt=()=>{if(m[u]!=="")b(u,"");else{const t=hn(u);if(t!==u){if(qt(t))return;b(t,""),Oe()}}},Xt=(t,a)=>{var $;const d=q(m)[u][0];if(((($=I.current)==null?void 0:$.selectionStart)??0)-d===0)if(t[0]==="0"){const ye=t[1]+a[1],Te=N(Math.min(Number(ye),be[u]));b(u,Te),K()}else b(u,a);else{const ye=Number(t[0]+a),Te=N(Math.min(ye,be[u]));b(u,Te),K()}},Jt=()=>{var O;V&&he(!1);const t=((O=I.current)==null?void 0:O.selectionStart)??0,a=q(m),d=1;t<=a[J][d]?ve(J):t<=a[Q][d]?ve(Q):ve(In)},Ae=()=>{var t;U||(Re(!0),(t=I.current)==null||t.focus())},Qt=()=>{Re(!1)},Zt=()=>{Ae()},en=()=>{Object.values(m).forEach((t,a)=>{const d=de[a],O=Number(t);isNaN(O)?b(d,N(0)):b(d,N(O))})},tn=()=>{Ae(),he(t=>!t),en()},nn=()=>{he(!1),Qt()},Y=s.useCallback(()=>{const a=q(m)[u];requestAnimationFrame(()=>{var d;(d=I.current)==null||d.setSelectionRange(a[0],a[1])})},[u,m]);return s.useEffect(()=>{Y()},[Y]),s.useEffect(()=>{F.current=l},[l]),s.useEffect(()=>{Ee.current=W??null},[W]),s.useEffect(()=>{var t;pn(Ee.current,m)||(Ee.current=m,(t=F.current)==null||t.call(F,m))},[m]),C&&(m.hh===""||m.mm===""||m.ss==="")?(console.warn(an),null):M&&!_?(console.warn(sn),null):o.jsxs("div",{children:[k&&o.jsx(ln,{label:p,required:v,showLabelRequirement:S}),o.jsx(dn,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:nn,offset:8,overlayLevel:Dt,style:{width:(Pe=ke.current)==null?void 0:Pe.offsetWidth},trigger:o.jsx(fn,{id:e,ariaLabelledBy:n,ariaDescribedBy:Se&&!V?Me:void 0,"aria-label":k?void 0:p,value:jt,readOnly:C,onFocus:Zt,onKeyDown:$t,onMouseUp:Jt,pickerInputRef:Kt,pickerRef:ke,isFocused:Nt,onOpenPicker:tn,assistiveTextLabel:_,assistiveAppearance:y,showAssistiveIcon:w,assistiveTextLink:G,isError:M,disabled:U,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:Bt,children:o.jsxs("div",{className:_n["rte-time-picker-dropdown"],ref:Vt,children:[o.jsx(le,{value:m.hh,onChange:Ut,onKeyDown:Wt,increase:De,decrease:Ce,unit:"h",withSeparator:!0,readOnly:H}),o.jsx(le,{value:m.mm,onChange:Ht,onKeyDown:Ft,increase:_e,decrease:xe,unit:"m",withSeparator:!0,readOnly:L}),o.jsx(le,{value:m.ss,onChange:Lt,onKeyDown:Gt,increase:Ie,decrease:Ne,unit:"s",readOnly:j})]})}),Se&&!V&&o.jsx(mn,{id:Me,label:Se,appearance:M?"error":y,showIcon:w,href:G})]})});D.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const aa={title:"Composants/TimePicker/TimePicker",component:D,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},E={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,r]=s.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(D,{...e,id:"time-picker",value:n,onChange:r})})}},Z={args:{...E.args},render:e=>o.jsx(D,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},ee={args:{...E.args},render:e=>{const[n,r]=s.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>r({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>r({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(D,{...e,value:n,onChange:r})]})}},te={args:{...E.args,disabled:!0}},ne={args:{...E.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ae={args:{...E.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Assistive text",errorMessage:"Error message"},play:async({canvasElement:e})=>{const n=on(e);R(n.getByRole("textbox")).toHaveAttribute("aria-describedby","time-picker-assistive-text")}},se={args:{...E.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},re={args:{...E.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},oe={args:{...E.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ie={args:{...E.args},render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsx(D,{...e,id:"hour-read-only-time-picker",isHourReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(D,{...e,id:"minute-read-only-time-picker",isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(D,{...e,id:"second-read-only-time-picker",isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}})]})},ce={tags:["skip-ci"],args:{...E.args,minuteIncrement:15},play:async({canvasElement:e})=>{await It();const n=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(xt),R(n.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(me),R(n.value).toBe("00 : 15 : 00"),await g.keyboard(me),R(n.value).toBe("00 : 30 : 00")}},ue={tags:["skip-ci"],args:{...E.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await It();const n=e.querySelector("input");await g.tab(),await g.keyboard("a"),R(n.value).toBe("12 : 30 : 45"),await g.keyboard(He),await g.keyboard("3"),R(n.value).toBe("12 : 03 : 45"),await g.keyboard("2"),R(n.value).toBe("12 : 32 : 45"),await g.keyboard(He),await g.keyboard("2"),R(n.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(xt),await g.keyboard(me),R(n.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(me),R(n.value).toBe("13 : 33 : 02")}};var We,Ye,$e;E.parameters={...E.parameters,docs:{...(We=E.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...($e=(Ye=E.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var ze,Xe,Je;Z.parameters={...Z.parameters,docs:{...(ze=Z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=Z.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Qe,Ze,et;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;te.parameters={...te.parameters,docs:{...(tt=te.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(at=(nt=te.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var st,rt,ot;ne.parameters={...ne.parameters,docs:{...(st=ne.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(ot=(rt=ne.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,ct,ut;ae.parameters={...ae.parameters,docs:{...(it=ae.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ut=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:ut.source}}};var lt,mt,dt;se.parameters={...se.parameters,docs:{...(lt=se.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(dt=(mt=se.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var pt,ft,gt;re.parameters={...re.parameters,docs:{...(pt=re.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(gt=(ft=re.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var ht,Et,vt;oe.parameters={...oe.parameters,docs:{...(ht=oe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(vt=(Et=oe.parameters)==null?void 0:Et.docs)==null?void 0:vt.source}}};var St,yt,Tt;ie.parameters={...ie.parameters,docs:{...(St=ie.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <TimePicker {...args} id="hour-read-only-time-picker" isHourReadOnly value={{
      hh: "12",
      mm: "30",
      ss: "45"
    }} />
      <TimePicker {...args} id="minute-read-only-time-picker" isMinuteReadOnly value={{
      hh: "12",
      mm: "30",
      ss: "45"
    }} />
      <TimePicker {...args} id="second-read-only-time-picker" isSecondReadOnly value={{
      hh: "12",
      mm: "30",
      ss: "45"
    }} />
    </div>
}`,...(Tt=(yt=ie.parameters)==null?void 0:yt.docs)==null?void 0:Tt.source}}};var bt,Rt,kt;ce.parameters={...ce.parameters,docs:{...(bt=ce.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(kt=(Rt=ce.parameters)==null?void 0:Rt.docs)==null?void 0:kt.source}}};var wt,Ot,_t;ue.parameters={...ue.parameters,docs:{...(wt=ue.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(_t=(Ot=ue.parameters)==null?void 0:Ot.docs)==null?void 0:_t.source}}};const sa=["Default","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","AllSegmentsReadOnly","WithIncrement","KeyboardInteractions"];export{ie as AllSegmentsReadOnly,ee as ControlledPropUpdate,E as Default,te as Disabled,ae as Error,se as HourReadOnly,ue as KeyboardInteractions,re as MinuteReadOnly,ne as ReadOnly,oe as SecondReadOnly,Z as UncontrolledDefaultValue,ce as WithIncrement,sa as __namedExportsOrder,aa as default};
