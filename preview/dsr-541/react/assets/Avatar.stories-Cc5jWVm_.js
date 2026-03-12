import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{u as O,e as B,w as o2}from"./index-4rjIhT2C.js";import{r as b}from"./index-G8LIXM5I.js";import{f as p2}from"./testing.utils-mIZIUNbM.js";import{a as c2,T as W}from"./ToastQueueProvider-KTRi3kQF.js";import{I as d2}from"./Icon-VGVlXIFq.js";import"./index-yBjzXJbu.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Badge-CpOhwesz.js";import"./index-DSdvzt-y.js";import"./useAnimatedMount-_zPBpYOt.js";import"./Button-BeoQWSSr.js";import"./common-button.constants-eNlmcvUj.js";import"./IconButton-BXYt1Qbl.js";import"./Overlay-BI5SO8Nq.js";import"./index-DML4njjH.js";import"./index-BLHw34Di.js";const y2=" ",g2=`{${y2}}`,u2="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2014C0%206.26801%206.26801%200%2014%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014C0%206.26801%206.26801%200%2014%200ZM20.4629%208C20.1963%208.00003%2019.9627%208.09983%2019.7627%208.2998L11.2881%2016.7754L7.73828%2013.2002C7.53828%2013.0002%207.30039%2012.9004%207.02539%2012.9004C6.7505%2012.9004%206.51342%2013.0003%206.31348%2013.2002C6.11357%2013.4001%206.0094%2013.6373%206.00098%2013.9121C5.99264%2014.1871%206.08809%2014.425%206.28809%2014.625L10.5879%2018.9248C10.7879%2019.1248%2011.0214%2019.2246%2011.2881%2019.2246C11.5547%2019.2246%2011.7883%2019.1248%2011.9883%2018.9248L21.1631%209.72461C21.3629%209.52471%2021.4628%209.2875%2021.4629%209.0127C21.4629%208.7377%2021.3631%208.4998%2021.1631%208.2998C20.9631%208.09984%2020.7295%208%2020.4629%208Z'%20fill='%230B8A4D'/%3e%3c/svg%3e",m2="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2014C0%206.26801%206.26801%200%2014%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%206C16.2167%206%2018.1038%206.77956%2019.6621%208.33789C21.2204%209.89622%2022%2011.7833%2022%2014C22%2016.2167%2021.2204%2018.1038%2019.6621%2019.6621C18.1038%2021.2204%2016.2167%2022%2014%2022C11.7833%2022%209.89622%2021.2204%208.33789%2019.6621C6.77956%2018.1038%206%2016.2167%206%2014C6%2011.7833%206.77956%209.89622%208.33789%208.33789C9.89622%206.77956%2011.7833%206%2014%206ZM14%209C13.7167%209%2013.4788%209.09544%2013.2871%209.28711C13.0954%209.47878%2013%209.71667%2013%2010V13.9746C13%2014.1079%2013.0252%2014.2373%2013.0752%2014.3623C13.1252%2014.4873%2013.1998%2014.6002%2013.2998%2014.7002L16.5996%2018C16.7829%2018.1833%2017.0166%2018.2753%2017.2998%2018.2754C17.5831%2018.2754%2017.8167%2018.1833%2018%2018C18.1833%2017.8167%2018.2754%2017.5831%2018.2754%2017.2998C18.2753%2017.0166%2018.1833%2016.7829%2018%2016.5996L15%2013.5996V10C15%209.71667%2014.9046%209.47878%2014.7129%209.28711C14.5212%209.09544%2014.2833%209%2014%209Z'%20fill='%23ED6E13'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014C0%206.26801%206.26801%200%2014%200ZM14%204C12.6167%204%2011.3163%204.26211%2010.0996%204.78711C8.88302%205.3121%207.82476%206.02485%206.9248%206.9248C6.02485%207.82476%205.3121%208.88302%204.78711%2010.0996C4.26211%2011.3163%204%2012.6167%204%2014C4%2015.3833%204.26211%2016.6837%204.78711%2017.9004C5.3121%2019.117%206.02485%2020.1752%206.9248%2021.0752C7.82476%2021.9751%208.88302%2022.6879%2010.0996%2023.2129C11.3163%2023.7379%2012.6167%2024%2014%2024C15.3833%2024%2016.6837%2023.7379%2017.9004%2023.2129C19.117%2022.6879%2020.1752%2021.9751%2021.0752%2021.0752C21.9751%2020.1752%2022.6879%2019.117%2023.2129%2017.9004C23.7379%2016.6837%2024%2015.3833%2024%2014C24%2012.6167%2023.7379%2011.3163%2023.2129%2010.0996C22.6879%208.88302%2021.9751%207.82476%2021.0752%206.9248C20.1752%206.02485%2019.117%205.3121%2017.9004%204.78711C16.6837%204.26211%2015.3833%204%2014%204Z'%20fill='%23ED6E13'/%3e%3c/svg%3e",v2="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2014C0%206.26801%206.26801%200%2014%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014Z'%20fill='white'/%3e%3cpath%20d='M14%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014C0%206.26801%206.26801%200%2014%200Z'%20fill='%23DE2048'/%3e%3c/svg%3e",x2="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2014C0%206.26801%206.26801%200%2014%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014Z'%20fill='white'/%3e%3cpath%20d='M17.5996%209.4248C17.8829%209.4248%2018.1165%209.51686%2018.2998%209.7002C18.4831%209.88353%2018.5752%2010.1171%2018.5752%2010.4004C18.5751%2010.6835%2018.483%2010.9164%2018.2998%2011.0996L15.4004%2014L18.2998%2016.9004C18.483%2017.0836%2018.5751%2017.3165%2018.5752%2017.5996C18.5752%2017.8829%2018.4831%2018.1165%2018.2998%2018.2998C18.1165%2018.4831%2017.8829%2018.5752%2017.5996%2018.5752C17.3165%2018.5751%2017.0836%2018.483%2016.9004%2018.2998L14%2015.4004L11.0996%2018.2998C10.9164%2018.483%2010.6835%2018.5751%2010.4004%2018.5752C10.1171%2018.5752%209.88353%2018.4831%209.7002%2018.2998C9.51686%2018.1165%209.4248%2017.8829%209.4248%2017.5996C9.42489%2017.3165%209.51701%2017.0836%209.7002%2016.9004L12.5996%2014L9.7002%2011.0996C9.51701%2010.9164%209.42489%2010.6835%209.4248%2010.4004C9.4248%2010.1171%209.51686%209.88353%209.7002%209.7002C9.88353%209.51686%2010.1171%209.4248%2010.4004%209.4248C10.6835%209.42489%2010.9164%209.51701%2011.0996%209.7002L14%2012.5996L16.9004%209.7002C17.0836%209.51701%2017.3165%209.42489%2017.5996%209.4248Z'%20fill='%23737272'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014C0%206.26801%206.26801%200%2014%200ZM14%204C12.6167%204%2011.3163%204.26211%2010.0996%204.78711C8.88302%205.3121%207.82476%206.02485%206.9248%206.9248C6.02485%207.82476%205.3121%208.88302%204.78711%2010.0996C4.26211%2011.3163%204%2012.6167%204%2014C4%2015.3833%204.26211%2016.6837%204.78711%2017.9004C5.3121%2019.117%206.02485%2020.1752%206.9248%2021.0752C7.82476%2021.9751%208.88302%2022.6879%2010.0996%2023.2129C11.3163%2023.7379%2012.6167%2024%2014%2024C15.3833%2024%2016.6837%2023.7379%2017.9004%2023.2129C19.117%2022.6879%2020.1752%2021.9751%2021.0752%2021.0752C21.9751%2020.1752%2022.6879%2019.117%2023.2129%2017.9004C23.7379%2016.6837%2024%2015.3833%2024%2014C24%2012.6167%2023.7379%2011.3163%2023.2129%2010.0996C22.6879%208.88302%2021.9751%207.82476%2021.0752%206.9248C20.1752%206.02485%2019.117%205.3121%2017.9004%204.78711C16.6837%204.26211%2015.3833%204%2014%204Z'%20fill='%23737272'/%3e%3c/svg%3e",f2="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%2014C0%206.26801%206.26801%200%2014%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14%200C21.732%200%2028%206.26801%2028%2014C28%2021.732%2021.732%2028%2014%2028C6.26801%2028%200%2021.732%200%2014C0%206.26801%206.26801%200%2014%200ZM13.9922%2019C13.4422%2019%2012.9708%2019.1962%2012.5791%2019.5879C12.1877%2019.9795%2011.9922%2020.4502%2011.9922%2021C11.9922%2021.5498%2012.1877%2022.0205%2012.5791%2022.4121C12.9708%2022.8038%2013.4422%2023%2013.9922%2023C14.5421%2023%2015.0127%2022.8037%2015.4043%2022.4121C15.7959%2022.0205%2015.9922%2021.55%2015.9922%2021C15.9922%2020.45%2015.7959%2019.9795%2015.4043%2019.5879C15.0127%2019.1963%2014.5421%2019%2013.9922%2019ZM13.9922%204C13.0089%204%2012.1043%204.22044%2011.2793%204.66211C10.4543%205.10378%209.77552%205.72539%209.24219%206.52539C9.05897%206.80862%208.97993%207.10827%209.00488%207.4248C9.02987%207.74129%209.15853%208.00801%209.3916%208.22461C9.72483%208.52451%2010.121%208.64609%2010.5791%208.58789C11.0374%208.52956%2011.4003%208.30814%2011.667%207.9248C11.9503%207.52487%2012.2881%207.22101%2012.6797%207.0127C13.0713%206.80439%2013.5089%206.7002%2013.9922%206.7002C14.7754%206.70023%2015.4049%206.91631%2015.8799%207.34961C16.3549%207.78294%2016.5918%208.35854%2016.5918%209.0752C16.5918%209.55831%2016.4545%2010.0039%2016.1797%2010.4121C15.9047%2010.8204%2015.3422%2011.4004%2014.4922%2012.1504C13.8257%2012.7502%2013.3507%2013.3208%2013.0674%2013.8623C12.784%2014.404%2012.6416%2015.0004%2012.6416%2015.6504C12.6417%2016.0336%2012.7798%2016.3541%2013.0547%2016.6123C13.3297%2016.8706%2013.6587%2017%2014.042%2017C14.4253%2017%2014.7543%2016.8663%2015.0293%2016.5996C15.3042%2016.333%2015.4753%2015.9996%2015.542%2015.5996C15.6087%2015.1831%2015.7502%2014.8122%2015.9668%2014.4873C16.1835%2014.1623%2016.6002%2013.7083%2017.2168%2013.125C18.0668%2012.3084%2018.6501%2011.6%2018.9668%2011C19.2835%2010.4%2019.4424%209.72461%2019.4424%208.97461C19.4423%207.49151%2018.9379%206.29157%2017.9297%205.375C16.9214%204.45837%2015.6088%204.00004%2013.9922%204Z'%20fill='%23737272'/%3e%3c/svg%3e",C2={24:16,28:16,32:20,36:20,40:24,48:28,56:32,64:40,72:48,96:56,120:64},I={24:6,28:10,32:10,36:10,40:12,48:16,56:16,64:20,72:20,96:28,120:28},w2={24:1,28:1,32:1,36:1,40:1,48:2,56:2,64:2,72:2,96:2,120:2},h2={available:u2,away:m2,busy:v2,offline:x2,unknown:f2},j=(t,e)=>{if(!e)return"none";const r=e?I[t]:0,d=w2[t];return`radial-gradient(circle at ${t-r/2}px ${t-r/2}px, transparent ${r/2+d}px, black 0px)`},z2=(t,e)=>t==="decorative"&&e?"var(--content-secondary)":t==="brand"?"var(--content-primary-inverse)":"var(--content-tertiary)",j2=(t,e,r)=>t==="image"?"neutral":e==="decorative"&&r?`var(--decorative-${r})`:e==="brand"?"var(--background-brand-default)":"var(--background-neutral-regular-default)",b2="_avatar_sgfaz_1",I2="_initials_sgfaz_53",o={"avatar-button":"_avatar-button_sgfaz_1","avatar-container":"_avatar-container_sgfaz_16",avatar:b2,"avatar-image":"_avatar-image_sgfaz_47",initials:I2,"status-indicator":"_status-indicator_sgfaz_126"},s=b.forwardRef(({id:t,type:e="user",imgSrc:r,alt:d,size:i=32,status:y,layout:g="image",initials:h,colorType:z="neutral",decorativeColor:A,onClick:k,"aria-label":r2},l2)=>{if(g==="initials"&&(!h||h.length>2))return console.warn("Avatar with 'initials' layout requires 'initials' prop to be provided with 1 or 2 characters maximum."),null;if(g==="image"&&!r)return console.warn("Avatar with 'image' layout (default) requires 'imgSrc' prop to be provided."),null;const T=()=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:o.avatar,ref:l2,"data-size":i,"data-avatar-type":e,"data-color":z,id:t,style:{backgroundColor:j2(g,z,A),maskImage:j(i,!!y)},children:g==="initials"?a.jsx("span",{className:o.initials,"data-size":i,style:{maskImage:j(i,!!y)},children:h}):g==="icon"?a.jsx(a.Fragment,{children:a.jsx(d2,{name:e==="user"?"user":"company",size:C2[i],color:z2(z,A)})}):a.jsx("img",{src:r,alt:d,className:o["avatar-image"],style:{maskImage:j(i,!!y)}})}),y&&a.jsx("img",{src:h2[y],alt:"Available",className:o["status-indicator"],style:{width:I[i],height:I[i]}})]});return a.jsx(a.Fragment,{children:k?a.jsx("button",{className:`${o["avatar-container"]} ${o["avatar-button"]}`,"data-avatar-type":e,"data-size":i,onClick:k,"aria-label":r2,type:"button",id:t,style:{width:i,height:i},children:a.jsx(T,{})}):a.jsx("div",{className:`${o["avatar-container"]}`,"aria-hidden":!0,style:{width:i,height:i},children:a.jsx(T,{})})})});s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{type:{defaultValue:{value:'"user"',computed:!1},required:!1},size:{defaultValue:{value:"32",computed:!1},required:!1},layout:{defaultValue:{value:'"image"',computed:!1},required:!1},colorType:{defaultValue:{value:'"neutral"',computed:!1},required:!1}}};const i2=""+new URL("company-DIHmOpWw.png",import.meta.url).href,w=""+new URL("user-DQfQ3zZ6.png",import.meta.url).href,P2={title:"Avatar",component:s,tags:["autodocs"],argTypes:{decorativeColor:{control:"select",options:["neutral","bleu-iceberg","vert-foret","violet","bleu-rte","bleu-digital","marine","bleu-petrole","bleu-cyan","vert","vert-indications","vert-digital","jaune","jaune-ocre","jaune-indications","saumon","rose-digital","fuschia","rouge-indication","taupe"]},status:{control:"select",options:["available","away","busy","offline","unknown"]}}},n=[120,96,72,64,56,48,40,36,32,28,24],l={args:{imgSrc:w,alt:"Avatar of Jane Doe",size:32,colorType:"neutral",type:"user"}},p={args:{...l.args,type:"user",colorType:"neutral"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,imgSrc:w,layout:"image"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},u={args:{...p.args,colorType:"brand"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},m={args:{...p.args,colorType:"decorative",decorativeColor:"violet"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},c={args:{...l.args,type:"entity"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"image",imgSrc:i2,alt:"Company Logo"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},v={args:{...c.args,colorType:"brand"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},x={args:{...c.args,colorType:"decorative",decorativeColor:"violet"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB"},e))})]})},f={args:{...l.args,status:"available"},render:t=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,imgSrc:w,layout:"image",alt:"Avatar of Jane Doe"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon",status:"busy"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"initials",initials:"MB",type:"entity",status:"away",colorType:"brand"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"image",imgSrc:i2,alt:"Company Logo",type:"entity",status:"offline",colorType:"decorative",decorativeColor:"violet"},e))}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",alignItems:"center"},children:n.map(e=>a.jsx(s,{...t,size:e,layout:"icon",alt:"Company Logo",type:"entity",status:"unknown",colorType:"decorative",decorativeColor:"violet"},e))})]})},C={args:{...l.args,onClick:()=>{},size:120},render:t=>{const[e,r]=b.useState(!1),[d,i]=b.useState(!1);return a.jsx(c2,{children:a.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[a.jsx(W,{message:"Clicked on the available avatar !",type:"success",isOpen:e,onClose:()=>r(!1),closable:!0}),a.jsx(W,{message:"Clicked on the busy avatar !",type:"error",isOpen:d,onClose:()=>i(!1),closable:!0}),a.jsx(s,{...t,type:"user",layout:"image",imgSrc:w,alt:"Avatar of Jane Doe",onClick:()=>r(!0),status:"available"}),a.jsx(s,{...t,layout:"icon",type:"entity",status:"busy",onClick:()=>i(!0)})]})})},play:async({canvasElement:t})=>{p2(t);const e=t.querySelector('button[data-avatar-type="user"]');await O.tab(),B(e).toHaveFocus(),await O.keyboard(g2);const r=o2(document.body).getByRole("status");B(r).toBeInTheDocument()}};var D,M,S;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    imgSrc: img,
    alt: "Avatar of Jane Doe",
    size: 32,
    colorType: "neutral",
    type: "user"
  }
}`,...(S=(M=l.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var E,_,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "user",
    colorType: "neutral"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var Z,N,U;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...UserNeutral.args,
    colorType: "brand"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(U=(N=u.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var q,$,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...UserNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(P=($=m.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var J,R,V;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    type: "entity"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="image" imgSrc={logo} alt="Company Logo" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(V=(R=c.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var F,Q,H;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...EntityNeutral.args,
    colorType: "brand"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(H=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:H.source}}};var K,Y,G;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...EntityNeutral.args,
    colorType: "decorative",
    decorativeColor: "violet"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" />)}
      </div>
    </div>
}`,...(G=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};var X,e2,a2;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: "available"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} imgSrc={img} layout="image" alt="Avatar of Jane Doe" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" status="busy" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="initials" initials="MB" type="entity" status="away" colorType="brand" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="image" imgSrc={logo} alt="Company Logo" type="entity" status="offline" colorType="decorative" decorativeColor="violet" />)}
      </div>
      <div style={{
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
      alignItems: "center"
    }}>
        {sizeOptions.map(size => <Avatar key={size} {...args} size={size} layout="icon" alt="Company Logo" type="entity" status="unknown" colorType="decorative" decorativeColor="violet" />)}
      </div>
    </div>
}`,...(a2=(e2=f.parameters)==null?void 0:e2.docs)==null?void 0:a2.source}}};var t2,s2,n2;C.parameters={...C.parameters,docs:{...(t2=C.parameters)==null?void 0:t2.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    onClick: () => {},
    size: 120
  },
  render: args => {
    const [isAvailableToastOpen, setIsAvailableToastOpen] = useState(false);
    const [isBusyToastOpen, setIsBusyToastOpen] = useState(false);
    return <ToastQueueProvider>
        <div style={{
        display: "flex",
        gap: "16px",
        alignItems: "center"
      }}>
          <Toast message={"Clicked on the available avatar !"} type="success" isOpen={isAvailableToastOpen} onClose={() => setIsAvailableToastOpen(false)} closable={true} />
          <Toast message={"Clicked on the busy avatar !"} type="error" isOpen={isBusyToastOpen} onClose={() => setIsBusyToastOpen(false)} closable={true} />
          <Avatar {...args} type="user" layout="image" imgSrc={img} alt="Avatar of Jane Doe" onClick={() => setIsAvailableToastOpen(true)} status="available" />
          <Avatar {...args} layout="icon" type="entity" status="busy" onClick={() => setIsBusyToastOpen(true)} />
        </div>
      </ToastQueueProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    focusElementBeforeComponent(canvasElement);
    const availableAvatar = canvasElement.querySelector('button[data-avatar-type="user"]');
    await userEvent.tab();
    expect(availableAvatar).toHaveFocus();
    await userEvent.keyboard(TESTING_SPACE_KEY);
    const toast = within(document.body).getByRole("status");
    expect(toast).toBeInTheDocument();
  }
}`,...(n2=(s2=C.parameters)==null?void 0:s2.docs)==null?void 0:n2.source}}};const J2=["Default","UserNeutral","UserBrand","UserDecorative","EntityNeutral","EntityBrand","EntityDecorative","Status","Interactive"];export{l as Default,v as EntityBrand,x as EntityDecorative,c as EntityNeutral,C as Interactive,f as Status,u as UserBrand,m as UserDecorative,p as UserNeutral,J2 as __namedExportsOrder,P2 as default};
