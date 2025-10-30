import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{G as n}from"./Grid-D7MpEJbM.js";import"./index-yBjzXJbu.js";import"./index-DSdvzt-y.js";const y=12,F={title:"Grid",component:n,tags:["autodocs"],argTypes:{gridType:{control:"select",options:["fluid","fixed-narrow","fixed-wide"]}},decorators:[d=>e.jsx("div",{className:"sb-css-grid-container",children:e.jsx(d,{})})]},i=d=>e.jsx(n,{gridType:d.gridType,"data-testid":"grid",children:Array.from(Array(y)).map((C,x)=>e.jsx(n.Col,{"data-testid":`col${x}`},`col${x}`))}),s={args:{gridType:"fluid"},render:d=>i(d)},r={args:{gridType:"fixed-wide"},render:d=>i(d)},p={args:{gridType:"fixed-narrow"},render:d=>i(d)},a={args:{gridType:"fluid"},render:d=>e.jsxs(n,{gridType:d.gridType,"data-testid":"grid",children:[e.jsxs(n.Col,{xxs:1,xs:1,s:3,m:4,l:4,xl:12,"data-testid":"col0",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 1 de 2"}),e.jsx("p",{children:"xs : Span 1 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 4 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(n.Col,{xxs:1,xs:3,s:3,m:4,l:8,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 1 de 2"}),e.jsx("p",{children:"xs : Span 3 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 8 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(n.Col,{xxs:2,xs:2,s:3,m:4,l:10,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 2 de 2"}),e.jsx("p",{children:"xs : Span 2 de 6"}),e.jsx("p",{children:"s : Span 3 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 10 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]}),e.jsxs(n.Col,{xxs:2,xs:6,s:6,m:4,l:12,xl:12,"data-testid":"col1",children:[e.jsxs("div",{children:[e.jsx("p",{children:"xxs : Span 2 de 2"}),e.jsx("p",{children:"xs : Span 6 de 6"}),e.jsx("p",{children:"s : Span 6 de 6"})]}),e.jsxs("div",{children:[e.jsx("p",{children:"m : Span 4 de 12"}),e.jsx("p",{children:"l : Span 12 de 12"}),e.jsx("p",{children:"xl : Span 12 de 12"})]})]})]})};var l,c,o;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    gridType: "fluid"
  },
  render: args => defaultRender(args)
}`,...(o=(c=s.parameters)==null?void 0:c.docs)==null?void 0:o.source}}};var t,S,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    gridType: "fixed-wide"
  },
  render: args => defaultRender(args)
}`,...(m=(S=r.parameters)==null?void 0:S.docs)==null?void 0:m.source}}};var j,g,h;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    gridType: "fixed-narrow"
  },
  render: args => defaultRender(args)
}`,...(h=(g=p.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var u,v,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const N=["Fluid","FixedWide","FixedNarrow","ResponsiveColumns"];export{p as FixedNarrow,r as FixedWide,s as Fluid,a as ResponsiveColumns,N as __namedExportsOrder,F as default};
