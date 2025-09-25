import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-G8LIXM5I.js";import{u as j}from"./useSelectedIndicatorPosition-CMsoo0hf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const m={"tab-container":"_tab-container_17ziu_3","segment-selected-indicator":"_segment-selected-indicator_17ziu_17"},E="_tabitem_1kvsi_3",S={tabitem:E},I=({tabId:i,tabPanelId:n,label:t,selected:a,onClick:l})=>e.jsx("button",{className:S.tabitem,role:"tab","aria-selected":a,"aria-controls":n,id:i,tabIndex:a?0:-1,"data-selected":a,onClick:l,children:t});I.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{tabId:{required:!0,tsType:{name:"string"},description:""},tabPanelId:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]}]},name:"event"}],return:{name:"void"}}},description:""}}};const c=({options:i,onChange:n,direction:t="horizontal",alignment:a="start",selectedTabId:l})=>{const d=p.useRef(null),s=j(d,l,t==="horizontal"?"bottom":"left"),C=r=>{const f=r.currentTarget.getAttribute("id")||"";n(f)};return e.jsxs("div",{role:"tablist","aria-label":"Sample Tabs",className:m["tab-container"],ref:d,"data-alignment":a,"data-direction":t,children:[e.jsx("span",{className:m["segment-selected-indicator"],style:{left:s.left,width:s.width,top:s.top,height:s.height}}),i.map((r,u)=>e.jsx(I,{tabId:r.id,tabPanelId:r.panelId,label:r.label,onClick:C,selected:l===r.id},`${r.id}-${u}`))]})};c.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; panelId: string; label: string; selected?: boolean }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"panelId",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"selected",value:{name:"boolean",required:!1}}]}}],raw:"{ id: string; panelId: string; label: string; selected?: boolean }[]"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:'"start" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},selectedTabId:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Tab",component:c,argTypes:{options:{control:"object"},alignment:{control:"select",options:["start","center"]},onChange:{action:"tab changed"},direction:{control:"select",options:["horizontal","vertical"]}}},o={args:{onChange:()=>{},options:[],alignment:"start"},render:i=>{const[n,t]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=d=>{t(d)};return e.jsxs(e.Fragment,{children:[e.jsx(c,{...i,options:a,selectedTabId:n,onChange:l}),e.jsxs("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:[e.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),e.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),e.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}},b={args:{onChange:()=>{},options:[],alignment:"start",direction:"vertical"},render:i=>{const[n,t]=p.useState("tab-1"),a=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],l=d=>{t(d)};return e.jsx(e.Fragment,{children:e.jsxs("div",{style:{display:"flex",gap:"16px",height:"200px"},children:[e.jsx(c,{...i,options:a,selectedTabId:n,onChange:l}),e.jsxs("div",{style:{width:"100%",border:"1px solid #ccc",padding:"8px"},children:[e.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),e.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),e.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})})}};var g,T,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
      </>;
  }
}`,...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var v,y,x;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(y=b.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const z=["Default","Vertical"];export{o as Default,b as Vertical,z as __namedExportsOrder,R as default};
