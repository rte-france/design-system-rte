import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as _,e as J}from"./keyboard-test.constants-By8W48aj.js";import{w as X,u,a as Z,e as v}from"./index-BfPN6pki.js";import{f as ee}from"./testing.utils-CYMf4Aux.js";import{F as P}from"./dom.constants-pEgPeCLJ.js";import{a as b,A as j,d as k,b as A,T as te}from"./keyboard.constants-BverKK8B.js";import{r as d}from"./index-G8LIXM5I.js";import{I as se}from"./icon.constants-BAtLyvL2.js";import{I as ne}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";const I=(e,n)=>{const r=e===n.length-1?0:e+1;n[r].focus()},N=(e,n)=>{const r=e===0?n.length-1:e-1;n[r].focus()},ae=(e,n)=>{var l;const r=document.activeElement,s=Array.from(document.querySelectorAll(P)),i=Array.from(s).indexOf(r);let a=i===s.length-1?0:i+1;for(;(l=s[a])!=null&&l.classList.contains(e)&&(n!=null&&n.contains(s[a]));)a===s.length-1?a=0:a++;s[a].focus()},oe=(e,n)=>{var l;const r=document.activeElement,s=Array.from(document.querySelectorAll(P)),i=Array.from(s).indexOf(r);let a=i===0?s.length-1:i-1;for(;(l=s[a])!=null&&l.classList.contains(e)&&(console.log(s[a]),n!=null&&n.contains(s[a]));)a===0?a=s.length-1:a--;s[a].focus()},re="_stepper_prd2v_1",ie={stepper:re},le=e=>{d.useEffect(()=>{const n=e.current,r=n==null?void 0:n.querySelector("button");if(!r)return;let s="";const i=l=>{s=l.key};window.addEventListener("keydown",i);const a=()=>{if(s==="Tab"){const l=n==null?void 0:n.parentElement,y=l==null?void 0:l.querySelector('[data-completion-state="active"] button');y&&y.focus()}};return r.addEventListener("focus",a),()=>{window.removeEventListener("keydown",i),r.removeEventListener("focus",a)}},[e])},pe="_stepperItem_17rsd_1",ce="_stepName_17rsd_10",de="_stepButton_17rsd_23",me="_stepNumber_17rsd_27",ue="_stepCompleteIndicator_17rsd_28",m={stepperItem:pe,stepName:ce,stepButton:de,stepNumber:me,stepCompleteIndicator:ue},V=({number:e,name:n,completionState:r="unvisited",orientation:s="horizontal",...i})=>{const a=d.useRef(null);return le(a),t.jsxs("li",{className:m.stepperItem,"data-completion-state":r,"data-orientation":s,ref:a,...i,children:[t.jsx("button",{className:m.stepButton,type:"button",children:r==="complete"?t.jsx("div",{className:m.stepCompleteIndicator,"aria-hidden":"true",children:t.jsx(ne,{name:"check",size:se.m})}):t.jsx("div",{className:m.stepNumber,"data-completion-state":r,children:t.jsx("span",{children:e})})}),t.jsx("span",{className:m.stepName,children:n})]})};V.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperItemProps"]};const ve="_stepSeparator_18a62_1",he={stepSeparator:ve},U=({isComplete:e,orientation:n})=>t.jsx("div",{style:{width:"100%"},children:t.jsx("div",{className:he.stepSeparator,role:"separator","data-complete":e,"data-orientation":n})});U.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const p=d.forwardRef(({steps:e,orientation:n="horizontal",...r},s)=>{const[i,a]=d.useState(null),l=d.useRef(null),y=d.useCallback(o=>{l.current=o,a(o),typeof s=="function"?s(o):s&&(s.current=o)},[s]),M=o=>{if([b,j,k,A].includes(o.key)){o.preventDefault(),o.stopPropagation();const c=i==null?void 0:i.querySelectorAll("button");if(c){const x=Array.from(c).findIndex($=>$===document.activeElement);if(n==="horizontal")switch(o.key){case b:{N(x,Array.from(c));break}case j:{I(x,Array.from(c));break}default:return}else switch(o.key){case k:{N(x,Array.from(c));break}case A:{I(x,Array.from(c));break}default:return}}}},Q=o=>{o.key===te&&(o.preventDefault(),o.shiftKey?oe(m.stepButton,l.current):ae(m.stepButton,l.current)),[b,j,k,A].includes(o.key)&&o.preventDefault()};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":"Progression",style:{minWidth:"144px",width:"100%"},ref:y,...r,children:t.jsx("ol",{className:ie.stepper,"data-orientation":n,children:e.map((o,c)=>t.jsxs(d.Fragment,{children:[t.jsx(V,{number:c+1,name:o.name,completionState:o.completionState,orientation:n,onKeyDown:Q,onKeyUp:M,onClick:o.onClick}),c<e.length-1&&t.jsx(U,{isComplete:o.completionState==="complete",orientation:n})]},o.name+c))})})});p.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  completionState: "unvisited" | "active" | "incomplete" | "complete";
  onClick?: () => void;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"completionState",value:{name:"union",raw:'"unvisited" | "active" | "incomplete" | "complete"',elements:[{name:"literal",value:'"unvisited"'},{name:"literal",value:'"active"'},{name:"literal",value:'"incomplete"'},{name:"literal",value:'"complete"'}],required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}}],raw:`{
  name: string;
  completionState: "unvisited" | "active" | "incomplete" | "complete";
  onClick?: () => void;
}[]`},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const Ae={title:"Composants/Stepper/Stepper",component:p,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]}}},h=[{name:"Étape 1",completionState:"complete"},{name:"Étape 2",completionState:"incomplete",onClick:()=>alert("Étape 2 clicked")},{name:"Étape 3",completionState:"active"},{name:"Étape 4",completionState:"unvisited"},{name:"Étape 5",completionState:"unvisited"},{name:"Étape 6",completionState:"unvisited"},{name:"Étape 7",completionState:"unvisited"}],S={args:{steps:h,orientation:"horizontal"}},f={args:{steps:h,orientation:"vertical"}},g={args:{steps:h,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(p,{...e,steps:[...e.steps.slice(0,1),{name:"Étape 2",completionState:"active"}]})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,7)})})]})},E={args:{steps:h,orientation:"vertical"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(p,{...e,steps:[...e.steps.slice(0,1),{name:"Étape 2",completionState:"active"}]})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(p,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:h,orientation:"horizontal"},play:async({canvasElement:e})=>{const r=await(await X(e)).getByRole("list"),s=r.querySelectorAll("button"),i=r.querySelector("[data-completion-state='active'] button");ee(e),await u.tab(),await Z(()=>{v(i).toHaveFocus()}),await u.keyboard(_),v(s[1]).toHaveFocus(),await u.keyboard(_),v(s[0]).toHaveFocus(),await u.keyboard(_),v(s[s.length-1]).toHaveFocus(),await u.keyboard(J),v(s[0]).toHaveFocus()}};var R,T,F;S.parameters={...S.parameters,docs:{...(R=S.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    steps: steps,
    orientation: "horizontal"
  }
}`,...(F=(T=S.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var z,C,K;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    steps: steps,
    orientation: "vertical"
  }
}`,...(K=(C=f.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var q,O,D;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps,
    orientation: "horizontal"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <div style={{
      width: "160px"
    }}>
        <Stepper {...args} steps={[...args.steps.slice(0, 1), {
        name: "Étape 2",
        completionState: "active"
      }]} />
      </div>
      <div style={{
      width: "274px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 3)} />
      </div>
      <div style={{
      width: "384px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 4)} />
      </div>
      <div style={{
      width: "488px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 5)} />
      </div>

      <div style={{
      width: "592px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 6)} />
      </div>
      <div style={{
      width: "680px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 7)} />
      </div>
    </div>
}`,...(D=(O=g.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var H,L,B;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    steps,
    orientation: "vertical"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "8px"
  }}>
      <div style={{
      height: "144px"
    }}>
        <Stepper {...args} steps={[...args.steps.slice(0, 1), {
        name: "Étape 2",
        completionState: "active"
      }]} />
      </div>
      <div style={{
      height: "240px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 3)} />
      </div>
      <div style={{
      height: "336px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 4)} />
      </div>
      <div style={{
      height: "424px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 5)} />
      </div>

      <div style={{
      height: "512px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 6)} />
      </div>
      <div style={{
      height: "584px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 7)} />
      </div>
    </div>
}`,...(B=(L=E.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var W,Y,G;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    steps: steps,
    orientation: "horizontal"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = await within(canvasElement);
    const stepper = await canvas.getByRole("list");
    const allSteps = stepper.querySelectorAll("button");
    const currentActiveStep = stepper.querySelector("[data-completion-state='active'] button");
    focusElementBeforeComponent(canvasElement);
    await userEvent.tab();
    await waitFor(() => {
      expect(currentActiveStep).toHaveFocus();
    });
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[0]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_LEFT_KEY);
    expect(allSteps[allSteps.length - 1]).toHaveFocus();
    await userEvent.keyboard(TESTING_ARROW_RIGHT_KEY);
    expect(allSteps[0]).toHaveFocus();
  }
}`,...(G=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const Ie=["Default","Vertical","Sizes","VerticalSizes","KeyboardNavigation"];export{S as Default,w as KeyboardNavigation,g as Sizes,f as Vertical,E as VerticalSizes,Ie as __namedExportsOrder,Ae as default};
