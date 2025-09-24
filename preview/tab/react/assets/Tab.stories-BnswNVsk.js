import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-G8LIXM5I.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const T={"tab-container":"_tab-container_10wl2_1"},s=({children:t})=>e.jsx("div",{role:"tablist","aria-label":"Sample Tabs",className:T["tab-container"],children:t});s.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""}}};const u="_tabitem_1kqid_3",g={tabitem:u},p=({tabId:t,tabPanelId:n,label:i,selected:d,onClick:r})=>e.jsx("button",{className:g.tabitem,role:"tab","aria-selected":d,"aria-controls":n,id:t,tabIndex:d?0:-1,"data-selected":d,onClick:r,children:i});p.__docgenInfo={description:"",methods:[],displayName:"TabItem",props:{tabId:{required:!0,tsType:{name:"string"},description:""},tabPanelId:{required:!0,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v={title:"Tab",component:s},l={args:{children:[]},render:t=>{const[n,i]=m.useState("tab-1"),d=[{id:"tab-1",label:"First Tab",panelId:"panel-1"},{id:"tab-2",label:"Second Tab",panelId:"panel-2"},{id:"tab-3",label:"Third Tab",panelId:"panel-3"}],r=a=>{i(a)};return e.jsxs(e.Fragment,{children:[e.jsx(s,{...t,children:d.map(a=>e.jsx(p,{label:a.label,tabId:a.id,tabPanelId:a.panelId,selected:n===a.id,onClick:()=>r(a.id)},a.id))}),e.jsxs("div",{style:{height:"100px",border:"1px solid #ccc",padding:"8px",marginTop:"16px"},children:[e.jsx("div",{role:"tabpanel",id:"panel-1","aria-labelledby":"tab-1",hidden:n!=="tab-1",children:"Contenu onglet 1"}),e.jsx("div",{role:"tabpanel",id:"panel-2","aria-labelledby":"tab-2",hidden:n!=="tab-2",children:"Contenu onglet 2"}),e.jsx("div",{role:"tabpanel",id:"panel-3","aria-labelledby":"tab-3",hidden:n!=="tab-3",children:"Contenu onglet 3"})]})]})}};var b,o,c;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: []
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
        <Tab {...args}>
          {tabs.map(tab => <TabItem key={tab.id} label={tab.label} tabId={tab.id} tabPanelId={tab.panelId} selected={selectedTab === tab.id} onClick={() => handleTabClick(tab.id)} />)}
        </Tab>

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
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const R=["Default"];export{l as Default,R as __namedExportsOrder,v as default};
