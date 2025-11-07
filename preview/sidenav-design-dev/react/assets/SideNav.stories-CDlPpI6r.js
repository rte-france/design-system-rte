import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Ke,c as ze}from"./keyboard-test.constants-fmK-LbIX.js";import{w as h,u as c,e as r,a as We}from"./index-DCXJbAaW.js";import{r as T}from"./index-G8LIXM5I.js";import{S as L,E as G}from"./keyboard.constants-ep-ZHn_7.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-DHBKFFrr.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as Y}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-DCsmKs0i.js";import{u as qe}from"./useActiveKeyboard-BPEscCvd.js";import{c as U}from"./index-DSdvzt-y.js";import{B as Le}from"./BaseSideNav-DyUHVuyW.js";import{N as $}from"./NavItem-D73XQCZq.js";import{N as Ge}from"./NavMenu-U6pjG-W8.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const Ye="_sideNavContainer_gihz1_3",Ue="_sideNavContent_gihz1_11",$e="_sideNav_gihz1_3",Je="_neutral_gihz1_30",Qe="_sideNavHeaderContainer_gihz1_34",Xe="_collapsed_gihz1_46",Ze="_sideNavHeader_gihz1_34",et="_sideNavHeaderTitleContainer_gihz1_71",tt="_sideNavHeaderTitle_gihz1_71",at="_sideNavHeaderIdentifier_gihz1_109",nt="_hidden_gihz1_144",st="_sideNavHeaderVersion_gihz1_150",ot="_sideNavBody_gihz1_179",it="_sideNavFooterContainer_gihz1_199",rt="_sideNavFooter_gihz1_199",ct="_collapsibleSection_gihz1_212",p={sideNavContainer:Ye,sideNavContent:Ue,sideNav:$e,neutral:Je,sideNavHeaderContainer:Qe,collapsed:Xe,sideNavHeader:Ze,sideNavHeaderTitleContainer:et,sideNavHeaderTitle:tt,sideNavHeaderIdentifier:at,hidden:nt,sideNavHeaderVersion:st,sideNavBody:ot,sideNavFooterContainer:it,sideNavFooter:rt,collapsibleSection:ct},lt=300,H=T.forwardRef(({size:a="m",collapsible:n,children:s,headerConfig:e,items:t,collapsed:o=!1,appearance:l="brand",activeItem:g},x)=>{const[y,Re]=T.useState(o),[K,z]=T.useState(!0);T.useEffect(()=>{if(y)z(!1);else{const v=setTimeout(()=>{z(!0)},lt);return()=>clearTimeout(v)}},[y]);const Fe=()=>{Re(!y)},Me=y?"arrow-double-right":"arrow-double-left",je=v=>{[L,G].includes(v.key)&&(v.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:Ve}=qe({onKeyDown:je},{interactiveKeyCodes:[L,G]}),V=i.jsxs("div",{className:p.sideNavHeaderTitle,children:[i.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),y?"":i.jsx("h1",{className:K?"":p.hidden,children:e==null?void 0:e.title})]}),W=e==null?void 0:e.ariaLabel,Oe=e!=null&&e.link?i.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":W,children:V}):e!=null&&e.onClick?i.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:Ve,role:"button","aria-label":W,children:V}):i.jsx("div",{className:p.sideNavHeaderTitleContainer,children:V});return i.jsx(Le,{ref:x,size:a,collapsible:n,collapsed:y,appearance:l,header:i.jsxs("div",{className:p.sideNavHeaderContainer,children:[i.jsxs("div",{className:U(p.sideNavHeader,p[l],y&&p.collapsed),children:[Oe,i.jsx("div",{className:U(p.sideNavHeaderVersion,!K&&p.hidden),children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(Y,{appearance:l})]}),body:i.jsx("div",{className:p.sideNavBody,children:i.jsx("ul",{children:t==null?void 0:t.map(v=>{var q;return((q=v.items)==null?void 0:q.length)?i.jsx(Ge,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:y,link:v.link,onClick:v.onClick,items:v.items||[],appearance:l},v.id):i.jsx("li",{children:i.jsx($,{id:v.id,label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:y,link:v.link,onClick:v.onClick,appearance:l,active:v.id===g&&!!g})},v.id)})})}),footer:n&&i.jsxs("div",{className:p.sideNavFooterContainer,children:[i.jsx(Y,{appearance:l}),i.jsx("div",{className:p.sideNavFooter,children:i.jsx("div",{className:p.collapsibleSection,children:i.jsx($,{id:"collapse-button",icon:Me,showIcon:!0,collapsed:y,onClick:Fe,label:y?"Ouvrir le menu":"Réduire le menu",appearance:l,role:"button"})})})]}),children:s})});H.displayName="SideNav";H.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},collapsed:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const sa={title:"SideNav",id:"SideNav",component:H,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>i.jsx(H,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,collapsed:a.collapsed,activeItem:a.activeItem,children:dt})},dt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),j=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],O=[{id:"home",label:"Home",icon:"home",showIcon:!0,link:"/home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],E={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},vt={...E},pt={...E,onClick:()=>{console.log("Header clicked")}},d=(a,n)=>{const s=h(a),e=s.queryByRole("link",{name:n});if(e)return e;const t=s.queryByText(n);if(t){const o=t.closest("li");if(o){const l=o.querySelector("a");if(l)return l;const x=Array.from(o.querySelectorAll("span")).find(y=>y.hasAttribute("tabindex"));if(x)return x}}return null},De=(a,n)=>{const s=a.querySelector('[class*="sideNavBody"]');if(!s)return null;const t=Array.from(s.querySelectorAll("li"))[n];if(t){const o=t.querySelector("a");if(o)return o;const g=Array.from(t.querySelectorAll("span")).find(x=>x.hasAttribute("tabindex"));if(g)return g}return null},k=(a,n="MA")=>{var o;return(o=h(a).getByText(n).parentElement)==null?void 0:o.parentElement},u=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},N=(a,n)=>{const s=d(a,n);s&&r(s).not.toHaveFocus()},b=(a,n)=>{const s=d(a,n);s&&r(s).toHaveAttribute("tabindex","-1")},w=(a,n)=>{const s=d(a,n);s&&r(s).toHaveAttribute("tabindex","0")},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:j}},S={args:{...m.args,collapsible:!0}},C={args:{...m.args,headerConfig:E}},A={args:{...m.args,headerConfig:E,items:O,collapsible:!0}},B={args:{...m.args,headerConfig:E,items:O,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{b(e,"Overview"),b(e,"Reports"),b(e,"Analytics"),b(e,"General"),b(e,"Privacy"),b(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),u(t),await c.tab();const o=d(e,"Dashboard");u(o),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await c.tab();const l=d(e,"Settings");u(l),N(e,"General"),N(e,"Privacy"),N(e,"Advanced"),await c.tab();const g=d(e,"Profile");u(g)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),w(e,"Overview"),w(e,"Reports"),w(e,"Analytics"),await c.tab();const o=d(e,"Overview");u(o),await c.tab();const l=d(e,"Reports");u(l),await c.tab();const g=d(e,"Analytics");u(g)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),b(e,"Overview"),b(e,"Reports"),b(e,"Analytics"),await c.tab();const o=d(e,"Settings");u(o),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),w(e,"General"),w(e,"Privacy"),w(e,"Advanced"),b(e,"Security"),b(e,"API Keys"),await c.tab();const o=d(e,"General");u(o),await c.tab();const l=d(e,"Privacy");u(l),await c.tab();const g=d(e,"Advanced");u(g),N(e,"Security"),N(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),w(e,"Security"),w(e,"API Keys"),await c.tab();const o=d(e,"Security");u(o),await c.tab();const l=d(e,"API Keys");u(l)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),b(e,"Security"),b(e,"API Keys"),await c.tab();const o=d(e,"Profile");u(o),N(e,"Security"),N(e,"API Keys")})}},I={args:{...m.args,headerConfig:{...E,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=k(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},_={args:{...m.args,headerConfig:vt,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=k(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=k(e);t==null||t.focus(),r(t).toHaveFocus()})}},D={args:{...m.args,headerConfig:{...pt,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=k(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=k(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(Ke),await c.keyboard(ze)})}},P={args:{...m.args,headerConfig:E,items:j,collapsible:!0,collapsed:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=De(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(l=>setTimeout(l,200));const o=h(document.body).queryByRole("tooltip",{name:"Home"});r(o).not.toBeNull(),r(o).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await new Promise(o=>setTimeout(o,200));const t=h(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await new Promise(o=>setTimeout(o,200));const t=h(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},R={args:{...m.args,headerConfig:E,items:O,collapsible:!0,collapsed:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to menu items",async()=>{const t=De(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await new Promise(l=>setTimeout(l,200));const o=h(document.body).queryByRole("tooltip",{name:"Dashboard"});r(o).not.toBeNull(),r(o).toHaveTextContent("Dashboard")})}},mt=(a,n)=>a.querySelector(`#${n}`),ut=a=>Array.from(a.classList).some(s=>s.includes("active")),Pe=async(a,n,s)=>{await We(()=>{const e=a.getByRole("navigation"),t=mt(e,n);r(t).not.toBeNull(),r(ut(t)).toBe(s)})},J=(a,n)=>Pe(a,n,!0),f=(a,n)=>Pe(a,n,!1),F={args:{...m.args,headerConfig:E,items:j,activeItem:"home"},decorators:[(a,n)=>{const[s,e]=T.useState(n.args.activeItem),t=j.map(o=>({...o,onClick:()=>e(o.id)}));return i.jsx("div",{children:i.jsx(a,{args:{...n.args,items:t,activeItem:s}},s)})}],play:async({canvasElement:a,step:n})=>{const s=h(a);await n("Verify Home has active class initially",async()=>{J(s,"home"),f(s,"dashboard"),f(s,"analytics"),f(s,"settings"),f(s,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=s.getByRole("navigation"),t=d(e,"Dashboard");r(t).not.toBeNull(),await c.click(t),f(s,"home"),J(s,"dashboard"),f(s,"analytics"),f(s,"settings"),f(s,"profile")})}},yt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."})]}),M={args:{...m.args,collapsible:!0},render:a=>i.jsx(H,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,collapsed:a.collapsed,activeItem:a.activeItem,children:yt})};var Q,X,Z;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(Z=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ae;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ae=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,re,ce;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(ce=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var le,de,ve;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ve=(de=B.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var pe,me,ue;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,Ne,be;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};var he,ge,Ee;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Ee=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:Ee.source}}};var we,fe,xe;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    collapsible: true,
    collapsed: true
  },
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
}`,...(xe=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Te,He,ke;R.parameters={...R.parameters,docs:{...(Te=R.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true,
    collapsed: true
  },
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
}`,...(ke=(He=R.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var Se,Ce,Ae;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    activeItem: "home"
  },
  decorators: [(Story, context) => {
    const [activeItem, setActiveItem] = useState(context.args.activeItem);
    const itemsWithOnClick = navigationItems.map(item => {
      return {
        ...item,
        onClick: () => setActiveItem(item.id)
      };
    });
    return <div>
          <Story key={activeItem} args={{
        ...context.args,
        items: itemsWithOnClick,
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
}`,...(Ae=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:Ae.source}}};var Be,Ie,_e;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(_e=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};const oa=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar"];export{F as ActiveItemState,P as CollapsedTooltip,R as CollapsedTooltipWithNested,S as Collapsible,m as Default,I as HeaderClickability,_ as HeaderWithLink,D as HeaderWithOnClick,C as HeaderWithVersion,B as KeyboardNavigation,M as ScrollBar,A as WithNestedMenus,oa as __namedExportsOrder,sa as default};
