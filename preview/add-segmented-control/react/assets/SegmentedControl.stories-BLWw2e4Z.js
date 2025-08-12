import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as k,a as $,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as T,w as X,e as E,u as g}from"./index-DaW6VCyr.js";import{r as m}from"./index-G8LIXM5I.js";import{S as H,E as K,T as N,a as A,A as O}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I as L}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te=(e,t,s)=>{var o;let n=e<t.length-2?e+1:0;for(;(o=t[n])!=null&&o.classList.contains(s);)n<t.length-1?n++:n=0;t[n].focus()},ne=(e,t,s)=>{var o;let n=e>0?e-1:t.length-1;for(;(o=t[n])!=null&&o.classList.contains(s);)n>0?n--:n=t.length-1;t[n].focus()},se=(e,t)=>{const s=e<t.length-1?e+1:0;t[s].focus()},oe=(e,t)=>{const s=e>0?e-1:t.length-1;t[s].focus()},ae="_segment_21860_3",l={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:ae,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},re=(e,t,s)=>{const[n,o]=m.useState({left:0,width:0});return m.useEffect(()=>{function c(){if(!e.current)return;const d=t.findIndex(u=>u.id===s);if(d===-1)return;const a=e.current.querySelectorAll(`.${l.segment}`)[d];a&&o({left:a.offsetLeft,width:a.offsetWidth})}return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[s,t,e]),n},ie=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ce=ie.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),de=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const s=()=>{t(Array.from(document.querySelectorAll(ce)))};s();const n=new MutationObserver(s);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},le=e=>{m.useEffect(()=>{var c;const t=e.current;if(!t)return;let s="";const n=d=>{s=d.key};window.addEventListener("keydown",n);const o=()=>{var d,p;if(s==="Tab"){const a=(d=t.parentElement)==null?void 0:d.parentElement,u=a==null?void 0:a.querySelector("[data-selected='true']");u?u.focus():(p=Array.from((a==null?void 0:a.querySelectorAll("."+l.segment))??[])[0])==null||p.focus()}};return(c=e.current)==null||c.addEventListener("focus",o),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",o)}},[e])},V=({id:e,icon:t,label:s,position:n,isSelected:o,onClick:c,...d})=>{const p=m.useRef(null),a=de();le(p);const u=i=>{var y,f;if(i.key===H||i.key===K)v==null||v(i);else if(i.key===A||i.key===O){const x=(f=(y=p.current)==null?void 0:y.parentElement)==null?void 0:f.parentElement,R=Array.from((x==null?void 0:x.querySelectorAll("."+l.segment))??[]),C=R.findIndex(z=>z===document.activeElement);i.key===O?se(C,R):i.key===A&&oe(C,R)}},S=i=>{if(i.key===N){const y=document.activeElement,f=Array.from(a).indexOf(y);i.shiftKey?ne(f,a,l.segment):te(f,a,l.segment)}},{onBlur:B,onKeyDown:F,onKeyUp:U}=Z({onKeyUp:u,onKeyDown:S},{id:e,interactiveKeyCodes:[H,K,N,A,O]}),v=i=>{i.preventDefault(),i.stopPropagation(),c==null||c(i)};return r.jsx("div",{className:l["segment-container"],"data-position":n,...d,children:r.jsxs("div",{id:e,role:"radio","aria-checked":o,"aria-label":s,className:l.segment,"data-segment-type":t?"icon":"label","data-selected":o,onKeyDown:F,onKeyUp:U,onBlur:B,onClick:v,tabIndex:0,ref:p,children:[o&&r.jsx(L,{name:"check-small",appearance:"filled",size:24,className:l["selected-icon"]}),r.jsx("div",{className:l["segment-content"],children:t?r.jsx(L,{name:t,appearance:o?"filled":"outlined",size:24}):r.jsx("span",{className:l["segment-label"],children:s})})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const h=m.forwardRef(({options:e,onChange:t,selectedSegment:s,...n},o)=>{const c=m.useRef(null),d=re(c,e,s),p=a=>{const S=a.currentTarget.getAttribute("id")||"";t(S)};return e.length<=1||e.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):r.jsxs("div",{ref:a=>{c.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:l["segmented-control"],...n,children:[r.jsx("span",{className:l["segment-selected-indicator"],style:{left:d.left,width:d.width}}),e.map((a,u)=>r.jsx(V,{position:ee(u,e.length),onClick:p,isSelected:s===a.id,...a},`${a.id}-${u}`))]})});h.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ye={title:"SegmentedControl",component:h,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,s]=m.useState("option1"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[s,n,o]=X(t).getAllByRole("radio");E(s).toHaveAttribute("aria-checked","true"),await g.click(n),E(n).toHaveAttribute("aria-checked","true"),await g.click(o),E(o).toHaveAttribute("aria-checked","true"),await g.click(s),await g.tab(),await g.keyboard(k),E(n).toHaveFocus(),await g.keyboard($),E(n).toHaveAttribute("aria-checked","true"),await g.keyboard(Q),await g.keyboard(J),E(s).toHaveAttribute("aria-checked","true"),await g.keyboard(k),await g.keyboard(k),E(o).toHaveFocus()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,s]=m.useState("option1"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,s]=m.useState("agenda"),n=o=>{s(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}};var I,j,M;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
      width: "360px"
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
      width: "360px"
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
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(q=(W=_.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const be=["Default","TwoOptions","Icons"];export{b as Default,_ as Icons,w as TwoOptions,be as __namedExportsOrder,ye as default};
