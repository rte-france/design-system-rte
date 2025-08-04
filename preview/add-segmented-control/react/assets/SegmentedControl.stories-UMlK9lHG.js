import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as R,a as V,c as J,T as X}from"./keyboard-test.constants-DGN90FCQ.js";import{f as F,w as Z,e as E,u as h}from"./index-DaW6VCyr.js";import{r as b}from"./index-G8LIXM5I.js";import{S as K,E as j,T as Y,a as H,A as G}from"./keyboard.constants-Mj_rJc9R.js";import{u as ee}from"./useActiveKeyboard-CA2XRjTO.js";import{I as P}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const te=["button","a[href]","input","select","textarea","details",'[tabindex]:not([tabindex="-1"])'],ne=te.map(n=>n+":not([disabled]):not([aria-hidden])").join(","),se="_segment_ithdc_3",u={"segmented-control":"_segmented-control_ithdc_3","segment-slider":"_segment-slider_ithdc_11","segment-container":"_segment-container_ithdc_20",segment:se,"segment-content":"_segment-content_ithdc_75","segment-label":"_segment-label_ithdc_82","selected-icon":"_selected-icon_ithdc_95"},C=b.forwardRef(({options:n,onChange:a,selectedSegment:i,...l},o)=>{const c=b.useRef(null),[m,p]=b.useState({left:0,width:0}),N=(t,g)=>g===2?t===0?"left":"right":t===0?"left":t===g-1?"right":"middle",f=t=>{t.stopPropagation();const v=t.currentTarget.getAttribute("id")||"";a(v)};return b.useEffect(()=>{function t(){if(!c.current)return;const g=n.findIndex(k=>k.id===i);if(g===-1)return;const _=c.current.querySelectorAll(`.${u.segment}`)[g];_&&p({left:_.offsetLeft,width:_.offsetWidth})}return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[i,n]),n.length<=1||n.length>3?(console.warn("SegmentedControl: 'options' should have 2 or 3 items."),null):n.some(t=>t.icon&&t.label)?(console.warn("SegmentedControl: Each option must have either 'icon' or 'label', not both."),null):r.jsxs("div",{ref:t=>{c.current=t,typeof o=="function"?o(t):o&&(o.current=t)},role:"radiogroup",className:u["segmented-control"],...l,children:[r.jsx("span",{className:u["segment-slider"],style:{left:m.left,width:m.width}}),n.map((t,g)=>r.jsx(ae,{position:N(g,n.length),onClick:f,selected:i===t.id,parentRef:c||o,...t},`${t.id}-${g}`))]})}),ae=({id:n,icon:a,iconAppearance:i,label:l,position:o,selected:c,onClick:m,parentRef:p,...N})=>{const f=b.useRef(null);b.useEffect(()=>{const e=f&&"current"in f?f.current:null,d=y=>{if(y.target===(e==null?void 0:e.childNodes[0])&&e!=null&&e.childNodes[0]&&e.childNodes[0].getAttribute("data-selected")!=="true"){const s=Array.from(document.querySelectorAll(`.${u.segment}`)).find(x=>x.getAttribute("data-selected")==="true");s&&s.focus()}};return e&&e.addEventListener("focus",d),()=>{e&&e.removeEventListener("focus",d)}},[f,n]);const t=e=>{var d,y;if(e.key===K||e.key===j)e.stopPropagation(),w==null||w(e);else if(e.key===H||e.key===G){e.stopPropagation();const S=(d=p==null?void 0:p.current)==null?void 0:d.querySelectorAll(`.${u["segment-container"]}`);if(S){const s=(y=document.activeElement)==null?void 0:y.parentElement,x=s!=null?Array.from(S).indexOf(s):-1,O=e.key===H?x-1:x+1;if(S[O]){const L=S[O].firstChild;L==null||L.focus()}}}},g=e=>{if(e.key===Y){e.stopPropagation();const d=document.querySelectorAll(ne)||[],y=document.activeElement,S=Array.from(d).indexOf(y);if(e.shiftKey){let s=S-1;for(;s>0&&d[s].classList.contains(u.segment);)s--;s>0&&d[s].focus()}else{let s=S+1;for(;s<d.length&&d[s].classList.contains(u.segment);)s++;s<d.length&&d[s].focus()}}},{onBlur:v,onKeyDown:_,onKeyUp:k}=ee({onKeyUp:t,onKeyDown:g},{id:n,interactiveKeyCodes:[K,j,Y,H,G]}),w=e=>{e.stopPropagation(),m==null||m(e)};return r.jsx("div",{ref:f,className:u["segment-container"],"data-position":o,...N,children:r.jsxs("div",{id:n,role:"radio","aria-checked":c,"aria-label":l||a,className:u.segment,"data-segment-type":a?"icon":"label","data-selected":c,onKeyDown:_,onKeyUp:k,onBlur:v,onClick:w,tabIndex:0,ref:f,children:[c&&r.jsx(P,{name:"check-small",appearance:"filled",size:24,className:u["selected-icon"]}),r.jsxs("div",{className:u["segment-content"],children:[a&&r.jsx(P,{name:a,appearance:i??c?"filled":"outlined",size:24}),!a&&l&&r.jsx("span",{className:u["segment-label"],children:l})]})]})})};C.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentedControlProps","Omit"]};const he={title:"SegmentedControl",component:C,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:F()}},T={args:{options:[{id:"label-1",label:"Label 1"},{id:"label-2",label:"Label 2"},{id:"label-3",label:"Label 3"}],onChange:F()},render:n=>{const[a,i]=b.useState("label-1"),l=o=>{i(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(C,{options:n.options,onChange:l,selectedSegment:a})})},play:async({canvasElement:n})=>{const a=n,[i,l,o]=Z(a).getAllByRole("radio"),c=i.firstChild,m=l.firstChild,p=o.firstChild;E(c).toHaveAttribute("aria-selected","true"),await h.click(m),E(m).toHaveAttribute("aria-selected","true"),await h.click(p),E(p).toHaveAttribute("aria-selected","true"),await h.click(c),await h.tab(),await h.keyboard(R),E(m).toHaveFocus(),await h.keyboard(V),E(m).toHaveAttribute("aria-selected","true"),await h.keyboard(J),await h.keyboard(X),E(c).toHaveAttribute("aria-selected","true"),await h.keyboard(R),await h.keyboard(R),E(p).toHaveFocus()}},A={args:{options:[{id:"label-1",label:"Label 1"},{id:"label-2",label:"Label 2"}],onChange:F()},render:n=>{const[a,i]=b.useState("label-1"),l=o=>{i(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(C,{options:n.options,onChange:l,selectedSegment:a})})}},I={args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column"},{id:"grid",icon:"view-grid"}],onChange:F()},render:n=>{const[a,i]=b.useState("agenda"),l=o=>{i(o)};return r.jsx("div",{style:{width:"360px"},children:r.jsx(C,{options:n.options,onChange:l,selectedSegment:a})})}};var W,B,q;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "label-1",
      label: "Label 1"
    }, {
      id: "label-2",
      label: "Label 2"
    }, {
      id: "label-3",
      label: "Label 3"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
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
    const [firstSegments, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");
    const firstSegmentFocusableChild = firstSegments.firstChild as HTMLElement;
    const secondSegmentFocusableChild = secondSegment.firstChild as HTMLElement;
    const thirdSegmentFocusableChild = thirdSegment.firstChild as HTMLElement;
    expect(firstSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.click(secondSegmentFocusableChild);
    expect(secondSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.click(thirdSegmentFocusableChild);
    expect(thirdSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.click(firstSegmentFocusableChild);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegmentFocusableChild).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegmentFocusableChild).toHaveAttribute("aria-selected", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegmentFocusableChild).toHaveFocus();
  }
}`,...(q=(B=T.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var D,M,U;A.parameters={...A.parameters,docs:{...(D=A.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "label-1",
      label: "Label 1"
    }, {
      id: "label-2",
      label: "Label 2"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("label-1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "360px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(U=(M=A.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,z,Q;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "agenda",
      icon: "view-agenda"
    }, {
      id: "column",
      icon: "view-column"
    }, {
      id: "grid",
      icon: "view-grid"
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
}`,...(Q=(z=I.parameters)==null?void 0:z.docs)==null?void 0:Q.source}}};const pe=["Default","TwoItems","Icons"];export{T as Default,I as Icons,A as TwoItems,pe as __namedExportsOrder,he as default};
