import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import{v as je}from"./v4-C6aID195.js";import{A as Ee,R as Ce}from"./RequiredIndicator-DUuxybI8.js";import{B as Le}from"./Button-BIfM-PmD.js";import{I as X}from"./Icon-CU2dhKsu.js";import{I as Ie}from"./IconButton-B3cia4P8.js";import{L as Te}from"./Loader-BciKA4ZH.js";import{T as ze}from"./Tooltip-Bwcm8rl-.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DbhMk7ak.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-C50GdgLn.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Y=()=>je(),Ne=e=>t=>e.measureText(t).width,ye=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,Ue=e=>{const t=e.lastIndexOf("."),d=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:d}},L={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},Re=({file:e,removeFile:t,isError:d,errorMessage:p,compact:a,isLoading:u})=>{const i=n.useRef(null),w=n.useRef(null),F=n.useRef(null),x=n.useRef(null),S=n.useRef(null),[C,P]=n.useState(e.name),[G,H]=n.useState(!1),N=n.useCallback(l=>{const m=E(),f="...",{baseName:o,fileType:R}=Ue(l),g=`${f}${R}`;if(m<=0)return g;{const T=i.current;if(T){const J=y(T),_=Ne(J);if(_(l)<=m)return l;const U=m-_(f)-_(R);if(U<=0)return g;let j=0,z=o.length;for(;j<z;){const r=Math.ceil((j+z)/2),{startStr:b,endStr:Q}=h(r,o);_(b)+_(Q)<=U?j=r:z=r-1}if(j===0)return g;const q=Math.ceil(j/2),A=Math.floor(j/2),W=q>0?o.substring(0,q):"",c=A>0?o.substring(o.length-A):"";return`${W}${f}${c}${R}`}else return l}},[]),E=()=>{const l=i.current,m=x.current,f=S.current;if(!l||!m||!f)return 0;{const o=parseFloat(window.getComputedStyle(f).gap)||0;return f.offsetWidth-m.offsetWidth-o}},y=l=>{const f=document.createElement("canvas").getContext("2d"),o=window.getComputedStyle(l);return f.font=`${o.fontWeight} ${o.fontSize} ${o.fontFamily}`,f},h=(l,m)=>{const f=Math.ceil(l/2),o=Math.floor(l/2),R=f>0?m.substring(0,f):"",g=o>0?m.substring(m.length-o):"";return{startStr:R,endStr:g}};return n.useEffect(()=>{const l=N(e.name);H(l!==e.name),P(l)},[e,N]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:L["rte-file-upload-file-container"],children:[s.jsxs("div",{className:L["rte-file-upload-file"],children:[s.jsx("div",{className:L["rte-file-upload-file-icon"],ref:F,children:u?s.jsx(Te,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:d?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:S,className:L["rte-file-upload-file-info"],children:[G?s.jsx(ze,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:i,className:L["rte-file-upload-file-name"],"data-is-compact":a,children:C})}):s.jsx("span",{ref:i,className:L["rte-file-upload-file-name"],"data-is-compact":a,children:e.name}),s.jsx("span",{ref:x,className:L["rte-file-upload-file-size"],"data-is-compact":a,children:ye(e.size)})]}),s.jsx(Ie,{ref:w,name:"close",variant:"neutral",onClick:t,size:"m"})]}),p&&s.jsx(Ee,{label:p,appearance:"error"})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const $={"rte-file-upload-label":"_rte-file-upload-label_p9wg0_1","rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},I=({id:e,compactSpacing:t,label:d,showLabel:p=!0,required:a=!1,showLabelRequirement:u=!1,disabled:i=!1,assistiveTextLabel:w,assistiveAppearance:F="description",showAssistiveText:x=!0,showAssistiveIcon:S,assistiveTextLink:C,isError:P,multiple:G=!1,buttonLabel:H,accept:N,onChange:E,onUpload:y,errorFilesMap:h=[],onRemovingFile:l})=>{var W;const m=e??Y(),f=Y(),o=n.useRef(null),R=n.useRef(null),[g,T]=n.useState(null),[J,_]=n.useState(new Set),U=x&&w&&F&&(h==null?void 0:h.length)===0,j=c=>{const r=Array.from(c.target.files||[]);E==null||E(r),T(r),y&&r.forEach(b=>{A(b)})},z=c=>{c.stopPropagation();const r=document.getElementById(m);r&&r.click()},q=c=>{if(g){const r=g.indexOf(c);if(r!==-1){const b=g.filter((Q,_e)=>_e!==r);T(b),l==null||l(c),E==null||E(b)}}},A=c=>{_(r=>new Set(r).add(c)),y(c).finally(()=>{_(r=>{const b=new Set(r);return b.delete(c),b})})};return s.jsxs("div",{className:$["rte-file-upload"],children:[p&&s.jsxs("label",{htmlFor:m,id:f,className:$["rte-file-upload-label"],children:[s.jsx("span",{children:d}),s.jsx(Ce,{required:a,showLabelRequirement:u})]}),U&&s.jsx(Ee,{label:w,appearance:P?"error":F,showIcon:S,href:C}),s.jsx("input",{ref:R,type:"file",multiple:G,id:m,className:$["rte-file-upload-input"],onChange:j,"aria-label":p?void 0:d,"aria-labelledby":f,disabled:i,accept:N}),s.jsx(Le,{disabled:i,variant:"primary",label:H,onClick:z,icon:"upload",iconPosition:"left",ref:o,size:t?"s":"m",className:t?$["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((W=o.current)==null?void 0:W.offsetWidth)??void 0},children:g==null?void 0:g.map((c,r)=>s.jsx(Re,{file:c,removeFile:()=>q(c),isLoading:J.has(c),isError:(h==null?void 0:h[r])!==void 0,errorMessage:h==null?void 0:h[r],compact:t},c.lastModified+r))})]})};I.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ss={title:"Composants/FileUpload",component:I,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=n.useState([]),d=a=>{t(a)},p=a=>{t(u=>u.filter(i=>i!==a))};return s.jsx(I,{...e,onChange:d,onRemovingFile:p})}},D={args:{...v.args,id:"file-upload-2",disabled:!0}},K={args:{...v.args,id:"file-upload-3",multiple:!0}},V={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,d]=n.useState([]),p=u=>{d(u)},a=u=>{d(i=>i.filter(w=>w!==u))};return s.jsx(I,{...e,onChange:p,onRemovingFile:a,isError:t.length===0,showAssistiveText:t.length===0})}},M={args:{...v.args,id:"file-upload-5",showLabel:!1}},k={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},B={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,d]=n.useState(void 0),[,p]=n.useState([]),[a,u]=n.useState([]),i=F=>{if(p(F),F.some(x=>x.size>1*1024)){d("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=F.map(S=>S.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");d("Un ou plusieurs fichiers dépassent la limite de 1Ko."),u(x)}},w=F=>{p(x=>{const S=x.filter(C=>C!==F);return u(S.filter(C=>C.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),S})};return s.jsx(I,{...e,onChange:i,isError:!!t,assistiveTextLabel:t,errorFilesMap:a,onRemovingFile:w})}},O={args:{...v.args},render:e=>{const[,t]=n.useState([]),d=a=>new Promise(u=>{t(i=>[...i,a]),setTimeout(()=>{u()},5e3)}),p=a=>{t(u=>u.filter(i=>i!==a))};return s.jsx(I,{...e,multiple:!0,onUpload:d,onRemovingFile:p})}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(ne=(re=D.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,ae,ie;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ie=(ae=K.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var oe,ce,de;V.parameters={...V.parameters,docs:{...(oe=V.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(we=(be=O.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const ts=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{O as Async,k as CompactSpacing,v as Default,D as Disabled,B as MaxSizeExceeded,K as MultipleFiles,V as WithError,M as WithoutLabel,ts as __namedExportsOrder,ss as default};
