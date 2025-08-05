import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{b as R,a as M,c as Q,T as J}from"./keyboard-test.constants-DGN90FCQ.js";import{f as k,w as X,e as f,u as l}from"./index-DaW6VCyr.js";import{r as d}from"./index-G8LIXM5I.js";import{S as j,E as H,T as Y,a as K,A as I}from"./keyboard.constants-Mj_rJc9R.js";import{u as Z}from"./useActiveKeyboard-DyE734RX.js";import{I as G}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ee=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",te=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ne=te.map(e=>e+":not([disabled]):not([aria-hidden])").join(","),oe=()=>{const[e,t]=d.useState([]);return d.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(ne)))};n();const s=new MutationObserver(n);return s.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>s.disconnect()},[]),e},se="_segment_ithdc_3",c={"segmented-control":"_segmented-control_ithdc_3","segment-slider":"_segment-slider_ithdc_11","segment-container":"_segment-container_ithdc_20",segment:se,"segment-content":"_segment-content_ithdc_75","segment-label":"_segment-label_ithdc_82","selected-icon":"_selected-icon_ithdc_95"},ae=(e,t)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(c.segment);)n<t.length-1?n++:n=0;t[n].focus()},re=(e,t)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(c.segment);)n>0?n--:n=t.length-1;t[n].focus()},ie=(e,t)=>{const n=e<t.length-1?e+1:0;t[n].focus()},ce=(e,t)=>{const n=e>0?e-1:t.length-1;t[n].focus()},v=d.forwardRef(({options:e,onChange:t,selectedSegment:n,...s},r)=>{const u=d.useRef(null),[S,C]=d.useState({left:0,width:0}),g=a=>{a.stopPropagation();const _=a.currentTarget.getAttribute("id")||"";t(_)};return d.useEffect(()=>{function a(){if(!u.current)return;const m=e.findIndex(O=>O.id===n);if(m===-1)return;const y=u.current.querySelectorAll(`.${c.segment}`)[m];y&&C({left:y.offsetLeft,width:y.offsetWidth})}return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[n,e]),e.length<=1||e.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):i.jsxs("div",{ref:a=>{u.current=a,typeof r=="function"?r(a):r&&(r.current=a)},role:"radiogroup",className:c["segmented-control"],...s,children:[i.jsx("span",{className:c["segment-slider"],style:{left:S.left,width:S.width}}),e.map((a,m)=>i.jsx(de,{position:ee(m,e.length),onClick:g,selected:n===a.id,...a},`${a.id}-${m}`))]})}),de=({id:e,icon:t,iconAppearance:n,label:s,position:r,selected:u,onClick:S,...C})=>{const g=d.useRef(null),a=oe();d.useEffect(()=>{const o=g&&"current"in g?g.current:null,p=h=>{if(h.target===(o==null?void 0:o.childNodes[0])&&o!=null&&o.childNodes[0]&&o.childNodes[0].getAttribute("data-selected")!=="true"){const E=Array.from(document.querySelectorAll(`.${c.segment}`)).find(w=>w.getAttribute("data-selected")==="true");E&&E.focus()}};return o&&o.addEventListener("focus",p),()=>{o&&o.removeEventListener("focus",p)}},[g,e]);const m=o=>{var p,h,N;if(o.stopPropagation(),o.key===j||o.key===H)b==null||b(o);else if(o.key===K||o.key===I){const E=Array.from(((N=(h=(p=document.activeElement)==null?void 0:p.parentElement)==null?void 0:h.parentElement)==null?void 0:N.querySelectorAll("."+c.segment))??[]),w=E.findIndex($=>$===document.activeElement);o.key===I?ie(w,E):o.key===K&&ce(w,E)}},_=o=>{if(o.key===Y){const p=document.activeElement,h=Array.from(a).indexOf(p);o.shiftKey?re(h,a):ae(h,a)}},{onBlur:y,onKeyDown:O,onKeyUp:z}=Z({onKeyUp:m,onKeyDown:_},{id:e,interactiveKeyCodes:[j,H,Y,K,I]}),b=o=>{o.stopPropagation(),S==null||S(o)};return i.jsx("div",{ref:g,className:c["segment-container"],"data-position":r,...C,children:i.jsxs("div",{id:e,role:"radio","aria-checked":u,"aria-label":s,className:c.segment,"data-segment-type":t?"icon":"label","data-selected":u,onKeyDown:O,onKeyUp:z,onBlur:y,onClick:b,tabIndex:0,ref:g,children:[u&&i.jsx(G,{name:"check-small",appearance:"filled",size:24,className:c["selected-icon"]}),i.jsx("div",{className:c["segment-content"],children:t?i.jsx(G,{name:t,appearance:n??u?"filled":"outlined",size:24}):i.jsx("span",{className:c["segment-label"],children:s})})]})})};v.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const ye={title:"SegmentedControl",component:v,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:k()}},x={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:k()},render:e=>{const[t,n]=d.useState("option1"),s=r=>{n(r)};return i.jsx("div",{style:{width:"400px"},children:i.jsx(v,{options:e.options,onChange:s,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[n,s,r]=X(t).getAllByRole("radio");f(n).toHaveAttribute("aria-checked","true"),await l.click(s),f(s).toHaveAttribute("aria-checked","true"),await l.click(r),f(r).toHaveAttribute("aria-checked","true"),await l.click(n),await l.tab(),await l.keyboard(R),f(s).toHaveFocus(),await l.keyboard(M),f(s).toHaveAttribute("aria-checked","true"),await l.keyboard(Q),await l.keyboard(J),f(n).toHaveAttribute("aria-checked","true"),await l.keyboard(R),await l.keyboard(R),f(r).toHaveFocus()}},T={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:k()},render:e=>{const[t,n]=d.useState("option1"),s=r=>{n(r)};return i.jsx("div",{style:{width:"400px"},children:i.jsx(v,{options:e.options,onChange:s,selectedSegment:t})})}},A={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:k()},render:e=>{const[t,n]=d.useState("agenda"),s=r=>{n(r)};return i.jsx("div",{style:{width:"400px"},children:i.jsx(v,{options:e.options,onChange:s,selectedSegment:t})})}};var L,P,W;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
      width: "400px"
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
}`,...(W=(P=x.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var F,V,B;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      width: "400px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(B=(V=T.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var U,q,D;A.parameters={...A.parameters,docs:{...(U=A.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
      width: "400px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(D=(q=A.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const ve=["Default","TwoOptions","Icons"];export{x as Default,A as Icons,T as TwoOptions,ve as __namedExportsOrder,ye as default};
