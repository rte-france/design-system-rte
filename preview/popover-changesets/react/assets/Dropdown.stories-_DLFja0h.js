import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-G8LIXM5I.js";import{D as a,a as o}from"./DropdownItem-ALaHjwwF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./keyboard.constants-KvjFtZ2v.js";import"./useActiveKeyboard-D-jDyZO1.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-BSes1ir3.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";import"./useAnimatedMount-_zPBpYOt.js";import"./index-DSdvzt-y.js";const k={title:"Dropdown (développement en cours)",id:"Dropdown",tags:["autodocs"],component:a,argTypes:{position:{control:"select",options:["top","bottom","left","right"],defaultValue:"bottom"}}},t={args:{},render:i=>{const[p,l]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{}),e.jsx("div",{style:{position:"relative",width:"800px",height:"200px",display:"flex",justifyContent:"space-between",gap:"500px"},children:e.jsxs(a,{...i,onClose:()=>{l(!1)},trigger:e.jsx("button",{onClick:()=>l(!0),style:{color:"black"},children:"Click Me!"}),style:{width:"250px"},isOpen:p,children:[e.jsx(o,{label:"Messages",leftIcon:"mail",hasSeparator:!0,onClick:()=>console.log("click")}),e.jsxs(o,{label:"Actions",leftIcon:"settings",children:[e.jsxs(o,{label:"Edit",leftIcon:"edit",children:[e.jsx(o,{label:"Cut",leftIcon:"cut",trailingText:"⌘X"}),e.jsx(o,{label:"Copy",leftIcon:"copy",trailingText:"⌘X",onClick:()=>console.log("click")}),e.jsx(o,{label:"Paste",leftIcon:"paste",trailingText:"⌘V"})]}),e.jsx(o,{label:"Archive",leftIcon:"archive"}),e.jsx(o,{label:"Delete",leftIcon:"delete"})]}),e.jsx(o,{label:"Help",leftIcon:"help"}),e.jsx(o,{label:"More information",leftIcon:"info",hasSeparator:!0}),e.jsx(o,{label:"First option",hasIndent:!0}),e.jsx(o,{label:"Second option",hasIndent:!0}),e.jsx(o,{label:"Third option",hasSeparator:!0,hasIndent:!0}),e.jsx(o,{label:"Username",leftIcon:"user-circle",disabled:!0})]})})]})}};var n,r,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {},
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <div>
          <span style={{
          fontFamily: "sans-serif",
          marginBottom: 16,
          border: "1px solid #F4922B",
          padding: 8,
          borderRadius: 5,
          backgroundColor: "#FAFFC1",
          margin: 0
        }}>
            Ce composant est en cours de développement et n'est pas encore disponible
          </span>
        </div>
        <br />

        <div style={{
        position: "relative",
        width: "800px",
        height: "200px",
        display: "flex",
        justifyContent: "space-between",
        gap: "500px"
      }}>
          <Dropdown {...args} onClose={() => {
          setIsOpen(false);
        }} trigger={<button onClick={() => setIsOpen(true)} style={{
          color: "black"
        }}>
                Click Me!
              </button>} style={{
          width: "250px"
        }} isOpen={isOpen}>
            <DropdownItem label="Messages" leftIcon="mail" hasSeparator onClick={() => console.log("click")} />
            <DropdownItem label="Actions" leftIcon="settings">
              <DropdownItem label="Edit" leftIcon="edit">
                <DropdownItem label="Cut" leftIcon="cut" trailingText="⌘X" />
                <DropdownItem label="Copy" leftIcon="copy" trailingText="⌘X" onClick={() => console.log("click")} />
                <DropdownItem label="Paste" leftIcon="paste" trailingText="⌘V" />
              </DropdownItem>
              <DropdownItem label="Archive" leftIcon="archive" />
              <DropdownItem label="Delete" leftIcon="delete" />
            </DropdownItem>
            <DropdownItem label="Help" leftIcon="help" />
            <DropdownItem label="More information" leftIcon="info" hasSeparator />
            <DropdownItem label="First option" hasIndent />
            <DropdownItem label="Second option" hasIndent />
            <DropdownItem label="Third option" hasSeparator hasIndent />
            <DropdownItem label="Username" leftIcon="user-circle" disabled />
          </Dropdown>
        </div>
      </>;
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,k as default};
