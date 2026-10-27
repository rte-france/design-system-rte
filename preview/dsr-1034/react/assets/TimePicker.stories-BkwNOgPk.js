import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as Be,a as At,e as pe}from"./keyboard-test.constants-D8znW6ct.js";import{T as p,n as fe,o as gn,p as hn,q as En,r as ke}from"./timepicker.constants-CynrC_9x.js";import{w as vn,e as w,u as h}from"./index-4rjIhT2C.js";import{r as s}from"./index-G8LIXM5I.js";import{f as Pt}from"./testing.utils-DmLcTX3r.js";import{a as J,A as Q,b as Ke,c as Ge,B as Fe,D as We}from"./keyboard.constants-D1KJQ2-m.js";import{u as Sn}from"./useFocusTrap-BZu4_Auv.js";import{u as Tn}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as yn,A as bn}from"./Label-swDXsD6p.js";import{D as Rn}from"./Dropdown-CyecDUeK.js";import{h as kn,B as wn}from"./picker.utils-DxvaSoVy.js";import{w as In}from"./animation-DwV-fHIC.js";import{I as Ye}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./RequiredIndicator-Bmv51wvd.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./IconButton-CJDki2nw.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const N=e=>e.toString().padStart(2,"0"),B=e=>{const n=e[p.HOURS].toString().length,r=3,i=n+r,c=e[p.MINUTES].toString().length,l=i+c+r;return{[p.HOURS]:[0,n],[p.MINUTES]:[i,i+c],[p.SECONDS]:[l,l+e[p.SECONDS].toString().length]}},On=e=>fe[Math.max(fe.indexOf(e)-1,0)],_n=({vals:e,activeSegment:n,displaySeconds:r=!1})=>n===p.HOURS?!!e[p.MINUTES]:n===p.MINUTES?!!e[p.SECONDS]&&r:!0,xn=({vals:e,activeSegment:n,displaySeconds:r=!1})=>{const i=e[p.HOURS],c=e[p.MINUTES],l=e[p.SECONDS];let y=i;return i===""&&c===""&&(!r||l==="")?"":((n!==p.HOURS||c)&&(y+=" : "+c),r&&(n===p.SECONDS||l)&&(y+=" : "+l),y)};var T=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(T||{});const ge=0,$e={hh:"",mm:"",ss:""},he=["hh","mm","ss"],ze={hh:23,mm:59,ss:59},Nn=(e,n,r)=>{const c=(isNaN(e)?ge:e)+r,l=c>n?ge:c;return Ee(l)},Cn=(e,n,r)=>{const c=(isNaN(e)?ge:e)-r;return c<0?Ee(n):Ee(c)},Ee=e=>e.toString().padStart(2,"0"),Dn=e=>he[Math.min(he.indexOf(e)+1,2)],Mn=e=>he[Math.max(he.indexOf(e)-1,0)],Vn=()=>{const[e,n]=s.useState(T.HOURS),r=Dn(e),i=Mn(e),c=s.useCallback(()=>{n(r)},[r]),l=s.useCallback(()=>{n(i)},[i]);return{moveToNextSegment:c,moveToPreviousSegment:l,setActiveTimeSegment:n,activeTimeSegment:e,prevSegment:i,nextSegment:r}},An=e=>{const[n,r]=s.useState(null),i=s.useRef(null);return s.useEffect(()=>{e?In(()=>{r(i.current)}):r(null)},[e]),{timePickerDropdownElement:n,timePickerDropdownRef:i}},Pn=/^\d*$/,Un=(e,n,r=!1)=>{const[i,c]=s.useState(e??$e);s.useEffect(()=>{if(!r)return;const m=e??$e;c(g=>g.hh===m.hh&&g.mm===m.mm&&g.ss===m.ss?g:m)},[e,r]);const{hourIncrement:l=1,minuteIncrement:y=1,secondIncrement:b=1}=n??{},S=(m,g)=>{g.length>2||!Pn.test(g)||c(E=>({...E,[m]:g}))},D=s.useCallback(m=>{const g=m.target.value;S(T.HOURS,g)},[]),_=s.useCallback(m=>{const g=m.target.value;S(T.MINUTES,g)},[]),P=s.useCallback(m=>{const g=m.target.value;S(T.SECONDS,g)},[]),k=s.useCallback((m,g)=>{if(i[m]==="")S(m,Ee(ge));else{const E=Nn(Number(i[m]),ze[m],g);S(m,E)}},[i]),I=s.useCallback((m,g)=>{const E=Cn(Number(i[m]),ze[m],g);S(m,E)},[i]),G=s.useCallback(()=>{k(T.SECONDS,b)},[b,k]),M=s.useCallback(()=>{I(T.SECONDS,b)},[b,I]),U=s.useCallback(()=>{k(T.MINUTES,y)},[y,k]),H=s.useCallback(()=>{I(T.MINUTES,y)},[y,I]),L=s.useCallback(()=>{k(T.HOURS,l)},[l,k]),q=s.useCallback(()=>{I(T.HOURS,l)},[l,I]),ve=s.useCallback(()=>{S(T.HOURS,""),S(T.MINUTES,""),S(T.SECONDS,"")},[S]);return{internalTimeValue:i,updateTimeSegment:S,handleOnChangeHours:D,handleOnChangeMinutes:_,handleOnChangeSeconds:P,increaseSeconds:G,decreaseSeconds:M,increaseMinutes:U,decreaseMinutes:H,increaseHours:L,decreaseHours:q,resetValue:ve}},Hn={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},A={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},de=s.forwardRef(({value:e,onChange:n,increase:r,decrease:i,onKeyDown:c,unit:l,withSeparator:y,readOnly:b},S)=>{const D=k=>{b||c==null||c(k)},_=()=>{b||r==null||r()},P=()=>{b||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:A["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:A["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:_,tabIndex:-1,type:"button","aria-label":`Increase ${l==="h"?"hours":l==="m"?"minutes":"seconds"} value`,children:o.jsx(Ye,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:S,type:"text",value:e??"00",onChange:n,onKeyDown:D,tabIndex:b?-1:0,className:A["rte-time-picker-segment-input"],readOnly:b}),o.jsx("button",{className:A["rte-time-picker-segment-controls-button"],onClick:P,tabIndex:-1,type:"button","aria-label":`Decrease ${l==="h"?"hours":l==="m"?"minutes":"seconds"} value`,children:o.jsx(Ye,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:l})]}),y&&o.jsx("span",{className:A["rte-time-picker-segment-separator"],children:":"})]})});de.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const Ln=/^\d*$/,[K,Z,qn]=fe,C=s.forwardRef(({id:e,labelId:n,value:r,defaultValue:i,onChange:c,label:l,showLabel:y,required:b=!1,showLabelRequirement:S=!1,readOnly:D,assistiveTextLabel:_,errorMessage:P,assistiveAppearance:k,showAssistiveIcon:I,assistiveTextLink:G,isError:M,disabled:U,isHourReadOnly:H=!1,isMinuteReadOnly:L=!1,isSecondReadOnly:q=!1,hourIncrement:ve=1,minuteIncrement:m=1,secondIncrement:g=1,displaySeconds:E=!0,placeholder:we,isCompact:Ut=!1,showResetIcon:Ht=!1},F)=>{var qe;const[V,Se]=s.useState(!1),[Lt,Ie]=s.useState(!1),Oe=s.useRef(null),x=s.useRef(null),qt=Tn(x.current),W=s.useRef(c),_e=r!==void 0,jt=s.useRef(r??i),Y=_e?r:jt.current,Te=s.useRef(Y??null),{timePickerDropdownElement:Bt,timePickerDropdownRef:Kt}=An(V),{moveToNextSegment:j,moveToPreviousSegment:xe,setActiveTimeSegment:$,activeTimeSegment:u,prevSegment:Gt,nextSegment:Ft}=Vn(),{internalTimeValue:d,updateTimeSegment:R,handleOnChangeHours:Wt,handleOnChangeMinutes:Yt,handleOnChangeSeconds:$t,increaseMinutes:Ne,decreaseMinutes:Ce,increaseSeconds:De,decreaseSeconds:Me,increaseHours:Ve,decreaseHours:Ae,resetValue:zt}=Un(Y,{hourIncrement:ve,minuteIncrement:m,secondIncrement:g},_e);Sn(Bt,V);const Xt=xn({vals:d,activeSegment:u,displaySeconds:E}),Jt=V&&!U,ye=M&&P||_,Pe=`${e}-assistive-text`,Qt=t=>{x.current=t,typeof F=="function"?F(t):F&&(F.current=t)},Ue=()=>u===K?H:u===Z?L:q,Zt=t=>t===K?H:t===Z?L:q,en=t=>{const a=t.key;a===J?(t.preventDefault(),De()):a===Q&&(t.preventDefault(),Me())},tn=t=>{const a=t.key;a===J?(t.preventDefault(),Ne()):a===Q&&(t.preventDefault(),Ce())},nn=t=>{const a=t.key;a===J?(t.preventDefault(),Ve()):a===Q&&(t.preventDefault(),Ae())},an=t=>{if(t===Fe||t===We){if(Ue())return;rn()}t===Ke&&(xe(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var f;const a=B(d)[Gt];(f=x.current)==null||f.setSelectionRange(a[0],a[1])})})),t===Ge&&_n({vals:d,activeSegment:u,displaySeconds:E})&&(j(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var f;const a=B(d)[Ft];(f=x.current)==null||f.setSelectionRange(a[0],a[1])})}))},sn=t=>{const a=t.key;if([J,Q,Ke,Ge,Fe,We].includes(a)){t.preventDefault(),an(a);return}if(!Ln.test(a)){z();return}if(Ue()){z();return}else{if(!E&&(R(p.SECONDS,"00"),u===p.SECONDS))return;const f=d[u];if(f.length>=2)on(f,N(Number(a)));else{const O=f+a,je=En[u];if(f.length===0&&Number(a)>je){if(R(u,N(Number(a))),u===p.MINUTES&&!E)return;j()}else if(O.length===2){const X=N(Math.min(Number(O),ke[u]));if(R(u,X),u===p.MINUTES&&!E)return;j()}else R(u,N(Number(a)))}}},rn=()=>{if(d[u]!=="")R(u,""),He({[u]:""});else{const t=On(u);if(t!==u){if(Zt(t))return;R(t,""),He({[t]:""}),xe()}}},He=t=>{const a={...d,...t};!E&&a.hh===""&&a.mm===""&&a.ss!==""&&R(p.SECONDS,"")},on=(t,a)=>{var X;const f=B(d)[u][0];if((((X=x.current)==null?void 0:X.selectionStart)??0)-f===0)if(t[0]==="0"){const be=t[1]+a[1],Re=N(Math.min(Number(be),ke[u]));if(R(u,Re),u===p.MINUTES&&!E)return;j()}else R(u,a);else{const be=Number(t[0]+a),Re=N(Math.min(be,ke[u]));if(R(u,Re),u===p.MINUTES&&!E)return;j()}},un=()=>{var O;V&&Se(!1);const t=((O=x.current)==null?void 0:O.selectionStart)??0,a=B(d),f=1;t<=a[K][f]?$(K):t<=a[Z][f]?$(Z):$(qn)},Le=()=>{var t;U||(Ie(!0),(t=x.current)==null||t.focus())},cn=()=>{Ie(!1)},ln=()=>{Le()},mn=()=>{Object.values(d).forEach((t,a)=>{const f=fe[a],O=Number(t);isNaN(O)?R(f,N(0)):R(f,N(O))})},dn=()=>{Le(),Se(t=>!t),mn()},pn=()=>{Se(!1),cn()},fn=()=>{zt(),$(K)},z=s.useCallback(()=>{const a=B(d)[u];requestAnimationFrame(()=>{var f;(f=x.current)==null||f.setSelectionRange(a[0],a[1])})},[u,d]);return s.useEffect(()=>{z()},[z]),s.useEffect(()=>{W.current=c},[c]),s.useEffect(()=>{Te.current=Y??null},[Y]),s.useEffect(()=>{var t;kn(Te.current,d)||(Te.current=d,(t=W.current)==null||t.call(W,d))},[d]),D&&(d.hh===""||d.mm===""||d.ss==="")?(console.warn(gn),null):M&&!_?(console.warn(hn),null):o.jsxs("div",{children:[y&&o.jsx(yn,{label:l,required:b,showLabelRequirement:S}),o.jsx(Rn,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:pn,offset:8,overlayLevel:qt,style:{width:(qe=Oe.current)==null?void 0:qe.offsetWidth},trigger:o.jsx(wn,{id:e,ariaLabelledBy:n,ariaDescribedBy:ye&&!V?Pe:void 0,"aria-label":y?void 0:l,value:Xt,readOnly:D,onFocus:ln,onKeyDown:sn,onMouseUp:un,pickerInputRef:Qt,pickerRef:Oe,isFocused:Lt,onOpenPicker:dn,assistiveTextLabel:_,assistiveAppearance:k,showAssistiveIcon:I,assistiveTextLink:G,isError:M,disabled:U,onChange:()=>{},onClickReset:fn,openButtonAriaLabel:"Open time picker dropdown",placeholder:we,isCompact:Ut,showResetIcon:Ht}),isOpen:Jt,children:o.jsxs("div",{className:Hn["rte-time-picker-dropdown"],ref:Kt,children:[o.jsx(de,{value:d.hh,onChange:Wt,onKeyDown:nn,increase:Ve,decrease:Ae,unit:"h",withSeparator:!0,readOnly:H}),o.jsx(de,{value:d.mm,onChange:Yt,onKeyDown:tn,increase:Ne,decrease:Ce,unit:"m",withSeparator:E,readOnly:L}),E&&o.jsx(de,{value:d.ss,onChange:$t,onKeyDown:en,increase:De,decrease:Me,unit:"s",readOnly:q})]})}),ye&&!V&&o.jsx(bn,{id:Pe,label:ye,appearance:M?"error":k,showIcon:I,href:G})]})});C.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1},displaySeconds:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},showResetIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Sa={title:"Composants/TimePicker/TimePicker",component:C,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}},placeholder:{control:{type:"text"}},isCompact:{control:{type:"boolean"}},showResetIcon:{control:{type:"boolean"}}}},v={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1,displaySeconds:!0,placeholder:"Enter time",isCompact:!1,showResetIcon:!1},render:e=>{const[n,r]=s.useState({hh:"",mm:"",ss:""});return o.jsx(C,{...e,id:"time-picker",value:n,onChange:r})}},ee={args:{...v.args,isCompact:!0}},te={args:{...v.args},render:e=>o.jsx(C,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},ne={args:{...v.args},render:e=>{const[n,r]=s.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>r({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>r({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(C,{...e,value:n,onChange:r})]})}},ae={args:{...v.args,disabled:!0}},se={args:{...v.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},re={args:{...v.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Assistive text",errorMessage:"Error message"},play:async({canvasElement:e})=>{const n=vn(e);w(n.getByRole("textbox")).toHaveAttribute("aria-describedby","time-picker-assistive-text")}},oe={args:{...v.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},ie={args:{...v.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},ue={args:{...v.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ce={args:{...v.args},render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsx(C,{...e,id:"hour-read-only-time-picker",isHourReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(C,{...e,id:"minute-read-only-time-picker",isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(C,{...e,id:"second-read-only-time-picker",isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}})]})},le={tags:["skip-ci"],args:{...v.args,minuteIncrement:15},play:async({canvasElement:e})=>{await Pt();const n=e.querySelector("input");await h.tab(),await h.tab(),await h.keyboard(At),w(n.value).toBe("00 : 00 : 00"),await h.tab(),await h.keyboard(pe),w(n.value).toBe("00 : 15 : 00"),await h.keyboard(pe),w(n.value).toBe("00 : 30 : 00")}},me={tags:["skip-ci"],args:{...v.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await Pt();const n=e.querySelector("input");await h.tab(),await h.keyboard("a"),w(n.value).toBe("12 : 30 : 45"),await h.keyboard(Be),await h.keyboard("3"),w(n.value).toBe("12 : 03 : 45"),await h.keyboard("2"),w(n.value).toBe("12 : 32 : 45"),await h.keyboard(Be),await h.keyboard("2"),w(n.value).toBe("12 : 32 : 02"),await h.tab(),await h.keyboard(At),await h.keyboard(pe),w(n.value).toBe("13 : 32 : 02"),await h.tab(),await h.keyboard(pe),w(n.value).toBe("13 : 33 : 02")}};var Xe,Je,Qe;v.parameters={...v.parameters,docs:{...(Xe=v.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
    isSecondReadOnly: false,
    displaySeconds: true,
    placeholder: "Enter time",
    isCompact: false,
    showResetIcon: false
  },
  render: args => {
    const [value, setValue] = useState<TimeFormat>({
      hh: "",
      mm: "",
      ss: ""
    });
    return <TimePicker {...args} id="time-picker" value={value} onChange={setValue} />;
  }
}`,...(Qe=(Je=v.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(tt=(et=ee.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,st;te.parameters={...te.parameters,docs:{...(nt=te.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(at=te.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var rt,ot,it;ne.parameters={...ne.parameters,docs:{...(rt=ne.parameters)==null?void 0:rt.docs,source:{originalSource:`{
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
}`,...(it=(ot=ne.parameters)==null?void 0:ot.docs)==null?void 0:it.source}}};var ut,ct,lt;ae.parameters={...ae.parameters,docs:{...(ut=ae.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(lt=(ct=ae.parameters)==null?void 0:ct.docs)==null?void 0:lt.source}}};var mt,dt,pt;se.parameters={...se.parameters,docs:{...(mt=se.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(pt=(dt=se.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ft,gt,ht;re.parameters={...re.parameters,docs:{...(ft=re.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(ht=(gt=re.parameters)==null?void 0:gt.docs)==null?void 0:ht.source}}};var Et,vt,St;oe.parameters={...oe.parameters,docs:{...(Et=oe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(St=(vt=oe.parameters)==null?void 0:vt.docs)==null?void 0:St.source}}};var Tt,yt,bt;ie.parameters={...ie.parameters,docs:{...(Tt=ie.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(bt=(yt=ie.parameters)==null?void 0:yt.docs)==null?void 0:bt.source}}};var Rt,kt,wt;ue.parameters={...ue.parameters,docs:{...(Rt=ue.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(wt=(kt=ue.parameters)==null?void 0:kt.docs)==null?void 0:wt.source}}};var It,Ot,_t;ce.parameters={...ce.parameters,docs:{...(It=ce.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(_t=(Ot=ce.parameters)==null?void 0:Ot.docs)==null?void 0:_t.source}}};var xt,Nt,Ct;le.parameters={...le.parameters,docs:{...(xt=le.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Ct=(Nt=le.parameters)==null?void 0:Nt.docs)==null?void 0:Ct.source}}};var Dt,Mt,Vt;me.parameters={...me.parameters,docs:{...(Dt=me.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(Vt=(Mt=me.parameters)==null?void 0:Mt.docs)==null?void 0:Vt.source}}};const Ta=["Default","Compact","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","HourReadOnly","MinuteReadOnly","SecondReadOnly","AllSegmentsReadOnly","WithIncrement","KeyboardInteractions"];export{ce as AllSegmentsReadOnly,ee as Compact,ne as ControlledPropUpdate,v as Default,ae as Disabled,re as Error,oe as HourReadOnly,me as KeyboardInteractions,ie as MinuteReadOnly,se as ReadOnly,ue as SecondReadOnly,te as UncontrolledDefaultValue,le as WithIncrement,Ta as __namedExportsOrder,Sa as default};
