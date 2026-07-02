import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{a as Ye,b as qe,c as Yt,d as tt,e as He,f as at}from"./keyboard-test.constants-C4IJ8E3i.js";import{D as v,c as L,a as jt,d as nt,e as Pt}from"./timepicker.constants-CgjTDnHz.js";import{w as q,u as i,e as n,a as E}from"./index-C4S39nCK.js";import{r as u}from"./index-G8LIXM5I.js";import{f as Ot}from"./testing.utils-BE-6QaT4.js";import{w as Me,a as Kt,B as zt,c as Lt,f as oe}from"./picker.utils-L2kXuaHr.js";import{E as ot,S as rt,b as ge,c as we,a as De,A as he,B as Gt,D as Wt}from"./keyboard.constants-D1KJQ2-m.js";import{u as $t,r as Vt,g as Ut,a as Xt,b as Zt,c as Jt,d as Qt,e as ea,i as dt,f as ta,h as aa,j as ut,k as it,n as na,t as oa,l as st,s as ra,m as ia,o as sa,p as xe,q as ca,v as la,w as da,x as ua,y as pa,z as ma,A as je,B as J,C as ce}from"./DatePicker.stories.util-B264dtYo.js";import{L as ya,A as ga}from"./Label-BZwpSmrJ.js";import{B as wa}from"./BaseDropdown-B_KNdBqD.js";import{u as Da}from"./useFocusTrap-BgE6CX7T.js";import{B as pt}from"./Button-b4mHgHU2.js";import{D as ct}from"./Divider-BMotkXeQ.js";import{I as Z}from"./IconButton-HZdrGdmr.js";import{c as re}from"./index-DSdvzt-y.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DgLH6pPJ.js";import"./Link-DLPtM2IA.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";const ha={"rte-date-picker":"_rte-date-picker_1e0u2_1"},va="_weekday_1tzza_85",B={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1tzza_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1tzza_20","nav-left":"_nav-left_1tzza_34","nav-right":"_nav-right_1tzza_35","month-label":"_month-label_1tzza_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1tzza_77",weekday:va,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1tzza_97","day-cell":"_day-cell_1tzza_104","day-cell__label":"_day-cell__label_1tzza_138","day-cell__surface":"_day-cell__surface_1tzza_142","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1tzza_257","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1tzza_271","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1tzza_272","month-cell":"_month-cell_1tzza_279","month-cell__label":"_month-cell__label_1tzza_314","year-cell":"_year-cell_1tzza_376","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1tzza_463"},Ht=({isOpen:d,currentValue:r,hasAction:c,updateFullDate:o,updateDisplayedDate:s,onValidate:k,onCancel:T,displayValue:S,minDate:_,maxDate:I,disabledDates:x,onChange:K})=>{const[y,G]=u.useState(v.DAY),W=u.useRef(null),[le,de]=u.useState(null),[Pe,ve]=u.useState(null);Da(W.current,d,!1);const{viewDate:f,setViewDate:$,getNextDateForDayNavigation:Oe,getNextDateForCompactNavigation:Ke}=$t(r),[F,V]=u.useState(null),[g,C]=u.useState(r??f),[ee]=u.useState(r),M=u.useMemo(()=>({minDate:_,maxDate:I,disabledDates:x}),[_,I,x]),ie=e=>{const t=Oe(e);be(t)},N=(e,t)=>{const m=Ke(e,t);be(m)},be=e=>{const t=oa({anchorDay:Pe,viewDate:e,constraints:M});t!==null&&(V(t),C(t),s(t))},Y=u.useCallback(()=>{const e=Vt({textValue:S.split(" ").join(""),constraints:M,pendingDate:F,selectedDate:r});$(e.viewDate),ve(e.monthNavigationAnchorDay)},[S,F,r,M,$]),se=u.useMemo(()=>{const e=f??r??new Date,t=y;return y===v.DAY?Ut(e):t===v.MONTH?Xt(e):Zt(e)},[y,f,r]),z=u.useMemo(()=>Jt({viewDate:f,selectedDate:F??r,minDate:_,maxDate:I,disabledDates:x}),[F,r,f,_,I,x]),te=u.useMemo(()=>Qt({viewDate:f,selectedDate:F??r,minDate:_,maxDate:I,disabledDates:x}),[F,r,f,_,I,x]),U=u.useMemo(()=>ea({viewDate:f,selectedDate:F??r,minDate:_,maxDate:I,disabledDates:x}),[F,r,f,_,I,x]),ze=()=>{y===v.DAY?(G(v.MONTH),R()):y===v.MONTH?(G(v.YEAR),ye()):(G(v.DAY),ae())},ue=e=>{const t=na({date:e,constraints:M});if(t!==null)if(c)s(t),V(t),$(t),C(t),ve(t.getDate());else{o(t),de(t),K==null||K(t),k==null||k();return}},p=e=>{const t=new Date(f.getFullYear(),e,1);$(t),C(t),G(v.DAY),ae()},P=e=>{const t=new Date(e,f.getMonth(),1);$(t),C(t),G(v.MONTH),R()},fe=e=>{const t=F??r;return t!==null&&it(e,t)},pe=e=>{if(e.key==="Escape"){T==null||T();return}const t=y;t===v.DAY?ke(e):t===v.MONTH?Le(e):me(e)},ke=e=>{if(!Ge(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const m=g,w=z.find(b=>it(b.date,m));w&&!w.isDisabled&&ue(m);return}[ge,we,De,he].includes(e.key)&&(e.preventDefault(),Ve(e.key))},Le=e=>{if(!We(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const m=g.getMonth(),w=te.find(b=>b.monthIndex===m);w&&!w.isDisabled&&p(m);return}[ge,we,De,he].includes(e.key)&&(e.preventDefault(),Ue(e.key))},me=e=>{if(!$e(e.target))return;if(e.stopPropagation(),[ot,rt].includes(e.key)){e.preventDefault();const m=g.getFullYear(),w=U.find(b=>b.year===m);w&&!w.isDisabled&&P(m);return}[ge,we,De,he].includes(e.key)&&(e.preventDefault(),Xe(e.key))},Ge=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,We=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,$e=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,Ve=e=>{const t=z,m=ut(t,g);if(m<0)return;const w=st(e,"day"),b=Math.abs(w)===7?7:1,ne=w>0?1:-1;let H=m+w;for(;H>=0&&H<t.length&&t[H].isDisabled;)H+=ne*b;if(H<0||H>=t.length){const A=ra(ia(g,w));if(Ze(A))return;h(A),ae();return}const X=t[H].date;C(X),ae()},Ue=e=>{const t=te,m=g.getMonth(),w=t.findIndex(Qe=>Qe.monthIndex===m);if(w<0)return;const b=st(e,"monthYear"),ne=sa(g,b);if(ne.getFullYear()!==f.getFullYear()){h(ne),R();return}const H=3,X=t.length;let A=xe({currentIndex:w,key:e,columnCount:H,cellCount:X}),O=0;for(;A!==null&&t[A].isDisabled&&O<X;)A=xe({currentIndex:A,key:e,columnCount:H,cellCount:X}),O+=1;if(A===null||t[A].isDisabled)return;const Be=t[A].monthIndex;C(new Date(f.getFullYear(),Be,1)),R()},Xe=e=>{const t=U,m=g.getFullYear(),w=t.findIndex(et=>et.year===m);if(w<0)return;const b=st(e,"monthYear"),ne=m+b;if(!t.map(et=>et.year).includes(ne)){h(new Date(ne,0,1)),ye();return}const X=3,A=t.length;let O=xe({currentIndex:w,key:e,columnCount:X,cellCount:A}),Be=0;for(;O!==null&&t[O].isDisabled&&Be<A;)O=xe({currentIndex:O,key:e,columnCount:X,cellCount:A}),Be+=1;if(O===null||t[O].isDisabled)return;const Qe=t[O].year;C(new Date(Qe,0,1)),ye()},Ze=e=>dt({date:e,...M}),ae=()=>{Me(()=>{const e=W.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},R=()=>{Me(()=>{const e=W.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ye=()=>{Me(()=>{const e=W.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Je=()=>{k==null||k();const e=F??r;de(e),V(null),o(e)},Te=(e,t)=>it(e,t)?0:-1,l=e=>e===g.getMonth()?0:-1,D=e=>e===g.getFullYear()?0:-1,h=e=>{const t=M;let m=null;y===v.DAY?m=ca({focusTargetDay:e,constraints:t}):y===v.MONTH?m=la({focusTargetMonthStart:e,constraints:t}):m=da({focusTargetYear:e.getFullYear(),constraints:t}),m!==null&&($(m.viewDate),C(m.menuInitialActiveDate))};return u.useEffect(()=>{if(d)Y(),ae();else{if(le)return;if(ee===null)o(null);else if(!dt({date:ee,...M}))s(ee);else{const e=ta(ee,M);e&&o(e)}}},[d,Y,r,s,ee,le,_,I,x,o,M]),u.useEffect(()=>{(()=>{if(y===v.DAY){const t=z;if(ut(t,g)>=0)return;const w=t.find(b=>!b.isDisabled);w&&C(w.date)}else if(y===v.MONTH){const t=te,m=g.getMonth();if(t.some(b=>b.monthIndex===m&&!b.isDisabled&&f.getFullYear()===g.getFullYear()))return;const w=t.find(b=>!b.isDisabled);w&&C(new Date(f.getFullYear(),w.monthIndex,1))}else{const t=U,m=g.getFullYear();if(t.some(b=>b.year===m&&!b.isDisabled))return;const w=t.find(b=>!b.isDisabled);w&&C(new Date(w.year,0,1))}})()},[f,g,y,z,te,U]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:W,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:pe,children:[a.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:B["nav-left"],children:y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":L.navPrevYear,onClick:()=>ie("prevYear")}),a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":L.navPrevMonth,onClick:()=>ie("prevMonth")})]}):y===v.MONTH?a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":L.navPrevCompact,onClick:()=>N("previous","month")}):a.jsx(Z,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":L.navPrevCompact,onClick:()=>N("previous","year")})}),y===v.YEAR?a.jsx("span",{className:re(B["month-label"],"month-label-static"),children:se}):a.jsx("button",{className:B["month-label"],onClick:ze,"aria-label":`Changer de vue, ${se} , appuyer pour voir les ${y===v.DAY?"mois":"années"}`,"data-datepicker-tab":L.monthLabel,children:se}),a.jsx("div",{className:B["nav-right"],children:y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":L.navNextMonth,onClick:()=>ie("nextMonth")}),a.jsx(Z,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":L.navNextYear,onClick:()=>ie("nextYear")})]}):y===v.MONTH?a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":L.navNextCompact,onClick:()=>N("next","month")}):a.jsx(Z,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":L.navNextCompact,onClick:()=>N("next","year")})})]}),y===v.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:B["rte-datepicker-weekdays"],"aria-hidden":"true",children:aa().map((e,t)=>a.jsx("div",{className:B.weekday,children:e},t))}),a.jsx(ct,{appearance:"brand"}),a.jsx("div",{className:re(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:z.map(e=>a.jsxs("button",{type:"button",className:re(B["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ue(e.date),"aria-selected":fe(e.date),tabIndex:Te(e.date,g),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(g==null?void 0:g.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:B["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):y===v.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:re(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:te.map(e=>a.jsx("button",{type:"button",className:re(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:l(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":f.getMonth(),"data-active-date-year":g.getFullYear(),"data-active-view-year":f.getFullYear(),"data-datepicker-active":e.monthIndex===g.getMonth()&&f.getFullYear()===g.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>p(e.monthIndex),children:a.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(ct,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:re(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:U.map(e=>a.jsx("button",{type:"button",className:re(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(g==null?void 0:g.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:D(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>P(e.year),children:e.label},e.year))})]}),c&&a.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[a.jsx(pt,{label:"Annuler",size:"s",variant:"transparent",onClick:T}),a.jsx(pt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Je})]})]})})};Ht.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasAction:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const ba=/^\d*$/,fa=d=>d.dayDigits===""&&d.monthDigits===""&&d.yearDigits==="",[Ee,Se,lt]=jt,Q=u.forwardRef(({id:d,label:r,labelId:c,required:o=!1,showLabelRequirement:s=!1,disabled:k=!1,value:T,readonly:S=!1,onChange:_,hasAction:I=!1,onCancel:x,onValidate:K,minDate:y,maxDate:G,disabledDates:W,isError:le,assistiveTextLabel:de,assistiveAppearance:Pe="description",showAssistiveIcon:ve=!1,assistiveTextLink:f,width:$="248px"},Oe)=>{var Te;const[Ke,F]=u.useState(!1),[V,g]=u.useState(!1),C=de&&!V,{increaseActiveSegmentValue:ee,decreaseActiveSegmentValue:M,resetActiveSegmentValue:ie,updateDateSegment:N,updateFullDate:be,internalValue:Y,displayValue:se,dateState:z,updateDisplayedDate:te}=ua(T,{minDate:y,maxDate:G,disabledDates:W}),{moveToNextSegment:U,moveToPreviousSegment:ze,setActiveDateSegment:ue,activeDateSegment:p}=pa(),P=u.useRef(_),fe=u.useRef(T??null);u.useEffect(()=>{P.current=_},[_]),u.useEffect(()=>{var l,D;if(Y===null&&!fa(z)){(l=P.current)==null||l.call(P,Y);return}Kt(fe.current,Y)||(fe.current=Y,(D=P.current)==null||D.call(P,Y))},[Y,z]);const pe=u.useRef(null),ke=u.useRef(null),Le=()=>{Ge(),R(p)},me=()=>{F(!1),g(!1)},Ge=()=>{k||F(!0)},We=()=>{k||g(!0)},$e=l=>{const D=l.key;if(l.stopPropagation(),R(p),[De,he,ge,we,Gt,Wt].includes(D))l.preventDefault(),Ve(D);else if(ba.test(D))l.preventDefault(),Ue(D);else return},Ve=l=>{l===we?U():l===ge?ze():l===De?ee(p):l===he?M(p):ie(p)},Ue=l=>{const h=z[`${p===Ee?"day":p===Se?"month":"year"}Digits`];p===lt&&h.length>=4?Xe(h,l):Ze(h,l)},Xe=(l,D)=>{const h=Array.from(l).findIndex(e=>e!=="0");if(h===0){const e=oe(Number(D),p);N(p,e)}else{const e=l.slice(h)+D,t=oe(Math.min(Number(e),nt[p]),p);N(p,t)}},Ze=(l,D)=>{if(l.length>=2)if(l[0]==="0"){const h=Number(l[1]+D),e=oe(Math.min(h,nt[p]),p);N(p,e),U()}else{const h=oe(Number(D),p);N(p,h)}else{const h=`${l}${D}`,e=Pt[p];if(l.length===0&&Number(D)>e){const t=oe(Number(D),p);N(p,t)}else if(h.length===2){const t=oe(Math.min(Number(h),nt[p]),p);N(p,t)}else{const t=oe(Number(D),p);N(p,t)}}},ae=()=>{var e;V&&g(!1);const l=((e=pe.current)==null?void 0:e.selectionStart)??0,D=Lt(),h=1;l<=D[Ee][h]+1?R(Ee):l<=D[Se][h]+1?R(Se):R(lt)},R=u.useCallback(l=>{ue(l);const D=3,h=l===Ee?0:l===Se?2+D:0+2*(2+D),e=l===lt?h+4:h+2;Me(()=>{var t;(t=pe.current)==null||t.setSelectionRange(h,e)})},[ue]),ye=()=>{x==null||x(),me()},Je=()=>{K==null||K(),me()};return u.useEffect(()=>{R(p)},[p,R]),a.jsxs("div",{className:ha["rte-date-picker"],style:{minWidth:"248px",width:$},ref:Oe,children:[a.jsx(ya,{id:c,label:r,required:o,showLabelRequirement:s}),a.jsx(wa,{style:{width:(Te=ke.current)==null?void 0:Te.offsetWidth},isList:!1,isOpen:V,onClose:me,offset:8,trigger:a.jsx(zt,{id:d,ariaLabelledBy:c??r,icon:"calendar-month",onFocus:Le,isFocused:Ke,pickerInputRef:pe,onOpenPicker:We,value:se,onKeyDown:$e,onMouseUp:ae,onChange:()=>{},fixedWidth:!1,pickerRef:ke,openButtonAriaLabel:ma(Y),isError:le,disabled:k,readOnly:S}),position:"bottom",children:a.jsx(Ht,{isOpen:V,currentValue:Y,hasAction:I,onValidate:Je,onCancel:ye,updateDisplayedDate:te,updateFullDate:be,displayValue:se,minDate:y,maxDate:G,disabledDates:W})}),C&&a.jsx(ga,{label:de,appearance:le?"error":Pe,showIcon:ve,href:f})]})});Q.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasAction:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["CoreDatePickerProps","Omit"]};const Ja={title:"Composants/DatePicker/DatePicker",component:Q,tags:["autodocs"]},j={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasAction:!0,required:!1,showLabelRequirement:!1},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})}},_e={args:{...j.args,disabled:!0}},Ie={args:{...j.args,isError:!0}},Ae={args:{...j.args,value:null},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{Ot(d),await i.tab();for(const c of"15062023")await i.keyboard(c);const r=d.querySelector("input");n(ce(r)).toBe("15/06/2023"),await i.keyboard(qe),n(ce(r)).toBe("15/06/2022"),await i.keyboard(tt),n(ce(r)).toBe("15/06/2023"),await i.keyboard(He),await i.keyboard(tt),n(ce(r)).toBe("15/07/2023"),await i.keyboard(He),await i.keyboard(tt),n(ce(r)).toBe("16/07/2023"),await i.keyboard(Yt),await i.keyboard(qe),await i.keyboard(qe),n(ce(r)).toBe("16/05/2023")}},Fe={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const c=q(d).getByRole("button",{name:je});await i.click(c);let o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument();const k=o.querySelectorAll(".day-cell");n(k.length).toBeGreaterThan(0),await i.click(k[10]),await i.click(q(o).getByRole("button",{name:/confirmer/i})),await E(()=>{n(s).not.toBeInTheDocument()}),await i.click(c),o=await J(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument();const T=o.querySelector(".day-cell[data-datepicker-active='true']");n(T).toBeInTheDocument(),n(T).toHaveFocus(),await i.keyboard("{Escape}")}},Ce={tags:["skip-ci"],args:{...j.args,value:null,hasAction:!0},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const c=q(d).getByRole("button",{name:je});await i.click(c);let o=await J();await i.tab(),await E(()=>{n(q(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab(),await E(()=>{n(q(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await i.tab(),await E(()=>{n(q(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const s=q(o);n(s.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const k=o.querySelector('[data-datepicker-tab="month-label"]');n(k).toBeTruthy(),await i.click(k),await E(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(s.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(s.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(s.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(s.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const T=o.querySelector('[data-datepicker-tab="month-label"]');n(T).toBeTruthy(),await i.click(T),await E(()=>{n(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(s.getByText("Sélectionner une année")).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(s.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(o.querySelector(".month-label-static")).toBeInTheDocument(),n(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(o.querySelectorAll(".year-cell").length).toBe(11),await i.keyboard(Ye),await E(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await J(),await E(()=>{const y=o.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus()});const S=o.querySelector('.day-cell[data-datepicker-active="true"]');await i.tab();const _=q(o).getByRole("button",{name:/^annuler$/i});n(_).toHaveFocus(),await i.keyboard(qe),n(_).toHaveFocus(),await i.tab({shift:!0}),n(S).toHaveFocus(),await i.keyboard(Yt),await E(()=>{const y=o.querySelector('.day-cell[data-datepicker-active="true"]');n(y).toBeInTheDocument(),n(y).toHaveFocus(),n(y).not.toBe(S)}),await i.keyboard(Ye),await E(()=>{n(o).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.click(c),o=await J();const I=o.querySelector('[data-datepicker-tab="month-label"]');n(I).toBeTruthy(),await i.click(I),await E(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const x=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(x).toBeTruthy(),await E(()=>{n(x).toHaveFocus()}),await i.tab(),await E(()=>{n(q(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await i.tab({shift:!0}),n(x).toHaveFocus();const K=q(o).getByRole("button",{name:/année suivante/i});await i.tab({shift:!0}),n(K).toHaveFocus(),await i.tab(),n(x).toHaveFocus()}},Ne={args:{...j.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasAction:!0},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const c=q(d).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const S of"03012020")await i.keyboard(S);await i.click(c);let o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await E(()=>{const S=o.querySelector('.day-cell[data-datepicker-active="true"]');n(S).toBeInTheDocument(),n(S).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2),await i.keyboard(Ye),await E(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()}),await i.tab({shift:!0}),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at),await i.keyboard(He),await i.keyboard(at);for(const S of"20082024")await i.keyboard(S);await i.click(c),o=await J(),s=o.querySelector("[role='dialog']"),n(s).toBeInTheDocument(),await E(()=>{const S=o.querySelector('.day-cell[data-datepicker-active="true"]');n(S).toBeInTheDocument(),n(S).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");n(T.length).toBe(7),await i.keyboard(Ye),await E(()=>{n(s).not.toBeInTheDocument(),n(c).toHaveFocus()})}},Re={args:{...j.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasAction:!0},render:d=>{const[r,c]=u.useState(null),o=s=>{c(s)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(Q,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const c=q(d).getByRole("button",{name:je});c.focus(),await i.tab({shift:!0});for(const T of"14062023")await i.keyboard(T);await i.click(c);const o=await J(),s=o.querySelector("[role='dialog']");n(s).toBeInTheDocument(),await E(()=>{const T=o.querySelector('.day-cell[data-datepicker-active="true"]');n(T).toBeInTheDocument(),n(T).toHaveFocus()});const k=o.querySelectorAll(".day-cell[disabled]");n(k.length).toBe(2)}};var mt,yt,gt;j.parameters={...j.parameters,docs:{...(mt=j.parameters)==null?void 0:mt.docs,source:{originalSource:`{
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
}`,...(gt=(yt=j.parameters)==null?void 0:yt.docs)==null?void 0:gt.source}}};var wt,Dt,ht;_e.parameters={..._e.parameters,docs:{...(wt=_e.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ht=(Dt=_e.parameters)==null?void 0:Dt.docs)==null?void 0:ht.source}}};var vt,bt,ft;Ie.parameters={...Ie.parameters,docs:{...(vt=Ie.parameters)==null?void 0:vt.docs,source:{originalSource:`{
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
}`,...(St=(Et=Fe.parameters)==null?void 0:Et.docs)==null?void 0:St.source}}};var _t,It,At;Ce.parameters={...Ce.parameters,docs:{...(_t=Ce.parameters)==null?void 0:_t.docs,source:{originalSource:`{
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
}`,...(At=(It=Ce.parameters)==null?void 0:It.docs)==null?void 0:At.source}}};var Ft,Ct,Nt;Ne.parameters={...Ne.parameters,docs:{...(Ft=Ne.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
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
}`,...(Nt=(Ct=Ne.parameters)==null?void 0:Ct.docs)==null?void 0:Nt.source}}};var Rt,qt,Mt;Re.parameters={...Re.parameters,docs:{...(Rt=Re.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(Mt=(qt=Re.parameters)==null?void 0:qt.docs)==null?void 0:Mt.source}}};const Qa=["Default","Disabled","Error","TypingDate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{j as Default,_e as Disabled,Re as DisabledDates,Ie as Error,Ce as TabNavigation,Ae as TypingDate,Fe as WithAction,Ne as WithMinMax,Qa as __namedExportsOrder,Ja as default};
