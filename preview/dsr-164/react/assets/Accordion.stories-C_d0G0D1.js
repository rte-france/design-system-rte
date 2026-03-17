import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-G8LIXM5I.js";import{u as O}from"./useAnimatedMount-_zPBpYOt.js";import{D as N}from"./Divider-cNGLKJiC.js";import{I as p}from"./Icon-DjEid3Hw.js";import{v as f}from"./v4-C6aID195.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const k="_accordion_4yy6x_1",r={accordion:k,"accordion-summary-container":"_accordion-summary-container_4yy6x_8","accordion-summary":"_accordion-summary_4yy6x_8","accordion-title":"_accordion-title_4yy6x_65","accordion-content":"_accordion-content_4yy6x_85"},s=({id:i,children:t,icon:o,alignement:a="right",disabled:m=!1,isOpen:u,appearance:S="brand",compactSpacing:_=!1,size:c="small",onClick:x})=>{const[n,b]=g.useState(u??!1);g.useEffect(()=>{b(u??!1)},[u]);const I=D=>{m||(b(R=>!R),x&&x(D))},{isAnimating:A}=O(n,120);return e.jsx(e.Fragment,{children:e.jsxs("div",{className:r.accordion,"data-open":n,children:[e.jsx("button",{"data-appearance":S,"data-compact-spacing":_,"data-size":c,className:r["accordion-summary-container"],onClick:I,disabled:m,"aria-expanded":n,"aria-controls":`accordion-content-${i??f()}`,children:e.jsxs("div",{className:r["accordion-summary"],id:`accordion-summary-${i??f()}`,children:[a==="right"&&e.jsx(p,{name:n?"arrow-chevron-up":"arrow-chevron-down",size:c==="small"?16:32}),o&&e.jsx(p,{name:o,size:c==="small"?16:32}),e.jsx("span",{className:r["accordion-title"],"data-size":c,children:"Accordion title"})," ",a==="left"&&e.jsx(p,{name:n?"arrow-chevron-up":"arrow-chevron-down",size:c==="small"?16:32})]})}),!n&&e.jsx(N,{thickness:"light","data-open":n}),e.jsx("div",{className:r["accordion-content"],"data-open":n,"data-animating":A,"data-disabled":m,"aria-hidden":!n,children:t})]})})};s.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},alignement:{defaultValue:{value:'"right"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"small"',computed:!1},required:!1}},composes:["coreAccordionProps"]};const $={title:"Composants/Accordion",component:s,argTypes:{alignement:{options:["left","right"],control:{type:"radio"}},appearance:{options:["brand","neutral"],control:{type:"radio"}},compactSpacing:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},size:{options:["small","large"],control:{type:"radio"}}}},d={args:{alignement:"right",icon:"power-wind",disabled:!1,isOpen:!1,appearance:"brand",compactSpacing:!1,size:"small"},render:i=>e.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px"},children:[e.jsx(s,{...i,children:e.jsx("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),e.jsx(s,{...i,children:e.jsx("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})},l={args:{alignement:"right",icon:"power-wind",disabled:!1,isOpen:!1,appearance:"brand",compactSpacing:!1,size:"small"},render:i=>{const[t,o]=g.useState(null);return e.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px",overflow:"scroll",height:"200px"},children:[e.jsx(s,{...i,isOpen:t===0,onClick:()=>o(a=>a===0?null:0),children:e.jsx("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),e.jsx(s,{...i,isOpen:t===1,onClick:()=>o(a=>a===1?null:1),children:e.jsx("p",{style:{margin:0},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})}};var h,y,v;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    alignement: "right",
    icon: "power-wind",
    disabled: false,
    isOpen: false,
    appearance: "brand",
    compactSpacing: false,
    size: "small"
  },
  render: args => <div style={{
    width: "400px",
    background: "#C7DBF0",
    padding: "16px"
  }}>
      <Accordion {...args}>
        <p style={{
        margin: 0
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
      <Accordion {...args}>
        <p style={{
        margin: 0
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
    </div>
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var w,j,q;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    alignement: "right",
    icon: "power-wind",
    disabled: false,
    isOpen: false,
    appearance: "brand",
    compactSpacing: false,
    size: "small"
  },
  render: args => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return <div style={{
      width: "400px",
      background: "#C7DBF0",
      padding: "16px",
      overflow: "scroll",
      height: "200px"
    }}>
        <Accordion {...args} isOpen={openIndex === 0} onClick={() => setOpenIndex(prevIndex => prevIndex === 0 ? null : 0)}>
          <p style={{
          margin: 0
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} isOpen={openIndex === 1} onClick={() => setOpenIndex(prevIndex => prevIndex === 1 ? null : 1)}>
          <p style={{
          margin: 0
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>;
  }
}`,...(q=(j=l.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const M=["Default","Exclusive"];export{d as Default,l as Exclusive,M as __namedExportsOrder,$ as default};
