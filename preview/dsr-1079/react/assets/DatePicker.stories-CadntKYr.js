import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as vt,c as ae,d as We,e as Ke,f as it,g as st}from"./keyboard-test.constants-CzExugF2.js";import{D as k,c as j,a as ta,d as lt,e as aa}from"./timepicker.constants-CynrC_9x.js";import{u as i,w as _,a as g,e as a}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as na}from"./testing.utils-DmLcTX3r.js";import{w as Ge}from"./animation-DwV-fHIC.js";import{E as ct,S as dt,b as ve,c as we,a as he,A as De,B as ra,D as oa}from"./keyboard.constants-D1KJQ2-m.js";import{u as ia,a as sa,g as la,r as ca,b as da,c as ua,d as ma,e as pa,f as ga,h as ya,i as wt,j as va,k as wa,l as ut,m as ha,n as ht,o as mt,p as Da,t as ba,q as pt,s as fa,v as xa,w as Ba,x as ka,y as _e,z as Ta,A as Ea,B as Aa,C as Sa,D as _a,E as Ra,F as be,G as W,H as Re,I as Dt,J as ue}from"./DatePicker.stories.util-DCPZpDek.js";import{g as Ia}from"./id.utils-DsO5Uws7.js";import{u as Ca}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as Fa,A as Ha}from"./Label-swDXsD6p.js";import{D as Na}from"./Dropdown-CyecDUeK.js";import{a as Ma,B as qa,c as Ya,f as ee}from"./picker.utils-C68ap_Jx.js";import{c as ja}from"./string.utils-B_KtMSwu.js";import{B as bt}from"./Button-DsgDr11R.js";import{D as gt}from"./Divider-BVZUrQ0d.js";import{I as U}from"./IconButton-B1jvMDIw.js";import{c as te}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-DUkuUEsZ.js";import"./IconButton.module-CR53g8c2.js";const Oa={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Pa="_weekday_gltnx_101",B={"visually-hidden":"_visually-hidden_gltnx_1","rte-datepicker-dropdown":"_rte-datepicker-dropdown_gltnx_13","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_gltnx_32","nav-left":"_nav-left_gltnx_46","nav-right":"_nav-right_gltnx_47","month-label":"_month-label_gltnx_62","rte-datepicker-weekdays":"_rte-datepicker-weekdays_gltnx_92",weekday:Pa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_gltnx_113","calendar-divider":"_calendar-divider_gltnx_119","day-row":"_day-row_gltnx_123","day-cell":"_day-cell_gltnx_130","day-cell__label":"_day-cell__label_gltnx_164","day-cell__surface":"_day-cell__surface_gltnx_168","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_gltnx_283","rte-datepicker-month-grid":"_rte-datepicker-month-grid_gltnx_297","rte-datepicker-year-grid":"_rte-datepicker-year-grid_gltnx_298","compact-row":"_compact-row_gltnx_305","month-cell":"_month-cell_gltnx_311","month-cell__label":"_month-cell__label_gltnx_346","year-cell":"_year-cell_gltnx_408","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_gltnx_495"},ea=({isOpen:u,currentValue:l,hasActions:r,updateFullDate:o,updateDisplayedDate:s,onValidate:T,onCancel:y,displayValue:S,minDate:I,maxDate:F,disabledDates:R,onChange:P})=>{const[w,$]=p.useState(k.DAY),z=p.useRef(null),[ne,me]=p.useState(null),[$e,fe]=p.useState(null);ia(z,u,w);const{viewDate:E,setViewDate:V,getNextDateForDayNavigation:ze,getNextDateForCompactNavigation:Ve}=sa(l),[M,re]=p.useState(null),[h,C]=p.useState(l??E),[L]=p.useState(l),xe=p.useMemo(()=>la(),[]),q=p.useMemo(()=>({minDate:I,maxDate:F,disabledDates:R}),[I,F,R]),X=t=>{const e=ze(t);Be(e)},oe=(t,e)=>{const c=Ve(t,e);Be(c)},Be=t=>{const e=ba({anchorDay:$e,viewDate:t,constraints:q});e!==null&&(re(e),C(e),s(e))},J=p.useCallback(()=>{const t=ca({textValue:S.split(" ").join(""),constraints:q,pendingDate:M,selectedDate:l});V(t.viewDate),fe(t.monthNavigationAnchorDay)},[S,M,l,q,V]),ie=p.useMemo(()=>{const t=E??l??new Date,e=w;return w===k.DAY?ja(da(t)):e===k.MONTH?ua(t):ma(t)},[w,E,l]),Z=p.useMemo(()=>pa({viewDate:E,selectedDate:M??l,minDate:I,maxDate:F,disabledDates:R}),[M,l,E,I,F,R]),Q=p.useMemo(()=>ga({viewDate:E,selectedDate:M??l,minDate:I,maxDate:F,disabledDates:R}),[M,l,E,I,F,R]),N=p.useMemo(()=>ya({viewDate:E,selectedDate:M??l,minDate:I,maxDate:F,disabledDates:R}),[M,l,E,I,F,R]),Ue=()=>{w===k.DAY?($(k.MONTH),ce()):w===k.MONTH?($(k.YEAR),ye()):($(k.DAY),G())},Y=t=>{const e=Da({date:t,constraints:q});if(e!==null)if(r)s(e),re(e),V(e),C(e),fe(e.getDate());else{o(e),me(e),P==null||P(e),T==null||T();return}},pe=t=>{const e=new Date(E.getFullYear(),t,1);V(e),C(e),$(k.DAY),G()},se=t=>{const e=new Date(t,E.getMonth(),1);V(e),C(e),$(k.MONTH),ce()},Xe=t=>{const e=M??l;return e!==null&&mt(t,e)},ke=t=>{if(t.key==="Escape"){y==null||y();return}const e=w;e===k.DAY?Je(t):e===k.MONTH?Te(t):D(t)},Je=t=>{if(!K(t.target))return;if(t.stopPropagation(),[ct,dt].includes(t.key)){t.preventDefault();const c=h,b=Z.find(x=>mt(x.date,c));b&&!b.isDisabled&&Y(c);return}[ve,we,he,De].includes(t.key)&&(t.preventDefault(),Ee(t.key))},Te=t=>{if(!ge(t.target))return;if(t.stopPropagation(),[ct,dt].includes(t.key)){t.preventDefault();const c=h.getMonth(),b=Q.find(x=>x.monthIndex===c);b&&!b.isDisabled&&pe(c);return}[ve,we,he,De].includes(t.key)&&(t.preventDefault(),Ae(t.key))},D=t=>{if(!le(t.target))return;if(t.stopPropagation(),[ct,dt].includes(t.key)){t.preventDefault();const c=h.getFullYear(),b=N.find(x=>x.year===c);b&&!b.isDisabled&&se(c);return}[ve,we,he,De].includes(t.key)&&(t.preventDefault(),Ze(t.key))},K=t=>t instanceof HTMLElement?t.matches("button.day-cell")&&t.closest(".rte-datepicker-day-grid")!==null:!1,ge=t=>t instanceof HTMLElement?t.matches("button.month-cell")&&t.closest(".rte-datepicker-month-grid")!==null:!1,le=t=>t instanceof HTMLElement?t.matches("button.year-cell")&&t.closest(".rte-datepicker-year-grid")!==null:!1,Ee=t=>{const e=Z,c=ht(e,h);if(c<0)return;const b=pt(t,"day"),x=Math.abs(b)===7?7:1,d=b>0?1:-1;let m=c+b;for(;m>=0&&m<e.length&&e[m].isDisabled;)m+=d*x;if(m<0||m>=e.length){const f=fa(xa(h,b));if(Qe(f))return;de(f),G();return}const v=e[m].date;Ba(v,E)?C(v):de(v),G()},Ae=t=>{const e=Q,c=h.getMonth(),b=e.findIndex(rt=>rt.monthIndex===c);if(b<0)return;const x=pt(t,"monthYear"),d=ka(h,x);if(d.getFullYear()!==E.getFullYear()){de(d),ce();return}const m=3,v=e.length;let f=_e({currentIndex:b,key:t,columnCount:m,cellCount:v}),A=0;for(;f!==null&&e[f].isDisabled&&A<v;)f=_e({currentIndex:f,key:t,columnCount:m,cellCount:v}),A+=1;if(f===null||e[f].isDisabled)return;const Se=e[f].monthIndex;C(new Date(E.getFullYear(),Se,1)),ce()},Ze=t=>{const e=N,c=h.getFullYear(),b=e.findIndex(ot=>ot.year===c);if(b<0)return;const x=pt(t,"monthYear"),d=c+x;if(!e.map(ot=>ot.year).includes(d)){de(new Date(d,0,1)),ye();return}const v=3,f=e.length;let A=_e({currentIndex:b,key:t,columnCount:v,cellCount:f}),Se=0;for(;A!==null&&e[A].isDisabled&&Se<f;)A=_e({currentIndex:A,key:t,columnCount:v,cellCount:f}),Se+=1;if(A===null||e[A].isDisabled)return;const rt=e[A].year;C(new Date(rt,0,1)),ye()},Qe=t=>wt({date:t,...q}),G=()=>{Ge(()=>{const t=z.current,e=t==null?void 0:t.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');e==null||e.focus()})},ce=()=>{Ge(()=>{const t=z.current,e=t==null?void 0:t.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');e==null||e.focus()})},ye=()=>{Ge(()=>{const t=z.current,e=t==null?void 0:t.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');e==null||e.focus()})},et=()=>{T==null||T();const t=M??l;me(t),re(null),o(t)},tt=(t,e)=>mt(t,e)?0:-1,at=t=>t===h.getMonth()?0:-1,nt=t=>t===h.getFullYear()?0:-1,de=t=>{const e=q;let c=null;w===k.DAY?c=Ta({focusTargetDay:t,constraints:e}):w===k.MONTH?c=Ea({focusTargetMonthStart:t,constraints:e}):c=Aa({focusTargetYear:t.getFullYear(),constraints:e}),c!==null&&(V(c.viewDate),C(c.menuInitialActiveDate))};return p.useEffect(()=>{if(u)J(),G();else{if(ne)return;if(L===null)o(null);else if(!wt({date:L,...q}))s(L);else{const t=va(L,q);t&&o(t)}}},[u,J,l,s,L,ne,I,F,R,o,q]),p.useEffect(()=>{(()=>{if(w===k.DAY){const e=Z;if(ht(e,h)>=0)return;const b=e.find(x=>!x.isDisabled);b&&C(b.date)}else if(w===k.MONTH){const e=Q,c=h.getMonth();if(e.some(x=>x.monthIndex===c&&!x.isDisabled&&E.getFullYear()===h.getFullYear()))return;const b=e.find(x=>!x.isDisabled);b&&C(new Date(E.getFullYear(),b.monthIndex,1))}else{const e=N,c=h.getFullYear();if(e.some(x=>x.year===c&&!x.isDisabled))return;const b=e.find(x=>!x.isDisabled);b&&C(new Date(b.year,0,1))}})()},[E,h,w,Z,Q,N]),n.jsx(n.Fragment,{children:n.jsxs("div",{ref:z,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:ke,children:[n.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[n.jsx("div",{className:B["nav-left"],children:w===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(U,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":j.navPrevYear,onClick:()=>X("prevYear")}),n.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":j.navPrevMonth,onClick:()=>X("prevMonth")})]}):w===k.MONTH?n.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":j.navPrevCompact,onClick:()=>oe("previous","month")}):n.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":j.navPrevCompact,onClick:()=>oe("previous","year")})}),w===k.YEAR?n.jsx("span",{className:te(B["month-label"],"month-label-static"),children:ie}):n.jsx("button",{className:B["month-label"],onClick:Ue,"aria-label":`${ie}, afficher les ${w===k.DAY?"mois":"années"}`,"data-datepicker-tab":j.monthLabel,children:ie}),n.jsx("span",{className:B["visually-hidden"],role:"status","aria-live":"polite","aria-atomic":"true",children:ie}),n.jsx("div",{className:B["nav-right"],children:w===k.DAY?n.jsxs(n.Fragment,{children:[n.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":j.navNextMonth,onClick:()=>X("nextMonth")}),n.jsx(U,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":j.navNextYear,onClick:()=>X("nextYear")})]}):w===k.MONTH?n.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":j.navNextCompact,onClick:()=>oe("next","month")}):n.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":j.navNextCompact,onClick:()=>oe("next","year")})})]}),w===k.DAY?n.jsxs("div",{className:te(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[n.jsx("div",{className:B["rte-datepicker-weekdays"],role:"row",children:wa().map((t,e)=>n.jsx("div",{className:B.weekday,role:"columnheader","aria-label":xe[e],children:t},e))}),n.jsx("div",{className:B["calendar-divider"],"aria-hidden":"true",children:n.jsx(gt,{appearance:"brand"})}),ut(Z,7).map((t,e)=>n.jsx("div",{className:B["day-row"],role:"row","aria-label":`${e}`,children:t.map(c=>n.jsxs("button",{type:"button",className:te(B["day-cell"],"day-cell"),role:"gridcell","aria-selected":Xe(c.date),onClick:()=>Y(c.date),"aria-current":c.isCurrent?"date":void 0,tabIndex:tt(c.date,h),disabled:c.isDisabled,"data-cell-type":c.cellType,"data-datepicker-active":(h==null?void 0:h.toDateString())===c.date.toDateString()||void 0,children:[n.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),n.jsx("span",{id:`day-label-${c.date.toISOString()}`,className:B["visually-hidden"],children:ha(c.date)}),n.jsx("span",{className:B["day-cell__label"],"aria-hidden":"true",children:c.label})]},c.date.toISOString()))},t[0].date.toISOString()+e))]}):w===k.MONTH?n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),n.jsx("div",{className:te(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ut(Q,3).map(t=>n.jsx("div",{className:B["compact-row"],role:"row",children:t.map(e=>n.jsx("button",{type:"button",className:te(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:at(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":E.getMonth(),"data-active-date-year":h.getFullYear(),"data-active-view-year":E.getFullYear(),"data-datepicker-active":e.monthIndex===h.getMonth()&&E.getFullYear()===h.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>pe(e.monthIndex),children:n.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))},t[0].monthIndex))})]}):n.jsxs(n.Fragment,{children:[n.jsx(gt,{appearance:"brand"}),n.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),n.jsx("div",{className:te(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:ut(N,3).map(t=>n.jsx("div",{className:B["compact-row"],role:"row",children:t.map(e=>n.jsx("button",{type:"button",className:te(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(h==null?void 0:h.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:nt(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>se(e.year),children:e.label},e.year))},t[0].year))})]}),r&&n.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[n.jsx(bt,{label:"Annuler",size:"s",variant:"transparent",onClick:y,"data-datepicker-tab":j.cancel}),n.jsx(bt,{label:"Confirmer",size:"s",variant:"transparent",onClick:et,"data-datepicker-tab":j.confirm})]})]})})};ea.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const La=/^\d*$/,Ka=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[Ie,Ce,yt]=ta,O=p.forwardRef(({id:u,label:l,required:r=!1,showLabelRequirement:o=!1,disabled:s=!1,value:T,defaultValue:y,readonly:S=!1,onChange:I,hasActions:F=!0,onCancel:R,onValidate:P,minDate:w,maxDate:$,disabledDates:z,isError:ne,assistiveTextLabel:me,errorMessage:$e,assistiveAppearance:fe="description",showAssistiveIcon:E=!1,assistiveTextLink:V,width:ze="248px"},Ve)=>{var x;const[M,re]=p.useState(!1),[h,C]=p.useState(!1),L=u??`datepicker-${Ia()}`,xe=ne&&$e||me,q=xe&&!h,X=`${L}-assistive-text`,oe=T!==void 0,Be=p.useRef(T??y??null),J=oe?T??null:Be.current,{increaseActiveSegmentValue:ie,decreaseActiveSegmentValue:Z,resetActiveSegmentValue:Q,updateDateSegment:N,updateFullDate:Ue,internalValue:Y,displayValue:pe,dateState:se,updateDisplayedDate:Xe}=Sa(J,{minDate:w,maxDate:$,disabledDates:z}),{moveToNextSegment:ke,moveToPreviousSegment:Je,setActiveDateSegment:Te,activeDateSegment:D}=_a(),K=p.useRef(I),ge=p.useRef(J??null);p.useEffect(()=>{K.current=I},[I]),p.useEffect(()=>{ge.current=J??null},[J]),p.useEffect(()=>{var d,m;if(Y===null&&!Ka(se)){(d=K.current)==null||d.call(K,Y);return}Ma(ge.current,Y)||(ge.current=Y,(m=K.current)==null||m.call(K,Y))},[Y,se]);const le=p.useRef(null),Ee=p.useRef(null),Ae=p.useRef(null),Ze=Ca(le.current),Qe=()=>{ce(),e(D)},G=(d=!1)=>{var m;re(d),C(!1),d&&((m=Ae.current)==null||m.focus({preventScroll:!0}))},ce=()=>{s||re(!0)},ye=()=>{s||C(!0)},et=d=>{const m=d.key;if(d.stopPropagation(),e(D),[he,De,ve,we,ra,oa].includes(m))d.preventDefault(),tt(m);else if(La.test(m))d.preventDefault(),at(m);else return},tt=d=>{d===we?ke():d===ve?Je():d===he?ie(D):d===De?Z(D):Q(D)},at=d=>{const v=se[`${D===Ie?"day":D===Ce?"month":"year"}Digits`];D===yt&&v.length>=4?nt(v,d):de(v,d)},nt=(d,m)=>{const v=Array.from(d).findIndex(f=>f!=="0");if(v===0){const f=ee(Number(m),D);N(D,f)}else{const f=d.slice(v)+m,A=ee(Math.min(Number(f),lt[D]),D);N(D,A)}},de=(d,m)=>{if(d.length>=2)if(d[0]==="0"){const v=Number(d[1]+m),f=ee(Math.min(v,lt[D]),D);N(D,f),ke()}else{const v=ee(Number(m),D);N(D,v)}else{const v=`${d}${m}`,f=aa[D];if(d.length===0&&Number(m)>f){const A=ee(Number(m),D);N(D,A)}else if(v.length===2){const A=ee(Math.min(Number(v),lt[D]),D);N(D,A)}else{const A=ee(Number(m),D);N(D,A)}}},t=()=>{var f;h&&C(!1);const d=((f=le.current)==null?void 0:f.selectionStart)??0,m=Ya(),v=1;d<=m[Ie][v]+1?e(Ie):d<=m[Ce][v]+1?e(Ce):e(yt)},e=p.useCallback(d=>{Te(d);const m=3,v=d===Ie?0:d===Ce?2+m:0+2*(2+m),f=d===yt?v+4:v+2;Ge(()=>{var A;(A=le.current)==null||A.setSelectionRange(v,f)})},[Te]),c=()=>{R==null||R(),G(!0)},b=()=>{P==null||P(),G(!0)};return p.useEffect(()=>{e(D)},[D,e]),n.jsxs("div",{className:Oa["rte-date-picker"],style:{minWidth:"248px",width:ze},ref:Ve,children:[n.jsx(Fa,{htmlFor:L,label:l,required:r,showLabelRequirement:o}),n.jsx(Na,{style:{width:(x=Ee.current)==null?void 0:x.offsetWidth},isList:!1,isOpen:h,onClose:G,offset:8,overlayLevel:Ze,trigger:n.jsx(qa,{id:L,ariaDescribedBy:q?X:void 0,icon:"calendar-month",onFocus:Qe,isFocused:M,pickerInputRef:le,onOpenPicker:ye,value:pe,onKeyDown:et,onMouseUp:t,onChange:()=>{},fixedWidth:!1,pickerRef:Ee,openButtonRef:Ae,openButtonAriaLabel:Ra(Y),isError:ne,disabled:s,readOnly:S,required:r}),position:"bottom",children:n.jsx(ea,{isOpen:h,currentValue:Y,hasActions:F,onValidate:b,onCancel:c,updateDisplayedDate:Xe,updateFullDate:Ue,displayValue:pe,minDate:w,maxDate:$,disabledDates:z})}),q&&n.jsx(Ha,{id:X,label:xe,appearance:ne?"error":fe,showIcon:E,href:V})]})});O.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["Omit"]};const En={title:"Composants/DatePicker/DatePicker",component:O,tags:["autodocs"]},H={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})}},Fe={tags:["!autodocs"],parameters:{a11y:{test:"error",options:{runOnly:{type:"rule",values:["aria-required-parent","aria-required-children"]}}}},args:{...H.args,value:void 0,defaultValue:new Date(2026,2,31),disabledDates:[new Date(2026,2,16)]},play:async({canvasElement:u})=>{await i.click(_(u).getByRole("button",{name:be}));const l=await W(),r=_(l);Re(r.getByRole("grid",{name:"Calendrier"}),7);const o=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];await g(()=>{Dt(r.getByRole("grid",{name:"Calendrier"}),o)});const s=r.getByRole("status");a(s).toHaveAttribute("aria-atomic","true"),a(s).toHaveAttribute("aria-live","polite"),a(s.childElementCount).toBe(0),a(s.closest("button")).toBeNull(),a(r.getByRole("button",{name:"Mars 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),a(s).toHaveTextContent(/^Mars 2026$/);const T=r.getByRole("gridcell",{name:"dimanche 15 mars 2026"});a(_(T).getByText("15")).toBeInTheDocument(),a(_(T).getByText("dimanche 15 mars 2026")).not.toHaveAttribute("aria-hidden","true"),a(r.getByRole("gridcell",{name:"lundi 16 mars 2026"})).toBeDisabled(),a(_(r.getByRole("gridcell",{name:"lundi 23 février 2026"})).getByText("23")).toBeInTheDocument(),a(_(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).getByText("1")).toBeInTheDocument(),await g(()=>{for(const y of r.getAllByRole("gridcell")){const S=_(y).getByText(/^\d+$/);a(S).toBeVisible(),a(S).toHaveAttribute("aria-hidden","true"),a(y).not.toHaveAttribute("aria-hidden","true"),a(y).not.toHaveAttribute("aria-label")}}),await g(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toHaveFocus()}),await i.keyboard(vt),await g(()=>{a(r.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).toHaveFocus(),a(s).toHaveTextContent("Avril 2026")}),a(r.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toBeInTheDocument(),await i.keyboard(ae),await g(()=>{a(r.getByRole("gridcell",{name:"mardi 31 mars 2026"})).toHaveFocus(),a(s).toHaveTextContent("Mars 2026")}),await i.click(r.getByRole("button",{name:"Mois suivant"})),await g(()=>a(s).toHaveTextContent(/^Avril 2026$/)),a(r.getByRole("button",{name:"Avril 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),await i.click(r.getByRole("button",{name:"Année suivante"})),await g(()=>a(s).toHaveTextContent("Avril 2027")),await i.click(r.getByRole("button",{name:"Année précédente"})),await g(()=>a(s).toHaveTextContent("Avril 2026")),await i.click(r.getByRole("button",{name:"Mois précédent"})),await g(()=>a(s).toHaveTextContent("Mars 2026")),await i.click(r.getByRole("button",{name:"Mars 2026, afficher les mois"})),await g(()=>a(s).toHaveTextContent(/^2026$/)),Re(r.getByRole("grid",{name:"Mois"}),3),await i.click(r.getByRole("button",{name:"Année suivante"})),await g(()=>a(s).toHaveTextContent(/^2027$/)),await i.click(r.getByRole("button",{name:"Année précédente"})),await g(()=>a(s).toHaveTextContent(/^2026$/)),r.getByRole("gridcell",{name:"mars"}).focus(),a(r.getByRole("gridcell",{name:"mars"})).toHaveFocus();for(const y of["février","janvier","décembre"])await i.keyboard(ae),await g(()=>a(r.getByRole("gridcell",{name:y})).toHaveFocus());a(s).toHaveTextContent(/^2025$/),await i.click(r.getByRole("button",{name:"2025, afficher les années"})),await g(()=>a(s).toHaveTextContent("2020 – 2030")),Re(r.getByRole("grid",{name:"Années"}),3),await i.click(r.getByRole("button",{name:"Décennie suivante"})),await g(()=>a(s).toHaveTextContent("2030 – 2040")),await i.click(r.getByRole("button",{name:"Décennie précédente"})),await g(()=>a(s).toHaveTextContent("2020 – 2030")),r.getByRole("gridcell",{name:"2025"}).focus();for(let y=2024;y>=2019;y--)await i.keyboard(ae),await g(()=>a(r.getByRole("gridcell",{name:String(y)})).toHaveFocus());a(s).toHaveTextContent("2010 – 2020"),a(l.querySelector('[aria-live="polite"]')).toBe(s),await i.click(r.getByRole("gridcell",{name:"2019"})),await i.click(r.getByRole("gridcell",{name:"mars"})),await g(()=>{const y=r.getByRole("grid",{name:"Calendrier"});Re(y,7),Dt(y,o)})}},He={args:{...H.args,disabled:!0}},Ne={args:{...H.args,isError:!0},play:async({canvasElement:u})=>{const l=_(u);a(l.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Me={args:{...H.args,value:void 0},render:u=>{const{value:l,...r}=u;return n.jsx(O,{...r,defaultValue:new Date(2026,5,15)})}},qe={tags:["!autodocs"],args:{...H.args,value:null},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{na(),await i.tab();for(const r of"15062023")await i.keyboard(r);const l=u.querySelector("input");a(ue(l)).toBe("15/06/2023"),await i.keyboard(Ke),a(ue(l)).toBe("15/06/2022"),await i.keyboard(it),a(ue(l)).toBe("15/06/2023"),await i.keyboard(ae),await i.keyboard(it),a(ue(l)).toBe("15/07/2023"),await i.keyboard(ae),await i.keyboard(it),a(ue(l)).toBe("16/07/2023"),await i.keyboard(vt),await i.keyboard(Ke),await i.keyboard(Ke),a(ue(l)).toBe("16/05/2023")}},Ye={args:{...H.args,value:null},render:u=>{const[l,r]=p.useState(new Date(2026,5,10));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>r(new Date(2026,5,22)),children:"Set to 22/06/2026"}),n.jsx("button",{onClick:()=>r(null),children:"Clear"})]}),n.jsx(O,{...u,value:l,onChange:r})]})}},je={tags:["skip-ci","!autodocs"],args:{...H.args,value:null,hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=_(u).getByRole("button",{name:be});await i.click(r);let o=await W(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument();const T=o.querySelectorAll(".day-cell");a(T.length).toBeGreaterThan(0),await i.click(T[10]),await i.click(_(o).getByRole("button",{name:/confirmer/i})),await g(()=>{a(s).not.toBeInTheDocument()}),await i.click(r),o=await W(),s=o.querySelector("[role='dialog']"),a(s).toBeInTheDocument();const y=o.querySelector(".day-cell[data-datepicker-active='true']");a(y).toBeInTheDocument(),a(y).toHaveFocus(),await i.keyboard("{Escape}")}},Oe={tags:["skip-ci","!autodocs"],args:{...H.args,value:null,hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=_(u).getByRole("button",{name:be});await i.click(r);let o=await W();await i.tab(),await g(()=>{a(_(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await g(()=>{a(_(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await g(()=>{a(_(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=_(o);a(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const T=o.querySelector('[data-datepicker-tab="month-label"]');a(T).toBeTruthy(),await i.click(T),await g(()=>{a(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),a(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),a(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),a(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),a(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),a(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const y=o.querySelector('[data-datepicker-tab="month-label"]');a(y).toBeTruthy(),await i.click(y),await g(()=>{a(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),a(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),a(s.getByText("Sélectionner une année")).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),a(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),a(o.querySelector(".month-label-static")).toBeInTheDocument(),a(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),a(o.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(We),await g(()=>{a(o).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.click(r),o=await W(),await g(()=>{const w=o.querySelector('.day-cell[data-datepicker-active="true"]');a(w).toBeInTheDocument(),a(w).toHaveFocus()});const S=o.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const I=_(o).getByRole("button",{name:/^annuler$/i});a(I).toHaveFocus(),await i.keyboard(Ke),a(I).toHaveFocus(),await i.tab({shift:!0}),a(S).toHaveFocus(),await i.keyboard(vt),await g(()=>{const w=o.querySelector('.day-cell[data-datepicker-active="true"]');a(w).toBeInTheDocument(),a(w).toHaveFocus(),a(w).not.toBe(S)}),await i.keyboard(We),await g(()=>{a(o).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.click(r),o=await W();const F=o.querySelector('[data-datepicker-tab="month-label"]');a(F).toBeTruthy(),await i.click(F),await g(()=>{a(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const R=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");a(R).toBeTruthy(),await g(()=>{a(R).toHaveFocus()}),await i.tab(),await g(()=>{a(_(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),a(R).toHaveFocus();const P=_(o).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),a(P).toHaveFocus(),await i.tab(),a(R).toHaveFocus()}},Pe={tags:["!autodocs"],args:{...H.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=_(u).getByRole("button",{name:be});r.focus(),await i.tab({shift:!0});for(const S of"03012020")await i.keyboard(S);await i.click(r);let o=await W(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await g(()=>{const S=o.querySelector('.day-cell[data-datepicker-active="true"]');a(S).toBeInTheDocument(),a(S).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2),await i.keyboard(We),await g(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(st),await i.keyboard(ae),await i.keyboard(st),await i.keyboard(ae),await i.keyboard(st);for(const S of"20082024")await i.keyboard(S);await i.click(r),o=await W(),s=o.querySelector("[role='dialog']"),a(s).toBeInTheDocument(),await g(()=>{const S=o.querySelector('.day-cell[data-datepicker-active="true"]');a(S).toBeInTheDocument(),a(S).toHaveFocus()});const y=o.querySelectorAll(".day-cell[disabled]");a(y.length).toBe(7),await i.keyboard(We),await g(()=>{a(s).not.toBeInTheDocument(),a(r).toHaveFocus()})}},Le={tags:["!autodocs"],args:{...H.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:u=>{const[l,r]=p.useState(null),o=s=>{r(s)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(O,{...u,value:l,onChange:o})]})},play:async({canvasElement:u})=>{const r=_(u).getByRole("button",{name:be});r.focus(),await i.tab({shift:!0});for(const y of"14062023")await i.keyboard(y);await i.click(r);const o=await W(),s=o.querySelector("[role='dialog']");a(s).toBeInTheDocument(),await g(()=>{const y=o.querySelector('.day-cell[data-datepicker-active="true"]');a(y).toBeInTheDocument(),a(y).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");a(T.length).toBe(2)}};var ft,xt,Bt;H.parameters={...H.parameters,docs:{...(ft=H.parameters)==null?void 0:ft.docs,source:{originalSource:`{
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
}`,...(Bt=(xt=H.parameters)==null?void 0:xt.docs)==null?void 0:Bt.source}}};var kt,Tt,Et;Fe.parameters={...Fe.parameters,docs:{...(kt=Fe.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=Fe.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var At,St,_t;He.parameters={...He.parameters,docs:{...(At=He.parameters)==null?void 0:At.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(_t=(St=He.parameters)==null?void 0:St.docs)==null?void 0:_t.source}}};var Rt,It,Ct;Ne.parameters={...Ne.parameters,docs:{...(Rt=Ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Ct=(It=Ne.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var Ft,Ht,Nt;Me.parameters={...Me.parameters,docs:{...(Ft=Me.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Ht=Me.parameters)==null?void 0:Ht.docs)==null?void 0:Nt.source}}};var Mt,qt,Yt;qe.parameters={...qe.parameters,docs:{...(Mt=qe.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Yt=(qt=qe.parameters)==null?void 0:qt.docs)==null?void 0:Yt.source}}};var jt,Ot,Pt;Ye.parameters={...Ye.parameters,docs:{...(jt=Ye.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Pt=(Ot=Ye.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.source}}};var Lt,Kt,Gt;je.parameters={...je.parameters,docs:{...(Lt=je.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Gt=(Kt=je.parameters)==null?void 0:Kt.docs)==null?void 0:Gt.source}}};var Wt,$t,zt;Oe.parameters={...Oe.parameters,docs:{...(Wt=Oe.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(zt=($t=Oe.parameters)==null?void 0:$t.docs)==null?void 0:zt.source}}};var Vt,Ut,Xt;Pe.parameters={...Pe.parameters,docs:{...(Vt=Pe.parameters)==null?void 0:Vt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=Pe.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Jt,Zt,Qt;Le.parameters={...Le.parameters,docs:{...(Jt=Le.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
}`,...(Qt=(Zt=Le.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};const An=["Default","AccessibleDateAnnouncements","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{Fe as AccessibleDateAnnouncements,Ye as ControlledPropUpdate,H as Default,He as Disabled,Le as DisabledDates,Ne as Error,Oe as TabNavigation,qe as TypingDate,Me as UncontrolledDefaultValue,je as WithAction,Pe as WithMinMax,An as __namedExportsOrder,En as default};
