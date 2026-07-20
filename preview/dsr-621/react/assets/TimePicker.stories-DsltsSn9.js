import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as Me,g as vt,d as oe}from"./keyboard-test.constants-C4IJ8E3i.js";import{T as E,n as ie,o as $t,p as zt,q as Xt,r as he}from"./timepicker.constants-CynrC_9x.js";import{u as g,e as I}from"./index-4rjIhT2C.js";import{r}from"./index-G8LIXM5I.js";import{f as bt}from"./testing.utils-mIZIUNbM.js";import{a as Y,A as $,b as Ve,c as Pe,B as Ae,D as Ue}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt}from"./useFocusTrap-D2ZnoMa2.js";import{L as Qt,A as Zt}from"./Label-BaZEr-h0.js";import{B as en}from"./BaseDropdown-jZPuSjNL.js";import{h as tn,B as nn}from"./picker.utils-DE9aSKE1.js";import{w as an}from"./animation-DwV-fHIC.js";import{I as He}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-BXut70Xg.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const N=e=>e.toString().padStart(2,"0"),H=e=>{const n=e[E.HOURS].toString().length,s=3,i=n+s,l=e[E.MINUTES].toString().length,p=i+l+s;return{[E.HOURS]:[0,n],[E.MINUTES]:[i,i+l],[E.SECONDS]:[p,p+e[E.SECONDS].toString().length]}},rn=e=>ie[Math.max(ie.indexOf(e)-1,0)],sn=(e,n)=>n===E.HOURS?!!e[E.MINUTES]:n===E.MINUTES?!!e[E.SECONDS]:!0,on=(e,n)=>{let s=e[E.HOURS];return(n!==E.HOURS||e[E.MINUTES])&&(s+=" : "+e[E.MINUTES]),(n===E.SECONDS||e[E.SECONDS])&&(s+=" : "+e[E.SECONDS]),s};var R=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(R||{});const ue=0,Le={hh:"",mm:"",ss:""},ce=["hh","mm","ss"],Ke={hh:23,mm:59,ss:59},un=(e,n,s)=>{const l=(isNaN(e)?ue:e)+s,p=l>n?ue:l;return le(p)},cn=(e,n,s)=>{const l=(isNaN(e)?ue:e)-s;return l<0?le(n):le(l)},le=e=>e.toString().padStart(2,"0"),ln=e=>ce[Math.min(ce.indexOf(e)+1,2)],mn=e=>ce[Math.max(ce.indexOf(e)-1,0)],dn=()=>{const[e,n]=r.useState(R.HOURS),s=ln(e),i=mn(e),l=r.useCallback(()=>{n(s)},[s]),p=r.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:l,moveToPreviousSegment:p,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:s}},pn=e=>{const[n,s]=r.useState(null),i=r.useRef(null);return r.useEffect(()=>{e?an(()=>{s(i.current)}):s(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},fn=/^\d*$/,gn=(e,n,s=!1)=>{const[i,l]=r.useState(e??Le);r.useEffect(()=>{if(!s)return;const u=e??Le;l(f=>f.hh===u.hh&&f.mm===u.mm&&f.ss===u.ss?f:u)},[e,s]);const{hourIncrement:p=1,minuteIncrement:k=1,secondIncrement:S=1}=n??{},T=(u,f)=>{f.length>2||!fn.test(f)||l(b=>({...b,[u]:f}))},C=r.useCallback(u=>{const f=u.target.value;T(R.HOURS,f)},[]),O=r.useCallback(u=>{const f=u.target.value;T(R.MINUTES,f)},[]),D=r.useCallback(u=>{const f=u.target.value;T(R.SECONDS,f)},[]),v=r.useCallback((u,f)=>{if(i[u]==="")T(u,le(ue));else{const b=un(Number(i[u]),Ke[u],f);T(u,b)}},[i]),w=r.useCallback((u,f)=>{const b=cn(Number(i[u]),Ke[u],f);T(u,b)},[i]),P=r.useCallback(()=>{v(R.SECONDS,S)},[S,v]),A=r.useCallback(()=>{w(R.SECONDS,S)},[S,w]),K=r.useCallback(()=>{v(R.MINUTES,k)},[k,v]),q=r.useCallback(()=>{w(R.MINUTES,k)},[k,w]),B=r.useCallback(()=>{v(R.HOURS,p)},[p,v]),me=r.useCallback(()=>{w(R.HOURS,p)},[p,w]);return{internalTimeValue:i,updateTimeSegment:T,handleOnChangeHours:C,handleOnChangeMinutes:O,handleOnChangeSeconds:D,increaseSeconds:P,decreaseSeconds:A,increaseMinutes:K,decreaseMinutes:q,increaseHours:B,decreaseHours:me}},En={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},V={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},se=r.forwardRef(({value:e,onChange:n,increase:s,decrease:i,onKeyDown:l,unit:p,withSeparator:k,readOnly:S},T)=>{const C=v=>{S||l==null||l(v)},O=()=>{S||s==null||s()},D=()=>{S||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:V["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:V["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:O,tabIndex:-1,type:"button","aria-label":`Increase ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(He,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:T,type:"text",value:e??"00",onChange:n,onKeyDown:C,tabIndex:S?-1:0,className:V["rte-time-picker-segment-input"],readOnly:S}),o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:D,tabIndex:-1,type:"button","aria-label":`Decrease ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(He,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:p})]}),k&&o.jsx("span",{className:V["rte-time-picker-segment-separator"],children:":"})]})});se.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const hn=/^\d*$/,[Se,Te,Sn]=ie,L=r.forwardRef(({id:e,labelId:n,value:s,defaultValue:i,onChange:l,label:p,showLabel:k,required:S=!1,showLabelRequirement:T=!1,readOnly:C,assistiveTextLabel:O,assistiveAppearance:D,showAssistiveIcon:v,assistiveTextLink:w,isError:P,disabled:A,isHourReadOnly:K=!1,isMinuteReadOnly:q=!1,isSecondReadOnly:B=!1,hourIncrement:me=1,minuteIncrement:u=1,secondIncrement:f=1},b)=>{var Ce;const[M,de]=r.useState(!1),[Rt,ve]=r.useState(!1),be=r.useRef(null),x=r.useRef(null),j=r.useRef(l),Re=s!==void 0,yt=r.useRef(s??i),G=Re?s:yt.current,pe=r.useRef(G??null),{timePickerDropdownElement:kt,timePickerDropdownRef:wt}=pn(M),{moveToNextSegment:U,moveToPreviousSegment:ye,setActiveTimeSegment:fe,activeTimeSegment:c,prevSegment:_t,nextSegment:It}=dn(),{internalTimeValue:m,updateTimeSegment:y,handleOnChangeHours:Ot,handleOnChangeMinutes:Nt,handleOnChangeSeconds:xt,increaseMinutes:ke,decreaseMinutes:we,increaseSeconds:_e,decreaseSeconds:Ie,increaseHours:Oe,decreaseHours:Ne}=gn(G,{hourIncrement:me,minuteIncrement:u,secondIncrement:f},Re);Jt(kt,M);const Ct=on(m,c),Dt=M&&!A,Mt=t=>{x.current=t,typeof b=="function"?b(t):b&&(b.current=t)},Vt=()=>c===Se?K:c===Te?q:B,Pt=t=>{const a=t.key;a===Y?(t.preventDefault(),_e()):a===$&&(t.preventDefault(),Ie())},At=t=>{const a=t.key;a===Y?(t.preventDefault(),ke()):a===$&&(t.preventDefault(),we())},Ut=t=>{const a=t.key;a===Y?(t.preventDefault(),Oe()):a===$&&(t.preventDefault(),Ne())},Ht=t=>{(t===Ae||t===Ue)&&Kt(),t===Ve&&(ye(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=H(m)[_t];(d=x.current)==null||d.setSelectionRange(a[0],a[1])})})),t===Pe&&sn(m,c)&&(U(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=H(m)[It];(d=x.current)==null||d.setSelectionRange(a[0],a[1])})}))},Lt=t=>{const a=t.key;if([Y,$,Ve,Pe,Ae,Ue].includes(a)){t.preventDefault(),Ht(a);return}if(!hn.test(a)){F();return}if(Vt()){F();return}else{const d=m[c];if(d.length>=2)qt(d,N(Number(a)));else{const _=d+a,De=Xt[c];if(d.length===0&&Number(a)>De)y(c,N(Number(a))),U();else if(_.length===2){const W=N(Math.min(Number(_),he[c]));y(c,W),U()}else y(c,N(Number(a)))}}},Kt=()=>{if(m[c]!=="")y(c,"");else{const t=rn(c);t!==c&&(y(t,""),ye())}},qt=(t,a)=>{var W;const d=H(m)[c][0];if((((W=x.current)==null?void 0:W.selectionStart)??0)-d===0)if(t[0]==="0"){const ge=t[1]+a[1],Ee=N(Math.min(Number(ge),he[c]));y(c,Ee),U()}else y(c,a);else{const ge=Number(t[0]+a),Ee=N(Math.min(ge,he[c]));y(c,Ee),U()}},Bt=()=>{var _;M&&de(!1);const t=((_=x.current)==null?void 0:_.selectionStart)??0,a=H(m),d=1;t<=a[Se][d]?fe(Se):t<=a[Te][d]?fe(Te):fe(Sn)},xe=()=>{var t;A||(ve(!0),(t=x.current)==null||t.focus())},jt=()=>{ve(!1)},Gt=()=>{xe()},Ft=()=>{Object.values(m).forEach((t,a)=>{const d=ie[a],_=Number(t);isNaN(_)?y(d,N(0)):y(d,N(_))})},Wt=()=>{xe(),de(t=>!t),Ft()},Yt=()=>{de(!1),jt()},F=r.useCallback(()=>{const a=H(m)[c];requestAnimationFrame(()=>{var d;(d=x.current)==null||d.setSelectionRange(a[0],a[1])})},[c,m]);return r.useEffect(()=>{F()},[F]),r.useEffect(()=>{j.current=l},[l]),r.useEffect(()=>{pe.current=G??null},[G]),r.useEffect(()=>{var t;tn(pe.current,m)||(pe.current=m,(t=j.current)==null||t.call(j,m))},[m]),C&&(m.hh===""||m.mm===""||m.ss==="")?(console.warn($t),null):P&&!O?(console.warn(zt),null):o.jsxs(o.Fragment,{children:[k&&o.jsx(Qt,{label:p,required:S,showLabelRequirement:T}),o.jsx(en,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:Yt,offset:8,style:{width:(Ce=be.current)==null?void 0:Ce.offsetWidth},trigger:o.jsx(nn,{id:e,ariaLabelledBy:n,"aria-label":k?void 0:p,value:Ct,readOnly:C,onFocus:Gt,onKeyDown:Lt,onMouseUp:Bt,pickerInputRef:Mt,pickerRef:be,isFocused:Rt,onOpenPicker:Wt,assistiveTextLabel:O,assistiveAppearance:D,showAssistiveIcon:v,assistiveTextLink:w,isError:P,disabled:A,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:Dt,children:o.jsxs("div",{className:En["rte-time-picker-dropdown"],ref:wt,children:[o.jsx(se,{value:m.hh,onChange:Ot,onKeyDown:Ut,increase:Oe,decrease:Ne,unit:"h",withSeparator:!0,readOnly:K}),o.jsx(se,{value:m.mm,onChange:Nt,onKeyDown:At,increase:ke,decrease:we,unit:"m",withSeparator:!0,readOnly:q}),o.jsx(se,{value:m.ss,onChange:xt,onKeyDown:Pt,increase:_e,decrease:Ie,unit:"s",readOnly:B})]})}),O&&!M&&o.jsx(Zt,{label:O,appearance:P?"error":D,showIcon:v,href:w})]})});L.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Fn={title:"Composants/TimePicker/TimePicker",component:L,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},h={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,s]=r.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(L,{...e,id:"time-picker",value:n,onChange:s})})}},z={args:{...h.args},render:e=>o.jsx(L,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},X={args:{...h.args},render:e=>{const[n,s]=r.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>s({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>s({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(L,{...e,value:n,onChange:s})]})}},J={args:{...h.args,disabled:!0}},Q={args:{...h.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Z={args:{...h.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},ee={args:{...h.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},te={args:{...h.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},ne={args:{...h.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ae={tags:["skip-ci"],args:{...h.args,minuteIncrement:15},play:async({canvasElement:e})=>{await bt(e);const n=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(vt),I(n.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(oe),I(n.value).toBe("00 : 15 : 00"),await g.keyboard(oe),I(n.value).toBe("00 : 30 : 00")}},re={tags:["skip-ci"],args:{...h.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await bt(e);const n=e.querySelector("input");await g.tab(),await g.keyboard("a"),I(n.value).toBe("12 : 30 : 45"),await g.keyboard(Me),await g.keyboard("3"),I(n.value).toBe("12 : 03 : 45"),await g.keyboard("2"),I(n.value).toBe("12 : 32 : 45"),await g.keyboard(Me),await g.keyboard("2"),I(n.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(vt),await g.keyboard(oe),I(n.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(oe),I(n.value).toBe("13 : 33 : 02")}};var qe,Be,je;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(je=(Be=h.parameters)==null?void 0:Be.docs)==null?void 0:je.source}}};var Ge,Fe,We;z.parameters={...z.parameters,docs:{...(Ge=z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(We=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:We.source}}};var Ye,$e,ze;X.parameters={...X.parameters,docs:{...(Ye=X.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(ze=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Xe,Je,Qe;J.parameters={...J.parameters,docs:{...(Xe=J.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Qe=(Je=J.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;Q.parameters={...Q.parameters,docs:{...(Ze=Q.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(tt=(et=Q.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,rt;Z.parameters={...Z.parameters,docs:{...(nt=Z.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveAppearance: "error",
    assistiveTextLabel: "Error message"
  }
}`,...(rt=(at=Z.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var st,ot,it;ee.parameters={...ee.parameters,docs:{...(st=ee.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(it=(ot=ee.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var ut,ct,lt;te.parameters={...te.parameters,docs:{...(ut=te.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(lt=(ct=te.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var mt,dt,pt;ne.parameters={...ne.parameters,docs:{...(mt=ne.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(pt=(dt=ne.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ft,gt,Et;ae.parameters={...ae.parameters,docs:{...(ft=ae.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Et=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:Et.source}}};var ht,St,Tt;re.parameters={...re.parameters,docs:{...(ht=re.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(Tt=(St=re.parameters)==null?void 0:St.docs)==null?void 0:Tt.source}}};const Wn=["Default","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{X as ControlledPropUpdate,h as Default,J as Disabled,Z as Error,ee as HourReadOnly,re as KeyboardInteractions,te as MinuteReadOnly,Q as ReadOnly,ne as SecondReadOnly,z as UncontrolledDefaultValue,ae as WithIncrement,Wn as __namedExportsOrder,Fn as default};
