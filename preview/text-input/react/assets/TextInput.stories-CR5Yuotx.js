import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as V}from"./keyboard.constants-G_CZ5sfP.js";import{f as Xe,w as v,u as l,a as W,e as c}from"./index-DaW6VCyr.js";import{I as T,R as Ze,T as et}from"./Icon-BNDpdXCt.js";import{r as x}from"./index-G8LIXM5I.js";import{I as tt}from"./IconButton-CyKWN_wm.js";import{L as nt}from"./Link-Dk53zE71.js";import{c as at}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const st="_container_gm39r_3",rt="_text_gm39r_16",it="_inputCounter_gm39r_19",ot="_inputContainer_gm39r_22",lt="_input_gm39r_19",ct="_inputBar_gm39r_22",ut="_leftIcon_gm39r_22",dt="_labelContainer_gm39r_34",pt="_inputLabel_gm39r_38",xt="_requiredText_gm39r_48",vt="_requiredIconContainer_gm39r_60",mt="_withLeftIcon_gm39r_84",gt="_inputField_gm39r_84",ht="_withRightIcon_gm39r_87",ft="_rightIcon_gm39r_95",bt="_assistiveText_gm39r_147",It="_assistiveIconError_gm39r_153",yt="_assistiveLabel_gm39r_159",a={container:st,text:rt,inputCounter:it,inputContainer:ot,input:lt,inputBar:ct,leftIcon:ut,labelContainer:dt,inputLabel:pt,requiredText:xt,requiredIconContainer:vt,withLeftIcon:mt,inputField:gt,withRightIcon:ht,rightIcon:ft,assistiveText:bt,assistiveIconError:It,assistiveLabel:yt},n=x.forwardRef(({label:t,labelPosition:r="top",required:s=!1,showCounter:p,value:u,leftIcon:g="",showRightIcon:m,rightIconAction:d="clean",showLabelRequirement:$=!1,assistiveAppearance:h="description",showAssistiveIcon:z=!1,assistiveTextLabel:P="",error:f=!1,maxLength:b,disabled:Y,readOnly:M,width:Pe,onChange:I,onRightIconClick:G,...ke},y)=>{const He=x.useRef(null),Fe=i=>["visibilityOn","visibilityOff"].includes(i)?w?"visibility-show":"visibility-hide":i==="clean"?"close":"",Oe=i=>["visibilityOn","visibilityOff"].includes(i)?w?"show text":"hide text":i==="clean"?"clear":"",[k,H]=x.useState(u??""),[J,F]=x.useState(k.length),[w,Q]=x.useState(!!m&&d==="visibilityOn");x.useEffect(()=>{u!==void 0&&(H(u),F(u.length))},[u]),x.useEffect(()=>{Q(!!m&&d==="visibilityOn")},[m,d]);const Ke=i=>{const K=i.target.value;H(K),F(K.length),I&&I(K)},$e=()=>{d==="clean"&&(H(""),F(0),I&&I("")),["visibilityOn","visibilityOff"].includes(d)&&Ye()},ze=()=>{G&&G(),$e()},Ye=()=>{Q(!w)},Me=at(a.inputBar,g?a.withLeftIcon:"",d?a.withRightIcon:""),O=f?"error":g,Ge=()=>{let i="";return t&&(i=t),f&&(i+=" error"),u&&(i+=` ${u}`),i},U=p&&typeof b=="number",Je=Fe(d),Qe=Oe(d),Ue=d==="clean"?!!k.length&&m:m&&d,We=s?$?e.jsx("span",{className:a.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:a.requiredIconContainer,children:e.jsx(T,{name:"asterisk",size:8})}):$?e.jsx("span",{className:a.requiredText,children:"(optionnel)"}):null;return e.jsxs("div",{className:a.container,"data-label-position":r,"data-error":f,style:{width:Pe},children:[t&&e.jsxs("div",{className:a.text,children:[e.jsxs("div",{className:a.labelContainer,children:[e.jsxs("label",{className:a.inputLabel,id:"inputLabel",children:[" ",t," "]}),We]}),U&&r==="top"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",J,"/",b]})]}),e.jsxs("div",{className:a.inputContainer,children:[e.jsx("div",{className:a.input,"data-label-position":r,"data-disabled":Y,"data-read-only":M,children:e.jsxs("div",{className:Me,children:[O&&e.jsx(T,{name:O,appearance:"outlined",className:a.leftIcon,"aria-hidden":"true","data-testid":`left-icon ${O}`}),e.jsx("input",{"aria-label":Ge(),"aria-required":s,ref:i=>{He.current=i,typeof y=="function"?y(i):y&&(y.current=i)},type:w?"password":"text","data-error":f,className:a.inputField,maxLength:b,onChange:Ke,disabled:Y,readOnly:M,value:k,...ke}),Ue&&e.jsx(tt,{name:Je,appearance:"outlined",variant:"transparent",className:a.rightIcon,"aria-label":Qe,onClick:ze,"data-testid":"right-icon"})]})}),P&&e.jsxs("div",{className:a.assistiveText,children:[z&&h==="error"&&e.jsx(T,{name:"error",appearance:"outlined",className:a.assistiveIconError,size:12}),z&&h==="success"&&e.jsx(T,{name:"check",appearance:"outlined",className:a.assistiveIconSucces,size:12}),h==="link"?e.jsx(nt,{label:P}):e.jsxs("p",{className:a.assistiveLabel,"data-appearance":h,children:[" ",P," "]})]})]}),U&&r=="side"&&e.jsxs("p",{className:a.inputCounter,children:[" ",J,"/",b," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},leftIcon:{defaultValue:{value:'""',computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const wt=Object.keys(Ze),Tt=Object.keys(et),jt=Xe(),Bt={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...wt,...Tt].sort((t,r)=>t.localeCompare(r)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:jt,onRightIconClick:{action:"right icon clicked"}}},o={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},j={args:{...o.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:r})=>{const s=v(t),u=s.getByTestId("input-container").querySelector("input"),g=s.getByTestId("input-counter");await l.type(u,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await W(()=>c(u.value.length).toBe(r.maxLength)),await W(()=>c(g).toHaveTextContent(`${r.maxLength}/${r.maxLength}`))}},q={args:{...o.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},_={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]})},L={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},E={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},C={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},S={args:{...o.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},A={args:{...o.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("left-icon error");c(s).toBeVisible()}},D={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const r=v(t),s=r.getByTestId("input");let p=r.queryByTestId("right-icon");c(p).not.toBeInTheDocument(),await l.type(s,"Hello"),p=r.getByTestId("right-icon"),await l.tab(),c(p).toBeInTheDocument(),await l.keyboard(V),c(s).toHaveValue(""),c(p).not.toBeInTheDocument()}},N={args:{...o.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.tab(),c(s).toHaveFocus()}},R={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),await l.keyboard(V),c(s).toHaveValue("")}},B={args:{...o.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),c(s).toHaveAttribute("type","text"),await l.keyboard(V),c(s).toHaveAttribute("type","password"),await l.keyboard(V),c(s).toHaveAttribute("type","text")}};var X,Z,ee;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,ie;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(ie=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ce=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,pe;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=L.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var xe,ve,me;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(me=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var ge,he,fe;C.parameters={...C.parameters,docs:{...(ge=C.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(fe=(he=C.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var be,Ie,ye;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ye=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var we,Te,je;A.parameters={...A.parameters,docs:{...(we=A.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const leftIcon = canvas.getByTestId("left-icon error");
    expect(leftIcon).toBeVisible();
  }
}`,...(je=(Te=A.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var qe,_e,Le;D.parameters={...D.parameters,docs:{...(qe=D.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Le=(_e=D.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var Ee,Ce,Se;N.parameters={...N.parameters,docs:{...(Ee=N.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=N.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Ae,De,Ne;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ne=(De=R.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Re,Be,Ve;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ve=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};const Vt=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{S as AssistiveText,j as CharacterCount,o as Default,q as Error,_ as InteractionStates,N as KeyboardInteraction,R as KeyboardRightIconClean,B as KeyboardRightIconVisibility,E as LabelPosition,A as LeftIcon,C as RequiredIndicator,D as RightIconClean,L as Sizes,Vt as __namedExportsOrder,Bt as default};
