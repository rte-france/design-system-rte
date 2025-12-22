import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as J,b as Q,c as X}from"./keyboard-test.constants-C9whQEGR.js";import{w as B,u as i,e as d,a as S}from"./index-DCXJbAaW.js";import{f as Z}from"./testing.utils-qrsqQ6ZN.js";import{r as u}from"./index-G8LIXM5I.js";import{D as ee,a as re}from"./DropdownItem-CYjehUVm.js";import{I as ae}from"./IconButton-tztXzQKL.js";import{c as te}from"./index-DSdvzt-y.js";import{L as _}from"./Link-BDst2CUj.js";import{T as k}from"./Tooltip-BvOI1vaV.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-GNmPbxh0.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Cd3dEy6T.js";const se="Fil d'Ariane",z=3,ne=2;function oe(e,n=z,a=ne){if(M(e,n))return{root:e[0],truncated:e.slice(1,e.length-a),remaining:e.slice(e.length-a)};throw new Error(`Breadcrumbs: 'items' should have at least ${n} items.`)}function M(e,n=z){return e.length>n}const ce="_breadcrumbItem_1xofj_29",ie={breadcrumbItem:ce},T=({item:e,isLast:n,breadcrumbItemMaxWidth:a})=>{const[t,s]=u.useState(!1),m=u.useRef(),b=u.useRef(null);return u.useEffect(()=>{var l;b.current&&(m.current=(l=b.current.querySelector("a"))==null?void 0:l.scrollWidth)},[]),u.useEffect(()=>{(()=>{m.current&&a&&s(m.current>=a)})()},[a]),r.jsx("div",{className:ie.breadcrumbItem,ref:b,children:n?r.jsx(r.Fragment,{children:t?r.jsx(k,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:-1,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx(r.Fragment,{children:t?r.jsx(k,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:r.jsx(_,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})}):r.jsx(_,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})})},e.link)};T.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  link: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbItemMaxWidth:{required:!1,tsType:{name:"number"},description:""}}};const le="_breadcrumbsContainer_2p6e3_29",ue="_breadcrumbItem_2p6e3_35",de="_separator_2p6e3_64",h={breadcrumbsContainer:le,breadcrumbItem:ue,separator:de},j=()=>r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),o=u.forwardRef(({items:e,ariaLabel:n=se,breadcrumbItemMaxWidth:a,...t},s)=>{const[m,b]=u.useState(!1);if(M(e)){const{root:l,truncated:p,remaining:I}=oe(e);return r.jsxs("nav",{ref:s,className:te(h.breadcrumbsContainer,p.length?h.truncated:""),...t,role:"navigation","aria-label":n,children:[r.jsx(T,{item:{label:l.label,link:l.link},isLast:!1,breadcrumbItemMaxWidth:a}),r.jsx(j,{}),r.jsx("span",{className:h.breadcrumbItem,children:r.jsx(ee,{dropdownId:"breadcrumbs-truncated-list"+n,onClose:()=>{b(!1)},trigger:r.jsx(ae,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>b(!m)}),isOpen:m,offset:6,children:p.map((g,y)=>r.jsx(re,{label:g.label,link:g.link},g.label+y))})}),r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),I.map((g,y)=>r.jsxs(u.Fragment,{children:[r.jsx(T,{item:g,isLast:y===I.length-1,breadcrumbItemMaxWidth:a}),y<I.length-1&&r.jsx(j,{})]},g.label+y))]})}return r.jsx("nav",{ref:s,className:h.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((l,p)=>r.jsxs(u.Fragment,{children:[r.jsx(T,{item:l,isLast:p===e.length-1,breadcrumbItemMaxWidth:a}),p<e.length-1&&r.jsx(j,{})]},l.label+p))})});o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const He={title:"Composants/Breadcrumbs",component:o,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},me=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:me},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},f={args:{...c.args},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{const a=B(e).getByTestId("breadcrumbs").querySelectorAll("div"),t=a[0].querySelector("a");t==null||t.focus();const s=a[a.length-1].querySelector("a");await i.tab(),await i.tab(),await i.tab(),d(s).toHaveFocus(),await i.tab({shift:!0}),d(a[a.length-2].querySelector("a")).toHaveFocus()}},v={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,"data-testid":"breadcrumbs"}),r.jsx(o,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const n=B(e),a=n.getByTestId("breadcrumbs"),t=n.getByTestId("breadcrumbs-truncated");d(B(a).queryByTestId("show-more")).not.toBeInTheDocument(),d(B(t).queryByTestId("show-more")).toBeInTheDocument()}},x={args:{...c.args,breadcrumbItemMaxWidth:50},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"})},w={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(o,{...e,items:e.items.slice(0,1)}),r.jsx(o,{...e,items:e.items.slice(0,2)}),r.jsx(o,{...e,items:e.items.slice(0,3)}),r.jsx(o,{...e,items:e.items})]})},E={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(o,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e})=>{Z(e),await i.tab(),await i.tab(),await i.keyboard(J);const a=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),t=document.querySelector(`[data-dropdown-id="${a}"]`);d(t).toBeInTheDocument(),await i.tab(),await S(()=>{var s;return d((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[0]).toHaveFocus()}),await i.keyboard(Q),await S(()=>{var s;return d((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[1]).toHaveFocus()}),await i.keyboard(X),await S(()=>{var s;return d((s=t==null?void 0:t.querySelector("ul"))==null?void 0:s.children[0]).toHaveFocus()})}};var F,q,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(D=(q=c.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var N,A,C;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(A=f.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,R,L;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(R=v.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var $,K,O;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    breadcrumbItemMaxWidth: 50
  },
  render: args => {
    return <Breadcrumbs {...args} data-testid="breadcrumbs" />;
  }
}`,...(O=(K=x.parameters)==null?void 0:K.docs)==null?void 0:O.source}}};var W,G,P;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(G=w.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var U,Y,V;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(V=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};const Re=["Default","KeyboardNavigation","Truncated","maxWidthBreadcrumbItem","MultipleElements","KeyboardNavigationWithDropdown"];export{c as Default,f as KeyboardNavigation,E as KeyboardNavigationWithDropdown,w as MultipleElements,v as Truncated,Re as __namedExportsOrder,He as default,x as maxWidthBreadcrumbItem};
