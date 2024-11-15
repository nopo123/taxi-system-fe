import{j as a,r as t,f as u,h as g,L as z}from"./index-Bn22ju4j.js";import{O as l}from"./OrganizationService-CHfxAHZE.js";import{C as y}from"./Container-Bx1Kr23n.js";import{B as d,T as v,P as T}from"./Box-9N2gnsen.js";import{B as C}from"./Button-D1XRG8Gg.js";import{T as O,a as S,b as B,c as h,d as r,e as k}from"./TableRow-DBZuoOqe.js";import{I as x}from"./IconButton-C-yAM3OB.js";import{c as m}from"./createSvgIcon-CQDQQGMN.js";import"./useThemeProps-DcV2iQdr.js";const E=m(a.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),L=m(a.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit"),R=()=>{const[p,i]=t.useState([]),[j,o]=t.useState(!0),{enqueueSnackbar:n}=u(),c=g();t.useEffect(()=>{(async()=>{o(!0);try{const s=await l.getAll();i(s),n("Organizácie boli úspešne načítané",{variant:"success"})}catch(s){n(s.response.data.message,{variant:"error"})}o(!1)})()},[]);const f=async e=>{try{await l.delete(e),i(s=>s.filter(b=>b.id!==e)),n("Organizácia bola úspešne vymazaná",{variant:"success"})}catch(s){n(s.response.data.message,{variant:"error"})}};return a.jsxs(y,{children:[a.jsxs(d,{mt:4,children:[a.jsx(v,{variant:"h4",sx:{mb:3},children:"Spoločnosti"}),a.jsx(d,{sx:{display:"flex",justifyContent:"flex-end",mb:3},children:a.jsx(C,{variant:"contained",color:"primary",onClick:()=>c("/dashboard/organization/create"),children:"Vytvoriť spoločnosť"})})]}),j?a.jsx(z,{}):a.jsx(O,{component:T,sx:{marginTop:4},children:a.jsxs(S,{children:[a.jsx(B,{children:a.jsxs(h,{children:[a.jsx(r,{children:"Name"}),a.jsx(r,{children:"Address"}),a.jsx(r,{children:"Action"})]})}),a.jsx(k,{children:p.map(e=>a.jsxs(h,{children:[a.jsx(r,{children:e.name}),a.jsx(r,{children:e.address}),a.jsxs(r,{children:[a.jsx(x,{color:"secondary","aria-label":"edit",onClick:()=>c(`/dashboard/organization/${e.id}`),children:a.jsx(L,{})}),a.jsx(x,{color:"secondary","aria-label":"delete",onClick:()=>f(e.id),children:a.jsx(E,{})})]})]},e.id))})]})})]})};export{R as default};