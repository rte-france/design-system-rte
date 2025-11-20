import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as O,w as R,e as g,u as q}from"./index-DCXJbAaW.js";import{B as t}from"./Button-BGjTm3Lt.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const N={xs:240,s:360,m:480,l:600,xl:720},I="_card_1fphn_3",G={card:I},i=({size:n,cardType:a,clickable:l,disabled:y,children:r,onClick:M})=>e.jsx("div",{className:G.card,style:{width:N[n]},"data-card-type":a,"data-clickable":l,"data-disabled":y,onClick:M,children:r});i.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}},composes:["CardPropsCore"]};const Z={title:"Card",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"Size of the card"},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"},onClick:{action:"clicked"}},args:{onClick:O()}},Y=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),s={args:{size:"m",cardType:"default",clickable:!1,disabled:!1,children:Y}},d={args:{size:"m",cardType:"default",clickable:!1,disabled:!1},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...n,size:"xs",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:"Extra Small (xs)"}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:"240px width"})]})}),e.jsx(i,{...n,size:"s",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:"Small (s)"}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:"360px width"})]})}),e.jsx(i,{...n,size:"m",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:"Medium (m)"}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:"480px width"})]})}),e.jsx(i,{...n,size:"l",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:"Large (l)"}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:"600px width"})]})}),e.jsx(i,{...n,size:"xl",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:"Extra Large (xl)"}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:"720px width"})]})})]})},c={args:{size:"m",cardType:"default",clickable:!1,disabled:!1},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...n,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:"Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card uses the default styling with elevation shadow."})]})}),e.jsx(i,{...n,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:"Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card uses outlined styling with a border instead of shadow."})]})})]})},o={args:{size:"m",cardType:"default",clickable:!0,disabled:!1},render:n=>e.jsx(i,{...n,onClick:n.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:n,args:a})=>{const r=R(n).getByText("Clickable Card").closest("[data-clickable='true']");g(r).toBeInTheDocument(),await q.click(r),g(a.onClick).toHaveBeenCalled()}},p={args:{size:"m",cardType:"default",clickable:!0,disabled:!0},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...n,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(i,{...n,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:n})=>{const a=n.querySelectorAll("[data-disabled='true']");g(a.length).toBeGreaterThan(0),a.forEach(l=>{g(l).toHaveAttribute("data-disabled","true")})}},x={args:{size:"m",cardType:"default",clickable:!1,disabled:!1},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{...n,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(t,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(i,{...n,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(t,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(i,{...n,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(t,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(t,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},h={args:{size:"m",cardType:"default",clickable:!0,disabled:!1},render:n=>e.jsx(i,{...n,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(t,{variant:"primary",label:"Action Button",onClick:a=>{a.stopPropagation(),console.log("Button clicked inside card")}})]})})};var m,f,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: false,
    disabled: false,
    children: defaultContent
  }
}`,...(u=(f=s.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var C,v,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
      <Card {...args} size="xs">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>Extra Small (xs)</h3>
          <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>240px width</p>
        </div>
      </Card>
      <Card {...args} size="s">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>Small (s)</h3>
          <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>360px width</p>
        </div>
      </Card>
      <Card {...args} size="m">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>Medium (m)</h3>
          <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>480px width</p>
        </div>
      </Card>
      <Card {...args} size="l">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>Large (l)</h3>
          <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>600px width</p>
        </div>
      </Card>
      <Card {...args} size="xl">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>Extra Large (xl)</h3>
          <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>720px width</p>
        </div>
      </Card>
    </div>
}`,...(b=(v=d.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var k,j,z;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
      <Card {...args} cardType="default">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>Default Card</h3>
          <p style={{
          margin: "0",
          color: "#666",
          lineHeight: "1.5"
        }}>
            This card uses the default styling with elevation shadow.
          </p>
        </div>
      </Card>
      <Card {...args} cardType="outlined">
        <div style={{
        padding: "16px"
      }}>
          <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>Outlined Card</h3>
          <p style={{
          margin: "0",
          color: "#666",
          lineHeight: "1.5"
        }}>
            This card uses outlined styling with a border instead of shadow.
          </p>
        </div>
      </Card>
    </div>
}`,...(z=(j=c.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var S,T,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false
  },
  render: args => <Card {...args} onClick={args.onClick}>
      <div style={{
      padding: "16px"
    }}>
        <h2 style={{
        margin: "0 0 12px 0",
        fontSize: "20px",
        fontWeight: "600"
      }}>Clickable Card</h2>
        <p style={{
        margin: "0 0 16px 0",
        color: "#666",
        lineHeight: "1.5"
      }}>
          This card is clickable. Click anywhere on the card to trigger an action.
        </p>
        <p style={{
        margin: "0",
        color: "#999",
        fontSize: "14px"
      }}>
          Check the console or Actions panel to see the click event.
        </p>
      </div>
    </Card>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const cardText = canvas.getByText("Clickable Card");
    const card = cardText.closest("[data-clickable='true']") as HTMLElement;
    expect(card).toBeInTheDocument();
    await userEvent.click(card);
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var W,B,H;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: true
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Card {...args} cardType="default">
        <div style={{
        padding: "16px"
      }}>
          <h2 style={{
          margin: "0 0 12px 0",
          fontSize: "20px",
          fontWeight: "600"
        }}>Disabled Default Card</h2>
          <p style={{
          margin: "0",
          color: "#666",
          lineHeight: "1.5"
        }}>This card is disabled and cannot be clicked.</p>
        </div>
      </Card>
      <Card {...args} cardType="outlined">
        <div style={{
        padding: "16px"
      }}>
          <h2 style={{
          margin: "0 0 12px 0",
          fontSize: "20px",
          fontWeight: "600"
        }}>Disabled Outlined Card</h2>
          <p style={{
          margin: "0",
          color: "#666",
          lineHeight: "1.5"
        }}>This outlined card is also disabled.</p>
        </div>
      </Card>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const cards = canvasElement.querySelectorAll("[data-disabled='true']");
    expect(cards.length).toBeGreaterThan(0);
    cards.forEach(card => {
      expect(card).toHaveAttribute("data-disabled", "true");
    });
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var D,E,A;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(A=(E=x.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var P,_,L;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: "m",
    cardType: "default",
    clickable: true,
    disabled: false
  },
  render: args => <Card {...args}>
      <div style={{
      padding: "16px"
    }}>
        <h2 style={{
        margin: "0 0 12px 0",
        fontSize: "20px",
        fontWeight: "600"
      }}>Clickable Card with Button</h2>
        <p style={{
        margin: "0 0 16px 0",
        color: "#666",
        lineHeight: "1.5"
      }}>
          This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will
          stop propagation, so clicking it won't trigger the card click.
        </p>
        <Button variant="primary" label="Action Button" onClick={e => {
        e.stopPropagation();
        console.log("Button clicked inside card");
      }} />
      </div>
    </Card>
}`,...(L=(_=h.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const $=["Default","Sizes","CardTypes","Clickable","Disabled","WithButtons","ClickableWithContent"];export{c as CardTypes,o as Clickable,h as ClickableWithContent,s as Default,p as Disabled,d as Sizes,x as WithButtons,$ as __namedExportsOrder,Z as default};
