import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{e as N,a as he,f as Se,T as fe}from"./keyboard-test.constants-By8W48aj.js";import{w as ye,e as f,u,f as C}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{I as G,R as ve,T as be}from"./Icon-DgLH6pPJ.js";import{u as Ee}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as we,B as Ce}from"./Badge-DkJhvK8e.js";import{S as B,E as M,T as P,a as L,A as q}from"./keyboard.constants-BverKK8B.js";import{u as xe}from"./useActiveKeyboard-DaOmFJe_.js";import{F as _e}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";const Te=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",Oe=(e,t,a)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(a);)n<t.length-1?n++:n=0;t[n].focus()},Ae=(e,t,a)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(a);)n>0?n--:n=t.length-1;t[n].focus()},ke=(e,t)=>{const a=e<t.length-1?e+1:0;t[a].focus()},Re=(e,t)=>{const a=e>0?e-1:t.length-1;t[a].focus()},Ie=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},Ke=()=>{const[e,t]=i.useState([]);return i.useEffect(()=>{const a=()=>{t(Array.from(document.querySelectorAll(_e)))};a();const n=new MutationObserver(a);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},je="_segment_mqwnr_1",l={"segmented-control":"_segmented-control_mqwnr_1","segment-selected-indicator":"_segment-selected-indicator_mqwnr_17","segment-container":"_segment-container_mqwnr_32","segment-label":"_segment-label_mqwnr_62",segment:je,"segment-content":"_segment-content_mqwnr_68","selected-icon":"_selected-icon_mqwnr_72"},De=e=>{i.useEffect(()=>{var g;const t=e.current;if(!t)return;let a="";const n=h=>{a=h.key};window.addEventListener("keydown",n);const s=()=>{var h,m;if(a==="Tab"){const d=(h=t.parentElement)==null?void 0:h.parentElement,y=d==null?void 0:d.querySelector("[data-selected='true']");y?y.focus():(m=Array.from((d==null?void 0:d.querySelectorAll("."+l.segment))??[])[0])==null||m.focus()}};return(g=e.current)==null||g.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},ie=({id:e,icon:t,label:a,position:n,isSelected:s,onClick:g,badgeCount:h,badgeContent:m,badgeIcon:d,badgeType:y,badgeSize:x,showBadge:v,appearance:K,isCompact:r,...b})=>{const E=i.useRef(null),j=Ke();De(E);const de=c=>{var T,w;if(c.key===B||c.key===M)_==null||_(c);else if(c.key===L||c.key===q){const D=(w=(T=E.current)==null?void 0:T.parentElement)==null?void 0:w.parentElement,H=Array.from((D==null?void 0:D.querySelectorAll("."+l.segment))??[]),Y=H.findIndex(pe=>pe===document.activeElement);c.key===q?ke(Y,H):c.key===L&&Re(Y,H)}},le=c=>{if(c.key===P){const T=document.activeElement,w=Array.from(j).indexOf(T);c.shiftKey?Ae(w,j,l.segment):Oe(w,j,l.segment)}},{onBlur:ge,onKeyDown:me,onKeyUp:ue}=xe({onKeyUp:de,onKeyDown:le},{id:e,interactiveKeyCodes:[B,M,P,L,q]}),_=c=>{c.preventDefault(),c.stopPropagation(),g==null||g(c)};return o.jsx("div",{className:l["segment-container"],"data-position":n,...b,"data-appearance":K,"data-compact-spacing":r,children:o.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":a,className:l.segment,"data-segment-type":t?"icon":"label","data-selected":s,"data-compact-spacing":r,onKeyDown:me,onKeyUp:ue,onBlur:ge,onClick:_,tabIndex:0,ref:E,children:[s&&o.jsx(G,{name:"check-small",appearance:"filled",size:24,className:l["selected-icon"]}),o.jsx("div",{className:l["segment-content"],children:t?o.jsx(G,{name:t,appearance:s?"filled":"outlined",size:r?20:24}):o.jsx("span",{className:l["segment-label"],children:a})}),we({showBadge:!!v,badgeContent:m,badgeCount:h,badgeIcon:d})&&o.jsx(Ce,{count:h,content:m,icon:d,badgeType:y,size:x})]})})};ie.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const p=i.forwardRef(({options:e,onChange:t,selectedSegment:a,appearance:n="brand",compactSpacing:s=!1,disableInitialAnimation:g=!1,...h},m)=>{const d=i.useRef(null),[y,x]=i.useState(g),{indicatorStyle:v}=Ee(d,a);i.useEffect(()=>{if(!g)return;const r=requestAnimationFrame(()=>x(!1));return()=>cancelAnimationFrame(r)},[g]);const K=r=>{const E=r.currentTarget.getAttribute("id")||"";t(E)};return Ie(e)?o.jsxs("div",{ref:r=>{d.current=r,typeof m=="function"?m(r):m&&(m.current=r)},role:"radiogroup",className:l["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,...h,children:[o.jsx("span",{className:l["segment-selected-indicator"],"data-compact-spacing":s,"data-disable-initial-animation":y,style:{left:v.left,top:v.top,width:v.width}}),e.map((r,b)=>o.jsx(ie,{position:Te(b,e.length),onClick:K,isSelected:a===r.id,appearance:n,isCompact:s,...r},`${r.id}-${b}`))]}):null});p.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},disableInitialAnimation:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const He=Object.keys(ve),Ne=Object.keys(be),Je={title:"Composants/SegmentedControl/SegmentedControl",component:p,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...He,...Ne].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},compactSpacing:{control:"boolean"},disableInitialAnimation:{control:"boolean"}}},args:{onClick:C(),appearance:"brand"}},S={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:C(),appearance:"brand",compactSpacing:!1,disableInitialAnimation:!0},render:e=>{const[t,a]=i.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[a,n,s]=ye(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");f(a).toHaveAttribute("aria-checked","true"),await u.click(n),f(n).toHaveAttribute("aria-checked","true"),await u.click(s),f(s).toHaveAttribute("aria-checked","true"),await u.click(a),await u.tab(),await u.keyboard(N),f(n).toHaveFocus(),await u.keyboard(he),f(n).toHaveAttribute("aria-checked","true"),await u.keyboard(Se),await u.keyboard(fe),f(a).toHaveAttribute("aria-checked","true"),await u.keyboard(N),await u.keyboard(N),f(s).toHaveFocus()}},O={args:{...S.args},render:e=>{const[t,a]=i.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(p,{...e,onChange:n,selectedSegment:t}),o.jsx(p,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},A={args:{...S.args,compactSpacing:!0},render:e=>{const[t,a]=i.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(p,{...e,onChange:n,selectedSegment:t}),o.jsx(p,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},k={args:{...S.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:C()},render:e=>{const[t,a]=i.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}},R={args:{...S.args,options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:C()},render:e=>{const[t,a]=i.useState("agenda"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}},I={args:{...S.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:C()},render:e=>{const[t,a]=i.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"380px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}};var V,W,F;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
    onChange: fn(),
    appearance: "brand",
    compactSpacing: false,
    disableInitialAnimation: true
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }} data-testid="segmented-control-story">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
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
}`,...(F=(W=S.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var U,z,$;O.parameters={...O.parameters,docs:{...(U=O.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px",
      display: "flex",
      gap: "20px",
      flexDirection: "column"
    }} data-testid="segmented-control-story">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} appearance="neutral" />
      </div>;
  }
}`,...($=(z=O.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var Q,J,X;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px",
      display: "flex",
      gap: "20px",
      flexDirection: "column"
    }} data-testid="segmented-control-story">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} appearance="neutral" />
      </div>;
  }
}`,...(X=(J=A.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;R.parameters={...R.parameters,docs:{...(ne=R.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(se=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,re,ce;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(ce=(re=I.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const Xe=["Default","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge"];export{O as Appearance,A as CompactSpacing,S as Default,R as Icons,k as TwoOptions,I as WithBadge,Xe as __namedExportsOrder,Je as default};
