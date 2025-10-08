import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{b as K,c as ke}from"./keyboard-test.constants-BHMvM5a0.js";import{w as Ee,u as R,e as H}from"./index-DaW6VCyr.js";import{r as p}from"./index-G8LIXM5I.js";import{u as je}from"./useSelectedIndicatorPosition-CN1hrnZ3.js";import{B as we}from"./Badge-BHtUYWmb.js";import{D as Be,a as _e}from"./DropdownItem-DztVN4I4.js";import{I as Z}from"./Icon-DjEid3Hw.js";import{I as te}from"./IconButton-CY-isvho.js";import{c as Re,d as He,A as Fe,a as Ne}from"./keyboard.constants-YQ0IdItO.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-CyCI8mio.js";import"./Divider-B0TD5a92.js";import"./Overlay-ewH1wNQA.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";import"./useAnimatedMount-_zPBpYOt.js";const Le="_tab_d625h_3",F={"tab-container":"_tab-container_d625h_3",tab:Le,"tab-selected-indicator":"_tab-selected-indicator_d625h_43","tab-border-horizontal":"_tab-border-horizontal_d625h_64","tab-border-vertical":"_tab-border-vertical_d625h_76","tab-dropdown-button":"_tab-dropdown-button_d625h_85"},ze="_tabitem_1e1zt_3",X={tabitem:ze,"segment-hover-indicator":"_segment-hover-indicator_1e1zt_55"},Ce=p.forwardRef(({id:r,panelId:s,label:o,isSelected:i,showBadge:c,badgeCount:e,badgeAppearance:x="empty",badgeIcon:j,onClick:g,icon:y,badgeType:T="indicator",compactSpacing:Y,direction:I,disabled:w,inverted:$,...z},B)=>{const _={count:e,appearance:x,icon:j,badgeType:T},U=e&&e>0&&x==="text",N=!w&&(c||U||x==="icon"&&j),a=p.useRef(null),[u,C]=p.useState(null),S=d=>{w?d.preventDefault():(g(d),C(l=>({...l,opacity:0})))},v=p.useCallback(d=>{a.current&&!i&&(d==="mouseover"?C(l=>({...l,opacity:1})):(console.log("event mouse leave"),C(l=>({...l,opacity:0}))))},[i]),O=d=>{const l=I==="vertical",n=l&&d.key===Re,b=l&&d.key===He,h=!l&&d.key===Fe,m=!l&&d.key===Ne,E=n||h;(E||(b||m))&&(d.preventDefault(),J(E?"next":"previous"))},J=d=>{var L;const l=(L=a.current)==null?void 0:L.parentElement;if(!l)return;const n=Array.from(l.querySelectorAll(`.${X.tabitem}`)),b=n.findIndex(Q=>Q===document.activeElement);let h=A(b,n.length,d),m=0;const E=n.length;for(;n[h].getAttribute("data-disabled")==="true"&&m<E;)h=A(h,n.length,d),m++;n[h].focus(),n[h].click()},A=(d,l,n)=>n==="next"?(d+1)%l:(d-1+l)%l,k=p.useCallback(()=>{a.current&&!i&&C(I==="horizontal"?d=>{var l,n,b,h;return{...d,width:(l=a.current)==null?void 0:l.offsetWidth,left:((n=a.current)==null?void 0:n.offsetLeft)??0,top:(((b=a.current)==null?void 0:b.offsetTop)??0)+(((h=a.current)==null?void 0:h.offsetHeight)??0)}}:d=>{var l,n;return{...d,left:0,top:(l=a.current)==null?void 0:l.offsetTop,height:(n=a.current)==null?void 0:n.offsetHeight}})},[i,I]);return p.useEffect(()=>(k(),window.addEventListener("resize",k),a.current&&a.current.parentElement&&a.current.parentElement.addEventListener("scroll",k),()=>{window.removeEventListener("resize",k),a.current&&a.current.parentElement&&a.current.parentElement.removeEventListener("scroll",k)}),[k]),p.useEffect(()=>{var d;a.current&&C(I==="horizontal"?{width:a.current.offsetWidth,left:a.current.offsetLeft-(((d=a.current.parentElement)==null?void 0:d.scrollLeft)??0),top:a.current.offsetTop+a.current.offsetHeight,opacity:0}:{left:0,top:a.current.offsetTop,height:a.current.offsetHeight,opacity:0})},[I]),t.jsxs(t.Fragment,{children:[t.jsxs("button",{id:r,className:X.tabitem,role:"tab","aria-selected":i,"aria-controls":s,"aria-disabled":w,tabIndex:i?0:-1,"data-selected":i,"data-disabled":w,"data-direction":I,"data-inverted":$,onClick:S,"data-compact-spacing":Y,ref:d=>{a.current=d,typeof B=="function"?B(d):B&&(B.current=d)},onKeyDown:O,onMouseEnter:()=>v("mouseover"),onMouseLeave:()=>v("mouseleave"),...i&&{"data-testid":"tabitem-selected"},...z,children:[y&&t.jsx(Z,{name:y,appearance:i?"filled":"outlined"}),o&&t.jsx("span",{children:o}),N&&t.jsx(we,{..._})]}),t.jsx("span",{"data-disabled":w,className:X["segment-hover-indicator"],style:{width:u==null?void 0:u.width,height:u==null?void 0:u.height,left:u==null?void 0:u.left,top:u==null?void 0:u.top,opacity:u==null?void 0:u.opacity}})]})});Ce.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeAppearance:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const f=p.forwardRef(({options:r,onChange:s,direction:o="horizontal",alignment:i="start",selectedTabId:c,compactSpacing:e,overflowType:x="scrollable",inverted:j=!1},g)=>{const[y,T]=p.useState(!1),[Y,I]=p.useState(!1),[w,$]=p.useState(!1),[z,B]=p.useState(!1),[_,U]=p.useState(!1),[ee,N]=p.useState(!1),a=p.useRef(null),u=je(a,c,o==="horizontal"?"bottom":"left"),S=o==="horizontal"&&(y||Y)&&x==="dropdown",v=p.useCallback(()=>{if(a.current){const n=a.current.offsetWidth<a.current.scrollWidth||a.current.offsetHeight<a.current.scrollHeight,b=a.current.scrollLeft>0,h=a.current.scrollWidth-a.current.clientWidth-a.current.scrollLeft>0,m=a.current.scrollTop>0,E=a.current.scrollHeight-a.current.clientHeight-a.current.scrollTop>0;T(b),I(h),B(m),$(E),U(n)}},[a]);p.useEffect(()=>{var n;return v(),window.addEventListener("resize",v),(n=a.current)==null||n.addEventListener("scroll",v),()=>{var b;window.removeEventListener("resize",v),(b=a.current)==null||b.removeEventListener("scroll",v)}},[v]),p.useEffect(()=>{!c&&r.length>0&&s(r[0].id)},[c,r,s]);const O=n=>{const b=n.currentTarget,h=b.getAttribute("id")||"";s(h),N(!1),J(b)&&A(b)},J=n=>{const b=a.current;if(b&&n){const h=b.getBoundingClientRect(),m=n.getBoundingClientRect(),E=m.left<h.left,L=m.right>h.right,Q=m.top<h.top,Se=m.bottom>h.bottom;return o==="horizontal"?E||L:Q||Se}return!1},A=n=>{var b,h;o==="horizontal"?(b=a.current)==null||b.scrollTo({left:n.offsetLeft,behavior:"smooth"}):(h=a.current)==null||h.scrollTo({top:n.offsetTop,behavior:"smooth"})},k=()=>{if(a.current){const n=o==="horizontal"?{left:-300}:{top:-300};a.current.scrollBy({...n,behavior:"smooth"})}},d=()=>{if(a.current){const n=o==="horizontal"?{left:300}:{top:300};a.current.scrollBy({...n,behavior:"smooth"})}},l=r.find(n=>n.id===c);return t.jsxs("div",{className:F["tab-container"],"data-direction":o,children:[t.jsx("div",{className:F["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o}),t.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[_&&!S&&t.jsx(te,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",size:"l",style:{zIndex:11,backgroundColor:"white",opacity:y||z?1:0,pointerEvents:y||z?"auto":"none"},onClick:k}),t.jsxs("div",{ref:n=>{a.current=n,typeof g=="function"?g(n):g&&(g.current=n)},role:"tablist","aria-label":"Sample Tabs",className:F.tab,"data-alignment":_?"start":i,"data-direction":o,children:[t.jsx("div",{className:F["tab-selected-indicator"],style:{left:S?0:u.left,width:(u.width??0)+(S?16:0),top:u.top,height:u.height}}),S&&l&&t.jsx(Be,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>N(!1),offset:10,trigger:t.jsxs("button",{type:"button",className:F["tab-dropdown-button"],onClick:()=>N(n=>!n),"aria-label":"Select tab",children:[l&&l.icon&&t.jsx(Z,{name:l.icon,appearance:"filled"}),l&&t.jsx("div",{style:{flexShrink:0},children:l==null?void 0:l.label}),l.badgeCount&&l.badgeCount>0&&l.badgeAppearance==="text"&&t.jsx(we,{badgeType:l.badgeType,appearance:l.badgeAppearance,count:l.badgeCount}),t.jsx(Z,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ee,children:r.filter(n=>n.id!==c).map((n,b)=>t.jsx(_e,{id:n.id,label:n.label,onClick:O,disabled:n.disabled,leftIcon:n.icon},`${n.id}-dropdown-${b}`))}),r.map((n,b)=>t.jsx(Ce,{onClick:O,isSelected:c===n.id,compactSpacing:e,direction:o,"data-hidden":S?!0:void 0,inverted:j,...n},`${n.id}-${b}`))]}),_&&!S&&t.jsx(te,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",size:"l",style:{zIndex:11,backgroundColor:"white",opacity:w?1:0,pointerEvents:w?"auto":"none"},onClick:d})]}),t.jsx("div",{className:F["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":_&&x==="scrollable"?!0:void 0})]})});f.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const nt={title:"Tab",component:f,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]}},parameters:{}},W={args:{onChange:()=>{},options:[],alignment:"start"},render:r=>{const[s,o]=p.useState("tab-2"),i=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],c=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},M={args:{onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:r=>{const[s,o]=p.useState("tab-1"),i=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],c=e=>{o(e)};return t.jsxs("div",{style:{display:"flex",gap:"16px",height:"120px"},children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[t.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:s!=="tab-1",children:"Contenu onglet 1"}),t.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:s!=="tab-2",children:"Contenu onglet 2"}),t.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:s!=="tab-3",children:"Contenu onglet 3"})]})]})}},D={args:{onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:r=>{const[s,o]=p.useState("tab-1"),i=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],c=e=>{o(e)};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),t.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[t.jsx(f,{...r,direction:"vertical",options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},q={args:{onChange:()=>{},options:[],alignment:"start"},render:r=>{const[s,o]=p.useState("photos"),i=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],c=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{onChange:()=>{},options:[],alignment:"start"},render:r=>{const[s,o]=p.useState("home"),i=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],c=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{onChange:()=>{},options:[],alignment:"start"},render:r=>{const[s,o]=p.useState("photos"),i=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeAppearance:"text",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],c=e=>{o(e)};return t.jsxs(t.Fragment,{children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"dropdown"},render:r=>{const[s,o]=p.useState("tab-1"),i=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],c=e=>{o(e)};return t.jsxs("div",{style:{height:"150px"},children:[t.jsx(f,{...r,options:i,selectedTabId:s,onChange:c,inverted:!0}),t.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:i.map(e=>t.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:s!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:r,step:s})=>{const o=Ee(r),i=await o.getByRole("tab",{name:"First Tab"}),c=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),x=await o.getByRole("tab",{name:"Fourth Tab"}),j=await o.getByRole("tab",{name:"Fifth Tab"}),g=async T=>{H(T).toHaveAttribute("aria-selected","true"),H(T).toHaveFocus(),H(o.getByText(`Contenu onglet ${T.textContent}`)).toBeVisible()},y=async T=>{H(T).toHaveAttribute("aria-selected","false"),H(T).not.toHaveFocus(),H(o.getByText(`Contenu onglet ${T.textContent}`)).not.toBeVisible()};await s("Focus on the first tab and select it",async()=>{await R.tab(),g(i)}),await s("Navigate to the second tab and select it",async()=>{await R.keyboard(K),g(c)}),await s("Navigate to the second tab and select it",async()=>{await R.keyboard(K),g(e)}),await s("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await R.keyboard(K),g(j),y(x)}),await s("Navigate back to the first tab when there are no next tabs",async()=>{await R.keyboard(K),g(i)}),await s("Navigate back to the last tab and select it",async()=>{await R.keyboard(ke),g(j)})}};var ne,ae,oe;W.parameters={...W.parameters,docs:{...(ne=W.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    options: [],
    alignment: "start"
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
}`,...(oe=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var le,se,ie;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
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
      gap: "16px",
      height: "120px"
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
}`,...(ie=(se=M.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,re,ce;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
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
}`,...(ce=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var be,pe,he;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
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
}`,...(he=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,ge,Te;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
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
}`,...(Te=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var me,fe,ve;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
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
      badgeAppearance: "text" as BadgeAppearance,
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
}`,...(ve=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,ye,Ie;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    onChange: () => {},
    options: [],
    alignment: "start",
    overflowType: "dropdown"
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
        <Tab {...args} options={tabs} selectedTabId={selectedTab} onChange={handleTabClick} inverted={true} />
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
}`,...(Ie=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};const at=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","KeyboardInteraction"];export{D as CompactSpacing,W as Default,V as IconsOnly,G as KeyboardInteraction,M as Vertical,P as WithBadge,q as WithIcons,at as __namedExportsOrder,nt as default};
