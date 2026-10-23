import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ke,c as Pe,d as Wt,e as nt,f as Le,g as ot}from"./keyboard-test.constants-D8znW6ct.js";import{D as b,c as G,a as Vt,d as rt,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as R,u as s,e as n,a as S}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-DmLcTX3r.js";import{w as Oe}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as ge,c as De,a as ve,A as we,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,r as Qt,g as ea,a as ta,b as aa,c as na,d as oa,e as ra,i as pt,f as sa,h as ia,j as mt,k as lt,n as la,t as ca,l as ct,s as da,m as ua,o as pa,p as _e,q as ma,v as ya,w as ga,x as Da,y as va,z as wa,A as Ge,B as X,C as ie}from"./DatePicker.stories.util-DjmJz9iF.js";import{u as ha}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as fa,A as ba}from"./Label-swDXsD6p.js";import{D as ka}from"./Dropdown-CyecDUeK.js";import{a as xa,B as Ta,c as Ba,f as ae}from"./picker.utils-4NdESGtM.js";import{c as Ea}from"./string.utils-B_KtMSwu.js";import{u as Sa}from"./useFocusTrap-BZu4_Auv.js";import{B as yt}from"./Button-B3EnjUD7.js";import{D as dt}from"./Divider-BVZUrQ0d.js";import{I as U}from"./IconButton-CJDki2nw.js";import{c as ne}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const _a={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Ia="_weekday_1il3o_84",E={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1il3o_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1il3o_20","nav-left":"_nav-left_1il3o_34","nav-right":"_nav-right_1il3o_35","month-label":"_month-label_1il3o_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1il3o_76",weekday:Ia,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1il3o_96","day-cell":"_day-cell_1il3o_103","day-cell__label":"_day-cell__label_1il3o_137","day-cell__surface":"_day-cell__surface_1il3o_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1il3o_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1il3o_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1il3o_271","month-cell":"_month-cell_1il3o_278","month-cell__label":"_month-cell__label_1il3o_313","year-cell":"_year-cell_1il3o_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1il3o_462"},zt=({isOpen:d,currentValue:r,hasActions:i,updateFullDate:o,updateDisplayedDate:l,onValidate:B,onCancel:k,displayValue:_,minDate:C,maxDate:I,disabledDates:A,onChange:j})=>{const[y,W]=p.useState(b.DAY),z=p.useRef(null),[le,oe]=p.useState(null),[he,fe]=p.useState(null);Sa(z.current,d,!1);const{viewDate:x,setViewDate:V,getNextDateForDayNavigation:We,getNextDateForCompactNavigation:ze}=Jt(r),[q,ce]=p.useState(null),[h,F]=p.useState(r??x),[P]=p.useState(r),M=p.useMemo(()=>({minDate:C,maxDate:I,disabledDates:A}),[C,I,A]),Z=e=>{const t=We(e);be(t)},J=(e,t)=>{const m=ze(e,t);be(m)},be=e=>{const t=ca({anchorDay:he,viewDate:e,constraints:M});t!==null&&(ce(t),F(t),l(t))},ke=p.useCallback(()=>{const e=Qt({textValue:_.split(" ").join(""),constraints:M,pendingDate:q,selectedDate:r});V(e.viewDate),fe(e.monthNavigationAnchorDay)},[_,q,r,M,V]),$=p.useMemo(()=>{const e=x??r??new Date,t=y;return y===b.DAY?Ea(ea(e)):t===b.MONTH?ta(e):aa(e)},[y,x,r]),Q=p.useMemo(()=>na({viewDate:x,selectedDate:q??r,minDate:C,maxDate:I,disabledDates:A}),[q,r,x,C,I,A]),ee=p.useMemo(()=>oa({viewDate:x,selectedDate:q??r,minDate:C,maxDate:I,disabledDates:A}),[q,r,x,C,I,A]),te=p.useMemo(()=>ra({viewDate:x,selectedDate:q??r,minDate:C,maxDate:I,disabledDates:A}),[q,r,x,C,I,A]),O=()=>{y===b.DAY?(W(b.MONTH),se()):y===b.MONTH?(W(b.YEAR),me()):(W(b.DAY),L())},xe=e=>{const t=la({date:e,constraints:M});if(t!==null)if(i)l(t),ce(t),V(t),F(t),fe(t.getDate());else{o(t),oe(t),j==null||j(t),B==null||B();return}},Y=e=>{const t=new Date(x.getFullYear(),e,1);V(t),F(t),W(b.DAY),L()},de=e=>{const t=new Date(e,x.getMonth(),1);V(t),F(t),W(b.MONTH),se()},ue=e=>{const t=q??r;return t!==null&&lt(e,t)},Ve=e=>{if(e.key==="Escape"){k==null||k();return}const t=y;t===b.DAY?Te(e):t===b.MONTH?$e(e):Be(e)},Te=e=>{if(!g(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=h,D=Q.find(f=>lt(f.date,m));D&&!D.isDisabled&&xe(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),re(e.key))},$e=e=>{if(!K(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=h.getMonth(),D=ee.find(f=>f.monthIndex===m);D&&!D.isDisabled&&Y(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),Ee(e.key))},Be=e=>{if(!pe(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=h.getFullYear(),D=te.find(f=>f.year===m);D&&!D.isDisabled&&de(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),Ue(e.key))},g=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,K=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,pe=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,re=e=>{const t=Q,m=mt(t,h);if(m<0)return;const D=ct(e,"day"),f=Math.abs(D)===7?7:1,c=D>0?1:-1;let u=m+D;for(;u>=0&&u<t.length&&t[u].isDisabled;)u+=c*f;if(u<0||u>=t.length){const w=da(ua(h,D));if(Xe(w))return;ye(w),L();return}const v=t[u].date;F(v),L()},Ee=e=>{const t=ee,m=h.getMonth(),D=t.findIndex(tt=>tt.monthIndex===m);if(D<0)return;const f=ct(e,"monthYear"),c=pa(h,f);if(c.getFullYear()!==x.getFullYear()){ye(c),se();return}const u=3,v=t.length;let w=_e({currentIndex:D,key:e,columnCount:u,cellCount:v}),T=0;for(;w!==null&&t[w].isDisabled&&T<v;)w=_e({currentIndex:w,key:e,columnCount:u,cellCount:v}),T+=1;if(w===null||t[w].isDisabled)return;const Se=t[w].monthIndex;F(new Date(x.getFullYear(),Se,1)),se()},Ue=e=>{const t=te,m=h.getFullYear(),D=t.findIndex(at=>at.year===m);if(D<0)return;const f=ct(e,"monthYear"),c=m+f;if(!t.map(at=>at.year).includes(c)){ye(new Date(c,0,1)),me();return}const v=3,w=t.length;let T=_e({currentIndex:D,key:e,columnCount:v,cellCount:w}),Se=0;for(;T!==null&&t[T].isDisabled&&Se<w;)T=_e({currentIndex:T,key:e,columnCount:v,cellCount:w}),Se+=1;if(T===null||t[T].isDisabled)return;const tt=t[T].year;F(new Date(tt,0,1)),me()},Xe=e=>pt({date:e,...M}),L=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},se=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},me=()=>{Oe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Ze=()=>{B==null||B();const e=q??r;oe(e),ce(null),o(e)},Je=(e,t)=>lt(e,t)?0:-1,Qe=e=>e===h.getMonth()?0:-1,et=e=>e===h.getFullYear()?0:-1,ye=e=>{const t=M;let m=null;y===b.DAY?m=ma({focusTargetDay:e,constraints:t}):y===b.MONTH?m=ya({focusTargetMonthStart:e,constraints:t}):m=ga({focusTargetYear:e.getFullYear(),constraints:t}),m!==null&&(V(m.viewDate),F(m.menuInitialActiveDate))};return p.useEffect(()=>{if(d)ke(),L();else{if(le)return;if(P===null)o(null);else if(!pt({date:P,...M}))l(P);else{const e=sa(P,M);e&&o(e)}}},[d,ke,r,l,P,le,C,I,A,o,M]),p.useEffect(()=>{(()=>{if(y===b.DAY){const t=Q;if(mt(t,h)>=0)return;const D=t.find(f=>!f.isDisabled);D&&F(D.date)}else if(y===b.MONTH){const t=ee,m=h.getMonth();if(t.some(f=>f.monthIndex===m&&!f.isDisabled&&x.getFullYear()===h.getFullYear()))return;const D=t.find(f=>!f.isDisabled);D&&F(new Date(x.getFullYear(),D.monthIndex,1))}else{const t=te,m=h.getFullYear();if(t.some(f=>f.year===m&&!f.isDisabled))return;const D=t.find(f=>!f.isDisabled);D&&F(new Date(D.year,0,1))}})()},[x,h,y,Q,ee,te]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:z,className:E["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ve,children:[a.jsxs("div",{className:E["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:E["nav-left"],children:y===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(U,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":G.navPrevYear,onClick:()=>Z("prevYear")}),a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":G.navPrevMonth,onClick:()=>Z("prevMonth")})]}):y===b.MONTH?a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":G.navPrevCompact,onClick:()=>J("previous","month")}):a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":G.navPrevCompact,onClick:()=>J("previous","year")})}),y===b.YEAR?a.jsx("span",{className:ne(E["month-label"],"month-label-static"),children:$}):a.jsx("button",{className:E["month-label"],onClick:O,"aria-label":`${$}, afficher les ${y===b.DAY?"mois":"années"}`,"data-datepicker-tab":G.monthLabel,children:$}),a.jsx("div",{className:E["nav-right"],children:y===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":G.navNextMonth,onClick:()=>Z("nextMonth")}),a.jsx(U,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":G.navNextYear,onClick:()=>Z("nextYear")})]}):y===b.MONTH?a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":G.navNextCompact,onClick:()=>J("next","month")}):a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":G.navNextCompact,onClick:()=>J("next","year")})})]}),y===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:E["rte-datepicker-weekdays"],"aria-hidden":"true",children:ia().map((e,t)=>a.jsx("div",{className:E.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:ne(E["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:Q.map(e=>a.jsxs("button",{type:"button",className:ne(E["day-cell"],"day-cell"),role:"gridcell",onClick:()=>xe(e.date),"aria-selected":ue(e.date),tabIndex:Je(e.date,h),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(h==null?void 0:h.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:E["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:E["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):y===b.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:E["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ne(E["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ee.map(e=>a.jsx("button",{type:"button",className:ne(E["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:Qe(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":x.getMonth(),"data-active-date-year":h.getFullYear(),"data-active-view-year":x.getFullYear(),"data-datepicker-active":e.monthIndex===h.getMonth()&&x.getFullYear()===h.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>Y(e.monthIndex),children:a.jsx("span",{className:E["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:E["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ne(E["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:te.map(e=>a.jsx("button",{type:"button",className:ne(E["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(h==null?void 0:h.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:et(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>de(e.year),children:e.label},e.year))})]}),i&&a.jsxs("div",{className:E["rte-datepicker-dropdown-actions"],children:[a.jsx(yt,{label:"Annuler",size:"s",variant:"transparent",onClick:k}),a.jsx(yt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Ze})]})]})})};zt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Aa=/^\d*$/,Fa=d=>d.dayDigits===""&&d.monthDigits===""&&d.yearDigits==="",[Ie,Ae,ut]=Vt,H=p.forwardRef(({id:d,label:r,labelId:i,required:o=!1,showLabelRequirement:l=!1,disabled:B=!1,value:k,defaultValue:_,readonly:C=!1,onChange:I,hasActions:A=!0,onCancel:j,onValidate:y,minDate:W,maxDate:z,disabledDates:le,isError:oe,assistiveTextLabel:he,errorMessage:fe,assistiveAppearance:x="description",showAssistiveIcon:V=!1,assistiveTextLink:We,width:ze="248px"},q)=>{var f;const[ce,h]=p.useState(!1),[F,P]=p.useState(!1),M=oe&&fe||he,Z=M&&!F,J=`${d}-assistive-text`,be=k!==void 0,ke=p.useRef(k??_??null),$=be?k??null:ke.current,{increaseActiveSegmentValue:Q,decreaseActiveSegmentValue:ee,resetActiveSegmentValue:te,updateDateSegment:O,updateFullDate:xe,internalValue:Y,displayValue:de,dateState:ue,updateDisplayedDate:Ve}=Da($,{minDate:W,maxDate:z,disabledDates:le}),{moveToNextSegment:Te,moveToPreviousSegment:$e,setActiveDateSegment:Be,activeDateSegment:g}=va(),K=p.useRef(I),pe=p.useRef($??null);p.useEffect(()=>{K.current=I},[I]),p.useEffect(()=>{pe.current=$??null},[$]),p.useEffect(()=>{var c,u;if(Y===null&&!Fa(ue)){(c=K.current)==null||c.call(K,Y);return}xa(pe.current,Y)||(pe.current=Y,(u=K.current)==null||u.call(K,Y))},[Y,ue]);const re=p.useRef(null),Ee=p.useRef(null),Ue=ha(re.current),Xe=()=>{se(),t(g)},L=()=>{h(!1),P(!1)},se=()=>{B||h(!0)},me=()=>{B||P(!0)},Ze=c=>{const u=c.key;if(c.stopPropagation(),t(g),[ve,we,ge,De,Xt,Zt].includes(u))c.preventDefault(),Je(u);else if(Aa.test(u))c.preventDefault(),Qe(u);else return},Je=c=>{c===De?Te():c===ge?$e():c===ve?Q(g):c===we?ee(g):te(g)},Qe=c=>{const v=ue[`${g===Ie?"day":g===Ae?"month":"year"}Digits`];g===ut&&v.length>=4?et(v,c):ye(v,c)},et=(c,u)=>{const v=Array.from(c).findIndex(w=>w!=="0");if(v===0){const w=ae(Number(u),g);O(g,w)}else{const w=c.slice(v)+u,T=ae(Math.min(Number(w),rt[g]),g);O(g,T)}},ye=(c,u)=>{if(c.length>=2)if(c[0]==="0"){const v=Number(c[1]+u),w=ae(Math.min(v,rt[g]),g);O(g,w),Te()}else{const v=ae(Number(u),g);O(g,v)}else{const v=`${c}${u}`,w=$t[g];if(c.length===0&&Number(u)>w){const T=ae(Number(u),g);O(g,T)}else if(v.length===2){const T=ae(Math.min(Number(v),rt[g]),g);O(g,T)}else{const T=ae(Number(u),g);O(g,T)}}},e=()=>{var w;F&&P(!1);const c=((w=re.current)==null?void 0:w.selectionStart)??0,u=Ba(),v=1;c<=u[Ie][v]+1?t(Ie):c<=u[Ae][v]+1?t(Ae):t(ut)},t=p.useCallback(c=>{Be(c);const u=3,v=c===Ie?0:c===Ae?2+u:0+2*(2+u),w=c===ut?v+4:v+2;Oe(()=>{var T;(T=re.current)==null||T.setSelectionRange(v,w)})},[Be]),m=()=>{j==null||j(),L()},D=()=>{y==null||y(),L()};return p.useEffect(()=>{t(g)},[g,t]),a.jsxs("div",{className:_a["rte-date-picker"],style:{minWidth:"248px",width:ze},ref:q,children:[a.jsx(fa,{id:i,label:r,required:o,showLabelRequirement:l}),a.jsx(ka,{style:{width:(f=Ee.current)==null?void 0:f.offsetWidth},isList:!1,isOpen:F,onClose:L,offset:8,overlayLevel:Ue,trigger:a.jsx(Ta,{id:d,ariaLabelledBy:i??r,ariaDescribedBy:Z?J:void 0,icon:"calendar-month",onFocus:Xe,isFocused:ce,pickerInputRef:re,onOpenPicker:me,value:de,onKeyDown:Ze,onMouseUp:e,onChange:()=>{},fixedWidth:!1,pickerRef:Ee,openButtonAriaLabel:wa(Y),isError:oe,disabled:B,readOnly:C}),position:"bottom",children:a.jsx(zt,{isOpen:F,currentValue:Y,hasActions:A,onValidate:D,onCancel:m,updateDisplayedDate:Ve,updateFullDate:xe,displayValue:de,minDate:W,maxDate:z,disabledDates:le})}),Z&&a.jsx(ba,{id:J,label:M,appearance:oe?"error":x,showIcon:V,href:We})]})});H.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const yn={title:"Composants/DatePicker",component:H,tags:["autodocs"]},N={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})}},Fe={args:{...N.args,disabled:!0}},Ce={args:{...N.args,isError:!0},play:async({canvasElement:d})=>{const r=R(d);n(r.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Re={args:{...N.args,value:void 0},render:d=>{const{value:r,...i}=d;return a.jsx(H,{...i,defaultValue:new Date(2026,5,15)})}},Ne={tags:["!autodocs"],args:{...N.args,value:null},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{Ut(),await s.tab();for(const i of"15062023")await s.keyboard(i);const r=d.querySelector("input");n(ie(r)).toBe("15/06/2023"),await s.keyboard(Pe),n(ie(r)).toBe("15/06/2022"),await s.keyboard(nt),n(ie(r)).toBe("15/06/2023"),await s.keyboard(Le),await s.keyboard(nt),n(ie(r)).toBe("15/07/2023"),await s.keyboard(Le),await s.keyboard(nt),n(ie(r)).toBe("16/07/2023"),await s.keyboard(Wt),await s.keyboard(Pe),await s.keyboard(Pe),n(ie(r)).toBe("16/05/2023")}},qe={args:{...N.args,value:null},render:d=>{const[r,i]=p.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>i(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>i(null),children:"Clear"})]}),a.jsx(H,{...d,value:r,onChange:i})]})}},Me={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const i=R(d).getByRole("button",{name:Ge});await s.click(i);let o=await X(),l=o.querySelector("[role='dialog']");n(l).toBeInTheDocument();const B=o.querySelectorAll(".day-cell");n(B.length).toBeGreaterThan(0),await s.click(B[10]),await s.click(R(o).getByRole("button",{name:/confirmer/i})),await S(()=>{n(l).not.toBeInTheDocument()}),await s.click(i),o=await X(),l=o.querySelector("[role='dialog']"),n(l).toBeInTheDocument();const k=o.querySelector(".day-cell[data-datepicker-active='true']");n(k).toBeInTheDocument(),n(k).toHaveFocus(),await s.keyboard("{Escape}")}},Ye={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const i=R(d).getByRole("button",{name:Ge});await s.click(i);let o=await X();await s.tab(),await S(()=>{n(R(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab(),await S(()=>{n(R(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await s.tab(),await S(()=>{n(R(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const l=R(o);n(l.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const B=o.querySelector('[data-datepicker-tab="month-label"]');n(B).toBeTruthy(),await s.click(B),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(l.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(l.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(l.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(l.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const k=o.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await s.click(k),await S(()=>{n(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(l.getByText("Sélectionner une année")).toBeInTheDocument(),n(l.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(l.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(o.querySelector(".month-label-static")).toBeInTheDocument(),n(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(o.querySelectorAll(".year-cell").length).toBe(11),await s.keyboard(Ke),await S(()=>{n(o).not.toBeInTheDocument(),n(i).toHaveFocus()}),await s.click(i),o=await X(),await S(()=>{const y=o.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus()});const _=o.querySelector('.day-cell[data-datepicker-active="true"]');await s.tab();const C=R(o).getByRole("button",{name:/^annuler$/i});n(C).toHaveFocus(),await s.keyboard(Pe),n(C).toHaveFocus(),await s.tab({shift:!0}),n(_).toHaveFocus(),await s.keyboard(Wt),await S(()=>{const y=o.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus(),n(y).not.toBe(_)}),await s.keyboard(Ke),await S(()=>{n(o).not.toBeInTheDocument(),n(i).toHaveFocus()}),await s.click(i),o=await X();const I=o.querySelector('[data-datepicker-tab="month-label"]');n(I).toBeTruthy(),await s.click(I),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const A=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(A).toBeTruthy(),await S(()=>{n(A).toHaveFocus()}),await s.tab(),await S(()=>{n(R(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab({shift:!0}),n(A).toHaveFocus();const j=R(o).getByRole("button",{name:/année suivante/i});await s.tab({shift:!0}),n(j).toHaveFocus(),await s.tab(),n(A).toHaveFocus()}},He={tags:["!autodocs"],args:{...N.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const i=R(d).getByRole("button",{name:Ge});i.focus(),await s.tab({shift:!0});for(const _ of"03012020")await s.keyboard(_);await s.click(i);let o=await X(),l=o.querySelector("[role='dialog']");n(l).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const B=o.querySelectorAll(".day-cell[disabled]");n(B.length).toBe(2),await s.keyboard(Ke),await S(()=>{n(l).not.toBeInTheDocument(),n(i).toHaveFocus()}),await s.tab({shift:!0}),await s.keyboard(ot),await s.keyboard(Le),await s.keyboard(ot),await s.keyboard(Le),await s.keyboard(ot);for(const _ of"20082024")await s.keyboard(_);await s.click(i),o=await X(),l=o.querySelector("[role='dialog']"),n(l).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(7),await s.keyboard(Ke),await S(()=>{n(l).not.toBeInTheDocument(),n(i).toHaveFocus()})}},je={tags:["!autodocs"],args:{...N.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:d=>{const[r,i]=p.useState(null),o=l=>{i(l)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const i=R(d).getByRole("button",{name:Ge});i.focus(),await s.tab({shift:!0});for(const k of"14062023")await s.keyboard(k);await s.click(i);const o=await X(),l=o.querySelector("[role='dialog']");n(l).toBeInTheDocument(),await S(()=>{const k=o.querySelector('.day-cell[data-datepicker-active="true"]');n(k).toBeInTheDocument(),n(k).toHaveFocus()});const B=o.querySelectorAll(".day-cell[disabled]");n(B.length).toBe(2)}};var gt,Dt,vt;N.parameters={...N.parameters,docs:{...(gt=N.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(Gt=(Lt=je.parameters)==null?void 0:Lt.docs)==null?void 0:Gt.source}}};const gn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{qe as ControlledPropUpdate,N as Default,Fe as Disabled,je as DisabledDates,Ce as Error,Ye as TabNavigation,Ne as TypingDate,Re as UncontrolledDefaultValue,Me as WithAction,He as WithMinMax,gn as __namedExportsOrder,yn as default};
