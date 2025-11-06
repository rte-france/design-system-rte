import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Se,c as Ae}from"./keyboard-test.constants-fmK-LbIX.js";import{w as h,u as i,e as o}from"./index-DCXJbAaW.js";import{S as O,E as j}from"./keyboard.constants-ep-ZHn_7.js";import{R as Be,r as R}from"./index-G8LIXM5I.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-Bojuu2FU.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as Ce}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-DcpGgSUF.js";import{u as Ie}from"./useActiveKeyboard-BPEscCvd.js";import{c as q}from"./index-DSdvzt-y.js";import{B as _e}from"./BaseSideNav-Du5ZaKH4.js";import{N as W}from"./NavItem-hZYPNjgb.js";import{N as De}from"./NavMenu-Bf_FJ9hH.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const Pe="_sideNavContainer_18xl3_3",Re="_sideNav_18xl3_3",Me="_neutral_18xl3_25",Fe="_sideNavHeaderContainer_18xl3_29",Ve="_collapsed_18xl3_41",Ke="_sideNavHeader_18xl3_29",Oe="_sideNavHeaderTitleContainer_18xl3_66",je="_sideNavHeaderTitle_18xl3_66",qe="_sideNavHeaderIdentifier_18xl3_104",We="_hidden_18xl3_139",Ge="_sideNavHeaderVersion_18xl3_145",Le="_sideNavBody_18xl3_174",Ye="_sideNavFooter_18xl3_194",ze="_collapsibleSection_18xl3_204",m={sideNavContainer:Pe,sideNav:Re,neutral:Me,sideNavHeaderContainer:Fe,collapsed:Ve,sideNavHeader:Ke,sideNavHeaderTitleContainer:Oe,sideNavHeaderTitle:je,sideNavHeaderIdentifier:qe,hidden:We,sideNavHeaderVersion:Ge,sideNavBody:Le,sideNavFooter:Ye,collapsibleSection:ze},Ue=300,_=Be.forwardRef(({size:n="m",collapsible:a,children:l,headerConfig:e,items:t,collapsed:s=!1,appearance:c="brand"},E)=>{const[p,D]=R.useState(s),[F,V]=R.useState(!0);R.useEffect(()=>{if(p)V(!1);else{const v=setTimeout(()=>{V(!0)},Ue);return()=>clearTimeout(v)}},[p]);const xe=()=>{D(!p)},Te=p?"arrow-double-right":"arrow-double-left",fe=v=>{[O,j].includes(v.key)&&(v.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:He}=Ie({onKeyDown:fe},{interactiveKeyCodes:[O,j]}),P=r.jsxs("div",{className:m.sideNavHeaderTitle,children:[r.jsx("div",{className:m.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),p?"":r.jsx("h1",{className:F?"":m.hidden,children:e==null?void 0:e.title})]}),K=e==null?void 0:e.ariaLabel,ke=e!=null&&e.link?r.jsx("a",{href:e.link,className:m.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":K,children:P}):e!=null&&e.onClick?r.jsx("div",{className:m.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:He,role:"button","aria-label":K,children:P}):r.jsx("div",{className:m.sideNavHeaderTitleContainer,children:P});return r.jsx(_e,{ref:E,size:n,collapsible:a,collapsed:p,appearance:c,header:r.jsxs("div",{className:m.sideNavHeaderContainer,children:[r.jsxs("div",{className:q(m.sideNavHeader,m[c],p&&m.collapsed),children:[ke,r.jsx("div",{className:q(m.sideNavHeaderVersion,!F&&m.hidden),children:r.jsx("span",{children:e==null?void 0:e.version})})]}),r.jsx(Ce,{appearance:c})]}),body:r.jsx("div",{className:m.sideNavBody,children:r.jsx("ul",{children:t==null?void 0:t.map(v=>v.items&&v.items.length>0?r.jsx(De,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:p,link:v.link,onClick:v.onClick,items:v.items||[],appearance:c},v.label):r.jsx(W,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:p,link:v.link,onClick:v.onClick,appearance:c},v.label))})}),footer:a&&r.jsx("div",{className:m.sideNavFooter,children:r.jsx("div",{className:m.collapsibleSection,children:r.jsx("ul",{children:r.jsx(W,{icon:Te,showIcon:!0,collapsed:p,onClick:xe,label:p?"Ouvrir le menu":"Réduire le menu",appearance:c})})})}),children:l&&r.jsx("div",{className:m.sideNavContent,children:l})})});_.displayName="SideNav";_.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},collapsed:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ot={title:"SideNav",id:"SideNav",component:_,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"}},render:n=>r.jsx(_,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,collapsed:n.collapsed,children:Je})},Je=r.jsxs("div",{style:{padding:"2rem"},children:[r.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),r.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),r.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),we=[{label:"Home",icon:"home",showIcon:!0},{label:"Dashboard",icon:"dashboard",showIcon:!0},{label:"Analytics",icon:"analytics",showIcon:!0},{label:"Settings",icon:"settings",showIcon:!0},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],M=[{label:"Home",icon:"home",showIcon:!0,link:"/home"},{label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],g={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Qe={...g},Xe={...g,onClick:()=>{console.log("Header clicked")}},d=(n,a)=>{const l=h(n),e=l.queryByRole("link",{name:a});if(e)return e;const t=l.queryByText(a);if(t){const s=t.closest("li");if(s){const c=s.querySelector("a");if(c)return c;const p=Array.from(s.querySelectorAll("span")).find(D=>D.hasAttribute("tabindex"));if(p)return p}}return null},ge=(n,a)=>{const l=n.querySelector('[class*="sideNavBody"]');if(!l)return null;const t=Array.from(l.querySelectorAll("li"))[a];if(t){const s=t.querySelector("a");if(s)return s;const E=Array.from(t.querySelectorAll("span")).find(p=>p.hasAttribute("tabindex"));if(E)return E}return null},x=(n,a="MA")=>{var s;return(s=h(n).getByText(a).parentElement)==null?void 0:s.parentElement},u=n=>{o(n).not.toBeNull(),o(n).toHaveFocus()},y=(n,a)=>{const l=d(n,a);l&&o(l).not.toHaveFocus()},N=(n,a)=>{const l=d(n,a);l&&o(l).toHaveAttribute("tabindex","-1")},w=(n,a)=>{const l=d(n,a);l&&o(l).toHaveAttribute("tabindex","0")},b={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:we}},T={args:{...b.args,collapsible:!0}},f={args:{...b.args,headerConfig:g}},H={args:{...b.args,headerConfig:g,items:M,collapsible:!0}},k={args:{...b.args,headerConfig:g,items:M,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Navigate through navigation when all menus are closed",async()=>{N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),N(e,"General"),N(e,"Privacy"),N(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),u(t),await i.tab();const s=d(e,"Dashboard");u(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics"),await i.tab();const c=d(e,"Settings");u(c),y(e,"General"),y(e,"Privacy"),y(e,"Advanced"),await i.tab();const E=d(e,"Profile");u(E)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await i.click(t),w(e,"Overview"),w(e,"Reports"),w(e,"Analytics"),await i.tab();const s=d(e,"Overview");u(s),await i.tab();const c=d(e,"Reports");u(c),await i.tab();const E=d(e,"Analytics");u(E)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await i.click(t),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await i.tab();const s=d(e,"Settings");u(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await i.click(t),w(e,"General"),w(e,"Privacy"),w(e,"Advanced"),N(e,"Security"),N(e,"API Keys"),await i.tab();const s=d(e,"General");u(s),await i.tab();const c=d(e,"Privacy");u(c),await i.tab();const E=d(e,"Advanced");u(E),y(e,"Security"),y(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await i.click(t),w(e,"Security"),w(e,"API Keys"),await i.tab();const s=d(e,"Security");u(s),await i.tab();const c=d(e,"API Keys");u(c)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await i.click(t),N(e,"Security"),N(e,"API Keys"),await i.tab();const s=d(e,"Profile");u(s),y(e,"Security"),y(e,"API Keys")})}},S={args:{...b.args,headerConfig:g,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=x(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("DIV"),o(t).not.toHaveAttribute("href"),o(t).not.toHaveAttribute("role","button"),o(t).not.toHaveAttribute("tabindex")})}},A={args:{...b.args,headerConfig:Qe,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is a link when link prop is provided",async()=>{const t=x(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("A"),o(t).toHaveAttribute("href","/"),o(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=x(e);t==null||t.focus(),o(t).toHaveFocus()})}},B={args:{...b.args,headerConfig:{...Xe,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is clickable button when onClick is provided",async()=>{const t=x(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("DIV"),await i.click(t),o(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=x(e);t==null||t.focus(),o(t).toHaveFocus(),await i.keyboard(Se),await i.keyboard(Ae)})}},C={args:{...b.args,headerConfig:g,items:we,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=ge(e,0);o(t).not.toBeNull(),t==null||t.focus(),await new Promise(c=>setTimeout(c,200));const s=h(document.body).queryByRole("tooltip",{name:"Home"});o(s).not.toBeNull(),o(s).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await i.tab(),await new Promise(s=>setTimeout(s,200));const t=h(document.body).queryByRole("tooltip",{name:"Dashboard"});o(t).not.toBeNull(),o(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await i.tab(),await i.tab(),await i.tab(),await new Promise(s=>setTimeout(s,200));const t=h(document.body).queryByRole("tooltip",{name:"Profile"});o(t).not.toBeNull(),o(t).toHaveTextContent("Profile")})}},I={args:{...b.args,headerConfig:g,items:M,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to menu items",async()=>{const t=ge(e,1);o(t).not.toBeNull(),await i.tab(),await i.tab(),await i.tab(),await new Promise(c=>setTimeout(c,200));const s=h(document.body).queryByRole("tooltip",{name:"Dashboard"});o(s).not.toBeNull(),o(s).toHaveTextContent("Dashboard")})}};var G,L,Y;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(Y=(L=b.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var z,U,J;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(J=(U=T.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Z;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,ee,te;H.parameters={...H.parameters,docs:{...($=H.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(te=(ee=H.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=k.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,re;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
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
}`,...(re=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,ce,de;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ve,pe,me;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(me=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ye,Ne;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(Ne=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var be,he,Ee;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ee=(he=I.parameters)==null?void 0:he.docs)==null?void 0:Ee.source}}};const jt=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigationTest","HeaderClickabilityTest","HeaderWithLinkTest","HeaderWithOnClickTest","CollapsedTooltipTest","CollapsedTooltipWithNestedTest"];export{C as CollapsedTooltipTest,I as CollapsedTooltipWithNestedTest,T as Collapsible,b as Default,S as HeaderClickabilityTest,A as HeaderWithLinkTest,B as HeaderWithOnClickTest,f as HeaderWithVersion,k as KeyboardNavigationTest,H as WithNestedMenus,jt as __namedExportsOrder,Ot as default};
