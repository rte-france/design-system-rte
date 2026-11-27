import{j as n}from"./jsx-runtime-Cf8x2fCZ.js";import{b as ht,c as ye,d as Ze,e as Xe,f as st,g as ct}from"./keyboard-test.constants-CzExugF2.js";import{D as T,c as L,a as ra,d as dt,e as oa}from"./timepicker.constants-CynrC_9x.js";import{u as i,w as S,a as m,e as t}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as ia}from"./testing.utils-DmLcTX3r.js";import{w as Je}from"./animation-DwV-fHIC.js";import{E as ut,S as mt,b as Ee,c as Se,a as Ae,A as Re,B as la,D as sa}from"./keyboard.constants-D1KJQ2-m.js";import{u as ca,a as da,g as ua,r as ma,b as pa,c as ya,d as ga,e as va,f as wa,h as Da,i as bt,j as ha,k as ba,l as pt,m as fa,n as ft,o as yt,p as xa,t as Ba,q as gt,s as ka,v as Ta,w as Ea,x as Sa,y as qe,z as Aa,A as Ra,B as _a,C as Ia,D as Ca,E as Fa,F as _e,G as X,H as Ye,I as xt,J as re}from"./DatePicker.stories.util-B_s8KU_y.js";import{g as Ha}from"./id.utils-DsO5Uws7.js";import{u as Na}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as Ma,A as qa}from"./Label-_Lstalw-.js";import{D as Ya}from"./Dropdown-C-WY_1Zk.js";import{a as ja,B as Oa,c as Pa,f as me}from"./picker.utils-CO9xT5l1.js";import{c as La}from"./string.utils-B_KtMSwu.js";import{B as Bt}from"./Button-DsgDr11R.js";import{D as vt}from"./Divider-BVZUrQ0d.js";import{I as ne}from"./IconButton-B1jvMDIw.js";import{c as pe}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-DMoGODOQ.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-DUkuUEsZ.js";import"./IconButton.module-CR53g8c2.js";const Ka={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Ga="_weekday_gltnx_101",x={"visually-hidden":"_visually-hidden_gltnx_1","rte-datepicker-dropdown":"_rte-datepicker-dropdown_gltnx_13","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_gltnx_32","nav-left":"_nav-left_gltnx_46","nav-right":"_nav-right_gltnx_47","month-label":"_month-label_gltnx_62","rte-datepicker-weekdays":"_rte-datepicker-weekdays_gltnx_92",weekday:Ga,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_gltnx_113","calendar-divider":"_calendar-divider_gltnx_119","day-row":"_day-row_gltnx_123","day-cell":"_day-cell_gltnx_130","day-cell__label":"_day-cell__label_gltnx_164","day-cell__surface":"_day-cell__surface_gltnx_168","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_gltnx_283","rte-datepicker-month-grid":"_rte-datepicker-month-grid_gltnx_297","rte-datepicker-year-grid":"_rte-datepicker-year-grid_gltnx_298","compact-row":"_compact-row_gltnx_305","month-cell":"_month-cell_gltnx_311","month-cell__label":"_month-cell__label_gltnx_346","year-cell":"_year-cell_gltnx_408","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_gltnx_495"},na=({isOpen:u,currentValue:l,hasActions:o,updateFullDate:s,updateDisplayedDate:r,onValidate:h,onCancel:D,displayValue:R,minDate:k,maxDate:F,disabledDates:A,onChange:z})=>{const[v,J]=p.useState(T.DAY),Z=p.useRef(null),[ge,be]=p.useState(null),[Qe,Ie]=p.useState(null);ca(Z,u,v);const{viewDate:E,setViewDate:Q,getNextDateForDayNavigation:et,getNextDateForCompactNavigation:tt}=da(l),[M,fe]=p.useState(null),[b,I]=p.useState(l??E),[K]=p.useState(l),ve=p.useMemo(()=>ua(),[]),q=p.useMemo(()=>({minDate:k,maxDate:F,disabledDates:A}),[k,F,A]),oe=e=>{const a=et(e);xe(a)},ie=(e,a)=>{const c=tt(e,a);xe(c)},xe=e=>{const a=Ba({anchorDay:Qe,viewDate:e,constraints:q});a!==null&&(fe(a),I(a),r(a))},Ce=p.useCallback(()=>{const e=ma({textValue:R.split(" ").join(""),constraints:q,pendingDate:M,selectedDate:l});Q(e.viewDate),Ie(e.monthNavigationAnchorDay)},[R,M,l,q,Q]),ee=p.useMemo(()=>{const e=E??l??new Date,a=v;return v===T.DAY?La(pa(e)):a===T.MONTH?ya(e):ga(e)},[v,E,l]),G=p.useMemo(()=>va({viewDate:E,selectedDate:M??l,minDate:k,maxDate:F,disabledDates:A}),[M,l,E,k,F,A]),le=p.useMemo(()=>wa({viewDate:E,selectedDate:M??l,minDate:k,maxDate:F,disabledDates:A}),[M,l,E,k,F,A]),se=p.useMemo(()=>Da({viewDate:E,selectedDate:M??l,minDate:k,maxDate:F,disabledDates:A}),[M,l,E,k,F,A]),at=()=>{v===T.DAY?(J(T.MONTH),De()):v===T.MONTH?(J(T.YEAR),ae()):(J(T.DAY),ue())},W=e=>{const a=xa({date:e,constraints:q});if(a!==null)if(o)r(a),fe(a),Q(a),I(a),Ie(a.getDate());else{s(a),be(a),z==null||z(a),h==null||h();return}},ce=e=>{const a=new Date(E.getFullYear(),e,1);Q(a),I(a),J(T.DAY),ue()},P=e=>{const a=new Date(e,E.getMonth(),1);Q(a),I(a),J(T.MONTH),De()},Be=e=>{const a=M??l;return a!==null&&yt(e,a)},de=e=>{if(e.key==="Escape"){D==null||D();return}const a=v;a===T.DAY?Fe(e):a===T.MONTH?He(e):nt(e)},Fe=e=>{if(!ke(e.target))return;if(e.stopPropagation(),[ut,mt].includes(e.key)){e.preventDefault();const c=b,y=G.find(B=>yt(B.date,c));y&&!y.isDisabled&&W(c);return}[Ee,Se,Ae,Re].includes(e.key)&&(e.preventDefault(),te(e.key))},He=e=>{if(!w(e.target))return;if(e.stopPropagation(),[ut,mt].includes(e.key)){e.preventDefault();const c=b.getMonth(),y=le.find(B=>B.monthIndex===c);y&&!y.isDisabled&&ce(c);return}[Ee,Se,Ae,Re].includes(e.key)&&(e.preventDefault(),we(e.key))},nt=e=>{if(!C(e.target))return;if(e.stopPropagation(),[ut,mt].includes(e.key)){e.preventDefault();const c=b.getFullYear(),y=se.find(B=>B.year===c);y&&!y.isDisabled&&P(c);return}[Ee,Se,Ae,Re].includes(e.key)&&(e.preventDefault(),Ne(e.key))},ke=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,w=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,C=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,te=e=>{const a=G,c=ft(a,b);if(c<0)return;const y=gt(e,"day"),B=Math.abs(y)===7?7:1,U=y>0?1:-1;let Y=c+y;for(;Y>=0&&Y<a.length&&a[Y].isDisabled;)Y+=U*B;if(Y<0||Y>=a.length){const _=ka(Ta(b,y));if(Me(_))return;he(_),ue();return}const j=a[Y].date;Ea(j,E)?I(j):he(j),ue()},we=e=>{const a=le,c=b.getMonth(),y=a.findIndex(g=>g.monthIndex===c);if(y<0)return;const B=gt(e,"monthYear"),U=Sa(b,B);if(U.getFullYear()!==E.getFullYear()){he(U),De();return}const Y=3,j=a.length;let _=qe({currentIndex:y,key:e,columnCount:Y,cellCount:j}),O=0;for(;_!==null&&a[_].isDisabled&&O<j;)_=qe({currentIndex:_,key:e,columnCount:Y,cellCount:j}),O+=1;if(_===null||a[_].isDisabled)return;const d=a[_].monthIndex;I(new Date(E.getFullYear(),d,1)),De()},Ne=e=>{const a=se,c=b.getFullYear(),y=a.findIndex(f=>f.year===c);if(y<0)return;const B=gt(e,"monthYear"),U=c+B;if(!a.map(f=>f.year).includes(U)){he(new Date(U,0,1)),ae();return}const j=3,_=a.length;let O=qe({currentIndex:y,key:e,columnCount:j,cellCount:_}),d=0;for(;O!==null&&a[O].isDisabled&&d<_;)O=qe({currentIndex:O,key:e,columnCount:j,cellCount:_}),d+=1;if(O===null||a[O].isDisabled)return;const g=a[O].year;I(new Date(g,0,1)),ae()},Me=e=>bt({date:e,...q}),ue=()=>{Je(()=>{const e=Z.current,a=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');a==null||a.focus()})},De=()=>{Je(()=>{const e=Z.current,a=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');a==null||a.focus()})},ae=()=>{Je(()=>{const e=Z.current,a=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');a==null||a.focus()})},rt=()=>{h==null||h();const e=M??l;be(e),fe(null),s(e)},ot=(e,a)=>yt(e,a)?0:-1,it=e=>e===b.getMonth()?0:-1,lt=e=>e===b.getFullYear()?0:-1,he=e=>{const a=q;let c=null;v===T.DAY?c=Aa({focusTargetDay:e,constraints:a}):v===T.MONTH?c=Ra({focusTargetMonthStart:e,constraints:a}):c=_a({focusTargetYear:e.getFullYear(),constraints:a}),c!==null&&(Q(c.viewDate),I(c.menuInitialActiveDate))};return p.useEffect(()=>{if(u)Ce(),ue();else{if(ge)return;if(K===null)s(null);else if(!bt({date:K,...q}))r(K);else{const e=ha(K,q);e&&s(e)}}},[u,Ce,l,r,K,ge,k,F,A,s,q]),p.useEffect(()=>{(()=>{if(v===T.DAY){const a=G;if(ft(a,b)>=0)return;const y=a.find(B=>!B.isDisabled);y&&I(y.date)}else if(v===T.MONTH){const a=le,c=b.getMonth();if(a.some(B=>B.monthIndex===c&&!B.isDisabled&&E.getFullYear()===b.getFullYear()))return;const y=a.find(B=>!B.isDisabled);y&&I(new Date(E.getFullYear(),y.monthIndex,1))}else{const a=se,c=b.getFullYear();if(a.some(B=>B.year===c&&!B.isDisabled))return;const y=a.find(B=>!B.isDisabled);y&&I(new Date(y.year,0,1))}})()},[E,b,v,G,le,se]),n.jsx(n.Fragment,{children:n.jsxs("div",{ref:Z,className:x["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:de,children:[n.jsxs("div",{className:x["rte-datepicker-dropdown-header"],children:[n.jsx("div",{className:x["nav-left"],children:v===T.DAY?n.jsxs(n.Fragment,{children:[n.jsx(ne,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":L.navPrevYear,onClick:()=>oe("prevYear")}),n.jsx(ne,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":L.navPrevMonth,onClick:()=>oe("prevMonth")})]}):v===T.MONTH?n.jsx(ne,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":L.navPrevCompact,onClick:()=>ie("previous","month")}):n.jsx(ne,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":L.navPrevCompact,onClick:()=>ie("previous","year")})}),v===T.YEAR?n.jsx("span",{className:pe(x["month-label"],"month-label-static"),children:ee}):n.jsx("button",{className:x["month-label"],onClick:at,"aria-label":`${ee}, afficher les ${v===T.DAY?"mois":"années"}`,"data-datepicker-tab":L.monthLabel,children:ee}),n.jsx("span",{className:x["visually-hidden"],role:"status","aria-live":"polite","aria-atomic":"true",children:ee}),n.jsx("div",{className:x["nav-right"],children:v===T.DAY?n.jsxs(n.Fragment,{children:[n.jsx(ne,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":L.navNextMonth,onClick:()=>oe("nextMonth")}),n.jsx(ne,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":L.navNextYear,onClick:()=>oe("nextYear")})]}):v===T.MONTH?n.jsx(ne,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":L.navNextCompact,onClick:()=>ie("next","month")}):n.jsx(ne,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":L.navNextCompact,onClick:()=>ie("next","year")})})]}),v===T.DAY?n.jsxs("div",{className:pe(x["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:[n.jsx("div",{className:x["rte-datepicker-weekdays"],role:"row",children:ba().map((e,a)=>n.jsx("div",{className:x.weekday,role:"columnheader","aria-label":ve[a],children:e},a))}),n.jsx("div",{className:x["calendar-divider"],"aria-hidden":"true",children:n.jsx(vt,{appearance:"brand"})}),pt(G,7).map((e,a)=>n.jsx("div",{className:x["day-row"],role:"row","aria-label":`${a}`,children:e.map(c=>n.jsxs("button",{type:"button",className:pe(x["day-cell"],"day-cell"),role:"gridcell","aria-selected":Be(c.date),onClick:()=>W(c.date),"aria-current":c.isCurrent?"date":void 0,tabIndex:ot(c.date,b),disabled:c.isDisabled,"data-cell-type":c.cellType,"data-datepicker-active":(b==null?void 0:b.toDateString())===c.date.toDateString()||void 0,children:[n.jsx("span",{className:x["day-cell__surface"],"aria-hidden":"true"}),n.jsx("span",{id:`day-label-${c.date.toISOString()}`,className:x["visually-hidden"],children:fa(c.date)}),n.jsx("span",{className:x["day-cell__label"],"aria-hidden":"true",children:c.label})]},c.date.toISOString()))},e[0].date.toISOString()+a))]}):v===T.MONTH?n.jsxs(n.Fragment,{children:[n.jsx(vt,{appearance:"brand"}),n.jsx("p",{className:x["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),n.jsx("div",{className:pe(x["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:pt(le,3).map(e=>n.jsx("div",{className:x["compact-row"],role:"row",children:e.map(a=>n.jsx("button",{type:"button",className:pe(x["month-cell"],"month-cell"),role:"gridcell","aria-selected":a.isSelected,tabIndex:it(a.monthIndex),"data-cell-month-index":a.monthIndex,"data-active-date-month":E.getMonth(),"data-active-date-year":b.getFullYear(),"data-active-view-year":E.getFullYear(),"data-datepicker-active":a.monthIndex===b.getMonth()&&E.getFullYear()===b.getFullYear()?!0:void 0,"data-current":a.isCurrent,disabled:a.isDisabled,"data-selected":a.isSelected,onClick:()=>ce(a.monthIndex),children:n.jsx("span",{className:x["month-cell__label"],children:a.label})},a.monthIndex))},e[0].monthIndex))})]}):n.jsxs(n.Fragment,{children:[n.jsx(vt,{appearance:"brand"}),n.jsx("p",{className:x["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),n.jsx("div",{className:pe(x["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:pt(se,3).map(e=>n.jsx("div",{className:x["compact-row"],role:"row",children:e.map(a=>n.jsx("button",{type:"button",className:pe(x["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(b==null?void 0:b.getFullYear())===a.year||null,"data-current":a.isCurrent,tabIndex:lt(a.year),"data-selected":a.isSelected,"aria-selected":a.isSelected,disabled:a.isDisabled,onClick:()=>P(a.year),children:a.label},a.year))},e[0].year))})]}),o&&n.jsxs("div",{className:x["rte-datepicker-dropdown-actions"],children:[n.jsx(Bt,{label:"Annuler",size:"s",variant:"transparent",onClick:D,"data-datepicker-tab":L.cancel}),n.jsx(Bt,{label:"Confirmer",size:"s",variant:"transparent",onClick:rt,"data-datepicker-tab":L.confirm})]})]})})};na.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Wa=/^\d*$/,wt=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[Te,je,Dt]=ra,V=p.forwardRef(({id:u,label:l,required:o=!1,showLabelRequirement:s=!1,disabled:r=!1,value:h,defaultValue:D,readonly:R=!1,onChange:k,hasActions:F=!0,onCancel:A,onValidate:z,minDate:v,maxDate:J,disabledDates:Z,isError:ge,assistiveTextLabel:be,errorMessage:Qe,assistiveAppearance:Ie="description",showAssistiveIcon:E=!1,assistiveTextLink:Q,width:et="248px",isCompact:tt=!1,placeholder:M="jj / mm / yyyy"},fe)=>{var O;const[b,I]=p.useState(!1),[K,ve]=p.useState(!1),q=u??`datepicker-${Ha()}`,oe=ge&&Qe||be,ie=oe&&!K,xe=`${q}-assistive-text`,Ce=h!==void 0,ee=p.useRef(h??D??null),G=Ce?h??null:ee.current,{increaseActiveSegmentValue:le,decreaseActiveSegmentValue:se,resetActiveSegmentValue:at,updateDateSegment:W,updateFullDate:ce,internalValue:P,displayValue:Be,dateState:de,updateDisplayedDate:Fe}=Ia(r?null:G,{minDate:v,maxDate:J,disabledDates:Z}),{moveToNextSegment:He,moveToPreviousSegment:nt,setActiveDateSegment:ke,activeDateSegment:w}=Ca(),C=p.useRef(k),te=p.useRef(G??null);p.useEffect(()=>{C.current=k},[k]),p.useEffect(()=>{r||(te.current=G??null)},[G,r]),p.useEffect(()=>{var d,g,f;if(r){ee.current=null,I(!1),ve(!1),ce(null),(te.current!==null||!wt(de))&&(te.current=null,(d=C.current)==null||d.call(C,null));return}if(P===null&&!wt(de)){(g=C.current)==null||g.call(C,P);return}ja(te.current,P)||(te.current=P,(f=C.current)==null||f.call(C,P))},[P,de,r,ce]);const we=p.useRef(null),Ne=p.useRef(null),Me=p.useRef(null),ue=Na(we.current),De=()=>{rt(),y(w)},ae=(d=!1)=>{var g;I(d),ve(!1),d&&((g=Me.current)==null||g.focus({preventScroll:!0}))},rt=()=>{r||I(!0)},ot=()=>{r||ve(!0)},it=d=>{const g=d.key;if(d.stopPropagation(),y(w),[Ae,Re,Ee,Se,la,sa].includes(g))d.preventDefault(),lt(g);else if(Wa.test(g))d.preventDefault(),he(g);else return},lt=d=>{d===Se?He():d===Ee?nt():d===Ae?le(w):d===Re?se(w):at(w)},he=d=>{const f=de[`${w===Te?"day":w===je?"month":"year"}Digits`];w===Dt&&f.length>=4?e(f,d):a(f,d)},e=(d,g)=>{const f=Array.from(d).findIndex(H=>H!=="0");if(f===0){const H=me(Number(g),w);W(w,H)}else{const H=d.slice(f)+g,$=me(Math.min(Number(H),dt[w]),w);W(w,$)}},a=(d,g)=>{if(d.length>=2)if(d[0]==="0"){const f=Number(d[1]+g),H=me(Math.min(f,dt[w]),w);W(w,H),He()}else{const f=me(Number(g),w);W(w,f)}else{const f=`${d}${g}`,H=oa[w];if(d.length===0&&Number(g)>H){const $=me(Number(g),w);W(w,$)}else if(f.length===2){const $=me(Math.min(Number(f),dt[w]),w);W(w,$)}else{const $=me(Number(g),w);W(w,$)}}},c=()=>{var H;K&&ve(!1);const d=((H=we.current)==null?void 0:H.selectionStart)??0,g=Pa(),f=1;d<=g[Te][f]+1?y(Te):d<=g[je][f]+1?y(je):y(Dt)},y=p.useCallback(d=>{ke(d);const g=3,f=d===Te?0:d===je?2+g:0+2*(2+g),H=d===Dt?f+4:f+2;Je(()=>{var $;($=we.current)==null||$.setSelectionRange(f,H)})},[ke]),B=()=>{A==null||A(),ae(!0)},U=()=>{z==null||z(),ae(!0)},Y=d=>{var g;d.stopPropagation(),ee.current=null,te.current=null,ce(null),Fe(null),ke(Te),(g=C.current)==null||g.call(C,null),ae(!0)};p.useEffect(()=>{y(w)},[w,y]);const j=wt(de)&&!/\d/.test(Be),_=!!M&&!r&&!R&&j;return n.jsxs("div",{className:Ka["rte-date-picker"],style:{minWidth:"248px",width:et},ref:fe,children:[n.jsx(Ma,{htmlFor:q,label:l,required:o,showLabelRequirement:s}),n.jsx(Ya,{style:{width:(O=Ne.current)==null?void 0:O.offsetWidth},isList:!1,isOpen:K&&!r,onClose:ae,offset:8,overlayLevel:ue,trigger:n.jsx(Oa,{id:q,ariaDescribedBy:ie?xe:void 0,icon:"calendar-month",onFocus:De,isFocused:b,pickerInputRef:we,onOpenPicker:ot,value:j||r?"":Be,placeholder:_?M:void 0,onKeyDown:it,onMouseUp:c,onChange:()=>{},fixedWidth:!1,pickerRef:Ne,openButtonRef:Me,openButtonAriaLabel:Fa(P),isError:ge,disabled:r,readOnly:R,required:o,isCompact:tt,onClickReset:Y}),position:"bottom",children:!r&&n.jsx(na,{isOpen:K,currentValue:P,hasActions:F,onValidate:U,onCancel:B,updateDisplayedDate:Fe,updateFullDate:ce,displayValue:Be,minDate:v,maxDate:J,disabledDates:Z})},r?"disabled":"enabled"),ie&&n.jsx(qa,{id:xe,label:oe,appearance:ge?"error":Ie,showIcon:E,href:Q})]})});V.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1},isCompact:{defaultValue:{value:"false",computed:!1},required:!1},placeholder:{defaultValue:{value:'"jj / mm / yyyy"',computed:!1},required:!1}},composes:["Omit"]};const An={title:"Composants/DatePicker/DatePicker",component:V,tags:["autodocs"]},N={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})}},Oe={tags:["!autodocs"],parameters:{a11y:{test:"error",options:{runOnly:{type:"rule",values:["aria-required-parent","aria-required-children"]}}}},args:{...N.args,value:void 0,defaultValue:new Date(2026,2,31),disabledDates:[new Date(2026,2,16)]},play:async({canvasElement:u})=>{await i.click(S(u).getByRole("button",{name:_e}));const l=await X(),o=S(l);Ye(o.getByRole("grid",{name:"Calendrier"}),7);const s=["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];await m(()=>{xt(o.getByRole("grid",{name:"Calendrier"}),s)});const r=o.getByRole("status");t(r).toHaveAttribute("aria-atomic","true"),t(r).toHaveAttribute("aria-live","polite"),t(r.childElementCount).toBe(0),t(r.closest("button")).toBeNull(),t(o.getByRole("button",{name:"Mars 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),t(r).toHaveTextContent(/^Mars 2026$/);const h=o.getByRole("gridcell",{name:"dimanche 15 mars 2026"});t(S(h).getByText("15")).toBeInTheDocument(),t(S(h).getByText("dimanche 15 mars 2026")).not.toHaveAttribute("aria-hidden","true"),t(o.getByRole("gridcell",{name:"lundi 16 mars 2026"})).toBeDisabled(),t(S(o.getByRole("gridcell",{name:"lundi 23 février 2026"})).getByText("23")).toBeInTheDocument(),t(S(o.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).getByText("1")).toBeInTheDocument(),await m(()=>{for(const D of o.getAllByRole("gridcell")){const R=S(D).getByText(/^\d+$/);t(R).toBeVisible(),t(R).toHaveAttribute("aria-hidden","true"),t(D).not.toHaveAttribute("aria-hidden","true"),t(D).not.toHaveAttribute("aria-label")}}),await m(()=>{t(o.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toHaveFocus()}),await i.keyboard(ht),await m(()=>{t(o.getByRole("gridcell",{name:"mercredi 1 avril 2026"})).toHaveFocus(),t(r).toHaveTextContent("Avril 2026")}),t(o.getByRole("gridcell",{name:"mardi 31 mars 2026",selected:!0})).toBeInTheDocument(),await i.keyboard(ye),await m(()=>{t(o.getByRole("gridcell",{name:"mardi 31 mars 2026"})).toHaveFocus(),t(r).toHaveTextContent("Mars 2026")}),await i.click(o.getByRole("button",{name:"Mois suivant"})),await m(()=>t(r).toHaveTextContent(/^Avril 2026$/)),t(o.getByRole("button",{name:"Avril 2026, afficher les mois"}).closest("[aria-live]")).toBeNull(),await i.click(o.getByRole("button",{name:"Année suivante"})),await m(()=>t(r).toHaveTextContent("Avril 2027")),await i.click(o.getByRole("button",{name:"Année précédente"})),await m(()=>t(r).toHaveTextContent("Avril 2026")),await i.click(o.getByRole("button",{name:"Mois précédent"})),await m(()=>t(r).toHaveTextContent("Mars 2026")),await i.click(o.getByRole("button",{name:"Mars 2026, afficher les mois"})),await m(()=>t(r).toHaveTextContent(/^2026$/)),Ye(o.getByRole("grid",{name:"Mois"}),3),await i.click(o.getByRole("button",{name:"Année suivante"})),await m(()=>t(r).toHaveTextContent(/^2027$/)),await i.click(o.getByRole("button",{name:"Année précédente"})),await m(()=>t(r).toHaveTextContent(/^2026$/)),o.getByRole("gridcell",{name:"mars"}).focus(),t(o.getByRole("gridcell",{name:"mars"})).toHaveFocus();for(const D of["février","janvier","décembre"])await i.keyboard(ye),await m(()=>t(o.getByRole("gridcell",{name:D})).toHaveFocus());t(r).toHaveTextContent(/^2025$/),await i.click(o.getByRole("button",{name:"2025, afficher les années"})),await m(()=>t(r).toHaveTextContent("2020 – 2030")),Ye(o.getByRole("grid",{name:"Années"}),3),await i.click(o.getByRole("button",{name:"Décennie suivante"})),await m(()=>t(r).toHaveTextContent("2030 – 2040")),await i.click(o.getByRole("button",{name:"Décennie précédente"})),await m(()=>t(r).toHaveTextContent("2020 – 2030")),o.getByRole("gridcell",{name:"2025"}).focus();for(let D=2024;D>=2019;D--)await i.keyboard(ye),await m(()=>t(o.getByRole("gridcell",{name:String(D)})).toHaveFocus());t(r).toHaveTextContent("2010 – 2020"),t(l.querySelector('[aria-live="polite"]')).toBe(r),await i.click(o.getByRole("gridcell",{name:"2019"})),await i.click(o.getByRole("gridcell",{name:"mars"})),await m(()=>{const D=o.getByRole("grid",{name:"Calendrier"});Ye(D,7),xt(D,s)})}},Pe={args:{...N.args,disabled:!0}},Le={args:{...N.args,isError:!0},play:async({canvasElement:u})=>{const l=S(u);t(l.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Ke={args:{...N.args,value:void 0},render:u=>{const{value:l,...o}=u;return n.jsx(V,{...o,defaultValue:new Date(2026,5,15)})}},Ge={tags:["!autodocs"],args:{...N.args,value:null},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})},play:async({canvasElement:u})=>{ia(),await i.tab();for(const o of"15062023")await i.keyboard(o);const l=u.querySelector("input");t(re(l)).toBe("15/06/2023"),await i.keyboard(Xe),t(re(l)).toBe("15/06/2022"),await i.keyboard(st),t(re(l)).toBe("15/06/2023"),await i.keyboard(ye),await i.keyboard(st),t(re(l)).toBe("15/07/2023"),await i.keyboard(ye),await i.keyboard(st),t(re(l)).toBe("16/07/2023"),await i.keyboard(ht),await i.keyboard(Xe),await i.keyboard(Xe),t(re(l)).toBe("16/05/2023")}},We={args:{...N.args,value:null},render:u=>{const[l,o]=p.useState(new Date(2026,5,10));return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:8},children:[n.jsx("button",{onClick:()=>o(new Date(2026,5,22)),children:"Set to 22/06/2026"}),n.jsx("button",{onClick:()=>o(null),children:"Clear"})]}),n.jsx(V,{...u,value:l,onChange:o})]})}},$e={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})},play:async({canvasElement:u})=>{const o=S(u).getByRole("button",{name:_e});await i.click(o);let s=await X(),r=s.querySelector("[role='dialog']");t(r).toBeInTheDocument();const h=s.querySelectorAll(".day-cell");t(h.length).toBeGreaterThan(0),await i.click(h[10]),await i.click(S(s).getByRole("button",{name:/confirmer/i})),await m(()=>{t(r).not.toBeInTheDocument()}),await i.click(o),s=await X(),r=s.querySelector("[role='dialog']"),t(r).toBeInTheDocument();const D=s.querySelector(".day-cell[data-datepicker-active='true']");t(D).toBeInTheDocument(),t(D).toHaveFocus(),await i.keyboard("{Escape}")}},Ve={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})},play:async({canvasElement:u})=>{const o=S(u).getByRole("button",{name:_e});await i.click(o);let s=await X();await i.tab(),await m(()=>{t(S(s).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await m(()=>{t(S(s).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await m(()=>{t(S(s).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const r=S(s);t(r.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),t(r.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),t(r.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),t(r.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const h=s.querySelector('[data-datepicker-tab="month-label"]');t(h).toBeTruthy(),await i.click(h),await m(()=>{t(s.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),t(s.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),t(r.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),t(r.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),t(r.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),t(r.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const D=s.querySelector('[data-datepicker-tab="month-label"]');t(D).toBeTruthy(),await i.click(D),await m(()=>{t(s.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),t(s.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),t(r.getByText("Sélectionner une année")).toBeInTheDocument(),t(r.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),t(r.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),t(s.querySelector(".month-label-static")).toBeInTheDocument(),t(s.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),t(s.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ze),await m(()=>{t(s).not.toBeInTheDocument(),t(o).toHaveFocus()}),await i.click(o),s=await X(),await m(()=>{const v=s.querySelector('.day-cell[data-datepicker-active="true"]');t(v).toBeInTheDocument(),t(v).toHaveFocus()});const R=s.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const k=S(s).getByRole("button",{name:/^annuler$/i});t(k).toHaveFocus(),await i.keyboard(Xe),t(k).toHaveFocus(),await i.tab({shift:!0}),t(R).toHaveFocus(),await i.keyboard(ht),await m(()=>{const v=s.querySelector('.day-cell[data-datepicker-active="true"]');t(v).toBeInTheDocument(),t(v).toHaveFocus(),t(v).not.toBe(R)}),await i.keyboard(Ze),await m(()=>{t(s).not.toBeInTheDocument(),t(o).toHaveFocus()}),await i.click(o),s=await X();const F=s.querySelector('[data-datepicker-tab="month-label"]');t(F).toBeTruthy(),await i.click(F),await m(()=>{t(s.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const A=s.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");t(A).toBeTruthy(),await m(()=>{t(A).toHaveFocus()}),await i.tab(),await m(()=>{t(S(s).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),t(A).toHaveFocus();const z=S(s).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),t(z).toHaveFocus(),await i.tab(),t(A).toHaveFocus()}},ze={tags:["!autodocs"],args:{...N.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})},play:async({canvasElement:u})=>{const l=S(u),o=l.getByRole("button",{name:_e});o.focus();const s=u.querySelector("input");await i.click(l.getByRole("textbox")),await i.keyboard("03012020"),await m(()=>t(re(s)).toBe("03/01/2020")),await i.click(o);let r=await X(),h=r.querySelector("[role='dialog']");t(h).toBeInTheDocument(),await m(()=>{const k=r.querySelector('.day-cell[data-datepicker-active="true"]');t(k).toBeInTheDocument(),t(k).toHaveFocus()});const D=r.querySelectorAll(".day-cell[disabled]");t(D.length).toBe(2),await i.keyboard(Ze),await m(()=>{t(h).not.toBeInTheDocument(),t(o).toHaveFocus()}),await i.tab({shift:!0}),await i.tab({shift:!0}),await i.keyboard(ct),await i.keyboard(ye),await i.keyboard(ct),await i.keyboard(ye),await i.keyboard(ct);for(const k of"20082024")await i.keyboard(k);await i.click(o),r=await X(),h=r.querySelector("[role='dialog']"),t(h).toBeInTheDocument(),await m(()=>{const k=r.querySelector('.day-cell[data-datepicker-active="true"]');t(k).toBeInTheDocument(),t(k).toHaveFocus()});const R=r.querySelectorAll(".day-cell[disabled]");t(R.length).toBe(7),await i.keyboard(Ze),await m(()=>{t(h).not.toBeInTheDocument(),t(o).toHaveFocus()})}},Ue={tags:["!autodocs"],args:{...N.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:u=>{const[l,o]=p.useState(null),s=r=>{o(r)};return n.jsxs(n.Fragment,{children:[n.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",l?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(l):"aucune"]}),n.jsx(V,{...u,value:l,onChange:s})]})},play:async({canvasElement:u})=>{const l=S(u),o=l.getByRole("button",{name:_e});o.focus();const s=u.querySelector("input");await i.click(l.getByRole("textbox")),await i.keyboard("14062023"),await m(()=>t(re(s)).toBe("14/06/2023")),await i.click(o);const r=await X(),h=r.querySelector("[role='dialog']");t(h).toBeInTheDocument(),await m(()=>{const R=r.querySelector('.day-cell[data-datepicker-active="true"]');t(R).toBeInTheDocument(),t(R).toHaveFocus()});const D=r.querySelectorAll(".day-cell[disabled]");t(D.length).toBe(2)}};var kt,Tt,Et;N.parameters={...N.parameters,docs:{...(kt=N.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Et=(Tt=N.parameters)==null?void 0:Tt.docs)==null?void 0:Et.source}}};var St,At,Rt;Oe.parameters={...Oe.parameters,docs:{...(St=Oe.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(Rt=(At=Oe.parameters)==null?void 0:At.docs)==null?void 0:Rt.source}}};var _t,It,Ct;Pe.parameters={...Pe.parameters,docs:{...(_t=Pe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Ct=(It=Pe.parameters)==null?void 0:It.docs)==null?void 0:Ct.source}}};var Ft,Ht,Nt;Le.parameters={...Le.parameters,docs:{...(Ft=Le.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Ht=Le.parameters)==null?void 0:Ht.docs)==null?void 0:Nt.source}}};var Mt,qt,Yt;Ke.parameters={...Ke.parameters,docs:{...(Mt=Ke.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Yt=(qt=Ke.parameters)==null?void 0:qt.docs)==null?void 0:Yt.source}}};var jt,Ot,Pt;Ge.parameters={...Ge.parameters,docs:{...(jt=Ge.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Pt=(Ot=Ge.parameters)==null?void 0:Ot.docs)==null?void 0:Pt.source}}};var Lt,Kt,Gt;We.parameters={...We.parameters,docs:{...(Lt=We.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
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
}`,...(Gt=(Kt=We.parameters)==null?void 0:Kt.docs)==null?void 0:Gt.source}}};var Wt,$t,Vt;$e.parameters={...$e.parameters,docs:{...(Wt=$e.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
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
}`,...(Vt=($t=$e.parameters)==null?void 0:$t.docs)==null?void 0:Vt.source}}};var zt,Ut,Xt;Ve.parameters={...Ve.parameters,docs:{...(zt=Ve.parameters)==null?void 0:zt.docs,source:{originalSource:`{
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
}`,...(Xt=(Ut=Ve.parameters)==null?void 0:Ut.docs)==null?void 0:Xt.source}}};var Jt,Zt,Qt;ze.parameters={...ze.parameters,docs:{...(Jt=ze.parameters)==null?void 0:Jt.docs,source:{originalSource:`{
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
    const input = canvasElement.querySelector("input");
    await userEvent.click(canvas.getByRole("textbox"));
    await userEvent.keyboard("03012020");
    await waitFor(() => expect(normalizedDateInputValue(input)).toBe("03/01/2020"));
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
}`,...(Qt=(Zt=ze.parameters)==null?void 0:Zt.docs)==null?void 0:Qt.source}}};var ea,ta,aa;Ue.parameters={...Ue.parameters,docs:{...(ea=Ue.parameters)==null?void 0:ea.docs,source:{originalSource:`{
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
    const input = canvasElement.querySelector("input");
    await userEvent.click(canvas.getByRole("textbox"));
    await userEvent.keyboard("14062023");
    await waitFor(() => expect(normalizedDateInputValue(input)).toBe("14/06/2023"));
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
}`,...(aa=(ta=Ue.parameters)==null?void 0:ta.docs)==null?void 0:aa.source}}};const Rn=["Default","AccessibleDateAnnouncements","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{Oe as AccessibleDateAnnouncements,We as ControlledPropUpdate,N as Default,Pe as Disabled,Ue as DisabledDates,Le as Error,Ve as TabNavigation,Ge as TypingDate,Ke as UncontrolledDefaultValue,$e as WithAction,ze as WithMinMax,Rn as __namedExportsOrder,An as default};
