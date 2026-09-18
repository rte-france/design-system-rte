import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as se}from"./id.utils-DsO5Uws7.js";import{A as je,L as Ie}from"./Label-B-uQrS7p.js";import{B as Te}from"./Button-kS01vuC-.js";import{g as Ue}from"./string.utils-BTbePzEe.js";import{I as re}from"./Icon-VewZnR13.js";import{I as Me}from"./IconButton-CqYdVntE.js";import{L as Ae}from"./Loader-WDdpk2Jd.js";import{T as Ne}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Bi6533Gh.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const W={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},ze=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,ye=s=>{const r=s.lastIndexOf("."),i=r!==-1?s.substring(r):"";return{baseName:r!==-1?s.substring(0,r):s,fileType:i}},R={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},Ce=({file:s,removeFile:r,isError:i,errorMessage:p,compact:l,isLoading:o})=>{const c=n.useRef(null),d=n.useRef(null),f=n.useRef(null),g=n.useRef(null),_=n.useRef(null),[T,$]=n.useState(s.name),[J,Q]=n.useState(!1),L=n.useCallback(m=>{const h=O(),u="...",{baseName:F,fileType:w}=ye(m),S=`${u}${w}`;if(h<=0)return S;{const j=c.current;if(j){const C=Ue(j);if(C(m)<=h)return m;const D=h-C(u)-C(w);if(D<=0)return S;let x=0,U=F.length;for(;x<U;){const y=Math.ceil((x+U)/2),{startStr:Z,endStr:q}=N(y,F);C(Z)+C(q)<=D?x=y:U=y-1}if(x===0)return S;const A=Math.ceil(x/2),z=Math.floor(x/2),X=A>0?F.substring(0,A):"",Y=z>0?F.substring(F.length-z):"";return`${X}${u}${Y}${w}`}else return m}},[]),O=()=>{const m=c.current,h=g.current,u=_.current;if(!m||!h||!u)return 0;{const F=parseFloat(window.getComputedStyle(u).gap)||0;return u.offsetWidth-h.offsetWidth-F}},N=(m,h)=>{const u=Math.ceil(m/2),F=Math.floor(m/2),w=u>0?h.substring(0,u):"",S=F>0?h.substring(h.length-F):"";return{startStr:w,endStr:S}};return n.useEffect(()=>{const m=L(s.name);Q(m!==s.name),$(m)},[s,L]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:R["rte-file-upload-file-container"],children:[e.jsxs("div",{className:R["rte-file-upload-file"],children:[e.jsx("div",{className:R["rte-file-upload-file-icon"],ref:f,"aria-live":"polite","aria-atomic":"true",children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:R["sr-only"],children:W.LOADING}),e.jsx(Ae,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:R["sr-only"],children:W.ERROR}),e.jsx(re,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:R["sr-only"],children:W.SUCCESS}),e.jsx(re,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)","aria-label":W.SUCCESS})]})})}),e.jsxs("div",{ref:_,className:R["rte-file-upload-file-info"],children:[J?e.jsx(Ne,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:c,className:R["rte-file-upload-file-name"],"data-is-compact":l,children:T})}):e.jsx("span",{ref:c,className:R["rte-file-upload-file-name"],"data-is-compact":l,children:s.name}),e.jsx("span",{ref:g,className:R["rte-file-upload-file-size"],"data-is-compact":l,children:ze(s.size)})]}),e.jsx(Me,{ref:d,name:"close",variant:"neutral",onClick:r,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name})]}),p&&e.jsx(je,{label:p,appearance:"error"})]})})};Ce.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const ee={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},M=({id:s,compactSpacing:r,label:i,required:p=!1,showLabelRequirement:l=!1,disabled:o=!1,assistiveTextLabel:c,assistiveAppearance:d="description",showAssistiveText:f=!0,showAssistiveIcon:g,assistiveTextLink:_,isError:T,multiple:$=!1,buttonLabel:J,accept:Q,onChange:L,onUpload:O,uploadErrorMessage:N="Erreur lors du téléchargement du fichier.",errorFilesMap:m=[],onRemovingFile:h})=>{var q;const u=s??se(),F=se(),w=n.useRef(null),S=n.useRef(null),[j,C]=n.useState(null),[D,x]=n.useState(new Set),[U,A]=n.useState(new Map),z=f&&c&&d&&m.length===0&&U.size===0,X=async t=>{const a=Array.from(t.target.files||[]);L==null||L(a),$?C(v=>v?[...v,...a]:a):(C(a),A(new Map)),O&&await Promise.all(a.map(v=>Z(v)))},Y=t=>{t.stopPropagation();const a=document.getElementById(u);a&&a.click()},y=t=>{if(j){const a=j.indexOf(t);if(a!==-1){const v=j.filter((I,b)=>b!==a);C(v),x(I=>{const b=new Set(I);return b.delete(t),b}),A(I=>{const b=new Map(I);return b.delete(t),b}),h==null||h(t),L==null||L(v),S.current&&(S.current.value="",S.current.focus())}}},Z=t=>(x(a=>new Set(a).add(t)),O(t).then(()=>{x(a=>{const v=new Set(a);return v.delete(t),v})}).catch(a=>{x(I=>{const b=new Set(I);return b.delete(t),b});const v=typeof N=="function"?N(t,a):N;A(I=>new Map(I).set(t,v))}));return e.jsxs("div",{className:ee["rte-file-upload"],children:[e.jsx("input",{ref:S,type:"file",multiple:$,id:u,className:ee["rte-file-upload-input"],onChange:X,"aria-labelledby":i?F:`${u}-button`,"aria-describedby":z?`${u}-assistive-text`:void 0,disabled:o,accept:Q}),i&&e.jsx(Ie,{htmlFor:u,id:F,label:i,required:p,showLabelRequirement:l}),z&&e.jsx(je,{id:`${u}-assistive-text`,label:c,appearance:T?"error":d,showIcon:g,href:_}),e.jsx(Te,{id:`${u}-button`,disabled:o,variant:"primary",label:J,onClick:Y,icon:"upload",iconPosition:"left",ref:w,size:r?"s":"m",className:r?ee["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((q=w.current)==null?void 0:q.offsetWidth)??void 0},children:j==null?void 0:j.map((t,a)=>e.jsx(Ce,{file:t,removeFile:()=>y(t),isLoading:D.has(t),isError:m[a]!==void 0||U.has(t),errorMessage:U.get(t)??m[a],compact:r},t.lastModified+a))})]})};M.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},uploadErrorMessage:{defaultValue:{value:'"Erreur lors du téléchargement du fichier."',computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ls={title:"Composants/FileUpload",component:M,tags:["autodocs"]},E={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,r]=n.useState([]),i=l=>{r(l)},p=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(M,{...s,onChange:i,onRemovingFile:p})}},K={args:{...E.args,id:"file-upload-2",disabled:!0}},V={args:{...E.args,id:"file-upload-3",multiple:!0},render:s=>{const[,r]=n.useState([]),i=d=>{r(d)},p=n.useRef(0),l=(d,f)=>f instanceof Error&&f.message==="FILE_TOO_LARGE"?`${d.name} dépasse la taille maximale autorisée.`:`Le téléversement de ${d.name} a échoué.`,o=d=>new Promise((f,g)=>{p.current%2===0?setTimeout(()=>{g(new Error("FILE_TOO_LARGE")),console.log("File not uploaded:",d)},5e3):setTimeout(()=>{f(),console.log("File not uploaded:",d)},5e3),p.current+=1}),c=d=>{r(f=>f.filter(g=>g!==d))};return e.jsx(M,{...s,onUpload:o,uploadErrorMessage:l,onChange:i,onRemovingFile:c})}},k={args:{...E.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[r,i]=n.useState([]),p=o=>{i(o)},l=o=>{i(c=>c.filter(d=>d!==o))};return e.jsx(M,{...s,onChange:p,onRemovingFile:l,isError:r.length===0,showAssistiveText:r.length===0})}},P={args:{...E.args,id:"file-upload-5",showLabel:!1}},G={args:{...E.args,id:"file-upload-6",compactSpacing:!0}},B={args:{...E.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[r,i]=n.useState(void 0),[,p]=n.useState([]),[l,o]=n.useState([]),c=f=>{if(p(f),f.some(g=>g.size>1*1024)){i("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const g=f.map(_=>_.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");i("Un ou plusieurs fichiers dépassent la limite de 1Ko."),o(g)}},d=f=>{p(g=>{const _=g.filter(T=>T!==f);return o(_.filter(T=>T.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),_})};return e.jsx(M,{...s,onChange:c,isError:!!r,assistiveTextLabel:r,errorFilesMap:l,onRemovingFile:d})}},H={args:{...E.args},render:s=>{const[,r]=n.useState([]),i=l=>new Promise(o=>{r(c=>[...c,l]),setTimeout(()=>{o()},5e3)}),p=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(M,{...s,multiple:!0,onUpload:i,onRemovingFile:p})}};var te,ne,ae;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,le,oe;K.parameters={...K.parameters,docs:{...(ie=K.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(oe=(le=K.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=V.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,fe,me;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,he,Fe;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(Fe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:Fe.source}}};var ve,xe,Ee;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(Ee=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Se,be,Re;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var _e,Le,we;H.parameters={...H.parameters,docs:{...(_e=H.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(we=(Le=H.parameters)==null?void 0:Le.docs)==null?void 0:we.source}}};const os=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{H as Async,G as CompactSpacing,E as Default,K as Disabled,B as MaxSizeExceeded,V as MultipleFiles,k as WithError,P as WithoutLabel,os as __namedExportsOrder,ls as default};
