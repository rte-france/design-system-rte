import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{T as We,a as ze,b as ta,c as ut,d as $e,e as dt}from"./keyboard-test.constants-DkNPES5T.js";import{D as Ue,e as la,f as ca,g as Tt,a as he,A as we,b as ve,c as fe,h as y,i as be,j as ft,k as te,E as mt,S as Dt,l as Ve,B as ua,m as da,n as ma}from"./timepicker.constants-Dc9ut5mB.js";import{a as M,e as l,w as V,u as d}from"./index-4rjIhT2C.js";import{r as h}from"./index-G8LIXM5I.js";import{f as Da}from"./testing.utils-mIZIUNbM.js";import{w as Ge,B as pa}from"./BaseInputPicker-CU_aW5QR.js";import{R as ga,A as ya}from"./RequiredIndicator-Cmvl3eZq.js";import{B as ha}from"./BaseDropdown-Bc55FiNe.js";import{u as wa}from"./useFocusTrap-DG09Z6i4.js";import{B as kt}from"./Button-CXM9p_L3.js";import{D as pt}from"./Divider-BMotkXeQ.js";import{I as ie}from"./IconButton-DcIeVO_H.js";import{c as ye}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";function Te(e){return new Date(e.getFullYear(),e.getMonth(),1)}function va(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function xt(e){const{year:t,monthIndex:a,minDate:n,maxDate:o,disabledDates:c}=e,m=va(new Date(t,a,1)).getDate();for(let D=1;D<=m;D++){const g=P(new Date(t,a,D));if(!U({date:g,minDate:n,maxDate:o,disabledDates:c}))return!0}return!1}function aa(e){const{year:t,minDate:a,maxDate:n,disabledDates:o}=e;for(let c=0;c<12;c++)if(xt({year:t,monthIndex:c,minDate:a,maxDate:n,disabledDates:o}))return!0;return!1}function na(e){return(e.getDay()+6)%7}function fa(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function ba(e){const t=`${e.getDate()}`.padStart(2,"0"),a=`${e.getMonth()+1}`.padStart(2,"0"),n=`${e.getFullYear()}`.padStart(4,"0");return`${t}/${a}/${n}`}function Ta(e){return e===null?la:`${ca}${ba(e)}`}function xa(e){const t=e.trim();if(t.length===0)return null;const a=/^(\d{2})\/(\d{2})\/(\d{4})$/.exec(t);if(!a)return null;const n=Number(a[1]),o=Number(a[2]),c=Number(a[3]);if(o<1||o>12)return null;const m=new Date(c,o-1,n);return m.getFullYear()===c&&m.getMonth()===o-1&&m.getDate()===n&&!Number.isNaN(m.valueOf())?m:null}function se(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function ka(e,t){return P(e).valueOf()<P(t).valueOf()}function Ea(e,t){return P(e).valueOf()>P(t).valueOf()}function P(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ra(e,t){return new Date(e,t+1,0).getDate()}function Sa(e,t,a){const n=ra(t,a),o=Math.min(Math.max(e,1),n);return P(new Date(t,a,o))}function Be(e,t){const a=new Date(e);return a.setDate(a.getDate()+t),a}function bt(e,t){return new Date(e.getFullYear(),e.getMonth()+t,1)}function Et(e,t){return new Date(e.getFullYear()+t,e.getMonth(),1)}function oa(e){return Math.floor(e/10)*10}function Ee(e){const{viewDate:t,calendarType:a}=e;if(a==="day"){const n=e.dayAction;return n?["prevYear","nextYear"].includes(n)?bt(t,n==="prevYear"?-12:12):bt(t,n==="prevMonth"?-1:1):t}if(a==="month"){const n=e.compactStep;return n?Et(t,n==="previous"?-1:1):t}if(a==="year"){const n=e.compactStep;if(!n)return t;const o=Tt;return Et(t,n==="previous"?-o:o)}return t}function Ba(e,t){return!t||t.length===0?!1:t.some(a=>se(e,P(a)))}function U(e){const{date:t,minDate:a,maxDate:n,disabledDates:o}=e,c=P(t);return a&&ka(c,a)||n&&Ea(c,n)?!0:Ba(c,o)}function Ia(e,t=Ue){return new Intl.DateTimeFormat(t,{month:"long",year:"numeric"}).format(e)}function Aa(e,t=Ue){return new Intl.DateTimeFormat(t,{year:"numeric"}).format(e)}function _a(e){const t=oa(e.getFullYear()),a=t+Tt-1;return`${t} – ${a}`}function Na(e=Ue){const t=new Date(2021,0,4);return Array.from({length:7}).map((a,n)=>{const o=Be(t,n);return new Intl.DateTimeFormat(e,{weekday:"short"}).format(o).trim().charAt(0).toLocaleUpperCase(e)})}function Fa(e){const{pendingDate:t,selectedDate:a,dayCells:n}=e,o=P(t??a??new Date),c=St(n,o);if(c!==null)return c;const m=P(new Date),D=St(n,m);if(D!==null)return D;const g=n.find(x=>!x.isDisabled);return g?g.date:o}function St(e,t){const a=e.find(o=>se(o.date,t));if(!a)return null;if(!a.isDisabled)return a.date;const n=Ma(e,e.indexOf(a));return n?n.date:null}function Ma(e,t){for(let a=t;a<e.length;a++){const n=e[a];if(!n.isDisabled)return n}for(let a=0;a<t;a++){const n=e[a];if(!n.isDisabled)return n}}function Bt(e,t){return e.findIndex(a=>se(a.date,t))}function Ya(e){const t=Te(e),a=na(t),n=ra(e.getFullYear(),e.getMonth());return Math.ceil((a+n)/7)*7}function ia(e){const{viewDate:t,selectedDate:a,minDate:n,maxDate:o,disabledDates:c}=e,m=Te(t),D=na(m),g=Be(m,-D),x=Ya(t),f=P(new Date);return Array.from({length:x}).map((u,p)=>{const A=Be(g,p),q=fa(A,t),Q=!!a&&se(A,a),w=se(A,f);let _="default";return q?Q?_="selected":w&&(_="today"):_="prev/next",{date:A,label:`${A.getDate()}`,cellType:_,isDisabled:U({date:A,minDate:n,maxDate:o,disabledDates:c})}})}function Ca(e){const{viewDate:t,selectedDate:a,minDate:n,maxDate:o,disabledDates:c,locale:m=Ue}=e,D=a?Te(a):null,g=Te(new Date),x=t.getFullYear();return Array.from({length:12}).map((f,u)=>{const p=new Date(x,u,1);return{monthIndex:u,label:new Intl.DateTimeFormat(m,{month:"long"}).format(p),isDisabled:!xt({year:x,monthIndex:u,minDate:n,maxDate:o,disabledDates:c}),isCurrent:p.getTime()===g.getTime(),isSelected:!!D&&p.getTime()===D.getTime()}})}function Ra(e){const{viewDate:t,selectedDate:a,minDate:n,maxDate:o,disabledDates:c}=e,m=new Date().getFullYear(),D=(a==null?void 0:a.getFullYear())??null,g=oa(t.getFullYear());return Array.from({length:Tt}).map((x,f)=>{const u=g+f;return{year:u,label:`${u}`,isDisabled:!aa({year:u,minDate:n,maxDate:o,disabledDates:c}),isCurrent:u===m,isSelected:D===u}})}function Ye(e){const{currentIndex:t,key:a,columnCount:n,cellCount:o}=e;if(a===ve)return t>0?t-1:null;if(a===fe)return t<o-1?t+1:null;if(a===he){const c=t-n;return c>=0?c:null}if(a===we){const c=t+n;return c<o?c:null}return null}const Ha={[ve]:-1,[fe]:1},It={day:7,monthYear:3};function gt(e,t){return e===he?-It[t]:e===we?It[t]:Ha[e]??0}function Pa(e){return(e==null?void 0:e.getDate())??null}function qa(e){const{textValue:t,constraints:a,pendingDate:n,selectedDate:o}=e,c=e.fallbackViewDate??new Date,m=t.trim(),D=m.length>0?xa(m):null,g=D?P(D):null,x=g!==null&&!U({date:g,...a});let f,u;x&&g?(u=g,f=Te(g)):(u=null,f=c);const p=ia({viewDate:f,selectedDate:u,...a}),A=Fa({pendingDate:u,selectedDate:u,dayCells:p}),q=Pa(u??n??o);return{viewDate:f,pendingForMenu:u,menuInitialActiveDate:A,monthNavigationAnchorDay:q}}function Oa(e){const{anchorDay:t,viewDate:a,constraints:n}=e;if(t===null)return null;const o=Sa(t,a.getFullYear(),a.getMonth());return U({date:o,...n})?null:o}function ja(e){const t=P(e.date);return U({date:t,...e.constraints})?null:t}function La(e){const t=P(e.focusTargetDay);return U({date:t,...e.constraints})?null:{viewDate:Te(t),menuInitialActiveDate:t}}function Ka(e){const t=Te(e.focusTargetMonthStart);return xt({year:t.getFullYear(),monthIndex:t.getMonth(),...e.constraints})?{viewDate:t,menuInitialActiveDate:t}:null}function za(e){if(!aa({year:e.focusTargetYear,...e.constraints}))return null;const t=new Date(e.focusTargetYear,0,1);return{viewDate:t,menuInitialActiveDate:t}}function Va(e,t){let a=Be(e,1);for(;U({date:a,...t});)a=Be(a,1);return a}const yt={"rte-date-picker":"_rte-date-picker_1e0u2_1","rte-date-picker-header":"_rte-date-picker-header_1e0u2_1"},Ga=e=>be[Math.min(be.indexOf(e)+1,2)],Wa=e=>be[Math.max(be.indexOf(e)-1,0)],$a=(e,t,a)=>{if(isNaN(e))return ft;{const n=e+a;return n>t?ft:n}},Ua=(e,t,a)=>{if(isNaN(e))return t;const n=e-a;return n<ft?t:n},R=(e,t)=>t===y.YEAR?e.toString().padStart(4,"0"):e.toString().padStart(2,"0"),Xa=()=>({[y.DAY]:[0,2],[y.MONTH]:[5,7],[y.YEAR]:[10,14]}),Za="_weekday_1tzza_85",F={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:Za,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Ja=e=>{const[t,a]=h.useState(e??new Date);return{viewDate:t,setViewDate:a,navigateToPreviousMonth:()=>{const u=Ee({viewDate:t,calendarType:"day",dayAction:"prevMonth"});return a(u),u},navigateToNextMonth:()=>{const u=Ee({viewDate:t,calendarType:"day",dayAction:"nextMonth"});return a(u),u},navigateToPreviousYear:()=>{const u=Ee({viewDate:t,calendarType:"day",dayAction:"prevYear"});return a(u),u},navigateToNextYear:()=>{const u=Ee({viewDate:t,calendarType:"day",dayAction:"nextYear"});return a(u),u},navigateToPreviousDecade:()=>{const u=new Date(t);u.setFullYear(t.getFullYear()-10),a(u)},navigateToNextDecade:()=>{const u=new Date(t);u.setFullYear(t.getFullYear()+10),a(u)},getNextDateForCompactNavigation:(u,p)=>{const A=Ee({viewDate:t,calendarType:p,compactStep:u});return a(A),A},getNextDateForDayNavigation:u=>{const p=Ee({viewDate:t,calendarType:"day",dayAction:u});return a(p),p}}},sa=({isOpen:e,currentValue:t,hasAction:a,updateFullDate:n,updateDisplayedDate:o,onValidate:c,onCancel:m,displayValue:D,minDate:g,maxDate:x,disabledDates:f,onChange:u})=>{const[p,A]=h.useState(y.DAY),q=h.useRef(null),[Q,w]=h.useState(null),[_,O]=h.useState(null);wa(q.current,e,!1);const{viewDate:S,setViewDate:C,getNextDateForDayNavigation:X,getNextDateForCompactNavigation:ae}=Ja(t),[Y,Z]=h.useState(null),[E,L]=h.useState(t??S),[ue]=h.useState(t),G=h.useMemo(()=>({minDate:g,maxDate:x,disabledDates:f}),[g,x,f]),K=r=>{const i=X(r);ne(i)},xe=(r,i)=>{const T=ae(r,i);ne(T)},ne=r=>{const i=Oa({anchorDay:_,viewDate:r,constraints:G});i!==null&&(Z(i),L(i),o(i))},Ie=h.useCallback(()=>{const r=qa({textValue:D.split(" ").join(""),constraints:G,pendingDate:Y,selectedDate:t});C(r.viewDate),O(r.monthNavigationAnchorDay)},[D,Y,t,G,C]),Ae=h.useMemo(()=>{const r=S??t??new Date,i=p;return p===y.DAY?Ia(r):i===y.MONTH?Aa(r):_a(r)},[p,S,t]),de=h.useMemo(()=>ia({viewDate:S,selectedDate:Y??t,minDate:g,maxDate:x,disabledDates:f}),[Y,t,S,g,x,f]),re=h.useMemo(()=>Ca({viewDate:S,selectedDate:Y??t,minDate:g,maxDate:x,disabledDates:f}),[Y,t,S,g,x,f]),me=h.useMemo(()=>Ra({viewDate:S,selectedDate:Y??t,minDate:g,maxDate:x,disabledDates:f}),[Y,t,S,g,x,f]),Fe=()=>{p===y.DAY?(A(y.MONTH),pe()):p===y.MONTH?(A(y.YEAR),v()):(A(y.DAY),De())},b=r=>{const i=ja({date:r,constraints:G});if(i!==null)if(a)o(i),Z(i),C(i),L(i),O(i.getDate());else{n(i),w(i),u==null||u(i),c==null||c();return}},ke=r=>{const i=new Date(S.getFullYear(),r,1);C(i),L(i),A(y.DAY),De()},_e=r=>{const i=new Date(r,S.getMonth(),1);C(i),L(i),A(y.MONTH),pe()},Ze=r=>{const i=Y??t;return i!==null&&se(r,i)},Ne=r=>{if(r.key==="Escape"){m==null||m();return}const i=p;i===y.DAY?Je(r):i===y.MONTH?Qe(r):et(r)},Je=r=>{if(!tt(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const T=E,k=de.find(I=>se(I.date,T));k&&!k.isDisabled&&b(T);return}[ve,fe,he,we].includes(r.key)&&(r.preventDefault(),rt(r.key))},Qe=r=>{if(!at(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const T=E.getMonth(),k=re.find(I=>I.monthIndex===T);k&&!k.isDisabled&&ke(T);return}[ve,fe,he,we].includes(r.key)&&(r.preventDefault(),ot(r.key))},et=r=>{if(!nt(r.target))return;if(r.stopPropagation(),[mt,Dt].includes(r.key)){r.preventDefault();const T=E.getFullYear(),k=me.find(I=>I.year===T);k&&!k.isDisabled&&_e(T);return}[ve,fe,he,we].includes(r.key)&&(r.preventDefault(),ee(r.key))},tt=r=>r instanceof HTMLElement?r.matches("button.day-cell")&&r.closest(".rte-datepicker-day-grid")!==null:!1,at=r=>r instanceof HTMLElement?r.matches("button.month-cell")&&r.closest(".rte-datepicker-month-grid")!==null:!1,nt=r=>r instanceof HTMLElement?r.matches("button.year-cell")&&r.closest(".rte-datepicker-year-grid")!==null:!1,rt=r=>{const i=de,T=Bt(i,E);if(T<0)return;const k=gt(r,"day"),I=Math.abs(k)===7?7:1,ge=k>0?1:-1;let W=T+k;for(;W>=0&&W<i.length&&i[W].isDisabled;)W+=ge*I;if(W<0||W>=i.length){const j=P(Be(E,k));if(it(j))return;st(j),De();return}const oe=i[W].date;L(oe),De()},ot=r=>{const i=re,T=E.getMonth(),k=i.findIndex(lt=>lt.monthIndex===T);if(k<0)return;const I=gt(r,"monthYear"),ge=bt(E,I);if(ge.getFullYear()!==S.getFullYear()){st(ge),pe();return}const W=3,oe=i.length;let j=Ye({currentIndex:k,key:r,columnCount:W,cellCount:oe}),J=0;for(;j!==null&&i[j].isDisabled&&J<oe;)j=Ye({currentIndex:j,key:r,columnCount:W,cellCount:oe}),J+=1;if(j===null||i[j].isDisabled)return;const Me=i[j].monthIndex;L(new Date(S.getFullYear(),Me,1)),pe()},ee=r=>{const i=me,T=E.getFullYear(),k=i.findIndex(ct=>ct.year===T);if(k<0)return;const I=gt(r,"monthYear"),ge=T+I;if(!i.map(ct=>ct.year).includes(ge)){st(new Date(ge,0,1)),v();return}const oe=3,j=i.length;let J=Ye({currentIndex:k,key:r,columnCount:oe,cellCount:j}),Me=0;for(;J!==null&&i[J].isDisabled&&Me<j;)J=Ye({currentIndex:J,key:r,columnCount:oe,cellCount:j}),Me+=1;if(J===null||i[J].isDisabled)return;const lt=i[J].year;L(new Date(lt,0,1)),v()},it=r=>U({date:r,...G}),De=()=>{Ge(()=>{const r=q.current,i=r==null?void 0:r.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},pe=()=>{Ge(()=>{const r=q.current,i=r==null?void 0:r.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},v=()=>{Ge(()=>{const r=q.current,i=r==null?void 0:r.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');i==null||i.focus()})},B=()=>{c==null||c();const r=Y??t;w(r),Z(null),n(r)},N=(r,i)=>se(r,i)?0:-1,H=r=>r===E.getMonth()?0:-1,z=r=>r===E.getFullYear()?0:-1,st=r=>{const i=G;let T=null;p===y.DAY?T=La({focusTargetDay:r,constraints:i}):p===y.MONTH?T=Ka({focusTargetMonthStart:r,constraints:i}):T=za({focusTargetYear:r.getFullYear(),constraints:i}),T!==null&&(C(T.viewDate),L(T.menuInitialActiveDate))};return h.useEffect(()=>{if(e)Ie(),De();else{if(Q)return;if(ue===null)n(null);else if(!U({date:ue,...G}))o(ue);else{const r=Va(ue,G);r&&n(r)}}},[e,Ie,t,o,ue,Q,g,x,f,n,G]),h.useEffect(()=>{(()=>{if(p===y.DAY){const i=de;if(Bt(i,E)>=0)return;const k=i.find(I=>!I.isDisabled);k&&L(k.date)}else if(p===y.MONTH){const i=re,T=E.getMonth();if(i.some(I=>I.monthIndex===T&&!I.isDisabled&&S.getFullYear()===E.getFullYear()))return;const k=i.find(I=>!I.isDisabled);k&&L(new Date(S.getFullYear(),k.monthIndex,1))}else{const i=me,T=E.getFullYear();if(i.some(I=>I.year===T&&!I.isDisabled))return;const k=i.find(I=>!I.isDisabled);k&&L(new Date(k.year,0,1))}})()},[S,E,p,de,re,me]),s.jsx(s.Fragment,{children:s.jsxs("div",{ref:q,className:F["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ne,children:[s.jsxs("div",{className:F["rte-datepicker-dropdown-header"],children:[s.jsx("div",{className:F["nav-left"],children:p===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx(ie,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":te.navPrevYear,onClick:()=>K("prevYear")}),s.jsx(ie,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":te.navPrevMonth,onClick:()=>K("prevMonth")})]}):p===y.MONTH?s.jsx(ie,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":te.navPrevCompact,onClick:()=>xe("previous","month")}):s.jsx(ie,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":te.navPrevCompact,onClick:()=>xe("previous","year")})}),p===y.YEAR?s.jsx("span",{className:ye(F["month-label"],"month-label-static"),children:Ae}):s.jsx("button",{className:F["month-label"],onClick:Fe,"aria-label":`Changer de vue, ${Ae} , appuyer pour voir les ${p===y.DAY?"mois":"années"}`,"data-datepicker-tab":te.monthLabel,children:Ae}),s.jsx("div",{className:F["nav-right"],children:p===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx(ie,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":te.navNextMonth,onClick:()=>K("nextMonth")}),s.jsx(ie,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":te.navNextYear,onClick:()=>K("nextYear")})]}):p===y.MONTH?s.jsx(ie,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":te.navNextCompact,onClick:()=>xe("next","month")}):s.jsx(ie,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":te.navNextCompact,onClick:()=>xe("next","year")})})]}),p===y.DAY?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:F["rte-datepicker-weekdays"],"aria-hidden":"true",children:Na().map((r,i)=>s.jsx("div",{className:F.weekday,children:r},i))}),s.jsx(pt,{appearance:"brand"}),s.jsx("div",{className:ye(F["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:de.map(r=>s.jsxs("button",{type:"button",className:ye(F["day-cell"],"day-cell"),role:"gridcell",onClick:()=>b(r.date),"aria-selected":Ze(r.date),tabIndex:N(r.date,E),disabled:r.isDisabled,"data-cell-type":r.cellType,"data-datepicker-active":(E==null?void 0:E.toDateString())===r.date.toDateString()||void 0,children:[s.jsx("span",{className:F["day-cell__surface"],"aria-hidden":"true"}),s.jsx("span",{className:F["day-cell__label"],children:r.label})]},r.date.toISOString()))})]}):p===y.MONTH?s.jsxs(s.Fragment,{children:[s.jsx(pt,{appearance:"brand"}),s.jsx("p",{className:F["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),s.jsx("div",{className:ye(F["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:re.map(r=>s.jsx("button",{type:"button",className:ye(F["month-cell"],"month-cell"),role:"gridcell","aria-selected":r.isSelected,tabIndex:H(r.monthIndex),"data-cell-month-index":r.monthIndex,"data-active-date-month":S.getMonth(),"data-active-date-year":E.getFullYear(),"data-active-view-year":S.getFullYear(),"data-datepicker-active":r.monthIndex===E.getMonth()&&S.getFullYear()===E.getFullYear()?!0:void 0,"data-current":r.isCurrent,disabled:r.isDisabled,"data-selected":r.isSelected,onClick:()=>ke(r.monthIndex),children:s.jsx("span",{className:F["month-cell__label"],children:r.label})},r.monthIndex))})]}):s.jsxs(s.Fragment,{children:[s.jsx(pt,{appearance:"brand"}),s.jsx("p",{className:F["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),s.jsx("div",{className:ye(F["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:me.map(r=>s.jsx("button",{type:"button",className:ye(F["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(E==null?void 0:E.getFullYear())===r.year||null,"data-current":r.isCurrent,tabIndex:z(r.year),"data-selected":r.isSelected,"aria-selected":r.isSelected,disabled:r.isDisabled,onClick:()=>_e(r.year),children:r.label},r.year))})]}),a&&s.jsxs("div",{className:F["rte-datepicker-dropdown-actions"],children:[s.jsx(kt,{label:"Annuler",size:"s",variant:"transparent",onClick:m}),s.jsx(kt,{label:"Confirmer",size:"s",variant:"transparent",onClick:B})]})]})})};sa.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const[ht,wt]=be,At="jj / mm / aaaa",_t=e=>{const t=e.dayDigits||"jj",a=e.monthDigits||"mm",n=e.yearDigits||"aaaa";return`${t} / ${a} / ${n}`},Qa=(e,t,a,n)=>{const o=e.dayDigits===""||isNaN(Number(e.dayDigits))?null:Number(e.dayDigits),c=e.monthDigits===""||isNaN(Number(e.monthDigits))?null:Number(e.monthDigits),m=e.yearDigits===""||isNaN(Number(e.yearDigits))?null:Number(e.yearDigits);if(o===null||c===null||m===null)return null;{const D=new Date(1,c-1,o);return D.setFullYear(m),!(D.getDate()===o&&D.getMonth()+1===c&&D.getFullYear()===m)||U({date:D,minDate:t,maxDate:a,disabledDates:n})?null:D}},en=e=>{const t=e.dayDigits===""||isNaN(Number(e.dayDigits))?null:Number(e.dayDigits),a=e.monthDigits===""||isNaN(Number(e.monthDigits))?null:Number(e.monthDigits),n=e.yearDigits===""||isNaN(Number(e.yearDigits))?null:Number(e.yearDigits);if(t===null||a===null||n===null)return null;{const o=new Date(1,a-1,t);return o.setFullYear(n),o.getDate()===t&&o.getMonth()+1===a&&o.getFullYear()===n?o:null}},tn=(e,{minDate:t,maxDate:a,disabledDates:n})=>{const[o,c]=h.useState({dayDigits:e?R(e.getDate(),y.DAY):"",monthDigits:e?R(e.getMonth()+1,y.MONTH):"",yearDigits:e?R(e.getFullYear(),y.YEAR):""}),[m,D]=h.useState(At),g=h.useMemo(()=>Qa(o,t,a,n),[o,t,a,n]),x=(w,_)=>{c(O=>({...O,[`${w===ht?"day":w===wt?"month":"year"}Digits`]:_}))},f=(w,_)=>{const O=Ve[w],S=w===ht?"day":w===wt?"month":"year",C=m.split("/")[be.indexOf(w)],X=_==="increase"?$a(Number(C),O,1):Ua(Number(C),O,1),ae=R(X,w),Y={...o,[`${S}Digits`]:ae},Z=en(Y);Z?U({date:Z,minDate:t,maxDate:a,disabledDates:n})||c(Y):x(w,ae)},u=w=>{f(w,"increase")},p=w=>{f(w,"decrease")},A=w=>{const O={...o,[`${w===ht?"day":w===wt?"month":"year"}Digits`]:""};c(O)},q=w=>{if(w){const _=w.getDate(),O=w.getMonth()+1,S=w.getFullYear(),C={dayDigits:R(_,y.DAY),monthDigits:R(O,y.MONTH),yearDigits:R(S,y.YEAR)};c(X=>X.dayDigits===C.dayDigits&&X.monthDigits===C.monthDigits&&X.yearDigits===C.yearDigits?X:C)}else c(_=>_.dayDigits===""&&_.monthDigits===""&&_.yearDigits===""?_:{dayDigits:"",monthDigits:"",yearDigits:""})},Q=w=>{if(w){const _={dayDigits:R(w.getDate(),y.DAY),monthDigits:R(w.getMonth()+1,y.MONTH),yearDigits:R(w.getFullYear(),y.YEAR)};D(_t(_))}else D(At)};return h.useEffect(()=>{const w=_t(o);D(w)},[o]),{dateState:o,internalValue:g,increaseActiveSegmentValue:u,decreaseActiveSegmentValue:p,resetActiveSegmentValue:A,updateDateSegment:x,updateFullDate:q,displayValue:m,updateDisplayedDate:Q}},an=()=>{const[e,t]=h.useState(y.DAY),a=Ga(e),n=Wa(e),o=h.useCallback(()=>{t(a)},[a]),c=h.useCallback(()=>{t(n)},[n]);return{moveToNextSegment:o,moveToPreviousSegment:c,setActiveDateSegment:t,activeDateSegment:e,prevSegment:n,nextSegment:a}},nn=/^\d*$/,[Ce,Re,vt]=be,ce=h.forwardRef(({id:e,label:t,labelId:a,required:n=!1,showLabelRequirement:o=!1,disabled:c=!1,value:m,readonly:D=!1,onChange:g,hasAction:x=!1,onCancel:f,onValidate:u,minDate:p,maxDate:A,disabledDates:q,isError:Q,assistiveTextLabel:w,assistiveAppearance:_="description",showAssistiveIcon:O=!1,assistiveTextLink:S},C)=>{var pe;const[X,ae]=h.useState(!1),[Y,Z]=h.useState(!1),E=w&&!Y,{increaseActiveSegmentValue:L,decreaseActiveSegmentValue:ue,resetActiveSegmentValue:G,updateDateSegment:K,updateFullDate:xe,internalValue:ne,displayValue:Ie,dateState:Ae,updateDisplayedDate:de}=tn(m,{minDate:p,maxDate:A,disabledDates:q}),{moveToNextSegment:re,moveToPreviousSegment:me,setActiveDateSegment:Fe,activeDateSegment:b}=an();h.useEffect(()=>{ne?g==null||g(ne):g==null||g(null)},[ne,g]);const ke=h.useRef(null),_e=h.useRef(null),Ze=()=>{Je(),ee(b)},Ne=()=>{ae(!1),Z(!1)},Je=()=>{c||ae(!0)},Qe=()=>{c||Z(!0)},et=v=>{const B=v.key;if(v.stopPropagation(),ee(b),[he,we,ve,fe,ua,da].includes(B))v.preventDefault(),tt(B);else if(nn.test(B))v.preventDefault(),at(B);else return},tt=v=>{v===fe?re():v===ve?me():v===he?L(b):v===we?ue(b):G(b)},at=v=>{const N=Ae[`${b===Ce?"day":b===Re?"month":"year"}Digits`];b===vt&&N.length>=4?nt(N,v):rt(N,v)},nt=(v,B)=>{const N=Array.from(v).findIndex(H=>H!=="0");if(N===0){const H=R(Number(B),b);K(b,H)}else{const H=v.slice(N)+B,z=R(Math.min(Number(H),Ve[b]),b);K(b,z)}},rt=(v,B)=>{if(v.length>=2)if(v[0]==="0"){const N=Number(v[1]+B),H=R(Math.min(N,Ve[b]),b);K(b,H),re()}else{const N=R(Number(B),b);K(b,N)}else{const N=`${v}${B}`,H=ma[b];if(v.length===0&&Number(B)>H){const z=R(Number(B),b);K(b,z)}else if(N.length===2){const z=R(Math.min(Number(N),Ve[b]),b);K(b,z)}else{const z=R(Number(B),b);K(b,z)}}},ot=()=>{var H;Y&&Z(!1);const v=((H=ke.current)==null?void 0:H.selectionStart)??0,B=Xa(),N=1;v<=B[Ce][N]+1?ee(Ce):v<=B[Re][N]+1?ee(Re):ee(vt)},ee=h.useCallback(v=>{Fe(v);const B=3,N=v===Ce?0:v===Re?2+B:0+2*(2+B),H=v===vt?N+4:N+2;Ge(()=>{var z;(z=ke.current)==null||z.setSelectionRange(N,H)})},[Fe]),it=()=>{f==null||f(),Ne()},De=()=>{u==null||u(),Ne()};return h.useEffect(()=>{ee(b)},[b,ee]),s.jsxs("div",{className:yt["rte-date-picker"],style:{minWidth:"248px"},ref:C,children:[s.jsx("div",{className:yt["rte-date-picker-header"],children:s.jsxs("label",{htmlFor:e,id:a??t,className:yt["rte-datepicker-label"],children:[t,s.jsx(ga,{required:n,showLabelRequirement:o})]})}),s.jsx(ha,{style:{width:(pe=_e.current)==null?void 0:pe.offsetWidth},isList:!1,isOpen:Y,onClose:Ne,offset:8,trigger:s.jsx(pa,{id:e,ariaLabelledBy:a??t,icon:"calendar-month",onFocus:Ze,isFocused:X,pickerInputRef:ke,onOpenPicker:Qe,value:Ie,onKeyDown:et,onMouseUp:ot,onChange:()=>{},fixedWidth:!1,pickerRef:_e,openButtonAriaLabel:Ta(ne),isError:Q,disabled:c,readOnly:D}),position:"bottom",children:s.jsx(sa,{isOpen:Y,currentValue:ne,hasAction:x,onValidate:De,onCancel:it,updateDisplayedDate:de,updateFullDate:xe,displayValue:Ie,minDate:p,maxDate:A,disabledDates:q})}),E&&s.jsx(ya,{label:w,appearance:Q?"error":_,showIcon:O,href:S})]})});ce.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Xe=/ouvrir le calendrier|changer la date/i;function Se(e){return((e==null?void 0:e.value)??"").replace(/[\s\u200b]/g,"")}const le=async()=>{const e=document.getElementById("overlay-root");let t;return await M(()=>{const a=e==null?void 0:e.querySelector("[data-dropdown-id]");if(!a)throw new Error("Dropdown not found");return l(a).toBeInTheDocument(),t=a,a}),t},Fn={title:"Composants/DatePicker/DatePicker",component:ce,tags:["autodocs"]},$={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})}},He={args:{...$.args,disabled:!0}},Pe={args:{...$.args,isError:!0}},qe={args:{...$.args,value:null},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})},play:async({canvasElement:e})=>{Da(e),await d.tab();for(const a of"15062023")await d.keyboard(a);const t=e.querySelector("input");l(Se(t)).toBe("15/06/2023"),await d.keyboard(ze),l(Se(t)).toBe("15/06/2022"),await d.keyboard(ut),l(Se(t)).toBe("15/06/2023"),await d.keyboard($e),await d.keyboard(ut),l(Se(t)).toBe("15/07/2023"),await d.keyboard($e),await d.keyboard(ut),l(Se(t)).toBe("16/07/2023"),await d.keyboard(ta),await d.keyboard(ze),await d.keyboard(ze),l(Se(t)).toBe("16/05/2023")}},Oe={tags:["skip-ci"],args:{...$.args,value:null,hasAction:!0},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})},play:async({canvasElement:e})=>{const a=V(e).getByRole("button",{name:Xe});await d.click(a);let n=await le(),o=n.querySelector("[role='dialog']");l(o).toBeInTheDocument();const c=n.querySelectorAll(".day-cell");l(c.length).toBeGreaterThan(0),await d.click(c[10]),await d.click(V(n).getByRole("button",{name:/confirmer/i})),await M(()=>{l(o).not.toBeInTheDocument()}),await d.click(a),n=await le(),o=n.querySelector("[role='dialog']"),l(o).toBeInTheDocument();const m=n.querySelector(".day-cell[data-datepicker-active='true']");l(m).toBeInTheDocument(),l(m).toHaveFocus(),await d.keyboard("{Escape}")}},je={tags:["skip-ci"],args:{...$.args,value:null,hasAction:!0},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})},play:async({canvasElement:e})=>{const a=V(e).getByRole("button",{name:Xe});await d.click(a);let n=await le();await d.tab(),await M(()=>{l(V(n).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await d.tab(),await M(()=>{l(V(n).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await d.tab(),await M(()=>{l(V(n).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const o=V(n);l(o.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),l(o.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),l(o.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),l(o.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const c=n.querySelector('[data-datepicker-tab="month-label"]');l(c).toBeTruthy(),await d.click(c),await M(()=>{l(n.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),l(n.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),l(o.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),l(o.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),l(o.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),l(o.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const m=n.querySelector('[data-datepicker-tab="month-label"]');l(m).toBeTruthy(),await d.click(m),await M(()=>{l(n.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),l(n.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),l(o.getByText("Sélectionner une année")).toBeInTheDocument(),l(o.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),l(o.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),l(n.querySelector(".month-label-static")).toBeInTheDocument(),l(n.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),l(n.querySelectorAll(".year-cell").length).toBe(11),await d.keyboard(We),await M(()=>{l(n).not.toBeInTheDocument(),l(a).toHaveFocus()}),await d.click(a),n=await le(),await M(()=>{const p=n.querySelector('.day-cell[data-datepicker-active="true"]');l(p).toBeInTheDocument(),l(p).toHaveFocus()});const D=n.querySelector('.day-cell[data-datepicker-active="true"]');await d.tab();const g=V(n).getByRole("button",{name:/^annuler$/i});l(g).toHaveFocus(),await d.keyboard(ze),l(g).toHaveFocus(),await d.tab({shift:!0}),l(D).toHaveFocus(),await d.keyboard(ta),await M(()=>{const p=n.querySelector('.day-cell[data-datepicker-active="true"]');l(p).toBeInTheDocument(),l(p).toHaveFocus(),l(p).not.toBe(D)}),await d.keyboard(We),await M(()=>{l(n).not.toBeInTheDocument(),l(a).toHaveFocus()}),await d.click(a),n=await le();const x=n.querySelector('[data-datepicker-tab="month-label"]');l(x).toBeTruthy(),await d.click(x),await M(()=>{l(n.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const f=n.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");l(f).toBeTruthy(),await M(()=>{l(f).toHaveFocus()}),await d.tab(),await M(()=>{l(V(n).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await d.tab({shift:!0}),l(f).toHaveFocus();const u=V(n).getByRole("button",{name:/année suivante/i});await d.tab({shift:!0}),l(u).toHaveFocus(),await d.tab(),l(f).toHaveFocus()}},Le={args:{...$.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})},play:async({canvasElement:e})=>{const a=V(e).getByRole("button",{name:Xe});a.focus(),await d.tab({shift:!0});for(const D of"03012020")await d.keyboard(D);await d.click(a);let n=await le(),o=n.querySelector("[role='dialog']");l(o).toBeInTheDocument(),await M(()=>{const D=n.querySelector('.day-cell[data-datepicker-active="true"]');l(D).toBeInTheDocument(),l(D).toHaveFocus()});const c=n.querySelectorAll(".day-cell[disabled]");l(c.length).toBe(2),await d.keyboard(We),await M(()=>{l(o).not.toBeInTheDocument(),l(a).toHaveFocus()}),await d.tab({shift:!0}),await d.keyboard(dt),await d.keyboard($e),await d.keyboard(dt),await d.keyboard($e),await d.keyboard(dt);for(const D of"20082024")await d.keyboard(D);await d.click(a),n=await le(),o=n.querySelector("[role='dialog']"),l(o).toBeInTheDocument(),await M(()=>{const D=n.querySelector('.day-cell[data-datepicker-active="true"]');l(D).toBeInTheDocument(),l(D).toHaveFocus()});const m=n.querySelectorAll(".day-cell[disabled]");l(m.length).toBe(7),await d.keyboard(We),await M(()=>{l(o).not.toBeInTheDocument(),l(a).toHaveFocus()})}},Ke={args:{...$.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:e=>{const[t,a]=h.useState(null),n=o=>{a(o)};return s.jsxs(s.Fragment,{children:[s.jsxs("p",{children:["Date sélectionnée:"," ",t?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(t):"aucune"]}),s.jsx(ce,{...e,value:t,onChange:n})]})},play:async({canvasElement:e})=>{const a=V(e).getByRole("button",{name:Xe});a.focus(),await d.tab({shift:!0});for(const m of"14062023")await d.keyboard(m);await d.click(a);const n=await le(),o=n.querySelector("[role='dialog']");l(o).toBeInTheDocument(),await M(()=>{const m=n.querySelector('.day-cell[data-datepicker-active="true"]');l(m).toBeInTheDocument(),l(m).toHaveFocus()});const c=n.querySelectorAll(".day-cell[disabled]");l(c.length).toBe(2)}};var Nt,Ft,Mt;$.parameters={...$.parameters,docs:{...(Nt=$.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
  args: {
    id: "default-datepicker",
    label: "Date",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
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
  }
}`,...(Mt=(Ft=$.parameters)==null?void 0:Ft.docs)==null?void 0:Mt.source}}};var Yt,Ct,Rt;He.parameters={...He.parameters,docs:{...(Yt=He.parameters)==null?void 0:Yt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Rt=(Ct=He.parameters)==null?void 0:Ct.docs)==null?void 0:Rt.source}}};var Ht,Pt,qt;Pe.parameters={...Pe.parameters,docs:{...(Ht=Pe.parameters)==null?void 0:Ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(qt=(Pt=Pe.parameters)==null?void 0:Pt.docs)==null?void 0:qt.source}}};var Ot,jt,Lt;qe.parameters={...qe.parameters,docs:{...(Ot=qe.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
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
}`,...(Lt=(jt=qe.parameters)==null?void 0:jt.docs)==null?void 0:Lt.source}}};var Kt,zt,Vt;Oe.parameters={...Oe.parameters,docs:{...(Kt=Oe.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
  }
}`,...(Vt=(zt=Oe.parameters)==null?void 0:zt.docs)==null?void 0:Vt.source}}};var Gt,Wt,$t;je.parameters={...je.parameters,docs:{...(Gt=je.parameters)==null?void 0:Gt.docs,source:{originalSource:`{
  tags: ["skip-ci"],
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
}`,...($t=(Wt=je.parameters)==null?void 0:Wt.docs)==null?void 0:$t.source}}};var Ut,Xt,Zt;Le.parameters={...Le.parameters,docs:{...(Ut=Le.parameters)==null?void 0:Ut.docs,source:{originalSource:`{
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
}`,...(Zt=(Xt=Le.parameters)==null?void 0:Xt.docs)==null?void 0:Zt.source}}};var Jt,Qt,ea;Ke.parameters={...Ke.parameters,docs:{...(Jt=Ke.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(ea=(Qt=Ke.parameters)==null?void 0:Qt.docs)==null?void 0:ea.source}}};const Mn=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{$ as Default,He as Disabled,Ke as DisabledDates,Pe as Error,je as TabNavigation,qe as TypingDate,Oe as WithAction,Le as WithMinMax,Mn as __namedExportsOrder,Fn as default};
