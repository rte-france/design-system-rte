import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as M,T as Ye,f as Ge,a as Pe}from"./keyboard-test.constants-DC52cZHj.js";import{w as T,e as p,f,u as h}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{I as $,R as ze,T as $e}from"./Icon-DBkoQNiA.js";import{u as Ue}from"./useSelectedIndicatorPosition-CM1f02jd.js";import"./timepicker.constants-CynrC_9x.js";import{s as Je,B as Qe}from"./Badge-DUkuUEsZ.js";import{g as Xe}from"./accessibility.utils-D6lNe8qO.js";import{S as U,E as J,T as Q,a as Y,A as G}from"./keyboard.constants-BverKK8B.js";import{u as Ze}from"./useActiveKeyboard-DaOmFJe_.js";import{F as et}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";function ke(e,t,n){return!!e&&e.classList.contains(t)&&n.contains(e)}function tt(e,t){return t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle"}function nt({focusedIndex:e,focusableElements:t,segmentClass:n,radiogroupElement:o}){if(!t.length)return;let a=e+1;a>=t.length&&(a=0);const g=a;do{const r=t[a];if(!ke(r,n,o)){r.focus();return}a=a+1<t.length?a+1:0}while(a!==g)}function at({focusedIndex:e,focusableElements:t,segmentClass:n,radiogroupElement:o}){if(!t.length)return;let a=e-1;a<0&&(a=t.length-1);const g=a;do{const r=t[a];if(!ke(r,n,o)){r.focus();return}a=a>0?a-1:t.length-1}while(a!==g)}function ot(e,t){const n=e<t.length-1?e+1:0;t[n].focus()}function st(e,t){const n=e>0?e-1:t.length-1;t[n].focus()}function rt(e){if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;if(t>0&&t<e.length)return console.warn("SegmentedControl: All options must either have an icon or none."),!1;const n=e.find(o=>!o.labelText&&!o.icon);return n?(console.warn(`SegmentedControl: segment "${n.id}" must define labelText or icon.`),!1):!0}const it=()=>{const[e,t]=i.useState([]);return i.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(et)))};n();const o=new MutationObserver(n);return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>o.disconnect()},[]),e},lt="_segment_1mjo4_1",b={"segmented-control":"_segmented-control_1mjo4_1","segment-selected-indicator":"_segment-selected-indicator_1mjo4_16","segment-container":"_segment-container_1mjo4_36","segment-label":"_segment-label_1mjo4_66",segment:lt,"segment-content":"_segment-content_1mjo4_72","selected-icon":"_selected-icon_1mjo4_76"},dt=e=>{i.useEffect(()=>{var g;const t=e.current;if(!t)return;let n="";const o=r=>{n=r.key};window.addEventListener("keydown",o);const a=()=>{var r,y;if(n==="Tab"){const u=(r=t.parentElement)==null?void 0:r.parentElement,S=u==null?void 0:u.querySelector("[data-selected='true']");S?S.focus():(y=Array.from((u==null?void 0:u.querySelectorAll("."+b.segment))??[])[0])==null||y.focus()}};return(g=e.current)==null||g.addEventListener("focus",a),()=>{window.removeEventListener("keydown",o),t.removeEventListener("focus",a)}},[e])},Ne=({id:e,icon:t,labelText:n,ariaLabel:o,position:a,isSelected:g,onClick:r,badgeCount:y,badgeContent:u,badgeIcon:S,badgeType:v,badgeSize:V,showBadge:d,appearance:w,isCompact:x,...He})=>{const De=Xe({ariaLabel:o,labelText:n,icon:t,showBadge:d,badgeCount:y,badgeContent:u,badgeIcon:S}),I=i.useRef(null),z=it();dt(I);const Ke=c=>{var E,A;if(c.key===U||c.key===J)j==null||j(c);else if(c.key===Y||c.key===G){const O=(A=(E=I.current)==null?void 0:E.parentElement)==null?void 0:A.parentElement,B=Array.from((O==null?void 0:O.querySelectorAll("."+b.segment))??[]),_=B.findIndex(Me=>Me===document.activeElement);c.key===G?ot(_,B):c.key===Y&&st(_,B)}},qe=c=>{var E;if(c.key===Q){const A=(E=I.current)==null?void 0:E.closest('[role="radiogroup"]');if(!(A instanceof HTMLElement))return;const O=document.activeElement,_={focusedIndex:Array.from(z).indexOf(O),focusableElements:Array.from(z),segmentClass:b.segment,radiogroupElement:A};c.shiftKey?at(_):nt(_)}},{onBlur:We,onKeyDown:Fe,onKeyUp:Ve}=Ze({onKeyUp:Ke,onKeyDown:qe},{id:e,interactiveKeyCodes:[U,J,Q,Y,G]}),j=c=>{c.preventDefault(),c.stopPropagation(),r==null||r(c)};return s.jsx("div",{className:b["segment-container"],"data-position":a,...He,"data-appearance":w,"data-compact-spacing":x,children:s.jsxs("div",{id:e,role:"radio","aria-checked":g,"aria-label":De,className:b.segment,"data-segment-type":t?"icon":"label","data-selected":g,"data-compact-spacing":x,onKeyDown:Fe,onKeyUp:Ve,onBlur:We,onClick:j,tabIndex:0,ref:I,children:[g&&s.jsx($,{name:"check-small",appearance:"filled",size:x?20:24,className:b["selected-icon"],"data-compact-spacing":x}),s.jsx("div",{className:b["segment-content"],children:t?s.jsx($,{name:t,appearance:g?"filled":"outlined",size:x?20:24}):s.jsx("span",{className:b["segment-label"],children:n})}),Je({showBadge:!!d,badgeContent:u,badgeCount:y,badgeIcon:S})&&s.jsx(Qe,{count:y,content:u,icon:S,badgeType:v,size:V})]})})};Ne.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const m=i.forwardRef(({options:e,onChange:t,selectedSegment:n,appearance:o="brand",isCompact:a=!1,...g},r)=>{const y=i.useRef(null),[u,S]=i.useState(!0),{indicatorStyle:v}=Ue(y,n);i.useEffect(()=>{const d=requestAnimationFrame(()=>S(!1));return()=>cancelAnimationFrame(d)},[]);const V=d=>{const x=d.currentTarget.getAttribute("id")||"";x!==n&&t(x)};return rt(e)?s.jsxs("div",{ref:d=>{y.current=d,typeof r=="function"?r(d):r&&(r.current=d)},role:"radiogroup",className:b["segmented-control"],"data-compact-spacing":a,"data-number-of-segments":e.length,...g,children:[s.jsx("span",{className:b["segment-selected-indicator"],"data-compact-spacing":a,"data-initial-animation-disabled":u,style:{left:v.left,top:v.top,width:v.width}}),e.map((d,w)=>s.jsx(Ne,{position:tt(w,e.length),onClick:V,isSelected:n===d.id,appearance:o,isCompact:a,...d},`${d.id}-${w}`))]}):null});m.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const ct=Object.keys(ze),gt=Object.keys($e),_t={title:"Composants/SegmentedControl/SegmentedControl",component:m,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ct,...gt].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:f(),appearance:"brand"}},l={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:f(),appearance:"brand",isCompact:!1},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})}},L={args:{...l.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:e=>{const[t,n]=i.useState("day"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})}},R={tags:["!autodocs"],args:l.args,render:l.render,play:async({canvasElement:e})=>{const t=e,[n,o,a]=T(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");p(n).toHaveAttribute("aria-checked","true"),await h.click(o),p(o).toHaveAttribute("aria-checked","true"),await h.click(a),p(a).toHaveAttribute("aria-checked","true"),await h.click(n),await h.tab(),await h.keyboard(M),p(o).toHaveFocus(),await h.keyboard(Ye),p(o).toHaveAttribute("aria-checked","true"),await h.keyboard(Ge),await h.keyboard(Pe),p(n).toHaveAttribute("aria-checked","true"),await h.keyboard(M),await h.keyboard(M),p(a).toHaveFocus()}},k={args:{...l.args},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(m,{...e,onChange:o,selectedSegment:t}),s.jsx(m,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},N={args:{...l.args,isCompact:!0},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(m,{...e,onChange:o,selectedSegment:t}),s.jsx(m,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},H={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:f()},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})}},D={args:{...l.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:f()},render:e=>{const[t,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})}},C={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-with-badge",children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","Option 2, 5")}},K={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator",ariaLabel:"3 nouvelles alertes"}],onChange:f()},render:C.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","3 nouvelles alertes")}},q={args:{...l.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Alertes",id:"option2",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}],onChange:f()},render:C.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","Alertes. Notification")}},W={tags:["!autodocs"],args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-icon-badge",children:s.jsx(m,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","view-column. Notifications, 3")}},P=[{id:"labelText",title:"labelText only",expectedAriaLabel:"Libellé seul",options:[{labelText:"Référence",id:"ref"},{labelText:"Libellé seul",id:"target"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{labelText:"Référence",id:"ref"},{labelText:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes"}]},{id:"labelTextNumberBadge",title:"labelText + number badge",expectedAriaLabel:"Alertes, 3",options:[{labelText:"Référence",id:"ref"},{labelText:"Alertes",id:"target",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without labelText",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator"}]}],F={tags:["!autodocs"],args:{...l.args,onChange:f()},render:()=>{const[e,t]=i.useState(Object.fromEntries(P.map(n=>[n.id,"ref"])));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:420,padding:8},"data-testid":"accessible-name-validation",children:[s.jsxs("p",{style:{margin:0,fontSize:14},children:["Focus the ",s.jsx("strong",{children:"second segment"})," of each control (right). Compare with the expected"," ",s.jsx("code",{children:"aria-label"})," below (screen reader or devtools)."]}),P.map(n=>s.jsxs("section",{"aria-labelledby":`case-${n.id}-title`,children:[s.jsx("h3",{id:`case-${n.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:n.title}),s.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Expected 2nd segment: ",s.jsx("code",{children:n.expectedAriaLabel})]}),s.jsx(m,{options:[...n.options],selectedSegment:e[n.id],onChange:o=>t(a=>({...a,[n.id]:o}))})]},n.id))]})},play:async({canvasElement:e})=>{const t=T(e).getByTestId("accessible-name-validation").querySelectorAll("section");P.forEach((n,o)=>{const a=Array.from(t[o].querySelectorAll("[role='radio']"));p(a[1]).toHaveAttribute("aria-label",n.expectedAriaLabel)})}};var X,Z,ee;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=L.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;R.parameters={...R.parameters,docs:{...(oe=R.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=R.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,le,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(de=(le=k.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ge,me;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(ge=N.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var ue,pe,he;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var be,ye,fe;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(fe=(ye=D.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Se,xe,ve;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
    }} data-testid="segmented-control-with-badge">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const segments = Array.from(within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));
    expect(segments[1]).toHaveAttribute("aria-label", "Option 2, 5");
  }
}`,...(ve=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Ce,Te,we;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
      badgeType: "indicator",
      ariaLabel: "3 nouvelles alertes"
    }],
    onChange: fn()
  },
  render: WithBadge.render,
  play: async ({
    canvasElement
  }) => {
    const segments = Array.from(within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));
    expect(segments[1]).toHaveAttribute("aria-label", "3 nouvelles alertes");
  }
}`,...(we=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:we.source}}};var Ee,Ae,Oe;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    options: [{
      labelText: "Option 1",
      id: "option1"
    }, {
      labelText: "Alertes",
      id: "option2",
      showBadge: true,
      badgeContent: "empty",
      badgeType: "indicator"
    }],
    onChange: fn()
  },
  render: WithBadge.render,
  play: async ({
    canvasElement
  }) => {
    const segments = Array.from(within(canvasElement).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));
    expect(segments[1]).toHaveAttribute("aria-label", "Alertes. Notification");
  }
}`,...(Oe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var _e,Ie,je;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    options: [{
      id: "agenda",
      icon: "view-agenda"
    }, {
      id: "column",
      icon: "view-column",
      showBadge: true,
      badgeContent: "number",
      badgeCount: 3,
      badgeType: "indicator"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("agenda");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "380px"
    }} data-testid="segmented-control-icon-badge">
        <SegmentedControl {...args} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const segments = Array.from(within(canvasElement).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));
    expect(segments[1]).toHaveAttribute("aria-label", "view-column. Notifications, 3");
  }
}`,...(je=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Be,Le,Re;F.parameters={...F.parameters,docs:{...(Be=F.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onChange: fn()
  },
  render: () => {
    const [selectedByCase, setSelectedByCase] = useState<Record<string, string>>(Object.fromEntries(accessibleNameValidationCases.map(validationCase => [validationCase.id, "ref"])));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: 420,
      padding: 8
    }} data-testid="accessible-name-validation">
        <p style={{
        margin: 0,
        fontSize: 14
      }}>
          Focus the <strong>second segment</strong> of each control (right). Compare with the expected{" "}
          <code>aria-label</code> below (screen reader or devtools).
        </p>
        {accessibleNameValidationCases.map(validationCase => <section key={validationCase.id} aria-labelledby={\`case-\${validationCase.id}-title\`}>
            <h3 id={\`case-\${validationCase.id}-title\`} style={{
          margin: "0 0 4px",
          fontSize: 16
        }}>
              {validationCase.title}
            </h3>
            <p style={{
          margin: "0 0 8px",
          fontSize: 13,
          color: "#555"
        }}>
              Expected 2nd segment: <code>{validationCase.expectedAriaLabel}</code>
            </p>
            <SegmentedControl options={[...validationCase.options]} selectedSegment={selectedByCase[validationCase.id]} onChange={id => setSelectedByCase(previous => ({
          ...previous,
          [validationCase.id]: id
        }))} />
          </section>)}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const sections = within(canvasElement).getByTestId("accessible-name-validation").querySelectorAll("section");
    accessibleNameValidationCases.forEach((validationCase, index) => {
      const segments = Array.from(sections[index].querySelectorAll("[role='radio']"));
      expect(segments[1]).toHaveAttribute("aria-label", validationCase.expectedAriaLabel);
    });
  }
}`,...(Re=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};const It=["Default","DifferentLabelTextLengths","KeyboardInteraction","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge","WithBadgeCustomAriaLabel","WithBadgeEmptyDefaultAriaLabel","IconOnlyWithBadge","AccessibleNameValidation"];export{F as AccessibleNameValidation,k as Appearance,N as CompactSpacing,l as Default,L as DifferentLabelTextLengths,W as IconOnlyWithBadge,D as Icons,R as KeyboardInteraction,H as TwoOptions,C as WithBadge,K as WithBadgeCustomAriaLabel,q as WithBadgeEmptyDefaultAriaLabel,It as __namedExportsOrder,_t as default};
