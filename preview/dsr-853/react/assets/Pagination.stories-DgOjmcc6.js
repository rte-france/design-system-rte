import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as he,T as Le}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as v,e as a,u as c,f as He}from"./index-4rjIhT2C.js";import{r as de}from"./index-G8LIXM5I.js";import{f as ue}from"./testing.utils-mIZIUNbM.js";import{I as P}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const Ee="Première page",Ae="Page précédente",Ie="Page suivante",_e="Dernière page",Ce=7;function x(n,r){return Array.from({length:r-n+1},(o,e)=>({type:"page",page:n+e}))}function De(n,r,o=Ce){if(!r)return[];if(r<=o)return x(1,r);const e=o-2,C=e-1,D=r-(e-2);if(n<=C)return[...x(1,e),{type:"ellipsis"},{type:"page",page:r}];if(n>=D)return[{type:"page",page:1},{type:"ellipsis"},...x(r-e+1,r)];const T=Math.floor((o-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...x(n-T,n+T),{type:"ellipsis"},{type:"page",page:r}]}const p={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},G=({appearance:n="neutral",activePage:r,totalPages:o,onPageChange:e,hasGoToFirst:C=!0,hasGoToPrev:D=!0,hasGoToNext:T=!0,hasGoToLast:ve=!0})=>{const[g,be]=de.useState(r),m=16,Te=De(g,o),d=()=>g>=o,u=()=>g<=1,me=s=>{s!==g&&b(s)},Pe=()=>{u()||b(1)},xe=()=>{u()||b(g-1)},ye=()=>{d()||b(g+1)},Be=()=>{d()||b(o)},b=s=>{s<1||s>o||s===g||(be(s),e==null||e(s))};return i.jsxs("nav",{className:p["rte-pagination"],"data-testid":"pagination","data-appearance":n,children:[C&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":u()?"true":void 0,"data-disabled":u()?"true":void 0,"aria-label":Ee,onClick:Pe,children:i.jsx(P,{name:"first-page",appearance:"filled",size:m})}),D&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":u()?"true":void 0,"data-disabled":u()?"true":void 0,"aria-label":Ae,onClick:xe,children:i.jsx(P,{name:"arrow-chevron-left",appearance:"filled",size:m})}),i.jsx("div",{className:p["rte-pagination-pages"],children:Te.map((s,fe)=>s.type==="ellipsis"?i.jsx("span",{className:p["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${fe}`):i.jsx("button",{type:"button",className:p["rte-pagination-page"],"aria-current":s.page===g?"page":void 0,"data-active":s.page===g?"true":void 0,"aria-label":`Page ${s.page}`,"data-testid":`pagination-page-${s.page}`,onClick:()=>me(s.page),children:s.page},`page-${s.page}`))}),T&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":d()?"true":void 0,"data-disabled":d()?"true":void 0,"aria-label":Ie,onClick:ye,children:i.jsx(P,{name:"arrow-chevron-right",appearance:"filled",size:m})}),ve&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":d()?"true":void 0,"data-disabled":d()?"true":void 0,"aria-label":_e,onClick:Be,children:i.jsx(P,{name:"last-page",appearance:"filled",size:m})})]})};G.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePaginationProps"]};const Ke={title:"Composants/Pagination/Pagination",component:G,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},l=He(),t={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:n=>{const[r,o]=de.useState(n.activePage);return i.jsx(G,{...n,activePage:r,onPageChange:e=>o(e)})}},y={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},B={args:{...t.args,appearance:"neutral",activePage:5,totalPages:10},render:t.render},f={args:{...t.args,appearance:"brand",activePage:1,totalPages:10},render:t.render},h={args:{...t.args,appearance:"brand",activePage:5,totalPages:10},render:t.render},L={args:{...t.args,appearance:"brand",activePage:10,totalPages:10},render:t.render},H={args:{...t.args,appearance:"brand",activePage:4,totalPages:7},render:t.render},E={args:{...t.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:t.render},A={args:{...t.args,activePage:1,totalPages:1},render:t.render,play:async({canvasElement:n})=>{const o=v(n).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByTestId("pagination-page-1").tagName).toBe("BUTTON"),a(e.getByLabelText("Page 1")).toBeInTheDocument(),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true")}},I={args:{...t.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:l},play:async({canvasElement:n})=>{const o=v(n).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await c.click(e.getByTestId("pagination-page-3")),a(l).toHaveBeenCalledWith(3),await c.click(e.getByLabelText("Page suivante")),a(l).toHaveBeenCalledWith(4),await c.click(e.getByLabelText("Dernière page")),a(l).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await ue(n),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.keyboard(he),a(l).toHaveBeenCalledWith(1)}},_={args:{...t.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:l},play:async({canvasElement:n})=>{const o=v(n).getByTestId("pagination"),e=v(o);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await ue(n),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await c.keyboard(Le),a(l).toHaveBeenCalledWith(6)}};var N,w,O;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(w=t.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var S,k,F;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(F=(k=y.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,W,q;B.parameters={...B.parameters,docs:{...(j=B.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(q=(W=B.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var K,z,R;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(R=(z=f.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var V,M,Y;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(Y=(M=h.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var $,U,X;L.parameters={...L.parameters,docs:{...($=L.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10
  },
  render: Default.render
}`,...(X=(U=L.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,J,Q;H.parameters={...H.parameters,docs:{...(Z=H.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7
  },
  render: Default.render
}`,...(Q=(J=H.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,oe;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=A.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ge,pe,le;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(le=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};const ze=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{y as Brand,t as Default,L as EndPosition,E as HiddenEndControls,I as Interactions,_ as KeyboardNavigation,h as MidPosition,B as Neutral,A as SinglePage,f as StartPosition,H as WithoutEllipsis,ze as __namedExportsOrder,Ke as default};
