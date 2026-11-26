import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as wt,c as ae,d as $e,e as Ge,f as st,g as lt}from"./keyboard-test.constants-CzExugF2.js";import{D as k,c as j,a as aa,d as ct,e as na}from"./timepicker.constants-CxjiEh1r.js";import{u as o,w as S,a as p,e as a}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as ra}from"./testing.utils-DmLcTX3r.js";import{w as We}from"./animation-DwV-fHIC.js";import{E as dt,S as ut,b as we,c as he,a as be,A as De,B as oa,D as ia}from"./keyboard.constants-D1KJQ2-m.js";import{u as sa,a as la,g as ca,r as da,b as ua,c as ma,d as pa,e as ya,f as ga,h as va,i as ht,j as wa,k as ha,l as mt,m as ba,n as bt,o as pt,p as Da,t as fa,q as yt,s as xa,v as Ba,w as ka,x as Ta,y as Re,z as Ea,A as Aa,B as Sa,C as _a,D as Ra,E as Ia,F as fe,G as W,H as Ie,I as Dt,J as ue}from"./DatePicker.stories.util-DzyAxgyj.js";import{g as Ca}from"./id.utils-DsO5Uws7.js";import{u as Fa}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as Ha,A as Na}from"./Label-_Lstalw-.js";import{D as qa}from"./Dropdown-Dj0-4aUy.js";import{a as Ma,B as ja,c as Ya,f as ee}from"./picker.utils-B6VZfSl9.js";import{c as Oa}from"./string.utils-B_KtMSwu.js";import{B as ft}from"./Button-DsgDr11R.js";import{D as gt}from"./Divider-BVZUrQ0d.js";import{I as V}from"./IconButton-B1jvMDIw.js";import{c as te}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-DMoGODOQ.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-B0BqutDu.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-DUkuUEsZ.js";import"./IconButton.module-CR53g8c2.js";const Pa={"rte-date-picker":"_rte-date-picker_1e0u2_1"},La="_weekday_1qbjb_124",f={"visually-hidden":"_visually-hidden_1qbjb_1","rte-datepicker-dropdown":"_rte-datepicker-dropdown_1qbjb_13","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1qbjb_32","nav-left":"_nav-left_1qbjb_46","nav-right":"_nav-right_1qbjb_47","month-label":"_month-label_1qbjb_62","today-button":"_today-button_1qbjb_92","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1qbjb_115",weekday:La,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1qbjb_136","calendar-divider":"_calendar-divider_1qbjb_142","day-row":"_day-row_1qbjb_146","day-cell":"_day-cell_1qbjb_153","day-cell__label":"_day-cell__label_1qbjb_187","day-cell__surface":"_day-cell__surface_1qbjb_191","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1qbjb_306","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1qbjb_320","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1qbjb_321","compact-row":"_compact-row_1qbjb_328","month-cell":"_month-cell_1qbjb_334","month-cell__label":"_month-cell__label_1qbjb_369","year-cell":"_year-cell_1qbjb_431","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1qbjb_518"},ta=({isOpen:u,currentValue:l,hasActions:r,updateFullDate:i,updateDisplayedDate:s,onValidate:T,onCancel:g,displayValue:A,minDate:R,maxDate:C,disabledDates:_,onChange:P})=>{const[h,L]=m.useState(k.DAY),$=m.useRef(null),[ne,me]=m.useState(null),[ze,xe]=m.useState(null);sa($,u,h);const{viewDate:E,setViewDate:z,getNextDateForDayNavigation:Ve,getNextDateForCompactNavigation:Ue}=la(l),[N,re]=m.useState(null),[b,I]=m.useState(l??E),[K]=m.useState(l),Be=m.useMemo(()=>ca(),[]),q=m.useMemo(()=>({minDate:R,maxDate:C,disabledDates:_}),[R,C,_]),U=e=>{const t=Ve(e);ke(t)},oe=(e,t)=>{const d=Ue(e,t);ke(d)},ke=e=>{const t=fa({anchorDay:ze,viewDate:e,constraints:q});t!==null&&(re(t),I(t),s(t))},X=m.useCallback(()=>{const e=da({textValue:A.split(" ").join(""),constraints:q,pendingDate:N,selectedDate:l});z(e.viewDate),xe(e.monthNavigationAnchorDay)},[A,N,l,q,z]),ie=m.useMemo(()=>{const e=E??l??new Date,t=h;return h===k.DAY?Oa(ua(e)):t===k.MONTH?ma(e):pa(e)},[h,E,l]),J=m.useMemo(()=>ya({viewDate:E,selectedDate:N??l,minDate:R,maxDate:C,disabledDates:_}),[N,l,E,R,C,_]),Z=m.useMemo(()=>ga({viewDate:E,selectedDate:N??l,minDate:R,maxDate:C,disabledDates:_}),[N,l,E,R,C,_]),H=m.useMemo(()=>va({viewDate:E,selectedDate:N??l,minDate:R,maxDate:C,disabledDates:_}),[N,l,E,R,C,_]),Xe=()=>{h===k.DAY?(L(k.MONTH),ce()):h===k.MONTH?(L(k.YEAR),ve()):(L(k.DAY),Q())},M=e=>{const t=Da({date:e,constraints:q});if(t!==null)if(r)s(t),re(t),z(t),I(t),xe(t.getDate());else{i(t),me(t),P==null||P(t),T==null||T();return}},pe=e=>{const t=new Date(E.getFullYear(),e,1);z(t),I(t),L(k.DAY),Q()},se=e=>{const t=new Date(e,E.getMonth(),1);z(t),I(t),L(k.MONTH),ce()},Je=e=>{const t=N??l;return t!==null&&pt(e,t)},Te=()=>{M(new Date),L(k.DAY)},Ze=e=>{if(e.key==="Escape"){g==null||g();return}const t=h;t===k.DAY?Ee(e):t===k.MONTH?D(e):G(e)},Ee=e=>{if(!ye(e.target))return;if(e.stopPropagation(),[dt,ut].includes(e.key)){e.preventDefault();const d=b,w=J.find(c=>pt(c.date,d));w&&!w.isDisabled&&M(d);return}[we,he,be,De].includes(e.key)&&(e.preventDefault(),Se(e.key))},D=e=>{if(!le(e.target))return;if(e.stopPropagation(),[dt,ut].includes(e.key)){e.preventDefault();const d=b.getMonth(),w=Z.find(c=>c.monthIndex===d);w&&!w.isDisabled&&pe(d);return}[we,he,be,De].includes(e.key)&&(e.preventDefault(),Qe(e.key))},G=e=>{if(!Ae(e.target))return;if(e.stopPropagation(),[dt,ut].includes(e.key)){e.preventDefault();const d=b.getFullYear(),w=H.find(c=>c.year===d);w&&!w.isDisabled&&se(d);return}[we,he,be,De].includes(e.key)&&(e.preventDefault(),et(e.key))},ye=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,le=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,Ae=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Se=e=>{const t=J,d=bt(t,b);if(d<0)return;const w=yt(e,"day"),c=Math.abs(w)===7?7:1,y=w>0?1:-1;let v=d+w;for(;v>=0&&v<t.length&&t[v].isDisabled;)v+=y*c;if(v<0||v>=t.length){const B=xa(Ba(b,w));if(ge(B))return;de(B),Q();return}const x=t[v].date;ka(x,E)?I(x):de(x),Q()},Qe=e=>{const t=Z,d=b.getMonth(),w=t.findIndex(ot=>ot.monthIndex===d);if(w<0)return;const c=yt(e,"monthYear"),y=Ta(b,c);if(y.getFullYear()!==E.getFullYear()){de(y),ce();return}const v=3,x=t.length;let B=Re({currentIndex:w,key:e,columnCount:v,cellCount:x}),Y=0;for(;B!==null&&t[B].isDisabled&&Y<x;)B=Re({currentIndex:B,key:e,columnCount:v,cellCount:x}),Y+=1;if(B===null||t[B].isDisabled)return;const _e=t[B].monthIndex;I(new Date(E.getFullYear(),_e,1)),ce()},et=e=>{const t=H,d=b.getFullYear(),w=t.findIndex(it=>it.year===d);if(w<0)return;const c=yt(e,"monthYear"),y=d+c;if(!t.map(it=>it.year).includes(y)){de(new Date(y,0,1)),ve();return}const x=3,B=t.length;let Y=Re({currentIndex:w,key:e,columnCount:x,cellCount:B}),_e=0;for(;Y!==null&&t[Y].isDisabled&&_e<B;)Y=Re({currentIndex:Y,key:e,columnCount:x,cellCount:B}),_e+=1;if(Y===null||t[Y].isDisabled)return;const ot=t[Y].year;I(new Date(ot,0,1)),ve()},ge=e=>ht({date:e,...q}),Q=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ce=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ve=()=>{We(()=>{const e=$.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},tt=()=>{T==null||T();const e=N??l;me(e),re(null),i(e)},at=(e,t)=>pt(e,t)?0:-1,nt=e=>e===b.getMonth()?0:-1,rt=e=>e===b.getFullYear()?0:-1,de=e=>{const t=q;let d=null;h===k.DAY?d=Ea({focusTargetDay:e,constraints:t}):h===k.MONTH?d=Aa({focusTargetMonthStart:e,constraints:t}):d=Sa({focusTargetYear:e.getFullYear(),constraints:t}),d!==null&&(z(d.viewDate),I(d.menuInitialActiveDate))};return m.useEffect(()=>{if(u)X(),Q();else{if(ne)return;if(K===null)i(null);else if(!ht({date:K,...q}))s(K);else{const e=wa(K,q);e&&i(e)}}},[u,X,l,s,K,ne,R,C,_,i,q]),m.useEffect(()=>{(()=>{if(h===k.DAY){const t=J;if(bt(t,b)>=0)return;const w=t.find(c=>!c.isDisabled);w&&I(w.date)}else if(h===k.MONTH){const t=Z,d=b.getMonth();if(t.some(c=>c.monthIndex===d&&!c.isDisabled&&E.getFullYear()===b.getFullYear()))return;const w=t.find(c=>!c.isDisabled);w&&I(new Date(E.getFullYear(),w.monthIndex,1))}else{const t=H,d=b.getFullYear();if(t.some(c=>c.year===d&&!c.isDisabled))return;const w=t.find(c=>!c.isDisabled);w&&I(new Date(w.year,0,1))}})()},[E,b,h,J,Z,H]),n.jsx(n.Fragment,{children:n.jsxs("div",{ref:$,className:f["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ze,children:[n.jsxs("div",{className:f["rte-datepicker-dropdown-header"],children:[n.jsx("div",{className:f["nav-left"],children:h===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(V,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":j.navPrevYear,onClick:()=>U("prevYear")}),n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":j.navPrevMonth,onClick:()=>U("prevMonth")})]}):h===k.MONTH?n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":j.navPrevCompact,onClick:()=>oe("previous","month")}):n.jsx(V,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":j.navPrevCompact,onClick:()=>oe("previous","year")})}),h===k.YEAR?n.jsx("span",{className:te(f["month-label"],"month-label-static"),children:ie}):n.jsx("button",{className:f["month-label"],onClick:Xe,"aria-label":`${ie}, afficher les ${h===k.DAY?"mois":"années"}`,"data-datepicker-tab":j.monthLabel,children:ie}),n.jsx("span",{className:f["visually-hidden"],role:"status","aria-live":"polite","aria-atomic":"true",children:ie}),n.jsx("div",{className:f["nav-right"],children:h===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":j.navNextMonth,onClick:()=>U("nextMonth")}),n.jsx(V,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":j.navNextYear,onClick:()=>U("nextYear")})]}):h===k.MONTH?n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":j.navNextCompact,onClick:()=>oe("next","month")}):n.jsx(V,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":j.navNextCompact,onClick:()=>oe("next","year")})})]}),n.jsx("button",{type:"button",className:f["today-button"],onClick:Te,"data-datepicker-tab":j.today,children:"Aujourd'hui"}),h===k.DAY?n.jsxs("div",{className:te(f["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[n.jsx("div",{className:f["rte-datepicker-weekdays"],role:"row",children:ha().map((e,t)=>n.jsx("div",{className:f.weekday,role:"columnheader","aria-label":Be[t],children:e},t))}),n.jsx("div",{className:f["calendar-divider"],"aria-hidden":"true",children:n.jsx(gt,{appearance:"brand"})}),mt(J,7).map((e,t)=>n.jsx("div",{className:f["day-row"],role:"row","aria-label":`${t}`,children:e.map(d=>n.jsxs("button",{type:"button",className:te(f["day-cell"],"day-cell"),role:"gridcell","aria-selected":Je(d.date),onClick:()=>M(d.date),"aria-current":d.isCurrent?"date":void 0,tabIndex:at(d.date,b),disabled:d.isDisabled,"data-cell-type":d.cellType,"data-datepicker-active":(b==null?void 0:b.toDateString())===d.date.toDateString()||void 0,children:[n.jsx("span",{className:f["day-cell__surface"],"aria-hidden":"true"}),n.jsx("span",{id:`day-label-${d.date.toISOString()}`,className:f["visually-hidden"],children:ba(d.date)}),n.jsx("span",{className:f["day-cell__label"],"aria-hidden":"true",children:d.label})]},d.date.toISOString()))},e[0].date.toISOString()+t))]}):h===k.MONTH?n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:f["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),n.jsx("div",{className:te(f["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:mt(Z,3).map(e=>n.jsx("div",{className:f["compact-row"],role:"row",children:e.map(t=>n.jsx("button",{type:"button",className:te(f["month-cell"],"month-cell"),role:"gridcell","aria-selected":t.isSelected,tabIndex:nt(t.monthIndex),"data-cell-month-index":t.monthIndex,"data-active-date-month":E.getMonth(),"data-active-date-year":b.getFullYear(),"data-active-view-year":E.getFullYear(),"data-datepicker-active":t.monthIndex===b.getMonth()&&E.getFullYear()===b.getFullYear()?!0:void 0,"data-current":t.isCurrent,disabled:t.isDisabled,"data-selected":t.isSelected,onClick:()=>pe(t.monthIndex),children:n.jsx("span",{className:f["month-cell__label"],children:t.label})},t.monthIndex))},e[0].monthIndex))})]}):n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:f["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),n.jsx("div",{className:te(f["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:mt(H,3).map(e=>n.jsx("div",{className:f["compact-row"],role:"row",children:e.map(t=>n.jsx("button",{type:"button",className:te(f["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(b==null?void 0:b.getFullYear())===t.year||null,"data-current":t.isCurrent,tabIndex:rt(t.year),"data-selected":t.isSelected,"aria-selected":t.isSelected,disabled:t.isDisabled,onClick:()=>se(t.year),children:t.label},t.year))},e[0].year))})]}),r&&n.jsxs("div",{className:f["rte-datepicker-dropdown-actions"],children:[n.jsx(ft,{label:"Annuler",size:"s",variant:"transparent",onClick:g,"data-datepicker-tab":j.cancel}),n.jsx(ft,{label:"Confirmer",size:"s",variant:"transparent",onClick:tt,"data-datepicker-tab":j.confirm})]})]})})};ta.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Ka=/^\d*$/,Ga=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[Ce,Fe,vt]=aa,O=m.forwardRef(({id:u,label:l,required:r=!1,showLabelRequirement:i=!1,disabled:s=!1,value:T,defaultValue:g,readonly:A=!1,onChange:R,hasActions:C=!0,onCancel:_,onValidate:P,minDate:h,maxDate:L,disabledDates:$,isError:ne,assistiveTextLabel:me,errorMessage:ze,assistiveAppearance:xe="description",showAssistiveIcon:E=!1,assistiveTextLink:z,width:Ve="248px"},Ue)=>{var w;const[N,re]=m.useState(!1),[b,I]=m.useState(!1),K=u??`datepicker-${Ca()}`,Be=ne&&ze||me,q=Be&&!b,U=`${K}-assistive-text`,oe=T!==void 0,ke=m.useRef(T??g??null),X=oe?T??null:ke.current,{increaseActiveSegmentValue:ie,decreaseActiveSegmentValue:J,resetActiveSegmentValue:Z,updateDateSegment:H,updateFullDate:Xe,internalValue:M,displayValue:pe,dateState:se,updateDisplayedDate:Je}=_a(X,{minDate:h,maxDate:L,disabledDates:$}),{moveToNextSegment:Te,moveToPreviousSegment:Ze,setActiveDateSegment:Ee,activeDateSegment:D}=Ra(),G=m.useRef(R),ye=m.useRef(X??null);m.useEffect(()=>{G.current=R},[R]),m.useEffect(()=>{ye.current=X??null},[X]),m.useEffect(()=>{var c,y;if(M===null&&!Ga(se)){(c=G.current)==null||c.call(G,M);return}Ma(ye.current,M)||(ye.current=M,(y=G.current)==null||y.call(G,M))},[M,se]);const le=m.useRef(null),Ae=m.useRef(null),Se=m.useRef(null),Qe=Fa(le.current),et=()=>{Q(),e(D)},ge=(c=!1)=>{var y;re(c),I(!1),c&&((y=Se.current)==null||y.focus({preventScroll:!0}))},Q=()=>{s||re(!0)},ce=()=>{s||I(!0)},ve=c=>{const y=c.key;if(c.stopPropagation(),e(D),[be,De,we,he,oa,ia].includes(y))c.preventDefault(),tt(y);else if(Ka.test(y))c.preventDefault(),at(y);else return},tt=c=>{c===he?Te():c===we?Ze():c===be?ie(D):c===De?J(D):Z(D)},at=c=>{const v=se[`${D===Ce?"day":D===Fe?"month":"year"}Digits`];D===vt&&v.length>=4?nt(v,c):rt(v,c)},nt=(c,y)=>{const v=Array.from(c).findIndex(x=>x!=="0");if(v===0){const x=ee(Number(y),D);H(D,x)}else{const x=c.slice(v)+y,B=ee(Math.min(Number(x),ct[D]),D);H(D,B)}},rt=(c,y)=>{if(c.length>=2)if(c[0]==="0"){const v=Number(c[1]+y),x=ee(Math.min(v,ct[D]),D);H(D,x),Te()}else{const v=ee(Number(y),D);H(D,v)}else{const v=`${c}${y}`,x=na[D];if(c.length===0&&Number(y)>x){const B=ee(Number(y),D);H(D,B)}else if(v.length===2){const B=ee(Math.min(Number(v),ct[D]),D);H(D,B)}else{const B=ee(Number(y),D);H(D,B)}}},de=()=>{var x;b&&I(!1);const c=((x=le.current)==null?void 0:x.selectionStart)??0,y=Ya(),v=1;c<=y[Ce][v]+1?e(Ce):c<=y[Fe][v]+1?e(Fe):e(vt)},e=m.useCallback(c=>{Ee(c);const y=3,v=c===Ce?0:c===Fe?2+y:0+2*(2+y),x=c===vt?v+4:v+2;We(()=>{var B;(B=le.current)==null||B.setSelectionRange(v,x)})},[Ee]),t=()=>{_==null||_(),ge(!0)},d=()=>{P==null||P(),ge(!0)};return m.useEffect(()=>{e(D)},[D,e]),n.jsxs("div",{className:Pa["rte-date-picker"],style:{minWidth:"248px",width:Ve},ref:Ue,children:[n.jsx(Ha,{htmlFor:K,label:l,required:r,showLabelRequirement:i}),n.jsx(qa,{style:{width:(w=Ae.current)==null?void 0:w.offsetWidth},isList:!1,isOpen:b,onClose:ge,offset:8,overlayLevel:Qe,trigger:n.jsx(ja,{id:K,ariaDescribedBy:q?U:void 0,icon:"calendar-month",onFocus:et,isFocused:N,pickerInputRef:le,onOpenPicker:ce,value:pe,onKeyDown:ve,onMouseUp:de,onChange:()=>{},fixedWidth:!1,pickerRef:Ae,openButtonRef:Se,openButtonAriaLabel:Ia(M),isError:ne,disabled:s,readOnly:A,required:r}),position:"bottom",children:n.jsx(ta,{isOpen:b,currentValue:M,hasActions:C,onValidate:d,onCancel:t,updateDisplayedDate:Je,updateFullDate:Xe,displayValue:pe,minDate:h,maxDate:L,disabledDates:$})}),q&&n.jsx(Na,{id:U,label:Be,appearance:ne?"error":xe,showIcon:E,href:z})]})});O.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["Omit"]};const An={title:"Composants/DatePicker/DatePicker",component:O,tags:["autodocs"]},F={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})}},He={tags:["!autodocs"],parameters:{a11y:{test:"error",options:{runOnly:{type:"rule",values:["aria-required-parent","aria-required-children"]}}}},args:{...F.args,value:void 0,defaultValue:new Date(2026,2,31),disabledDates:[new Date(2026,2,16)]},play:async({canvasElement:u})=>{await o.click(S(u).getByRole("button",{name:fe}));const l=await W(),r=S(l);Ie(r.getByRole("grid",{name:"Calendrier"}),7);const i=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];await p(()=>{Dt(r.getByRole("grid",{name:"Calendrier"}),i)});const s=r.getByRole("status");a(s).toHaveAttribute("aria-atomic","true"),a(s).toHaveAttribute("aria-live","polite"),a(s.childElementCount).toBe(0),a(s.closest("button")).toBeNull(),a(r.getByRole("button",{name:"Mars 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),a(s).toHaveTextContent(/^Mars 2026$/);const T=r.getByRole("gridcell",{name:"dimanche 15 mars 2026"});a(S(T).getByText("15")).toBeInTheDocument(),a(S(T).getByText("dimanche 15 mars 2026")).not.toHaveAttribute("aria-hidden","true"),a(r.getByRole("gridcell",{name:"lundi 16 mars 2026"})).toBeDisabled(),a(S(r.getByRole("gridcell",{name:"lundi 23 février 2026"})).getByText("23")).toBeInTheDocument(),a(S(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).getByText("1")).toBeInTheDocument(),await p(()=>{for(const g of r.getAllByRole("gridcell")){const A=S(g).getByText(/^\d+$/);a(A).toBeVisible(),a(A).toHaveAttribute("aria-hidden","true"),a(g).not.toHaveAttribute("aria-hidden","true"),a(g).not.toHaveAttribute("aria-label")}}),await p(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toHaveFocus()}),await o.keyboard(wt),await p(()=>{a(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).toHaveFocus(),a(s).toHaveTextContent("Avril 2026")}),a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toBeInTheDocument(),await o.keyboard(ae),await p(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026"})).toHaveFocus(),a(s).toHaveTextContent("Mars 2026")}),await o.click(r.getByRole("button",{name:"Mois suivant"})),await p(()=>a(s).toHaveTextContent(/^Avril 2026$/)),a(r.getByRole("button",{name:"Avril 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),await o.click(r.getByRole("button",{name:"Année suivante"})),await p(()=>a(s).toHaveTextContent("Avril 2027")),await o.click(r.getByRole("button",{name:"Année précédente"})),await p(()=>a(s).toHaveTextContent("Avril 2026")),await o.click(r.getByRole("button",{name:"Mois précédent"})),await p(()=>a(s).toHaveTextContent("Mars 2026")),await o.click(r.getByRole("button",{name:"Mars 2026, afficher les mois"})),await p(()=>a(s).toHaveTextContent(/^2026$/)),Ie(r.getByRole("grid",{name:"Mois"}),3),await o.click(r.getByRole("button",{name:"Année suivante"})),await p(()=>a(s).toHaveTextContent(/^2027$/)),await o.click(r.getByRole("button",{name:"Année précédente"})),await p(()=>a(s).toHaveTextContent(/^2026$/)),r.getByRole("gridcell",{name:"mars"}).focus(),a(r.getByRole("gridcell",{name:"mars"})).toHaveFocus();for(const g of["février","janvier","décembre"])await o.keyboard(ae),await p(()=>a(r.getByRole("gridcell",{name:g})).toHaveFocus());a(s).toHaveTextContent(/^2025$/),await o.click(r.getByRole("button",{name:"2025, afficher les années"})),await p(()=>a(s).toHaveTextContent("2020 – 2030")),Ie(r.getByRole("grid",{name:"Années"}),3),await o.click(r.getByRole("button",{name:"Décennie suivante"})),await p(()=>a(s).toHaveTextContent("2030 – 2040")),await o.click(r.getByRole("button",{name:"Décennie précédente"})),await p(()=>a(s).toHaveTextContent("2020 – 2030")),r.getByRole("gridcell",{name:"2025"}).focus();for(let g=2024;g>=2019;g--)await o.keyboard(ae),await p(()=>a(r.getByRole("gridcell",{name:String(g)})).toHaveFocus());a(s).toHaveTextContent("2010 – 2020"),a(l.querySelector('[aria-live="polite"]')).toBe(s),await o.click(r.getByRole("gridcell",{name:"2019"})),await o.click(r.getByRole("gridcell",{name:"mars"})),await p(()=>{const g=r.getByRole("grid",{name:"Calendrier"});Ie(g,7),Dt(g,i)})}},Ne={args:{...F.args,disabled:!0}},qe={args:{...F.args,isError:!0},play:async({canvasElement:u})=>{const l=S(u);a(l.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Me={args:{...F.args,value:void 0},render:u=>{const{value:l,...r}=u;return n.jsx(O,{...r,defaultValue:new Date(2026,5,15)})}},je={tags:["!autodocs"],args:{...F.args,value:null},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})},play:async({canvasElement:u})=>{ra(),await o.tab();for(const r of"15062023")await o.keyboard(r);const l=u.querySelector("input");a(ue(l)).toBe("15/06/2023"),await o.keyboard(Ge),a(ue(l)).toBe("15/06/2022"),await o.keyboard(st),a(ue(l)).toBe("15/06/2023"),await o.keyboard(ae),await o.keyboard(st),a(ue(l)).toBe("15/07/2023"),await o.keyboard(ae),await o.keyboard(st),a(ue(l)).toBe("16/07/2023"),await o.keyboard(wt),await o.keyboard(Ge),await o.keyboard(Ge),a(ue(l)).toBe("16/05/2023")}},Ye={args:{...F.args,value:null},render:u=>{const[l,r]=m.useState(new Date(2026,5,10));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>r(new Date(2026,5,22)),children:"Set to 22/06/2026"}),n.jsx("button",{onClick:()=>r(null),children:"Clear"})]}),n.jsx(O,{...u,value:l,onChange:r})]})}},Oe={tags:["skip-ci","!autodocs"],args:{...F.args,value:null,hasActions:!0},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});await o.click(r);let i=await W(),s=i.querySelector("[role='dialog']");a(s).toBeInTheDocument();const T=i.querySelectorAll(".day-cell");a(T.length).toBeGreaterThan(0),await o.click(T[10]),await o.click(S(i).getByRole("button",{name:/confirmer/i})),await p(()=>{a(s).not.toBeInTheDocument()}),await o.click(r),i=await W(),s=i.querySelector("[role='dialog']"),a(s).toBeInTheDocument();const g=i.querySelector(".day-cell[data-datepicker-active='true']");a(g).toBeInTheDocument(),a(g).toHaveFocus(),await o.keyboard("{Escape}")}},Pe={tags:["skip-ci","!autodocs"],args:{...F.args,value:null,hasActions:!0},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});await o.click(r);let i=await W();await o.tab(),await p(()=>{a(S(i).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await o.tab(),await p(()=>{a(S(i).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await o.tab(),await p(()=>{a(S(i).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=S(i);a(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const T=i.querySelector('[data-datepicker-tab="month-label"]');a(T).toBeTruthy(),await o.click(T),await p(()=>{a(i.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),a(i.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),a(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),a(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),a(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),a(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const g=i.querySelector('[data-datepicker-tab="month-label"]');a(g).toBeTruthy(),await o.click(g),await p(()=>{a(i.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),a(i.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),a(s.getByText("Sélectionner une année")).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),a(i.querySelector(".month-label-static")).toBeInTheDocument(),a(i.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),a(i.querySelectorAll(".year-cell").length).toBe(11),await o.keyboard($e),await p(()=>{a(i).not.toBeInTheDocument(),a(r).toHaveFocus()}),await o.click(r),i=await W(),await p(()=>{const h=i.querySelector('.day-cell[data-datepicker-active="true"]');a(h).toBeInTheDocument(),a(h).toHaveFocus()});const A=i.querySelector('.day-cell[data-datepicker-active="true"]');await o.tab();const R=S(i).getByRole("button",{name:/^annuler$/i});a(R).toHaveFocus(),await o.keyboard(Ge),a(R).toHaveFocus(),await o.tab({shift:!0}),a(A).toHaveFocus(),await o.keyboard(wt),await p(()=>{const h=i.querySelector('.day-cell[data-datepicker-active="true"]');a(h).toBeInTheDocument(),a(h).toHaveFocus(),a(h).not.toBe(A)}),await o.keyboard($e),await p(()=>{a(i).not.toBeInTheDocument(),a(r).toHaveFocus()}),await o.click(r),i=await W();const C=i.querySelector('[data-datepicker-tab="month-label"]');a(C).toBeTruthy(),await o.click(C),await p(()=>{a(i.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const _=i.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");a(_).toBeTruthy(),await p(()=>{a(_).toHaveFocus()}),await o.tab(),await p(()=>{a(S(i).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await o.tab({shift:!0}),a(_).toHaveFocus();const P=S(i).getByRole("button",{name:/année suivante/i});await o.tab({shift:!0}),a(P).toHaveFocus(),await o.tab(),a(_).toHaveFocus()}},Le={tags:["!autodocs"],args:{...F.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});r.focus(),await o.tab({shift:!0}),await o.tab({shift:!0});for(const A of"03012020")await o.keyboard(A);await o.click(r);let i=await W(),s=i.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await p(()=>{const A=i.querySelector('.day-cell[data-datepicker-active="true"]');a(A).toBeInTheDocument(),a(A).toHaveFocus()});const T=i.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2),await o.keyboard($e),await p(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()}),await o.tab({shift:!0}),await o.tab({shift:!0}),await o.keyboard(lt),await o.keyboard(ae),await o.keyboard(lt),await o.keyboard(ae),await o.keyboard(lt);for(const A of"20082024")await o.keyboard(A);await o.click(r),i=await W(),s=i.querySelector("[role='dialog']"),a(s).toBeInTheDocument(),await p(()=>{const A=i.querySelector('.day-cell[data-datepicker-active="true"]');a(A).toBeInTheDocument(),a(A).toHaveFocus()});const g=i.querySelectorAll(".day-cell[disabled]");a(g.length).toBe(7),await o.keyboard($e),await p(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()})}},Ke={tags:["!autodocs"],args:{...F.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:u=>{const[l,r]=m.useState(null),i=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:i})]})},play:async({canvasElement:u})=>{const r=S(u).getByRole("button",{name:fe});r.focus(),await o.tab({shift:!0}),await o.tab({shift:!0});for(const g of"14062023")await o.keyboard(g);await o.click(r);const i=await W(),s=i.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await p(()=>{const g=i.querySelector('.day-cell[data-datepicker-active="true"]');a(g).toBeInTheDocument(),a(g).toHaveFocus()});const T=i.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2)}};var xt,Bt,kt;F.parameters={...F.parameters,docs:{...(xt=F.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(kt=(Bt=F.parameters)==null?void 0:Bt.docs)==null?void 0:kt.source}}};var Tt,Et,At;He.parameters={...He.parameters,docs:{...(Tt=He.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(At=(Et=He.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var St,_t,Rt;Ne.parameters={...Ne.parameters,docs:{...(St=Ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Rt=(_t=Ne.parameters)==null?void 0:_t.docs)==null?void 0:Rt.source}}};var It,Ct,Ft;qe.parameters={...qe.parameters,docs:{...(It=qe.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ft=(Ct=qe.parameters)==null?void 0:Ct.docs)==null?void 0:Ft.source}}};var Ht,Nt,qt;Me.parameters={...Me.parameters,docs:{...(Ht=Me.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=Me.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var Mt,jt,Yt;je.parameters={...je.parameters,docs:{...(Mt=je.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Yt=(jt=je.parameters)==null?void 0:jt.docs)==null?void 0:Yt.source}}};var Ot,Pt,Lt;Ye.parameters={...Ye.parameters,docs:{...(Ot=Ye.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(Pt=Ye.parameters)==null?void 0:Pt.docs)==null?void 0:Lt.source}}};var Kt,Gt,Wt;Oe.parameters={...Oe.parameters,docs:{...(Kt=Oe.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Wt=(Gt=Oe.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var $t,zt,Vt;Pe.parameters={...Pe.parameters,docs:{...($t=Pe.parameters)==null?void 0:$t.docs,source:{originalSource:`{
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
}`,...(Vt=(zt=Pe.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var Ut,Xt,Jt;Le.parameters={...Le.parameters,docs:{...(Ut=Le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Jt=(Xt=Le.parameters)==null?void 0:Xt.docs)==null?void 0:Jt.source}}};var Zt,Qt,ea;Ke.parameters={...Ke.parameters,docs:{...(Zt=Ke.parameters)==null?void 0:Zt.docs,source:{originalSource:`{
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
}`,...(ea=(Qt=Ke.parameters)==null?void 0:Qt.docs)==null?void 0:ea.source}}};const Sn=["Default","AccessibleDateAnnouncements","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{He as AccessibleDateAnnouncements,Ye as ControlledPropUpdate,F as Default,Ne as Disabled,Ke as DisabledDates,qe as Error,Pe as TabNavigation,je as TypingDate,Me as UncontrolledDefaultValue,Oe as WithAction,Le as WithMinMax,Sn as __namedExportsOrder,An as default};
