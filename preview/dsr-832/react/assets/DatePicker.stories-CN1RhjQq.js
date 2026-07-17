import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Me,b as Re,c as Yt,d as tt,e as Ye,f as at}from"./keyboard-test.constants-C4IJ8E3i.js";import{D as v,c as z,a as jt,d as nt,e as Pt}from"./timepicker.constants-CgjTDnHz.js";import{w as N,u as i,e as n,a as x}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Ot}from"./testing.utils-mIZIUNbM.js";import{w as qe,a as Kt,B as zt,c as Lt,f as ne}from"./picker.utils-L2kXuaHr.js";import{E as rt,S as ot,b as ye,c as ge,a as we,A as De,B as Gt,D as Wt}from"./keyboard.constants-D1KJQ2-m.js";import{u as $t,r as Vt,g as Ut,a as Xt,b as Zt,c as Jt,d as Qt,e as ea,i as dt,f as ta,h as aa,j as ut,k as it,n as na,t as ra,l as st,s as oa,m as ia,o as sa,p as Be,q as ca,v as la,w as da,x as ua,y as pa,z as ma,A as He,B as Z,C as le}from"./DatePicker.stories.util-DO9USYy0.js";import{u as ya}from"./useGetOverlayLayerLevel-DCKoElYy.js";import{L as ga,A as wa}from"./Label-BaZEr-h0.js";import{B as Da}from"./BaseDropdown-Czs52lGx.js";import{u as va}from"./useFocusTrap-BgE6CX7T.js";import{B as pt}from"./Button-DVlmZND_.js";import{D as ct}from"./Divider-BMotkXeQ.js";import{I as X}from"./IconButton-en7B25KO.js";import{c as re}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Link-BXut70Xg.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-DkJhvK8e.js";const ha={"rte-date-picker":"_rte-date-picker_1e0u2_1"},ba="_weekday_1tzza_85",T={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:ba,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Ht=({isOpen:u,currentValue:o,hasAction:l,updateFullDate:r,updateDisplayedDate:s,onValidate:f,onCancel:k,displayValue:E,minDate:S,maxDate:_,disabledDates:B,onChange:O})=>{const[y,L]=p.useState(v.DAY),G=p.useRef(null),[de,ue]=p.useState(null),[je,ve]=p.useState(null);va(G.current,u,!1);const{viewDate:b,setViewDate:W,getNextDateForDayNavigation:Pe,getNextDateForCompactNavigation:Oe}=$t(o),[A,$]=p.useState(null),[g,F]=p.useState(o??b),[Q]=p.useState(o),R=p.useMemo(()=>({minDate:S,maxDate:_,disabledDates:B}),[S,_,B]),oe=e=>{const t=Pe(e);he(t)},C=(e,t)=>{const c=Oe(e,t);he(c)},he=e=>{const t=ra({anchorDay:je,viewDate:e,constraints:R});t!==null&&($(t),F(t),s(t))},q=p.useCallback(()=>{const e=Vt({textValue:E.split(" ").join(""),constraints:R,pendingDate:A,selectedDate:o});W(e.viewDate),ve(e.monthNavigationAnchorDay)},[E,A,o,R,W]),ie=p.useMemo(()=>{const e=b??o??new Date,t=y;return y===v.DAY?Ut(e):t===v.MONTH?Xt(e):Zt(e)},[y,b,o]),K=p.useMemo(()=>Jt({viewDate:b,selectedDate:A??o,minDate:S,maxDate:_,disabledDates:B}),[A,o,b,S,_,B]),ee=p.useMemo(()=>Qt({viewDate:b,selectedDate:A??o,minDate:S,maxDate:_,disabledDates:B}),[A,o,b,S,_,B]),V=p.useMemo(()=>ea({viewDate:b,selectedDate:A??o,minDate:S,maxDate:_,disabledDates:B}),[A,o,b,S,_,B]),Ke=()=>{y===v.DAY?(L(v.MONTH),ce()):y===v.MONTH?(L(v.YEAR),M()):(L(v.DAY),te())},pe=e=>{const t=na({date:e,constraints:R});if(t!==null)if(l)s(t),$(t),W(t),F(t),ve(t.getDate());else{r(t),ue(t),O==null||O(t),f==null||f();return}},m=e=>{const t=new Date(b.getFullYear(),e,1);W(t),F(t),L(v.DAY),te()},j=e=>{const t=new Date(e,b.getMonth(),1);W(t),F(t),L(v.MONTH),ce()},be=e=>{const t=A??o;return t!==null&&it(e,t)},se=e=>{if(e.key==="Escape"){k==null||k();return}const t=y;t===v.DAY?fe(e):t===v.MONTH?ze(e):Le(e)},fe=e=>{if(!me(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const c=g,D=K.find(h=>it(h.date,c));D&&!D.isDisabled&&pe(c);return}[ye,ge,we,De].includes(e.key)&&(e.preventDefault(),$e(e.key))},ze=e=>{if(!Ge(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const c=g.getMonth(),D=ee.find(h=>h.monthIndex===c);D&&!D.isDisabled&&m(c);return}[ye,ge,we,De].includes(e.key)&&(e.preventDefault(),Ve(e.key))},Le=e=>{if(!We(e.target))return;if(e.stopPropagation(),[rt,ot].includes(e.key)){e.preventDefault();const c=g.getFullYear(),D=V.find(h=>h.year===c);D&&!D.isDisabled&&j(c);return}[ye,ge,we,De].includes(e.key)&&(e.preventDefault(),Ue(e.key))},me=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,Ge=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,We=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,$e=e=>{const t=K,c=ut(t,g);if(c<0)return;const D=st(e,"day"),h=Math.abs(D)===7?7:1,ae=D>0?1:-1;let Y=c+D;for(;Y>=0&&Y<t.length&&t[Y].isDisabled;)Y+=ae*h;if(Y<0||Y>=t.length){const I=oa(ia(g,D));if(Xe(I))return;w(I),te();return}const U=t[Y].date;F(U),te()},Ve=e=>{const t=ee,c=g.getMonth(),D=t.findIndex(Qe=>Qe.monthIndex===c);if(D<0)return;const h=st(e,"monthYear"),ae=sa(g,h);if(ae.getFullYear()!==b.getFullYear()){w(ae),ce();return}const Y=3,U=t.length;let I=Be({currentIndex:D,key:e,columnCount:Y,cellCount:U}),P=0;for(;I!==null&&t[I].isDisabled&&P<U;)I=Be({currentIndex:I,key:e,columnCount:Y,cellCount:U}),P+=1;if(I===null||t[I].isDisabled)return;const Te=t[I].monthIndex;F(new Date(b.getFullYear(),Te,1)),ce()},Ue=e=>{const t=V,c=g.getFullYear(),D=t.findIndex(et=>et.year===c);if(D<0)return;const h=st(e,"monthYear"),ae=c+h;if(!t.map(et=>et.year).includes(ae)){w(new Date(ae,0,1)),M();return}const U=3,I=t.length;let P=Be({currentIndex:D,key:e,columnCount:U,cellCount:I}),Te=0;for(;P!==null&&t[P].isDisabled&&Te<I;)P=Be({currentIndex:P,key:e,columnCount:U,cellCount:I}),Te+=1;if(P===null||t[P].isDisabled)return;const Qe=t[P].year;F(new Date(Qe,0,1)),M()},Xe=e=>dt({date:e,...R}),te=()=>{qe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ce=()=>{qe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},M=()=>{qe(()=>{const e=G.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Ze=()=>{f==null||f();const e=A??o;ue(e),$(null),r(e)},Je=(e,t)=>it(e,t)?0:-1,ke=e=>e===g.getMonth()?0:-1,d=e=>e===g.getFullYear()?0:-1,w=e=>{const t=R;let c=null;y===v.DAY?c=ca({focusTargetDay:e,constraints:t}):y===v.MONTH?c=la({focusTargetMonthStart:e,constraints:t}):c=da({focusTargetYear:e.getFullYear(),constraints:t}),c!==null&&(W(c.viewDate),F(c.menuInitialActiveDate))};return p.useEffect(()=>{if(u)q(),te();else{if(de)return;if(Q===null)r(null);else if(!dt({date:Q,...R}))s(Q);else{const e=ta(Q,R);e&&r(e)}}},[u,q,o,s,Q,de,S,_,B,r,R]),p.useEffect(()=>{(()=>{if(y===v.DAY){const t=K;if(ut(t,g)>=0)return;const D=t.find(h=>!h.isDisabled);D&&F(D.date)}else if(y===v.MONTH){const t=ee,c=g.getMonth();if(t.some(h=>h.monthIndex===c&&!h.isDisabled&&b.getFullYear()===g.getFullYear()))return;const D=t.find(h=>!h.isDisabled);D&&F(new Date(b.getFullYear(),D.monthIndex,1))}else{const t=V,c=g.getFullYear();if(t.some(h=>h.year===c&&!h.isDisabled))return;const D=t.find(h=>!h.isDisabled);D&&F(new Date(D.year,0,1))}})()},[b,g,y,K,ee,V]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:G,className:T["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:se,children:[a.jsxs("div",{className:T["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:T["nav-left"],children:y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevYear,onClick:()=>oe("prevYear")}),a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":z.navPrevMonth,onClick:()=>oe("prevMonth")})]}):y===v.MONTH?a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>C("previous","month")}):a.jsx(X,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":z.navPrevCompact,onClick:()=>C("previous","year")})}),y===v.YEAR?a.jsx("span",{className:re(T["month-label"],"month-label-static"),children:ie}):a.jsx("button",{className:T["month-label"],onClick:Ke,"aria-label":`Changer de vue, ${ie} , appuyer pour voir les ${y===v.DAY?"mois":"années"}`,"data-datepicker-tab":z.monthLabel,children:ie}),a.jsx("div",{className:T["nav-right"],children:y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":z.navNextMonth,onClick:()=>oe("nextMonth")}),a.jsx(X,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextYear,onClick:()=>oe("nextYear")})]}):y===v.MONTH?a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>C("next","month")}):a.jsx(X,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":z.navNextCompact,onClick:()=>C("next","year")})})]}),y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:T["rte-datepicker-weekdays"],"aria-hidden":"true",children:aa().map((e,t)=>a.jsx("div",{className:T.weekday,children:e},t))}),a.jsx(ct,{appearance:"brand"}),a.jsx("div",{className:re(T["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:K.map(e=>a.jsxs("button",{type:"button",className:re(T["day-cell"],"day-cell"),role:"gridcell",onClick:()=>pe(e.date),"aria-selected":be(e.date),tabIndex:Je(e.date,g),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(g==null?void 0:g.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:T["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:T["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):y===v.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:re(T["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ee.map(e=>a.jsx("button",{type:"button",className:re(T["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:ke(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":b.getMonth(),"data-active-date-year":g.getFullYear(),"data-active-view-year":b.getFullYear(),"data-datepicker-active":e.monthIndex===g.getMonth()&&b.getFullYear()===g.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>m(e.monthIndex),children:a.jsx("span",{className:T["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:T["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:re(T["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:V.map(e=>a.jsx("button",{type:"button",className:re(T["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(g==null?void 0:g.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:d(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>j(e.year),children:e.label},e.year))})]}),l&&a.jsxs("div",{className:T["rte-datepicker-dropdown-actions"],children:[a.jsx(pt,{label:"Annuler",size:"s",variant:"transparent",onClick:k}),a.jsx(pt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Ze})]})]})})};Ht.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const fa=/^\d*$/,ka=u=>u.dayDigits===""&&u.monthDigits===""&&u.yearDigits==="",[xe,Ee,lt]=jt,J=p.forwardRef(({id:u,label:o,labelId:l,required:r=!1,showLabelRequirement:s=!1,disabled:f=!1,value:k,readonly:E=!1,onChange:S,hasAction:_=!1,onCancel:B,onValidate:O,minDate:y,maxDate:L,disabledDates:G,isError:de,assistiveTextLabel:ue,assistiveAppearance:je="description",showAssistiveIcon:ve=!1,assistiveTextLink:b,width:W="248px"},Pe)=>{var ke;const[Oe,A]=p.useState(!1),[$,g]=p.useState(!1),F=ue&&!$,{increaseActiveSegmentValue:Q,decreaseActiveSegmentValue:R,resetActiveSegmentValue:oe,updateDateSegment:C,updateFullDate:he,internalValue:q,displayValue:ie,dateState:K,updateDisplayedDate:ee}=ua(k,{minDate:y,maxDate:L,disabledDates:G}),{moveToNextSegment:V,moveToPreviousSegment:Ke,setActiveDateSegment:pe,activeDateSegment:m}=pa(),j=p.useRef(S),be=p.useRef(k??null);p.useEffect(()=>{j.current=S},[S]),p.useEffect(()=>{var d,w;if(q===null&&!ka(K)){(d=j.current)==null||d.call(j,q);return}Kt(be.current,q)||(be.current=q,(w=j.current)==null||w.call(j,q))},[q,K]);const se=p.useRef(null),fe=p.useRef(null),ze=ya(se.current),Le=()=>{Ge(),M(m)},me=()=>{A(!1),g(!1)},Ge=()=>{f||A(!0)},We=()=>{f||g(!0)},$e=d=>{const w=d.key;if(d.stopPropagation(),M(m),[we,De,ye,ge,Gt,Wt].includes(w))d.preventDefault(),Ve(w);else if(fa.test(w))d.preventDefault(),Ue(w);else return},Ve=d=>{d===ge?V():d===ye?Ke():d===we?Q(m):d===De?R(m):oe(m)},Ue=d=>{const e=K[`${m===xe?"day":m===Ee?"month":"year"}Digits`];m===lt&&e.length>=4?Xe(e,d):te(e,d)},Xe=(d,w)=>{const e=Array.from(d).findIndex(t=>t!=="0");if(e===0){const t=ne(Number(w),m);C(m,t)}else{const t=d.slice(e)+w,c=ne(Math.min(Number(t),nt[m]),m);C(m,c)}},te=(d,w)=>{if(d.length>=2)if(d[0]==="0"){const e=Number(d[1]+w),t=ne(Math.min(e,nt[m]),m);C(m,t),V()}else{const e=ne(Number(w),m);C(m,e)}else{const e=`${d}${w}`,t=Pt[m];if(d.length===0&&Number(w)>t){const c=ne(Number(w),m);C(m,c)}else if(e.length===2){const c=ne(Math.min(Number(e),nt[m]),m);C(m,c)}else{const c=ne(Number(w),m);C(m,c)}}},ce=()=>{var t;$&&g(!1);const d=((t=se.current)==null?void 0:t.selectionStart)??0,w=Lt(),e=1;d<=w[xe][e]+1?M(xe):d<=w[Ee][e]+1?M(Ee):M(lt)},M=p.useCallback(d=>{pe(d);const w=3,e=d===xe?0:d===Ee?2+w:0+2*(2+w),t=d===lt?e+4:e+2;qe(()=>{var c;(c=se.current)==null||c.setSelectionRange(e,t)})},[pe]),Ze=()=>{B==null||B(),me()},Je=()=>{O==null||O(),me()};return p.useEffect(()=>{M(m)},[m,M]),a.jsxs("div",{className:ha["rte-date-picker"],style:{minWidth:"248px",width:W},ref:Pe,children:[a.jsx(ga,{id:l,label:o,required:r,showLabelRequirement:s}),a.jsx(Da,{style:{width:(ke=fe.current)==null?void 0:ke.offsetWidth},isList:!1,isOpen:$,onClose:me,offset:8,overlayLevel:ze,trigger:a.jsx(zt,{id:u,ariaLabelledBy:l??o,icon:"calendar-month",onFocus:Le,isFocused:Oe,pickerInputRef:se,onOpenPicker:We,value:ie,onKeyDown:$e,onMouseUp:ce,onChange:()=>{},fixedWidth:!1,pickerRef:fe,openButtonAriaLabel:ma(q),isError:de,disabled:f,readOnly:E}),position:"bottom",children:a.jsx(Ht,{isOpen:$,currentValue:q,hasAction:_,onValidate:Je,onCancel:Ze,updateDisplayedDate:ee,updateFullDate:he,displayValue:ie,minDate:y,maxDate:L,disabledDates:G})}),F&&a.jsx(wa,{label:ue,appearance:de?"error":je,showIcon:ve,href:b})]})});J.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Qa={title:"Composants/DatePicker/DatePicker",component:J,tags:["autodocs"]},H={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,required:!1,showLabelRequirement:!1},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})}},Se={args:{...H.args,disabled:!0}},_e={args:{...H.args,isError:!0}},Ie={args:{...H.args,value:null},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{Ot(u),await i.tab();for(const l of"15062023")await i.keyboard(l);const o=u.querySelector("input");n(le(o)).toBe("15/06/2023"),await i.keyboard(Re),n(le(o)).toBe("15/06/2022"),await i.keyboard(tt),n(le(o)).toBe("15/06/2023"),await i.keyboard(Ye),await i.keyboard(tt),n(le(o)).toBe("15/07/2023"),await i.keyboard(Ye),await i.keyboard(tt),n(le(o)).toBe("16/07/2023"),await i.keyboard(Yt),await i.keyboard(Re),await i.keyboard(Re),n(le(o)).toBe("16/05/2023")}},Ae={tags:["skip-ci"],args:{...H.args,value:null,hasAction:!0},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const l=N(u).getByRole("button",{name:He});await i.click(l);let r=await Z(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument();const f=r.querySelectorAll(".day-cell");n(f.length).toBeGreaterThan(0),await i.click(f[10]),await i.click(N(r).getByRole("button",{name:/confirmer/i})),await x(()=>{n(s).not.toBeInTheDocument()}),await i.click(l),r=await Z(),s=r.querySelector("[role='dialog']"),n(s).toBeInTheDocument();const k=r.querySelector(".day-cell[data-datepicker-active='true']");n(k).toBeInTheDocument(),n(k).toHaveFocus(),await i.keyboard("{Escape}")}},Fe={tags:["skip-ci"],args:{...H.args,value:null,hasAction:!0},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const l=N(u).getByRole("button",{name:He});await i.click(l);let r=await Z();await i.tab(),await x(()=>{n(N(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await x(()=>{n(N(r).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await x(()=>{n(N(r).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=N(r);n(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const f=r.querySelector('[data-datepicker-tab="month-label"]');n(f).toBeTruthy(),await i.click(f),await x(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const k=r.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await i.click(k),await x(()=>{n(r.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(r.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(s.getByText("Sélectionner une année")).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(r.querySelector(".month-label-static")).toBeInTheDocument(),n(r.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(r.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Me),await x(()=>{n(r).not.toBeInTheDocument(),n(l).toHaveFocus()}),await i.click(l),r=await Z(),await x(()=>{const y=r.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus()});const E=r.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const S=N(r).getByRole("button",{name:/^annuler$/i});n(S).toHaveFocus(),await i.keyboard(Re),n(S).toHaveFocus(),await i.tab({shift:!0}),n(E).toHaveFocus(),await i.keyboard(Yt),await x(()=>{const y=r.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus(),n(y).not.toBe(E)}),await i.keyboard(Me),await x(()=>{n(r).not.toBeInTheDocument(),n(l).toHaveFocus()}),await i.click(l),r=await Z();const _=r.querySelector('[data-datepicker-tab="month-label"]');n(_).toBeTruthy(),await i.click(_),await x(()=>{n(r.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const B=r.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(B).toBeTruthy(),await x(()=>{n(B).toHaveFocus()}),await i.tab(),await x(()=>{n(N(r).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(B).toHaveFocus();const O=N(r).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(O).toHaveFocus(),await i.tab(),n(B).toHaveFocus()}},Ce={args:{...H.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const l=N(u).getByRole("button",{name:He});l.focus(),await i.tab({shift:!0});for(const E of"03012020")await i.keyboard(E);await i.click(l);let r=await Z(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await x(()=>{const E=r.querySelector('.day-cell[data-datepicker-active="true"]');n(E).toBeInTheDocument(),n(E).toHaveFocus()});const f=r.querySelectorAll(".day-cell[disabled]");n(f.length).toBe(2),await i.keyboard(Me),await x(()=>{n(s).not.toBeInTheDocument(),n(l).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(at),await i.keyboard(Ye),await i.keyboard(at),await i.keyboard(Ye),await i.keyboard(at);for(const E of"20082024")await i.keyboard(E);await i.click(l),r=await Z(),s=r.querySelector("[role='dialog']"),n(s).toBeInTheDocument(),await x(()=>{const E=r.querySelector('.day-cell[data-datepicker-active="true"]');n(E).toBeInTheDocument(),n(E).toHaveFocus()});const k=r.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(7),await i.keyboard(Me),await x(()=>{n(s).not.toBeInTheDocument(),n(l).toHaveFocus()})}},Ne={args:{...H.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:u=>{const[o,l]=p.useState(null),r=s=>{l(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",o?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(o):"aucune"]}),a.jsx(J,{...u,value:o,onChange:r})]})},play:async({canvasElement:u})=>{const l=N(u).getByRole("button",{name:He});l.focus(),await i.tab({shift:!0});for(const k of"14062023")await i.keyboard(k);await i.click(l);const r=await Z(),s=r.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await x(()=>{const k=r.querySelector('.day-cell[data-datepicker-active="true"]');n(k).toBeInTheDocument(),n(k).toHaveFocus()});const f=r.querySelectorAll(".day-cell[disabled]");n(f.length).toBe(2)}};var mt,yt,gt;H.parameters={...H.parameters,docs:{...(mt=H.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(yt=H.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var wt,Dt,vt;Se.parameters={...Se.parameters,docs:{...(wt=Se.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(vt=(Dt=Se.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var ht,bt,ft;_e.parameters={..._e.parameters,docs:{...(ht=_e.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    isError: true
  }
}`,...(ft=(bt=_e.parameters)==null?void 0:bt.docs)==null?void 0:ft.source}}};var kt,Tt,Bt;Ie.parameters={...Ie.parameters,docs:{...(kt=Ie.parameters)==null?void 0:kt.docs,source:{originalSource:`{
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
}`,...(Bt=(Tt=Ie.parameters)==null?void 0:Tt.docs)==null?void 0:Bt.source}}};var xt,Et,St;Ae.parameters={...Ae.parameters,docs:{...(xt=Ae.parameters)==null?void 0:xt.docs,source:{originalSource:`{
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
}`,...(St=(Et=Ae.parameters)==null?void 0:Et.docs)==null?void 0:St.source}}};var _t,It,At;Fe.parameters={...Fe.parameters,docs:{...(_t=Fe.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(At=(It=Fe.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ft,Ct,Nt;Ce.parameters={...Ce.parameters,docs:{...(Ft=Ce.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Ct=Ce.parameters)==null?void 0:Ct.docs)==null?void 0:Nt.source}}};var Rt,qt,Mt;Ne.parameters={...Ne.parameters,docs:{...(Rt=Ne.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Mt=(qt=Ne.parameters)==null?void 0:qt.docs)==null?void 0:Mt.source}}};const en=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{H as Default,Se as Disabled,Ne as DisabledDates,_e as Error,Fe as TabNavigation,Ie as TypingDate,Ae as WithAction,Ce as WithMinMax,en as __namedExportsOrder,Qa as default};
