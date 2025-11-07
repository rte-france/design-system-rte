import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Me,c as Ve}from"./keyboard-test.constants-fmK-LbIX.js";import{w as h,u as c,e as i,a as je}from"./index-DCXJbAaW.js";import{r as T}from"./index-G8LIXM5I.js";import{S as L,E as G}from"./keyboard.constants-ep-ZHn_7.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-DHBKFFrr.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as Y}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-DCsmKs0i.js";import{u as Oe}from"./useActiveKeyboard-BPEscCvd.js";import{c as z}from"./index-DSdvzt-y.js";import{B as Ke}from"./BaseSideNav-Du5ZaKH4.js";import{N as U}from"./NavItem-D73XQCZq.js";import{N as qe}from"./NavMenu-U6pjG-W8.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const We="_sideNavContainer_1ayt8_3",Le="_sideNav_1ayt8_3",Ge="_neutral_1ayt8_25",Ye="_sideNavHeaderContainer_1ayt8_29",ze="_collapsed_1ayt8_41",Ue="_sideNavHeader_1ayt8_29",$e="_sideNavHeaderTitleContainer_1ayt8_66",Je="_sideNavHeaderTitle_1ayt8_66",Qe="_sideNavHeaderIdentifier_1ayt8_104",Xe="_hidden_1ayt8_139",Ze="_sideNavHeaderVersion_1ayt8_145",et="_sideNavBody_1ayt8_174",tt="_sideNavFooterContainer_1ayt8_194",at="_sideNavFooter_1ayt8_194",nt="_collapsibleSection_1ayt8_207",p={sideNavContainer:We,sideNav:Le,neutral:Ge,sideNavHeaderContainer:Ye,collapsed:ze,sideNavHeader:Ue,sideNavHeaderTitleContainer:$e,sideNavHeaderTitle:Je,sideNavHeaderIdentifier:Qe,hidden:Xe,sideNavHeaderVersion:Ze,sideNavBody:et,sideNavFooterContainer:tt,sideNavFooter:at,collapsibleSection:nt},st=300,F=T.forwardRef(({size:n="m",collapsible:a,children:s,headerConfig:e,items:t,collapsed:o=!1,appearance:l="brand",activeItem:g},x)=>{const[y,Ie]=T.useState(o),[O,K]=T.useState(!0);T.useEffect(()=>{if(y)K(!1);else{const v=setTimeout(()=>{K(!0)},st);return()=>clearTimeout(v)}},[y]);const _e=()=>{Ie(!y)},De=y?"arrow-double-right":"arrow-double-left",Re=v=>{[L,G].includes(v.key)&&(v.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:Pe}=Oe({onKeyDown:Re},{interactiveKeyCodes:[L,G]}),V=r.jsxs("div",{className:p.sideNavHeaderTitle,children:[r.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),y?"":r.jsx("h1",{className:O?"":p.hidden,children:e==null?void 0:e.title})]}),q=e==null?void 0:e.ariaLabel,Fe=e!=null&&e.link?r.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":q,children:V}):e!=null&&e.onClick?r.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:Pe,role:"button","aria-label":q,children:V}):r.jsx("div",{className:p.sideNavHeaderTitleContainer,children:V});return r.jsx(Ke,{ref:x,size:n,collapsible:a,collapsed:y,appearance:l,header:r.jsxs("div",{className:p.sideNavHeaderContainer,children:[r.jsxs("div",{className:z(p.sideNavHeader,p[l],y&&p.collapsed),children:[Fe,r.jsx("div",{className:z(p.sideNavHeaderVersion,!O&&p.hidden),children:r.jsx("span",{children:e==null?void 0:e.version})})]}),r.jsx(Y,{appearance:l})]}),body:r.jsx("div",{className:p.sideNavBody,children:r.jsx("ul",{children:t==null?void 0:t.map(v=>{var W;return((W=v.items)==null?void 0:W.length)?r.jsx(qe,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:y,link:v.link,onClick:v.onClick,items:v.items||[],appearance:l},v.id):r.jsx("li",{children:r.jsx(U,{id:v.id,label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:y,link:v.link,onClick:v.onClick,appearance:l,active:v.id===g&&!!g})},v.id)})})}),footer:a&&r.jsxs("div",{className:p.sideNavFooterContainer,children:[r.jsx(Y,{appearance:l}),r.jsx("div",{className:p.sideNavFooter,children:r.jsx("div",{className:p.collapsibleSection,children:r.jsx(U,{id:"collapse-button",icon:De,showIcon:!0,collapsed:y,onClick:_e,label:y?"Ouvrir le menu":"Réduire le menu",appearance:l})})})]}),children:s&&r.jsx("div",{className:p.sideNavContent,children:s})})});F.displayName="SideNav";F.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},collapsed:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Xt={title:"SideNav",id:"SideNav",component:F,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>r.jsx(F,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,collapsed:n.collapsed,activeItem:n.activeItem,children:ot})},ot=r.jsxs("div",{style:{padding:"2rem"},children:[r.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),r.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),r.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),M=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],j=[{id:"home",label:"Home",icon:"home",showIcon:!0,link:"/home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],E={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},it={...E},rt={...E,onClick:()=>{console.log("Header clicked")}},d=(n,a)=>{const s=h(n),e=s.queryByRole("link",{name:a});if(e)return e;const t=s.queryByText(a);if(t){const o=t.closest("li");if(o){const l=o.querySelector("a");if(l)return l;const x=Array.from(o.querySelectorAll("span")).find(y=>y.hasAttribute("tabindex"));if(x)return x}}return null},Se=(n,a)=>{const s=n.querySelector('[class*="sideNavBody"]');if(!s)return null;const t=Array.from(s.querySelectorAll("li"))[a];if(t){const o=t.querySelector("a");if(o)return o;const g=Array.from(t.querySelectorAll("span")).find(x=>x.hasAttribute("tabindex"));if(g)return g}return null},H=(n,a="MA")=>{var o;return(o=h(n).getByText(a).parentElement)==null?void 0:o.parentElement},m=n=>{i(n).not.toBeNull(),i(n).toHaveFocus()},N=(n,a)=>{const s=d(n,a);s&&i(s).not.toHaveFocus()},b=(n,a)=>{const s=d(n,a);s&&i(s).toHaveAttribute("tabindex","-1")},w=(n,a)=>{const s=d(n,a);s&&i(s).toHaveAttribute("tabindex","0")},u={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:M}},k={args:{...u.args,collapsible:!0}},A={args:{...u.args,headerConfig:E}},B={args:{...u.args,headerConfig:E,items:j,collapsible:!0}},S={args:{...u.args,headerConfig:E,items:j,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Navigate through navigation when all menus are closed",async()=>{b(e,"Overview"),b(e,"Reports"),b(e,"Analytics"),b(e,"General"),b(e,"Privacy"),b(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),m(t),await c.tab();const o=d(e,"Dashboard");m(o),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await c.tab();const l=d(e,"Settings");m(l),N(e,"General"),N(e,"Privacy"),N(e,"Advanced"),await c.tab();const g=d(e,"Profile");m(g)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),w(e,"Overview"),w(e,"Reports"),w(e,"Analytics"),await c.tab();const o=d(e,"Overview");m(o),await c.tab();const l=d(e,"Reports");m(l),await c.tab();const g=d(e,"Analytics");m(g)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),b(e,"Overview"),b(e,"Reports"),b(e,"Analytics"),await c.tab();const o=d(e,"Settings");m(o),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),w(e,"General"),w(e,"Privacy"),w(e,"Advanced"),b(e,"Security"),b(e,"API Keys"),await c.tab();const o=d(e,"General");m(o),await c.tab();const l=d(e,"Privacy");m(l),await c.tab();const g=d(e,"Advanced");m(g),N(e,"Security"),N(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),w(e,"Security"),w(e,"API Keys"),await c.tab();const o=d(e,"Security");m(o),await c.tab();const l=d(e,"API Keys");m(l)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),b(e,"Security"),b(e,"API Keys"),await c.tab();const o=d(e,"Profile");m(o),N(e,"Security"),N(e,"API Keys")})}},C={args:{...u.args,headerConfig:{...E,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=H(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("DIV"),i(t).not.toHaveAttribute("href"),i(t).not.toHaveAttribute("role","button"),i(t).not.toHaveAttribute("tabindex")})}},I={args:{...u.args,headerConfig:it,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is a link when link prop is provided",async()=>{const t=H(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("A"),i(t).toHaveAttribute("href","/"),i(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=H(e);t==null||t.focus(),i(t).toHaveFocus()})}},_={args:{...u.args,headerConfig:{...rt,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is clickable button when onClick is provided",async()=>{const t=H(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),i(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=H(e);t==null||t.focus(),i(t).toHaveFocus(),await c.keyboard(Me),await c.keyboard(Ve)})}},D={args:{...u.args,headerConfig:E,items:M,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Se(e,0);i(t).not.toBeNull(),t==null||t.focus(),await new Promise(l=>setTimeout(l,200));const o=h(document.body).queryByRole("tooltip",{name:"Home"});i(o).not.toBeNull(),i(o).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await new Promise(o=>setTimeout(o,200));const t=h(document.body).queryByRole("tooltip",{name:"Dashboard"});i(t).not.toBeNull(),i(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await new Promise(o=>setTimeout(o,200));const t=h(document.body).queryByRole("tooltip",{name:"Profile"});i(t).not.toBeNull(),i(t).toHaveTextContent("Profile")})}},R={args:{...u.args,headerConfig:E,items:j,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to menu items",async()=>{const t=Se(e,1);i(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await new Promise(l=>setTimeout(l,200));const o=h(document.body).queryByRole("tooltip",{name:"Dashboard"});i(o).not.toBeNull(),i(o).toHaveTextContent("Dashboard")})}},ct=(n,a)=>n.querySelector(`#${a}`),lt=n=>Array.from(n.classList).some(s=>s.includes("active")),Ce=async(n,a,s)=>{await je(()=>{const e=n.getByRole("navigation"),t=ct(e,a);i(t).not.toBeNull(),i(lt(t)).toBe(s)})},$=(n,a)=>Ce(n,a,!0),f=(n,a)=>Ce(n,a,!1),P={args:{...u.args,headerConfig:E,items:M,activeItem:"home"},decorators:[(n,a)=>{const[s,e]=T.useState(a.args.activeItem),t=M.map(o=>({...o,onClick:()=>e(o.id)}));return r.jsx("div",{children:r.jsx(n,{args:{...a.args,items:t,activeItem:s}},s)})}],play:async({canvasElement:n,step:a})=>{const s=h(n);await a("Verify Home has active class initially",async()=>{$(s,"home"),f(s,"dashboard"),f(s,"analytics"),f(s,"settings"),f(s,"profile")}),await a("Change active item to Dashboard and verify active class",async()=>{const e=s.getByRole("navigation"),t=d(e,"Dashboard");i(t).not.toBeNull(),await c.click(t),f(s,"home"),$(s,"dashboard"),f(s,"analytics"),f(s,"settings"),f(s,"profile")})}};var J,Q,X;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(se=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,re;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(re=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ce,le,de;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(le=S.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ve,pe,me;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ye,Ne;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(Ne=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var be,he,ge;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ge=(he=_.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var Ee,we,fe;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(fe=(we=D.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var xe,Te,He;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var ke,Ae,Be;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Be=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};const Zt=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState"];export{P as ActiveItemState,D as CollapsedTooltip,R as CollapsedTooltipWithNested,k as Collapsible,u as Default,C as HeaderClickability,I as HeaderWithLink,_ as HeaderWithOnClick,A as HeaderWithVersion,S as KeyboardNavigation,B as WithNestedMenus,Zt as __namedExportsOrder,Xt as default};
