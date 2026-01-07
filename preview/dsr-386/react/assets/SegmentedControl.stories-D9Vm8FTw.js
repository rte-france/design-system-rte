import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{e as A,a as se,f as ae,T as re}from"./keyboard-test.constants-C9whQEGR.js";import{f as v,w as ie,e as h,u as l}from"./index-L8OlCEhE.js";import{r as m}from"./index-G8LIXM5I.js";import{u as ce}from"./useSelectedIndicatorPosition-DxJCQCZS.js";import{s as de,B as le}from"./Badge-CR2JMPaF.js";import{S as N,E as I,T as L,a as K,A as j}from"./keyboard.constants-ep-ZHn_7.js";import{u as me}from"./useActiveKeyboard-BPEscCvd.js";import{F as ge}from"./dom.constants-pEgPeCLJ.js";import{I as z}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const ue=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",pe=(e,t,o)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(o);)n<t.length-1?n++:n=0;t[n].focus()},he=(e,t,o)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(o);)n>0?n--:n=t.length-1;t[n].focus()},Se=(e,t)=>{const o=e<t.length-1?e+1:0;t[o].focus()},fe=(e,t)=>{const o=e>0?e-1:t.length-1;t[o].focus()},ve=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},ye=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const o=()=>{t(Array.from(document.querySelectorAll(ge)))};o();const n=new MutationObserver(o);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},Ee="_segment_j2zz5_1",d={"segmented-control":"_segmented-control_j2zz5_1","segment-selected-indicator":"_segment-selected-indicator_j2zz5_11","segment-container":"_segment-container_j2zz5_20",segment:Ee,"segment-content":"_segment-content_j2zz5_72","segment-label":"_segment-label_j2zz5_79","selected-icon":"_selected-icon_j2zz5_92"},be=e=>{m.useEffect(()=>{var g;const t=e.current;if(!t)return;let o="";const n=c=>{o=c.key};window.addEventListener("keydown",n);const s=()=>{var c,p;if(o==="Tab"){const a=(c=t.parentElement)==null?void 0:c.parentElement,u=a==null?void 0:a.querySelector("[data-selected='true']");u?u.focus():(p=Array.from((a==null?void 0:a.querySelectorAll("."+d.segment))??[])[0])==null||p.focus()}};return(g=e.current)==null||g.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},Q=({id:e,icon:t,label:o,position:n,isSelected:s,onClick:g,badgeCount:c,badgeContent:p,badgeIcon:a,badgeType:u,showBadge:y,...J})=>{const x=m.useRef(null),O=ye();be(x);const X=i=>{var b,f;if(i.key===N||i.key===I)E==null||E(i);else if(i.key===K||i.key===j){const k=(f=(b=x.current)==null?void 0:b.parentElement)==null?void 0:f.parentElement,R=Array.from((k==null?void 0:k.querySelectorAll("."+d.segment))??[]),H=R.findIndex(oe=>oe===document.activeElement);i.key===j?Se(H,R):i.key===K&&fe(H,R)}},Z=i=>{if(i.key===L){const b=document.activeElement,f=Array.from(O).indexOf(b);i.shiftKey?he(f,O,d.segment):pe(f,O,d.segment)}},{onBlur:ee,onKeyDown:te,onKeyUp:ne}=me({onKeyUp:X,onKeyDown:Z},{id:e,interactiveKeyCodes:[N,I,L,K,j]}),E=i=>{i.preventDefault(),i.stopPropagation(),g==null||g(i)};return r.jsx("div",{className:d["segment-container"],"data-position":n,...J,children:r.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":o,className:d.segment,"data-segment-type":t?"icon":"label","data-selected":s,onKeyDown:te,onKeyUp:ne,onBlur:ee,onClick:E,tabIndex:0,ref:x,children:[s&&r.jsx(z,{name:"check-small",appearance:"filled",size:24,className:d["selected-icon"]}),r.jsx("div",{className:d["segment-content"],children:t?r.jsx(z,{name:t,appearance:s?"filled":"outlined",size:24}):r.jsx("span",{className:d["segment-label"],children:o})}),de({showBadge:!!y,badgeContent:p,badgeCount:c,badgeIcon:a})&&r.jsx(le,{count:c,content:p,icon:a,badgeType:u})]})})};Q.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const S=m.forwardRef(({options:e,onChange:t,selectedSegment:o,...n},s)=>{const g=m.useRef(null),c=ce(g,o),p=a=>{const y=a.currentTarget.getAttribute("id")||"";t(y)};return ve(e)?r.jsxs("div",{ref:a=>{g.current=a,typeof s=="function"?s(a):s&&(s.current=a)},role:"radiogroup",className:d["segmented-control"],...n,children:[r.jsx("span",{className:d["segment-selected-indicator"],style:{left:c.left,top:c.top,width:c.width}}),e.map((a,u)=>r.jsx(Q,{position:ue(u,e.length),onClick:p,isSelected:o===a.id,...a},`${a.id}-${u}`))]}):null});S.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const Ie={title:"Composants/SegmentedControl/SegmentedControl",component:S,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:v()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:v()},render:e=>{const[t,o]=m.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[o,n,s]=ie(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");h(o).toHaveAttribute("aria-checked","true"),await l.click(n),h(n).toHaveAttribute("aria-checked","true"),await l.click(s),h(s).toHaveAttribute("aria-checked","true"),await l.click(o),await l.tab(),await l.keyboard(A),h(n).toHaveFocus(),await l.keyboard(se),h(n).toHaveAttribute("aria-checked","true"),await l.keyboard(ae),await l.keyboard(re),h(o).toHaveAttribute("aria-checked","true"),await l.keyboard(A),await l.keyboard(A),h(s).toHaveFocus()}},_={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:v()},render:e=>{const[t,o]=m.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}},T={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:v()},render:e=>{const[t,o]=m.useState("agenda"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}},C={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:v()},render:e=>{const[t,o]=m.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"380px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}};var D,Y,G;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }, {
      label: "Option 3",
      id: "option3"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }} data-testid="segmented-control-story">
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  }
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var M,B,P;_.parameters={..._.parameters,docs:{...(M=_.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(P=(B=_.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,q,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "agenda",
      icon: "view-agenda",
      label: "Vue agenda"
    }, {
      id: "column",
      icon: "view-column",
      label: "Vue colonne"
    }, {
      id: "grid",
      icon: "view-grid",
      label: "Vue grille"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("agenda");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(V=(q=T.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var F,U,$;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2",
      showBadge: true,
      badgeContent: "number",
      badgeCount: 5,
      badgeType: "indicator"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "380px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Le=["Default","TwoOptions","Icons","WithBadge"];export{w as Default,T as Icons,_ as TwoOptions,C as WithBadge,Le as __namedExportsOrder,Ie as default};
