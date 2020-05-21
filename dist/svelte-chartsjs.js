!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self)["svelte-chartsjs"]={})}(this,(function(t){"use strict";function n(){}function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function f(t){t.parentNode.removeChild(t)}function a(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}let l;function p(t){l=t}function $(){if(!l)throw new Error("Function called outside component initialization");return l}const d=[],h=[],g=[],m=[],y=Promise.resolve();let x=!1;function b(t){g.push(t)}let w=!1;const _=new Set;function v(){if(!w){w=!0;do{for(let t=0;t<d.length;t+=1){const n=d[t];p(n),j(n.$$)}for(d.length=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const n=g[t];_.has(n)||(_.add(n),n())}g.length=0}while(d.length);for(;m.length;)m.pop()();x=!1,w=!1,_.clear()}}function j(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(b)}}const E=new Set;function k(t,n){t&&t.i&&(E.delete(t),t.i(n))}function B(t,n,e,o){if(t&&t.o){if(E.has(t))return;E.add(t),(void 0).c.push(()=>{E.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function P(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=n[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(e[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function z(t){return"object"==typeof t&&null!==t?t:{}}function M(t){t&&t.c()}function O(t,n,e){const{fragment:r,on_mount:u,on_destroy:i,after_update:f}=t.$$;r&&r.m(n,e),b(()=>{const n=u.map(o).filter(c);i?i.push(...n):s(n),t.$$.on_mount=[]}),f.forEach(b)}function S(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function q(t,n){-1===t.$$.dirty[0]&&(d.push(t),x||(x=!0,y.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function A(t,e,o,c,u,i,a=[-1]){const $=l;p(t);const d=e.props||{},h=t.$$={fragment:null,ctx:null,props:i,update:n,not_equal:u,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map($?$.$$.context:[]),callbacks:r(),dirty:a};let g=!1;if(h.ctx=o?o(t,d,(n,e,...o)=>{const r=o.length?o[0]:e;return h.ctx&&u(h.ctx[n],h.ctx[n]=r)&&(h.bound[n]&&h.bound[n](r),g&&q(t,n)),e}):[],h.update(),g=!0,s(h.before_update),h.fragment=!!c&&c(h.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();e.intro&&k(t.$$.fragment),O(t,e.target,e.anchor),v()}p($)}class N{$destroy(){S(this,1),this.$destroy=n}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function R(t){let e;return{c(){var n;n="canvas",e=document.createElement(n),a(e,"display","block"),a(e,"height",t[0]+"px"),a(e,"width",t[1]+"px")},m(n,o){!function(t,n,e){t.insertBefore(n,e||null)}(n,e,o),t[8](e)},p(t,[n]){1&n&&a(e,"height",t[0]+"px"),2&n&&a(e,"width",t[1]+"px")},i:n,o:n,d(n){n&&f(e),t[8](null)}}}function C(t,n,e){const o=require("chart.js");let r,{height:s=276}=n,{width:c=533}=n,{data:u={labels:[],datasets:[{values:[]}],yMarkers:{},yRegions:[]}}=n,{type:i="line"}=n,{options:f={}}=n,a=null;var l;return l=()=>{a=new o(r,{type:i,data:u,options:f})},$().$$.on_mount.push(l),function(t){$().$$.after_update.push(t)}(()=>a.update(u)),function(t){$().$$.on_destroy.push(t)}(()=>{a=null}),t.$set=t=>{"height"in t&&e(0,s=t.height),"width"in t&&e(1,c=t.width),"data"in t&&e(3,u=t.data),"type"in t&&e(4,i=t.type),"options"in t&&e(5,f=t.options)},[s,c,r,u,i,f,a,o,function(t){h[t?"unshift":"push"](()=>{e(2,r=t)})}]}class D extends N{constructor(t){super(),A(this,t,C,R,u,{height:0,width:1,data:3,type:4,options:5})}}function F(t){let n;const o=[t[0],{type:"line"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function H(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function L(t){let n;const o=[t[0],{type:"radar"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function G(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function I(t){let n;const o=[t[0],{type:"doughnut"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function J(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function K(t){let n;const o=[t[0],{type:"pie"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Q(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function T(t){let n;const o=[t[0],{type:"bar"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function U(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function V(t){let n;const o=[t[0],{type:"horizontalBar"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function W(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function X(t){let n;const o=[t[0],{type:"polarArea"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function Y(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function Z(t){let n;const o=[t[0],{type:"bubble"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function tt(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}function nt(t){let n;const o=[t[0],{type:"scatter"}];let r={};for(let t=0;t<o.length;t+=1)r=e(r,o[t]);const s=new D({props:r});return{c(){M(s.$$.fragment)},m(t,e){O(s,t,e),n=!0},p(t,[n]){const e=1&n?P(o,[z(t[0]),o[1]]):{};s.$set(e)},i(t){n||(k(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){S(s,t)}}}function et(t,n,o){return t.$set=t=>{o(0,n=e(e({},n),i(t)))},[n=i(n)]}t.Bar=class extends N{constructor(t){super(),A(this,t,U,T,u,{})}},t.Bubble=class extends N{constructor(t){super(),A(this,t,tt,Z,u,{})}},t.Doughnut=class extends N{constructor(t){super(),A(this,t,J,I,u,{})}},t.HorizontalBar=class extends N{constructor(t){super(),A(this,t,W,V,u,{})}},t.Line=class extends N{constructor(t){super(),A(this,t,H,F,u,{})}},t.Pie=class extends N{constructor(t){super(),A(this,t,Q,K,u,{})}},t.Polar=class extends N{constructor(t){super(),A(this,t,Y,X,u,{})}},t.Radar=class extends N{constructor(t){super(),A(this,t,G,L,u,{})}},t.Scatter=class extends N{constructor(t){super(),A(this,t,et,nt,u,{})}},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=svelte-chartsjs.js.map
