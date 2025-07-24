import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as f,E as m,B as U,D as z}from"./keyboard.constants-C02Mqsdo.js";import{f as W,w as R,u as s,e as p}from"./index-DaW6VCyr.js";import{r as E,R as G}from"./index-G8LIXM5I.js";import{B as J}from"./Button-DaoBNyTm.js";import{T as Q}from"./TextInput-JDKKfvPr.js";import{I as A}from"./Icon-BNDpdXCt.js";import{c as H}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconButton-CyKWN_wm.js";import"./Link-Dk53zE71.js";const X=()=>{},Z=(c=X,n={})=>{const{id:e,interactiveKeyCodes:l}=n,[u,t]=E.useState(!1),i=E.useRef(l??[f,m]);return{onKeyDown:d=>{var h;(h=i.current)!=null&&h.includes(d.key)&&(!e||d.target.id===e)&&(d.preventDefault(),t(!0))},onKeyUp:d=>{var h;(h=i.current)!=null&&h.includes(d.key)&&(!e||d.target.id===e)&&(c(d),t(!1))},onBlur:()=>{t(!1)},isActiveKeyboard:u}},ee="_chip_556ax_3",v={chip:ee,"chip-label":"_chip-label_556ax_51","chip-icon-container":"_chip-icon-container_556ax_72","chip-icon":"_chip-icon_556ax_72","chip-icon--visible":"_chip-icon--visible_556ax_92","chip-icon--hidden":"_chip-icon--hidden_556ax_97","chip-close-button":"_chip-close-button_556ax_102","chip-close-button--icon":"_chip-close-button--icon_556ax_131"},C=E.forwardRef(({id:c,label:n,selected:e=!1,onClick:l,disabled:u=!1,type:t="single",className:i="",compactSpacing:r=!1,onClose:o,...y},d)=>{const h=G.useRef(null),O=b=>{if(b.key===f||b.key===m)b.preventDefault(),l==null||l(b);else if((b.key===U||b.key===z)&&o){if(t!=="input")return;b.preventDefault(),h.current&&h.current.click()}},{onBlur:Y,onKeyDown:q,onKeyUp:F}=Z(O,{id:c,interactiveKeyCodes:[f,m,"Backspace","Delete"]}),S=t==="single"||t==="multi",P={single:"radio",multi:"checkbox",input:"option"};return a.jsxs("span",{id:c,ref:d,role:P[t],className:H(v.chip,i),"data-selected":S&&e,"data-disabled":u,"data-compact-spacing":r,"data-type":t,onClick:l,tabIndex:0,onKeyDown:q,onKeyUp:F,onBlur:Y,"aria-checked":S&&e,"aria-disabled":u,...y,children:[t==="multi"&&a.jsxs("span",{className:v["chip-icon-container"],children:[a.jsx("span",{className:H(v["chip-icon"],e?v["chip-icon--visible"]:v["chip-icon--hidden"]),"aria-hidden":!e,children:a.jsx(A,{name:"check-circle",appearance:"filled",size:16})}),a.jsx("span",{className:H(v["chip-icon"],e?v["chip-icon--hidden"]:v["chip-icon--visible"]),"aria-hidden":e,children:a.jsx(A,{name:"radio-button-empty",size:16})})]}),a.jsx("span",{className:v["chip-label"],"data-type":t,children:n}),t==="input"&&a.jsx("button",{id:c+"-delete-button",type:"button",className:v["chip-close-button"],onClick:o,disabled:u,"aria-label":`Supprimer ${n}`,value:n,ref:h,children:a.jsx(A,{className:v["chip-close-button--icon"],name:"close"})})]})});C.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"single"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const he={title:"Chip",component:C,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:W()}},g={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},x={args:{...g.args},render:c=>{var t;const[n,e]=E.useState(null),l=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],u=i=>{const r=i.currentTarget.id;e(r===n?null:r)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup",children:l.map(({id:i,label:r})=>a.jsx(C,{id:i,label:r,selected:n===i,onClick:u,type:"single",compactSpacing:c.compactSpacing,className:"chip"},i))}),a.jsxs("p",{children:["Chip sélectionnée: ",((t=l.find(i=>i.id===n))==null?void 0:t.label)||"Aucune"]})]})},play:async({canvasElement:c})=>{const e=R(c).getAllByRole("radio");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","false"),await s.click(e[1]),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${m}}`),p(e[2]).toHaveAttribute("aria-checked","true"),await s.keyboard(`{${f}}`),p(e[2]).toHaveAttribute("aria-checked","false")}},k={args:{...g.args},render:c=>{const[n,e]=E.useState([]),l=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],u=t=>{const i=t.currentTarget.id;e(r=>r.includes(i)?r.filter(o=>o!==i):[...r,i])};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:l.map(({id:t,label:i})=>a.jsx(C,{id:t,label:i,selected:n.includes(t),onClick:u,type:"multi",compactSpacing:c.compactSpacing},t))}),a.jsxs("p",{children:["Chip(s) sélectionnée(s):"," ",l.filter(t=>n.includes(t.id)).map(t=>t.label).join(", ")]})]})},play:async({canvasElement:c})=>{const e=R(c).getAllByRole("checkbox");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","false"),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${m}}`),p(e[2]).toHaveAttribute("aria-checked","true")}},w={args:{...g.args,type:"input"},render:()=>{const[c,n]=E.useState(""),[e,l]=E.useState([]),u=o=>{n(o)},t=o=>{o.key===m&&(o.preventDefault(),i())},i=()=>{c&&!e.includes(c)&&(l(o=>[...o,c]),n(""))},r=o=>{const y=o.currentTarget.value;l(d=>d.includes(y)?d.filter(h=>h!==y):d)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[a.jsx(Q,{id:"input-add-chip",label:"Ajouter un chip",value:c,onChange:u,onKeyDown:t}),a.jsx(J,{label:"Ajouter",onClick:i})]}),e.length>0&&a.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:e.map((o,y)=>a.jsx(C,{id:`chip-${y}-${o}`,label:o,selected:!1,disabled:!1,type:"input",onClose:r},y+o))})]})},play:async({canvasElement:c})=>{const n=R(c),e=n.getByRole("textbox");await s.type(e,"New Chip"),await s.keyboard(`{${m}}`),await s.type(e,"Another Chip"),await s.keyboard(`{${m}}`);const l=n.getAllByRole("option");p(l).toHaveLength(2);const u=R(l[0]).getByRole("button");await s.click(u);const t=n.getAllByRole("option");p(t).toHaveLength(1),await s.type(e,"More Chip"),await s.keyboard(`{${m}}`);const i=n.getAllByRole("option");p(i).toHaveLength(2),i[0].focus(),await s.tab(),await s.keyboard(`{${m}}`),p(n.getAllByRole("option")).toHaveLength(1),await s.type(e,"Last Chip"),await s.keyboard(`{${m}}`),p(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await s.tab(),await s.keyboard(`{${f}}`),p(n.getAllByRole("option")).toHaveLength(1)}};var T,B,L;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var K,_,M;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(_=x.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var j,V,I;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(V=k.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var D,N,$;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...($=(N=w.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};const ve=["Default","SingleSelect","MultiSelect","Input"];export{g as Default,w as Input,k as MultiSelect,x as SingleSelect,ve as __namedExportsOrder,he as default};
