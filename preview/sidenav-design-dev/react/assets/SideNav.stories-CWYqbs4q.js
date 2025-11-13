import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as mt,a as ut}from"./keyboard-test.constants-C9whQEGR.js";import{w as v,u as c,e as r,a as vt}from"./index-DCXJbAaW.js";import{r as w}from"./index-G8LIXM5I.js";import{S as oe,E as se}from"./keyboard.constants-ep-ZHn_7.js";import{u as gt}from"./useActiveKeyboard-BPEscCvd.js";import{D as ie}from"./Divider-BPBlxbj_.js";import{c as re}from"./index-DSdvzt-y.js";import{B as bt}from"./BaseSideNav-DUsuIK_e.js";import{a as ce,N as yt}from"./NavMenu-DW5jSc3t.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./Tooltip-BKDmN81H.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Nt="_sideNavContainer_xo0pb_3",ht="_sideNavContent_xo0pb_8",ft="_sideNav_xo0pb_3",xt="_sideNavHeaderContainer_xo0pb_29",Et="_collapsed_xo0pb_41",wt="_sideNavHeader_xo0pb_29",Tt="_sideNavHeaderTitleContainer_xo0pb_66",Ht="_sideNavHeaderTitle_xo0pb_66",Ct="_neutral_xo0pb_77",St="_sideNavHeaderIdentifier_xo0pb_104",It="_hidden_xo0pb_139",Bt="_sideNavHeaderVersion_xo0pb_145",At="_sideNavBody_xo0pb_174",kt="_sideNavFooterContainer_xo0pb_197",_t="_sideNavFooter_xo0pb_197",Ft="_sideNavFooterItems_xo0pb_210",Dt="_collapsibleSection_xo0pb_227",u={sideNavContainer:Nt,sideNavContent:ht,sideNav:ft,sideNavHeaderContainer:xt,collapsed:Et,sideNavHeader:wt,sideNavHeaderTitleContainer:Tt,sideNavHeaderTitle:Ht,neutral:Ct,sideNavHeaderIdentifier:St,hidden:It,sideNavHeaderVersion:Bt,sideNavBody:At,sideNavFooterContainer:kt,sideNavFooter:_t,sideNavFooterItems:Ft,collapsibleSection:Dt},Pt=300,I=w.forwardRef(({size:a="m",collapsible:n,children:o,headerConfig:e,items:t,footerItems:s,collapsed:l,defaultCollapsed:T=!1,onCollapsedChange:G,appearance:H="brand",activeItem:J},it)=>{const[f,Q]=w.useState(l??T),[X,Z]=w.useState(!0);w.useEffect(()=>{l!==void 0&&Q(l)},[l]),w.useEffect(()=>{if(f)Z(!1);else{const h=setTimeout(()=>{Z(!0)},Pt);return()=>clearTimeout(h)}},[f]);const rt=()=>{const h=!f;l===void 0&&Q(h),G==null||G(h)},ct=f?"arrow-double-right":"arrow-double-left",ee=H==="brand"?"brand-navigation":"default",lt=h=>{[oe,se].includes(h.key)&&(h.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:dt}=gt({onKeyDown:lt},{interactiveKeyCodes:[oe,se]}),Y=i.jsxs("div",{className:u.sideNavHeaderTitle,children:[i.jsx("div",{className:u.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),f?"":i.jsx("h1",{className:X?"":u.hidden,children:e==null?void 0:e.title})]}),te=e==null?void 0:e.ariaLabel,pt=e!=null&&e.link?i.jsx("a",{href:e.link,className:u.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":te,children:Y}):e!=null&&e.onClick?i.jsx("div",{className:u.sideNavHeaderTitleContainer,tabIndex:0,onClick:e.onClick,onKeyDown:dt,role:"button","aria-label":te,children:Y}):i.jsx("div",{className:u.sideNavHeaderTitleContainer,children:Y});function ae(h){return h!=null&&h.length?i.jsx("ul",{children:h.map(m=>{var ne;return((ne=m.items)==null?void 0:ne.length)?i.jsx(yt,{badge:m.badge,label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:f,link:m.link,onClick:m.onClick,items:m.items||[],appearance:H},m.id):i.jsx("li",{children:i.jsx(ce,{id:m.id,badge:m.badge,label:m.label,icon:m.icon,showIcon:m.showIcon,collapsed:f,link:m.link,onClick:m.onClick,appearance:H,active:m.id===J&&!!J})},m.id)})}):null}return i.jsx(bt,{ref:it,size:a,collapsible:n,collapsed:f,appearance:H,style:{minHeight:"100vh"},containerClassName:u.sideNavContainer,header:i.jsxs("div",{className:u.sideNavHeaderContainer,children:[i.jsxs("div",{className:re(u.sideNavHeader,u[H],f&&u.collapsed),children:[pt,i.jsx("div",{className:re(u.sideNavHeaderVersion,!X&&u.hidden),children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(ie,{appearance:ee})]}),body:i.jsx("div",{className:u.sideNavBody,children:ae(t)}),footer:((s==null?void 0:s.length)||n)&&i.jsxs("div",{className:u.sideNavFooterContainer,children:[(s==null?void 0:s.length)&&i.jsx("div",{className:u.sideNavFooterItems,children:ae(s)}),i.jsx(ie,{appearance:ee}),i.jsx("div",{className:u.sideNavFooter,children:n&&i.jsx("div",{className:u.collapsibleSection,children:i.jsx(ce,{id:"collapse-button",icon:ct,showIcon:!0,collapsed:f,onClick:rt,label:f?"Ouvrir le menu":"Réduire le menu",appearance:H,role:"button"})})})]}),children:o})});I.displayName="SideNav";I.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const da={title:"SideNav",id:"SideNav",component:I,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>i.jsx(I,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:jt})},jt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),S=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0},{id:"analytics",label:"Analytics",icon:"analytics",showIcon:!0},{id:"settings",label:"Settings",icon:"settings",showIcon:!0},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],z=[{id:"home",label:"Home",icon:"home",showIcon:!0},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],Rt=[{id:"home",label:"Home",icon:"home",showIcon:!0,badge:{badgeType:"indicator",size:"m",content:"number",count:5}},{id:"dashboard",label:"Dashboard",icon:"dashboard",showIcon:!0,badge:{badgeType:"indicator",size:"m",content:"number",count:3},items:[{label:"Overview",badge:{badgeType:"brand",size:"m",content:"number",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{badgeType:"indicator",size:"m",content:"number",count:12}}]},{id:"settings",label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",badge:{badgeType:"brand",size:"m",content:"number",count:1}},{label:"Advanced",icon:"settings",badge:{badgeType:"indicator",size:"m",content:"number",count:7},items:[{label:"Security",icon:"security",badge:{badgeType:"indicator",size:"m",content:"number",count:99}},{label:"API Keys",icon:"api-keys"}]}]},{id:"profile",label:"Profile",icon:"user",showIcon:!0,link:"/profile",badge:{badgeType:"brand",size:"m",content:"number",count:8}}],U=[{id:"footer-settings",label:"Settings",icon:"settings",showIcon:!0,onClick:()=>{console.log("Footer Settings clicked")}},{id:"footer-help",label:"Help & Support",icon:"help",showIcon:!0,link:"/help"},{id:"footer-account",label:"Account",icon:"user",showIcon:!0,items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],N={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},qt={...N},Mt={...N,onClick:()=>{console.log("Header clicked")}};function $(a){if(!a)return null;const n=Array.from(a.children);for(const s of n)if(s.tagName==="A"||s.tagName==="SPAN"&&s.hasAttribute("tabindex"))return s;const o=a.querySelector("a");return o||Array.from(a.querySelectorAll("span")).find(s=>s.hasAttribute("tabindex"))}const d=(a,n)=>{const o=v(a),e=o.queryByRole("link",{name:n});if(e)return e;const t=o.queryByText(n);if(t){const s=t.closest("li");return $(s)}return null},ot=(a,n)=>{const o=a.querySelector('[class*="sideNavBody"]');if(!o)return null;const t=Array.from(o.querySelectorAll("li"))[n];return $(t)},B=(a,n="MA")=>{var s;return(s=v(a).getByText(n).parentElement)==null?void 0:s.parentElement},g=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},b=(a,n)=>{const o=d(a,n);o&&r(o).not.toHaveFocus()},y=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","-1")},x=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","0")},p={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:S}},A={args:{...p.args,collapsible:!0}},k={args:{...p.args,headerConfig:N}},_={args:{...p.args,headerConfig:N,items:z,collapsible:!0}},F={args:{...p.args,headerConfig:N,items:z,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{y(e,"Overview"),y(e,"Reports"),y(e,"Analytics"),y(e,"General"),y(e,"Privacy"),y(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),g(t),await c.tab();const s=d(e,"Dashboard");g(s),b(e,"Overview"),b(e,"Reports"),b(e,"Analytics"),await c.tab();const l=d(e,"Settings");g(l),b(e,"General"),b(e,"Privacy"),b(e,"Advanced"),await c.tab();const T=d(e,"Profile");g(T)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),x(e,"Overview"),x(e,"Reports"),x(e,"Analytics"),await c.tab();const s=d(e,"Overview");g(s),await c.tab();const l=d(e,"Reports");g(l),await c.tab();const T=d(e,"Analytics");g(T)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),y(e,"Overview"),y(e,"Reports"),y(e,"Analytics"),await c.tab();const s=d(e,"Settings");g(s),b(e,"Overview"),b(e,"Reports"),b(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),x(e,"General"),x(e,"Privacy"),x(e,"Advanced"),y(e,"Security"),y(e,"API Keys"),await c.tab();const s=d(e,"General");g(s),await c.tab();const l=d(e,"Privacy");g(l),await c.tab();const T=d(e,"Advanced");g(T),b(e,"Security"),b(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),x(e,"Security"),x(e,"API Keys"),await c.tab();const s=d(e,"Security");g(s),await c.tab();const l=d(e,"API Keys");g(l)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),y(e,"Security"),y(e,"API Keys"),await c.tab();const s=d(e,"Profile");g(s),b(e,"Security"),b(e,"API Keys")})}},D={args:{...p.args,headerConfig:{...N,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=B(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},P={args:{...p.args,headerConfig:qt,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=B(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=B(e);t==null||t.focus(),r(t).toHaveFocus()})}},j={args:{...p.args,headerConfig:{...Mt,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=B(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=B(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(mt),await c.keyboard(ut)})}},R={args:{...p.args,headerConfig:N,items:S,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=w.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=ot(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(l=>setTimeout(l,200));const s=v(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await new Promise(s=>setTimeout(s,200));const t=v(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await new Promise(s=>setTimeout(s,200));const t=v(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},q={args:{...p.args,headerConfig:N,items:z,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=w.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to menu items",async()=>{const t=ot(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await new Promise(l=>setTimeout(l,200));const s=v(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},Ot=(a,n)=>a.querySelector(`#${n}`),Vt=a=>Array.from(a.classList).some(o=>o.includes("active")),st=async(a,n,o)=>{await vt(()=>{const e=a.getByRole("navigation"),t=Ot(e,n);r(t).not.toBeNull(),r(Vt(t)).toBe(o)})},le=(a,n)=>st(a,n,!0),E=(a,n)=>st(a,n,!1),M={args:{...p.args,headerConfig:N,items:S,activeItem:"home",collapsible:!0},decorators:[(a,n)=>{const[o,e]=w.useState(n.args.activeItem),t=S.map(s=>({...s,onClick:()=>e(s.id),link:void 0}));return i.jsx("div",{children:i.jsx(a,{args:{...n.args,items:t,activeItem:o}})})}],play:async({canvasElement:a,step:n})=>{const o=v(a);await n("Verify Home has active class initially",async()=>{le(o,"home"),E(o,"dashboard"),E(o,"analytics"),E(o,"settings"),E(o,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=o.getByRole("navigation"),t=d(e,"Dashboard");r(t).not.toBeNull(),await c.click(t),E(o,"home"),le(o,"dashboard"),E(o,"analytics"),E(o,"settings"),E(o,"profile")})}},Kt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),O={args:{...p.args,collapsible:!0},render:a=>i.jsx(I,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,children:Kt})},V={args:{...p.args,headerConfig:N,items:S,footerItems:U,collapsible:!0}},K={args:{...p.args,headerConfig:N,items:S,footerItems:U,collapsible:!1}},C=(a,n)=>{const o=a.querySelector('[class*="sideNavFooterItems"]');if(!o)return null;const e=v(o),t=e.queryByRole("link",{name:n});if(t)return t;const s=e.queryByText(n);if(s){const l=s.closest("li");return $(l)}return null},W={args:{...p.args,headerConfig:N,items:z,footerItems:U,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=v(a).getByRole("navigation");await n("Verify footer items are rendered",async()=>{const t=C(e,"Settings");r(t).not.toBeNull();const s=C(e,"Help & Support");r(s).not.toBeNull();const l=C(e,"Account");r(l).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=C(e,"Account");await c.click(t);const s=C(e,"Preferences");r(s).not.toBeNull();const l=C(e,"Logout");r(l).not.toBeNull()})}},L={args:{...p.args,headerConfig:N,items:Rt,collapsible:!0}};var de,pe,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ve,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(ge=(ve=A.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var be,ye,Ne;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ne=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var he,fe,xe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(xe=(fe=_.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var Ee,we,Te;F.parameters={...F.parameters,docs:{...(Ee=F.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Te=(we=F.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var He,Ce,Se;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ie,Be,Ae;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var ke,_e,Fe;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Fe=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var De,Pe,je;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(je=(Pe=R.parameters)==null?void 0:Pe.docs)==null?void 0:je.source}}};var Re,qe,Me;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Me=(qe=q.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Oe,Ve,Ke;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ke=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:Ke.source}}};var We,Le,ze;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...(ze=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Ge,Ye,Ue;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Ue=(Ye=V.parameters)==null?void 0:Ye.docs)==null?void 0:Ue.source}}};var $e,Je,Qe;K.parameters={...K.parameters,docs:{...($e=K.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(Qe=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;W.parameters={...W.parameters,docs:{...(Xe=W.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(et=(Ze=W.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,nt;L.parameters={...L.parameters,docs:{...(tt=L.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(nt=(at=L.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};const pa=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges"];export{M as ActiveItemState,R as CollapsedTooltip,q as CollapsedTooltipWithNested,A as Collapsible,p as Default,K as FooterItemsOnly,W as FooterItemsWithNested,D as HeaderClickability,P as HeaderWithLink,j as HeaderWithOnClick,k as HeaderWithVersion,F as KeyboardNavigation,O as ScrollBar,L as WithBadges,V as WithFooterItems,_ as WithNestedMenus,pa as __namedExportsOrder,da as default};
