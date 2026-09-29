import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-G8LIXM5I.js";import{e as d}from"./index-4rjIhT2C.js";import{I as r,R as O,T as D}from"./Icon-VewZnR13.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const R=Object.keys(O),E=Object.keys(D),p="icon-story-target",z=a=>a.querySelector(`[data-testid="${p}"] svg`),V={title:"Composants/Icon",component:r,tags:["autodocs"],argTypes:{name:{control:"select",options:[...R,...E].sort((a,e)=>a.localeCompare(e)),description:"Nom de l’icône à afficher",defaultValue:"check"},appearance:{control:"select",options:["outlined","filled"],description:"Apparence de l’icône (pour les icônes togglables)",defaultValue:"outlined"},size:{control:{type:"number",min:20,step:1},description:"Taille de l’icône en pixels",defaultValue:20},color:{control:"color",description:"Couleur de l’icône",defaultValue:"#000000"}}},s={args:{name:"add",size:20,color:"#000000",appearance:"outlined"},render:a=>n.jsx(r,{...a,color:"var(--content-primary)","aria-label":a.name})},o={args:{name:"add",size:20,appearance:"outlined"},render:a=>n.jsx("div",{"data-testid":p,children:n.jsx(r,{...a})}),play:async({canvasElement:a})=>{const e=z(a);d(e).toHaveAttribute("aria-hidden","true")}},t={args:{name:"add",size:20,appearance:"outlined","aria-label":"Add item","aria-hidden":!1},render:a=>n.jsx("div",{"data-testid":p,children:n.jsx(r,{...a})}),play:async({canvasElement:a})=>{const e=z(a);d(e).toHaveAttribute("aria-label","Add item"),d(e).not.toHaveAttribute("aria-hidden","true")}},i={args:{name:"add",size:20},render:a=>n.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:R.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[l.createElement(r,{...a,key:e,name:e,"aria-label":e}),n.jsx("span",{children:e})]},e))})},c={args:{name:"add",size:20},render:a=>n.jsx("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",gap:"10px",height:"700px"},children:E.map(e=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"5px",border:"1px solid #ccc",padding:"5px"},children:[l.createElement(r,{...a,key:e,name:e,"aria-label":e}),l.createElement(r,{...a,name:e,key:`${e}-filled`,appearance:"filled","aria-label":`${e}-filled`}),n.jsx("span",{children:e})]},e))})};var m,g,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20,
    color: "#000000",
    appearance: "outlined"
  },
  render: args => <Icon {...args} color="var(--content-primary)" aria-label={args.name} />
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var x,y,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20,
    appearance: "outlined"
  },
  render: args => <div data-testid={STORY_ICON_TARGET}>
      <Icon {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const iconSvg = getStoryIconSvg(canvasElement);
    expect(iconSvg).toHaveAttribute("aria-hidden", "true");
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,I,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: "add",
    size: 20,
    appearance: "outlined",
    "aria-label": "Add item",
    "aria-hidden": false
  },
  render: args => <div data-testid={STORY_ICON_TARGET}>
      <Icon {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const iconSvg = getStoryIconSvg(canvasElement);
    expect(iconSvg).toHaveAttribute("aria-label", "Add item");
    expect(iconSvg).not.toHaveAttribute("aria-hidden", "true");
  }
}`,...(b=(I=t.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var h,S,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var j,k,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(k=c.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const W=["Default","DecorativeIcon","SemanticIcon","RegularIcons","TogglableIcons"];export{o as DecorativeIcon,s as Default,i as RegularIcons,t as SemanticIcon,c as TogglableIcons,W as __namedExportsOrder,V as default};
