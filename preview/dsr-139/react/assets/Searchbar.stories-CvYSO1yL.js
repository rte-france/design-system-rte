import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{b as ne,T as Q}from"./keyboard-test.constants-By8W48aj.js";import{w as X,u as g,e as y,a as S}from"./index-DCXJbAaW.js";import{r as t}from"./index-G8LIXM5I.js";import{D as C,a as D}from"./DropdownItem-BSVR7oW8.js";import{E as oe}from"./keyboard.constants-BverKK8B.js";import{I as ae}from"./IconButton-BQTznGrW.js";import{T as re}from"./TextInput-BDst6wX2.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./Link-DbCKFFRz.js";const T=10,se="8px",ie="44px",ce="24px",O="8px",le={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},pe="_searchbarContainer_1we86_3",de="_textInputWrapper_1we86_9",ue="_searchButton_1we86_21",V={searchbarContainer:pe,textInputWrapper:de,searchButton:ue};function fe(n,s){const e={};return n==="primary"?(e.borderRight="none",e.borderRadius=`${O} 0 0 ${O}`,s||(e.paddingLeft=se)):n==="secondary"&&(e.borderRadius=O),e}function he(n){return{width:ie,borderRadius:`0 ${O} ${O} 0`,height:n?ce:void 0}}const b=t.forwardRef(({onSearch:n,onChange:s,onClear:e,id:i,label:f="Rechercher",disabled:o=!1,showResetButton:r=!0,appearance:l="primary",compactSpacing:h,value:p,assistiveText:w,style:m,...a},c)=>{const d=le[l],F=t.useCallback(W=>{s==null||s(W)},[s]),B=t.useCallback(()=>{n==null||n(p)},[n,p]),_=t.useCallback(W=>{W.key===oe&&B()},[B]),A=t.useCallback(()=>{s==null||s(""),e==null||e()},[s,e]),Z=t.useMemo(()=>({disabled:o,value:p,onChange:F,onKeyUp:n?_:void 0,showRightIcon:r,rightIconAction:"clean",onRightIconClick:A,assistiveTextLabel:w,compactSpacing:h,placeholder:f,leftIcon:d.showLeftIcon?"search":void 0,...a}),[o,p,F,n,_,r,A,w,h,f,d.showLeftIcon]),ee=t.useMemo(()=>({...fe(l,d.showLeftIcon),...m??{}}),[l,d.showLeftIcon,m]),te=t.useMemo(()=>he(h),[h]);return u.jsx("div",{className:V.searchbarContainer,role:"search","data-appearance":l,children:u.jsxs("div",{className:V.textInputWrapper,"data-disabled":o,children:[u.jsx(re,{id:i??"",...Z,style:ee,ref:c}),d.showSearchButton&&u.jsx(ae,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:B,disabled:o,"aria-label":f,className:V.searchButton,compactSpacing:h,style:te})]})})});b.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const Le={title:"Composants/Searchbar",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},v={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1}},E={render:n=>{const s=["option1","option2","option3"],[e,i]=t.useState(!1),[f,o]=t.useState(""),r=t.useRef(null),[l,h]=t.useState(void 0);t.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),t.useEffect(()=>{var d;function a(){s.length>0&&!e&&i(!0)}const c=(d=r.current)==null?void 0:d.querySelector("input");return c==null||c.addEventListener("focus",a),()=>{c==null||c.removeEventListener("focus",a)}},[s.length]);function p(a){o(a??""),s.length>0&&i(!0)}function w(a){console.log("Selected option:",a),o(a),i(!1)}function m(){i(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(C,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{...n,value:f,onChange:p,assistiveText:n.assistiveText}),isOpen:e,onClose:m,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:l?{width:l}:void 0,children:s.map(a=>u.jsx(D,{label:a,onClick:()=>w(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1}},x={render:n=>{const s=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[e,i]=t.useState(""),[f,o]=t.useState(!1),r=t.useRef(null),[l,h]=t.useState(void 0),p=t.useMemo(()=>!e||e.length<3?[]:s.filter(a=>a.toLowerCase().includes(e.toLowerCase())),[e]);t.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),t.useEffect(()=>{o(p.length>0)},[p.length]);function w(a){i(a??"")}function m(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(C,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-filtered",appearance:n.appearance,value:e,compactSpacing:n.compactSpacing,onChange:w,assistiveText:n.assistiveText}),isOpen:f,onClose:m,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:l?{width:l}:void 0,children:p.map(a=>u.jsx(D,{label:a,onClick:()=>{i(a),o(!1)}},a))})})},args:{...v.args,compactSpacing:!1,appearance:"primary"}},I={render:n=>{const s=["Apple","Apple2"],[e,i]=t.useState(""),[f,o]=t.useState(!1),r=t.useRef(null),[l,h]=t.useState(void 0),p=t.useMemo(()=>!e||e.length<3?[]:s.filter(c=>c.toLowerCase().includes(e.toLowerCase())),[e]);t.useEffect(()=>{if(r.current){const c=r.current.offsetWidth;h(c)}},[]),t.useEffect(()=>{o(p.length>0)},[p.length]);function w(c){console.log(c),i(c??"")}function m(c){console.log("Selected option:",c),i(c),o(!1)}function a(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(C,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-navigation",appearance:n.appearance,value:e,compactSpacing:n.compactSpacing,onChange:w,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0}),isOpen:f,onClose:a,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:l?{width:l}:void 0,children:p.map(c=>u.jsx(D,{label:c,onClick:()=>m(c)},c))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:n})=>{var r;const e=X(n).getByRole("textbox");await g.click(e),y(e).toHaveFocus(),await g.type(e,"app"),await S(()=>{const l=document.getElementById("overlay-root"),h=l==null?void 0:l.querySelector("[data-dropdown-id]");y(h).toBeInTheDocument()}),await g.tab();const i=document.getElementById("overlay-root"),f=i==null?void 0:i.querySelector("[data-dropdown-id]"),o=(r=f==null?void 0:f.querySelector("ul"))==null?void 0:r.querySelectorAll("li");await S(()=>{y(o==null?void 0:o[0]).toHaveFocus()}),await g.keyboard(ne),y(o==null?void 0:o[1]).toHaveFocus(),await g.keyboard(Q),await S(()=>{y(e.value).toBe("Apple2")})}},R={render:n=>{const s=["Apple","Apple2"],[e,i]=t.useState(""),[f,o]=t.useState(!1),r=t.useRef(null),[l,h]=t.useState(void 0),p=t.useMemo(()=>!e||e.length<3?[]:s.filter(d=>d.toLowerCase().includes(e.toLowerCase())),[e]);t.useEffect(()=>{if(r.current){const d=r.current.offsetWidth;h(d)}},[]),t.useEffect(()=>{o(p.length>0)},[p.length]);function w(d){i(d??"")}function m(d){i(d),o(!1)}function a(d){console.log("Searched content:",d)}function c(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(C,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-search",appearance:n.appearance,value:e,compactSpacing:n.compactSpacing,onChange:w,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0}),isOpen:f,onClose:c,position:"bottom",alignment:"start",offset:T,autofocus:!1,style:l?{width:l}:void 0,children:p.map(d=>u.jsx(D,{label:d,onClick:()=>m(d)},d))})})},args:{...v.args,compactSpacing:!1,appearance:"primary"},play:async({canvasElement:n,args:s})=>{var h;const e=X(n),i=e.getByRole("textbox");await g.click(i),y(i).toHaveFocus(),await g.type(i,"app"),await S(()=>{const p=document.getElementById("overlay-root"),w=p==null?void 0:p.querySelector("[data-dropdown-id]");y(w).toBeInTheDocument()}),await g.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),r=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await S(()=>{y(r==null?void 0:r[0]).toHaveFocus()}),await g.keyboard(Q),await S(()=>{y(i.value).toBe("Apple")});const l=e.getByRole("button",{name:s.label});await g.click(l)}};var k,L,N;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Texte assistif",
    label: "Rechercher",
    value: "",
    disabled: false
  }
}`,...(N=(L=v.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var q,H,j;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
    disabled: false
  }
}`,...(j=(H=E.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var M,K,$;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-filtered" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} assistiveText={args.assistiveText} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
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
}`,...($=(K=x.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var P,G,Y;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-keyboard-navigation" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
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
}`,...(Y=(G=I.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var U,z,J;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
        <Dropdown dropdownId={\`\${args.id ?? "searchbar"}-dropdown\`} trigger={<Searchbar id="searchbar-keyboard-search" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} onSearch={handleSearch} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />} isOpen={isOpen} onClose={handleDropdownClose} position="bottom" alignment="start" offset={DROPDOWN_OFFSET} autofocus={false} style={dropdownWidth ? {
        width: dropdownWidth
      } : undefined}>
          {filteredOptions.map(option => <DropdownItem key={option} label={option} onClick={() => handleOptionSelect(option)} />)}
        </Dropdown>
      </div>;
  },
  args: {
    ...Default.args,
    compactSpacing: false,
    appearance: "primary"
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
}`,...(J=(z=R.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};const Ne=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{v as Default,R as KeyboardNavigationAndSearch,I as KeyboardNavigationWithFilteredOptions,E as WithDropdown,x as WithFilteredOptions,Ne as __namedExportsOrder,Le as default};
