import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as $e,a as Ge,b as Qt,c as ut,d as ze,e as dt}from"./keyboard-test.constants-DkNPES5T.js";import{D as Ue,e as la,f as ua,g as ft,a as De,A as pe,b as ge,c as ye,h as y,i as se,j as wt,k as te,E as mt,S as Dt,l as Se,B as da,m as ma,n as Da}from"./timepicker.constants-Dc9ut5mB.js";import{a as C,e as c,w as G,u as m}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import{f as pa}from"./testing.utils-mIZIUNbM.js";import{w as We,B as ga}from"./BaseInputPicker-DtEUZOUa.js";import{R as ya,A as ha}from"./RequiredIndicator-CnxxEbTK.js";import{B as wa}from"./BaseDropdown-Bc55FiNe.js";import{u as va}from"./useFocusTrap-DG09Z6i4.js";import{B as Tt}from"./Button-8ghNAy9-.js";import{D as pt}from"./Divider-BMotkXeQ.js";import{I as re}from"./IconButton-Q4rJrqsf.js";import{c as me}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DOkBvtOM.js";import"./Link-DC5e5ANE.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";function he(e){return new Date(e.getFullYear(),e.getMonth(),1)}function fa(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function bt(e){const{year:t,monthIndex:n,minDate:a,maxDate:o,disabledDates:l}=e,u=fa(new Date(t,n,1)).getDate();for(let D=1;D<=u;D++){const g=P(new Date(t,n,D));if(!W({date:g,minDate:a,maxDate:o,disabledDates:l}))return!0}return!1}function ea(e){const{year:t,minDate:n,maxDate:a,disabledDates:o}=e;for(let l=0;l<12;l++)if(bt({year:t,monthIndex:l,minDate:n,maxDate:a,disabledDates:o}))return!0;return!1}function ta(e){return(e.getDay()+6)%7}function ba(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function Ta(e){const t=`${e.getDate()}`.padStart(2,"0"),n=`${e.getMonth()+1}`.padStart(2,"0"),a=`${e.getFullYear()}`.padStart(4,"0");return`${t}/${n}/${a}`}function xa(e){return e===null?la:`${ua}${Ta(e)}`}function Ea(e){const t=e.trim();if(t.length===0)return null;const n=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(t);if(!n)return null;const a=Number(n[1]),o=Number(n[2]),l=Number(n[3]);if(o<1||o>12)return null;const u=new Date(l,o-1,a);return u.getFullYear()===l&&u.getMonth()===o-1&&u.getDate()===a&&!Number.isNaN(u.valueOf())?u:null}function oe(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function ka(e,t){return P(e).valueOf()<P(t).valueOf()}function Sa(e,t){return P(e).valueOf()>P(t).valueOf()}function P(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function aa(e,t){return new Date(e,t+1,0).getDate()}function Ba(e,t,n){const a=aa(t,n),o=Math.min(Math.max(e,1),a);return P(new Date(t,n,o))}function Te(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function vt(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function xt(e,t){return new Date(e.getFullYear()+t,e.getMonth(),1)}function na(e){return Math.floor(e/10)*10}function fe(e){const{viewDate:t,calendarType:n}=e;if(n==="day"){const a=e.dayAction;return a?["prevYear","nextYear"].includes(a)?vt(t,a==="prevYear"?-12:12):vt(t,a==="prevMonth"?-1:1):t}if(n==="month"){const a=e.compactStep;return a?xt(t,a==="previous"?-1:1):t}if(n==="year"){const a=e.compactStep;if(!a)return t;const o=ft;return xt(t,a==="previous"?-o:o)}return t}function Ia(e,t){return!t||t.length===0?!1:t.some(n=>oe(e,P(n)))}function W(e){const{date:t,minDate:n,maxDate:a,disabledDates:o}=e,l=P(t);return n&&ka(l,n)||a&&Sa(l,a)?!0:Ia(l,o)}function Aa(e,t=Ue){return new Intl.DateTimeFormat(t,{month:"long",year:"numeric"}).format(e)}function _a(e,t=Ue){return new Intl.DateTimeFormat(t,{year:"numeric"}).format(e)}function Na(e){const t=na(e.getFullYear()),n=t+ft-1;return`${t} – ${n}`}function Fa(e=Ue){const t=new Date(2021,0,4);return Array.from({length:7}).map((n,a)=>{const o=Te(t,a);return new Intl.DateTimeFormat(e,{weekday:"short"}).format(o).trim().charAt(0).toLocaleUpperCase(e)})}function Ma(e){const{pendingDate:t,selectedDate:n,dayCells:a}=e,o=P(t??n??new Date),l=Et(a,o);if(l!==null)return l;const u=P(new Date),D=Et(a,u);if(D!==null)return D;const g=a.find(f=>!f.isDisabled);return g?g.date:o}function Et(e,t){const n=e.find(o=>oe(o.date,t));if(!n)return null;if(!n.isDisabled)return n.date;const a=Ya(e,e.indexOf(n));return a?a.date:null}function Ya(e,t){for(let n=t;n<e.length;n++){const a=e[n];if(!a.isDisabled)return a}for(let n=0;n<t;n++){const a=e[n];if(!a.isDisabled)return a}}function kt(e,t){return e.findIndex(n=>oe(n.date,t))}function Ca(e){const t=he(e),n=ta(t),a=aa(e.getFullYear(),e.getMonth());return Math.ceil((n+a)/7)*7}function ra(e){const{viewDate:t,selectedDate:n,minDate:a,maxDate:o,disabledDates:l}=e,u=he(t),D=ta(u),g=Te(u,-D),f=Ca(t),T=P(new Date);return Array.from({length:f}).map((d,I)=>{const w=Te(g,I),O=ba(w,t),p=!!n&&oe(w,n),N=oe(w,T);let F="default";return O?p?F="selected":N&&(F="today"):F="prev/next",{date:w,label:`${w.getDate()}`,cellType:F,isDisabled:W({date:w,minDate:a,maxDate:o,disabledDates:l})}})}function Ra(e){const{viewDate:t,selectedDate:n,minDate:a,maxDate:o,disabledDates:l,locale:u=Ue}=e,D=n?he(n):null,g=he(new Date),f=t.getFullYear();return Array.from({length:12}).map((T,d)=>{const I=new Date(f,d,1);return{monthIndex:d,label:new Intl.DateTimeFormat(u,{month:"long"}).format(I),isDisabled:!bt({year:f,monthIndex:d,minDate:a,maxDate:o,disabledDates:l}),isCurrent:I.getTime()===g.getTime(),isSelected:!!D&&I.getTime()===D.getTime()}})}function qa(e){const{viewDate:t,selectedDate:n,minDate:a,maxDate:o,disabledDates:l}=e,u=new Date().getFullYear(),D=(n==null?void 0:n.getFullYear())??null,g=na(t.getFullYear());return Array.from({length:ft}).map((f,T)=>{const d=g+T;return{year:d,label:`${d}`,isDisabled:!ea({year:d,minDate:a,maxDate:o,disabledDates:l}),isCurrent:d===u,isSelected:D===d}})}function Me(e){const{currentIndex:t,key:n,columnCount:a,cellCount:o}=e;if(n===ge)return t>0?t-1:null;if(n===ye)return t<o-1?t+1:null;if(n===De){const l=t-a;return l>=0?l:null}if(n===pe){const l=t+a;return l<o?l:null}return null}const Ha={[ge]:-1,[ye]:1},St={day:7,monthYear:3};function gt(e,t){return e===De?-St[t]:e===pe?St[t]:Ha[e]??0}function Pa(e){return(e==null?void 0:e.getDate())??null}function Oa(e){const{textValue:t,constraints:n,pendingDate:a,selectedDate:o}=e,l=e.fallbackViewDate??new Date,u=t.trim(),D=u.length>0?Ea(u):null,g=D?P(D):null,f=g!==null&&!W({date:g,...n});let T,d;f&&g?(d=g,T=he(g)):(d=null,T=l);const I=ra({viewDate:T,selectedDate:d,...n}),w=Ma({pendingDate:d,selectedDate:d,dayCells:I}),O=Pa(d??a??o);return{viewDate:T,pendingForMenu:d,menuInitialActiveDate:w,monthNavigationAnchorDay:O}}function ja(e){const{anchorDay:t,viewDate:n,constraints:a}=e;if(t===null)return null;const o=Ba(t,n.getFullYear(),n.getMonth());return W({date:o,...a})?null:o}function La(e){const t=P(e.date);return W({date:t,...e.constraints})?null:t}function Ka(e){const t=P(e.focusTargetDay);return W({date:t,...e.constraints})?null:{viewDate:he(t),menuInitialActiveDate:t}}function Va(e){const t=he(e.focusTargetMonthStart);return bt({year:t.getFullYear(),monthIndex:t.getMonth(),...e.constraints})?{viewDate:t,menuInitialActiveDate:t}:null}function Ga(e){if(!ea({year:e.focusTargetYear,...e.constraints}))return null;const t=new Date(e.focusTargetYear,0,1);return{viewDate:t,menuInitialActiveDate:t}}const yt={"rte-date-picker":"_rte-date-picker_1ekiq_1","rte-date-picker-header":"_rte-date-picker-header_1ekiq_1"},Wa=e=>se[Math.min(se.indexOf(e)+1,2)],$a=e=>se[Math.max(se.indexOf(e)-1,0)],za=(e,t,n)=>{if(isNaN(e))return wt;{const a=e+n;return a>t?wt:a}},Ua=(e,t,n)=>{if(isNaN(e))return t;const a=e-n;return a<wt?t:a},H=(e,t)=>t===y.YEAR?e.toString().padStart(4,"0"):e.toString().padStart(2,"0"),Xa=()=>({[y.DAY]:[0,2],[y.MONTH]:[5,7],[y.YEAR]:[10,14]}),Za="_weekday_c0830_84",M={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_c0830_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_c0830_20","nav-left":"_nav-left_c0830_34","nav-right":"_nav-right_c0830_35","month-label":"_month-label_c0830_45","rte-datepicker-weekdays":"_rte-datepicker-weekdays_c0830_76",weekday:Za,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_c0830_96","day-cell":"_day-cell_c0830_103","day-cell__label":"_day-cell__label_c0830_137","day-cell__surface":"_day-cell__surface_c0830_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_c0830_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_c0830_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_c0830_271","month-cell":"_month-cell_c0830_278","month-cell__label":"_month-cell__label_c0830_313","year-cell":"_year-cell_c0830_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_c0830_462"},Ja=e=>{const[t,n]=h.useState(e??new Date);return{viewDate:t,setViewDate:n,navigateToPreviousMonth:()=>{const d=fe({viewDate:t,calendarType:"day",dayAction:"prevMonth"});return n(d),d},navigateToNextMonth:()=>{const d=fe({viewDate:t,calendarType:"day",dayAction:"nextMonth"});return n(d),d},navigateToPreviousYear:()=>{const d=fe({viewDate:t,calendarType:"day",dayAction:"prevYear"});return n(d),d},navigateToNextYear:()=>{const d=fe({viewDate:t,calendarType:"day",dayAction:"nextYear"});return n(d),d},navigateToPreviousDecade:()=>{const d=new Date(t);d.setFullYear(t.getFullYear()-10),n(d)},navigateToNextDecade:()=>{const d=new Date(t);d.setFullYear(t.getFullYear()+10),n(d)},getNextDateForCompactNavigation:(d,I)=>{const w=fe({viewDate:t,calendarType:I,compactStep:d});return n(w),w},getNextDateForDayNavigation:d=>{const I=fe({viewDate:t,calendarType:"day",dayAction:d});return n(I),I}}},oa=({isOpen:e,currentValue:t,hasAction:n,updateFullDate:a,updateDisplayedDate:o,onValidate:l,onCancel:u,displayValue:D,minDate:g,maxDate:f,disabledDates:T,onChange:d,onClose:I})=>{const[w,O]=h.useState(y.DAY),p=h.useRef(null),[N,F]=h.useState(null),[Z,j]=h.useState(null);va(p.current,e,!1);const{viewDate:b,setViewDate:R,getNextDateForDayNavigation:$,getNextDateForCompactNavigation:Ze}=Ja(t),[K,xe]=h.useState(null),[S,Y]=h.useState(t??b),[le]=h.useState(t),z=h.useMemo(()=>({minDate:g,maxDate:f,disabledDates:T}),[g,f,T]),ue=r=>{const i=$(r);Be(i)},we=(r,i)=>{const E=Ze(r,i);Be(E)},Be=r=>{const i=ja({anchorDay:Z,viewDate:r,constraints:z});i!==null&&(xe(i),Y(i),o(i))},Ee=h.useCallback(()=>{const r=Oa({textValue:D.split(" ").join(""),constraints:z,pendingDate:K,selectedDate:t});R(r.viewDate),j(r.monthNavigationAnchorDay)},[D,K,t,z,R]),ke=h.useMemo(()=>{const r=b??t??new Date,i=w;return w===y.DAY?Aa(r):i===y.MONTH?_a(r):Na(r)},[w,b,t]),ae=h.useMemo(()=>ra({viewDate:b,selectedDate:K??t,minDate:g,maxDate:f,disabledDates:T}),[K,t,b,g,f,T]),v=h.useMemo(()=>Ra({viewDate:b,selectedDate:K??t,minDate:g,maxDate:f,disabledDates:T}),[K,t,b,g,f,T]),Q=h.useMemo(()=>qa({viewDate:b,selectedDate:K??t,minDate:g,maxDate:f,disabledDates:T}),[K,t,b,g,f,T]),Ie=()=>{w===y.DAY?(O(y.MONTH),A()):w===y.MONTH?(O(y.YEAR),q()):(O(y.DAY),B())},Ae=r=>{const i=La({date:r,constraints:z});if(i!==null)if(n)o(i),xe(i),R(i),Y(i),j(i.getDate());else{a(i),F(i),d==null||d(i),l==null||l();return}},ve=r=>{const i=new Date(b.getFullYear(),r,1);R(i),Y(i),O(y.DAY),B()},_e=r=>{const i=new Date(r,b.getMonth(),1);R(i),Y(i),O(y.MONTH),A()},Je=r=>{const i=K??t;return i!==null&&oe(r,i)},Qe=r=>{if(r.key==="Escape"){u==null||u();return}const i=w;i===y.DAY?et(r):i===y.MONTH?tt(r):at(r)},et=r=>{if(!nt(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const E=S,k=ae.find(_=>oe(_.date,E));k&&!k.isDisabled&&Ae(E);return}[ge,ye,De,pe].includes(r.key)&&(r.preventDefault(),ot(r.key))},tt=r=>{if(!rt(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const E=S.getMonth(),k=v.find(_=>_.monthIndex===E);k&&!k.isDisabled&&ve(E);return}[ge,ye,De,pe].includes(r.key)&&(r.preventDefault(),it(r.key))},at=r=>{if(!ee(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const E=S.getFullYear(),k=Q.find(_=>_.year===E);k&&!k.isDisabled&&_e(E);return}[ge,ye,De,pe].includes(r.key)&&(r.preventDefault(),Ne(r.key))},nt=r=>r instanceof HTMLElement?r.matches("button.day-cell")&&r.closest(".rte-datepicker-day-grid")!==null:!1,rt=r=>r instanceof HTMLElement?r.matches("button.month-cell")&&r.closest(".rte-datepicker-month-grid")!==null:!1,ee=r=>r instanceof HTMLElement?r.matches("button.year-cell")&&r.closest(".rte-datepicker-year-grid")!==null:!1,ot=r=>{const i=ae,E=kt(i,S);if(E<0)return;const k=gt(r,"day"),_=Math.abs(k)===7?7:1,de=k>0?1:-1;let U=E+k;for(;U>=0&&U<i.length&&i[U].isDisabled;)U+=de*_;if(U<0||U>=i.length){const L=P(Te(S,k));if(x(L))return;st(L),B();return}const ne=i[U].date;Y(ne),B()},it=r=>{const i=v,E=S.getMonth(),k=i.findIndex(ct=>ct.monthIndex===E);if(k<0)return;const _=gt(r,"monthYear"),de=vt(S,_);if(de.getFullYear()!==b.getFullYear()){st(de),A();return}const U=3,ne=i.length;let L=Me({currentIndex:k,key:r,columnCount:U,cellCount:ne}),J=0;for(;L!==null&&i[L].isDisabled&&J<ne;)L=Me({currentIndex:L,key:r,columnCount:U,cellCount:ne}),J+=1;if(L===null||i[L].isDisabled)return;const Fe=i[L].monthIndex;Y(new Date(b.getFullYear(),Fe,1)),A()},Ne=r=>{const i=Q,E=S.getFullYear(),k=i.findIndex(lt=>lt.year===E);if(k<0)return;const _=gt(r,"monthYear"),de=E+_;if(!i.map(lt=>lt.year).includes(de)){st(new Date(de,0,1)),q();return}const ne=3,L=i.length;let J=Me({currentIndex:k,key:r,columnCount:ne,cellCount:L}),Fe=0;for(;J!==null&&i[J].isDisabled&&Fe<L;)J=Me({currentIndex:J,key:r,columnCount:ne,cellCount:L}),Fe+=1;if(J===null||i[J].isDisabled)return;const ct=i[J].year;Y(new Date(ct,0,1)),q()},x=r=>W({date:r}),B=()=>{We(()=>{const r=p.current,i=r==null?void 0:r.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},A=()=>{We(()=>{const r=p.current,i=r==null?void 0:r.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},q=()=>{We(()=>{const r=p.current,i=r==null?void 0:r.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},V=()=>{l==null||l(),F(K),xe(null),a(K)},ia=(r,i)=>oe(r,i)?0:-1,sa=r=>r===S.getMonth()?0:-1,ca=r=>r===S.getFullYear()?0:-1,st=r=>{const i=z;let E=null;w===y.DAY?E=Ka({focusTargetDay:r,constraints:i}):w===y.MONTH?E=Va({focusTargetMonthStart:r,constraints:i}):E=Ga({focusTargetYear:r.getFullYear(),constraints:i}),E!==null&&(R(E.viewDate),Y(E.menuInitialActiveDate))};return h.useEffect(()=>{if(e)Ee(),B();else{if(N)return;if(le===null)o(null),a(null);else if(!W({date:le,minDate:g,maxDate:f,disabledDates:T}))o(le);else{let r=Te(le,1);for(;W({date:r,minDate:g,maxDate:f,disabledDates:T});)r=Te(r,1);o(r),a(r)}}},[e,Ee,t,I,o,le,N,g,f,T,a]),h.useEffect(()=>{(()=>{if(w===y.DAY){const i=ae;if(kt(i,S)>=0)return;const k=i.find(_=>!_.isDisabled);k&&Y(k.date)}else if(w===y.MONTH){const i=v,E=S.getMonth();if(i.some(_=>_.monthIndex===E&&!_.isDisabled&&b.getFullYear()===S.getFullYear()))return;const k=i.find(_=>!_.isDisabled);k&&Y(new Date(b.getFullYear(),k.monthIndex,1))}else{const i=Q,E=S.getFullYear();if(i.some(_=>_.year===E&&!_.isDisabled))return;const k=i.find(_=>!_.isDisabled);k&&Y(new Date(k.year,0,1))}})()},[b,S,w,ae,v,Q]),s.jsx(s.Fragment,{children:s.jsxs("div",{ref:p,className:M["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Qe,children:[s.jsxs("div",{className:M["rte-datepicker-dropdown-header"],children:[s.jsx("div",{className:M["nav-left"],children:w===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx(re,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":te.navPrevYear,onClick:()=>ue("prevYear")}),s.jsx(re,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":te.navPrevMonth,onClick:()=>ue("prevMonth")})]}):w===y.MONTH?s.jsx(re,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":te.navPrevCompact,onClick:()=>we("previous","month")}):s.jsx(re,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":te.navPrevCompact,onClick:()=>we("previous","year")})}),w===y.YEAR?s.jsx("span",{className:me(M["month-label"],"month-label-static"),children:ke}):s.jsx("button",{className:M["month-label"],onClick:Ie,"aria-label":`Changer de vue, ${ke} , appuyer pour voir les ${w===y.DAY?"mois":"années"}`,"data-datepicker-tab":te.monthLabel,children:ke}),s.jsx("div",{className:M["nav-right"],children:w===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx(re,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":te.navNextMonth,onClick:()=>ue("nextMonth")}),s.jsx(re,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":te.navNextYear,onClick:()=>ue("nextYear")})]}):w===y.MONTH?s.jsx(re,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":te.navNextCompact,onClick:()=>we("next","month")}):s.jsx(re,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":te.navNextCompact,onClick:()=>we("next","year")})})]}),w===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:M["rte-datepicker-weekdays"],"aria-hidden":"true",children:Fa().map((r,i)=>s.jsx("div",{className:M.weekday,children:r},i))}),s.jsx(pt,{appearance:"brand"}),s.jsx("div",{className:me(M["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:ae.map(r=>s.jsxs("button",{type:"button",className:me(M["day-cell"],"day-cell"),role:"gridcell",onClick:()=>Ae(r.date),"aria-selected":Je(r.date),tabIndex:ia(r.date,S),disabled:r.isDisabled,"data-cell-type":r.cellType,"data-datepicker-active":(S==null?void 0:S.toDateString())===r.date.toDateString()||void 0,children:[s.jsx("span",{className:M["day-cell__surface"],"aria-hidden":"true"}),s.jsx("span",{className:M["day-cell__label"],children:r.label})]},r.date.toISOString()))})]}):w===y.MONTH?s.jsxs(s.Fragment,{children:[s.jsx(pt,{appearance:"brand"}),s.jsx("p",{className:M["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),s.jsx("div",{className:me(M["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:v.map(r=>s.jsx("button",{type:"button",className:me(M["month-cell"],"month-cell"),role:"gridcell","aria-selected":r.isSelected,tabIndex:sa(r.monthIndex),"data-cell-month-index":r.monthIndex,"data-active-date-month":b.getMonth(),"data-active-date-year":S.getFullYear(),"data-active-view-year":b.getFullYear(),"data-datepicker-active":r.monthIndex===S.getMonth()&&b.getFullYear()===S.getFullYear()?!0:void 0,"data-current":r.isCurrent,disabled:r.isDisabled,"data-selected":r.isSelected,onClick:()=>ve(r.monthIndex),children:s.jsx("span",{className:M["month-cell__label"],children:r.label})},r.monthIndex))})]}):s.jsxs(s.Fragment,{children:[s.jsx(pt,{appearance:"brand"}),s.jsx("p",{className:M["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),s.jsx("div",{className:me(M["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:Q.map(r=>s.jsx("button",{type:"button",className:me(M["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(S==null?void 0:S.getFullYear())===r.year||null,"data-current":r.isCurrent,tabIndex:ca(r.year),"data-selected":r.isSelected,"aria-selected":r.isSelected,disabled:r.isDisabled,onClick:()=>_e(r.year),children:r.label},r.year))})]}),n&&s.jsxs("div",{className:M["rte-datepicker-dropdown-actions"],children:[s.jsx(Tt,{label:"Annuler",size:"s",variant:"transparent",onClick:u}),s.jsx(Tt,{label:"Confirmer",size:"s",variant:"transparent",onClick:V})]})]})})};oa.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const[Ye,Ce]=se,Bt=e=>{const t=e.dayDigits||"jj",n=e.monthDigits||"mm",a=e.yearDigits||"aaaa";return`${t} / ${n} / ${a}`},Qa=(e,t,n,a)=>{const o=e.dayDigits===""||isNaN(Number(e.dayDigits))?null:Number(e.dayDigits),l=e.monthDigits===""||isNaN(Number(e.monthDigits))?null:Number(e.monthDigits),u=e.yearDigits===""||isNaN(Number(e.yearDigits))?null:Number(e.yearDigits);if(o===null||l===null||u===null)return null;{const D=new Date(1,l-1,o);return D.setFullYear(u),W({date:D,minDate:t,maxDate:n,disabledDates:a})?null:D}},It=e=>{const t=e.dayDigits===""||isNaN(Number(e.dayDigits))?null:Number(e.dayDigits),n=e.monthDigits===""||isNaN(Number(e.monthDigits))?null:Number(e.monthDigits),a=e.yearDigits===""||isNaN(Number(e.yearDigits))?null:Number(e.yearDigits);if(t===null||n===null||a===null)return null;{const o=new Date(1,n-1,t);return o.setFullYear(a),o}},en=(e,t,n,a)=>{const[o,l]=h.useState({dayDigits:e?H(e.getDate(),y.DAY):"",monthDigits:e?H(e.getMonth()+1,y.MONTH):"",yearDigits:e?H(e.getFullYear(),y.YEAR):""}),[u,D]=h.useState("jj / mm / aaaa"),g=h.useMemo(()=>Qa(o,t,n,a),[o,t,n,a]),f=(p,N)=>{l(F=>({...F,[`${p===Ye?"day":p===Ce?"month":"year"}Digits`]:N}))},T=p=>{const N=Se[p],F=p===Ye?"day":p===Ce?"month":"year",Z=u.split("/")[se.indexOf(p)],j=za(Number(Z),N,1),b=H(j,p),R={...o,[`${F}Digits`]:b},$=It(R);$?W({date:$,minDate:t,maxDate:n,disabledDates:a})||l(R):f(p,b)},d=p=>{const N=Se[p],F=p===Ye?"day":p===Ce?"month":"year",Z=u.split("/")[se.indexOf(p)],j=Ua(Number(Z),N,1),b=H(j,p),R={...o,[`${F}Digits`]:b},$=It(R);$?W({date:$,minDate:t,maxDate:n,disabledDates:a})||l(R):f(p,b)},I=p=>{const F={...o,[`${p===Ye?"day":p===Ce?"month":"year"}Digits`]:""};l(F)},w=p=>{if(p){const N=p.getDate(),F=p.getMonth()+1,Z=p.getFullYear(),j={dayDigits:H(N,y.DAY),monthDigits:H(F,y.MONTH),yearDigits:H(Z,y.YEAR)};l(b=>b.dayDigits===j.dayDigits&&b.monthDigits===j.monthDigits&&b.yearDigits===j.yearDigits?b:j)}else l(N=>N.dayDigits===""&&N.monthDigits===""&&N.yearDigits===""?N:{dayDigits:"",monthDigits:"",yearDigits:""})},O=p=>{if(p){const N={dayDigits:H(p.getDate(),y.DAY),monthDigits:H(p.getMonth()+1,y.MONTH),yearDigits:H(p.getFullYear(),y.YEAR)};D(Bt(N))}else D("jj / mm / aaaa")};return h.useEffect(()=>{const p=Bt(o);D(p)},[o]),{dateState:o,internalValue:g,increaseActiveSegmentValue:T,decreaseActiveSegmentValue:d,resetActiveSegmentValue:I,updateDateSegment:f,updateFullDate:w,displayValue:u,updateDisplayedDate:O}},tn=()=>{const[e,t]=h.useState(y.DAY),n=Wa(e),a=$a(e),o=h.useCallback(()=>{t(n)},[n]),l=h.useCallback(()=>{t(a)},[a]);return{moveToNextSegment:o,moveToPreviousSegment:l,setActiveDateSegment:t,activeDateSegment:e,prevSegment:a,nextSegment:n}},an=/^\d*$/,[Re,qe,ht]=se,ce=h.forwardRef(({id:e,label:t,required:n=!1,showLabelRequirement:a=!1,disabled:o=!1,value:l,onChange:u,hasAction:D=!1,onCancel:g,onValidate:f,minDate:T,maxDate:d,disabledDates:I,isError:w,assistiveTextLabel:O,assistiveAppearance:p="description",showAssistiveIcon:N=!1,assistiveTextLink:F},Z)=>{var Ne;const[j,b]=h.useState(!1),[R,$]=h.useState(!1),Ze=O&&!R,{increaseActiveSegmentValue:K,decreaseActiveSegmentValue:xe,resetActiveSegmentValue:S,updateDateSegment:Y,updateFullDate:le,internalValue:z,displayValue:ue,dateState:we,updateDisplayedDate:Be}=en(l,T,d,I),{moveToNextSegment:Ee,moveToPreviousSegment:ke,setActiveDateSegment:ae,activeDateSegment:v}=tn();h.useEffect(()=>{z?u==null||u(z):u==null||u(null)},[z,u]);const Q=h.useRef(null),Ie=h.useRef(null),Ae=()=>{_e(),ee(v)},ve=()=>{b(!1),$(!1)},_e=()=>{o||b(!0)},Je=()=>{o||$(!0)},Qe=x=>{const B=x.key;if(x.stopPropagation(),ee(v),[De,pe,ge,ye,da,ma].includes(B))x.preventDefault(),et(B);else if(an.test(B))x.preventDefault(),tt(B);else return},et=x=>{x===ye?Ee():x===ge?ke():x===De?K(v):x===pe?xe(v):S(v)},tt=x=>{const A=we[`${v===Re?"day":v===qe?"month":"year"}Digits`];v===ht&&A.length>=4?at(A,x):nt(A,x)},at=(x,B)=>{const A=Array.from(x).findIndex(q=>q!=="0");if(A===0){const q=H(Number(B),v);Y(v,q)}else{const q=x.slice(A)+B,V=H(Math.min(Number(q),Se[v]),v);Y(v,V)}},nt=(x,B)=>{if(x.length>=2)if(x[0]==="0"){const A=Number(x[1]+B),q=H(Math.min(A,Se[v]),v);Y(v,q),Ee()}else{const A=H(Number(B),v);Y(v,A)}else{const A=`${x}${B}`,q=Da[v];if(x.length===0&&Number(B)>q){const V=H(Number(B),v);Y(v,V)}else if(A.length===2){const V=H(Math.min(Number(A),Se[v]),v);Y(v,V)}else{const V=H(Number(B),v);Y(v,V)}}},rt=()=>{var q;R&&$(!1);const x=((q=Q.current)==null?void 0:q.selectionStart)??0,B=Xa(),A=1;x<=B[Re][A]+1?ee(Re):x<=B[qe][A]+1?ee(qe):ee(ht)},ee=h.useCallback(x=>{ae(x);const B=3,A=x===Re?0:x===qe?2+B:0+2*(2+B),q=x===ht?A+4:A+2;We(()=>{var V;(V=Q.current)==null||V.setSelectionRange(A,q)})},[ae]),ot=()=>{g==null||g(),ve()},it=()=>{f==null||f(),ve()};return h.useEffect(()=>{ee(v)},[v,ee]),s.jsxs("div",{className:yt["rte-date-picker"],style:{minWidth:"248px"},ref:Z,children:[s.jsx("div",{className:yt["rte-date-picker-header"],children:s.jsxs("label",{htmlFor:e,id:t,className:yt["rte-datepicker-label"],children:[t,s.jsx(ya,{required:n,showLabelRequirement:a})]})}),s.jsx(wa,{style:{width:(Ne=Ie.current)==null?void 0:Ne.offsetWidth},isList:!1,isOpen:R,onClose:ve,offset:8,trigger:s.jsx(ga,{id:"my-id",icon:"calendar-month",onFocus:Ae,isFocused:j,pickerInputRef:Q,onOpenPicker:Je,value:ue,onKeyDown:Qe,onMouseUp:rt,onChange:()=>{},fixedWidth:!1,pickerRef:Ie,openButtonAriaLabel:xa(z),isError:w,disabled:o}),position:"bottom",children:s.jsx(oa,{isOpen:R,currentValue:z,hasAction:D,onValidate:it,onCancel:ot,updateDisplayedDate:Be,updateFullDate:le,displayValue:ue,minDate:T,maxDate:d,disabledDates:I})}),Ze&&s.jsx(ha,{label:O,appearance:w?"error":p,showIcon:N,href:F})]})});ce.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Xe=/ouvrir le calendrier|changer la date/i;function be(e){return((e==null?void 0:e.value)??"").replace(/[\s\u200b]/g,"")}const ie=async()=>{const e=document.getElementById("overlay-root");let t;return await C(()=>{const n=e==null?void 0:e.querySelector("[data-dropdown-id]");if(!n)throw new Error("Dropdown not found");return c(n).toBeInTheDocument(),t=n,n}),t},Nn={title:"Composants/DatePicker",component:ce,tags:["autodocs"]},X={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})}},He={args:{...X.args,disabled:!0}},Pe={args:{...X.args,isError:!0}},Oe={args:{...X.args,value:null},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})},play:async({canvasElement:e})=>{pa(e),await m.tab();for(const n of"15062023")await m.keyboard(n);const t=e.querySelector("input");c(be(t)).toBe("15/06/2023"),await m.keyboard(Ge),c(be(t)).toBe("15/06/2022"),await m.keyboard(ut),c(be(t)).toBe("15/06/2023"),await m.keyboard(ze),await m.keyboard(ut),c(be(t)).toBe("15/07/2023"),await m.keyboard(ze),await m.keyboard(ut),c(be(t)).toBe("16/07/2023"),await m.keyboard(Qt),await m.keyboard(Ge),await m.keyboard(Ge),c(be(t)).toBe("16/05/2023")}},je={args:{...X.args,value:null,hasAction:!0},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})},play:async({canvasElement:e})=>{const n=G(e).getByRole("button",{name:Xe});await m.click(n);let a=await ie(),o=a.querySelector("[role='dialog']");c(o).toBeInTheDocument();const l=a.querySelectorAll(".day-cell");c(l.length).toBeGreaterThan(0),await m.click(l[10]),await m.click(G(a).getByRole("button",{name:/confirmer/i})),await C(()=>{c(o).not.toBeInTheDocument()}),await m.click(n),a=await ie(),o=a.querySelector("[role='dialog']"),c(o).toBeInTheDocument();const u=a.querySelector(".day-cell[data-datepicker-active='true']");c(u).toBeInTheDocument(),c(u).toHaveFocus(),await m.keyboard("{Escape}")}},Le={args:{...X.args,value:null,hasAction:!0},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})},play:async({canvasElement:e})=>{const n=G(e).getByRole("button",{name:Xe});await m.click(n);let a=await ie();await m.tab(),await C(()=>{c(G(a).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await m.tab(),await C(()=>{c(G(a).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await m.tab(),await C(()=>{c(G(a).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const o=G(a);c(o.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const l=a.querySelector('[data-datepicker-tab="month-label"]');c(l).toBeTruthy(),await m.click(l),await C(()=>{c(a.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),c(a.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),c(o.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),c(o.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),c(o.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),c(o.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const u=a.querySelector('[data-datepicker-tab="month-label"]');c(u).toBeTruthy(),await m.click(u),await C(()=>{c(a.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),c(a.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),c(o.getByText("Sélectionner une année")).toBeInTheDocument(),c(o.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),c(o.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),c(a.querySelector(".month-label-static")).toBeInTheDocument(),c(a.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),c(a.querySelectorAll(".year-cell").length).toBe(11),await m.keyboard($e),await C(()=>{c(a).not.toBeInTheDocument(),c(n).toHaveFocus()}),await m.click(n),a=await ie(),await C(()=>{const I=a.querySelector('.day-cell[data-datepicker-active="true"]');c(I).toBeInTheDocument(),c(I).toHaveFocus()});const D=a.querySelector('.day-cell[data-datepicker-active="true"]');await m.tab();const g=G(a).getByRole("button",{name:/^annuler$/i});c(g).toHaveFocus(),await m.keyboard(Ge),c(g).toHaveFocus(),await m.tab({shift:!0}),c(D).toHaveFocus(),await m.keyboard(Qt),await C(()=>{const I=a.querySelector('.day-cell[data-datepicker-active="true"]');c(I).toBeInTheDocument(),c(I).toHaveFocus(),c(I).not.toBe(D)}),await m.keyboard($e),await C(()=>{c(a).not.toBeInTheDocument(),c(n).toHaveFocus()}),await m.click(n),a=await ie();const f=a.querySelector('[data-datepicker-tab="month-label"]');c(f).toBeTruthy(),await m.click(f),await C(()=>{c(a.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const T=a.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");c(T).toBeTruthy(),await C(()=>{c(T).toHaveFocus()}),await m.tab(),await C(()=>{c(G(a).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await m.tab({shift:!0}),c(T).toHaveFocus();const d=G(a).getByRole("button",{name:/année suivante/i});await m.tab({shift:!0}),c(d).toHaveFocus(),await m.tab(),c(T).toHaveFocus()}},Ke={args:{...X.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})},play:async({canvasElement:e})=>{const n=G(e).getByRole("button",{name:Xe});n.focus(),await m.tab({shift:!0});for(const D of"03012020")await m.keyboard(D);await m.click(n);let a=await ie(),o=a.querySelector("[role='dialog']");c(o).toBeInTheDocument(),await C(()=>{const D=a.querySelector('.day-cell[data-datepicker-active="true"]');c(D).toBeInTheDocument(),c(D).toHaveFocus()});const l=a.querySelectorAll(".day-cell[disabled]");c(l.length).toBe(2),await m.keyboard($e),await C(()=>{c(o).not.toBeInTheDocument(),c(n).toHaveFocus()}),await m.tab({shift:!0}),await m.keyboard(dt),await m.keyboard(ze),await m.keyboard(dt),await m.keyboard(ze),await m.keyboard(dt);for(const D of"20082024")await m.keyboard(D);await m.click(n),a=await ie(),o=a.querySelector("[role='dialog']"),c(o).toBeInTheDocument(),await C(()=>{const D=a.querySelector('.day-cell[data-datepicker-active="true"]');c(D).toBeInTheDocument(),c(D).toHaveFocus()});const u=a.querySelectorAll(".day-cell[disabled]");c(u.length).toBe(7),await m.keyboard($e),await C(()=>{c(o).not.toBeInTheDocument(),c(n).toHaveFocus()})}},Ve={args:{...X.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:e=>{const[t,n]=h.useState(null),a=o=>{n(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:a})]})},play:async({canvasElement:e})=>{const n=G(e).getByRole("button",{name:Xe});n.focus(),await m.tab({shift:!0});for(const u of"14062023")await m.keyboard(u);await m.click(n);const a=await ie(),o=a.querySelector("[role='dialog']");c(o).toBeInTheDocument(),await C(()=>{const u=a.querySelector('.day-cell[data-datepicker-active="true"]');c(u).toBeInTheDocument(),c(u).toHaveFocus()});const l=a.querySelectorAll(".day-cell[disabled]");c(l.length).toBe(2)}};var At,_t,Nt;X.parameters={...X.parameters,docs:{...(At=X.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    id: "default-datepicker",
    label: "Date",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true
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
}`,...(Nt=(_t=X.parameters)==null?void 0:_t.docs)==null?void 0:Nt.source}}};var Ft,Mt,Yt;He.parameters={...He.parameters,docs:{...(Ft=He.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Yt=(Mt=He.parameters)==null?void 0:Mt.docs)==null?void 0:Yt.source}}};var Ct,Rt,qt;Pe.parameters={...Pe.parameters,docs:{...(Ct=Pe.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(qt=(Rt=Pe.parameters)==null?void 0:Rt.docs)==null?void 0:qt.source}}};var Ht,Pt,Ot;Oe.parameters={...Oe.parameters,docs:{...(Ht=Oe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
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
        <p>
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
}`,...(Ot=(Pt=Oe.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var jt,Lt,Kt;je.parameters={...je.parameters,docs:{...(jt=je.parameters)==null?void 0:jt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
    // await userEvent.keyboard(TESTING_ESCAPE_KEY);
    // await waitFor(() => {
    //   expect(datePickerDialog).not.toBeInTheDocument();
    //   expect(calendarButton).toHaveFocus();
    // });
  }
}`,...(Kt=(Lt=je.parameters)==null?void 0:Lt.docs)==null?void 0:Kt.source}}};var Vt,Gt,Wt;Le.parameters={...Le.parameters,docs:{...(Vt=Le.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
}`,...(Wt=(Gt=Le.parameters)==null?void 0:Gt.docs)==null?void 0:Wt.source}}};var $t,zt,Ut;Ke.parameters={...Ke.parameters,docs:{...($t=Ke.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: null,
    minDate: new Date(2020, 0, 1),
    maxDate: new Date(2024, 7, 25),
    hasAction: true
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
}`,...(Ut=(zt=Ke.parameters)==null?void 0:zt.docs)==null?void 0:Ut.source}}};var Xt,Zt,Jt;Ve.parameters={...Ve.parameters,docs:{...(Xt=Ve.parameters)==null?void 0:Xt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    value: null,
    disabledDates: [new Date(2023, 5, 15), new Date(2023, 5, 20)],
    hasAction: true
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
}`,...(Jt=(Zt=Ve.parameters)==null?void 0:Zt.docs)==null?void 0:Jt.source}}};const Fn=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{X as Default,He as Disabled,Ve as DisabledDates,Pe as Error,Le as TabNavigation,Oe as TypingDate,je as WithAction,Ke as WithMinMax,Fn as __namedExportsOrder,Nn as default};
