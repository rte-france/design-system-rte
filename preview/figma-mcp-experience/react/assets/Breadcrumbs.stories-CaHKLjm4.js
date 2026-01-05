import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as K,a as W,b as C}from"./keyboard-test.constants-fmK-LbIX.js";import{within as g,userEvent as c,expect as d,waitFor as y}from"./index-DajN9u-m.js";import{f as G}from"./testing.utils-C0VuMG32.js";import{B as s}from"./Breadcrumbs-Bq75YKvm.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./DropdownItem-DwBxpgCe.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-GNmPbxh0.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CtOPxSY4.js";import"./index-B7EolvnA.js";import"./index-BLHw34Di.js";import"./index-DSdvzt-y.js";import"./IconButton-tztXzQKL.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Cd3dEy6T.js";import"./Link-BDst2CUj.js";import"./Tooltip-CWkf2d6y.js";const me={title:"Composants/Breadcrumbs/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},Y=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],t={args:{items:Y},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},m={args:{...t.args},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const o=g(e).getByTestId("breadcrumbs").querySelectorAll("div"),r=o[0].querySelector("a");r==null||r.focus();const n=o[o.length-1].querySelector("a");await c.tab(),await c.tab(),await c.tab(),d(n).toHaveFocus(),await c.tab({shift:!0}),d(o[o.length-2].querySelector("a")).toHaveFocus()}},i={args:{...t.args,items:[...t.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,"data-testid":"breadcrumbs"}),a.jsx(s,{...t.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const u=g(e),o=u.getByTestId("breadcrumbs"),r=u.getByTestId("breadcrumbs-truncated");d(g(o).queryByTestId("show-more")).not.toBeInTheDocument(),d(g(r).queryByTestId("show-more")).toBeInTheDocument()}},b={args:{...t.args,breadcrumbItemMaxWidth:50},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},l={args:{...t.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,items:e.items.slice(0,1)}),a.jsx(s,{...e,items:e.items.slice(0,2)}),a.jsx(s,{...e,items:e.items.slice(0,3)}),a.jsx(s,{...e,items:e.items})]})},p={args:{...t.args,items:[...t.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{G(e),await c.tab(),await c.tab(),await c.keyboard(K);const o=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${o}"]`);d(r).toBeInTheDocument(),await c.tab(),await y(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()}),await c.keyboard(W),await y(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[1]).toHaveFocus()}),await c.keyboard(C),await y(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()})}};var v,h,w;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var E,T,B;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const breadcrumbs = canvas.getByTestId("breadcrumbs").querySelectorAll("div");
    const first = breadcrumbs[0].querySelector("a");
    first?.focus();
    const breadCrumbsHead = breadcrumbs[breadcrumbs.length - 1].querySelector("a");
    await userEvent.tab();
    await userEvent.tab();
    await userEvent.tab();
    expect(breadCrumbsHead).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(breadcrumbs[breadcrumbs.length - 2].querySelector("a")).toHaveFocus();
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var S,x,f;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(f=(x=i.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var I,F,q;b.parameters={...b.parameters,docs:{...(I=b.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(q=(F=b.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var D,j,k;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var H,N,_;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
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
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const ie=["Default","KeyboardNavigation","Truncated","maxWidthBreadcrumbItem","MultipleElements","KeyboardNavigationWithDropdown"];export{t as Default,m as KeyboardNavigation,p as KeyboardNavigationWithDropdown,l as MultipleElements,i as Truncated,ie as __namedExportsOrder,me as default,b as maxWidthBreadcrumbItem};
