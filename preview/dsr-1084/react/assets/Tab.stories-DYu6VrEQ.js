import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{g as ka,e as N,h as ja,f as Ra}from"./keyboard-test.constants-BLfu6vvq.js";import{w as E,e as s,u as v,f as _a,a as D}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as Wa}from"./testing.utils-DmLcTX3r.js";import{p as ue}from"./animation-BebxwkA_.js";import{u as Da}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Fa}from"./Badge-BKSKdLzq.js";import{D as Na}from"./Dropdown-C-WY_1Zk.js";import{D as La}from"./DropdownItem-BqUZTx5Q.js";import{I as Aa}from"./Icon-DBkoQNiA.js";import{I as ve}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Oa}from"./log-handlers-Hz0GUguM.js";import{b as qa,A as Ka,c as za,a as Va}from"./keyboard.constants-DMoGODOQ.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DIdxdZMU.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ma=(i,n,o)=>{if(!Ga(i,n,o))return;const a=n.getBoundingClientRect(),l=i.getBoundingClientRect();if(o==="horizontal"){const e=n.scrollLeft+Pa(l,a);n.scrollTo({left:e,behavior:ue()?"auto":"smooth"})}else{const e=n.scrollTop+Ya(l,a);n.scrollTo({top:e,behavior:ue()?"auto":"smooth"})}},Ga=(i,n,o)=>{if(n&&i){const a=n.getBoundingClientRect(),l=i.getBoundingClientRect(),e=l.left<a.left,p=l.right>a.right,x=l.top<a.top,I=l.bottom>a.bottom;return o==="horizontal"?e||p:x||I}return!1},Pa=(i,n)=>{const o=i.left<n.left,a=i.right>n.right;return o?i.left-n.left:a?i.right-n.right:0},Ya=(i,n)=>{const o=i.top<n.top,a=i.bottom>n.bottom;return o?i.top-n.top:a?i.bottom-n.bottom:0},$a="_tab_1p8jr_1",_={"tab-container":"_tab-container_1p8jr_1",tab:$a,"tab-selected-indicator":"_tab-selected-indicator_1p8jr_43","tab-dropdown-layout":"_tab-dropdown-layout_1p8jr_76","tab-dropdown-tablist":"_tab-dropdown-tablist_1p8jr_77","tab-border-horizontal":"_tab-border-horizontal_1p8jr_83","tab-border-vertical":"_tab-border-vertical_1p8jr_95","tab-dropdown-button":"_tab-dropdown-button_1p8jr_104"},Ua="_tabitem_1rgd2_1",fe={tabitem:Ua,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ha=b.forwardRef(({id:i,panelId:n,label:o,isSelected:a,showBadge:l,badgeCount:e,badgeContent:p="empty",badgeIcon:x,onClick:I,icon:g,badgeType:f="indicator",compactSpacing:A,direction:k,disabled:W,inverted:P,ariaLabel:Y,...ge},O)=>{const he={count:e,content:p,icon:x,badgeType:f},me=e&&e>0&&p==="number",Te=!W&&(l||me||p==="icon"&&x),u=b.useRef(null),[w,H]=b.useState(null),y=d=>{!W&&!a?(I(d),H(m=>({...m,opacity:0}))):d.preventDefault()},$=b.useCallback(d=>{u.current&&!a&&H(d==="mouseover"?m=>({...m,opacity:1}):m=>({...m,opacity:0}))},[a]),U=d=>{const m=k==="vertical",c=m&&d.key===qa,C=m&&d.key===Ka,S=!m&&d.key===za,K=!m&&d.key===Va,z=c||S;(z||(C||K))&&(d.preventDefault(),Z(z?"next":"previous"))},Z=d=>{var V;const m=(V=u.current)==null?void 0:V.parentElement;if(!m)return;const c=Array.from(m.querySelectorAll(`.${fe.tabitem}`)),C=c.findIndex(r=>r===document.activeElement);let S=h(C,c.length,d),K=0;const z=c.length;for(;c[S].getAttribute("data-disabled")==="true"&&K<z;)S=h(S,c.length,d),K++;c[S].focus(),c[S].click()},h=(d,m,c)=>c==="next"?(d+1)%m:(d-1+m)%m,j=b.useCallback(()=>{u.current&&!a&&H(k==="horizontal"?d=>{var m,c,C,S;return{...d,width:(m=u.current)==null?void 0:m.offsetWidth,left:((c=u.current)==null?void 0:c.offsetLeft)??0,top:(((C=u.current)==null?void 0:C.offsetTop)??0)+(((S=u.current)==null?void 0:S.offsetHeight)??0)}}:d=>{var m,c;return{...d,left:0,top:(m=u.current)==null?void 0:m.offsetTop,height:(c=u.current)==null?void 0:c.offsetHeight}})},[a,k]);return b.useEffect(()=>{var d;return j(),window.addEventListener("resize",j),(d=u.current)!=null&&d.parentElement&&u.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),u.current&&u.current.parentElement&&u.current.parentElement.removeEventListener("scroll",j)}},[j]),b.useEffect(()=>{var d;u.current&&H(k==="horizontal"?{width:u.current.offsetWidth,left:u.current.offsetLeft-(((d=u.current.parentElement)==null?void 0:d.scrollLeft)??0),top:u.current.offsetTop+u.current.offsetHeight,opacity:0}:{left:0,top:u.current.offsetTop,height:u.current.offsetHeight,opacity:0})},[k]),!o&&!Y?(Oa("Tab",'Option with id "'+i+`" must have either a label or an ariaLabel if it's icon only.`),null):t.jsxs(t.Fragment,{children:[t.jsxs("button",{type:"button",id:i,className:fe.tabitem,role:"tab","aria-selected":a,"aria-controls":n,"aria-label":Y,"aria-disabled":W,tabIndex:a?0:-1,"data-selected":a,"data-disabled":W,"data-direction":k,"data-inverted":P,onClick:y,"data-compact-spacing":A,ref:d=>{u.current=d,typeof O=="function"?O(d):O&&(O.current=d)},onKeyDown:U,onMouseEnter:()=>$("mouseover"),onMouseLeave:()=>$("mouseleave"),...a&&{"data-testid":"tabitem-selected"},...ge,children:[g&&t.jsx(Aa,{name:g,appearance:a?"filled":"outlined"}),o&&t.jsx("span",{children:o}),Te&&t.jsx(Fa,{...he})]}),t.jsx("span",{"data-disabled":W,className:fe["segment-hover-indicator"],style:{width:w==null?void 0:w.width,height:w==null?void 0:w.height,left:w==null?void 0:w.left,top:w==null?void 0:w.top,opacity:w==null?void 0:w.opacity}})]})});Ha.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const B=b.forwardRef(({options:i,onChange:n,direction:o="horizontal",alignment:a="start",selectedTabId:l,compactSpacing:e,overflowType:p="scrollable",inverted:x=!1,"aria-label":I,"aria-labelledby":g,...f},A)=>{var V;const[k,W]=b.useState(!1),[P,Y]=b.useState(!1),[ge,O]=b.useState(!1),[he,me]=b.useState(!1),[q,Te]=b.useState(!1),[u,w]=b.useState(!1),H=i.find(r=>!r.disabled),y=i.find(r=>r.id===l)??H,$=(V=y!=null&&y.disabled?H:y)==null?void 0:V.id,U=k||he,Z=P||ge,h=b.useRef(null),j=b.useRef(null),{indicatorStyle:d}=Da(h,l,o==="horizontal"?"bottom":"left"),c=o==="horizontal"&&(k||P)&&p==="dropdown",C=b.useCallback(()=>{if(h.current){const r=h.current.offsetWidth<h.current.scrollWidth||h.current.offsetHeight<h.current.scrollHeight,F=h.current.scrollLeft>0,ye=h.current.scrollWidth-h.current.clientWidth-h.current.scrollLeft>0,J=h.current.scrollTop>0,Q=h.current.scrollHeight-h.current.clientHeight-h.current.scrollTop>0;W(F),Y(ye),me(J),O(Q),Te(r)}},[h]);b.useEffect(()=>{var r;return C(),window.addEventListener("resize",C),(r=h.current)==null||r.addEventListener("scroll",C),()=>{var F;window.removeEventListener("resize",C),(F=h.current)==null||F.removeEventListener("scroll",C)}},[C]),b.useEffect(()=>{y&&y.id!==l&&n(y.id)},[l,y,n]);const S=r=>{var Q;const F=r.currentTarget,ye=F.getAttribute("id")||"";if(n(ye),w(!1),c){(Q=j.current)==null||Q.focus({preventScroll:!0});return}const J=h.current;J&&Ma(F,J,o)},K=()=>{if(h.current){const r=o==="horizontal"?{left:-300}:{top:-300};h.current.scrollBy({...r,behavior:ue()?"auto":"smooth"})}},z=()=>{if(h.current){const r=o==="horizontal"?{left:300}:{top:300};h.current.scrollBy({...r,behavior:ue()?"auto":"smooth"})}};return t.jsxs("div",{className:_["tab-container"],"data-direction":o,children:[t.jsx("div",{className:_["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":q&&p==="scrollable"?!0:void 0}),t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[q&&!c&&t.jsx(ve,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:U?1:0,pointerEvents:U?"auto":"none"},onClick:K}),t.jsxs("div",{ref:r=>{h.current=r,typeof A=="function"?A(r):A&&(A.current=r)},role:c?void 0:"tablist",className:_.tab,"data-alignment":q?"start":a,"data-direction":o,"aria-orientation":c?void 0:o,"aria-label":c?void 0:I,"aria-labelledby":c?void 0:g,"data-overflow-type":p,...f,children:[t.jsx("div",{className:_["tab-selected-indicator"],style:{left:c?0:d.left,width:(d.width??0)+(c?32:0),top:d.top,height:d.height}}),c&&y&&t.jsx(Na,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>w(!1),offset:10,trigger:t.jsxs("div",{className:_["tab-dropdown-layout"],children:[t.jsx("div",{role:"tablist",className:_["tab-dropdown-tablist"],"aria-label":I,"aria-labelledby":g,"aria-orientation":o,children:t.jsxs("div",{className:_["tab-dropdown-button"],role:"tab","aria-selected":!0,"aria-label":y.label,"data-inverted":x,children:[y.icon&&t.jsx(Aa,{name:y.icon,appearance:"filled"}),y.label&&t.jsx("div",{style:{flexShrink:0},children:y.label}),y.badgeCount&&y.badgeCount>0&&y.badgeContent==="number"&&t.jsx(Fa,{badgeType:y.badgeType,content:y.badgeContent,count:y.badgeCount})]})}),t.jsx(ve,{ref:j,"aria-label":"Afficher les onglets",variant:"neutral",style:{flexShrink:0,marginBottom:0,padding:0,height:"24px"},"aria-haspopup":!0,"aria-expanded":u,name:u?"arrow-chevron-up":"arrow-chevron-down",onClick:()=>w(r=>!r)})]}),isOpen:u,children:i.filter(r=>r.id!==l).map((r,F)=>t.jsx(La,{id:r.id,label:r.label,onClick:S,disabled:r.disabled,leftIcon:r.icon,badgeCount:r.badgeCount,badgeContent:r.badgeContent,badgeIcon:r.badgeIcon,badgeType:r.badgeType,showBadge:!0},`${r.id}-dropdown-${F}`))}),i.map((r,F)=>t.jsx(Ha,{onClick:S,isSelected:l===r.id,compactSpacing:e,direction:o,"data-hidden":c,inverted:x,...r,tabIndex:r.id===$?0:-1},`${r.id}-${F}`))]}),q&&!c&&t.jsx(ve,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:Z?1:0,pointerEvents:Z?"auto":"none"},onClick:z})]}),t.jsx("div",{className:_["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":q&&p==="scrollable"?!0:void 0})]})});B.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Rt={title:"Composants/Tab",component:B,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},R={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:i=>{const[n,o]=b.useState("tab-2"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{children:[t.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[t.jsx("span",{children:"Normal"}),t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l})]}),t.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[t.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l,inverted:!0})]})]}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},X={args:{...R.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[n,o]=b.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return t.jsxs("div",{style:{display:"flex",gap:"16px"},children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[t.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),t.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),t.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},ee={args:{...R.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:i=>{const[n,o]=b.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{o(e)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),t.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[t.jsx(B,{...i,direction:"vertical",options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},ae={args:{...R.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=b.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},te={args:{...R.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=b.useState("home"),a=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],l=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},ne={args:{...R.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=b.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},oe={tags:["!autodocs"],args:{...R.args,options:[{id:"none",label:"No badge",panelId:"panel-none"},{id:"indicator",label:"Indicator",panelId:"panel-indicator",showBadge:!0},{id:"number",label:"Number",panelId:"panel-number",badgeContent:"number",badgeCount:5},{id:"number-auto",label:"Automatic number",panelId:"panel-number-auto",badgeContent:"number",badgeCount:5,showBadge:!1},{id:"icon",label:"Icon",panelId:"panel-icon",badgeContent:"icon",badgeIcon:"notification"},{id:"icon-auto",label:"Automatic icon",panelId:"panel-icon-auto",badgeContent:"icon",badgeIcon:"notification",showBadge:!1},{id:"neutral",label:"Neutral",panelId:"panel-neutral",showBadge:!0,badgeType:"neutral"},{id:"hidden",label:"Explicitly hidden",panelId:"panel-hidden",showBadge:!1},{id:"type-only",label:"Type only",panelId:"panel-type-only",badgeType:"neutral"},{id:"content-only",label:"Content only",panelId:"panel-content-only",badgeContent:"empty"},{id:"count-only",label:"Count only",panelId:"panel-count-only",badgeCount:5},{id:"icon-only",label:"Icon name only",panelId:"panel-icon-only",badgeIcon:"notification"},{id:"missing-count",label:"Missing count",panelId:"panel-missing-count",badgeContent:"number"},{id:"zero",label:"Zero",panelId:"panel-zero",badgeContent:"number",badgeCount:0},{id:"negative",label:"Negative",panelId:"panel-negative",badgeContent:"number",badgeCount:-1},{id:"missing-icon",label:"Missing icon",panelId:"panel-missing-icon",badgeContent:"icon"},{id:"disabled-indicator",label:"Disabled indicator",panelId:"panel-disabled-indicator",disabled:!0,showBadge:!0},{id:"disabled-number",label:"Disabled number",panelId:"panel-disabled-number",disabled:!0,showBadge:!0,badgeContent:"number",badgeCount:5},{id:"disabled-icon",label:"Disabled icon",panelId:"panel-disabled-icon",disabled:!0,showBadge:!0,badgeContent:"icon",badgeIcon:"notification"}],selectedTabId:"none",direction:"vertical","aria-label":"Badge visibility"},render:i=>{const[n,o]=b.useState(i.selectedTabId);return t.jsxs(t.Fragment,{children:[t.jsx(B,{...i,selectedTabId:n,onChange:o}),i.options.map(a=>t.jsxs("div",{role:"tabpanel",id:a.panelId,"aria-labelledby":a.id,hidden:n!==a.id,children:["Content for ",a.label]},a.id))]})},play:async({canvasElement:i,args:n,step:o})=>{const a=E(i),l=a.getAllByRole("tab"),e=["indicator","number","number-auto","icon","icon-auto","neutral"];await s(l).toHaveLength(n.options.length);for(const p of l)await o(`Badge visibility: ${p.id}`,async()=>{const x=E(p).queryByTestId("badge");e.includes(p.id)?(await s(x).toBeVisible(),await s(x).toHaveAttribute("data-badge-type",p.id==="neutral"?"neutral":"indicator")):await s(x).not.toBeInTheDocument()});await s(E(a.getByRole("tab",{name:"Number 5"})).getByTestId("badge")).toHaveTextContent("5"),await s(E(a.getByRole("tab",{name:"Icon"})).getByTestId("badge").querySelector("svg")).toBeInTheDocument()}},M={args:{...R.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=b.useState("tab-1"),a=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=e=>{o(e)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[t.jsxs("div",{style:{width:"400px"},children:[t.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),t.jsxs("div",{style:{width:"400px"},children:[t.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l,overflowType:"dropdown","aria-label":"Dropdown tabs"}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},ie={tags:["!autodocs","tab-dropdown-interaction"],args:{...M.args},render:M.render,play:async({canvasElement:i})=>{const n=E(i),o=E(i.ownerDocument.body),a=E(n.getByRole("tablist",{name:"Dropdown tabs"})),l=await n.findByRole("button",{name:"Afficher les onglets"}),e=async()=>{const g=a.getByRole("tab",{selected:!0}),f=g.getBoundingClientRect(),A=l.getBoundingClientRect();await s(A.left-f.right).toBeCloseTo(parseFloat(getComputedStyle(g).marginRight),1),await s(A.top+A.height/2).toBeCloseTo(f.top+f.height/2,1)};await s(i.querySelector("button button")).toBeNull(),await s(a.queryByRole("button",{name:"Afficher les onglets"})).toBeNull(),await e(),await s(l).toHaveAttribute("aria-haspopup","true"),await s(l).toHaveAttribute("aria-expanded","false"),await v.click(l),await D(()=>s(l).toHaveAttribute("aria-expanded","true")),await v.click(await o.findByRole("menuitem",{name:"Second Tab"})),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(a.getByRole("tab",{name:"Second Tab",selected:!0})).toBeVisible(),await s(l).toHaveAttribute("aria-expanded","false"),await s(l).toHaveFocus(),await v.keyboard("{Enter}");const p=await o.findByRole("menuitem",{name:"First Tab very long and descriptive"});await D(()=>s(p).toHaveFocus()),await v.keyboard("{ArrowDown}");const x=await o.findByRole("menuitem",{name:"Third Tab"});await s(x).toHaveFocus(),await v.keyboard("{Enter}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument());const I=a.getByRole("tab",{name:"Third Tab",selected:!0});await s(I).toBeVisible(),await s(l).toHaveFocus(),await e(),await v.click(I),await s(l).toHaveAttribute("aria-expanded","false"),await v.click(l),await D(()=>s(l).toHaveAttribute("aria-expanded","true")),await D(()=>s(o.getByRole("menuitem",{name:"First Tab very long and descriptive"})).toHaveFocus()),await v.keyboard("{Escape}"),await D(()=>s(o.queryByRole("menu")).not.toBeInTheDocument()),await s(l).toHaveFocus()}},le={tags:["!autodocs"],args:{...R.args,onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,o]=b.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],l=e=>{o(e)};return t.jsxs("div",{style:{height:"150px"},children:[t.jsx(B,{...i,options:a,selectedTabId:n,onChange:l}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:i,step:n})=>{const o=E(i);Wa();const a=await o.getByRole("tab",{name:"First Tab"}),l=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),p=await o.getByRole("tab",{name:"Fourth Tab"}),x=await o.getByRole("tab",{name:"Fifth Tab"}),I=async f=>{s(f).toHaveAttribute("aria-selected","true"),s(f).toHaveFocus(),s(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},g=async f=>{s(f).toHaveAttribute("aria-selected","false"),s(f).not.toHaveFocus(),s(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await n("Focus on the first tab and select it",async()=>{await v.tab(),I(a)}),await n("Navigate to the second tab and select it",async()=>{await v.keyboard(N),I(l)}),await n("Navigate to the second tab and select it",async()=>{await v.keyboard(N),I(e)}),await n("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await v.keyboard(N),I(x),g(p)}),await n("Navigate back to the first tab when there are no next tabs",async()=>{await v.keyboard(N),I(a)}),await n("Navigate back to the last tab and select it",async()=>{await v.keyboard(Ra),I(x)})}},T={tags:["!autodocs"],args:{options:[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],onChange:_a()},render:i=>{const[n,o]=b.useState(i.selectedTabId);return t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",children:"Before tabs"}),t.jsx(B,{...i,"aria-label":"Fallback tabs",selectedTabId:n,onChange:a=>{i.onChange(a),o(a)}}),t.jsx("button",{type:"button",children:"After tabs"}),i.options.map(a=>t.jsxs("div",{role:"tabpanel",id:a.panelId,"aria-labelledby":a.id,hidden:n!==a.id,children:["Content for ",a.label]},a.id))]})},play:async({canvasElement:i,args:n,step:o})=>{const a=E(i),l=E(a.getByRole("tablist")).getAllByRole("tab"),e=l.filter(g=>g.getAttribute("aria-disabled")!=="true"),p=e.find(g=>g.id===n.selectedTabId)??e[0],x=n.direction==="vertical"?ka:N,I=n.direction==="vertical"?ja:Ra;await o("TAB reaches the first enabled tab when selection is missing or invalid",async()=>{a.getByRole("button",{name:"Before tabs"}).focus(),await v.tab(),await s(p).toHaveFocus(),await s(p).toHaveAttribute("aria-selected","true"),await s(l.filter(g=>g.tabIndex===0)).toEqual([p]),n.options.some(g=>g.id===n.selectedTabId)?await s(n.onChange).not.toHaveBeenCalled():await s(n.onChange).toHaveBeenCalledWith(p.id);for(const g of l.filter(f=>!e.includes(f)))await s(g).toHaveAttribute("aria-selected","false"),await s(n.onChange).not.toHaveBeenCalledWith(g.id)}),await o("Arrow keys wrap and skip disabled tabs",async()=>{const g=e[(e.indexOf(p)-1+e.length)%e.length];await v.keyboard(I),await s(g).toHaveFocus(),await s(g).toHaveAttribute("aria-selected","true"),await s(n.onChange).toHaveBeenLastCalledWith(g.id),await s(l.filter(f=>f.tabIndex===0)).toEqual([g]),await v.keyboard(x),await s(p).toHaveFocus(),await s(p).toHaveAttribute("aria-selected","true")}),await o("TAB leaves the tablist without visiting the other tabs",async()=>{await v.tab(),await s(a.getByRole("button",{name:"After tabs"})).toHaveFocus()})}},se={...T,args:{...T.args,selectedTabId:"missing-tab"},play:T.play};var we,xe;const L={...T,args:{...T.args,options:(xe=(we=T.args)==null?void 0:we.options)==null?void 0:xe.map((i,n)=>({...i,disabled:n===0}))},play:T.play},re={...L,args:{...L.args,selectedTabId:"missing-tab"},play:T.play},de={...T,args:{...T.args,direction:"vertical"},play:T.play},ce={...T,args:{...T.args,selectedTabId:"tab-2"},play:T.play};var Ie,Be;const G={...T,args:{...T.args,options:(Be=(Ie=T.args)==null?void 0:Ie.options)==null?void 0:Be.map(i=>({...i,disabled:!0}))},play:async({canvasElement:i,args:n})=>{const o=E(i),a=E(o.getByRole("tablist")).queryAllByRole("tab");await s(a.every(l=>l.tabIndex===-1)).toBe(!0),await s(a.every(l=>l.getAttribute("aria-selected")==="false")).toBe(!0),await s(n.onChange).not.toHaveBeenCalled(),o.getByRole("button",{name:"Before tabs"}).focus(),await v.tab(),await s(o.getByRole("button",{name:"After tabs"})).toHaveFocus()}},be={...T,args:{...T.args,options:[]},play:G.play},pe={...L,render:i=>t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",children:"Before tabs"}),t.jsx(B,{...i})]}),play:async({canvasElement:i,args:n})=>{const o=E(i),a=o.getAllByRole("tab");o.getByRole("button",{name:"Before tabs"}).focus(),await v.tab(),await s(a[1]).toHaveFocus(),await s(n.onChange).toHaveBeenCalledWith(a[1].id),await v.keyboard(N),await s(a[2]).toHaveFocus(),await s(n.onChange).toHaveBeenLastCalledWith(a[2].id),await v.keyboard(N),await s(a[1]).toHaveFocus(),await s(n.onChange).toHaveBeenLastCalledWith(a[1].id),await s(n.onChange).not.toHaveBeenCalledWith(a[0].id),await s(a.filter(l=>l.tabIndex===0)).toEqual([a[1]])}};var Ce,Se,Ee;R.parameters={...R.parameters,docs:{...(Ce=R.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Ee=(Se=R.parameters)==null?void 0:Se.docs)==null?void 0:Ee.source}}};var Re,Fe,Ae;X.parameters={...X.parameters,docs:{...(Re=X.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Ae=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var He,ke,je;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(je=(ke=ee.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};var _e,We,De;ae.parameters={...ae.parameters,docs:{...(_e=ae.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(De=(We=ae.parameters)==null?void 0:We.docs)==null?void 0:De.source}}};var Ne,Le,Oe;te.parameters={...te.parameters,docs:{...(Ne=te.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(Oe=(Le=te.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var qe,Ke,ze;ne.parameters={...ne.parameters,docs:{...(qe=ne.parameters)==null?void 0:qe.docs,source:{originalSource:`{
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
}`,...(ze=(Ke=ne.parameters)==null?void 0:Ke.docs)==null?void 0:ze.source}}};var Ve,Me,Ge;oe.parameters={...oe.parameters,docs:{...(Ve=oe.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Ge=(Me=oe.parameters)==null?void 0:Me.docs)==null?void 0:Ge.source}}};var Pe,Ye,$e;M.parameters={...M.parameters,docs:{...(Pe=M.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
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
}`,...($e=(Ye=M.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var Ue,Ze,Je;ie.parameters={...ie.parameters,docs:{...(Ue=ie.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
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
}`,...(Je=(Ze=ie.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};var Qe,Xe,ea;le.parameters={...le.parameters,docs:{...(Qe=le.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
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
}`,...(ea=(Xe=le.parameters)==null?void 0:Xe.docs)==null?void 0:ea.source}}};var aa,ta,na;T.parameters={...T.parameters,docs:{...(aa=T.parameters)==null?void 0:aa.docs,source:{originalSource:`{
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
}`,...(na=(ta=T.parameters)==null?void 0:ta.docs)==null?void 0:na.source}}};var oa,ia,la;se.parameters={...se.parameters,docs:{...(oa=se.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(la=(ia=se.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var sa,ra,da;L.parameters={...L.parameters,docs:{...(sa=L.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: WithoutSelectedTab.args?.options?.map((option, index) => ({
      ...option,
      disabled: index === 0
    }))
  },
  play: WithoutSelectedTab.play
}`,...(da=(ra=L.parameters)==null?void 0:ra.docs)==null?void 0:da.source}}};var ca,ba,pa;re.parameters={...re.parameters,docs:{...(ca=re.parameters)==null?void 0:ca.docs,source:{originalSource:`{
  ...FirstTabDisabled,
  args: {
    ...FirstTabDisabled.args,
    selectedTabId: "missing-tab"
  },
  play: WithoutSelectedTab.play
}`,...(pa=(ba=re.parameters)==null?void 0:ba.docs)==null?void 0:pa.source}}};var ua,ga,ha;de.parameters={...de.parameters,docs:{...(ua=de.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    direction: "vertical"
  },
  play: WithoutSelectedTab.play
}`,...(ha=(ga=de.parameters)==null?void 0:ga.docs)==null?void 0:ha.source}}};var ma,Ta,ya;ce.parameters={...ce.parameters,docs:{...(ma=ce.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    selectedTabId: "tab-2"
  },
  play: WithoutSelectedTab.play
}`,...(ya=(Ta=ce.parameters)==null?void 0:Ta.docs)==null?void 0:ya.source}}};var va,fa,wa;G.parameters={...G.parameters,docs:{...(va=G.parameters)==null?void 0:va.docs,source:{originalSource:`{
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
}`,...(wa=(fa=G.parameters)==null?void 0:fa.docs)==null?void 0:wa.source}}};var xa,Ia,Ba;be.parameters={...be.parameters,docs:{...(xa=be.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  ...WithoutSelectedTab,
  args: {
    ...WithoutSelectedTab.args,
    options: []
  },
  play: AllTabsDisabled.play
}`,...(Ba=(Ia=be.parameters)==null?void 0:Ia.docs)==null?void 0:Ba.source}}};var Ca,Sa,Ea;pe.parameters={...pe.parameters,docs:{...(Ca=pe.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
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
}`,...(Ea=(Sa=pe.parameters)==null?void 0:Sa.docs)==null?void 0:Ea.source}}};const Ft=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","BadgeVisibility","OverflowType","OverflowTypeInteraction","KeyboardInteraction","WithoutSelectedTab","InvalidSelectedTab","FirstTabDisabled","InvalidSelectedTabWithFirstDisabled","VerticalWithoutSelectedTab","SelectedTabIsPreserved","AllTabsDisabled","EmptyOptions","FocusWithoutSelectionUpdate"];export{G as AllTabsDisabled,oe as BadgeVisibility,ee as CompactSpacing,R as Default,be as EmptyOptions,L as FirstTabDisabled,pe as FocusWithoutSelectionUpdate,te as IconsOnly,se as InvalidSelectedTab,re as InvalidSelectedTabWithFirstDisabled,le as KeyboardInteraction,M as OverflowType,ie as OverflowTypeInteraction,ce as SelectedTabIsPreserved,X as Vertical,de as VerticalWithoutSelectedTab,ne as WithBadge,ae as WithIcons,T as WithoutSelectedTab,Ft as __namedExportsOrder,Rt as default};
