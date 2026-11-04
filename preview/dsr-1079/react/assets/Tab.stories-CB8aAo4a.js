import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as V,f as Oe}from"./keyboard-test.constants-DC52cZHj.js";import{w as Le,e as A,u as _}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as De}from"./testing.utils-DmLcTX3r.js";import{p as U}from"./animation-BebxwkA_.js";import{u as Ve}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ne}from"./Badge-DUkuUEsZ.js";import{D as We}from"./Dropdown-CyecDUeK.js";import{D as qe}from"./DropdownItem-CkNTUYza.js";import{I as oe}from"./Icon-DBkoQNiA.js";import{I as ie}from"./IconButton-B1jvMDIw.js";import"./timepicker.constants-CynrC_9x.js";import{g as Ke}from"./accessibility.utils-D6lNe8qO.js";import{b as Me,d as Pe,A as $e,a as Ge}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ye=(o,a,t)=>{if(!Ue(o,a,t))return;const l=a.getBoundingClientRect(),i=o.getBoundingClientRect();if(t==="horizontal"){const e=a.scrollLeft+Je(i,l);a.scrollTo({left:e,behavior:U()?"auto":"smooth"})}else{const e=a.scrollTop+Qe(i,l);a.scrollTo({top:e,behavior:U()?"auto":"smooth"})}},Ue=(o,a,t)=>{if(a&&o){const l=a.getBoundingClientRect(),i=o.getBoundingClientRect(),e=i.left<l.left,v=i.right>l.right,I=i.top<l.top,y=i.bottom>l.bottom;return t==="horizontal"?e||v:I||y}return!1},Je=(o,a)=>{const t=o.left<a.left,l=o.right>a.right;return t?o.left-a.left:l?o.right-a.right:0},Qe=(o,a)=>{const t=o.top<a.top,l=o.bottom>a.bottom;return t?o.top-a.top:l?o.bottom-a.bottom:0},Xe="_tab_1tjub_1",R={"tab-container":"_tab-container_1tjub_1",tab:Xe,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Ze="_tabitem_1rgd2_1",te={tabitem:Ze,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},He=b.forwardRef(({id:o,panelId:a,label:t,isSelected:l,showBadge:i,badgeCount:e,badgeContent:v="empty",badgeIcon:I,onClick:y,icon:C,badgeType:f="indicator",compactSpacing:J,direction:w,disabled:E,inverted:N,ariaLabel:Q,...H},F)=>{const B=Ke({ariaLabel:Q,labelText:t,icon:C,showBadge:i,badgeCount:e,badgeContent:v,badgeIcon:I}),X={count:e,content:v,icon:I,badgeType:f},Z=e&&e>0&&v==="number",p=!E&&(i||Z||v==="icon"&&I),d=b.useRef(null),[h,m]=b.useState(null),j=s=>{E?s.preventDefault():(y(s),m(c=>({...c,opacity:0})))},L=b.useCallback(s=>{d.current&&!l&&m(s==="mouseover"?c=>({...c,opacity:1}):c=>({...c,opacity:0}))},[l]),ee=s=>{const c=w==="vertical",u=c&&s.key===Me,k=c&&s.key===Pe,S=!c&&s.key===$e,O=!c&&s.key===Ge,D=u||S;(D||(k||O))&&(s.preventDefault(),ne(D?"next":"previous"))},ne=s=>{var ae;const c=(ae=d.current)==null?void 0:ae.parentElement;if(!c)return;const u=Array.from(c.querySelectorAll(`.${te.tabitem}`)),k=u.findIndex(ze=>ze===document.activeElement);let S=g(k,u.length,s),O=0;const D=u.length;for(;u[S].getAttribute("data-disabled")==="true"&&O<D;)S=g(S,u.length,s),O++;u[S].focus(),u[S].click()},g=(s,c,u)=>u==="next"?(s+1)%c:(s-1+c)%c,r=b.useCallback(()=>{d.current&&!l&&m(w==="horizontal"?s=>{var c,u,k,S;return{...s,width:(c=d.current)==null?void 0:c.offsetWidth,left:((u=d.current)==null?void 0:u.offsetLeft)??0,top:(((k=d.current)==null?void 0:k.offsetTop)??0)+(((S=d.current)==null?void 0:S.offsetHeight)??0)}}:s=>{var c,u;return{...s,left:0,top:(c=d.current)==null?void 0:c.offsetTop,height:(u=d.current)==null?void 0:u.offsetHeight}})},[l,w]);return b.useEffect(()=>{var s;return r(),window.addEventListener("resize",r),(s=d.current)!=null&&s.parentElement&&d.current.parentElement.addEventListener("scroll",r),()=>{window.removeEventListener("resize",r),d.current&&d.current.parentElement&&d.current.parentElement.removeEventListener("scroll",r)}},[r]),b.useEffect(()=>{var s;d.current&&m(w==="horizontal"?{width:d.current.offsetWidth,left:d.current.offsetLeft-(((s=d.current.parentElement)==null?void 0:s.scrollLeft)??0),top:d.current.offsetTop+d.current.offsetHeight,opacity:0}:{left:0,top:d.current.offsetTop,height:d.current.offsetHeight,opacity:0})},[w]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:o,className:te.tabitem,role:"tab","aria-selected":l,"aria-controls":a,"aria-disabled":E,"aria-label":B,tabIndex:l?0:-1,"data-selected":l,"data-disabled":E,"data-direction":w,"data-inverted":N,onClick:j,"data-compact-spacing":J,ref:s=>{d.current=s,typeof F=="function"?F(s):F&&(F.current=s)},onKeyDown:ee,onMouseEnter:()=>L("mouseover"),onMouseLeave:()=>L("mouseleave"),...l&&{"data-testid":"tabitem-selected"},...H,children:[C&&n.jsx(oe,{name:C,appearance:l?"filled":"outlined"}),t&&n.jsx("span",{children:t}),p&&n.jsx(Ne,{...X})]}),n.jsx("span",{"data-disabled":E,className:te["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});He.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const T=b.forwardRef(({options:o,onChange:a,direction:t="horizontal",alignment:l="start",selectedTabId:i,compactSpacing:e,overflowType:v="scrollable",inverted:I=!1,...y},C)=>{const[f,J]=b.useState(!1),[w,E]=b.useState(!1),[N,Q]=b.useState(!1),[H,F]=b.useState(!1),[B,X]=b.useState(!1),[Z,z]=b.useState(!1),p=b.useRef(null),{indicatorStyle:d}=Ve(p,i,t==="horizontal"?"bottom":"left"),m=t==="horizontal"&&(f||w)&&v==="dropdown",j=b.useCallback(()=>{if(p.current){const r=p.current.offsetWidth<p.current.scrollWidth||p.current.offsetHeight<p.current.scrollHeight,s=p.current.scrollLeft>0,c=p.current.scrollWidth-p.current.clientWidth-p.current.scrollLeft>0,u=p.current.scrollTop>0,k=p.current.scrollHeight-p.current.clientHeight-p.current.scrollTop>0;J(s),E(c),F(u),Q(k),X(r)}},[p]);b.useEffect(()=>{var r;return j(),window.addEventListener("resize",j),(r=p.current)==null||r.addEventListener("scroll",j),()=>{var s;window.removeEventListener("resize",j),(s=p.current)==null||s.removeEventListener("scroll",j)}},[j]),b.useEffect(()=>{!i&&o.length>0&&a(o[0].id)},[i,o,a]);const L=r=>{const s=r.currentTarget,c=s.getAttribute("id")||"";a(c),z(!1);const u=p.current;u&&Ye(s,u,t)},ee=()=>{if(p.current){const r=t==="horizontal"?{left:-300}:{top:-300};p.current.scrollBy({...r,behavior:U()?"auto":"smooth"})}},ne=()=>{if(p.current){const r=t==="horizontal"?{left:300}:{top:300};p.current.scrollBy({...r,behavior:U()?"auto":"smooth"})}},g=o.find(r=>r.id===i);return n.jsxs("div",{className:R["tab-container"],"data-direction":t,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":B&&v==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:t==="horizontal"?"row":"column"},children:[B&&!m&&n.jsx(ie,{name:t==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:f||H?1:0,pointerEvents:f||H?"auto":"none"},onClick:ee}),n.jsxs("div",{ref:r=>{p.current=r,typeof C=="function"?C(r):C&&(C.current=r)},role:"tablist",className:R.tab,"data-alignment":B?"start":l,"data-direction":t,"aria-orientation":t,"data-overflow-type":v,...y,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:m?0:d.left,width:(d.width??0)+(m?32:0),top:d.top,height:d.height}}),m&&g&&n.jsx(We,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>z(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>z(r=>!r),"aria-label":"Select tab","data-inverted":I,children:[g&&g.icon&&n.jsx(oe,{name:g.icon,appearance:"filled"}),g&&n.jsx("div",{style:{flexShrink:0},children:g==null?void 0:g.label}),g.badgeCount&&g.badgeCount>0&&g.badgeContent==="number"&&n.jsx(Ne,{badgeType:g.badgeType,content:g.badgeContent,count:g.badgeCount}),n.jsx(oe,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:Z,children:o.filter(r=>r.id!==i).map((r,s)=>n.jsx(qe,{id:r.id,label:r.label,onClick:L,disabled:r.disabled,leftIcon:r.icon,badgeCount:r.badgeCount,badgeContent:r.badgeContent,badgeIcon:r.badgeIcon,badgeType:r.badgeType,showBadge:!0},`${r.id}-dropdown-${s}`))}),o.map((r,s)=>n.jsx(He,{onClick:L,isSelected:i===r.id,compactSpacing:e,direction:t,"data-hidden":m,inverted:I,...r},`${r.id}-${s}`))]}),B&&!m&&n.jsx(ie,{name:t==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:w||N?1:0,pointerEvents:w||N?"auto":"none"},onClick:ne})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":t,"data-compact-spacing":e,"data-scrollable":B&&v==="scrollable"?!0:void 0})]})});T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Rn={title:"Composants/Tab",component:T,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},x={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:o=>{const[a,t]=b.useState("tab-2"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},W={args:{...x.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:o=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},q={args:{...x.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:o=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{t(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(T,{...o,direction:"vertical",options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},K={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[a,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[a,t]=b.useState("home"),l=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{t(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[a,t]=b.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{t(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},$={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},G={tags:["!autodocs"],args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:o=>{const[a,t]=b.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{t(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(T,{...o,options:l,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:o,step:a})=>{const t=Le(o);De();const l=await t.getByRole("tab",{name:"First Tab"}),i=await t.getByRole("tab",{name:"Second Tab"}),e=await t.getByRole("tab",{name:"Third Tab"}),v=await t.getByRole("tab",{name:"Fourth Tab"}),I=await t.getByRole("tab",{name:"Fifth Tab"}),y=async f=>{A(f).toHaveAttribute("aria-selected","true"),A(f).toHaveFocus(),A(t.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},C=async f=>{A(f).toHaveAttribute("aria-selected","false"),A(f).not.toHaveFocus(),A(t.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await _.tab(),y(l)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(V),y(i)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(V),y(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await _.keyboard(V),y(I),C(v)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await _.keyboard(V),y(l)}),await a("Navigate back to the last tab and select it",async()=>{await _.keyboard(Oe),y(I)})}},le=[{id:"label",title:"label only",expectedAriaLabel:"Libellé seul",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Libellé seul",id:"target",panelId:"target-panel"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes",panelId:"target-panel"}]},{id:"labelNumberBadge",title:"label + number badge",expectedAriaLabel:"Alertes, 3",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Alertes",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"iconOnly",title:"icon without label",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel"},{id:"target",icon:"view-column",panelId:"target-panel"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel"},{id:"target",icon:"view-column",showBadge:!0,badgeContent:"number",badgeCount:3,badgeType:"indicator",panelId:"target-panel"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel"},{id:"target",icon:"view-grid",showBadge:!0,badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator",panelId:"target-panel"}]}],Y={tags:["!autodocs"],args:{...x.args,onChange:()=>{},options:[]},render:()=>{const[o,a]=b.useState(Object.fromEntries(le.map(t=>[t.id,"ref"])));return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:520,padding:8},"data-testid":"accessible-name-validation",children:[n.jsx("p",{style:{margin:0,fontSize:14},children:"Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de développement."}),le.map(t=>n.jsxs("section",{"aria-labelledby":`case-${t.id}-title`,children:[n.jsx("h3",{id:`case-${t.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:t.title}),n.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Nom accessible attendu : ",n.jsx("code",{children:t.expectedAriaLabel})]}),n.jsx(T,{options:[...t.options],selectedTabId:o[t.id],onChange:l=>a(i=>({...i,[t.id]:l})),"aria-label":t.title})]},t.id))]})},play:async({canvasElement:o})=>{const a=Le(o).getByTestId("accessible-name-validation").querySelectorAll("section");le.forEach((t,l)=>{const i=Array.from(a[l].querySelectorAll("[role='tab']"));A(i[1]).toHaveAttribute("aria-label",t.expectedAriaLabel)})}};var se,re,de;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(re=x.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ce,be,pe;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(be=W.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var ue,ge,he;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(he=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var me,Te,ve;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(Te=K.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var fe,ye,xe;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ie,Ce,we;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(we=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Se,je,ke;$.parameters={...$.parameters,docs:{...(Se=$.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(ke=(je=$.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ee,Be,Ae;G.parameters={...G.parameters,docs:{...(Ee=G.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Fe,_e,Re;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Re=(_e=Y.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};const Ln=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction","AccessibleNameValidation"];export{Y as AccessibleNameValidation,q as CompactSpacing,x as Default,M as IconsOnly,G as KeyboardInteraction,$ as OverflowType,W as Vertical,P as WithBadge,K as WithIcons,Ln as __namedExportsOrder,Rn as default};
