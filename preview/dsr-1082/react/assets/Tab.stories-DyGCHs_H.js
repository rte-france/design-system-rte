import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as K,f as Ve}from"./keyboard-test.constants-CC9zMOdc.js";import{w as H,e as b,u as f,a as L}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Me}from"./testing.utils-DmLcTX3r.js";import{p as X}from"./animation-BebxwkA_.js";import{u as We}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ne}from"./Badge-BKSKdLzq.js";import{D as Ke}from"./Dropdown-CyecDUeK.js";import{D as Pe}from"./DropdownItem-DoVaQzxG.js";import{I as Oe}from"./Icon-DBkoQNiA.js";import{I as oe}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Ge}from"./log-handlers-Hz0GUguM.js";import{b as $e,d as Ye,A as Ue,a as Ze}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Je=(l,a,o)=>{if(!Qe(l,a,o))return;const t=a.getBoundingClientRect(),i=l.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+Xe(i,t);a.scrollTo({left:e,behavior:X()?"auto":"smooth"})}else{const e=a.scrollTop+en(i,t);a.scrollTo({top:e,behavior:X()?"auto":"smooth"})}},Qe=(l,a,o)=>{if(a&&l){const t=a.getBoundingClientRect(),i=l.getBoundingClientRect(),e=i.left<t.left,h=i.right>t.right,T=i.top<t.top,x=i.bottom>t.bottom;return o==="horizontal"?e||h:T||x}return!1},Xe=(l,a)=>{const o=l.left<a.left,t=l.right>a.right;return o?l.left-a.left:t?l.right-a.right:0},en=(l,a)=>{const o=l.top<a.top,t=l.bottom>a.bottom;return o?l.top-a.top:t?l.bottom-a.bottom:0},nn="_tab_1tjub_1",z={"tab-container":"_tab-container_1tjub_1",tab:nn,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},an="_tabitem_1rgd2_1",le={tabitem:an,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},ze=p.forwardRef(({id:l,panelId:a,label:o,isSelected:t,showBadge:i,badgeCount:e,badgeContent:h="empty",badgeIcon:T,onClick:x,icon:C,badgeType:w="indicator",compactSpacing:ee,direction:B,disabled:A,inverted:ne,ariaLabel:V,...ae},N)=>{const _={count:e,content:h,icon:T,badgeType:w},te=e&&e>0&&h==="number",O=!A&&(i||te||h==="icon"&&T),u=p.useRef(null),[y,c]=p.useState(null),W=s=>{!A&&!t?(x(s),c(g=>({...g,opacity:0}))):s.preventDefault()},D=p.useCallback(s=>{u.current&&!t&&c(s==="mouseover"?g=>({...g,opacity:1}):g=>({...g,opacity:0}))},[t]),ie=s=>{const g=B==="vertical",r=g&&s.key===$e,d=g&&s.key===Ye,m=!g&&s.key===Ue,j=!g&&s.key===Ze,F=r||m;(F||(d||j))&&(s.preventDefault(),S(F?"next":"previous"))},S=s=>{var R;const g=(R=u.current)==null?void 0:R.parentElement;if(!g)return;const r=Array.from(g.querySelectorAll(`.${le.tabitem}`)),d=r.findIndex(qe=>qe===document.activeElement);let m=k(d,r.length,s),j=0;const F=r.length;for(;r[m].getAttribute("data-disabled")==="true"&&j<F;)m=k(m,r.length,s),j++;r[m].focus(),r[m].click()},k=(s,g,r)=>r==="next"?(s+1)%g:(s-1+g)%g,E=p.useCallback(()=>{u.current&&!t&&c(B==="horizontal"?s=>{var g,r,d,m;return{...s,width:(g=u.current)==null?void 0:g.offsetWidth,left:((r=u.current)==null?void 0:r.offsetLeft)??0,top:(((d=u.current)==null?void 0:d.offsetTop)??0)+(((m=u.current)==null?void 0:m.offsetHeight)??0)}}:s=>{var g,r;return{...s,left:0,top:(g=u.current)==null?void 0:g.offsetTop,height:(r=u.current)==null?void 0:r.offsetHeight}})},[t,B]);return p.useEffect(()=>{var s;return E(),window.addEventListener("resize",E),(s=u.current)!=null&&s.parentElement&&u.current.parentElement.addEventListener("scroll",E),()=>{window.removeEventListener("resize",E),u.current&&u.current.parentElement&&u.current.parentElement.removeEventListener("scroll",E)}},[E]),p.useEffect(()=>{var s;u.current&&c(B==="horizontal"?{width:u.current.offsetWidth,left:u.current.offsetLeft-(((s=u.current.parentElement)==null?void 0:s.scrollLeft)??0),top:u.current.offsetTop+u.current.offsetHeight,opacity:0}:{left:0,top:u.current.offsetTop,height:u.current.offsetHeight,opacity:0})},[B]),!o&&!V?(Ge("Tab",'Option with id "'+l+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:l,className:le.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-label":V,"aria-disabled":A,tabIndex:t?0:-1,"data-selected":t,"data-disabled":A,"data-direction":B,"data-inverted":ne,onClick:W,"data-compact-spacing":ee,ref:s=>{u.current=s,typeof N=="function"?N(s):N&&(N.current=s)},onKeyDown:ie,onMouseEnter:()=>D("mouseover"),onMouseLeave:()=>D("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...ae,children:[C&&n.jsx(Oe,{name:C,appearance:t?"filled":"outlined"}),o&&n.jsx("span",{children:o}),O&&n.jsx(Ne,{..._})]}),n.jsx("span",{"data-disabled":A,className:le["segment-hover-indicator"],style:{width:y==null?void 0:y.width,height:y==null?void 0:y.height,left:y==null?void 0:y.left,top:y==null?void 0:y.top,opacity:y==null?void 0:y.opacity}})]})});ze.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const v=p.forwardRef(({options:l,onChange:a,direction:o="horizontal",alignment:t="start",selectedTabId:i,compactSpacing:e,overflowType:h="scrollable",inverted:T=!1,...x},C)=>{const[w,ee]=p.useState(!1),[B,A]=p.useState(!1),[ne,V]=p.useState(!1),[ae,N]=p.useState(!1),[_,te]=p.useState(!1),[M,O]=p.useState(!1),u=w||ae,y=B||ne,c=p.useRef(null),W=p.useRef(null),{indicatorStyle:D}=We(c,i,o==="horizontal"?"bottom":"left"),S=o==="horizontal"&&(w||B)&&h==="dropdown",k=p.useCallback(()=>{if(c.current){const d=c.current.offsetWidth<c.current.scrollWidth||c.current.offsetHeight<c.current.scrollHeight,m=c.current.scrollLeft>0,j=c.current.scrollWidth-c.current.clientWidth-c.current.scrollLeft>0,F=c.current.scrollTop>0,R=c.current.scrollHeight-c.current.clientHeight-c.current.scrollTop>0;ee(m),A(j),N(F),V(R),te(d)}},[c]);p.useEffect(()=>{var d;return k(),window.addEventListener("resize",k),(d=c.current)==null||d.addEventListener("scroll",k),()=>{var m;window.removeEventListener("resize",k),(m=c.current)==null||m.removeEventListener("scroll",k)}},[k]),p.useEffect(()=>{!i&&l.length>0&&a(l[0].id)},[i,l,a]);const E=d=>{var R;const m=d.currentTarget,j=m.getAttribute("id")||"";if(a(j),O(!1),S){(R=W.current)==null||R.focus({preventScroll:!0});return}const F=c.current;F&&Je(m,F,o)},s=()=>{if(c.current){const d=o==="horizontal"?{left:-300}:{top:-300};c.current.scrollBy({...d,behavior:X()?"auto":"smooth"})}},g=()=>{if(c.current){const d=o==="horizontal"?{left:300}:{top:300};c.current.scrollBy({...d,behavior:X()?"auto":"smooth"})}},r=l.find(d=>d.id===i);return n.jsxs("div",{className:z["tab-container"],"data-direction":o,children:[n.jsx("div",{className:z["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":_&&h==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[_&&!S&&n.jsx(oe,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:u?1:0,pointerEvents:u?"auto":"none"},onClick:s}),n.jsxs("div",{ref:d=>{c.current=d,typeof C=="function"?C(d):C&&(C.current=d)},role:"tablist",className:z.tab,"data-alignment":_?"start":t,"data-direction":o,"aria-orientation":o,"data-overflow-type":h,...x,children:[n.jsx("div",{className:z["tab-selected-indicator"],style:{left:S?0:D.left,width:(D.width??0)+(S?32:0),top:D.top,height:D.height}}),S&&r&&n.jsx(Ke,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>O(!1),offset:10,trigger:n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsxs("button",{type:"button",className:z["tab-dropdown-button"],onClick:()=>O(d=>!d),role:"tab","aria-selected":!0,"aria-label":r==null?void 0:r.label,"data-inverted":T,children:[r&&r.icon&&n.jsx(Oe,{name:r.icon,appearance:"filled"}),r&&n.jsx("div",{style:{flexShrink:0},children:r==null?void 0:r.label}),r.badgeCount&&r.badgeCount>0&&r.badgeContent==="number"&&n.jsx(Ne,{badgeType:r.badgeType,content:r.badgeContent,count:r.badgeCount})]}),n.jsx(oe,{ref:W,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":M,name:M?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>O(d=>!d)})]}),isOpen:M,children:l.filter(d=>d.id!==i).map((d,m)=>n.jsx(Pe,{id:d.id,label:d.label,onClick:E,disabled:d.disabled,leftIcon:d.icon,badgeCount:d.badgeCount,badgeContent:d.badgeContent,badgeIcon:d.badgeIcon,badgeType:d.badgeType,showBadge:!0},`${d.id}-dropdown-${m}`))}),l.map((d,m)=>n.jsx(ze,{onClick:E,isSelected:i===d.id,compactSpacing:e,direction:o,"data-hidden":S,inverted:T,...d},`${d.id}-${m}`))]}),_&&!S&&n.jsx(oe,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:y?1:0,pointerEvents:y?"auto":"none"},onClick:g})]}),n.jsx("div",{className:z["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":_&&h==="scrollable"?!0:void 0})]})});v.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Ln={title:"Composants/Tab",component:v,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},I={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[a,o]=p.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...I.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},G={args:{...I.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(v,{...l,direction:"vertical",options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},$={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Y={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=p.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},U={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},Z={tags:["!autodocs"],args:{...I.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:l=>{const[a,o]=p.useState(l.selectedTabId);return n.jsxs(n.Fragment,{children:[n.jsx(v,{...l,selectedTabId:a,onChange:o}),l.options.map(t=>n.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:a!==t.id,children:["Content for ",t.label]},t.id))]})},play:async({canvasElement:l,args:a,step:o})=>{const t=H(l),i=t.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await b(i).toHaveLength(a.options.length);for(const h of i)await o(`Badge visibility: ${h.id}`,async()=>{const T=H(h).queryByTestId("badge");e.includes(h.id)?(await b(T).toBeVisible(),await b(T).toHaveAttribute("data-badge-type",h.id==="neutral"?"neutral":"indicator")):await b(T).not.toBeInTheDocument()});await b(H(t.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await b(H(t.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},q={args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i,overflowType:"dropdown","aria-label":"Dropdown tabs"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},J={tags:["!autodocs","tab-dropdown-interaction"],args:{...q.args},render:q.render,play:async({canvasElement:l})=>{const a=H(l),o=H(l.ownerDocument.body),t=H(a.getByRole("tablist",{name:"Dropdown tabs"})),i=await a.findByRole("button",{name:"Afficher les onglets"});await b(l.querySelector("button button")).toBeNull(),await b(i).toHaveAttribute("aria-haspopup","true"),await b(i).toHaveAttribute("aria-expanded","false"),await f.click(i),await L(()=>b(i).toHaveAttribute("aria-expanded","true")),await f.click(await o.findByRole("menuitem",{name:"Second Tab"})),await L(()=>b(o.queryByRole("menu")).not.toBeInTheDocument()),await b(t.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await b(i).toHaveAttribute("aria-expanded","false"),await b(i).toHaveFocus(),await f.keyboard("{Enter}");const e=await o.findByRole("menuitem",{name:"First Tab very long and descriptive"});await L(()=>b(e).toHaveFocus()),await f.keyboard("{ArrowDown}");const h=await o.findByRole("menuitem",{name:"Third Tab"});await b(h).toHaveFocus(),await f.keyboard("{Enter}"),await L(()=>b(o.queryByRole("menu")).not.toBeInTheDocument());const T=t.getByRole("tab",{name:"Third Tab",selected:!0});await b(T).toBeVisible(),await b(i).toHaveFocus(),await f.click(T),await L(()=>b(i).toHaveAttribute("aria-expanded","true")),await L(()=>b(o.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await f.keyboard("{Escape}"),await L(()=>b(o.queryByRole("menu")).not.toBeInTheDocument()),await b(T).toHaveFocus()}},Q={tags:["!autodocs"],args:{...I.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(v,{...l,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:a})=>{const o=H(l);Me();const t=await o.getByRole("tab",{name:"First Tab"}),i=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),h=await o.getByRole("tab",{name:"Fourth Tab"}),T=await o.getByRole("tab",{name:"Fifth Tab"}),x=async w=>{b(w).toHaveAttribute("aria-selected","true"),b(w).toHaveFocus(),b(o.getByText(`Contenu onglet ${w.textContent}`)).toBeVisible()},C=async w=>{b(w).toHaveAttribute("aria-selected","false"),b(w).not.toHaveFocus(),b(o.getByText(`Contenu onglet ${w.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await f.tab(),x(t)}),await a("Navigate to the second tab and select it",async()=>{await f.keyboard(K),x(i)}),await a("Navigate to the second tab and select it",async()=>{await f.keyboard(K),x(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await f.keyboard(K),x(T),C(h)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await f.keyboard(K),x(t)}),await a("Navigate back to the last tab and select it",async()=>{await f.keyboard(Ve),x(T)})}};var de,re,se;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(se=(re=I.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ce,be,pe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(be=P.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,ge,me;G.parameters={...G.parameters,docs:{...(ue=G.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ge=G.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,Te,ye;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ye=(Te=$.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var ve,fe,xe;Y.parameters={...Y.parameters,docs:{...(ve=Y.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(fe=Y.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var we,Ie,Ce;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var Be,Se,ke;Z.parameters={...Z.parameters,docs:{...(Be=Z.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(Se=Z.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ee,Fe,je;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(je=(Fe=q.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Re,He,Ae;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
    await expect(canvasElement.querySelector("button button")).toBeNull();
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
    await userEvent.click(selectedTab);
    await waitFor(() => expect(dropdownButton).toHaveAttribute("aria-expanded", "true"));
    await waitFor(() => expect(page.getByRole("menuitem", {
      name: "First Tab very long and descriptive"
    })).toHaveFocus());
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(selectedTab).toHaveFocus();
  }
}`,...(Ae=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ae.source}}};var _e,De,Le;Q.parameters={...Q.parameters,docs:{...(_e=Q.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Le=(De=Q.parameters)==null?void 0:De.docs)==null?void 0:Le.source}}};const Nn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","OverflowTypeInteraction","KeyboardInteraction"];export{Z as BadgeVisibility,G as CompactSpacing,I as Default,Y as IconsOnly,Q as KeyboardInteraction,q as OverflowType,J as OverflowTypeInteraction,P as Vertical,U as WithBadge,$ as WithIcons,Nn as __namedExportsOrder,Ln as default};
