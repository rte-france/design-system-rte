import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as O,f as Be}from"./keyboard-test.constants-By8W48aj.js";import{w as _e,u as F,e as R}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Fe}from"./testing.utils-mIZIUNbM.js";import{u as Re}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-DkJhvK8e.js";import{D as He}from"./Dropdown-CrlT1iUY.js";import{D as Ne}from"./DropdownItem-BFBkltHG.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as ne}from"./IconButton-D7Ub3mhB.js";import{b as Le,d as ze,A as Ae,a as Oe}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const De=(s,a,o)=>{if(!Ke(s,a,o))return;const l=a.getBoundingClientRect(),r=s.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+We(r,l);a.scrollTo({left:e,behavior:"smooth"})}else{const e=a.scrollTop+Me(r,l);a.scrollTo({top:e,behavior:"smooth"})}},Ke=(s,a,o)=>{if(a&&s){const l=a.getBoundingClientRect(),r=s.getBoundingClientRect(),e=r.left<l.left,m=r.right>l.right,x=r.top<l.top,T=r.bottom>l.bottom;return o==="horizontal"?e||m:x||T}return!1},We=(s,a)=>{const o=s.left<a.left,l=s.right>a.right;return o?s.left-a.left:l?s.right-a.right:0},Me=(s,a)=>{const o=s.top<a.top,l=s.bottom>a.bottom;return o?s.top-a.top:l?s.bottom-a.bottom:0},Ve="_tab_1m1zv_1",H={"tab-container":"_tab-container_1m1zv_1",tab:Ve,"tab-selected-indicator":"_tab-selected-indicator_1m1zv_43","tab-border-horizontal":"_tab-border-horizontal_1m1zv_64","tab-border-vertical":"_tab-border-vertical_1m1zv_76","tab-dropdown-button":"_tab-dropdown-button_1m1zv_85"},qe="_tabitem_1rgd2_1",Q={tabitem:qe,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},je=p.forwardRef(({id:s,panelId:a,label:o,isSelected:l,showBadge:r,badgeCount:e,badgeContent:m="empty",badgeIcon:x,onClick:T,icon:C,badgeType:u="indicator",compactSpacing:G,direction:y,disabled:j,inverted:N,...Y},E)=>{const $={count:e,content:m,icon:x,badgeType:u},B=e&&e>0&&m==="number",U=!j&&(r||B||m==="icon"&&x),b=p.useRef(null),[d,f]=p.useState(null),ee=i=>{j?i.preventDefault():(T(i),f(t=>({...t,opacity:0})))},w=p.useCallback(i=>{b.current&&!l&&f(i==="mouseover"?t=>({...t,opacity:1}):t=>({...t,opacity:0}))},[l]),S=i=>{const t=y==="vertical",c=t&&i.key===Le,I=t&&i.key===ze,h=!t&&i.key===Ae,_=!t&&i.key===Oe,A=c||h;(A||(I||_))&&(i.preventDefault(),L(A?"next":"previous"))},L=i=>{var J;const t=(J=b.current)==null?void 0:J.parentElement;if(!t)return;const c=Array.from(t.querySelectorAll(`.${Q.tabitem}`)),I=c.findIndex(Ee=>Ee===document.activeElement);let h=z(I,c.length,i),_=0;const A=c.length;for(;c[h].getAttribute("data-disabled")==="true"&&_<A;)h=z(h,c.length,i),_++;c[h].focus(),c[h].click()},z=(i,t,c)=>c==="next"?(i+1)%t:(i-1+t)%t,k=p.useCallback(()=>{b.current&&!l&&f(y==="horizontal"?i=>{var t,c,I,h;return{...i,width:(t=b.current)==null?void 0:t.offsetWidth,left:((c=b.current)==null?void 0:c.offsetLeft)??0,top:(((I=b.current)==null?void 0:I.offsetTop)??0)+(((h=b.current)==null?void 0:h.offsetHeight)??0)}}:i=>{var t,c;return{...i,left:0,top:(t=b.current)==null?void 0:t.offsetTop,height:(c=b.current)==null?void 0:c.offsetHeight}})},[l,y]);return p.useEffect(()=>{var i;return k(),window.addEventListener("resize",k),(i=b.current)!=null&&i.parentElement&&b.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),b.current&&b.current.parentElement&&b.current.parentElement.removeEventListener("scroll",k)}},[k]),p.useEffect(()=>{var i;b.current&&f(y==="horizontal"?{width:b.current.offsetWidth,left:b.current.offsetLeft-(((i=b.current.parentElement)==null?void 0:i.scrollLeft)??0),top:b.current.offsetTop+b.current.offsetHeight,opacity:0}:{left:0,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})},[y]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:s,className:Q.tabitem,role:"tab","aria-selected":l,"aria-controls":a,"aria-disabled":j,tabIndex:l?0:-1,"data-selected":l,"data-disabled":j,"data-direction":y,"data-inverted":N,onClick:ee,"data-compact-spacing":G,ref:i=>{b.current=i,typeof E=="function"?E(i):E&&(E.current=i)},onKeyDown:S,onMouseEnter:()=>w("mouseover"),onMouseLeave:()=>w("mouseleave"),...l&&{"data-testid":"tabitem-selected"},...Y,children:[C&&n.jsx(X,{name:C,appearance:l?"filled":"outlined"}),o&&n.jsx("span",{children:o}),U&&n.jsx(ke,{...$})]}),n.jsx("span",{"data-disabled":j,className:Q["segment-hover-indicator"],style:{width:d==null?void 0:d.width,height:d==null?void 0:d.height,left:d==null?void 0:d.left,top:d==null?void 0:d.top,opacity:d==null?void 0:d.opacity}})]})});je.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=p.forwardRef(({options:s,onChange:a,direction:o="horizontal",alignment:l="start",selectedTabId:r,compactSpacing:e,overflowType:m="scrollable",inverted:x=!1,...T},C)=>{const[u,G]=p.useState(!1),[y,j]=p.useState(!1),[N,Y]=p.useState(!1),[E,$]=p.useState(!1),[B,Z]=p.useState(!1),[U,b]=p.useState(!1),d=p.useRef(null),{indicatorStyle:f}=Re(d,r,o==="horizontal"?"bottom":"left"),w=o==="horizontal"&&(u||y)&&m==="dropdown",S=p.useCallback(()=>{if(d.current){const t=d.current.offsetWidth<d.current.scrollWidth||d.current.offsetHeight<d.current.scrollHeight,c=d.current.scrollLeft>0,I=d.current.scrollWidth-d.current.clientWidth-d.current.scrollLeft>0,h=d.current.scrollTop>0,_=d.current.scrollHeight-d.current.clientHeight-d.current.scrollTop>0;G(c),j(I),$(h),Y(_),Z(t)}},[d]);p.useEffect(()=>{var t;return S(),window.addEventListener("resize",S),(t=d.current)==null||t.addEventListener("scroll",S),()=>{var c;window.removeEventListener("resize",S),(c=d.current)==null||c.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{!r&&s.length>0&&a(s[0].id)},[r,s,a]);const L=t=>{const c=t.currentTarget,I=c.getAttribute("id")||"";a(I),b(!1);const h=d.current;h&&De(c,h,o)},z=()=>{if(d.current){const t=o==="horizontal"?{left:-300}:{top:-300};d.current.scrollBy({...t,behavior:"smooth"})}},k=()=>{if(d.current){const t=o==="horizontal"?{left:300}:{top:300};d.current.scrollBy({...t,behavior:"smooth"})}},i=s.find(t=>t.id===r);return n.jsxs("div",{className:H["tab-container"],"data-direction":o,children:[n.jsx("div",{className:H["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":B&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[B&&!w&&n.jsx(ne,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:u||E?1:0,pointerEvents:u||E?"auto":"none"},onClick:z}),n.jsxs("div",{ref:t=>{d.current=t,typeof C=="function"?C(t):C&&(C.current=t)},role:"tablist",className:H.tab,"data-alignment":B?"start":l,"data-direction":o,"data-overflow-type":m,...T,children:[n.jsx("div",{className:H["tab-selected-indicator"],style:{left:w?0:f.left,width:(f.width??0)+(w?32:0),top:f.top,height:f.height}}),w&&i&&n.jsx(He,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>b(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:H["tab-dropdown-button"],onClick:()=>b(t=>!t),"aria-label":"Select tab","data-inverted":x,children:[i&&i.icon&&n.jsx(X,{name:i.icon,appearance:"filled"}),i&&n.jsx("div",{style:{flexShrink:0},children:i==null?void 0:i.label}),i.badgeCount&&i.badgeCount>0&&i.badgeContent==="number"&&n.jsx(ke,{badgeType:i.badgeType,content:i.badgeContent,count:i.badgeCount}),n.jsx(X,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:U,children:s.filter(t=>t.id!==r).map((t,c)=>n.jsx(Ne,{id:t.id,label:t.label,onClick:L,disabled:t.disabled,leftIcon:t.icon,badgeCount:t.badgeCount,badgeContent:t.badgeContent,badgeIcon:t.badgeIcon,badgeType:t.badgeType,showBadge:!0},`${t.id}-dropdown-${c}`))}),s.map((t,c)=>n.jsx(je,{onClick:L,isSelected:r===t.id,compactSpacing:e,direction:o,"data-hidden":w,inverted:x,...t},`${t.id}-${c}`))]}),B&&!w&&n.jsx(ne,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:y||N?1:0,pointerEvents:y||N?"auto":"none"},onClick:k})]}),n.jsx("div",{className:H["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":B&&m==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const yn={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},v={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:s=>{const[a,o]=p.useState("tab-2"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],r=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Normal"}),n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)",fontFamily:"Arial"},children:"Inverted"}),n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},D={args:{...v.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[a,o]=p.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],r=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},K={args:{...v.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[a,o]=p.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],r=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...s,direction:"vertical",options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},W={args:{...v.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,o]=p.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],r=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...v.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,o]=p.useState("home"),l=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],r=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},V={args:{...v.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,o]=p.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],r=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...v.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,o]=p.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],r=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},P={tags:["!autodocs"],args:{...v.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[a,o]=p.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],r=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...s,options:l,selectedTabId:a,onChange:r}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:a})=>{const o=_e(s);Fe(s);const l=await o.getByRole("tab",{name:"First Tab"}),r=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),m=await o.getByRole("tab",{name:"Fourth Tab"}),x=await o.getByRole("tab",{name:"Fifth Tab"}),T=async u=>{R(u).toHaveAttribute("aria-selected","true"),R(u).toHaveFocus(),R(o.getByText(`Contenu onglet ${u.textContent}`)).toBeVisible()},C=async u=>{R(u).toHaveAttribute("aria-selected","false"),R(u).not.toHaveFocus(),R(o.getByText(`Contenu onglet ${u.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await F.tab(),T(l)}),await a("Navigate to the second tab and select it",async()=>{await F.keyboard(O),T(r)}),await a("Navigate to the second tab and select it",async()=>{await F.keyboard(O),T(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await F.keyboard(O),T(x),C(m)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await F.keyboard(O),T(l)}),await a("Navigate back to the last tab and select it",async()=>{await F.keyboard(Be),T(x)})}};var ae,te,le;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
          padding: "16px"
        }}>
            <span style={{
            fontFamily: "Arial"
          }}>Normal</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          </div>
          <div style={{
          backgroundColor: "var(--background-inverse)",
          marginTop: "16px",
          padding: "10px"
        }}>
            <span style={{
            color: "var(--content-primary-inverse)",
            fontFamily: "Arial"
          }}>Inverted</span>
            <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} inverted={true} />
          </div>
        </div>
        <div style={{
        height: "100px",
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "64px"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </>;
  }
}`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,se,ie;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        width: "100%",
        border: "1px solid #ccc",
        padding: "8px"
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
}`,...(ie=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,re,ce;K.parameters={...K.parameters,docs:{...(de=K.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
        display: "flex",
        gap: "16px",
        height: "200px"
      }}>
          <Tab {...args} direction="vertical" options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} />
          <div style={{
          width: "100%",
          border: "1px solid #ccc",
          padding: "8px"
        }}>
            {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
                Contenu onglet {tab.label}
              </div>)}
          </div>
        </div>
      </div>;
  }
}`,...(ce=(re=K.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var be,pe,he;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "16px"
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
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "16px"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.id}
            </div>)}
        </div>
      </>;
  }
}`,...(me=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Te,fe,ve;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
        border: "1px solid #ccc",
        padding: "8px",
        marginTop: "16px"
      }}>
          {tabs.map(tab => <div key={tab.id} role="tabpanel" id={tab.panelId} aria-labelledby={tab.id} hidden={selectedTab !== tab.id}>
              Contenu onglet {tab.label}
            </div>)}
        </div>
      </>;
  }
}`,...(ve=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,ye,Ie;q.parameters={...q.parameters,docs:{...(xe=q.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
      gap: "32px"
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
}`,...(Ie=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Ce,we,Se;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
    focusElementBeforeComponent(canvasElement);
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
}`,...(Se=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const In=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{K as CompactSpacing,v as Default,M as IconsOnly,P as KeyboardInteraction,q as OverflowType,D as Vertical,V as WithBadge,W as WithIcons,In as __namedExportsOrder,yn as default};
