"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[7373,5994],{36592:(w,C,y)=>{y.d(C,{Q:()=>Y});var A=y(85931),Z=y(62208),O=y(77029),X=y(14259);class Y{constructor(t=9,e){this.compareMinX=P,this.compareMinY=i,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),g.prune(),_.prune(),o.prune(),m.prune()}all(t){this._all(this.data,t)}search(t,e){let n=this.data;const a=this._toBBox;if(r(t,n))for(g.clear();n;){for(let l=0,x=n.children.length;l<x;l++){const M=n.children[l],B=n.leaf?a(M):M;r(t,B)&&(n.leaf?e(M):s(t,B)?this._all(M,e):g.push(M))}n=g.pop()}}collides(t){let e=this.data;const n=this._toBBox;if(!r(t,e))return!1;for(g.clear();e;){for(let a=0,l=e.children.length;a<l;a++){const x=e.children[a],M=e.leaf?n(x):x;if(r(t,M)){if(e.leaf||s(t,M))return!0;g.push(x)}}e=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,a=t.length;n<a;n++)this.insert(t[n]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this.data.children.length)if(this.data.height===e.height)this._splitRoot(this.data,e);else{if(this.data.height<e.height){const n=this.data;this.data=e,e=n}this._insert(e,this.data.height-e.height-1,!0)}else this.data=e;return this}insert(t){return t&&this._insert(t,this.data.height-1),this}clear(){return this.data=new E([]),this}remove(t){var B;if(!t)return this;let e,n=this.data,a=null,l=0,x=!1;const M=this._toBBox(t);for(o.clear(),m.clear();n||o.length>0;){if(n||(n=(0,Z.j0)(o.pop()),a=o.data[o.length-1],l=null!=(B=m.pop())?B:0,x=!0),n.leaf&&(e=(0,A.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),o.push(n),this._condense(o),this;x||n.leaf||!s(n,M)?a?(l++,n=a.children[l],x=!1):n=null:(o.push(n),m.push(l),l=0,a=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(t){return this.data=t,this}_all(t,e){var a;let n=t;for(_.clear();n;){if(!0===n.leaf)for(const l of n.children)e(l);else _.pushArray(n.children);n=null!=(a=_.pop())?a:null}}_build(t,e,n,a){const l=n-e+1;let x=this._maxEntries;if(l<=x){const b=new E(t.slice(e,n+1));return T(b,this._toBBox),b}a||(a=Math.ceil(Math.log(l)/Math.log(x)),x=Math.ceil(l/x**(a-1)));const M=new N([]);M.height=a;const B=Math.ceil(l/x),R=B*Math.ceil(Math.sqrt(x));f(t,e,n,R,this.compareMinX);for(let b=e;b<=n;b+=R){const D=Math.min(b+R-1,n);f(t,b,D,B,this.compareMinY);for(let L=b;L<=D;L+=B){const F=Math.min(L+B-1,D);M.children.push(this._build(t,L,F,a-1))}}return T(M,this._toBBox),M}_chooseSubtree(t,e,n,a){for(;a.push(e),!0!==e.leaf&&a.length-1!==n;){let l,x=1/0,M=1/0;for(let B=0,R=e.children.length;B<R;B++){const b=e.children[B],D=d(b),L=u(t,b)-D;L<M?(M=L,x=D<x?D:x,l=b):L===M&&D<x&&(x=D,l=b)}e=l||e.children[0]}return e}_insert(t,e,n){const l=n?t:(0,this._toBBox)(t);o.clear();const x=this._chooseSubtree(l,this.data,e,o);for(x.children.push(t),S(x,l);e>=0&&o.data[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(l,o,e)}_split(t,e){const n=t.data[e],a=n.children.length,l=this._minEntries;this._chooseSplitAxis(n,l,a);const x=this._chooseSplitIndex(n,l,a);if(!x)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const M=n.children.splice(x,n.children.length-x),B=n.leaf?new E(M):new N(M);B.height=n.height,T(n,this._toBBox),T(B,this._toBBox),e?t.data[e-1].children.push(B):this._splitRoot(n,B)}_splitRoot(t,e){this.data=new N([t,e]),this.data.height=t.height+1,T(this.data,this._toBBox)}_chooseSplitIndex(t,e,n){let a,l,x;a=l=1/0;for(let M=e;M<=n-e;M++){const B=j(t,0,M,this._toBBox),R=j(t,M,n,this._toBBox),b=h(B,R),D=d(B)+d(R);b<a?(a=b,x=M,l=D<l?D:l):b===a&&D<l&&(l=D,x=M)}return x}_chooseSplitAxis(t,e,n){const a=t.leaf?this.compareMinX:P,l=t.leaf?this.compareMinY:i;this._allDistMargin(t,e,n,a)<this._allDistMargin(t,e,n,l)&&t.children.sort(a)}_allDistMargin(t,e,n,a){t.children.sort(a);const l=this._toBBox,x=j(t,0,e,l),M=j(t,n-e,n,l);let B=p(x)+p(M);for(let R=e;R<n-e;R++){const b=t.children[R];S(x,t.leaf?l(b):b),B+=p(x)}for(let R=n-e-1;R>=e;R--){const b=t.children[R];S(M,t.leaf?l(b):b),B+=p(M)}return B}_adjustParentBBoxes(t,e,n){for(let a=n;a>=0;a--)S(e.data[a],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const a=t.data[e-1],l=a.children;l.splice((0,A.cq)(l,n,l.length,a.indexHint),1)}else this.clear();else T(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function T(c,t){j(c,0,c.children.length,t,c)}function j(c,t,e,n,a){a||(a=new E([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let l,x=t;x<e;x++)l=c.children[x],S(a,c.leaf?n(l):l);return a}function S(c,t){c.minX=Math.min(c.minX,t.minX),c.minY=Math.min(c.minY,t.minY),c.maxX=Math.max(c.maxX,t.maxX),c.maxY=Math.max(c.maxY,t.maxY)}function P(c,t){return c.minX-t.minX}function i(c,t){return c.minY-t.minY}function d(c){return(c.maxX-c.minX)*(c.maxY-c.minY)}function p(c){return c.maxX-c.minX+(c.maxY-c.minY)}function u(c,t){return(Math.max(t.maxX,c.maxX)-Math.min(t.minX,c.minX))*(Math.max(t.maxY,c.maxY)-Math.min(t.minY,c.minY))}function h(c,t){const e=Math.max(c.minX,t.minX),n=Math.max(c.minY,t.minY),a=Math.min(c.maxX,t.maxX),l=Math.min(c.maxY,t.maxY);return Math.max(0,a-e)*Math.max(0,l-n)}function s(c,t){return c.minX<=t.minX&&c.minY<=t.minY&&t.maxX<=c.maxX&&t.maxY<=c.maxY}function r(c,t){return t.minX<=c.maxX&&t.minY<=c.maxY&&t.maxX>=c.minX&&t.maxY>=c.minY}function f(c,t,e,n,a){const l=[t,e];for(;l.length;){const x=(0,Z.j0)(l.pop()),M=(0,Z.j0)(l.pop());if(x-M<=n)continue;const B=M+Math.ceil((x-M)/n/2)*n;(0,X.q)(c,B,M,x,a),l.push(M,B,B,x)}}const g=new O.Z,_=new O.Z,o=new O.Z,m=new O.Z({deallocator:void 0});class I extends class v{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new A.SO}}class E extends I{constructor(t){super(),this.children=t,this.leaf=!0}}class N extends I{constructor(t){super(),this.children=t,this.leaf=!1}}},15994:(w,C,y)=>{y.d(C,{N:()=>A});const A={convertToGEGeometry:function Z(u,h){return null==h?null:u.convertJSONToGeometry(h)},exportPoint:function X(u,h,s){const r=new O(u.getPointX(h),u.getPointY(h),s),f=u.hasZ(h),g=u.hasM(h);return f&&(r.z=u.getPointZ(h)),g&&(r.m=u.getPointM(h)),r},exportPolygon:function T(u,h,s){return new Y(u.exportPaths(h),s,u.hasZ(h),u.hasM(h))},exportPolyline:function S(u,h,s){return new j(u.exportPaths(h),s,u.hasZ(h),u.hasM(h))},exportMultipoint:function i(u,h,s){return new P(u.exportPoints(h),s,u.hasZ(h),u.hasM(h))},exportExtent:function p(u,h,s){const r=u.hasZ(h),f=u.hasM(h),g=new d(u.getXMin(h),u.getYMin(h),u.getXMax(h),u.getYMax(h),s);if(r){const _=u.getZExtent(h);g.zmin=_.vmin,g.zmax=_.vmax}if(f){const _=u.getMExtent(h);g.mmin=_.vmin,g.mmax=_.vmax}return g}};class O{constructor(h,s,r){this.x=h,this.y=s,this.spatialReference=r,this.z=void 0,this.m=void 0}}class Y{constructor(h,s,r,f){this.rings=h,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),f&&(this.hasM=f)}}class j{constructor(h,s,r,f){this.paths=h,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),f&&(this.hasM=f)}}class P{constructor(h,s,r,f){this.points=h,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,r&&(this.hasZ=r),f&&(this.hasM=f)}}class d{constructor(h,s,r,f,g){this.xmin=h,this.ymin=s,this.xmax=r,this.ymax=f,this.spatialReference=g,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},77044:(w,C,y)=>{y.d(C,{Y:()=>O});var A=y(62208);function Z(i,d){return i?d?4:3:d?3:2}function O(i,d,p,u,h){if((0,A.Wi)(d)||!d.lengths.length)return null;const s="upperLeft"===(null==h?void 0:h.originPosition)?-1:1;i.lengths.length&&(i.lengths.length=0),i.coords.length&&(i.coords.length=0);const r=i.coords,f=[],g=p?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:_,coords:o}=d,m=Z(p,u);let v=0;for(const I of _){const E=X(g,o,v,I,p,u,s);E&&f.push(E),v+=I*m}if(f.sort((I,E)=>{let N=s*I[2]-s*E[2];return 0===N&&p&&(N=I[4]-E[4]),N}),f.length){let I=6*f[0][2];r[0]=f[0][0]/I,r[1]=f[0][1]/I,p&&(I=6*f[0][4],r[2]=0!==I?f[0][3]/I:0),(r[0]<g[0]||r[0]>g[1]||r[1]<g[2]||r[1]>g[3]||p&&(r[2]<g[4]||r[2]>g[5]))&&(r.length=0)}if(!r.length){const I=d.lengths[0]?function Y(i,d,p,u,h){const s=Z(u,h);let r=d,f=d+s,g=0,_=0,o=0,m=0;for(let v=0,I=p-1;v<I;v++,r+=s,f+=s){const E=i[r],N=i[r+1],c=i[r+2],t=i[f],e=i[f+1],n=i[f+2],a=u?j(E,N,c,t,e,n):T(E,N,t,e);if(a)if(g+=a,u){const l=P(E,N,c,t,e,n);_+=a*l[0],o+=a*l[1],m+=a*l[2]}else{const l=S(E,N,t,e);_+=a*l[0],o+=a*l[1]}}return g>0?u?[_/g,o/g,m/g]:[_/g,o/g]:p>0?u?[i[d],i[d+1],i[d+2]]:[i[d],i[d+1]]:null}(o,0,_[0],p,u):null;if(!I)return null;r[0]=I[0],r[1]=I[1],p&&I.length>2&&(r[2]=I[2])}return i}function X(i,d,p,u,h,s,r=1){const f=Z(h,s);let g=p,_=p+f,o=0,m=0,v=0,I=0,E=0;for(let c=0,t=u-1;c<t;c++,g+=f,_+=f){const e=d[g],n=d[g+1],a=d[g+2],l=d[_],x=d[_+1],M=d[_+2];let B=e*x-l*n;I+=B,o+=(e+l)*B,m+=(n+x)*B,h&&(B=e*M-l*a,v+=(a+M)*B,E+=B),e<i[0]&&(i[0]=e),e>i[1]&&(i[1]=e),n<i[2]&&(i[2]=n),n>i[3]&&(i[3]=n),h&&(a<i[4]&&(i[4]=a),a>i[5]&&(i[5]=a))}if(I*r>0&&(I*=-1),E*r>0&&(E*=-1),!I)return null;const N=[o,m,.5*I];return h&&(N[3]=v,N[4]=.5*E),N}function T(i,d,p,u){const h=p-i,s=u-d;return Math.sqrt(h*h+s*s)}function j(i,d,p,u,h,s){const r=u-i,f=h-d,g=s-p;return Math.sqrt(r*r+f*f+g*g)}function S(i,d,p,u){return[i+.5*(p-i),d+.5*(u-d)]}function P(i,d,p,u,h,s){return[i+.5*(u-i),d+.5*(h-d),p+.5*(s-p)]}},61256:(w,C,y)=>{y.d(C,{H:()=>S});var A=y(8314),Z=y(36592),O=y(65401);const Y={minX:0,minY:0,maxX:0,maxY:0};class S{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new Z.Q(9,(0,A.Z)("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let d=0;this._idByBounds.forEach((p,u)=>{i[d++]=u}),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(i=>this._idByBounds.has(i))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const i=(0,O.cS)();for(const d of this._boundsById.values())d&&(i[0]=Math.min(d[0],i[0]),i[1]=Math.min(d[1],i[1]),i[2]=Math.max(d[2],i[2]),i[3]=Math.max(d[3],i[3]));return i}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const d=this._boundsById.get(i);this._boundsById.delete(i),d&&(this._idByBounds.delete(d),this._indexInvalid||this._index.remove(d))}forEachInBounds(i,d){this._loadIndex(),function j(P,i,d){(function T(P){Y.minX=P[0],Y.minY=P[1],Y.maxX=P[2],Y.maxY=P[3]})(i),P.search(Y,d)}(this._index,i,p=>d(this._idByBounds.get(p)))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,d){if(!this._indexInvalid){const p=this._boundsById.get(i);p&&(this._index.remove(p),this._idByBounds.delete(p))}this._boundsById.set(i,d),d&&(this._idByBounds.set(d,i),this._indexInvalid||(this._boundsToLoad.push(d),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},82708:(w,C,y)=>{y.d(C,{Z:()=>u});var A=y(26584),Z=y(61885),O=y(63290),X=y(62208),Y=y(5548),T=y(65401),j=y(82054),S=y(61256),P=y(77044),i=y(66385),d=y(88071);const p={getObjectId:h=>h.objectId,getAttributes:h=>h.attributes,getAttribute:(h,s)=>h.attributes[s],cloneWithGeometry:(h,s)=>new i.u_(s,h.attributes,null,h.objectId),getGeometry:h=>h.geometry,getCentroid:(h,s)=>((0,X.Wi)(h.centroid)&&(h.centroid=(0,P.Y)(new d.Z,h.geometry,s.hasZ,s.hasM)),h.centroid)};class u{constructor(s){this.geometryInfo=s,this._boundsStore=new S.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new Z.Z,this.featureAdapter=p}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let s=0;return this._featuresById.forEach(r=>{(0,X.pC)(r.geometry)&&r.geometry.coords&&(s+=r.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:s/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(s){this._add(s),this._emitChanged()}addMany(s){for(const r of s)this._add(r);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(s){const r=this._featuresById.get(s);return r?(this._remove(r),this._emitChanged(),r):null}removeManyById(s){this._boundsStore.invalidateIndex();for(const r of s){const f=this._featuresById.get(r);f&&this._remove(f)}this._emitChanged()}forEachBounds(s,r,f){for(const g of s){const _=this._boundsStore.get(g.objectId);_&&r((0,Y.JR)(f,_))}}getFeature(s){return this._featuresById.get(s)}has(s){return this._featuresById.has(s)}toArray(){return Array.from(this._featuresById.values())}forEach(s){this._featuresById.forEach(r=>s(r))}forEachInBounds(s,r){this._boundsStore.forEachInBounds(s,f=>{r(this._featuresById.get(f))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let s=!1;this._featuresById.forEach((r,f)=>{this._markedIds.has(f)||(s=!0,this._remove(r))}),this._markedIds.clear(),s&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(s){if(!s)return;const r=s.objectId;if(null==r)return void O.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new A.Z("featurestore:invalid-feature","feature id is missing",{feature:s}));const f=this._featuresById.get(r);let g;if(this._markedIds.add(r),f?(s.displayId=f.displayId,g=this._boundsStore.get(r),this._boundsStore.delete(r)):(0,X.pC)(this.onFeatureAdd)&&this.onFeatureAdd(s),(0,X.Wi)(s.geometry)||!s.geometry.coords||!s.geometry.coords.length)return this._boundsStore.set(r,null),void this._featuresById.set(r,s);g=(0,j.$)((0,X.pC)(g)?g:(0,T.Ue)(),s.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,X.pC)(g)&&this._boundsStore.set(r,g),this._featuresById.set(r,s)}_remove(s){return(0,X.pC)(this.onFeatureRemove)&&this.onFeatureRemove(s),this._markedIds.delete(s.objectId),this._boundsStore.delete(s.objectId),this._featuresById.delete(s.objectId),s}}},82959:(w,C,y)=>{y.d(C,{_W:()=>d,iV:()=>s,oj:()=>g});var A=y(15861),Z=y(62208),O=y(54614),X=y(15994),Y=y(37053),T=y(46367);const j=[0,0];function S(_,o){if(!o)return null;if("x"in o){const m={x:0,y:0};return[m.x,m.y]=_(o.x,o.y,j),null!=o.z&&(m.z=o.z),null!=o.m&&(m.m=o.m),m}if("xmin"in o){const m={xmin:0,ymin:0,xmax:0,ymax:0};return[m.xmin,m.ymin]=_(o.xmin,o.ymin,j),[m.xmax,m.ymax]=_(o.xmax,o.ymax,j),o.hasZ&&(m.zmin=o.zmin,m.zmax=o.zmax,m.hasZ=!0),o.hasM&&(m.mmin=o.mmin,m.mmax=o.mmax,m.hasM=!0),m}return"rings"in o?{rings:P(o.rings,_),hasM:o.hasM,hasZ:o.hasZ}:"paths"in o?{paths:P(o.paths,_),hasM:o.hasM,hasZ:o.hasZ}:"points"in o?{points:i(o.points,_),hasM:o.hasM,hasZ:o.hasZ}:void 0}function P(_,o){const m=[];for(const v of _)m.push(i(v,o));return m}function i(_,o){const m=[];for(const v of _){const I=o(v[0],v[1],[0,0]);m.push(I),v.length>2&&I.push(v[2]),v.length>3&&I.push(v[3])}return m}function d(_,o){return p.apply(this,arguments)}function p(){return(p=(0,A.Z)(function*(_,o){if(!o)return;const m=Array.isArray(_)?_.map(v=>(0,Z.pC)(v.geometry)&&v.geometry.spatialReference):[_];yield(0,O.iQ)(m.map(v=>({source:v,dest:o})))})).apply(this,arguments)}const u=S.bind(null,T.hG),h=S.bind(null,T.R6);function s(_,o,m,v){if(!_||(m||(m=o,o=_.spatialReference),!(0,Y.JY)(o)||!(0,Y.JY)(m)||(0,Y.fS)(o,m)))return _;if((0,T.Q8)(o,m)){const I=(0,Y.sS)(m)?u(_):h(_);return I.spatialReference=m,I}return(0,O.oj)(X.N,[_],o,m,null,v)[0]}const f=new class r{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}push(o,m,v){var I=this;return(0,A.Z)(function*(){if(!o||!o.length||!m||!v||(0,Y.fS)(m,v))return o;const E={geometries:o,inSpatialReference:m,outSpatialReference:v,resolve:null};return I._jobs.push(E),new Promise(N=>{E.resolve=N,null===I._timer&&(I._timer=setTimeout(I._process,10))})})()}_process(){this._timer=null;const o=this._jobs.shift();if(!o)return;const{geometries:m,inSpatialReference:v,outSpatialReference:I,resolve:E}=o;(0,T.Q8)(v,I)?(0,Y.sS)(I)?E(m.map(u)):E(m.map(h)):E((0,O.oj)(X.N,m,v,I,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(_,o,m){return f.push(_,o,m)}}}]);