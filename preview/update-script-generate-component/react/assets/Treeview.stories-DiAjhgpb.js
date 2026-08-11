import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{h as ke,i as ye,f as A,d as S,T as L}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as B,u as d,e as b}from"./index-4rjIhT2C.js";import{r as I}from"./index-G8LIXM5I.js";import{S as Te,E as Ie,e as sn,a as Fe,A as rn,b as je,c as on}from"./keyboard.constants-D1KJQ2-m.js";import{B as cn}from"./Badge-DkJhvK8e.js";import{C as dn}from"./Checkbox-C8hWUkyN.js";import{D as ln}from"./Dropdown-Csevbhnq.js";import{D as un}from"./DropdownItem-CDrtBJ9h.js";import{I as J}from"./Icon-DgLH6pPJ.js";import{c as U}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BMotkXeQ.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";const he="data-treeview-focusable",mn=["checkbox","chevron","content","action"];function St(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(fn).map(n=>({rowElement:n,focusables:gn(n)}))}function Rt(t){return t.hasAttribute(he)}function hn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((s,i)=>({rowIndex:i,focusableIndex:s.focusables.indexOf(e)})).find(s=>s.focusableIndex!==-1)??n}function Ke(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!_e(u.rowElement)){const f=Bt(u);return f?{rowIndex:o,focusableIndex:u.focusables.indexOf(f)}:null}o+=n}return null}const s=t[e.rowIndex];if(!s)return null;let i=e.focusableIndex+n;for(;i>=0&&i<s.focusables.length;){const o=s.focusables[i];if(!q(o))return{rowIndex:e.rowIndex,focusableIndex:i};i+=n}return null}function Ne(t,e){Ft(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Dt(t){Ft(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=St(t);if(e.length){const n=Bt(e[0]);n&&n.setAttribute("tabindex","0")}}function O(t){return!!(t!=null&&t.length)}function pn(t,e,n){const a=z(e),s=new Set(t),i=M(e);return a.length?vn(e,t)?a.forEach(o=>s.delete(o)):(a.forEach(o=>s.add(o)),n!=null&&n.length&&Ee(s,n)):t.has(i)?s.delete(i):(s.add(i),n!=null&&n.length&&Ee(s,n)),n!=null&&n.length?wn(s,n):s}function At(t,e){const a=z(t).slice(1);return!!a.length&&(a==null?void 0:a.every(s=>e.has(s)))}function bn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function Ot(t,e){if(!e.length||!t.length)return;const[n,...a]=e,s=t[n];if(s===void 0)return;if(!a.length)return s;const i=s.items??[];return Ot(i,a)}function _e(t){return(t==null?void 0:t.classList.contains("disabled"))||(t==null?void 0:t.getAttribute("data-disabled"))==="true"}function q(t){const e=t.closest("li.treeview-item");return!!e&&_e(e)}function fn(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function gn(t){return _e(t)?[]:mn.map(e=>Array.from(t.querySelectorAll(`[${he}="${e}"]`)).find(a=>a.closest("li.treeview-item")===t)??null).filter(e=>e!==null)}function Bt(t){const e=t.focusables.find(a=>a.getAttribute(he)==="content");return e&&!q(e)?e:t.focusables.find(a=>!q(a))??null}function Ft(t){return Array.from(t.querySelectorAll(`[${he}]`))}function M(t){return t.id??t.labelText}function z(t){const e=[M(t)],n=t.items??[];for(const a of n)e.push(...z(a));return e}function vn(t,e){const n=O(t.items);return At(t,e)||e.has(M(t))&&!n}function Ee(t,e){for(const n of e){O(n.items)&&Ee(t,n.items);const a=M(n);if(!O(n.items))continue;z(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function jt(t,e){for(const n of e){O(n.items)&&jt(t,n.items);const a=M(n);if(!t.has(a)||!O(n.items))continue;z(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function wn(t,e){const n=new Set(t);return jt(n,e),n}const Kt="phase2-inuit-1-indice-1-active",xn=[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:"phase0-so-sur-t",labelText:"Phase0-SO-SUR-T",disabled:!0,isOpen:!1,items:[{id:"phase0-indice-1",labelText:"Indice 1",disabled:!0}]},{id:"phase1-so-sur-t",labelText:"Phase1-SO-SUR-T",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1",labelText:"Indice 1",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1-child",labelText:"Indice 1",disabled:!0}]}]},{id:"phase2-inuit-1",labelText:"Phase2-SO-INUIT",isOpen:!0,items:[{id:"phase2-inuit-1-indice-1-disabled",labelText:"Indice 1",disabled:!0},{id:"phase2-inuit-1-indice-2-disabled",labelText:"Indice 2",disabled:!0},{id:Kt,labelText:"Indice 1",isOpen:!0,items:[{id:"phase2-inuit-1-rejouer-nested",labelText:"Rejouer",icon:"play-circle",hasIcon:!0}]},{id:"phase2-inuit-1-indice-3",labelText:"Indice 3"},{id:"phase2-inuit-1-rejouer",labelText:"Rejouer",icon:"play-circle",hasIcon:!0}]},{id:"phase2-inuit-2",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-2-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-3",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-3-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-4",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-4-indice-1",labelText:"Indice 1"}]},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",hasIcon:!0,actionIcon:"add-circle"}]}],kn=(t,e,n)=>{const[a,s]=I.useState(t||null),i=I.useCallback((o,u)=>{const C=bn(o),f=Ot(u,C),D=(f==null?void 0:f.id)??(f==null?void 0:f.labelText);s(D||null)},[]);return I.useEffect(()=>{t?s(t):e&&n&&i(e,n)},[t,e,n,i]),{internalSelectedId:a,setInternalSelectedId:s}},yn={"rte-treeview":"_rte-treeview_gnncd_1"},Pt=16,Tn=32,In=24,W={viewBox:"0 0 16 32",width:Pt,height:Tn},Nn={vertical:{...W,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...W,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...W,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...W,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...W,elements:[]}},G={viewBox:"0 0 16 24",width:Pt,height:In},En={vertical:{...G,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...G,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...G,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...G,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...G,elements:[]}};function R(t){return!!(t!=null&&t.length)}function _n(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:s}=t;if(n)return Array(e).fill("spacer");const i=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;i.push(u?a[o]:Bn(a[o]))}return e&&i.length&&!s&&i.push("horizontal"),i}function Cn(t,e){const n=e?"corner":"branch";return[...t,n]}function Sn(t,e){return t&&!e}function Rn(t,e){const a=Lt(t).slice(1);if(!a.length)return!1;const s=a.filter(i=>e.has(i)).length;return!!s&&s<a.length}function Dn(t){return`treeview-checkbox-${t}`}function An({treeId:t,path:e,itemId:n}){const a=e.join("-"),s=`${t}__${a}`;return n?`${s}__${n}`:s}function On(t){return t.id??t.labelText}function Lt(t){const e=[On(t)],n=t.items??[];for(const a of n)e.push(...Lt(a));return e}function Bn(t){return t==="corner"?"spacer":"vertical"}const Q={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},Wt=({isCompact:t,borderType:e})=>{const n=()=>(t?En:Nn)[e];return r.jsx("div",{className:Q["rte-treeview-item-border-container"],"data-is-compact":t,children:r.jsx("svg",{className:U(Q["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,s)=>r.jsx(r.Fragment,{children:a.kind==="path"?r.jsx("path",{className:Q["rte-treeview-item-border-path"],d:a.d},s):r.jsx("line",{className:Q["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},s)},s))})})};Wt.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const Fn=(t,e,n,a)=>{const s=a?new Set(a):new Set,i={id:t,labelText:e,items:n},o=O(n);return At(i,s)||s.has(i.id)&&!o},m={"rte-treeview-item":"_rte-treeview-item_14w8e_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_14w8e_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_14w8e_12","rte-treeview-item-row":"_rte-treeview-item-row_14w8e_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_14w8e_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_14w8e_25","rte-treeview-item-content":"_rte-treeview-item-content_14w8e_42","rte-treeview-item-icon":"_rte-treeview-item-icon_14w8e_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_14w8e_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_14w8e_116","rte-treeview-item-action":"_rte-treeview-item-action_14w8e_116","rte-treeview-item-label":"_rte-treeview-item-label_14w8e_236","rte-treeview-item-children":"_rte-treeview-item-children_14w8e_250","rte-treeview-item-children-open":"_rte-treeview-item-children-open_14w8e_265"},Ce=({id:t,treeId:e,itemIndex:n,labelText:a,icon:s,disabled:i,isCompact:o,hasCheckbox:u,isOpen:C,hasIcon:f,hasBadge:D,items:h,borderTypes:V,actionIcon:F,actionMenuItems:X,depth:l,onOpenChange:k,onChange:w,onActionIconClick:N,onCheckedIdsChange:y,selectedId:ve,checkedIds:j})=>{const[K]=I.useState(l||0),[E,$t]=I.useState(C||!1),[qt,we]=I.useState(!1),v=t||a,De=Fn(v,a,h??[],j??[]),Ae=Rn({id:v,labelText:a,items:h??[]},new Set(j)),Ht=c=>{c.stopPropagation(),c.preventDefault(),!i&&(N==null||N(v))},Mt=c=>{if(c.key==="Enter"||c.key===" "){if(c.preventDefault(),c.stopPropagation(),i)return;N==null||N(v)}},zt=c=>{i||(c.stopPropagation(),w==null||w(v))},Oe=()=>V||[],Vt=_n({depth:K,isCompact:o,resolvedBorderTypes:Oe(),hasChildren:R(h)}),Xt=()=>{Sn(R(h),!!i)&&($t(c=>!c),k==null||k(v,!E))},Jt=c=>{c.stopPropagation(),c.preventDefault(),!i&&we(!0)},Qt=c=>{if([Te,Ie].includes(c.key)){if(c.stopPropagation(),c.preventDefault(),i)return;we(!0)}},Zt=Dn(An({treeId:e,path:[n],itemId:v})),en=c=>{if([Te,Ie].includes(c.key)){if(c.preventDefault(),i)return;Be()}},Be=()=>{i||y==null||y({id:v,labelText:a,items:h})},tn=c=>{if([Te,Ie].includes(c.key)){if(c.preventDefault(),i)return;w==null||w(v)}};return r.jsxs("li",{className:U(m["rte-treeview-item"],"treeview-item"),"data-disabled":i,"data-item-id":v,"data-has-children":R(h),"data-is-expanded":E&&R(h),"data-is-compact":o,"data-root-depth":K===0,"data-is-selected":ve===v,"data-depth":K,role:"treeitem","aria-disabled":i?!0:void 0,"aria-expanded":R(h)?E:void 0,"aria-selected":ve===v,"aria-level":K+1,"data-has-checked-items":j&&j.length>0,children:[r.jsxs("div",{className:m["rte-treeview-item-row"],children:[u&&r.jsx("div",{className:m["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":Ae?"mixed":De?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:en,children:r.jsx(dn,{id:Zt,label:a,showLabel:!1,tabIndex:-1,disabled:i,onChange:Be,checked:De,indeterminate:Ae})}),r.jsxs("div",{className:m["rte-treeview-item-borders-container"],children:[Vt.map((c,P)=>r.jsx(Wt,{isCompact:!!o,borderType:c},P)),R(h)&&r.jsx("button",{type:"button",className:U(m["rte-treeview-item-chevron"],E?m["rte-treeview-item-chevron-open"]:""),onClick:Xt,"aria-label":`${E?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:i,tabIndex:-1,"data-treeview-focusable":"chevron",children:r.jsx(J,{name:E?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),r.jsx("div",{className:m["rte-treeview-item-content-wrapper"],children:r.jsxs("div",{className:m["rte-treeview-item-main-content"],onClick:zt,onKeyDown:tn,"data-testid":`treeview-item-main-content-${t}`,children:[f&&s&&!o&&r.jsx(J,{name:s,className:m["rte-treeview-item-icon"],size:16}),r.jsx("div",{className:U(m["rte-treeview-item-content"],o?m["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:r.jsxs("span",{className:m["rte-treeview-item-label"],children:[" ",a," "]})}),D&&r.jsx(cn,{badgeType:"indicator",content:"empty",size:"s"}),F&&r.jsx(r.Fragment,{children:X?r.jsx("div",{className:m["rte-treeview-item-action"],children:r.jsx(ln,{dropdownId:`${v}-action-menu`,isOpen:qt,autoClose:!0,onClose:()=>{we(!1)},trigger:r.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:i,onClick:Jt,onKeyDown:Qt,children:r.jsx(J,{name:F,size:16})}),children:X.map(({label:c,leftIcon:P,hasSeparator:xe,onClick:nn},an)=>r.jsx(un,{label:c,leftIcon:P,hasSeparator:xe,onClick:nn,disabled:i},an))})}):r.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:i,onClick:Ht,onKeyDown:Mt,children:r.jsx(J,{name:F,size:16})})})]})})]}),R(h)&&r.jsx("ul",{className:U(m["rte-treeview-item-children"],E?m["rte-treeview-item-children-open"]:"","treeview-item-children",E?"treeview-item-children-open":""),role:"group","data-open":C,children:h.map((c,P)=>r.jsx(Ce,{...c,depth:K+1,borderTypes:Cn(Oe(),P===h.length-1),isCompact:o,onChange:xe=>w==null?void 0:w(xe),selectedId:ve,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:y,checkedIds:j,onActionIconClick:c.onActionIconClick},c.id))})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const jn=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||sn.includes(t.key)&&Kn(e,t)},Kn=(t,e)=>{const n=e.target;if(!t.contains(n)||!Rt(n)||q(n))return;const a=St(t);if(a.length===0)return;const s=hn(a,n);if(!(s.rowIndex===-1||s.focusableIndex===-1)){if([Fe,rn].includes(e.key)){const i=e.key===Fe?-1:1,o=Ke(a,s,i,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ne(t,u),u.focus()}else e.preventDefault();return}if([je,on].includes(e.key)){const i=e.key===je?-1:1,o=Ke(a,s,i,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ne(t,u),u.focus()}else e.preventDefault()}}},Pn=(t,e)=>{const n=e.target;t.contains(n)&&Rt(n)&&!q(n)&&Ne(t,n)},Ln=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Dt(t)},H=({items:t,isCompact:e,selectedId:n,onChange:a,selectedPath:s,hasCheckbox:i,id:o="treeview"})=>{const{internalSelectedId:u,setInternalSelectedId:C}=kn(n,s,t),[f,D]=I.useState([]),h=I.useRef(null),V=l=>{const k=Array.from(pn(new Set(f),l,t));D(k)};I.useEffect(()=>{if(h.current){const l=h.current;Dt(l);const k=y=>{jn(y,l)},w=y=>{Pn(l,y)},N=y=>{Ln(l,y)};return l.addEventListener("keydown",k,!0),l.addEventListener("focusin",w),l.addEventListener("focusout",N),()=>{l.removeEventListener("keydown",k,!0),l.removeEventListener("focusin",w),l.removeEventListener("focusout",N)}}},[]);const F=()=>!1,X=l=>{C(l),a==null||a(l)};return r.jsx("ul",{className:yn["rte-treeview"],"data-compact":e,"data-has-checked-items":F(),role:"tree",ref:h,children:t.map((l,k)=>r.jsx(I.Fragment,{children:r.jsx(Ce,{treeId:o,...l,isCompact:e,onChange:X,selectedId:u,hasCheckbox:l.hasCheckbox??i,onCheckedIdsChange:V,checkedIds:f},l.id)},(l.id||l.labelText)+k))})};H.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TreeviewItemProps"}],raw:"TreeviewItemProps[]"},description:""},isCompact:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"checkedIds"}],return:{name:"void"}}},description:""},selectedPath:{required:!1,tsType:{name:"string"},description:""},hasCheckbox:{required:!1,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"treeview"',computed:!1}}},composes:["Omit"]};const Ta={title:"Composants/Treeview/Treeview",component:H,decorators:[t=>r.jsx("div",{style:{minWidth:"200px"},children:r.jsx(t,{})})]},Se=[{id:"home",labelText:"Home",icon:"home",hasIcon:!0},{id:"documents",labelText:"Documents",icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",hasIcon:!0,items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder",hasIcon:!0}]}],Re=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:s=>{alert(`Action clicked for item: ${s}`)},...n&&{actionMenuItems:n},...a.items&&{items:Re(a.items,e,n)}})),Gt=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],Wn=Re(Se,"more-horiz",Gt),Gn=Re(Se,"info-i"),Ut=Se,Un=[{id:"settings",labelText:"Label",icon:"settings",hasIcon:!0,hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:Gt}],pe=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],Yn=[{id:"folder",labelText:"Folder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",hasIcon:!0,isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasIcon:!0,hasCheckbox:!0,actionIcon:"info-i"}]}]}];function Yt(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",hasIcon:!0,icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",hasIcon:!0,icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",hasIcon:!0,icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",hasIcon:!0,icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",hasIcon:!0,icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",hasIcon:!0,icon:"folder"}]}]}const Z={tags:["skip-ci"],args:{items:Yt({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},ee={tags:["skip-ci"],args:{items:Ut,isCompact:!0}},te={tags:["skip-ci"],args:{items:Yt({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},ne={tags:["skip-ci"],args:{items:Ut},play:async({canvasElement:t})=>{const e=B(t);await Pe(e,"Home","home"),Le(e,"Home"),await Pe(e,"Documents","documents"),$n(e,"Home"),Le(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},ae={tags:["skip-ci"],args:{items:Wn},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},se={tags:["skip-ci"],args:{items:Gn},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},ie={tags:["skip-ci"],args:{items:Un},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},re={args:{items:[]},render:()=>{const t=We("left"),e=We("right");return r.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),r.jsx(H,{items:t})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),r.jsx(H,{items:e})]})]})}},oe={args:{items:pe,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},ce={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 3b"),p(e,"Nesting 3b"),Y(e,"Nesting 2a"),Y(e,"Nesting 1"),T(e,"Nesting 2b"),T(e,"Nesting 3a"),T(e,"Nesting 3c"),await x(e,"Nesting 3c"),p(e,"Nesting 3c"),p(e,"Nesting 3b"),p(e,"Nesting 2b"),Y(e,"Nesting 1"),Y(e,"Nesting 2a"),T(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},de={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 1");for(const n of $)p(e,n);await x(e,"Nesting 1");for(const n of $)T(e,n);await x(e,"Nesting 3c"),p(e,"Nesting 2b"),p(e,"Nesting 3c"),Y(e,"Nesting 1"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),p(e,"Nesting 2a"),p(e,"Nesting 3a"),p(e,"Nesting 3b"),p(e,"Nesting 1");for(const n of $)p(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},le={args:{items:pe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await x(e,"Nesting 1");for(const n of $)p(e,n);await x(e,"Nesting 1");for(const n of $)T(e,n);await x(e,"Nesting 2a"),p(e,"Nesting 2a"),p(e,"Nesting 3a"),p(e,"Nesting 3b"),await x(e,"Nesting 3a"),await x(e,"Nesting 3b"),T(e,"Nesting 1"),T(e,"Nesting 2a"),T(e,"Nesting 3a"),T(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},ue={args:{items:Yn.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>r.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[r.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),r.jsx(H,{...t}),r.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=B(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await d.click(n),b(n).toHaveFocus(),await d.tab(),_(e,"folder"),await d.keyboard(ke),_(e,"subfolder"),await d.keyboard(ke),_(e,"file"),await d.keyboard(ke),_(e,"file"),await d.keyboard(ye),_(e,"subfolder"),await d.keyboard(ye),_(e,"folder"),await d.keyboard(ye),_(e,"folder"),await d.keyboard(A),g(e,"folder","chevron"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(S),g(e,"folder","chevron"),await d.keyboard(S),g(e,"folder","content"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(A),g(e,"folder","content"),await d.keyboard(L),zn(e,"folder"),await d.keyboard(A),g(e,"folder","chevron"),await d.keyboard(L);const s=ge(e,"folder");b(s.getAttribute("aria-expanded")).toBe("false"),await d.keyboard(L),b(s.getAttribute("aria-expanded")).toBe("true"),await d.keyboard(A),g(e,"folder","checkbox"),await d.keyboard(L),Vn(e,"folder"),await d.keyboard(S),g(e,"folder","chevron"),await d.keyboard(S),g(e,"folder","content"),await d.keyboard(S),g(e,"folder","action"),await d.keyboard(L),b(window.lastActionIconClick).toBe("folder"),await d.tab(),b(a).toHaveFocus(),await d.tab({shift:!0}),_(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},me={args:{items:xn,selectedId:Kt,hasCheckbox:!0,id:"treeview-disabled-items-scenario"},decorators:[t=>r.jsx("div",{style:{minWidth:"420px",maxHeight:"520px",overflow:"auto"},children:r.jsx(t,{})})],parameters:{docs:{description:{story:"Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."}}}},Pe=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),s=B(a).getByTestId("treeview-item-main-content-"+n);return d.click(s)},Le=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("true")},$n=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("false")},We=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",hasIcon:!0,isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder",hasIcon:!0},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder",hasIcon:!0}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",hasIcon:!0,items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder",hasIcon:!0}]}],$=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],qn={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function be(t,e){const n=qn[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),s=a.find(i=>!i.querySelector('[role="treeitem"]'));return a.length===1?a[0]:s??a[0]}function Hn(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function fe(t){return t.querySelector('input[type="checkbox"]')}function x(t,e){const n=be(t,e),a=n.children[0];return d.hover(a).then(()=>d.click(Hn(n)))}function p(t,e){const n=fe(be(t,e));b(n.checked).toBe(!0),b(n.indeterminate).toBe(!1)}function Y(t,e){const n=fe(be(t,e));b(n.indeterminate).toBe(!0)}function T(t,e){const n=fe(be(t,e));b(n.checked).toBe(!1),b(n.indeterminate).toBe(!1)}function ge(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function Mn(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function g(t,e,n){const a=ge(t,e),s=Mn(a,n);b(document.activeElement).toBe(s)}function _(t,e){g(t,e,"content")}function zn(t,e){const n=ge(t,e);b(n.getAttribute("aria-selected")).toBe("true")}function Vn(t,e){const n=ge(t,e),a=fe(n);b(a.checked).toBe(!0),b(a.indeterminate).toBe(!1)}var Ge,Ue,Ye;Z.parameters={...Z.parameters,docs:{...(Ge=Z.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Ye=(Ue=Z.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var $e,qe,He;ee.parameters={...ee.parameters,docs:{...($e=ee.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(He=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Me,ze,Ve;te.parameters={...te.parameters,docs:{...(Me=te.parameters)==null?void 0:Me.docs,source:{originalSource:`{
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
}`,...(Ve=(ze=te.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Xe,Je,Qe;ne.parameters={...ne.parameters,docs:{...(Xe=ne.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=ne.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;ae.parameters={...ae.parameters,docs:{...(Ze=ae.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ae.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,st;se.parameters={...se.parameters,docs:{...(nt=se.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(at=se.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var it,rt,ot;ie.parameters={...ie.parameters,docs:{...(it=ie.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(rt=ie.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var ct,dt,lt;re.parameters={...re.parameters,docs:{...(ct=re.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(dt=re.parameters)==null?void 0:dt.docs)==null?void 0:lt.source}}};var ut,mt,ht;oe.parameters={...oe.parameters,docs:{...(ut=oe.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(ht=(mt=oe.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var pt,bt,ft;ce.parameters={...ce.parameters,docs:{...(pt=ce.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ft=(bt=ce.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var gt,vt,wt;de.parameters={...de.parameters,docs:{...(gt=de.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(wt=(vt=de.parameters)==null?void 0:vt.docs)==null?void 0:wt.source}}};var xt,kt,yt;le.parameters={...le.parameters,docs:{...(xt=le.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(yt=(kt=le.parameters)==null?void 0:kt.docs)==null?void 0:yt.source}}};var Tt,It,Nt;ue.parameters={...ue.parameters,docs:{...(Tt=ue.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Nt=(It=ue.parameters)==null?void 0:It.docs)==null?void 0:Nt.source}}};var Et,_t,Ct;me.parameters={...me.parameters,docs:{...(Et=me.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Ct=(_t=me.parameters)==null?void 0:_t.docs)==null?void 0:Ct.source}}};const Ia=["NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation","DisabledItemsScenario"];export{se as ActionIconCustomBehavior,ae as ActionIconDropdown,de as CheckboxCascadeChecked,le as CheckboxCascadeUnchecked,ce as CheckboxIndeterminate,oe as CheckboxNesting,ee as Compact,me as DisabledItemsScenario,ue as KeyboardNavigation,Z as NestedItems,te as PreselectedState,ne as SelectionExclusive,re as SelectionIndependence,ie as WithBadge,Ia as __namedExportsOrder,Ta as default};
