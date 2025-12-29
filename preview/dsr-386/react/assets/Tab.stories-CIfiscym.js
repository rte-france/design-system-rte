import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{e as q,f as Be}from"./keyboard-test.constants-C9whQEGR.js";import{w as _e,u as _,e as F}from"./index-L8OlCEhE.js";import{r as c}from"./index-G8LIXM5I.js";import{f as Fe}from"./testing.utils-XLd2Paix.js";import{u as Re}from"./useSelectedIndicatorPosition-DxJCQCZS.js";import{B as ke}from"./Badge-DClShhGt.js";import{D as He,a as Ne}from"./DropdownItem-CH6at8cW.js";import{I as Z}from"./Icon-DjEid3Hw.js";import{I as ne}from"./IconButton-BmWumRvh.js";import{c as Le,d as Ae,A as Oe,a as De}from"./keyboard.constants-ep-ZHn_7.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-GNmPbxh0.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CtOPxSY4.js";import"./index-B7EolvnA.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";const ze=(d,t,o)=>{if(!qe(d,t,o))return;const l=t.getBoundingClientRect(),i=d.getBoundingClientRect();if(o==="horizontal"){const e=t.scrollLeft+Ke(i,l);t.scrollTo({left:e,behavior:"smooth"})}else{const e=t.scrollTop+We(i,l);t.scrollTo({top:e,behavior:"smooth"})}},qe=(d,t,o)=>{if(t&&d){const l=t.getBoundingClientRect(),i=d.getBoundingClientRect(),e=i.left<l.left,T=i.right>l.right,y=i.top<l.top,u=i.bottom>l.bottom;return o==="horizontal"?e||T:y||u}return!1},Ke=(d,t)=>{const o=d.left<t.left,l=d.right>t.right;return o?d.left-t.left:l?d.right-t.right:0},We=(d,t)=>{const o=d.top<t.top,l=d.bottom>t.bottom;return o?d.top-t.top:l?d.bottom-t.bottom:0},Me="_tab_fq3h5_29",R={"tab-container":"_tab-container_fq3h5_29",tab:Me,"tab-selected-indicator":"_tab-selected-indicator_fq3h5_71","tab-border-horizontal":"_tab-border-horizontal_fq3h5_92","tab-border-vertical":"_tab-border-vertical_fq3h5_104","tab-dropdown-button":"_tab-dropdown-button_fq3h5_113"},Ve="_tabitem_rph42_29",X={tabitem:Ve,"segment-hover-indicator":"_segment-hover-indicator_rph42_82"},je=c.forwardRef(({id:d,panelId:t,label:o,isSelected:l,showBadge:i,badgeCount:e,badgeContent:T="empty",badgeIcon:y,onClick:u,icon:C,badgeType:f="indicator",compactSpacing:H,direction:w,disabled:S,inverted:$,...L},B)=>{const E={count:e,content:T,icon:y,badgeType:f},U=e&&e>0&&T==="number",N=!S&&(i||U||T==="icon"&&y),s=c.useRef(null),[h,k]=c.useState(null),j=a=>{S?a.preventDefault():(u(a),k(r=>({...r,opacity:0})))},I=c.useCallback(a=>{s.current&&!l&&k(a==="mouseover"?r=>({...r,opacity:1}):r=>({...r,opacity:0}))},[l]),A=a=>{const r=w==="vertical",p=r&&a.key===Le,v=r&&a.key===Ae,m=!r&&a.key===Oe,D=!r&&a.key===De,z=p||m;(z||(v||D))&&(a.preventDefault(),J(z?"next":"previous"))},J=a=>{var Q;const r=(Q=s.current)==null?void 0:Q.parentElement;if(!r)return;const p=Array.from(r.querySelectorAll(`.${X.tabitem}`)),v=p.findIndex(Ee=>Ee===document.activeElement);let m=O(v,p.length,a),D=0;const z=p.length;for(;p[m].getAttribute("data-disabled")==="true"&&D<z;)m=O(m,p.length,a),D++;p[m].focus(),p[m].click()},O=(a,r,p)=>p==="next"?(a+1)%r:(a-1+r)%r,b=c.useCallback(()=>{s.current&&!l&&k(w==="horizontal"?a=>{var r,p,v,m;return{...a,width:(r=s.current)==null?void 0:r.offsetWidth,left:((p=s.current)==null?void 0:p.offsetLeft)??0,top:(((v=s.current)==null?void 0:v.offsetTop)??0)+(((m=s.current)==null?void 0:m.offsetHeight)??0)}}:a=>{var r,p;return{...a,left:0,top:(r=s.current)==null?void 0:r.offsetTop,height:(p=s.current)==null?void 0:p.offsetHeight}})},[l,w]);return c.useEffect(()=>{var a;return b(),window.addEventListener("resize",b),(a=s.current)!=null&&a.parentElement&&s.current.parentElement.addEventListener("scroll",b),()=>{window.removeEventListener("resize",b),s.current&&s.current.parentElement&&s.current.parentElement.removeEventListener("scroll",b)}},[b]),c.useEffect(()=>{var a;s.current&&k(w==="horizontal"?{width:s.current.offsetWidth,left:s.current.offsetLeft-(((a=s.current.parentElement)==null?void 0:a.scrollLeft)??0),top:s.current.offsetTop+s.current.offsetHeight,opacity:0}:{left:0,top:s.current.offsetTop,height:s.current.offsetHeight,opacity:0})},[w]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{id:d,className:X.tabitem,role:"tab","aria-selected":l,"aria-controls":t,"aria-disabled":S,tabIndex:l?0:-1,"data-selected":l,"data-disabled":S,"data-direction":w,"data-inverted":$,onClick:j,"data-compact-spacing":H,ref:a=>{s.current=a,typeof B=="function"?B(a):B&&(B.current=a)},onKeyDown:A,onMouseEnter:()=>I("mouseover"),onMouseLeave:()=>I("mouseleave"),...l&&{"data-testid":"tabitem-selected"},...L,children:[C&&n.jsx(Z,{name:C,appearance:l?"filled":"outlined"}),o&&n.jsx("span",{children:o}),N&&n.jsx(ke,{...E})]}),n.jsx("span",{"data-disabled":S,className:X["segment-hover-indicator"],style:{width:h==null?void 0:h.width,height:h==null?void 0:h.height,left:h==null?void 0:h.left,top:h==null?void 0:h.top,opacity:h==null?void 0:h.opacity}})]})});je.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeContent:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=c.forwardRef(({options:d,onChange:t,direction:o="horizontal",alignment:l="start",selectedTabId:i,compactSpacing:e,overflowType:T="scrollable",inverted:y=!1},u)=>{const[C,f]=c.useState(!1),[H,w]=c.useState(!1),[S,$]=c.useState(!1),[L,B]=c.useState(!1),[E,U]=c.useState(!1),[ee,N]=c.useState(!1),s=c.useRef(null),h=Re(s,i,o==="horizontal"?"bottom":"left"),j=o==="horizontal"&&(C||H)&&T==="dropdown",I=c.useCallback(()=>{if(s.current){const a=s.current.offsetWidth<s.current.scrollWidth||s.current.offsetHeight<s.current.scrollHeight,r=s.current.scrollLeft>0,p=s.current.scrollWidth-s.current.clientWidth-s.current.scrollLeft>0,v=s.current.scrollTop>0,m=s.current.scrollHeight-s.current.clientHeight-s.current.scrollTop>0;f(r),w(p),B(v),$(m),U(a)}},[s]);c.useEffect(()=>{var a;return I(),window.addEventListener("resize",I),(a=s.current)==null||a.addEventListener("scroll",I),()=>{var r;window.removeEventListener("resize",I),(r=s.current)==null||r.removeEventListener("scroll",I)}},[I]),c.useEffect(()=>{!i&&d.length>0&&t(d[0].id)},[i,d,t]);const A=a=>{const r=a.currentTarget,p=r.getAttribute("id")||"";t(p),N(!1);const v=s.current;v&&ze(r,v,o)},J=()=>{if(s.current){const a=o==="horizontal"?{left:-300}:{top:-300};s.current.scrollBy({...a,behavior:"smooth"})}},O=()=>{if(s.current){const a=o==="horizontal"?{left:300}:{top:300};s.current.scrollBy({...a,behavior:"smooth"})}},b=d.find(a=>a.id===i);return n.jsxs("div",{className:R["tab-container"],"data-direction":o,children:[n.jsx("div",{className:R["tab-border-vertical"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":E&&T==="scrollable"?!0:void 0}),n.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",flexDirection:o==="horizontal"?"row":"column"},children:[E&&!j&&n.jsx(ne,{name:o==="horizontal"?"arrow-chevron-left":"arrow-chevron-up","aria-label":"Previous tabs",variant:"transparent",style:{zIndex:11,opacity:C||L?1:0,pointerEvents:C||L?"auto":"none"},onClick:J}),n.jsxs("div",{ref:a=>{s.current=a,typeof u=="function"?u(a):u&&(u.current=a)},role:"tablist","aria-label":"Sample Tabs",className:R.tab,"data-alignment":E?"start":l,"data-direction":o,"data-overflow-type":T,children:[n.jsx("div",{className:R["tab-selected-indicator"],style:{left:j?0:h.left,width:(h.width??0)+(j?32:0),top:h.top,height:h.height}}),j&&b&&n.jsx(He,{autoClose:!0,dropdownId:"tab-dropdown",onClose:()=>N(!1),offset:10,trigger:n.jsxs("button",{type:"button",className:R["tab-dropdown-button"],onClick:()=>N(a=>!a),"aria-label":"Select tab","data-inverted":y,children:[b&&b.icon&&n.jsx(Z,{name:b.icon,appearance:"filled"}),b&&n.jsx("div",{style:{flexShrink:0},children:b==null?void 0:b.label}),b.badgeCount&&b.badgeCount>0&&b.badgeContent==="number"&&n.jsx(ke,{badgeType:b.badgeType,content:b.badgeContent,count:b.badgeCount}),n.jsx(Z,{style:{flexShrink:0},name:"arrow-chevron-down"})]}),isOpen:ee,children:d.filter(a=>a.id!==i).map((a,r)=>n.jsx(Ne,{id:a.id,label:a.label,onClick:A,disabled:a.disabled,leftIcon:a.icon,badgeCount:a.badgeCount,badgeContent:a.badgeContent,badgeIcon:a.badgeIcon,badgeType:a.badgeType,showBadge:!0},`${a.id}-dropdown-${r}`))}),d.map((a,r)=>n.jsx(je,{onClick:A,isSelected:i===a.id,compactSpacing:e,direction:o,"data-hidden":j,inverted:y,...a},`${a.id}-${r}`))]}),E&&!j&&n.jsx(ne,{name:o==="horizontal"?"arrow-chevron-right":"arrow-chevron-down","aria-label":"Next tabs",variant:"transparent",style:{zIndex:11,opacity:H||S?1:0,pointerEvents:H||S?"auto":"none"},onClick:O})]}),n.jsx("div",{className:R["tab-border-horizontal"],"aria-hidden":"true",role:"presentation","data-direction":o,"data-compact-spacing":e,"data-scrollable":E&&T==="scrollable"?!0:void 0})]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1},overflowType:{defaultValue:{value:'"scrollable"',computed:!1},required:!1},inverted:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const un={title:"Composants/Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"},inverted:{control:"boolean"},overflowType:{control:"select",options:["scrollable","dropdown"]}},parameters:{}},x={args:{onChange:()=>{},options:[],alignment:"start",overflowType:"scrollable"},render:d=>{const[t,o]=c.useState("tab-2"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{children:[n.jsxs("div",{style:{height:"100%",padding:"16px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Normal"}),n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i})]}),n.jsxs("div",{style:{backgroundColor:"var(--background-inverse)",marginTop:"16px",padding:"10px"},children:[n.jsx("span",{style:{color:"var(--content-primary-inverse)",fontFamily:"Arial"},children:"Inverted"}),n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i,inverted:!0})]})]}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"64px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},K={args:{...x.args,onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:d=>{const[t,o]=c.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px"},children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},W={args:{...x.args,onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:d=>{const[t,o]=c.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(g,{...d,direction:"vertical",options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},M={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:d=>{const[t,o]=c.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},V={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:d=>{const[t,o]=c.useState("home"),l=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},P={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:d=>{const[t,o]=c.useState("photos"),l=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeContent:"number",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{o(e)};return n.jsxs(n.Fragment,{children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},G={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:d=>{const[t,o]=c.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Scrollable"}),n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx("span",{style:{fontFamily:"Arial"},children:"Dropdown"}),n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i,overflowType:"dropdown"}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},Y={args:{...x.args,onChange:()=>{},options:[],alignment:"start"},render:d=>{const[t,o]=c.useState("tab-1"),l=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{o(e)};return n.jsxs("div",{style:{height:"150px"},children:[n.jsx(g,{...d,options:l,selectedTabId:t,onChange:i}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:l.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:d,step:t})=>{const o=_e(d);Fe(d);const l=await o.getByRole("tab",{name:"First Tab"}),i=await o.getByRole("tab",{name:"Second Tab"}),e=await o.getByRole("tab",{name:"Third Tab"}),T=await o.getByRole("tab",{name:"Fourth Tab"}),y=await o.getByRole("tab",{name:"Fifth Tab"}),u=async f=>{F(f).toHaveAttribute("aria-selected","true"),F(f).toHaveFocus(),F(o.getByText(`Contenu onglet ${f.textContent}`)).toBeVisible()},C=async f=>{F(f).toHaveAttribute("aria-selected","false"),F(f).not.toHaveFocus(),F(o.getByText(`Contenu onglet ${f.textContent}`)).not.toBeVisible()};await t("Focus on the first tab and select it",async()=>{await _.tab(),u(l)}),await t("Navigate to the second tab and select it",async()=>{await _.keyboard(q),u(i)}),await t("Navigate to the second tab and select it",async()=>{await _.keyboard(q),u(e)}),await t("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await _.keyboard(q),u(y),C(T)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await _.keyboard(q),u(l)}),await t("Navigate back to the last tab and select it",async()=>{await _.keyboard(Be),u(y)})}};var ae,te,le;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(le=(te=x.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var oe,se,de;K.parameters={...K.parameters,docs:{...(oe=K.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(se=K.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ie,re,ce;W.parameters={...W.parameters,docs:{...(ie=W.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ce=(re=W.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var be,pe,he;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(he=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ue,ge,Te;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(Te=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:Te.source}}};var me,fe,ve;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var xe,ye,Ie;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(Ie=(ye=G.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};var Ce,we,Se;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(Se=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};const gn=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","OverflowType","KeyboardInteraction"];export{W as CompactSpacing,x as Default,V as IconsOnly,Y as KeyboardInteraction,G as OverflowType,K as Vertical,P as WithBadge,M as WithIcons,gn as __namedExportsOrder,un as default};
