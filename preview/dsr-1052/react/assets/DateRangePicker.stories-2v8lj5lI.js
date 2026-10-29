import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ga}from"./keyboard-test.constants-D8znW6ct.js";import{D as s,c as ae,d as St,a as Wa}from"./timepicker.constants-CynrC_9x.js";import{w as ke,u as H,e as R,a as Ce}from"./index-4rjIhT2C.js";import{r as i}from"./index-G8LIXM5I.js";import{E as $a,F as Ua,o as Bt,G as Za,s as Ke,H as Xa,l as ze,i as Na,u as Ja,a as Qa,g as en,b as tn,c as an,e as nn,f as rn,I as ne,j as sn,k as Kt,n as ln,t as on,m as It,p as cn,q as at,v as dn,w as un,x as pn,y as zt,J as he,z as mn,K as nt,C as ft,D as Gt}from"./DatePicker.stories.util-CvKDc12b.js";import{u as gn}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as fn,A as Dn}from"./Label-swDXsD6p.js";import{D as yn}from"./Dropdown-CyecDUeK.js";import{I as vn}from"./Icon-DBkoQNiA.js";import{a as hn,B as wn,f as Ne,c as bn}from"./picker.utils-Cmv8vcEA.js";import{w as Et}from"./animation-DwV-fHIC.js";import{E as _t,S as Tt,b as Ge,c as Fe,a as Oe,A as We,B as kn,D as xn}from"./keyboard.constants-D1KJQ2-m.js";import{B as Wt}from"./Button-B3EnjUD7.js";import{D as Rt}from"./Divider-BVZUrQ0d.js";import{I as we}from"./IconButton-CJDki2nw.js";import{c as Ie}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Ba="490px",Ca="320px";function An(r){const{viewDate:o,selectedDates:c,minDate:m,maxDate:y,disabledDates:u}=r,_=$a(o),C=Ua(_),F=Bt(_,-C),P=Za(o),ce=Ke(new Date);return Array.from({length:P}).map((D,O)=>{const h=Bt(F,O),v=Xa(h,o),re=!!(c!=null&&c[0])&&ze(h,c[0]),S=!!(c!=null&&c[1])&&ze(h,c[1]),de=re||S,l=ze(h,ce),M=Sn(h,c);let I="default";return v?de?I="selected":l&&(I="today"):I="prev/next",{date:h,label:`${h.getDate()}`,cellType:I,isDisabled:Na({date:h,minDate:m,maxDate:y,disabledDates:u}),isInRange:M}})}function Sn(r,o){if(o===null)return!1;const[c,m]=o;if(c===null||m===null)return!1;const y=Ke(c),u=Ke(m),_=Ke(r);return _>=y&&_<=u}function In(r){let o=0;const c=requestAnimationFrame(()=>{o=requestAnimationFrame(()=>{o=0,r()})});return()=>{cancelAnimationFrame(c),o!==0&&cancelAnimationFrame(o)}}const be={"date-range-picker":"_date-range-picker_z2x5f_1","date-range-picker-dropdown":"_date-range-picker-dropdown_z2x5f_7","date-range-picker-inputs":"_date-range-picker-inputs_z2x5f_14","date-range-picker-field":"_date-range-picker-field_z2x5f_22","date-range-picker-separator":"_date-range-picker-separator_z2x5f_33","visually-hidden":"_visually-hidden_z2x5f_39"},En="_weekday_1fia2_85",b={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1fia2_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1fia2_20","nav-left":"_nav-left_1fia2_34","nav-right":"_nav-right_1fia2_35","month-label":"_month-label_1fia2_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1fia2_77",weekday:En,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1fia2_97","rte-datepicker-day-grid__range-links":"_rte-datepicker-day-grid__range-links_1fia2_104","rte-datepicker-day-grid__cells":"_rte-datepicker-day-grid__cells_1fia2_104","day-cell-range-links":"_day-cell-range-links_1fia2_120","rte-date-rangepicker-link":"_rte-date-rangepicker-link_1fia2_130","day-cell":"_day-cell_1fia2_120","day-cell__label":"_day-cell__label_1fia2_253","day-cell__surface":"_day-cell__surface_1fia2_257","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1fia2_377","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1fia2_391","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1fia2_392","month-cell":"_month-cell_1fia2_399","month-cell__label":"_month-cell__label_1fia2_434","year-cell":"_year-cell_1fia2_496","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1fia2_583"},Fa=({isOpen:r,currentValue:o,hasAction:c,onValidate:m,onCancel:y,minDate:u,maxDate:_,disabledDates:C,onChange:F,selectionMode:P="start",setInitialValue:ce})=>{const[D,O]=i.useState(s.DAY),h=i.useRef(null),[v,re]=i.useState(o),[S,de]=i.useState(null),[l,M]=i.useState(null),I=i.useMemo(()=>(l==null?void 0:l[0])||(v==null?void 0:v[0])||null,[l,v]),se=i.useMemo(()=>(l==null?void 0:l[1])||(v==null?void 0:v[1])||null,[l,v]);Ja(h,r,D);const{viewDate:k,setViewDate:V,getNextDateForDayNavigation:ue,getNextDateForCompactNavigation:K}=Qa(I?I??new Date:new Date),[ie,$]=i.useState(!1),[g,Y]=i.useState(I?I??k:k),fe=i.useMemo(()=>({minDate:u,maxDate:_,disabledDates:C}),[u,_,C]),z=e=>{const t=ue(e);Ee(t)},G=(e,t)=>{const p=K(e,t);Ee(p)},Ee=e=>{const t=on({anchorDay:null,viewDate:e,constraints:fe});t!==null&&Y(t)},pe=i.useMemo(()=>{const e=k??v??new Date,t=D;return D===s.DAY?en(e):t===s.MONTH?tn(e):an(e)},[D,k,v]),U=i.useMemo(()=>An({viewDate:k,selectedDates:l??v,minDate:u,maxDate:_,disabledDates:C}),[l,v,k,u,_,C]),X=i.useMemo(()=>nn({viewDate:k,selectedDate:l?l[0]:v?v[0]:null,minDate:u,maxDate:_,disabledDates:C}),[l,v,k,u,_,C]),me=i.useMemo(()=>rn({viewDate:k,selectedDate:l?l[0]:v?v[0]:null,minDate:u,maxDate:_,disabledDates:C}),[l,v,k,u,_,C]),d=()=>{D===s.DAY?(O(s.MONTH),le()):D===s.MONTH?(O(s.YEAR),Te()):(O(s.DAY),Ae())},x=e=>{const t=ln({date:e,constraints:fe});t!==null&&(V(t),$(!0),c?(P==="start"?M([t,null]):l?t<l[0]?M([t,null]):M([l[0],t]):v&&(t>=v[0]?M([v[0],t]):M([t,null])),Y(t),F==null||F(t)):(P==="start"?($(!0),M([t,null])):l&&t<l[0]?M([t,null]):($(!1),M(null),re([l?l[0]:null,t]),m==null||m()),Y(t),F==null||F(t)))},J=e=>{de(e)},T=e=>{const t=new Date(k.getFullYear(),e,1);V(t),Y(t),O(s.DAY),Ae()},Q=e=>{const t=new Date(e,k.getMonth(),1);V(t),Y(t),O(s.MONTH),le()},_e=()=>{de(null)},Ue=e=>{if(e.key==="Escape"){y==null||y();return}const t=D;t===s.DAY?Dt(e):t===s.MONTH?yt(e):Ze(e)},Dt=e=>{if(!Ft(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const p=g,f=U.find(A=>ze(A.date,p));f&&!f.isDisabled&&x(p);return}[Ge,Fe,Oe,We].includes(e.key)&&(e.preventDefault(),De(e.key))},yt=e=>{if(!Ot(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const p=g.getMonth(),f=X.find(A=>A.monthIndex===p);f&&!f.isDisabled&&T(p);return}[Ge,Fe,Oe,We].includes(e.key)&&(e.preventDefault(),xe(e.key))},Ze=e=>{if(!je(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const p=g.getFullYear(),f=me.find(A=>A.year===p);f&&!f.isDisabled&&Q(p);return}[Ge,Fe,Oe,We].includes(e.key)&&(e.preventDefault(),j(e.key))},Ft=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ot=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,je=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,De=e=>{const t=U,p=Kt(t,g);if(p<0)return;const f=It(e,"day"),A=Math.abs(f)===7?7:1,ee=f>0?1:-1;let W=p+f;for(;W>=0&&W<t.length&&t[W].isDisabled;)W+=ee*A;if(W<0||W>=t.length){const B=Ke(Bt(g,f));if(vt(B))return;Pe(B),Ae();return}const Z=t[W].date;Y(Z),de(Z),Ae()},xe=e=>{const t=X,p=g.getMonth(),f=t.findIndex(Re=>Re.monthIndex===p);if(f<0)return;const A=It(e,"monthYear"),ee=cn(g,A);if(ee.getFullYear()!==k.getFullYear()){Pe(ee),le();return}const W=3,Z=t.length;let B=at({currentIndex:f,key:e,columnCount:W,cellCount:Z}),N=0;for(;B!==null&&t[B].isDisabled&&N<Z;)B=at({currentIndex:B,key:e,columnCount:W,cellCount:Z}),N+=1;if(B===null||t[B].isDisabled)return;const ge=t[B].monthIndex;Y(new Date(k.getFullYear(),ge,1)),le()},j=e=>{const t=me,p=g.getFullYear(),f=t.findIndex(Me=>Me.year===p);if(f<0)return;const A=It(e,"monthYear"),ee=p+A;if(!t.map(Me=>Me.year).includes(ee)){Pe(new Date(ee,0,1)),Te();return}const Z=3,B=t.length;let N=at({currentIndex:f,key:e,columnCount:Z,cellCount:B}),ge=0;for(;N!==null&&t[N].isDisabled&&ge<B;)N=at({currentIndex:N,key:e,columnCount:Z,cellCount:B}),ge+=1;if(N===null||t[N].isDisabled)return;const Re=t[N].year;Y(new Date(Re,0,1)),Te()},vt=e=>Na({date:e,...fe}),qe=e=>!I||!se||ie?!1:P==="end"&&S?S<I?e>=I&&e<=se:!1:e>=I&&e<=se,Xe=e=>I?e.toDateString()===I.toDateString():!1,Je=e=>se?e.toDateString()===se.toDateString():!1,Qe=e=>{if(ie){if(!l)return!1;const[t,p]=l;if(t&&!p&&S)return S===e&&e===t?!1:e>=t&&e<=S;if(p&&t){if(S&&P==="end"){if(S===e&&e===p)return!1;if(S>=t)return e>=t&&e<=S}return e>=t&&e<=p}return!1}return!!(P==="end"&&I&&S&&e>=I&&e<=S)},et=e=>{if(P==="start"){if(l&&l[1])return e.toDateString()===l[1].toDateString()}else if(S)return e.toDateString()===S.toDateString();return!1},ye=e=>{if(P==="start"){if(S)return e.toDateString()===S.toDateString()}else if(l&&l[0])return e.toDateString()===l[0].toDateString();return!1},Ae=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},le=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Te=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},tt=()=>{$(!1),re([l?l[0]:null,l?l[1]:null]),m==null||m()},ht=(e,t)=>ze(e,t)?0:-1,wt=e=>e===g.getMonth()?0:-1,bt=e=>e===g.getFullYear()?0:-1,Pe=e=>{const t=fe;let p=null;D===s.DAY?p=dn({focusTargetDay:e,constraints:t}):D===s.MONTH?p=un({focusTargetMonthStart:e,constraints:t}):p=pn({focusTargetYear:e.getFullYear(),constraints:t}),p!==null&&(V(p.viewDate),Y(p.menuInitialActiveDate))},Se=()=>{y==null||y()};return i.useEffect(()=>{re(o)},[o]),i.useEffect(()=>{r&&((()=>{o!=null&&o[0]&&!(o!=null&&o[1])&&($(!0),M([o[0],null]))})(),D===s.DAY?Ae():D===s.MONTH?le():Te())},[r,o,ce,D]),i.useEffect(()=>{(()=>{if(D===s.DAY){const t=U;if(Kt(t,g)>=0)return;const f=t.find(A=>!A.isDisabled);f&&Y(f.date)}else if(D===s.MONTH){const t=X,p=g.getMonth();if(t.some(A=>A.monthIndex===p&&!A.isDisabled&&k.getFullYear()===g.getFullYear()))return;const f=t.find(A=>!A.isDisabled);f&&Y(new Date(k.getFullYear(),f.monthIndex,1))}else{const t=me,p=g.getFullYear();if(t.some(A=>A.year===p&&!A.isDisabled))return;const f=t.find(A=>!A.isDisabled);f&&Y(new Date(f.year,0,1))}})()},[k,g,D,U,X,me]),a.jsxs("div",{ref:h,className:b["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ue,children:[a.jsxs("div",{className:b["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:b["nav-left"],children:D===s.DAY?a.jsxs(a.Fragment,{children:[a.jsx(we,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevYear,onClick:()=>z("prevYear")}),a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent",tabIndex:ne,"data-datepicker-tab":ae.navPrevMonth,onClick:()=>z("prevMonth")})]}):D===s.MONTH?a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevCompact,onClick:()=>G("previous","month")}):a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevCompact,onClick:()=>G("previous","year")})}),D===s.YEAR?a.jsx("span",{className:Ie(b["month-label"],"month-label-static"),children:pe}):a.jsx("button",{className:b["month-label"],onClick:d,"aria-label":`Changer de vue, ${pe} , appuyer pour voir les ${D===s.DAY?"mois":"années"}`,tabIndex:ne,"data-datepicker-tab":ae.monthLabel,children:pe}),a.jsx("div",{className:b["nav-right"],children:D===s.DAY?a.jsxs(a.Fragment,{children:[a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant",tabIndex:ne,"data-datepicker-tab":ae.navNextMonth,onClick:()=>z("nextMonth")}),a.jsx(we,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextYear,onClick:()=>z("nextYear")})]}):D===s.MONTH?a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextCompact,onClick:()=>G("next","month")}):a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextCompact,onClick:()=>G("next","year")})})]}),D===s.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:b["rte-datepicker-weekdays"],"aria-hidden":"true",children:sn().map((e,t)=>a.jsx("div",{className:b.weekday,children:e},t))}),a.jsx(Rt,{appearance:"brand"}),a.jsxs("div",{className:Ie(b["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[a.jsx("div",{className:b["rte-datepicker-day-grid__range-links"],"aria-hidden":"true",children:U.map((e,t)=>a.jsxs("div",{className:b["day-cell-range-links"],"data-cell-type":e.cellType,"data-in-range":qe(e.date)||void 0,"data-in-preview":Qe(e.date)||void 0,"data-first-in-preview":ye(e.date)||void 0,"data-last-in-preview":et(e.date)||void 0,"data-first-in-range":Xe(e.date)||void 0,"data-last-in-range":Je(e.date)||void 0,"data-day-hovered":(S==null?void 0:S.toDateString())===e.date.toDateString()||void 0,children:[t%7===0&&a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"start-line"}),a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"start-cell"}),a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"end-cell"}),t%7===6&&a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"end-line"})]},e.date.toISOString()))}),a.jsx("div",{className:b["rte-datepicker-day-grid__cells"],children:U.map((e,t)=>a.jsxs("button",{type:"button",className:Ie(b["day-cell"],"day-cell"),role:"gridcell",onMouseEnter:()=>J(e.date),onMouseLeave:()=>_e(),onClick:()=>x(e.date),"aria-selected":e.cellType==="selected"||void 0,tabIndex:ht(e.date,g),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(g==null?void 0:g.toDateString())===e.date.toDateString()||void 0,"data-index":t,"data-in-range":qe(e.date)||void 0,"data-in-preview":Qe(e.date)||void 0,"data-first-in-preview":ye(e.date)||void 0,"data-last-in-preview":et(e.date)||void 0,"data-first-in-range":Xe(e.date)||void 0,"data-last-in-range":Je(e.date)||void 0,children:[a.jsx("span",{className:b["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:b["day-cell__label"],children:e.label})]},e.date.toISOString()))})]})]}):D===s.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(Rt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:Ie(b["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:X.map(e=>a.jsx("button",{type:"button",className:Ie(b["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:wt(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":k.getMonth(),"data-active-date-year":g.getFullYear(),"data-active-view-year":k.getFullYear(),"data-datepicker-active":e.monthIndex===g.getMonth()&&k.getFullYear()===g.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>T(e.monthIndex),children:a.jsx("span",{className:b["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(Rt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:Ie(b["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:me.map(e=>a.jsx("button",{type:"button",className:Ie(b["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(g==null?void 0:g.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:bt(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>Q(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:b["rte-datepicker-dropdown-actions"],children:[a.jsx(Wt,{label:"Annuler",size:"s",variant:"transparent",tabIndex:ne,"data-datepicker-tab":ae.cancel,onClick:Se}),a.jsx(Wt,{label:"Confirmer",size:"s",variant:"transparent",tabIndex:ne,"data-datepicker-tab":ae.confirm,onClick:tt})]})]})};Fa.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"[Date | null, Date | null] | null",elements:[{name:"tuple",raw:"[Date | null, Date | null]",elements:[{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]}]},{name:"null"}]},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},setInitialValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: [Date | null, Date | null]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[Date | null, Date | null]",elements:[{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]}]},name:"date"}],return:{name:"void"}}},description:""}}};const _n=/^\d*$/,Tn=r=>r.dayDigits===""&&r.monthDigits===""&&r.yearDigits==="",Ct=({id:r,pickerInputRef:o,isFocused:c,onKeyDown:m,onMouseDown:y,onMouseUp:u,onFocus:_,onBlur:C,ariaLabelledBy:F,ariaDescribedBy:P,openButtonAriaLabel:ce,value:D,onChange:O,activeSegment:h,moveToNextSegment:v,moveToPreviousSegment:re,onOpenPicker:S,disabled:de,dateState:l,internalValue:M,increaseActiveSegmentValue:I,decreaseActiveSegmentValue:se,resetActiveSegmentValue:k,updateDateSegment:V,displayValue:ue,isError:K,readonly:ie})=>{const $=i.useRef(null),g=i.useRef(O),Y=i.useRef(D??null),fe=i.useMemo(()=>ue,[ue]),z=d=>{$.current=d},G=()=>$.current;i.useEffect(()=>{g.current=O},[O]);const Ee=d=>{const x=d.key;if(m==null||m(d),[Oe,We,Ge,Fe,kn,xn].includes(x)){d.preventDefault(),me(x);return}if(_n.test(x))d.preventDefault(),pe(x);else return},pe=d=>{const x=h===s.DAY?"day":h===s.MONTH?"month":"year",J=l[`${x}Digits`];h===s.YEAR?U(J,d):X(J,d)},U=(d,x)=>{const J=Array.from(d).findIndex(T=>T!=="0");if(J===0&&z(null),G()===s.YEAR){const T=d.slice(J)+x,Q=St[s.YEAR],_e=Ne(Math.min(Number(T),Q),s.YEAR);V(s.YEAR,_e)}else{z(s.YEAR);const T=Ne(Number(x),s.YEAR);V(s.YEAR,T)}},X=(d,x)=>{if(Array.from(d).findIndex(T=>T!=="0")===0&&z(null),h===s.MONTH)if(G()===s.MONTH){const T=d+x,Q=Ne(Math.min(Number(T),St[s.MONTH]),s.MONTH);V(s.MONTH,Q),v()}else{z(s.MONTH);const T=Ne(Number(x),s.MONTH);V(s.MONTH,T)}else if(G()===s.DAY){const T=d+x,Q=Ne(Math.min(Number(T),St[s.DAY]),s.DAY);V(s.DAY,Q),v()}else{z(s.DAY);const T=Ne(Number(x),s.DAY);V(s.DAY,T)}},me=d=>{[Ge,Fe].includes(d)?($.current=null,d===Fe?v():re()):[Oe,We].includes(d)?d===Oe?I(h):se(h):k(h)};return i.useEffect(()=>{var d,x;if(M===null&&!Tn(l)){(d=g.current)==null||d.call(g,M);return}hn(Y.current,M)||(Y.current=M,(x=g.current)==null||x.call(g,M))},[M,l]),a.jsx(wn,{id:`${r}`,pickerInputRef:o,isFocused:c,onKeyDown:Ee,onMouseDown:y,onMouseUp:u,onFocus:_,onBlur:C,value:fe,icon:"calendar-month",onOpenPicker:S,fixedWidth:!1,onChange:()=>{},ariaLabelledBy:F,ariaDescribedBy:P,openButtonAriaLabel:ce,disabled:de,isError:K,readOnly:ie})};Ct.__docgenInfo={description:"",methods:[],displayName:"DateRangeInput",props:{value:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newDate: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"newDate"}],return:{name:"void"}}},description:""},activeSegment:{required:!0,tsType:{name:"DateSegmentEnum"},description:""},moveToNextSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},moveToPreviousSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:""},dateState:{required:!0,tsType:{name:"DdMmYyyyDigitParts"},description:""},internalValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},increaseActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},decreaseActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},resetActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},updateDateSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum, value: string) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Le="start",Mt="end",[Ve,Nt,$t]=Wa,$e=({id:r,label:o,labelId:c,required:m=!1,showLabelRequirement:y=!1,value:u,defaultValue:_,onChange:C,hasAction:F=!1,onValidate:P,onCancel:ce,minDate:D,maxDate:O,disabledDates:h,disabled:v=!1,assistiveTextLabel:re,errorMessage:S,assistiveAppearance:de="description",showAssistiveIcon:l=!1,assistiveTextLink:M,isError:I=!1,readonly:se=!1,width:k=Ba})=>{const[V,ue]=i.useState(!1),[K,ie]=i.useState(!1),[$,g]=i.useState(!1),[Y,fe]=i.useState(void 0),z=i.useRef(!1),G=i.useRef("start"),Ee=i.useRef(null),pe=i.useRef(null),U=i.useRef(null),X=i.useRef(null),me=gn(X.current),d=i.useRef(C),x=c??`${r}-label`,J=`${r}-start-label`,T=`${r}-end-label`,Q=`${r}-assistive-text`,_e=I&&S||re,Ue=_e&&!K,Dt=`${x} ${J}`,yt=`${x} ${T}`,Ze=Ue?Q:void 0;i.useEffect(()=>{d.current=C},[C]);const je=(n=>{if(!n)return null;const[w,E]=n;return[w?he(w):null,E?he(E):null]})(u!==void 0?u:_),[De,xe]=i.useState(je??[null,null]),j=i.useRef(je??[null,null]),{dateState:vt,internalValue:qe,increaseActiveSegmentValue:Xe,decreaseActiveSegmentValue:Je,resetActiveSegmentValue:Qe,updateDateSegment:et,updateFullDate:ye,displayValue:Ae,updateDisplayedDate:le}=zt(j.current[0]?he(j.current[0]):null,{minDate:D,maxDate:O,disabledDates:h}),{dateState:Te,internalValue:tt,increaseActiveSegmentValue:ht,decreaseActiveSegmentValue:wt,resetActiveSegmentValue:bt,updateDateSegment:Pe,updateFullDate:Se,displayValue:e,updateDisplayedDate:t}=zt(j.current[1]?he(j.current[1]):null,{minDate:D,maxDate:O,disabledDates:h}),[p,f]=i.useState("start"),[A,ee]=i.useState(je),{moveToNextSegment:W,moveToPreviousSegment:Z,setActiveDateSegment:B,activeDateSegment:N}=mn(),ge=n=>{G.current=n},Re=n=>{Ee.current=n},Me=()=>z.current,kt=n=>{z.current=n},Ya=()=>{ge(Le),ue(!0),!Me()&&ve(N)},ja=()=>{ge(Mt),ue(!0),!Me()&&ve(N)},Yt=()=>{B(Ve),ue(!1),kt(!1),Re(null),F&&$&&Lt()},qa=()=>{ge(Le),kt(!0),ie(!1)},Pa=()=>{ge(Mt),kt(!0),ie(!1)},jt=()=>{const n=G.current,w=pe.current,E=U.current,q=1,te=bn(),He=n===Le?(w==null?void 0:w.selectionStart)??0:(E==null?void 0:E.selectionStart)??0;He<=te[Ve][q]+1?ve(Ve):He<=te[Nt][q]+1?ve(Nt):ve($t),z.current=!1},ve=i.useCallback(n=>{N!==n&&B(n);const w=G.current,E=3,q=n===Ve?0:n===Nt?2+E:0+2*(2+E),te=n===$t?q+4:q+2;In(()=>{var He,Vt;w&&(w===Le?(He=pe.current)==null||He.setSelectionRange(q,te):(Vt=U.current)==null||Vt.setSelectionRange(q,te))})},[N,B]),xt=i.useCallback(n=>{var E;F&&K&&g(!0);const w=j.current;nt(w,n)||(j.current=n,xe(n),t(n[1]),le(n[0]),ye(n[0]),Se(n[1]),(E=d.current)==null||E.call(d,n))},[t,le,Se,ye,F,K]),Ha=n=>{if(n)if(p==="start"){const w=[n,null];f("end"),xt(w)}else{const[w]=j.current;if(w&&n<w)xt([n,null]);else{const E=[w,n];xt(E),f("start"),F||(ee(E),Ht())}}},La=i.useCallback(n=>{var te;const w=n?he(n):null,E=j.current,q=[w,E[1]];nt(E,q)||(j.current=q,xe(q),(te=d.current)==null||te.call(d,q))},[]),Va=i.useCallback(n=>{var te;const w=n?he(n):null,E=j.current,q=[E[0],w];nt(E,q)||(j.current=q,xe(q),(te=d.current)==null||te.call(d,q))},[]),qt=()=>{ve(N)},Ka=()=>{if(K&&$&&F){Pt();return}At()},Pt=()=>{Lt(),At()},za=()=>{ee(De),ye(De[0]),Se(De[1]),Ht()},Ht=()=>{P==null||P(),g(!1),At()},At=()=>{ie(!1),ue(!1),B(Ve),f("start"),Re(null)},Lt=()=>{var w;const n=A??[null,null];j.current=n,xe(n),(w=d.current)==null||w.call(d,n),ce==null||ce(),g(!1),le(n[0]),t(n[1]),ye(n[0]),Se(n[1])};return i.useEffect(()=>{j.current=De},[De]),i.useEffect(()=>{const n=u?[u[0]?he(u[0]):null,u[1]?he(u[1]):null]:[null,null];nt(j.current,n)||(j.current=n,xe(n))},[u]),i.useEffect(()=>{ve(N)},[N,ve]),i.useEffect(()=>{K&&u&&u[0]&&!u[1]&&f("end")},[K,u,t,le]),i.useEffect(()=>{const n=X.current;if(!n)return;const w=()=>{fe(Math.round(n.getBoundingClientRect().width))};w();const E=new ResizeObserver(w);return E.observe(n),()=>{E.disconnect()}},[k]),a.jsxs("div",{className:be["date-range-picker"],style:{width:k,minWidth:Ca},children:[a.jsx(fn,{id:x,label:o,required:m,showLabelRequirement:y}),a.jsx("div",{className:be["date-range-picker-dropdown"],children:a.jsx(yn,{style:{width:Y},isList:!1,isOpen:K,onClose:Ka,offset:8,overlayLevel:me,hasMaxWidth:!1,autofocus:!1,trigger:a.jsxs("div",{className:be["date-range-picker-inputs"],ref:X,role:"group","aria-labelledby":x,children:[a.jsx("span",{id:J,className:be["visually-hidden"],children:"Date de début"}),a.jsx("div",{className:be["date-range-picker-field"],children:a.jsx(Ct,{id:`${r}-start-input`,pickerInputRef:pe,isFocused:V,onKeyDown:qt,onMouseDown:qa,onMouseUp:jt,onFocus:Ya,onBlur:Yt,value:qe??null,moveToNextSegment:W,moveToPreviousSegment:Z,onChange:La,activeSegment:N,onOpenPicker:()=>{ie(!K),f("start"),G.current=Le},minDate:D,maxDate:O,disabledDates:h,disabled:v,dateState:vt,internalValue:qe,increaseActiveSegmentValue:Xe,decreaseActiveSegmentValue:Je,resetActiveSegmentValue:Qe,updateDateSegment:et,updateFullDate:ye,displayValue:Ae,ariaLabelledBy:Dt,ariaDescribedBy:Ze,openButtonAriaLabel:"Ouvrir le sélecteur de date de début",isError:I,readonly:se})}),a.jsx(vn,{className:be["date-range-picker-separator"],name:"arrow-double-right",size:20}),a.jsx("span",{id:T,className:be["visually-hidden"],children:"Date de fin"}),a.jsx("div",{className:be["date-range-picker-field"],children:a.jsx(Ct,{id:`${r}-end-input`,pickerInputRef:U,isFocused:V,onKeyDown:qt,onMouseDown:Pa,onMouseUp:jt,onFocus:ja,onBlur:Yt,value:tt??null,moveToNextSegment:W,moveToPreviousSegment:Z,onChange:Va,activeSegment:N,onOpenPicker:()=>{ie(!K),G.current=Mt,f("end")},minDate:D,maxDate:O,disabledDates:h,disabled:v,dateState:Te,internalValue:tt,increaseActiveSegmentValue:ht,decreaseActiveSegmentValue:wt,resetActiveSegmentValue:bt,updateDateSegment:Pe,updateFullDate:Se,displayValue:e,ariaLabelledBy:yt,ariaDescribedBy:Ze,openButtonAriaLabel:"Ouvrir le sélecteur de date de fin",isError:I,readonly:se})})]}),position:"bottom",children:a.jsx(Fa,{onValidate:za,onCancel:Pt,minDate:D,maxDate:O,disabledDates:h,isOpen:K,currentValue:De,onChange:Ha,hasAction:F,selectionMode:p,setInitialValue:n=>ee(n)})})}),Ue&&a.jsx("div",{id:Q,children:a.jsx(Dn,{label:_e,appearance:I?"error":de,showIcon:l,href:M})})]})};$e.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"490px"',computed:!1},required:!1}}};const cr={title:"Composants/DateRangePicker/DateRangePicker",component:$e,tags:["autodocs"],argTypes:{width:{control:"text"}}},Ut=r=>r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune",Rn=r=>r?`${r[0]?Ut(r[0]):"Choisir une date début"} - ${r[1]?Ut(r[1]):"Choisir une date fin"}`:"aucune",oe=(r,o)=>function(m){const[y,u]=i.useState(r),_=C=>{u(C)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée: ",Rn(y)]}),a.jsx($e,{...m,...o,onChange:_,value:y})]})},Be=new Date,Ye=[new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()),new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()+7)],Oa=r=>r.querySelectorAll("input"),L={args:{id:"date-range-picker",label:"Période",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,width:Ba,required:!1,showLabelRequirement:!1},render:oe(Ye)},rt={args:{...L.args,value:void 0},render:r=>{const{value:o,...c}=r;return a.jsx($e,{...c,defaultValue:Ye,onChange:()=>{}})}},st={args:{...L.args,value:null},render:r=>{const[o,c]=i.useState(Ye);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>c([new Date(2026,5,1),new Date(2026,5,10)]),children:"Set range"}),a.jsx("button",{onClick:()=>c(null),children:"Clear"})]}),a.jsx($e,{...r,value:o,onChange:c})]})}},it={args:{...L.args,width:Ca},render:oe(Ye)},lt={args:{...L.args,disabled:!0},render:oe(Ye)},ot={args:{...L.args,isError:!0,assistiveTextLabel:"Champ en erreur",assistiveAppearance:"error"},render:oe(Ye),play:async({canvasElement:r})=>{const[o,c]=Oa(r);R(o).toHaveAttribute("aria-describedby","date-range-picker-assistive-text"),R(c).toHaveAttribute("aria-describedby","date-range-picker-assistive-text")}},ct={tags:["!autodocs"],args:{...L.args,value:null},render:oe([null,null]),play:async({canvasElement:r})=>{const[o,c]=Oa(r);R(o).toBeInTheDocument(),R(c).toBeInTheDocument(),await H.click(o);for(const m of"15062026")await H.keyboard(m);await H.click(c);for(const m of"22062026")await H.keyboard(m);R(Gt(o)).toBe("15/06/2026"),R(Gt(c)).toBe("22/06/2026")}},dt={tags:["!autodocs"],args:{...L.args,value:null,hasAction:!0},render:oe([null,null]),play:async({canvasElement:r})=>{const c=ke(r).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument();const u=m.querySelectorAll(".day-cell:not([disabled])");R(u.length).toBeGreaterThan(1),await H.click(u[0]),await H.click(u[1]),await H.click(ke(m).getByRole("button",{name:/confirmer/i})),await Ce(()=>{R(y).not.toBeInTheDocument()})}},ut={tags:["!autodocs"],args:{...L.args,value:null,minDate:new Date(2026,4,1),maxDate:new Date(2026,5,30),hasAction:!0},render:oe([new Date(2026,4,5),new Date(2026,4,12)]),play:async({canvasElement:r})=>{const c=ke(r).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument(),await Ce(()=>{const _=m.querySelector('.day-cell[data-datepicker-active="true"]');R(_).toBeInTheDocument(),R(_).toHaveFocus()});const u=m.querySelectorAll(".day-cell[disabled]");R(u.length).toBeGreaterThan(0)}},pt={tags:["!autodocs"],args:{...L.args,value:null,disabledDates:[new Date(2026,4,12),new Date(2026,4,15),new Date(2026,4,20)],hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)]),play:async({canvasElement:r})=>{const c=ke(r).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument();const u=m.querySelectorAll(".day-cell[disabled]");R(u.length).toBeGreaterThanOrEqual(3)}},mt={args:{...L.args,value:null,readonly:!0,hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)])},gt={tags:["skip-ci","!autodocs"],args:{...L.args,value:null,hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)]),play:async({canvasElement:r})=>{const m=ke(r).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i})[0];await H.click(m);const y=await ft(),u=y.querySelector("[role='dialog']");R(u).toBeInTheDocument(),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/année précédente/i})).toHaveFocus()}),await H.keyboard(Ga),await Ce(()=>{R(y).not.toBeInTheDocument(),R(m).toHaveFocus()})}};var Zt,Xt,Jt;L.parameters={...L.parameters,docs:{...(Zt=L.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  args: {
    id: "date-range-picker",
    label: "Période",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
    hasAction: true,
    width: DATERANGEPICKER_DEFAULT_WIDTH,
    required: false,
    showLabelRequirement: false
  },
  render: buildRender(defaultRange)
}`,...(Jt=(Xt=L.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Qt,ea,ta;rt.parameters={...rt.parameters,docs:{...(Qt=rt.parameters)==null?void 0:Qt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: undefined
  },
  render: args => {
    const {
      value: _ignored,
      ...rest
    } = args;
    void _ignored;
    return <DateRangePicker {...rest} defaultValue={defaultRange} onChange={() => {}} />;
  }
}`,...(ta=(ea=rt.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var aa,na,ra;st.parameters={...st.parameters,docs:{...(aa=st.parameters)==null?void 0:aa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: null
  },
  render: args => {
    const [date, setDate] = useState<DateRangeValue>(defaultRange);
    return <>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <button onClick={() => setDate([new Date(2026, 5, 1), new Date(2026, 5, 10)])}>Set range</button>
          <button onClick={() => setDate(null)}>Clear</button>
        </div>
        <DateRangePicker {...args} value={date} onChange={setDate} />
      </>;
  }
}`,...(ra=(na=st.parameters)==null?void 0:na.docs)==null?void 0:ra.source}}};var sa,ia,la;it.parameters={...it.parameters,docs:{...(sa=it.parameters)==null?void 0:sa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    width: DATERANGEPICKER_MIN_WIDTH
  },
  render: buildRender(defaultRange)
}`,...(la=(ia=it.parameters)==null?void 0:ia.docs)==null?void 0:la.source}}};var oa,ca,da;lt.parameters={...lt.parameters,docs:{...(oa=lt.parameters)==null?void 0:oa.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  },
  render: buildRender(defaultRange)
}`,...(da=(ca=lt.parameters)==null?void 0:ca.docs)==null?void 0:da.source}}};var ua,pa,ma;ot.parameters={...ot.parameters,docs:{...(ua=ot.parameters)==null?void 0:ua.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true,
    assistiveTextLabel: "Champ en erreur",
    assistiveAppearance: "error"
  },
  render: buildRender(defaultRange),
  play: async ({
    canvasElement
  }) => {
    const [startInput, endInput] = getRangeInputs(canvasElement);
    expect(startInput).toHaveAttribute("aria-describedby", "date-range-picker-assistive-text");
    expect(endInput).toHaveAttribute("aria-describedby", "date-range-picker-assistive-text");
  }
}`,...(ma=(pa=ot.parameters)==null?void 0:pa.docs)==null?void 0:ma.source}}};var ga,fa,Da;ct.parameters={...ct.parameters,docs:{...(ga=ct.parameters)==null?void 0:ga.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null
  },
  render: buildRender([null, null]),
  play: async ({
    canvasElement
  }) => {
    const [startInput, endInput] = getRangeInputs(canvasElement);
    expect(startInput).toBeInTheDocument();
    expect(endInput).toBeInTheDocument();
    await userEvent.click(startInput as HTMLElement);
    for (const digit of "15062026") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(endInput as HTMLElement);
    for (const digit of "22062026") {
      await userEvent.keyboard(digit);
    }
    expect(normalizedDateInputValue(startInput as HTMLInputElement)).toBe("15/06/2026");
    expect(normalizedDateInputValue(endInput as HTMLInputElement)).toBe("22/06/2026");
  }
}`,...(Da=(fa=ct.parameters)==null?void 0:fa.docs)==null?void 0:Da.source}}};var ya,va,ha;dt.parameters={...dt.parameters,docs:{...(ya=dt.parameters)==null?void 0:ya.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null,
    hasAction: true
  },
  render: buildRender([null, null]),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", {
      name: /Ouvrir le sélecteur de date de début/i
    });
    await userEvent.click(openButtons[0]);
    const dropdown = await getDropdown();
    const datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    const dayButtons = dropdown.querySelectorAll(".day-cell:not([disabled])");
    expect(dayButtons.length).toBeGreaterThan(1);
    await userEvent.click(dayButtons[0] as HTMLElement);
    await userEvent.click(dayButtons[1] as HTMLElement);
    await userEvent.click(within(dropdown).getByRole("button", {
      name: /confirmer/i
    }));
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
    });
  }
}`,...(ha=(va=dt.parameters)==null?void 0:va.docs)==null?void 0:ha.source}}};var wa,ba,ka;ut.parameters={...ut.parameters,docs:{...(wa=ut.parameters)==null?void 0:wa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null,
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 5, 30),
    hasAction: true
  },
  render: buildRender([new Date(2026, 4, 5), new Date(2026, 4, 12)]),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", {
      name: /Ouvrir le sélecteur de date de début/i
    });
    await userEvent.click(openButtons[0]);
    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();
    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });
    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBeGreaterThan(0);
  }
}`,...(ka=(ba=ut.parameters)==null?void 0:ba.docs)==null?void 0:ka.source}}};var xa,Aa,Sa;pt.parameters={...pt.parameters,docs:{...(xa=pt.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null,
    disabledDates: [new Date(2026, 4, 12), new Date(2026, 4, 15), new Date(2026, 4, 20)],
    hasAction: true
  },
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", {
      name: /Ouvrir le sélecteur de date de début/i
    });
    await userEvent.click(openButtons[0]);
    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();
    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBeGreaterThanOrEqual(3);
  }
}`,...(Sa=(Aa=pt.parameters)==null?void 0:Aa.docs)==null?void 0:Sa.source}}};var Ia,Ea,_a;mt.parameters={...mt.parameters,docs:{...(Ia=mt.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: null,
    readonly: true,
    hasAction: true
  },
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)])
}`,...(_a=(Ea=mt.parameters)==null?void 0:Ea.docs)==null?void 0:_a.source}}};var Ta,Ra,Ma;gt.parameters={...gt.parameters,docs:{...(Ta=gt.parameters)==null?void 0:Ta.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    value: null,
    hasAction: true
  },
  render: buildRender([new Date(2026, 4, 10), new Date(2026, 4, 18)]),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButtons = canvas.getAllByRole("button", {
      name: /Ouvrir le sélecteur de date de début/i
    });
    const firstOpenButton = openButtons[0];
    await userEvent.click(firstOpenButton);
    const dropdown = await getDropdown();
    const dialog = dropdown.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();
    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", {
        name: /^annuler$/i
      })).toHaveFocus();
    });
    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", {
        name: /^confirmer$/i
      })).toHaveFocus();
    });
    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", {
        name: /année précédente/i
      })).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
      expect(firstOpenButton).toHaveFocus();
    });
  }
}`,...(Ma=(Ra=gt.parameters)==null?void 0:Ra.docs)==null?void 0:Ma.source}}};const dr=["Default","UncontrolledDefaultValue","ControlledPropUpdate","MinWidth","Disabled","Error","EmptyValue","WithAction","WithMinMax","DisabledDates","Readonly","TabNavigation"];export{st as ControlledPropUpdate,L as Default,lt as Disabled,pt as DisabledDates,ct as EmptyValue,ot as Error,it as MinWidth,mt as Readonly,gt as TabNavigation,rt as UncontrolledDefaultValue,dt as WithAction,ut as WithMinMax,dr as __namedExportsOrder,cr as default};
