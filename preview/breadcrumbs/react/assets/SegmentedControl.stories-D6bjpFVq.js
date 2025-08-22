import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{b as u,a as C,c as O,T as _}from"./keyboard-test.constants-C3026ykJ.js";import{f as p,w as x,e as s,u as n}from"./index-DaW6VCyr.js";import{r as m}from"./index-G8LIXM5I.js";import{S as g}from"./SegmentedControl-ByRhx2xf.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-Ci2qhLdf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DAXsdPh3.js";import"./Icon-DjEid3Hw.js";const V={title:"SegmentedControl",component:g,tags:["autodocs"],argTypes:{options:{control:{type:"object"},description:"Array of segment options",table:{type:{summary:"SegmentProps[]"},defaultValue:{summary:"[]"}}}},args:{onClick:p()}},d={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"},{label:"Option 3",id:"option3"}],onChange:p()},render:o=>{const[i,t]=m.useState("option1"),e=a=>{t(a)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})},play:async({canvasElement:o})=>{const i=o,[t,e,a]=x(i).getAllByRole("radio");s(t).toHaveAttribute("aria-checked","true"),await n.click(e),s(e).toHaveAttribute("aria-checked","true"),await n.click(a),s(a).toHaveAttribute("aria-checked","true"),await n.click(t),await n.tab(),await n.keyboard(u),s(e).toHaveFocus(),await n.keyboard(C),s(e).toHaveAttribute("aria-checked","true"),await n.keyboard(O),await n.keyboard(_),s(t).toHaveAttribute("aria-checked","true"),await n.keyboard(u),await n.keyboard(u),s(a).toHaveFocus()}},c={args:{options:[{label:"Option 1",id:"option1"},{label:"Option 2",id:"option2"}],onChange:p()},render:o=>{const[i,t]=m.useState("option1"),e=a=>{t(a)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})}},l={args:{options:[{id:"agenda",icon:"view-agenda",label:"Vue agenda"},{id:"column",icon:"view-column",label:"Vue colonne"},{id:"grid",icon:"view-grid",label:"Vue grille"}],onChange:p()},render:o=>{const[i,t]=m.useState("agenda"),e=a=>{t(a)};return r.jsx("div",{style:{width:"420px"},children:r.jsx(g,{options:o.options,onChange:e,selectedSegment:i})})}};var S,h,v;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(b=c.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var T,y,k;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};const F=["Default","TwoOptions","Icons"];export{d as Default,l as Icons,c as TwoOptions,F as __namedExportsOrder,V as default};
