import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as E,a as q}from"./keyboard-test.constants-BNc7pJRD.js";import{S as _,E as R,B,a as L}from"./keyboard.constants-zpE_PHKT.js";import{f as J,w as T,u as i,e as p}from"./index-DaW6VCyr.js";import{r as f,R as Q}from"./index-G8LIXM5I.js";import{B as X}from"./Button-DaoBNyTm.js";import{T as Z}from"./TextInput-DxlGaYtn.js";import{I as S}from"./Icon-BNDpdXCt.js";import{c as A}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./IconButton-CyKWN_wm.js";import"./Link-UtE0GNJN.js";const ee={single:"radio",multi:"checkbox",input:"option"},H=()=>{},te=(l={},n={})=>{const{id:e,interactiveKeyCodes:o}=n,{onKeyDown:d=H,onKeyUp:t=H,onBlur:s=H}=l,r=f.useRef(o??[_,R]);return{onKeyDown:u=>{var m;(m=r.current)!=null&&m.includes(u.key)&&(!e||u.target.id===e)&&(u.preventDefault(),d(u))},onKeyUp:u=>{var m;(m=r.current)!=null&&m.includes(u.key)&&(!e||u.target.id===e)&&t(u)},onBlur:()=>{s()}}},ne="_chip_zt6ot_3",h={chip:ne,"chip-label":"_chip-label_zt6ot_51","chip-icon-container":"_chip-icon-container_zt6ot_72","chip-icon":"_chip-icon_zt6ot_72","chip-icon--visible":"_chip-icon--visible_zt6ot_92","chip-close-button":"_chip-close-button_zt6ot_97","chip-close-button--icon":"_chip-close-button--icon_zt6ot_126"},C=f.forwardRef(({id:l,label:n,selected:e=!1,onClick:o,disabled:d=!1,type:t="single",className:s="",compactSpacing:r=!1,onClose:c,...v},b)=>{const u=Q.useRef(null),m=y=>{if(y.key===_||y.key===R)y.preventDefault(),o==null||o(y);else if((y.key===B||y.key===L)&&c){if(t!=="input")return;y.preventDefault(),u.current&&u.current.click()}},{onBlur:U,onKeyDown:$,onKeyUp:W}=te({onKeyUp:m},{id:l,interactiveKeyCodes:[_,R,B,L]}),K=t==="single"||t==="multi";return a.jsxs("span",{id:l,ref:b,role:ee[t],className:A(h.chip,s),"data-selected":K&&e,"data-disabled":d,"data-compact-spacing":r,"data-type":t,onClick:o,tabIndex:0,onKeyDown:$,onKeyUp:W,onBlur:U,"aria-checked":K&&e,"aria-disabled":d,...v,children:[t==="multi"&&a.jsxs("span",{className:h["chip-icon-container"],children:[a.jsx("span",{className:A(h["chip-icon"],e?h["chip-icon--visible"]:""),"aria-hidden":!e,children:a.jsx(S,{name:"check-circle",appearance:"filled",size:16})}),a.jsx("span",{className:A(h["chip-icon"],e?"":h["chip-icon--visible"]),"aria-hidden":e,children:a.jsx(S,{name:"radio-button-empty",size:16})})]}),a.jsx("span",{className:h["chip-label"],"data-type":t,children:n}),t==="input"&&a.jsx("button",{id:l+"-delete-button",type:"button",className:h["chip-close-button"],onClick:c,disabled:d,"aria-label":`Supprimer ${n}`,value:n,ref:u,children:a.jsx(S,{className:h["chip-close-button--icon"],name:"close"})})]})});C.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLSpanElement> | React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},selected:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"single"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const ye={title:"Chip",component:C,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label of the chip",defaultValue:"Chip"},disabled:{control:"boolean"},compactSpacing:{control:"boolean",description:"Whether the chip should be compact"},type:{control:"select",options:["single","multi","input"],description:"Type of the chip",defaultValue:"single"}},args:{onClick:J()}},g={args:{id:"chip-1",label:"Label",selected:!1,disabled:!1,compactSpacing:!1}},k={args:{...g.args},render:l=>{var t;const[n,e]=f.useState(null),o=[{id:"all",label:"All"},{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"}],d=s=>{const r=s.currentTarget.id;e(r===n?null:r)};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"radiogroup",children:o.map(({id:s,label:r})=>a.jsx(C,{id:s,label:r,selected:n===s,onClick:d,type:"single",compactSpacing:l.compactSpacing,className:"chip"},s))}),a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip sélectionnée: ",((t=o.find(s=>s.id===n))==null?void 0:t.label)||"Aucune"]})]})},play:async({canvasElement:l})=>{const e=T(l).getAllByRole("radio");await i.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","false"),await i.click(e[1]),await i.tab(),p(e[2]).toHaveFocus(),await i.keyboard(E),p(e[2]).toHaveAttribute("aria-checked","true"),await i.keyboard(q),p(e[2]).toHaveAttribute("aria-checked","false")}},x={args:{...g.args},render:l=>{const[n,e]=f.useState([]),o=[{id:"option-1",label:"Option 1"},{id:"option-2",label:"Option 2"},{id:"option-3",label:"Option 3"}],d=t=>{const s=t.currentTarget.id;e(r=>r.includes(s)?r.filter(c=>c!==s):[...r,s])};return a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"flex",gap:"10px"},role:"group",children:o.map(({id:t,label:s})=>a.jsx(C,{id:t,label:s,selected:n.includes(t),onClick:d,type:"multi",compactSpacing:l.compactSpacing},t))}),a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Chip(s) sélectionnée(s):"," ",o.filter(t=>n.includes(t.id)).map(t=>t.label).join(", ")]})]})},play:async({canvasElement:l})=>{const e=T(l).getAllByRole("checkbox");await i.click(e[0]),p(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","true"),p(e[0]).toHaveAttribute("aria-checked","true"),await i.click(e[1]),p(e[1]).toHaveAttribute("aria-checked","false"),await i.tab(),p(e[2]).toHaveFocus(),await i.keyboard(E),p(e[2]).toHaveAttribute("aria-checked","true")}},w={args:{...g.args,type:"input"},render:()=>{const[l,n]=f.useState(""),[e,o]=f.useState([]),d=c=>{n(c)},t=c=>{c.key===R&&(c.preventDefault(),s())},s=()=>{l&&!e.includes(l)&&(o(c=>[...c,l]),n(""))},r=c=>{const v=c.currentTarget.value;o(b=>b.includes(v)?b.filter(u=>u!==v):b)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"end"},children:[a.jsx(Z,{id:"input-add-chip",label:"Ajouter un chip",value:l,onChange:d,onKeyDown:t}),a.jsx(X,{label:"Ajouter",onClick:s})]}),e.length>0&&a.jsx("div",{style:{display:"flex",gap:"10px"},role:"listbox","aria-label":"Chips list",children:e.map((c,v)=>a.jsx(C,{id:`chip-${v}-${c}`,label:c,selected:!1,disabled:!1,type:"input",onClose:r},v+c))})]})},play:async({canvasElement:l})=>{const n=T(l),e=n.getByRole("textbox");await i.type(e,"New Chip"),await i.keyboard(E),await i.type(e,"Another Chip"),await i.keyboard(E);const o=n.getAllByRole("option");p(o).toHaveLength(2);const d=T(o[0]).getByRole("button");await i.click(d);const t=n.getAllByRole("option");p(t).toHaveLength(1),await i.type(e,"More Chip"),await i.keyboard(E);const s=n.getAllByRole("option");p(s).toHaveLength(2),s[0].focus(),await i.tab(),await i.keyboard(E),p(n.getAllByRole("option")).toHaveLength(1),await i.type(e,"Last Chip"),await i.keyboard(E),p(n.getAllByRole("option")).toHaveLength(2),n.getAllByRole("option")[1].focus(),await i.tab(),await i.keyboard(q),p(n.getAllByRole("option")).toHaveLength(1)}};var M,I,N;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "chip-1",
    label: "Label",
    selected: false,
    disabled: false,
    compactSpacing: false
  }
}`,...(N=(I=g.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var j,V,D;k.parameters={...k.parameters,docs:{...(j=k.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(D=(V=k.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var O,Y,G;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var F,z,P;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(P=(z=w.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};const Ee=["Default","SingleSelect","MultiSelect","Input"];export{g as Default,w as Input,x as MultiSelect,k as SingleSelect,Ee as __namedExportsOrder,ye as default};
