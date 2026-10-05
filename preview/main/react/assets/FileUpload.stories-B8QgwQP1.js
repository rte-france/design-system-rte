import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-G8LIXM5I.js";import"./timepicker.constants-CynrC_9x.js";import{g as ie}from"./id.utils-DsO5Uws7.js";import{A as ke,L as Ve}from"./Label-CxXwQe8R.js";import{B as Pe}from"./Button-kS01vuC-.js";import{g as Be}from"./string.utils-BTbePzEe.js";import{I as oe}from"./Icon-VewZnR13.js";import{I as Ge}from"./IconButton-CqYdVntE.js";import{L as He}from"./Loader-D0GcWhvU.js";import{T as Je}from"./Tooltip-f8PYt3ME.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-CUYEWJ-E.js";import"./link.constants-kcvANsJQ.js";import"./index-DJ8f9STe.js";import"./RequiredIndicator-Bmo4UcWJ.js";import"./common-button.constants-CJxonyEE.js";import"./Badge-BP1JXoFH.js";import"./IconButton.module-DsipBz7u.js";import"./useGetOverlayLayerLevel-58-DKw2q.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BbrPNczc.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const le={LOADING:"Envoi en cours",SUCCESS:"Fichier envoyé",ERROR:"Erreur"},Qe=s=>s<1024?`${s} o`:s<1024**2?`${(s/1024).toFixed(2)} Ko`:s<1024**3?`${(s/1024**2).toFixed(2)} Mo`:`${(s/1024**3).toFixed(2)} Go`,Xe=s=>{const r=s.lastIndexOf("."),i=r!==-1?s.substring(r):"";return{baseName:r!==-1?s.substring(0,r):s,fileType:i}},E={"rte-file-upload-file-container":"_rte-file-upload-file-container_bwrvp_1","rte-file-upload-file":"_rte-file-upload-file_bwrvp_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_bwrvp_24","rte-file-upload-file-name-slot":"_rte-file-upload-file-name-slot_bwrvp_31","rte-file-upload-file-name":"_rte-file-upload-file-name_bwrvp_31","rte-file-upload-file-size":"_rte-file-upload-file-size_bwrvp_62","sr-only":"_sr-only_bwrvp_82"},Ye={display:"block",maxWidth:"100%",minWidth:0,overflow:"hidden",width:"100%"},De=({file:s,removeFile:r,isError:i,errorMessage:o,compact:l,isLoading:u,isRemoving:f})=>{const c=n.useRef(null),p=n.useRef(null),m=n.useRef(null),T=n.useRef(null),y=n.useRef(ie()).current,[W,te]=n.useState(s.name),[re,C]=n.useState(!1),K=()=>{var a;return((a=p.current)==null?void 0:a.clientWidth)??0},z=(a,h)=>{const w=Math.ceil(a/2),g=Math.floor(a/2),v=w>0?h.substring(0,w):"",_=g>0?h.substring(h.length-g):"";return{startStr:v,endStr:_}},A=n.useCallback(a=>{const h=K(),w="...",{baseName:g,fileType:v}=Xe(a),_=`${w}${v}`;if(h<=0)return _;const V=c.current;if(!V)return a;const x=Be(V);if(x(a)<=h)return a;const O=h-x(w)-x(v);if(O<=0)return _;let R=0,k=g.length;for(;R<k;){const $=Math.ceil((R+k)/2),{startStr:ne,endStr:ae}=z($,g);x(ne)+x(ae)<=O?R=$:k=$-1}if(R===0)return _;const P=Math.ceil(R/2),N=Math.floor(R/2),D=P>0?g.substring(0,P):"",q=N>0?g.substring(g.length-N):"";return`${D}${w}${q}${v}`},[]),I=n.useCallback(()=>{const a=A(s.name);C(a!==s.name),te(a)},[s.name,A]);return n.useEffect(()=>{I();const a=m.current;if(!a)return;const h=new ResizeObserver(()=>I());return h.observe(a),()=>h.disconnect()},[I]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:E["rte-file-upload-file-container"],"data-is-removing":f,children:[e.jsxs("div",{ref:m,className:E["rte-file-upload-file"],children:[e.jsx("div",{className:E["rte-file-upload-file-icon"],"aria-live":"polite","aria-atomic":"true",children:u?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:E["sr-only"],children:[le.LOADING," : ",s.name]}),e.jsx(He,{size:"small","aria-hidden":"true"})]}):e.jsx(e.Fragment,{children:i?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:E["sr-only"],children:[le.ERROR," : ",s.name]}),e.jsx(oe,{"aria-hidden":"true",name:"error",size:20,color:"var(--content-danger-default)"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:E["sr-only"],children:[le.SUCCESS," : ",s.name]}),e.jsx(oe,{"aria-hidden":"true",name:"check-circle",size:20,color:"var(--content-success-default)"})]})})}),e.jsx("div",{ref:p,className:E["rte-file-upload-file-name-slot"],children:re?e.jsx(Je,{label:s.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:Ye,children:e.jsx("span",{ref:c,className:E["rte-file-upload-file-name"],"data-is-compact":l,children:W})}):e.jsx("span",{ref:c,className:E["rte-file-upload-file-name"],"data-is-compact":l,children:s.name})}),e.jsx("span",{ref:T,className:E["rte-file-upload-file-size"],"data-is-compact":l,children:Qe(s.size)}),e.jsx(Ge,{name:"close",variant:"neutral",onClick:r,size:"m","aria-label":"Supprimer le fichier sélectionné : "+s.name,"aria-describedby":o?y:void 0})]}),o&&e.jsx("div",{role:"alert","aria-live":"assertive",children:e.jsx(ke,{id:y,label:o,appearance:"error"})})]})})};De.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const U={"rte-file-upload":"_rte-file-upload_1k5f2_1","rte-file-upload-button-slot":"_rte-file-upload-button-slot_1k5f2_10","rte-file-upload-button":"_rte-file-upload-button_1k5f2_10","rte-file-upload-files":"_rte-file-upload-files_1k5f2_25","rte-file-upload-input":"_rte-file-upload-input_1k5f2_30","rte-file-upload-button-compact":"_rte-file-upload-button-compact_1k5f2_42","sr-only":"_sr-only_1k5f2_46"},j=({id:s,compactSpacing:r,label:i,required:o=!1,showLabelRequirement:l=!1,disabled:u=!1,assistiveTextLabel:f,assistiveAppearance:c="description",showAssistiveText:p=!0,showAssistiveIcon:m,assistiveTextLink:T,isError:y,multiple:W=!1,buttonLabel:te,accept:re,onChange:C,onUpload:K,uploadErrorMessage:z="Erreur lors du téléchargement du fichier.",errorFilesMap:A=[],onRemovingFile:I})=>{const a=s??ie(),h=ie(),w=n.useRef(null),g=n.useRef(null),[v,_]=n.useState(null),[V,x]=n.useState(new Set),[O,R]=n.useState(new Set),[k,P]=n.useState(""),N=n.useRef(new Map),[D,q]=n.useState(new Map);n.useEffect(()=>()=>{N.current.forEach(t=>clearTimeout(t))},[]);const $=p&&f&&c&&A.length===0&&D.size===0,ne=async t=>{const d=Array.from(t.target.files||[]);C==null||C(d),W?_(F=>F?[...F,...d]:d):(_(d),q(new Map)),K&&await Promise.all(d.map(F=>Ke(F)))},ae=t=>{t.stopPropagation();const d=document.getElementById(a);d&&d.click()},We=t=>{var d;if(v&&!O.has(t)){const F=v.indexOf(t);if(F!==-1){const S=v.filter((M,L)=>L!==F);R(M=>new Set(M).add(t)),P(`${t.name} a été supprimé. ${S.length} fichier${S.length>1?"s":""} restant${S.length>1?"s":""}.`),g.current&&(g.current.value=""),(d=w.current)==null||d.focus();const B=setTimeout(()=>{_(S),R(M=>{const L=new Set(M);return L.delete(t),L}),x(M=>{const L=new Set(M);return L.delete(t),L}),q(M=>{const L=new Map(M);return L.delete(t),L}),I==null||I(t),C==null||C(S),N.current.delete(t)},300);N.current.set(t,B)}}},Ke=t=>(x(d=>new Set(d).add(t)),K(t).then(()=>{x(d=>{const F=new Set(d);return F.delete(t),F})}).catch(d=>{x(S=>{const B=new Set(S);return B.delete(t),B});const F=typeof z=="function"?z(t,d):z;q(S=>new Map(S).set(t,F))}));return e.jsxs("div",{className:U["rte-file-upload"],children:[e.jsx("input",{ref:g,type:"file",multiple:W,id:a,className:U["rte-file-upload-input"],onChange:ne,"aria-labelledby":i?h:`${a}-button`,"aria-describedby":$?`${a}-assistive-text`:void 0,disabled:u,accept:re}),i&&e.jsx(Ve,{htmlFor:a,id:h,label:i,required:o,showLabelRequirement:l}),$&&e.jsx(ke,{id:`${a}-assistive-text`,label:f,appearance:y?"error":c,showIcon:m,href:T}),e.jsx("div",{className:U["rte-file-upload-button-slot"],children:e.jsx(Pe,{id:`${a}-button`,disabled:u,variant:"primary",label:te,onClick:ae,icon:"upload",iconPosition:"left",ref:w,size:r?"s":"m",className:r?`${U["rte-file-upload-button"]} ${U["rte-file-upload-button-compact"]}`:U["rte-file-upload-button"]})}),e.jsx("div",{className:U["rte-file-upload-files"],children:v==null?void 0:v.map((t,d)=>e.jsx(De,{file:t,removeFile:()=>We(t),isLoading:V.has(t),isRemoving:O.has(t),isError:A[d]!==void 0||D.has(t),errorMessage:D.get(t)??A[d],compact:r},t.lastModified+d))}),e.jsx("div",{role:"status","aria-live":"polite","aria-atomic":"true",className:U["sr-only"],children:k})]})};j.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},showAssistiveText:{defaultValue:{value:"true",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},uploadErrorMessage:{defaultValue:{value:'"Erreur lors du téléchargement du fichier."',computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const qe={display:"inline-block",overflow:"visible",outline:"1px dashed #9747FF"};function Ze(s){return n.useEffect(()=>{var l;const r=document.getElementById(s.id);if(!r||(l=r.files)!=null&&l.length)return;const i=new File([new ArrayBuffer(3*1024*1024)],"NomDeFichierLongExample.pdf",{type:"application/pdf"}),o=new DataTransfer;o.items.add(i),r.files=o.files,r.dispatchEvent(new Event("change",{bubbles:!0}))},[s.id]),e.jsx("div",{style:qe,children:e.jsx(j,{...s,onChange:()=>{}})})}const _s={title:"Composants/FileUpload",component:j,tags:["autodocs"]},b={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:s=>{const[,r]=n.useState([]),i=l=>{r(l)},o=l=>{r(u=>u.filter(f=>f!==l))};return e.jsx(j,{...s,onChange:i,onRemovingFile:o})}},G={args:{...b.args,id:"file-upload-2",disabled:!0}},H={args:{...b.args,id:"file-upload-3",multiple:!0},render:s=>{const[,r]=n.useState([]),i=c=>{r(c)},o=n.useRef(0),l=(c,p)=>p instanceof Error&&p.message==="FILE_TOO_LARGE"?`${c.name} dépasse la taille maximale autorisée.`:`Le téléversement de ${c.name} a échoué.`,u=c=>new Promise((p,m)=>{o.current%2===0?setTimeout(()=>{m(new Error("FILE_TOO_LARGE")),console.log("File not uploaded:",c)},5e3):setTimeout(()=>{p(),console.log("File not uploaded:",c)},5e3),o.current+=1}),f=c=>{r(p=>p.filter(m=>m!==c))};return e.jsx(j,{...s,onUpload:u,uploadErrorMessage:l,onChange:i,onRemovingFile:f})}},J={args:{...b.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."},render:s=>{const[r,i]=n.useState([]),o=u=>{i(u)},l=u=>{i(f=>f.filter(c=>c!==u))};return e.jsx(j,{...s,onChange:o,onRemovingFile:l,isError:r.length===0,showAssistiveText:r.length===0})}},Q={args:{...b.args,id:"file-upload-5",showLabel:!1}},X={args:{...b.args,id:"file-upload-6",compactSpacing:!0}},Y={args:{...b.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:s=>{const[r,i]=n.useState(void 0),[,o]=n.useState([]),[l,u]=n.useState([]),f=p=>{if(o(p),p.some(m=>m.size>1*1024)){i("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const m=p.map(T=>T.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");i("Un ou plusieurs fichiers dépassent la limite de 1Ko."),u(m)}},c=p=>{o(m=>{const T=m.filter(y=>y!==p);return u(T.filter(y=>y.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),T})};return e.jsx(j,{...s,onChange:f,isError:!!r,assistiveTextLabel:r,errorFilesMap:l,onRemovingFile:c})}},Z={args:{id:"file-upload-min-width",label:"Label",buttonLabel:"Sélectionner un fichier",showLabel:!0,showAssistiveText:!1,required:!1,compactSpacing:!1,multiple:!1,disabled:!1},render:s=>e.jsx(Ze,{...s})},ee={args:{id:"file-upload-content-width",label:"Label Label Label Label Label Label Label Label Label Label",buttonLabel:"Sélectionner un fichier",showLabel:!0,showAssistiveText:!1,required:!1,compactSpacing:!1,multiple:!1,disabled:!1},render:s=>e.jsx("div",{style:qe,children:e.jsx(j,{...s,onChange:()=>{}})})},se={args:{...b.args},render:s=>{const[,r]=n.useState([]),i=l=>new Promise(u=>{r(f=>[...f,l]),setTimeout(()=>{u()},5e3)}),o=l=>{r(u=>u.filter(f=>f!==l))};return e.jsx(j,{...s,multiple:!0,onUpload:i,onRemovingFile:o})}};var de,ce,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ue=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,fe,me;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(me=(fe=G.parameters)==null?void 0:fe.docs)==null?void 0:me.source}}};var he,ge,ve;H.parameters={...H.parameters,docs:{...(he=H.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(ve=(ge=H.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var Fe,be,xe;J.parameters={...J.parameters,docs:{...(Fe=J.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(xe=(be=J.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Se,Le,Ee;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(Ee=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var we,_e,Re;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(Re=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:Re.source}}};var je,Te,ye;Y.parameters={...Y.parameters,docs:{...(je=Y.parameters)==null?void 0:je.docs,source:{originalSource:`{
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
}`,...(ye=(Te=Y.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var Ce,Me,Ue;Z.parameters={...Z.parameters,docs:{...(Ce=Z.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    id: "file-upload-min-width",
    label: "Label",
    buttonLabel: "Sélectionner un fichier",
    showLabel: true,
    showAssistiveText: false,
    required: false,
    compactSpacing: false,
    multiple: false,
    disabled: false
  },
  render: args => <FileUploadMinWidthDebugStory {...args} />
}`,...(Ue=(Me=Z.parameters)==null?void 0:Me.docs)==null?void 0:Ue.source}}};var Ie,Ae,Ne;ee.parameters={...ee.parameters,docs:{...(Ie=ee.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    id: "file-upload-content-width",
    label: "Label Label Label Label Label Label Label Label Label Label",
    buttonLabel: "Sélectionner un fichier",
    showLabel: true,
    showAssistiveText: false,
    required: false,
    compactSpacing: false,
    multiple: false,
    disabled: false
  },
  render: args => <div style={fileUploadStoryOutlineStyle}>
      <FileUpload {...args} onChange={() => undefined} />
    </div>
}`,...(Ne=(Ae=ee.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var $e,ze,Oe;se.parameters={...se.parameters,docs:{...($e=se.parameters)==null?void 0:$e.docs,source:{originalSource:`{
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
}`,...(Oe=(ze=se.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};const Rs=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","MinWidth","ContentWidth","Async"];export{se as Async,X as CompactSpacing,ee as ContentWidth,b as Default,G as Disabled,Y as MaxSizeExceeded,Z as MinWidth,H as MultipleFiles,J as WithError,Q as WithoutLabel,Rs as __namedExportsOrder,_s as default};
