import{a as P,g as F,s as G,J as L,b as n,t as d,r as c,u as T,_,j as C,c as x,d as w}from"./index-Bn22ju4j.js";import{b as $}from"./Popover-yJMaAJO1.js";import{a as E,c as U,b as D}from"./Box-9N2gnsen.js";import{d as I,l as M,a as O}from"./listItemTextClasses-CaWsKo2K.js";function H(e){return F("MuiMenuItem",e)}const r=P("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),S=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],z=(e,a)=>{const{ownerState:s}=e;return[a.root,s.dense&&a.dense,s.divider&&a.divider,!s.disableGutters&&a.gutters]},W=e=>{const{disabled:a,dense:s,divider:t,disableGutters:l,selected:p,classes:o}=e,i=w({root:["root",s&&"dense",a&&"disabled",!l&&"gutters",t&&"divider",p&&"selected"]},H,o);return n({},o,i)},J=G(E,{shouldForwardProp:e=>L(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:z})(({theme:e,ownerState:a})=>n({},e.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!a.disableGutters&&{paddingLeft:16,paddingRight:16},a.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${r.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${r.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${r.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:d(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:d(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${r.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${r.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${I.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${I.inset}`]:{marginLeft:52},[`& .${M.root}`]:{marginTop:0,marginBottom:0},[`& .${M.inset}`]:{paddingLeft:36},[`& .${O.root}`]:{minWidth:36}},!a.dense&&{[e.breakpoints.up("sm")]:{minHeight:"auto"}},a.dense&&n({minHeight:32,paddingTop:4,paddingBottom:4},e.typography.body2,{[`& .${O.root} svg`]:{fontSize:"1.25rem"}}))),X=c.forwardRef(function(a,s){const t=T({props:a,name:"MuiMenuItem"}),{autoFocus:l=!1,component:p="li",dense:o=!1,divider:g=!1,disableGutters:i=!1,focusVisibleClassName:k,role:R="menuitem",tabIndex:f,className:B}=t,V=_(t,S),v=c.useContext($),m=c.useMemo(()=>({dense:o||v.dense||!1,disableGutters:i}),[v.dense,o,i]),u=c.useRef(null);U(()=>{l&&u.current&&u.current.focus()},[l]);const j=n({},t,{dense:m.dense,divider:g,disableGutters:i}),b=W(t),N=D(u,s);let y;return t.disabled||(y=f!==void 0?f:-1),C.jsx($.Provider,{value:m,children:C.jsx(J,n({ref:N,role:R,tabIndex:y,component:p,focusVisibleClassName:x(b.focusVisible,k),className:x(b.root,B)},V,{ownerState:j,classes:b}))})});export{X as M};
