import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./Button-BGjTm3Lt.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const u={xs:240,s:360,m:480,l:600,xl:720},f="_card_1v1zt_3",v={card:f},a=({size:e,cardType:x,clickable:m,disabled:y,children:g,onClick:h})=>n.jsx("div",{className:v.card,style:{width:u[e]},"data-card-type":x,"data-clickable":m,"data-disabled":y,onClick:h,children:g});a.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["CardPropsCore"]};const w={title:"Card",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"Size of the card"},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}}},C=n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),n.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."}),n.jsx(t,{variant:"primary",label:"Action Button",onClick:()=>console.log("Button clicked in card")})]}),i={args:{size:"m",cardType:"default",clickable:!1,disabled:!1,children:C}},r={args:{size:"m",cardType:"default",clickable:!1,disabled:!1},render:e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[n.jsx(a,{...e,children:n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),n.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),n.jsx(t,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),n.jsx(a,{...e,children:n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),n.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),n.jsx(t,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),n.jsx(a,{...e,children:n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),n.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(t,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),n.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})};var l,o,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
    children: defaultContent
  }
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Card {...args}>
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 12px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>Primary Button</h3>
          <p style={{
          margin: "0 0 16px 0",
          color: "#666",
          lineHeight: "1.5"
        }}>Card with primary button variant</p>
          <Button variant="primary" label="Primary Action" onClick={() => console.log("Primary clicked")} />
        </div>
      </Card>
      <Card {...args}>
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 12px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>Secondary Button</h3>
          <p style={{
          margin: "0 0 16px 0",
          color: "#666",
          lineHeight: "1.5"
        }}>Card with secondary button variant</p>
          <Button variant="secondary" label="Secondary Action" onClick={() => console.log("Secondary clicked")} />
        </div>
      </Card>
      <Card {...args}>
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 12px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>Multiple Buttons</h3>
          <p style={{
          margin: "0 0 16px 0",
          color: "#666",
          lineHeight: "1.5"
        }}>Card with multiple button actions</p>
          <div style={{
          display: "flex",
          gap: "8px"
        }}>
            <Button variant="primary" label="Save" onClick={() => console.log("Save clicked")} />
            <Button variant="neutral" label="Cancel" onClick={() => console.log("Cancel clicked")} />
          </div>
        </div>
      </Card>
    </div>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const T=["Default","WithButtonVariants"];export{i as Default,r as WithButtonVariants,T as __namedExportsOrder,w as default};
