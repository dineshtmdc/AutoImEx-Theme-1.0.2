"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[234],{3609:(t,e,n)=>{n.d(e,{Z:()=>o}),n(4043),n(7409);const o={email:function(t){return/^.+@.+\..+/.test(t)},password:function(t){return this.notEmpty(t)},notEmpty:function(t){return t.length>0}}},6234:(t,e,n)=>{n.r(e),n.d(e,{default:()=>s}),n(5399),n(1517),n(1013);var o=n(9230),r=n(97),c=n(3609),a=n(5825);function i(t,e){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},i(t,e)}var s=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n);var s=o.prototype;return s.onReady=function(){this.registerContactFormValidation()},s.registerContactFormValidation=function(){var t="form[data-contact-form]",e=(0,r.Z)({submit:t+' input[type="submit"]'}),n=a(t);e.add([{selector:t+' input[name="contact_email"]',validate:function(t,e){t(c.Z.email(e))},errorMessage:this.context.contactEmail},{selector:t+' textarea[name="contact_question"]',validate:function(t,e){t(c.Z.notEmpty(e))},errorMessage:this.context.contactQuestion}]),n.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},o}(o.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.234.js.map