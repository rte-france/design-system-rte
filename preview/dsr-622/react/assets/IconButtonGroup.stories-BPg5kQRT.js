import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{a as A,T as k}from"./keyboard-test.constants-CC9zMOdc.js";import{f as w,w as v,e,u}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import{f as It}from"./testing.utils-DmLcTX3r.js";import"./timepicker.constants-CynrC_9x.js";import{a as oe}from"./log-handlers-Hz0GUguM.js";import{D as Et}from"./Divider-BVZUrQ0d.js";import{I as Rt}from"./Icon-DBkoQNiA.js";import{T as Ht}from"./Tooltip-B02NSzm0.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./index-DJ8f9STe.js";const At=a=>a.id??a.name,Dt=a=>{if(a.length<2)return"The component requires at least 2 icon buttons.";if(a.some(t=>t.trim().length===0))return"Icon button IDs must not be empty.";if(new Set(a).size!==a.length)return"Icon button IDs must be unique."},Tt=({ids:a,selectedIds:t,selectionMode:o})=>{if(new Set(t).size!==t.length)return"Selected IDs must be unique.";if(t.some(s=>!a.includes(s)))return"Selected IDs must belong to the icon button group.";if(o==="single-strict"&&t.length!==1)return"In single-strict mode, exactly one icon button must be selected.";if(o==="single"&&t.length>1)return"In single mode, at most one icon button must be selected."},ce=({ids:a,selectedIds:t,selectionMode:o})=>{const s=a.filter(n=>t.includes(n));return o==="multiple"?s:s.length>0?s.slice(0,1):o==="single-strict"?a.slice(0,1):[]},kt=({ids:a,selectedIds:t,clickedId:o,selectionMode:s})=>a.includes(o)?s==="single-strict"?[o]:s==="single"?t.includes(o)?[]:[o]:a.filter(n=>n===o?!t.includes(n):t.includes(n)):[...t],vt={"rte-icon-button-group":"_rte-icon-button-group_9dfra_1","rte-icon-button-group__item":"_rte-icon-button-group__item_9dfra_21"},wt=({button:a,buttonId:t,isDisabled:o,computedTooltipPosition:s,isCompact:n,index:i,isLast:r,orientation:c,appearance:p,isIconActive:b,isNextIconActive:g,dividerAppearance:d,onClick:B})=>{const{name:y,label:R}=a,f=()=>{const L={boxSizing:"border-box",zIndex:1};return n?{...L,height:c==="horizontal"?"30px":"auto",width:c==="vertical"?"30px":"1px"}:{...L,height:c==="horizontal"?"38px":"auto",width:c==="vertical"?"38px":"1px"}},T=()=>{B(t)};return l.jsxs(l.Fragment,{children:[l.jsx(Ht,{label:R,shouldFocusTrigger:!1,preventOpening:o,position:s,children:l.jsx("button",{className:vt["rte-icon-button-group__item"],type:"button","data-compact-spacing":n,"data-first":i===0,"data-last":r,"data-orientation":c,"aria-label":R,"aria-pressed":b,disabled:o,"data-active":b,"data-appearance":p,onClick:T,children:l.jsx(Rt,{name:y,size:n?20:24})})}),!r&&l.jsx(Et,{style:f(),"data-is-left-item-active":b,"data-is-right-item-active":g,"data-left-item-index":i,"data-right-item-index":i+1,orientation:c==="vertical"?"horizontal":"vertical",appearance:d,endPoint:"square"})]})};wt.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroupItem",props:{button:{required:!0,tsType:{name:"IconButtonItem"},description:""},buttonId:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},computedTooltipPosition:{required:!0,tsType:{name:"union",raw:'"auto" | "top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!0,tsType:{name:"Orientation"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},isIconActive:{required:!0,tsType:{name:"boolean"},description:""},isNextIconActive:{required:!0,tsType:{name:"boolean"},description:""},dividerAppearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral" | "inverse"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"inverse"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const qt=({leftActive:a,rightActive:t,leftDisabled:o,rightDisabled:s,isDisabled:n,appearance:i})=>o&&s||n?"neutral":a&&t?"inverse":i,S=h.forwardRef(({iconButtons:a,selectedId:t,defaultSelectedId:o,selectedIds:s,defaultSelectedIds:n,onSelectionChange:i,selectionMode:r,isDisabled:c,orientation:p="horizontal",tooltipPosition:b="top",isCompact:g=!1,appearance:d="brand",["aria-label"]:B,...y},R)=>{const f=a.map(At),T=r==="multiple"?s:t,L=r==="multiple"?n:o,q=T!==void 0,se=E=>E==null?[]:typeof E=="string"?[E]:E,[ae,le]=h.useState(()=>ce({ids:f,selectedIds:se(L),selectionMode:r})),Bt=Dt(f),I=q?se(T):ce({ids:f,selectedIds:ae,selectionMode:r});!q&&(ae.length!==I.length||ae.some((E,H)=>E!==I[H]))&&le(I),q&&L!==void 0&&oe("IconButtonGroup",r==="multiple"?"Use selectedIds or defaultSelectedIds, not both. selectedIds takes precedence.":"Use selectedId or defaultSelectedId, not both. selectedId takes precedence.");const St=q&&(r==="multiple"?!Array.isArray(T):T!==null&&typeof T!="string")?r==="multiple"?"In multiple mode, selectedIds must be an array.":"In single modes, selectedId must be a string or null.":void 0,re=Bt??St??(q?Tt({ids:f,selectedIds:I,selectionMode:r}):void 0);if(re)return oe("IconButtonGroup",re),null;((B==null?void 0:B.trim())===""||B===void 0)&&oe("IconButtonGroup","Missing required aria-label for accessibility.");const xt=p==="vertical"&&b==="auto"?"left":b,Ct=E=>{if(c)return;const H=kt({ids:f,selectedIds:I,clickedId:E,selectionMode:r});H.length===I.length&&H.every(x=>I.includes(x))||(q||le(H),r==="multiple"?i==null||i([...H]):i==null||i(H[0]??null))};return l.jsx("div",{ref:R,className:vt["rte-icon-button-group"],role:"group","data-is-disabled":c,"data-orientation":p,"data-compact-spacing":g,"data-appearance":d,"aria-label":B,...y,children:a.map(({isDisabled:E,...H},x)=>l.jsx(wt,{button:H,buttonId:f[x],isDisabled:c||E,computedTooltipPosition:xt,isCompact:g,index:x,isLast:x===a.length-1,orientation:p,appearance:d,isIconActive:I.includes(f[x]),isNextIconActive:I.includes(f[x+1]),dividerAppearance:qt({leftDisabled:E,rightDisabled:a[x+1]?a[x+1].isDisabled:!1,leftActive:I.includes(f[x]),rightActive:I.includes(f[x+1]),isDisabled:c,appearance:d}),onClick:Ct},f[x]))})});S.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroup",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},tooltipPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}}};const nn={title:"Composants/IconButtonGroup/IconButtonGroup",component:S,tags:["autodocs","icon-button-group"],argTypes:{selectionMode:{control:{type:"radio"},options:["single","single-strict","multiple"]},isDisabled:{control:{type:"boolean"}},isCompact:{control:{type:"boolean"}},appearance:{control:{type:"radio"},options:["brand","neutral"]}}},ee=["single","single-strict","multiple"],te=[{name:"format-align-left",label:"Align Left"},{name:"format-align-center",label:"Align Center"},{name:"format-align-right",label:"Align Right"},{name:"format-align-justify",label:"Align Justify"}],ne=[{name:"visibility-show",label:"Read only"},{name:"edit",label:"Edit"}],ie=[{name:"mic",label:"Microphone"},{name:"volume-up",label:"Volume"},{name:"video-camera",label:"Video Camera"}],ft={single:ne,"single-strict":te,multiple:ie},m={args:{iconButtons:ne,selectionMode:"single",isDisabled:!1,isCompact:!1,appearance:"brand","aria-label":"Icon selection",defaultSelectedId:"visibility-show",onSelectionChange:w()}},M={args:{...m.args,iconButtons:te,selectionMode:"single-strict",defaultSelectedId:"format-align-left"}},_={args:{...m.args,iconButtons:ie,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["mic"]}},G={args:{...m.args,iconButtons:ne,isDisabled:!0,onSelectionChange:w()},play:async({canvasElement:a,args:t})=>{const o=v(a).getAllByRole("button");for(const s of o)await e(s).toBeDisabled(),await u.click(s),s.focus(),await e(s).not.toHaveFocus(),await u.keyboard(A+k);await u.tab();for(const s of o)await e(s).not.toHaveFocus();await e(t.onSelectionChange).not.toHaveBeenCalled()}},D={args:{...m.args,iconButtons:te.map((a,t)=>({...a,isDisabled:t===1||t===3})),defaultSelectedId:"format-align-left",onSelectionChange:w()},play:async({canvasElement:a,args:t})=>{const o=v(a),s=o.getByRole("button",{name:"Align Left"}),n=o.getByRole("button",{name:"Align Center"}),i=o.getByRole("button",{name:"Align Right"});await e(s).toBeEnabled(),await e(n).toBeDisabled(),await e(i).toBeEnabled(),await u.click(n),n.focus(),await e(n).not.toHaveFocus(),await e(n).toHaveAttribute("aria-pressed","false"),await e(t.onSelectionChange).not.toHaveBeenCalled(),s.focus(),await u.tab(),await e(i).toHaveFocus(),await u.keyboard(A),await e(i).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenCalledTimes(1),await e(t.onSelectionChange).toHaveBeenLastCalledWith(t.selectionMode==="multiple"?["format-align-left","format-align-right"]:"format-align-right")}},V={...D,args:{...D.args,selectionMode:"single-strict",onSelectionChange:w()}},W={...D,args:{...D.args,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["format-align-left"],onSelectionChange:w()}},P={args:{...m.args,orientation:"vertical",tooltipPosition:"left"}},F={args:{...m.args,appearance:"neutral"}},N={args:{...m.args,isCompact:!0}},U={args:{...M.args},render:a=>l.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:["horizontal","vertical"].flatMap(t=>[!1,!0].map(o=>l.jsx("div",{style:{display:"flex",height:240},children:l.jsx(S,{...a,orientation:t,isCompact:o,"aria-label":`${t} ${o?"compact":"standard"}`})},`${t}-${o}`)))}),play:async({canvasElement:a})=>{var o;const t=v(a);for(const s of["horizontal","vertical"])for(const n of[!1,!0]){const i=t.getByRole("group",{name:`${s} ${n?"compact":"standard"}`}),r=n?32:40,c=r*4+3,p=i.getBoundingClientRect();await e(p.width).toBe(s==="horizontal"?c:r),await e(p.height).toBe(s==="vertical"?c:r);for(const d of v(i).getAllByRole("button")){const B=d.getBoundingClientRect(),y=(o=d.querySelector("svg"))==null?void 0:o.getBoundingClientRect();await e(B.width).toBe(r),await e(B.height).toBe(r),await e(y==null?void 0:y.width).toBe(n?20:24),await e(y==null?void 0:y.height).toBe(n?20:24)}const b=v(i).getByRole("button",{name:"Align Left"}),g=getComputedStyle(b,"::before");await e(g.borderStyle).toBe("solid"),await e(parseFloat(g.borderWidth)).toBeGreaterThan(0),await e(parseFloat(g.borderWidth)).toBeLessThanOrEqual(1)}}},z={tags:["!autodocs"],args:{...m.args},render:a=>{const[t,o]=h.useState(!0);return l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",onClick:()=>o(!1),children:"Remove group label"}),l.jsx(S,{...a,"aria-label":t?a["aria-label"]:void 0})]})},play:async({canvasElement:a})=>{const t=v(a);await C(()=>u.click(t.getByRole("button",{name:"Remove group label"})),"Missing required aria-label for accessibility.");const o=t.getByRole("group");await e(o).not.toHaveAttribute("aria-label"),await e(v(o).getAllByRole("button")).toHaveLength(2)}},K={tags:["!autodocs"],args:{...m.args},render:a=>l.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column",alignItems:"flex-start"},children:[l.jsx("div",{"data-testid":"icon-button-group-single",children:l.jsx(S,{...a})}),l.jsx("div",{"data-testid":"icon-button-group-strict",children:l.jsx(S,{...a,iconButtons:te,selectionMode:"single-strict",selectedIds:void 0,defaultSelectedIds:void 0,defaultSelectedId:"format-align-left",onSelectionChange:w()})}),l.jsx("div",{"data-testid":"icon-button-group-multiple",children:l.jsx(S,{...a,iconButtons:ie,selectionMode:"multiple",selectedId:void 0,defaultSelectedId:void 0,defaultSelectedIds:["mic"],onSelectionChange:w()})})]}),play:async({canvasElement:a})=>{const t=v(a),o=await t.getByTestId("icon-button-group-single"),s=await t.getByTestId("icon-button-group-strict"),n=await t.getByTestId("icon-button-group-multiple"),i=v(o).getAllByRole("button"),r=v(s).getAllByRole("button"),c=v(n).getAllByRole("button");await It(),e(i[0]).toHaveAttribute("data-active","true"),e(i[1]).toHaveAttribute("data-active","false"),await u.tab(),e(i[0]).toHaveFocus(),await u.tab(),e(i[1]).toHaveFocus(),await u.keyboard(A),e(i[0]).toHaveAttribute("data-active","false"),e(i[1]).toHaveAttribute("data-active","true"),await u.keyboard(k),e(i[1]).toHaveAttribute("data-active","false"),await u.tab(),e(r[0]).toHaveFocus(),await u.tab(),e(r[1]).toHaveFocus(),await u.keyboard(k),e(r[0]).toHaveAttribute("data-active","false"),e(r[1]).toHaveAttribute("data-active","true"),await u.keyboard(A),e(r[1]).toHaveAttribute("data-active","true"),await u.tab(),await u.keyboard(A),e(r[1]).toHaveAttribute("data-active","false"),e(r[2]).toHaveAttribute("data-active","true"),await u.tab(),await u.tab(),e(c[0]).toHaveFocus(),await u.tab(),e(c[1]).toHaveFocus(),await u.keyboard(k),e(c[0]).toHaveAttribute("data-active","true"),e(c[1]).toHaveAttribute("data-active","true"),await u.keyboard(A),e(c[0]).toHaveAttribute("data-active","true"),e(c[1]).toHaveAttribute("data-active","false")}},jt=a=>{const[t,o]=h.useState(a.selectedId??null),[s,n]=h.useState(a.selectedIds??[]);return a.selectionMode==="multiple"?l.jsx(S,{...a,selectedIds:s,onSelectionChange:i=>{var r;n(i),(r=a.onSelectionChange)==null||r.call(a,i)}}):l.jsx(S,{...a,selectedId:t,onSelectionChange:i=>{var r;o(i),(r=a.onSelectionChange)==null||r.call(a,i)}})},O={args:{...m.args,defaultSelectedId:void 0,selectedId:"visibility-show",onSelectionChange:w()},render:a=>l.jsx(jt,{...a})},$={args:{...m.args,onSelectionChange:w()}},yt=({mode:a,controlled:t,onSelectionChange:o})=>{const s=ft[a],[n,i]=h.useState([s[0].name]),r=a==="multiple"?{selectionMode:a,selectedIds:t?n:void 0,defaultSelectedIds:t?void 0:[s[0].name],onSelectionChange:c=>{t&&i(c),o==null||o(c)}}:{selectionMode:a,selectedId:t?n[0]??null:void 0,defaultSelectedId:t?void 0:s[0].name,onSelectionChange:c=>{t&&i(c===null?[]:[c]),o==null||o(c)}};return l.jsx(S,{...r,iconButtons:s,"aria-label":a})},ht=async({canvasElement:a,args:t,step:o})=>{const s=v(a);let n=0;await e(t.onSelectionChange).not.toHaveBeenCalled();for(const i of ee)await o(i,async()=>{const r=v(s.getByRole("group",{name:i})),c=ft[i],[p,b,...g]=r.getAllByRole("button"),[d,B,...y]=c.map(R=>R.name);await e(p).toHaveAttribute("aria-pressed","true"),p.focus(),await u.keyboard(A),await e(p).toHaveAttribute("aria-pressed",String(i==="single-strict")),i!=="single-strict"&&n++,await e(t.onSelectionChange).toHaveBeenCalledTimes(n),i==="single"&&await e(t.onSelectionChange).toHaveBeenLastCalledWith(null),await u.keyboard(k),await e(p).toHaveAttribute("aria-pressed","true"),i!=="single-strict"&&n++,await u.tab(),await e(b).toHaveFocus(),await e(b).toHaveAttribute("aria-pressed","false"),await u.keyboard(A),n++,await e(b).toHaveAttribute("aria-pressed","true"),await e(p).toHaveAttribute("aria-pressed",String(i==="multiple")),await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?[d,B]:B),await u.keyboard(k),i!=="single-strict"&&n++,await e(b).toHaveAttribute("aria-pressed",String(i==="single-strict"));for(const[R,f]of g.entries())await u.tab(),await e(f).toHaveFocus(),await u.keyboard(k),n++,await e(f).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?[d,...y.slice(0,R+1)]:y[R]);await u.click(p),n++,await e(t.onSelectionChange).toHaveBeenLastCalledWith(i==="multiple"?y:d),await e(t.onSelectionChange).toHaveBeenCalledTimes(n)})},Y={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:a=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:ee.map(t=>l.jsx(yt,{mode:t,controlled:!0,onSelectionChange:a.onSelectionChange},t))}),play:ht},J={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:a=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:ee.map(t=>l.jsx(yt,{mode:t,controlled:!1,onSelectionChange:a.onSelectionChange},t))}),play:ht},j=[{id:"microphone",name:"mic",label:"Microphone"},{id:"volume",name:"volume-up",label:"Volume"},{id:"video",name:"video-camera",label:"Video Camera"}],Lt=a=>{const[t,o]=h.useState(j),[s,n]=h.useState("multiple"),[i,r]=h.useState(["microphone"]),[c,p]=h.useState(!1),b=a.onSelectionChange,g=s==="multiple"?{selectionMode:s,defaultSelectedIds:c?void 0:i,selectedIds:c?["microphone"]:void 0,onSelectionChange:b}:{selectionMode:s,defaultSelectedId:c?void 0:i[0]??null,selectedId:c?"microphone":void 0,onSelectionChange:b};return l.jsxs("div",{children:[l.jsx(S,{...g,iconButtons:t,"aria-label":"Dynamic selection"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>o(t.map(d=>({...d}))),children:"Refresh items"}),l.jsx("button",{type:"button",onClick:()=>r(["video"]),children:"Change defaults"}),l.jsx("button",{type:"button",onClick:()=>o([...t].reverse()),children:"Reverse items"}),l.jsx("button",{type:"button",onClick:()=>o(t.filter(d=>d.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>o(t.filter(d=>d.id!=="video")),children:"Remove video"}),l.jsx("button",{type:"button",onClick:()=>o([]),children:"Clear items"}),l.jsx("button",{type:"button",onClick:()=>o(j),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>o(t.map(d=>d.id==="microphone"?{...d,name:"edit",label:"Edited microphone"}:d)),children:"Change icon"}),l.jsx("button",{type:"button",onClick:()=>o(ne),children:"Replace items"}),l.jsx("button",{type:"button",onClick:()=>p(!0),children:"Provide controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(!1),children:"Restore uncontrolled mode"}),l.jsx("select",{"aria-label":"Selection mode",value:s,onChange:d=>n(d.target.value),children:ee.map(d=>l.jsx("option",{value:d,children:d},d))})]})]})},C=async(a,t)=>{const o=console.warn,s=w();console.warn=s;try{await a(),await e(s).toHaveBeenCalledWith(`[IconButtonGroup] ${t}`)}finally{console.warn=o}},Q={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:a=>l.jsx(Lt,{...a}),play:async({canvasElement:a,args:t})=>{const o=v(a),s=()=>v(o.getByRole("group",{name:"Dynamic selection"})),n=c=>u.click(o.getByRole("button",{name:c})),i=()=>s().getAllByRole("button",{pressed:!0}).map(c=>c.getAttribute("aria-label"));await u.click(s().getByRole("button",{name:"Volume"})),await e(i()).toEqual(["Microphone","Volume"]),await n("Refresh items"),await n("Change defaults"),await e(i()).toEqual(["Microphone","Volume"]),await n("Reverse items"),await e(i()).toEqual(["Volume","Microphone"]),await n("Remove video"),await C(()=>n("Remove volume"),"The component requires at least 2 icon buttons."),await e(o.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await n("Restore items"),await e(i()).toEqual(["Microphone"]),await C(()=>n("Clear items"),"The component requires at least 2 icon buttons."),await e(o.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await n("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.click(s().getByRole("button",{name:"Volume"})),await n("Reverse items");const r=o.getByRole("combobox",{name:"Selection mode"});await u.selectOptions(r,"single"),await e(i()).toEqual(["Volume"]),await u.selectOptions(r,"single-strict"),await n("Remove volume"),await e(i()).toEqual(["Video Camera"]),await n("Restore items"),await e(i()).toEqual(["Video Camera"]),await u.selectOptions(r,"multiple"),await n("Remove video"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await n("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.selectOptions(r,"single-strict"),await e(i()).toEqual(["Microphone"]),await n("Change icon"),await e(i()).toEqual(["Edited microphone"]),await e(t.onSelectionChange).toHaveBeenCalledTimes(2),await n("Provide controlled value"),await e(i()).toEqual(["Edited microphone"]),await n("Restore uncontrolled mode"),await e(i()).toEqual(["Edited microphone"]),await n("Replace items"),await e(i()).toEqual(["Read only"]),await u.click(s().getByRole("button",{name:"Edit"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith("edit"),await e(t.onSelectionChange).toHaveBeenCalledTimes(3)}},Mt=a=>{const[t,o]=h.useState("microphone"),[s,n]=h.useState(j),[i,r]=h.useState("single"),[c,p]=h.useState(),b={selectionMode:i,selectedId:i==="multiple"?void 0:t,selectedIds:i==="multiple"?t:void 0,defaultSelectedId:i==="multiple"||c==null?void 0:c[0],defaultSelectedIds:i==="multiple"?c:void 0,onSelectionChange:a.onSelectionChange};return l.jsxs("div",{children:[l.jsx(S,{...b,iconButtons:s,"aria-label":"Controlled updates"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>o(i==="multiple"?["volume"]:"volume"),children:"Select volume"}),l.jsx("button",{type:"button",onClick:()=>o(i==="multiple"?[]:null),children:"Clear selection"}),l.jsx("button",{type:"button",onClick:()=>o(i==="multiple"?["unknown"]:"unknown"),children:"Select unknown"}),l.jsx("button",{type:"button",onClick:()=>o(["microphone","microphone"]),children:"Duplicate selection"}),l.jsx("button",{type:"button",onClick:()=>o(["microphone","volume"]),children:"Select two"}),l.jsx("button",{type:"button",onClick:()=>o("volume"),children:"Provide scalar"}),l.jsx("button",{type:"button",onClick:()=>o(null),children:"Provide null"}),l.jsx("button",{type:"button",onClick:()=>r("single-strict"),children:"Use strict mode"}),l.jsx("button",{type:"button",onClick:()=>r("single"),children:"Use single mode"}),l.jsx("button",{type:"button",onClick:()=>{o(g=>typeof g=="string"?[g]:g===null?[]:g),r("multiple")},children:"Use multiple mode"}),l.jsx("button",{type:"button",onClick:()=>n(s.filter(g=>g.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>n(j),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>n([j[0],{...j[1],id:"microphone"}]),children:"Duplicate IDs"}),l.jsx("button",{type:"button",onClick:()=>o(void 0),children:"Remove controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(["microphone"]),children:"Mix defaults"})]})]})},X={tags:["!autodocs"],args:{...m.args,onSelectionChange:w()},render:a=>l.jsx(Mt,{...a}),play:async({canvasElement:a,args:t})=>{const o=v(a),s=()=>v(o.getByRole("group",{name:"Controlled updates"})),n=i=>u.click(o.getByRole("button",{name:i}));await u.click(s().getByRole("button",{name:"Volume"})),await e(t.onSelectionChange).toHaveBeenCalledTimes(1),await e(t.onSelectionChange).toHaveBeenCalledWith("volume"),await e(s().getByRole("button",{name:"Microphone"})).toHaveAttribute("aria-pressed","true"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","false"),await n("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await n("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await u.click(s().getByRole("button",{name:"Volume"})),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await e(t.onSelectionChange).toHaveBeenCalledTimes(2),await e(t.onSelectionChange).toHaveBeenLastCalledWith("volume");for(const[i,r]of[["Select unknown","Selected IDs must belong to the icon button group."],["Duplicate selection","In single modes, selectedId must be a string or null."],["Select two","In single modes, selectedId must be a string or null."]])await C(()=>n(i),r),await e(o.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await n("Clear selection");await C(()=>n("Use strict mode"),"In single-strict mode, exactly one icon button must be selected."),await n("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await C(()=>n("Select two"),"In single modes, selectedId must be a string or null."),await n("Use multiple mode"),await e(s().getAllByRole("button",{pressed:!0})).toHaveLength(2);for(const i of["Provide scalar","Provide null"])await C(()=>n(i),"In multiple mode, selectedIds must be an array."),await e(o.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await n("Select two");await n("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await C(()=>n("Duplicate selection"),"Selected IDs must be unique."),await n("Select two"),await C(()=>n("Use single mode"),"In single modes, selectedId must be a string or null."),await n("Select volume"),await C(()=>n("Remove volume"),"Selected IDs must belong to the icon button group."),await n("Restore items"),await C(()=>n("Duplicate IDs"),"Icon button IDs must be unique."),await n("Restore items"),await n("Remove controlled value"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await n("Select volume"),await C(()=>n("Mix defaults"),"Use selectedId or defaultSelectedId, not both. selectedId takes precedence."),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await e(t.onSelectionChange).toHaveBeenCalledTimes(2)}},Z={tags:["!autodocs"],args:{...m.args,iconButtons:[{id:"first-edit",name:"edit",label:"Edit first"},{id:"second-edit",name:"edit",label:"Edit second"}],defaultSelectedIds:["first-edit"],defaultSelectedId:void 0,selectionMode:"multiple",onSelectionChange:w()},render:a=>l.jsx("form",{"aria-label":"Editor",onSubmit:w(),children:l.jsx(S,{...a})}),play:async({canvasElement:a,args:t})=>{const o=v(a),s=o.getByRole("form",{name:"Editor"}),n=w(i=>i.preventDefault());s.addEventListener("submit",n);try{await u.click(o.getByRole("button",{name:"Edit second"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith(["first-edit","second-edit"]),await u.click(o.getByRole("button",{name:"Edit first"})),await e(t.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]),await e(o.getByRole("button",{name:"Edit second"})).toHaveAttribute("aria-pressed","true"),await e(n).not.toHaveBeenCalled()}finally{s.removeEventListener("submit",n)}}};var ue,de,pe;m.parameters={...m.parameters,docs:{...(ue=m.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
} satisfies Story`,...(pe=(de=m.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,ge,be;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict,
    selectionMode: "single-strict",
    defaultSelectedId: "format-align-left"
  }
}`,...(be=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ve,we,fe;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonMultiple,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["mic"]
  }
}`,...(fe=(we=_.parameters)==null?void 0:we.docs)==null?void 0:fe.source}}};var ye,he,Be;G.parameters={...G.parameters,docs:{...(ye=G.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Be=(he=G.parameters)==null?void 0:he.docs)==null?void 0:Be.source}}};var Se,xe,Ce;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
} satisfies Story`,...(Ce=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ce.source}}};var Ie,Ee,Re;V.parameters={...V.parameters,docs:{...(Ie=V.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "single-strict",
    onSelectionChange: fn()
  }
}`,...(Re=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Re.source}}};var He,Ae,De;W.parameters={...W.parameters,docs:{...(He=W.parameters)==null?void 0:He.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["format-align-left"],
    onSelectionChange: fn()
  }
}`,...(De=(Ae=W.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Te,ke,qe;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical",
    tooltipPosition: "left"
  }
}`,...(qe=(ke=P.parameters)==null?void 0:ke.docs)==null?void 0:qe.source}}};var je,Le,Me;F.parameters={...F.parameters,docs:{...(je=F.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(Me=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Me.source}}};var _e,Ge,Ve;N.parameters={...N.parameters,docs:{...(_e=N.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(Ve=(Ge=N.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};var We,Pe,Fe;U.parameters={...U.parameters,docs:{...(We=U.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
          const iconBounds = button.querySelector("svg")?.getBoundingClientRect();
          await expect(buttonBounds.width).toBe(itemSize);
          await expect(buttonBounds.height).toBe(itemSize);
          await expect(iconBounds?.width).toBe(isCompact ? 20 : 24);
          await expect(iconBounds?.height).toBe(isCompact ? 20 : 24);
        }
        const activeButton = within(group).getByRole("button", {
          name: "Align Left"
        });
        const activeBorder = getComputedStyle(activeButton, "::before");
        await expect(activeBorder.borderStyle).toBe("solid");
        await expect(parseFloat(activeBorder.borderWidth)).toBeGreaterThan(0);
        await expect(parseFloat(activeBorder.borderWidth)).toBeLessThanOrEqual(1);
      }
    }
  }
}`,...(Fe=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.source}}};var Ne,Ue,ze;z.parameters={...z.parameters,docs:{...(Ne=z.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
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
}`,...(ze=(Ue=z.parameters)==null?void 0:Ue.docs)==null?void 0:ze.source}}};var Ke,Oe,$e;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
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
}`,...($e=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Ye,Je,Qe;O.parameters={...O.parameters,docs:{...(Ye=O.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultSelectedId: undefined,
    selectedId: "visibility-show",
    onSelectionChange: fn()
  },
  render: args => <ControlledExample {...args} />
}`,...(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ze,et;$.parameters={...$.parameters,docs:{...(Xe=$.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onSelectionChange: fn()
  }
}`,...(et=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`{
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
}`,...(at=(nt=Y.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,it,st;J.parameters={...J.parameters,docs:{...(ot=J.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(st=(it=J.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var lt,rt,ct;Q.parameters={...Q.parameters,docs:{...(lt=Q.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(ct=(rt=Q.parameters)==null?void 0:rt.docs)==null?void 0:ct.source}}};var ut,dt,pt;X.parameters={...X.parameters,docs:{...(ut=X.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(dt=X.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var mt,gt,bt;Z.parameters={...Z.parameters,docs:{...(mt=Z.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(bt=(gt=Z.parameters)==null?void 0:gt.docs)==null?void 0:bt.source}}};const an=["Default","SingleStrict","Multiple","Disabled","PartiallyDisabled","PartiallyDisabledSingleStrict","PartiallyDisabledMultiple","Vertical","Neutral","Compact","LayoutVariants","MissingGroupLabel","KeyboardInteraction","Controlled","Uncontrolled","ControlledKeyboardInteraction","UncontrolledKeyboardInteraction","ListUpdates","ControlledUpdates","SameIconDifferentIds"];export{N as Compact,O as Controlled,Y as ControlledKeyboardInteraction,X as ControlledUpdates,m as Default,G as Disabled,K as KeyboardInteraction,U as LayoutVariants,Q as ListUpdates,z as MissingGroupLabel,_ as Multiple,F as Neutral,D as PartiallyDisabled,W as PartiallyDisabledMultiple,V as PartiallyDisabledSingleStrict,Z as SameIconDifferentIds,M as SingleStrict,$ as Uncontrolled,J as UncontrolledKeyboardInteraction,P as Vertical,an as __namedExportsOrder,nn as default};
