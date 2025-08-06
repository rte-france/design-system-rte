import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as R,a as $,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as w,w as X,e as p,u as l}from"./index-DaW6VCyr.js";import{r as m}from"./index-G8LIXM5I.js";import{S as O,E as H,T as N,a as k,A}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I as K}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te="_segment_21860_3",d={"segmented-control":"_segmented-control_21860_3","segment-selected-indicator":"_segment-selected-indicator_21860_14","segment-container":"_segment-container_21860_23",segment:te,"segment-content":"_segment-content_21860_75","segment-label":"_segment-label_21860_82","selected-icon":"_selected-icon_21860_95"},ne=(e,t,n)=>{const[s,o]=m.useState({left:0,width:0});return m.useEffect(()=>{function c(){if(!e.current)return;const u=t.findIndex(g=>g.id===n);if(u===-1)return;const a=e.current.querySelectorAll(`.${d.segment}`)[u];a&&o({left:a.offsetLeft,width:a.offsetWidth})}return c(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}},[n,t,e]),s},se=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],oe=se.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),ae=()=>{const[e,t]=m.useState([]);return m.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(oe)))};n();const s=new MutationObserver(n);return s.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>s.disconnect()},[]),e},re=(e,t)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(d.segment);)n<t.length-1?n++:n=0;t[n].focus()},ie=(e,t)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(d.segment);)n>0?n--:n=t.length-1;t[n].focus()},ce=(e,t)=>{const n=e<t.length-1?e+1:0;t[n].focus()},de=(e,t)=>{const n=e>0?e-1:t.length-1;t[n].focus()},V=({id:e,icon:t,iconAppearance:n,label:s,position:o,selected:c,onClick:u,...S})=>{const a=m.useRef(null),g=ae(),T=i=>{var v;if(i.stopPropagation(),i.key===O||i.key===H)f==null||f(i);else if(i.key===k||i.key===A){const h=(v=a.current)==null?void 0:v.parentElement,x=Array.from((h==null?void 0:h.querySelectorAll("."+d.segment))??[]),C=x.findIndex(z=>z===document.activeElement);i.key===A?ce(C,x):i.key===k&&de(C,x)}},q=i=>{if(i.key===N){const v=document.activeElement,h=Array.from(g).indexOf(v);i.shiftKey?ie(h,g):re(h,g)}},{onBlur:B,onKeyDown:U,onKeyUp:F}=Z({onKeyUp:T,onKeyDown:q},{id:e,interactiveKeyCodes:[O,H,N,k,A]}),f=i=>{i.stopPropagation(),u==null||u(i)};return r.jsx("div",{ref:a,className:d["segment-container"],"data-position":o,...S,children:r.jsxs("div",{id:e,role:"radio","aria-checked":c,"aria-label":s,className:d.segment,"data-segment-type":t?"icon":"label","data-selected":c,onKeyDown:U,onKeyUp:F,onBlur:B,onClick:f,tabIndex:0,ref:a,children:[c&&r.jsx(K,{name:"check-small",appearance:"filled",size:24,className:d["selected-icon"]}),r.jsx("div",{className:d["segment-content"],children:t?r.jsx(K,{name:t,appearance:n??c?"filled":"outlined",size:24}):r.jsx("span",{className:d["segment-label"],children:s})})]})})};V.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},parentRef:{required:!1,tsType:{name:"MutableRefObject",elements:[{name:"union",raw:"HTMLDivElement | null",elements:[{name:"HTMLDivElement"},{name:"null"}]}],raw:"MutableRefObject<HTMLDivElement | null>"},description:""}},composes:["CoreSegmentProps","Omit"]};const E=m.forwardRef(({options:e,onChange:t,selectedSegment:n,...s},o)=>{const c=m.useRef(null),u=ne(c,e,n),S=a=>{a.stopPropagation();const T=a.currentTarget.getAttribute("id")||"";t(T)};return e.length<=1||e.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):r.jsxs("div",{ref:a=>{c.current=a,typeof o=="function"?o(a):o&&(o.current=a)},role:"radiogroup",className:d["segmented-control"],...s,children:[r.jsx("span",{className:d["segment-selected-indicator"],style:{left:u.left,width:u.width}}),e.map((a,g)=>r.jsx(V,{position:ee(g,e.length),onClick:S,selected:n===a.id,...a},`${a.id}-${g}`))]})});E.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ve={title:"SegmentedControl",component:E,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:w()}},y={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:w()},render:e=>{const[t,n]=m.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[n,s,o]=X(t).getAllByRole("radio");p(n).toHaveAttribute("aria-checked","true"),await l.click(s),p(s).toHaveAttribute("aria-checked","true"),await l.click(o),p(o).toHaveAttribute("aria-checked","true"),await l.click(n),await l.tab(),await l.keyboard(R),p(s).toHaveFocus(),await l.keyboard($),p(s).toHaveAttribute("aria-checked","true"),await l.keyboard(Q),await l.keyboard(J),p(n).toHaveAttribute("aria-checked","true"),await l.keyboard(R),await l.keyboard(R),p(o).toHaveFocus()}},b={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:w()},render:e=>{const[t,n]=m.useState("option1"),s=o=>{n(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})}},_={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:w()},render:e=>{const[t,n]=m.useState("agenda"),s=o=>{n(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(E,{options:e.options,onChange:s,selectedSegment:t})})}};var I,L,j;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(j=(L=y.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var M,D,Y;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(Y=(D=b.parameters)==null?void 0:D.docs)==null?void 0:Y.source}}};var G,P,W;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(W=(P=_.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const ye=["Default","TwoOptions","Icons"];export{y as Default,_ as Icons,b as TwoOptions,ye as __namedExportsOrder,ve as default};
