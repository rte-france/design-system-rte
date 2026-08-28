import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as Q}from"./id.utils-DsO5Uws7.js";import{A as Ee,L as _e}from"./Label-Bgp-fFvQ.js";import{B as je}from"./Button-KJfdYR4G.js";import{g as Le}from"./string.utils-BTbePzEe.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as Ie}from"./IconButton-D7Ub3mhB.js";import{L as Te}from"./Loader-DUBwf6Qo.js";import{T as Ce}from"./Tooltip-CQZMCJle.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ze=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,Ne=e=>{const t=e.lastIndexOf("."),c=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:c}},I={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},we=({file:e,removeFile:t,isError:c,errorMessage:u,compact:n,isLoading:d})=>{const l=a.useRef(null),E=a.useRef(null),h=a.useRef(null),v=a.useRef(null),F=a.useRef(null),[_,B]=a.useState(e.name),[O,P]=a.useState(!1),N=a.useCallback(r=>{const f=w(),p="...",{baseName:m,fileType:x}=Ne(r),j=`${p}${x}`;if(f<=0)return j;{const S=l.current;if(S){const R=Le(S);if(R(r)<=f)return r;const A=f-R(p)-R(x);if(A<=0)return j;let b=0,z=m.length;for(;b<z;){const T=Math.ceil((b+z)/2),{startStr:o,endStr:i}=U(T,m);R(o)+R(i)<=A?b=T:z=T-1}if(b===0)return j;const q=Math.ceil(b/2),W=Math.floor(b/2),G=q>0?m.substring(0,q):"",H=W>0?m.substring(m.length-W):"";return`${G}${p}${H}${x}`}else return r}},[]),w=()=>{const r=l.current,f=v.current,p=F.current;if(!r||!f||!p)return 0;{const m=parseFloat(window.getComputedStyle(p).gap)||0;return p.offsetWidth-f.offsetWidth-m}},U=(r,f)=>{const p=Math.ceil(r/2),m=Math.floor(r/2),x=p>0?f.substring(0,p):"",j=m>0?f.substring(f.length-m):"";return{startStr:x,endStr:j}};return a.useEffect(()=>{const r=N(e.name);P(r!==e.name),B(r)},[e,N]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:I["rte-file-upload-file-container"],children:[s.jsxs("div",{className:I["rte-file-upload-file"],children:[s.jsx("div",{className:I["rte-file-upload-file-icon"],ref:h,children:d?s.jsx(Te,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:c?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:F,className:I["rte-file-upload-file-info"],children:[O?s.jsx(Ce,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:l,className:I["rte-file-upload-file-name"],"data-is-compact":n,children:_})}):s.jsx("span",{ref:l,className:I["rte-file-upload-file-name"],"data-is-compact":n,children:e.name}),s.jsx("span",{ref:v,className:I["rte-file-upload-file-size"],"data-is-compact":n,children:ze(e.size)})]}),s.jsx(Ie,{ref:E,name:"close",variant:"neutral",onClick:t,size:"m"})]}),u&&s.jsx(Ee,{label:u,appearance:"error"})]})})};we.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const J={"rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},C=({id:e,compactSpacing:t,label:c,showLabel:u=!0,required:n=!1,showLabelRequirement:d=!1,disabled:l=!1,assistiveTextLabel:E,assistiveAppearance:h="description",showAssistiveText:v=!0,showAssistiveIcon:F,assistiveTextLink:_,isError:B,multiple:O=!1,buttonLabel:P,accept:N,onChange:w,onUpload:U,errorFilesMap:r=[],onRemovingFile:f})=>{var T;const p=e??Q(),m=Q(),x=a.useRef(null),j=a.useRef(null),[S,R]=a.useState(null),[A,b]=a.useState(new Set),z=v&&E&&h&&(r==null?void 0:r.length)===0,q=o=>{const i=Array.from(o.target.files||[]);w==null||w(i),R(i),U&&i.forEach(L=>{H(L)})},W=o=>{o.stopPropagation();const i=document.getElementById(p);i&&i.click()},G=o=>{if(S){const i=S.indexOf(o);if(i!==-1){const L=S.filter((Ue,Re)=>Re!==i);R(L),f==null||f(o),w==null||w(L)}}},H=o=>{b(i=>new Set(i).add(o)),U(o).finally(()=>{b(i=>{const L=new Set(i);return L.delete(o),L})})};return s.jsxs("div",{className:J["rte-file-upload"],children:[u&&s.jsx(_e,{htmlFor:p,id:m,label:c,required:n,showLabelRequirement:d}),z&&s.jsx(Ee,{label:E,appearance:B?"error":h,showIcon:F,href:_}),s.jsx("input",{ref:j,type:"file",multiple:O,id:p,className:J["rte-file-upload-input"],onChange:q,"aria-label":u?void 0:c,"aria-labelledby":m,disabled:l,accept:N}),s.jsx(je,{disabled:l,variant:"primary",label:P,onClick:W,icon:"upload",iconPosition:"left",ref:x,size:t?"s":"m",className:t?J["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((T=x.current)==null?void 0:T.offsetWidth)??void 0},children:S==null?void 0:S.map((o,i)=>s.jsx(we,{file:o,removeFile:()=>G(o),isLoading:A.has(o),isError:(r==null?void 0:r[i])!==void 0,errorMessage:r==null?void 0:r[i],compact:t},o.lastModified+i))})]})};C.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const is={title:"Composants/FileUpload",component:C,tags:["autodocs"]},g={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=a.useState([]),c=n=>{t(n)},u=n=>{t(d=>d.filter(l=>l!==n))};return s.jsx(C,{...e,onChange:c,onRemovingFile:u})}},y={args:{...g.args,id:"file-upload-2",disabled:!0}},D={args:{...g.args,id:"file-upload-3",multiple:!0}},K={args:{...g.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,c]=a.useState([]),u=d=>{c(d)},n=d=>{c(l=>l.filter(E=>E!==d))};return s.jsx(C,{...e,onChange:u,onRemovingFile:n,isError:t.length===0,showAssistiveText:t.length===0})}},$={args:{...g.args,id:"file-upload-5",showLabel:!1}},V={args:{...g.args,id:"file-upload-6",compactSpacing:!0}},M={args:{...g.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,c]=a.useState(void 0),[,u]=a.useState([]),[n,d]=a.useState([]),l=h=>{if(u(h),h.some(v=>v.size>1*1024)){c("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const v=h.map(F=>F.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");c("Un ou plusieurs fichiers dépassent la limite de 1Ko."),d(v)}},E=h=>{u(v=>{const F=v.filter(_=>_!==h);return d(F.filter(_=>_.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),F})};return s.jsx(C,{...e,onChange:l,isError:!!t,assistiveTextLabel:t,errorFilesMap:n,onRemovingFile:E})}},k={args:{...g.args},render:e=>{const[,t]=a.useState([]),c=n=>new Promise(d=>{t(l=>[...l,n]),setTimeout(()=>{d()},5e3)}),u=n=>{t(d=>d.filter(l=>l!==n))};return s.jsx(C,{...e,multiple:!0,onUpload:c,onRemovingFile:u})}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,ae,ne;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ne=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,oe,ce;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(oe=K.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ue,fe;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(fe=(ue=$.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(ge=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,Fe;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Fe=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};var xe,Se,be;k.parameters={...k.parameters,docs:{...(xe=k.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(be=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const as=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{k as Async,V as CompactSpacing,g as Default,y as Disabled,M as MaxSizeExceeded,D as MultipleFiles,K as WithError,$ as WithoutLabel,as as __namedExportsOrder,is as default};
