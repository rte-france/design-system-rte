import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as B}from"./keyboard.constants-Dpxm2wEl.js";import{f as We,w as v,u as l,a as W,e as o}from"./index-DaW6VCyr.js";import{I as T,R as Xe,T as Ze}from"./Icon-BNDpdXCt.js";import{r as x}from"./index-G8LIXM5I.js";import{I as et}from"./IconButton-CyKWN_wm.js";import{L as tt}from"./Link-Dk53zE71.js";import{c as nt}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const at="_container_77km9_3",st="_text_77km9_16",rt="_inputCounter_77km9_20",it="_inputContainer_77km9_23",ot="_input_77km9_20",lt="_inputBar_77km9_23",ct="_leftIcon_77km9_23",ut="_labelContainer_77km9_35",dt="_inputLabel_77km9_39",pt="_requiredText_77km9_47",xt="_requiredIconContainer_77km9_60",vt="_withLeftIcon_77km9_82",mt="_inputField_77km9_82",ht="_withRightIcon_77km9_85",gt="_rightIcon_77km9_93",ft="_assistiveText_77km9_145",It="_assistiveIconError_77km9_151",bt="_assistiveLabel_77km9_157",a={container:at,text:st,inputCounter:rt,inputContainer:it,input:ot,inputBar:lt,leftIcon:ct,labelContainer:ut,inputLabel:dt,requiredText:pt,requiredIconContainer:xt,withLeftIcon:vt,inputField:mt,withRightIcon:ht,rightIcon:gt,assistiveText:ft,assistiveIconError:It,assistiveLabel:bt},n=x.forwardRef(({label:t,labelPosition:r="top",required:s=!1,showCounter:d,value:p,leftIcon:V,showRightIcon:m=!0,rightIconAction:u="clean",showLabelRequirement:$=!1,assistiveAppearance:g="description",showAssistiveIcon:M=!1,assistiveTextLabel:P="",error:H=!1,maxLength:f,disabled:O,readOnly:F,width:Ve,onChange:I,onRightIconClick:G,...Pe},b)=>{const He=x.useRef(null),Oe=c=>["visibilityOn","visibilityOff"].includes(c)?y?"visibility-show":"visibility-hide":c==="clean"?"close":"",Fe=c=>["visibilityOn","visibilityOff"].includes(c)?y?"show text":"hide text":c==="clean"?"clear":"",[h,K]=x.useState(p??""),[J,z]=x.useState(h.length),[y,Q]=x.useState(!!m&&u==="visibilityOn");x.useEffect(()=>{p!==void 0&&(K(p),z(p.length))},[p]),x.useEffect(()=>{Q(!!m&&u==="visibilityOn")},[m,u]);const Ke=c=>{const Y=c.target.value;K(Y),z(Y.length),I&&I(Y)},ze=()=>{u==="clean"&&(K(""),z(0),I&&I("")),["visibilityOn","visibilityOff"].includes(u)&&$e()},Ye=()=>{G&&G(),ze()},$e=()=>{Q(!y)},w=H?"error":V,Me=nt(a.inputBar,w?a.withLeftIcon:"",u?a.withRightIcon:""),U=d&&typeof f=="number",Ge=Oe(u),Je=Fe(u),Qe=()=>F||O?!1:u==="clean"?!!(h!=null&&h.length)&&m:m&&!!u,Ue=s?$?e.jsx("span",{className:a.requiredText,children:"(obligatoire)"}):e.jsx("span",{className:a.requiredIconContainer,children:e.jsx(T,{name:"asterisk",size:8})}):$?e.jsx("span",{className:a.requiredText,children:"(optionnel)"}):null;return e.jsxs("div",{className:a.container,"data-label-position":r,"data-error":H,style:{width:Ve},children:[t&&e.jsxs("div",{className:a.text,children:[e.jsxs("div",{className:a.labelContainer,children:[e.jsxs("label",{className:a.inputLabel,id:"inputLabel",children:[" ",t," "]}),Ue]}),U&&r==="top"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",J,"/",f]})]}),e.jsxs("div",{className:a.inputContainer,children:[e.jsx("div",{className:a.input,"data-label-position":r,"data-disabled":O,"data-read-only":F,children:e.jsxs("div",{className:Me,children:[w&&e.jsx(T,{name:w,appearance:"outlined",className:a.leftIcon,"aria-hidden":"true","data-testid":`left-icon ${w}`}),e.jsx("input",{ref:c=>{He.current=c,typeof b=="function"?b(c):b&&(b.current=c)},type:y?"password":"text","data-error":H,className:a.inputField,maxLength:f,onChange:Ke,disabled:O,readOnly:F,value:h,...Pe}),Qe()&&e.jsx(et,{name:Ge,appearance:"outlined",variant:"transparent",className:a.rightIcon,"aria-label":Je,onClick:Ye,"data-testid":"right-icon"})]})}),P&&e.jsxs("div",{className:a.assistiveText,children:[M&&g==="error"&&e.jsx(T,{name:"error",appearance:"outlined",className:a.assistiveIconError,size:12}),M&&g==="success"&&e.jsx(T,{name:"check",appearance:"outlined",className:a.assistiveIconSucces,size:12}),g==="link"?e.jsx(tt,{label:P}):e.jsxs("p",{className:a.assistiveLabel,"data-appearance":g,children:[" ",P," "]})]})]}),U&&r=="side"&&e.jsxs("p",{className:a.inputCounter,"data-testid":"input-counter",children:[" ",J,"/",f," "]})]})});n.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},labelPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showRightIcon:{defaultValue:{value:"true",computed:!1},required:!1},rightIconAction:{defaultValue:{value:'"clean"',computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},assistiveTextLabel:{defaultValue:{value:'""',computed:!1},required:!1},error:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTextInputProps","Omit"]};const yt=Object.keys(Xe),wt=Object.keys(Ze),Tt=We(),Rt={title:"TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...yt,...wt].sort((t,r)=>t.localeCompare(r)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:Tt,onRightIconClick:{action:"right icon clicked"}}},i={args:{label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,value:"","aria-required":!0},render:t=>e.jsx(n,{...t})},j={args:{...i.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:r})=>{const s=v(t),p=s.getByTestId("input-container").querySelector("input"),V=s.getByTestId("input-counter");await l.type(p,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await W(()=>o(p.value.length).toBe(r.maxLength)),await W(()=>o(V).toHaveTextContent(`${r.maxLength}/${r.maxLength}`))}},q={args:{...i.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},_={args:{...i.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text","data-testid":"read-only",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]}),play:async({canvasElement:t})=>{const d=v(t).getByTestId("read-only").querySelector("rte-icon");o(d).not.toBeInTheDocument()}},E={args:{...i.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},L={args:{...i.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},S={args:{...i.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},C={args:{...i.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},D={args:{...i.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("left-icon error");o(s).toBeVisible()}},A={args:{...i.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const r=v(t),s=r.getByTestId("input");let d=r.queryByTestId("right-icon");o(d).not.toBeInTheDocument(),await l.type(s,"Hello"),d=r.getByTestId("right-icon"),await l.tab(),o(d).toBeInTheDocument(),await l.keyboard(B),o(s).toHaveValue(""),o(d).not.toBeInTheDocument()}},N={args:{...i.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.tab(),o(s).toHaveFocus()}},R={args:{...i.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),await l.keyboard(B),o(s).toHaveValue("")}},k={args:{...i.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=v(t).getByTestId("input");await l.type(s,"Hello"),await l.tab(),o(s).toHaveAttribute("type","text"),await l.keyboard(B),o(s).toHaveAttribute("type","password"),await l.keyboard(B),o(s).toHaveAttribute("type","text")}};var X,Z,ee;i.parameters={...i.parameters,docs:{...(X=i.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ce=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,de,pe;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var xe,ve,me;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(me=(ve=L.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};var he,ge,fe;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(fe=(ge=S.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var Ie,be,ye;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(ye=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};var we,Te,je;D.parameters={...D.parameters,docs:{...(we=D.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:je.source}}};var qe,_e,Ee;A.parameters={...A.parameters,docs:{...(qe=A.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Ee=(_e=A.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Le,Se,Ce;N.parameters={...N.parameters,docs:{...(Le=N.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Ce=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var De,Ae,Ne;R.parameters={...R.parameters,docs:{...(De=R.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Ne=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Re,ke,Be;k.parameters={...k.parameters,docs:{...(Re=k.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Be=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:Be.source}}};const kt=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","KeyboardRightIconVisibility"];export{C as AssistiveText,j as CharacterCount,i as Default,q as Error,_ as InteractionStates,N as KeyboardInteraction,R as KeyboardRightIconClean,k as KeyboardRightIconVisibility,L as LabelPosition,D as LeftIcon,S as RequiredIndicator,A as RightIconClean,E as Sizes,kt as __namedExportsOrder,Rt as default};
