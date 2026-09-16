import{j as c}from"./jsx-runtime-Cf8x2fCZ.js";import{S as v,D as I}from"./Searchbar-C2WYkH2O.js";import{T as te,b as oe}from"./keyboard-test.constants-By8W48aj.js";import{w as ae,u as m,e as g,a as b}from"./index-4rjIhT2C.js";import{r as e}from"./index-G8LIXM5I.js";import{D as W}from"./Dropdown-BM0K4W_t.js";import{D as V}from"./DropdownItem-DPjyLYQC.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./IconButton.module-DsipBz7u.js";import"./BaseTextInput-TqiR5NM8.js";import"./Label-RVTAVU7C.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";const je={title:"Composants/Searchbar/Searchbar",component:v,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},y={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},O={render:n=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"fit-content"},children:[c.jsx(v,{...n,id:"searchbar-primary",appearance:"primary"}),c.jsx(v,{...n,id:"searchbar-secondary",appearance:"secondary"})]}),args:{...y.args,value:""}},C={render:n=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"fit-content"},children:[c.jsx(v,{...n,id:"searchbar-primary-compact",appearance:"primary"}),c.jsx(v,{...n,id:"searchbar-secondary-compact",appearance:"secondary"})]}),args:{...y.args,compactSpacing:!0,value:""}},x={args:{...y.args,value:"Texte recherché",showResetButton:!0}},D={render:n=>{const d=["option1","option2","option3"],[t,s]=e.useState(!1),[f,o]=e.useState(""),r=e.useRef(null),[p,h]=e.useState(void 0);e.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),e.useEffect(()=>{var u;function a(){d.length>0&&!t&&s(!0)}const i=(u=r.current)==null?void 0:u.querySelector("input");return i==null||i.addEventListener("focus",a),()=>{i==null||i.removeEventListener("focus",a)}},[d.length,t]);function l(a){o(a??""),d.length>0&&s(!0)}function w(a){o(a),s(!1)}function S(){s(!1)}return c.jsx("div",{ref:r,style:{width:"fit-content"},children:c.jsx(W,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:c.jsx(v,{...n,value:f,onChange:l,assistiveText:n.assistiveText}),isOpen:t,onClose:S,position:"bottom",alignment:"start",offset:I,autofocus:!1,style:p?{width:p}:void 0,children:d.map(a=>c.jsx(V,{label:a,onClick:()=>w(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},E={render:n=>{const d=e.useMemo(()=>["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[p,h]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:d.filter(a=>a.toLowerCase().includes(t.toLowerCase())),[t,d]);e.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function w(a){s(a??"")}function S(){o(!1)}return c.jsx("div",{ref:r,style:{width:"fit-content"},children:c.jsx(W,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:c.jsx(v,{id:"searchbar-filtered",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:w,assistiveText:n.assistiveText,autoComplete:n.autoComplete}),isOpen:f,onClose:S,position:"bottom",alignment:"start",offset:I,autofocus:!1,style:p?{width:p}:void 0,children:l.map(a=>c.jsx(V,{label:a,onClick:()=>{s(a),o(!1)}},a))})})},args:{...y.args,compactSpacing:!1,appearance:"primary"}},R={render:n=>{const d=e.useMemo(()=>["Apple","Apple2"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[p,h]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:d.filter(i=>i.toLowerCase().includes(t.toLowerCase())),[t,d]);e.useEffect(()=>{if(r.current){const i=r.current.offsetWidth;h(i)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function w(i){console.log(i),s(i??"")}function S(i){console.log("Selected option:",i),s(i),o(!1)}function a(){o(!1)}return c.jsx("div",{ref:r,style:{width:"fit-content"},children:c.jsx(W,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:c.jsx(v,{id:"searchbar-keyboard-navigation",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:w,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:f,onClose:a,position:"bottom",alignment:"start",offset:I,autofocus:!1,style:p?{width:p}:void 0,children:l.map(i=>c.jsx(V,{label:i,onClick:()=>S(i)},i))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:n})=>{var r;const t=ae(n).getByRole("textbox");await m.click(t),g(t).toHaveFocus(),await m.type(t,"app"),await b(()=>{const p=document.getElementById("overlay-root"),h=p==null?void 0:p.querySelector("[data-dropdown-id]");g(h).toBeInTheDocument()}),await m.tab();const s=document.getElementById("overlay-root"),f=s==null?void 0:s.querySelector("[data-dropdown-id]"),o=(r=f==null?void 0:f.querySelector("ul"))==null?void 0:r.querySelectorAll("li");await b(()=>{g(o==null?void 0:o[0]).toHaveFocus()}),await m.keyboard(oe),g(o==null?void 0:o[1]).toHaveFocus(),await m.keyboard(te),await b(()=>{g(t.value).toBe("Apple2")})}},T={render:n=>{const d=e.useMemo(()=>["Apple","Apple2"],[]),[t,s]=e.useState(""),[f,o]=e.useState(!1),r=e.useRef(null),[p,h]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:d.filter(u=>u.toLowerCase().includes(t.toLowerCase())),[t,d]);e.useEffect(()=>{if(r.current){const u=r.current.offsetWidth;h(u)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function w(u){s(u??"")}function S(u){s(u),o(!1)}function a(u){console.log("Searched content:",u)}function i(){o(!1)}return c.jsx("div",{ref:r,style:{width:"fit-content"},children:c.jsx(W,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:c.jsx(v,{id:"searchbar-keyboard-search",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:w,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:f,onClose:i,position:"bottom",alignment:"start",offset:I,autofocus:!1,style:p?{width:p}:void 0,children:l.map(u=>c.jsx(V,{label:u,onClick:()=>S(u)},u))})})},args:{...y.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:n,args:d})=>{var h;const t=ae(n),s=t.getByRole("textbox");await m.click(s),g(s).toHaveFocus(),await m.type(s,"app"),await b(()=>{const l=document.getElementById("overlay-root"),w=l==null?void 0:l.querySelector("[data-dropdown-id]");g(w).toBeInTheDocument()}),await m.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),r=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await b(()=>{g(r==null?void 0:r[0]).toHaveFocus()}),await m.keyboard(te),await b(()=>{g(s.value).toBe("Apple")});const p=t.getByRole("button",{name:d.label});await m.click(p)}};var B,F,k;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(k=(F=y.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var j,A,L;O.parameters={...O.parameters,docs:{...(j=O.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "fit-content"
  }}>
      <Searchbar {...args} id="searchbar-primary" appearance="primary" />
      <Searchbar {...args} id="searchbar-secondary" appearance="secondary" />
    </div>,
  args: {
    ...Default.args,
    value: ""
  }
}`,...(L=(A=O.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var N,q,H;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "fit-content"
  }}>
      <Searchbar {...args} id="searchbar-primary-compact" appearance="primary" />
      <Searchbar {...args} id="searchbar-secondary-compact" appearance="secondary" />
    </div>,
  args: {
    ...Default.args,
    compactSpacing: true,
    value: ""
  }
}`,...(H=(q=C.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var M,_,K;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: "Texte recherché",
    showResetButton: true
  }
}`,...(K=(_=x.parameters)==null?void 0:_.docs)==null?void 0:K.source}}};var $,G,P;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(P=(G=D.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var Y,z,J;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(J=(z=E.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,U,X;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(X=(U=R.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ne;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};const Ae=["Default","Appearances","CompactSpacing","WithFilledValue","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{O as Appearances,C as CompactSpacing,y as Default,T as KeyboardNavigationAndSearch,R as KeyboardNavigationWithFilteredOptions,D as WithDropdown,x as WithFilledValue,E as WithFilteredOptions,Ae as __namedExportsOrder,je as default};
