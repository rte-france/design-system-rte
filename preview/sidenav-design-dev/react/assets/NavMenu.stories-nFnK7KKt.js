import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as ne}from"./index-DCXJbAaW.js";import{r as se}from"./index-G8LIXM5I.js";import{N as n,a as l}from"./NavMenu-DW5jSc3t.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./keyboard.constants-ep-ZHn_7.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./Tooltip-BKDmN81H.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";const ye={title:"NavMenu",component:n,tags:["autodocs"],argTypes:{collapsed:{control:"boolean",description:"Whether the sidenav is collapsed"},showMenuIcon:{control:"boolean",description:"Whether to show the chevron icon",defaultValue:!0},showIcon:{control:"boolean",description:"Whether to show the item icon"},open:{control:"boolean",description:"Controlled open state"}},args:{onClick:ne()}},t=[{label:"Sub Item 1",link:"/sub1"},{label:"Sub Item 2",link:"/sub2"},{label:"Sub Item 3",link:"/sub3"}],te=[{label:"Level 2 Parent",items:[{label:"Level 3 Item 1",link:"/level3/item1"},{label:"Level 3 Item 2",link:"/level3/item2"},{label:"Level 3 Parent",items:[{label:"Level 4 Item 1",link:"/level4/item1"},{label:"Level 4 Item 2",link:"/level4/item2"}]}]},{label:"Level 2 Item",link:"/level2/item"}],le=[{label:"Regular Item",link:"/regular"},{label:"Parent with Children",items:[{label:"Child 1",link:"/child1"},{label:"Child 2",link:"/child2"},{label:"Child 3",link:"/child3"}]}],o={args:{label:"Menu Item",items:t,showIcon:!1,showMenuIcon:!0,collapsed:!1},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(n,{...s})})},a={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!1},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(n,{...s})})},r={args:{label:"Menu Item",link:"/parent",items:t,showIcon:!1,showMenuIcon:!0,collapsed:!1},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(n,{...s})})},i={args:{label:"Level 1 Parent",icon:"folder",showIcon:!0,items:te,showMenuIcon:!0,collapsed:!1},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"350px"},children:e.jsx(n,{...s})})},c={args:{label:"Controlled Menu",items:t},render:s=>{const[I,ee]=se.useState(!1);return e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(n,{...s,open:I,onClick:()=>ee(!I)}),e.jsxs("li",{style:{marginTop:"1rem",padding:"0.5rem",fontSize:"0.875rem",color:"#666"},children:["Menu is ",I?"open":"closed"]})]})}},d={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!0},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"80px"},children:e.jsx(n,{...s})})},u={args:{label:"Menu Item",icon:"settings",showIcon:!0,items:t,showMenuIcon:!1,collapsed:!1},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(n,{...s})})},m={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(n,{label:"First Menu",icon:"folder",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!1}),e.jsx(n,{label:"Second Menu",icon:"settings",showIcon:!0,items:le,showMenuIcon:!0,collapsed:!1}),e.jsx(n,{label:"Third Menu",icon:"user",showIcon:!0,items:[{label:"Profile",link:"/profile"},{label:"Account",link:"/account"},{label:"Preferences",link:"/preferences"}],showMenuIcon:!0,collapsed:!1})]})},p={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(l,{label:"Regular Item",icon:"home",showIcon:!0,collapsed:!1}),e.jsx(n,{label:"Menu Item",icon:"folder",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!1}),e.jsx(l,{label:"Another Regular Item",icon:"dashboard",showIcon:!0,collapsed:!1}),e.jsx(n,{label:"Another Menu",icon:"settings",showIcon:!0,items:[{label:"Settings 1",link:"/settings1"},{label:"Settings 2",link:"/settings2"}],showMenuIcon:!0,collapsed:!1})]})},h={args:{label:"Navigation item",icon:"home",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!1,badge:{badgeType:"indicator",size:"m",content:"number",count:5}},render:s=>e.jsx("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:e.jsx(n,{...s})})},g={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(l,{label:"Navigation item",icon:"home",showIcon:!0,collapsed:!1,badge:{badgeType:"indicator",size:"m",content:"number",count:5}}),e.jsx(l,{label:"Another Item",icon:"dashboard",showIcon:!0,collapsed:!1,badge:{badgeType:"brand",size:"m",content:"number",count:12}})]})},b={args:{label:"Menu",items:[]},render:()=>e.jsxs("ul",{style:{listStyle:"none",padding:0,width:"300px"},children:[e.jsx(l,{label:"Navigation item",icon:"home",showIcon:!0,collapsed:!1,badge:{badgeType:"indicator",size:"m",content:"number",count:5}}),e.jsx(n,{label:"Menu with Badge",icon:"folder",showIcon:!0,items:t,showMenuIcon:!0,collapsed:!1,badge:{badgeType:"indicator",size:"m",content:"number",count:3}}),e.jsx(l,{label:"Regular Item",icon:"dashboard",showIcon:!0,collapsed:!1}),e.jsx(n,{label:"Another Menu",icon:"settings",showIcon:!0,items:[{label:"Settings 1",link:"/settings1"},{label:"Settings 2",link:"/settings2"}],showMenuIcon:!0,collapsed:!1,badge:{badgeType:"brand",size:"m",content:"number",count:99}})]})};var w,M,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(f=(M=o.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var x,y,S;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var v,N,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(N=r.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var k,T,W;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(W=(T=i.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var z,C,L;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(C=c.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var O,A,P;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(A=d.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var B,R,D;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(R=u.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var E,F,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(F=m.parameters)==null?void 0:F.docs)==null?void 0:_.source}}};var V,q,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(q=p.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var H,J,K;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Navigation item",
    icon: "home",
    showIcon: true,
    items: simpleNestedItems,
    showMenuIcon: true,
    collapsed: false,
    badge: {
      badgeType: "indicator",
      size: "m",
      content: "number",
      count: 5
    }
  },
  render: args => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavMenu {...args} />
    </ul>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: "Menu",
    items: []
  },
  render: () => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavItem label="Navigation item" icon="home" showIcon={true} collapsed={false} badge={{
      badgeType: "indicator",
      size: "m",
      content: "number",
      count: 5
    }} />
      <NavItem label="Another Item" icon="dashboard" showIcon={true} collapsed={false} badge={{
      badgeType: "brand",
      size: "m",
      content: "number",
      count: 12
    }} />
    </ul>
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: "Menu",
    items: []
  },
  render: () => <ul style={{
    listStyle: "none",
    padding: 0,
    width: "300px"
  }}>
      <NavItem label="Navigation item" icon="home" showIcon={true} collapsed={false} badge={{
      badgeType: "indicator",
      size: "m",
      content: "number",
      count: 5
    }} />
      <NavMenu label="Menu with Badge" icon="folder" showIcon={true} items={simpleNestedItems} showMenuIcon={true} collapsed={false} badge={{
      badgeType: "indicator",
      size: "m",
      content: "number",
      count: 3
    }} />
      <NavItem label="Regular Item" icon="dashboard" showIcon={true} collapsed={false} />
      <NavMenu label="Another Menu" icon="settings" showIcon={true} items={[{
      label: "Settings 1",
      link: "/settings1"
    }, {
      label: "Settings 2",
      link: "/settings2"
    }]} showMenuIcon={true} collapsed={false} badge={{
      badgeType: "brand",
      size: "m",
      content: "number",
      count: 99
    }} />
    </ul>
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const Se=["Default","WithIcon","WithLink","DeeplyNested","ControlledOpen","Collapsed","WithoutMenuIcon","MultipleMenus","MixedWithNavItems","WithBadge","NavItemWithBadge","MixedWithBadges"];export{d as Collapsed,c as ControlledOpen,i as DeeplyNested,o as Default,b as MixedWithBadges,p as MixedWithNavItems,m as MultipleMenus,g as NavItemWithBadge,h as WithBadge,a as WithIcon,r as WithLink,u as WithoutMenuIcon,Se as __namedExportsOrder,ye as default};
