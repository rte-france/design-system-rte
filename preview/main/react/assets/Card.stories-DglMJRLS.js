import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as X,e as u,u as Z,f as $}from"./index-4rjIhT2C.js";import{B as s}from"./Button-b4mHgHU2.js";import{S as v,E as C}from"./keyboard.constants-BverKK8B.js";import{r as ee}from"./index-G8LIXM5I.js";import{u as ae}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";import"./Icon-DgLH6pPJ.js";import"./index-DSdvzt-y.js";import"./_commonjsHelpers-CqkleIqs.js";const R="480px",te={width:{control:"text",description:"Width of the card (e.g. '480px', '50%'). Defaults to 480px."},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}},ne=[{label:"Extra Small",width:"240px"},{label:"Small",width:"360px"},{label:"Medium",width:"480px"},{label:"Large",width:"600px"},{label:"Extra Large",width:"720px"}],ie=[{cardType:"default",title:"Default Card",description:"This card uses the default styling with elevation shadow."},{cardType:"outlined",title:"Outlined Card",description:"This card uses outlined styling with a border instead of shadow."}],l={width:R,cardType:"default",clickable:!1,disabled:!1},V={...l,clickable:!0},re={...l,clickable:!0,disabled:!0},le="_card_t1qi5_1",se={card:le},n=ee.forwardRef(({width:a=R,cardType:t="default",clickable:i=!1,disabled:d=!1,children:o,onClick:r,...N},U)=>{const Y=f=>{!d&&i&&(f.key===v||f.key===C)&&(f.preventDefault(),r==null||r())},G=()=>{!d&&i&&(r==null||r())},{onKeyDown:F,onKeyUp:J,onBlur:Q}=ae({onKeyUp:Y},{interactiveKeyCodes:[v,C]});return e.jsx("div",{ref:U,className:se.card,style:{width:a},"data-card-type":t,"data-clickable":i,"data-disabled":d,tabIndex:i?0:-1,onClick:G,onKeyDown:F,onKeyUp:J,onBlur:Q,...N,children:o})});n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{defaultValue:{value:'"480px"',computed:!1},required:!1},cardType:{defaultValue:{value:'"default"',computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CardPropsCore","Omit"]};const be={title:"Composants/Card",component:n,tags:["autodocs"],argTypes:{...te,onClick:{action:"clicked"}},args:{onClick:$()}},de=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),c={args:{...l,children:de}},p={args:l,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ne.map(t=>e.jsx(n,{...a,width:t.width,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:t.label}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:t.width})]})},t.width))})},h={args:l,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ie.map(t=>e.jsx(n,{...a,cardType:t.cardType,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:t.title}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:t.description})]})},t.cardType))})},g={args:V,render:a=>e.jsx(n,{...a,onClick:a.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:a,args:t})=>{const o=X(a).getByText("Clickable Card").closest("[data-clickable='true']");u(o).toBeInTheDocument(),await Z.click(o),u(t.onClick).toHaveBeenCalled()}},x={args:re,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...a,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(n,{...a,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:a})=>{const t=a.querySelectorAll("[data-disabled='true']");u(t.length).toBeGreaterThan(0),t.forEach(i=>{u(i).toHaveAttribute("data-disabled","true")})}},y={args:l,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(s,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(s,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(s,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(s,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},m={args:V,render:a=>e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(s,{variant:"primary",label:"Action Button",onClick:t=>{t.stopPropagation(),console.log("Button clicked inside card")}})]})})};var b,k,S;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultStoryArgs,
    children: defaultContent
  }
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,T,w;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: defaultStoryArgs,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      {widthExamples.map(example => <Card key={example.width} {...args} width={example.width}>
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
}`,...(w=(T=p.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var B,W,A;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(W=h.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,E,H;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(H=(E=g.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var z,_,P;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(P=(_=x.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var q,K,O;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(K=y.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var I,L,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ke=["Default","Widths","CardTypes","Clickable","Disabled","WithButtons","ClickableWithContent"];export{h as CardTypes,g as Clickable,m as ClickableWithContent,c as Default,x as Disabled,p as Widths,y as WithButtons,ke as __namedExportsOrder,be as default};
