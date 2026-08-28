import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ee,b as te,c as ae}from"./keyboard-test.constants-By8W48aj.js";import{w as u,u as c,e as s,a as m}from"./index-4rjIhT2C.js";import{M as re,u as ne,L as se,R as oe,a as l}from"./chunk-KS7C4IRE-kOmPZtMB.js";import{f as ce}from"./testing.utils-mIZIUNbM.js";import{N as z}from"./NavigationProvider-Bs4LKj9F.js";import{r as ie}from"./index-G8LIXM5I.js";import{R as de,T as me}from"./Icon-DgLH6pPJ.js";import{B as o}from"./Breadcrumbs-2DvUv6LK.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./NavigationContext-D2CUoNWC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./index-DJ8f9STe.js";import"./Dropdown-CQIC5Z84.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./DropdownItem-Cbt0nETo.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-ClER9-ap.js";import"./Link-B53ZmOEu.js";import"./IconButton-D7Ub3mhB.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton.module-DsipBz7u.js";import"./Tooltip-CQZMCJle.js";const J=ie.forwardRef(({href:e,children:a,onClick:n,...r},i)=>t.jsx("a",{ref:i,href:e,onClick:B=>{B.preventDefault(),n==null||n(B),console.log(`Navigating to ${e}`)},...r,children:a}));J.__docgenInfo={description:"",methods:[],displayName:"FakeRouterLink"};const ue=Object.keys(de),le=Object.keys(me),Ue={title:"Composants/Breadcrumbs/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...ue,...le].sort((e,a)=>e.localeCompare(a))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},Q=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],X=[{label:"Home",link:"/home"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],Z="breadcrumbs-truncated-listFil d'Ariane";function pe(){const e=document.getElementById("overlay-root"),a=e==null?void 0:e.querySelector(`[data-dropdown-id="${CSS.escape(Z)}"]`),n=a==null?void 0:a.querySelector('ul[role="menu"]');if(!n)throw new Error("Overflow menu not found");return u(n)}const be=()=>{const e=ne();return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:640},children:[t.jsxs("p",{style:{margin:0,lineHeight:1.6,color:"#555"},children:["Click breadcrumb items with ",t.jsx("code",{children:"link"})," to navigate in-app (URL updates, no reload). Wrap the component in"," ",t.jsx("code",{children:"NavigationProvider"})," with your router link component. With four items, ",t.jsx("code",{children:"Products"})," is collapsed into the overflow menu (",t.jsx("code",{children:"..."}),")."]}),t.jsx(z,{linkComponent:se,children:t.jsx(o,{items:X,"data-testid":"breadcrumbs-spa"})}),t.jsxs("p",{"data-testid":"current-route",style:{margin:0,fontFamily:"monospace",fontSize:12},children:["Current route: ",t.jsx("span",{"data-testid":"current-pathname",children:e.pathname})]}),t.jsxs(oe,{children:[t.jsx(l,{path:"/home",element:t.jsx("div",{"data-testid":"page-home",children:"Home page"})}),t.jsx(l,{path:"/products",element:t.jsx("div",{"data-testid":"page-products",children:"Products page"})}),t.jsx(l,{path:"/products/electronics",element:t.jsx("div",{"data-testid":"page-electronics",children:"Electronics page"})}),t.jsx(l,{path:"/products/electronics/smartphones",element:t.jsx("div",{"data-testid":"page-smartphones",children:"Smartphones page"})})]})]})},d={args:{items:Q},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},p={args:{items:Q},render:e=>t.jsx(z,{linkComponent:J,children:t.jsx(o,{...e,"data-testid":"breadcrumbs"})})},b={tags:["!autodocs"],args:{items:X},render:()=>t.jsx(re,{initialEntries:["/products/electronics/smartphones"],children:t.jsx(be,{})}),play:async({canvasElement:e})=>{const a=u(e),n=a.getByTestId("current-pathname");await m(()=>{s(n).toHaveTextContent("/products/electronics/smartphones"),s(a.getByTestId("page-smartphones")).toBeInTheDocument()}),s(a.getByTestId("show-more")).toBeInTheDocument(),await c.click(a.getByRole("link",{name:"Electronics"})),await m(()=>{s(n).toHaveTextContent("/products/electronics"),s(a.getByTestId("page-electronics")).toBeInTheDocument()}),await c.click(a.getByTestId("show-more")),await m(()=>{var r;s((r=document.getElementById("overlay-root"))==null?void 0:r.querySelector(`[data-dropdown-id="${CSS.escape(Z)}"] ul[role="menu"]`)).toBeInTheDocument()}),await c.click(pe().getByRole("menuitem",{name:"Products"})),await m(()=>{s(n).toHaveTextContent("/products"),s(a.getByTestId("page-products")).toBeInTheDocument()}),s(a.getByTestId("breadcrumbs-spa")).toBeInTheDocument()}},g={args:{...d.args},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const n=u(e).getByTestId("breadcrumbs").querySelectorAll("div"),r=n[0].querySelector("a");r==null||r.focus();const i=n[n.length-1].querySelector("a");await c.tab(),await c.tab(),await c.tab(),s(i).toHaveFocus(),await c.tab({shift:!0}),s(n[n.length-2].querySelector("a")).toHaveFocus()}},h={args:{...d.args,items:[...d.args.items.slice(0,2)]},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{...e,"data-testid":"breadcrumbs"}),t.jsx(o,{...d.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=u(e),n=a.getByTestId("breadcrumbs"),r=a.getByTestId("breadcrumbs-truncated");s(u(n).queryByTestId("show-more")).not.toBeInTheDocument(),s(u(r).queryByTestId("show-more")).toBeInTheDocument()}},y={args:{...d.args,breadcrumbItemMaxWidth:50},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},v={args:{...d.args},render:e=>t.jsxs(t.Fragment,{children:[t.jsx(o,{...e,items:e.items.slice(0,1)}),t.jsx(o,{...e,items:e.items.slice(0,2)}),t.jsx(o,{...e,items:e.items.slice(0,3)}),t.jsx(o,{...e,items:e.items})]})},w={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"})},T={args:{...d.args,items:[...d.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>t.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{ce(e),await c.tab(),await c.tab(),await c.keyboard(ee);const n=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),r=document.querySelector(`[data-dropdown-id="${n}"]`);s(r).toBeInTheDocument(),await c.tab(),await m(()=>{var i;return s((i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.children[0]).toHaveFocus()}),await c.keyboard(te),await m(()=>{var i;return s((i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.children[1]).toHaveFocus()}),await c.keyboard(ae),await m(()=>{var i;return s((i=r==null?void 0:r.querySelector("ul"))==null?void 0:i.children[0]).toHaveFocus()})}};var x,I,E;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var S,f,k;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <NavigationProvider linkComponent={FakeRouterLink}>
      <Breadcrumbs {...args} data-testid="breadcrumbs" />
    </NavigationProvider>
}`,...(k=(f=p.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var D,j,C;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(C=(j=b.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var N,F,R;g.parameters={...g.parameters,docs:{...(N=g.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(R=(F=g.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var H,q,P;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(P=(q=h.parameters)==null?void 0:q.docs)==null?void 0:P.source}}};var _,W,M;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(M=(W=y.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var O,K,L;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var A,G,Y;w.parameters={...w.parameters,docs:{...(A=w.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(Y=(G=w.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var $,U,V;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(U=T.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Ve=["Default","WithCustomRouter","SpaNavigation","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{d as Default,g as KeyboardNavigation,T as KeyboardNavigationWithDropdown,y as MaxWidthBreadcrumbItem,v as MultipleElements,b as SpaNavigation,h as Truncated,w as WithBadge,p as WithCustomRouter,Ve as __namedExportsOrder,Ue as default};
