import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-G8LIXM5I.js";import{v as je}from"./v4-C6aID195.js";import{A as we,L as Le}from"./Label-BZwpSmrJ.js";import{B as Ce}from"./Button-b4mHgHU2.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as Te}from"./IconButton-HZdrGdmr.js";import{L as Ie}from"./Loader-BciKA4ZH.js";import{T as ze}from"./Tooltip-CfBhtBRO.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DLPtM2IA.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-krITzoP9.js";import"./useGetOverlayLayerLevel-DCKoElYy.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-DBpi9Esw.js";import"./index-BaBTCQBq.js";import"./index-B6ujFmsw.js";const Y=()=>je(),Ne=e=>t=>e.measureText(t).width,ye=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,Ue=e=>{const t=e.lastIndexOf("."),d=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:d}},C={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},Re=({file:e,removeFile:t,isError:d,errorMessage:p,compact:i,isLoading:u})=>{const l=r.useRef(null),E=r.useRef(null),F=r.useRef(null),x=r.useRef(null),S=r.useRef(null),[L,O]=r.useState(e.name),[P,G]=r.useState(!1),N=r.useCallback(a=>{const m=w(),f="...",{baseName:o,fileType:R}=Ue(a),g=`${f}${R}`;if(m<=0)return g;{const I=l.current;if(I){const H=y(I),_=Ne(H);if(_(a)<=m)return a;const U=m-_(f)-_(R);if(U<=0)return g;let j=0,z=o.length;for(;j<z;){const n=Math.ceil((j+z)/2),{startStr:b,endStr:Q}=h(n,o);_(b)+_(Q)<=U?j=n:z=n-1}if(j===0)return g;const A=Math.ceil(j/2),W=Math.floor(j/2),q=A>0?o.substring(0,A):"",c=W>0?o.substring(o.length-W):"";return`${q}${f}${c}${R}`}else return a}},[]),w=()=>{const a=l.current,m=x.current,f=S.current;if(!a||!m||!f)return 0;{const o=parseFloat(window.getComputedStyle(f).gap)||0;return f.offsetWidth-m.offsetWidth-o}},y=a=>{const f=document.createElement("canvas").getContext("2d"),o=window.getComputedStyle(a);return f.font=`${o.fontWeight} ${o.fontSize} ${o.fontFamily}`,f},h=(a,m)=>{const f=Math.ceil(a/2),o=Math.floor(a/2),R=f>0?m.substring(0,f):"",g=o>0?m.substring(m.length-o):"";return{startStr:R,endStr:g}};return r.useEffect(()=>{const a=N(e.name);G(a!==e.name),O(a)},[e,N]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:C["rte-file-upload-file-container"],children:[s.jsxs("div",{className:C["rte-file-upload-file"],children:[s.jsx("div",{className:C["rte-file-upload-file-icon"],ref:F,children:u?s.jsx(Ie,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:d?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:S,className:C["rte-file-upload-file-info"],children:[P?s.jsx(ze,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:l,className:C["rte-file-upload-file-name"],"data-is-compact":i,children:L})}):s.jsx("span",{ref:l,className:C["rte-file-upload-file-name"],"data-is-compact":i,children:e.name}),s.jsx("span",{ref:x,className:C["rte-file-upload-file-size"],"data-is-compact":i,children:ye(e.size)})]}),s.jsx(Te,{ref:E,name:"close",variant:"neutral",onClick:t,size:"m"})]}),p&&s.jsx(we,{label:p,appearance:"error"})]})})};Re.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const J={"rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},T=({id:e,compactSpacing:t,label:d,showLabel:p=!0,required:i=!1,showLabelRequirement:u=!1,disabled:l=!1,assistiveTextLabel:E,assistiveAppearance:F="description",showAssistiveText:x=!0,showAssistiveIcon:S,assistiveTextLink:L,isError:O,multiple:P=!1,buttonLabel:G,accept:N,onChange:w,onUpload:y,errorFilesMap:h=[],onRemovingFile:a})=>{var q;const m=e??Y(),f=Y(),o=r.useRef(null),R=r.useRef(null),[g,I]=r.useState(null),[H,_]=r.useState(new Set),U=x&&E&&F&&(h==null?void 0:h.length)===0,j=c=>{const n=Array.from(c.target.files||[]);w==null||w(n),I(n),y&&n.forEach(b=>{W(b)})},z=c=>{c.stopPropagation();const n=document.getElementById(m);n&&n.click()},A=c=>{if(g){const n=g.indexOf(c);if(n!==-1){const b=g.filter((Q,_e)=>_e!==n);I(b),a==null||a(c),w==null||w(b)}}},W=c=>{_(n=>new Set(n).add(c)),y(c).finally(()=>{_(n=>{const b=new Set(n);return b.delete(c),b})})};return s.jsxs("div",{className:J["rte-file-upload"],children:[p&&s.jsx(Le,{htmlFor:m,id:f,label:d,required:i,showLabelRequirement:u}),U&&s.jsx(we,{label:E,appearance:O?"error":F,showIcon:S,href:L}),s.jsx("input",{ref:R,type:"file",multiple:P,id:m,className:J["rte-file-upload-input"],onChange:j,"aria-label":p?void 0:d,"aria-labelledby":f,disabled:l,accept:N}),s.jsx(Ce,{disabled:l,variant:"primary",label:G,onClick:z,icon:"upload",iconPosition:"left",ref:o,size:t?"s":"m",className:t?J["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((q=o.current)==null?void 0:q.offsetWidth)??void 0},children:g==null?void 0:g.map((c,n)=>s.jsx(Re,{file:c,removeFile:()=>A(c),isLoading:H.has(c),isError:(h==null?void 0:h[n])!==void 0,errorMessage:h==null?void 0:h[n],compact:t},c.lastModified+n))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const ss={title:"Composants/FileUpload",component:T,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=r.useState([]),d=i=>{t(i)},p=i=>{t(u=>u.filter(l=>l!==i))};return s.jsx(T,{...e,onChange:d,onRemovingFile:p})}},$={args:{...v.args,id:"file-upload-2",disabled:!0}},D={args:{...v.args,id:"file-upload-3",multiple:!0}},K={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,d]=r.useState([]),p=u=>{d(u)},i=u=>{d(l=>l.filter(E=>E!==u))};return s.jsx(T,{...e,onChange:p,onRemovingFile:i,isError:t.length===0,showAssistiveText:t.length===0})}},V={args:{...v.args,id:"file-upload-5",showLabel:!1}},M={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},k={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,d]=r.useState(void 0),[,p]=r.useState([]),[i,u]=r.useState([]),l=F=>{if(p(F),F.some(x=>x.size>1*1024)){d("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const x=F.map(S=>S.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");d("Un ou plusieurs fichiers dépassent la limite de 1Ko."),u(x)}},E=F=>{p(x=>{const S=x.filter(L=>L!==F);return u(S.filter(L=>L.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),S})};return s.jsx(T,{...e,onChange:l,isError:!!t,assistiveTextLabel:t,errorFilesMap:i,onRemovingFile:E})}},B={args:{...v.args},render:e=>{const[,t]=r.useState([]),d=i=>new Promise(u=>{t(l=>[...l,i]),setTimeout(()=>{u()},5e3)}),p=i=>{t(u=>u.filter(l=>l!==i))};return s.jsx(T,{...e,multiple:!0,onUpload:d,onRemovingFile:p})}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,ne,re;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,ie,le;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(le=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,ce,de;K.parameters={...K.parameters,docs:{...(oe=K.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=K.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,fe,pe;V.parameters={...V.parameters,docs:{...(ue=V.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(pe=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ge,he;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(he=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ve,Fe,xe;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(xe=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:xe.source}}};var Se,be,Ee;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};const ts=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{B as Async,M as CompactSpacing,v as Default,$ as Disabled,k as MaxSizeExceeded,D as MultipleFiles,K as WithError,V as WithoutLabel,ts as __namedExportsOrder,ss as default};
