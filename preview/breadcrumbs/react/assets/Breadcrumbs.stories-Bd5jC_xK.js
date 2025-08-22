import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{w as i,u as y,e as b}from"./index-DaW6VCyr.js";import{r as D}from"./index-G8LIXM5I.js";import"./Badge-B2P_pToH.js";import"./Button-B-hhLjRd.js";import"./Checkbox-BUflQs2M.js";import"./CheckboxGroup-D851mxlR.js";import"./Chip-DRKMyBi_.js";import"./Divider-B0TD5a92.js";import"./Grid-DQMqAmw1.js";import{I as S}from"./Icon-DjEid3Hw.js";import"./IconButton-CY-isvho.js";import"./IconButtonToggle-CR3QJjqQ.js";import{L as h}from"./Link-Ef06xDiJ.js";import"./RadioButton-DxQz0TiG.js";import"./RadioButtonGroup-CfzbjXNU.js";import"./SegmentedControl-ByRhx2xf.js";import"./SplitButton-CBTtL9zA.js";import"./Switch-CZr50hBc.js";import"./Textarea-DZwwHoA-.js";import"./TextInput-CuZLyrA_.js";import"./Tooltip-BLyEf0nf.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DSdvzt-y.js";import"./keyboard.constants-Ci2qhLdf.js";import"./useActiveKeyboard-DAXsdPh3.js";const N=3,_=2;function q(e,t=N,n=_){if(k(e,t))return{root:e[0],truncated:e.slice(1,e.length-n),remaining:e.slice(e.length-n)};throw new Error(`Breadcrumbs: 'items' should have at least ${t} items.`)}function k(e,t=N){return e.length>t}const H="_breadcrumbItem_mtmf0_9",A="_separator_mtmf0_33",s={breadcrumbItem:H,separator:A},m=D.forwardRef(({items:e,...t},n)=>{if(k(e)){const{root:a,truncated:d,remaining:p}=q(e);return r.jsx("nav",{ref:n,className:s.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:r.jsxs("div",{className:s.breadcrumbsTruncated,children:[r.jsx(h,{subtle:!0,href:a.link,label:a.label,style:{color:"var(--content-tertiary)"},className:s.breadcrumbItem}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),r.jsx("span",{title:`More items: ${d.map(o=>o.label).join(", ")}`,className:s.breadcrumbItem,children:r.jsx(S,{name:"more-horiz",size:12,tabIndex:0,role:"menu","aria-label":"More items","data-testid":"show-more"})}),r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"}),p.map((o,g)=>r.jsxs("div",{className:s.breadcrumbItem,children:[g===p.length-1?r.jsx("span",{"aria-label":o.label,"aria-current":"page",tabIndex:0,children:o.label}):r.jsx(h,{href:o.link,label:o.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),g<p.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},o.link))]})})}else return r.jsx("div",{ref:n,className:s.breadcrumbsBadge,...t,role:"navigation","aria-label":"Fil d'Ariane",children:e.map((a,d)=>r.jsxs("div",{className:s.breadcrumbItem,children:[d===e.length-1?r.jsx("span",{"aria-label":a.label,"aria-current":"page",tabIndex:0,children:a.label}):r.jsx(h,{href:a.link,label:a.label,subtle:!0,style:{color:"var(--content-tertiary)"}}),d<e.length-1&&r.jsx("span",{"aria-hidden":"true",className:s.separator,children:"/"})]},a.link))})});m.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",composes:["BreadcrumbsPropsCore"]};const me={title:"Breadcrumbs",component:m,tags:["autodocs"]},F=[{label:"Home",link:"/"},{label:"Products",link:"/products"},{label:"Electronics",link:"/products/electronics"},{label:"Smartphones",link:"/products/electronics/smartphones"}],c={args:{items:F}},l={args:{...c.args},render:e=>r.jsx(m,{...e,"data-testid":"breadcrumbs"}),play:async({canvasElement:e,args:t})=>{const a=i(e).getByTestId("breadcrumbs").querySelectorAll("div"),d=a[a.length-1].querySelector("span");t.items.forEach(async()=>{await y.tab()}),b(d).not.toHaveFocus(),await y.tab({shift:!0}),b(a[a.length-2].querySelector("a")).toHaveFocus()}},u={args:{...c.args,items:[...c.args.items.slice(0,2)]},render:e=>r.jsxs(r.Fragment,{children:[r.jsx(m,{...e,"data-testid":"breadcrumbs"}),r.jsx(m,{...c.args,"data-testid":"breadcrumbs-truncated"})]}),play:async({canvasElement:e})=>{const t=i(e),n=t.getByTestId("breadcrumbs"),a=t.getByTestId("breadcrumbs-truncated");b(i(n).queryByTestId("show-more")).not.toBeInTheDocument(),b(i(a).queryByTestId("show-more")).toBeInTheDocument()}};var v,I,x;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...(x=(I=c.parameters)==null?void 0:I.docs)==null?void 0:x.source}}};var B,f,j;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(j=(f=l.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var T,w,E;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(E=(w=u.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const le=["Default","KeyboardNavigation","Truncated"];export{c as Default,l as KeyboardNavigation,u as Truncated,le as __namedExportsOrder,me as default};
