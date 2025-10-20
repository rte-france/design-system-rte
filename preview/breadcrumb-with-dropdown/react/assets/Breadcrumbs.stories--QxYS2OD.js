import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as h,u as I,a as L,e as y}from"./index-DaW6VCyr.js";import{r as f}from"./index-G8LIXM5I.js";import{D as H,a as M}from"./DropdownItem-c1KYkgDY.js";import{I as O}from"./IconButton-CMN6gjhA.js";import{L as x}from"./Link-Ef06xDiJ.js";import{c as U}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./keyboard.constants-KvjFtZ2v.js";import"./useActiveKeyboard-D-jDyZO1.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-BSes1ir3.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";import"./useAnimatedMount-_zPBpYOt.js";const z="Fil d'Ariane",F=3,K=2;function P(e,a=F,d=K){if(R(e,a))return{root:e[0],truncated:e.slice(1,e.length-d),remaining:e.slice(e.length-d)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function R(e,a=F){return e.length>a}const G="_breadcrumbsContainer_vjq01_3",V="_breadcrumbItem_vjq01_9",$="_separator_vjq01_35",s={breadcrumbsContainer:G,breadcrumbItem:V,separator:$},t=f.forwardRef(({items:e,ariaLabel:a=z,...d},n)=>{const[m,B]=f.useState(!1);if(R(e)){const{root:l,truncated:i,remaining:v}=P(e);return r.jsxs("nav",{ref:n,className:U(s.breadcrumbsContainer,i.length?s.truncated:""),...d,role:"navigation","aria-label":a,children:[r.jsx(x,{subtle:!0,href:l.link,label:l.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{className:s.breadcrumbItem,children:r.jsx(H,{dropdownId:"breadcrumbs-truncated-list"+a,onClose:()=>{B(!1)},trigger:r.jsx(O,{name:"more-horiz",size:"s","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>B(!m)}),isOpen:m,offset:6,children:i.map((c,u)=>r.jsx(M,{label:c.label,link:c.link},c.label+u))})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),v.map((c,u)=>r.jsxs("div",{className:s.breadcrumbItem,children:[u===v.length-1?r.jsx("a",{role:"link","aria-label":c.label,"aria-current":"page",tabIndex:0,children:c.label}):r.jsx(x,{href:c.link,label:c.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),u<v.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},c.link))]})}return r.jsx("nav",{ref:n,className:s.breadcrumbsBadge,...d,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((l,i)=>r.jsxs("div",{className:s.breadcrumbItem,children:[i===e.length-1?r.jsx("a",{role:"link","aria-label":l.label,"aria-current":"page",tabIndex:0,children:l.label}):r.jsx(x,{href:l.link,label:l.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),i<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},l.link))})});t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const ue={title:"Breadcrumbs",component:t,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},J=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],o={args:{items:J},render:e=>r.jsx(t,{...e,"data-testid":"breadcrumbs"})},b={args:{...o.args},render:e=>r.jsx(t,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const n=h(e).getByTestId("breadcrumbs").querySelectorAll("div"),m=n[n.length-1].querySelector("a");a.items.forEach(async()=>{await I.tab()}),await L(()=>y(m).toHaveFocus()),await I.tab({shift:!0}),y(n[n.length-2].querySelector("a")).toHaveFocus()}},p={args:{...o.args,items:[...o.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,"data-testid":"breadcrumbs"}),r.jsx(t,{...o.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=h(e),d=a.getByTestId("breadcrumbs"),n=a.getByTestId("breadcrumbs-truncated");y(h(d).queryByTestId("show-more")).not.toBeInTheDocument(),y(h(n).queryByTestId("show-more")).toBeInTheDocument()}},g={args:{...o.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(t,{...e,items:e.items.slice(0,1)}),r.jsx(t,{...e,items:e.items.slice(0,2)}),r.jsx(t,{...e,items:e.items.slice(0,3)}),r.jsx(t,{...e,items:e.items})]})};var j,T,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var E,D,_;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(D=b.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var k,N,S;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(N=p.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var q,C,A;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(C=g.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const be=["Default","KeyboardNavigation","Truncated","MultipleElements"];export{o as Default,b as KeyboardNavigation,g as MultipleElements,p as Truncated,be as __namedExportsOrder,ue as default};
