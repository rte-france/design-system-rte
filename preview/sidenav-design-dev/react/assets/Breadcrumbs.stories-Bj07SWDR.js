import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as K,a as W,b as G}from"./keyboard-test.constants-D-GvhFnl.js";import{w as p,u as c,a as g,e as o}from"./index-DCXJbAaW.js";import{B as n}from"./Breadcrumbs-eP6eVpQc.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./DropdownItem-Kb6bRzwS.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B2eUObs8.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";import"./index-DSdvzt-y.js";import"./IconButton-CMN6gjhA.js";import"./Link-BBbOz1gX.js";import"./Tooltip-CgPo5b8O.js";const ne={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},Y=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],s={args:{items:Y},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"})},u={args:{...s.args},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:d})=>{const r=p(e).getByTestId("breadcrumbs").querySelectorAll("div"),_=r[r.length-1].querySelector("a");d.items.forEach(async()=>{await c.tab()}),await g(()=>o(_).toHaveFocus()),await c.tab({shift:!0}),o(r[r.length-2].querySelector("a")).toHaveFocus()}},i={args:{...s.args,items:[...s.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(n,{...e,"data-testid":"breadcrumbs"}),a.jsx(n,{...s.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const d=p(e),t=d.getByTestId("breadcrumbs"),r=d.getByTestId("breadcrumbs-truncated");o(p(t).queryByTestId("show-more")).not.toBeInTheDocument(),o(p(r).queryByTestId("show-more")).toBeInTheDocument()}},m={args:{...s.args,breadcrumbItemMaxWidth:50},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"})},b={args:{...s.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(n,{...e,items:e.items.slice(0,1)}),a.jsx(n,{...e,items:e.items.slice(0,2)}),a.jsx(n,{...e,items:e.items.slice(0,3)}),a.jsx(n,{...e,items:e.items})]})},l={args:{...s.args,items:[...s.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await c.tab(),await c.tab(),await c.keyboard(K);const d=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),t=document.querySelector(`[data-dropdown-id="${d}"]`);o(t).toBeInTheDocument(),await c.tab(),await g(()=>{var r;return o((r=t==null?void 0:t.querySelector("ul"))==null?void 0:r.children[0]).toHaveFocus()}),await c.keyboard(W),await g(()=>{var r;return o((r=t==null?void 0:t.querySelector("ul"))==null?void 0:r.children[1]).toHaveFocus()}),await c.keyboard(G),await g(()=>{var r;return o((r=t==null?void 0:t.querySelector("ul"))==null?void 0:r.children[0]).toHaveFocus()})}};var y,h,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(w=(h=s.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,T,E;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(E=(T=u.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var B,x,S;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(x=i.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var I,f,F;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(F=(f=m.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var D,q,j;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(q=b.parameters)==null?void 0:q.docs)==null?void 0:j.source}}};var k,H,N;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(N=(H=l.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};const ce=["Default","KeyboardNavigation","Truncated","maxWidthBreadcrumbItem","MultipleElements","KeyboardNavigationWithDropdown"];export{s as Default,u as KeyboardNavigation,l as KeyboardNavigationWithDropdown,b as MultipleElements,i as Truncated,ce as __namedExportsOrder,ne as default,m as maxWidthBreadcrumbItem};
