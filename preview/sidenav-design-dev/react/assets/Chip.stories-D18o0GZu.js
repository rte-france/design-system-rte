import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as u,c as N}from"./keyboard-test.constants-D-GvhFnl.js";import{E as j}from"./keyboard.constants-ep-ZHn_7.js";import{f as K,w as b,u as t,e as i}from"./index-DCXJbAaW.js";import{r as C}from"./index-G8LIXM5I.js";import{B as D}from"./Button-B-hhLjRd.js";import{T as M}from"./TextInput-BkLeuN_4.js";import{C as E}from"./Chip-C9SfH6vI.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./Icon-DjEid3Hw.js";import"./IconButton-CMN6gjhA.js";import"./Link-BBbOz1gX.js";import"./useActiveKeyboard-BPEscCvd.js";const te={title:"Composants/Chip/Chip",component:E,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:K()}},h={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},g={args:{...h.args},render:o=>{var l;const[n,e]=C.useState(null),p=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],d=a=>{const r=a.currentTarget.id;e(r===n?null:r)};return s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup",children:p.map(({id:a,label:r})=>s.jsx(E,{id:a,label:r,selected:n===a,onClick:d,type:"single",compactSpacing:o.compactSpacing,className:"chip"},a))}),s.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip sélectionnée: ",((l=p.find(a=>a.id===n))==null?void 0:l.label)||"Aucune"]})]})},play:async({canvasElement:o})=>{const e=b(o).getAllByRole("radio");await t.click(e[0]),i(e[0]).toHaveAttribute("aria-checked","true"),await t.click(e[1]),i(e[1]).toHaveAttribute("aria-checked","true"),i(e[0]).toHaveAttribute("aria-checked","false"),await t.click(e[1]),await t.tab(),i(e[2]).toHaveFocus(),await t.keyboard(u),i(e[2]).toHaveAttribute("aria-checked","true"),await t.keyboard(N),i(e[2]).toHaveAttribute("aria-checked","false")}},y={args:{...h.args},render:o=>{const[n,e]=C.useState([]),p=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],d=l=>{const a=l.currentTarget.id;e(r=>r.includes(a)?r.filter(c=>c!==a):[...r,a])};return s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:l,label:a})=>s.jsx(E,{id:l,label:a,selected:n.includes(l),onClick:d,type:"multi",compactSpacing:o.compactSpacing},l))}),s.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip(s) sélectionnée(s):"," ",p.filter(l=>n.includes(l.id)).map(l=>l.label).join(", ")]})]})},play:async({canvasElement:o})=>{const e=b(o).getAllByRole("checkbox");await t.click(e[0]),i(e[0]).toHaveAttribute("aria-checked","true"),await t.click(e[1]),i(e[1]).toHaveAttribute("aria-checked","true"),i(e[0]).toHaveAttribute("aria-checked","true"),await t.click(e[1]),i(e[1]).toHaveAttribute("aria-checked","false"),await t.tab(),i(e[2]).toHaveFocus(),await t.keyboard(u),i(e[2]).toHaveAttribute("aria-checked","true")}},m={args:{...h.args,type:"input"},render:()=>{const[o,n]=C.useState(""),[e,p]=C.useState([]),d=c=>{n(c)},l=c=>{c.key===j&&(c.preventDefault(),a())},a=()=>{o&&!e.includes(o)&&(p(c=>[...c,o]),n(""))},r=c=>{const v=c.currentTarget.value;p(k=>k.includes(v)?k.filter(V=>V!==v):k)};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[s.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[s.jsx(M,{id:"input-add-chip",label:"Ajouter un chip",value:o,onChange:d,onKeyDown:l}),s.jsx(D,{label:"Ajouter",onClick:a})]}),e.length>0&&s.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:e.map((c,v)=>s.jsx(E,{id:`chip-${v}-${c}`,label:c,selected:!1,disabled:!1,type:"input",onClose:r},v+c))})]})},play:async({canvasElement:o})=>{const n=b(o),e=n.getByRole("textbox");await t.type(e,"New Chip"),await t.keyboard(u),await t.type(e,"Another Chip"),await t.keyboard(u);const p=n.getAllByRole("option");i(p).toHaveLength(2);const d=b(p[0]).getByRole("button");await t.click(d);const l=n.getAllByRole("option");i(l).toHaveLength(1),await t.type(e,"More Chip"),await t.keyboard(u);const a=n.getAllByRole("option");i(a).toHaveLength(2),a[0].focus(),await t.tab(),await t.keyboard(u),i(n.getAllByRole("option")).toHaveLength(1),await t.type(e,"Last Chip"),await t.keyboard(u),i(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await t.tab(),await t.keyboard(N),i(n.getAllByRole("option")).toHaveLength(1)}};var f,x,w;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(w=(x=h.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var A,T,S;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selectedChip, setSelectedChip] = useState<string | null>(null);
    const options = [{
      id: "all",
      label: "All"
    }, {
      id: "option-1",
      label: "Option 1"
    }, {
      id: "option-2",
      label: "Option 2"
    }];
    const handleClick = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
      const clickedChipId = event.currentTarget.id;
      if (clickedChipId === selectedChip) {
        setSelectedChip(null);
      } else {
        setSelectedChip(clickedChipId);
      }
    };
    return <>
        <div style={{
        display: "flex",
        gap: "10px"
      }} role="radiogroup">
          {options.map(({
          id,
          label
        }) => <Chip id={id} key={id} label={label} selected={selectedChip === id} onClick={handleClick} type="single" compactSpacing={args.compactSpacing} className="chip" />)}
        </div>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Chip sélectionnée: {options.find(option => option.id === selectedChip)?.label || "Aucune"}
        </p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole("radio");
    await userEvent.click(chips[0]);
    expect(chips[0]).toHaveAttribute("aria-checked", "true");
    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "true");
    expect(chips[0]).toHaveAttribute("aria-checked", "false");
    await userEvent.click(chips[1]);
    await userEvent.tab();
    expect(chips[2]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "false");
  }
}`,...(S=(T=g.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var R,H,B;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [selectedChips, setSelectedChips] = useState<string[]>([]);
    const options = [{
      id: "option-1",
      label: "Option 1"
    }, {
      id: "option-2",
      label: "Option 2"
    }, {
      id: "option-3",
      label: "Option 3"
    }];
    const handleClick = (event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => {
      const clickedChipId = event.currentTarget.id;
      setSelectedChips(prev => prev.includes(clickedChipId) ? prev.filter(id => id !== clickedChipId) : [...prev, clickedChipId]);
    };
    return <>
        <div style={{
        display: "flex",
        gap: "10px"
      }} role="group">
          {options.map(({
          id,
          label
        }) => <Chip id={id} key={id} label={label} selected={selectedChips.includes(id)} onClick={handleClick} type="multi" compactSpacing={args.compactSpacing} />)}
        </div>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Chip(s) sélectionnée(s):{" "}
          {options.filter(option => selectedChips.includes(option.id)).map(option => option.label).join(", ")}
        </p>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getAllByRole("checkbox");
    await userEvent.click(chips[0]);
    expect(chips[0]).toHaveAttribute("aria-checked", "true");
    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "true");
    expect(chips[0]).toHaveAttribute("aria-checked", "true");
    await userEvent.click(chips[1]);
    expect(chips[1]).toHaveAttribute("aria-checked", "false");
    await userEvent.tab();
    expect(chips[2]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
  }
}`,...(B=(H=y.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var I,L,_;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "input"
  },
  render: () => {
    const [inputValue, setInputValue] = useState("");
    const [chipsValue, setChipsValue] = useState<string[]>([]);
    const handleOnChange = (value: string) => {
      setInputValue(value);
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === ENTER_KEY) {
        event.preventDefault();
        handleAddChip();
      }
    };
    const handleAddChip = () => {
      if (inputValue && !chipsValue.includes(inputValue)) {
        setChipsValue(prev => [...prev, inputValue]);
        setInputValue("");
      }
    };
    const handleRemoveChip = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
      const chipsToRemove = event.currentTarget.value;
      setChipsValue(chipsValue => chipsValue.includes(chipsToRemove) ? chipsValue.filter(value => value !== chipsToRemove) : chipsValue);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
        <div style={{
        display: "flex",
        gap: "10px",
        alignItems: "end"
      }}>
          <TextInput id="input-add-chip" label="Ajouter un chip" value={inputValue} onChange={handleOnChange} onKeyDown={handleKeyDown} />

          <Button label="Ajouter" onClick={handleAddChip}></Button>
        </div>
        {chipsValue.length > 0 && <div style={{
        display: "flex",
        gap: "10px"
      }} role="listbox" aria-label="Chips list">
            {chipsValue.map((value, index) => <Chip id={\`chip-\${index}-\${value}\`} key={index + value} label={value} selected={false} disabled={false} type="input" onClose={handleRemoveChip} />)}
          </div>}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "New Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.type(input, "Another Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const allChipsList = canvas.getAllByRole("option");
    expect(allChipsList).toHaveLength(2);
    const closeButton = within(allChipsList[0]).getByRole("button");
    await userEvent.click(closeButton);
    const remainingChips = canvas.getAllByRole("option");
    expect(remainingChips).toHaveLength(1);
    await userEvent.type(input, "More Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const newRemainingChips = canvas.getAllByRole("option");
    expect(newRemainingChips).toHaveLength(2);
    newRemainingChips[0].focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(canvas.getAllByRole("option")).toHaveLength(1);
    await userEvent.type(input, "Last Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(canvas.getAllByRole("option")).toHaveLength(2);
    const lastChip = canvas.getAllByRole("option")[1];
    lastChip.focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(canvas.getAllByRole("option")).toHaveLength(1);
  }
}`,...(_=(L=m.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const ne=["Default","SingleSelect","MultiSelect","Input"];export{h as Default,m as Input,y as MultiSelect,g as SingleSelect,ne as __namedExportsOrder,te as default};
