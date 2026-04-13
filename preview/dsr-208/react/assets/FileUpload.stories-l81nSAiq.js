import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-G8LIXM5I.js";import{v as Re}from"./v4-C6aID195.js";import{A as Ee,R as je}from"./RequiredIndicator-CnxxEbTK.js";import{B as Le}from"./Button-8ghNAy9-.js";import{I as Q}from"./Icon-DOkBvtOM.js";import{I as Ie}from"./IconButton-Q4rJrqsf.js";import{L as ze}from"./Loader-BciKA4ZH.js";import{T as Te}from"./Tooltip-BDlBB6rF.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Link-DC5e5ANE.js";import"./index-DSdvzt-y.js";import"./common-button.constants-eNlmcvUj.js";import"./Badge-CyCYn5x0.js";import"./auto-placement-hBju0MTR.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const X=()=>Re(),Ce=e=>t=>e.measureText(t).width,Ne=e=>e<1024?`${e} o`:e<1024**2?`${(e/1024).toFixed(2)} Ko`:e<1024**3?`${(e/1024**2).toFixed(2)} Mo`:`${(e/1024**3).toFixed(2)} Go`,ye=e=>{const t=e.lastIndexOf("."),f=t!==-1?e.substring(t):"";return{baseName:t!==-1?e.substring(0,t):e,fileType:f}},I={"rte-file-upload-file-container":"_rte-file-upload-file-container_1vw2s_1","rte-file-upload-file":"_rte-file-upload-file_1vw2s_1","rte-file-upload-file-icon":"_rte-file-upload-file-icon_1vw2s_17","rte-file-upload-file-info":"_rte-file-upload-file-info_1vw2s_23","rte-file-upload-file-name":"_rte-file-upload-file-name_1vw2s_32","rte-file-upload-file-size":"_rte-file-upload-file-size_1vw2s_54"},we=({file:e,removeFile:t,isError:f,errorMessage:p,compact:l,isLoading:g})=>{const o=a.useRef(null),z=a.useRef(null),x=a.useRef(null),F=a.useRef(null),S=a.useRef(null),[j,G]=a.useState(e.name),[H,J]=a.useState(!1),b=r=>{const d=W(),n="...",{baseName:i,fileType:m}=ye(r),E=`${n}${m}`;if(d<=0)return E;{const q=o.current;if(q){const $=h(q),L=Ce($);if(L(r)<=d)return r;const A=d-L(n)-L(m);if(A<=0)return E;let w=0,N=i.length;for(;w<N;){const R=Math.ceil((w+N)/2),{startStr:T,endStr:_e}=C(R,i);L(T)+L(_e)<=A?w=R:N=R-1}if(w===0)return E;const y=Math.ceil(w/2),u=Math.floor(w/2),c=y>0?i.substring(0,y):"",_=u>0?i.substring(i.length-u):"";return`${c}${n}${_}${m}`}else return r}},W=()=>{const r=o.current,d=F.current,n=S.current;if(!r||!d||!n)return 0;{const i=parseFloat(window.getComputedStyle(n).gap)||0;return n.offsetWidth-d.offsetWidth-i}},h=r=>{const n=document.createElement("canvas").getContext("2d"),i=window.getComputedStyle(r);return n.font=`${i.fontWeight} ${i.fontSize} ${i.fontFamily}`,n},C=(r,d)=>{const n=Math.ceil(r/2),i=Math.floor(r/2),m=n>0?d.substring(0,n):"",E=i>0?d.substring(d.length-i):"";return{startStr:m,endStr:E}};return a.useEffect(()=>{const r=b(e.name);J(r!==e.name),G(r)},[e]),s.jsx(s.Fragment,{children:s.jsxs("div",{className:I["rte-file-upload-file-container"],children:[s.jsxs("div",{className:I["rte-file-upload-file"],children:[s.jsx("div",{className:I["rte-file-upload-file-icon"],ref:x,children:g?s.jsx(ze,{size:"small",showLabel:!1}):s.jsx(s.Fragment,{children:f?s.jsx(Q,{name:"error",size:20,color:"var(--content-danger-default)"}):s.jsx(Q,{name:"check-circle",size:20,color:"var(--content-success-default)"})})}),s.jsxs("div",{ref:S,className:I["rte-file-upload-file-info"],children:[H?s.jsx(Te,{label:e.name,alignment:"center",arrow:!0,shouldFocusTrigger:!1,triggerStyles:{maxWidth:"220px"},children:s.jsx("span",{ref:o,className:I["rte-file-upload-file-name"],"data-is-compact":l,children:j})}):s.jsx("span",{ref:o,className:I["rte-file-upload-file-name"],"data-is-compact":l,children:e.name}),s.jsx("span",{ref:F,className:I["rte-file-upload-file-size"],"data-is-compact":l,children:Ne(e.size)})]}),s.jsx(Ie,{ref:z,name:"close",variant:"neutral",onClick:t,size:"m"})]}),p&&s.jsx(Ee,{label:p,appearance:"error"})]})})};we.__docgenInfo={description:"",methods:[],displayName:"FileItem"};const D={"rte-file-upload-label":"_rte-file-upload-label_p9wg0_1","rte-file-upload-input":"_rte-file-upload-input_p9wg0_19","rte-file-upload-button-compact":"_rte-file-upload-button-compact_p9wg0_23"},U=({id:e,compactSpacing:t,label:f,showLabel:p=!0,required:l=!1,showLabelRequirement:g=!1,disabled:o=!1,assistiveTextLabel:z,assistiveAppearance:x="description",showAssistiveIcon:F,assistiveTextLink:S,isError:j,multiple:G=!1,buttonLabel:H,accept:J,onChange:b,onUpload:W,errorFilesMap:h=[],onRemovingFile:C})=>{var y;const r=e??X(),d=X(),n=a.useRef(null),i=a.useRef(null),[m,E]=a.useState(null),[q,$]=a.useState(new Set),L=z&&x&&(h==null?void 0:h.length)===0,A=u=>{const c=Array.from(u.target.files||[]);b==null||b(c),E(c),W&&c.forEach(_=>{$(R=>new Set(R).add(_)),W(_).finally(()=>{$(R=>{const T=new Set(R);return T.delete(_),T})})})},w=u=>{u.stopPropagation();const c=document.getElementById(r);c&&c.click()},N=u=>{if(m){const c=m.indexOf(u);if(c!==-1){const _=m.filter((R,T)=>T!==c);E(_),C==null||C(u),b==null||b(_)}}};return s.jsxs("div",{className:D["rte-file-upload"],children:[p&&s.jsxs("label",{htmlFor:r,id:d,className:D["rte-file-upload-label"],children:[s.jsx("span",{children:f}),s.jsx(je,{required:l,showLabelRequirement:g})]}),L&&s.jsx(Ee,{label:z,appearance:j?"error":x,showIcon:F,href:S}),s.jsx("input",{ref:i,type:"file",multiple:G,id:r,className:D["rte-file-upload-input"],onChange:A,"aria-label":p?void 0:f,"aria-labelledby":d,disabled:o,accept:J}),s.jsx(Le,{disabled:o,variant:"primary",label:H,onClick:w,icon:"upload",iconPosition:"left",ref:n,size:t?"s":"m",className:t?D["rte-file-upload-button-compact"]:void 0}),s.jsx("div",{style:{width:((y=n.current)==null?void 0:y.offsetWidth)??void 0},children:m==null?void 0:m.map((u,c)=>s.jsx(we,{file:u,removeFile:()=>N(u),isLoading:q.has(u),isError:(h==null?void 0:h[c])!==void 0,errorMessage:h==null?void 0:h[c],compact:t},u.lastModified+c))})]})};U.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{showLabel:{defaultValue:{value:"true",computed:!1},required:!1},required:{defaultValue:{value:"false",computed:!1},required:!1},showLabelRequirement:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},assistiveAppearance:{defaultValue:{value:'"description"',computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},errorFilesMap:{defaultValue:{value:"[]",computed:!1},required:!1}}};const es={title:"Composants/FileUpload",component:U},v={args:{id:"file-upload-1",label:"Uploader vos documents",compactSpacing:!1,showLabel:!0,showLabelRequirement:!1,required:!0,disabled:!1,assistiveTextLabel:"Formats acceptés : .jpg, .png, .pdf",assistiveAppearance:"description",showAssistiveIcon:!0,assistiveTextLink:"#",isError:!1,multiple:!1,buttonLabel:"Sélectionner un fichier"},render:e=>{const[,t]=a.useState([]),f=l=>{t(l)},p=l=>{t(g=>g.filter(o=>o!==l))};return s.jsx(U,{...e,onChange:f,onRemovingFile:p})}},K={args:{...v.args,id:"file-upload-2",disabled:!0}},M={args:{...v.args,id:"file-upload-3",multiple:!0}},V={args:{...v.args,id:"file-upload-4",isError:!0,assistiveTextLabel:"Veuillez sélectionner un fichier avant de soumettre."}},k={args:{...v.args,id:"file-upload-5",showLabel:!1}},B={args:{...v.args,id:"file-upload-6",compactSpacing:!0}},O={args:{...v.args,id:"file-upload-7",assistiveTextLabel:"Un ou plusieurs fichiers dépassent la limite de 1Ko.",isError:!0},render:e=>{const[t,f]=a.useState(void 0),[,p]=a.useState([]),[l,g]=a.useState([]),o=x=>{if(p(x),x.some(F=>F.size>1*1024)){f("Un ou plusieurs fichiers dépassent la limite de 1Ko.");const F=x.map(S=>S.size>1*1024?"Ce fichier dépasse la limite de 1Ko.":"");f("Un ou plusieurs fichiers dépassent la limite de 1Ko."),g(F)}},z=x=>{p(F=>{const S=F.filter(j=>j!==x);return g(S.filter(j=>j.size>1*1024).map(()=>"Ce fichier dépasse la limite de 1Ko.")),S})};return s.jsx(U,{...e,onChange:o,isError:!!t,assistiveTextLabel:t,errorFilesMap:l,onRemovingFile:z})}},P={args:{...v.args},render:e=>{const[,t]=a.useState([]),f=l=>new Promise(g=>{t(o=>[...o,l]),setTimeout(()=>{g()},5e3)}),p=l=>{t(g=>g.filter(o=>o!==l))};return s.jsx(U,{...e,multiple:!0,onUpload:f,onRemovingFile:p})}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var se,te,re;K.parameters={...K.parameters,docs:{...(se=K.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-2",
    disabled: true
  }
}`,...(re=(te=K.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,ie;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-3",
    multiple: true
  }
}`,...(ie=(ne=M.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,oe,ce;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-4",
    isError: true,
    assistiveTextLabel: "Veuillez sélectionner un fichier avant de soumettre."
  }
}`,...(ce=(oe=V.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var de,ue,fe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-5",
    showLabel: false
  }
}`,...(fe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:fe.source}}};var pe,me,ge;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    id: "file-upload-6",
    compactSpacing: true
  }
}`,...(ge=(me=B.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var he,ve,xe;O.parameters={...O.parameters,docs:{...(he=O.parameters)==null?void 0:he.docs,source:{originalSource:`{
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
}`,...(xe=(ve=O.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var Fe,Se,be;P.parameters={...P.parameters,docs:{...(Fe=P.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(be=(Se=P.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};const ss=["Default","Disabled","MultipleFiles","WithError","WithoutLabel","CompactSpacing","MaxSizeExceeded","Async"];export{P as Async,B as CompactSpacing,v as Default,K as Disabled,O as MaxSizeExceeded,M as MultipleFiles,V as WithError,k as WithoutLabel,ss as __namedExportsOrder,es as default};
