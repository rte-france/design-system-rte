import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as v,a as q}from"./keyboard-test.constants-By8W48aj.js";import{S as H,E as S,B as _,D as L}from"./keyboard.constants-BverKK8B.js";import{f as W,w as T,u as i,e as c}from"./index-BfPN6pki.js";import{r as b,R as J}from"./index-G8LIXM5I.js";import{B as Q}from"./Button-CoCTt7OM.js";import{T as X}from"./TextInput-BRt-yOp8.js";import{u as Z}from"./useActiveKeyboard-DaOmFJe_.js";import{I as w}from"./Icon-DjEid3Hw.js";import{c as R}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CQk6fGHb.js";import"./BaseTextInput-ZtmVVyUW.js";import"./RequiredIndicator-DqQYxNvw.js";import"./Link-Cg70Z2zF.js";import"./IconButton-Cd1eiha_.js";const ee={single:"radio",multi:"checkbox",input:"option"},te="_chip_7scg0_1",d={chip:te,"chip-label":"_chip-label_7scg0_49","chip-icon-container":"_chip-icon-container_7scg0_70","chip-icon":"_chip-icon_7scg0_70","chip-icon--visible":"_chip-icon--visible_7scg0_90","chip-close-button":"_chip-close-button_7scg0_95","chip-close-button--icon":"_chip-close-button--icon_7scg0_124"},f=b.forwardRef(({id:l,label:n,selected:e=!1,onClick:p,disabled:u=!1,type:t="single",className:s="",compactSpacing:r=!1,onClose:o,...h},y)=>{const E=J.useRef(null),P=m=>{if(m.key===H||m.key===S)m.preventDefault(),p==null||p(m);else if((m.key===_||m.key===L)&&o){if(t!=="input")return;m.preventDefault(),E.current&&E.current.click()}},{onBlur:$,onKeyDown:z,onKeyUp:U}=Z({onKeyUp:P},{id:l,interactiveKeyCodes:[H,S,_,L]}),A=t==="single"||t==="multi";return a.jsxs("span",{id:l,ref:y,role:ee[t],className:R(d.chip,s),"data-selected":A&&e,"data-disabled":u,"data-compact-spacing":r,"data-type":t,onClick:p,tabIndex:0,onKeyDown:z,onKeyUp:U,onBlur:$,"aria-checked":A&&e,"aria-disabled":u,...h,children:[t==="multi"&&a.jsxs("span",{className:d["chip-icon-container"],children:[a.jsx("span",{className:R(d["chip-icon"],e?d["chip-icon--visible"]:""),"aria-hidden":!e,children:a.jsx(w,{name:"check-circle",appearance:"filled",size:16})}),a.jsx("span",{className:R(d["chip-icon"],e?"":d["chip-icon--visible"]),"aria-hidden":e,children:a.jsx(w,{name:"radio-button-empty",size:16})})]}),a.jsx("span",{className:d["chip-label"],"data-type":t,children:n}),t==="input"&&a.jsx("button",{id:l+"-delete-button",type:"button",className:d["chip-close-button"],onClick:o,disabled:u,"aria-label":`Supprimer ${n}`,value:n,ref:E,children:a.jsx(w,{className:d["chip-close-button--icon"],name:"close"})})]})});f.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"single"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const fe={title:"Composants/Chip/Chip",component:f,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:W()}},g={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},C={args:{...g.args},render:l=>{var t;const[n,e]=b.useState(null),p=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],u=s=>{const r=s.currentTarget.id;e(r===n?null:r)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup","data-testid":"test-chip-group",children:p.map(({id:s,label:r})=>a.jsx(f,{id:s,label:r,selected:n===s,onClick:u,type:"single",compactSpacing:l.compactSpacing,className:"chip"},s))}),a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip sélectionnée: ",((t=p.find(s=>s.id===n))==null?void 0:t.label)||"Aucune"]})]})},play:async({canvasElement:l})=>{const e=T(l).getByTestId("test-chip-group").querySelectorAll("[role='radio']");await i.click(e[0]),c(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),c(e[1]).toHaveAttribute("aria-checked","true"),c(e[0]).toHaveAttribute("aria-checked","false"),await i.click(e[1]),await i.tab(),c(e[2]).toHaveFocus(),await i.keyboard(v),c(e[2]).toHaveAttribute("aria-checked","true"),await i.keyboard(q),c(e[2]).toHaveAttribute("aria-checked","false")}},k={args:{...g.args},render:l=>{const[n,e]=b.useState([]),p=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],u=t=>{const s=t.currentTarget.id;e(r=>r.includes(s)?r.filter(o=>o!==s):[...r,s])};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:p.map(({id:t,label:s})=>a.jsx(f,{id:t,label:s,selected:n.includes(t),onClick:u,type:"multi",compactSpacing:l.compactSpacing},t))}),a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip(s) sélectionnée(s):"," ",p.filter(t=>n.includes(t.id)).map(t=>t.label).join(", ")]})]})},play:async({canvasElement:l})=>{const e=T(l).getAllByRole("checkbox");await i.click(e[0]),c(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),c(e[1]).toHaveAttribute("aria-checked","true"),c(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),c(e[1]).toHaveAttribute("aria-checked","false"),await i.tab(),c(e[2]).toHaveFocus(),await i.keyboard(v),c(e[2]).toHaveAttribute("aria-checked","true")}},x={args:{...g.args,type:"input"},render:()=>{const[l,n]=b.useState(""),[e,p]=b.useState([]),u=o=>{n(o)},t=o=>{o.key===S&&(o.preventDefault(),s())},s=()=>{l&&!e.includes(l)&&(p(o=>[...o,l]),n(""))},r=o=>{const h=o.currentTarget.value;p(y=>y.includes(h)?y.filter(E=>E!==h):y)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[a.jsx(X,{id:"input-add-chip",label:"Ajouter un chip",value:l,onChange:u,onKeyDown:t}),a.jsx(Q,{label:"Ajouter",onClick:s})]}),e.length>0&&a.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:e.map((o,h)=>a.jsx(f,{id:`chip-${h}-${o}`,label:o,selected:!1,disabled:!1,type:"input",onClose:r},h+o))})]})},play:async({canvasElement:l})=>{const n=T(l),e=n.getByRole("textbox");await i.type(e,"New Chip"),await i.keyboard(v),await i.type(e,"Another Chip"),await i.keyboard(v);const p=n.getAllByRole("option");c(p).toHaveLength(2);const u=T(p[0]).getByRole("button");await i.click(u);const t=n.getAllByRole("option");c(t).toHaveLength(1),await i.type(e,"More Chip"),await i.keyboard(v);const s=n.getAllByRole("option");c(s).toHaveLength(2),s[0].focus(),await i.tab(),await i.keyboard(v),c(n.getAllByRole("option")).toHaveLength(1),await i.type(e,"Last Chip"),await i.keyboard(v),c(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await i.tab(),await i.keyboard(q),c(n.getAllByRole("option")).toHaveLength(1)}};var B,I,K;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(K=(I=g.parameters)==null?void 0:I.docs)==null?void 0:K.source}}};var M,N,j;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
      }} role="radiogroup" data-testid="test-chip-group">
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
}`,...(j=(N=C.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var V,D,O;k.parameters={...k.parameters,docs:{...(V=k.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(O=(D=k.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var Y,G,F;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(F=(G=x.parameters)==null?void 0:G.docs)==null?void 0:F.source}}};const Ce=["Default","SingleSelect","MultiSelect","Input"];export{g as Default,x as Input,k as MultiSelect,C as SingleSelect,Ce as __namedExportsOrder,fe as default};
