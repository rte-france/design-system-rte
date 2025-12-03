import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{e as x,a as $,f as Q,T as J}from"./keyboard-test.constants-C9whQEGR.js";import{f as T,w as X,e as f,u as d}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{u as Z}from"./useSelectedIndicatorPosition-DxJCQCZS.js";import{S as H,E as K,T as N,a as C,A}from"./keyboard.constants-ep-ZHn_7.js";import{u as ee}from"./useActiveKeyboard-BPEscCvd.js";import{F as te}from"./dom.constants-pEgPeCLJ.js";import{I}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ne=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",oe=(e,t,o)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(o);)n<t.length-1?n++:n=0;t[n].focus()},se=(e,t,o)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(o);)n>0?n--:n=t.length-1;t[n].focus()},ae=(e,t)=>{const o=e<t.length-1?e+1:0;t[o].focus()},re=(e,t)=>{const o=e>0?e-1:t.length-1;t[o].focus()},ie=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},ce=()=>{const[e,t]=u.useState([]);return u.useEffect(()=>{const o=()=>{t(Array.from(document.querySelectorAll(te)))};o();const n=new MutationObserver(o);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},le="_segment_ld8ff_3",c={"segmented-control":"_segmented-control_ld8ff_3","segment-selected-indicator":"_segment-selected-indicator_ld8ff_13","segment-container":"_segment-container_ld8ff_22",segment:le,"segment-content":"_segment-content_ld8ff_74","segment-label":"_segment-label_ld8ff_81","selected-icon":"_selected-icon_ld8ff_94"},de=e=>{u.useEffect(()=>{var m;const t=e.current;if(!t)return;let o="";const n=l=>{o=l.key};window.addEventListener("keydown",n);const s=()=>{var l,g;if(o==="Tab"){const a=(l=t.parentElement)==null?void 0:l.parentElement,p=a==null?void 0:a.querySelector("[data-selected='true']");p?p.focus():(g=Array.from((a==null?void 0:a.querySelectorAll("."+c.segment))??[])[0])==null||g.focus()}};return(m=e.current)==null||m.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},q=({id:e,icon:t,label:o,position:n,isSelected:s,onClick:m,...l})=>{const g=u.useRef(null),a=ce();de(g);const p=i=>{var y,h;if(i.key===H||i.key===K)S==null||S(i);else if(i.key===C||i.key===A){const R=(h=(y=g.current)==null?void 0:y.parentElement)==null?void 0:h.parentElement,k=Array.from((R==null?void 0:R.querySelectorAll("."+c.segment))??[]),O=k.findIndex(z=>z===document.activeElement);i.key===A?ae(O,k):i.key===C&&re(O,k)}},v=i=>{if(i.key===N){const y=document.activeElement,h=Array.from(a).indexOf(y);i.shiftKey?se(h,a,c.segment):oe(h,a,c.segment)}},{onBlur:F,onKeyDown:B,onKeyUp:U}=ee({onKeyUp:p,onKeyDown:v},{id:e,interactiveKeyCodes:[H,K,N,C,A]}),S=i=>{i.preventDefault(),i.stopPropagation(),m==null||m(i)};return r.jsx("div",{className:c["segment-container"],"data-position":n,...l,children:r.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":o,className:c.segment,"data-segment-type":t?"icon":"label","data-selected":s,onKeyDown:B,onKeyUp:U,onBlur:F,onClick:S,tabIndex:0,ref:g,children:[s&&r.jsx(I,{name:"check-small",appearance:"filled",size:24,className:c["selected-icon"]}),r.jsx("div",{className:c["segment-content"],children:t?r.jsx(I,{name:t,appearance:s?"filled":"outlined",size:24}):r.jsx("span",{className:c["segment-label"],children:o})})]})})};q.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const E=u.forwardRef(({options:e,onChange:t,selectedSegment:o,...n},s)=>{const m=u.useRef(null),l=Z(m,o),g=a=>{const v=a.currentTarget.getAttribute("id")||"";t(v)};return ie(e)?r.jsxs("div",{ref:a=>{m.current=a,typeof s=="function"?s(a):s&&(s.current=a)},role:"radiogroup",className:c["segmented-control"],...n,children:[r.jsx("span",{className:c["segment-selected-indicator"],style:{left:l.left,top:l.top,width:l.width}}),e.map((a,p)=>r.jsx(q,{position:ne(p,e.length),onClick:g,isSelected:o===a.id,...a},`${a.id}-${p}`))]}):null});E.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const we={title:"Composants/SegmentedControl/SegmentedControl",component:E,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:T()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:T()},render:e=>{const[t,o]=u.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[o,n,s]=X(t).getAllByRole("radio");f(o).toHaveAttribute("aria-checked","true"),await d.click(n),f(n).toHaveAttribute("aria-checked","true"),await d.click(s),f(s).toHaveAttribute("aria-checked","true"),await d.click(o),await d.tab(),await d.keyboard(x),f(n).toHaveFocus(),await d.keyboard($),f(n).toHaveAttribute("aria-checked","true"),await d.keyboard(Q),await d.keyboard(J),f(o).toHaveAttribute("aria-checked","true"),await d.keyboard(x),await d.keyboard(x),f(s).toHaveFocus()}},w={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:T()},render:e=>{const[t,o]=u.useState("option1"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:n,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:T()},render:e=>{const[t,o]=u.useState("agenda"),n=s=>{o(s)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(E,{options:e.options,onChange:n,selectedSegment:t})})}};var L,j,M;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var P,V,W;_.parameters={..._.parameters,docs:{...(P=_.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(V=_.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const _e=["Default","TwoOptions","Icons"];export{b as Default,_ as Icons,w as TwoOptions,_e as __namedExportsOrder,we as default};
