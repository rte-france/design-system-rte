import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as f}from"./index-G8LIXM5I.js";import{I as u}from"./Icon-DjEid3Hw.js";import{T as b}from"./Tabs-DuaaZdKR.js";const q=""+new URL("figma-uQbZwkE4.png",import.meta.url).href,w=""+new URL("github-BE0FuR2i.png",import.meta.url).href,p=({title:r,linkFigma:n,linkGithub:a,children:t})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("header",{className:"rte-header",children:e.jsxs("div",{className:"rte-header_content",children:[e.jsx("h1",{className:"rte-title",children:r}),e.jsxs("div",{className:"rte-links",children:[n&&e.jsxs("div",{className:"rte-link_container",children:[e.jsx("img",{src:q,alt:"Lien du Figma",className:"rte-logo"}),e.jsx("a",{href:n,children:" Figma "})]}),a&&e.jsxs("div",{className:"rte-link_container",children:[e.jsx("img",{src:w,alt:"Lien du GitHub",className:"rte-logo"}),e.jsx("a",{href:a,children:" GitHub "})]})]})]})}),e.jsx("div",{children:t})]});p.__docgenInfo={description:"",methods:[],displayName:"HeaderComponent",props:{title:{required:!0,tsType:{name:"string"},description:""},linkFigma:{required:!1,tsType:{name:"string"},description:""},linkGithub:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const o=({id:r,level:n,hasAnchor:a=!0,children:t})=>{const s=n===1?{fontFamily:"Nunito"}:{fontFamily:"Nunito",border:"none"},i=a?`h${n}`:"span";return e.jsx(i,{id:r,style:s,className:"rte-heading h"+n,"data-has-anchor":a,children:t})};o.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{id:{required:!0,tsType:{name:"string"},description:""},level:{required:!0,tsType:{name:"number"},description:""},hasAnchor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const g=({isAccordionOpen:r=!0})=>r?e.jsx(u,{name:"arrow-chevron-down"}):e.jsx(u,{name:"arrow-chevron-right"});g.__docgenInfo={description:"",methods:[],displayName:"AccordionIconToggle",props:{isAccordionOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const m=({tagType:r="status",status:n,color:a,compactSpacing:t,label:s,...i})=>e.jsx("div",{className:"rte-tag","data-tag-type":r,"data-status":n,"data-color":a,"data-compact-spacing":t,...i,children:s&&e.jsx("label",{className:"rte-tag-label","data-compact-spacing":t,children:s})});m.__docgenInfo={description:"",methods:[],displayName:"Tag",props:{tagType:{required:!1,tsType:{name:"union",raw:'"status" | "decorative"',elements:[{name:"literal",value:'"status"'},{name:"literal",value:'"decorative"'}]},description:"",defaultValue:{value:'"status"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"success" | "information" | "warning" | "alert"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"information"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"alert"'}]},description:""},color:{required:!1,tsType:{name:"string"},description:""},compactSpacing:{required:!1,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""}}};const h=({updates:r})=>{const[n,a]=f.useState({});function t(s){a(i=>({...i,[s]:!i[s]}))}return e.jsx("div",{className:"rte-changelog",children:r==null?void 0:r.map(s=>{const i=n[s.version]??!0;return e.jsxs("details",{open:i,onToggle:()=>{t(s.version)},children:[e.jsx("summary",{children:e.jsxs("div",{className:"rte-changelog-summary",children:[e.jsx(g,{isAccordionOpen:i}),e.jsxs("span",{children:["V",s.version," ",e.jsxs("span",{style:{color:"#3E3E3D"},children:["- ",s.date]})]}),e.jsx(m,{tagType:"decorative",label:"Nouveauté",color:"menthe",compactSpacing:!0,style:{marginLeft:"8px"}})]})}),e.jsx("ul",{children:s.changes.map((d,c)=>e.jsx("li",{children:d},c))})]},s.version)})})};h.__docgenInfo={description:"",methods:[],displayName:"Changelog",props:{updates:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ version: string; date: string; changes: string[] }",signature:{properties:[{key:"version",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"changes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:"{ version: string; date: string; changes: string[] }[]"},description:""}}};const N=""+new URL("angular-logo-B11Nbd9J.svg",import.meta.url).href,k=""+new URL("figma-logo-dd-5kVPO.svg",import.meta.url).href,T=""+new URL("react-logo-PPnnn7Z6.svg",import.meta.url).href,R="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='-31.5%200%20319%20319'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20preserveAspectRatio='xMidYMid'%3e%3cdefs%3e%3cpath%20d='M9.87245893,293.324145%20L0.0114611411,30.5732167%20C-0.314208957,21.8955842%206.33948896,14.5413918%2015.0063196,13.9997149%20L238.494389,0.0317105427%20C247.316188,-0.519651867%20254.914637,6.18486163%20255.466,15.0066607%20C255.486773,15.339032%20255.497167,15.6719708%20255.497167,16.0049907%20L255.497167,302.318596%20C255.497167,311.157608%20248.331732,318.323043%20239.492719,318.323043%20C239.253266,318.323043%20239.013844,318.317669%20238.774632,318.306926%20L25.1475605,308.712253%20C16.8276309,308.338578%2010.1847994,301.646603%209.87245893,293.324145%20L9.87245893,293.324145%20Z'%20id='path-1'%3e%3c/path%3e%3c/defs%3e%3cg%3e%3cmask%20id='mask-2'%20fill='white'%3e%3cuse%20xlink:href='%23path-1'%3e%3c/use%3e%3c/mask%3e%3cuse%20fill='%23FF4785'%20fill-rule='nonzero'%20xlink:href='%23path-1'%3e%3c/use%3e%3cpath%20d='M188.665358,39.126973%20L190.191903,2.41148534%20L220.883535,0%20L222.205755,37.8634126%20C222.251771,39.1811466%20221.22084,40.2866846%20219.903106,40.3327009%20C219.338869,40.3524045%20218.785907,40.1715096%20218.342409,39.8221376%20L206.506729,30.4984116%20L192.493574,41.1282444%20C191.443077,41.9251106%20189.945493,41.7195021%20189.148627,40.6690048%20C188.813185,40.2267976%20188.6423,39.6815326%20188.665358,39.126973%20Z%20M149.413703,119.980309%20C149.413703,126.206975%20191.355678,123.222696%20196.986019,118.848893%20C196.986019,76.4467826%20174.234041,54.1651411%20132.57133,54.1651411%20C90.9086182,54.1651411%2067.5656805,76.7934542%2067.5656805,110.735941%20C67.5656805,169.85244%20147.345341,170.983856%20147.345341,203.229219%20C147.345341,212.280549%20142.913138,217.654777%20133.162291,217.654777%20C120.456641,217.654777%20115.433477,211.165914%20116.024438,189.103298%20C116.024438,184.317101%2067.5656805,182.824962%2066.0882793,189.103298%20C62.3262146,242.56887%2095.6363019,257.990394%20133.753251,257.990394%20C170.688279,257.990394%20199.645341,238.303123%20199.645341,202.663511%20C199.645341,139.304202%20118.683759,141.001326%20118.683759,109.604526%20C118.683759,96.8760922%20128.139127,95.178968%20133.753251,95.178968%20C139.662855,95.178968%20150.300143,96.2205679%20149.413703,119.980309%20Z'%20fill='%23FFFFFF'%20fill-rule='nonzero'%20mask='url(%23mask-2)'%3e%3c/path%3e%3c/g%3e%3c/svg%3e",y=({design:r,code:n})=>e.jsx("div",{className:"rte-disponibility",children:e.jsxs("table",{children:[r&&e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,children:"Design"})})}),e.jsxs("tbody",{children:[r.figma!==void 0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"rte-disponibility-item",children:[e.jsx("img",{src:k,alt:"Figma logo","aria-hidden":"true"}),e.jsx("span",{children:"Figma"})]})}),e.jsx(l,{available:r.figma})]}),r.guidelines!==void 0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"rte-disponibility-item",children:[e.jsx("img",{src:R,alt:"Storybook logo","aria-hidden":"true"}),e.jsx("span",{children:"Guidelines"})]})}),e.jsx(l,{available:r.guidelines})]})]})]}),n&&e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,children:"Code"})})}),e.jsxs("tbody",{children:[n.react!==void 0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"rte-disponibility-item",children:[e.jsx("img",{src:T,alt:"React logo","aria-hidden":"true"}),e.jsx("span",{children:"React"})]})}),e.jsx(l,{available:n.react})]}),n.angular!==void 0&&e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"rte-disponibility-item",children:[e.jsx("img",{src:N,alt:"Angular logo","aria-hidden":"true"}),e.jsx("span",{children:"Angular"})]})}),e.jsx(l,{available:n.angular})]})]})]})]})}),l=({available:r})=>r?e.jsx("td",{className:"rte-disponibility-status-available",children:e.jsxs("div",{className:"rte-disponibility-item",children:[e.jsx(u,{name:"check-circle"}),e.jsx("span",{children:"Disponible"})]})}):e.jsx("td",{className:"rte-disponibility-status-unavailable",children:e.jsx("div",{className:"rte-disponibility-item",children:e.jsx("span",{children:"Non disponible"})})});y.__docgenInfo={description:"",methods:[],displayName:"Disponibility",props:{design:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  figma?: boolean;
  guidelines?: boolean;
}`,signature:{properties:[{key:"figma",value:{name:"boolean",required:!1}},{key:"guidelines",value:{name:"boolean",required:!1}}]}},description:""},code:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  react?: boolean;
  angular?: boolean;
}`,signature:{properties:[{key:"react",value:{name:"boolean",required:!1}},{key:"angular",value:{name:"boolean",required:!1}}]}},description:""}}};const v=({options:r})=>e.jsxs("table",{className:"rte-options sb-unstyled",children:[e.jsxs("colgroup",{children:[e.jsx("col",{className:"rte-options-col-auto"}),e.jsx("col",{className:"rte-options-col-flex"}),e.jsx("col",{className:"rte-options-col-auto"}),e.jsx("col",{className:"rte-options-col-auto"})]}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",children:"Property"}),e.jsx("th",{scope:"col",children:"Value"}),e.jsx("th",{scope:"col",className:"rte-options-header-no-wrap",children:"Default Value"}),e.jsx("th",{scope:"col",className:"rte-options-header-no-wrap",children:"Dependance"})]})}),e.jsx("tbody",{children:r.map((n,a)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:n.property}),e.jsx("td",{children:n.value}),e.jsx("td",{children:n.defaultValue}),e.jsx("td",{children:n.dependance})]},a))})]});v.__docgenInfo={description:"",methods:[],displayName:"Options",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}`,signature:{properties:[{key:"property",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"dependance",value:{name:"string",required:!0}}]}}],raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}[]`},description:""}}};const x=({disponibility:r,changelog:n,options:a})=>e.jsxs("div",{className:"rte-overview",children:[e.jsxs("div",{className:"rte-overview-top",children:[e.jsxs("div",{className:"rte-overview-section",children:[e.jsx(o,{level:2,id:"disponibility",children:"Disponibilité"}),r&&e.jsx(y,{...r})]}),e.jsxs("div",{className:"rte-overview-section",children:[e.jsx(o,{level:2,id:"changelog",children:"Dernières mises à jour"}),n&&e.jsx(h,{updates:n})]})]}),a&&e.jsxs("div",{className:"rte-overview-section",children:[e.jsx(o,{level:2,id:"options",children:"Options"}),e.jsx(v,{options:a})]})]});x.__docgenInfo={description:"",methods:[],displayName:"Overview",props:{disponibility:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  design?: {
    figma?: boolean;
    guidelines?: boolean;
  };
  code?: {
    react?: boolean;
    angular?: boolean;
  };
}`,signature:{properties:[{key:"design",value:{name:"signature",type:"object",raw:`{
  figma?: boolean;
  guidelines?: boolean;
}`,signature:{properties:[{key:"figma",value:{name:"boolean",required:!1}},{key:"guidelines",value:{name:"boolean",required:!1}}]},required:!1}},{key:"code",value:{name:"signature",type:"object",raw:`{
  react?: boolean;
  angular?: boolean;
}`,signature:{properties:[{key:"react",value:{name:"boolean",required:!1}},{key:"angular",value:{name:"boolean",required:!1}}]},required:!1}}]}},description:""},changelog:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  version: string;
  date: string;
  changes: string[];
}`,signature:{properties:[{key:"version",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"changes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`{
  version: string;
  date: string;
  changes: string[];
}[]`},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}`,signature:{properties:[{key:"property",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"dependance",value:{name:"string",required:!0}}]}}],raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}[]`},description:""}}};const C=({title:r,description:n,linkFigma:a,linkGithub:t,disponibility:s,changelog:i,options:d,guidelines:c,accessibility:j})=>e.jsxs("div",{className:"rte-component-docs",children:[e.jsx(p,{title:r,linkFigma:a,linkGithub:t,children:n}),e.jsxs(b,{children:[e.jsx("div",{className:"rte-component-docs-overview",children:e.jsx(x,{disponibility:s,changelog:i,options:d})}),e.jsx("div",{className:"rte-component-docs-guidelines",children:c}),e.jsx("div",{className:"rte-component-docs-accessibility",children:j})]})]});C.__docgenInfo={description:"",methods:[],displayName:"ComponentDocs",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},linkFigma:{required:!1,tsType:{name:"string"},description:""},linkGithub:{required:!1,tsType:{name:"string"},description:""},disponibility:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  design?: {
    figma?: boolean;
    guidelines?: boolean;
  };
  code?: {
    react?: boolean;
    angular?: boolean;
  };
}`,signature:{properties:[{key:"design",value:{name:"signature",type:"object",raw:`{
  figma?: boolean;
  guidelines?: boolean;
}`,signature:{properties:[{key:"figma",value:{name:"boolean",required:!1}},{key:"guidelines",value:{name:"boolean",required:!1}}]},required:!1}},{key:"code",value:{name:"signature",type:"object",raw:`{
  react?: boolean;
  angular?: boolean;
}`,signature:{properties:[{key:"react",value:{name:"boolean",required:!1}},{key:"angular",value:{name:"boolean",required:!1}}]},required:!1}}]}},description:""},changelog:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  version: string;
  date: string;
  changes: string[];
}`,signature:{properties:[{key:"version",value:{name:"string",required:!0}},{key:"date",value:{name:"string",required:!0}},{key:"changes",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}}],raw:`{
  version: string;
  date: string;
  changes: string[];
}[]`},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}`,signature:{properties:[{key:"property",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"defaultValue",value:{name:"string",required:!0}},{key:"dependance",value:{name:"string",required:!0}}]}}],raw:`{
  property: string;
  value: string;
  defaultValue: string;
  dependance: string;
}[]`},description:""},guidelines:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accessibility:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{g as A,C,o as H};
