import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as j,e as me,g as fe,h as Ee}from"./keyboard-test.constants-BLfu6vvq.js";import{w as T,u as m,a as ve,e as c}from"./index-4rjIhT2C.js";import{r as x}from"./index-G8LIXM5I.js";import{f as Se}from"./testing.utils-DmLcTX3r.js";import{B as R}from"./Button-DsgDr11R.js";import{I as we}from"./IconButton-B1jvMDIw.js";import{F as xe}from"./dom.constants-Bk0jVzGk.js";import{T as _e,a as H,c as K,A as F,b as O}from"./keyboard.constants-DMoGODOQ.js";import{I as ke}from"./Badge-DUkuUEsZ.js";import"./timepicker.constants-CxjiEh1r.js";import{I as Ae}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const je="terminée",Ne="",Te="partiellement complétée",Ce={complete:je,unvisited:Ne,incomplete:Te},Re="Progression",ge=(e,s,n)=>{let a=e;for(let i=0;i<s.length;i++){a=(a+n+s.length)%s.length;const o=s[a];if(!o.matches(":disabled")&&o.getAttribute("aria-disabled")!=="true"){o.focus();return}}},B=(e,s)=>{ge(e,s,1)},z=(e,s)=>{ge(e,s,-1)},He=(e,s)=>{var r;const n=document.activeElement,a=Array.from(document.querySelectorAll(xe)),i=Array.from(a).indexOf(n);let o=i===a.length-1?0:i+1;for(;(r=a[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===a.length-1?o=0:o++;a[o].focus()},Ke=(e,s)=>{var r;const n=document.activeElement,a=Array.from(document.querySelectorAll(xe)),i=Array.from(a).indexOf(n);let o=i===0?a.length-1:i-1;for(;(r=a[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===0?o=a.length-1:o--;a[o].focus()},Fe=e=>{const{completionState:s,clickableCompleteStep:n}=e;return s==="complete"&&n||s==="unvisited"||s==="incomplete"},Oe="_stepper_1oua5_1",Be={stepper:Oe},ze="_stepperItem_zr0bt_14",De="_stepButton_zr0bt_22",We="_stepNumber_zr0bt_29",Pe="_stepCompleteIndicator_zr0bt_30",Le="_stepName_zr0bt_67",S={"sr-only":"_sr-only_zr0bt_1",stepperItem:ze,stepButton:De,stepNumber:We,stepCompleteIndicator:Pe,stepName:Le},ye=({number:e,name:s,completionState:n="unvisited",orientation:a="horizontal",onClick:i,clickableCompleteStep:o=!1,isActive:r,children:d,totalSteps:v,...N})=>{const p=x.useRef(null),u=i&&Fe({completionState:n,clickableCompleteStep:o}),h=u||r,b=Ce[n],Ie=()=>{u&&!r&&i&&i()};return t.jsxs("li",{className:S.stepperItem,"data-completion-state":n,"data-orientation":a,ref:p,"data-clickable":u,"data-active":r,...N,children:[t.jsxs("button",{className:S.stepButton,type:"button","aria-current":r?"step":void 0,onClick:Ie,disabled:!h,tabIndex:r?0:-1,children:[t.jsxs("span",{className:S["sr-only"],children:["Étape ",e," sur ",v,","," "]}),n==="complete"&&!r?t.jsx("div",{className:S.stepCompleteIndicator,children:t.jsx(Ae,{name:"check",size:ke.m,"aria-hidden":"true"})}):t.jsx("div",{className:S.stepNumber,"data-completion-state":n,"aria-hidden":"true",children:t.jsx("span",{children:e})}),t.jsx("span",{className:S.stepName,children:s}),b&&t.jsxs("span",{className:S["sr-only"],children:[", ",b]})]}),d]})};ye.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},totalSteps:{required:!0,tsType:{name:"number"},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const qe="_stepSeparatorContainer_nco2y_1",Ye="_stepSeparator_nco2y_1",D={stepSeparatorContainer:qe,stepSeparator:Ye},he=({isComplete:e,orientation:s})=>t.jsx("div",{className:D.stepSeparatorContainer,"aria-hidden":"true","data-orientation":s,children:t.jsx("div",{className:D.stepSeparator,"data-complete":e,"data-orientation":s})});he.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const l=x.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:n,...a},i)=>{const[o,r]=x.useState(null),d=x.useRef(null),v=x.useCallback(p=>{d.current=p,r(p),typeof i=="function"?i(p):i&&(i.current=p)},[i]),N=p=>{if(p.key===_e&&(p.preventDefault(),p.shiftKey?Ke(S.stepButton,d.current):He(S.stepButton,d.current)),[H,K,F,O].includes(p.key)){p.preventDefault(),p.stopPropagation();const u=o==null?void 0:o.querySelectorAll("button");if(u){const h=Array.from(u).findIndex(b=>b===document.activeElement);if(s==="horizontal")switch(p.key){case H:{z(h,Array.from(u));break}case K:{B(h,Array.from(u));break}default:return}else switch(p.key){case F:{z(h,Array.from(u));break}case O:{B(h,Array.from(u));break}default:return}}}};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":Re,style:{width:"100%",height:"100%"},ref:v,...a,children:t.jsx("ol",{className:Be.stepper,"data-orientation":s,children:e.map((p,u)=>t.jsx(ye,{id:p.id,number:u+1,name:p.name,completionState:p.completionState,orientation:s,onKeyDown:N,onClick:p.onClick,isActive:p.id===n,clickableCompleteStep:p.clickableCompleteStep,totalSteps:e.length,children:u<e.length-1&&t.jsx(he,{isComplete:p.completionState==="complete",orientation:s})},p.name+u))})})});l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const ct={title:"Composants/Stepper/Stepper",component:l,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},C=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],be=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],Ge=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],g={args:{steps:C,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},I={args:{...g.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},f={args:{...g.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},E={args:{steps:C,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:C.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=x.useState(e.activeStepId),a=e.steps.map(i=>({...i,onClick:()=>n(i.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(l,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})},play:async({canvasElement:e})=>{const s=T(e),n=s.getByRole("button",{name:/^Étape 1 sur 4, Étape 1\s*, terminée$/}),a=s.getByRole("button",{name:/^Étape 2 sur 4, Étape 2\s*, partiellement complétée$/}),i=s.getByRole("button",{name:"Étape 3 sur 4, Étape 3"});await m.click(n),c(n).toHaveAttribute("aria-current","step"),c(n).toHaveAccessibleName(/^Étape 1 sur 4, Étape 1\s*, terminée$/),await m.click(a),c(a).toHaveAttribute("aria-current","step"),c(a).toHaveAccessibleName(/^Étape 2 sur 4, Étape 2\s*, partiellement complétée$/),await m.click(i),c(i).toHaveAttribute("aria-current","step"),c(i).toHaveAccessibleName("Étape 3 sur 4, Étape 3"),c(n.querySelector("svg")).toHaveAttribute("aria-hidden","true")}},_={args:{...g.args,steps:Ge,activeStepId:"1"},render:e=>{const[s,n]=x.useState(e.activeStepId),[a,i]=x.useState(e.steps),o=r=>{i(d=>d.map(v=>v.id===r?{...v,completionState:"complete"}:v))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(l,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(R,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const r=a.findIndex(d=>d.id===s);o(s),r<a.length-1?n(a[r+1].id):n(null)}}),t.jsx(R,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const r=a.findIndex(d=>d.id===s);r<a.length-1&&(n(a[r+1].id),i(d=>{const v=[...d];return v[r]={...v[r],completionState:"incomplete"},v}))}}),t.jsx(we,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{n(a[0].id),i(a.map(r=>({...r,completionState:"unvisited"})))}})]})]})}},k={tags:["!autodocs"],args:{steps:be,orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=x.useState(e.activeStepId),a=e.steps.map(i=>({...i,onClick:()=>n(i.id),clickableCompleteStep:!0}));return console.log("steps",a),t.jsx("div",{style:{width:"700px"},children:t.jsx(l,{...e,steps:a,activeStepId:s})})},play:async({canvasElement:e})=>{const n=await(await T(e)).getByRole("list"),a=n.querySelectorAll("button"),i=n.querySelector("button[aria-current='step']");Se(),await m.tab(),await ve(()=>{c(i).toHaveFocus()}),await m.keyboard(j),c(a[1]).toHaveFocus(),await m.keyboard(j),c(a[0]).toHaveFocus(),await m.keyboard(j),c(a[a.length-1]).toHaveFocus(),await m.keyboard(me),c(a[0]).toHaveFocus(),await m.click(a[0]),c(a[0]).toHaveAttribute("aria-current","step"),c(a[0]).toHaveAccessibleName(/^Étape 1 sur 7, Étape 1\s*, terminée$/)}},y={tags:["!autodocs"],args:{steps:be.slice(0,3).map((e,s)=>s===1?{...e,onClick:void 0}:e),orientation:"horizontal",activeStepId:"1"},render:e=>t.jsx("div",{style:{width:"300px",height:"300px"},children:t.jsx(l,{...e})}),play:async({canvasElement:e,args:s})=>{const n=T(e),a=n.getByRole("button",{name:/^Étape 1 sur 3,/}),i=n.getByRole("button",{name:/^Étape 2 sur 3,/}),o=n.getByRole("button",{name:"Étape 3 sur 3, Étape 3"}),r=s.orientation==="vertical"?fe:me,d=s.orientation==="vertical"?Ee:j;c(i).toBeDisabled(),Se(),await m.tab(),await ve(()=>{c(a).toHaveFocus()}),await m.keyboard(r),c(o).toHaveFocus(),await m.keyboard(d),c(a).toHaveFocus(),await m.keyboard(d),c(o).toHaveFocus(),await m.keyboard(r),c(a).toHaveFocus()}},A={args:{...y.args,orientation:"vertical"},tags:["!autodocs"],render:y.render,play:y.play};var W,P,L;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(P=g.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var q,Y,G;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(G=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var V,$,U;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=($=f.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var M,Q,J;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(J=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Z,ee;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const completeStep = canvas.getByRole("button", {
      name: /^Étape 1 sur 4, Étape 1\\s*, terminée$/
    });
    const incompleteStep = canvas.getByRole("button", {
      name: /^Étape 2 sur 4, Étape 2\\s*, partiellement complétée$/
    });
    const unvisitedStep = canvas.getByRole("button", {
      name: "Étape 3 sur 4, Étape 3"
    });
    await userEvent.click(completeStep);
    expect(completeStep).toHaveAttribute("aria-current", "step");
    expect(completeStep).toHaveAccessibleName(/^Étape 1 sur 4, Étape 1\\s*, terminée$/);
    await userEvent.click(incompleteStep);
    expect(incompleteStep).toHaveAttribute("aria-current", "step");
    expect(incompleteStep).toHaveAccessibleName(/^Étape 2 sur 4, Étape 2\\s*, partiellement complétée$/);
    await userEvent.click(unvisitedStep);
    expect(unvisitedStep).toHaveAttribute("aria-current", "step");
    expect(unvisitedStep).toHaveAccessibleName("Étape 3 sur 4, Étape 3");
    expect(completeStep.querySelector("svg")).toHaveAttribute("aria-hidden", "true");
  }
}`,...(ee=(Z=w.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(se=_.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ne,ie,re;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
    const currentActiveStep = stepper.querySelector("button[aria-current='step']");
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
    await userEvent.click(allSteps[0]);
    expect(allSteps[0]).toHaveAttribute("aria-current", "step");
    expect(allSteps[0]).toHaveAccessibleName(/^Étape 1 sur 7, Étape 1\\s*, terminée$/);
  }
}`,...(re=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var oe,pe,ce;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  tags: ["!autodocs"],
  args: {
    steps: allClickableSteps.slice(0, 3).map((step, index) => index === 1 ? {
      ...step,
      onClick: undefined
    } : step),
    orientation: "horizontal",
    activeStepId: "1"
  },
  render: args => <div style={{
    width: "300px",
    height: "300px"
  }}>
      <Stepper {...args} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const firstStep = canvas.getByRole("button", {
      name: /^Étape 1 sur 3,/
    });
    const disabledStep = canvas.getByRole("button", {
      name: /^Étape 2 sur 3,/
    });
    const lastStep = canvas.getByRole("button", {
      name: "Étape 3 sur 3, Étape 3"
    });
    const nextKey = args.orientation === "vertical" ? TESTING_ARROW_DOWN_KEY : TESTING_ARROW_RIGHT_KEY;
    const previousKey = args.orientation === "vertical" ? TESTING_ARROW_UP_KEY : TESTING_ARROW_LEFT_KEY;
    expect(disabledStep).toBeDisabled();
    focusElementBeforeComponent();
    await userEvent.tab();
    await waitFor(() => {
      expect(firstStep).toHaveFocus();
    });
    await userEvent.keyboard(nextKey);
    expect(lastStep).toHaveFocus();
    await userEvent.keyboard(previousKey);
    expect(firstStep).toHaveFocus();
    await userEvent.keyboard(previousKey);
    expect(lastStep).toHaveFocus();
    await userEvent.keyboard(nextKey);
    expect(firstStep).toHaveFocus();
  }
}`,...(ce=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var le,de,ue;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...KeyboardNavigationWithDisabledSteps.args,
    orientation: "vertical"
  },
  tags: ["!autodocs"],
  render: KeyboardNavigationWithDisabledSteps.render,
  play: KeyboardNavigationWithDisabledSteps.play
}`,...(ue=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};const lt=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation","KeyboardNavigationWithDisabledSteps","VerticalKeyboardNavigationWithDisabledSteps"];export{g as Default,k as KeyboardNavigation,y as KeyboardNavigationWithDisabledSteps,_ as LinearProgression,w as NonLinearProgression,f as Sizes,I as Vertical,A as VerticalKeyboardNavigationWithDisabledSteps,E as VerticalSizes,lt as __namedExportsOrder,ct as default};
