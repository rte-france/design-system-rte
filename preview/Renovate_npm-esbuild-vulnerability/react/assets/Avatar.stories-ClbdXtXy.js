import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Be}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{u as A,e as D,w as he}from"./index-4rjIhT2C.js";import{r as B}from"./index-G8LIXM5I.js";import{f as Oe}from"./testing.utils-BiEcdOD7.js";import{a as We,T as h}from"./ToastQueueProvider-mq28mlW4.js";import{A as t}from"./Avatar-DqoCCHjb.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-D1KJQ2-m.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-DkJhvK8e.js";import"./Icon-DgLH6pPJ.js";import"./index-DJ8f9STe.js";import"./id.utils-DsO5Uws7.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-KJfdYR4G.js";import"./common-button.constants-CJxonyEE.js";import"./IconButton-D7Ub3mhB.js";import"./IconButton.module-DsipBz7u.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const T=""+new URL("company-DIHmOpWw.png",import.meta.url).href,p=""+new URL("user-DQfQ3zZ6.png",import.meta.url).href,aa={title:"Composants/Avatar/Avatar",component:t,tags:["autodocs"],argTypes:{decorativeColor:{control:"select",options:["neutral","bleu-iceberg","vert-foret","violet","bleu-rte","bleu-digital","marine","bleu-petrole","bleu-cyan","vert","vert-indications","vert-digital","jaune","jaune-ocre","jaune-indications","saumon","rose-digital","fuschia","rouge-indication","taupe"]},colorType:{control:"select",options:["neutral","brand","decorative"]},type:{control:"select",options:["user","entity"]},layout:{control:"select",options:["image","icon","initials"]},status:{control:"select",options:["available","away","busy","offline","unknown"]},size:{control:"select",options:[120,96,72,64,56,48,40,36,32,28,24]},initials:{control:"text"}}},r=[120,96,72,64,56,48,40,36,32,28,24],n={args:{imgSrc:p,alt:"Avatar of Jane Doe",size:64,colorType:"neutral",type:"user",layout:"image",status:"available"}},y={args:{...n.args,layout:"icon"},render:s=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(t,{...s,layout:"icon",type:"user"}),e.jsx(t,{...s,layout:"icon",type:"entity"})]})},d={args:{...n.args,layout:"initials",initials:"MB"}},u={args:{...n.args,layout:"image"},render:s=>e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"image",imgSrc:p},a))})},g={args:{...n.args,type:"entity",imgSrc:T}},m={args:{...n.args,type:"user",layout:"initials",initials:"MB"}},i={args:{...n.args,layout:"initials",initials:"MB",colorType:"neutral"}},x={args:{...i.args,colorType:"brand"}},v={args:{...i.args,colorType:"decorative",decorativeColor:"violet"}},l={args:{...n.args,type:"user",colorType:"neutral"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,imgSrc:p,layout:"image"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},f={args:{...l.args,colorType:"brand"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},z={args:{...l.args,colorType:"decorative",decorativeColor:"violet"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},o={args:{...n.args,type:"entity"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"image",imgSrc:T,alt:"Company Logo"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},j={args:{...o.args,colorType:"brand"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},b={args:{...o.args,colorType:"decorative",decorativeColor:"violet"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"icon"},a))}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:r.map(a=>e.jsx(t,{...s,size:a,layout:"initials",initials:"MB"},a))})]})},I={args:{...n.args,status:"available"},render:s=>e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px"},children:[e.jsx(t,{...s,layout:"image",imgSrc:p,status:"available"}),e.jsx(t,{...s,layout:"icon",status:"busy"}),e.jsx(t,{...s,layout:"initials",initials:"MB",status:"away"}),e.jsx(t,{...s,layout:"image",imgSrc:T,type:"entity",status:"offline"}),e.jsx(t,{...s,layout:"icon",type:"entity",status:"unknown"})]})},w={tags:["!autodocs"],args:{...n.args,onClick:()=>{},size:120},render:s=>{const[a,c]=B.useState(!1),[De,S]=B.useState(!1);return e.jsx(We,{children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(h,{message:"Clicked on the available avatar !",type:"success",isOpen:a,onClose:()=>c(!1),closable:!0}),e.jsx(h,{message:"Clicked on the busy avatar !",type:"error",isOpen:De,onClose:()=>S(!1),closable:!0}),e.jsx(t,{...s,type:"user",layout:"image",imgSrc:p,alt:"Avatar of Jane Doe",onClick:()=>c(!0),status:"available"}),e.jsx(t,{...s,layout:"icon",type:"entity",status:"busy",onClick:()=>S(!0)})]})})},play:async({canvasElement:s})=>{Oe();const a=s.querySelector('button[data-avatar-type="user"]');await A.tab(),D(a).toHaveFocus(),await A.keyboard(Be);const c=he(document.body).getByRole("status");D(c).toBeInTheDocument()}};var O,W,k;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    imgSrc: img,
    alt: "Avatar of Jane Doe",
    size: 64,
    colorType: "neutral",
    type: "user",
    layout: "image",
    status: "available"
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var C,E,M;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "icon"
  },
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      <Avatar {...args} layout="icon" type="user" />
      <Avatar {...args} layout="icon" type="entity" />
    </div>
}`,...(M=(E=y.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var N,U,_;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "initials",
    initials: "MB"
  }
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var P,Q,R;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "image"
  },
  render: args => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    alignItems: "center"
  }}>
      {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="image" imgSrc={img} />)}
    </div>
}`,...(R=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:R.source}}};var J,L,H;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "entity",
    imgSrc: logo
  }
}`,...(H=(L=g.parameters)==null?void 0:L.docs)==null?void 0:H.source}}};var q,F,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "user",
    layout: "initials",
    initials: "MB"
  }
}`,...(G=(F=m.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var K,Y,Z;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "initials",
    initials: "MB",
    colorType: "neutral"
  }
}`,...(Z=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var V,X,$;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    colorType: "brand"
  }
}`,...($=(X=x.parameters)==null?void 0:X.docs)==null?void 0:$.source}}};var ee,ae,se;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Neutral.args,
    colorType: "decorative",
    decorativeColor: "violet"
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,ne;l.parameters={...l.parameters,docs:{...(te=l.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ne=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,le,oe;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(le=f.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var pe,ce,ye;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(ye=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:ye.source}}};var de,ue,ge;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ge=(ue=o.parameters)==null?void 0:ue.docs)==null?void 0:ge.source}}};var me,xe,ve;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ve=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,ze,je;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(je=(ze=b.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var be,Ie,we;I.parameters={...I.parameters,docs:{...(be=I.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: "available"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "16px"
  }}>
      <Avatar {...args} layout="image" imgSrc={img} status="available" />
      <Avatar {...args} layout="icon" status="busy" />
      <Avatar {...args} layout="initials" initials="MB" status="away" />
      <Avatar {...args} layout="image" imgSrc={logo} type="entity" status="offline" />
      <Avatar {...args} layout="icon" type="entity" status="unknown" />
    </div>
}`,...(we=(Ie=I.parameters)==null?void 0:Ie.docs)==null?void 0:we.source}}};var Te,Se,Ae;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  tags: ["!autodocs"],
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
    focusElementBeforeComponent();
    const availableAvatar = canvasElement.querySelector('button[data-avatar-type="user"]');
    await userEvent.tab();
    expect(availableAvatar).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const toast = within(document.body).getByRole("status");
    expect(toast).toBeInTheDocument();
  }
}`,...(Ae=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:Ae.source}}};const sa=["Default","Icon","Initials","Sizes","Entity","User","Neutral","Brand","Decorative","UserNeutral","UserBrand","UserDecorative","EntityNeutral","EntityBrand","EntityDecorative","Status","Interactive"];export{x as Brand,v as Decorative,n as Default,g as Entity,j as EntityBrand,b as EntityDecorative,o as EntityNeutral,y as Icon,d as Initials,w as Interactive,i as Neutral,u as Sizes,I as Status,m as User,f as UserBrand,z as UserDecorative,l as UserNeutral,sa as __namedExportsOrder,aa as default};
