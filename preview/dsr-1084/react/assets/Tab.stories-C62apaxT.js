import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{g as va,e as N,h as ya,f as ga}from"./keyboard-test.constants-AhMGO7e4.js";import{w as K,e as d,u as C,f as fa}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as xa}from"./testing.utils-DmLcTX3r.js";import{p as te}from"./animation-BebxwkA_.js";import{u as Ia}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ta}from"./Badge-BKSKdLzq.js";import{D as wa}from"./Dropdown-C-WY_1Zk.js";import{D as Ca}from"./DropdownItem-BqUZTx5Q.js";import{I as ce}from"./Icon-DBkoQNiA.js";import{I as ue}from"./IconButton-CJDki2nw.js";import{b as Sa,A as Ba,c as Ea,a as Fa}from"./keyboard.constants-DMoGODOQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DIdxdZMU.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const ka=(s,t,o)=>{if(!ja(s,t,o))return;const n=t.getBoundingClientRect(),l=s.getBoundingClientRect();if(o==="horizontal"){const e=t.scrollLeft+Aa(l,n);t.scrollTo({left:e,behavior:te()?"auto":"smooth"})}else{const e=t.scrollTop+Ha(l,n);t.scrollTo({top:e,behavior:te()?"auto":"smooth"})}},ja=(s,t,o)=>{if(t&&s){const n=t.getBoundingClientRect(),l=s.getBoundingClientRect(),e=l.left<n.left,m=l.right>n.right,B=l.top<n.top,w=l.bottom>n.bottom;return o==="horizontal"?e||m:B||w}return!1},Aa=(s,t)=>{const o=s.left<t.left,n=s.right>t.right;return o?s.left-t.left:n?s.right-t.right:0},Ha=(s,t)=>{const o=s.top<t.top,n=s.bottom>t.bottom;return o?s.top-t.top:n?s.bottom-t.bottom:0},Ra="_tab_1tjub_1",L={"tab-container":"_tab-container_1tjub_1",tab:Ra,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},_a="_tabitem_1rgd2_1",de={tabitem:_a,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},ma=p.forwardRef(({id:s,panelId:t,label:o,isSelected:n,showBadge:l,badgeCount:e,badgeContent:m="empty",badgeIcon:B,onClick:w,icon:h,badgeType:f="indicator",compactSpacing:ne,direction:F,disabled:R,inverted:q,...oe},_)=>{const se={count:e,content:m,icon:B,badgeType:f},W=e&&e>0&&m==="number",le=!R&&(l||W||m==="icon"&&B),b=p.useRef(null),[y,c]=p.useState(null),ie=r=>{R?r.preventDefault():(w(r),c(g=>({...g,opacity:0})))},u=p.useCallback(r=>{b.current&&!n&&c(r==="mouseover"?g=>({...g,opacity:1}):g=>({...g,opacity:0}))},[n]),D=r=>{const g=F==="vertical",v=g&&r.key===Sa,j=g&&r.key===Ba,i=!g&&r.key===Ea,x=!g&&r.key===Fa,A=v||i;(A||(j||x))&&(r.preventDefault(),pe(A?"next":"previous"))},pe=r=>{var H;const g=(H=b.current)==null?void 0:H.parentElement;if(!g)return;const v=Array.from(g.querySelectorAll(`.${de.tabitem}`)),j=v.findIndex(re=>re===document.activeElement);let i=k(j,v.length,r),x=0;const A=v.length;for(;v[i].getAttribute("data-disabled")==="true"&&x<A;)i=k(i,v.length,r),x++;v[i].focus(),v[i].click()},k=(r,g,v)=>v==="next"?(r+1)%g:(r-1+g)%g,S=p.useCallback(()=>{b.current&&!n&&c(F==="horizontal"?r=>{var g,v,j,i;return{...r,width:(g=b.current)==null?void 0:g.offsetWidth,left:((v=b.current)==null?void 0:v.offsetLeft)??0,top:(((j=b.current)==null?void 0:j.offsetTop)??0)+(((i=b.current)==null?void 0:i.offsetHeight)??0)}}:r=>{var g,v;return{...r,left:0,top:(g=b.current)==null?void 0:g.offsetTop,height:(v=b.current)==null?void 0:v.offsetHeight}})},[n,F]);return p.useEffect(()=>{var r;return S(),window.addEventListener("resize",S),(r=b.current)!=null&&r.parentElement&&b.current.parentElement.addEventListener("scroll",S),()=>{window.removeEventListener("resize",S),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{var r;b.current&&c(F==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((r=b.current.parentElement)==null?void 0:r.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[F]),a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",id:s,className:de.tabitem,role:"tab","aria-selected":n,"aria-controls":t,"aria-disabled":R,tabIndex:n?0:-1,"data-selected":n,"data-disabled":R,"data-direction":F,"data-inverted":q,onClick:ie,"data-compact-spacing":ne,ref:r=>{b.current=r,typeof _=="function"?_(r):_&&(_.current=r)},onKeyDown:D,onMouseEnter:()=>u("mouseover"),onMouseLeave:()=>u("mouseleave"),...n&&{"data-testid":"tabitem-selected"},...oe,children:[h&&a.jsx(ce,{name:h,appearance:n?"filled":"outlined"}),o&&a.jsx("span",{children:o}),le&&a.jsx(Ta,{...se})]}),a.jsx("span",{"data-disabled":R,className:de["segment-hover-indicator"],style:{width:y==null?void 0:y.width,height:y==null?void 0:y.height,left:y==null?void 0:y.left,top:y==null?void 0:y.top,opacity:y==null?void 0:y.opacity}})]})});ma.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const I=p.forwardRef(({options:s,onChange:t,direction:o="horizontal",alignment:n="start",selectedTabId:l,compactSpacing:e,overflowType:m="scrollable",inverted:B=!1,...w},h)=>{var j;const[f,ne]=p.useState(!1),[F,R]=p.useState(!1),[q,oe]=p.useState(!1),[_,se]=p.useState(!1),[W,be]=p.useState(!1),[le,b]=p.useState(!1),y=s.find(i=>!i.disabled),c=s.find(i=>i.id===l)??y,ie=(j=c!=null&&c.disabled?y:c)==null?void 0:j.id,u=p.useRef(null),{indicatorStyle:D}=Ia(u,l,o==="horizontal"?"bottom":"left"),k=o==="horizontal"&&(f||F)&&m==="dropdown",S=p.useCallback(()=>{if(u.current){const i=u.current.offsetWidth<u.current.scrollWidth||u.current.offsetHeight<u.current.scrollHeight,x=u.current.scrollLeft>0,A=u.current.scrollWidth-u.current.clientWidth-u.current.scrollLeft>0,H=u.current.scrollTop>0,re=u.current.scrollHeight-u.current.clientHeight-u.current.scrollTop>0;ne(x),R(A),se(H),oe(re),be(i)}},[u]);p.useEffect(()=>{var i;return S(),window.addEventListener("resize",S),(i=u.current)==null||i.addEventListener("scroll",S),()=>{var x;window.removeEventListener("resize",S),(x=u.current)==null||x.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{c&&c.id!==l&&t(c.id)},[l,c,t]);const r=i=>{const x=i.currentTarget,A=x.getAttribute("id")||"";t(A),b(!1);const H=u.current;H&&ka(x,H,o)},g=()=>{if(u.current){const i=o==="horizontal"?{left:-300}:{top:-300};u.current.scrollBy({...i,behavior:te()?"auto":"smooth"})}},v=()=>{if(u.current){const i=o==="horizontal"?{left:300}:{top:300};u.current.scrollBy({...i,behavior:te()?"auto":"smooth"})}};return a.jsxs("div",{className:L["tab-container"],"data-direction":o,children:[a.jsx("div",{className:L["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":W&&m==="scrollable"?!0:void 0}),a.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[W&&!k&&a.jsx(ue,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:f||_?1:0,pointerEvents:f||_?"auto":"none"},onClick:g}),a.jsxs("div",{ref:i=>{u.current=i,typeof h=="function"?h(i):h&&(h.current=i)},role:"tablist",className:L.tab,"data-alignment":W?"start":n,"data-direction":o,"aria-orientation":o,"data-overflow-type":m,...w,children:[a.jsx("div",{className:L["tab-selected-indicator"],style:{left:k?0:D.left,width:(D.width??0)+(k?32:0),top:D.top,height:D.height}}),k&&c&&a.jsx(wa,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:a.jsxs("button",{type:"button",className:L["tab-dropdown-button"],onClick:()=>b(i=>!i),"aria-label":"Select tab","data-inverted":B,children:[c&&c.icon&&a.jsx(ce,{name:c.icon,appearance:"filled"}),c&&a.jsx("div",{style:{flexShrink:0},children:c==null?void 0:c.label}),c.badgeCount&&c.badgeCount>0&&c.badgeContent==="number"&&a.jsx(Ta,{badgeType:c.badgeType,content:c.badgeContent,count:c.badgeCount}),a.jsx(ce,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:le,children:s.filter(i=>i.id!==l).map((i,x)=>a.jsx(Ca,{id:i.id,label:i.label,onClick:r,disabled:i.disabled,leftIcon:i.icon,badgeCount:i.badgeCount,badgeContent:i.badgeContent,badgeIcon:i.badgeIcon,badgeType:i.badgeType,showBadge:!0},`${i.id}-dropdown-${x}`))}),s.map((i,x)=>a.jsx(ma,{onClick:r,isSelected:l===i.id,compactSpacing:e,direction:o,"data-hidden":k,inverted:B,...i,tabIndex:i.id===ie?0:-1},`${i.id}-${x}`))]}),W&&!k&&a.jsx(ue,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:F||q?1:0,pointerEvents:F||q?"auto":"none"},onClick:v})]}),a.jsx("div",{className:L["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":W&&m==="scrollable"?!0:void 0})]})});I.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const pt={title:"Composants/Tab",component:I,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},E={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:s=>{const[t,o]=p.useState("tab-2"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{children:[a.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[a.jsx("span",{children:"Normal"}),a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l})]}),a.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[a.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l,inverted:!0})]})]}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{...E.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[t,o]=p.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),a.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),a.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},M={args:{...E.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[t,o]=p.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(I,{...s,direction:"vertical",options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},P={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,o]=p.useState("photos"),n=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,o]=p.useState("home"),n=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],l=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},Y={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,o]=p.useState("photos"),n=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{o(e)};return a.jsxs(a.Fragment,{children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},$={args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,o]=p.useState("tab-1"),n=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=e=>{o(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{width:"400px"},children:[a.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l,overflowType:"dropdown"}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},U={tags:["!autodocs"],args:{...E.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,o]=p.useState("tab-1"),n=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=e=>{o(e)};return a.jsxs("div",{style:{height:"150px"},children:[a.jsx(I,{...s,options:n,selectedTabId:t,onChange:l}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:n.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:t})=>{const o=K(s);xa();const n=await o.getByRole("tab",{name:"First Tab"}),l=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),m=await o.getByRole("tab",{name:"Fourth Tab"}),B=await o.getByRole("tab",{name:"Fifth Tab"}),w=async f=>{d(f).toHaveAttribute("aria-selected","true"),d(f).toHaveFocus(),d(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},h=async f=>{d(f).toHaveAttribute("aria-selected","false"),d(f).not.toHaveFocus(),d(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await C.tab(),w(n)}),await t("Navigate to the second tab and select it",async()=>{await C.keyboard(N),w(l)}),await t("Navigate to the second tab and select it",async()=>{await C.keyboard(N),w(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await C.keyboard(N),w(B),h(m)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await C.keyboard(N),w(n)}),await t("Navigate back to the last tab and select it",async()=>{await C.keyboard(ga),w(B)})}},T={tags:["!autodocs"],args:{options:[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],onChange:fa()},render:s=>{const[t,o]=p.useState(s.selectedTabId);return a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",children:"Before tabs"}),a.jsx(I,{...s,"aria-label":"Fallback tabs",selectedTabId:t,onChange:n=>{s.onChange(n),o(n)}}),a.jsx("button",{type:"button",children:"After tabs"}),s.options.map(n=>a.jsxs("div",{role:"tabpanel",id:n.panelId,"aria-labelledby":n.id,hidden:t!==n.id,children:["Content for ",n.label]},n.id))]})},play:async({canvasElement:s,args:t,step:o})=>{const n=K(s),l=K(n.getByRole("tablist")).getAllByRole("tab"),e=l.filter(h=>h.getAttribute("aria-disabled")!=="true"),m=e.find(h=>h.id===t.selectedTabId)??e[0],B=t.direction==="vertical"?va:N,w=t.direction==="vertical"?ya:ga;await o("TAB reaches the first enabled tab when selection is missing or invalid",async()=>{n.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await d(m).toHaveFocus(),await d(m).toHaveAttribute("aria-selected","true"),await d(l.filter(h=>h.tabIndex===0)).toEqual([m]),t.options.some(h=>h.id===t.selectedTabId)?await d(t.onChange).not.toHaveBeenCalled():await d(t.onChange).toHaveBeenCalledWith(m.id);for(const h of l.filter(f=>!e.includes(f)))await d(h).toHaveAttribute("aria-selected","false"),await d(t.onChange).not.toHaveBeenCalledWith(h.id)}),await o("Arrow keys wrap and skip disabled tabs",async()=>{const h=e[(e.indexOf(m)-1+e.length)%e.length];await C.keyboard(w),await d(h).toHaveFocus(),await d(h).toHaveAttribute("aria-selected","true"),await d(t.onChange).toHaveBeenLastCalledWith(h.id),await d(l.filter(f=>f.tabIndex===0)).toEqual([h]),await C.keyboard(B),await d(m).toHaveFocus(),await d(m).toHaveAttribute("aria-selected","true")}),await o("TAB leaves the tablist without visiting the other tabs",async()=>{await C.tab(),await d(n.getByRole("button",{name:"After tabs"})).toHaveFocus()})}},J={...T,args:{...T.args,selectedTabId:"missing-tab"},play:T.play};var he,ge;const O={...T,args:{...T.args,options:(ge=(he=T.args)==null?void 0:he.options)==null?void 0:ge.map((s,t)=>({...s,disabled:t===0}))},play:T.play},Q={...O,args:{...O.args,selectedTabId:"missing-tab"},play:T.play},X={...T,args:{...T.args,direction:"vertical"},play:T.play},Z={...T,args:{...T.args,selectedTabId:"tab-2"},play:T.play};var Te,me;const z={...T,args:{...T.args,options:(me=(Te=T.args)==null?void 0:Te.options)==null?void 0:me.map(s=>({...s,disabled:!0}))},play:async({canvasElement:s,args:t})=>{const o=K(s),n=K(o.getByRole("tablist")).queryAllByRole("tab");await d(n.every(l=>l.tabIndex===-1)).toBe(!0),await d(n.every(l=>l.getAttribute("aria-selected")==="false")).toBe(!0),await d(t.onChange).not.toHaveBeenCalled(),o.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await d(o.getByRole("button",{name:"After tabs"})).toHaveFocus()}},ee={...T,args:{...T.args,options:[]},play:z.play},ae={...O,render:s=>a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",children:"Before tabs"}),a.jsx(I,{...s})]}),play:async({canvasElement:s,args:t})=>{const o=K(s),n=o.getAllByRole("tab");o.getByRole("button",{name:"Before tabs"}).focus(),await C.tab(),await d(n[1]).toHaveFocus(),await d(t.onChange).toHaveBeenCalledWith(n[1].id),await C.keyboard(N),await d(n[2]).toHaveFocus(),await d(t.onChange).toHaveBeenLastCalledWith(n[2].id),await C.keyboard(N),await d(n[1]).toHaveFocus(),await d(t.onChange).toHaveBeenLastCalledWith(n[1].id),await d(t.onChange).not.toHaveBeenCalledWith(n[0].id),await d(n.filter(l=>l.tabIndex===0)).toEqual([n[1]])}};var ve,ye,fe;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(fe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:fe.source}}};var xe,Ie,we;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(we=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Ce,Se,Be;M.parameters={...M.parameters,docs:{...(Ce=M.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Be=(Se=M.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Ee,Fe,ke;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(ke=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var je,Ae,He;V.parameters={...V.parameters,docs:{...(je=V.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(He=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:He.source}}};var Re,_e,We;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(We=(_e=Y.parameters)==null?void 0:_e.docs)==null?void 0:We.source}}};var Ne,Oe,De;$.parameters={...$.parameters,docs:{...(Ne=$.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(De=(Oe=$.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Le,Ke,ze;U.parameters={...U.parameters,docs:{...(Le=U.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(ze=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var qe,Ge,Me;T.parameters={...T.parameters,docs:{...(qe=T.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(Me=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var Pe,Ve,Ye;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(Ye=(Ve=J.parameters)==null?void 0:Ve.docs)==null?void 0:Ye.source}}};var $e,Ue,Je;O.parameters={...O.parameters,docs:{...($e=O.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option, index) => ({
      ...option,
      disabled: index === 0
    }))
  },
  play: WithoutSelectedTab.play
}`,...(Je=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;Q.parameters={...Q.parameters,docs:{...(Qe=Q.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  ...FirstTabDisabled,
  args: {
    ...FirstTabDisabled.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(Ze=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;X.parameters={...X.parameters,docs:{...(ea=X.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    direction: "vertical"
  },
  play: WithoutSelectedTab.play
}`,...(ta=(aa=X.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,sa;Z.parameters={...Z.parameters,docs:{...(na=Z.parameters)==null?void 0:na.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "tab-2"
  },
  play: WithoutSelectedTab.play
}`,...(sa=(oa=Z.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var la,ia,ra;z.parameters={...z.parameters,docs:{...(la=z.parameters)==null?void 0:la.docs,source:{originalSource:`{
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
}`,...(ra=(ia=z.parameters)==null?void 0:ia.docs)==null?void 0:ra.source}}};var da,ca,ba;ee.parameters={...ee.parameters,docs:{...(da=ee.parameters)==null?void 0:da.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: []
  },
  play: AllTabsDisabled.play
}`,...(ba=(ca=ee.parameters)==null?void 0:ca.docs)==null?void 0:ba.source}}};var pa,ua,ha;ae.parameters={...ae.parameters,docs:{...(pa=ae.parameters)==null?void 0:pa.docs,source:{originalSource:`{
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
}`,...(ha=(ua=ae.parameters)==null?void 0:ua.docs)==null?void 0:ha.source}}};const ut=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction","WithoutSelectedTab","InvalidSelectedTab","FirstTabDisabled","InvalidSelectedTabWithFirstDisabled","VerticalWithoutSelectedTab","SelectedTabIsPreserved","AllTabsDisabled","EmptyOptions","FocusWithoutSelectionUpdate"];export{z as AllTabsDisabled,M as CompactSpacing,E as Default,ee as EmptyOptions,O as FirstTabDisabled,ae as FocusWithoutSelectionUpdate,V as IconsOnly,J as InvalidSelectedTab,Q as InvalidSelectedTabWithFirstDisabled,U as KeyboardInteraction,$ as OverflowType,Z as SelectedTabIsPreserved,G as Vertical,X as VerticalWithoutSelectedTab,Y as WithBadge,P as WithIcons,T as WithoutSelectedTab,ut as __namedExportsOrder,pt as default};
