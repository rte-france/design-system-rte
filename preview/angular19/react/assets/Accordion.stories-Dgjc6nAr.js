import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as an,u as m,e as k}from"./index-4rjIhT2C.js";import{r as l}from"./index-G8LIXM5I.js";import{f as tn}from"./testing.utils-mIZIUNbM.js";import{u as on}from"./useAnimatedMount-_zPBpYOt.js";import{D as ln}from"./Divider-BMotkXeQ.js";import{I as h}from"./Icon-DgLH6pPJ.js";import{c as rn}from"./index-DSdvzt-y.js";import{v as dn}from"./v4-C6aID195.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const A={small:16,large:32},mn="_accordion_1904k_1",a={accordion:mn,"accordion-summary-container":"_accordion-summary-container_1904k_7","accordion-summary":"_accordion-summary_1904k_7","accordion-chevron":"_accordion-chevron_1904k_65","accordion-title":"_accordion-title_1904k_76","accordion-content":"_accordion-content_1904k_96"},e=l.forwardRef(({id:i,children:r,icon:c,alignement:t="right",disabled:x=!1,isOpen:f,appearance:Q="brand",compactSpacing:U=!1,size:d="small",title:W,onClick:q,className:X,...Y},Z)=>{var L;const[o,D]=l.useState(f??!1),j=l.useRef(null),S=l.useRef(i??dn()),F=`accordion-summary-${S.current}`,w=`accordion-content-${S.current}`;l.useEffect(()=>{D(f??!1)},[f]);const nn=sn=>{x||(D(cn=>!cn),q&&q(sn))},{shouldRender:en,isAnimating:v}=on(o,120);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:a.accordion,"data-open":o,children:[n.jsx("button",{ref:Z,type:"button","data-testid":"accordion-button","data-appearance":Q,"data-compact-spacing":U,"data-size":d,className:rn(a["accordion-summary-container"],X),onClick:nn,disabled:x,"aria-expanded":o,"aria-controls":w,...Y,children:n.jsxs("div",{className:a["accordion-summary"],id:F,children:[t==="left"&&n.jsx(h,{className:a["accordion-chevron"],"data-animating":v,name:"arrow-chevron-down",size:A[d]}),c&&n.jsx(h,{name:c,size:A[d]}),n.jsx("span",{className:a["accordion-title"],"data-size":d,children:W}),t==="right"&&n.jsx(h,{className:a["accordion-chevron"],"data-animating":v,name:"arrow-chevron-down",size:A[d]})]})}),en&&n.jsx(n.Fragment,{children:n.jsx("div",{className:a["accordion-content"],"data-open":o,"data-animating":v,"data-disabled":x,id:w,"aria-hidden":!o,"aria-labelledby":F,role:"region",style:{height:o?(L=j.current)==null?void 0:L.scrollHeight:0},children:n.jsx("div",{ref:j,children:r})})}),n.jsx(ln,{thickness:"light"})]})})});e.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},alignement:{defaultValue:{value:'"right"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"small"',computed:!1},required:!1}},composes:["coreAccordionProps","Omit"]};const Dn={title:"Composants/Accordion",component:e,argTypes:{alignement:{options:["left","right"],control:{type:"radio"}},appearance:{options:["brand","neutral"],control:{type:"radio"}},compactSpacing:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},size:{options:["small","large"],control:{type:"radio"}},title:{control:{type:"text"}}}},s={args:{alignement:"right",icon:"power-wind",disabled:!1,isOpen:!1,appearance:"brand",compactSpacing:!1,size:"small",title:"Accordion title"},render:i=>n.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),play:async({canvasElement:i})=>{const c=await an(i).findAllByTestId("accordion-button");tn(i),await m.tab(),await m.keyboard("{Enter}"),await m.tab(),await m.keyboard("{Enter}"),k(c[0]).toHaveAttribute("aria-expanded","true"),k(c[1]).toHaveAttribute("aria-expanded","true")}},u={args:{...s.args},render:i=>n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})},p={args:{...s.args,appearance:"neutral"},render:i=>n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})},g={args:{...s.args,compactSpacing:!0},render:i=>n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]}),n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})]})},b={args:{...s.args,disabled:!0},render:i=>n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]}),n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})]})},y={args:{...s.args},render:i=>{const[r,c]=l.useState(null);return n.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px",overflow:"scroll",height:"200px"},children:[n.jsx(e,{...i,isOpen:r===0,onClick:()=>c(t=>t===0?null:0),children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,isOpen:r===1,onClick:()=>c(t=>t===1?null:1),children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})}};var z,C,I;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    alignement: "right",
    icon: "power-wind",
    disabled: false,
    isOpen: false,
    appearance: "brand",
    compactSpacing: false,
    size: "small",
    title: "Accordion title"
  },
  render: args => <div style={{
    width: "400px",
    background: "#C7DBF0",
    padding: "16px"
  }}>
      <Accordion {...args}>
        <p style={{
        margin: 0,
        fontFamily: "Arial"
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
      <Accordion {...args}>
        <p style={{
        margin: 0,
        fontFamily: "Arial"
      }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
          tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
        </p>
      </Accordion>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.findAllByTestId("accordion-button");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  }
}`,...(I=(C=s.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var B,_,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => <div style={{
    background: "#C7DBF0",
    padding: "16px",
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      width: "400px"
    }}>
        <Accordion {...args}>
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="left">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
      <div style={{
      width: "400px"
    }}>
        <Accordion {...args} alignement="left" size="large">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="right" size="large">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
    </div>
}`,...(R=(_=u.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,N,O;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  },
  render: args => <div style={{
    background: "#C7DBF0",
    padding: "16px",
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      width: "400px"
    }}>
        <Accordion {...args}>
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="left">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
      <div style={{
      width: "400px"
    }}>
        <Accordion {...args} alignement="left" size="large">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} alignement="right" size="large">
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>
    </div>
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var H,V,T;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      background: "#C7DBF0",
      padding: "16px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args}>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} alignement="left" size="large">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
      <div style={{
      background: "#C7DBF0",
      padding: "16px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} appearance="neutral">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left" appearance="neutral">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} alignement="left" size="large" appearance="neutral">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large" appearance="neutral">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
}`,...(T=(V=g.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var M,$,P;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>
      <div style={{
      background: "#C7DBF0",
      padding: "16px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args}>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} alignement="left" size="large">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large">
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
      <div style={{
      background: "#C7DBF0",
      padding: "16px",
      display: "flex",
      flexDirection: "column"
    }}>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} compactSpacing>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="left" compactSpacing>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
        <div style={{
        width: "400px"
      }}>
          <Accordion {...args} alignement="left" size="large" compactSpacing>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
          <Accordion {...args} alignement="right" size="large" compactSpacing>
            <p style={{
            margin: 0,
            fontFamily: "Arial"
          }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
              tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
            </p>
          </Accordion>
        </div>
      </div>
    </div>
}`,...(P=($=b.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var G,J,K;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Default.args
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
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
        <Accordion {...args} isOpen={openIndex === 1} onClick={() => setOpenIndex(prevIndex => prevIndex === 1 ? null : 1)}>
          <p style={{
          margin: 0,
          fontFamily: "Arial"
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed
            tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi.
          </p>
        </Accordion>
      </div>;
  }
}`,...(K=(J=y.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const jn=["Default","Brand","Neutral","Compact","Disabled","Exclusive"];export{u as Brand,g as Compact,s as Default,b as Disabled,y as Exclusive,p as Neutral,jn as __namedExportsOrder,Dn as default};
