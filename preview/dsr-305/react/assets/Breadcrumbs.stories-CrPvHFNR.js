import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as U,b as W,c as Y}from"./keyboard-test.constants-CMQ38wwt.js";import{w as x,u as l,a as v,e as u}from"./index-DCXJbAaW.js";import{r as f}from"./index-G8LIXM5I.js";import{D as $,a as M}from"./DropdownItem-CjQPOhjw.js";import{I as z}from"./IconButton-CMN6gjhA.js";import{L as B}from"./Link-CEb8pzaR.js";import{c as V}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-Cu8HPmfw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DMcHctAZ.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";const J="Fil d'Ariane",O=3,Q=2;function X(e,r=O,t=Q){if(P(e,r))return{root:e[0],truncated:e.slice(1,e.length-t),remaining:e.slice(e.length-t)};throw new Error(`Breadcrumbs: 'items' should have at least ${r} items.`)}function P(e,r=O){return e.length>r}const Z="_breadcrumbsContainer_1blt9_3",ee="_breadcrumbItem_1blt9_9",ae="_separator_1blt9_38",s={breadcrumbsContainer:Z,breadcrumbItem:ee,separator:ae},n=f.forwardRef(({items:e,ariaLabel:r=J,breadcrumbItemMaxWidth:t,...o},b)=>{const[T,I]=f.useState(!1);if(P(e)){const{root:i,truncated:m,remaining:E}=X(e);return a.jsxs("nav",{ref:b,className:V(s.breadcrumbsContainer,m.length?s.truncated:""),...o,role:"navigation","aria-label":r,children:[a.jsx(B,{subtle:!0,href:i.link,label:i.label,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`},className:s.breadcrumbItem}),a.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),a.jsx("span",{className:s.breadcrumbItem,children:a.jsx($,{dropdownId:"breadcrumbs-truncated-list"+r,onClose:()=>{I(!1)},trigger:a.jsx(z,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>I(!T)}),isOpen:T,offset:6,children:m.map((d,p)=>a.jsx(M,{label:d.label,link:d.link},d.label+p))})}),a.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),E.map((d,p)=>a.jsxs("div",{className:s.breadcrumbItem,children:[p===E.length-1?a.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${t}px`},children:d.label}):a.jsx(B,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`}}),p<E.length-1&&a.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},d.link))]})}return a.jsx("nav",{ref:b,className:s.breadcrumbsBadge,...o,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((i,m)=>a.jsxs("div",{className:s.breadcrumbItem,children:[m===e.length-1?a.jsx("a",{role:"link","aria-label":i.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${t}px`},children:i.label}):a.jsx(B,{href:i.link,label:i.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`}}),m<e.length-1&&a.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},i.link))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Ee={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},re=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:re},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"})},g={args:{...c.args},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:r})=>{const o=x(e).getByTestId("breadcrumbs").querySelectorAll("div"),b=o[o.length-1].querySelector("a");r.items.forEach(async()=>{await l.tab()}),await v(()=>u(b).toHaveFocus()),await l.tab({shift:!0}),u(o[o.length-2].querySelector("a")).toHaveFocus()}},h={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(n,{...e,"data-testid":"breadcrumbs"}),a.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const r=x(e),t=r.getByTestId("breadcrumbs"),o=r.getByTestId("breadcrumbs-truncated");u(x(t).queryByTestId("show-more")).not.toBeInTheDocument(),u(x(o).queryByTestId("show-more")).toBeInTheDocument()}},y={args:{...c.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(n,{...e,items:e.items.slice(0,1)}),a.jsx(n,{...e,items:e.items.slice(0,2)}),a.jsx(n,{...e,items:e.items.slice(0,3)}),a.jsx(n,{...e,items:e.items})]})},w={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await l.tab(),await l.tab(),await l.keyboard(U);const e=document.querySelector(`[data-dropdown-id="breadcrumbs-truncated-listFil d'Ariane"]`);u(e).toBeInTheDocument(),await l.tab(),await v(()=>{var r;return u((r=e==null?void 0:e.querySelector("ul"))==null?void 0:r.children[0]).toHaveFocus()}),await l.keyboard(W),await v(()=>{var r;return u((r=e==null?void 0:e.querySelector("ul"))==null?void 0:r.children[1]).toHaveFocus()}),await l.keyboard(Y),await v(()=>{var r;return u((r=e==null?void 0:e.querySelector("ul"))==null?void 0:r.children[0]).toHaveFocus()})}};var j,S,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var N,D,k;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var F,q,A;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(q=h.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,H,R;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(H=y.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var K,L,G;w.parameters={...w.parameters,docs:{...(K=w.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    items: [...Default.args.items, {
      label: "FancyBrand Phone",
      link: "/products/electronics/smartphones/fancybrand-phone"
    }]
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
  play: async () => {
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    const dropdown = document.querySelector('[data-dropdown-id="breadcrumbs-truncated-listFil d\\'Ariane"]');
    expect(dropdown).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[1]).toHaveFocus());
    await userEvent.keyboard(TESTING_UP_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
  }
}`,...(G=(L=w.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};const Be=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{c as Default,g as KeyboardNavigation,w as KeyboardNavigationWithDropdown,y as MultipleElements,h as Truncated,Be as __namedExportsOrder,Ee as default};
