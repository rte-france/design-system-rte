import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{T as We,c as Le}from"./keyboard-test.constants-fmK-LbIX.js";import{w as b,u as l,e as r,a as Ge}from"./index-DCXJbAaW.js";import{r as T}from"./index-G8LIXM5I.js";import{S as Y,E as U}from"./keyboard.constants-ep-ZHn_7.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-DHBKFFrr.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as $}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-DCsmKs0i.js";import{u as ze}from"./useActiveKeyboard-BPEscCvd.js";import{c as J}from"./index-DSdvzt-y.js";import{B as Ye}from"./BaseSideNav-o-15mOhv.js";import{N as Q}from"./NavItem-D73XQCZq.js";import{N as Ue}from"./NavMenu-Z04N5Dvv.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const $e="_sideNavContent_4hum9_3",Je="_sideNav_4hum9_3",Qe="_neutral_4hum9_22",Xe="_sideNavHeaderContainer_4hum9_26",Ze="_collapsed_4hum9_38",et="_sideNavHeader_4hum9_26",tt="_sideNavHeaderTitleContainer_4hum9_63",at="_sideNavHeaderTitle_4hum9_63",nt="_sideNavHeaderIdentifier_4hum9_101",st="_hidden_4hum9_136",ot="_sideNavHeaderVersion_4hum9_142",it="_sideNavBody_4hum9_171",rt="_sideNavFooterContainer_4hum9_191",lt="_sideNavFooter_4hum9_191",ct="_collapsibleSection_4hum9_204",p={sideNavContent:$e,sideNav:Je,neutral:Qe,sideNavHeaderContainer:Xe,collapsed:Ze,sideNavHeader:et,sideNavHeaderTitleContainer:tt,sideNavHeaderTitle:at,sideNavHeaderIdentifier:nt,hidden:st,sideNavHeaderVersion:ot,sideNavBody:it,sideNavFooterContainer:rt,sideNavFooter:lt,collapsibleSection:ct},dt=300,H=T.forwardRef(({size:a="m",collapsible:n,children:s,headerConfig:e,items:t,collapsed:i,defaultCollapsed:m=!1,onCollapsedChange:y,appearance:g="brand",activeItem:C},Fe)=>{const[E,K]=T.useState(i??m),[W,L]=T.useState(!0);T.useEffect(()=>{i!==void 0&&K(i)},[i]),T.useEffect(()=>{if(E)L(!1);else{const c=setTimeout(()=>{L(!0)},dt);return()=>clearTimeout(c)}},[E]);const Me=()=>{const c=!E;i===void 0&&K(c),y==null||y(c)},qe=E?"arrow-double-right":"arrow-double-left",Ve=c=>{[Y,U].includes(c.key)&&(c.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:Oe}=ze({onKeyDown:Ve},{interactiveKeyCodes:[Y,U]}),V=o.jsxs("div",{className:p.sideNavHeaderTitle,children:[o.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),E?"":o.jsx("h1",{className:W?"":p.hidden,children:e==null?void 0:e.title})]}),G=e==null?void 0:e.ariaLabel,Ke=e!=null&&e.link?o.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":G,children:V}):e!=null&&e.onClick?o.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:Oe,role:"button","aria-label":G,children:V}):o.jsx("div",{className:p.sideNavHeaderTitleContainer,children:V});return o.jsx(Ye,{ref:Fe,size:a,collapsible:n,collapsed:E,appearance:g,header:o.jsxs("div",{className:p.sideNavHeaderContainer,children:[o.jsxs("div",{className:J(p.sideNavHeader,p[g],E&&p.collapsed),children:[Ke,o.jsx("div",{className:J(p.sideNavHeaderVersion,!W&&p.hidden),children:o.jsx("span",{children:e==null?void 0:e.version})})]}),o.jsx($,{appearance:g})]}),body:o.jsx("div",{className:p.sideNavBody,children:o.jsx("ul",{children:t==null?void 0:t.map(c=>{var z;return((z=c.items)==null?void 0:z.length)?o.jsx(Ue,{label:c.label,icon:c.icon,showIcon:c.showIcon,collapsed:E,link:c.link,onClick:c.onClick,items:c.items||[],appearance:g},c.id):o.jsx("li",{children:o.jsx(Q,{id:c.id,label:c.label,icon:c.icon,showIcon:c.showIcon,collapsed:E,link:c.link,onClick:c.onClick,appearance:g,active:c.id===C&&!!C})},c.id)})})}),footer:n&&o.jsxs("div",{className:p.sideNavFooterContainer,children:[o.jsx($,{appearance:g}),o.jsx("div",{className:p.sideNavFooter,children:o.jsx("div",{className:p.collapsibleSection,children:o.jsx(Q,{id:"collapse-button",icon:qe,showIcon:!0,collapsed:E,onClick:Me,label:E?"Ouvrir le menu":"Réduire le menu",appearance:g,role:"button"})})})]}),children:s})});H.displayName="SideNav";H.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const oa={title:"SideNav",id:"SideNav",component:H,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>o.jsx(H,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,collapsed:a.collapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:mt})},mt=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),q=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],O=[{id:"home",label:"Home",icon:"home",showIcon:!0,link:"/home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],w={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},pt={...w},vt={...w,onClick:()=>{console.log("Header clicked")}},d=(a,n)=>{const s=b(a),e=s.queryByRole("link",{name:n});if(e)return e;const t=s.queryByText(n);if(t){const i=t.closest("li");if(i){const m=i.querySelector("a");if(m)return m;const g=Array.from(i.querySelectorAll("span")).find(C=>C.hasAttribute("tabindex"));if(g)return g}}return null},je=(a,n)=>{const s=a.querySelector('[class*="sideNavBody"]');if(!s)return null;const t=Array.from(s.querySelectorAll("li"))[n];if(t){const i=t.querySelector("a");if(i)return i;const y=Array.from(t.querySelectorAll("span")).find(g=>g.hasAttribute("tabindex"));if(y)return y}return null},S=(a,n="MA")=>{var i;return(i=b(a).getByText(n).parentElement)==null?void 0:i.parentElement},u=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},N=(a,n)=>{const s=d(a,n);s&&r(s).not.toHaveFocus()},h=(a,n)=>{const s=d(a,n);s&&r(s).toHaveAttribute("tabindex","-1")},f=(a,n)=>{const s=d(a,n);s&&r(s).toHaveAttribute("tabindex","0")},v={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:q}},B={args:{...v.args,collapsible:!0}},k={args:{...v.args,headerConfig:w}},A={args:{...v.args,headerConfig:w,items:O,collapsible:!0}},I={args:{...v.args,headerConfig:w,items:O,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{h(e,"Overview"),h(e,"Reports"),h(e,"Analytics"),h(e,"General"),h(e,"Privacy"),h(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),u(t),await l.tab();const i=d(e,"Dashboard");u(i),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await l.tab();const m=d(e,"Settings");u(m),N(e,"General"),N(e,"Privacy"),N(e,"Advanced"),await l.tab();const y=d(e,"Profile");u(y)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await l.click(t),f(e,"Overview"),f(e,"Reports"),f(e,"Analytics"),await l.tab();const i=d(e,"Overview");u(i),await l.tab();const m=d(e,"Reports");u(m),await l.tab();const y=d(e,"Analytics");u(y)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await l.click(t),h(e,"Overview"),h(e,"Reports"),h(e,"Analytics"),await l.tab();const i=d(e,"Settings");u(i),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await l.click(t),f(e,"General"),f(e,"Privacy"),f(e,"Advanced"),h(e,"Security"),h(e,"API Keys"),await l.tab();const i=d(e,"General");u(i),await l.tab();const m=d(e,"Privacy");u(m),await l.tab();const y=d(e,"Advanced");u(y),N(e,"Security"),N(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await l.click(t),f(e,"Security"),f(e,"API Keys"),await l.tab();const i=d(e,"Security");u(i),await l.tab();const m=d(e,"API Keys");u(m)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await l.click(t),h(e,"Security"),h(e,"API Keys"),await l.tab();const i=d(e,"Profile");u(i),N(e,"Security"),N(e,"API Keys")})}},_={args:{...v.args,headerConfig:{...w,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=S(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},D={args:{...v.args,headerConfig:pt,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=S(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=S(e);t==null||t.focus(),r(t).toHaveFocus()})}},P={args:{...v.args,headerConfig:{...vt,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=S(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await l.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=S(e);t==null||t.focus(),r(t).toHaveFocus(),await l.keyboard(We),await l.keyboard(Le)})}},j={args:{...v.args,headerConfig:w,items:q,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[s,e]=T.useState(n.args.collapsed??!0);return o.jsx("div",{children:o.jsx(a,{args:{...n.args,collapsed:s,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=je(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(m=>setTimeout(m,200));const i=b(document.body).queryByRole("tooltip",{name:"Home"});r(i).not.toBeNull(),r(i).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await l.tab(),await new Promise(i=>setTimeout(i,200));const t=b(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await l.tab(),await l.tab(),await l.tab(),await new Promise(i=>setTimeout(i,200));const t=b(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},R={args:{...v.args,headerConfig:w,items:O,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[s,e]=T.useState(n.args.collapsed??!0);return o.jsx("div",{children:o.jsx(a,{args:{...n.args,collapsed:s,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=b(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to menu items",async()=>{const t=je(e,1);r(t).not.toBeNull(),await l.tab(),await l.tab(),await l.tab(),await new Promise(m=>setTimeout(m,200));const i=b(document.body).queryByRole("tooltip",{name:"Dashboard"});r(i).not.toBeNull(),r(i).toHaveTextContent("Dashboard")})}},ut=(a,n)=>a.querySelector(`#${n}`),yt=a=>Array.from(a.classList).some(s=>s.includes("active")),Re=async(a,n,s)=>{await Ge(()=>{const e=a.getByRole("navigation"),t=ut(e,n);r(t).not.toBeNull(),r(yt(t)).toBe(s)})},X=(a,n)=>Re(a,n,!0),x=(a,n)=>Re(a,n,!1),F={args:{...v.args,headerConfig:w,items:q,activeItem:"home",collapsible:!0},decorators:[(a,n)=>{const[s,e]=T.useState(n.args.activeItem),t=q.map(i=>({...i,onClick:()=>e(i.id),link:void 0}));return o.jsx("div",{children:o.jsx(a,{args:{...n.args,items:t,activeItem:s}})})}],play:async({canvasElement:a,step:n})=>{const s=b(a);await n("Verify Home has active class initially",async()=>{X(s,"home"),x(s,"dashboard"),x(s,"analytics"),x(s,"settings"),x(s,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=s.getByRole("navigation"),t=d(e,"Dashboard");r(t).not.toBeNull(),await l.click(t),x(s,"home"),X(s,"dashboard"),x(s,"analytics"),x(s,"settings"),x(s,"profile")})}},Nt=o.jsxs("div",{style:{padding:"2rem"},children:[o.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),o.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),M={args:{...v.args,collapsible:!0},render:a=>o.jsx(H,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,collapsed:a.collapsed,activeItem:a.activeItem,children:Nt})};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(se=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,re;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(re=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,ce,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ve;I.parameters={...I.parameters,docs:{...(me=I.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Navigate through navigation when all menus are closed", async () => {
      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");
      expectElementToBeSkipped(sideNav, "General");
      expectElementToBeSkipped(sideNav, "Privacy");
      expectElementToBeSkipped(sideNav, "Advanced");
      const homeElement = getNavElement(sideNav, "Home");
      homeElement?.focus();
      expectElementToHaveFocus(homeElement);
      await userEvent.tab();
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      expectElementToHaveFocus(dashboardMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "General");
      expectElementNotToHaveFocus(sideNav, "Privacy");
      expectElementNotToHaveFocus(sideNav, "Advanced");
      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
    });
    await step("Open Dashboard menu and verify nested items are accessible", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);
      expectElementToBeAccessible(sideNav, "Overview");
      expectElementToBeAccessible(sideNav, "Reports");
      expectElementToBeAccessible(sideNav, "Analytics");
      await userEvent.tab();
      const overviewElement = getNavElement(sideNav, "Overview");
      expectElementToHaveFocus(overviewElement);
      await userEvent.tab();
      const reportsElement = getNavElement(sideNav, "Reports");
      expectElementToHaveFocus(reportsElement);
      await userEvent.tab();
      const analyticsElement = getNavElement(sideNav, "Analytics");
      expectElementToHaveFocus(analyticsElement);
    });
    await step("Close Dashboard menu and verify nested items are skipped again", async () => {
      const dashboardMenu = getNavElement(sideNav, "Dashboard");
      await userEvent.click(dashboardMenu!);
      expectElementToBeSkipped(sideNav, "Overview");
      expectElementToBeSkipped(sideNav, "Reports");
      expectElementToBeSkipped(sideNav, "Analytics");
      await userEvent.tab();
      const settingsMenu = getNavElement(sideNav, "Settings");
      expectElementToHaveFocus(settingsMenu);
      expectElementNotToHaveFocus(sideNav, "Overview");
      expectElementNotToHaveFocus(sideNav, "Reports");
      expectElementNotToHaveFocus(sideNav, "Analytics");
    });
    await step("Open Settings menu and verify nested items are accessible", async () => {
      const settingsMenu = getNavElement(sideNav, "Settings");
      await userEvent.click(settingsMenu!);
      expectElementToBeAccessible(sideNav, "General");
      expectElementToBeAccessible(sideNav, "Privacy");
      expectElementToBeAccessible(sideNav, "Advanced");
      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");
      await userEvent.tab();
      const generalElement = getNavElement(sideNav, "General");
      expectElementToHaveFocus(generalElement);
      await userEvent.tab();
      const privacyElement = getNavElement(sideNav, "Privacy");
      expectElementToHaveFocus(privacyElement);
      await userEvent.tab();
      const advancedMenu = getNavElement(sideNav, "Advanced");
      expectElementToHaveFocus(advancedMenu);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });
    await step("Open Advanced menu and verify deeply nested items are accessible", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);
      expectElementToBeAccessible(sideNav, "Security");
      expectElementToBeAccessible(sideNav, "API Keys");
      await userEvent.tab();
      const securityElement = getNavElement(sideNav, "Security");
      expectElementToHaveFocus(securityElement);
      await userEvent.tab();
      const apiKeysElement = getNavElement(sideNav, "API Keys");
      expectElementToHaveFocus(apiKeysElement);
    });
    await step("Close Advanced menu and verify deeply nested items are skipped", async () => {
      const advancedMenu = getNavElement(sideNav, "Advanced");
      await userEvent.click(advancedMenu!);
      expectElementToBeSkipped(sideNav, "Security");
      expectElementToBeSkipped(sideNav, "API Keys");
      await userEvent.tab();
      const profileElement = getNavElement(sideNav, "Profile");
      expectElementToHaveFocus(profileElement);
      expectElementNotToHaveFocus(sideNav, "Security");
      expectElementNotToHaveFocus(sideNav, "API Keys");
    });
  }
}`,...(ve=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ue,ye,Ne;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...defaultHeaderConfig,
      link: null
    },
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify header is not clickable when no link or onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      expect(headerTitleContainer).not.toHaveAttribute("href");
      expect(headerTitleContainer).not.toHaveAttribute("role", "button");
      expect(headerTitleContainer).not.toHaveAttribute("tabindex");
    });
  }
}`,...(Ne=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var he,be,ge;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: headerConfigWithLink,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify header is a link when link prop is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("A");
      expect(headerTitleContainer).toHaveAttribute("href", "/");
      expect(headerTitleContainer).toHaveStyle({
        cursor: "pointer"
      });
    });
    await step("Verify header is keyboard navigable", async () => {
      const headerLink = getHeaderTitleContainer(sideNav);
      headerLink?.focus();
      expect(headerLink).toHaveFocus();
    });
  }
}`,...(ge=(be=D.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Ee,we,fe;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: {
      ...headerConfigWithOnClick,
      link: null
    },
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify header is clickable button when onClick is provided", async () => {
      const headerTitleContainer = getHeaderTitleContainer(sideNav);
      expect(headerTitleContainer).not.toBeNull();
      expect(headerTitleContainer?.tagName).toBe("DIV");
      await userEvent.click(headerTitleContainer!);
      expect(headerTitleContainer).toHaveStyle({
        cursor: "pointer"
      });
    });
    await step("Verify header is keyboard navigable and responds to Enter/Space", async () => {
      const headerButton = getHeaderTitleContainer(sideNav);
      headerButton?.focus();
      expect(headerButton).toHaveFocus();
      await userEvent.keyboard(TESTING_ENTER_KEY);
      await userEvent.keyboard(TESTING_SPACE_KEY);
    });
  }
}`,...(fe=(we=P.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var xe,Te,He;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true
  },
  decorators: [(Story, context) => {
    const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
    return <div>
          <Story args={{
        ...context.args,
        collapsed,
        onCollapsedChange: setCollapsed
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify tooltips appear when tabbing to navigation items", async () => {
      const homeElement = getNavElementInCollapsedState(sideNav, 0);
      expect(homeElement).not.toBeNull();
      homeElement?.focus();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Home"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Home");
    });
    await step("Verify tooltips appear when tabbing to next navigation item", async () => {
      await userEvent.tab();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Dashboard"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
    await step("Verify tooltips appear for items with links when tabbing", async () => {
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Profile"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Profile");
    });
  }
}`,...(He=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var Se,Ce,Be;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true
  },
  decorators: [(Story, context) => {
    const [collapsed, setCollapsed] = useState(context.args.collapsed ?? true);
    return <div>
          <Story args={{
        ...context.args,
        collapsed,
        onCollapsedChange: setCollapsed
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify tooltips appear when tabbing to menu items", async () => {
      const dashboardMenu = getNavElementInCollapsedState(sideNav, 1);
      expect(dashboardMenu).not.toBeNull();
      await userEvent.tab();
      await userEvent.tab();
      await userEvent.tab();
      await new Promise(resolve => setTimeout(resolve, 200));
      const tooltip = within(document.body).queryByRole("tooltip", {
        name: "Dashboard"
      });
      expect(tooltip).not.toBeNull();
      expect(tooltip).toHaveTextContent("Dashboard");
    });
  }
}`,...(Be=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ke,Ae,Ie;F.parameters={...F.parameters,docs:{...(ke=F.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home",
    collapsible: true
  },
  decorators: [(Story, context) => {
    const [activeItem, setActiveItem] = useState(context.args.activeItem);
    const itemsWithOnClick = navigationItems.map(item => {
      return {
        ...item,
        onClick: () => setActiveItem(item.id),
        link: undefined
      };
    });
    return <div>
          <Story args={{
        ...context.args,
        items: itemsWithOnClick as NavItemProps[],
        activeItem
      }} />
        </div>;
  }],
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Verify Home has active class initially", async () => {
      expectNavItemToBeActive(canvas, "home");
      expectNavItemNotToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });
    await step("Change active item to Dashboard and verify active class", async () => {
      const sideNav = canvas.getByRole("navigation");
      const dashboardElement = getNavElement(sideNav, "Dashboard");
      expect(dashboardElement).not.toBeNull();
      await userEvent.click(dashboardElement!);
      expectNavItemNotToBeActive(canvas, "home");
      expectNavItemToBeActive(canvas, "dashboard");
      expectNavItemNotToBeActive(canvas, "analytics");
      expectNavItemNotToBeActive(canvas, "settings");
      expectNavItemNotToBeActive(canvas, "profile");
    });
  }
}`,...(Ie=(Ae=F.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.source}}};var _e,De,Pe;M.parameters={...M.parameters,docs:{...(_e=M.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(Pe=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};const ia=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar"];export{F as ActiveItemState,j as CollapsedTooltip,R as CollapsedTooltipWithNested,B as Collapsible,v as Default,_ as HeaderClickability,D as HeaderWithLink,P as HeaderWithOnClick,k as HeaderWithVersion,I as KeyboardNavigation,M as ScrollBar,A as WithNestedMenus,ia as __namedExportsOrder,oa as default};
