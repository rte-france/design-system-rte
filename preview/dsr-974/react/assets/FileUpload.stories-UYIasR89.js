import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as se}from"./id.utils-DsO5Uws7.js";import{A as je,L as Ce}from"./Label-gRsEi5-3.js";import{B as Te}from"./Button-kS01vuC-.js";import{g as Ue}from"./string.utils-BTbePzEe.js";import{I as re}from"./Icon-VewZnR13.js";import{I as Me}from"./IconButton-CqYdVntE.js";import{L as Ae}from"./Loader-WDdpk2Jd.js";import{T as Ne}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-COG-NaCW.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const K={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},ze=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,ye=s=>{const r=s.lastIndexOf("."),i=r!==-1?s.substring(r):"";return{baseName:r!==-1?s.substring(0,r):s,fileType:i}},_={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},Ie=({file:s,removeFile:r,isError:i,errorMessage:d,compact:l,isLoading:o})=>{const c=n.useRef(null),u=n.useRef(null),f=n.useRef(null),g=n.useRef(null),L=n.useRef(null),j=n.useRef(se()).current,[D,Q]=n.useState(s.name),[X,I]=n.useState(!1),N=n.useCallback(m=>{const p=z(),h="...",{baseName:F,fileType:E}=ye(m),v=`${h}${E}`;if(p<=0)return v;{const A=c.current;if(A){const C=Ue(A);if(C(m)<=p)return m;const T=p-C(h)-C(E);if(T<=0)return v;let b=0,U=F.length;for(;b<U;){const O=Math.ceil((b+U)/2),{startStr:W,endStr:t}=y(O,F);C(W)+C(t)<=T?b=O:U=O-1}if(b===0)return v;const $=Math.ceil(b/2),q=Math.floor(b/2),Y=$>0?F.substring(0,$):"",Z=q>0?F.substring(F.length-q):"";return`${Y}${h}${Z}${E}`}else return m}},[]),z=()=>{const m=c.current,p=g.current,h=L.current;if(!m||!p||!h)return 0;{const F=parseFloat(window.getComputedStyle(h).gap)||0;return h.offsetWidth-p.offsetWidth-F}},y=(m,p)=>{const h=Math.ceil(m/2),F=Math.floor(m/2),E=h>0?p.substring(0,h):"",v=F>0?p.substring(p.length-F):"";return{startStr:E,endStr:v}};return n.useEffect(()=>{const m=N(s.name);I(m!==s.name),Q(m)},[s,N]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:_["rte-file-upload-file-container"],children:[e.jsxs("div",{className:_["rte-file-upload-file"],children:[e.jsx("div",{className:_["rte-file-upload-file-icon"],ref:f,"aria-live":"polite","aria-atomic":"true",children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:_["sr-only"],children:K.LOADING}),e.jsx(Ae,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:i?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:_["sr-only"],children:K.ERROR}),e.jsx(re,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:_["sr-only"],children:K.SUCCESS}),e.jsx(re,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)","aria-label":K.SUCCESS})]})})}),e.jsxs("div",{ref:L,className:_["rte-file-upload-file-info"],children:[X?e.jsx(Ne,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:c,className:_["rte-file-upload-file-name"],"data-is-compact":l,children:D})}):e.jsx("span",{ref:c,className:_["rte-file-upload-file-name"],"data-is-compact":l,children:s.name}),e.jsx("span",{ref:g,className:_["rte-file-upload-file-size"],"data-is-compact":l,children:ze(s.size)})]}),e.jsx(Me,{ref:u,name:"close",variant:"neutral",onClick:r,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name,"aria-describedby":d?j:void 0})]}),d&&e.jsx(je,{id:j,label:d,appearance:"error"})]})})};Ie.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const ee={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},M=({id:s,compactSpacing:r,label:i,required:d=!1,showLabelRequirement:l=!1,disabled:o=!1,assistiveTextLabel:c,assistiveAppearance:u="description",showAssistiveText:f=!0,showAssistiveIcon:g,assistiveTextLink:L,isError:j,multiple:D=!1,buttonLabel:Q,accept:X,onChange:I,onUpload:N,uploadErrorMessage:z="Erreur lors du téléchargement du fichier.",errorFilesMap:y=[],onRemovingFile:m})=>{var W;const p=s??se(),h=se(),F=n.useRef(null),E=n.useRef(null),[v,A]=n.useState(null),[C,T]=n.useState(new Set),[b,U]=n.useState(new Map),$=f&&c&&u&&y.length===0&&b.size===0,q=async t=>{const a=Array.from(t.target.files||[]);I==null||I(a),D?A(x=>x?[...x,...a]:a):(A(a),U(new Map)),N&&await Promise.all(a.map(x=>O(x)))},Y=t=>{t.stopPropagation();const a=document.getElementById(p);a&&a.click()},Z=t=>{if(v){const a=v.indexOf(t);if(a!==-1){const x=v.filter((w,R)=>R!==a);A(x),T(w=>{const R=new Set(w);return R.delete(t),R}),U(w=>{const R=new Map(w);return R.delete(t),R}),m==null||m(t),I==null||I(x),E.current&&(E.current.value="",E.current.focus())}}},O=t=>(T(a=>new Set(a).add(t)),N(t).then(()=>{T(a=>{const x=new Set(a);return x.delete(t),x})}).catch(a=>{T(w=>{const R=new Set(w);return R.delete(t),R});const x=typeof z=="function"?z(t,a):z;U(w=>new Map(w).set(t,x))}));return e.jsxs("div",{className:ee["rte-file-upload"],children:[e.jsx("input",{ref:E,type:"file",multiple:D,id:p,className:ee["rte-file-upload-input"],onChange:q,"aria-labelledby":i?h:`${p}-button`,"aria-describedby":$?`${p}-assistive-text`:void 0,disabled:o,accept:X}),i&&e.jsx(Ce,{htmlFor:p,id:h,label:i,required:d,showLabelRequirement:l}),$&&e.jsx(je,{id:`${p}-assistive-text`,label:c,appearance:j?"error":u,showIcon:g,href:L}),e.jsx(Te,{id:`${p}-button`,disabled:o,variant:"primary",label:Q,onClick:Y,icon:"upload",iconPosition:"left",ref:F,size:r?"s":"m",className:r?ee["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((W=F.current)==null?void 0:W.offsetWidth)??void 0},children:v==null?void 0:v.map((t,a)=>e.jsx(Ie,{file:t,removeFile:()=>Z(t),isLoading:C.has(t),isError:y[a]!==void 0||b.has(t),errorMessage:b.get(t)??y[a],compact:r},t.lastModified+a))})]})};M.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},uploadErrorMessage:{defaultValue:{value:'"Erreur lors du téléchargement du fichier."',computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ls={title:"Composants/FileUpload",component:M,tags:["autodocs"]},S={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,r]=n.useState([]),i=l=>{r(l)},d=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(M,{...s,onChange:i,onRemovingFile:d})}},V={args:{...S.args,id:"file-upload-2",disabled:!0}},k={args:{...S.args,id:"file-upload-3",multiple:!0},render:s=>{const[,r]=n.useState([]),i=u=>{r(u)},d=n.useRef(0),l=(u,f)=>f instanceof Error&&f.message==="FILE_TOO_LARGE"?`${u.name} dépasse la taille maximale autorisée.`:`Le téléversement de ${u.name} a échoué.`,o=u=>new Promise((f,g)=>{d.current%2===0?setTimeout(()=>{g(new Error("FILE_TOO_LARGE")),console.log("File not uploaded:",u)},5e3):setTimeout(()=>{f(),console.log("File not uploaded:",u)},5e3),d.current+=1}),c=u=>{r(f=>f.filter(g=>g!==u))};return e.jsx(M,{...s,onUpload:o,uploadErrorMessage:l,onChange:i,onRemovingFile:c})}},P={args:{...S.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[r,i]=n.useState([]),d=o=>{i(o)},l=o=>{i(c=>c.filter(u=>u!==o))};return e.jsx(M,{...s,onChange:d,onRemovingFile:l,isError:r.length===0,showAssistiveText:r.length===0})}},G={args:{...S.args,id:"file-upload-5",showLabel:!1}},B={args:{...S.args,id:"file-upload-6",compactSpacing:!0}},H={args:{...S.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[r,i]=n.useState(void 0),[,d]=n.useState([]),[l,o]=n.useState([]),c=f=>{if(d(f),f.some(g=>g.size>1*1024)){i("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const g=f.map(L=>L.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");i("Un ou plusieurs fichiers dépassent la limite de 1Ko."),o(g)}},u=f=>{d(g=>{const L=g.filter(j=>j!==f);return o(L.filter(j=>j.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),L})};return e.jsx(M,{...s,onChange:c,isError:!!r,assistiveTextLabel:r,errorFilesMap:l,onRemovingFile:u})}},J={args:{...S.args},render:s=>{const[,r]=n.useState([]),i=l=>new Promise(o=>{r(c=>[...c,l]),setTimeout(()=>{o()},5e3)}),d=l=>{r(o=>o.filter(c=>c!==l))};return e.jsx(M,{...s,multiple:!0,onUpload:i,onRemovingFile:d})}};var te,ne,ae;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var ie,le,oe;V.parameters={...V.parameters,docs:{...(ie=V.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(oe=(le=V.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,ue;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,fe,me;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var ge,he,Fe;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(Fe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:Fe.source}}};var ve,xe,Ee;B.parameters={...B.parameters,docs:{...(ve=B.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(Ee=(xe=B.parameters)==null?void 0:xe.docs)==null?void 0:Ee.source}}};var Se,be,Re;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Re=(be=H.parameters)==null?void 0:be.docs)==null?void 0:Re.source}}};var _e,Le,we;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(we=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:we.source}}};const os=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{J as Async,B as CompactSpacing,S as Default,V as Disabled,H as MaxSizeExceeded,k as MultipleFiles,P as WithError,G as WithoutLabel,os as __namedExportsOrder,ls as default};
