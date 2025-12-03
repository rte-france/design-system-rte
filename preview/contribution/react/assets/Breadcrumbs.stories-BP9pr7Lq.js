import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as J,b as Q,c as X}from"./keyboard-test.constants-C9whQEGR.js";import{w as T,u as l,a as B,e as d}from"./index-DCXJbAaW.js";import{r as i}from"./index-G8LIXM5I.js";import{D as Z,a as ee}from"./DropdownItem-BB7elJw4.js";import{I as re}from"./IconButton-DU9lNzF3.js";import{c as ae}from"./index-DSdvzt-y.js";import{L as _}from"./Link-DbCKFFRz.js";import{T as F}from"./Tooltip-DzfJXQf8.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-BPBlxbj_.js";import"./Icon-DjEid3Hw.js";import"./auto-placement-C6RxYMtA.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-5j7SEEoz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";const te="Fil d'Ariane",z=3,se=2;function ne(e,s=z,a=se){if(M(e,s))return{root:e[0],truncated:e.slice(1,e.length-a),remaining:e.slice(e.length-a)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function M(e,s=z){return e.length>s}const ce="_breadcrumbItem_n20so_3",oe={breadcrumbItem:ce},I=({item:e,isLast:s,breadcrumbItemMaxWidth:a})=>{const[t,u]=i.useState(!1),m=i.useRef(),b=i.useRef(null);return i.useEffect(()=>{var o;b.current&&(m.current=(o=b.current.querySelector("a"))==null?void 0:o.scrollWidth)},[]),i.useEffect(()=>{(()=>{m.current&&a&&u(m.current>=a)})()},[a]),r.jsx("div",{className:oe.breadcrumbItem,ref:b,children:s?r.jsx(r.Fragment,{children:t?r.jsx(F,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:-1,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx(r.Fragment,{children:t?r.jsx(F,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:r.jsx(_,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})}):r.jsx(_,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})})},e.link)};I.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  link: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbItemMaxWidth:{required:!1,tsType:{name:"number"},description:""}}};const ie="_breadcrumbsContainer_1blt9_3",le="_breadcrumbItem_1blt9_9",de="_separator_1blt9_38",h={breadcrumbsContainer:ie,breadcrumbItem:le,separator:de},j=()=>r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),n=i.forwardRef(({items:e,ariaLabel:s=te,breadcrumbItemMaxWidth:a,...t},u)=>{const[m,b]=i.useState(!1);if(M(e)){const{root:o,truncated:p,remaining:S}=ne(e);return r.jsxs("nav",{ref:u,className:ae(h.breadcrumbsContainer,p.length?h.truncated:""),...t,role:"navigation","aria-label":s,children:[r.jsx(I,{item:{label:o.label,link:o.link},isLast:!1,breadcrumbItemMaxWidth:a}),r.jsx(j,{}),r.jsx("span",{className:h.breadcrumbItem,children:r.jsx(Z,{dropdownId:"breadcrumbs-truncated-list"+s,onClose:()=>{b(!1)},trigger:r.jsx(re,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>b(!m)}),isOpen:m,offset:6,children:p.map((g,y)=>r.jsx(ee,{label:g.label,link:g.link},g.label+y))})}),r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),S.map((g,y)=>r.jsxs(i.Fragment,{children:[r.jsx(I,{item:g,isLast:y===S.length-1,breadcrumbItemMaxWidth:a}),y<S.length-1&&r.jsx(j,{})]},g.label+y))]})}return r.jsx("nav",{ref:u,className:h.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((o,p)=>r.jsxs(i.Fragment,{children:[r.jsx(I,{item:o,isLast:p===e.length-1,breadcrumbItemMaxWidth:a}),p<e.length-1&&r.jsx(j,{})]},o.label+p))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Ae={title:"Composants/Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},ue=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:ue},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"})},f={args:{...c.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:s})=>{const t=T(e).getByTestId("breadcrumbs").querySelectorAll("div"),u=t[t.length-1].querySelector("a");s.items.forEach(async()=>{await l.tab()}),await B(()=>d(u).toHaveFocus()),await l.tab({shift:!0}),d(t[t.length-2].querySelector("a")).toHaveFocus()}},v={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=T(e),a=s.getByTestId("breadcrumbs"),t=s.getByTestId("breadcrumbs-truncated");d(T(a).queryByTestId("show-more")).not.toBeInTheDocument(),d(T(t).queryByTestId("show-more")).toBeInTheDocument()}},x={args:{...c.args,breadcrumbItemMaxWidth:50},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"})},w={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})},E={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await l.tab(),await l.tab(),await l.keyboard(J);const s=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),a=document.querySelector(`[data-dropdown-id="${s}"]`);d(a).toBeInTheDocument(),await l.tab(),await B(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()}),await l.keyboard(Q),await B(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[1]).toHaveFocus()}),await l.keyboard(X),await B(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()})}};var k,D,q;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(q=(D=c.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var N,A,C;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(Y=E.parameters)==null?void 0:Y.docs)==null?void 0:V.source}}};const Ce=["Default","KeyboardNavigation","Truncated","maxWidthBreadcrumbItem","MultipleElements","KeyboardNavigationWithDropdown"];export{c as Default,f as KeyboardNavigation,E as KeyboardNavigationWithDropdown,w as MultipleElements,v as Truncated,Ce as __namedExportsOrder,Ae as default,x as maxWidthBreadcrumbItem};
