import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{w as I,e as i,u as d,a as z}from"./index-DaW6VCyr.js";import{r as ae}from"./index-G8LIXM5I.js";import{i as se,I as ue,R as ce,T as de}from"./Icon-DjEid3Hw.js";import{c as me}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const ve=100,pe="99+",ge={xs:null,s:null,m:12,l:20};function be(e){return ge[e]??void 0}function le({size:e,appearance:t,iconSize:n}){return!["xs","s"].includes(e)&&t==="icon"&&!!n}function te({size:e,appearance:t,count:n}){return!["xs","s"].includes(e)&&t==="text"&&typeof n=="number"&&n>0}function ye({size:e,appearance:t,count:n,iconSize:r}){switch(t){case"icon":return le({size:e,appearance:t,iconSize:r});case"text":return te({size:e,appearance:t,count:n});default:return!0}}function S(e){return typeof e!="number"?"":e<ve?e.toString():pe}const fe="_badgeContainer_1eflx_3",he="_badge_1eflx_3",xe="_hidden_1eflx_16",we="_countOverflow_1eflx_65",u={badgeContainer:fe,badge:he,hidden:xe,countOverflow:we},l=ae.forwardRef(({badgeType:e="brand",size:t="m",appearance:n="text",count:r,icon:s="notification",children:x,...w},ne)=>{var T;if(n=="icon"&&s&&!se(s))return console.warn(`Badge: Invalid icon name "${s}". Please use a valid icon key.`),null;const B=be(t),re=le({size:t,appearance:n,iconSize:B}),j=te({size:t,appearance:n,count:r}),ie=ye({size:t,appearance:n,count:r,iconSize:B}),oe=j&&((T=S(r))==null?void 0:T.length)>2;return a.jsxs("div",{ref:ne,className:u.badgeContainer,...w,children:[a.jsxs("div",{"data-badge-type":e,"data-size":t,"data-testid":"badge",className:me(u.badge,ie?"":u.hidden,oe?u.countOverflow:""),children:[re&&a.jsx(ue,{name:s,className:u.icon,size:B}),j&&a.jsx("p",{className:u.count,children:S(r)},r)]}),x]})});l.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:"close"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:"error"},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]},description:"",defaultValue:{value:'"notification"',computed:!1}},badgeType:{defaultValue:{value:'"brand"',computed:!1},required:!1},size:{defaultValue:{value:'"m"',computed:!1},required:!1},appearance:{defaultValue:{value:'"text"',computed:!1},required:!1}},composes:["BadgePropsCore","Omit"]};const Be=Object.keys(ce),Ie=Object.keys(de),_e={title:"Composants/Badge/Badge",component:l,tags:["autodocs"],argTypes:{badgeType:{control:"select",options:["brand","neutral","indicator"],description:"Type of badge",defaultValue:"brand"},size:{control:"select",options:["xs","s","m","l"],description:"Size of the badge",defaultValue:"M"},appearance:{control:"select",options:["text","icon"],description:"Appearance of the badge",defaultValue:"text"},count:{control:"number",description:"Count to display when appearance is 'text'",defaultValue:1},icon:{control:"select",options:[...Be,...Ie].sort((e,t)=>e.localeCompare(t)),description:"Icon to display when appearance is 'icon'"}}},o=a.jsx("span",{style:{display:"inline-block",width:48,height:48,background:"orange",borderRadius:12,boxShadow:"0 2px 8px rgba(0,0,0,0.08)",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:"bold",fontSize:16}}),c={args:{badgeType:"brand",size:"m",appearance:"text",count:1,children:o}},m={args:{badgeType:"brand",size:"m",appearance:"icon",icon:"notification",children:o}},v={args:{icon:"notification",count:1,children:o},render:e=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[a.jsx("h4",{children:"Appearance: Text"}),a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(l,{...e,size:"xs"}),a.jsx(l,{...e,size:"s","data-testid":"badge-text-s"}),a.jsx(l,{...e,size:"m","data-testid":"badge-text-m"}),a.jsx(l,{...e,size:"l"})]}),a.jsx("h4",{children:"Appearance: Icon"}),a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(l,{...e,size:"xs",appearance:"icon"}),a.jsx(l,{...e,size:"s",appearance:"icon","data-testid":"badge-icon-s"}),a.jsx(l,{...e,size:"m",appearance:"icon","data-testid":"badge-icon-m"}),a.jsx(l,{...e,size:"l",appearance:"icon"})]}),a.jsx("h4",{children:"Appearance: Empty"}),a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx(l,{...e,size:"xs",appearance:"empty"}),a.jsx(l,{...e,size:"s",appearance:"empty","data-testid":"badge-empty-s"}),a.jsx(l,{...e,size:"m",appearance:"empty"}),a.jsx(l,{...e,size:"l",appearance:"empty"})]})]}),play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("badge-text-s").querySelector("[data-testid='badge']");i(n).not.toBeVisible();const r=t.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");i(r).not.toBeVisible();const s=t.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");i(s).toBeVisible();const x=t.getByTestId("badge-text-m").querySelector("[data-testid='badge']");i(x).toBeVisible();const w=t.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");i(w).toBeVisible()}},p={args:{appearance:"empty",count:1,children:o},argTypes:{size:{control:"select",options:["xs","s","m","l"]}},render:e=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(l,{...e,size:"xs"}),a.jsx(l,{...e,size:"s"}),a.jsx(l,{...e,size:"m"}),a.jsx(l,{...e,size:"l"})]})},g={args:{badgeType:"indicator",appearance:"text",size:"m",children:o},render:e=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(l,{...e,count:5}),a.jsx(l,{...e,count:99}),a.jsx(l,{...e,count:100})]})},b={args:{badgeType:"brand",appearance:"icon",size:"m",icon:"notification",children:o},render:e=>a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(l,{...e,icon:"notification"}),a.jsx(l,{...e,icon:"home"}),a.jsx(l,{...e,icon:"user"}),a.jsx(l,{...e,icon:"search"}),a.jsx(l,{...e,icon:"heart"}),a.jsx(l,{...e,icon:"star"})]})},je=e=>{const[t,n]=ae.useState(e.count);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx("div",{children:a.jsx(l,{...e,count:t})}),a.jsx("hr",{}),a.jsx("label",{children:"Badge Count"}),a.jsx("input",{id:"badge-count-input",type:"number",value:t,onChange:r=>n(Number(r.target.value)),"data-testid":"badge-count-input"})]})},y={args:{badgeType:"brand",appearance:"text",size:"m",count:1,children:o},render:je,play:async({canvasElement:e})=>{const t=I(e),n=t.getByTestId("badge-count-input"),r=t.getByTestId("badge");i(r).toBeVisible(),await d.clear(n),await d.type(n,"0"),await z(()=>i(r).not.toBeVisible()),await d.clear(n),await d.type(n,"1"),await z(()=>i(r).toBeVisible())}},f={args:c.args,play:async({canvasElement:e})=>{const n=I(e).getByTestId("badge");await d.tab(),i(n).not.toHaveFocus()}},h={args:c.args,render:e=>a.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",fontFamily:"Nunito Sans, sans-serif"},children:[a.jsxs("div",{children:[a.jsx("h4",{children:"Brand"}),a.jsx(l,{...e,badgeType:"brand"})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"Neutral"}),a.jsx(l,{...e,badgeType:"neutral"})]}),a.jsxs("div",{children:[a.jsx("h4",{children:"Indicator"}),a.jsx(l,{...e,badgeType:"indicator"})]})]})};var k,C,V;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "text",
    count: 1,
    children: mockChildren
  }
}`,...(V=(C=c.parameters)==null?void 0:C.docs)==null?void 0:V.source}}};var E,_,N;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    size: "m",
    appearance: "icon",
    icon: "notification",
    children: mockChildren
  }
}`,...(N=(_=m.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var q,D,R;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    icon: "notification",
    count: 1,
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Nunito Sans, sans-serif"
  }}>
      <h4>Appearance: Text</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" />
        <Badge {...args} size="s" data-testid="badge-text-s" />
        <Badge {...args} size="m" data-testid="badge-text-m" />
        <Badge {...args} size="l" />
      </div>
      <h4>Appearance: Icon</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" appearance="icon" />
        <Badge {...args} size="s" appearance="icon" data-testid="badge-icon-s" />
        <Badge {...args} size="m" appearance="icon" data-testid="badge-icon-m" />
        <Badge {...args} size="l" appearance="icon" />
      </div>
      <h4>Appearance: Empty</h4>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge {...args} size="xs" appearance="empty" />
        <Badge {...args} size="s" appearance="empty" data-testid="badge-empty-s" />
        <Badge {...args} size="m" appearance="empty" />
        <Badge {...args} size="l" appearance="empty" />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badgeTextS = canvas.getByTestId("badge-text-s").querySelector("[data-testid='badge']");
    expect(badgeTextS).not.toBeVisible();
    const badgeIconS = canvas.getByTestId("badge-icon-s").querySelector("[data-testid='badge']");
    expect(badgeIconS).not.toBeVisible();
    const badgeEmptyS = canvas.getByTestId("badge-empty-s").querySelector("[data-testid='badge']");
    expect(badgeEmptyS).toBeVisible();
    const badgeTextM = canvas.getByTestId("badge-text-m").querySelector("[data-testid='badge']");
    expect(badgeTextM).toBeVisible();
    const badgeIconM = canvas.getByTestId("badge-icon-m").querySelector("[data-testid='badge']");
    expect(badgeIconM).toBeVisible();
  }
}`,...(R=(D=v.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var O,F,A;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    appearance: "empty",
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
}`,...(A=(F=p.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var M,H,L;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    </div>
}`,...(L=(H=g.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var K,P,U;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    badgeType: "brand",
    appearance: "icon",
    size: "m",
    icon: "notification",
    children: mockChildren
  },
  render: args => <div style={{
    display: "flex",
    gap: "16px",
    alignItems: "center"
  }}>
      <Badge {...args} icon="notification" />
      <Badge {...args} icon="home" />
      <Badge {...args} icon="user" />
      <Badge {...args} icon="search" />
      <Badge {...args} icon="heart" />
      <Badge {...args} icon="star" />
    </div>
}`,...(U=(P=b.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var W,$,G;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=($=y.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var J,Q,X;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: Default.args,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const badge = canvas.getByTestId("badge");
    await userEvent.tab();
    expect(badge).not.toHaveFocus();
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: Default.args,
  render: args => <div style={{
    display: "flex",
    gap: "24px",
    alignItems: "center",
    fontFamily: "Nunito Sans, sans-serif"
  }}>
      <div>
        <h4>Brand</h4>
        <Badge {...args} badgeType="brand" />
      </div>
      <div>
        <h4>Neutral</h4>
        <Badge {...args} badgeType="neutral" />
      </div>
      <div>
        <h4>Indicator</h4>
        <Badge {...args} badgeType="indicator" />
      </div>
    </div>
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Ne=["Default","IconBadge","BadgeDisplay","Sizes","CountLimit","Icons","BadgeVisibility","KeyboardInteraction","BadgeType"];export{v as BadgeDisplay,h as BadgeType,y as BadgeVisibility,g as CountLimit,c as Default,m as IconBadge,b as Icons,f as KeyboardInteraction,p as Sizes,Ne as __namedExportsOrder,_e as default};
