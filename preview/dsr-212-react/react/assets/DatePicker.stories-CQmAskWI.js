import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as be,a as qe,b as _t,c as Ze,d as Oe,e as Je}from"./keyboard-test.constants-DkNPES5T.js";import{D as Le,e as Vt,f as Wt,g as ot,a as re,A as oe,b as ie,c as ce,h as v,i as Q,j as je,k as $,E as Qe,S as et,l as fe,B as $t,m as zt,n as Ut}from"./timepicker.constants-Dc9ut5mB.js";import{a as F,e as c,w as G,u as p}from"./index-4rjIhT2C.js";import{r as f}from"./index-G8LIXM5I.js";import{f as Xt}from"./testing.utils-mIZIUNbM.js";import{w as Pe,B as Zt}from"./BaseInputPicker-DB_m1KfE.js";import{B as Jt}from"./BaseDropdown-Bc55FiNe.js";import{u as Qt}from"./useFocusTrap-DG09Z6i4.js";import{B as st}from"./Button-8ghNAy9-.js";import{D as tt}from"./Divider-BMotkXeQ.js";import{I as Z}from"./IconButton-Q4rJrqsf.js";import{c as ne}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DOkBvtOM.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";function le(t){return new Date(t.getFullYear(),t.getMonth(),1)}function ea(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function it(t){const{year:e,monthIndex:a,minDate:n,maxDate:o,disabledDates:l}=t,g=ea(new Date(e,a,1)).getDate();for(let y=1;y<=g;y++){const h=C(new Date(e,a,y));if(!ee({date:h,minDate:n,maxDate:o,disabledDates:l}))return!0}return!1}function Nt(t){const{year:e,minDate:a,maxDate:n,disabledDates:o}=t;for(let l=0;l<12;l++)if(it({year:e,monthIndex:l,minDate:a,maxDate:n,disabledDates:o}))return!0;return!1}function At(t){return(t.getDay()+6)%7}function ta(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function aa(t){const e=`${t.getDate()}`.padStart(2,"0"),a=`${t.getMonth()+1}`.padStart(2,"0"),n=`${t.getFullYear()}`.padStart(4,"0");return`${e}/${a}/${n}`}function na(t){return t===null?Vt:`${Wt}${aa(t)}`}function ra(t){const e=t.trim();if(e.length===0)return null;const a=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(e);if(!a)return null;const n=Number(a[1]),o=Number(a[2]),l=Number(a[3]);if(o<1||o>12)return null;const g=new Date(l,o-1,n);return g.getFullYear()===l&&g.getMonth()===o-1&&g.getDate()===n&&!Number.isNaN(g.valueOf())?g:null}function J(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()&&t.getDate()===e.getDate()}function oa(t,e){return C(t).valueOf()<C(e).valueOf()}function ia(t,e){return C(t).valueOf()>C(e).valueOf()}function C(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function Ft(t,e){return new Date(t,e+1,0).getDate()}function ca(t,e,a){const n=Ft(e,a),o=Math.min(Math.max(t,1),n);return C(new Date(e,a,o))}function Ke(t,e){const a=new Date(t);return a.setDate(a.getDate()+e),a}function rt(t,e){return new Date(t.getFullYear(),t.getMonth()+e,1)}function lt(t,e){return new Date(t.getFullYear()+e,t.getMonth(),1)}function Mt(t){return Math.floor(t/10)*10}function pe(t){const{viewDate:e,calendarType:a}=t;if(a==="day"){const n=t.dayAction;return n?["prevYear","nextYear"].includes(n)?rt(e,n==="prevYear"?-12:12):rt(e,n==="prevMonth"?-1:1):e}if(a==="month"){const n=t.compactStep;return n?lt(e,n==="previous"?-1:1):e}if(a==="year"){const n=t.compactStep;if(!n)return e;const o=ot;return lt(e,n==="previous"?-o:o)}return e}function sa(t,e){return!e||e.length===0?!1:e.some(a=>J(t,C(a)))}function ee(t){const{date:e,minDate:a,maxDate:n,disabledDates:o}=t;console.log({isDateDisabled:{date:e,minDate:a,maxDate:n,disabledDates:o}});const l=C(e);return a&&oa(l,a)||n&&ia(l,n)?!0:sa(l,o)}function la(t,e=Le){return new Intl.DateTimeFormat(e,{month:"long",year:"numeric"}).format(t)}function ua(t,e=Le){return new Intl.DateTimeFormat(e,{year:"numeric"}).format(t)}function da(t){const e=Mt(t.getFullYear()),a=e+ot-1;return`${e} – ${a}`}function ma(t=Le){const e=new Date(2021,0,4);return Array.from({length:7}).map((a,n)=>{const o=Ke(e,n);return new Intl.DateTimeFormat(t,{weekday:"short"}).format(o).trim().charAt(0).toLocaleUpperCase(t)})}function pa(t){const{pendingDate:e,selectedDate:a,dayCells:n}=t,o=C(e??a??new Date),l=ut(n,o);if(l!==null)return l;const g=C(new Date),y=ut(n,g);if(y!==null)return y;const h=n.find(x=>!x.isDisabled);return h?h.date:o}function ut(t,e){const a=t.find(o=>J(o.date,e));if(!a)return null;if(!a.isDisabled)return a.date;const n=Da(t,t.indexOf(a));return n?n.date:null}function Da(t,e){for(let a=e;a<t.length;a++){const n=t[a];if(!n.isDisabled)return n}for(let a=0;a<e;a++){const n=t[a];if(!n.isDisabled)return n}}function ga(t,e){return console.log({dayCells:t,date:e}),t.findIndex(a=>J(a.date,e))}function ya(t){const e=le(t),a=At(e),n=Ft(t.getFullYear(),t.getMonth());return Math.ceil((a+n)/7)*7}function Yt(t){const{viewDate:e,selectedDate:a,minDate:n,maxDate:o,disabledDates:l}=t,g=le(e),y=At(g),h=Ke(g,-y),x=ya(e),w=C(new Date);return Array.from({length:x}).map((u,D)=>{const _=Ke(h,D),P=ta(_,e),te=!!a&&J(_,a),d=J(_,w);let S="default";return P?te?S="selected":d&&(S="today"):S="prev/next",{date:_,label:`${_.getDate()}`,cellType:S,isDisabled:ee({date:_,minDate:n,maxDate:o,disabledDates:l})}})}function ha(t){const{viewDate:e,selectedDate:a,minDate:n,maxDate:o,disabledDates:l,locale:g=Le}=t,y=a?le(a):null,h=le(new Date),x=e.getFullYear();return Array.from({length:12}).map((w,u)=>{const D=new Date(x,u,1);return{monthIndex:u,label:new Intl.DateTimeFormat(g,{month:"long"}).format(D),isDisabled:!it({year:x,monthIndex:u,minDate:n,maxDate:o,disabledDates:l}),isCurrent:D.getTime()===h.getTime(),isSelected:!!y&&D.getTime()===y.getTime()}})}function wa(t){const{viewDate:e,selectedDate:a,minDate:n,maxDate:o,disabledDates:l}=t,g=new Date().getFullYear(),y=(a==null?void 0:a.getFullYear())??null,h=Mt(e.getFullYear());return Array.from({length:ot}).map((x,w)=>{const u=h+w;return{year:u,label:`${u}`,isDisabled:!Nt({year:u,minDate:n,maxDate:o,disabledDates:l}),isCurrent:u===g,isSelected:y===u}})}function Ne(t){const{currentIndex:e,key:a,columnCount:n,cellCount:o}=t;if(a===ie)return e>0?e-1:null;if(a===ce)return e<o-1?e+1:null;if(a===re){const l=e-n;return l>=0?l:null}if(a===oe){const l=e+n;return l<o?l:null}return null}const va={[ie]:-1,[ce]:1},dt={day:7,monthYear:3};function at(t,e){return t===re?-dt[e]:t===oe?dt[e]:va[t]??0}function fa(t){return(t==null?void 0:t.getDate())??null}function ba(t){const{textValue:e,constraints:a,pendingDate:n,selectedDate:o}=t,l=t.fallbackViewDate??new Date,g=e.trim(),y=g.length>0?ra(g):null,h=y?C(y):null,x=h!==null&&!ee({date:h,...a});console.log({textValue:e,parsedFromField:y,parsedNormalized:h,isParsedUsable:x,pendingDate:n,selectedDate:o});let w,u;x&&h?(u=h,w=le(h)):(u=null,w=l);const D=Yt({viewDate:w,selectedDate:u,...a}),_=pa({pendingDate:u,selectedDate:u,dayCells:D}),P=fa(u??n??o);return{viewDate:w,pendingForMenu:u,menuInitialActiveDate:_,monthNavigationAnchorDay:P}}function Ta(t){const{anchorDay:e,viewDate:a,constraints:n}=t;if(e===null)return null;const o=ca(e,a.getFullYear(),a.getMonth());return ee({date:o,...n})?null:o}function xa(t){const e=C(t.date);return ee({date:e,...t.constraints})?null:e}function Sa(t){const e=C(t.focusTargetDay);return ee({date:e,...t.constraints})?null:{viewDate:le(e),menuInitialActiveDate:e}}function Ea(t){const e=le(t.focusTargetMonthStart);return it({year:e.getFullYear(),monthIndex:e.getMonth(),...t.constraints})?{viewDate:e,menuInitialActiveDate:e}:null}function ka(t){if(!Nt({year:t.focusTargetYear,...t.constraints}))return null;const e=new Date(t.focusTargetYear,0,1);return{viewDate:e,menuInitialActiveDate:e}}const Ba=t=>Q[Math.min(Q.indexOf(t)+1,2)],Ia=t=>Q[Math.max(Q.indexOf(t)-1,0)],_a=(t,e,a)=>{const o=(isNaN(t)?je:t)+a;return o>e?je:o},Na=(t,e,a)=>{const o=(isNaN(t)?je:t)-a;return o<je?e:o},M=(t,e)=>e===v.YEAR?t.toString().padStart(4,"0"):t.toString().padStart(2,"0"),Aa=()=>({[v.DAY]:[0,2],[v.MONTH]:[5,7],[v.YEAR]:[10,14]}),Fa="_weekday_c0830_84",N={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_c0830_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_c0830_20","nav-left":"_nav-left_c0830_34","nav-right":"_nav-right_c0830_35","month-label":"_month-label_c0830_45","rte-datepicker-weekdays":"_rte-datepicker-weekdays_c0830_76",weekday:Fa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_c0830_96","day-cell":"_day-cell_c0830_103","day-cell__label":"_day-cell__label_c0830_137","day-cell__surface":"_day-cell__surface_c0830_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_c0830_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_c0830_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_c0830_271","month-cell":"_month-cell_c0830_278","month-cell__label":"_month-cell__label_c0830_313","year-cell":"_year-cell_c0830_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_c0830_462"},Ma=t=>{const[e,a]=f.useState(t??new Date);return{viewDate:e,setViewDate:a,navigateToPreviousMonth:()=>{const u=pe({viewDate:e,calendarType:"day",dayAction:"prevMonth"});return a(u),u},navigateToNextMonth:()=>{const u=pe({viewDate:e,calendarType:"day",dayAction:"nextMonth"});return a(u),u},navigateToPreviousYear:()=>{const u=pe({viewDate:e,calendarType:"day",dayAction:"prevYear"});return a(u),u},navigateToNextYear:()=>{const u=pe({viewDate:e,calendarType:"day",dayAction:"nextYear"});return a(u),u},navigateToPreviousDecade:()=>{const u=new Date(e);u.setFullYear(e.getFullYear()-10),a(u)},navigateToNextDecade:()=>{const u=new Date(e);u.setFullYear(e.getFullYear()+10),a(u)},getNextDateForCompactNavigation:(u,D)=>{const _=pe({viewDate:e,calendarType:D,compactStep:u});return a(_),_},getNextDateForDayNavigation:u=>{const D=pe({viewDate:e,calendarType:"day",dayAction:u});return a(D),D}}},Ct=({isOpen:t,currentValue:e,hasAction:a,updateFullDate:n,updateDisplayedDate:o,onValidate:l,onCancel:g,displayValue:y,minDate:h,maxDate:x,disabledDates:w,onChange:u})=>{const[D,_]=f.useState(v.DAY),P=f.useRef(null),[te,d]=f.useState(null),[S,E]=f.useState(null);Qt(P.current,t,!1);const{viewDate:T,setViewDate:H,getNextDateForDayNavigation:Ge,getNextDateForCompactNavigation:Te}=Ma(e),[q,de]=f.useState(null),[m,O]=f.useState(e??T),z=f.useMemo(()=>({minDate:h,maxDate:x,disabledDates:w}),[h,x,w]),me=r=>{const i=Ge(r);xe(i)},U=(r,i)=>{const k=Te(r,i);xe(k)},xe=r=>{const i=Ta({anchorDay:S,viewDate:r,constraints:z});i!==null&&(de(i),O(i),o(i))},Se=f.useCallback(()=>{const r=ba({textValue:y.split(" ").join(""),constraints:z,pendingDate:q,selectedDate:e});H(r.viewDate),E(r.monthNavigationAnchorDay)},[y,q,e,z,H]),ge=f.useMemo(()=>{const r=T??e??new Date,i=D;return D===v.DAY?la(r):i===v.MONTH?ua(r):da(r)},[D,T,e]),ye=f.useMemo(()=>Yt({viewDate:T,selectedDate:q??e,minDate:h,maxDate:x,disabledDates:w}),[q,e,T,h,x,w]),he=f.useMemo(()=>ha({viewDate:T,selectedDate:q??e,minDate:h,maxDate:x,disabledDates:w}),[q,e,T,h,x,w]),we=f.useMemo(()=>wa({viewDate:T,selectedDate:q??e,minDate:h,maxDate:x,disabledDates:w}),[q,e,T,h,x,w]),Ve=()=>{D===v.DAY?(_(v.MONTH),Ie()):D===v.MONTH?(_(v.YEAR),$e()):(_(v.DAY),ve())},Ee=r=>{const i=xa({date:r,constraints:z});if(i!==null)if(a)o(i),de(i),H(i),O(i),E(i.getDate());else{n(i),d(i),u==null||u(i),l==null||l();return}},V=r=>{const i=new Date(T.getFullYear(),r,1);H(i),O(i),_(v.DAY),ve()},ke=r=>{const i=new Date(r,T.getMonth(),1);H(i),O(i),_(v.MONTH),Ie()},We=r=>{const i=q??e;return i!==null&&J(r,i)},Be=r=>{if(r.key==="Escape"){g==null||g();return}const i=D;i===v.DAY?b(r):i===v.MONTH?B(r):I(r)},b=r=>{if(!Y(r.target))return;if(r.stopPropagation(),[Qe,et].includes(r.key)){r.preventDefault();const k=m,A=ye.find(K=>J(K.date,k));A&&!A.isDisabled&&Ee(k);return}[ie,ce,re,oe].includes(r.key)&&(r.preventDefault(),Ht(r.key))},B=r=>{if(!j(r.target))return;if(r.stopPropagation(),[Qe,et].includes(r.key)){r.preventDefault();const k=m.getMonth(),A=he.find(K=>K.monthIndex===k);A&&!A.isDisabled&&V(k);return}[ie,ce,re,oe].includes(r.key)&&(r.preventDefault(),qt(r.key))},I=r=>{if(!Rt(r.target))return;if(r.stopPropagation(),[Qe,et].includes(r.key)){r.preventDefault();const k=m.getFullYear(),A=we.find(K=>K.year===k);A&&!A.isDisabled&&ke(k);return}[ie,ce,re,oe].includes(r.key)&&(r.preventDefault(),Pt(r.key))},Y=r=>r instanceof HTMLElement?r.matches("button.day-cell")&&r.closest(".rte-datepicker-day-grid")!==null:!1,j=r=>r instanceof HTMLElement?r.matches("button.month-cell")&&r.closest(".rte-datepicker-month-grid")!==null:!1,Rt=r=>r instanceof HTMLElement?r.matches("button.year-cell")&&r.closest(".rte-datepicker-year-grid")!==null:!1,Ht=r=>{const i=ye,k=ga(i,m);if(k<0)return;const A=at(r,"day"),K=Math.abs(A)===7?7:1,ae=A>0?1:-1;let L=k+A;for(;L>=0&&L<i.length&&i[L].isDisabled;)L+=ae*K;if(L<0||L>=i.length){const R=C(Ke(m,A));if(Ot(R))return;ze(R),ve();return}const X=i[L].date;O(X),ve()},qt=r=>{const i=he,k=m.getMonth(),A=i.findIndex(Ue=>Ue.monthIndex===k);if(A<0)return;const K=at(r,"monthYear"),ae=rt(m,K);if(ae.getFullYear()!==T.getFullYear()){ze(ae),Ie();return}const L=3,X=i.length;let R=Ne({currentIndex:A,key:r,columnCount:L,cellCount:X}),W=0;for(;R!==null&&i[R].isDisabled&&W<X;)R=Ne({currentIndex:R,key:r,columnCount:L,cellCount:X}),W+=1;if(R===null||i[R].isDisabled)return;const _e=i[R].monthIndex;O(new Date(T.getFullYear(),_e,1)),Ie()},Pt=r=>{const i=we,k=m.getFullYear(),A=i.findIndex(Xe=>Xe.year===k);if(A<0)return;const K=at(r,"monthYear"),ae=k+K;if(!i.map(Xe=>Xe.year).includes(ae)){ze(new Date(ae,0,1)),$e();return}const X=3,R=i.length;let W=Ne({currentIndex:A,key:r,columnCount:X,cellCount:R}),_e=0;for(;W!==null&&i[W].isDisabled&&_e<R;)W=Ne({currentIndex:W,key:r,columnCount:X,cellCount:R}),_e+=1;if(W===null||i[W].isDisabled)return;const Ue=i[W].year;O(new Date(Ue,0,1)),$e()},Ot=r=>ee({date:r}),ve=()=>{Pe(()=>{const r=P.current,i=r==null?void 0:r.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},Ie=()=>{Pe(()=>{const r=P.current,i=r==null?void 0:r.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},$e=()=>{Pe(()=>{const r=P.current,i=r==null?void 0:r.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},jt=()=>{l==null||l(),d(q),de(null),n(q)},Kt=(r,i)=>J(r,i)?0:-1,Lt=r=>r===m.getMonth()?0:-1,Gt=r=>r===m.getFullYear()?0:-1,ze=r=>{const i=z;let k=null;D===v.DAY?k=Sa({focusTargetDay:r,constraints:i}):D===v.MONTH?k=Ea({focusTargetMonthStart:r,constraints:i}):k=ka({focusTargetYear:r.getFullYear(),constraints:i}),k!==null&&(H(k.viewDate),O(k.menuInitialActiveDate))};return f.useEffect(()=>{if(t)Se(),ve();else{if(te)return;n(e)}},[t,Se,e,n,te]),s.jsx(s.Fragment,{children:s.jsxs("div",{ref:P,className:N["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Be,children:[s.jsxs("div",{className:N["rte-datepicker-dropdown-header"],children:[s.jsx("div",{className:N["nav-left"],children:D===v.DAY?s.jsxs(s.Fragment,{children:[s.jsx(Z,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":$.navPrevYear,onClick:()=>me("prevYear")}),s.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":$.navPrevMonth,onClick:()=>me("prevMonth")})]}):D===v.MONTH?s.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":$.navPrevCompact,onClick:()=>U("previous","month")}):s.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":$.navPrevCompact,onClick:()=>U("previous","year")})}),D===v.YEAR?s.jsx("span",{className:ne(N["month-label"],"month-label-static"),children:ge}):s.jsx("button",{className:N["month-label"],onClick:Ve,"aria-label":`Changer de vue, ${ge} , appuyer pour voir les ${D===v.DAY?"mois":"années"}`,"data-datepicker-tab":$.monthLabel,children:ge}),s.jsx("div",{className:N["nav-right"],children:D===v.DAY?s.jsxs(s.Fragment,{children:[s.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":$.navNextMonth,onClick:()=>me("nextMonth")}),s.jsx(Z,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":$.navNextYear,onClick:()=>me("nextYear")})]}):D===v.MONTH?s.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":$.navNextCompact,onClick:()=>U("next","month")}):s.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":$.navNextCompact,onClick:()=>U("next","year")})})]}),D===v.DAY?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:N["rte-datepicker-weekdays"],"aria-hidden":"true",children:ma().map((r,i)=>s.jsx("div",{className:N.weekday,children:r},i))}),s.jsx(tt,{appearance:"brand"}),s.jsx("div",{className:ne(N["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:ye.map(r=>s.jsxs("button",{type:"button",className:ne(N["day-cell"],"day-cell"),role:"gridcell",onClick:()=>Ee(r.date),"aria-selected":We(r.date),tabIndex:Kt(r.date,m),disabled:r.isDisabled,"data-cell-type":r.cellType,"data-datepicker-active":(m==null?void 0:m.toDateString())===r.date.toDateString()||void 0,children:[s.jsx("span",{className:N["day-cell__surface"],"aria-hidden":"true"}),s.jsx("span",{className:N["day-cell__label"],children:r.label})]},r.date.toISOString()))})]}):D===v.MONTH?s.jsxs(s.Fragment,{children:[s.jsx(tt,{appearance:"brand"}),s.jsx("p",{className:N["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),s.jsx("div",{className:ne(N["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:he.map(r=>s.jsx("button",{type:"button",className:ne(N["month-cell"],"month-cell"),role:"gridcell","aria-selected":r.isSelected,tabIndex:Lt(r.monthIndex),"data-datepicker-active":r.monthIndex===m.getMonth()&&T.getFullYear()===m.getFullYear()?!0:void 0,"data-current":r.isCurrent,disabled:r.isDisabled,"data-selected":r.isSelected,onClick:()=>V(r.monthIndex),children:s.jsx("span",{className:N["month-cell__label"],children:r.label})},r.monthIndex))})]}):s.jsxs(s.Fragment,{children:[s.jsx(tt,{appearance:"brand"}),s.jsx("p",{className:N["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),s.jsx("div",{className:ne(N["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:we.map(r=>s.jsx("button",{type:"button",className:ne(N["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(m==null?void 0:m.getFullYear())===r.year||null,"data-current":r.isCurrent,tabIndex:Gt(r.year),"data-selected":r.isSelected,"aria-selected":r.isSelected,disabled:r.isDisabled,onClick:()=>ke(r.year),children:r.label},r.year))})]}),a&&s.jsxs("div",{className:N["rte-datepicker-dropdown-actions"],children:[s.jsx(st,{label:"Annuler",size:"s",variant:"transparent",onClick:g}),s.jsx(st,{label:"Confirmer",size:"s",variant:"transparent",onClick:jt})]})]})})};Ct.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const[mt,pt]=Q,Ya=(t,e,a)=>{const[n,o]=f.useState({dayDigits:"",monthDigits:"",yearDigits:""}),[l,g]=f.useState(""),[y,h]=f.useState(t||null);f.useEffect(()=>{const d=x(n);g(d);const S=n.dayDigits===""||isNaN(Number(n.dayDigits))?null:Number(n.dayDigits),E=n.monthDigits===""||isNaN(Number(n.monthDigits))?null:Number(n.monthDigits),T=n.yearDigits===""||isNaN(Number(n.yearDigits))?null:Number(n.yearDigits);if(S===null||E===null||T===null)h(null);else{const H=new Date(1,E-1,S);if(H.setFullYear(T),!ee({date:H,minDate:e,maxDate:a}))h(H);else return}},[n,e,a]);const x=d=>{const S=d.dayDigits||"DD",E=d.monthDigits||"MM",T=d.yearDigits||"YYYY";return`${S} / ${E} / ${T}`},w=(d,S)=>{o(E=>({...E,[`${d===mt?"day":d===pt?"month":"year"}Digits`]:S}))};return{dateState:n,internalValue:y,increaseActiveSegmentValue:d=>{const S=fe[d],E=l.split("/")[Q.indexOf(d)];if(isNaN(Number(E)))w(d,M(1,d));else{const T=_a(Number(E),S,1);w(d,M(T,d))}},decreaseActiveSegmentValue:d=>{const S=fe[d],E=l.split("/")[Q.indexOf(d)];if(isNaN(Number(E)))w(d,M(S,d));else{const T=Na(Number(E),S,1);w(d,M(T,d))}},resetActiveSegmentValue:d=>{const E={...n,[`${d===mt?"day":d===pt?"month":"year"}Digits`]:""};o(E)},updateDateSegment:w,updateFullDate:d=>{if(d){const S=d.getDate(),E=d.getMonth()+1,T=d.getFullYear();o({dayDigits:M(S,v.DAY),monthDigits:M(E,v.MONTH),yearDigits:M(T,v.YEAR)})}else o({dayDigits:"",monthDigits:"",yearDigits:""})},displayValue:l,updateDisplayedDate:d=>{if(d){const S={dayDigits:M(d.getDate(),v.DAY),monthDigits:M(d.getMonth()+1,v.MONTH),yearDigits:M(d.getFullYear(),v.YEAR)};g(x(S))}}}},Ca=()=>{const[t,e]=f.useState(v.DAY),a=Ba(t),n=Ia(t),o=f.useCallback(()=>{e(a)},[a]),l=f.useCallback(()=>{e(n)},[n]);return{moveToNextSegment:o,moveToPreviousSegment:l,setActiveDateSegment:e,activeDateSegment:t,prevSegment:n,nextSegment:a}},Ra=/^\d*$/,[Ae,Fe,nt]=Q,ue=({disabled:t,value:e,onChange:a,hasAction:n=!1,onCancel:o,onValidate:l,minDate:g,maxDate:y,disabledDates:h})=>{var Be;const[x,w]=f.useState(!1),[u,D]=f.useState(!1),{increaseActiveSegmentValue:_,decreaseActiveSegmentValue:P,resetActiveSegmentValue:te,updateDateSegment:d,updateFullDate:S,internalValue:E,displayValue:T,dateState:H,updateDisplayedDate:Ge}=Ya(e,g,y),{moveToNextSegment:Te,moveToPreviousSegment:q,setActiveDateSegment:de,activeDateSegment:m}=Ca();f.useEffect(()=>{E?a==null||a(E):a==null||a(null)},[E,a]);const O=f.useRef(null),z=f.useRef(null),me=()=>{xe(),V(m)},U=()=>{w(!1),D(!1)},xe=()=>{t||w(!0)},Se=()=>{t||D(!0)},ge=b=>{const B=b.key;if(b.stopPropagation(),V(m),[re,oe,ie,ce,$t,zt].includes(B))b.preventDefault(),ye(B);else if(Ra.test(B))b.preventDefault(),he(B);else return},ye=b=>{b===ce?Te():b===ie?q():b===re?_(m):b===oe?P(m):te(m)},he=b=>{const I=H[`${m===Ae?"day":m===Fe?"month":"year"}Digits`];m===nt&&I.length>=4?we(I,b):Ve(I,b)},we=(b,B)=>{const I=Array.from(b).findIndex(Y=>Y!=="0");if(I===0){const Y=M(Number(B),m);d(m,Y)}else{const Y=b.slice(I)+B,j=M(Math.min(Number(Y),fe[m]),m);d(m,j)}},Ve=(b,B)=>{if(b.length>=2)if(b[0]==="0"){const I=Number(b[1]+B),Y=M(Math.min(I,fe[m]),m);d(m,Y),Te()}else{const I=M(Number(B),m);d(m,I)}else{const I=`${b}${B}`,Y=Ut[m];if(b.length===0&&Number(B)>Y){const j=M(Number(B),m);d(m,j)}else if(I.length===2){const j=M(Math.min(Number(I),fe[m]),m);d(m,j)}else{const j=M(Number(B),m);d(m,j)}}},Ee=()=>{var Y;u&&D(!1);const b=((Y=O.current)==null?void 0:Y.selectionStart)??0,B=Aa(),I=1;b<=B[Ae][I]+1?V(Ae):b<=B[Fe][I]+1?V(Fe):V(nt)},V=f.useCallback(b=>{de(b);const B=3,I=b===Ae?0:b===Fe?2+B:0+2*(2+B),Y=b===nt?I+4:I+2;Pe(()=>{var j;(j=O.current)==null||j.setSelectionRange(I,Y)})},[de]),ke=()=>{o==null||o(),U()},We=()=>{l==null||l(),U()};return f.useEffect(()=>{V(m)},[m,V]),s.jsx("div",{style:{minWidth:"248px"},children:s.jsx(Jt,{style:{width:(Be=z.current)==null?void 0:Be.offsetWidth},isList:!1,isOpen:u,onClose:U,offset:8,trigger:s.jsx(Zt,{id:"my-id",icon:"calendar-month",onFocus:me,isFocused:x,pickerInputRef:O,onOpenPicker:Se,value:T,onKeyDown:ge,onMouseUp:Ee,onChange:()=>{},fixedWidth:!1,pickerRef:z,openButtonAriaLabel:na(E)}),position:"bottom",children:s.jsx(Ct,{isOpen:u,currentValue:E,hasAction:n,onValidate:We,onCancel:ke,updateDisplayedDate:Ge,updateFullDate:S,displayValue:T,minDate:g,maxDate:y,disabledDates:h})})})};ue.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newDate: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"newDate"}],return:{name:"void"}}},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:""}}};const ct=/ouvrir le calendrier|changer la date/i;function De(t){return((t==null?void 0:t.value)??"").replace(/[\s\u200b]/g,"")}const se=async()=>{const t=document.getElementById("overlay-root");let e;return await F(()=>{const a=t==null?void 0:t.querySelector("[data-dropdown-id]");if(!a)throw new Error("Dropdown not found");return c(a).toBeInTheDocument(),e=a,a}),e},ln={title:"Composants/DatePicker",component:ue,tags:["autodocs"]},Me={args:{value:null},render:t=>{const[e,a]=f.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Selected date:"," ",e?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(e):"None"]}),s.jsx(ue,{...t,value:e,onChange:n})]})}},Ye={args:{value:null},render:t=>{const[e,a]=f.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Selected date:"," ",e?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(e):"None"]}),s.jsx(ue,{...t,value:e,onChange:n})]})},play:async({canvasElement:t})=>{Xt(t),await p.tab();for(const a of"15062023")await p.keyboard(a);const e=t.querySelector("input");c(De(e)).toBe("15/06/2023"),await p.keyboard(qe),c(De(e)).toBe("15/06/2022"),await p.keyboard(Ze),c(De(e)).toBe("15/06/2023"),await p.keyboard(Oe),await p.keyboard(Ze),c(De(e)).toBe("15/07/2023"),await p.keyboard(Oe),await p.keyboard(Ze),c(De(e)).toBe("16/07/2023"),await p.keyboard(_t),await p.keyboard(qe),await p.keyboard(qe),c(De(e)).toBe("16/05/2023")}},Ce={args:{value:null,hasAction:!0},render:t=>{const[e,a]=f.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Selected date:"," ",e?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(e):"None"]}),s.jsx(ue,{...t,value:e,onChange:n})]})},play:async({canvasElement:t})=>{const a=G(t).getByRole("button",{name:ct});await p.click(a);let n=await se(),o=n.querySelector("[role='dialog']");c(o).toBeInTheDocument();const l=n.querySelectorAll(".day-cell");c(l.length).toBeGreaterThan(0),await p.click(l[10]),await p.click(G(n).getByRole("button",{name:/confirmer/i})),await F(()=>{c(o).not.toBeInTheDocument()}),await p.click(a),n=await se(),o=n.querySelector("[role='dialog']"),c(o).toBeInTheDocument();const g=n.querySelector(".day-cell[data-datepicker-active='true']");c(g).toBeInTheDocument(),c(g).toHaveFocus(),await p.keyboard(be),await F(()=>{c(o).not.toBeInTheDocument(),c(a).toHaveFocus()})}},Re={args:{value:null,hasAction:!0},render:t=>{const[e,a]=f.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Selected date:"," ",e?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(e):"None"]}),s.jsx(ue,{...t,value:e,onChange:n})]})},play:async({canvasElement:t})=>{const a=G(t).getByRole("button",{name:ct});await p.click(a);let n=await se();await p.tab(),await F(()=>{c(G(n).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await p.tab(),await F(()=>{c(G(n).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await p.tab(),await F(()=>{c(G(n).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const o=G(n);c(o.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const l=n.querySelector('[data-datepicker-tab="month-label"]');c(l).toBeTruthy(),await p.click(l),await F(()=>{c(n.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),c(n.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),c(o.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),c(o.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),c(o.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),c(o.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const g=n.querySelector('[data-datepicker-tab="month-label"]');c(g).toBeTruthy(),await p.click(g),await F(()=>{c(n.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),c(n.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),c(o.getByText("Sélectionner une année")).toBeInTheDocument(),c(o.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),c(n.querySelector(".month-label-static")).toBeInTheDocument(),c(n.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),c(n.querySelectorAll(".year-cell").length).toBe(11),await p.keyboard(be),await F(()=>{c(n).not.toBeInTheDocument(),c(a).toHaveFocus()}),await p.click(a),n=await se(),await F(()=>{const D=n.querySelector('.day-cell[data-datepicker-active="true"]');c(D).toBeInTheDocument(),c(D).toHaveFocus()});const y=n.querySelector('.day-cell[data-datepicker-active="true"]');await p.tab();const h=G(n).getByRole("button",{name:/^annuler$/i});c(h).toHaveFocus(),await p.keyboard(qe),c(h).toHaveFocus(),await p.tab({shift:!0}),c(y).toHaveFocus(),await p.keyboard(_t),await F(()=>{const D=n.querySelector('.day-cell[data-datepicker-active="true"]');c(D).toBeInTheDocument(),c(D).toHaveFocus(),c(D).not.toBe(y)}),await p.keyboard(be),await F(()=>{c(n).not.toBeInTheDocument(),c(a).toHaveFocus()}),await p.click(a),n=await se();const x=n.querySelector('[data-datepicker-tab="month-label"]');c(x).toBeTruthy(),await p.click(x),await F(()=>{c(n.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const w=n.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");c(w).toBeTruthy(),await F(()=>{c(w).toHaveFocus()}),await p.tab(),await F(()=>{c(G(n).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await p.tab({shift:!0}),c(w).toHaveFocus();const u=G(n).getByRole("button",{name:/année suivante/i});await p.tab({shift:!0}),c(u).toHaveFocus(),await p.tab(),c(w).toHaveFocus()}},He={args:{value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,11,31),hasAction:!0},render:t=>{const[e,a]=f.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Selected date:"," ",e?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(e):"None"]}),s.jsx(ue,{...t,value:e,onChange:n})]})},play:async({canvasElement:t})=>{const a=G(t).getByRole("button",{name:ct});a.focus(),await p.tab({shift:!0});for(const y of"03012020")await p.keyboard(y);await p.click(a);let n=await se(),o=n.querySelector("[role='dialog']");c(o).toBeInTheDocument(),await F(()=>{const y=n.querySelector('.day-cell[data-datepicker-active="true"]');c(y).toBeInTheDocument(),c(y).toHaveFocus()});const l=n.querySelectorAll(".day-cell[disabled]");c(l.length).toBe(2),await p.keyboard(be),await F(()=>{c(o).not.toBeInTheDocument(),c(a).toHaveFocus()}),await p.tab({shift:!0}),await p.keyboard(Je),await p.keyboard(Oe),await p.keyboard(Je),await p.keyboard(Oe),await p.keyboard(Je);for(const y of"31122024")await p.keyboard(y);await p.click(a),n=await se(),o=n.querySelector("[role='dialog']"),c(o).toBeInTheDocument(),await F(()=>{const y=n.querySelector('.day-cell[data-datepicker-active="true"]');c(y).toBeInTheDocument(),c(y).toHaveFocus()});const g=n.querySelectorAll(".day-cell[disabled]");c(g.length).toBe(5),await p.keyboard(be),await F(()=>{c(o).not.toBeInTheDocument(),c(a).toHaveFocus()})}};var Dt,gt,yt;Me.parameters={...Me.parameters,docs:{...(Dt=Me.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    value: null
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "None"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  }
}`,...(yt=(gt=Me.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var ht,wt,vt;Ye.parameters={...Ye.parameters,docs:{...(ht=Ye.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    value: null
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "None"}
        </p>
        <DatePicker {...args} value={date} onChange={onChange} />
      </>;
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
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
}`,...(vt=(wt=Ye.parameters)==null?void 0:wt.docs)==null?void 0:vt.source}}};var ft,bt,Tt;Ce.parameters={...Ce.parameters,docs:{...(ft=Ce.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  args: {
    value: null,
    hasAction: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "None"}
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
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
  }
}`,...(Tt=(bt=Ce.parameters)==null?void 0:bt.docs)==null?void 0:Tt.source}}};var xt,St,Et;Re.parameters={...Re.parameters,docs:{...(xt=Re.parameters)==null?void 0:xt.docs,source:{originalSource:`{
  args: {
    value: null,
    hasAction: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "None"}
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
}`,...(Et=(St=Re.parameters)==null?void 0:St.docs)==null?void 0:Et.source}}};var kt,Bt,It;He.parameters={...He.parameters,docs:{...(kt=He.parameters)==null?void 0:kt.docs,source:{originalSource:`{
  args: {
    value: null,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2024, 11, 31),
    hasAction: true
  },
  render: args => {
    const [date, setDate] = useState<Date | null>(null);
    const onChange = (newDate: Date | null) => {
      setDate(newDate);
    };
    return <>
        <p>
          Selected date:{" "}
          {date ? new Intl.DateTimeFormat(navigator.language, {
          dateStyle: "long"
        }).format(date) : "None"}
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
    for (const digit of "31122024") {
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
    expect(disabledDayCellsEnd.length).toBe(5);
    await userEvent.keyboard(TESTING_ESCAPE_KEY);
    await waitFor(() => {
      expect(datePickerDialog).not.toBeInTheDocument();
      expect(calendarButton).toHaveFocus();
    });
  }
}`,...(It=(Bt=He.parameters)==null?void 0:Bt.docs)==null?void 0:It.source}}};const un=["Default","TypingDate","WithAction","TabNavigation","WithMinMax"];export{Me as Default,Re as TabNavigation,Ye as TypingDate,Ce as WithAction,He as WithMinMax,un as __namedExportsOrder,ln as default};
