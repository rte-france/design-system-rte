import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as p,u as x,a as D,e as g}from"./index-DaW6VCyr.js";import{r as q}from"./index-G8LIXM5I.js";import{I as R}from"./IconButton-CY-isvho.js";import{L as y}from"./Link-Ef06xDiJ.js";import{T as H}from"./Tooltip-DHeK-EWN.js";import{c as L}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DjEid3Hw.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const M="Fil d'Ariane",S=3,U=2;function z(e,a=S,l=U){if(A(e,a))return{root:e[0],truncated:e.slice(1,e.length-l),remaining:e.slice(e.length-l)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function A(e,a=S){return e.length>a}const K="_breadcrumbsContainer_vjq01_3",P="_breadcrumbItem_vjq01_9",G="_separator_vjq01_35",s={breadcrumbsContainer:K,breadcrumbItem:P,separator:G},n=q.forwardRef(({items:e,ariaLabel:a=M,...l},o)=>{if(A(e)){const{root:t,truncated:i,remaining:h}=z(e);return r.jsxs("nav",{ref:o,className:L(s.breadcrumbsContainer,i.length?s.truncated:""),...l,role:"navigation","aria-label":a,children:[r.jsx(y,{subtle:!0,href:t.link,label:t.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{className:s.breadcrumbItem,children:r.jsx(H,{position:"bottom","aria-label":"More items",label:i.map(d=>d.label).join(", "),role:"menu",triggerStyles:{display:"flex"},onClick:()=>console.log("Event from Tooltip"),children:r.jsx(R,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>console.log("Event from IconButton")})})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),h.map((d,v)=>r.jsxs("div",{className:s.breadcrumbItem,children:[v===h.length-1?r.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,children:d.label}):r.jsx(y,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),v<h.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},d.link))]})}return r.jsx("nav",{ref:o,className:s.breadcrumbsBadge,...l,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((t,i)=>r.jsxs("div",{className:s.breadcrumbItem,children:[i===e.length-1?r.jsx("a",{role:"link","aria-label":t.label,"aria-current":"page",tabIndex:0,children:t.label}):r.jsx(y,{href:t.link,label:t.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),i<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},t.link))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const te={title:"Breadcrumbs (développement en cours)",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},O=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:O},render:e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{children:r.jsx("span",{style:{fontFamily:"sans-serif",marginBottom:16,border:"1px solid #F4922B",padding:8,borderRadius:5,backgroundColor:"#FAFFC1",margin:0},children:"Ce composant est en cours de développement et n'est pas encore disponible"})}),r.jsx("br",{}),r.jsx(n,{...e,"data-testid":"breadcrumbs"})]})},m={args:{...c.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const o=p(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=o[o.length-1].querySelector("a");a.items.forEach(async()=>{await x.tab()}),await D(()=>g(t).toHaveFocus()),await x.tab({shift:!0}),g(o[o.length-2].querySelector("a")).toHaveFocus()}},u={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=p(e),l=a.getByTestId("breadcrumbs"),o=a.getByTestId("breadcrumbs-truncated");g(p(l).queryByTestId("show-more")).not.toBeInTheDocument(),g(p(o).queryByTestId("show-more")).toBeInTheDocument()}},b={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})};var B,f,j;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(f=c.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var I,T,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(E=(T=m.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var F,w,C;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var k,_,N;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(_=b.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const ne=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{c as Default,m as KeyboardNavigation,b as MultipleElements,u as Truncated,ne as __namedExportsOrder,te as default};
