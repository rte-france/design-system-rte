import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as Q}from"./id.utils-DsO5Uws7.js";import{A as Ee,L as je}from"./Label-B-uQrS7p.js";import{B as Le}from"./Button-kS01vuC-.js";import{g as Ie}from"./string.utils-BTbePzEe.js";import{I as X}from"./Icon-VewZnR13.js";import{I as we}from"./IconButton-CqYdVntE.js";import{L as Ce}from"./Loader-WDdpk2Jd.js";import{T as Te}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-Bi6533Gh.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const $={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},Ne=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,ze=s=>{const t=s.lastIndexOf("."),l=t!==-1?s.substring(t):"";return{baseName:t!==-1?s.substring(0,t):s,fileType:l}},S={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},Re=({file:s,removeFile:t,isError:l,errorMessage:f,compact:o,isLoading:c})=>{const d=i.useRef(null),L=i.useRef(null),b=i.useRef(null),x=i.useRef(null),E=i.useRef(null),[I,B]=i.useState(s.name),[P,G]=i.useState(!1),R=i.useCallback(u=>{const a=A(),p="...",{baseName:m,fileType:F}=ze(u),g=`${p}${F}`;if(a<=0)return g;{const T=d.current;if(T){const w=Ie(T);if(w(u)<=a)return u;const N=a-w(p)-w(F);if(N<=0)return g;let _=0,z=m.length;for(;_<z;){const r=Math.ceil((_+z)/2),{startStr:n,endStr:j}=h(r,m);w(n)+w(j)<=N?_=r:z=r-1}if(_===0)return g;const U=Math.ceil(_/2),y=Math.floor(_/2),H=U>0?m.substring(0,U):"",D=y>0?m.substring(m.length-y):"";return`${H}${p}${D}${F}`}else return u}},[]),A=()=>{const u=d.current,a=x.current,p=E.current;if(!u||!a||!p)return 0;{const m=parseFloat(window.getComputedStyle(p).gap)||0;return p.offsetWidth-a.offsetWidth-m}},h=(u,a)=>{const p=Math.ceil(u/2),m=Math.floor(u/2),F=p>0?a.substring(0,p):"",g=m>0?a.substring(a.length-m):"";return{startStr:F,endStr:g}};return i.useEffect(()=>{const u=R(s.name);G(u!==s.name),B(u)},[s,R]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:S["rte-file-upload-file-container"],children:[e.jsxs("div",{className:S["rte-file-upload-file"],children:[e.jsx("div",{className:S["rte-file-upload-file-icon"],ref:b,"aria-live":"polite","aria-atomic":"true",children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:S["sr-only"],children:$.LOADING}),e.jsx(Ce,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:l?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:S["sr-only"],children:$.ERROR}),e.jsx(X,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:S["sr-only"],children:$.SUCCESS}),e.jsx(X,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)","aria-label":$.SUCCESS})]})})}),e.jsxs("div",{ref:E,className:S["rte-file-upload-file-info"],children:[P?e.jsx(Te,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:d,className:S["rte-file-upload-file-name"],"data-is-compact":o,children:I})}):e.jsx("span",{ref:d,className:S["rte-file-upload-file-name"],"data-is-compact":o,children:s.name}),e.jsx("span",{ref:x,className:S["rte-file-upload-file-size"],"data-is-compact":o,children:Ne(s.size)})]}),e.jsx(we,{ref:L,name:"close",variant:"neutral",onClick:t,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name})]}),f&&e.jsx(Ee,{label:f,appearance:"error"})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const J={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},C=({id:s,compactSpacing:t,label:l,required:f=!1,showLabelRequirement:o=!1,disabled:c=!1,assistiveTextLabel:d,assistiveAppearance:L="description",showAssistiveText:b=!0,showAssistiveIcon:x,assistiveTextLink:E,isError:I,multiple:B=!1,buttonLabel:P,accept:G,onChange:R,onUpload:A,errorFilesMap:h=[],onRemovingFile:u})=>{var D;const a=s??Q(),p=Q(),m=i.useRef(null),F=i.useRef(null),[g,T]=i.useState(null),[w,N]=i.useState(new Set),_=b&&d&&L&&(h==null?void 0:h.length)===0,z=r=>{const n=Array.from(r.target.files||[]);R==null||R(n),T(n),A&&n.forEach(j=>{H(j)})},U=r=>{r.stopPropagation();const n=document.getElementById(a);n&&n.click()},y=r=>{if(g){const n=g.indexOf(r);if(n!==-1){const j=g.filter((Ae,_e)=>_e!==n);T(j),u==null||u(r),R==null||R(j),F.current&&(F.current.value="",F.current.focus())}}},H=r=>{N(n=>new Set(n).add(r)),A(r).finally(()=>{N(n=>{const j=new Set(n);return j.delete(r),j})})};return e.jsxs("div",{className:J["rte-file-upload"],children:[e.jsx("input",{ref:F,type:"file",multiple:B,id:a,className:J["rte-file-upload-input"],onChange:z,"aria-labelledby":l?p:`${a}-button`,"aria-describedby":_?`${a}-assistive-text`:void 0,disabled:c,accept:G}),l&&e.jsx(je,{htmlFor:a,id:p,label:l,required:f,showLabelRequirement:o}),_&&e.jsx(Ee,{id:`${a}-assistive-text`,label:d,appearance:I?"error":L,showIcon:x,href:E}),e.jsx(Le,{id:`${a}-button`,disabled:c,variant:"primary",label:P,onClick:U,icon:"upload",iconPosition:"left",ref:m,size:t?"s":"m",className:t?J["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((D=m.current)==null?void 0:D.offsetWidth)??void 0},children:g==null?void 0:g.map((r,n)=>e.jsx(Re,{file:r,removeFile:()=>y(r),isLoading:w.has(r),isError:(h==null?void 0:h[n])!==void 0,errorMessage:h==null?void 0:h[n],compact:t},r.lastModified+n))})]})};C.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ns={title:"Composants/FileUpload",component:C,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,t]=i.useState([]),l=o=>{t(o)},f=o=>{t(c=>c.filter(d=>d!==o))};return e.jsx(C,{...s,onChange:l,onRemovingFile:f})}},W={args:{...v.args,id:"file-upload-2",disabled:!0}},q={args:{...v.args,id:"file-upload-3",multiple:!0}},K={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[t,l]=i.useState([]),f=c=>{l(c)},o=c=>{l(d=>d.filter(L=>L!==c))};return e.jsx(C,{...s,onChange:f,onRemovingFile:o,isError:t.length===0,showAssistiveText:t.length===0})}},M={args:{...v.args,id:"file-upload-5",showLabel:!1}},O={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},V={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[t,l]=i.useState(void 0),[,f]=i.useState([]),[o,c]=i.useState([]),d=b=>{if(f(b),b.some(x=>x.size>1*1024)){l("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=b.map(E=>E.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");l("Un ou plusieurs fichiers dépassent la limite de 1Ko."),c(x)}},L=b=>{f(x=>{const E=x.filter(I=>I!==b);return c(E.filter(I=>I.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),E})};return e.jsx(C,{...s,onChange:d,isError:!!t,assistiveTextLabel:t,errorFilesMap:o,onRemovingFile:L})}},k={args:{...v.args},render:s=>{const[,t]=i.useState([]),l=o=>new Promise(c=>{t(d=>[...d,o]),setTimeout(()=>{c()},5e3)}),f=o=>{t(c=>c.filter(d=>d!==o))};return e.jsx(C,{...s,multiple:!0,onUpload:l,onRemovingFile:f})}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;W.parameters={...W.parameters,docs:{...(se=W.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(te=W.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ie,ae;q.parameters={...q.parameters,docs:{...(ne=q.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ae=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var le,oe,ce;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(oe=K.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ue,fe;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(fe=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(ge=(me=O.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,Fe,ve;V.parameters={...V.parameters,docs:{...(he=V.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var xe,Se,be;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(be=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const is=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{k as Async,O as CompactSpacing,v as Default,W as Disabled,V as MaxSizeExceeded,q as MultipleFiles,K as WithError,M as WithoutLabel,is as __namedExportsOrder,ns as default};
