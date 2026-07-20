import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ke,b as Pe,c as Gt,d as nt,e as ze,f as rt}from"./keyboard-test.constants-C4IJ8E3i.js";import{D as w,c as z,a as Vt,d as ot,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as N,u as i,e as n,a as T}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-mIZIUNbM.js";import{w as Oe}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as ye,c as De,a as we,A as ve,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,r as Qt,g as ea,a as ta,b as aa,c as na,d as ra,e as oa,i as pt,f as sa,h as ia,j as mt,k as lt,n as la,t as ca,l as ct,s as da,m as ua,o as pa,p as _e,q as ma,v as ga,w as ya,x as Da,y as wa,z as va,A as Le,B as U,C as oe}from"./DatePicker.stories.util-CLvvTiIx.js";import{L as ha,A as fa}from"./Label-BaZEr-h0.js";import{B as ba}from"./BaseDropdown-jZPuSjNL.js";import{a as ka,B as Ta,c as xa,f as Q}from"./picker.utils-DE9aSKE1.js";import{u as Ba}from"./useFocusTrap-D2ZnoMa2.js";import{B as gt}from"./Button-DVlmZND_.js";import{D as dt}from"./Divider-BMotkXeQ.js";import{I as $}from"./IconButton-en7B25KO.js";import{c as ee}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Link-BXut70Xg.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-DkJhvK8e.js";const Ea={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Sa="_weekday_1tzza_85",b={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:Sa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Wt=({isOpen:p,currentValue:o,hasAction:c,updateFullDate:r,updateDisplayedDate:d,onValidate:f,onCancel:v,displayValue:x,minDate:_,maxDate:B,disabledDates:E,onChange:j})=>{const[g,L]=m.useState(w.DAY),G=m.useRef(null),[se,ie]=m.useState(null),[he,fe]=m.useState(null);Ba(G.current,p,!1);const{viewDate:h,setViewDate:W,getNextDateForDayNavigation:Ge,getNextDateForCompactNavigation:We}=Jt(o),[R,te]=m.useState(null),[y,S]=m.useState(o??h),[X]=m.useState(o),q=m.useMemo(()=>({minDate:_,maxDate:B,disabledDates:E}),[_,B,E]),ae=e=>{const t=Ge(e);be(t)},P=(e,t)=>{const s=We(e,t);be(s)},be=e=>{const t=ca({anchorDay:he,viewDate:e,constraints:q});t!==null&&(te(t),S(t),d(t))},ke=m.useCallback(()=>{const e=Qt({textValue:x.split(" ").join(""),constraints:q,pendingDate:R,selectedDate:o});W(e.viewDate),fe(e.monthNavigationAnchorDay)},[x,R,o,q,W]),le=m.useMemo(()=>{const e=h??o??new Date,t=g;return g===w.DAY?ea(e):t===w.MONTH?ta(e):aa(e)},[g,h,o]),C=m.useMemo(()=>na({viewDate:h,selectedDate:R??o,minDate:_,maxDate:B,disabledDates:E}),[R,o,h,_,B,E]),Z=m.useMemo(()=>ra({viewDate:h,selectedDate:R??o,minDate:_,maxDate:B,disabledDates:E}),[R,o,h,_,B,E]),I=m.useMemo(()=>oa({viewDate:h,selectedDate:R??o,minDate:_,maxDate:B,disabledDates:E}),[R,o,h,_,B,E]),Te=()=>{g===w.DAY?(L(w.MONTH),re()):g===w.MONTH?(L(w.YEAR),me()):(L(w.DAY),J())},ne=e=>{const t=la({date:e,constraints:q});if(t!==null)if(c)d(t),te(t),W(t),S(t),fe(t.getDate());else{r(t),ie(t),j==null||j(t),f==null||f();return}},xe=e=>{const t=new Date(h.getFullYear(),e,1);W(t),S(t),L(w.DAY),J()},ce=e=>{const t=new Date(e,h.getMonth(),1);W(t),S(t),L(w.MONTH),re()},Ve=e=>{const t=R??o;return t!==null&&lt(e,t)},Be=e=>{if(e.key==="Escape"){v==null||v();return}const t=g;t===w.DAY?D(e):t===w.MONTH?O(e):de(e)},D=e=>{if(!ue(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const s=y,l=C.find(u=>lt(u.date,s));l&&!l.isDisabled&&ne(s);return}[ye,De,we,ve].includes(e.key)&&(e.preventDefault(),pe(e.key))},O=e=>{if(!Ee(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const s=y.getMonth(),l=Z.find(u=>u.monthIndex===s);l&&!l.isDisabled&&xe(s);return}[ye,De,we,ve].includes(e.key)&&(e.preventDefault(),Ue(e.key))},de=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const s=y.getFullYear(),l=I.find(u=>u.year===s);l&&!l.isDisabled&&ce(s);return}[ye,De,we,ve].includes(e.key)&&(e.preventDefault(),Xe(e.key))},ue=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ee=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,$e=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,pe=e=>{const t=C,s=mt(t,y);if(s<0)return;const l=ct(e,"day"),u=Math.abs(l)===7?7:1,k=l>0?1:-1;let M=s+l;for(;M>=0&&M<t.length&&t[M].isDisabled;)M+=k*u;if(M<0||M>=t.length){const A=da(ua(y,l));if(Ze(A))return;ge(A),J();return}const V=t[M].date;S(V),J()},Ue=e=>{const t=Z,s=y.getMonth(),l=t.findIndex(tt=>tt.monthIndex===s);if(l<0)return;const u=ct(e,"monthYear"),k=pa(y,u);if(k.getFullYear()!==h.getFullYear()){ge(k),re();return}const M=3,V=t.length;let A=_e({currentIndex:l,key:e,columnCount:M,cellCount:V}),Y=0;for(;A!==null&&t[A].isDisabled&&Y<V;)A=_e({currentIndex:A,key:e,columnCount:M,cellCount:V}),Y+=1;if(A===null||t[A].isDisabled)return;const Se=t[A].monthIndex;S(new Date(h.getFullYear(),Se,1)),re()},Xe=e=>{const t=I,s=y.getFullYear(),l=t.findIndex(at=>at.year===s);if(l<0)return;const u=ct(e,"monthYear"),k=s+u;if(!t.map(at=>at.year).includes(k)){ge(new Date(k,0,1)),me();return}const V=3,A=t.length;let Y=_e({currentIndex:l,key:e,columnCount:V,cellCount:A}),Se=0;for(;Y!==null&&t[Y].isDisabled&&Se<A;)Y=_e({currentIndex:Y,key:e,columnCount:V,cellCount:A}),Se+=1;if(Y===null||t[Y].isDisabled)return;const tt=t[Y].year;S(new Date(tt,0,1)),me()},Ze=e=>pt({date:e,...q}),J=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},re=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},me=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Je=()=>{f==null||f();const e=R??o;ie(e),te(null),r(e)},Qe=(e,t)=>lt(e,t)?0:-1,K=e=>e===y.getMonth()?0:-1,et=e=>e===y.getFullYear()?0:-1,ge=e=>{const t=q;let s=null;g===w.DAY?s=ma({focusTargetDay:e,constraints:t}):g===w.MONTH?s=ga({focusTargetMonthStart:e,constraints:t}):s=ya({focusTargetYear:e.getFullYear(),constraints:t}),s!==null&&(W(s.viewDate),S(s.menuInitialActiveDate))};return m.useEffect(()=>{if(p)ke(),J();else{if(se)return;if(X===null)r(null);else if(!pt({date:X,...q}))d(X);else{const e=sa(X,q);e&&r(e)}}},[p,ke,o,d,X,se,_,B,E,r,q]),m.useEffect(()=>{(()=>{if(g===w.DAY){const t=C;if(mt(t,y)>=0)return;const l=t.find(u=>!u.isDisabled);l&&S(l.date)}else if(g===w.MONTH){const t=Z,s=y.getMonth();if(t.some(u=>u.monthIndex===s&&!u.isDisabled&&h.getFullYear()===y.getFullYear()))return;const l=t.find(u=>!u.isDisabled);l&&S(new Date(h.getFullYear(),l.monthIndex,1))}else{const t=I,s=y.getFullYear();if(t.some(u=>u.year===s&&!u.isDisabled))return;const l=t.find(u=>!u.isDisabled);l&&S(new Date(l.year,0,1))}})()},[h,y,g,C,Z,I]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:G,className:b["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Be,children:[a.jsxs("div",{className:b["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:b["nav-left"],children:g===w.DAY?a.jsxs(a.Fragment,{children:[a.jsx($,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>ae("prevYear")}),a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>ae("prevMonth")})]}):g===w.MONTH?a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>P("previous","month")}):a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>P("previous","year")})}),g===w.YEAR?a.jsx("span",{className:ee(b["month-label"],"month-label-static"),children:le}):a.jsx("button",{className:b["month-label"],onClick:Te,"aria-label":`Changer de vue, ${le} , appuyer pour voir les ${g===w.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:le}),a.jsx("div",{className:b["nav-right"],children:g===w.DAY?a.jsxs(a.Fragment,{children:[a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>ae("nextMonth")}),a.jsx($,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>ae("nextYear")})]}):g===w.MONTH?a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>P("next","month")}):a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>P("next","year")})})]}),g===w.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:b["rte-datepicker-weekdays"],"aria-hidden":"true",children:ia().map((e,t)=>a.jsx("div",{className:b.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:ee(b["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:C.map(e=>a.jsxs("button",{type:"button",className:ee(b["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ne(e.date),"aria-selected":Ve(e.date),tabIndex:Qe(e.date,y),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(y==null?void 0:y.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:b["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:b["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):g===w.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ee(b["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:Z.map(e=>a.jsx("button",{type:"button",className:ee(b["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:K(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":h.getMonth(),"data-active-date-year":y.getFullYear(),"data-active-view-year":h.getFullYear(),"data-datepicker-active":e.monthIndex===y.getMonth()&&h.getFullYear()===y.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>xe(e.monthIndex),children:a.jsx("span",{className:b["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:b["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ee(b["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:I.map(e=>a.jsx("button",{type:"button",className:ee(b["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(y==null?void 0:y.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:et(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>ce(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:b["rte-datepicker-dropdown-actions"],children:[a.jsx(gt,{label:"Annuler",size:"s",variant:"transparent",onClick:v}),a.jsx(gt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Je})]})]})})};Wt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const _a=/^\d*$/,Ia=p=>p.dayDigits===""&&p.monthDigits===""&&p.yearDigits==="",[Ie,Ae,ut]=Vt,H=m.forwardRef(({id:p,label:o,labelId:c,required:r=!1,showLabelRequirement:d=!1,disabled:f=!1,value:v,defaultValue:x,readonly:_=!1,onChange:B,hasAction:E=!1,onCancel:j,onValidate:g,minDate:L,maxDate:G,disabledDates:se,isError:ie,assistiveTextLabel:he,assistiveAppearance:fe="description",showAssistiveIcon:h=!1,assistiveTextLink:W,width:Ge="248px"},We)=>{var e;const[R,te]=m.useState(!1),[y,S]=m.useState(!1),X=he&&!y,q=v!==void 0,ae=m.useRef(v??x??null),P=q?v??null:ae.current,{increaseActiveSegmentValue:be,decreaseActiveSegmentValue:ke,resetActiveSegmentValue:le,updateDateSegment:C,updateFullDate:Z,internalValue:I,displayValue:Te,dateState:ne,updateDisplayedDate:xe}=Da(P,{minDate:L,maxDate:G,disabledDates:se}),{moveToNextSegment:ce,moveToPreviousSegment:Ve,setActiveDateSegment:Be,activeDateSegment:D}=wa(),O=m.useRef(B),de=m.useRef(P??null);m.useEffect(()=>{O.current=B},[B]),m.useEffect(()=>{de.current=P??null},[P]),m.useEffect(()=>{var t,s;if(I===null&&!Ia(ne)){(t=O.current)==null||t.call(O,I);return}ka(de.current,I)||(de.current=I,(s=O.current)==null||s.call(O,I))},[I,ne]);const ue=m.useRef(null),Ee=m.useRef(null),$e=()=>{Ue(),K(D)},pe=()=>{te(!1),S(!1)},Ue=()=>{f||te(!0)},Xe=()=>{f||S(!0)},Ze=t=>{const s=t.key;if(t.stopPropagation(),K(D),[we,ve,ye,De,Xt,Zt].includes(s))t.preventDefault(),J(s);else if(_a.test(s))t.preventDefault(),re(s);else return},J=t=>{t===De?ce():t===ye?Ve():t===we?be(D):t===ve?ke(D):le(D)},re=t=>{const l=ne[`${D===Ie?"day":D===Ae?"month":"year"}Digits`];D===ut&&l.length>=4?me(l,t):Je(l,t)},me=(t,s)=>{const l=Array.from(t).findIndex(u=>u!=="0");if(l===0){const u=Q(Number(s),D);C(D,u)}else{const u=t.slice(l)+s,k=Q(Math.min(Number(u),ot[D]),D);C(D,k)}},Je=(t,s)=>{if(t.length>=2)if(t[0]==="0"){const l=Number(t[1]+s),u=Q(Math.min(l,ot[D]),D);C(D,u),ce()}else{const l=Q(Number(s),D);C(D,l)}else{const l=`${t}${s}`,u=$t[D];if(t.length===0&&Number(s)>u){const k=Q(Number(s),D);C(D,k)}else if(l.length===2){const k=Q(Math.min(Number(l),ot[D]),D);C(D,k)}else{const k=Q(Number(s),D);C(D,k)}}},Qe=()=>{var u;y&&S(!1);const t=((u=ue.current)==null?void 0:u.selectionStart)??0,s=xa(),l=1;t<=s[Ie][l]+1?K(Ie):t<=s[Ae][l]+1?K(Ae):K(ut)},K=m.useCallback(t=>{Be(t);const s=3,l=t===Ie?0:t===Ae?2+s:0+2*(2+s),u=t===ut?l+4:l+2;Oe(()=>{var k;(k=ue.current)==null||k.setSelectionRange(l,u)})},[Be]),et=()=>{j==null||j(),pe()},ge=()=>{g==null||g(),pe()};return m.useEffect(()=>{K(D)},[D,K]),a.jsxs("div",{className:Ea["rte-date-picker"],style:{minWidth:"248px",width:Ge},ref:We,children:[a.jsx(ha,{id:c,label:o,required:r,showLabelRequirement:d}),a.jsx(ba,{style:{width:(e=Ee.current)==null?void 0:e.offsetWidth},isList:!1,isOpen:y,onClose:pe,offset:8,trigger:a.jsx(Ta,{id:p,ariaLabelledBy:c??o,icon:"calendar-month",onFocus:$e,isFocused:R,pickerInputRef:ue,onOpenPicker:Xe,value:Te,onKeyDown:Ze,onMouseUp:Qe,onChange:()=>{},fixedWidth:!1,pickerRef:Ee,openButtonAriaLabel:va(I),isError:ie,disabled:f,readOnly:_}),position:"bottom",children:a.jsx(Wt,{isOpen:y,currentValue:I,hasAction:E,onValidate:ge,onCancel:et,updateDisplayedDate:xe,updateFullDate:Z,displayValue:Te,minDate:L,maxDate:G,disabledDates:se})}),X&&a.jsx(fa,{label:he,appearance:ie?"error":fe,showIcon:h,href:W})]})});H.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const ln={title:"Composants/DatePicker/DatePicker",component:H,tags:["autodocs"]},F={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,required:!1,showLabelRequirement:!1},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})}},Ce={args:{...F.args,disabled:!0}},Fe={args:{...F.args,isError:!0}},Re={args:{...F.args,value:void 0},render:p=>{const{value:o,...c}=p;return a.jsx(H,{...c,defaultValue:new Date(2026,5,15)})}},Ne={args:{...F.args,value:null},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{Ut(p),await i.tab();for(const c of"15062023")await i.keyboard(c);const o=p.querySelector("input");n(oe(o)).toBe("15/06/2023"),await i.keyboard(Pe),n(oe(o)).toBe("15/06/2022"),await i.keyboard(nt),n(oe(o)).toBe("15/06/2023"),await i.keyboard(ze),await i.keyboard(nt),n(oe(o)).toBe("15/07/2023"),await i.keyboard(ze),await i.keyboard(nt),n(oe(o)).toBe("16/07/2023"),await i.keyboard(Gt),await i.keyboard(Pe),await i.keyboard(Pe),n(oe(o)).toBe("16/05/2023")}},qe={args:{...F.args,value:null},render:p=>{const[o,c]=m.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>c(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>c(null),children:"Clear"})]}),a.jsx(H,{...p,value:o,onChange:c})]})}},Me={tags:["skip-ci"],args:{...F.args,value:null,hasAction:!0},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=N(p).getByRole("button",{name:Le});await i.click(c);let r=await U(),d=r.querySelector("[role='dialog']");n(d).toBeInTheDocument();const f=r.querySelectorAll(".day-cell");n(f.length).toBeGreaterThan(0),await i.click(f[10]),await i.click(N(r).getByRole("button",{name:/confirmer/i})),await T(()=>{n(d).not.toBeInTheDocument()}),await i.click(c),r=await U(),d=r.querySelector("[role='dialog']"),n(d).toBeInTheDocument();const v=r.querySelector(".day-cell[data-datepicker-active='true']");n(v).toBeInTheDocument(),n(v).toHaveFocus(),await i.keyboard("{Escape}")}},Ye={tags:["skip-ci"],args:{...F.args,value:null,hasAction:!0},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=N(p).getByRole("button",{name:Le});await i.click(c);let r=await U();await i.tab(),await T(()=>{n(N(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await T(()=>{n(N(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await T(()=>{n(N(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const d=N(r);n(d.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(d.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(d.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(d.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const f=r.querySelector('[data-datepicker-tab="month-label"]');n(f).toBeTruthy(),await i.click(f),await T(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(d.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(d.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(d.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(d.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const v=r.querySelector('[data-datepicker-tab="month-label"]');n(v).toBeTruthy(),await i.click(v),await T(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(d.getByText("Sélectionner une année")).toBeInTheDocument(),n(d.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(d.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ke),await T(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),r=await U(),await T(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus()});const x=r.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const _=N(r).getByRole("button",{name:/^annuler$/i});n(_).toHaveFocus(),await i.keyboard(Pe),n(_).toHaveFocus(),await i.tab({shift:!0}),n(x).toHaveFocus(),await i.keyboard(Gt),await T(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus(),n(g).not.toBe(x)}),await i.keyboard(Ke),await T(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),r=await U();const B=r.querySelector('[data-datepicker-tab="month-label"]');n(B).toBeTruthy(),await i.click(B),await T(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const E=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(E).toBeTruthy(),await T(()=>{n(E).toHaveFocus()}),await i.tab(),await T(()=>{n(N(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(E).toHaveFocus();const j=N(r).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(j).toHaveFocus(),await i.tab(),n(E).toHaveFocus()}},He={args:{...F.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=N(p).getByRole("button",{name:Le});c.focus(),await i.tab({shift:!0});for(const x of"03012020")await i.keyboard(x);await i.click(c);let r=await U(),d=r.querySelector("[role='dialog']");n(d).toBeInTheDocument(),await T(()=>{const x=r.querySelector('.day-cell[data-datepicker-active="true"]');n(x).toBeInTheDocument(),n(x).toHaveFocus()});const f=r.querySelectorAll(".day-cell[disabled]");n(f.length).toBe(2),await i.keyboard(Ke),await T(()=>{n(d).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(rt),await i.keyboard(ze),await i.keyboard(rt),await i.keyboard(ze),await i.keyboard(rt);for(const x of"20082024")await i.keyboard(x);await i.click(c),r=await U(),d=r.querySelector("[role='dialog']"),n(d).toBeInTheDocument(),await T(()=>{const x=r.querySelector('.day-cell[data-datepicker-active="true"]');n(x).toBeInTheDocument(),n(x).toHaveFocus()});const v=r.querySelectorAll(".day-cell[disabled]");n(v.length).toBe(7),await i.keyboard(Ke),await T(()=>{n(d).not.toBeInTheDocument(),n(c).toHaveFocus()})}},je={args:{...F.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:p=>{const[o,c]=m.useState(null),r=d=>{c(d)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(H,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=N(p).getByRole("button",{name:Le});c.focus(),await i.tab({shift:!0});for(const v of"14062023")await i.keyboard(v);await i.click(c);const r=await U(),d=r.querySelector("[role='dialog']");n(d).toBeInTheDocument(),await T(()=>{const v=r.querySelector('.day-cell[data-datepicker-active="true"]');n(v).toBeInTheDocument(),n(v).toHaveFocus()});const f=r.querySelectorAll(".day-cell[disabled]");n(f.length).toBe(2)}};var yt,Dt,wt;F.parameters={...F.parameters,docs:{...(yt=F.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  args: {
    id: "default-datepicker",
    label: "Date",
    value: null,
    assistiveAppearance: "description",
    assistiveTextLabel: "Assistive text",
    showAssistiveIcon: true,
    readonly: false,
    hasAction: true,
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
}`,...(wt=(Dt=F.parameters)==null?void 0:Dt.docs)==null?void 0:wt.source}}};var vt,ht,ft;Ce.parameters={...Ce.parameters,docs:{...(vt=Ce.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ft=(ht=Ce.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,kt,Tt;Fe.parameters={...Fe.parameters,docs:{...(bt=Fe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(Tt=(kt=Fe.parameters)==null?void 0:kt.docs)==null?void 0:Tt.source}}};var xt,Bt,Et;Re.parameters={...Re.parameters,docs:{...(xt=Re.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=Re.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var St,_t,It;Ne.parameters={...Ne.parameters,docs:{...(St=Ne.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(It=(_t=Ne.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var At,Ct,Ft;qe.parameters={...qe.parameters,docs:{...(At=qe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ft=(Ct=qe.parameters)==null?void 0:Ct.docs)==null?void 0:Ft.source}}};var Rt,Nt,qt;Me.parameters={...Me.parameters,docs:{...(Rt=Me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=Me.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var Mt,Yt,Ht;Ye.parameters={...Ye.parameters,docs:{...(Mt=Ye.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ht=(Yt=Ye.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var jt,Pt,Ot;He.parameters={...He.parameters,docs:{...(jt=He.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=He.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var Kt,zt,Lt;je.parameters={...je.parameters,docs:{...(Kt=je.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Lt=(zt=je.parameters)==null?void 0:zt.docs)==null?void 0:Lt.source}}};const cn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{qe as ControlledPropUpdate,F as Default,Ce as Disabled,je as DisabledDates,Fe as Error,Ye as TabNavigation,Ne as TypingDate,Re as UncontrolledDefaultValue,Me as WithAction,He as WithMinMax,cn as __namedExportsOrder,ln as default};
