import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ge,a as qt,f as ge}from"./keyboard-test.constants-CzExugF2.js";import{T as p,n as fe,o as Sn,p as Rn,q as bn,r as ke}from"./timepicker.constants-CynrC_9x.js";import{w as Ee,e as g,u as h}from"./index-4rjIhT2C.js";import{r}from"./index-G8LIXM5I.js";import{f as Lt}from"./testing.utils-DmLcTX3r.js";import{a as J,A as Q,b as Fe,c as We,B as Ye,D as $e}from"./keyboard.constants-D1KJQ2-m.js";import{u as Tn}from"./useFocusTrap-BZu4_Auv.js";import{u as wn}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as xn,A as kn}from"./Label-swDXsD6p.js";import{D as In}from"./Dropdown-CyecDUeK.js";import{h as On,B as Cn}from"./picker.utils-B_AFZxgu.js";import{w as _n}from"./animation-DwV-fHIC.js";import{I as ze}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./dom.constants-Bk0jVzGk.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./RequiredIndicator-Bmv51wvd.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./IconButton-CJDki2nw.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const N=e=>e.toString().padStart(2,"0"),j=e=>{const t=e[p.HOURS].toString().length,a=1,i=t+a,l=e[p.MINUTES].toString().length,u=i+l+a;return{[p.HOURS]:[0,t],[p.MINUTES]:[i,i+l],[p.SECONDS]:[u,u+e[p.SECONDS].toString().length]}},Nn=e=>fe[Math.max(fe.indexOf(e)-1,0)],Bn=({vals:e,activeSegment:t,displaySeconds:a=!1})=>t===p.HOURS?!!e[p.MINUTES]:t===p.MINUTES?!!e[p.SECONDS]&&a:!0,Dn=({vals:e,activeSegment:t,displaySeconds:a=!1})=>{const i=e[p.HOURS],l=e[p.MINUTES],u=e[p.SECONDS];let S=i;return i===""&&l===""&&(!a||u==="")?"":((t!==p.HOURS||l)&&(S+=":"+l),a&&(t===p.SECONDS||u)&&(S+=":"+u),S)};var b=(e=>(e.HOURS="hh",e.MINUTES="mm",e.SECONDS="ss",e))(b||{});const ve=0,Xe={hh:"",mm:"",ss:""},he=["hh","mm","ss"],Je={hh:23,mm:59,ss:59},Vn=(e,t,a)=>{const l=(isNaN(e)?ve:e)+a,u=l>t?ve:l;return ye(u)},Mn=(e,t,a)=>{const l=(isNaN(e)?ve:e)-a;return l<0?ye(t):ye(l)},ye=e=>e.toString().padStart(2,"0"),An=e=>he[Math.min(he.indexOf(e)+1,2)],Hn=e=>he[Math.max(he.indexOf(e)-1,0)],Pn=()=>{const[e,t]=r.useState(b.HOURS),a=An(e),i=Hn(e),l=r.useCallback(()=>{t(a)},[a]),u=r.useCallback(()=>{t(i)},[i]);return{moveToNextSegment:l,moveToPreviousSegment:u,setActiveTimeSegment:t,activeTimeSegment:e,prevSegment:i,nextSegment:a}},Un=e=>{const[t,a]=r.useState(null),i=r.useRef(null);return r.useEffect(()=>{e?_n(()=>{a(i.current)}):a(null)},[e]),{timePickerDropdownElement:t,timePickerDropdownRef:i}},qn=/^\d*$/,Ln=(e,t,a=!1)=>{const[i,l]=r.useState(e??Xe);r.useEffect(()=>{if(!a)return;const m=e??Xe;l(v=>v.hh===m.hh&&v.mm===m.mm&&v.ss===m.ss?v:m)},[e,a]);const{hourIncrement:u=1,minuteIncrement:S=1,secondIncrement:T=1}=t??{},R=(m,v)=>{v.length>2||!qn.test(v)||l(y=>({...y,[m]:v}))},B=r.useCallback(m=>{const v=m.target.value;R(b.HOURS,v)},[]),C=r.useCallback(m=>{const v=m.target.value;R(b.MINUTES,v)},[]),A=r.useCallback(m=>{const v=m.target.value;R(b.SECONDS,v)},[]),x=r.useCallback((m,v)=>{if(i[m]==="")R(m,ye(ve));else{const y=Vn(Number(i[m]),Je[m],v);R(m,y)}},[i]),k=r.useCallback((m,v)=>{const y=Mn(Number(i[m]),Je[m],v);R(m,y)},[i]),G=r.useCallback(()=>{x(b.SECONDS,T)},[T,x]),D=r.useCallback(()=>{k(b.SECONDS,T)},[T,k]),H=r.useCallback(()=>{x(b.MINUTES,S)},[S,x]),P=r.useCallback(()=>{k(b.MINUTES,S)},[S,k]),U=r.useCallback(()=>{x(b.HOURS,u)},[u,x]),q=r.useCallback(()=>{k(b.HOURS,u)},[u,k]),Se=r.useCallback(()=>{R(b.HOURS,""),R(b.MINUTES,""),R(b.SECONDS,"")},[R]);return{internalTimeValue:i,updateTimeSegment:R,handleOnChangeHours:B,handleOnChangeMinutes:C,handleOnChangeSeconds:A,increaseSeconds:G,decreaseSeconds:D,increaseMinutes:H,decreaseMinutes:P,increaseHours:U,decreaseHours:q,resetValue:Se}},jn={"rte-time-picker-dropdown":"_rte-time-picker-dropdown_1wpg8_19"},M={"rte-time-picker-segment-container":"_rte-time-picker-segment-container_tosmg_1","rte-time-picker-segment-separator":"_rte-time-picker-segment-separator_tosmg_17","rte-time-picker-segment-controls":"_rte-time-picker-segment-controls_tosmg_28","rte-time-picker-segment-controls-button":"_rte-time-picker-segment-controls-button_tosmg_34","rte-time-picker-segment-input":"_rte-time-picker-segment-input_tosmg_47"},pe=r.forwardRef(({value:e,onChange:t,increase:a,decrease:i,onKeyDown:l,unit:u,withSeparator:S,readOnly:T},R)=>{const B=x=>{T||l==null||l(x)},C=()=>{T||a==null||a()},A=()=>{T||i==null||i()};return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:M["rte-time-picker-segment-container"],children:[o.jsxs("div",{className:M["rte-time-picker-segment-controls"],children:[o.jsx("button",{className:M["rte-time-picker-segment-controls-button"],onClick:C,tabIndex:-1,type:"button","aria-label":`Increase ${u==="h"?"hours":u==="m"?"minutes":"seconds"} value`,children:o.jsx(ze,{name:"arrow-chevron-up",appearance:"outlined",size:24})}),o.jsx("input",{ref:R,type:"text",value:e??"00",onChange:t,onKeyDown:B,tabIndex:T?-1:0,className:M["rte-time-picker-segment-input"],readOnly:T}),o.jsx("button",{className:M["rte-time-picker-segment-controls-button"],onClick:A,tabIndex:-1,type:"button","aria-label":`Decrease ${u==="h"?"hours":u==="m"?"minutes":"seconds"} value`,children:o.jsx(ze,{name:"arrow-chevron-down",appearance:"outlined",size:24})})]}),o.jsx("span",{children:u})]}),S&&o.jsx("span",{className:M["rte-time-picker-segment-separator"],children:":"})]})});pe.__docgenInfo={description:"",methods:[],displayName:"TimePickerDigit",props:{value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},increase:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},decrease:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""},unit:{required:!0,tsType:{name:"union",raw:'"h" | "m" | "s"',elements:[{name:"literal",value:'"h"'},{name:"literal",value:'"m"'},{name:"literal",value:'"s"'}]},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:""}}};const Kn=/^\d*$/,[K,Z,Gn]=fe,O=r.forwardRef(({id:e,labelId:t,value:a,defaultValue:i,onChange:l,label:u,showLabel:S,required:T=!1,showLabelRequirement:R=!1,readOnly:B,assistiveTextLabel:C,errorMessage:A,assistiveAppearance:x,showAssistiveIcon:k,assistiveTextLink:G,isError:D,disabled:H,isHourReadOnly:P=!1,isMinuteReadOnly:U=!1,isSecondReadOnly:q=!1,hourIncrement:Se=1,minuteIncrement:m=1,secondIncrement:v=1,displaySeconds:y=!0,placeholder:Ie,isCompact:jt=!1,showResetIcon:Kt=!1},F)=>{var je;const[V,Re]=r.useState(!1),[Gt,Oe]=r.useState(!1),Ce=r.useRef(null),_=r.useRef(null),Ft=wn(_.current),W=r.useRef(l),_e=a!==void 0,Wt=r.useRef(a??i),Y=_e?a:Wt.current,be=r.useRef(Y??null),{timePickerDropdownElement:Yt,timePickerDropdownRef:$t}=Un(V),{moveToNextSegment:L,moveToPreviousSegment:Ne,setActiveTimeSegment:$,activeTimeSegment:c,prevSegment:zt,nextSegment:Xt}=Pn(),{internalTimeValue:d,updateTimeSegment:w,handleOnChangeHours:Jt,handleOnChangeMinutes:Qt,handleOnChangeSeconds:Zt,increaseMinutes:Be,decreaseMinutes:De,increaseSeconds:Ve,decreaseSeconds:Me,increaseHours:Ae,decreaseHours:He,resetValue:en}=Ln(Y,{hourIncrement:Se,minuteIncrement:m,secondIncrement:v},_e);Tn(Yt,V);const tn=Dn({vals:d,activeSegment:c,displaySeconds:y}),nn=V&&!H,Te=D&&A||C,Pe=`${e}-assistive-text`,an=n=>{_.current=n,typeof F=="function"?F(n):F&&(F.current=n)},Ue=()=>c===K?P:c===Z?U:q,sn=n=>n===K?P:n===Z?U:q,rn=n=>{const s=n.key;s===J?(n.preventDefault(),Ve()):s===Q&&(n.preventDefault(),Me())},on=n=>{const s=n.key;s===J?(n.preventDefault(),Be()):s===Q&&(n.preventDefault(),De())},ln=n=>{const s=n.key;s===J?(n.preventDefault(),Ae()):s===Q&&(n.preventDefault(),He())},cn=n=>{if(n===Ye||n===$e){if(Ue())return;mn()}n===Fe&&(Ne(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var f;const s=j(d)[zt];(f=_.current)==null||f.setSelectionRange(s[0],s[1])})})),n===We&&Bn({vals:d,activeSegment:c,displaySeconds:y})&&(L(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{var f;const s=j(d)[Xt];(f=_.current)==null||f.setSelectionRange(s[0],s[1])})}))},un=n=>{const s=n.key;if([J,Q,Fe,We,Ye,$e].includes(s)){n.preventDefault(),cn(s);return}if(!Kn.test(s)){z();return}if(Ue()){z();return}else{if(!y&&(w(p.SECONDS,"00"),c===p.SECONDS))return;const f=d[c];if(f.length>=2)dn(f,N(Number(s)));else{const I=f+s,Ke=bn[c];if(f.length===0&&Number(s)>Ke){if(w(c,N(Number(s))),c===p.MINUTES&&!y)return;L()}else if(I.length===2){const X=N(Math.min(Number(I),ke[c]));if(w(c,X),c===p.MINUTES&&!y)return;L()}else w(c,N(Number(s)))}}},mn=()=>{if(d[c]!=="")w(c,""),qe({[c]:""});else{const n=Nn(c);if(n!==c){if(sn(n))return;w(n,""),qe({[n]:""}),Ne()}}},qe=n=>{const s={...d,...n};!y&&s.hh===""&&s.mm===""&&s.ss!==""&&w(p.SECONDS,"")},dn=(n,s)=>{var X;const f=j(d)[c][0];if((((X=_.current)==null?void 0:X.selectionStart)??0)-f===0)if(n[0]==="0"){const we=n[1]+s[1],xe=N(Math.min(Number(we),ke[c]));if(w(c,xe),c===p.MINUTES&&!y)return;L()}else w(c,s);else{const we=Number(n[0]+s),xe=N(Math.min(we,ke[c]));if(w(c,xe),c===p.MINUTES&&!y)return;L()}},pn=()=>{var I;V&&Re(!1);const n=((I=_.current)==null?void 0:I.selectionStart)??0,s=j(d),f=1;n<=s[K][f]?$(K):n<=s[Z][f]?$(Z):$(Gn)},Le=()=>{var n;H||(Oe(!0),(n=_.current)==null||n.focus())},gn=()=>{Oe(!1)},fn=()=>{Le()},vn=()=>{Object.values(d).forEach((n,s)=>{const f=fe[s],I=Number(n);isNaN(I)?w(f,N(0)):w(f,N(I))})},hn=()=>{Le(),Re(n=>!n),vn()},yn=()=>{Re(!1),gn()},En=()=>{en(),$(K)},z=r.useCallback(()=>{const s=j(d)[c];requestAnimationFrame(()=>{var f;(f=_.current)==null||f.setSelectionRange(s[0],s[1])})},[c,d]);return r.useEffect(()=>{z()},[z]),r.useEffect(()=>{W.current=l},[l]),r.useEffect(()=>{be.current=Y??null},[Y]),r.useEffect(()=>{var n;On(be.current,d)||(be.current=d,(n=W.current)==null||n.call(W,d))},[d]),B&&(d.hh===""||d.mm===""||d.ss==="")?(console.warn(Sn),null):D&&!C?(console.warn(Rn),null):o.jsxs("div",{children:[S&&o.jsx(xn,{label:u,required:T,showLabelRequirement:R}),o.jsx(In,{dropdownId:e?`${e}-dropdown`:void 0,isList:!1,onClose:yn,offset:8,overlayLevel:Ft,style:{width:(je=Ce.current)==null?void 0:je.offsetWidth},trigger:o.jsx(Cn,{id:e,ariaLabelledBy:t,ariaDescribedBy:Te&&!V?Pe:void 0,"aria-label":S?void 0:u,value:tn,readOnly:B,onFocus:fn,onKeyDown:un,onMouseUp:pn,pickerInputRef:an,pickerRef:Ce,isFocused:Gt,onOpenPicker:hn,assistiveTextLabel:C,assistiveAppearance:x,showAssistiveIcon:k,assistiveTextLink:G,isError:D,disabled:H,onChange:()=>{},onClickReset:En,openButtonAriaLabel:"Open time picker dropdown",placeholder:Ie,isCompact:jt,showResetIcon:Kt}),isOpen:nn,children:o.jsxs("div",{className:jn["rte-time-picker-dropdown"],ref:$t,children:[o.jsx(pe,{value:d.hh,onChange:Jt,onKeyDown:ln,increase:Ae,decrease:He,unit:"h",withSeparator:!0,readOnly:P}),o.jsx(pe,{value:d.mm,onChange:Qt,onKeyDown:on,increase:Be,decrease:De,unit:"m",withSeparator:y,readOnly:U}),y&&o.jsx(pe,{value:d.ss,onChange:Zt,onKeyDown:rn,increase:Ve,decrease:Me,unit:"s",readOnly:q})]})}),Te&&!V&&o.jsx(kn,{id:Pe,label:Te,appearance:D?"error":x,showIcon:k,href:G})]})});O.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},isHourReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isMinuteReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isSecondReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},hourIncrement:{defaultValue:{value:"1",computed:!1},required:!1},minuteIncrement:{defaultValue:{value:"1",computed:!1},required:!1},secondIncrement:{defaultValue:{value:"1",computed:!1},required:!1},displaySeconds:{defaultValue:{value:"true",computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},showResetIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreTimePickerProps","Omit"]};const Ta={title:"Composants/TimePicker/TimePicker",component:O,tags:["autodocs"],argTypes:{assistiveAppearance:{options:["description","success","error"],control:{type:"radio"}},placeholder:{control:{type:"text"}},isCompact:{control:{type:"boolean"}},showResetIcon:{control:{type:"boolean"}}}},E={args:{id:"time-picker",label:"Label",labelId:"time-picker-label",showLabel:!0,required:!0,showLabelRequirement:!0,assistiveTextLabel:"Assistive text",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"https://www.example.com",isError:!1,disabled:!1,readOnly:!1,isHourReadOnly:!1,isMinuteReadOnly:!1,isSecondReadOnly:!1,displaySeconds:!0,placeholder:"Enter time",isCompact:!1,showResetIcon:!1},render:e=>{const[t,a]=r.useState({hh:"",mm:"",ss:""});return o.jsx(O,{...e,id:"time-picker",value:t,onChange:a})}},ee={args:{...E.args,isCompact:!0}},te={args:{...E.args},render:e=>o.jsx(O,{...e,defaultValue:{hh:"08",mm:"15",ss:"00"},onChange:()=>{}})},ne={args:{...E.args},render:e=>{const[t,a]=r.useState({hh:"12",mm:"30",ss:"45"});return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8},children:[o.jsx("button",{onClick:()=>a({hh:"09",mm:"00",ss:"00"}),children:"Set to 09:00:00"}),o.jsx("button",{onClick:()=>a({hh:"",mm:"",ss:""}),children:"Clear"})]}),o.jsx(O,{...e,value:t,onChange:a})]})}},ae={args:{...E.args,disabled:!0,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{const t=Ee(e).getByRole("textbox");await g(t).toBeDisabled(),await g(t).toHaveValue(""),await g(t).not.toHaveAttribute("placeholder")}},se={args:{...E.args,readOnly:!0,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await g(Ee(e).getByRole("textbox")).toHaveValue("12:30:45")}},re={args:{...E.args,isError:!0,assistiveAppearance:"error",assistiveTextLabel:"Assistive text",errorMessage:"Error message"},play:async({canvasElement:e})=>{var a;const t=Ee(e);g(t.getByRole("textbox")).toHaveAttribute("aria-describedby","time-picker-assistive-text"),await g((a=t.getByRole("textbox").parentElement)==null?void 0:a.querySelectorAll("svg")).toHaveLength(1)}},oe={args:{...E.args,showResetIcon:!0},render:e=>{const[t,a]=r.useState({hh:"12",mm:"30",ss:"45"});return o.jsx(O,{...e,value:t,onChange:a})},play:async({canvasElement:e})=>{const t=Ee(e),a=t.getByRole("button",{name:"Réinitialiser la valeur"}),i=a.querySelector("svg");await g(a.style.color).toBe("var(--content-secondary)"),await g(i==null?void 0:i.querySelector("path")).toHaveStyle({fill:getComputedStyle(a).color}),await g(t.getByRole("textbox")).toHaveValue("12:30:45");const l=a.getBoundingClientRect(),u=t.getByRole("textbox").getBoundingClientRect(),S=t.getByRole("button",{name:"Open time picker dropdown"}).getBoundingClientRect();await g(l.left-u.right).toBeCloseTo(8),await g(S.left-l.right).toBeCloseTo(8),await h.click(a),await g(t.getByRole("textbox")).toHaveValue(""),await g(t.queryByRole("button",{name:"Réinitialiser la valeur"})).not.toBeInTheDocument()}},ie={args:{...E.args,isHourReadOnly:!0,value:{hh:"12",mm:"10",ss:"15"}}},le={args:{...E.args,isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"15"}}},ce={args:{...E.args,isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}},ue={args:{...E.args},render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[o.jsx(O,{...e,id:"hour-read-only-time-picker",isHourReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(O,{...e,id:"minute-read-only-time-picker",isMinuteReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}}),o.jsx(O,{...e,id:"second-read-only-time-picker",isSecondReadOnly:!0,value:{hh:"12",mm:"30",ss:"45"}})]})},me={tags:["skip-ci"],args:{...E.args,minuteIncrement:15},play:async({canvasElement:e})=>{await Lt();const t=e.querySelector("input");await h.tab(),await h.tab(),await h.keyboard(qt),g(t.value).toBe("00:00:00"),await h.tab(),await h.keyboard(ge),g(t.value).toBe("00:15:00"),await h.keyboard(ge),g(t.value).toBe("00:30:00")}},de={tags:["skip-ci"],args:{...E.args,value:{hh:"12",mm:"30",ss:"45"}},play:async({canvasElement:e})=>{await Lt();const t=e.querySelector("input");await h.tab(),await h.keyboard("a"),g(t.value).toBe("12:30:45"),await h.keyboard(Ge),await h.keyboard("3"),g(t.value).toBe("12:03:45"),await h.keyboard("2"),g(t.value).toBe("12:32:45"),await h.keyboard(Ge),await h.keyboard("2"),g(t.value).toBe("12:32:02"),await h.tab(),await h.keyboard(qt),await h.keyboard(ge),g(t.value).toBe("13:32:02"),await h.tab(),await h.keyboard(ge),g(t.value).toBe("13:33:02")}};var Qe,Ze,et;E.parameters={...E.parameters,docs:{...(Qe=E.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;ee.parameters={...ee.parameters,docs:{...(tt=ee.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(at=(nt=ee.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var st,rt,ot;te.parameters={...te.parameters,docs:{...(st=te.parameters)==null?void 0:st.docs,source:{originalSource:`{
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
}`,...(ot=(rt=te.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var it,lt,ct;ne.parameters={...ne.parameters,docs:{...(it=ne.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ct=(lt=ne.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};var ut,mt,dt;ae.parameters={...ae.parameters,docs:{...(ut=ae.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  },
  play: async ({
    canvasElement
  }) => {
    const input = within(canvasElement).getByRole("textbox");
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue("");
    await expect(input).not.toHaveAttribute("placeholder");
  }
}`,...(dt=(mt=ae.parameters)==null?void 0:mt.docs)==null?void 0:dt.source}}};var pt,gt,ft;se.parameters={...se.parameters,docs:{...(pt=se.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    readOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("textbox")).toHaveValue("12:30:45");
  }
}`,...(ft=(gt=se.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var vt,ht,yt;re.parameters={...re.parameters,docs:{...(vt=re.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
    await expect(canvas.getByRole("textbox").parentElement?.querySelectorAll("svg")).toHaveLength(1);
  }
}`,...(yt=(ht=re.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var Et,St,Rt;oe.parameters={...oe.parameters,docs:{...(Et=oe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showResetIcon: true
  },
  render: args => {
    const [value, setValue] = useState<TimeFormat>({
      hh: "12",
      mm: "30",
      ss: "45"
    });
    return <TimePicker {...args} value={value} onChange={setValue} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const resetButton = canvas.getByRole("button", {
      name: "Réinitialiser la valeur"
    });
    const icon = resetButton.querySelector("svg");
    await expect(resetButton.style.color).toBe("var(--content-secondary)");
    await expect(icon?.querySelector("path")).toHaveStyle({
      fill: getComputedStyle(resetButton).color
    });
    await expect(canvas.getByRole("textbox")).toHaveValue("12:30:45");
    const resetBounds = resetButton.getBoundingClientRect();
    const inputBounds = canvas.getByRole("textbox").getBoundingClientRect();
    const clockBounds = canvas.getByRole("button", {
      name: "Open time picker dropdown"
    }).getBoundingClientRect();
    await expect(resetBounds.left - inputBounds.right).toBeCloseTo(8);
    await expect(clockBounds.left - resetBounds.right).toBeCloseTo(8);
    await userEvent.click(resetButton);
    await expect(canvas.getByRole("textbox")).toHaveValue("");
    await expect(canvas.queryByRole("button", {
      name: "Réinitialiser la valeur"
    })).not.toBeInTheDocument();
  }
}`,...(Rt=(St=oe.parameters)==null?void 0:St.docs)==null?void 0:Rt.source}}};var bt,Tt,wt;ie.parameters={...ie.parameters,docs:{...(bt=ie.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isHourReadOnly: true,
    value: {
      hh: "12",
      mm: "10",
      ss: "15"
    }
  }
}`,...(wt=(Tt=ie.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var xt,kt,It;le.parameters={...le.parameters,docs:{...(xt=le.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isMinuteReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "15"
    }
  }
}`,...(It=(kt=le.parameters)==null?void 0:kt.docs)==null?void 0:It.source}}};var Ot,Ct,_t;ce.parameters={...ce.parameters,docs:{...(Ot=ce.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isSecondReadOnly: true,
    value: {
      hh: "12",
      mm: "30",
      ss: "45"
    }
  }
}`,...(_t=(Ct=ce.parameters)==null?void 0:Ct.docs)==null?void 0:_t.source}}};var Nt,Bt,Dt;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Dt=(Bt=ue.parameters)==null?void 0:Bt.docs)==null?void 0:Dt.source}}};var Vt,Mt,At;me.parameters={...me.parameters,docs:{...(Vt=me.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
    expect(input.value).toBe("00:00:00");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:15:00");
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(input.value).toBe("00:30:00");
  }
}`,...(At=(Mt=me.parameters)==null?void 0:Mt.docs)==null?void 0:At.source}}};var Ht,Pt,Ut;de.parameters={...de.parameters,docs:{...(Ht=de.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(Ut=(Pt=de.parameters)==null?void 0:Pt.docs)==null?void 0:Ut.source}}};const wa=["Default","Compact","UncontrolledDefaultValue","ControlledPropUpdate","Disabled","ReadOnly","Error","WithResetIcon","HourReadOnly","MinuteReadOnly","SecondReadOnly","AllSegmentsReadOnly","WithIncrement","KeyboardInteractions"];export{ue as AllSegmentsReadOnly,ee as Compact,ne as ControlledPropUpdate,E as Default,ae as Disabled,re as Error,ie as HourReadOnly,de as KeyboardInteractions,le as MinuteReadOnly,se as ReadOnly,ce as SecondReadOnly,te as UncontrolledDefaultValue,me as WithIncrement,oe as WithResetIcon,wa as __namedExportsOrder,Ta as default};
