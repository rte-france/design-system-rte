import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ga}from"./keyboard-test.constants-D8znW6ct.js";import{D as r,c as ae,d as At,a as Wa}from"./timepicker.constants-CynrC_9x.js";import{w as ke,u as H,e as R,a as Ce}from"./index-4rjIhT2C.js";import{r as s}from"./index-G8LIXM5I.js";import{E as $a,F as Ua,o as Bt,G as Za,s as Ke,H as Xa,l as ze,i as Na,u as Ja,a as Qa,g as en,b as tn,c as an,e as nn,f as rn,I as ne,j as sn,k as Kt,n as ln,t as on,m as It,p as cn,q as at,v as dn,w as un,x as pn,y as zt,J as he,z as mn,K as nt,C as ft,D as Gt}from"./DatePicker.stories.util-Zd0d9Com.js";import{w as gn}from"./animation-BebxwkA_.js";import{u as fn}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as Dn,A as yn}from"./Label-_Lstalw-.js";import{D as vn}from"./Dropdown-CyecDUeK.js";import{I as hn}from"./Icon-DBkoQNiA.js";import{a as wn,B as bn,f as Ne,c as kn}from"./picker.utils-C68ap_Jx.js";import{w as Et}from"./animation-DwV-fHIC.js";import{E as _t,S as Tt,b as Ge,c as Oe,a as Ye,A as We,B as xn,D as Sn}from"./keyboard.constants-D1KJQ2-m.js";import{B as Wt}from"./Button-B3EnjUD7.js";import{D as Rt}from"./Divider-BVZUrQ0d.js";import{I as we}from"./IconButton-CJDki2nw.js";import{c as Ie}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Ba="490px",Ca="320px";function An(i){const{viewDate:p,selectedDates:c,minDate:m,maxDate:y,disabledDates:d}=i,_=$a(p),C=Ua(_),O=Bt(_,-C),P=Za(p),ce=Ke(new Date);return Array.from({length:P}).map((D,Y)=>{const h=Bt(O,Y),v=Xa(h,p),re=!!(c!=null&&c[0])&&ze(h,c[0]),A=!!(c!=null&&c[1])&&ze(h,c[1]),de=re||A,l=ze(h,ce),M=In(h,c);let I="default";return v?de?I="selected":l&&(I="today"):I="prev/next",{date:h,label:`${h.getDate()}`,cellType:I,isDisabled:Na({date:h,minDate:m,maxDate:y,disabledDates:d}),isInRange:M}})}function In(i,p){if(p===null)return!1;const[c,m]=p;if(c===null||m===null)return!1;const y=Ke(c),d=Ke(m),_=Ke(i);return _>=y&&_<=d}const be={"date-range-picker":"_date-range-picker_z2x5f_1","date-range-picker-dropdown":"_date-range-picker-dropdown_z2x5f_7","date-range-picker-inputs":"_date-range-picker-inputs_z2x5f_14","date-range-picker-field":"_date-range-picker-field_z2x5f_22","date-range-picker-separator":"_date-range-picker-separator_z2x5f_33","visually-hidden":"_visually-hidden_z2x5f_39"},En="_weekday_1fia2_85",b={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1fia2_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1fia2_20","nav-left":"_nav-left_1fia2_34","nav-right":"_nav-right_1fia2_35","month-label":"_month-label_1fia2_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1fia2_77",weekday:En,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1fia2_97","rte-datepicker-day-grid__range-links":"_rte-datepicker-day-grid__range-links_1fia2_104","rte-datepicker-day-grid__cells":"_rte-datepicker-day-grid__cells_1fia2_104","day-cell-range-links":"_day-cell-range-links_1fia2_120","rte-date-rangepicker-link":"_rte-date-rangepicker-link_1fia2_130","day-cell":"_day-cell_1fia2_120","day-cell__label":"_day-cell__label_1fia2_253","day-cell__surface":"_day-cell__surface_1fia2_257","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1fia2_377","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1fia2_391","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1fia2_392","month-cell":"_month-cell_1fia2_399","month-cell__label":"_month-cell__label_1fia2_434","year-cell":"_year-cell_1fia2_496","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1fia2_583"},Oa=({isOpen:i,currentValue:p,hasAction:c,onValidate:m,onCancel:y,minDate:d,maxDate:_,disabledDates:C,onChange:O,selectionMode:P="start",setInitialValue:ce})=>{const[D,Y]=s.useState(r.DAY),h=s.useRef(null),[v,re]=s.useState(p),[A,de]=s.useState(null),[l,M]=s.useState(null),I=s.useMemo(()=>(l==null?void 0:l[0])||(v==null?void 0:v[0])||null,[l,v]),se=s.useMemo(()=>(l==null?void 0:l[1])||(v==null?void 0:v[1])||null,[l,v]);Ja(h,i,D);const{viewDate:k,setViewDate:V,getNextDateForDayNavigation:ue,getNextDateForCompactNavigation:K}=Qa(I?I??new Date:new Date),[ie,$]=s.useState(!1),[g,F]=s.useState(I?I??k:k),fe=s.useMemo(()=>({minDate:d,maxDate:_,disabledDates:C}),[d,_,C]),z=e=>{const t=ue(e);Ee(t)},G=(e,t)=>{const u=K(e,t);Ee(u)},Ee=e=>{const t=on({anchorDay:null,viewDate:e,constraints:fe});t!==null&&F(t)},pe=s.useMemo(()=>{const e=k??v??new Date,t=D;return D===r.DAY?en(e):t===r.MONTH?tn(e):an(e)},[D,k,v]),U=s.useMemo(()=>An({viewDate:k,selectedDates:l??v,minDate:d,maxDate:_,disabledDates:C}),[l,v,k,d,_,C]),X=s.useMemo(()=>nn({viewDate:k,selectedDate:l?l[0]:v?v[0]:null,minDate:d,maxDate:_,disabledDates:C}),[l,v,k,d,_,C]),me=s.useMemo(()=>rn({viewDate:k,selectedDate:l?l[0]:v?v[0]:null,minDate:d,maxDate:_,disabledDates:C}),[l,v,k,d,_,C]),o=()=>{D===r.DAY?(Y(r.MONTH),le()):D===r.MONTH?(Y(r.YEAR),Te()):(Y(r.DAY),Se())},x=e=>{const t=ln({date:e,constraints:fe});t!==null&&(V(t),$(!0),c?(P==="start"?M([t,null]):l?t<l[0]?M([t,null]):M([l[0],t]):v&&(t>=v[0]?M([v[0],t]):M([t,null])),F(t),O==null||O(t)):(P==="start"?($(!0),M([t,null])):l&&t<l[0]?M([t,null]):($(!1),M(null),re([l?l[0]:null,t]),m==null||m()),F(t),O==null||O(t)))},J=e=>{de(e)},T=e=>{const t=new Date(k.getFullYear(),e,1);V(t),F(t),Y(r.DAY),Se()},Q=e=>{const t=new Date(e,k.getMonth(),1);V(t),F(t),Y(r.MONTH),le()},_e=()=>{de(null)},Ue=e=>{if(e.key==="Escape"){y==null||y();return}const t=D;t===r.DAY?Dt(e):t===r.MONTH?yt(e):Ze(e)},Dt=e=>{if(!Ot(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const u=g,f=U.find(S=>ze(S.date,u));f&&!f.isDisabled&&x(u);return}[Ge,Oe,Ye,We].includes(e.key)&&(e.preventDefault(),De(e.key))},yt=e=>{if(!Yt(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const u=g.getMonth(),f=X.find(S=>S.monthIndex===u);f&&!f.isDisabled&&T(u);return}[Ge,Oe,Ye,We].includes(e.key)&&(e.preventDefault(),xe(e.key))},Ze=e=>{if(!je(e.target))return;if(e.stopPropagation(),[_t,Tt].includes(e.key)){e.preventDefault();const u=g.getFullYear(),f=me.find(S=>S.year===u);f&&!f.isDisabled&&Q(u);return}[Ge,Oe,Ye,We].includes(e.key)&&(e.preventDefault(),j(e.key))},Ot=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Yt=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,je=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,De=e=>{const t=U,u=Kt(t,g);if(u<0)return;const f=It(e,"day"),S=Math.abs(f)===7?7:1,ee=f>0?1:-1;let W=u+f;for(;W>=0&&W<t.length&&t[W].isDisabled;)W+=ee*S;if(W<0||W>=t.length){const B=Ke(Bt(g,f));if(vt(B))return;Pe(B),Se();return}const Z=t[W].date;F(Z),de(Z),Se()},xe=e=>{const t=X,u=g.getMonth(),f=t.findIndex(Re=>Re.monthIndex===u);if(f<0)return;const S=It(e,"monthYear"),ee=cn(g,S);if(ee.getFullYear()!==k.getFullYear()){Pe(ee),le();return}const W=3,Z=t.length;let B=at({currentIndex:f,key:e,columnCount:W,cellCount:Z}),N=0;for(;B!==null&&t[B].isDisabled&&N<Z;)B=at({currentIndex:B,key:e,columnCount:W,cellCount:Z}),N+=1;if(B===null||t[B].isDisabled)return;const ge=t[B].monthIndex;F(new Date(k.getFullYear(),ge,1)),le()},j=e=>{const t=me,u=g.getFullYear(),f=t.findIndex(Me=>Me.year===u);if(f<0)return;const S=It(e,"monthYear"),ee=u+S;if(!t.map(Me=>Me.year).includes(ee)){Pe(new Date(ee,0,1)),Te();return}const Z=3,B=t.length;let N=at({currentIndex:f,key:e,columnCount:Z,cellCount:B}),ge=0;for(;N!==null&&t[N].isDisabled&&ge<B;)N=at({currentIndex:N,key:e,columnCount:Z,cellCount:B}),ge+=1;if(N===null||t[N].isDisabled)return;const Re=t[N].year;F(new Date(Re,0,1)),Te()},vt=e=>Na({date:e,...fe}),qe=e=>!I||!se||ie?!1:P==="end"&&A?A<I?e>=I&&e<=se:!1:e>=I&&e<=se,Xe=e=>I?e.toDateString()===I.toDateString():!1,Je=e=>se?e.toDateString()===se.toDateString():!1,Qe=e=>{if(ie){if(!l)return!1;const[t,u]=l;if(t&&!u&&A)return A===e&&e===t?!1:e>=t&&e<=A;if(u&&t){if(A&&P==="end"){if(A===e&&e===u)return!1;if(A>=t)return e>=t&&e<=A}return e>=t&&e<=u}return!1}return!!(P==="end"&&I&&A&&e>=I&&e<=A)},et=e=>{if(P==="start"){if(l&&l[1])return e.toDateString()===l[1].toDateString()}else if(A)return e.toDateString()===A.toDateString();return!1},ye=e=>{if(P==="start"){if(A)return e.toDateString()===A.toDateString()}else if(l&&l[0])return e.toDateString()===l[0].toDateString();return!1},Se=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},le=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Te=()=>{Et(()=>{const e=h.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},tt=()=>{$(!1),re([l?l[0]:null,l?l[1]:null]),m==null||m()},ht=(e,t)=>ze(e,t)?0:-1,wt=e=>e===g.getMonth()?0:-1,bt=e=>e===g.getFullYear()?0:-1,Pe=e=>{const t=fe;let u=null;D===r.DAY?u=dn({focusTargetDay:e,constraints:t}):D===r.MONTH?u=un({focusTargetMonthStart:e,constraints:t}):u=pn({focusTargetYear:e.getFullYear(),constraints:t}),u!==null&&(V(u.viewDate),F(u.menuInitialActiveDate))},Ae=()=>{y==null||y()};return s.useEffect(()=>{re(p)},[p]),s.useEffect(()=>{i&&((()=>{p!=null&&p[0]&&!(p!=null&&p[1])&&($(!0),M([p[0],null]))})(),D===r.DAY?Se():D===r.MONTH?le():Te())},[i,p,ce,D]),s.useEffect(()=>{(()=>{if(D===r.DAY){const t=U;if(Kt(t,g)>=0)return;const f=t.find(S=>!S.isDisabled);f&&F(f.date)}else if(D===r.MONTH){const t=X,u=g.getMonth();if(t.some(S=>S.monthIndex===u&&!S.isDisabled&&k.getFullYear()===g.getFullYear()))return;const f=t.find(S=>!S.isDisabled);f&&F(new Date(k.getFullYear(),f.monthIndex,1))}else{const t=me,u=g.getFullYear();if(t.some(S=>S.year===u&&!S.isDisabled))return;const f=t.find(S=>!S.isDisabled);f&&F(new Date(f.year,0,1))}})()},[k,g,D,U,X,me]),a.jsxs("div",{ref:h,className:b["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ue,children:[a.jsxs("div",{className:b["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:b["nav-left"],children:D===r.DAY?a.jsxs(a.Fragment,{children:[a.jsx(we,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevYear,onClick:()=>z("prevYear")}),a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent",tabIndex:ne,"data-datepicker-tab":ae.navPrevMonth,onClick:()=>z("prevMonth")})]}):D===r.MONTH?a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevCompact,onClick:()=>G("previous","month")}):a.jsx(we,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente",tabIndex:ne,"data-datepicker-tab":ae.navPrevCompact,onClick:()=>G("previous","year")})}),D===r.YEAR?a.jsx("span",{className:Ie(b["month-label"],"month-label-static"),children:pe}):a.jsx("button",{className:b["month-label"],onClick:o,"aria-label":`Changer de vue, ${pe} , appuyer pour voir les ${D===r.DAY?"mois":"années"}`,tabIndex:ne,"data-datepicker-tab":ae.monthLabel,children:pe}),a.jsx("div",{className:b["nav-right"],children:D===r.DAY?a.jsxs(a.Fragment,{children:[a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant",tabIndex:ne,"data-datepicker-tab":ae.navNextMonth,onClick:()=>z("nextMonth")}),a.jsx(we,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextYear,onClick:()=>z("nextYear")})]}):D===r.MONTH?a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextCompact,onClick:()=>G("next","month")}):a.jsx(we,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante",tabIndex:ne,"data-datepicker-tab":ae.navNextCompact,onClick:()=>G("next","year")})})]}),D===r.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:b["rte-datepicker-weekdays"],"aria-hidden":"true",children:sn().map((e,t)=>a.jsx("div",{className:b.weekday,children:e},t))}),a.jsx(Rt,{appearance:"brand"}),a.jsxs("div",{className:Ie(b["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[a.jsx("div",{className:b["rte-datepicker-day-grid__range-links"],"aria-hidden":"true",children:U.map((e,t)=>a.jsxs("div",{className:b["day-cell-range-links"],"data-cell-type":e.cellType,"data-in-range":qe(e.date)||void 0,"data-in-preview":Qe(e.date)||void 0,"data-first-in-preview":ye(e.date)||void 0,"data-last-in-preview":et(e.date)||void 0,"data-first-in-range":Xe(e.date)||void 0,"data-last-in-range":Je(e.date)||void 0,"data-day-hovered":(A==null?void 0:A.toDateString())===e.date.toDateString()||void 0,children:[t%7===0&&a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"start-line"}),a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"start-cell"}),a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"end-cell"}),t%7===6&&a.jsx("div",{className:b["rte-date-rangepicker-link"],"data-position":"end-line"})]},e.date.toISOString()))}),a.jsx("div",{className:b["rte-datepicker-day-grid__cells"],children:U.map((e,t)=>a.jsxs("button",{type:"button",className:Ie(b["day-cell"],"day-cell"),role:"gridcell",onMouseEnter:()=>J(e.date),onMouseLeave:()=>_e(),onClick:()=>x(e.date),"aria-selected":e.cellType==="selected"||void 0,tabIndex:ht(e.date,g),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(g==null?void 0:g.toDateString())===e.date.toDateString()||void 0,"data-index":t,"data-in-range":qe(e.date)||void 0,"data-in-preview":Qe(e.date)||void 0,"data-first-in-preview":ye(e.date)||void 0,"data-last-in-preview":et(e.date)||void 0,"data-first-in-range":Xe(e.date)||void 0,"data-last-in-range":Je(e.date)||void 0,children:[a.jsx("span",{className:b["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:b["day-cell__label"],children:e.label})]},e.date.toISOString()))})]})]}):D===r.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(Rt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:Ie(b["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:X.map(e=>a.jsx("button",{type:"button",className:Ie(b["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:wt(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":k.getMonth(),"data-active-date-year":g.getFullYear(),"data-active-view-year":k.getFullYear(),"data-datepicker-active":e.monthIndex===g.getMonth()&&k.getFullYear()===g.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>T(e.monthIndex),children:a.jsx("span",{className:b["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(Rt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:Ie(b["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:me.map(e=>a.jsx("button",{type:"button",className:Ie(b["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(g==null?void 0:g.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:bt(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>Q(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:b["rte-datepicker-dropdown-actions"],children:[a.jsx(Wt,{label:"Annuler",size:"s",variant:"transparent",tabIndex:ne,"data-datepicker-tab":ae.cancel,onClick:Ae}),a.jsx(Wt,{label:"Confirmer",size:"s",variant:"transparent",tabIndex:ne,"data-datepicker-tab":ae.confirm,onClick:tt})]})]})};Oa.__docgenInfo={description:"",methods:[],displayName:"DateRangePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"[Date | null, Date | null] | null",elements:[{name:"tuple",raw:"[Date | null, Date | null]",elements:[{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]}]},{name:"null"}]},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}},setInitialValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: [Date | null, Date | null]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[Date | null, Date | null]",elements:[{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]}]},name:"date"}],return:{name:"void"}}},description:""}}};const _n=/^\d*$/,Tn=i=>i.dayDigits===""&&i.monthDigits===""&&i.yearDigits==="",Ct=({id:i,pickerInputRef:p,isFocused:c,onKeyDown:m,onMouseDown:y,onMouseUp:d,onFocus:_,onBlur:C,ariaLabelledBy:O,ariaDescribedBy:P,openButtonAriaLabel:ce,value:D,onChange:Y,activeSegment:h,moveToNextSegment:v,moveToPreviousSegment:re,onOpenPicker:A,disabled:de,dateState:l,internalValue:M,increaseActiveSegmentValue:I,decreaseActiveSegmentValue:se,resetActiveSegmentValue:k,updateDateSegment:V,displayValue:ue,isError:K,readonly:ie})=>{const $=s.useRef(null),g=s.useRef(Y),F=s.useRef(D??null),fe=s.useMemo(()=>ue,[ue]),z=o=>{$.current=o},G=()=>$.current;s.useEffect(()=>{g.current=Y},[Y]);const Ee=o=>{const x=o.key;if(m==null||m(o),[Ye,We,Ge,Oe,xn,Sn].includes(x)){o.preventDefault(),me(x);return}if(_n.test(x))o.preventDefault(),pe(x);else return},pe=o=>{const x=h===r.DAY?"day":h===r.MONTH?"month":"year",J=l[`${x}Digits`];h===r.YEAR?U(J,o):X(J,o)},U=(o,x)=>{const J=Array.from(o).findIndex(T=>T!=="0");if(J===0&&z(null),G()===r.YEAR){const T=o.slice(J)+x,Q=At[r.YEAR],_e=Ne(Math.min(Number(T),Q),r.YEAR);V(r.YEAR,_e)}else{z(r.YEAR);const T=Ne(Number(x),r.YEAR);V(r.YEAR,T)}},X=(o,x)=>{if(Array.from(o).findIndex(T=>T!=="0")===0&&z(null),h===r.MONTH)if(G()===r.MONTH){const T=o+x,Q=Ne(Math.min(Number(T),At[r.MONTH]),r.MONTH);V(r.MONTH,Q),v()}else{z(r.MONTH);const T=Ne(Number(x),r.MONTH);V(r.MONTH,T)}else if(G()===r.DAY){const T=o+x,Q=Ne(Math.min(Number(T),At[r.DAY]),r.DAY);V(r.DAY,Q),v()}else{z(r.DAY);const T=Ne(Number(x),r.DAY);V(r.DAY,T)}},me=o=>{[Ge,Oe].includes(o)?($.current=null,o===Oe?v():re()):[Ye,We].includes(o)?o===Ye?I(h):se(h):k(h)};return s.useEffect(()=>{var o,x;if(M===null&&!Tn(l)){(o=g.current)==null||o.call(g,M);return}wn(F.current,M)||(F.current=M,(x=g.current)==null||x.call(g,M))},[M,l]),a.jsx(bn,{id:`${i}`,pickerInputRef:p,isFocused:c,onKeyDown:Ee,onMouseDown:y,onMouseUp:d,onFocus:_,onBlur:C,value:fe,icon:"calendar-month",onOpenPicker:A,fixedWidth:!1,onChange:()=>{},ariaLabelledBy:O,ariaDescribedBy:P,openButtonAriaLabel:ce,disabled:de,isError:K,readOnly:ie})};Ct.__docgenInfo={description:"",methods:[],displayName:"DateRangeInput",props:{value:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newDate: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"newDate"}],return:{name:"void"}}},description:""},activeSegment:{required:!0,tsType:{name:"DateSegmentEnum"},description:""},moveToNextSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},moveToPreviousSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:""},dateState:{required:!0,tsType:{name:"DdMmYyyyDigitParts"},description:""},internalValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},increaseActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},decreaseActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},resetActiveSegmentValue:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"}],return:{name:"void"}}},description:""},updateDateSegment:{required:!0,tsType:{name:"signature",type:"function",raw:"(segment: DateSegmentEnum, value: string) => void",signature:{arguments:[{type:{name:"DateSegmentEnum"},name:"segment"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},isError:{required:!1,tsType:{name:"boolean"},description:""},readonly:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const Le="start",Mt="end",[Ve,Nt,$t]=Wa,$e=({id:i,label:p,labelId:c,required:m=!1,showLabelRequirement:y=!1,value:d,defaultValue:_,onChange:C,hasAction:O=!1,onValidate:P,onCancel:ce,minDate:D,maxDate:Y,disabledDates:h,disabled:v=!1,assistiveTextLabel:re,errorMessage:A,assistiveAppearance:de="description",showAssistiveIcon:l=!1,assistiveTextLink:M,isError:I=!1,readonly:se=!1,width:k=Ba})=>{const[V,ue]=s.useState(!1),[K,ie]=s.useState(!1),[$,g]=s.useState(!1),[F,fe]=s.useState(void 0),z=s.useRef(!1),G=s.useRef("start"),Ee=s.useRef(null),pe=s.useRef(null),U=s.useRef(null),X=s.useRef(null),me=fn(X.current),o=s.useRef(C),x=c??`${i}-label`,J=`${i}-start-label`,T=`${i}-end-label`,Q=`${i}-assistive-text`,_e=I&&A||re,Ue=_e&&!K,Dt=`${x} ${J}`,yt=`${x} ${T}`,Ze=Ue?Q:void 0;s.useEffect(()=>{o.current=C},[C]);const je=(n=>{if(!n)return null;const[w,E]=n;return[w?he(w):null,E?he(E):null]})(d!==void 0?d:_),[De,xe]=s.useState(je??[null,null]),j=s.useRef(je??[null,null]),{dateState:vt,internalValue:qe,increaseActiveSegmentValue:Xe,decreaseActiveSegmentValue:Je,resetActiveSegmentValue:Qe,updateDateSegment:et,updateFullDate:ye,displayValue:Se,updateDisplayedDate:le}=zt(j.current[0]?he(j.current[0]):null,{minDate:D,maxDate:Y,disabledDates:h}),{dateState:Te,internalValue:tt,increaseActiveSegmentValue:ht,decreaseActiveSegmentValue:wt,resetActiveSegmentValue:bt,updateDateSegment:Pe,updateFullDate:Ae,displayValue:e,updateDisplayedDate:t}=zt(j.current[1]?he(j.current[1]):null,{minDate:D,maxDate:Y,disabledDates:h}),[u,f]=s.useState("start"),[S,ee]=s.useState(je),{moveToNextSegment:W,moveToPreviousSegment:Z,setActiveDateSegment:B,activeDateSegment:N}=mn(),ge=n=>{G.current=n},Re=n=>{Ee.current=n},Me=()=>z.current,kt=n=>{z.current=n},Fa=()=>{ge(Le),ue(!0),!Me()&&ve(N)},ja=()=>{ge(Mt),ue(!0),!Me()&&ve(N)},Ft=()=>{B(Ve),ue(!1),kt(!1),Re(null),O&&$&&Lt()},qa=()=>{ge(Le),kt(!0),ie(!1)},Pa=()=>{ge(Mt),kt(!0),ie(!1)},jt=()=>{const n=G.current,w=pe.current,E=U.current,q=1,te=kn(),He=n===Le?(w==null?void 0:w.selectionStart)??0:(E==null?void 0:E.selectionStart)??0;He<=te[Ve][q]+1?ve(Ve):He<=te[Nt][q]+1?ve(Nt):ve($t),z.current=!1},ve=s.useCallback(n=>{N!==n&&B(n);const w=G.current,E=3,q=n===Ve?0:n===Nt?2+E:0+2*(2+E),te=n===$t?q+4:q+2;gn(()=>{var He,Vt;w&&(w===Le?(He=pe.current)==null||He.setSelectionRange(q,te):(Vt=U.current)==null||Vt.setSelectionRange(q,te))})},[N,B]),xt=s.useCallback(n=>{var E;O&&K&&g(!0);const w=j.current;nt(w,n)||(j.current=n,xe(n),t(n[1]),le(n[0]),ye(n[0]),Ae(n[1]),(E=o.current)==null||E.call(o,n))},[t,le,Ae,ye,O,K]),Ha=n=>{if(n)if(u==="start"){const w=[n,null];f("end"),xt(w)}else{const[w]=j.current;if(w&&n<w)xt([n,null]);else{const E=[w,n];xt(E),f("start"),O||(ee(E),Ht())}}},La=s.useCallback(n=>{var te;const w=n?he(n):null,E=j.current,q=[w,E[1]];nt(E,q)||(j.current=q,xe(q),(te=o.current)==null||te.call(o,q))},[]),Va=s.useCallback(n=>{var te;const w=n?he(n):null,E=j.current,q=[E[0],w];nt(E,q)||(j.current=q,xe(q),(te=o.current)==null||te.call(o,q))},[]),qt=()=>{ve(N)},Ka=()=>{if(K&&$&&O){Pt();return}St()},Pt=()=>{Lt(),St()},za=()=>{ee(De),ye(De[0]),Ae(De[1]),Ht()},Ht=()=>{P==null||P(),g(!1),St()},St=()=>{ie(!1),ue(!1),B(Ve),f("start"),Re(null)},Lt=()=>{var w;const n=S??[null,null];j.current=n,xe(n),(w=o.current)==null||w.call(o,n),ce==null||ce(),g(!1),le(n[0]),t(n[1]),ye(n[0]),Ae(n[1])};return s.useEffect(()=>{j.current=De},[De]),s.useEffect(()=>{const n=d?[d[0]?he(d[0]):null,d[1]?he(d[1]):null]:[null,null];nt(j.current,n)||(j.current=n,xe(n))},[d]),s.useEffect(()=>{ve(N)},[N,ve]),s.useEffect(()=>{K&&d&&d[0]&&!d[1]&&f("end")},[K,d,t,le]),s.useEffect(()=>{const n=X.current;if(!n)return;const w=()=>{fe(Math.round(n.getBoundingClientRect().width))};w();const E=new ResizeObserver(w);return E.observe(n),()=>{E.disconnect()}},[k]),a.jsxs("div",{className:be["date-range-picker"],style:{width:k,minWidth:Ca},children:[a.jsx(Dn,{id:x,label:p,required:m,showLabelRequirement:y}),a.jsx("div",{className:be["date-range-picker-dropdown"],children:a.jsx(vn,{style:{width:F},isList:!1,isOpen:K,onClose:Ka,offset:8,overlayLevel:me,hasMaxWidth:!1,autofocus:!1,trigger:a.jsxs("div",{className:be["date-range-picker-inputs"],ref:X,role:"group","aria-labelledby":x,children:[a.jsx("span",{id:J,className:be["visually-hidden"],children:"Date de début"}),a.jsx("div",{className:be["date-range-picker-field"],children:a.jsx(Ct,{id:`${i}-start-input`,pickerInputRef:pe,isFocused:V,onKeyDown:qt,onMouseDown:qa,onMouseUp:jt,onFocus:Fa,onBlur:Ft,value:qe??null,moveToNextSegment:W,moveToPreviousSegment:Z,onChange:La,activeSegment:N,onOpenPicker:()=>{ie(!K),f("start"),G.current=Le},minDate:D,maxDate:Y,disabledDates:h,disabled:v,dateState:vt,internalValue:qe,increaseActiveSegmentValue:Xe,decreaseActiveSegmentValue:Je,resetActiveSegmentValue:Qe,updateDateSegment:et,updateFullDate:ye,displayValue:Se,ariaLabelledBy:Dt,ariaDescribedBy:Ze,openButtonAriaLabel:"Ouvrir le sélecteur de date de début",isError:I,readonly:se})}),a.jsx(hn,{className:be["date-range-picker-separator"],name:"arrow-double-right",size:20}),a.jsx("span",{id:T,className:be["visually-hidden"],children:"Date de fin"}),a.jsx("div",{className:be["date-range-picker-field"],children:a.jsx(Ct,{id:`${i}-end-input`,pickerInputRef:U,isFocused:V,onKeyDown:qt,onMouseDown:Pa,onMouseUp:jt,onFocus:ja,onBlur:Ft,value:tt??null,moveToNextSegment:W,moveToPreviousSegment:Z,onChange:Va,activeSegment:N,onOpenPicker:()=>{ie(!K),G.current=Mt,f("end")},minDate:D,maxDate:Y,disabledDates:h,disabled:v,dateState:Te,internalValue:tt,increaseActiveSegmentValue:ht,decreaseActiveSegmentValue:wt,resetActiveSegmentValue:bt,updateDateSegment:Pe,updateFullDate:Ae,displayValue:e,ariaLabelledBy:yt,ariaDescribedBy:Ze,openButtonAriaLabel:"Ouvrir le sélecteur de date de fin",isError:I,readonly:se})})]}),position:"bottom",children:a.jsx(Oa,{onValidate:za,onCancel:Pt,minDate:D,maxDate:Y,disabledDates:h,isOpen:K,currentValue:De,onChange:Ha,hasAction:O,selectionMode:u,setInitialValue:n=>ee(n)})})}),Ue&&a.jsx("div",{id:Q,children:a.jsx(yn,{label:_e,appearance:I?"error":de,showIcon:l,href:M})})]})};$e.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"490px"',computed:!1},required:!1}}};const dr={title:"Composants/DateRangePicker/DateRangePicker",component:$e,tags:["autodocs"],argTypes:{width:{control:"text"}}},Ut=i=>i?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(i):"aucune",Rn=i=>i?`${i[0]?Ut(i[0]):"Choisir une date début"} - ${i[1]?Ut(i[1]):"Choisir une date fin"}`:"aucune",oe=(i,p)=>function(m){const[y,d]=s.useState(i),_=C=>{d(C)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée: ",Rn(y)]}),a.jsx($e,{...m,...p,onChange:_,value:y})]})},Be=new Date,Fe=[new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()),new Date(Be.getFullYear(),Be.getMonth(),Be.getDate()+7)],Ya=i=>i.querySelectorAll("input"),L={args:{id:"date-range-picker",label:"Période",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,width:Ba,required:!1,showLabelRequirement:!1},render:oe(Fe)},rt={args:{...L.args,value:void 0},render:i=>{const{value:p,...c}=i;return a.jsx($e,{...c,defaultValue:Fe,onChange:()=>{}})}},st={args:{...L.args,value:null},render:i=>{const[p,c]=s.useState(Fe);return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>c([new Date(2026,5,1),new Date(2026,5,10)]),children:"Set range"}),a.jsx("button",{onClick:()=>c(null),children:"Clear"})]}),a.jsx($e,{...i,value:p,onChange:c})]})}},it={args:{...L.args,width:Ca},render:oe(Fe)},lt={args:{...L.args,disabled:!0},render:oe(Fe)},ot={args:{...L.args,isError:!0,assistiveTextLabel:"Champ en erreur",assistiveAppearance:"error"},render:oe(Fe),play:async({canvasElement:i})=>{const[p,c]=Ya(i);R(p).toHaveAttribute("aria-describedby","date-range-picker-assistive-text"),R(c).toHaveAttribute("aria-describedby","date-range-picker-assistive-text")}},ct={tags:["!autodocs"],args:{...L.args,value:null},render:oe([null,null]),play:async({canvasElement:i})=>{const[p,c]=Ya(i);R(p).toBeInTheDocument(),R(c).toBeInTheDocument(),await H.click(p);for(const m of"15062026")await H.keyboard(m);await H.click(c);for(const m of"22062026")await H.keyboard(m);R(Gt(p)).toBe("15/06/2026"),R(Gt(c)).toBe("22/06/2026")}},dt={tags:["!autodocs"],args:{...L.args,value:null,hasAction:!0},render:oe([null,null]),play:async({canvasElement:i})=>{const c=ke(i).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument();const d=m.querySelectorAll(".day-cell:not([disabled])");R(d.length).toBeGreaterThan(1),await H.click(d[0]),await H.click(d[1]),await H.click(ke(m).getByRole("button",{name:/confirmer/i})),await Ce(()=>{R(y).not.toBeInTheDocument()})}},ut={tags:["!autodocs"],args:{...L.args,value:null,minDate:new Date(2026,4,1),maxDate:new Date(2026,5,30),hasAction:!0},render:oe([new Date(2026,4,5),new Date(2026,4,12)]),play:async({canvasElement:i})=>{const c=ke(i).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument(),await Ce(()=>{const _=m.querySelector('.day-cell[data-datepicker-active="true"]');R(_).toBeInTheDocument(),R(_).toHaveFocus()});const d=m.querySelectorAll(".day-cell[disabled]");R(d.length).toBeGreaterThan(0)}},pt={tags:["!autodocs"],args:{...L.args,value:null,disabledDates:[new Date(2026,4,12),new Date(2026,4,15),new Date(2026,4,20)],hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)]),play:async({canvasElement:i})=>{const c=ke(i).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i});await H.click(c[0]);const m=await ft(),y=m.querySelector("[role='dialog']");R(y).toBeInTheDocument();const d=m.querySelectorAll(".day-cell[disabled]");R(d.length).toBeGreaterThanOrEqual(3)}},mt={args:{...L.args,value:null,readonly:!0,hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)])},gt={tags:["skip-ci","!autodocs"],args:{...L.args,value:null,hasAction:!0},render:oe([new Date(2026,4,10),new Date(2026,4,18)]),play:async({canvasElement:i})=>{const m=ke(i).getAllByRole("button",{name:/Ouvrir le sélecteur de date de début/i})[0];await H.click(m);const y=await ft(),d=y.querySelector("[role='dialog']");R(d).toBeInTheDocument(),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await H.tab(),await Ce(()=>{R(ke(y).getByRole("button",{name:/année précédente/i})).toHaveFocus()}),await H.keyboard(Ga),await Ce(()=>{R(y).not.toBeInTheDocument(),R(m).toHaveFocus()})}};var Zt,Xt,Jt;L.parameters={...L.parameters,docs:{...(Zt=L.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ka=(ba=ut.parameters)==null?void 0:ba.docs)==null?void 0:ka.source}}};var xa,Sa,Aa;pt.parameters={...pt.parameters,docs:{...(xa=pt.parameters)==null?void 0:xa.docs,source:{originalSource:`{
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
}`,...(Aa=(Sa=pt.parameters)==null?void 0:Sa.docs)==null?void 0:Aa.source}}};var Ia,Ea,_a;mt.parameters={...mt.parameters,docs:{...(Ia=mt.parameters)==null?void 0:Ia.docs,source:{originalSource:`{
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
}`,...(Ma=(Ra=gt.parameters)==null?void 0:Ra.docs)==null?void 0:Ma.source}}};const ur=["Default","UncontrolledDefaultValue","ControlledPropUpdate","MinWidth","Disabled","Error","EmptyValue","WithAction","WithMinMax","DisabledDates","Readonly","TabNavigation"];export{st as ControlledPropUpdate,L as Default,lt as Disabled,pt as DisabledDates,ct as EmptyValue,ot as Error,it as MinWidth,mt as Readonly,gt as TabNavigation,rt as UncontrolledDefaultValue,dt as WithAction,ut as WithMinMax,ur as __namedExportsOrder,dr as default};
