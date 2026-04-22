import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{S as we,E as xe,A as Qt,a as Be,b as Zt,c as Oe,d as en,e as ke,f as ye,g as A,h as S,T as W}from"./keyboard-test.constants-B5qFTNXN.js";import"./timepicker.constants-CeHYsdFC.js";import{w as O,u as d,e as p}from"./index-4rjIhT2C.js";import{r as T}from"./index-G8LIXM5I.js";import{B as tn}from"./Badge-CyCYn5x0.js";import{C as nn}from"./Checkbox-D4MpxXUV.js";import{D as an,a as rn}from"./DropdownItem-BYIfxlaU.js";import{I as X}from"./Icon-DOkBvtOM.js";import{c as Y}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./BaseDropdown-Bc55FiNe.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";const ue="data-treeview-focusable",sn=["checkbox","chevron","content","action"];function Tt(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(on).map(n=>({rowElement:n,focusables:cn(n)}))}function on(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function cn(t){return sn.map(e=>t.querySelector(`[${ue}="${e}"]`)).filter(e=>e!==null)}function Nt(t){return t.hasAttribute(ue)}function Ie(t){const e=t.closest("li.treeview-item");return!!(e!=null&&e.classList.contains("disabled"))}function dn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((r,i)=>({rowIndex:i,focusableIndex:r.focusables.indexOf(e)})).find(r=>r.focusableIndex!==-1)??n}function Et(t){const e=t.focusables.find(a=>a.getAttribute(ue)==="content");return e&&!Ie(e)?e:t.focusables.find(a=>!Ie(a))??null}function Fe(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!u.rowElement.classList.contains("disabled")){const b=Et(u);return b?{rowIndex:o,focusableIndex:u.focusables.indexOf(b)}:null}o+=n}return null}const r=t[e.rowIndex];if(!r)return null;let i=e.focusableIndex+n;for(;i>=0&&i<r.focusables.length;){const o=r.focusables[i];if(!Ie(o))return{rowIndex:e.rowIndex,focusableIndex:i};i+=n}return null}function _t(t){return Array.from(t.querySelectorAll(`[${ue}]`))}function Te(t,e){_t(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Ct(t){_t(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=Tt(t);if(e.length){const n=Et(e[0]);n&&n.setAttribute("tabindex","0")}}function B(t){return((t==null?void 0:t.length)??0)>0}function H(t){return t.id??t.labelText}function M(t){const e=[H(t)],n=t.items??[];for(const a of n)e.push(...M(a));return e}function ln(t,e){const n=B(t.items);return Rt(t,e)||e.has(H(t))&&!n}function Ne(t,e){for(const n of e){B(n.items)&&Ne(t,n.items);const a=H(n);if(!B(n.items))continue;M(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function St(t,e){for(const n of e){B(n.items)&&St(t,n.items);const a=H(n);if(!t.has(a)||!B(n.items))continue;M(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function un(t,e){const n=new Set(t);return St(n,e),n}function mn(t,e,n){const a=M(e),r=new Set(t),i=H(e);return a.length>0?ln(e,t)?a.forEach(o=>r.delete(o)):(a.forEach(o=>r.add(o)),n&&n.length>0&&Ne(r,n)):t.has(i)?r.delete(i):(r.add(i),n&&n.length>0&&Ne(r,n)),n&&n.length>0?un(r,n):r}function Rt(t,e){const a=M(t).slice(1);return a.length>0&&a.every(r=>e.has(r))}function hn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function At(t,e){if(e.length===0||t.length===0)return;const[n,...a]=e,r=t[n];if(r===void 0)return;if(a.length===0)return r;const i=r.items??[];return At(i,a)}const pn=(t,e,n)=>{const[a,r]=T.useState(t||null),i=T.useCallback((o,u)=>{const C=hn(o),b=At(u,C),R=(b==null?void 0:b.id)??(b==null?void 0:b.labelText);r(R||null)},[]);return T.useEffect(()=>{t?r(t):e&&n&&i(e,n)},[t,e,n,i]),{internalSelectedId:a,setInternalSelectedId:r}},fn={"rte-treeview":"_rte-treeview_gnncd_1"},Dt=16,bn=32,gn=24,P={viewBox:"0 0 16 32",width:Dt,height:bn},vn={vertical:{...P,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...P,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...P,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...P,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...P,elements:[]}},G={viewBox:"0 0 16 24",width:Dt,height:gn},wn={vertical:{...G,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...G,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...G,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...G,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...G,elements:[]}};function D(t){return((t==null?void 0:t.length)??0)>0}function xn(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:r}=t;if(n)return Array(e).fill("spacer");const i=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;i.push(u?a[o]:Nn(a[o]))}return e&&i.length&&!r&&i.push("horizontal"),i}function kn(t,e){const n=e?"corner":"branch";return[...t,n]}function yn(t){return t.id??t.labelText}function Bt(t){const e=[yn(t)],n=t.items??[];for(const a of n)e.push(...Bt(a));return e}function In(t,e){const a=Bt(t).slice(1);if(a.length===0)return!1;const r=a.filter(i=>e.has(i)).length;return r>0&&r<a.length}function Tn(t){return`treeview-checkbox-${t}`}function Nn(t){return t==="corner"?"spacer":"vertical"}function En({treeId:t,path:e,itemId:n}){const a=e.join("-"),r=`${t}__${a}`;return n?`${r}__${n}`:r}const J={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},Ot=({isCompact:t,borderType:e})=>{const n=()=>(t?wn:vn)[e];return s.jsx("div",{className:J["rte-treeview-item-border-container"],"data-is-compact":t,children:s.jsx("svg",{className:Y(J["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,r)=>s.jsx(s.Fragment,{children:a.kind==="path"?s.jsx("path",{className:J["rte-treeview-item-border-path"],d:a.d},r):s.jsx("line",{className:J["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},r)},r))})})};Ot.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const _n=(t,e,n,a)=>{const r=a?new Set(a):new Set,i={id:t,labelText:e,items:n},o=B(n);return Rt(i,r)||r.has(i.id)&&!o},m={"rte-treeview-item":"_rte-treeview-item_ibuou_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_ibuou_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_ibuou_12","rte-treeview-item-row":"_rte-treeview-item-row_ibuou_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_ibuou_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_ibuou_25","rte-treeview-item-content":"_rte-treeview-item-content_ibuou_42","rte-treeview-item-icon":"_rte-treeview-item-icon_ibuou_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_ibuou_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_ibuou_116","rte-treeview-item-action":"_rte-treeview-item-action_ibuou_116","rte-treeview-item-label":"_rte-treeview-item-label_ibuou_235","rte-treeview-item-children":"_rte-treeview-item-children_ibuou_249","rte-treeview-item-children-open":"_rte-treeview-item-children-open_ibuou_264"},Ee=({id:t,treeId:e,itemIndex:n,labelText:a,icon:r,disabled:i,isCompact:o,hasCheckbox:u,isOpen:C,hasIcon:b,hasBadge:R,items:f,borderTypes:z,actionIcon:F,actionMenuItems:V,depth:l,onOpenChange:k,onChange:w,onActionIconClick:N,onCheckedIdsChange:y,selectedId:be,checkedIds:K})=>{const[j]=T.useState(l||0),[E,Lt]=T.useState(C||!1),[Wt,ge]=T.useState(!1),v=t||a,Se=_n(v,a,f??[],K??[]),Re=In({id:v,labelText:a,items:f??[]},new Set(K)),Pt=c=>{c.stopPropagation(),c.preventDefault(),N==null||N(v)},Gt=c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),c.stopPropagation(),N==null||N(v))},Yt=c=>{i||(c.stopPropagation(),w==null||w(v))},Ae=()=>z||[],$t=xn({depth:j,isCompact:o,resolvedBorderTypes:Ae(),hasChildren:D(f)}),qt=()=>{Lt(c=>!c),k==null||k(v,!E)},Ut=c=>{c.stopPropagation(),c.preventDefault(),ge(!0)},Ht=c=>{[we,xe].includes(c.key)&&(c.stopPropagation(),c.preventDefault(),ge(!0))},Mt=Tn(En({treeId:e,path:[n],itemId:v})),zt=c=>{[we,xe].includes(c.key)&&(c.preventDefault(),De())},De=()=>{y==null||y({id:v,labelText:a,items:f})},Vt=c=>{[we,xe].includes(c.key)&&(c.preventDefault(),w==null||w(v))};return s.jsxs("li",{className:Y(m["rte-treeview-item"],"treeview-item"),"data-disabled":i,"data-item-id":v,"data-has-children":D(f),"data-is-expanded":E&&D(f),"data-is-compact":o,"data-root-depth":j===0,"data-is-selected":be===v,"data-depth":j,role:"treeitem","aria-expanded":D(f)?E:void 0,"aria-selected":be===v,"aria-level":j+1,"data-has-checked-items":K&&K.length>0,children:[s.jsxs("div",{className:m["rte-treeview-item-row"],children:[u&&s.jsx("div",{className:m["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":Re?"mixed":Se?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:zt,children:s.jsx(nn,{id:Mt,label:a,showLabel:!1,tabIndex:-1,disabled:i,onChange:De,checked:Se,indeterminate:Re})}),s.jsxs("div",{className:m["rte-treeview-item-borders-container"],children:[$t.map((c,L)=>s.jsx(Ot,{isCompact:!!o,borderType:c},L)),D(f)&&s.jsx("button",{type:"button",className:Y(m["rte-treeview-item-chevron"],E?m["rte-treeview-item-chevron-open"]:""),onClick:qt,"aria-label":`${E?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:i,tabIndex:-1,"data-treeview-focusable":"chevron",children:s.jsx(X,{name:E?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),s.jsx("div",{className:m["rte-treeview-item-content-wrapper"],children:s.jsxs("div",{className:m["rte-treeview-item-main-content"],onClick:Yt,onKeyDown:Vt,"data-testid":`treeview-item-main-content-${t}`,children:[b&&r&&!o&&s.jsx(X,{name:r,className:m["rte-treeview-item-icon"],size:16}),s.jsx("div",{className:Y(m["rte-treeview-item-content"],o?m["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:s.jsxs("span",{className:m["rte-treeview-item-label"],children:[" ",a," "]})}),R&&s.jsx(tn,{badgeType:"indicator",content:"empty",size:"s"}),F&&s.jsx(s.Fragment,{children:V?s.jsx("div",{className:m["rte-treeview-item-action"],children:s.jsx(an,{dropdownId:`${v}-action-menu`,isOpen:Wt,autoClose:!0,onClose:()=>{ge(!1)},trigger:s.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:i,onClick:Ut,onKeyDown:Ht,children:s.jsx(X,{name:F,size:16})}),children:V.map(({label:c,leftIcon:L,hasSeparator:ve,onClick:Xt},Jt)=>s.jsx(rn,{label:c,leftIcon:L,hasSeparator:ve,onClick:Xt,disabled:i},Jt))})}):s.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:i,onClick:Pt,onKeyDown:Gt,children:s.jsx(X,{name:F,size:16})})})]})})]}),D(f)&&s.jsx("ul",{className:Y(m["rte-treeview-item-children"],E?m["rte-treeview-item-children-open"]:"","treeview-item-children",E?"treeview-item-children-open":""),role:"group","data-open":C,children:f.map((c,L)=>s.jsx(Ee,{...c,depth:j+1,borderTypes:kn(Ae(),L===f.length-1),isCompact:o,onChange:ve=>w==null?void 0:w(ve),selectedId:be,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:y,checkedIds:K,onActionIconClick:c.onActionIconClick},c.id))})]})};Ee.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const Cn=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||Qt.includes(t.key)&&Sn(e,t)},Sn=(t,e)=>{const n=e.target;if(!t.contains(n)||!Nt(n))return;const a=Tt(t);if(a.length===0)return;const r=dn(a,n);if(!(r.rowIndex===-1||r.focusableIndex===-1)){if([Be,Zt].includes(e.key)){const i=e.key===Be?-1:1,o=Fe(a,r,i,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Te(t,u),u.focus()}else e.preventDefault();return}if([Oe,en].includes(e.key)){const i=e.key===Oe?-1:1,o=Fe(a,r,i,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Te(t,u),u.focus()}else e.preventDefault()}}},Rn=(t,e)=>{const n=e.target;t.contains(n)&&Nt(n)&&Te(t,n)},An=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Ct(t)},U=({items:t,isCompact:e,selectedId:n,onChange:a,selectedPath:r,hasCheckbox:i,id:o="treeview"})=>{const{internalSelectedId:u,setInternalSelectedId:C}=pn(n,r,t),[b,R]=T.useState([]),f=T.useRef(null),z=l=>{const k=Array.from(mn(new Set(b),l,t));R(k)};T.useEffect(()=>{if(f.current){const l=f.current;Ct(l);const k=y=>{Cn(y,l)},w=y=>{Rn(l,y)},N=y=>{An(l,y)};return l.addEventListener("keydown",k,!0),l.addEventListener("focusin",w),l.addEventListener("focusout",N),()=>{l.removeEventListener("keydown",k,!0),l.removeEventListener("focusin",w),l.removeEventListener("focusout",N)}}},[]);const F=()=>!1,V=l=>{C(l),a==null||a(l)};return s.jsx("ul",{className:fn["rte-treeview"],"data-compact":e,"data-has-checked-items":F(),role:"tree",ref:f,children:t.map((l,k)=>s.jsx(T.Fragment,{children:s.jsx(Ee,{treeId:o,...l,isCompact:e,onChange:V,selectedId:u,hasCheckbox:l.hasCheckbox??i,onCheckedIdsChange:z,checkedIds:b},l.id)},(l.id||l.labelText)+k))})};U.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TreeviewItemProps"}],raw:"TreeviewItemProps[]"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"checkedIds"}],return:{name:"void"}}},description:""},selectedPath:{required:!1,tsType:{name:"string"},description:""},hasCheckbox:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"treeview"',computed:!1}}},composes:["Omit"]};const ua={title:"Composants/Treeview/Treeview",component:U,decorators:[t=>s.jsx("div",{style:{minWidth:"200px"},children:s.jsx(t,{})})]},_e=[{id:"home",labelText:"Home",icon:"home",hasIcon:!0},{id:"documents",labelText:"Documents",icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",hasIcon:!0,items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder",hasIcon:!0}]}],Ce=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:r=>{alert(`Action clicked for item: ${r}`)},...n&&{actionMenuItems:n},...a.items&&{items:Ce(a.items,e,n)}})),Ft=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],Dn=Ce(_e,"more-horiz",Ft),Bn=Ce(_e,"info-i"),Kt=_e,On=[{id:"settings",labelText:"Label",icon:"settings",hasIcon:!0,hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:Ft}],me=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],Fn=[{id:"folder",labelText:"Folder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasIcon:!0,hasCheckbox:!0,actionIcon:"info-i"}]}]}];function jt(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",hasIcon:!0,icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",hasIcon:!0,icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",hasIcon:!0,icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",hasIcon:!0,icon:"folder"}]}]}const Q={tags:["skip-ci"],args:{items:jt({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},Z={tags:["skip-ci"],args:{items:Kt,isCompact:!0}},ee={tags:["skip-ci"],args:{items:jt({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},te={tags:["skip-ci"],args:{items:Kt},play:async({canvasElement:t})=>{const e=O(t);await Ke(e,"Home","home"),je(e,"Home"),await Ke(e,"Documents","documents"),Kn(e,"Home"),je(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},ne={args:{items:Dn},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},ae={args:{items:Bn},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},re={args:{items:On},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},se={args:{items:[]},render:()=>{const t=Le("left"),e=Le("right");return s.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),s.jsx(U,{items:t})]}),s.jsxs("div",{children:[s.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),s.jsx(U,{items:e})]})]})}},ie={args:{items:me,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},oe={args:{items:me,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=O(t);await x(e,"Nesting 3b"),h(e,"Nesting 3b"),$(e,"Nesting 2a"),$(e,"Nesting 1"),I(e,"Nesting 2b"),I(e,"Nesting 3a"),I(e,"Nesting 3c"),await x(e,"Nesting 3c"),h(e,"Nesting 3c"),h(e,"Nesting 3b"),h(e,"Nesting 2b"),$(e,"Nesting 1"),$(e,"Nesting 2a"),I(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},ce={args:{items:me,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=O(t);await x(e,"Nesting 1");for(const n of q)h(e,n);await x(e,"Nesting 1");for(const n of q)I(e,n);await x(e,"Nesting 3c"),h(e,"Nesting 2b"),h(e,"Nesting 3c"),$(e,"Nesting 1"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),h(e,"Nesting 1");for(const n of q)h(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},de={args:{items:me,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=O(t);await x(e,"Nesting 1");for(const n of q)h(e,n);await x(e,"Nesting 1");for(const n of q)I(e,n);await x(e,"Nesting 2a"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),I(e,"Nesting 1"),I(e,"Nesting 2a"),I(e,"Nesting 3a"),I(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},le={args:{items:Fn.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>s.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[s.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),s.jsx(U,{...t}),s.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=O(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await d.click(n),p(n).toHaveFocus(),await d.tab(),_(e,"folder"),await d.keyboard(ke),_(e,"subfolder"),await d.keyboard(ke),_(e,"file"),await d.keyboard(ke),_(e,"file"),await d.keyboard(ye),_(e,"subfolder"),await d.keyboard(ye),_(e,"folder"),await d.keyboard(ye),_(e,"folder"),await d.keyboard(A),g(e,"folder","chevron"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(S),g(e,"folder","chevron"),await d.keyboard(S),g(e,"folder","content"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(A),g(e,"folder","content"),await d.keyboard(W),Pn(e,"folder"),await d.keyboard(A),g(e,"folder","chevron"),await d.keyboard(W);const r=fe(e,"folder");p(r.getAttribute("aria-expanded")).toBe("false"),await d.keyboard(W),p(r.getAttribute("aria-expanded")).toBe("true"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(W),Gn(e,"folder"),await d.keyboard(S),g(e,"folder","chevron"),await d.keyboard(S),g(e,"folder","content"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(W),p(window.lastActionIconClick).toBe("folder"),await d.tab(),p(a).toHaveFocus(),await d.tab({shift:!0}),_(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},Ke=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),r=O(a).getByTestId("treeview-item-main-content-"+n);return d.click(r)},je=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});p(n.getAttribute("aria-selected")).toBe("true")},Kn=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});p(n.getAttribute("aria-selected")).toBe("false")},Le=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder",hasIcon:!0},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder",hasIcon:!0}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",hasIcon:!0,items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder",hasIcon:!0}]}],q=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],jn={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function he(t,e){const n=jn[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),r=a.find(i=>!i.querySelector('[role="treeitem"]'));return a.length===1?a[0]:r??a[0]}function Ln(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function pe(t){return t.querySelector('input[type="checkbox"]')}function x(t,e){const n=he(t,e),a=n.children[0];return d.hover(a).then(()=>d.click(Ln(n)))}function h(t,e){const n=pe(he(t,e));p(n.checked).toBe(!0),p(n.indeterminate).toBe(!1)}function $(t,e){const n=pe(he(t,e));p(n.indeterminate).toBe(!0)}function I(t,e){const n=pe(he(t,e));p(n.checked).toBe(!1),p(n.indeterminate).toBe(!1)}function fe(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function Wn(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function g(t,e,n){const a=fe(t,e),r=Wn(a,n);p(document.activeElement).toBe(r)}function _(t,e){g(t,e,"content")}function Pn(t,e){const n=fe(t,e);p(n.getAttribute("aria-selected")).toBe("true")}function Gn(t,e){const n=fe(t,e),a=pe(n);p(a.checked).toBe(!0),p(a.indeterminate).toBe(!1)}var We,Pe,Ge;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: createConnectorLinesData({
      middleOpen: true
    })
  },
  parameters: {
    docs: {
      description: {
        story: "Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."
      }
    }
  }
}`,...(Ge=(Pe=Q.parameters)==null?void 0:Pe.docs)==null?void 0:Ge.source}}};var Ye,$e,qe;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(qe=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var Ue,He,Me;ee.parameters={...ee.parameters,docs:{...(Ue=ee.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: createConnectorLinesData({
      middleOpen: false
    }),
    selectedId: "first-2"
  },
  parameters: {
    docs: {
      description: {
        story: "Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."
      }
    }
  }
}`,...(Me=(He=ee.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var ze,Ve,Xe;te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await clickTreeItem(canvas, "Home", "home");
    expectTreeItemSelected(canvas, "Home");
    await clickTreeItem(canvas, "Documents", "documents");
    expectTreeItemNotSelected(canvas, "Home");
    expectTreeItemSelected(canvas, "Documents");
  },
  parameters: {
    docs: {
      description: {
        story: "Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."
      }
    }
  }
}`,...(Xe=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  args: {
    items: actionIconDropdownData
  },
  parameters: {
    docs: {
      description: {
        story: "Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."
      }
    }
  }
}`,...(Ze=(Qe=ne.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    items: actionIconCustomBehaviorData
  },
  parameters: {
    docs: {
      description: {
        story: "Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."
      }
    }
  }
}`,...(nt=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,st;re.parameters={...re.parameters,docs:{...(at=re.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    items: badgeData
  },
  parameters: {
    docs: {
      description: {
        story: "Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."
      }
    }
  }
}`,...(st=(rt=re.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ot,ct;se.parameters={...se.parameters,docs:{...(it=se.parameters)==null?void 0:it.docs,source:{originalSource:`{
  args: {
    items: []
  },
  render: () => {
    const leftItems = createSelectionTrees("left");
    const rightItems = createSelectionTrees("right");
    return <div style={{
      display: "flex",
      gap: "2rem",
      flexWrap: "wrap"
    }}>
        <div>
          <h3 style={{
          margin: "0 0 0.5rem 0"
        }}>Left tree</h3>
          <Treeview items={leftItems} />
        </div>
        <div>
          <h3 style={{
          margin: "0 0 0.5rem 0"
        }}>Right tree</h3>
          <Treeview items={rightItems} />
        </div>
      </div>;
  }
}`,...(ct=(ot=se.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var dt,lt,ut;ie.parameters={...ie.parameters,docs:{...(dt=ie.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true
  },
  parameters: {
    docs: {
      description: {
        story: "Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."
      }
    }
  }
}`,...(ut=(lt=ie.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var mt,ht,pt;oe.parameters={...oe.parameters,docs:{...(mt=oe.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 3b");
    expectIndeterminate(canvas, "Nesting 2a");
    expectIndeterminate(canvas, "Nesting 1");
    expectUnchecked(canvas, "Nesting 2b");
    expectUnchecked(canvas, "Nesting 3a");
    expectUnchecked(canvas, "Nesting 3c");
    await clickCheckbox(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 2b");
    expectIndeterminate(canvas, "Nesting 1");
    expectIndeterminate(canvas, "Nesting 2a");
    expectUnchecked(canvas, "Nesting 3a");
  },
  parameters: {
    docs: {
      description: {
        story: "Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."
      }
    }
  }
}`,...(pt=(ht=oe.parameters)==null?void 0:ht.docs)==null?void 0:pt.source}}};var ft,bt,gt;ce.parameters={...ce.parameters,docs:{...(ft=ce.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectUnchecked(canvas, label);
    }
    await clickCheckbox(canvas, "Nesting 3c");
    expectChecked(canvas, "Nesting 2b");
    expectChecked(canvas, "Nesting 3c");
    expectIndeterminate(canvas, "Nesting 1");
    await clickCheckbox(canvas, "Nesting 3a");
    await clickCheckbox(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 3a");
    expectChecked(canvas, "Nesting 3b");
    expectChecked(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."
      }
    }
  }
}`,...(gt=(bt=ce.parameters)==null?void 0:bt.docs)==null?void 0:gt.source}}};var vt,wt,xt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    items: checkboxCascadeData,
    hasCheckbox: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectChecked(canvas, label);
    }
    await clickCheckbox(canvas, "Nesting 1");
    for (const label of checkboxScenarioLabels) {
      expectUnchecked(canvas, label);
    }
    await clickCheckbox(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 2a");
    expectChecked(canvas, "Nesting 3a");
    expectChecked(canvas, "Nesting 3b");
    await clickCheckbox(canvas, "Nesting 3a");
    await clickCheckbox(canvas, "Nesting 3b");
    expectUnchecked(canvas, "Nesting 1");
    expectUnchecked(canvas, "Nesting 2a");
    expectUnchecked(canvas, "Nesting 3a");
    expectUnchecked(canvas, "Nesting 3b");
  },
  parameters: {
    docs: {
      description: {
        story: "Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."
      }
    }
  }
}`,...(xt=(wt=de.parameters)==null?void 0:wt.docs)==null?void 0:xt.source}}};var kt,yt,It;le.parameters={...le.parameters,docs:{...(kt=le.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    items: keyboardNavigationData.map(item => ({
      ...item,
      onActionIconClick: (itemId: string) => {
        (window as unknown as {
          lastActionIconClick?: string;
        }).lastActionIconClick = itemId;
      }
    })),
    hasCheckbox: true,
    id: "treeview-keyboard-nav"
  },
  render: args => <div style={{
    display: "flex",
    gap: "1rem",
    minWidth: "280px",
    flexDirection: "column"
  }}>
      <button data-testid="before-tree">Before tree</button>
      <Treeview {...args} />
      <button data-testid="after-tree">After tree</button>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const beforeTree = canvas.getByTestId("before-tree");
    const afterTree = canvas.getByTestId("after-tree");
    await userEvent.click(beforeTree);
    expect(beforeTree).toHaveFocus();
    await userEvent.tab();
    expectFocusedContent(canvas, "folder");
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "subfolder");
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "file");
    await userEvent.keyboard(TESTING_DOWN_KEY);
    expectFocusedContent(canvas, "file");
    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "subfolder");
    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "folder");
    await userEvent.keyboard(TESTING_UP_KEY);
    expectFocusedContent(canvas, "folder");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "content");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "content");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expectTreeItemSelectedById(canvas, "folder");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const folderTreeitem = getTreeitemByDataId(canvas, "folder");
    expect(folderTreeitem.getAttribute("aria-expanded")).toBe("false");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect(folderTreeitem.getAttribute("aria-expanded")).toBe("true");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expectFocusedElement(canvas, "folder", "checkbox");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expectCheckedById(canvas, "folder");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "chevron");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "content");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expectFocusedElement(canvas, "folder", "action");
    await userEvent.keyboard(TESTING_SPACE_KEY);
    expect((window as unknown as {
      lastActionIconClick?: string;
    }).lastActionIconClick).toBe("folder");
    await userEvent.tab();
    expect(afterTree).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expectFocusedContent(canvas, "folder");
  },
  parameters: {
    docs: {
      description: {
        story: "Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."
      }
    }
  }
}`,...(It=(yt=le.parameters)==null?void 0:yt.docs)==null?void 0:It.source}}};const ma=["NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation"];export{ae as ActionIconCustomBehavior,ne as ActionIconDropdown,ce as CheckboxCascadeChecked,de as CheckboxCascadeUnchecked,oe as CheckboxIndeterminate,ie as CheckboxNesting,Z as Compact,le as KeyboardNavigation,Q as NestedItems,ee as PreselectedState,te as SelectionExclusive,se as SelectionIndependence,re as WithBadge,ma as __namedExportsOrder,ua as default};
