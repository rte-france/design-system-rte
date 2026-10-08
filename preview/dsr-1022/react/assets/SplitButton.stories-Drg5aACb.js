import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{b as H}from"./keyboard.constants-BverKK8B.js";import{w as K,u as d,e as g,a as L,f as _}from"./index-4rjIhT2C.js";import{f as M}from"./testing.utils-DmLcTX3r.js";import{R as N,T as V}from"./Icon-DBkoQNiA.js";import{S as o}from"./SplitButton-oVrOluru.js";import"./index-yBjzXJbu.js";import"./Badge-DUkuUEsZ.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";import"./Dropdown-CyecDUeK.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Bpn9aS_d.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-CMrM2eNu.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";const m=Object.keys(N),u=Object.keys(V),St={title:"Composants/SplitButton",id:"SplitButton",component:o,tags:["autodocs"],argTypes:{appearance:{control:"select",options:["primary","secondary"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean"},position:{control:"select",options:["bottom-start","bottom-end","top-start","top-end"]},disabled:{control:"boolean"},icon:{control:"select",options:["",...m,...u].sort((t,a)=>t.localeCompare(a)),description:"Nom de l’icône à afficher",defaultValue:""},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...m,...u].sort((t,a)=>t.localeCompare(a))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}},args:{onClick:_()}},q=_(),P=[{id:"option-1",label:"Option 1",onClick:()=>console.log("Option 1 clicked")},{id:"option-2",label:"Option 2",onClick:()=>console.log("Option 2 clicked")},{id:"option-3",label:"Option 3",onClick:()=>console.log("Option 3 clicked")}],n={args:{appearance:"primary",label:"Button Label",compactSpacing:!1,position:"bottom-start",disabled:!1,ariaLabelRight:"Open menu",onClick:q(),options:P},render:t=>e.jsx(o,{...t})},s={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{...t,appearance:"primary"}),e.jsx(o,{...t,appearance:"secondary"})]}),args:{...n.args}},r={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{...t,size:"s"}),e.jsx(o,{...t,size:"m"}),e.jsx(o,{...t,size:"l"})]}),args:{...n.args}},i={render:t=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(o,{...t,size:"s",compactSpacing:!0}),e.jsx(o,{...t,size:"m",compactSpacing:!0}),e.jsx(o,{...t,size:"l",compactSpacing:!0})]}),args:{...n.args}},c={render:t=>e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:600},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"2fr 2fr",gap:24},children:[e.jsx(o,{...t,position:"top-end"}),e.jsx(o,{...t,position:"top-start"}),e.jsx(o,{...t,position:"bottom-end"}),e.jsx(o,{...t,position:"bottom-start"})]})}),args:{...n.args}},p={args:{...n.args,showBadge:!0,badgeContent:"empty",badgeType:"indicator",badgeIcon:"star",badgeCount:7,options:[{id:"option-1",label:"Option 1",onClick:()=>console.log("Option 1 clicked"),showBadge:!0,badgeCount:2,badgeContent:"number",badgeType:"indicator"},{id:"option-2",label:"Option 2",onClick:()=>console.log("Option 2 clicked")},{id:"option-3",label:"Option 3",onClick:()=>console.log("Option 3 clicked"),showBadge:!0,badgeCount:5,badgeContent:"number",badgeType:"indicator"}]}},l={tags:["!autodocs"],args:{...n.args},play:async({canvasElement:t})=>{const A=K(t).getByTestId("Menu button");M(),await d.tab(),await d.tab(),g(A).toHaveFocus(),await d.keyboard(`{${H}}`),await L(()=>g(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible())}};var b,y,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  render: args => <SplitButton {...args} />
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,C,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var B,O,k;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(O=r.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var v,j,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var w,z,I;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(z=c.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var T,E,D;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showBadge: true,
    badgeContent: "empty",
    badgeType: "indicator",
    badgeIcon: "star",
    badgeCount: 7,
    options: [{
      id: "option-1",
      label: "Option 1",
      onClick: () => console.log("Option 1 clicked"),
      showBadge: true,
      badgeCount: 2,
      badgeContent: "number",
      badgeType: "indicator"
    }, {
      id: "option-2",
      label: "Option 2",
      onClick: () => console.log("Option 2 clicked")
    }, {
      id: "option-3",
      label: "Option 3",
      onClick: () => console.log("Option 3 clicked"),
      showBadge: true,
      badgeCount: 5,
      badgeContent: "number",
      badgeType: "indicator"
    }]
  }
}`,...(D=(E=p.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var R,F,W;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId("Menu button");
    focusElementBeforeComponent();
    await userEvent.tab();
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(\`{\${ARROW_DOWN_KEY}}\`);
    await waitFor(() => expect(document.body.querySelector('[data-testid = "Menu container"]')).toBeVisible());
  }
}`,...(W=(F=l.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const Ct=["Default","Appearance","Size","CompactSpacing","Position","WithBadge","KeyboardInteraction"];export{s as Appearance,i as CompactSpacing,n as Default,l as KeyboardInteraction,c as Position,r as Size,p as WithBadge,Ct as __namedExportsOrder,St as default};
