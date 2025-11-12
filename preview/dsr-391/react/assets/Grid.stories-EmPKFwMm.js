import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{c as R}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";const E=({children:d,className:a,xxs:n,xs:x,s:N,m:w,l:F,xl:_,...P})=>{const r=(A,t)=>t?`${A}-${t}`:"",$=R("col",r("col-xxs",n),r("col-xs",x),r("col-s",N),r("col-m",w),r("col-l",F),r("col-xl",_),a);return e.jsx("div",{className:$,...P,children:d})},s=({gridType:d="fluid",className:a,children:n})=>{const x=R("grid",a);return e.jsx("div",{className:x,"data-gridtype":d,children:n})};s.Col=E;s.__docgenInfo={description:"",methods:[{name:"Col",docblock:null,modifiers:["static"],params:[{name:"{ children, className, xxs, xs, s, m, l, xl, ...props }: ColProps",optional:!1,type:{name:"ColProps",alias:"ColProps"}}],returns:null}],displayName:"Grid",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},gridType:{defaultValue:{value:'"fluid"',computed:!1},required:!1}},composes:["CoreGridProps","Omit"]};const O=12,U={title:"Grid",component:s,tags:["autodocs"],argTypes:{gridType:{control:"select",options:["fluid","fixed-narrow","fixed-wide"]}},decorators:[d=>e.jsx("div",{className:"sb-css-grid-container",children:e.jsx(d,{})})]},c=d=>e.jsx(s,{gridType:d.gridType,"data-testid":"grid",children:Array.from(Array(O)).map((a,n)=>e.jsx(s.Col,{"data-testid":`col${n}`},`col${n}`))}),p={args:{gridType:"fluid"},render:d=>c(d)},i={args:{gridType:"fixed-wide"},render:d=>c(d)},l={args:{gridType:"fixed-narrow"},render:d=>c(d)},o={args:{gridType:"fluid"},render:d=>e.jsxs(s,{gridType:d.gridType,"data-testid":"grid",children:[e.jsxs(s.Col,{xxs:1,xs:1,s:3,m:4,l:4,xl:12,"data-testid":"col0",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 1 de 2"}),e.jsx("p",{children:"xs : Span 1 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 4 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(s.Col,{xxs:1,xs:3,s:3,m:4,l:8,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 1 de 2"}),e.jsx("p",{children:"xs : Span 3 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 8 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(s.Col,{xxs:2,xs:2,s:3,m:4,l:10,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 2 de 2"}),e.jsx("p",{children:"xs : Span 2 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 10 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(s.Col,{xxs:2,xs:6,s:6,m:4,l:12,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 2 de 2"}),e.jsx("p",{children:"xs : Span 6 de 6"}),e.jsx("p",{children:"s : Span 6 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 12 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]})]})};var m,S,g;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    gridType: "fluid"
  },
  render: args => defaultRender(args)
}`,...(g=(S=p.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var u,j,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    gridType: "fixed-wide"
  },
  render: args => defaultRender(args)
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var v,C,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    gridType: "fixed-narrow"
  },
  render: args => defaultRender(args)
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};var y,T,G;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    gridType: "fluid"
  },
  render: args => {
    return <Grid gridType={args.gridType} data-testid="grid">
        <Grid.Col xxs={1} xs={1} s={3} m={4} l={4} xl={12} data-testid="col0">
          <div>
            <p>xxs : Span 1 de 2</p>
            <p>xs : Span 1 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 4 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={1} xs={3} s={3} m={4} l={8} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 1 de 2</p>
            <p>xs : Span 3 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 8 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={2} xs={2} s={3} m={4} l={10} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 2 de 2</p>
            <p>xs : Span 2 de 6</p>
            <p>s : Span 3 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 10 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
        <Grid.Col xxs={2} xs={6} s={6} m={4} l={12} xl={12} data-testid="col1">
          <div>
            <p>xxs : Span 2 de 2</p>
            <p>xs : Span 6 de 6</p>
            <p>s : Span 6 de 6</p>
          </div>
          <div>
            <p>m : Span 4 de 12</p>
            <p>l : Span 12 de 12</p>
            <p>xl : Span 12 de 12</p>
          </div>
        </Grid.Col>
      </Grid>;
  }
}`,...(G=(T=o.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};const W=["Fluid","FixedWide","FixedNarrow","ResponsiveColumns"];export{l as FixedNarrow,i as FixedWide,p as Fluid,o as ResponsiveColumns,W as __namedExportsOrder,U as default};
