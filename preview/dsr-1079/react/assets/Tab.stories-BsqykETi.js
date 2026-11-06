import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{e as W,f as Oe}from"./keyboard-test.constants-DC52cZHj.js";import{w as Re,e as A,u as L}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as De}from"./testing.utils-DmLcTX3r.js";import{p as J}from"./animation-BebxwkA_.js";import{u as Ve}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ne}from"./Badge-DUkuUEsZ.js";import{D as We}from"./Dropdown-CyecDUeK.js";import{D as qe}from"./DropdownItem-CkNTUYza.js";import{I as oe}from"./Icon-DBkoQNiA.js";import{I as ie}from"./IconButton-B1jvMDIw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Ke}from"./log-handlers-BGrW2Sgz.js";import{g as Me}from"./accessibility.utils-De896_4L.js";import{b as Pe,d as $e,A as Ge,a as Ye}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ue=(o,n,t)=>{if(!Je(o,n,t))return;const l=n.getBoundingClientRect(),i=o.getBoundingClientRect();if(t==="horizontal"){const e=n.scrollLeft+Qe(i,l);n.scrollTo({left:e,behavior:J()?"auto":"smooth"})}else{const e=n.scrollTop+Xe(i,l);n.scrollTo({top:e,behavior:J()?"auto":"smooth"})}},Je=(o,n,t)=>{if(n&&o){const l=n.getBoundingClientRect(),i=o.getBoundingClientRect(),e=i.left<l.left,v=i.right>l.right,I=i.top<l.top,y=i.bottom>l.bottom;return t==="horizontal"?e||v:I||y}return!1},Qe=(o,n)=>{const t=o.left<n.left,l=o.right>n.right;return t?o.left-n.left:l?o.right-n.right:0},Xe=(o,n)=>{const t=o.top<n.top,l=o.bottom>n.bottom;return t?o.top-n.top:l?o.bottom-n.bottom:0},Ze="_tab_1tjub_1",_={"tab-container":"_tab-container_1tjub_1",tab:Ze,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},ea="_tabitem_1rgd2_1",te={tabitem:ea,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},He=b.forwardRef(({id:o,panelId:n,label:t,isSelected:l,showBadge:i,badgeCount:e,badgeContent:v="empty",badgeIcon:I,onClick:y,icon:C,badgeType:f="indicator",compactSpacing:Q,direction:w,disabled:B,inverted:N,ariaLabel:H,...z},F)=>{const j=Me({ariaLabel:H,labelText:t,icon:C,showBadge:i,badgeCount:e,badgeContent:v,badgeIcon:I}),X={count:e,content:v,icon:I,badgeType:f};console.log(j);const Z=e&&e>0&&v==="number",p=!B&&(i||Z||v==="icon"&&I),d=b.useRef(null),[h,m]=b.useState(null),k=r=>{B?r.preventDefault():(y(r),m(c=>({...c,opacity:0})))},R=b.useCallback(r=>{d.current&&!l&&m(r==="mouseover"?c=>({...c,opacity:1}):c=>({...c,opacity:0}))},[l]),ee=r=>{const c=w==="vertical",u=c&&r.key===Pe,E=c&&r.key===$e,S=!c&&r.key===Ge,D=!c&&r.key===Ye,V=u||S;(V||(E||D))&&(r.preventDefault(),ae(V?"next":"previous"))},ae=r=>{var ne;const c=(ne=d.current)==null?void 0:ne.parentElement;if(!c)return;const u=Array.from(c.querySelectorAll(`.${te.tabitem}`)),E=u.findIndex(ze=>ze===document.activeElement);let S=g(E,u.length,r),D=0;const V=u.length;for(;u[S].getAttribute("data-disabled")==="true"&&D<V;)S=g(S,u.length,r),D++;u[S].focus(),u[S].click()},g=(r,c,u)=>u==="next"?(r+1)%c:(r-1+c)%c,s=b.useCallback(()=>{d.current&&!l&&m(w==="horizontal"?r=>{var c,u,E,S;return{...r,width:(c=d.current)==null?void 0:c.offsetWidth,left:((u=d.current)==null?void 0:u.offsetLeft)??0,top:(((E=d.current)==null?void 0:E.offsetTop)??0)+(((S=d.current)==null?void 0:S.offsetHeight)??0)}}:r=>{var c,u;return{...r,left:0,top:(c=d.current)==null?void 0:c.offsetTop,height:(u=d.current)==null?void 0:u.offsetHeight}})},[l,w]);return b.useEffect(()=>{var r;return s(),window.addEventListener("resize",s),(r=d.current)!=null&&r.parentElement&&d.current.parentElement.addEventListener("scroll",s),()=>{window.removeEventListener("resize",s),d.current&&d.current.parentElement&&d.current.parentElement.removeEventListener("scroll",s)}},[s]),b.useEffect(()=>{var r;d.current&&m(w==="horizontal"?{width:d.current.offsetWidth,left:d.current.offsetLeft-(((r=d.current.parentElement)==null?void 0:r.scrollLeft)??0),top:d.current.offsetTop+d.current.offsetHeight,opacity:0}:{left:0,top:d.current.offsetTop,height:d.current.offsetHeight,opacity:0})},[w]),!t&&!H?(Ke("Tab",'Option with id "'+o+`" must have either a label or an ariaLabel if it's icon only.`),null):a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",id:o,className:te.tabitem,role:"tab","aria-selected":l,"aria-controls":n,"aria-disabled":B,"aria-label":j,tabIndex:l?0:-1,"data-selected":l,"data-disabled":B,"data-direction":w,"data-inverted":N,onClick:k,"data-compact-spacing":Q,ref:r=>{d.current=r,typeof F=="function"?F(r):F&&(F.current=r)},onKeyDown:ee,onMouseEnter:()=>R("mouseover"),onMouseLeave:()=>R("mouseleave"),...l&&{"data-testid":"tabitem-selected"},...z,children:[C&&a.jsx(oe,{name:C,appearance:l?"filled":"outlined"}),t&&a.jsx("span",{children:t}),p&&a.jsx(Ne,{...X})]}),a.jsx("span",{"data-disabled":B,className:te["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});He.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const T=b.forwardRef(({options:o,onChange:n,direction:t="horizontal",alignment:l="start",selectedTabId:i,compactSpacing:e,overflowType:v="scrollable",inverted:I=!1,...y},C)=>{const[f,Q]=b.useState(!1),[w,B]=b.useState(!1),[N,H]=b.useState(!1),[z,F]=b.useState(!1),[j,X]=b.useState(!1),[Z,O]=b.useState(!1),p=b.useRef(null),{indicatorStyle:d}=Ve(p,i,t==="horizontal"?"bottom":"left"),m=t==="horizontal"&&(f||w)&&v==="dropdown",k=b.useCallback(()=>{if(p.current){const s=p.current.offsetWidth<p.current.scrollWidth||p.current.offsetHeight<p.current.scrollHeight,r=p.current.scrollLeft>0,c=p.current.scrollWidth-p.current.clientWidth-p.current.scrollLeft>0,u=p.current.scrollTop>0,E=p.current.scrollHeight-p.current.clientHeight-p.current.scrollTop>0;Q(r),B(c),F(u),H(E),X(s)}},[p]);b.useEffect(()=>{var s;return k(),window.addEventListener("resize",k),(s=p.current)==null||s.addEventListener("scroll",k),()=>{var r;window.removeEventListener("resize",k),(r=p.current)==null||r.removeEventListener("scroll",k)}},[k]),b.useEffect(()=>{!i&&o.length>0&&n(o[0].id)},[i,o,n]);const R=s=>{const r=s.currentTarget,c=r.getAttribute("id")||"";n(c),O(!1);const u=p.current;u&&Ue(r,u,t)},ee=()=>{if(p.current){const s=t==="horizontal"?{left:-300}:{top:-300};p.current.scrollBy({...s,behavior:J()?"auto":"smooth"})}},ae=()=>{if(p.current){const s=t==="horizontal"?{left:300}:{top:300};p.current.scrollBy({...s,behavior:J()?"auto":"smooth"})}},g=o.find(s=>s.id===i);return a.jsxs("div",{className:_["tab-container"],"data-direction":t,children:[a.jsx("div",{className:_["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":j&&v==="scrollable"?!0:void 0}),a.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:t==="horizontal"?"row":"column"},children:[j&&!m&&a.jsx(ie,{name:t==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:f||z?1:0,pointerEvents:f||z?"auto":"none"},onClick:ee}),a.jsxs("div",{ref:s=>{p.current=s,typeof C=="function"?C(s):C&&(C.current=s)},role:"tablist",className:_.tab,"data-alignment":j?"start":l,"data-direction":t,"aria-orientation":t,"data-overflow-type":v,...y,children:[a.jsx("div",{className:_["tab-selected-indicator"],style:{left:m?0:d.left,width:(d.width??0)+(m?32:0),top:d.top,height:d.height}}),m&&g&&a.jsx(We,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>O(!1),offset:10,trigger:a.jsxs("button",{type:"button",className:_["tab-dropdown-button"],onClick:()=>O(s=>!s),"aria-label":"Select tab","data-inverted":I,children:[g&&g.icon&&a.jsx(oe,{name:g.icon,appearance:"filled"}),g&&a.jsx("div",{style:{flexShrink:0},children:g==null?void 0:g.label}),g.badgeCount&&g.badgeCount>0&&g.badgeContent==="number"&&a.jsx(Ne,{badgeType:g.badgeType,content:g.badgeContent,count:g.badgeCount}),a.jsx(oe,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:Z,children:o.filter(s=>s.id!==i).map((s,r)=>a.jsx(qe,{id:s.id,label:s.label,onClick:R,disabled:s.disabled,leftIcon:s.icon,badgeCount:s.badgeCount,badgeContent:s.badgeContent,badgeIcon:s.badgeIcon,badgeType:s.badgeType,showBadge:!0},`${s.id}-dropdown-${r}`))}),o.map((s,r)=>a.jsx(He,{onClick:R,isSelected:i===s.id,compactSpacing:e,direction:t,"data-hidden":m,inverted:I,...s},`${s.id}-${r}`))]}),j&&!m&&a.jsx(ie,{name:t==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:w||N?1:0,pointerEvents:w||N?"auto":"none"},onClick:ae})]}),a.jsx("div",{className:_["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":j&&v==="scrollable"?!0:void 0})]})});T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Ra={title:"Composants/Tab",component:T,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},x={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:o=>{const[n,t]=b.useState("tab-2"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[a.jsx("span",{children:"Normal"}),a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i})]}),a.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[a.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i,inverted:!0})]})]}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...x.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:o=>{const[n,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),a.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),a.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},K={args:{...x.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:o=>{const[n,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(T,{...o,direction:"vertical",options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[n,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[n,t]=b.useState("home"),l=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},$={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[n,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return a.jsxs(a.Fragment,{children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[n,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i,overflowType:"dropdown"}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},Y={tags:["!autodocs"],args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[n,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return a.jsxs("div",{style:{height:"150px"},children:[a.jsx(T,{...o,options:l,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:o,step:n})=>{const t=Re(o);De();const l=await t.getByRole("tab",{name:"First Tab"}),i=await t.getByRole("tab",{name:"Second Tab"}),e=await t.getByRole("tab",{name:"Third Tab"}),v=await t.getByRole("tab",{name:"Fourth Tab"}),I=await t.getByRole("tab",{name:"Fifth Tab"}),y=async f=>{A(f).toHaveAttribute("aria-selected","true"),A(f).toHaveFocus(),A(t.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},C=async f=>{A(f).toHaveAttribute("aria-selected","false"),A(f).not.toHaveFocus(),A(t.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await n("Focus on the first tab and select it",async()=>{await L.tab(),y(l)}),await n("Navigate to the second tab and select it",async()=>{await L.keyboard(W),y(i)}),await n("Navigate to the second tab and select it",async()=>{await L.keyboard(W),y(e)}),await n("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await L.keyboard(W),y(I),C(v)}),await n("Navigate back to the first tab when there are no next tabs",async()=>{await L.keyboard(W),y(l)}),await n("Navigate back to the last tab and select it",async()=>{await L.keyboard(Oe),y(I)})}},le=[{id:"label",title:"label only",expectedAriaLabel:"Libellé seul",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Libellé seul",id:"target",panelId:"target-panel"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes",panelId:"target-panel"}]},{id:"labelNumberBadge",title:"label + number badge",expectedAriaLabel:"Alertes, 3",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Alertes",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without label",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",panelId:"target-panel",ariaLabel:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",ariaLabel:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator",panelId:"target-panel"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-grid",ariaLabel:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator",panelId:"target-panel"}]}],U={tags:["!autodocs"],args:{...x.args,onChange:()=>{},options:[]},render:()=>{const[o,n]=b.useState(Object.fromEntries(le.map(t=>[t.id,"ref"])));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:520,padding:8},"data-testid":"accessible-name-validation",children:[a.jsx("p",{style:{margin:0,fontSize:14},children:"Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de développement."}),le.map(t=>a.jsxs("section",{"aria-labelledby":`case-${t.id}-title`,children:[a.jsx("h3",{id:`case-${t.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:t.title}),a.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Nom accessible attendu : ",a.jsx("code",{children:t.expectedAriaLabel})]}),a.jsx(T,{options:[...t.options],selectedTabId:o[t.id],onChange:l=>n(i=>({...i,[t.id]:l})),"aria-label":t.title})]},t.id))]})},play:async({canvasElement:o})=>{const n=Re(o).getByTestId("accessible-name-validation").querySelectorAll("section");le.forEach((t,l)=>{const i=Array.from(n[l].querySelectorAll("[role='tab']"));A(i[1]).toHaveAttribute("aria-label",t.expectedAriaLabel)})}};var re,se,de;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(de=(se=x.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,be,pe;q.parameters={...q.parameters,docs:{...(ce=q.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(be=q.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,ge,he;K.parameters={...K.parameters,docs:{...(ue=K.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var me,Te,ve;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(Te=M.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var fe,ye,xe;P.parameters={...P.parameters,docs:{...(fe=P.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ie,Ce,we;$.parameters={...$.parameters,docs:{...(Ie=$.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(we=(Ce=$.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Se,je,ke;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ke=(je=G.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ee,Be,Ae;Y.parameters={...Y.parameters,docs:{...(Ee=Y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=Y.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Fe,Le,_e;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(_e=(Le=U.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};const Na=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction","AccessibleNameValidation"];export{U as AccessibleNameValidation,K as CompactSpacing,x as Default,P as IconsOnly,Y as KeyboardInteraction,G as OverflowType,q as Vertical,$ as WithBadge,M as WithIcons,Na as __namedExportsOrder,Ra as default};
