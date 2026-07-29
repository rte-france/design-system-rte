import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{c as Me,g as Tt,d as oe}from"./keyboard-test.constants-C4IJ8E3i.js";import{T as E,n as ie,o as zt,p as Xt,q as Jt,r as he}from"./timepicker.constants-CynrC_9x.js";import{u as g,e as I}from"./index-4rjIhT2C.js";import{r}from"./index-G8LIXM5I.js";import{f as bt}from"./testing.utils-mIZIUNbM.js";import{a as Y,A as $,b as Ve,c as Pe,B as Ae,D as Ue}from"./keyboard.constants-D1KJQ2-m.js";import{u as Qt}from"./useFocusTrap-D2ZnoMa2.js";import{u as Zt}from"./useGetOverlayLayerLevel-DCKoElYy.js";import{L as en,A as tn}from"./Label-BaZEr-h0.js";import{B as nn}from"./BaseDropdown-jZPuSjNL.js";import{h as an,B as rn}from"./picker.utils-DE9aSKE1.js";import{w as sn}from"./animation-DwV-fHIC.js";import{I as Le}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-BXut70Xg.js";import"./index-DJ8f9STe.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const x=e=>e.toString().padStart(2,"0"),L=e=>{const n=e[E.HOURS].toString().length,s=3,i=n+s,l=e[E.MINUTES].toString().length,p=i+l+s;return{[E.HOURS]:[0,n],[E.MINUTES]:[i,i+l],[E.SECONDS]:[p,p+e[E.SECONDS].toString().length]}},on=e=>ie[Math.max(ie.indexOf(e)-1,0)],un=(e,n)=>n===E.HOURS?!!e[E.MINUTES]:n===E.MINUTES?!!e[E.SECONDS]:!0,cn=(e,n)=>{let s=e[E.HOURS];return(n!==E.HOURS||e[E.MINUTES])&&(s+=" : "+e[E.MINUTES]),(n===E.SECONDS||e[E.SECONDS])&&(s+=" : "+e[E.SECONDS]),s};var y=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(y||{});const ue=0,He={hh:"",mm:"",ss:""},ce=["hh","mm","ss"],Ke={hh:23,mm:59,ss:59},ln=(e,n,s)=>{const l=(isNaN(e)?ue:e)+s,p=l>n?ue:l;return le(p)},mn=(e,n,s)=>{const l=(isNaN(e)?ue:e)-s;return l<0?le(n):le(l)},le=e=>e.toString().padStart(2,"0"),dn=e=>ce[Math.min(ce.indexOf(e)+1,2)],pn=e=>ce[Math.max(ce.indexOf(e)-1,0)],fn=()=>{const[e,n]=r.useState(y.HOURS),s=dn(e),i=pn(e),l=r.useCallback(()=>{n(s)},[s]),p=r.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:l,moveToPreviousSegment:p,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:s}},gn=e=>{const[n,s]=r.useState(null),i=r.useRef(null);return r.useEffect(()=>{e?sn(()=>{s(i.current)}):s(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},En=/^\d*$/,hn=(e,n,s=!1)=>{const[i,l]=r.useState(e??He);r.useEffect(()=>{if(!s)return;const u=e??He;l(f=>f.hh===u.hh&&f.mm===u.mm&&f.ss===u.ss?f:u)},[e,s]);const{hourIncrement:p=1,minuteIncrement:k=1,secondIncrement:S=1}=n??{},v=(u,f)=>{f.length>2||!En.test(f)||l(b=>({...b,[u]:f}))},C=r.useCallback(u=>{const f=u.target.value;v(y.HOURS,f)},[]),O=r.useCallback(u=>{const f=u.target.value;v(y.MINUTES,f)},[]),D=r.useCallback(u=>{const f=u.target.value;v(y.SECONDS,f)},[]),T=r.useCallback((u,f)=>{if(i[u]==="")v(u,le(ue));else{const b=ln(Number(i[u]),Ke[u],f);v(u,b)}},[i]),w=r.useCallback((u,f)=>{const b=mn(Number(i[u]),Ke[u],f);v(u,b)},[i]),P=r.useCallback(()=>{T(y.SECONDS,S)},[S,T]),A=r.useCallback(()=>{w(y.SECONDS,S)},[S,w]),K=r.useCallback(()=>{T(y.MINUTES,k)},[k,T]),q=r.useCallback(()=>{w(y.MINUTES,k)},[k,w]),B=r.useCallback(()=>{T(y.HOURS,p)},[p,T]),me=r.useCallback(()=>{w(y.HOURS,p)},[p,w]);return{internalTimeValue:i,updateTimeSegment:v,handleOnChangeHours:C,handleOnChangeMinutes:O,handleOnChangeSeconds:D,increaseSeconds:P,decreaseSeconds:A,increaseMinutes:K,decreaseMinutes:q,increaseHours:B,decreaseHours:me}},Sn={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},V={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},se=r.forwardRef(({value:e,onChange:n,increase:s,decrease:i,onKeyDown:l,unit:p,withSeparator:k,readOnly:S},v)=>{const C=T=>{S||l==null||l(T)},O=()=>{S||s==null||s()},D=()=>{S||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:V["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:V["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:O,tabIndex:-1,type:"button","aria-label":`Increase ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(Le,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:v,type:"text",value:e??"00",onChange:n,onKeyDown:C,tabIndex:S?-1:0,className:V["rte-time-picker-segment-input"],readOnly:S}),o.jsx("button",{className:V["rte-time-picker-segment-controls-button"],onClick:D,tabIndex:-1,type:"button","aria-label":`Decrease ${p==="h"?"hours":p==="m"?"minutes":"seconds"} value`,children:o.jsx(Le,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:p})]}),k&&o.jsx("span",{className:V["rte-time-picker-segment-separator"],children:":"})]})});se.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const vn=/^\d*$/,[Se,ve,Tn]=ie,H=r.forwardRef(({id:e,labelId:n,value:s,defaultValue:i,onChange:l,label:p,showLabel:k,required:S=!1,showLabelRequirement:v=!1,readOnly:C,assistiveTextLabel:O,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:w,isError:P,disabled:A,isHourReadOnly:K=!1,isMinuteReadOnly:q=!1,isSecondReadOnly:B=!1,hourIncrement:me=1,minuteIncrement:u=1,secondIncrement:f=1},b)=>{var Ce;const[M,de]=r.useState(!1),[yt,Te]=r.useState(!1),be=r.useRef(null),N=r.useRef(null),Rt=Zt(N.current),j=r.useRef(l),ye=s!==void 0,kt=r.useRef(s??i),G=ye?s:kt.current,pe=r.useRef(G??null),{timePickerDropdownElement:wt,timePickerDropdownRef:_t}=gn(M),{moveToNextSegment:U,moveToPreviousSegment:Re,setActiveTimeSegment:fe,activeTimeSegment:c,prevSegment:It,nextSegment:Ot}=fn(),{internalTimeValue:m,updateTimeSegment:R,handleOnChangeHours:Nt,handleOnChangeMinutes:xt,handleOnChangeSeconds:Ct,increaseMinutes:ke,decreaseMinutes:we,increaseSeconds:_e,decreaseSeconds:Ie,increaseHours:Oe,decreaseHours:Ne}=hn(G,{hourIncrement:me,minuteIncrement:u,secondIncrement:f},ye);Qt(wt,M);const Dt=cn(m,c),Mt=M&&!A,Vt=t=>{N.current=t,typeof b=="function"?b(t):b&&(b.current=t)},Pt=()=>c===Se?K:c===ve?q:B,At=t=>{const a=t.key;a===Y?(t.preventDefault(),_e()):a===$&&(t.preventDefault(),Ie())},Ut=t=>{const a=t.key;a===Y?(t.preventDefault(),ke()):a===$&&(t.preventDefault(),we())},Lt=t=>{const a=t.key;a===Y?(t.preventDefault(),Oe()):a===$&&(t.preventDefault(),Ne())},Ht=t=>{(t===Ae||t===Ue)&&qt(),t===Ve&&(Re(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=L(m)[It];(d=N.current)==null||d.setSelectionRange(a[0],a[1])})})),t===Pe&&un(m,c)&&(U(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var d;const a=L(m)[Ot];(d=N.current)==null||d.setSelectionRange(a[0],a[1])})}))},Kt=t=>{const a=t.key;if([Y,$,Ve,Pe,Ae,Ue].includes(a)){t.preventDefault(),Ht(a);return}if(!vn.test(a)){F();return}if(Pt()){F();return}else{const d=m[c];if(d.length>=2)Bt(d,x(Number(a)));else{const _=d+a,De=Jt[c];if(d.length===0&&Number(a)>De)R(c,x(Number(a))),U();else if(_.length===2){const W=x(Math.min(Number(_),he[c]));R(c,W),U()}else R(c,x(Number(a)))}}},qt=()=>{if(m[c]!=="")R(c,"");else{const t=on(c);t!==c&&(R(t,""),Re())}},Bt=(t,a)=>{var W;const d=L(m)[c][0];if((((W=N.current)==null?void 0:W.selectionStart)??0)-d===0)if(t[0]==="0"){const ge=t[1]+a[1],Ee=x(Math.min(Number(ge),he[c]));R(c,Ee),U()}else R(c,a);else{const ge=Number(t[0]+a),Ee=x(Math.min(ge,he[c]));R(c,Ee),U()}},jt=()=>{var _;M&&de(!1);const t=((_=N.current)==null?void 0:_.selectionStart)??0,a=L(m),d=1;t<=a[Se][d]?fe(Se):t<=a[ve][d]?fe(ve):fe(Tn)},xe=()=>{var t;A||(Te(!0),(t=N.current)==null||t.focus())},Gt=()=>{Te(!1)},Ft=()=>{xe()},Wt=()=>{Object.values(m).forEach((t,a)=>{const d=ie[a],_=Number(t);isNaN(_)?R(d,x(0)):R(d,x(_))})},Yt=()=>{xe(),de(t=>!t),Wt()},$t=()=>{de(!1),Gt()},F=r.useCallback(()=>{const a=L(m)[c];requestAnimationFrame(()=>{var d;(d=N.current)==null||d.setSelectionRange(a[0],a[1])})},[c,m]);return r.useEffect(()=>{F()},[F]),r.useEffect(()=>{j.current=l},[l]),r.useEffect(()=>{pe.current=G??null},[G]),r.useEffect(()=>{var t;an(pe.current,m)||(pe.current=m,(t=j.current)==null||t.call(j,m))},[m]),C&&(m.hh===""||m.mm===""||m.ss==="")?(console.warn(zt),null):P&&!O?(console.warn(Xt),null):o.jsxs(o.Fragment,{children:[k&&o.jsx(en,{label:p,required:S,showLabelRequirement:v}),o.jsx(nn,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:$t,offset:8,overlayLevel:Rt,style:{width:(Ce=be.current)==null?void 0:Ce.offsetWidth},trigger:o.jsx(rn,{id:e,ariaLabelledBy:n,"aria-label":k?void 0:p,value:Dt,readOnly:C,onFocus:Ft,onKeyDown:Kt,onMouseUp:jt,pickerInputRef:Vt,pickerRef:be,isFocused:yt,onOpenPicker:Yt,assistiveTextLabel:O,assistiveAppearance:D,showAssistiveIcon:T,assistiveTextLink:w,isError:P,disabled:A,onChange:()=>{},openButtonAriaLabel:"Open time picker dropdown"}),isOpen:Mt,children:o.jsxs("div",{className:Sn["rte-time-picker-dropdown"],ref:_t,children:[o.jsx(se,{value:m.hh,onChange:Nt,onKeyDown:Lt,increase:Oe,decrease:Ne,unit:"h",withSeparator:!0,readOnly:K}),o.jsx(se,{value:m.mm,onChange:xt,onKeyDown:Ut,increase:ke,decrease:we,unit:"m",withSeparator:!0,readOnly:q}),o.jsx(se,{value:m.ss,onChange:Ct,onKeyDown:At,increase:_e,decrease:Ie,unit:"s",readOnly:B})]})}),O&&!M&&o.jsx(tn,{label:O,appearance:P?"error":D,showIcon:T,href:w})]})});H.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Yn={title:"Composants/TimePicker/TimePicker",component:H,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}}}},h={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1},render:e=>{const[n,s]=r.useState({hh:"",mm:"",ss:""});return o.jsx(o.Fragment,{children:o.jsx(H,{...e,id:"time-picker",value:n,onChange:s})})}},z={args:{...h.args},render:e=>o.jsx(H,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},X={args:{...h.args},render:e=>{const[n,s]=r.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>s({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>s({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(H,{...e,value:n,onChange:s})]})}},J={args:{...h.args,disabled:!0}},Q={args:{...h.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},Z={args:{...h.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Error message"}},ee={args:{...h.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},te={args:{...h.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},ne={args:{...h.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ae={tags:["skip-ci"],args:{...h.args,minuteIncrement:15},play:async({canvasElement:e})=>{await bt(e);const n=e.querySelector("input");await g.tab(),await g.tab(),await g.keyboard(Tt),I(n.value).toBe("00 : 00 : 00"),await g.tab(),await g.keyboard(oe),I(n.value).toBe("00 : 15 : 00"),await g.keyboard(oe),I(n.value).toBe("00 : 30 : 00")}},re={tags:["skip-ci"],args:{...h.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await bt(e);const n=e.querySelector("input");await g.tab(),await g.keyboard("a"),I(n.value).toBe("12 : 30 : 45"),await g.keyboard(Me),await g.keyboard("3"),I(n.value).toBe("12 : 03 : 45"),await g.keyboard("2"),I(n.value).toBe("12 : 32 : 45"),await g.keyboard(Me),await g.keyboard("2"),I(n.value).toBe("12 : 32 : 02"),await g.tab(),await g.keyboard(Tt),await g.keyboard(oe),I(n.value).toBe("13 : 32 : 02"),await g.tab(),await g.keyboard(oe),I(n.value).toBe("13 : 33 : 02")}};var qe,Be,je;h.parameters={...h.parameters,docs:{...(qe=h.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Et=(gt=ae.parameters)==null?void 0:gt.docs)==null?void 0:Et.source}}};var ht,St,vt;re.parameters={...re.parameters,docs:{...(ht=re.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(vt=(St=re.parameters)==null?void 0:St.docs)==null?void 0:vt.source}}};const $n=["Default","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","WithIncrement","KeyboardInteractions"];export{X as ControlledPropUpdate,h as Default,J as Disabled,Z as Error,ee as HourReadOnly,re as KeyboardInteractions,te as MinuteReadOnly,Q as ReadOnly,ne as SecondReadOnly,z as UncontrolledDefaultValue,ae as WithIncrement,$n as __namedExportsOrder,Yn as default};
