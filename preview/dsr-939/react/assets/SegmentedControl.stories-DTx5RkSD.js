import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{e as L,a as ve,f as be,T as Ee}from"./keyboard-test.constants-By8W48aj.js";import{f as C,w as Ce,e as y,u}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{I as M,R as we,T as xe}from"./Icon-DgLH6pPJ.js";import{u as _e}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as Te,B as Oe}from"./Badge-DkJhvK8e.js";import{S as q,E as z,T as P,a as Y,A as G}from"./keyboard.constants-BverKK8B.js";import{u as Ae}from"./useActiveKeyboard-DaOmFJe_.js";import{F as ke}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";const Re=(e,t)=>t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle",Ie=(e,t,a)=>{var s;let n=e<t.length-2?e+1:0;for(;(s=t[n])!=null&&s.classList.contains(a);)n<t.length-1?n++:n=0;t[n].focus()},Ke=(e,t,a)=>{var s;let n=e>0?e-1:t.length-1;for(;(s=t[n])!=null&&s.classList.contains(a);)n>0?n--:n=t.length-1;t[n].focus()},je=(e,t)=>{const a=e<t.length-1?e+1:0;t[a].focus()},De=(e,t)=>{const a=e>0?e-1:t.length-1;t[a].focus()},He=e=>{if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;return t>0&&t<e.length?(console.warn("SegmentedControl: All options must either have an icon or none."),!1):!0},Ne=()=>{const[e,t]=c.useState([]);return c.useEffect(()=>{const a=()=>{t(Array.from(document.querySelectorAll(ke)))};a();const n=new MutationObserver(a);return n.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>n.disconnect()},[]),e},Le="_segment_10gvz_1",g={"segmented-control":"_segmented-control_10gvz_1","segment-selected-indicator":"_segment-selected-indicator_10gvz_17","segment-container":"_segment-container_10gvz_32","segment-label":"_segment-label_10gvz_62",segment:Le,"segment-content":"_segment-content_10gvz_68","selected-icon":"_selected-icon_10gvz_72"},Ye=e=>{c.useEffect(()=>{var h;const t=e.current;if(!t)return;let a="";const n=d=>{a=d.key};window.addEventListener("keydown",n);const s=()=>{var d,S;if(a==="Tab"){const l=(d=t.parentElement)==null?void 0:d.parentElement,v=l==null?void 0:l.querySelector("[data-selected='true']");v?v.focus():(S=Array.from((l==null?void 0:l.querySelectorAll("."+g.segment))??[])[0])==null||S.focus()}};return(h=e.current)==null||h.addEventListener("focus",s),()=>{window.removeEventListener("keydown",n),t.removeEventListener("focus",s)}},[e])},me=({id:e,icon:t,label:a,position:n,isSelected:s,onClick:h,badgeCount:d,badgeContent:S,badgeIcon:l,badgeType:v,badgeSize:b,showBadge:I,appearance:i,isCompact:f,...K})=>{const j=c.useRef(null),D=Ne();Ye(j);const ue=r=>{var x,E;if(r.key===q||r.key===z)w==null||w(r);else if(r.key===Y||r.key===G){const H=(E=(x=j.current)==null?void 0:x.parentElement)==null?void 0:E.parentElement,N=Array.from((H==null?void 0:H.querySelectorAll("."+g.segment))??[]),B=N.findIndex(ye=>ye===document.activeElement);r.key===G?je(B,N):r.key===Y&&De(B,N)}},pe=r=>{if(r.key===P){const x=document.activeElement,E=Array.from(D).indexOf(x);r.shiftKey?Ke(E,D,g.segment):Ie(E,D,g.segment)}},{onBlur:he,onKeyDown:Se,onKeyUp:fe}=Ae({onKeyUp:ue,onKeyDown:pe},{id:e,interactiveKeyCodes:[q,z,P,Y,G]}),w=r=>{r.preventDefault(),r.stopPropagation(),h==null||h(r)};return o.jsx("div",{className:g["segment-container"],"data-position":n,...K,"data-appearance":i,"data-compact-spacing":f,children:o.jsxs("div",{id:e,role:"radio","aria-checked":s,"aria-label":a,className:g.segment,"data-segment-type":t?"icon":"label","data-selected":s,"data-compact-spacing":f,onKeyDown:Se,onKeyUp:fe,onBlur:he,onClick:w,tabIndex:0,ref:j,children:[s&&o.jsx(M,{name:"check-small",appearance:"filled",size:24,className:g["selected-icon"]}),o.jsx("div",{className:g["segment-content"],children:t?o.jsx(M,{name:t,appearance:s?"filled":"outlined",size:f?20:24}):o.jsx("span",{className:g["segment-label"],children:a})}),Te({showBadge:!!I,badgeContent:S,badgeCount:d,badgeIcon:l})&&o.jsx(Oe,{count:d,content:S,icon:l,badgeType:v,size:b})]})})};me.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const p=c.forwardRef(({options:e,onChange:t,selectedSegment:a,appearance:n="brand",compactSpacing:s=!1,...h},d)=>{const S=c.useRef(null),[l,v]=c.useState(!0),{indicatorStyle:b}=_e(S,a);c.useEffect(()=>{const i=requestAnimationFrame(()=>v(!1));return()=>cancelAnimationFrame(i)},[]);const I=i=>{const K=i.currentTarget.getAttribute("id")||"";t(K)};return He(e)?o.jsxs("div",{ref:i=>{S.current=i,typeof d=="function"?d(i):d&&(d.current=i)},role:"radiogroup",className:g["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,...h,children:[o.jsx("span",{className:g["segment-selected-indicator"],"data-compact-spacing":s,"data-initial-animation-disabled":l,style:{left:b.left,top:b.top,width:b.width}}),e.map((i,f)=>o.jsx(me,{position:Re(f,e.length),onClick:I,isSelected:a===i.id,appearance:n,isCompact:s,...i},`${i.id}-${f}`))]}):null});p.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const Ge=Object.keys(we),Be=Object.keys(xe),tt={title:"Composants/SegmentedControl/SegmentedControl",component:p,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...Ge,...Be].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},compactSpacing:{control:"boolean"}}},args:{onClick:C(),appearance:"brand"}},m={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:C(),appearance:"brand",compactSpacing:!1},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}},_={tags:["!autodocs"],args:m.args,render:m.render,play:async({canvasElement:e})=>{const t=e,[a,n,s]=Ce(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");y(a).toHaveAttribute("aria-checked","true"),await u.click(n),y(n).toHaveAttribute("aria-checked","true"),await u.click(s),y(s).toHaveAttribute("aria-checked","true"),await u.click(a),await u.tab(),await u.keyboard(L),y(n).toHaveFocus(),await u.keyboard(ve),y(n).toHaveAttribute("aria-checked","true"),await u.keyboard(be),await u.keyboard(Ee),y(a).toHaveAttribute("aria-checked","true"),await u.keyboard(L),await u.keyboard(L),y(s).toHaveFocus()}},T={args:{...m.args},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(p,{...e,onChange:n,selectedSegment:t}),o.jsx(p,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},O={args:{...m.args,compactSpacing:!0},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[o.jsx(p,{...e,onChange:n,selectedSegment:t}),o.jsx(p,{...e,onChange:n,selectedSegment:t,appearance:"neutral"})]})}},A={args:{...m.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:C()},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}},k={args:{...m.args,options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:C()},render:e=>{const[t,a]=c.useState("agenda"),n=s=>{a(s)};return o.jsx("div",{style:{width:"420px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}},R={args:{...m.args,options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:C()},render:e=>{const[t,a]=c.useState("option1"),n=s=>{a(s)};return o.jsx("div",{style:{width:"380px"},children:o.jsx(p,{...e,onChange:n,selectedSegment:t})})}};var V,W,F;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  }
}`,...(F=(W=m.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};var U,$,Q;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=($=_.parameters)==null?void 0:$.docs)==null?void 0:Q.source}}};var J,X,Z;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;O.parameters={...O.parameters,docs:{...(ee=O.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=O.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,oe;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(se=A.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var re,ce,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,le,ge;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ge.source}}};const nt=["Default","KeyboardInteraction","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge"];export{T as Appearance,O as CompactSpacing,m as Default,k as Icons,_ as KeyboardInteraction,A as TwoOptions,R as WithBadge,nt as __namedExportsOrder,tt as default};
