import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{e as N,a as he,f as Se,T as fe}from"./keyboard-test.constants-By8W48aj.js";import{w as ye,e as y,u as m,f as C}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{I as B,R as ve,T as be}from"./Icon-DgLH6pPJ.js";import{u as Ee}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as Ce,B as we}from"./Badge-DkJhvK8e.js";import{S as M,E as q,T as z,a as L,A as Y}from"./keyboard.constants-BverKK8B.js";import{u as xe}from"./useActiveKeyboard-DaOmFJe_.js";import{F as _e}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";const Te=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",Oe=(e,t,a)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(a);)n<t.length-1?n++:n=0;t[n].focus()},Ae=(e,t,a)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(a);)n>0?n--:n=t.length-1;t[n].focus()},ke=(e,t)=>{const a=e<t.length-1?e+1:0;t[a].focus()},Re=(e,t)=>{const a=e>0?e-1:t.length-1;t[a].focus()},Ie=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},Ke=()=>{const[e,t]=c.useState([]);return c.useEffect(()=>{const a=()=>{t(Array.from(document.querySelectorAll(_e)))};a();const n=new MutationObserver(a);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},je="_segment_10gvz_1",g={"segmented-control":"_segmented-control_10gvz_1","segment-selected-indicator":"_segment-selected-indicator_10gvz_17","segment-container":"_segment-container_10gvz_32","segment-label":"_segment-label_10gvz_62",segment:je,"segment-content":"_segment-content_10gvz_68","selected-icon":"_selected-icon_10gvz_72"},De=e=>{c.useEffect(()=>{var h;const t=e.current;if(!t)return;let a="";const n=d=>{a=d.key};window.addEventListener("keydown",n);const s=()=>{var d,S;if(a==="Tab"){const l=(d=t.parentElement)==null?void 0:d.parentElement,v=l==null?void 0:l.querySelector("[data-selected='true']");v?v.focus():(S=Array.from((l==null?void 0:l.querySelectorAll("."+g.segment))??[])[0])==null||S.focus()}};return(h=e.current)==null||h.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},ie=({id:e,icon:t,label:a,position:n,isSelected:s,onClick:h,badgeCount:d,badgeContent:S,badgeIcon:l,badgeType:v,badgeSize:b,showBadge:R,appearance:i,isCompact:f,...I})=>{const K=c.useRef(null),j=Ke();De(K);const de=r=>{var x,E;if(r.key===M||r.key===q)w==null||w(r);else if(r.key===L||r.key===Y){const D=(E=(x=K.current)==null?void 0:x.parentElement)==null?void 0:E.parentElement,H=Array.from((D==null?void 0:D.querySelectorAll("."+g.segment))??[]),G=H.findIndex(pe=>pe===document.activeElement);r.key===Y?ke(G,H):r.key===L&&Re(G,H)}},le=r=>{if(r.key===z){const x=document.activeElement,E=Array.from(j).indexOf(x);r.shiftKey?Ae(E,j,g.segment):Oe(E,j,g.segment)}},{onBlur:ge,onKeyDown:me,onKeyUp:ue}=xe({onKeyUp:de,onKeyDown:le},{id:e,interactiveKeyCodes:[M,q,z,L,Y]}),w=r=>{r.preventDefault(),r.stopPropagation(),h==null||h(r)};return o.jsx("div",{className:g["segment-container"],"data-position":n,...I,"data-appearance":i,"data-compact-spacing":f,children:o.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":a,className:g.segment,"data-segment-type":t?"icon":"label","data-selected":s,"data-compact-spacing":f,onKeyDown:me,onKeyUp:ue,onBlur:ge,onClick:w,tabIndex:0,ref:K,children:[s&&o.jsx(B,{name:"check-small",appearance:"filled",size:24,className:g["selected-icon"]}),o.jsx("div",{className:g["segment-content"],children:t?o.jsx(B,{name:t,appearance:s?"filled":"outlined",size:f?20:24}):o.jsx("span",{className:g["segment-label"],children:a})}),Ce({showBadge:!!R,badgeContent:S,badgeCount:d,badgeIcon:l})&&o.jsx(we,{count:d,content:S,icon:l,badgeType:v,size:b})]})})};ie.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const u=c.forwardRef(({options:e,onChange:t,selectedSegment:a,appearance:n="brand",compactSpacing:s=!1,...h},d)=>{const S=c.useRef(null),[l,v]=c.useState(!0),{indicatorStyle:b}=Ee(S,a);c.useEffect(()=>{const i=requestAnimationFrame(()=>v(!1));return()=>cancelAnimationFrame(i)},[]);const R=i=>{const I=i.currentTarget.getAttribute("id")||"";t(I)};return Ie(e)?o.jsxs("div",{ref:i=>{S.current=i,typeof d=="function"?d(i):d&&(d.current=i)},role:"radiogroup",className:g["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,...h,children:[o.jsx("span",{className:g["segment-selected-indicator"],"data-compact-spacing":s,"data-initial-animation-disabled":l,style:{left:b.left,top:b.top,width:b.width}}),e.map((i,f)=>o.jsx(ie,{position:Te(f,e.length),onClick:R,isSelected:a===i.id,appearance:n,isCompact:s,...i},`${i.id}-${f}`))]}):null});u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const He=Object.keys(ve),Ne=Object.keys(be),Je={title:"Composants/SegmentedControl/SegmentedControl",component:u,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...He,...Ne].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},compactSpacing:{control:"boolean"}}},args:{onClick:C(),appearance:"brand"}},p={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:C(),appearance:"brand",compactSpacing:!1},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[a,n,s]=ye(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");y(a).toHaveAttribute("aria-checked","true"),await m.click(n),y(n).toHaveAttribute("aria-checked","true"),await m.click(s),y(s).toHaveAttribute("aria-checked","true"),await m.click(a),await m.tab(),await m.keyboard(N),y(n).toHaveFocus(),await m.keyboard(he),y(n).toHaveAttribute("aria-checked","true"),await m.keyboard(Se),await m.keyboard(fe),y(a).toHaveAttribute("aria-checked","true"),await m.keyboard(N),await m.keyboard(N),y(s).toHaveFocus()}},_={args:{...p.args},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},T={args:{...p.args,compactSpacing:!0},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},O={args:{...p.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:C()},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},A={args:{...p.args,options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:C()},render:e=>{const[t,a]=c.useState("agenda"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},k={args:{...p.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:C()},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"380px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}};var P,V,W;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
    compactSpacing: false
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
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,U,$;_.parameters={..._.parameters,docs:{...(F=_.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(U=_.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};var Q,J,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(J=T.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;O.parameters={...O.parameters,docs:{...(Z=O.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=O.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,re,ce;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};const Xe=["Default","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge"];export{_ as Appearance,T as CompactSpacing,p as Default,A as Icons,O as TwoOptions,k as WithBadge,Xe as __namedExportsOrder,Je as default};
