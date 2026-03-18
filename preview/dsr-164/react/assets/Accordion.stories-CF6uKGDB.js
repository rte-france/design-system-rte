import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{w as X,u as m,e as F}from"./index-4rjIhT2C.js";import{r as x}from"./index-G8LIXM5I.js";import{f as Y}from"./testing.utils-mIZIUNbM.js";import{u as Z}from"./useAnimatedMount-_zPBpYOt.js";import{D as nn}from"./Divider-cNGLKJiC.js";import{I as h}from"./Icon-DjEid3Hw.js";import{v as L}from"./v4-C6aID195.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const A={small:16,large:32},en="_accordion_1hy5u_1",a={accordion:en,"accordion-summary-container":"_accordion-summary-container_1hy5u_8","accordion-summary":"_accordion-summary_1hy5u_8","accordion-chevron":"_accordion-chevron_1hy5u_66","accordion-title":"_accordion-title_1hy5u_72","accordion-content":"_accordion-content_1hy5u_92"},e=({id:i,children:o,icon:s,alignement:t="right",disabled:f=!1,isOpen:v,appearance:J="brand",compactSpacing:K=!1,size:l="small",onClick:q})=>{var S;const[r,D]=x.useState(v??!1),j=x.useRef(null);x.useEffect(()=>{D(v??!1)},[v]);const Q=U=>{f||(D(W=>!W),q&&q(U))},{isAnimating:d}=Z(r,120);return n.jsx(n.Fragment,{children:n.jsxs("div",{className:a.accordion,"data-open":r,children:[n.jsx("button",{"data-testid":"accordion-button","data-appearance":J,"data-compact-spacing":K,"data-size":l,className:a["accordion-summary-container"],onClick:Q,disabled:f,"aria-expanded":r,"aria-controls":`accordion-content-${i??L()}`,children:n.jsxs("div",{className:a["accordion-summary"],id:`accordion-summary-${i??L()}`,children:[t==="left"&&n.jsx(h,{className:a["accordion-chevron"],"data-animating":d,name:"arrow-chevron-down",size:A[l]}),s&&n.jsx(h,{name:s,size:A[l]}),n.jsx("span",{className:a["accordion-title"],"data-size":l,children:"Accordion title"})," ",t==="right"&&n.jsx(h,{className:a["accordion-chevron"],"data-animating":d,name:"arrow-chevron-down",size:A[l]})]})}),n.jsx("div",{ref:j,className:a["accordion-content"],"data-open":r,"data-animating":d,"data-disabled":f,"aria-hidden":!r,style:{height:d?(S=j.current)==null?void 0:S.scrollHeight:0},children:o}),n.jsx(nn,{thickness:"light"})]})})};e.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},alignement:{defaultValue:{value:'"right"',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1},compactSpacing:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"small"',computed:!1},required:!1}},composes:["coreAccordionProps"]};const pn={title:"Composants/Accordion",component:e,argTypes:{alignement:{options:["left","right"],control:{type:"radio"}},appearance:{options:["brand","neutral"],control:{type:"radio"}},compactSpacing:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},size:{options:["small","large"],control:{type:"radio"}}}},c={args:{alignement:"right",icon:"power-wind",disabled:!1,isOpen:!1,appearance:"brand",compactSpacing:!1,size:"small"},render:i=>n.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),play:async({canvasElement:i})=>{const s=await X(i).findAllByTestId("accordion-button");console.log(s),Y(i),m.tab(),await m.keyboard("{Enter}"),await m.tab(),await m.keyboard("{Enter}"),F(s[0]).toHaveAttribute("aria-expanded","true"),F(s[1]).toHaveAttribute("aria-expanded","true")}},u={args:{...c.args},render:i=>n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})},p={args:{...c.args,appearance:"neutral"},render:i=>n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})},g={args:{...c.args,compactSpacing:!0},render:i=>n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]}),n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",appearance:"neutral",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})]})},b={args:{...c.args,disabled:!0},render:i=>n.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]}),n.jsxs("div",{style:{background:"#C7DBF0",padding:"16px",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"left",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]}),n.jsxs("div",{style:{width:"400px"},children:[n.jsx(e,{...i,alignement:"left",size:"large",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,alignement:"right",size:"large",compactSpacing:!0,children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})]})]})},y={args:{...c.args},render:i=>{const[o,s]=x.useState(null);return n.jsxs("div",{style:{width:"400px",background:"#C7DBF0",padding:"16px",overflow:"scroll",height:"200px"},children:[n.jsx(e,{...i,isOpen:o===0,onClick:()=>s(t=>t===0?null:0),children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nisl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})}),n.jsx(e,{...i,isOpen:o===1,onClick:()=>s(t=>t===1?null:1),children:n.jsx("p",{style:{margin:0,fontFamily:"Arial"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc accumsan bibendum. Sed tristique, nsl a bibendum commodo, nisl nunc consectetur nisi, euismod aliquam nisl nunc euismod nisi."})})]})}};var w,z,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    console.log(buttons);
    focusElementBeforeComponent(canvasElement);
    userEvent.tab();
    await userEvent.keyboard("{Enter}");
    await userEvent.tab();
    await userEvent.keyboard("{Enter}");
    expect(buttons[0]).toHaveAttribute("aria-expanded", "true");
    expect(buttons[1]).toHaveAttribute("aria-expanded", "true");
  }
}`,...(k=(z=c.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var C,B,_;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(_=(B=u.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var I,E,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(N=(E=p.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var R,O,H;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(H=(O=g.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var V,T,M;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(T=b.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var $,P,G;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(G=(P=y.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const gn=["Default","Brand","Neutral","Compact","Disabled","Exclusive"];export{u as Brand,g as Compact,c as Default,b as Disabled,y as Exclusive,p as Neutral,gn as __namedExportsOrder,pn as default};
