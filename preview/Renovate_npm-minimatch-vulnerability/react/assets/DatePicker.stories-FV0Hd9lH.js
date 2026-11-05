import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ke,c as Pe,d as Wt,e as nt,f as Le,g as rt}from"./keyboard-test.constants-D8znW6ct.js";import{D as b,c as H,a as Vt,d as ot,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as R,u as s,e as n,a as S}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-DmLcTX3r.js";import{w as Oe}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as De,c as ve,a as we,A as he,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,a as Qt,r as ea,g as ta,b as aa,c as na,d as ra,e as oa,f as sa,i as pt,h as ia,j as la,k as mt,l as lt,n as ca,t as da,m as ct,s as ua,o as pa,p as ma,q as _e,v as ya,w as ga,x as Da,y as va,z as wa,A as ha,B as Ge,C as Z,D as ce}from"./DatePicker.stories.util-Zd0d9Com.js";import{g as fa}from"./id.utils-DsO5Uws7.js";import{u as ba}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as ka,A as xa}from"./Label-swDXsD6p.js";import{D as Ta}from"./Dropdown-CyecDUeK.js";import{a as Ba,B as Ea,c as Sa,f as re}from"./picker.utils-C68ap_Jx.js";import{c as _a}from"./string.utils-B_KtMSwu.js";import{B as yt}from"./Button-B3EnjUD7.js";import{D as dt}from"./Divider-BVZUrQ0d.js";import{I as X}from"./IconButton-CJDki2nw.js";import{c as oe}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Ia={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Aa="_weekday_1il3o_84",T={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1il3o_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1il3o_20","nav-left":"_nav-left_1il3o_34","nav-right":"_nav-right_1il3o_35","month-label":"_month-label_1il3o_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1il3o_76",weekday:Aa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1il3o_96","day-cell":"_day-cell_1il3o_103","day-cell__label":"_day-cell__label_1il3o_137","day-cell__surface":"_day-cell__surface_1il3o_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1il3o_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1il3o_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1il3o_271","month-cell":"_month-cell_1il3o_278","month-cell__label":"_month-cell__label_1il3o_313","year-cell":"_year-cell_1il3o_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1il3o_462"},zt=({isOpen:u,currentValue:o,hasActions:c,updateFullDate:r,updateDisplayedDate:l,onValidate:x,onCancel:B,displayValue:_,minDate:I,maxDate:C,disabledDates:E,onChange:O})=>{const[g,W]=m.useState(b.DAY),z=m.useRef(null),[se,de]=m.useState(null),[We,fe]=m.useState(null);Jt(z,u,g);const{viewDate:k,setViewDate:V,getNextDateForDayNavigation:ze,getNextDateForCompactNavigation:Ve}=Qt(o),[q,ie]=m.useState(null),[D,A]=m.useState(o??k),[K]=m.useState(o),M=m.useMemo(()=>({minDate:I,maxDate:C,disabledDates:E}),[I,C,E]),J=e=>{const t=ze(e);be(t)},Q=(e,t)=>{const d=Ve(e,t);be(d)},be=e=>{const t=da({anchorDay:We,viewDate:e,constraints:M});t!==null&&(ie(t),A(t),l(t))},ke=m.useCallback(()=>{const e=ea({textValue:_.split(" ").join(""),constraints:M,pendingDate:q,selectedDate:o});V(e.viewDate),fe(e.monthNavigationAnchorDay)},[_,q,o,M,V]),$=m.useMemo(()=>{const e=k??o??new Date,t=g;return g===b.DAY?_a(ta(e)):t===b.MONTH?aa(e):na(e)},[g,k,o]),ee=m.useMemo(()=>ra({viewDate:k,selectedDate:q??o,minDate:I,maxDate:C,disabledDates:E}),[q,o,k,I,C,E]),te=m.useMemo(()=>oa({viewDate:k,selectedDate:q??o,minDate:I,maxDate:C,disabledDates:E}),[q,o,k,I,C,E]),ae=m.useMemo(()=>sa({viewDate:k,selectedDate:q??o,minDate:I,maxDate:C,disabledDates:E}),[q,o,k,I,C,E]),L=()=>{g===b.DAY?(W(b.MONTH),U()):g===b.MONTH?(W(b.YEAR),ye()):(W(b.DAY),ne())},xe=e=>{const t=ca({date:e,constraints:M});if(t!==null)if(c)l(t),ie(t),V(t),A(t),fe(t.getDate());else{r(t),de(t),O==null||O(t),x==null||x();return}},Y=e=>{const t=new Date(k.getFullYear(),e,1);V(t),A(t),W(b.DAY),ne()},ue=e=>{const t=new Date(e,k.getMonth(),1);V(t),A(t),W(b.MONTH),U()},pe=e=>{const t=q??o;return t!==null&&lt(e,t)},$e=e=>{if(e.key==="Escape"){B==null||B();return}const t=g;t===b.DAY?Te(e):t===b.MONTH?Ue(e):Be(e)},Te=e=>{if(!v(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const d=D,w=ee.find(h=>lt(h.date,d));w&&!w.isDisabled&&xe(d);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),le(e.key))},Ue=e=>{if(!G(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const d=D.getMonth(),w=te.find(h=>h.monthIndex===d);w&&!w.isDisabled&&Y(d);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),Ee(e.key))},Be=e=>{if(!me(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const d=D.getFullYear(),w=ae.find(h=>h.year===d);w&&!w.isDisabled&&ue(d);return}[De,ve,we,he].includes(e.key)&&(e.preventDefault(),Se(e.key))},v=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,G=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,me=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,le=e=>{const t=ee,d=mt(t,D);if(d<0)return;const w=ct(e,"day"),h=Math.abs(w)===7?7:1,j=w>0?1:-1;let i=d+w;for(;i>=0&&i<t.length&&t[i].isDisabled;)i+=j*h;if(i<0||i>=t.length){const y=ua(pa(D,w));if(Xe(y))return;ge(y),ne();return}const p=t[i].date;A(p),ne()},Ee=e=>{const t=te,d=D.getMonth(),w=t.findIndex(tt=>tt.monthIndex===d);if(w<0)return;const h=ct(e,"monthYear"),j=ma(D,h);if(j.getFullYear()!==k.getFullYear()){ge(j),U();return}const i=3,p=t.length;let y=_e({currentIndex:w,key:e,columnCount:i,cellCount:p}),f=0;for(;y!==null&&t[y].isDisabled&&f<p;)y=_e({currentIndex:y,key:e,columnCount:i,cellCount:p}),f+=1;if(y===null||t[y].isDisabled)return;const F=t[y].monthIndex;A(new Date(k.getFullYear(),F,1)),U()},Se=e=>{const t=ae,d=D.getFullYear(),w=t.findIndex(at=>at.year===d);if(w<0)return;const h=ct(e,"monthYear"),j=d+h;if(!t.map(at=>at.year).includes(j)){ge(new Date(j,0,1)),ye();return}const p=3,y=t.length;let f=_e({currentIndex:w,key:e,columnCount:p,cellCount:y}),F=0;for(;f!==null&&t[f].isDisabled&&F<y;)f=_e({currentIndex:f,key:e,columnCount:p,cellCount:y}),F+=1;if(f===null||t[f].isDisabled)return;const tt=t[f].year;A(new Date(tt,0,1)),ye()},Xe=e=>pt({date:e,...M}),ne=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},U=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ye=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Ze=()=>{x==null||x();const e=q??o;de(e),ie(null),r(e)},Je=(e,t)=>lt(e,t)?0:-1,Qe=e=>e===D.getMonth()?0:-1,et=e=>e===D.getFullYear()?0:-1,ge=e=>{const t=M;let d=null;g===b.DAY?d=ya({focusTargetDay:e,constraints:t}):g===b.MONTH?d=ga({focusTargetMonthStart:e,constraints:t}):d=Da({focusTargetYear:e.getFullYear(),constraints:t}),d!==null&&(V(d.viewDate),A(d.menuInitialActiveDate))};return m.useEffect(()=>{if(u)ke(),ne();else{if(se)return;if(K===null)r(null);else if(!pt({date:K,...M}))l(K);else{const e=ia(K,M);e&&r(e)}}},[u,ke,o,l,K,se,I,C,E,r,M]),m.useEffect(()=>{(()=>{if(g===b.DAY){const t=ee;if(mt(t,D)>=0)return;const w=t.find(h=>!h.isDisabled);w&&A(w.date)}else if(g===b.MONTH){const t=te,d=D.getMonth();if(t.some(h=>h.monthIndex===d&&!h.isDisabled&&k.getFullYear()===D.getFullYear()))return;const w=t.find(h=>!h.isDisabled);w&&A(new Date(k.getFullYear(),w.monthIndex,1))}else{const t=ae,d=D.getFullYear();if(t.some(h=>h.year===d&&!h.isDisabled))return;const w=t.find(h=>!h.isDisabled);w&&A(new Date(w.year,0,1))}})()},[k,D,g,ee,te,ae]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:z,className:T["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:$e,children:[a.jsxs("div",{className:T["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:T["nav-left"],children:g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":H.navPrevYear,onClick:()=>J("prevYear")}),a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":H.navPrevMonth,onClick:()=>J("prevMonth")})]}):g===b.MONTH?a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":H.navPrevCompact,onClick:()=>Q("previous","month")}):a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":H.navPrevCompact,onClick:()=>Q("previous","year")})}),g===b.YEAR?a.jsx("span",{className:oe(T["month-label"],"month-label-static"),children:$}):a.jsx("button",{className:T["month-label"],onClick:L,"aria-label":`${$}, afficher les ${g===b.DAY?"mois":"années"}`,"data-datepicker-tab":H.monthLabel,children:$}),a.jsx("div",{className:T["nav-right"],children:g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":H.navNextMonth,onClick:()=>J("nextMonth")}),a.jsx(X,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":H.navNextYear,onClick:()=>J("nextYear")})]}):g===b.MONTH?a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":H.navNextCompact,onClick:()=>Q("next","month")}):a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":H.navNextCompact,onClick:()=>Q("next","year")})})]}),g===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:T["rte-datepicker-weekdays"],"aria-hidden":"true",children:la().map((e,t)=>a.jsx("div",{className:T.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:oe(T["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:ee.map(e=>a.jsxs("button",{type:"button",className:oe(T["day-cell"],"day-cell"),role:"gridcell",onClick:()=>xe(e.date),"aria-selected":pe(e.date),"aria-current":e.isCurrent?"date":void 0,tabIndex:Je(e.date,D),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(D==null?void 0:D.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:T["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:T["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):g===b.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:oe(T["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:te.map(e=>a.jsx("button",{type:"button",className:oe(T["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:Qe(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":k.getMonth(),"data-active-date-year":D.getFullYear(),"data-active-view-year":k.getFullYear(),"data-datepicker-active":e.monthIndex===D.getMonth()&&k.getFullYear()===D.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>Y(e.monthIndex),children:a.jsx("span",{className:T["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:oe(T["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:ae.map(e=>a.jsx("button",{type:"button",className:oe(T["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(D==null?void 0:D.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:et(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>ue(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:T["rte-datepicker-dropdown-actions"],children:[a.jsx(yt,{label:"Annuler",size:"s",variant:"transparent",onClick:B,"data-datepicker-tab":H.cancel}),a.jsx(yt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Ze,"data-datepicker-tab":H.confirm})]})]})})};zt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Fa=/^\d*$/,Ca=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[Ie,Ae,ut]=Vt,P=m.forwardRef(({id:u,label:o,required:c=!1,showLabelRequirement:r=!1,disabled:l=!1,value:x,defaultValue:B,readonly:_=!1,onChange:I,hasActions:C=!0,onCancel:E,onValidate:O,minDate:g,maxDate:W,disabledDates:z,isError:se,assistiveTextLabel:de,errorMessage:We,assistiveAppearance:fe="description",showAssistiveIcon:k=!1,assistiveTextLink:V,width:ze="248px"},Ve)=>{var j;const[q,ie]=m.useState(!1),[D,A]=m.useState(!1),K=u??`datepicker-${fa()}`,M=se&&We||de,J=M&&!D,Q=`${K}-assistive-text`,be=x!==void 0,ke=m.useRef(x??B??null),$=be?x??null:ke.current,{increaseActiveSegmentValue:ee,decreaseActiveSegmentValue:te,resetActiveSegmentValue:ae,updateDateSegment:L,updateFullDate:xe,internalValue:Y,displayValue:ue,dateState:pe,updateDisplayedDate:$e}=va($,{minDate:g,maxDate:W,disabledDates:z}),{moveToNextSegment:Te,moveToPreviousSegment:Ue,setActiveDateSegment:Be,activeDateSegment:v}=wa(),G=m.useRef(I),me=m.useRef($??null);m.useEffect(()=>{G.current=I},[I]),m.useEffect(()=>{me.current=$??null},[$]),m.useEffect(()=>{var i,p;if(Y===null&&!Ca(pe)){(i=G.current)==null||i.call(G,Y);return}Ba(me.current,Y)||(me.current=Y,(p=G.current)==null||p.call(G,Y))},[Y,pe]);const le=m.useRef(null),Ee=m.useRef(null),Se=m.useRef(null),Xe=ba(le.current),ne=()=>{ye(),d(v)},U=(i=!1)=>{var p;ie(i),A(!1),i&&((p=Se.current)==null||p.focus({preventScroll:!0}))},ye=()=>{l||ie(!0)},Ze=()=>{l||A(!0)},Je=i=>{const p=i.key;if(i.stopPropagation(),d(v),[we,he,De,ve,Xt,Zt].includes(p))i.preventDefault(),Qe(p);else if(Fa.test(p))i.preventDefault(),et(p);else return},Qe=i=>{i===ve?Te():i===De?Ue():i===we?ee(v):i===he?te(v):ae(v)},et=i=>{const y=pe[`${v===Ie?"day":v===Ae?"month":"year"}Digits`];v===ut&&y.length>=4?ge(y,i):e(y,i)},ge=(i,p)=>{const y=Array.from(i).findIndex(f=>f!=="0");if(y===0){const f=re(Number(p),v);L(v,f)}else{const f=i.slice(y)+p,F=re(Math.min(Number(f),ot[v]),v);L(v,F)}},e=(i,p)=>{if(i.length>=2)if(i[0]==="0"){const y=Number(i[1]+p),f=re(Math.min(y,ot[v]),v);L(v,f),Te()}else{const y=re(Number(p),v);L(v,y)}else{const y=`${i}${p}`,f=$t[v];if(i.length===0&&Number(p)>f){const F=re(Number(p),v);L(v,F)}else if(y.length===2){const F=re(Math.min(Number(y),ot[v]),v);L(v,F)}else{const F=re(Number(p),v);L(v,F)}}},t=()=>{var f;D&&A(!1);const i=((f=le.current)==null?void 0:f.selectionStart)??0,p=Sa(),y=1;i<=p[Ie][y]+1?d(Ie):i<=p[Ae][y]+1?d(Ae):d(ut)},d=m.useCallback(i=>{Be(i);const p=3,y=i===Ie?0:i===Ae?2+p:0+2*(2+p),f=i===ut?y+4:y+2;Oe(()=>{var F;(F=le.current)==null||F.setSelectionRange(y,f)})},[Be]),w=()=>{E==null||E(),U(!0)},h=()=>{O==null||O(),U(!0)};return m.useEffect(()=>{d(v)},[v,d]),a.jsxs("div",{className:Ia["rte-date-picker"],style:{minWidth:"248px",width:ze},ref:Ve,children:[a.jsx(ka,{htmlFor:K,label:o,required:c,showLabelRequirement:r}),a.jsx(Ta,{style:{width:(j=Ee.current)==null?void 0:j.offsetWidth},isList:!1,isOpen:D,onClose:U,offset:8,overlayLevel:Xe,trigger:a.jsx(Ea,{id:K,ariaDescribedBy:J?Q:void 0,icon:"calendar-month",onFocus:ne,isFocused:q,pickerInputRef:le,onOpenPicker:Ze,value:ue,onKeyDown:Je,onMouseUp:t,onChange:()=>{},fixedWidth:!1,pickerRef:Ee,openButtonRef:Se,openButtonAriaLabel:ha(Y),isError:se,disabled:l,readOnly:_,required:c}),position:"bottom",children:a.jsx(zt,{isOpen:D,currentValue:Y,hasActions:C,onValidate:h,onCancel:w,updateDisplayedDate:$e,updateFullDate:xe,displayValue:ue,minDate:g,maxDate:W,disabledDates:z})}),J&&a.jsx(xa,{id:Q,label:M,appearance:se?"error":fe,showIcon:k,href:V})]})});P.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["Omit"]};const gn={title:"Composants/DatePicker/DatePicker",component:P,tags:["autodocs"]},N={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})}},Fe={args:{...N.args,disabled:!0}},Ce={args:{...N.args,isError:!0},play:async({canvasElement:u})=>{const o=R(u);n(o.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Re={args:{...N.args,value:void 0},render:u=>{const{value:o,...c}=u;return a.jsx(P,{...c,defaultValue:new Date(2026,5,15)})}},Ne={tags:["!autodocs"],args:{...N.args,value:null},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{Ut(),await s.tab();for(const c of"15062023")await s.keyboard(c);const o=u.querySelector("input");n(ce(o)).toBe("15/06/2023"),await s.keyboard(Pe),n(ce(o)).toBe("15/06/2022"),await s.keyboard(nt),n(ce(o)).toBe("15/06/2023"),await s.keyboard(Le),await s.keyboard(nt),n(ce(o)).toBe("15/07/2023"),await s.keyboard(Le),await s.keyboard(nt),n(ce(o)).toBe("16/07/2023"),await s.keyboard(Wt),await s.keyboard(Pe),await s.keyboard(Pe),n(ce(o)).toBe("16/05/2023")}},qe={args:{...N.args,value:null},render:u=>{const[o,c]=m.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>c(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>c(null),children:"Clear"})]}),a.jsx(P,{...u,value:o,onChange:c})]})}},Me={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const c=R(u).getByRole("button",{name:Ge});await s.click(c);let r=await Z(),l=r.querySelector("[role='dialog']");n(l).toBeInTheDocument();const x=r.querySelectorAll(".day-cell");n(x.length).toBeGreaterThan(0),await s.click(x[10]),await s.click(R(r).getByRole("button",{name:/confirmer/i})),await S(()=>{n(l).not.toBeInTheDocument()}),await s.click(c),r=await Z(),l=r.querySelector("[role='dialog']"),n(l).toBeInTheDocument();const B=r.querySelector(".day-cell[data-datepicker-active='true']");n(B).toBeInTheDocument(),n(B).toHaveFocus(),await s.keyboard("{Escape}")}},Ye={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const c=R(u).getByRole("button",{name:Ge});await s.click(c);let r=await Z();await s.tab(),await S(()=>{n(R(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab(),await S(()=>{n(R(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await s.tab(),await S(()=>{n(R(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const l=R(r);n(l.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const x=r.querySelector('[data-datepicker-tab="month-label"]');n(x).toBeTruthy(),await s.click(x),await S(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(l.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(l.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(l.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(l.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const B=r.querySelector('[data-datepicker-tab="month-label"]');n(B).toBeTruthy(),await s.click(B),await S(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(l.getByText("Sélectionner une année")).toBeInTheDocument(),n(l.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await s.keyboard(Ke),await S(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await s.click(c),r=await Z(),await S(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus()});const _=r.querySelector('.day-cell[data-datepicker-active="true"]');await s.tab();const I=R(r).getByRole("button",{name:/^annuler$/i});n(I).toHaveFocus(),await s.keyboard(Pe),n(I).toHaveFocus(),await s.tab({shift:!0}),n(_).toHaveFocus(),await s.keyboard(Wt),await S(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus(),n(g).not.toBe(_)}),await s.keyboard(Ke),await S(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await s.click(c),r=await Z();const C=r.querySelector('[data-datepicker-tab="month-label"]');n(C).toBeTruthy(),await s.click(C),await S(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const E=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(E).toBeTruthy(),await S(()=>{n(E).toHaveFocus()}),await s.tab(),await S(()=>{n(R(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab({shift:!0}),n(E).toHaveFocus();const O=R(r).getByRole("button",{name:/année suivante/i});await s.tab({shift:!0}),n(O).toHaveFocus(),await s.tab(),n(E).toHaveFocus()}},He={tags:["!autodocs"],args:{...N.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const c=R(u).getByRole("button",{name:Ge});c.focus(),await s.tab({shift:!0});for(const _ of"03012020")await s.keyboard(_);await s.click(c);let r=await Z(),l=r.querySelector("[role='dialog']");n(l).toBeInTheDocument(),await S(()=>{const _=r.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const x=r.querySelectorAll(".day-cell[disabled]");n(x.length).toBe(2),await s.keyboard(Ke),await S(()=>{n(l).not.toBeInTheDocument(),n(c).toHaveFocus()}),await s.tab({shift:!0}),await s.keyboard(rt),await s.keyboard(Le),await s.keyboard(rt),await s.keyboard(Le),await s.keyboard(rt);for(const _ of"20082024")await s.keyboard(_);await s.click(c),r=await Z(),l=r.querySelector("[role='dialog']"),n(l).toBeInTheDocument(),await S(()=>{const _=r.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const B=r.querySelectorAll(".day-cell[disabled]");n(B.length).toBe(7),await s.keyboard(Ke),await S(()=>{n(l).not.toBeInTheDocument(),n(c).toHaveFocus()})}},je={tags:["!autodocs"],args:{...N.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:u=>{const[o,c]=m.useState(null),r=l=>{c(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(P,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const c=R(u).getByRole("button",{name:Ge});c.focus(),await s.tab({shift:!0});for(const B of"14062023")await s.keyboard(B);await s.click(c);const r=await Z(),l=r.querySelector("[role='dialog']");n(l).toBeInTheDocument(),await S(()=>{const B=r.querySelector('.day-cell[data-datepicker-active="true"]');n(B).toBeInTheDocument(),n(B).toHaveFocus()});const x=r.querySelectorAll(".day-cell[disabled]");n(x.length).toBe(2)}};var gt,Dt,vt;N.parameters={...N.parameters,docs:{...(gt=N.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(Dt=N.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var wt,ht,ft;Fe.parameters={...Fe.parameters,docs:{...(wt=Fe.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ft=(ht=Fe.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,kt,xt;Ce.parameters={...Ce.parameters,docs:{...(bt=Ce.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(kt=Ce.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var Tt,Bt,Et;Re.parameters={...Re.parameters,docs:{...(Tt=Re.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(It=(_t=Ne.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var At,Ft,Ct;qe.parameters={...qe.parameters,docs:{...(At=qe.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ct=(Ft=qe.parameters)==null?void 0:Ft.docs)==null?void 0:Ct.source}}};var Rt,Nt,qt;Me.parameters={...Me.parameters,docs:{...(Rt=Me.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=Me.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var Mt,Yt,Ht;Ye.parameters={...Ye.parameters,docs:{...(Mt=Ye.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ht=(Yt=Ye.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var jt,Pt,Ot;He.parameters={...He.parameters,docs:{...(jt=He.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=He.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var Kt,Lt,Gt;je.parameters={...je.parameters,docs:{...(Kt=je.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Gt=(Lt=je.parameters)==null?void 0:Lt.docs)==null?void 0:Gt.source}}};const Dn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{qe as ControlledPropUpdate,N as Default,Fe as Disabled,je as DisabledDates,Ce as Error,Ye as TabNavigation,Ne as TypingDate,Re as UncontrolledDefaultValue,Me as WithAction,He as WithMinMax,Dn as __namedExportsOrder,gn as default};
