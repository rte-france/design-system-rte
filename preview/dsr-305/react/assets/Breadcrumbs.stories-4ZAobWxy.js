import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Y,b as W,c as z}from"./keyboard-test.constants-CMQ38wwt.js";import{w as E,u as l,a as T,e as d}from"./index-DCXJbAaW.js";import{r as u}from"./index-G8LIXM5I.js";import{D as V,a as J}from"./DropdownItem-CjQPOhjw.js";import{I as Q}from"./IconButton-CMN6gjhA.js";import{L as I}from"./Link-CEb8pzaR.js";import{c as X}from"./index-DSdvzt-y.js";import{T as S}from"./Tooltip-CgPo5b8O.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-Cu8HPmfw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useActiveKeyboard-DMcHctAZ.js";import"./Divider-B0TD5a92.js";import"./Icon-DjEid3Hw.js";import"./Overlay-xE_sH5Kz.js";import"./index-CRX2eyIH.js";import"./index-B6ujFmsw.js";import"./useAnimatedMount-_zPBpYOt.js";const Z="Fil d'Ariane",P=3,M=2;function ee(e,a=P,t=M){if(U(e,a))return{root:e[0],truncated:e.slice(1,e.length-t),remaining:e.slice(e.length-t)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function U(e,a=P){return e.length>a}const j=({item:e,isLast:a,breadcrumbItemMaxWidth:t})=>{const[s,m]=u.useState(!1),b=u.useRef(),p=u.useRef(null);return u.useEffect(()=>{p.current&&(b.current=p.current.scrollWidth)},[]),u.useEffect(()=>{(()=>{b.current&&t&&m(b.current>=t)})()},[t]),r.jsx("div",{ref:p,children:a?r.jsx(r.Fragment,{children:s?r.jsx(S,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${t}px`,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${t}px`},children:e.label})}):r.jsx("a",{role:"link","aria-label":e.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${t}px`},children:e.label})}):r.jsx(r.Fragment,{children:s?r.jsx(S,{label:e.label,position:"bottom",alignment:"center",triggerStyles:{maxWidth:`${t}px`,textOverflow:"ellipsis",whiteSpace:"nowrap"},shouldFocusTrigger:!1,children:r.jsx(I,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`}})}):r.jsx(I,{href:e.link,label:e.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`}})})})};j.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem",props:{item:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  label: string;
  link: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"link",value:{name:"string",required:!0}}]}},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},breadcrumbItemMaxWidth:{required:!1,tsType:{name:"number"},description:""}}};const re="_breadcrumbsContainer_1blt9_3",ae="_breadcrumbItem_1blt9_9",te="_separator_1blt9_38",o={breadcrumbsContainer:re,breadcrumbItem:ae,separator:te},n=u.forwardRef(({items:e,ariaLabel:a=Z,breadcrumbItemMaxWidth:t,...s},m)=>{const[b,p]=u.useState(!1);if(U(e)){const{root:i,truncated:h,remaining:B}=ee(e);return r.jsxs("nav",{ref:m,className:X(o.breadcrumbsContainer,h.length?o.truncated:""),...s,role:"navigation","aria-label":a,children:[r.jsx(j,{item:{label:i.label,link:i.link},isLast:!1,breadcrumbItemMaxWidth:t}),r.jsx("span",{"aria-hidden":"true",className:o.separator,children:"/"}),r.jsx("span",{className:o.breadcrumbItem,children:r.jsx(V,{dropdownId:"breadcrumbs-truncated-list"+a,onClose:()=>{p(!1)},trigger:r.jsx(Q,{name:"more-horiz","data-testid":"show-more",variant:"neutral",compactSpacing:!0,onClick:()=>p(!b)}),isOpen:b,offset:6,children:h.map((g,y)=>r.jsx(J,{label:g.label,link:g.link},g.label+y))})}),r.jsx("span",{"aria-hidden":"true",className:o.separator,children:"/"}),B.map((g,y)=>r.jsxs("div",{className:o.breadcrumbItem,children:[r.jsx(j,{item:g,isLast:y===B.length-1,breadcrumbItemMaxWidth:t}),y<B.length-1&&r.jsx("span",{"aria-hidden":"true",className:o.separator,children:"/"})]},g.link))]})}return r.jsx("nav",{ref:m,className:o.breadcrumbsBadge,...s,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((i,h)=>r.jsxs("div",{className:o.breadcrumbItem,children:[h===e.length-1?r.jsx("a",{role:"link","aria-label":i.label,"aria-current":"page",tabIndex:0,style:{maxWidth:`${t}px`},children:i.label}):r.jsx(I,{href:i.link,label:i.label,subtle:!0,style:{color:"var(--content-tertiary)",maxWidth:`${t}px`}}),h<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:o.separator,children:"/"})]},i.link))})});n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{ariaLabel:{defaultValue:{value:`"Fil d'Ariane"`,computed:!1},required:!1}},composes:["BreadcrumbsPropsCore"]};const Be={title:"Breadcrumbs",component:n,tags:["autodocs"],argTypes:{items:{control:"object"},ariaLabel:{control:"text"},breadcrumbItemMaxWidth:{control:"number"}}},se=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:se},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"})},x={args:{...c.args},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const s=E(e).getByTestId("breadcrumbs").querySelectorAll("div"),m=s[s.length-1].querySelector("a");a.items.forEach(async()=>{await l.tab()}),await T(()=>d(m).toHaveFocus()),await l.tab({shift:!0}),d(s[s.length-2].querySelector("a")).toHaveFocus()}},v={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,"data-testid":"breadcrumbs"}),r.jsx(n,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=E(e),t=a.getByTestId("breadcrumbs"),s=a.getByTestId("breadcrumbs-truncated");d(E(t).queryByTestId("show-more")).not.toBeInTheDocument(),d(E(s).queryByTestId("show-more")).toBeInTheDocument()}},f={args:{...c.args},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(n,{...e,items:e.items.slice(0,1)}),r.jsx(n,{...e,items:e.items.slice(0,2)}),r.jsx(n,{...e,items:e.items.slice(0,3)}),r.jsx(n,{...e,items:e.items})]})},w={args:{...c.args,items:[...c.args.items,{label:"FancyBrand Phone",link:"/products/electronics/smartphones/fancybrand-phone"}]},render:e=>r.jsx(n,{...e,"data-testid":"breadcrumbs"}),play:async()=>{await l.tab(),await l.tab(),await l.keyboard(Y);const e=document.querySelector(`[data-dropdown-id="breadcrumbs-truncated-listFil d'Ariane"]`);d(e).toBeInTheDocument(),await l.tab(),await T(()=>{var a;return d((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()}),await l.keyboard(W),await T(()=>{var a;return d((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[1]).toHaveFocus()}),await l.keyboard(z),await T(()=>{var a;return d((a=e==null?void 0:e.querySelector("ul"))==null?void 0:a.children[0]).toHaveFocus()})}};var k,_,F;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: mockItems
  },
  render: args => <Breadcrumbs {...args} data-testid="breadcrumbs" />
}`,...(F=(_=c.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var N,D,q;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(q=(D=x.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var A,C,H;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(H=(C=v.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var R,L,K;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(K=(L=f.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var $,O,G;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
    const dropdown = document.querySelector('[data-dropdown-id="breadcrumbs-truncated-listFil d\\'Ariane"]');
    expect(dropdown).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
    await userEvent.keyboard(TESTING_DOWN_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[1]).toHaveFocus());
    await userEvent.keyboard(TESTING_UP_KEY);
    await waitFor(() => expect(dropdown?.querySelector("ul")?.children[0]).toHaveFocus());
  }
}`,...(G=(O=w.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};const Ie=["Default","KeyboardNavigation","Truncated","MultipleElements","KeyboardNavigationWithDropdown"];export{c as Default,x as KeyboardNavigation,w as KeyboardNavigationWithDropdown,f as MultipleElements,v as Truncated,Ie as __namedExportsOrder,Be as default};
