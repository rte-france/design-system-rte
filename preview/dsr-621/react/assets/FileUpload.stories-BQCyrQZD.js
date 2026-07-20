import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-G8LIXM5I.js";import{e as _e,g as je,f as Le,a as Q}from"./stringUtil-DvmAPkeM.js";import{A as Ee,L as Ce}from"./Label-BaZEr-h0.js";import{B as Ie}from"./Button-DVlmZND_.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as Te}from"./IconButton-en7B25KO.js";import{L as ze}from"./Loader-DUBwf6Qo.js";import{T as ye}from"./Tooltip-9hqxBVC1.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./v4-C6aID195.js";import"./Link-BXut70Xg.js";import"./index-DJ8f9STe.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-DkJhvK8e.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const C={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},we=({file:a,removeFile:l,isError:d,errorMessage:u,compact:i,isLoading:c})=>{const n=r.useRef(null),E=r.useRef(null),h=r.useRef(null),v=r.useRef(null),F=r.useRef(null),[_,B]=r.useState(a.name),[P,O]=r.useState(!1),y=r.useCallback(s=>{const f=w(),p="...",{baseName:m,fileType:x}=_e(s),j=`${p}${x}`;if(f<=0)return j;{const S=n.current;if(S){const R=je(S);if(R(s)<=f)return s;const U=f-R(p)-R(x);if(U<=0)return j;let b=0,z=m.length;for(;b<z;){const I=Math.ceil((b+z)/2),{startStr:o,endStr:t}=N(I,m);R(o)+R(t)<=U?b=I:z=I-1}if(b===0)return j;const A=Math.ceil(b/2),q=Math.floor(b/2),H=A>0?m.substring(0,A):"",G=q>0?m.substring(m.length-q):"";return`${H}${p}${G}${x}`}else return s}},[]),w=()=>{const s=n.current,f=v.current,p=F.current;if(!s||!f||!p)return 0;{const m=parseFloat(window.getComputedStyle(p).gap)||0;return p.offsetWidth-f.offsetWidth-m}},N=(s,f)=>{const p=Math.ceil(s/2),m=Math.floor(s/2),x=p>0?f.substring(0,p):"",j=m>0?f.substring(f.length-m):"";return{startStr:x,endStr:j}};return r.useEffect(()=>{const s=y(a.name);O(s!==a.name),B(s)},[a,y]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:C["rte-file-upload-file-container"],children:[e.jsxs("div",{className:C["rte-file-upload-file"],children:[e.jsx("div",{className:C["rte-file-upload-file-icon"],ref:h,children:c?e.jsx(ze,{size:"small",showLabel:!1}):e.jsx(e.Fragment,{children:d?e.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):e.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),e.jsxs("div",{ref:F,className:C["rte-file-upload-file-info"],children:[P?e.jsx(ye,{label:a.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:n,className:C["rte-file-upload-file-name"],"data-is-compact":i,children:_})}):e.jsx("span",{ref:n,className:C["rte-file-upload-file-name"],"data-is-compact":i,children:a.name}),e.jsx("span",{ref:v,className:C["rte-file-upload-file-size"],"data-is-compact":i,children:Le(a.size)})]}),e.jsx(Te,{ref:E,name:"close",variant:"neutral",onClick:l,size:"m"})]}),u&&e.jsx(Ee,{label:u,appearance:"error"})]})})};we.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const J={"rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},T=({id:a,compactSpacing:l,label:d,showLabel:u=!0,required:i=!1,showLabelRequirement:c=!1,disabled:n=!1,assistiveTextLabel:E,assistiveAppearance:h="description",showAssistiveText:v=!0,showAssistiveIcon:F,assistiveTextLink:_,isError:B,multiple:P=!1,buttonLabel:O,accept:y,onChange:w,onUpload:N,errorFilesMap:s=[],onRemovingFile:f})=>{var I;const p=a??Q(),m=Q(),x=r.useRef(null),j=r.useRef(null),[S,R]=r.useState(null),[U,b]=r.useState(new Set),z=v&&E&&h&&(s==null?void 0:s.length)===0,A=o=>{const t=Array.from(o.target.files||[]);w==null||w(t),R(t),N&&t.forEach(L=>{G(L)})},q=o=>{o.stopPropagation();const t=document.getElementById(p);t&&t.click()},H=o=>{if(S){const t=S.indexOf(o);if(t!==-1){const L=S.filter((Ne,Re)=>Re!==t);R(L),f==null||f(o),w==null||w(L)}}},G=o=>{b(t=>new Set(t).add(o)),N(o).finally(()=>{b(t=>{const L=new Set(t);return L.delete(o),L})})};return e.jsxs("div",{className:J["rte-file-upload"],children:[u&&e.jsx(Ce,{htmlFor:p,id:m,label:d,required:i,showLabelRequirement:c}),z&&e.jsx(Ee,{label:E,appearance:B?"error":h,showIcon:F,href:_}),e.jsx("input",{ref:j,type:"file",multiple:P,id:p,className:J["rte-file-upload-input"],onChange:A,"aria-label":u?void 0:d,"aria-labelledby":m,disabled:n,accept:y}),e.jsx(Ie,{disabled:n,variant:"primary",label:O,onClick:q,icon:"upload",iconPosition:"left",ref:x,size:l?"s":"m",className:l?J["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((I=x.current)==null?void 0:I.offsetWidth)??void 0},children:S==null?void 0:S.map((o,t)=>e.jsx(we,{file:o,removeFile:()=>H(o),isLoading:U.has(o),isError:(s==null?void 0:s[t])!==void 0,errorMessage:s==null?void 0:s[t],compact:l},o.lastModified+t))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ss={title:"Composants/FileUpload",component:T,tags:["autodocs"]},g={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:a=>{const[,l]=r.useState([]),d=i=>{l(i)},u=i=>{l(c=>c.filter(n=>n!==i))};return e.jsx(T,{...a,onChange:d,onRemovingFile:u})}},W={args:{...g.args,id:"file-upload-2",disabled:!0}},D={args:{...g.args,id:"file-upload-3",multiple:!0}},K={args:{...g.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:a=>{const[l,d]=r.useState([]),u=c=>{d(c)},i=c=>{d(n=>n.filter(E=>E!==c))};return e.jsx(T,{...a,onChange:u,onRemovingFile:i,isError:l.length===0,showAssistiveText:l.length===0})}},V={args:{...g.args,id:"file-upload-5",showLabel:!1}},k={args:{...g.args,id:"file-upload-6",compactSpacing:!0}},M={args:{...g.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:a=>{const[l,d]=r.useState(void 0),[,u]=r.useState([]),[i,c]=r.useState([]),n=h=>{if(u(h),h.some(v=>v.size>1*1024)){d("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const v=h.map(F=>F.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");d("Un ou plusieurs fichiers dépassent la limite de 1Ko."),c(v)}},E=h=>{u(v=>{const F=v.filter(_=>_!==h);return c(F.filter(_=>_.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),F})};return e.jsx(T,{...a,onChange:n,isError:!!l,assistiveTextLabel:l,errorFilesMap:i,onRemovingFile:E})}},$={args:{...g.args},render:a=>{const[,l]=r.useState([]),d=i=>new Promise(c=>{l(n=>[...n,i]),setTimeout(()=>{c()},5e3)}),u=i=>{l(c=>c.filter(n=>n!==i))};return e.jsx(T,{...a,multiple:!0,onUpload:d,onRemovingFile:u})}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;W.parameters={...W.parameters,docs:{...(se=W.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(te=W.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,le,ie;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ie=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,oe,ce;K.parameters={...K.parameters,docs:{...(ne=K.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(ce=(oe=K.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ue,fe;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(fe=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(ge=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,Fe;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Fe=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};var xe,Se,be;$.parameters={...$.parameters,docs:{...(xe=$.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(be=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const ts=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{$ as Async,k as CompactSpacing,g as Default,W as Disabled,M as MaxSizeExceeded,D as MultipleFiles,K as WithError,V as WithoutLabel,ts as __namedExportsOrder,ss as default};
