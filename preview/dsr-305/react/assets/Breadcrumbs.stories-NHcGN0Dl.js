import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as V,b as W,c as z}from"./keyboard-test.constants-BJ6DOKed.js";import{w as E,u as i,a as T,e as d}from"./index-DCXJbAaW.js";import{r as l}from"./index-G8LIXM5I.js";import{D as J,a as Q}from"./DropdownItem-4LmuXddf.js";import{I as X}from"./IconButton-CMN6gjhA.js";import{c as Z}from"./index-DSdvzt-y.js";import{L as j}from"./Link-BBbOz1gX.js";import{T as _}from"./Tooltip-CgPo5b8O.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-BPEscCvd.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";const M="Fil d'Ariane",U=3,ee=2;function re(e,s=U,a=ee){if(Y(e,s))return{root:e[0],truncated:e.slice(1,e.length-a),remaining:e.slice(e.length-a)};throw new Error(`Breadcrumbs: 'items' should have at least ${s} items.`)}function Y(e,s=U){return e.length>s}const ae="_breadcrumbItem_n20so_3",te={breadcrumbItem:ae},B=({item:e,isLast:s,breadcrumbItemMaxWidth:a})=>{const[t,u]=l.useState(!1),m=l.useRef(),b=l.useRef(null);return l.useEffect(()=>{var o;b.current&&(m.current=(o=b.current.querySelector("a"))==null?void 0:o.scrollWidth)},[]),l.useEffect(()=>{(()=>{m.current&&a&&u(m.current>=a)})()},[a]),r.jsx("div",{className:te.breadcrumbItem,ref:b,children:s?r.jsx(r.Fragment,{children:t?r.jsx(_,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:-1,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${a}px`},children:e.label})}):r.jsx(r.Fragment,{children:t?r.jsx(_,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${a}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:r.jsx(j,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})}):r.jsx(j,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${a}px`}})})},e.link)};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  link: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbItemMaxWidth:{required:!1,tsType:{name:"number"},description:""}}};const se="_breadcrumbsContainer_1blt9_3",ne="_breadcrumbItem_1blt9_9",ce="_separator_1blt9_38",h={breadcrumbsContainer:se,breadcrumbItem:ne,separator:ce},S=()=>r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),n=l.forwardRef(({items:e,ariaLabel:s=M,breadcrumbItemMaxWidth:a,...t},u)=>{const[m,b]=l.useState(!1);if(Y(e)){const{root:o,truncated:p,remaining:I}=re(e);return r.jsxs("nav",{ref:u,className:Z(h.breadcrumbsContainer,p.length?h.truncated:""),...t,role:"navigation","aria-label":s,children:[r.jsx(B,{item:{label:o.label,link:o.link},isLast:!1,breadcrumbItemMaxWidth:a}),r.jsx(S,{}),r.jsx("span",{className:h.breadcrumbItem,children:r.jsx(J,{dropdownId:"breadcrumbs-truncated-list"+s,onClose:()=>{b(!1)},trigger:r.jsx(X,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>b(!m)}),isOpen:m,offset:6,children:p.map((g,y)=>r.jsx(Q,{label:g.label,link:g.link},g.label+y))})}),r.jsx("span",{"aria-hidden":"true",className:h.separator,children:"/"}),I.map((g,y)=>r.jsxs(l.Fragment,{children:[r.jsx(B,{item:g,isLast:y===I.length-1,breadcrumbItemMaxWidth:a}),y<I.length-1&&r.jsx(S,{})]},g.label+y))]})}return r.jsx("nav",{ref:u,className:h.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((o,p)=>r.jsxs(l.Fragment,{children:[r.jsx(B,{item:o,isLast:p===e.length-1,breadcrumbItemMaxWidth:a}),p<e.length-1&&r.jsx(S,{})]},o.label+p))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const je={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},oe=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:oe},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"})},f={args:{...c.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:s})=>{const t=E(e).getByTestId("breadcrumbs").querySelectorAll("div"),u=t[t.length-1].querySelector("a");s.items.forEach(async()=>{await i.tab()}),await T(()=>d(u).toHaveFocus()),await i.tab({shift:!0}),d(t[t.length-2].querySelector("a")).toHaveFocus()}},v={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const s=E(e),a=s.getByTestId("breadcrumbs"),t=s.getByTestId("breadcrumbs-truncated");d(E(a).queryByTestId("show-more")).not.toBeInTheDocument(),d(E(t).queryByTestId("show-more")).toBeInTheDocument()}},w={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})},x={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await i.tab(),await i.tab(),await i.keyboard(V);const s=CSS.escape("breadcrumbs-truncated-listFil d'Ariane"),a=document.querySelector(`[data-dropdown-id="${s}"]`);d(a).toBeInTheDocument(),await i.tab(),await T(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()}),await i.keyboard(W),await T(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[1]).toHaveFocus()}),await i.keyboard(z),await T(()=>{var t;return d((t=a==null?void 0:a.querySelector("ul"))==null?void 0:t.children[0]).toHaveFocus()})}};var F,k,D;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var q,N,A;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(A=(N=f.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var C,H,R;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(H=v.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var L,$,K;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(K=($=w.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var O,G,P;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(P=(G=x.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const _e=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{c as Default,f as KeyboardNavigation,x as KeyboardNavigationWithDropdown,w as MultipleElements,v as Truncated,_e as __namedExportsOrder,je as default};
