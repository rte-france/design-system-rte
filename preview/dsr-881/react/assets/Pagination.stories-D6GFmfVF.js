import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ee,T as He}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as u,e as a,u as c,f as Ae}from"./index-4rjIhT2C.js";import{r as w}from"./index-G8LIXM5I.js";import{f as Te}from"./testing.utils-mIZIUNbM.js";import{I as m}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const Ie="Première page",_e="Page précédente",De="Page suivante",Ce="Dernière page",Ge=7;function Ne(t){return`Page ${t}`}function x(t,r){return Array.from({length:r-t+1},(o,e)=>({type:"page",page:t+e}))}function we(t,r,o=Ge){if(!r)return[];if(r<=o)return x(1,r);const e=o-2,D=e-1,C=r-(e-2);if(t<=D)return[...x(1,e),{type:"ellipsis"},{type:"page",page:r}];if(t>=C)return[{type:"page",page:1},{type:"ellipsis"},...x(r-e+1,r)];const v=Math.floor((o-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...x(t-v,t+v),{type:"ellipsis"},{type:"page",page:r}]}const p={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},O=({appearance:t="neutral",activePage:r,totalPages:o,onPageChange:e,hasGoToFirst:D=!0,hasGoToPrev:C=!0,hasGoToNext:v=!0,hasGoToLast:Pe=!0})=>{const[g,S]=w.useState(r),b=16,me=we(g,o),G=()=>g>=o,N=()=>g<=1,T=N()?"true":void 0,P=G()?"true":void 0,xe=s=>{s!==g&&d(s)},ye=()=>{N()||d(1)},Be=()=>{N()||d(g-1)},fe=()=>{G()||d(g+1)},he=()=>{G()||d(o)},d=s=>{s<1||s>o||s===g||(S(s),e==null||e(s))};return w.useEffect(()=>{S(r)},[r]),i.jsxs("nav",{className:p["rte-pagination"],"data-testid":"pagination","data-appearance":t,children:[D&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":T,"data-disabled":T,"aria-label":Ie,onClick:ye,children:i.jsx(m,{name:"first-page",appearance:"filled",size:b})}),C&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":T,"data-disabled":T,"aria-label":_e,onClick:Be,children:i.jsx(m,{name:"arrow-chevron-left",appearance:"filled",size:b})}),i.jsx("div",{className:p["rte-pagination-pages"],children:me.map((s,Le)=>s.type==="ellipsis"?i.jsx("span",{className:p["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${Le}`):i.jsx("button",{type:"button",className:p["rte-pagination-page"],"aria-current":s.page===g?"page":void 0,"data-active":s.page===g?"true":void 0,"aria-label":Ne(s.page),"data-testid":`pagination-page-${s.page}`,onClick:()=>xe(s.page),children:s.page},`page-${s.page}`))}),v&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":P,"data-disabled":P,"aria-label":De,onClick:fe,children:i.jsx(m,{name:"arrow-chevron-right",appearance:"filled",size:b})}),Pe&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":P,"data-disabled":P,"aria-label":Ce,onClick:he,children:i.jsx(m,{name:"last-page",appearance:"filled",size:b})})]})};O.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePaginationProps"]};const Ve={title:"Composants/Pagination/Pagination",component:O,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},l=Ae(),n={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:t=>{const[r,o]=w.useState(t.activePage);return i.jsx(O,{...t,activePage:r,onPageChange:e=>o(e)})}},y={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},B={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10},render:n.render},f={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},h={args:{...n.args,appearance:"brand",activePage:5,totalPages:10},render:n.render},L={args:{...n.args,appearance:"brand",activePage:10,totalPages:10},render:n.render},E={args:{...n.args,appearance:"brand",activePage:4,totalPages:7},render:n.render},H={args:{...n.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:n.render},A={args:{...n.args,activePage:1,totalPages:1},render:n.render,play:async({canvasElement:t})=>{const o=u(t).getByTestId("pagination"),e=u(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByTestId("pagination-page-1").tagName).toBe("BUTTON"),a(e.getByLabelText("Page 1")).toBeInTheDocument(),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true")}},I={args:{...n.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:l},play:async({canvasElement:t})=>{const o=u(t).getByTestId("pagination"),e=u(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await c.click(e.getByTestId("pagination-page-3")),a(l).toHaveBeenCalledWith(3),await c.click(e.getByLabelText("Page suivante")),a(l).toHaveBeenCalledWith(4),await c.click(e.getByLabelText("Dernière page")),a(l).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await Te(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.keyboard(Ee),a(l).toHaveBeenCalledWith(1)}},_={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:l},play:async({canvasElement:t})=>{const o=u(t).getByTestId("pagination"),e=u(o);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await Te(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await c.keyboard(He),a(l).toHaveBeenCalledWith(6)}};var k,F,j;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(j=(F=n.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var W,q,K;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(R=B.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,Y,$;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source}}};var U,X,Z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(Z=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,Q,ee;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(ne=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,se;H.parameters={...H.parameters,docs:{...(re=H.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(oe=H.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,ce,ge;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ge=(ce=A.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var pe,le,ue;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
    await focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(nav.getByLabelText("Première page")).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(mockOnPageChange).toHaveBeenCalledWith(1);
  }
}`,...(ue=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,ve,be;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
    await focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    expect(nav.getByLabelText("Première page")).toHaveFocus();
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
}`,...(be=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};const Me=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{y as Brand,n as Default,L as EndPosition,H as HiddenEndControls,I as Interactions,_ as KeyboardNavigation,h as MidPosition,B as Neutral,A as SinglePage,f as StartPosition,E as WithoutEllipsis,Me as __namedExportsOrder,Ve as default};
