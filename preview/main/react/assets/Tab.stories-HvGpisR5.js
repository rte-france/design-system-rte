import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as O,f as Fe}from"./keyboard-test.constants-By8W48aj.js";import{w as Be,u as _,e as A}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as _e}from"./testing.utils-BiEcdOD7.js";import{u as Ae}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-DkJhvK8e.js";import{D as Re}from"./Dropdown-CQIC5Z84.js";import{D as He}from"./DropdownItem-Cbt0nETo.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as ne}from"./IconButton-D7Ub3mhB.js";import{b as Ne,d as Le,A as ze,a as Oe}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const De=(s,a,l)=>{if(!Ke(s,a,l))return;const o=a.getBoundingClientRect(),d=s.getBoundingClientRect();if(l==="horizontal"){const e=a.scrollLeft+We(d,o);a.scrollTo({left:e,behavior:"smooth"})}else{const e=a.scrollTop+Me(d,o);a.scrollTo({top:e,behavior:"smooth"})}},Ke=(s,a,l)=>{if(a&&s){const o=a.getBoundingClientRect(),d=s.getBoundingClientRect(),e=d.left<o.left,m=d.right>o.right,y=d.top<o.top,T=d.bottom>o.bottom;return l==="horizontal"?e||m:y||T}return!1},We=(s,a)=>{const l=s.left<a.left,o=s.right>a.right;return l?s.left-a.left:o?s.right-a.right:0},Me=(s,a)=>{const l=s.top<a.top,o=s.bottom>a.bottom;return l?s.top-a.top:o?s.bottom-a.bottom:0},Ve="_tab_1m1zv_1",R={"tab-container":"_tab-container_1m1zv_1",tab:Ve,"tab-selected-indicator":"_tab-selected-indicator_1m1zv_43","tab-border-horizontal":"_tab-border-horizontal_1m1zv_64","tab-border-vertical":"_tab-border-vertical_1m1zv_76","tab-dropdown-button":"_tab-dropdown-button_1m1zv_85"},qe="_tabitem_1rgd2_1",Q={tabitem:qe,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},je=p.forwardRef(({id:s,panelId:a,label:l,isSelected:o,showBadge:d,badgeCount:e,badgeContent:m="empty",badgeIcon:y,onClick:T,icon:C,badgeType:u="indicator",compactSpacing:G,direction:x,disabled:j,inverted:H,...Y},E)=>{const $={count:e,content:m,icon:y,badgeType:u},F=e&&e>0&&m==="number",U=!j&&(d||F||m==="icon"&&y),b=p.useRef(null),[i,v]=p.useState(null),ee=r=>{j?r.preventDefault():(T(r),v(t=>({...t,opacity:0})))},w=p.useCallback(r=>{b.current&&!o&&v(r==="mouseover"?t=>({...t,opacity:1}):t=>({...t,opacity:0}))},[o]),S=r=>{const t=x==="vertical",c=t&&r.key===Ne,I=t&&r.key===Le,h=!t&&r.key===ze,B=!t&&r.key===Oe,z=c||h;(z||(I||B))&&(r.preventDefault(),N(z?"next":"previous"))},N=r=>{var J;const t=(J=b.current)==null?void 0:J.parentElement;if(!t)return;const c=Array.from(t.querySelectorAll(`.${Q.tabitem}`)),I=c.findIndex(Ee=>Ee===document.activeElement);let h=L(I,c.length,r),B=0;const z=c.length;for(;c[h].getAttribute("data-disabled")==="true"&&B<z;)h=L(h,c.length,r),B++;c[h].focus(),c[h].click()},L=(r,t,c)=>c==="next"?(r+1)%t:(r-1+t)%t,k=p.useCallback(()=>{b.current&&!o&&v(x==="horizontal"?r=>{var t,c,I,h;return{...r,width:(t=b.current)==null?void 0:t.offsetWidth,left:((c=b.current)==null?void 0:c.offsetLeft)??0,top:(((I=b.current)==null?void 0:I.offsetTop)??0)+(((h=b.current)==null?void 0:h.offsetHeight)??0)}}:r=>{var t,c;return{...r,left:0,top:(t=b.current)==null?void 0:t.offsetTop,height:(c=b.current)==null?void 0:c.offsetHeight}})},[o,x]);return p.useEffect(()=>{var r;return k(),window.addEventListener("resize",k),(r=b.current)!=null&&r.parentElement&&b.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",k)}},[k]),p.useEffect(()=>{var r;b.current&&v(x==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((r=b.current.parentElement)==null?void 0:r.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[x]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:s,className:Q.tabitem,role:"tab","aria-selected":o,"aria-controls":a,"aria-disabled":j,tabIndex:o?0:-1,"data-selected":o,"data-disabled":j,"data-direction":x,"data-inverted":H,onClick:ee,"data-compact-spacing":G,ref:r=>{b.current=r,typeof E=="function"?E(r):E&&(E.current=r)},onKeyDown:S,onMouseEnter:()=>w("mouseover"),onMouseLeave:()=>w("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...Y,children:[C&&n.jsx(X,{name:C,appearance:o?"filled":"outlined"}),l&&n.jsx("span",{children:l}),U&&n.jsx(ke,{...$})]}),n.jsx("span",{"data-disabled":j,className:Q["segment-hover-indicator"],style:{width:i==null?void 0:i.width,height:i==null?void 0:i.height,left:i==null?void 0:i.left,top:i==null?void 0:i.top,opacity:i==null?void 0:i.opacity}})]})});je.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=p.forwardRef(({options:s,onChange:a,direction:l="horizontal",alignment:o="start",selectedTabId:d,compactSpacing:e,overflowType:m="scrollable",inverted:y=!1,...T},C)=>{const[u,G]=p.useState(!1),[x,j]=p.useState(!1),[H,Y]=p.useState(!1),[E,$]=p.useState(!1),[F,Z]=p.useState(!1),[U,b]=p.useState(!1),i=p.useRef(null),{indicatorStyle:v}=Ae(i,d,l==="horizontal"?"bottom":"left"),w=l==="horizontal"&&(u||x)&&m==="dropdown",S=p.useCallback(()=>{if(i.current){const t=i.current.offsetWidth<i.current.scrollWidth||i.current.offsetHeight<i.current.scrollHeight,c=i.current.scrollLeft>0,I=i.current.scrollWidth-i.current.clientWidth-i.current.scrollLeft>0,h=i.current.scrollTop>0,B=i.current.scrollHeight-i.current.clientHeight-i.current.scrollTop>0;G(c),j(I),$(h),Y(B),Z(t)}},[i]);p.useEffect(()=>{var t;return S(),window.addEventListener("resize",S),(t=i.current)==null||t.addEventListener("scroll",S),()=>{var c;window.removeEventListener("resize",S),(c=i.current)==null||c.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{!d&&s.length>0&&a(s[0].id)},[d,s,a]);const N=t=>{const c=t.currentTarget,I=c.getAttribute("id")||"";a(I),b(!1);const h=i.current;h&&De(c,h,l)},L=()=>{if(i.current){const t=l==="horizontal"?{left:-300}:{top:-300};i.current.scrollBy({...t,behavior:"smooth"})}},k=()=>{if(i.current){const t=l==="horizontal"?{left:300}:{top:300};i.current.scrollBy({...t,behavior:"smooth"})}},r=s.find(t=>t.id===d);return n.jsxs("div",{className:R["tab-container"],"data-direction":l,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[F&&!w&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:u||E?1:0,pointerEvents:u||E?"auto":"none"},onClick:L}),n.jsxs("div",{ref:t=>{i.current=t,typeof C=="function"?C(t):C&&(C.current=t)},role:"tablist",className:R.tab,"data-alignment":F?"start":o,"data-direction":l,"data-overflow-type":m,...T,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:w?0:v.left,width:(v.width??0)+(w?32:0),top:v.top,height:v.height}}),w&&r&&n.jsx(Re,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>b(t=>!t),"aria-label":"Select tab","data-inverted":y,children:[r&&r.icon&&n.jsx(X,{name:r.icon,appearance:"filled"}),r&&n.jsx("div",{style:{flexShrink:0},children:r==null?void 0:r.label}),r.badgeCount&&r.badgeCount>0&&r.badgeContent==="number"&&n.jsx(ke,{badgeType:r.badgeType,content:r.badgeContent,count:r.badgeCount}),n.jsx(X,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:U,children:s.filter(t=>t.id!==d).map((t,c)=>n.jsx(He,{id:t.id,label:t.label,onClick:N,disabled:t.disabled,leftIcon:t.icon,badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeIcon:t.badgeIcon,badgeType:t.badgeType,showBadge:!0},`${t.id}-dropdown-${c}`))}),s.map((t,c)=>n.jsx(je,{onClick:N,isSelected:d===t.id,compactSpacing:e,direction:l,"data-hidden":w,inverted:y,...t},`${t.id}-${c}`))]}),F&&!w&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:x||H?1:0,pointerEvents:x||H?"auto":"none"},onClick:k})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&m==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const xn={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},f={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:s=>{const[a,l]=p.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},D={args:{...f.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},K={args:{...f.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...s,direction:"vertical",options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},W={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,l]=p.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},V={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],d=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},P={tags:["!autodocs"],args:{...f.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],d=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...s,options:o,selectedTabId:a,onChange:d}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:a})=>{const l=Be(s);_e();const o=await l.getByRole("tab",{name:"First Tab"}),d=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),m=await l.getByRole("tab",{name:"Fourth Tab"}),y=await l.getByRole("tab",{name:"Fifth Tab"}),T=async u=>{A(u).toHaveAttribute("aria-selected","true"),A(u).toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).toBeVisible()},C=async u=>{A(u).toHaveAttribute("aria-selected","false"),A(u).not.toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await _.tab(),T(o)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(O),T(d)}),await a("Navigate to the second tab and select it",async()=>{await _.keyboard(O),T(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await _.keyboard(O),T(y),C(m)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await _.keyboard(O),T(o)}),await a("Navigate back to the last tab and select it",async()=>{await _.keyboard(Fe),T(y)})}};var ae,te,oe;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=f.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,se,re;D.parameters={...D.parameters,docs:{...(le=D.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(se=D.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,de,ce;K.parameters={...K.parameters,docs:{...(ie=K.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,pe,he;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,ge,me;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Te,ve,fe;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,xe,Ie;q.parameters={...q.parameters,docs:{...(ye=q.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=q.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ce,we,Se;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const In=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{K as CompactSpacing,f as Default,M as IconsOnly,P as KeyboardInteraction,q as OverflowType,D as Vertical,V as WithBadge,W as WithIcons,In as __namedExportsOrder,xn as default};
