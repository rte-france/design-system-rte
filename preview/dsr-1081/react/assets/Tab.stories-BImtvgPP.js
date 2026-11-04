import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as D,f as Be}from"./keyboard-test.constants-DC52cZHj.js";import{w as _e,u as H,e as N}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as Ae}from"./testing.utils-DmLcTX3r.js";import{p as G}from"./animation-BebxwkA_.js";import{u as Re}from"./useSelectedIndicatorPosition-CM1f02jd.js";import{B as ke}from"./Badge-BKSKdLzq.js";import{D as He}from"./Dropdown-CyecDUeK.js";import{D as Ne}from"./DropdownItem-DoVaQzxG.js";import{I as Z}from"./Icon-DBkoQNiA.js";import{I as ae}from"./IconButton-CJDki2nw.js";import{b as Le,d as Oe,A as De,a as ze}from"./keyboard.constants-BverKK8B.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useScrollEvent-BvD0VCKE.js";import"./index-DJ8f9STe.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./timepicker.constants-CynrC_9x.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-BPXtBEeO.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./common-button.constants-DjIinK9B.js";import"./IconButton.module-CR53g8c2.js";const Ke=(l,a,o)=>{if(!We(l,a,o))return;const t=a.getBoundingClientRect(),s=l.getBoundingClientRect();if(o==="horizontal"){const e=a.scrollLeft+Me(s,t);a.scrollTo({left:e,behavior:G()?"auto":"smooth"})}else{const e=a.scrollTop+Ve(s,t);a.scrollTo({top:e,behavior:G()?"auto":"smooth"})}},We=(l,a,o)=>{if(a&&l){const t=a.getBoundingClientRect(),s=l.getBoundingClientRect(),e=s.left<t.left,T=s.right>t.right,x=s.top<t.top,v=s.bottom>t.bottom;return o==="horizontal"?e||T:x||v}return!1},Me=(l,a)=>{const o=l.left<a.left,t=l.right>a.right;return o?l.left-a.left:t?l.right-a.right:0},Ve=(l,a)=>{const o=l.top<a.top,t=l.bottom>a.bottom;return o?l.top-a.top:t?l.bottom-a.bottom:0},qe="_tab_1tjub_1",L={"tab-container":"_tab-container_1tjub_1",tab:qe,"tab-selected-indicator":"_tab-selected-indicator_1tjub_43","tab-border-horizontal":"_tab-border-horizontal_1tjub_76","tab-border-vertical":"_tab-border-vertical_1tjub_88","tab-dropdown-button":"_tab-dropdown-button_1tjub_97"},Pe="_tabitem_1rgd2_1",X={tabitem:Pe,"segment-hover-indicator":"_segment-hover-indicator_1rgd2_53"},Ee=b.forwardRef(({id:l,panelId:a,label:o,isSelected:t,showBadge:s,badgeCount:e,badgeContent:T="empty",badgeIcon:x,onClick:v,icon:C,badgeType:f="indicator",compactSpacing:Y,direction:w,disabled:B,inverted:$,...U},R)=>{const J={count:e,content:T,icon:x,badgeType:f},_=e&&e>0&&T==="number",Q=!B&&(s||_||T==="icon"&&x),c=b.useRef(null),[g,I]=b.useState(null),p=i=>{B?i.preventDefault():(v(i),I(h=>({...h,opacity:0})))},A=b.useCallback(i=>{c.current&&!t&&I(i==="mouseover"?h=>({...h,opacity:1}):h=>({...h,opacity:0}))},[t]),ne=i=>{const h=w==="vertical",d=h&&i.key===Le,r=h&&i.key===Oe,u=!h&&i.key===De,F=!h&&i.key===ze,k=d||u;(k||(r||F))&&(i.preventDefault(),E(k?"next":"previous"))},E=i=>{var O;const h=(O=c.current)==null?void 0:O.parentElement;if(!h)return;const d=Array.from(h.querySelectorAll(`.${X.tabitem}`)),r=d.findIndex(Fe=>Fe===document.activeElement);let u=S(r,d.length,i),F=0;const k=d.length;for(;d[u].getAttribute("data-disabled")==="true"&&F<k;)u=S(u,d.length,i),F++;d[u].focus(),d[u].click()},S=(i,h,d)=>d==="next"?(i+1)%h:(i-1+h)%h,j=b.useCallback(()=>{c.current&&!t&&I(w==="horizontal"?i=>{var h,d,r,u;return{...i,width:(h=c.current)==null?void 0:h.offsetWidth,left:((d=c.current)==null?void 0:d.offsetLeft)??0,top:(((r=c.current)==null?void 0:r.offsetTop)??0)+(((u=c.current)==null?void 0:u.offsetHeight)??0)}}:i=>{var h,d;return{...i,left:0,top:(h=c.current)==null?void 0:h.offsetTop,height:(d=c.current)==null?void 0:d.offsetHeight}})},[t,w]);return b.useEffect(()=>{var i;return j(),window.addEventListener("resize",j),(i=c.current)!=null&&i.parentElement&&c.current.parentElement.addEventListener("scroll",j),()=>{window.removeEventListener("resize",j),c.current&&c.current.parentElement&&c.current.parentElement.removeEventListener("scroll",j)}},[j]),b.useEffect(()=>{var i;c.current&&I(w==="horizontal"?{width:c.current.offsetWidth,left:c.current.offsetLeft-(((i=c.current.parentElement)==null?void 0:i.scrollLeft)??0),top:c.current.offsetTop+c.current.offsetHeight,opacity:0}:{left:0,top:c.current.offsetTop,height:c.current.offsetHeight,opacity:0})},[w]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{type:"button",id:l,className:X.tabitem,role:"tab","aria-selected":t,"aria-controls":a,"aria-disabled":B,tabIndex:t?0:-1,"data-selected":t,"data-disabled":B,"data-direction":w,"data-inverted":$,onClick:p,"data-compact-spacing":Y,ref:i=>{c.current=i,typeof R=="function"?R(i):R&&(R.current=i)},onKeyDown:ne,onMouseEnter:()=>A("mouseover"),onMouseLeave:()=>A("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...U,children:[C&&n.jsx(Z,{name:C,appearance:t?"filled":"outlined"}),o&&n.jsx("span",{children:o}),Q&&n.jsx(ke,{...J})]}),n.jsx("span",{"data-disabled":B,className:X["segment-hover-indicator"],style:{width:g==null?void 0:g.width,height:g==null?void 0:g.height,left:g==null?void 0:g.left,top:g==null?void 0:g.top,opacity:g==null?void 0:g.opacity}})]})});Ee.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const m=b.forwardRef(({options:l,onChange:a,direction:o="horizontal",alignment:t="start",selectedTabId:s,compactSpacing:e,overflowType:T="scrollable",inverted:x=!1,...v},C)=>{const[f,Y]=b.useState(!1),[w,B]=b.useState(!1),[$,U]=b.useState(!1),[R,J]=b.useState(!1),[_,ee]=b.useState(!1),[Q,c]=b.useState(!1),g=f||R,I=w||$,p=b.useRef(null),{indicatorStyle:A}=Re(p,s,o==="horizontal"?"bottom":"left"),E=o==="horizontal"&&(f||w)&&T==="dropdown",S=b.useCallback(()=>{if(p.current){const r=p.current.offsetWidth<p.current.scrollWidth||p.current.offsetHeight<p.current.scrollHeight,u=p.current.scrollLeft>0,F=p.current.scrollWidth-p.current.clientWidth-p.current.scrollLeft>0,k=p.current.scrollTop>0,O=p.current.scrollHeight-p.current.clientHeight-p.current.scrollTop>0;Y(u),B(F),J(k),U(O),ee(r)}},[p]);b.useEffect(()=>{var r;return S(),window.addEventListener("resize",S),(r=p.current)==null||r.addEventListener("scroll",S),()=>{var u;window.removeEventListener("resize",S),(u=p.current)==null||u.removeEventListener("scroll",S)}},[S]),b.useEffect(()=>{!s&&l.length>0&&a(l[0].id)},[s,l,a]);const j=r=>{const u=r.currentTarget,F=u.getAttribute("id")||"";a(F),c(!1);const k=p.current;k&&Ke(u,k,o)},i=()=>{if(p.current){const r=o==="horizontal"?{left:-300}:{top:-300};p.current.scrollBy({...r,behavior:G()?"auto":"smooth"})}},h=()=>{if(p.current){const r=o==="horizontal"?{left:300}:{top:300};p.current.scrollBy({...r,behavior:G()?"auto":"smooth"})}},d=l.find(r=>r.id===s);return n.jsxs("div",{className:L["tab-container"],"data-direction":o,children:[n.jsx("div",{className:L["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":_&&T==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[_&&!E&&n.jsx(ae,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Voir les onglets précédents",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:g?1:0,pointerEvents:g?"auto":"none"},onClick:i}),n.jsxs("div",{ref:r=>{p.current=r,typeof C=="function"?C(r):C&&(C.current=r)},role:"tablist",className:L.tab,"data-alignment":_?"start":t,"data-direction":o,"aria-orientation":o,"data-overflow-type":T,...v,children:[n.jsx("div",{className:L["tab-selected-indicator"],style:{left:E?0:A.left,width:(A.width??0)+(E?32:0),top:A.top,height:A.height}}),E&&d&&n.jsx(He,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>c(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:L["tab-dropdown-button"],onClick:()=>c(r=>!r),"aria-label":"Afficher les onglets","data-inverted":x,children:[d&&d.icon&&n.jsx(Z,{name:d.icon,appearance:"filled"}),d&&n.jsx("div",{style:{flexShrink:0},children:d==null?void 0:d.label}),d.badgeCount&&d.badgeCount>0&&d.badgeContent==="number"&&n.jsx(ke,{badgeType:d.badgeType,content:d.badgeContent,count:d.badgeCount}),n.jsx(Z,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:Q,children:l.filter(r=>r.id!==s).map((r,u)=>n.jsx(Ne,{id:r.id,label:r.label,onClick:j,disabled:r.disabled,leftIcon:r.icon,badgeCount:r.badgeCount,badgeContent:r.badgeContent,badgeIcon:r.badgeIcon,badgeType:r.badgeType,showBadge:!0},`${r.id}-dropdown-${u}`))}),l.map((r,u)=>n.jsx(Ee,{onClick:j,isSelected:s===r.id,compactSpacing:e,direction:o,"data-hidden":E,inverted:x,...r},`${r.id}-${u}`))]}),_&&!E&&n.jsx(ae,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Voir les onglets suivants",variant:"transparent",tabIndex:-1,style:{zIndex:11,opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:h})]}),n.jsx("div",{className:L["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":_&&T==="scrollable"?!0:void 0})]})});m.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const wn={title:"Composants/Tab",component:m,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]},"aria-label":{control:"text",description:"Accessible name for the tab list"}},parameters:{}},y={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable","aria-label":"Sample tabs"},render:l=>{const[a,o]=b.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px",fontFamily:"Arial"},children:[n.jsx("span",{children:"Normal"}),n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px",fontFamily:"Arial"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)"},children:"Inverted"}),n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},z={args:{...y.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsxs("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:a!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:a!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:a!=="tab-3",children:"Contenu onglet 3"})]})]})}},K={args:{...y.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(m,{...l,direction:"vertical",options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},W={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],s=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},V={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid var(--border-secondary)",padding:"8px",marginTop:"16px",color:"var(--content-secondary)",fontFamily:"Arial"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},q={args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab very long and descriptive",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],s=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",color:"var(--content-secondary)",fontFamily:"Arial"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},P={tags:["!autodocs"],args:{...y.args,onChange:()=>{},options:[],alignment:"start"},render:l=>{const[a,o]=b.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],s=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(m,{...l,options:t,selectedTabId:a,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:a!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:a})=>{const o=_e(l);Ae();const t=await o.getByRole("tab",{name:"First Tab"}),s=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),T=await o.getByRole("tab",{name:"Fourth Tab"}),x=await o.getByRole("tab",{name:"Fifth Tab"}),v=async f=>{N(f).toHaveAttribute("aria-selected","true"),N(f).toHaveFocus(),N(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},C=async f=>{N(f).toHaveAttribute("aria-selected","false"),N(f).not.toHaveFocus(),N(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await a("Focus on the first tab and select it",async()=>{await H.tab(),v(t)}),await a("Navigate to the second tab and select it",async()=>{await H.keyboard(D),v(s)}),await a("Navigate to the second tab and select it",async()=>{await H.keyboard(D),v(e)}),await a("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await H.keyboard(D),v(x),C(T)}),await a("Navigate back to the first tab when there are no next tabs",async()=>{await H.keyboard(D),v(t)}),await a("Navigate back to the last tab and select it",async()=>{await H.keyboard(Be),v(x)})}};var te,oe,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var re,se,ie;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(je=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};const Sn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{K as CompactSpacing,y as Default,M as IconsOnly,P as KeyboardInteraction,q as OverflowType,z as Vertical,V as WithBadge,W as WithIcons,Sn as __namedExportsOrder,wn as default};
