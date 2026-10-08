import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as D,f as Fe}from"./keyboard-test.constants-By8W48aj.js";import{w as Be,u as R,e as A}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as _e}from"./testing.utils-DmLcTX3r.js";import{u as Re}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-DUkuUEsZ.js";import{D as Ae}from"./Dropdown-CyecDUeK.js";import{D as He}from"./DropdownItem-Bpn9aS_d.js";import{I as Q}from"./Icon-DBkoQNiA.js";import{I as ne}from"./IconButton-CwXUjHKp.js";import{b as Ne,d as Le,A as Oe,a as ze}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-CMrM2eNu.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";const De=1,Ke=(s,t,l=De)=>{const o=s.scrollWidth-s.clientWidth,i=s.scrollHeight-s.clientHeight;return o>l||i>l?!0:o<=0&&i<=0?!1:t},We=(s,t,l)=>{if(!Me(s,t,l))return;const o=t.getBoundingClientRect(),i=s.getBoundingClientRect();if(l==="horizontal"){const e=t.scrollLeft+Ve(i,o);t.scrollTo({left:e,behavior:"smooth"})}else{const e=t.scrollTop+qe(i,o);t.scrollTo({top:e,behavior:"smooth"})}},Me=(s,t,l)=>{if(t&&s){const o=t.getBoundingClientRect(),i=s.getBoundingClientRect(),e=i.left<o.left,T=i.right>o.right,x=i.top<o.top,v=i.bottom>o.bottom;return l==="horizontal"?e||T:x||v}return!1},Ve=(s,t)=>{const l=s.left<t.left,o=s.right>t.right;return l?s.left-t.left:o?s.right-t.right:0},qe=(s,t)=>{const l=s.top<t.top,o=s.bottom>t.bottom;return l?s.top-t.top:o?s.bottom-t.bottom:0},Pe="_tab_1m1zv_1",H={"tab-container":"_tab-container_1m1zv_1",tab:Pe,"tab-selected-indicator":"_tab-selected-indicator_1m1zv_43","tab-border-horizontal":"_tab-border-horizontal_1m1zv_64","tab-border-vertical":"_tab-border-vertical_1m1zv_76","tab-dropdown-button":"_tab-dropdown-button_1m1zv_85"},Ge="_tabitem_1rgd2_1",J={tabitem:Ge,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},je=p.forwardRef(({id:s,panelId:t,label:l,isSelected:o,showBadge:i,badgeCount:e,badgeContent:T="empty",badgeIcon:x,onClick:v,icon:C,badgeType:u="indicator",compactSpacing:Y,direction:I,disabled:j,inverted:L,...$},E)=>{const U={count:e,content:T,icon:x,badgeType:u},F=e&&e>0&&T==="number",X=!j&&(i||F||T==="icon"&&x),c=p.useRef(null),[b,f]=p.useState(null),ee=r=>{j?r.preventDefault():(v(r),f(a=>({...a,opacity:0})))},w=p.useCallback(r=>{c.current&&!o&&f(r==="mouseover"?a=>({...a,opacity:1}):a=>({...a,opacity:0}))},[o]),S=r=>{const a=I==="vertical",d=a&&r.key===Ne,g=a&&r.key===Le,h=!a&&r.key===Oe,B=!a&&r.key===ze,_=d||h;(_||(g||B))&&(r.preventDefault(),O(_?"next":"previous"))},O=r=>{var N;const a=(N=c.current)==null?void 0:N.parentElement;if(!a)return;const d=Array.from(a.querySelectorAll(`.${J.tabitem}`)),g=d.findIndex(Ee=>Ee===document.activeElement);let h=z(g,d.length,r),B=0;const _=d.length;for(;d[h].getAttribute("data-disabled")==="true"&&B<_;)h=z(h,d.length,r),B++;d[h].focus(),d[h].click()},z=(r,a,d)=>d==="next"?(r+1)%a:(r-1+a)%a,k=p.useCallback(()=>{c.current&&!o&&f(I==="horizontal"?r=>{var a,d,g,h;return{...r,width:(a=c.current)==null?void 0:a.offsetWidth,left:((d=c.current)==null?void 0:d.offsetLeft)??0,top:(((g=c.current)==null?void 0:g.offsetTop)??0)+(((h=c.current)==null?void 0:h.offsetHeight)??0)}}:r=>{var a,d;return{...r,left:0,top:(a=c.current)==null?void 0:a.offsetTop,height:(d=c.current)==null?void 0:d.offsetHeight}})},[o,I]);return p.useEffect(()=>{var r;return k(),window.addEventListener("resize",k),(r=c.current)!=null&&r.parentElement&&c.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),c.current&&c.current.parentElement&&c.current.parentElement.removeEventListener("scroll",k)}},[k]),p.useEffect(()=>{var r;c.current&&f(I==="horizontal"?{width:c.current.offsetWidth,left:c.current.offsetLeft-(((r=c.current.parentElement)==null?void 0:r.scrollLeft)??0),top:c.current.offsetTop+c.current.offsetHeight,opacity:0}:{left:0,top:c.current.offsetTop,height:c.current.offsetHeight,opacity:0})},[I]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:s,className:J.tabitem,role:"tab","aria-selected":o,"aria-controls":t,"aria-disabled":j,tabIndex:o?0:-1,"data-selected":o,"data-disabled":j,"data-direction":I,"data-inverted":L,onClick:ee,"data-compact-spacing":Y,ref:r=>{c.current=r,typeof E=="function"?E(r):E&&(E.current=r)},onKeyDown:S,onMouseEnter:()=>w("mouseover"),onMouseLeave:()=>w("mouseleave"),...o&&{"data-testid":"tabitem-selected"},...$,children:[C&&n.jsx(Q,{name:C,appearance:o?"filled":"outlined"}),l&&n.jsx("span",{children:l}),X&&n.jsx(ke,{...U})]}),n.jsx("span",{"data-disabled":j,className:J["segment-hover-indicator"],style:{width:b==null?void 0:b.width,height:b==null?void 0:b.height,left:b==null?void 0:b.left,top:b==null?void 0:b.top,opacity:b==null?void 0:b.opacity}})]})});je.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const m=p.forwardRef(({options:s,onChange:t,direction:l="horizontal",alignment:o="start",selectedTabId:i,compactSpacing:e,overflowType:T="scrollable",inverted:x=!1,...v},C)=>{const[u,Y]=p.useState(!1),[I,j]=p.useState(!1),[L,$]=p.useState(!1),[E,U]=p.useState(!1),[F,Z]=p.useState(!1),[X,c]=p.useState(!1),b=p.useRef(null),{indicatorStyle:f}=Re(b,i,l==="horizontal"?"bottom":"left"),w=l==="horizontal"&&(u||I)&&T==="dropdown",S=p.useCallback(()=>{const a=b.current;a&&Z(d=>{const g=Ke(a,d),h=a.scrollLeft>0,B=a.scrollWidth-a.clientWidth-a.scrollLeft>1,_=a.scrollTop>0,N=a.scrollHeight-a.clientHeight-a.scrollTop>0;return Y(g&&h),j(g&&B),U(g&&_),$(g&&N),g})},[b]);p.useEffect(()=>{var a;return S(),window.addEventListener("resize",S),(a=b.current)==null||a.addEventListener("scroll",S),()=>{var d;window.removeEventListener("resize",S),(d=b.current)==null||d.removeEventListener("scroll",S)}},[S]),p.useEffect(()=>{!i&&s.length>0&&t(s[0].id)},[i,s,t]);const O=a=>{const d=a.currentTarget,g=d.getAttribute("id")||"";t(g),c(!1);const h=b.current;h&&We(d,h,l)},z=()=>{if(b.current){const a=l==="horizontal"?{left:-300}:{top:-300};b.current.scrollBy({...a,behavior:"smooth"})}},k=()=>{if(b.current){const a=l==="horizontal"?{left:300}:{top:300};b.current.scrollBy({...a,behavior:"smooth"})}},r=s.find(a=>a.id===i);return n.jsxs("div",{className:H["tab-container"],"data-direction":l,children:[n.jsx("div",{className:H["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&T==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:l==="horizontal"?"row":"column"},children:[F&&!w&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:u||E?1:0,pointerEvents:u||E?"auto":"none"},onClick:z}),n.jsxs("div",{ref:a=>{b.current=a,typeof C=="function"?C(a):C&&(C.current=a)},role:"tablist",className:H.tab,"data-alignment":F?"start":o,"data-direction":l,"data-overflow-type":T,...v,children:[n.jsx("div",{className:H["tab-selected-indicator"],style:{left:w?0:f.left,width:(f.width??0)+(w?32:0),top:f.top,height:f.height}}),w&&r&&n.jsx(Ae,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>c(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:H["tab-dropdown-button"],onClick:()=>c(a=>!a),"aria-label":"Select tab","data-inverted":x,children:[r&&r.icon&&n.jsx(Q,{name:r.icon,appearance:"filled"}),r&&n.jsx("div",{style:{flexShrink:0},children:r==null?void 0:r.label}),r.badgeCount&&r.badgeCount>0&&r.badgeContent==="number"&&n.jsx(ke,{badgeType:r.badgeType,content:r.badgeContent,count:r.badgeCount}),n.jsx(Q,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:X,children:s.filter(a=>a.id!==i).map((a,d)=>n.jsx(He,{id:a.id,label:a.label,onClick:O,disabled:a.disabled,leftIcon:a.icon,badgeCount:a.badgeCount,badgeContent:a.badgeContent,badgeIcon:a.badgeIcon,badgeType:a.badgeType,showBadge:!0},`${a.id}-dropdown-${d}`))}),s.map((a,d)=>n.jsx(je,{onClick:O,isSelected:i===a.id,compactSpacing:e,direction:l,"data-hidden":w,inverted:x,...a},`${a.id}-${d}`))]}),F&&!w&&n.jsx(ne,{name:l==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:I||L?1:0,pointerEvents:I||L?"auto":"none"},onClick:k})]}),n.jsx("div",{className:H["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":l,"data-compact-spacing":e,"data-scrollable":F&&T==="scrollable"?!0:void 0})]})});m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const wn={title:"Composants/Tab",component:m,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:s=>{const[t,l]=p.useState("tab-2"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},K={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:s=>{const[t,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},W={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:s=>{const[t,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(m,{...s,direction:"vertical",options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=p.useState("home"),o=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=p.useState("photos"),o=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{l(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},P={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},G={tags:["!autodocs"],args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:s=>{const[t,l]=p.useState("tab-1"),o=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{l(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(m,{...s,options:o,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:o.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:s,step:t})=>{const l=Be(s);_e();const o=await l.getByRole("tab",{name:"First Tab"}),i=await l.getByRole("tab",{name:"Second Tab"}),e=await l.getByRole("tab",{name:"Third Tab"}),T=await l.getByRole("tab",{name:"Fourth Tab"}),x=await l.getByRole("tab",{name:"Fifth Tab"}),v=async u=>{A(u).toHaveAttribute("aria-selected","true"),A(u).toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).toBeVisible()},C=async u=>{A(u).toHaveAttribute("aria-selected","false"),A(u).not.toHaveFocus(),A(l.getByText(`Contenu onglet ${u.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await R.tab(),v(o)}),await t("Navigate to the second tab and select it",async()=>{await R.keyboard(D),v(i)}),await t("Navigate to the second tab and select it",async()=>{await R.keyboard(D),v(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await R.keyboard(D),v(x),C(T)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await R.keyboard(D),v(o)}),await t("Navigate back to the last tab and select it",async()=>{await R.keyboard(Fe),v(x)})}};var ae,te,oe;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(te=y.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,se,re;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(re=(se=K.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ie,de,ce;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(de=W.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var be,pe,he;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ge,ue,me;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(me=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var Te,ve,fe;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
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
}`,...(fe=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var ye,xe,Ie;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ie=(xe=P.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ce,we,Se;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(we=G.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const Sn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{W as CompactSpacing,y as Default,V as IconsOnly,G as KeyboardInteraction,P as OverflowType,K as Vertical,q as WithBadge,M as WithIcons,Sn as __namedExportsOrder,wn as default};
