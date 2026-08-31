import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as V,b as $,c as U}from"./keyboard-test.constants-By8W48aj.js";import{w as y,u as o,e as d,a as v}from"./index-4rjIhT2C.js";import{f as z}from"./testing.utils-BiEcdOD7.js";import{N as J}from"./NavigationProvider-Bs4LKj9F.js";import{r as Q}from"./index-G8LIXM5I.js";import{R as X,T as Z}from"./Icon-DgLH6pPJ.js";import{B as s}from"./Breadcrumbs-2DvUv6LK.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./NavigationContext-D2CUoNWC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./index-DJ8f9STe.js";import"./Dropdown-CQIC5Z84.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Cbt0nETo.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";import"./Link-B53ZmOEu.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";import"./Tooltip-CQZMCJle.js";const A=Q.forwardRef(({href:e,children:c,onClick:r,...t},h)=>a.jsx("a",{ref:h,href:e,onClick:w=>{w.preventDefault(),r==null||r(w),console.log(`Navigating to ${e}`)},...t,children:c}));A.__docgenInfo={description:"",methods:[],displayName:"FakeRouterLink"};const ee=Object.keys(X),re=Object.keys(Z),Ne={title:"Composants/Breadcrumbs/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ee,...re].sort((e,c)=>e.localeCompare(c))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},L=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],n={args:{items:L},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},i={args:{items:L},render:e=>a.jsx(J,{linkComponent:A,children:a.jsx(s,{...e,"data-testid":"breadcrumbs"})})},m={args:{...n.args},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const r=y(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=r[0].querySelector("a");t==null||t.focus();const h=r[r.length-1].querySelector("a");await o.tab(),await o.tab(),await o.tab(),d(h).toHaveFocus(),await o.tab({shift:!0}),d(r[r.length-2].querySelector("a")).toHaveFocus()}},u={args:{...n.args,items:[...n.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,"data-testid":"breadcrumbs"}),a.jsx(s,{...n.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const c=y(e),r=c.getByTestId("breadcrumbs"),t=c.getByTestId("breadcrumbs-truncated");d(y(r).queryByTestId("show-more")).not.toBeInTheDocument(),d(y(t).queryByTestId("show-more")).toBeInTheDocument()}},l={args:{...n.args,breadcrumbItemMaxWidth:50},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},b={args:{...n.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,items:e.items.slice(0,1)}),a.jsx(s,{...e,items:e.items.slice(0,2)}),a.jsx(s,{...e,items:e.items.slice(0,3)}),a.jsx(s,{...e,items:e.items})]})},p={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},g={args:{...n.args,items:[...n.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async()=>{z(),await o.tab(),await o.tab(),await o.keyboard(V);const c=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${c}"]`);d(r).toBeInTheDocument(),await o.tab(),await v(()=>{var t;return d((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()}),await o.keyboard($),await v(()=>{var t;return d((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[1]).toHaveFocus()}),await o.keyboard(U),await v(()=>{var t;return d((t=r==null?void 0:r.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()})}};var B,T,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,S,f;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <NavigationProvider linkComponent={FakeRouterLink}>
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </NavigationProvider>
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,k,F;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(k=m.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,D,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(D=u.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var C,N,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(H=(N=l.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var _,W,R;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(W=b.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var K,P,M;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(P=p.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var G,Y,O;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
    focusElementBeforeComponent();
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
}`,...(O=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const He=["Default","WithCustomRouter","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{n as Default,m as KeyboardNavigation,g as KeyboardNavigationWithDropdown,l as MaxWidthBreadcrumbItem,b as MultipleElements,u as Truncated,p as WithBadge,i as WithCustomRouter,He as __namedExportsOrder,Ne as default};
