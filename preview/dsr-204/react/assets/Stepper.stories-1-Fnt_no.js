import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as _,e as oe}from"./keyboard-test.constants-By8W48aj.js";import{w as pe,u as h,a as le,e as g}from"./index-BfPN6pki.js";import{r as m}from"./index-G8LIXM5I.js";import{f as ce}from"./testing.utils-CYMf4Aux.js";import{B as z}from"./Button-CoCTt7OM.js";import{I as de}from"./IconButton-Cd1eiha_.js";import{F as ne}from"./dom.constants-pEgPeCLJ.js";import{a as C,A,d as T,b as N,T as ue}from"./keyboard.constants-BverKK8B.js";import{I as me}from"./Badge-CQk6fGHb.js";import{I as ve}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./index-DSdvzt-y.js";const F=(e,s)=>{var n;let i=e===s.length-1?0:e+1;for(;((n=s[i])==null?void 0:n.getAttribute("aria-disabled"))==="true";)i===s.length-1?i=0:i++;s[i].focus()},K=(e,s)=>{var n;let i=e===0?s.length-1:e-1;for(;((n=s[i])==null?void 0:n.getAttribute("aria-disabled"))==="true";)i===0?i=s.length-1:i--;s[i].focus()},Se=(e,s)=>{var a;const i=document.activeElement,n=Array.from(document.querySelectorAll(ne)),r=Array.from(n).indexOf(i);let p=r===n.length-1?0:r+1;for(;(a=n[p])!=null&&a.classList.contains(e)&&(s!=null&&s.contains(n[p]));)p===n.length-1?p=0:p++;n[p].focus()},xe=(e,s)=>{var a;const i=document.activeElement,n=Array.from(document.querySelectorAll(ne)),r=Array.from(n).indexOf(i);let p=r===0?n.length-1:r-1;for(;(a=n[p])!=null&&a.classList.contains(e)&&(s!=null&&s.contains(n[p]));)p===0?p=n.length-1:p--;n[p].focus()},he=e=>{const{completionState:s,clickableCompleteStep:i}=e;return s==="complete"&&i||s==="unvisited"||s==="incomplete"},ge="_stepper_1oua5_1",ye={stepper:ge},fe=e=>{m.useEffect(()=>{const s=e.current,i=s==null?void 0:s.querySelector("button");if(!i)return;let n="";const r=a=>{n=a.key};window.addEventListener("keydown",r);const p=()=>{if(n==="Tab"){const a=s==null?void 0:s.parentElement,c=a==null?void 0:a.querySelector('[aria-current="step"] button');c&&c.focus()}};return i.addEventListener("focus",p),()=>{window.removeEventListener("keydown",r),i.removeEventListener("focus",p)}},[e])},Ie="_stepperItem_g2ws8_1",we="_stepButton_g2ws8_6",be="_stepNumber_g2ws8_13",je="_stepCompleteIndicator_g2ws8_14",ke="_stepName_g2ws8_51",v={stepperItem:Ie,stepButton:we,stepNumber:be,stepCompleteIndicator:je,stepName:ke},ie=({number:e,name:s,completionState:i="unvisited",orientation:n="horizontal",onClick:r,clickableCompleteStep:p=!1,isActive:a,...c})=>{const d=m.useRef(null);fe(d);const x=r&&he({completionState:i,clickableCompleteStep:p}),E=x||a,o=()=>{x&&!a&&r&&r()};return t.jsx("li",{className:v.stepperItem,"data-completion-state":i,"data-orientation":n,ref:d,"data-clickable":x,"aria-current":a?"step":void 0,"data-active":a,...c,children:t.jsxs("button",{className:v.stepButton,type:"button",onClick:o,disabled:!E,children:[i==="complete"&&!a?t.jsx("div",{className:v.stepCompleteIndicator,children:t.jsx(ve,{name:"check",size:me.m,"aria-hidden":"true"})}):t.jsx("div",{className:v.stepNumber,"data-completion-state":i,children:t.jsx("span",{children:e})}),t.jsx("span",{className:v.stepName,children:s})]})})};ie.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const Ee="_stepSeparator_1xofu_1",_e={stepSeparator:Ee},ae=({isComplete:e,orientation:s})=>t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx("div",{className:_e.stepSeparator,role:"separator","data-complete":e,"data-orientation":s})});ae.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const l=m.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:i,...n},r)=>{const[p,a]=m.useState(null),c=m.useRef(null),d=m.useCallback(o=>{c.current=o,a(o),typeof r=="function"?r(o):r&&(r.current=o)},[r]),x=o=>{if([C,A,T,N].includes(o.key)){o.preventDefault(),o.stopPropagation();const u=p==null?void 0:p.querySelectorAll("button");if(u){const y=Array.from(u).findIndex(re=>re===document.activeElement);if(s==="horizontal")switch(o.key){case C:{K(y,Array.from(u));break}case A:{F(y,Array.from(u));break}default:return}else switch(o.key){case T:{K(y,Array.from(u));break}case N:{F(y,Array.from(u));break}default:return}}}},E=o=>{o.key===ue&&(o.preventDefault(),o.shiftKey?xe(v.stepButton,c.current):Se(v.stepButton,c.current)),[C,A,T,N].includes(o.key)&&o.preventDefault()};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":"Progression",style:{width:"100%",height:"100%"},ref:d,...n,children:t.jsx("ol",{className:ye.stepper,"data-orientation":s,children:e.map((o,u)=>t.jsxs(m.Fragment,{children:[t.jsx(ie,{id:o.id,number:u+1,name:o.name,completionState:o.completionState,orientation:s,onKeyDown:E,onKeyUp:x,onClick:o.onClick,isActive:o.id===i,clickableCompleteStep:o.clickableCompleteStep}),u<e.length-1&&t.jsx(ae,{isComplete:o.completionState==="complete",orientation:s})]},o.name+u))})})});l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const We={title:"Composants/Stepper/Stepper",component:l,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},R=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],Ce=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],Ae=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],S={args:{steps:R,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},f={args:{...S.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},I={args:{...S.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:R,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},b={args:{steps:R.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,i]=m.useState(e.activeStepId),n=e.steps.map(r=>({...r,onClick:()=>i(r.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(l,{steps:n,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})}},j={args:{...S.args,steps:Ae,activeStepId:"1"},render:e=>{const[s,i]=m.useState(e.activeStepId),[n,r]=m.useState(e.steps),p=a=>{r(c=>c.map(d=>d.id===a?{...d,completionState:"complete"}:d))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(l,{steps:n,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(z,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const a=n.findIndex(c=>c.id===s);p(s),a<n.length-1?i(n[a+1].id):i(null)}}),t.jsx(z,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const a=n.findIndex(c=>c.id===s);a<n.length-1&&(i(n[a+1].id),r(c=>{const d=[...c];return d[a]={...d[a],completionState:"incomplete"},d}))}}),t.jsx(de,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{i(n[0].id),r(n.map(a=>({...a,completionState:"unvisited"})))}})]})]})}},k={args:{steps:Ce,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"700px"},children:t.jsx(l,{...e})}),play:async({canvasElement:e})=>{const i=await(await pe(e)).getByRole("list"),n=i.querySelectorAll("button"),r=i.querySelector("[aria-current='step'] button");ce(e),await h.tab(),await le(()=>{g(r).toHaveFocus()}),await h.keyboard(_),g(n[1]).toHaveFocus(),await h.keyboard(_),g(n[0]).toHaveFocus(),await h.keyboard(_),g(n[n.length-1]).toHaveFocus(),await h.keyboard(oe),g(n[0]).toHaveFocus()}};var q,B,L;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    steps: steps,
    orientation: "horizontal",
    activeStepId: "3"
  },
  render: args => <div style={{
    width: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(L=(B=S.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var O,D,P;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(P=(D=f.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var H,V,Y;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
        <Stepper {...args} steps={args.steps.slice(0, 2)} activeStepId={args.steps[1].id} />
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
}`,...(Y=(V=I.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var W,G,U;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    steps,
    orientation: "vertical",
    activeStepId: "3"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "8px"
  }}>
      <div style={{
      height: "144px"
    }}>
        <Stepper {...args} steps={args.steps.slice(0, 2)} activeStepId={args.steps[1].id} />
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
}`,...(U=(G=w.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var M,Q,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    steps: steps.slice(0, 4),
    orientation: "horizontal",
    activeStepId: "3"
  },
  render: args => {
    const [activeStepId, setActiveStepId] = useState<string>(args.activeStepId!);
    const steps = args.steps.map(step => ({
      ...step,
      onClick: () => setActiveStepId(step.id),
      clickableCompleteStep: true
    }));
    return <div style={{
      width: "100%"
    }}>
        <div style={{
        width: "400px",
        padding: "16px"
      }}>
          <Stepper steps={steps} activeStepId={activeStepId} />
        </div>
        <div style={{
        marginTop: "16px",
        width: "100%"
      }}>
          <p>
            Contenu de l'étape {activeStepId}{" "}
            {activeStepId === "1" ? "déjà validé" : activeStepId === "2" ? "à valider" : ""}
          </p>
        </div>
      </div>;
  }
}`,...($=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var J,X,Z;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    steps: linearProgressionSteps,
    activeStepId: "1"
  },
  render: args => {
    const [activeStepId, setActiveStepId] = useState<string | null>(args.activeStepId!);
    const [stepsState, setStepsState] = useState<Step[]>(args.steps);
    const completeStep = (stepId: string) => {
      setStepsState(prevSteps => prevSteps.map(step => step.id === stepId ? {
        ...step,
        completionState: "complete"
      } : step));
    };
    return <div style={{
      width: "100%"
    }}>
        <div style={{
        width: "400px",
        backgroundColor: "var(--background-surface-primary)",
        padding: "16px"
      }}>
          <Stepper steps={stepsState} activeStepId={activeStepId} />
        </div>
        <div style={{
        marginTop: "16px",
        width: "100%"
      }}>
          {activeStepId === null ? <p>Processus terminé !</p> : <p>Contenu de l'étape {activeStepId}</p>}
        </div>
        <div style={{
        marginTop: "16px",
        display: "flex",
        gap: "8px"
      }}>
          <Button disabled={activeStepId === null} label="Valider et passer à l'étape suivante" onClick={() => {
          const currentIndex = stepsState.findIndex(step => step.id === activeStepId);
          completeStep(activeStepId!);
          if (currentIndex < stepsState.length - 1) {
            setActiveStepId(stepsState[currentIndex + 1].id);
          } else {
            setActiveStepId(null);
          }
        }} />
          <Button disabled={activeStepId === null} label="Valider partiellement et passer à l'étape suivante" onClick={() => {
          const currentIndex = stepsState.findIndex(step => step.id === activeStepId);
          if (currentIndex < stepsState.length - 1) {
            setActiveStepId(stepsState[currentIndex + 1].id);
            setStepsState(prevSteps => {
              const newSteps = [...prevSteps];
              newSteps[currentIndex] = {
                ...newSteps[currentIndex],
                completionState: "incomplete"
              };
              return newSteps;
            });
          }
        }} />
          <IconButton variant="text" name="reload" aria-label="Recommencer" onClick={() => {
          setActiveStepId(stepsState[0].id);
          setStepsState(stepsState.map(step => ({
            ...step,
            completionState: "unvisited"
          })));
        }} />
        </div>
      </div>;
  }
}`,...(Z=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    steps: allClickableSteps,
    orientation: "horizontal",
    activeStepId: "3"
  },
  render: args => <div style={{
    width: "700px"
  }}>
      <Stepper {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = await within(canvasElement);
    const stepper = await canvas.getByRole("list");
    const allSteps = stepper.querySelectorAll("button");
    const currentActiveStep = stepper.querySelector("[aria-current='step'] button");
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
}`,...(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Ge=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation"];export{S as Default,k as KeyboardNavigation,j as LinearProgression,b as NonLinearProgression,I as Sizes,f as Vertical,w as VerticalSizes,Ge as __namedExportsOrder,We as default};
