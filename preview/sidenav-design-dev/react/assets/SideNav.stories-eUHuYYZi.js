import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,u as l,e as r}from"./index-DCXJbAaW.js";import{S as P,E as R}from"./keyboard.constants-ep-ZHn_7.js";import{R as ye,r as F}from"./index-G8LIXM5I.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-eP6eVpQc.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as be}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-CgPo5b8O.js";import{u as Ee}from"./useActiveKeyboard-BPEscCvd.js";import{c as j}from"./index-DSdvzt-y.js";import{B as he}from"./BaseSideNav-CU88MBws.js";import{N as O}from"./NavItem-DTztKDdj.js";import{N as we}from"./NavMenu-Hpq60puK.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const ge="_sideNavContainer_x0w58_3",xe="_sideNav_x0w58_3",He="_neutral_x0w58_25",Te="_sideNavHeaderContainer_x0w58_29",fe="_collapsed_x0w58_41",ke="_sideNavHeader_x0w58_29",Ae="_sideNavHeaderTitleContainer_x0w58_56",Se="_sideNavHeaderTitle_x0w58_56",Ce="_sideNavHeaderIdentifier_x0w58_83",Be="_sideNavHeaderVersion_x0w58_117",Ie="_hidden_x0w58_137",_e="_sideNavBody_x0w58_144",Fe="_sideNavFooter_x0w58_164",Me="_collapsibleSection_x0w58_175",p={sideNavContainer:ge,sideNav:xe,neutral:He,sideNavHeaderContainer:Te,collapsed:fe,sideNavHeader:ke,sideNavHeaderTitleContainer:Ae,sideNavHeaderTitle:Se,sideNavHeaderIdentifier:Ce,sideNavHeaderVersion:Be,hidden:Ie,sideNavBody:_e,sideNavFooter:Fe,collapsibleSection:Me},De=300,I=ye.forwardRef(({size:a="m",collapsible:n,children:d,headerConfig:e,items:t,appearance:i="brand"},y)=>{const[v,x]=F.useState(!1),[H,M]=F.useState(!0);F.useEffect(()=>{if(v)M(!1);else{const c=setTimeout(()=>{M(!0)},De);return()=>clearTimeout(c)}},[v]);const ve=()=>{x(!v)},pe=v?"arrow-double-right":"arrow-double-left",me=c=>{[P,R].includes(c.key)&&(c.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:ue}=Ee({onKeyDown:me},{interactiveKeyCodes:[P,R]}),_=s.jsxs("div",{className:p.sideNavHeaderTitle,children:[s.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),s.jsx("h1",{children:H?e==null?void 0:e.title:""})]}),D=e==null?void 0:e.ariaLabel,Ne=e!=null&&e.link?s.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":D,children:_}):e!=null&&e.onClick?s.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:ue,role:"button","aria-label":D,children:_}):s.jsx("div",{className:p.sideNavHeaderTitleContainer,children:_});return s.jsx(he,{ref:y,size:a,collapsible:n,collapsed:v,appearance:i,header:s.jsx("div",{className:p.sideNavHeaderContainer,children:s.jsxs("div",{className:j(p.sideNavHeader,p[i],v&&p.collapsed),children:[Ne,s.jsx("div",{className:j(p.sideNavHeaderVersion,!H&&p.hidden),children:s.jsx("span",{children:e==null?void 0:e.version})}),s.jsx(be,{appearance:i})]})}),body:s.jsx("div",{className:p.sideNavBody,children:s.jsx("ul",{children:t==null?void 0:t.map(c=>c.items&&c.items.length>0?s.jsx(we,{label:c.label,icon:c.icon,showIcon:c.showIcon,collapsed:v,link:c.link,onClick:c.onClick,items:c.items||[]},c.label):s.jsx(O,{label:c.label,icon:c.icon,showIcon:c.showIcon,collapsed:v,link:c.link,onClick:c.onClick},c.label))})}),footer:n&&s.jsx("div",{className:p.sideNavFooter,children:s.jsx("div",{className:p.collapsibleSection,children:s.jsx("ul",{children:s.jsx(O,{icon:pe,showIcon:!0,collapsed:v,onClick:ve,label:v?"":"Réduire le menu"})})})}),children:d&&s.jsx("div",{className:p.sideNavContent,children:d})})});I.displayName="SideNav";I.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const At={title:"SideNav",id:"SideNav",component:I,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]}},render:a=>s.jsx(I,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:Pe})},Pe=s.jsxs("div",{style:{padding:"2rem"},children:[s.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),s.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Re=[{label:"Home",icon:"home",showIcon:!0},{label:"Dashboard",icon:"dashboard",showIcon:!0},{label:"Analytics",icon:"analytics",showIcon:!0},{label:"Settings",icon:"settings",showIcon:!0},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],de=[{label:"Home",icon:"home",showIcon:!0,link:"/home"},{label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],w={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home"},je={...w,link:"/home"},Oe={...w,onClick:()=>{console.log("Header clicked")}},o=(a,n)=>{const d=h(a),e=d.queryByRole("link",{name:n});if(e)return e;const i=d.getByText(n).closest("li");if(i){const y=i.querySelector("a");if(y)return y;const x=Array.from(i.querySelectorAll("span")).find(H=>H.hasAttribute("tabindex"));if(x)return x}return null},g=(a,n="MA")=>{var i;return(i=h(a).getByText(n).parentElement)==null?void 0:i.parentElement},m=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},u=(a,n)=>{const d=o(a,n);d&&r(d).not.toHaveFocus()},N=(a,n)=>{const d=o(a,n);d&&r(d).toHaveAttribute("tabindex","-1")},E=(a,n)=>{const d=o(a,n);d&&r(d).toHaveAttribute("tabindex","0")},b={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:Re}},T={args:{...b.args,collapsible:!0}},f={args:{...b.args,headerConfig:w}},k={args:{...b.args,headerConfig:w,items:de,collapsible:!0}},A={args:{...b.args,headerConfig:w,items:de,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),N(e,"General"),N(e,"Privacy"),N(e,"Advanced");const t=o(e,"Home");t==null||t.focus(),m(t),await l.tab();const i=o(e,"Dashboard");m(i),u(e,"Overview"),u(e,"Reports"),u(e,"Analytics"),await l.tab();const y=o(e,"Settings");m(y),u(e,"General"),u(e,"Privacy"),u(e,"Advanced"),await l.tab();const v=o(e,"Profile");m(v)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=o(e,"Dashboard");await l.click(t),E(e,"Overview"),E(e,"Reports"),E(e,"Analytics"),await l.tab();const i=o(e,"Overview");m(i),await l.tab();const y=o(e,"Reports");m(y),await l.tab();const v=o(e,"Analytics");m(v)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=o(e,"Dashboard");await l.click(t),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await l.tab();const i=o(e,"Settings");m(i),u(e,"Overview"),u(e,"Reports"),u(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=o(e,"Settings");await l.click(t),E(e,"General"),E(e,"Privacy"),E(e,"Advanced"),N(e,"Security"),N(e,"API Keys"),await l.tab();const i=o(e,"General");m(i),await l.tab();const y=o(e,"Privacy");m(y),await l.tab();const v=o(e,"Advanced");m(v),u(e,"Security"),u(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=o(e,"Advanced");await l.click(t),E(e,"Security"),E(e,"API Keys"),await l.tab();const i=o(e,"Security");m(i),await l.tab();const y=o(e,"API Keys");m(y)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=o(e,"Advanced");await l.click(t),N(e,"Security"),N(e,"API Keys"),await l.tab();const i=o(e,"Profile");m(i),u(e,"Security"),u(e,"API Keys")})}},S={args:{...b.args,headerConfig:w,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=g(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},C={args:{...b.args,headerConfig:je,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=g(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/home"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=g(e);t==null||t.focus(),r(t).toHaveFocus()})}},B={args:{...b.args,headerConfig:Oe,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=h(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=g(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).toHaveAttribute("role","button"),r(t).toHaveAttribute("tabindex","0"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=g(e);t==null||t.focus(),r(t).toHaveFocus(),await l.keyboard("{Enter}"),await l.keyboard(" ")})}};var K,V,W;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(W=(V=b.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var G,L,q;T.parameters={...T.parameters,docs:{...(G=T.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(q=(L=T.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var z,U,Y;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Y=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var J,Q,X;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(X=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ee=($=A.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ae,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,ie,oe;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
      expect(headerTitleContainer).toHaveAttribute("href", "/home");
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
}`,...(oe=(ie=C.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,ce,le;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: headerConfigWithOnClick,
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
      expect(headerTitleContainer).toHaveAttribute("role", "button");
      expect(headerTitleContainer).toHaveAttribute("tabindex", "0");
      expect(headerTitleContainer).toHaveStyle({
        cursor: "pointer"
      });
    });
    await step("Verify header is keyboard navigable and responds to Enter/Space", async () => {
      const headerButton = getHeaderTitleContainer(sideNav);
      headerButton?.focus();
      expect(headerButton).toHaveFocus();
      await userEvent.keyboard("{Enter}");
      await userEvent.keyboard(" ");
    });
  }
}`,...(le=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const St=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigationTest","HeaderClickabilityTest","HeaderWithLinkTest","HeaderWithOnClickTest"];export{T as Collapsible,b as Default,S as HeaderClickabilityTest,C as HeaderWithLinkTest,B as HeaderWithOnClickTest,f as HeaderWithVersion,A as KeyboardNavigationTest,k as WithNestedMenus,St as __namedExportsOrder,At as default};
