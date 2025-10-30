import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as O,b as P,c as U}from"./keyboard-test.constants-BJ6DOKed.js";import{w,u as i,a as I,e as u}from"./index-DCXJbAaW.js";import{r as B}from"./index-G8LIXM5I.js";import{D as Y,a as V}from"./DropdownItem-4LmuXddf.js";import{I as W}from"./IconButton-CMN6gjhA.js";import{L as f}from"./Link-Ef06xDiJ.js";import{c as $}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";const z="Fil d'Ariane",G=3,J=2;function Q(e,s=G,r=J){if(M(e,s))return{root:e[0],truncated:e.slice(1,e.length-r),remaining:e.slice(e.length-r)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function M(e,s=G){return e.length>s}const X="_breadcrumbsContainer_vjq01_3",Z="_breadcrumbItem_vjq01_9",ee="_separator_vjq01_35",n={breadcrumbsContainer:X,breadcrumbItem:Z,separator:ee},c=B.forwardRef(({items:e,ariaLabel:s=z,...r},t)=>{const[b,x]=B.useState(!1);if(M(e)){const{root:l,truncated:m,remaining:E}=Q(e);return a.jsxs("nav",{ref:t,className:$(n.breadcrumbsContainer,m.length?n.truncated:""),...r,role:"navigation","aria-label":s,children:[a.jsx(f,{subtle:!0,href:l.link,label:l.label,style:{color:"var(--content-tertiary)"},className:n.breadcrumbItem}),a.jsx("span",{"aria-hidden":"true",className:n.separator,children:"/"}),a.jsx("span",{className:n.breadcrumbItem,children:a.jsx(Y,{dropdownId:"breadcrumbs-truncated-list"+s,onClose:()=>{x(!1)},trigger:a.jsx(W,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>x(!b)}),isOpen:b,offset:6,children:m.map((d,p)=>a.jsx(V,{label:d.label,link:d.link},d.label+p))})}),a.jsx("span",{"aria-hidden":"true",className:n.separator,children:"/"}),E.map((d,p)=>a.jsxs("div",{className:n.breadcrumbItem,children:[p===E.length-1?a.jsx("a",{role:"link","aria-label":d.label,"aria-current":"page",tabIndex:0,children:d.label}):a.jsx(f,{href:d.link,label:d.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),p<E.length-1&&a.jsx("span",{"aria-hidden":"true",className:n.separator,children:"/"})]},d.link))]})}return a.jsx("nav",{ref:t,className:n.breadcrumbsBadge,...r,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((l,m)=>a.jsxs("div",{className:n.breadcrumbItem,children:[m===e.length-1?a.jsx("a",{role:"link","aria-label":l.label,"aria-current":"page",tabIndex:0,children:l.label}):a.jsx(f,{href:l.link,label:l.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),m<e.length-1&&a.jsx("span",{"aria-hidden":"true",className:n.separator,children:"/"})]},l.link))})});c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Ie={title:"Breadcrumbs",component:c,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},ae=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],o={args:{items:ae},render:e=>a.jsx(c,{...e,"data-testid":"breadcrumbs"})},g={args:{...o.args},render:e=>a.jsx(c,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:s})=>{const t=w(e).getByTestId("breadcrumbs").querySelectorAll("div"),b=t[t.length-1].querySelector("a");s.items.forEach(async()=>{await i.tab()}),await I(()=>u(b).toHaveFocus()),await i.tab({shift:!0}),u(t[t.length-2].querySelector("a")).toHaveFocus()}},h={args:{...o.args,items:[...o.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(c,{...e,"data-testid":"breadcrumbs"}),a.jsx(c,{...o.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=w(e),r=s.getByTestId("breadcrumbs"),t=s.getByTestId("breadcrumbs-truncated");u(w(r).queryByTestId("show-more")).not.toBeInTheDocument(),u(w(t).queryByTestId("show-more")).toBeInTheDocument()}},y={args:{...o.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(c,{...e,items:e.items.slice(0,1)}),a.jsx(c,{...e,items:e.items.slice(0,2)}),a.jsx(c,{...e,items:e.items.slice(0,3)}),a.jsx(c,{...e,items:e.items})]})},v={args:{...o.args,items:[...o.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(c,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await i.tab(),await i.tab(),await i.keyboard(O);const s=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${s}"]`);u(r).toBeInTheDocument(),await i.tab(),await I(()=>{var t;return u((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()}),await i.keyboard(P),await I(()=>{var t;return u((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[1]).toHaveFocus()}),await i.keyboard(U),await I(()=>{var t;return u((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()})}};var T,S,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,N,D;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(D=(N=g.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var k,F,q;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var C,A,H;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(H=(A=y.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var R,K,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    const value = "breadcrumbs-truncated-listFil d'Ariane";
    const safeValue = CSS.escape(value);
    const dropdown = document.querySelector(\`[data-dropdown-id="\${safeValue}"]\`);
    expect(dropdown).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[1]).toHaveFocus());
    await userEvent.keyboard(TESTING_UP_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
  }
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Ee=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{o as Default,g as KeyboardNavigation,v as KeyboardNavigationWithDropdown,y as MultipleElements,h as Truncated,Ee as __namedExportsOrder,Ie as default};
