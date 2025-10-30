import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as q,r as D}from"./index-G8LIXM5I.js";import{c as O}from"./index-DSdvzt-y.js";import{N as P}from"./NavItem-CFn-eMwP.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-yqZBktoR.js";import"./Icon-DjEid3Hw.js";import"./Banner-B6erURIj.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-B-hhLjRd.js";import"./IconButton-CMN6gjhA.js";import"./Breadcrumbs-ChEiqn64.js";import"./DropdownItem-4LmuXddf.js";import"./keyboard.constants-ep-ZHn_7.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B0TD5a92.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./Link-BaxOqisZ.js";import"./Checkbox-BN7L2lXB.js";import"./CheckboxGroup-BBO4aCWc.js";import"./Chip-C9SfH6vI.js";import"./Grid-D7MpEJbM.js";import"./IconButtonToggle-B9jCykoe.js";import"./Popover-BD7Hqnsk.js";import"./dom.constants-pEgPeCLJ.js";import"./RadioButton-DjAJ63-u.js";import"./RadioButtonGroup-sexQO3qG.js";import"./SegmentedControl-D2dD8EzS.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";import"./SplitButton-CfbzON5K.js";import"./Switch-BKNj42Vr.js";import"./Textarea-B6HTdPn9.js";import"./TextInput-BkZpOysD.js";import"./Tooltip-DQ5GOKua.js";const F=64,E={s:224,m:320,l:504},V="_sideNavContainer_em608_3",J="_sideNav_em608_3",L="_sideNavHeader_em608_27",U="_sideNavBody_em608_37",W="_sideNavFooter_em608_46",G="_collapsibleSection_em608_56",r={sideNavContainer:V,sideNav:J,sideNavHeader:L,sideNavBody:U,sideNavFooter:W,collapsibleSection:G},n=q.forwardRef(({size:s="m",header:c,body:p,footer:m,showHeader:k=!0,showFooter:I=!0,collapsible:R,children:h},H)=>{const[i,A]=D.useState(!1),B=()=>{A(!i)},M=i?"arrow-double-right":"arrow-double-left";return e.jsxs("div",{className:r.sideNavContainer,children:[e.jsxs("nav",{ref:H,className:O(r.sideNav,i?r.collapsed:""),style:{minWidth:i?F:E[s]},children:[k&&c&&e.jsx("div",{className:r.sideNavHeader,children:i?null:c}),p&&e.jsx("div",{className:r.sideNavBody,children:i?null:p}),I&&m&&e.jsx("div",{className:r.sideNavFooter,children:i?null:m}),R&&e.jsx("div",{className:r.collapsibleSection,children:e.jsx(P,{icon:M,showIcon:!0,collapsed:i,onClick:B,children:!i&&e.jsx("span",{children:"Réduire le menu"})})})]}),h&&e.jsx("div",{className:r.sideNavContent,children:h})]})});n.displayName="SideNav";n.__docgenInfo={description:"",methods:[],displayName:"SideNav",props:{header:{required:!1,tsType:{name:"ReactNode"},description:""},body:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},showHeader:{defaultValue:{value:"true",computed:!1},required:!1},showFooter:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Partial","Omit"]};const He={title:"SideNav (développement en cours)",id:"SideNav",component:n,tags:["autodocs"],argTypes:{collapsible:{control:"boolean"},size:{control:"select",options:["s","m","l"]}}},K=e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{children:"Site Title"}),e.jsx("p",{children:"Site Description"})]}),l={args:{collapsible:!0,size:"l"},render:s=>e.jsx(n,{size:s.size,collapsible:s.collapsible,header:e.jsx("div",{children:e.jsx("h2",{children:"Navigation"})}),body:e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:e.jsx("a",{href:"#home",children:"Home"})}),e.jsx("li",{children:e.jsx("a",{href:"#about",children:"About"})}),e.jsx("li",{children:e.jsx("a",{href:"#services",children:"Services"})}),e.jsx("li",{children:e.jsx("a",{href:"#contact",children:"Contact"})})]}),footer:e.jsx("div",{style:{fontSize:"0.875rem"},children:e.jsx("p",{children:"© 2025"})}),children:K})},a={render:s=>e.jsx(n,{size:s.size,collapsible:s.collapsible,header:e.jsx("div",{children:e.jsx("h3",{children:"Menu"})}),body:e.jsxs("nav",{children:[e.jsx("a",{href:"#item1",children:"Item 1"}),e.jsx("a",{href:"#item2",children:"Item 2"}),e.jsx("a",{href:"#item3",children:"Item 3"})]})})},o={render:s=>e.jsx(n,{size:s.size,collapsible:s.collapsible,body:e.jsxs("div",{children:[e.jsx("h2",{children:"Main Content"}),e.jsx("p",{children:"This is the only slot with content."})]})})},t={render:s=>e.jsx(n,{size:s.size,collapsible:s.collapsible,header:e.jsxs("div",{style:{padding:"1rem",borderBottom:"1px solid #ccc"},children:[e.jsx("h2",{style:{margin:0},children:"Dashboard"}),e.jsx("p",{style:{margin:"0.5rem 0 0 0",fontSize:"0.875rem",color:"#666"},children:"v1.0.0"})]}),body:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsxs("div",{style:{marginBottom:"1.5rem"},children:[e.jsx("h4",{children:"Main Menu"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e.jsx("li",{children:e.jsx("a",{href:"#overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#analytics",children:"Analytics"})}),e.jsx("li",{children:e.jsx("a",{href:"#reports",children:"Reports"})})]})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Settings"}),e.jsxs("ul",{style:{listStyle:"none",padding:0,margin:0},children:[e.jsx("li",{children:e.jsx("a",{href:"#profile",children:"Profile"})}),e.jsx("li",{children:e.jsx("a",{href:"#preferences",children:"Preferences"})})]})]})]}),footer:e.jsx("div",{style:{padding:"1rem",textAlign:"center"},children:e.jsx("small",{children:"User: John Doe"})})})},d={args:{collapsible:!0},render:s=>e.jsx(n,{size:s.size,collapsible:s.collapsible,header:e.jsx("h3",{children:"📋 Tasks"}),body:e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[e.jsx("li",{children:"✓ Task 1"}),e.jsx("li",{children:"✓ Task 2"}),e.jsx("li",{children:"⏳ Task 3"})]}),footer:e.jsx("small",{children:"4 tasks total"})})};var v,u,x;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    size: "l"
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} header={<div>
          <h2>Navigation</h2>
        </div>} body={<ul style={{
    listStyle: "none",
    padding: 0
  }}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>} footer={<div style={{
    fontSize: "0.875rem"
  }}>
          <p>© 2025</p>
        </div>}>
      {siteContent}
    </SideNav>
}`,...(x=(u=l.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var j,f,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <SideNav size={args.size} collapsible={args.collapsible} header={<div>
          <h3>Menu</h3>
        </div>} body={<nav>
          <a href="#item1">Item 1</a>
          <a href="#item2">Item 2</a>
          <a href="#item3">Item 3</a>
        </nav>} />
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var g,N,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <SideNav size={args.size} collapsible={args.collapsible} body={<div>
          <h2>Main Content</h2>
          <p>This is the only slot with content.</p>
        </div>} />
}`,...(b=(N=o.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var S,z,C;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <SideNav size={args.size} collapsible={args.collapsible} header={<div style={{
    padding: "1rem",
    borderBottom: "1px solid #ccc"
  }}>
          <h2 style={{
      margin: 0
    }}>Dashboard</h2>
          <p style={{
      margin: "0.5rem 0 0 0",
      fontSize: "0.875rem",
      color: "#666"
    }}>v1.0.0</p>
        </div>} body={<div style={{
    padding: "1rem"
  }}>
          <div style={{
      marginBottom: "1.5rem"
    }}>
            <h4>Main Menu</h4>
            <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0
      }}>
              <li>
                <a href="#overview">Overview</a>
              </li>
              <li>
                <a href="#analytics">Analytics</a>
              </li>
              <li>
                <a href="#reports">Reports</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Settings</h4>
            <ul style={{
        listStyle: "none",
        padding: 0,
        margin: 0
      }}>
              <li>
                <a href="#profile">Profile</a>
              </li>
              <li>
                <a href="#preferences">Preferences</a>
              </li>
            </ul>
          </div>
        </div>} footer={<div style={{
    padding: "1rem",
    textAlign: "center"
  }}>
          <small>User: John Doe</small>
        </div>} />
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var _,T,w;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    collapsible: true
  },
  render: args => <SideNav size={args.size} collapsible={args.collapsible} header={<h3>📋 Tasks</h3>} body={<ul style={{
    listStyle: "none",
    padding: 0
  }}>
          <li>✓ Task 1</li>
          <li>✓ Task 2</li>
          <li>⏳ Task 3</li>
        </ul>} footer={<small>4 tasks total</small>} />
}`,...(w=(T=d.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const Ae=["Default","HeaderAndContent","ContentOnly","ComplexLayout","Collapsible"];export{d as Collapsible,t as ComplexLayout,o as ContentOnly,l as Default,a as HeaderAndContent,Ae as __namedExportsOrder,He as default};
