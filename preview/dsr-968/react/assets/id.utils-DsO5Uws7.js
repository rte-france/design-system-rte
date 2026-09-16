let e=0;function n(){return typeof globalThis.crypto<"u"&&"randomUUID"in globalThis.crypto?globalThis.crypto.randomUUID():(e+=1,`id-${e}`)}export{n as g};
