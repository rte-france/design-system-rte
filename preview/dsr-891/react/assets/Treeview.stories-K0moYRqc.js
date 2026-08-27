import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{h as xe,i as ke,f as A,d as S,T as L}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as B,u as d,e as f}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{S as ye,E as Te,e as an,a as Be,A as sn,b as Fe,c as rn}from"./keyboard.constants-D1KJQ2-m.js";import{B as on}from"./Badge-DkJhvK8e.js";import{C as cn}from"./Checkbox-C8hWUkyN.js";import{D as dn}from"./Dropdown-DZSiAL4-.js";import{D as ln}from"./DropdownItem-DChD_Qg-.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{c as U}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";const me="data-treeview-focusable",un=["checkbox","chevron","content","action"];function Ct(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(bn).map(n=>({rowElement:n,focusables:fn(n)}))}function St(t){return t.hasAttribute(me)}function mn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((s,i)=>({rowIndex:i,focusableIndex:s.focusables.indexOf(e)})).find(s=>s.focusableIndex!==-1)??n}function je(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!Ee(u.rowElement)){const g=Ot(u);return g?{rowIndex:o,focusableIndex:u.focusables.indexOf(g)}:null}o+=n}return null}const s=t[e.rowIndex];if(!s)return null;let i=e.focusableIndex+n;for(;i>=0&&i<s.focusables.length;){const o=s.focusables[i];if(!q(o))return{rowIndex:e.rowIndex,focusableIndex:i};i+=n}return null}function Ie(t,e){Bt(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Rt(t){Bt(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=Ct(t);if(e.length){const n=Ot(e[0]);n&&n.setAttribute("tabindex","0")}}function O(t){return!!(t!=null&&t.length)}function pn(t,e,n){const a=z(e),s=new Set(t),i=M(e);return a.length?gn(e,t)?a.forEach(o=>s.delete(o)):(a.forEach(o=>s.add(o)),n!=null&&n.length&&Ne(s,n)):t.has(i)?s.delete(i):(s.add(i),n!=null&&n.length&&Ne(s,n)),n!=null&&n.length?vn(s,n):s}function Dt(t,e){const a=z(t).slice(1);return!!a.length&&(a==null?void 0:a.every(s=>e.has(s)))}function hn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function At(t,e){if(!e.length||!t.length)return;const[n,...a]=e,s=t[n];if(s===void 0)return;if(!a.length)return s;const i=s.items??[];return At(i,a)}function Ee(t){return(t==null?void 0:t.classList.contains("disabled"))||(t==null?void 0:t.getAttribute("data-disabled"))==="true"}function q(t){const e=t.closest("li.treeview-item");return!!e&&Ee(e)}function bn(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function fn(t){return Ee(t)?[]:un.map(e=>Array.from(t.querySelectorAll(`[${me}="${e}"]`)).find(a=>a.closest("li.treeview-item")===t)??null).filter(e=>e!==null)}function Ot(t){const e=t.focusables.find(a=>a.getAttribute(me)==="content");return e&&!q(e)?e:t.focusables.find(a=>!q(a))??null}function Bt(t){return Array.from(t.querySelectorAll(`[${me}]`))}function M(t){return t.id??t.labelText}function z(t){const e=[M(t)],n=t.items??[];for(const a of n)e.push(...z(a));return e}function gn(t,e){const n=O(t.items);return Dt(t,e)||e.has(M(t))&&!n}function Ne(t,e){for(const n of e){O(n.items)&&Ne(t,n.items);const a=M(n);if(!O(n.items))continue;z(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function Ft(t,e){for(const n of e){O(n.items)&&Ft(t,n.items);const a=M(n);if(!t.has(a)||!O(n.items))continue;z(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function vn(t,e){const n=new Set(t);return Ft(n,e),n}const jt="phase2-inuit-1-indice-1-active",wn=[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",isOpen:!0,items:[{id:"phase0-so-sur-t",labelText:"Phase0-SO-SUR-T",disabled:!0,isOpen:!1,items:[{id:"phase0-indice-1",labelText:"Indice 1",disabled:!0}]},{id:"phase1-so-sur-t",labelText:"Phase1-SO-SUR-T",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1",labelText:"Indice 1",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1-child",labelText:"Indice 1",disabled:!0}]}]},{id:"phase2-inuit-1",labelText:"Phase2-SO-INUIT",isOpen:!0,items:[{id:"phase2-inuit-1-indice-1-disabled",labelText:"Indice 1",disabled:!0},{id:"phase2-inuit-1-indice-2-disabled",labelText:"Indice 2",disabled:!0},{id:jt,labelText:"Indice 1",isOpen:!0,items:[{id:"phase2-inuit-1-rejouer-nested",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-1-indice-3",labelText:"Indice 3"},{id:"phase2-inuit-1-rejouer",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-2",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-2-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-3",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-3-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-4",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-4-indice-1",labelText:"Indice 1"}]},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",actionIcon:"add-circle"}]}],xn=(t,e,n)=>{const[a,s]=y.useState(t||null),i=y.useCallback((o,u)=>{const _=hn(o),g=At(u,_),m=(g==null?void 0:g.id)??(g==null?void 0:g.labelText);s(m||null)},[]);return y.useEffect(()=>{t?s(t):e&&n&&i(e,n)},[t,e,n,i]),{internalSelectedId:a,setInternalSelectedId:s}},kn={"rte-treeview":"_rte-treeview_gnncd_1"},Kt=16,yn=32,Tn=24,W={viewBox:"0 0 16 32",width:Kt,height:yn},In={vertical:{...W,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...W,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...W,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...W,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...W,elements:[]}},G={viewBox:"0 0 16 24",width:Kt,height:Tn},Nn={vertical:{...G,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...G,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...G,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...G,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...G,elements:[]}};function R(t){return!!(t!=null&&t.length)}function En(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:s}=t;if(n)return Array(e).fill("spacer");const i=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;i.push(u?a[o]:On(a[o]))}return e&&i.length&&!s&&i.push("horizontal"),i}function _n(t,e){const n=e?"corner":"branch";return[...t,n]}function Cn(t,e){return t&&!e}function Sn(t,e){const a=Pt(t).slice(1);if(!a.length)return!1;const s=a.filter(i=>e.has(i)).length;return!!s&&s<a.length}function Rn(t){return`treeview-checkbox-${t}`}function Dn({treeId:t,path:e,itemId:n}){const a=e.join("-"),s=`${t}__${a}`;return n?`${s}__${n}`:s}function An(t){return t.id??t.labelText}function Pt(t){const e=[An(t)],n=t.items??[];for(const a of n)e.push(...Pt(a));return e}function On(t){return t==="corner"?"spacer":"vertical"}const J={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},Lt=({isCompact:t,borderType:e})=>{const n=()=>(t?Nn:In)[e];return r.jsx("div",{className:J["rte-treeview-item-border-container"],"data-is-compact":t,children:r.jsx("svg",{className:U(J["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,s)=>r.jsx(r.Fragment,{children:a.kind==="path"?r.jsx("path",{className:J["rte-treeview-item-border-path"],d:a.d},s):r.jsx("line",{className:J["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},s)},s))})})};Lt.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const Bn=(t,e,n,a)=>{const s=a?new Set(a):new Set,i={id:t,labelText:e,items:n},o=O(n);return Dt(i,s)||s.has(i.id)&&!o},p={"rte-treeview-item":"_rte-treeview-item_14w8e_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_14w8e_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_14w8e_12","rte-treeview-item-row":"_rte-treeview-item-row_14w8e_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_14w8e_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_14w8e_25","rte-treeview-item-content":"_rte-treeview-item-content_14w8e_42","rte-treeview-item-icon":"_rte-treeview-item-icon_14w8e_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_14w8e_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_14w8e_116","rte-treeview-item-action":"_rte-treeview-item-action_14w8e_116","rte-treeview-item-label":"_rte-treeview-item-label_14w8e_236","rte-treeview-item-children":"_rte-treeview-item-children_14w8e_250","rte-treeview-item-children-open":"_rte-treeview-item-children-open_14w8e_265"},_e=({id:t,treeId:e,itemIndex:n,labelText:a,icon:s,disabled:i,isCompact:o,hasCheckbox:u,isOpen:_,hasBadge:g,items:m,borderTypes:D,actionIcon:F,actionMenuItems:V,depth:ge,onOpenChange:l,onChange:h,onActionIconClick:T,onCheckedIdsChange:C,selectedId:I,checkedIds:j})=>{const[K]=y.useState(ge||0),[N,Yt]=y.useState(_||!1),[$t,ve]=y.useState(!1),w=t||a,Re=Bn(w,a,m??[],j??[]),De=Sn({id:w,labelText:a,items:m??[]},new Set(j)),qt=c=>{c.stopPropagation(),c.preventDefault(),!i&&(T==null||T(w))},Ht=c=>{if(c.key==="Enter"||c.key===" "){if(c.preventDefault(),c.stopPropagation(),i)return;T==null||T(w)}},Mt=c=>{i||(c.stopPropagation(),h==null||h(w))},Ae=()=>D||[],zt=En({depth:K,isCompact:o,resolvedBorderTypes:Ae(),hasChildren:R(m)}),Vt=()=>{Cn(R(m),!!i)&&(Yt(c=>!c),l==null||l(w,!N))},Xt=c=>{c.stopPropagation(),c.preventDefault(),!i&&ve(!0)},Jt=c=>{if([ye,Te].includes(c.key)){if(c.stopPropagation(),c.preventDefault(),i)return;ve(!0)}},Qt=Rn(Dn({treeId:e,path:[n],itemId:w})),Zt=c=>{if([ye,Te].includes(c.key)){if(c.preventDefault(),i)return;Oe()}},Oe=()=>{i||C==null||C({id:w,labelText:a,items:m})},en=c=>{if([ye,Te].includes(c.key)){if(c.preventDefault(),i)return;h==null||h(w)}};return r.jsxs("li",{className:U(p["rte-treeview-item"],"treeview-item"),"data-disabled":i,"data-item-id":w,"data-has-children":R(m),"data-is-expanded":N&&R(m),"data-is-compact":o,"data-root-depth":K===0,"data-is-selected":I===w,"data-depth":K,role:"treeitem","aria-disabled":i?!0:void 0,"aria-expanded":R(m)?N:void 0,"aria-selected":I===w,"aria-level":K+1,"data-has-checked-items":j&&j.length>0,children:[r.jsxs("div",{className:p["rte-treeview-item-row"],children:[u&&r.jsx("div",{className:p["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":De?"mixed":Re?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:Zt,children:r.jsx(cn,{id:Qt,label:a,showLabel:!1,tabIndex:-1,disabled:i,onChange:Oe,checked:Re,indeterminate:De})}),r.jsxs("div",{className:p["rte-treeview-item-borders-container"],children:[zt.map((c,P)=>r.jsx(Lt,{isCompact:!!o,borderType:c},P)),R(m)&&r.jsx("button",{type:"button",className:U(p["rte-treeview-item-chevron"],N?p["rte-treeview-item-chevron-open"]:""),onClick:Vt,"aria-label":`${N?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:i,tabIndex:-1,"data-treeview-focusable":"chevron",children:r.jsx(X,{name:N?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),r.jsx("div",{className:p["rte-treeview-item-content-wrapper"],children:r.jsxs("div",{className:p["rte-treeview-item-main-content"],onClick:Mt,onKeyDown:en,"data-testid":`treeview-item-main-content-${t}`,children:[s&&!o&&r.jsx(X,{name:s,className:p["rte-treeview-item-icon"],size:16}),r.jsx("div",{className:U(p["rte-treeview-item-content"],o?p["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:r.jsxs("span",{className:p["rte-treeview-item-label"],children:[" ",a," "]})}),g&&r.jsx(on,{badgeType:"indicator",content:"empty",size:"s"}),F&&r.jsx(r.Fragment,{children:V?r.jsx("div",{className:p["rte-treeview-item-action"],children:r.jsx(dn,{dropdownId:`${w}-action-menu`,isOpen:$t,autoClose:!0,onClose:()=>{ve(!1)},trigger:r.jsx("button",{type:"button",className:p["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:i,onClick:Xt,onKeyDown:Jt,children:r.jsx(X,{name:F,size:16})}),children:V.map(({label:c,leftIcon:P,hasSeparator:we,onClick:tn},nn)=>r.jsx(ln,{label:c,leftIcon:P,hasSeparator:we,onClick:tn,disabled:i},nn))})}):r.jsx("button",{type:"button",className:p["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:i,onClick:qt,onKeyDown:Ht,children:r.jsx(X,{name:F,size:16})})})]})})]}),R(m)&&r.jsx("ul",{className:U(p["rte-treeview-item-children"],N?p["rte-treeview-item-children-open"]:"","treeview-item-children",N?"treeview-item-children-open":""),role:"group","data-open":_,children:m.map((c,P)=>r.jsx(_e,{...c,depth:K+1,borderTypes:_n(Ae(),P===m.length-1),isCompact:o,onChange:we=>h==null?void 0:h(we),selectedId:I,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:C,checkedIds:j,onActionIconClick:c.onActionIconClick},c.id))})]})};_e.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const Fn=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||an.includes(t.key)&&jn(e,t)},jn=(t,e)=>{const n=e.target;if(!t.contains(n)||!St(n)||q(n))return;const a=Ct(t);if(a.length===0)return;const s=mn(a,n);if(!(s.rowIndex===-1||s.focusableIndex===-1)){if([Be,sn].includes(e.key)){const i=e.key===Be?-1:1,o=je(a,s,i,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ie(t,u),u.focus()}else e.preventDefault();return}if([Fe,rn].includes(e.key)){const i=e.key===Fe?-1:1,o=je(a,s,i,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ie(t,u),u.focus()}else e.preventDefault()}}},Kn=(t,e)=>{const n=e.target;t.contains(n)&&St(n)&&!q(n)&&Ie(t,n)},Pn=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Rt(t)},H=({items:t,isCompact:e,selectedId:n,onChange:a,selectedPath:s,hasCheckbox:i,id:o="treeview"})=>{const{internalSelectedId:u,setInternalSelectedId:_}=xn(n,s,t),[g,m]=y.useState([]),D=y.useRef(null),F=l=>{const h=Array.from(pn(new Set(g),l,t));m(h)};y.useEffect(()=>{if(D.current){const l=D.current;Rt(l);const h=I=>{Fn(I,l)},T=I=>{Kn(l,I)},C=I=>{Pn(l,I)};return l.addEventListener("keydown",h,!0),l.addEventListener("focusin",T),l.addEventListener("focusout",C),()=>{l.removeEventListener("keydown",h,!0),l.removeEventListener("focusin",T),l.removeEventListener("focusout",C)}}},[]);const V=()=>!1,ge=l=>{_(l),a==null||a(l)};return r.jsx("ul",{className:kn["rte-treeview"],"data-compact":e,"data-has-checked-items":V(),role:"tree",ref:D,children:t.map((l,h)=>r.jsx(y.Fragment,{children:r.jsx(_e,{treeId:o,...l,isCompact:e,onChange:ge,selectedId:u,hasCheckbox:l.hasCheckbox??i,onCheckedIdsChange:F,checkedIds:g},l.id)},(l.id||l.labelText)+h))})};H.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TreeviewItemProps"}],raw:"TreeviewItemProps[]"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"checkedIds"}],return:{name:"void"}}},description:""},selectedPath:{required:!1,tsType:{name:"string"},description:""},hasCheckbox:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"treeview"',computed:!1}}},composes:["Omit"]};const ya={title:"Composants/Treeview/Treeview",component:H,decorators:[t=>r.jsx("div",{style:{minWidth:"200px"},children:r.jsx(t,{})})]},Ce=[{id:"home",labelText:"Home",icon:"home"},{id:"documents",labelText:"Documents",icon:"folder",isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder"}]}],Se=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:s=>{alert(`Action clicked for item: ${s}`)},...n&&{actionMenuItems:n},...a.items&&{items:Se(a.items,e,n)}})),Wt=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],Ln=Se(Ce,"more-horiz",Wt),Wn=Se(Ce,"info-i"),Gt=Ce,Gn=[{id:"settings",labelText:"Label",icon:"settings",hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:Wt}],pe=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],Un=[{id:"folder",labelText:"Folder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasCheckbox:!0,actionIcon:"info-i"}]}]}];function Ut(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",icon:"folder"}]}]}const Q={tags:["skip-ci"],args:{items:Ut({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},Z={tags:["skip-ci"],args:{items:Gt,isCompact:!0}},ee={tags:["skip-ci"],args:{items:Ut({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},te={tags:["skip-ci"],args:{items:Gt},play:async({canvasElement:t})=>{const e=B(t);await Ke(e,"Home","home"),Pe(e,"Home"),await Ke(e,"Documents","documents"),Yn(e,"Home"),Pe(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},ne={tags:["skip-ci"],args:{items:Ln},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},ae={tags:["skip-ci"],args:{items:Wn},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},se={tags:["skip-ci"],args:{items:Gn},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},ie={args:{items:[]},render:()=>{const t=Le("left"),e=Le("right");return r.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),r.jsx(H,{items:t})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),r.jsx(H,{items:e})]})]})}},re={args:{items:pe,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},oe={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 3b"),b(e,"Nesting 3b"),Y(e,"Nesting 2a"),Y(e,"Nesting 1"),k(e,"Nesting 2b"),k(e,"Nesting 3a"),k(e,"Nesting 3c"),await x(e,"Nesting 3c"),b(e,"Nesting 3c"),b(e,"Nesting 3b"),b(e,"Nesting 2b"),Y(e,"Nesting 1"),Y(e,"Nesting 2a"),k(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},ce={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 1");for(const n of $)b(e,n);await x(e,"Nesting 1");for(const n of $)k(e,n);await x(e,"Nesting 3c"),b(e,"Nesting 2b"),b(e,"Nesting 3c"),Y(e,"Nesting 1"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),b(e,"Nesting 2a"),b(e,"Nesting 3a"),b(e,"Nesting 3b"),b(e,"Nesting 1");for(const n of $)b(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},de={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 1");for(const n of $)b(e,n);await x(e,"Nesting 1");for(const n of $)k(e,n);await x(e,"Nesting 2a"),b(e,"Nesting 2a"),b(e,"Nesting 3a"),b(e,"Nesting 3b"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),k(e,"Nesting 1"),k(e,"Nesting 2a"),k(e,"Nesting 3a"),k(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},le={args:{items:Un.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>r.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[r.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),r.jsx(H,{...t}),r.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=B(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await d.click(n),f(n).toHaveFocus(),await d.tab(),E(e,"folder"),await d.keyboard(xe),E(e,"subfolder"),await d.keyboard(xe),E(e,"file"),await d.keyboard(xe),E(e,"file"),await d.keyboard(ke),E(e,"subfolder"),await d.keyboard(ke),E(e,"folder"),await d.keyboard(ke),E(e,"folder"),await d.keyboard(A),v(e,"folder","chevron"),await d.keyboard(A),v(e,"folder","checkbox"),await d.keyboard(A),v(e,"folder","checkbox"),await d.keyboard(S),v(e,"folder","chevron"),await d.keyboard(S),v(e,"folder","content"),await d.keyboard(S),v(e,"folder","action"),await d.keyboard(S),v(e,"folder","action"),await d.keyboard(A),v(e,"folder","content"),await d.keyboard(L),Mn(e,"folder"),await d.keyboard(A),v(e,"folder","chevron"),await d.keyboard(L);const s=fe(e,"folder");f(s.getAttribute("aria-expanded")).toBe("false"),await d.keyboard(L),f(s.getAttribute("aria-expanded")).toBe("true"),await d.keyboard(A),v(e,"folder","checkbox"),await d.keyboard(L),zn(e,"folder"),await d.keyboard(S),v(e,"folder","chevron"),await d.keyboard(S),v(e,"folder","content"),await d.keyboard(S),v(e,"folder","action"),await d.keyboard(L),f(window.lastActionIconClick).toBe("folder"),await d.tab(),f(a).toHaveFocus(),await d.tab({shift:!0}),E(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},ue={args:{items:wn,selectedId:jt,hasCheckbox:!0,id:"treeview-disabled-items-scenario"},decorators:[t=>r.jsx("div",{style:{minWidth:"420px",maxHeight:"520px",overflow:"auto"},children:r.jsx(t,{})})],parameters:{docs:{description:{story:"Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."}}}},Ke=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),s=B(a).getByTestId("treeview-item-main-content-"+n);return d.click(s)},Pe=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});f(n.getAttribute("aria-selected")).toBe("true")},Yn=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});f(n.getAttribute("aria-selected")).toBe("false")},Le=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder"},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder"}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder"}]}],$=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],$n={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function he(t,e){const n=$n[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),s=a.find(i=>!i.querySelector('[role="treeitem"]'));return a.length===1?a[0]:s??a[0]}function qn(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function be(t){return t.querySelector('input[type="checkbox"]')}function x(t,e){const n=he(t,e),a=n.children[0];return d.hover(a).then(()=>d.click(qn(n)))}function b(t,e){const n=be(he(t,e));f(n.checked).toBe(!0),f(n.indeterminate).toBe(!1)}function Y(t,e){const n=be(he(t,e));f(n.indeterminate).toBe(!0)}function k(t,e){const n=be(he(t,e));f(n.checked).toBe(!1),f(n.indeterminate).toBe(!1)}function fe(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function Hn(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function v(t,e,n){const a=fe(t,e),s=Hn(a,n);f(document.activeElement).toBe(s)}function E(t,e){v(t,e,"content")}function Mn(t,e){const n=fe(t,e);f(n.getAttribute("aria-selected")).toBe("true")}function zn(t,e){const n=fe(t,e),a=be(n);f(a.checked).toBe(!0),f(a.indeterminate).toBe(!1)}var We,Ge,Ue;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Ue=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source}}};var Ye,$e,qe;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(qe=($e=Z.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var He,Me,ze;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(ze=(Me=ee.parameters)==null?void 0:Me.docs)==null?void 0:ze.source}}};var Ve,Xe,Je;te.parameters={...te.parameters,docs:{...(Ve=te.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
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
}`,...(Je=(Xe=te.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var Qe,Ze,et;ne.parameters={...ne.parameters,docs:{...(Qe=ne.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(et=(Ze=ne.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,nt,at;ae.parameters={...ae.parameters,docs:{...(tt=ae.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(at=(nt=ae.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var st,it,rt;se.parameters={...se.parameters,docs:{...(st=se.parameters)==null?void 0:st.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...(rt=(it=se.parameters)==null?void 0:it.docs)==null?void 0:rt.source}}};var ot,ct,dt;ie.parameters={...ie.parameters,docs:{...(ot=ie.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(dt=(ct=ie.parameters)==null?void 0:ct.docs)==null?void 0:dt.source}}};var lt,ut,mt;re.parameters={...re.parameters,docs:{...(lt=re.parameters)==null?void 0:lt.docs,source:{originalSource:`{
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
}`,...(mt=(ut=re.parameters)==null?void 0:ut.docs)==null?void 0:mt.source}}};var pt,ht,bt;oe.parameters={...oe.parameters,docs:{...(pt=oe.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(bt=(ht=oe.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var ft,gt,vt;ce.parameters={...ce.parameters,docs:{...(ft=ce.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(vt=(gt=ce.parameters)==null?void 0:gt.docs)==null?void 0:vt.source}}};var wt,xt,kt;de.parameters={...de.parameters,docs:{...(wt=de.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(kt=(xt=de.parameters)==null?void 0:xt.docs)==null?void 0:kt.source}}};var yt,Tt,It;le.parameters={...le.parameters,docs:{...(yt=le.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(It=(Tt=le.parameters)==null?void 0:Tt.docs)==null?void 0:It.source}}};var Nt,Et,_t;ue.parameters={...ue.parameters,docs:{...(Nt=ue.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    items: disabledItemsScenarioData,
    selectedId: disabledItemsScenarioSelectedId,
    hasCheckbox: true,
    id: "treeview-disabled-items-scenario"
  },
  decorators: [Story => <div style={{
    minWidth: "420px",
    maxHeight: "520px",
    overflow: "auto"
  }}>
        <Story />
      </div>],
  parameters: {
    docs: {
      description: {
        story: "Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."
      }
    }
  }
}`,...(_t=(Et=ue.parameters)==null?void 0:Et.docs)==null?void 0:_t.source}}};const Ta=["NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation","DisabledItemsScenario"];export{ae as ActionIconCustomBehavior,ne as ActionIconDropdown,ce as CheckboxCascadeChecked,de as CheckboxCascadeUnchecked,oe as CheckboxIndeterminate,re as CheckboxNesting,Z as Compact,ue as DisabledItemsScenario,le as KeyboardNavigation,Q as NestedItems,ee as PreselectedState,te as SelectionExclusive,ie as SelectionIndependence,se as WithBadge,Ta as __namedExportsOrder,ya as default};
