import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{e as A,a as ae,f as re,T as ie}from"./keyboard-test.constants-By8W48aj.js";import{w as ce,e as h,u as l,f}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{I as H,R as de,T as le}from"./Icon-DjEid3Hw.js";import{u as ge}from"./useSelectedIndicatorPosition-DxJCQCZS.js";import{s as me,B as ue}from"./Badge-CQk6fGHb.js";import{S as N,E as L,T as z,a as I,A as j}from"./keyboard.constants-BverKK8B.js";import{u as pe}from"./useActiveKeyboard-DaOmFJe_.js";import{F as he}from"./dom.constants-41SiyeDe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const Se=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",ye=(e,t,o)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(o);)n<t.length-1?n++:n=0;t[n].focus()},fe=(e,t,o)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(o);)n>0?n--:n=t.length-1;t[n].focus()},ve=(e,t)=>{const o=e<t.length-1?e+1:0;t[o].focus()},Ee=(e,t)=>{const o=e>0?e-1:t.length-1;t[o].focus()},be=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},we=()=>{const[e,t]=g.useState([]);return g.useEffect(()=>{const o=()=>{t(Array.from(document.querySelectorAll(he)))};o();const n=new MutationObserver(o);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},_e="_segment_j2zz5_1",d={"segmented-control":"_segmented-control_j2zz5_1","segment-selected-indicator":"_segment-selected-indicator_j2zz5_11","segment-container":"_segment-container_j2zz5_20",segment:_e,"segment-content":"_segment-content_j2zz5_72","segment-label":"_segment-label_j2zz5_79","selected-icon":"_selected-icon_j2zz5_92"},Te=e=>{g.useEffect(()=>{var m;const t=e.current;if(!t)return;let o="";const n=c=>{o=c.key};window.addEventListener("keydown",n);const s=()=>{var c,p;if(o==="Tab"){const a=(c=t.parentElement)==null?void 0:c.parentElement,u=a==null?void 0:a.querySelector("[data-selected='true']");u?u.focus():(p=Array.from((a==null?void 0:a.querySelectorAll("."+d.segment))??[])[0])==null||p.focus()}};return(m=e.current)==null||m.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},Q=({id:e,icon:t,label:o,position:n,isSelected:s,onClick:m,badgeCount:c,badgeContent:p,badgeIcon:a,badgeType:u,badgeSize:v,showBadge:J,...X})=>{const x=g.useRef(null),O=we();Te(x);const Z=i=>{var b,y;if(i.key===N||i.key===L)E==null||E(i);else if(i.key===I||i.key===j){const k=(y=(b=x.current)==null?void 0:b.parentElement)==null?void 0:y.parentElement,R=Array.from((k==null?void 0:k.querySelectorAll("."+d.segment))??[]),K=R.findIndex(se=>se===document.activeElement);i.key===j?ve(K,R):i.key===I&&Ee(K,R)}},ee=i=>{if(i.key===z){const b=document.activeElement,y=Array.from(O).indexOf(b);i.shiftKey?fe(y,O,d.segment):ye(y,O,d.segment)}},{onBlur:te,onKeyDown:ne,onKeyUp:oe}=pe({onKeyUp:Z,onKeyDown:ee},{id:e,interactiveKeyCodes:[N,L,z,I,j]}),E=i=>{i.preventDefault(),i.stopPropagation(),m==null||m(i)};return r.jsx("div",{className:d["segment-container"],"data-position":n,...X,children:r.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":o,className:d.segment,"data-segment-type":t?"icon":"label","data-selected":s,onKeyDown:ne,onKeyUp:oe,onBlur:te,onClick:E,tabIndex:0,ref:x,children:[s&&r.jsx(H,{name:"check-small",appearance:"filled",size:24,className:d["selected-icon"]}),r.jsx("div",{className:d["segment-content"],children:t?r.jsx(H,{name:t,appearance:s?"filled":"outlined",size:24}):r.jsx("span",{className:d["segment-label"],children:o})}),me({showBadge:!!J,badgeContent:p,badgeCount:c,badgeIcon:a})&&r.jsx(ue,{count:c,content:p,icon:a,badgeType:u,size:v})]})})};Q.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const S=g.forwardRef(({options:e,onChange:t,selectedSegment:o,...n},s)=>{const m=g.useRef(null),c=ge(m,o),p=a=>{const v=a.currentTarget.getAttribute("id")||"";t(v)};return be(e)?r.jsxs("div",{ref:a=>{m.current=a,typeof s=="function"?s(a):s&&(s.current=a)},role:"radiogroup",className:d["segmented-control"],...n,children:[r.jsx("span",{className:d["segment-selected-indicator"],style:{left:c.left,top:c.top,width:c.width}}),e.map((a,u)=>r.jsx(Q,{position:Se(u,e.length),onClick:p,isSelected:o===a.id,...a},`${a.id}-${u}`))]}):null});S.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const Ce=Object.keys(de),xe=Object.keys(le),Ge={title:"Composants/SegmentedControl/SegmentedControl",component:S,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...Ce,...xe].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},args:{onClick:f()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:f()},render:e=>{const[t,o]=g.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[o,n,s]=ce(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");h(o).toHaveAttribute("aria-checked","true"),await l.click(n),h(n).toHaveAttribute("aria-checked","true"),await l.click(s),h(s).toHaveAttribute("aria-checked","true"),await l.click(o),await l.tab(),await l.keyboard(A),h(n).toHaveFocus(),await l.keyboard(ae),h(n).toHaveAttribute("aria-checked","true"),await l.keyboard(re),await l.keyboard(ie),h(o).toHaveAttribute("aria-checked","true"),await l.keyboard(A),await l.keyboard(A),h(s).toHaveFocus()}},_={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:f()},render:e=>{const[t,o]=g.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}},T={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:f()},render:e=>{const[t,o]=g.useState("agenda"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}},C={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,o]=g.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"380px"},children:r.jsx(S,{options:e.options,onChange:n,selectedSegment:t})})}};var D,Y,G;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var B,M,P;_.parameters={..._.parameters,docs:{...(B=_.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(P=(M=_.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var W,q,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...($=(U=C.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const Be=["Default","TwoOptions","Icons","WithBadge"];export{w as Default,T as Icons,_ as TwoOptions,C as WithBadge,Be as __namedExportsOrder,Ge as default};
