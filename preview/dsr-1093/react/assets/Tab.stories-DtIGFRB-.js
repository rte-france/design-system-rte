import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as M,f as Le}from"./keyboard-test.constants-DC52cZHj.js";import{w as O,e as x,u as H}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as De}from"./testing.utils-DmLcTX3r.js";import{p as U}from"./animation-BebxwkA_.js";import{u as Oe}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Re}from"./Badge-BKSKdLzq.js";import{D as ze}from"./Dropdown-CyecDUeK.js";import{D as Me}from"./DropdownItem-DoVaQzxG.js";import{I as te}from"./Icon-DBkoQNiA.js";import{I as le}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as We}from"./log-handlers-Hz0GUguM.js";import{b as Ve,d as Ke,A as qe,a as Pe}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ge=(l,a,o)=>{if(!$e(l,a,o))return;const t=a.getBoundingClientRect(),d=l.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+Ye(d,t);a.scrollTo({left:e,behavior:U()?"auto":"smooth"})}else{const e=a.scrollTop+Ue(d,t);a.scrollTo({top:e,behavior:U()?"auto":"smooth"})}},$e=(l,a,o)=>{if(a&&l){const t=a.getBoundingClientRect(),d=l.getBoundingClientRect(),e=d.left<t.left,h=d.right>t.right,m=d.top<t.top,v=d.bottom>t.bottom;return o==="horizontal"?e||h:m||v}return!1},Ye=(l,a)=>{const o=l.left<a.left,t=l.right>a.right;return o?l.left-a.left:t?l.right-a.right:0},Ue=(l,a)=>{const o=l.top<a.top,t=l.bottom>a.bottom;return o?l.top-a.top:t?l.bottom-a.bottom:0},Ze="_tab_1tjub_1",N={"tab-container":"_tab-container_1tjub_1",tab:Ze,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Je="_tabitem_1rgd2_1",ae={tabitem:Je,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},He=b.forwardRef(({id:l,panelId:a,label:o,isSelected:t,showBadge:d,badgeCount:e,badgeContent:h="empty",badgeIcon:m,onClick:v,icon:C,badgeType:f="indicator",compactSpacing:Z,direction:w,disabled:E,inverted:J,ariaLabel:z,...Q},_)=>{const F={count:e,content:h,icon:m,badgeType:f},X=e&&e>0&&h==="number",L=!E&&(d||X||h==="icon"&&m),p=b.useRef(null),[u,c]=b.useState(null),A=r=>{!E&&!t?(v(r),c(s=>({...s,opacity:0}))):r.preventDefault()},ee=b.useCallback(r=>{p.current&&!t&&c(r==="mouseover"?s=>({...s,opacity:1}):s=>({...s,opacity:0}))},[t]),B=r=>{const s=w==="vertical",i=s&&r.key===Ve,g=s&&r.key===Ke,T=!s&&r.key===qe,S=!s&&r.key===Pe,R=i||T;(R||(g||S))&&(r.preventDefault(),j(R?"next":"previous"))},j=r=>{var ne;const s=(ne=p.current)==null?void 0:ne.parentElement;if(!s)return;const i=Array.from(s.querySelectorAll(`.${ae.tabitem}`)),g=i.findIndex(Ne=>Ne===document.activeElement);let T=D(g,i.length,r),S=0;const R=i.length;for(;i[T].getAttribute("data-disabled")==="true"&&S<R;)T=D(T,i.length,r),S++;i[T].focus(),i[T].click()},D=(r,s,i)=>i==="next"?(r+1)%s:(r-1+s)%s,k=b.useCallback(()=>{p.current&&!t&&c(w==="horizontal"?r=>{var s,i,g,T;return{...r,width:(s=p.current)==null?void 0:s.offsetWidth,left:((i=p.current)==null?void 0:i.offsetLeft)??0,top:(((g=p.current)==null?void 0:g.offsetTop)??0)+(((T=p.current)==null?void 0:T.offsetHeight)??0)}}:r=>{var s,i;return{...r,left:0,top:(s=p.current)==null?void 0:s.offsetTop,height:(i=p.current)==null?void 0:i.offsetHeight}})},[t,w]);return b.useEffect(()=>{var r;return k(),window.addEventListener("resize",k),(r=p.current)!=null&&r.parentElement&&p.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),p.current&&p.current.parentElement&&p.current.parentElement.removeEventListener("scroll",k)}},[k]),b.useEffect(()=>{var r;p.current&&c(w==="horizontal"?{width:p.current.offsetWidth,left:p.current.offsetLeft-(((r=p.current.parentElement)==null?void 0:r.scrollLeft)??0),top:p.current.offsetTop+p.current.offsetHeight,opacity:0}:{left:0,top:p.current.offsetTop,height:p.current.offsetHeight,opacity:0})},[w]),!o&&!z?(We("Tab",'Option with id "'+l+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:l,className:ae.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-label":z,"aria-disabled":E,tabIndex:t?0:-1,"data-selected":t,"data-disabled":E,"data-direction":w,"data-inverted":J,onClick:A,"data-compact-spacing":Z,ref:r=>{p.current=r,typeof _=="function"?_(r):_&&(_.current=r)},onKeyDown:B,onMouseEnter:()=>ee("mouseover"),onMouseLeave:()=>ee("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...Q,children:[C&&n.jsx(te,{name:C,appearance:t?"filled":"outlined"}),o&&n.jsx("span",{children:o}),L&&n.jsx(Re,{...F})]}),n.jsx("span",{"data-disabled":E,className:ae["segment-hover-indicator"],style:{width:u==null?void 0:u.width,height:u==null?void 0:u.height,left:u==null?void 0:u.left,top:u==null?void 0:u.top,opacity:u==null?void 0:u.opacity}})]})});He.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const y=b.forwardRef(({options:l,onChange:a,direction:o="horizontal",alignment:t="start",selectedTabId:d,compactSpacing:e,overflowType:h="scrollable",inverted:m=!1,...v},C)=>{const[f,Z]=b.useState(!1),[w,E]=b.useState(!1),[J,z]=b.useState(!1),[Q,_]=b.useState(!1),[F,X]=b.useState(!1),[oe,L]=b.useState(!1),p=f||Q,u=w||J,c=b.useRef(null),{indicatorStyle:A}=Oe(c,d,o==="horizontal"?"bottom":"left"),B=o==="horizontal"&&(f||w)&&h==="dropdown",j=b.useCallback(()=>{if(c.current){const i=c.current.offsetWidth<c.current.scrollWidth||c.current.offsetHeight<c.current.scrollHeight,g=c.current.scrollLeft>0,T=c.current.scrollWidth-c.current.clientWidth-c.current.scrollLeft>0,S=c.current.scrollTop>0,R=c.current.scrollHeight-c.current.clientHeight-c.current.scrollTop>0;Z(g),E(T),_(S),z(R),X(i)}},[c]);b.useEffect(()=>{var i;return j(),window.addEventListener("resize",j),(i=c.current)==null||i.addEventListener("scroll",j),()=>{var g;window.removeEventListener("resize",j),(g=c.current)==null||g.removeEventListener("scroll",j)}},[j]),b.useEffect(()=>{!d&&l.length>0&&a(l[0].id)},[d,l,a]);const D=i=>{const g=i.currentTarget,T=g.getAttribute("id")||"";a(T),L(!1);const S=c.current;S&&Ge(g,S,o)},k=()=>{if(c.current){const i=o==="horizontal"?{left:-300}:{top:-300};c.current.scrollBy({...i,behavior:U()?"auto":"smooth"})}},r=()=>{if(c.current){const i=o==="horizontal"?{left:300}:{top:300};c.current.scrollBy({...i,behavior:U()?"auto":"smooth"})}},s=l.find(i=>i.id===d);return n.jsxs("div",{className:N["tab-container"],"data-direction":o,children:[n.jsx("div",{className:N["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":F&&h==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[F&&!B&&n.jsx(le,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:p?1:0,pointerEvents:p?"auto":"none"},onClick:k}),n.jsxs("div",{ref:i=>{c.current=i,typeof C=="function"?C(i):C&&(C.current=i)},role:"tablist",className:N.tab,"data-alignment":F?"start":t,"data-direction":o,"aria-orientation":o,"data-overflow-type":h,...v,children:[n.jsx("div",{className:N["tab-selected-indicator"],style:{left:B?0:A.left,width:(A.width??0)+(B?32:0),top:A.top,height:A.height}}),B&&s&&n.jsx(ze,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>L(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:N["tab-dropdown-button"],onClick:()=>L(i=>!i),"aria-label":"Afficher les onglets","data-inverted":m,children:[s&&s.icon&&n.jsx(te,{name:s.icon,appearance:"filled"}),s&&n.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&n.jsx(Re,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount}),n.jsx(te,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:oe,children:l.filter(i=>i.id!==d).map((i,g)=>n.jsx(Me,{id:i.id,label:i.label,onClick:D,disabled:i.disabled,leftIcon:i.icon,badgeCount:i.badgeCount,badgeContent:i.badgeContent,badgeIcon:i.badgeIcon,badgeType:i.badgeType,showBadge:!0},`${i.id}-dropdown-${g}`))}),l.map((i,g)=>n.jsx(He,{onClick:D,isSelected:d===i.id,compactSpacing:e,direction:o,"data-hidden":B,inverted:m,...i},`${i.id}-${g}`))]}),F&&!B&&n.jsx(le,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:u?1:0,pointerEvents:u?"auto":"none"},onClick:r})]}),n.jsx("div",{className:N["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":F&&h==="scrollable"?!0:void 0})]})});y.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const _n={title:"Composants/Tab",component:y,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},I={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[a,o]=b.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},W={args:{...I.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},V={args:{...I.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(y,{...l,direction:"vertical",options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},K={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={tags:["!autodocs"],args:{...I.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:l=>{const[a,o]=b.useState(l.selectedTabId);return n.jsxs(n.Fragment,{children:[n.jsx(y,{...l,selectedTabId:a,onChange:o}),l.options.map(t=>n.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:a!==t.id,children:["Content for ",t.label]},t.id))]})},play:async({canvasElement:l,args:a,step:o})=>{const t=O(l),d=t.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await x(d).toHaveLength(a.options.length);for(const h of d)await o(`Badge visibility: ${h.id}`,async()=>{const m=O(h).queryByTestId("badge");e.includes(h.id)?(await x(m).toBeVisible(),await x(m).toHaveAttribute("data-badge-type",h.id==="neutral"?"neutral":"indicator")):await x(m).not.toBeInTheDocument()});await x(O(t.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await x(O(t.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},$={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},Y={tags:["!autodocs"],args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(y,{...l,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:a})=>{const o=O(l);De();const t=await o.getByRole("tab",{name:"First Tab"}),d=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),h=await o.getByRole("tab",{name:"Fourth Tab"}),m=await o.getByRole("tab",{name:"Fifth Tab"}),v=async f=>{x(f).toHaveAttribute("aria-selected","true"),x(f).toHaveFocus(),x(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},C=async f=>{x(f).toHaveAttribute("aria-selected","false"),x(f).not.toHaveFocus(),x(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await H.tab(),v(t)}),await a("Navigate to the second tab and select it",async()=>{await H.keyboard(M),v(d)}),await a("Navigate to the second tab and select it",async()=>{await H.keyboard(M),v(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await H.keyboard(M),v(m),C(h)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await H.keyboard(M),v(t)}),await a("Navigate back to the last tab and select it",async()=>{await H.keyboard(Le),v(m)})}};var ie,de,se;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(se=(de=I.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var re,ce,be;W.parameters={...W.parameters,docs:{...(re=W.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(be=(ce=W.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var pe,ue,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var he,me,Te;K.parameters={...K.parameters,docs:{...(he=K.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Te=(me=K.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var ye,ve,fe;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,Ie,Ce;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var we,Se,Be;G.parameters={...G.parameters,docs:{...(we=G.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Se=G.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var je,ke,Ee;$.parameters={...$.parameters,docs:{...(je=$.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=$.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Fe,_e,Ae;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Ae=(_e=Y.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};const An=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","KeyboardInteraction"];export{G as BadgeVisibility,V as CompactSpacing,I as Default,q as IconsOnly,Y as KeyboardInteraction,$ as OverflowType,W as Vertical,P as WithBadge,K as WithIcons,An as __namedExportsOrder,_n as default};
