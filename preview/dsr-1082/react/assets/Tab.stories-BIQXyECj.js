import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as K,f as De}from"./keyboard-test.constants-DC52cZHj.js";import{w as ae,u as C,a as oe,e as m}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Le}from"./testing.utils-DmLcTX3r.js";import{p as $}from"./animation-BebxwkA_.js";import{u as Oe}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as _e}from"./Badge-BKSKdLzq.js";import{D as ze}from"./Dropdown-CyecDUeK.js";import{D as Ke}from"./DropdownItem-DoVaQzxG.js";import{I as Ae}from"./Icon-DBkoQNiA.js";import{I as ee}from"./IconButton-CJDki2nw.js";import{b as We,d as qe,A as Me,a as Ve}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Pe=(r,a,o)=>{if(!Ge(r,a,o))return;const t=a.getBoundingClientRect(),d=r.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+Ye(d,t);a.scrollTo({left:e,behavior:$()?"auto":"smooth"})}else{const e=a.scrollTop+$e(d,t);a.scrollTo({top:e,behavior:$()?"auto":"smooth"})}},Ge=(r,a,o)=>{if(a&&r){const t=a.getBoundingClientRect(),d=r.getBoundingClientRect(),e=d.left<t.left,v=d.right>t.right,x=d.top<t.top,f=d.bottom>t.bottom;return o==="horizontal"?e||v:x||f}return!1},Ye=(r,a)=>{const o=r.left<a.left,t=r.right>a.right;return o?r.left-a.left:t?r.right-a.right:0},$e=(r,a)=>{const o=r.top<a.top,t=r.bottom>a.bottom;return o?r.top-a.top:t?r.bottom-a.bottom:0},Ue="_tab_1tjub_1",N={"tab-container":"_tab-container_1tjub_1",tab:Ue,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Je="_tabitem_1rgd2_1",ne={tabitem:Je,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},He=p.forwardRef(({id:r,panelId:a,label:o,isSelected:t,showBadge:d,badgeCount:e,badgeContent:v="empty",badgeIcon:x,onClick:f,icon:S,badgeType:g="indicator",compactSpacing:U,direction:w,disabled:R,inverted:z,...J},_)=>{const Q={count:e,content:v,icon:x,badgeType:g},A=e&&e>0&&v==="number",L=!R&&(d||A||v==="icon"&&x),b=p.useRef(null),[i,I]=p.useState(null),H=c=>{R?c.preventDefault():(f(c),I(s=>({...s,opacity:0})))},X=p.useCallback(c=>{b.current&&!t&&I(c==="mouseover"?s=>({...s,opacity:1}):s=>({...s,opacity:0}))},[t]),k=c=>{const s=w==="vertical",l=s&&c.key===We,u=s&&c.key===qe,h=!s&&c.key===Me,B=!s&&c.key===Ve,j=l||h;(j||(u||B))&&(c.preventDefault(),E(j?"next":"previous"))},E=c=>{var Z;const s=(Z=b.current)==null?void 0:Z.parentElement;if(!s)return;const l=Array.from(s.querySelectorAll(`.${ne.tabitem}`)),u=l.findIndex(Ne=>Ne===document.activeElement);let h=O(u,l.length,c),B=0;const j=l.length;for(;l[h].getAttribute("data-disabled")==="true"&&B<j;)h=O(h,l.length,c),B++;l[h].focus(),l[h].click()},O=(c,s,l)=>l==="next"?(c+1)%s:(c-1+s)%s,F=p.useCallback(()=>{b.current&&!t&&I(w==="horizontal"?c=>{var s,l,u,h;return{...c,width:(s=b.current)==null?void 0:s.offsetWidth,left:((l=b.current)==null?void 0:l.offsetLeft)??0,top:(((u=b.current)==null?void 0:u.offsetTop)??0)+(((h=b.current)==null?void 0:h.offsetHeight)??0)}}:c=>{var s,l;return{...c,left:0,top:(s=b.current)==null?void 0:s.offsetTop,height:(l=b.current)==null?void 0:l.offsetHeight}})},[t,w]);return p.useEffect(()=>{var c;return F(),window.addEventListener("resize",F),(c=b.current)!=null&&c.parentElement&&b.current.parentElement.addEventListener("scroll",F),()=>{window.removeEventListener("resize",F),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",F)}},[F]),p.useEffect(()=>{var c;b.current&&I(w==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((c=b.current.parentElement)==null?void 0:c.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[w]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:r,className:ne.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-disabled":R,tabIndex:t?0:-1,"data-selected":t,"data-disabled":R,"data-direction":w,"data-inverted":z,onClick:H,"data-compact-spacing":U,ref:c=>{b.current=c,typeof _=="function"?_(c):_&&(_.current=c)},onKeyDown:k,onMouseEnter:()=>X("mouseover"),onMouseLeave:()=>X("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...J,children:[S&&n.jsx(Ae,{name:S,appearance:t?"filled":"outlined"}),o&&n.jsx("span",{children:o}),L&&n.jsx(_e,{...Q})]}),n.jsx("span",{"data-disabled":R,className:ne["segment-hover-indicator"],style:{width:i==null?void 0:i.width,height:i==null?void 0:i.height,left:i==null?void 0:i.left,top:i==null?void 0:i.top,opacity:i==null?void 0:i.opacity}})]})});He.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const T=p.forwardRef(({options:r,onChange:a,direction:o="horizontal",alignment:t="start",selectedTabId:d,compactSpacing:e,overflowType:v="scrollable",inverted:x=!1,...f},S)=>{const[g,U]=p.useState(!1),[w,R]=p.useState(!1),[z,J]=p.useState(!1),[_,Q]=p.useState(!1),[A,te]=p.useState(!1),[L,b]=p.useState(!1),i=p.useRef(null),I=p.useRef(null),{indicatorStyle:H}=Oe(i,d,o==="horizontal"?"bottom":"left"),k=o==="horizontal"&&(g||w)&&v==="dropdown",E=p.useCallback(()=>{if(i.current){const l=i.current.offsetWidth<i.current.scrollWidth||i.current.offsetHeight<i.current.scrollHeight,u=i.current.scrollLeft>0,h=i.current.scrollWidth-i.current.clientWidth-i.current.scrollLeft>0,B=i.current.scrollTop>0,j=i.current.scrollHeight-i.current.clientHeight-i.current.scrollTop>0;U(u),R(h),Q(B),J(j),te(l)}},[i]);p.useEffect(()=>{var l;return E(),window.addEventListener("resize",E),(l=i.current)==null||l.addEventListener("scroll",E),()=>{var u;window.removeEventListener("resize",E),(u=i.current)==null||u.removeEventListener("scroll",E)}},[E]),p.useEffect(()=>{!d&&r.length>0&&a(r[0].id)},[d,r,a]);const O=l=>{var j;const u=l.currentTarget,h=u.getAttribute("id")||"";if(a(h),b(!1),k){(j=I.current)==null||j.focus({preventScroll:!0});return}const B=i.current;B&&Pe(u,B,o)},F=()=>{if(i.current){const l=o==="horizontal"?{left:-300}:{top:-300};i.current.scrollBy({...l,behavior:$()?"auto":"smooth"})}},c=()=>{if(i.current){const l=o==="horizontal"?{left:300}:{top:300};i.current.scrollBy({...l,behavior:$()?"auto":"smooth"})}},s=r.find(l=>l.id===d);return n.jsxs("div",{className:N["tab-container"],"data-direction":o,children:[n.jsx("div",{className:N["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":A&&v==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[A&&!k&&n.jsx(ee,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:g||_?1:0,pointerEvents:g||_?"auto":"none"},onClick:F}),n.jsxs("div",{ref:l=>{i.current=l,typeof S=="function"?S(l):S&&(S.current=l)},role:"tablist",className:N.tab,"data-alignment":A?"start":t,"data-direction":o,"aria-orientation":o,"data-overflow-type":v,...f,children:[n.jsx("div",{className:N["tab-selected-indicator"],style:{left:k?0:H.left,width:(H.width??0)+(k?32:0),top:H.top,height:H.height}}),k&&s&&n.jsx(ze,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:N["tab-dropdown-button"],onClick:()=>b(l=>!l),role:"tab","aria-selected":!0,"aria-label":s==null?void 0:s.label,"data-inverted":x,children:[s&&s.icon&&n.jsx(Ae,{name:s.icon,appearance:"filled"}),s&&n.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&n.jsx(_e,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount}),n.jsx(ee,{ref:I,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":L,name:L?"arrow-chevron-up":"arrow-chevron-down"})]}),isOpen:L,children:r.filter(l=>l.id!==d).map((l,u)=>n.jsx(Ke,{id:l.id,label:l.label,onClick:O,disabled:l.disabled,leftIcon:l.icon,badgeCount:l.badgeCount,badgeContent:l.badgeContent,badgeIcon:l.badgeIcon,badgeType:l.badgeType,showBadge:!0},`${l.id}-dropdown-${u}`))}),r.map((l,u)=>n.jsx(He,{onClick:O,isSelected:d===l.id,compactSpacing:e,direction:o,"data-hidden":k,inverted:x,...l},`${l.id}-${u}`))]}),A&&!k&&n.jsx(ee,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:w||z?1:0,pointerEvents:w||z?"auto":"none"},onClick:c})]}),n.jsx("div",{className:N["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":A&&v==="scrollable"?!0:void 0})]})});T.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const En={title:"Composants/Tab",component:T,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:r=>{const[a,o]=p.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},W={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:r=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:r=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(T,{...r,direction:"vertical",options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,o]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,o]=p.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,o]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},D={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},G={tags:["!autodocs"],args:{...D.args},render:D.render,play:async({canvasElement:r})=>{const a=ae(r),o=ae(r.ownerDocument.body),t=await a.findByRole("button",{name:"Afficher les onglets"});await C.click(t),await C.click(await o.findByRole("menuitem",{name:"Second Tab"})),await oe(()=>m(o.queryByRole("menu")).not.toBeInTheDocument()),await m(t.closest('[role="tab"]')).toHaveAccessibleName("Second Tab"),await m(t).toHaveAttribute("aria-expanded","false"),await m(t).toHaveFocus(),await C.keyboard("{Enter}"),(await o.findByRole("menuitem",{name:"Third Tab"})).focus(),await C.keyboard("{Enter}"),await oe(()=>m(o.queryByRole("menu")).not.toBeInTheDocument()),await m(t.closest('[role="tab"]')).toHaveAccessibleName("Third Tab"),await m(t).toHaveFocus()}},Y={tags:["!autodocs"],args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,o]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(T,{...r,options:t,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:r,step:a})=>{const o=ae(r);Le();const t=await o.getByRole("tab",{name:"First Tab"}),d=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),v=await o.getByRole("tab",{name:"Fourth Tab"}),x=await o.getByRole("tab",{name:"Fifth Tab"}),f=async g=>{m(g).toHaveAttribute("aria-selected","true"),m(g).toHaveFocus(),m(o.getByText(`Contenu onglet ${g.textContent}`)).toBeVisible()},S=async g=>{m(g).toHaveAttribute("aria-selected","false"),m(g).not.toHaveFocus(),m(o.getByText(`Contenu onglet ${g.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await C.tab(),f(t)}),await a("Navigate to the second tab and select it",async()=>{await C.keyboard(K),f(d)}),await a("Navigate to the second tab and select it",async()=>{await C.keyboard(K),f(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await C.keyboard(K),f(x),S(v)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await C.keyboard(K),f(t)}),await a("Navigate back to the last tab and select it",async()=>{await C.keyboard(De),f(x)})}};var le,re,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,de,ce;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=W.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,pe,ue;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,ge,me;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(me=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Te,ve,fe;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,xe,we;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(we=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Ie,Ce,Se;D.parameters={...D.parameters,docs:{...(Ie=D.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Se=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ke,Be,je;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`{
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
    const dropdownButton = await canvas.findByRole("button", {
      name: "Afficher les onglets"
    });
    await userEvent.click(dropdownButton);
    await userEvent.click(await page.findByRole("menuitem", {
      name: "Second Tab"
    }));
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(dropdownButton.closest('[role="tab"]')).toHaveAccessibleName("Second Tab");
    await expect(dropdownButton).toHaveAttribute("aria-expanded", "false");
    await expect(dropdownButton).toHaveFocus();
    await userEvent.keyboard("{Enter}");
    const thirdTab = await page.findByRole("menuitem", {
      name: "Third Tab"
    });
    thirdTab.focus();
    await userEvent.keyboard("{Enter}");
    await waitFor(() => expect(page.queryByRole("menu")).not.toBeInTheDocument());
    await expect(dropdownButton.closest('[role="tab"]')).toHaveAccessibleName("Third Tab");
    await expect(dropdownButton).toHaveFocus();
  }
}`,...(je=(Be=G.parameters)==null?void 0:Be.docs)==null?void 0:je.source}}};var Ee,Fe,Re;Y.parameters={...Y.parameters,docs:{...(Ee=Y.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(Re=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};const Fn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","OverflowTypeInteraction","KeyboardInteraction"];export{q as CompactSpacing,y as Default,V as IconsOnly,Y as KeyboardInteraction,D as OverflowType,G as OverflowTypeInteraction,W as Vertical,P as WithBadge,M as WithIcons,Fn as __namedExportsOrder,En as default};
