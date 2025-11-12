import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as E}from"./keyboard.constants-ep-ZHn_7.js";import{f as I,w as D,u as c,e as d,a as T}from"./index-DCXJbAaW.js";import{R as A,T as _}from"./Icon-DjEid3Hw.js";import{S as a}from"./SplitButton-D2_XFeFd.js";import"./index-yBjzXJbu.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./DropdownItem-CTbBVvM1.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B2eUObs8.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";const H=Object.keys(A),K=Object.keys(_),oe={title:"SplitButton (développement en cours)",id:"SplitButton",component:a,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean"},position:{control:"select",options:["bottom-start","bottom-end","top-start","top-end"]},disabled:{control:"boolean"},icon:{control:"select",options:["",...H,...K].sort((t,l)=>t.localeCompare(l)),description:"Nom de l’icône à afficher",defaultValue:""}},args:{onClick:I()}},L=I(),M=[{id:"option-1",label:"Option 1",onClick:()=>console.log("Option 1 clicked")},{id:"option-2",label:"Option 2",onClick:()=>console.log("Option 2 clicked")},{id:"option-3",label:"Option 3",onClick:()=>console.log("Option 3 clicked")}],n={args:{appearance:"primary",label:"Button Label",compactSpacing:!1,position:"bottom-start",disabled:!1,ariaLabelRight:"Open menu",onClick:L(),options:M},render:t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{}),e.jsx(a,{...t})]})},o={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{...t,appearance:"primary"}),e.jsx(a,{...t,appearance:"secondary"})]}),args:{...n.args}},s={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{...t,size:"s"}),e.jsx(a,{...t,size:"m"}),e.jsx(a,{...t,size:"l"})]}),args:{...n.args}},r={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{...t,size:"s",compactSpacing:!0}),e.jsx(a,{...t,size:"m",compactSpacing:!0}),e.jsx(a,{...t,size:"l",compactSpacing:!0})]}),args:{...n.args}},i={render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:600},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 2fr",gap:24},children:[e.jsx(a,{...t,position:"top-end"}),e.jsx(a,{...t,position:"top-start"}),e.jsx(a,{...t,position:"bottom-end"}),e.jsx(a,{...t,position:"bottom-start"})]})}),args:{...n.args}},p={args:{...n.args},play:async({canvasElement:t})=>{const R=D(t).getByTestId("Menu button");await c.tab(),await c.tab(),d(R).toHaveFocus(),await c.keyboard(`{${E}}`),await T(()=>d(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible())}};var m,u,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    appearance: "primary",
    label: "Button Label",
    compactSpacing: false,
    position: "bottom-start",
    disabled: false,
    ariaLabelRight: "Open menu",
    onClick: mockFn(),
    options: defaultOptions
  },
  render: args => <>
      <div>
        <span style={{
        fontFamily: "sans-serif",
        marginBottom: 16,
        border: "1px solid #F4922B",
        padding: 8,
        borderRadius: 5,
        backgroundColor: "#FAFFC1",
        margin: 0
      }}>
          Ce composant est en cours de développement et n'est pas encore disponible
        </span>
      </div>
      <br />
      <SplitButton {...args} />
    </>
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,y,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} appearance="primary" />
      <SplitButton {...args} appearance="secondary" />
    </div>,
  args: {
    ...Default.args
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,S,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} size="s" />
      <SplitButton {...args} size="m" />
      <SplitButton {...args} size="l" />
    </div>,
  args: {
    ...Default.args
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,B,C;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: 16
  }}>
      <SplitButton {...args} size="s" compactSpacing={true} />
      <SplitButton {...args} size="m" compactSpacing={true} />
      <SplitButton {...args} size="l" compactSpacing={true} />
    </div>,
  args: {
    ...Default.args
  }
}`,...(C=(B=r.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var k,F,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 600
  }}>
      <div style={{
      display: "grid",
      gridTemplateColumns: "2fr 2fr",
      gap: 24
    }}>
        <SplitButton {...args} position="top-end" />
        <SplitButton {...args} position="top-start" />
        <SplitButton {...args} position="bottom-end" />
        <SplitButton {...args} position="bottom-start" />
      </div>
    </div>,
  args: {
    ...Default.args
  }
}`,...(O=(F=i.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var h,z,w;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    await userEvent.tab();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(\`{\${ARROW_DOWN_KEY}}\`);
    await waitFor(() => expect(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible());
  }
}`,...(w=(z=p.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};const se=["Default","Appearance","Size","CompactSpacing","Position","KeyboardInteraction"];export{o as Appearance,r as CompactSpacing,n as Default,p as KeyboardInteraction,i as Position,s as Size,se as __namedExportsOrder,oe as default};
