import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as F,w as J,e as m,u as Q}from"./index-DCXJbAaW.js";import{B as l}from"./Button-BGjTm3Lt.js";import{S as v,E as C}from"./keyboard.constants-ep-ZHn_7.js";import{u as X}from"./useActiveKeyboard-BPEscCvd.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const Z={size:{control:"select",options:["xs","s","m","l","xl"],description:"Size of the card"},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}},$=[{size:"xs",label:"Extra Small (xs)",width:"240px width"},{size:"s",label:"Small (s)",width:"360px width"},{size:"m",label:"Medium (m)",width:"480px width"},{size:"l",label:"Large (l)",width:"600px width"},{size:"xl",label:"Extra Large (xl)",width:"720px width"}],ee=[{cardType:"default",title:"Default Card",description:"This card uses the default styling with elevation shadow."},{cardType:"outlined",title:"Outlined Card",description:"This card uses outlined styling with a border instead of shadow."}],r={size:"m",cardType:"default",clickable:!1,disabled:!1},O={...r,clickable:!0},ae={...r,clickable:!0,disabled:!0},ne={xs:240,s:360,m:480,l:600,xl:720},te="_card_2viu3_3",ie={card:te},t=({size:a="m",cardType:n="default",clickable:i=!1,disabled:u=!1,children:s,onClick:d,...V})=>{const L=f=>{!u&&i&&(f.key===v||f.key===C)&&(f.preventDefault(),d==null||d())},{onKeyDown:Y,onKeyUp:G,onBlur:U}=X({onKeyUp:L},{interactiveKeyCodes:[v,C]});return e.jsx("div",{className:ie.card,style:{width:ne[a]},"data-card-type":n,"data-clickable":i,"data-disabled":u,tabIndex:i?0:-1,onClick:d,onKeyDown:Y,onKeyUp:G,onBlur:U,...V,children:s})};t.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},cardType:{defaultValue:{value:'"default"',computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CardPropsCore"]};const ye={title:"Card",component:t,tags:["autodocs"],argTypes:{...Z,onClick:{action:"clicked"}},args:{onClick:F()}},re=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),o={args:{...r,children:re}},c={args:r,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:$.map(n=>e.jsx(t,{...a,size:n.size,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:n.label}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:n.width})]})},n.size))})},p={args:r,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ee.map(n=>e.jsx(t,{...a,cardType:n.cardType,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:n.title}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:n.description})]})},n.cardType))})},g={args:O,render:a=>e.jsx(t,{...a,onClick:a.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:a,args:n})=>{const s=J(a).getByText("Clickable Card").closest("[data-clickable='true']");m(s).toBeInTheDocument(),await Q.click(s),m(n.onClick).toHaveBeenCalled()}},h={args:ae,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{...a,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(t,{...a,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:a})=>{const n=a.querySelectorAll("[data-disabled='true']");m(n.length).toBeGreaterThan(0),n.forEach(i=>{m(i).toHaveAttribute("data-disabled","true")})}},x={args:r,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(l,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(l,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(l,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(l,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},y={args:O,render:a=>e.jsx(t,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(l,{variant:"primary",label:"Action Button",onClick:n=>{n.stopPropagation(),console.log("Button clicked inside card")}})]})})};var b,k,S;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultStoryArgs,
    children: defaultContent
  }
}`,...(S=(k=o.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,T,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var z,B,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var W,D,E;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,P,_;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(P=h.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,K,R;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(R=(K=x.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var N,I,M;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(M=(I=y.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};const me=["Default","Sizes","CardTypes","Clickable","Disabled","WithButtons","ClickableWithContent"];export{p as CardTypes,g as Clickable,y as ClickableWithContent,o as Default,h as Disabled,c as Sizes,x as WithButtons,me as __namedExportsOrder,ye as default};
