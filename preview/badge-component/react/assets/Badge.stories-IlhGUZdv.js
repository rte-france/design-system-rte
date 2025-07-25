import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{w as K,e as f,u as m,a as b}from"./index-DaW6VCyr.js";import{r as D}from"./index-G8LIXM5I.js";import{i as L,I as P,R as A,T as M}from"./Icon-BNDpdXCt.js";import{c as W}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const $={xs:null,s:null,m:12,l:20},G="_badgeContainer_2x9ye_3",H="_badge_2x9ye_3",J="_hidden_2x9ye_15",o={badgeContainer:G,badge:H,hidden:J},l=D.forwardRef(({badgeType:a="brand",size:n="m",appearance:t="text",count:r=1,icon:u="settings",children:F},O)=>t=="icon"&&u&&!L(u)?(console.warn(`Badge: Invalid icon name "${u}". Please use a valid icon key.`),null):e.jsxs("div",{ref:O,className:o.badgeContainer,children:[e.jsx("div",{"data-badge-type":a,"data-size":n,"data-testid":"badge",className:W(o.badge,r>0?"":o.hidden),children:n!=="xs"&&n!=="s"&&e.jsxs(e.Fragment,{children:[t=="icon"&&e.jsx(P,{name:u,className:o.icon,size:$[n]}),t=="text"&&r>0&&e.jsx("p",{className:o.count,children:r<1e3?r:"999+"},r)]})}),F]}));l.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:"close"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:"error"},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]},description:"",defaultValue:{value:'"settings"',computed:!1}},badgeType:{defaultValue:{value:'"brand"',computed:!1},required:!1},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"text"',computed:!1},required:!1},count:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["BadgePropsCore","Omit"]};const Q=Object.keys(A),U=Object.keys(M),te={title:"Badge",component:l,tags:["autodocs"],argTypes:{badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type of badge",defaultValue:"brand"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the badge",defaultValue:"M"},appearance:{control:"select",options:["text","icon"],description:"Appearance of the badge",defaultValue:"text"},count:{control:"number",description:"Count to display when appearance is 'text'",defaultValue:1},icon:{control:"select",options:[...Q,...U].sort((a,n)=>a.localeCompare(n)),description:"Icon to display when appearance is 'icon'"}}},i=e.jsx("span",{style:{display:"inline-block",width:48,height:48,background:"orange",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:"bold",fontSize:16}}),s={args:{badgeType:"brand",size:"m",appearance:"text",count:1,children:i}},c={args:{badgeType:"brand",size:"m",appearance:"icon",icon:"settings",children:i}},v={args:{badgeType:"brand",appearance:"text",count:1,children:i},argTypes:{size:{control:"select",options:["xs","s","m","l"]}},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(l,{...a,size:"xs"}),e.jsx(l,{...a,size:"s"}),e.jsx(l,{...a,size:"m"}),e.jsx(l,{...a,size:"l"})]})},d={args:{badgeType:"indicator",appearance:"text",size:"m",children:i},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(l,{...a,count:5}),e.jsx(l,{...a,count:99}),e.jsx(l,{...a,count:100}),e.jsx(l,{...a,count:999}),e.jsx(l,{...a,count:1e3})]})},p={args:{badgeType:"brand",appearance:"icon",size:"m",icon:"settings",children:i},render:a=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(l,{...a,icon:"settings"}),e.jsx(l,{...a,icon:"home"}),e.jsx(l,{...a,icon:"user"}),e.jsx(l,{...a,icon:"search"}),e.jsx(l,{...a,icon:"heart"}),e.jsx(l,{...a,icon:"star"})]})},X=a=>{const[n,t]=D.useState(a.count);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{children:e.jsx(l,{...a,count:n})}),e.jsx("hr",{}),e.jsx("label",{children:"Badge Count"}),e.jsx("input",{id:"badge-count-input",type:"number",value:n,onChange:r=>t(Number(r.target.value)),"data-testid":"badge-count-input"})]})},g={args:{badgeType:"brand",appearance:"text",size:"m",count:1,children:i},render:X,play:async({canvasElement:a})=>{const n=K(a),t=n.getByTestId("badge-count-input"),r=n.getByTestId("badge");f(r).toBeVisible(),await m.clear(t),await m.type(t,"0"),await b(()=>f(r).not.toBeVisible()),await m.clear(t),await m.type(t,"1"),await b(()=>f(r).toBeVisible())}};var h,w,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "text",
    count: 1,
    children: mockChildren
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var x,k,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "icon",
    icon: "settings",
    children: mockChildren
  }
}`,...(I=(k=c.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var B,j,z;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "text",
    count: 1,
    children: mockChildren
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "s", "m", "l"]
    }
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} size="xs" />
      <Badge {...args} size="s" />
      <Badge {...args} size="m" />
      <Badge {...args} size="l" />
    </div>
}`,...(z=(j=v.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var T,C,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    badgeType: "indicator",
    appearance: "text",
    size: "m",
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} count={5} />
      <Badge {...args} count={99} />
      <Badge {...args} count={100} />
      <Badge {...args} count={999} />
      <Badge {...args} count={1000} />
    </div>
}`,...(V=(C=d.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var S,_,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "icon",
    size: "m",
    icon: "settings",
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} icon="settings" />
      <Badge {...args} icon="home" />
      <Badge {...args} icon="user" />
      <Badge {...args} icon="search" />
      <Badge {...args} icon="heart" />
      <Badge {...args} icon="star" />
    </div>
}`,...(R=(_=p.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var E,N,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "text",
    size: "m",
    count: 1,
    children: mockChildren
  },
  render: BadgeVisibilityDemo,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badgeCountInput = canvas.getByTestId("badge-count-input");
    const badge = canvas.getByTestId("badge");
    expect(badge).toBeVisible();
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "0");
    await waitFor(() => expect(badge).not.toBeVisible());
    await userEvent.clear(badgeCountInput);
    await userEvent.type(badgeCountInput, "1");
    await waitFor(() => expect(badge).toBeVisible());
  }
}`,...(q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const ie=["Default","IconBadge","Sizes","CountLimit","Icons","BadgeVisibility"];export{g as BadgeVisibility,d as CountLimit,s as Default,c as IconBadge,p as Icons,v as Sizes,ie as __namedExportsOrder,te as default};
