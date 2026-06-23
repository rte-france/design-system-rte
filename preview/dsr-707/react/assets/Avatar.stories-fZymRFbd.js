import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Z}from"./keyboard-test.constants-C4IJ8E3i.js";import"./timepicker.constants-V9Xrpx_a.js";import{u as v,e as f,w as V}from"./index-4rjIhT2C.js";import{r as z}from"./index-G8LIXM5I.js";import{f as X}from"./testing.utils-mIZIUNbM.js";import{a as $,T as j}from"./ToastQueueProvider-Dh_3Xi1L.js";import{A as t}from"./Avatar-wFW5UtTD.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-C3W4NyCk.js";import"./Icon-Bc7wfgCv.js";import"./index-DSdvzt-y.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-CXM9p_L3.js";import"./common-button.constants-eNlmcvUj.js";import"./IconButton-DcIeVO_H.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./v4-C6aID195.js";const K=""+new URL("company-DIHmOpWw.png",import.meta.url).href,g=""+new URL("user-DQfQ3zZ6.png",import.meta.url).href,we={title:"Composants/Avatar/Avatar",component:t,tags:["autodocs"],argTypes:{decorativeColor:{control:"select",options:["neutral","bleu-iceberg","vert-foret","violet","bleu-rte","bleu-digital","marine","bleu-petrole","bleu-cyan","vert","vert-indications","vert-digital","jaune","jaune-ocre","jaune-indications","saumon","rose-digital","fuschia","rouge-indication","taupe"]},colorType:{control:"select",options:["neutral","brand","decorative"]},type:{control:"select",options:["user","entity"]},layout:{control:"select",options:["image","icon","initials"]},status:{control:"select",options:["available","away","busy","offline","unknown"]},size:{control:"select",options:[120,96,72,64,56,48,40,36,32,28,24]},initials:{control:"text"}}},n=[120,96,72,64,56,48,40,36,32,28,24],i={args:{imgSrc:g,alt:"Avatar of Jane Doe",size:32,colorType:"neutral",type:"user"}},r={args:{...i.args,type:"user",colorType:"neutral"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,imgSrc:g,layout:"image"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},p={args:{...r.args,colorType:"brand"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},c={args:{...r.args,colorType:"decorative",decorativeColor:"violet"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},l={args:{...i.args,type:"entity"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"image",imgSrc:K,alt:"Company Logo"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},y={args:{...l.args,colorType:"brand"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},d={args:{...l.args,colorType:"decorative",decorativeColor:"violet"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB"},e))})]})},x={args:{...i.args,status:"available"},render:s=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,imgSrc:g,layout:"image",alt:"Avatar of Jane Doe"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon",status:"busy"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"initials",initials:"MB",type:"entity",status:"away",colorType:"brand"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"image",imgSrc:K,alt:"Company Logo",type:"entity",status:"offline",colorType:"decorative",decorativeColor:"violet"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(t,{...s,size:e,layout:"icon",alt:"Company Logo",type:"entity",status:"unknown",colorType:"decorative",decorativeColor:"violet"},e))})]})},m={args:{...i.args,onClick:()=>{},size:120},render:s=>{const[e,o]=z.useState(!1),[Y,u]=z.useState(!1);return a.jsx($,{children:a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(j,{message:"Clicked on the available avatar !",type:"success",isOpen:e,onClose:()=>o(!1),closable:!0}),a.jsx(j,{message:"Clicked on the busy avatar !",type:"error",isOpen:Y,onClose:()=>u(!1),closable:!0}),a.jsx(t,{...s,type:"user",layout:"image",imgSrc:g,alt:"Avatar of Jane Doe",onClick:()=>o(!0),status:"available"}),a.jsx(t,{...s,layout:"icon",type:"entity",status:"busy",onClick:()=>u(!0)})]})})},play:async({canvasElement:s})=>{X(s);const e=s.querySelector('button[data-avatar-type="user"]');await v.tab(),f(e).toHaveFocus(),await v.keyboard(Z);const o=V(document.body).getByRole("status");f(o).toBeInTheDocument()}};var I,w,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    imgSrc: img,
    alt: "Avatar of Jane Doe",
    size: 32,
    colorType: "neutral",
    type: "user"
  }
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var T,A,O;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "user",
    colorType: "neutral"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(O=(A=r.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var h,W,k;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...UserNeutral.args,
    colorType: "brand"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(k=(W=p.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var C,D,S;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...UserNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(S=(D=c.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var B,E,M;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "entity"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="image" imgSrc={logo} alt="Company Logo" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,U,L;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...EntityNeutral.args,
    colorType: "brand"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(L=(U=y.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var J,_,P;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...EntityNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(P=(_=d.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var Q,R,H;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: "available"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" alt="Avatar of Jane Doe" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" status="busy" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" type="entity" status="away" colorType="brand" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="image" imgSrc={logo} alt="Company Logo" type="entity" status="offline" colorType="decorative" decorativeColor="violet" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" alt="Company Logo" type="entity" status="unknown" colorType="decorative" decorativeColor="violet" />)}
      </div>
    </div>
}`,...(H=(R=x.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => {},
    size: 120
  },
  render: args => {
    const [isAvailableToastOpen, setIsAvailableToastOpen] = useState(false);
    const [isBusyToastOpen, setIsBusyToastOpen] = useState(false);
    return <ToastQueueProvider>
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center"
      }}>
          <Toast message={"Clicked on the available avatar !"} type="success" isOpen={isAvailableToastOpen} onClose={() => setIsAvailableToastOpen(false)} closable={true} />
          <Toast message={"Clicked on the busy avatar !"} type="error" isOpen={isBusyToastOpen} onClose={() => setIsBusyToastOpen(false)} closable={true} />
          <Avatar {...args} type="user" layout="image" imgSrc={img} alt="Avatar of Jane Doe" onClick={() => setIsAvailableToastOpen(true)} status="available" />
          <Avatar {...args} layout="icon" type="entity" status="busy" onClick={() => setIsBusyToastOpen(true)} />
        </div>
      </ToastQueueProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
    const availableAvatar = canvasElement.querySelector('button[data-avatar-type="user"]');
    await userEvent.tab();
    expect(availableAvatar).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const toast = within(document.body).getByRole("status");
    expect(toast).toBeInTheDocument();
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const be=["Default","UserNeutral","UserBrand","UserDecorative","EntityNeutral","EntityBrand","EntityDecorative","Status","Interactive"];export{i as Default,y as EntityBrand,d as EntityDecorative,l as EntityNeutral,m as Interactive,x as Status,p as UserBrand,c as UserDecorative,r as UserNeutral,be as __namedExportsOrder,we as default};
