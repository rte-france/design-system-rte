import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as le,b as de,c as ie}from"./keyboard-test.constants-By8W48aj.js";import{w as k,u as i,e as g,a as N}from"./index-BfPN6pki.js";import{f as ue}from"./testing.utils-CYMf4Aux.js";import{R as me,T as be}from"./Icon-DjEid3Hw.js";import{s as ne,B as v}from"./Badge-b6ITl72-.js";import{r as m}from"./index-G8LIXM5I.js";import{D as pe,a as ge}from"./DropdownItem-BOZaRisd.js";import{I as he}from"./IconButton-HpHSljm-.js";import{c as ye}from"./index-DSdvzt-y.js";import{L as R}from"./Link-Cg70Z2zF.js";import{T as H}from"./Tooltip-DfiIzwu1.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Checkbox-COL5NWrm.js";import"./Divider-cNGLKJiC.js";import"./auto-placement-C6RxYMtA.js";import"./dom.constants-41SiyeDe.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-CQ0GhNxd.js";import"./index-CFcDIoS3.js";import"./index-BO2TEXkE.js";import"./common-button.constants-eNlmcvUj.js";const xe="Fil d'Ariane",oe=3,fe=2;function we(e,s=oe,a=fe){if(ce(e,s))return{root:e[0],truncated:e.slice(1,e.length-a),remaining:e.slice(e.length-a)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function ce(e,s=oe){return e.length>s}const Be="_breadcrumbItem_1ybl5_1",ve={breadcrumbItem:Be},F=({item:e,isLast:s,breadcrumbItemMaxWidth:a})=>{const[t,n]=m.useState(!1),x=m.useRef(),w=m.useRef(null);m.useEffect(()=>{var d;w.current&&(x.current=(d=w.current.querySelector("a"))==null?void 0:d.scrollWidth)},[]),m.useEffect(()=>{(()=>{x.current&&a&&n(x.current>=a)})()},[a]);const{showBadge:D,badgeContent:h,badgeCount:b,badgeIcon:p,badgeType:y,badgeSize:I}=e,u=ne({showBadge:!!D,badgeContent:h,badgeCount:b,badgeIcon:p});return r.jsx("div",{className:ve.breadcrumbItem,ref:w,children:s?r.jsx(r.Fragment,{children:t?r.jsxs(H,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:[r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:-1,style:{maxWidth:`${a}px`},children:e.label}),u&&r.jsx(v,{count:b,content:h,icon:p,badgeType:y,size:I})]}):r.jsxs(r.Fragment,{children:[r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${a}px`},children:e.label}),u&&r.jsx(v,{count:b,content:h,icon:p,badgeType:y})]})}):r.jsx(r.Fragment,{children:t?r.jsxs(H,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:[r.jsx(R,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})," ",u&&r.jsx(v,{count:b,content:h,icon:p,badgeType:y})]}):r.jsxs(r.Fragment,{children:[r.jsx(R,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}}),u&&r.jsx(v,{count:b,content:h,icon:p,badgeType:y})]})})},e.link)};F.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};const Ie="_breadcrumbsContainer_12g5q_1",Te="_breadcrumbItem_12g5q_7",Ee="_separator_12g5q_36",f={breadcrumbsContainer:Ie,breadcrumbItem:Te,separator:Ee},A=()=>r.jsx("span",{"aria-hidden":"true",className:f.separator,children:"/"}),o=m.forwardRef(({items:e,ariaLabel:s=xe,breadcrumbItemMaxWidth:a,badgeContent:t,badgeCount:n,badgeIcon:x,badgeType:w,badgeSize:D,showBadge:h,...b},p)=>{const[y,I]=m.useState(!1);if(ce(e)){const{root:u,truncated:d,remaining:q}=we(e);return r.jsxs("nav",{ref:p,className:ye(f.breadcrumbsContainer,d.length?f.truncated:""),...b,role:"navigation","aria-label":s,children:[r.jsx(F,{item:u,isLast:!1,breadcrumbItemMaxWidth:a}),r.jsx(A,{}),r.jsx("span",{className:f.breadcrumbItem,children:r.jsx(pe,{dropdownId:"breadcrumbs-truncated-list"+s,onClose:()=>{I(!1)},trigger:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[r.jsx(he,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>I(!y)}),ne({showBadge:!!h,badgeContent:t,badgeCount:n,badgeIcon:x})&&r.jsx(v,{count:n,content:t,icon:x,badgeType:w,size:D})]}),isOpen:y,offset:6,children:d.map((l,B)=>r.jsx(ge,{label:l.label,link:l.link,badgeCount:l.badgeCount,badgeContent:l.badgeContent,badgeIcon:l.badgeIcon,badgeType:l.badgeType,showBadge:l.showBadge},l.label+B))})}),r.jsx("span",{"aria-hidden":"true",className:f.separator,children:"/"}),q.map((l,B)=>r.jsxs(m.Fragment,{children:[r.jsx(F,{item:l,isLast:B===q.length-1,breadcrumbItemMaxWidth:a}),B<q.length-1&&r.jsx(A,{})]},l.label+B))]})}return r.jsx("nav",{ref:p,className:f.breadcrumbsBadge,...b,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((u,d)=>r.jsxs(m.Fragment,{children:[r.jsx(F,{item:u,isLast:d===e.length-1,breadcrumbItemMaxWidth:a}),d<e.length-1&&r.jsx(A,{})]},u.label+d))})});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const je=Object.keys(me),Se=Object.keys(be),er={title:"Composants/Breadcrumbs/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"},badgeContent:{control:"select",options:["number","icon","empty"]},badgeType:{control:"select",options:["brand","neutral","indicator"]},badgeIcon:{control:"select",options:["",...je,...Se].sort((e,s)=>e.localeCompare(s))},showBadge:{control:"boolean"},badgeCount:{control:"number"},badgeSize:{control:"select",options:["xs","s","m","l"]}}},_e=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:_e},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},T={args:{...c.args},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const a=k(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=a[0].querySelector("a");t==null||t.focus();const n=a[a.length-1].querySelector("a");await i.tab(),await i.tab(),await i.tab(),g(n).toHaveFocus(),await i.tab({shift:!0}),g(a[a.length-2].querySelector("a")).toHaveFocus()}},E={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,"data-testid":"breadcrumbs"}),r.jsx(o,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=k(e),a=s.getByTestId("breadcrumbs"),t=s.getByTestId("breadcrumbs-truncated");g(k(a).queryByTestId("show-more")).not.toBeInTheDocument(),g(k(t).queryByTestId("show-more")).toBeInTheDocument()}},j={args:{...c.args,breadcrumbItemMaxWidth:50},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},S={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,items:e.items.slice(0,1)}),r.jsx(o,{...e,items:e.items.slice(0,2)}),r.jsx(o,{...e,items:e.items.slice(0,3)}),r.jsx(o,{...e,items:e.items})]})},_={args:{items:[{label:"Home",link:"/"},{label:"Products",link:"/products",badgeContent:"number",badgeCount:5,badgeType:"indicator",showBadge:!0},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],badgeContent:"empty",badgeCount:5,badgeType:"indicator",showBadge:!0},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},C={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{ue(e),await i.tab(),await i.tab(),await i.keyboard(le);const a=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),t=document.querySelector(`[data-dropdown-id="${a}"]`);g(t).toBeInTheDocument(),await i.tab(),await N(()=>{var n;return g((n=t==null?void 0:t.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()}),await i.keyboard(de),await N(()=>{var n;return g((n=t==null?void 0:t.querySelector("ul"))==null?void 0:n.children[1]).toHaveFocus()}),await i.keyboard(ie),await N(()=>{var n;return g((n=t==null?void 0:t.querySelector("ul"))==null?void 0:n.children[0]).toHaveFocus()})}};var L,$,K;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(K=($=c.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var O,W,P;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(W=T.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,U,Y;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(Y=(U=E.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var z,V,M;j.parameters={...j.parameters,docs:{...(z=j.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(M=(V=j.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,re;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(re=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,se;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(te=C.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const rr=["Default","KeyboardNavigation","Truncated","MaxWidthBreadcrumbItem","MultipleElements","WithBadge","KeyboardNavigationWithDropdown"];export{c as Default,T as KeyboardNavigation,C as KeyboardNavigationWithDropdown,j as MaxWidthBreadcrumbItem,S as MultipleElements,E as Truncated,_ as WithBadge,rr as __namedExportsOrder,er as default};
