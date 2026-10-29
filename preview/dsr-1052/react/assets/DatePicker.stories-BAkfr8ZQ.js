import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Le,c as Oe,d as Wt,e as nt,f as Ge,g as rt}from"./keyboard-test.constants-D8znW6ct.js";import{D as b,c as H,a as Vt,d as ot,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as R,u as s,e as n,a as E}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-DmLcTX3r.js";import{w as Ke}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as De,c as ve,a as we,A as he,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,a as Qt,r as ea,g as ta,b as aa,c as na,d as ra,e as oa,f as sa,i as pt,h as ia,j as la,k as mt,l as lt,n as ca,t as da,m as ct,s as ua,o as pa,p as ma,q as Ie,v as ya,w as ga,x as Da,y as va,z as wa,A as ha,B as We,C as Z,D as le}from"./DatePicker.stories.util-CvKDc12b.js";import{u as fa}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as ba,A as ka}from"./Label-swDXsD6p.js";import{D as xa}from"./Dropdown-CyecDUeK.js";import{a as Ta,B as Ba,c as Ea,f as re}from"./picker.utils-Cmv8vcEA.js";import{c as Sa}from"./string.utils-B_KtMSwu.js";import{B as yt}from"./Button-B3EnjUD7.js";import{D as dt}from"./Divider-BVZUrQ0d.js";import{I as X}from"./IconButton-CJDki2nw.js";import{c as oe}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const _a={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Ia="_weekday_1il3o_84",B={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1il3o_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1il3o_20","nav-left":"_nav-left_1il3o_34","nav-right":"_nav-right_1il3o_35","month-label":"_month-label_1il3o_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1il3o_76",weekday:Ia,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1il3o_96","day-cell":"_day-cell_1il3o_103","day-cell__label":"_day-cell__label_1il3o_137","day-cell__surface":"_day-cell__surface_1il3o_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1il3o_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1il3o_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1il3o_271","month-cell":"_month-cell_1il3o_278","month-cell__label":"_month-cell__label_1il3o_313","year-cell":"_year-cell_1il3o_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1il3o_462"},zt=({isOpen:d,currentValue:o,hasActions:l,updateFullDate:r,updateDisplayedDate:c,onValidate:T,onCancel:k,displayValue:S,minDate:C,maxDate:_,disabledDates:I,onChange:O})=>{const[g,W]=m.useState(b.DAY),z=m.useRef(null),[ce,se]=m.useState(null),[fe,be]=m.useState(null);Jt(z,d,g);const{viewDate:x,setViewDate:V,getNextDateForDayNavigation:ze,getNextDateForCompactNavigation:Ve}=Qt(o),[q,de]=m.useState(null),[w,A]=m.useState(o??x),[K]=m.useState(o),M=m.useMemo(()=>({minDate:C,maxDate:_,disabledDates:I}),[C,_,I]),J=e=>{const t=ze(e);ke(t)},Q=(e,t)=>{const u=Ve(e,t);ke(u)},ke=e=>{const t=da({anchorDay:fe,viewDate:e,constraints:M});t!==null&&(de(t),A(t),c(t))},xe=m.useCallback(()=>{const e=ea({textValue:S.split(" ").join(""),constraints:M,pendingDate:q,selectedDate:o});V(e.viewDate),be(e.monthNavigationAnchorDay)},[S,q,o,M,V]),$=m.useMemo(()=>{const e=x??o??new Date,t=g;return g===b.DAY?Sa(ta(e)):t===b.MONTH?aa(e):na(e)},[g,x,o]),ee=m.useMemo(()=>ra({viewDate:x,selectedDate:q??o,minDate:C,maxDate:_,disabledDates:I}),[q,o,x,C,_,I]),te=m.useMemo(()=>oa({viewDate:x,selectedDate:q??o,minDate:C,maxDate:_,disabledDates:I}),[q,o,x,C,_,I]),ae=m.useMemo(()=>sa({viewDate:x,selectedDate:q??o,minDate:C,maxDate:_,disabledDates:I}),[q,o,x,C,_,I]),L=()=>{g===b.DAY?(W(b.MONTH),U()):g===b.MONTH?(W(b.YEAR),ye()):(W(b.DAY),ne())},Te=e=>{const t=ca({date:e,constraints:M});if(t!==null)if(l)c(t),de(t),V(t),A(t),be(t.getDate());else{r(t),se(t),O==null||O(t),T==null||T();return}},Y=e=>{const t=new Date(x.getFullYear(),e,1);V(t),A(t),W(b.DAY),ne()},ue=e=>{const t=new Date(e,x.getMonth(),1);V(t),A(t),W(b.MONTH),U()},pe=e=>{const t=q??o;return t!==null&&lt(e,t)},$e=e=>{if(e.key==="Escape"){k==null||k();return}const t=g;t===b.DAY?Be(e):t===b.MONTH?Ue(e):Ee(e)},Be=e=>{if(!D(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const u=w,v=ee.find(h=>lt(h.date,u));v&&!v.isDisabled&&Te(u);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),ie(e.key))},Ue=e=>{if(!G(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const u=w.getMonth(),v=te.find(h=>h.monthIndex===u);v&&!v.isDisabled&&Y(u);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),Se(e.key))},Ee=e=>{if(!me(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const u=w.getFullYear(),v=ae.find(h=>h.year===u);v&&!v.isDisabled&&ue(u);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),_e(e.key))},D=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,G=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,me=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,ie=e=>{const t=ee,u=mt(t,w);if(u<0)return;const v=ct(e,"day"),h=Math.abs(v)===7?7:1,j=v>0?1:-1;let i=u+v;for(;i>=0&&i<t.length&&t[i].isDisabled;)i+=j*h;if(i<0||i>=t.length){const y=ua(pa(w,v));if(Xe(y))return;ge(y),ne();return}const p=t[i].date;A(p),ne()},Se=e=>{const t=te,u=w.getMonth(),v=t.findIndex(tt=>tt.monthIndex===u);if(v<0)return;const h=ct(e,"monthYear"),j=ma(w,h);if(j.getFullYear()!==x.getFullYear()){ge(j),U();return}const i=3,p=t.length;let y=Ie({currentIndex:v,key:e,columnCount:i,cellCount:p}),f=0;for(;y!==null&&t[y].isDisabled&&f<p;)y=Ie({currentIndex:y,key:e,columnCount:i,cellCount:p}),f+=1;if(y===null||t[y].isDisabled)return;const F=t[y].monthIndex;A(new Date(x.getFullYear(),F,1)),U()},_e=e=>{const t=ae,u=w.getFullYear(),v=t.findIndex(at=>at.year===u);if(v<0)return;const h=ct(e,"monthYear"),j=u+h;if(!t.map(at=>at.year).includes(j)){ge(new Date(j,0,1)),ye();return}const p=3,y=t.length;let f=Ie({currentIndex:v,key:e,columnCount:p,cellCount:y}),F=0;for(;f!==null&&t[f].isDisabled&&F<y;)f=Ie({currentIndex:f,key:e,columnCount:p,cellCount:y}),F+=1;if(f===null||t[f].isDisabled)return;const tt=t[f].year;A(new Date(tt,0,1)),ye()},Xe=e=>pt({date:e,...M}),ne=()=>{Ke(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},U=()=>{Ke(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ye=()=>{Ke(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Ze=()=>{T==null||T();const e=q??o;se(e),de(null),r(e)},Je=(e,t)=>lt(e,t)?0:-1,Qe=e=>e===w.getMonth()?0:-1,et=e=>e===w.getFullYear()?0:-1,ge=e=>{const t=M;let u=null;g===b.DAY?u=ya({focusTargetDay:e,constraints:t}):g===b.MONTH?u=ga({focusTargetMonthStart:e,constraints:t}):u=Da({focusTargetYear:e.getFullYear(),constraints:t}),u!==null&&(V(u.viewDate),A(u.menuInitialActiveDate))};return m.useEffect(()=>{if(d)xe(),ne();else{if(ce)return;if(K===null)r(null);else if(!pt({date:K,...M}))c(K);else{const e=ia(K,M);e&&r(e)}}},[d,xe,o,c,K,ce,C,_,I,r,M]),m.useEffect(()=>{(()=>{if(g===b.DAY){const t=ee;if(mt(t,w)>=0)return;const v=t.find(h=>!h.isDisabled);v&&A(v.date)}else if(g===b.MONTH){const t=te,u=w.getMonth();if(t.some(h=>h.monthIndex===u&&!h.isDisabled&&x.getFullYear()===w.getFullYear()))return;const v=t.find(h=>!h.isDisabled);v&&A(new Date(x.getFullYear(),v.monthIndex,1))}else{const t=ae,u=w.getFullYear();if(t.some(h=>h.year===u&&!h.isDisabled))return;const v=t.find(h=>!h.isDisabled);v&&A(new Date(v.year,0,1))}})()},[x,w,g,ee,te,ae]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:z,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:$e,children:[a.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:B["nav-left"],children:g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":H.navPrevYear,onClick:()=>J("prevYear")}),a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":H.navPrevMonth,onClick:()=>J("prevMonth")})]}):g===b.MONTH?a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":H.navPrevCompact,onClick:()=>Q("previous","month")}):a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":H.navPrevCompact,onClick:()=>Q("previous","year")})}),g===b.YEAR?a.jsx("span",{className:oe(B["month-label"],"month-label-static"),children:$}):a.jsx("button",{className:B["month-label"],onClick:L,"aria-label":`${$}, afficher les ${g===b.DAY?"mois":"années"}`,"data-datepicker-tab":H.monthLabel,children:$}),a.jsx("div",{className:B["nav-right"],children:g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":H.navNextMonth,onClick:()=>J("nextMonth")}),a.jsx(X,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":H.navNextYear,onClick:()=>J("nextYear")})]}):g===b.MONTH?a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":H.navNextCompact,onClick:()=>Q("next","month")}):a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":H.navNextCompact,onClick:()=>Q("next","year")})})]}),g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:B["rte-datepicker-weekdays"],"aria-hidden":"true",children:la().map((e,t)=>a.jsx("div",{className:B.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:oe(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:ee.map(e=>a.jsxs("button",{type:"button",className:oe(B["day-cell"],"day-cell"),role:"gridcell",onClick:()=>Te(e.date),"aria-selected":pe(e.date),tabIndex:Je(e.date,w),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(w==null?void 0:w.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:B["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):g===b.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:oe(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:te.map(e=>a.jsx("button",{type:"button",className:oe(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:Qe(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":x.getMonth(),"data-active-date-year":w.getFullYear(),"data-active-view-year":x.getFullYear(),"data-datepicker-active":e.monthIndex===w.getMonth()&&x.getFullYear()===w.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>Y(e.monthIndex),children:a.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:oe(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:ae.map(e=>a.jsx("button",{type:"button",className:oe(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(w==null?void 0:w.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:et(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>ue(e.year),children:e.label},e.year))})]}),l&&a.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[a.jsx(yt,{label:"Annuler",size:"s",variant:"transparent",onClick:k,"data-datepicker-tab":H.cancel}),a.jsx(yt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Ze,"data-datepicker-tab":H.confirm})]})]})})};zt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Aa=/^\d*$/,Fa=d=>d.dayDigits===""&&d.monthDigits===""&&d.yearDigits==="",[Ae,Fe,ut]=Vt,P=m.forwardRef(({id:d,label:o,labelId:l,required:r=!1,showLabelRequirement:c=!1,disabled:T=!1,value:k,defaultValue:S,readonly:C=!1,onChange:_,hasActions:I=!0,onCancel:O,onValidate:g,minDate:W,maxDate:z,disabledDates:ce,isError:se,assistiveTextLabel:fe,errorMessage:be,assistiveAppearance:x="description",showAssistiveIcon:V=!1,assistiveTextLink:ze,width:Ve="248px"},q)=>{var j;const[de,w]=m.useState(!1),[A,K]=m.useState(!1),M=se&&be||fe,J=M&&!A,Q=`${d}-assistive-text`,ke=k!==void 0,xe=m.useRef(k??S??null),$=ke?k??null:xe.current,{increaseActiveSegmentValue:ee,decreaseActiveSegmentValue:te,resetActiveSegmentValue:ae,updateDateSegment:L,updateFullDate:Te,internalValue:Y,displayValue:ue,dateState:pe,updateDisplayedDate:$e}=va($,{minDate:W,maxDate:z,disabledDates:ce}),{moveToNextSegment:Be,moveToPreviousSegment:Ue,setActiveDateSegment:Ee,activeDateSegment:D}=wa(),G=m.useRef(_),me=m.useRef($??null);m.useEffect(()=>{G.current=_},[_]),m.useEffect(()=>{me.current=$??null},[$]),m.useEffect(()=>{var i,p;if(Y===null&&!Fa(pe)){(i=G.current)==null||i.call(G,Y);return}Ta(me.current,Y)||(me.current=Y,(p=G.current)==null||p.call(G,Y))},[Y,pe]);const ie=m.useRef(null),Se=m.useRef(null),_e=m.useRef(null),Xe=fa(ie.current),ne=()=>{ye(),u(D)},U=(i=!1)=>{var p;w(i),K(!1),i&&((p=_e.current)==null||p.focus({preventScroll:!0}))},ye=()=>{T||w(!0)},Ze=()=>{T||K(!0)},Je=i=>{const p=i.key;if(i.stopPropagation(),u(D),[we,he,De,ve,Xt,Zt].includes(p))i.preventDefault(),Qe(p);else if(Aa.test(p))i.preventDefault(),et(p);else return},Qe=i=>{i===ve?Be():i===De?Ue():i===we?ee(D):i===he?te(D):ae(D)},et=i=>{const y=pe[`${D===Ae?"day":D===Fe?"month":"year"}Digits`];D===ut&&y.length>=4?ge(y,i):e(y,i)},ge=(i,p)=>{const y=Array.from(i).findIndex(f=>f!=="0");if(y===0){const f=re(Number(p),D);L(D,f)}else{const f=i.slice(y)+p,F=re(Math.min(Number(f),ot[D]),D);L(D,F)}},e=(i,p)=>{if(i.length>=2)if(i[0]==="0"){const y=Number(i[1]+p),f=re(Math.min(y,ot[D]),D);L(D,f),Be()}else{const y=re(Number(p),D);L(D,y)}else{const y=`${i}${p}`,f=$t[D];if(i.length===0&&Number(p)>f){const F=re(Number(p),D);L(D,F)}else if(y.length===2){const F=re(Math.min(Number(y),ot[D]),D);L(D,F)}else{const F=re(Number(p),D);L(D,F)}}},t=()=>{var f;A&&K(!1);const i=((f=ie.current)==null?void 0:f.selectionStart)??0,p=Ea(),y=1;i<=p[Ae][y]+1?u(Ae):i<=p[Fe][y]+1?u(Fe):u(ut)},u=m.useCallback(i=>{Ee(i);const p=3,y=i===Ae?0:i===Fe?2+p:0+2*(2+p),f=i===ut?y+4:y+2;Ke(()=>{var F;(F=ie.current)==null||F.setSelectionRange(y,f)})},[Ee]),v=()=>{O==null||O(),U(!0)},h=()=>{g==null||g(),U(!0)};return m.useEffect(()=>{u(D)},[D,u]),a.jsxs("div",{className:_a["rte-date-picker"],style:{minWidth:"248px",width:Ve},ref:q,children:[a.jsx(ba,{id:l,label:o,required:r,showLabelRequirement:c}),a.jsx(xa,{style:{width:(j=Se.current)==null?void 0:j.offsetWidth},isList:!1,isOpen:A,onClose:U,offset:8,overlayLevel:Xe,trigger:a.jsx(Ba,{id:d,ariaLabelledBy:l??o,ariaDescribedBy:J?Q:void 0,icon:"calendar-month",onFocus:ne,isFocused:de,pickerInputRef:ie,onOpenPicker:Ze,value:ue,onKeyDown:Je,onMouseUp:t,onChange:()=>{},fixedWidth:!1,pickerRef:Se,openButtonRef:_e,openButtonAriaLabel:ha(Y),isError:se,disabled:T,readOnly:C}),position:"bottom",children:a.jsx(zt,{isOpen:A,currentValue:Y,hasActions:I,onValidate:h,onCancel:v,updateDisplayedDate:$e,updateFullDate:Te,displayValue:ue,minDate:W,maxDate:z,disabledDates:ce})}),J&&a.jsx(ka,{id:Q,label:M,appearance:se?"error":x,showIcon:V,href:ze})]})});P.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const mn={title:"Composants/DatePicker/DatePicker",component:P,tags:["autodocs"]},N={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})}},Ce={args:{...N.args,disabled:!0}},Re={args:{...N.args,isError:!0},play:async({canvasElement:d})=>{const o=R(d);n(o.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Ne={args:{...N.args,value:void 0},render:d=>{const{value:o,...l}=d;return a.jsx(P,{...l,defaultValue:new Date(2026,5,15)})}},qe={tags:["!autodocs"],args:{...N.args,value:null},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})},play:async({canvasElement:d})=>{Ut(),await s.tab();for(const l of"15062023")await s.keyboard(l);const o=d.querySelector("input");n(le(o)).toBe("15/06/2023"),await s.keyboard(Oe),n(le(o)).toBe("15/06/2022"),await s.keyboard(nt),n(le(o)).toBe("15/06/2023"),await s.keyboard(Ge),await s.keyboard(nt),n(le(o)).toBe("15/07/2023"),await s.keyboard(Ge),await s.keyboard(nt),n(le(o)).toBe("16/07/2023"),await s.keyboard(Wt),await s.keyboard(Oe),await s.keyboard(Oe),n(le(o)).toBe("16/05/2023")}},Me={args:{...N.args,value:null},render:d=>{const[o,l]=m.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>l(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>l(null),children:"Clear"})]}),a.jsx(P,{...d,value:o,onChange:l})]})}},Ye={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:We});await s.click(l);let r=await Z(),c=r.querySelector("[role='dialog']");n(c).toBeInTheDocument();const T=r.querySelectorAll(".day-cell");n(T.length).toBeGreaterThan(0),await s.click(T[10]),await s.click(R(r).getByRole("button",{name:/confirmer/i})),await E(()=>{n(c).not.toBeInTheDocument()}),await s.click(l),r=await Z(),c=r.querySelector("[role='dialog']"),n(c).toBeInTheDocument();const k=r.querySelector(".day-cell[data-datepicker-active='true']");n(k).toBeInTheDocument(),n(k).toHaveFocus(),await s.keyboard("{Escape}")}},He={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:We});await s.click(l);let r=await Z();await s.tab(),await E(()=>{n(R(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab(),await E(()=>{n(R(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await s.tab(),await E(()=>{n(R(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const c=R(r);n(c.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(c.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(c.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(c.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const T=r.querySelector('[data-datepicker-tab="month-label"]');n(T).toBeTruthy(),await s.click(T),await E(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(c.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(c.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(c.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(c.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const k=r.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await s.click(k),await E(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(c.getByText("Sélectionner une année")).toBeInTheDocument(),n(c.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(c.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await s.keyboard(Le),await E(()=>{n(r).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.click(l),r=await Z(),await E(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus()});const S=r.querySelector('.day-cell[data-datepicker-active="true"]');await s.tab();const C=R(r).getByRole("button",{name:/^annuler$/i});n(C).toHaveFocus(),await s.keyboard(Oe),n(C).toHaveFocus(),await s.tab({shift:!0}),n(S).toHaveFocus(),await s.keyboard(Wt),await E(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus(),n(g).not.toBe(S)}),await s.keyboard(Le),await E(()=>{n(r).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.click(l),r=await Z();const _=r.querySelector('[data-datepicker-tab="month-label"]');n(_).toBeTruthy(),await s.click(_),await E(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const I=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(I).toBeTruthy(),await E(()=>{n(I).toHaveFocus()}),await s.tab(),await E(()=>{n(R(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab({shift:!0}),n(I).toHaveFocus();const O=R(r).getByRole("button",{name:/année suivante/i});await s.tab({shift:!0}),n(O).toHaveFocus(),await s.tab(),n(I).toHaveFocus()}},je={tags:["!autodocs"],args:{...N.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:We});l.focus(),await s.tab({shift:!0});for(const S of"03012020")await s.keyboard(S);await s.click(l);let r=await Z(),c=r.querySelector("[role='dialog']");n(c).toBeInTheDocument(),await E(()=>{const S=r.querySelector('.day-cell[data-datepicker-active="true"]');n(S).toBeInTheDocument(),n(S).toHaveFocus()});const T=r.querySelectorAll(".day-cell[disabled]");n(T.length).toBe(2),await s.keyboard(Le),await E(()=>{n(c).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.tab({shift:!0}),await s.keyboard(rt),await s.keyboard(Ge),await s.keyboard(rt),await s.keyboard(Ge),await s.keyboard(rt);for(const S of"20082024")await s.keyboard(S);await s.click(l),r=await Z(),c=r.querySelector("[role='dialog']"),n(c).toBeInTheDocument(),await E(()=>{const S=r.querySelector('.day-cell[data-datepicker-active="true"]');n(S).toBeInTheDocument(),n(S).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(7),await s.keyboard(Le),await E(()=>{n(c).not.toBeInTheDocument(),n(l).toHaveFocus()})}},Pe={tags:["!autodocs"],args:{...N.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:d=>{const[o,l]=m.useState(null),r=c=>{l(c)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...d,value:o,onChange:r})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:We});l.focus(),await s.tab({shift:!0});for(const k of"14062023")await s.keyboard(k);await s.click(l);const r=await Z(),c=r.querySelector("[role='dialog']");n(c).toBeInTheDocument(),await E(()=>{const k=r.querySelector('.day-cell[data-datepicker-active="true"]');n(k).toBeInTheDocument(),n(k).toHaveFocus()});const T=r.querySelectorAll(".day-cell[disabled]");n(T.length).toBe(2)}};var gt,Dt,vt;N.parameters={...N.parameters,docs:{...(gt=N.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(Dt=N.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var wt,ht,ft;Ce.parameters={...Ce.parameters,docs:{...(wt=Ce.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ft=(ht=Ce.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,kt,xt;Re.parameters={...Re.parameters,docs:{...(bt=Re.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(kt=Re.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var Tt,Bt,Et;Ne.parameters={...Ne.parameters,docs:{...(Tt=Ne.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=Ne.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var St,_t,It;qe.parameters={...qe.parameters,docs:{...(St=qe.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(It=(_t=qe.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var At,Ft,Ct;Me.parameters={...Me.parameters,docs:{...(At=Me.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ct=(Ft=Me.parameters)==null?void 0:Ft.docs)==null?void 0:Ct.source}}};var Rt,Nt,qt;Ye.parameters={...Ye.parameters,docs:{...(Rt=Ye.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=Ye.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var Mt,Yt,Ht;He.parameters={...He.parameters,docs:{...(Mt=He.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ht=(Yt=He.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var jt,Pt,Ot;je.parameters={...je.parameters,docs:{...(jt=je.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=je.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var Kt,Lt,Gt;Pe.parameters={...Pe.parameters,docs:{...(Kt=Pe.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Gt=(Lt=Pe.parameters)==null?void 0:Lt.docs)==null?void 0:Gt.source}}};const yn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{Me as ControlledPropUpdate,N as Default,Ce as Disabled,Pe as DisabledDates,Re as Error,He as TabNavigation,qe as TypingDate,Ne as UncontrolledDefaultValue,Ye as WithAction,je as WithMinMax,yn as __namedExportsOrder,mn as default};
