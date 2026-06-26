import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ye,b as qe,c as Yt,d as tt,e as He,f as at}from"./keyboard-test.constants-C4IJ8E3i.js";import{D,a as z,b as jt,c as nt,d as Pt}from"./timepicker.constants-V9Xrpx_a.js";import{w as M,u as i,e as n,a as S}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{f as Ot}from"./testing.utils-mIZIUNbM.js";import{w as Me,B as Kt}from"./BaseInputPicker-BuTIV43a.js";import{E as ot,S as rt,b as De,c as ve,a as he,A as be,B as zt,D as Lt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Gt,r as Wt,g as $t,a as Vt,b as Ut,c as Xt,d as Zt,e as Jt,i as dt,f as Qt,h as ea,j as ut,k as it,n as ta,t as aa,l as st,s as na,m as oa,o as ra,p as xe,q as ia,v as sa,w as ca,x as la,y as da,z as ua,A as pa,B as re,C as je,D as J,E as pe}from"./DatePicker.stories.util-D9rxAAa-.js";import{L as ma,A as ya}from"./Label-CxN0O2hj.js";import{B as ga}from"./BaseDropdown-B1GdRc4u.js";import{u as wa}from"./useFocusTrap-C_kwluQD.js";import{B as pt}from"./Button-BIfM-PmD.js";import{D as ct}from"./Divider-BMotkXeQ.js";import{I as Z}from"./IconButton-B3cia4P8.js";import{c as ie}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-CU2dhKsu.js";import"./Link-DbhMk7ak.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C50GdgLn.js";const Da={"rte-date-picker":"_rte-date-picker_1e0u2_1"},va="_weekday_1tzza_85",B={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:va,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Ht=({isOpen:g,currentValue:r,hasAction:c,updateFullDate:o,updateDisplayedDate:s,onValidate:k,onCancel:x,displayValue:_,minDate:T,maxDate:A,disabledDates:E,onChange:O})=>{const[p,L]=y.useState(D.DAY),G=y.useRef(null),[me,ye]=y.useState(null),[Pe,fe]=y.useState(null);wa(G.current,g,!1);const{viewDate:f,setViewDate:W,getNextDateForDayNavigation:Oe,getNextDateForCompactNavigation:Ke}=Gt(r),[R,$]=y.useState(null),[m,C]=y.useState(r??f),[ee]=y.useState(r),Y=y.useMemo(()=>({minDate:T,maxDate:A,disabledDates:E}),[T,A,E]),se=e=>{const t=Oe(e);ke(t)},q=(e,t)=>{const u=Ke(e,t);ke(u)},ke=e=>{const t=aa({anchorDay:Pe,viewDate:e,constraints:Y});t!==null&&($(t),C(t),s(t))},V=y.useCallback(()=>{const e=Wt({textValue:_.split(" ").join(""),constraints:Y,pendingDate:R,selectedDate:r});W(e.viewDate),fe(e.monthNavigationAnchorDay)},[_,R,r,Y,W]),ce=y.useMemo(()=>{const e=f??r??new Date,t=p;return p===D.DAY?$t(e):t===D.MONTH?Vt(e):Ut(e)},[p,f,r]),te=y.useMemo(()=>Xt({viewDate:f,selectedDate:R??r,minDate:T,maxDate:A,disabledDates:E}),[R,r,f,T,A,E]),ae=y.useMemo(()=>Zt({viewDate:f,selectedDate:R??r,minDate:T,maxDate:A,disabledDates:E}),[R,r,f,T,A,E]),U=y.useMemo(()=>Jt({viewDate:f,selectedDate:R??r,minDate:T,maxDate:A,disabledDates:E}),[R,r,f,T,A,E]),ze=()=>{p===D.DAY?(L(D.MONTH),de()):p===D.MONTH?(L(D.YEAR),ue()):(L(D.DAY),ne())},ge=e=>{const t=ta({date:e,constraints:Y});if(t!==null)if(c)s(t),$(t),W(t),C(t),fe(t.getDate());else{o(t),ye(t),O==null||O(t),k==null||k();return}},l=e=>{const t=new Date(f.getFullYear(),e,1);W(t),C(t),L(D.DAY),ne()},le=e=>{const t=new Date(e,f.getMonth(),1);W(t),C(t),L(D.MONTH),de()},Te=e=>{const t=R??r;return t!==null&&it(e,t)},Le=e=>{if(e.key==="Escape"){x==null||x();return}const t=p;t===D.DAY?we(e):t===D.MONTH?Ge(e):We(e)},we=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const u=m,w=te.find(h=>it(h.date,u));w&&!w.isDisabled&&ge(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Xe(e.key))},Ge=e=>{if(!Ve(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const u=m.getMonth(),w=ae.find(h=>h.monthIndex===u);w&&!w.isDisabled&&l(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Ze(e.key))},We=e=>{if(!Ue(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const u=m.getFullYear(),w=U.find(h=>h.year===u);w&&!w.isDisabled&&le(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Je(e.key))},$e=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ve=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,Ue=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Xe=e=>{const t=te,u=ut(t,m);if(u<0)return;const w=st(e,"day"),h=Math.abs(w)===7?7:1,oe=w>0?1:-1;let H=u+w;for(;H>=0&&H<t.length&&t[H].isDisabled;)H+=oe*h;if(H<0||H>=t.length){const N=na(oa(m,w));if(K(N))return;F(N),ne();return}const X=t[H].date;C(X),ne()},Ze=e=>{const t=ae,u=m.getMonth(),w=t.findIndex(Qe=>Qe.monthIndex===u);if(w<0)return;const h=st(e,"monthYear"),oe=ra(m,h);if(oe.getFullYear()!==f.getFullYear()){F(oe),de();return}const H=3,X=t.length;let N=xe({currentIndex:w,key:e,columnCount:H,cellCount:X}),P=0;for(;N!==null&&t[N].isDisabled&&P<X;)N=xe({currentIndex:N,key:e,columnCount:H,cellCount:X}),P+=1;if(N===null||t[N].isDisabled)return;const Be=t[N].monthIndex;C(new Date(f.getFullYear(),Be,1)),de()},Je=e=>{const t=U,u=m.getFullYear(),w=t.findIndex(et=>et.year===u);if(w<0)return;const h=st(e,"monthYear"),oe=u+h;if(!t.map(et=>et.year).includes(oe)){F(new Date(oe,0,1)),ue();return}const X=3,N=t.length;let P=xe({currentIndex:w,key:e,columnCount:X,cellCount:N}),Be=0;for(;P!==null&&t[P].isDisabled&&Be<N;)P=xe({currentIndex:P,key:e,columnCount:X,cellCount:N}),Be+=1;if(P===null||t[P].isDisabled)return;const Qe=t[P].year;C(new Date(Qe,0,1)),ue()},K=e=>dt({date:e,...Y}),ne=()=>{Me(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},de=()=>{Me(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ue=()=>{Me(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},d=()=>{k==null||k();const e=R??r;ye(e),$(null),o(e)},v=(e,t)=>it(e,t)?0:-1,b=e=>e===m.getMonth()?0:-1,I=e=>e===m.getFullYear()?0:-1,F=e=>{const t=Y;let u=null;p===D.DAY?u=ia({focusTargetDay:e,constraints:t}):p===D.MONTH?u=sa({focusTargetMonthStart:e,constraints:t}):u=ca({focusTargetYear:e.getFullYear(),constraints:t}),u!==null&&(W(u.viewDate),C(u.menuInitialActiveDate))};return y.useEffect(()=>{if(g)V(),ne();else{if(me)return;if(ee===null)o(null);else if(!dt({date:ee,...Y}))s(ee);else{const e=Qt(ee,Y);e&&o(e)}}},[g,V,r,s,ee,me,T,A,E,o,Y]),y.useEffect(()=>{(()=>{if(p===D.DAY){const t=te;if(ut(t,m)>=0)return;const w=t.find(h=>!h.isDisabled);w&&C(w.date)}else if(p===D.MONTH){const t=ae,u=m.getMonth();if(t.some(h=>h.monthIndex===u&&!h.isDisabled&&f.getFullYear()===m.getFullYear()))return;const w=t.find(h=>!h.isDisabled);w&&C(new Date(f.getFullYear(),w.monthIndex,1))}else{const t=U,u=m.getFullYear();if(t.some(h=>h.year===u&&!h.isDisabled))return;const w=t.find(h=>!h.isDisabled);w&&C(new Date(w.year,0,1))}})()},[f,m,p,te,ae,U]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:G,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Le,children:[a.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:B["nav-left"],children:p===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>se("prevYear")}),a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>se("prevMonth")})]}):p===D.MONTH?a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>q("previous","month")}):a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>q("previous","year")})}),p===D.YEAR?a.jsx("span",{className:ie(B["month-label"],"month-label-static"),children:ce}):a.jsx("button",{className:B["month-label"],onClick:ze,"aria-label":`Changer de vue, ${ce} , appuyer pour voir les ${p===D.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:ce}),a.jsx("div",{className:B["nav-right"],children:p===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>se("nextMonth")}),a.jsx(Z,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>se("nextYear")})]}):p===D.MONTH?a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>q("next","month")}):a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>q("next","year")})})]}),p===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:B["rte-datepicker-weekdays"],"aria-hidden":"true",children:ea().map((e,t)=>a.jsx("div",{className:B.weekday,children:e},t))}),a.jsx(ct,{appearance:"brand"}),a.jsx("div",{className:ie(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:te.map(e=>a.jsxs("button",{type:"button",className:ie(B["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ge(e.date),"aria-selected":Te(e.date),tabIndex:v(e.date,m),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(m==null?void 0:m.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:B["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):p===D.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ie(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ae.map(e=>a.jsx("button",{type:"button",className:ie(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:b(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":f.getMonth(),"data-active-date-year":m.getFullYear(),"data-active-view-year":f.getFullYear(),"data-datepicker-active":e.monthIndex===m.getMonth()&&f.getFullYear()===m.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>l(e.monthIndex),children:a.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ie(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:U.map(e=>a.jsx("button",{type:"button",className:ie(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(m==null?void 0:m.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:I(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>le(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[a.jsx(pt,{label:"Annuler",size:"s",variant:"transparent",onClick:x}),a.jsx(pt,{label:"Confirmer",size:"s",variant:"transparent",onClick:d})]})]})})};Ht.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const ha=/^\d*$/,[Ee,Se,lt]=jt,Q=y.forwardRef(({id:g,label:r,labelId:c,required:o=!1,showLabelRequirement:s=!1,disabled:k=!1,value:x,readonly:_=!1,onChange:T,hasAction:A=!1,onCancel:E,onValidate:O,minDate:p,maxDate:L,disabledDates:G,isError:me,assistiveTextLabel:ye,assistiveAppearance:Pe="description",showAssistiveIcon:fe=!1,assistiveTextLink:f,width:W="248px"},Oe)=>{var ue;const[Ke,R]=y.useState(!1),[$,m]=y.useState(!1),C=ye&&!$,{increaseActiveSegmentValue:ee,decreaseActiveSegmentValue:Y,resetActiveSegmentValue:se,updateDateSegment:q,updateFullDate:ke,internalValue:V,displayValue:ce,dateState:te,updateDisplayedDate:ae}=la(x,{minDate:p,maxDate:L,disabledDates:G}),{moveToNextSegment:U,moveToPreviousSegment:ze,setActiveDateSegment:ge,activeDateSegment:l}=da();y.useEffect(()=>{V?T==null||T(V):T==null||T(null)},[V,T]);const le=y.useRef(null),Te=y.useRef(null),Le=()=>{Ge(),K(l)},we=()=>{R(!1),m(!1)},Ge=()=>{k||R(!0)},We=()=>{k||m(!0)},$e=d=>{const v=d.key;if(d.stopPropagation(),K(l),[he,be,De,ve,zt,Lt].includes(v))d.preventDefault(),Ve(v);else if(ha.test(v))d.preventDefault(),Ue(v);else return},Ve=d=>{d===ve?U():d===De?ze():d===he?ee(l):d===be?Y(l):se(l)},Ue=d=>{const b=te[`${l===Ee?"day":l===Se?"month":"year"}Digits`];l===lt&&b.length>=4?Xe(b,d):Ze(b,d)},Xe=(d,v)=>{const b=Array.from(d).findIndex(I=>I!=="0");if(b===0){const I=re(Number(v),l);q(l,I)}else{const I=d.slice(b)+v,F=re(Math.min(Number(I),nt[l]),l);q(l,F)}},Ze=(d,v)=>{if(d.length>=2)if(d[0]==="0"){const b=Number(d[1]+v),I=re(Math.min(b,nt[l]),l);q(l,I),U()}else{const b=re(Number(v),l);q(l,b)}else{const b=`${d}${v}`,I=Pt[l];if(d.length===0&&Number(v)>I){const F=re(Number(v),l);q(l,F)}else if(b.length===2){const F=re(Math.min(Number(b),nt[l]),l);q(l,F)}else{const F=re(Number(v),l);q(l,F)}}},Je=()=>{var I;$&&m(!1);const d=((I=le.current)==null?void 0:I.selectionStart)??0,v=pa(),b=1;d<=v[Ee][b]+1?K(Ee):d<=v[Se][b]+1?K(Se):K(lt)},K=y.useCallback(d=>{ge(d);const v=3,b=d===Ee?0:d===Se?2+v:0+2*(2+v),I=d===lt?b+4:b+2;Me(()=>{var F;(F=le.current)==null||F.setSelectionRange(b,I)})},[ge]),ne=()=>{E==null||E(),we()},de=()=>{O==null||O(),we()};return y.useEffect(()=>{K(l)},[l,K]),a.jsxs("div",{className:Da["rte-date-picker"],style:{minWidth:"248px",width:W},ref:Oe,children:[a.jsx(ma,{id:c,label:r,required:o,showLabelRequirement:s}),a.jsx(ga,{style:{width:(ue=Te.current)==null?void 0:ue.offsetWidth},isList:!1,isOpen:$,onClose:we,offset:8,trigger:a.jsx(Kt,{id:g,ariaLabelledBy:c??r,icon:"calendar-month",onFocus:Le,isFocused:Ke,pickerInputRef:le,onOpenPicker:We,value:ce,onKeyDown:$e,onMouseUp:Je,onChange:()=>{},fixedWidth:!1,pickerRef:Te,openButtonAriaLabel:ua(V),isError:me,disabled:k,readOnly:_}),position:"bottom",children:a.jsx(Ht,{isOpen:$,currentValue:V,hasAction:A,onValidate:de,onCancel:ne,updateDisplayedDate:ae,updateFullDate:ke,displayValue:ce,minDate:p,maxDate:L,disabledDates:G})}),C&&a.jsx(ya,{label:ye,appearance:me?"error":Pe,showIcon:fe,href:f})]})});Q.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Xa={title:"Composants/DatePicker/DatePicker",component:Q,tags:["autodocs"]},j={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,required:!1,showLabelRequirement:!1},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})}},_e={args:{...j.args,disabled:!0}},Ie={args:{...j.args,isError:!0}},Ae={args:{...j.args,value:null},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})},play:async({canvasElement:g})=>{Ot(g),await i.tab();for(const c of"15062023")await i.keyboard(c);const r=g.querySelector("input");n(pe(r)).toBe("15/06/2023"),await i.keyboard(qe),n(pe(r)).toBe("15/06/2022"),await i.keyboard(tt),n(pe(r)).toBe("15/06/2023"),await i.keyboard(He),await i.keyboard(tt),n(pe(r)).toBe("15/07/2023"),await i.keyboard(He),await i.keyboard(tt),n(pe(r)).toBe("16/07/2023"),await i.keyboard(Yt),await i.keyboard(qe),await i.keyboard(qe),n(pe(r)).toBe("16/05/2023")}},Fe={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})},play:async({canvasElement:g})=>{const c=M(g).getByRole("button",{name:je});await i.click(c);let o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument();const k=o.querySelectorAll(".day-cell");n(k.length).toBeGreaterThan(0),await i.click(k[10]),await i.click(M(o).getByRole("button",{name:/confirmer/i})),await S(()=>{n(s).not.toBeInTheDocument()}),await i.click(c),o=await J(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument();const x=o.querySelector(".day-cell[data-datepicker-active='true']");n(x).toBeInTheDocument(),n(x).toHaveFocus(),await i.keyboard("{Escape}")}},Ne={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})},play:async({canvasElement:g})=>{const c=M(g).getByRole("button",{name:je});await i.click(c);let o=await J();await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=M(o);n(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const k=o.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await i.click(k),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const x=o.querySelector('[data-datepicker-tab="month-label"]');n(x).toBeTruthy(),await i.click(x),await S(()=>{n(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(s.getByText("Sélectionner une année")).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(o.querySelector(".month-label-static")).toBeInTheDocument(),n(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(o.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ye),await S(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await J(),await S(()=>{const p=o.querySelector('.day-cell[data-datepicker-active="true"]');n(p).toBeInTheDocument(),n(p).toHaveFocus()});const _=o.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const T=M(o).getByRole("button",{name:/^annuler$/i});n(T).toHaveFocus(),await i.keyboard(qe),n(T).toHaveFocus(),await i.tab({shift:!0}),n(_).toHaveFocus(),await i.keyboard(Yt),await S(()=>{const p=o.querySelector('.day-cell[data-datepicker-active="true"]');n(p).toBeInTheDocument(),n(p).toHaveFocus(),n(p).not.toBe(_)}),await i.keyboard(Ye),await S(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await J();const A=o.querySelector('[data-datepicker-tab="month-label"]');n(A).toBeTruthy(),await i.click(A),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const E=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(E).toBeTruthy(),await S(()=>{n(E).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(E).toHaveFocus();const O=M(o).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(O).toHaveFocus(),await i.tab(),n(E).toHaveFocus()}},Re={args:{...j.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})},play:async({canvasElement:g})=>{const c=M(g).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const _ of"03012020")await i.keyboard(_);await i.click(c);let o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at);for(const _ of"20082024")await i.keyboard(_);await i.click(c),o=await J(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const x=o.querySelectorAll(".day-cell[disabled]");n(x.length).toBe(7),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()})}},Ce={args:{...j.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:g=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...g,value:r,onChange:o})]})},play:async({canvasElement:g})=>{const c=M(g).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const x of"14062023")await i.keyboard(x);await i.click(c);const o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const x=o.querySelector('.day-cell[data-datepicker-active="true"]');n(x).toBeInTheDocument(),n(x).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2)}};var mt,yt,gt;j.parameters={...j.parameters,docs:{...(mt=j.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(yt=j.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var wt,Dt,vt;_e.parameters={..._e.parameters,docs:{...(wt=_e.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(vt=(Dt=_e.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var ht,bt,ft;Ie.parameters={...Ie.parameters,docs:{...(ht=Ie.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(ft=(bt=Ie.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var kt,Tt,Bt;Ae.parameters={...Ae.parameters,docs:{...(kt=Ae.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Bt=(Tt=Ae.parameters)==null?void 0:Tt.docs)==null?void 0:Bt.source}}};var xt,Et,St;Fe.parameters={...Fe.parameters,docs:{...(xt=Fe.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(St=(Et=Fe.parameters)==null?void 0:Et.docs)==null?void 0:St.source}}};var _t,It,At;Ne.parameters={...Ne.parameters,docs:{...(_t=Ne.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(At=(It=Ne.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ft,Nt,Rt;Re.parameters={...Re.parameters,docs:{...(Ft=Re.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Rt=(Nt=Re.parameters)==null?void 0:Nt.docs)==null?void 0:Rt.source}}};var Ct,qt,Mt;Ce.parameters={...Ce.parameters,docs:{...(Ct=Ce.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
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
}`,...(Mt=(qt=Ce.parameters)==null?void 0:qt.docs)==null?void 0:Mt.source}}};const Za=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{j as Default,_e as Disabled,Ce as DisabledDates,Ie as Error,Ne as TabNavigation,Ae as TypingDate,Fe as WithAction,Re as WithMinMax,Za as __namedExportsOrder,Xa as default};
