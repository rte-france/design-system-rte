import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import{b as me,T as he}from"./keyboard-test.constants-By8W48aj.js";import{w as ge,u as v,e as S,a as V}from"./index-DCXJbAaW.js";import{r as n}from"./index-G8LIXM5I.js";import{E as we}from"./keyboard.constants-BverKK8B.js";import{D as ye,a as ve}from"./DropdownItem-BAAiaVki.js";import{I as Se}from"./IconButton-BoUdRPMh.js";import{T as be}from"./TextInput-DkubhorW.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CwMsU-JP.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./index-DSdvzt-y.js";import"./Badge-yqZBktoR.js";import"./Link-DbCKFFRz.js";function Oe(t,s){const[e,l]=n.useState(s),c=t!==void 0,a=c?t:e,o=n.useCallback(p=>{c||l(p)},[c]);return[a,o,c]}const xe="_searchbarContainer_1uxgf_3",Ie="_searchbarWrapper_1uxgf_9",Te="_textInputWrapper_1uxgf_16",Ee="_focused_1uxgf_23",Be="_searchButton_1uxgf_28",_e="_dropdownTrigger_1uxgf_32",g={searchbarContainer:xe,searchbarWrapper:Ie,textInputWrapper:Te,focused:Ee,searchButton:Be,dropdownTrigger:_e},Ce=10,De="8px",Re="44px",Ve="24px",b="4px",Ae={primary:{showSearchButton:!0,showLeftIcon:!1},secondary:{showSearchButton:!1,showLeftIcon:!0}};function Fe(t,s){const e={};return t==="primary"?(e.borderRight="none",e.borderRadius=`${b} 0 0 ${b}`,s||(e.paddingLeft=De)):t==="secondary"&&(e.borderRadius=b),e}function ke(t){return{width:Re,borderRadius:`0 ${b} ${b} 0`,height:t?Ve:void 0}}const _=n.forwardRef(({onSearch:t,onChange:s,onOptionSelect:e,id:l,placeholder:c="Rechercher",label:a,disabled:o=!1,name:p,showResetButton:d=!0,appearance:r="primary",compactSpacing:m,value:O,assistiveText:A,style:F,options:C=[],isOpen:oe,onOpenChange:f,...k},w)=>{const[re,N]=n.useState(!1),[D,h,W]=Oe(oe,!1),[L,q]=n.useState(void 0),x=n.useRef(null),se=`${l??"searchbar"}-dropdown`,y=Ae[r];n.useEffect(()=>{!W&&C.length>0&&h(!0)},[C.length,W,h]),n.useEffect(()=>{if(D&&x.current){const i=()=>{if(x.current){const fe=x.current.getBoundingClientRect().width;q(fe)}};i();const de=setTimeout(i,0);return()=>clearTimeout(de)}else q(void 0)},[D,m]);const H=n.useCallback(i=>{s==null||s(i)},[s]),R=n.useCallback(()=>{t==null||t(O)},[t,O]),j=n.useCallback(i=>{i.key===we&&R()},[R]),K=n.useCallback(()=>{s==null||s(""),t==null||t("")},[s,t]),G=n.useCallback(()=>{o||N(!0)},[o]),M=n.useCallback(()=>{N(!1)},[]),ie=n.useCallback(()=>{h(!1),f==null||f(!1)},[h,f]),ce=n.useCallback(i=>{h(!1),f==null||f(!1),e==null||e(i)},[h,f,e]),$=n.useCallback(i=>{x.current=i,typeof w=="function"?w(i):w&&(w.current=i)},[w]),le=n.useMemo(()=>({ref:$,label:a,disabled:o,name:p,value:O,onChange:H,onKeyUp:t?j:void 0,onFocus:G,onBlur:M,showRightIcon:d,rightIconAction:"clean",onRightIconClick:K,assistiveTextLabel:A,compactSpacing:m,placeholder:c,leftIcon:y.showLeftIcon?"search":void 0,...k}),[$,a,o,p,O,H,t,j,G,M,d,K,A,m,c,y.showLeftIcon,k]),pe=n.useMemo(()=>({...Fe(r,y.showLeftIcon),...F??{}}),[r,y.showLeftIcon,F]),ue=n.useMemo(()=>ke(m),[m]);return u.jsx("div",{className:g.searchbarContainer,role:"search","data-appearance":r,children:u.jsx("div",{className:g.searchbarWrapper,children:u.jsx("div",{className:`${g.textInputWrapper} ${re?g.focused:""}`,"data-disabled":o,children:u.jsx(ye,{dropdownId:se,isOpen:D,onClose:ie,autofocus:!1,offset:Ce,style:L!==void 0?{width:`${L}px`}:void 0,trigger:u.jsxs("div",{className:g.dropdownTrigger,children:[u.jsx(be,{id:l??"",...le,style:pe}),y.showSearchButton&&u.jsx(Se,{name:"search",size:"m",variant:"primary",appearance:"filled",onClick:R,disabled:o,"aria-label":"Search",className:g.searchButton,compactSpacing:m,style:ue})]}),children:C.map(i=>u.jsx(ve,{label:i,onClick:()=>ce(i)},i))})})})})});_.__docgenInfo={description:"",methods:[],displayName:"Searchbar",props:{onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(input: string | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},name:"input"}],return:{name:"void"}}},description:""},onOptionSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: string) => void",signature:{arguments:[{type:{name:"string"},name:"option"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Rechercher"',computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showResetButton:{defaultValue:{value:"true",computed:!1},required:!1},appearance:{defaultValue:{value:'"primary"',computed:!1},required:!1},options:{defaultValue:{value:"[]",computed:!1},required:!1}},composes:["CoreSearchBarProps","Omit"]};const at={title:"Searchbar",component:_,tags:["autodocs"],argTypes:{id:{control:"text"},appearance:{control:"select",options:["primary","secondary"]},compactSpacing:{control:"boolean"},label:{control:"text"},showResetButton:{control:"boolean",defaultValue:!0},assistiveText:{control:"text"},value:{control:"text"},disabled:{control:"boolean"},name:{control:"text"}}},I={args:{id:"searchbar-default",appearance:"primary",label:"",showResetButton:!0,assistiveText:"",value:"",disabled:!1,name:""}},T={args:{id:"searchbar-with-dropdown",appearance:"primary",showResetButton:!0,assistiveText:"Select a filter option before typing",value:"",disabled:!1,name:"search-dropdown",placeholder:"Search anything",options:["option1","option2","option3"],onOptionSelect:t=>{console.log("Selected option:",t)}}},E={render:t=>{const s=["Apple","Apple2","Banana","Banana2","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Kiwi","Lemon"],[e,l]=n.useState(""),[c,a]=n.useState(!1),o=n.useMemo(()=>!e||e.length<3?[]:s.filter(r=>r.toLowerCase().includes(e.toLowerCase())),[e]);n.useEffect(()=>{o.length>0?a(!0):a(!1)},[o]);function p(r){l(r??"")}function d(r){console.log("Selected option:",r),l(r),a(!1)}return u.jsx(_,{id:"searchbar-filtered",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:p,options:o,isOpen:c,onOpenChange:a,onOptionSelect:d,assistiveText:"Type at least 3 characters to filter options"})},args:{compactSpacing:!1,appearance:"primary"}},B={render:t=>{const s=["Apple","Apple2"],[e,l]=n.useState(""),[c,a]=n.useState(!1),o=n.useMemo(()=>!e||e.length<3?[]:s.filter(r=>r.toLowerCase().includes(e.toLowerCase())),[e]);n.useEffect(()=>{o.length>0?a(!0):a(!1)},[o]);function p(r){l(r??"")}function d(r){console.log("Selected option:",r),l(r),a(!1)}return u.jsx(_,{id:"searchbar-keyboard-navigation",appearance:t.appearance,value:e,compactSpacing:t.compactSpacing,onChange:p,options:o,isOpen:c,onOpenChange:a,onOptionSelect:d,assistiveText:"Type at least 3 characters to filter options",showResetButton:!0})},args:{compactSpacing:!1,appearance:"primary"},play:async({canvasElement:t})=>{var o;const e=ge(t).getByRole("textbox");await v.click(e),S(e).toHaveFocus(),await v.type(e,"app"),await V(()=>{const p=document.getElementById("overlay-root"),d=p==null?void 0:p.querySelector("[data-dropdown-id]");S(d).toBeInTheDocument()}),await v.tab();const l=document.getElementById("overlay-root"),c=l==null?void 0:l.querySelector("[data-dropdown-id]"),a=(o=c==null?void 0:c.querySelector("ul"))==null?void 0:o.querySelectorAll("li");await V(()=>{S(a==null?void 0:a[0]).toHaveFocus()}),await v.keyboard(me),S(a==null?void 0:a[1]).toHaveFocus(),await v.keyboard(he),await V(()=>{S(e.value).toBe("Apple2")})}};var P,Y,U;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:U.source}}};var z,J,Q;T.parameters={...T.parameters,docs:{...(z=T.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=T.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=E.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ae;B.parameters={...B.parameters,docs:{...(te=B.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=B.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};const ot=["Default","WithDropdown","WithFilteredOptions","KeyboardNavigationWithFilteredOptions"];export{I as Default,B as KeyboardNavigationWithFilteredOptions,T as WithDropdown,E as WithFilteredOptions,ot as __namedExportsOrder,at as default};
