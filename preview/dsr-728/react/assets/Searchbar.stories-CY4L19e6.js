import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ne,b as pe}from"./keyboard-test.constants-By8W48aj.js";import{w as oe,u as v,e as y,a as O}from"./index-4rjIhT2C.js";import{r as e}from"./index-G8LIXM5I.js";import{D,a as T}from"./DropdownItem-CWLQ8RbD.js";import{E as de}from"./keyboard.constants-BverKK8B.js";import{I as ue}from"./IconButton-DcIeVO_H.js";import{B as fe}from"./BaseTextInput-BIt576xt.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./BaseDropdown-B4w0HCkF.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BpCpHr8J.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-D82IU-Su.js";import"./common-button.constants-eNlmcvUj.js";import"./RequiredIndicator-Cmvl3eZq.js";import"./Link-CAnB1cKs.js";const B=10,he="8px",me="44px",we="24px",E="8px",ge={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},ve="_searchbarContainer_pn0xj_1",ye="_textInputWrapper_pn0xj_7",Se="_searchButton_pn0xj_19",W={searchbarContainer:ve,textInputWrapper:ye,searchButton:Se};function Oe(n,r){const t={};return n==="primary"?(t.borderRight="none",t.borderRadius=`${E} 0 0 ${E}`,r||(t.paddingLeft=he)):n==="secondary"&&(t.borderRadius=E),t}function be(n){return{width:me,borderRadius:`0 ${E} ${E} 0`,height:n?we:void 0}}const b=e.forwardRef(({onSearch:n,onChange:r,onClear:t,id:i,label:f="Rechercher",disabled:o=!1,showResetButton:s=!0,appearance:p="primary",compactSpacing:h,value:c,assistiveText:m,style:w,...a},l)=>{const d=ge[p],[ae,V]=e.useState(!1),F=e.useRef(null);e.useEffect(()=>{const g=F.current;if(!g)return;const N=()=>{V(!0)},H=le=>{const j=le.relatedTarget;j&&g.contains(j)||V(!1)};return g.addEventListener("focusin",N),g.addEventListener("focusout",H),()=>{g.removeEventListener("focusin",N),g.removeEventListener("focusout",H)}},[]);const _=e.useCallback(g=>{r==null||r(g)},[r]),re=e.useCallback(()=>{n==null||n(c)},[n,c]),A=e.useCallback(g=>{g.key===de&&(n==null||n(c))},[n,c]),L=e.useCallback(()=>{r==null||r(""),t==null||t()},[r,t]),k=e.useMemo(()=>o?"Recherche indisponible":f,[o,f]),se=e.useMemo(()=>({disabled:o,value:c,onChange:_,onKeyUp:n?A:void 0,showRightIcon:s,rightIconAction:"clean",onRightIconClick:L,assistiveTextLabel:m,compactSpacing:h,placeholder:k,leftIcon:d.showLeftIcon?"search":void 0,...a}),[o,c,_,n,A,s,L,m,h,k,d.showLeftIcon,a]),ie=e.useMemo(()=>({...Oe(p,d.showLeftIcon),...w??{}}),[p,d.showLeftIcon,w]),ce=e.useMemo(()=>be(h),[h]);return u.jsx("div",{className:W.searchbarContainer,role:"search","data-appearance":p,children:u.jsx("div",{ref:F,className:W.textInputWrapper,"data-disabled":o,children:u.jsx(fe,{id:i??"",...se,style:ie,highlighted:ae,ref:l,rightSlot:d.showSearchButton&&u.jsx(ue,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:re,disabled:o,"aria-label":f,className:W.searchButton,compactSpacing:h,style:ce})})})})});b.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},label:{defaultValue:{value:'"Rechercher"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const ze={title:"Composants/Searchbar/Searchbar",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text",defaultValue:""},value:{control:"text"},disabled:{control:"boolean"},label:{control:"text",defaultValue:"Rechercher"},autoComplete:{control:"text"}},args:{autoComplete:"off"}},S={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"Texte assistif",label:"Rechercher",value:"",disabled:!1,autoComplete:"off"}},C={render:n=>{const r=["option1","option2","option3"],[t,i]=e.useState(!1),[f,o]=e.useState(""),s=e.useRef(null),[p,h]=e.useState(void 0);e.useEffect(()=>{if(s.current){const a=s.current.offsetWidth;h(a)}},[]),e.useEffect(()=>{var d;function a(){r.length>0&&!t&&i(!0)}const l=(d=s.current)==null?void 0:d.querySelector("input");return l==null||l.addEventListener("focus",a),()=>{l==null||l.removeEventListener("focus",a)}},[r.length,t]);function c(a){o(a??""),r.length>0&&i(!0)}function m(a){console.log("Selected option:",a),o(a),i(!1)}function w(){i(!1)}return u.jsx("div",{ref:s,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{...n,value:f,onChange:c,assistiveText:n.assistiveText}),isOpen:t,onClose:w,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:r.map(a=>u.jsx(T,{label:a,onClick:()=>m(a)},a))})})},args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,autoComplete:"off"}},x={render:n=>{const r=e.useMemo(()=>["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[]),[t,i]=e.useState(""),[f,o]=e.useState(!1),s=e.useRef(null),[p,h]=e.useState(void 0),c=e.useMemo(()=>!t||t.length<3?[]:r.filter(a=>a.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const a=s.current.offsetWidth;h(a)}},[]),e.useEffect(()=>{o(c.length>0)},[c.length]);function m(a){i(a??"")}function w(){o(!1)}return u.jsx("div",{ref:s,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-filtered",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,assistiveText:n.assistiveText,autoComplete:n.autoComplete}),isOpen:f,onClose:w,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:c.map(a=>u.jsx(T,{label:a,onClick:()=>{i(a),o(!1)}},a))})})},args:{...S.args,compactSpacing:!1,appearance:"primary"}},R={render:n=>{const r=e.useMemo(()=>["Apple","Apple2"],[]),[t,i]=e.useState(""),[f,o]=e.useState(!1),s=e.useRef(null),[p,h]=e.useState(void 0),c=e.useMemo(()=>!t||t.length<3?[]:r.filter(l=>l.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const l=s.current.offsetWidth;h(l)}},[]),e.useEffect(()=>{o(c.length>0)},[c.length]);function m(l){console.log(l),i(l??"")}function w(l){console.log("Selected option:",l),i(l),o(!1)}function a(){o(!1)}return u.jsx("div",{ref:s,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-navigation",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:f,onClose:a,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:c.map(l=>u.jsx(T,{label:l,onClick:()=>w(l)},l))})})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:n})=>{var s;const t=oe(n).getByRole("textbox");await v.click(t),y(t).toHaveFocus(),await v.type(t,"app"),await O(()=>{const p=document.getElementById("overlay-root"),h=p==null?void 0:p.querySelector("[data-dropdown-id]");y(h).toBeInTheDocument()}),await v.tab();const i=document.getElementById("overlay-root"),f=i==null?void 0:i.querySelector("[data-dropdown-id]"),o=(s=f==null?void 0:f.querySelector("ul"))==null?void 0:s.querySelectorAll("li");await O(()=>{y(o==null?void 0:o[0]).toHaveFocus()}),await v.keyboard(pe),y(o==null?void 0:o[1]).toHaveFocus(),await v.keyboard(ne),await O(()=>{y(t.value).toBe("Apple2")})}},I={render:n=>{const r=e.useMemo(()=>["Apple","Apple2"],[]),[t,i]=e.useState(""),[f,o]=e.useState(!1),s=e.useRef(null),[p,h]=e.useState(void 0),c=e.useMemo(()=>!t||t.length<3?[]:r.filter(d=>d.toLowerCase().includes(t.toLowerCase())),[t,r]);e.useEffect(()=>{if(s.current){const d=s.current.offsetWidth;h(d)}},[]),e.useEffect(()=>{o(c.length>0)},[c.length]);function m(d){i(d??"")}function w(d){i(d),o(!1)}function a(d){console.log("Searched content:",d)}function l(){o(!1)}return u.jsx("div",{ref:s,style:{width:"fit-content"},children:u.jsx(D,{dropdownId:`${n.id??"searchbar"}-dropdown`,trigger:u.jsx(b,{id:"searchbar-keyboard-search",appearance:n.appearance,value:t,compactSpacing:n.compactSpacing,onChange:m,onSearch:a,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0,autoComplete:n.autoComplete}),isOpen:f,onClose:l,position:"bottom",alignment:"start",offset:B,autofocus:!1,style:p?{width:p}:void 0,children:c.map(d=>u.jsx(T,{label:d,onClick:()=>w(d)},d))})})},args:{...S.args,compactSpacing:!1,appearance:"primary",autoComplete:"off"},play:async({canvasElement:n,args:r})=>{var h;const t=oe(n),i=t.getByRole("textbox");await v.click(i),y(i).toHaveFocus(),await v.type(i,"app"),await O(()=>{const c=document.getElementById("overlay-root"),m=c==null?void 0:c.querySelector("[data-dropdown-id]");y(m).toBeInTheDocument()}),await v.tab();const f=document.getElementById("overlay-root"),o=f==null?void 0:f.querySelector("[data-dropdown-id]"),s=(h=o==null?void 0:o.querySelector("ul"))==null?void 0:h.querySelectorAll("li");await O(()=>{y(s==null?void 0:s[0]).toHaveFocus()}),await v.keyboard(ne),await O(()=>{y(i.value).toBe("Apple")});const p=t.getByRole("button",{name:r.label});await v.click(p)}};var q,M,K;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(K=(M=S.parameters)==null?void 0:M.docs)==null?void 0:K.source}}};var $,P,G;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(P=C.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var Y,U,z;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(z=(U=x.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,Q,X;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Je=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{S as Default,I as KeyboardNavigationAndSearch,R as KeyboardNavigationWithFilteredOptions,C as WithDropdown,x as WithFilteredOptions,Je as __namedExportsOrder,ze as default};
