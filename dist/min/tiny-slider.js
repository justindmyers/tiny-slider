!function(){"use strict";var t,e,n,i,r=window,a=document,o=Object,d=null,s=!0,u=!1,c=" ",l="Element",f="create"+l,v="DOMTokenList",h="__defineGetter__",m="defineProperty",p="class",b="List",g=p+b,y="rel",w=y+b,A="div",E="length",L="contains",x="apply",C="HTML",T=("item "+L+" add remove toggle toString toLocaleString").split(c),M=T[2],N=T[3],S=T[4],P="prototype",k=m in o||h in o[P]||d,D=function(t,e,n,i){o[m]?o[m](t,e,{configurable:u===k?s:!!i,get:n}):t[h](e,n)},O=function(e,n){var i=this,r=[],a={},d=0,l=0,f=function(){if(d>=l)for(;l<d;++l)(function(t){D(i,t,function(){return v(),r[t]},u)})(l)},v=function(){var t,i,o=arguments,u=/\s+/;if(o[E])for(i=0;i<o[E];++i)if(u.test(o[i]))throw t=new SyntaxError('String "'+o[i]+'" '+L+" an invalid character"),t.code=5,t.name="InvalidCharacterError",t;for(r=(""+e[n]).replace(/^\s+|\s+$/g,"").split(u),""===r[0]&&(r=[]),a={},i=0;i<r[E];++i)a[r[i]]=s;d=r[E],f()};return v(),D(i,E,function(){return v(),d}),i[T[6]]=i[T[5]]=function(){return v(),r.join(c)},i.item=function(t){return v(),r[t]},i[L]=function(t){return v(),!!a[t]},i[M]=function(){v[x](i,t=arguments);for(var t,o,u=0,l=t[E];u<l;++u)o=t[u],a[o]||(r.push(o),a[o]=s);d!==r[E]&&(d=r[E]>>>0,e[n]=r.join(c),f())},i[N]=function(){v[x](i,t=arguments);for(var t,o={},u=0,l=[];u<t[E];++u)o[t[u]]=s,delete a[t[u]];for(u=0;u<r[E];++u)o[r[u]]||l.push(r[u]);r=l,d=l[E]>>>0,e[n]=r.join(c),f()},i[S]=function(e,n){return v[x](i,[e]),t!==n?n?(i[M](e),s):(i[N](e),u):a[e]?(i[N](e),u):(i[M](e),s)},function(t,e){if(e)for(var n=0;n<7;++n)e(t,T[n],{enumerable:u})}(i,o[m]),i},F=function(t,e,n){D(t[P],e,function(){var t,i=this,r=h+m+e;if(i[r])return t;if(i[r]=s,u===k){for(var o,d=F.mirror=F.mirror||a[f](A),c=d.childNodes,l=c[E],v=0;v<l;++v)if(c[v]._R===i){o=c[v];break}o||(o=d.appendChild(a[f](A))),t=O.call(o,i,n)}else t=new O(i,n);return D(i,e,function(){return t}),delete i[r],t},s)};if(r[v])e=a[f](A)[g],P=r[v][P],e[M][x](e,T),2>e[E]&&(n=P[M],i=P[N],P[M]=function(){for(var t=0,e=arguments;t<e[E];++t)n.call(this,e[t])},P[N]=function(){for(var t=0,e=arguments;t<e[E];++t)i.call(this,e[t])}),e[S](b,u)&&(P[S]=function(e,n){var i=this;return i[(n=t===n?!i[L](e):n)?M:N](e),!!n});else{if(k)try{D({},"support")}catch(t){k=u}O.polyfill=s,r[v]=O,F(r[l],g,p+"Name"),F(r[C+"Link"+l],w,y),F(r[C+"Anchor"+l],w,y),F(r[C+"Area"+l],w,y)}}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){"use strict";for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}(),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var gn=function(t){return t}(window.gn||{});gn.extend=function(){for(var t,e,n,i=arguments[0]||{},r=1,a=arguments.length;r<a;r++)if(null!==(t=arguments[r]))for(e in t)n=t[e],i!==n&&void 0!==n&&(i[e]=n);return i},gn.isInViewport=function(t){var e=t.getBoundingClientRect();return e.bottom>0&&e.right>0&&e.top<document.documentElement.clientHeight&&e.left<document.documentElement.clientWidth},gn.indexOf=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},gn.getSupportedProp=function(t){for(var e=document.documentElement,n=0;n<t.length;n++)if(t[n]in e.style)return t[n]},gn.ready=function(t){if("function"==typeof t)return"complete"===document.readyState?t():void document.addEventListener("DOMContentLoaded",t,!1)},gn.isNodeList=function(t){return"undefined"!=typeof t.item},gn.append=function(t,e){var n,i=gn.isNodeList(t)?t:[t];if("undefined"!=typeof e.nodeType&&1===e.nodeType)for(n=i.length;n--;)i[n].appendChild(e);else if("string"==typeof e)for(n=i.length;n--;)i[n].insertAdjacentHTML("beforeend",e);else if(gn.isNodeList(e)){var r=document.createDocumentFragment();for(n=e.length;n--;)r.insertBefore(e[n],r.firstChild);for(var a=i.length;a--;)i[a].appendChild(r)}},gn.wrap=function(t,e){for(var n=gn.isNodeList(t)?t:[t],i=n.length;i--;){var r=i>0?e.cloneNode(!0):e,a=n[i],o=a.parentNode,d=a.nextSibling;r.appendChild(a),d?o.insertBefore(r,d):o.appendChild(r)}},gn.unwrap=function(t){for(var e=gn.isNodeList(t)?t:[t],n=e.length;n--;){for(var i=e[n],r=i.parentNode;i.firstChild;)r.insertBefore(i.firstChild,i);r.removeChild(i)}};var tinySlider=function(){"use strict";function t(t){function c(){st.className="tiny-slider",gn.wrap(dt,st),dt.classList.add("tiny-content",at),qt&&(dt.addEventListener("touchstart",X,!1),dt.addEventListener("touchmove",K,!1),dt.addEventListener("touchend",V,!1),dt.addEventListener("touchcancel",V,!1))}function l(){navigator.msMaxTouchPoints&&(st.classList.add("ms-touch"),st.addEventListener("scroll",_,!1))}function f(){""===dt.id?dt.id=J=e():J=dt.id;for(var t=0;t<ct;t++)ut[t].id=J+"item"+t}function v(){if(Pt||mt){for(var t=document.createDocumentFragment(),e=document.createDocumentFragment(),n=It;n--;){var i=ut[n].cloneNode(!0),r=ut[ct-1-n].cloneNode(!0);i.id="",r.id="",t.insertBefore(i,t.firstChild),e.appendChild(r)}dt.appendChild(t),dt.insertBefore(e,dt.firstChild),lt=dt.children.length,ut=dt.children}}function h(){ot=ee(),Q=ne(),it=ie(),Ft=Ot||"page"===t.slideBy?ot:t.slideBy,ct<=ot?(At=gt=Ct=Pt=St=!1,Bt=0):(At=t.nav,gt=t.controls,Ct=t.autoplay,Pt=!t.rewind&&t.loop,St=t.rewind)}function m(){if(At)if(jt)Et&&Et.hasAttribute("hidden")&&a(Et,"hidden");else{if(!t.navContainer){for(var e="",n=0;n<ct;n++)e+='<button data-slide="'+n+'" tabindex="-1" aria-selected="false" aria-controls="'+J+"item"+n+'" type="button"></button>';Ct&&(e+='<button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Nt[0]+"</button>"),e='<div class="tiny-nav" aria-label="Carousel Pagination">'+e+"</div>",gn.append(st,e),Et=st.querySelector(".tiny-nav")}et=Et.querySelectorAll("[data-slide]"),nt=et.length,Et.hasAttribute("aria-label")||(r(Et,{"aria-label":"Carousel Pagination"}),r(et,{tabindex:"-1","aria-selected":"false","aria-controls":J+"item"+i}));for(var i=0;i<nt;i++)et[i].addEventListener("click",q,!1),et[i].addEventListener("keydown",U,!1);jt=!0}else jt&&Et&&!Et.hasAttribute("hidden")&&r(Et,{hidden:"true"})}function p(){gt?Rt?wt.hasAttribute("hidden")&&a(wt,"hidden"):(t.controlsContainer||(gn.append(st,'<div class="tiny-controls" aria-label="Carousel Navigation"><button data-controls="prev" tabindex="-1" aria-controls="'+J+'" type="button">'+yt[0]+'</button><button data-controls="next" tabindex="0" aria-controls="'+J+'" type="button">'+yt[1]+"</button></div>"),wt=st.querySelector(".tiny-controls")),Z=wt.querySelector('[data-controls="prev"]'),tt=wt.querySelector('[data-controls="next"]'),wt.hasAttribute("tabindex")||(r(wt,{"aria-label":"Carousel Navigation"}),r(wt.children,{"aria-controls":J,tabindex:"-1"}),r(tt,{tabindex:"0"})),Pt||P(),Z.addEventListener("click",F,!1),tt.addEventListener("click",W,!1),Z.addEventListener("keydown",G,!1),tt.addEventListener("keydown",G,!1),Rt=!0):Rt&&!wt.hasAttribute("hidden")&&r(wt,{hidden:"true"})}function b(){if(Ct)if(zt)Kt.hasAttribute("hidden")&&a(Kt,"hidden");else{if(Et||(gn.append(st,'<div class="tiny-nav" aria-label="Carousel Pagination"><button data-action="stop" type="button"><span hidden>Stop Animation</span>'+Nt[0]+"</button></div>"),Et=st.querySelector(".tiny-nav")),Kt=Et.querySelector("[data-action]"),I(),Kt.addEventListener("click",B,!1),gt&&(Z.addEventListener("click",j,!1),tt.addEventListener("click",j,!1)),At)for(var t=0;t<nt;t++)et[t].addEventListener("click",j,!1);zt=!0}else zt&&!Kt.hasAttribute("hidden")&&r(Kt,{hidden:"true"})}function g(){if(!Gt||!bt){if(dt.style.width=(Q+1)*lt+"px",mt){var t=mt;if(bt){var e=st.clientWidth;t=(e-Q*Math.floor(e/Q)+ft)/2}dt.style.paddingLeft=t+"px"}var n=It*Q+ht;dt.style.marginLeft=-n+"px";for(var i=lt;i--;)ut[i].style.width=Q-ft+"px"}if(!Gt&&0!==ft)for(var i=lt;i--;)ut[i].style[vt]=ft+"px";Gt=!0}function y(t){return"boolean"==typeof t.complete?t.complete:"number"==typeof t.naturalWidth?0!==t.naturalWidth:void 0}function w(t){for(var e=t.length;e--;)y(t[e])&&t.splice(e,1);0===t.length?A():setTimeout(function(){w(t)},16)}function A(){for(var t,e=re(),n=[],i=e-pt;i<e+ot;i++)n.push(ut[i].offsetHeight);t=Math.max.apply(null,n),d&&(dt.style[d]=xt/1e3+"s"),dt.style.height=t+"px",Ut=!0,setTimeout(function(){d&&(dt.style[d]="0s"),Ut=!1},xt)}function E(){navigator.msMaxTouchPoints&&(st.style.msScrollSnapPointsX="snapInterval(0%, "+Q+")")}function L(){if(At&&!t.navContainer)for(var e=nt;e--;){var n=et[e];e<it?n.hasAttribute("hidden")&&n.removeAttribute("hidden"):n.hasAttribute("hidden")||n.setAttribute("hidden","")}}function x(){h(),g(),m(),L(),p(),b(),E(),ae(0),oe(),T()}function C(t){dt.setAttribute("aria-busy","true"),Ut=!0,ae(t),oe(),setTimeout(function(){Pt&&M(),T(),Ut=!1,dt.setAttribute("aria-busy","false")},xt*t)}function T(){N(),At&&S(),gt&&!Pt&&P(),Wt&&k(),kt&&D()}function M(){var t=Ft-It+pt,e=ct+It-ot-Ft-1;(Bt<t||Bt>e)&&(Bt-ct>=t&&Bt-ct<=e?Bt-=ct:Bt+=ct,Ut=!0,ae(0),oe(),Ut=!1)}function N(){for(var t=lt;t--;){var e=re(),n=ut[t];t>=e&&t<e+ot?n.hasAttribute("aria-hidden")&&"true"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","false"):n.hasAttribute("aria-hidden")&&"false"!==n.getAttribute("aria-hidden")||n.setAttribute("aria-hidden","true")}}function S(){var e;if(Ht===-1){var n=Bt<0?Bt+ct:Bt>=ct?Bt-ct:Bt;if(e=t.navContainer?n:Math.floor(n/ot),!Pt&&!t.navContainer){var i=/^-?[0-9]+$/,r=i.test(ct/ot);r||Bt!==ct-ot||(e+=1)}}else e=Ht,Ht=-1;for(var a=it;a--;){var o=et[a];a===e?"false"===o.getAttribute("aria-selected")&&(o.setAttribute("tabindex","0"),o.setAttribute("aria-selected","true")):"true"===o.getAttribute("aria-selected")&&(o.setAttribute("tabindex","-1"),o.setAttribute("aria-selected","false"))}}function P(){0===Bt?(Z.disabled=!0,Z.setAttribute("tabindex","-1"),tt.setAttribute("tabindex","0"),z(Z,tt)):Z.disabled=!1,St||Bt!==ct-ot?tt.disabled=!1:(tt.disabled=!0,tt.setAttribute("tabindex","-1"),Z.setAttribute("tabindex","0"),z(tt,Z))}function k(){if(gn.isInViewport(dt)){for(var t=[],e=Bt+It,n=e-1;n<e+ot+1;n++){for(var i=ut[n].querySelectorAll(".tiny-lazy"),r=i.length;r--;t.unshift(i[r]));t.unshift()}for(var a=t.length;a--;){var o=t[a];o.classList.contains("loaded")||(o.src=o.getAttribute("data-src"),o.classList.add("loaded"))}}}function D(){for(var t=re(),e=[],n=lt;n--;)if(n>=t-1&&n<=t+ot)for(var i=ut[n].querySelectorAll("img"),r=i.length;r--;)e.push(i[r]);0===e.length?A():w(e)}function O(t){if(!Ut){var e=Bt+t*Ft,n=Math.abs(t*Ft);Bt=Pt?e:Math.max(0,Math.min(e,ct-ot)),C(n)}}function F(){O(-1)}function W(){O(St&&Bt===ct-ot?(ot-ct)/Ft:1)}function q(e){if(!Ut){for(var n,i=e.target||e.srcElement;gn.indexOf(et,i)===-1;)i=i.parentNode;Ht=n=Number(i.getAttribute("data-slide"));var r,a;r=t.navContainer?n:n*ot,r=Pt?r:Math.min(r,ct-ot),a=Math.abs(r-Bt),Bt=r,C(a)}}function I(){Xt=setInterval(function(){O(Mt)},Tt),Kt.setAttribute("data-action","stop"),Kt.innerHTML="<span hidden>Stop Animation</span>"+Nt[1],Vt=!0}function H(){clearInterval(Xt),Kt.setAttribute("data-action","start"),Kt.innerHTML="<span hidden>Stop Animation</span>"+Nt[0],Vt=!1}function B(){Vt?H():I()}function j(){Vt&&H()}function R(t){t=t||window.event,t.keyCode===u.LEFT?O(-1):t.keyCode===u.RIGHT&&O(St&&Bt===ct-ot?(ot-ct)/Ft:1)}function z(t,e){"object"==typeof t&&"object"==typeof e&&t===document.activeElement&&(t.blur(),e.focus())}function G(t){t=t||window.event;var e=t.keyCode,n=document.activeElement;switch(e){case u.LEFT:case u.UP:case u.HOME:case u.PAGEUP:n!==Z&&Z.disabled!==!0&&z(n,Z);break;case u.RIGHT:case u.DOWN:case u.END:case u.PAGEDOWN:n!==tt&&tt.disabled!==!0&&z(n,tt);break;case u.ENTER:case u.SPACE:n===tt?W():F()}}function U(t){t=t||window.event;var e=t.keyCode,n=document.activeElement,i=n.getAttribute("data-slide");switch(e){case u.LEFT:case u.PAGEUP:i>0&&z(n,n.previousElementSibling);break;case u.UP:case u.HOME:0!==i&&z(n,et[0]);break;case u.RIGHT:case u.PAGEDOWN:i<it-1&&z(n,n.nextElementSibling);break;case u.DOWN:case u.END:i<it-1&&z(n,et[it-1]);break;case u.ENTER:case u.SPACE:q(t)}}function _(){dt.style[d]="0s",dt.style.transform="translate3d(-"+-dt.scrollLeft()+"px,0,0)"}function X(t){var e=t.changedTouches[0];Yt=parseInt(e.clientX),$t=parseInt(e.clientY)}function K(t){var e=t.changedTouches[0];Qt=parseInt(e.clientX)-Yt,Zt=parseInt(e.clientY)-$t;var r=n(Math.atan2(Zt,Qt)),a=i(r,15);if("horizontal"===a&&Ut===!1&&(te=!0),te){d&&(dt.style[d]="0s");var o=Pt?-(ct+It-ot)*Q:-(ct-ot)*Q,u=Pt?It*Q:0;!Pt&&bt&&(o=-(ct*Q-st.clientWidth)),Jt=-Bt*Q+Qt,Jt=Math.max(o,Math.min(Jt,u)),s?dt.style[s]="translate3d("+Jt+"px, 0, 0)":dt.style.left=Jt+"px",t.preventDefault()}}function V(t){var e=t.changedTouches[0];if(Qt=parseInt(e.clientX)-Yt,te&&0!==Qt){t.preventDefault(),te=!1,Jt=-Bt*Q+Qt;var n,i=Pt?-It:0,r=Pt?ct+It-ot:ct-ot;n=-(Jt/Q),n=Qt<0?Math.ceil(n):Math.floor(n),n=Math.max(i,Math.min(n,r)),Bt=n,C(1)}}function Y(){clearTimeout(rt),rt=setTimeout(function(){x()},100)}function $(){_t||window.requestAnimationFrame(function(){Wt&&k(),_t=!1}),_t=!0}if(t=gn.extend({container:document.querySelector(".slider"),transform:"horizontal",items:1,gutter:0,gutterPosition:"right",edgePadding:0,fixedWidth:!1,slideByPage:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,nav:!0,navContainer:!1,arrowKeys:!1,speed:250,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],loop:!0,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,rewind:!1},t||{}),"object"!=typeof t.container||null===t.container)return{init:function(){},destory:function(){}};var J,Q,Z,tt,et,nt,it,rt,at=t.transform,ot=t.items,dt=t.container,st=document.createElement("div"),ut=dt.children,ct=ut.length,lt=ut.length,ft=t.gutter,vt="right"===t.gutterPosition?"marginRight":"marginLeft",ht="marginLeft"===vt?ft:0,mt=t.edgePadding,pt=mt?1:0,bt=t.fixedWidth,gt=t.controls,yt=t.controlsText,wt=!!t.controlsContainer&&t.controlsContainer,At=t.nav,Et=!!t.navContainer&&t.navContainer,Lt=t.arrowKeys,xt=d?t.speed:0,Ct=t.autoplay,Tt=t.autoplayTimeout,Mt="forward"===t.autoplayDirection?1:-1,Nt=t.autoplayText,St=t.rewind,Pt=!t.rewind&&t.loop,kt=t.autoHeight,Dt=!bt&&t.responsive,Ot=t.slideByPage,Ft=Ot||"page"===t.slideBy?ot:t.slideBy,Wt=t.lazyload,qt=t.touch,It=Pt?ct:mt?1:0,Ht=-1,Bt=0,jt=!1,Rt=!1,zt=!1,Gt=!1,Ut=!1,_t=!1;if(Ct)var Xt,Kt,Vt=!1;if(qt)var Yt=0,$t=0,Jt=0,Qt=0,Zt=0,te=!1;var ee=function(){return bt?function(){return Math.max(1,Math.min(ct,Math.floor(st.clientWidth/bt)))}:function(){var e=t.items,n=document.documentElement.clientWidth,i="object"==typeof Dt&&Object.keys(Dt);if(i)for(var r=0;r<i.length;r++)n>=i[r]&&(e=Dt[i[r]]);return Math.max(1,Math.min(ct,e))}}(),ne=function(){return bt?function(){return bt+ft}:function(){return(st.clientWidth+ft-2*mt)/ot}}(),ie=function(){return t.navContainer?function(){return ct}:function(){return Math.ceil(ct/ot)}}(),re=function(){return Bt+It},ae=function(){return d?function(t){dt.style[d]=xt*t/1e3+"s"}:function(){}}(),oe=function(){return s?function(){dt.style[s]="translate3d("+-Q*Bt+"px, 0, 0)"}:function(){dt.style.left=-Q*Bt+"px"}}();return{init:function(){c(),l(),f(),v(),x(),Lt&&document.addEventListener("keydown",R,!1),window.addEventListener("resize",Y,!1),window.addEventListener("scroll",$,!1)},destory:function(){if(gn.unwrap(st),st=null,dt.classList.remove("tiny-content",at),a(dt,["id","style"]),Pt)for(var e=It;e--;)ut[0].remove(),ut[ut.length-1].remove();a(ut,["id","style","aria-hidden"]),J=ct=null,gt&&(t.controlsContainer?(a(wt,["aria-label"]),a(wt.children,["aria-controls","tabindex"]),o(wt)):(wt.remove(),wt=Z=tt=null)),At&&(t.navContainer?(a(Et,["aria-label"]),a(et,["aria-selected","aria-controls","tabindex"]),o(Et)):(Et.remove(),Et=null),et=nt=null),Ct&&(t.navContainer||null===Et?o(Kt):(Et.remove(),Et=null)),qt&&o(dt),Lt&&document.removeEventListener("keydown",Lt,!1),window.removeEventListener("resize",Y,!1),window.removeEventListener("scroll",$,!1)}}}function e(){return void 0===window.tinySliderNumber?window.tinySliderNumber=1:window.tinySliderNumber++,"tinySlider"+window.tinySliderNumber}function n(t){return t*(180/Math.PI)}function i(t,e){return Math.abs(90-Math.abs(t))>=90-e?"horizontal":Math.abs(90-Math.abs(t))<=e&&"vertical"}function r(t,e){if(t=gn.isNodeList(t)?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function a(t,e){t=gn.isNodeList(t)?t:[t],e=e instanceof Array?e:[e];for(var n=e.length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function o(t){var e=t.cloneNode(!0),n=t.parentNode;n.insertBefore(e,t),t.remove(),t=null}var d=gn.getSupportedProp(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),s=gn.getSupportedProp(["transform","WebkitTransform","MozTransform","OTransform"]),u={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};return t}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map