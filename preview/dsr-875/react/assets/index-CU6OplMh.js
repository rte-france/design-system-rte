let e=0;const o=()=>typeof globalThis.crypto<"u"&&"randomUUID"in globalThis.crypto?globalThis.crypto.randomUUID():(e+=1,`id-${e}`);export{o as g};
