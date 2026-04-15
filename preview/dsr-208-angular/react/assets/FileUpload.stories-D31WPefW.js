import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-G8LIXM5I.js";import{v as _e}from"./v4-C6aID195.js";import{A as Ee,R as je}from"./RequiredIndicator-CnxxEbTK.js";import{B as Ce}from"./Button-8ghNAy9-.js";import{I as X}from"./Icon-DOkBvtOM.js";import{I as Le}from"./IconButton-Q4rJrqsf.js";import{L as Ie}from"./Loader-BciKA4ZH.js";import{T as Te}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Y=()=>_e(),ze=e=>t=>e.measureText(t).width,Ne=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,ye=e=>{const t=e.lastIndexOf("."),o=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:o}},L={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},Re=({file:e,removeFile:t,isError:o,errorMessage:u,compact:a,isLoading:c})=>{const l=r.useRef(null),w=r.useRef(null),F=r.useRef(null),x=r.useRef(null),b=r.useRef(null),[C,G]=r.useState(e.name),[H,J]=r.useState(!1),q=r.useCallback(n=>{const f=E(),d="...",{baseName:i,fileType:R}=ye(n),g=`${d}${R}`;if(f<=0)return g;{const N=l.current;if(N){const Q=A(N),_=ze(Q);if(_(n)<=f)return n;const W=f-_(d)-_(R);if(W<=0)return g;let j=0,y=i.length;for(;j<y;){const S=Math.ceil((j+y)/2),{startStr:I,endStr:T}=h(S,i);_(I)+_(T)<=W?j=S:y=S-1}if(j===0)return g;const $=Math.ceil(j/2),U=Math.floor(j/2),m=$>0?i.substring(0,$):"",p=U>0?i.substring(i.length-U):"";return`${m}${d}${p}${R}`}else return n}},[]),E=()=>{const n=l.current,f=x.current,d=b.current;if(!n||!f||!d)return 0;{const i=parseFloat(window.getComputedStyle(d).gap)||0;return d.offsetWidth-f.offsetWidth-i}},A=n=>{const d=document.createElement("canvas").getContext("2d"),i=window.getComputedStyle(n);return d.font=`${i.fontWeight} ${i.fontSize} ${i.fontFamily}`,d},h=(n,f)=>{const d=Math.ceil(n/2),i=Math.floor(n/2),R=d>0?f.substring(0,d):"",g=i>0?f.substring(f.length-i):"";return{startStr:R,endStr:g}};return r.useEffect(()=>{const n=q(e.name);J(n!==e.name),G(n)},[e,q]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:L["rte-file-upload-file-container"],children:[s.jsxs("div",{className:L["rte-file-upload-file"],children:[s.jsx("div",{className:L["rte-file-upload-file-icon"],ref:F,children:c?s.jsx(Ie,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:o?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:b,className:L["rte-file-upload-file-info"],children:[H?s.jsx(Te,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:l,className:L["rte-file-upload-file-name"],"data-is-compact":a,children:C})}):s.jsx("span",{ref:l,className:L["rte-file-upload-file-name"],"data-is-compact":a,children:e.name}),s.jsx("span",{ref:x,className:L["rte-file-upload-file-size"],"data-is-compact":a,children:Ne(e.size)})]}),s.jsx(Le,{ref:w,name:"close",variant:"neutral",onClick:t,size:"m"})]}),u&&s.jsx(Ee,{label:u,appearance:"error"})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const D={"rte-file-upload-label":"_rte-file-upload-label_p9wg0_1","rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},z=({id:e,compactSpacing:t,label:o,showLabel:u=!0,required:a=!1,showLabelRequirement:c=!1,disabled:l=!1,assistiveTextLabel:w,assistiveAppearance:F="description",showAssistiveText:x=!0,showAssistiveIcon:b,assistiveTextLink:C,isError:G,multiple:H=!1,buttonLabel:J,accept:q,onChange:E,onUpload:A,errorFilesMap:h=[],onRemovingFile:n})=>{var U;const f=e??Y(),d=Y(),i=r.useRef(null),R=r.useRef(null),[g,N]=r.useState(null),[Q,_]=r.useState(new Set),W=x&&w&&F&&(h==null?void 0:h.length)===0,j=m=>{const p=Array.from(m.target.files||[]);E==null||E(p),N(p),A&&p.forEach(S=>{_(I=>new Set(I).add(S)),A(S).finally(()=>{_(I=>{const T=new Set(I);return T.delete(S),T})})})},y=m=>{m.stopPropagation();const p=document.getElementById(f);p&&p.click()},$=m=>{if(g){const p=g.indexOf(m);if(p!==-1){const S=g.filter((I,T)=>T!==p);N(S),n==null||n(m),E==null||E(S)}}};return s.jsxs("div",{className:D["rte-file-upload"],children:[u&&s.jsxs("label",{htmlFor:f,id:d,className:D["rte-file-upload-label"],children:[s.jsx("span",{children:o}),s.jsx(je,{required:a,showLabelRequirement:c})]}),W&&s.jsx(Ee,{label:w,appearance:G?"error":F,showIcon:b,href:C}),s.jsx("input",{ref:R,type:"file",multiple:H,id:f,className:D["rte-file-upload-input"],onChange:j,"aria-label":u?void 0:o,"aria-labelledby":d,disabled:l,accept:q}),s.jsx(Ce,{disabled:l,variant:"primary",label:J,onClick:y,icon:"upload",iconPosition:"left",ref:i,size:t?"s":"m",className:t?D["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((U=i.current)==null?void 0:U.offsetWidth)??void 0},children:g==null?void 0:g.map((m,p)=>s.jsx(Re,{file:m,removeFile:()=>$(m),isLoading:Q.has(m),isError:(h==null?void 0:h[p])!==void 0,errorMessage:h==null?void 0:h[p],compact:t},m.lastModified+p))})]})};z.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const es={title:"Composants/FileUpload",component:z,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=r.useState([]),o=a=>{t(a)},u=a=>{t(c=>c.filter(l=>l!==a))};return s.jsx(z,{...e,onChange:o,onRemovingFile:u})}},K={args:{...v.args,id:"file-upload-2",disabled:!0}},V={args:{...v.args,id:"file-upload-3",multiple:!0}},M={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,o]=r.useState([]),u=c=>{o(c)},a=c=>{o(l=>l.filter(w=>w!==c))};return s.jsx(z,{...e,onChange:u,onRemovingFile:a,isError:t.length===0,showAssistiveText:t.length===0})}},k={args:{...v.args,id:"file-upload-5",showLabel:!1}},B={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},O={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,o]=r.useState(void 0),[,u]=r.useState([]),[a,c]=r.useState([]),l=F=>{if(u(F),F.some(x=>x.size>1*1024)){o("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=F.map(b=>b.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");o("Un ou plusieurs fichiers dépassent la limite de 1Ko."),c(x)}},w=F=>{u(x=>{const b=x.filter(C=>C!==F);return c(b.filter(C=>C.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),b})};return s.jsx(z,{...e,onChange:l,isError:!!t,assistiveTextLabel:t,errorFilesMap:a,onRemovingFile:w})}},P={args:{...v.args},render:e=>{const[,t]=r.useState([]),o=a=>new Promise(c=>{t(l=>[...l,a]),setTimeout(()=>{c()},5e3)}),u=a=>{t(c=>c.filter(l=>l!==a))};return s.jsx(z,{...e,multiple:!0,onUpload:o,onRemovingFile:u})}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    id: "file-upload-1",
    label: "Uploader vos documents",
    compactSpacing: false,
    showLabel: true,
    showLabelRequirement: false,
    required: true,
    disabled: false,
    assistiveTextLabel: "Formats acceptés : .jpg, .png, .pdf",
    assistiveAppearance: "description",
    showAssistiveIcon: true,
    assistiveTextLink: "#",
    isError: false,
    multiple: false,
    buttonLabel: "Sélectionner un fichier"
  },
  render: args => {
    const [, setFiles] = useState<File[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
    };
    return <FileUpload {...args} onChange={handleChange} onRemovingFile={handleRemovingFile} />;
  }
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,re,ne;K.parameters={...K.parameters,docs:{...(te=K.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(ne=(re=K.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,le,ie;V.parameters={...V.parameters,docs:{...(ae=V.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ie=(le=V.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var oe,ce,de;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-4",
    isError: true,
    assistiveTextLabel: "Veuillez sélectionner un fichier avant de soumettre."
  },
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    const handleChange = (newFiles: File[]) => {
      setFiles(newFiles);
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
    };
    return <FileUpload {...args} onChange={handleChange} onRemovingFile={handleRemovingFile} isError={files.length === 0} showAssistiveText={files.length === 0} />;
  }
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,fe,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(pe=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ge,he;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(he=(ge=B.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,Fe,xe;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-7",
    assistiveTextLabel: "Un ou plusieurs fichiers dépassent la limite de 1Ko.",
    isError: true
  },
  render: args => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [, setFiles] = useState<File[]>([]);
    const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
      if (files.some(file => file.size > 1 * 1024)) {
        setError("Un ou plusieurs fichiers dépassent la limite de 1Ko.");
        const nextErrorFilesMap = files.map(file => file.size > 1 * 1024 ? "Ce fichier dépasse la limite de 1Ko." : "");
        setError("Un ou plusieurs fichiers dépassent la limite de 1Ko.");
        setErrorFilesMap(nextErrorFilesMap);
      }
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => {
        const nextFiles = prev.filter(f => f !== file);
        setErrorFilesMap(nextFiles.filter(currentFile => currentFile.size > 1 * 1024).map(() => "Ce fichier dépasse la limite de 1Ko."));
        return nextFiles;
      });
    };
    return <FileUpload {...args} onChange={handleChange} isError={!!error} assistiveTextLabel={error} errorFilesMap={errorFilesMap} onRemovingFile={handleRemovingFile} />;
  }
}`,...(xe=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:xe.source}}};var Se,be,we;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args
  },
  render: args => {
    const [, setFiles] = useState<File[]>([]);
    const handleChange = (file: File) => {
      return new Promise<void>(resolve => {
        setFiles(prev => [...prev, file]);
        setTimeout(() => {
          resolve();
        }, 5000);
      });
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
    };
    return <FileUpload {...args} multiple onUpload={handleChange} onRemovingFile={handleRemovingFile} />;
  }
}`,...(we=(be=P.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const ss=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{P as Async,B as CompactSpacing,v as Default,K as Disabled,O as MaxSizeExceeded,V as MultipleFiles,M as WithError,k as WithoutLabel,ss as __namedExportsOrder,es as default};
