import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{e as u,c as k,f as O,T as _}from"./keyboard-test.constants-fmK-LbIX.js";import{f as p,w as x,e as r,u as n}from"./index-DCXJbAaW.js";import{r as m}from"./index-G8LIXM5I.js";import{S as g}from"./SegmentedControl-D2dD8EzS.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useSelectedIndicatorPosition-DxJCQCZS.js";import"./useActiveKeyboard-BPEscCvd.js";import"./dom.constants-pEgPeCLJ.js";import"./Icon-DjEid3Hw.js";const W={title:"Composants/SegmentedControl/SegmentedControl",component:g,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:p()}},d={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:p()},render:o=>{const[i,t]=m.useState("option1"),e=a=>{t(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})},play:async({canvasElement:o})=>{const i=o,[t,e,a]=x(i).getAllByRole("radio");r(t).toHaveAttribute("aria-checked","true"),await n.click(e),r(e).toHaveAttribute("aria-checked","true"),await n.click(a),r(a).toHaveAttribute("aria-checked","true"),await n.click(t),await n.tab(),await n.keyboard(u),r(e).toHaveFocus(),await n.keyboard(k),r(e).toHaveAttribute("aria-checked","true"),await n.keyboard(O),await n.keyboard(_),r(t).toHaveAttribute("aria-checked","true"),await n.keyboard(u),await n.keyboard(u),r(a).toHaveFocus()}},c={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:p()},render:o=>{const[i,t]=m.useState("option1"),e=a=>{t(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})}},l={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:p()},render:o=>{const[i,t]=m.useState("agenda"),e=a=>{t(a)};return s.jsx("div",{style:{width:"420px"},children:s.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})}};var S,h,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }, {
      label: "Option 3",
      id: "option3"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = canvasElement;
    const [firstSegment, secondSegment, thirdSegment] = within(canvas).getAllByRole("radio");
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(secondSegment);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(thirdSegment);
    expect(thirdSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.click(firstSegment);
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(secondSegment).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(secondSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(firstSegment).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(thirdSegment).toHaveFocus();
  }
}`,...(v=(h=d.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var E,b,w;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      id: "option1"
    }, {
      label: "Option 2",
      id: "option2"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("option1");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,C,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options: [{
      id: "agenda",
      icon: "view-agenda",
      label: "Vue agenda"
    }, {
      id: "column",
      icon: "view-column",
      label: "Vue colonne"
    }, {
      id: "grid",
      icon: "view-grid",
      label: "Vue grille"
    }],
    onChange: fn()
  },
  render: args => {
    const [selected, setSelected] = useState("agenda");
    const handleOnChange = (id: string) => {
      setSelected(id);
    };
    return <div style={{
      width: "420px"
    }}>
        <SegmentedControl options={args.options} onChange={handleOnChange} selectedSegment={selected} />
      </div>;
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const P=["Default","TwoOptions","Icons"];export{d as Default,l as Icons,c as TwoOptions,P as __namedExportsOrder,W as default};
