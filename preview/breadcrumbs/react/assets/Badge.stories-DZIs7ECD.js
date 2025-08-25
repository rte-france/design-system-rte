import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,e as i,u as o,a as B}from"./index-DaW6VCyr.js";import{r as X}from"./index-G8LIXM5I.js";import{R as Y,T as Z}from"./Icon-DjEid3Hw.js";import{B as n}from"./Badge-B2P_pToH.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";const $=Object.keys(Y),ee=Object.keys(Z),pe={title:"Composants/Badge/Badge",component:n,tags:["autodocs"],argTypes:{badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type of badge",defaultValue:"brand"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the badge",defaultValue:"M"},appearance:{control:"select",options:["text","icon","empty"],description:"Appearance of the badge",defaultValue:"text"},count:{control:"number",description:"Count to display when appearance is 'text'",defaultValue:1},icon:{control:"select",options:[...$,...ee].sort((a,t)=>a.localeCompare(t)),description:"Icon to display when appearance is 'icon'"}}},c=e.jsx("span",{style:{display:"inline-block",width:48,height:48,background:"orange",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:"bold",fontSize:16}}),d={args:{badgeType:"brand",size:"m",appearance:"text",count:1,children:c}},p={args:{badgeType:"brand",size:"m",appearance:"icon",icon:"notification",children:c}},l={args:{icon:"notification",count:1,children:c},render:a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[e.jsx("h4",{children:"Appearance: Text"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(n,{...a,size:"xs"}),e.jsx(n,{...a,size:"s","data-testid":"badge-text-s"}),e.jsx(n,{...a,size:"m","data-testid":"badge-text-m"}),e.jsx(n,{...a,size:"l"})]}),e.jsx("h4",{children:"Appearance: Icon"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(n,{...a,size:"xs",appearance:"icon"}),e.jsx(n,{...a,size:"s",appearance:"icon","data-testid":"badge-icon-s"}),e.jsx(n,{...a,size:"m",appearance:"icon","data-testid":"badge-icon-m"}),e.jsx(n,{...a,size:"l",appearance:"icon"})]}),e.jsx("h4",{children:"Appearance: Empty"}),e.jsxs("div",{style:{display:"flex",gap:"16px"},children:[e.jsx(n,{...a,size:"xs",appearance:"empty"}),e.jsx(n,{...a,size:"s",appearance:"empty","data-testid":"badge-empty-s"}),e.jsx(n,{...a,size:"m",appearance:"empty"}),e.jsx(n,{...a,size:"l",appearance:"empty"})]})]}),play:async({canvasElement:a})=>{const t=h(a),s=t.getByTestId("badge-text-s").querySelector("[data-testid='badge']");i(s).not.toBeVisible();const r=t.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");i(r).not.toBeVisible();const P=t.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");i(P).toBeVisible();const Q=t.getByTestId("badge-text-m").querySelector("[data-testid='badge']");i(Q).toBeVisible();const U=t.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");i(U).toBeVisible()}},g={args:{appearance:"empty",count:1,children:c},argTypes:{size:{control:"select",options:["xs","s","m","l"]}},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{...a,size:"xs"}),e.jsx(n,{...a,size:"s"}),e.jsx(n,{...a,size:"m"}),e.jsx(n,{...a,size:"l"})]})},m={args:{badgeType:"indicator",appearance:"text",size:"m",children:c},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{...a,count:5}),e.jsx(n,{...a,count:99}),e.jsx(n,{...a,count:100})]})},x={args:{badgeType:"brand",appearance:"icon",size:"m",icon:"notification",children:c},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{...a,icon:"notification"}),e.jsx(n,{...a,icon:"home"}),e.jsx(n,{...a,icon:"user"}),e.jsx(n,{...a,icon:"search"}),e.jsx(n,{...a,icon:"heart"}),e.jsx(n,{...a,icon:"star"})]})},ae=a=>{const[t,s]=X.useState(a.count);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{children:e.jsx(n,{...a,count:t})}),e.jsx("hr",{}),e.jsx("label",{children:"Badge Count"}),e.jsx("input",{id:"badge-count-input",type:"number",value:t,onChange:r=>s(Number(r.target.value)),"data-testid":"badge-count-input"})]})},y={args:{badgeType:"brand",appearance:"text",size:"m",count:1,children:c},render:ae,play:async({canvasElement:a})=>{const t=h(a),s=t.getByTestId("badge-count-input"),r=t.getByTestId("badge");i(r).toBeVisible(),await o.clear(s),await o.type(s,"0"),await B(()=>i(r).not.toBeVisible()),await o.clear(s),await o.type(s,"1"),await B(()=>i(r).toBeVisible())}},b={args:d.args,play:async({canvasElement:a})=>{const s=h(a).getByTestId("badge");await o.tab(),i(s).not.toHaveFocus()}},u={args:d.args,render:a=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[e.jsxs("div",{children:[e.jsx("h4",{children:"Brand"}),e.jsx(n,{...a,badgeType:"brand"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Neutral"}),e.jsx(n,{...a,badgeType:"neutral"})]}),e.jsxs("div",{children:[e.jsx("h4",{children:"Indicator"}),e.jsx(n,{...a,badgeType:"indicator"})]})]})};var v,j,f;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "text",
    count: 1,
    children: mockChildren
  }
}`,...(f=(j=d.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var I,T,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "icon",
    icon: "notification",
    children: mockChildren
  }
}`,...(z=(T=p.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var S,w,V;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
      <h4>Appearance: Text</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" />
        <Badge {...args} size="s" data-testid="badge-text-s" />
        <Badge {...args} size="m" data-testid="badge-text-m" />
        <Badge {...args} size="l" />
      </div>
      <h4>Appearance: Icon</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" appearance="icon" />
        <Badge {...args} size="s" appearance="icon" data-testid="badge-icon-s" />
        <Badge {...args} size="m" appearance="icon" data-testid="badge-icon-m" />
        <Badge {...args} size="l" appearance="icon" />
      </div>
      <h4>Appearance: Empty</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" appearance="empty" />
        <Badge {...args} size="s" appearance="empty" data-testid="badge-empty-s" />
        <Badge {...args} size="m" appearance="empty" />
        <Badge {...args} size="l" appearance="empty" />
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
}`,...(V=(w=l.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var C,E,k;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    appearance: "empty",
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
}`,...(k=(E=g.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var D,q,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    badgeType: "indicator",
    appearance: "text",
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
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var A,M,N;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "icon",
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
}`,...(N=(M=x.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var R,O,H;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "text",
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
}`,...(H=(O=y.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var K,L,_;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: Default.args,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  }
}`,...(_=(L=b.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var W,G,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const le=["Default","IconBadge","BadgeDisplay","Sizes","CountLimit","Icons","BadgeVisibility","KeyboardInteraction","BadgeType"];export{l as BadgeDisplay,u as BadgeType,y as BadgeVisibility,m as CountLimit,d as Default,p as IconBadge,x as Icons,b as KeyboardInteraction,g as Sizes,le as __namedExportsOrder,pe as default};
