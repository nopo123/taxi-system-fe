var r=Object.defineProperty;var g=(d,t,s)=>t in d?r(d,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):d[t]=s;var a=(d,t,s)=>(g(d,typeof t!="symbol"?t+"":t,s),s);import{o as e}from"./index-Bn22ju4j.js";class o{}a(o,"getAll",t=>e.get(`/order?page=${t}`)),a(o,"createOrder",t=>e.post("/order",t)),a(o,"findOne",t=>e.get(`/order/${t}`)),a(o,"updateOrder",(t,s)=>e.put(`/order/${t}`,s)),a(o,"delete",t=>e.delete(`/order/${t}`)),a(o,"getOrders",t=>e.get(`/order/user?page=${t}`)),a(o,"getPdfOrders",(t,s)=>e.get(`/order/pdf?from=${t}&to=${s}`));export{o as O};
