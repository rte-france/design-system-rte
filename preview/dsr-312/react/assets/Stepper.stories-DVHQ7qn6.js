import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as _,e as pe}from"./keyboard-test.constants-By8W48aj.js";import{w as re,u as h,a as oe,e as g}from"./index-4rjIhT2C.js";import{r as u}from"./index-G8LIXM5I.js";import{f as le}from"./testing.utils-mIZIUNbM.js";import{B as C}from"./Button-Cd2C55g4.js";import{I as ce}from"./IconButton-CQQHz8gd.js";import{F as se}from"./dom.constants-41SiyeDe.js";import{T as de,a as A,A as N,d as R,b as T}from"./keyboard.constants-BverKK8B.js";import{I as me}from"./Badge-CQk6fGHb.js";import{I as ue}from"./Icon-DjEid3Hw.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-eNlmcvUj.js";import"./index-DSdvzt-y.js";const z=(e,s)=>{var i;let n=e===s.length-1?0:e+1;for(;((i=s[n])==null?void 0:i.getAttribute("aria-disabled"))==="true";)n===s.length-1?n=0:n++;s[n].focus()},F=(e,s)=>{var i;let n=e===0?s.length-1:e-1;for(;((i=s[n])==null?void 0:i.getAttribute("aria-disabled"))==="true";)n===0?n=s.length-1:n--;s[n].focus()},ve=(e,s)=>{var p;const n=document.activeElement,i=Array.from(document.querySelectorAll(se)),a=Array.from(i).indexOf(n);let o=a===i.length-1?0:a+1;for(;(p=i[o])!=null&&p.classList.contains(e)&&(s!=null&&s.contains(i[o]));)o===i.length-1?o=0:o++;i[o].focus()},Se=(e,s)=>{var p;const n=document.activeElement,i=Array.from(document.querySelectorAll(se)),a=Array.from(i).indexOf(n);let o=a===0?i.length-1:a-1;for(;(p=i[o])!=null&&p.classList.contains(e)&&(s!=null&&s.contains(i[o]));)o===0?o=i.length-1:o--;i[o].focus()},xe=e=>{const{completionState:s,clickableCompleteStep:n}=e;return s==="complete"&&n||s==="unvisited"||s==="incomplete"},he="_stepper_1oua5_1",ge={stepper:he},Ie="_stepperItem_g2ws8_1",ye="_stepButton_g2ws8_6",fe="_stepNumber_g2ws8_13",we="_stepCompleteIndicator_g2ws8_14",be="_stepName_g2ws8_51",v={stepperItem:Ie,stepButton:ye,stepNumber:fe,stepCompleteIndicator:we,stepName:be},ie=({number:e,name:s,completionState:n="unvisited",orientation:i="horizontal",onClick:a,clickableCompleteStep:o=!1,isActive:p,...c})=>{const m=u.useRef(null),x=a&&xe({completionState:n,clickableCompleteStep:o}),r=x||p,d=()=>{x&&!p&&a&&a()};return t.jsx("li",{className:v.stepperItem,"data-completion-state":n,"data-orientation":i,ref:m,"data-clickable":x,"aria-current":p?"step":void 0,"data-active":p,...c,children:t.jsxs("button",{className:v.stepButton,type:"button",onClick:d,disabled:!r,tabIndex:p?0:-1,children:[n==="complete"&&!p?t.jsx("div",{className:v.stepCompleteIndicator,children:t.jsx(ue,{name:"check",size:me.m,"aria-hidden":"true"})}):t.jsx("div",{className:v.stepNumber,"data-completion-state":n,children:t.jsx("span",{children:e})}),t.jsx("span",{className:v.stepName,children:s})]})})};ie.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const je="_stepSeparator_1xofu_1",ke={stepSeparator:je},ne=({isComplete:e,orientation:s})=>t.jsx("div",{style:{width:"100%",height:"100%"},children:t.jsx("div",{className:ke.stepSeparator,role:"separator","data-complete":e,"data-orientation":s})});ne.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const l=u.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:n,...i},a)=>{const[o,p]=u.useState(null),c=u.useRef(null),m=u.useCallback(r=>{c.current=r,p(r),typeof a=="function"?a(r):a&&(a.current=r)},[a]),x=r=>{if(r.key===de&&(r.preventDefault(),r.shiftKey?Se(v.stepButton,c.current):ve(v.stepButton,c.current)),[A,N,R,T].includes(r.key)){r.preventDefault(),r.stopPropagation();const d=o==null?void 0:o.querySelectorAll("button");if(d){const I=Array.from(d).findIndex(ae=>ae===document.activeElement);if(s==="horizontal")switch(r.key){case A:{F(I,Array.from(d));break}case N:{z(I,Array.from(d));break}default:return}else switch(r.key){case R:{F(I,Array.from(d));break}case T:{z(I,Array.from(d));break}default:return}}}};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":"Progression",style:{width:"100%",height:"100%"},ref:m,...i,children:t.jsx("ol",{className:ge.stepper,"data-orientation":s,children:e.map((r,d)=>t.jsxs(u.Fragment,{children:[t.jsx(ie,{id:r.id,number:d+1,name:r.name,completionState:r.completionState,orientation:s,onKeyDown:x,onClick:r.onClick,isActive:r.id===n,clickableCompleteStep:r.clickableCompleteStep}),d<e.length-1&&t.jsx(ne,{isComplete:r.completionState==="complete",orientation:s})]},r.name+d))})})});l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const Ve={title:"Composants/Stepper/Stepper",component:l,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},E=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],_e=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],Ee=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],S={args:{steps:E,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},y={args:{...S.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},f={args:{...S.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:E,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(l,{...e,steps:e.steps.slice(0,7)})})]})},b={args:{steps:E.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=u.useState(e.activeStepId),i=e.steps.map(a=>({...a,onClick:()=>n(a.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(l,{steps:i,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})}},j={args:{...S.args,steps:Ee,activeStepId:"1"},render:e=>{const[s,n]=u.useState(e.activeStepId),[i,a]=u.useState(e.steps),o=p=>{a(c=>c.map(m=>m.id===p?{...m,completionState:"complete"}:m))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(l,{steps:i,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(C,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const p=i.findIndex(c=>c.id===s);o(s),p<i.length-1?n(i[p+1].id):n(null)}}),t.jsx(C,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const p=i.findIndex(c=>c.id===s);p<i.length-1&&(n(i[p+1].id),a(c=>{const m=[...c];return m[p]={...m[p],completionState:"incomplete"},m}))}}),t.jsx(ce,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{n(i[0].id),a(i.map(p=>({...p,completionState:"unvisited"})))}})]})]})}},k={args:{steps:_e,orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,n]=u.useState(e.activeStepId),i=e.steps.map(a=>({...a,onClick:()=>n(a.id),clickableCompleteStep:!0}));return console.log("steps",i),t.jsx("div",{style:{width:"700px"},children:t.jsx(l,{...e,steps:i,activeStepId:s})})},play:async({canvasElement:e})=>{const n=await(await re(e)).getByRole("list"),i=n.querySelectorAll("button"),a=n.querySelector("[aria-current='step'] button");le(e),await h.tab(),await oe(()=>{g(a).toHaveFocus()}),await h.keyboard(_),g(i[1]).toHaveFocus(),await h.keyboard(_),g(i[0]).toHaveFocus(),await h.keyboard(_),g(i[i.length-1]).toHaveFocus(),await h.keyboard(pe),g(i[0]).toHaveFocus()}};var B,O,q;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(q=(O=S.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};var K,P,D;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(D=(P=y.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var H,L,V;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(L=f.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var Y,W,G;w.parameters={...w.parameters,docs:{...(Y=w.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(G=(W=w.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var U,M,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var $,J,X;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(X=(J=j.parameters)==null?void 0:J.docs)==null?void 0:X.source}}};var Z,ee,te;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Ye=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation"];export{S as Default,k as KeyboardNavigation,j as LinearProgression,b as NonLinearProgression,f as Sizes,y as Vertical,w as VerticalSizes,Ye as __namedExportsOrder,Ve as default};
