import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as W,f as _e}from"./keyboard-test.constants-DC52cZHj.js";import{w as Ae,u as F,e as _}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as Re}from"./testing.utils-DmLcTX3r.js";import{p as U}from"./animation-BebxwkA_.js";import{u as He}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ee}from"./Badge-BKSKdLzq.js";import{D as Le}from"./Dropdown-CyecDUeK.js";import{D as Ne}from"./DropdownItem-DoVaQzxG.js";import{I as ne}from"./Icon-DBkoQNiA.js";import{I as te}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Oe}from"./log-handlers-BGrW2Sgz.js";import{b as De,d as ze,A as Ke,a as We}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Me=(s,t,l)=>{if(!Ve(s,t,l))return;const o=t.getBoundingClientRect(),i=s.getBoundingClientRect();if(l==="horizontal"){const e=t.scrollLeft+qe(i,o);t.scrollTo({left:e,behavior:U()?"auto":"smooth"})}else{const e=t.scrollTop+Pe(i,o);t.scrollTo({top:e,behavior:U()?"auto":"smooth"})}},Ve=(s,t,l)=>{if(t&&s){const o=t.getBoundingClientRect(),i=s.getBoundingClientRect(),e=i.left<o.left,m=i.right>o.right,x=i.top<o.top,T=i.bottom>o.bottom;return l==="horizontal"?e||m:x||T}return!1},qe=(s,t)=>{const l=s.left<t.left,o=s.right>t.right;return l?s.left-t.left:o?s.right-t.right:0},Pe=(s,t)=>{const l=s.top<t.top,o=s.bottom>t.bottom;return l?s.top-t.top:o?s.bottom-t.bottom:0},Ge="_tab_1tjub_1",A={"tab-container":"_tab-container_1tjub_1",tab:Ge,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Ye="_tabitem_1rgd2_1",ee={tabitem:Ye,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Be=c.forwardRef(({id:s,panelId:t,label:l,isSelected:o,showBadge:i,badgeCount:e,badgeContent:m="empty",badgeIcon:x,onClick:T,icon:C,badgeType:u="indicator",compactSpacing:J,direction:I,disabled:j,inverted:H,ariaLabel:L,...N},B)=>{const E={count:e,content:m,icon:x,badgeType:u},Q=e&&e>0&&m==="number",R=!j&&(i||Q||m==="icon"&&x),r=c.useRef(null),[h,S]=c.useState(null),k=a=>{j?a.preventDefault():(T(a),S(d=>({...d,opacity:0})))},w=c.useCallback(a=>{r.current&&!o&&S(a==="mouseover"?d=>({...d,opacity:1}):d=>({...d,opacity:0}))},[o]),O=a=>{const d=I==="vertical",p=d&&a.key===De,f=d&&a.key===ze,v=!d&&a.key===Ke,z=!d&&a.key===We,K=p||v;(K||(f||z))&&(a.preventDefault(),X(K?"next":"previous"))},X=a=>{var Z;const d=(Z=r.current)==null?void 0:Z.parentElement;if(!d)return;const p=Array.from(d.querySelectorAll(`.${ee.tabitem}`)),f=p.findIndex(Fe=>Fe===document.activeElement);let v=D(f,p.length,a),z=0;const K=p.length;for(;p[v].getAttribute("data-disabled")==="true"&&z<K;)v=D(v,p.length,a),z++;p[v].focus(),p[v].click()},D=(a,d,p)=>p==="next"?(a+1)%d:(a-1+d)%d,b=c.useCallback(()=>{r.current&&!o&&S(I==="horizontal"?a=>{var d,p,f,v;return{...a,width:(d=r.current)==null?void 0:d.offsetWidth,left:((p=r.current)==null?void 0:p.offsetLeft)??0,top:(((f=r.current)==null?void 0:f.offsetTop)??0)+(((v=r.current)==null?void 0:v.offsetHeight)??0)}}:a=>{var d,p;return{...a,left:0,top:(d=r.current)==null?void 0:d.offsetTop,height:(p=r.current)==null?void 0:p.offsetHeight}})},[o,I]);return c.useEffect(()=>{var a;return b(),window.addEventListener("resize",b),(a=r.current)!=null&&a.parentElement&&r.current.parentElement.addEventListener("scroll",b),()=>{window.removeEventListener("resize",b),r.current&&r.current.parentElement&&r.current.parentElement.removeEventListener("scroll",b)}},[b]),c.useEffect(()=>{var a;r.current&&S(I==="horizontal"?{width:r.current.offsetWidth,left:r.current.offsetLeft-(((a=r.current.parentElement)==null?void 0:a.scrollLeft)??0),top:r.current.offsetTop+r.current.offsetHeight,opacity:0}:{left:0,top:r.current.offsetTop,height:r.current.offsetHeight,opacity:0})},[I]),!l&&!L?(Oe("Tab",'Option with id "'+s+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:s,className:ee.tabitem,role:"tab","aria-selected":o,"aria-controls":t,"aria-label":L,"aria-disabled":j,tabIndex:o?0:-1,"data-selected":o,"data-disabled":j,"data-direction":I,"data-inverted":H,onClick:k,"data-compact-spacing":J,ref:a=>{r.current=a,typeof B=="function"?B(a):B&&(B.current=a)},onKeyDown:O,onMouseEnter:()=>w("mouseover"),onMouseLeave:()=>w("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...N,children:[C&&n.jsx(ne,{name:C,appearance:o?"filled":"outlined"}),l&&n.jsx("span",{children:l}),R&&n.jsx(Ee,{...E})]}),n.jsx("span",{"data-disabled":j,className:ee["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});Be.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=c.forwardRef(({options:s,onChange:t,direction:l="horizontal",alignment:o="start",selectedTabId:i,compactSpacing:e,overflowType:m="scrollable",inverted:x=!1,...T},C)=>{const[u,J]=c.useState(!1),[I,j]=c.useState(!1),[H,L]=c.useState(!1),[N,B]=c.useState(!1),[E,Q]=c.useState(!1),[ae,R]=c.useState(!1),r=c.useRef(null),{indicatorStyle:h}=He(r,i,l==="horizontal"?"bottom":"left"),k=l==="horizontal"&&(u||I)&&m==="dropdown",w=c.useCallback(()=>{if(r.current){const a=r.current.offsetWidth<r.current.scrollWidth||r.current.offsetHeight<r.current.scrollHeight,d=r.current.scrollLeft>0,p=r.current.scrollWidth-r.current.clientWidth-r.current.scrollLeft>0,f=r.current.scrollTop>0,v=r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop>0;J(d),j(p),B(f),L(v),Q(a)}},[r]);c.useEffect(()=>{var a;return w(),window.addEventListener("resize",w),(a=r.current)==null||a.addEventListener("scroll",w),()=>{var d;window.removeEventListener("resize",w),(d=r.current)==null||d.removeEventListener("scroll",w)}},[w]),c.useEffect(()=>{!i&&s.length>0&&t(s[0].id)},[i,s,t]);const O=a=>{const d=a.currentTarget,p=d.getAttribute("id")||"";t(p),R(!1);const f=r.current;f&&Me(d,f,l)},X=()=>{if(r.current){const a=l==="horizontal"?{left:-300}:{top:-300};r.current.scrollBy({...a,behavior:U()?"auto":"smooth"})}},D=()=>{if(r.current){const a=l==="horizontal"?{left:300}:{top:300};r.current.scrollBy({...a,behavior:U()?"auto":"smooth"})}},b=s.find(a=>a.id===i);return n.jsxs("div",{className:A["tab-container"],"data-direction":l,children:[n.jsx("div",{className:A["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":E&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[E&&!k&&n.jsx(te,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:u||N?1:0,pointerEvents:u||N?"auto":"none"},onClick:X}),n.jsxs("div",{ref:a=>{r.current=a,typeof C=="function"?C(a):C&&(C.current=a)},role:"tablist",className:A.tab,"data-alignment":E?"start":o,"data-direction":l,"aria-orientation":l,"data-overflow-type":m,...T,children:[n.jsx("div",{className:A["tab-selected-indicator"],style:{left:k?0:h.left,width:(h.width??0)+(k?32:0),top:h.top,height:h.height}}),k&&b&&n.jsx(Le,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>R(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:A["tab-dropdown-button"],onClick:()=>R(a=>!a),"aria-label":"Select tab","data-inverted":x,children:[b&&b.icon&&n.jsx(ne,{name:b.icon,appearance:"filled"}),b&&n.jsx("div",{style:{flexShrink:0},children:b==null?void 0:b.label}),b.badgeCount&&b.badgeCount>0&&b.badgeContent==="number"&&n.jsx(Ee,{badgeType:b.badgeType,content:b.badgeContent,count:b.badgeCount}),n.jsx(ne,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ae,children:s.filter(a=>a.id!==i).map((a,d)=>n.jsx(Ne,{id:a.id,label:a.label,onClick:O,disabled:a.disabled,leftIcon:a.icon,badgeCount:a.badgeCount,badgeContent:a.badgeContent,badgeIcon:a.badgeIcon,badgeType:a.badgeType,showBadge:!0},`${a.id}-dropdown-${d}`))}),s.map((a,d)=>n.jsx(Be,{onClick:O,isSelected:i===a.id,compactSpacing:e,direction:l,"data-hidden":k,inverted:x,...a},`${a.id}-${d}`))]}),E&&!k&&n.jsx(te,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:I||H?1:0,pointerEvents:I||H?"auto":"none"},onClick:D})]}),n.jsx("div",{className:A["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":E&&m==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const jn={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:s=>{const[t,l]=c.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...s,direction:"vertical",options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},G={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Y={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},$={tags:["!autodocs"],args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:t})=>{const l=Ae(s);Re();const o=await l.getByRole("tab",{name:"First Tab"}),i=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),m=await l.getByRole("tab",{name:"Fourth Tab"}),x=await l.getByRole("tab",{name:"Fifth Tab"}),T=async u=>{_(u).toHaveAttribute("aria-selected","true"),_(u).toHaveFocus(),_(l.getByText(`Contenu onglet ${u.textContent}`)).toBeVisible()},C=async u=>{_(u).toHaveAttribute("aria-selected","false"),_(u).not.toHaveFocus(),_(l.getByText(`Contenu onglet ${u.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await F.tab(),T(o)}),await t("Navigate to the second tab and select it",async()=>{await F.keyboard(W),T(i)}),await t("Navigate to the second tab and select it",async()=>{await F.keyboard(W),T(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await F.keyboard(W),T(x),C(m)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await F.keyboard(W),T(o)}),await t("Navigate back to the last tab and select it",async()=>{await F.keyboard(_e),T(x)})}};var oe,le,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    options: [],
    alignment: "start",
    overflowType: "scrollable",
    "aria-label": "Sample tabs"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("tab-2");
    const tabs = [{
      id: "tab-1",
      label: "First Tab",
      panelId: "panel-1"
    }, {
      id: "tab-2",
      label: "Second Tab",
      panelId: "panel-2"
    }, {
      id: "tab-3",
      label: "Third Tab",
      panelId: "panel-3"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <>
        <div>
          <div style={{
          height: "100%",
          padding: "16px",
          fontFamily: "Arial"
        }}>
            <span>Normal</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          </div>
          <div style={{
          backgroundColor: "var(--background-inverse)",
          marginTop: "16px",
          padding: "10px",
          fontFamily: "Arial"
        }}>
            <span style={{
            color: "var(--content-primary-inverse)"
          }}>Inverted</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} inverted={true} />
          </div>
        </div>
        <div style={{
        height: "100px",
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "64px",
        color: "var(--content-secondary)",
        fontFamily: "Arial"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </>;
  }
}`,...(re=(le=y.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,ie,de;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
    direction: "vertical"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [{
      id: "tab-1",
      label: "First Tab",
      panelId: "panel-1"
    }, {
      id: "tab-2",
      label: "Second Tab",
      panelId: "panel-2"
    }, {
      id: "tab-3",
      label: "Third Tab",
      panelId: "panel-3"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{
        height: "100px",
        border: "1px solid var(--border-secondary)",
        padding: "8px",
        marginTop: "16px",
        color: "var(--content-secondary)",
        fontFamily: "Arial"
      }}>
          <div role="tabpanel" id="panel-1" aria-labelledby="tab-1" hidden={selectedTab !== "tab-1"}>
            Contenu onglet 1
          </div>
          <div role="tabpanel" id="panel-2" aria-labelledby="tab-2" hidden={selectedTab !== "tab-2"}>
            Contenu onglet 2
          </div>
          <div role="tabpanel" id="panel-3" aria-labelledby="tab-3" hidden={selectedTab !== "tab-3"}>
            Contenu onglet 3
          </div>
        </div>
      </div>;
  }
}`,...(de=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,be,pe;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start",
    compactSpacing: true
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [{
      id: "tab-1",
      label: "First Tab",
      panelId: "panel-1"
    }, {
      id: "tab-2",
      label: "Second Tab",
      panelId: "panel-2"
    }, {
      id: "tab-3",
      label: "Third Tab",
      panelId: "panel-3"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px"
    }}>
        <div>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div style={{
          height: "100px",
          border: "1px solid var(--border-secondary)",
          padding: "8px",
          marginTop: "16px",
          color: "var(--content-secondary)",
          fontFamily: "Arial"
        }}>
            {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
                Contenu onglet {tab.label}
              </div>)}
          </div>
        </div>
        <div style={{
        display: "flex",
        gap: "16px",
        height: "200px"
      }}>
          <Tab {...args} direction="vertical" options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div style={{
          height: "100px",
          border: "1px solid var(--border-secondary)",
          padding: "8px",
          marginTop: "16px",
          color: "var(--content-secondary)",
          fontFamily: "Arial"
        }}>
            {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
                Contenu onglet {tab.label}
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(pe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ue,ge;q.parameters={...q.parameters,docs:{...(he=q.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("photos");
    const tabs = [{
      id: "photos",
      label: "Photos",
      panelId: "panel-1",
      icon: "photo-camera"
    }, {
      id: "videos",
      label: "Vidéos",
      panelId: "panel-2",
      icon: "video-camera",
      disabled: true
    }, {
      id: "musique",
      label: "Musique",
      panelId: "panel-3",
      icon: "headphones"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{
        height: "100px",
        border: "1px solid var(--border-secondary)",
        padding: "8px",
        marginTop: "16px",
        color: "var(--content-secondary)",
        fontFamily: "Arial"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </>;
  }
}`,...(ge=(ue=q.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,Te,ve;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("home");
    const tabs = [{
      id: "home",
      panelId: "panel-1",
      icon: "home",
      ariaLabel: "Home"
    }, {
      id: "bookmarks",
      panelId: "panel-2",
      icon: "bookmarks",
      ariaLabel: "Bookmarks"
    }, {
      id: "chat",
      panelId: "panel-3",
      icon: "chat",
      ariaLabel: "Chat"
    }, {
      id: "settings",
      panelId: "panel-4",
      icon: "settings",
      ariaLabel: "Settings"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{
        height: "100px",
        border: "1px solid var(--border-secondary)",
        padding: "8px",
        marginTop: "16px",
        color: "var(--content-secondary)",
        fontFamily: "Arial"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.id}
            </div>)}
        </div>
      </>;
  }
}`,...(ve=(Te=P.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var fe,ye,xe;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("photos");
    const tabs = [{
      id: "photos",
      label: "Photos",
      panelId: "panel-1",
      icon: "photo-camera",
      badgeCount: 5,
      badgeContent: "number" as BadgeContent,
      badgeType: "indicator" as BadgeType,
      showBadge: true
    }, {
      id: "videos",
      label: "Vidéos",
      panelId: "panel-2",
      icon: "video-camera"
    }, {
      id: "musique",
      label: "Musique",
      panelId: "panel-3",
      icon: "headphones"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{
        height: "100px",
        border: "1px solid var(--border-secondary)",
        padding: "8px",
        marginTop: "16px",
        color: "var(--content-secondary)",
        fontFamily: "Arial"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </>;
  }
}`,...(xe=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ie,Ce,we;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [{
      id: "tab-1",
      label: "First Tab very long and descriptive",
      panelId: "panel-1"
    }, {
      id: "tab-2",
      label: "Second Tab",
      panelId: "panel-2"
    }, {
      id: "tab-3",
      label: "Third Tab",
      panelId: "panel-3"
    }, {
      id: "tab-4",
      label: "Fourth Tab",
      panelId: "panel-4",
      disabled: true
    }, {
      id: "tab-5",
      label: "Fifth Tab",
      panelId: "panel-5"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      color: "var(--content-secondary)",
      fontFamily: "Arial"
    }}>
        <div style={{
        width: "400px"
      }}>
          <span style={{
          fontFamily: "Arial"
        }}>Scrollable</span>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div style={{
          height: "100px",
          border: "1px solid #ccc",
          padding: "8px",
          marginTop: "16px"
        }}>
            {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
                Contenu onglet {tab.label}
              </div>)}
          </div>
        </div>
        <div style={{
        width: "400px"
      }}>
          <span style={{
          fontFamily: "Arial"
        }}>Dropdown</span>
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} overflowType="dropdown" />
          <div style={{
          height: "100px",
          border: "1px solid #ccc",
          padding: "8px",
          marginTop: "16px"
        }}>
            {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
                Contenu onglet {tab.label}
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(we=(Ce=Y.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Se,ke,je;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onChange: () => {},
    options: [],
    alignment: "start"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState("tab-1");
    const tabs = [{
      id: "tab-1",
      label: "First Tab",
      panelId: "panel-1"
    }, {
      id: "tab-2",
      label: "Second Tab",
      panelId: "panel-2"
    }, {
      id: "tab-3",
      label: "Third Tab",
      panelId: "panel-3"
    }, {
      id: "tab-4",
      label: "Fourth Tab",
      panelId: "panel-4",
      disabled: true
    }, {
      id: "tab-5",
      label: "Fifth Tab",
      panelId: "panel-5"
    }];
    const handleTabClick = (tabId: string) => {
      setSelectedTab(tabId);
    };
    return <div style={{
      height: "150px"
    }}>
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
        <div style={{
        height: "100px",
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "16px"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </div>;
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    focusElementBeforeComponent();
    const firstTab = await canvas.getByRole("tab", {
      name: "First Tab"
    });
    const secondTab = await canvas.getByRole("tab", {
      name: "Second Tab"
    });
    const thirdTab = await canvas.getByRole("tab", {
      name: "Third Tab"
    });
    const fourthTab = await canvas.getByRole("tab", {
      name: "Fourth Tab"
    });
    const fifthTab = await canvas.getByRole("tab", {
      name: "Fifth Tab"
    });
    const expectTabToBeSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "true");
      expect(tab).toHaveFocus();
      expect(canvas.getByText(\`Contenu onglet \${tab.textContent}\`)).toBeVisible();
    };
    const expectTabToBeNotSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "false");
      expect(tab).not.toHaveFocus();
      expect(canvas.getByText(\`Contenu onglet \${tab.textContent}\`)).not.toBeVisible();
    };
    await step("Focus on the first tab and select it", async () => {
      await userEvent.tab();
      expectTabToBeSelected(firstTab);
    });
    await step("Navigate to the second tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(secondTab);
    });
    await step("Navigate to the second tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(thirdTab);
    });
    await step("Navigate directly to the fifth tab and select it because the forth is disabled", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(fifthTab);
      expectTabToBeNotSelected(fourthTab);
    });
    await step("Navigate back to the first tab when there are no next tabs", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(firstTab);
    });
    await step("Navigate back to the last tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expectTabToBeSelected(fifthTab);
    });
  }
}`,...(je=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const En=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{V as CompactSpacing,y as Default,P as IconsOnly,$ as KeyboardInteraction,Y as OverflowType,M as Vertical,G as WithBadge,q as WithIcons,En as __namedExportsOrder,jn as default};
