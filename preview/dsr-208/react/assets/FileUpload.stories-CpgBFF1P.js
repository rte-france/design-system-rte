import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-G8LIXM5I.js";import{A as he,R as Fe}from"./RequiredIndicator-CnxxEbTK.js";import{B as Ee}from"./Button-8ghNAy9-.js";import{I as H}from"./Icon-DOkBvtOM.js";import{I as _e}from"./IconButton-Q4rJrqsf.js";import{L as we}from"./Loader-C5nDcuiL.js";import{T as je}from"./Tooltip-BDlBB6rF.js";import{v as Re}from"./v4-C6aID195.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const Le=e=>t=>e.measureText(t).width,Ie=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,ze=e=>{const t=e.lastIndexOf("."),u=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:u}},R={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},ve=({file:e,removeFile:t,isError:u,errorMessage:x,compact:m,isLoading:E})=>{const d=l.useRef(null),_=l.useRef(null),w=l.useRef(null),g=l.useRef(null),f=l.useRef(null),S=l.useRef(null),[L,C]=l.useState(e.name),[B,b]=l.useState(!1),p=i=>{const r=I(),n="...",{baseName:o,fileType:h}=ze(i),F=`${n}${h}`;if(r<=0)return F;{const y=d.current;if(y){const M=z(y),j=Le(M);if(j(i)<=r)return i;const T=r-j(n)-j(h);if(T<=0)return F;let a=0,c=o.length;for(;a<c;){const G=Math.ceil((a+c)/2),{startStr:Se,endStr:be}=q(G,o);j(Se)+j(be)<=T?a=G:c=G-1}if(a===0)return F;const N=Math.ceil(a/2),O=Math.floor(a/2),P=N>0?o.substring(0,N):"",xe=O>0?o.substring(o.length-O):"";return`${P}${n}${xe}${h}`}else return i}},I=()=>{const i=d.current,r=g.current,n=S.current;if(!i||!r||!n)return 0;{const o=parseFloat(window.getComputedStyle(n).gap)||0;return n.offsetWidth-r.offsetWidth-o}},z=i=>{const n=document.createElement("canvas").getContext("2d"),o=window.getComputedStyle(i);return n.font=`${o.fontWeight} ${o.fontSize} ${o.fontFamily}`,n},q=(i,r)=>{const n=Math.ceil(i/2),o=Math.floor(i/2),h=n>0?r.substring(0,n):"",F=o>0?r.substring(r.length-o):"";return{startStr:h,endStr:F}};return l.useEffect(()=>{const i=p(e.name);b(i!==e.name),C(i)},[e]),s.jsx(s.Fragment,{children:s.jsxs("div",{ref:f,className:R["rte-file-upload-file-container"],children:[s.jsxs("div",{ref:f,className:R["rte-file-upload-file"],children:[s.jsx("div",{className:R["rte-file-upload-file-icon"],ref:w,children:E?s.jsx(we,{size:"small"}):s.jsx(s.Fragment,{children:u?s.jsx(H,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(H,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:S,className:R["rte-file-upload-file-info"],children:[B?s.jsx(je,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:d,className:R["rte-file-upload-file-name"],children:L})}):s.jsx("span",{ref:d,className:R["rte-file-upload-file-name"],children:e.name}),s.jsx("span",{ref:g,className:R["rte-file-upload-file-size"],"data-is-compact":m,children:Ie(e.size)})]}),s.jsx(_e,{ref:_,name:"close",variant:"neutral",onClick:t,size:"m"})]},e.name),x&&s.jsx(he,{label:x,appearance:"error"})]},e.name)})};ve.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const W={"rte-file-upload-label":"_rte-file-upload-label_p9wg0_1","rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},K=({id:e,compactSpacing:t,label:u,showLabel:x=!0,required:m=!1,showLabelRequirement:E=!1,disabled:d=!1,assistiveTextLabel:_,assistiveAppearance:w="description",showAssistiveIcon:g,assistiveTextLink:f,isError:S,multiple:L=!1,buttonLabel:C,accept:B,onChange:b,errorFilesMap:p=[],onRemovingFile:I})=>{var T;const z=e??Re(),q=l.useRef(null),i=l.useRef(null),[r,n]=l.useState(null),[o,h]=l.useState(!1),F=_&&w&&(p==null?void 0:p.length)===0;console.log("shouldDisplayAssistiveText",F,{assistiveTextLabel:_,assistiveAppearance:w,errorFilesMap:p});const y=a=>{h(!0);const c=Array.from(a.target.files||[]);b==null||b(c),n(c),h(!1)},M=a=>{a.stopPropagation();const c=document.getElementById(z);c&&(h(!1),c.click())};if(C===void 0)return console.warn("FileUpload: Le prop 'buttonLabel' est requis."),null;const j=a=>{if(r){const c=r.indexOf(a);if(c!==-1){const N=r.filter((O,P)=>P!==c);n(N),I==null||I(a),b==null||b(N)}}};return s.jsxs("div",{className:W["rte-file-upload"],children:[x&&s.jsxs("label",{htmlFor:z,id:u,className:W["rte-file-upload-label"],children:[s.jsx("span",{children:u}),s.jsx(Fe,{required:m,showLabelRequirement:E})]}),F&&s.jsx(he,{label:_,appearance:S?"error":w,showIcon:g,href:f}),s.jsx("input",{ref:i,type:"file",multiple:L,id:z,className:W["rte-file-upload-input"],onChange:y,"aria-labelledby":u,disabled:d,accept:B}),s.jsx(Ee,{disabled:d,variant:"primary",label:C,onClick:M,icon:"upload",iconPosition:"left",ref:q,size:t?"s":"m",className:t?W["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((T=q.current)==null?void 0:T.offsetWidth)??void 0},children:r==null?void 0:r.map((a,c)=>s.jsx(ve,{file:a,removeFile:()=>j(a),isLoading:o,isError:(p==null?void 0:p[c])!==void 0,errorMessage:p==null?void 0:p[c],compact:t},a.name))})]})};K.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const Qe={title:"Composants/FileUpload",component:K},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=l.useState([]),u=m=>{t(m),console.log("Selected files:",m)},x=m=>{t(E=>E.filter(d=>d!==m))};return s.jsx(K,{...e,onChange:u,onRemovingFile:x})}},$={args:{...v.args,id:"file-upload-2",disabled:!0}},U={args:{...v.args,id:"file-upload-3",multiple:!0}},D={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."}},A={args:{...v.args,id:"file-upload-5",showLabel:!1}},V={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},k={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,u]=l.useState(void 0),[x,m]=l.useState([]),[E,d]=l.useState([]),_=g=>{m(g),g.some(f=>f.size>1*1024)?(u("Un ou plusieurs fichiers dépassent la limite de 1Ko."),g.forEach(f=>{f.size>1*1024&&d(S=>[...S,"Ce fichier dépasse la limite de 1Ko."])})):(u(void 0),d([]))},w=g=>{m(f=>f.filter(S=>S!==g)),d(f=>f.filter((S,L)=>x[L]!==g))};return s.jsx(K,{...e,onChange:_,isError:!!t,assistiveTextLabel:t,errorFilesMap:E,onRemovingFile:w})}};var J,Q,X;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
      console.log("Selected files:", files);
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
    };
    return <FileUpload {...args} onChange={handleChange} onRemovingFile={handleRemovingFile} />;
  }
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;$.parameters={...$.parameters,docs:{...(Y=$.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(ee=(Z=$.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;U.parameters={...U.parameters,docs:{...(se=U.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(re=(te=U.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,le,ie;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-4",
    isError: true,
    assistiveTextLabel: "Veuillez sélectionner un fichier avant de soumettre."
  }
}`,...(ie=(le=D.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ne,oe,ce;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(ce=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ue,fe;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(fe=(ue=V.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;k.parameters={...k.parameters,docs:{...(pe=k.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-7",
    assistiveTextLabel: "Un ou plusieurs fichiers dépassent la limite de 1Ko.",
    isError: true
  },
  render: args => {
    const [error, setError] = useState<string | undefined>(undefined);
    const [files, setFiles] = useState<File[]>([]);
    const [errorFilesMap, setErrorFilesMap] = useState<string[]>([]);
    const handleChange = (files: File[]) => {
      setFiles(files);
      if (files.some(file => file.size > 1 * 1024)) {
        setError("Un ou plusieurs fichiers dépassent la limite de 1Ko.");
        files.forEach(file => {
          if (file.size > 1 * 1024) {
            setErrorFilesMap(prev => [...prev, "Ce fichier dépasse la limite de 1Ko."]);
          }
        });
      } else {
        setError(undefined);
        setErrorFilesMap([]);
      }
    };
    const handleRemovingFile = (file: File) => {
      setFiles(prev => prev.filter(f => f !== file));
      setErrorFilesMap(prev => prev.filter((_, index) => files[index] !== file));
    };
    return <FileUpload {...args} onChange={handleChange} isError={!!error} assistiveTextLabel={error} errorFilesMap={errorFilesMap} onRemovingFile={handleRemovingFile} />;
  }
}`,...(ge=(me=k.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};const Xe=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded"];export{V as CompactSpacing,v as Default,$ as Disabled,k as MaxSizeExceeded,U as MultipleFiles,D as WithError,A as WithoutLabel,Xe as __namedExportsOrder,Qe as default};
