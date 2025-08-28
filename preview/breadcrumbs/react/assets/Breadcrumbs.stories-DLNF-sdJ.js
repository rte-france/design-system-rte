import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u as x,a as C,e as g}from"./index-DaW6VCyr.js";import{r as F}from"./index-G8LIXM5I.js";import{I as R}from"./IconButton-CY-isvho.js";import{L as y}from"./Link-Ef06xDiJ.js";import{T as H}from"./Tooltip-DHeK-EWN.js";import{c as L}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const M="Fil d'Ariane",q=3,U=2;function z(e,a=q,l=U){if(A(e,a))return{root:e[0],truncated:e.slice(1,e.length-l),remaining:e.slice(e.length-l)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function A(e,a=q){return e.length>a}const K="_breadcrumbsContainer_vjq01_3",P="_breadcrumbItem_vjq01_9",G="_separator_vjq01_35",s={breadcrumbsContainer:K,breadcrumbItem:P,separator:G},c=F.forwardRef(({items:e,ariaLabel:a=M,...l},n)=>{if(A(e)){const{root:t,truncated:i,remaining:h}=z(e);return r.jsxs("nav",{ref:n,className:L(s.breadcrumbsContainer,i.length?s.truncated:""),...l,role:"navigation","aria-label":a,children:[r.jsx(y,{subtle:!0,href:t.link,label:t.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{className:s.breadcrumbItem,children:r.jsx(H,{position:"bottom","aria-label":"More items",label:i.map(d=>d.label).join(", "),role:"menu",triggerStyles:{display:"flex"},children:r.jsx(R,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,tabIndex:-1})})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),h.map((d,v)=>r.jsxs("div",{className:s.breadcrumbItem,children:[v===h.length-1?r.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,children:d.label}):r.jsx(y,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),v<h.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},d.link))]})}return r.jsx("nav",{ref:n,className:s.breadcrumbsBadge,...l,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((t,i)=>r.jsxs("div",{className:s.breadcrumbItem,children:[i===e.length-1?r.jsx("a",{role:"link","aria-label":t.label,"aria-current":"page",tabIndex:0,children:t.label}):r.jsx(y,{href:t.link,label:t.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),i<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},t.link))})});c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const te={title:"Breadcrumbs",component:c,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},O=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],o={args:{items:O}},m={args:{...o.args},render:e=>r.jsx(c,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const n=p(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=n[n.length-1].querySelector("a");a.items.forEach(async()=>{await x.tab()}),await C(()=>g(t).toHaveFocus()),await x.tab({shift:!0}),g(n[n.length-2].querySelector("a")).toHaveFocus()}},u={args:{...o.args,items:[...o.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(c,{...e,"data-testid":"breadcrumbs"}),r.jsx(c,{...o.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=p(e),l=a.getByTestId("breadcrumbs"),n=a.getByTestId("breadcrumbs-truncated");g(p(l).queryByTestId("show-more")).not.toBeInTheDocument(),g(p(n).queryByTestId("show-more")).toBeInTheDocument()}},b={args:{...o.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(c,{...e,items:e.items.slice(0,1)}),r.jsx(c,{...e,items:e.items.slice(0,2)}),r.jsx(c,{...e,items:e.items.slice(0,3)}),r.jsx(c,{...e,items:e.items})]})};var B,I,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(f=(I=o.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var j,T,w;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(T=m.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,_,N;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var S,D,k;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(D=b.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const ne=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{o as Default,m as KeyboardNavigation,b as MultipleElements,u as Truncated,ne as __namedExportsOrder,te as default};
