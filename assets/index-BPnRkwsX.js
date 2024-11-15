import{g as L,a as M,W as _,s as v,l as p,b as d,X as U,r as w,u as T,_ as E,j as o,c as I,d as O,f as W}from"./index-Bn22ju4j.js";import{u as q,c as N,e as P,b as z}from"./formik.esm-DcbXOIxt.js";import{O as A}from"./OrderService-DsSFksRE.js";import{C as K}from"./Container-Bx1Kr23n.js";import{T as V,B as G}from"./Box-9N2gnsen.js";import{T as S}from"./TextField-a0JGo00p.js";import{B as X}from"./Button-D1XRG8Gg.js";import"./useThemeProps-DcV2iQdr.js";import"./OutlinedInput-1Wh2PjgD.js";import"./ownerWindow-DvT1GKkC.js";import"./useTheme-Y9mmvfV8.js";import"./useControlled-Di7wUfld.js";import"./Popover-yJMaAJO1.js";import"./createSvgIcon-CQDQQGMN.js";function Z(e){return L("MuiCircularProgress",e)}M("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const H=["className","color","disableShrink","size","style","thickness","value","variant"];let f=e=>e,j,$,B,R;const n=44,J=_(j||(j=f`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),Q=_($||($=f`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Y=e=>{const{classes:r,variant:a,color:t,disableShrink:i}=e,c={root:["root",a,`color${p(t)}`],svg:["svg"],circle:["circle",`circle${p(a)}`,i&&"circleDisableShrink"]};return O(c,Z,r)},ee=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.root,r[a.variant],r[`color${p(a.color)}`]]}})(({ownerState:e,theme:r})=>d({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&U(B||(B=f`
      animation: ${0} 1.4s linear infinite;
    `),J)),re=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),te=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:a}=e;return[r.circle,r[`circle${p(a.variant)}`],a.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>d({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&U(R||(R=f`
      animation: ${0} 1.4s ease-in-out infinite;
    `),Q)),ae=w.forwardRef(function(r,a){const t=T({props:r,name:"MuiCircularProgress"}),{className:i,color:c="primary",disableShrink:h=!1,size:l=40,style:m,thickness:s=3.6,value:x=0,variant:b="indeterminate"}=t,F=E(t,H),u=d({},t,{color:c,disableShrink:h,size:l,thickness:s,value:x,variant:b}),y=Y(u),D={},g={},k={};if(b==="determinate"){const C=2*Math.PI*((n-s)/2);D.strokeDasharray=C.toFixed(3),k["aria-valuenow"]=Math.round(x),D.strokeDashoffset=`${((100-x)/100*C).toFixed(3)}px`,g.transform="rotate(-90deg)"}return o.jsx(ee,d({className:I(y.root,i),style:d({width:l,height:l},g,m),ownerState:u,ref:a,role:"progressbar"},k,F,{children:o.jsx(re,{className:y.svg,ownerState:u,viewBox:`${n/2} ${n/2} ${n} ${n}`,children:o.jsx(te,{className:y.circle,style:D,ownerState:u,cx:n,cy:n,r:(n-s)/2,fill:"none",strokeWidth:s})})}))}),De=()=>{const{enqueueSnackbar:e}=W(),[r,a]=w.useState(!1),t=q({initialValues:{fromDate:"",toDate:""},validationSchema:N({fromDate:P().required("Start date is required"),toDate:P().required("End date is required").min(z("fromDate"),"End date cannot be before start date")}),onSubmit:async i=>{a(!0);try{const c=await A.getPdfOrders(i.fromDate,i.toDate,{responseType:"arraybuffer"}),h=new Uint8Array(c.data),l=new Blob([h],{type:"application/pdf"}),m=URL.createObjectURL(l),s=document.createElement("a");s.href=m,s.download=`orders_${i.fromDate}_${i.toDate}.pdf`,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(m),e("PDF sa úspešne stiahlo",{variant:"success"})}catch{e("Chyba pri stahovaní PDF",{variant:"error"})}finally{a(!1)}}});return o.jsxs(K,{maxWidth:"sm",sx:{mt:4},children:[o.jsx(V,{variant:"h4",sx:{mb:3},children:"Stiahnutie PDF objednávok"}),o.jsx("form",{onSubmit:t.handleSubmit,children:o.jsxs(G,{display:"flex",flexDirection:"column",gap:3,children:[o.jsx(S,{fullWidth:!0,id:"fromDate",name:"fromDate",label:"Od dňa",type:"date",value:t.values.fromDate,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.fromDate&&!!t.errors.fromDate,helperText:t.touched.fromDate&&t.errors.fromDate,InputLabelProps:{shrink:!0}}),o.jsx(S,{fullWidth:!0,id:"toDate",name:"toDate",label:"Do dňa",type:"date",value:t.values.toDate,onChange:t.handleChange,onBlur:t.handleBlur,error:t.touched.toDate&&!!t.errors.toDate,helperText:t.touched.toDate&&t.errors.toDate,InputLabelProps:{shrink:!0}}),o.jsx(X,{variant:"contained",color:"primary",type:"submit",disabled:r,children:r?o.jsx(ae,{size:24}):"Download PDF"})]})})]})};export{De as default};
