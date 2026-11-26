import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{a as A,T as D}from"./keyboard-test.constants-BLfu6vvq.js";import{f as w,w as v,e,u as c}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import{f as Et}from"./testing.utils-DmLcTX3r.js";import"./timepicker.constants-CxjiEh1r.js";import{a as ae}from"./log-handlers-Hz0GUguM.js";import{I as Rt}from"./Icon-DBkoQNiA.js";import{T as Ht}from"./Tooltip-DAFTZsLR.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-DMoGODOQ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-B0BqutDu.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./index-DJ8f9STe.js";const At=n=>n.id??n.name,kt=n=>{if(n.length<2)return"The component requires at least 2 icon buttons.";if(n.some(t=>t.trim().length===0))return"Icon button IDs must not be empty.";if(new Set(n).size!==n.length)return"Icon button IDs must be unique."},Dt=({ids:n,selectedIds:t,selectionMode:a})=>{if(new Set(t).size!==t.length)return"Selected IDs must be unique.";if(t.some(s=>!n.includes(s)))return"Selected IDs must belong to the icon button group.";if(a==="single-strict"&&t.length!==1)return"In single-strict mode, exactly one icon button must be selected.";if(a==="single"&&t.length>1)return"In single mode, at most one icon button must be selected."},Tt=({isControlled:n,selectionMode:t,controlledSelection:a})=>n&&(t==="multiple"?!Array.isArray(a):a!==null&&typeof a!="string")?t==="multiple"?"In multiple mode, selectedIds must be an array.":"In single modes, selectedId must be a string or null.":void 0,ce=({ids:n,selectedIds:t,selectionMode:a})=>{const s=n.filter(o=>t.includes(o));return a==="multiple"?s:s.length>0?s.slice(0,1):a==="single-strict"?n.slice(0,1):[]},qt=({ids:n,selectedIds:t,clickedId:a,selectionMode:s})=>n.includes(a)?s==="single-strict"?[a]:s==="single"?t.includes(a)?[]:[a]:n.filter(o=>o===a?!t.includes(o):t.includes(o)):[...t],jt=({isCurrentAndLastActive:n,isDisabled:t,appearance:a,isCompact:s,orientation:o})=>{const i={boxSizing:"border-box",zIndex:1,backgroundColor:t?"var(--border-disabled)":n?"var(--background-default)":a==="neutral"?"var(--border-disabled)":"var(--border-brand-default)"};return s?{...i,height:o==="horizontal"?"32px":"1px",width:o==="vertical"?"32px":"1px"}:{...i,height:o==="horizontal"?"38px":"1px",width:o==="vertical"?"38px":"1px"}},vt={"rte-icon-button-group":"_rte-icon-button-group_1w17a_1","rte-icon-button-group__item":"_rte-icon-button-group__item_1w17a_33"},wt=({button:n,buttonId:t,isDisabled:a,computedTooltipPosition:s,isCompact:o,index:i,isLast:r,orientation:u,appearance:p,isIconActive:g,isAllDisabled:b,onClick:d})=>{const{name:I,label:R}=n,H=()=>{d(t)};return l.jsx(l.Fragment,{children:l.jsx(Ht,{label:R,shouldFocusTrigger:!1,preventOpening:a||b,position:s,children:l.jsx("button",{className:vt["rte-icon-button-group__item"],type:"button","data-compact-spacing":o,"data-first":i===0,"data-last":r,"data-orientation":u,"aria-label":R,"aria-pressed":g,disabled:a||b,"data-active":g,"data-appearance":p,"data-is-all-disabled":b,onClick:H,children:l.jsx(Rt,{name:I,size:o?20:24,appearance:g?"filled":"outlined"})})})})};wt.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroupItem",props:{button:{required:!0,tsType:{name:"IconButtonItem"},description:""},buttonId:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},computedTooltipPosition:{required:!0,tsType:{name:"union",raw:'"auto" | "top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!0,tsType:{name:"Orientation"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},isIconActive:{required:!0,tsType:{name:"boolean"},description:""},isNextIconActive:{required:!0,tsType:{name:"boolean"},description:""},isAllDisabled:{required:!1,tsType:{name:"boolean"},description:""},dividerAppearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral" | "inverse"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"inverse"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const Lt=({leftActive:n,rightActive:t,leftDisabled:a,rightDisabled:s,isDisabled:o,appearance:i})=>a&&s||o?"neutral":n&&t?"inverse":i,S=h.forwardRef(({iconButtons:n,selectedId:t,defaultSelectedId:a,selectedIds:s,defaultSelectedIds:o,onSelectionChange:i,selectionMode:r,isDisabled:u,orientation:p="horizontal",tooltipPosition:g="top",isCompact:b=!1,appearance:d="brand",["aria-label"]:I,...R},H)=>{const f=n.map(At),te=r==="multiple"?s:t,ie=r==="multiple"?o:a,q=te!==void 0,se=x=>x==null?[]:typeof x=="string"?[x]:x,[ne,le]=h.useState(()=>ce({ids:f,selectedIds:se(ie),selectionMode:r})),B=q?se(te):ce({ids:f,selectedIds:ne,selectionMode:r});!q&&(ne.length!==B.length||ne.some((x,E)=>x!==B[E]))&&le(B),q&&ie!==void 0&&ae("IconButtonGroup",r==="multiple"?"Use selectedIds or defaultSelectedIds, not both. selectedIds takes precedence.":"Use selectedId or defaultSelectedId, not both. selectedId takes precedence.");const Bt=kt(f),St=Tt({isControlled:q,selectionMode:r,controlledSelection:te}),Ct=Dt({ids:f,selectedIds:B,selectionMode:r}),re=Bt??St??Ct;if(re)return ae("IconButtonGroup",re),null;((I==null?void 0:I.trim())===""||I===void 0)&&ae("IconButtonGroup","Missing required aria-label for accessibility.");const xt=p==="vertical"&&g==="auto"?"left":g,It=x=>{if(u)return;const E=qt({ids:f,selectedIds:B,clickedId:x,selectionMode:r});E.length===B.length&&E.every(y=>B.includes(y))||(q||le(E),r==="multiple"?i==null||i([...E]):i==null||i(E[0]??null))};return l.jsx("div",{ref:H,className:vt["rte-icon-button-group"],role:"group","data-is-disabled":u,"data-orientation":p,"data-compact-spacing":b,"data-appearance":d,"aria-label":I,...R,children:n.map(({isDisabled:x,...E},y)=>l.jsxs(h.Fragment,{children:[l.jsx(wt,{button:E,buttonId:f[y],isAllDisabled:u,isDisabled:x||u,computedTooltipPosition:xt,isCompact:b,index:y,isLast:y===n.length-1,orientation:p,appearance:d,isIconActive:B.includes(f[y]),isNextIconActive:B.includes(f[y+1]),dividerAppearance:Lt({leftDisabled:x,rightDisabled:n[y+1]?n[y+1].isDisabled:!1,leftActive:B.includes(f[y]),rightActive:B.includes(f[y+1]),isDisabled:u,appearance:d}),onClick:It}),y<n.length-1&&l.jsx("div",{style:jt({isCurrentAndLastActive:B.includes(f[y])&&B.includes(f[y+1]),isDisabled:u,appearance:d,isCompact:b,orientation:p})})]},f[y]))})});S.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroup",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},tooltipPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}}};const an={title:"Composants/IconButtonGroup/IconButtonGroup",component:S,tags:["autodocs"],argTypes:{selectionMode:{control:{type:"radio"},options:["single","single-strict","multiple"]},isDisabled:{control:{type:"boolean"}},isCompact:{control:{type:"boolean"}},appearance:{control:{type:"radio"},options:["brand","neutral"]}}},X=["single","single-strict","multiple"],Z=[{name:"format-align-left",label:"Align Left"},{name:"format-align-center",label:"Align Center"},{name:"format-align-right",label:"Align Right"},{name:"format-align-justify",label:"Align Justify"}],ee=[{name:"visibility-show",label:"Read only"},{name:"edit",label:"Edit"}],oe=[{name:"mic",label:"Microphone"},{name:"volume-up",label:"Volume"},{name:"video-camera",label:"Video Camera"}],ft={single:ee,"single-strict":Z,multiple:oe},m={args:{iconButtons:ee,selectionMode:"single",isDisabled:!1,isCompact:!1,appearance:"brand","aria-label":"Icon selection",defaultSelectedId:"visibility-show",onSelectionChange:w()}},j={args:{...m.args,iconButtons:Z,selectionMode:"single-strict",defaultSelectedId:"format-align-left"}},L={args:{...m.args,iconButtons:oe,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["mic"]}},M={args:{...m.args,iconButtons:ee,isDisabled:!0,onSelectionChange:w()},play:async({canvasElement:n,args:t})=>{const a=v(n).getAllByRole("button");for(const s of a)await e(s).toBeDisabled(),await c.click(s),s.focus(),await e(s).not.toHaveFocus(),await c.keyboard(A+D);await c.tab();for(const s of a)await e(s).not.toHaveFocus();await e(t.onSelectionChange).not.toHaveBeenCalled()}},k={args:{...m.args,iconButtons:Z.map((n,t)=>({...n,isDisabled:t===1||t===3})),defaultSelectedId:"format-align-left",onSelectionChange:w()},play:async({canvasElement:n,args:t})=>{const a=v(n),s=a.getByRole("button",{name:"Align Left"}),o=a.getByRole("button",{name:"Align Center"}),i=a.getByRole("button",{name:"Align Right"});await e(s).toBeEnabled(),await e(o).toBeDisabled(),await e(i).toBeEnabled(),await c.click(o),o.focus(),await e(o).not.toHaveFocus(),await e(o).toHaveAttribute("aria-pressed","false"),await e(t.onSelectionChange).not.toHaveBeenCalled(),s.focus(),await c.tab(),await e(i).toHaveFocus(),await c.keyboard(A),await e(i).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenCalledTimes(1),await e(t.onSelectionChange).toHaveBeenLastCalledWith(t.selectionMode==="multiple"?["format-align-left","format-align-right"]:"format-align-right")}},_={...k,args:{...k.args,selectionMode:"single-strict",onSelectionChange:w()}},V={...k,args:{...k.args,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["format-align-left"],onSelectionChange:w()}},G={args:{...m.args,orientation:"vertical",tooltipPosition:"left"}},W={args:{...m.args,appearance:"neutral"}},P={args:{...m.args,isCompact:!0}},N={args:{...j.args},render:n=>l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:["horizontal","vertical"].flatMap(t=>[!1,!0].map(a=>l.jsx("div",{style:{display:"flex",height:240},children:l.jsx(S,{...n,orientation:t,isCompact:a,"aria-label":`${t} ${a?"compact":"standard"}`})},`${t}-${a}`)))}),play:async({canvasElement:n})=>{const t=v(n);for(const a of["horizontal","vertical"])for(const s of[!1,!0]){const o=t.getByRole("group",{name:`${a} ${s?"compact":"standard"}`}),i=s?32:40,r=i*4+3,u=o.getBoundingClientRect();await e(u.width).toBe(a==="horizontal"?r:i),await e(u.height).toBe(a==="vertical"?r:i);for(const p of v(o).getAllByRole("button")){const g=p.getBoundingClientRect();await e(g.width).toBe(i),await e(g.height).toBe(i)}}}},F={tags:["!autodocs"],args:{...m.args},render:n=>{const[t,a]=h.useState(!0);return l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>a(!1),children:"Remove group label"}),l.jsx(S,{...n,"aria-label":t?n["aria-label"]:void 0})]})},play:async({canvasElement:n})=>{const t=v(n);await C(()=>c.click(t.getByRole("button",{name:"Remove group label"})),"Missing required aria-label for accessibility.");const a=t.getByRole("group");await e(a).not.toHaveAttribute("aria-label"),await e(v(a).getAllByRole("button")).toHaveLength(2)}},U={tags:["!autodocs"],args:{...m.args},render:n=>l.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column",alignItems:"flex-start"},children:[l.jsx("div",{"data-testid":"icon-button-group-single",children:l.jsx(S,{...n})}),l.jsx("div",{"data-testid":"icon-button-group-strict",children:l.jsx(S,{...n,iconButtons:Z,selectionMode:"single-strict",selectedIds:void 0,defaultSelectedIds:void 0,defaultSelectedId:"format-align-left",onSelectionChange:w()})}),l.jsx("div",{"data-testid":"icon-button-group-multiple",children:l.jsx(S,{...n,iconButtons:oe,selectionMode:"multiple",selectedId:void 0,defaultSelectedId:void 0,defaultSelectedIds:["mic"],onSelectionChange:w()})})]}),play:async({canvasElement:n})=>{const t=v(n),a=await t.getByTestId("icon-button-group-single"),s=await t.getByTestId("icon-button-group-strict"),o=await t.getByTestId("icon-button-group-multiple"),i=v(a).getAllByRole("button"),r=v(s).getAllByRole("button"),u=v(o).getAllByRole("button");await Et(),e(i[0]).toHaveAttribute("data-active","true"),e(i[1]).toHaveAttribute("data-active","false"),await c.tab(),e(i[0]).toHaveFocus(),await c.tab(),e(i[1]).toHaveFocus(),await c.keyboard(A),e(i[0]).toHaveAttribute("data-active","false"),e(i[1]).toHaveAttribute("data-active","true"),await c.keyboard(D),e(i[1]).toHaveAttribute("data-active","false"),await c.tab(),e(r[0]).toHaveFocus(),await c.tab(),e(r[1]).toHaveFocus(),await c.keyboard(D),e(r[0]).toHaveAttribute("data-active","false"),e(r[1]).toHaveAttribute("data-active","true"),await c.keyboard(A),e(r[1]).toHaveAttribute("data-active","true"),await c.tab(),await c.keyboard(A),e(r[1]).toHaveAttribute("data-active","false"),e(r[2]).toHaveAttribute("data-active","true"),await c.tab(),await c.tab(),e(u[0]).toHaveFocus(),await c.tab(),e(u[1]).toHaveFocus(),await c.keyboard(D),e(u[0]).toHaveAttribute("data-active","true"),e(u[1]).toHaveAttribute("data-active","true"),await c.keyboard(A),e(u[0]).toHaveAttribute("data-active","true"),e(u[1]).toHaveAttribute("data-active","false")}},Mt=n=>{const[t,a]=h.useState(n.selectedId??null),[s,o]=h.useState(n.selectedIds??[]);return n.selectionMode==="multiple"?l.jsx(S,{...n,selectedIds:s,onSelectionChange:i=>{var r;o(i),(r=n.onSelectionChange)==null||r.call(n,i)}}):l.jsx(S,{...n,selectedId:t,onSelectionChange:i=>{var r;a(i),(r=n.onSelectionChange)==null||r.call(n,i)}})},z={args:{...m.args,defaultSelectedId:void 0,selectedId:"visibility-show",onSelectionChange:w()},render:n=>l.jsx(Mt,{...n})},K={args:{...m.args,onSelectionChange:w()}},yt=({mode:n,controlled:t,onSelectionChange:a})=>{const s=ft[n],[o,i]=h.useState([s[0].name]),r=n==="multiple"?{selectionMode:n,selectedIds:t?o:void 0,defaultSelectedIds:t?void 0:[s[0].name],onSelectionChange:u=>{t&&i(u),a==null||a(u)}}:{selectionMode:n,selectedId:t?o[0]??null:void 0,defaultSelectedId:t?void 0:s[0].name,onSelectionChange:u=>{t&&i(u===null?[]:[u]),a==null||a(u)}};return l.jsx(S,{...r,iconButtons:s,"aria-label":n})},ht=async({canvasElement:n,args:t,step:a})=>{const s=v(n);let o=0;await e(t.onSelectionChange).not.toHaveBeenCalled();for(const i of X)await a(i,async()=>{const r=v(s.getByRole("group",{name:i})),u=ft[i],[p,g,...b]=r.getAllByRole("button"),[d,I,...R]=u.map(H=>H.name);await e(p).toHaveAttribute("aria-pressed","true"),p.focus(),await c.keyboard(A),await e(p).toHaveAttribute("aria-pressed",String(i==="single-strict")),i!=="single-strict"&&o++,await e(t.onSelectionChange).toHaveBeenCalledTimes(o),i==="single"&&await e(t.onSelectionChange).toHaveBeenLastCalledWith(null),await c.keyboard(D),await e(p).toHaveAttribute("aria-pressed","true"),i!=="single-strict"&&o++,await c.tab(),await e(g).toHaveFocus(),await e(g).toHaveAttribute("aria-pressed","false"),await c.keyboard(A),o++,await e(g).toHaveAttribute("aria-pressed","true"),await e(p).toHaveAttribute("aria-pressed",String(i==="multiple")),await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?[d,I]:I),await c.keyboard(D),i!=="single-strict"&&o++,await e(g).toHaveAttribute("aria-pressed",String(i==="single-strict"));for(const[H,f]of b.entries())await c.tab(),await e(f).toHaveFocus(),await c.keyboard(D),o++,await e(f).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?[d,...R.slice(0,H+1)]:R[H]);await c.click(p),o++,await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?R:d),await e(t.onSelectionChange).toHaveBeenCalledTimes(o)})},O={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:n=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:X.map(t=>l.jsx(yt,{mode:t,controlled:!0,onSelectionChange:n.onSelectionChange},t))}),play:ht},$={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:n=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:X.map(t=>l.jsx(yt,{mode:t,controlled:!1,onSelectionChange:n.onSelectionChange},t))}),play:ht},T=[{id:"microphone",name:"mic",label:"Microphone"},{id:"volume",name:"volume-up",label:"Volume"},{id:"video",name:"video-camera",label:"Video Camera"}],_t=n=>{const[t,a]=h.useState(T),[s,o]=h.useState("multiple"),[i,r]=h.useState(["microphone"]),[u,p]=h.useState(!1),g=n.onSelectionChange,b=s==="multiple"?{selectionMode:s,defaultSelectedIds:u?void 0:i,selectedIds:u?["microphone"]:void 0,onSelectionChange:g}:{selectionMode:s,defaultSelectedId:u?void 0:i[0]??null,selectedId:u?"microphone":void 0,onSelectionChange:g};return l.jsxs("div",{children:[l.jsx(S,{...b,iconButtons:t,"aria-label":"Dynamic selection"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>a(t.map(d=>({...d}))),children:"Refresh items"}),l.jsx("button",{type:"button",onClick:()=>r(["video"]),children:"Change defaults"}),l.jsx("button",{type:"button",onClick:()=>a([...t].reverse()),children:"Reverse items"}),l.jsx("button",{type:"button",onClick:()=>a(t.filter(d=>d.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>a(t.filter(d=>d.id!=="video")),children:"Remove video"}),l.jsx("button",{type:"button",onClick:()=>a([]),children:"Clear items"}),l.jsx("button",{type:"button",onClick:()=>a(T),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>a(t.map(d=>d.id==="microphone"?{...d,name:"edit",label:"Edited microphone"}:d)),children:"Change icon"}),l.jsx("button",{type:"button",onClick:()=>a(ee),children:"Replace items"}),l.jsx("button",{type:"button",onClick:()=>p(!0),children:"Provide controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(!1),children:"Restore uncontrolled mode"}),l.jsx("select",{"aria-label":"Selection mode",value:s,onChange:d=>o(d.target.value),children:X.map(d=>l.jsx("option",{value:d,children:d},d))})]})]})},C=async(n,t)=>{const a=console.warn,s=w();console.warn=s;try{await n(),await e(s).toHaveBeenCalledWith(`[IconButtonGroup] ${t}`)}finally{console.warn=a}},Y={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:n=>l.jsx(_t,{...n}),play:async({canvasElement:n,args:t})=>{const a=v(n),s=()=>v(a.getByRole("group",{name:"Dynamic selection"})),o=u=>c.click(a.getByRole("button",{name:u})),i=()=>s().getAllByRole("button",{pressed:!0}).map(u=>u.getAttribute("aria-label"));await c.click(s().getByRole("button",{name:"Volume"})),await e(i()).toEqual(["Microphone","Volume"]),await o("Refresh items"),await o("Change defaults"),await e(i()).toEqual(["Microphone","Volume"]),await o("Reverse items"),await e(i()).toEqual(["Volume","Microphone"]),await o("Remove video"),await C(()=>o("Remove volume"),"The component requires at least 2 icon buttons."),await e(a.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await o("Restore items"),await e(i()).toEqual(["Microphone"]),await C(()=>o("Clear items"),"The component requires at least 2 icon buttons."),await e(a.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await o("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.click(s().getByRole("button",{name:"Volume"})),await o("Reverse items");const r=a.getByRole("combobox",{name:"Selection mode"});await c.selectOptions(r,"single"),await e(i()).toEqual(["Volume"]),await c.selectOptions(r,"single-strict"),await o("Remove volume"),await e(i()).toEqual(["Video Camera"]),await o("Restore items"),await e(i()).toEqual(["Video Camera"]),await c.selectOptions(r,"multiple"),await o("Remove video"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await o("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.selectOptions(r,"single-strict"),await e(i()).toEqual(["Microphone"]),await o("Change icon"),await e(i()).toEqual(["Edited microphone"]),await e(t.onSelectionChange).toHaveBeenCalledTimes(2),await o("Provide controlled value"),await e(i()).toEqual(["Edited microphone"]),await o("Restore uncontrolled mode"),await e(i()).toEqual(["Edited microphone"]),await o("Replace items"),await e(i()).toEqual(["Read only"]),await c.click(s().getByRole("button",{name:"Edit"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith("edit"),await e(t.onSelectionChange).toHaveBeenCalledTimes(3)}},Vt=n=>{const[t,a]=h.useState("microphone"),[s,o]=h.useState(T),[i,r]=h.useState("single"),[u,p]=h.useState(),g={selectionMode:i,selectedId:i==="multiple"?void 0:t,selectedIds:i==="multiple"?t:void 0,defaultSelectedId:i==="multiple"||u==null?void 0:u[0],defaultSelectedIds:i==="multiple"?u:void 0,onSelectionChange:n.onSelectionChange};return l.jsxs("div",{children:[l.jsx(S,{...g,iconButtons:s,"aria-label":"Controlled updates"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>a(i==="multiple"?["volume"]:"volume"),children:"Select volume"}),l.jsx("button",{type:"button",onClick:()=>a(i==="multiple"?[]:null),children:"Clear selection"}),l.jsx("button",{type:"button",onClick:()=>a(i==="multiple"?["unknown"]:"unknown"),children:"Select unknown"}),l.jsx("button",{type:"button",onClick:()=>a(["microphone","microphone"]),children:"Duplicate selection"}),l.jsx("button",{type:"button",onClick:()=>a(["microphone","volume"]),children:"Select two"}),l.jsx("button",{type:"button",onClick:()=>a("volume"),children:"Provide scalar"}),l.jsx("button",{type:"button",onClick:()=>a(null),children:"Provide null"}),l.jsx("button",{type:"button",onClick:()=>r("single-strict"),children:"Use strict mode"}),l.jsx("button",{type:"button",onClick:()=>r("single"),children:"Use single mode"}),l.jsx("button",{type:"button",onClick:()=>{a(b=>typeof b=="string"?[b]:b===null?[]:b),r("multiple")},children:"Use multiple mode"}),l.jsx("button",{type:"button",onClick:()=>o(s.filter(b=>b.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>o(T),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>o([T[0],{...T[1],id:"microphone"}]),children:"Duplicate IDs"}),l.jsx("button",{type:"button",onClick:()=>a(void 0),children:"Remove controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(["microphone"]),children:"Mix defaults"})]})]})},J={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:n=>l.jsx(Vt,{...n}),play:async({canvasElement:n,args:t})=>{const a=v(n),s=()=>v(a.getByRole("group",{name:"Controlled updates"})),o=i=>c.click(a.getByRole("button",{name:i}));await c.click(s().getByRole("button",{name:"Volume"})),await e(t.onSelectionChange).toHaveBeenCalledTimes(1),await e(t.onSelectionChange).toHaveBeenCalledWith("volume"),await e(s().getByRole("button",{name:"Microphone"})).toHaveAttribute("aria-pressed","true"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","false"),await o("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await o("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.click(s().getByRole("button",{name:"Volume"})),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await e(t.onSelectionChange).toHaveBeenCalledTimes(2),await e(t.onSelectionChange).toHaveBeenLastCalledWith("volume");for(const[i,r]of[["Select unknown","Selected IDs must belong to the icon button group."],["Duplicate selection","In single modes, selectedId must be a string or null."],["Select two","In single modes, selectedId must be a string or null."]])await C(()=>o(i),r),await e(a.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await o("Clear selection");await C(()=>o("Use strict mode"),"In single-strict mode, exactly one icon button must be selected."),await o("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await C(()=>o("Select two"),"In single modes, selectedId must be a string or null."),await o("Use multiple mode"),await e(s().getAllByRole("button",{pressed:!0})).toHaveLength(2);for(const i of["Provide scalar","Provide null"])await C(()=>o(i),"In multiple mode, selectedIds must be an array."),await e(a.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await o("Select two");await o("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await C(()=>o("Duplicate selection"),"Selected IDs must be unique."),await o("Select two"),await C(()=>o("Use single mode"),"In single modes, selectedId must be a string or null."),await o("Select volume"),await C(()=>o("Remove volume"),"Selected IDs must belong to the icon button group."),await o("Restore items"),await C(()=>o("Duplicate IDs"),"Icon button IDs must be unique."),await o("Restore items"),await o("Remove controlled value"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await o("Select volume"),await C(()=>o("Mix defaults"),"Use selectedId or defaultSelectedId, not both. selectedId takes precedence."),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenCalledTimes(2)}},Q={tags:["!autodocs"],args:{...m.args,iconButtons:[{id:"first-edit",name:"edit",label:"Edit first"},{id:"second-edit",name:"edit",label:"Edit second"}],defaultSelectedIds:["first-edit"],defaultSelectedId:void 0,selectionMode:"multiple",onSelectionChange:w()},render:n=>l.jsx("form",{"aria-label":"Editor",onSubmit:w(),children:l.jsx(S,{...n})}),play:async({canvasElement:n,args:t})=>{const a=v(n),s=a.getByRole("form",{name:"Editor"}),o=w(i=>i.preventDefault());s.addEventListener("submit",o);try{await c.click(a.getByRole("button",{name:"Edit second"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith(["first-edit","second-edit"]),await c.click(a.getByRole("button",{name:"Edit first"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]),await e(a.getByRole("button",{name:"Edit second"})).toHaveAttribute("aria-pressed","true"),await e(o).not.toHaveBeenCalled()}finally{s.removeEventListener("submit",o)}}};var ue,de,pe;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,be;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict,
    selectionMode: "single-strict",
    defaultSelectedId: "format-align-left"
  }
}`,...(be=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,we,fe;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonMultiple,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["mic"]
  }
}`,...(fe=(we=L.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ye,he,Be;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonSingle,
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
}`,...(Be=(he=M.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var Se,Ce,xe;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict.map((button, index) => ({
      ...button,
      isDisabled: index === 1 || index === 3
    })),
    defaultSelectedId: "format-align-left",
    onSelectionChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const firstButton = canvas.getByRole("button", {
      name: "Align Left"
    });
    const disabledButton = canvas.getByRole("button", {
      name: "Align Center"
    });
    const nextButton = canvas.getByRole("button", {
      name: "Align Right"
    });
    await expect(firstButton).toBeEnabled();
    await expect(disabledButton).toBeDisabled();
    await expect(nextButton).toBeEnabled();
    await userEvent.click(disabledButton);
    disabledButton.focus();
    await expect(disabledButton).not.toHaveFocus();
    await expect(disabledButton).toHaveAttribute("aria-pressed", "false");
    await expect(args.onSelectionChange).not.toHaveBeenCalled();
    firstButton.focus();
    await userEvent.tab();
    await expect(nextButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ENTER_KEY);
    await expect(nextButton).toHaveAttribute("aria-pressed", "true");
    await expect(args.onSelectionChange).toHaveBeenCalledTimes(1);
    await expect(args.onSelectionChange).toHaveBeenLastCalledWith(args.selectionMode === "multiple" ? ["format-align-left", "format-align-right"] : "format-align-right");
  }
} satisfies Story`,...(xe=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Ie,Ee,Re;_.parameters={..._.parameters,docs:{...(Ie=_.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "single-strict",
    onSelectionChange: fn()
  }
}`,...(Re=(Ee=_.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var He,Ae,ke;V.parameters={...V.parameters,docs:{...(He=V.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["format-align-left"],
    onSelectionChange: fn()
  }
}`,...(ke=(Ae=V.parameters)==null?void 0:Ae.docs)==null?void 0:ke.source}}};var De,Te,qe;G.parameters={...G.parameters,docs:{...(De=G.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical",
    tooltipPosition: "left"
  }
}`,...(qe=(Te=G.parameters)==null?void 0:Te.docs)==null?void 0:qe.source}}};var je,Le,Me;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(Me=(Le=W.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var _e,Ve,Ge;P.parameters={...P.parameters,docs:{...(_e=P.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(Ge=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var We,Pe,Ne;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...SingleStrict.args
  },
  render: args => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 24
  }}>
      {(["horizontal", "vertical"] as const).flatMap(orientation => [false, true].map(isCompact => <div key={\`\${orientation}-\${isCompact}\`} style={{
      display: "flex",
      height: 240
    }}>
            <IconButtonGroup {...args} orientation={orientation} isCompact={isCompact} aria-label={\`\${orientation} \${isCompact ? "compact" : "standard"}\`} />
          </div>))}
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    for (const orientation of ["horizontal", "vertical"]) {
      for (const isCompact of [false, true]) {
        const group = canvas.getByRole("group", {
          name: \`\${orientation} \${isCompact ? "compact" : "standard"}\`
        });
        const itemSize = isCompact ? 32 : 40;
        const groupLength = itemSize * 4 + 3;
        const bounds = group.getBoundingClientRect();
        await expect(bounds.width).toBe(orientation === "horizontal" ? groupLength : itemSize);
        await expect(bounds.height).toBe(orientation === "vertical" ? groupLength : itemSize);
        for (const button of within(group).getAllByRole("button")) {
          const buttonBounds = button.getBoundingClientRect();
          await expect(buttonBounds.width).toBe(itemSize);
          await expect(buttonBounds.height).toBe(itemSize);
        }
      }
    }
  }
}`,...(Ne=(Pe=N.parameters)==null?void 0:Pe.docs)==null?void 0:Ne.source}}};var Fe,Ue,ze;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args
  },
  render: args => {
    const [showLabel, setShowLabel] = useState(true);
    return <>
        <button type="button" onClick={() => setShowLabel(false)}>
          Remove group label
        </button>
        <IconButtonGroup {...args} aria-label={showLabel ? args["aria-label"] : undefined} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expectSelectionWarning(() => userEvent.click(canvas.getByRole("button", {
      name: "Remove group label"
    })), "Missing required aria-label for accessibility.");
    const group = canvas.getByRole("group");
    await expect(group).not.toHaveAttribute("aria-label");
    await expect(within(group).getAllByRole("button")).toHaveLength(2);
  }
}`,...(ze=(Ue=F.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ke,Oe,$e;U.parameters={...U.parameters,docs:{...(Ke=U.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ye,Je,Qe;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultSelectedId: undefined,
    selectedId: "visibility-show",
    onSelectionChange: fn()
  },
  render: args => <ControlledExample {...args} />
}`,...(Qe=(Je=z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;K.parameters={...K.parameters,docs:{...(Xe=K.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onSelectionChange: fn()
  }
}`,...(et=(Ze=K.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;O.parameters={...O.parameters,docs:{...(tt=O.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=O.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,it,st;$.parameters={...$.parameters,docs:{...(ot=$.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(it=$.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var lt,rt,ct;Y.parameters={...Y.parameters,docs:{...(lt=Y.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Y.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var ut,dt,pt;J.parameters={...J.parameters,docs:{...(ut=J.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(dt=J.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,gt,bt;Q.parameters={...Q.parameters,docs:{...(mt=Q.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(bt=(gt=Q.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};const on=["Default","SingleStrict","Multiple","Disabled","PartiallyDisabled","PartiallyDisabledSingleStrict","PartiallyDisabledMultiple","Vertical","Neutral","Compact","LayoutVariants","MissingGroupLabel","KeyboardInteraction","Controlled","Uncontrolled","ControlledKeyboardInteraction","UncontrolledKeyboardInteraction","ListUpdates","ControlledUpdates","SameIconDifferentIds"];export{P as Compact,z as Controlled,O as ControlledKeyboardInteraction,J as ControlledUpdates,m as Default,M as Disabled,U as KeyboardInteraction,N as LayoutVariants,Y as ListUpdates,F as MissingGroupLabel,L as Multiple,W as Neutral,k as PartiallyDisabled,V as PartiallyDisabledMultiple,_ as PartiallyDisabledSingleStrict,Q as SameIconDifferentIds,j as SingleStrict,K as Uncontrolled,$ as UncontrolledKeyboardInteraction,G as Vertical,on as __namedExportsOrder,an as default};
