import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{e as q,f as We}from"./keyboard-test.constants-CC9zMOdc.js";import{w as _,e as y,u as L}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as Me}from"./testing.utils-DmLcTX3r.js";import{p as J}from"./animation-BebxwkA_.js";import{u as Ke}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Oe}from"./Badge-DUkuUEsZ.js";import{D as $e}from"./Dropdown-CyecDUeK.js";import{D as Pe}from"./DropdownItem-CkNTUYza.js";import{I as ie}from"./Icon-DBkoQNiA.js";import{I as se}from"./IconButton-B1jvMDIw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Ge}from"./log-handlers-Hz0GUguM.js";import{g as Ye}from"./accessibility.utils-De896_4L.js";import{b as Ue,d as Ze,A as Je,a as Qe}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Xe=(i,a,t)=>{if(!en(i,a,t))return;const l=a.getBoundingClientRect(),d=i.getBoundingClientRect();if(t==="horizontal"){const n=a.scrollLeft+nn(d,l);a.scrollTo({left:n,behavior:J()?"auto":"smooth"})}else{const n=a.scrollTop+an(d,l);a.scrollTo({top:n,behavior:J()?"auto":"smooth"})}},en=(i,a,t)=>{if(a&&i){const l=a.getBoundingClientRect(),d=i.getBoundingClientRect(),n=d.left<l.left,g=d.right>l.right,u=d.top<l.top,v=d.bottom>l.bottom;return t==="horizontal"?n||g:u||v}return!1},nn=(i,a)=>{const t=i.left<a.left,l=i.right>a.right;return t?i.left-a.left:l?i.right-a.right:0},an=(i,a)=>{const t=i.top<a.top,l=i.bottom>a.bottom;return t?i.top-a.top:l?i.bottom-a.bottom:0},tn="_tab_1tjub_1",R={"tab-container":"_tab-container_1tjub_1",tab:tn,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},ln="_tabitem_1rgd2_1",le={tabitem:ln,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ve=b.forwardRef(({id:i,panelId:a,label:t,isSelected:l,showBadge:d,badgeCount:n,badgeContent:g="empty",badgeIcon:u,onClick:v,icon:I,badgeType:f="indicator",compactSpacing:Q,direction:w,disabled:E,inverted:X,ariaLabel:N,...ee},A)=>{const B=Ye({ariaLabel:N,labelText:t,icon:I,showBadge:d,badgeCount:n,badgeContent:g,badgeIcon:u}),ne={count:n,content:g,icon:u,badgeType:f};console.log(B);const ae=n&&n>0&&g==="number",D=!E&&(d||ae||g==="icon"&&u),p=b.useRef(null),[r,x]=b.useState(null),de=s=>{!E&&!l?(v(s),x(o=>({...o,opacity:0}))):s.preventDefault()},S=b.useCallback(s=>{p.current&&!l&&x(s==="mouseover"?o=>({...o,opacity:1}):o=>({...o,opacity:0}))},[l]),j=s=>{const o=w==="vertical",c=o&&s.key===Ue,C=o&&s.key===Ze,m=!o&&s.key===Je,F=!o&&s.key===Qe,V=c||m;(V||(C||F))&&(s.preventDefault(),z(V?"next":"previous"))},z=s=>{var te;const o=(te=p.current)==null?void 0:te.parentElement;if(!o)return;const c=Array.from(o.querySelectorAll(`.${le.tabitem}`)),C=c.findIndex(qe=>qe===document.activeElement);let m=O(C,c.length,s),F=0;const V=c.length;for(;c[m].getAttribute("data-disabled")==="true"&&F<V;)m=O(m,c.length,s),F++;c[m].focus(),c[m].click()},O=(s,o,c)=>c==="next"?(s+1)%o:(s-1+o)%o,k=b.useCallback(()=>{p.current&&!l&&x(w==="horizontal"?s=>{var o,c,C,m;return{...s,width:(o=p.current)==null?void 0:o.offsetWidth,left:((c=p.current)==null?void 0:c.offsetLeft)??0,top:(((C=p.current)==null?void 0:C.offsetTop)??0)+(((m=p.current)==null?void 0:m.offsetHeight)??0)}}:s=>{var o,c;return{...s,left:0,top:(o=p.current)==null?void 0:o.offsetTop,height:(c=p.current)==null?void 0:c.offsetHeight}})},[l,w]);return b.useEffect(()=>{var s;return k(),window.addEventListener("resize",k),(s=p.current)!=null&&s.parentElement&&p.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),p.current&&p.current.parentElement&&p.current.parentElement.removeEventListener("scroll",k)}},[k]),b.useEffect(()=>{var s;p.current&&x(w==="horizontal"?{width:p.current.offsetWidth,left:p.current.offsetLeft-(((s=p.current.parentElement)==null?void 0:s.scrollLeft)??0),top:p.current.offsetTop+p.current.offsetHeight,opacity:0}:{left:0,top:p.current.offsetTop,height:p.current.offsetHeight,opacity:0})},[w]),!t&&!N?(Ge("Tab",'Option with id "'+i+`" must have either a label or an ariaLabel if it's icon only.`),null):e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",id:i,className:le.tabitem,role:"tab","aria-selected":l,"aria-controls":a,"aria-disabled":E,"aria-label":B,tabIndex:l?0:-1,"data-selected":l,"data-disabled":E,"data-direction":w,"data-inverted":X,onClick:de,"data-compact-spacing":Q,ref:s=>{p.current=s,typeof A=="function"?A(s):A&&(A.current=s)},onKeyDown:j,onMouseEnter:()=>S("mouseover"),onMouseLeave:()=>S("mouseleave"),...l&&{"data-testid":"tabitem-selected"},...ee,children:[I&&e.jsx(ie,{name:I,appearance:l?"filled":"outlined"}),t&&e.jsx("span",{children:t}),D&&e.jsx(Oe,{...ne})]}),e.jsx("span",{"data-disabled":E,className:le["segment-hover-indicator"],style:{width:r==null?void 0:r.width,height:r==null?void 0:r.height,left:r==null?void 0:r.left,top:r==null?void 0:r.top,opacity:r==null?void 0:r.opacity}})]})});Ve.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const h=b.forwardRef(({options:i,onChange:a,direction:t="horizontal",alignment:l="start",selectedTabId:d,compactSpacing:n,overflowType:g="scrollable",inverted:u=!1,...v},I)=>{const[f,Q]=b.useState(!1),[w,E]=b.useState(!1),[X,N]=b.useState(!1),[ee,A]=b.useState(!1),[B,ne]=b.useState(!1),[ae,H]=b.useState(!1),D=f||ee,p=w||X,r=b.useRef(null),{indicatorStyle:x}=Ke(r,d,t==="horizontal"?"bottom":"left"),S=t==="horizontal"&&(f||w)&&g==="dropdown",j=b.useCallback(()=>{if(r.current){const o=r.current.offsetWidth<r.current.scrollWidth||r.current.offsetHeight<r.current.scrollHeight,c=r.current.scrollLeft>0,C=r.current.scrollWidth-r.current.clientWidth-r.current.scrollLeft>0,m=r.current.scrollTop>0,F=r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop>0;Q(c),E(C),A(m),N(F),ne(o)}},[r]);b.useEffect(()=>{var o;return j(),window.addEventListener("resize",j),(o=r.current)==null||o.addEventListener("scroll",j),()=>{var c;window.removeEventListener("resize",j),(c=r.current)==null||c.removeEventListener("scroll",j)}},[j]),b.useEffect(()=>{!d&&i.length>0&&a(i[0].id)},[d,i,a]);const z=o=>{const c=o.currentTarget,C=c.getAttribute("id")||"";a(C),H(!1);const m=r.current;m&&Xe(c,m,t)},O=()=>{if(r.current){const o=t==="horizontal"?{left:-300}:{top:-300};r.current.scrollBy({...o,behavior:J()?"auto":"smooth"})}},k=()=>{if(r.current){const o=t==="horizontal"?{left:300}:{top:300};r.current.scrollBy({...o,behavior:J()?"auto":"smooth"})}},s=i.find(o=>o.id===d);return e.jsxs("div",{className:R["tab-container"],"data-direction":t,children:[e.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":n,"data-scrollable":B&&g==="scrollable"?!0:void 0}),e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:t==="horizontal"?"row":"column"},children:[B&&!S&&e.jsx(se,{name:t==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:D?1:0,pointerEvents:D?"auto":"none"},onClick:O}),e.jsxs("div",{ref:o=>{r.current=o,typeof I=="function"?I(o):I&&(I.current=o)},role:"tablist",className:R.tab,"data-alignment":B?"start":l,"data-direction":t,"aria-orientation":t,"data-overflow-type":g,...v,children:[e.jsx("div",{className:R["tab-selected-indicator"],style:{left:S?0:x.left,width:(x.width??0)+(S?32:0),top:x.top,height:x.height}}),S&&s&&e.jsx($e,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>H(!1),offset:10,trigger:e.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>H(o=>!o),"aria-label":"Afficher les onglets","data-inverted":u,children:[s&&s.icon&&e.jsx(ie,{name:s.icon,appearance:"filled"}),s&&e.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&e.jsx(Oe,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount}),e.jsx(ie,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ae,children:i.filter(o=>o.id!==d).map((o,c)=>e.jsx(Pe,{id:o.id,label:o.label,onClick:z,disabled:o.disabled,leftIcon:o.icon,badgeCount:o.badgeCount,badgeContent:o.badgeContent,badgeIcon:o.badgeIcon,badgeType:o.badgeType,showBadge:!0},`${o.id}-dropdown-${c}`))}),i.map((o,c)=>e.jsx(Ve,{onClick:z,isSelected:d===o.id,compactSpacing:n,direction:t,"data-hidden":S,inverted:u,...o},`${o.id}-${c}`))]}),B&&!S&&e.jsx(se,{name:t==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:p?1:0,pointerEvents:p?"auto":"none"},onClick:k})]}),e.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":n,"data-scrollable":B&&g==="scrollable"?!0:void 0})]})});h.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const On={title:"Composants/Tab",component:h,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},T={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:i=>{const[a,t]=b.useState("tab-2"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=n=>{t(n)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[e.jsx("span",{children:"Normal"}),e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d})]}),e.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[e.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d,inverted:!0})]})]}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})}},W={args:{...T.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=n=>{t(n)};return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[e.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),e.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),e.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},M={args:{...T.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:i=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=n=>{t(n)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[e.jsx(h,{...i,direction:"vertical",options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})]})}},K={args:{...T.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=n=>{t(n)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})}},$={args:{...T.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,t]=b.useState("home"),l=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],d=n=>{t(n)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.id]},n.id))})]})}},P={args:{...T.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=n=>{t(n)};return e.jsxs(e.Fragment,{children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})}},G={tags:["!autodocs"],args:{...T.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:i=>{const[a,t]=b.useState(i.selectedTabId);return e.jsxs(e.Fragment,{children:[e.jsx(h,{...i,selectedTabId:a,onChange:t}),i.options.map(l=>e.jsxs("div",{role:"tabpanel",id:l.panelId,"aria-labelledby":l.id,hidden:a!==l.id,children:["Content for ",l.label]},l.id))]})},play:async({canvasElement:i,args:a,step:t})=>{const l=_(i),d=l.getAllByRole("tab"),n=["indicator","number","number-auto","icon","icon-auto","neutral"];await y(d).toHaveLength(a.options.length);for(const g of d)await t(`Badge visibility: ${g.id}`,async()=>{const u=_(g).queryByTestId("badge");n.includes(g.id)?(await y(u).toBeVisible(),await y(u).toHaveAttribute("data-badge-type",g.id==="neutral"?"neutral":"indicator")):await y(u).not.toBeInTheDocument()});await y(_(l.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await y(_(l.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},Y={args:{...T.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=n=>{t(n)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[e.jsxs("div",{style:{width:"400px"},children:[e.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]}),e.jsxs("div",{style:{width:"400px"},children:[e.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d,overflowType:"dropdown"}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})]})}},U={tags:["!autodocs"],args:{...T.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=n=>{t(n)};return e.jsxs("div",{style:{height:"150px"},children:[e.jsx(h,{...i,options:l,selectedTabId:a,onChange:d}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(n=>e.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:a!==n.id,children:["Contenu onglet ",n.label]},n.id))})]})},play:async({canvasElement:i,step:a})=>{const t=_(i);Me();const l=await t.getByRole("tab",{name:"First Tab"}),d=await t.getByRole("tab",{name:"Second Tab"}),n=await t.getByRole("tab",{name:"Third Tab"}),g=await t.getByRole("tab",{name:"Fourth Tab"}),u=await t.getByRole("tab",{name:"Fifth Tab"}),v=async f=>{y(f).toHaveAttribute("aria-selected","true"),y(f).toHaveFocus(),y(t.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},I=async f=>{y(f).toHaveAttribute("aria-selected","false"),y(f).not.toHaveFocus(),y(t.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await L.tab(),v(l)}),await a("Navigate to the second tab and select it",async()=>{await L.keyboard(q),v(d)}),await a("Navigate to the second tab and select it",async()=>{await L.keyboard(q),v(n)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await L.keyboard(q),v(u),I(g)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await L.keyboard(q),v(l)}),await a("Navigate back to the last tab and select it",async()=>{await L.keyboard(We),v(u)})}},oe=[{id:"label",title:"label only",expectedAriaLabel:"Libellé seul",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Libellé seul",id:"target",panelId:"target-panel"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes",panelId:"target-panel"}]},{id:"labelNumberBadge",title:"label + number badge",expectedAriaLabel:"Alertes, 3",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Alertes",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without label",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",panelId:"target-panel",ariaLabel:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",ariaLabel:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator",panelId:"target-panel"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-grid",ariaLabel:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator",panelId:"target-panel"}]}],Z={tags:["!autodocs"],args:{...T.args,onChange:()=>{},options:[]},render:()=>{const[i,a]=b.useState(Object.fromEntries(oe.map(t=>[t.id,"ref"])));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:520,padding:8},"data-testid":"accessible-name-validation",children:[e.jsx("p",{style:{margin:0,fontSize:14},children:"Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de développement."}),oe.map(t=>e.jsxs("section",{"aria-labelledby":`case-${t.id}-title`,children:[e.jsx("h3",{id:`case-${t.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:t.title}),e.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Nom accessible attendu : ",e.jsx("code",{children:t.expectedAriaLabel})]}),e.jsx(h,{options:[...t.options],selectedTabId:i[t.id],onChange:l=>a(d=>({...d,[t.id]:l})),"aria-label":t.title})]},t.id))]})},play:async({canvasElement:i})=>{const a=_(i).getByTestId("accessible-name-validation").querySelectorAll("section");oe.forEach((t,l)=>{const d=Array.from(a[l].querySelectorAll("[role='tab']"));y(d[1]).toHaveAttribute("aria-label",t.expectedAriaLabel)})}};var re,ce,be;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(be=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var pe,ge,ue;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(ge=W.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var me,he,ye;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ye=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Te,ve,fe;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(ve=K.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,Ie,Ce;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=$.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var we,Se,Be;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Be=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var je,ke,Ee;G.parameters={...G.parameters,docs:{...(je=G.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Ee=(ke=G.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var Ae,Fe,Le;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Le=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Re,_e,Ne;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ne=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var He,De,ze;Z.parameters={...Z.parameters,docs:{...(He=Z.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(ze=(De=Z.parameters)==null?void 0:De.docs)==null?void 0:ze.source}}};const Vn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","KeyboardInteraction","AccessibleNameValidation"];export{Z as AccessibleNameValidation,G as BadgeVisibility,M as CompactSpacing,T as Default,$ as IconsOnly,U as KeyboardInteraction,Y as OverflowType,W as Vertical,P as WithBadge,K as WithIcons,Vn as __namedExportsOrder,On as default};
