"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[4198],{34198:(v,_,d)=>{d.r(_),d.d(_,{registerFunctions:()=>y});var s=d(15861),f=d(6729),e=d(47562),m=d(77132);function l(r){return r&&r.domain?f.Z.convertObjectToArcadeDictionary("coded-value"===r.domain.type||"codedValue"===r.domain.type?{type:"codedValue",name:r.domain.name,dataType:m.yE[r.field.type],codedValues:r.domain.codedValues.map(o=>({name:o.name,code:o.code}))}:{type:"range",name:r.domain.name,dataType:m.yE[r.field.type],min:r.domain.min,max:r.domain.max}):null}function y(r){"async"===r.mode&&(r.functions.domain=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,2,3),(0,e.s)(n[0]))return l((0,e.T)(n[0],(0,e.h)(n[1]),void 0===n[2]?void 0:(0,e.f)(n[2])));if((0,e.y)(n[0]))return yield n[0]._ensureLoaded(),l((0,e.Z)((0,e.h)(n[1]),n[0],null,void 0===n[2]?void 0:(0,e.f)(n[2])));throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())},r.functions.subtypes=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,1,1),(0,e.s)(n[0])){const c=(0,e.Q)(n[0]);return c?f.Z.convertObjectToArcadeDictionary(c):null}if((0,e.y)(n[0])){yield n[0]._ensureLoaded();const c=n[0].subtypes();return c?f.Z.convertObjectToArcadeDictionary(c):null}throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())},r.functions.domainname=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,2,4),(0,e.s)(n[0]))return(0,e.U)(n[0],(0,e.h)(n[1]),n[2],void 0===n[3]?void 0:(0,e.f)(n[3]));if((0,e.y)(n[0])){yield n[0]._ensureLoaded();const c=(0,e.Z)((0,e.h)(n[1]),n[0],null,void 0===n[3]?void 0:(0,e.f)(n[3]));return(0,e._)(c,n[2])}throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())},r.signatures.push({name:"domainname",min:"2",max:"4"}),r.functions.domaincode=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,2,4),(0,e.s)(n[0]))return(0,e.V)(n[0],(0,e.h)(n[1]),n[2],void 0===n[3]?void 0:(0,e.f)(n[3]));if((0,e.y)(n[0])){yield n[0]._ensureLoaded();const c=(0,e.Z)((0,e.h)(n[1]),n[0],null,void 0===n[3]?void 0:(0,e.f)(n[3]));return(0,e.$)(c,n[2])}throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())},r.signatures.push({name:"domaincode",min:"2",max:"4"})),r.functions.text=function(o,i){return r.standardFunctionAsync(o,i,function(a,u,t){if((0,e.p)(t,1,2),!(0,e.y)(t[0]))return(0,e.t)(t[0],t[1]);{const n=(0,e.C)(t[1],"");if(""===n)return t[0].castToText();if("schema"===n.toLowerCase())return t[0].convertToText("schema",a.abortSignal);if("featureset"===n.toLowerCase())return t[0].convertToText("featureset",a.abortSignal)}})},r.functions.gdbversion=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,1,1),(0,e.s)(n[0]))return n[0].gdbVersion();if((0,e.y)(n[0]))return(yield n[0].load()).gdbVersion;throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())},r.functions.schema=function(o,i){return r.standardFunctionAsync(o,i,function(){var a=(0,s.Z)(function*(u,t,n){if((0,e.p)(n,1,1),(0,e.y)(n[0]))return yield n[0].load(),f.Z.convertObjectToArcadeDictionary(n[0].schema());if((0,e.s)(n[0])){const c=(0,e.P)(n[0]);return c?f.Z.convertObjectToArcadeDictionary(c):null}throw new Error("Invalid Parameter")});return function(u,t,n){return a.apply(this,arguments)}}())}}}}]);