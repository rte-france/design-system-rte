import{j as f}from"./jsx-runtime-Cf8x2fCZ.js";import{b as ve,T as ce}from"./keyboard-test.constants-By8W48aj.js";import{w as le,u as h,e as m,a as S}from"./index-DCXJbAaW.js";import{r as n}from"./index-G8LIXM5I.js";import{E as Oe}from"./keyboard.constants-BverKK8B.js";import{D as be,a as Ie}from"./DropdownItem-BAAiaVki.js";import{I as xe}from"./IconButton-BoUdRPMh.js";import{T as Ee}from"./TextInput-DkubhorW.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./Badge-yqZBktoR.js";import"./Link-DbCKFFRz.js";function Te(t,r){const[e,i]=n.useState(r),c=t!==void 0,a=c?t:e,o=n.useCallback(l=>{c||i(l)},[c]);return[a,o,c]}const Be="_searchbarContainer_1uxgf_3",Ce="_searchbarWrapper_1uxgf_9",De="_textInputWrapper_1uxgf_16",Re="_focused_1uxgf_23",_e="_searchButton_1uxgf_28",Ve="_dropdownTrigger_1uxgf_32",y={searchbarContainer:Be,searchbarWrapper:Ce,textInputWrapper:De,focused:Re,searchButton:_e,dropdownTrigger:Ve},Ae=10,ke="8px",Fe="44px",Ne="24px",b="4px",qe={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}};function Le(t,r){const e={};return t==="primary"?(e.borderRight="none",e.borderRadius=`${b} 0 0 ${b}`,r||(e.paddingLeft=ke)):t==="secondary"&&(e.borderRadius=b),e}function He(t){return{width:Fe,borderRadius:`0 ${b} ${b} 0`,height:t?Ne:void 0}}const I=n.forwardRef(({onSearch:t,onChange:r,onOptionSelect:e,id:i,placeholder:c="Rechercher",label:a,disabled:o=!1,name:l,showResetButton:u=!0,appearance:s="primary",compactSpacing:d,value:x,assistiveText:k,style:F,options:_=[],isOpen:pe,onOpenChange:w,...N},v)=>{const[ue,q]=n.useState(!1),[V,g,L]=Te(pe,!1),[H,W]=n.useState(void 0),E=n.useRef(null),de=`${i??"searchbar"}-dropdown`,O=qe[s];n.useEffect(()=>{!L&&_.length>0&&g(!0)},[_.length,L,g]),n.useEffect(()=>{if(V&&E.current){const p=()=>{if(E.current){const Se=E.current.getBoundingClientRect().width;W(Se)}};p();const ye=setTimeout(p,0);return()=>clearTimeout(ye)}else W(void 0)},[V,d]);const j=n.useCallback(p=>{r==null||r(p)},[r]),A=n.useCallback(()=>{t==null||t(x)},[t,x]),K=n.useCallback(p=>{p.key===Oe&&A()},[A]),M=n.useCallback(()=>{r==null||r(""),t==null||t("")},[r,t]),G=n.useCallback(()=>{o||q(!0)},[o]),$=n.useCallback(()=>{q(!1)},[]),fe=n.useCallback(()=>{g(!1),w==null||w(!1)},[g,w]),he=n.useCallback(p=>{g(!1),w==null||w(!1),e==null||e(p)},[g,w,e]),P=n.useCallback(p=>{E.current=p,typeof v=="function"?v(p):v&&(v.current=p)},[v]),me=n.useMemo(()=>({ref:P,label:a,disabled:o,name:l,value:x,onChange:j,onKeyUp:t?K:void 0,onFocus:G,onBlur:$,showRightIcon:u,rightIconAction:"clean",onRightIconClick:M,assistiveTextLabel:k,compactSpacing:d,placeholder:c,leftIcon:O.showLeftIcon?"search":void 0,...N}),[P,a,o,l,x,j,t,K,G,$,u,M,k,d,c,O.showLeftIcon,N]),we=n.useMemo(()=>({...Le(s,O.showLeftIcon),...F??{}}),[s,O.showLeftIcon,F]),ge=n.useMemo(()=>He(d),[d]);return f.jsx("div",{className:y.searchbarContainer,role:"search","data-appearance":s,children:f.jsx("div",{className:y.searchbarWrapper,children:f.jsx("div",{className:`${y.textInputWrapper} ${ue?y.focused:""}`,"data-disabled":o,children:f.jsx(be,{dropdownId:de,isOpen:V,onClose:fe,autofocus:!1,offset:Ae,style:H!==void 0?{width:`${H}px`}:void 0,trigger:f.jsxs("div",{className:y.dropdownTrigger,children:[f.jsx(Ee,{id:i??"",...me,style:we}),O.showSearchButton&&f.jsx(xe,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:A,disabled:o,"aria-label":"Search",className:y.searchButton,compactSpacing:d,style:ge})]}),children:_.map(p=>f.jsx(Ie,{label:p,onClick:()=>he(p)},p))})})})})});I.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Rechercher"',computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const it={title:"Searchbar",component:I,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},label:{control:"text"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},name:{control:"text"}}},T={args:{id:"searchbar-default",appearance:"primary",label:"",showResetButton:!0,assistiveText:"",value:"",disabled:!1,name:""}},B={args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,name:"search-dropdown",placeholder:"Search anything",options:["option1","option2","option3"],onOptionSelect:t=>{console.log("Selected option:",t)}}},C={render:t=>{const r=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[e,i]=n.useState(""),[c,a]=n.useState(!1),o=n.useMemo(()=>!e||e.length<3?[]:r.filter(s=>s.toLowerCase().includes(e.toLowerCase())),[e]);n.useEffect(()=>{o.length>0?a(!0):a(!1)},[o]);function l(s){i(s??"")}function u(s){console.log("Selected option:",s),i(s),a(!1)}return f.jsx(I,{id:"searchbar-filtered",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:l,options:o,isOpen:c,onOpenChange:a,onOptionSelect:u,assistiveText:"Type at least 3 characters to filter options"})},args:{compactSpacing:!1,appearance:"primary"}},D={render:t=>{const r=["Apple","Apple2"],[e,i]=n.useState(""),[c,a]=n.useState(!1),o=n.useMemo(()=>!e||e.length<3?[]:r.filter(s=>s.toLowerCase().includes(e.toLowerCase())),[e]);n.useEffect(()=>{o.length>0?a(!0):a(!1)},[o]);function l(s){i(s??"")}function u(s){console.log("Selected option:",s),i(s),a(!1)}return f.jsx(I,{id:"searchbar-keyboard-navigation",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:l,options:o,isOpen:c,onOpenChange:a,onOptionSelect:u,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:t})=>{var o;const e=le(t).getByRole("textbox");await h.click(e),m(e).toHaveFocus(),await h.type(e,"app"),await S(()=>{const l=document.getElementById("overlay-root"),u=l==null?void 0:l.querySelector("[data-dropdown-id]");m(u).toBeInTheDocument()}),await h.tab();const i=document.getElementById("overlay-root"),c=i==null?void 0:i.querySelector("[data-dropdown-id]"),a=(o=c==null?void 0:c.querySelector("ul"))==null?void 0:o.querySelectorAll("li");await S(()=>{m(a==null?void 0:a[0]).toHaveFocus()}),await h.keyboard(ve),m(a==null?void 0:a[1]).toHaveFocus(),await h.keyboard(ce),await S(()=>{m(e.value).toBe("Apple2")})}},R={render:t=>{const r=["Apple","Apple2"],[e,i]=n.useState(""),[c,a]=n.useState(!1),o=n.useMemo(()=>!e||e.length<3?[]:r.filter(d=>d.toLowerCase().includes(e.toLowerCase())),[e]);n.useEffect(()=>{o.length>0?a(!0):a(!1)},[o]);function l(d){i(d??"")}function u(d){i(d),a(!1)}function s(d){console.log("Searched content:",d)}return f.jsx(I,{id:"searchbar-keyboard-search",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:l,options:o,isOpen:c,onOpenChange:a,onOptionSelect:u,onSearch:s,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:t})=>{var l;const r=le(t),e=r.getByRole("textbox");await h.click(e),m(e).toHaveFocus(),await h.type(e,"app"),await S(()=>{const u=document.getElementById("overlay-root"),s=u==null?void 0:u.querySelector("[data-dropdown-id]");m(s).toBeInTheDocument()}),await h.tab();const i=document.getElementById("overlay-root"),c=i==null?void 0:i.querySelector("[data-dropdown-id]"),a=(l=c==null?void 0:c.querySelector("ul"))==null?void 0:l.querySelectorAll("li");await S(()=>{m(a==null?void 0:a[0]).toHaveFocus()}),await h.keyboard(ce),await S(()=>{m(e.value).toBe("Apple")});const o=r.getByRole("button",{name:"Search"});await h.click(o)}};var Y,U,z;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    id: "searchbar-default",
    appearance: "primary",
    label: "",
    showResetButton: true,
    assistiveText: "",
    value: "",
    disabled: false,
    name: ""
  }
}`,...(z=(U=T.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,Q,X;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    id: "searchbar-with-dropdown",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Select a filter option before typing",
    value: "",
    disabled: false,
    name: "search-dropdown",
    placeholder: "Search anything",
    options: ["option1", "option2", "option3"],
    onOptionSelect: (option: string) => {
      console.log("Selected option:", option);
    }
  }
}`,...(X=(Q=B.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2", "Banana", "Banana2", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsDropdownOpen(false);
    }
    return <Searchbar id="searchbar-filtered" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} onOptionSelect={handleOptionSelect} assistiveText="Type at least 3 characters to filter options" />;
  },
  args: {
    compactSpacing: false,
    appearance: "primary"
  }
}`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,oe;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      setIsDropdownOpen(false);
    }
    return <Searchbar id="searchbar-keyboard-navigation" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} onOptionSelect={handleOptionSelect} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />;
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
}`,...(oe=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,se,ie;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    useEffect(() => {
      if (filteredOptions.length > 0) {
        setIsDropdownOpen(true);
      } else {
        setIsDropdownOpen(false);
      }
    }, [filteredOptions]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      setSearchValue(option);
      setIsDropdownOpen(false);
    }
    function handleSearch(value: string | undefined) {
      console.log("Searched content:", value);
    }
    return <Searchbar id="searchbar-keyboard-search" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} isOpen={isDropdownOpen} onOpenChange={setIsDropdownOpen} onOptionSelect={handleOptionSelect} onSearch={handleSearch} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />;
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
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await waitFor(() => {
      expect(input.value).toBe("Apple");
    });
    const searchButton = canvas.getByRole("button", {
      name: "Search"
    });
    await userEvent.click(searchButton);
  }
}`,...(ie=(se=R.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const ct=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{T as Default,R as KeyboardNavigationAndSearch,D as KeyboardNavigationWithFilteredOptions,B as WithDropdown,C as WithFilteredOptions,ct as __namedExportsOrder,it as default};
