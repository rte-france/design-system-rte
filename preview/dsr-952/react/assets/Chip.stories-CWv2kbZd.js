import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as g,a as Y}from"./keyboard-test.constants-By8W48aj.js";import{E as G}from"./keyboard.constants-BverKK8B.js";import{w as C,e as o,u as n,f as z}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{B as P}from"./Button-KJfdYR4G.js";import{T as W}from"./TextInput-021w0b3O.js";import{C as h}from"./Chip-Dd0WaMoK.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./BaseTextInput-wSuYcq-n.js";import"./Label-Bgp-fFvQ.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./IconButton-D7Ub3mhB.js";import"./IconButton.module-DsipBz7u.js";import"./useActiveKeyboard-DaOmFJe_.js";const ge={title:"Composants/Chip/Chip",component:h,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"},appearance:{control:"select",options:["brand","neutral"],description:"Appearance of the chip",defaultValue:"brand"}},args:{onClick:z()}},m={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},f={args:{id:"chip-disabled",label:"Disabled",disabled:!0},play:async({canvasElement:s})=>{const i=C(s).getByRole("radio");o(i).toHaveAttribute("aria-disabled","true")}},E={args:{...m.args},render:s=>{var c;const[i,t]=b.useState(null),p=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],u=l=>{const r=l.currentTarget.id;t(r===i?null:r)};return e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontFamily:"Arial, sans-serif",marginTop:"20px"},children:["Chip sélectionnée: ",((c=p.find(l=>l.id===i))==null?void 0:c.label)||"Aucune"]}),e.jsxs("div",{style:{display:"flex",gap:"30px",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: brand"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup","data-testid":"test-chip-group",children:p.map(({id:l,label:r})=>e.jsx(h,{id:l,label:r,selected:i===l,onClick:u,type:"single",compactSpacing:s.compactSpacing,className:"chip",disabled:s.disabled},l))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: neutral"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup","data-testid":"test-chip-group-neutral",children:p.map(({id:l,label:r})=>e.jsx(h,{id:l,label:r,selected:i===l,onClick:u,type:"single",compactSpacing:s.compactSpacing,className:"chip",appearance:"neutral",disabled:s.disabled},l))})]})]})]})},play:async({canvasElement:s})=>{const t=C(s).getByTestId("test-chip-group").querySelectorAll("[role='radio']");await n.click(t[0]),o(t[0]).toHaveAttribute("aria-checked","true"),await n.click(t[1]),o(t[1]).toHaveAttribute("aria-checked","true"),o(t[0]).toHaveAttribute("aria-checked","false"),await n.click(t[1]),await n.tab(),o(t[2]).toHaveFocus(),await n.keyboard(g),o(t[2]).toHaveAttribute("aria-checked","true"),await n.keyboard(Y),o(t[2]).toHaveAttribute("aria-checked","false")}},k={args:{...m.args},render:s=>{const[i,t]=b.useState([]),p=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],u=c=>{const l=c.currentTarget.id;t(r=>r.includes(l)?r.filter(v=>v!==l):[...r,l])};return e.jsxs(e.Fragment,{children:[e.jsxs("p",{style:{fontFamily:"Arial, sans-serif",marginTop:"20px"},children:["Chip(s) sélectionnée(s):"," ",p.filter(c=>i.includes(c.id)).map(c=>c.label).join(", ")]}),e.jsxs("div",{style:{display:"flex",gap:"30px",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: brand"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:c,label:l})=>e.jsx(h,{id:c,label:l,selected:i.includes(c),onClick:u,type:"multi",compactSpacing:s.compactSpacing,disabled:s.disabled},c))})]}),e.jsxs("div",{children:[e.jsx("p",{style:{fontFamily:"arial"},children:"Appearance: neutral"}),e.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:c,label:l})=>e.jsx(h,{id:c,label:l,selected:i.includes(c),onClick:u,type:"multi",compactSpacing:s.compactSpacing,appearance:"neutral",disabled:s.disabled},c))})]})]})]})},play:async({canvasElement:s})=>{const t=C(s).getAllByRole("checkbox");await n.click(t[0]),o(t[0]).toHaveAttribute("aria-checked","true"),await n.click(t[1]),o(t[1]).toHaveAttribute("aria-checked","true"),o(t[0]).toHaveAttribute("aria-checked","true"),await n.click(t[1]),o(t[1]).toHaveAttribute("aria-checked","false"),await n.tab(),o(t[2]).toHaveFocus(),await n.keyboard(g),o(t[2]).toHaveAttribute("aria-checked","true")}},x={args:{...m.args,type:"input"},render:s=>{const[i,t]=b.useState(""),[p,u]=b.useState(["Chip 1","Chip 2"]),c=a=>{t(a)},l=a=>{a.key===G&&(a.preventDefault(),r())},r=()=>{i&&!p.includes(i)&&(u(a=>[...a,i]),t(""))},v=a=>{const d=a.currentTarget.value;u(y=>y.includes(d)?y.filter(S=>S!==d):y)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[e.jsx(W,{id:"input-add-chip",label:"Ajouter un chip",value:i,onChange:c,onKeyDown:l}),e.jsx(P,{label:"Ajouter",onClick:r})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list","data-testid":"chips-list",children:p.map((a,d)=>e.jsx(h,{id:`chip-${d}-${a}`,label:a,selected:!1,disabled:s.disabled,type:"input",onClose:v},d+a))}),p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:p.map((a,d)=>e.jsx(h,{id:`chip-${d}-${a}`,label:a,selected:!1,disabled:s.disabled,type:"input",onClose:v,appearance:"neutral"},d+a))})]})]})}},T={tags:["!autodocs"],args:{...x.args,type:"input"},render:s=>{const[i,t]=b.useState(""),[p,u]=b.useState([]),c=a=>{t(a)},l=a=>{a.key===G&&(a.preventDefault(),r())},r=()=>{i&&!p.includes(i)&&(u(a=>[...a,i]),t(""))},v=a=>{const d=a.currentTarget.value;u(y=>y.includes(d)?y.filter(S=>S!==d):y)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[e.jsx(W,{id:"input-add-chip",label:"Ajouter un chip",value:i,onChange:c,onKeyDown:l}),e.jsx(P,{label:"Ajouter",onClick:r})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list","data-testid":"chips-list",children:p.map((a,d)=>e.jsx(h,{id:`chip-${d}-${a}`,label:a,selected:!1,disabled:s.disabled,type:"input",onClose:v},d+a))}),p.length>0&&e.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:p.map((a,d)=>e.jsx(h,{id:`chip-${d}-${a}`,label:a,selected:!1,disabled:s.disabled,type:"input",onClose:v,appearance:"neutral"},d+a))})]})]})},play:async({canvasElement:s})=>{const i=C(s),t=i.getByRole("textbox");await n.type(t,"New Chip"),await n.keyboard(g),await n.type(t,"Another Chip"),await n.keyboard(g);const p=i.getByTestId("chips-list").querySelectorAll("[role='option']");o(p).toHaveLength(2);const u=C(p[0]).getByRole("button");await n.click(u);const c=i.getByTestId("chips-list").querySelectorAll("[role='option']");o(c).toHaveLength(1),await n.type(t,"More Chip"),await n.keyboard(g);const l=i.getByTestId("chips-list").querySelectorAll("[role='option']");o(l).toHaveLength(2),l[0].focus(),await n.tab(),await n.keyboard(g),o(i.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(1),await n.type(t,"Last Chip"),await n.keyboard(g),o(i.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(2),i.getByTestId("chips-list").querySelectorAll("[role='option']")[1].focus(),await n.tab(),await n.keyboard(Y),o(i.getByTestId("chips-list").querySelectorAll("[role='option']")).toHaveLength(1)}};var A,w,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var H,j,R;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    id: "chip-disabled",
    label: "Disabled",
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const chip = within(canvasElement).getByRole("radio");
    expect(chip).toHaveAttribute("aria-disabled", "true");
  }
}`,...(R=(j=f.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var V,L,B;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(B=(L=E.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var D,N,K;k.parameters={...k.parameters,docs:{...(D=k.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(K=(N=k.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var _,M,O;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "input"
  },
  render: args => {
    const [inputValue, setInputValue] = useState("");
    const [chipsValue, setChipsValue] = useState<string[]>(["Chip 1", "Chip 2"]);
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
  }
}`,...(O=(M=x.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var F,q,$;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Input.args,
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
}`,...($=(q=T.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};const me=["Default","Disabled","SingleSelect","MultiSelect","Input","InputInteraction"];export{m as Default,f as Disabled,x as Input,T as InputInteraction,k as MultiSelect,E as SingleSelect,me as __namedExportsOrder,ge as default};
