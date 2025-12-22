import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{f as J,w as Q,e as m,u as X}from"./index-DCXJbAaW.js";import{B as l}from"./Button-Ciu9xNcR.js";import{S as v,E as C}from"./keyboard.constants-ep-ZHn_7.js";import{r as Z}from"./index-G8LIXM5I.js";import{u as $}from"./useActiveKeyboard-BPEscCvd.js";import"./index-yBjzXJbu.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Cd3dEy6T.js";import"./Icon-DjEid3Hw.js";import"./index-DSdvzt-y.js";import"./_commonjsHelpers-CqkleIqs.js";const ee={size:{control:"select",options:["xs","s","m","l","xl"],description:"Size of the card"},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}},ae=[{size:"xs",label:"Extra Small (xs)",width:"240px width"},{size:"s",label:"Small (s)",width:"360px width"},{size:"m",label:"Medium (m)",width:"480px width"},{size:"l",label:"Large (l)",width:"600px width"},{size:"xl",label:"Extra Large (xl)",width:"720px width"}],te=[{cardType:"default",title:"Default Card",description:"This card uses the default styling with elevation shadow."},{cardType:"outlined",title:"Outlined Card",description:"This card uses outlined styling with a border instead of shadow."}],r={size:"m",cardType:"default",clickable:!1,disabled:!1},L={...r,clickable:!0},ne={...r,clickable:!0,disabled:!0},ie={xs:240,s:360,m:480,l:600,xl:720},re="_card_1pbdy_29",le={card:re},n=Z.forwardRef(({size:a="m",cardType:t="default",clickable:i=!1,disabled:u=!1,children:s,onClick:o,...N},R)=>{const Y=f=>{!u&&i&&(f.key===v||f.key===C)&&(f.preventDefault(),o==null||o())},{onKeyDown:G,onKeyUp:U,onBlur:F}=$({onKeyUp:Y},{interactiveKeyCodes:[v,C]});return e.jsx("div",{ref:R,className:le.card,style:{width:ie[a]},"data-card-type":t,"data-clickable":i,"data-disabled":u,tabIndex:i?0:-1,onClick:o,onKeyDown:G,onKeyUp:U,onBlur:F,...N,children:s})});n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},cardType:{defaultValue:{value:'"default"',computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CardPropsCore","Omit"]};const Ce={title:"Composants/Card",component:n,tags:["autodocs"],argTypes:{...ee,onClick:{action:"clicked"}},args:{onClick:J()}},se=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),d={args:{...r,children:se}},c={args:r,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ae.map(t=>e.jsx(n,{...a,size:t.size,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:t.label}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:t.width})]})},t.size))})},p={args:r,render:a=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:te.map(t=>e.jsx(n,{...a,cardType:t.cardType,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:t.title}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:t.description})]})},t.cardType))})},g={args:L,render:a=>e.jsx(n,{...a,onClick:a.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:a,args:t})=>{const s=Q(a).getByText("Clickable Card").closest("[data-clickable='true']");m(s).toBeInTheDocument(),await X.click(s),m(t.onClick).toHaveBeenCalled()}},h={args:ne,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...a,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(n,{...a,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:a})=>{const t=a.querySelectorAll("[data-disabled='true']");m(t.length).toBeGreaterThan(0),t.forEach(i=>{m(i).toHaveAttribute("data-disabled","true")})}},x={args:r,render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(l,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(l,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(l,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(l,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},y={args:L,render:a=>e.jsx(n,{...a,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(l,{variant:"primary",label:"Action Button",onClick:t=>{t.stopPropagation(),console.log("Button clicked inside card")}})]})})};var b,k,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...defaultStoryArgs,
    children: defaultContent
  }
}`,...(S=(k=d.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var j,T,w;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var W,E,D;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(D=(E=g.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var H,P,_;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(_=(P=h.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var q,K,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(O=(K=x.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var I,M,V;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(V=(M=y.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const be=["Default","Sizes","CardTypes","Clickable","Disabled","WithButtons","ClickableWithContent"];export{p as CardTypes,g as Clickable,y as ClickableWithContent,d as Default,h as Disabled,c as Sizes,x as WithButtons,be as __namedExportsOrder,Ce as default};
