"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[587],{10587:(L,P,o)=>{o.r(P),o.d(P,{addOrUpdateResource:()=>R,contentToBlob:()=>x,fetchResources:()=>D,getSiblingOfSameType:()=>A,getSiblingOfSameTypeI:()=>C,removeAllResources:()=>M,removeResource:()=>U,splitPrefixFileNameAndExtension:()=>f});var i=o(15861),O=o(84792),E=o(26584),l=o(62208),a=o(21726);function D(e){return _.apply(this,arguments)}function _(){return(_=(0,i.Z)(function*(e,t={},r){yield e.load(r);const n=(0,a.v_)(e.itemUrl,"resources"),{start:u=1,num:g=10,sortOrder:c="asc",sortField:p="created"}=t,v={query:{start:u,num:g,sortOrder:c,sortField:p,token:e.apiKey},signal:(0,l.U2)(r,"signal")},s=yield e.portal._request(n,v);return{total:s.total,nextStart:s.nextStart,resources:s.resources.map(({created:b,size:B,resource:F})=>({created:new Date(b),size:B,resource:e.resourceFromPath(F)}))}})).apply(this,arguments)}function R(e,t,r,n){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)(function*(e,t,r,n){if(!e.hasPath())throw new E.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;yield u.load(n);const g=(0,a.v_)(u.userItemUrl,"add"===t?"addResources":"updateResources"),[c,p]=I(e.path),v=yield x(r),s=new FormData;return c&&"."!==c&&s.append("resourcesPrefix",c),s.append("fileName",p),s.append("file",v,p),s.append("f","json"),(0,l.pC)(n)&&n.access&&s.append("access",n.access),yield u.portal._request(g,{method:"post",body:s,signal:(0,l.U2)(n,"signal")}),e})).apply(this,arguments)}function U(e,t,r){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(function*(e,t,r){if(!t.hasPath())throw new E.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");yield e.load(r);const n=(0,a.v_)(e.userItemUrl,"removeResources");yield e.portal._request(n,{method:"post",query:{resource:t.path},signal:(0,l.U2)(r,"signal")}),t.portalItem=null})).apply(this,arguments)}function M(e,t){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)(function*(e,t){yield e.load(t);const r=(0,a.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,l.U2)(t,"signal")})})).apply(this,arguments)}function I(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function f(e){const[t,r]=function T(e){const t=(0,a.Ml)(e);return(0,l.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[n,u]=I(t);return[n,u,r]}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)(function*(e){return e instanceof Blob?e:(yield(0,O.default)(e.url,{responseType:"blob"})).data})).apply(this,arguments)}function A(e,t){if(!e.hasPath())return null;const[r,,n]=f(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+n))}function C(e,t){if(!e.hasPath())return null;const[r,,n]=f(e.path);return e.portalItem.resourceFromPath((0,a.v_)(r,t+n))}}}]);