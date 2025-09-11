import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,u as f,a as L,e as y}from"./index-DaW6VCyr.js";import{r as j}from"./index-G8LIXM5I.js";import{D as H,a as M}from"./DropdownItem-DXc__dcc.js";import{I as O}from"./IconButton-CMN6gjhA.js";import{L as x}from"./Link-Ef06xDiJ.js";import{c as U}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./keyboard.constants-YQ0IdItO.js";import"./useActiveKeyboard-CyCI8mio.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-BozqJJVk.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const z="Fil d'Ariane",q=3,K=2;function P(r,a=q,o=K){if(R(r,a))return{root:r[0],truncated:r.slice(1,r.length-o),remaining:r.slice(r.length-o)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function R(r,a=q){return r.length>a}const G="_breadcrumbsContainer_vjq01_3",V="_breadcrumbItem_vjq01_9",$="_separator_vjq01_35",s={breadcrumbsContainer:G,breadcrumbItem:V,separator:$},t=j.forwardRef(({items:r,ariaLabel:a=z,...o},n)=>{const[m,B]=j.useState(!1);if(R(r)){const{root:d,truncated:i,remaining:v}=P(r);return e.jsxs("nav",{ref:n,className:U(s.breadcrumbsContainer,i.length?s.truncated:""),...o,role:"navigation","aria-label":a,children:[e.jsx(x,{subtle:!0,href:d.link,label:d.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),e.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),e.jsx("span",{className:s.breadcrumbItem,children:e.jsx(H,{dropdownId:"breadcrumbs-truncated-list"+a,onClose:()=>{B(!1)},trigger:e.jsx(O,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>B(!m)}),isOpen:m,offset:6,children:i.map((l,u)=>e.jsx(M,{label:l.label},l.label+u))})}),e.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),v.map((l,u)=>e.jsxs("div",{className:s.breadcrumbItem,children:[u===v.length-1?e.jsx("a",{role:"link","aria-label":l.label,"aria-current":"page",tabIndex:0,children:l.label}):e.jsx(x,{href:l.link,label:l.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),u<v.length-1&&e.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},l.link))]})}return e.jsx("nav",{ref:n,className:s.breadcrumbsBadge,...o,role:"navigation","aria-label":"Fil d'Ariane",children:r.map((d,i)=>e.jsxs("div",{className:s.breadcrumbItem,children:[i===r.length-1?e.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,children:d.label}):e.jsx(x,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),i<r.length-1&&e.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},d.link))})});t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const me={title:"Breadcrumbs (développement en cours)",component:t,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},J=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:J},render:r=>e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),e.jsx("br",{}),e.jsx(t,{...r,"data-testid":"breadcrumbs"})]})},b={args:{...c.args},render:r=>e.jsx(t,{...r,"data-testid":"breadcrumbs"}),play:async({canvasElement:r,args:a})=>{const n=h(r).getByTestId("breadcrumbs").querySelectorAll("div"),m=n[n.length-1].querySelector("a");a.items.forEach(async()=>{await f.tab()}),await L(()=>y(m).toHaveFocus()),await f.tab({shift:!0}),y(n[n.length-2].querySelector("a")).toHaveFocus()}},p={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,"data-testid":"breadcrumbs"}),e.jsx(t,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:r})=>{const a=h(r),o=a.getByTestId("breadcrumbs"),n=a.getByTestId("breadcrumbs-truncated");y(h(o).queryByTestId("show-more")).not.toBeInTheDocument(),y(h(n).queryByTestId("show-more")).toBeInTheDocument()}},g={args:{...c.args},render:r=>e.jsxs(e.Fragment,{children:[e.jsx(t,{...r,items:r.items.slice(0,1)}),e.jsx(t,{...r,items:r.items.slice(0,2)}),e.jsx(t,{...r,items:r.items.slice(0,3)}),e.jsx(t,{...r,items:r.items})]})};var I,T,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <>
      <div>
        <span style={{
        fontFamily: "sans-serif",
        marginBottom: 16,
        border: "1px solid #F4922B",
        padding: 8,
        borderRadius: 5,
        backgroundColor: "#FAFFC1",
        margin: 0
      }}>
          Ce composant est en cours de développement et n'est pas encore disponible
        </span>
      </div>
      <br />
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </>
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var F,E,C;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs").querySelectorAll("div");
    const breadCrumbsHead = breadcrumbs[breadcrumbs.length - 1].querySelector("a");
    args.items.forEach(async () => {
      await userEvent.tab();
    });
    await waitFor(() => expect(breadCrumbsHead).toHaveFocus());
    await userEvent.tab({
      shift: true
    });
    expect(breadcrumbs[breadcrumbs.length - 2].querySelector("a")).toHaveFocus();
  }
}`,...(C=(E=b.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var D,_,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: [...Default.args.items.slice(0, 2)]
  },
  render: args => {
    return <>
        <Breadcrumbs {...args} data-testid="breadcrumbs" />
        <Breadcrumbs {...Default.args} data-testid="breadcrumbs-truncated" />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs");
    const breadcrumbsTruncated = canvas.getByTestId("breadcrumbs-truncated");
    expect(within(breadcrumbs).queryByTestId("show-more")).not.toBeInTheDocument();
    expect(within(breadcrumbsTruncated).queryByTestId("show-more")).toBeInTheDocument();
  }
}`,...(k=(_=p.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var N,S,A;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <>
        <Breadcrumbs {...args} items={args.items.slice(0, 1)} />
        <Breadcrumbs {...args} items={args.items.slice(0, 2)} />
        <Breadcrumbs {...args} items={args.items.slice(0, 3)} />
        <Breadcrumbs {...args} items={args.items} />
      </>;
  }
}`,...(A=(S=g.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};const ue=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{c as Default,b as KeyboardNavigation,g as MultipleElements,p as Truncated,ue as __namedExportsOrder,me as default};
