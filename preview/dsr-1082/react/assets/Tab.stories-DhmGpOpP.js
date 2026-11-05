import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{e as K,f as Ne}from"./keyboard-test.constants-DC52cZHj.js";import{w as U,u as y,e as u,a as _}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Le}from"./testing.utils-DmLcTX3r.js";import{p as J}from"./animation-BebxwkA_.js";import{u as Oe}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as He}from"./Badge-BKSKdLzq.js";import{D as ze}from"./Dropdown-CyecDUeK.js";import{D as qe}from"./DropdownItem-DoVaQzxG.js";import{I as Ae}from"./Icon-DBkoQNiA.js";import{I as ne}from"./IconButton-CJDki2nw.js";import{b as Ke,d as Ve,A as We,a as Me}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Pe=(r,n,t)=>{if(!Ge(r,n,t))return;const o=n.getBoundingClientRect(),i=r.getBoundingClientRect();if(t==="horizontal"){const e=n.scrollLeft+Ye(i,o);n.scrollTo({left:e,behavior:J()?"auto":"smooth"})}else{const e=n.scrollTop+$e(i,o);n.scrollTo({top:e,behavior:J()?"auto":"smooth"})}},Ge=(r,n,t)=>{if(n&&r){const o=n.getBoundingClientRect(),i=r.getBoundingClientRect(),e=i.left<o.left,g=i.right>o.right,m=i.top<o.top,x=i.bottom>o.bottom;return t==="horizontal"?e||g:m||x}return!1},Ye=(r,n)=>{const t=r.left<n.left,o=r.right>n.right;return t?r.left-n.left:o?r.right-n.right:0},$e=(r,n)=>{const t=r.top<n.top,o=r.bottom>n.bottom;return t?r.top-n.top:o?r.bottom-n.bottom:0},Ue="_tab_1tjub_1",N={"tab-container":"_tab-container_1tjub_1",tab:Ue,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Je="_tabitem_1rgd2_1",te={tabitem:Je,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},_e=p.forwardRef(({id:r,panelId:n,label:t,isSelected:o,showBadge:i,badgeCount:e,badgeContent:g="empty",badgeIcon:m,onClick:x,icon:B,badgeType:v="indicator",compactSpacing:Q,direction:I,disabled:R,inverted:q,...X},H)=>{const Z={count:e,content:g,icon:m,badgeType:v},A=e&&e>0&&g==="number",O=!R&&(i||A||g==="icon"&&m),b=p.useRef(null),[d,C]=p.useState(null),D=c=>{R?c.preventDefault():(x(c),C(s=>({...s,opacity:0})))},ee=p.useCallback(c=>{b.current&&!o&&C(c==="mouseover"?s=>({...s,opacity:1}):s=>({...s,opacity:0}))},[o]),S=c=>{const s=I==="vertical",l=s&&c.key===Ke,h=s&&c.key===Ve,T=!s&&c.key===We,k=!s&&c.key===Me,F=l||T;(F||(h||k))&&(c.preventDefault(),E(F?"next":"previous"))},E=c=>{var ae;const s=(ae=b.current)==null?void 0:ae.parentElement;if(!s)return;const l=Array.from(s.querySelectorAll(`.${te.tabitem}`)),h=l.findIndex(De=>De===document.activeElement);let T=z(h,l.length,c),k=0;const F=l.length;for(;l[T].getAttribute("data-disabled")==="true"&&k<F;)T=z(T,l.length,c),k++;l[T].focus(),l[T].click()},z=(c,s,l)=>l==="next"?(c+1)%s:(c-1+s)%s,j=p.useCallback(()=>{b.current&&!o&&C(I==="horizontal"?c=>{var s,l,h,T;return{...c,width:(s=b.current)==null?void 0:s.offsetWidth,left:((l=b.current)==null?void 0:l.offsetLeft)??0,top:(((h=b.current)==null?void 0:h.offsetTop)??0)+(((T=b.current)==null?void 0:T.offsetHeight)??0)}}:c=>{var s,l;return{...c,left:0,top:(s=b.current)==null?void 0:s.offsetTop,height:(l=b.current)==null?void 0:l.offsetHeight}})},[o,I]);return p.useEffect(()=>{var c;return j(),window.addEventListener("resize",j),(c=b.current)!=null&&c.parentElement&&b.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",j)}},[j]),p.useEffect(()=>{var c;b.current&&C(I==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((c=b.current.parentElement)==null?void 0:c.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[I]),a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",id:r,className:te.tabitem,role:"tab","aria-selected":o,"aria-controls":n,"aria-disabled":R,tabIndex:o?0:-1,"data-selected":o,"data-disabled":R,"data-direction":I,"data-inverted":q,onClick:D,"data-compact-spacing":Q,ref:c=>{b.current=c,typeof H=="function"?H(c):H&&(H.current=c)},onKeyDown:S,onMouseEnter:()=>ee("mouseover"),onMouseLeave:()=>ee("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...X,children:[B&&a.jsx(Ae,{name:B,appearance:o?"filled":"outlined"}),t&&a.jsx("span",{children:t}),O&&a.jsx(He,{...Z})]}),a.jsx("span",{"data-disabled":R,className:te["segment-hover-indicator"],style:{width:d==null?void 0:d.width,height:d==null?void 0:d.height,left:d==null?void 0:d.left,top:d==null?void 0:d.top,opacity:d==null?void 0:d.opacity}})]})});_e.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const f=p.forwardRef(({options:r,onChange:n,direction:t="horizontal",alignment:o="start",selectedTabId:i,compactSpacing:e,overflowType:g="scrollable",inverted:m=!1,...x},B)=>{const[v,Q]=p.useState(!1),[I,R]=p.useState(!1),[q,X]=p.useState(!1),[H,Z]=p.useState(!1),[A,oe]=p.useState(!1),[O,b]=p.useState(!1),d=p.useRef(null),C=p.useRef(null),{indicatorStyle:D}=Oe(d,i,t==="horizontal"?"bottom":"left"),S=t==="horizontal"&&(v||I)&&g==="dropdown",E=p.useCallback(()=>{if(d.current){const l=d.current.offsetWidth<d.current.scrollWidth||d.current.offsetHeight<d.current.scrollHeight,h=d.current.scrollLeft>0,T=d.current.scrollWidth-d.current.clientWidth-d.current.scrollLeft>0,k=d.current.scrollTop>0,F=d.current.scrollHeight-d.current.clientHeight-d.current.scrollTop>0;Q(h),R(T),Z(k),X(F),oe(l)}},[d]);p.useEffect(()=>{var l;return E(),window.addEventListener("resize",E),(l=d.current)==null||l.addEventListener("scroll",E),()=>{var h;window.removeEventListener("resize",E),(h=d.current)==null||h.removeEventListener("scroll",E)}},[E]),p.useEffect(()=>{!i&&r.length>0&&n(r[0].id)},[i,r,n]);const z=l=>{var F;const h=l.currentTarget,T=h.getAttribute("id")||"";if(n(T),b(!1),S){(F=C.current)==null||F.focus({preventScroll:!0});return}const k=d.current;k&&Pe(h,k,t)},j=()=>{if(d.current){const l=t==="horizontal"?{left:-300}:{top:-300};d.current.scrollBy({...l,behavior:J()?"auto":"smooth"})}},c=()=>{if(d.current){const l=t==="horizontal"?{left:300}:{top:300};d.current.scrollBy({...l,behavior:J()?"auto":"smooth"})}},s=r.find(l=>l.id===i);return a.jsxs("div",{className:N["tab-container"],"data-direction":t,children:[a.jsx("div",{className:N["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":A&&g==="scrollable"?!0:void 0}),a.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:t==="horizontal"?"row":"column"},children:[A&&!S&&a.jsx(ne,{name:t==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:v||H?1:0,pointerEvents:v||H?"auto":"none"},onClick:j}),a.jsxs("div",{ref:l=>{d.current=l,typeof B=="function"?B(l):B&&(B.current=l)},role:"tablist",className:N.tab,"data-alignment":A?"start":o,"data-direction":t,"aria-orientation":t,"data-overflow-type":g,...x,children:[a.jsx("div",{className:N["tab-selected-indicator"],style:{left:S?0:D.left,width:(D.width??0)+(S?32:0),top:D.top,height:D.height}}),S&&s&&a.jsx(ze,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:a.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[a.jsxs("button",{type:"button",className:N["tab-dropdown-button"],onClick:()=>b(l=>!l),role:"tab","aria-selected":!0,"aria-label":s==null?void 0:s.label,"data-inverted":m,children:[s&&s.icon&&a.jsx(Ae,{name:s.icon,appearance:"filled"}),s&&a.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&a.jsx(He,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount})]}),a.jsx(ne,{ref:C,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":O,name:O?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>b(l=>!l)})]}),isOpen:O,children:r.filter(l=>l.id!==i).map((l,h)=>a.jsx(qe,{id:l.id,label:l.label,onClick:z,disabled:l.disabled,leftIcon:l.icon,badgeCount:l.badgeCount,badgeContent:l.badgeContent,badgeIcon:l.badgeIcon,badgeType:l.badgeType,showBadge:!0},`${l.id}-dropdown-${h}`))}),r.map((l,h)=>a.jsx(_e,{onClick:z,isSelected:i===l.id,compactSpacing:e,direction:t,"data-hidden":S,inverted:m,...l},`${l.id}-${h}`))]}),A&&!S&&a.jsx(ne,{name:t==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:I||q?1:0,pointerEvents:I||q?"auto":"none"},onClick:c})]}),a.jsx("div",{className:N["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":A&&g==="scrollable"?!0:void 0})]})});f.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Fa={title:"Composants/Tab",component:f,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},w={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:r=>{const[n,t]=p.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[a.jsx("span",{children:"Normal"}),a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i})]}),a.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[a.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i,inverted:!0})]})]}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...w.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:r=>{const[n,t]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),a.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),a.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},W={args:{...w.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:r=>{const[n,t]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(f,{...r,direction:"vertical",options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...w.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[n,t]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...w.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[n,t]=p.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},G={args:{...w.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[n,t]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},L={args:{...w.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[n,t]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i,overflowType:"dropdown","aria-label":"Dropdown tabs"}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},Y={tags:["!autodocs","tab-dropdown-interaction"],args:{...L.args},render:L.render,play:async({canvasElement:r})=>{const n=U(r),t=U(r.ownerDocument.body),o=U(n.getByRole("tablist",{name:"Dropdown tabs"})),i=await n.findByRole("button",{name:"Afficher les onglets"});await u(r.querySelector("button button")).toBeNull(),await u(i).toHaveAttribute("aria-haspopup","true"),await u(i).toHaveAttribute("aria-expanded","false"),await y.click(i),await _(()=>u(i).toHaveAttribute("aria-expanded","true")),await y.click(await t.findByRole("menuitem",{name:"Second Tab"})),await _(()=>u(t.queryByRole("menu")).not.toBeInTheDocument()),await u(o.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await u(i).toHaveAttribute("aria-expanded","false"),await u(i).toHaveFocus(),await y.keyboard("{Enter}");const e=await t.findByRole("menuitem",{name:"First Tab very long and descriptive"});await _(()=>u(e).toHaveFocus()),await y.keyboard("{ArrowDown}");const g=await t.findByRole("menuitem",{name:"Third Tab"});await u(g).toHaveFocus(),await y.keyboard("{Enter}"),await _(()=>u(t.queryByRole("menu")).not.toBeInTheDocument());const m=o.getByRole("tab",{name:"Third Tab",selected:!0});await u(m).toBeVisible(),await u(i).toHaveFocus(),await y.click(m),await _(()=>u(i).toHaveAttribute("aria-expanded","true")),await _(()=>u(t.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await y.keyboard("{Escape}"),await _(()=>u(t.queryByRole("menu")).not.toBeInTheDocument()),await u(m).toHaveFocus()}},$={tags:["!autodocs"],args:{...w.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[n,t]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return a.jsxs("div",{style:{height:"150px"},children:[a.jsx(f,{...r,options:o,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:r,step:n})=>{const t=U(r);Le();const o=await t.getByRole("tab",{name:"First Tab"}),i=await t.getByRole("tab",{name:"Second Tab"}),e=await t.getByRole("tab",{name:"Third Tab"}),g=await t.getByRole("tab",{name:"Fourth Tab"}),m=await t.getByRole("tab",{name:"Fifth Tab"}),x=async v=>{u(v).toHaveAttribute("aria-selected","true"),u(v).toHaveFocus(),u(t.getByText(`Contenu onglet ${v.textContent}`)).toBeVisible()},B=async v=>{u(v).toHaveAttribute("aria-selected","false"),u(v).not.toHaveFocus(),u(t.getByText(`Contenu onglet ${v.textContent}`)).not.toBeVisible()};await n("Focus on the first tab and select it",async()=>{await y.tab(),x(o)}),await n("Navigate to the second tab and select it",async()=>{await y.keyboard(K),x(i)}),await n("Navigate to the second tab and select it",async()=>{await y.keyboard(K),x(e)}),await n("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await y.keyboard(K),x(m),B(g)}),await n("Navigate back to the first tab when there are no next tabs",async()=>{await y.keyboard(K),x(o)}),await n("Navigate back to the last tab and select it",async()=>{await y.keyboard(Ne),x(m)})}};var le,re,ie;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ie=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var se,de,ce;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,pe,ue;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,ge,me;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Te,ve,ye;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
      icon: "home"
    }, {
      id: "bookmarks",
      panelId: "panel-2",
      icon: "bookmarks"
    }, {
      id: "chat",
      panelId: "panel-3",
      icon: "chat"
    }, {
      id: "settings",
      panelId: "panel-3",
      icon: "settings"
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
}`,...(ye=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,xe,we;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(we=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ie,Ce,Be;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Be=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var Se,ke,Fe;Y.parameters={...Y.parameters,docs:{...(Se=Y.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Fe=(ke=Y.parameters)==null?void 0:ke.docs)==null?void 0:Fe.source}}};var Ee,je,Re;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(je=$.parameters)==null?void 0:je.docs)==null?void 0:Re.source}}};const Ea=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","OverflowTypeInteraction","KeyboardInteraction"];export{W as CompactSpacing,w as Default,P as IconsOnly,$ as KeyboardInteraction,L as OverflowType,Y as OverflowTypeInteraction,V as Vertical,G as WithBadge,M as WithIcons,Ea as __namedExportsOrder,Fa as default};
