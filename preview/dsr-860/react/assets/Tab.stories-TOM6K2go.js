import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as K,f as Fe}from"./keyboard-test.constants-By8W48aj.js";import{w as Be,u as B,e as _}from"./index-4rjIhT2C.js";import{r as c}from"./index-G8LIXM5I.js";import{f as _e}from"./testing.utils-BiEcdOD7.js";import{u as Ae}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-DkJhvK8e.js";import{D as Re}from"./Dropdown-Csevbhnq.js";import{D as He}from"./DropdownItem-CDrtBJ9h.js";import{I as Z}from"./Icon-DgLH6pPJ.js";import{I as ne}from"./IconButton-D7Ub3mhB.js";import{b as Ne,d as Le,A as ze,a as Oe}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const De=(s,t,l)=>{if(!Ke(s,t,l))return;const o=t.getBoundingClientRect(),i=s.getBoundingClientRect();if(l==="horizontal"){const e=t.scrollLeft+We(i,o);t.scrollTo({left:e,behavior:"smooth"})}else{const e=t.scrollTop+Me(i,o);t.scrollTo({top:e,behavior:"smooth"})}},Ke=(s,t,l)=>{if(t&&s){const o=t.getBoundingClientRect(),i=s.getBoundingClientRect(),e=i.left<o.left,m=i.right>o.right,x=i.top<o.top,u=i.bottom>o.bottom;return l==="horizontal"?e||m:x||u}return!1},We=(s,t)=>{const l=s.left<t.left,o=s.right>t.right;return l?s.left-t.left:o?s.right-t.right:0},Me=(s,t)=>{const l=s.top<t.top,o=s.bottom>t.bottom;return l?s.top-t.top:o?s.bottom-t.bottom:0},Ve="_tab_1m1zv_1",A={"tab-container":"_tab-container_1m1zv_1",tab:Ve,"tab-selected-indicator":"_tab-selected-indicator_1m1zv_43","tab-border-horizontal":"_tab-border-horizontal_1m1zv_64","tab-border-vertical":"_tab-border-vertical_1m1zv_76","tab-dropdown-button":"_tab-dropdown-button_1m1zv_85"},qe="_tabitem_1rgd2_1",X={tabitem:qe,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},je=c.forwardRef(({id:s,panelId:t,label:l,isSelected:o,showBadge:i,badgeCount:e,badgeContent:m="empty",badgeIcon:x,onClick:u,icon:C,badgeType:v="indicator",compactSpacing:R,direction:w,disabled:S,inverted:$,...N},F)=>{const E={count:e,content:m,icon:x,badgeType:v},U=e&&e>0&&m==="number",H=!S&&(i||U||m==="icon"&&x),r=c.useRef(null),[h,k]=c.useState(null),j=a=>{S?a.preventDefault():(u(a),k(d=>({...d,opacity:0})))},I=c.useCallback(a=>{r.current&&!o&&k(a==="mouseover"?d=>({...d,opacity:1}):d=>({...d,opacity:0}))},[o]),L=a=>{const d=w==="vertical",p=d&&a.key===Ne,f=d&&a.key===Le,T=!d&&a.key===ze,O=!d&&a.key===Oe,D=p||T;(D||(f||O))&&(a.preventDefault(),J(D?"next":"previous"))},J=a=>{var Q;const d=(Q=r.current)==null?void 0:Q.parentElement;if(!d)return;const p=Array.from(d.querySelectorAll(`.${X.tabitem}`)),f=p.findIndex(Ee=>Ee===document.activeElement);let T=z(f,p.length,a),O=0;const D=p.length;for(;p[T].getAttribute("data-disabled")==="true"&&O<D;)T=z(T,p.length,a),O++;p[T].focus(),p[T].click()},z=(a,d,p)=>p==="next"?(a+1)%d:(a-1+d)%d,b=c.useCallback(()=>{r.current&&!o&&k(w==="horizontal"?a=>{var d,p,f,T;return{...a,width:(d=r.current)==null?void 0:d.offsetWidth,left:((p=r.current)==null?void 0:p.offsetLeft)??0,top:(((f=r.current)==null?void 0:f.offsetTop)??0)+(((T=r.current)==null?void 0:T.offsetHeight)??0)}}:a=>{var d,p;return{...a,left:0,top:(d=r.current)==null?void 0:d.offsetTop,height:(p=r.current)==null?void 0:p.offsetHeight}})},[o,w]);return c.useEffect(()=>{var a;return b(),window.addEventListener("resize",b),(a=r.current)!=null&&a.parentElement&&r.current.parentElement.addEventListener("scroll",b),()=>{window.removeEventListener("resize",b),r.current&&r.current.parentElement&&r.current.parentElement.removeEventListener("scroll",b)}},[b]),c.useEffect(()=>{var a;r.current&&k(w==="horizontal"?{width:r.current.offsetWidth,left:r.current.offsetLeft-(((a=r.current.parentElement)==null?void 0:a.scrollLeft)??0),top:r.current.offsetTop+r.current.offsetHeight,opacity:0}:{left:0,top:r.current.offsetTop,height:r.current.offsetHeight,opacity:0})},[w]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:s,className:X.tabitem,role:"tab","aria-selected":o,"aria-controls":t,"aria-disabled":S,tabIndex:o?0:-1,"data-selected":o,"data-disabled":S,"data-direction":w,"data-inverted":$,onClick:j,"data-compact-spacing":R,ref:a=>{r.current=a,typeof F=="function"?F(a):F&&(F.current=a)},onKeyDown:L,onMouseEnter:()=>I("mouseover"),onMouseLeave:()=>I("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...N,children:[C&&n.jsx(Z,{name:C,appearance:o?"filled":"outlined"}),l&&n.jsx("span",{children:l}),H&&n.jsx(ke,{...E})]}),n.jsx("span",{"data-disabled":S,className:X["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});je.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=c.forwardRef(({options:s,onChange:t,direction:l="horizontal",alignment:o="start",selectedTabId:i,compactSpacing:e,overflowType:m="scrollable",inverted:x=!1},u)=>{const[C,v]=c.useState(!1),[R,w]=c.useState(!1),[S,$]=c.useState(!1),[N,F]=c.useState(!1),[E,U]=c.useState(!1),[ee,H]=c.useState(!1),r=c.useRef(null),{indicatorStyle:h}=Ae(r,i,l==="horizontal"?"bottom":"left"),j=l==="horizontal"&&(C||R)&&m==="dropdown",I=c.useCallback(()=>{if(r.current){const a=r.current.offsetWidth<r.current.scrollWidth||r.current.offsetHeight<r.current.scrollHeight,d=r.current.scrollLeft>0,p=r.current.scrollWidth-r.current.clientWidth-r.current.scrollLeft>0,f=r.current.scrollTop>0,T=r.current.scrollHeight-r.current.clientHeight-r.current.scrollTop>0;v(d),w(p),F(f),$(T),U(a)}},[r]);c.useEffect(()=>{var a;return I(),window.addEventListener("resize",I),(a=r.current)==null||a.addEventListener("scroll",I),()=>{var d;window.removeEventListener("resize",I),(d=r.current)==null||d.removeEventListener("scroll",I)}},[I]),c.useEffect(()=>{!i&&s.length>0&&t(s[0].id)},[i,s,t]);const L=a=>{const d=a.currentTarget,p=d.getAttribute("id")||"";t(p),H(!1);const f=r.current;f&&De(d,f,l)},J=()=>{if(r.current){const a=l==="horizontal"?{left:-300}:{top:-300};r.current.scrollBy({...a,behavior:"smooth"})}},z=()=>{if(r.current){const a=l==="horizontal"?{left:300}:{top:300};r.current.scrollBy({...a,behavior:"smooth"})}},b=s.find(a=>a.id===i);return n.jsxs("div",{className:A["tab-container"],"data-direction":l,children:[n.jsx("div",{className:A["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":E&&m==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[E&&!j&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:C||N?1:0,pointerEvents:C||N?"auto":"none"},onClick:J}),n.jsxs("div",{ref:a=>{r.current=a,typeof u=="function"?u(a):u&&(u.current=a)},role:"tablist","aria-label":"Sample Tabs",className:A.tab,"data-alignment":E?"start":o,"data-direction":l,"data-overflow-type":m,children:[n.jsx("div",{className:A["tab-selected-indicator"],style:{left:j?0:h.left,width:(h.width??0)+(j?32:0),top:h.top,height:h.height}}),j&&b&&n.jsx(Re,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>H(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:A["tab-dropdown-button"],onClick:()=>H(a=>!a),"aria-label":"Select tab","data-inverted":x,children:[b&&b.icon&&n.jsx(Z,{name:b.icon,appearance:"filled"}),b&&n.jsx("div",{style:{flexShrink:0},children:b==null?void 0:b.label}),b.badgeCount&&b.badgeCount>0&&b.badgeContent==="number"&&n.jsx(ke,{badgeType:b.badgeType,content:b.badgeContent,count:b.badgeCount}),n.jsx(Z,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ee,children:s.filter(a=>a.id!==i).map((a,d)=>n.jsx(He,{id:a.id,label:a.label,onClick:L,disabled:a.disabled,leftIcon:a.icon,badgeCount:a.badgeCount,badgeContent:a.badgeContent,badgeIcon:a.badgeIcon,badgeType:a.badgeType,showBadge:!0},`${a.id}-dropdown-${d}`))}),s.map((a,d)=>n.jsx(je,{onClick:L,isSelected:i===a.id,compactSpacing:e,direction:l,"data-hidden":j,inverted:x,...a},`${a.id}-${d}`))]}),E&&!j&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:R||S?1:0,pointerEvents:R||S?"auto":"none"},onClick:z})]}),n.jsx("div",{className:A["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":E&&m==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const xn={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable"},render:s=>{const[t,l]=c.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},W={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...s,direction:"vertical",options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},Y={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=c.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:t})=>{const l=Be(s);_e();const o=await l.getByRole("tab",{name:"First Tab"}),i=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),m=await l.getByRole("tab",{name:"Fourth Tab"}),x=await l.getByRole("tab",{name:"Fifth Tab"}),u=async v=>{_(v).toHaveAttribute("aria-selected","true"),_(v).toHaveFocus(),_(l.getByText(`Contenu onglet ${v.textContent}`)).toBeVisible()},C=async v=>{_(v).toHaveAttribute("aria-selected","false"),_(v).not.toHaveFocus(),_(l.getByText(`Contenu onglet ${v.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await B.tab(),u(o)}),await t("Navigate to the second tab and select it",async()=>{await B.keyboard(K),u(i)}),await t("Navigate to the second tab and select it",async()=>{await B.keyboard(K),u(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await B.keyboard(K),u(x),C(m)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await B.keyboard(K),u(o)}),await t("Navigate back to the last tab and select it",async()=>{await B.keyboard(Fe),u(x)})}};var ae,te,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    options: [],
    alignment: "start",
    overflowType: "scrollable"
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
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,re,se;W.parameters={...W.parameters,docs:{...(le=W.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(se=(re=W.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,de,ce;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=M.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,pe,he;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,ge,me;q.parameters={...q.parameters,docs:{...(ue=q.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(me=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var Te,ve,fe;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,xe,Ie;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ce,we,Se;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const In=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{M as CompactSpacing,y as Default,q as IconsOnly,Y as KeyboardInteraction,G as OverflowType,W as Vertical,P as WithBadge,V as WithIcons,In as __namedExportsOrder,xn as default};
