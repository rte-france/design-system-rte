import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as v,e as i,u as d,a as j}from"./index-4rjIhT2C.js";import{r as se}from"./index-G8LIXM5I.js";import{R as ie,T as oe}from"./Icon-DgLH6pPJ.js";import{B as t}from"./Badge-DkJhvK8e.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DJ8f9STe.js";const re=Object.keys(ie),ce=Object.keys(oe),he={title:"Composants/Badge/Badge",component:t,tags:["autodocs"],argTypes:{badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type of badge",defaultValue:"brand"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the badge",defaultValue:"M"},content:{control:"select",options:["number","icon","empty"],description:"Content type of the badge",defaultValue:"number"},count:{control:"number",description:"Count to display when content is 'text'",defaultValue:1},icon:{control:"select",options:[...re,...ce].sort((n,a)=>n.localeCompare(a)),description:"Icon to display when content is 'icon'"}}},r=e.jsx("span",{style:{display:"inline-block",width:48,height:48,background:"orange",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:"bold",fontSize:16}}),c={args:{badgeType:"brand",size:"m",content:"number",count:1,children:r}},g={args:{badgeType:"brand",size:"m",content:"number",count:1}},l={args:{badgeType:"brand",size:"m",content:"icon",icon:"notification",children:r}},p={args:{icon:"notification",count:1,children:r},render:n=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[e.jsx("h4",{children:"content: Text"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs"}),e.jsx(t,{...n,size:"s","data-testid":"badge-text-s"}),e.jsx(t,{...n,size:"m","data-testid":"badge-text-m"}),e.jsx(t,{...n,size:"l"})]}),e.jsx("h4",{children:"content: Icon"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs",content:"icon"}),e.jsx(t,{...n,size:"s",content:"icon","data-testid":"badge-icon-s"}),e.jsx(t,{...n,size:"m",content:"icon","data-testid":"badge-icon-m"}),e.jsx(t,{...n,size:"l",content:"icon"})]}),e.jsx("h4",{children:"content: Empty"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(t,{...n,size:"xs",content:"empty"}),e.jsx(t,{...n,size:"s",content:"empty","data-testid":"badge-empty-s"}),e.jsx(t,{...n,size:"m",content:"empty"}),e.jsx(t,{...n,size:"l",content:"empty"})]})]}),play:async({canvasElement:n})=>{const a=v(n),s=a.getByTestId("badge-text-s").querySelector("[data-testid='badge']");i(s).not.toBeVisible();const o=a.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");i(o).not.toBeVisible();const ne=a.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");i(ne).toBeVisible();const te=a.getByTestId("badge-text-m").querySelector("[data-testid='badge']");i(te).toBeVisible();const ae=a.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");i(ae).toBeVisible()}},m={args:{content:"empty",count:1,children:r},argTypes:{size:{control:"select",options:["xs","s","m","l"]}},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,size:"xs"}),e.jsx(t,{...n,size:"s"}),e.jsx(t,{...n,size:"m"}),e.jsx(t,{...n,size:"l"})]})},b={args:{badgeType:"indicator",content:"number",size:"m",children:r},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,count:5}),e.jsx(t,{...n,count:99}),e.jsx(t,{...n,count:100})]})},u={args:{badgeType:"brand",content:"number",size:"m",count:5,withPlusSign:!0}},y={args:{badgeType:"brand",content:"icon",size:"m",icon:"notification",children:r},render:n=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{...n,icon:"notification"}),e.jsx(t,{...n,icon:"home"}),e.jsx(t,{...n,icon:"user"}),e.jsx(t,{...n,icon:"search"}),e.jsx(t,{...n,icon:"heart"}),e.jsx(t,{...n,icon:"star"})]})},de=n=>{const[a,s]=se.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{children:e.jsx(t,{...n,count:a})}),e.jsx("hr",{}),e.jsx("label",{children:"Badge Count"}),e.jsx("input",{id:"badge-count-input",type:"number",value:a,onChange:o=>s(Number(o.target.value)),"data-testid":"badge-count-input"})]})},x={args:{badgeType:"brand",content:"number",size:"m",count:1,children:r},render:de,play:async({canvasElement:n})=>{const a=v(n),s=a.getByTestId("badge-count-input"),o=a.getByTestId("badge");i(o).toBeVisible(),await d.clear(s),await d.type(s,"0"),await j(()=>i(o).not.toBeVisible()),await d.clear(s),await d.type(s,"1"),await j(()=>i(o).toBeVisible())}},h={args:c.args,play:async({canvasElement:n})=>{const s=v(n).getByTestId("badge");await d.tab(),i(s).not.toHaveFocus()}},B={args:c.args,render:n=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",fontFamily:"Nunito Sans, sans-serif",color:"var(--content-primary)"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Brand"}),e.jsx(t,{...n,badgeType:"brand"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(t,{...n,badgeType:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Indicator"}),e.jsx(t,{...n,badgeType:"indicator"})]})]})};var f,I,T;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    content: "number",
    count: 1,
    children: mockChildren
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var z,S,w;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    content: "number",
    count: 1
  }
}`,...(w=(S=g.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,V,E;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    content: "icon",
    icon: "notification",
    children: mockChildren
  }
}`,...(E=(V=l.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var k,D,q;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(D=p.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var F,M,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(M=m.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var R,P,O;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(O=(P=b.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var W,H,K;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    content: "number",
    size: "m",
    count: 5,
    withPlusSign: true
  }
}`,...(K=(H=u.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var L,_,A;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(A=(_=y.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: Default.args,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: Default.args,
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center",
    fontFamily: "Nunito Sans, sans-serif",
    color: "var(--content-primary)"
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
}`,...(ee=($=B.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const Be=["Default","StandaloneBadge","IconBadge","BadgeDisplay","Sizes","CountLimit","WithPlusSign","Icons","BadgeVisibility","KeyboardInteraction","BadgeType"];export{p as BadgeDisplay,B as BadgeType,x as BadgeVisibility,b as CountLimit,c as Default,l as IconBadge,y as Icons,h as KeyboardInteraction,m as Sizes,g as StandaloneBadge,u as WithPlusSign,Be as __namedExportsOrder,he as default};
