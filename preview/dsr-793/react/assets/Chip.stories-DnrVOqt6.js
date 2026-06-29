import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as h,c as V}from"./keyboard-test.constants-DRUxacrk.js";import{E as K}from"./keyboard.constants-BverKK8B.js";import{w as C,u as l,e as c,f as M}from"./index-C4S39nCK.js";import{r as f}from"./index-G8LIXM5I.js";import{B as O}from"./Button-CXM9p_L3.js";import{T as D}from"./TextInput-CxTlBLp6.js";import{C as v}from"./Chip-Dn6V0b1u.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./BaseTextInput-CMRL3cab.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Link-CAnB1cKs.js";import"./IconButton-DcIeVO_H.js";import"./useActiveKeyboard-DaOmFJe_.js";const se={title:"Composants/Chip/Chip",component:v,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the chip",defaultValue:"brand"}},args:{onClick:M()}},y={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},m={args:{...y.args},render:s=>{var n;const[a,t]=f.useState(null),p=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],d=i=>{const r=i.currentTarget.id;t(r===a?null:r)};return e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontFamily:"Arial, sans-serif",marginTop:"20px"},children:["Chip sélectionnée: ",((n=p.find(i=>i.id===a))==null?void 0:n.label)||"Aucune"]}),e.jsxs("div",{style:{display:"flex",gap:"30px",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: brand"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup","data-testid":"test-chip-group",children:p.map(({id:i,label:r})=>e.jsx(v,{id:i,label:r,selected:a===i,onClick:d,type:"single",compactSpacing:s.compactSpacing,className:"chip",disabled:s.disabled},i))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: neutral"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup","data-testid":"test-chip-group-neutral",children:p.map(({id:i,label:r})=>e.jsx(v,{id:i,label:r,selected:a===i,onClick:d,type:"single",compactSpacing:s.compactSpacing,className:"chip",appearance:"neutral",disabled:s.disabled},i))})]})]})]})},play:async({canvasElement:s})=>{const t=C(s).getByTestId("test-chip-group").querySelectorAll("[role='radio']");await l.click(t[0]),c(t[0]).toHaveAttribute("aria-checked","true"),await l.click(t[1]),c(t[1]).toHaveAttribute("aria-checked","true"),c(t[0]).toHaveAttribute("aria-checked","false"),await l.click(t[1]),await l.tab(),c(t[2]).toHaveFocus(),await l.keyboard(h),c(t[2]).toHaveAttribute("aria-checked","true"),await l.keyboard(V),c(t[2]).toHaveAttribute("aria-checked","false")}},b={args:{...y.args},render:s=>{const[a,t]=f.useState([]),p=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],d=n=>{const i=n.currentTarget.id;t(r=>r.includes(i)?r.filter(g=>g!==i):[...r,i])};return e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontFamily:"Arial, sans-serif",marginTop:"20px"},children:["Chip(s) sélectionnée(s):"," ",p.filter(n=>a.includes(n.id)).map(n=>n.label).join(", ")]}),e.jsxs("div",{style:{display:"flex",gap:"30px",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: brand"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:n,label:i})=>e.jsx(v,{id:n,label:i,selected:a.includes(n),onClick:d,type:"multi",compactSpacing:s.compactSpacing,disabled:s.disabled},n))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: neutral"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:n,label:i})=>e.jsx(v,{id:n,label:i,selected:a.includes(n),onClick:d,type:"multi",compactSpacing:s.compactSpacing,appearance:"neutral",disabled:s.disabled},n))})]})]})]})},play:async({canvasElement:s})=>{const t=C(s).getAllByRole("checkbox");await l.click(t[0]),c(t[0]).toHaveAttribute("aria-checked","true"),await l.click(t[1]),c(t[1]).toHaveAttribute("aria-checked","true"),c(t[0]).toHaveAttribute("aria-checked","true"),await l.click(t[1]),c(t[1]).toHaveAttribute("aria-checked","false"),await l.tab(),c(t[2]).toHaveFocus(),await l.keyboard(h),c(t[2]).toHaveAttribute("aria-checked","true")}},x={args:{...y.args,type:"input"},render:s=>{const[a,t]=f.useState(""),[p,d]=f.useState([]),n=o=>{t(o)},i=o=>{o.key===K&&(o.preventDefault(),r())},r=()=>{a&&!p.includes(a)&&(d(o=>[...o,a]),t(""))},g=o=>{const u=o.currentTarget.value;d(E=>E.includes(u)?E.filter(_=>_!==u):E)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[e.jsx(D,{id:"input-add-chip",label:"Ajouter un chip",value:a,onChange:n,onKeyDown:i}),e.jsx(O,{label:"Ajouter",onClick:r})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list","data-testid":"chips-list",children:p.map((o,u)=>e.jsx(v,{id:`chip-${u}-${o}`,label:o,selected:!1,disabled:s.disabled,type:"input",onClose:g},u+o))}),p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:p.map((o,u)=>e.jsx(v,{id:`chip-${u}-${o}`,label:o,selected:!1,disabled:s.disabled,type:"input",onClose:g,appearance:"neutral"},u+o))})]})]})},play:async({canvasElement:s})=>{const a=C(s),t=a.getByRole("textbox");await l.type(t,"New Chip"),await l.keyboard(h),await l.type(t,"Another Chip"),await l.keyboard(h);const p=a.getByTestId("chips-list").querySelectorAll("[role='option']");c(p).toHaveLength(2);const d=C(p[0]).getByRole("button");await l.click(d);const n=a.getByTestId("chips-list").querySelectorAll("[role='option']");c(n).toHaveLength(1),await l.type(t,"More Chip"),await l.keyboard(h);const i=a.getByTestId("chips-list").querySelectorAll("[role='option']");c(i).toHaveLength(2),i[0].focus(),await l.tab(),await l.keyboard(h),c(a.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(1),await l.type(t,"Last Chip"),await l.keyboard(h),c(a.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(2),a.getByTestId("chips-list").querySelectorAll("[role='option']")[1].focus(),await l.tab(),await l.keyboard(V),c(a.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(1)}};var k,T,S;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(S=(T=y.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var A,w,H;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
        <p style={{
        fontFamily: "Arial, sans-serif",
        marginTop: "20px"
      }}>
          Chip sélectionnée: {options.find(option => option.id === selectedChip)?.label || "Aucune"}
        </p>
        <div style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column"
      }}>
          <div>
            <p style={{
            fontFamily: "arial"
          }}>Appearance: brand</p>
            <div style={{
            display: "flex",
            gap: "10px"
          }} role="radiogroup" data-testid="test-chip-group">
              {options.map(({
              id,
              label
            }) => <Chip id={id} key={id} label={label} selected={selectedChip === id} onClick={handleClick} type="single" compactSpacing={args.compactSpacing} className="chip" disabled={args.disabled} />)}
            </div>
          </div>
          <div>
            <p style={{
            fontFamily: "arial"
          }}>Appearance: neutral</p>
            <div style={{
            display: "flex",
            gap: "10px"
          }} role="radiogroup" data-testid="test-chip-group-neutral">
              {options.map(({
              id,
              label
            }) => <Chip id={id} key={id} label={label} selected={selectedChip === id} onClick={handleClick} type="single" compactSpacing={args.compactSpacing} className="chip" appearance="neutral" disabled={args.disabled} />)}
            </div>
          </div>
        </div>
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const chips = canvas.getByTestId("test-chip-group").querySelectorAll("[role='radio']");
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
}`,...(H=(w=m.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var I,L,j;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <p style={{
        fontFamily: "Arial, sans-serif",
        marginTop: "20px"
      }}>
          Chip(s) sélectionnée(s):{" "}
          {options.filter(option => selectedChips.includes(option.id)).map(option => option.label).join(", ")}
        </p>
        <div style={{
        display: "flex",
        gap: "30px",
        flexDirection: "column"
      }}>
          <div>
            <p style={{
            fontFamily: "arial"
          }}>Appearance: brand</p>
            <div style={{
            display: "flex",
            gap: "10px"
          }} role="group">
              {options.map(({
              id,
              label
            }) => <Chip id={id} key={id} label={label} selected={selectedChips.includes(id)} onClick={handleClick} type="multi" compactSpacing={args.compactSpacing} disabled={args.disabled} />)}
            </div>
          </div>
          <div>
            <p style={{
            fontFamily: "arial"
          }}>Appearance: neutral</p>
            <div style={{
            display: "flex",
            gap: "10px"
          }} role="group">
              {options.map(({
              id,
              label
            }) => <Chip id={id} key={id} label={label} selected={selectedChips.includes(id)} onClick={handleClick} type="multi" compactSpacing={args.compactSpacing} appearance="neutral" disabled={args.disabled} />)}
            </div>
          </div>
        </div>
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
}`,...(j=(L=b.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var R,N,B;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "input"
  },
  render: args => {
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
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
          {chipsValue.length > 0 && <div style={{
          display: "flex",
          gap: "10px"
        }} role="listbox" aria-label="Chips list" data-testid="chips-list">
              {chipsValue.map((value, index) => <Chip id={\`chip-\${index}-\${value}\`} key={index + value} label={value} selected={false} disabled={args.disabled} type="input" onClose={handleRemoveChip} />)}
            </div>}
          {chipsValue.length > 0 && <div style={{
          display: "flex",
          gap: "10px"
        }} role="listbox" aria-label="Chips list">
              {chipsValue.map((value, index) => <Chip id={\`chip-\${index}-\${value}\`} key={index + value} label={value} selected={false} disabled={args.disabled} type="input" onClose={handleRemoveChip} appearance="neutral" />)}
            </div>}
        </div>
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
    const allChipsList = canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>;
    expect(allChipsList).toHaveLength(2);
    const closeButton = within(allChipsList[0]).getByRole("button");
    await userEvent.click(closeButton);
    const remainingChips = canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>;
    expect(remainingChips).toHaveLength(1);
    await userEvent.type(input, "More Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const newRemainingChips = canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>;
    expect(newRemainingChips).toHaveLength(2);
    newRemainingChips[0].focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>).toHaveLength(1);
    await userEvent.type(input, "Last Chip");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>).toHaveLength(2);
    const lastChip = (canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>)[1];
    lastChip.focus();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(canvas.getByTestId("chips-list").querySelectorAll("[role='option']") as NodeListOf<HTMLElement>).toHaveLength(1);
  }
}`,...(B=(N=x.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const ce=["Default","SingleSelect","MultiSelect","Input"];export{y as Default,x as Input,b as MultiSelect,m as SingleSelect,ce as __namedExportsOrder,se as default};
