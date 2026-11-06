import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as O,f as Ne}from"./keyboard-test.constants-DC52cZHj.js";import{w as H,e as f,u as A}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as De}from"./testing.utils-DmLcTX3r.js";import{p as Y}from"./animation-BebxwkA_.js";import{u as Le}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ae}from"./Badge-BKSKdLzq.js";import{D as ze}from"./Dropdown-CyecDUeK.js";import{D as Oe}from"./DropdownItem-DoVaQzxG.js";import{I as ne}from"./Icon-DBkoQNiA.js";import{I as oe}from"./IconButton-CJDki2nw.js";import{b as Me,d as We,A as Ke,a as Ve}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const qe=(i,a,l)=>{if(!Pe(i,a,l))return;const t=a.getBoundingClientRect(),s=i.getBoundingClientRect();if(l==="horizontal"){const e=a.scrollLeft+Ge(s,t);a.scrollTo({left:e,behavior:Y()?"auto":"smooth"})}else{const e=a.scrollTop+$e(s,t);a.scrollTo({top:e,behavior:Y()?"auto":"smooth"})}},Pe=(i,a,l)=>{if(a&&i){const t=a.getBoundingClientRect(),s=i.getBoundingClientRect(),e=s.left<t.left,u=s.right>t.right,h=s.top<t.top,y=s.bottom>t.bottom;return l==="horizontal"?e||u:h||y}return!1},Ge=(i,a)=>{const l=i.left<a.left,t=i.right>a.right;return l?i.left-a.left:t?i.right-a.right:0},$e=(i,a)=>{const l=i.top<a.top,t=i.bottom>a.bottom;return l?i.top-a.top:t?i.bottom-a.bottom:0},Ye="_tab_1tjub_1",R={"tab-container":"_tab-container_1tjub_1",tab:Ye,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Ue="_tabitem_1rgd2_1",ee={tabitem:Ue,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Re=p.forwardRef(({id:i,panelId:a,label:l,isSelected:t,showBadge:s,badgeCount:e,badgeContent:u="empty",badgeIcon:h,onClick:y,icon:w,badgeType:T="indicator",compactSpacing:U,direction:I,disabled:k,inverted:N,...Z},E)=>{const J={count:e,content:u,icon:h,badgeType:T},F=e&&e>0&&u==="number",Q=!k&&(s||F||u==="icon"&&h),b=p.useRef(null),[r,v]=p.useState(null),te=d=>{k?d.preventDefault():(y(d),v(o=>({...o,opacity:0})))},S=p.useCallback(d=>{b.current&&!t&&v(d==="mouseover"?o=>({...o,opacity:1}):o=>({...o,opacity:0}))},[t]),B=d=>{const o=I==="vertical",c=o&&d.key===Me,C=o&&d.key===We,g=!o&&d.key===Ke,_=!o&&d.key===Ve,z=c||g;(z||(C||_))&&(d.preventDefault(),D(z?"next":"previous"))},D=d=>{var X;const o=(X=b.current)==null?void 0:X.parentElement;if(!o)return;const c=Array.from(o.querySelectorAll(`.${ee.tabitem}`)),C=c.findIndex(He=>He===document.activeElement);let g=L(C,c.length,d),_=0;const z=c.length;for(;c[g].getAttribute("data-disabled")==="true"&&_<z;)g=L(g,c.length,d),_++;c[g].focus(),c[g].click()},L=(d,o,c)=>c==="next"?(d+1)%o:(d-1+o)%o,j=p.useCallback(()=>{b.current&&!t&&v(I==="horizontal"?d=>{var o,c,C,g;return{...d,width:(o=b.current)==null?void 0:o.offsetWidth,left:((c=b.current)==null?void 0:c.offsetLeft)??0,top:(((C=b.current)==null?void 0:C.offsetTop)??0)+(((g=b.current)==null?void 0:g.offsetHeight)??0)}}:d=>{var o,c;return{...d,left:0,top:(o=b.current)==null?void 0:o.offsetTop,height:(c=b.current)==null?void 0:c.offsetHeight}})},[t,I]);return p.useEffect(()=>{var d;return j(),window.addEventListener("resize",j),(d=b.current)!=null&&d.parentElement&&b.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",j)}},[j]),p.useEffect(()=>{var d;b.current&&v(I==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((d=b.current.parentElement)==null?void 0:d.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[I]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:i,className:ee.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-disabled":k,tabIndex:t?0:-1,"data-selected":t,"data-disabled":k,"data-direction":I,"data-inverted":N,onClick:te,"data-compact-spacing":U,ref:d=>{b.current=d,typeof E=="function"?E(d):E&&(E.current=d)},onKeyDown:B,onMouseEnter:()=>S("mouseover"),onMouseLeave:()=>S("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...Z,children:[w&&n.jsx(ne,{name:w,appearance:t?"filled":"outlined"}),l&&n.jsx("span",{children:l}),Q&&n.jsx(Ae,{...J})]}),n.jsx("span",{"data-disabled":k,className:ee["segment-hover-indicator"],style:{width:r==null?void 0:r.width,height:r==null?void 0:r.height,left:r==null?void 0:r.left,top:r==null?void 0:r.top,opacity:r==null?void 0:r.opacity}})]})});Re.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const m=p.forwardRef(({options:i,onChange:a,direction:l="horizontal",alignment:t="start",selectedTabId:s,compactSpacing:e,overflowType:u="scrollable",inverted:h=!1,...y},w)=>{const[T,U]=p.useState(!1),[I,k]=p.useState(!1),[N,Z]=p.useState(!1),[E,J]=p.useState(!1),[F,ae]=p.useState(!1),[Q,b]=p.useState(!1),r=p.useRef(null),{indicatorStyle:v}=Le(r,s,l==="horizontal"?"bottom":"left"),S=l==="horizontal"&&(T||I)&&u==="dropdown",B=p.useCallback(()=>{if(r.current){const o=r.current.offsetWidth<r.current.scrollWidth||r.current.offsetHeight<r.current.scrollHeight,c=r.current.scrollLeft>0,C=r.current.scrollWidth-r.current.clientWidth-r.current.scrollLeft>0,g=r.current.scrollTop>0,_=r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop>0;U(c),k(C),J(g),Z(_),ae(o)}},[r]);p.useEffect(()=>{var o;return B(),window.addEventListener("resize",B),(o=r.current)==null||o.addEventListener("scroll",B),()=>{var c;window.removeEventListener("resize",B),(c=r.current)==null||c.removeEventListener("scroll",B)}},[B]),p.useEffect(()=>{!s&&i.length>0&&a(i[0].id)},[s,i,a]);const D=o=>{const c=o.currentTarget,C=c.getAttribute("id")||"";a(C),b(!1);const g=r.current;g&&qe(c,g,l)},L=()=>{if(r.current){const o=l==="horizontal"?{left:-300}:{top:-300};r.current.scrollBy({...o,behavior:Y()?"auto":"smooth"})}},j=()=>{if(r.current){const o=l==="horizontal"?{left:300}:{top:300};r.current.scrollBy({...o,behavior:Y()?"auto":"smooth"})}},d=i.find(o=>o.id===s);return n.jsxs("div",{className:R["tab-container"],"data-direction":l,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&u==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[F&&!S&&n.jsx(oe,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:T||E?1:0,pointerEvents:T||E?"auto":"none"},onClick:L}),n.jsxs("div",{ref:o=>{r.current=o,typeof w=="function"?w(o):w&&(w.current=o)},role:"tablist",className:R.tab,"data-alignment":F?"start":t,"data-direction":l,"aria-orientation":l,"data-overflow-type":u,...y,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:S?0:v.left,width:(v.width??0)+(S?32:0),top:v.top,height:v.height}}),S&&d&&n.jsx(ze,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>b(o=>!o),"aria-label":"Select tab","data-inverted":h,children:[d&&d.icon&&n.jsx(ne,{name:d.icon,appearance:"filled"}),d&&n.jsx("div",{style:{flexShrink:0},children:d==null?void 0:d.label}),d.badgeCount&&d.badgeCount>0&&d.badgeContent==="number"&&n.jsx(Ae,{badgeType:d.badgeType,content:d.badgeContent,count:d.badgeCount}),n.jsx(ne,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:Q,children:i.filter(o=>o.id!==s).map((o,c)=>n.jsx(Oe,{id:o.id,label:o.label,onClick:D,disabled:o.disabled,leftIcon:o.icon,badgeCount:o.badgeCount,badgeContent:o.badgeContent,badgeIcon:o.badgeIcon,badgeType:o.badgeType,showBadge:!0},`${o.id}-dropdown-${c}`))}),i.map((o,c)=>n.jsx(Re,{onClick:D,isSelected:s===o.id,compactSpacing:e,direction:l,"data-hidden":S,inverted:h,...o},`${o.id}-${c}`))]}),F&&!S&&n.jsx(oe,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:I||N?1:0,pointerEvents:I||N?"auto":"none"},onClick:j})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&u==="scrollable"?!0:void 0})]})});m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const kn={title:"Composants/Tab",component:m,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},x={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:i=>{const[a,l]=p.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...x.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},W={args:{...x.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:i=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(m,{...i,direction:"vertical",options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},K={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,l]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,l]=p.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],s=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},q={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,l]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={tags:["!autodocs"],args:{...x.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:i=>{const[a,l]=p.useState(i.selectedTabId);return n.jsxs(n.Fragment,{children:[n.jsx(m,{...i,selectedTabId:a,onChange:l}),i.options.map(t=>n.jsxs("div",{role:"tabpanel",id:t.panelId,"aria-labelledby":t.id,hidden:a!==t.id,children:["Content for ",t.label]},t.id))]})},play:async({canvasElement:i,args:a,step:l})=>{const t=H(i),s=t.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await f(s).toHaveLength(a.options.length);for(const u of s)await l(`Badge visibility: ${u.id}`,async()=>{const h=H(u).queryByTestId("badge");e.includes(u.id)?(await f(h).toBeVisible(),await f(h).toHaveAttribute("data-badge-type",u.id==="neutral"?"neutral":"indicator")):await f(h).not.toBeInTheDocument()});await f(H(t.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await f(H(t.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},G={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],s=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},$={tags:["!autodocs"],args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],s=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(m,{...i,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:i,step:a})=>{const l=H(i);De();const t=await l.getByRole("tab",{name:"First Tab"}),s=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),u=await l.getByRole("tab",{name:"Fourth Tab"}),h=await l.getByRole("tab",{name:"Fifth Tab"}),y=async T=>{f(T).toHaveAttribute("aria-selected","true"),f(T).toHaveFocus(),f(l.getByText(`Contenu onglet ${T.textContent}`)).toBeVisible()},w=async T=>{f(T).toHaveAttribute("aria-selected","false"),f(T).not.toHaveFocus(),f(l.getByText(`Contenu onglet ${T.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await A.tab(),y(t)}),await a("Navigate to the second tab and select it",async()=>{await A.keyboard(O),y(s)}),await a("Navigate to the second tab and select it",async()=>{await A.keyboard(O),y(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await A.keyboard(O),y(h),w(u)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await A.keyboard(O),y(t)}),await a("Navigate back to the last tab and select it",async()=>{await A.keyboard(Ne),y(h)})}};var le,ie,de;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var se,re,ce;M.parameters={...M.parameters,docs:{...(se=M.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(re=M.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var be,pe,ue;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(ue=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,he,me;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(me=(he=K.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var Te,ye,ve;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(ve=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,xe,Ie;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ce,we,Se;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Be,je,ke;G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
}`,...(ke=(je=G.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ee,Fe,_e;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
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
}`,...(_e=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:_e.source}}};const En=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","KeyboardInteraction"];export{P as BadgeVisibility,W as CompactSpacing,x as Default,V as IconsOnly,$ as KeyboardInteraction,G as OverflowType,M as Vertical,q as WithBadge,K as WithIcons,En as __namedExportsOrder,kn as default};
