import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{e as Y,a as Te,f as Ce,T as we}from"./keyboard-test.constants-By8W48aj.js";import{f as E,w as _e,e as y,u as p}from"./index-4rjIhT2C.js";import{r}from"./index-G8LIXM5I.js";import{I as q,R as Oe,T as ke}from"./Icon-VewZnR13.js";import{u as Ae}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as Re,B as Ie}from"./Badge-BP1JXoFH.js";import{S as P,E as V,T as W,a as G,A as B}from"./keyboard.constants-BverKK8B.js";import{u as De}from"./useActiveKeyboard-DaOmFJe_.js";import{F as Ke}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";const je=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",He=(e,t,a)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(a);)n<t.length-1?n++:n=0;t[n].focus()},Ne=(e,t,a)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(a);)n>0?n--:n=t.length-1;t[n].focus()},Le=(e,t)=>{const a=e<t.length-1?e+1:0;t[a].focus()},Ye=(e,t)=>{const a=e>0?e-1:t.length-1;t[a].focus()},Ge=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},Be=()=>{const[e,t]=r.useState([]);return r.useEffect(()=>{const a=()=>{t(Array.from(document.querySelectorAll(Ke)))};a();const n=new MutationObserver(a);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},Me="_segment_1kagx_1",m={"segmented-control":"_segmented-control_1kagx_1","segment-selected-indicator":"_segment-selected-indicator_1kagx_16","segment-container":"_segment-container_1kagx_31","segment-label":"_segment-label_1kagx_61",segment:Me,"segment-content":"_segment-content_1kagx_67","selected-icon":"_selected-icon_1kagx_71"},qe=e=>{r.useEffect(()=>{var S;const t=e.current;if(!t)return;let a="";const n=d=>{a=d.key};window.addEventListener("keydown",n);const s=()=>{var d,f;if(a==="Tab"){const g=(d=t.parentElement)==null?void 0:d.parentElement,x=g==null?void 0:g.querySelector("[data-selected='true']");x?x.focus():(f=Array.from((g==null?void 0:g.querySelectorAll("."+m.segment))??[])[0])==null||f.focus()}};return(S=e.current)==null||S.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},Se=({id:e,icon:t,labelText:a,position:n,isSelected:s,onClick:S,badgeCount:d,badgeContent:f,badgeIcon:g,badgeType:x,badgeSize:b,showBadge:D,appearance:i,isCompact:h,...K})=>{const j=r.useRef(null),H=Be();qe(j);const fe=c=>{var C,v;if(c.key===P||c.key===V)T==null||T(c);else if(c.key===G||c.key===B){const N=(v=(C=j.current)==null?void 0:C.parentElement)==null?void 0:v.parentElement,L=Array.from((N==null?void 0:N.querySelectorAll("."+m.segment))??[]),M=L.findIndex(Ee=>Ee===document.activeElement);c.key===B?Le(M,L):c.key===G&&Ye(M,L)}},ye=c=>{if(c.key===W){const C=document.activeElement,v=Array.from(H).indexOf(C);c.shiftKey?Ne(v,H,m.segment):He(v,H,m.segment)}},{onBlur:xe,onKeyDown:be,onKeyUp:ve}=De({onKeyUp:fe,onKeyDown:ye},{id:e,interactiveKeyCodes:[P,V,W,G,B]}),T=c=>{c.preventDefault(),c.stopPropagation(),S==null||S(c)};return o.jsx("div",{className:m["segment-container"],"data-position":n,...K,"data-appearance":i,"data-compact-spacing":h,children:o.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":a,className:m.segment,"data-segment-type":t?"icon":"label","data-selected":s,"data-compact-spacing":h,onKeyDown:be,onKeyUp:ve,onBlur:xe,onClick:T,tabIndex:0,ref:j,children:[s&&o.jsx(q,{name:"check-small",appearance:"filled",size:h?20:24,className:m["selected-icon"],"data-compact-spacing":h}),o.jsx("div",{className:m["segment-content"],children:t?o.jsx(q,{name:t,appearance:s?"filled":"outlined",size:h?20:24}):o.jsx("span",{className:m["segment-label"],children:a})}),Re({showBadge:!!D,badgeContent:f,badgeCount:d,badgeIcon:g})&&o.jsx(Ie,{count:d,content:f,icon:g,badgeType:x,size:b})]})})};Se.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const u=r.forwardRef(({options:e,onChange:t,selectedSegment:a,appearance:n="brand",isCompact:s=!1,...S},d)=>{const f=r.useRef(null),[g,x]=r.useState(!0),{indicatorStyle:b}=Ae(f,a);r.useEffect(()=>{const i=requestAnimationFrame(()=>x(!1));return()=>cancelAnimationFrame(i)},[]);const D=i=>{const K=i.currentTarget.getAttribute("id")||"";t(K)};return Ge(e)?o.jsxs("div",{ref:i=>{f.current=i,typeof d=="function"?d(i):d&&(d.current=i)},role:"radiogroup",className:m["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,...S,children:[o.jsx("span",{className:m["segment-selected-indicator"],"data-compact-spacing":s,"data-initial-animation-disabled":g,style:{left:b.left,top:b.top,width:b.width}}),e.map((i,h)=>o.jsx(Se,{position:je(h,e.length),onClick:D,isSelected:a===i.id,appearance:n,isCompact:s,...i},`${i.id}-${h}`))]}):null});u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const Pe=Object.keys(Oe),Ve=Object.keys(ke),ot={title:"Composants/SegmentedControl/SegmentedControl",component:u,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...Pe,...Ve].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:E(),appearance:"brand"}},l={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:E(),appearance:"brand",isCompact:!1},render:e=>{const[t,a]=r.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},w={args:{...l.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:e=>{const[t,a]=r.useState("day"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},_={tags:["!autodocs"],args:l.args,render:l.render,play:async({canvasElement:e})=>{const t=e,[a,n,s]=_e(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");y(a).toHaveAttribute("aria-checked","true"),await p.click(n),y(n).toHaveAttribute("aria-checked","true"),await p.click(s),y(s).toHaveAttribute("aria-checked","true"),await p.click(a),await p.tab(),await p.keyboard(Y),y(n).toHaveFocus(),await p.keyboard(Te),y(n).toHaveAttribute("aria-checked","true"),await p.keyboard(Ce),await p.keyboard(we),y(a).toHaveAttribute("aria-checked","true"),await p.keyboard(Y),await p.keyboard(Y),y(s).toHaveFocus()}},O={args:{...l.args},render:e=>{const[t,a]=r.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},k={args:{...l.args,isCompact:!0},render:e=>{const[t,a]=r.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(u,{...e,onChange:n,selectedSegment:t}),o.jsx(u,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},A={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:E()},render:e=>{const[t,a]=r.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},R={args:{...l.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:E()},render:e=>{const[t,a]=r.useState("agenda"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}},I={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:E()},render:e=>{const[t,a]=r.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"380px"},children:o.jsx(u,{...e,onChange:n,selectedSegment:t})})}};var F,U,z;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: [{
      labelText: "Option 1",
      id: "option1"
    }, {
      labelText: "Option 2",
      id: "option2"
    }, {
      labelText: "Option 3",
      id: "option3"
    }],
    onChange: fn(),
    appearance: "brand",
    isCompact: false
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
  }
}`,...(z=(U=l.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,$,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [{
      labelText: "Jour",
      id: "day"
    }, {
      labelText: "Semaine en cours",
      id: "current-week"
    }, {
      labelText: "Historique des consommations",
      id: "consumption-history"
    }]
  },
  render: args => {
    const [selected, setSelected] = useState("day");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(Q=($=w.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var X,Z,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: Default.args,
  render: Default.render,
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
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,oe,re;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
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
}`,...(re=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ce,ie,de;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [{
      labelText: "Option 1",
      id: "option1"
    }, {
      labelText: "Option 2",
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
}`,...(de=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ge,me;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [{
      id: "agenda",
      icon: "view-agenda",
      labelText: "Vue agenda"
    }, {
      id: "column",
      icon: "view-column",
      labelText: "Vue colonne"
    }, {
      id: "grid",
      icon: "view-grid",
      labelText: "Vue grille"
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
}`,...(me=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ue,pe,he;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [{
      labelText: "Option 1",
      id: "option1"
    }, {
      labelText: "Option 2",
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
}`,...(he=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const rt=["Default","DifferentLabelTextLengths","KeyboardInteraction","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge"];export{O as Appearance,k as CompactSpacing,l as Default,w as DifferentLabelTextLengths,R as Icons,_ as KeyboardInteraction,A as TwoOptions,I as WithBadge,rt as __namedExportsOrder,ot as default};
