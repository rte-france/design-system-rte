import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{T as A,a as T}from"./keyboard-test.constants-By8W48aj.js";import{f,w as h,e,u}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{f as it}from"./testing.utils-DmLcTX3r.js";import"./timepicker.constants-CynrC_9x.js";import{a as $}from"./log-handlers-Hz0GUguM.js";import{D as st}from"./Divider-BVZUrQ0d.js";import{I as lt}from"./Icon-DBkoQNiA.js";import{T as rt}from"./Tooltip-B02NSzm0.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./index-DJ8f9STe.js";const ct=n=>n.id??n.name,ut=n=>{if(n.length<2)return"The component requires at least 2 icon buttons.";if(n.some(a=>a.trim().length===0))return"Icon button IDs must not be empty.";if(new Set(n).size!==n.length)return"Icon button IDs must be unique."},dt=({ids:n,selectedIds:a,selectionMode:i})=>{if(new Set(a).size!==a.length)return"Selected IDs must be unique.";if(a.some(s=>!n.includes(s)))return"Selected IDs must belong to the icon button group.";if(i==="single-strict"&&a.length!==1)return"In single-strict mode, exactly one icon button must be selected.";if(i==="single"&&a.length>1)return"In single mode, at most one icon button must be selected."},ae=({ids:n,selectedIds:a,selectionMode:i})=>{const s=n.filter(t=>a.includes(t));return i==="multiple"?s:s.length>0?s.slice(0,1):i==="single-strict"?n.slice(0,1):[]},mt=({ids:n,selectedIds:a,clickedId:i,selectionMode:s})=>n.includes(i)?s==="single-strict"?[i]:s==="single"?a.includes(i)?[]:[i]:n.filter(t=>t===i?!a.includes(t):a.includes(t)):[...a],Je={"rte-icon-button-group":"_rte-icon-button-group_jal9e_1","rte-icon-button-group__item":"_rte-icon-button-group__item_jal9e_21"},$e=({button:n,buttonId:a,isDisabled:i,computedTooltipPosition:s,isCompact:t,index:o,isLast:r,orientation:c,appearance:p,isIconActive:g,isNextIconActive:w,dividerAppearance:d,onClick:C})=>{const{name:R,label:E}=n,v=()=>{const D={boxSizing:"border-box",zIndex:1};return t?{...D,height:c==="horizontal"?"30px":"auto",width:c==="vertical"?"30px":"1px"}:{...D,height:c==="horizontal"?"38px":"auto",width:c==="vertical"?"38px":"1px"}},H=()=>{C(a)};return l.jsxs(l.Fragment,{children:[l.jsx(rt,{label:E,shouldFocusTrigger:!1,preventOpening:i,position:s,children:l.jsx("button",{className:Je["rte-icon-button-group__item"],type:"button","data-compact-spacing":t,"data-first":o===0,"data-last":r,"data-orientation":c,"aria-label":E,"aria-pressed":g,disabled:i,"data-active":g,"data-appearance":p,onClick:H,children:l.jsx(lt,{name:R})})}),!r&&l.jsx(st,{style:v(),"data-is-left-item-active":g,"data-is-right-item-active":w,"data-left-item-index":o,"data-right-item-index":o+1,orientation:c==="vertical"?"horizontal":"vertical",appearance:d,endPoint:"square"})]})};$e.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroupItem",props:{button:{required:!0,tsType:{name:"IconButtonItem"},description:""},buttonId:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},computedTooltipPosition:{required:!0,tsType:{name:"union",raw:'"auto" | "top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!0,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},isIconActive:{required:!0,tsType:{name:"boolean"},description:""},isNextIconActive:{required:!0,tsType:{name:"boolean"},description:""},dividerAppearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral" | "inverse"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"inverse"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const pt=({leftActive:n,rightActive:a,isDisabled:i,appearance:s})=>i?"neutral":n&&a?"inverse":s,I=y.forwardRef(({iconButtons:n,selectedId:a,defaultSelectedId:i,selectedIds:s,defaultSelectedIds:t,onSelectionChange:o,selectionMode:r,isDisabled:c,orientation:p="horizontal",tooltipPosition:g="top",isCompact:w=!1,appearance:d="brand",["aria-label"]:C,...R},E)=>{const v=n.map(ct),H=r==="multiple"?s:a,D=r==="multiple"?t:i,k=H!==void 0,ee=x=>x==null?[]:typeof x=="string"?[x]:x,[J,te]=y.useState(()=>ae({ids:v,selectedIds:ee(D),selectionMode:r})),et=ut(v),S=k?ee(H):ae({ids:v,selectedIds:J,selectionMode:r});!k&&(J.length!==S.length||J.some((x,b)=>x!==S[b]))&&te(S),k&&D!==void 0&&$("IconButtonGroup",r==="multiple"?"Use selectedIds or defaultSelectedIds, not both. selectedIds takes precedence.":"Use selectedId or defaultSelectedId, not both. selectedId takes precedence.");const tt=k&&(r==="multiple"?!Array.isArray(H):H!==null&&typeof H!="string")?r==="multiple"?"In multiple mode, selectedIds must be an array.":"In single modes, selectedId must be a string or null.":void 0,ne=et??tt??(k?dt({ids:v,selectedIds:S,selectionMode:r}):void 0);if(ne)return $("IconButtonGroup",ne),null;if((C==null?void 0:C.trim())===""||C===void 0)return $("IconButtonGroup","Missing required aria-label for accessibility."),null;const nt=p==="vertical"&&g==="auto"?"left":g,at=x=>{if(c)return;const b=mt({ids:v,selectedIds:S,clickedId:x,selectionMode:r});b.length===S.length&&b.every(ot=>S.includes(ot))||(k||te(b),r==="multiple"?o==null||o([...b]):o==null||o(b[0]??null))};return l.jsx("div",{ref:E,className:Je["rte-icon-button-group"],role:"group","data-is-disabled":c,"data-orientation":p,"data-compact-spacing":w,"data-appearance":d,"aria-label":C,...R,children:n.map((x,b)=>l.jsx($e,{button:x,buttonId:v[b],isDisabled:c,computedTooltipPosition:nt,isCompact:w,index:b,isLast:b===n.length-1,orientation:p,appearance:d,isIconActive:S.includes(v[b]),isNextIconActive:S.includes(v[b+1]),dividerAppearance:pt({leftActive:S.includes(v[b]),rightActive:S.includes(v[b+1]),isDisabled:c,appearance:d}),onClick:at},v[b]))})});I.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroup",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},tooltipPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}}};const Vt={title:"Composants/IconButtonGroup/IconButtonGroup",component:I,tags:["autodocs","icon-button-group"],argTypes:{selectionMode:{control:{type:"radio"},options:["single","single-strict","multiple"]},isDisabled:{control:{type:"boolean"}},isCompact:{control:{type:"boolean"}},appearance:{control:{type:"radio"},options:["brand","neutral"]}}},Y=["single","single-strict","multiple"],Q=[{name:"format-align-left",label:"Align Left"},{name:"format-align-center",label:"Align Center"},{name:"format-align-right",label:"Align Right"},{name:"format-align-justify",label:"Align Justify"}],X=[{name:"visibility-show",label:"Read only"},{name:"edit",label:"Edit"}],Z=[{name:"mic",label:"Microphone"},{name:"volume-up",label:"Volume"},{name:"video-camera",label:"Video Camera"}],Qe={single:X,"single-strict":Q,multiple:Z},m={args:{iconButtons:X,selectionMode:"single",isDisabled:!1,isCompact:!1,appearance:"brand","aria-label":"Icon selection",defaultSelectedId:"visibility-show",onSelectionChange:f()}},j={args:{...m.args,iconButtons:Q,selectionMode:"single-strict",defaultSelectedId:"format-align-left"}},_={args:{...m.args,iconButtons:Z,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["mic"]}},V={args:{...m.args,isDisabled:!0,onSelectionChange:f()},play:async({canvasElement:n,args:a})=>{const i=h(n).getAllByRole("button");for(const s of i)await e(s).toBeDisabled(),await u.click(s),s.focus(),await e(s).not.toHaveFocus(),await u.keyboard(A+T);await u.tab();for(const s of i)await e(s).not.toHaveFocus();await e(a.onSelectionChange).not.toHaveBeenCalled()}},M={args:{...m.args,orientation:"vertical",tooltipPosition:"left"}},G={args:{...m.args,appearance:"neutral"}},L={args:{...m.args,isCompact:!0}},W={tags:["!autodocs"],args:{...m.args},render:n=>l.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column",alignItems:"flex-start"},children:[l.jsx("div",{"data-testid":"icon-button-group-single",children:l.jsx(I,{...n})}),l.jsx("div",{"data-testid":"icon-button-group-strict",children:l.jsx(I,{...n,iconButtons:Q,selectionMode:"single-strict",selectedIds:void 0,defaultSelectedIds:void 0,defaultSelectedId:"format-align-left",onSelectionChange:f()})}),l.jsx("div",{"data-testid":"icon-button-group-multiple",children:l.jsx(I,{...n,iconButtons:Z,selectionMode:"multiple",selectedId:void 0,defaultSelectedId:void 0,defaultSelectedIds:["mic"],onSelectionChange:f()})})]}),play:async({canvasElement:n})=>{const a=h(n),i=await a.getByTestId("icon-button-group-single"),s=await a.getByTestId("icon-button-group-strict"),t=await a.getByTestId("icon-button-group-multiple"),o=h(i).getAllByRole("button"),r=h(s).getAllByRole("button"),c=h(t).getAllByRole("button");await it(),e(o[0]).toHaveAttribute("data-active","true"),e(o[1]).toHaveAttribute("data-active","false"),await u.tab(),e(o[0]).toHaveFocus(),await u.tab(),e(o[1]).toHaveFocus(),await u.keyboard(A),e(o[0]).toHaveAttribute("data-active","false"),e(o[1]).toHaveAttribute("data-active","true"),await u.keyboard(T),e(o[1]).toHaveAttribute("data-active","false"),await u.tab(),e(r[0]).toHaveFocus(),await u.tab(),e(r[1]).toHaveFocus(),await u.keyboard(T),e(r[0]).toHaveAttribute("data-active","false"),e(r[1]).toHaveAttribute("data-active","true"),await u.keyboard(A),e(r[1]).toHaveAttribute("data-active","true"),await u.tab(),await u.keyboard(A),e(r[1]).toHaveAttribute("data-active","false"),e(r[2]).toHaveAttribute("data-active","true"),await u.tab(),await u.tab(),e(c[0]).toHaveFocus(),await u.tab(),e(c[1]).toHaveFocus(),await u.keyboard(T),e(c[0]).toHaveAttribute("data-active","true"),e(c[1]).toHaveAttribute("data-active","true"),await u.keyboard(A),e(c[0]).toHaveAttribute("data-active","true"),e(c[1]).toHaveAttribute("data-active","false")}},gt=n=>{const[a,i]=y.useState(n.selectedId??null),[s,t]=y.useState(n.selectedIds??[]);return n.selectionMode==="multiple"?l.jsx(I,{...n,selectedIds:s,onSelectionChange:o=>{var r;t(o),(r=n.onSelectionChange)==null||r.call(n,o)}}):l.jsx(I,{...n,selectedId:a,onSelectionChange:o=>{var r;i(o),(r=n.onSelectionChange)==null||r.call(n,o)}})},N={args:{...m.args,defaultSelectedId:void 0,selectedId:"visibility-show",onSelectionChange:f()},render:n=>l.jsx(gt,{...n})},U={args:{...m.args,onSelectionChange:f()}},Xe=({mode:n,controlled:a,onSelectionChange:i})=>{const s=Qe[n],[t,o]=y.useState([s[0].name]),r=n==="multiple"?{selectionMode:n,selectedIds:a?t:void 0,defaultSelectedIds:a?void 0:[s[0].name],onSelectionChange:c=>{a&&o(c),i==null||i(c)}}:{selectionMode:n,selectedId:a?t[0]??null:void 0,defaultSelectedId:a?void 0:s[0].name,onSelectionChange:c=>{a&&o(c===null?[]:[c]),i==null||i(c)}};return l.jsx(I,{...r,iconButtons:s,"aria-label":n})},Ze=async({canvasElement:n,args:a,step:i})=>{const s=h(n);let t=0;await e(a.onSelectionChange).not.toHaveBeenCalled();for(const o of Y)await i(o,async()=>{const r=h(s.getByRole("group",{name:o})),c=Qe[o],[p,g,...w]=r.getAllByRole("button"),[d,C,...R]=c.map(E=>E.name);await e(p).toHaveAttribute("aria-pressed","true"),p.focus(),await u.keyboard(A),await e(p).toHaveAttribute("aria-pressed",String(o==="single-strict")),o!=="single-strict"&&t++,await e(a.onSelectionChange).toHaveBeenCalledTimes(t),o==="single"&&await e(a.onSelectionChange).toHaveBeenLastCalledWith(null),await u.keyboard(T),await e(p).toHaveAttribute("aria-pressed","true"),o!=="single-strict"&&t++,await u.tab(),await e(g).toHaveFocus(),await e(g).toHaveAttribute("aria-pressed","false"),await u.keyboard(A),t++,await e(g).toHaveAttribute("aria-pressed","true"),await e(p).toHaveAttribute("aria-pressed",String(o==="multiple")),await e(a.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?[d,C]:C),await u.keyboard(T),o!=="single-strict"&&t++,await e(g).toHaveAttribute("aria-pressed",String(o==="single-strict"));for(const[E,v]of w.entries())await u.tab(),await e(v).toHaveFocus(),await u.keyboard(T),t++,await e(v).toHaveAttribute("aria-pressed","true"),await e(a.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?[d,...R.slice(0,E+1)]:R[E]);await u.click(p),t++,await e(a.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?R:d),await e(a.onSelectionChange).toHaveBeenCalledTimes(t)})},P={tags:["!autodocs"],args:{...m.args,onSelectionChange:f()},render:n=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:Y.map(a=>l.jsx(Xe,{mode:a,controlled:!0,onSelectionChange:n.onSelectionChange},a))}),play:Ze},F={tags:["!autodocs"],args:{...m.args,onSelectionChange:f()},render:n=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:Y.map(a=>l.jsx(Xe,{mode:a,controlled:!1,onSelectionChange:n.onSelectionChange},a))}),play:Ze},q=[{id:"microphone",name:"mic",label:"Microphone"},{id:"volume",name:"volume-up",label:"Volume"},{id:"video",name:"video-camera",label:"Video Camera"}],vt=n=>{const[a,i]=y.useState(q),[s,t]=y.useState("multiple"),[o,r]=y.useState(["microphone"]),[c,p]=y.useState(!1),g=n.onSelectionChange,w=s==="multiple"?{selectionMode:s,defaultSelectedIds:c?void 0:o,selectedIds:c?["microphone"]:void 0,onSelectionChange:g}:{selectionMode:s,defaultSelectedId:c?void 0:o[0]??null,selectedId:c?"microphone":void 0,onSelectionChange:g};return l.jsxs("div",{children:[l.jsx(I,{...w,iconButtons:a,"aria-label":"Dynamic selection"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>i(a.map(d=>({...d}))),children:"Refresh items"}),l.jsx("button",{type:"button",onClick:()=>r(["video"]),children:"Change defaults"}),l.jsx("button",{type:"button",onClick:()=>i([...a].reverse()),children:"Reverse items"}),l.jsx("button",{type:"button",onClick:()=>i(a.filter(d=>d.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>i(a.filter(d=>d.id!=="video")),children:"Remove video"}),l.jsx("button",{type:"button",onClick:()=>i([]),children:"Clear items"}),l.jsx("button",{type:"button",onClick:()=>i(q),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>i(a.map(d=>d.id==="microphone"?{...d,name:"edit",label:"Edited microphone"}:d)),children:"Change icon"}),l.jsx("button",{type:"button",onClick:()=>i(X),children:"Replace items"}),l.jsx("button",{type:"button",onClick:()=>p(!0),children:"Provide controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(!1),children:"Restore uncontrolled mode"}),l.jsx("select",{"aria-label":"Selection mode",value:s,onChange:d=>t(d.target.value),children:Y.map(d=>l.jsx("option",{value:d,children:d},d))})]})]})},B=async(n,a)=>{const i=console.warn,s=f();console.warn=s;try{await n(),await e(s).toHaveBeenCalledWith(`[IconButtonGroup] ${a}`)}finally{console.warn=i}},K={tags:["!autodocs"],args:{...m.args,onSelectionChange:f()},render:n=>l.jsx(vt,{...n}),play:async({canvasElement:n,args:a})=>{const i=h(n),s=()=>h(i.getByRole("group",{name:"Dynamic selection"})),t=c=>u.click(i.getByRole("button",{name:c})),o=()=>s().getAllByRole("button",{pressed:!0}).map(c=>c.getAttribute("aria-label"));await u.click(s().getByRole("button",{name:"Volume"})),await e(o()).toEqual(["Microphone","Volume"]),await t("Refresh items"),await t("Change defaults"),await e(o()).toEqual(["Microphone","Volume"]),await t("Reverse items"),await e(o()).toEqual(["Volume","Microphone"]),await t("Remove video"),await B(()=>t("Remove volume"),"The component requires at least 2 icon buttons."),await e(i.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await t("Restore items"),await e(o()).toEqual(["Microphone"]),await B(()=>t("Clear items"),"The component requires at least 2 icon buttons."),await e(i.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await t("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.click(s().getByRole("button",{name:"Volume"})),await t("Reverse items");const r=i.getByRole("combobox",{name:"Selection mode"});await u.selectOptions(r,"single"),await e(o()).toEqual(["Volume"]),await u.selectOptions(r,"single-strict"),await t("Remove volume"),await e(o()).toEqual(["Video Camera"]),await t("Restore items"),await e(o()).toEqual(["Video Camera"]),await u.selectOptions(r,"multiple"),await t("Remove video"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await t("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.selectOptions(r,"single-strict"),await e(o()).toEqual(["Microphone"]),await t("Change icon"),await e(o()).toEqual(["Edited microphone"]),await e(a.onSelectionChange).toHaveBeenCalledTimes(2),await t("Provide controlled value"),await e(o()).toEqual(["Edited microphone"]),await t("Restore uncontrolled mode"),await e(o()).toEqual(["Edited microphone"]),await t("Replace items"),await e(o()).toEqual(["Read only"]),await u.click(s().getByRole("button",{name:"Edit"})),await e(a.onSelectionChange).toHaveBeenLastCalledWith("edit"),await e(a.onSelectionChange).toHaveBeenCalledTimes(3)}},bt=n=>{const[a,i]=y.useState("microphone"),[s,t]=y.useState(q),[o,r]=y.useState("single"),[c,p]=y.useState(),g={selectionMode:o,selectedId:o==="multiple"?void 0:a,selectedIds:o==="multiple"?a:void 0,defaultSelectedId:o==="multiple"||c==null?void 0:c[0],defaultSelectedIds:o==="multiple"?c:void 0,onSelectionChange:n.onSelectionChange};return l.jsxs("div",{children:[l.jsx(I,{...g,iconButtons:s,"aria-label":"Controlled updates"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?["volume"]:"volume"),children:"Select volume"}),l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?[]:null),children:"Clear selection"}),l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?["unknown"]:"unknown"),children:"Select unknown"}),l.jsx("button",{type:"button",onClick:()=>i(["microphone","microphone"]),children:"Duplicate selection"}),l.jsx("button",{type:"button",onClick:()=>i(["microphone","volume"]),children:"Select two"}),l.jsx("button",{type:"button",onClick:()=>i("volume"),children:"Provide scalar"}),l.jsx("button",{type:"button",onClick:()=>i(null),children:"Provide null"}),l.jsx("button",{type:"button",onClick:()=>r("single-strict"),children:"Use strict mode"}),l.jsx("button",{type:"button",onClick:()=>r("single"),children:"Use single mode"}),l.jsx("button",{type:"button",onClick:()=>{i(w=>typeof w=="string"?[w]:w===null?[]:w),r("multiple")},children:"Use multiple mode"}),l.jsx("button",{type:"button",onClick:()=>t(s.filter(w=>w.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>t(q),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>t([q[0],{...q[1],id:"microphone"}]),children:"Duplicate IDs"}),l.jsx("button",{type:"button",onClick:()=>i(void 0),children:"Remove controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(["microphone"]),children:"Mix defaults"})]})]})},z={tags:["!autodocs"],args:{...m.args,onSelectionChange:f()},render:n=>l.jsx(bt,{...n}),play:async({canvasElement:n,args:a})=>{const i=h(n),s=()=>h(i.getByRole("group",{name:"Controlled updates"})),t=o=>u.click(i.getByRole("button",{name:o}));await u.click(s().getByRole("button",{name:"Volume"})),await e(a.onSelectionChange).toHaveBeenCalledTimes(1),await e(a.onSelectionChange).toHaveBeenCalledWith("volume"),await e(s().getByRole("button",{name:"Microphone"})).toHaveAttribute("aria-pressed","true"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","false"),await t("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await t("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.click(s().getByRole("button",{name:"Volume"})),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await e(a.onSelectionChange).toHaveBeenCalledTimes(2),await e(a.onSelectionChange).toHaveBeenLastCalledWith("volume");for(const[o,r]of[["Select unknown","Selected IDs must belong to the icon button group."],["Duplicate selection","In single modes, selectedId must be a string or null."],["Select two","In single modes, selectedId must be a string or null."]])await B(()=>t(o),r),await e(i.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await t("Clear selection");await B(()=>t("Use strict mode"),"In single-strict mode, exactly one icon button must be selected."),await t("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await B(()=>t("Select two"),"In single modes, selectedId must be a string or null."),await t("Use multiple mode"),await e(s().getAllByRole("button",{pressed:!0})).toHaveLength(2);for(const o of["Provide scalar","Provide null"])await B(()=>t(o),"In multiple mode, selectedIds must be an array."),await e(i.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await t("Select two");await t("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await B(()=>t("Duplicate selection"),"Selected IDs must be unique."),await t("Select two"),await B(()=>t("Use single mode"),"In single modes, selectedId must be a string or null."),await t("Select volume"),await B(()=>t("Remove volume"),"Selected IDs must belong to the icon button group."),await t("Restore items"),await B(()=>t("Duplicate IDs"),"Icon button IDs must be unique."),await t("Restore items"),await t("Remove controlled value"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await t("Select volume"),await B(()=>t("Mix defaults"),"Use selectedId or defaultSelectedId, not both. selectedId takes precedence."),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await e(a.onSelectionChange).toHaveBeenCalledTimes(2)}},O={tags:["!autodocs"],args:{...m.args,iconButtons:[{id:"first-edit",name:"edit",label:"Edit first"},{id:"second-edit",name:"edit",label:"Edit second"}],defaultSelectedIds:["first-edit"],defaultSelectedId:void 0,selectionMode:"multiple",onSelectionChange:f()},render:n=>l.jsx("form",{"aria-label":"Editor",onSubmit:f(),children:l.jsx(I,{...n})}),play:async({canvasElement:n,args:a})=>{const i=h(n),s=i.getByRole("form",{name:"Editor"}),t=f(o=>o.preventDefault());s.addEventListener("submit",t);try{await u.click(i.getByRole("button",{name:"Edit second"})),await e(a.onSelectionChange).toHaveBeenLastCalledWith(["first-edit","second-edit"]),await u.click(i.getByRole("button",{name:"Edit first"})),await e(a.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]),await e(i.getByRole("button",{name:"Edit second"})).toHaveAttribute("aria-pressed","true"),await e(t).not.toHaveBeenCalled()}finally{s.removeEventListener("submit",t)}}};var oe,ie,se;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    iconButtons: iconButtonSingle,
    selectionMode: "single",
    isDisabled: false,
    isCompact: false,
    appearance: "brand",
    "aria-label": "Icon selection",
    defaultSelectedId: "visibility-show",
    onSelectionChange: fn()
  }
} satisfies Story`,...(se=(ie=m.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,re,ce;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict,
    selectionMode: "single-strict",
    defaultSelectedId: "format-align-left"
  }
}`,...(ce=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ce.source}}};var ue,de,me;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonMultiple,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["mic"]
  }
}`,...(me=(de=_.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ge,ve;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isDisabled: true,
    onSelectionChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const buttons = within(canvasElement).getAllByRole("button");
    for (const button of buttons) {
      await expect(button).toBeDisabled();
      await userEvent.click(button);
      button.focus();
      await expect(button).not.toHaveFocus();
      await userEvent.keyboard(TESTING_ENTER_KEY + TESTING_SPACE_KEY);
    }
    await userEvent.tab();
    for (const button of buttons) await expect(button).not.toHaveFocus();
    await expect(args.onSelectionChange).not.toHaveBeenCalled();
  }
}`,...(ve=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var be,we,fe;M.parameters={...M.parameters,docs:{...(be=M.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical",
    tooltipPosition: "left"
  }
}`,...(fe=(we=M.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ye,he,Se;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(Se=(he=G.parameters)==null?void 0:he.docs)==null?void 0:Se.source}}};var Be,Ie,Ce;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(Ce=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var xe,Ee,Re;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  render: args => {
    return <div style={{
      display: "flex",
      gap: "16px",
      flexDirection: "column",
      alignItems: "flex-start"
    }}>
        <div data-testid="icon-button-group-single">
          <IconButtonGroup {...args} />
        </div>
        <div data-testid="icon-button-group-strict">
          <IconButtonGroup {...args} iconButtons={iconButtonStrict} selectionMode="single-strict" selectedIds={undefined} defaultSelectedIds={undefined} defaultSelectedId="format-align-left" onSelectionChange={fn()} />
        </div>
        <div data-testid="icon-button-group-multiple">
          <IconButtonGroup {...args} iconButtons={iconButtonMultiple} selectionMode="multiple" selectedId={undefined} defaultSelectedId={undefined} defaultSelectedIds={["mic"]} onSelectionChange={fn()} />
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const singleGroup = await canvas.getByTestId("icon-button-group-single");
    const strictGroup = await canvas.getByTestId("icon-button-group-strict");
    const multipleGroup = await canvas.getByTestId("icon-button-group-multiple");
    const singleButtons = within(singleGroup).getAllByRole("button");
    const strictButtons = within(strictGroup).getAllByRole("button");
    const multipleButtons = within(multipleGroup).getAllByRole("button");
    await focusElementBeforeComponent();
    expect(singleButtons[0]).toHaveAttribute("data-active", "true");
    expect(singleButtons[1]).toHaveAttribute("data-active", "false");
    await userEvent.tab();
    expect(singleButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(singleButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(singleButtons[0]).toHaveAttribute("data-active", "false");
    expect(singleButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(singleButtons[1]).toHaveAttribute("data-active", "false");
    await userEvent.tab();
    expect(strictButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(strictButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(strictButtons[0]).toHaveAttribute("data-active", "false");
    expect(strictButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(strictButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.tab();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(strictButtons[1]).toHaveAttribute("data-active", "false");
    expect(strictButtons[2]).toHaveAttribute("data-active", "true");
    await userEvent.tab();
    await userEvent.tab();
    expect(multipleButtons[0]).toHaveFocus();
    await userEvent.tab();
    expect(multipleButtons[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(multipleButtons[0]).toHaveAttribute("data-active", "true");
    expect(multipleButtons[1]).toHaveAttribute("data-active", "true");
    await userEvent.keyboard(TESTING_ENTER_KEY);
    expect(multipleButtons[0]).toHaveAttribute("data-active", "true");
    expect(multipleButtons[1]).toHaveAttribute("data-active", "false");
  }
}`,...(Re=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var He,Ae,Te;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultSelectedId: undefined,
    selectedId: "visibility-show",
    onSelectionChange: fn()
  },
  render: args => <ControlledExample {...args} />
}`,...(Te=(Ae=N.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var ke,qe,De;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onSelectionChange: fn()
  }
}`,...(De=(qe=U.parameters)==null?void 0:qe.docs)==null?void 0:De.source}}};var je,_e,Ve;P.parameters={...P.parameters,docs:{...(je=P.parameters)==null?void 0:je.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onSelectionChange: fn()
  },
  render: args => <div style={{
    display: "grid",
    gap: "16px",
    justifyItems: "start"
  }}>
      {selectionModes.map(mode => <SelectionExample key={mode} mode={mode} controlled onSelectionChange={args.onSelectionChange as SelectionChangeHandler} />)}
    </div>,
  play: selectionModeTests
}`,...(Ve=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var Me,Ge,Le;F.parameters={...F.parameters,docs:{...(Me=F.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onSelectionChange: fn()
  },
  render: args => <div style={{
    display: "grid",
    gap: "16px",
    justifyItems: "start"
  }}>
      {selectionModes.map(mode => <SelectionExample key={mode} mode={mode} controlled={false} onSelectionChange={args.onSelectionChange as SelectionChangeHandler} />)}
    </div>,
  play: selectionModeTests
}`,...(Le=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};var We,Ne,Ue;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onSelectionChange: fn()
  },
  render: args => <ListUpdatesExample {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const group = () => within(canvas.getByRole("group", {
      name: "Dynamic selection"
    }));
    const action = (name: string) => userEvent.click(canvas.getByRole("button", {
      name
    }));
    const selected = () => group().getAllByRole("button", {
      pressed: true
    }).map(button => button.getAttribute("aria-label"));
    await userEvent.click(group().getByRole("button", {
      name: "Volume"
    }));
    await expect(selected()).toEqual(["Microphone", "Volume"]);
    await action("Refresh items");
    await action("Change defaults");
    await expect(selected()).toEqual(["Microphone", "Volume"]);
    await action("Reverse items");
    await expect(selected()).toEqual(["Volume", "Microphone"]);
    await action("Remove video");
    await expectSelectionWarning(() => action("Remove volume"), "The component requires at least 2 icon buttons.");
    await expect(canvas.queryByRole("group", {
      name: "Dynamic selection"
    })).not.toBeInTheDocument();
    await action("Restore items");
    await expect(selected()).toEqual(["Microphone"]);
    await expectSelectionWarning(() => action("Clear items"), "The component requires at least 2 icon buttons.");
    await expect(canvas.queryByRole("group", {
      name: "Dynamic selection"
    })).not.toBeInTheDocument();
    await action("Restore items");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await userEvent.click(group().getByRole("button", {
      name: "Volume"
    }));
    await action("Reverse items");
    const mode = canvas.getByRole("combobox", {
      name: "Selection mode"
    });
    await userEvent.selectOptions(mode, "single");
    await expect(selected()).toEqual(["Volume"]);
    await userEvent.selectOptions(mode, "single-strict");
    await action("Remove volume");
    await expect(selected()).toEqual(["Video Camera"]);
    await action("Restore items");
    await expect(selected()).toEqual(["Video Camera"]);
    await userEvent.selectOptions(mode, "multiple");
    await action("Remove video");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await action("Restore items");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await userEvent.selectOptions(mode, "single-strict");
    await expect(selected()).toEqual(["Microphone"]);
    await action("Change icon");
    await expect(selected()).toEqual(["Edited microphone"]);
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
    await action("Provide controlled value");
    await expect(selected()).toEqual(["Edited microphone"]);
    await action("Restore uncontrolled mode");
    await expect(selected()).toEqual(["Edited microphone"]);
    await action("Replace items");
    await expect(selected()).toEqual(["Read only"]);
    await userEvent.click(group().getByRole("button", {
      name: "Edit"
    }));
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith("edit");
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(3);
  }
}`,...(Ue=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Pe,Fe,Ke;z.parameters={...z.parameters,docs:{...(Pe=z.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    onSelectionChange: fn()
  },
  render: args => <ControlledUpdatesExample {...args} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const group = () => within(canvas.getByRole("group", {
      name: "Controlled updates"
    }));
    const action = (name: string) => userEvent.click(canvas.getByRole("button", {
      name
    }));
    await userEvent.click(group().getByRole("button", {
      name: "Volume"
    }));
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(1);
    await expect(args.onSelectionChange).toHaveBeenCalledWith("volume");
    await expect(group().getByRole("button", {
      name: "Microphone"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(group().getByRole("button", {
      name: "Volume"
    })).toHaveAttribute("aria-pressed", "false");
    await action("Select volume");
    await expect(group().getByRole("button", {
      name: "Volume"
    })).toHaveAttribute("aria-pressed", "true");
    await action("Clear selection");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await userEvent.click(group().getByRole("button", {
      name: "Volume"
    }));
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith("volume");
    for (const [name, message] of [["Select unknown", "Selected IDs must belong to the icon button group."], ["Duplicate selection", "In single modes, selectedId must be a string or null."], ["Select two", "In single modes, selectedId must be a string or null."]]) {
      await expectSelectionWarning(() => action(name), message);
      await expect(canvas.queryByRole("group", {
        name: "Controlled updates"
      })).not.toBeInTheDocument();
      await action("Clear selection");
    }
    await expectSelectionWarning(() => action("Use strict mode"), "In single-strict mode, exactly one icon button must be selected.");
    await action("Select volume");
    await expect(group().getByRole("button", {
      name: "Volume"
    })).toHaveAttribute("aria-pressed", "true");
    await expectSelectionWarning(() => action("Select two"), "In single modes, selectedId must be a string or null.");
    await action("Use multiple mode");
    await expect(group().getAllByRole("button", {
      pressed: true
    })).toHaveLength(2);
    for (const name of ["Provide scalar", "Provide null"]) {
      await expectSelectionWarning(() => action(name), "In multiple mode, selectedIds must be an array.");
      await expect(canvas.queryByRole("group", {
        name: "Controlled updates"
      })).not.toBeInTheDocument();
      await action("Select two");
    }
    await action("Clear selection");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await expectSelectionWarning(() => action("Duplicate selection"), "Selected IDs must be unique.");
    await action("Select two");
    await expectSelectionWarning(() => action("Use single mode"), "In single modes, selectedId must be a string or null.");
    await action("Select volume");
    await expectSelectionWarning(() => action("Remove volume"), "Selected IDs must belong to the icon button group.");
    await action("Restore items");
    await expectSelectionWarning(() => action("Duplicate IDs"), "Icon button IDs must be unique.");
    await action("Restore items");
    await action("Remove controlled value");
    await expect(group().queryAllByRole("button", {
      pressed: true
    })).toHaveLength(0);
    await action("Select volume");
    await expectSelectionWarning(() => action("Mix defaults"), "Use selectedId or defaultSelectedId, not both. selectedId takes precedence.");
    await expect(group().getByRole("button", {
      name: "Volume"
    })).toHaveAttribute("aria-pressed", "true");
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(2);
  }
}`,...(Ke=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Ke.source}}};var ze,Oe,Ye;O.parameters={...O.parameters,docs:{...(ze=O.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    iconButtons: [{
      id: "first-edit",
      name: "edit",
      label: "Edit first"
    }, {
      id: "second-edit",
      name: "edit",
      label: "Edit second"
    }],
    defaultSelectedIds: ["first-edit"],
    defaultSelectedId: undefined,
    selectionMode: "multiple",
    onSelectionChange: fn()
  },
  render: args => <form aria-label="Editor" onSubmit={fn()}>
      <IconButtonGroup {...args} />
    </form>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const form = canvas.getByRole("form", {
      name: "Editor"
    });
    const submit = fn((event: Event) => event.preventDefault());
    form.addEventListener("submit", submit);
    try {
      await userEvent.click(canvas.getByRole("button", {
        name: "Edit second"
      }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(["first-edit", "second-edit"]);
      await userEvent.click(canvas.getByRole("button", {
        name: "Edit first"
      }));
      await expect(args.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]);
      await expect(canvas.getByRole("button", {
        name: "Edit second"
      })).toHaveAttribute("aria-pressed", "true");
      await expect(submit).not.toHaveBeenCalled();
    } finally {
      form.removeEventListener("submit", submit);
    }
  }
}`,...(Ye=(Oe=O.parameters)==null?void 0:Oe.docs)==null?void 0:Ye.source}}};const Mt=["Default","SingleStrict","Multiple","Disabled","Vertical","Neutral","Compact","KeyboardInteraction","Controlled","Uncontrolled","ControlledKeyboardInteraction","UncontrolledKeyboardInteraction","ListUpdates","ControlledUpdates","SameIconDifferentIds"];export{L as Compact,N as Controlled,P as ControlledKeyboardInteraction,z as ControlledUpdates,m as Default,V as Disabled,W as KeyboardInteraction,K as ListUpdates,_ as Multiple,G as Neutral,O as SameIconDifferentIds,j as SingleStrict,U as Uncontrolled,F as UncontrolledKeyboardInteraction,M as Vertical,Mt as __namedExportsOrder,Vt as default};
