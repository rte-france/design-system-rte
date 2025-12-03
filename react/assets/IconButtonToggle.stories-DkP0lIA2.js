import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as N,a as D}from"./keyboard-test.constants-C9whQEGR.js";import{f as F,w as d,u as v,e as n}from"./index-DCXJbAaW.js";import{T as K}from"./Icon-DjEid3Hw.js";import{r as y}from"./index-G8LIXM5I.js";import{I as M}from"./IconButton-DU9lNzF3.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-ep-ZHn_7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-Dn6YlCGY.js";import"./index-DSdvzt-y.js";const i=y.forwardRef(({selected:e,onClick:a,defaultSelected:l,...o},c)=>{const g=e!==void 0,[j,_]=y.useState(l??!1),f=g?e:j,R=b=>{b.preventDefault(),g||_(!f),a&&a(b)};return t.jsx(M,{ref:c,appearance:f?"filled":"outlined",onClick:R,...o})});i.__docgenInfo={description:"",methods:[],displayName:"IconButtonToggle",props:{name:{required:!0,tsType:{name:"union",raw:"keyof typeof TogglableIcons",elements:[{name:"literal",value:'"add-circle"'},{name:"literal",value:'"admin-panel-settings"'},{name:"literal",value:"analytics"},{name:"literal",value:"archive"},{name:"literal",value:'"arrow-circle-chevron-down"'},{name:"literal",value:'"arrow-circle-chevron-left"'},{name:"literal",value:'"arrow-circle-chevron-right"'},{name:"literal",value:'"arrow-circle-chevron-up"'},{name:"literal",value:'"arrow-circle-down"'},{name:"literal",value:'"arrow-circle-left"'},{name:"literal",value:'"arrow-circle-right"'},{name:"literal",value:'"arrow-circle-up"'},{name:"literal",value:"article"},{name:"literal",value:'"assignment-complete"'},{name:"literal",value:"assignment"},{name:"literal",value:'"battery-alert"'},{name:"literal",value:'"battery-charging-full"'},{name:"literal",value:'"bolt-alt-circle"'},{name:"literal",value:'"bolt-alt"'},{name:"literal",value:'"bolt-circle"'},{name:"literal",value:"bolt"},{name:"literal",value:"bookmark"},{name:"literal",value:"bookmarks"},{name:"literal",value:"build"},{name:"literal",value:'"calendar-available"'},{name:"literal",value:'"calendar-busy"'},{name:"literal",value:'"calendar-month"'},{name:"literal",value:'"calendar-today"'},{name:"literal",value:"call"},{name:"literal",value:"cancel"},{name:"literal",value:"category"},{name:"literal",value:'"chart-add"'},{name:"literal",value:'"chart-area"'},{name:"literal",value:'"chart-pie"'},{name:"literal",value:'"chart-table"'},{name:"literal",value:'"chat-alt"'},{name:"literal",value:'"chat-alt-unread"'},{name:"literal",value:"chat"},{name:"literal",value:'"chat-unread"'},{name:"literal",value:'"check-circle"'},{name:"literal",value:"checkbox"},{name:"literal",value:'"checkbox-indeterminate"'},{name:"literal",value:"clock"},{name:"literal",value:'"cloud-download"'},{name:"literal",value:"cloud"},{name:"literal",value:'"cloud-off"'},{name:"literal",value:'"cloud-upload"'},{name:"literal",value:'"comment-add"'},{name:"literal",value:"comment"},{name:"literal",value:"copy"},{name:"literal",value:"dangerous"},{name:"literal",value:"dashboard"},{name:"literal",value:"database"},{name:"literal",value:"delete"},{name:"literal",value:"desktop"},{name:"literal",value:"devices"},{name:"literal",value:"draft"},{name:"literal",value:"eco"},{name:"literal",value:"edit"},{name:"literal",value:'"electric-meter"'},{name:"literal",value:"error"},{name:"literal",value:"explore"},{name:"literal",value:'"explore-off"'},{name:"literal",value:'"fast-forward"'},{name:"literal",value:'"fast-rewind"'},{name:"literal",value:"feedback"},{name:"literal",value:'"file-copy"'},{name:"literal",value:'"file-download"'},{name:"literal",value:'"file-upload"'},{name:"literal",value:'"filter-alt"'},{name:"literal",value:'"filter-alt-off"'},{name:"literal",value:"fire"},{name:"literal",value:'"fit-screen"'},{name:"literal",value:"flag"},{name:"literal",value:"flash"},{name:"literal",value:'"flash-off"'},{name:"literal",value:'"folder-add"'},{name:"literal",value:"folder"},{name:"literal",value:'"folder-move"'},{name:"literal",value:'"folder-open"'},{name:"literal",value:'"folder-shared"'},{name:"literal",value:"forum"},{name:"literal",value:'"group-add"'},{name:"literal",value:"group"},{name:"literal",value:"groups"},{name:"literal",value:"headphones"},{name:"literal",value:"heart"},{name:"literal",value:"help"},{name:"literal",value:"home"},{name:"literal",value:"hourglass"},{name:"literal",value:'"image-broken"'},{name:"literal",value:"image"},{name:"literal",value:'"image-gallery"'},{name:"literal",value:"inbox"},{name:"literal",value:"info"},{name:"literal",value:"keep"},{name:"literal",value:'"keep-off"'},{name:"literal",value:"label"},{name:"literal",value:"laptop"},{name:"literal",value:'"left-panel-close"'},{name:"literal",value:'"left-panel-open"'},{name:"literal",value:'"light-off"'},{name:"literal",value:'"lightbulb-alt"'},{name:"literal",value:'"lightbulb-circle"'},{name:"literal",value:"lightbulb"},{name:"literal",value:'"list-alt"'},{name:"literal",value:'"location-me"'},{name:"literal",value:'"location-off"'},{name:"literal",value:'"location-on"'},{name:"literal",value:"lock"},{name:"literal",value:'"lock-open"'},{name:"literal",value:'"lock-open-right"'},{name:"literal",value:"mail"},{name:"literal",value:'"mail-unread"'},{name:"literal",value:"map"},{name:"literal",value:"mic"},{name:"literal",value:'"mic-off"'},{name:"literal",value:'"mode-dark"'},{name:"literal",value:'"mode-light"'},{name:"literal",value:"notification"},{name:"literal",value:'"notification-important"'},{name:"literal",value:'"notification-off"'},{name:"literal",value:'"notification-unread"'},{name:"literal",value:"palette"},{name:"literal",value:'"pause-circle"'},{name:"literal",value:"pause"},{name:"literal",value:'"photo-camera"'},{name:"literal",value:'"play-circle"'},{name:"literal",value:"play"},{name:"literal",value:"power"},{name:"literal",value:'"power-off"'},{name:"literal",value:'"power-plug-connect"'},{name:"literal",value:'"power-settings-circle"'},{name:"literal",value:'"power-solar"'},{name:"literal",value:'"power-switch"'},{name:"literal",value:'"power-wind"'},{name:"literal",value:"print"},{name:"literal",value:'"right-panel-close"'},{name:"literal",value:'"right-panel-open"'},{name:"literal",value:"save"},{name:"literal",value:"send"},{name:"literal",value:"settings"},{name:"literal",value:"share"},{name:"literal",value:'"skip-next"'},{name:"literal",value:'"skip-previous"'},{name:"literal",value:"smartphone"},{name:"literal",value:"star"},{name:"literal",value:'"sticky-note"'},{name:"literal",value:'"stop-circle"'},{name:"literal",value:"stop"},{name:"literal",value:"subtitles"},{name:"literal",value:'"text-snippet"'},{name:"literal",value:'"trash-restore"'},{name:"literal",value:"unarchive"},{name:"literal",value:'"user-add"'},{name:"literal",value:'"user-circle"'},{name:"literal",value:"user"},{name:"literal",value:'"user-settings"'},{name:"literal",value:"verified"},{name:"literal",value:'"video-camera"'},{name:"literal",value:'"video-camera-off"'},{name:"literal",value:'"video-gallery"'},{name:"literal",value:'"view-agenda"'},{name:"literal",value:'"view-column"'},{name:"literal",value:'"view-grid"'},{name:"literal",value:'"view-kanban"'},{name:"literal",value:'"view-module"'},{name:"literal",value:'"view-timeline"'},{name:"literal",value:'"visibility-hide"'},{name:"literal",value:'"visibility-show"'},{name:"literal",value:'"volume-down"'},{name:"literal",value:'"volume-mute"'},{name:"literal",value:'"volume-off"'},{name:"literal",value:'"volume-up"'},{name:"literal",value:"warning"},{name:"literal",value:"waterdrop"}]},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},defaultSelected:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const q=Object.keys(K).sort((e,a)=>e.localeCompare(a)),Z={title:"Composants/IconButtonToggle",id:"IconButtonToggle",component:i,tags:["autodocs"],argTypes:{name:{control:"select",options:q,description:"Nom de l’icône à afficher",defaultValue:"check"},selected:{control:"boolean",description:"Indique si le bouton est sélectionné en mode contrôlé"},defaultSelected:{control:"boolean",description:"Indique si le bouton est sélectionné par défaut en mode non contrôlé"},variant:{control:"select",options:["primary","secondary","text","transparent","danger"]},size:{control:"select",options:["s","m","l"]},compactSpacing:{control:"boolean",description:"Utiliser un espacement compact"},disabled:{control:"boolean"}}},p=F(),r={args:{name:"settings",size:"m",disabled:!1,compactSpacing:!1,onClick:p,defaultSelected:!1,"aria-label":"icon button toggle aria label"},render:e=>t.jsx(i,{...e}),play:async({canvasElement:e})=>{const l=d(e).getByRole("button");await v.click(l),n(p).toHaveBeenCalled(),l.blur()}},u={args:{...r.args},render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(i,{...e,size:"s","data-testid":"small-icon-button"}),t.jsx(i,{...e,"data-testid":"medium-icon-button"}),t.jsx(i,{...e,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:e})=>{const a=d(e),l=a.getByTestId("small-icon-button"),o=a.getByTestId("medium-icon-button"),c=a.getByTestId("large-icon-button");n(l.clientHeight).toBe(24),n(o.clientHeight).toBe(32),n(c.clientHeight).toBe(40)}},s={args:{...r.args,compactSpacing:!0},render:e=>t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx(i,{...e,size:"s","data-testid":"small-icon-button"}),t.jsx(i,{...e,"data-testid":"medium-icon-button"}),t.jsx(i,{...e,size:"l","data-testid":"large-icon-button"})]}),play:async({canvasElement:e})=>{const a=d(e),l=a.getByTestId("small-icon-button"),o=a.getByTestId("medium-icon-button"),c=a.getByTestId("large-icon-button");n(l.clientHeight).toBe(16),n(o.clientHeight).toBe(20),n(c.clientHeight).toBe(24)}},m={args:{...r.args},play:async({canvasElement:e})=>{const l=d(e).getByRole("button");await v.tab(),n(l).toHaveFocus(),await v.keyboard(N),await v.keyboard(D),n(p).toHaveBeenCalledTimes(2),l.blur()}};var h,B,I;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: "settings",
    size: "m",
    disabled: false,
    compactSpacing: false,
    onClick: mockFn,
    defaultSelected: false,
    ["aria-label"]: "icon button toggle aria label"
  },
  render: args => <IconButtonToggle {...args} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole("button");
    await userEvent.click(iconButton);
    expect(mockFn).toHaveBeenCalled();
    iconButton.blur();
  }
}`,...(I=(B=r.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var w,T,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");
    expect(smallIconButton.clientHeight).toBe(24);
    expect(mediumIconButton.clientHeight).toBe(32);
    expect(largeIconButton.clientHeight).toBe(40);
  }
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var x,E,S;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    compactSpacing: true
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: 8
    }}>
        <IconButtonToggle {...args} size="s" data-testid="small-icon-button" />
        <IconButtonToggle {...args} data-testid="medium-icon-button" />
        <IconButtonToggle {...args} size="l" data-testid="large-icon-button" />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallIconButton = canvas.getByTestId("small-icon-button");
    const mediumIconButton = canvas.getByTestId("medium-icon-button");
    const largeIconButton = canvas.getByTestId("large-icon-button");
    expect(smallIconButton.clientHeight).toBe(16);
    expect(mediumIconButton.clientHeight).toBe(20);
    expect(largeIconButton.clientHeight).toBe(24);
  }
}`,...(S=(E=s.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var H,z,C;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.tab();
    expect(button).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(mockFn).toHaveBeenCalledTimes(2);
    button.blur();
  }
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const $=["Default","Sizing","CompactSizing","KeyboardInteraction"];export{s as CompactSizing,r as Default,m as KeyboardInteraction,u as Sizing,$ as __namedExportsOrder,Z as default};
