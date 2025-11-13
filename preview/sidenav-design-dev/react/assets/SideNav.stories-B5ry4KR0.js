import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Me,c as qe}from"./keyboard-test.constants-fmK-LbIX.js";import{w as p,u as r,e as i,a as Oe}from"./index-DCXJbAaW.js";import{r as V}from"./index-G8LIXM5I.js";import{S as O}from"./SideNav-B2JqLLbP.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-BPBlxbj_.js";import"./index-DSdvzt-y.js";import"./BaseSideNav-DUsuIK_e.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./Banner-ChXQSsgF.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-BGjTm3Lt.js";import"./IconButton-DLtPB6Kc.js";import"./Breadcrumbs-DTuXw4gI.js";import"./DropdownItem-BydF_cK3.js";import"./auto-placement-C6RxYMtA.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./Link-DbCKFFRz.js";import"./Tooltip-BKDmN81H.js";import"./Checkbox-B4d89VI_.js";import"./CheckboxGroup-Yh6G_yU9.js";import"./Chip-C9SfH6vI.js";import"./Grid-D7MpEJbM.js";import"./IconButtonToggle-Cpn0A9xl.js";import"./Modal-6u4RyiI3.js";import"./useKeydownEscape-B9tjvDNB.js";import"./dom.constants-pEgPeCLJ.js";import"./Popover-BJ9b44O4.js";import"./RadioButton-Dm7q46Fn.js";import"./RadioButtonGroup-BPUZT864.js";import"./SegmentedControl-D2dD8EzS.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";import"./SplitButton-BiYPECT1.js";import"./Switch-BKNj42Vr.js";import"./Textarea-DroOwIDp.js";import"./TextInput-ByS3EDGn.js";const Dt={title:"SideNav",id:"SideNav",component:O,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:n=>l.jsx(O,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,onCollapsedChange:n.onCollapsedChange,children:Ve})},Ve=l.jsxs("div",{style:{padding:"2rem"},children:[l.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),N=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],q=[{id:"home",label:"Home",icon:"home",showIcon:!0,link:"/home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],W=[{id:"footer-settings",label:"Settings",icon:"settings",showIcon:!0,onClick:()=>{console.log("Footer Settings clicked")}},{id:"footer-help",label:"Help & Support",icon:"help",showIcon:!0,link:"/help"},{id:"footer-account",label:"Account",icon:"user",showIcon:!0,items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],y={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},We={...y},je={...y,onClick:()=>{console.log("Header clicked")}};function j(n){if(!n)return null;const a=Array.from(n.children);for(const s of a)if(s.tagName==="A"||s.tagName==="SPAN"&&s.hasAttribute("tabindex"))return s;const o=n.querySelector("a");return o||Array.from(n.querySelectorAll("span")).find(s=>s.hasAttribute("tabindex"))}const c=(n,a)=>{const o=p(n),e=o.queryByRole("link",{name:a});if(e)return e;const t=o.queryByText(a);if(t){const s=t.closest("li");return j(s)}return null},De=(n,a)=>{const o=n.querySelector('[class*="sideNavBody"]');if(!o)return null;const t=Array.from(o.querySelectorAll("li"))[a];return j(t)},w=(n,a="MA")=>{var s;return(s=p(n).getByText(a).parentElement)==null?void 0:s.parentElement},u=n=>{i(n).not.toBeNull(),i(n).toHaveFocus()},v=(n,a)=>{const o=c(n,a);o&&i(o).not.toHaveFocus()},g=(n,a)=>{const o=c(n,a);o&&i(o).toHaveAttribute("tabindex","-1")},h=(n,a)=>{const o=c(n,a);o&&i(o).toHaveAttribute("tabindex","0")},d={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:N}},x={args:{...d.args,collapsible:!0}},C={args:{...d.args,headerConfig:y}},T={args:{...d.args,headerConfig:y,items:q,collapsible:!0}},B={args:{...d.args,headerConfig:y,items:q,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Navigate through navigation when all menus are closed",async()=>{g(e,"Overview"),g(e,"Reports"),g(e,"Analytics"),g(e,"General"),g(e,"Privacy"),g(e,"Advanced");const t=c(e,"Home");t==null||t.focus(),u(t),await r.tab();const s=c(e,"Dashboard");u(s),v(e,"Overview"),v(e,"Reports"),v(e,"Analytics"),await r.tab();const m=c(e,"Settings");u(m),v(e,"General"),v(e,"Privacy"),v(e,"Advanced"),await r.tab();const E=c(e,"Profile");u(E)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=c(e,"Dashboard");await r.click(t),h(e,"Overview"),h(e,"Reports"),h(e,"Analytics"),await r.tab();const s=c(e,"Overview");u(s),await r.tab();const m=c(e,"Reports");u(m),await r.tab();const E=c(e,"Analytics");u(E)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=c(e,"Dashboard");await r.click(t),g(e,"Overview"),g(e,"Reports"),g(e,"Analytics"),await r.tab();const s=c(e,"Settings");u(s),v(e,"Overview"),v(e,"Reports"),v(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=c(e,"Settings");await r.click(t),h(e,"General"),h(e,"Privacy"),h(e,"Advanced"),g(e,"Security"),g(e,"API Keys"),await r.tab();const s=c(e,"General");u(s),await r.tab();const m=c(e,"Privacy");u(m),await r.tab();const E=c(e,"Advanced");u(E),v(e,"Security"),v(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=c(e,"Advanced");await r.click(t),h(e,"Security"),h(e,"API Keys"),await r.tab();const s=c(e,"Security");u(s),await r.tab();const m=c(e,"API Keys");u(m)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=c(e,"Advanced");await r.click(t),g(e,"Security"),g(e,"API Keys"),await r.tab();const s=c(e,"Profile");u(s),v(e,"Security"),v(e,"API Keys")})}},S={args:{...d.args,headerConfig:{...y,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=w(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("DIV"),i(t).not.toHaveAttribute("href"),i(t).not.toHaveAttribute("role","button"),i(t).not.toHaveAttribute("tabindex")})}},A={args:{...d.args,headerConfig:We,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify header is a link when link prop is provided",async()=>{const t=w(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("A"),i(t).toHaveAttribute("href","/"),i(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=w(e);t==null||t.focus(),i(t).toHaveFocus()})}},H={args:{...d.args,headerConfig:{...je,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify header is clickable button when onClick is provided",async()=>{const t=w(e);i(t).not.toBeNull(),i(t==null?void 0:t.tagName).toBe("DIV"),await r.click(t),i(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=w(e);t==null||t.focus(),i(t).toHaveFocus(),await r.keyboard(Me),await r.keyboard(qe)})}},I={args:{...d.args,headerConfig:y,items:N,collapsible:!0,collapsed:!0},decorators:[(n,a)=>{const[o,e]=V.useState(a.args.collapsed??!0);return l.jsx("div",{children:l.jsx(n,{args:{...a.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=De(e,0);i(t).not.toBeNull(),t==null||t.focus(),await new Promise(m=>setTimeout(m,200));const s=p(document.body).queryByRole("tooltip",{name:"Home"});i(s).not.toBeNull(),i(s).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await r.tab(),await new Promise(s=>setTimeout(s,200));const t=p(document.body).queryByRole("tooltip",{name:"Dashboard"});i(t).not.toBeNull(),i(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await r.tab(),await r.tab(),await r.tab(),await new Promise(s=>setTimeout(s,200));const t=p(document.body).queryByRole("tooltip",{name:"Profile"});i(t).not.toBeNull(),i(t).toHaveTextContent("Profile")})}},k={args:{...d.args,headerConfig:y,items:q,collapsible:!0,collapsed:!0},decorators:[(n,a)=>{const[o,e]=V.useState(a.args.collapsed??!0);return l.jsx("div",{children:l.jsx(n,{args:{...a.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to menu items",async()=>{const t=De(e,1);i(t).not.toBeNull(),await r.tab(),await r.tab(),await r.tab(),await new Promise(m=>setTimeout(m,200));const s=p(document.body).queryByRole("tooltip",{name:"Dashboard"});i(s).not.toBeNull(),i(s).toHaveTextContent("Dashboard")})}},Ke=(n,a)=>n.querySelector(`#${a}`),Le=n=>Array.from(n.classList).some(o=>o.includes("active")),Re=async(n,a,o)=>{await Oe(()=>{const e=n.getByRole("navigation"),t=Ke(e,a);i(t).not.toBeNull(),i(Le(t)).toBe(o)})},K=(n,a)=>Re(n,a,!0),f=(n,a)=>Re(n,a,!1),P={args:{...d.args,headerConfig:y,items:N,activeItem:"home",collapsible:!0},decorators:[(n,a)=>{const[o,e]=V.useState(a.args.activeItem),t=N.map(s=>({...s,onClick:()=>e(s.id),link:void 0}));return l.jsx("div",{children:l.jsx(n,{args:{...a.args,items:t,activeItem:o}})})}],play:async({canvasElement:n,step:a})=>{const o=p(n);await a("Verify Home has active class initially",async()=>{K(o,"home"),f(o,"dashboard"),f(o,"analytics"),f(o,"settings"),f(o,"profile")}),await a("Change active item to Dashboard and verify active class",async()=>{const e=o.getByRole("navigation"),t=c(e,"Dashboard");i(t).not.toBeNull(),await r.click(t),f(o,"home"),K(o,"dashboard"),f(o,"analytics"),f(o,"settings"),f(o,"profile")})}},Ge=l.jsxs("div",{style:{padding:"2rem"},children:[l.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),l.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),F={args:{...d.args,collapsible:!0},render:n=>l.jsx(O,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,footerItems:n.footerItems,collapsed:n.collapsed,activeItem:n.activeItem,children:Ge})},D={args:{...d.args,headerConfig:y,items:N,footerItems:W,collapsible:!0}},R={args:{...d.args,headerConfig:y,items:N,footerItems:W,collapsible:!1}},b=(n,a)=>{const o=n.querySelector('[class*="sideNavFooterItems"]');if(!o)return null;const e=p(o),t=e.queryByRole("link",{name:a});if(t)return t;const s=e.queryByText(a);if(s){const m=s.closest("li");return j(m)}return null},M={args:{...d.args,headerConfig:y,items:q,footerItems:W,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=p(n).getByRole("navigation");await a("Verify footer items are rendered",async()=>{const t=b(e,"Settings");i(t).not.toBeNull();const s=b(e,"Help & Support");i(s).not.toBeNull();const m=b(e,"Account");i(m).not.toBeNull()}),await a("Open Account menu in footer and verify nested items",async()=>{const t=b(e,"Account");await r.click(t);const s=b(e,"Preferences");i(s).not.toBeNull();const m=b(e,"Logout");i(m).not.toBeNull()})}};var L,G,_;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(_=(G=d.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var z,U,Y;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var $,J,Q;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;T.parameters={...T.parameters,docs:{...(X=T.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(ee=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,ce,le;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var de,me,pe;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(pe=(me=H.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,ve,ge;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ge=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var ye,he,fe;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,Ne,Ee;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ee=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ee.source}}};var we,xe,Ce;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(Ce=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Te,Be,Se;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Se=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var Ae,He,Ie;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Ie=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Ie.source}}};var ke,Pe,Fe;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    footerItems: footerItems,
    collapsible: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const sideNav = canvas.getByRole("navigation");
    await step("Verify footer items are rendered", async () => {
      const footerSettings = getFooterNavElement(sideNav, "Settings");
      expect(footerSettings).not.toBeNull();
      const footerHelp = getFooterNavElement(sideNav, "Help & Support");
      expect(footerHelp).not.toBeNull();
      const footerAccount = getFooterNavElement(sideNav, "Account");
      expect(footerAccount).not.toBeNull();
    });
    await step("Open Account menu in footer and verify nested items", async () => {
      const footerAccount = getFooterNavElement(sideNav, "Account");
      await userEvent.click(footerAccount!);
      const footerPreferences = getFooterNavElement(sideNav, "Preferences");
      expect(footerPreferences).not.toBeNull();
      const footerLogout = getFooterNavElement(sideNav, "Logout");
      expect(footerLogout).not.toBeNull();
    });
  }
}`,...(Fe=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};const Rt=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested"];export{P as ActiveItemState,I as CollapsedTooltip,k as CollapsedTooltipWithNested,x as Collapsible,d as Default,R as FooterItemsOnly,M as FooterItemsWithNested,S as HeaderClickability,A as HeaderWithLink,H as HeaderWithOnClick,C as HeaderWithVersion,B as KeyboardNavigation,F as ScrollBar,D as WithFooterItems,T as WithNestedMenus,Rt as __namedExportsOrder,Dt as default};
