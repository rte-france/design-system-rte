import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as R,a as $,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as T,w as X,e as f,u as g}from"./index-DaW6VCyr.js";import{r as m}from"./index-G8LIXM5I.js";import{S as H,E as K,T as L,a as A,A as C}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I as N}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te=(e,t,n)=>{var o;let s=e<t.length-2?e+1:0;for(;(o=t[s])!=null&&o.classList.contains(n);)s<t.length-1?s++:s=0;t[s].focus()},ne=(e,t,n)=>{var o;let s=e>0?e-1:t.length-1;for(;(o=t[s])!=null&&o.classList.contains(n);)s>0?s--:s=t.length-1;t[s].focus()},se=(e,t)=>{const n=e<t.length-1?e+1:0;t[n].focus()},oe=(e,t)=>{const n=e>0?e-1:t.length-1;t[n].focus()},ae=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(n=>n.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},re="_segment_21860_3",u={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:re,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},ie=(e,t,n)=>{const[s,o]=m.useState({left:0,width:0}),i=m.useCallback(()=>{if(!e.current)return;const l=t.findIndex(a=>a.id===n);if(l<0)return;const d=e.current.querySelectorAll(`.${u.segment}`)[l];d&&o({left:d.offsetLeft,width:d.offsetWidth})},[n,t,e]);return m.useEffect(()=>(i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}),[n,t,e,i]),s},ce=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],le=ce.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),de=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(le)))};n();const s=new MutationObserver(n);return s.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>s.disconnect()},[]),e},ue=e=>{m.useEffect(()=>{var i;const t=e.current;if(!t)return;let n="";const s=l=>{n=l.key};window.addEventListener("keydown",s);const o=()=>{var l,d;if(n==="Tab"){const a=(l=t.parentElement)==null?void 0:l.parentElement,p=a==null?void 0:a.querySelector("[data-selected='true']");p?p.focus():(d=Array.from((a==null?void 0:a.querySelectorAll("."+u.segment))??[])[0])==null||d.focus()}};return(i=e.current)==null||i.addEventListener("focus",o),()=>{window.removeEventListener("keydown",s),t.removeEventListener("focus",o)}},[e])},V=({id:e,icon:t,label:n,position:s,isSelected:o,onClick:i,...l})=>{const d=m.useRef(null),a=de();ue(d);const p=c=>{var y,E;if(c.key===H||c.key===K)v==null||v(c);else if(c.key===A||c.key===C){const x=(E=(y=d.current)==null?void 0:y.parentElement)==null?void 0:E.parentElement,k=Array.from((x==null?void 0:x.querySelectorAll("."+u.segment))??[]),O=k.findIndex(z=>z===document.activeElement);c.key===C?se(O,k):c.key===A&&oe(O,k)}},S=c=>{if(c.key===L){const y=document.activeElement,E=Array.from(a).indexOf(y);c.shiftKey?ne(E,a,u.segment):te(E,a,u.segment)}},{onBlur:B,onKeyDown:F,onKeyUp:U}=Z({onKeyUp:p,onKeyDown:S},{id:e,interactiveKeyCodes:[H,K,L,A,C]}),v=c=>{c.preventDefault(),c.stopPropagation(),i==null||i(c)};return r.jsx("div",{className:u["segment-container"],"data-position":s,...l,children:r.jsxs("div",{id:e,role:"radio","aria-checked":o,"aria-label":n,className:u.segment,"data-segment-type":t?"icon":"label","data-selected":o,onKeyDown:F,onKeyUp:U,onBlur:B,onClick:v,tabIndex:0,ref:d,children:[o&&r.jsx(N,{name:"check-small",appearance:"filled",size:24,className:u["selected-icon"]}),r.jsx("div",{className:u["segment-content"],children:t?r.jsx(N,{name:t,appearance:o?"filled":"outlined",size:24}):r.jsx("span",{className:u["segment-label"],children:n})})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const h=m.forwardRef(({options:e,onChange:t,selectedSegment:n,...s},o)=>{const i=m.useRef(null),l=ie(i,e,n),d=a=>{const S=a.currentTarget.getAttribute("id")||"";t(S)};return ae(e)?r.jsxs("div",{ref:a=>{i.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:u["segmented-control"],...s,children:[r.jsx("span",{className:u["segment-selected-indicator"],style:{left:l.left,width:l.width}}),e.map((a,p)=>r.jsx(V,{position:ee(p,e.length),onClick:d,isSelected:n===a.id,...a},`${a.id}-${p}`))]}):null});h.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const be={title:"SegmentedControl",component:h,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,n]=m.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:s,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[n,s,o]=X(t).getAllByRole("radio");f(n).toHaveAttribute("aria-checked","true"),await g.click(s),f(s).toHaveAttribute("aria-checked","true"),await g.click(o),f(o).toHaveAttribute("aria-checked","true"),await g.click(n),await g.tab(),await g.keyboard(R),f(s).toHaveFocus(),await g.keyboard($),f(s).toHaveAttribute("aria-checked","true"),await g.keyboard(Q),await g.keyboard(J),f(n).toHaveAttribute("aria-checked","true"),await g.keyboard(R),await g.keyboard(R),f(o).toHaveFocus()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,n]=m.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:s,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,n]=m.useState("agenda"),s=o=>{n(o)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:s,selectedSegment:t})})}};var I,j,M;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(j=b.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,Y,G;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,W,q;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(q=(W=_.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const we=["Default","TwoOptions","Icons"];export{b as Default,_ as Icons,w as TwoOptions,we as __namedExportsOrder,be as default};
