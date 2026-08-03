import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as he,T as Le}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as v,e as a,u as c,f as Ee}from"./index-4rjIhT2C.js";import{r as G}from"./index-G8LIXM5I.js";import{f as ve}from"./testing.utils-mIZIUNbM.js";import{I as P}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const He="Première page",Ae="Page précédente",Ie="Page suivante",_e="Dernière page",Ce=7;function De(t){return`Page ${t}`}function x(t,r){return Array.from({length:r-t+1},(o,e)=>({type:"page",page:t+e}))}function Ge(t,r,o=Ce){if(!r)return[];if(r<=o)return x(1,r);const e=o-2,C=e-1,D=r-(e-2);if(t<=C)return[...x(1,e),{type:"ellipsis"},{type:"page",page:r}];if(t>=D)return[{type:"page",page:1},{type:"ellipsis"},...x(r-e+1,r)];const T=Math.floor((o-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...x(t-T,t+T),{type:"ellipsis"},{type:"page",page:r}]}const p={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},N=({appearance:t="neutral",activePage:r,totalPages:o,onPageChange:e,hasGoToFirst:C=!0,hasGoToPrev:D=!0,hasGoToNext:T=!0,hasGoToLast:be=!0})=>{const[g,w]=G.useState(r),m=16,Te=Ge(g,o),u=()=>g>=o,d=()=>g<=1,me=s=>{s!==g&&b(s)},Pe=()=>{d()||b(1)},xe=()=>{d()||b(g-1)},ye=()=>{u()||b(g+1)},Be=()=>{u()||b(o)},b=s=>{s<1||s>o||s===g||(w(s),e==null||e(s))};return G.useEffect(()=>{w(r)},[r]),i.jsxs("nav",{className:p["rte-pagination"],"data-testid":"pagination","data-appearance":t,children:[C&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":d()?"true":void 0,"data-disabled":d()?"true":void 0,"aria-label":He,onClick:Pe,children:i.jsx(P,{name:"first-page",appearance:"filled",size:m})}),D&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":d()?"true":void 0,"data-disabled":d()?"true":void 0,"aria-label":Ae,onClick:xe,children:i.jsx(P,{name:"arrow-chevron-left",appearance:"filled",size:m})}),i.jsx("div",{className:p["rte-pagination-pages"],children:Te.map((s,fe)=>s.type==="ellipsis"?i.jsx("span",{className:p["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${fe}`):i.jsx("button",{type:"button",className:p["rte-pagination-page"],"aria-current":s.page===g?"page":void 0,"data-active":s.page===g?"true":void 0,"aria-label":De(s.page),"data-testid":`pagination-page-${s.page}`,onClick:()=>me(s.page),children:s.page},`page-${s.page}`))}),T&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":u()?"true":void 0,"data-disabled":u()?"true":void 0,"aria-label":Ie,onClick:ye,children:i.jsx(P,{name:"arrow-chevron-right",appearance:"filled",size:m})}),be&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":u()?"true":void 0,"data-disabled":u()?"true":void 0,"aria-label":_e,onClick:Be,children:i.jsx(P,{name:"last-page",appearance:"filled",size:m})})]})};N.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePaginationProps"]};const ze={title:"Composants/Pagination/Pagination",component:N,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},l=Ee(),n={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:t=>{const[r,o]=G.useState(t.activePage);return i.jsx(N,{...t,activePage:r,onPageChange:e=>o(e)})}},y={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},B={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10},render:n.render},f={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},h={args:{...n.args,appearance:"brand",activePage:5,totalPages:10},render:n.render},L={args:{...n.args,appearance:"brand",activePage:10,totalPages:10},render:n.render},E={args:{...n.args,appearance:"brand",activePage:4,totalPages:7},render:n.render},H={args:{...n.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:n.render},A={args:{...n.args,activePage:1,totalPages:1},render:n.render,play:async({canvasElement:t})=>{const o=v(t).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByTestId("pagination-page-1").tagName).toBe("BUTTON"),a(e.getByLabelText("Page 1")).toBeInTheDocument(),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true")}},I={args:{...n.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:l},play:async({canvasElement:t})=>{const o=v(t).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await c.click(e.getByTestId("pagination-page-3")),a(l).toHaveBeenCalledWith(3),await c.click(e.getByLabelText("Page suivante")),a(l).toHaveBeenCalledWith(4),await c.click(e.getByLabelText("Dernière page")),a(l).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await ve(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.keyboard(he),a(l).toHaveBeenCalledWith(1)}},_={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:l},play:async({canvasElement:t})=>{const o=v(t).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await ve(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await c.keyboard(Le),a(l).toHaveBeenCalledWith(6)}};var O,S,k;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var F,j,W;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(W=(j=y.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var q,K,z;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(z=(K=B.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var R,V,M;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(M=(V=f.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var Y,$,U;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(U=($=h.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var X,Z,J;L.parameters={...L.parameters,docs:{...(X=L.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10
  },
  render: Default.render
}`,...(J=(Z=L.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var Q,ee,ae;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7
  },
  render: Default.render
}`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,ne,re;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ne=H.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var oe,se,ie;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ce,ge,pe;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:pe.source}}};var le,ue,de;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(de=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const Re=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{y as Brand,n as Default,L as EndPosition,H as HiddenEndControls,I as Interactions,_ as KeyboardNavigation,h as MidPosition,B as Neutral,A as SinglePage,f as StartPosition,E as WithoutEllipsis,Re as __namedExportsOrder,ze as default};
