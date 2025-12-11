import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{b as ne,T as J}from"./keyboard-test.constants-By8W48aj.js";import{w as Q,u as g,e as y,a as S}from"./index-DCXJbAaW.js";import{r as n}from"./index-G8LIXM5I.js";import{D as R,a as D}from"./DropdownItem-B6CHbB8i.js";import{E as oe}from"./keyboard.constants-BverKK8B.js";import{I as ae}from"./IconButton-CYFOPNzz.js";import{B as re}from"./BaseTextInput-DuhcN6JD.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./Link-DbCKFFRz.js";const T=10,se="8px",ie="44px",le="24px",O="8px",ce={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},pe="_searchbarContainer_1we86_3",de="_textInputWrapper_1we86_9",ue="_searchButton_1we86_21",W={searchbarContainer:pe,textInputWrapper:de,searchButton:ue};function fe(e,s){const t={};return e==="primary"?(t.borderRight="none",t.borderRadius=`${O} 0 0 ${O}`,s||(t.paddingLeft=se)):e==="secondary"&&(t.borderRadius=O),t}function he(e){return{width:ie,borderRadius:`0 ${O} ${O} 0`,height:e?le:void 0}}const b=n.forwardRef(({onSearch:e,onChange:s,onClear:t,id:i,label:f="Rechercher",disabled:o=!1,showResetButton:r=!0,appearance:p="primary",compactSpacing:h,value:c,assistiveText:w,style:m,...a},l)=>{const d=ce[p],V=n.useCallback(B=>{s==null||s(B)},[s]),X=n.useCallback(()=>{e==null||e(c)},[e,c]),F=n.useCallback(B=>{B.key===oe&&(e==null||e(c))},[e]),_=n.useCallback(()=>{s==null||s(""),t==null||t()},[s,t]),Z=n.useMemo(()=>({disabled:o,value:c,onChange:V,onKeyUp:e?F:void 0,showRightIcon:r,rightIconAction:"clean",onRightIconClick:_,assistiveTextLabel:w,compactSpacing:h,placeholder:f,leftIcon:d.showLeftIcon?"search":void 0,...a}),[o,c,V,e,F,r,_,w,h,f,d.showLeftIcon]),ee=n.useMemo(()=>({...fe(p,d.showLeftIcon),...m??{}}),[p,d.showLeftIcon,m]),te=n.useMemo(()=>he(h),[h]);return u.jsx("div",{className:W.searchbarContainer,role:"search","data-appearance":p,children:u.jsxs("div",{className:W.textInputWrapper,"data-disabled":o,children:[u.jsx(re,{id:i??"",...Z,style:ee,ref:l}),d.showSearchButton&&u.jsx(ae,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:X,disabled:o,"aria-label":f,className:W.searchButton,compactSpacing:h,style:te})]})})});b.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const Le={title:"Composants/Searchbar",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},v={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},C={render:e=>{const s=["option1","option2","option3"],[t,i]=n.useState(!1),[f,o]=n.useState(""),r=n.useRef(null),[p,h]=n.useState(void 0);n.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),n.useEffect(()=>{var d;function a(){s.length>0&&!t&&i(!0)}const l=(d=r.current)==null?void 0:d.querySelector("input");return l==null||l.addEventListener("focus",a),()=>{l==null||l.removeEventListener("focus",a)}},[s.length]);function c(a){o(a??""),s.length>0&&i(!0)}function w(a){console.log("Selected option:",a),o(a),i(!1)}function m(){i(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{...e,value:f,onChange:c,assistiveText:e.assistiveText}),isOpen:t,onClose:m,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:p?{width:p}:void 0,children:s.map(a=>u.jsx(D,{label:a,onClick:()=>w(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},E={render:e=>{const s=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),c=n.useMemo(()=>!t||t.length<3?[]:s.filter(a=>a.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),n.useEffect(()=>{o(c.length>0)},[c.length]);function w(a){i(a??"")}function m(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-filtered",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,assistiveText:e.assistiveText,autoComplete:e.autoComplete}),isOpen:f,onClose:m,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:p?{width:p}:void 0,children:c.map(a=>u.jsx(D,{label:a,onClick:()=>{i(a),o(!1)}},a))})})},args:{...v.args,compactSpacing:!1,appearance:"primary"}},x={render:e=>{const s=["Apple","Apple2"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),c=n.useMemo(()=>!t||t.length<3?[]:s.filter(l=>l.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const l=r.current.offsetWidth;h(l)}},[]),n.useEffect(()=>{o(c.length>0)},[c.length]);function w(l){console.log(l),i(l??"")}function m(l){console.log("Selected option:",l),i(l),o(!1)}function a(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-navigation",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:e.autoComplete}),isOpen:f,onClose:a,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:p?{width:p}:void 0,children:c.map(l=>u.jsx(D,{label:l,onClick:()=>m(l)},l))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:e})=>{var r;const t=Q(e).getByRole("textbox");await g.click(t),y(t).toHaveFocus(),await g.type(t,"app"),await S(()=>{const p=document.getElementById("overlay-root"),h=p==null?void 0:p.querySelector("[data-dropdown-id]");y(h).toBeInTheDocument()}),await g.tab();const i=document.getElementById("overlay-root"),f=i==null?void 0:i.querySelector("[data-dropdown-id]"),o=(r=f==null?void 0:f.querySelector("ul"))==null?void 0:r.querySelectorAll("li");await S(()=>{y(o==null?void 0:o[0]).toHaveFocus()}),await g.keyboard(ne),y(o==null?void 0:o[1]).toHaveFocus(),await g.keyboard(J),await S(()=>{y(t.value).toBe("Apple2")})}},I={render:e=>{const s=["Apple","Apple2"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),c=n.useMemo(()=>!t||t.length<3?[]:s.filter(d=>d.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const d=r.current.offsetWidth;h(d)}},[]),n.useEffect(()=>{o(c.length>0)},[c.length]);function w(d){i(d??"")}function m(d){i(d),o(!1)}function a(d){console.log("Searched content:",d)}function l(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-search",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:e.autoComplete}),isOpen:f,onClose:l,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:p?{width:p}:void 0,children:c.map(d=>u.jsx(D,{label:d,onClick:()=>m(d)},d))})})},args:{...v.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:e,args:s})=>{var h;const t=Q(e),i=t.getByRole("textbox");await g.click(i),y(i).toHaveFocus(),await g.type(i,"app"),await S(()=>{const c=document.getElementById("overlay-root"),w=c==null?void 0:c.querySelector("[data-dropdown-id]");y(w).toBeInTheDocument()}),await g.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),r=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await S(()=>{y(r==null?void 0:r[0]).toHaveFocus()}),await g.keyboard(J),await S(()=>{y(i.value).toBe("Apple")});const p=t.getByRole("button",{name:s.label});await g.click(p)}};var A,k,L;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Texte assistif",
    label: "Rechercher",
    value: "",
    disabled: false,
    autoComplete: "off"
  }
}`,...(L=(k=v.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var N,q,H;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => {
    const options = ["option1", "option2", "option3"];
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);
    useEffect(() => {
      function handleFocus() {
        if (options.length > 0 && !isOpen) {
          setIsOpen(true);
        }
      }
      const input = wrapperRef.current?.querySelector("input");
      input?.addEventListener("focus", handleFocus);
      return () => {
        input?.removeEventListener("focus", handleFocus);
      };
    }, [options.length]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
      if (options.length > 0) {
        setIsOpen(true);
      }
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsOpen(false);
    }
    function handleDropdownClose() {
      setIsOpen(false);
    }
    return <div ref={wrapperRef} style={{
      width: "fit-content"
    }}>
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar {...args} value={searchValue} onChange={handleChange} assistiveText={args.assistiveText} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
        width: dropdownWidth
      } : undefined}>
          {options.map(option => <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />)}
        </Dropdown>
      </div>;
  },
  args: {
    id: "searchbar-with-dropdown",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Select a filter option before typing",
    value: "",
    disabled: false,
    autoComplete: "off"
  }
}`,...(H=(q=C.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var j,M,K;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2", "Banana", "Banana2", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);
    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleDropdownClose() {
      setIsOpen(false);
    }
    return <div ref={wrapperRef} style={{
      width: "fit-content"
    }}>
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-filtered" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} assistiveText={args.assistiveText} autoComplete={args.autoComplete} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
        width: dropdownWidth
      } : undefined}>
          {filteredOptions.map(option => <DropdownItem key={option} label={option} onClick={() => {
          setSearchValue(option);
          setIsOpen(false);
        }} />)}
        </Dropdown>
      </div>;
  },
  args: {
    ...Default.args,
    compactSpacing: false,
    appearance: "primary"
  }
}`,...(K=(M=E.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var $,P,G;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);
    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);
    function handleChange(value: string | undefined) {
      console.log(value);
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsOpen(false);
    }
    function handleDropdownClose() {
      setIsOpen(false);
    }
    return <div ref={wrapperRef} style={{
      width: "fit-content"
    }}>
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-keyboard-navigation" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} assistiveText="Type at least 3 characters to filter options" showResetButton={true} autoComplete={args.autoComplete} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
        width: dropdownWidth
      } : undefined}>
          {filteredOptions.map(option => <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />)}
        </Dropdown>
      </div>;
  },
  args: {
    compactSpacing: false,
    appearance: "primary"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;
    await userEvent.click(input);
    expect(input).toHaveFocus();
    await userEvent.type(input, "app");
    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const dropdown = overlay?.querySelector("[data-dropdown-id]");
      expect(dropdown).toBeInTheDocument();
    });
    await userEvent.tab();
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expect(menuItems?.[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await waitFor(() => {
      expect(input.value).toBe("Apple2");
    });
  }
}`,...(G=(P=x.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var Y,U,z;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setDropdownWidth(width);
      }
    }, []);
    useEffect(() => {
      setIsOpen(filteredOptions.length > 0);
    }, [filteredOptions.length]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      setSearchValue(option);
      setIsOpen(false);
    }
    function handleSearch(value: string | undefined) {
      console.log("Searched content:", value);
    }
    function handleDropdownClose() {
      setIsOpen(false);
    }
    return <div ref={wrapperRef} style={{
      width: "fit-content"
    }}>
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-keyboard-search" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} onSearch={handleSearch} assistiveText="Type at least 3 characters to filter options" showResetButton={true} autoComplete={args.autoComplete} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
        width: dropdownWidth
      } : undefined}>
          {filteredOptions.map(option => <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />)}
        </Dropdown>
      </div>;
  },
  args: {
    ...Default.args,
    compactSpacing: false,
    appearance: "primary",
    autoComplete: "off"
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox") as HTMLInputElement;
    await userEvent.click(input);
    expect(input).toHaveFocus();
    await userEvent.type(input, "app");
    await waitFor(() => {
      const overlay = document.getElementById("overlay-root");
      const dropdown = overlay?.querySelector("[data-dropdown-id]");
      expect(dropdown).toBeInTheDocument();
    });
    await userEvent.tab();
    const overlay = document.getElementById("overlay-root");
    const dropdown = overlay?.querySelector("[data-dropdown-id]");
    const menuItems = dropdown?.querySelector("ul")?.querySelectorAll("li");
    await waitFor(() => {
      expect(menuItems?.[0]).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await waitFor(() => {
      expect(input.value).toBe("Apple");
    });
    const searchButton = canvas.getByRole("button", {
      name: args.label
    });
    await userEvent.click(searchButton);
  }
}`,...(z=(U=I.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const Ne=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{v as Default,I as KeyboardNavigationAndSearch,x as KeyboardNavigationWithFilteredOptions,C as WithDropdown,E as WithFilteredOptions,Ne as __namedExportsOrder,Le as default};
