import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{S as j}from"./keyboard.constants-BverKK8B.js";import{w as c,u as i,a as D,e as o,f as me}from"./index-4rjIhT2C.js";import{r as ge}from"./index-G8LIXM5I.js";import{f as ye}from"./testing.utils-mIZIUNbM.js";import{B as Ie}from"./Button-CXM9p_L3.js";import{R as be,T as fe}from"./Icon-Bc7wfgCv.js";import{T as n}from"./TextInput-CDonEcoS.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./index-DSdvzt-y.js";import"./BaseTextInput-nVt2XmiC.js";import"./RequiredIndicator-BgI9luus.js";import"./Link-CAnB1cKs.js";import"./IconButton-DcIeVO_H.js";const we=Object.keys(be),Te=Object.keys(fe),E=me(),Oe={title:"Composants/TextInput/TextInput",component:n,tags:["autodocs"],argTypes:{value:{control:"text"},label:{control:"text",defaultValue:"Label"},labelPosition:{control:{type:"radio"},options:["top","side"],defaultValue:"top"},required:{control:"boolean",defaultValue:!1},showCounter:{control:"boolean",defaultValue:!1},maxLength:{control:"number",defaultValue:150},leftIcon:{control:"select",options:["",...we,...Te].sort((t,s)=>t.localeCompare(s)),description:"Nom de l’icône à afficher",defaultValue:"check"},rightIconAction:{control:{type:"select"},options:["","clean","visibilityOn","visibilityOff"],defaultValue:"clean"},showLabelRequirement:{control:"boolean",defaultValue:!1},assistiveAppearance:{control:{type:"select"},options:["description","error","success","link"],defaultValue:"description"},showAssistiveIcon:{control:"boolean"},assistiveTextLabel:{control:"text",defaultValue:""},disabled:{control:"boolean"},error:{control:"boolean"},readOnly:{control:"boolean"},onChange:E,onRightIconClick:{action:"right icon clicked"}}},r={args:{id:"text-input-default",label:"Label",labelPosition:"top",required:!1,disabled:!1,showCounter:!1,showLabelRequirement:!1,assistiveAppearance:"description",showAssistiveIcon:!1,error:!1,readOnly:!1,maxLength:150,placeholder:"Placeholder",value:"","aria-required":!0,autoComplete:"off"},render:t=>e.jsx(n,{...t})},u={args:{...r.args,maxLength:15,showCounter:!0},render:t=>e.jsx("div",{"data-testid":"input-container",children:e.jsx(n,{...t})}),play:async({canvasElement:t,args:s})=>{const a=c(t),d=a.getByTestId("input-container").querySelector("input"),he=a.getByTestId("input-counter");await i.type(d,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate libero et lorem iaculis ullamcorper. Duis dictum libero sed ultrices rutrum. Nullam hendrerit bibendum ornare. Donec consequat pellentesque lectus, quis gravida tortor luctus nec."),await D(()=>o(d.value.length).toBe(s.maxLength)),await D(()=>o(he).toHaveTextContent(`${s.maxLength}/${s.maxLength}`))}},p={args:{...r.args,error:!0,assistiveAppearance:"error",showAssistiveIcon:!0,assistiveTextLabel:"Error message"},render:t=>e.jsx(n,{...t})},x={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Enabled"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Disabled",disabled:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Read only",value:"Read only text","data-testid":"read-only",readOnly:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveTextLabel:"Error message",assistiveAppearance:"error",error:!0})})]}),play:async({canvasElement:t})=>{const l=c(t).getByTestId("read-only").querySelector("rte-icon");o(l).not.toBeInTheDocument()}},v={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Default width (300px)"}),e.jsx(n,{...t,label:"Default"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"20px width (truncated to min-width 48px)"}),e.jsx(n,{...t,label:"20px",width:"20px"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"100% width"}),e.jsx(n,{...t,label:"100%",width:"100%"})]})]})},h={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Top",labelPosition:"top"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Side",labelPosition:"side"})})]})},m={args:{...r.args},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsxs("div",{children:[e.jsx("h3",{children:"Required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",required:!0,assistiveAppearance:"error"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (show label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",showLabelRequirement:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Not required (hide label requirement)"}),e.jsx(n,{...t,width:"400px",label:"Label",assistiveAppearance:"error"})]})]})},g={args:{...r.args,assistiveTextLabel:"Assistive text"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Description",assistiveAppearance:"description"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error",assistiveAppearance:"error",error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success",assistiveAppearance:"success"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Link",assistiveAppearance:"link"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Error + icon",assistiveAppearance:"error",showAssistiveIcon:!0,error:!0})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Success + icon",assistiveAppearance:"success",showAssistiveIcon:!0})})]})},y={args:{...r.args,leftIcon:"search"},render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",fontFamily:"Nunito Sans"},children:[e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon"})}),e.jsx("div",{children:e.jsx(n,{...t,label:"Search icon + error",leftIcon:"search",error:!0})})]}),play:async({canvasElement:t})=>{const a=c(t).getByTestId("left-icon error");o(a).toBeVisible()}},I={args:{...r.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const s=c(t),a=s.getByTestId("input");let l=s.queryByTestId("right-icon");o(l).not.toBeInTheDocument(),await i.type(a,"Hello"),l=s.getByTestId("right-icon"),await i.tab(),o(l).toBeInTheDocument(),await i.keyboard(j),o(a).toHaveValue(""),o(l).not.toBeInTheDocument()}},b={args:{...r.args},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=c(t).getByTestId("input");ye(t),await i.tab(),o(a).toHaveFocus()}},f={args:{...r.args,rightIconAction:"clean",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=c(t).getByTestId("input");await i.type(a,"Hello"),await i.tab(),await i.keyboard(j),o(a).toHaveValue("")}},w={args:{...r.args,onEnterKeyDown:E},render:t=>{const[s,a]=ge.useState(!1),l=d=>{E(d),a(!0)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{"data-testid":"input",...t,onEnterKeyDown:l}),s&&e.jsxs(e.Fragment,{children:[e.jsx("p",{"data-testid":"enter-pressed",children:"Enter key was pressed!"}),e.jsx(Ie,{label:"Reset",variant:"secondary",onClick:()=>a(!1)})]})]})},play:async({canvasElement:t})=>{const a=c(t).getByTestId("input");await i.type(a,"Hello"),await i.keyboard("{Enter}"),o(E).toHaveBeenCalledWith("Hello")}},T={args:{...r.args,rightIconAction:"visibilityOff",showRightIcon:!0},render:t=>e.jsx(n,{"data-testid":"input",...t}),play:async({canvasElement:t})=>{const a=c(t).getByTestId("input");await i.type(a,"Hello"),await i.tab(),o(a).toHaveAttribute("type","text"),await i.keyboard(j),o(a).toHaveAttribute("type","password"),await i.keyboard(j),o(a).toHaveAttribute("type","text")}};var A,S,q;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "text-input-default",
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
    placeholder: "Placeholder",
    value: "",
    "aria-required": true,
    autoComplete: "off"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(q=(S=r.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var L,B,P;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(P=(B=u.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var C,R,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    error: true,
    assistiveAppearance: "error",
    showAssistiveIcon: true,
    assistiveTextLabel: "Error message"
  } as TextInputProps,
  render: args => <TextInput {...args} />
}`,...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var H,F,K;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(K=(F=x.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var N,V,O;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(V=v.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var _,Y,$;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var z,M,W;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var G,J,Q;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,se,re;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args
  } as TextInputProps,
  render: args => <TextInput data-testid="input" {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(textInput).toHaveFocus();
  }
}`,...(re=(se=b.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,oe,le;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,de,ue;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onEnterKeyDown: mockFn
  } as TextInputProps,
  render: args => {
    const [isEnterPressed, setIsEnterPressed] = useState(false);
    const handleEnterKeyDown = (value: string) => {
      mockFn(value);
      setIsEnterPressed(true);
    };
    return <>
        <TextInput data-testid="input" {...args} onEnterKeyDown={handleEnterKeyDown} />
        {isEnterPressed && <>
            <p data-testid="enter-pressed">Enter key was pressed!</p>
            <Button label="Reset" variant="secondary" onClick={() => setIsEnterPressed(false)} />
          </>}
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textInput = canvas.getByTestId("input");
    await userEvent.type(textInput, "Hello");
    await userEvent.keyboard("{Enter}");
    expect(mockFn).toHaveBeenCalledWith("Hello");
  }
}`,...(ue=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,xe,ve;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ve=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const _e=["Default","CharacterCount","Error","InteractionStates","Sizes","LabelPosition","RequiredIndicator","AssistiveText","LeftIcon","RightIconClean","KeyboardInteraction","KeyboardRightIconClean","EnterKeyDown","KeyboardRightIconVisibility"];export{g as AssistiveText,u as CharacterCount,r as Default,w as EnterKeyDown,p as Error,x as InteractionStates,b as KeyboardInteraction,f as KeyboardRightIconClean,T as KeyboardRightIconVisibility,h as LabelPosition,y as LeftIcon,m as RequiredIndicator,I as RightIconClean,v as Sizes,_e as __namedExportsOrder,Oe as default};
