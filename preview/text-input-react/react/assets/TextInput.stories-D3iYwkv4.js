import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as P}from"./keyboard.constants-G_CZ5sfP.js";import{f as Qe,w as b,u as l,a as Q,e as d}from"./index-DaW6VCyr.js";import{I as T,a as Ue,T as We}from"./Icon-DiFFcmJA.js";import{r as v}from"./index-G8LIXM5I.js";import{I as Xe}from"./IconButton-BXlREZl-.js";import{L as Ze}from"./Link-CcecjTWT.js";import{c as et}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const tt="_container_1s6mg_3",nt="_text_1s6mg_16",at="_inputCounter_1s6mg_19",st="_inputContainer_1s6mg_22",rt="_input_1s6mg_19",it="_inputBar_1s6mg_22",ot="_leftIcon_1s6mg_22",lt="_labelContainer_1s6mg_34",ct="_inputLabel_1s6mg_38",ut="_requiredText_1s6mg_48",dt="_requiredIconContainer_1s6mg_60",pt="_withLeftIcon_1s6mg_84",xt="_inputField_1s6mg_84",vt="_withRightIcon_1s6mg_87",mt="_rightIcon_1s6mg_95",gt="_assistiveText_1s6mg_150",ht="_assistiveIconError_1s6mg_156",bt="_assistiveLabel_1s6mg_162",a={container:tt,text:nt,inputCounter:at,inputContainer:st,input:rt,inputBar:it,leftIcon:ot,labelContainer:lt,inputLabel:ct,requiredText:ut,requiredIconContainer:dt,withLeftIcon:pt,inputField:xt,withRightIcon:vt,rightIcon:mt,assistiveText:gt,assistiveIconError:ht,assistiveLabel:bt},n=v.forwardRef(({label:t,labelPosition:r="top",required:s=!1,showCounter:p,value:c,defaultValue:m,leftIcon:k="",showRightIcon:g,rightIconAction:u="clean",showLabelRequirement:F=!1,assistiveAppearance:f="description",showAssistiveIcon:V=!1,assistiveTextLabel:H="",error:I=!1,maxLength:h,disabled:O,readOnly:K,width:Be,onChange:z,onRightIconClick:Y,...Pe},y)=>{var J;const x=v.useRef(null),ke=i=>["visibilityOn","visibilityOff"].includes(i)?w?"visibility-show":"visibility-hide":i==="clean"?"close":"",He=i=>["visibilityOn","visibilityOff"].includes(i)?w?"show text":"hide text":i==="clean"?"clear":"",[$,Fe]=v.useState((c==null?void 0:c.length)||(m==null?void 0:m.length)||0),[w,M]=v.useState(!!g&&u==="visibilityOn");v.useEffect(()=>{x.current&&(x.current.value=c||"")},[c]),v.useEffect(()=>{M(!!g&&u==="visibilityOn")},[g,u]);const Ve=i=>{z&&z(i.target.value),h&&Fe(i.target.value.length)},Oe=()=>{u==="clean"&&x.current&&(x.current.value=""),["visibilityOn","visibilityOff"].includes(u)&&ze()},Ke=()=>{Y&&(Y(),Oe())},ze=()=>{M(!w)},Ye=et(a.inputBar,k?a.withLeftIcon:"",u?a.withRightIcon:""),$e=()=>{let i="";return t&&(i=t),I&&(i+=" error"),c&&(i+=` ${c}`),i},G=p&&typeof h=="number",Me=ke(u),Ge=He(u),Je=u==="clean"?!!((J=x.current)!=null&&J.value.length)&&g:g&&u;return e.jsxs("div",{className:a.container,"data-label-position":r,"data-error":I,style:{width:Be},children:[t&&e.jsxs("div",{className:a.text,children:[e.jsxs("div",{className:a.labelContainer,children:[e.jsxs("label",{className:a.inputLabel,id:"inputLabel",children:[" ",t," "]}),s?F?e.jsx("span",{className:a.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:a.requiredIconContainer,children:e.jsx(T,{name:"asterisk",size:8})}):F?e.jsx("span",{className:a.requiredText,children:"(optionnel)"}):null]}),G&&r==="top"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",$,"/",h]})]}),e.jsxs("div",{className:a.inputContainer,children:[e.jsx("div",{className:a.input,"data-label-position":r,"data-disabled":O,"data-read-only":K,children:e.jsxs("div",{className:Ye,children:[k&&e.jsx(T,{name:I?"error":k,appearance:"outlined",className:a.leftIcon,"aria-hidden":"true"}),e.jsx("input",{"aria-label":$e(),"aria-required":s,ref:i=>{x.current=i,typeof y=="function"?y(i):y&&(y.current=i)},type:w?"password":"text","data-error":I,className:a.inputField,maxLength:h,onChange:Ve,disabled:O,readOnly:K,...Pe}),Je&&e.jsx(Xe,{name:Me,appearance:"outlined",variant:"transparent",className:a.rightIcon,"aria-label":Ge,onClick:Ke,"data-testid":"right-icon"})]})}),H&&e.jsxs("div",{className:a.assistiveText,children:[V&&f==="error"&&e.jsx(T,{name:"error",appearance:"outlined",className:a.assistiveIconError,size:12}),V&&f==="success"&&e.jsx(T,{name:"check",appearance:"outlined",className:a.assistiveIconSucces,size:12}),f==="link"?e.jsx(Ze,{label:H}):e.jsxs("p",{className:a.assistiveLabel,"data-appearance":f,children:[" ",H," "]})]})]}),G&&r=="side"&&e.jsxs("p",{className:a.inputCounter,children:[" ",$,"/",h," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},leftIcon:{defaultValue:{value:'""',computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const ft=Object.keys(Ue),It=Object.keys(We),yt=Qe(),Nt={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...ft,...It].sort((t,r)=>t.localeCompare(r)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:yt,onRightIconClick:{action:"right icon clicked"}}},o={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},j={args:{...o.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:r})=>{const s=b(t),c=s.getByTestId("input-container").querySelector("input"),m=s.getByTestId("input-counter");await l.type(c,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await Q(()=>d(c.value.length).toBe(r.maxLength)),await Q(()=>d(m).toHaveTextContent(`${r.maxLength}/${r.maxLength}`))}},q={args:{...o.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},_={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]})},L={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},E={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},C={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},S={args:{...o.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},A={args:{...o.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]})},N={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const r=b(t),s=r.getByTestId("input");let p=r.queryByTestId("right-icon");d(p).not.toBeInTheDocument(),await l.type(s,"Hello"),p=r.getByTestId("right-icon"),await l.tab(),d(p).toBeInTheDocument(),await l.keyboard(P),d(s).toHaveValue("")}},D={args:{...o.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=b(t).getByTestId("input");await l.tab(),d(s).toHaveFocus()}},R={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=b(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),await l.keyboard(P),d(s).toHaveValue("")}},B={args:{...o.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=b(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),d(s).toHaveAttribute("type","text"),await l.keyboard(P),d(s).toHaveAttribute("type","password"),await l.keyboard(P),d(s).toHaveAttribute("type","text")}};var U,W,X;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Label",
    labelPosition: "top",
    required: false,
    disabled: false,
    showCounter: false,
    showLabelRequirement: false,
    assistiveAppearance: "description",
    showAssistiveIcon: false,
    error: false,
    readOnly: false,
    maxLength: 150,
    value: "",
    "aria-required": true
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(X=(W=o.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,te;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    maxLength: 15,
    showCounter: true
  } as TextInputProps,
  render: args => <div data-testid="input-container">
      <TextInput {...args} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const inputContainer = canvas.getByTestId("input-container");
    const textInput = inputContainer.querySelector("input");
    const counter = canvas.getByTestId("input-counter");
    await userEvent.type(textInput!, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec.");
    await waitFor(() => expect(textInput!.value.length).toBe(args.maxLength));
    await waitFor(() => expect(counter).toHaveTextContent(\`\${args.maxLength}/\${args.maxLength}\`));
  }
}`,...(te=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,se;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(se=(ae=q.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,ie,oe;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <TextInput {...args} label="Enabled" />
      </div>
      <div>
        <TextInput {...args} label="Disabled" disabled />
      </div>
      <div>
        <TextInput {...args} label="Read only" value="Read only text" readOnly />
      </div>
      <div>
        <TextInput {...args} label="Error" assistiveTextLabel="Error message" assistiveAppearance="error" error />
      </div>
    </div>
}`,...(oe=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,ce,ue;L.parameters={...L.parameters,docs:{...(le=L.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <h3>Default width (300px)</h3>
        <TextInput {...args} label="Default" />
      </div>
      <div>
        <h3>20px width (truncated to min-width 48px)</h3>
        <TextInput {...args} label="20px" width="20px" />
      </div>
      <div>
        <h3>100% width</h3>
        <TextInput {...args} label="100%" width="100%" />
      </div>
    </div>
}`,...(ue=(ce=L.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,xe;E.parameters={...E.parameters,docs:{...(de=E.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <TextInput {...args} label="Top" labelPosition="top" />
      </div>
      <div>
        <TextInput {...args} label="Side" labelPosition="side" />
      </div>
    </div>
}`,...(xe=(pe=E.parameters)==null?void 0:pe.docs)==null?void 0:xe.source}}};var ve,me,ge;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <h3>Required (show label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" required showLabelRequirement />
      </div>
      <div>
        <h3>Required (hide label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" required assistiveAppearance="error" />
      </div>
      <div>
        <h3>Not required (show label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" showLabelRequirement />
      </div>
      <div>
        <h3>Not required (hide label requirement)</h3>
        <TextInput {...args} width="400px" label="Label" assistiveAppearance="error" />
      </div>
    </div>
}`,...(ge=(me=C.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,be,fe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    assistiveTextLabel: "Assistive text"
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <TextInput {...args} label="Description" assistiveAppearance="description" />
      </div>
      <div>
        <TextInput {...args} label="Error" assistiveAppearance="error" error />
      </div>
      <div>
        <TextInput {...args} label="Success" assistiveAppearance="success" />
      </div>
      <div>
        <TextInput {...args} label="Link" assistiveAppearance="link" />
      </div>
      <div>
        <TextInput {...args} label="Error + icon" assistiveAppearance="error" showAssistiveIcon error />
      </div>
      <div>
        <TextInput {...args} label="Success + icon" assistiveAppearance="success" showAssistiveIcon />
      </div>
    </div>
}`,...(fe=(be=S.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ie,ye,we;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    leftIcon: "search"
  } as TextInputProps,
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    fontFamily: "Nunito Sans"
  }}>
      <div>
        <TextInput {...args} label="Search icon" />
      </div>
      <div>
        <TextInput {...args} label="Search icon + error" leftIcon="search" error />
      </div>
    </div>
}`,...(we=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Te,je,qe;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true
  } as TextInputProps,
  render: args => <TextInput data-testid="input" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    let rightIcon = canvas.queryByTestId("right-icon");
    expect(rightIcon).not.toBeInTheDocument();
    await userEvent.type(textInput, "Hello");
    rightIcon = canvas.getByTestId("right-icon");
    await userEvent.tab();
    expect(rightIcon).toBeInTheDocument();
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveValue("");
  }
}`,...(qe=(je=N.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var _e,Le,Ee;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <TextInput data-testid="input" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.tab();
    expect(textInput).toHaveFocus();
  }
}`,...(Ee=(Le=D.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var Ce,Se,Ae;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true
  } as TextInputProps,
  render: args => <TextInput data-testid="input" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.type(textInput, "Hello");
    await userEvent.tab();
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveValue("");
  }
}`,...(Ae=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};var Ne,De,Re;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIconAction: "visibilityOff",
    showRightIcon: true
  } as TextInputProps,
  render: args => <TextInput data-testid="input" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.type(textInput, "Hello");
    await userEvent.tab();
    expect(textInput).toHaveAttribute("type", "text");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "password");
    await userEvent.keyboard(SPACE_KEY);
    expect(textInput).toHaveAttribute("type", "text");
  }
}`,...(Re=(De=B.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};const Dt=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{S as AssistiveText,j as CharacterCount,o as Default,q as Error,_ as InteractionStates,D as KeyboardInteraction,R as KeyboardRightIconClean,B as KeyboardRightIconVisibility,E as LabelPosition,A as LeftIcon,C as RequiredIndicator,N as RightIconClean,L as Sizes,Dt as __namedExportsOrder,Nt as default};
