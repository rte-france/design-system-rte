import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as rt,c as lt}from"./keyboard-test.constants-fmK-LbIX.js";import{w as u,u as l,e as r,a as ct}from"./index-DCXJbAaW.js";import{r as x}from"./index-G8LIXM5I.js";import{S as ae,E as ne}from"./keyboard.constants-ep-ZHn_7.js";import"./Badge-yqZBktoR.js";import"./Banner-ChXQSsgF.js";import"./Breadcrumbs-B2HFjQm8.js";import"./Button-BGjTm3Lt.js";import"./Checkbox-B4d89VI_.js";import"./CheckboxGroup-Yh6G_yU9.js";import"./Chip-C9SfH6vI.js";import{D as oe}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-DLtPB6Kc.js";import"./IconButtonToggle-Cpn0A9xl.js";import"./Link-DbCKFFRz.js";import"./Modal-Bnd4Z3l3.js";import"./Popover-BJ9b44O4.js";import"./RadioButton-Dm7q46Fn.js";import"./RadioButtonGroup-BPUZT864.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-D2_XFeFd.js";import"./Switch-BKNj42Vr.js";import"./Textarea-DroOwIDp.js";import"./TextInput-ByS3EDGn.js";import"./Tooltip-BKDmN81H.js";import{u as dt}from"./useActiveKeyboard-BPEscCvd.js";import{c as se}from"./index-DSdvzt-y.js";import{B as mt}from"./BaseSideNav-o-15mOhv.js";import{N as ie}from"./NavItem-BlQNe07L.js";import{N as pt}from"./NavMenu-CeJrAZ7q.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-CTbBVvM1.js";import"./auto-placement-C6RxYMtA.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useKeydownEscape-B9tjvDNB.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const vt="_sideNavContent_h0r4g_3",ut="_sideNav_h0r4g_3",gt="_neutral_h0r4g_22",yt="_sideNavHeaderContainer_h0r4g_26",Nt="_collapsed_h0r4g_38",ht="_sideNavHeader_h0r4g_26",bt="_sideNavHeaderTitleContainer_h0r4g_63",ft="_sideNavHeaderTitle_h0r4g_63",Et="_sideNavHeaderIdentifier_h0r4g_101",wt="_hidden_h0r4g_136",xt="_sideNavHeaderVersion_h0r4g_142",Tt="_sideNavBody_h0r4g_171",Ht="_sideNavFooterContainer_h0r4g_191",St="_sideNavFooter_h0r4g_191",Ct="_sideNavFooterItems_h0r4g_204",Bt="_collapsibleSection_h0r4g_221",p={sideNavContent:vt,sideNav:ut,neutral:gt,sideNavHeaderContainer:yt,collapsed:Nt,sideNavHeader:ht,sideNavHeaderTitleContainer:bt,sideNavHeaderTitle:ft,sideNavHeaderIdentifier:Et,hidden:wt,sideNavHeaderVersion:xt,sideNavBody:Tt,sideNavFooterContainer:Ht,sideNavFooter:St,sideNavFooterItems:Ct,collapsibleSection:Bt},It=300,B=x.forwardRef(({size:a="m",collapsible:n,children:o,headerConfig:e,items:t,footerItems:s,collapsed:c,defaultCollapsed:T=!1,onCollapsedChange:G,appearance:H="brand",activeItem:$},tt)=>{const[f,J]=x.useState(c??T),[Q,X]=x.useState(!0);x.useEffect(()=>{c!==void 0&&J(c)},[c]),x.useEffect(()=>{if(f)X(!1);else{const h=setTimeout(()=>{X(!0)},It);return()=>clearTimeout(h)}},[f]);const at=()=>{const h=!f;c===void 0&&J(h),G==null||G(h)},nt=f?"arrow-double-right":"arrow-double-left",ot=h=>{[ae,ne].includes(h.key)&&(h.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:st}=dt({onKeyDown:ot},{interactiveKeyCodes:[ae,ne]}),z=i.jsxs("div",{className:p.sideNavHeaderTitle,children:[i.jsx("div",{className:p.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),f?"":i.jsx("h1",{className:Q?"":p.hidden,children:e==null?void 0:e.title})]}),Z=e==null?void 0:e.ariaLabel,it=e!=null&&e.link?i.jsx("a",{href:e.link,className:p.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":Z,children:z}):e!=null&&e.onClick?i.jsx("div",{className:p.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:st,role:"button","aria-label":Z,children:z}):i.jsx("div",{className:p.sideNavHeaderTitleContainer,children:z});function ee(h){return h!=null&&h.length?i.jsx("ul",{children:h.map(v=>{var te;return((te=v.items)==null?void 0:te.length)?i.jsx(pt,{label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:f,link:v.link,onClick:v.onClick,items:v.items||[],appearance:H},v.id):i.jsx("li",{children:i.jsx(ie,{id:v.id,label:v.label,icon:v.icon,showIcon:v.showIcon,collapsed:f,link:v.link,onClick:v.onClick,appearance:H,active:v.id===$&&!!$})},v.id)})}):null}return i.jsx(mt,{ref:tt,size:a,collapsible:n,collapsed:f,appearance:H,header:i.jsxs("div",{className:p.sideNavHeaderContainer,children:[i.jsxs("div",{className:se(p.sideNavHeader,p[H],f&&p.collapsed),children:[it,i.jsx("div",{className:se(p.sideNavHeaderVersion,!Q&&p.hidden),children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(oe,{appearance:H})]}),body:i.jsx("div",{className:p.sideNavBody,children:ee(t)}),footer:((s==null?void 0:s.length)||n)&&i.jsxs("div",{className:p.sideNavFooterContainer,children:[(s==null?void 0:s.length)&&i.jsx("div",{className:p.sideNavFooterItems,children:ee(s)}),i.jsx(oe,{appearance:H}),i.jsx("div",{className:p.sideNavFooter,children:n&&i.jsx("div",{className:p.collapsibleSection,children:i.jsx(ie,{id:"collapse-button",icon:nt,showIcon:!0,collapsed:f,onClick:at,label:f?"Ouvrir le menu":"Réduire le menu",appearance:H,role:"button"})})})]}),children:o})});B.displayName="SideNav";B.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ca={title:"SideNav",id:"SideNav",component:B,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>i.jsx(B,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:kt})},kt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),C=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],L=[{id:"home",label:"Home",icon:"home",showIcon:!0,link:"/home"},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General"},{label:"Privacy"},{label:"Advanced",items:[{label:"Security"},{label:"API Keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],Y=[{id:"footer-settings",label:"Settings",icon:"settings",showIcon:!0,onClick:()=>{console.log("Footer Settings clicked")}},{id:"footer-help",label:"Help & Support",icon:"help",showIcon:!0,link:"/help"},{id:"footer-account",label:"Account",icon:"user",showIcon:!0,items:[{id:"footer-profile",label:"Profile",link:"/profile"},{id:"footer-preferences",label:"Preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked")}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},At={...b},Ft={...b,onClick:()=>{console.log("Header clicked")}};function U(a){if(!a)return null;const n=Array.from(a.children);for(const s of n)if(s.tagName==="A"||s.tagName==="SPAN"&&s.hasAttribute("tabindex"))return s;const o=a.querySelector("a");return o||Array.from(a.querySelectorAll("span")).find(s=>s.hasAttribute("tabindex"))}const d=(a,n)=>{const o=u(a),e=o.queryByRole("link",{name:n});if(e)return e;const t=o.queryByText(n);if(t){const s=t.closest("li");return U(s)}return null},Ze=(a,n)=>{const o=a.querySelector('[class*="sideNavBody"]');if(!o)return null;const t=Array.from(o.querySelectorAll("li"))[n];return U(t)},I=(a,n="MA")=>{var s;return(s=u(a).getByText(n).parentElement)==null?void 0:s.parentElement},g=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},y=(a,n)=>{const o=d(a,n);o&&r(o).not.toHaveFocus()},N=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","-1")},E=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","0")},m={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:C}},k={args:{...m.args,collapsible:!0}},A={args:{...m.args,headerConfig:b}},F={args:{...m.args,headerConfig:b,items:L,collapsible:!0}},_={args:{...m.args,headerConfig:b,items:L,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),N(e,"General"),N(e,"Privacy"),N(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),g(t),await l.tab();const s=d(e,"Dashboard");g(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics"),await l.tab();const c=d(e,"Settings");g(c),y(e,"General"),y(e,"Privacy"),y(e,"Advanced"),await l.tab();const T=d(e,"Profile");g(T)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await l.click(t),E(e,"Overview"),E(e,"Reports"),E(e,"Analytics"),await l.tab();const s=d(e,"Overview");g(s),await l.tab();const c=d(e,"Reports");g(c),await l.tab();const T=d(e,"Analytics");g(T)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await l.click(t),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await l.tab();const s=d(e,"Settings");g(s),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await l.click(t),E(e,"General"),E(e,"Privacy"),E(e,"Advanced"),N(e,"Security"),N(e,"API Keys"),await l.tab();const s=d(e,"General");g(s),await l.tab();const c=d(e,"Privacy");g(c),await l.tab();const T=d(e,"Advanced");g(T),y(e,"Security"),y(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await l.click(t),E(e,"Security"),E(e,"API Keys"),await l.tab();const s=d(e,"Security");g(s),await l.tab();const c=d(e,"API Keys");g(c)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await l.click(t),N(e,"Security"),N(e,"API Keys"),await l.tab();const s=d(e,"Profile");g(s),y(e,"Security"),y(e,"API Keys")})}},D={args:{...m.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=I(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},P={args:{...m.args,headerConfig:At,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=I(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=I(e);t==null||t.focus(),r(t).toHaveFocus()})}},j={args:{...m.args,headerConfig:{...Ft,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=I(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await l.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=I(e);t==null||t.focus(),r(t).toHaveFocus(),await l.keyboard(rt),await l.keyboard(lt)})}},R={args:{...m.args,headerConfig:b,items:C,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=x.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=Ze(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(c=>setTimeout(c,200));const s=u(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await l.tab(),await new Promise(s=>setTimeout(s,200));const t=u(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await l.tab(),await l.tab(),await l.tab(),await new Promise(s=>setTimeout(s,200));const t=u(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},q={args:{...m.args,headerConfig:b,items:L,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=x.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to menu items",async()=>{const t=Ze(e,1);r(t).not.toBeNull(),await l.tab(),await l.tab(),await l.tab(),await new Promise(c=>setTimeout(c,200));const s=u(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},_t=(a,n)=>a.querySelector(`#${n}`),Dt=a=>Array.from(a.classList).some(o=>o.includes("active")),et=async(a,n,o)=>{await ct(()=>{const e=a.getByRole("navigation"),t=_t(e,n);r(t).not.toBeNull(),r(Dt(t)).toBe(o)})},re=(a,n)=>et(a,n,!0),w=(a,n)=>et(a,n,!1),M={args:{...m.args,headerConfig:b,items:C,activeItem:"home",collapsible:!0},decorators:[(a,n)=>{const[o,e]=x.useState(n.args.activeItem),t=C.map(s=>({...s,onClick:()=>e(s.id),link:void 0}));return i.jsx("div",{children:i.jsx(a,{args:{...n.args,items:t,activeItem:o}})})}],play:async({canvasElement:a,step:n})=>{const o=u(a);await n("Verify Home has active class initially",async()=>{re(o,"home"),w(o,"dashboard"),w(o,"analytics"),w(o,"settings"),w(o,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=o.getByRole("navigation"),t=d(e,"Dashboard");r(t).not.toBeNull(),await l.click(t),w(o,"home"),re(o,"dashboard"),w(o,"analytics"),w(o,"settings"),w(o,"profile")})}},Pt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),O={args:{...m.args,collapsible:!0},render:a=>i.jsx(B,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,children:Pt})},V={args:{...m.args,headerConfig:b,items:C,footerItems:Y,collapsible:!0}},K={args:{...m.args,headerConfig:b,items:C,footerItems:Y,collapsible:!1}},S=(a,n)=>{const o=a.querySelector('[class*="sideNavFooterItems"]');if(!o)return null;const e=u(o),t=e.queryByRole("link",{name:n});if(t)return t;const s=e.queryByText(n);if(s){const c=s.closest("li");return U(c)}return null},W={args:{...m.args,headerConfig:b,items:L,footerItems:Y,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify footer items are rendered",async()=>{const t=S(e,"Settings");r(t).not.toBeNull();const s=S(e,"Help & Support");r(s).not.toBeNull();const c=S(e,"Account");r(c).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=S(e,"Account");await l.click(t);const s=S(e,"Preferences");r(s).not.toBeNull();const c=S(e,"Logout");r(c).not.toBeNull()})}};var le,ce,de;m.parameters={...m.parameters,docs:{...(le=m.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(de=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,pe,ve;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ve=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var ue,ge,ye;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(ye=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var Ne,he,be;F.parameters={...F.parameters,docs:{...(Ne=F.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(be=(he=F.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var fe,Ee,we;_.parameters={..._.parameters,docs:{...(fe=_.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var xe,Te,He;D.parameters={...D.parameters,docs:{...(xe=D.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(He=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var Se,Ce,Be;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Ie,ke,Ae;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=j.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Fe,_e,De;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(De=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Pe,je,Re;q.parameters={...q.parameters,docs:{...(Pe=q.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Re=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var qe,Me,Oe;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ve,Ke,We;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(We=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Le,Ge,ze;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(ze=(Ge=V.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ye,Ue,$e;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...($e=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;W.parameters={...W.parameters,docs:{...(Je=W.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=W.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};const Ba=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested"];export{M as ActiveItemState,R as CollapsedTooltip,q as CollapsedTooltipWithNested,k as Collapsible,m as Default,K as FooterItemsOnly,W as FooterItemsWithNested,D as HeaderClickability,P as HeaderWithLink,j as HeaderWithOnClick,A as HeaderWithVersion,_ as KeyboardNavigation,O as ScrollBar,V as WithFooterItems,F as WithNestedMenus,Ba as __namedExportsOrder,Ca as default};
