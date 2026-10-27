import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{a as H,T as k}from"./keyboard-test.constants-DC52cZHj.js";import{f as g,w as f,e,u as c}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{f as wt}from"./testing.utils-DmLcTX3r.js";import"./timepicker.constants-CynrC_9x.js";import{a as ne}from"./log-handlers-Hz0GUguM.js";import{D as ft}from"./Divider-BVZUrQ0d.js";import{I as yt}from"./Icon-DBkoQNiA.js";import{T as ht}from"./Tooltip-B02NSzm0.js";import"./index-yBjzXJbu.js";import"./keyboard.constants-BverKK8B.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./index-DJ8f9STe.js";const St=a=>a.id??a.name,Bt=a=>{if(a.length<2)return"The component requires at least 2 icon buttons.";if(a.some(n=>n.trim().length===0))return"Icon button IDs must not be empty.";if(new Set(a).size!==a.length)return"Icon button IDs must be unique."},Ct=({ids:a,selectedIds:n,selectionMode:i})=>{if(new Set(n).size!==n.length)return"Selected IDs must be unique.";if(n.some(s=>!a.includes(s)))return"Selected IDs must belong to the icon button group.";if(i==="single-strict"&&n.length!==1)return"In single-strict mode, exactly one icon button must be selected.";if(i==="single"&&n.length>1)return"In single mode, at most one icon button must be selected."},le=({ids:a,selectedIds:n,selectionMode:i})=>{const s=a.filter(t=>n.includes(t));return i==="multiple"?s:s.length>0?s.slice(0,1):i==="single-strict"?a.slice(0,1):[]},xt=({ids:a,selectedIds:n,clickedId:i,selectionMode:s})=>a.includes(i)?s==="single-strict"?[i]:s==="single"?n.includes(i)?[]:[i]:a.filter(t=>t===i?!n.includes(t):n.includes(t)):[...n],rt={"rte-icon-button-group":"_rte-icon-button-group_jal9e_1","rte-icon-button-group__item":"_rte-icon-button-group__item_jal9e_21"},ct=({button:a,buttonId:n,isDisabled:i,computedTooltipPosition:s,isCompact:t,index:o,isLast:r,orientation:u,appearance:p,isIconActive:v,isNextIconActive:w,dividerAppearance:d,onClick:I})=>{const{name:D,label:E}=a,b=()=>{const M={boxSizing:"border-box",zIndex:1};return t?{...M,height:u==="horizontal"?"30px":"auto",width:u==="vertical"?"30px":"1px"}:{...M,height:u==="horizontal"?"38px":"auto",width:u==="vertical"?"38px":"1px"}},T=()=>{I(n)};return l.jsxs(l.Fragment,{children:[l.jsx(ht,{label:E,shouldFocusTrigger:!1,preventOpening:i,position:s,children:l.jsx("button",{className:rt["rte-icon-button-group__item"],type:"button","data-compact-spacing":t,"data-first":o===0,"data-last":r,"data-orientation":u,"aria-label":E,"aria-pressed":v,disabled:i,"data-active":v,"data-appearance":p,onClick:T,children:l.jsx(yt,{name:D})})}),!r&&l.jsx(ft,{style:b(),"data-is-left-item-active":v,"data-is-right-item-active":w,"data-left-item-index":o,"data-right-item-index":o+1,orientation:u==="vertical"?"horizontal":"vertical",appearance:d,endPoint:"square"})]})};ct.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroupItem",props:{button:{required:!0,tsType:{name:"IconButtonItem"},description:""},buttonId:{required:!0,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:""},computedTooltipPosition:{required:!0,tsType:{name:"union",raw:'"auto" | "top" | "bottom" | "left" | "right"',elements:[{name:"literal",value:'"auto"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},index:{required:!0,tsType:{name:"number"},description:""},isLast:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!0,tsType:{name:"Orientation"},description:""},appearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'}]},description:""},isIconActive:{required:!0,tsType:{name:"boolean"},description:""},isNextIconActive:{required:!0,tsType:{name:"boolean"},description:""},dividerAppearance:{required:!1,tsType:{name:"union",raw:'"brand" | "neutral" | "inverse"',elements:[{name:"literal",value:'"brand"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"inverse"'}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};const It=({leftActive:a,rightActive:n,leftDisabled:i,rightDisabled:s,isDisabled:t,appearance:o})=>i&&s||t?"neutral":a&&n?"inverse":o,x=y.forwardRef(({iconButtons:a,selectedId:n,defaultSelectedId:i,selectedIds:s,defaultSelectedIds:t,onSelectionChange:o,selectionMode:r,isDisabled:u,orientation:p="horizontal",tooltipPosition:v="top",isCompact:w=!1,appearance:d="brand",["aria-label"]:I,...D},E)=>{const b=a.map(St),T=r==="multiple"?s:n,M=r==="multiple"?t:i,q=T!==void 0,oe=B=>B==null?[]:typeof B=="string"?[B]:B,[te,ie]=y.useState(()=>le({ids:b,selectedIds:oe(M),selectionMode:r})),pt=Bt(b),S=q?oe(T):le({ids:b,selectedIds:te,selectionMode:r});!q&&(te.length!==S.length||te.some((B,R)=>B!==S[R]))&&ie(S),q&&M!==void 0&&ne("IconButtonGroup",r==="multiple"?"Use selectedIds or defaultSelectedIds, not both. selectedIds takes precedence.":"Use selectedId or defaultSelectedId, not both. selectedId takes precedence.");const gt=q&&(r==="multiple"?!Array.isArray(T):T!==null&&typeof T!="string")?r==="multiple"?"In multiple mode, selectedIds must be an array.":"In single modes, selectedId must be a string or null.":void 0,se=pt??gt??(q?Ct({ids:b,selectedIds:S,selectionMode:r}):void 0);if(se)return ne("IconButtonGroup",se),null;if((I==null?void 0:I.trim())===""||I===void 0)return ne("IconButtonGroup","Missing required aria-label for accessibility."),null;const vt=p==="vertical"&&v==="auto"?"left":v,bt=B=>{if(u)return;const R=xt({ids:b,selectedIds:S,clickedId:B,selectionMode:r});R.length===S.length&&R.every(h=>S.includes(h))||(q||ie(R),r==="multiple"?o==null||o([...R]):o==null||o(R[0]??null))};return l.jsx("div",{ref:E,className:rt["rte-icon-button-group"],role:"group","data-is-disabled":u,"data-orientation":p,"data-compact-spacing":w,"data-appearance":d,"aria-label":I,...D,children:a.map(({isDisabled:B,...R},h)=>l.jsx(ct,{button:R,buttonId:b[h],isDisabled:u||B,computedTooltipPosition:vt,isCompact:w,index:h,isLast:h===a.length-1,orientation:p,appearance:d,isIconActive:S.includes(b[h]),isNextIconActive:S.includes(b[h+1]),dividerAppearance:It({leftDisabled:B,rightDisabled:a[h+1]?a[h+1].isDisabled:!1,leftActive:S.includes(b[h]),rightActive:S.includes(b[h+1]),isDisabled:u,appearance:d}),onClick:bt},b[h]))})});x.__docgenInfo={description:"",methods:[],displayName:"IconButtonGroup",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},tooltipPosition:{defaultValue:{value:'"top"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},appearance:{defaultValue:{value:'"brand"',computed:!1},required:!1}}};const zt={title:"Composants/IconButtonGroup/IconButtonGroup",component:x,tags:["autodocs","icon-button-group"],argTypes:{selectionMode:{control:{type:"radio"},options:["single","single-strict","multiple"]},isDisabled:{control:{type:"boolean"}},isCompact:{control:{type:"boolean"}},appearance:{control:{type:"radio"},options:["brand","neutral"]}}},X=["single","single-strict","multiple"],Z=[{name:"format-align-left",label:"Align Left"},{name:"format-align-center",label:"Align Center"},{name:"format-align-right",label:"Align Right"},{name:"format-align-justify",label:"Align Justify"}],ee=[{name:"visibility-show",label:"Read only"},{name:"edit",label:"Edit"}],ae=[{name:"mic",label:"Microphone"},{name:"volume-up",label:"Volume"},{name:"video-camera",label:"Video Camera"}],ut={single:ee,"single-strict":Z,multiple:ae},m={args:{iconButtons:ee,selectionMode:"single",isDisabled:!1,isCompact:!1,appearance:"brand","aria-label":"Icon selection",defaultSelectedId:"visibility-show",onSelectionChange:g()}},_={args:{...m.args,iconButtons:Z,selectionMode:"single-strict",defaultSelectedId:"format-align-left"}},V={args:{...m.args,iconButtons:ae,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["mic"]}},L={args:{...m.args,iconButtons:ee,isDisabled:!0,onSelectionChange:g()},play:async({canvasElement:a,args:n})=>{const i=f(a).getAllByRole("button");for(const s of i)await e(s).toBeDisabled(),await c.click(s),s.focus(),await e(s).not.toHaveFocus(),await c.keyboard(H+k);await c.tab();for(const s of i)await e(s).not.toHaveFocus();await e(n.onSelectionChange).not.toHaveBeenCalled()}},A={args:{...m.args,iconButtons:Z.map((a,n)=>({...a,isDisabled:n===1||n===3})),defaultSelectedId:"format-align-left",onSelectionChange:g()},play:async({canvasElement:a,args:n})=>{const i=f(a),s=i.getByRole("button",{name:"Align Left"}),t=i.getByRole("button",{name:"Align Center"}),o=i.getByRole("button",{name:"Align Right"});await e(s).toBeEnabled(),await e(t).toBeDisabled(),await e(o).toBeEnabled(),await c.click(t),t.focus(),await e(t).not.toHaveFocus(),await e(t).toHaveAttribute("aria-pressed","false"),await e(n.onSelectionChange).not.toHaveBeenCalled(),s.focus(),await c.tab(),await e(o).toHaveFocus(),await c.keyboard(H),await e(o).toHaveAttribute("aria-pressed","true"),await e(n.onSelectionChange).toHaveBeenCalledTimes(1),await e(n.onSelectionChange).toHaveBeenLastCalledWith(n.selectionMode==="multiple"?["format-align-left","format-align-right"]:"format-align-right")}},G={...A,args:{...A.args,selectionMode:"single-strict",onSelectionChange:g()}},P={...A,args:{...A.args,selectionMode:"multiple",defaultSelectedId:void 0,defaultSelectedIds:["format-align-left"],onSelectionChange:g()}},W={args:{...m.args,orientation:"vertical",tooltipPosition:"left"}},N={args:{...m.args,appearance:"neutral"}},U={args:{...m.args,isCompact:!0}},F={tags:["!autodocs"],args:{...m.args},render:a=>l.jsxs("div",{style:{display:"flex",gap:"16px",flexDirection:"column",alignItems:"flex-start"},children:[l.jsx("div",{"data-testid":"icon-button-group-single",children:l.jsx(x,{...a})}),l.jsx("div",{"data-testid":"icon-button-group-strict",children:l.jsx(x,{...a,iconButtons:Z,selectionMode:"single-strict",selectedIds:void 0,defaultSelectedIds:void 0,defaultSelectedId:"format-align-left",onSelectionChange:g()})}),l.jsx("div",{"data-testid":"icon-button-group-multiple",children:l.jsx(x,{...a,iconButtons:ae,selectionMode:"multiple",selectedId:void 0,defaultSelectedId:void 0,defaultSelectedIds:["mic"],onSelectionChange:g()})})]}),play:async({canvasElement:a})=>{const n=f(a),i=await n.getByTestId("icon-button-group-single"),s=await n.getByTestId("icon-button-group-strict"),t=await n.getByTestId("icon-button-group-multiple"),o=f(i).getAllByRole("button"),r=f(s).getAllByRole("button"),u=f(t).getAllByRole("button");await wt(),e(o[0]).toHaveAttribute("data-active","true"),e(o[1]).toHaveAttribute("data-active","false"),await c.tab(),e(o[0]).toHaveFocus(),await c.tab(),e(o[1]).toHaveFocus(),await c.keyboard(H),e(o[0]).toHaveAttribute("data-active","false"),e(o[1]).toHaveAttribute("data-active","true"),await c.keyboard(k),e(o[1]).toHaveAttribute("data-active","false"),await c.tab(),e(r[0]).toHaveFocus(),await c.tab(),e(r[1]).toHaveFocus(),await c.keyboard(k),e(r[0]).toHaveAttribute("data-active","false"),e(r[1]).toHaveAttribute("data-active","true"),await c.keyboard(H),e(r[1]).toHaveAttribute("data-active","true"),await c.tab(),await c.keyboard(H),e(r[1]).toHaveAttribute("data-active","false"),e(r[2]).toHaveAttribute("data-active","true"),await c.tab(),await c.tab(),e(u[0]).toHaveFocus(),await c.tab(),e(u[1]).toHaveFocus(),await c.keyboard(k),e(u[0]).toHaveAttribute("data-active","true"),e(u[1]).toHaveAttribute("data-active","true"),await c.keyboard(H),e(u[0]).toHaveAttribute("data-active","true"),e(u[1]).toHaveAttribute("data-active","false")}},Et=a=>{const[n,i]=y.useState(a.selectedId??null),[s,t]=y.useState(a.selectedIds??[]);return a.selectionMode==="multiple"?l.jsx(x,{...a,selectedIds:s,onSelectionChange:o=>{var r;t(o),(r=a.onSelectionChange)==null||r.call(a,o)}}):l.jsx(x,{...a,selectedId:n,onSelectionChange:o=>{var r;i(o),(r=a.onSelectionChange)==null||r.call(a,o)}})},K={args:{...m.args,defaultSelectedId:void 0,selectedId:"visibility-show",onSelectionChange:g()},render:a=>l.jsx(Et,{...a})},O={args:{...m.args,onSelectionChange:g()}},dt=({mode:a,controlled:n,onSelectionChange:i})=>{const s=ut[a],[t,o]=y.useState([s[0].name]),r=a==="multiple"?{selectionMode:a,selectedIds:n?t:void 0,defaultSelectedIds:n?void 0:[s[0].name],onSelectionChange:u=>{n&&o(u),i==null||i(u)}}:{selectionMode:a,selectedId:n?t[0]??null:void 0,defaultSelectedId:n?void 0:s[0].name,onSelectionChange:u=>{n&&o(u===null?[]:[u]),i==null||i(u)}};return l.jsx(x,{...r,iconButtons:s,"aria-label":a})},mt=async({canvasElement:a,args:n,step:i})=>{const s=f(a);let t=0;await e(n.onSelectionChange).not.toHaveBeenCalled();for(const o of X)await i(o,async()=>{const r=f(s.getByRole("group",{name:o})),u=ut[o],[p,v,...w]=r.getAllByRole("button"),[d,I,...D]=u.map(E=>E.name);await e(p).toHaveAttribute("aria-pressed","true"),p.focus(),await c.keyboard(H),await e(p).toHaveAttribute("aria-pressed",String(o==="single-strict")),o!=="single-strict"&&t++,await e(n.onSelectionChange).toHaveBeenCalledTimes(t),o==="single"&&await e(n.onSelectionChange).toHaveBeenLastCalledWith(null),await c.keyboard(k),await e(p).toHaveAttribute("aria-pressed","true"),o!=="single-strict"&&t++,await c.tab(),await e(v).toHaveFocus(),await e(v).toHaveAttribute("aria-pressed","false"),await c.keyboard(H),t++,await e(v).toHaveAttribute("aria-pressed","true"),await e(p).toHaveAttribute("aria-pressed",String(o==="multiple")),await e(n.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?[d,I]:I),await c.keyboard(k),o!=="single-strict"&&t++,await e(v).toHaveAttribute("aria-pressed",String(o==="single-strict"));for(const[E,b]of w.entries())await c.tab(),await e(b).toHaveFocus(),await c.keyboard(k),t++,await e(b).toHaveAttribute("aria-pressed","true"),await e(n.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?[d,...D.slice(0,E+1)]:D[E]);await c.click(p),t++,await e(n.onSelectionChange).toHaveBeenLastCalledWith(o==="multiple"?D:d),await e(n.onSelectionChange).toHaveBeenCalledTimes(t)})},Y={tags:["!autodocs"],args:{...m.args,onSelectionChange:g()},render:a=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:X.map(n=>l.jsx(dt,{mode:n,controlled:!0,onSelectionChange:a.onSelectionChange},n))}),play:mt},z={tags:["!autodocs"],args:{...m.args,onSelectionChange:g()},render:a=>l.jsx("div",{style:{display:"grid",gap:"16px",justifyItems:"start"},children:X.map(n=>l.jsx(dt,{mode:n,controlled:!1,onSelectionChange:a.onSelectionChange},n))}),play:mt},j=[{id:"microphone",name:"mic",label:"Microphone"},{id:"volume",name:"volume-up",label:"Volume"},{id:"video",name:"video-camera",label:"Video Camera"}],Rt=a=>{const[n,i]=y.useState(j),[s,t]=y.useState("multiple"),[o,r]=y.useState(["microphone"]),[u,p]=y.useState(!1),v=a.onSelectionChange,w=s==="multiple"?{selectionMode:s,defaultSelectedIds:u?void 0:o,selectedIds:u?["microphone"]:void 0,onSelectionChange:v}:{selectionMode:s,defaultSelectedId:u?void 0:o[0]??null,selectedId:u?"microphone":void 0,onSelectionChange:v};return l.jsxs("div",{children:[l.jsx(x,{...w,iconButtons:n,"aria-label":"Dynamic selection"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>i(n.map(d=>({...d}))),children:"Refresh items"}),l.jsx("button",{type:"button",onClick:()=>r(["video"]),children:"Change defaults"}),l.jsx("button",{type:"button",onClick:()=>i([...n].reverse()),children:"Reverse items"}),l.jsx("button",{type:"button",onClick:()=>i(n.filter(d=>d.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>i(n.filter(d=>d.id!=="video")),children:"Remove video"}),l.jsx("button",{type:"button",onClick:()=>i([]),children:"Clear items"}),l.jsx("button",{type:"button",onClick:()=>i(j),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>i(n.map(d=>d.id==="microphone"?{...d,name:"edit",label:"Edited microphone"}:d)),children:"Change icon"}),l.jsx("button",{type:"button",onClick:()=>i(ee),children:"Replace items"}),l.jsx("button",{type:"button",onClick:()=>p(!0),children:"Provide controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(!1),children:"Restore uncontrolled mode"}),l.jsx("select",{"aria-label":"Selection mode",value:s,onChange:d=>t(d.target.value),children:X.map(d=>l.jsx("option",{value:d,children:d},d))})]})]})},C=async(a,n)=>{const i=console.warn,s=g();console.warn=s;try{await a(),await e(s).toHaveBeenCalledWith(`[IconButtonGroup] ${n}`)}finally{console.warn=i}},J={tags:["!autodocs"],args:{...m.args,onSelectionChange:g()},render:a=>l.jsx(Rt,{...a}),play:async({canvasElement:a,args:n})=>{const i=f(a),s=()=>f(i.getByRole("group",{name:"Dynamic selection"})),t=u=>c.click(i.getByRole("button",{name:u})),o=()=>s().getAllByRole("button",{pressed:!0}).map(u=>u.getAttribute("aria-label"));await c.click(s().getByRole("button",{name:"Volume"})),await e(o()).toEqual(["Microphone","Volume"]),await t("Refresh items"),await t("Change defaults"),await e(o()).toEqual(["Microphone","Volume"]),await t("Reverse items"),await e(o()).toEqual(["Volume","Microphone"]),await t("Remove video"),await C(()=>t("Remove volume"),"The component requires at least 2 icon buttons."),await e(i.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await t("Restore items"),await e(o()).toEqual(["Microphone"]),await C(()=>t("Clear items"),"The component requires at least 2 icon buttons."),await e(i.queryByRole("group",{name:"Dynamic selection"})).not.toBeInTheDocument(),await t("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.click(s().getByRole("button",{name:"Volume"})),await t("Reverse items");const r=i.getByRole("combobox",{name:"Selection mode"});await c.selectOptions(r,"single"),await e(o()).toEqual(["Volume"]),await c.selectOptions(r,"single-strict"),await t("Remove volume"),await e(o()).toEqual(["Video Camera"]),await t("Restore items"),await e(o()).toEqual(["Video Camera"]),await c.selectOptions(r,"multiple"),await t("Remove video"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await t("Restore items"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.selectOptions(r,"single-strict"),await e(o()).toEqual(["Microphone"]),await t("Change icon"),await e(o()).toEqual(["Edited microphone"]),await e(n.onSelectionChange).toHaveBeenCalledTimes(2),await t("Provide controlled value"),await e(o()).toEqual(["Edited microphone"]),await t("Restore uncontrolled mode"),await e(o()).toEqual(["Edited microphone"]),await t("Replace items"),await e(o()).toEqual(["Read only"]),await c.click(s().getByRole("button",{name:"Edit"})),await e(n.onSelectionChange).toHaveBeenLastCalledWith("edit"),await e(n.onSelectionChange).toHaveBeenCalledTimes(3)}},Ht=a=>{const[n,i]=y.useState("microphone"),[s,t]=y.useState(j),[o,r]=y.useState("single"),[u,p]=y.useState(),v={selectionMode:o,selectedId:o==="multiple"?void 0:n,selectedIds:o==="multiple"?n:void 0,defaultSelectedId:o==="multiple"||u==null?void 0:u[0],defaultSelectedIds:o==="multiple"?u:void 0,onSelectionChange:a.onSelectionChange};return l.jsxs("div",{children:[l.jsx(x,{...v,iconButtons:s,"aria-label":"Controlled updates"}),l.jsxs("div",{children:[l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?["volume"]:"volume"),children:"Select volume"}),l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?[]:null),children:"Clear selection"}),l.jsx("button",{type:"button",onClick:()=>i(o==="multiple"?["unknown"]:"unknown"),children:"Select unknown"}),l.jsx("button",{type:"button",onClick:()=>i(["microphone","microphone"]),children:"Duplicate selection"}),l.jsx("button",{type:"button",onClick:()=>i(["microphone","volume"]),children:"Select two"}),l.jsx("button",{type:"button",onClick:()=>i("volume"),children:"Provide scalar"}),l.jsx("button",{type:"button",onClick:()=>i(null),children:"Provide null"}),l.jsx("button",{type:"button",onClick:()=>r("single-strict"),children:"Use strict mode"}),l.jsx("button",{type:"button",onClick:()=>r("single"),children:"Use single mode"}),l.jsx("button",{type:"button",onClick:()=>{i(w=>typeof w=="string"?[w]:w===null?[]:w),r("multiple")},children:"Use multiple mode"}),l.jsx("button",{type:"button",onClick:()=>t(s.filter(w=>w.id!=="volume")),children:"Remove volume"}),l.jsx("button",{type:"button",onClick:()=>t(j),children:"Restore items"}),l.jsx("button",{type:"button",onClick:()=>t([j[0],{...j[1],id:"microphone"}]),children:"Duplicate IDs"}),l.jsx("button",{type:"button",onClick:()=>i(void 0),children:"Remove controlled value"}),l.jsx("button",{type:"button",onClick:()=>p(["microphone"]),children:"Mix defaults"})]})]})},$={tags:["!autodocs"],args:{...m.args,onSelectionChange:g()},render:a=>l.jsx(Ht,{...a}),play:async({canvasElement:a,args:n})=>{const i=f(a),s=()=>f(i.getByRole("group",{name:"Controlled updates"})),t=o=>c.click(i.getByRole("button",{name:o}));await c.click(s().getByRole("button",{name:"Volume"})),await e(n.onSelectionChange).toHaveBeenCalledTimes(1),await e(n.onSelectionChange).toHaveBeenCalledWith("volume"),await e(s().getByRole("button",{name:"Microphone"})).toHaveAttribute("aria-pressed","true"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","false"),await t("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await t("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await c.click(s().getByRole("button",{name:"Volume"})),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await e(n.onSelectionChange).toHaveBeenCalledTimes(2),await e(n.onSelectionChange).toHaveBeenLastCalledWith("volume");for(const[o,r]of[["Select unknown","Selected IDs must belong to the icon button group."],["Duplicate selection","In single modes, selectedId must be a string or null."],["Select two","In single modes, selectedId must be a string or null."]])await C(()=>t(o),r),await e(i.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await t("Clear selection");await C(()=>t("Use strict mode"),"In single-strict mode, exactly one icon button must be selected."),await t("Select volume"),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await C(()=>t("Select two"),"In single modes, selectedId must be a string or null."),await t("Use multiple mode"),await e(s().getAllByRole("button",{pressed:!0})).toHaveLength(2);for(const o of["Provide scalar","Provide null"])await C(()=>t(o),"In multiple mode, selectedIds must be an array."),await e(i.queryByRole("group",{name:"Controlled updates"})).not.toBeInTheDocument(),await t("Select two");await t("Clear selection"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await C(()=>t("Duplicate selection"),"Selected IDs must be unique."),await t("Select two"),await C(()=>t("Use single mode"),"In single modes, selectedId must be a string or null."),await t("Select volume"),await C(()=>t("Remove volume"),"Selected IDs must belong to the icon button group."),await t("Restore items"),await C(()=>t("Duplicate IDs"),"Icon button IDs must be unique."),await t("Restore items"),await t("Remove controlled value"),await e(s().queryAllByRole("button",{pressed:!0})).toHaveLength(0),await t("Select volume"),await C(()=>t("Mix defaults"),"Use selectedId or defaultSelectedId, not both. selectedId takes precedence."),await e(s().getByRole("button",{name:"Volume"})).toHaveAttribute("aria-pressed","true"),await e(n.onSelectionChange).toHaveBeenCalledTimes(2)}},Q={tags:["!autodocs"],args:{...m.args,iconButtons:[{id:"first-edit",name:"edit",label:"Edit first"},{id:"second-edit",name:"edit",label:"Edit second"}],defaultSelectedIds:["first-edit"],defaultSelectedId:void 0,selectionMode:"multiple",onSelectionChange:g()},render:a=>l.jsx("form",{"aria-label":"Editor",onSubmit:g(),children:l.jsx(x,{...a})}),play:async({canvasElement:a,args:n})=>{const i=f(a),s=i.getByRole("form",{name:"Editor"}),t=g(o=>o.preventDefault());s.addEventListener("submit",t);try{await c.click(i.getByRole("button",{name:"Edit second"})),await e(n.onSelectionChange).toHaveBeenLastCalledWith(["first-edit","second-edit"]),await c.click(i.getByRole("button",{name:"Edit first"})),await e(n.onSelectionChange).toHaveBeenLastCalledWith(["second-edit"]),await e(i.getByRole("button",{name:"Edit second"})).toHaveAttribute("aria-pressed","true"),await e(t).not.toHaveBeenCalled()}finally{s.removeEventListener("submit",t)}}};var re,ce,ue;m.parameters={...m.parameters,docs:{...(re=m.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
} satisfies Story`,...(ue=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,me,pe;_.parameters={..._.parameters,docs:{...(de=_.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonStrict,
    selectionMode: "single-strict",
    defaultSelectedId: "format-align-left"
  }
}`,...(pe=(me=_.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ve,be;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    iconButtons: iconButtonMultiple,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["mic"]
  }
}`,...(be=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var we,fe,ye;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(ye=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var he,Se,Be;A.parameters={...A.parameters,docs:{...(he=A.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
} satisfies Story`,...(Be=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var Ce,xe,Ie;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "single-strict",
    onSelectionChange: fn()
  }
}`,...(Ie=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Ee,Re,He;P.parameters={...P.parameters,docs:{...(Ee=P.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...PartiallyDisabled,
  args: {
    ...PartiallyDisabled.args,
    selectionMode: "multiple",
    defaultSelectedId: undefined,
    defaultSelectedIds: ["format-align-left"],
    onSelectionChange: fn()
  }
}`,...(He=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:He.source}}};var Ae,De,Te;W.parameters={...W.parameters,docs:{...(Ae=W.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical",
    tooltipPosition: "left"
  }
}`,...(Te=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var ke,qe,je;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    appearance: "neutral"
  }
}`,...(je=(qe=N.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};var Me,_e,Ve;U.parameters={...U.parameters,docs:{...(Me=U.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isCompact: true
  }
}`,...(Ve=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:Ve.source}}};var Le,Ge,Pe;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Pe=(Ge=F.parameters)==null?void 0:Ge.docs)==null?void 0:Pe.source}}};var We,Ne,Ue;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultSelectedId: undefined,
    selectedId: "visibility-show",
    onSelectionChange: fn()
  },
  render: args => <ControlledExample {...args} />
}`,...(Ue=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Fe,Ke,Oe;O.parameters={...O.parameters,docs:{...(Fe=O.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onSelectionChange: fn()
  }
}`,...(Oe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Oe.source}}};var Ye,ze,Je;Y.parameters={...Y.parameters,docs:{...(Ye=Y.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Je=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:Je.source}}};var $e,Qe,Xe;z.parameters={...z.parameters,docs:{...($e=z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Xe=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ze,et,tt;J.parameters={...J.parameters,docs:{...(Ze=J.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=J.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,ot;$.parameters={...$.parameters,docs:{...(nt=$.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(ot=(at=$.parameters)==null?void 0:at.docs)==null?void 0:ot.source}}};var it,st,lt;Q.parameters={...Q.parameters,docs:{...(it=Q.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(lt=(st=Q.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};const Jt=["Default","SingleStrict","Multiple","Disabled","PartiallyDisabled","PartiallyDisabledSingleStrict","PartiallyDisabledMultiple","Vertical","Neutral","Compact","KeyboardInteraction","Controlled","Uncontrolled","ControlledKeyboardInteraction","UncontrolledKeyboardInteraction","ListUpdates","ControlledUpdates","SameIconDifferentIds"];export{U as Compact,K as Controlled,Y as ControlledKeyboardInteraction,$ as ControlledUpdates,m as Default,L as Disabled,F as KeyboardInteraction,J as ListUpdates,V as Multiple,N as Neutral,A as PartiallyDisabled,P as PartiallyDisabledMultiple,G as PartiallyDisabledSingleStrict,Q as SameIconDifferentIds,_ as SingleStrict,O as Uncontrolled,z as UncontrolledKeyboardInteraction,W as Vertical,Jt as __namedExportsOrder,zt as default};
