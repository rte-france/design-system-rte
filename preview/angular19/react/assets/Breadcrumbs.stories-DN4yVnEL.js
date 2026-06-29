import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as P,a as G,b as R}from"./keyboard-test.constants-DRUxacrk.js";import{within as y,userEvent as o,expect as d,waitFor as h}from"./index-o3q5y4Vk.js";import{f as Y}from"./testing.utils-HTwqi-0x.js";import{R as O,T as A}from"./Icon-DgLH6pPJ.js";import{B as t}from"./Breadcrumbs-BHKxQq5t.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./index-BH7jo-UD.js";import"./Badge-krITzoP9.js";import"./index-G8LIXM5I.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./DropdownItem-8b_lIg0e.js";import"./BaseDropdown-4OWN-rN5.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-HZdrGdmr.js";import"./common-button.constants-eNlmcvUj.js";import"./Link-DLPtM2IA.js";import"./Tooltip-CfBhtBRO.js";const V=Object.keys(O),U=Object.keys(A),Se={title:"Composants/Breadcrumbs/Breadcrumbs",component:t,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...V,...U].sort((e,i)=>e.localeCompare(i))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},$=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],s={args:{items:$},render:e=>a.jsx(t,{...e,"data-testid":"breadcrumbs"})},u={args:{...s.args},render:e=>a.jsx(t,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const c=y(e).getByTestId("breadcrumbs").querySelectorAll("div"),r=c[0].querySelector("a");r==null||r.focus();const n=c[c.length-1].querySelector("a");await o.tab(),await o.tab(),await o.tab(),d(n).toHaveFocus(),await o.tab({shift:!0}),d(c[c.length-2].querySelector("a")).toHaveFocus()}},m={args:{...s.args,items:[...s.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,"data-testid":"breadcrumbs"}),a.jsx(t,{...s.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const i=y(e),c=i.getByTestId("breadcrumbs"),r=i.getByTestId("breadcrumbs-truncated");d(y(c).queryByTestId("show-more")).not.toBeInTheDocument(),d(y(r).queryByTestId("show-more")).toBeInTheDocument()}},l={args:{...s.args,breadcrumbItemMaxWidth:50},render:e=>a.jsx(t,{...e,"data-testid":"breadcrumbs"})},b={args:{...s.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(t,{...e,items:e.items.slice(0,1)}),a.jsx(t,{...e,items:e.items.slice(0,2)}),a.jsx(t,{...e,items:e.items.slice(0,3)}),a.jsx(t,{...e,items:e.items})]})},p={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>a.jsx(t,{...e,"data-testid":"breadcrumbs"})},g={args:{...s.args,items:[...s.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(t,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{Y(e),await o.tab(),await o.tab(),await o.keyboard(P);const c=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${c}"]`);d(r).toBeInTheDocument(),await o.tab(),await h(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()}),await o.keyboard(G),await h(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[1]).toHaveFocus()}),await o.keyboard(R),await h(()=>{var n;return d((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()})}};var w,v,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(T=(v=s.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var B,E,S;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(S=(E=u.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var I,x,f;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(x=m.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var k,F,q;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(q=(F=l.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var D,C,j;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(j=(C=b.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var H,N,_;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      link: "/"
    }, {
      label: "Products",
      link: "/products",
      badgeContent: "number",
      badgeCount: 5,
      badgeType: "indicator",
      showBadge: true
    }, {
      label: "Electronics",
      link: "/products/electronics"
    }, {
      label: "Smartphones",
      link: "/products/electronics/smartphones"
    }],
    badgeContent: "empty",
    badgeCount: 5,
    badgeType: "indicator",
    showBadge: true
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var W,K,M;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};const Ie=["Default","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{s as Default,u as KeyboardNavigation,g as KeyboardNavigationWithDropdown,l as MaxWidthBreadcrumbItem,b as MultipleElements,m as Truncated,p as WithBadge,Ie as __namedExportsOrder,Se as default};
