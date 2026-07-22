import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as V,b as $,c as U}from"./keyboard-test.constants-By8W48aj.js";import{w as h,u as c,e as i,a as v}from"./index-4rjIhT2C.js";import{f as z}from"./testing.utils-mIZIUNbM.js";import{N as J}from"./NavigationProvider-DAqgPPPV.js";import{r as Q}from"./index-G8LIXM5I.js";import{R as X,T as Z}from"./Icon-DgLH6pPJ.js";import{B as s}from"./Breadcrumbs-DfthRkif.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./Link-DxnKzGV5.js";import"./index-DJ8f9STe.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./DropdownItem-mnXfFIa5.js";import"./BaseDropdown-Czs52lGx.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-C8hWUkyN.js";import"./IconButton-en7B25KO.js";import"./common-button.constants-eNlmcvUj.js";import"./Tooltip-9hqxBVC1.js";const A=Q.forwardRef(({href:e,children:d,onClick:t,...r},n)=>a.jsx("a",{ref:n,href:e,onClick:w=>{w.preventDefault(),t==null||t(w),console.log(`Navigating to ${e}`)},...r,children:d}));A.__docgenInfo={description:"",methods:[],displayName:"FakeRouterLink"};const ee=Object.keys(X),re=Object.keys(Z),qe={title:"Composants/Breadcrumbs/Breadcrumbs",component:s,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ee,...re].sort((e,d)=>e.localeCompare(d))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},L=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],o={args:{items:L},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},m={args:{items:L},render:e=>a.jsx(J,{linkComponent:A,children:a.jsx(s,{...e,"data-testid":"breadcrumbs"})})},u={args:{...o.args},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const t=h(e).getByTestId("breadcrumbs").querySelectorAll("div"),r=t[0].querySelector("a");r==null||r.focus();const n=t[t.length-1].querySelector("a");await c.tab(),await c.tab(),await c.tab(),i(n).toHaveFocus(),await c.tab({shift:!0}),i(t[t.length-2].querySelector("a")).toHaveFocus()}},l={args:{...o.args,items:[...o.args.items.slice(0,2)]},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,"data-testid":"breadcrumbs"}),a.jsx(s,{...o.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const d=h(e),t=d.getByTestId("breadcrumbs"),r=d.getByTestId("breadcrumbs-truncated");i(h(t).queryByTestId("show-more")).not.toBeInTheDocument(),i(h(r).queryByTestId("show-more")).toBeInTheDocument()}},b={args:{...o.args,breadcrumbItemMaxWidth:50},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},p={args:{...o.args},render:e=>a.jsxs(a.Fragment,{children:[a.jsx(s,{...e,items:e.items.slice(0,1)}),a.jsx(s,{...e,items:e.items.slice(0,2)}),a.jsx(s,{...e,items:e.items.slice(0,3)}),a.jsx(s,{...e,items:e.items})]})},g={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"})},y={args:{...o.args,items:[...o.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>a.jsx(s,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{z(e),await c.tab(),await c.tab(),await c.keyboard(V);const t=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${t}"]`);i(r).toBeInTheDocument(),await c.tab(),await v(()=>{var n;return i((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()}),await c.keyboard($),await v(()=>{var n;return i((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[1]).toHaveFocus()}),await c.keyboard(U),await v(()=>{var n;return i((n=r==null?void 0:r.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()})}};var B,T,E;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(E=(T=o.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,S,f;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <NavigationProvider linkComponent={FakeRouterLink}>
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </NavigationProvider>
}`,...(f=(S=m.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,k,F;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(F=(k=u.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var j,D,q;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(q=(D=l.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var C,N,H;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(H=(N=b.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var _,W,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var K,P,M;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(M=(P=g.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var G,Y,O;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(O=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:O.source}}};const Ce=["Default","WithCustomRouter","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{o as Default,u as KeyboardNavigation,y as KeyboardNavigationWithDropdown,b as MaxWidthBreadcrumbItem,p as MultipleElements,l as Truncated,g as WithBadge,m as WithCustomRouter,Ce as __namedExportsOrder,qe as default};
