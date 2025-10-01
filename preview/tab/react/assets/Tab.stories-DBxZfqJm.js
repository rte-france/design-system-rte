import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as w,c as ye}from"./keyboard-test.constants-BHMvM5a0.js";import{w as ve,u as y,e as v}from"./index-DaW6VCyr.js";import{r as c}from"./index-G8LIXM5I.js";import{u as fe}from"./useSelectedIndicatorPosition-BrierSvw.js";import{a as Ie,A as q}from"./keyboard.constants-YQ0IdItO.js";import{B as Ce}from"./Badge-BHtUYWmb.js";import{I as Se}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const V={"tab-container":"_tab-container_b21rt_3","tab-selected-indicator":"_tab-selected-indicator_b21rt_18"},ke="_tabitem_zo1sl_3",N={tabitem:ke,"segment-hover-indicator":"_segment-hover-indicator_zo1sl_43"},re=({id:l,panelId:n,label:d,isSelected:t,showBadge:i,badgeCount:e,badgeAppearance:h="empty",badgeIcon:m,onClick:b,icon:x,badgeType:s="indicator",compactSpacing:C,direction:S,disabled:f,...ce})=>{const be={count:e,appearance:h,icon:m,badgeType:s},pe=e&&e>0&&h==="text",he=!f&&(i||pe||h==="icon"&&m),p=c.useRef(null),[r,k]=c.useState(null),Te=o=>{f?o.preventDefault():b(o)},A=c.useCallback(o=>{p.current&&!t&&k(o==="mouseover"?T=>({...T,opacity:1}):T=>({...T,opacity:0}))},[t]),ge=o=>{o.key==="Tab"&&console.log(o.key),[Ie,q].includes(o.key)&&(o.preventDefault(),o.key===q?M("next"):M("previous"))},M=o=>{var O;const T=(O=p.current)==null?void 0:O.parentElement;if(!T)return;const u=Array.from(T.querySelectorAll(`.${N.tabitem}`)),ue=u.findIndex(xe=>xe===document.activeElement);let I=K(ue,u.length,o),L=0;const me=u.length;for(;u[I].getAttribute("data-disabled")==="true"&&L<me;)I=K(I,u.length,o),L++;u[I].focus(),u[I].click()},K=(o,T,u)=>u==="next"?(o+1)%T:(o-1+T)%T;return c.useEffect(()=>{p.current&&k(S==="horizontal"?{width:p.current.offsetWidth,left:p.current.offsetLeft,top:p.current.offsetTop+p.current.offsetHeight,opacity:0}:{left:p.current.offsetLeft-2,top:p.current.offsetTop,height:p.current.offsetHeight,opacity:0})},[t,S]),a.jsxs(a.Fragment,{children:[a.jsxs("button",{id:l,className:N.tabitem,role:"tab","aria-selected":t,"aria-controls":n,"aria-disabled":f,tabIndex:t?0:-1,"data-selected":t,"data-disabled":f,onClick:Te,"data-compact-spacing":C,ref:p,onKeyDown:ge,onMouseEnter:()=>A("mouseover"),onMouseLeave:()=>A("mouseleave"),...t&&{"data-testid":"tabitem-selected"},...ce,children:[x&&a.jsx(Se,{name:x,appearance:t?"filled":"outlined"}),d&&a.jsx("span",{children:d}),he&&a.jsx(Ce,{...be})]}),a.jsx("span",{"data-disabled":f,className:N["segment-hover-indicator"],style:{width:r==null?void 0:r.width,height:r==null?void 0:r.height,left:r==null?void 0:r.left,top:r==null?void 0:r.top,opacity:r==null?void 0:r.opacity}})]})};re.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeAppearance:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const g=c.forwardRef(({options:l,onChange:n,direction:d="horizontal",alignment:t="start",selectedTabId:i,compactSpacing:e},h)=>{const m=c.useRef(null),b=fe(m,i,d==="horizontal"?"bottom":"left");c.useEffect(()=>{!i&&l.length>0&&n(l[0].id)},[i,l,n]);const x=s=>{const S=s.currentTarget.getAttribute("id")||"";n(S)};return a.jsxs("div",{ref:s=>{m.current=s,typeof h=="function"?h(s):h&&(h.current=s)},role:"tablist","aria-label":"Sample Tabs",className:V["tab-container"],"data-alignment":t,"data-direction":d,children:[a.jsx("span",{className:V["tab-selected-indicator"],style:{left:b.left,width:b.width,top:b.top,height:b.height}}),l.map((s,C)=>a.jsx(re,{onClick:x,isSelected:i===s.id,compactSpacing:e,direction:d,...s},`${s.id}-${C}`))]})});g.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Le={title:"Tab",component:g,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"}}},E={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[n,d]=c.useState("tab-2"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{d(e)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},B={args:{onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[n,d]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{d(e)};return a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[a.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),a.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),a.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},j={args:{onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[n,d]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],i=e=>{d(e)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[a.jsxs("div",{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),a.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[a.jsx(g,{...l,direction:"vertical",options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},_={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[n,d]=c.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera",disabled:!0},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{d(e)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},R={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[n,d]=c.useState("home"),t=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],i=e=>{d(e)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},F={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[n,d]=c.useState("photos"),t=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeAppearance:"text",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],i=e=>{d(e)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},H={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[n,d]=c.useState("tab-1"),t=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"},{id:"tab-4",label:"Fourth Tab",panelId:"panel-4",disabled:!0},{id:"tab-5",label:"Fifth Tab",panelId:"panel-5"}],i=e=>{d(e)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{...l,options:t,selectedTabId:n,onChange:i}),a.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:t.map(e=>a.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:n!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:n})=>{const d=ve(l),t=await d.getByRole("tab",{name:"First Tab"}),i=await d.getByRole("tab",{name:"Second Tab"}),e=await d.getByRole("tab",{name:"Third Tab"}),h=await d.getByRole("tab",{name:"Fourth Tab"}),m=await d.getByRole("tab",{name:"Fifth Tab"}),b=async s=>{v(s).toHaveAttribute("aria-selected","true"),v(s).toHaveFocus(),v(d.getByText(`Contenu onglet ${s.textContent}`)).toBeVisible()},x=async s=>{v(s).toHaveAttribute("aria-selected","false"),v(s).not.toHaveFocus(),v(d.getByText(`Contenu onglet ${s.textContent}`)).not.toBeVisible()};await n("Focus on the first tab and select it",async()=>{await y.tab(),b(t)}),await n("Navigate to the second tab and select it",async()=>{await y.keyboard(w),b(i)}),await n("Navigate to the second tab and select it",async()=>{await y.keyboard(w),b(e)}),await n("Navigate directly to the fifth tab and select it because the forth is disabled",async()=>{await y.keyboard(w),b(m),x(h)}),await n("Navigate back to the first tab when there are no next tabs",async()=>{await y.keyboard(w),b(t)}),await n("Navigate back to the last tab and select it",async()=>{await y.keyboard(ye),b(m)})}};var W,G,Y;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(Y=(G=E.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var D,P,$;B.parameters={...B.parameters,docs:{...(D=B.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      height: "200px"
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
}`,...($=(P=B.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var z,J,Q;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(Q=(J=j.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Z;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Z=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,ne;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var te,de,le;F.parameters={...F.parameters,docs:{...(te=F.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(de=F.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ie,se,oe;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
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
    const forthTab = await canvas.getByRole("tab", {
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
      expectTabToBeNotSelected(forthTab);
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
}`,...(oe=(se=H.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Oe=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","KeyboardInteraction"];export{j as CompactSpacing,E as Default,R as IconsOnly,H as KeyboardInteraction,B as Vertical,F as WithBadge,_ as WithIcons,Oe as __namedExportsOrder,Le as default};
