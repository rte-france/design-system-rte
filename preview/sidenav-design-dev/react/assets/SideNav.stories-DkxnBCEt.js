import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as B,r as h}from"./index-G8LIXM5I.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-eP6eVpQc.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as W}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-CgPo5b8O.js";import{c as f}from"./index-DSdvzt-y.js";import{B as O}from"./BaseSideNav-CU88MBws.js";import{N as _}from"./NavItem-DTztKDdj.js";import{N as q}from"./NavMenu-BjJSShak.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./keyboard.constants-ep-ZHn_7.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const E="_sideNavContainer_tg0n3_3",F="_sideNav_tg0n3_3",U="_neutral_tg0n3_25",G="_sideNavHeaderContainer_tg0n3_29",K="_collapsed_tg0n3_41",L="_sideNavHeader_tg0n3_29",J="_sideNavHeaderTitleContainer_tg0n3_56",Q="_sideNavHeaderTitle_tg0n3_56",X="_sideNavHeaderIdentifier_tg0n3_79",Y="_sideNavHeaderVersion_tg0n3_113",Z="_hidden_tg0n3_133",$="_sideNavBody_tg0n3_140",ee="_sideNavFooter_tg0n3_160",ae="_collapsibleSection_tg0n3_171",s={sideNavContainer:E,sideNav:F,neutral:U,sideNavHeaderContainer:G,collapsed:K,sideNavHeader:L,sideNavHeaderTitleContainer:J,sideNavHeaderTitle:Q,sideNavHeaderIdentifier:X,sideNavHeaderVersion:Y,hidden:Z,sideNavBody:$,sideNavFooter:ee,collapsibleSection:ae},ie=300,r=B.forwardRef(({size:a="m",collapsible:N,children:u,headerConfig:n,items:m,appearance:v="brand"},V)=>{const[o,P]=h.useState(!1),[g,b]=h.useState(!0);h.useEffect(()=>{if(o)b(!1);else{const i=setTimeout(()=>{b(!0)},ie);return()=>clearTimeout(i)}},[o]);const D=()=>{P(!o)},R=o?"arrow-double-right":"arrow-double-left";return e.jsx(O,{ref:V,size:a,collapsible:N,collapsed:o,appearance:v,header:e.jsx("div",{className:s.sideNavHeaderContainer,children:e.jsxs("div",{className:f(s.sideNavHeader,s[v],o&&s.collapsed),children:[e.jsx("div",{className:s.sideNavHeaderTitleContainer,tabIndex:0,children:e.jsxs("div",{className:s.sideNavHeaderTitle,children:[e.jsx("div",{className:s.sideNavHeaderIdentifier,children:n==null?void 0:n.identifier}),e.jsx("h1",{children:g?n==null?void 0:n.title:""})]})}),e.jsx("div",{className:f(s.sideNavHeaderVersion,!g&&s.hidden),children:e.jsx("span",{children:n==null?void 0:n.version})}),e.jsx(W,{appearance:v})]})}),body:e.jsx("div",{className:s.sideNavBody,children:e.jsx("ul",{children:m==null?void 0:m.map(i=>i.items&&i.items.length>0?e.jsx(q,{label:i.label,icon:i.icon,showIcon:i.showIcon,collapsed:o,link:i.link,onClick:i.onClick,items:i.items||[]},i.label):e.jsx(_,{label:i.label,icon:i.icon,showIcon:i.showIcon,collapsed:o,link:i.link,onClick:i.onClick},i.label))})}),footer:N&&e.jsx("div",{className:s.sideNavFooter,children:e.jsx("div",{className:s.collapsibleSection,children:e.jsx(_,{icon:R,showIcon:!0,collapsed:o,onClick:D,label:o?"":"Réduire le menu"})})}),children:u&&e.jsx("div",{className:s.sideNavContent,children:u})})});r.displayName="SideNav";r.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ue={title:"SideNav",id:"SideNav",component:r,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]}}},p=e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),e.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),e.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),M=[{label:"Home",icon:"home",showIcon:!0},{label:"Dashboard",icon:"dashboard",showIcon:!0},{label:"Analytics",icon:"analytics",showIcon:!0},{label:"Settings",icon:"settings",showIcon:!0},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],se=[{label:"Home",icon:"home",showIcon:!0,link:"/home"},{label:"Dashboard",icon:"dashboard",showIcon:!0,items:[{label:"Overview",link:"/dashboard/overview"},{label:"Reports",link:"/dashboard/reports"},{label:"Analytics",link:"/dashboard/analytics"}]},{label:"Settings",icon:"settings",showIcon:!0,items:[{label:"General",link:"/settings/general"},{label:"Privacy",link:"/settings/privacy"},{label:"Advanced",items:[{label:"Security",link:"/settings/advanced/security"},{label:"API Keys",link:"/settings/advanced/api"}]}]},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],t={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA"},items:M},render:a=>e.jsx(r,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:p})},l={args:{...t.args,collapsible:!0},render:a=>e.jsx(r,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:p})},d={args:{headerConfig:{identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home"},items:M},render:a=>e.jsx(r,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:p})},c={args:{headerConfig:{identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home"},items:se,collapsible:!0},render:a=>e.jsx(r,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:p})};var C,I,x;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      title: "My Header",
      icon: "home",
      identifier: "MA"
    },
    items: navigationItems
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
}`,...(x=(I=t.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var S,H,y;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
}`,...(y=(H=l.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var j,w,k;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      identifier: "MA",
      title: "My Application",
      version: "V1.2.3",
      icon: "home"
    },
    items: navigationItems
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var z,T,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    headerConfig: {
      identifier: "MA",
      title: "My Application",
      version: "V1.2.3",
      icon: "home"
    },
    items: navigationItemsWithNested,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
}`,...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Ge=["Default","Collapsible","HeaderWithVersion","WithNestedMenus"];export{l as Collapsible,t as Default,d as HeaderWithVersion,c as WithNestedMenus,Ge as __namedExportsOrder,Ue as default};
