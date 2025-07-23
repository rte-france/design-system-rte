import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{E as m,S as $}from"./keyboard.constants-DfsyBqty.js";import{f as Y,w as k,u as s,e as p}from"./index-DaW6VCyr.js";import{r as b}from"./index-G8LIXM5I.js";import{B as q}from"./Button-DaoBNyTm.js";import{I as w}from"./Icon-BNDpdXCt.js";import{c as R}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const F="Space",P="Enter",U=()=>{},z=(l=U,n={})=>{const{id:e,interactiveKeyCodes:o}=n,[r,t]=b.useState(!1),c=b.useRef(o??[F,P]);return{onKeyDown:d=>{var v;(v=c.current)!=null&&v.includes(d.code)&&(!e||d.target.id===e)&&(d.preventDefault(),t(!0))},onKeyUp:d=>{var v;(v=c.current)!=null&&v.includes(d.code)&&(!e||d.target.id===e)&&(l(d),t(!1))},onBlur:()=>{t(!1)},isActiveKeyboard:r}},W="_chip_556ax_3",u={chip:W,"chip-label":"_chip-label_556ax_51","chip-icon-container":"_chip-icon-container_556ax_72","chip-icon":"_chip-icon_556ax_72","chip-icon--visible":"_chip-icon--visible_556ax_92","chip-icon--hidden":"_chip-icon--hidden_556ax_97","chip-close-button":"_chip-close-button_556ax_102","chip-close-button--icon":"_chip-close-button--icon_556ax_131"},E=({id:l,label:n,selected:e=!1,onClick:o,disabled:r=!1,type:t="single",className:c="",compactSpacing:i=!1,onClose:h,...y})=>{const{onBlur:d,onKeyDown:v,onKeyUp:O}=z(D=>o==null?void 0:o(D),{id:l}),H=t==="single"||t==="multi";return a.jsxs("span",{id:l,role:t==="single"?"radio":t==="multi"?"checkbox":"option",className:R(u.chip,...c),"data-selected":H&&e,"data-disabled":r,"data-compact-spacing":i,"data-type":t,onClick:o,tabIndex:0,onKeyDown:v,onKeyUp:O,onBlur:d,"aria-checked":H&&e,"aria-disabled":r,...y,children:[t==="multi"&&a.jsxs("span",{className:u["chip-icon-container"],children:[a.jsx("span",{className:R(u["chip-icon"],e?u["chip-icon--visible"]:u["chip-icon--hidden"]),"aria-hidden":!e,children:a.jsx(w,{name:"check-circle",appearance:"filled",size:16})}),a.jsx("span",{className:R(u["chip-icon"],e?u["chip-icon--hidden"]:u["chip-icon--visible"]),"aria-hidden":e,children:a.jsx(w,{name:"radio-button-empty",size:16})})]}),a.jsx("span",{className:u["chip-label"],"data-type":t,children:n}),t==="input"&&a.jsx("button",{type:"button",className:u["chip-close-button"],onClick:h,disabled:r,"aria-label":`Supprimer ${n}`,value:n,children:a.jsx(w,{className:u["chip-close-button--icon"],name:"close"})})]})};E.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"single"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ie={title:"Chip",component:E,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:Y()}},g={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},f={args:{...g.args},render:l=>{var t;const[n,e]=b.useState(null),o=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],r=c=>{const i=c.currentTarget.id;e(i===n?null:i)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup",children:o.map(({id:c,label:i})=>a.jsx(E,{id:c,label:i,selected:n===c,onClick:r,type:"single",compactSpacing:l.compactSpacing,className:"chip"},c))}),a.jsxs("p",{children:["Chip sélectionnée: ",((t=o.find(c=>c.id===n))==null?void 0:t.label)||"Aucune"]})]})},play:async({canvasElement:l})=>{const e=k(l).getAllByRole("radio");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","false"),await s.click(e[1]),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${m}}`),p(e[2]).toHaveAttribute("aria-checked","true"),await s.keyboard(`{${$}}`),p(e[2]).toHaveAttribute("aria-checked","false")}},C={args:{...g.args},render:l=>{const[n,e]=b.useState([]),o=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],r=t=>{const c=t.currentTarget.id;e(i=>i.includes(c)?i.filter(h=>h!==c):[...i,c])};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:o.map(({id:t,label:c})=>a.jsx(E,{id:t,label:c,selected:n.includes(t),onClick:r,type:"multi",compactSpacing:l.compactSpacing},t))}),a.jsxs("p",{children:["Chip(s) sélectionnée(s):"," ",o.filter(t=>n.includes(t.id)).map(t=>t.label).join(", ")]})]})},play:async({canvasElement:l})=>{const e=k(l).getAllByRole("checkbox");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","false"),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${m}}`),p(e[2]).toHaveAttribute("aria-checked","true")}},x={args:{...g.args,type:"input"},render:()=>{const[l,n]=b.useState(""),[e,o]=b.useState([]),r=i=>{n(i.target.value)},t=()=>{l&&!e.includes(l)&&(o(i=>[...i,l]),n(""))},c=i=>{const h=i.currentTarget.value;o(y=>y.includes(h)?y.filter(d=>d!==h):y)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsx("input",{type:"text",name:"chip-input",value:l,onChange:r,onKeyDown:i=>{i.key==="Enter"&&t()}}),a.jsx(q,{label:"Ajouter",size:"s",onClick:t})]}),e.length>0&&a.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox",children:e.map((i,h)=>a.jsx(E,{id:`chip-${h}-${i}`,label:i,selected:!1,disabled:!1,type:"input",onClose:c},h+i))})]})},play:async({canvasElement:l})=>{const n=k(l),e=n.getByRole("textbox");await s.type(e,"New Chip"),await s.keyboard(`{${m}}`),await s.type(e,"Another Chip"),await s.keyboard(`{${m}}`);const o=n.getAllByRole("option");p(o).toHaveLength(2);const r=k(o[0]).getByRole("button");await s.click(r);const t=n.getAllByRole("option");p(t).toHaveLength(1),await s.type(e,"More Chip"),await s.keyboard(`{${m}}`);const c=n.getAllByRole("option");p(c).toHaveLength(2),c[0].focus(),await s.tab(),await s.keyboard(`{${m}}`),p(n.getAllByRole("option")).toHaveLength(1),await s.type(e,"Last Chip"),await s.keyboard(`{${m}}`),p(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await s.tab(),await s.keyboard(`{${$}}`),p(n.getAllByRole("option")).toHaveLength(1)}};var A,S,T;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(T=(S=g.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var L,B,_;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
        <p>Chip sélectionnée: {options.find(option => option.id === selectedChip)?.label || "Aucune"}</p>
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
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
    await userEvent.keyboard(\`{\${SPACE_KEY}}\`);
    expect(chips[2]).toHaveAttribute("aria-checked", "false");
  }
}`,...(_=(B=f.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var M,K,j;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <p>
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
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    expect(chips[2]).toHaveAttribute("aria-checked", "true");
  }
}`,...(j=(K=C.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var V,N,I;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "input"
  },
  render: () => {
    const [inputValue, setInputValue] = useState("");
    const [chipsValue, setChipsValue] = useState<string[]>([]);
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
    const handleAddChip = () => {
      if (inputValue && !chipsValue.includes(inputValue)) {
        setChipsValue(prev => [...prev, inputValue]);
        setInputValue("");
      }
    };
    const handleChipClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
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
        gap: "10px"
      }}>
          <input type="text" name="chip-input" value={inputValue} onChange={handleOnChange} onKeyDown={e => {
          if (e.key === "Enter") handleAddChip();
        }} />
          <Button label="Ajouter" size="s" onClick={handleAddChip}></Button>
        </div>
        {chipsValue.length > 0 && <div style={{
        display: "flex",
        gap: "10px"
      }} role="listbox">
            {chipsValue.map((value, index) => <Chip id={\`chip-\${index}-\${value}\`} key={index + value} label={value} selected={false} disabled={false} type="input" onClose={handleChipClick} />)}
          </div>}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await userEvent.type(input, "New Chip");
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    await userEvent.type(input, "Another Chip");
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    const allChipsList = canvas.getAllByRole("option");
    expect(allChipsList).toHaveLength(2);
    const closeButton = within(allChipsList[0]).getByRole("button");
    await userEvent.click(closeButton);
    const remainingChips = canvas.getAllByRole("option");
    expect(remainingChips).toHaveLength(1);
    await userEvent.type(input, "More Chip");
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    const newRemainingChips = canvas.getAllByRole("option");
    expect(newRemainingChips).toHaveLength(2);
    newRemainingChips[0].focus();
    await userEvent.tab();
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    expect(canvas.getAllByRole("option")).toHaveLength(1);
    await userEvent.type(input, "Last Chip");
    await userEvent.keyboard(\`{\${ENTER_KEY}}\`);
    expect(canvas.getAllByRole("option")).toHaveLength(2);
    const lastChip = canvas.getAllByRole("option")[1];
    lastChip.focus();
    await userEvent.tab();
    await userEvent.keyboard(\`{\${SPACE_KEY}}\`);
    expect(canvas.getAllByRole("option")).toHaveLength(1);
  }
}`,...(I=(N=x.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const se=["Default","SingleSelect","MultiSelect","Input"];export{g as Default,x as Input,C as MultiSelect,f as SingleSelect,se as __namedExportsOrder,ie as default};
