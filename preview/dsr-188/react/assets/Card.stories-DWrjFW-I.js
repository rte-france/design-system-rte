import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as O,w as V,e as y,u as L}from"./index-DCXJbAaW.js";import{B as l}from"./Button-BGjTm3Lt.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const G={size:{control:"select",options:["xs","s","m","l","xl"],description:"Size of the card"},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}},Y=[{size:"xs",label:"Extra Small (xs)",width:"240px width"},{size:"s",label:"Small (s)",width:"360px width"},{size:"m",label:"Medium (m)",width:"480px width"},{size:"l",label:"Large (l)",width:"600px width"},{size:"xl",label:"Extra Large (xl)",width:"720px width"}],F=[{cardType:"default",title:"Default Card",description:"This card uses the default styling with elevation shadow."},{cardType:"outlined",title:"Outlined Card",description:"This card uses outlined styling with a border instead of shadow."}],i={size:"m",cardType:"default",clickable:!1,disabled:!1},I={...i,clickable:!0},J={...i,clickable:!0,disabled:!0},K={xs:240,s:360,m:480,l:600,xl:720},Q="_card_2viu3_3",U={card:Q},t=({size:a="m",cardType:n="default",clickable:r=!1,disabled:m=!1,children:s,onClick:M,...N})=>e.jsx("div",{className:U.card,style:{width:K[a]},"data-card-type":n,"data-clickable":r,"data-disabled":m,tabIndex:r?0:-1,onClick:M,...N,children:s});t.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},cardType:{defaultValue:{value:'"default"',computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CardPropsCore"]};const re={title:"Card",component:t,tags:["autodocs"],argTypes:{...G,onClick:{action:"clicked"}},args:{onClick:O()}},X=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),d={args:{...i,children:X}},c={args:i,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Y.map(n=>e.jsx(t,{...a,size:n.size,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:n.label}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:n.width})]})},n.size))})},o={args:i,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:F.map(n=>e.jsx(t,{...a,cardType:n.cardType,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:n.title}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:n.description})]})},n.cardType))})},p={args:I,render:a=>e.jsx(t,{...a,onClick:a.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:a,args:n})=>{const s=V(a).getByText("Clickable Card").closest("[data-clickable='true']");y(s).toBeInTheDocument(),await L.click(s),y(n.onClick).toHaveBeenCalled()}},g={args:J,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{...a,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(t,{...a,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:a})=>{const n=a.querySelectorAll("[data-disabled='true']");y(n.length).toBeGreaterThan(0),n.forEach(r=>{y(r).toHaveAttribute("data-disabled","true")})}},h={args:i,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(l,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(l,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(l,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(l,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},x={args:I,render:a=>e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(l,{variant:"primary",label:"Action Button",onClick:n=>{n.stopPropagation(),console.log("Button clicked inside card")}})]})})};var u,f,C;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultStoryArgs,
    children: defaultContent
  }
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var v,b,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: defaultStoryArgs,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      {sizeExamples.map(example => <Card key={example.size} {...args} size={example.size}>
          <div style={{
        padding: "16px"
      }}>
            <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "16px",
          fontWeight: "600"
        }}>{example.label}</h3>
            <p style={{
          margin: "0",
          color: "#666",
          fontSize: "14px"
        }}>{example.width}</p>
          </div>
        </Card>)}
    </div>
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,j,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: defaultStoryArgs,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      {cardTypeExamples.map(example => <Card key={example.cardType} {...args} cardType={example.cardType}>
          <div style={{
        padding: "16px"
      }}>
            <h3 style={{
          margin: "0 0 8px 0",
          fontSize: "18px",
          fontWeight: "600"
        }}>{example.title}</h3>
            <p style={{
          margin: "0",
          color: "#666",
          lineHeight: "1.5"
        }}>{example.description}</p>
          </div>
        </Card>)}
    </div>
}`,...(T=(j=o.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var z,w,B;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: clickableStoryArgs,
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
}`,...(B=(w=p.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var W,A,H;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: disabledStoryArgs,
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
}`,...(H=(A=g.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,E,P;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: defaultStoryArgs,
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
}`,...(P=(E=h.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var q,_,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: clickableStoryArgs,
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
}`,...(R=(_=x.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const le=["Default","Sizes","CardTypes","Clickable","Disabled","WithButtons","ClickableWithContent"];export{o as CardTypes,p as Clickable,x as ClickableWithContent,d as Default,g as Disabled,c as Sizes,h as WithButtons,le as __namedExportsOrder,re as default};
