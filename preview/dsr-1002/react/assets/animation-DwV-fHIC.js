function r(n){let e=0;const a=requestAnimationFrame(()=>{e=requestAnimationFrame(()=>{e=0,n()})});return()=>{cancelAnimationFrame(a),e!==0&&cancelAnimationFrame(e)}}export{r as w};
