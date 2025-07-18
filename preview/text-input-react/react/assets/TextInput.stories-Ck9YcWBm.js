import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as F}from"./keyboard.constants-G_CZ5sfP.js";import{f as Ge,w as D,u,a as J,e as d}from"./index-DaW6VCyr.js";import{I as y,a as Je,T as Qe}from"./Icon-DiFFcmJA.js";import{r as p}from"./index-G8LIXM5I.js";import{I as Ue}from"./IconButton-BXlREZl-.js";import{L as We}from"./Link-CcecjTWT.js";import{c as Xe}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const Ze="_container_1s6mg_3",et="_text_1s6mg_16",tt="_inputCounter_1s6mg_19",nt="_inputContainer_1s6mg_22",at="_input_1s6mg_19",st="_inputBar_1s6mg_22",rt="_leftIcon_1s6mg_22",it="_labelContainer_1s6mg_34",ot="_inputLabel_1s6mg_38",lt="_requiredText_1s6mg_48",ct="_requiredIconContainer_1s6mg_60",ut="_withLeftIcon_1s6mg_84",dt="_inputField_1s6mg_84",pt="_withRightIcon_1s6mg_87",xt="_rightIcon_1s6mg_95",vt="_assistiveText_1s6mg_150",mt="_assistiveIconError_1s6mg_156",gt="_assistiveLabel_1s6mg_162",a={container:Ze,text:et,inputCounter:tt,inputContainer:nt,input:at,inputBar:st,leftIcon:rt,labelContainer:it,inputLabel:ot,requiredText:lt,requiredIconContainer:ct,withLeftIcon:ut,inputField:dt,withRightIcon:pt,rightIcon:xt,assistiveText:vt,assistiveIconError:mt,assistiveLabel:gt},n=p.forwardRef(({label:t,labelPosition:o="top",required:i=!1,showCounter:O,value:l,defaultValue:x,leftIcon:P="",showRightIcon:g,rightIconAction:c="clean",showLabelRequirement:V=!1,assistiveAppearance:h="description",showAssistiveIcon:H=!1,assistiveTextLabel:k="",error:f=!1,maxLength:v,disabled:B,readOnly:K,width:De,onChange:z,onRightIconClick:$,...Pe},b)=>{const m=p.useRef(null),ke=s=>["visibilityOn","visibilityOff"].includes(s)?I?"visibility-show":"visibility-hide":s==="clean"?"close":"",Fe=s=>["visibilityOn","visibilityOff"].includes(s)?I?"show text":"hide text":s==="clean"?"clear":"",[Y,Oe]=p.useState((l==null?void 0:l.length)||(x==null?void 0:x.length)||0),[I,M]=p.useState(!!g&&c==="visibilityOn");p.useEffect(()=>{m.current&&(m.current.value=l||"")},[l]),p.useEffect(()=>{M(!!g&&c==="visibilityOn")},[g,c]);const Ve=s=>{z&&z(s.target.value),v&&Oe(s.target.value.length)},He=()=>{c==="clean"&&m.current&&(m.current.value=""),["visibilityOn","visibilityOff"].includes(c)&&Ke()},Be=()=>{$&&($(),He())},Ke=()=>{M(!I)},ze=Xe(a.inputBar,P?a.withLeftIcon:"",c?a.withRightIcon:""),$e=()=>{let s="";return t&&(s=t),f&&(s+=" error"),l&&(s+=` ${l}`),s},G=O&&typeof v=="number",Ye=ke(c),Me=Fe(c);return e.jsxs("div",{className:a.container,"data-label-position":o,"data-error":f,style:{width:De},children:[t&&e.jsxs("div",{className:a.text,children:[e.jsxs("div",{className:a.labelContainer,children:[e.jsxs("label",{className:a.inputLabel,id:"inputLabel",children:[" ",t," "]}),i?V?e.jsx("span",{className:a.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:a.requiredIconContainer,children:e.jsx(y,{name:"asterisk",size:8})}):V?e.jsx("span",{className:a.requiredText,children:"(optionnel)"}):null]}),G&&o==="top"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",Y,"/",v]})]}),e.jsxs("div",{className:a.inputContainer,children:[e.jsx("div",{className:a.input,"data-label-position":o,"data-disabled":B,"data-read-only":K,children:e.jsxs("div",{className:ze,children:[P&&e.jsx(y,{name:f?"error":P,appearance:"outlined",className:a.leftIcon,"aria-hidden":"true"}),e.jsx("input",{"aria-label":$e(),"aria-required":i,ref:s=>{m.current=s,typeof b=="function"?b(s):b&&(b.current=s)},type:I?"password":"text","data-error":f,className:a.inputField,maxLength:v,onChange:Ve,disabled:B,readOnly:K,...Pe}),g&&c&&e.jsx(Ue,{name:Ye,appearance:"outlined",variant:"transparent",className:a.rightIcon,"aria-label":Me,onClick:Be})]})}),k&&e.jsxs("div",{className:a.assistiveText,children:[H&&h==="error"&&e.jsx(y,{name:"error",appearance:"outlined",className:a.assistiveIconError,size:12}),H&&h==="success"&&e.jsx(y,{name:"check",appearance:"outlined",className:a.assistiveIconSucces,size:12}),h==="link"?e.jsx(We,{label:k}):e.jsxs("p",{className:a.assistiveLabel,"data-appearance":h,children:[" ",k," "]})]})]}),G&&o=="side"&&e.jsxs("p",{className:a.inputCounter,children:[" ",Y,"/",v," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},leftIcon:{defaultValue:{value:'""',computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const ht=Object.keys(Je),ft=Object.keys(Qe),bt=Ge(),St={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...ht,...ft].sort((t,o)=>t.localeCompare(o)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:bt,onRightIconClick:{action:"right icon clicked"}}},r={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},w={args:{...r.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:o})=>{const i=D(t),l=i.getByTestId("input-container").querySelector("input"),x=i.getByTestId("input-counter");await u.type(l,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await J(()=>d(l.value.length).toBe(o.maxLength)),await J(()=>d(x).toHaveTextContent(`${o.maxLength}/${o.maxLength}`))}},j={args:{...r.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},T={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]})},q={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},_={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},C={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,width:"400px",label:"Required (show label requirement)",required:!0,showLabelRequirement:!0})}),e.jsx("div",{children:e.jsx(n,{...t,width:"400px",label:"Required (hide label requirement)",required:!0,assistiveAppearance:"error"})}),e.jsx("div",{children:e.jsx(n,{...t,width:"400px",label:"Not required (show label requirement)",showLabelRequirement:!0})}),e.jsx("div",{children:e.jsx(n,{...t,width:"400px",label:"Not required (hide label requirement)",assistiveAppearance:"error"})})]})},L={args:{...r.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},E={args:{...r.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]})},S={args:{...r.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{...t})},A={args:{...r.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const i=D(t).getByTestId("input");await u.tab(),d(i).toHaveFocus()}},N={args:{...r.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const i=D(t).getByTestId("input");await u.type(i,"Hello"),await u.tab(),await u.keyboard(F),d(i).toHaveValue("")}},R={args:{...r.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const i=D(t).getByTestId("input");await u.type(i,"Hello"),await u.tab(),d(i).toHaveAttribute("type","text"),await u.keyboard(F),d(i).toHaveAttribute("type","password"),await u.keyboard(F),d(i).toHaveAttribute("type","text")}};var Q,U,W;r.parameters={...r.parameters,docs:{...(Q=r.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(W=(U=r.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,ie;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ie=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;q.parameters={...q.parameters,docs:{...(oe=q.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,pe;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=_.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var xe,ve,me;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
        <TextInput {...args} width="400px" label="Required (show label requirement)" required showLabelRequirement />
      </div>
      <div>
        <TextInput {...args} width="400px" label="Required (hide label requirement)" required assistiveAppearance="error" />
      </div>
      <div>
        <TextInput {...args} width="400px" label="Not required (show label requirement)" showLabelRequirement />
      </div>
      <div>
        <TextInput {...args} width="400px" label="Not required (hide label requirement)" assistiveAppearance="error" />
      </div>
    </div>
}`,...(me=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ge,he,fe;L.parameters={...L.parameters,docs:{...(ge=L.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(he=L.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,Ie,ye;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var we,je,Te;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    rightIconAction: "clean",
    showRightIcon: true
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(Te=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Te.source}}};var qe,_e,Ce;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ce=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ce.source}}};var Le,Ee,Se;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Se=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Ae,Ne,Re;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Re=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:Re.source}}};const At=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{L as AssistiveText,w as CharacterCount,r as Default,j as Error,T as InteractionStates,A as KeyboardInteraction,N as KeyboardRightIconClean,R as KeyboardRightIconVisibility,_ as LabelPosition,E as LeftIcon,C as RequiredIndicator,S as RightIconClean,q as Sizes,At as __namedExportsOrder,St as default};
