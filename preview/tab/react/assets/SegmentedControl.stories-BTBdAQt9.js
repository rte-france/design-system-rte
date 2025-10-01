import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as C,a as $,c as Q,T as J}from"./keyboard-test.constants-BHMvM5a0.js";import{f as T,w as X,e as f,u as d}from"./index-DaW6VCyr.js";import{r as u}from"./index-G8LIXM5I.js";import{u as Z}from"./useSelectedIndicatorPosition-BrierSvw.js";import{S as H,E as K,T as N,a as k,A}from"./keyboard.constants-YQ0IdItO.js";import{u as ee}from"./useActiveKeyboard-CyCI8mio.js";import{I as L}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const te=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",ne=(e,t,o)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(o);)n<t.length-1?n++:n=0;t[n].focus()},oe=(e,t,o)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(o);)n>0?n--:n=t.length-1;t[n].focus()},se=(e,t)=>{const o=e<t.length-1?e+1:0;t[o].focus()},ae=(e,t)=>{const o=e>0?e-1:t.length-1;t[o].focus()},re=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},ie=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ce=ie.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),le=()=>{const[e,t]=u.useState([]);return u.useEffect(()=>{const o=()=>{t(Array.from(document.querySelectorAll(ce)))};o();const n=new MutationObserver(o);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},de="_segment_ld8ff_3",c={"segmented-control":"_segmented-control_ld8ff_3","segment-selected-indicator":"_segment-selected-indicator_ld8ff_13","segment-container":"_segment-container_ld8ff_22",segment:de,"segment-content":"_segment-content_ld8ff_74","segment-label":"_segment-label_ld8ff_81","selected-icon":"_selected-icon_ld8ff_94"},me=e=>{u.useEffect(()=>{var m;const t=e.current;if(!t)return;let o="";const n=l=>{o=l.key};window.addEventListener("keydown",n);const s=()=>{var l,g;if(o==="Tab"){const a=(l=t.parentElement)==null?void 0:l.parentElement,p=a==null?void 0:a.querySelector("[data-selected='true']");p?p.focus():(g=Array.from((a==null?void 0:a.querySelectorAll("."+c.segment))??[])[0])==null||g.focus()}};return(m=e.current)==null||m.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},q=({id:e,icon:t,label:o,position:n,isSelected:s,onClick:m,...l})=>{const g=u.useRef(null),a=le();me(g);const p=i=>{var y,E;if(i.key===H||i.key===K)S==null||S(i);else if(i.key===k||i.key===A){const R=(E=(y=g.current)==null?void 0:y.parentElement)==null?void 0:E.parentElement,x=Array.from((R==null?void 0:R.querySelectorAll("."+c.segment))??[]),O=x.findIndex(z=>z===document.activeElement);i.key===A?se(O,x):i.key===k&&ae(O,x)}},v=i=>{if(i.key===N){const y=document.activeElement,E=Array.from(a).indexOf(y);i.shiftKey?oe(E,a,c.segment):ne(E,a,c.segment)}},{onBlur:B,onKeyDown:F,onKeyUp:U}=ee({onKeyUp:p,onKeyDown:v},{id:e,interactiveKeyCodes:[H,K,N,k,A]}),S=i=>{i.preventDefault(),i.stopPropagation(),m==null||m(i)};return r.jsx("div",{className:c["segment-container"],"data-position":n,...l,children:r.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":o,className:c.segment,"data-segment-type":t?"icon":"label","data-selected":s,onKeyDown:F,onKeyUp:U,onBlur:B,onClick:S,tabIndex:0,ref:g,children:[s&&r.jsx(L,{name:"check-small",appearance:"filled",size:24,className:c["selected-icon"]}),r.jsx("div",{className:c["segment-content"],children:t?r.jsx(L,{name:t,appearance:s?"filled":"outlined",size:24}):r.jsx("span",{className:c["segment-label"],children:o})})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const h=u.forwardRef(({options:e,onChange:t,selectedSegment:o,...n},s)=>{const m=u.useRef(null),l=Z(m,o),g=a=>{const v=a.currentTarget.getAttribute("id")||"";t(v)};return re(e)?r.jsxs("div",{ref:a=>{m.current=a,typeof s=="function"?s(a):s&&(s.current=a)},role:"radiogroup",className:c["segmented-control"],...n,children:[r.jsx("span",{className:c["segment-selected-indicator"],style:{left:l.left,top:l.top,width:l.width}}),e.map((a,p)=>r.jsx(q,{position:te(p,e.length),onClick:g,isSelected:o===a.id,...a},`${a.id}-${p}`))]}):null});h.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const _e={title:"Composants/SegmentedControl/SegmentedControl",component:h,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,o]=u.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[o,n,s]=X(t).getAllByRole("radio");f(o).toHaveAttribute("aria-checked","true"),await d.click(n),f(n).toHaveAttribute("aria-checked","true"),await d.click(s),f(s).toHaveAttribute("aria-checked","true"),await d.click(o),await d.tab(),await d.keyboard(C),f(n).toHaveFocus(),await d.keyboard($),f(n).toHaveAttribute("aria-checked","true"),await d.keyboard(Q),await d.keyboard(J),f(o).toHaveAttribute("aria-checked","true"),await d.keyboard(C),await d.keyboard(C),f(s).toHaveFocus()}},_={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,o]=u.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}},w={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,o]=u.useState("agenda"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(h,{options:e.options,onChange:n,selectedSegment:t})})}};var I,j,M;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(j=b.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var D,Y,G;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(G=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,V,W;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(V=w.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const we=["Default","TwoOptions","Icons"];export{b as Default,w as Icons,_ as TwoOptions,we as __namedExportsOrder,_e as default};
