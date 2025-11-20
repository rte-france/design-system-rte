import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{I as n,R as I,T as b}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";const f=Object.keys(I),u=Object.keys(b),k={title:"Icon",component:n,tags:["autodocs"],argTypes:{name:{control:"select",options:[...f,...u].sort((e,y)=>e.localeCompare(y)),description:"Nom de l’icône à afficher",defaultValue:"check"},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:{type:"number",min:20,step:1},description:"Taille de l’icône en pixels",defaultValue:20},color:{control:"color",description:"Couleur de l’icône",defaultValue:"#000000"}}},l={args:{name:"add",size:20,color:"#000000",appearance:"outlined"},render:e=>a.jsx(n,{...e,"aria-label":e.name})},r={args:{name:"add",size:20},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:f.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[a.jsx(n,{name:e,color:"#000000","aria-label":e},e),a.jsx("span",{children:e})]},e))})},o={args:{name:"add",size:20},render:()=>a.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:u.map(e=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[a.jsx(n,{name:e,color:"#000000","aria-label":e},e),a.jsx(n,{name:e,color:"#000000",appearance:"filled","aria-label":`${e}-filled`},`${e}-filled`),a.jsx("span",{children:e})]},e))})};var s,c,i;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20,
    color: "#000000",
    appearance: "outlined"
  },
  render: args => <Icon {...args} aria-label={args.name} />
}`,...(i=(c=l.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,d,t;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20
  },
  render: () => <div style={{
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
          <Icon key={iconName} name={iconName as keyof typeof RegularIconsList} color="#000000" aria-label={iconName} />
          <span>{iconName}</span>
        </div>)}
    </div>
}`,...(t=(d=r.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};var m,g,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20
  },
  render: () => <div style={{
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
          <Icon key={iconName} name={iconName as keyof typeof TogglableIconsList} color="#000000" aria-label={iconName} />
          <Icon key={\`\${iconName}-filled\`} name={iconName as keyof typeof TogglableIconsList} color="#000000" appearance="filled" aria-label={\`\${iconName}-filled\`} />
          <span>{iconName}</span>
        </div>)}
    </div>
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const T=["Default","RegularIcons","TogglableIcons"];export{l as Default,r as RegularIcons,o as TogglableIcons,T as __namedExportsOrder,k as default};
