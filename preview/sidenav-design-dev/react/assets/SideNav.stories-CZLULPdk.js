import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Ae,c as Ce}from"./keyboard-test.constants-fmK-LbIX.js";import{w as h,u as r,e as o}from"./index-DCXJbAaW.js";import{S as j,E as O}from"./keyboard.constants-ep-ZHn_7.js";import{R as Be,r as R}from"./index-G8LIXM5I.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-Bojuu2FU.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as q}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-DcpGgSUF.js";import{u as Ie}from"./useActiveKeyboard-BPEscCvd.js";import{c as W}from"./index-DSdvzt-y.js";import{B as _e}from"./BaseSideNav-Du5ZaKH4.js";import{N as G}from"./NavItem-COXCWbfC.js";import{N as De}from"./NavMenu-D_s5teqp.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const Pe="_sideNavContainer_1ayt8_3",Re="_sideNav_1ayt8_3",Fe="_neutral_1ayt8_25",Me="_sideNavHeaderContainer_1ayt8_29",Ve="_collapsed_1ayt8_41",Ke="_sideNavHeader_1ayt8_29",je="_sideNavHeaderTitleContainer_1ayt8_66",Oe="_sideNavHeaderTitle_1ayt8_66",qe="_sideNavHeaderIdentifier_1ayt8_104",We="_hidden_1ayt8_139",Ge="_sideNavHeaderVersion_1ayt8_145",Le="_sideNavBody_1ayt8_174",Ye="_sideNavFooterContainer_1ayt8_194",ze="_sideNavFooter_1ayt8_194",Ue="_collapsibleSection_1ayt8_207",p={sideNavContainer:Pe,sideNav:Re,neutral:Fe,sideNavHeaderContainer:Me,collapsed:Ve,sideNavHeader:Ke,sideNavHeaderTitleContainer:je,sideNavHeaderTitle:Oe,sideNavHeaderIdentifier:qe,hidden:We,sideNavHeaderVersion:Ge,sideNavBody:Le,sideNavFooterContainer:Ye,sideNavFooter:ze,collapsibleSection:Ue},Je=300,_=Be.forwardRef(({size:n="m",collapsible:a,children:l,headerConfig:e,items:t,collapsed:s=!1,appearance:c="brand"},E)=>{const[m,D]=R.useState(s),[M,V]=R.useState(!0);R.useEffect(()=>{if(m)V(!1);else{const v=setTimeout(()=>{V(!0)},Je);return()=>clearTimeout(v)}},[m]);const fe=()=>{D(!m)},xe=m?"arrow-double-right":"arrow-double-left",He=v=>{[j,O].includes(v.key)&&(v.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:ke}=Ie({onKeyDown:He},{interactiveKeyCodes:[j,O]}),P=i.jsxs("div",{className:p.sideNavHeaderTitle,children:[i.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),m?"":i.jsx("h1",{className:M?"":p.hidden,children:e==null?void 0:e.title})]}),K=e==null?void 0:e.ariaLabel,Se=e!=null&&e.link?i.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":K,children:P}):e!=null&&e.onClick?i.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:ke,role:"button","aria-label":K,children:P}):i.jsx("div",{className:p.sideNavHeaderTitleContainer,children:P});return i.jsx(_e,{ref:E,size:n,collapsible:a,collapsed:m,appearance:c,header:i.jsxs("div",{className:p.sideNavHeaderContainer,children:[i.jsxs("div",{className:W(p.sideNavHeader,p[c],m&&p.collapsed),children:[Se,i.jsx("div",{className:W(p.sideNavHeaderVersion,!M&&p.hidden),children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(q,{appearance:c})]}),body:i.jsx("div",{className:p.sideNavBody,children:i.jsx("ul",{children:t==null?void 0:t.map(v=>v.items&&v.items.length>0?i.jsx(De,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:m,link:v.link,onClick:v.onClick,items:v.items||[],appearance:c},v.label):i.jsx(G,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:m,link:v.link,onClick:v.onClick,appearance:c},v.label))})}),footer:a&&i.jsxs("div",{className:p.sideNavFooterContainer,children:[i.jsx(q,{appearance:c}),i.jsx("div",{className:p.sideNavFooter,children:i.jsx("div",{className:p.collapsibleSection,children:i.jsx("ul",{children:i.jsx(G,{icon:xe,showIcon:!0,collapsed:m,onClick:fe,label:m?"Ouvrir le menu":"Réduire le menu",appearance:c})})})})]}),children:l&&i.jsx("div",{className:p.sideNavContent,children:l})})});_.displayName="SideNav";_.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},collapsed:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ot={title:"SideNav",id:"SideNav",component:_,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"}},render:n=>i.jsx(_,{size:n.size,collapsible:n.collapsible,headerConfig:n.headerConfig,appearance:n.appearance,items:n.items,collapsed:n.collapsed,children:Qe})},Qe=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),ge=[{label:"Home",icon:"home",showIcon:!0},{label:"Dashboard",icon:"dashboard",showIcon:!0},{label:"Analytics",icon:"analytics",showIcon:!0},{label:"Settings",icon:"settings",showIcon:!0},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],F=[{label:"Home",icon:"home",showIcon:!0,link:"/home"},{label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],g={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Xe={...g},Ze={...g,onClick:()=>{console.log("Header clicked")}},d=(n,a)=>{const l=h(n),e=l.queryByRole("link",{name:a});if(e)return e;const t=l.queryByText(a);if(t){const s=t.closest("li");if(s){const c=s.querySelector("a");if(c)return c;const m=Array.from(s.querySelectorAll("span")).find(D=>D.hasAttribute("tabindex"));if(m)return m}}return null},Te=(n,a)=>{const l=n.querySelector('[class*="sideNavBody"]');if(!l)return null;const t=Array.from(l.querySelectorAll("li"))[a];if(t){const s=t.querySelector("a");if(s)return s;const E=Array.from(t.querySelectorAll("span")).find(m=>m.hasAttribute("tabindex"));if(E)return E}return null},T=(n,a="MA")=>{var s;return(s=h(n).getByText(a).parentElement)==null?void 0:s.parentElement},u=n=>{o(n).not.toBeNull(),o(n).toHaveFocus()},y=(n,a)=>{const l=d(n,a);l&&o(l).not.toHaveFocus()},N=(n,a)=>{const l=d(n,a);l&&o(l).toHaveAttribute("tabindex","-1")},w=(n,a)=>{const l=d(n,a);l&&o(l).toHaveAttribute("tabindex","0")},b={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:ge}},f={args:{...b.args,collapsible:!0}},x={args:{...b.args,headerConfig:g}},H={args:{...b.args,headerConfig:g,items:F,collapsible:!0}},k={args:{...b.args,headerConfig:g,items:F,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Navigate through navigation when all menus are closed",async()=>{N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),N(e,"General"),N(e,"Privacy"),N(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),u(t),await r.tab();const s=d(e,"Dashboard");u(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics"),await r.tab();const c=d(e,"Settings");u(c),y(e,"General"),y(e,"Privacy"),y(e,"Advanced"),await r.tab();const E=d(e,"Profile");u(E)}),await a("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await r.click(t),w(e,"Overview"),w(e,"Reports"),w(e,"Analytics"),await r.tab();const s=d(e,"Overview");u(s),await r.tab();const c=d(e,"Reports");u(c),await r.tab();const E=d(e,"Analytics");u(E)}),await a("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await r.click(t),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await r.tab();const s=d(e,"Settings");u(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics")}),await a("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await r.click(t),w(e,"General"),w(e,"Privacy"),w(e,"Advanced"),N(e,"Security"),N(e,"API Keys"),await r.tab();const s=d(e,"General");u(s),await r.tab();const c=d(e,"Privacy");u(c),await r.tab();const E=d(e,"Advanced");u(E),y(e,"Security"),y(e,"API Keys")}),await a("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await r.click(t),w(e,"Security"),w(e,"API Keys"),await r.tab();const s=d(e,"Security");u(s),await r.tab();const c=d(e,"API Keys");u(c)}),await a("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await r.click(t),N(e,"Security"),N(e,"API Keys"),await r.tab();const s=d(e,"Profile");u(s),y(e,"Security"),y(e,"API Keys")})}},S={args:{...b.args,headerConfig:g,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is not clickable when no link or onClick is provided",async()=>{const t=T(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("DIV"),o(t).not.toHaveAttribute("href"),o(t).not.toHaveAttribute("role","button"),o(t).not.toHaveAttribute("tabindex")})}},A={args:{...b.args,headerConfig:Xe,collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is a link when link prop is provided",async()=>{const t=T(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("A"),o(t).toHaveAttribute("href","/"),o(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable",async()=>{const t=T(e);t==null||t.focus(),o(t).toHaveFocus()})}},C={args:{...b.args,headerConfig:{...Ze,link:null},collapsible:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify header is clickable button when onClick is provided",async()=>{const t=T(e);o(t).not.toBeNull(),o(t==null?void 0:t.tagName).toBe("DIV"),await r.click(t),o(t).toHaveStyle({cursor:"pointer"})}),await a("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=T(e);t==null||t.focus(),o(t).toHaveFocus(),await r.keyboard(Ae),await r.keyboard(Ce)})}},B={args:{...b.args,headerConfig:g,items:ge,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Te(e,0);o(t).not.toBeNull(),t==null||t.focus(),await new Promise(c=>setTimeout(c,200));const s=h(document.body).queryByRole("tooltip",{name:"Home"});o(s).not.toBeNull(),o(s).toHaveTextContent("Home")}),await a("Verify tooltips appear when tabbing to next navigation item",async()=>{await r.tab(),await new Promise(s=>setTimeout(s,200));const t=h(document.body).queryByRole("tooltip",{name:"Dashboard"});o(t).not.toBeNull(),o(t).toHaveTextContent("Dashboard")}),await a("Verify tooltips appear for items with links when tabbing",async()=>{await r.tab(),await r.tab(),await r.tab(),await new Promise(s=>setTimeout(s,200));const t=h(document.body).queryByRole("tooltip",{name:"Profile"});o(t).not.toBeNull(),o(t).toHaveTextContent("Profile")})}},I={args:{...b.args,headerConfig:g,items:F,collapsible:!0,collapsed:!0},play:async({canvasElement:n,step:a})=>{const e=h(n).getByRole("navigation");await a("Verify tooltips appear when tabbing to menu items",async()=>{const t=Te(e,1);o(t).not.toBeNull(),await r.tab(),await r.tab(),await r.tab(),await new Promise(c=>setTimeout(c,200));const s=h(document.body).queryByRole("tooltip",{name:"Dashboard"});o(s).not.toBeNull(),o(s).toHaveTextContent("Dashboard")})}};var L,Y,z;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var U,J,Q;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,ae;H.parameters={...H.parameters,docs:{...(ee=H.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(ae=(te=H.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ne,se,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(se=k.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,re,le;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(re=S.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ce,de,ve;A.parameters={...A.parameters,docs:{...(ce=A.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ve=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};var pe,me,ue;C.parameters={...C.parameters,docs:{...(pe=C.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,Ne,be;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(be=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:be.source}}};var he,Ee,we;I.parameters={...I.parameters,docs:{...(he=I.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(we=(Ee=I.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};const qt=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigationTest","HeaderClickabilityTest","HeaderWithLinkTest","HeaderWithOnClickTest","CollapsedTooltipTest","CollapsedTooltipWithNestedTest"];export{B as CollapsedTooltipTest,I as CollapsedTooltipWithNestedTest,f as Collapsible,b as Default,S as HeaderClickabilityTest,A as HeaderWithLinkTest,C as HeaderWithOnClickTest,x as HeaderWithVersion,k as KeyboardNavigationTest,H as WithNestedMenus,qt as __namedExportsOrder,Ot as default};
