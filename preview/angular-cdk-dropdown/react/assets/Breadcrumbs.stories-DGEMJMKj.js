import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u as v,a as D,e as g}from"./index-DaW6VCyr.js";import{r as q}from"./index-G8LIXM5I.js";import{I as R}from"./IconButton-CY-isvho.js";import{L as y}from"./Link-Ef06xDiJ.js";import{T as H}from"./Tooltip-CO-JBTP7.js";import{c as L}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./Overlay-BozqJJVk.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const M="Fil d'Ariane",S=3,U=2;function z(e,a=S,d=U){if(A(e,a))return{root:e[0],truncated:e.slice(1,e.length-d),remaining:e.slice(e.length-d)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function A(e,a=S){return e.length>a}const K="_breadcrumbsContainer_vjq01_3",P="_breadcrumbItem_vjq01_9",G="_separator_vjq01_35",s={breadcrumbsContainer:K,breadcrumbItem:P,separator:G},n=q.forwardRef(({items:e,ariaLabel:a=M,...d},c)=>{if(A(e)){const{root:t,truncated:i,remaining:h}=z(e);return r.jsxs("nav",{ref:c,className:L(s.breadcrumbsContainer,i.length?s.truncated:""),...d,role:"navigation","aria-label":a,children:[r.jsx(y,{subtle:!0,href:t.link,label:t.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{className:s.breadcrumbItem,children:r.jsx(H,{position:"bottom","aria-label":"More items",label:i.map(l=>l.label).join(", "),role:"menu",triggerStyles:{display:"flex"},children:r.jsx(R,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,tabIndex:-1})})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),h.map((l,x)=>r.jsxs("div",{className:s.breadcrumbItem,children:[x===h.length-1?r.jsx("a",{role:"link","aria-label":l.label,"aria-current":"page",tabIndex:0,children:l.label}):r.jsx(y,{href:l.link,label:l.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),x<h.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},l.link))]})}return r.jsx("nav",{ref:c,className:s.breadcrumbsBadge,...d,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((t,i)=>r.jsxs("div",{className:s.breadcrumbItem,children:[i===e.length-1?r.jsx("a",{role:"link","aria-label":t.label,"aria-current":"page",tabIndex:0,children:t.label}):r.jsx(y,{href:t.link,label:t.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),i<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},t.link))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const ne={title:"Breadcrumbs (développement en cours)",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},O=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],o={args:{items:O},render:e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:r.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),r.jsx("br",{}),r.jsx(n,{...e,"data-testid":"breadcrumbs"})]})},m={args:{...o.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const c=p(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=c[c.length-1].querySelector("a");a.items.forEach(async()=>{await v.tab()}),await D(()=>g(t).toHaveFocus()),await v.tab({shift:!0}),g(c[c.length-2].querySelector("a")).toHaveFocus()}},u={args:{...o.args,items:[...o.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...o.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=p(e),d=a.getByTestId("breadcrumbs"),c=a.getByTestId("breadcrumbs-truncated");g(p(d).queryByTestId("show-more")).not.toBeInTheDocument(),g(p(c).queryByTestId("show-more")).toBeInTheDocument()}},b={args:{...o.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})};var B,j,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=o.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var I,T,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(F=(T=m.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var w,E,C;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var _,k,N;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(k=b.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const ce=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{o as Default,m as KeyboardNavigation,b as MultipleElements,u as Truncated,ce as __namedExportsOrder,ne as default};
