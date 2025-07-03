import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{T as I,E as C,S as R}from"./keyboard.constants-G_CZ5sfP.js";import{f as w,w as p,u,e as o}from"./index-DaW6VCyr.js";import{r as j}from"./index-G8LIXM5I.js";import{c as S}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const z="_button_j37v4_3",K="_label_j37v4_137",b={button:z,label:K},r=j.forwardRef(({size:t="m",label:a,variant:e="primary",className:i="",onClick:m,type:_="button",...h},H)=>n.jsx("button",{ref:H,type:_,className:S(b.button,i),"data-size":t,"data-variant":e,onClick:m,...h,children:n.jsx("span",{"data-size":t,className:b.label,children:a})}));r.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},size:{defaultValue:{value:'"m"',computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}},composes:["Omit"]};const D={title:"Button",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","text","transparent","danger"]},size:{control:"select",options:["s","m","l"]},iconPosition:{control:"select",options:["left","right"]},disabled:{control:"boolean"}},args:{onClick:w()}},d=w(),s={args:{variant:"primary",label:"Button",onClick:d},play:async({canvasElement:t})=>{const e=p(t).getByRole("button");await u.click(e),o(d).toHaveBeenCalled(),e.blur()}},l={args:{...s.args},render:t=>n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx(r,{...t,size:"s",label:"Small","data-testId":"small-button"}),n.jsx(r,{...t,label:"Medium","data-testId":"medium-button"}),n.jsx(r,{...t,size:"l",label:"Large","data-testId":"large-button"})]}),play:async({canvasElement:t})=>{const a=p(t),e=a.getByTestId("small-button"),i=a.getByTestId("medium-button"),m=a.getByTestId("large-button");o(e.clientHeight).toBe(24),o(i.clientHeight).toBe(32),o(m.clientHeight).toBe(40)}},c={args:{...s.args},play:async({canvasElement:t})=>{const e=p(t).getByRole("button");await u.keyboard(I),o(e).toHaveFocus(),await u.keyboard(C),await u.keyboard(R),o(d).toHaveBeenCalledTimes(2),e.blur()}};var g,v,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button",
    onClick: mockFn
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);
    expect(mockFn).toHaveBeenCalled();
    button.blur();
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,E,f;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Button {...args} size="s" label="Small" data-testId="small-button" />
        <Button {...args} label="Medium" data-testId="medium-button" />
        <Button {...args} size="l" label="Large" data-testId="large-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallButton = canvas.getByTestId("small-button");
    const mediumButton = canvas.getByTestId("medium-button");
    const largeButton = canvas.getByTestId("large-button");
    expect(smallButton.clientHeight).toBe(24);
    expect(mediumButton.clientHeight).toBe(32);
    expect(largeButton.clientHeight).toBe(40);
  }
}`,...(f=(E=l.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var x,T,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.keyboard(TAB_KEY);
    expect(button).toHaveFocus();
    await userEvent.keyboard(ENTER_KEY);
    await userEvent.keyboard(SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(k=(T=c.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const V=["Default","Sizing","KeyboardInteraction"];export{s as Default,c as KeyboardInteraction,l as Sizing,V as __namedExportsOrder,D as default};
