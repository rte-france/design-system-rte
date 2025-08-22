import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as b,u as x,e as p}from"./index-DaW6VCyr.js";import{r as y}from"./index-G8LIXM5I.js";import"./Badge-B2P_pToH.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BUflQs2M.js";import"./CheckboxGroup-D851mxlR.js";import"./Chip-DRKMyBi_.js";import"./Divider-B0TD5a92.js";import"./Grid-DQMqAmw1.js";import{I as q}from"./Icon-DjEid3Hw.js";import"./IconButton-CY-isvho.js";import"./IconButtonToggle-CR3QJjqQ.js";import{L as I}from"./Link-Ef06xDiJ.js";import"./RadioButton-DxQz0TiG.js";import"./RadioButtonGroup-CfzbjXNU.js";import"./SegmentedControl-ByRhx2xf.js";import"./SplitButton-CBTtL9zA.js";import"./Switch-CZr50hBc.js";import"./Textarea-DZwwHoA-.js";import"./TextInput-CuZLyrA_.js";import"./Tooltip-BLyEf0nf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./keyboard.constants-Ci2qhLdf.js";import"./useActiveKeyboard-DAXsdPh3.js";const k=3,H=2;function A(e,a=k,o=H){if(D(e,a))return{root:e[0],truncated:e.slice(1,e.length-o),remaining:e.slice(e.length-o)};throw new Error(`Breadcrumbs: 'items' should have at least ${a} items.`)}function D(e,a=k){return e.length>a}const F="_breadcrumbItem_t05z5_9",R="_loaded_t05z5_32",C="_separator_t05z5_36",s={breadcrumbItem:F,loaded:R,separator:C},l=y.forwardRef(({items:e,...a},o)=>{const[c,h]=y.useState([]);if(y.useEffect(()=>{h([...e.map(()=>!0)])},[e]),D(e)){const{root:t,truncated:m,remaining:g}=A(e);return r.jsx("nav",{ref:o,className:s.breadcrumbsBadge,...a,role:"navigation","aria-label":"Fil d'Ariane",children:r.jsxs("div",{className:s.breadcrumbsTruncated,children:[r.jsx(I,{subtle:!0,href:t.link,label:t.label,style:{color:"var(--content-tertiary)"},className:`${s.breadcrumbItem} ${c[0]?s.loaded:""}`,...t.role&&{role:t.role}}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{title:`More items: ${m.map(n=>n.label).join(", ")}`,className:s.breadcrumbItem,children:r.jsx(q,{name:"more-horiz",size:12,tabIndex:0,role:"menu","aria-label":"More items","data-testid":"show-more"})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),g.map((n,v)=>r.jsxs("div",{className:s.breadcrumbItem,children:[v===g.length-1?r.jsx("span",{"aria-label":n.label,"aria-current":"page",tabIndex:0,children:n.label}):r.jsx(I,{href:n.link,label:n.label,subtle:!0,style:{color:"var(--content-tertiary)"},...n.role&&{role:n.role}}),v<g.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},n.link))]})})}else return r.jsx("div",{ref:o,className:s.breadcrumbsBadge,...a,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((t,m)=>r.jsxs("div",{className:s.breadcrumbItem,children:[m===e.length-1?r.jsx("span",{"aria-label":t.label,"aria-current":"page",tabIndex:0,children:t.label}):r.jsx(I,{href:t.link,label:t.label,subtle:!0,style:{color:"var(--content-tertiary)"},...t.role&&{role:t.role}}),m<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},t.link))})});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",composes:["BreadcrumbsPropsCore"]};const ie={title:"Breadcrumbs",component:l,tags:["autodocs"]},M=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],d={args:{items:M}},u={args:{...d.args},render:e=>r.jsx(l,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:a})=>{const c=b(e).getByTestId("breadcrumbs").querySelectorAll("div"),h=c[c.length-1].querySelector("span");a.items.forEach(async()=>{await x.tab()}),p(h).not.toHaveFocus(),await x.tab({shift:!0}),p(c[c.length-2].querySelector("a")).toHaveFocus()}},i={args:{...d.args,items:[...d.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,"data-testid":"breadcrumbs"}),r.jsx(l,{...d.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const a=b(e),o=a.getByTestId("breadcrumbs"),c=a.getByTestId("breadcrumbs-truncated");p(b(o).queryByTestId("show-more")).not.toBeInTheDocument(),p(b(c).queryByTestId("show-more")).toBeInTheDocument()}};var B,f,j;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(j=(f=d.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,w,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
    const breadCrumbsHead = breadcrumbs[breadcrumbs.length - 1].querySelector("span");
    args.items.forEach(async () => {
      await userEvent.tab();
    });
    expect(breadCrumbsHead).not.toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(breadcrumbs[breadcrumbs.length - 2].querySelector("a")).toHaveFocus();
  }
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var N,_,S;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const be=["Default","KeyboardNavigation","Truncated"];export{d as Default,u as KeyboardNavigation,i as Truncated,be as __namedExportsOrder,ie as default};
