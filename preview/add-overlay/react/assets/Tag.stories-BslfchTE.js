import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{i as w,I as $,R as A,T as B}from"./Icon-DjEid3Hw.js";import{g as K,a as F}from"./auto-placement-BWaa5Fnn.js";import{r as o}from"./index-G8LIXM5I.js";import{r as G}from"./index-DoK7PxrN.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-fNjTmf9T.js";const H=({children:a})=>{document.getElementById("overlay-root")||document.body.appendChild(document.createElement("div")).setAttribute("id","overlay-root");const l=document.getElementById("overlay-root");return l?G.createPortal(a,l):null},b={"tooltip-trigger":"_tooltip-trigger_9727e_2","tooltip-overlay":"_tooltip-overlay_9727e_7"},x=10,v=o.forwardRef(({label:a,position:l="top",children:y},u)=>{const i=o.useRef(null),m=o.useRef(null),[t,c]=o.useState(!1),[d,W]=o.useState({top:0,left:0});return o.useEffect(()=>{if(t&&i.current&&m.current){const s=l==="auto"?K(i.current,m.current,"top",x):l,M=F(s,i.current,m.current,x);W(M)}},[t,l]),e.jsxs("div",{ref:i,className:b["tooltip-trigger"],onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},children:[y,e.jsx(H,{children:e.jsx("div",{id:"tooltip-overlay",ref:s=>{m.current=s,typeof u=="function"?u(s):u&&(u.current=s)},role:"tooltip","data-position":l,"data-open":t||void 0,className:b["tooltip-overlay"],style:{top:`${d.top}px`,left:`${d.left}px`},children:a})})]})});v.__docgenInfo={description:"",methods:[],displayName:"TooltipOverlay",props:{label:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:'"top" | "bottom" | "left" | "right" | "auto"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'},{name:"literal",value:'"auto"'}]},description:"",defaultValue:{value:'"top"',computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const J="_tag_1gnmu_3",T={tag:J,"tag-label":"_tag-label_1gnmu_16"},I={success:"check-circle",information:"info",warning:"warning",alert:"dangerous"},r=o.forwardRef(({tagType:a="status",status:l,color:y,compactSpacing:u,label:i,showLeftIcon:m=!1,iconName:t,...c},d)=>(a==="status"&&l&&I[l]&&(t=I[l]),t&&!w(t)?(console.warn(`Tag: Invalid icon name "${t}". Please use a valid icon key.`),null):e.jsxs("div",{ref:d,className:T.tag,"data-tag-type":a,"data-status":l,"data-color":y,"data-compact-spacing":u,...c,children:[m&&t&&w(t)&&e.jsx($,{name:t,size:16}),i&&e.jsx("label",{className:T["tag-label"],children:i})]})));r.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{iconName:{required:!1,tsType:{name:"union",raw:"RegularIconIdKey | TogglableIconIdKey",elements:[{name:"union",raw:"keyof typeof RegularIcons",elements:[{name:"literal",value:"add"},{name:"literal",value:'"alt-route"'},{name:"literal",value:"apps"},{name:"literal",value:'"arrow-alt-down"'},{name:"literal",value:'"arrow-alt-down-left"'},{name:"literal",value:'"arrow-alt-down-right"'},{name:"literal",value:'"arrow-alt-left"'},{name:"literal",value:'"arrow-alt-right"'},{name:"literal",value:'"arrow-alt-up"'},{name:"literal",value:'"arrow-alt-up-left"'},{name:"literal",value:'"arrow-alt-up-right"'},{name:"literal",value:'"arrow-angle-down-left"'},{name:"literal",value:'"arrow-angle-down-right"'},{name:"literal",value:'"arrow-angle-up-left"'},{name:"literal",value:'"arrow-angle-up-right"'},{name:"literal",value:'"arrow-chevron-down"'},{name:"literal",value:'"arrow-chevron-left"'},{name:"literal",value:'"arrow-chevron-right"'},{name:"literal",value:'"arrow-chevron-up"'},{name:"literal",value:'"arrow-double-down"'},{name:"literal",value:'"arrow-double-left"'},{name:"literal",value:'"arrow-double-right"'},{name:"literal",value:'"arrow-double-up"'},{name:"literal",value:'"arrow-down"'},{name:"literal",value:'"arrow-down-left"'},{name:"literal",value:'"arrow-down-right"'},{name:"literal",value:'"arrow-drop-down"'},{name:"literal",value:'"arrow-drop-up"'},{name:"literal",value:'"arrow-left"'},{name:"literal",value:'"arrow-right"'},{name:"literal",value:'"arrow-up"'},{name:"literal",value:'"arrow-up-left"'},{name:"literal",value:'"arrow-up-right"'},{name:"literal",value:"asterisk"},{name:"literal",value:'"attach-file"'},{name:"literal",value:'"battery-alt-empty"'},{name:"literal",value:'"battery-alt-full"'},{name:"literal",value:'"battery-charging"'},{name:"literal",value:'"battery-empty"'},{name:"literal",value:'"battery-full"'},{name:"literal",value:"bluetooth"},{name:"literal",value:'"bluetooth-off"'},{name:"literal",value:'"chart-bar"'},{name:"literal",value:'"chart-bar-stacked"'},{name:"literal",value:"check"},{name:"literal",value:'"check-indeterminate"'},{name:"literal",value:'"check-small"'},{name:"literal",value:'"checkbox-empty"'},{name:"literal",value:"close"},{name:"literal",value:"compare"},{name:"literal",value:'"copy-all"'},{name:"literal",value:'"crisis-alert"'},{name:"literal",value:"cut"},{name:"literal",value:"download"},{name:"literal",value:'"download-done"'},{name:"literal",value:'"drag-handle"'},{name:"literal",value:'"drag-indicator"'},{name:"literal",value:"exclamation"},{name:"literal",value:'"explore-travel"'},{name:"literal",value:'"external-link"'},{name:"literal",value:"filter"},{name:"literal",value:'"filter-off"'},{name:"literal",value:'"first-page"'},{name:"literal",value:"forward"},{name:"literal",value:"fullscreen"},{name:"literal",value:'"fullscreen-exit"'},{name:"literal",value:"history"},{name:"literal",value:'"hourglass-empty"'},{name:"literal",value:'"info-i"'},{name:"literal",value:"language"},{name:"literal",value:'"last-page"'},{name:"literal",value:"link"},{name:"literal",value:'"link-off"'},{name:"literal",value:"list"},{name:"literal",value:'"location-disabled"'},{name:"literal",value:"login"},{name:"literal",value:"logout"},{name:"literal",value:"menu"},{name:"literal",value:'"menu-open"'},{name:"literal",value:"monitoring"},{name:"literal",value:'"more-down"'},{name:"literal",value:'"more-horiz"'},{name:"literal",value:'"more-up"'},{name:"literal",value:'"more-vert"'},{name:"literal",value:"ohm"},{name:"literal",value:'"open-in-full"'},{name:"literal",value:"paste"},{name:"literal",value:'"play-pause"'},{name:"literal",value:'"power-input"'},{name:"literal",value:'"power-plug"'},{name:"literal",value:'"power-settings"'},{name:"literal",value:'"priority-high"'},{name:"literal",value:"public"},{name:"literal",value:"publish"},{name:"literal",value:'"question-mark"'},{name:"literal",value:"radar"},{name:"literal",value:'"radio-button-empty"'},{name:"literal",value:"redo"},{name:"literal",value:"reload"},{name:"literal",value:"remove"},{name:"literal",value:"reply"},{name:"literal",value:'"reply-all"'},{name:"literal",value:"route"},{name:"literal",value:"search"},{name:"literal",value:'"side-navigation"'},{name:"literal",value:"sort"},{name:"literal",value:'"support-agent"'},{name:"literal",value:"timeline"},{name:"literal",value:'"trending-down"'},{name:"literal",value:'"trending-flat"'},{name:"literal",value:'"trending-up"'},{name:"literal",value:"tune"},{name:"literal",value:"undo"},{name:"literal",value:"upload"},{name:"literal",value:"water"},{name:"literal",value:'"water-alt"'},{name:"literal",value:"wifi"},{name:"literal",value:'"wifi-off"'},{name:"literal",value:"windmill"},{name:"literal",value:'"zoom-in"'},{name:"literal",value:'"zoom-out"'}]},{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:"error"},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]}]},description:""},tagType:{defaultValue:{value:'"status"',computed:!1},required:!1},showLeftIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const Q=Object.keys(A),U=Object.keys(B),ne={title:"Tag",component:r,tags:["autodocs"],argTypes:{tagType:{control:"select",options:["status","decorative"]},status:{control:"select",options:["success","information","warning","alert"]},color:{control:"select",options:["brand","neutral","azur","jade","lavande","ciel","nuage","givre","brume","glacier","turquoise","anis","menthe","citronnelle","sable","abricot","coral","rose","petale","quartz","cendre"]},compactSpacing:{control:"boolean"},showLeftIcon:{control:"boolean"},iconName:{control:"select",options:[...Q,...U],description:"Icon to display on the tag"}}},n={args:{tagType:"status",status:"success",color:"brand",compactSpacing:!1,label:"Tag Label",showLeftIcon:!1,iconName:"check"}},p={args:{...n.args,tagType:"decorative",color:"azur",label:"Decorative Tag",showLeftIcon:!1},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...a})})},g={args:{...n.args,tagType:"decorative",color:"jade",label:"Decorative Tag with Icon",showLeftIcon:!0},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...a})})},f={args:{...n.args,tagType:"decorative",color:"brand",compactSpacing:!0,label:"Compact Tag"},render:a=>e.jsx("div",{style:{display:"flex",gap:8},children:e.jsx(r,{...a})})},h={args:{...n.args,tagType:"decorative",color:"brand",label:"Compact Tag"},render:a=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:[e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"flex-start",gap:8,border:"1px solid red",width:204,height:250},children:e.jsx(v,{label:"This is a tooltip for the tag",position:"auto",children:e.jsx(r,{...a,label:"Compact with tooltip auto"})})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-start",gap:8,border:"1px solid red",width:500,height:50},children:e.jsx(v,{label:"This is a tooltip for the tag",position:"auto",children:e.jsx(r,{...a,label:"Compact with tooltip auto"})})}),e.jsx("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",gap:8,border:"1px solid red",width:204,height:250},children:e.jsx(v,{label:"This is a tooltip for the tag",position:"auto",children:e.jsx(r,{...a,label:"Compact with tooltip auto"})})}),e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",gap:8,border:"1px solid red",width:500,height:50},children:e.jsx(v,{label:"This is a tooltip for the tag",position:"auto",children:e.jsx(r,{...a,label:"Compact with tooltip auto"})})})]})};var j,k,C;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tagType: "status",
    status: "success",
    color: "brand",
    compactSpacing: false,
    label: "Tag Label",
    showLeftIcon: false,
    iconName: "check"
  }
}`,...(C=(k=n.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var _,O,R;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "azur",
    label: "Decorative Tag",
    showLeftIcon: false
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <Tag {...args} />
      </div>;
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,S,L;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "jade",
    label: "Decorative Tag with Icon",
    showLeftIcon: true
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag {...args} />
    </div>
}`,...(L=(S=g.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var q,E,z;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "brand",
    compactSpacing: true,
    label: "Compact Tag"
  },
  render: args => <div style={{
    display: "flex",
    gap: 8
  }}>
      <Tag {...args} />
    </div>
}`,...(z=(E=f.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var N,P,V;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    tagType: "decorative",
    color: "brand",
    label: "Compact Tag"
  },
  render: args => {
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }}>
        <div style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 8,
        border: "1px solid red",
        width: 204,
        height: 250
      }}>
          <TooltipOverlay label="This is a tooltip for the tag" position="auto">
            <Tag {...args} label="Compact with tooltip auto" />
          </TooltipOverlay>
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 8,
        border: "1px solid red",
        width: 500,
        height: 50
      }}>
          <TooltipOverlay label="This is a tooltip for the tag" position="auto">
            <Tag {...args} label="Compact with tooltip auto" />
          </TooltipOverlay>
        </div>

        <div style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: 8,
        border: "1px solid red",
        width: 204,
        height: 250
      }}>
          <TooltipOverlay label="This is a tooltip for the tag" position="auto">
            <Tag {...args} label="Compact with tooltip auto" />
          </TooltipOverlay>
        </div>

        <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        border: "1px solid red",
        width: 500,
        height: 50
      }}>
          <TooltipOverlay label="This is a tooltip for the tag" position="auto">
            <Tag {...args} label="Compact with tooltip auto" />
          </TooltipOverlay>
        </div>
      </div>;
  }
}`,...(V=(P=h.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};const ie=["Default","Decorative","WithIcon","Compact","WithTooltip"];export{f as Compact,p as Decorative,n as Default,g as WithIcon,h as WithTooltip,ie as __namedExportsOrder,ne as default};
