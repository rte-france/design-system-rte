import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import{v as _e}from"./v4-C6aID195.js";import{A as Ee,R as je}from"./RequiredIndicator-CnxxEbTK.js";import{B as Le}from"./Button-8ghNAy9-.js";import{I as X}from"./Icon-DOkBvtOM.js";import{I as Ce}from"./IconButton-Q4rJrqsf.js";import{L as Ie}from"./Loader-BciKA4ZH.js";import{T as Te}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Y=()=>_e(),ze=e=>t=>e.measureText(t).width,Ne=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,ye=e=>{const t=e.lastIndexOf("."),o=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:o}},C={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},Re=({file:e,removeFile:t,isError:o,errorMessage:u,compact:a,isLoading:c})=>{const i=n.useRef(null),w=n.useRef(null),F=n.useRef(null),x=n.useRef(null),b=n.useRef(null),[L,P]=n.useState(e.name),[G,H]=n.useState(!1),J=r=>{const f=E(),d="...",{baseName:l,fileType:R}=ye(r),g=`${d}${R}`;if(f<=0)return g;{const N=i.current;if(N){const Q=q(N),_=ze(Q);if(_(r)<=f)return r;const A=f-_(d)-_(R);if(A<=0)return g;let j=0,y=l.length;for(;j<y;){const S=Math.ceil((j+y)/2),{startStr:I,endStr:T}=h(S,l);_(I)+_(T)<=A?j=S:y=S-1}if(j===0)return g;const W=Math.ceil(j/2),U=Math.floor(j/2),m=W>0?l.substring(0,W):"",p=U>0?l.substring(l.length-U):"";return`${m}${d}${p}${R}`}else return r}},E=()=>{const r=i.current,f=x.current,d=b.current;if(!r||!f||!d)return 0;{const l=parseFloat(window.getComputedStyle(d).gap)||0;return d.offsetWidth-f.offsetWidth-l}},q=r=>{const d=document.createElement("canvas").getContext("2d"),l=window.getComputedStyle(r);return d.font=`${l.fontWeight} ${l.fontSize} ${l.fontFamily}`,d},h=(r,f)=>{const d=Math.ceil(r/2),l=Math.floor(r/2),R=d>0?f.substring(0,d):"",g=l>0?f.substring(f.length-l):"";return{startStr:R,endStr:g}};return n.useEffect(()=>{const r=J(e.name);H(r!==e.name),P(r)},[e]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:C["rte-file-upload-file-container"],children:[s.jsxs("div",{className:C["rte-file-upload-file"],children:[s.jsx("div",{className:C["rte-file-upload-file-icon"],ref:F,children:c?s.jsx(Ie,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:o?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:b,className:C["rte-file-upload-file-info"],children:[G?s.jsx(Te,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:i,className:C["rte-file-upload-file-name"],"data-is-compact":a,children:L})}):s.jsx("span",{ref:i,className:C["rte-file-upload-file-name"],"data-is-compact":a,children:e.name}),s.jsx("span",{ref:x,className:C["rte-file-upload-file-size"],"data-is-compact":a,children:Ne(e.size)})]}),s.jsx(Ce,{ref:w,name:"close",variant:"neutral",onClick:t,size:"m"})]}),u&&s.jsx(Ee,{label:u,appearance:"error"})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const $={"rte-file-upload-label":"_rte-file-upload-label_p9wg0_1","rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},z=({id:e,compactSpacing:t,label:o,showLabel:u=!0,required:a=!1,showLabelRequirement:c=!1,disabled:i=!1,assistiveTextLabel:w,assistiveAppearance:F="description",showAssistiveText:x=!0,showAssistiveIcon:b,assistiveTextLink:L,isError:P,multiple:G=!1,buttonLabel:H,accept:J,onChange:E,onUpload:q,errorFilesMap:h=[],onRemovingFile:r})=>{var U;const f=e??Y(),d=Y(),l=n.useRef(null),R=n.useRef(null),[g,N]=n.useState(null),[Q,_]=n.useState(new Set),A=x&&w&&F&&(h==null?void 0:h.length)===0,j=m=>{const p=Array.from(m.target.files||[]);E==null||E(p),N(p),q&&p.forEach(S=>{_(I=>new Set(I).add(S)),q(S).finally(()=>{_(I=>{const T=new Set(I);return T.delete(S),T})})})},y=m=>{m.stopPropagation();const p=document.getElementById(f);p&&p.click()},W=m=>{if(g){const p=g.indexOf(m);if(p!==-1){const S=g.filter((I,T)=>T!==p);N(S),r==null||r(m),E==null||E(S)}}};return s.jsxs("div",{className:$["rte-file-upload"],children:[u&&s.jsxs("label",{htmlFor:f,id:d,className:$["rte-file-upload-label"],children:[s.jsx("span",{children:o}),s.jsx(je,{required:a,showLabelRequirement:c})]}),A&&s.jsx(Ee,{label:w,appearance:P?"error":F,showIcon:b,href:L}),s.jsx("input",{ref:R,type:"file",multiple:G,id:f,className:$["rte-file-upload-input"],onChange:j,"aria-label":u?void 0:o,"aria-labelledby":d,disabled:i,accept:J}),s.jsx(Le,{disabled:i,variant:"primary",label:H,onClick:y,icon:"upload",iconPosition:"left",ref:l,size:t?"s":"m",className:t?$["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((U=l.current)==null?void 0:U.offsetWidth)??void 0},children:g==null?void 0:g.map((m,p)=>s.jsx(Re,{file:m,removeFile:()=>W(m),isLoading:Q.has(m),isError:(h==null?void 0:h[p])!==void 0,errorMessage:h==null?void 0:h[p],compact:t},m.lastModified+p))})]})};z.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const es={title:"Composants/FileUpload",component:z,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=n.useState([]),o=a=>{t(a)},u=a=>{t(c=>c.filter(i=>i!==a))};return s.jsx(z,{...e,onChange:o,onRemovingFile:u})}},D={args:{...v.args,id:"file-upload-2",disabled:!0}},K={args:{...v.args,id:"file-upload-3",multiple:!0}},V={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,o]=n.useState([]),u=c=>{o(c)},a=c=>{o(i=>i.filter(w=>w!==c))};return s.jsx(z,{...e,onChange:u,onRemovingFile:a,isError:t.length===0,showAssistiveText:t.length===0})}},M={args:{...v.args,id:"file-upload-5",showLabel:!1}},k={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},B={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,o]=n.useState(void 0),[,u]=n.useState([]),[a,c]=n.useState([]),i=F=>{if(u(F),F.some(x=>x.size>1*1024)){o("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=F.map(b=>b.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");o("Un ou plusieurs fichiers dépassent la limite de 1Ko."),c(x)}},w=F=>{u(x=>{const b=x.filter(L=>L!==F);return c(b.filter(L=>L.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),b})};return s.jsx(z,{...e,onChange:i,isError:!!t,assistiveTextLabel:t,errorFilesMap:a,onRemovingFile:w})}},O={args:{...v.args},render:e=>{const[,t]=n.useState([]),o=a=>new Promise(c=>{t(i=>[...i,a]),setTimeout(()=>{c()},5e3)}),u=a=>{t(c=>c.filter(i=>i!==a))};return s.jsx(z,{...e,multiple:!0,onUpload:o,onRemovingFile:u})}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,re,ne;D.parameters={...D.parameters,docs:{...(te=D.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(ne=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,ie,le;K.parameters={...K.parameters,docs:{...(ae=K.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(le=(ie=K.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ce,de;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,fe,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(pe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ge,he;k.parameters={...k.parameters,docs:{...(me=k.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(he=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,Fe,xe;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Fe=B.parameters)==null?void 0:Fe.docs)==null?void 0:xe.source}}};var Se,be,we;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(we=(be=O.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const ss=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{O as Async,k as CompactSpacing,v as Default,D as Disabled,B as MaxSizeExceeded,K as MultipleFiles,V as WithError,M as WithoutLabel,ss as __namedExportsOrder,es as default};
