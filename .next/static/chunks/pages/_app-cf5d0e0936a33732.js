(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8484)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,o=n(7273).Z,l=r(n(7294)),u=n(1003),a=n(7795),c=n(4465),i=n(2692),f=n(8245),s=n(9246),d=n(227),p=n(3468);let h=new Set;function v(e,t,n,r){if(u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+o;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function y(e){return"string"==typeof e?e:a.formatUrl(e)}let b=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:h,children:b,prefetch:_,passHref:j,replace:g,shallow:m,scroll:x,locale:C,onClick:M,onMouseEnter:E,onTouchStart:k,legacyBehavior:O=!1}=e,P=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=b,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let w=!1!==_,N=l.default.useContext(i.RouterContext),L=l.default.useContext(f.AppRouterContext),R=null!=N?N:L,T=!N,{href:S,as:I}=l.default.useMemo(()=>{if(!N){let e=y(a);return{href:e,as:h?y(h):e}}let[e,t]=u.resolveHref(N,a,!0);return{href:e,as:h?u.resolveHref(N,h):t||e}},[N,a,h]),H=l.default.useRef(S),D=l.default.useRef(I);O&&(r=l.default.Children.only(n));let K=O?r&&"object"==typeof r&&r.ref:t,[U,A,B]=s.useIntersection({rootMargin:"200px"}),F=l.default.useCallback(e=>{(D.current!==I||H.current!==S)&&(B(),D.current=I,H.current=S),U(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[I,K,S,B,U]);l.default.useEffect(()=>{R&&A&&w&&v(R,S,I,{locale:C})},[I,S,A,C,w,null==N?void 0:N.locale,R]);let X={ref:F,onClick(e){O||"function"!=typeof M||M(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,r,o,a,c,i,f,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s})};f?l.default.startTransition(h):h()}(e,R,S,I,g,m,x,C,T,w)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),R&&(w||!T)&&v(R,S,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),R&&(w||!T)&&v(R,S,I,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!O||j||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&d.getDomainLocale(I,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);X.href=t||p.addBasePath(c.addLocale(I,e,null==N?void 0:N.defaultLocale))}return O?l.default.cloneElement(r,X):l.default.createElement("a",Object.assign({},P,X),n)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,i=c||!l,[f,s]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(i||f)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=a.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:o},a.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=a.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!f){let e=o.requestIdleCallback(()=>s(!0));return()=>o.cancelIdleCallback(e)}},[i,n,t,f,d.current]);let h=r.useCallback(()=>{s(!1)},[]);return[p,f,h]};var r=n(7294),o=n(4686);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8484:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(5893);n(9105);var o=n(1664),l=n.n(o),u=n(1163);function a(e){let{Component:t,pageProps:n}=e,o=(0,u.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"OurSite"}),(0,r.jsx)("nav",{className:"header-nav",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(l(),{className:"/"==o.pathname?"active":"",href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{className:"/about"==o.pathname?"active":"",href:"/about",children:"About"})}),(0,r.jsx)("li",{children:(0,r.jsx)(l(),{className:"/blog"==o.pathname?"active":"",href:"/blog",children:"Blog"})})]})})]}),(0,r.jsx)("p",{children:"Header"}),(0,r.jsx)(t,{...n}),(0,r.jsx)("p",{children:"Footer"})]})}},9105:function(){},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);