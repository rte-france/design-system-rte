import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as Q}from"./id.utils-DsO5Uws7.js";import{A as Re,L as Le}from"./Label-wbwhKqTA.js";import{B as Ie}from"./Button-kS01vuC-.js";import{g as we}from"./string.utils-BTbePzEe.js";import{I as Y}from"./Icon-VewZnR13.js";import{I as Ce}from"./IconButton-CqYdVntE.js";import{L as Te}from"./Loader-WDdpk2Jd.js";import{T as Ne}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-BmDTUvhp.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const W={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},ze=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,ye=s=>{const t=s.lastIndexOf("."),a=t!==-1?s.substring(t):"";return{baseName:t!==-1?s.substring(0,t):s,fileType:a}},x={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},_e=({file:s,removeFile:t,isError:a,errorMessage:u,compact:l,isLoading:o})=>{const c=n.useRef(null),R=n.useRef(null),S=n.useRef(null),v=n.useRef(null),b=n.useRef(null),_=n.useRef(Q()).current,[P,G]=n.useState(s.name),[H,j]=n.useState(!1),T=n.useCallback(i=>{const p=h(),m="...",{baseName:f,fileType:g}=ye(i),L=`${m}${g}`;if(p<=0)return L;{const A=c.current;if(A){const I=we(A);if(I(i)<=p)return i;const z=p-I(m)-I(g);if(z<=0)return L;let w=0,y=f.length;for(;w<y;){const r=Math.ceil((w+y)/2),{startStr:E,endStr:X}=N(r,f);I(E)+I(X)<=z?w=r:y=r-1}if(w===0)return L;const U=Math.ceil(w/2),D=Math.floor(w/2),$=U>0?f.substring(0,U):"",d=D>0?f.substring(f.length-D):"";return`${$}${m}${d}${g}`}else return i}},[]),h=()=>{const i=c.current,p=v.current,m=b.current;if(!i||!p||!m)return 0;{const f=parseFloat(window.getComputedStyle(m).gap)||0;return m.offsetWidth-p.offsetWidth-f}},N=(i,p)=>{const m=Math.ceil(i/2),f=Math.floor(i/2),g=m>0?p.substring(0,m):"",L=f>0?p.substring(p.length-f):"";return{startStr:g,endStr:L}};return n.useEffect(()=>{const i=T(s.name);j(i!==s.name),G(i)},[s,T]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:x["rte-file-upload-file-container"],children:[e.jsxs("div",{className:x["rte-file-upload-file"],children:[e.jsx("div",{className:x["rte-file-upload-file-icon"],ref:S,"aria-live":"polite","aria-atomic":"true",children:o?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:x["sr-only"],children:W.LOADING}),e.jsx(Te,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:a?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:x["sr-only"],children:W.ERROR}),e.jsx(Y,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:x["sr-only"],children:W.SUCCESS}),e.jsx(Y,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)","aria-label":W.SUCCESS})]})})}),e.jsxs("div",{ref:b,className:x["rte-file-upload-file-info"],children:[H?e.jsx(Ne,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:c,className:x["rte-file-upload-file-name"],"data-is-compact":l,children:P})}):e.jsx("span",{ref:c,className:x["rte-file-upload-file-name"],"data-is-compact":l,children:s.name}),e.jsx("span",{ref:v,className:x["rte-file-upload-file-size"],"data-is-compact":l,children:ze(s.size)})]}),e.jsx(Ce,{ref:R,name:"close",variant:"neutral",onClick:t,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name,"aria-describedby":u?_:void 0})]}),u&&e.jsx(Re,{id:_,label:u,appearance:"error"})]})})};_e.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const J={"rte-file-upload-input":"_rte-file-upload-input_114w7_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_114w7_31"},C=({id:s,compactSpacing:t,label:a,required:u=!1,showLabelRequirement:l=!1,disabled:o=!1,assistiveTextLabel:c,assistiveAppearance:R="description",showAssistiveText:S=!0,showAssistiveIcon:v,assistiveTextLink:b,isError:_,multiple:P=!1,buttonLabel:G,accept:H,onChange:j,onUpload:T,errorFilesMap:h=[],onRemovingFile:N})=>{var $;const i=s??Q(),p=Q(),m=n.useRef(null),f=n.useRef(null),[g,L]=n.useState(null),[A,I]=n.useState(new Set),z=S&&c&&R&&(h==null?void 0:h.length)===0,w=d=>{const r=Array.from(d.target.files||[]);j==null||j(r),L(r),T&&r.forEach(E=>{D(E)})},y=d=>{d.stopPropagation();const r=document.getElementById(i);r&&r.click()},U=d=>{if(g){const r=g.indexOf(d);if(r!==-1){const E=g.filter((X,je)=>je!==r);L(E),N==null||N(d),j==null||j(E),f.current&&(f.current.value="",f.current.focus())}}},D=d=>{I(r=>new Set(r).add(d)),T(d).finally(()=>{I(r=>{const E=new Set(r);return E.delete(d),E})})};return e.jsxs("div",{className:J["rte-file-upload"],children:[e.jsx("input",{ref:f,type:"file",multiple:P,id:i,className:J["rte-file-upload-input"],onChange:w,"aria-labelledby":a?p:`${i}-button`,"aria-describedby":z?`${i}-assistive-text`:void 0,disabled:o,accept:H}),a&&e.jsx(Le,{htmlFor:i,id:p,label:a,required:u,showLabelRequirement:l}),z&&e.jsx(Re,{id:`${i}-assistive-text`,label:c,appearance:_?"error":R,showIcon:v,href:b}),e.jsx(Ie,{id:`${i}-button`,disabled:o,variant:"primary",label:G,onClick:y,icon:"upload",iconPosition:"left",ref:m,size:t?"s":"m",className:t?J["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:(($=m.current)==null?void 0:$.offsetWidth)??void 0},children:g==null?void 0:g.map((d,r)=>e.jsx(_e,{file:d,removeFile:()=>U(d),isLoading:A.has(d),isError:(h==null?void 0:h[r])!==void 0,errorMessage:h==null?void 0:h[r],compact:t},d.lastModified+r))})]})};C.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const is={title:"Composants/FileUpload",component:C,tags:["autodocs"]},F={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,t]=n.useState([]),a=l=>{t(l)},u=l=>{t(o=>o.filter(c=>c!==l))};return e.jsx(C,{...s,onChange:a,onRemovingFile:u})}},q={args:{...F.args,id:"file-upload-2",disabled:!0}},K={args:{...F.args,id:"file-upload-3",multiple:!0}},M={args:{...F.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[t,a]=n.useState([]),u=o=>{a(o)},l=o=>{a(c=>c.filter(R=>R!==o))};return e.jsx(C,{...s,onChange:u,onRemovingFile:l,isError:t.length===0,showAssistiveText:t.length===0})}},O={args:{...F.args,id:"file-upload-5",showLabel:!1}},V={args:{...F.args,id:"file-upload-6",compactSpacing:!0}},k={args:{...F.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[t,a]=n.useState(void 0),[,u]=n.useState([]),[l,o]=n.useState([]),c=S=>{if(u(S),S.some(v=>v.size>1*1024)){a("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const v=S.map(b=>b.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");a("Un ou plusieurs fichiers dépassent la limite de 1Ko."),o(v)}},R=S=>{u(v=>{const b=v.filter(_=>_!==S);return o(b.filter(_=>_.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),b})};return e.jsx(C,{...s,onChange:c,isError:!!t,assistiveTextLabel:t,errorFilesMap:l,onRemovingFile:R})}},B={args:{...F.args},render:s=>{const[,t]=n.useState([]),a=l=>new Promise(o=>{t(c=>[...c,l]),setTimeout(()=>{o()},5e3)}),u=l=>{t(o=>o.filter(c=>c!==l))};return e.jsx(C,{...s,multiple:!0,onUpload:a,onRemovingFile:u})}};var Z,ee,se;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,re,ie;q.parameters={...q.parameters,docs:{...(te=q.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(ie=(re=q.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ne,ae,le;K.parameters={...K.parameters,docs:{...(ne=K.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(le=(ae=K.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,ce,de;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,fe,pe;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(pe=(fe=O.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ge,he;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(he=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Fe,ve,xe;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(xe=(ve=k.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,be,Ee;B.parameters={...B.parameters,docs:{...(Se=B.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(be=B.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};const ns=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{B as Async,V as CompactSpacing,F as Default,q as Disabled,k as MaxSizeExceeded,K as MultipleFiles,M as WithError,O as WithoutLabel,ns as __namedExportsOrder,is as default};
