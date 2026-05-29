import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{T as oe,b as de}from"./keyboard-test.constants-By8W48aj.js";import{w as ae,u as v,e as y,a as O}from"./index-4rjIhT2C.js";import{r as e}from"./index-G8LIXM5I.js";import{D as T,a as B}from"./DropdownItem-7JIRplxO.js";import{E as ue}from"./keyboard.constants-BverKK8B.js";import{I as fe}from"./IconButton-DcIeVO_H.js";import{B as he}from"./BaseTextInput-BIt576xt.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./BaseDropdown-oqZpxI1t.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-D82IU-Su.js";import"./common-button.constants-eNlmcvUj.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Link-CAnB1cKs.js";const W=10,me="8px",we="44px",ge="24px",C="8px",ve={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},ye="_searchbarContainer_pn0xj_1",Se="_textInputWrapper_pn0xj_7",Oe="_searchButton_pn0xj_19",V={searchbarContainer:ye,textInputWrapper:Se,searchButton:Oe};function be(n,r){const t={};return n==="primary"?(t.borderRight="none",t.borderRadius=`${C} 0 0 ${C}`,r||(t.paddingLeft=me)):n==="secondary"&&(t.borderRadius=C),t}function Ee(n){return{width:we,borderRadius:`0 ${C} ${C} 0`,height:n?ge:void 0}}const b=e.forwardRef(({onSearch:n,onChange:r,onClear:t,id:c,label:u="Rechercher",disabled:o=!1,showResetButton:s=!0,appearance:p="primary",compactSpacing:f,value:l,assistiveText:m,style:w,width:a,...i},h)=>{const E=ve[p],[re,F]=e.useState(!1),_=e.useRef(null);e.useEffect(()=>{const g=_.current;if(!g)return;const H=()=>{F(!0)},j=pe=>{const q=pe.relatedTarget;q&&g.contains(q)||F(!1)};return g.addEventListener("focusin",H),g.addEventListener("focusout",j),()=>{g.removeEventListener("focusin",H),g.removeEventListener("focusout",j)}},[]);const A=e.useCallback(g=>{r==null||r(g)},[r]),se=e.useCallback(()=>{n==null||n(l)},[n,l]),L=e.useCallback(g=>{g.key===ue&&(n==null||n(l))},[n,l]),k=e.useCallback(()=>{r==null||r(""),t==null||t()},[r,t]),N=e.useMemo(()=>o?"Recherche indisponible":u,[o,u]),ie=e.useMemo(()=>({disabled:o,value:l,onChange:A,onKeyUp:n?L:void 0,showRightIcon:s,rightIconAction:"clean",onRightIconClick:k,assistiveTextLabel:m,compactSpacing:f,placeholder:N,leftIcon:E.showLeftIcon?"search":void 0,...i}),[o,l,A,n,L,s,k,m,f,N,E.showLeftIcon,i]),ce=e.useMemo(()=>({...be(p,E.showLeftIcon),...w??{}}),[p,E.showLeftIcon,w]),le=e.useMemo(()=>Ee(f),[f]);return d.jsx("div",{className:V.searchbarContainer,role:"search","data-appearance":p,children:d.jsx("div",{ref:_,className:V.textInputWrapper,"data-disabled":o,children:d.jsx(he,{id:c??"",width:a,...ie,style:ce,highlighted:re,ref:h,rightSlot:E.showSearchButton&&d.jsx(fe,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:se,disabled:o,"aria-label":u,className:V.searchButton,compactSpacing:f,style:le})})})})});b.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const Je={title:"Composants/Searchbar/Searchbar",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},S={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},x={render:n=>{const r=["option1","option2","option3"],[t,c]=e.useState(!1),[u,o]=e.useState(""),s=e.useRef(null),[p,f]=e.useState(void 0);e.useEffect(()=>{if(s.current){const a=s.current.offsetWidth;f(a)}},[]),e.useEffect(()=>{var h;function a(){r.length>0&&!t&&c(!0)}const i=(h=s.current)==null?void 0:h.querySelector("input");return i==null||i.addEventListener("focus",a),()=>{i==null||i.removeEventListener("focus",a)}},[r.length,t]);function l(a){o(a??""),r.length>0&&c(!0)}function m(a){console.log("Selected option:",a),o(a),c(!1)}function w(){c(!1)}return d.jsx("div",{ref:s,style:{width:"fit-content"},children:d.jsx(T,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:d.jsx(b,{...n,value:u,onChange:l,assistiveText:n.assistiveText}),isOpen:t,onClose:w,position:"bottom",alignment:"start",offset:W,autofocus:!1,style:p?{width:p}:void 0,children:r.map(a=>d.jsx(B,{label:a,onClick:()=>m(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},R={render:n=>{const r=e.useMemo(()=>["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[]),[t,c]=e.useState(""),[u,o]=e.useState(!1),s=e.useRef(null),[p,f]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:r.filter(a=>a.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const a=s.current.offsetWidth;f(a)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function m(a){c(a??"")}function w(){o(!1)}return d.jsx("div",{ref:s,style:{width:"fit-content"},children:d.jsx(T,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:d.jsx(b,{id:"searchbar-filtered",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,assistiveText:n.assistiveText,autoComplete:n.autoComplete}),isOpen:u,onClose:w,position:"bottom",alignment:"start",offset:W,autofocus:!1,style:p?{width:p}:void 0,children:l.map(a=>d.jsx(B,{label:a,onClick:()=>{c(a),o(!1)}},a))})})},args:{...S.args,compactSpacing:!1,appearance:"primary"}},I={render:n=>{const r=e.useMemo(()=>["Apple","Apple2"],[]),[t,c]=e.useState(""),[u,o]=e.useState(!1),s=e.useRef(null),[p,f]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:r.filter(i=>i.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const i=s.current.offsetWidth;f(i)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function m(i){console.log(i),c(i??"")}function w(i){console.log("Selected option:",i),c(i),o(!1)}function a(){o(!1)}return d.jsx("div",{ref:s,style:{width:"fit-content"},children:d.jsx(T,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:d.jsx(b,{id:"searchbar-keyboard-navigation",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:u,onClose:a,position:"bottom",alignment:"start",offset:W,autofocus:!1,style:p?{width:p}:void 0,children:l.map(i=>d.jsx(B,{label:i,onClick:()=>w(i)},i))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:n})=>{var s;const t=ae(n).getByRole("textbox");await v.click(t),y(t).toHaveFocus(),await v.type(t,"app"),await O(()=>{const p=document.getElementById("overlay-root"),f=p==null?void 0:p.querySelector("[data-dropdown-id]");y(f).toBeInTheDocument()}),await v.tab();const c=document.getElementById("overlay-root"),u=c==null?void 0:c.querySelector("[data-dropdown-id]"),o=(s=u==null?void 0:u.querySelector("ul"))==null?void 0:s.querySelectorAll("li");await O(()=>{y(o==null?void 0:o[0]).toHaveFocus()}),await v.keyboard(de),y(o==null?void 0:o[1]).toHaveFocus(),await v.keyboard(oe),await O(()=>{y(t.value).toBe("Apple2")})}},D={render:n=>{const r=e.useMemo(()=>["Apple","Apple2"],[]),[t,c]=e.useState(""),[u,o]=e.useState(!1),s=e.useRef(null),[p,f]=e.useState(void 0),l=e.useMemo(()=>!t||t.length<3?[]:r.filter(h=>h.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const h=s.current.offsetWidth;f(h)}},[]),e.useEffect(()=>{o(l.length>0)},[l.length]);function m(h){c(h??"")}function w(h){c(h),o(!1)}function a(h){console.log("Searched content:",h)}function i(){o(!1)}return d.jsx("div",{ref:s,style:{width:"fit-content"},children:d.jsx(T,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:d.jsx(b,{id:"searchbar-keyboard-search",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:u,onClose:i,position:"bottom",alignment:"start",offset:W,autofocus:!1,style:p?{width:p}:void 0,children:l.map(h=>d.jsx(B,{label:h,onClick:()=>w(h)},h))})})},args:{...S.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:n,args:r})=>{var f;const t=ae(n),c=t.getByRole("textbox");await v.click(c),y(c).toHaveFocus(),await v.type(c,"app"),await O(()=>{const l=document.getElementById("overlay-root"),m=l==null?void 0:l.querySelector("[data-dropdown-id]");y(m).toBeInTheDocument()}),await v.tab();const u=document.getElementById("overlay-root"),o=u==null?void 0:u.querySelector("[data-dropdown-id]"),s=(f=o==null?void 0:o.querySelector("ul"))==null?void 0:f.querySelectorAll("li");await O(()=>{y(s==null?void 0:s[0]).toHaveFocus()}),await v.keyboard(oe),await O(()=>{y(c.value).toBe("Apple")});const p=t.getByRole("button",{name:r.label});await v.click(p)}};var M,K,$;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(K=S.parameters)==null?void 0:K.docs)==null?void 0:$.source}}};var P,G,Y;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(Y=(G=x.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var U,z,J;R.parameters={...R.parameters,docs:{...(U=R.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(z=R.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var Q,X,Z;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,ne;D.parameters={...D.parameters,docs:{...(ee=D.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(te=D.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};const Qe=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{S as Default,D as KeyboardNavigationAndSearch,I as KeyboardNavigationWithFilteredOptions,x as WithDropdown,R as WithFilteredOptions,Qe as __namedExportsOrder,Je as default};
