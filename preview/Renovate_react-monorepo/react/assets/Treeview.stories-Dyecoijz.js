import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{h as ke,i as ye,f as A,d as S,T as L}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as B,u as l,e as b}from"./index-4rjIhT2C.js";import{r as T}from"./index-G8LIXM5I.js";import{S as Te,E as Ie,e as cn,a as Fe,A as dn,b as je,c as ln}from"./keyboard.constants-D1KJQ2-m.js";import{B as un}from"./Badge-DkJhvK8e.js";import{C as mn}from"./Checkbox-ClER9-ap.js";import{D as pn}from"./Dropdown-BM0K4W_t.js";import{D as hn}from"./DropdownItem-DPjyLYQC.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{c as G}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";const pe="data-treeview-focusable",bn=["checkbox","chevron","content","action"];function At(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(xn).map(n=>({rowElement:n,focusables:wn(n)}))}function Ot(t){return t.hasAttribute(pe)}function fn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((s,i)=>({rowIndex:i,focusableIndex:s.focusables.indexOf(e)})).find(s=>s.focusableIndex!==-1)??n}function Ke(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!_e(u.rowElement)){const g=Kt(u);return g?{rowIndex:o,focusableIndex:u.focusables.indexOf(g)}:null}o+=n}return null}const s=t[e.rowIndex];if(!s)return null;let i=e.focusableIndex+n;for(;i>=0&&i<s.focusables.length;){const o=s.focusables[i];if(!$(o))return{rowIndex:e.rowIndex,focusableIndex:i};i+=n}return null}function Ne(t,e){Lt(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Bt(t){Lt(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=At(t);if(e.length){const n=Kt(e[0]);n&&n.setAttribute("tabindex","0")}}function O(t){return!!(t!=null&&t.length)}function gn(t,e,n){const a=M(e),s=new Set(t),i=q(e);return a.length?kn(e,t)?a.forEach(o=>s.delete(o)):(a.forEach(o=>s.add(o)),n!=null&&n.length&&Ee(s,n)):t.has(i)?s.delete(i):(s.add(i),n!=null&&n.length&&Ee(s,n)),n!=null&&n.length?yn(s,n):s}function Ft(t,e){const a=M(t).slice(1);return!!a.length&&(a==null?void 0:a.every(s=>e.has(s)))}function vn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function jt(t,e){if(!e.length||!t.length)return;const[n,...a]=e,s=t[n];if(s===void 0)return;if(!a.length)return s;const i=s.items??[];return jt(i,a)}function _e(t){return(t==null?void 0:t.classList.contains("disabled"))||(t==null?void 0:t.getAttribute("data-disabled"))==="true"}function $(t){const e=t.closest("li.treeview-item");return!!e&&_e(e)}function xn(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function wn(t){return _e(t)?[]:bn.map(e=>Array.from(t.querySelectorAll(`[${pe}="${e}"]`)).find(a=>a.closest("li.treeview-item")===t)??null).filter(e=>e!==null)}function Kt(t){const e=t.focusables.find(a=>a.getAttribute(pe)==="content");return e&&!$(e)?e:t.focusables.find(a=>!$(a))??null}function Lt(t){return Array.from(t.querySelectorAll(`[${pe}]`))}function q(t){return t.id??t.labelText}function M(t){const e=[q(t)],n=t.items??[];for(const a of n)e.push(...M(a));return e}function kn(t,e){const n=O(t.items);return Ft(t,e)||e.has(q(t))&&!n}function Ee(t,e){for(const n of e){O(n.items)&&Ee(t,n.items);const a=q(n);if(!O(n.items))continue;M(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function Pt(t,e){for(const n of e){O(n.items)&&Pt(t,n.items);const a=q(n);if(!t.has(a)||!O(n.items))continue;M(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function yn(t,e){const n=new Set(t);return Pt(n,e),n}const Wt="phase2-inuit-1-indice-1-active",Tn=[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",isOpen:!0,items:[{id:"phase0-so-sur-t",labelText:"Phase0-SO-SUR-T",disabled:!0,isOpen:!1,items:[{id:"phase0-indice-1",labelText:"Indice 1",disabled:!0}]},{id:"phase1-so-sur-t",labelText:"Phase1-SO-SUR-T",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1",labelText:"Indice 1",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1-child",labelText:"Indice 1",disabled:!0}]}]},{id:"phase2-inuit-1",labelText:"Phase2-SO-INUIT",isOpen:!0,items:[{id:"phase2-inuit-1-indice-1-disabled",labelText:"Indice 1",disabled:!0},{id:"phase2-inuit-1-indice-2-disabled",labelText:"Indice 2",disabled:!0},{id:Wt,labelText:"Indice 1",isOpen:!0,items:[{id:"phase2-inuit-1-rejouer-nested",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-1-indice-3",labelText:"Indice 3"},{id:"phase2-inuit-1-rejouer",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-2",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-2-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-3",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-3-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-4",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-4-indice-1",labelText:"Indice 1"}]},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",actionIcon:"add-circle"}]}],In=(t,e,n)=>{const[a,s]=T.useState(t||null),i=T.useCallback((o,u)=>{const E=vn(o),g=jt(u,E),m=(g==null?void 0:g.id)??(g==null?void 0:g.labelText);s(m||null)},[]);return T.useEffect(()=>{t?s(t):e&&n&&i(e,n)},[t,e,n,i]),{internalSelectedId:a,setInternalSelectedId:s}},Nn={"rte-treeview":"_rte-treeview_gnncd_1"},Gt=16,En=32,_n=24,P={viewBox:"0 0 16 32",width:Gt,height:En},Cn={vertical:{...P,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...P,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...P,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...P,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...P,elements:[]}},W={viewBox:"0 0 16 24",width:Gt,height:_n},Sn={vertical:{...W,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...W,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...W,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...W,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...W,elements:[]}};function R(t){return!!(t!=null&&t.length)}function Rn(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:s}=t;if(n)return Array(e).fill("spacer");const i=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;i.push(u?a[o]:Kn(a[o]))}return e&&i.length&&!s&&i.push("horizontal"),i}function Dn(t,e){const n=e?"corner":"branch";return[...t,n]}function An(t,e){return t&&!e}function On(t,e){const a=Ut(t).slice(1);if(!a.length)return!1;const s=a.filter(i=>e.has(i)).length;return!!s&&s<a.length}function Bn(t){return`treeview-checkbox-${t}`}function Fn({treeId:t,path:e,itemId:n}){const a=e.join("-"),s=`${t}__${a}`;return n?`${s}__${n}`:s}function jn(t){return t.id??t.labelText}function Ut(t){const e=[jn(t)],n=t.items??[];for(const a of n)e.push(...Ut(a));return e}function Kn(t){return t==="corner"?"spacer":"vertical"}const J={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},Yt=({isCompact:t,borderType:e})=>{const n=()=>(t?Sn:Cn)[e];return r.jsx("div",{className:J["rte-treeview-item-border-container"],"data-is-compact":t,children:r.jsx("svg",{className:G(J["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,s)=>r.jsx(r.Fragment,{children:a.kind==="path"?r.jsx("path",{className:J["rte-treeview-item-border-path"],d:a.d},s):r.jsx("line",{className:J["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},s)},s))})})};Yt.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const Ln=(t,e,n,a)=>{const s=a?new Set(a):new Set,i={id:t,labelText:e,items:n},o=O(n);return Ft(i,s)||s.has(i.id)&&!o},p={"rte-treeview-item":"_rte-treeview-item_14w8e_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_14w8e_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_14w8e_12","rte-treeview-item-row":"_rte-treeview-item-row_14w8e_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_14w8e_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_14w8e_25","rte-treeview-item-content":"_rte-treeview-item-content_14w8e_42","rte-treeview-item-icon":"_rte-treeview-item-icon_14w8e_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_14w8e_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_14w8e_116","rte-treeview-item-action":"_rte-treeview-item-action_14w8e_116","rte-treeview-item-label":"_rte-treeview-item-label_14w8e_236","rte-treeview-item-children":"_rte-treeview-item-children_14w8e_250","rte-treeview-item-children-open":"_rte-treeview-item-children-open_14w8e_265"},Ce=({id:t,treeId:e,itemIndex:n,labelText:a,icon:s,disabled:i,isCompact:o,hasCheckbox:u,isOpen:E,hasBadge:g,items:m,borderTypes:z,actionIcon:_,actionMenuItems:V,depth:ve,onOpenChange:F,onClickElement:d,onActionIconClick:v,onCheckedIdsChange:C,selectedId:D,checkedIds:k})=>{const[j]=T.useState(ve||0),[I,Mt]=T.useState(E||!1),[zt,xe]=T.useState(!1),x=t||a,De=Ln(x,a,m??[],k??[]),Ae=On({id:x,labelText:a,items:m??[]},new Set(k)),Vt=c=>{c.stopPropagation(),c.preventDefault(),!i&&(v==null||v(x))},Xt=c=>{if(c.key==="Enter"||c.key===" "){if(c.preventDefault(),c.stopPropagation(),i)return;v==null||v(x)}},Jt=c=>{i||(c.stopPropagation(),d==null||d(x))},Oe=()=>z||[],Qt=Rn({depth:j,isCompact:o,resolvedBorderTypes:Oe(),hasChildren:R(m)}),Zt=()=>{An(R(m),!!i)&&(Mt(c=>!c),F==null||F(x,!I))},en=c=>{c.stopPropagation(),c.preventDefault(),!i&&xe(!0)},tn=c=>{if([Te,Ie].includes(c.key)){if(c.stopPropagation(),c.preventDefault(),i)return;xe(!0)}},nn=Bn(Fn({treeId:e,path:[n],itemId:x})),an=c=>{if([Te,Ie].includes(c.key)){if(c.preventDefault(),i)return;Be()}},Be=()=>{i||C==null||C({id:x,labelText:a,items:m})},sn=c=>{if([Te,Ie].includes(c.key)){if(c.preventDefault(),i)return;d==null||d(x)}};return r.jsxs("li",{className:G(p["rte-treeview-item"],"treeview-item"),"data-disabled":i,"data-item-id":x,"data-has-children":R(m),"data-is-expanded":I&&R(m),"data-is-compact":o,"data-root-depth":j===0,"data-is-selected":D===x,"data-depth":j,role:"treeitem","aria-disabled":i?!0:void 0,"aria-expanded":R(m)?I:void 0,"aria-selected":D===x,"aria-level":j+1,"data-has-checked-items":k&&k.length>0,children:[r.jsxs("div",{className:p["rte-treeview-item-row"],children:[u&&r.jsx("div",{className:p["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":Ae?"mixed":De?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:an,children:r.jsx(mn,{id:nn,label:a,showLabel:!1,tabIndex:-1,disabled:i,onChange:Be,checked:De,indeterminate:Ae})}),r.jsxs("div",{className:p["rte-treeview-item-borders-container"],children:[Qt.map((c,K)=>r.jsx(Yt,{isCompact:!!o,borderType:c},K)),R(m)&&r.jsx("button",{type:"button",className:G(p["rte-treeview-item-chevron"],I?p["rte-treeview-item-chevron-open"]:""),onClick:Zt,"aria-label":`${I?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:i,tabIndex:-1,"data-treeview-focusable":"chevron",children:r.jsx(X,{name:I?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),r.jsx("div",{className:p["rte-treeview-item-content-wrapper"],children:r.jsxs("div",{className:p["rte-treeview-item-main-content"],onClick:Jt,onKeyDown:sn,"data-testid":`treeview-item-main-content-${t}`,children:[s&&!o&&r.jsx(X,{name:s,className:p["rte-treeview-item-icon"],size:16}),r.jsx("div",{className:G(p["rte-treeview-item-content"],o?p["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:r.jsxs("span",{className:p["rte-treeview-item-label"],children:[" ",a," "]})}),g&&r.jsx(un,{badgeType:"indicator",content:"empty",size:"s"}),_&&r.jsx(r.Fragment,{children:V?r.jsx("div",{className:p["rte-treeview-item-action"],children:r.jsx(pn,{dropdownId:`${x}-action-menu`,isOpen:zt,autoClose:!0,onClose:()=>{xe(!1)},trigger:r.jsx("button",{type:"button",className:p["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:i,onClick:en,onKeyDown:tn,children:r.jsx(X,{name:_,size:16})}),children:V.map(({label:c,leftIcon:K,hasSeparator:we,onClick:rn},on)=>r.jsx(hn,{label:c,leftIcon:K,hasSeparator:we,onClick:rn,disabled:i},on))})}):r.jsx("button",{type:"button",className:p["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:i,onClick:Vt,onKeyDown:Xt,children:r.jsx(X,{name:_,size:16})})})]})})]}),R(m)&&r.jsx("ul",{className:G(p["rte-treeview-item-children"],I?p["rte-treeview-item-children-open"]:"","treeview-item-children",I?"treeview-item-children-open":""),role:"group","data-open":E,children:m.map((c,K)=>r.jsx(Ce,{...c,depth:j+1,borderTypes:Dn(Oe(),K===m.length-1),isCompact:o,onClickElement:we=>d==null?void 0:d(we),selectedId:D,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:C,checkedIds:k,onActionIconClick:c.onActionIconClick},c.id))})]})};Ce.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onClickElement:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const Pn=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||cn.includes(t.key)&&Wn(e,t)},Wn=(t,e)=>{const n=e.target;if(!t.contains(n)||!Ot(n)||$(n))return;const a=At(t);if(a.length===0)return;const s=fn(a,n);if(!(s.rowIndex===-1||s.focusableIndex===-1)){if([Fe,dn].includes(e.key)){const i=e.key===Fe?-1:1,o=Ke(a,s,i,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ne(t,u),u.focus()}else e.preventDefault();return}if([je,ln].includes(e.key)){const i=e.key===je?-1:1,o=Ke(a,s,i,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),Ne(t,u),u.focus()}else e.preventDefault()}}},Gn=(t,e)=>{const n=e.target;t.contains(n)&&Ot(n)&&!$(n)&&Ne(t,n)},Un=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Bt(t)},H=({items:t,isCompact:e,selectedId:n,onChange:a,onSelectionChange:s,selectedPath:i,hasCheckbox:o,id:u="treeview"})=>{const{internalSelectedId:E,setInternalSelectedId:g}=In(n,i,t),[m,z]=T.useState([]),_=T.useRef(null),V=d=>{const v=Array.from(gn(new Set(m),d,t));z(v)};T.useEffect(()=>{if(_.current){const d=_.current;Bt(d);const v=k=>{Pn(k,d)},C=k=>{Gn(d,k)},D=k=>{Un(d,k)};return d.addEventListener("keydown",v,!0),d.addEventListener("focusin",C),d.addEventListener("focusout",D),()=>{d.removeEventListener("keydown",v,!0),d.removeEventListener("focusin",C),d.removeEventListener("focusout",D)}}},[]);const ve=()=>!1,F=d=>{g(d),a==null||a(d),s==null||s(d)};return r.jsx("ul",{className:Nn["rte-treeview"],"data-compact":e,"data-has-checked-items":ve(),role:"tree",ref:_,children:t.map((d,v)=>r.jsx(T.Fragment,{children:r.jsx(Ce,{treeId:u,...d,isCompact:e,onClickElement:F,selectedId:E,hasCheckbox:d.hasCheckbox??o,onCheckedIdsChange:V,checkedIds:m},d.id)},(d.id||d.labelText)+v))})};H.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{id:{defaultValue:{value:'"treeview"',computed:!1},required:!1}},composes:["CoreTreeViewProps","Omit"]};const _a={title:"Composants/Treeview/Treeview",component:H,decorators:[t=>r.jsx("div",{style:{minWidth:"200px"},children:r.jsx(t,{})})]},Yn=[{id:"home",labelText:"Accueil",icon:"home"},{id:"settings",labelText:"Paramètres",icon:"settings"}],Se=[{id:"documents",labelText:"Documents",icon:"folder",isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder"}]}],Re=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:s=>{alert(`Action clicked for item: ${s}`)},...n&&{actionMenuItems:n},...a.items&&{items:Re(a.items,e,n)}})),$t=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],$n=Re(Se,"more-horiz",$t),Hn=Re(Se,"info-i"),Ht=[{id:"home",labelText:"Home",icon:"home"},...Se],qn=[{id:"settings",labelText:"Label",icon:"settings",hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:$t}],he=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],Mn=[{id:"folder",labelText:"Folder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasCheckbox:!0,actionIcon:"info-i"}]}]}];function qt(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",icon:"folder"}]}]}const Q={tags:["skip-ci"],args:{items:Yn}},Z={tags:["skip-ci"],args:{items:qt({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},ee={tags:["skip-ci"],args:{items:Ht,isCompact:!0}},te={tags:["skip-ci"],args:{items:qt({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},ne={tags:["skip-ci"],args:{items:Ht},play:async({canvasElement:t})=>{const e=B(t);await Le(e,"Home","home"),Pe(e,"Home"),await Le(e,"Documents","documents"),zn(e,"Home"),Pe(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},ae={tags:["skip-ci"],args:{items:$n},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},se={tags:["skip-ci"],args:{items:Hn},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},ie={tags:["skip-ci"],args:{items:qn},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},re={args:{items:[]},render:()=>{const t=We("left"),e=We("right");return r.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),r.jsx(H,{items:t})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),r.jsx(H,{items:e})]})]})}},oe={args:{items:he,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},ce={args:{items:he,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 3b"),h(e,"Nesting 3b"),U(e,"Nesting 2a"),U(e,"Nesting 1"),y(e,"Nesting 2b"),y(e,"Nesting 3a"),y(e,"Nesting 3c"),await w(e,"Nesting 3c"),h(e,"Nesting 3c"),h(e,"Nesting 3b"),h(e,"Nesting 2b"),U(e,"Nesting 1"),U(e,"Nesting 2a"),y(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},de={args:{items:he,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 1");for(const n of Y)h(e,n);await w(e,"Nesting 1");for(const n of Y)y(e,n);await w(e,"Nesting 3c"),h(e,"Nesting 2b"),h(e,"Nesting 3c"),U(e,"Nesting 1"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),h(e,"Nesting 1");for(const n of Y)h(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},le={args:{items:he,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 1");for(const n of Y)h(e,n);await w(e,"Nesting 1");for(const n of Y)y(e,n);await w(e,"Nesting 2a"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),y(e,"Nesting 1"),y(e,"Nesting 2a"),y(e,"Nesting 3a"),y(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},ue={args:{items:Mn.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>r.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[r.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),r.jsx(H,{...t}),r.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=B(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await l.click(n),b(n).toHaveFocus(),await l.tab(),N(e,"folder"),await l.keyboard(ke),N(e,"subfolder"),await l.keyboard(ke),N(e,"file"),await l.keyboard(ke),N(e,"file"),await l.keyboard(ye),N(e,"subfolder"),await l.keyboard(ye),N(e,"folder"),await l.keyboard(ye),N(e,"folder"),await l.keyboard(A),f(e,"folder","chevron"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(S),f(e,"folder","chevron"),await l.keyboard(S),f(e,"folder","content"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(A),f(e,"folder","content"),await l.keyboard(L),Qn(e,"folder"),await l.keyboard(A),f(e,"folder","chevron"),await l.keyboard(L);const s=ge(e,"folder");b(s.getAttribute("aria-expanded")).toBe("false"),await l.keyboard(L),b(s.getAttribute("aria-expanded")).toBe("true"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(L),Zn(e,"folder"),await l.keyboard(S),f(e,"folder","chevron"),await l.keyboard(S),f(e,"folder","content"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(L),b(window.lastActionIconClick).toBe("folder"),await l.tab(),b(a).toHaveFocus(),await l.tab({shift:!0}),N(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},me={args:{items:Tn,selectedId:Wt,hasCheckbox:!0,id:"treeview-disabled-items-scenario"},decorators:[t=>r.jsx("div",{style:{minWidth:"420px",maxHeight:"520px",overflow:"auto"},children:r.jsx(t,{})})],parameters:{docs:{description:{story:"Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."}}}},Le=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),s=B(a).getByTestId("treeview-item-main-content-"+n);return l.click(s)},Pe=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("true")},zn=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("false")},We=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder"},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder"}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder"}]}],Y=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],Vn={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function be(t,e){const n=Vn[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),s=a.find(i=>!i.querySelector('[role="treeitem"]'));return a.length===1?a[0]:s??a[0]}function Xn(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function fe(t){return t.querySelector('input[type="checkbox"]')}function w(t,e){const n=be(t,e),a=n.children[0];return l.hover(a).then(()=>l.click(Xn(n)))}function h(t,e){const n=fe(be(t,e));b(n.checked).toBe(!0),b(n.indeterminate).toBe(!1)}function U(t,e){const n=fe(be(t,e));b(n.indeterminate).toBe(!0)}function y(t,e){const n=fe(be(t,e));b(n.checked).toBe(!1),b(n.indeterminate).toBe(!1)}function ge(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function Jn(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function f(t,e,n){const a=ge(t,e),s=Jn(a,n);b(document.activeElement).toBe(s)}function N(t,e){f(t,e,"content")}function Qn(t,e){const n=ge(t,e);b(n.getAttribute("aria-selected")).toBe("true")}function Zn(t,e){const n=ge(t,e),a=fe(n);b(a.checked).toBe(!0),b(a.indeterminate).toBe(!1)}var Ge,Ue,Ye;Q.parameters={...Q.parameters,docs:{...(Ge=Q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: simpleArborescence
  }
}`,...(Ye=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var $e,He,qe;Z.parameters={...Z.parameters,docs:{...($e=Z.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(qe=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:qe.source}}};var Me,ze,Ve;ee.parameters={...ee.parameters,docs:{...(Me=ee.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(Ve=(ze=ee.parameters)==null?void 0:ze.docs)==null?void 0:Ve.source}}};var Xe,Je,Qe;te.parameters={...te.parameters,docs:{...(Xe=te.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
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
}`,...(Qe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;ne.parameters={...ne.parameters,docs:{...(Ze=ne.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
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
}`,...(tt=(et=ne.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};var nt,at,st;ae.parameters={...ae.parameters,docs:{...(nt=ae.parameters)==null?void 0:nt.docs,source:{originalSource:`{
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
}`,...(st=(at=ae.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var it,rt,ot;se.parameters={...se.parameters,docs:{...(it=se.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ot=(rt=se.parameters)==null?void 0:rt.docs)==null?void 0:ot.source}}};var ct,dt,lt;ie.parameters={...ie.parameters,docs:{...(ct=ie.parameters)==null?void 0:ct.docs,source:{originalSource:`{
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
}`,...(lt=(dt=ie.parameters)==null?void 0:dt.docs)==null?void 0:lt.source}}};var ut,mt,pt;re.parameters={...re.parameters,docs:{...(ut=re.parameters)==null?void 0:ut.docs,source:{originalSource:`{
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
}`,...(pt=(mt=re.parameters)==null?void 0:mt.docs)==null?void 0:pt.source}}};var ht,bt,ft;oe.parameters={...oe.parameters,docs:{...(ht=oe.parameters)==null?void 0:ht.docs,source:{originalSource:`{
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
}`,...(ft=(bt=oe.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var gt,vt,xt;ce.parameters={...ce.parameters,docs:{...(gt=ce.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(xt=(vt=ce.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var wt,kt,yt;de.parameters={...de.parameters,docs:{...(wt=de.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(yt=(kt=de.parameters)==null?void 0:kt.docs)==null?void 0:yt.source}}};var Tt,It,Nt;le.parameters={...le.parameters,docs:{...(Tt=le.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Nt=(It=le.parameters)==null?void 0:It.docs)==null?void 0:Nt.source}}};var Et,_t,Ct;ue.parameters={...ue.parameters,docs:{...(Et=ue.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Ct=(_t=ue.parameters)==null?void 0:_t.docs)==null?void 0:Ct.source}}};var St,Rt,Dt;me.parameters={...me.parameters,docs:{...(St=me.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Dt=(Rt=me.parameters)==null?void 0:Rt.docs)==null?void 0:Dt.source}}};const Ca=["Default","NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation","DisabledItemsScenario"];export{se as ActionIconCustomBehavior,ae as ActionIconDropdown,de as CheckboxCascadeChecked,le as CheckboxCascadeUnchecked,ce as CheckboxIndeterminate,oe as CheckboxNesting,ee as Compact,Q as Default,me as DisabledItemsScenario,ue as KeyboardNavigation,Z as NestedItems,te as PreselectedState,ne as SelectionExclusive,re as SelectionIndependence,ie as WithBadge,Ca as __namedExportsOrder,_a as default};
