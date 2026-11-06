import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{e as P,T as $e,f as Ue,a as Je}from"./keyboard-test.constants-DC52cZHj.js";import{w as T,e as r,f,u as d,a as I}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{I as Z,R as Qe,T as Xe}from"./Icon-DBkoQNiA.js";import{u as Ze}from"./useSelectedIndicatorPosition-CM1f02jd.js";import"./timepicker.constants-CynrC_9x.js";import{s as et,B as tt}from"./Badge-DUkuUEsZ.js";import{g as nt}from"./accessibility.utils-De896_4L.js";import{S as ee,E as te,a as z,A as $}from"./keyboard.constants-BverKK8B.js";import{u as at}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";function ot(e,t){return t===2?e===0?"left":"right":e===0?"left":e===t-1?"right":"middle"}function st({segmentId:e,selectedSegmentId:t,focusedSegmentId:n,fallbackTabStopSegmentId:o}){const s=n??t??o;return s&&s===e?0:-1}function rt(e,t){const n=e<t.length-1?e+1:0;t[n].focus()}function it(e,t){const n=e>0?e-1:t.length-1;t[n].focus()}function dt(e){if(e.length<=1||e.length>3)return console.warn("SegmentedControl: 'options' should have 2 or 3 items."),!1;const t=e.filter(o=>o.icon).length;if(t>0&&t<e.length)return console.warn("SegmentedControl: All options must either have an icon or none."),!1;const n=e.find(o=>!o.labelText&&!o.icon);return n?(console.warn(`SegmentedControl: segment "${n.id}" must define labelText or icon.`),!1):!0}const lt="_segment_1mjo4_1",v={"segmented-control":"_segmented-control_1mjo4_1","segment-selected-indicator":"_segment-selected-indicator_1mjo4_16","segment-container":"_segment-container_1mjo4_36","segment-label":"_segment-label_1mjo4_66",segment:lt,"segment-content":"_segment-content_1mjo4_72","selected-icon":"_selected-icon_1mjo4_76"},We=({id:e,icon:t,labelText:n,ariaLabel:o,position:s,isSelected:p,onClick:c,badgeCount:h,badgeContent:x,badgeIcon:u,badgeType:b,badgeSize:B,showBadge:E,appearance:V,isCompact:w,segmentTabIndex:G,onSegmentFocus:A,...i})=>{const C=nt({ariaLabel:o,labelText:n,icon:t,showBadge:E,badgeCount:h,badgeContent:x,badgeIcon:u}),S=l.useRef(null),Ve=y=>{var J,Q;if(y.key===ee||y.key===te)j==null||j(y);else if(y.key===z||y.key===$){const Y=(Q=(J=S.current)==null?void 0:J.parentElement)==null?void 0:Q.parentElement,M=Array.from((Y==null?void 0:Y.querySelectorAll("."+v.segment))??[]),X=M.findIndex(ze=>ze===document.activeElement);y.key===$?rt(X,M):y.key===z&&it(X,M)}},{onBlur:Ge,onKeyDown:Ye,onKeyUp:Me}=at({onKeyUp:Ve},{id:e,interactiveKeyCodes:[ee,te,z,$]}),j=y=>{y.preventDefault(),y.stopPropagation(),c==null||c(y)},Pe=()=>{A==null||A()};return a.jsx("div",{className:v["segment-container"],"data-position":s,...i,"data-appearance":V,"data-compact-spacing":w,children:a.jsxs("div",{id:e,role:"radio","aria-checked":p,"aria-label":C,className:v.segment,"data-segment-type":t?"icon":"label","data-selected":p,"data-compact-spacing":w,onKeyDown:Ye,onKeyUp:Me,onBlur:Ge,onFocus:Pe,onClick:j,tabIndex:G,ref:S,children:[p&&a.jsx(Z,{name:"check-small",appearance:"filled",size:w?20:24,className:v["selected-icon"],"data-compact-spacing":w}),a.jsx("div",{className:v["segment-content"],children:t?a.jsx(Z,{name:t,appearance:p?"filled":"outlined",size:w?20:24}):a.jsx("span",{className:v["segment-label"],children:n})}),et({showBadge:!!E,badgeContent:x,badgeCount:h,badgeIcon:u})&&a.jsx(tt,{count:h,content:x,icon:u,badgeType:b,size:B})]})})};We.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},segmentTabIndex:{required:!0,tsType:{name:"union",raw:"0 | -1",elements:[{name:"literal",value:"0"},{name:"literal",value:"-1"}]},description:""},onSegmentFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["CoreSegmentProps"]};const m=l.forwardRef(({options:e,onChange:t,selectedSegment:n,appearance:o="brand",isCompact:s=!1,...p},c)=>{var A;const h=l.useRef(null),[x,u]=l.useState(!0),[b,B]=l.useState(null),{indicatorStyle:E}=Ze(h,n);l.useEffect(()=>{const i=requestAnimationFrame(()=>u(!1));return()=>cancelAnimationFrame(i)},[]);const V=i=>{const S=i.currentTarget.getAttribute("id")||"";S!==n&&t(S)},w=i=>{var S;const C=i.relatedTarget;(S=h.current)!=null&&S.contains(C)||B(null)},G=(A=e[0])==null?void 0:A.id;return dt(e)?a.jsxs("div",{ref:i=>{h.current=i,typeof c=="function"?c(i):c&&(c.current=i)},role:"radiogroup",className:v["segmented-control"],"data-compact-spacing":s,"data-number-of-segments":e.length,onBlurCapture:w,...p,children:[a.jsx("span",{className:v["segment-selected-indicator"],"data-compact-spacing":s,"data-initial-animation-disabled":x,style:{left:E.left,top:E.top,width:E.width}}),e.map((i,C)=>a.jsx(We,{position:ot(C,e.length),onClick:V,isSelected:n===i.id,appearance:o,isCompact:s,segmentTabIndex:st({segmentId:i.id,selectedSegmentId:n,focusedSegmentId:b,fallbackTabStopSegmentId:G}),onSegmentFocus:()=>B(i.id),...i},`${i.id}-${C}`))]}):null});m.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreSegmentedControlProps","Omit"]};const ct=Object.keys(Qe),gt=Object.keys(Xe),It={title:"Composants/SegmentedControl/SegmentedControl",component:m,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}},appearance:{control:"select",options:["brand","neutral"]},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ct,...gt].sort((e,t)=>e.localeCompare(t))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]},isCompact:{control:"boolean"}}},args:{onClick:f(),appearance:"brand"}},g={args:{options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"},{labelText:"Option 3",id:"option3"}],onChange:f(),appearance:"brand",isCompact:!1},render:e=>{const[t,n]=l.useState("option1"),o=s=>{n(s)};return a.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})}},_={args:{...g.args,options:[{labelText:"Jour",id:"day"},{labelText:"Semaine en cours",id:"current-week"},{labelText:"Historique des consommations",id:"consumption-history"}]},render:e=>{const[t,n]=l.useState("day"),o=s=>{n(s)};return a.jsx("div",{style:{width:"420px"},children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})}},R={tags:["!autodocs"],args:g.args,render:e=>{const[t,n]=l.useState("option1");return a.jsxs("div",{"data-testid":"tab-navigation-fixture",style:{display:"flex",flexDirection:"column",gap:"8px",width:"420px"},children:[a.jsx("button",{type:"button","data-testid":"before-segmented-control",children:"Before control"}),a.jsx("div",{style:{width:"420px"},"data-testid":"segmented-control-story",children:a.jsx(m,{...e,onChange:n,selectedSegment:t})}),a.jsx("button",{type:"button","data-testid":"after-segmented-control",children:"After control"})]})},play:async({canvasElement:e})=>{const t=T(e),n=t.getByTestId("before-segmented-control"),o=t.getByTestId("after-segmented-control"),s=t.getByTestId("segmented-control-story"),p=u=>s.querySelector(`[role='radio']#${u}`),c=async u=>{await I(()=>{const b=p(u);r(b).not.toBeNull(),r(b).toHaveFocus()})},h=async u=>{await I(()=>{const b=p(u);r(b).toHaveAttribute("aria-checked","true"),r(b).toHaveAttribute("tabindex","0")})},x=u=>{s.querySelectorAll("[role='radio']").forEach(b=>{b.id===u?r(b).toHaveAttribute("tabindex","0"):r(b).toHaveAttribute("tabindex","-1")})};x("option1"),await d.click(n),await d.tab(),await c("option1"),await d.click(p("option2")),await h("option2"),await d.click(n),await d.tab(),await c("option2"),x("option2"),await d.tab(),await I(()=>r(o).toHaveFocus()),await d.tab({shift:!0}),await c("option2"),await d.tab({shift:!0}),await I(()=>r(n).toHaveFocus()),await d.click(p("option1")),await h("option1"),await c("option1"),await d.keyboard(P),await c("option2"),r(p("option2")).toHaveAttribute("aria-checked","false"),await d.keyboard($e),r(p("option2")).toHaveAttribute("aria-checked","true"),await d.keyboard(Ue),await d.keyboard(Je),r(p("option1")).toHaveAttribute("aria-checked","true"),await d.keyboard(P),await d.keyboard(P),await c("option3")}},H={tags:["!autodocs"],args:g.args,render:e=>{const[t,n]=l.useState("option1");return a.jsxs("div",{"data-testid":"tab-exit-end-of-page",style:{width:"420px"},children:[a.jsx("button",{type:"button","data-testid":"before-end-only",children:"Before end"}),a.jsx(m,{...e,onChange:n,selectedSegment:t})]})},play:async({canvasElement:e})=>{const t=T(e),n=t.getByTestId("before-end-only"),o=Array.from(t.getByTestId("tab-exit-end-of-page").querySelectorAll("[role='radio']")),s=o[o.length-1];await d.click(s),await I(()=>r(s).toHaveFocus()),await d.tab(),await I(()=>{r(n).not.toHaveFocus(),r(s).not.toHaveFocus()})}},F={args:{...g.args},render:e=>{const[t,n]=l.useState("option1"),o=s=>{n(s)};return a.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[a.jsx(m,{...e,onChange:o,selectedSegment:t}),a.jsx(m,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},k={args:{...g.args,isCompact:!0},render:e=>{const[t,n]=l.useState("option1"),o=s=>{n(s)};return a.jsxs("div",{style:{width:"420px",display:"flex",gap:"20px",flexDirection:"column"},"data-testid":"segmented-control-story",children:[a.jsx(m,{...e,onChange:o,selectedSegment:t}),a.jsx(m,{...e,onChange:o,selectedSegment:t,appearance:"neutral"})]})}},L={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2"}],onChange:f()},render:e=>{const[t,n]=l.useState("option1"),o=s=>{n(s)};return a.jsx("div",{style:{width:"420px"},children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})}},N={args:{...g.args,options:[{id:"agenda",icon:"view-agenda",labelText:"Vue agenda"},{id:"column",icon:"view-column",labelText:"Vue colonne"},{id:"grid",icon:"view-grid",labelText:"Vue grille"}],onChange:f()},render:e=>{const[t,n]=l.useState("agenda"),o=s=>{n(s)};return a.jsx("div",{style:{width:"420px"},children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})}},O={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=l.useState("option1"),o=s=>{n(s)};return a.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-with-badge",children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","Option 2, 5")}},D={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Option 2",id:"option2",showBadge:!0,badgeContent:"number",badgeCount:5,badgeType:"indicator",ariaLabel:"3 nouvelles alertes"}],onChange:f()},render:O.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","3 nouvelles alertes")}},q={args:{...g.args,options:[{labelText:"Option 1",id:"option1"},{labelText:"Alertes",id:"option2",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}],onChange:f()},render:O.render,play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-with-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","Alertes. Notification")}},K={tags:["!autodocs"],args:{options:[{id:"agenda",icon:"view-agenda"},{id:"column",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}],onChange:f()},render:e=>{const[t,n]=l.useState("agenda"),o=s=>{n(s)};return a.jsx("div",{style:{width:"380px"},"data-testid":"segmented-control-icon-badge",children:a.jsx(m,{...e,onChange:o,selectedSegment:t})})},play:async({canvasElement:e})=>{const t=Array.from(T(e).getByTestId("segmented-control-icon-badge").querySelectorAll("[role='radio']"));r(t[1]).toHaveAttribute("aria-label","view-column. Notifications, 3")}},U=[{id:"labelText",title:"labelText only",expectedAriaLabel:"Libellé seul",options:[{labelText:"Référence",id:"ref"},{labelText:"Libellé seul",id:"target"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{labelText:"Référence",id:"ref"},{labelText:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes"}]},{id:"labelTextNumberBadge",title:"labelText + number badge",expectedAriaLabel:"Alertes, 3",options:[{labelText:"Référence",id:"ref"},{labelText:"Alertes",id:"target",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without labelText",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator"}]}],W={tags:["!autodocs"],args:{...g.args,onChange:f()},render:()=>{const[e,t]=l.useState(Object.fromEntries(U.map(n=>[n.id,"ref"])));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:420,padding:8},"data-testid":"accessible-name-validation",children:[a.jsxs("p",{style:{margin:0,fontSize:14},children:["Focus the ",a.jsx("strong",{children:"second segment"})," of each control (right). Compare with the expected"," ",a.jsx("code",{children:"aria-label"})," below (screen reader or devtools)."]}),U.map(n=>a.jsxs("section",{"aria-labelledby":`case-${n.id}-title`,children:[a.jsx("h3",{id:`case-${n.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:n.title}),a.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Expected 2nd segment: ",a.jsx("code",{children:n.expectedAriaLabel})]}),a.jsx(m,{options:[...n.options],selectedSegment:e[n.id],onChange:o=>t(s=>({...s,[n.id]:o}))})]},n.id))]})},play:async({canvasElement:e})=>{const t=T(e).getByTestId("accessible-name-validation").querySelectorAll("section");U.forEach((n,o)=>{const s=Array.from(t[o].querySelectorAll("[role='radio']"));r(s[1]).toHaveAttribute("aria-label",n.expectedAriaLabel)})}};var ne,ae,oe;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,re,ie;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var de,le,ce;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(le=R.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ge,me,pe;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(pe=(me=H.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,be,ye;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ye=(be=F.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var he,fe,xe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Se,ve,we;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ce,Te,Ee;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=N.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ae,Ie,Oe;O.parameters={...O.parameters,docs:{...(Ae=O.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Be,je,_e;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(_e=(je=D.parameters)==null?void 0:je.docs)==null?void 0:_e.source}}};var Re,He,Fe;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Fe=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Fe.source}}};var ke,Le,Ne;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Ne=(Le=K.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var De,qe,Ke;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ke=(qe=W.parameters)==null?void 0:qe.docs)==null?void 0:Ke.source}}};const Ot=["Default","DifferentLabelTextLengths","KeyboardInteraction","TabExitEndOfPage","Appearance","CompactSpacing","TwoOptions","Icons","WithBadge","WithBadgeCustomAriaLabel","WithBadgeEmptyDefaultAriaLabel","IconOnlyWithBadge","AccessibleNameValidation"];export{W as AccessibleNameValidation,F as Appearance,k as CompactSpacing,g as Default,_ as DifferentLabelTextLengths,K as IconOnlyWithBadge,N as Icons,R as KeyboardInteraction,H as TabExitEndOfPage,L as TwoOptions,O as WithBadge,D as WithBadgeCustomAriaLabel,q as WithBadgeEmptyDefaultAriaLabel,Ot as __namedExportsOrder,It as default};
