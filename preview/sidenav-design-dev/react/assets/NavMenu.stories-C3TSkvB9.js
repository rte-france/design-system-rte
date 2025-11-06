import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as B}from"./index-DCXJbAaW.js";import{r as G}from"./index-G8LIXM5I.js";import{N as h}from"./NavItem-COXCWbfC.js";import{N as s}from"./NavMenu-D_s5teqp.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./keyboard.constants-ep-ZHn_7.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./Banner-B6erURIj.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-B-hhLjRd.js";import"./IconButton-CMN6gjhA.js";import"./Breadcrumbs-Bojuu2FU.js";import"./DropdownItem-Kb6bRzwS.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B2eUObs8.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./Link-BBbOz1gX.js";import"./Tooltip-DcpGgSUF.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import"./Grid-D7MpEJbM.js";import"./IconButtonToggle-B9jCykoe.js";import"./Popover-BD7Hqnsk.js";import"./dom.constants-pEgPeCLJ.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";import"./SplitButton-DZRt7pAT.js";import"./Switch-BKNj42Vr.js";import"./Textarea-9KePu7m1.js";import"./TextInput-BkLeuN_4.js";const Pe={title:"NavMenu",component:s,tags:["autodocs"],argTypes:{collapsed:{control:"boolean",description:"Whether the sidenav is collapsed"},showMenuIcon:{control:"boolean",description:"Whether to show the chevron icon",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the item icon"},open:{control:"boolean",description:"Controlled open state"}},args:{onClick:B()}},l=[{label:"Sub Item 1",link:"/sub1"},{label:"Sub Item 2",link:"/sub2"},{label:"Sub Item 3",link:"/sub3"}],H=[{label:"Level 2 Parent",items:[{label:"Level 3 Item 1",link:"/level3/item1"},{label:"Level 3 Item 2",link:"/level3/item2"},{label:"Level 3 Parent",items:[{label:"Level 4 Item 1",link:"/level4/item1"},{label:"Level 4 Item 2",link:"/level4/item2"}]}]},{label:"Level 2 Item",link:"/level2/item"}],J=[{label:"Regular Item",link:"/regular"},{label:"Parent with Children",items:[{label:"Child 1",link:"/child1"},{label:"Child 2",link:"/child2"},{label:"Child 3",link:"/child3"}]}],t={args:{label:"Menu Item",items:l,showIcon:!1,showMenuIcon:!0,collapsed:!1},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(s,{...n})})},o={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:l,showMenuIcon:!0,collapsed:!1},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(s,{...n})})},r={args:{label:"Menu Item",link:"/parent",items:l,showIcon:!1,showMenuIcon:!0,collapsed:!1},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(s,{...n})})},a={args:{label:"Level 1 Parent",icon:"folder",showIcon:!0,items:H,showMenuIcon:!0,collapsed:!1},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"350px"},children:e.jsx(s,{...n})})},i={args:{label:"Controlled Menu",items:l},render:n=>{const[m,q]=G.useState(!1);return e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(s,{...n,open:m,onClick:()=>q(!m)}),e.jsxs("li",{style:{marginTop:"1rem",padding:"0.5rem",fontSize:"0.875rem",color:"#666"},children:["Menu is ",m?"open":"closed"]})]})}},c={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:l,showMenuIcon:!0,collapsed:!0},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"80px"},children:e.jsx(s,{...n})})},u={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:l,showMenuIcon:!1,collapsed:!1},render:n=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(s,{...n})})},d={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(s,{label:"First Menu",icon:"folder",showIcon:!0,items:l,showMenuIcon:!0,collapsed:!1}),e.jsx(s,{label:"Second Menu",icon:"settings",showIcon:!0,items:J,showMenuIcon:!0,collapsed:!1}),e.jsx(s,{label:"Third Menu",icon:"user",showIcon:!0,items:[{label:"Profile",link:"/profile"},{label:"Account",link:"/account"},{label:"Preferences",link:"/preferences"}],showMenuIcon:!0,collapsed:!1})]})},p={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(h,{label:"Regular Item",icon:"home",showIcon:!0,collapsed:!1}),e.jsx(s,{label:"Menu Item",icon:"folder",showIcon:!0,items:l,showMenuIcon:!0,collapsed:!1}),e.jsx(h,{label:"Another Regular Item",icon:"dashboard",showIcon:!0,collapsed:!1}),e.jsx(s,{label:"Another Menu",icon:"settings",showIcon:!0,items:[{label:"Settings 1",link:"/settings1"},{label:"Settings 2",link:"/settings2"}],showMenuIcon:!0,collapsed:!1})]})};var I,g,M;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "Menu Item",
    items: simpleNestedItems,
    showIcon: false,
    showMenuIcon: true,
    collapsed: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(M=(g=t.parameters)==null?void 0:g.docs)==null?void 0:M.source}}};var w,b,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,y,S;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "Menu Item",
    link: "/parent",
    items: simpleNestedItems,
    showIcon: false,
    showMenuIcon: true,
    collapsed: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(S=(y=r.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,N,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Level 1 Parent",
    icon: "folder",
    showIcon: true,
    items: deepNestedItems,
    showMenuIcon: true,
    collapsed: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "350px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(k=(N=a.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var j,C,L;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Controlled Menu",
    items: simpleNestedItems
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    return <ul style={{
      listStyle: "none",
      padding: 0,
      width: "300px"
    }}>
        <NavMenu {...args} open={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <li style={{
        marginTop: "1rem",
        padding: "0.5rem",
        fontSize: "0.875rem",
        color: "#666"
      }}>
          Menu is {isOpen ? "open" : "closed"}
        </li>
      </ul>;
  }
}`,...(L=(C=i.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,W,P;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: true
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "80px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(P=(W=c.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var A,R,T;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: "Menu Item",
    icon: "settings",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: false,
    collapsed: false
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(T=(R=u.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var D,E,z;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "Menu",
    items: []
  },
  render: () => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu label="First Menu" icon="folder" showIcon={true} items={simpleNestedItems} showMenuIcon={true} collapsed={false} />
      <NavMenu label="Second Menu" icon="settings" showIcon={true} items={mixedItems} showMenuIcon={true} collapsed={false} />
      <NavMenu label="Third Menu" icon="user" showIcon={true} items={[{
      label: "Profile",
      link: "/profile"
    }, {
      label: "Account",
      link: "/account"
    }, {
      label: "Preferences",
      link: "/preferences"
    }]} showMenuIcon={true} collapsed={false} />
    </ul>
}`,...(z=(E=d.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var F,_,V;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: "Menu",
    items: []
  },
  render: () => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavItem label="Regular Item" icon="home" showIcon={true} collapsed={false} />
      <NavMenu label="Menu Item" icon="folder" showIcon={true} items={simpleNestedItems} showMenuIcon={true} collapsed={false} />
      <NavItem label="Another Regular Item" icon="dashboard" showIcon={true} collapsed={false} />
      <NavMenu label="Another Menu" icon="settings" showIcon={true} items={[{
      label: "Settings 1",
      link: "/settings1"
    }, {
      label: "Settings 2",
      link: "/settings2"
    }]} showMenuIcon={true} collapsed={false} />
    </ul>
}`,...(V=(_=p.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const Ae=["Default","WithIcon","WithLink","DeeplyNested","ControlledOpen","Collapsed","WithoutMenuIcon","MultipleMenus","MixedWithNavItems"];export{c as Collapsed,i as ControlledOpen,a as DeeplyNested,t as Default,p as MixedWithNavItems,d as MultipleMenus,o as WithIcon,r as WithLink,u as WithoutMenuIcon,Ae as __namedExportsOrder,Pe as default};
