import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{e as N,a as he,f as Se,T as fe}from"./keyboard-test.constants-By8W48aj.js";import{f as E,w as ye,e as f,u as m}from"./index-BfPN6pki.js";import{r as l}from"./index-G8LIXM5I.js";import{I as G,R as ve,T as be}from"./Icon-DjEid3Hw.js";import{u as Ee}from"./useSelectedIndicatorPosition-CdvuBLx5.js";import{s as Ce,B as we}from"./Badge-CQk6fGHb.js";import{S as B,E as M,T as P,a as D,A as L}from"./keyboard.constants-BverKK8B.js";import{u as xe}from"./useActiveKeyboard-DaOmFJe_.js";import{F as _e}from"./dom.constants-41SiyeDe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const Te=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",Oe=(e,t,a)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(a);)n<t.length-1?n++:n=0;t[n].focus()},ke=(e,t,a)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(a);)n>0?n--:n=t.length-1;t[n].focus()},Re=(e,t)=>{const a=e<t.length-1?e+1:0;t[a].focus()},Ae=(e,t)=>{const a=e>0?e-1:t.length-1;t[a].focus()},Ie=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},Ke=()=>{const[e,t]=l.useState([]);return l.useEffect(()=>{const a=()=>{t(Array.from(document.querySelectorAll(_e)))};a();const n=new MutationObserver(a);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},je="_segment_lhudv_1",g={"segmented-control":"_segmented-control_lhudv_1","segment-selected-indicator":"_segment-selected-indicator_lhudv_16","segment-container":"_segment-container_lhudv_28","segment-label":"_segment-label_lhudv_59",segment:je,"segment-content":"_segment-content_lhudv_65","selected-icon":"_selected-icon_lhudv_69"},He=e=>{l.useEffect(()=>{var h;const t=e.current;if(!t)return;let a="";const n=i=>{a=i.key};window.addEventListener("keydown",n);const s=()=>{var i,S;if(a==="Tab"){const c=(i=t.parentElement)==null?void 0:i.parentElement,y=c==null?void 0:c.querySelector("[data-selected='true']");y?y.focus():(S=Array.from((c==null?void 0:c.querySelectorAll("."+g.segment))??[])[0])==null||S.focus()}};return(h=e.current)==null||h.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},ce=({id:e,icon:t,label:a,position:n,isSelected:s,onClick:h,badgeCount:i,badgeContent:S,badgeIcon:c,badgeType:y,badgeSize:d,showBadge:v,appearance:R,isCompact:A,...ie})=>{const I=l.useRef(null),K=Ke();He(I);const de=r=>{var w,b;if(r.key===B||r.key===M)C==null||C(r);else if(r.key===D||r.key===L){const j=(b=(w=I.current)==null?void 0:w.parentElement)==null?void 0:b.parentElement,H=Array.from((j==null?void 0:j.querySelectorAll("."+g.segment))??[]),Y=H.findIndex(pe=>pe===document.activeElement);r.key===L?Re(Y,H):r.key===D&&Ae(Y,H)}},le=r=>{if(r.key===P){const w=document.activeElement,b=Array.from(K).indexOf(w);r.shiftKey?ke(b,K,g.segment):Oe(b,K,g.segment)}},{onBlur:ge,onKeyDown:me,onKeyUp:ue}=xe({onKeyUp:de,onKeyDown:le},{id:e,interactiveKeyCodes:[B,M,P,D,L]}),C=r=>{r.preventDefault(),r.stopPropagation(),h==null||h(r)};return o.jsx("div",{className:g["segment-container"],"data-position":n,...ie,"data-appearance":R,"data-compact-spacing":A,children:o.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":a,className:g.segment,"data-segment-type":t?"icon":"label","data-selected":s,"data-compact-spacing":A,onKeyDown:me,onKeyUp:ue,onBlur:ge,onClick:C,tabIndex:0,ref:I,children:[s&&o.jsx(G,{name:"check-small",appearance:"filled",size:24,className:g["selected-icon"]}),o.jsx("div",{className:g["segment-content"],children:t?o.jsx(G,{name:t,appearance:s?"filled":"outlined",size:A?20:24}):o.jsx("span",{className:g["segment-label"],children:a})}),Ce({showBadge:!!v,badgeContent:S,badgeCount:i,badgeIcon:c})&&o.jsx(we,{count:i,content:S,icon:c,badgeType:y,size:d})]})})};ce.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const u=l.forwardRef(({options:e,onChange:t,selectedSegment:a,appearance:n="brand",compactSpacing:s=!1,...h},i)=>{const S=l.useRef(null),c=Ee(S,a),y=d=>{const R=d.currentTarget.getAttribute("id")||"";t(R)};return Ie(e)?o.jsxs("div",{ref:d=>{S.current=d,typeof i=="function"?i(d):i&&(i.current=d)},role:"radiogroup",className:g["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,...h,children:[o.jsx("span",{className:g["segment-selected-indicator"],"data-compact-spacing":s,style:{left:c.left,top:c.top,width:c.width}}),e.map((d,v)=>o.jsx(ce,{position:Te(v,e.length),onClick:y,isSelected:a===d.id,appearance:n,isCompact:s,...d},`${d.id}-${v}`))]}):null});u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const Ne=Object.keys(ve),De=Object.keys(be),Qe={title:"Composants/SegmentedControl/SegmentedControl",component:u,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...Ne,...De].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},compactSpacing:{control:"boolean"}}},args:{onClick:E(),appearance:"brand"}},p={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:E(),appearance:"brand",compactSpacing:!1},render:e=>{const[t,a]=l.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=e,[a,n,s]=ye(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");f(a).toHaveAttribute("aria-checked","true"),await m.click(n),f(n).toHaveAttribute("aria-checked","true"),await m.click(s),f(s).toHaveAttribute("aria-checked","true"),await m.click(a),await m.tab(),await m.keyboard(N),f(n).toHaveFocus(),await m.keyboard(he),f(n).toHaveAttribute("aria-checked","true"),await m.keyboard(Se),await m.keyboard(fe),f(a).toHaveAttribute("aria-checked","true"),await m.keyboard(N),await m.keyboard(N),f(s).toHaveFocus()}},x={args:{...p.args},render:e=>{const[t,a]=l.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},_={args:{...p.args,compactSpacing:!0},render:e=>{const[t,a]=l.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},T={args:{...p.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:E()},render:e=>{const[t,a]=l.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},O={args:{...p.args,options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:E()},render:e=>{const[t,a]=l.useState("agenda"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},k={args:{...p.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:E()},render:e=>{const[t,a]=l.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"380px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}};var q,V,W;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,U,z;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var $,Q,J;_.parameters={..._.parameters,docs:{...($=_.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(Q=_.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,oe,re;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Je=["Default","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge"];export{x as Appearance,_ as CompactSpacing,p as Default,O as Icons,T as TwoOptions,k as WithBadge,Je as __namedExportsOrder,Qe as default};
