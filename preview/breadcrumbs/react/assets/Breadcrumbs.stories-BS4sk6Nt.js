import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as u,u as y,a as D,e as b}from"./index-DaW6VCyr.js";import{r as S}from"./index-G8LIXM5I.js";import"./Badge-B2P_pToH.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BUflQs2M.js";import"./CheckboxGroup-D851mxlR.js";import"./Chip-DRKMyBi_.js";import"./Divider-B0TD5a92.js";import"./Grid-DQMqAmw1.js";import{I as _}from"./Icon-DjEid3Hw.js";import"./IconButton-CY-isvho.js";import"./IconButtonToggle-CR3QJjqQ.js";import{L as h}from"./Link-Ef06xDiJ.js";import"./RadioButton-DxQz0TiG.js";import"./RadioButtonGroup-CfzbjXNU.js";import"./SegmentedControl-ByRhx2xf.js";import"./SplitButton-CBTtL9zA.js";import"./Switch-CZr50hBc.js";import"./Textarea-DZwwHoA-.js";import"./TextInput-CuZLyrA_.js";import"./Tooltip-Bg3s4K_Q.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./keyboard.constants-Ci2qhLdf.js";import"./useActiveKeyboard-DAXsdPh3.js";import"./index-DoK7PxrN.js";import"./index-fNjTmf9T.js";const N=3,q=2;function F(e,t=N,n=q){if(k(e,t))return{root:e[0],truncated:e.slice(1,e.length-n),remaining:e.slice(e.length-n)};throw new Error(`Breadcrumbs: 'items' should have at least ${t} items.`)}function k(e,t=N){return e.length>t}const H="_breadcrumbItem_1ajz5_9",A="_separator_1ajz5_35",s={breadcrumbItem:H,separator:A},l=S.forwardRef(({items:e,...t},n)=>{if(k(e)){const{root:a,truncated:d,remaining:p}=F(e);return r.jsx("nav",{ref:n,className:s.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:r.jsxs("div",{className:s.breadcrumbsTruncated,children:[r.jsx(h,{subtle:!0,href:a.link,label:a.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{title:`More items: ${d.map(o=>o.label).join(", ")}`,className:s.breadcrumbItem,children:r.jsx(_,{name:"more-horiz",size:12,tabIndex:0,role:"menu","aria-label":"More items","data-testid":"show-more"})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),p.map((o,g)=>r.jsxs("div",{className:s.breadcrumbItem,children:[g===p.length-1?r.jsx("a",{role:"link","aria-label":o.label,"aria-current":"page",tabIndex:0,children:o.label}):r.jsx(h,{href:o.link,label:o.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),g<p.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},o.link))]})})}else return r.jsx("div",{ref:n,className:s.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((a,d)=>r.jsxs("div",{className:s.breadcrumbItem,children:[d===e.length-1?r.jsx("a",{role:"link","aria-label":a.label,"aria-current":"page",tabIndex:0,children:a.label}):r.jsx(h,{href:a.link,label:a.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),d<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},a.link))})});l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",composes:["BreadcrumbsPropsCore"]};const ue={title:"Breadcrumbs",component:l,tags:["autodocs"],argTypes:{items:{control:"object"}}},R=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:R}},m={args:{...c.args},render:e=>r.jsx(l,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:t})=>{const a=u(e).getByTestId("breadcrumbs").querySelectorAll("div"),d=a[a.length-1].querySelector("a");t.items.forEach(async()=>{await y.tab()}),await D(()=>b(d).toHaveFocus()),await y.tab({shift:!0}),b(a[a.length-2].querySelector("a")).toHaveFocus()}},i={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(l,{...e,"data-testid":"breadcrumbs"}),r.jsx(l,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const t=u(e),n=t.getByTestId("breadcrumbs"),a=t.getByTestId("breadcrumbs-truncated");b(u(n).queryByTestId("show-more")).not.toBeInTheDocument(),b(u(a).queryByTestId("show-more")).toBeInTheDocument()}};var v,I,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,j,f;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var T,w,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const be=["Default","KeyboardNavigation","Truncated"];export{c as Default,m as KeyboardNavigation,i as Truncated,be as __namedExportsOrder,ue as default};
