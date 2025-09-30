import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as R,c as ge}from"./keyboard-test.constants-BHMvM5a0.js";import{w as he,u as v,e as F}from"./index-DaW6VCyr.js";import{r}from"./index-G8LIXM5I.js";import{u as Te}from"./useSelectedIndicatorPosition-CMsoo0hf.js";import{a as me,A as q}from"./keyboard.constants-YQ0IdItO.js";import{B as ue}from"./Badge-BHtUYWmb.js";import{I as xe}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const L={"tab-container":"_tab-container_b21rt_3","tab-selected-indicator":"_tab-selected-indicator_b21rt_18"},ve="_tabitem_1ildu_3",H={tabitem:ve,"segment-hover-indicator":"_segment-hover-indicator_1ildu_39"},se=({id:i,panelId:t,label:d,isSelected:a,showBadge:l,badgeCount:e,badgeAppearance:o="empty",badgeIcon:g,onClick:T,icon:y,badgeType:c="indicator",compactSpacing:I,direction:x,...oe})=>{const re={count:e,appearance:o,icon:g,badgeType:c},ce=l||e!==void 0&&e>0&&o==="text"||o==="icon"&&g,b=r.useRef(null),[s,f]=r.useState(null),N=r.useCallback(h=>{b.current&&!a&&f(h==="mouseover"?m=>({...m,opacity:1}):m=>({...m,opacity:0}))},[a]),be=h=>{h.key==="Tab"&&console.log(h.key),[me,q].includes(h.key)&&(h.preventDefault(),h.key===q?M("next"):M("previous"))},M=h=>{var K;const m=(K=b.current)==null?void 0:K.parentElement;if(!m)return;const u=Array.from(m.querySelectorAll(`.${H.tabitem}`)),A=u.findIndex(pe=>pe===document.activeElement);let C;h==="next"?C=(A+1)%u.length:C=(A-1+u.length)%u.length,u[C].focus(),u[C].click()};return r.useEffect(()=>{b.current&&(console.log(x),x==="horizontal"?f({width:b.current.offsetWidth,left:b.current.offsetLeft,top:b.current.offsetTop+b.current.offsetHeight,opacity:0}):(console.log("vertical"),f({left:b.current.offsetLeft-2,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})))},[a,x]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{id:i,className:H.tabitem,role:"tab","aria-selected":a,"aria-controls":t,tabIndex:a?0:-1,"data-selected":a,onClick:T,"data-compact-spacing":I,ref:b,onKeyDown:be,onMouseEnter:()=>N("mouseover"),onMouseLeave:()=>N("mouseleave"),...a&&{"data-testid":"tabitem-selected"},...oe,children:[y&&n.jsx(xe,{name:y,appearance:a?"filled":"outlined"}),d&&n.jsx("span",{children:d}),ce&&n.jsx(ue,{...re})]}),n.jsx("span",{className:H["segment-hover-indicator"],style:{width:s==null?void 0:s.width,height:s==null?void 0:s.height,left:s==null?void 0:s.left,top:s==null?void 0:s.top,opacity:s==null?void 0:s.opacity}})]})};se.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLButtonElement"}],raw:"KeyboardEvent<HTMLButtonElement>"}]},name:"event"}],return:{name:"void"}}},description:""},badgeAppearance:{defaultValue:{value:'"empty"',computed:!1},required:!1},badgeType:{defaultValue:{value:'"indicator"',computed:!1},required:!1}},composes:["CoreTabItemProps","Omit"]};const p=r.forwardRef(({options:i,onChange:t,direction:d="horizontal",alignment:a="start",selectedTabId:l,compactSpacing:e},o)=>{const g=r.useRef(null),T=Te(g,l,d==="horizontal"?"bottom":"left"),y=c=>{const x=c.currentTarget.getAttribute("id")||"";t(x)};return n.jsxs("div",{ref:c=>{g.current=c,typeof o=="function"?o(c):o&&(o.current=c)},role:"tablist","aria-label":"Sample Tabs",className:L["tab-container"],"data-alignment":a,"data-direction":d,children:[n.jsx("span",{className:L["tab-selected-indicator"],style:{left:T.left,width:T.width,top:T.top,height:T.height}}),i.map((c,I)=>n.jsx(se,{onClick:y,isSelected:l===c.id,compactSpacing:e,direction:d,...c},`${c.id}-${I}`))]})});p.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},alignment:{defaultValue:{value:'"start"',computed:!1},required:!1}},composes:["CoreTabProps","Omit"]};const Re={title:"Tab",component:p,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"}}},S={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[t,d]=r.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{d(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},k={args:{onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[t,d]=r.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{d(e)};return n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})}},w={args:{onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:i=>{const[t,d]=r.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{d(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(p,{...i,direction:"vertical",options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},E={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[t,d]=r.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{d(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},j={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[t,d]=r.useState("home"),a=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],l=e=>{d(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},_={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[t,d]=r.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeAppearance:"text",badgeType:"indicator",showBadge:!0},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],l=e=>{d(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},B={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[t,d]=r.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=e=>{d(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...i,options:a,selectedTabId:t,onChange:l}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:i,step:t})=>{const d=he(i),a=await d.getByRole("tab",{name:"First Tab"}),l=await d.getByRole("tab",{name:"Second Tab"}),e=await d.getByRole("tab",{name:"Third Tab"}),o=async g=>{F(g).toHaveAttribute("aria-selected","true"),F(g).toHaveFocus(),F(d.getByText(`Contenu onglet ${g.textContent}`)).toBeVisible()};await t("Focus on the first tab and select it",async()=>{await v.tab(),o(a)}),await t("Navigate to the second tab and select it",async()=>{await v.keyboard(R),o(l)}),await t("Navigate to the second tab and select it",async()=>{await v.keyboard(R),o(e)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await v.keyboard(R),o(a)}),await t("Navigate back to the third tab and select it",async()=>{await v.keyboard(ge),o(e)})}};var O,W,V;S.parameters={...S.parameters,docs:{...(O=S.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(V=(W=S.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var G,P,Y;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(P=k.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var D,$,z;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(z=($=w.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var J,Q,U;E.parameters={...E.parameters,docs:{...(J=E.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,te;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(te=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var de,le,ie;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    const expectTabToBeSelected = async (tab: HTMLElement) => {
      expect(tab).toHaveAttribute("aria-selected", "true");
      expect(tab).toHaveFocus();
      expect(canvas.getByText(\`Contenu onglet \${tab.textContent}\`)).toBeVisible();
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
    await step("Navigate back to the first tab when there are no next tabs", async () => {
      await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
      expectTabToBeSelected(firstTab);
    });
    await step("Navigate back to the third tab and select it", async () => {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      expectTabToBeSelected(thirdTab);
    });
  }
}`,...(ie=(le=B.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Fe=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","KeyboardInteraction"];export{w as CompactSpacing,S as Default,j as IconsOnly,B as KeyboardInteraction,k as Vertical,_ as WithBadge,E as WithIcons,Fe as __namedExportsOrder,Re as default};
