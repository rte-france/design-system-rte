import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as vt,c as ae,d as $e,e as Ge,f as it,g as st}from"./keyboard-test.constants-CzExugF2.js";import{D as k,c as K,a as ta,d as lt,e as aa}from"./timepicker.constants-CynrC_9x.js";import{u as i,w as S,a as m,e as a}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as na}from"./testing.utils-DmLcTX3r.js";import{w as We}from"./animation-DwV-fHIC.js";import{E as ct,S as dt,b as we,c as he,a as De,A as be,B as ra,D as oa}from"./keyboard.constants-D1KJQ2-m.js";import{u as ia,g as sa,r as la,a as ca,b as da,c as ua,d as ma,e as pa,f as ga,i as wt,h as ya,j as va,k as ut,l as wa,m as ht,n as mt,o as ha,t as Da,p as pt,s as ba,q as fa,v as xa,w as Ba,x as Re,y as ka,z as Ta,A as Ea,B as Aa,C as Sa,D as _a,E as fe,F as G,G as Ie,H as Dt,I as de}from"./DatePicker.stories.util-BkqhKKNG.js";import{u as Ra}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as Ia,A as Ca}from"./Label-swDXsD6p.js";import{D as Fa}from"./Dropdown-CyecDUeK.js";import{a as Ha,B as Na,c as Ma,f as ee}from"./picker.utils-DQ3TbQZx.js";import{c as qa}from"./string.utils-B_KtMSwu.js";import{u as Ya}from"./useFocusTrap-BZu4_Auv.js";import{B as bt}from"./Button-B3EnjUD7.js";import{D as gt}from"./Divider-BVZUrQ0d.js";import{I as V}from"./IconButton-CJDki2nw.js";import{c as te}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const ja={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Pa="_weekday_gltnx_101",f={"visually-hidden":"_visually-hidden_gltnx_1","rte-datepicker-dropdown":"_rte-datepicker-dropdown_gltnx_13","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_gltnx_32","nav-left":"_nav-left_gltnx_46","nav-right":"_nav-right_gltnx_47","month-label":"_month-label_gltnx_62","rte-datepicker-weekdays":"_rte-datepicker-weekdays_gltnx_92",weekday:Pa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_gltnx_113","calendar-divider":"_calendar-divider_gltnx_119","day-row":"_day-row_gltnx_123","day-cell":"_day-cell_gltnx_130","day-cell__label":"_day-cell__label_gltnx_164","day-cell__surface":"_day-cell__surface_gltnx_168","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_gltnx_283","rte-datepicker-month-grid":"_rte-datepicker-month-grid_gltnx_297","rte-datepicker-year-grid":"_rte-datepicker-year-grid_gltnx_298","compact-row":"_compact-row_gltnx_305","month-cell":"_month-cell_gltnx_311","month-cell__label":"_month-cell__label_gltnx_346","year-cell":"_year-cell_gltnx_408","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_gltnx_495"},ea=({isOpen:u,currentValue:l,hasActions:r,updateFullDate:o,updateDisplayedDate:s,onValidate:T,onCancel:g,displayValue:A,minDate:C,maxDate:_,disabledDates:R,onChange:P})=>{const[h,W]=p.useState(k.DAY),$=p.useRef(null),[ue,ne]=p.useState(null),[xe,Be]=p.useState(null);Ya($.current,u,!1);const{viewDate:E,setViewDate:z,getNextDateForDayNavigation:ze,getNextDateForCompactNavigation:Ve}=ia(l),[N,me]=p.useState(null),[b,I]=p.useState(l??E),[O]=p.useState(l),ke=p.useMemo(()=>sa(),[]),M=p.useMemo(()=>({minDate:C,maxDate:_,disabledDates:R}),[C,_,R]),U=e=>{const t=ze(e);Te(t)},re=(e,t)=>{const d=Ve(e,t);Te(d)},Te=e=>{const t=Da({anchorDay:xe,viewDate:e,constraints:M});t!==null&&(me(t),I(t),s(t))},X=p.useCallback(()=>{const e=la({textValue:A.split(" ").join(""),constraints:M,pendingDate:N,selectedDate:l});z(e.viewDate),Be(e.monthNavigationAnchorDay)},[A,N,l,M,z]),oe=p.useMemo(()=>{const e=E??l??new Date,t=h;return h===k.DAY?qa(ca(e)):t===k.MONTH?da(e):ua(e)},[h,E,l]),Z=p.useMemo(()=>ma({viewDate:E,selectedDate:N??l,minDate:C,maxDate:_,disabledDates:R}),[N,l,E,C,_,R]),J=p.useMemo(()=>pa({viewDate:E,selectedDate:N??l,minDate:C,maxDate:_,disabledDates:R}),[N,l,E,C,_,R]),H=p.useMemo(()=>ga({viewDate:E,selectedDate:N??l,minDate:C,maxDate:_,disabledDates:R}),[N,l,E,C,_,R]),Ue=()=>{h===k.DAY?(W(k.MONTH),le()):h===k.MONTH?(W(k.YEAR),ve()):(W(k.DAY),Q())},q=e=>{const t=ha({date:e,constraints:M});if(t!==null)if(r)s(t),me(t),z(t),I(t),Be(t.getDate());else{o(t),ne(t),P==null||P(t),T==null||T();return}},pe=e=>{const t=new Date(E.getFullYear(),e,1);z(t),I(t),W(k.DAY),Q()},ie=e=>{const t=new Date(e,E.getMonth(),1);z(t),I(t),W(k.MONTH),le()},Xe=e=>{const t=N??l;return t!==null&&mt(e,t)},Ee=e=>{if(e.key==="Escape"){g==null||g();return}const t=h;t===k.DAY?Ze(e):t===k.MONTH?Ae(e):D(e)},Ze=e=>{if(!L(e.target))return;if(e.stopPropagation(),[ct,dt].includes(e.key)){e.preventDefault();const d=b,w=Z.find(c=>mt(c.date,d));w&&!w.isDisabled&&q(d);return}[we,he,De,be].includes(e.key)&&(e.preventDefault(),Se(e.key))},Ae=e=>{if(!ge(e.target))return;if(e.stopPropagation(),[ct,dt].includes(e.key)){e.preventDefault();const d=b.getMonth(),w=J.find(c=>c.monthIndex===d);w&&!w.isDisabled&&pe(d);return}[we,he,De,be].includes(e.key)&&(e.preventDefault(),Je(e.key))},D=e=>{if(!se(e.target))return;if(e.stopPropagation(),[ct,dt].includes(e.key)){e.preventDefault();const d=b.getFullYear(),w=H.find(c=>c.year===d);w&&!w.isDisabled&&ie(d);return}[we,he,De,be].includes(e.key)&&(e.preventDefault(),Qe(e.key))},L=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,ge=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,se=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Se=e=>{const t=Z,d=ht(t,b);if(d<0)return;const w=pt(e,"day"),c=Math.abs(w)===7?7:1,y=w>0?1:-1;let v=d+w;for(;v>=0&&v<t.length&&t[v].isDisabled;)v+=y*c;if(v<0||v>=t.length){const B=ba(fa(b,w));if(ye(B))return;ce(B),Q();return}const x=t[v].date;xa(x,E)?I(x):ce(x),Q()},Je=e=>{const t=J,d=b.getMonth(),w=t.findIndex(rt=>rt.monthIndex===d);if(w<0)return;const c=pt(e,"monthYear"),y=Ba(b,c);if(y.getFullYear()!==E.getFullYear()){ce(y),le();return}const v=3,x=t.length;let B=Re({currentIndex:w,key:e,columnCount:v,cellCount:x}),Y=0;for(;B!==null&&t[B].isDisabled&&Y<x;)B=Re({currentIndex:B,key:e,columnCount:v,cellCount:x}),Y+=1;if(B===null||t[B].isDisabled)return;const _e=t[B].monthIndex;I(new Date(E.getFullYear(),_e,1)),le()},Qe=e=>{const t=H,d=b.getFullYear(),w=t.findIndex(ot=>ot.year===d);if(w<0)return;const c=pt(e,"monthYear"),y=d+c;if(!t.map(ot=>ot.year).includes(y)){ce(new Date(y,0,1)),ve();return}const x=3,B=t.length;let Y=Re({currentIndex:w,key:e,columnCount:x,cellCount:B}),_e=0;for(;Y!==null&&t[Y].isDisabled&&_e<B;)Y=Re({currentIndex:Y,key:e,columnCount:x,cellCount:B}),_e+=1;if(Y===null||t[Y].isDisabled)return;const rt=t[Y].year;I(new Date(rt,0,1)),ve()},ye=e=>wt({date:e,...M}),Q=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},le=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ve=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},et=()=>{T==null||T();const e=N??l;ne(e),me(null),o(e)},tt=(e,t)=>mt(e,t)?0:-1,at=e=>e===b.getMonth()?0:-1,nt=e=>e===b.getFullYear()?0:-1,ce=e=>{const t=M;let d=null;h===k.DAY?d=ka({focusTargetDay:e,constraints:t}):h===k.MONTH?d=Ta({focusTargetMonthStart:e,constraints:t}):d=Ea({focusTargetYear:e.getFullYear(),constraints:t}),d!==null&&(z(d.viewDate),I(d.menuInitialActiveDate))};return p.useEffect(()=>{if(u)X(),Q();else{if(ue)return;if(O===null)o(null);else if(!wt({date:O,...M}))s(O);else{const e=ya(O,M);e&&o(e)}}},[u,X,l,s,O,ue,C,_,R,o,M]),p.useEffect(()=>{(()=>{if(h===k.DAY){const t=Z;if(ht(t,b)>=0)return;const w=t.find(c=>!c.isDisabled);w&&I(w.date)}else if(h===k.MONTH){const t=J,d=b.getMonth();if(t.some(c=>c.monthIndex===d&&!c.isDisabled&&E.getFullYear()===b.getFullYear()))return;const w=t.find(c=>!c.isDisabled);w&&I(new Date(E.getFullYear(),w.monthIndex,1))}else{const t=H,d=b.getFullYear();if(t.some(c=>c.year===d&&!c.isDisabled))return;const w=t.find(c=>!c.isDisabled);w&&I(new Date(w.year,0,1))}})()},[E,b,h,Z,J,H]),n.jsx(n.Fragment,{children:n.jsxs("div",{ref:$,className:f["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ee,children:[n.jsxs("div",{className:f["rte-datepicker-dropdown-header"],children:[n.jsx("div",{className:f["nav-left"],children:h===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(V,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":K.navPrevYear,onClick:()=>U("prevYear")}),n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":K.navPrevMonth,onClick:()=>U("prevMonth")})]}):h===k.MONTH?n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":K.navPrevCompact,onClick:()=>re("previous","month")}):n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":K.navPrevCompact,onClick:()=>re("previous","year")})}),h===k.YEAR?n.jsx("span",{className:te(f["month-label"],"month-label-static"),children:oe}):n.jsx("button",{className:f["month-label"],onClick:Ue,"aria-label":`${oe}, afficher les ${h===k.DAY?"mois":"années"}`,"data-datepicker-tab":K.monthLabel,children:oe}),n.jsx("span",{className:f["visually-hidden"],role:"status","aria-live":"polite","aria-atomic":"true",children:oe}),n.jsx("div",{className:f["nav-right"],children:h===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":K.navNextMonth,onClick:()=>U("nextMonth")}),n.jsx(V,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":K.navNextYear,onClick:()=>U("nextYear")})]}):h===k.MONTH?n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":K.navNextCompact,onClick:()=>re("next","month")}):n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":K.navNextCompact,onClick:()=>re("next","year")})})]}),h===k.DAY?n.jsxs("div",{className:te(f["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[n.jsx("div",{className:f["rte-datepicker-weekdays"],role:"row",children:va().map((e,t)=>n.jsx("div",{className:f.weekday,role:"columnheader","aria-label":ke[t],children:e},t))}),n.jsx("div",{className:f["calendar-divider"],"aria-hidden":"true",children:n.jsx(gt,{appearance:"brand"})}),ut(Z,7).map((e,t)=>n.jsx("div",{className:f["day-row"],role:"row","aria-label":`${t}`,children:e.map(d=>n.jsxs("button",{type:"button",className:te(f["day-cell"],"day-cell"),role:"gridcell","aria-selected":Xe(d.date),onClick:()=>q(d.date),"aria-current":d.isCurrent?"date":void 0,tabIndex:tt(d.date,b),disabled:d.isDisabled,"data-cell-type":d.cellType,"data-datepicker-active":(b==null?void 0:b.toDateString())===d.date.toDateString()||void 0,children:[n.jsx("span",{className:f["day-cell__surface"],"aria-hidden":"true"}),n.jsx("span",{id:`day-label-${d.date.toISOString()}`,className:f["visually-hidden"],children:wa(d.date)}),n.jsx("span",{className:f["day-cell__label"],"aria-hidden":"true",children:d.label})]},d.date.toISOString()))},e[0].date.toISOString()+t))]}):h===k.MONTH?n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:f["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),n.jsx("div",{className:te(f["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ut(J,3).map(e=>n.jsx("div",{className:f["compact-row"],role:"row",children:e.map(t=>n.jsx("button",{type:"button",className:te(f["month-cell"],"month-cell"),role:"gridcell","aria-selected":t.isSelected,tabIndex:at(t.monthIndex),"data-cell-month-index":t.monthIndex,"data-active-date-month":E.getMonth(),"data-active-date-year":b.getFullYear(),"data-active-view-year":E.getFullYear(),"data-datepicker-active":t.monthIndex===b.getMonth()&&E.getFullYear()===b.getFullYear()?!0:void 0,"data-current":t.isCurrent,disabled:t.isDisabled,"data-selected":t.isSelected,onClick:()=>pe(t.monthIndex),children:n.jsx("span",{className:f["month-cell__label"],children:t.label})},t.monthIndex))},e[0].monthIndex))})]}):n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:f["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),n.jsx("div",{className:te(f["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:ut(H,3).map(e=>n.jsx("div",{className:f["compact-row"],role:"row",children:e.map(t=>n.jsx("button",{type:"button",className:te(f["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(b==null?void 0:b.getFullYear())===t.year||null,"data-current":t.isCurrent,tabIndex:nt(t.year),"data-selected":t.isSelected,"aria-selected":t.isSelected,disabled:t.isDisabled,onClick:()=>ie(t.year),children:t.label},t.year))},e[0].year))})]}),r&&n.jsxs("div",{className:f["rte-datepicker-dropdown-actions"],children:[n.jsx(bt,{label:"Annuler",size:"s",variant:"transparent",onClick:g}),n.jsx(bt,{label:"Confirmer",size:"s",variant:"transparent",onClick:et})]})]})})};ea.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Oa=/^\d*$/,La=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[Ce,Fe,yt]=ta,j=p.forwardRef(({id:u,label:l,labelId:r,required:o=!1,showLabelRequirement:s=!1,disabled:T=!1,value:g,defaultValue:A,readonly:C=!1,onChange:_,hasActions:R=!0,onCancel:P,onValidate:h,minDate:W,maxDate:$,disabledDates:ue,isError:ne,assistiveTextLabel:xe,errorMessage:Be,assistiveAppearance:E="description",showAssistiveIcon:z=!1,assistiveTextLink:ze,width:Ve="248px"},N)=>{var w;const[me,b]=p.useState(!1),[I,O]=p.useState(!1),ke=ne&&Be||xe,M=ke&&!I,U=`${u}-assistive-text`,re=g!==void 0,Te=p.useRef(g??A??null),X=re?g??null:Te.current,{increaseActiveSegmentValue:oe,decreaseActiveSegmentValue:Z,resetActiveSegmentValue:J,updateDateSegment:H,updateFullDate:Ue,internalValue:q,displayValue:pe,dateState:ie,updateDisplayedDate:Xe}=Aa(X,{minDate:W,maxDate:$,disabledDates:ue}),{moveToNextSegment:Ee,moveToPreviousSegment:Ze,setActiveDateSegment:Ae,activeDateSegment:D}=Sa(),L=p.useRef(_),ge=p.useRef(X??null);p.useEffect(()=>{L.current=_},[_]),p.useEffect(()=>{ge.current=X??null},[X]),p.useEffect(()=>{var c,y;if(q===null&&!La(ie)){(c=L.current)==null||c.call(L,q);return}Ha(ge.current,q)||(ge.current=q,(y=L.current)==null||y.call(L,q))},[q,ie]);const se=p.useRef(null),Se=p.useRef(null),Je=Ra(se.current),Qe=()=>{Q(),e(D)},ye=()=>{b(!1),O(!1)},Q=()=>{T||b(!0)},le=()=>{T||O(!0)},ve=c=>{const y=c.key;if(c.stopPropagation(),e(D),[De,be,we,he,ra,oa].includes(y))c.preventDefault(),et(y);else if(Oa.test(y))c.preventDefault(),tt(y);else return},et=c=>{c===he?Ee():c===we?Ze():c===De?oe(D):c===be?Z(D):J(D)},tt=c=>{const v=ie[`${D===Ce?"day":D===Fe?"month":"year"}Digits`];D===yt&&v.length>=4?at(v,c):nt(v,c)},at=(c,y)=>{const v=Array.from(c).findIndex(x=>x!=="0");if(v===0){const x=ee(Number(y),D);H(D,x)}else{const x=c.slice(v)+y,B=ee(Math.min(Number(x),lt[D]),D);H(D,B)}},nt=(c,y)=>{if(c.length>=2)if(c[0]==="0"){const v=Number(c[1]+y),x=ee(Math.min(v,lt[D]),D);H(D,x),Ee()}else{const v=ee(Number(y),D);H(D,v)}else{const v=`${c}${y}`,x=aa[D];if(c.length===0&&Number(y)>x){const B=ee(Number(y),D);H(D,B)}else if(v.length===2){const B=ee(Math.min(Number(v),lt[D]),D);H(D,B)}else{const B=ee(Number(y),D);H(D,B)}}},ce=()=>{var x;I&&O(!1);const c=((x=se.current)==null?void 0:x.selectionStart)??0,y=Ma(),v=1;c<=y[Ce][v]+1?e(Ce):c<=y[Fe][v]+1?e(Fe):e(yt)},e=p.useCallback(c=>{Ae(c);const y=3,v=c===Ce?0:c===Fe?2+y:0+2*(2+y),x=c===yt?v+4:v+2;We(()=>{var B;(B=se.current)==null||B.setSelectionRange(v,x)})},[Ae]),t=()=>{P==null||P(),ye()},d=()=>{h==null||h(),ye()};return p.useEffect(()=>{e(D)},[D,e]),n.jsxs("div",{className:ja["rte-date-picker"],style:{minWidth:"248px",width:Ve},ref:N,children:[n.jsx(Ia,{id:r,label:l,required:o,showLabelRequirement:s}),n.jsx(Fa,{style:{width:(w=Se.current)==null?void 0:w.offsetWidth},isList:!1,isOpen:I,onClose:ye,offset:8,overlayLevel:Je,trigger:n.jsx(Na,{id:u,ariaLabelledBy:r??l,ariaDescribedBy:M?U:void 0,icon:"calendar-month",onFocus:Qe,isFocused:me,pickerInputRef:se,onOpenPicker:le,value:pe,onKeyDown:ve,onMouseUp:ce,onChange:()=>{},fixedWidth:!1,pickerRef:Se,openButtonAriaLabel:_a(q),isError:ne,disabled:T,readOnly:C,required:o}),position:"bottom",children:n.jsx(ea,{isOpen:I,currentValue:q,hasActions:R,onValidate:d,onCancel:t,updateDisplayedDate:Xe,updateFullDate:Ue,displayValue:pe,minDate:W,maxDate:$,disabledDates:ue})}),M&&n.jsx(Ca,{id:U,label:ke,appearance:ne?"error":E,showIcon:z,href:ze})]})});j.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Tn={title:"Composants/DatePicker/DatePicker",component:j,tags:["autodocs"]},F={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})}},He={tags:["!autodocs"],parameters:{a11y:{test:"error",options:{runOnly:{type:"rule",values:["aria-required-parent","aria-required-children"]}}}},args:{...F.args,value:void 0,defaultValue:new Date(2026,2,31),disabledDates:[new Date(2026,2,16)]},play:async({canvasElement:u})=>{await i.click(S(u).getByRole("button",{name:fe}));const l=await G(),r=S(l);Ie(r.getByRole("grid",{name:"Calendrier"}),7);const o=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];await m(()=>{Dt(r.getByRole("grid",{name:"Calendrier"}),o)});const s=r.getByRole("status");a(s).toHaveAttribute("aria-atomic","true"),a(s).toHaveAttribute("aria-live","polite"),a(s.childElementCount).toBe(0),a(s.closest("button")).toBeNull(),a(r.getByRole("button",{name:"Mars 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),a(s).toHaveTextContent(/^Mars 2026$/);const T=r.getByRole("gridcell",{name:"dimanche 15 mars 2026"});a(S(T).getByText("15")).toBeInTheDocument(),a(S(T).getByText("dimanche 15 mars 2026")).not.toHaveAttribute("aria-hidden","true"),a(r.getByRole("gridcell",{name:"lundi 16 mars 2026"})).toBeDisabled(),a(S(r.getByRole("gridcell",{name:"lundi 23 février 2026"})).getByText("23")).toBeInTheDocument(),a(S(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).getByText("1")).toBeInTheDocument(),await m(()=>{for(const g of r.getAllByRole("gridcell")){const A=S(g).getByText(/^\d+$/);a(A).toBeVisible(),a(A).toHaveAttribute("aria-hidden","true"),a(g).not.toHaveAttribute("aria-hidden","true"),a(g).not.toHaveAttribute("aria-label")}}),await m(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toHaveFocus()}),await i.keyboard(vt),await m(()=>{a(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).toHaveFocus(),a(s).toHaveTextContent("Avril 2026")}),a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toBeInTheDocument(),await i.keyboard(ae),await m(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026"})).toHaveFocus(),a(s).toHaveTextContent("Mars 2026")}),await i.click(r.getByRole("button",{name:"Mois suivant"})),await m(()=>a(s).toHaveTextContent(/^Avril 2026$/)),a(r.getByRole("button",{name:"Avril 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),await i.click(r.getByRole("button",{name:"Année suivante"})),await m(()=>a(s).toHaveTextContent("Avril 2027")),await i.click(r.getByRole("button",{name:"Année précédente"})),await m(()=>a(s).toHaveTextContent("Avril 2026")),await i.click(r.getByRole("button",{name:"Mois précédent"})),await m(()=>a(s).toHaveTextContent("Mars 2026")),await i.click(r.getByRole("button",{name:"Mars 2026, afficher les mois"})),await m(()=>a(s).toHaveTextContent(/^2026$/)),Ie(r.getByRole("grid",{name:"Mois"}),3),await i.click(r.getByRole("button",{name:"Année suivante"})),await m(()=>a(s).toHaveTextContent(/^2027$/)),await i.click(r.getByRole("button",{name:"Année précédente"})),await m(()=>a(s).toHaveTextContent(/^2026$/)),r.getByRole("gridcell",{name:"mars"}).focus(),a(r.getByRole("gridcell",{name:"mars"})).toHaveFocus();for(const g of["février","janvier","décembre"])await i.keyboard(ae),await m(()=>a(r.getByRole("gridcell",{name:g})).toHaveFocus());a(s).toHaveTextContent(/^2025$/),await i.click(r.getByRole("button",{name:"2025, afficher les années"})),await m(()=>a(s).toHaveTextContent("2020 – 2030")),Ie(r.getByRole("grid",{name:"Années"}),3),await i.click(r.getByRole("button",{name:"Décennie suivante"})),await m(()=>a(s).toHaveTextContent("2030 – 2040")),await i.click(r.getByRole("button",{name:"Décennie précédente"})),await m(()=>a(s).toHaveTextContent("2020 – 2030")),r.getByRole("gridcell",{name:"2025"}).focus();for(let g=2024;g>=2019;g--)await i.keyboard(ae),await m(()=>a(r.getByRole("gridcell",{name:String(g)})).toHaveFocus());a(s).toHaveTextContent("2010 – 2020"),a(l.querySelector('[aria-live="polite"]')).toBe(s),await i.click(r.getByRole("gridcell",{name:"2019"})),await i.click(r.getByRole("gridcell",{name:"mars"})),await m(()=>{const g=r.getByRole("grid",{name:"Calendrier"});Ie(g,7),Dt(g,o)})}},Ne={args:{...F.args,disabled:!0}},Me={args:{...F.args,isError:!0},play:async({canvasElement:u})=>{const l=S(u);a(l.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},qe={args:{...F.args,value:void 0},render:u=>{const{value:l,...r}=u;return n.jsx(j,{...r,defaultValue:new Date(2026,5,15)})}},Ye={tags:["!autodocs"],args:{...F.args,value:null},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{na(),await i.tab();for(const r of"15062023")await i.keyboard(r);const l=u.querySelector("input");a(de(l)).toBe("15/06/2023"),await i.keyboard(Ge),a(de(l)).toBe("15/06/2022"),await i.keyboard(it),a(de(l)).toBe("15/06/2023"),await i.keyboard(ae),await i.keyboard(it),a(de(l)).toBe("15/07/2023"),await i.keyboard(ae),await i.keyboard(it),a(de(l)).toBe("16/07/2023"),await i.keyboard(vt),await i.keyboard(Ge),await i.keyboard(Ge),a(de(l)).toBe("16/05/2023")}},je={args:{...F.args,value:null},render:u=>{const[l,r]=p.useState(new Date(2026,5,10));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>r(new Date(2026,5,22)),children:"Set to 22/06/2026"}),n.jsx("button",{onClick:()=>r(null),children:"Clear"})]}),n.jsx(j,{...u,value:l,onChange:r})]})}},Pe={tags:["skip-ci","!autodocs"],args:{...F.args,value:null,hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});await i.click(r);let o=await G(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument();const T=o.querySelectorAll(".day-cell");a(T.length).toBeGreaterThan(0),await i.click(T[10]),await i.click(S(o).getByRole("button",{name:/confirmer/i})),await m(()=>{a(s).not.toBeInTheDocument()}),await i.click(r),o=await G(),s=o.querySelector("[role='dialog']"),a(s).toBeInTheDocument();const g=o.querySelector(".day-cell[data-datepicker-active='true']");a(g).toBeInTheDocument(),a(g).toHaveFocus(),await i.keyboard("{Escape}")}},Oe={tags:["skip-ci","!autodocs"],args:{...F.args,value:null,hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});await i.click(r);let o=await G();await i.tab(),await m(()=>{a(S(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await m(()=>{a(S(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await m(()=>{a(S(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=S(o);a(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const T=o.querySelector('[data-datepicker-tab="month-label"]');a(T).toBeTruthy(),await i.click(T),await m(()=>{a(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),a(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),a(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),a(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),a(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),a(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const g=o.querySelector('[data-datepicker-tab="month-label"]');a(g).toBeTruthy(),await i.click(g),await m(()=>{a(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),a(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),a(s.getByText("Sélectionner une année")).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),a(o.querySelector(".month-label-static")).toBeInTheDocument(),a(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),a(o.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard($e),await m(()=>{a(o).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.click(r),o=await G(),await m(()=>{const h=o.querySelector('.day-cell[data-datepicker-active="true"]');a(h).toBeInTheDocument(),a(h).toHaveFocus()});const A=o.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const C=S(o).getByRole("button",{name:/^annuler$/i});a(C).toHaveFocus(),await i.keyboard(Ge),a(C).toHaveFocus(),await i.tab({shift:!0}),a(A).toHaveFocus(),await i.keyboard(vt),await m(()=>{const h=o.querySelector('.day-cell[data-datepicker-active="true"]');a(h).toBeInTheDocument(),a(h).toHaveFocus(),a(h).not.toBe(A)}),await i.keyboard($e),await m(()=>{a(o).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.click(r),o=await G();const _=o.querySelector('[data-datepicker-tab="month-label"]');a(_).toBeTruthy(),await i.click(_),await m(()=>{a(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const R=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");a(R).toBeTruthy(),await m(()=>{a(R).toHaveFocus()}),await i.tab(),await m(()=>{a(S(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),a(R).toHaveFocus();const P=S(o).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),a(P).toHaveFocus(),await i.tab(),a(R).toHaveFocus()}},Le={tags:["!autodocs"],args:{...F.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});r.focus(),await i.tab({shift:!0});for(const A of"03012020")await i.keyboard(A);await i.click(r);let o=await G(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await m(()=>{const A=o.querySelector('.day-cell[data-datepicker-active="true"]');a(A).toBeInTheDocument(),a(A).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2),await i.keyboard($e),await m(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(st),await i.keyboard(ae),await i.keyboard(st),await i.keyboard(ae),await i.keyboard(st);for(const A of"20082024")await i.keyboard(A);await i.click(r),o=await G(),s=o.querySelector("[role='dialog']"),a(s).toBeInTheDocument(),await m(()=>{const A=o.querySelector('.day-cell[data-datepicker-active="true"]');a(A).toBeInTheDocument(),a(A).toHaveFocus()});const g=o.querySelectorAll(".day-cell[disabled]");a(g.length).toBe(7),await i.keyboard($e),await m(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()})}},Ke={tags:["!autodocs"],args:{...F.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(j,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});r.focus(),await i.tab({shift:!0});for(const g of"14062023")await i.keyboard(g);await i.click(r);const o=await G(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await m(()=>{const g=o.querySelector('.day-cell[data-datepicker-active="true"]');a(g).toBeInTheDocument(),a(g).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2)}};var ft,xt,Bt;F.parameters={...F.parameters,docs:{...(ft=F.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    id: "default-datepicker",
    label: "Date",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
    hasActions: true,
    required: false,
    showLabelRequirement: false
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  }
}`,...(Bt=(xt=F.parameters)==null?void 0:xt.docs)==null?void 0:Bt.source}}};var kt,Tt,Et;He.parameters={...He.parameters,docs:{...(kt=He.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  parameters: {
    a11y: {
      test: "error",
      options: {
        runOnly: {
          type: "rule",
          values: ["aria-required-parent", "aria-required-children"]
        }
      }
    }
  },
  args: {
    ...Default.args,
    value: undefined,
    defaultValue: new Date(2026, 2, 31),
    disabledDates: [new Date(2026, 2, 16)]
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: calendarTriggerAccessibleName
    }));
    const dropdown = await getDropdown();
    const menu = within(dropdown);
    expectCalendarGridStructure(menu.getByRole("grid", {
      name: "Calendrier"
    }), 7);
    const weekdayNames = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
    await waitFor(() => {
      expectCalendarWeekdayHeaders(menu.getByRole("grid", {
        name: "Calendrier"
      }), weekdayNames);
    });
    const period = menu.getByRole("status");
    expect(period).toHaveAttribute("aria-atomic", "true");
    expect(period).toHaveAttribute("aria-live", "polite");
    expect(period.childElementCount).toBe(0);
    expect(period.closest("button")).toBeNull();
    expect(menu.getByRole("button", {
      name: "Mars 2026, afficher les mois"
    }).closest("[aria-live]")).toBeNull();
    expect(period).toHaveTextContent(/^Mars 2026$/);
    const sundayCell = menu.getByRole("gridcell", {
      name: "dimanche 15 mars 2026"
    });
    expect(within(sundayCell).getByText("15")).toBeInTheDocument();
    expect(within(sundayCell).getByText("dimanche 15 mars 2026")).not.toHaveAttribute("aria-hidden", "true");
    expect(menu.getByRole("gridcell", {
      name: "lundi 16 mars 2026"
    })).toBeDisabled();
    expect(within(menu.getByRole("gridcell", {
      name: "lundi 23 février 2026"
    })).getByText("23")).toBeInTheDocument();
    expect(within(menu.getByRole("gridcell", {
      name: "mercredi 1 avril 2026"
    })).getByText("1")).toBeInTheDocument();
    await waitFor(() => {
      for (const cell of menu.getAllByRole("gridcell")) {
        const dayNumber = within(cell).getByText(/^\\d+$/);
        expect(dayNumber).toBeVisible();
        expect(dayNumber).toHaveAttribute("aria-hidden", "true");
        expect(cell).not.toHaveAttribute("aria-hidden", "true");
        expect(cell).not.toHaveAttribute("aria-label");
      }
    });
    await waitFor(() => {
      expect(menu.getByRole("gridcell", {
        name: "mardi 31 mars 2026",
        selected: true
      })).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await waitFor(() => {
      expect(menu.getByRole("gridcell", {
        name: "mercredi 1 avril 2026"
      })).toHaveFocus();
      expect(period).toHaveTextContent("Avril 2026");
    });
    expect(menu.getByRole("gridcell", {
      name: "mardi 31 mars 2026",
      selected: true
    })).toBeInTheDocument();
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await waitFor(() => {
      expect(menu.getByRole("gridcell", {
        name: "mardi 31 mars 2026"
      })).toHaveFocus();
      expect(period).toHaveTextContent("Mars 2026");
    });
    await userEvent.click(menu.getByRole("button", {
      name: "Mois suivant"
    }));
    await waitFor(() => expect(period).toHaveTextContent(/^Avril 2026$/));
    expect(menu.getByRole("button", {
      name: "Avril 2026, afficher les mois"
    }).closest("[aria-live]")).toBeNull();
    await userEvent.click(menu.getByRole("button", {
      name: "Année suivante"
    }));
    await waitFor(() => expect(period).toHaveTextContent("Avril 2027"));
    await userEvent.click(menu.getByRole("button", {
      name: "Année précédente"
    }));
    await waitFor(() => expect(period).toHaveTextContent("Avril 2026"));
    await userEvent.click(menu.getByRole("button", {
      name: "Mois précédent"
    }));
    await waitFor(() => expect(period).toHaveTextContent("Mars 2026"));
    await userEvent.click(menu.getByRole("button", {
      name: "Mars 2026, afficher les mois"
    }));
    await waitFor(() => expect(period).toHaveTextContent(/^2026$/));
    expectCalendarGridStructure(menu.getByRole("grid", {
      name: "Mois"
    }), 3);
    await userEvent.click(menu.getByRole("button", {
      name: "Année suivante"
    }));
    await waitFor(() => expect(period).toHaveTextContent(/^2027$/));
    await userEvent.click(menu.getByRole("button", {
      name: "Année précédente"
    }));
    await waitFor(() => expect(period).toHaveTextContent(/^2026$/));
    menu.getByRole("gridcell", {
      name: "mars"
    }).focus();
    expect(menu.getByRole("gridcell", {
      name: "mars"
    })).toHaveFocus();
    for (const month of ["février", "janvier", "décembre"]) {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      await waitFor(() => expect(menu.getByRole("gridcell", {
        name: month
      })).toHaveFocus());
    }
    expect(period).toHaveTextContent(/^2025$/);
    await userEvent.click(menu.getByRole("button", {
      name: "2025, afficher les années"
    }));
    await waitFor(() => expect(period).toHaveTextContent("2020 – 2030"));
    expectCalendarGridStructure(menu.getByRole("grid", {
      name: "Années"
    }), 3);
    await userEvent.click(menu.getByRole("button", {
      name: "Décennie suivante"
    }));
    await waitFor(() => expect(period).toHaveTextContent("2030 – 2040"));
    await userEvent.click(menu.getByRole("button", {
      name: "Décennie précédente"
    }));
    await waitFor(() => expect(period).toHaveTextContent("2020 – 2030"));
    menu.getByRole("gridcell", {
      name: "2025"
    }).focus();
    for (let year = 2024; year >= 2019; year--) {
      await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
      await waitFor(() => expect(menu.getByRole("gridcell", {
        name: String(year)
      })).toHaveFocus());
    }
    expect(period).toHaveTextContent("2010 – 2020");
    expect(dropdown.querySelector('[aria-live="polite"]')).toBe(period);
    await userEvent.click(menu.getByRole("gridcell", {
      name: "2019"
    }));
    await userEvent.click(menu.getByRole("gridcell", {
      name: "mars"
    }));
    await waitFor(() => {
      const grid = menu.getByRole("grid", {
        name: "Calendrier"
      });
      expectCalendarGridStructure(grid, 7);
      expectCalendarWeekdayHeaders(grid, weekdayNames);
    });
  }
}`,...(Et=(Tt=He.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,St,_t;Ne.parameters={...Ne.parameters,docs:{...(At=Ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(_t=(St=Ne.parameters)==null?void 0:St.docs)==null?void 0:_t.source}}};var Rt,It,Ct;Me.parameters={...Me.parameters,docs:{...(Rt=Me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("textbox")).toHaveAttribute("aria-describedby", "default-datepicker-assistive-text");
  }
}`,...(Ct=(It=Me.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var Ft,Ht,Nt;qe.parameters={...qe.parameters,docs:{...(Ft=qe.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
    return <DatePicker {...rest} defaultValue={new Date(2026, 5, 15)} />;
  }
}`,...(Nt=(Ht=qe.parameters)==null?void 0:Ht.docs)==null?void 0:Nt.source}}};var Mt,qt,Yt;Ye.parameters={...Ye.parameters,docs:{...(Mt=Ye.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent();
    await userEvent.tab();
    for (const digit of "15062023") {
      await userEvent.keyboard(digit);
    }
    const input = canvasElement.querySelector("input");
    expect(normalizedDateInputValue(input)).toBe("15/06/2023");
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/06/2022");
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/06/2023");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("15/07/2023");
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_ARROW_UP_KEY);
    expect(normalizedDateInputValue(input)).toBe("16/07/2023");
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(normalizedDateInputValue(input)).toBe("16/05/2023");
  }
}`,...(Yt=(qt=Ye.parameters)==null?void 0:qt.docs)==null?void 0:Yt.source}}};var jt,Pt,Ot;je.parameters={...je.parameters,docs:{...(jt=je.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: null
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(new Date(2026, 5, 10));
    return <>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <button onClick={() => setDate(new Date(2026, 5, 22))}>Set to 22/06/2026</button>
          <button onClick={() => setDate(null)}>Clear</button>
        </div>
        <DatePicker {...args} value={date} onChange={setDate} />
      </>;
  }
}`,...(Ot=(Pt=je.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var Lt,Kt,Gt;Pe.parameters={...Pe.parameters,docs:{...(Lt=Pe.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    value: null,
    hasActions: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", {
      name: calendarTriggerAccessibleName
    });
    await userEvent.click(calendarButton);
    let dropdown = await getDropdown();
    let datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    const dayButtons = dropdown.querySelectorAll(".day-cell");
    expect(dayButtons.length).toBeGreaterThan(0);
    await userEvent.click(dayButtons[10] as HTMLElement);
    await userEvent.click(within(dropdown).getByRole("button", {
      name: /confirmer/i
    }));
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
    });
    await userEvent.click(calendarButton);
    dropdown = await getDropdown();
    datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    const activeDayButton = dropdown.querySelector(".day-cell[data-datepicker-active='true']");
    expect(activeDayButton).toBeInTheDocument();
    expect(activeDayButton).toHaveFocus();
    await userEvent.keyboard("{Escape}");
  }
}`,...(Gt=(Kt=Pe.parameters)==null?void 0:Kt.docs)==null?void 0:Gt.source}}};var Wt,$t,zt;Oe.parameters={...Oe.parameters,docs:{...(Wt=Oe.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  tags: ["skip-ci", "!autodocs"],
  args: {
    ...Default.args,
    value: null,
    hasActions: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", {
      name: calendarTriggerAccessibleName
    });
    await userEvent.click(calendarButton);
    let dropdown = await getDropdown();
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
    const menuDropdown = within(dropdown);
    expect(menuDropdown.getByRole("button", {
      name: /année précédente/i
    })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", {
      name: /mois précédent/i
    })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", {
      name: /mois suivant/i
    })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", {
      name: /année suivante/i
    })).toBeInTheDocument();
    const dayHeaderLabel = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(dayHeaderLabel).toBeTruthy();
    await userEvent.click(dayHeaderLabel!);
    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });
    expect(dropdown.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument();
    expect(menuDropdown.queryAllByRole("button", {
      name: /année précédente/i
    })).toHaveLength(1);
    expect(menuDropdown.queryAllByRole("button", {
      name: /année suivante/i
    })).toHaveLength(1);
    expect(menuDropdown.queryByRole("button", {
      name: /mois précédent/i
    })).not.toBeInTheDocument();
    expect(menuDropdown.queryByRole("button", {
      name: /mois suivant/i
    })).not.toBeInTheDocument();
    const yearHeaderLabel = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(yearHeaderLabel).toBeTruthy();
    await userEvent.click(yearHeaderLabel!);
    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument();
    });
    expect(dropdown.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument();
    expect(menuDropdown.getByText("Sélectionner une année")).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", {
      name: /décennie précédente/i
    })).toBeInTheDocument();
    expect(menuDropdown.getByRole("button", {
      name: /décennie suivante/i
    })).toBeInTheDocument();
    expect(dropdown.querySelector(".month-label-static")).toBeInTheDocument();
    expect(dropdown.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument();
    expect(dropdown.querySelectorAll(".year-cell").length).toBe(11);
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
    await userEvent.click(calendarButton);
    dropdown = await getDropdown();
    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });
    const activeDayButton = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
    await userEvent.tab();
    const cancelButton = within(dropdown).getByRole("button", {
      name: /^annuler$/i
    });
    expect(cancelButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_DOWN_KEY);
    expect(cancelButton).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    expect(activeDayButton).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    await waitFor(() => {
      const nextActive = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(nextActive).toBeInTheDocument();
      expect(nextActive).toHaveFocus();
      expect(nextActive).not.toBe(activeDayButton);
    });
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(dropdown).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
    await userEvent.click(calendarButton);
    dropdown = await getDropdown();
    const monthHeaderButton = dropdown.querySelector('[data-datepicker-tab="month-label"]') as HTMLButtonElement | null;
    expect(monthHeaderButton).toBeTruthy();
    await userEvent.click(monthHeaderButton!);
    await waitFor(() => {
      expect(dropdown.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument();
    });
    const activeMonthCell = dropdown.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])") as HTMLButtonElement | null;
    expect(activeMonthCell).toBeTruthy();
    await waitFor(() => {
      expect(activeMonthCell).toHaveFocus();
    });
    await userEvent.tab();
    await waitFor(() => {
      expect(within(dropdown).getByRole("button", {
        name: /^annuler$/i
      })).toHaveFocus();
    });
    await userEvent.tab({
      shift: true
    });
    expect(activeMonthCell).toHaveFocus();
    const nextYearNav = within(dropdown).getByRole("button", {
      name: /année suivante/i
    });
    await userEvent.tab({
      shift: true
    });
    expect(nextYearNav).toHaveFocus();
    await userEvent.tab();
    expect(activeMonthCell).toHaveFocus();
  }
}`,...(zt=($t=Oe.parameters)==null?void 0:$t.docs)==null?void 0:zt.source}}};var Vt,Ut,Xt;Le.parameters={...Le.parameters,docs:{...(Vt=Le.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2024, 7, 25),
    hasActions: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", {
      name: calendarTriggerAccessibleName
    });
    calendarButton.focus();
    await userEvent.tab({
      shift: true
    });
    for (const digit of "03012020") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);
    let dropdown = await getDropdown();
    let datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });
    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBe(2);
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
    await userEvent.tab({
      shift: true
    });
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    await userEvent.keyboard(TESTING_BACKSPACE_KEY);
    for (const digit of "20082024") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);
    dropdown = await getDropdown();
    datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });
    const disabledDayCellsEnd = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCellsEnd.length).toBe(7);
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
  }
}`,...(Xt=(Ut=Le.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Zt,Jt,Qt;Ke.parameters={...Ke.parameters,docs:{...(Zt=Ke.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    ...Default.args,
    value: null,
    disabledDates: [new Date(2023, 5, 15), new Date(2023, 5, 20)],
    hasActions: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p style={{
        fontFamily: "Arial, sans-serif"
      }}>
          Date sélectionnée:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "aucune"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole("button", {
      name: calendarTriggerAccessibleName
    });
    calendarButton.focus();
    await userEvent.tab({
      shift: true
    });
    for (const digit of "14062023") {
      await userEvent.keyboard(digit);
    }
    await userEvent.click(calendarButton);
    const dropdown = await getDropdown();
    const datePickerDialog = dropdown.querySelector("[role='dialog']");
    expect(datePickerDialog).toBeInTheDocument();
    await waitFor(() => {
      const active = dropdown.querySelector('.day-cell[data-datepicker-active="true"]') as HTMLButtonElement | null;
      expect(active).toBeInTheDocument();
      expect(active).toHaveFocus();
    });
    const disabledDayCells = dropdown.querySelectorAll(".day-cell[disabled]");
    expect(disabledDayCells.length).toBe(2);
  }
}`,...(Qt=(Jt=Ke.parameters)==null?void 0:Jt.docs)==null?void 0:Qt.source}}};const En=["Default","AccessibleDateAnnouncements","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{He as AccessibleDateAnnouncements,je as ControlledPropUpdate,F as Default,Ne as Disabled,Ke as DisabledDates,Me as Error,Oe as TabNavigation,Ye as TypingDate,qe as UncontrolledDefaultValue,Pe as WithAction,Le as WithMinMax,En as __namedExportsOrder,Tn as default};
