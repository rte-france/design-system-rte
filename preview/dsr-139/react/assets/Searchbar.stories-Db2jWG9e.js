import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{b as ye,T as oe}from"./keyboard-test.constants-By8W48aj.js";import{w as re,u as h,e as m,a as y}from"./index-DCXJbAaW.js";import{r as a}from"./index-G8LIXM5I.js";import{E as we}from"./keyboard.constants-BverKK8B.js";import{D as ve,a as Se}from"./DropdownItem-BAAiaVki.js";import{I as be}from"./IconButton-BoUdRPMh.js";import{T as xe}from"./TextInput-DkubhorW.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./Badge-yqZBktoR.js";import"./Link-DbCKFFRz.js";const Re=10,Ee="8px",Te="44px",Be="24px",S="4px",Ie={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}},Ce="_searchbarContainer_1uxgf_3",Oe="_searchbarWrapper_1uxgf_9",_e="_textInputWrapper_1uxgf_16",Ve="_focused_1uxgf_23",Ae="_searchButton_1uxgf_28",ke="_dropdownTrigger_1uxgf_32",g={searchbarContainer:Ce,searchbarWrapper:Oe,textInputWrapper:_e,focused:Ve,searchButton:Ae,dropdownTrigger:ke};function Fe(t,r){const e={};return t==="primary"?(e.borderRight="none",e.borderRadius=`${S} 0 0 ${S}`,r||(e.paddingLeft=Ee)):t==="secondary"&&(e.borderRadius=S),e}function De(t){return{width:Te,borderRadius:`0 ${S} ${S} 0`,height:t?Be:void 0}}const b=a.forwardRef(({onSearch:t,onChange:r,onOptionSelect:e,id:c,placeholder:i="Rechercher",disabled:o=!1,showResetButton:u=!0,appearance:l="primary",compactSpacing:n,value:s,assistiveText:w,style:A,options:O=[],onOpenChange:x,...k},se)=>{const[ce,F]=a.useState(!1),[_,ie]=a.useState(!1),[D,N]=a.useState(void 0),R=a.useRef(null),le=`${c??"searchbar"}-dropdown`,v=Ie[l],f=a.useCallback(p=>{ie(p),x==null||x(p)},[x]);a.useImperativeHandle(se,()=>({open:()=>{f(!0)},close:()=>{f(!1)}})),a.useEffect(()=>{O.length>0?f(!0):f(!1)},[O.length,f]),a.useEffect(()=>{if(_&&R.current){const p=()=>{if(R.current){const ge=R.current.getBoundingClientRect().width;N(ge)}};p();const me=setTimeout(p,0);return()=>clearTimeout(me)}else N(void 0)},[_,n]);const q=a.useCallback(p=>{r==null||r(p)},[r]),V=a.useCallback(()=>{t==null||t(s)},[t,s]),L=a.useCallback(p=>{p.key===we&&V()},[V]),H=a.useCallback(()=>{r==null||r(""),t==null||t("")},[r,t]),W=a.useCallback(()=>{o||F(!0)},[o]),j=a.useCallback(()=>{F(!1)},[]),pe=a.useCallback(()=>{f(!1)},[f]),ue=a.useCallback(p=>{f(!1),e==null||e(p)},[f,e]),K=a.useCallback(p=>{R.current=p},[]),de=a.useMemo(()=>({ref:K,disabled:o,value:s,onChange:q,onKeyUp:t?L:void 0,onFocus:W,onBlur:j,showRightIcon:u,rightIconAction:"clean",onRightIconClick:H,assistiveTextLabel:w,compactSpacing:n,placeholder:i,leftIcon:v.showLeftIcon?"search":void 0,...k}),[K,o,s,q,t,L,W,j,u,H,w,n,i,v.showLeftIcon,k]),he=a.useMemo(()=>({...Fe(l,v.showLeftIcon),...A??{}}),[l,v.showLeftIcon,A]),fe=a.useMemo(()=>De(n),[n]);return d.jsx("div",{className:g.searchbarContainer,role:"search","data-appearance":l,children:d.jsx("div",{className:g.searchbarWrapper,children:d.jsx("div",{className:`${g.textInputWrapper} ${ce?g.focused:""}`,"data-disabled":o,children:d.jsx(ve,{dropdownId:le,isOpen:_,onClose:pe,autofocus:!1,offset:Re,style:D!==void 0?{width:`${D}px`}:void 0,trigger:d.jsxs("div",{className:g.dropdownTrigger,children:[d.jsx(xe,{id:c??"",...de,style:he}),v.showSearchButton&&d.jsx(be,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:V,disabled:o,"aria-label":"Search",className:g.searchButton,compactSpacing:n,style:fe})]}),children:O.map(p=>d.jsx(Se,{label:p,onClick:()=>ue(p)},p))})})})})});b.__docgenInfo={description:"",methods:[{name:"open",docblock:null,modifiers:[],params:[],returns:null},{name:"close",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Rechercher"',computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const nt={title:"Searchbar",component:b,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text"},value:{control:"text"},disabled:{control:"boolean"}}},E={args:{id:"searchbar-default",appearance:"primary",showResetButton:!0,assistiveText:"",value:"",disabled:!1}},T={args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,options:["option1","option2","option3"],onOptionSelect:t=>{console.log("Selected option:",t)}}},B={render:t=>{const r=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[e,c]=a.useState(""),i=a.useRef(null),o=a.useMemo(()=>!e||e.length<3?[]:r.filter(n=>n.toLowerCase().includes(e.toLowerCase())),[e]);function u(n){c(n??"")}function l(n){var s;console.log("Selected option:",n),c(n),(s=i.current)==null||s.close()}return d.jsx(b,{ref:i,id:"searchbar-filtered",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:u,options:o,onOptionSelect:l,assistiveText:"Type at least 3 characters to filter options"})},args:{compactSpacing:!1,appearance:"primary"}},I={render:t=>{const r=["Apple","Apple2"],[e,c]=a.useState(""),i=a.useRef(null),o=a.useMemo(()=>!e||e.length<3?[]:r.filter(n=>n.toLowerCase().includes(e.toLowerCase())),[e]);function u(n){console.log(n),c(n??"")}function l(n){var s;console.log("Selected option:",n),c(n),(s=i.current)==null||s.close()}return d.jsx(b,{ref:i,id:"searchbar-keyboard-navigation",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:u,options:o,onOptionSelect:l,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:t})=>{var u;const e=re(t).getByRole("textbox");await h.click(e),m(e).toHaveFocus(),await h.type(e,"app"),await y(()=>{const l=document.getElementById("overlay-root"),n=l==null?void 0:l.querySelector("[data-dropdown-id]");m(n).toBeInTheDocument()}),await h.tab();const c=document.getElementById("overlay-root"),i=c==null?void 0:c.querySelector("[data-dropdown-id]"),o=(u=i==null?void 0:i.querySelector("ul"))==null?void 0:u.querySelectorAll("li");await y(()=>{m(o==null?void 0:o[0]).toHaveFocus()}),await h.keyboard(ye),m(o==null?void 0:o[1]).toHaveFocus(),await h.keyboard(oe),await y(()=>{m(e.value).toBe("Apple2")})}},C={render:t=>{const r=["Apple","Apple2"],[e,c]=a.useState(""),i=a.useRef(null),o=a.useMemo(()=>!e||e.length<3?[]:r.filter(s=>s.toLowerCase().includes(e.toLowerCase())),[e]);function u(s){c(s??"")}function l(s){var w;c(s),(w=i.current)==null||w.close()}function n(s){console.log("Searched content:",s)}return d.jsx(b,{ref:i,id:"searchbar-keyboard-search",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:u,options:o,onOptionSelect:l,onSearch:n,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:t})=>{var l;const r=re(t),e=r.getByRole("textbox");await h.click(e),m(e).toHaveFocus(),await h.type(e,"app"),await y(()=>{const n=document.getElementById("overlay-root"),s=n==null?void 0:n.querySelector("[data-dropdown-id]");m(s).toBeInTheDocument()}),await h.tab();const c=document.getElementById("overlay-root"),i=c==null?void 0:c.querySelector("[data-dropdown-id]"),o=(l=i==null?void 0:i.querySelector("ul"))==null?void 0:l.querySelectorAll("li");await y(()=>{m(o==null?void 0:o[0]).toHaveFocus()}),await h.keyboard(oe),await y(()=>{m(e.value).toBe("Apple")});const u=r.getByRole("button",{name:"Search"});await h.click(u)}};var M,G,$;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    id: "searchbar-default",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "",
    value: "",
    disabled: false
  }
}`,...($=(G=E.parameters)==null?void 0:G.docs)==null?void 0:$.source}}};var P,Y,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    id: "searchbar-with-dropdown",
    appearance: "primary",
    showResetButton: true,
    assistiveText: "Select a filter option before typing",
    value: "",
    disabled: false,
    options: ["option1", "option2", "option3"],
    onOptionSelect: (option: string) => {
      console.log("Selected option:", option);
    }
  }
}`,...(U=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var z,J,Q;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2", "Banana", "Banana2", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Kiwi", "Lemon"];
    const [searchValue, setSearchValue] = useState("");
    const searchbarRef = useRef<SearchbarRef>(null);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      searchbarRef.current?.close();
    }
    return <Searchbar ref={searchbarRef} id="searchbar-filtered" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} onOptionSelect={handleOptionSelect} assistiveText="Type at least 3 characters to filter options" />;
  },
  args: {
    compactSpacing: false,
    appearance: "primary"
  }
}`,...(Q=(J=B.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const searchbarRef = useRef<SearchbarRef>(null);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    function handleChange(value: string | undefined) {
      console.log(value);
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      console.log("Selected option:", option);
      setSearchValue(option);
      searchbarRef.current?.close();
    }
    return <Searchbar ref={searchbarRef} id="searchbar-keyboard-navigation" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} onOptionSelect={handleOptionSelect} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />;
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
}`,...(ee=(Z=I.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => {
    const allOptions = ["Apple", "Apple2"];
    const [searchValue, setSearchValue] = useState("");
    const searchbarRef = useRef<SearchbarRef>(null);
    const filteredOptions = useMemo(() => {
      if (!searchValue || searchValue.length < 3) {
        return [];
      }
      return allOptions.filter(option => option.toLowerCase().includes(searchValue.toLowerCase()));
    }, [searchValue]);
    function handleChange(value: string | undefined) {
      setSearchValue(value ?? "");
    }
    function handleOptionSelect(option: string) {
      setSearchValue(option);
      searchbarRef.current?.close();
    }
    function handleSearch(value: string | undefined) {
      console.log("Searched content:", value);
    }
    return <Searchbar ref={searchbarRef} id="searchbar-keyboard-search" appearance={args.appearance} value={searchValue} compactSpacing={args.compactSpacing} onChange={handleChange} options={filteredOptions} onOptionSelect={handleOptionSelect} onSearch={handleSearch} assistiveText="Type at least 3 characters to filter options" showResetButton={true} />;
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
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const ot=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions","KeyboardNavigationAndSearch"];export{E as Default,C as KeyboardNavigationAndSearch,I as KeyboardNavigationWithFilteredOptions,T as WithDropdown,B as WithFilteredOptions,ot as __namedExportsOrder,nt as default};
