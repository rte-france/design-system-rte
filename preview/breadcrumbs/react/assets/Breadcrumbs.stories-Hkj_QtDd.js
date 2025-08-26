import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as y,a as D,e as b}from"./index-DaW6VCyr.js";import{r as S}from"./index-G8LIXM5I.js";import{I as _}from"./Icon-DjEid3Hw.js";import{L as h}from"./Link-Ef06xDiJ.js";import{T as q}from"./Tooltip-Bg3s4K_Q.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const N=3,F=2;function H(e,s=N,n=F){if(k(e,s))return{root:e[0],truncated:e.slice(1,e.length-n),remaining:e.slice(e.length-n)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function k(e,s=N){return e.length>s}const A="_breadcrumbItem_1ajz5_9",R="_separator_1ajz5_35",t={breadcrumbItem:A,separator:R},l=S.forwardRef(({items:e,...s},n)=>{if(k(e)){const{root:a,truncated:d,remaining:p}=H(e);return r.jsx("nav",{ref:n,className:t.breadcrumbsBadge,...s,role:"navigation","aria-label":"Fil d'Ariane",children:r.jsxs("div",{className:t.breadcrumbsTruncated,children:[r.jsx(h,{subtle:!0,href:a.link,label:a.label,style:{color:"var(--content-tertiary)"},className:t.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),r.jsx("span",{className:t.breadcrumbItem,children:r.jsx(q,{position:"bottom","aria-label":"More items",label:d.map(o=>o.label).join(", "),role:"menu",children:r.jsx(_,{name:"more-horiz",size:12,"data-testid":"show-more"})})}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),p.map((o,g)=>r.jsxs("div",{className:t.breadcrumbItem,children:[g===p.length-1?r.jsx("a",{role:"link","aria-label":o.label,"aria-current":"page",tabIndex:0,children:o.label}):r.jsx(h,{href:o.link,label:o.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),g<p.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},o.link))]})})}return r.jsx("nav",{ref:n,className:t.breadcrumbsBadge,...s,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((a,d)=>r.jsxs("div",{className:t.breadcrumbItem,children:[d===e.length-1?r.jsx("a",{role:"link","aria-label":a.label,"aria-current":"page",tabIndex:0,children:a.label}):r.jsx(h,{href:a.link,label:a.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),d<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},a.link))})});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",composes:["BreadcrumbsPropsCore"]};const V={title:"Breadcrumbs",component:l,tags:["autodocs"],argTypes:{items:{control:"object"}}},C=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:C}},u={args:{...c.args},render:e=>r.jsx(l,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:s})=>{const a=i(e).getByTestId("breadcrumbs").querySelectorAll("div"),d=a[a.length-1].querySelector("a");s.items.forEach(async()=>{await y.tab()}),await D(()=>b(d).toHaveFocus()),await y.tab({shift:!0}),b(a[a.length-2].querySelector("a")).toHaveFocus()}},m={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,"data-testid":"breadcrumbs"}),r.jsx(l,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=i(e),n=s.getByTestId("breadcrumbs"),a=s.getByTestId("breadcrumbs-truncated");b(i(n).queryByTestId("show-more")).not.toBeInTheDocument(),b(i(a).queryByTestId("show-more")).toBeInTheDocument()}};var v,I,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,j,f;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=u.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,w,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(w=m.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const W=["Default","KeyboardNavigation","Truncated"];export{c as Default,u as KeyboardNavigation,m as Truncated,W as __namedExportsOrder,V as default};
