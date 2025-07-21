import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as V}from"./keyboard.constants-G_CZ5sfP.js";import{f as We,w as h,u as l,a as U,e as c}from"./index-DaW6VCyr.js";import{I as T,R as Xe,T as Ze}from"./Icon-BNDpdXCt.js";import{r as x}from"./index-G8LIXM5I.js";import{I as et}from"./IconButton-CyKWN_wm.js";import{L as tt}from"./Link-Dk53zE71.js";import{c as nt}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const at="_container_gm39r_3",st="_text_gm39r_16",rt="_inputCounter_gm39r_19",it="_inputContainer_gm39r_22",ot="_input_gm39r_19",lt="_inputBar_gm39r_22",ct="_leftIcon_gm39r_22",ut="_labelContainer_gm39r_34",dt="_inputLabel_gm39r_38",pt="_requiredText_gm39r_48",xt="_requiredIconContainer_gm39r_60",vt="_withLeftIcon_gm39r_84",mt="_inputField_gm39r_84",ht="_withRightIcon_gm39r_87",gt="_rightIcon_gm39r_95",bt="_assistiveText_gm39r_147",ft="_assistiveIconError_gm39r_153",It="_assistiveLabel_gm39r_159",a={container:at,text:st,inputCounter:rt,inputContainer:it,input:ot,inputBar:lt,leftIcon:ct,labelContainer:ut,inputLabel:dt,requiredText:pt,requiredIconContainer:xt,withLeftIcon:vt,inputField:mt,withRightIcon:ht,rightIcon:gt,assistiveText:bt,assistiveIconError:ft,assistiveLabel:It},n=x.forwardRef(({label:t,labelPosition:r="top",required:s=!1,showCounter:p,value:u,leftIcon:v="",showRightIcon:m,rightIconAction:d="clean",showLabelRequirement:K=!1,assistiveAppearance:g="description",showAssistiveIcon:z=!1,assistiveTextLabel:P="",error:b=!1,maxLength:f,disabled:Y,readOnly:$,width:Ve,onChange:I,onRightIconClick:M,...Pe},y)=>{const ke=x.useRef(null),He=i=>["visibilityOn","visibilityOff"].includes(i)?w?"visibility-show":"visibility-hide":i==="clean"?"close":"",Fe=i=>["visibilityOn","visibilityOff"].includes(i)?w?"show text":"hide text":i==="clean"?"clear":"",[k,H]=x.useState(u??""),[G,F]=x.useState(k.length),[w,J]=x.useState(!!m&&d==="visibilityOn");x.useEffect(()=>{u!==void 0&&(H(u),F(u.length))},[u]),x.useEffect(()=>{J(!!m&&d==="visibilityOn")},[m,d]);const Oe=i=>{const O=i.target.value;H(O),F(O.length),I&&I(O)},Ke=()=>{d==="clean"&&(H(""),F(0),I&&I("")),["visibilityOn","visibilityOff"].includes(d)&&Ye()},ze=()=>{M&&M(),Ke()},Ye=()=>{J(!w)},$e=nt(a.inputBar,v?a.withLeftIcon:"",d?a.withRightIcon:""),Me=()=>{let i="";return t&&(i=t),b&&(i+=" error"),u&&(i+=` ${u}`),i},Q=p&&typeof f=="number",Ge=He(d),Je=Fe(d),Qe=d==="clean"?!!k.length&&m:m&&d,Ue=s?K?e.jsx("span",{className:a.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:a.requiredIconContainer,children:e.jsx(T,{name:"asterisk",size:8})}):K?e.jsx("span",{className:a.requiredText,children:"(optionnel)"}):null;return e.jsxs("div",{className:a.container,"data-label-position":r,"data-error":b,style:{width:Ve},children:[t&&e.jsxs("div",{className:a.text,children:[e.jsxs("div",{className:a.labelContainer,children:[e.jsxs("label",{className:a.inputLabel,id:"inputLabel",children:[" ",t," "]}),Ue]}),Q&&r==="top"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",G,"/",f]})]}),e.jsxs("div",{className:a.inputContainer,children:[e.jsx("div",{className:a.input,"data-label-position":r,"data-disabled":Y,"data-read-only":$,children:e.jsxs("div",{className:$e,children:[v&&e.jsx(T,{name:b?"error":v,appearance:"outlined",className:a.leftIcon,"aria-hidden":"true"}),e.jsx("input",{"aria-label":Me(),"aria-required":s,ref:i=>{ke.current=i,typeof y=="function"?y(i):y&&(y.current=i)},type:w?"password":"text","data-error":b,className:a.inputField,maxLength:f,onChange:Oe,disabled:Y,readOnly:$,value:k,...Pe}),Qe&&e.jsx(et,{name:Ge,appearance:"outlined",variant:"transparent",className:a.rightIcon,"aria-label":Je,onClick:ze,"data-testid":"right-icon"})]})}),P&&e.jsxs("div",{className:a.assistiveText,children:[z&&g==="error"&&e.jsx(T,{name:"error",appearance:"outlined",className:a.assistiveIconError,size:12}),z&&g==="success"&&e.jsx(T,{name:"check",appearance:"outlined",className:a.assistiveIconSucces,size:12}),g==="link"?e.jsx(tt,{label:P}):e.jsxs("p",{className:a.assistiveLabel,"data-appearance":g,children:[" ",P," "]})]})]}),Q&&r=="side"&&e.jsxs("p",{className:a.inputCounter,children:[" ",G,"/",f," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},leftIcon:{defaultValue:{value:'""',computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const yt=Object.keys(Xe),wt=Object.keys(Ze),Tt=We(),Rt={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...yt,...wt].sort((t,r)=>t.localeCompare(r)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:Tt,onRightIconClick:{action:"right icon clicked"}}},o={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},j={args:{...o.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:r})=>{const s=h(t),u=s.getByTestId("input-container").querySelector("input"),v=s.getByTestId("input-counter");await l.type(u,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await U(()=>c(u.value.length).toBe(r.maxLength)),await U(()=>c(v).toHaveTextContent(`${r.maxLength}/${r.maxLength}`))}},q={args:{...o.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},_={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]})},L={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},E={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},C={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},S={args:{...o.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},A={args:{...o.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]})},D={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const r=h(t),s=r.getByTestId("input");let p=r.queryByTestId("right-icon");c(p).not.toBeInTheDocument(),await l.type(s,"Hello"),p=r.getByTestId("right-icon"),await l.tab(),c(p).toBeInTheDocument(),await l.keyboard(V),c(s).toHaveValue(""),c(p).not.toBeInTheDocument()}},N={args:{...o.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=h(t).getByTestId("input");await l.tab(),c(s).toHaveFocus()}},R={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=h(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),await l.keyboard(V),c(s).toHaveValue("")}},B={args:{...o.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=h(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),c(s).toHaveAttribute("type","text"),await l.keyboard(V),c(s).toHaveAttribute("type","password"),await l.keyboard(V),c(s).toHaveAttribute("type","text")}};var W,X,Z;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Z=(X=o.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=j.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,re;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(re=(se=q.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,le;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ue,de;L.parameters={...L.parameters,docs:{...(ce=L.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(de=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,xe,ve;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var me,he,ge;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(he=C.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var be,fe,Ie;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Ie=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:Ie.source}}};var ye,we,Te;A.parameters={...A.parameters,docs:{...(ye=A.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Te=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var je,qe,_e;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
    expect(rightIcon).not.toBeInTheDocument();
  }
}`,...(_e=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:_e.source}}};var Le,Ee,Ce;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ce=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Ce.source}}};var Se,Ae,De;R.parameters={...R.parameters,docs:{...(Se=R.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(De=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Ne,Re,Be;B.parameters={...B.parameters,docs:{...(Ne=B.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Be=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:Be.source}}};const Bt=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{S as AssistiveText,j as CharacterCount,o as Default,q as Error,_ as InteractionStates,N as KeyboardInteraction,R as KeyboardRightIconClean,B as KeyboardRightIconVisibility,E as LabelPosition,A as LeftIcon,C as RequiredIndicator,D as RightIconClean,L as Sizes,Bt as __namedExportsOrder,Rt as default};
