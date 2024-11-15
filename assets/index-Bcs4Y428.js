import{s as E,r as c,u as M,_ as A,j as e,b as H,c as I,d as L,h as U,i as _,f as $,L as O}from"./index-Bn22ju4j.js";import{d as K}from"./Edit-C3Kvy54M.js";import{d as V}from"./Delete-BkVVZTen.js";import{U as g}from"./UserService-DBYmU35t.js";import{u as P,c as S,a as m,b as Z}from"./formik.esm-DcbXOIxt.js";import{u as Q}from"./useTheme-Y9mmvfV8.js";import{u as X}from"./useMediaQuery-BzWYe5Bq.js";import{T as u,B as k,P as G}from"./Box-9N2gnsen.js";import{C as J}from"./Container-Bx1Kr23n.js";import{B as b}from"./Button-D1XRG8Gg.js";import{T as Y,a as ee,b as ae,c as D,d as h,e as se}from"./TableRow-DBZuoOqe.js";import{I as B}from"./IconButton-C-yAM3OB.js";import{D as re,g as oe,a as te,b as ie,c as N}from"./DialogContent-CKsB_Kyg.js";import{T as j,F as le,S as ne}from"./TextField-a0JGo00p.js";import{I as de,F as ce}from"./OutlinedInput-1Wh2PjgD.js";import{M as z}from"./MenuItem-BCkBawk2.js";import"./createSvgIcon-Chs_L0E8.js";import"./createSvgIcon-CQDQQGMN.js";import"./useControlled-Di7wUfld.js";import"./ownerWindow-DvT1GKkC.js";import"./useThemeProps-DcV2iQdr.js";import"./Popover-yJMaAJO1.js";import"./listItemTextClasses-CaWsKo2K.js";const me=["className","id"],he=p=>{const{classes:l}=p;return L({root:["root"]},oe,l)},ue=E(u,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(p,l)=>l.root})({padding:"16px 24px",flex:"0 0 auto"}),pe=c.forwardRef(function(l,s){const x=M({props:l,name:"MuiDialogTitle"}),{className:w,id:n}=x,y=A(x,me),v=x,C=he(v),{titleId:f=n}=c.useContext(re);return e.jsx(ue,H({component:"h2",className:I(C.root,w),ownerState:v,ref:s,variant:"h6",id:n??f},y))}),Ae=()=>{const[p,l]=c.useState([]),[s,x]=c.useState(null),[w,n]=c.useState(!1),y=U(),{user:v}=_(),C=Q(),f=X(C.breakpoints.down("sm")),[R,T]=c.useState(!1),{enqueueSnackbar:d}=$();c.useEffect(()=>{T(!0),(async()=>{try{const o=await g.getAll();l(o.filter(i=>i.id!==v.id)),d("Používatelia boli úspešne načítaní",{variant:"success"})}catch(o){d(o.response.data.message,{variant:"error"})}})(),T(!1)},[]);const F=r=>{x(r),n(!0)},W=async r=>{try{l(o=>o.filter(i=>i.id!==r)),await g.delete(r),d("Používateľ bol úspešne vymazaný",{variant:"success"})}catch(o){d(o.response.data.message,{variant:"error"})}},q=()=>{y("/dashboard/create/user")},a=P({initialValues:{firstName:(s==null?void 0:s.firstName)||"",lastName:(s==null?void 0:s.lastName)||"",email:(s==null?void 0:s.email)||"",role:(s==null?void 0:s.role)||""},enableReinitialize:!0,validationSchema:S({firstName:m().required("Krstné meno je povinné"),lastName:m().required("Priezvisko je povinné"),email:m().email("Nepovolený formát emailu").required("Email je povinný"),role:m().required("Rola je povinná")}),onSubmit:async r=>{try{await g.updateUser(s.id,r),l(o=>o.map(i=>i.id===s.id?{...i,...r}:i)),n(!1),d("Osobné údaje boli úspešne aktualizované",{variant:"success"})}catch(o){d(o.response.data.message,{variant:"error"})}}}),t=P({initialValues:{password:"",confirmPassword:""},validationSchema:S({password:m().min(8,"Heslo musí mať aspoň 8 znakov").required("Heslo je povinné"),confirmPassword:m().oneOf([Z("password"),null],"Heslá sa musia zhodovať").required("Potvrdenie hesla je povinné")}),onSubmit:async r=>{try{l(o=>o.map(i=>i.id===s.id?{...i,...r}:i)),await g.updatePassword(s.id,r),n(!1),d("Heslo bolo úspešne aktualizované",{variant:"success"})}catch(o){d(o.response.data.message,{variant:"error"})}}});return e.jsx(e.Fragment,{children:R?e.jsx(O,{}):e.jsx(k,{sx:{width:"100%",overflowX:"auto"},children:e.jsxs(J,{maxWidth:"lg",sx:{mt:4},children:[e.jsx(u,{variant:"h4",sx:{mb:3},children:"Používatelia"}),e.jsx(k,{sx:{display:"flex",justifyContent:"flex-end",mb:2},children:e.jsx(b,{variant:"contained",color:"primary",sx:{height:40,width:150},onClick:q,children:"Pridať používateľa"})}),e.jsx(Y,{component:G,children:e.jsxs(ee,{sx:{minWidth:300},children:[e.jsx(ae,{children:e.jsxs(D,{children:[e.jsx(h,{children:"Údaje"}),!f&&e.jsx(h,{children:"Email"}),e.jsx(h,{align:"right",children:"Akcie"})]})}),e.jsx(se,{children:p.map(r=>e.jsxs(D,{children:[e.jsxs(h,{children:[e.jsxs(u,{variant:"body2",children:[r.firstName," ",r.lastName]}),f&&e.jsx(u,{variant:"caption",color:"textSecondary",children:r.email})]}),!f&&e.jsx(h,{children:r.email}),e.jsxs(h,{align:"right",children:[e.jsx(B,{onClick:()=>F(r),children:e.jsx(K,{})}),e.jsx(B,{onClick:()=>W(r.id),children:e.jsx(V,{})})]})]},r.id))})]})}),e.jsxs(te,{open:w,onClose:()=>n(!1),children:[e.jsx(pe,{children:"Upraviť používateľa"}),e.jsxs(ie,{children:[e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(u,{variant:"h4",children:"Aktualizácia osobných údajov"}),e.jsx(j,{margin:"dense",label:"Krstné meno",name:"firstName",fullWidth:!0,value:a.values.firstName,onChange:a.handleChange,error:a.touched.firstName&&!!a.errors.firstName,helperText:a.touched.firstName&&a.errors.firstName}),e.jsx(j,{margin:"dense",label:"Priezvisko",name:"lastName",fullWidth:!0,value:a.values.lastName,onChange:a.handleChange,error:a.touched.lastName&&!!a.errors.lastName,helperText:a.touched.lastName&&a.errors.lastName}),e.jsx(j,{margin:"dense",label:"Email",name:"email",type:"email",fullWidth:!0,value:a.values.email,onChange:a.handleChange,error:a.touched.email&&!!a.errors.email,helperText:a.touched.email&&a.errors.email}),e.jsxs(le,{fullWidth:!0,margin:"normal",error:a.touched.role&&!!a.errors.role,children:[e.jsx(de,{id:"role-label",children:"Rola"}),e.jsxs(ne,{labelId:"role-label",id:"role",name:"role",value:a.values.role,onChange:a.handleChange,label:"Rola",children:[e.jsx(z,{value:"user",children:"Zamestnanec"}),e.jsx(z,{value:"admin",children:"Manažér"})]}),e.jsx(ce,{children:a.touched.role&&a.errors.role})]}),e.jsx(N,{children:e.jsx(b,{type:"submit",color:"primary",children:"Uložiť"})})]}),e.jsx("hr",{}),e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsx(u,{variant:"h4",children:"Aktualizácia hesla"}),e.jsx(j,{margin:"dense",label:"Nové heslo",name:"password",type:"password",fullWidth:!0,value:t.values.password,onChange:t.handleChange,error:t.touched.password&&!!t.errors.password,helperText:t.touched.password&&t.errors.password}),e.jsx(j,{margin:"dense",label:"Potvrďte heslo",name:"confirmPassword",type:"password",fullWidth:!0,value:t.values.confirmPassword,onChange:t.handleChange,error:t.touched.confirmPassword&&!!t.errors.confirmPassword,helperText:t.touched.confirmPassword&&t.errors.confirmPassword}),e.jsx(N,{children:e.jsx(b,{type:"submit",color:"primary",children:"Uložiť"})})]})]}),e.jsx(N,{children:e.jsx(b,{onClick:()=>n(!1),color:"secondary",children:"Zrušiť"})})]})]})})})};export{Ae as default};