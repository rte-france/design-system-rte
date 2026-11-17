import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as G,f as Me}from"./keyboard-test.constants-CC9zMOdc.js";import{w as A,e as s,u as I,a as D}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as We}from"./testing.utils-DmLcTX3r.js";import{p as ne}from"./animation-BebxwkA_.js";import{u as Ke}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as qe}from"./Badge-BKSKdLzq.js";import{D as Pe}from"./Dropdown-CyecDUeK.js";import{D as Ge}from"./DropdownItem-DoVaQzxG.js";import{I as ze}from"./Icon-DBkoQNiA.js";import{I as de}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as $e}from"./log-handlers-Hz0GUguM.js";import{b as Ye,d as Ue,A as Ze,a as Je}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Qe=(l,a,o)=>{if(!Xe(l,a,o))return;const t=a.getBoundingClientRect(),i=l.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+en(i,t);a.scrollTo({left:e,behavior:ne()?"auto":"smooth"})}else{const e=a.scrollTop+nn(i,t);a.scrollTo({top:e,behavior:ne()?"auto":"smooth"})}},Xe=(l,a,o)=>{if(a&&l){const t=a.getBoundingClientRect(),i=l.getBoundingClientRect(),e=i.left<t.left,m=i.right>t.right,v=i.top<t.top,f=i.bottom>t.bottom;return o==="horizontal"?e||m:v||f}return!1},en=(l,a)=>{const o=l.left<a.left,t=l.right>a.right;return o?l.left-a.left:t?l.right-a.right:0},nn=(l,a)=>{const o=l.top<a.top,t=l.bottom>a.bottom;return o?l.top-a.top:t?l.bottom-a.bottom:0},an="_tab_1p8jr_1",R={"tab-container":"_tab-container_1p8jr_1",tab:an,"tab-selected-indicator":"_tab-selected-indicator_1p8jr_43","tab-dropdown-layout":"_tab-dropdown-layout_1p8jr_76","tab-dropdown-tablist":"_tab-dropdown-tablist_1p8jr_77","tab-border-horizontal":"_tab-border-horizontal_1p8jr_83","tab-border-vertical":"_tab-border-vertical_1p8jr_95","tab-dropdown-button":"_tab-dropdown-button_1p8jr_104"},tn="_tabitem_1rgd2_1",re={tabitem:tn,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ve=c.forwardRef(({id:l,panelId:a,label:o,isSelected:t,showBadge:i,badgeCount:e,badgeContent:m="empty",badgeIcon:v,onClick:f,icon:S,badgeType:w="indicator",compactSpacing:k,direction:F,disabled:H,inverted:V,ariaLabel:M,...ae},N)=>{const te={count:e,content:m,icon:v,badgeType:w},oe=e&&e>0&&m==="number",le=!H&&(i||oe||m==="icon"&&v),b=c.useRef(null),[h,E]=c.useState(null),W=r=>{!H&&!t?(f(r),E(u=>({...u,opacity:0}))):r.preventDefault()},p=c.useCallback(r=>{b.current&&!t&&E(r==="mouseover"?u=>({...u,opacity:1}):u=>({...u,opacity:0}))},[t]),K=r=>{const u=F==="vertical",T=u&&r.key===Ye,j=u&&r.key===Ue,g=!u&&r.key===Ze,d=!u&&r.key===Je,x=T||g;(x||(j||d))&&(r.preventDefault(),O(x?"next":"previous"))},O=r=>{var _;const u=(_=b.current)==null?void 0:_.parentElement;if(!u)return;const T=Array.from(u.querySelectorAll(`.${re.tabitem}`)),j=T.findIndex(q=>q===document.activeElement);let g=ie(j,T.length,r),d=0;const x=T.length;for(;T[g].getAttribute("data-disabled")==="true"&&d<x;)g=ie(g,T.length,r),d++;T[g].focus(),T[g].click()},ie=(r,u,T)=>T==="next"?(r+1)%u:(r-1+u)%u,y=c.useCallback(()=>{b.current&&!t&&E(F==="horizontal"?r=>{var u,T,j,g;return{...r,width:(u=b.current)==null?void 0:u.offsetWidth,left:((T=b.current)==null?void 0:T.offsetLeft)??0,top:(((j=b.current)==null?void 0:j.offsetTop)??0)+(((g=b.current)==null?void 0:g.offsetHeight)??0)}}:r=>{var u,T;return{...r,left:0,top:(u=b.current)==null?void 0:u.offsetTop,height:(T=b.current)==null?void 0:T.offsetHeight}})},[t,F]);return c.useEffect(()=>{var r;return y(),window.addEventListener("resize",y),(r=b.current)!=null&&r.parentElement&&b.current.parentElement.addEventListener("scroll",y),()=>{window.removeEventListener("resize",y),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",y)}},[y]),c.useEffect(()=>{var r;b.current&&E(F==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((r=b.current.parentElement)==null?void 0:r.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[F]),!o&&!M?($e("Tab",'Option with id "'+l+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:l,className:re.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-label":M,"aria-disabled":H,tabIndex:t?0:-1,"data-selected":t,"data-disabled":H,"data-direction":F,"data-inverted":V,onClick:W,"data-compact-spacing":k,ref:r=>{b.current=r,typeof N=="function"?N(r):N&&(N.current=r)},onKeyDown:K,onMouseEnter:()=>p("mouseover"),onMouseLeave:()=>p("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...ae,children:[S&&n.jsx(ze,{name:S,appearance:t?"filled":"outlined"}),o&&n.jsx("span",{children:o}),le&&n.jsx(qe,{...te})]}),n.jsx("span",{"data-disabled":H,className:re["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});Ve.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const C=c.forwardRef(({options:l,onChange:a,direction:o="horizontal",alignment:t="start",selectedTabId:i,compactSpacing:e,overflowType:m="scrollable",inverted:v=!1,"aria-label":f,"aria-labelledby":S,...w},k)=>{const[F,H]=c.useState(!1),[V,M]=c.useState(!1),[ae,N]=c.useState(!1),[te,oe]=c.useState(!1),[L,le]=c.useState(!1),[b,h]=c.useState(!1),E=F||te,W=V||ae,p=c.useRef(null),K=c.useRef(null),{indicatorStyle:O}=Ke(p,i,o==="horizontal"?"bottom":"left"),y=o==="horizontal"&&(F||V)&&m==="dropdown",r=c.useCallback(()=>{if(p.current){const d=p.current.offsetWidth<p.current.scrollWidth||p.current.offsetHeight<p.current.scrollHeight,x=p.current.scrollLeft>0,_=p.current.scrollWidth-p.current.clientWidth-p.current.scrollLeft>0,q=p.current.scrollTop>0,P=p.current.scrollHeight-p.current.clientHeight-p.current.scrollTop>0;H(x),M(_),oe(q),N(P),le(d)}},[p]);c.useEffect(()=>{var d;return r(),window.addEventListener("resize",r),(d=p.current)==null||d.addEventListener("scroll",r),()=>{var x;window.removeEventListener("resize",r),(x=p.current)==null||x.removeEventListener("scroll",r)}},[r]),c.useEffect(()=>{!i&&l.length>0&&a(l[0].id)},[i,l,a]);const u=d=>{var P;const x=d.currentTarget,_=x.getAttribute("id")||"";if(a(_),h(!1),y){(P=K.current)==null||P.focus({preventScroll:!0});return}const q=p.current;q&&Qe(x,q,o)},T=()=>{if(p.current){const d=o==="horizontal"?{left:-300}:{top:-300};p.current.scrollBy({...d,behavior:ne()?"auto":"smooth"})}},j=()=>{if(p.current){const d=o==="horizontal"?{left:300}:{top:300};p.current.scrollBy({...d,behavior:ne()?"auto":"smooth"})}},g=l.find(d=>d.id===i);return n.jsxs("div",{className:R["tab-container"],"data-direction":o,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":L&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[L&&!y&&n.jsx(de,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:E?1:0,pointerEvents:E?"auto":"none"},onClick:T}),n.jsxs("div",{ref:d=>{p.current=d,typeof k=="function"?k(d):k&&(k.current=d)},role:y?void 0:"tablist",className:R.tab,"data-alignment":L?"start":t,"data-direction":o,"aria-orientation":y?void 0:o,"aria-label":y?void 0:f,"aria-labelledby":y?void 0:S,"data-overflow-type":m,...w,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:y?0:O.left,width:(O.width??0)+(y?32:0),top:O.top,height:O.height}}),y&&g&&n.jsx(Pe,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>h(!1),offset:10,trigger:n.jsxs("div",{className:R["tab-dropdown-layout"],children:[n.jsx("div",{role:"tablist",className:R["tab-dropdown-tablist"],"aria-label":f,"aria-labelledby":S,"aria-orientation":o,children:n.jsxs("div",{className:R["tab-dropdown-button"],role:"tab","aria-selected":!0,"aria-label":g.label,"data-inverted":v,children:[g.icon&&n.jsx(ze,{name:g.icon,appearance:"filled"}),g.label&&n.jsx("div",{style:{flexShrink:0},children:g.label}),g.badgeCount&&g.badgeCount>0&&g.badgeContent==="number"&&n.jsx(qe,{badgeType:g.badgeType,content:g.badgeContent,count:g.badgeCount})]})}),n.jsx(de,{ref:K,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":b,name:b?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>h(d=>!d)})]}),isOpen:b,children:l.filter(d=>d.id!==i).map((d,x)=>n.jsx(Ge,{id:d.id,label:d.label,onClick:u,disabled:d.disabled,leftIcon:d.icon,badgeCount:d.badgeCount,badgeContent:d.badgeContent,badgeIcon:d.badgeIcon,badgeType:d.badgeType,showBadge:!0},`${d.id}-dropdown-${x}`))}),l.map((d,x)=>n.jsx(Ve,{onClick:u,isSelected:i===d.id,compactSpacing:e,direction:o,"data-hidden":y,inverted:v,...d},`${d.id}-${x}`))]}),L&&!y&&n.jsx(de,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:W?1:0,pointerEvents:W?"auto":"none"},onClick:j})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":L&&m==="scrollable"?!0:void 0})]})});C.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Ln={title:"Composants/Tab",component:C,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},B={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[a,o]=c.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},$={args:{...B.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[a,o]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},Y={args:{...B.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[a,o]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(C,{...l,direction:"vertical",options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},U={args:{...B.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=c.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Z={args:{...B.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=c.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},J={args:{...B.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=c.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Q={tags:["!autodocs"],args:{...B.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:l=>{const[a,o]=c.useState(l.selectedTabId);return n.jsxs(n.Fragment,{children:[n.jsx(C,{...l,selectedTabId:a,onChange:o}),l.options.map(t=>n.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:a!==t.id,children:["Content for ",t.label]},t.id))]})},play:async({canvasElement:l,args:a,step:o})=>{const t=A(l),i=t.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await s(i).toHaveLength(a.options.length);for(const m of i)await o(`Badge visibility: ${m.id}`,async()=>{const v=A(m).queryByTestId("badge");e.includes(m.id)?(await s(v).toBeVisible(),await s(v).toHaveAttribute("data-badge-type",m.id==="neutral"?"neutral":"indicator")):await s(v).not.toBeInTheDocument()});await s(A(t.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await s(A(t.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},z={args:{...B.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i,overflowType:"dropdown","aria-label":"Dropdown tabs"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},X={tags:["!autodocs","tab-dropdown-interaction"],args:{...z.args},render:z.render,play:async({canvasElement:l})=>{const a=A(l),o=A(l.ownerDocument.body),t=A(a.getByRole("tablist",{name:"Dropdown tabs"})),i=await a.findByRole("button",{name:"Afficher les onglets"}),e=async()=>{const S=t.getByRole("tab",{selected:!0}),w=S.getBoundingClientRect(),k=i.getBoundingClientRect();await s(k.left-w.right).toBeCloseTo(parseFloat(getComputedStyle(S).marginRight),1),await s(k.top+k.height/2).toBeCloseTo(w.top+w.height/2,1)};await s(l.querySelector("button button")).toBeNull(),await s(t.queryByRole("button",{name:"Afficher les onglets"})).toBeNull(),await e(),await s(i).toHaveAttribute("aria-haspopup","true"),await s(i).toHaveAttribute("aria-expanded","false"),await I.click(i),await D(()=>s(i).toHaveAttribute("aria-expanded","true")),await I.click(await o.findByRole("menuitem",{name:"Second Tab"})),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(t.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await s(i).toHaveAttribute("aria-expanded","false"),await s(i).toHaveFocus(),await I.keyboard("{Enter}");const m=await o.findByRole("menuitem",{name:"First Tab very long and descriptive"});await D(()=>s(m).toHaveFocus()),await I.keyboard("{ArrowDown}");const v=await o.findByRole("menuitem",{name:"Third Tab"});await s(v).toHaveFocus(),await I.keyboard("{Enter}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument());const f=t.getByRole("tab",{name:"Third Tab",selected:!0});await s(f).toBeVisible(),await s(i).toHaveFocus(),await e(),await I.click(f),await s(i).toHaveAttribute("aria-expanded","false"),await I.click(i),await D(()=>s(i).toHaveAttribute("aria-expanded","true")),await D(()=>s(o.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await I.keyboard("{Escape}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(i).toHaveFocus()}},ee={tags:["!autodocs"],args:{...B.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(C,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:a})=>{const o=A(l);We();const t=await o.getByRole("tab",{name:"First Tab"}),i=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),m=await o.getByRole("tab",{name:"Fourth Tab"}),v=await o.getByRole("tab",{name:"Fifth Tab"}),f=async w=>{s(w).toHaveAttribute("aria-selected","true"),s(w).toHaveFocus(),s(o.getByText(`Contenu onglet ${w.textContent}`)).toBeVisible()},S=async w=>{s(w).toHaveAttribute("aria-selected","false"),s(w).not.toHaveFocus(),s(o.getByText(`Contenu onglet ${w.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await I.tab(),f(t)}),await a("Navigate to the second tab and select it",async()=>{await I.keyboard(G),f(i)}),await a("Navigate to the second tab and select it",async()=>{await I.keyboard(G),f(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await I.keyboard(G),f(v),S(m)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await I.keyboard(G),f(t)}),await a("Navigate back to the last tab and select it",async()=>{await I.keyboard(Me),f(v)})}};var se,ce,be;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(be=(ce=B.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var pe,ue,ge;$.parameters={...$.parameters,docs:{...(pe=$.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ge=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,he,Te;Y.parameters={...Y.parameters,docs:{...(me=Y.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(Te=(he=Y.parameters)==null?void 0:he.docs)==null?void 0:Te.source}}};var ye,ve,fe;U.parameters={...U.parameters,docs:{...(ye=U.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(fe=(ve=U.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,we,Ie;Z.parameters={...Z.parameters,docs:{...(xe=Z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ie=(we=Z.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Ce,Be,Se;J.parameters={...J.parameters,docs:{...(Ce=J.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(Be=J.parameters)==null?void 0:Be.docs)==null?void 0:Se.source}}};var ke,Ee,Fe;Q.parameters={...Q.parameters,docs:{...(ke=Q.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
}`,...(Fe=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var je,Re,Ae;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
          <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} overflowType="dropdown" aria-label="Dropdown tabs" />
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
}`,...(Ae=(Re=z.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var He,_e,De;X.parameters={...X.parameters,docs:{...(He=X.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ["!autodocs", "tab-dropdown-interaction"],
  args: {
    ...OverflowType.args
  },
  render: OverflowType.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const page = within(canvasElement.ownerDocument.body);
    const tabList = within(canvas.getByRole("tablist", {
      name: "Dropdown tabs"
    }));
    const dropdownButton = await canvas.findByRole("button", {
      name: "Afficher les onglets"
    });
    const expectChevronAlignment = async () => {
      const selectedTab = tabList.getByRole("tab", {
        selected: true
      });
      const tabBounds = selectedTab.getBoundingClientRect();
      const buttonBounds = dropdownButton.getBoundingClientRect();
      await expect(buttonBounds.left - tabBounds.right).toBeCloseTo(parseFloat(getComputedStyle(selectedTab).marginRight), 1);
      await expect(buttonBounds.top + buttonBounds.height / 2).toBeCloseTo(tabBounds.top + tabBounds.height / 2, 1);
    };
    await expect(canvasElement.querySelector("button button")).toBeNull();
    await expect(tabList.queryByRole("button", {
      name: "Afficher les onglets"
    })).toBeNull();
    await expectChevronAlignment();
    await expect(dropdownButton).toHaveAttribute("aria-haspopup", "true");
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(dropdownButton);
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "true"));
    await userEvent.click(await page.findByRole("menuitem", {
      name: "Second Tab"
    }));
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(tabList.getByRole("tab", {
      name: "Second Tab",
      selected: true
    })).toBeVisible();
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");
    await expect(dropdownButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    const firstTab = await page.findByRole("menuitem", {
      name: "First Tab very long and descriptive"
    });
    await waitFor(() => expect(firstTab).toHaveFocus());
    await userEvent.keyboard("{ArrowDown}");
    const thirdTab = await page.findByRole("menuitem", {
      name: "Third Tab"
    });
    await expect(thirdTab).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    const selectedTab = tabList.getByRole("tab", {
      name: "Third Tab",
      selected: true
    });
    await expect(selectedTab).toBeVisible();
    await expect(dropdownButton).toHaveFocus();
    await expectChevronAlignment();
    await userEvent.click(selectedTab);
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(dropdownButton);
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "true"));
    await waitFor(() => expect(page.getByRole("menuitem", {
      name: "First Tab very long and descriptive"
    })).toHaveFocus());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(dropdownButton).toHaveFocus();
  }
}`,...(De=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Ne,Le,Oe;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Oe=(Le=ee.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};const On=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","OverflowTypeInteraction","KeyboardInteraction"];export{Q as BadgeVisibility,Y as CompactSpacing,B as Default,Z as IconsOnly,ee as KeyboardInteraction,z as OverflowType,X as OverflowTypeInteraction,$ as Vertical,J as WithBadge,U as WithIcons,On as __namedExportsOrder,Ln as default};
