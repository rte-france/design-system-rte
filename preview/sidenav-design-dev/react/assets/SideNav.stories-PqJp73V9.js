import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as T,r as V}from"./index-G8LIXM5I.js";import"./Badge-yqZBktoR.js";import"./Banner-B6erURIj.js";import"./Breadcrumbs-eP6eVpQc.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import{D as B}from"./Divider-B2eUObs8.js";import"./Grid-D7MpEJbM.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./IconButtonToggle-B9jCykoe.js";import"./Link-BBbOz1gX.js";import"./Popover-BD7Hqnsk.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";import"./Tooltip-CgPo5b8O.js";import{c as M}from"./index-DSdvzt-y.js";import{B as A}from"./BaseSideNav-DhPTFJCd.js";import{N as g}from"./NavItem-CHTE89tF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useAnimatedMount-_zPBpYOt.js";import"./DropdownItem-Kb6bRzwS.js";import"./keyboard.constants-ep-ZHn_7.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./dom.constants-pEgPeCLJ.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";const D="_sideNavContainer_1gw1n_3",k="_sideNav_1gw1n_3",P="_neutral_1gw1n_24",R="_sideNavHeaderContainer_1gw1n_28",q="_sideNavHeader_1gw1n_28",F="_sideNavHeaderTitleContainer_1gw1n_50",E="_sideNavHeaderTitle_1gw1n_50",W="_sideNavHeaderIdentifier_1gw1n_73",O="_sideNavHeaderVersion_1gw1n_107",L="_sideNavBody_1gw1n_124",U="_sideNavFooter_1gw1n_138",G="_collapsibleSection_1gw1n_148",i={sideNavContainer:D,sideNav:k,neutral:P,sideNavHeaderContainer:R,sideNavHeader:q,sideNavHeaderTitleContainer:F,sideNavHeaderTitle:E,sideNavHeaderIdentifier:W,sideNavHeaderVersion:O,sideNavBody:L,sideNavFooter:U,collapsibleSection:G},n=T.forwardRef(({size:a="m",collapsible:v,children:N,headerConfig:s,items:c,appearance:p="brand"},S)=>{const[r,y]=V.useState(!1),I=()=>{y(!r)},z=r?"arrow-double-right":"arrow-double-left";return e.jsx(A,{ref:S,size:a,collapsible:v,collapsed:r,appearance:p,header:e.jsx("div",{className:i.sideNavHeaderContainer,children:e.jsxs("div",{className:M(i.sideNavHeader,i[p]),children:[e.jsx("div",{className:i.sideNavHeaderTitleContainer,tabIndex:0,children:e.jsxs("div",{className:i.sideNavHeaderTitle,children:[e.jsx("div",{className:i.sideNavHeaderIdentifier,children:s==null?void 0:s.identifier}),e.jsx("h1",{children:r?"":s==null?void 0:s.title})]})}),e.jsx("div",{className:i.sideNavHeaderVersion,children:e.jsx("span",{children:r?"":s==null?void 0:s.version})}),e.jsx(B,{appearance:p})]})}),body:e.jsx("div",{className:i.sideNavBody,children:e.jsx("ul",{children:c==null?void 0:c.map(o=>e.jsx(g,{label:o.label,icon:o.icon,showIcon:o.showIcon,collapsed:r,link:o.link,onClick:o.onClick},o.label))})}),footer:v&&e.jsx("div",{className:i.sideNavFooter,children:e.jsx("div",{className:i.collapsibleSection,children:e.jsx(g,{icon:z,showIcon:!0,collapsed:r,onClick:I,label:r?"":"Réduire le menu"})})}),children:N&&e.jsx("div",{className:i.sideNavContent,children:N})})});n.displayName="SideNav";n.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}},composes:["Partial","Omit"]};const Ve={title:"SideNav",id:"SideNav",component:n,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]},appearance:{control:"select",options:["neutral","brand"]}}},m=e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{margin:"0 0 1rem 0"},children:"Dashboard"}),e.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Welcome to the dashboard. Use the navigation on the left to explore different sections."}),e.jsx("p",{style:{lineHeight:"1.6",color:"#555",marginBottom:"1rem"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),w=[{label:"Home",icon:"home",showIcon:!0},{label:"Dashboard",icon:"dashboard",showIcon:!0},{label:"Analytics",icon:"analytics",showIcon:!0},{label:"Settings",icon:"settings",showIcon:!0},{label:"Profile",icon:"user",showIcon:!0,link:"/profile"}],t={args:{headerConfig:{title:"My Header",icon:"home",identifier:"MA"},items:w},render:a=>e.jsx(n,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:m})},l={args:{...t.args,collapsible:!0},render:a=>e.jsx(n,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:m})},d={args:{headerConfig:{identifier:"MA",title:"My Application",version:"V1.2.3",icon:"home"},items:w},render:a=>e.jsx(n,{size:a.size,collapsible:a.collapsible,headerConfig:a.headerConfig,appearance:a.appearance,items:a.items,children:m})};var u,h,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var _,f,x;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} headerConfig={args.headerConfig} appearance={args.appearance} items={args.items}>
      {PageContent}
    </SideNav>
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var H,j,C;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(C=(j=d.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const Be=["Default","Collapsible","HeaderWithVersion"];export{l as Collapsible,t as Default,d as HeaderWithVersion,Be as __namedExportsOrder,Ve as default};
