import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as Y,T as Xe,f as Ze,a as et}from"./keyboard-test.constants-CC9zMOdc.js";import{w as T,e as r,f,u as d,a as I}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{I as Z,R as tt,T as nt}from"./Icon-DBkoQNiA.js";import{g as We,s as Ge,B as at}from"./Badge-BKSKdLzq.js";import{u as ot}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{S as ee,E as te,a as P,A as z}from"./keyboard.constants-BverKK8B.js";import{u as st}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./useScrollEvent-BvD0VCKE.js";const rt="Notifications",$e="Notification";function Ve(e){const{showBadge:t,badgeContent:n,badgeCount:a,badgeIcon:o}=e;return Ge({showBadge:!!t,badgeContent:n,badgeCount:a,badgeIcon:o})}function it(e){const{icon:t,badgeContent:n,badgeCount:a}=e;if(!(!t||!Ve(e))){if(n==="number"){const o=We(a);return o?`${t}. ${rt}, ${o}`:void 0}if(n==="icon"||n==="empty")return`${t}. ${$e}`}}function dt(e){const{labelText:t,badgeContent:n,badgeCount:a}=e;if(!(!t||!Ve(e))){if(n==="number"){const o=We(a);return o?`${t}, ${o}`:t}if(n==="icon"||n==="empty")return`${t}. ${$e}`}}function lt(e){const{ariaLabel:t,labelText:n,icon:a}=e;if(t)return t;if(!n&&a){const o=it(e);return o||a}return n?dt(e)||n:a||""}function ct(e,t){return t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle"}function gt({segmentId:e,selectedSegmentId:t,focusedSegmentId:n,fallbackTabStopSegmentId:a}){const o=n??t??a;return o&&o===e?0:-1}function mt(e,t){const n=e<t.length-1?e+1:0;t[n].focus()}function ut(e,t){const n=e>0?e-1:t.length-1;t[n].focus()}function pt(e){if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(a=>a.icon).length;if(t>0&&t<e.length)return console.warn("SegmentedControl: All options must either have an icon or none."),!1;const n=e.find(a=>!a.labelText&&!a.icon);return n?(console.warn(`SegmentedControl: segment "${n.id}" must define labelText or icon.`),!1):!0}const bt="_segment_1mjo4_1",v={"segmented-control":"_segmented-control_1mjo4_1","segment-selected-indicator":"_segment-selected-indicator_1mjo4_16","segment-container":"_segment-container_1mjo4_36","segment-label":"_segment-label_1mjo4_66",segment:bt,"segment-content":"_segment-content_1mjo4_72","selected-icon":"_selected-icon_1mjo4_76"},Me=({id:e,icon:t,labelText:n,ariaLabel:a,position:o,isSelected:u,onClick:c,badgeCount:h,badgeContent:x,badgeIcon:p,badgeType:b,badgeSize:B,showBadge:E,appearance:G,isCompact:w,segmentTabIndex:$,onSegmentFocus:A,...i})=>{const C=lt({ariaLabel:a,labelText:n,icon:t,showBadge:E,badgeCount:h,badgeContent:x,badgeIcon:p}),S=l.useRef(null),Ye=y=>{var J,Q;if(y.key===ee||y.key===te)_==null||_(y);else if(y.key===P||y.key===z){const V=(Q=(J=S.current)==null?void 0:J.parentElement)==null?void 0:Q.parentElement,M=Array.from((V==null?void 0:V.querySelectorAll("."+v.segment))??[]),X=M.findIndex(Qe=>Qe===document.activeElement);y.key===z?mt(X,M):y.key===P&&ut(X,M)}},{onBlur:Pe,onKeyDown:ze,onKeyUp:Ue}=st({onKeyUp:Ye},{id:e,interactiveKeyCodes:[ee,te,P,z]}),_=y=>{y.preventDefault(),y.stopPropagation(),c==null||c(y)},Je=()=>{A==null||A()};return s.jsx("div",{className:v["segment-container"],"data-position":o,...i,"data-appearance":G,"data-compact-spacing":w,children:s.jsxs("div",{id:e,role:"radio","aria-checked":u,"aria-label":C,className:v.segment,"data-segment-type":t?"icon":"label","data-selected":u,"data-compact-spacing":w,onKeyDown:ze,onKeyUp:Ue,onBlur:Pe,onFocus:Je,onClick:_,tabIndex:$,ref:S,children:[u&&s.jsx(Z,{name:"check-small",appearance:"filled",size:w?20:24,className:v["selected-icon"],"data-compact-spacing":w}),s.jsx("div",{className:v["segment-content"],children:t?s.jsx(Z,{name:t,appearance:u?"filled":"outlined",size:w?20:24}):s.jsx("span",{className:v["segment-label"],children:n})}),Ge({showBadge:!!E,badgeContent:x,badgeCount:h,badgeIcon:p})&&s.jsx(at,{count:h,content:x,icon:p,badgeType:b,size:B})]})})};Me.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},segmentTabIndex:{required:!0,tsType:{name:"union",raw:"0 | -1",elements:[{name:"literal",value:"0"},{name:"literal",value:"-1"}]},description:""},onSegmentFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const m=l.forwardRef(({options:e,onChange:t,selectedSegment:n,appearance:a="brand",isCompact:o=!1,...u},c)=>{var A;const h=l.useRef(null),[x,p]=l.useState(!0),[b,B]=l.useState(null),{indicatorStyle:E}=ot(h,n);l.useEffect(()=>{const i=requestAnimationFrame(()=>p(!1));return()=>cancelAnimationFrame(i)},[]);const G=i=>{const S=i.currentTarget.getAttribute("id")||"";S!==n&&t(S)},w=i=>{var S;const C=i.relatedTarget;(S=h.current)!=null&&S.contains(C)||B(null)},$=(A=e[0])==null?void 0:A.id;return pt(e)?s.jsxs("div",{ref:i=>{h.current=i,typeof c=="function"?c(i):c&&(c.current=i)},role:"radiogroup",className:v["segmented-control"],"data-compact-spacing":o,"data-number-of-segments":e.length,onBlurCapture:w,...u,children:[s.jsx("span",{className:v["segment-selected-indicator"],"data-compact-spacing":o,"data-initial-animation-disabled":x,style:{left:E.left,top:E.top,width:E.width}}),e.map((i,C)=>s.jsx(Me,{position:ct(C,e.length),onClick:G,isSelected:n===i.id,appearance:a,isCompact:o,segmentTabIndex:gt({segmentId:i.id,selectedSegmentId:n,focusedSegmentId:b,fallbackTabStopSegmentId:$}),onSegmentFocus:()=>B(i.id),...i},`${i.id}-${C}`))]}):null});m.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const yt=Object.keys(tt),ht=Object.keys(nt),jt={title:"Composants/SegmentedControl/SegmentedControl",component:m,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...yt,...ht].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:f(),appearance:"brand"}},g={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:f(),appearance:"brand",isCompact:!1},render:e=>{const[t,n]=l.useState("option1"),a=o=>{n(o)};return s.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})}},j={args:{...g.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:e=>{const[t,n]=l.useState("day"),a=o=>{n(o)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})}},R={tags:["!autodocs"],args:g.args,render:e=>{const[t,n]=l.useState("option1");return s.jsxs("div",{"data-testid":"tab-navigation-fixture",style:{display:"flex",flexDirection:"column",gap:"8px",width:"420px"},children:[s.jsx("button",{type:"button","data-testid":"before-segmented-control",children:"Before control"}),s.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:s.jsx(m,{...e,onChange:n,selectedSegment:t})}),s.jsx("button",{type:"button","data-testid":"after-segmented-control",children:"After control"})]})},play:async({canvasElement:e})=>{const t=T(e),n=t.getByTestId("before-segmented-control"),a=t.getByTestId("after-segmented-control"),o=t.getByTestId("segmented-control-story"),u=p=>o.querySelector(`[role='radio']#${p}`),c=async p=>{await I(()=>{const b=u(p);r(b).not.toBeNull(),r(b).toHaveFocus()})},h=async p=>{await I(()=>{const b=u(p);r(b).toHaveAttribute("aria-checked","true"),r(b).toHaveAttribute("tabindex","0")})},x=p=>{o.querySelectorAll("[role='radio']").forEach(b=>{b.id===p?r(b).toHaveAttribute("tabindex","0"):r(b).toHaveAttribute("tabindex","-1")})};x("option1"),await d.click(n),await d.tab(),await c("option1"),await d.click(u("option2")),await h("option2"),await d.click(n),await d.tab(),await c("option2"),x("option2"),await d.tab(),await I(()=>r(a).toHaveFocus()),await d.tab({shift:!0}),await c("option2"),await d.tab({shift:!0}),await I(()=>r(n).toHaveFocus()),await d.click(u("option1")),await h("option1"),await c("option1"),await d.keyboard(Y),await c("option2"),r(u("option2")).toHaveAttribute("aria-checked","false"),await d.keyboard(Xe),r(u("option2")).toHaveAttribute("aria-checked","true"),await d.keyboard(Ze),await d.keyboard(et),r(u("option1")).toHaveAttribute("aria-checked","true"),await d.keyboard(Y),await d.keyboard(Y),await c("option3")}},H={tags:["!autodocs"],args:g.args,render:e=>{const[t,n]=l.useState("option1");return s.jsxs("div",{"data-testid":"tab-exit-end-of-page",style:{width:"420px"},children:[s.jsx("button",{type:"button","data-testid":"before-end-only",children:"Before end"}),s.jsx(m,{...e,onChange:n,selectedSegment:t})]})},play:async({canvasElement:e})=>{const t=T(e),n=t.getByTestId("before-end-only"),a=Array.from(t.getByTestId("tab-exit-end-of-page").querySelectorAll("[role='radio']")),o=a[a.length-1];await d.click(o),await I(()=>r(o).toHaveFocus()),await d.tab(),await I(()=>{r(n).not.toHaveFocus(),r(o).not.toHaveFocus()})}},L={args:{...g.args},render:e=>{const[t,n]=l.useState("option1"),a=o=>{n(o)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(m,{...e,onChange:a,selectedSegment:t}),s.jsx(m,{...e,onChange:a,selectedSegment:t,appearance:"neutral"})]})}},F={args:{...g.args,isCompact:!0},render:e=>{const[t,n]=l.useState("option1"),a=o=>{n(o)};return s.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[s.jsx(m,{...e,onChange:a,selectedSegment:t}),s.jsx(m,{...e,onChange:a,selectedSegment:t,appearance:"neutral"})]})}},N={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:f()},render:e=>{const[t,n]=l.useState("option1"),a=o=>{n(o)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})}},k={args:{...g.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:f()},render:e=>{const[t,n]=l.useState("agenda"),a=o=>{n(o)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})}},O={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=l.useState("option1"),a=o=>{n(o)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-with-badge",children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","Option 2, 5")}},D={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator",ariaLabel:"3 nouvelles alertes"}],onChange:f()},render:O.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","3 nouvelles alertes")}},q={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Alertes",id:"option2",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}],onChange:f()},render:O.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","Alertes. Notification")}},K={tags:["!autodocs"],args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=l.useState("agenda"),a=o=>{n(o)};return s.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-icon-badge",children:s.jsx(m,{...e,onChange:a,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","view-column. Notifications, 3")}},U=[{id:"labelText",title:"labelText only",expectedAriaLabel:"Libellé seul",options:[{labelText:"Référence",id:"ref"},{labelText:"Libellé seul",id:"target"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{labelText:"Référence",id:"ref"},{labelText:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes"}]},{id:"labelTextNumberBadge",title:"labelText + number badge",expectedAriaLabel:"Alertes, 3",options:[{labelText:"Référence",id:"ref"},{labelText:"Alertes",id:"target",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without labelText",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator"}]}],W={tags:["!autodocs"],args:{...g.args,onChange:f()},render:()=>{const[e,t]=l.useState(Object.fromEntries(U.map(n=>[n.id,"ref"])));return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:420,padding:8},"data-testid":"accessible-name-validation",children:[s.jsxs("p",{style:{margin:0,fontSize:14},children:["Focus the ",s.jsx("strong",{children:"second segment"})," of each control (right). Compare with the expected"," ",s.jsx("code",{children:"aria-label"})," below (screen reader or devtools)."]}),U.map(n=>s.jsxs("section",{"aria-labelledby":`case-${n.id}-title`,children:[s.jsx("h3",{id:`case-${n.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:n.title}),s.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Expected 2nd segment: ",s.jsx("code",{children:n.expectedAriaLabel})]}),s.jsx(m,{options:[...n.options],selectedSegment:e[n.id],onChange:a=>t(o=>({...o,[n.id]:a}))})]},n.id))]})},play:async({canvasElement:e})=>{const t=T(e).getByTestId("accessible-name-validation").querySelectorAll("section");U.forEach((n,a)=>{const o=Array.from(t[a].querySelectorAll("[role='radio']"));r(o[1]).toHaveAttribute("aria-label",n.expectedAriaLabel)})}};var ne,ae,oe;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ie;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,le,ce;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: Default.args,
  render: args => {
    const [selected, setSelected] = useState("option1");
    return <div data-testid="tab-navigation-fixture" style={{
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      width: "420px"
    }}>
        <button type="button" data-testid="before-segmented-control">
          Before control
        </button>
        <div style={{
        width: "420px"
      }} data-testid="segmented-control-story">
          <SegmentedControl {...args} onChange={setSelected} selectedSegment={selected} />
        </div>
        <button type="button" data-testid="after-segmented-control">
          After control
        </button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeControl = canvas.getByTestId("before-segmented-control");
    const afterControl = canvas.getByTestId("after-segmented-control");
    const storyRoot = canvas.getByTestId("segmented-control-story");
    const getSegmentById = (segmentId: string) => storyRoot.querySelector(\`[role='radio']#\${segmentId}\`);
    const waitForFocusOnSegment = async (segmentId: string) => {
      await waitFor(() => {
        const segment = getSegmentById(segmentId);
        expect(segment).not.toBeNull();
        expect(segment).toHaveFocus();
      });
    };
    const waitForSelectedTabStop = async (segmentId: string) => {
      await waitFor(() => {
        const segment = getSegmentById(segmentId);
        expect(segment).toHaveAttribute("aria-checked", "true");
        expect(segment).toHaveAttribute("tabindex", "0");
      });
    };
    const expectRovingTabIndex = (selectedSegmentId: string) => {
      storyRoot.querySelectorAll("[role='radio']").forEach(segment => {
        const segmentId = segment.id;
        if (segmentId === selectedSegmentId) {
          expect(segment).toHaveAttribute("tabindex", "0");
        } else {
          expect(segment).toHaveAttribute("tabindex", "-1");
        }
      });
    };
    expectRovingTabIndex("option1");
    await userEvent.click(beforeControl);
    await userEvent.tab();
    await waitForFocusOnSegment("option1");
    await userEvent.click(getSegmentById("option2")!);
    await waitForSelectedTabStop("option2");
    await userEvent.click(beforeControl);
    await userEvent.tab();
    await waitForFocusOnSegment("option2");
    expectRovingTabIndex("option2");
    await userEvent.tab();
    await waitFor(() => expect(afterControl).toHaveFocus());
    await userEvent.tab({
      shift: true
    });
    await waitForFocusOnSegment("option2");
    await userEvent.tab({
      shift: true
    });
    await waitFor(() => expect(beforeControl).toHaveFocus());
    await userEvent.click(getSegmentById("option1")!);
    await waitForSelectedTabStop("option1");
    await waitForFocusOnSegment("option1");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await waitForFocusOnSegment("option2");
    expect(getSegmentById("option2")).toHaveAttribute("aria-checked", "false");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(getSegmentById("option2")).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(getSegmentById("option1")).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await waitForFocusOnSegment("option3");
  }
}`,...(ce=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ge,me,ue;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: Default.args,
  render: args => {
    const [selected, setSelected] = useState("option1");
    return <div data-testid="tab-exit-end-of-page" style={{
      width: "420px"
    }}>
        <button type="button" data-testid="before-end-only">
          Before end
        </button>
        <SegmentedControl {...args} onChange={setSelected} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeEndOnly = canvas.getByTestId("before-end-only");
    const endSegments = Array.from(canvas.getByTestId("tab-exit-end-of-page").querySelectorAll("[role='radio']"));
    const lastEndSegment = endSegments[endSegments.length - 1];
    await userEvent.click(lastEndSegment);
    await waitFor(() => expect(lastEndSegment).toHaveFocus());
    await userEvent.tab();
    await waitFor(() => {
      expect(beforeEndOnly).not.toHaveFocus();
      expect(lastEndSegment).not.toHaveFocus();
    });
  }
}`,...(ue=(me=H.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var pe,be,ye;L.parameters={...L.parameters,docs:{...(pe=L.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(be=L.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,fe,xe;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,ve,we;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ce,Te,Ee;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=k.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ae,Ie,Oe;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Be,_e,je;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(je=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Re,He,Le;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Le=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Fe,Ne,ke;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ke=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var De,qe,Ke;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};const Rt=["Default","DifferentLabelTextLengths","KeyboardInteraction","TabExitEndOfPage","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge","WithBadgeCustomAriaLabel","WithBadgeEmptyDefaultAriaLabel","IconOnlyWithBadge","AccessibleNameValidation"];export{W as AccessibleNameValidation,L as Appearance,F as CompactSpacing,g as Default,j as DifferentLabelTextLengths,K as IconOnlyWithBadge,k as Icons,R as KeyboardInteraction,H as TabExitEndOfPage,N as TwoOptions,O as WithBadge,D as WithBadgeCustomAriaLabel,q as WithBadgeEmptyDefaultAriaLabel,Rt as __namedExportsOrder,jt as default};
