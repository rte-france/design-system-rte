import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ye,b as qe,c as Ht,d as tt,e as He,f as at}from"./keyboard-test.constants-C4IJ8E3i.js";import{D,a as z,b as Pt,c as nt,d as Ot}from"./timepicker.constants-V9Xrpx_a.js";import{w as M,u as i,e as n,a as S}from"./index-4rjIhT2C.js";import{r as g}from"./index-G8LIXM5I.js";import{f as Kt}from"./testing.utils-mIZIUNbM.js";import{w as Me,B as zt}from"./BaseInputPicker-CPcCLI5t.js";import{E as rt,S as ot,b as De,c as ve,a as he,A as be,B as Gt,D as Lt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Wt,r as $t,g as Vt,a as Ut,b as Xt,c as Zt,d as Jt,e as Qt,i as ut,f as ea,h as ta,j as pt,k as it,n as aa,t as na,l as st,s as ra,m as oa,o as ia,p as Be,q as sa,v as ca,w as la,x as da,y as ua,z as pa,A as ma,B as oe,C as je,D as J,E as pe}from"./DatePicker.stories.util-D9rxAAa-.js";import{R as ya,A as ga}from"./RequiredIndicator-DM7xTNgi.js";import{B as wa}from"./BaseDropdown-CgvF33v4.js";import{u as Da}from"./useFocusTrap-C_kwluQD.js";import{B as mt}from"./Button-b4mHgHU2.js";import{D as ct}from"./Divider-BMotkXeQ.js";import{I as Z}from"./IconButton-HZdrGdmr.js";import{c as ie}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Link-DLPtM2IA.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";const lt={"rte-date-picker":"_rte-date-picker_1e0u2_1","rte-date-picker-header":"_rte-date-picker-header_1e0u2_1"},va="_weekday_1tzza_85",x={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:va,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},jt=({isOpen:p,currentValue:o,hasAction:c,updateFullDate:r,updateDisplayedDate:s,onValidate:k,onCancel:B,displayValue:_,minDate:T,maxDate:A,disabledDates:E,onChange:O})=>{const[m,G]=g.useState(D.DAY),L=g.useRef(null),[me,ye]=g.useState(null),[Pe,fe]=g.useState(null);Da(L.current,p,!1);const{viewDate:f,setViewDate:W,getNextDateForDayNavigation:Oe,getNextDateForCompactNavigation:Ke}=Wt(o),[R,$]=g.useState(null),[y,C]=g.useState(o??f),[ee]=g.useState(o),Y=g.useMemo(()=>({minDate:T,maxDate:A,disabledDates:E}),[T,A,E]),se=e=>{const t=Oe(e);ke(t)},q=(e,t)=>{const u=Ke(e,t);ke(u)},ke=e=>{const t=na({anchorDay:Pe,viewDate:e,constraints:Y});t!==null&&($(t),C(t),s(t))},V=g.useCallback(()=>{const e=$t({textValue:_.split(" ").join(""),constraints:Y,pendingDate:R,selectedDate:o});W(e.viewDate),fe(e.monthNavigationAnchorDay)},[_,R,o,Y,W]),ce=g.useMemo(()=>{const e=f??o??new Date,t=m;return m===D.DAY?Vt(e):t===D.MONTH?Ut(e):Xt(e)},[m,f,o]),te=g.useMemo(()=>Zt({viewDate:f,selectedDate:R??o,minDate:T,maxDate:A,disabledDates:E}),[R,o,f,T,A,E]),ae=g.useMemo(()=>Jt({viewDate:f,selectedDate:R??o,minDate:T,maxDate:A,disabledDates:E}),[R,o,f,T,A,E]),U=g.useMemo(()=>Qt({viewDate:f,selectedDate:R??o,minDate:T,maxDate:A,disabledDates:E}),[R,o,f,T,A,E]),ze=()=>{m===D.DAY?(G(D.MONTH),de()):m===D.MONTH?(G(D.YEAR),ue()):(G(D.DAY),ne())},ge=e=>{const t=aa({date:e,constraints:Y});if(t!==null)if(c)s(t),$(t),W(t),C(t),fe(t.getDate());else{r(t),ye(t),O==null||O(t),k==null||k();return}},l=e=>{const t=new Date(f.getFullYear(),e,1);W(t),C(t),G(D.DAY),ne()},le=e=>{const t=new Date(e,f.getMonth(),1);W(t),C(t),G(D.MONTH),de()},Te=e=>{const t=R??o;return t!==null&&it(e,t)},Ge=e=>{if(e.key==="Escape"){B==null||B();return}const t=m;t===D.DAY?we(e):t===D.MONTH?Le(e):We(e)},we=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const u=y,w=te.find(h=>it(h.date,u));w&&!w.isDisabled&&ge(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Xe(e.key))},Le=e=>{if(!Ve(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const u=y.getMonth(),w=ae.find(h=>h.monthIndex===u);w&&!w.isDisabled&&l(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Ze(e.key))},We=e=>{if(!Ue(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const u=y.getFullYear(),w=U.find(h=>h.year===u);w&&!w.isDisabled&&le(u);return}[De,ve,he,be].includes(e.key)&&(e.preventDefault(),Je(e.key))},$e=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ve=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,Ue=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Xe=e=>{const t=te,u=pt(t,y);if(u<0)return;const w=st(e,"day"),h=Math.abs(w)===7?7:1,re=w>0?1:-1;let H=u+w;for(;H>=0&&H<t.length&&t[H].isDisabled;)H+=re*h;if(H<0||H>=t.length){const N=ra(oa(y,w));if(K(N))return;F(N),ne();return}const X=t[H].date;C(X),ne()},Ze=e=>{const t=ae,u=y.getMonth(),w=t.findIndex(Qe=>Qe.monthIndex===u);if(w<0)return;const h=st(e,"monthYear"),re=ia(y,h);if(re.getFullYear()!==f.getFullYear()){F(re),de();return}const H=3,X=t.length;let N=Be({currentIndex:w,key:e,columnCount:H,cellCount:X}),P=0;for(;N!==null&&t[N].isDisabled&&P<X;)N=Be({currentIndex:N,key:e,columnCount:H,cellCount:X}),P+=1;if(N===null||t[N].isDisabled)return;const xe=t[N].monthIndex;C(new Date(f.getFullYear(),xe,1)),de()},Je=e=>{const t=U,u=y.getFullYear(),w=t.findIndex(et=>et.year===u);if(w<0)return;const h=st(e,"monthYear"),re=u+h;if(!t.map(et=>et.year).includes(re)){F(new Date(re,0,1)),ue();return}const X=3,N=t.length;let P=Be({currentIndex:w,key:e,columnCount:X,cellCount:N}),xe=0;for(;P!==null&&t[P].isDisabled&&xe<N;)P=Be({currentIndex:P,key:e,columnCount:X,cellCount:N}),xe+=1;if(P===null||t[P].isDisabled)return;const Qe=t[P].year;C(new Date(Qe,0,1)),ue()},K=e=>ut({date:e,...Y}),ne=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},de=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ue=()=>{Me(()=>{const e=L.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},d=()=>{k==null||k();const e=R??o;ye(e),$(null),r(e)},v=(e,t)=>it(e,t)?0:-1,b=e=>e===y.getMonth()?0:-1,I=e=>e===y.getFullYear()?0:-1,F=e=>{const t=Y;let u=null;m===D.DAY?u=sa({focusTargetDay:e,constraints:t}):m===D.MONTH?u=ca({focusTargetMonthStart:e,constraints:t}):u=la({focusTargetYear:e.getFullYear(),constraints:t}),u!==null&&(W(u.viewDate),C(u.menuInitialActiveDate))};return g.useEffect(()=>{if(p)V(),ne();else{if(me)return;if(ee===null)r(null);else if(!ut({date:ee,...Y}))s(ee);else{const e=ea(ee,Y);e&&r(e)}}},[p,V,o,s,ee,me,T,A,E,r,Y]),g.useEffect(()=>{(()=>{if(m===D.DAY){const t=te;if(pt(t,y)>=0)return;const w=t.find(h=>!h.isDisabled);w&&C(w.date)}else if(m===D.MONTH){const t=ae,u=y.getMonth();if(t.some(h=>h.monthIndex===u&&!h.isDisabled&&f.getFullYear()===y.getFullYear()))return;const w=t.find(h=>!h.isDisabled);w&&C(new Date(f.getFullYear(),w.monthIndex,1))}else{const t=U,u=y.getFullYear();if(t.some(h=>h.year===u&&!h.isDisabled))return;const w=t.find(h=>!h.isDisabled);w&&C(new Date(w.year,0,1))}})()},[f,y,m,te,ae,U]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:L,className:x["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ge,children:[a.jsxs("div",{className:x["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:x["nav-left"],children:m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>se("prevYear")}),a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>se("prevMonth")})]}):m===D.MONTH?a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>q("previous","month")}):a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>q("previous","year")})}),m===D.YEAR?a.jsx("span",{className:ie(x["month-label"],"month-label-static"),children:ce}):a.jsx("button",{className:x["month-label"],onClick:ze,"aria-label":`Changer de vue, ${ce} , appuyer pour voir les ${m===D.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:ce}),a.jsx("div",{className:x["nav-right"],children:m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>se("nextMonth")}),a.jsx(Z,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>se("nextYear")})]}):m===D.MONTH?a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>q("next","month")}):a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>q("next","year")})})]}),m===D.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:x["rte-datepicker-weekdays"],"aria-hidden":"true",children:ta().map((e,t)=>a.jsx("div",{className:x.weekday,children:e},t))}),a.jsx(ct,{appearance:"brand"}),a.jsx("div",{className:ie(x["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:te.map(e=>a.jsxs("button",{type:"button",className:ie(x["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ge(e.date),"aria-selected":Te(e.date),tabIndex:v(e.date,y),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(y==null?void 0:y.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:x["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:x["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):m===D.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:x["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ie(x["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ae.map(e=>a.jsx("button",{type:"button",className:ie(x["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:b(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":f.getMonth(),"data-active-date-year":y.getFullYear(),"data-active-view-year":f.getFullYear(),"data-datepicker-active":e.monthIndex===y.getMonth()&&f.getFullYear()===y.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>l(e.monthIndex),children:a.jsx("span",{className:x["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:x["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ie(x["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:U.map(e=>a.jsx("button",{type:"button",className:ie(x["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(y==null?void 0:y.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:I(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>le(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:x["rte-datepicker-dropdown-actions"],children:[a.jsx(mt,{label:"Annuler",size:"s",variant:"transparent",onClick:B}),a.jsx(mt,{label:"Confirmer",size:"s",variant:"transparent",onClick:d})]})]})})};jt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const ha=/^\d*$/,[Ee,Se,dt]=Pt,Q=g.forwardRef(({id:p,label:o,labelId:c,required:r=!1,showLabelRequirement:s=!1,disabled:k=!1,value:B,readonly:_=!1,onChange:T,hasAction:A=!1,onCancel:E,onValidate:O,minDate:m,maxDate:G,disabledDates:L,isError:me,assistiveTextLabel:ye,assistiveAppearance:Pe="description",showAssistiveIcon:fe=!1,assistiveTextLink:f,width:W="248px"},Oe)=>{var ue;const[Ke,R]=g.useState(!1),[$,y]=g.useState(!1),C=ye&&!$,{increaseActiveSegmentValue:ee,decreaseActiveSegmentValue:Y,resetActiveSegmentValue:se,updateDateSegment:q,updateFullDate:ke,internalValue:V,displayValue:ce,dateState:te,updateDisplayedDate:ae}=da(B,{minDate:m,maxDate:G,disabledDates:L}),{moveToNextSegment:U,moveToPreviousSegment:ze,setActiveDateSegment:ge,activeDateSegment:l}=ua();g.useEffect(()=>{V?T==null||T(V):T==null||T(null)},[V,T]);const le=g.useRef(null),Te=g.useRef(null),Ge=()=>{Le(),K(l)},we=()=>{R(!1),y(!1)},Le=()=>{k||R(!0)},We=()=>{k||y(!0)},$e=d=>{const v=d.key;if(d.stopPropagation(),K(l),[he,be,De,ve,Gt,Lt].includes(v))d.preventDefault(),Ve(v);else if(ha.test(v))d.preventDefault(),Ue(v);else return},Ve=d=>{d===ve?U():d===De?ze():d===he?ee(l):d===be?Y(l):se(l)},Ue=d=>{const b=te[`${l===Ee?"day":l===Se?"month":"year"}Digits`];l===dt&&b.length>=4?Xe(b,d):Ze(b,d)},Xe=(d,v)=>{const b=Array.from(d).findIndex(I=>I!=="0");if(b===0){const I=oe(Number(v),l);q(l,I)}else{const I=d.slice(b)+v,F=oe(Math.min(Number(I),nt[l]),l);q(l,F)}},Ze=(d,v)=>{if(d.length>=2)if(d[0]==="0"){const b=Number(d[1]+v),I=oe(Math.min(b,nt[l]),l);q(l,I),U()}else{const b=oe(Number(v),l);q(l,b)}else{const b=`${d}${v}`,I=Ot[l];if(d.length===0&&Number(v)>I){const F=oe(Number(v),l);q(l,F)}else if(b.length===2){const F=oe(Math.min(Number(b),nt[l]),l);q(l,F)}else{const F=oe(Number(v),l);q(l,F)}}},Je=()=>{var I;$&&y(!1);const d=((I=le.current)==null?void 0:I.selectionStart)??0,v=ma(),b=1;d<=v[Ee][b]+1?K(Ee):d<=v[Se][b]+1?K(Se):K(dt)},K=g.useCallback(d=>{ge(d);const v=3,b=d===Ee?0:d===Se?2+v:0+2*(2+v),I=d===dt?b+4:b+2;Me(()=>{var F;(F=le.current)==null||F.setSelectionRange(b,I)})},[ge]),ne=()=>{E==null||E(),we()},de=()=>{O==null||O(),we()};return g.useEffect(()=>{K(l)},[l,K]),a.jsxs("div",{className:lt["rte-date-picker"],style:{minWidth:"248px",width:W},ref:Oe,children:[a.jsx("div",{className:lt["rte-date-picker-header"],children:a.jsxs("label",{htmlFor:p,id:c??o,className:lt["rte-datepicker-label"],children:[o,a.jsx(ya,{required:r,showLabelRequirement:s})]})}),a.jsx(wa,{style:{width:(ue=Te.current)==null?void 0:ue.offsetWidth},isList:!1,isOpen:$,onClose:we,offset:8,trigger:a.jsx(zt,{id:p,ariaLabelledBy:c??o,icon:"calendar-month",onFocus:Ge,isFocused:Ke,pickerInputRef:le,onOpenPicker:We,value:ce,onKeyDown:$e,onMouseUp:Je,onChange:()=>{},fixedWidth:!1,pickerRef:Te,openButtonAriaLabel:pa(V),isError:me,disabled:k,readOnly:_}),position:"bottom",children:a.jsx(jt,{isOpen:$,currentValue:V,hasAction:A,onValidate:de,onCancel:ne,updateDisplayedDate:ae,updateFullDate:ke,displayValue:ce,minDate:m,maxDate:G,disabledDates:L})}),C&&a.jsx(ga,{label:ye,appearance:me?"error":Pe,showIcon:fe,href:f})]})});Q.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Xa={title:"Composants/DatePicker/DatePicker",component:Q,tags:["autodocs"]},j={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})}},_e={args:{...j.args,disabled:!0}},Ie={args:{...j.args,isError:!0}},Ae={args:{...j.args,value:null},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{Kt(p),await i.tab();for(const c of"15062023")await i.keyboard(c);const o=p.querySelector("input");n(pe(o)).toBe("15/06/2023"),await i.keyboard(qe),n(pe(o)).toBe("15/06/2022"),await i.keyboard(tt),n(pe(o)).toBe("15/06/2023"),await i.keyboard(He),await i.keyboard(tt),n(pe(o)).toBe("15/07/2023"),await i.keyboard(He),await i.keyboard(tt),n(pe(o)).toBe("16/07/2023"),await i.keyboard(Ht),await i.keyboard(qe),await i.keyboard(qe),n(pe(o)).toBe("16/05/2023")}},Fe={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});await i.click(c);let r=await J(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument();const k=r.querySelectorAll(".day-cell");n(k.length).toBeGreaterThan(0),await i.click(k[10]),await i.click(M(r).getByRole("button",{name:/confirmer/i})),await S(()=>{n(s).not.toBeInTheDocument()}),await i.click(c),r=await J(),s=r.querySelector("[role='dialog']"),n(s).toBeInTheDocument();const B=r.querySelector(".day-cell[data-datepicker-active='true']");n(B).toBeInTheDocument(),n(B).toHaveFocus(),await i.keyboard("{Escape}")}},Ne={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});await i.click(c);let r=await J();await i.tab(),await S(()=>{n(M(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await S(()=>{n(M(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=M(r);n(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const k=r.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await i.click(k),await S(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const B=r.querySelector('[data-datepicker-tab="month-label"]');n(B).toBeTruthy(),await i.click(B),await S(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(s.getByText("Sélectionner une année")).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ye),await S(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),r=await J(),await S(()=>{const m=r.querySelector('.day-cell[data-datepicker-active="true"]');n(m).toBeInTheDocument(),n(m).toHaveFocus()});const _=r.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const T=M(r).getByRole("button",{name:/^annuler$/i});n(T).toHaveFocus(),await i.keyboard(qe),n(T).toHaveFocus(),await i.tab({shift:!0}),n(_).toHaveFocus(),await i.keyboard(Ht),await S(()=>{const m=r.querySelector('.day-cell[data-datepicker-active="true"]');n(m).toBeInTheDocument(),n(m).toHaveFocus(),n(m).not.toBe(_)}),await i.keyboard(Ye),await S(()=>{n(r).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),r=await J();const A=r.querySelector('[data-datepicker-tab="month-label"]');n(A).toBeTruthy(),await i.click(A),await S(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const E=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(E).toBeTruthy(),await S(()=>{n(E).toHaveFocus()}),await i.tab(),await S(()=>{n(M(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(E).toHaveFocus();const O=M(r).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(O).toHaveFocus(),await i.tab(),n(E).toHaveFocus()}},Re={args:{...j.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const _ of"03012020")await i.keyboard(_);await i.click(c);let r=await J(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const _=r.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at);for(const _ of"20082024")await i.keyboard(_);await i.click(c),r=await J(),s=r.querySelector("[role='dialog']"),n(s).toBeInTheDocument(),await S(()=>{const _=r.querySelector('.day-cell[data-datepicker-active="true"]');n(_).toBeInTheDocument(),n(_).toHaveFocus()});const B=r.querySelectorAll(".day-cell[disabled]");n(B.length).toBe(7),await i.keyboard(Ye),await S(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()})}},Ce={args:{...j.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:p=>{const[o,c]=g.useState(null),r=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(Q,{...p,value:o,onChange:r})]})},play:async({canvasElement:p})=>{const c=M(p).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const B of"14062023")await i.keyboard(B);await i.click(c);const r=await J(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await S(()=>{const B=r.querySelector('.day-cell[data-datepicker-active="true"]');n(B).toBeInTheDocument(),n(B).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2)}};var yt,gt,wt;j.parameters={...j.parameters,docs:{...(yt=j.parameters)==null?void 0:yt.docs,source:{originalSource:`{
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
}`,...(kt=(ft=Ie.parameters)==null?void 0:ft.docs)==null?void 0:kt.source}}};var Tt,xt,Bt;Ae.parameters={...Ae.parameters,docs:{...(Tt=Ae.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Bt=(xt=Ae.parameters)==null?void 0:xt.docs)==null?void 0:Bt.source}}};var Et,St,_t;Fe.parameters={...Fe.parameters,docs:{...(Et=Fe.parameters)==null?void 0:Et.docs,source:{originalSource:`{
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
}`,...(Yt=(Mt=Ce.parameters)==null?void 0:Mt.docs)==null?void 0:Yt.source}}};const Za=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{j as Default,_e as Disabled,Ce as DisabledDates,Ie as Error,Ne as TabNavigation,Ae as TypingDate,Fe as WithAction,Re as WithMinMax,Za as __namedExportsOrder,Xa as default};
