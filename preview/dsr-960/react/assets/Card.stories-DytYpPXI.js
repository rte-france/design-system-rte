import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as ce,e as p,u as pe,f as he}from"./index-4rjIhT2C.js";import{B as c}from"./Button-KJfdYR4G.js";import{S as B,E as A}from"./keyboard.constants-BverKK8B.js";import{r as g}from"./index-G8LIXM5I.js";import{u as ge}from"./useActiveKeyboard-DaOmFJe_.js";import"./index-yBjzXJbu.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./_commonjsHelpers-CqkleIqs.js";const Z="480px",ue={width:{control:"text",description:"Width of the card (e.g. '480px', '50%'). Defaults to 480px."},cardType:{control:"select",options:["default","outlined"],description:"Type of card styling"},clickable:{control:"boolean",description:"Whether the card is clickable"},disabled:{control:"boolean",description:"Whether the card is disabled"}},xe=[{label:"Extra Small",width:"240px"},{label:"Small",width:"360px"},{label:"Medium",width:"480px"},{label:"Large",width:"600px"},{label:"Extra Large",width:"720px"}],ye=[{cardType:"default",title:"Default Card",description:"This card uses the default styling with elevation shadow."},{cardType:"outlined",title:"Outlined Card",description:"This card uses outlined styling with a border instead of shadow."}],o={width:Z,cardType:"default",clickable:!1,disabled:!1},j={...o,clickable:!0},me={...o,clickable:!0,disabled:!0};function fe(){return typeof console<"u"&&typeof console.error=="function"}function ve(t,a,d){fe()&&console.error(`[${t}] ${a}`)}const Ce="_card_t1qi5_1",be={card:Ce},n=g.forwardRef(({width:t=Z,height:a="auto",cardType:d="default",clickable:i=!1,disabled:l=!1,children:ee,onClick:s,role:te,"aria-label":k,"aria-labelledby":S,...ae},h)=>{const T=g.useRef(null),[ne,re]=g.useState(!0);g.useLayoutEffect(()=>{var r,w;i&&!k&&!S&&!((w=(r=T.current)==null?void 0:r.textContent)!=null&&w.trim())&&(ve("Card","Clickable cards must have an accessible name via aria-label, aria-labelledby, or text content."),re(!1))},[k,S,i]);const ie=r=>{!l&&i&&(r.key===B||r.key===A)&&(r.preventDefault(),s==null||s())},le=()=>{!l&&i&&(s==null||s())},{onKeyDown:se,onKeyUp:oe,onBlur:de}=ge({onKeyUp:ie},{interactiveKeyCodes:[B,A]});return ne?e.jsx("div",{ref:r=>{T.current=r,typeof h=="function"?h(r):h&&(h.current=r)},className:be.card,style:{width:t,height:a},"data-card-type":d,"data-clickable":i,"data-disabled":l,tabIndex:i?0:-1,role:te??(i?"button":void 0),"aria-label":k,"aria-labelledby":S,onClick:le,onKeyDown:se,onKeyUp:oe,onBlur:de,...ae,children:ee}):null});n.__docgenInfo={description:"",methods:[],displayName:"Card",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},width:{defaultValue:{value:'"480px"',computed:!1},required:!1},height:{defaultValue:{value:'"auto"',computed:!1},required:!1},cardType:{defaultValue:{value:'"default"',computed:!1},required:!1},clickable:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CardPropsCore","Omit"]};const _e={title:"Composants/Card",component:n,tags:["autodocs"],argTypes:{...ue,onClick:{action:"clicked"}},args:{onClick:he()}},ke=e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Card Title"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This is a sample card with some content. You can add any content you want here, including text, images, buttons, or other components."})]}),u={args:{...o,children:ke}},x={args:o,render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:xe.map(a=>e.jsx(n,{...t,width:a.width,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"16px",fontWeight:"600"},children:a.label}),e.jsx("p",{style:{margin:"0",color:"#666",fontSize:"14px"},children:a.width})]})},a.width))})},y={args:o,render:t=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:ye.map(a=>e.jsx(n,{...t,cardType:a.cardType,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0",fontSize:"18px",fontWeight:"600"},children:a.title}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:a.description})]})},a.cardType))})},m={tags:["!autodocs"],args:j,render:t=>e.jsx(n,{...t,onClick:t.onClick,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger an action."}),e.jsx("p",{style:{margin:"0",color:"#999",fontSize:"14px"},children:"Check the console or Actions panel to see the click event."})]})}),play:async({canvasElement:t,args:a})=>{const l=ce(t).getByText("Clickable Card").closest("[data-clickable='true']");p(l).toBeInTheDocument(),await pe.click(l),p(a.onClick).toHaveBeenCalled()}},f={tags:["!autodocs"],args:{...j,children:void 0},play:async({canvasElement:t})=>{p(t.querySelector("[data-clickable='true']")).not.toBeInTheDocument()}},v={args:me,render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...t,cardType:"default",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Default Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This card is disabled and cannot be clicked."})]})}),e.jsx(n,{...t,cardType:"outlined",children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Disabled Outlined Card"}),e.jsx("p",{style:{margin:"0",color:"#666",lineHeight:"1.5"},children:"This outlined card is also disabled."})]})})]}),play:async({canvasElement:t})=>{const a=t.querySelectorAll("[data-disabled='true']");p(a.length).toBeGreaterThan(0),a.forEach(d=>{p(d).toHaveAttribute("data-disabled","true")})}},C={args:o,render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(n,{...t,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Primary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with primary button variant"}),e.jsx(c,{variant:"primary",label:"Primary Action",onClick:()=>console.log("Primary clicked")})]})}),e.jsx(n,{...t,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Secondary Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with secondary button variant"}),e.jsx(c,{variant:"secondary",label:"Secondary Action",onClick:()=>console.log("Secondary clicked")})]})}),e.jsx(n,{...t,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"18px",fontWeight:"600"},children:"Multiple Buttons"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"Card with multiple button actions"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(c,{variant:"primary",label:"Save",onClick:()=>console.log("Save clicked")}),e.jsx(c,{variant:"neutral",label:"Cancel",onClick:()=>console.log("Cancel clicked")})]})]})})]})},b={args:j,render:t=>e.jsx(n,{...t,children:e.jsxs("div",{style:{padding:"16px"},children:[e.jsx("h2",{style:{margin:"0 0 12px 0",fontSize:"20px",fontWeight:"600"},children:"Clickable Card with Button"}),e.jsx("p",{style:{margin:"0 0 16px 0",color:"#666",lineHeight:"1.5"},children:"This card is clickable. Click anywhere on the card to trigger the card click event. The button inside will stop propagation, so clicking it won't trigger the card click."}),e.jsx(c,{variant:"primary",label:"Action Button",onClick:a=>{a.stopPropagation(),console.log("Button clicked inside card")}})]})})};var W,E,D;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...defaultStoryArgs,
    children: defaultContent
  }
}`,...(D=(E=u.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var H,z,q;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(z=x.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var _,P,R;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(P=y.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var I,K,O;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(O=(K=m.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var N,V,M;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...clickableStoryArgs,
    children: undefined
  },
  play: async ({
    canvasElement
  }) => {
    expect(canvasElement.querySelector("[data-clickable='true']")).not.toBeInTheDocument();
  }
}`,...(M=(V=f.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var U,Y,G;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var $,F,L;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(F=C.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Pe=["Default","Widths","CardTypes","Clickable","ClickableWithoutAccessibleName","Disabled","WithButtons","ClickableWithContent"];export{y as CardTypes,m as Clickable,b as ClickableWithContent,f as ClickableWithoutAccessibleName,u as Default,v as Disabled,x as Widths,C as WithButtons,Pe as __namedExportsOrder,_e as default};
