import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Le,T as Ae}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as d,e as a,u as g,f as Ie}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{I as m}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const He="Première page",Ee="Page précédente",_e="Page suivante",De="Dernière page",Ge=7;function Ne(n){return`Page ${n}`}function x(n,r){return Array.from({length:r-n+1},(o,e)=>({type:"page",page:n+e}))}function Ce(n,r,o=Ge){if(!r)return[];if(r<=o)return x(1,r);const e=o-2,D=e-1,G=r-(e-2);if(n<=D)return[...x(1,e),{type:"ellipsis"},{type:"page",page:r}];if(n>=G)return[{type:"page",page:1},{type:"ellipsis"},...x(r-e+1,r)];const v=Math.floor((o-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...x(n-v,n+v),{type:"ellipsis"},{type:"page",page:r}]}const p={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},O=({appearance:n="neutral",activePage:r,totalPages:o,onPageChange:e,hasGoToFirst:D=!0,hasGoToPrev:G=!0,hasGoToNext:v=!0,hasGoToLast:Te=!0})=>{const[c,S]=w.useState(r),b=16,Pe=Ce(c,o),N=()=>c>=o,C=()=>c<=1,T=C()?"true":void 0,P=N()?"true":void 0,me=s=>{s!==c&&u(s)},xe=()=>{C()||u(1)},ye=()=>{C()||u(c-1)},Be=()=>{N()||u(c+1)},he=()=>{N()||u(o)},u=s=>{s<1||s>o||s===c||(S(s),e==null||e(s))};return w.useEffect(()=>{S(r)},[r]),i.jsxs("nav",{className:p["rte-pagination"],"data-testid":"pagination","data-appearance":n,children:[D&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":T,"data-disabled":T,"aria-label":He,onClick:xe,children:i.jsx(m,{name:"first-page",appearance:"filled",size:b})}),G&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":T,"data-disabled":T,"aria-label":Ee,onClick:ye,children:i.jsx(m,{name:"arrow-chevron-left",appearance:"filled",size:b})}),i.jsx("div",{className:p["rte-pagination-pages"],children:Pe.map((s,fe)=>s.type==="ellipsis"?i.jsx("span",{className:p["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${fe}`):i.jsx("button",{type:"button",className:p["rte-pagination-page"],"aria-current":s.page===c?"page":void 0,"data-active":s.page===c?"true":void 0,"aria-label":Ne(s.page),"data-testid":`pagination-page-${s.page}`,onClick:()=>me(s.page),children:s.page},`page-${s.page}`))}),v&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":P,"data-disabled":P,"aria-label":_e,onClick:Be,children:i.jsx(m,{name:"arrow-chevron-right",appearance:"filled",size:b})}),Te&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":P,"data-disabled":P,"aria-label":De,onClick:he,children:i.jsx(m,{name:"last-page",appearance:"filled",size:b})})]})};O.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePaginationProps"]};const ze={title:"Composants/Pagination/Pagination",component:O,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},l=Ie(),t={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:n=>{const[r,o]=w.useState(n.activePage);return i.jsx(O,{...n,activePage:r,onPageChange:e=>o(e)})}},y={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},B={args:{...t.args,appearance:"neutral",activePage:5,totalPages:10},render:t.render},h={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},f={args:{...t.args,appearance:"brand",activePage:5,totalPages:10},render:t.render},L={args:{...t.args,appearance:"brand",activePage:10,totalPages:10},render:t.render},A={args:{...t.args,appearance:"brand",activePage:4,totalPages:7},render:t.render},I={args:{...t.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:t.render},H={args:{...t.args,activePage:1,totalPages:1},render:t.render,play:async({canvasElement:n})=>{const o=d(n).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByTestId("pagination-page-1").tagName).toBe("BUTTON"),a(e.getByLabelText("Page 1")).toBeInTheDocument(),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true")}},E={args:{...t.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:l},play:async({canvasElement:n})=>{const o=d(n).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await g.click(e.getByTestId("pagination-page-3")),a(l).toHaveBeenCalledWith(3),await g.click(e.getByLabelText("Page suivante")),a(l).toHaveBeenCalledWith(4),await g.click(e.getByLabelText("Dernière page")),a(l).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await e.getByLabelText("Première page").focus(),await g.keyboard(Le),a(l).toHaveBeenCalledWith(1)}},_={args:{...t.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:l},play:async({canvasElement:n})=>{const o=d(n).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await e.getByLabelText("Première page").focus(),await g.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await g.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await g.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await g.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await g.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await g.keyboard(Ae),a(l).toHaveBeenCalledWith(6)}};var k,F,j;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(F=t.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var W,q,K;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(K=(q=y.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var z,R,V;B.parameters={...B.parameters,docs:{...(z=B.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(V=(R=B.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,Y,$;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...($=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var U,X,Z;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(Z=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,Q,ee;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10
  },
  render: Default.render
}`,...(ee=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var ae,te,ne;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7
  },
  render: Default.render
}`,...(ne=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;I.parameters={...I.parameters,docs:{...(re=I.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ge,ce;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
    const pagination = canvas.getByTestId("pagination");
    const nav = within(pagination);
    expect(nav.getByTestId("pagination-page-1")).toHaveAttribute("aria-current", "page");
    expect(nav.getByTestId("pagination-page-1").tagName).toBe("BUTTON");
    expect(nav.getByLabelText("Page 1")).toBeInTheDocument();
    expect(nav.getByLabelText("Première page")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled", "true");
    expect(nav.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled", "true");
  }
}`,...(ce=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};var pe,le,de;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(de=(le=E.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,ve,be;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Re=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{y as Brand,t as Default,L as EndPosition,I as HiddenEndControls,E as Interactions,_ as KeyboardNavigation,f as MidPosition,B as Neutral,H as SinglePage,h as StartPosition,A as WithoutEllipsis,Re as __namedExportsOrder,ze as default};
