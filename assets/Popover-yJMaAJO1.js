import{b as f,c as V,_ as K,a6 as mt,R as Et,r as c,j as F,a7 as Qt,g as xt,a as bt,s as at,u as yt,d as Pt}from"./index-Bn22ju4j.js";import{o as Y,a as ft,d as te}from"./ownerWindow-DvT1GKkC.js";import{b as Q,_ as ee,g as Xt,c as At,s as _t,u as $t,h as ne,P as oe}from"./Box-9N2gnsen.js";import{c as Ht}from"./useControlled-Di7wUfld.js";import{i as Yt,u as Vt}from"./useTheme-Y9mmvfV8.js";function re(t){const e=t.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function se(t,e,r){return t===void 0||Yt(t)?e:f({},e,{ownerState:f({},e.ownerState,r)})}function qt(t,e=[]){if(t===void 0)return{};const r={};return Object.keys(t).filter(n=>n.match(/^on[A-Z]/)&&typeof t[n]=="function"&&!e.includes(n)).forEach(n=>{r[n]=t[n]}),r}function Bt(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(r=>!(r.match(/^on[A-Z]/)&&typeof t[r]=="function")).forEach(r=>{e[r]=t[r]}),e}function ie(t){const{getSlotProps:e,additionalProps:r,externalSlotProps:n,externalForwardedProps:s,className:o}=t;if(!e){const k=V(r==null?void 0:r.className,o,s==null?void 0:s.className,n==null?void 0:n.className),h=f({},r==null?void 0:r.style,s==null?void 0:s.style,n==null?void 0:n.style),C=f({},r,s,n);return k.length>0&&(C.className=k),Object.keys(h).length>0&&(C.style=h),{props:C,internalRef:void 0}}const i=qt(f({},s,n)),a=Bt(n),l=Bt(s),d=e(i),p=V(d==null?void 0:d.className,r==null?void 0:r.className,o,s==null?void 0:s.className,n==null?void 0:n.className),g=f({},d==null?void 0:d.style,r==null?void 0:r.style,s==null?void 0:s.style,n==null?void 0:n.style),P=f({},d,r,l,a);return p.length>0&&(P.className=p),Object.keys(g).length>0&&(P.style=g),{props:P,internalRef:d.ref}}function ae(t,e,r){return typeof t=="function"?t(e,r):t}const le=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function gt(t){var e;const{elementType:r,externalSlotProps:n,ownerState:s,skipResolvingSlotProps:o=!1}=t,i=K(t,le),a=o?{}:ae(n,s),{props:l,internalRef:d}=ie(f({},i,{externalSlotProps:a})),p=Q(d,a==null?void 0:a.ref,(e=t.additionalProps)==null?void 0:e.ref);return se(r,f({},l,{ref:p}),s)}const jt={disabled:!1};var ce=function(e){return e.scrollTop},dt="unmounted",Z="exited",J="entering",it="entered",Nt="exiting",G=function(t){ee(e,t);function e(n,s){var o;o=t.call(this,n,s)||this;var i=s,a=i&&!i.isMounting?n.enter:n.appear,l;return o.appearStatus=null,n.in?a?(l=Z,o.appearStatus=J):l=it:n.unmountOnExit||n.mountOnEnter?l=dt:l=Z,o.state={status:l},o.nextCallback=null,o}e.getDerivedStateFromProps=function(s,o){var i=s.in;return i&&o.status===dt?{status:Z}:null};var r=e.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(s){var o=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==J&&i!==it&&(o=J):(i===J||i===it)&&(o=Nt)}this.updateStatus(!1,o)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var s=this.props.timeout,o,i,a;return o=i=a=s,s!=null&&typeof s!="number"&&(o=s.exit,i=s.enter,a=s.appear!==void 0?s.appear:i),{exit:o,enter:i,appear:a}},r.updateStatus=function(s,o){if(s===void 0&&(s=!1),o!==null)if(this.cancelNextCallback(),o===J){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:mt.findDOMNode(this);i&&ce(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===Z&&this.setState({status:dt})},r.performEnter=function(s){var o=this,i=this.props.enter,a=this.context?this.context.isMounting:s,l=this.props.nodeRef?[a]:[mt.findDOMNode(this),a],d=l[0],p=l[1],g=this.getTimeouts(),P=a?g.appear:g.enter;if(!s&&!i||jt.disabled){this.safeSetState({status:it},function(){o.props.onEntered(d)});return}this.props.onEnter(d,p),this.safeSetState({status:J},function(){o.props.onEntering(d,p),o.onTransitionEnd(P,function(){o.safeSetState({status:it},function(){o.props.onEntered(d,p)})})})},r.performExit=function(){var s=this,o=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:mt.findDOMNode(this);if(!o||jt.disabled){this.safeSetState({status:Z},function(){s.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:Nt},function(){s.props.onExiting(a),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:Z},function(){s.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(s,o){o=this.setNextCallback(o),this.setState(s,o)},r.setNextCallback=function(s){var o=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,o.nextCallback=null,s(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},r.onTransitionEnd=function(s,o){this.setNextCallback(o);var i=this.props.nodeRef?this.props.nodeRef.current:mt.findDOMNode(this),a=s==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],d=l[0],p=l[1];this.props.addEndListener(d,p)}s!=null&&setTimeout(this.nextCallback,s)},r.render=function(){var s=this.state.status;if(s===dt)return null;var o=this.props,i=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=K(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return Et.createElement(Xt.Provider,{value:null},typeof i=="function"?i(s,a):Et.cloneElement(Et.Children.only(i),a))},e}(Et.Component);G.contextType=Xt;G.propTypes={};function st(){}G.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:st,onEntering:st,onEntered:st,onExit:st,onExiting:st,onExited:st};G.UNMOUNTED=dt;G.EXITED=Z;G.ENTERING=J;G.ENTERED=it;G.EXITING=Nt;const Zt=t=>t.scrollTop;function vt(t,e){var r,n;const{timeout:s,easing:o,style:i={}}=t;return{duration:(r=i.transitionDuration)!=null?r:typeof s=="number"?s:s[e.mode]||0,easing:(n=i.transitionTimingFunction)!=null?n:typeof o=="object"?o[e.mode]:o,delay:i.transitionDelay}}function de(t){return typeof t=="function"?t():t}const ue=c.forwardRef(function(e,r){const{children:n,container:s,disablePortal:o=!1}=e,[i,a]=c.useState(null),l=Q(c.isValidElement(n)?n.ref:null,r);if(At(()=>{o||a(de(s)||document.body)},[s,o]),At(()=>{if(i&&!o)return _t(r,i),()=>{_t(r,null)}},[r,i,o]),o){if(c.isValidElement(n)){const d={ref:l};return c.cloneElement(n,d)}return F.jsx(c.Fragment,{children:n})}return F.jsx(c.Fragment,{children:i&&Qt.createPortal(n,i)})}),fe=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],pe={entering:{opacity:1},entered:{opacity:1}},he=c.forwardRef(function(e,r){const n=Vt(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:o,appear:i=!0,children:a,easing:l,in:d,onEnter:p,onEntered:g,onEntering:P,onExit:k,onExited:h,onExiting:C,style:T,timeout:N=s,TransitionComponent:A=G}=e,u=K(e,fe),x=c.useRef(null),b=Q(x,a.ref,r),w=R=>m=>{if(R){const E=x.current;m===void 0?R(E):R(E,m)}},S=w(P),I=w((R,m)=>{Zt(R);const E=vt({style:T,timeout:N,easing:l},{mode:"enter"});R.style.webkitTransition=n.transitions.create("opacity",E),R.style.transition=n.transitions.create("opacity",E),p&&p(R,m)}),$=w(g),D=w(C),j=w(R=>{const m=vt({style:T,timeout:N,easing:l},{mode:"exit"});R.style.webkitTransition=n.transitions.create("opacity",m),R.style.transition=n.transitions.create("opacity",m),k&&k(R)}),O=w(h),_=R=>{o&&o(x.current,R)};return F.jsx(A,f({appear:i,in:d,nodeRef:x,onEnter:I,onEntered:$,onEntering:S,onExit:j,onExited:O,onExiting:D,addEndListener:_,timeout:N},u,{children:(R,m)=>c.cloneElement(a,f({style:f({opacity:0,visibility:R==="exited"&&!d?"hidden":void 0},pe[R],T,a.props.style),ref:b},m))}))});function me(t){return xt("MuiBackdrop",t)}bt("MuiBackdrop",["root","invisible"]);const Ee=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],ge=t=>{const{classes:e,invisible:r}=t;return Pt({root:["root",r&&"invisible"]},me,e)},ve=at("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,r.invisible&&e.invisible]}})(({ownerState:t})=>f({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},t.invisible&&{backgroundColor:"transparent"})),xe=c.forwardRef(function(e,r){var n,s,o;const i=yt({props:e,name:"MuiBackdrop"}),{children:a,className:l,component:d="div",components:p={},componentsProps:g={},invisible:P=!1,open:k,slotProps:h={},slots:C={},TransitionComponent:T=he,transitionDuration:N}=i,A=K(i,Ee),u=f({},i,{component:d,invisible:P}),x=ge(u),b=(n=h.root)!=null?n:g.root;return F.jsx(T,f({in:k,timeout:N},A,{children:F.jsx(ve,f({"aria-hidden":!0},b,{as:(s=(o=C.root)!=null?o:p.Root)!=null?s:d,className:V(x.root,l,b==null?void 0:b.className),ownerState:f({},u,b==null?void 0:b.ownerState),classes:x,ref:r,children:a}))}))});function be(t){const e=Y(t);return e.body===t?ft(t).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}function ut(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function Ut(t){return parseInt(ft(t).getComputedStyle(t).paddingRight,10)||0}function ye(t){const r=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(t.tagName)!==-1,n=t.tagName==="INPUT"&&t.getAttribute("type")==="hidden";return r||n}function Wt(t,e,r,n,s){const o=[e,r,...n];[].forEach.call(t.children,i=>{const a=o.indexOf(i)===-1,l=!ye(i);a&&l&&ut(i,s)})}function St(t,e){let r=-1;return t.some((n,s)=>e(n)?(r=s,!0):!1),r}function Pe(t,e){const r=[],n=t.container;if(!e.disableScrollLock){if(be(n)){const i=re(Y(n));r.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${Ut(n)+i}px`;const a=Y(n).querySelectorAll(".mui-fixed");[].forEach.call(a,l=>{r.push({value:l.style.paddingRight,property:"padding-right",el:l}),l.style.paddingRight=`${Ut(l)+i}px`})}let o;if(n.parentNode instanceof DocumentFragment)o=Y(n).body;else{const i=n.parentElement,a=ft(n);o=(i==null?void 0:i.nodeName)==="HTML"&&a.getComputedStyle(i).overflowY==="scroll"?i:n}r.push({value:o.style.overflow,property:"overflow",el:o},{value:o.style.overflowX,property:"overflow-x",el:o},{value:o.style.overflowY,property:"overflow-y",el:o}),o.style.overflow="hidden"}return()=>{r.forEach(({value:o,el:i,property:a})=>{o?i.style.setProperty(a,o):i.style.removeProperty(a)})}}function Te(t){const e=[];return[].forEach.call(t.children,r=>{r.getAttribute("aria-hidden")==="true"&&e.push(r)}),e}class Re{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,r){let n=this.modals.indexOf(e);if(n!==-1)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&ut(e.modalRef,!1);const s=Te(r);Wt(r,e.mount,e.modalRef,s,!0);const o=St(this.containers,i=>i.container===r);return o!==-1?(this.containers[o].modals.push(e),n):(this.containers.push({modals:[e],container:r,restore:null,hiddenSiblings:s}),n)}mount(e,r){const n=St(this.containers,o=>o.modals.indexOf(e)!==-1),s=this.containers[n];s.restore||(s.restore=Pe(s,r))}remove(e,r=!0){const n=this.modals.indexOf(e);if(n===-1)return n;const s=St(this.containers,i=>i.modals.indexOf(e)!==-1),o=this.containers[s];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(n,1),o.modals.length===0)o.restore&&o.restore(),e.modalRef&&ut(e.modalRef,r),Wt(o.container,e.mount,e.modalRef,o.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=o.modals[o.modals.length-1];i.modalRef&&ut(i.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}const Se=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function ke(t){const e=parseInt(t.getAttribute("tabindex")||"",10);return Number.isNaN(e)?t.contentEditable==="true"||(t.nodeName==="AUDIO"||t.nodeName==="VIDEO"||t.nodeName==="DETAILS")&&t.getAttribute("tabindex")===null?0:t.tabIndex:e}function Ce(t){if(t.tagName!=="INPUT"||t.type!=="radio"||!t.name)return!1;const e=n=>t.ownerDocument.querySelector(`input[type="radio"]${n}`);let r=e(`[name="${t.name}"]:checked`);return r||(r=e(`[name="${t.name}"]`)),r!==t}function Ne(t){return!(t.disabled||t.tagName==="INPUT"&&t.type==="hidden"||Ce(t))}function we(t){const e=[],r=[];return Array.from(t.querySelectorAll(Se)).forEach((n,s)=>{const o=ke(n);o===-1||!Ne(n)||(o===0?e.push(n):r.push({documentOrder:s,tabIndex:o,node:n}))}),r.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(e)}function Me(){return!0}function Oe(t){const{children:e,disableAutoFocus:r=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:o=we,isEnabled:i=Me,open:a}=t,l=c.useRef(!1),d=c.useRef(null),p=c.useRef(null),g=c.useRef(null),P=c.useRef(null),k=c.useRef(!1),h=c.useRef(null),C=Q(e.ref,h),T=c.useRef(null);c.useEffect(()=>{!a||!h.current||(k.current=!r)},[r,a]),c.useEffect(()=>{if(!a||!h.current)return;const u=Y(h.current);return h.current.contains(u.activeElement)||(h.current.hasAttribute("tabIndex")||h.current.setAttribute("tabIndex","-1"),k.current&&h.current.focus()),()=>{s||(g.current&&g.current.focus&&(l.current=!0,g.current.focus()),g.current=null)}},[a]),c.useEffect(()=>{if(!a||!h.current)return;const u=Y(h.current),x=S=>{T.current=S,!(n||!i()||S.key!=="Tab")&&u.activeElement===h.current&&S.shiftKey&&(l.current=!0,p.current&&p.current.focus())},b=()=>{const S=h.current;if(S===null)return;if(!u.hasFocus()||!i()||l.current){l.current=!1;return}if(S.contains(u.activeElement)||n&&u.activeElement!==d.current&&u.activeElement!==p.current)return;if(u.activeElement!==P.current)P.current=null;else if(P.current!==null)return;if(!k.current)return;let I=[];if((u.activeElement===d.current||u.activeElement===p.current)&&(I=o(h.current)),I.length>0){var $,D;const j=!!(($=T.current)!=null&&$.shiftKey&&((D=T.current)==null?void 0:D.key)==="Tab"),O=I[0],_=I[I.length-1];typeof O!="string"&&typeof _!="string"&&(j?_.focus():O.focus())}else S.focus()};u.addEventListener("focusin",b),u.addEventListener("keydown",x,!0);const w=setInterval(()=>{u.activeElement&&u.activeElement.tagName==="BODY"&&b()},50);return()=>{clearInterval(w),u.removeEventListener("focusin",b),u.removeEventListener("keydown",x,!0)}},[r,n,s,i,a,o]);const N=u=>{g.current===null&&(g.current=u.relatedTarget),k.current=!0,P.current=u.target;const x=e.props.onFocus;x&&x(u)},A=u=>{g.current===null&&(g.current=u.relatedTarget),k.current=!0};return F.jsxs(c.Fragment,{children:[F.jsx("div",{tabIndex:a?0:-1,onFocus:A,ref:d,"data-testid":"sentinelStart"}),c.cloneElement(e,{ref:C,onFocus:N}),F.jsx("div",{tabIndex:a?0:-1,onFocus:A,ref:p,"data-testid":"sentinelEnd"})]})}function Ie(t){return typeof t=="function"?t():t}function De(t){return t?t.props.hasOwnProperty("in"):!1}const Le=new Re;function Fe(t){const{container:e,disableEscapeKeyDown:r=!1,disableScrollLock:n=!1,manager:s=Le,closeAfterTransition:o=!1,onTransitionEnter:i,onTransitionExited:a,children:l,onClose:d,open:p,rootRef:g}=t,P=c.useRef({}),k=c.useRef(null),h=c.useRef(null),C=Q(h,g),[T,N]=c.useState(!p),A=De(l);let u=!0;(t["aria-hidden"]==="false"||t["aria-hidden"]===!1)&&(u=!1);const x=()=>Y(k.current),b=()=>(P.current.modalRef=h.current,P.current.mount=k.current,P.current),w=()=>{s.mount(b(),{disableScrollLock:n}),h.current&&(h.current.scrollTop=0)},S=$t(()=>{const E=Ie(e)||x().body;s.add(b(),E),h.current&&w()}),I=c.useCallback(()=>s.isTopModal(b()),[s]),$=$t(E=>{k.current=E,E&&(p&&I()?w():h.current&&ut(h.current,u))}),D=c.useCallback(()=>{s.remove(b(),u)},[u,s]);c.useEffect(()=>()=>{D()},[D]),c.useEffect(()=>{p?S():(!A||!o)&&D()},[p,D,A,o,S]);const j=E=>v=>{var L;(L=E.onKeyDown)==null||L.call(E,v),!(v.key!=="Escape"||v.which===229||!I())&&(r||(v.stopPropagation(),d&&d(v,"escapeKeyDown")))},O=E=>v=>{var L;(L=E.onClick)==null||L.call(E,v),v.target===v.currentTarget&&d&&d(v,"backdropClick")};return{getRootProps:(E={})=>{const v=qt(t);delete v.onTransitionEnter,delete v.onTransitionExited;const L=f({},v,E);return f({role:"presentation"},L,{onKeyDown:j(L),ref:C})},getBackdropProps:(E={})=>{const v=E;return f({"aria-hidden":!0},v,{onClick:O(v),open:p})},getTransitionProps:()=>{const E=()=>{N(!1),i&&i()},v=()=>{N(!0),a&&a(),o&&D()};return{onEnter:Ht(E,l==null?void 0:l.props.onEnter),onExited:Ht(v,l==null?void 0:l.props.onExited)}},rootRef:C,portalRef:$,isTopModal:I,exited:T,hasTransition:A}}function Ae(t){return xt("MuiModal",t)}bt("MuiModal",["root","hidden","backdrop"]);const _e=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],$e=t=>{const{open:e,exited:r,classes:n}=t;return Pt({root:["root",!e&&r&&"hidden"],backdrop:["backdrop"]},Ae,n)},He=at("div",{name:"MuiModal",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.open&&r.exited&&e.hidden]}})(({theme:t,ownerState:e})=>f({position:"fixed",zIndex:(t.vars||t).zIndex.modal,right:0,bottom:0,top:0,left:0},!e.open&&e.exited&&{visibility:"hidden"})),Be=at(xe,{name:"MuiModal",slot:"Backdrop",overridesResolver:(t,e)=>e.backdrop})({zIndex:-1}),je=c.forwardRef(function(e,r){var n,s,o,i,a,l;const d=yt({name:"MuiModal",props:e}),{BackdropComponent:p=Be,BackdropProps:g,className:P,closeAfterTransition:k=!1,children:h,container:C,component:T,components:N={},componentsProps:A={},disableAutoFocus:u=!1,disableEnforceFocus:x=!1,disableEscapeKeyDown:b=!1,disablePortal:w=!1,disableRestoreFocus:S=!1,disableScrollLock:I=!1,hideBackdrop:$=!1,keepMounted:D=!1,onBackdropClick:j,open:O,slotProps:_,slots:R}=d,m=K(d,_e),E=f({},d,{closeAfterTransition:k,disableAutoFocus:u,disableEnforceFocus:x,disableEscapeKeyDown:b,disablePortal:w,disableRestoreFocus:S,disableScrollLock:I,hideBackdrop:$,keepMounted:D}),{getRootProps:v,getBackdropProps:L,getTransitionProps:H,portalRef:z,isTopModal:pt,exited:U,hasTransition:ht}=Fe(f({},E,{rootRef:r})),q=f({},E,{exited:U}),X=$e(q),tt={};if(h.props.tabIndex===void 0&&(tt.tabIndex="-1"),ht){const{onEnter:y,onExited:M}=H();tt.onEnter=y,tt.onExited=M}const et=(n=(s=R==null?void 0:R.root)!=null?s:N.Root)!=null?n:He,lt=(o=(i=R==null?void 0:R.backdrop)!=null?i:N.Backdrop)!=null?o:p,ct=(a=_==null?void 0:_.root)!=null?a:A.root,nt=(l=_==null?void 0:_.backdrop)!=null?l:A.backdrop,Tt=gt({elementType:et,externalSlotProps:ct,externalForwardedProps:m,getSlotProps:v,additionalProps:{ref:r,as:T},ownerState:q,className:V(P,ct==null?void 0:ct.className,X==null?void 0:X.root,!q.open&&q.exited&&(X==null?void 0:X.hidden))}),Rt=gt({elementType:lt,externalSlotProps:nt,additionalProps:g,getSlotProps:y=>L(f({},y,{onClick:M=>{j&&j(M),y!=null&&y.onClick&&y.onClick(M)}})),className:V(nt==null?void 0:nt.className,g==null?void 0:g.className,X==null?void 0:X.backdrop),ownerState:q});return!D&&!O&&(!ht||U)?null:F.jsx(ue,{ref:z,container:C,disablePortal:w,children:F.jsxs(et,f({},Tt,{children:[!$&&p?F.jsx(lt,f({},Rt)):null,F.jsx(Oe,{disableEnforceFocus:x,disableAutoFocus:u,disableRestoreFocus:S,isEnabled:pt,open:O,children:c.cloneElement(h,tt)})]}))})}),Ue=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function wt(t){return`scale(${t}, ${t**2})`}const We={entering:{opacity:1,transform:wt(1)},entered:{opacity:1,transform:"none"}},kt=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Jt=c.forwardRef(function(e,r){const{addEndListener:n,appear:s=!0,children:o,easing:i,in:a,onEnter:l,onEntered:d,onEntering:p,onExit:g,onExited:P,onExiting:k,style:h,timeout:C="auto",TransitionComponent:T=G}=e,N=K(e,Ue),A=ne(),u=c.useRef(),x=Vt(),b=c.useRef(null),w=Q(b,o.ref,r),S=m=>E=>{if(m){const v=b.current;E===void 0?m(v):m(v,E)}},I=S(p),$=S((m,E)=>{Zt(m);const{duration:v,delay:L,easing:H}=vt({style:h,timeout:C,easing:i},{mode:"enter"});let z;C==="auto"?(z=x.transitions.getAutoHeightDuration(m.clientHeight),u.current=z):z=v,m.style.transition=[x.transitions.create("opacity",{duration:z,delay:L}),x.transitions.create("transform",{duration:kt?z:z*.666,delay:L,easing:H})].join(","),l&&l(m,E)}),D=S(d),j=S(k),O=S(m=>{const{duration:E,delay:v,easing:L}=vt({style:h,timeout:C,easing:i},{mode:"exit"});let H;C==="auto"?(H=x.transitions.getAutoHeightDuration(m.clientHeight),u.current=H):H=E,m.style.transition=[x.transitions.create("opacity",{duration:H,delay:v}),x.transitions.create("transform",{duration:kt?H:H*.666,delay:kt?v:v||H*.333,easing:L})].join(","),m.style.opacity=0,m.style.transform=wt(.75),g&&g(m)}),_=S(P),R=m=>{C==="auto"&&A.start(u.current||0,m),n&&n(b.current,m)};return F.jsx(T,f({appear:s,in:a,nodeRef:b,onEnter:$,onEntered:D,onEntering:I,onExit:O,onExited:_,onExiting:j,addEndListener:R,timeout:C==="auto"?null:C},N,{children:(m,E)=>c.cloneElement(o,f({style:f({opacity:0,transform:wt(.75),visibility:m==="exited"&&!a?"hidden":void 0},We[m],h,o.props.style),ref:w},E))}))});Jt.muiSupportAuto=!0;const ze=c.createContext({});function Ke(t){return xt("MuiList",t)}bt("MuiList",["root","padding","dense","subheader"]);const Ge=["children","className","component","dense","disablePadding","subheader"],Xe=t=>{const{classes:e,disablePadding:r,dense:n,subheader:s}=t;return Pt({root:["root",!r&&"padding",n&&"dense",s&&"subheader"]},Ke,e)},Ye=at("ul",{name:"MuiList",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,!r.disablePadding&&e.padding,r.dense&&e.dense,r.subheader&&e.subheader]}})(({ownerState:t})=>f({listStyle:"none",margin:0,padding:0,position:"relative"},!t.disablePadding&&{paddingTop:8,paddingBottom:8},t.subheader&&{paddingTop:0})),ln=c.forwardRef(function(e,r){const n=yt({props:e,name:"MuiList"}),{children:s,className:o,component:i="ul",dense:a=!1,disablePadding:l=!1,subheader:d}=n,p=K(n,Ge),g=c.useMemo(()=>({dense:a}),[a]),P=f({},n,{component:i,dense:a,disablePadding:l}),k=Xe(P);return F.jsx(ze.Provider,{value:g,children:F.jsxs(Ye,f({as:i,className:V(k.root,o),ref:r,ownerState:P},p,{children:[d,s]}))})});function Ve(t){return xt("MuiPopover",t)}bt("MuiPopover",["root","paper"]);const qe=["onEntering"],Ze=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Je=["slotProps"];function zt(t,e){let r=0;return typeof e=="number"?r=e:e==="center"?r=t.height/2:e==="bottom"&&(r=t.height),r}function Kt(t,e){let r=0;return typeof e=="number"?r=e:e==="center"?r=t.width/2:e==="right"&&(r=t.width),r}function Gt(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Ct(t){return typeof t=="function"?t():t}const Qe=t=>{const{classes:e}=t;return Pt({root:["root"],paper:["paper"]},Ve,e)},tn=at(je,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),en=at(oe,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),cn=c.forwardRef(function(e,r){var n,s,o;const i=yt({props:e,name:"MuiPopover"}),{action:a,anchorEl:l,anchorOrigin:d={vertical:"top",horizontal:"left"},anchorPosition:p,anchorReference:g="anchorEl",children:P,className:k,container:h,elevation:C=8,marginThreshold:T=16,open:N,PaperProps:A={},slots:u,slotProps:x,transformOrigin:b={vertical:"top",horizontal:"left"},TransitionComponent:w=Jt,transitionDuration:S="auto",TransitionProps:{onEntering:I}={},disableScrollLock:$=!1}=i,D=K(i.TransitionProps,qe),j=K(i,Ze),O=(n=x==null?void 0:x.paper)!=null?n:A,_=c.useRef(),R=Q(_,O.ref),m=f({},i,{anchorOrigin:d,anchorReference:g,elevation:C,marginThreshold:T,externalPaperSlotProps:O,transformOrigin:b,TransitionComponent:w,transitionDuration:S,TransitionProps:D}),E=Qe(m),v=c.useCallback(()=>{if(g==="anchorPosition")return p;const y=Ct(l),B=(y&&y.nodeType===1?y:Y(_.current).body).getBoundingClientRect();return{top:B.top+zt(B,d.vertical),left:B.left+Kt(B,d.horizontal)}},[l,d.horizontal,d.vertical,p,g]),L=c.useCallback(y=>({vertical:zt(y,b.vertical),horizontal:Kt(y,b.horizontal)}),[b.horizontal,b.vertical]),H=c.useCallback(y=>{const M={width:y.offsetWidth,height:y.offsetHeight},B=L(M);if(g==="none")return{top:null,left:null,transformOrigin:Gt(B)};const Mt=v();let ot=Mt.top-B.vertical,rt=Mt.left-B.horizontal;const Ot=ot+M.height,It=rt+M.width,Dt=ft(Ct(l)),Lt=Dt.innerHeight-T,Ft=Dt.innerWidth-T;if(T!==null&&ot<T){const W=ot-T;ot-=W,B.vertical+=W}else if(T!==null&&Ot>Lt){const W=Ot-Lt;ot-=W,B.vertical+=W}if(T!==null&&rt<T){const W=rt-T;rt-=W,B.horizontal+=W}else if(It>Ft){const W=It-Ft;rt-=W,B.horizontal+=W}return{top:`${Math.round(ot)}px`,left:`${Math.round(rt)}px`,transformOrigin:Gt(B)}},[l,g,v,L,T]),[z,pt]=c.useState(N),U=c.useCallback(()=>{const y=_.current;if(!y)return;const M=H(y);M.top!==null&&(y.style.top=M.top),M.left!==null&&(y.style.left=M.left),y.style.transformOrigin=M.transformOrigin,pt(!0)},[H]);c.useEffect(()=>($&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[l,$,U]);const ht=(y,M)=>{I&&I(y,M),U()},q=()=>{pt(!1)};c.useEffect(()=>{N&&U()}),c.useImperativeHandle(a,()=>N?{updatePosition:()=>{U()}}:null,[N,U]),c.useEffect(()=>{if(!N)return;const y=te(()=>{U()}),M=ft(l);return M.addEventListener("resize",y),()=>{y.clear(),M.removeEventListener("resize",y)}},[l,N,U]);let X=S;S==="auto"&&!w.muiSupportAuto&&(X=void 0);const tt=h||(l?Y(Ct(l)).body:void 0),et=(s=u==null?void 0:u.root)!=null?s:tn,lt=(o=u==null?void 0:u.paper)!=null?o:en,ct=gt({elementType:lt,externalSlotProps:f({},O,{style:z?O.style:f({},O.style,{opacity:0})}),additionalProps:{elevation:C,ref:R},ownerState:m,className:V(E.paper,O==null?void 0:O.className)}),nt=gt({elementType:et,externalSlotProps:(x==null?void 0:x.root)||{},externalForwardedProps:j,additionalProps:{ref:r,slotProps:{backdrop:{invisible:!0}},container:tt,open:N},ownerState:m,className:V(E.root,k)}),{slotProps:Tt}=nt,Rt=K(nt,Je);return F.jsx(et,f({},Rt,!Yt(et)&&{slotProps:Tt,disableScrollLock:$},{children:F.jsx(w,f({appear:!0,in:N,onEntering:ht,onExited:q,timeout:X},D,{children:F.jsx(lt,f({},ct,{children:P}))}))}))});export{xe as B,he as F,Jt as G,ln as L,je as M,ue as P,G as T,Oe as a,ze as b,se as c,Zt as d,cn as e,ce as f,vt as g,re as h,en as i,ie as m,ae as r,gt as u};
