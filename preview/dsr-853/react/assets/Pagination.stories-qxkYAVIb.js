import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Le,T as Ee}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as d,e as a,u as c,f as He}from"./index-4rjIhT2C.js";import{r as G}from"./index-G8LIXM5I.js";import{f as be}from"./testing.utils-mIZIUNbM.js";import{I as P}from"./Icon-DgLH6pPJ.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";const Ae="Première page",Ie="Page précédente",_e="Page suivante",De="Dernière page",Ce=7;function Ge(t){return`Page ${t}`}function x(t,r){return Array.from({length:r-t+1},(o,e)=>({type:"page",page:t+e}))}function Ne(t,r,o=Ce){if(!r)return[];if(r<=o)return x(1,r);const e=o-2,D=e-1,C=r-(e-2);if(t<=D)return[...x(1,e),{type:"ellipsis"},{type:"page",page:r}];if(t>=C)return[{type:"page",page:1},{type:"ellipsis"},...x(r-e+1,r)];const b=Math.floor((o-5)/2);return[{type:"page",page:1},{type:"ellipsis"},...x(t-b,t+b),{type:"ellipsis"},{type:"page",page:r}]}const p={"rte-pagination":"_rte-pagination_a7pbt_1","rte-pagination-nav-control":"_rte-pagination-nav-control_a7pbt_7","rte-pagination-pages":"_rte-pagination-pages_a7pbt_30","rte-pagination-page":"_rte-pagination-page_a7pbt_30","rte-pagination-ellipsis":"_rte-pagination-ellipsis_a7pbt_38"},N=({appearance:t="neutral",activePage:r,totalPages:o,onPageChange:e,hasGoToFirst:D=!0,hasGoToPrev:C=!0,hasGoToNext:b=!0,hasGoToLast:Te=!0})=>{const[g,w]=G.useState(r),T=16,me=Ne(g,o),O=()=>g>=o,l=()=>g<=1,m=l()?"true":void 0,Pe=s=>{s!==g&&v(s)},xe=()=>{l()||v(1)},ye=()=>{l()||v(g-1)},Be=()=>{O()||v(g+1)},fe=()=>{O()||v(o)},v=s=>{s<1||s>o||s===g||(w(s),e==null||e(s))};return G.useEffect(()=>{w(r)},[r]),i.jsxs("nav",{className:p["rte-pagination"],"data-testid":"pagination","data-appearance":t,children:[D&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-first","aria-disabled":l()?"true":void 0,"data-disabled":l()?"true":void 0,"aria-label":Ae,onClick:xe,children:i.jsx(P,{name:"first-page",appearance:"filled",size:T})}),C&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-prev","aria-disabled":l()?"true":void 0,"data-disabled":l()?"true":void 0,"aria-label":Ie,onClick:ye,children:i.jsx(P,{name:"arrow-chevron-left",appearance:"filled",size:T})}),i.jsx("div",{className:p["rte-pagination-pages"],children:me.map((s,he)=>s.type==="ellipsis"?i.jsx("span",{className:p["rte-pagination-ellipsis"],"aria-hidden":"true",children:"..."},`ellipsis-${he}`):i.jsx("button",{type:"button",className:p["rte-pagination-page"],"aria-current":s.page===g?"page":void 0,"data-active":s.page===g?"true":void 0,"aria-label":Ge(s.page),"data-testid":`pagination-page-${s.page}`,onClick:()=>Pe(s.page),children:s.page},`page-${s.page}`))}),b&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-next","aria-disabled":m,"data-disabled":m,"aria-label":_e,onClick:Be,children:i.jsx(P,{name:"arrow-chevron-right",appearance:"filled",size:T})}),Te&&i.jsx("button",{type:"button",className:p["rte-pagination-nav-control"],"data-testid":"pagination-go-to-last","aria-disabled":m,"data-disabled":m,"aria-label":De,onClick:fe,children:i.jsx(P,{name:"last-page",appearance:"filled",size:T})})]})};N.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},appearance:{defaultValue:{value:'"neutral"',computed:!1},required:!1},hasGoToFirst:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToPrev:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToNext:{defaultValue:{value:"true",computed:!1},required:!1},hasGoToLast:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["CorePaginationProps"]};const ze={title:"Composants/Pagination/Pagination",component:N,tags:["autodocs"],argTypes:{activePage:{control:"number",description:"Current active page (1-based)"},totalPages:{control:"number",description:"Total number of pages"},appearance:{control:"select",options:["brand","neutral"]},hasGoToFirst:{control:"boolean"},hasGoToPrev:{control:"boolean"},hasGoToNext:{control:"boolean"},hasGoToLast:{control:"boolean"},ariaLabel:{control:"text"}}},u=He(),n={args:{activePage:1,totalPages:10,appearance:"neutral",hasGoToFirst:!0,hasGoToPrev:!0,hasGoToNext:!0,hasGoToLast:!0},render:t=>{const[r,o]=G.useState(t.activePage);return i.jsx(N,{...t,activePage:r,onPageChange:e=>o(e)})}},y={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},B={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10},render:n.render},f={args:{...n.args,appearance:"brand",activePage:1,totalPages:10},render:n.render},h={args:{...n.args,appearance:"brand",activePage:5,totalPages:10},render:n.render},L={args:{...n.args,appearance:"brand",activePage:10,totalPages:10},render:n.render},E={args:{...n.args,appearance:"brand",activePage:4,totalPages:7},render:n.render},H={args:{...n.args,activePage:3,totalPages:10,hasGoToFirst:!1,hasGoToPrev:!1,hasGoToNext:!1,hasGoToLast:!1},render:n.render},A={args:{...n.args,activePage:1,totalPages:1},render:n.render,play:async({canvasElement:t})=>{const o=d(t).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByTestId("pagination-page-1").tagName).toBe("BUTTON"),a(e.getByLabelText("Page 1")).toBeInTheDocument(),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true")}},I={args:{...n.args,appearance:"brand",activePage:1,totalPages:10,onPageChange:u},play:async({canvasElement:t})=>{const o=d(t).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-1")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page précédente")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).not.toHaveAttribute("aria-disabled"),a(e.getByLabelText("Dernière page")).not.toHaveAttribute("aria-disabled"),await c.click(e.getByTestId("pagination-page-3")),a(u).toHaveBeenCalledWith(3),await c.click(e.getByLabelText("Page suivante")),a(u).toHaveBeenCalledWith(4),await c.click(e.getByLabelText("Dernière page")),a(u).toHaveBeenCalledWith(10),a(e.getByLabelText("Dernière page")).toHaveFocus(),a(e.getByLabelText("Dernière page")).toHaveAttribute("aria-disabled","true"),a(e.getByLabelText("Page suivante")).toHaveAttribute("aria-disabled","true"),await be(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.keyboard(Le),a(u).toHaveBeenCalledWith(1)}},_={args:{...n.args,appearance:"neutral",activePage:5,totalPages:10,onPageChange:u},play:async({canvasElement:t})=>{const o=d(t).getByTestId("pagination"),e=d(o);a(e.getByTestId("pagination-page-5")).toHaveAttribute("aria-current","page"),a(e.getByLabelText("Première page")).toBeInTheDocument(),a(e.getByLabelText("Page précédente")).toBeInTheDocument(),a(e.getByLabelText("Page suivante")).toBeInTheDocument(),a(e.getByLabelText("Dernière page")).toBeInTheDocument(),await be(t),await c.tab(),a(e.getByLabelText("Première page")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page précédente")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 1")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 4")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 5")).toHaveFocus(),await c.tab(),a(e.getByLabelText("Page 6")).toHaveFocus(),await c.keyboard(Ee),a(u).toHaveBeenCalledWith(6)}};var S,k,F;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(k=n.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,W,q;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(q=(W=y.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var K,V,z;B.parameters={...B.parameters,docs:{...(K=B.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(z=(V=B.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var R,M,Y;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 1,
    totalPages: 10
  },
  render: Default.render
}`,...(Y=(M=f.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var $,U,X;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 5,
    totalPages: 10
  },
  render: Default.render
}`,...(X=(U=h.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,J,Q;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 10,
    totalPages: 10
  },
  render: Default.render
}`,...(Q=(J=L.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "brand",
    activePage: 4,
    totalPages: 7
  },
  render: Default.render
}`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,re,oe;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(re=H.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ie,ce;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
}`,...(ce=(ie=A.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ge,pe,le;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(le=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ue,de,ve;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(ve=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ve.source}}};const Re=["Default","Brand","Neutral","StartPosition","MidPosition","EndPosition","WithoutEllipsis","HiddenEndControls","SinglePage","Interactions","KeyboardNavigation"];export{y as Brand,n as Default,L as EndPosition,H as HiddenEndControls,I as Interactions,_ as KeyboardNavigation,h as MidPosition,B as Neutral,A as SinglePage,f as StartPosition,E as WithoutEllipsis,Re as __namedExportsOrder,ze as default};
