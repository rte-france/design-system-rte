import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as b,u as v,a as C,e as p}from"./index-DaW6VCyr.js";import{r as F}from"./index-G8LIXM5I.js";import{I as H}from"./IconButton-CY-isvho.js";import{L as h}from"./Link-Ef06xDiJ.js";import{T as A}from"./Tooltip-C7Sk8bI0.js";import{c as M}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const q=3,R=2;function L(e,s=q,o=R){if(D(e,s))return{root:e[0],truncated:e.slice(1,e.length-o),remaining:e.slice(e.length-o)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function D(e,s=q){return e.length>s}const z="_breadcrumbsContainer_vjq01_3",K="_breadcrumbItem_vjq01_9",P="_separator_vjq01_35",t={breadcrumbsContainer:z,breadcrumbItem:K,separator:P},n=F.forwardRef(({items:e,...s},o)=>{if(D(e)){const{root:a,truncated:l,remaining:g}=L(e);return r.jsxs("nav",{ref:o,className:M(t.breadcrumbsContainer,l.length?t.truncated:""),...s,role:"navigation","aria-label":"Fil d'Ariane",children:[r.jsx(h,{subtle:!0,href:a.link,label:a.label,style:{color:"var(--content-tertiary)"},className:t.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),r.jsx("span",{className:t.breadcrumbItem,children:r.jsx(A,{position:"bottom","aria-label":"More items",label:l.map(d=>d.label).join(", "),role:"menu",children:r.jsx(H,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,tabIndex:-1})})}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),g.map((d,y)=>r.jsxs("div",{className:t.breadcrumbItem,children:[y===g.length-1?r.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,children:d.label}):r.jsx(h,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),y<g.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},d.link))]})}return r.jsx("nav",{ref:o,className:t.breadcrumbsBadge,...s,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((a,l)=>r.jsxs("div",{className:t.breadcrumbItem,children:[l===e.length-1?r.jsx("a",{role:"link","aria-label":a.label,"aria-current":"page",tabIndex:0,children:a.label}):r.jsx(h,{href:a.link,label:a.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),l<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},a.link))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",composes:["BreadcrumbsPropsCore"]};const ae={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"}}},U=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:U}},m={args:{...c.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:s})=>{const a=b(e).getByTestId("breadcrumbs").querySelectorAll("div"),l=a[a.length-1].querySelector("a");s.items.forEach(async()=>{await v.tab()}),await C(()=>p(l).toHaveFocus()),await v.tab({shift:!0}),p(a[a.length-2].querySelector("a")).toHaveFocus()}},i={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=b(e),o=s.getByTestId("breadcrumbs"),a=s.getByTestId("breadcrumbs-truncated");p(b(o).queryByTestId("show-more")).not.toBeInTheDocument(),p(b(a).queryByTestId("show-more")).toBeInTheDocument()}},u={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})};var x,B,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(I=(B=c.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var j,f,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(f=m.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var w,E,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(N=(E=i.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var _,k,S;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const se=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{c as Default,m as KeyboardNavigation,u as MultipleElements,i as Truncated,se as __namedExportsOrder,ae as default};
