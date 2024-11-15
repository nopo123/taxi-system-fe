import{a as b,g as h,r as d,s as g,l as u,b as t,u as y,_ as M,j as c,c as x,d as S}from"./index-Bn22ju4j.js";import{u as V}from"./useTheme-Y9mmvfV8.js";import{B as q,M as G,F as J}from"./Popover-yJMaAJO1.js";import{P as A}from"./Box-9N2gnsen.js";import{u as Q}from"./useControlled-Di7wUfld.js";function Z(o){return h("MuiDialog",o)}const W=b("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),oo=d.createContext({}),eo=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ao=g(q,{name:"MuiDialog",slot:"Backdrop",overrides:(o,e)=>e.backdrop})({zIndex:-1}),io=o=>{const{classes:e,scroll:a,maxWidth:i,fullWidth:s,fullScreen:r}=o,l={root:["root"],container:["container",`scroll${u(a)}`],paper:["paper",`paperScroll${u(a)}`,`paperWidth${u(String(i))}`,s&&"paperFullWidth",r&&"paperFullScreen"]};return S(l,Z,e)},to=g(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,e)=>e.root})({"@media print":{position:"absolute !important"}}),so=g("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.container,e[`scroll${u(a.scroll)}`]]}})(({ownerState:o})=>t({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),ro=g(A,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.paper,e[`scrollPaper${u(a.scroll)}`],e[`paperWidth${u(String(a.maxWidth))}`],a.fullWidth&&e.paperFullWidth,a.fullScreen&&e.paperFullScreen]}})(({theme:o,ownerState:e})=>t({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},e.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},e.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!e.maxWidth&&{maxWidth:"calc(100% - 64px)"},e.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.maxWidth&&e.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[e.maxWidth]}${o.breakpoints.unit}`,[`&.${W.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[e.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},e.fullWidth&&{width:"calc(100% - 64px)"},e.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${W.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),ko=d.forwardRef(function(e,a){const i=y({props:e,name:"MuiDialog"}),s=V(),r={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":l,"aria-labelledby":n,BackdropComponent:m,BackdropProps:j,children:N,className:F,disableEscapeKeyDown:P=!1,fullScreen:U=!1,fullWidth:_=!1,maxWidth:I="sm",onBackdropClick:$,onClick:B,onClose:D,open:R,PaperComponent:L=A,PaperProps:w={},scroll:E="paper",TransitionComponent:Y=J,transitionDuration:T=r,TransitionProps:X}=i,z=M(i,eo),f=t({},i,{disableEscapeKeyDown:P,fullScreen:U,fullWidth:_,maxWidth:I,scroll:E}),C=io(f),v=d.useRef(),H=p=>{v.current=p.target===p.currentTarget},K=p=>{B&&B(p),v.current&&(v.current=null,$&&$(p),D&&D(p,"backdropClick"))},k=Q(n),O=d.useMemo(()=>({titleId:k}),[k]);return c.jsx(to,t({className:x(C.root,F),closeAfterTransition:!0,components:{Backdrop:ao},componentsProps:{backdrop:t({transitionDuration:T,as:m},j)},disableEscapeKeyDown:P,onClose:D,open:R,ref:a,onClick:K,ownerState:f},z,{children:c.jsx(Y,t({appear:!0,in:R,timeout:T,role:"presentation"},X,{children:c.jsx(so,{className:x(C.container),onMouseDown:H,ownerState:f,children:c.jsx(ro,t({as:L,elevation:24,role:"dialog","aria-describedby":l,"aria-labelledby":k},w,{className:x(C.paper,w.className),ownerState:f,children:c.jsx(oo.Provider,{value:O,children:N})}))})}))}))});function lo(o){return h("MuiDialogActions",o)}b("MuiDialogActions",["root","spacing"]);const no=["className","disableSpacing"],co=o=>{const{classes:e,disableSpacing:a}=o;return S({root:["root",!a&&"spacing"]},lo,e)},po=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,!a.disableSpacing&&e.spacing]}})(({ownerState:o})=>t({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Wo=d.forwardRef(function(e,a){const i=y({props:e,name:"MuiDialogActions"}),{className:s,disableSpacing:r=!1}=i,l=M(i,no),n=t({},i,{disableSpacing:r}),m=co(n);return c.jsx(po,t({className:x(m.root,s),ownerState:n,ref:a},l))});function uo(o){return h("MuiDialogContent",o)}b("MuiDialogContent",["root","dividers"]);function yo(o){return h("MuiDialogTitle",o)}const go=b("MuiDialogTitle",["root"]),mo=["className","dividers"],xo=o=>{const{classes:e,dividers:a}=o;return S({root:["root",a&&"dividers"]},uo,e)},fo=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,e)=>{const{ownerState:a}=o;return[e.root,a.dividers&&e.dividers]}})(({theme:o,ownerState:e})=>t({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},e.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${go.root} + &`]:{paddingTop:0}})),Mo=d.forwardRef(function(e,a){const i=y({props:e,name:"MuiDialogContent"}),{className:s,dividers:r=!1}=i,l=M(i,mo),n=t({},i,{dividers:r}),m=xo(n);return c.jsx(fo,t({className:x(m.root,s),ownerState:n,ref:a},l))});export{oo as D,ko as a,Mo as b,Wo as c,W as d,yo as g};
