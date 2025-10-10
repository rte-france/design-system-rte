import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{c as C,a as $,d as Q,T as J}from"./keyboard-test.constants-3xDPVb3g.js";import{f as T,w as X,e as f,u as g}from"./index-DaW6VCyr.js";import{r as u}from"./index-G8LIXM5I.js";import{S as H,E as K,T as N,a as R,A}from"./keyboard.constants-KvjFtZ2v.js";import{u as Z}from"./useActiveKeyboard-D-jDyZO1.js";import{F as ee}from"./dom.constants-pEgPeCLJ.js";import{I as L}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const te=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",ne=(e,t,n)=>{var o;let s=e<t.length-2?e+1:0;for(;(o=t[s])!=null&&o.classList.contains(n);)s<t.length-1?s++:s=0;t[s].focus()},se=(e,t,n)=>{var o;let s=e>0?e-1:t.length-1;for(;(o=t[s])!=null&&o.classList.contains(n);)s>0?s--:s=t.length-1;t[s].focus()},oe=(e,t)=>{const n=e<t.length-1?e+1:0;t[n].focus()},ae=(e,t)=>{const n=e>0?e-1:t.length-1;t[n].focus()},re=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(n=>n.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},ie="_segment_21860_3",m={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:ie,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},ce=(e,t,n)=>{const[s,o]=u.useState({left:0,width:0}),i=u.useCallback(()=>{if(!e.current)return;const l=t.findIndex(a=>a.id===n);if(l<0)return;const d=e.current.querySelectorAll(`.${m.segment}`)[l];d&&o({left:d.offsetLeft,width:d.offsetWidth})},[n,t,e]);return u.useEffect(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[n,t,e,i]),s},le=()=>{const[e,t]=u.useState([]);return u.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(ee)))};n();const s=new MutationObserver(n);return s.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>s.disconnect()},[]),e},de=e=>{u.useEffect(()=>{var i;const t=e.current;if(!t)return;let n="";const s=l=>{n=l.key};window.addEventListener("keydown",s);const o=()=>{var l,d;if(n==="Tab"){const a=(l=t.parentElement)==null?void 0:l.parentElement,p=a==null?void 0:a.querySelector("[data-selected='true']");p?p.focus():(d=Array.from((a==null?void 0:a.querySelectorAll("."+m.segment))??[])[0])==null||d.focus()}};return(i=e.current)==null||i.addEventListener("focus",o),()=>{window.removeEventListener("keydown",s),t.removeEventListener("focus",o)}},[e])},V=({id:e,icon:t,label:n,position:s,isSelected:o,onClick:i,...l})=>{const d=u.useRef(null),a=le();de(d);const p=c=>{var y,h;if(c.key===H||c.key===K)v==null||v(c);else if(c.key===R||c.key===A){const x=(h=(y=d.current)==null?void 0:y.parentElement)==null?void 0:h.parentElement,k=Array.from((x==null?void 0:x.querySelectorAll("."+m.segment))??[]),O=k.findIndex(z=>z===document.activeElement);c.key===A?oe(O,k):c.key===R&&ae(O,k)}},S=c=>{if(c.key===N){const y=document.activeElement,h=Array.from(a).indexOf(y);c.shiftKey?se(h,a,m.segment):ne(h,a,m.segment)}},{onBlur:F,onKeyDown:B,onKeyUp:U}=Z({onKeyUp:p,onKeyDown:S},{id:e,interactiveKeyCodes:[H,K,N,R,A]}),v=c=>{c.preventDefault(),c.stopPropagation(),i==null||i(c)};return r.jsx("div",{className:m["segment-container"],"data-position":s,...l,children:r.jsxs("div",{id:e,role:"radio","aria-checked":o,"aria-label":n,className:m.segment,"data-segment-type":t?"icon":"label","data-selected":o,onKeyDown:B,onKeyUp:U,onBlur:F,onClick:v,tabIndex:0,ref:d,children:[o&&r.jsx(L,{name:"check-small",appearance:"filled",size:24,className:m["selected-icon"]}),r.jsx("div",{className:m["segment-content"],children:t?r.jsx(L,{name:t,appearance:o?"filled":"outlined",size:24}):r.jsx("span",{className:m["segment-label"],children:n})})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const E=u.forwardRef(({options:e,onChange:t,selectedSegment:n,...s},o)=>{const i=u.useRef(null),l=ce(i,e,n),d=a=>{const S=a.currentTarget.getAttribute("id")||"";t(S)};return re(e)?r.jsxs("div",{ref:a=>{i.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:m["segmented-control"],...s,children:[r.jsx("span",{className:m["segment-selected-indicator"],style:{left:l.left,width:l.width}}),e.map((a,p)=>r.jsx(V,{position:te(p,e.length),onClick:d,isSelected:n===a.id,...a},`${a.id}-${p}`))]}):null});E.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const we={title:"Composants/SegmentedControl/SegmentedControl",component:E,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,n]=u.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[n,s,o]=X(t).getAllByRole("radio");f(n).toHaveAttribute("aria-checked","true"),await g.click(s),f(s).toHaveAttribute("aria-checked","true"),await g.click(o),f(o).toHaveAttribute("aria-checked","true"),await g.click(n),await g.tab(),await g.keyboard(C),f(s).toHaveFocus(),await g.keyboard($),f(s).toHaveAttribute("aria-checked","true"),await g.keyboard(Q),await g.keyboard(J),f(n).toHaveAttribute("aria-checked","true"),await g.keyboard(C),await g.keyboard(C),f(o).toHaveFocus()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,n]=u.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,n]=u.useState("agenda"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})}};var I,j,M;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");
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
}`,...(M=(j=w.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,Y,G;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,W,q;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(W=_.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const be=["Default","TwoOptions","Icons"];export{w as Default,_ as Icons,b as TwoOptions,be as __namedExportsOrder,we as default};
