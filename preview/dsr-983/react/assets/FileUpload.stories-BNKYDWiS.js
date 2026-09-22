import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as t}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as te}from"./id.utils-DsO5Uws7.js";import{A as Ce,L as Ue}from"./Label-BYbC9qee.js";import{B as ye}from"./Button-kS01vuC-.js";import{g as Ae}from"./string.utils-BTbePzEe.js";import{I as ae}from"./Icon-VewZnR13.js";import{I as Ne}from"./IconButton-CqYdVntE.js";import{L as ze}from"./Loader-WDdpk2Jd.js";import{T as $e}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Bi6533Gh.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const re={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},Oe=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,De=s=>{const r=s.lastIndexOf("."),i=r!==-1?s.substring(r):"";return{baseName:r!==-1?s.substring(0,r):s,fileType:i}},R={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},Me=({file:s,removeFile:r,isError:i,errorMessage:u,compact:l,isLoading:o})=>{const c=t.useRef(null),d=t.useRef(null),f=t.useRef(null),h=t.useRef(null),_=t.useRef(null),j=t.useRef(te()).current,[W,X]=t.useState(s.name),[Y,L]=t.useState(!1),z=t.useCallback(m=>{const p=$(),F="...",{baseName:g,fileType:S}=De(m),v=`${F}${S}`;if(p<=0)return v;{const y=c.current;if(y){const I=Ae(y);if(I(m)<=p)return m;const T=p-I(F)-I(S);if(T<=0)return v;let w=0,D=g.length;for(;w<D;){const q=Math.ceil((w+D)/2),{startStr:ee,endStr:se}=O(q,g);I(ee)+I(se)<=T?w=q:D=q-1}if(w===0)return v;const A=Math.ceil(w/2),N=Math.floor(w/2),K=A>0?g.substring(0,A):"",Z=N>0?g.substring(g.length-N):"";return`${K}${F}${Z}${S}`}else return m}},[]),$=()=>{const m=c.current,p=h.current,F=_.current;if(!m||!p||!F)return 0;{const g=parseFloat(window.getComputedStyle(F).gap)||0;return F.offsetWidth-p.offsetWidth-g}},O=(m,p)=>{const F=Math.ceil(m/2),g=Math.floor(m/2),S=F>0?p.substring(0,F):"",v=g>0?p.substring(p.length-g):"";return{startStr:S,endStr:v}};return t.useEffect(()=>{const m=z(s.name);L(m!==s.name),X(m)},[s,z]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:R["rte-file-upload-file-container"],children:[e.jsxs("div",{className:R["rte-file-upload-file"],children:[e.jsx("div",{className:R["rte-file-upload-file-icon"],ref:f,"aria-live":"polite","aria-atomic":"true",children:o?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:R["sr-only"],children:[re.LOADING," : ",s.name]}),e.jsx(ze,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:i?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:R["sr-only"],children:[re.ERROR," : ",s.name]}),e.jsx(ae,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:R["sr-only"],children:[re.SUCCESS," : ",s.name]}),e.jsx(ae,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)"})]})})}),e.jsxs("div",{ref:_,className:R["rte-file-upload-file-info"],children:[Y?e.jsx($e,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:c,className:R["rte-file-upload-file-name"],"data-is-compact":l,children:W})}):e.jsx("span",{ref:c,className:R["rte-file-upload-file-name"],"data-is-compact":l,children:s.name}),e.jsx("span",{ref:h,className:R["rte-file-upload-file-size"],"data-is-compact":l,children:Oe(s.size)})]}),e.jsx(Ne,{ref:d,name:"close",variant:"neutral",onClick:r,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name,"aria-describedby":u?j:void 0})]}),u&&e.jsx("div",{role:"alert","aria-live":"assertive",children:e.jsx(Ce,{id:j,label:u,appearance:"error"})})]})})};Me.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const V={"rte-file-upload-input":"_rte-file-upload-input_ujylx_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_ujylx_31","sr-only":"_sr-only_ujylx_35"},U=({id:s,compactSpacing:r,label:i,required:u=!1,showLabelRequirement:l=!1,disabled:o=!1,assistiveTextLabel:c,assistiveAppearance:d="description",showAssistiveText:f=!0,showAssistiveIcon:h,assistiveTextLink:_,isError:j,multiple:W=!1,buttonLabel:X,accept:Y,onChange:L,onUpload:z,uploadErrorMessage:$="Erreur lors du téléchargement du fichier.",errorFilesMap:O=[],onRemovingFile:m})=>{var ne;const p=s??te(),F=te(),g=t.useRef(null),S=t.useRef(null),[v,y]=t.useState(null),[I,T]=t.useState(new Set),[w,D]=t.useState(""),[A,N]=t.useState(new Map),K=f&&c&&d&&O.length===0&&A.size===0,Z=async n=>{const a=Array.from(n.target.files||[]);L==null||L(a),W?y(x=>x?[...x,...a]:a):(y(a),N(new Map)),z&&await Promise.all(a.map(x=>se(x)))},q=n=>{n.stopPropagation();const a=document.getElementById(p);a&&a.click()},ee=n=>{var a;if(v){const x=v.indexOf(n);if(x!==-1){const b=v.filter((C,M)=>M!==x);y(b),D(`${n.name} a été supprimé. ${b.length} fichier${b.length>1?"s":""} restant${b.length>1?"s":""}.`),T(C=>{const M=new Set(C);return M.delete(n),M}),N(C=>{const M=new Map(C);return M.delete(n),M}),m==null||m(n),L==null||L(b),g.current&&(S.current&&(S.current.value=""),(a=g.current)==null||a.focus())}}},se=n=>(T(a=>new Set(a).add(n)),z(n).then(()=>{T(a=>{const x=new Set(a);return x.delete(n),x})}).catch(a=>{T(b=>{const C=new Set(b);return C.delete(n),C});const x=typeof $=="function"?$(n,a):$;N(b=>new Map(b).set(n,x))}));return e.jsxs("div",{className:V["rte-file-upload"],children:[e.jsx("input",{ref:S,type:"file",multiple:W,id:p,className:V["rte-file-upload-input"],onChange:Z,"aria-labelledby":i?F:`${p}-button`,"aria-describedby":K?`${p}-assistive-text`:void 0,disabled:o,accept:Y}),i&&e.jsx(Ue,{htmlFor:p,id:F,label:i,required:u,showLabelRequirement:l}),K&&e.jsx(Ce,{id:`${p}-assistive-text`,label:c,appearance:j?"error":d,showIcon:h,href:_}),e.jsx(ye,{id:`${p}-button`,disabled:o,variant:"primary",label:X,onClick:q,icon:"upload",iconPosition:"left",ref:g,size:r?"s":"m",className:r?V["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((ne=g.current)==null?void 0:ne.offsetWidth)??void 0},children:v==null?void 0:v.map((n,a)=>e.jsx(Me,{file:n,removeFile:()=>ee(n),isLoading:I.has(n),isError:O[a]!==void 0||A.has(n),errorMessage:A.get(n)??O[a],compact:r},n.lastModified+a))}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:V["sr-only"],children:w})]})};U.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},uploadErrorMessage:{defaultValue:{value:'"Erreur lors du téléchargement du fichier."',computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const us={title:"Composants/FileUpload",component:U,tags:["autodocs"]},E={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,r]=t.useState([]),i=l=>{r(l)},u=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(U,{...s,onChange:i,onRemovingFile:u})}},k={args:{...E.args,id:"file-upload-2",disabled:!0}},P={args:{...E.args,id:"file-upload-3",multiple:!0},render:s=>{const[,r]=t.useState([]),i=d=>{r(d)},u=t.useRef(0),l=(d,f)=>f instanceof Error&&f.message==="FILE_TOO_LARGE"?`${d.name} dépasse la taille maximale autorisée.`:`Le téléversement de ${d.name} a échoué.`,o=d=>new Promise((f,h)=>{u.current%2===0?setTimeout(()=>{h(new Error("FILE_TOO_LARGE")),console.log("File not uploaded:",d)},5e3):setTimeout(()=>{f(),console.log("File not uploaded:",d)},5e3),u.current+=1}),c=d=>{r(f=>f.filter(h=>h!==d))};return e.jsx(U,{...s,onUpload:o,uploadErrorMessage:l,onChange:i,onRemovingFile:c})}},G={args:{...E.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[r,i]=t.useState([]),u=o=>{i(o)},l=o=>{i(c=>c.filter(d=>d!==o))};return e.jsx(U,{...s,onChange:u,onRemovingFile:l,isError:r.length===0,showAssistiveText:r.length===0})}},B={args:{...E.args,id:"file-upload-5",showLabel:!1}},H={args:{...E.args,id:"file-upload-6",compactSpacing:!0}},J={args:{...E.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[r,i]=t.useState(void 0),[,u]=t.useState([]),[l,o]=t.useState([]),c=f=>{if(u(f),f.some(h=>h.size>1*1024)){i("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const h=f.map(_=>_.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");i("Un ou plusieurs fichiers dépassent la limite de 1Ko."),o(h)}},d=f=>{u(h=>{const _=h.filter(j=>j!==f);return o(_.filter(j=>j.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),_})};return e.jsx(U,{...s,onChange:c,isError:!!r,assistiveTextLabel:r,errorFilesMap:l,onRemovingFile:d})}},Q={args:{...E.args},render:s=>{const[,r]=t.useState([]),i=l=>new Promise(o=>{r(c=>[...c,l]),setTimeout(()=>{o()},5e3)}),u=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(U,{...s,multiple:!0,onUpload:i,onRemovingFile:u})}};var ie,le,oe;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(le=E.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,ue,de;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(de=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,fe,me;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  },
  render: args => {
    const [, setFiles] = useState<File[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
    };
    const count = useRef(0);
    const getUploadErrorMessage = (file: File, error: unknown) => {
      if (error instanceof Error && error.message === "FILE_TOO_LARGE") {
        return \`\${file.name} dépasse la taille maximale autorisée.\`;
      }
      return \`Le téléversement de \${file.name} a échoué.\`;
    };
    const handleUpload = (file: File) => {
      return new Promise<void>((resolve, reject) => {
        if (count.current % 2 === 0) {
          setTimeout(() => {
            reject(new Error("FILE_TOO_LARGE"));
            console.log("File not uploaded:", file);
          }, 5000);
        } else {
          setTimeout(() => {
            resolve();
            console.log("File not uploaded:", file);
          }, 5000);
        }
        count.current += 1;
      });
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
    };
    return <FileUpload {...args} onUpload={handleUpload} uploadErrorMessage={getUploadErrorMessage} onChange={handleChange} onRemovingFile={handleRemovingFile} />;
  }
}`,...(me=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,he,Fe;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(Fe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:Fe.source}}};var ve,xe,Ee;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(Ee=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Se,be,Re;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(Re=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var _e,je,Le;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Le=(je=J.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var we,Ie,Te;Q.parameters={...Q.parameters,docs:{...(we=Q.parameters)==null?void 0:we.docs,source:{originalSource:`{
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
}`,...(Te=(Ie=Q.parameters)==null?void 0:Ie.docs)==null?void 0:Te.source}}};const ds=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{Q as Async,H as CompactSpacing,E as Default,k as Disabled,J as MaxSizeExceeded,P as MultipleFiles,G as WithError,B as WithoutLabel,ds as __namedExportsOrder,us as default};
