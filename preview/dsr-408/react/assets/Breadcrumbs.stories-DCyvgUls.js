import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as O,b as P,c as U}from"./keyboard-test.constants-BJ6DOKed.js";import{w,u as l,a as I,e as u}from"./index-DCXJbAaW.js";import{r as T}from"./index-G8LIXM5I.js";import{D as Y,a as W}from"./DropdownItem-MUW0dXCa.js";import{I as z}from"./IconButton-CMN6gjhA.js";import{L as x}from"./Link-Ef06xDiJ.js";import{c as V}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";const $="Fil d'Ariane",G=3,J=2;function Q(e,a=G,d=J){if(M(e,a))return{root:e[0],truncated:e.slice(1,e.length-d),remaining:e.slice(e.length-d)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function M(e,a=G){return e.length>a}const X="_breadcrumbsContainer_vjq01_3",Z="_breadcrumbItem_vjq01_9",ee="_separator_vjq01_35",t={breadcrumbsContainer:X,breadcrumbItem:Z,separator:ee},s=T.forwardRef(({items:e,ariaLabel:a=$,...d},c)=>{const[b,B]=T.useState(!1);if(M(e)){const{root:i,truncated:m,remaining:E}=Q(e);return r.jsxs("nav",{ref:c,className:V(t.breadcrumbsContainer,m.length?t.truncated:""),...d,role:"navigation","aria-label":a,children:[r.jsx(x,{subtle:!0,href:i.link,label:i.label,style:{color:"var(--content-tertiary)"},className:t.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),r.jsx("span",{className:t.breadcrumbItem,children:r.jsx(Y,{dropdownId:"breadcrumbs-truncated-list"+a,onClose:()=>{B(!1)},trigger:r.jsx(z,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>B(!b)}),isOpen:b,offset:6,children:m.map((o,p)=>r.jsx(W,{label:o.label,link:o.link},o.label+p))})}),r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"}),E.map((o,p)=>r.jsxs("div",{className:t.breadcrumbItem,children:[p===E.length-1?r.jsx("a",{role:"link","aria-label":o.label,"aria-current":"page",tabIndex:0,children:o.label}):r.jsx(x,{href:o.link,label:o.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),p<E.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},o.link))]})}return r.jsx("nav",{ref:c,className:t.breadcrumbsBadge,...d,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((i,m)=>r.jsxs("div",{className:t.breadcrumbItem,children:[m===e.length-1?r.jsx("a",{role:"link","aria-label":i.label,"aria-current":"page",tabIndex:0,children:i.label}):r.jsx(x,{href:i.link,label:i.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),m<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:t.separator,children:"/"})]},i.link))})});s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Ie={title:"Breadcrumbs",component:s,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},re=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],n={args:{items:re},render:e=>r.jsx(s,{...e,"data-testid":"breadcrumbs"})},g={args:{...n.args},render:e=>r.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const c=w(e).getByTestId("breadcrumbs").querySelectorAll("div"),b=c[c.length-1].querySelector("a");a.items.forEach(async()=>{await l.tab()}),await I(()=>u(b).toHaveFocus()),await l.tab({shift:!0}),u(c[c.length-2].querySelector("a")).toHaveFocus()}},h={args:{...n.args,items:[...n.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(s,{...e,"data-testid":"breadcrumbs"}),r.jsx(s,{...n.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=w(e),d=a.getByTestId("breadcrumbs"),c=a.getByTestId("breadcrumbs-truncated");u(w(d).queryByTestId("show-more")).not.toBeInTheDocument(),u(w(c).queryByTestId("show-more")).toBeInTheDocument()}},y={args:{...n.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(s,{...e,items:e.items.slice(0,1)}),r.jsx(s,{...e,items:e.items.slice(0,2)}),r.jsx(s,{...e,items:e.items.slice(0,3)}),r.jsx(s,{...e,items:e.items})]})},v={args:{...n.args,items:[...n.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await l.tab(),await l.tab(),await l.keyboard(O);const e=document.querySelector(`[data-dropdown-id="breadcrumbs-truncated-listFil d'Ariane"]`);u(e).toBeInTheDocument(),await l.tab(),await I(()=>{var a;return u((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()}),await l.keyboard(P),await I(()=>{var a;return u((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[1]).toHaveFocus()}),await l.keyboard(U),await I(()=>{var a;return u((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()})}};var f,j,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var _,N,D;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(q=(F=h.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var A,C,H;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(C=y.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var R,K,L;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};const Ee=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{n as Default,g as KeyboardNavigation,v as KeyboardNavigationWithDropdown,y as MultipleElements,h as Truncated,Ee as __namedExportsOrder,Ie as default};
