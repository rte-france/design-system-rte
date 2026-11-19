import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{f as A,e as ce}from"./keyboard-test.constants-CC9zMOdc.js";import{w as ie,u as S,a as le,e as d}from"./index-4rjIhT2C.js";import{r as x}from"./index-G8LIXM5I.js";import{f as de}from"./testing.utils-DmLcTX3r.js";import{B as C}from"./Button-B3EnjUD7.js";import{I as ue}from"./IconButton-CJDki2nw.js";import{F as ne}from"./dom.constants-Bk0jVzGk.js";import{T as me,a as N,A as T,d as R,b as H}from"./keyboard.constants-BverKK8B.js";import{I as ve}from"./Badge-BKSKdLzq.js";import"./timepicker.constants-CynrC_9x.js";import{I as Se}from"./Icon-DBkoQNiA.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./common-button.constants-DjIinK9B.js";import"./index-DJ8f9STe.js";import"./IconButton.module-CR53g8c2.js";const xe="terminée",he="",ge="partiellement complétée",ye={complete:xe,unvisited:he,incomplete:ge},Ie="Progression",z=(e,s)=>{var a;let i=e===s.length-1?0:e+1;for(;((a=s[i])==null?void 0:a.getAttribute("aria-disabled"))==="true";)i===s.length-1?i=0:i++;s[i].focus()},O=(e,s)=>{var a;let i=e===0?s.length-1:e-1;for(;((a=s[i])==null?void 0:a.getAttribute("aria-disabled"))==="true";)i===0?i=s.length-1:i--;s[i].focus()},fe=(e,s)=>{var p;const i=document.activeElement,a=Array.from(document.querySelectorAll(ne)),n=Array.from(a).indexOf(i);let o=n===a.length-1?0:n+1;for(;(p=a[o])!=null&&p.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===a.length-1?o=0:o++;a[o].focus()},be=(e,s)=>{var p;const i=document.activeElement,a=Array.from(document.querySelectorAll(ne)),n=Array.from(a).indexOf(i);let o=n===0?a.length-1:n-1;for(;(p=a[o])!=null&&p.classList.contains(e)&&(s!=null&&s.contains(a[o]));)o===0?o=a.length-1:o--;a[o].focus()},we=e=>{const{completionState:s,clickableCompleteStep:i}=e;return s==="complete"&&i||s==="unvisited"||s==="incomplete"},_e="_stepper_1oua5_1",Ee={stepper:_e},ke="_stepperItem_zr0bt_14",Ae="_stepButton_zr0bt_22",je="_stepNumber_zr0bt_29",Ce="_stepCompleteIndicator_zr0bt_30",Ne="_stepName_zr0bt_67",v={"sr-only":"_sr-only_zr0bt_1",stepperItem:ke,stepButton:Ae,stepNumber:je,stepCompleteIndicator:Ce,stepName:Ne},pe=({number:e,name:s,completionState:i="unvisited",orientation:a="horizontal",onClick:n,clickableCompleteStep:o=!1,isActive:p,children:u,totalSteps:m,...k})=>{const r=x.useRef(null),l=n&&we({completionState:i,clickableCompleteStep:o}),g=l||p,y=ye[i],oe=()=>{l&&!p&&n&&n()};return t.jsxs("li",{className:v.stepperItem,"data-completion-state":i,"data-orientation":a,ref:r,"data-clickable":l,"data-active":p,...k,children:[t.jsxs("button",{className:v.stepButton,type:"button","aria-current":p?"step":void 0,onClick:oe,disabled:!g,tabIndex:p?0:-1,children:[t.jsxs("span",{className:v["sr-only"],children:["Étape ",e," sur ",m,","," "]}),i==="complete"&&!p?t.jsx("div",{className:v.stepCompleteIndicator,children:t.jsx(Se,{name:"check",size:ve.m,"aria-hidden":"true"})}):t.jsx("div",{className:v.stepNumber,"data-completion-state":i,"aria-hidden":"true",children:t.jsx("span",{children:e})}),t.jsx("span",{className:v.stepName,children:s}),y&&t.jsxs("span",{className:v["sr-only"],children:[", ",y]})]}),u]})};pe.__docgenInfo={description:"",methods:[],displayName:"StepperItem",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},totalSteps:{required:!0,tsType:{name:"number"},description:""},completionState:{defaultValue:{value:'"unvisited"',computed:!1},required:!1},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},clickableCompleteStep:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["coreStepperItemProps","Omit"]};const Te="_stepSeparatorContainer_nco2y_1",Re="_stepSeparator_nco2y_1",B={stepSeparatorContainer:Te,stepSeparator:Re},re=({isComplete:e,orientation:s})=>t.jsx("div",{className:B.stepSeparatorContainer,"aria-hidden":"true","data-orientation":s,children:t.jsx("div",{className:B.stepSeparator,"data-complete":e,"data-orientation":s})});re.__docgenInfo={description:"",methods:[],displayName:"StepperSeparator",props:{isComplete:{required:!0,tsType:{name:"boolean"},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:""}}};const c=x.forwardRef(({steps:e,orientation:s="horizontal",activeStepId:i,...a},n)=>{const[o,p]=x.useState(null),u=x.useRef(null),m=x.useCallback(r=>{u.current=r,p(r),typeof n=="function"?n(r):n&&(n.current=r)},[n]),k=r=>{if(r.key===me&&(r.preventDefault(),r.shiftKey?be(v.stepButton,u.current):fe(v.stepButton,u.current)),[N,T,R,H].includes(r.key)){r.preventDefault(),r.stopPropagation();const l=o==null?void 0:o.querySelectorAll("button");if(l){const g=Array.from(l).findIndex(y=>y===document.activeElement);if(s==="horizontal")switch(r.key){case N:{O(g,Array.from(l));break}case T:{z(g,Array.from(l));break}default:return}else switch(r.key){case R:{O(g,Array.from(l));break}case H:{z(g,Array.from(l));break}default:return}}}};return e.length<2||e.length>7?(console.warn("Stepper component requires between 2 and 7 steps to function properly."),null):t.jsx("nav",{"aria-label":Ie,style:{width:"100%",height:"100%"},ref:m,...a,children:t.jsx("ol",{className:Ee.stepper,"data-orientation":s,children:e.map((r,l)=>t.jsx(pe,{id:r.id,number:l+1,name:r.name,completionState:r.completionState,orientation:s,onKeyDown:k,onClick:r.onClick,isActive:r.id===i,clickableCompleteStep:r.clickableCompleteStep,totalSteps:e.length,children:l<e.length-1&&t.jsx(re,{isComplete:r.completionState==="complete",orientation:s})},r.name+l))})})});c.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStepId:{required:!0,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}},composes:["coreStepperProps"]};const Xe={title:"Composants/Stepper/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{control:"object"},orientation:{control:{type:"select"},options:["horizontal","vertical"]},activeStepId:{control:"text"}}},j=[{id:"1",name:"Étape 1",completionState:"complete"},{id:"2",name:"Étape 2",completionState:"incomplete"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"},{id:"5",name:"Étape 5",completionState:"unvisited"},{id:"6",name:"Étape 6",completionState:"unvisited"},{id:"7",name:"Étape 7",completionState:"unvisited"}],He=[{id:"1",name:"Étape 1",completionState:"complete",onClick:()=>console.log("Étape 1 clicked"),clickableCompleteStep:!0},{id:"2",name:"Étape 2",completionState:"incomplete",onClick:()=>console.log("Étape 2 clicked")},{id:"3",name:"Étape 3",completionState:"unvisited",onClick:()=>console.log("Étape 3 clicked")},{id:"4",name:"Étape 4",completionState:"unvisited",onClick:()=>console.log("Étape 4 clicked")},{id:"5",name:"Étape 5",completionState:"unvisited",onClick:()=>console.log("Étape 5 clicked")},{id:"6",name:"Étape 6",completionState:"unvisited",onClick:()=>console.log("Étape 6 clicked")},{id:"7",name:"Étape 7",completionState:"unvisited",onClick:()=>console.log("Étape 7 clicked")}],ze=[{id:"1",name:"Étape 1",completionState:"unvisited"},{id:"2",name:"Étape 2",completionState:"unvisited"},{id:"3",name:"Étape 3",completionState:"unvisited"},{id:"4",name:"Étape 4",completionState:"unvisited"}],h={args:{steps:j,orientation:"horizontal",activeStepId:"3"},render:e=>t.jsx("div",{style:{width:"300px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},I={args:{...h.args,orientation:"vertical"},render:e=>t.jsx("div",{style:{height:"300px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3),activeStepId:e.steps[1].id})})},f={args:{...h.args,orientation:"horizontal"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx("div",{style:{width:"160px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{width:"274px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{width:"384px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{width:"488px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{width:"592px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{width:"680px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,7)})})]})},b={args:{steps:j,orientation:"vertical",activeStepId:"3"},render:e=>t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"8px"},children:[t.jsx("div",{style:{height:"144px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,2),activeStepId:e.steps[1].id})}),t.jsx("div",{style:{height:"240px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,3)})}),t.jsx("div",{style:{height:"336px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,4)})}),t.jsx("div",{style:{height:"424px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,5)})}),t.jsx("div",{style:{height:"512px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,6)})}),t.jsx("div",{style:{height:"584px"},children:t.jsx(c,{...e,steps:e.steps.slice(0,7)})})]})},w={args:{steps:j.slice(0,4),orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,i]=x.useState(e.activeStepId),a=e.steps.map(n=>({...n,onClick:()=>i(n.id),clickableCompleteStep:!0}));return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",padding:"16px"},children:t.jsx(c,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:t.jsxs("p",{children:["Contenu de l'étape ",s," ",s==="1"?"déjà validé":s==="2"?"à valider":""]})})]})},play:async({canvasElement:e})=>{const s=ie(e),i=s.getByRole("button",{name:/^Étape 1 sur 4, Étape 1\s*, terminée$/}),a=s.getByRole("button",{name:/^Étape 2 sur 4, Étape 2\s*, partiellement complétée$/}),n=s.getByRole("button",{name:"Étape 3 sur 4, Étape 3"});await S.click(i),d(i).toHaveAttribute("aria-current","step"),d(i).toHaveAccessibleName(/^Étape 1 sur 4, Étape 1\s*, terminée$/),await S.click(a),d(a).toHaveAttribute("aria-current","step"),d(a).toHaveAccessibleName(/^Étape 2 sur 4, Étape 2\s*, partiellement complétée$/),await S.click(n),d(n).toHaveAttribute("aria-current","step"),d(n).toHaveAccessibleName("Étape 3 sur 4, Étape 3"),d(i.querySelector("svg")).toHaveAttribute("aria-hidden","true")}},_={args:{...h.args,steps:ze,activeStepId:"1"},render:e=>{const[s,i]=x.useState(e.activeStepId),[a,n]=x.useState(e.steps),o=p=>{n(u=>u.map(m=>m.id===p?{...m,completionState:"complete"}:m))};return t.jsxs("div",{style:{width:"100%"},children:[t.jsx("div",{style:{width:"400px",backgroundColor:"var(--background-surface-primary)",padding:"16px"},children:t.jsx(c,{steps:a,activeStepId:s})}),t.jsx("div",{style:{marginTop:"16px",width:"100%"},children:s===null?t.jsx("p",{children:"Processus terminé !"}):t.jsxs("p",{children:["Contenu de l'étape ",s]})}),t.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[t.jsx(C,{disabled:s===null,label:"Valider et passer à l'étape suivante",onClick:()=>{const p=a.findIndex(u=>u.id===s);o(s),p<a.length-1?i(a[p+1].id):i(null)}}),t.jsx(C,{disabled:s===null,label:"Valider partiellement et passer à l'étape suivante",onClick:()=>{const p=a.findIndex(u=>u.id===s);p<a.length-1&&(i(a[p+1].id),n(u=>{const m=[...u];return m[p]={...m[p],completionState:"incomplete"},m}))}}),t.jsx(ue,{variant:"text",name:"reload","aria-label":"Recommencer",onClick:()=>{i(a[0].id),n(a.map(p=>({...p,completionState:"unvisited"})))}})]})]})}},E={tags:["!autodocs"],args:{steps:He,orientation:"horizontal",activeStepId:"3"},render:e=>{const[s,i]=x.useState(e.activeStepId),a=e.steps.map(n=>({...n,onClick:()=>i(n.id),clickableCompleteStep:!0}));return console.log("steps",a),t.jsx("div",{style:{width:"700px"},children:t.jsx(c,{...e,steps:a,activeStepId:s})})},play:async({canvasElement:e})=>{const i=await(await ie(e)).getByRole("list"),a=i.querySelectorAll("button"),n=i.querySelector("button[aria-current='step']");de(),await S.tab(),await le(()=>{d(n).toHaveFocus()}),await S.keyboard(A),d(a[1]).toHaveFocus(),await S.keyboard(A),d(a[0]).toHaveFocus(),await S.keyboard(A),d(a[a.length-1]).toHaveFocus(),await S.keyboard(ce),d(a[0]).toHaveFocus(),await S.click(a[0]),d(a[0]).toHaveAttribute("aria-current","step"),d(a[0]).toHaveAccessibleName(/^Étape 1 sur 7, Étape 1\s*, terminée$/)}};var P,F,L;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(L=(F=h.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var q,D,K;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    orientation: "vertical"
  },
  render: args => <div style={{
    height: "300px"
  }}>
      <Stepper {...args} steps={args.steps.slice(0, 3)} activeStepId={args.steps[1].id} />
    </div>
}`,...(K=(D=I.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var V,Y,W;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(W=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var $,G,M;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(M=(G=b.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var U,Q,J;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(J=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Z,ee;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(ee=(Z=_.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,se,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(se=E.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const Ze=["Default","Vertical","Sizes","VerticalSizes","NonLinearProgression","LinearProgression","KeyboardNavigation"];export{h as Default,E as KeyboardNavigation,_ as LinearProgression,w as NonLinearProgression,f as Sizes,I as Vertical,b as VerticalSizes,Ze as __namedExportsOrder,Xe as default};
