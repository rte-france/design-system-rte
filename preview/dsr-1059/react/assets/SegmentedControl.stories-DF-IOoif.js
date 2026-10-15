import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as V,a as $e,f as Pe,T as ze}from"./keyboard-test.constants-By8W48aj.js";import{w as T,e as p,f,u as b}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{I as U,R as Ue,T as Je}from"./Icon-DBkoQNiA.js";import{g as Ne,s as P,B as Qe}from"./Badge-BKSKdLzq.js";import{u as Xe}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{S as J,E as Q,T as X,a as Y,A as G}from"./keyboard.constants-BverKK8B.js";import{u as Ze}from"./useActiveKeyboard-DaOmFJe_.js";import{F as et}from"./dom.constants-Bk0jVzGk.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useScrollEvent-BvD0VCKE.js";function je(e,t,n){return!!e&&e.classList.contains(t)&&n.contains(e)}const tt="Notifications";function nt(e,t){return t?`${e}, ${t}`:e}function at(e){const{showBadge:t,badgeContent:n,badgeCount:o,badgeIcon:a}=e;if(P({showBadge:!!t,badgeContent:n,badgeCount:o,badgeIcon:a})&&n==="number")return Ne(o)||""}function ot(e){const{showBadge:t,badgeContent:n,badgeCount:o,badgeIcon:a}=e;return P({showBadge:!!t,badgeContent:n,badgeCount:o,badgeIcon:a})}function st(e){const{icon:t,badgeContent:n,badgeCount:o}=e;if(!(!t||!ot(e))){if(n==="number"){const a=Ne(o);return a?`${t}. ${tt}, ${a}`:void 0}if(n==="icon"||n==="empty")return`${t}. Notification`}}function rt(e){const{labelText:t,icon:n}=e;return t||n||""}function it(e){const{ariaLabel:t,labelText:n,icon:o}=e;if(t)return t;if(!n&&o){const r=st(e);if(r)return r}const a=rt(e),c=at(e);return nt(a,c)}function ct(e,t){return t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle"}function dt({focusedIndex:e,focusableElements:t,segmentClass:n,radiogroupElement:o}){if(!t.length)return;let a=e+1;a>=t.length&&(a=0);const c=a;do{const r=t[a];if(!je(r,n,o)){r.focus();return}a=a+1<t.length?a+1:0}while(a!==c)}function lt({focusedIndex:e,focusableElements:t,segmentClass:n,radiogroupElement:o}){if(!t.length)return;let a=e-1;a<0&&(a=t.length-1);const c=a;do{const r=t[a];if(!je(r,n,o)){r.focus();return}a=a>0?a-1:t.length-1}while(a!==c)}function gt(e,t){const n=e<t.length-1?e+1:0;t[n].focus()}function ut(e,t){const n=e>0?e-1:t.length-1;t[n].focus()}function mt(e){if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;if(t>0&&t<e.length)return console.warn("SegmentedControl: All options must either have an icon or none."),!1;const n=e.find(o=>!o.labelText&&!o.icon);return n?(console.warn(`SegmentedControl: segment "${n.id}" must define labelText or icon.`),!1):!0}const pt=()=>{const[e,t]=i.useState([]);return i.useEffect(()=>{const n=()=>{t(Array.from(document.querySelectorAll(et)))};n();const o=new MutationObserver(n);return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0}),()=>o.disconnect()},[]),e},bt="_segment_1kagx_1",h={"segmented-control":"_segmented-control_1kagx_1","segment-selected-indicator":"_segment-selected-indicator_1kagx_16","segment-container":"_segment-container_1kagx_31","segment-label":"_segment-label_1kagx_61",segment:bt,"segment-content":"_segment-content_1kagx_67","selected-icon":"_selected-icon_1kagx_71"},ht=e=>{i.useEffect(()=>{var c;const t=e.current;if(!t)return;let n="";const o=r=>{n=r.key};window.addEventListener("keydown",o);const a=()=>{var r,y;if(n==="Tab"){const m=(r=t.parentElement)==null?void 0:r.parentElement,S=m==null?void 0:m.querySelector("[data-selected='true']");S?S.focus():(y=Array.from((m==null?void 0:m.querySelectorAll("."+h.segment))??[])[0])==null||y.focus()}};return(c=e.current)==null||c.addEventListener("focus",a),()=>{window.removeEventListener("keydown",o),t.removeEventListener("focus",a)}},[e])},He=({id:e,icon:t,labelText:n,ariaLabel:o,position:a,isSelected:c,onClick:r,badgeCount:y,badgeContent:m,badgeIcon:S,badgeType:v,badgeSize:M,showBadge:l,appearance:w,isCompact:x,...Ke})=>{const qe=it({ariaLabel:o,labelText:n,icon:t,showBadge:l,badgeCount:y,badgeContent:m,badgeIcon:S}),I=i.useRef(null),z=pt();ht(I);const We=g=>{var E,A;if(g.key===J||g.key===Q)B==null||B(g);else if(g.key===Y||g.key===G){const O=(A=(E=I.current)==null?void 0:E.parentElement)==null?void 0:A.parentElement,L=Array.from((O==null?void 0:O.querySelectorAll("."+h.segment))??[]),_=L.findIndex(Ge=>Ge===document.activeElement);g.key===G?gt(_,L):g.key===Y&&ut(_,L)}},Fe=g=>{var E;if(g.key===X){const A=(E=I.current)==null?void 0:E.closest('[role="radiogroup"]');if(!(A instanceof HTMLElement))return;const O=document.activeElement,_={focusedIndex:Array.from(z).indexOf(O),focusableElements:Array.from(z),segmentClass:h.segment,radiogroupElement:A};g.shiftKey?lt(_):dt(_)}},{onBlur:Me,onKeyDown:Ve,onKeyUp:Ye}=Ze({onKeyUp:We,onKeyDown:Fe},{id:e,interactiveKeyCodes:[J,Q,X,Y,G]}),B=g=>{g.preventDefault(),g.stopPropagation(),r==null||r(g)};return s.jsx("div",{className:h["segment-container"],"data-position":a,...Ke,"data-appearance":w,"data-compact-spacing":x,children:s.jsxs("div",{id:e,role:"radio","aria-checked":c,"aria-label":qe,className:h.segment,"data-segment-type":t?"icon":"label","data-selected":c,"data-compact-spacing":x,onKeyDown:Ve,onKeyUp:Ye,onBlur:Me,onClick:B,tabIndex:0,ref:I,children:[c&&s.jsx(U,{name:"check-small",appearance:"filled",size:x?20:24,className:h["selected-icon"],"data-compact-spacing":x}),s.jsx("div",{className:h["segment-content"],children:t?s.jsx(U,{name:t,appearance:c?"filled":"outlined",size:x?20:24}):s.jsx("span",{className:h["segment-label"],children:n})}),P({showBadge:!!l,badgeContent:m,badgeCount:y,badgeIcon:S})&&s.jsx(Qe,{count:y,content:m,icon:S,badgeType:v,size:M})]})})};He.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const u=i.forwardRef(({options:e,onChange:t,selectedSegment:n,appearance:o="brand",isCompact:a=!1,...c},r)=>{const y=i.useRef(null),[m,S]=i.useState(!0),{indicatorStyle:v}=Xe(y,n);i.useEffect(()=>{const l=requestAnimationFrame(()=>S(!1));return()=>cancelAnimationFrame(l)},[]);const M=l=>{const x=l.currentTarget.getAttribute("id")||"";t(x)};return mt(e)?s.jsxs("div",{ref:l=>{y.current=l,typeof r=="function"?r(l):r&&(r.current=l)},role:"radiogroup",className:h["segmented-control"],"data-compact-spacing":a,"data-number-of-segments":e.length,...c,children:[s.jsx("span",{className:h["segment-selected-indicator"],"data-compact-spacing":a,"data-initial-animation-disabled":m,style:{left:v.left,top:v.top,width:v.width}}),e.map((l,w)=>s.jsx(He,{position:ct(w,e.length),onClick:M,isSelected:n===l.id,appearance:o,isCompact:a,...l},`${l.id}-${w}`))]}):null});u.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const yt=Object.keys(Ue),ft=Object.keys(Je),Rt={title:"Composants/SegmentedControl/SegmentedControl",component:u,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...yt,...ft].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:f(),appearance:"brand"}},d={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:f(),appearance:"brand",isCompact:!1},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})}},k={args:{...d.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:e=>{const[t,n]=i.useState("day"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})}},R={tags:["!autodocs"],args:d.args,render:d.render,play:async({canvasElement:e})=>{const t=e,[n,o,a]=T(t).getByTestId("segmented-control-story").querySelectorAll("[role='radio']");p(n).toHaveAttribute("aria-checked","true"),await b.click(o),p(o).toHaveAttribute("aria-checked","true"),await b.click(a),p(a).toHaveAttribute("aria-checked","true"),await b.click(n),await b.tab(),await b.keyboard(V),p(o).toHaveFocus(),await b.keyboard($e),p(o).toHaveAttribute("aria-checked","true"),await b.keyboard(Pe),await b.keyboard(ze),p(n).toHaveAttribute("aria-checked","true"),await b.keyboard(V),await b.keyboard(V),p(a).toHaveFocus()}},D={args:{...d.args},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(u,{...e,onChange:o,selectedSegment:t}),s.jsx(u,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},N={args:{...d.args,isCompact:!0},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(u,{...e,onChange:o,selectedSegment:t}),s.jsx(u,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},j={args:{...d.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:f()},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})}},H={args:{...d.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:f()},render:e=>{const[t,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})}},C={args:{...d.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=i.useState("option1"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-with-badge",children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","Option 2, 5")}},K={args:{...d.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator",ariaLabel:"3 nouvelles alertes"}],onChange:f()},render:C.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","3 nouvelles alertes")}},q={args:{...d.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Alertes",id:"option2",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}],onChange:f()},render:C.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","Alertes, nouveau")}},W={tags:["!autodocs"],args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=i.useState("agenda"),o=a=>{n(a)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-icon-badge",children:s.jsx(u,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));p(t[1]).toHaveAttribute("aria-label","view-column. Notifications, 3")}},$=[{id:"labelText",title:"labelText only",expectedAriaLabel:"Libellé seul",options:[{labelText:"Référence",id:"ref"},{labelText:"Libellé seul",id:"target"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{labelText:"Référence",id:"ref"},{labelText:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes"}]},{id:"labelTextNumberBadge",title:"labelText + number badge",expectedAriaLabel:"Alertes, 3",options:[{labelText:"Référence",id:"ref"},{labelText:"Alertes",id:"target",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without labelText",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator"}]}],F={tags:["!autodocs"],args:{...d.args,onChange:f()},render:()=>{const[e,t]=i.useState(Object.fromEntries($.map(n=>[n.id,"ref"])));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:420,padding:8},"data-testid":"accessible-name-validation",children:[s.jsxs("p",{style:{margin:0,fontSize:14},children:["Focus the ",s.jsx("strong",{children:"second segment"})," of each control (right). Compare with the expected"," ",s.jsx("code",{children:"aria-label"})," below (screen reader or devtools)."]}),$.map(n=>s.jsxs("section",{"aria-labelledby":`case-${n.id}-title`,children:[s.jsx("h3",{id:`case-${n.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:n.title}),s.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Expected 2nd segment: ",s.jsx("code",{children:n.expectedAriaLabel})]}),s.jsx(u,{options:[...n.options],selectedSegment:e[n.id],onChange:o=>t(a=>({...a,[n.id]:o}))})]},n.id))]})},play:async({canvasElement:e})=>{const t=T(e).getByTestId("accessible-name-validation").querySelectorAll("section");$.forEach((n,o)=>{const a=Array.from(t[o].querySelectorAll("[role='radio']"));p(a[1]).toHaveAttribute("aria-label",n.expectedAriaLabel)})}};var Z,ee,te;d.parameters={...d.parameters,docs:{...(Z=d.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ie;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,de,le;D.parameters={...D.parameters,docs:{...(ce=D.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(le=(de=D.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ge,ue,me;N.parameters={...N.parameters,docs:{...(ge=N.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,be,he;j.parameters={...j.parameters,docs:{...(pe=j.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(he=(be=j.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ye,fe,Se;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Se=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var xe,ve,Ce;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Te,we,Ee;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(Ee=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Ee.source}}};var Ae,Oe,_e;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
    expect(segments[1]).toHaveAttribute("aria-label", "Alertes, nouveau");
  }
}`,...(_e=(Oe=q.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ie,Be,Le;W.parameters={...W.parameters,docs:{...(Ie=W.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Le=(Be=W.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var ke,Re,De;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(De=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};const Dt=["Default","DifferentLabelTextLengths","KeyboardInteraction","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge","WithBadgeCustomAriaLabel","WithBadgeEmptyDefaultAriaLabel","IconOnlyWithBadge","AccessibleNameValidation"];export{F as AccessibleNameValidation,D as Appearance,N as CompactSpacing,d as Default,k as DifferentLabelTextLengths,W as IconOnlyWithBadge,H as Icons,R as KeyboardInteraction,j as TwoOptions,C as WithBadge,K as WithBadgeCustomAriaLabel,q as WithBadgeEmptyDefaultAriaLabel,Dt as __namedExportsOrder,Rt as default};
