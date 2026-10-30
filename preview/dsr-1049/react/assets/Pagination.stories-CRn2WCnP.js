import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ie,T as _e}from"./keyboard-test.constants-CzExugF2.js";import"./timepicker.constants-CynrC_9x.js";import{w as d,e as a,u as c,f as Ae}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{I as T}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const De="Pagination",Ge="Première page",Ce="Page précédente",He="Page suivante",Ne="Dernière page",we=7;function Se(n){return`Page ${n}`}function y(n,r){return Array.from({length:r-n+1},(s,e)=>({type:"page",page:n+e}))}function ke(n,r,s=we){if(!r)return[];if(r<=s)return y(1,r);const e=s-2,G=e-1,C=r-(e-2);if(n<=G)return[...y(1,e),{type:"ellipsis"},{type:"page",page:r}];if(n>=C)return[{type:"page",page:1},{type:"ellipsis"},...y(r-e+1,r)];const v=Math.floor((s-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...y(n-v,n+v),{type:"ellipsis"},{type:"page",page:r}]}const l={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},S=({appearance:n="neutral",activePage:r,totalPages:s,onPageChange:e,hasGoToFirst:G=!0,hasGoToPrev:C=!0,hasGoToNext:v=!0,hasGoToLast:Pe=!0,["aria-label"]:me=De})=>{const[g,k]=w.useState(r),b=16,Te=s>1,ye=ke(g,s),H=()=>g>=s,N=()=>g<=1,P=N()?"true":void 0,m=H()?"true":void 0,xe=o=>{o!==g&&u(o)},fe=()=>{N()||u(1)},he=()=>{N()||u(g-1)},Be=()=>{H()||u(g+1)},Le=()=>{H()||u(s)},u=o=>{o<1||o>s||o===g||(k(o),e==null||e(o))};return w.useEffect(()=>{k(r)},[r]),Te?i.jsxs("nav",{className:l["rte-pagination"],"data-testid":"pagination","data-appearance":n,"aria-label":me,children:[G&&i.jsx("button",{type:"button",className:l["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":P,"data-disabled":P,"aria-label":Ge,onClick:fe,children:i.jsx(T,{name:"first-page",appearance:"filled",size:b})}),C&&i.jsx("button",{type:"button",className:l["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":P,"data-disabled":P,"aria-label":Ce,onClick:he,children:i.jsx(T,{name:"arrow-chevron-left",appearance:"filled",size:b})}),i.jsx("div",{className:l["rte-pagination-pages"],children:ye.map((o,Ee)=>o.type==="ellipsis"?i.jsx("span",{className:l["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${Ee}`):i.jsx("button",{type:"button",className:l["rte-pagination-page"],"aria-current":o.page===g?"page":void 0,"data-active":o.page===g?"true":void 0,"aria-label":Se(o.page),"data-testid":`pagination-page-${o.page}`,onClick:()=>xe(o.page),children:o.page},`page-${o.page}`))}),v&&i.jsx("button",{type:"button",className:l["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":m,"data-disabled":m,"aria-label":He,onClick:Be,children:i.jsx(T,{name:"arrow-chevron-right",appearance:"filled",size:b})}),Pe&&i.jsx("button",{type:"button",className:l["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":m,"data-disabled":m,"aria-label":Ne,onClick:Le,children:i.jsx(T,{name:"last-page",appearance:"filled",size:b})})]}):null};S.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1},"aria-label":{defaultValue:{value:'"Pagination"',computed:!1},required:!1}},composes:["CorePaginationProps"]};const Me={title:"Composants/Pagination/Pagination",component:S,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},p=Ae(),t={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:n=>{const[r,s]=w.useState(n.activePage);return i.jsx(S,{...n,activePage:r,onPageChange:e=>s(e)})}},x={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},f={args:{...t.args,appearance:"neutral",activePage:5,totalPages:10},render:t.render},h={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},B={args:{...t.args,appearance:"brand",activePage:5,totalPages:10},render:t.render},L={args:{...t.args,appearance:"brand",activePage:10,totalPages:10},render:t.render},E={args:{...t.args,appearance:"brand",activePage:4,totalPages:7},render:t.render},I={args:{...t.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:t.render},_={args:{...t.args,activePage:1,totalPages:1},render:t.render,play:async({canvasElement:n})=>{const r=d(n);a(r.queryByTestId("pagination")).not.toBeInTheDocument()}},A={tags:["!autodocs"],args:{...t.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:p},play:async({canvasElement:n})=>{const s=d(n).getByTestId("pagination"),e=d(s);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await c.click(e.getByTestId("pagination-page-3")),a(p).toHaveBeenCalledWith(3),await c.click(e.getByLabelText("Page suivante")),a(p).toHaveBeenCalledWith(4),await c.click(e.getByLabelText("Dernière page")),a(p).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await e.getByLabelText("Première page").focus(),await c.keyboard(Ie),a(p).toHaveBeenCalledWith(1)}},D={tags:["!autodocs"],args:{...t.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:p},play:async({canvasElement:n})=>{const s=d(n).getByTestId("pagination"),e=d(s);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await e.getByLabelText("Première page").focus(),await c.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await c.keyboard(_e),a(p).toHaveBeenCalledWith(6)}};var O,F,j;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    activePage: 1,
    totalPages: 10,
    appearance: "neutral",
    hasGoToFirst: true,
    hasGoToPrev: true,
    hasGoToNext: true,
    hasGoToLast: true
  },
  render: args => {
    const [activePage, setActivePage] = useState(args.activePage);
    return <Pagination {...args} activePage={activePage} onPageChange={page => setActivePage(page)} />;
  }
}`,...(j=(F=t.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var W,q,K;x.parameters={...x.parameters,docs:{...(W=x.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(K=(q=x.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var R,V,z;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(z=(V=f.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var M,Y,$;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var X,Z,U;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(U=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:U.source}}};var J,Q,ee;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10
  },
  render: Default.render
}`,...(ee=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,ne;E.parameters={...E.parameters,docs:{...(ae=E.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7
  },
  render: Default.render
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    activePage: 3,
    totalPages: 10,
    hasGoToFirst: false,
    hasGoToPrev: false,
    hasGoToNext: false,
    hasGoToLast: false
  },
  render: Default.render
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,ge;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    activePage: 1,
    totalPages: 1
  },
  render: Default.render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByTestId("pagination")).not.toBeInTheDocument();
  }
}`,...(ge=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var le,pe,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10,
    onPageChange: mockOnPageChange
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);
    expect(nav.getByTestId("pagination-page-1")).toHaveAttribute("aria-current", "page");
    expect(nav.getByLabelText("Première page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled");
    expect(nav.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled");
    await userEvent.click(nav.getByTestId("pagination-page-3"));
    expect(mockOnPageChange).toHaveBeenCalledWith(3);
    await userEvent.click(nav.getByLabelText("Page suivante"));
    expect(mockOnPageChange).toHaveBeenCalledWith(4);
    await userEvent.click(nav.getByLabelText("Dernière page"));
    expect(mockOnPageChange).toHaveBeenCalledWith(10);
    expect(nav.getByLabelText("Dernière page")).toHaveFocus();
    expect(nav.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled", "true");
    await nav.getByLabelText("Première page").focus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  }
}`,...(ue=(pe=A.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var de,ve,be;D.parameters={...D.parameters,docs:{...(de=D.parameters)==null?void 0:de.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10,
    onPageChange: mockOnPageChange
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);
    expect(nav.getByTestId("pagination-page-5")).toHaveAttribute("aria-current", "page");
    expect(nav.getByLabelText("Première page")).toBeInTheDocument();
    expect(nav.getByLabelText("Page précédente")).toBeInTheDocument();
    expect(nav.getByLabelText("Page suivante")).toBeInTheDocument();
    expect(nav.getByLabelText("Dernière page")).toBeInTheDocument();
    await nav.getByLabelText("Première page").focus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page précédente")).toHaveFocus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page 1")).toHaveFocus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page 4")).toHaveFocus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page 5")).toHaveFocus();
    await userEvent.tab();
    expect(nav.getByLabelText("Page 6")).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  }
}`,...(be=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Ye=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{x as Brand,t as Default,L as EndPosition,I as HiddenEndControls,A as Interactions,D as KeyboardNavigation,B as MidPosition,f as Neutral,_ as SinglePage,h as StartPosition,E as WithoutEllipsis,Ye as __namedExportsOrder,Me as default};
