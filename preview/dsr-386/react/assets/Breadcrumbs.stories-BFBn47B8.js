import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as ce,b as de,c as le}from"./keyboard-test.constants-C9whQEGR.js";import{within as F,userEvent as i,expect as h,waitFor as N}from"./index-DajN9u-m.js";import{f as ie}from"./testing.utils-C0VuMG32.js";import{s as se,B as v}from"./Badge-ySgcnoLk.js";import{r as m}from"./index-G8LIXM5I.js";import{D as ue,a as me}from"./DropdownItem-CBC2RPJN.js";import{I as be}from"./IconButton-CDXbfYzq.js";import{c as pe}from"./index-DSdvzt-y.js";import{L as A}from"./Link-BDst2CUj.js";import{T as H}from"./Tooltip-CWkf2d6y.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./Icon-DjEid3Hw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-GNmPbxh0.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CtOPxSY4.js";import"./index-B7EolvnA.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";const ge="Fil d'Ariane",ne=3,he=2;function ye(e,n=ne,a=he){if(oe(e,n))return{root:e[0],truncated:e.slice(1,e.length-a),remaining:e.slice(e.length-a)};throw new Error(`Breadcrumbs: 'items' should have at least ${n} items.`)}function oe(e,n=ne){return e.length>n}const xe="_breadcrumbItem_14isz_29",fe={breadcrumbItem:xe},k=({item:e,isLast:n,breadcrumbItemMaxWidth:a})=>{const[t,s]=m.useState(!1),x=m.useRef(),w=m.useRef(null);m.useEffect(()=>{var l;w.current&&(x.current=(l=w.current.querySelector("a"))==null?void 0:l.scrollWidth)},[]),m.useEffect(()=>{(()=>{x.current&&a&&s(x.current>=a)})()},[a]);const{showBadge:C,badgeContent:b,badgeCount:p,badgeIcon:g,badgeType:y}=e,u=se({showBadge:!!C,badgeContent:b,badgeCount:p,badgeIcon:g});return r.jsx("div",{className:fe.breadcrumbItem,ref:w,children:n?r.jsx(r.Fragment,{children:t?r.jsxs(H,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:-1,style:{maxWidth:`${a}px`},children:e.label}),u&&r.jsx(v,{count:p,content:b,icon:g,badgeType:y})]}):r.jsxs(r.Fragment,{children:[r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${a}px`},children:e.label}),u&&r.jsx(v,{count:p,content:b,icon:g,badgeType:y})]})}):r.jsx(r.Fragment,{children:t?r.jsxs(H,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:[r.jsx(A,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})," ",u&&r.jsx(v,{count:p,content:b,icon:g,badgeType:y})]}):r.jsxs(r.Fragment,{children:[r.jsx(A,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}}),u&&r.jsx(v,{count:p,content:b,icon:g,badgeType:y})]})})},e.link)};k.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};const we="_breadcrumbsContainer_2p6e3_29",Be="_breadcrumbItem_2p6e3_35",ve="_separator_2p6e3_64",f={breadcrumbsContainer:we,breadcrumbItem:Be,separator:ve},q=()=>r.jsx("span",{"aria-hidden":"true",className:f.separator,children:"/"}),o=m.forwardRef(({items:e,ariaLabel:n=ge,breadcrumbItemMaxWidth:a,badgeContent:t,badgeCount:s,badgeIcon:x,badgeType:w,showBadge:C,...b},p)=>{const[g,y]=m.useState(!1);if(oe(e)){const{root:u,truncated:l,remaining:D}=ye(e);return r.jsxs("nav",{ref:p,className:pe(f.breadcrumbsContainer,l.length?f.truncated:""),...b,role:"navigation","aria-label":n,children:[r.jsx(k,{item:u,isLast:!1,breadcrumbItemMaxWidth:a}),r.jsx(q,{}),r.jsx("span",{className:f.breadcrumbItem,children:r.jsx(ue,{dropdownId:"breadcrumbs-truncated-list"+n,onClose:()=>{y(!1)},trigger:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx(be,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>y(!g)}),se({showBadge:!!C,badgeContent:t,badgeCount:s,badgeIcon:x})&&r.jsx(v,{count:s,content:t,icon:x,badgeType:w})]}),isOpen:g,offset:6,children:l.map((d,B)=>r.jsx(me,{label:d.label,link:d.link,badgeCount:d.badgeCount,badgeContent:d.badgeContent,badgeIcon:d.badgeIcon,badgeType:d.badgeType,showBadge:d.showBadge},d.label+B))})}),r.jsx("span",{"aria-hidden":"true",className:f.separator,children:"/"}),D.map((d,B)=>r.jsxs(m.Fragment,{children:[r.jsx(k,{item:d,isLast:B===D.length-1,breadcrumbItemMaxWidth:a}),B<D.length-1&&r.jsx(q,{})]},d.label+B))]})}return r.jsx("nav",{ref:p,className:f.breadcrumbsBadge,...b,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((u,l)=>r.jsxs(m.Fragment,{children:[r.jsx(k,{item:u,isLast:l===e.length-1,breadcrumbItemMaxWidth:a}),l<e.length-1&&r.jsx(q,{})]},u.label+l))})});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Ve={title:"Composants/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},Ee=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:Ee},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},E={args:{...c.args},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const a=F(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=a[0].querySelector("a");t==null||t.focus();const s=a[a.length-1].querySelector("a");await i.tab(),await i.tab(),await i.tab(),h(s).toHaveFocus(),await i.tab({shift:!0}),h(a[a.length-2].querySelector("a")).toHaveFocus()}},T={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,"data-testid":"breadcrumbs"}),r.jsx(o,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const n=F(e),a=n.getByTestId("breadcrumbs"),t=n.getByTestId("breadcrumbs-truncated");h(F(a).queryByTestId("show-more")).not.toBeInTheDocument(),h(F(t).queryByTestId("show-more")).toBeInTheDocument()}},I={args:{...c.args,breadcrumbItemMaxWidth:50},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},j={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,items:e.items.slice(0,1)}),r.jsx(o,{...e,items:e.items.slice(0,2)}),r.jsx(o,{...e,items:e.items.slice(0,3)}),r.jsx(o,{...e,items:e.items})]})},S={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},_={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{ie(e),await i.tab(),await i.tab(),await i.keyboard(ce);const a=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),t=document.querySelector(`[data-dropdown-id="${a}"]`);h(t).toBeInTheDocument(),await i.tab(),await N(()=>{var s;return h((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[0]).toHaveFocus()}),await i.keyboard(de),await N(()=>{var s;return h((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[1]).toHaveFocus()}),await i.keyboard(le),await N(()=>{var s;return h((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[0]).toHaveFocus()})}};var R,L,$;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...($=(L=c.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var K,W,O;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(O=(W=E.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var P,G,U;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(U=(G=T.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var Y,V,z;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(z=(V=I.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var J,M,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Q=(M=j.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var X,Z,ee;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;_.parameters={..._.parameters,docs:{...(re=_.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(te=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};const ze=["Default","KeyboardNavigation","Truncated","maxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{c as Default,E as KeyboardNavigation,_ as KeyboardNavigationWithDropdown,j as MultipleElements,T as Truncated,S as WithBadge,ze as __namedExportsOrder,Ve as default,I as maxWidthBreadcrumbItem};
