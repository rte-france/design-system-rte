import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,e as i,u as r,a as B}from"./index-DCXJbAaW.js";import{r as X}from"./index-G8LIXM5I.js";import{R as Y,T as Z}from"./Icon-DjEid3Hw.js";import{B as t}from"./Badge-Dn6YlCGY.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const $=Object.keys(Y),ee=Object.keys(Z),le={title:"Composants/Badge/Badge",component:t,tags:["autodocs"],argTypes:{badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type of badge",defaultValue:"brand"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the badge",defaultValue:"M"},content:{control:"select",options:["number","icon","empty"],description:"Content type of the badge",defaultValue:"number"},count:{control:"number",description:"Count to display when content is 'text'",defaultValue:1},icon:{control:"select",options:[...$,...ee].sort((n,a)=>n.localeCompare(a)),description:"Icon to display when content is 'icon'"}}},d=e.jsx("span",{style:{display:"inline-block",width:48,height:48,background:"orange",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:"bold",fontSize:16}}),c={args:{badgeType:"brand",size:"m",content:"number",count:1,children:d}},l={args:{badgeType:"brand",size:"m",content:"icon",icon:"notification",children:d}},g={args:{icon:"notification",count:1,children:d},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[e.jsx("h4",{children:"content: Text"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs"}),e.jsx(t,{...n,size:"s","data-testid":"badge-text-s"}),e.jsx(t,{...n,size:"m","data-testid":"badge-text-m"}),e.jsx(t,{...n,size:"l"})]}),e.jsx("h4",{children:"content: Icon"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs",content:"icon"}),e.jsx(t,{...n,size:"s",content:"icon","data-testid":"badge-icon-s"}),e.jsx(t,{...n,size:"m",content:"icon","data-testid":"badge-icon-m"}),e.jsx(t,{...n,size:"l",content:"icon"})]}),e.jsx("h4",{children:"content: Empty"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs",content:"empty"}),e.jsx(t,{...n,size:"s",content:"empty","data-testid":"badge-empty-s"}),e.jsx(t,{...n,size:"m",content:"empty"}),e.jsx(t,{...n,size:"l",content:"empty"})]})]}),play:async({canvasElement:n})=>{const a=h(n),s=a.getByTestId("badge-text-s").querySelector("[data-testid='badge']");i(s).not.toBeVisible();const o=a.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");i(o).not.toBeVisible();const P=a.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");i(P).toBeVisible();const Q=a.getByTestId("badge-text-m").querySelector("[data-testid='badge']");i(Q).toBeVisible();const U=a.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");i(U).toBeVisible()}},p={args:{content:"empty",count:1,children:d},argTypes:{size:{control:"select",options:["xs","s","m","l"]}},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,size:"xs"}),e.jsx(t,{...n,size:"s"}),e.jsx(t,{...n,size:"m"}),e.jsx(t,{...n,size:"l"})]})},m={args:{badgeType:"indicator",content:"number",size:"m",children:d},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,count:5}),e.jsx(t,{...n,count:99}),e.jsx(t,{...n,count:100})]})},b={args:{badgeType:"brand",content:"icon",size:"m",icon:"notification",children:d},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,icon:"notification"}),e.jsx(t,{...n,icon:"home"}),e.jsx(t,{...n,icon:"user"}),e.jsx(t,{...n,icon:"search"}),e.jsx(t,{...n,icon:"heart"}),e.jsx(t,{...n,icon:"star"})]})},ne=n=>{const[a,s]=X.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{children:e.jsx(t,{...n,count:a})}),e.jsx("hr",{}),e.jsx("label",{children:"Badge Count"}),e.jsx("input",{id:"badge-count-input",type:"number",value:a,onChange:o=>s(Number(o.target.value)),"data-testid":"badge-count-input"})]})},y={args:{badgeType:"brand",content:"number",size:"m",count:1,children:d},render:ne,play:async({canvasElement:n})=>{const a=h(n),s=a.getByTestId("badge-count-input"),o=a.getByTestId("badge");i(o).toBeVisible(),await r.clear(s),await r.type(s,"0"),await B(()=>i(o).not.toBeVisible()),await r.clear(s),await r.type(s,"1"),await B(()=>i(o).toBeVisible())}},u={args:c.args,play:async({canvasElement:n})=>{const s=h(n).getByTestId("badge");await r.tab(),i(s).not.toHaveFocus()}},x={args:c.args,render:n=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Brand"}),e.jsx(t,{...n,badgeType:"brand"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(t,{...n,badgeType:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Indicator"}),e.jsx(t,{...n,badgeType:"indicator"})]})]})};var v,j,f;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    content: "number",
    count: 1,
    children: mockChildren
  }
}`,...(f=(j=c.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var I,T,z;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    content: "icon",
    icon: "notification",
    children: mockChildren
  }
}`,...(z=(T=l.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var S,w,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    icon: "notification",
    count: 1,
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito Sans, sans-serif"
  }}>
      <h4>content: Text</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" />
        <Badge {...args} size="s" data-testid="badge-text-s" />
        <Badge {...args} size="m" data-testid="badge-text-m" />
        <Badge {...args} size="l" />
      </div>
      <h4>content: Icon</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" content="icon" />
        <Badge {...args} size="s" content="icon" data-testid="badge-icon-s" />
        <Badge {...args} size="m" content="icon" data-testid="badge-icon-m" />
        <Badge {...args} size="l" content="icon" />
      </div>
      <h4>content: Empty</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" content="empty" />
        <Badge {...args} size="s" content="empty" data-testid="badge-empty-s" />
        <Badge {...args} size="m" content="empty" />
        <Badge {...args} size="l" content="empty" />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badgeTextS = canvas.getByTestId("badge-text-s").querySelector("[data-testid='badge']");
    expect(badgeTextS).not.toBeVisible();
    const badgeIconS = canvas.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");
    expect(badgeIconS).not.toBeVisible();
    const badgeEmptyS = canvas.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");
    expect(badgeEmptyS).toBeVisible();
    const badgeTextM = canvas.getByTestId("badge-text-m").querySelector("[data-testid='badge']");
    expect(badgeTextM).toBeVisible();
    const badgeIconM = canvas.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");
    expect(badgeIconM).toBeVisible();
  }
}`,...(C=(w=g.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var V,E,k;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    content: "empty",
    count: 1,
    children: mockChildren
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l"]
    }
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} size="xs" />
      <Badge {...args} size="s" />
      <Badge {...args} size="m" />
      <Badge {...args} size="l" />
    </div>
}`,...(k=(E=p.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var D,q,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    badgeType: "indicator",
    content: "number",
    size: "m",
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} count={5} />
      <Badge {...args} count={99} />
      <Badge {...args} count={100} />
    </div>
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,N,R;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    content: "icon",
    size: "m",
    icon: "notification",
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} icon="notification" />
      <Badge {...args} icon="home" />
      <Badge {...args} icon="user" />
      <Badge {...args} icon="search" />
      <Badge {...args} icon="heart" />
      <Badge {...args} icon="star" />
    </div>
}`,...(R=(N=b.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var O,H,K;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    content: "number",
    size: "m",
    count: 1,
    children: mockChildren
  },
  render: BadgeVisibilityDemo,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badgeCountInput = canvas.getByTestId("badge-count-input");
    const badge = canvas.getByTestId("badge");
    expect(badge).toBeVisible();
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "0");
    await waitFor(() => expect(badge).not.toBeVisible());
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "1");
    await waitFor(() => expect(badge).toBeVisible());
  }
}`,...(K=(H=y.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,_,W;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: Default.args,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  }
}`,...(W=(_=u.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var A,G,J;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: Default.args,
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center",
    fontFamily: "Nunito Sans, sans-serif"
  }}>
      <div>
        <h4>Brand</h4>
        <Badge {...args} badgeType="brand" />
      </div>
      <div>
        <h4>Neutral</h4>
        <Badge {...args} badgeType="neutral" />
      </div>
      <div>
        <h4>Indicator</h4>
        <Badge {...args} badgeType="indicator" />
      </div>
    </div>
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ge=["Default","IconBadge","BadgeDisplay","Sizes","CountLimit","Icons","BadgeVisibility","KeyboardInteraction","BadgeType"];export{g as BadgeDisplay,x as BadgeType,y as BadgeVisibility,m as CountLimit,c as Default,l as IconBadge,b as Icons,u as KeyboardInteraction,p as Sizes,ge as __namedExportsOrder,le as default};
