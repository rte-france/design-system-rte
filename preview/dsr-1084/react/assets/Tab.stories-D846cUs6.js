import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Ca,e as W,h as Sa,f as fa}from"./keyboard-test.constants-BLfu6vvq.js";import{w as k,e as r,u as C,f as Ba}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as Ea}from"./testing.utils-DmLcTX3r.js";import{p as ie}from"./animation-BebxwkA_.js";import{u as ka}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as xa}from"./Badge-BKSKdLzq.js";import{D as Fa}from"./Dropdown-C-WY_1Zk.js";import{D as Aa}from"./DropdownItem-BqUZTx5Q.js";import{I as ue}from"./Icon-DBkoQNiA.js";import{I as he}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as ja}from"./log-handlers-Hz0GUguM.js";import{b as Ha,A as Ra,c as _a,a as Wa}from"./keyboard.constants-DMoGODOQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DIdxdZMU.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Na=(l,t,o)=>{if(!Da(l,t,o))return;const n=t.getBoundingClientRect(),i=l.getBoundingClientRect();if(o==="horizontal"){const e=t.scrollLeft+La(i,n);t.scrollTo({left:e,behavior:ie()?"auto":"smooth"})}else{const e=t.scrollTop+Oa(i,n);t.scrollTo({top:e,behavior:ie()?"auto":"smooth"})}},Da=(l,t,o)=>{if(t&&l){const n=t.getBoundingClientRect(),i=l.getBoundingClientRect(),e=i.left<n.left,g=i.right>n.right,v=i.top<n.top,w=i.bottom>n.bottom;return o==="horizontal"?e||g:v||w}return!1},La=(l,t)=>{const o=l.left<t.left,n=l.right>t.right;return o?l.left-t.left:n?l.right-t.right:0},Oa=(l,t)=>{const o=l.top<t.top,n=l.bottom>t.bottom;return o?l.top-t.top:n?l.bottom-t.bottom:0},Ka="_tab_1tjub_1",K={"tab-container":"_tab-container_1tjub_1",tab:Ka,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},za="_tabitem_1rgd2_1",pe={tabitem:za,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ia=b.forwardRef(({id:l,panelId:t,label:o,isSelected:n,showBadge:i,badgeCount:e,badgeContent:g="empty",badgeIcon:v,onClick:w,icon:h,badgeType:f="indicator",compactSpacing:se,direction:F,disabled:H,inverted:de,ariaLabel:M,...re},D)=>{const R={count:e,content:g,icon:v,badgeType:f},ce=e&&e>0&&g==="number",z=!H&&(i||ce||g==="icon"&&v),p=b.useRef(null),[d,A]=b.useState(null),G=c=>{!H&&!n?(w(c),A(u=>({...u,opacity:0}))):c.preventDefault()},q=b.useCallback(c=>{p.current&&!n&&A(c==="mouseover"?u=>({...u,opacity:1}):u=>({...u,opacity:0}))},[n]),m=c=>{const u=F==="vertical",y=u&&c.key===Ha,j=u&&c.key===Ra,B=!u&&c.key===_a,s=!u&&c.key===Wa,x=y||B;(x||(j||s))&&(c.preventDefault(),L(x?"next":"previous"))},L=c=>{var _;const u=(_=p.current)==null?void 0:_.parentElement;if(!u)return;const y=Array.from(u.querySelectorAll(`.${pe.tabitem}`)),j=y.findIndex(O=>O===document.activeElement);let B=be(j,y.length,c),s=0;const x=y.length;for(;y[B].getAttribute("data-disabled")==="true"&&s<x;)B=be(B,y.length,c),s++;y[B].focus(),y[B].click()},be=(c,u,y)=>y==="next"?(c+1)%u:(c-1+u)%u,S=b.useCallback(()=>{p.current&&!n&&A(F==="horizontal"?c=>{var u,y,j,B;return{...c,width:(u=p.current)==null?void 0:u.offsetWidth,left:((y=p.current)==null?void 0:y.offsetLeft)??0,top:(((j=p.current)==null?void 0:j.offsetTop)??0)+(((B=p.current)==null?void 0:B.offsetHeight)??0)}}:c=>{var u,y;return{...c,left:0,top:(u=p.current)==null?void 0:u.offsetTop,height:(y=p.current)==null?void 0:y.offsetHeight}})},[n,F]);return b.useEffect(()=>{var c;return S(),window.addEventListener("resize",S),(c=p.current)!=null&&c.parentElement&&p.current.parentElement.addEventListener("scroll",S),()=>{window.removeEventListener("resize",S),p.current&&p.current.parentElement&&p.current.parentElement.removeEventListener("scroll",S)}},[S]),b.useEffect(()=>{var c;p.current&&A(F==="horizontal"?{width:p.current.offsetWidth,left:p.current.offsetLeft-(((c=p.current.parentElement)==null?void 0:c.scrollLeft)??0),top:p.current.offsetTop+p.current.offsetHeight,opacity:0}:{left:0,top:p.current.offsetTop,height:p.current.offsetHeight,opacity:0})},[F]),!o&&!M?(ja("Tab",'Option with id "'+l+`" must have either a label or an ariaLabel if it's icon only.`),null):a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",id:l,className:pe.tabitem,role:"tab","aria-selected":n,"aria-controls":t,"aria-label":M,"aria-disabled":H,tabIndex:n?0:-1,"data-selected":n,"data-disabled":H,"data-direction":F,"data-inverted":de,onClick:G,"data-compact-spacing":se,ref:c=>{p.current=c,typeof D=="function"?D(c):D&&(D.current=c)},onKeyDown:m,onMouseEnter:()=>q("mouseover"),onMouseLeave:()=>q("mouseleave"),...n&&{"data-testid":"tabitem-selected"},...re,children:[h&&a.jsx(ue,{name:h,appearance:n?"filled":"outlined"}),o&&a.jsx("span",{children:o}),z&&a.jsx(xa,{...R})]}),a.jsx("span",{"data-disabled":H,className:pe["segment-hover-indicator"],style:{width:d==null?void 0:d.width,height:d==null?void 0:d.height,left:d==null?void 0:d.left,top:d==null?void 0:d.top,opacity:d==null?void 0:d.opacity}})]})});Ia.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const I=b.forwardRef(({options:l,onChange:t,direction:o="horizontal",alignment:n="start",selectedTabId:i,compactSpacing:e,overflowType:g="scrollable",inverted:v=!1,...w},h)=>{var B;const[f,se]=b.useState(!1),[F,H]=b.useState(!1),[de,M]=b.useState(!1),[re,D]=b.useState(!1),[R,ce]=b.useState(!1),[ge,z]=b.useState(!1),p=l.find(s=>!s.disabled),d=l.find(s=>s.id===i)??p,A=(B=d!=null&&d.disabled?p:d)==null?void 0:B.id,G=f||re,q=F||de,m=b.useRef(null),{indicatorStyle:L}=ka(m,i,o==="horizontal"?"bottom":"left"),S=o==="horizontal"&&(f||F)&&g==="dropdown",c=b.useCallback(()=>{if(m.current){const s=m.current.offsetWidth<m.current.scrollWidth||m.current.offsetHeight<m.current.scrollHeight,x=m.current.scrollLeft>0,_=m.current.scrollWidth-m.current.clientWidth-m.current.scrollLeft>0,O=m.current.scrollTop>0,wa=m.current.scrollHeight-m.current.clientHeight-m.current.scrollTop>0;se(x),H(_),D(O),M(wa),ce(s)}},[m]);b.useEffect(()=>{var s;return c(),window.addEventListener("resize",c),(s=m.current)==null||s.addEventListener("scroll",c),()=>{var x;window.removeEventListener("resize",c),(x=m.current)==null||x.removeEventListener("scroll",c)}},[c]),b.useEffect(()=>{d&&d.id!==i&&t(d.id)},[i,d,t]);const u=s=>{const x=s.currentTarget,_=x.getAttribute("id")||"";t(_),z(!1);const O=m.current;O&&Na(x,O,o)},y=()=>{if(m.current){const s=o==="horizontal"?{left:-300}:{top:-300};m.current.scrollBy({...s,behavior:ie()?"auto":"smooth"})}},j=()=>{if(m.current){const s=o==="horizontal"?{left:300}:{top:300};m.current.scrollBy({...s,behavior:ie()?"auto":"smooth"})}};return a.jsxs("div",{className:K["tab-container"],"data-direction":o,children:[a.jsx("div",{className:K["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":R&&g==="scrollable"?!0:void 0}),a.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[R&&!S&&a.jsx(he,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:G?1:0,pointerEvents:G?"auto":"none"},onClick:y}),a.jsxs("div",{ref:s=>{m.current=s,typeof h=="function"?h(s):h&&(h.current=s)},role:"tablist",className:K.tab,"data-alignment":R?"start":n,"data-direction":o,"aria-orientation":o,"data-overflow-type":g,...w,children:[a.jsx("div",{className:K["tab-selected-indicator"],style:{left:S?0:L.left,width:(L.width??0)+(S?32:0),top:L.top,height:L.height}}),S&&d&&a.jsx(Fa,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>z(!1),offset:10,trigger:a.jsxs("button",{type:"button",className:K["tab-dropdown-button"],onClick:()=>z(s=>!s),"aria-label":"Afficher les onglets","data-inverted":v,children:[d&&d.icon&&a.jsx(ue,{name:d.icon,appearance:"filled"}),d&&a.jsx("div",{style:{flexShrink:0},children:d==null?void 0:d.label}),d.badgeCount&&d.badgeCount>0&&d.badgeContent==="number"&&a.jsx(xa,{badgeType:d.badgeType,content:d.badgeContent,count:d.badgeCount}),a.jsx(ue,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ge,children:l.filter(s=>s.id!==i).map((s,x)=>a.jsx(Aa,{id:s.id,label:s.label,onClick:u,disabled:s.disabled,leftIcon:s.icon,badgeCount:s.badgeCount,badgeContent:s.badgeContent,badgeIcon:s.badgeIcon,badgeType:s.badgeType,showBadge:!0},`${s.id}-dropdown-${x}`))}),l.map((s,x)=>a.jsx(Ia,{onClick:u,isSelected:i===s.id,compactSpacing:e,direction:o,"data-hidden":S,inverted:v,...s,tabIndex:s.id===A?0:-1},`${s.id}-${x}`))]}),R&&!S&&a.jsx(he,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:q?1:0,pointerEvents:q?"auto":"none"},onClick:j})]}),a.jsx("div",{className:K["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":R&&g==="scrollable"?!0:void 0})]})});I.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const xn={title:"Composants/Tab",component:I,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},E={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[t,o]=b.useState("tab-2"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[a.jsx("span",{children:"Normal"}),a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i})]}),a.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[a.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i,inverted:!0})]})]}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...E.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[t,o]=b.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),a.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),a.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},Y={args:{...E.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[t,o]=b.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(I,{...l,direction:"vertical",options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},$={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,o]=b.useState("photos"),n=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},U={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,o]=b.useState("home"),n=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},Z={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,o]=b.useState("photos"),n=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},J={tags:["!autodocs"],args:{...E.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:l=>{const[t,o]=b.useState(l.selectedTabId);return a.jsxs(a.Fragment,{children:[a.jsx(I,{...l,selectedTabId:t,onChange:o}),l.options.map(n=>a.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:t!==n.id,children:["Content for ",n.label]},n.id))]})},play:async({canvasElement:l,args:t,step:o})=>{const n=k(l),i=n.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await r(i).toHaveLength(t.options.length);for(const g of i)await o(`Badge visibility: ${g.id}`,async()=>{const v=k(g).queryByTestId("badge");e.includes(g.id)?(await r(v).toBeVisible(),await r(v).toHaveAttribute("data-badge-type",g.id==="neutral"?"neutral":"indicator")):await r(v).not.toBeInTheDocument()});await r(k(n.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await r(k(n.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},Q={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,o]=b.useState("tab-1"),n=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i,overflowType:"dropdown"}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},X={tags:["!autodocs"],args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,o]=b.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return a.jsxs("div",{style:{height:"150px"},children:[a.jsx(I,{...l,options:n,selectedTabId:t,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:t})=>{const o=k(l);Ea();const n=await o.getByRole("tab",{name:"First Tab"}),i=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),g=await o.getByRole("tab",{name:"Fourth Tab"}),v=await o.getByRole("tab",{name:"Fifth Tab"}),w=async f=>{r(f).toHaveAttribute("aria-selected","true"),r(f).toHaveFocus(),r(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},h=async f=>{r(f).toHaveAttribute("aria-selected","false"),r(f).not.toHaveFocus(),r(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await C.tab(),w(n)}),await t("Navigate to the second tab and select it",async()=>{await C.keyboard(W),w(i)}),await t("Navigate to the second tab and select it",async()=>{await C.keyboard(W),w(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await C.keyboard(W),w(v),h(g)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await C.keyboard(W),w(n)}),await t("Navigate back to the last tab and select it",async()=>{await C.keyboard(fa),w(v)})}},T={tags:["!autodocs"],args:{options:[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],onChange:Ba()},render:l=>{const[t,o]=b.useState(l.selectedTabId);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",children:"Before tabs"}),a.jsx(I,{...l,"aria-label":"Fallback tabs",selectedTabId:t,onChange:n=>{l.onChange(n),o(n)}}),a.jsx("button",{type:"button",children:"After tabs"}),l.options.map(n=>a.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:t!==n.id,children:["Content for ",n.label]},n.id))]})},play:async({canvasElement:l,args:t,step:o})=>{const n=k(l),i=k(n.getByRole("tablist")).getAllByRole("tab"),e=i.filter(h=>h.getAttribute("aria-disabled")!=="true"),g=e.find(h=>h.id===t.selectedTabId)??e[0],v=t.direction==="vertical"?Ca:W,w=t.direction==="vertical"?Sa:fa;await o("TAB reaches the first enabled tab when selection is missing or invalid",async()=>{n.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await r(g).toHaveFocus(),await r(g).toHaveAttribute("aria-selected","true"),await r(i.filter(h=>h.tabIndex===0)).toEqual([g]),t.options.some(h=>h.id===t.selectedTabId)?await r(t.onChange).not.toHaveBeenCalled():await r(t.onChange).toHaveBeenCalledWith(g.id);for(const h of i.filter(f=>!e.includes(f)))await r(h).toHaveAttribute("aria-selected","false"),await r(t.onChange).not.toHaveBeenCalledWith(h.id)}),await o("Arrow keys wrap and skip disabled tabs",async()=>{const h=e[(e.indexOf(g)-1+e.length)%e.length];await C.keyboard(w),await r(h).toHaveFocus(),await r(h).toHaveAttribute("aria-selected","true"),await r(t.onChange).toHaveBeenLastCalledWith(h.id),await r(i.filter(f=>f.tabIndex===0)).toEqual([h]),await C.keyboard(v),await r(g).toHaveFocus(),await r(g).toHaveAttribute("aria-selected","true")}),await o("TAB leaves the tablist without visiting the other tabs",async()=>{await C.tab(),await r(n.getByRole("button",{name:"After tabs"})).toHaveFocus()})}},ee={...T,args:{...T.args,selectedTabId:"missing-tab"},play:T.play};var me,Te;const N={...T,args:{...T.args,options:(Te=(me=T.args)==null?void 0:me.options)==null?void 0:Te.map((l,t)=>({...l,disabled:t===0}))},play:T.play},ae={...N,args:{...N.args,selectedTabId:"missing-tab"},play:T.play},ne={...T,args:{...T.args,direction:"vertical"},play:T.play},te={...T,args:{...T.args,selectedTabId:"tab-2"},play:T.play};var ye,ve;const V={...T,args:{...T.args,options:(ve=(ye=T.args)==null?void 0:ye.options)==null?void 0:ve.map(l=>({...l,disabled:!0}))},play:async({canvasElement:l,args:t})=>{const o=k(l),n=k(o.getByRole("tablist")).queryAllByRole("tab");await r(n.every(i=>i.tabIndex===-1)).toBe(!0),await r(n.every(i=>i.getAttribute("aria-selected")==="false")).toBe(!0),await r(t.onChange).not.toHaveBeenCalled(),o.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await r(o.getByRole("button",{name:"After tabs"})).toHaveFocus()}},oe={...T,args:{...T.args,options:[]},play:V.play},le={...N,render:l=>a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",children:"Before tabs"}),a.jsx(I,{...l})]}),play:async({canvasElement:l,args:t})=>{const o=k(l),n=o.getAllByRole("tab");o.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await r(n[1]).toHaveFocus(),await r(t.onChange).toHaveBeenCalledWith(n[1].id),await C.keyboard(W),await r(n[2]).toHaveFocus(),await r(t.onChange).toHaveBeenLastCalledWith(n[2].id),await C.keyboard(W),await r(n[1]).toHaveFocus(),await r(t.onChange).toHaveBeenLastCalledWith(n[1].id),await r(t.onChange).not.toHaveBeenCalledWith(n[0].id),await r(n.filter(i=>i.tabIndex===0)).toEqual([n[1]])}};var fe,xe,Ie;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var we,Ce,Se;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Be,Ee,ke;Y.parameters={...Y.parameters,docs:{...(Be=Y.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Ee=Y.parameters)==null?void 0:Ee.docs)==null?void 0:ke.source}}};var Fe,Ae,je;$.parameters={...$.parameters,docs:{...(Fe=$.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(je=(Ae=$.parameters)==null?void 0:Ae.docs)==null?void 0:je.source}}};var He,Re,_e;U.parameters={...U.parameters,docs:{...(He=U.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(_e=(Re=U.parameters)==null?void 0:Re.docs)==null?void 0:_e.source}}};var We,Ne,De;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(De=(Ne=Z.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Le,Oe,Ke;J.parameters={...J.parameters,docs:{...(Le=J.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    options: [{
      id: "none",
      label: "No badge",
      panelId: "panel-none"
    }, {
      id: "indicator",
      label: "Indicator",
      panelId: "panel-indicator",
      showBadge: true
    }, {
      id: "number",
      label: "Number",
      panelId: "panel-number",
      badgeContent: "number",
      badgeCount: 5
    }, {
      id: "number-auto",
      label: "Automatic number",
      panelId: "panel-number-auto",
      badgeContent: "number",
      badgeCount: 5,
      showBadge: false
    }, {
      id: "icon",
      label: "Icon",
      panelId: "panel-icon",
      badgeContent: "icon",
      badgeIcon: "notification"
    }, {
      id: "icon-auto",
      label: "Automatic icon",
      panelId: "panel-icon-auto",
      badgeContent: "icon",
      badgeIcon: "notification",
      showBadge: false
    }, {
      id: "neutral",
      label: "Neutral",
      panelId: "panel-neutral",
      showBadge: true,
      badgeType: "neutral"
    }, {
      id: "hidden",
      label: "Explicitly hidden",
      panelId: "panel-hidden",
      showBadge: false
    }, {
      id: "type-only",
      label: "Type only",
      panelId: "panel-type-only",
      badgeType: "neutral"
    }, {
      id: "content-only",
      label: "Content only",
      panelId: "panel-content-only",
      badgeContent: "empty"
    }, {
      id: "count-only",
      label: "Count only",
      panelId: "panel-count-only",
      badgeCount: 5
    }, {
      id: "icon-only",
      label: "Icon name only",
      panelId: "panel-icon-only",
      badgeIcon: "notification"
    }, {
      id: "missing-count",
      label: "Missing count",
      panelId: "panel-missing-count",
      badgeContent: "number"
    }, {
      id: "zero",
      label: "Zero",
      panelId: "panel-zero",
      badgeContent: "number",
      badgeCount: 0
    }, {
      id: "negative",
      label: "Negative",
      panelId: "panel-negative",
      badgeContent: "number",
      badgeCount: -1
    }, {
      id: "missing-icon",
      label: "Missing icon",
      panelId: "panel-missing-icon",
      badgeContent: "icon"
    }, {
      id: "disabled-indicator",
      label: "Disabled indicator",
      panelId: "panel-disabled-indicator",
      disabled: true,
      showBadge: true
    }, {
      id: "disabled-number",
      label: "Disabled number",
      panelId: "panel-disabled-number",
      disabled: true,
      showBadge: true,
      badgeContent: "number",
      badgeCount: 5
    }, {
      id: "disabled-icon",
      label: "Disabled icon",
      panelId: "panel-disabled-icon",
      disabled: true,
      showBadge: true,
      badgeContent: "icon",
      badgeIcon: "notification"
    }],
    selectedTabId: "none",
    direction: "vertical",
    "aria-label": "Badge visibility"
  },
  render: args => {
    const [selectedTab, setSelectedTab] = useState(args.selectedTabId);
    return <>
        <Tab {...args} selectedTabId={selectedTab} onChange={setSelectedTab} />
        {args.options.map(option => <div key={option.id} role="tabpanel" id={option.panelId} aria-labelledby={option.id} hidden={selectedTab !== option.id}>
            Content for {option.label}
          </div>)}
      </>;
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    const tabsWithBadge = ["indicator", "number", "number-auto", "icon", "icon-auto", "neutral"];
    await expect(tabs).toHaveLength(args.options.length);
    for (const tab of tabs) {
      await step(\`Badge visibility: \${tab.id}\`, async () => {
        const badge = within(tab).queryByTestId("badge");
        if (tabsWithBadge.includes(tab.id)) {
          await expect(badge).toBeVisible();
          await expect(badge).toHaveAttribute("data-badge-type", tab.id === "neutral" ? "neutral" : "indicator");
        } else {
          await expect(badge).not.toBeInTheDocument();
        }
      });
    }
    await expect(within(canvas.getByRole("tab", {
      name: "Number 5"
    })).getByTestId("badge")).toHaveTextContent("5");
    await expect(within(canvas.getByRole("tab", {
      name: "Icon"
    })).getByTestId("badge").querySelector("svg")).toBeInTheDocument();
  }
}`,...(Ke=(Oe=J.parameters)==null?void 0:Oe.docs)==null?void 0:Ke.source}}};var ze,qe,Ve;Q.parameters={...Q.parameters,docs:{...(ze=Q.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=Q.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var Me,Ge,Pe;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Pe=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var Ye,$e,Ue;T.parameters={...T.parameters,docs:{...(Ye=T.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    options: [{
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
    }],
    onChange: fn()
  },
  render: args => {
    const [selectedTabId, setSelectedTabId] = useState(args.selectedTabId);
    return <>
        <button type="button">Before tabs</button>
        <Tab {...args} aria-label="Fallback tabs" selectedTabId={selectedTabId} onChange={id => {
        args.onChange(id);
        setSelectedTabId(id);
      }} />
        <button type="button">After tabs</button>
        {args.options.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTabId !== tab.id}>
            Content for {tab.label}
          </div>)}
      </>;
  },
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const tabs = within(canvas.getByRole("tablist")).getAllByRole("tab");
    const enabledTabs = tabs.filter(tab => tab.getAttribute("aria-disabled") !== "true");
    const initialTab = enabledTabs.find(tab => tab.id === args.selectedTabId) ?? enabledTabs[0];
    const nextKey = args.direction === "vertical" ? TESTING_ARROW_DOWN_KEY : TESTING_ARROW_RIGHT_KEY;
    const previousKey = args.direction === "vertical" ? TESTING_ARROW_UP_KEY : TESTING_ARROW_LEFT_KEY;
    await step("TAB reaches the first enabled tab when selection is missing or invalid", async () => {
      canvas.getByRole("button", {
        name: "Before tabs"
      }).focus();
      await userEvent.tab();
      await expect(initialTab).toHaveFocus();
      await expect(initialTab).toHaveAttribute("aria-selected", "true");
      await expect(tabs.filter(tab => tab.tabIndex === 0)).toEqual([initialTab]);
      if (!args.options.some(option => option.id === args.selectedTabId)) {
        await expect(args.onChange).toHaveBeenCalledWith(initialTab.id);
      } else {
        await expect(args.onChange).not.toHaveBeenCalled();
      }
      for (const tab of tabs.filter(tab => !enabledTabs.includes(tab))) {
        await expect(tab).toHaveAttribute("aria-selected", "false");
        await expect(args.onChange).not.toHaveBeenCalledWith(tab.id);
      }
    });
    await step("Arrow keys wrap and skip disabled tabs", async () => {
      const previousTab = enabledTabs[(enabledTabs.indexOf(initialTab) - 1 + enabledTabs.length) % enabledTabs.length];
      await userEvent.keyboard(previousKey);
      await expect(previousTab).toHaveFocus();
      await expect(previousTab).toHaveAttribute("aria-selected", "true");
      await expect(args.onChange).toHaveBeenLastCalledWith(previousTab.id);
      await expect(tabs.filter(tab => tab.tabIndex === 0)).toEqual([previousTab]);
      await userEvent.keyboard(nextKey);
      await expect(initialTab).toHaveFocus();
      await expect(initialTab).toHaveAttribute("aria-selected", "true");
    });
    await step("TAB leaves the tablist without visiting the other tabs", async () => {
      await userEvent.tab();
      await expect(canvas.getByRole("button", {
        name: "After tabs"
      })).toHaveFocus();
    });
  }
}`,...(Ue=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:Ue.source}}};var Ze,Je,Qe;ee.parameters={...ee.parameters,docs:{...(Ze=ee.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(Qe=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,ea,aa;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option, index) => ({
      ...option,
      disabled: index === 0
    }))
  },
  play: WithoutSelectedTab.play
}`,...(aa=(ea=N.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var na,ta,oa;ae.parameters={...ae.parameters,docs:{...(na=ae.parameters)==null?void 0:na.docs,source:{originalSource:`{
  ...FirstTabDisabled,
  args: {
    ...FirstTabDisabled.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(oa=(ta=ae.parameters)==null?void 0:ta.docs)==null?void 0:oa.source}}};var la,ia,sa;ne.parameters={...ne.parameters,docs:{...(la=ne.parameters)==null?void 0:la.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    direction: "vertical"
  },
  play: WithoutSelectedTab.play
}`,...(sa=(ia=ne.parameters)==null?void 0:ia.docs)==null?void 0:sa.source}}};var da,ra,ca;te.parameters={...te.parameters,docs:{...(da=te.parameters)==null?void 0:da.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "tab-2"
  },
  play: WithoutSelectedTab.play
}`,...(ca=(ra=te.parameters)==null?void 0:ra.docs)==null?void 0:ca.source}}};var ba,pa,ua;V.parameters={...V.parameters,docs:{...(ba=V.parameters)==null?void 0:ba.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map(option => ({
      ...option,
      disabled: true
    }))
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const tabs = within(canvas.getByRole("tablist")).queryAllByRole("tab");
    await expect(tabs.every(tab => tab.tabIndex === -1)).toBe(true);
    await expect(tabs.every(tab => tab.getAttribute("aria-selected") === "false")).toBe(true);
    await expect(args.onChange).not.toHaveBeenCalled();
    canvas.getByRole("button", {
      name: "Before tabs"
    }).focus();
    await userEvent.tab();
    await expect(canvas.getByRole("button", {
      name: "After tabs"
    })).toHaveFocus();
  }
}`,...(ua=(pa=V.parameters)==null?void 0:pa.docs)==null?void 0:ua.source}}};var ga,ha,ma;oe.parameters={...oe.parameters,docs:{...(ga=oe.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: []
  },
  play: AllTabsDisabled.play
}`,...(ma=(ha=oe.parameters)==null?void 0:ha.docs)==null?void 0:ma.source}}};var Ta,ya,va;le.parameters={...le.parameters,docs:{...(Ta=le.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  ...FirstTabDisabled,
  render: args => <>
      <button type="button">Before tabs</button>
      <Tab {...args} />
    </>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const tabs = canvas.getAllByRole("tab");
    canvas.getByRole("button", {
      name: "Before tabs"
    }).focus();
    await userEvent.tab();
    await expect(tabs[1]).toHaveFocus();
    await expect(args.onChange).toHaveBeenCalledWith(tabs[1].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[2]).toHaveFocus();
    await expect(args.onChange).toHaveBeenLastCalledWith(tabs[2].id);
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await expect(tabs[1]).toHaveFocus();
    await expect(args.onChange).toHaveBeenLastCalledWith(tabs[1].id);
    await expect(args.onChange).not.toHaveBeenCalledWith(tabs[0].id);
    await expect(tabs.filter(tab => tab.tabIndex === 0)).toEqual([tabs[1]]);
  }
}`,...(va=(ya=le.parameters)==null?void 0:ya.docs)==null?void 0:va.source}}};const In=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","KeyboardInteraction","WithoutSelectedTab","InvalidSelectedTab","FirstTabDisabled","InvalidSelectedTabWithFirstDisabled","VerticalWithoutSelectedTab","SelectedTabIsPreserved","AllTabsDisabled","EmptyOptions","FocusWithoutSelectionUpdate"];export{V as AllTabsDisabled,J as BadgeVisibility,Y as CompactSpacing,E as Default,oe as EmptyOptions,N as FirstTabDisabled,le as FocusWithoutSelectionUpdate,U as IconsOnly,ee as InvalidSelectedTab,ae as InvalidSelectedTabWithFirstDisabled,X as KeyboardInteraction,Q as OverflowType,te as SelectedTabIsPreserved,P as Vertical,ne as VerticalWithoutSelectedTab,Z as WithBadge,$ as WithIcons,T as WithoutSelectedTab,In as __namedExportsOrder,xn as default};
