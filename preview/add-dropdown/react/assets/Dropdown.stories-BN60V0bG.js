import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{u as ee,b as A,c as N,a as q,O as te}from"./Overlay-BijRMGwf.js";import{r as n}from"./index-G8LIXM5I.js";import{c as oe}from"./index-DSdvzt-y.js";import{D as L}from"./Divider-B0TD5a92.js";import{I as T}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./index-DoK7PxrN.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const X=n.createContext(void 0),V=({dropdownId:i,children:t})=>e.jsx(X.Provider,{value:i,children:t});V.__docgenInfo={description:"",methods:[],displayName:"DropdownContextProvider",props:{dropdownId:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ne="_trigger_1n20h_3",re="_dropdown_1n20h_14",E={trigger:ne,dropdown:re,"dropdown-items":"_dropdown-items_1n20h_39"};let x={};const g={};class p{static generateId(){return`dropdown-${Math.random().toString(36).substr(2,9)}`}static isOpen(t){return x[t]||!1}static open(t){x[t]=!0,this.notifyListeners(t)}static close(t){delete x[t],this.notifyListeners(t)}static closeAll(){x={},Object.values(g).flat().forEach(t=>t())}static getOpenedDropdowns(){return Object.keys(x)}static closeSubMenus(t){Object.keys(x).filter(l=>l.startsWith(t)&&l!==t).forEach(l=>p.close(l))}static subscribe(t,s){return g[t]||(g[t]=[]),g[t].push(s),()=>{g[t]=g[t].filter(a=>a!==s)}}static notifyListeners(t){var s;(s=g[t])==null||s.forEach(a=>a())}}const $=i=>{const t=n.useRef(i||p.generateId()),[s,a]=n.useState(!1);n.useEffect(()=>p.subscribe(t.current,()=>{a(p.isOpen(t.current))}),[]);const l=()=>{p.open(t.current)},d=()=>{p.close(t.current)},c=()=>{s?d():l()};return{dropdownId:t.current,isOpen:s,open:l,close:d,toggle:c}},C=n.forwardRef(({trigger:i,className:t,style:s,dropdownId:a,hasParent:l,disabled:d,position:c="bottom",children:v,...h},m)=>{const{dropdownId:y,isOpen:u,open:S}=$(a),[U,M]=n.useState(c),R=n.useRef(null),W=n.useRef(null),[f,z]=n.useState(null),[w,B]=n.useState(null),[_,O]=n.useState({top:500,left:500}),{shouldRender:G,isAnimating:J}=ee(u,150),K=n.useCallback(o=>{W.current=o,z(o),typeof m=="function"?m(o):m&&(m.current=o)},[m]),Q=n.useCallback(o=>{R.current=o,B(o)},[]);return n.useEffect(()=>{if(!u)return;const o=D=>{var k;const b=D.target,Y=document.querySelectorAll("[data-dropdown-id]");Array.from(Y).some(Z=>Z.contains(b))||((k=R.current)==null?void 0:k.contains(b))||p.closeAll()};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[u]),n.useEffect(()=>{if(u&&!(!w||!f))if(l){const o=A(w,f,"right",0,l),D=N(w,f,o),b=q(o,w,f,0,D);M(o),O(b)}else{const o=c==="auto"?A(w,f,"bottom"):c,D=N(w,f,o),b=q(o,w,f,0,D);M(o),O(b)}},[u,f,w,l,c]),e.jsx(e.Fragment,{children:e.jsxs(V,{dropdownId:y,children:[e.jsx("div",{ref:Q,onClick:d?void 0:S,onMouseOver:d||!l?void 0:S,className:E.trigger,"data-disabled":d,children:i}),G&&e.jsx(te,{children:e.jsx("div",{className:oe(E.dropdown,t),"data-dropdown-id":y,"data-position":U,"data-open":J||void 0,...h,style:{...s,top:_.top,left:_.left},ref:K,children:e.jsx("ul",{className:E["dropdown-items"],role:"menu",children:v})})})]})})});C.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{dropdownId:{required:!0,tsType:{name:"string"},description:""},trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},hasParent:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right" | "auto"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"auto"'}]},description:"",defaultValue:{value:'"bottom"',computed:!1}}}};const I={"dropdown-item":"_dropdown-item_2gfxd_3","dropdown-divider":"_dropdown-divider_2gfxd_36"},r=({label:i,leftIcon:t,trailingText:s,disabled:a,onClick:l,withSeparator:d,children:c,...v})=>{const h=n.useContext(X)||null,m=`${h}-${i&&i.replace(/\s+/g,"")}`,{isOpen:y}=$(m),u=()=>{h!==null&&p.closeSubMenus(h)};return c?e.jsx(C,{hasParent:!0,dropdownId:m,disabled:a,trigger:e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:I["dropdown-item"],"data-active":y,"data-disabled":a,role:"menuitem",onMouseOver:u,children:[t&&e.jsx(T,{name:t,className:I["dropdown-item-icon"]}),e.jsx("span",{style:{flex:"2"},children:i}),e.jsx(T,{name:"arrow-chevron-right",className:I["dropdown-item-icon"]})]}),d&&e.jsx("div",{className:I["dropdown-divider"],children:e.jsx(L,{})})]}),children:c}):e.jsxs(e.Fragment,{children:[e.jsxs("li",{className:I["dropdown-item"],"data-disabled":a,role:"menuitem",...v,onMouseOver:u,onClick:l,children:[t&&e.jsx(T,{name:t,className:I["dropdown-item-icon"]}),e.jsx("span",{style:{flex:"2"},children:i}),s&&e.jsx("div",{children:s})]}),d&&e.jsx("div",{className:I["dropdown-divider"],children:e.jsx(L,{})})]})};r.__docgenInfo={description:"",methods:[],displayName:"DropdownItem",props:{label:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"string"},description:""},trailingText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLLIElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"event"}],return:{name:"void"}}},description:""},withSeparator:{required:!1,tsType:{name:"boolean"},description:""}}};const ge={title:"Dropdown",component:C,args:{}},j={args:{trigger:e.jsx("button",{style:{color:"black"},children:"Click Me!"})},render:i=>e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(C,{...i,style:{width:"250px"},children:[e.jsx(r,{label:"Messages",leftIcon:"mail",withSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(r,{label:"Actions",leftIcon:"settings",children:[e.jsxs(r,{label:"Edit",leftIcon:"edit",children:[e.jsx(r,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(r,{label:"Copy",leftIcon:"copy",trailingText:"⌘X"}),e.jsx(r,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(r,{label:"Archive",leftIcon:"archive"}),e.jsx(r,{label:"Delete",leftIcon:"delete"})]}),e.jsx(r,{label:"Help",leftIcon:"help"}),e.jsx(r,{label:"More information",leftIcon:"info",withSeparator:!0}),e.jsx(r,{label:"First option"}),e.jsx(r,{label:"Second option"}),e.jsx(r,{label:"Third option",withSeparator:!0}),e.jsx(r,{label:"Username",leftIcon:"user-circle"})]})})};var P,F,H;j.parameters={...j.parameters,docs:{...(P=j.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    trigger: <button style={{
      color: "black"
    }}>Click Me!</button>
  },
  render: args => <div style={{
    // border: "1px solid black",
    position: "relative",
    width: "800px",
    height: "200px",
    display: "flex",
    justifyContent: "space-between",
    gap: "500px"
  }}>
      <Dropdown {...args} style={{
      width: "250px"
    }}>
        <DropdownItem label="Messages" leftIcon="mail" withSeparator onClick={() => console.log("click")} />
        <DropdownItem label="Actions" leftIcon="settings">
          <DropdownItem label="Edit" leftIcon="edit">
            <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
            <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" />
            <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
          </DropdownItem>
          <DropdownItem label="Archive" leftIcon="archive" />
          <DropdownItem label="Delete" leftIcon="delete" />
        </DropdownItem>
        <DropdownItem label="Help" leftIcon="help" />
        <DropdownItem label="More information" leftIcon="info" withSeparator />
        <DropdownItem label="First option" />
        <DropdownItem label="Second option" />
        <DropdownItem label="Third option" withSeparator />
        <DropdownItem label="Username" leftIcon="user-circle" />
      </Dropdown>
      {/* <Dropdown {...args} options={optionsWithCategories} style={{ width: "250px" }}>
        <DropdownItem label="Messages" leftIcon="mail" withSeparator />
        <DropdownItem label="Actions" leftIcon="settings">
          <DropdownItem label="Edit" leftIcon="edit">
            <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
            <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" />
            <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
          </DropdownItem>
          <DropdownItem label="Archive" leftIcon="archive" />
          <DropdownItem label="Delete" leftIcon="delete" />
        </DropdownItem>
        <DropdownItem label="Help" leftIcon="help" />
        <DropdownItem label="More information" leftIcon="info" withSeparator />
        <DropdownItem label="First option" />
        <DropdownItem label="Second option" />
        <DropdownItem label="Third option" withSeparator />
        <DropdownItem label="Username" leftIcon="user-circle" />
       </Dropdown> */}
    </div>
}`,...(H=(F=j.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const Ie=["Default"];export{j as Default,Ie as __namedExportsOrder,ge as default};
