import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as V}from"./keyboard.constants-G_CZ5sfP.js";import{f as Xe,w as v,u as c,a as W,e as l}from"./index-DaW6VCyr.js";import{I as j,R as Ze,T as et}from"./Icon-BNDpdXCt.js";import{r as x}from"./index-G8LIXM5I.js";import{I as tt}from"./IconButton-CyKWN_wm.js";import{L as nt}from"./Link-Dk53zE71.js";import{c as at}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const st="_container_77km9_3",rt="_text_77km9_16",it="_inputCounter_77km9_20",ot="_inputContainer_77km9_23",lt="_input_77km9_20",ct="_inputBar_77km9_23",ut="_leftIcon_77km9_23",dt="_labelContainer_77km9_35",pt="_inputLabel_77km9_39",xt="_requiredText_77km9_47",vt="_requiredIconContainer_77km9_60",mt="_withLeftIcon_77km9_82",ht="_inputField_77km9_82",gt="_withRightIcon_77km9_85",ft="_rightIcon_77km9_93",It="_assistiveText_77km9_145",bt="_assistiveIconError_77km9_151",yt="_assistiveLabel_77km9_157",s={container:st,text:rt,inputCounter:it,inputContainer:ot,input:lt,inputBar:ct,leftIcon:ut,labelContainer:dt,inputLabel:pt,requiredText:xt,requiredIconContainer:vt,withLeftIcon:mt,inputField:ht,withRightIcon:gt,rightIcon:ft,assistiveText:It,assistiveIconError:bt,assistiveLabel:yt},n=x.forwardRef(({label:t,labelPosition:r="top",required:a=!1,showCounter:p,value:u,leftIcon:P="",showRightIcon:m=!0,rightIconAction:d="clean",showLabelRequirement:Y=!1,assistiveAppearance:g="description",showAssistiveIcon:M=!1,assistiveTextLabel:H="",error:f=!1,maxLength:I,disabled:O,readOnly:F,width:Ve,onChange:b,onRightIconClick:G,...Pe},y)=>{const He=x.useRef(null),Oe=i=>["visibilityOn","visibilityOff"].includes(i)?w?"visibility-show":"visibility-hide":i==="clean"?"close":"",Fe=i=>["visibilityOn","visibilityOff"].includes(i)?w?"show text":"hide text":i==="clean"?"clear":"",[h,K]=x.useState(u??""),[J,$]=x.useState(h.length),[w,Q]=x.useState(!!m&&d==="visibilityOn");x.useEffect(()=>{u!==void 0&&(K(u),$(u.length))},[u]),x.useEffect(()=>{Q(!!m&&d==="visibilityOn")},[m,d]);const Ke=i=>{const z=i.target.value;K(z),$(z.length),b&&b(z)},$e=()=>{d==="clean"&&(K(""),$(0),b&&b("")),["visibilityOn","visibilityOff"].includes(d)&&Ye()},ze=()=>{G&&G(),$e()},Ye=()=>{Q(!w)},T=f?"error":P,Me=at(s.inputBar,T?s.withLeftIcon:"",d?s.withRightIcon:""),Ge=()=>{let i="";return t&&(i=t),f&&(i+=" error"),u&&(i+=` ${u}`),i},U=p&&typeof I=="number",Je=Oe(d),Qe=Fe(d),Ue=()=>F||O?!1:d==="clean"?!!(h!=null&&h.length)&&m:m&&!!d,We=a?Y?e.jsx("span",{className:s.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:s.requiredIconContainer,children:e.jsx(j,{name:"asterisk",size:8})}):Y?e.jsx("span",{className:s.requiredText,children:"(optionnel)"}):null;return e.jsxs("div",{className:s.container,"data-label-position":r,"data-error":f,style:{width:Ve},children:[t&&e.jsxs("div",{className:s.text,children:[e.jsxs("div",{className:s.labelContainer,children:[e.jsxs("label",{className:s.inputLabel,id:"inputLabel",children:[" ",t," "]}),We]}),U&&r==="top"&&e.jsxs("p",{className:s.inputCounter,"data-testid":"input-counter",children:[" ",J,"/",I]})]}),e.jsxs("div",{className:s.inputContainer,children:[e.jsx("div",{className:s.input,"data-label-position":r,"data-disabled":O,"data-read-only":F,children:e.jsxs("div",{className:Me,children:[T&&e.jsx(j,{name:T,appearance:"outlined",className:s.leftIcon,"aria-hidden":"true","data-testid":`left-icon ${T}`}),e.jsx("input",{"aria-label":Ge(),"aria-required":a,ref:i=>{He.current=i,typeof y=="function"?y(i):y&&(y.current=i)},type:w?"password":"text","data-error":f,className:s.inputField,maxLength:I,onChange:Ke,disabled:O,readOnly:F,value:h,...Pe}),Ue()&&e.jsx(tt,{name:Je,appearance:"outlined",variant:"transparent",className:s.rightIcon,"aria-label":Qe,onClick:ze,"data-testid":"right-icon"})]})}),H&&e.jsxs("div",{className:s.assistiveText,children:[M&&g==="error"&&e.jsx(j,{name:"error",appearance:"outlined",className:s.assistiveIconError,size:12}),M&&g==="success"&&e.jsx(j,{name:"check",appearance:"outlined",className:s.assistiveIconSucces,size:12}),g==="link"?e.jsx(nt,{label:H}):e.jsxs("p",{className:s.assistiveLabel,"data-appearance":g,children:[" ",H," "]})]})]}),U&&r=="side"&&e.jsxs("p",{className:s.inputCounter,"data-testid":"input-counter",children:[" ",J,"/",I," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},leftIcon:{defaultValue:{value:'""',computed:!1},required:!1},showRightIcon:{defaultValue:{value:"true",computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const wt=Object.keys(Ze),Tt=Object.keys(et),jt=Xe(),kt={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...wt,...Tt].sort((t,r)=>t.localeCompare(r)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:jt,onRightIconClick:{action:"right icon clicked"}}},o={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},q={args:{...o.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:r})=>{const a=v(t),u=a.getByTestId("input-container").querySelector("input"),P=a.getByTestId("input-counter");await c.type(u,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await W(()=>l(u.value.length).toBe(r.maxLength)),await W(()=>l(P).toHaveTextContent(`${r.maxLength}/${r.maxLength}`))}},_={args:{...o.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},E={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text","data-testid":"read-only",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]}),play:async({canvasElement:t})=>{const p=v(t).getByTestId("read-only").querySelector("rte-icon");l(p).not.toBeInTheDocument()}},L={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},S={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},C={args:{...o.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},A={args:{...o.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},D={args:{...o.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]}),play:async({canvasElement:t})=>{const a=v(t).getByTestId("left-icon error");l(a).toBeVisible()}},N={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const r=v(t),a=r.getByTestId("input");let p=r.queryByTestId("right-icon");l(p).not.toBeInTheDocument(),await c.type(a,"Hello"),p=r.getByTestId("right-icon"),await c.tab(),l(p).toBeInTheDocument(),await c.keyboard(V),l(a).toHaveValue(""),l(p).not.toBeInTheDocument()}},R={args:{...o.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=v(t).getByTestId("input");await c.tab(),l(a).toHaveFocus()}},k={args:{...o.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=v(t).getByTestId("input");await c.type(a,"Hello"),await c.tab(),await c.keyboard(V),l(a).toHaveValue("")}},B={args:{...o.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=v(t).getByTestId("input");await c.type(a,"Hello"),await c.tab(),l(a).toHaveAttribute("type","text"),await c.keyboard(V),l(a).toHaveAttribute("type","password"),await c.keyboard(V),l(a).toHaveAttribute("type","text")}};var X,Z,ee;o.parameters={...o.parameters,docs:{...(X=o.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=q.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,re,ie;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(ie=(re=_.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var oe,le,ce;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        <TextInput {...args} label="Read only" value="Read only text" data-testid="read-only" readOnly />
      </div>
      <div>
        <TextInput {...args} label="Error" assistiveTextLabel="Error message" assistiveAppearance="error" error />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const readOnlyInput = canvas.getByTestId("read-only");
    const rightIcon = readOnlyInput.querySelector("rte-icon");
    expect(rightIcon).not.toBeInTheDocument();
  }
}`,...(ce=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,pe;L.parameters={...L.parameters,docs:{...(ue=L.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=L.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var xe,ve,me;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(me=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var he,ge,fe;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ie,be,ye;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ye=(be=A.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,Te,je;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var qe,_e,Ee;N.parameters={...N.parameters,docs:{...(qe=N.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ee=(_e=N.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Le,Se,Ce;R.parameters={...R.parameters,docs:{...(Le=R.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Ae,De,Ne;k.parameters={...k.parameters,docs:{...(Ae=k.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Ne=(De=k.parameters)==null?void 0:De.docs)==null?void 0:Ne.source}}};var Re,ke,Be;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Be=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};const Bt=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{A as AssistiveText,q as CharacterCount,o as Default,_ as Error,E as InteractionStates,R as KeyboardInteraction,k as KeyboardRightIconClean,B as KeyboardRightIconVisibility,S as LabelPosition,D as LeftIcon,C as RequiredIndicator,N as RightIconClean,L as Sizes,Bt as __namedExportsOrder,kt as default};
