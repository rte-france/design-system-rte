import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as J}from"./id.utils-DsO5Uws7.js";import{A as Ee,L as _e}from"./Label-RVTAVU7C.js";import{B as je}from"./Button-KJfdYR4G.js";import{g as Le}from"./string.utils-BTbePzEe.js";import{I as X}from"./Icon-DgLH6pPJ.js";import{I as Ie}from"./IconButton-D7Ub3mhB.js";import{L as Te}from"./Loader-DUBwf6Qo.js";import{T as Ce}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const ze=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,Ne=e=>{const t=e.lastIndexOf("."),a=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:a}},I={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},we=({file:e,removeFile:t,isError:a,errorMessage:f,compact:l,isLoading:o})=>{const c=n.useRef(null),E=n.useRef(null),x=n.useRef(null),F=n.useRef(null),S=n.useRef(null),L=n.useRef(J()).current,[O,P]=n.useState(e.name),[G,w]=n.useState(!1),C=n.useCallback(i=>{const p=h(),m="...",{baseName:u,fileType:g}=Ne(i),R=`${m}${g}`;if(p<=0)return R;{const A=c.current;if(A){const _=Le(A);if(_(i)<=p)return i;const N=p-_(m)-_(g);if(N<=0)return R;let j=0,U=u.length;for(;j<U;){const r=Math.ceil((j+U)/2),{startStr:b,endStr:Q}=z(r,u);_(b)+_(Q)<=N?j=r:U=r-1}if(j===0)return R;const $=Math.ceil(j/2),y=Math.floor(j/2),W=$>0?u.substring(0,$):"",d=y>0?u.substring(u.length-y):"";return`${W}${m}${d}${g}`}else return i}},[]),h=()=>{const i=c.current,p=F.current,m=S.current;if(!i||!p||!m)return 0;{const u=parseFloat(window.getComputedStyle(m).gap)||0;return m.offsetWidth-p.offsetWidth-u}},z=(i,p)=>{const m=Math.ceil(i/2),u=Math.floor(i/2),g=m>0?p.substring(0,m):"",R=u>0?p.substring(p.length-u):"";return{startStr:g,endStr:R}};return n.useEffect(()=>{const i=C(e.name);w(i!==e.name),P(i)},[e,C]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:I["rte-file-upload-file-container"],children:[s.jsxs("div",{className:I["rte-file-upload-file"],children:[s.jsx("div",{className:I["rte-file-upload-file-icon"],ref:x,children:o?s.jsx(Te,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:a?s.jsx(X,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(X,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:S,className:I["rte-file-upload-file-info"],children:[G?s.jsx(Ce,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:c,className:I["rte-file-upload-file-name"],"data-is-compact":l,children:O})}):s.jsx("span",{ref:c,className:I["rte-file-upload-file-name"],"data-is-compact":l,children:e.name}),s.jsx("span",{ref:F,className:I["rte-file-upload-file-size"],"data-is-compact":l,children:ze(e.size)})]}),s.jsx(Ie,{ref:E,name:"close",variant:"neutral",onClick:t,size:"m","aria-label":"Supprimer le fichier sélectionné : "+e.name})]}),f&&s.jsx(Ee,{id:L,label:f,appearance:"error"})]})})};we.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const H={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},T=({id:e,compactSpacing:t,label:a,required:f=!1,showLabelRequirement:l=!1,disabled:o=!1,assistiveTextLabel:c,assistiveAppearance:E="description",showAssistiveText:x=!0,showAssistiveIcon:F,assistiveTextLink:S,isError:L,multiple:O=!1,buttonLabel:P,accept:G,onChange:w,onUpload:C,errorFilesMap:h=[],onRemovingFile:z})=>{var W;const i=e??J(),p=J(),m=n.useRef(null),u=n.useRef(null),[g,R]=n.useState(null),[A,_]=n.useState(new Set),N=x&&c&&E&&(h==null?void 0:h.length)===0,j=d=>{const r=Array.from(d.target.files||[]);w==null||w(r),R(r),C&&r.forEach(b=>{y(b)})},U=d=>{d.stopPropagation();const r=document.getElementById(i);r&&r.click()},$=d=>{if(g){const r=g.indexOf(d);if(r!==-1){const b=g.filter((Q,Re)=>Re!==r);R(b),z==null||z(d),w==null||w(b),u.current&&(u.current.value="",u.current.focus())}}},y=d=>{_(r=>new Set(r).add(d)),C(d).finally(()=>{_(r=>{const b=new Set(r);return b.delete(d),b})})};return s.jsxs("div",{className:H["rte-file-upload"],children:[s.jsx("input",{ref:u,type:"file",multiple:O,id:i,className:H["rte-file-upload-input"],onChange:j,"aria-labelledby":a?p:`${i}-button`,"aria-describedby":N?`${i}-assistive-text`:void 0,disabled:o,accept:G}),a&&s.jsx(_e,{htmlFor:i,id:p,label:a,required:f,showLabelRequirement:l}),N&&s.jsx(Ee,{id:`${i}-assistive-text`,label:c,appearance:L?"error":E,showIcon:F,href:S}),s.jsx(je,{id:`${i}-button`,disabled:o,variant:"primary",label:P,onClick:U,icon:"upload",iconPosition:"left",ref:m,size:t?"s":"m",className:t?H["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((W=m.current)==null?void 0:W.offsetWidth)??void 0},children:g==null?void 0:g.map((d,r)=>s.jsx(we,{file:d,removeFile:()=>$(d),isLoading:A.has(d),isError:(h==null?void 0:h[r])!==void 0,errorMessage:h==null?void 0:h[r],compact:t},d.lastModified+r))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const rs={title:"Composants/FileUpload",component:T,tags:["autodocs"]},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=n.useState([]),a=l=>{t(l)},f=l=>{t(o=>o.filter(c=>c!==l))};return s.jsx(T,{...e,onChange:a,onRemovingFile:f})}},q={args:{...v.args,id:"file-upload-2",disabled:!0}},D={args:{...v.args,id:"file-upload-3",multiple:!0}},K={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:e=>{const[t,a]=n.useState([]),f=o=>{a(o)},l=o=>{a(c=>c.filter(E=>E!==o))};return s.jsx(T,{...e,onChange:f,onRemovingFile:l,isError:t.length===0,showAssistiveText:t.length===0})}},M={args:{...v.args,id:"file-upload-5",showLabel:!1}},V={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},k={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,a]=n.useState(void 0),[,f]=n.useState([]),[l,o]=n.useState([]),c=x=>{if(f(x),x.some(F=>F.size>1*1024)){a("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const F=x.map(S=>S.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");a("Un ou plusieurs fichiers dépassent la limite de 1Ko."),o(F)}},E=x=>{f(F=>{const S=F.filter(L=>L!==x);return o(S.filter(L=>L.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),S})};return s.jsx(T,{...e,onChange:c,isError:!!t,assistiveTextLabel:t,errorFilesMap:l,onRemovingFile:E})}},B={args:{...v.args},render:e=>{const[,t]=n.useState([]),a=l=>new Promise(o=>{t(c=>[...c,l]),setTimeout(()=>{o()},5e3)}),f=l=>{t(o=>o.filter(c=>c!==l))};return s.jsx(T,{...e,multiple:!0,onUpload:a,onRemovingFile:f})}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(te=q.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ie,ne,ae;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ae=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var le,oe,ce;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(fe=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(ge=(me=V.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,Fe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(Fe=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:Fe.source}}};var xe,Se,be;B.parameters={...B.parameters,docs:{...(xe=B.parameters)==null?void 0:xe.docs,source:{originalSource:`{
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
}`,...(be=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const is=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{B as Async,V as CompactSpacing,v as Default,q as Disabled,k as MaxSizeExceeded,D as MultipleFiles,K as WithError,M as WithoutLabel,is as __namedExportsOrder,rs as default};
