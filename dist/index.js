"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var o=s(function(B,m){
var x=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,a,f){var t,u,i,n;if(e<=0)return NaN;if(e===1||a===0)return v(r[f]);for(u=f,n=0;n<e&&(i=r[u],i!==i);n++)u+=a;if(n===e)return NaN;for(t=v(i),n+=1,n;n<e;n++)u+=a,i=v(r[u]),!x(i)&&i<t&&(t=i);return t}m.exports=l
});var d=s(function(C,c){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=o();function k(e,r,a){return _(e,r,a,R(e,a))}c.exports=k
});var y=s(function(D,p){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=d(),O=o();E(b,"ndarray",O);p.exports=b
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),q,j=h(g(__dirname,"./native.js"));w(j)?q=z:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
