import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{h as ye,i as Te,f as O,d as R,T as W}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as F,u as d,e as b}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{S as Ie,E as Ne,e as dn,a as je,A as ln,b as Ke,c as un}from"./keyboard.constants-D1KJQ2-m.js";import{B as hn}from"./Badge-DkJhvK8e.js";import{C as mn}from"./Checkbox-C8hWUkyN.js";import{D as pn}from"./Dropdown-Csevbhnq.js";import{D as bn}from"./DropdownItem-CDrtBJ9h.js";import{I as J}from"./Icon-DgLH6pPJ.js";import{c as Y}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";const pe="data-treeview-focusable",fn=["checkbox","chevron","content","action"];function Ot(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(wn).map(n=>({rowElement:n,focusables:kn(n)}))}function Bt(t){return t.hasAttribute(pe)}function gn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((s,r)=>({rowIndex:r,focusableIndex:s.focusables.indexOf(e)})).find(s=>s.focusableIndex!==-1)??n}function Le(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!Ce(u.rowElement)){const v=Lt(u);return v?{rowIndex:o,focusableIndex:u.focusables.indexOf(v)}:null}o+=n}return null}const s=t[e.rowIndex];if(!s)return null;let r=e.focusableIndex+n;for(;r>=0&&r<s.focusables.length;){const o=s.focusables[r];if(!q(o))return{rowIndex:e.rowIndex,focusableIndex:r};r+=n}return null}function Ee(t,e){Pt(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Ft(t){Pt(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=Ot(t);if(e.length){const n=Lt(e[0]);n&&n.setAttribute("tabindex","0")}}function B(t){return!!(t!=null&&t.length)}function vn(t,e,n){const a=V(e),s=new Set(t),r=z(e);return a.length?yn(e,t)?a.forEach(o=>s.delete(o)):(a.forEach(o=>s.add(o)),n!=null&&n.length&&_e(s,n)):t.has(r)?s.delete(r):(s.add(r),n!=null&&n.length&&_e(s,n)),n!=null&&n.length?Tn(s,n):s}function jt(t,e){const a=V(t).slice(1);return!!a.length&&(a==null?void 0:a.every(s=>e.has(s)))}function xn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function Kt(t,e){if(!e.length||!t.length)return;const[n,...a]=e,s=t[n];if(s===void 0)return;if(!a.length)return s;const r=s.items??[];return Kt(r,a)}function Ce(t){return(t==null?void 0:t.classList.contains("disabled"))||(t==null?void 0:t.getAttribute("data-disabled"))==="true"}function q(t){const e=t.closest("li.treeview-item");return!!e&&Ce(e)}function wn(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function kn(t){return Ce(t)?[]:fn.map(e=>Array.from(t.querySelectorAll(`[${pe}="${e}"]`)).find(a=>a.closest("li.treeview-item")===t)??null).filter(e=>e!==null)}function Lt(t){const e=t.focusables.find(a=>a.getAttribute(pe)==="content");return e&&!q(e)?e:t.focusables.find(a=>!q(a))??null}function Pt(t){return Array.from(t.querySelectorAll(`[${pe}]`))}function z(t){return t.id??t.labelText}function V(t){const e=[z(t)],n=t.items??[];for(const a of n)e.push(...V(a));return e}function yn(t,e){const n=B(t.items);return jt(t,e)||e.has(z(t))&&!n}function _e(t,e){for(const n of e){B(n.items)&&_e(t,n.items);const a=z(n);if(!B(n.items))continue;V(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function Wt(t,e){for(const n of e){B(n.items)&&Wt(t,n.items);const a=z(n);if(!t.has(a)||!B(n.items))continue;V(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function Tn(t,e){const n=new Set(t);return Wt(n,e),n}const Gt="phase2-inuit-1-indice-1-active",In=[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:"phase0-so-sur-t",labelText:"Phase0-SO-SUR-T",disabled:!0,isOpen:!1,items:[{id:"phase0-indice-1",labelText:"Indice 1",disabled:!0}]},{id:"phase1-so-sur-t",labelText:"Phase1-SO-SUR-T",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1",labelText:"Indice 1",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1-child",labelText:"Indice 1",disabled:!0}]}]},{id:"phase2-inuit-1",labelText:"Phase2-SO-INUIT",isOpen:!0,items:[{id:"phase2-inuit-1-indice-1-disabled",labelText:"Indice 1",disabled:!0},{id:"phase2-inuit-1-indice-2-disabled",labelText:"Indice 2",disabled:!0},{id:Gt,labelText:"Indice 1",isOpen:!0,items:[{id:"phase2-inuit-1-rejouer-nested",labelText:"Rejouer",icon:"play-circle",hasIcon:!0}]},{id:"phase2-inuit-1-indice-3",labelText:"Indice 3"},{id:"phase2-inuit-1-rejouer",labelText:"Rejouer",icon:"play-circle",hasIcon:!0}]},{id:"phase2-inuit-2",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-2-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-3",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-3-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-4",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-4-indice-1",labelText:"Indice 1"}]},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",hasIcon:!0,actionIcon:"add-circle"}]}],Nn=(t,e,n)=>{const[a,s]=y.useState(t||null),r=y.useCallback((o,u)=>{const _=xn(o),v=Kt(u,_),C=(v==null?void 0:v.id)??(v==null?void 0:v.labelText);s(C||null)},[]);return y.useEffect(()=>{t?s(t):e&&n&&r(e,n)},[t,e,n,r]),{internalSelectedId:a,setInternalSelectedId:s}},En={"rte-treeview":"_rte-treeview_gnncd_1"},Ut=16,_n=32,Cn=24,G={viewBox:"0 0 16 32",width:Ut,height:_n},Sn={vertical:{...G,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...G,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...G,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...G,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...G,elements:[]}},U={viewBox:"0 0 16 24",width:Ut,height:Cn},Rn={vertical:{...U,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...U,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...U,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...U,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...U,elements:[]}};function D(t){return!!(t!=null&&t.length)}function Dn(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:s}=t;if(n)return Array(e).fill("spacer");const r=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;r.push(u?a[o]:Ln(a[o]))}return e&&r.length&&!s&&r.push("horizontal"),r}function An(t,e){const n=e?"corner":"branch";return[...t,n]}function On(t,e){return t&&!e}function Bn(t,e){const a=Yt(t).slice(1);if(!a.length)return!1;const s=a.filter(r=>e.has(r)).length;return!!s&&s<a.length}function Fn(t){return`treeview-checkbox-${t}`}function jn({treeId:t,path:e,itemId:n}){const a=e.join("-"),s=`${t}__${a}`;return n?`${s}__${n}`:s}function Kn(t){return t.id??t.labelText}function Yt(t){const e=[Kn(t)],n=t.items??[];for(const a of n)e.push(...Yt(a));return e}function Ln(t){return t==="corner"?"spacer":"vertical"}const Q={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},$t=({isCompact:t,borderType:e})=>{const n=()=>(t?Rn:Sn)[e];return i.jsx("div",{className:Q["rte-treeview-item-border-container"],"data-is-compact":t,children:i.jsx("svg",{className:Y(Q["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,s)=>i.jsx(i.Fragment,{children:a.kind==="path"?i.jsx("path",{className:Q["rte-treeview-item-border-path"],d:a.d},s):i.jsx("line",{className:Q["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},s)},s))})})};$t.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const Pn=(t,e,n,a)=>{const s=a?new Set(a):new Set,r={id:t,labelText:e,items:n},o=B(n);return jt(r,s)||s.has(r.id)&&!o},h={"rte-treeview-item":"_rte-treeview-item_14w8e_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_14w8e_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_14w8e_12","rte-treeview-item-row":"_rte-treeview-item-row_14w8e_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_14w8e_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_14w8e_25","rte-treeview-item-content":"_rte-treeview-item-content_14w8e_42","rte-treeview-item-icon":"_rte-treeview-item-icon_14w8e_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_14w8e_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_14w8e_116","rte-treeview-item-action":"_rte-treeview-item-action_14w8e_116","rte-treeview-item-label":"_rte-treeview-item-label_14w8e_236","rte-treeview-item-children":"_rte-treeview-item-children_14w8e_250","rte-treeview-item-children-open":"_rte-treeview-item-children-open_14w8e_265"},Se=({id:t,treeId:e,itemIndex:n,labelText:a,icon:s,disabled:r,isCompact:o,hasCheckbox:u,isOpen:_,hasIcon:v,hasBadge:C,items:f,borderTypes:A,actionIcon:j,actionMenuItems:X,depth:xe,onOpenChange:l,onClickElement:m,onActionIconClick:T,onCheckedIdsChange:S,selectedId:I,checkedIds:K})=>{const[L]=y.useState(xe||0),[N,zt]=y.useState(_||!1),[Vt,we]=y.useState(!1),x=t||a,Ae=Pn(x,a,f??[],K??[]),Oe=Bn({id:x,labelText:a,items:f??[]},new Set(K)),Xt=c=>{c.stopPropagation(),c.preventDefault(),!r&&(T==null||T(x))},Jt=c=>{if(c.key==="Enter"||c.key===" "){if(c.preventDefault(),c.stopPropagation(),r)return;T==null||T(x)}},Qt=c=>{r||(c.stopPropagation(),m==null||m(x))},Be=()=>A||[],Zt=Dn({depth:L,isCompact:o,resolvedBorderTypes:Be(),hasChildren:D(f)}),en=()=>{On(D(f),!!r)&&(zt(c=>!c),l==null||l(x,!N))},tn=c=>{c.stopPropagation(),c.preventDefault(),!r&&we(!0)},nn=c=>{if([Ie,Ne].includes(c.key)){if(c.stopPropagation(),c.preventDefault(),r)return;we(!0)}},an=Fn(jn({treeId:e,path:[n],itemId:x})),sn=c=>{if([Ie,Ne].includes(c.key)){if(c.preventDefault(),r)return;Fe()}},Fe=()=>{r||S==null||S({id:x,labelText:a,items:f})},rn=c=>{if([Ie,Ne].includes(c.key)){if(c.preventDefault(),r)return;m==null||m(x)}};return i.jsxs("li",{className:Y(h["rte-treeview-item"],"treeview-item"),"data-disabled":r,"data-item-id":x,"data-has-children":D(f),"data-is-expanded":N&&D(f),"data-is-compact":o,"data-root-depth":L===0,"data-is-selected":I===x,"data-depth":L,role:"treeitem","aria-disabled":r?!0:void 0,"aria-expanded":D(f)?N:void 0,"aria-selected":I===x,"aria-level":L+1,"data-has-checked-items":K&&K.length>0,children:[i.jsxs("div",{className:h["rte-treeview-item-row"],children:[u&&i.jsx("div",{className:h["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":Oe?"mixed":Ae?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:sn,children:i.jsx(mn,{id:an,label:a,showLabel:!1,tabIndex:-1,disabled:r,onChange:Fe,checked:Ae,indeterminate:Oe})}),i.jsxs("div",{className:h["rte-treeview-item-borders-container"],children:[Zt.map((c,P)=>i.jsx($t,{isCompact:!!o,borderType:c},P)),D(f)&&i.jsx("button",{type:"button",className:Y(h["rte-treeview-item-chevron"],N?h["rte-treeview-item-chevron-open"]:""),onClick:en,"aria-label":`${N?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:r,tabIndex:-1,"data-treeview-focusable":"chevron",children:i.jsx(J,{name:N?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),i.jsx("div",{className:h["rte-treeview-item-content-wrapper"],children:i.jsxs("div",{className:h["rte-treeview-item-main-content"],onClick:Qt,onKeyDown:rn,"data-testid":`treeview-item-main-content-${t}`,children:[v&&s&&!o&&i.jsx(J,{name:s,className:h["rte-treeview-item-icon"],size:16}),i.jsx("div",{className:Y(h["rte-treeview-item-content"],o?h["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:i.jsxs("span",{className:h["rte-treeview-item-label"],children:[" ",a," "]})}),C&&i.jsx(hn,{badgeType:"indicator",content:"empty",size:"s"}),j&&i.jsx(i.Fragment,{children:X?i.jsx("div",{className:h["rte-treeview-item-action"],children:i.jsx(pn,{dropdownId:`${x}-action-menu`,isOpen:Vt,autoClose:!0,onClose:()=>{we(!1)},trigger:i.jsx("button",{type:"button",className:h["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:r,onClick:tn,onKeyDown:nn,children:i.jsx(J,{name:j,size:16})}),children:X.map(({label:c,leftIcon:P,hasSeparator:ke,onClick:on},cn)=>i.jsx(bn,{label:c,leftIcon:P,hasSeparator:ke,onClick:on,disabled:r},cn))})}):i.jsx("button",{type:"button",className:h["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:r,onClick:Xt,onKeyDown:Jt,children:i.jsx(J,{name:j,size:16})})})]})})]}),D(f)&&i.jsx("ul",{className:Y(h["rte-treeview-item-children"],N?h["rte-treeview-item-children-open"]:"","treeview-item-children",N?"treeview-item-children-open":""),role:"group","data-open":_,children:f.map((c,P)=>i.jsx(Se,{...c,depth:L+1,borderTypes:An(Be(),P===f.length-1),isCompact:o,onClickElement:ke=>m==null?void 0:m(ke),selectedId:I,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:S,checkedIds:K,onActionIconClick:c.onActionIconClick},c.id))})]})};Se.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onClickElement:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const Wn=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||dn.includes(t.key)&&Gn(e,t)},Gn=(t,e)=>{const n=e.target;if(!t.contains(n)||!Bt(n)||q(n))return;const a=Ot(t);if(a.length===0)return;const s=gn(a,n);if(!(s.rowIndex===-1||s.focusableIndex===-1)){if([je,ln].includes(e.key)){const r=e.key===je?-1:1,o=Le(a,s,r,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ee(t,u),u.focus()}else e.preventDefault();return}if([Ke,un].includes(e.key)){const r=e.key===Ke?-1:1,o=Le(a,s,r,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ee(t,u),u.focus()}else e.preventDefault()}}},Un=(t,e)=>{const n=e.target;t.contains(n)&&Bt(n)&&!q(n)&&Ee(t,n)},Yn=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Ft(t)},M=({items:t,isCompact:e,selectedId:n,onChange:a,onSelectionChange:s,selectedPath:r,hasCheckbox:o,id:u="treeview"})=>{const{internalSelectedId:_,setInternalSelectedId:v}=Nn(n,r,t),[C,f]=y.useState([]),A=y.useRef(null),j=l=>{const m=Array.from(vn(new Set(C),l,t));f(m)};y.useEffect(()=>{if(A.current){const l=A.current;Ft(l);const m=I=>{Wn(I,l)},T=I=>{Un(l,I)},S=I=>{Yn(l,I)};return l.addEventListener("keydown",m,!0),l.addEventListener("focusin",T),l.addEventListener("focusout",S),()=>{l.removeEventListener("keydown",m,!0),l.removeEventListener("focusin",T),l.removeEventListener("focusout",S)}}},[]);const X=()=>!1,xe=l=>{v(l),a==null||a(l),s==null||s(l)};return i.jsx("ul",{className:En["rte-treeview"],"data-compact":e,"data-has-checked-items":X(),role:"tree",ref:A,children:t.map((l,m)=>i.jsx(y.Fragment,{children:i.jsx(Se,{treeId:u,...l,isCompact:e,onClickElement:xe,selectedId:_,hasCheckbox:l.hasCheckbox??o,onCheckedIdsChange:j,checkedIds:C},l.id)},(l.id||l.labelText)+m))})};M.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{id:{defaultValue:{value:'"treeview"',computed:!1},required:!1}},composes:["CoreTreeViewProps","Omit"]};const Ca={title:"Composants/Treeview/Treeview",component:M,decorators:[t=>i.jsx("div",{style:{minWidth:"200px"},children:i.jsx(t,{})})]},$n=[{id:"home",labelText:"Accueil",icon:"home",hasIcon:!0},{id:"settings",labelText:"Paramètres",icon:"settings",hasIcon:!0}],Re=[{id:"documents",labelText:"Documents",icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",hasIcon:!0,items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder",hasIcon:!0}]}],De=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:s=>{alert(`Action clicked for item: ${s}`)},...n&&{actionMenuItems:n},...a.items&&{items:De(a.items,e,n)}})),Ht=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],Hn=De(Re,"more-horiz",Ht),qn=De(Re,"info-i"),qt=[{id:"home",labelText:"Home",icon:"home",hasIcon:!0},...Re],Mn=[{id:"settings",labelText:"Label",icon:"settings",hasIcon:!0,hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:Ht}],be=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],zn=[{id:"folder",labelText:"Folder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasIcon:!0,hasCheckbox:!0,actionIcon:"info-i"}]}]}];function Mt(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",hasIcon:!0,icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",hasIcon:!0,icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",hasIcon:!0,icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",hasIcon:!0,icon:"folder"}]}]}const Z={tags:["skip-ci"],args:{items:$n}},ee={tags:["skip-ci"],args:{items:Mt({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},te={tags:["skip-ci"],args:{items:qt,isCompact:!0}},ne={tags:["skip-ci"],args:{items:Mt({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},ae={tags:["skip-ci"],args:{items:qt},play:async({canvasElement:t})=>{const e=F(t);await Pe(e,"Home","home"),We(e,"Home"),await Pe(e,"Documents","documents"),Vn(e,"Home"),We(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},se={tags:["skip-ci"],args:{items:Hn},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},re={tags:["skip-ci"],args:{items:qn},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},ie={tags:["skip-ci"],args:{items:Mn},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},oe={args:{items:[]},render:()=>{const t=Ge("left"),e=Ge("right");return i.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),i.jsx(M,{items:t})]}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),i.jsx(M,{items:e})]})]})}},ce={args:{items:be,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},de={args:{items:be,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=F(t);await w(e,"Nesting 3b"),p(e,"Nesting 3b"),$(e,"Nesting 2a"),$(e,"Nesting 1"),k(e,"Nesting 2b"),k(e,"Nesting 3a"),k(e,"Nesting 3c"),await w(e,"Nesting 3c"),p(e,"Nesting 3c"),p(e,"Nesting 3b"),p(e,"Nesting 2b"),$(e,"Nesting 1"),$(e,"Nesting 2a"),k(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},le={args:{items:be,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=F(t);await w(e,"Nesting 1");for(const n of H)p(e,n);await w(e,"Nesting 1");for(const n of H)k(e,n);await w(e,"Nesting 3c"),p(e,"Nesting 2b"),p(e,"Nesting 3c"),$(e,"Nesting 1"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),p(e,"Nesting 2a"),p(e,"Nesting 3a"),p(e,"Nesting 3b"),p(e,"Nesting 1");for(const n of H)p(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},ue={args:{items:be,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=F(t);await w(e,"Nesting 1");for(const n of H)p(e,n);await w(e,"Nesting 1");for(const n of H)k(e,n);await w(e,"Nesting 2a"),p(e,"Nesting 2a"),p(e,"Nesting 3a"),p(e,"Nesting 3b"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),k(e,"Nesting 1"),k(e,"Nesting 2a"),k(e,"Nesting 3a"),k(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},he={args:{items:zn.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>i.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[i.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),i.jsx(M,{...t}),i.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=F(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await d.click(n),b(n).toHaveFocus(),await d.tab(),E(e,"folder"),await d.keyboard(ye),E(e,"subfolder"),await d.keyboard(ye),E(e,"file"),await d.keyboard(ye),E(e,"file"),await d.keyboard(Te),E(e,"subfolder"),await d.keyboard(Te),E(e,"folder"),await d.keyboard(Te),E(e,"folder"),await d.keyboard(O),g(e,"folder","chevron"),await d.keyboard(O),g(e,"folder","checkbox"),await d.keyboard(O),g(e,"folder","checkbox"),await d.keyboard(R),g(e,"folder","chevron"),await d.keyboard(R),g(e,"folder","content"),await d.keyboard(R),g(e,"folder","action"),await d.keyboard(R),g(e,"folder","action"),await d.keyboard(O),g(e,"folder","content"),await d.keyboard(W),Zn(e,"folder"),await d.keyboard(O),g(e,"folder","chevron"),await d.keyboard(W);const s=ve(e,"folder");b(s.getAttribute("aria-expanded")).toBe("false"),await d.keyboard(W),b(s.getAttribute("aria-expanded")).toBe("true"),await d.keyboard(O),g(e,"folder","checkbox"),await d.keyboard(W),ea(e,"folder"),await d.keyboard(R),g(e,"folder","chevron"),await d.keyboard(R),g(e,"folder","content"),await d.keyboard(R),g(e,"folder","action"),await d.keyboard(W),b(window.lastActionIconClick).toBe("folder"),await d.tab(),b(a).toHaveFocus(),await d.tab({shift:!0}),E(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},me={args:{items:In,selectedId:Gt,hasCheckbox:!0,id:"treeview-disabled-items-scenario"},decorators:[t=>i.jsx("div",{style:{minWidth:"420px",maxHeight:"520px",overflow:"auto"},children:i.jsx(t,{})})],parameters:{docs:{description:{story:"Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."}}}},Pe=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),s=F(a).getByTestId("treeview-item-main-content-"+n);return d.click(s)},We=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("true")},Vn=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("false")},Ge=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder",hasIcon:!0},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder",hasIcon:!0}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",hasIcon:!0,items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder",hasIcon:!0}]}],H=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],Xn={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function fe(t,e){const n=Xn[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),s=a.find(r=>!r.querySelector('[role="treeitem"]'));return a.length===1?a[0]:s??a[0]}function Jn(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function ge(t){return t.querySelector('input[type="checkbox"]')}function w(t,e){const n=fe(t,e),a=n.children[0];return d.hover(a).then(()=>d.click(Jn(n)))}function p(t,e){const n=ge(fe(t,e));b(n.checked).toBe(!0),b(n.indeterminate).toBe(!1)}function $(t,e){const n=ge(fe(t,e));b(n.indeterminate).toBe(!0)}function k(t,e){const n=ge(fe(t,e));b(n.checked).toBe(!1),b(n.indeterminate).toBe(!1)}function ve(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function Qn(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function g(t,e,n){const a=ve(t,e),s=Qn(a,n);b(document.activeElement).toBe(s)}function E(t,e){g(t,e,"content")}function Zn(t,e){const n=ve(t,e);b(n.getAttribute("aria-selected")).toBe("true")}function ea(t,e){const n=ve(t,e),a=ge(n);b(a.checked).toBe(!0),b(a.indeterminate).toBe(!1)}var Ue,Ye,$e;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: simpleArborescence
  }
}`,...($e=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:$e.source}}};var He,qe,Me;ee.parameters={...ee.parameters,docs:{...(He=ee.parameters)==null?void 0:He.docs,source:{originalSource:`{
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
}`,...(Me=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var ze,Ve,Xe;te.parameters={...te.parameters,docs:{...(ze=te.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(Xe=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;ne.parameters={...ne.parameters,docs:{...(Je=ne.parameters)==null?void 0:Je.docs,source:{originalSource:`{
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
}`,...(Ze=(Qe=ne.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ae.parameters={...ae.parameters,docs:{...(et=ae.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=ae.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,st,rt;se.parameters={...se.parameters,docs:{...(at=se.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(st=se.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var it,ot,ct;re.parameters={...re.parameters,docs:{...(it=re.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ct=(ot=re.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var dt,lt,ut;ie.parameters={...ie.parameters,docs:{...(dt=ie.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(lt=ie.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var ht,mt,pt;oe.parameters={...oe.parameters,docs:{...(ht=oe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(pt=(mt=oe.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var bt,ft,gt;ce.parameters={...ce.parameters,docs:{...(bt=ce.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(gt=(ft=ce.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var vt,xt,wt;de.parameters={...de.parameters,docs:{...(vt=de.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=de.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var kt,yt,Tt;le.parameters={...le.parameters,docs:{...(kt=le.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Tt=(yt=le.parameters)==null?void 0:yt.docs)==null?void 0:Tt.source}}};var It,Nt,Et;ue.parameters={...ue.parameters,docs:{...(It=ue.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Et=(Nt=ue.parameters)==null?void 0:Nt.docs)==null?void 0:Et.source}}};var _t,Ct,St;he.parameters={...he.parameters,docs:{...(_t=he.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(St=(Ct=he.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Rt,Dt,At;me.parameters={...me.parameters,docs:{...(Rt=me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(At=(Dt=me.parameters)==null?void 0:Dt.docs)==null?void 0:At.source}}};const Sa=["Default","NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation","DisabledItemsScenario"];export{re as ActionIconCustomBehavior,se as ActionIconDropdown,le as CheckboxCascadeChecked,ue as CheckboxCascadeUnchecked,de as CheckboxIndeterminate,ce as CheckboxNesting,te as Compact,Z as Default,me as DisabledItemsScenario,he as KeyboardNavigation,ee as NestedItems,ne as PreselectedState,ae as SelectionExclusive,oe as SelectionIndependence,ie as WithBadge,Sa as __namedExportsOrder,Ca as default};
