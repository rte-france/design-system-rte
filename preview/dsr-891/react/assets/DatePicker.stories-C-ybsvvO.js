import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Ke,c as Pe,d as Gt,e as nt,f as ze,g as rt}from"./keyboard-test.constants-D8znW6ct.js";import{D as v,c as z,a as Vt,d as ot,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as q,u as l,e as n,a as x}from"./index-4rjIhT2C.js";import{r as m}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-mIZIUNbM.js";import{w as Oe}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as ye,c as De,a as ve,A as we,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,r as Qt,g as ea,a as ta,b as aa,c as na,d as ra,e as oa,i as pt,f as sa,h as ia,j as mt,k as lt,n as la,t as ca,l as ct,s as da,m as ua,o as pa,p as _e,q as ma,v as ga,w as ya,x as Da,y as va,z as wa,A as Le,B as U,C as se}from"./DatePicker.stories.util-CLvvTiIx.js";import{u as ha}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as fa,A as ba}from"./Label-Bgp-fFvQ.js";import{D as ka}from"./Dropdown-DZSiAL4-.js";import{a as Ta,B as xa,c as Ba,f as Q}from"./picker.utils-DE9aSKE1.js";import{u as Ea}from"./useFocusTrap-D2ZnoMa2.js";import{B as gt}from"./Button-KJfdYR4G.js";import{D as dt}from"./Divider-BMotkXeQ.js";import{I as $}from"./IconButton-D7Ub3mhB.js";import{c as ee}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./IconButton.module-DsipBz7u.js";const Sa={"rte-date-picker":"_rte-date-picker_1e0u2_1"},_a="_weekday_1tzza_85",T={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:_a,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Wt=({isOpen:p,currentValue:s,hasAction:d,updateFullDate:r,updateDisplayedDate:u,onValidate:k,onCancel:f,displayValue:B,minDate:I,maxDate:E,disabledDates:S,onChange:j})=>{const[g,L]=m.useState(v.DAY),G=m.useRef(null),[ie,le]=m.useState(null),[he,fe]=m.useState(null);Ea(G.current,p,!1);const{viewDate:b,setViewDate:W,getNextDateForDayNavigation:Ge,getNextDateForCompactNavigation:We}=Jt(s),[N,te]=m.useState(null),[y,_]=m.useState(s??b),[X]=m.useState(s),M=m.useMemo(()=>({minDate:I,maxDate:E,disabledDates:S}),[I,E,S]),ae=e=>{const t=Ge(e);be(t)},P=(e,t)=>{const o=We(e,t);be(o)},be=e=>{const t=ca({anchorDay:he,viewDate:e,constraints:M});t!==null&&(te(t),_(t),u(t))},ke=m.useCallback(()=>{const e=Qt({textValue:B.split(" ").join(""),constraints:M,pendingDate:N,selectedDate:s});W(e.viewDate),fe(e.monthNavigationAnchorDay)},[B,N,s,M,W]),ce=m.useMemo(()=>{const e=b??s??new Date,t=g;return g===v.DAY?ea(e):t===v.MONTH?ta(e):aa(e)},[g,b,s]),F=m.useMemo(()=>na({viewDate:b,selectedDate:N??s,minDate:I,maxDate:E,disabledDates:S}),[N,s,b,I,E,S]),Z=m.useMemo(()=>ra({viewDate:b,selectedDate:N??s,minDate:I,maxDate:E,disabledDates:S}),[N,s,b,I,E,S]),A=m.useMemo(()=>oa({viewDate:b,selectedDate:N??s,minDate:I,maxDate:E,disabledDates:S}),[N,s,b,I,E,S]),Te=()=>{g===v.DAY?(L(v.MONTH),oe()):g===v.MONTH?(L(v.YEAR),me()):(L(v.DAY),J())},ne=e=>{const t=la({date:e,constraints:M});if(t!==null)if(d)u(t),te(t),W(t),_(t),fe(t.getDate());else{r(t),le(t),j==null||j(t),k==null||k();return}},xe=e=>{const t=new Date(b.getFullYear(),e,1);W(t),_(t),L(v.DAY),J()},de=e=>{const t=new Date(e,b.getMonth(),1);W(t),_(t),L(v.MONTH),oe()},Ve=e=>{const t=N??s;return t!==null&&lt(e,t)},Be=e=>{if(e.key==="Escape"){f==null||f();return}const t=g;t===v.DAY?D(e):t===v.MONTH?O(e):ue(e)},D=e=>{if(!re(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const o=y,i=F.find(c=>lt(c.date,o));i&&!i.isDisabled&&ne(o);return}[ye,De,ve,we].includes(e.key)&&(e.preventDefault(),Ue(e.key))},O=e=>{if(!Ee(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const o=y.getMonth(),i=Z.find(c=>c.monthIndex===o);i&&!i.isDisabled&&xe(o);return}[ye,De,ve,we].includes(e.key)&&(e.preventDefault(),pe(e.key))},ue=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const o=y.getFullYear(),i=A.find(c=>c.year===o);i&&!i.isDisabled&&de(o);return}[ye,De,ve,we].includes(e.key)&&(e.preventDefault(),Xe(e.key))},re=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ee=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,$e=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Ue=e=>{const t=F,o=mt(t,y);if(o<0)return;const i=ct(e,"day"),c=Math.abs(i)===7?7:1,w=i>0?1:-1;let h=o+i;for(;h>=0&&h<t.length&&t[h].isDisabled;)h+=w*c;if(h<0||h>=t.length){const C=da(ua(y,i));if(Ze(C))return;ge(C),J();return}const V=t[h].date;_(V),J()},pe=e=>{const t=Z,o=y.getMonth(),i=t.findIndex(tt=>tt.monthIndex===o);if(i<0)return;const c=ct(e,"monthYear"),w=pa(y,c);if(w.getFullYear()!==b.getFullYear()){ge(w),oe();return}const h=3,V=t.length;let C=_e({currentIndex:i,key:e,columnCount:h,cellCount:V}),Y=0;for(;C!==null&&t[C].isDisabled&&Y<V;)C=_e({currentIndex:C,key:e,columnCount:h,cellCount:V}),Y+=1;if(C===null||t[C].isDisabled)return;const Se=t[C].monthIndex;_(new Date(b.getFullYear(),Se,1)),oe()},Xe=e=>{const t=A,o=y.getFullYear(),i=t.findIndex(at=>at.year===o);if(i<0)return;const c=ct(e,"monthYear"),w=o+c;if(!t.map(at=>at.year).includes(w)){ge(new Date(w,0,1)),me();return}const V=3,C=t.length;let Y=_e({currentIndex:i,key:e,columnCount:V,cellCount:C}),Se=0;for(;Y!==null&&t[Y].isDisabled&&Se<C;)Y=_e({currentIndex:Y,key:e,columnCount:V,cellCount:C}),Se+=1;if(Y===null||t[Y].isDisabled)return;const tt=t[Y].year;_(new Date(tt,0,1)),me()},Ze=e=>pt({date:e,...M}),J=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},oe=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},me=()=>{Oe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Je=()=>{k==null||k();const e=N??s;le(e),te(null),r(e)},Qe=(e,t)=>lt(e,t)?0:-1,et=e=>e===y.getMonth()?0:-1,K=e=>e===y.getFullYear()?0:-1,ge=e=>{const t=M;let o=null;g===v.DAY?o=ma({focusTargetDay:e,constraints:t}):g===v.MONTH?o=ga({focusTargetMonthStart:e,constraints:t}):o=ya({focusTargetYear:e.getFullYear(),constraints:t}),o!==null&&(W(o.viewDate),_(o.menuInitialActiveDate))};return m.useEffect(()=>{if(p)ke(),J();else{if(ie)return;if(X===null)r(null);else if(!pt({date:X,...M}))u(X);else{const e=sa(X,M);e&&r(e)}}},[p,ke,s,u,X,ie,I,E,S,r,M]),m.useEffect(()=>{(()=>{if(g===v.DAY){const t=F;if(mt(t,y)>=0)return;const i=t.find(c=>!c.isDisabled);i&&_(i.date)}else if(g===v.MONTH){const t=Z,o=y.getMonth();if(t.some(c=>c.monthIndex===o&&!c.isDisabled&&b.getFullYear()===y.getFullYear()))return;const i=t.find(c=>!c.isDisabled);i&&_(new Date(b.getFullYear(),i.monthIndex,1))}else{const t=A,o=y.getFullYear();if(t.some(c=>c.year===o&&!c.isDisabled))return;const i=t.find(c=>!c.isDisabled);i&&_(new Date(i.year,0,1))}})()},[b,y,g,F,Z,A]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:G,className:T["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Be,children:[a.jsxs("div",{className:T["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:T["nav-left"],children:g===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx($,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>ae("prevYear")}),a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>ae("prevMonth")})]}):g===v.MONTH?a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>P("previous","month")}):a.jsx($,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>P("previous","year")})}),g===v.YEAR?a.jsx("span",{className:ee(T["month-label"],"month-label-static"),children:ce}):a.jsx("button",{className:T["month-label"],onClick:Te,"aria-label":`Changer de vue, ${ce} , appuyer pour voir les ${g===v.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:ce}),a.jsx("div",{className:T["nav-right"],children:g===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>ae("nextMonth")}),a.jsx($,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>ae("nextYear")})]}):g===v.MONTH?a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>P("next","month")}):a.jsx($,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>P("next","year")})})]}),g===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:T["rte-datepicker-weekdays"],"aria-hidden":"true",children:ia().map((e,t)=>a.jsx("div",{className:T.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:ee(T["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:F.map(e=>a.jsxs("button",{type:"button",className:ee(T["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ne(e.date),"aria-selected":Ve(e.date),tabIndex:Qe(e.date,y),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(y==null?void 0:y.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:T["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:T["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):g===v.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ee(T["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:Z.map(e=>a.jsx("button",{type:"button",className:ee(T["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:et(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":b.getMonth(),"data-active-date-year":y.getFullYear(),"data-active-view-year":b.getFullYear(),"data-datepicker-active":e.monthIndex===y.getMonth()&&b.getFullYear()===y.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>xe(e.monthIndex),children:a.jsx("span",{className:T["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ee(T["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:A.map(e=>a.jsx("button",{type:"button",className:ee(T["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(y==null?void 0:y.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:K(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>de(e.year),children:e.label},e.year))})]}),d&&a.jsxs("div",{className:T["rte-datepicker-dropdown-actions"],children:[a.jsx(gt,{label:"Annuler",size:"s",variant:"transparent",onClick:f}),a.jsx(gt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Je})]})]})})};Wt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Ia=/^\d*$/,Aa=p=>p.dayDigits===""&&p.monthDigits===""&&p.yearDigits==="",[Ie,Ae,ut]=Vt,H=m.forwardRef(({id:p,label:s,labelId:d,required:r=!1,showLabelRequirement:u=!1,disabled:k=!1,value:f,defaultValue:B,readonly:I=!1,onChange:E,hasAction:S=!1,onCancel:j,onValidate:g,minDate:L,maxDate:G,disabledDates:ie,isError:le,assistiveTextLabel:he,assistiveAppearance:fe="description",showAssistiveIcon:b=!1,assistiveTextLink:W,width:Ge="248px"},We)=>{var t;const[N,te]=m.useState(!1),[y,_]=m.useState(!1),X=he&&!y,M=f!==void 0,ae=m.useRef(f??B??null),P=M?f??null:ae.current,{increaseActiveSegmentValue:be,decreaseActiveSegmentValue:ke,resetActiveSegmentValue:ce,updateDateSegment:F,updateFullDate:Z,internalValue:A,displayValue:Te,dateState:ne,updateDisplayedDate:xe}=Da(P,{minDate:L,maxDate:G,disabledDates:ie}),{moveToNextSegment:de,moveToPreviousSegment:Ve,setActiveDateSegment:Be,activeDateSegment:D}=va(),O=m.useRef(E),ue=m.useRef(P??null);m.useEffect(()=>{O.current=E},[E]),m.useEffect(()=>{ue.current=P??null},[P]),m.useEffect(()=>{var o,i;if(A===null&&!Aa(ne)){(o=O.current)==null||o.call(O,A);return}Ta(ue.current,A)||(ue.current=A,(i=O.current)==null||i.call(O,A))},[A,ne]);const re=m.useRef(null),Ee=m.useRef(null),$e=ha(re.current),Ue=()=>{Xe(),K(D)},pe=()=>{te(!1),_(!1)},Xe=()=>{k||te(!0)},Ze=()=>{k||_(!0)},J=o=>{const i=o.key;if(o.stopPropagation(),K(D),[ve,we,ye,De,Xt,Zt].includes(i))o.preventDefault(),oe(i);else if(Ia.test(i))o.preventDefault(),me(i);else return},oe=o=>{o===De?de():o===ye?Ve():o===ve?be(D):o===we?ke(D):ce(D)},me=o=>{const c=ne[`${D===Ie?"day":D===Ae?"month":"year"}Digits`];D===ut&&c.length>=4?Je(c,o):Qe(c,o)},Je=(o,i)=>{const c=Array.from(o).findIndex(w=>w!=="0");if(c===0){const w=Q(Number(i),D);F(D,w)}else{const w=o.slice(c)+i,h=Q(Math.min(Number(w),ot[D]),D);F(D,h)}},Qe=(o,i)=>{if(o.length>=2)if(o[0]==="0"){const c=Number(o[1]+i),w=Q(Math.min(c,ot[D]),D);F(D,w),de()}else{const c=Q(Number(i),D);F(D,c)}else{const c=`${o}${i}`,w=$t[D];if(o.length===0&&Number(i)>w){const h=Q(Number(i),D);F(D,h)}else if(c.length===2){const h=Q(Math.min(Number(c),ot[D]),D);F(D,h)}else{const h=Q(Number(i),D);F(D,h)}}},et=()=>{var w;y&&_(!1);const o=((w=re.current)==null?void 0:w.selectionStart)??0,i=Ba(),c=1;o<=i[Ie][c]+1?K(Ie):o<=i[Ae][c]+1?K(Ae):K(ut)},K=m.useCallback(o=>{Be(o);const i=3,c=o===Ie?0:o===Ae?2+i:0+2*(2+i),w=o===ut?c+4:c+2;Oe(()=>{var h;(h=re.current)==null||h.setSelectionRange(c,w)})},[Be]),ge=()=>{j==null||j(),pe()},e=()=>{g==null||g(),pe()};return m.useEffect(()=>{K(D)},[D,K]),a.jsxs("div",{className:Sa["rte-date-picker"],style:{minWidth:"248px",width:Ge},ref:We,children:[a.jsx(fa,{id:d,label:s,required:r,showLabelRequirement:u}),a.jsx(ka,{style:{width:(t=Ee.current)==null?void 0:t.offsetWidth},isList:!1,isOpen:y,onClose:pe,offset:8,overlayLevel:$e,trigger:a.jsx(xa,{id:p,ariaLabelledBy:d??s,icon:"calendar-month",onFocus:Ue,isFocused:N,pickerInputRef:re,onOpenPicker:Ze,value:Te,onKeyDown:J,onMouseUp:et,onChange:()=>{},fixedWidth:!1,pickerRef:Ee,openButtonAriaLabel:wa(A),isError:le,disabled:k,readOnly:I}),position:"bottom",children:a.jsx(Wt,{isOpen:y,currentValue:A,hasAction:S,onValidate:e,onCancel:ge,updateDisplayedDate:xe,updateFullDate:Z,displayValue:Te,minDate:L,maxDate:G,disabledDates:ie})}),X&&a.jsx(ba,{label:he,appearance:le?"error":fe,showIcon:b,href:W})]})});H.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const un={title:"Composants/DatePicker/DatePicker",component:H,tags:["autodocs"]},R={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,required:!1,showLabelRequirement:!1},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})}},Ce={args:{...R.args,disabled:!0}},Fe={args:{...R.args,isError:!0}},Re={args:{...R.args,value:void 0},render:p=>{const{value:s,...d}=p;return a.jsx(H,{...d,defaultValue:new Date(2026,5,15)})}},Ne={args:{...R.args,value:null},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})},play:async({canvasElement:p})=>{Ut(p),await l.tab();for(const d of"15062023")await l.keyboard(d);const s=p.querySelector("input");n(se(s)).toBe("15/06/2023"),await l.keyboard(Pe),n(se(s)).toBe("15/06/2022"),await l.keyboard(nt),n(se(s)).toBe("15/06/2023"),await l.keyboard(ze),await l.keyboard(nt),n(se(s)).toBe("15/07/2023"),await l.keyboard(ze),await l.keyboard(nt),n(se(s)).toBe("16/07/2023"),await l.keyboard(Gt),await l.keyboard(Pe),await l.keyboard(Pe),n(se(s)).toBe("16/05/2023")}},qe={args:{...R.args,value:null},render:p=>{const[s,d]=m.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>d(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>d(null),children:"Clear"})]}),a.jsx(H,{...p,value:s,onChange:d})]})}},Me={tags:["skip-ci"],args:{...R.args,value:null,hasAction:!0},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})},play:async({canvasElement:p})=>{const d=q(p).getByRole("button",{name:Le});await l.click(d);let r=await U(),u=r.querySelector("[role='dialog']");n(u).toBeInTheDocument();const k=r.querySelectorAll(".day-cell");n(k.length).toBeGreaterThan(0),await l.click(k[10]),await l.click(q(r).getByRole("button",{name:/confirmer/i})),await x(()=>{n(u).not.toBeInTheDocument()}),await l.click(d),r=await U(),u=r.querySelector("[role='dialog']"),n(u).toBeInTheDocument();const f=r.querySelector(".day-cell[data-datepicker-active='true']");n(f).toBeInTheDocument(),n(f).toHaveFocus(),await l.keyboard("{Escape}")}},Ye={tags:["skip-ci"],args:{...R.args,value:null,hasAction:!0},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})},play:async({canvasElement:p})=>{const d=q(p).getByRole("button",{name:Le});await l.click(d);let r=await U();await l.tab(),await x(()=>{n(q(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await l.tab(),await x(()=>{n(q(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await l.tab(),await x(()=>{n(q(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const u=q(r);n(u.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(u.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(u.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(u.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const k=r.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await l.click(k),await x(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(u.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(u.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(u.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(u.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const f=r.querySelector('[data-datepicker-tab="month-label"]');n(f).toBeTruthy(),await l.click(f),await x(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(u.getByText("Sélectionner une année")).toBeInTheDocument(),n(u.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(u.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await l.keyboard(Ke),await x(()=>{n(r).not.toBeInTheDocument(),n(d).toHaveFocus()}),await l.click(d),r=await U(),await x(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus()});const B=r.querySelector('.day-cell[data-datepicker-active="true"]');await l.tab();const I=q(r).getByRole("button",{name:/^annuler$/i});n(I).toHaveFocus(),await l.keyboard(Pe),n(I).toHaveFocus(),await l.tab({shift:!0}),n(B).toHaveFocus(),await l.keyboard(Gt),await x(()=>{const g=r.querySelector('.day-cell[data-datepicker-active="true"]');n(g).toBeInTheDocument(),n(g).toHaveFocus(),n(g).not.toBe(B)}),await l.keyboard(Ke),await x(()=>{n(r).not.toBeInTheDocument(),n(d).toHaveFocus()}),await l.click(d),r=await U();const E=r.querySelector('[data-datepicker-tab="month-label"]');n(E).toBeTruthy(),await l.click(E),await x(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const S=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(S).toBeTruthy(),await x(()=>{n(S).toHaveFocus()}),await l.tab(),await x(()=>{n(q(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await l.tab({shift:!0}),n(S).toHaveFocus();const j=q(r).getByRole("button",{name:/année suivante/i});await l.tab({shift:!0}),n(j).toHaveFocus(),await l.tab(),n(S).toHaveFocus()}},He={args:{...R.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})},play:async({canvasElement:p})=>{const d=q(p).getByRole("button",{name:Le});d.focus(),await l.tab({shift:!0});for(const B of"03012020")await l.keyboard(B);await l.click(d);let r=await U(),u=r.querySelector("[role='dialog']");n(u).toBeInTheDocument(),await x(()=>{const B=r.querySelector('.day-cell[data-datepicker-active="true"]');n(B).toBeInTheDocument(),n(B).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2),await l.keyboard(Ke),await x(()=>{n(u).not.toBeInTheDocument(),n(d).toHaveFocus()}),await l.tab({shift:!0}),await l.keyboard(rt),await l.keyboard(ze),await l.keyboard(rt),await l.keyboard(ze),await l.keyboard(rt);for(const B of"20082024")await l.keyboard(B);await l.click(d),r=await U(),u=r.querySelector("[role='dialog']"),n(u).toBeInTheDocument(),await x(()=>{const B=r.querySelector('.day-cell[data-datepicker-active="true"]');n(B).toBeInTheDocument(),n(B).toHaveFocus()});const f=r.querySelectorAll(".day-cell[disabled]");n(f.length).toBe(7),await l.keyboard(Ke),await x(()=>{n(u).not.toBeInTheDocument(),n(d).toHaveFocus()})}},je={args:{...R.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:p=>{const[s,d]=m.useState(null),r=u=>{d(u)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",s?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(s):"aucune"]}),a.jsx(H,{...p,value:s,onChange:r})]})},play:async({canvasElement:p})=>{const d=q(p).getByRole("button",{name:Le});d.focus(),await l.tab({shift:!0});for(const f of"14062023")await l.keyboard(f);await l.click(d);const r=await U(),u=r.querySelector("[role='dialog']");n(u).toBeInTheDocument(),await x(()=>{const f=r.querySelector('.day-cell[data-datepicker-active="true"]');n(f).toBeInTheDocument(),n(f).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2)}};var yt,Dt,vt;R.parameters={...R.parameters,docs:{...(yt=R.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(vt=(Dt=R.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var wt,ht,ft;Ce.parameters={...Ce.parameters,docs:{...(wt=Ce.parameters)==null?void 0:wt.docs,source:{originalSource:`{
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
}`,...(Lt=(zt=je.parameters)==null?void 0:zt.docs)==null?void 0:Lt.source}}};const pn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{qe as ControlledPropUpdate,R as Default,Ce as Disabled,je as DisabledDates,Fe as Error,Ye as TabNavigation,Ne as TypingDate,Re as UncontrolledDefaultValue,Me as WithAction,He as WithMinMax,pn as __namedExportsOrder,un as default};
