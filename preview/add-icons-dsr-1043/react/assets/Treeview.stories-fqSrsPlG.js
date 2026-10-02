import{j as i}from"./jsx-runtime-Cf8x2fCZ.js";import{h as Te,i as Ie,f as A,d as S,T as K}from"./keyboard-test.constants-D8znW6ct.js";import"./timepicker.constants-CynrC_9x.js";import{w as B,u as l,e as b}from"./index-4rjIhT2C.js";import{r as T}from"./index-G8LIXM5I.js";import{S as Ne,E as Ee,e as wn,a as Pe,A as kn,b as We,c as yn}from"./keyboard.constants-D1KJQ2-m.js";import{B as Tn}from"./Badge-DUkuUEsZ.js";import{C as In}from"./Checkbox-CMrM2eNu.js";import{D as Nn}from"./Dropdown-CyecDUeK.js";import{D as En}from"./DropdownItem-2YWJ-d9h.js";import{I as X}from"./Icon-DBkoQNiA.js";import{c as G}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Divider-BVZUrQ0d.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./useActiveKeyboard-DaOmFJe_.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";const be="data-treeview-focusable",_n=["checkbox","chevron","content","action"];function Ut(t){return Array.from(t.querySelectorAll("li.treeview-item[role='treeitem']")).filter(Rn).map(n=>({rowElement:n,focusables:An(n)}))}function $t(t){return t.hasAttribute(be)}function Cn(t,e){const n={rowIndex:-1,focusableIndex:-1};return t.map((r,s)=>({rowIndex:s,focusableIndex:r.focusables.indexOf(e)})).find(r=>r.focusableIndex!==-1)??n}function Ge(t,e,n,a){if(a){let o=e.rowIndex+n;for(;o>=0&&o<t.length;){const u=t[o];if(!De(u.rowElement)){const g=qt(u);return g?{rowIndex:o,focusableIndex:u.focusables.indexOf(g)}:null}o+=n}return null}const r=t[e.rowIndex];if(!r)return null;let s=e.focusableIndex+n;for(;s>=0&&s<r.focusables.length;){const o=r.focusables[s];if(!Y(o))return{rowIndex:e.rowIndex,focusableIndex:s};s+=n}return null}function _e(t,e){zt(t).forEach(n=>n.setAttribute("tabindex",n===e?"0":"-1"))}function Yt(t){zt(t).forEach(n=>n.setAttribute("tabindex","-1"));const e=Ut(t);if(e.length){const n=qt(e[0]);n&&n.setAttribute("tabindex","0")}}function O(t){return!!(t!=null&&t.length)}function Sn(t,e,n){const a=q(e),r=new Set(t),s=M(e);return a.length?On(e,t)?a.forEach(o=>r.delete(o)):(a.forEach(o=>r.add(o)),n!=null&&n.length&&Ce(r,n)):t.has(s)?r.delete(s):(r.add(s),n!=null&&n.length&&Ce(r,n)),n!=null&&n.length?Bn(r,n):r}function Ht(t,e){const a=q(t).slice(1);return!!a.length&&(a==null?void 0:a.every(r=>e.has(r)))}function Dn(t){return t.trim()?t.split("-").map(e=>parseInt(e.trim(),10)).filter(e=>!Number.isNaN(e)&&e>=0):[]}function Mt(t,e){if(!e.length||!t.length)return;const[n,...a]=e,r=t[n];if(r===void 0)return;if(!a.length)return r;const s=r.items??[];return Mt(s,a)}function De(t){return(t==null?void 0:t.classList.contains("disabled"))||(t==null?void 0:t.getAttribute("data-disabled"))==="true"}function Y(t){const e=t.closest("li.treeview-item");return!!e&&De(e)}function Rn(t){let e=t;for(;e;){const n=e.parentElement;if(!n)break;if(n.classList.contains("treeview-item-children")&&!n.classList.contains("treeview-item-children-open"))return!1;e=n}return!0}function An(t){return De(t)?[]:_n.map(e=>Array.from(t.querySelectorAll(`[${be}="${e}"]`)).find(a=>a.closest("li.treeview-item")===t)??null).filter(e=>e!==null)}function qt(t){const e=t.focusables.find(a=>a.getAttribute(be)==="content");return e&&!Y(e)?e:t.focusables.find(a=>!Y(a))??null}function zt(t){return Array.from(t.querySelectorAll(`[${be}]`))}function M(t){return t.id??t.labelText}function q(t){const e=[M(t)],n=t.items??[];for(const a of n)e.push(...q(a));return e}function On(t,e){const n=O(t.items);return Ht(t,e)||e.has(M(t))&&!n}function Ce(t,e){for(const n of e){O(n.items)&&Ce(t,n.items);const a=M(n);if(!O(n.items))continue;q(n).slice(1).every(o=>t.has(o))&&t.add(a)}}function Vt(t,e){for(const n of e){O(n.items)&&Vt(t,n.items);const a=M(n);if(!t.has(a)||!O(n.items))continue;q(n).slice(1).some(o=>t.has(o))||t.delete(a)}}function Bn(t,e){const n=new Set(t);return Vt(n,e),n}const Xt="phase2-inuit-1-indice-1-active",Fn=[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",isOpen:!0,items:[{id:"phase0-so-sur-t",labelText:"Phase0-SO-SUR-T",disabled:!0,isOpen:!1,items:[{id:"phase0-indice-1",labelText:"Indice 1",disabled:!0}]},{id:"phase1-so-sur-t",labelText:"Phase1-SO-SUR-T",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1",labelText:"Indice 1",disabled:!0,isOpen:!0,items:[{id:"phase1-indice-1-child",labelText:"Indice 1",disabled:!0}]}]},{id:"phase2-inuit-1",labelText:"Phase2-SO-INUIT",isOpen:!0,items:[{id:"phase2-inuit-1-indice-1-disabled",labelText:"Indice 1",disabled:!0},{id:"phase2-inuit-1-indice-2-disabled",labelText:"Indice 2",disabled:!0},{id:Xt,labelText:"Indice 1",isOpen:!0,items:[{id:"phase2-inuit-1-rejouer-nested",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-1-indice-3",labelText:"Indice 3"},{id:"phase2-inuit-1-rejouer",labelText:"Rejouer",icon:"play-circle"}]},{id:"phase2-inuit-2",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-2-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-3",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-3-indice-1",labelText:"Indice 1"}]},{id:"phase2-inuit-4",labelText:"Phase2-SO-INUIT",isOpen:!1,items:[{id:"phase2-inuit-4-indice-1",labelText:"Indice 1"}]},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",actionIcon:"add-circle"}]}],Jt=16,Qt=32,Ln=24,P={viewBox:"0 0 16 32",width:Jt,height:Qt},jn={vertical:{...P,elements:[{kind:"path",d:"M8 32L8 0"}]},branch:{...P,elements:[{kind:"path",d:"M8 32L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},corner:{...P,elements:[{kind:"path",d:"M8 16L8 0"},{kind:"line",x1:8,y1:15.5,x2:16,y2:15.5}]},horizontal:{...P,elements:[{kind:"line",x1:0,y1:15.5,x2:16,y2:15.5}]},spacer:{...P,elements:[]}},W={viewBox:"0 0 16 24",width:Jt,height:Ln},Kn={vertical:{...W,elements:[{kind:"path",d:"M8 24L8 0"}]},branch:{...W,elements:[{kind:"path",d:"M8 24L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},corner:{...W,elements:[{kind:"path",d:"M8 12L8 0"},{kind:"line",x1:8,y1:11.5,x2:16,y2:11.5}]},horizontal:{...W,elements:[{kind:"line",x1:0,y1:11.5,x2:16,y2:11.5}]},spacer:{...W,elements:[]}},Pn=2e3,Wn=15,Zt=Math.ceil(Pn/Qt)+Wn,Gn=Math.ceil(Zt/2);function Se(t,e="leaf"){return Array.from({length:t},(n,a)=>{const r=a+1;return{id:`${e}-${r}`,labelText:`${e}-${String(r).padStart(3,"0")}`}})}function Un(t=Zt){return[{id:"dem0265433-reflecto",labelText:"DEM0265433-Reflecto_P.ORG-RC",icon:"folder",isOpen:!0,items:[{id:"phase2-inuit-many-indices",labelText:"Phase2-SO-INUIT",icon:"folder",isOpen:!0,items:Se(t,"CM-Indice")},{id:"cm-sibling-after-large-branch",labelText:"CM-SiblingAfterLargeBranch",icon:"folder"},{id:"cm-sibling-second",labelText:"CM-SecondSibling",icon:"folder"},{id:"nouvelle-ait",labelText:"Nouvelle AIT",icon:"add-circle",actionIcon:"add-circle"}]}]}const $n=Un();function Yn(t=Gn){return[{id:"nested-root",labelText:"Nested large expansion",icon:"folder",isOpen:!0,items:[{id:"nested-level-1",labelText:"Level 1 (many children)",icon:"folder",isOpen:!0,items:Se(t,"L1-Item")},{id:"nested-level-1-sibling",labelText:"CM-Level1-Sibling",icon:"folder",isOpen:!0,items:[{id:"nested-level-2",labelText:"Level 2 (many children)",icon:"folder",isOpen:!0,items:Se(t,"L2-Item")},{id:"nested-level-2-sibling",labelText:"CM-Level2-Sibling",icon:"folder"}]}]}]}const Hn=Yn(),Mn=(t,e,n)=>{const[a,r]=T.useState(t||null),s=T.useCallback((o,u)=>{const E=Dn(o),g=Mt(u,E),p=(g==null?void 0:g.id)??(g==null?void 0:g.labelText);r(p||null)},[]);return T.useEffect(()=>{t?r(t):e&&n&&s(e,n)},[t,e,n,s]),{internalSelectedId:a,setInternalSelectedId:r}},qn={"rte-treeview":"_rte-treeview_gnncd_1"};function D(t){return!!(t!=null&&t.length)}function zn(t){const{depth:e=0,isCompact:n,resolvedBorderTypes:a=[],hasChildren:r}=t;if(n)return Array(e).fill("spacer");const s=[];for(let o=0;o<a.length;o++){const u=o===a.length-1;s.push(u?a[o]:ta(a[o]))}return e&&s.length&&!r&&s.push("horizontal"),s}function Vn(t,e){const n=e?"corner":"branch";return[...t,n]}function Xn(t,e){return t&&!e}function Jn(t,e){const a=en(t).slice(1);if(!a.length)return!1;const r=a.filter(s=>e.has(s)).length;return!!r&&r<a.length}function Qn(t){return`treeview-checkbox-${t}`}function Zn({treeId:t,path:e,itemId:n}){const a=e.join("-"),r=`${t}__${a}`;return n?`${r}__${n}`:r}function ea(t){return t.id??t.labelText}function en(t){const e=[ea(t)],n=t.items??[];for(const a of n)e.push(...en(a));return e}function ta(t){return t==="corner"?"spacer":"vertical"}const J={"rte-treeview-item-border-container":"_rte-treeview-item-border-container_11urv_1","rte-treeview-item-border":"_rte-treeview-item-border_11urv_1","rte-treeview-item-border-path":"_rte-treeview-item-border-path_11urv_18"},tn=({isCompact:t,borderType:e})=>{const n=()=>(t?Kn:jn)[e];return i.jsx("div",{className:J["rte-treeview-item-border-container"],"data-is-compact":t,children:i.jsx("svg",{className:G(J["rte-treeview-item-border"]),fill:"none","aria-hidden":"true",width:n().width,height:n().height,viewBox:n().viewBox,children:n().elements.map((a,r)=>i.jsx(i.Fragment,{children:a.kind==="path"?i.jsx("path",{className:J["rte-treeview-item-border-path"],d:a.d},r):i.jsx("line",{className:J["rte-treeview-item-border-path"],x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},r)},r))})})};tn.__docgenInfo={description:"",methods:[],displayName:"TreeviewItemBorder",props:{isCompact:{required:!0,tsType:{name:"boolean"},description:""},borderType:{required:!0,tsType:{name:"TreeviewBorderType"},description:""}}};const na=(t,e,n,a)=>{const r=a?new Set(a):new Set,s={id:t,labelText:e,items:n},o=O(n);return Ht(s,r)||r.has(s.id)&&!o},m={"rte-treeview-item":"_rte-treeview-item_1uvn0_1","rte-treeview-item-checkbox":"_rte-treeview-item-checkbox_1uvn0_9","rte-treeview-item-borders-container":"_rte-treeview-item-borders-container_1uvn0_12","rte-treeview-item-row":"_rte-treeview-item-row_1uvn0_18","rte-treeview-item-main-content":"_rte-treeview-item-main-content_1uvn0_21","rte-treeview-item-chevron":"_rte-treeview-item-chevron_1uvn0_25","rte-treeview-item-content":"_rte-treeview-item-content_1uvn0_42","rte-treeview-item-icon":"_rte-treeview-item-icon_1uvn0_43","rte-treeview-item-content-wrapper":"_rte-treeview-item-content-wrapper_1uvn0_92","rte-treeview-item-action-button":"_rte-treeview-item-action-button_1uvn0_116","rte-treeview-item-action":"_rte-treeview-item-action_1uvn0_116","rte-treeview-item-label":"_rte-treeview-item-label_1uvn0_236","rte-treeview-item-children":"_rte-treeview-item-children_1uvn0_250","rte-treeview-item-children-open":"_rte-treeview-item-children-open_1uvn0_263","rte-treeview-item-children-list":"_rte-treeview-item-children-list_1uvn0_267"},Re=({id:t,treeId:e,itemIndex:n,labelText:a,icon:r,disabled:s,isCompact:o,hasCheckbox:u,isOpen:E,hasBadge:g,items:p,borderTypes:z,actionIcon:_,actionMenuItems:V,depth:we,onOpenChange:F,onClickElement:d,onActionIconClick:v,onCheckedIdsChange:C,selectedId:R,checkedIds:k})=>{const[L]=T.useState(we||0),[I,sn]=T.useState(E||!1),[on,ke]=T.useState(!1),x=t||a,Fe=na(x,a,p??[],k??[]),Le=Jn({id:x,labelText:a,items:p??[]},new Set(k)),cn=c=>{c.stopPropagation(),c.preventDefault(),!s&&(v==null||v(x))},dn=c=>{if(c.key==="Enter"||c.key===" "){if(c.preventDefault(),c.stopPropagation(),s)return;v==null||v(x)}},ln=c=>{s||(c.stopPropagation(),d==null||d(x))},je=()=>z||[],un=zn({depth:L,isCompact:o,resolvedBorderTypes:je(),hasChildren:D(p)}),pn=()=>{Xn(D(p),!!s)&&(sn(c=>!c),F==null||F(x,!I))},mn=c=>{c.stopPropagation(),c.preventDefault(),!s&&ke(!0)},hn=c=>{if([Ne,Ee].includes(c.key)){if(c.stopPropagation(),c.preventDefault(),s)return;ke(!0)}},bn=Qn(Zn({treeId:e,path:[n],itemId:x})),fn=c=>{if([Ne,Ee].includes(c.key)){if(c.preventDefault(),s)return;Ke()}},Ke=()=>{s||C==null||C({id:x,labelText:a,items:p})},gn=c=>{if([Ne,Ee].includes(c.key)){if(c.preventDefault(),s)return;d==null||d(x)}};return i.jsxs("li",{className:G(m["rte-treeview-item"],"treeview-item"),"data-disabled":s,"data-item-id":x,"data-has-children":D(p),"data-is-expanded":I&&D(p),"data-is-compact":o,"data-root-depth":L===0,"data-is-selected":R===x,"data-depth":L,role:"treeitem","aria-disabled":s?!0:void 0,"aria-expanded":D(p)?I:void 0,"aria-selected":R===x,"aria-level":L+1,"data-has-checked-items":k&&k.length>0,children:[i.jsxs("div",{className:m["rte-treeview-item-row"],children:[u&&i.jsx("div",{className:m["rte-treeview-item-checkbox"],role:"input","data-treeview-focusable":"checkbox","aria-checked":Le?"mixed":Fe?"true":"false","aria-label":a,tabIndex:-1,onKeyDown:fn,children:i.jsx(In,{id:bn,label:a,showLabel:!1,tabIndex:-1,disabled:s,onChange:Ke,checked:Fe,indeterminate:Le})}),i.jsxs("div",{className:m["rte-treeview-item-borders-container"],children:[un.map((c,j)=>i.jsx(tn,{isCompact:!!o,borderType:c},j)),D(p)&&i.jsx("button",{type:"button",className:G(m["rte-treeview-item-chevron"],I?m["rte-treeview-item-chevron-open"]:""),onClick:pn,"aria-label":`${I?"Fermer":"Ouvrir"} les enfants de ${a}`,disabled:s,tabIndex:-1,"data-treeview-focusable":"chevron",children:i.jsx(X,{name:I?"arrow-chevron-down":"arrow-chevron-right",size:16})})]}),i.jsx("div",{className:m["rte-treeview-item-content-wrapper"],children:i.jsxs("div",{className:m["rte-treeview-item-main-content"],onClick:ln,onKeyDown:gn,"data-testid":`treeview-item-main-content-${t}`,children:[r&&!o&&i.jsx(X,{name:r,className:m["rte-treeview-item-icon"],size:16}),i.jsx("div",{className:G(m["rte-treeview-item-content"],o?m["rte-treeview-item-content-compact"]:""),"data-treeview-focusable":"content",tabIndex:-1,children:i.jsxs("span",{className:m["rte-treeview-item-label"],children:[" ",a," "]})}),g&&i.jsx(Tn,{badgeType:"indicator",content:"empty",size:"s"}),_&&i.jsx(i.Fragment,{children:V?i.jsx("div",{className:m["rte-treeview-item-action"],children:i.jsx(Nn,{dropdownId:`${x}-action-menu`,isOpen:on,autoClose:!0,onClose:()=>{ke(!1)},trigger:i.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Action pour ${a}`,disabled:s,onClick:mn,onKeyDown:hn,children:i.jsx(X,{name:_,size:16})}),children:V.map(({label:c,leftIcon:j,hasSeparator:ye,onClick:vn},xn)=>i.jsx(En,{label:c,leftIcon:j,hasSeparator:ye,onClick:vn,disabled:s},xn))})}):i.jsx("button",{type:"button",className:m["rte-treeview-item-action-button"],"data-treeview-focusable":"action",tabIndex:-1,"aria-label":`Actions pour ${a}`,disabled:s,onClick:cn,onKeyDown:dn,children:i.jsx(X,{name:_,size:16})})})]})})]}),D(p)&&i.jsx("div",{className:G(m["rte-treeview-item-children"],I?m["rte-treeview-item-children-open"]:"","treeview-item-children",I?"treeview-item-children-open":""),role:"group","data-open":E,children:i.jsx("ul",{className:m["rte-treeview-item-children-list"],children:p.map((c,j)=>i.jsx(Re,{...c,depth:L+1,borderTypes:Vn(je(),j===p.length-1),isCompact:o,onClickElement:ye=>d==null?void 0:d(ye),selectedId:R,hasCheckbox:c.hasCheckbox??u,onCheckedIdsChange:C,checkedIds:k,onActionIconClick:c.onActionIconClick},c.id))})})]})};Re.__docgenInfo={description:"",methods:[],displayName:"TreeviewItem",props:{onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, isOpen: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},onClickElement:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},isSelected:{required:!1,tsType:{name:"boolean"},description:""},selectedId:{required:!1,tsType:{name:"string"},description:""},onActionIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},itemIndex:{required:!1,tsType:{name:"number"},description:""},onCheckedIdsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeviewItemProps) => void",signature:{arguments:[{type:{name:"TreeviewItemProps"},name:"node"}],return:{name:"void"}}},description:""},checkedIds:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},isChecked:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}},composes:["coreTreeviewItem","Omit"]};const aa=(t,e)=>{t.altKey||t.ctrlKey||t.metaKey||wn.includes(t.key)&&ra(e,t)},ra=(t,e)=>{const n=e.target;if(!t.contains(n)||!$t(n)||Y(n))return;const a=Ut(t);if(a.length===0)return;const r=Cn(a,n);if(!(r.rowIndex===-1||r.focusableIndex===-1)){if([Pe,kn].includes(e.key)){const s=e.key===Pe?-1:1,o=Ge(a,r,s,!0);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),_e(t,u),u.focus()}else e.preventDefault();return}if([We,yn].includes(e.key)){const s=e.key===We?-1:1,o=Ge(a,r,s,!1);if(o){const u=a[o.rowIndex].focusables[o.focusableIndex];e.preventDefault(),_e(t,u),u.focus()}else e.preventDefault()}}},sa=(t,e)=>{const n=e.target;t.contains(n)&&$t(n)&&!Y(n)&&_e(t,n)},ia=(t,e)=>{const n=e.relatedTarget;n&&t.contains(n)||Yt(t)},H=({items:t,isCompact:e,selectedId:n,onChange:a,onSelectionChange:r,selectedPath:s,hasCheckbox:o,id:u="treeview"})=>{const{internalSelectedId:E,setInternalSelectedId:g}=Mn(n,s,t),[p,z]=T.useState([]),_=T.useRef(null),V=d=>{const v=Array.from(Sn(new Set(p),d,t));z(v)};T.useEffect(()=>{if(_.current){const d=_.current;Yt(d);const v=k=>{aa(k,d)},C=k=>{sa(d,k)},R=k=>{ia(d,k)};return d.addEventListener("keydown",v,!0),d.addEventListener("focusin",C),d.addEventListener("focusout",R),()=>{d.removeEventListener("keydown",v,!0),d.removeEventListener("focusin",C),d.removeEventListener("focusout",R)}}},[]);const we=()=>!1,F=d=>{g(d),a==null||a(d),r==null||r(d)};return i.jsx("ul",{className:qn["rte-treeview"],"data-compact":e,"data-has-checked-items":we(),role:"tree",ref:_,children:t.map((d,v)=>i.jsx(T.Fragment,{children:i.jsx(Re,{treeId:u,...d,isCompact:e,onClickElement:F,selectedId:E,hasCheckbox:d.hasCheckbox??o,onCheckedIdsChange:V,checkedIds:p},d.id)},(d.id||d.labelText)+v))})};H.__docgenInfo={description:"",methods:[],displayName:"Treeview",props:{id:{defaultValue:{value:'"treeview"',computed:!1},required:!1}},composes:["CoreTreeViewProps","Omit"]};const Ha={title:"Composants/Treeview/Treeview",component:H,decorators:[t=>i.jsx("div",{style:{minWidth:"200px"},children:i.jsx(t,{})})]},oa=[{id:"home",labelText:"Accueil",icon:"home"},{id:"settings",labelText:"Paramètres",icon:"settings"}],Ae=[{id:"documents",labelText:"Documents",icon:"folder",isOpen:!0,items:[{id:"work",labelText:"Work",icon:"folder",items:[{id:"project-a",labelText:"Project A"},{id:"project-b",labelText:"Project B"}]},{id:"personal",labelText:"Personal",icon:"folder"}]}],Oe=(t,e,n)=>t.map(a=>({...a,actionIcon:e,onActionIconClick:r=>{alert(`Action clicked for item: ${r}`)},...n&&{actionMenuItems:n},...a.items&&{items:Oe(a.items,e,n)}})),nn=[{label:"Edit",leftIcon:"edit",hasSeparator:!0},{label:"Duplicate",leftIcon:"copy"},{label:"Delete",leftIcon:"delete",hasSeparator:!0},{label:"Rename",leftIcon:"edit"}],ca=Oe(Ae,"more-horiz",nn),da=Oe(Ae,"info-i"),an=[{id:"home",labelText:"Home",icon:"home"},...Ae],la=[{id:"settings",labelText:"Label",icon:"settings",hasBadge:!0,actionIcon:"more-horiz",actionMenuItems:nn}],fe=[{id:"nesting-1",labelText:"Nesting 1 (check toggles all descendants)",isOpen:!0,items:[{id:"nesting-2a",labelText:"Nesting 2a",isOpen:!0,items:[{id:"nesting-3a",labelText:"Nesting 3a"},{id:"nesting-3b",labelText:"Nesting 3b"}]},{id:"nesting-2b",labelText:"Nesting 2b",isOpen:!0,items:[{id:"nesting-3c",labelText:"Nesting 3c"}]}]}],ua=[{id:"folder",labelText:"Folder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",items:[{id:"subfolder",labelText:"Subfolder",icon:"folder",isOpen:!0,hasCheckbox:!0,actionIcon:"info-i",hasBadge:!0,items:[{id:"file",labelText:"File",icon:"file-copy",hasCheckbox:!0,actionIcon:"info-i"}]}]}];function rn(t={}){const{middleOpen:e=!0}=t;return[{id:"root",labelText:"Root",icon:"folder",isOpen:!0,items:[{id:"first",labelText:"First (branch/T-shape)",icon:"folder",isOpen:!0,items:[{id:"first-1",labelText:"First-1 (branch)",icon:"folder",isOpen:!0},{id:"first-2",labelText:"First-2 (corner/L-shape)",icon:"folder",isOpen:!0,items:[{id:"first-2-a",labelText:"First-2-a (level 4)",icon:"folder"}]}]},{id:"middle",labelText:"Middle (branch/T-shape)",icon:"folder",isOpen:e,items:[{id:"middle-1",labelText:"Middle-1 (corner/L-shape)",icon:"folder"}]},{id:"last",labelText:"Last (corner/L-shape)",icon:"folder"}]}]}const Q={tags:["skip-ci"],args:{items:oa}},Z={tags:["skip-ci"],args:{items:rn({middleOpen:!0})},parameters:{docs:{description:{story:"Nested structure with 4 levels of depth. Demonstrates branch/T-shape and corner/L-shape connector lines across multi-level hierarchy."}}}},ee={tags:["skip-ci"],args:{items:an,isCompact:!0}},te={tags:["skip-ci"],args:{items:rn({middleOpen:!1}),selectedId:"first-2"},parameters:{docs:{description:{story:"Item first-2 is preselected (highlighted). Selection is independent from check state. Use selectedPath input as alternative to select by index path (e.g. '0-1-0')."}}}},ne={tags:["skip-ci"],args:{items:an},play:async({canvasElement:t})=>{const e=B(t);await Ue(e,"Home","home"),$e(e,"Home"),await Ue(e,"Documents","documents"),pa(e,"Home"),$e(e,"Documents")},parameters:{docs:{description:{story:"Selection is exclusive: clicking an item selects it; clicking another item deselects the first and selects the new one."}}}},ae={tags:["skip-ci"],args:{items:ca},parameters:{docs:{description:{story:"Each item has an action icon (more-horiz) that opens a dropdown menu with Edit, Duplicate, Delete, and Rename options. Click the icon to show or hide the menu."}}}},re={tags:["skip-ci"],args:{items:da},parameters:{docs:{description:{story:"Each item has an info icon as action icon. Clicking the icon triggers a custom behavior (console log) instead of opening a dropdown."}}}},se={tags:["skip-ci"],args:{items:la},parameters:{docs:{description:{story:"Item with a red indicator badge (size S) between the label and the action icon. The badge is a fixed design: no configuration options."}}}},ie={args:{items:[]},render:()=>{const t=Ye("left"),e=Ye("right");return i.jsxs("div",{style:{display:"flex",gap:"2rem",flexWrap:"wrap"},children:[i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Left tree"}),i.jsx(H,{items:t})]}),i.jsxs("div",{children:[i.jsx("h3",{style:{margin:"0 0 0.5rem 0"},children:"Right tree"}),i.jsx(H,{items:e})]})]})}},oe={args:{items:fe,hasCheckbox:!0},parameters:{docs:{description:{story:"Checkboxes with nested hierarchy. Checking a parent checks all descendants. Checkboxes are hidden by default; hover or focus to reveal. Once any item is checked, all become visible. When hasCheckbox is false, a spacer preserves layout alignment. Use checkedIdsChange to receive the set of checked ids."}}}},ce={args:{items:fe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 3b"),h(e,"Nesting 3b"),U(e,"Nesting 2a"),U(e,"Nesting 1"),y(e,"Nesting 2b"),y(e,"Nesting 3a"),y(e,"Nesting 3c"),await w(e,"Nesting 3c"),h(e,"Nesting 3c"),h(e,"Nesting 3b"),h(e,"Nesting 2b"),U(e,"Nesting 1"),U(e,"Nesting 2a"),y(e,"Nesting 3a")},parameters:{docs:{description:{story:"Click leaf Nesting 3b: parent Nesting 2a and root Nesting 1 become indeterminate. Click sibling Nesting 3c: Nesting 2b checked, Nesting 1 still indeterminate."}}}},de={args:{items:fe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 1");for(const n of $)h(e,n);await w(e,"Nesting 1");for(const n of $)y(e,n);await w(e,"Nesting 3c"),h(e,"Nesting 2b"),h(e,"Nesting 3c"),U(e,"Nesting 1"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),h(e,"Nesting 1");for(const n of $)h(e,n)},parameters:{docs:{description:{story:"Parent-to-children: click Nesting 1 to check all. Children-to-parent: check Nesting 3c then Nesting 3a and Nesting 3b to auto-check Nesting 2a and Nesting 1."}}}},le={args:{items:fe,hasCheckbox:!0},play:async({canvasElement:t})=>{const e=B(t);await w(e,"Nesting 1");for(const n of $)h(e,n);await w(e,"Nesting 1");for(const n of $)y(e,n);await w(e,"Nesting 2a"),h(e,"Nesting 2a"),h(e,"Nesting 3a"),h(e,"Nesting 3b"),await w(e,"Nesting 3a"),await w(e,"Nesting 3b"),y(e,"Nesting 1"),y(e,"Nesting 2a"),y(e,"Nesting 3a"),y(e,"Nesting 3b")},parameters:{docs:{description:{story:"Toggle parent off: all unchecked. Check Nesting 2a (cascades to 3a, 3b), then uncheck 3a and 3b: Nesting 2a and descendants unchecked."}}}},ue={args:{items:ua.map(t=>({...t,onActionIconClick:e=>{window.lastActionIconClick=e}})),hasCheckbox:!0,id:"treeview-keyboard-nav"},render:t=>i.jsxs("div",{style:{display:"flex",gap:"1rem",minWidth:"280px",flexDirection:"column"},children:[i.jsx("button",{"data-testid":"before-tree",children:"Before tree"}),i.jsx(H,{...t}),i.jsx("button",{"data-testid":"after-tree",children:"After tree"})]}),play:async({canvasElement:t})=>{const e=B(t),n=e.getByTestId("before-tree"),a=e.getByTestId("after-tree");await l.click(n),b(n).toHaveFocus(),await l.tab(),N(e,"folder"),await l.keyboard(Te),N(e,"subfolder"),await l.keyboard(Te),N(e,"file"),await l.keyboard(Te),N(e,"file"),await l.keyboard(Ie),N(e,"subfolder"),await l.keyboard(Ie),N(e,"folder"),await l.keyboard(Ie),N(e,"folder"),await l.keyboard(A),f(e,"folder","chevron"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(S),f(e,"folder","chevron"),await l.keyboard(S),f(e,"folder","content"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(A),f(e,"folder","content"),await l.keyboard(K),fa(e,"folder"),await l.keyboard(A),f(e,"folder","chevron"),await l.keyboard(K);const r=xe(e,"folder");b(r.getAttribute("aria-expanded")).toBe("false"),await l.keyboard(K),b(r.getAttribute("aria-expanded")).toBe("true"),await l.keyboard(A),f(e,"folder","checkbox"),await l.keyboard(K),ga(e,"folder"),await l.keyboard(S),f(e,"folder","chevron"),await l.keyboard(S),f(e,"folder","content"),await l.keyboard(S),f(e,"folder","action"),await l.keyboard(K),b(window.lastActionIconClick).toBe("folder"),await l.tab(),b(a).toHaveFocus(),await l.tab({shift:!0}),N(e,"folder")},parameters:{docs:{description:{story:"Keyboard navigation: Tab enters tree (first content focused). ArrowUp/Down move between rows (stay at boundaries). ArrowLeft/Right move within row (checkbox→chevron→content→action). Space on content selects, on chevron expands/collapses, on checkbox toggles, on action emits. Tab exits; re-entry focuses first item."}}}},Be=t=>i.jsx("div",{style:{minWidth:"420px",maxHeight:"520px",overflow:"auto"},children:i.jsx(t,{})}),pe={args:{items:Fn,selectedId:Xt,hasCheckbox:!0,id:"treeview-disabled-items-scenario"},decorators:[Be],parameters:{docs:{description:{story:"Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."}}}},me={tags:["!autodocs"],args:{items:$n,hasCheckbox:!0,id:"treeview-large-expansion-overlap"},decorators:[Be],parameters:{docs:{description:{story:"Debug story for Concorde ticket: Phase2 branch expanded with many indices. Siblings such as CM-SiblingAfterLargeBranch should render below the branch with correct scroll height."}}}},he={tags:["!autodocs"],args:{items:Hn,id:"treeview-large-expansion-nested-overlap"},decorators:[Be],parameters:{docs:{description:{story:"Two expanded levels each with many children, to reproduce cumulative max-height limits per nested `<ul>`."}}}},Ue=(t,e,n)=>{const a=t.getByRole("treeitem",{name:new RegExp(e,"i")}),r=B(a).getByTestId("treeview-item-main-content-"+n);return l.click(r)},$e=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("true")},pa=(t,e)=>{const n=t.getByRole("treeitem",{name:new RegExp(e,"i")});b(n.getAttribute("aria-selected")).toBe("false")},Ye=t=>[{id:`${t}-a`,labelText:`${t} A`,icon:"folder",isOpen:!0,items:[{id:`${t}-a1`,labelText:`${t} A1`,icon:"folder"},{id:`${t}-a2`,labelText:`${t} A2`,icon:"folder"}]},{id:`${t}-b`,labelText:`${t} B`,icon:"folder",items:[{id:`${t}-b1`,labelText:`${t} B1`,icon:"folder"}]}],$=["Nesting 1","Nesting 2a","Nesting 2b","Nesting 3a","Nesting 3b","Nesting 3c"],ma={"Nesting 1":"nesting-1","Nesting 2a":"nesting-2a","Nesting 2b":"nesting-2b","Nesting 3a":"nesting-3a","Nesting 3b":"nesting-3b","Nesting 3c":"nesting-3c"};function ge(t,e){const n=ma[e];if(n){const o=t.getByRole("tree").querySelector(`[data-item-id="${n}"]`);if(o)return o}const a=t.getAllByRole("treeitem",{name:new RegExp(e,"i")}),r=a.find(s=>!s.querySelector('[role="treeitem"]'));return a.length===1?a[0]:r??a[0]}function ha(t){const e=t.children[0];if(!e)throw new Error("Row not found");return e.querySelector("input[type='checkbox']")}function ve(t){return t.querySelector('input[type="checkbox"]')}function w(t,e){const n=ge(t,e),a=n.children[0];return l.hover(a).then(()=>l.click(ha(n)))}function h(t,e){const n=ve(ge(t,e));b(n.checked).toBe(!0),b(n.indeterminate).toBe(!1)}function U(t,e){const n=ve(ge(t,e));b(n.indeterminate).toBe(!0)}function y(t,e){const n=ve(ge(t,e));b(n.checked).toBe(!1),b(n.indeterminate).toBe(!1)}function xe(t,e){const a=t.getByRole("tree").querySelector(`[data-item-id="${e}"]`);if(!a)throw new Error(`Treeitem with data-item-id="${e}" not found`);return a}function ba(t,e){const n=t.querySelector(`[data-treeview-focusable="${e}"]`);if(!n)throw new Error(`Focusable "${e}" not found in treeitem`);return n}function f(t,e,n){const a=xe(t,e),r=ba(a,n);b(document.activeElement).toBe(r)}function N(t,e){f(t,e,"content")}function fa(t,e){const n=xe(t,e);b(n.getAttribute("aria-selected")).toBe("true")}function ga(t,e){const n=xe(t,e),a=ve(n);b(a.checked).toBe(!0),b(a.indeterminate).toBe(!1)}var He,Me,qe;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: simpleArborescence
  }
}`,...(qe=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:qe.source}}};var ze,Ve,Xe;Z.parameters={...Z.parameters,docs:{...(ze=Z.parameters)==null?void 0:ze.docs,source:{originalSource:`{
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
}`,...(Xe=(Ve=Z.parameters)==null?void 0:Ve.docs)==null?void 0:Xe.source}}};var Je,Qe,Ze;ee.parameters={...ee.parameters,docs:{...(Je=ee.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  tags: ["skip-ci"],
  args: {
    items: navigationData,
    isCompact: true
  }
}`,...(Ze=(Qe=ee.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;te.parameters={...te.parameters,docs:{...(et=te.parameters)==null?void 0:et.docs,source:{originalSource:`{
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
}`,...(nt=(tt=te.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,st;ne.parameters={...ne.parameters,docs:{...(at=ne.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(st=(rt=ne.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var it,ot,ct;ae.parameters={...ae.parameters,docs:{...(it=ae.parameters)==null?void 0:it.docs,source:{originalSource:`{
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
}`,...(ct=(ot=ae.parameters)==null?void 0:ot.docs)==null?void 0:ct.source}}};var dt,lt,ut;re.parameters={...re.parameters,docs:{...(dt=re.parameters)==null?void 0:dt.docs,source:{originalSource:`{
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
}`,...(ut=(lt=re.parameters)==null?void 0:lt.docs)==null?void 0:ut.source}}};var pt,mt,ht;se.parameters={...se.parameters,docs:{...(pt=se.parameters)==null?void 0:pt.docs,source:{originalSource:`{
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
}`,...(ht=(mt=se.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var bt,ft,gt;ie.parameters={...ie.parameters,docs:{...(bt=ie.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(gt=(ft=ie.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var vt,xt,wt;oe.parameters={...oe.parameters,docs:{...(vt=oe.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(wt=(xt=oe.parameters)==null?void 0:xt.docs)==null?void 0:wt.source}}};var kt,yt,Tt;ce.parameters={...ce.parameters,docs:{...(kt=ce.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Tt=(yt=ce.parameters)==null?void 0:yt.docs)==null?void 0:Tt.source}}};var It,Nt,Et;de.parameters={...de.parameters,docs:{...(It=de.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Et=(Nt=de.parameters)==null?void 0:Nt.docs)==null?void 0:Et.source}}};var _t,Ct,St;le.parameters={...le.parameters,docs:{...(_t=le.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(St=(Ct=le.parameters)==null?void 0:Ct.docs)==null?void 0:St.source}}};var Dt,Rt,At;ue.parameters={...ue.parameters,docs:{...(Dt=ue.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
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
}`,...(At=(Rt=ue.parameters)==null?void 0:Rt.docs)==null?void 0:At.source}}};var Ot,Bt,Ft;pe.parameters={...pe.parameters,docs:{...(Ot=pe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    items: disabledItemsScenarioData,
    selectedId: disabledItemsScenarioSelectedId,
    hasCheckbox: true,
    id: "treeview-disabled-items-scenario"
  },
  decorators: [scrollableTreeviewStoryDecorator],
  parameters: {
    docs: {
      description: {
        story: "Reproduces a business scenario with mixed enabled and disabled items (phases and indices). Uses the treeview checkbox system. Disabled nodes use disabled: true — they appear greyed out and must not be selectable, clickable, or checkable. Use this story to manually verify mouse and keyboard interaction on disabled items."
      }
    }
  }
}`,...(Ft=(Bt=pe.parameters)==null?void 0:Bt.docs)==null?void 0:Ft.source}}};var Lt,jt,Kt;me.parameters={...me.parameters,docs:{...(Lt=me.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    items: largeExpansionScenarioData,
    hasCheckbox: true,
    id: "treeview-large-expansion-overlap"
  },
  decorators: [scrollableTreeviewStoryDecorator],
  parameters: {
    docs: {
      description: {
        story: "Debug story for Concorde ticket: Phase2 branch expanded with many indices. Siblings such as CM-SiblingAfterLargeBranch should render below the branch with correct scroll height."
      }
    }
  }
}`,...(Kt=(jt=me.parameters)==null?void 0:jt.docs)==null?void 0:Kt.source}}};var Pt,Wt,Gt;he.parameters={...he.parameters,docs:{...(Pt=he.parameters)==null?void 0:Pt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    items: largeExpansionNestedScenarioData,
    id: "treeview-large-expansion-nested-overlap"
  },
  decorators: [scrollableTreeviewStoryDecorator],
  parameters: {
    docs: {
      description: {
        story: "Two expanded levels each with many children, to reproduce cumulative max-height limits per nested \`<ul>\`."
      }
    }
  }
}`,...(Gt=(Wt=he.parameters)==null?void 0:Wt.docs)==null?void 0:Gt.source}}};const Ma=["Default","NestedItems","Compact","PreselectedState","SelectionExclusive","ActionIconDropdown","ActionIconCustomBehavior","WithBadge","SelectionIndependence","CheckboxNesting","CheckboxIndeterminate","CheckboxCascadeChecked","CheckboxCascadeUnchecked","KeyboardNavigation","DisabledItemsScenario","LargeExpansionOverlap","LargeExpansionNestedOverlap"];export{re as ActionIconCustomBehavior,ae as ActionIconDropdown,de as CheckboxCascadeChecked,le as CheckboxCascadeUnchecked,ce as CheckboxIndeterminate,oe as CheckboxNesting,ee as Compact,Q as Default,pe as DisabledItemsScenario,ue as KeyboardNavigation,he as LargeExpansionNestedOverlap,me as LargeExpansionOverlap,Z as NestedItems,te as PreselectedState,ne as SelectionExclusive,ie as SelectionIndependence,se as WithBadge,Ma as __namedExportsOrder,Ha as default};
