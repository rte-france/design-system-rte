import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as J}from"./id.utils-DsO5Uws7.js";import{A as be,L as Re}from"./Label-RVTAVU7C.js";import{B as _e}from"./Button-KJfdYR4G.js";import{g as je}from"./string.utils-BTbePzEe.js";import{I as Q}from"./Icon-DgLH6pPJ.js";import{I as Le}from"./IconButton-D7Ub3mhB.js";import{L as Ie}from"./Loader-DUBwf6Qo.js";import{T as Te}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Ce=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,ze=e=>{const t=e.lastIndexOf("."),l=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:l}},I={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},Ee=({file:e,removeFile:t,isError:l,errorMessage:f,compact:o,isLoading:c})=>{const d=n.useRef(null),_=n.useRef(null),S=n.useRef(null),x=n.useRef(null),b=n.useRef(null),[j,B]=n.useState(e.name),[O,P]=n.useState(!1),E=n.useCallback(u=>{const a=U(),p="...",{baseName:m,fileType:v}=ze(u),g=`${p}${v}`;if(a<=0)return g;{const C=d.current;if(C){const L=je(C);if(L(u)<=a)return u;const z=a-L(p)-L(v);if(z<=0)return g;let w=0,N=m.length;for(;w<N;){const r=Math.ceil((w+N)/2),{startStr:i,endStr:R}=h(r,m);L(i)+L(R)<=z?w=r:N=r-1}if(w===0)return g;const A=Math.ceil(w/2),$=Math.floor(w/2),G=A>0?m.substring(0,A):"",y=$>0?m.substring(m.length-$):"";return`${G}${p}${y}${v}`}else return u}},[]),U=()=>{const u=d.current,a=x.current,p=b.current;if(!u||!a||!p)return 0;{const m=parseFloat(window.getComputedStyle(p).gap)||0;return p.offsetWidth-a.offsetWidth-m}},h=(u,a)=>{const p=Math.ceil(u/2),m=Math.floor(u/2),v=p>0?a.substring(0,p):"",g=m>0?a.substring(a.length-m):"";return{startStr:v,endStr:g}};return n.useEffect(()=>{const u=E(e.name);P(u!==e.name),B(u)},[e,E]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:I["rte-file-upload-file-container"],children:[s.jsxs("div",{className:I["rte-file-upload-file"],children:[s.jsx("div",{className:I["rte-file-upload-file-icon"],ref:S,children:c?s.jsx(Ie,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:l?s.jsx(Q,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(Q,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:b,className:I["rte-file-upload-file-info"],children:[O?s.jsx(Te,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:d,className:I["rte-file-upload-file-name"],"data-is-compact":o,children:j})}):s.jsx("span",{ref:d,className:I["rte-file-upload-file-name"],"data-is-compact":o,children:e.name}),s.jsx("span",{ref:x,className:I["rte-file-upload-file-size"],"data-is-compact":o,children:Ce(e.size)})]}),s.jsx(Le,{ref:_,name:"close",variant:"neutral",onClick:t,size:"m"})]}),f&&s.jsx(be,{label:f,appearance:"error"})]})})};Ee.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const H={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},T=({id:e,compactSpacing:t,label:l,required:f=!1,showLabelRequirement:o=!1,disabled:c=!1,assistiveTextLabel:d,assistiveAppearance:_="description",showAssistiveText:S=!0,showAssistiveIcon:x,assistiveTextLink:b,isError:j,multiple:B=!1,buttonLabel:O,accept:P,onChange:E,onUpload:U,errorFilesMap:h=[],onRemovingFile:u})=>{var y;const a=e??J(),p=J(),m=n.useRef(null),v=n.useRef(null),[g,C]=n.useState(null),[L,z]=n.useState(new Set),w=S&&d&&_&&(h==null?void 0:h.length)===0,N=r=>{const i=Array.from(r.target.files||[]);E==null||E(i),C(i),U&&i.forEach(R=>{G(R)})},A=r=>{r.stopPropagation();const i=document.getElementById(a);i&&i.click()},$=r=>{if(g){const i=g.indexOf(r);if(i!==-1){const R=g.filter((Ne,we)=>we!==i);C(R),u==null||u(r),E==null||E(R),v.current&&(v.current.value="",v.current.focus())}}},G=r=>{z(i=>new Set(i).add(r)),U(r).finally(()=>{z(i=>{const R=new Set(i);return R.delete(r),R})})};return s.jsxs("div",{className:H["rte-file-upload"],children:[s.jsx("input",{ref:v,type:"file",multiple:B,id:a,className:H["rte-file-upload-input"],onChange:N,"aria-labelledby":l?p:`${a}-button`,"aria-describedby":w?`${a}-assistive-text`:void 0,disabled:c,accept:P}),l&&s.jsx(Re,{htmlFor:a,id:p,label:l,required:f,showLabelRequirement:o}),w&&s.jsx(be,{id:`${a}-assistive-text`,label:d,appearance:j?"error":_,showIcon:x,href:b}),s.jsx(_e,{id:`${a}-button`,disabled:c,variant:"primary",label:O,onClick:A,icon:"upload",iconPosition:"left",ref:m,size:t?"s":"m",className:t?H["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((y=m.current)==null?void 0:y.offsetWidth)??void 0},children:g==null?void 0:g.map((r,i)=>s.jsx(Ee,{file:r,removeFile:()=>$(r),isLoading:L.has(r),isError:(h==null?void 0:h[i])!==void 0,errorMessage:h==null?void 0:h[i],compact:t},r.lastModified+i))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const rs={title:"Composants/FileUpload",component:T,tags:["autodocs"]},F={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=n.useState([]),l=o=>{t(o)},f=o=>{t(c=>c.filter(d=>d!==o))};return s.jsx(T,{...e,onChange:l,onRemovingFile:f})}},W={args:{...F.args,id:"file-upload-2",disabled:!0}},q={args:{...F.args,id:"file-upload-3",multiple:!0}},D={args:{...F.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,l]=n.useState([]),f=c=>{l(c)},o=c=>{l(d=>d.filter(_=>_!==c))};return s.jsx(T,{...e,onChange:f,onRemovingFile:o,isError:t.length===0,showAssistiveText:t.length===0})}},K={args:{...F.args,id:"file-upload-5",showLabel:!1}},M={args:{...F.args,id:"file-upload-6",compactSpacing:!0}},V={args:{...F.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,l]=n.useState(void 0),[,f]=n.useState([]),[o,c]=n.useState([]),d=S=>{if(f(S),S.some(x=>x.size>1*1024)){l("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=S.map(b=>b.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");l("Un ou plusieurs fichiers dépassent la limite de 1Ko."),c(x)}},_=S=>{f(x=>{const b=x.filter(j=>j!==S);return c(b.filter(j=>j.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),b})};return s.jsx(T,{...e,onChange:d,isError:!!t,assistiveTextLabel:t,errorFilesMap:o,onRemovingFile:_})}},k={args:{...F.args},render:e=>{const[,t]=n.useState([]),l=o=>new Promise(c=>{t(d=>[...d,o]),setTimeout(()=>{c()},5e3)}),f=o=>{t(c=>c.filter(d=>d!==o))};return s.jsx(T,{...e,multiple:!0,onUpload:l,onRemovingFile:f})}};var X,Y,Z;F.parameters={...F.parameters,docs:{...(X=F.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=F.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,se,te;W.parameters={...W.parameters,docs:{...(ee=W.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(te=(se=W.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ie,ne;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ne=(ie=q.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};var ae,le,oe;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(oe=(le=D.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ce,de,ue;K.parameters={...K.parameters,docs:{...(ce=K.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(ue=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var fe,pe,me;M.parameters={...M.parameters,docs:{...(fe=M.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(me=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,ve;V.parameters={...V.parameters,docs:{...(ge=V.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(he=V.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var Fe,xe,Se;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Se=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Se.source}}};const is=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{k as Async,M as CompactSpacing,F as Default,W as Disabled,V as MaxSizeExceeded,q as MultipleFiles,D as WithError,K as WithoutLabel,is as __namedExportsOrder,rs as default};
