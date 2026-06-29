import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{S as O,D as x}from"./Searchbar-CENd3eIk.js";import{T as $,a as P}from"./keyboard-test.constants-DRUxacrk.js";import{within as G,userEvent as w,expect as g,waitFor as y}from"./index-o3q5y4Vk.js";import{r as e}from"./index-G8LIXM5I.js";import{D as R,a as I}from"./DropdownItem-8b_lIg0e.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./IconButton-HZdrGdmr.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";import"./Icon-DgLH6pPJ.js";import"./index-DSdvzt-y.js";import"./BaseTextInput-B-2I8zfK.js";import"./RequiredIndicator-DM7xTNgi.js";import"./Link-DLPtM2IA.js";import"./index-BH7jo-UD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./BaseDropdown-4OWN-rN5.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";const be={title:"Composants/Searchbar/Searchbar",component:O,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},S={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},b={render:a=>{const c=["option1","option2","option3"],[t,s]=e.useState(!1),[f,o]=e.useState(""),r=e.useRef(null),[l,h]=e.useState(void 0);e.useEffect(()=>{if(r.current){const n=r.current.offsetWidth;h(n)}},[]),e.useEffect(()=>{var d;function n(){c.length>0&&!t&&s(!0)}const i=(d=r.current)==null?void 0:d.querySelector("input");return i==null||i.addEventListener("focus",n),()=>{i==null||i.removeEventListener("focus",n)}},[c.length,t]);function p(n){o(n??""),c.length>0&&s(!0)}function m(n){o(n),s(!1)}function v(){s(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${a.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{...a,value:f,onChange:p,assistiveText:a.assistiveText}),isOpen:t,onClose:v,position:"bottom",alignment:"start",offset:x,autofocus:!1,style:l?{width:l}:void 0,children:c.map(n=>u.jsx(I,{label:n,onClick:()=>m(n)},n))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},C={render:a=>{const c=e.useMemo(()=>["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[l,h]=e.useState(void 0),p=e.useMemo(()=>!t||t.length<3?[]:c.filter(n=>n.toLowerCase().includes(t.toLowerCase())),[t,c]);e.useEffect(()=>{if(r.current){const n=r.current.offsetWidth;h(n)}},[]),e.useEffect(()=>{o(p.length>0)},[p.length]);function m(n){s(n??"")}function v(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${a.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-filtered",appearance:a.appearance,value:t,compactSpacing:a.compactSpacing,onChange:m,assistiveText:a.assistiveText,autoComplete:a.autoComplete}),isOpen:f,onClose:v,position:"bottom",alignment:"start",offset:x,autofocus:!1,style:l?{width:l}:void 0,children:p.map(n=>u.jsx(I,{label:n,onClick:()=>{s(n),o(!1)}},n))})})},args:{...S.args,compactSpacing:!1,appearance:"primary"}},E={render:a=>{const c=e.useMemo(()=>["Apple","Apple2"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[l,h]=e.useState(void 0),p=e.useMemo(()=>!t||t.length<3?[]:c.filter(i=>i.toLowerCase().includes(t.toLowerCase())),[t,c]);e.useEffect(()=>{if(r.current){const i=r.current.offsetWidth;h(i)}},[]),e.useEffect(()=>{o(p.length>0)},[p.length]);function m(i){console.log(i),s(i??"")}function v(i){console.log("Selected option:",i),s(i),o(!1)}function n(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${a.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-keyboard-navigation",appearance:a.appearance,value:t,compactSpacing:a.compactSpacing,onChange:m,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:a.autoComplete}),isOpen:f,onClose:n,position:"bottom",alignment:"start",offset:x,autofocus:!1,style:l?{width:l}:void 0,children:p.map(i=>u.jsx(I,{label:i,onClick:()=>v(i)},i))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:a})=>{var r;const t=G(a).getByRole("textbox");await w.click(t),g(t).toHaveFocus(),await w.type(t,"app"),await y(()=>{const l=document.getElementById("overlay-root"),h=l==null?void 0:l.querySelector("[data-dropdown-id]");g(h).toBeInTheDocument()}),await w.tab();const s=document.getElementById("overlay-root"),f=s==null?void 0:s.querySelector("[data-dropdown-id]"),o=(r=f==null?void 0:f.querySelector("ul"))==null?void 0:r.querySelectorAll("li");await y(()=>{g(o==null?void 0:o[0]).toHaveFocus()}),await w.keyboard(P),g(o==null?void 0:o[1]).toHaveFocus(),await w.keyboard($),await y(()=>{g(t.value).toBe("Apple2")})}},D={render:a=>{const c=e.useMemo(()=>["Apple","Apple2"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[l,h]=e.useState(void 0),p=e.useMemo(()=>!t||t.length<3?[]:c.filter(d=>d.toLowerCase().includes(t.toLowerCase())),[t,c]);e.useEffect(()=>{if(r.current){const d=r.current.offsetWidth;h(d)}},[]),e.useEffect(()=>{o(p.length>0)},[p.length]);function m(d){s(d??"")}function v(d){s(d),o(!1)}function n(d){console.log("Searched content:",d)}function i(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(R,{dropdownId:`${a.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-keyboard-search",appearance:a.appearance,value:t,compactSpacing:a.compactSpacing,onChange:m,onSearch:n,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:a.autoComplete}),isOpen:f,onClose:i,position:"bottom",alignment:"start",offset:x,autofocus:!1,style:l?{width:l}:void 0,children:p.map(d=>u.jsx(I,{label:d,onClick:()=>v(d)},d))})})},args:{...S.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:a,args:c})=>{var h;const t=G(a),s=t.getByRole("textbox");await w.click(s),g(s).toHaveFocus(),await w.type(s,"app"),await y(()=>{const p=document.getElementById("overlay-root"),m=p==null?void 0:p.querySelector("[data-dropdown-id]");g(m).toBeInTheDocument()}),await w.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),r=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await y(()=>{g(r==null?void 0:r[0]).toHaveFocus()}),await w.keyboard($),await y(()=>{g(s.value).toBe("Apple")});const l=t.getByRole("button",{name:c.label});await w.click(l)}};var T,W,V;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(V=(W=S.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var B,F,k;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
    }, [options.length, isOpen]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
      if (options.length > 0) {
        setIsOpen(true);
      }
    }
    function handleOptionSelect(option: string) {
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
}`,...(k=(F=b.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var L,A,N;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => {
    const allOptions = useMemo(() => ["Apple", "Apple2", "Banana", "Banana2", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"], []);
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);
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
}`,...(N=(A=C.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,q,H;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => {
    const allOptions = useMemo(() => ["Apple", "Apple2"], []);
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);
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
}`,...(H=(q=E.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var M,_,K;D.parameters={...D.parameters,docs:{...(M=D.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const allOptions = useMemo(() => ["Apple", "Apple2"], []);
    const [searchValue, setSearchValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [dropdownWidth, setDropdownWidth] = useState<number | undefined>(undefined);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue, allOptions]);
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
}`,...(K=(_=D.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};const Ce=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{S as Default,D as KeyboardNavigationAndSearch,E as KeyboardNavigationWithFilteredOptions,b as WithDropdown,C as WithFilteredOptions,Ce as __namedExportsOrder,be as default};
