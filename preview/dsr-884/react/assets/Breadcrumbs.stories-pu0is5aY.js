import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ee,b as te,c as ae}from"./keyboard-test.constants-By8W48aj.js";import{w as m,u as c,e as s,a as d}from"./index-4rjIhT2C.js";import{M as re,u as ne,L as se,R as oe,a as u}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as ce}from"./testing.utils-BiEcdOD7.js";import{N as V}from"./NavigationProvider-Bs4LKj9F.js";import{r as ie}from"./index-G8LIXM5I.js";import{R as de,T as me}from"./Icon-DgLH6pPJ.js";import{B as o}from"./Breadcrumbs-CXAcH3Na.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./NavigationContext-D2CUoNWC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./index-DJ8f9STe.js";import"./Dropdown-CQIC5Z84.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Cbt0nETo.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";import"./Link-B53ZmOEu.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";import"./Tooltip-IwW420ZV.js";const J=ie.forwardRef(({href:e,children:r,onClick:a,...n},T)=>t.jsx("a",{ref:T,href:e,onClick:B=>{B.preventDefault(),a==null||a(B),console.log(`Navigating to ${e}`)},...n,children:r}));J.__docgenInfo={description:"",methods:[],displayName:"FakeRouterLink"};const ue=Object.keys(de),le=Object.keys(me),Ue={title:"Composants/Breadcrumbs/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ue,...le].sort((e,r)=>e.localeCompare(r))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},Q=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],X=[{label:"Home",link:"/home"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],Z="breadcrumbs-truncated-listFil d'Ariane";function pe(){const e=document.getElementById("overlay-root"),r=e==null?void 0:e.querySelector(`[data-dropdown-id="${CSS.escape(Z)}"]`),a=r==null?void 0:r.querySelector('ul[role="menu"]');if(!a)throw new Error("Overflow menu not found");return m(a)}const be=()=>{const e=ne();return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:640},children:[t.jsxs("p",{style:{margin:0,lineHeight:1.6,color:"#555"},children:["Click breadcrumb items with ",t.jsx("code",{children:"link"})," to navigate in-app (URL updates, no reload). Wrap the component in"," ",t.jsx("code",{children:"NavigationProvider"})," with your router link component. With four items, ",t.jsx("code",{children:"Products"})," is collapsed into the overflow menu (",t.jsx("code",{children:"..."}),")."]}),t.jsx(V,{linkComponent:se,children:t.jsx(o,{items:X,"data-testid":"breadcrumbs-spa"})}),t.jsxs("p",{"data-testid":"current-route",style:{margin:0,fontFamily:"monospace",fontSize:12},children:["Current route: ",t.jsx("span",{"data-testid":"current-pathname",children:e.pathname})]}),t.jsxs(oe,{children:[t.jsx(u,{path:"/home",element:t.jsx("div",{"data-testid":"page-home",children:"Home page"})}),t.jsx(u,{path:"/products",element:t.jsx("div",{"data-testid":"page-products",children:"Products page"})}),t.jsx(u,{path:"/products/electronics",element:t.jsx("div",{"data-testid":"page-electronics",children:"Electronics page"})}),t.jsx(u,{path:"/products/electronics/smartphones",element:t.jsx("div",{"data-testid":"page-smartphones",children:"Smartphones page"})})]})]})},i={args:{items:Q},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},l={args:{items:Q},render:e=>t.jsx(V,{linkComponent:J,children:t.jsx(o,{...e,"data-testid":"breadcrumbs"})})},p={tags:["!autodocs"],args:{items:X},render:()=>t.jsx(re,{initialEntries:["/products/electronics/smartphones"],children:t.jsx(be,{})}),play:async({canvasElement:e})=>{const r=m(e),a=r.getByTestId("current-pathname");await d(()=>{s(a).toHaveTextContent("/products/electronics/smartphones"),s(r.getByTestId("page-smartphones")).toBeInTheDocument()}),s(r.getByTestId("show-more")).toBeInTheDocument(),await c.click(r.getByRole("link",{name:"Electronics"})),await d(()=>{s(a).toHaveTextContent("/products/electronics"),s(r.getByTestId("page-electronics")).toBeInTheDocument()}),await c.click(r.getByTestId("show-more")),await d(()=>{var n;s((n=document.getElementById("overlay-root"))==null?void 0:n.querySelector(`[data-dropdown-id="${CSS.escape(Z)}"] ul[role="menu"]`)).toBeInTheDocument()}),await c.click(pe().getByRole("menuitem",{name:"Products"})),await d(()=>{s(a).toHaveTextContent("/products"),s(r.getByTestId("page-products")).toBeInTheDocument()}),s(r.getByTestId("breadcrumbs-spa")).toBeInTheDocument()}},b={args:{...i.args},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const a=m(e).getByTestId("breadcrumbs").querySelectorAll("div"),n=a[0].querySelector("a");n==null||n.focus();const T=a[a.length-1].querySelector("a");await c.tab(),await c.tab(),await c.tab(),s(T).toHaveFocus(),await c.tab({shift:!0}),s(a[a.length-2].querySelector("a")).toHaveFocus()}},g={args:{...i.args,items:[...i.args.items.slice(0,2)]},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{...e,"data-testid":"breadcrumbs"}),t.jsx(o,{...i.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const r=m(e),a=r.getByTestId("breadcrumbs"),n=r.getByTestId("breadcrumbs-truncated");s(m(a).queryByTestId("show-more")).not.toBeInTheDocument(),s(m(n).queryByTestId("show-more")).toBeInTheDocument()}},h={args:{...i.args,breadcrumbItemMaxWidth:50},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},y={args:{...i.args},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{...e,items:e.items.slice(0,1)}),t.jsx(o,{...e,items:e.items.slice(0,2)}),t.jsx(o,{...e,items:e.items.slice(0,3)}),t.jsx(o,{...e,items:e.items})]})},v={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0,badgeSize:"xs"},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},w={args:{...i.args,items:[...i.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async()=>{ce(),await c.tab(),await c.tab(),await c.keyboard(ee);const r=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),a=document.querySelector(`[data-dropdown-id="${r}"]`);s(a).toBeInTheDocument(),await c.tab(),await d(()=>{var n;return s((n=a==null?void 0:a.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()}),await c.keyboard(te),await d(()=>{var n;return s((n=a==null?void 0:a.querySelector("ul"))==null?void 0:n.children[1]).toHaveFocus()}),await c.keyboard(ae),await d(()=>{var n;return s((n=a==null?void 0:a.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()})}};var x,I,E;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var S,f,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <NavigationProvider linkComponent={FakeRouterLink}>
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </NavigationProvider>
}`,...(k=(f=l.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var D,j,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    items: spaNavigationItems
  },
  render: () => <MemoryRouter initialEntries={["/products/electronics/smartphones"]}>
      <BreadcrumbsSpaNavigationDemo />
    </MemoryRouter>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const currentPathname = canvas.getByTestId("current-pathname");
    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics/smartphones");
      expect(canvas.getByTestId("page-smartphones")).toBeInTheDocument();
    });
    expect(canvas.getByTestId("show-more")).toBeInTheDocument();
    await userEvent.click(canvas.getByRole("link", {
      name: "Electronics"
    }));
    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products/electronics");
      expect(canvas.getByTestId("page-electronics")).toBeInTheDocument();
    });
    await userEvent.click(canvas.getByTestId("show-more"));
    await waitFor(() => {
      expect(document.getElementById("overlay-root")?.querySelector(\`[data-dropdown-id="\${CSS.escape(TRUNCATED_DROPDOWN_ID)}"] ul[role="menu"]\`)).toBeInTheDocument();
    });
    await userEvent.click(getOverflowMenu().getByRole("menuitem", {
      name: "Products"
    }));
    await waitFor(() => {
      expect(currentPathname).toHaveTextContent("/products");
      expect(canvas.getByTestId("page-products")).toBeInTheDocument();
    });
    expect(canvas.getByTestId("breadcrumbs-spa")).toBeInTheDocument();
  }
}`,...(C=(j=p.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,F,R;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(F=b.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var H,q,P;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(q=g.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var _,W,M;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(M=(W=h.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var O,K,L;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var A,G,Y;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    showBadge: true,
    badgeSize: "xs"
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(Y=(G=v.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var $,U,z;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(z=(U=w.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const ze=["Default","WithCustomRouter","SpaNavigation","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{i as Default,b as KeyboardNavigation,w as KeyboardNavigationWithDropdown,h as MaxWidthBreadcrumbItem,y as MultipleElements,p as SpaNavigation,g as Truncated,v as WithBadge,l as WithCustomRouter,ze as __namedExportsOrder,Ue as default};
