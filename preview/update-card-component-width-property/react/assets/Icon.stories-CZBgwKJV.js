import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-G8LIXM5I.js";import{I as r,R as b,T as h}from"./Icon-DOkBvtOM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const y=Object.keys(b),I=Object.keys(h),z={title:"Composants/Icon",component:r,tags:["autodocs"],argTypes:{name:{control:"select",options:[...y,...I].sort((a,e)=>a.localeCompare(e)),description:"Nom de l’icône à afficher",defaultValue:"check"},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:{type:"number",min:20,step:1},description:"Taille de l’icône en pixels",defaultValue:20},color:{control:"color",description:"Couleur de l’icône",defaultValue:"#000000"}}},l={args:{name:"add",size:20,color:"#000000",appearance:"outlined"},render:a=>n.jsx(r,{...a,"aria-label":a.name})},s={args:{name:"add",size:20},render:a=>n.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:y.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[c.createElement(r,{...a,key:e,name:e,"aria-label":e}),n.jsx("span",{children:e})]},e))})},o={args:{name:"add",size:20},render:a=>n.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:I.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[c.createElement(r,{...a,key:e,name:e,"aria-label":e}),c.createElement(r,{...a,name:e,key:`${e}-filled`,appearance:"filled","aria-label":`${e}-filled`}),n.jsx("span",{children:e})]},e))})};var i,p,t;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20,
    color: "#000000",
    appearance: "outlined"
  },
  render: args => <Icon {...args} aria-label={args.name} />
}`,...(t=(p=l.parameters)==null?void 0:p.docs)==null?void 0:t.source}}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "10px",
    height: "700px"
  }}>
      {RegularIconIds.map(iconName => <div key={iconName} style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      border: "1px solid #ccc",
      padding: "5px"
    }}>
          <Icon {...args} key={iconName} name={iconName as keyof typeof RegularIconsList} aria-label={iconName} />
          <span>{iconName}</span>
        </div>)}
    </div>
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,f,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    gap: "10px",
    height: "700px"
  }}>
      {TogglableIconIds.map(iconName => <div key={iconName} style={{
      display: "flex",
      alignItems: "center",
      gap: "5px",
      border: "1px solid #ccc",
      padding: "5px"
    }}>
          <Icon {...args} key={iconName} name={iconName as keyof typeof TogglableIconsList} aria-label={iconName} />
          <Icon {...args} name={iconName as keyof typeof TogglableIconsList} key={\`\${iconName}-filled\`} appearance="filled" aria-label={\`\${iconName}-filled\`} />
          <span>{iconName}</span>
        </div>)}
    </div>
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};const D=["Default","RegularIcons","TogglableIcons"];export{l as Default,s as RegularIcons,o as TogglableIcons,D as __namedExportsOrder,z as default};
