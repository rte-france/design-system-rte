import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as ae}from"./id.utils-DsO5Uws7.js";import{A as Me,L as Ne}from"./Label-BYbC9qee.js";import{B as $e}from"./Button-kS01vuC-.js";import{g as Oe}from"./string.utils-BTbePzEe.js";import{I as le}from"./Icon-VewZnR13.js";import{I as De}from"./IconButton-CqYdVntE.js";import{L as qe}from"./Loader-WDdpk2Jd.js";import{T as We}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Bi6533Gh.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ne={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},Ke=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,Ve=s=>{const n=s.lastIndexOf("."),o=n!==-1?s.substring(n):"";return{baseName:n!==-1?s.substring(0,n):s,fileType:o}},_={"rte-file-upload-file-container":"_rte-file-upload-file-container_ay9xz_1","rte-file-upload-file":"_rte-file-upload-file_ay9xz_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_ay9xz_22","rte-file-upload-file-info":"_rte-file-upload-file-info_ay9xz_29","rte-file-upload-file-name":"_rte-file-upload-file-name_ay9xz_38","rte-file-upload-file-size":"_rte-file-upload-file-size_ay9xz_60","sr-only":"_sr-only_ay9xz_78"},ze=({file:s,removeFile:n,isError:o,errorMessage:d,compact:c,isLoading:u,isRemoving:p})=>{const a=r.useRef(null),f=r.useRef(null),h=r.useRef(null),j=r.useRef(null),T=r.useRef(null),A=r.useRef(ae()).current,[ee,se]=r.useState(s.name),[y,K]=r.useState(!1),M=r.useCallback(l=>{const F=N(),m="...",{baseName:g,fileType:v}=Ve(l),L=`${m}${v}`;if(F<=0)return L;{const V=a.current;if(V){const S=Oe(V);if(S(l)<=F)return l;const O=F-S(m)-S(v);if(O<=0)return L;let w=0,D=g.length;for(;w<D;){const U=Math.ceil((w+D)/2),{startStr:te,endStr:re}=$(U,g);S(te)+S(re)<=O?w=U:D=U-1}if(w===0)return L;const k=Math.ceil(w/2),z=Math.floor(w/2),q=k>0?g.substring(0,k):"",W=z>0?g.substring(g.length-z):"";return`${q}${m}${W}${v}`}else return l}},[]),N=()=>{const l=a.current,F=j.current,m=T.current;if(!l||!F||!m)return 0;{const g=parseFloat(window.getComputedStyle(m).gap)||0;return m.offsetWidth-F.offsetWidth-g}},$=(l,F)=>{const m=Math.ceil(l/2),g=Math.floor(l/2),v=m>0?F.substring(0,m):"",L=g>0?F.substring(F.length-g):"";return{startStr:v,endStr:L}};return r.useEffect(()=>{const l=M(s.name);K(l!==s.name),se(l)},[s,M]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:_["rte-file-upload-file-container"],"data-is-removing":p,children:[e.jsxs("div",{className:_["rte-file-upload-file"],children:[e.jsx("div",{className:_["rte-file-upload-file-icon"],ref:h,"aria-live":"polite","aria-atomic":"true",children:u?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:_["sr-only"],children:[ne.LOADING," : ",s.name]}),e.jsx(qe,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:o?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:_["sr-only"],children:[ne.ERROR," : ",s.name]}),e.jsx(le,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:_["sr-only"],children:[ne.SUCCESS," : ",s.name]}),e.jsx(le,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)"})]})})}),e.jsxs("div",{ref:T,className:_["rte-file-upload-file-info"],children:[y?e.jsx(We,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:a,className:_["rte-file-upload-file-name"],"data-is-compact":c,children:ee})}):e.jsx("span",{ref:a,className:_["rte-file-upload-file-name"],"data-is-compact":c,children:s.name}),e.jsx("span",{ref:j,className:_["rte-file-upload-file-size"],"data-is-compact":c,children:Ke(s.size)})]}),e.jsx(De,{ref:f,name:"close",variant:"neutral",onClick:n,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name,"aria-describedby":d?A:void 0})]}),d&&e.jsx("div",{role:"alert","aria-live":"assertive",children:e.jsx(Me,{id:A,label:d,appearance:"error"})})]})})};ze.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const G={"rte-file-upload-input":"_rte-file-upload-input_ujylx_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_ujylx_31","sr-only":"_sr-only_ujylx_35"},C=({id:s,compactSpacing:n,label:o,required:d=!1,showLabelRequirement:c=!1,disabled:u=!1,assistiveTextLabel:p,assistiveAppearance:a="description",showAssistiveText:f=!0,showAssistiveIcon:h,assistiveTextLink:j,isError:T,multiple:A=!1,buttonLabel:ee,accept:se,onChange:y,onUpload:K,uploadErrorMessage:M="Erreur lors du téléchargement du fichier.",errorFilesMap:N=[],onRemovingFile:$})=>{var ie;const l=s??ae(),F=ae(),m=r.useRef(null),g=r.useRef(null),[v,L]=r.useState(null),[V,S]=r.useState(new Set),[O,w]=r.useState(new Set),[D,k]=r.useState(""),z=r.useRef(new Map),[q,W]=r.useState(new Map);r.useEffect(()=>()=>{z.current.forEach(t=>clearTimeout(t))},[]);const U=f&&p&&a&&N.length===0&&q.size===0,te=async t=>{const i=Array.from(t.target.files||[]);y==null||y(i),A?L(x=>x?[...x,...i]:i):(L(i),W(new Map)),K&&await Promise.all(i.map(x=>Ae(x)))},re=t=>{t.stopPropagation();const i=document.getElementById(l);i&&i.click()},Ue=t=>{var i;if(v&&!O.has(t)){const x=v.indexOf(t);if(x!==-1){const R=v.filter((I,b)=>b!==x);w(I=>new Set(I).add(t)),k(`${t.name} a été supprimé. ${R.length} fichier${R.length>1?"s":""} restant${R.length>1?"s":""}.`),g.current&&(g.current.value=""),(i=m.current)==null||i.focus();const P=setTimeout(()=>{L(R),w(I=>{const b=new Set(I);return b.delete(t),b}),S(I=>{const b=new Set(I);return b.delete(t),b}),W(I=>{const b=new Map(I);return b.delete(t),b}),$==null||$(t),y==null||y(R),z.current.delete(t)},300);z.current.set(t,P)}}},Ae=t=>(S(i=>new Set(i).add(t)),K(t).then(()=>{S(i=>{const x=new Set(i);return x.delete(t),x})}).catch(i=>{S(R=>{const P=new Set(R);return P.delete(t),P});const x=typeof M=="function"?M(t,i):M;W(R=>new Map(R).set(t,x))}));return e.jsxs("div",{className:G["rte-file-upload"],children:[e.jsx("input",{ref:g,type:"file",multiple:A,id:l,className:G["rte-file-upload-input"],onChange:te,"aria-labelledby":o?F:`${l}-button`,"aria-describedby":U?`${l}-assistive-text`:void 0,disabled:u,accept:se}),o&&e.jsx(Ne,{htmlFor:l,id:F,label:o,required:d,showLabelRequirement:c}),U&&e.jsx(Me,{id:`${l}-assistive-text`,label:p,appearance:T?"error":a,showIcon:h,href:j}),e.jsx($e,{id:`${l}-button`,disabled:u,variant:"primary",label:ee,onClick:re,icon:"upload",iconPosition:"left",ref:m,size:n?"s":"m",className:n?G["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((ie=m.current)==null?void 0:ie.offsetWidth)??void 0},children:v==null?void 0:v.map((t,i)=>e.jsx(ze,{file:t,removeFile:()=>Ue(t),isLoading:V.has(t),isRemoving:O.has(t),isError:N[i]!==void 0||q.has(t),errorMessage:q.get(t)??N[i],compact:n},t.lastModified+i))}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:G["sr-only"],children:D})]})};C.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},uploadErrorMessage:{defaultValue:{value:'"Erreur lors du téléchargement du fichier."',computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ms={title:"Composants/FileUpload",component:C,tags:["autodocs"]},E={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,n]=r.useState([]),o=c=>{n(c)},d=c=>{n(u=>u.filter(p=>p!==c))};return e.jsx(C,{...s,onChange:o,onRemovingFile:d})}},B={args:{...E.args,id:"file-upload-2",disabled:!0}},H={args:{...E.args,id:"file-upload-3",multiple:!0},render:s=>{const[,n]=r.useState([]),o=a=>{n(a)},d=r.useRef(0),c=(a,f)=>f instanceof Error&&f.message==="FILE_TOO_LARGE"?`${a.name} dépasse la taille maximale autorisée.`:`Le téléversement de ${a.name} a échoué.`,u=a=>new Promise((f,h)=>{d.current%2===0?setTimeout(()=>{h(new Error("FILE_TOO_LARGE")),console.log("File not uploaded:",a)},5e3):setTimeout(()=>{f(),console.log("File not uploaded:",a)},5e3),d.current+=1}),p=a=>{n(f=>f.filter(h=>h!==a))};return e.jsx(C,{...s,onUpload:u,uploadErrorMessage:c,onChange:o,onRemovingFile:p})}},J={args:{...E.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[n,o]=r.useState([]),d=u=>{o(u)},c=u=>{o(p=>p.filter(a=>a!==u))};return e.jsx(C,{...s,onChange:d,onRemovingFile:c,isError:n.length===0,showAssistiveText:n.length===0})}},Q={args:{...E.args,id:"file-upload-5",showLabel:!1}},X={args:{...E.args,id:"file-upload-6",compactSpacing:!0}},Y={args:{...E.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[n,o]=r.useState(void 0),[,d]=r.useState([]),[c,u]=r.useState([]),p=f=>{if(d(f),f.some(h=>h.size>1*1024)){o("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const h=f.map(j=>j.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");o("Un ou plusieurs fichiers dépassent la limite de 1Ko."),u(h)}},a=f=>{d(h=>{const j=h.filter(T=>T!==f);return u(j.filter(T=>T.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),j})};return e.jsx(C,{...s,onChange:p,isError:!!n,assistiveTextLabel:n,errorFilesMap:c,onRemovingFile:a})}},Z={args:{...E.args},render:s=>{const[,n]=r.useState([]),o=c=>new Promise(u=>{n(p=>[...p,c]),setTimeout(()=>{u()},5e3)}),d=c=>{n(u=>u.filter(p=>p!==c))};return e.jsx(C,{...s,multiple:!0,onUpload:o,onRemovingFile:d})}};var oe,ce,ue;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ue=(ce=E.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,fe;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(fe=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var me,ge,he;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Fe,ve,xe;J.parameters={...J.parameters,docs:{...(Fe=J.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(xe=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Ee,Se,Re;Q.parameters={...Q.parameters,docs:{...(Ee=Q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(Re=(Se=Q.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var be,_e,je;X.parameters={...X.parameters,docs:{...(be=X.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(je=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:je.source}}};var Le,we,Te;Y.parameters={...Y.parameters,docs:{...(Le=Y.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
}`,...(Te=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var ye,Ie,Ce;Z.parameters={...Z.parameters,docs:{...(ye=Z.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(Ce=(Ie=Z.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};const gs=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{Z as Async,X as CompactSpacing,E as Default,B as Disabled,Y as MaxSizeExceeded,H as MultipleFiles,J as WithError,Q as WithoutLabel,gs as __namedExportsOrder,ms as default};
