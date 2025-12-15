import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{b as le,T as te}from"./keyboard-test.constants-By8W48aj.js";import{w as ne,u as v,e as y,a as b}from"./index-DCXJbAaW.js";import{r as n}from"./index-G8LIXM5I.js";import{D,a as T}from"./DropdownItem-B6CHbB8i.js";import{E as pe}from"./keyboard.constants-BverKK8B.js";import{I as de}from"./IconButton-CYFOPNzz.js";import{B as ue}from"./BaseTextInput-QPTLhsYM.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./Link-DbCKFFRz.js";const B=10,fe="8px",he="44px",we="24px",E="8px",me={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},ge="_searchbarContainer_1we86_3",ve="_textInputWrapper_1we86_9",ye="_searchButton_1we86_21",W={searchbarContainer:ge,textInputWrapper:ve,searchButton:ye};function Se(e,s){const t={};return e==="primary"?(t.borderRight="none",t.borderRadius=`${E} 0 0 ${E}`,s||(t.paddingLeft=fe)):e==="secondary"&&(t.borderRadius=E),t}function be(e){return{width:he,borderRadius:`0 ${E} ${E} 0`,height:e?we:void 0}}const O=n.forwardRef(({onSearch:e,onChange:s,onClear:t,id:i,label:f="Rechercher",disabled:o=!1,showResetButton:r=!0,appearance:p="primary",compactSpacing:h,value:l,assistiveText:w,style:m,...a},c)=>{const d=me[p],[oe,V]=n.useState(!1),F=n.useRef(null);n.useEffect(()=>{const g=F.current;if(!g)return;const k=()=>{V(!0)},N=ce=>{const H=ce.relatedTarget;H&&g.contains(H)||V(!1)};return g.addEventListener("focusin",k),g.addEventListener("focusout",N),()=>{g.removeEventListener("focusin",k),g.removeEventListener("focusout",N)}},[]);const _=n.useCallback(g=>{s==null||s(g)},[s]),ae=n.useCallback(()=>{e==null||e(l)},[e,l]),A=n.useCallback(g=>{g.key===pe&&(e==null||e(l))},[e]),L=n.useCallback(()=>{s==null||s(""),t==null||t()},[s,t]),re=n.useMemo(()=>({disabled:o,value:l,onChange:_,onKeyUp:e?A:void 0,showRightIcon:r,rightIconAction:"clean",onRightIconClick:L,assistiveTextLabel:w,compactSpacing:h,placeholder:f,leftIcon:d.showLeftIcon?"search":void 0,...a}),[o,l,_,e,A,r,L,w,h,f,d.showLeftIcon]),se=n.useMemo(()=>({...Se(p,d.showLeftIcon),...m??{}}),[p,d.showLeftIcon,m]),ie=n.useMemo(()=>be(h),[h]);return u.jsx("div",{className:W.searchbarContainer,role:"search","data-appearance":p,children:u.jsx("div",{ref:F,className:W.textInputWrapper,"data-disabled":o,children:u.jsx(ue,{id:i??"",...re,style:se,highlighted:oe,ref:c,rightSlot:d.showSearchButton&&u.jsx(de,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:ae,disabled:o,"aria-label":f,className:W.searchButton,compactSpacing:h,style:ie})})})})});O.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const $e={title:"Composants/Searchbar",component:O,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},S={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},C={render:e=>{const s=["option1","option2","option3"],[t,i]=n.useState(!1),[f,o]=n.useState(""),r=n.useRef(null),[p,h]=n.useState(void 0);n.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),n.useEffect(()=>{var d;function a(){s.length>0&&!t&&i(!0)}const c=(d=r.current)==null?void 0:d.querySelector("input");return c==null||c.addEventListener("focus",a),()=>{c==null||c.removeEventListener("focus",a)}},[s.length]);function l(a){o(a??""),s.length>0&&i(!0)}function w(a){console.log("Selected option:",a),o(a),i(!1)}function m(){i(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{...e,value:f,onChange:l,assistiveText:e.assistiveText}),isOpen:t,onClose:m,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:s.map(a=>u.jsx(T,{label:a,onClick:()=>w(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},x={render:e=>{const s=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),l=n.useMemo(()=>!t||t.length<3?[]:s.filter(a=>a.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const a=r.current.offsetWidth;h(a)}},[]),n.useEffect(()=>{o(l.length>0)},[l.length]);function w(a){i(a??"")}function m(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-filtered",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,assistiveText:e.assistiveText,autoComplete:e.autoComplete}),isOpen:f,onClose:m,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:l.map(a=>u.jsx(T,{label:a,onClick:()=>{i(a),o(!1)}},a))})})},args:{...S.args,compactSpacing:!1,appearance:"primary"}},I={render:e=>{const s=["Apple","Apple2"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),l=n.useMemo(()=>!t||t.length<3?[]:s.filter(c=>c.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const c=r.current.offsetWidth;h(c)}},[]),n.useEffect(()=>{o(l.length>0)},[l.length]);function w(c){console.log(c),i(c??"")}function m(c){console.log("Selected option:",c),i(c),o(!1)}function a(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-keyboard-navigation",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:e.autoComplete}),isOpen:f,onClose:a,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:l.map(c=>u.jsx(T,{label:c,onClick:()=>m(c)},c))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:e})=>{var r;const t=ne(e).getByRole("textbox");await v.click(t),y(t).toHaveFocus(),await v.type(t,"app"),await b(()=>{const p=document.getElementById("overlay-root"),h=p==null?void 0:p.querySelector("[data-dropdown-id]");y(h).toBeInTheDocument()}),await v.tab();const i=document.getElementById("overlay-root"),f=i==null?void 0:i.querySelector("[data-dropdown-id]"),o=(r=f==null?void 0:f.querySelector("ul"))==null?void 0:r.querySelectorAll("li");await b(()=>{y(o==null?void 0:o[0]).toHaveFocus()}),await v.keyboard(le),y(o==null?void 0:o[1]).toHaveFocus(),await v.keyboard(te),await b(()=>{y(t.value).toBe("Apple2")})}},R={render:e=>{const s=["Apple","Apple2"],[t,i]=n.useState(""),[f,o]=n.useState(!1),r=n.useRef(null),[p,h]=n.useState(void 0),l=n.useMemo(()=>!t||t.length<3?[]:s.filter(d=>d.toLowerCase().includes(t.toLowerCase())),[t]);n.useEffect(()=>{if(r.current){const d=r.current.offsetWidth;h(d)}},[]),n.useEffect(()=>{o(l.length>0)},[l.length]);function w(d){i(d??"")}function m(d){i(d),o(!1)}function a(d){console.log("Searched content:",d)}function c(){o(!1)}return u.jsx("div",{ref:r,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${e.id??"searchbar"}-dropdown`,trigger:u.jsx(O,{id:"searchbar-keyboard-search",appearance:e.appearance,value:t,compactSpacing:e.compactSpacing,onChange:w,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:e.autoComplete}),isOpen:f,onClose:c,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:l.map(d=>u.jsx(T,{label:d,onClick:()=>m(d)},d))})})},args:{...S.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:e,args:s})=>{var h;const t=ne(e),i=t.getByRole("textbox");await v.click(i),y(i).toHaveFocus(),await v.type(i,"app"),await b(()=>{const l=document.getElementById("overlay-root"),w=l==null?void 0:l.querySelector("[data-dropdown-id]");y(w).toBeInTheDocument()}),await v.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),r=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await b(()=>{y(r==null?void 0:r[0]).toHaveFocus()}),await v.keyboard(te),await b(()=>{y(i.value).toBe("Apple")});const p=t.getByRole("button",{name:s.label});await v.click(p)}};var q,j,M;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(j=S.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var K,$,P;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(P=($=C.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var G,Y,U;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var z,J,Q;I.parameters={...I.parameters,docs:{...(z=I.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=I.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Pe=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{S as Default,R as KeyboardNavigationAndSearch,I as KeyboardNavigationWithFilteredOptions,C as WithDropdown,x as WithFilteredOptions,Pe as __namedExportsOrder,$e as default};
