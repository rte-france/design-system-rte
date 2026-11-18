import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as P,f as Ye}from"./keyboard-test.constants-CC9zMOdc.js";import{w as F,e as r,u as w,a as O}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Ue}from"./testing.utils-DmLcTX3r.js";import{p as ae}from"./animation-BebxwkA_.js";import{u as Ze}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as Je,B as Ke}from"./Badge-DUkuUEsZ.js";import{D as Qe}from"./Dropdown-CyecDUeK.js";import{D as Xe}from"./DropdownItem-CkNTUYza.js";import{I as $e}from"./Icon-DBkoQNiA.js";import{I as ie}from"./IconButton-B1jvMDIw.js";import"./timepicker.constants-CynrC_9x.js";import{l as en}from"./log-handlers-Hz0GUguM.js";import{g as nn}from"./accessibility.utils-lOXNQWjo.js";import{b as an,d as tn,A as on,a as ln}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const dn=(l,t,a)=>{if(!rn(l,t,a))return;const o=t.getBoundingClientRect(),i=l.getBoundingClientRect();if(a==="horizontal"){const e=t.scrollLeft+sn(i,o);t.scrollTo({left:e,behavior:ae()?"auto":"smooth"})}else{const e=t.scrollTop+cn(i,o);t.scrollTo({top:e,behavior:ae()?"auto":"smooth"})}},rn=(l,t,a)=>{if(t&&l){const o=t.getBoundingClientRect(),i=l.getBoundingClientRect(),e=i.left<o.left,h=i.right>o.right,y=i.top<o.top,T=i.bottom>o.bottom;return a==="horizontal"?e||h:y||T}return!1},sn=(l,t)=>{const a=l.left<t.left,o=l.right>t.right;return a?l.left-t.left:o?l.right-t.right:0},cn=(l,t)=>{const a=l.top<t.top,o=l.bottom>t.bottom;return a?l.top-t.top:o?l.bottom-t.bottom:0},bn="_tab_1p8jr_1",N={"tab-container":"_tab-container_1p8jr_1",tab:bn,"tab-selected-indicator":"_tab-selected-indicator_1p8jr_43","tab-dropdown-layout":"_tab-dropdown-layout_1p8jr_76","tab-dropdown-tablist":"_tab-dropdown-tablist_1p8jr_77","tab-border-horizontal":"_tab-border-horizontal_1p8jr_83","tab-border-vertical":"_tab-border-vertical_1p8jr_95","tab-dropdown-button":"_tab-dropdown-button_1p8jr_104"},pn="_tabitem_1rgd2_1",de={tabitem:pn,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Pe=p.forwardRef(({id:l,panelId:t,label:a,isSelected:o,showBadge:i,badgeCount:e,badgeContent:h="empty",badgeIcon:y,onClick:T,icon:B,badgeType:f="indicator",compactSpacing:S,direction:k,disabled:_,inverted:M,ariaLabel:K,...te},z)=>{const oe=e!==void 0&&e>0&&h==="number",R=i||oe||h==="icon"&&!!y,le=nn({ariaLabel:K,labelText:a,icon:B,showBadge:R,badgeCount:e,badgeContent:h,badgeIcon:y}),V={count:e,content:h,icon:y,badgeType:f},W=!_&&Je({showBadge:!!R,badgeContent:h,badgeCount:e,badgeIcon:y}),u=p.useRef(null),[v,c]=p.useState(null),$=s=>{!_&&!o?(T(s),c(g=>({...g,opacity:0}))):s.preventDefault()},D=p.useCallback(s=>{u.current&&!o&&c(s==="mouseover"?g=>({...g,opacity:1}):g=>({...g,opacity:0}))},[o]),ce=s=>{const g=k==="vertical",b=g&&s.key===an,d=g&&s.key===tn,m=!g&&s.key===on,H=!g&&s.key===ln,j=b||m;(j||(d||H))&&(s.preventDefault(),I(j?"next":"previous"))},I=s=>{var L;const g=(L=u.current)==null?void 0:L.parentElement;if(!g)return;const b=Array.from(g.querySelectorAll(`.${de.tabitem}`)),d=b.findIndex(Ge=>Ge===document.activeElement);let m=A(d,b.length,s),H=0;const j=b.length;for(;b[m].getAttribute("data-disabled")==="true"&&H<j;)m=A(m,b.length,s),H++;b[m].focus(),b[m].click()},A=(s,g,b)=>b==="next"?(s+1)%g:(s-1+g)%g,E=p.useCallback(()=>{u.current&&!o&&c(k==="horizontal"?s=>{var g,b,d,m;return{...s,width:(g=u.current)==null?void 0:g.offsetWidth,left:((b=u.current)==null?void 0:b.offsetLeft)??0,top:(((d=u.current)==null?void 0:d.offsetTop)??0)+(((m=u.current)==null?void 0:m.offsetHeight)??0)}}:s=>{var g,b;return{...s,left:0,top:(g=u.current)==null?void 0:g.offsetTop,height:(b=u.current)==null?void 0:b.offsetHeight}})},[o,k]);return p.useEffect(()=>{var s;return E(),window.addEventListener("resize",E),(s=u.current)!=null&&s.parentElement&&u.current.parentElement.addEventListener("scroll",E),()=>{window.removeEventListener("resize",E),u.current&&u.current.parentElement&&u.current.parentElement.removeEventListener("scroll",E)}},[E]),p.useEffect(()=>{var s;u.current&&c(k==="horizontal"?{width:u.current.offsetWidth,left:u.current.offsetLeft-(((s=u.current.parentElement)==null?void 0:s.scrollLeft)??0),top:u.current.offsetTop+u.current.offsetHeight,opacity:0}:{left:0,top:u.current.offsetTop,height:u.current.offsetHeight,opacity:0})},[k]),!a&&!K?(en("Tab",'Option with id "'+l+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:l,className:de.tabitem,role:"tab","aria-selected":o,"aria-controls":t,"aria-disabled":_,"aria-label":le,tabIndex:o?0:-1,"data-selected":o,"data-disabled":_,"data-direction":k,"data-inverted":M,onClick:$,"data-compact-spacing":S,ref:s=>{u.current=s,typeof z=="function"?z(s):z&&(z.current=s)},onKeyDown:ce,onMouseEnter:()=>D("mouseover"),onMouseLeave:()=>D("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...te,children:[B&&n.jsx($e,{name:B,appearance:o?"filled":"outlined"}),a&&n.jsx("span",{children:a}),W&&n.jsx(Ke,{...V})]}),n.jsx("span",{"data-disabled":_,className:de["segment-hover-indicator"],style:{width:v==null?void 0:v.width,height:v==null?void 0:v.height,left:v==null?void 0:v.left,top:v==null?void 0:v.top,opacity:v==null?void 0:v.opacity}})]})});Pe.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const x=p.forwardRef(({options:l,onChange:t,direction:a="horizontal",alignment:o="start",selectedTabId:i,compactSpacing:e,overflowType:h="scrollable",inverted:y=!1,"aria-label":T,"aria-labelledby":B,...f},S)=>{const[k,_]=p.useState(!1),[M,K]=p.useState(!1),[te,z]=p.useState(!1),[oe,se]=p.useState(!1),[R,le]=p.useState(!1),[V,W]=p.useState(!1),u=k||oe,v=M||te,c=p.useRef(null),$=p.useRef(null),{indicatorStyle:D}=Ze(c,i,a==="horizontal"?"bottom":"left"),I=a==="horizontal"&&(k||M)&&h==="dropdown",A=p.useCallback(()=>{if(c.current){const d=c.current.offsetWidth<c.current.scrollWidth||c.current.offsetHeight<c.current.scrollHeight,m=c.current.scrollLeft>0,H=c.current.scrollWidth-c.current.clientWidth-c.current.scrollLeft>0,j=c.current.scrollTop>0,L=c.current.scrollHeight-c.current.clientHeight-c.current.scrollTop>0;_(m),K(H),se(j),z(L),le(d)}},[c]);p.useEffect(()=>{var d;return A(),window.addEventListener("resize",A),(d=c.current)==null||d.addEventListener("scroll",A),()=>{var m;window.removeEventListener("resize",A),(m=c.current)==null||m.removeEventListener("scroll",A)}},[A]),p.useEffect(()=>{!i&&l.length>0&&t(l[0].id)},[i,l,t]);const E=d=>{var L;const m=d.currentTarget,H=m.getAttribute("id")||"";if(t(H),W(!1),I){(L=$.current)==null||L.focus({preventScroll:!0});return}const j=c.current;j&&dn(m,j,a)},s=()=>{if(c.current){const d=a==="horizontal"?{left:-300}:{top:-300};c.current.scrollBy({...d,behavior:ae()?"auto":"smooth"})}},g=()=>{if(c.current){const d=a==="horizontal"?{left:300}:{top:300};c.current.scrollBy({...d,behavior:ae()?"auto":"smooth"})}},b=l.find(d=>d.id===i);return n.jsxs("div",{className:N["tab-container"],"data-direction":a,children:[n.jsx("div",{className:N["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":a,"data-compact-spacing":e,"data-scrollable":R&&h==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:a==="horizontal"?"row":"column"},children:[R&&!I&&n.jsx(ie,{name:a==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:u?1:0,pointerEvents:u?"auto":"none"},onClick:s}),n.jsxs("div",{ref:d=>{c.current=d,typeof S=="function"?S(d):S&&(S.current=d)},role:I?void 0:"tablist",className:N.tab,"data-alignment":R?"start":o,"data-direction":a,"aria-orientation":I?void 0:a,"aria-label":I?void 0:T,"aria-labelledby":I?void 0:B,"data-overflow-type":h,...f,children:[n.jsx("div",{className:N["tab-selected-indicator"],style:{left:I?0:D.left,width:(D.width??0)+(I?32:0),top:D.top,height:D.height}}),I&&b&&n.jsx(Qe,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>W(!1),offset:10,trigger:n.jsxs("div",{className:N["tab-dropdown-layout"],children:[n.jsx("div",{role:"tablist",className:N["tab-dropdown-tablist"],"aria-label":T,"aria-labelledby":B,"aria-orientation":a,children:n.jsxs("div",{className:N["tab-dropdown-button"],role:"tab","aria-selected":!0,"aria-label":b.label,"data-inverted":y,children:[b.icon&&n.jsx($e,{name:b.icon,appearance:"filled"}),b.label&&n.jsx("div",{style:{flexShrink:0},children:b.label}),b.badgeCount&&b.badgeCount>0&&b.badgeContent==="number"&&n.jsx(Ke,{badgeType:b.badgeType,content:b.badgeContent,count:b.badgeCount})]})}),n.jsx(ie,{ref:$,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":V,name:V?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>W(d=>!d)})]}),isOpen:V,children:l.filter(d=>d.id!==i).map((d,m)=>n.jsx(Xe,{id:d.id,label:d.label,onClick:E,disabled:d.disabled,leftIcon:d.icon,badgeCount:d.badgeCount,badgeContent:d.badgeContent,badgeIcon:d.badgeIcon,badgeType:d.badgeType,showBadge:!0},`${d.id}-dropdown-${m}`))}),l.map((d,m)=>n.jsx(Pe,{onClick:E,isSelected:i===d.id,compactSpacing:e,direction:a,"data-hidden":I,inverted:y,...d},`${d.id}-${m}`))]}),R&&!I&&n.jsx(ie,{name:a==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:v?1:0,pointerEvents:v?"auto":"none"},onClick:g})]}),n.jsx("div",{className:N["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":a,"data-compact-spacing":e,"data-scrollable":R&&h==="scrollable"?!0:void 0})]})});x.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Pn={title:"Composants/Tab",component:x,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},C={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[t,a]=p.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{a(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{...C.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[t,a]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{a(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},Y={args:{...C.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[t,a]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{a(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(x,{...l,direction:"vertical",options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},U={args:{...C.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,a]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{a(e)};return n.jsxs(n.Fragment,{children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Z={args:{...C.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,a]=p.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{a(e)};return n.jsxs(n.Fragment,{children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},J={args:{...C.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,a]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{a(e)};return n.jsxs(n.Fragment,{children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Q={tags:["!autodocs"],args:{...C.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5,showBadge:!0},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification",showBadge:!0},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:l=>{const[t,a]=p.useState(l.selectedTabId);return n.jsxs(n.Fragment,{children:[n.jsx(x,{...l,selectedTabId:t,onChange:a}),l.options.map(o=>n.jsxs("div",{role:"tabpanel",id:o.panelId,"aria-labelledby":o.id,hidden:t!==o.id,children:["Content for ",o.label]},o.id))]})},play:async({canvasElement:l,args:t,step:a})=>{const o=F(l),i=o.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await r(i).toHaveLength(t.options.length);for(const h of i)await a(`Badge visibility: ${h.id}`,async()=>{const y=F(h).queryByTestId("badge");e.includes(h.id)?(await r(y).toBeVisible(),await r(y).toHaveAttribute("data-badge-type",h.id==="neutral"?"neutral":"indicator")):await r(y).not.toBeInTheDocument()});await r(F(o.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await r(F(o.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},q={args:{...C.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,a]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{a(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i,overflowType:"dropdown","aria-label":"Dropdown tabs"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},X={tags:["!autodocs"],args:{...q.args},render:q.render,play:async({canvasElement:l})=>{const t=F(l),a=F(l.ownerDocument.body),o=F(t.getByRole("tablist",{name:"Dropdown tabs"})),i=await t.findByRole("button",{name:"Afficher les onglets"}),e=async()=>{const B=o.getByRole("tab",{selected:!0}),f=B.getBoundingClientRect(),S=i.getBoundingClientRect();await r(S.left-f.right).toBeCloseTo(parseFloat(getComputedStyle(B).marginRight),1),await r(S.top+S.height/2).toBeCloseTo(f.top+f.height/2,1)};await r(l.querySelector("button button")).toBeNull(),await r(o.queryByRole("button",{name:"Afficher les onglets"})).toBeNull(),await e(),await r(i).toHaveAttribute("aria-haspopup","true"),await r(i).toHaveAttribute("aria-expanded","false"),await w.click(i),await O(()=>r(i).toHaveAttribute("aria-expanded","true")),await w.click(await a.findByRole("menuitem",{name:"Second Tab"})),await O(()=>r(a.queryByRole("menu")).not.toBeInTheDocument()),await r(o.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await r(i).toHaveAttribute("aria-expanded","false"),await r(i).toHaveFocus(),await w.keyboard("{Enter}");const h=await a.findByRole("menuitem",{name:"First Tab very long and descriptive"});await O(()=>r(h).toHaveFocus()),await w.keyboard("{ArrowDown}");const y=await a.findByRole("menuitem",{name:"Third Tab"});await r(y).toHaveFocus(),await w.keyboard("{Enter}"),await O(()=>r(a.queryByRole("menu")).not.toBeInTheDocument());const T=o.getByRole("tab",{name:"Third Tab",selected:!0});await r(T).toBeVisible(),await r(i).toHaveFocus(),await e(),await w.click(T),await r(i).toHaveAttribute("aria-expanded","false"),await w.click(i),await O(()=>r(i).toHaveAttribute("aria-expanded","true")),await O(()=>r(a.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await w.keyboard("{Escape}"),await O(()=>r(a.queryByRole("menu")).not.toBeInTheDocument()),await r(i).toHaveFocus()}},ee={tags:["!autodocs"],args:{...C.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,a]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{a(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(x,{...l,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:t})=>{const a=F(l);Ue();const o=await a.getByRole("tab",{name:"First Tab"}),i=await a.getByRole("tab",{name:"Second Tab"}),e=await a.getByRole("tab",{name:"Third Tab"}),h=await a.getByRole("tab",{name:"Fourth Tab"}),y=await a.getByRole("tab",{name:"Fifth Tab"}),T=async f=>{r(f).toHaveAttribute("aria-selected","true"),r(f).toHaveFocus(),r(a.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},B=async f=>{r(f).toHaveAttribute("aria-selected","false"),r(f).not.toHaveFocus(),r(a.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await w.tab(),T(o)}),await t("Navigate to the second tab and select it",async()=>{await w.keyboard(P),T(i)}),await t("Navigate to the second tab and select it",async()=>{await w.keyboard(P),T(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await w.keyboard(P),T(y),B(h)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await w.keyboard(P),T(o)}),await t("Navigate back to the last tab and select it",async()=>{await w.keyboard(Ye),T(y)})}},re=[{id:"label",title:"label only",expectedAriaLabel:"Libellé seul",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Libellé seul",id:"target",panelId:"target-panel"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes",panelId:"target-panel"}]},{id:"labelNumberBadge",title:"label + number badge",expectedAriaLabel:"Alertes, 3",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Alertes",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"labelEmptyBadge",title:"label + empty badge",expectedAriaLabel:"Favoris. Notification",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Favoris",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}]},{id:"iconOnly",title:"icon without label",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",panelId:"target-panel",ariaLabel:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",ariaLabel:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator",panelId:"target-panel"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-grid",ariaLabel:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator",panelId:"target-panel"}]}],ne={tags:["!autodocs"],args:{...C.args,onChange:()=>{},options:[]},render:()=>{const[l,t]=p.useState(Object.fromEntries(re.map(a=>[a.id,"ref"])));return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:520,padding:8},"data-testid":"accessible-name-validation",children:[n.jsx("p",{style:{margin:0,fontSize:14},children:"Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de développement."}),re.map(a=>n.jsxs("section",{"aria-labelledby":`case-${a.id}-title`,children:[n.jsx("h3",{id:`case-${a.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:a.title}),n.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Nom accessible attendu : ",n.jsx("code",{children:a.expectedAriaLabel})]}),n.jsx(x,{options:[...a.options],selectedTabId:l[a.id],onChange:o=>t(i=>({...i,[a.id]:o})),"aria-label":a.title})]},a.id))]})},play:async({canvasElement:l})=>{const t=F(l).getByTestId("accessible-name-validation").querySelectorAll("section");re.forEach((a,o)=>{const i=Array.from(t[o].querySelectorAll("[role='tab']"));r(i[1]).toHaveAttribute("aria-label",a.expectedAriaLabel)})}};var be,pe,ue;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,me,he;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(he=(me=G.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ye,ve,Te;Y.parameters={...Y.parameters,docs:{...(ye=Y.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Te=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};var fe,xe,we;U.parameters={...U.parameters,docs:{...(fe=U.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ie,Ce,Be;Z.parameters={...Z.parameters,docs:{...(Ie=Z.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=Z.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Se,ke,Ae;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ae=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Ee,je,Fe;Q.parameters={...Q.parameters,docs:{...(Ee=Q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
      badgeCount: 5,
      showBadge: true
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
      badgeIcon: "notification",
      showBadge: true
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
}`,...(Fe=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var Re,He,Le;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Le=(He=q.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var Ne,_e,De;X.parameters={...X.parameters,docs:{...(Ne=X.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
}`,...(De=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Oe,ze,qe;ee.parameters={...ee.parameters,docs:{...(Oe=ee.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(qe=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:qe.source}}};var Ve,We,Me;ne.parameters={...ne.parameters,docs:{...(Ve=ne.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onChange: () => {},
    options: []
  },
  render: () => {
    const [selectedByCase, setSelectedByCase] = useState<Record<string, string>>(Object.fromEntries(accessibleNameValidationCases.map(validationCase => [validationCase.id, "ref"])));
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: 520,
      padding: 8
    }} data-testid="accessible-name-validation">
        <p style={{
        margin: 0,
        fontSize: 14
      }}>
          Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de
          développement.
        </p>
        {accessibleNameValidationCases.map(validationCase => <section key={validationCase.id} aria-labelledby={\`case-\${validationCase.id}-title\`}>
            <h3 id={\`case-\${validationCase.id}-title\`} style={{
          margin: "0 0 4px",
          fontSize: 16
        }}>
              {validationCase.title}
            </h3>
            <p style={{
          margin: "0 0 8px",
          fontSize: 13,
          color: "#555"
        }}>
              Nom accessible attendu : <code>{validationCase.expectedAriaLabel}</code>
            </p>
            <Tab options={[...validationCase.options]} selectedTabId={selectedByCase[validationCase.id]} onChange={id => setSelectedByCase(previous => ({
          ...previous,
          [validationCase.id]: id
        }))} aria-label={validationCase.title} />
          </section>)}
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const sections = within(canvasElement).getByTestId("accessible-name-validation").querySelectorAll("section");
    accessibleNameValidationCases.forEach((validationCase, index) => {
      const tabs = Array.from(sections[index].querySelectorAll("[role='tab']"));
      expect(tabs[1]).toHaveAttribute("aria-label", validationCase.expectedAriaLabel);
    });
  }
}`,...(Me=(We=ne.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};const Gn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","OverflowTypeInteraction","KeyboardInteraction","AccessibleNameValidation"];export{ne as AccessibleNameValidation,Q as BadgeVisibility,Y as CompactSpacing,C as Default,Z as IconsOnly,ee as KeyboardInteraction,q as OverflowType,X as OverflowTypeInteraction,G as Vertical,J as WithBadge,U as WithIcons,Gn as __namedExportsOrder,Pn as default};
