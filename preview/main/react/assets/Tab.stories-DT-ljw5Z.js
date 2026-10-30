import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as D,f as Be}from"./keyboard-test.constants-DC52cZHj.js";import{w as _e,u as _,e as A}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Ae}from"./testing.utils-DmLcTX3r.js";import{p as G}from"./animation-BebxwkA_.js";import{u as Re}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-BKSKdLzq.js";import{D as He}from"./Dropdown-CyecDUeK.js";import{D as Ne}from"./DropdownItem-DoVaQzxG.js";import{I as Z}from"./Icon-DBkoQNiA.js";import{I as ae}from"./IconButton-CJDki2nw.js";import{b as Le,d as Oe,A as De,a as ze}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ke=(r,a,l)=>{if(!We(r,a,l))return;const o=a.getBoundingClientRect(),d=r.getBoundingClientRect();if(l==="horizontal"){const e=a.scrollLeft+Me(d,o);a.scrollTo({left:e,behavior:G()?"auto":"smooth"})}else{const e=a.scrollTop+Ve(d,o);a.scrollTo({top:e,behavior:G()?"auto":"smooth"})}},We=(r,a,l)=>{if(a&&r){const o=a.getBoundingClientRect(),d=r.getBoundingClientRect(),e=d.left<o.left,m=d.right>o.right,y=d.top<o.top,T=d.bottom>o.bottom;return l==="horizontal"?e||m:y||T}return!1},Me=(r,a)=>{const l=r.left<a.left,o=r.right>a.right;return l?r.left-a.left:o?r.right-a.right:0},Ve=(r,a)=>{const l=r.top<a.top,o=r.bottom>a.bottom;return l?r.top-a.top:o?r.bottom-a.bottom:0},qe="_tab_1tjub_1",R={"tab-container":"_tab-container_1tjub_1",tab:qe,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Pe="_tabitem_1rgd2_1",X={tabitem:Pe,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ee=p.forwardRef(({id:r,panelId:a,label:l,isSelected:o,showBadge:d,badgeCount:e,badgeContent:m="empty",badgeIcon:y,onClick:T,icon:C,badgeType:u="indicator",compactSpacing:Y,direction:x,disabled:k,inverted:H,...$},E)=>{const U={count:e,content:m,icon:y,badgeType:u},F=e&&e>0&&m==="number",J=!k&&(d||F||m==="icon"&&y),b=p.useRef(null),[i,v]=p.useState(null),ne=s=>{k?s.preventDefault():(T(s),v(t=>({...t,opacity:0})))},w=p.useCallback(s=>{b.current&&!o&&v(s==="mouseover"?t=>({...t,opacity:1}):t=>({...t,opacity:0}))},[o]),S=s=>{const t=x==="vertical",c=t&&s.key===Le,I=t&&s.key===Oe,h=!t&&s.key===De,B=!t&&s.key===ze,O=c||h;(O||(I||B))&&(s.preventDefault(),N(O?"next":"previous"))},N=s=>{var Q;const t=(Q=b.current)==null?void 0:Q.parentElement;if(!t)return;const c=Array.from(t.querySelectorAll(`.${X.tabitem}`)),I=c.findIndex(Fe=>Fe===document.activeElement);let h=L(I,c.length,s),B=0;const O=c.length;for(;c[h].getAttribute("data-disabled")==="true"&&B<O;)h=L(h,c.length,s),B++;c[h].focus(),c[h].click()},L=(s,t,c)=>c==="next"?(s+1)%t:(s-1+t)%t,j=p.useCallback(()=>{b.current&&!o&&v(x==="horizontal"?s=>{var t,c,I,h;return{...s,width:(t=b.current)==null?void 0:t.offsetWidth,left:((c=b.current)==null?void 0:c.offsetLeft)??0,top:(((I=b.current)==null?void 0:I.offsetTop)??0)+(((h=b.current)==null?void 0:h.offsetHeight)??0)}}:s=>{var t,c;return{...s,left:0,top:(t=b.current)==null?void 0:t.offsetTop,height:(c=b.current)==null?void 0:c.offsetHeight}})},[o,x]);return p.useEffect(()=>{var s;return j(),window.addEventListener("resize",j),(s=b.current)!=null&&s.parentElement&&b.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",j)}},[j]),p.useEffect(()=>{var s;b.current&&v(x==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((s=b.current.parentElement)==null?void 0:s.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[x]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:r,className:X.tabitem,role:"tab","aria-selected":o,"aria-controls":a,"aria-disabled":k,tabIndex:o?0:-1,"data-selected":o,"data-disabled":k,"data-direction":x,"data-inverted":H,onClick:ne,"data-compact-spacing":Y,ref:s=>{b.current=s,typeof E=="function"?E(s):E&&(E.current=s)},onKeyDown:S,onMouseEnter:()=>w("mouseover"),onMouseLeave:()=>w("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...$,children:[C&&n.jsx(Z,{name:C,appearance:o?"filled":"outlined"}),l&&n.jsx("span",{children:l}),J&&n.jsx(ke,{...U})]}),n.jsx("span",{"data-disabled":k,className:X["segment-hover-indicator"],style:{width:i==null?void 0:i.width,height:i==null?void 0:i.height,left:i==null?void 0:i.left,top:i==null?void 0:i.top,opacity:i==null?void 0:i.opacity}})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=p.forwardRef(({options:r,onChange:a,direction:l="horizontal",alignment:o="start",selectedTabId:d,compactSpacing:e,overflowType:m="scrollable",inverted:y=!1,...T},C)=>{const[u,Y]=p.useState(!1),[x,k]=p.useState(!1),[H,$]=p.useState(!1),[E,U]=p.useState(!1),[F,ee]=p.useState(!1),[J,b]=p.useState(!1),i=p.useRef(null),{indicatorStyle:v}=Re(i,d,l==="horizontal"?"bottom":"left"),w=l==="horizontal"&&(u||x)&&m==="dropdown",S=p.useCallback(()=>{if(i.current){const t=i.current.offsetWidth<i.current.scrollWidth||i.current.offsetHeight<i.current.scrollHeight,c=i.current.scrollLeft>0,I=i.current.scrollWidth-i.current.clientWidth-i.current.scrollLeft>0,h=i.current.scrollTop>0,B=i.current.scrollHeight-i.current.clientHeight-i.current.scrollTop>0;Y(c),k(I),U(h),$(B),ee(t)}},[i]);p.useEffect(()=>{var t;return S(),window.addEventListener("resize",S),(t=i.current)==null||t.addEventListener("scroll",S),()=>{var c;window.removeEventListener("resize",S),(c=i.current)==null||c.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{!d&&r.length>0&&a(r[0].id)},[d,r,a]);const N=t=>{const c=t.currentTarget,I=c.getAttribute("id")||"";a(I),b(!1);const h=i.current;h&&Ke(c,h,l)},L=()=>{if(i.current){const t=l==="horizontal"?{left:-300}:{top:-300};i.current.scrollBy({...t,behavior:G()?"auto":"smooth"})}},j=()=>{if(i.current){const t=l==="horizontal"?{left:300}:{top:300};i.current.scrollBy({...t,behavior:G()?"auto":"smooth"})}},s=r.find(t=>t.id===d);return n.jsxs("div",{className:R["tab-container"],"data-direction":l,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[F&&!w&&n.jsx(ae,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:u||E?1:0,pointerEvents:u||E?"auto":"none"},onClick:L}),n.jsxs("div",{ref:t=>{i.current=t,typeof C=="function"?C(t):C&&(C.current=t)},role:"tablist",className:R.tab,"data-alignment":F?"start":o,"data-direction":l,"aria-orientation":l,"data-overflow-type":m,...T,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:w?0:v.left,width:(v.width??0)+(w?32:0),top:v.top,height:v.height}}),w&&s&&n.jsx(He,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>b(t=>!t),"aria-label":"Select tab","data-inverted":y,children:[s&&s.icon&&n.jsx(Z,{name:s.icon,appearance:"filled"}),s&&n.jsx("div",{style:{flexShrink:0},children:s==null?void 0:s.label}),s.badgeCount&&s.badgeCount>0&&s.badgeContent==="number"&&n.jsx(ke,{badgeType:s.badgeType,content:s.badgeContent,count:s.badgeCount}),n.jsx(Z,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:J,children:r.filter(t=>t.id!==d).map((t,c)=>n.jsx(Ne,{id:t.id,label:t.label,onClick:N,disabled:t.disabled,leftIcon:t.icon,badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeIcon:t.badgeIcon,badgeType:t.badgeType,showBadge:!0},`${t.id}-dropdown-${c}`))}),r.map((t,c)=>n.jsx(Ee,{onClick:N,isSelected:d===t.id,compactSpacing:e,direction:l,"data-hidden":w,inverted:y,...t},`${t.id}-${c}`))]}),F&&!w&&n.jsx(ae,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:x||H?1:0,pointerEvents:x||H?"auto":"none"},onClick:j})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&m==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const wn={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},f={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:r=>{const[a,l]=p.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},z={args:{...f.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:r=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},K={args:{...f.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:r=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...r,direction:"vertical",options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},W={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},V={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},P={tags:["!autodocs"],args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:r=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...r,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:r,step:a})=>{const l=_e(r);Ae();const o=await l.getByRole("tab",{name:"First Tab"}),d=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),m=await l.getByRole("tab",{name:"Fourth Tab"}),y=await l.getByRole("tab",{name:"Fifth Tab"}),T=async u=>{A(u).toHaveAttribute("aria-selected","true"),A(u).toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).toBeVisible()},C=async u=>{A(u).toHaveAttribute("aria-selected","false"),A(u).not.toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await _.tab(),T(o)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(D),T(d)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(D),T(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await _.keyboard(D),T(y),C(m)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await _.keyboard(D),T(o)}),await a("Navigate back to the last tab and select it",async()=>{await _.keyboard(Be),T(y)})}};var te,oe,le;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var re,se,ie;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,ce,be;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(be=(ce=K.parameters)==null?void 0:ce.docs)==null?void 0:be.source}}};var pe,he,ue;W.parameters={...W.parameters,docs:{...(pe=W.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ue=(he=W.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,me,Te;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Te=(me=M.parameters)==null?void 0:me.docs)==null?void 0:Te.source}}};var ve,fe,ye;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(ye=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,Ie,Ce;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var we,Se,je;P.parameters={...P.parameters,docs:{...(we=P.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(je=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const Sn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{K as CompactSpacing,f as Default,M as IconsOnly,P as KeyboardInteraction,q as OverflowType,z as Vertical,V as WithBadge,W as WithIcons,Sn as __namedExportsOrder,wn as default};
