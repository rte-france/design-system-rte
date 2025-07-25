import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as f,E as v,B as T,a as L}from"./keyboard.constants-zpE_PHKT.js";import{f as U,w as R,u as s,e as p}from"./index-DaW6VCyr.js";import{r as E,R as W}from"./index-G8LIXM5I.js";import{B as G}from"./Button-DaoBNyTm.js";import{T as J}from"./TextInput-JDKKfvPr.js";import{I as A}from"./Icon-BNDpdXCt.js";import{c as H}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconButton-CyKWN_wm.js";import"./Link-Dk53zE71.js";const Q={single:"radio",multi:"checkbox",input:"option"},X=()=>{},Z=(l=X,n={})=>{const{id:e,interactiveKeyCodes:c}=n,[u,t]=E.useState(!1),i=E.useRef(c??[f,v]);return{onKeyDown:d=>{var h;(h=i.current)!=null&&h.includes(d.key)&&(!e||d.target.id===e)&&(d.preventDefault(),t(!0))},onKeyUp:d=>{var h;(h=i.current)!=null&&h.includes(d.key)&&(!e||d.target.id===e)&&(l(d),t(!1))},onBlur:()=>{t(!1)},isActiveKeyboard:u}},ee="_chip_zt6ot_3",m={chip:ee,"chip-label":"_chip-label_zt6ot_51","chip-icon-container":"_chip-icon-container_zt6ot_72","chip-icon":"_chip-icon_zt6ot_72","chip-icon--visible":"_chip-icon--visible_zt6ot_92","chip-close-button":"_chip-close-button_zt6ot_97","chip-close-button--icon":"_chip-close-button--icon_zt6ot_126"},C=E.forwardRef(({id:l,label:n,selected:e=!1,onClick:c,disabled:u=!1,type:t="single",className:i="",compactSpacing:r=!1,onClose:o,...y},d)=>{const h=W.useRef(null),z=b=>{if(b.key===f||b.key===v)b.preventDefault(),c==null||c(b);else if((b.key===T||b.key===L)&&o){if(t!=="input")return;b.preventDefault(),h.current&&h.current.click()}},{onBlur:q,onKeyDown:P,onKeyUp:F}=Z(z,{id:l,interactiveKeyCodes:[f,v,T,L]}),S=t==="single"||t==="multi";return a.jsxs("span",{id:l,ref:d,role:Q[t],className:H(m.chip,i),"data-selected":S&&e,"data-disabled":u,"data-compact-spacing":r,"data-type":t,onClick:c,tabIndex:0,onKeyDown:P,onKeyUp:F,onBlur:q,"aria-checked":S&&e,"aria-disabled":u,...y,children:[t==="multi"&&a.jsxs("span",{className:m["chip-icon-container"],children:[a.jsx("span",{className:H(m["chip-icon"],e?m["chip-icon--visible"]:""),"aria-hidden":!e,children:a.jsx(A,{name:"check-circle",appearance:"filled",size:16})}),a.jsx("span",{className:H(m["chip-icon"],e?"":m["chip-icon--visible"]),"aria-hidden":e,children:a.jsx(A,{name:"radio-button-empty",size:16})})]}),a.jsx("span",{className:m["chip-label"],"data-type":t,children:n}),t==="input"&&a.jsx("button",{id:l+"-delete-button",type:"button",className:m["chip-close-button"],onClick:o,disabled:u,"aria-label":`Supprimer ${n}`,value:n,ref:h,children:a.jsx(A,{className:m["chip-close-button--icon"],name:"close"})})]})});C.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"single"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const he={title:"Chip",component:C,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:U()}},g={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},k={args:{...g.args},render:l=>{var t;const[n,e]=E.useState(null),c=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],u=i=>{const r=i.currentTarget.id;e(r===n?null:r)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup",children:c.map(({id:i,label:r})=>a.jsx(C,{id:i,label:r,selected:n===i,onClick:u,type:"single",compactSpacing:l.compactSpacing,className:"chip"},i))}),a.jsxs("p",{children:["Chip sélectionnée: ",((t=c.find(i=>i.id===n))==null?void 0:t.label)||"Aucune"]})]})},play:async({canvasElement:l})=>{const e=R(l).getAllByRole("radio");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","false"),await s.click(e[1]),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${v}}`),p(e[2]).toHaveAttribute("aria-checked","true"),await s.keyboard(`{${f}}`),p(e[2]).toHaveAttribute("aria-checked","false")}},x={args:{...g.args},render:l=>{const[n,e]=E.useState([]),c=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],u=t=>{const i=t.currentTarget.id;e(r=>r.includes(i)?r.filter(o=>o!==i):[...r,i])};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:c.map(({id:t,label:i})=>a.jsx(C,{id:t,label:i,selected:n.includes(t),onClick:u,type:"multi",compactSpacing:l.compactSpacing},t))}),a.jsxs("p",{children:["Chip(s) sélectionnée(s):"," ",c.filter(t=>n.includes(t.id)).map(t=>t.label).join(", ")]})]})},play:async({canvasElement:l})=>{const e=R(l).getAllByRole("checkbox");await s.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","true"),await s.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","false"),await s.tab(),p(e[2]).toHaveFocus(),await s.keyboard(`{${v}}`),p(e[2]).toHaveAttribute("aria-checked","true")}},w={args:{...g.args,type:"input"},render:()=>{const[l,n]=E.useState(""),[e,c]=E.useState([]),u=o=>{n(o)},t=o=>{o.key===v&&(o.preventDefault(),i())},i=()=>{l&&!e.includes(l)&&(c(o=>[...o,l]),n(""))},r=o=>{const y=o.currentTarget.value;c(d=>d.includes(y)?d.filter(h=>h!==y):d)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[a.jsx(J,{id:"input-add-chip",label:"Ajouter un chip",value:l,onChange:u,onKeyDown:t}),a.jsx(G,{label:"Ajouter",onClick:i})]}),e.length>0&&a.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:e.map((o,y)=>a.jsx(C,{id:`chip-${y}-${o}`,label:o,selected:!1,disabled:!1,type:"input",onClose:r},y+o))})]})},play:async({canvasElement:l})=>{const n=R(l),e=n.getByRole("textbox");await s.type(e,"New Chip"),await s.keyboard(`{${v}}`),await s.type(e,"Another Chip"),await s.keyboard(`{${v}}`);const c=n.getAllByRole("option");p(c).toHaveLength(2);const u=R(c[0]).getByRole("button");await s.click(u);const t=n.getAllByRole("option");p(t).toHaveLength(1),await s.type(e,"More Chip"),await s.keyboard(`{${v}}`);const i=n.getAllByRole("option");p(i).toHaveLength(2),i[0].focus(),await s.tab(),await s.keyboard(`{${v}}`),p(n.getAllByRole("option")).toHaveLength(1),await s.type(e,"Last Chip"),await s.keyboard(`{${v}}`),p(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await s.tab(),await s.keyboard(`{${f}}`),p(n.getAllByRole("option")).toHaveLength(1)}};var B,K,_;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(_=(K=g.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var M,j,V;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(V=(j=k.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var I,N,$;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...($=(N=x.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var D,O,Y;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(Y=(O=w.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};const ve=["Default","SingleSelect","MultiSelect","Input"];export{g as Default,w as Input,x as MultiSelect,k as SingleSelect,ve as __namedExportsOrder,he as default};
