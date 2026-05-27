import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{T as Ye,a as qe,b as Ht,c as tt,d as He,e as at}from"./keyboard-test.constants-BsQJMPyJ.js";import{D,e as z,E as nt,S as ot,b as De,c as ve,a as he,A as be,f as Pt,B as Ot,g as Kt,h as rt,i as zt}from"./timepicker.constants-CzaknwQ-.js";import{w as M,u as i,e as n,a as S}from"./index-4rjIhT2C.js";import{r as y}from"./index-G8LIXM5I.js";import{f as Gt}from"./testing.utils-mIZIUNbM.js";import{w as Me,B as Lt}from"./BaseInputPicker-DTuIyztM.js";import{u as Wt,r as $t,g as Vt,a as Ut,b as Xt,c as Zt,d as Jt,e as Qt,i as ut,f as ea,h as ta,j as pt,k as it,n as aa,t as na,l as st,s as oa,m as ra,o as ia,p as xe,q as sa,v as ca,w as la,x as da,y as ua,z as pa,A as ma,B as ie,C as je,D as Z,E as de}from"./DatePicker.stories.util-DN6bUf7v.js";import{R as ya,A as ga}from"./RequiredIndicator-Cmvl3eZq.js";import{B as wa}from"./BaseDropdown-oqZpxI1t.js";import{u as Da}from"./useFocusTrap-C1fWr7pY.js";import{B as mt}from"./Button-CXM9p_L3.js";import{D as ct}from"./Divider-BMotkXeQ.js";import{I as X}from"./IconButton-DcIeVO_H.js";import{c as se}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-Bc7wfgCv.js";import"./Link-CAnB1cKs.js";import"./auto-placement-hBju0MTR.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C3W4NyCk.js";const lt={"rte-date-picker":"_rte-date-picker_1e0u2_1","rte-date-picker-header":"_rte-date-picker-header_1e0u2_1"},va="_weekday_1tzza_85",B={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:va,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},jt=({isOpen:p,currentValue:r,hasAction:c,updateFullDate:o,updateDisplayedDate:s,onValidate:k,onCancel:x,displayValue:_,minDate:T,maxDate:F,disabledDates:E,onChange:O})=>{const[m,G]=y.useState(D.DAY),L=y.useRef(null),[ue,pe]=y.useState(null),[Pe,fe]=y.useState(null);Da(L.current,p,!1);const{viewDate:f,setViewDate:W,getNextDateForDayNavigation:Oe,getNextDateForCompactNavigation:ke}=Wt(r),[A,Q]=y.useState(null),[w,R]=y.useState(r??f),[ee]=y.useState(r),Y=y.useMemo(()=>({minDate:T,maxDate:F,disabledDates:E}),[T,F,E]),C=e=>{const t=Oe(e);$(t)},ce=(e,t)=>{const u=ke(e,t);$(u)},$=e=>{const t=na({anchorDay:Pe,viewDate:e,constraints:Y});t!==null&&(Q(t),R(t),s(t))},me=y.useCallback(()=>{const e=$t({textValue:_.split(" ").join(""),constraints:Y,pendingDate:A,selectedDate:r});W(e.viewDate),fe(e.monthNavigationAnchorDay)},[_,A,r,Y,W]),ye=y.useMemo(()=>{const e=f??r??new Date,t=m;return m===D.DAY?Vt(e):t===D.MONTH?Ut(e):Xt(e)},[m,f,r]),te=y.useMemo(()=>Zt({viewDate:f,selectedDate:A??r,minDate:T,maxDate:F,disabledDates:E}),[A,r,f,T,F,E]),V=y.useMemo(()=>Jt({viewDate:f,selectedDate:A??r,minDate:T,maxDate:F,disabledDates:E}),[A,r,f,T,F,E]),ae=y.useMemo(()=>Qt({viewDate:f,selectedDate:A??r,minDate:T,maxDate:F,disabledDates:E}),[A,r,f,T,F,E]),Te=()=>{m===D.DAY?(G(D.MONTH),oe()):m===D.MONTH?(G(D.YEAR),l()):(G(D.DAY),ne())},d=e=>{const t=aa({date:e,constraints:Y});if(t!==null)if(c)s(t),Q(t),W(t),R(t),fe(t.getDate());else{o(t),pe(t),O==null||O(t),k==null||k();return}},le=e=>{const t=new Date(f.getFullYear(),e,1);W(t),R(t),G(D.DAY),ne()},ge=e=>{const t=new Date(e,f.getMonth(),1);W(t),R(t),G(D.MONTH),oe()},Ke=e=>{const t=A??r;return t!==null&&it(e,t)},we=e=>{if(e.key==="Escape"){x==null||x();return}const t=m;t===D.DAY?ze(e):t===D.MONTH?Ge(e):Le(e)},ze=e=>{if(!We(e.target))return;if(e.stopPropagation(),[nt,ot].includes(e.key)){e.preventDefault();const u=w,g=te.find(h=>it(h.date,u));g&&!g.isDisabled&&d(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Ue(e.key))},Ge=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[nt,ot].includes(e.key)){e.preventDefault();const u=w.getMonth(),g=V.find(h=>h.monthIndex===u);g&&!g.isDisabled&&le(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Xe(e.key))},Le=e=>{if(!Ve(e.target))return;if(e.stopPropagation(),[nt,ot].includes(e.key)){e.preventDefault();const u=w.getFullYear(),g=ae.find(h=>h.year===u);g&&!g.isDisabled&&ge(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),K(e.key))},We=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,$e=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,Ve=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Ue=e=>{const t=te,u=pt(t,w);if(u<0)return;const g=st(e,"day"),h=Math.abs(g)===7?7:1,re=g>0?1:-1;let H=u+g;for(;H>=0&&H<t.length&&t[H].isDisabled;)H+=re*h;if(H<0||H>=t.length){const N=oa(ra(w,g));if(Ze(N))return;Je(N),ne();return}const U=t[H].date;R(U),ne()},Xe=e=>{const t=V,u=w.getMonth(),g=t.findIndex(Qe=>Qe.monthIndex===u);if(g<0)return;const h=st(e,"monthYear"),re=ia(w,h);if(re.getFullYear()!==f.getFullYear()){Je(re),oe();return}const H=3,U=t.length;let N=xe({currentIndex:g,key:e,columnCount:H,cellCount:U}),P=0;for(;N!==null&&t[N].isDisabled&&P<U;)N=xe({currentIndex:N,key:e,columnCount:H,cellCount:U}),P+=1;if(N===null||t[N].isDisabled)return;const Be=t[N].monthIndex;R(new Date(f.getFullYear(),Be,1)),oe()},K=e=>{const t=ae,u=w.getFullYear(),g=t.findIndex(et=>et.year===u);if(g<0)return;const h=st(e,"monthYear"),re=u+h;if(!t.map(et=>et.year).includes(re)){Je(new Date(re,0,1)),l();return}const U=3,N=t.length;let P=xe({currentIndex:g,key:e,columnCount:U,cellCount:N}),Be=0;for(;P!==null&&t[P].isDisabled&&Be<N;)P=xe({currentIndex:P,key:e,columnCount:U,cellCount:N}),Be+=1;if(P===null||t[P].isDisabled)return;const Qe=t[P].year;R(new Date(Qe,0,1)),l()},Ze=e=>ut({date:e,...Y}),ne=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},oe=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},l=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},v=()=>{k==null||k();const e=A??r;pe(e),Q(null),o(e)},b=(e,t)=>it(e,t)?0:-1,I=e=>e===w.getMonth()?0:-1,q=e=>e===w.getFullYear()?0:-1,Je=e=>{const t=Y;let u=null;m===D.DAY?u=sa({focusTargetDay:e,constraints:t}):m===D.MONTH?u=ca({focusTargetMonthStart:e,constraints:t}):u=la({focusTargetYear:e.getFullYear(),constraints:t}),u!==null&&(W(u.viewDate),R(u.menuInitialActiveDate))};return y.useEffect(()=>{if(p)me(),ne();else{if(ue)return;if(ee===null)o(null);else if(!ut({date:ee,...Y}))s(ee);else{const e=ea(ee,Y);e&&o(e)}}},[p,me,r,s,ee,ue,T,F,E,o,Y]),y.useEffect(()=>{(()=>{if(m===D.DAY){const t=te;if(pt(t,w)>=0)return;const g=t.find(h=>!h.isDisabled);g&&R(g.date)}else if(m===D.MONTH){const t=V,u=w.getMonth();if(t.some(h=>h.monthIndex===u&&!h.isDisabled&&f.getFullYear()===w.getFullYear()))return;const g=t.find(h=>!h.isDisabled);g&&R(new Date(f.getFullYear(),g.monthIndex,1))}else{const t=ae,u=w.getFullYear();if(t.some(h=>h.year===u&&!h.isDisabled))return;const g=t.find(h=>!h.isDisabled);g&&R(new Date(g.year,0,1))}})()},[f,w,m,te,V,ae]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:L,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:we,children:[a.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:B["nav-left"],children:m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>C("prevYear")}),a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>C("prevMonth")})]}):m===D.MONTH?a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>ce("previous","month")}):a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>ce("previous","year")})}),m===D.YEAR?a.jsx("span",{className:se(B["month-label"],"month-label-static"),children:ye}):a.jsx("button",{className:B["month-label"],onClick:Te,"aria-label":`Changer de vue, ${ye} , appuyer pour voir les ${m===D.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:ye}),a.jsx("div",{className:B["nav-right"],children:m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>C("nextMonth")}),a.jsx(X,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>C("nextYear")})]}):m===D.MONTH?a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>ce("next","month")}):a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>ce("next","year")})})]}),m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:B["rte-datepicker-weekdays"],"aria-hidden":"true",children:ta().map((e,t)=>a.jsx("div",{className:B.weekday,children:e},t))}),a.jsx(ct,{appearance:"brand"}),a.jsx("div",{className:se(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:te.map(e=>a.jsxs("button",{type:"button",className:se(B["day-cell"],"day-cell"),role:"gridcell",onClick:()=>d(e.date),"aria-selected":Ke(e.date),tabIndex:b(e.date,w),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(w==null?void 0:w.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:B["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):m===D.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:se(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:V.map(e=>a.jsx("button",{type:"button",className:se(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:I(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":f.getMonth(),"data-active-date-year":w.getFullYear(),"data-active-view-year":f.getFullYear(),"data-datepicker-active":e.monthIndex===w.getMonth()&&f.getFullYear()===w.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>le(e.monthIndex),children:a.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:se(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:ae.map(e=>a.jsx("button",{type:"button",className:se(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(w==null?void 0:w.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:q(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>ge(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[a.jsx(mt,{label:"Annuler",size:"s",variant:"transparent",onClick:x}),a.jsx(mt,{label:"Confirmer",size:"s",variant:"transparent",onClick:v})]})]})})};jt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const ha=/^\d*$/,[Ee,Se,dt]=Pt,J=y.forwardRef(({id:p,label:r,labelId:c,required:o=!1,showLabelRequirement:s=!1,disabled:k=!1,value:x,readonly:_=!1,onChange:T,hasAction:F=!1,onCancel:E,onValidate:O,minDate:m,maxDate:G,disabledDates:L,isError:ue,assistiveTextLabel:pe,assistiveAppearance:Pe="description",showAssistiveIcon:fe=!1,assistiveTextLink:f},W)=>{var oe;const[Oe,ke]=y.useState(!1),[A,Q]=y.useState(!1),w=pe&&!A,{increaseActiveSegmentValue:R,decreaseActiveSegmentValue:ee,resetActiveSegmentValue:Y,updateDateSegment:C,updateFullDate:ce,internalValue:$,displayValue:me,dateState:ye,updateDisplayedDate:te}=da(x,{minDate:m,maxDate:G,disabledDates:L}),{moveToNextSegment:V,moveToPreviousSegment:ae,setActiveDateSegment:Te,activeDateSegment:d}=ua();y.useEffect(()=>{$?T==null||T($):T==null||T(null)},[$,T]);const le=y.useRef(null),ge=y.useRef(null),Ke=()=>{ze(),K(d)},we=()=>{ke(!1),Q(!1)},ze=()=>{k||ke(!0)},Ge=()=>{k||Q(!0)},Le=l=>{const v=l.key;if(l.stopPropagation(),K(d),[he,be,De,ve,Ot,Kt].includes(v))l.preventDefault(),We(v);else if(ha.test(v))l.preventDefault(),$e(v);else return},We=l=>{l===ve?V():l===De?ae():l===he?R(d):l===be?ee(d):Y(d)},$e=l=>{const b=ye[`${d===Ee?"day":d===Se?"month":"year"}Digits`];d===dt&&b.length>=4?Ve(b,l):Ue(b,l)},Ve=(l,v)=>{const b=Array.from(l).findIndex(I=>I!=="0");if(b===0){const I=ie(Number(v),d);C(d,I)}else{const I=l.slice(b)+v,q=ie(Math.min(Number(I),rt[d]),d);C(d,q)}},Ue=(l,v)=>{if(l.length>=2)if(l[0]==="0"){const b=Number(l[1]+v),I=ie(Math.min(b,rt[d]),d);C(d,I),V()}else{const b=ie(Number(v),d);C(d,b)}else{const b=`${l}${v}`,I=zt[d];if(l.length===0&&Number(v)>I){const q=ie(Number(v),d);C(d,q)}else if(b.length===2){const q=ie(Math.min(Number(b),rt[d]),d);C(d,q)}else{const q=ie(Number(v),d);C(d,q)}}},Xe=()=>{var I;A&&Q(!1);const l=((I=le.current)==null?void 0:I.selectionStart)??0,v=ma(),b=1;l<=v[Ee][b]+1?K(Ee):l<=v[Se][b]+1?K(Se):K(dt)},K=y.useCallback(l=>{Te(l);const v=3,b=l===Ee?0:l===Se?2+v:0+2*(2+v),I=l===dt?b+4:b+2;Me(()=>{var q;(q=le.current)==null||q.setSelectionRange(b,I)})},[Te]),Ze=()=>{E==null||E(),we()},ne=()=>{O==null||O(),we()};return y.useEffect(()=>{K(d)},[d,K]),a.jsxs("div",{className:lt["rte-date-picker"],style:{minWidth:"248px"},ref:W,children:[a.jsx("div",{className:lt["rte-date-picker-header"],children:a.jsxs("label",{htmlFor:p,id:c??r,className:lt["rte-datepicker-label"],children:[r,a.jsx(ya,{required:o,showLabelRequirement:s})]})}),a.jsx(wa,{style:{width:(oe=ge.current)==null?void 0:oe.offsetWidth},isList:!1,isOpen:A,onClose:we,offset:8,trigger:a.jsx(Lt,{id:p,ariaLabelledBy:c??r,icon:"calendar-month",onFocus:Ke,isFocused:Oe,pickerInputRef:le,onOpenPicker:Ge,value:me,onKeyDown:Le,onMouseUp:Xe,onChange:()=>{},fixedWidth:!1,pickerRef:ge,openButtonAriaLabel:pa($),isError:ue,disabled:k,readOnly:_}),position:"bottom",children:a.jsx(jt,{isOpen:A,currentValue:$,hasAction:F,onValidate:ne,onCancel:Ze,updateDisplayedDate:te,updateFullDate:ce,displayValue:me,minDate:m,maxDate:G,disabledDates:L})}),w&&a.jsx(ga,{label:pe,appearance:ue?"error":Pe,showIcon:fe,href:f})]})});J.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Va={title:"Composants/DatePicker/DatePicker",component:J,tags:["autodocs"]},j={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})}},_e={args:{...j.args,disabled:!0}},Ie={args:{...j.args,isError:!0}},Ae={args:{...j.args,value:null},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})},play:async({canvasElement:p})=>{Gt(p),await i.tab();for(const c of"15062023")await i.keyboard(c);const r=p.querySelector("input");n(de(r)).toBe("15/06/2023"),await i.keyboard(qe),n(de(r)).toBe("15/06/2022"),await i.keyboard(tt),n(de(r)).toBe("15/06/2023"),await i.keyboard(He),await i.keyboard(tt),n(de(r)).toBe("15/07/2023"),await i.keyboard(He),await i.keyboard(tt),n(de(r)).toBe("16/07/2023"),await i.keyboard(Ht),await i.keyboard(qe),await i.keyboard(qe),n(de(r)).toBe("16/05/2023")}},Fe={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});await i.click(c);let o=await Z(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument();const k=o.querySelectorAll(".day-cell");n(k.length).toBeGreaterThan(0),await i.click(k[10]),await i.click(M(o).getByRole("button",{name:/confirmer/i})),await S(()=>{n(s).not.toBeInTheDocument()}),await i.click(c),o=await Z(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument();const x=o.querySelector(".day-cell[data-datepicker-active='true']");n(x).toBeInTheDocument(),n(x).toHaveFocus(),await i.keyboard("{Escape}")}},Ne={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});await i.click(c);let o=await Z();await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=M(o);n(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const k=o.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await i.click(k),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const x=o.querySelector('[data-datepicker-tab="month-label"]');n(x).toBeTruthy(),await i.click(x),await S(()=>{n(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(s.getByText("Sélectionner une année")).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(o.querySelector(".month-label-static")).toBeInTheDocument(),n(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(o.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ye),await S(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await Z(),await S(()=>{const m=o.querySelector('.day-cell[data-datepicker-active="true"]');n(m).toBeInTheDocument(),n(m).toHaveFocus()});const _=o.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const T=M(o).getByRole("button",{name:/^annuler$/i});n(T).toHaveFocus(),await i.keyboard(qe),n(T).toHaveFocus(),await i.tab({shift:!0}),n(_).toHaveFocus(),await i.keyboard(Ht),await S(()=>{const m=o.querySelector('.day-cell[data-datepicker-active="true"]');n(m).toBeInTheDocument(),n(m).toHaveFocus(),n(m).not.toBe(_)}),await i.keyboard(Ye),await S(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await Z();const F=o.querySelector('[data-datepicker-tab="month-label"]');n(F).toBeTruthy(),await i.click(F),await S(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const E=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(E).toBeTruthy(),await S(()=>{n(E).toHaveFocus()}),await i.tab(),await S(()=>{n(M(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(E).toHaveFocus();const O=M(o).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(O).toHaveFocus(),await i.tab(),n(E).toHaveFocus()}},Re={args:{...j.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const _ of"03012020")await i.keyboard(_);await i.click(c);let o=await Z(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at);for(const _ of"20082024")await i.keyboard(_);await i.click(c),o=await Z(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument(),await S(()=>{const _=o.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const x=o.querySelectorAll(".day-cell[disabled]");n(x.length).toBe(7),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()})}},Ce={args:{...j.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:p=>{const[r,c]=y.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(J,{...p,value:r,onChange:o})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const x of"14062023")await i.keyboard(x);await i.click(c);const o=await Z(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const x=o.querySelector('.day-cell[data-datepicker-active="true"]');n(x).toBeInTheDocument(),n(x).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2)}};var yt,gt,wt;j.parameters={...j.parameters,docs:{...(yt=j.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(wt=(gt=j.parameters)==null?void 0:gt.docs)==null?void 0:wt.source}}};var Dt,vt,ht;_e.parameters={..._e.parameters,docs:{...(Dt=_e.parameters)==null?void 0:Dt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ht=(vt=_e.parameters)==null?void 0:vt.docs)==null?void 0:ht.source}}};var bt,ft,kt;Ie.parameters={...Ie.parameters,docs:{...(bt=Ie.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(kt=(ft=Ie.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Tt,Bt,xt;Ae.parameters={...Ae.parameters,docs:{...(Tt=Ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(xt=(Bt=Ae.parameters)==null?void 0:Bt.docs)==null?void 0:xt.source}}};var Et,St,_t;Fe.parameters={...Fe.parameters,docs:{...(Et=Fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(_t=(St=Fe.parameters)==null?void 0:St.docs)==null?void 0:_t.source}}};var It,At,Ft;Ne.parameters={...Ne.parameters,docs:{...(It=Ne.parameters)==null?void 0:It.docs,source:{originalSource:`{
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
}`,...(Ft=(At=Ne.parameters)==null?void 0:At.docs)==null?void 0:Ft.source}}};var Nt,Rt,Ct;Re.parameters={...Re.parameters,docs:{...(Nt=Re.parameters)==null?void 0:Nt.docs,source:{originalSource:`{
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
}`,...(Ct=(Rt=Re.parameters)==null?void 0:Rt.docs)==null?void 0:Ct.source}}};var qt,Mt,Yt;Ce.parameters={...Ce.parameters,docs:{...(qt=Ce.parameters)==null?void 0:qt.docs,source:{originalSource:`{
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
}`,...(Yt=(Mt=Ce.parameters)==null?void 0:Mt.docs)==null?void 0:Yt.source}}};const Ua=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{j as Default,_e as Disabled,Ce as DisabledDates,Ie as Error,Ne as TabNavigation,Ae as TypingDate,Fe as WithAction,Re as WithMinMax,Ua as __namedExportsOrder,Va as default};
