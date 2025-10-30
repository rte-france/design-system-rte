import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as k,a as H,b as N}from"./keyboard-test.constants-D-GvhFnl.js";import{w as b,u as c,a as p,e as o}from"./index-DCXJbAaW.js";import{B as n}from"./Breadcrumbs-ChEiqn64.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./DropdownItem-4LmuXddf.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";import"./index-DSdvzt-y.js";import"./IconButton-CMN6gjhA.js";import"./Link-BaxOqisZ.js";const ee={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"}}},_=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],s={args:{items:_},render:e=>t.jsx(n,{...e,"data-testid":"breadcrumbs"})},i={args:{...s.args},render:e=>t.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:d})=>{const a=b(e).getByTestId("breadcrumbs").querySelectorAll("div"),j=a[a.length-1].querySelector("a");d.items.forEach(async()=>{await c.tab()}),await p(()=>o(j).toHaveFocus()),await c.tab({shift:!0}),o(a[a.length-2].querySelector("a")).toHaveFocus()}},u={args:{...s.args,items:[...s.args.items.slice(0,2)]},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...e,"data-testid":"breadcrumbs"}),t.jsx(n,{...s.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const d=b(e),r=d.getByTestId("breadcrumbs"),a=d.getByTestId("breadcrumbs-truncated");o(b(r).queryByTestId("show-more")).not.toBeInTheDocument(),o(b(a).queryByTestId("show-more")).toBeInTheDocument()}},m={args:{...s.args},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(n,{...e,items:e.items.slice(0,1)}),t.jsx(n,{...e,items:e.items.slice(0,2)}),t.jsx(n,{...e,items:e.items.slice(0,3)}),t.jsx(n,{...e,items:e.items})]})},l={args:{...s.args,items:[...s.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>t.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await c.tab(),await c.tab(),await c.keyboard(k);const d=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${d}"]`);o(r).toBeInTheDocument(),await c.tab(),await p(()=>{var a;return o((a=r==null?void 0:r.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()}),await c.keyboard(H),await p(()=>{var a;return o((a=r==null?void 0:r.querySelector("ul"))==null?void 0:a.children[1]).toHaveFocus()}),await c.keyboard(N),await p(()=>{var a;return o((a=r==null?void 0:r.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()})}};var g,y,w;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var h,v,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(v=i.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var E,B,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(B=u.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var x,I,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(I=m.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var F,D,q;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const ae=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{s as Default,i as KeyboardNavigation,l as KeyboardNavigationWithDropdown,m as MultipleElements,u as Truncated,ae as __namedExportsOrder,ee as default};
