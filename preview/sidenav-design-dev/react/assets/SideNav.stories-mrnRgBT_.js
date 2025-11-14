import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{T as xt,a as Et}from"./keyboard-test.constants-C9whQEGR.js";import{w as u,u as c,e as r,a as wt}from"./index-DCXJbAaW.js";import{r as S}from"./index-G8LIXM5I.js";import{d as Tt}from"./side-nav.constants-pHg9Cgrr.js";import{S as le,E as de}from"./keyboard.constants-ep-ZHn_7.js";import{u as Ht}from"./useActiveKeyboard-BPEscCvd.js";import{D as Z}from"./Divider-BPBlxbj_.js";import{c as pe}from"./index-DSdvzt-y.js";import{B as St}from"./BaseSideNav-BlZQiyAE.js";import{a as ve,N as Ct}from"./NavMenu-BegoLkzN.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./Tooltip-CUwyg_K4.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const Bt="_sideNavContainer_xo0pb_3",At="_sideNavContent_xo0pb_8",kt="_sideNav_xo0pb_3",It="_sideNavHeaderContainer_xo0pb_29",Dt="_collapsed_xo0pb_41",_t="_sideNavHeader_xo0pb_29",Ft="_sideNavHeaderTitleContainer_xo0pb_66",Pt="_sideNavHeaderTitle_xo0pb_66",jt="_neutral_xo0pb_77",Rt="_sideNavHeaderIdentifier_xo0pb_104",qt="_hidden_xo0pb_139",Mt="_sideNavHeaderVersion_xo0pb_145",Ot="_sideNavBody_xo0pb_174",Vt="_sideNavFooterContainer_xo0pb_197",Wt="_sideNavFooter_xo0pb_197",Kt="_sideNavFooterItems_xo0pb_210",Lt="_collapsibleSection_xo0pb_227",m={sideNavContainer:Bt,sideNavContent:At,sideNav:kt,sideNavHeaderContainer:It,collapsed:Dt,sideNavHeader:_t,sideNavHeaderTitleContainer:Ft,sideNavHeaderTitle:Pt,neutral:jt,sideNavHeaderIdentifier:Rt,hidden:qt,sideNavHeaderVersion:Mt,sideNavBody:Ot,sideNavFooterContainer:Vt,sideNavFooter:Wt,sideNavFooterItems:Kt,collapsibleSection:Lt},Gt=300,I=S.forwardRef(({size:a="m",collapsible:n,children:o,headerConfig:e,items:t,footerItems:s,collapsed:l,defaultCollapsed:C=!1,onCollapsedChange:J,appearance:B="brand",activeItem:ae},mt)=>{const[x,ne]=S.useState(l??C),[oe,se]=S.useState(!0);S.useEffect(()=>{l!==void 0&&ne(l)},[l]),S.useEffect(()=>{if(x)se(!1);else{const f=setTimeout(()=>{se(!0)},Gt);return()=>clearTimeout(f)}},[x]);const ut=()=>{const f=!x;l===void 0&&ne(f),J==null||J(f)},gt=x?"arrow-double-right":"arrow-double-left",Q=Tt[B],yt=f=>{[le,de].includes(f.key)&&(f.preventDefault(),e!=null&&e.onClick&&e.onClick())},{onKeyDown:bt}=Ht({onKeyDown:yt},{interactiveKeyCodes:[le,de]}),X=i.jsxs("div",{className:m.sideNavHeaderTitle,children:[i.jsx("div",{className:m.sideNavHeaderIdentifier,children:e==null?void 0:e.identifier}),x?"":i.jsx("h1",{className:oe?"":m.hidden,children:e==null?void 0:e.title})]}),ie=e==null?void 0:e.ariaLabel,Nt=i.jsx("a",{href:(e==null?void 0:e.link)??"",className:m.sideNavHeaderTitleContainer,onClick:e==null?void 0:e.onClick,"aria-label":ie,children:X}),ht=i.jsx("div",{className:m.sideNavHeaderTitleContainer,tabIndex:0,onClick:e==null?void 0:e.onClick,onKeyDown:bt,role:"button","aria-label":ie,children:X}),ft=e!=null&&e.link?Nt:e!=null&&e.onClick?ht:i.jsx("div",{className:m.sideNavHeaderTitleContainer,children:X});function re(f){return f!=null&&f.length?i.jsx("ul",{children:f.map(p=>{var ce;return((ce=p.items)==null?void 0:ce.length)?i.jsx(Ct,{badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:x,link:p.link,onClick:p.onClick,items:p.items||[],appearance:B,showDivider:p.showDivider},p.id):i.jsxs(i.Fragment,{children:[i.jsx("li",{children:i.jsx(ve,{id:p.id,badge:p.badge,label:p.label,icon:p.icon,showIcon:p.showIcon,collapsed:x,link:p.link,onClick:p.onClick,appearance:B,active:p.id===ae&&!!ae})},p.id),p.showDivider&&i.jsx(Z,{appearance:Q})]})})}):null}return i.jsx(St,{ref:mt,size:a,collapsible:n,collapsed:x,appearance:B,style:{minHeight:"100vh"},containerClassName:m.sideNavContainer,header:i.jsxs("div",{className:m.sideNavHeaderContainer,children:[i.jsxs("div",{className:pe(m.sideNavHeader,m[B],x&&m.collapsed),children:[ft,i.jsx("div",{className:pe(m.sideNavHeaderVersion,!oe&&m.hidden),children:i.jsx("span",{children:e==null?void 0:e.version})})]}),i.jsx(Z,{appearance:Q})]}),body:i.jsx("div",{className:m.sideNavBody,children:re(t)}),footer:((s==null?void 0:s.length)||n)&&i.jsxs("div",{className:m.sideNavFooterContainer,children:[(s==null?void 0:s.length)&&i.jsx("div",{className:m.sideNavFooterItems,children:re(s)}),i.jsx(Z,{appearance:Q}),i.jsx("div",{className:m.sideNavFooter,children:n&&i.jsx("div",{className:m.collapsibleSection,children:i.jsx(ve,{id:"collapse-button",icon:gt,showIcon:!0,collapsed:x,onClick:ut,label:x?"Ouvrir le menu":"Réduire le menu",appearance:B,role:"button"})})})]}),children:o})});I.displayName="SideNav";I.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ea={title:"SideNav",id:"SideNav",component:I,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]},collapsed:{control:"boolean"},activeItem:{control:"text"}},render:a=>i.jsx(I,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,onCollapsedChange:a.onCollapsedChange,children:zt})},zt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),E={showIcon:!0},w={size:"m",content:"number"},y=[{...E,id:"home",label:"Home",icon:"home"},{...E,id:"dashboard",label:"Dashboard",icon:"dashboard"},{...E,id:"analytics",label:"Analytics",icon:"analytics"},{...E,id:"settings",label:"Settings",icon:"settings"},{...E,id:"profile",label:"Profile",icon:"user",link:"/profile"}],k=y,$=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports"},{label:"Analytics",icon:"analytics"}]},{...y[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy"},{label:"Advanced",icon:"settings",items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys"}]}]},y[4]],Yt=[{...y[0],badge:{...w,badgeType:"indicator",count:5}},{...y[1],badge:{...w,badgeType:"indicator",count:3},items:[{label:"Overview",badge:{...w,badgeType:"brand",count:2}},{label:"Reports"},{label:"Analytics",icon:"analytics",badge:{...w,badgeType:"indicator",count:12}}]},{...y[3],items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",badge:{...w,badgeType:"brand",count:1}},{label:"Advanced",icon:"settings",badge:{...w,badgeType:"indicator",count:7},items:[{label:"Security",icon:"security",badge:{...w,badgeType:"indicator",count:99}},{label:"API Keys",icon:"api-keys"}]}]},{...y[4],badge:{...w,badgeType:"brand",count:8}}],ee=[{...E,id:"footer-settings",label:"Settings",icon:"settings",onClick:()=>{console.log("Footer Settings clicked")}},{...E,id:"footer-help",label:"Help & Support",icon:"help",link:"/help"},{...E,id:"footer-account",label:"Account",icon:"user",items:[{id:"footer-profile",label:"Profile",link:"/profile",icon:"user"},{id:"footer-preferences",label:"Preferences",icon:"preferences"},{id:"footer-logout",label:"Logout",onClick:()=>console.log("Logout clicked"),icon:"logout"}]}],b={identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home",link:"/"},Ut={...b},$t={...b,onClick:()=>{console.log("Header clicked")}};function te(a){if(!a)return null;const n=Array.from(a.children);for(const s of n)if(s.tagName==="A"||s.tagName==="SPAN"&&s.hasAttribute("tabindex"))return s;const o=a.querySelector("a");return o||Array.from(a.querySelectorAll("span")).find(s=>s.hasAttribute("tabindex"))}const d=(a,n)=>{const o=u(a),e=o.queryByRole("link",{name:n});if(e)return e;const t=o.queryByText(n);if(t){const s=t.closest("li");return te(s)}return null},pt=(a,n)=>{const o=a.querySelector('[class*="sideNavBody"]');if(!o)return null;const t=Array.from(o.querySelectorAll("li"))[n];return te(t)},D=(a,n="MA")=>{var s;return(s=u(a).getByText(n).parentElement)==null?void 0:s.parentElement},g=a=>{r(a).not.toBeNull(),r(a).toHaveFocus()},N=(a,n)=>{const o=d(a,n);o&&r(o).not.toHaveFocus()},h=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","-1")},T=(a,n)=>{const o=d(a,n);o&&r(o).toHaveAttribute("tabindex","0")},v={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA",link:"/my-application"},items:k}},_={args:{...v.args,collapsible:!0}},F={args:{...v.args,headerConfig:b}},P={args:{...v.args,headerConfig:b,items:$,collapsible:!0}},j={args:{...v.args,headerConfig:b,items:$,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Navigate through navigation when all menus are closed",async()=>{h(e,"Overview"),h(e,"Reports"),h(e,"Analytics"),h(e,"General"),h(e,"Privacy"),h(e,"Advanced");const t=d(e,"Home");t==null||t.focus(),g(t),await c.tab();const s=d(e,"Dashboard");g(s),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics"),await c.tab();const l=d(e,"Settings");g(l),N(e,"General"),N(e,"Privacy"),N(e,"Advanced"),await c.tab();const C=d(e,"Profile");g(C)}),await n("Open Dashboard menu and verify nested items are accessible",async()=>{const t=d(e,"Dashboard");await c.click(t),T(e,"Overview"),T(e,"Reports"),T(e,"Analytics"),await c.tab();const s=d(e,"Overview");g(s),await c.tab();const l=d(e,"Reports");g(l),await c.tab();const C=d(e,"Analytics");g(C)}),await n("Close Dashboard menu and verify nested items are skipped again",async()=>{const t=d(e,"Dashboard");await c.click(t),h(e,"Overview"),h(e,"Reports"),h(e,"Analytics"),await c.tab();const s=d(e,"Settings");g(s),N(e,"Overview"),N(e,"Reports"),N(e,"Analytics")}),await n("Open Settings menu and verify nested items are accessible",async()=>{const t=d(e,"Settings");await c.click(t),T(e,"General"),T(e,"Privacy"),T(e,"Advanced"),h(e,"Security"),h(e,"API Keys"),await c.tab();const s=d(e,"General");g(s),await c.tab();const l=d(e,"Privacy");g(l),await c.tab();const C=d(e,"Advanced");g(C),N(e,"Security"),N(e,"API Keys")}),await n("Open Advanced menu and verify deeply nested items are accessible",async()=>{const t=d(e,"Advanced");await c.click(t),T(e,"Security"),T(e,"API Keys"),await c.tab();const s=d(e,"Security");g(s),await c.tab();const l=d(e,"API Keys");g(l)}),await n("Close Advanced menu and verify deeply nested items are skipped",async()=>{const t=d(e,"Advanced");await c.click(t),h(e,"Security"),h(e,"API Keys"),await c.tab();const s=d(e,"Profile");g(s),N(e,"Security"),N(e,"API Keys")})}},R={args:{...v.args,headerConfig:{...b,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is not clickable when no link or onClick is provided",async()=>{const t=D(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),r(t).not.toHaveAttribute("href"),r(t).not.toHaveAttribute("role","button"),r(t).not.toHaveAttribute("tabindex")})}},q={args:{...v.args,headerConfig:Ut,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is a link when link prop is provided",async()=>{const t=D(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("A"),r(t).toHaveAttribute("href","/"),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable",async()=>{const t=D(e);t==null||t.focus(),r(t).toHaveFocus()})}},M={args:{...v.args,headerConfig:{...$t,link:null},collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify header is clickable button when onClick is provided",async()=>{const t=D(e);r(t).not.toBeNull(),r(t==null?void 0:t.tagName).toBe("DIV"),await c.click(t),r(t).toHaveStyle({cursor:"pointer"})}),await n("Verify header is keyboard navigable and responds to Enter/Space",async()=>{const t=D(e);t==null||t.focus(),r(t).toHaveFocus(),await c.keyboard(xt),await c.keyboard(Et)})}},O={args:{...v.args,headerConfig:b,items:k,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=S.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to navigation items",async()=>{const t=pt(e,0);r(t).not.toBeNull(),t==null||t.focus(),await new Promise(l=>setTimeout(l,200));const s=u(document.body).queryByRole("tooltip",{name:"Home"});r(s).not.toBeNull(),r(s).toHaveTextContent("Home")}),await n("Verify tooltips appear when tabbing to next navigation item",async()=>{await c.tab(),await new Promise(s=>setTimeout(s,200));const t=u(document.body).queryByRole("tooltip",{name:"Dashboard"});r(t).not.toBeNull(),r(t).toHaveTextContent("Dashboard")}),await n("Verify tooltips appear for items with links when tabbing",async()=>{await c.tab(),await c.tab(),await c.tab(),await new Promise(s=>setTimeout(s,200));const t=u(document.body).queryByRole("tooltip",{name:"Profile"});r(t).not.toBeNull(),r(t).toHaveTextContent("Profile")})}},V={args:{...v.args,headerConfig:b,items:$,collapsible:!0,collapsed:!0},decorators:[(a,n)=>{const[o,e]=S.useState(n.args.collapsed??!0);return i.jsx("div",{children:i.jsx(a,{args:{...n.args,collapsed:o,onCollapsedChange:e}})})}],play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify tooltips appear when tabbing to menu items",async()=>{const t=pt(e,1);r(t).not.toBeNull(),await c.tab(),await c.tab(),await c.tab(),await new Promise(l=>setTimeout(l,200));const s=u(document.body).queryByRole("tooltip",{name:"Dashboard"});r(s).not.toBeNull(),r(s).toHaveTextContent("Dashboard")})}},Jt=(a,n)=>a.querySelector(`#${n}`),Qt=a=>Array.from(a.classList).some(o=>o.includes("active")),vt=async(a,n,o)=>{await wt(()=>{const e=a.getByRole("navigation"),t=Jt(e,n);r(t).not.toBeNull(),r(Qt(t)).toBe(o)})},me=(a,n)=>vt(a,n,!0),H=(a,n)=>vt(a,n,!1),W={args:{...v.args,headerConfig:b,items:k,activeItem:"home",collapsible:!0},decorators:[(a,n)=>{const[o,e]=S.useState(n.args.activeItem),t=k.map(s=>({...s,onClick:()=>e(s.id),link:void 0}));return i.jsx("div",{children:i.jsx(a,{args:{...n.args,items:t,activeItem:o}})})}],play:async({canvasElement:a,step:n})=>{const o=u(a);await n("Verify Home has active class initially",async()=>{me(o,"home"),H(o,"dashboard"),H(o,"analytics"),H(o,"settings"),H(o,"profile")}),await n("Change active item to Dashboard and verify active class",async()=>{const e=o.getByRole("navigation"),t=d(e,"Dashboard");r(t).not.toBeNull(),await c.click(t),H(o,"home"),me(o,"dashboard"),H(o,"analytics"),H(o,"settings"),H(o,"profile")})}},Xt=i.jsxs("div",{style:{padding:"2rem"},children:[i.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}),i.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."})]}),K={args:{...v.args,collapsible:!0},render:a=>i.jsx(I,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,footerItems:a.footerItems,collapsed:a.collapsed,activeItem:a.activeItem,children:Xt})},L={args:{...v.args,headerConfig:b,items:k,footerItems:ee,collapsible:!0}},G={args:{...v.args,headerConfig:b,items:k,footerItems:ee,collapsible:!1}},A=(a,n)=>{const o=a.querySelector('[class*="sideNavFooterItems"]');if(!o)return null;const e=u(o),t=e.queryByRole("link",{name:n});if(t)return t;const s=e.queryByText(n);if(s){const l=s.closest("li");return te(l)}return null},z={args:{...v.args,headerConfig:b,items:$,footerItems:ee,collapsible:!0},play:async({canvasElement:a,step:n})=>{const e=u(a).getByRole("navigation");await n("Verify footer items are rendered",async()=>{const t=A(e,"Settings");r(t).not.toBeNull();const s=A(e,"Help & Support");r(s).not.toBeNull();const l=A(e,"Account");r(l).not.toBeNull()}),await n("Open Account menu in footer and verify nested items",async()=>{const t=A(e,"Account");await c.click(t);const s=A(e,"Preferences");r(s).not.toBeNull();const l=A(e,"Logout");r(l).not.toBeNull()})}},Y={args:{...v.args,headerConfig:b,items:Yt,collapsible:!0}},Zt=[y[0],{...y[1],items:[{label:"Overview"},{label:"Reports",showDivider:!0},{label:"Analytics",icon:"analytics"}]},{...y[2],showDivider:!0},{...E,id:"reports",label:"Reports",icon:"info"},{...y[3],showDivider:!0,items:[{label:"General",icon:"general"},{label:"Privacy",icon:"privacy",showDivider:!0},{label:"Notifications",icon:"notifications"},{label:"Advanced",icon:"settings",showDivider:!0,items:[{label:"Security",icon:"security"},{label:"API Keys",icon:"api-keys",showDivider:!0},{label:"Integrations",icon:"integrations"}]}]},y[4]],U={args:{...v.args,headerConfig:b,items:Zt,collapsible:!0}};var ue,ge,ye;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA",
      link: "/my-application"
    },
    items: navigationItems
  }
}`,...(ye=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var be,Ne,he;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  }
}`,...(he=(Ne=_.parameters)==null?void 0:Ne.docs)==null?void 0:he.source}}};var fe,xe,Ee;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig
  }
}`,...(Ee=(xe=F.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var we,Te,He;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNested,
    collapsible: true
  }
}`,...(He=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:He.source}}};var Se,Ce,Be;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Ae,ke,Ie;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ie=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Ie.source}}};var De,_e,Fe;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Fe=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Pe,je,Re;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...(Re=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};var qe,Me,Oe;O.parameters={...O.parameters,docs:{...(qe=O.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Oe=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:Oe.source}}};var Ve,We,Ke;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ke=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Ke.source}}};var Le,Ge,ze;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ye,Ue,$e;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items} footerItems={args.footerItems} collapsed={args.collapsed} activeItem={args.activeItem}>
      {SimplePageContent}
    </SideNav>
}`,...($e=(Ue=K.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;L.parameters={...L.parameters,docs:{...(Je=L.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: true
  }
}`,...(Xe=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItems,
    footerItems: footerItems,
    collapsible: false
  }
}`,...(tt=(et=G.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var at,nt,ot;z.parameters={...z.parameters,docs:{...(at=z.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(ot=(nt=z.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var st,it,rt;Y.parameters={...Y.parameters,docs:{...(st=Y.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithNestedAndBadges,
    collapsible: true
  }
}`,...(rt=(it=Y.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ct,lt,dt;U.parameters={...U.parameters,docs:{...(ct=U.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    headerConfig: defaultHeaderConfig,
    items: navigationItemsWithDividers,
    collapsible: true
  }
}`,...(dt=(lt=U.parameters)==null?void 0:lt.docs)==null?void 0:dt.source}}};const wa=["Default","Collapsible","HeaderWithVersion","WithNestedMenus","KeyboardNavigation","HeaderClickability","HeaderWithLink","HeaderWithOnClick","CollapsedTooltip","CollapsedTooltipWithNested","ActiveItemState","ScrollBar","WithFooterItems","FooterItemsOnly","FooterItemsWithNested","WithBadges","WithDividers"];export{W as ActiveItemState,O as CollapsedTooltip,V as CollapsedTooltipWithNested,_ as Collapsible,v as Default,G as FooterItemsOnly,z as FooterItemsWithNested,R as HeaderClickability,q as HeaderWithLink,M as HeaderWithOnClick,F as HeaderWithVersion,j as KeyboardNavigation,K as ScrollBar,Y as WithBadges,U as WithDividers,L as WithFooterItems,P as WithNestedMenus,wa as __namedExportsOrder,Ea as default};
