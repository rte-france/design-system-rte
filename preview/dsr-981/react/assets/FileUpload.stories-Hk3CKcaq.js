import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as X}from"./id.utils-DsO5Uws7.js";import{A as Re,L as Le}from"./Label-Bgp-fFvQ.js";import{B as we}from"./Button-KJfdYR4G.js";import{g as Ie}from"./string.utils-BTbePzEe.js";import{I as Y}from"./Icon-DgLH6pPJ.js";import{I as Ce}from"./IconButton-D7Ub3mhB.js";import{L as Te}from"./Loader-Bni_9NEt.js";import{T as Ne}from"./Tooltip-IwW420ZV.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-B53ZmOEu.js";import"./NavigationContext-D2CUoNWC.js";import"./index-DJ8f9STe.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-DkJhvK8e.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BdeF33Ax.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const q={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},ze=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,Ae=s=>{const t=s.lastIndexOf("."),c=t!==-1?s.substring(t):"";return{baseName:t!==-1?s.substring(0,t):s,fileType:c}},v={"rte-file-upload-file-container":"_rte-file-upload-file-container_1gpnb_1","rte-file-upload-file":"_rte-file-upload-file_1gpnb_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1gpnb_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1gpnb_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1gpnb_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1gpnb_54","sr-only":"_sr-only_1gpnb_72"},_e=({file:s,removeFile:t,isError:c,errorMessage:u,compact:a,isLoading:d})=>{const l=i.useRef(null),R=i.useRef(null),h=i.useRef(null),F=i.useRef(null),x=i.useRef(null),[L,B]=i.useState(s.name),[P,G]=i.useState(!1),z=i.useCallback(r=>{const f=_(),p="...",{baseName:m,fileType:S}=Ae(r),w=`${p}${S}`;if(f<=0)return w;{const b=l.current;if(b){const j=Ie(b);if(j(r)<=f)return r;const U=f-j(p)-j(S);if(U<=0)return w;let E=0,N=m.length;for(;E<N;){const C=Math.ceil((E+N)/2),{startStr:o,endStr:n}=A(C,m);j(o)+j(n)<=U?E=C:N=C-1}if(E===0)return w;const y=Math.ceil(E/2),D=Math.floor(E/2),H=y>0?m.substring(0,y):"",J=D>0?m.substring(m.length-D):"";return`${H}${p}${J}${S}`}else return r}},[]),_=()=>{const r=l.current,f=F.current,p=x.current;if(!r||!f||!p)return 0;{const m=parseFloat(window.getComputedStyle(p).gap)||0;return p.offsetWidth-f.offsetWidth-m}},A=(r,f)=>{const p=Math.ceil(r/2),m=Math.floor(r/2),S=p>0?f.substring(0,p):"",w=m>0?f.substring(f.length-m):"";return{startStr:S,endStr:w}};return i.useEffect(()=>{const r=z(s.name);G(r!==s.name),B(r)},[s,z]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:v["rte-file-upload-file-container"],children:[e.jsxs("div",{className:v["rte-file-upload-file"],children:[e.jsx("div",{className:v["rte-file-upload-file-icon"],ref:h,"aria-live":"polite","aria-atomic":"true",children:d?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:v["sr-only"],children:q.LOADING}),e.jsx(Te,{size:"small",showLabel:!1,"aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:c?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:v["sr-only"],children:q.ERROR}),e.jsx(Y,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:v["sr-only"],children:q.SUCCESS}),e.jsx(Y,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)","aria-label":q.SUCCESS})]})})}),e.jsxs("div",{ref:x,className:v["rte-file-upload-file-info"],children:[P?e.jsx(Ne,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:e.jsx("span",{ref:l,className:v["rte-file-upload-file-name"],"data-is-compact":a,children:L})}):e.jsx("span",{ref:l,className:v["rte-file-upload-file-name"],"data-is-compact":a,children:s.name}),e.jsx("span",{ref:F,className:v["rte-file-upload-file-size"],"data-is-compact":a,children:ze(s.size)})]}),e.jsx(Ce,{ref:R,name:"close",variant:"neutral",onClick:t,size:"m"})]}),u&&e.jsx(Re,{label:u,appearance:"error"})]})})};_e.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const Q={"rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},T=({id:s,compactSpacing:t,label:c,showLabel:u=!0,required:a=!1,showLabelRequirement:d=!1,disabled:l=!1,assistiveTextLabel:R,assistiveAppearance:h="description",showAssistiveText:F=!0,showAssistiveIcon:x,assistiveTextLink:L,isError:B,multiple:P=!1,buttonLabel:G,accept:z,onChange:_,onUpload:A,errorFilesMap:r=[],onRemovingFile:f})=>{var C;const p=s??X(),m=X(),S=i.useRef(null),w=i.useRef(null),[b,j]=i.useState(null),[U,E]=i.useState(new Set),N=F&&R&&h&&(r==null?void 0:r.length)===0,y=o=>{const n=Array.from(o.target.files||[]);_==null||_(n),j(n),A&&n.forEach(I=>{J(I)})},D=o=>{o.stopPropagation();const n=document.getElementById(p);n&&n.click()},H=o=>{if(b){const n=b.indexOf(o);if(n!==-1){const I=b.filter((Ue,je)=>je!==n);j(I),f==null||f(o),_==null||_(I)}}},J=o=>{E(n=>new Set(n).add(o)),A(o).finally(()=>{E(n=>{const I=new Set(n);return I.delete(o),I})})};return e.jsxs("div",{className:Q["rte-file-upload"],children:[u&&e.jsx(Le,{htmlFor:p,id:m,label:c,required:a,showLabelRequirement:d}),N&&e.jsx(Re,{label:R,appearance:B?"error":h,showIcon:x,href:L}),e.jsx("input",{ref:w,type:"file",multiple:P,id:p,className:Q["rte-file-upload-input"],onChange:y,"aria-label":u?void 0:c,"aria-labelledby":m,disabled:l,accept:z}),e.jsx(we,{disabled:l,variant:"primary",label:G,onClick:D,icon:"upload",iconPosition:"left",ref:S,size:t?"s":"m",className:t?Q["rte-file-upload-button-compact"]:void 0}),e.jsx("div",{style:{width:((C=S.current)==null?void 0:C.offsetWidth)??void 0},children:b==null?void 0:b.map((o,n)=>e.jsx(_e,{file:o,removeFile:()=>H(o),isLoading:U.has(o),isError:(r==null?void 0:r[n])!==void 0,errorMessage:r==null?void 0:r[n],compact:t},o.lastModified+n))})]})};T.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const is={title:"Composants/FileUpload",component:T,tags:["autodocs"]},g={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,t]=i.useState([]),c=a=>{t(a)},u=a=>{t(d=>d.filter(l=>l!==a))};return e.jsx(T,{...s,onChange:c,onRemovingFile:u})}},W={args:{...g.args,id:"file-upload-2",disabled:!0}},K={args:{...g.args,id:"file-upload-3",multiple:!0}},$={args:{...g.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[t,c]=i.useState([]),u=d=>{c(d)},a=d=>{c(l=>l.filter(R=>R!==d))};return e.jsx(T,{...s,onChange:u,onRemovingFile:a,isError:t.length===0,showAssistiveText:t.length===0})}},M={args:{...g.args,id:"file-upload-5",showLabel:!1}},O={args:{...g.args,id:"file-upload-6",compactSpacing:!0}},V={args:{...g.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[t,c]=i.useState(void 0),[,u]=i.useState([]),[a,d]=i.useState([]),l=h=>{if(u(h),h.some(F=>F.size>1*1024)){c("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const F=h.map(x=>x.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");c("Un ou plusieurs fichiers dépassent la limite de 1Ko."),d(F)}},R=h=>{u(F=>{const x=F.filter(L=>L!==h);return d(x.filter(L=>L.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),x})};return e.jsx(T,{...s,onChange:l,isError:!!t,assistiveTextLabel:t,errorFilesMap:a,onRemovingFile:R})}},k={args:{...g.args},render:s=>{const[,t]=i.useState([]),c=a=>new Promise(d=>{t(l=>[...l,a]),setTimeout(()=>{d()},5e3)}),u=a=>{t(d=>d.filter(l=>l!==a))};return e.jsx(T,{...s,multiple:!0,onUpload:c,onRemovingFile:u})}};var Z,ee,se;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(se=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var te,re,ne;W.parameters={...W.parameters,docs:{...(te=W.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(ne=(re=W.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ie,ae,le;K.parameters={...K.parameters,docs:{...(ie=K.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(le=(ae=K.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var oe,ce,de;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(de=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,fe,pe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(pe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var me,ge,he;O.parameters={...O.parameters,docs:{...(me=O.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(he=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Fe,ve,xe;V.parameters={...V.parameters,docs:{...(Fe=V.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(xe=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Se,be,Ee;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(Ee=(be=k.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};const as=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{k as Async,O as CompactSpacing,g as Default,W as Disabled,V as MaxSizeExceeded,K as MultipleFiles,$ as WithError,M as WithoutLabel,as as __namedExportsOrder,is as default};
