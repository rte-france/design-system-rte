import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{b as Oe,c as je,d as Wt,e as nt,f as Ke,g as ot}from"./keyboard-test.constants-D8znW6ct.js";import{D as b,c as G,a as Vt,d as rt,e as $t}from"./timepicker.constants-CynrC_9x.js";import{w as R,u as s,e as n,a as _}from"./index-4rjIhT2C.js";import{r as p}from"./index-G8LIXM5I.js";import{f as Ut}from"./testing.utils-DmLcTX3r.js";import{w as Pe}from"./animation-DwV-fHIC.js";import{E as st,S as it,b as ge,c as De,a as ve,A as we,B as Xt,D as Zt}from"./keyboard.constants-D1KJQ2-m.js";import{u as Jt,r as Qt,g as ea,a as ta,b as aa,c as na,d as oa,e as ra,i as pt,f as sa,h as ia,j as mt,k as lt,n as la,t as ca,l as ct,s as da,m as ua,o as pa,p as Se,q as ma,v as ya,w as ga,x as Da,y as va,z as wa,A as Le,B as X,C as le}from"./DatePicker.stories.util-Bgq9dcUO.js";import{g as ha}from"./id.utils-DsO5Uws7.js";import{u as fa}from"./useGetOverlayLayerLevel-58-DKw2q.js";import{L as ba,A as ka}from"./Label-swDXsD6p.js";import{D as xa}from"./Dropdown-CyecDUeK.js";import{a as Ta,B as Ba,c as Ea,f as ae}from"./picker.utils-DQ3TbQZx.js";import{c as Sa}from"./string.utils-B_KtMSwu.js";import{u as _a}from"./useFocusTrap-BZu4_Auv.js";import{B as yt}from"./Button-B3EnjUD7.js";import{D as dt}from"./Divider-BVZUrQ0d.js";import{I as U}from"./IconButton-CJDki2nw.js";import{c as ne}from"./index-DJ8f9STe.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Icon-DBkoQNiA.js";import"./Link-mw5rZREw.js";import"./link.constants-kcvANsJQ.js";import"./RequiredIndicator-Bmv51wvd.js";import"./dom.constants-Bk0jVzGk.js";import"./keyboard.constants-BverKK8B.js";import"./useAnimatedMount-_zPBpYOt.js";import"./useScrollEvent-BvD0VCKE.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";import"./common-button.constants-DjIinK9B.js";import"./Badge-BKSKdLzq.js";import"./IconButton.module-CR53g8c2.js";const Ia={"rte-date-picker":"_rte-date-picker_1e0u2_1"},Aa="_weekday_1il3o_84",B={"rte-datepicker-dropdown":"_rte-datepicker-dropdown_1il3o_1","rte-datepicker-dropdown-header":"_rte-datepicker-dropdown-header_1il3o_20","nav-left":"_nav-left_1il3o_34","nav-right":"_nav-right_1il3o_35","month-label":"_month-label_1il3o_46","rte-datepicker-weekdays":"_rte-datepicker-weekdays_1il3o_76",weekday:Aa,"rte-datepicker-day-grid":"_rte-datepicker-day-grid_1il3o_96","day-cell":"_day-cell_1il3o_103","day-cell__label":"_day-cell__label_1il3o_137","day-cell__surface":"_day-cell__surface_1il3o_141","rte-datepicker-view-instruction":"_rte-datepicker-view-instruction_1il3o_256","rte-datepicker-month-grid":"_rte-datepicker-month-grid_1il3o_270","rte-datepicker-year-grid":"_rte-datepicker-year-grid_1il3o_271","month-cell":"_month-cell_1il3o_278","month-cell__label":"_month-cell__label_1il3o_313","year-cell":"_year-cell_1il3o_375","rte-datepicker-dropdown-actions":"_rte-datepicker-dropdown-actions_1il3o_462"},zt=({isOpen:d,currentValue:r,hasActions:l,updateFullDate:o,updateDisplayedDate:i,onValidate:T,onCancel:E,displayValue:I,minDate:A,maxDate:C,disabledDates:S,onChange:j})=>{const[v,W]=p.useState(b.DAY),z=p.useRef(null),[oe,ce]=p.useState(null),[Ge,he]=p.useState(null);_a(z.current,d,!1);const{viewDate:k,setViewDate:V,getNextDateForDayNavigation:We,getNextDateForCompactNavigation:ze}=Jt(r),[q,re]=p.useState(null),[y,F]=p.useState(r??k),[P]=p.useState(r),M=p.useMemo(()=>({minDate:A,maxDate:C,disabledDates:S}),[A,C,S]),Z=e=>{const t=We(e);fe(t)},J=(e,t)=>{const m=ze(e,t);fe(m)},fe=e=>{const t=ca({anchorDay:Ge,viewDate:e,constraints:M});t!==null&&(re(t),F(t),i(t))},be=p.useCallback(()=>{const e=Qt({textValue:I.split(" ").join(""),constraints:M,pendingDate:q,selectedDate:r});V(e.viewDate),he(e.monthNavigationAnchorDay)},[I,q,r,M,V]),$=p.useMemo(()=>{const e=k??r??new Date,t=v;return v===b.DAY?Sa(ea(e)):t===b.MONTH?ta(e):aa(e)},[v,k,r]),Q=p.useMemo(()=>na({viewDate:k,selectedDate:q??r,minDate:A,maxDate:C,disabledDates:S}),[q,r,k,A,C,S]),ee=p.useMemo(()=>oa({viewDate:k,selectedDate:q??r,minDate:A,maxDate:C,disabledDates:S}),[q,r,k,A,C,S]),te=p.useMemo(()=>ra({viewDate:k,selectedDate:q??r,minDate:A,maxDate:C,disabledDates:S}),[q,r,k,A,C,S]),O=()=>{v===b.DAY?(W(b.MONTH),ie()):v===b.MONTH?(W(b.YEAR),me()):(W(b.DAY),L())},ke=e=>{const t=la({date:e,constraints:M});if(t!==null)if(l)i(t),re(t),V(t),F(t),he(t.getDate());else{o(t),ce(t),j==null||j(t),T==null||T();return}},Y=e=>{const t=new Date(k.getFullYear(),e,1);V(t),F(t),W(b.DAY),L()},de=e=>{const t=new Date(e,k.getMonth(),1);V(t),F(t),W(b.MONTH),ie()},ue=e=>{const t=q??r;return t!==null&&lt(e,t)},Ve=e=>{if(e.key==="Escape"){E==null||E();return}const t=v;t===b.DAY?xe(e):t===b.MONTH?$e(e):Te(e)},xe=e=>{if(!g(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=y,D=Q.find(f=>lt(f.date,m));D&&!D.isDisabled&&ke(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),se(e.key))},$e=e=>{if(!K(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=y.getMonth(),D=ee.find(f=>f.monthIndex===m);D&&!D.isDisabled&&Y(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),Be(e.key))},Te=e=>{if(!pe(e.target))return;if(e.stopPropagation(),[st,it].includes(e.key)){e.preventDefault();const m=y.getFullYear(),D=te.find(f=>f.year===m);D&&!D.isDisabled&&de(m);return}[ge,De,ve,we].includes(e.key)&&(e.preventDefault(),Ue(e.key))},g=e=>e instanceof HTMLElement?e.matches("button.day-cell")&&e.closest(".rte-datepicker-day-grid")!==null:!1,K=e=>e instanceof HTMLElement?e.matches("button.month-cell")&&e.closest(".rte-datepicker-month-grid")!==null:!1,pe=e=>e instanceof HTMLElement?e.matches("button.year-cell")&&e.closest(".rte-datepicker-year-grid")!==null:!1,se=e=>{const t=Q,m=mt(t,y);if(m<0)return;const D=ct(e,"day"),f=Math.abs(D)===7?7:1,c=D>0?1:-1;let u=m+D;for(;u>=0&&u<t.length&&t[u].isDisabled;)u+=c*f;if(u<0||u>=t.length){const h=da(ua(y,D));if(Xe(h))return;ye(h),L();return}const w=t[u].date;F(w),L()},Be=e=>{const t=ee,m=y.getMonth(),D=t.findIndex(tt=>tt.monthIndex===m);if(D<0)return;const f=ct(e,"monthYear"),c=pa(y,f);if(c.getFullYear()!==k.getFullYear()){ye(c),ie();return}const u=3,w=t.length;let h=Se({currentIndex:D,key:e,columnCount:u,cellCount:w}),x=0;for(;h!==null&&t[h].isDisabled&&x<w;)h=Se({currentIndex:h,key:e,columnCount:u,cellCount:w}),x+=1;if(h===null||t[h].isDisabled)return;const Ee=t[h].monthIndex;F(new Date(k.getFullYear(),Ee,1)),ie()},Ue=e=>{const t=te,m=y.getFullYear(),D=t.findIndex(at=>at.year===m);if(D<0)return;const f=ct(e,"monthYear"),c=m+f;if(!t.map(at=>at.year).includes(c)){ye(new Date(c,0,1)),me();return}const w=3,h=t.length;let x=Se({currentIndex:D,key:e,columnCount:w,cellCount:h}),Ee=0;for(;x!==null&&t[x].isDisabled&&Ee<h;)x=Se({currentIndex:x,key:e,columnCount:w,cellCount:h}),Ee+=1;if(x===null||t[x].isDisabled)return;const tt=t[x].year;F(new Date(tt,0,1)),me()},Xe=e=>pt({date:e,...M}),L=()=>{Pe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-day-grid .day-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},ie=()=>{Pe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-month-grid .month-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},me=()=>{Pe(()=>{const e=z.current,t=e==null?void 0:e.querySelector('.rte-datepicker-year-grid .year-cell[data-datepicker-active="true"]:not([disabled])');t==null||t.focus()})},Ze=()=>{T==null||T();const e=q??r;ce(e),re(null),o(e)},Je=(e,t)=>lt(e,t)?0:-1,Qe=e=>e===y.getMonth()?0:-1,et=e=>e===y.getFullYear()?0:-1,ye=e=>{const t=M;let m=null;v===b.DAY?m=ma({focusTargetDay:e,constraints:t}):v===b.MONTH?m=ya({focusTargetMonthStart:e,constraints:t}):m=ga({focusTargetYear:e.getFullYear(),constraints:t}),m!==null&&(V(m.viewDate),F(m.menuInitialActiveDate))};return p.useEffect(()=>{if(d)be(),L();else{if(oe)return;if(P===null)o(null);else if(!pt({date:P,...M}))i(P);else{const e=sa(P,M);e&&o(e)}}},[d,be,r,i,P,oe,A,C,S,o,M]),p.useEffect(()=>{(()=>{if(v===b.DAY){const t=Q;if(mt(t,y)>=0)return;const D=t.find(f=>!f.isDisabled);D&&F(D.date)}else if(v===b.MONTH){const t=ee,m=y.getMonth();if(t.some(f=>f.monthIndex===m&&!f.isDisabled&&k.getFullYear()===y.getFullYear()))return;const D=t.find(f=>!f.isDisabled);D&&F(new Date(k.getFullYear(),D.monthIndex,1))}else{const t=te,m=y.getFullYear();if(t.some(f=>f.year===m&&!f.isDisabled))return;const D=t.find(f=>!f.isDisabled);D&&F(new Date(D.year,0,1))}})()},[k,y,v,Q,ee,te]),a.jsx(a.Fragment,{children:a.jsxs("div",{ref:z,className:B["rte-datepicker-dropdown"],role:"dialog","aria-modal":"true","aria-label":"Choisir une date",onKeyDown:Ve,children:[a.jsxs("div",{className:B["rte-datepicker-dropdown-header"],children:[a.jsx("div",{className:B["nav-left"],children:v===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(U,{name:"arrow-double-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":G.navPrevYear,onClick:()=>Z("prevYear")}),a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Mois précédent","data-datepicker-tab":G.navPrevMonth,onClick:()=>Z("prevMonth")})]}):v===b.MONTH?a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Année précédente","data-datepicker-tab":G.navPrevCompact,onClick:()=>J("previous","month")}):a.jsx(U,{name:"arrow-chevron-left",variant:"neutral",size:"s","aria-label":"Décennie précédente","data-datepicker-tab":G.navPrevCompact,onClick:()=>J("previous","year")})}),v===b.YEAR?a.jsx("span",{className:ne(B["month-label"],"month-label-static"),children:$}):a.jsx("button",{className:B["month-label"],onClick:O,"aria-label":`${$}, afficher les ${v===b.DAY?"mois":"années"}`,"data-datepicker-tab":G.monthLabel,children:$}),a.jsx("div",{className:B["nav-right"],children:v===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Mois suivant","data-datepicker-tab":G.navNextMonth,onClick:()=>Z("nextMonth")}),a.jsx(U,{name:"arrow-double-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":G.navNextYear,onClick:()=>Z("nextYear")})]}):v===b.MONTH?a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Année suivante","data-datepicker-tab":G.navNextCompact,onClick:()=>J("next","month")}):a.jsx(U,{name:"arrow-chevron-right",variant:"neutral",size:"s","aria-label":"Décennie suivante","data-datepicker-tab":G.navNextCompact,onClick:()=>J("next","year")})})]}),v===b.DAY?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:B["rte-datepicker-weekdays"],"aria-hidden":"true",children:ia().map((e,t)=>a.jsx("div",{className:B.weekday,children:e},t))}),a.jsx(dt,{appearance:"brand"}),a.jsx("div",{className:ne(B["rte-datepicker-day-grid"],"rte-datepicker-day-grid"),role:"grid","aria-label":"Calendrier",children:Q.map(e=>a.jsxs("button",{type:"button",className:ne(B["day-cell"],"day-cell"),role:"gridcell",onClick:()=>ke(e.date),"aria-selected":ue(e.date),"aria-current":e.isCurrent?"date":void 0,tabIndex:Je(e.date,y),disabled:e.isDisabled,"data-cell-type":e.cellType,"data-datepicker-active":(y==null?void 0:y.toDateString())===e.date.toDateString()||void 0,children:[a.jsx("span",{className:B["day-cell__surface"],"aria-hidden":"true"}),a.jsx("span",{className:B["day-cell__label"],children:e.label})]},e.date.toISOString()))})]}):v===b.MONTH?a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-month-instruction",children:"Sélectionner un mois"}),a.jsx("div",{className:ne(B["rte-datepicker-month-grid"],"rte-datepicker-month-grid"),role:"grid","aria-label":"Mois",children:ee.map(e=>a.jsx("button",{type:"button",className:ne(B["month-cell"],"month-cell"),role:"gridcell","aria-selected":e.isSelected,tabIndex:Qe(e.monthIndex),"data-cell-month-index":e.monthIndex,"data-active-date-month":k.getMonth(),"data-active-date-year":y.getFullYear(),"data-active-view-year":k.getFullYear(),"data-datepicker-active":e.monthIndex===y.getMonth()&&k.getFullYear()===y.getFullYear()?!0:void 0,"data-current":e.isCurrent,disabled:e.isDisabled,"data-selected":e.isSelected,onClick:()=>Y(e.monthIndex),children:a.jsx("span",{className:B["month-cell__label"],children:e.label})},e.monthIndex))})]}):a.jsxs(a.Fragment,{children:[a.jsx(dt,{appearance:"brand"}),a.jsx("p",{className:B["rte-datepicker-view-instruction"],id:"rte-datepicker-year-instruction",children:"Sélectionner une année"}),a.jsx("div",{className:ne(B["rte-datepicker-year-grid"],"rte-datepicker-year-grid"),role:"grid","aria-label":"Années",children:te.map(e=>a.jsx("button",{type:"button",className:ne(B["year-cell"],"year-cell"),role:"gridcell","data-datepicker-active":(y==null?void 0:y.getFullYear())===e.year||null,"data-current":e.isCurrent,tabIndex:et(e.year),"data-selected":e.isSelected,"aria-selected":e.isSelected,disabled:e.isDisabled,onClick:()=>de(e.year),children:e.label},e.year))})]}),l&&a.jsxs("div",{className:B["rte-datepicker-dropdown-actions"],children:[a.jsx(yt,{label:"Annuler",size:"s",variant:"transparent",onClick:E}),a.jsx(yt,{label:"Confirmer",size:"s",variant:"transparent",onClick:Ze})]})]})})};zt.__docgenInfo={description:"",methods:[],displayName:"DatePickerMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},currentValue:{required:!0,tsType:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},description:""},updateFullDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},updateDisplayedDate:{required:!0,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},hasActions:{required:!1,tsType:{name:"boolean"},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},displayValue:{required:!0,tsType:{name:"string"},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},disabledDates:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};const Fa=/^\d*$/,Ca=d=>d.dayDigits===""&&d.monthDigits===""&&d.yearDigits==="",[_e,Ie,ut]=Vt,H=p.forwardRef(({id:d,label:r,required:l=!1,showLabelRequirement:o=!1,disabled:i=!1,value:T,defaultValue:E,readonly:I=!1,onChange:A,hasActions:C=!0,onCancel:S,onValidate:j,minDate:v,maxDate:W,disabledDates:z,isError:oe,assistiveTextLabel:ce,errorMessage:Ge,assistiveAppearance:he="description",showAssistiveIcon:k=!1,assistiveTextLink:V,width:We="248px"},ze)=>{var f;const[q,re]=p.useState(!1),[y,F]=p.useState(!1),P=d??`datepicker-${ha()}`,M=oe&&Ge||ce,Z=M&&!y,J=`${P}-assistive-text`,fe=T!==void 0,be=p.useRef(T??E??null),$=fe?T??null:be.current,{increaseActiveSegmentValue:Q,decreaseActiveSegmentValue:ee,resetActiveSegmentValue:te,updateDateSegment:O,updateFullDate:ke,internalValue:Y,displayValue:de,dateState:ue,updateDisplayedDate:Ve}=Da($,{minDate:v,maxDate:W,disabledDates:z}),{moveToNextSegment:xe,moveToPreviousSegment:$e,setActiveDateSegment:Te,activeDateSegment:g}=va(),K=p.useRef(A),pe=p.useRef($??null);p.useEffect(()=>{K.current=A},[A]),p.useEffect(()=>{pe.current=$??null},[$]),p.useEffect(()=>{var c,u;if(Y===null&&!Ca(ue)){(c=K.current)==null||c.call(K,Y);return}Ta(pe.current,Y)||(pe.current=Y,(u=K.current)==null||u.call(K,Y))},[Y,ue]);const se=p.useRef(null),Be=p.useRef(null),Ue=fa(se.current),Xe=()=>{ie(),t(g)},L=()=>{re(!1),F(!1)},ie=()=>{i||re(!0)},me=()=>{i||F(!0)},Ze=c=>{const u=c.key;if(c.stopPropagation(),t(g),[ve,we,ge,De,Xt,Zt].includes(u))c.preventDefault(),Je(u);else if(Fa.test(u))c.preventDefault(),Qe(u);else return},Je=c=>{c===De?xe():c===ge?$e():c===ve?Q(g):c===we?ee(g):te(g)},Qe=c=>{const w=ue[`${g===_e?"day":g===Ie?"month":"year"}Digits`];g===ut&&w.length>=4?et(w,c):ye(w,c)},et=(c,u)=>{const w=Array.from(c).findIndex(h=>h!=="0");if(w===0){const h=ae(Number(u),g);O(g,h)}else{const h=c.slice(w)+u,x=ae(Math.min(Number(h),rt[g]),g);O(g,x)}},ye=(c,u)=>{if(c.length>=2)if(c[0]==="0"){const w=Number(c[1]+u),h=ae(Math.min(w,rt[g]),g);O(g,h),xe()}else{const w=ae(Number(u),g);O(g,w)}else{const w=`${c}${u}`,h=$t[g];if(c.length===0&&Number(u)>h){const x=ae(Number(u),g);O(g,x)}else if(w.length===2){const x=ae(Math.min(Number(w),rt[g]),g);O(g,x)}else{const x=ae(Number(u),g);O(g,x)}}},e=()=>{var h;y&&F(!1);const c=((h=se.current)==null?void 0:h.selectionStart)??0,u=Ea(),w=1;c<=u[_e][w]+1?t(_e):c<=u[Ie][w]+1?t(Ie):t(ut)},t=p.useCallback(c=>{Te(c);const u=3,w=c===_e?0:c===Ie?2+u:0+2*(2+u),h=c===ut?w+4:w+2;Pe(()=>{var x;(x=se.current)==null||x.setSelectionRange(w,h)})},[Te]),m=()=>{S==null||S(),L()},D=()=>{j==null||j(),L()};return p.useEffect(()=>{t(g)},[g,t]),a.jsxs("div",{className:Ia["rte-date-picker"],style:{minWidth:"248px",width:We},ref:ze,children:[a.jsx(ba,{htmlFor:P,label:r,required:l,showLabelRequirement:o}),a.jsx(xa,{style:{width:(f=Be.current)==null?void 0:f.offsetWidth},isList:!1,isOpen:y,onClose:L,offset:8,overlayLevel:Ue,trigger:a.jsx(Ba,{id:P,ariaDescribedBy:Z?J:void 0,icon:"calendar-month",onFocus:Xe,isFocused:q,pickerInputRef:se,onOpenPicker:me,value:de,onKeyDown:Ze,onMouseUp:e,onChange:()=>{},fixedWidth:!1,pickerRef:Be,openButtonAriaLabel:wa(Y),isError:oe,disabled:i,readOnly:I,required:l}),position:"bottom",children:a.jsx(zt,{isOpen:y,currentValue:Y,hasActions:C,onValidate:D,onCancel:m,updateDisplayedDate:Ve,updateFullDate:ke,displayValue:de,minDate:v,maxDate:W,disabledDates:z})}),Z&&a.jsx(ka,{id:J,label:M,appearance:oe?"error":he,showIcon:k,href:V})]})});H.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readonly:{defaultValue:{value:"false",computed:!1},required:!1},hasActions:{defaultValue:{value:"true",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveIcon:{defaultValue:{value:"false",computed:!1},required:!1},width:{defaultValue:{value:'"248px"',computed:!1},required:!1}},composes:["Omit"]};const Dn={title:"Composants/DatePicker/DatePicker",component:H,tags:["autodocs"]},N={args:{id:"default-datepicker",label:"Date",value:null,assistiveAppearance:"description",assistiveTextLabel:"Assistive text",showAssistiveIcon:!0,readonly:!1,hasActions:!0,required:!1,showLabelRequirement:!1},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})}},Ae={args:{...N.args,disabled:!0}},Fe={args:{...N.args,isError:!0},play:async({canvasElement:d})=>{const r=R(d);n(r.getByRole("textbox")).toHaveAttribute("aria-describedby","default-datepicker-assistive-text")}},Ce={args:{...N.args,value:void 0},render:d=>{const{value:r,...l}=d;return a.jsx(H,{...l,defaultValue:new Date(2026,5,15)})}},Re={tags:["!autodocs"],args:{...N.args,value:null},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{Ut(),await s.tab();for(const l of"15062023")await s.keyboard(l);const r=d.querySelector("input");n(le(r)).toBe("15/06/2023"),await s.keyboard(je),n(le(r)).toBe("15/06/2022"),await s.keyboard(nt),n(le(r)).toBe("15/06/2023"),await s.keyboard(Ke),await s.keyboard(nt),n(le(r)).toBe("15/07/2023"),await s.keyboard(Ke),await s.keyboard(nt),n(le(r)).toBe("16/07/2023"),await s.keyboard(Wt),await s.keyboard(je),await s.keyboard(je),n(le(r)).toBe("16/05/2023")}},Ne={args:{...N.args,value:null},render:d=>{const[r,l]=p.useState(new Date(2026,5,10));return a.jsxs(a.Fragment,{children:[a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx("button",{onClick:()=>l(new Date(2026,5,22)),children:"Set to 22/06/2026"}),a.jsx("button",{onClick:()=>l(null),children:"Clear"})]}),a.jsx(H,{...d,value:r,onChange:l})]})}},qe={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:Le});await s.click(l);let o=await X(),i=o.querySelector("[role='dialog']");n(i).toBeInTheDocument();const T=o.querySelectorAll(".day-cell");n(T.length).toBeGreaterThan(0),await s.click(T[10]),await s.click(R(o).getByRole("button",{name:/confirmer/i})),await _(()=>{n(i).not.toBeInTheDocument()}),await s.click(l),o=await X(),i=o.querySelector("[role='dialog']"),n(i).toBeInTheDocument();const E=o.querySelector(".day-cell[data-datepicker-active='true']");n(E).toBeInTheDocument(),n(E).toHaveFocus(),await s.keyboard("{Escape}")}},Me={tags:["skip-ci","!autodocs"],args:{...N.args,value:null,hasActions:!0},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:Le});await s.click(l);let o=await X();await s.tab(),await _(()=>{n(R(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab(),await _(()=>{n(R(o).getByRole("button",{name:/^confirmer$/i})).toHaveFocus()}),await s.tab(),await _(()=>{n(R(o).getByRole("button",{name:/année précédente/i})).toHaveFocus()});const i=R(o);n(i.getByRole("button",{name:/année précédente/i})).toBeInTheDocument(),n(i.getByRole("button",{name:/mois précédent/i})).toBeInTheDocument(),n(i.getByRole("button",{name:/mois suivant/i})).toBeInTheDocument(),n(i.getByRole("button",{name:/année suivante/i})).toBeInTheDocument();const T=o.querySelector('[data-datepicker-tab="month-label"]');n(T).toBeTruthy(),await s.click(T),await _(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-day-grid")).not.toBeInTheDocument(),n(i.queryAllByRole("button",{name:/année précédente/i})).toHaveLength(1),n(i.queryAllByRole("button",{name:/année suivante/i})).toHaveLength(1),n(i.queryByRole("button",{name:/mois précédent/i})).not.toBeInTheDocument(),n(i.queryByRole("button",{name:/mois suivant/i})).not.toBeInTheDocument();const E=o.querySelector('[data-datepicker-tab="month-label"]');n(E).toBeTruthy(),await s.click(E),await _(()=>{n(o.querySelector(".rte-datepicker-year-grid")).toBeInTheDocument()}),n(o.querySelector(".rte-datepicker-month-grid")).not.toBeInTheDocument(),n(i.getByText("Sélectionner une année")).toBeInTheDocument(),n(i.getByRole("button",{name:/décennie précédente/i})).toBeInTheDocument(),n(i.getByRole("button",{name:/décennie suivante/i})).toBeInTheDocument(),n(o.querySelector(".month-label-static")).toBeInTheDocument(),n(o.querySelector('[data-datepicker-tab="month-label"]')).not.toBeInTheDocument(),n(o.querySelectorAll(".year-cell").length).toBe(11),await s.keyboard(Oe),await _(()=>{n(o).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.click(l),o=await X(),await _(()=>{const v=o.querySelector('.day-cell[data-datepicker-active="true"]');n(v).toBeInTheDocument(),n(v).toHaveFocus()});const I=o.querySelector('.day-cell[data-datepicker-active="true"]');await s.tab();const A=R(o).getByRole("button",{name:/^annuler$/i});n(A).toHaveFocus(),await s.keyboard(je),n(A).toHaveFocus(),await s.tab({shift:!0}),n(I).toHaveFocus(),await s.keyboard(Wt),await _(()=>{const v=o.querySelector('.day-cell[data-datepicker-active="true"]');n(v).toBeInTheDocument(),n(v).toHaveFocus(),n(v).not.toBe(I)}),await s.keyboard(Oe),await _(()=>{n(o).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.click(l),o=await X();const C=o.querySelector('[data-datepicker-tab="month-label"]');n(C).toBeTruthy(),await s.click(C),await _(()=>{n(o.querySelector(".rte-datepicker-month-grid")).toBeInTheDocument()});const S=o.querySelector(".month-cell[data-datepicker-active='true']:not([disabled])");n(S).toBeTruthy(),await _(()=>{n(S).toHaveFocus()}),await s.tab(),await _(()=>{n(R(o).getByRole("button",{name:/^annuler$/i})).toHaveFocus()}),await s.tab({shift:!0}),n(S).toHaveFocus();const j=R(o).getByRole("button",{name:/année suivante/i});await s.tab({shift:!0}),n(j).toHaveFocus(),await s.tab(),n(S).toHaveFocus()}},Ye={tags:["!autodocs"],args:{...N.args,value:null,minDate:new Date(2020,0,1),maxDate:new Date(2024,7,25),hasActions:!0},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:Le});l.focus(),await s.tab({shift:!0});for(const I of"03012020")await s.keyboard(I);await s.click(l);let o=await X(),i=o.querySelector("[role='dialog']");n(i).toBeInTheDocument(),await _(()=>{const I=o.querySelector('.day-cell[data-datepicker-active="true"]');n(I).toBeInTheDocument(),n(I).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");n(T.length).toBe(2),await s.keyboard(Oe),await _(()=>{n(i).not.toBeInTheDocument(),n(l).toHaveFocus()}),await s.tab({shift:!0}),await s.keyboard(ot),await s.keyboard(Ke),await s.keyboard(ot),await s.keyboard(Ke),await s.keyboard(ot);for(const I of"20082024")await s.keyboard(I);await s.click(l),o=await X(),i=o.querySelector("[role='dialog']"),n(i).toBeInTheDocument(),await _(()=>{const I=o.querySelector('.day-cell[data-datepicker-active="true"]');n(I).toBeInTheDocument(),n(I).toHaveFocus()});const E=o.querySelectorAll(".day-cell[disabled]");n(E.length).toBe(7),await s.keyboard(Oe),await _(()=>{n(i).not.toBeInTheDocument(),n(l).toHaveFocus()})}},He={tags:["!autodocs"],args:{...N.args,value:null,disabledDates:[new Date(2023,5,15),new Date(2023,5,20)],hasActions:!0},render:d=>{const[r,l]=p.useState(null),o=i=>{l(i)};return a.jsxs(a.Fragment,{children:[a.jsxs("p",{style:{fontFamily:"Arial, sans-serif"},children:["Date sélectionnée:"," ",r?new Intl.DateTimeFormat(navigator.language,{dateStyle:"long"}).format(r):"aucune"]}),a.jsx(H,{...d,value:r,onChange:o})]})},play:async({canvasElement:d})=>{const l=R(d).getByRole("button",{name:Le});l.focus(),await s.tab({shift:!0});for(const E of"14062023")await s.keyboard(E);await s.click(l);const o=await X(),i=o.querySelector("[role='dialog']");n(i).toBeInTheDocument(),await _(()=>{const E=o.querySelector('.day-cell[data-datepicker-active="true"]');n(E).toBeInTheDocument(),n(E).toHaveFocus()});const T=o.querySelectorAll(".day-cell[disabled]");n(T.length).toBe(2)}};var gt,Dt,vt;N.parameters={...N.parameters,docs:{...(gt=N.parameters)==null?void 0:gt.docs,source:{originalSource:`{
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
}`,...(vt=(Dt=N.parameters)==null?void 0:Dt.docs)==null?void 0:vt.source}}};var wt,ht,ft;Ae.parameters={...Ae.parameters,docs:{...(wt=Ae.parameters)==null?void 0:wt.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(ft=(ht=Ae.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var bt,kt,xt;Fe.parameters={...Fe.parameters,docs:{...(bt=Fe.parameters)==null?void 0:bt.docs,source:{originalSource:`{
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
}`,...(xt=(kt=Fe.parameters)==null?void 0:kt.docs)==null?void 0:xt.source}}};var Tt,Bt,Et;Ce.parameters={...Ce.parameters,docs:{...(Tt=Ce.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
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
}`,...(Et=(Bt=Ce.parameters)==null?void 0:Bt.docs)==null?void 0:Et.source}}};var St,_t,It;Re.parameters={...Re.parameters,docs:{...(St=Re.parameters)==null?void 0:St.docs,source:{originalSource:`{
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
}`,...(It=(_t=Re.parameters)==null?void 0:_t.docs)==null?void 0:It.source}}};var At,Ft,Ct;Ne.parameters={...Ne.parameters,docs:{...(At=Ne.parameters)==null?void 0:At.docs,source:{originalSource:`{
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
}`,...(Ct=(Ft=Ne.parameters)==null?void 0:Ft.docs)==null?void 0:Ct.source}}};var Rt,Nt,qt;qe.parameters={...qe.parameters,docs:{...(Rt=qe.parameters)==null?void 0:Rt.docs,source:{originalSource:`{
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
}`,...(qt=(Nt=qe.parameters)==null?void 0:Nt.docs)==null?void 0:qt.source}}};var Mt,Yt,Ht;Me.parameters={...Me.parameters,docs:{...(Mt=Me.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
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
}`,...(Ht=(Yt=Me.parameters)==null?void 0:Yt.docs)==null?void 0:Ht.source}}};var jt,Pt,Ot;Ye.parameters={...Ye.parameters,docs:{...(jt=Ye.parameters)==null?void 0:jt.docs,source:{originalSource:`{
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
}`,...(Ot=(Pt=Ye.parameters)==null?void 0:Pt.docs)==null?void 0:Ot.source}}};var Kt,Lt,Gt;He.parameters={...He.parameters,docs:{...(Kt=He.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
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
}`,...(Gt=(Lt=He.parameters)==null?void 0:Lt.docs)==null?void 0:Gt.source}}};const vn=["Default","Disabled","Error","UncontrolledDefaultValue","TypingDate","ControlledPropUpdate","WithAction","TabNavigation","WithMinMax","DisabledDates"];export{Ne as ControlledPropUpdate,N as Default,Ae as Disabled,He as DisabledDates,Fe as Error,Me as TabNavigation,Re as TypingDate,Ce as UncontrolledDefaultValue,qe as WithAction,Ye as WithMinMax,vn as __namedExportsOrder,Dn as default};
