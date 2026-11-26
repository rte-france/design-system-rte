import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{g as Na,e as O,h as Da,f as ja}from"./keyboard-test.constants-BLfu6vvq.js";import{w as C,e as s,u as T,f as Oa,a as D}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as qa}from"./testing.utils-DmLcTX3r.js";import{p as me}from"./animation-BebxwkA_.js";import{u as Va}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{s as za,B as _a}from"./Badge-DUkuUEsZ.js";import{D as Ka}from"./Dropdown-C-WY_1Zk.js";import{D as Ma}from"./DropdownItem-B2ba_zf0.js";import{I as La}from"./Icon-DBkoQNiA.js";import{I as ve}from"./IconButton-B1jvMDIw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Ga}from"./log-handlers-Hz0GUguM.js";import{g as Pa}from"./accessibility.utils-DkLJcb6V.js";import{b as Ya,A as $a,c as Ua,a as Za}from"./keyboard.constants-DMoGODOQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DIdxdZMU.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ja=(i,n,o)=>{if(!Qa(i,n,o))return;const a=n.getBoundingClientRect(),l=i.getBoundingClientRect();if(o==="horizontal"){const t=n.scrollLeft+Xa(l,a);n.scrollTo({left:t,behavior:me()?"auto":"smooth"})}else{const t=n.scrollTop+et(l,a);n.scrollTo({top:t,behavior:me()?"auto":"smooth"})}},Qa=(i,n,o)=>{if(n&&i){const a=n.getBoundingClientRect(),l=i.getBoundingClientRect(),t=l.left<a.left,u=l.right>a.right,v=l.top<a.top,x=l.bottom>a.bottom;return o==="horizontal"?t||u:v||x}return!1},Xa=(i,n)=>{const o=i.left<n.left,a=i.right>n.right;return o?i.left-n.left:a?i.right-n.right:0},et=(i,n)=>{const o=i.top<n.top,a=i.bottom>n.bottom;return o?i.top-n.top:a?i.bottom-n.bottom:0},at="_tab_1p8jr_1",j={"tab-container":"_tab-container_1p8jr_1",tab:at,"tab-selected-indicator":"_tab-selected-indicator_1p8jr_43","tab-dropdown-layout":"_tab-dropdown-layout_1p8jr_76","tab-dropdown-tablist":"_tab-dropdown-tablist_1p8jr_77","tab-border-horizontal":"_tab-border-horizontal_1p8jr_83","tab-border-vertical":"_tab-border-vertical_1p8jr_95","tab-dropdown-button":"_tab-dropdown-button_1p8jr_104"},tt="_tabitem_1rgd2_1",fe={tabitem:tt,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Wa=p.forwardRef(({id:i,panelId:n,label:o,isSelected:a,showBadge:l,badgeCount:t,badgeContent:u="empty",badgeIcon:v,onClick:x,icon:g,badgeType:w="indicator",compactSpacing:E,direction:R,disabled:_,inverted:$,ariaLabel:U,...he},V)=>{const ye=t!==void 0&&t>0&&u==="number",H=l||ye||u==="icon"&&!!v,Te=Pa({ariaLabel:U,labelText:o,icon:g,showBadge:H,badgeCount:t,badgeContent:u,badgeIcon:v}),K={count:t,content:u,icon:v,badgeType:w},M=!_&&za({showBadge:!!H,badgeContent:u,badgeCount:t,badgeIcon:v}),m=p.useRef(null),[c,F]=p.useState(null),Z=d=>{!_&&!a?(x(d),F(b=>({...b,opacity:0}))):d.preventDefault()},G=p.useCallback(d=>{m.current&&!a&&F(d==="mouseover"?b=>({...b,opacity:1}):b=>({...b,opacity:0}))},[a]),h=d=>{const b=R==="vertical",f=b&&d.key===Ya,k=b&&d.key===$a,A=!b&&d.key===Ua,N=!b&&d.key===Za,r=f||A;(r||(k||N))&&(d.preventDefault(),J(r?"next":"previous"))},J=d=>{var B;const b=(B=m.current)==null?void 0:B.parentElement;if(!b)return;const f=Array.from(b.querySelectorAll(`.${fe.tabitem}`)),k=f.findIndex(P=>P===document.activeElement);let A=L(k,f.length,d),N=0;const r=f.length;for(;f[A].getAttribute("data-disabled")==="true"&&N<r;)A=L(A,f.length,d),N++;f[A].focus(),f[A].click()},L=(d,b,f)=>f==="next"?(d+1)%b:(d-1+b)%b,W=p.useCallback(()=>{m.current&&!a&&F(R==="horizontal"?d=>{var b,f,k,A;return{...d,width:(b=m.current)==null?void 0:b.offsetWidth,left:((f=m.current)==null?void 0:f.offsetLeft)??0,top:(((k=m.current)==null?void 0:k.offsetTop)??0)+(((A=m.current)==null?void 0:A.offsetHeight)??0)}}:d=>{var b,f;return{...d,left:0,top:(b=m.current)==null?void 0:b.offsetTop,height:(f=m.current)==null?void 0:f.offsetHeight}})},[a,R]);return p.useEffect(()=>{var d;return W(),window.addEventListener("resize",W),(d=m.current)!=null&&d.parentElement&&m.current.parentElement.addEventListener("scroll",W),()=>{window.removeEventListener("resize",W),m.current&&m.current.parentElement&&m.current.parentElement.removeEventListener("scroll",W)}},[W]),p.useEffect(()=>{var d;m.current&&F(R==="horizontal"?{width:m.current.offsetWidth,left:m.current.offsetLeft-(((d=m.current.parentElement)==null?void 0:d.scrollLeft)??0),top:m.current.offsetTop+m.current.offsetHeight,opacity:0}:{left:0,top:m.current.offsetTop,height:m.current.offsetHeight,opacity:0})},[R]),!o&&!U?(Ga("Tab",'Option with id "'+i+`" must have either a label or an ariaLabel if it's icon only.`),null):e.jsxs(e.Fragment,{children:[e.jsxs("button",{type:"button",id:i,className:fe.tabitem,role:"tab","aria-selected":a,"aria-controls":n,"aria-disabled":_,"aria-label":Te,tabIndex:a?0:-1,"data-selected":a,"data-disabled":_,"data-direction":R,"data-inverted":$,onClick:Z,"data-compact-spacing":E,ref:d=>{m.current=d,typeof V=="function"?V(d):V&&(V.current=d)},onKeyDown:h,onMouseEnter:()=>G("mouseover"),onMouseLeave:()=>G("mouseleave"),...a&&{"data-testid":"tabitem-selected"},...he,children:[g&&e.jsx(La,{name:g,appearance:a?"filled":"outlined"}),o&&e.jsx("span",{children:o}),M&&e.jsx(_a,{...K})]}),e.jsx("span",{"data-disabled":_,className:fe["segment-hover-indicator"],style:{width:c==null?void 0:c.width,height:c==null?void 0:c.height,left:c==null?void 0:c.left,top:c==null?void 0:c.top,opacity:c==null?void 0:c.opacity}})]})});Wa.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const I=p.forwardRef(({options:i,onChange:n,direction:o="horizontal",alignment:a="start",selectedTabId:l,compactSpacing:t,overflowType:u="scrollable",inverted:v=!1,"aria-label":x,"aria-labelledby":g,...w},E)=>{var N;const[R,_]=p.useState(!1),[$,U]=p.useState(!1),[he,V]=p.useState(!1),[ye,xe]=p.useState(!1),[H,Te]=p.useState(!1),[K,M]=p.useState(!1),m=i.find(r=>!r.disabled),c=i.find(r=>r.id===l)??m,F=(N=c!=null&&c.disabled?m:c)==null?void 0:N.id,Z=R||ye,G=$||he,h=p.useRef(null),J=p.useRef(null),{indicatorStyle:L}=Va(h,l,o==="horizontal"?"bottom":"left"),d=o==="horizontal"&&(R||$)&&u==="dropdown",b=p.useCallback(()=>{if(h.current){const r=h.current.offsetWidth<h.current.scrollWidth||h.current.offsetHeight<h.current.scrollHeight,B=h.current.scrollLeft>0,P=h.current.scrollWidth-h.current.clientWidth-h.current.scrollLeft>0,Q=h.current.scrollTop>0,X=h.current.scrollHeight-h.current.clientHeight-h.current.scrollTop>0;_(B),U(P),xe(Q),V(X),Te(r)}},[h]);p.useEffect(()=>{var r;return b(),window.addEventListener("resize",b),(r=h.current)==null||r.addEventListener("scroll",b),()=>{var B;window.removeEventListener("resize",b),(B=h.current)==null||B.removeEventListener("scroll",b)}},[b]),p.useEffect(()=>{c&&c.id!==l&&n(c.id)},[l,c,n]);const f=r=>{var X;const B=r.currentTarget,P=B.getAttribute("id")||"";if(n(P),M(!1),d){(X=J.current)==null||X.focus({preventScroll:!0});return}const Q=h.current;Q&&Ja(B,Q,o)},k=()=>{if(h.current){const r=o==="horizontal"?{left:-300}:{top:-300};h.current.scrollBy({...r,behavior:me()?"auto":"smooth"})}},A=()=>{if(h.current){const r=o==="horizontal"?{left:300}:{top:300};h.current.scrollBy({...r,behavior:me()?"auto":"smooth"})}};return e.jsxs("div",{className:j["tab-container"],"data-direction":o,children:[e.jsx("div",{className:j["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":t,"data-scrollable":H&&u==="scrollable"?!0:void 0}),e.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[H&&!d&&e.jsx(ve,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:Z?1:0,pointerEvents:Z?"auto":"none"},onClick:k}),e.jsxs("div",{ref:r=>{h.current=r,typeof E=="function"?E(r):E&&(E.current=r)},role:d?void 0:"tablist",className:j.tab,"data-alignment":H?"start":a,"data-direction":o,"aria-orientation":d?void 0:o,"aria-label":d?void 0:x,"aria-labelledby":d?void 0:g,"data-overflow-type":u,...w,children:[e.jsx("div",{className:j["tab-selected-indicator"],style:{left:d?0:L.left,width:(L.width??0)+(d?32:0),top:L.top,height:L.height}}),d&&c&&e.jsx(Ka,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>M(!1),offset:10,trigger:e.jsxs("div",{className:j["tab-dropdown-layout"],children:[e.jsx("div",{role:"tablist",className:j["tab-dropdown-tablist"],"aria-label":x,"aria-labelledby":g,"aria-orientation":o,children:e.jsxs("div",{className:j["tab-dropdown-button"],role:"tab","aria-selected":!0,"aria-label":c.label,"data-inverted":v,children:[c.icon&&e.jsx(La,{name:c.icon,appearance:"filled"}),c.label&&e.jsx("div",{style:{flexShrink:0},children:c.label}),c.badgeCount&&c.badgeCount>0&&c.badgeContent==="number"&&e.jsx(_a,{badgeType:c.badgeType,content:c.badgeContent,count:c.badgeCount})]})}),e.jsx(ve,{ref:J,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":K,name:K?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>M(r=>!r)})]}),isOpen:K,children:i.filter(r=>r.id!==l).map((r,B)=>e.jsx(Ma,{id:r.id,label:r.label,onClick:f,disabled:r.disabled,leftIcon:r.icon,badgeCount:r.badgeCount,badgeContent:r.badgeContent,badgeIcon:r.badgeIcon,badgeType:r.badgeType,showBadge:!0},`${r.id}-dropdown-${B}`))}),i.map((r,B)=>e.jsx(Wa,{onClick:f,isSelected:l===r.id,compactSpacing:t,direction:o,"data-hidden":d,inverted:v,...r,tabIndex:r.id===F?0:-1},`${r.id}-${B}`))]}),H&&!d&&e.jsx(ve,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:G?1:0,pointerEvents:G?"auto":"none"},onClick:A})]}),e.jsx("div",{className:j["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":t,"data-scrollable":H&&u==="scrollable"?!0:void 0})]})});I.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Wt={title:"Composants/Tab",component:I,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},S={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:i=>{const[n,o]=p.useState("tab-2"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=t=>{o(t)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[e.jsx("span",{children:"Normal"}),e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l})]}),e.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[e.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l,inverted:!0})]})]}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})}},ee={args:{...S.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[n,o]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=t=>{o(t)};return e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[e.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),e.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),e.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},ae={args:{...S.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:i=>{const[n,o]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=t=>{o(t)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[e.jsx(I,{...i,direction:"vertical",options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})]})}},te={args:{...S.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=p.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=t=>{o(t)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})}},ne={args:{...S.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=p.useState("home"),a=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],l=t=>{o(t)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.id]},t.id))})]})}},oe={args:{...S.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=p.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=t=>{o(t)};return e.jsxs(e.Fragment,{children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})}},ie={tags:["!autodocs"],args:{...S.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:i=>{const[n,o]=p.useState(i.selectedTabId);return e.jsxs(e.Fragment,{children:[e.jsx(I,{...i,selectedTabId:n,onChange:o}),i.options.map(a=>e.jsxs("div",{role:"tabpanel",id:a.panelId,"aria-labelledby":a.id,hidden:n!==a.id,children:["Content for ",a.label]},a.id))]})},play:async({canvasElement:i,args:n,step:o})=>{const a=C(i),l=a.getAllByRole("tab"),t=["indicator","number","number-auto","icon","icon-auto","neutral"];await s(l).toHaveLength(n.options.length);for(const u of l)await o(`Badge visibility: ${u.id}`,async()=>{const v=C(u).queryByTestId("badge");t.includes(u.id)?(await s(v).toBeVisible(),await s(v).toHaveAttribute("data-badge-type",u.id==="neutral"?"neutral":"indicator")):await s(v).not.toBeInTheDocument()});await s(C(a.getByRole("tab",{name:"Number, 5"})).getByTestId("badge")).toHaveTextContent("5"),await s(C(a.getByRole("tab",{name:"Icon. Notification"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},z={args:{...S.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=t=>{o(t)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[e.jsxs("div",{style:{width:"400px"},children:[e.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]}),e.jsxs("div",{style:{width:"400px"},children:[e.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l,overflowType:"dropdown","aria-label":"Dropdown tabs"}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})]})}},le={tags:["!autodocs"],args:{...z.args},render:z.render,play:async({canvasElement:i})=>{const n=C(i),o=C(i.ownerDocument.body),a=C(n.getByRole("tablist",{name:"Dropdown tabs"})),l=await n.findByRole("button",{name:"Afficher les onglets"}),t=async()=>{const g=a.getByRole("tab",{selected:!0}),w=g.getBoundingClientRect(),E=l.getBoundingClientRect();await s(E.left-w.right).toBeCloseTo(parseFloat(getComputedStyle(g).marginRight),1),await s(E.top+E.height/2).toBeCloseTo(w.top+w.height/2,1)};await s(i.querySelector("button button")).toBeNull(),await s(a.queryByRole("button",{name:"Afficher les onglets"})).toBeNull(),await t(),await s(l).toHaveAttribute("aria-haspopup","true"),await s(l).toHaveAttribute("aria-expanded","false"),await T.click(l),await D(()=>s(l).toHaveAttribute("aria-expanded","true")),await T.click(await o.findByRole("menuitem",{name:"Second Tab"})),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(a.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await s(l).toHaveAttribute("aria-expanded","false"),await s(l).toHaveFocus(),await T.keyboard("{Enter}");const u=await o.findByRole("menuitem",{name:"First Tab very long and descriptive"});await D(()=>s(u).toHaveFocus()),await T.keyboard("{ArrowDown}");const v=await o.findByRole("menuitem",{name:"Third Tab"});await s(v).toHaveFocus(),await T.keyboard("{Enter}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument());const x=a.getByRole("tab",{name:"Third Tab",selected:!0});await s(x).toBeVisible(),await s(l).toHaveFocus(),await t(),await T.click(x),await s(l).toHaveAttribute("aria-expanded","false"),await T.click(l),await D(()=>s(l).toHaveAttribute("aria-expanded","true")),await D(()=>s(o.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await T.keyboard("{Escape}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(l).toHaveFocus()}},se={tags:["!autodocs"],args:{...S.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=t=>{o(t)};return e.jsxs("div",{style:{height:"150px"},children:[e.jsx(I,{...i,options:a,selectedTabId:n,onChange:l}),e.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(t=>e.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:n!==t.id,children:["Contenu onglet ",t.label]},t.id))})]})},play:async({canvasElement:i,step:n})=>{const o=C(i);qa();const a=await o.getByRole("tab",{name:"First Tab"}),l=await o.getByRole("tab",{name:"Second Tab"}),t=await o.getByRole("tab",{name:"Third Tab"}),u=await o.getByRole("tab",{name:"Fourth Tab"}),v=await o.getByRole("tab",{name:"Fifth Tab"}),x=async w=>{s(w).toHaveAttribute("aria-selected","true"),s(w).toHaveFocus(),s(o.getByText(`Contenu onglet ${w.textContent}`)).toBeVisible()},g=async w=>{s(w).toHaveAttribute("aria-selected","false"),s(w).not.toHaveFocus(),s(o.getByText(`Contenu onglet ${w.textContent}`)).not.toBeVisible()};await n("Focus on the first tab and select it",async()=>{await T.tab(),x(a)}),await n("Navigate to the second tab and select it",async()=>{await T.keyboard(O),x(l)}),await n("Navigate to the second tab and select it",async()=>{await T.keyboard(O),x(t)}),await n("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await T.keyboard(O),x(v),g(u)}),await n("Navigate back to the first tab when there are no next tabs",async()=>{await T.keyboard(O),x(a)}),await n("Navigate back to the last tab and select it",async()=>{await T.keyboard(ja),x(v)})}},y={tags:["!autodocs"],args:{options:[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],onChange:Oa()},render:i=>{const[n,o]=p.useState(i.selectedTabId);return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",children:"Before tabs"}),e.jsx(I,{...i,"aria-label":"Fallback tabs",selectedTabId:n,onChange:a=>{i.onChange(a),o(a)}}),e.jsx("button",{type:"button",children:"After tabs"}),i.options.map(a=>e.jsxs("div",{role:"tabpanel",id:a.panelId,"aria-labelledby":a.id,hidden:n!==a.id,children:["Content for ",a.label]},a.id))]})},play:async({canvasElement:i,args:n,step:o})=>{const a=C(i),l=C(a.getByRole("tablist")).getAllByRole("tab"),t=l.filter(g=>g.getAttribute("aria-disabled")!=="true"),u=t.find(g=>g.id===n.selectedTabId)??t[0],v=n.direction==="vertical"?Na:O,x=n.direction==="vertical"?Da:ja;await o("TAB reaches the first enabled tab when selection is missing or invalid",async()=>{a.getByRole("button",{name:"Before tabs"}).focus(),await T.tab(),await s(u).toHaveFocus(),await s(u).toHaveAttribute("aria-selected","true"),await s(l.filter(g=>g.tabIndex===0)).toEqual([u]),n.options.some(g=>g.id===n.selectedTabId)?await s(n.onChange).not.toHaveBeenCalled():await s(n.onChange).toHaveBeenCalledWith(u.id);for(const g of l.filter(w=>!t.includes(w)))await s(g).toHaveAttribute("aria-selected","false"),await s(n.onChange).not.toHaveBeenCalledWith(g.id)}),await o("Arrow keys wrap and skip disabled tabs",async()=>{const g=t[(t.indexOf(u)-1+t.length)%t.length];await T.keyboard(x),await s(g).toHaveFocus(),await s(g).toHaveAttribute("aria-selected","true"),await s(n.onChange).toHaveBeenLastCalledWith(g.id),await s(l.filter(w=>w.tabIndex===0)).toEqual([g]),await T.keyboard(v),await s(u).toHaveFocus(),await s(u).toHaveAttribute("aria-selected","true")}),await o("TAB leaves the tablist without visiting the other tabs",async()=>{await T.tab(),await s(a.getByRole("button",{name:"After tabs"})).toHaveFocus()})}},de={...y,args:{...y.args,selectedTabId:"missing-tab"},play:y.play};var Ie,Be;const q={...y,args:{...y.args,options:(Be=(Ie=y.args)==null?void 0:Ie.options)==null?void 0:Be.map((i,n)=>({...i,disabled:n===0}))},play:y.play},re={...q,args:{...q.args,selectedTabId:"missing-tab"},play:y.play},ce={...y,args:{...y.args,direction:"vertical"},play:y.play},be={...y,args:{...y.args,selectedTabId:"tab-2"},play:y.play};var Ce,Se;const Y={...y,args:{...y.args,options:(Se=(Ce=y.args)==null?void 0:Ce.options)==null?void 0:Se.map(i=>({...i,disabled:!0}))},play:async({canvasElement:i,args:n})=>{const o=C(i),a=C(o.getByRole("tablist")).queryAllByRole("tab");await s(a.every(l=>l.tabIndex===-1)).toBe(!0),await s(a.every(l=>l.getAttribute("aria-selected")==="false")).toBe(!0),await s(n.onChange).not.toHaveBeenCalled(),o.getByRole("button",{name:"Before tabs"}).focus(),await T.tab(),await s(o.getByRole("button",{name:"After tabs"})).toHaveFocus()}},pe={...y,args:{...y.args,options:[]},play:Y.play},ue={...q,render:i=>e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",children:"Before tabs"}),e.jsx(I,{...i})]}),play:async({canvasElement:i,args:n})=>{const o=C(i),a=o.getAllByRole("tab");o.getByRole("button",{name:"Before tabs"}).focus(),await T.tab(),await s(a[1]).toHaveFocus(),await s(n.onChange).toHaveBeenCalledWith(a[1].id),await T.keyboard(O),await s(a[2]).toHaveFocus(),await s(n.onChange).toHaveBeenLastCalledWith(a[2].id),await T.keyboard(O),await s(a[1]).toHaveFocus(),await s(n.onChange).toHaveBeenLastCalledWith(a[1].id),await s(n.onChange).not.toHaveBeenCalledWith(a[0].id),await s(a.filter(l=>l.tabIndex===0)).toEqual([a[1]])}},we=[{id:"label",title:"label only",expectedAriaLabel:"Libellé seul",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Libellé seul",id:"target",panelId:"target-panel"}]},{id:"ariaLabel",title:"ariaLabel override",expectedAriaLabel:"3 nouvelles alertes",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Visible (ignoré SR)",id:"target",ariaLabel:"3 nouvelles alertes",panelId:"target-panel"}]},{id:"labelNumberBadge",title:"label + number badge",expectedAriaLabel:"Alertes, 3",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Alertes",id:"target",panelId:"target-panel",badgeContent:"number",badgeCount:3,badgeType:"indicator"}]},{id:"labelEmptyBadge",title:"label + empty badge",expectedAriaLabel:"Favoris. Notification",options:[{label:"Référence",id:"ref",panelId:"ref-panel"},{label:"Favoris",id:"target",panelId:"target-panel",showBadge:!0,badgeContent:"empty",badgeType:"indicator"}]},{id:"iconOnly",title:"icon without label",expectedAriaLabel:"view-column",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",panelId:"target-panel",ariaLabel:"view-column"}]},{id:"iconNumberBadge",title:"icon + badgeCount",expectedAriaLabel:"view-column. Notifications, 3",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-column",ariaLabel:"view-column",badgeContent:"number",badgeCount:3,badgeType:"indicator",panelId:"target-panel"}]},{id:"iconBadgeIcon",title:"icon + badgeIcon (empty/icon badge)",expectedAriaLabel:"view-grid. Notification",options:[{id:"ref",icon:"view-agenda",panelId:"ref-panel",ariaLabel:"view-agenda"},{id:"target",icon:"view-grid",ariaLabel:"view-grid",badgeContent:"icon",badgeIcon:"notification",badgeType:"indicator",panelId:"target-panel"}]}],ge={tags:["!autodocs"],args:{...S.args,onChange:()=>{},options:[]},render:()=>{const[i,n]=p.useState(Object.fromEntries(we.map(o=>[o.id,"ref"])));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28,maxWidth:520,padding:8},"data-testid":"accessible-name-validation",children:[e.jsx("p",{style:{margin:0,fontSize:14},children:"Vérifiez le nom accessible du deuxième onglet de chaque liste avec un lecteur d’écran ou les outils de développement."}),we.map(o=>e.jsxs("section",{"aria-labelledby":`case-${o.id}-title`,children:[e.jsx("h3",{id:`case-${o.id}-title`,style:{margin:"0 0 4px",fontSize:16},children:o.title}),e.jsxs("p",{style:{margin:"0 0 8px",fontSize:13,color:"#555"},children:["Nom accessible attendu : ",e.jsx("code",{children:o.expectedAriaLabel})]}),e.jsx(I,{options:[...o.options],selectedTabId:i[o.id],onChange:a=>n(l=>({...l,[o.id]:a})),"aria-label":o.title})]},o.id))]})},play:async({canvasElement:i})=>{const n=C(i).getByTestId("accessible-name-validation").querySelectorAll("section");we.forEach((o,a)=>{const l=Array.from(n[a].querySelectorAll("[role='tab']"));s(l[1]).toHaveAttribute("aria-label",o.expectedAriaLabel)})}};var Ae,Ee,Re;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
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
}`,...(Re=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var Fe,He,ke;ee.parameters={...ee.parameters,docs:{...(Fe=ee.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(ke=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:ke.source}}};var je,_e,Le;ae.parameters={...ae.parameters,docs:{...(je=ae.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(Le=(_e=ae.parameters)==null?void 0:_e.docs)==null?void 0:Le.source}}};var We,Ne,De;te.parameters={...te.parameters,docs:{...(We=te.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(De=(Ne=te.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Oe,qe,Ve;ne.parameters={...ne.parameters,docs:{...(Oe=ne.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
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
}`,...(Ve=(qe=ne.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var ze,Ke,Me;oe.parameters={...oe.parameters,docs:{...(ze=oe.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Me=(Ke=oe.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Ge,Pe,Ye;ie.parameters={...ie.parameters,docs:{...(Ge=ie.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
      name: "Number, 5"
    })).getByTestId("badge")).toHaveTextContent("5");
    await expect(within(canvas.getByRole("tab", {
      name: "Icon. Notification"
    })).getByTestId("badge").querySelector("svg")).toBeInTheDocument();
  }
}`,...(Ye=(Pe=ie.parameters)==null?void 0:Pe.docs)==null?void 0:Ye.source}}};var $e,Ue,Ze;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Ze=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:Ze.source}}};var Je,Qe,Xe;le.parameters={...le.parameters,docs:{...(Je=le.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=le.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var ea,aa,ta;se.parameters={...se.parameters,docs:{...(ea=se.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
}`,...(ta=(aa=se.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var na,oa,ia;y.parameters={...y.parameters,docs:{...(na=y.parameters)==null?void 0:na.docs,source:{originalSource:`{
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
}`,...(ia=(oa=y.parameters)==null?void 0:oa.docs)==null?void 0:ia.source}}};var la,sa,da;de.parameters={...de.parameters,docs:{...(la=de.parameters)==null?void 0:la.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(da=(sa=de.parameters)==null?void 0:sa.docs)==null?void 0:da.source}}};var ra,ca,ba;q.parameters={...q.parameters,docs:{...(ra=q.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option, index) => ({
      ...option,
      disabled: index === 0
    }))
  },
  play: WithoutSelectedTab.play
}`,...(ba=(ca=q.parameters)==null?void 0:ca.docs)==null?void 0:ba.source}}};var pa,ua,ga;re.parameters={...re.parameters,docs:{...(pa=re.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  ...FirstTabDisabled,
  args: {
    ...FirstTabDisabled.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(ga=(ua=re.parameters)==null?void 0:ua.docs)==null?void 0:ga.source}}};var ma,ha,ya;ce.parameters={...ce.parameters,docs:{...(ma=ce.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    direction: "vertical"
  },
  play: WithoutSelectedTab.play
}`,...(ya=(ha=ce.parameters)==null?void 0:ha.docs)==null?void 0:ya.source}}};var Ta,va,fa;be.parameters={...be.parameters,docs:{...(Ta=be.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "tab-2"
  },
  play: WithoutSelectedTab.play
}`,...(fa=(va=be.parameters)==null?void 0:va.docs)==null?void 0:fa.source}}};var wa,xa,Ia;Y.parameters={...Y.parameters,docs:{...(wa=Y.parameters)==null?void 0:wa.docs,source:{originalSource:`{
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
}`,...(Ia=(xa=Y.parameters)==null?void 0:xa.docs)==null?void 0:Ia.source}}};var Ba,Ca,Sa;pe.parameters={...pe.parameters,docs:{...(Ba=pe.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: []
  },
  play: AllTabsDisabled.play
}`,...(Sa=(Ca=pe.parameters)==null?void 0:Ca.docs)==null?void 0:Sa.source}}};var Aa,Ea,Ra;ue.parameters={...ue.parameters,docs:{...(Aa=ue.parameters)==null?void 0:Aa.docs,source:{originalSource:`{
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
}`,...(Ra=(Ea=ue.parameters)==null?void 0:Ea.docs)==null?void 0:Ra.source}}};var Fa,Ha,ka;ge.parameters={...ge.parameters,docs:{...(Fa=ge.parameters)==null?void 0:Fa.docs,source:{originalSource:`{
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
}`,...(ka=(Ha=ge.parameters)==null?void 0:Ha.docs)==null?void 0:ka.source}}};const Nt=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","OverflowTypeInteraction","KeyboardInteraction","WithoutSelectedTab","InvalidSelectedTab","FirstTabDisabled","InvalidSelectedTabWithFirstDisabled","VerticalWithoutSelectedTab","SelectedTabIsPreserved","AllTabsDisabled","EmptyOptions","FocusWithoutSelectionUpdate","AccessibleNameValidation"];export{ge as AccessibleNameValidation,Y as AllTabsDisabled,ie as BadgeVisibility,ae as CompactSpacing,S as Default,pe as EmptyOptions,q as FirstTabDisabled,ue as FocusWithoutSelectionUpdate,ne as IconsOnly,de as InvalidSelectedTab,re as InvalidSelectedTabWithFirstDisabled,se as KeyboardInteraction,z as OverflowType,le as OverflowTypeInteraction,be as SelectedTabIsPreserved,ee as Vertical,ce as VerticalWithoutSelectedTab,oe as WithBadge,te as WithIcons,y as WithoutSelectedTab,Nt as __namedExportsOrder,Wt as default};
