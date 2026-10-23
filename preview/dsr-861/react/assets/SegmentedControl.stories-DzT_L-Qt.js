import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as G,T as ze,f as Ue,a as Je}from"./keyboard-test.constants-DC52cZHj.js";import{w as T,e as p,f,u as b}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{I as z,R as Qe,T as Xe}from"./Icon-DBkoQNiA.js";import{g as Re,s as ke,B as Ze}from"./Badge-BKSKdLzq.js";import{u as et}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{S as U,E as J,T as Q,a as V,A as Y}from"./keyboard.constants-BverKK8B.js";import{u as tt}from"./useActiveKeyboard-DaOmFJe_.js";import{F as nt}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useScrollEvent-BvD0VCKE.js";function De(t,e,n){return!!t&&t.classList.contains(e)&&n.contains(t)}const at="Notifications",He="Notification";function Ke(t){const{showBadge:e,badgeContent:n,badgeCount:o,badgeIcon:a}=t;return ke({showBadge:!!e,badgeContent:n,badgeCount:o,badgeIcon:a})}function ot(t){const{icon:e,badgeContent:n,badgeCount:o}=t;if(!(!e||!Ke(t))){if(n==="number"){const a=Re(o);return a?`${e}. ${at}, ${a}`:void 0}if(n==="icon"||n==="empty")return`${e}. ${He}`}}function st(t){const{labelText:e,badgeContent:n,badgeCount:o}=t;if(!(!e||!Ke(t))){if(n==="number"){const a=Re(o);return a?`${e}, ${a}`:e}if(n==="icon"||n==="empty")return`${e}. ${He}`}}function rt(t){const{ariaLabel:e,labelText:n,icon:o}=t;if(e)return e;if(!n&&o){const a=ot(t);return a||o}return n?st(t)||n:o||""}function it(t,e){return e===2?t===0?"left":"right":t===0?"left":t===e-1?"right":"middle"}function ct({focusedIndex:t,focusableElements:e,segmentClass:n,radiogroupElement:o}){if(!e.length)return;let a=t+1;a>=e.length&&(a=0);const g=a;do{const r=e[a];if(!De(r,n,o)){r.focus();return}a=a+1<e.length?a+1:0}while(a!==g)}function lt({focusedIndex:t,focusableElements:e,segmentClass:n,radiogroupElement:o}){if(!e.length)return;let a=t-1;a<0&&(a=e.length-1);const g=a;do{const r=e[a];if(!De(r,n,o)){r.focus();return}a=a>0?a-1:e.length-1}while(a!==g)}function dt(t,e){const n=t<e.length-1?t+1:0;e[n].focus()}function gt(t,e){const n=t>0?t-1:e.length-1;e[n].focus()}function ut(t){if(t.length<=1||t.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const e=t.filter(o=>o.icon).length;if(e>0&&e<t.length)return console.warn("SegmentedControl: All options must either have an icon or none."),!1;const n=t.find(o=>!o.labelText&&!o.icon);return n?(console.warn(`SegmentedControl: segment "${n.id}" must define labelText or icon.`),!1):!0}const mt=()=>{const[t,e]=i.useState([]);return i.useEffect(()=>{const n=()=>{e(Array.from(document.querySelectorAll(nt)))};n();const o=new MutationObserver(n);return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>o.disconnect()},[]),t},pt="_segment_1mjo4_1",h={"segmented-control":"_segmented-control_1mjo4_1","segment-selected-indicator":"_segment-selected-indicator_1mjo4_16","segment-container":"_segment-container_1mjo4_36","segment-label":"_segment-label_1mjo4_66",segment:pt,"segment-content":"_segment-content_1mjo4_72","selected-icon":"_selected-icon_1mjo4_76"},bt=t=>{i.useEffect(()=>{var g;const e=t.current;if(!e)return;let n="";const o=r=>{n=r.key};window.addEventListener("keydown",o);const a=()=>{var r,y;if(n==="Tab"){const m=(r=e.parentElement)==null?void 0:r.parentElement,S=m==null?void 0:m.querySelector("[data-selected='true']");S?S.focus():(y=Array.from((m==null?void 0:m.querySelectorAll("."+h.segment))??[])[0])==null||y.focus()}};return(g=t.current)==null||g.addEventListener("focus",a),()=>{window.removeEventListener("keydown",o),e.removeEventListener("focus",a)}},[t])},qe=({id:t,icon:e,labelText:n,ariaLabel:o,position:a,isSelected:g,onClick:r,badgeCount:y,badgeContent:m,badgeIcon:S,badgeType:v,badgeSize:M,showBadge:l,appearance:E,isCompact:x,...We})=>{const Fe=rt({ariaLabel:o,labelText:n,icon:e,showBadge:l,badgeCount:y,badgeContent:m,badgeIcon:S}),I=i.useRef(null),P=mt();bt(I);const Me=d=>{var w,A;if(d.key===U||d.key===J)B==null||B(d);else if(d.key===V||d.key===Y){const O=(A=(w=I.current)==null?void 0:w.parentElement)==null?void 0:A.parentElement,L=Array.from((O==null?void 0:O.querySelectorAll("."+h.segment))??[]),_=L.findIndex(Pe=>Pe===document.activeElement);d.key===Y?dt(_,L):d.key===V&&gt(_,L)}},Ge=d=>{var w;if(d.key===Q){const A=(w=I.current)==null?void 0:w.closest('[role="radiogroup"]');if(!(A instanceof HTMLElement))return;const O=document.activeElement,_={focusedIndex:Array.from(P).indexOf(O),focusableElements:Array.from(P),segmentClass:h.segment,radiogroupElement:A};d.shiftKey?lt(_):ct(_)}},{onBlur:Ve,onKeyDown:Ye,onKeyUp:$e}=tt({onKeyUp:Me,onKeyDown:Ge},{id:t,interactiveKeyCodes:[U,J,Q,V,Y]}),B=d=>{d.preventDefault(),d.stopPropagation(),r==null||r(d)};return s.jsx("div",{className:h["segment-container"],"data-position":a,...We,"data-appearance":E,"data-compact-spacing":x,children:s.jsxs("div",{id:t,role:"radio","aria-checked":g,"aria-label":Fe,className:h.segment,"data-segment-type":e?"icon":"label","data-selected":g,"data-compact-spacing":x,onKeyDown:Ye,onKeyUp:$e,onBlur:Ve,onClick:B,tabIndex:0,ref:I,children:[g&&s.jsx(z,{name:"check-small",appearance:"filled",size:x?20:24,className:h["selected-icon"],"data-compact-spacing":x}),s.jsx("div",{className:h["segment-content"],children:e?s.jsx(z,{name:e,appearance:g?"filled":"outlined",size:x?20:24}):s.jsx("span",{className:h["segment-label"],children:n})}),ke({showBadge:!!l,badgeContent:m,badgeCount:y,badgeIcon:S})&&s.jsx(Ze,{count:y,content:m,icon:S,badgeType:v,size:M})]})})};qe.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const u=i.forwardRef(({options:t,onChange:e,selectedSegment:n,appearance:o="brand",isCompact:a=!1,...g},r)=>{const y=i.useRef(null),[m,S]=i.useState(!0),{indicatorStyle:v}=et(y,n);i.useEffect(()=>{const l=requestAnimationFrame(()=>S(!1));return()=>cancelAnimationFrame(l)},[]);const M=l=>{const x=l.currentTarget.getAttribute("id")||"";x!==n&&e(x)};return ut(t)?s.jsxs("div",{ref:l=>{y.current=l,typeof r=="function"?r(l):r&&(r.current=l)},role:"radiogroup",className:h["segmented-control"],"data-compact-spacing":a,"data-number-of-segments":t.length,...g,children:[s.jsx("span",{className:h["segment-selected-indicator"],"data-compact-spacing":a,"data-initial-animation-disabled":m,style:{left:v.left,top:v.top,width:v.width}}),t.map((l,E)=>s.jsx(qe,{position:it(E,t.length),onClick:M,isSelected:n===l.id,appearance:o,isCompact:a,...l},`${l.id}-${E}`))]}):null});u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const ht=Object.keys(Qe),yt=Object.keys(Xe),jt={title:"Composants/SegmentedControl",component:u,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ht,...yt].sort((t,e)=>t.localeCompare(e))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:f(),appearance:"brand"}},c={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:f(),appearance:"brand",isCompact:!1},render:t=>{const[e,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})}},j={args:{...c.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:t=>{const[e,n]=i.useState("day"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})}},N={tags:["!autodocs"],args:c.args,render:c.render,play:async({canvasElement:t})=>{const e=t,[n,o,a]=T(e).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");p(n).toHaveAttribute("aria-checked","true"),await b.click(o),p(o).toHaveAttribute("aria-checked","true"),await b.click(a),p(a).toHaveAttribute("aria-checked","true"),await b.click(n),await b.tab(),await b.keyboard(G),p(o).toHaveFocus(),await b.keyboard(ze),p(o).toHaveAttribute("aria-checked","true"),await b.keyboard(Ue),await b.keyboard(Je),p(n).toHaveAttribute("aria-checked","true"),await b.keyboard(G),await b.keyboard(G),p(a).toHaveFocus()}},R={args:{...c.args},render:t=>{const[e,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(u,{...t,onChange:o,selectedSegment:e}),s.jsx(u,{...t,onChange:o,selectedSegment:e,appearance:"neutral"})]})}},k={args:{...c.args,isCompact:!0},render:t=>{const[e,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(u,{...t,onChange:o,selectedSegment:e}),s.jsx(u,{...t,onChange:o,selectedSegment:e,appearance:"neutral"})]})}},D={args:{...c.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:f()},render:t=>{const[e,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})}},H={args:{...c.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:f()},render:t=>{const[e,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})}},C={args:{...c.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:t=>{const[e,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-with-badge",children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})},play:async({canvasElement:t})=>{const e=Array.from(T(t).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(e[1]).toHaveAttribute("aria-label","Option 2, 5")}},K={args:{...c.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator",ariaLabel:"3 nouvelles alertes"}],onChange:f()},render:C.render,play:async({canvasElement:t})=>{const e=Array.from(T(t).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(e[1]).toHaveAttribute("aria-label","3 nouvelles alertes")}},q={args:{...c.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Alertes",id:"option2",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}],onChange:f()},render:C.render,play:async({canvasElement:t})=>{const e=Array.from(T(t).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(e[1]).toHaveAttribute("aria-label","Alertes. Notification")}},W={tags:["!autodocs"],args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}],onChange:f()},render:t=>{const[e,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-icon-badge",children:s.jsx(u,{...t,onChange:o,selectedSegment:e})})},play:async({canvasElement:t})=>{const e=Array.from(T(t).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));p(e[1]).toHaveAttribute("aria-label","view-column. Notifications, 3")}},$=[{id:"labelText",title:"labelText only",expectedAriaLabel:"Libellé seul",options:[{labelText:"Référence",id:"ref"},{labelText:"Libellé seul",id:"target"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{labelText:"Référence",id:"ref"},{labelText:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes"}]},{id:"labelTextNumberBadge",title:"labelText + number badge",expectedAriaLabel:"Alertes, 3",options:[{labelText:"Référence",id:"ref"},{labelText:"Alertes",id:"target",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without labelText",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator"}]}],F={tags:["!autodocs"],args:{...c.args,onChange:f()},render:()=>{const[t,e]=i.useState(Object.fromEntries($.map(n=>[n.id,"ref"])));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:420,padding:8},"data-testid":"accessible-name-validation",children:[s.jsxs("p",{style:{margin:0,fontSize:14},children:["Focus the ",s.jsx("strong",{children:"second segment"})," of each control (right). Compare with the expected"," ",s.jsx("code",{children:"aria-label"})," below (screen reader or devtools)."]}),$.map(n=>s.jsxs("section",{"aria-labelledby":`case-${n.id}-title`,children:[s.jsx("h3",{id:`case-${n.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:n.title}),s.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Expected 2nd segment: ",s.jsx("code",{children:n.expectedAriaLabel})]}),s.jsx(u,{options:[...n.options],selectedSegment:t[n.id],onChange:o=>e(a=>({...a,[n.id]:o}))})]},n.id))]})},play:async({canvasElement:t})=>{const e=T(t).getByTestId("accessible-name-validation").querySelectorAll("section");$.forEach((n,o)=>{const a=Array.from(e[o].querySelectorAll("[role='radio']"));p(a[1]).toHaveAttribute("aria-label",n.expectedAriaLabel)})}};var X,Z,ee;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,re;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(se=N.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,ce,le;R.parameters={...R.parameters,docs:{...(ie=R.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,ge,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var me,pe,be;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(be=(pe=D.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var he,ye,fe;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ye=H.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var Se,xe,ve;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ve=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Ce,Te,Ee;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var we,Ae,Oe;q.parameters={...q.parameters,docs:{...(we=q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Oe=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Oe.source}}};var _e,Ie,Be;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Be=(Ie=W.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var Le,je,Ne;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ne=(je=F.parameters)==null?void 0:je.docs)==null?void 0:Ne.source}}};const Nt=["Default","DifferentLabelTextLengths","KeyboardInteraction","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge","WithBadgeCustomAriaLabel","WithBadgeEmptyDefaultAriaLabel","IconOnlyWithBadge","AccessibleNameValidation"];export{F as AccessibleNameValidation,R as Appearance,k as CompactSpacing,c as Default,j as DifferentLabelTextLengths,W as IconOnlyWithBadge,H as Icons,N as KeyboardInteraction,D as TwoOptions,C as WithBadge,K as WithBadgeCustomAriaLabel,q as WithBadgeEmptyDefaultAriaLabel,Nt as __namedExportsOrder,jt as default};
