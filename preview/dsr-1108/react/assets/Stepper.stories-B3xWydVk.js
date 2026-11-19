import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as j,e as de,g as fe,h as be}from"./keyboard-test.constants-BLfu6vvq.js";import{w as ue,u as v,a as me,e as m}from"./index-4rjIhT2C.js";import{r as S}from"./index-G8LIXM5I.js";import{f as ve}from"./testing.utils-DmLcTX3r.js";import{B as A}from"./Button-DsgDr11R.js";import{I as we}from"./IconButton-B1jvMDIw.js";import{F as Se}from"./dom.constants-Bk0jVzGk.js";import{T as _e,a as N,c as T,A as K,b as F}from"./keyboard.constants-DMoGODOQ.js";import{I as Ee}from"./Badge-DUkuUEsZ.js";import{I as ke}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const je="Progression",xe=(e,s,i)=>{let a=e;for(let n=0;n<s.length;n++){a=(a+i+s.length)%s.length;const o=s[a];if(!o.matches(":disabled")&&o.getAttribute("aria-disabled")!=="true"){o.focus();return}}},B=(e,s)=>{xe(e,s,1)},D=(e,s)=>{xe(e,s,-1)},Ce=(e,s)=>{var r;const i=document.activeElement,a=Array.from(document.querySelectorAll(Se)),n=Array.from(a).indexOf(i);let o=n===a.length-1?0:n+1;for(;(r=a[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===a.length-1?o=0:o++;a[o].focus()},Re=(e,s)=>{var r;const i=document.activeElement,a=Array.from(document.querySelectorAll(Se)),n=Array.from(a).indexOf(i);let o=n===0?a.length-1:n-1;for(;(r=a[o])!=null&&r.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===0?o=a.length-1:o--;a[o].focus()},Ae=e=>{const{completionState:s,clickableCompleteStep:i}=e;return s==="complete"&&i||s==="unvisited"||s==="incomplete"},Ne="_stepper_1oua5_1",Te={stepper:Ne},Ke="_stepperItem_70hsm_1",Fe="_stepButton_70hsm_9",Be="_stepNumber_70hsm_16",De="_stepCompleteIndicator_70hsm_17",We="_stepName_70hsm_54",x={stepperItem:Ke,stepButton:Fe,stepNumber:Be,stepCompleteIndicator:De,stepName:We},he=({number:e,name:s,completionState:i="unvisited",orientation:a="horizontal",onClick:n,clickableCompleteStep:o=!1,isActive:r,children:l,...u})=>{const C=S.useRef(null),p=n&&Ae({completionState:i,clickableCompleteStep:o}),d=p||r,y=()=>{p&&!r&&n&&n()};return t.jsxs("li",{className:x.stepperItem,"data-completion-state":i,"data-orientation":a,ref:C,"data-clickable":p,"data-active":r,...u,children:[t.jsxs("button",{className:x.stepButton,type:"button","aria-current":r?"step":void 0,onClick:y,disabled:!d,tabIndex:r?0:-1,children:[i==="complete"&&!r?t.jsx("div",{className:x.stepCompleteIndicator,children:t.jsx(ke,{name:"check",size:Ee.m,"aria-hidden":"true"})}):t.jsx("div",{className:x.stepNumber,"data-completion-state":i,children:t.jsx("span",{children:e})}),t.jsx("span",{className:x.stepName,children:s})]}),l]})};he.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const Oe="_stepSeparatorContainer_nco2y_1",ze="_stepSeparator_nco2y_1",W={stepSeparatorContainer:Oe,stepSeparator:ze},ge=({isComplete:e,orientation:s})=>t.jsx("div",{className:W.stepSeparatorContainer,"aria-hidden":"true","data-orientation":s,children:t.jsx("div",{className:W.stepSeparator,"data-complete":e,"data-orientation":s})});ge.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const c=S.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:i,...a},n)=>{const[o,r]=S.useState(null),l=S.useRef(null),u=S.useCallback(p=>{l.current=p,r(p),typeof n=="function"?n(p):n&&(n.current=p)},[n]),C=p=>{if(p.key===_e&&(p.preventDefault(),p.shiftKey?Re(x.stepButton,l.current):Ce(x.stepButton,l.current)),[N,T,K,F].includes(p.key)){p.preventDefault(),p.stopPropagation();const d=o==null?void 0:o.querySelectorAll("button");if(d){const y=Array.from(d).findIndex(Ie=>Ie===document.activeElement);if(s==="horizontal")switch(p.key){case N:{D(y,Array.from(d));break}case T:{B(y,Array.from(d));break}default:return}else switch(p.key){case K:{D(y,Array.from(d));break}case F:{B(y,Array.from(d));break}default:return}}}};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":je,style:{width:"100%",height:"100%"},ref:u,...a,children:t.jsx("ol",{className:Te.stepper,"data-orientation":s,children:e.map((p,d)=>t.jsx(he,{id:p.id,number:d+1,name:p.name,completionState:p.completionState,orientation:s,onKeyDown:C,onClick:p.onClick,isActive:p.id===i,clickableCompleteStep:p.clickableCompleteStep,children:d<e.length-1&&t.jsx(ge,{isComplete:p.completionState==="complete",orientation:s})},p.name+d))})})});c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const at={title:"Composants/Stepper/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},R=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],ye=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],He=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],h={args:{steps:R,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},I={args:{...h.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},f={args:{...h.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,7)})})]})},b={args:{steps:R,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:R.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,i]=S.useState(e.activeStepId),a=e.steps.map(n=>({...n,onClick:()=>i(n.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(c,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})}},_={args:{...h.args,steps:He,activeStepId:"1"},render:e=>{const[s,i]=S.useState(e.activeStepId),[a,n]=S.useState(e.steps),o=r=>{n(l=>l.map(u=>u.id===r?{...u,completionState:"complete"}:u))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(c,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(A,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const r=a.findIndex(l=>l.id===s);o(s),r<a.length-1?i(a[r+1].id):i(null)}}),t.jsx(A,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const r=a.findIndex(l=>l.id===s);r<a.length-1&&(i(a[r+1].id),n(l=>{const u=[...l];return u[r]={...u[r],completionState:"incomplete"},u}))}}),t.jsx(we,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{i(a[0].id),n(a.map(r=>({...r,completionState:"unvisited"})))}})]})]})}},E={tags:["!autodocs"],args:{steps:ye,orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,i]=S.useState(e.activeStepId),a=e.steps.map(n=>({...n,onClick:()=>i(n.id),clickableCompleteStep:!0}));return console.log("steps",a),t.jsx("div",{style:{width:"700px"},children:t.jsx(c,{...e,steps:a,activeStepId:s})})},play:async({canvasElement:e})=>{const i=await(await ue(e)).getByRole("list"),a=i.querySelectorAll("button"),n=i.querySelector("button[aria-current='step']");ve(),await v.tab(),await me(()=>{m(n).toHaveFocus()}),await v.keyboard(j),m(a[1]).toHaveFocus(),await v.keyboard(j),m(a[0]).toHaveFocus(),await v.keyboard(j),m(a[a.length-1]).toHaveFocus(),await v.keyboard(de),m(a[0]).toHaveFocus()}},g={tags:["!autodocs"],args:{steps:ye.slice(0,3).map((e,s)=>s===1?{...e,onClick:void 0}:e),orientation:"horizontal",activeStepId:"1"},render:e=>t.jsx("div",{style:{width:"300px",height:"300px"},children:t.jsx(c,{...e})}),play:async({canvasElement:e,args:s})=>{const i=ue(e),a=i.getByRole("button",{name:/^Étape 1 sur 3,/}),n=i.getByRole("button",{name:/^Étape 2 sur 3,/}),o=i.getByRole("button",{name:"Étape 3 sur 3, Étape 3"}),r=s.orientation==="vertical"?fe:de,l=s.orientation==="vertical"?be:j;m(n).toBeDisabled(),ve(),await v.tab(),await me(()=>{m(a).toHaveFocus()}),await v.keyboard(r),m(o).toHaveFocus(),await v.keyboard(l),m(a).toHaveFocus(),await v.keyboard(l),m(o).toHaveFocus(),await v.keyboard(r),m(a).toHaveFocus()}},k={args:{...g.args,orientation:"vertical"},tags:["!autodocs"],render:g.render,play:g.play};var O,z,H;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var P,Y,L;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(L=(Y=I.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var q,G,V;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(V=(G=f.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var U,M,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var $,J,X;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(J=w.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ne;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
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
  }
}`,...(ne=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,re,oe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(re=g.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var pe,ce,le;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...KeyboardNavigationWithDisabledSteps.args,
    orientation: "vertical"
  },
  tags: ["!autodocs"],
  render: KeyboardNavigationWithDisabledSteps.render,
  play: KeyboardNavigationWithDisabledSteps.play
}`,...(le=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};const nt=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation","KeyboardNavigationWithDisabledSteps","VerticalKeyboardNavigationWithDisabledSteps"];export{h as Default,E as KeyboardNavigation,g as KeyboardNavigationWithDisabledSteps,_ as LinearProgression,w as NonLinearProgression,f as Sizes,I as Vertical,k as VerticalKeyboardNavigationWithDisabledSteps,b as VerticalSizes,nt as __namedExportsOrder,at as default};
