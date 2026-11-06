import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as z,f as _e}from"./keyboard-test.constants-DC52cZHj.js";import{w as Ae,u as R,e as H}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Re}from"./testing.utils-DmLcTX3r.js";import{p as Y}from"./animation-BebxwkA_.js";import{u as He}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as Ee}from"./Badge-BKSKdLzq.js";import{D as Le}from"./Dropdown-CyecDUeK.js";import{D as Ne}from"./DropdownItem-DoVaQzxG.js";import{I as ne}from"./Icon-DBkoQNiA.js";import{I as te}from"./IconButton-CJDki2nw.js";import"./timepicker.constants-CynrC_9x.js";import{l as Oe}from"./log-handlers-BGrW2Sgz.js";import{b as De,d as ze,A as Ke,a as We}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Me=(r,a,l)=>{if(!Ve(r,a,l))return;const t=a.getBoundingClientRect(),i=r.getBoundingClientRect();if(l==="horizontal"){const e=a.scrollLeft+qe(i,t);a.scrollTo({left:e,behavior:Y()?"auto":"smooth"})}else{const e=a.scrollTop+Pe(i,t);a.scrollTo({top:e,behavior:Y()?"auto":"smooth"})}},Ve=(r,a,l)=>{if(a&&r){const t=a.getBoundingClientRect(),i=r.getBoundingClientRect(),e=i.left<t.left,T=i.right>t.right,x=i.top<t.top,v=i.bottom>t.bottom;return l==="horizontal"?e||T:x||v}return!1},qe=(r,a)=>{const l=r.left<a.left,t=r.right>a.right;return l?r.left-a.left:t?r.right-a.right:0},Pe=(r,a)=>{const l=r.top<a.top,t=r.bottom>a.bottom;return l?r.top-a.top:t?r.bottom-a.bottom:0},Ge="_tab_1tjub_1",L={"tab-container":"_tab-container_1tjub_1",tab:Ge,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Ye="_tabitem_1rgd2_1",ee={tabitem:Ye,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Be=p.forwardRef(({id:r,panelId:a,label:l,isSelected:t,showBadge:i,badgeCount:e,badgeContent:T="empty",badgeIcon:x,onClick:v,icon:I,badgeType:f="indicator",compactSpacing:$,direction:C,disabled:E,inverted:U,ariaLabel:D,...J},F)=>{const B={count:e,content:T,icon:x,badgeType:f},Q=e&&e>0&&T==="number",N=!E&&(i||Q||T==="icon"&&x),b=p.useRef(null),[h,c]=p.useState(null),_=d=>{E?d.preventDefault():(v(d),c(s=>({...s,opacity:0})))},X=p.useCallback(d=>{b.current&&!t&&c(d==="mouseover"?s=>({...s,opacity:1}):s=>({...s,opacity:0}))},[t]),S=d=>{const s=C==="vertical",o=s&&d.key===De,u=s&&d.key===ze,g=!s&&d.key===Ke,w=!s&&d.key===We,A=o||g;(A||(u||w))&&(d.preventDefault(),k(A?"next":"previous"))},k=d=>{var Z;const s=(Z=b.current)==null?void 0:Z.parentElement;if(!s)return;const o=Array.from(s.querySelectorAll(`.${ee.tabitem}`)),u=o.findIndex(Fe=>Fe===document.activeElement);let g=O(u,o.length,d),w=0;const A=o.length;for(;o[g].getAttribute("data-disabled")==="true"&&w<A;)g=O(g,o.length,d),w++;o[g].focus(),o[g].click()},O=(d,s,o)=>o==="next"?(d+1)%s:(d-1+s)%s,j=p.useCallback(()=>{b.current&&!t&&c(C==="horizontal"?d=>{var s,o,u,g;return{...d,width:(s=b.current)==null?void 0:s.offsetWidth,left:((o=b.current)==null?void 0:o.offsetLeft)??0,top:(((u=b.current)==null?void 0:u.offsetTop)??0)+(((g=b.current)==null?void 0:g.offsetHeight)??0)}}:d=>{var s,o;return{...d,left:0,top:(s=b.current)==null?void 0:s.offsetTop,height:(o=b.current)==null?void 0:o.offsetHeight}})},[t,C]);return p.useEffect(()=>{var d;return j(),window.addEventListener("resize",j),(d=b.current)!=null&&d.parentElement&&b.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",j)}},[j]),p.useEffect(()=>{var d;b.current&&c(C==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((d=b.current.parentElement)==null?void 0:d.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[C]),!l&&!D?(Oe("Tab",'Option with id "'+r+`" must have either a label or an ariaLabel if it's icon only.`),null):n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:r,className:ee.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-label":D,"aria-disabled":E,tabIndex:t?0:-1,"data-selected":t,"data-disabled":E,"data-direction":C,"data-inverted":U,onClick:_,"data-compact-spacing":$,ref:d=>{b.current=d,typeof F=="function"?F(d):F&&(F.current=d)},onKeyDown:S,onMouseEnter:()=>X("mouseover"),onMouseLeave:()=>X("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...J,children:[I&&n.jsx(ne,{name:I,appearance:t?"filled":"outlined"}),l&&n.jsx("span",{children:l}),N&&n.jsx(Ee,{...B})]}),n.jsx("span",{"data-disabled":E,className:ee["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});Be.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const m=p.forwardRef(({options:r,onChange:a,direction:l="horizontal",alignment:t="start",selectedTabId:i,compactSpacing:e,overflowType:T="scrollable",inverted:x=!1,...v},I)=>{const[f,$]=p.useState(!1),[C,E]=p.useState(!1),[U,D]=p.useState(!1),[J,F]=p.useState(!1),[B,Q]=p.useState(!1),[ae,N]=p.useState(!1),b=f||J,h=C||U,c=p.useRef(null),{indicatorStyle:_}=He(c,i,l==="horizontal"?"bottom":"left"),S=l==="horizontal"&&(f||C)&&T==="dropdown",k=p.useCallback(()=>{if(c.current){const o=c.current.offsetWidth<c.current.scrollWidth||c.current.offsetHeight<c.current.scrollHeight,u=c.current.scrollLeft>0,g=c.current.scrollWidth-c.current.clientWidth-c.current.scrollLeft>0,w=c.current.scrollTop>0,A=c.current.scrollHeight-c.current.clientHeight-c.current.scrollTop>0;$(u),E(g),F(w),D(A),Q(o)}},[c]);p.useEffect(()=>{var o;return k(),window.addEventListener("resize",k),(o=c.current)==null||o.addEventListener("scroll",k),()=>{var u;window.removeEventListener("resize",k),(u=c.current)==null||u.removeEventListener("scroll",k)}},[k]),p.useEffect(()=>{!i&&r.length>0&&a(r[0].id)},[i,r,a]);const O=o=>{const u=o.currentTarget,g=u.getAttribute("id")||"";a(g),N(!1);const w=c.current;w&&Me(u,w,l)},j=()=>{if(c.current){const o=l==="horizontal"?{left:-300}:{top:-300};c.current.scrollBy({...o,behavior:Y()?"auto":"smooth"})}},d=()=>{if(c.current){const o=l==="horizontal"?{left:300}:{top:300};c.current.scrollBy({...o,behavior:Y()?"auto":"smooth"})}},s=r.find(o=>o.id===i);return n.jsxs("div",{className:L["tab-container"],"data-direction":l,children:[n.jsx("div",{className:L["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":B&&T==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[B&&!S&&n.jsx(te,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:b?1:0,pointerEvents:b?"auto":"none"},onClick:j}),n.jsxs("div",{ref:o=>{c.current=o,typeof I=="function"?I(o):I&&(I.current=o)},role:"tablist",className:L.tab,"data-alignment":B?"start":t,"data-direction":l,"aria-orientation":l,"data-overflow-type":T,...v,children:[n.jsx("div",{className:L["tab-selected-indicator"],style:{left:S?0:_.left,width:(_.width??0)+(S?32:0),top:_.top,height:_.height}}),S&&s&&n.jsx(Le,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>N(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:L["tab-dropdown-button"],onClick:()=>N(o=>!o),"aria-label":"Afficher les onglets","data-inverted":x,children:[s&&s.icon&&n.jsx(ne,{name:s.icon,appearance:"filled"}),s&&n.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&n.jsx(Ee,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount}),n.jsx(ne,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ae,children:r.filter(o=>o.id!==i).map((o,u)=>n.jsx(Ne,{id:o.id,label:o.label,onClick:O,disabled:o.disabled,leftIcon:o.icon,badgeCount:o.badgeCount,badgeContent:o.badgeContent,badgeIcon:o.badgeIcon,badgeType:o.badgeType,showBadge:!0},`${o.id}-dropdown-${u}`))}),r.map((o,u)=>n.jsx(Be,{onClick:O,isSelected:i===o.id,compactSpacing:e,direction:l,"data-hidden":S,inverted:x,...o},`${o.id}-${u}`))]}),B&&!S&&n.jsx(te,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:h?1:0,pointerEvents:h?"auto":"none"},onClick:d})]}),n.jsx("div",{className:L["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":B&&T==="scrollable"?!0:void 0})]})});m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const jn={title:"Composants/Tab",component:m,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:r=>{const[a,l]=p.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},K={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:r=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},W={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:r=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(m,{...r,direction:"vertical",options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home",ariaLabel:"Home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks",ariaLabel:"Bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat",ariaLabel:"Chat"},{id:"settings",panelId:"panel-4",icon:"settings",ariaLabel:"Settings"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},G={tags:["!autodocs"],args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(m,{...r,options:t,selectedTabId:a,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:r,step:a})=>{const l=Ae(r);Re();const t=await l.getByRole("tab",{name:"First Tab"}),i=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),T=await l.getByRole("tab",{name:"Fourth Tab"}),x=await l.getByRole("tab",{name:"Fifth Tab"}),v=async f=>{H(f).toHaveAttribute("aria-selected","true"),H(f).toHaveFocus(),H(l.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},I=async f=>{H(f).toHaveAttribute("aria-selected","false"),H(f).not.toHaveFocus(),H(l.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await R.tab(),v(t)}),await a("Navigate to the second tab and select it",async()=>{await R.keyboard(z),v(i)}),await a("Navigate to the second tab and select it",async()=>{await R.keyboard(z),v(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await R.keyboard(z),v(x),I(T)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await R.keyboard(z),v(t)}),await a("Navigate back to the last tab and select it",async()=>{await R.keyboard(_e),v(x)})}};var oe,le,re;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(re=(le=y.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var se,ie,de;K.parameters={...K.parameters,docs:{...(se=K.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(de=(ie=K.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,be,pe;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(be=W.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var he,ue,ge;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ge=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,Te,ve;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var fe,ye,xe;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(xe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};var Ie,Ce,we;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(we=(Ce=P.parameters)==null?void 0:Ce.docs)==null?void 0:we.source}}};var Se,ke,je;G.parameters={...G.parameters,docs:{...(Se=G.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(je=(ke=G.parameters)==null?void 0:ke.docs)==null?void 0:je.source}}};const En=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{W as CompactSpacing,y as Default,V as IconsOnly,G as KeyboardInteraction,P as OverflowType,K as Vertical,q as WithBadge,M as WithIcons,En as __namedExportsOrder,jn as default};
