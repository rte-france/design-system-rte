import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as q,c as pe}from"./keyboard-test.constants-BHMvM5a0.js";import{w as ge,u as x,e as y}from"./index-DaW6VCyr.js";import{r as o}from"./index-G8LIXM5I.js";import{u as ue}from"./useSelectedIndicatorPosition-CMsoo0hf.js";import{a as me,A as M}from"./keyboard.constants-YQ0IdItO.js";import{B as Te}from"./Badge-BHtUYWmb.js";import{I as he}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const K={"tab-container":"_tab-container_17ziu_3","segment-selected-indicator":"_segment-selected-indicator_17ziu_17"},xe="_tabitem_1ildu_3",B={tabitem:xe,"segment-hover-indicator":"_segment-hover-indicator_1ildu_39"},le=({id:l,panelId:t,label:i,isSelected:a,badgeCount:s,badgeAppearance:e,badgeIcon:r,onClick:g,icon:c,badgeType:u="indicator",compactSpacing:I,direction:v,...de})=>{const oe=s||r&&e==="icon",re={count:s,appearance:e,icon:r,badgeType:u},b=o.useRef(null),[d,f]=o.useState(null),F=o.useCallback(m=>{b.current&&!a&&f(m==="mouseover"?T=>({...T,opacity:1}):T=>({...T,opacity:0}))},[a]),ce=m=>{[me,M].includes(m.key)&&(m.preventDefault(),m.key===M?H("next"):H("previous"))},H=m=>{var N;const T=(N=b.current)==null?void 0:N.parentElement;if(!T)return;const h=Array.from(T.querySelectorAll(`.${B.tabitem}`)),A=h.findIndex(be=>be===document.activeElement);let C;m==="next"?C=(A+1)%h.length:C=(A-1+h.length)%h.length,h[C].focus(),h[C].click()};return o.useEffect(()=>{b.current&&(console.log(v),v==="horizontal"?f({width:b.current.offsetWidth,left:b.current.offsetLeft,top:b.current.offsetTop+b.current.offsetHeight,opacity:0}):(console.log("vertical"),f({left:b.current.offsetLeft-2,top:b.current.offsetTop,height:b.current.offsetHeight,opacity:0})))},[a,v]),n.jsxs(n.Fragment,{children:[n.jsxs("button",{id:l,className:B.tabitem,role:"tab","aria-selected":a,"aria-controls":t,tabIndex:a?0:-1,"data-selected":a,onClick:g,"data-compact-spacing":I,ref:b,onKeyDown:ce,onMouseEnter:()=>F("mouseover"),onMouseLeave:()=>F("mouseleave"),...a&&{"data-testid":"tabitem-selected"},...de,children:[c&&n.jsx(he,{name:c,appearance:a?"filled":"outlined"}),i&&n.jsx("span",{children:i}),oe&&n.jsx(Te,{...re})]}),n.jsx("span",{className:B["segment-hover-indicator"],style:{width:d==null?void 0:d.width,height:d==null?void 0:d.height,left:d==null?void 0:d.left,top:d==null?void 0:d.top,opacity:d==null?void 0:d.opacity}})]})};le.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{id:{required:!0,tsType:{name:"string"},description:""},panelId:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"string"},description:""},badgeCount:{required:!1,tsType:{name:"number"},description:""},badgeAppearance:{required:!1,tsType:{name:"BadgeAppearance"},description:""},badgeIcon:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"BadgeType"},description:"",defaultValue:{value:'"indicator"',computed:!1}},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const p=({options:l,onChange:t,direction:i="horizontal",alignment:a="start",selectedTabId:s,compactSpacing:e})=>{const r=o.useRef(null),g=ue(r,s,i==="horizontal"?"bottom":"left"),c=u=>{const v=u.currentTarget.getAttribute("id")||"";t(v)};return n.jsxs("div",{role:"tablist","aria-label":"Sample Tabs",className:K["tab-container"],ref:r,"data-alignment":a,"data-direction":i,children:[n.jsx("span",{className:K["segment-selected-indicator"],style:{left:g.left,width:g.width,top:g.top,height:g.height}}),l.map((u,I)=>n.jsx(le,{onClick:c,isSelected:s===u.id,compactSpacing:e,direction:i,...u},`${u.id}-${I}`))]})};p.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  panelId: string;
  label?: string;
  selected?: boolean;
  icon?: string;
  badgeCount?: number;
  badgeAppearance?: "text" | "icon";
  badgeIcon?: string;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"panelId",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"selected",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"string",required:!1}},{key:"badgeCount",value:{name:"number",required:!1}},{key:"badgeAppearance",value:{name:"union",raw:'"text" | "icon"',elements:[{name:"literal",value:'"text"'},{name:"literal",value:'"icon"'}],required:!1}},{key:"badgeIcon",value:{name:"string",required:!1}}]}}],raw:`{
  id: string;
  panelId: string;
  label?: string;
  selected?: boolean;
  icon?: string;
  badgeCount?: number;
  badgeAppearance?: "text" | "icon";
  badgeIcon?: string;
}[]`},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},selectedTabId:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""}}};const _e={title:"Tab",component:p,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]},selectedTabId:{control:"text"},compactSpacing:{control:"boolean"}}},k={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,i]=o.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{i(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},S={args:{onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:l=>{const[t,i]=o.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{i(e)};return n.jsx(n.Fragment,{children:n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[n.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:t!=="tab-1",children:"Contenu onglet 1"}),n.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:t!=="tab-2",children:"Contenu onglet 2"}),n.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:t!=="tab-3",children:"Contenu onglet 3"})]})]})})}},w={args:{onChange:()=>{},options:[],alignment:"start",compactSpacing:!0},render:l=>{const[t,i]=o.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{i(e)};return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[n.jsxs("div",{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]}),n.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[n.jsx(p,{...l,direction:"vertical",options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})]})}},E={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,i]=o.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{i(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},j={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,i]=o.useState("home"),a=[{id:"home",panelId:"panel-1",icon:"home"},{id:"bookmarks",panelId:"panel-2",icon:"bookmarks"},{id:"chat",panelId:"panel-3",icon:"chat"},{id:"settings",panelId:"panel-3",icon:"settings"}],s=e=>{i(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.id]},e.id))})]})}},R={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,i]=o.useState("photos"),a=[{id:"photos",label:"Photos",panelId:"panel-1",icon:"photo-camera",badgeCount:5,badgeType:"indicator"},{id:"videos",label:"Vidéos",panelId:"panel-2",icon:"video-camera"},{id:"musique",label:"Musique",panelId:"panel-3",icon:"headphones"}],s=e=>{i(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})}},_={args:{onChange:()=>{},options:[],alignment:"start"},render:l=>{const[t,i]=o.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],s=e=>{i(e)};return n.jsxs(n.Fragment,{children:[n.jsx(p,{...l,options:a,selectedTabId:t,onChange:s}),n.jsx("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:a.map(e=>n.jsxs("div",{role:"tabpanel",id:e.panelId,"aria-labelledby":e.id,hidden:t!==e.id,children:["Contenu onglet ",e.label]},e.id))})]})},play:async({canvasElement:l,step:t})=>{const i=ge(l),a=await i.getByRole("tab",{name:"First Tab"}),s=await i.getByRole("tab",{name:"Second Tab"}),e=await i.getByRole("tab",{name:"Third Tab"}),r=async c=>{y(c).toHaveAttribute("aria-selected","true"),y(c).toHaveFocus(),y(i.getByText(`Contenu onglet ${c.textContent}`)).toBeVisible()},g=()=>{[a,s,e].forEach(c=>{y(c).toHaveAttribute("aria-selected","false"),y(c).not.toHaveFocus()})};await t("Focus on the first tab and select it",async()=>{await x.tab(),r(a)}),await t("Navigate to the second tab and select it",async()=>{await x.keyboard(q),r(s)}),await t("Navigate to the second tab and select it",async()=>{await x.keyboard(q),r(e)}),await t("Navigate back to the first tab when there are no next tabs",async()=>{await x.keyboard(q),r(a)}),await t("Navigate back to the third tab and select it",async()=>{await x.keyboard(pe),r(e)}),await t("move focus out of component",async()=>{await x.tab(),g()})}};var L,W,O;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(O=(W=k.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var z,G,V;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    return <>
        <div style={{
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
        </div>
      </>;
  }
}`,...(V=(G=S.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var D,Y,P;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(P=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var $,U,J;E.parameters={...E.parameters,docs:{...($=E.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(U=E.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ne,ae;R.parameters={...R.parameters,docs:{...(ee=R.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
      badgeType: "indicator"
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
}`,...(ae=(ne=R.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,ie,se;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
    const expectAllTabsToBeUnselected = () => {
      [firstTab, secondTab, thirdTab].forEach(tab => {
        expect(tab).toHaveAttribute("aria-selected", "false");
        expect(tab).not.toHaveFocus();
      });
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
    await step("move focus out of component", async () => {
      await userEvent.tab();
      expectAllTabsToBeUnselected();
    });
  }
}`,...(se=(ie=_.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};const qe=["Default","Vertical","CompactSpacing","WithIcons","IconsOnly","WithBadge","KeyboardInteraction"];export{w as CompactSpacing,k as Default,j as IconsOnly,_ as KeyboardInteraction,S as Vertical,R as WithBadge,E as WithIcons,qe as __namedExportsOrder,_e as default};
