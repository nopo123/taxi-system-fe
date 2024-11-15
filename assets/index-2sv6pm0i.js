import{j as e,a as G,g as J,s as B,l as F,b as k,r,u as K,_ as X,c as O,d as Z,f as ee,i as te,h as ae,L as oe}from"./index-Bn22ju4j.js";import{d as se}from"./Delete-BkVVZTen.js";import{d as re}from"./Edit-C3Kvy54M.js";import{O as P}from"./OrderService-DsSFksRE.js";import{u as ne}from"./useTheme-Y9mmvfV8.js";import{u as ie}from"./useMediaQuery-BzWYe5Bq.js";import{a as ce,B as f,T as D,P as le}from"./Box-9N2gnsen.js";import{C as de}from"./Container-Bx1Kr23n.js";import{T as z}from"./TextField-a0JGo00p.js";import{B as A}from"./Button-D1XRG8Gg.js";import{T as ue,a as me,b as pe,c as I,d as c,e as he}from"./TableRow-DBZuoOqe.js";import{c as xe}from"./createSvgIcon-CQDQQGMN.js";import{I as M}from"./IconButton-C-yAM3OB.js";import"./createSvgIcon-Chs_L0E8.js";import"./useControlled-Di7wUfld.js";import"./ownerWindow-DvT1GKkC.js";import"./useThemeProps-DcV2iQdr.js";import"./OutlinedInput-1Wh2PjgD.js";import"./Popover-yJMaAJO1.js";const fe=xe(e.jsx("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward");function be(t){return J("MuiTableSortLabel",t)}const S=G("MuiTableSortLabel",["root","active","icon","iconDirectionDesc","iconDirectionAsc"]),ve=["active","children","className","direction","hideSortIcon","IconComponent"],je=t=>{const{classes:s,direction:n,active:l}=t,i={root:["root",l&&"active"],icon:["icon",`iconDirection${F(n)}`]};return Z(i,be,s)},ge=B(ce,{name:"MuiTableSortLabel",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.root,n.active&&s.active]}})(({theme:t})=>({cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:(t.vars||t).palette.text.secondary},"&:hover":{color:(t.vars||t).palette.text.secondary,[`& .${S.icon}`]:{opacity:.5}},[`&.${S.active}`]:{color:(t.vars||t).palette.text.primary,[`& .${S.icon}`]:{opacity:1,color:(t.vars||t).palette.text.secondary}}})),we=B("span",{name:"MuiTableSortLabel",slot:"Icon",overridesResolver:(t,s)=>{const{ownerState:n}=t;return[s.icon,s[`iconDirection${F(n.direction)}`]]}})(({theme:t,ownerState:s})=>k({fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:t.transitions.create(["opacity","transform"],{duration:t.transitions.duration.shorter}),userSelect:"none"},s.direction==="desc"&&{transform:"rotate(0deg)"},s.direction==="asc"&&{transform:"rotate(180deg)"})),ye=r.forwardRef(function(s,n){const l=K({props:s,name:"MuiTableSortLabel"}),{active:i=!1,children:w,className:d,direction:y="asc",hideSortIcon:u=!1,IconComponent:b=fe}=l,p=X(l,ve),x=k({},l,{active:i,direction:y,hideSortIcon:u,IconComponent:b}),h=je(x);return e.jsxs(ge,k({className:O(h.root,d),component:"span",disableRipple:!0,ownerState:x,ref:n},p,{children:[w,u&&!i?null:e.jsx(we,{as:b,className:O(h.icon),ownerState:x})]}))});let R=!1;const De=()=>{R||(console.warn(["MUI: The AdapterDateFns class was moved from `@mui/lab` to `@mui/x-date-pickers`","","You should use `import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'`","","More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join(`
`)),R=!0)};class Se{constructor(){De()}}let $=!1;const ke=()=>{$||(console.warn(["MUI: The LocalizationProvider component was moved from `@mui/lab` to `@mui/x-date-pickers`.","","You should use `import { LocalizationProvider } from '@mui/x-date-pickers'`","or `import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'`","","More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join(`
`)),$=!0)},Ce=r.forwardRef(function(){return ke(),null});let N=!1;const Le=()=>{N||(console.warn(["MUI: The DatePicker component was moved from `@mui/lab` to `@mui/x-date-pickers`.","","You should use `import { DatePicker } from '@mui/x-date-pickers'`","or `import { DatePicker } from '@mui/x-date-pickers/DatePicker'`","","More information about this migration on our blog: https://mui.com/blog/lab-date-pickers-to-mui-x/."].join(`
`)),N=!0)},Te=r.forwardRef(function(){return Le(),null}),He=()=>{const[t,s]=r.useState([]),[n,l]=r.useState("date"),[i,w]=r.useState("asc"),[d,y]=r.useState(""),[u,b]=r.useState(null),{enqueueSnackbar:p}=ee();te();const x=ne(),h=ie(x.breakpoints.down("md")),C=ae(),[_,L]=r.useState([]),[U,T]=r.useState(!0),[v,E]=r.useState(0);r.useEffect(()=>{T(!0),(async()=>{try{let o;o=await P.getAll(v);const m=[...t,...o];s(m),p("Objednávky boli úspešne načítané",{variant:"success"})}catch(o){p(o.response.data.message,{variant:"error"})}})(),T(!1)},[v]);const W=a=>{w(n===a&&i==="asc"?"desc":"asc"),l(a)},Q=async a=>{try{await P.delete(a),s(o=>o.filter(m=>m.id!==a)),p("Objednávka bola úspešne vymazaná",{variant:"success"})}catch(o){p(o.response.data.message,{variant:"error"})}},V=a=>{C(`/dashboard/evidence/order/${a}`)},Y=a=>{y(a.target.value.toLowerCase())};r.useEffect(()=>{(!t||!t.length)&&L([]);const a=t.filter(o=>{const m=o.firstName.toLowerCase().includes(d.toLowerCase())||o.lastName.toLowerCase().includes(d.toLowerCase()),j=o.route.toLowerCase().includes(d.toLowerCase()),g=u?new Date(o.date).toDateString()===u.toDateString():!0;return(m||j)&&g}).sort((o,m)=>{const j=new Date(o.date),g=new Date(m.date);return i==="asc"?j-g:g-j});L(a)},[t,d,u,i]);const q=()=>{C("/dashboard/evidence/create/order")},H=()=>{E(v+20)};return e.jsx(e.Fragment,{children:U?e.jsx(oe,{}):e.jsxs(f,{children:[e.jsxs(de,{maxWidth:"lg",sx:{mt:4},children:[e.jsx(D,{variant:"h4",sx:{mb:3},children:"Objednávky zákazníkov"}),e.jsxs(f,{sx:{display:"flex",mb:2,justifyContent:"space-between"},children:[e.jsx(f,{sx:{display:"flex",justifyContent:"flex-start"},children:e.jsx(z,{label:"Vyhľadávanie podľa mena",variant:"outlined",value:d,onChange:Y,sx:{width:"100%",maxWidth:140}})}),e.jsx(f,{sx:{display:"flex",justifyContent:"flex-end"},children:e.jsx(A,{variant:"contained",color:"primary",sx:{height:40,width:150,p:2},onClick:q,children:"Nová objednávka"})}),e.jsx(Ce,{dateAdapter:Se,children:e.jsx(Te,{label:"Filtrovať podľa dátumu",value:u,onChange:a=>b(a),renderInput:a=>e.jsx(z,{...a,sx:{width:"100%",maxWidth:200}})})})]}),e.jsx(ue,{component:le,children:e.jsxs(me,{sx:{minWidth:300},children:[e.jsx(pe,{children:e.jsxs(I,{children:[e.jsx(c,{children:"Údaje"}),!h&&e.jsx(c,{children:"Trasa"}),e.jsx(c,{children:e.jsx(ye,{active:n==="date",direction:n==="date"?i:"asc",onClick:()=>W("date"),children:"Dátum"})}),e.jsx(c,{align:"right",children:"Akcie"})]})}),e.jsx(he,{children:_.map(a=>e.jsxs(I,{children:[e.jsxs(c,{children:[e.jsx(D,{variant:"body1",children:`${a.firstName} ${a.lastName}`}),h&&e.jsxs(D,{variant:"body2",color:"text.secondary",children:["Trasa: ",a.route]})]}),!h&&e.jsx(c,{children:a.route}),e.jsx(c,{children:new Date(a.date).toLocaleDateString()}),e.jsxs(c,{align:"right",children:[e.jsx(M,{onClick:()=>V(a.id),size:"small",children:e.jsx(re,{})}),e.jsx(M,{onClick:()=>Q(a.id),size:"small",children:e.jsx(se,{})})]})]},a.id))})]})})]}),e.jsx(f,{sx:{display:"flex",justifyContent:"center"},children:t&&t.length>=v+20&&e.jsx(A,{variant:"contained",color:"primary",onClick:H,style:{marginTop:5},children:"Ďalšie"})})]})})};export{He as default};