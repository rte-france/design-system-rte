import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as _,e as pe}from"./keyboard-test.constants-DC52cZHj.js";import{w as oe,u as h,a as le,e as g}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as ce}from"./testing.utils-DmLcTX3r.js";import{B as E}from"./Button-B3EnjUD7.js";import{I as de}from"./IconButton-CJDki2nw.js";import{F as ie}from"./dom.constants-Bk0jVzGk.js";import{T as me,a as A,A as N,d as R,b as T}from"./keyboard.constants-BverKK8B.js";import{I as ue}from"./Badge-BKSKdLzq.js";import{I as Se}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const z=(e,s)=>{var i;let n=e===s.length-1?0:e+1;for(;((i=s[n])==null?void 0:i.getAttribute("aria-disabled"))==="true";)n===s.length-1?n=0:n++;s[n].focus()},F=(e,s)=>{var i;let n=e===0?s.length-1:e-1;for(;((i=s[n])==null?void 0:i.getAttribute("aria-disabled"))==="true";)n===0?n=s.length-1:n--;s[n].focus()},ve=(e,s)=>{var r;const n=document.activeElement,i=Array.from(document.querySelectorAll(ie)),a=Array.from(i).indexOf(n);let o=a===i.length-1?0:a+1;for(;(r=i[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(i[o]));)o===i.length-1?o=0:o++;i[o].focus()},xe=(e,s)=>{var r;const n=document.activeElement,i=Array.from(document.querySelectorAll(ie)),a=Array.from(i).indexOf(n);let o=a===0?i.length-1:a-1;for(;(r=i[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(i[o]));)o===0?o=i.length-1:o--;i[o].focus()},he=e=>{const{completionState:s,clickableCompleteStep:n}=e;return s==="complete"&&n||s==="unvisited"||s==="incomplete"},ge="_stepper_1oua5_1",ye={stepper:ge},Ie="_stepperItem_70hsm_1",fe="_stepButton_70hsm_9",be="_stepNumber_70hsm_16",we="_stepCompleteIndicator_70hsm_17",ke="_stepName_70hsm_54",S={stepperItem:Ie,stepButton:fe,stepNumber:be,stepCompleteIndicator:we,stepName:ke},ne=({number:e,name:s,completionState:n="unvisited",orientation:i="horizontal",onClick:a,clickableCompleteStep:o=!1,isActive:r,children:c,...m})=>{const j=u.useRef(null),p=a&&he({completionState:n,clickableCompleteStep:o}),d=p||r,x=()=>{p&&!r&&a&&a()};return t.jsxs("li",{className:S.stepperItem,"data-completion-state":n,"data-orientation":i,ref:j,"data-clickable":p,"aria-current":r?"step":void 0,"data-active":r,...m,children:[t.jsxs("button",{className:S.stepButton,type:"button",onClick:x,disabled:!d,tabIndex:r?0:-1,children:[n==="complete"&&!r?t.jsx("div",{className:S.stepCompleteIndicator,children:t.jsx(Se,{name:"check",size:ue.m,"aria-hidden":"true"})}):t.jsx("div",{className:S.stepNumber,"data-completion-state":n,children:t.jsx("span",{children:e})}),t.jsx("span",{className:S.stepName,children:s})]}),c]})};ne.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const je="_stepSeparatorContainer_nco2y_1",_e="_stepSeparator_nco2y_1",B={stepSeparatorContainer:je,stepSeparator:_e},ae=({isComplete:e,orientation:s})=>t.jsx("div",{className:B.stepSeparatorContainer,"aria-hidden":"true","data-orientation":s,children:t.jsx("div",{className:B.stepSeparator,"data-complete":e,"data-orientation":s})});ae.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const l=u.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:n,...i},a)=>{const[o,r]=u.useState(null),c=u.useRef(null),m=u.useCallback(p=>{c.current=p,r(p),typeof a=="function"?a(p):a&&(a.current=p)},[a]),j=p=>{if(p.key===me&&(p.preventDefault(),p.shiftKey?xe(S.stepButton,c.current):ve(S.stepButton,c.current)),[A,N,R,T].includes(p.key)){p.preventDefault(),p.stopPropagation();const d=o==null?void 0:o.querySelectorAll("button");if(d){const x=Array.from(d).findIndex(re=>re===document.activeElement);if(s==="horizontal")switch(p.key){case A:{F(x,Array.from(d));break}case N:{z(x,Array.from(d));break}default:return}else switch(p.key){case R:{F(x,Array.from(d));break}case T:{z(x,Array.from(d));break}default:return}}}};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":"Progression",style:{width:"100%",height:"100%"},ref:m,...i,children:t.jsx("ol",{className:ye.stepper,"data-orientation":s,children:e.map((p,d)=>t.jsx(ne,{id:p.id,number:d+1,name:p.name,completionState:p.completionState,orientation:s,onKeyDown:j,onClick:p.onClick,isActive:p.id===n,clickableCompleteStep:p.clickableCompleteStep,children:d<e.length-1&&t.jsx(ae,{isComplete:p.completionState==="complete",orientation:s})},p.name+d))})})});l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const We={title:"Composants/Stepper/Stepper",component:l,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},C=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],Ce=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],Ee=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],v={args:{steps:C,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},y={args:{...v.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},I={args:{...v.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},f={args:{steps:C,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},b={args:{steps:C.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=u.useState(e.activeStepId),i=e.steps.map(a=>({...a,onClick:()=>n(a.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(l,{steps:i,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})}},w={args:{...v.args,steps:Ee,activeStepId:"1"},render:e=>{const[s,n]=u.useState(e.activeStepId),[i,a]=u.useState(e.steps),o=r=>{a(c=>c.map(m=>m.id===r?{...m,completionState:"complete"}:m))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(l,{steps:i,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(E,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const r=i.findIndex(c=>c.id===s);o(s),r<i.length-1?n(i[r+1].id):n(null)}}),t.jsx(E,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const r=i.findIndex(c=>c.id===s);r<i.length-1&&(n(i[r+1].id),a(c=>{const m=[...c];return m[r]={...m[r],completionState:"incomplete"},m}))}}),t.jsx(de,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{n(i[0].id),a(i.map(r=>({...r,completionState:"unvisited"})))}})]})]})}},k={tags:["!autodocs"],args:{steps:Ce,orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=u.useState(e.activeStepId),i=e.steps.map(a=>({...a,onClick:()=>n(a.id),clickableCompleteStep:!0}));return console.log("steps",i),t.jsx("div",{style:{width:"700px"},children:t.jsx(l,{...e,steps:i,activeStepId:s})})},play:async({canvasElement:e})=>{const n=await(await oe(e)).getByRole("list"),i=n.querySelectorAll("button"),a=n.querySelector("[aria-current='step'] button");ce(),await h.tab(),await le(()=>{g(a).toHaveFocus()}),await h.keyboard(_),g(i[1]).toHaveFocus(),await h.keyboard(_),g(i[0]).toHaveFocus(),await h.keyboard(_),g(i[i.length-1]).toHaveFocus(),await h.keyboard(pe),g(i[0]).toHaveFocus()}};var O,q,K;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var P,D,H;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(H=(D=y.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var L,V,Y;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(Y=(V=I.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var W,G,U;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(U=(G=f.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var M,Q,$;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var J,X,Z;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,se;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    steps: allClickableSteps,
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
    console.log("steps", steps);
    return <div style={{
      width: "700px"
    }}>
        <Stepper {...args} steps={steps} activeStepId={activeStepId} />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = await within(canvasElement);
    const stepper = await canvas.getByRole("list");
    const allSteps = stepper.querySelectorAll("button");
    const currentActiveStep = stepper.querySelector("[aria-current='step'] button");
    focusElementBeforeComponent();
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
}`,...(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Ge=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation"];export{v as Default,k as KeyboardNavigation,w as LinearProgression,b as NonLinearProgression,I as Sizes,y as Vertical,f as VerticalSizes,Ge as __namedExportsOrder,We as default};
