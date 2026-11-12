import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import"./timepicker.constants-CynrC_9x.js";import{D as m,a as We,g as Qe}from"./Drawer-C_Q6iqef.js";import{f as Ne}from"./log-handlers-BGrW2Sgz.js";import{b as _e}from"./keyboard-test.constants-CC9zMOdc.js";import{f as H,w as i,u,e as r,a as p}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{a as Ge,e as Ke}from"./testing.utils-DmLcTX3r.js";import{B as d}from"./Button-B3EnjUD7.js";import{I as Ye}from"./IconButton-CJDki2nw.js";import"./index-yBjzXJbu.js";import"./log-handlers-Yqqou6H5.js";import"./useFreezeNavigation-Df2rzoup.js";import"./icon.constants-CvX5SV3k.js";import"./Divider-BVZUrQ0d.js";import"./Icon-DBkoQNiA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useFocusTrap-BZu4_Auv.js";import"./keyboard.constants-D1KJQ2-m.js";import"./dom.constants-Bk0jVzGk.js";import"./useKeydownEscape-mLuzHv9M.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-BLHw34Di.js";import"./keyboard.constants-BverKK8B.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const Mn={title:"Composants/Drawer/Drawer",component:m,tags:["autodocs"],argTypes:{id:{control:"text"},title:{control:"text"},icon:{control:"text"},iconAppearance:{control:"select",options:["outlined","filled"]},closeOnOverlayClick:{control:"boolean"},closeOnEscape:{control:"boolean"},primaryButtonLabel:{control:"text"},secondaryButtonLabel:{control:"text"},isCollapsible:{control:"boolean"},position:{control:"select",options:["modal","responsive"]},fixedHeader:{control:"boolean"},showHeader:{control:"boolean"},showFooter:{control:"boolean"},onClickPrimaryButton:{action:"primary click",control:!1},onClickSecondaryButton:{action:"secondary click",control:!1}}},ze=e=>{r(e).toBeTruthy(),r(e).toHaveAttribute("aria-hidden","true")},F=e=>{r(e).toBeTruthy(),ze(e.querySelector("svg"))},Je=e=>e.querySelector('[class*="base-header-text"] > svg'),Xe={fontFamily:"arial",fontSize:"14px",lineHeight:"20px",color:"var(--content-primary)"},s={tags:["skip-ci"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:H(),onClickSecondaryButton:H(),content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Body content."})},render:e=>{const[a,n]=g.useState(e.isOpen),o=()=>{n(c=>!c)},l=()=>{var c;(c=e.onClickPrimaryButton)==null||c.call(e),n(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)}),t.jsx(m,{...e,isOpen:a,onClose:()=>n(!1),onClickToggle:o,onClickPrimaryButton:l})]})}},y={tags:["!autodocs"],args:{...s.args,id:"modal-background-screen-reader-check",title:"Modal drawer",position:"modal"},render:e=>{const[a,n]=g.useState(!1),o=()=>{var l;(l=e.onClickPrimaryButton)==null||l.call(e),n(!1)};return t.jsxs(t.Fragment,{children:[t.jsxs("main",{style:Xe,"aria-label":"Page principale derrière l'overlay",children:[t.jsx("h1",{style:{fontSize:"20px",margin:"0 0 12px"},children:"Page d'accueil — contenu masqué visuellement"}),t.jsx("p",{style:{margin:"0 0 12px"},children:"Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert."}),t.jsx("button",{type:"button",style:{margin:"0 12px 12px 0"},onClick:()=>console.log("background action"),children:"Action page — ne pas atteindre en modal"}),t.jsx("a",{href:"#background-page-marker",children:"Lien page arrière-plan — repère a11y"}),t.jsx("div",{style:{marginTop:"16px"},children:t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)})})]}),t.jsx(m,{...e,isOpen:a,onClose:()=>n(!1),onClickToggle:()=>n(l=>!l),onClickPrimaryButton:o})]})},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const n=e.querySelector("main");r(n).toBeTruthy(),await p(()=>{r(i(document.body).getByRole("dialog",{name:"Modal drawer"})).toBeInTheDocument(),r(n==null?void 0:n.closest('[aria-hidden="true"]')).toBeTruthy(),r(n==null?void 0:n.closest("[inert]")).toBeTruthy();const o=i(document.body);r(o.queryByRole("heading",{name:/Page d'accueil/})).not.toBeInTheDocument(),r(o.queryByRole("button",{name:"Action page — ne pas atteindre en modal"})).not.toBeInTheDocument(),r(o.queryByRole("link",{name:/Lien page arrière-plan/})).not.toBeInTheDocument()})}},w={tags:["!autodocs"],args:{isOpen:!1,onClose(){console.log("Drawer closed")},id:"example-drawer",title:"Example Drawer",icon:"settings",iconAppearance:"outlined",primaryButtonLabel:"Confirm",secondaryButtonLabel:"Cancel",isCollapsible:!1,position:"modal",fixedHeader:!0,showHeader:!0,width:"400px",isClosable:!0,onClickToggle(){console.log("Toggle drawer")},onClickPrimaryButton:H(),onClickSecondaryButton:H(),content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim, pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus, maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla. Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit amet, luctus sed ligula."})},render:e=>{const[a,n]=g.useState(e.isOpen),o=()=>{n(c=>!c)},l=()=>{var c;(c=e.onClickPrimaryButton)==null||c.call(e),n(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)}),t.jsx(m,{...e,isOpen:a,onClose:()=>n(!1),onClickToggle:o,onClickPrimaryButton:l})]})},play:async({canvasElement:e,args:a})=>{const o=await i(e).getByRole("button",{name:"Open drawer"});await u.click(o);const l=i(document.body).getByRole("dialog");r(l).toBeInTheDocument(),await u.click(i(l).getByRole("button",{name:"Cancel"})),r(a.onClickSecondaryButton).toHaveBeenCalled(),r(l).toBeInTheDocument(),await u.click(i(l).getByRole("button",{name:"Confirm"})),r(a.onClickPrimaryButton).toHaveBeenCalled(),await p(()=>{r(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},v={tags:["!autodocs"],args:{...s.args,isCollapsible:!0,id:"example-drawer"},render:s.render,play:async({canvasElement:e})=>{const a=i(e);await u.click(await a.getByRole("button",{name:"Open drawer"}));const n=await i(document.body).findByRole("dialog"),o=i(n);ze(Je(n)),F(o.getByRole("button",{name:"Close modal example-drawer"})),F(o.getByRole("button",{name:"Close drawer example-drawer"}));const l=document.body.querySelector('[class*="drawer-toggle"]');F(l)}},b={args:{...s.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,n]=g.useState(e.isOpen),o=()=>{n(c=>!c)},l=()=>{var c;(c=e.onClickPrimaryButton)==null||c.call(e),n(!1)};return t.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:t.jsx(m,{...e,isOpen:a,onClose:()=>n(!1),onClickToggle:o,onClickPrimaryButton:l,content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Drawer panel."}),width:"400px",children:t.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)}),t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Main area next to the panel."})]})})})}},f={tags:["!autodocs"],args:{...s.args,id:"responsive-drawer",title:"Responsive Drawer",position:"responsive",icon:void 0,isClosable:!0},render:e=>{const[a,n]=g.useState(e.isOpen),o=()=>{n(c=>!c)},l=()=>{var c;(c=e.onClickPrimaryButton)==null||c.call(e),n(!1)};return t.jsx("div",{style:{border:"1px solid #ccc",width:"600px",height:"500px"},children:t.jsx(m,{...e,isOpen:a,onClose:()=>n(!1),onClickToggle:o,onClickPrimaryButton:l,content:t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet tincidunt."}),width:"400px",children:t.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)}),t.jsx("span",{style:{fontFamily:"arial",fontSize:"14px",lineHeight:"20px"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non magna hendrerit mollis."})]})})})},play:async({canvasElement:e,args:a})=>{const n=i(e),o=await n.getByRole("button",{name:"Open drawer"});await u.click(o);const l=await p(()=>{const c=n.getByRole("region");return r(c).toHaveAttribute("data-position","responsive"),r(c).toHaveAttribute("data-open","true"),r(i(c).getByRole("heading",{name:"Responsive Drawer"})).toBeInTheDocument(),c});await u.click(i(l).getByRole("button",{name:"Cancel"})),r(a.onClickSecondaryButton).toHaveBeenCalled(),r(l).toHaveAttribute("data-open","true"),await u.click(i(l).getByRole("button",{name:"Confirm"})),r(a.onClickPrimaryButton).toHaveBeenCalled(),await p(()=>{r(l).toHaveAttribute("data-open","false")})}},C={args:{...s.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}}},B={tags:["autodocs"],args:{...s.args,id:"drawer-close-on-escape",title:"Close on Escape",closeOnEscape:!0,position:"modal"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const n=i(document.body).getByRole("dialog");r(n).toBeInTheDocument(),await u.keyboard(_e),await p(()=>{r(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},x={tags:["skip-ci"],args:{...s.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}}},k={tags:["skip-ci","!autodocs"],args:{...s.args,id:"drawer-close-on-overlay-click",title:"Close on overlay click",closeOnOverlayClick:!0,position:"modal"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is `modal`."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const o=i(document.body).getByRole("dialog").previousElementSibling;r(o).not.toBeNull(),await u.click(o),await p(()=>{r(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},O={args:{...s.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}}},I={tags:["!autodocs"],args:{...s.args,id:"drawer-without-footer",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!1},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **showFooter** set to `false`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."}}},play:async({canvasElement:e})=>{const a=i(e);await u.click(a.getByRole("button",{name:"Open drawer"}));const n=i(document.body).getByRole("dialog");r(n).toBeInTheDocument(),r(i(n).queryByRole("button",{name:"Confirm"})).not.toBeInTheDocument(),r(i(n).queryByRole("button",{name:"Cancel"})).not.toBeInTheDocument()}},D={args:{...s.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}}},E={tags:["!autodocs"],args:{...s.args,id:"drawer-without-header",title:void 0,icon:void 0,showHeader:!1,ariaLabel:"Example drawer"},render:s.render,parameters:{docs:{description:{story:"Modal drawer with **showHeader** set to `false`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."}}},play:async({canvasElement:e,args:a})=>{const n=i(e);await u.click(n.getByRole("button",{name:"Open drawer"}));const o=i(document.body).getByRole("dialog",{name:"Example drawer"});r(o).toBeInTheDocument(),r(i(o).queryByRole("heading")).not.toBeInTheDocument(),r(i(o).queryByTestId("modal-close-button")).not.toBeInTheDocument(),await u.click(i(o).getByRole("button",{name:"Cancel"})),r(a.onClickSecondaryButton).toHaveBeenCalled(),r(o).toBeInTheDocument(),await u.click(i(o).getByRole("button",{name:"Confirm"})),r(a.onClickPrimaryButton).toHaveBeenCalled(),await p(()=>{r(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})}},j=e=>{const a=Qe(e);return Ne("Drawer",a??"")},Ze=e=>async({canvasElement:a,step:n})=>{const o=i(a);await n("Open drawer logs configuration error and does not show dialog",async()=>{await Ke(e,()=>u.click(o.getByRole("button",{name:"Open drawer"}))),r(i(document.body).queryByRole("dialog")).not.toBeInTheDocument()})},M=e=>({beforeEach:Ge(e),play:Ze(e)}),$e=(e,a)=>{const n={...e,...a};return Object.keys(a).forEach(o=>{a[o]===void 0&&delete n[o]}),n},L=e=>a=>{const[n,o]=g.useState(!1),l=$e(a,e),c=()=>{o(!1)};return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Open drawer",onClick:()=>o(!0)}),t.jsx(m,{...l,isOpen:n,onClose:c,onClickToggle:()=>o(h=>!h),onClickPrimaryButton:()=>{var h;(h=a.onClickPrimaryButton)==null||h.call(a),c()}})]})},en=Ne("Drawer",We),S={tags:["!autodocs"],args:{...s.args,isOpen:!1,id:"drawer-without-header-missing-aria",title:void 0,icon:void 0,showHeader:!1},render:L({title:void 0,icon:void 0,showHeader:!1}),...M(en)},nn=j({hasCustomHeader:!1,hasTitle:!1,hasCustomFooter:!1,hasPrimaryButtonLabel:!0,position:"modal",hasMainContent:!1,hasDrawerContent:!0,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),T={tags:["!autodocs"],args:{...s.args,isOpen:!1,id:"drawer-without-header-or-title",title:void 0,icon:void 0,showHeader:!0},render:L({title:void 0,icon:void 0,showHeader:!0}),...M(nn)},tn=j({hasCustomHeader:!1,hasTitle:!0,hasCustomFooter:!1,hasPrimaryButtonLabel:!1,position:"modal",hasMainContent:!1,hasDrawerContent:!0,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),P={tags:["!autodocs"],args:{...s.args,isOpen:!1,id:"drawer-without-footer-or-primary",primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!0},render:L({primaryButtonLabel:void 0,secondaryButtonLabel:void 0,showFooter:!0}),...M(tn)},an=j({hasCustomHeader:!1,hasTitle:!0,hasCustomFooter:!1,hasPrimaryButtonLabel:!0,position:"modal",hasMainContent:!1,hasDrawerContent:!1,showHeader:!0,showFooter:!0,hasAriaLabel:!1}),q={tags:["!autodocs"],args:{...s.args,isOpen:!1,id:"drawer-without-content",content:void 0},render:L({content:void 0}),...M(an)},R={args:{...s.args,closeOnEscape:!0,id:"custom-header-footer-drawer"},render:e=>{const[a,n]=g.useState(e.isOpen),o=()=>{n(l=>!l)};return t.jsxs(t.Fragment,{children:[t.jsx(d,{label:"Open drawer",onClick:()=>n(!0)}),t.jsx(m,{...e,isOpen:a,ariaLabel:"Custom header drawer",onClose:()=>n(!1),onClickToggle:o,header:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px",width:"100%"},children:[t.jsx("span",{style:{fontSize:"16px",fontWeight:"bold",fontFamily:"arial"},children:"Custom Header"}),t.jsx(Ye,{name:"close",size:"m",onClick:()=>n(!1),"aria-label":"Close drawer"})]}),footer:t.jsx("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px",boxSizing:"border-box",width:"100%"},children:t.jsx(d,{label:"Custom Action",variant:"primary"})})})]})}};var A,U,V;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    isOpen: false,
    onClose() {
      console.log("Drawer closed");
    },
    id: "example-drawer",
    title: "Example Drawer",
    icon: "settings",
    iconAppearance: "outlined",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    isCollapsible: false,
    position: "modal",
    fixedHeader: true,
    showHeader: true,
    width: "400px",
    isClosable: true,
    onClickToggle() {
      console.log("Toggle drawer");
    },
    onClickPrimaryButton: fn(),
    onClickSecondaryButton: fn(),
    content: <span style={{
      fontFamily: "arial",
      fontSize: "14px",
      lineHeight: "20px"
    }}>Body content.</span>
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  }
}`,...(V=(U=s.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var N,z,W;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "modal-background-screen-reader-check",
    title: "Modal drawer",
    position: "modal"
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <main style={pageBehindOverlayStyle} aria-label="Page principale derrière l'overlay">
          <h1 style={{
          fontSize: "20px",
          margin: "0 0 12px"
        }}>Page d&apos;accueil — contenu masqué visuellement</h1>
          <p style={{
          margin: "0 0 12px"
        }}>Ce paragraphe ne doit pas être lu lorsque le drawer modal est ouvert.</p>
          <button type="button" style={{
          margin: "0 12px 12px 0"
        }} onClick={() => console.log("background action")}>
            Action page — ne pas atteindre en modal
          </button>
          <a href="#background-page-marker">Lien page arrière-plan — repère a11y</a>
          <div style={{
          marginTop: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)} />
          </div>
        </main>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={() => setIsOpen(previous => !previous)} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const pageMain = canvasElement.querySelector("main");
    expect(pageMain).toBeTruthy();
    await waitFor(() => {
      expect(within(document.body).getByRole("dialog", {
        name: "Modal drawer"
      })).toBeInTheDocument();
      expect(pageMain?.closest('[aria-hidden="true"]')).toBeTruthy();
      expect(pageMain?.closest("[inert]")).toBeTruthy();
      const backgroundScope = within(document.body);
      expect(backgroundScope.queryByRole("heading", {
        name: /Page d'accueil/
      })).not.toBeInTheDocument();
      expect(backgroundScope.queryByRole("button", {
        name: "Action page — ne pas atteindre en modal"
      })).not.toBeInTheDocument();
      expect(backgroundScope.queryByRole("link", {
        name: /Lien page arrière-plan/
      })).not.toBeInTheDocument();
    });
  }
}`,...(W=(z=y.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};var Q,_,G;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    isOpen: false,
    onClose() {
      console.log("Drawer closed");
    },
    id: "example-drawer",
    title: "Example Drawer",
    icon: "settings",
    iconAppearance: "outlined",
    primaryButtonLabel: "Confirm",
    secondaryButtonLabel: "Cancel",
    isCollapsible: false,
    position: "modal",
    fixedHeader: true,
    showHeader: true,
    width: "400px",
    isClosable: true,
    onClickToggle() {
      console.log("Toggle drawer");
    },
    onClickPrimaryButton: fn(),
    onClickSecondaryButton: fn(),
    content: <span style={{
      fontFamily: "arial",
      fontSize: "14px",
      lineHeight: "20px"
    }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl non
        arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi. Etiam
        tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin vehicula risus non
        magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus imperdiet lobortis. Cras
        scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta tempus pharetra, quam massa maximus
        sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus congue varius. Proin porta elementum bibendum.
        Vivamus venenatis sem metus, eu pulvinar tellus varius eu. Quisque vel condimentum nisl. Quisque maximus
        convallis elit ut vulputate. Integer eget laoreet velit. Donec viverra ac justo ut gravida. Nunc viverra
        tristique enim sit amet blandit. Curabitur odio nunc, ultricies euismod tortor id, ornare tincidunt leo. Ut at
        porta risus, ac condimentum nisi. Morbi ac nunc eu metus vehicula lacinia a at est. Praesent quis justo eu
        mauris finibus porta placerat ut metus. Sed vestibulum pretium dui id ultrices. Integer vulputate turpis sed
        turpis suscipit sagittis sed sed odio. Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit
        ullamcorper posuere. Sed a auctor eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh.
        Vivamus eu ultricies ex. Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis
        odio sit amet tincidunt. Suspendisse at risus pellentesque, bibendum magna eget, congue mi. Morbi odio enim,
        pulvinar vitae purus sit amet, dapibus porttitor quam. Donec maximus lectus ac felis lobortis pulvinar. Maecenas
        vel blandit odio. Nulla volutpat, nisi eget elementum lobortis, enim mi ornare sapien, at tempor tortor nisl id
        mi. Curabitur et commodo dui. Aenean a viverra dui. Praesent ac nisi molestie, posuere nisl vitae, consequat
        erat. Proin et iaculis mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit metus,
        maximus sit amet laoreet at, hendrerit eu ipsum. Mauris vulputate et leo sed convallis. Sed id eros nulla.
        Praesent ex tellus, pulvinar ac ornare vitae, dapibus feugiat mauris. Sed leo mauris, tempus et interdum sit
        amet, luctus sed ligula.
      </span>
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} />
      </>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(G=(_=w.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var K,Y,J;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isCollapsible: true,
    id: "example-drawer"
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = await within(document.body).findByRole("dialog");
    const drawerBody = within(drawer);
    expectDecorativeIconSvg(getDrawerHeaderTitleIconSvg(drawer));
    expectDecorativeButtonIcon(drawerBody.getByRole("button", {
      name: "Close modal example-drawer"
    }));
    expectDecorativeButtonIcon(drawerBody.getByRole("button", {
      name: "Close drawer example-drawer"
    }));
    const floatingToggle = document.body.querySelector('[class*="drawer-toggle"]');
    expectDecorativeButtonIcon(floatingToggle);
  }
}`,...(J=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var X,Z,$;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "responsive-drawer",
    title: "Responsive Drawer",
    position: "responsive",
    icon: undefined,
    isClosable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <div style={{
      border: "1px solid #ccc",
      width: "600px",
      height: "500px"
    }}>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} content={<span style={{
        fontFamily: "arial",
        fontSize: "14px",
        lineHeight: "20px"
      }}>Drawer panel.</span>} width="400px">
          <div style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
            <span style={{
            fontFamily: "arial",
            fontSize: "14px",
            lineHeight: "20px"
          }}>
              Main area next to the panel.
            </span>
          </div>
        </Drawer>
      </div>;
  }
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "responsive-drawer",
    title: "Responsive Drawer",
    position: "responsive",
    icon: undefined,
    isClosable: true
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    const handleClickPrimaryButton = () => {
      args.onClickPrimaryButton?.();
      setIsOpen(false);
    };
    return <div style={{
      border: "1px solid #ccc",
      width: "600px",
      height: "500px"
    }}>
        <Drawer {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} onClickPrimaryButton={handleClickPrimaryButton} content={<span style={{
        fontFamily: "arial",
        fontSize: "14px",
        lineHeight: "20px"
      }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. Vivamus venenatis sem metus, eu pulvinar tellus varius eu.
              Quisque vel condimentum nisl. Quisque maximus convallis elit ut vulputate. Integer eget laoreet velit.
              Donec viverra ac justo ut gravida. Nunc viverra tristique enim sit amet blandit. Curabitur odio nunc,
              ultricies euismod tortor id, ornare tincidunt leo. Ut at porta risus, ac condimentum nisi. Morbi ac nunc
              eu metus vehicula lacinia a at est. Praesent quis justo eu mauris finibus porta placerat ut metus. Sed
              vestibulum pretium dui id ultrices. Integer vulputate turpis sed turpis suscipit sagittis sed sed odio.
              Vestibulum eget eleifend eros, ut lobortis velit. Ut ac massa sed velit ullamcorper posuere. Sed a auctor
              eros. Maecenas ligula nunc, consectetur eu nulla vitae, aliquet molestie nibh. Vivamus eu ultricies ex.
              Integer sodales tempor nisi, non maximus velit hendrerit eu. Proin pretium sagittis odio sit amet
              tincidunt.
            </span>} width="400px">
          <div style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          padding: "16px"
        }}>
            <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
            <span style={{
            fontFamily: "arial",
            fontSize: "14px",
            lineHeight: "20px"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis urna lacus. Praesent tempor nisl
              non arcu molestie gravida. Nam nec tincidunt sapien. Vestibulum a malesuada nisl. Maecenas nec magna nisi.
              Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque a feugiat tellus. Proin
              vehicula risus non magna hendrerit mollis. Ut efficitur maximus sagittis. Integer eget est eget metus
              imperdiet lobortis. Cras scelerisque pharetra purus consectetur sollicitudin. Ut rhoncus, ipsum porta
              tempus pharetra, quam massa maximus sem, ac tempus ipsum sapien ac nisl. Mauris in neque vitae metus
              congue varius. Proin porta elementum bibendum. eros. Nam nec tincidunt sapien. Vestibulum a malesuada
              nisl. Maecenas nec magna nisi. Etiam tempus massa lobortis massa blandit ultricies. Ut in odio ex. Quisque
              a feugiat tellus. Proin vehicula risus non magna hendrerit mollis.
            </span>
          </div>
        </Drawer>
      </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const openButton = await canvas.getByRole("button", {
      name: "Open drawer"
    });
    await userEvent.click(openButton);
    const drawer = await waitFor(() => {
      const panel = canvas.getByRole("region");
      expect(panel).toHaveAttribute("data-position", "responsive");
      expect(panel).toHaveAttribute("data-open", "true");
      expect(within(panel).getByRole("heading", {
        name: "Responsive Drawer"
      })).toBeInTheDocument();
      return panel;
    });
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toHaveAttribute("data-open", "true");
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(drawer).toHaveAttribute("data-open", "false");
    });
  }
}`,...(te=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,oe,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-close-on-escape",
    title: "Close on Escape",
    closeOnEscape: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."
      }
    }
  }
}`,...(re=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,se,le;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  tags: ["autodocs"],
  args: {
    ...Default.args,
    id: "drawer-close-on-escape",
    title: "Close on Escape",
    closeOnEscape: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnEscape** enabled (spec: close on Esc). Press Escape to dismiss without using the header close control."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const dialog = within(document.body).getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(le=(se=B.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ue,de;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    ...Default.args,
    id: "drawer-close-on-overlay-click",
    title: "Close on overlay click",
    closeOnOverlayClick: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is \`modal\`."
      }
    }
  }
}`,...(de=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,pe,ge;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-close-on-overlay-click",
    title: "Close on overlay click",
    closeOnOverlayClick: true,
    position: "modal"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **closeOnOverlayClick** enabled. Clicking the backdrop (outside the panel) dismisses the drawer. Only applies when **position** is \`modal\`."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const dialog = within(document.body).getByRole("dialog");
    const backdropElement = dialog.previousElementSibling;
    expect(backdropElement).not.toBeNull();
    await userEvent.click(backdropElement as HTMLElement);
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(ge=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var he,ye,we;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-without-footer",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showFooter** set to \`false\`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."
      }
    }
  }
}`,...(we=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var ve,be,fe;I.parameters={...I.parameters,docs:{...(ve=I.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-footer",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: false
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showFooter** set to \`false\`. The footer (primary/secondary buttons or custom footer) is not rendered, and neither a primary button label nor a custom footer is required."
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = within(document.body).getByRole("dialog");
    expect(drawer).toBeInTheDocument();
    expect(within(drawer).queryByRole("button", {
      name: "Confirm"
    })).not.toBeInTheDocument();
    expect(within(drawer).queryByRole("button", {
      name: "Cancel"
    })).not.toBeInTheDocument();
  }
}`,...(fe=(be=I.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,Be,xe;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false,
    ariaLabel: "Example drawer"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."
      }
    }
  }
}`,...(xe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:xe.source}}};var ke,Oe,Ie;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    id: "drawer-without-header",
    title: undefined,
    icon: undefined,
    showHeader: false,
    ariaLabel: "Example drawer"
  },
  render: Default.render,
  parameters: {
    docs: {
      description: {
        story: "Modal drawer with **showHeader** set to \`false\`. The header (title, icon, close control) is not rendered. Provide **ariaLabel** so the drawer keeps an accessible name."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Open drawer"
    }));
    const drawer = within(document.body).getByRole("dialog", {
      name: "Example drawer"
    });
    expect(drawer).toBeInTheDocument();
    expect(within(drawer).queryByRole("heading")).not.toBeInTheDocument();
    expect(within(drawer).queryByTestId("modal-close-button")).not.toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Cancel"
    }));
    expect(args.onClickSecondaryButton).toHaveBeenCalled();
    expect(drawer).toBeInTheDocument();
    await userEvent.click(within(drawer).getByRole("button", {
      name: "Confirm"
    }));
    expect(args.onClickPrimaryButton).toHaveBeenCalled();
    await waitFor(() => {
      expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument();
    });
  }
}`,...(Ie=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var De,Ee,Se;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-header-missing-aria",
    title: undefined,
    icon: undefined,
    showHeader: false
  },
  render: renderDrawerConfigurationErrorStory({
    title: undefined,
    icon: undefined,
    showHeader: false
  }),
  ...configurationErrorStoryHooks(drawerMissingAccessibleNameError)
}`,...(Se=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var Te,Pe,qe;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-header-or-title",
    title: undefined,
    icon: undefined,
    showHeader: true
  },
  render: renderDrawerConfigurationErrorStory({
    title: undefined,
    icon: undefined,
    showHeader: true
  }),
  ...configurationErrorStoryHooks(drawerMissingHeaderOrTitleError)
}`,...(qe=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:qe.source}}};var Re,He,Me;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-footer-or-primary",
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: true
  },
  render: renderDrawerConfigurationErrorStory({
    primaryButtonLabel: undefined,
    secondaryButtonLabel: undefined,
    showFooter: true
  }),
  ...configurationErrorStoryHooks(drawerMissingFooterOrPrimaryError)
}`,...(Me=(He=P.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var Le,Fe,je;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    isOpen: false,
    id: "drawer-without-content",
    content: undefined
  },
  render: renderDrawerConfigurationErrorStory({
    content: undefined
  }),
  ...configurationErrorStoryHooks(drawerMissingContentError)
}`,...(je=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ae,Ue,Ve;R.parameters={...R.parameters,docs:{...(Ae=R.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    closeOnEscape: true,
    id: "custom-header-footer-drawer"
  },
  render: args => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    const handleOnClickToggle = () => {
      setIsOpen(prev => !prev);
    };
    return <>
        <Button label="Open drawer" onClick={() => setIsOpen(true)}></Button>
        <Drawer {...args} isOpen={isOpen} ariaLabel="Custom header drawer" onClose={() => setIsOpen(false)} onClickToggle={handleOnClickToggle} header={<div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "8px",
        width: "100%"
      }}>
              <span style={{
          fontSize: "16px",
          fontWeight: "bold",
          fontFamily: "arial"
        }}>Custom Header</span>
              <IconButton name="close" size="m" onClick={() => setIsOpen(false)} aria-label="Close drawer" />
            </div>} footer={<div style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "8px",
        boxSizing: "border-box",
        width: "100%"
      }}>
              <Button label="Custom Action" variant="primary" />
            </div>} />
      </>;
  }
}`,...(Ve=(Ue=R.parameters)==null?void 0:Ue.docs)==null?void 0:Ve.source}}};const Ln=["Default","ModalBackgroundScreenReaderManualCheck","ModalInteractive","ModalDecorativeIconsInteractive","Responsive","ResponsiveInteractive","CloseOnEscape","CloseOnEscapeInteractive","CloseOnOverlayClick","CloseOnOverlayClickInteractive","WithoutFooter","WithoutFooterInteractive","WithoutHeader","WithoutHeaderInteractive","WithoutHeaderMissingAccessibleName","WithoutHeaderOrTitle","WithoutFooterOrPrimaryButtonLabel","WithoutContent","CustomHeaderFooter"];export{C as CloseOnEscape,B as CloseOnEscapeInteractive,x as CloseOnOverlayClick,k as CloseOnOverlayClickInteractive,R as CustomHeaderFooter,s as Default,y as ModalBackgroundScreenReaderManualCheck,v as ModalDecorativeIconsInteractive,w as ModalInteractive,b as Responsive,f as ResponsiveInteractive,q as WithoutContent,O as WithoutFooter,I as WithoutFooterInteractive,P as WithoutFooterOrPrimaryButtonLabel,D as WithoutHeader,E as WithoutHeaderInteractive,S as WithoutHeaderMissingAccessibleName,T as WithoutHeaderOrTitle,Ln as __namedExportsOrder,Mn as default};
