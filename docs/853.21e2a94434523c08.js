"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[853],{550:(at,X,a)=>{function g(){return[1,0,0,0,1,0,0,0,1]}function B(O,m){return new Float64Array(O,m,9)}a.d(X,{a:()=>B,c:()=>g}),Object.freeze(Object.defineProperty({__proto__:null,create:g,clone:function j(O){return[O[0],O[1],O[2],O[3],O[4],O[5],O[6],O[7],O[8]]},fromValues:function S(O,m,y,h,c,W,f,A,R){return[O,m,y,h,c,W,f,A,R]},createView:B},Symbol.toStringTag,{value:"Module"}))},43703:(at,X,a)=>{function g(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function j(m){return[m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]]}function B(m,y){return new Float64Array(m,y,16)}a.d(X,{I:()=>I,a:()=>B,b:()=>j,c:()=>g});const I=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:g,clone:j,fromValues:function S(m,y,h,c,W,f,A,R,F,b,Z,z,Q,J,E,U){return[m,y,h,c,W,f,A,R,F,b,Z,z,Q,J,E,U]},createView:B,IDENTITY:I},Symbol.toStringTag,{value:"Module"}))},48977:(at,X,a)=>{a.d(X,{c:()=>z,g:()=>h,j:()=>L,k:()=>J,m:()=>c,s:()=>y});var g=a(550),j=a(78451),S=a(28093),B=a(39863),I=a(84161),O=a(993);function y(t,r,d){d*=.5;const l=Math.sin(d);return t[0]=l*r[0],t[1]=l*r[1],t[2]=l*r[2],t[3]=Math.cos(d),t}function h(t,r){const d=2*Math.acos(r[3]),l=Math.sin(d/2);return l>B.E?(t[0]=r[0]/l,t[1]=r[1]/l,t[2]=r[2]/l):(t[0]=1,t[1]=0,t[2]=0),d}function c(t,r,d){const l=r[0],P=r[1],C=r[2],V=r[3],N=d[0],w=d[1],ot=d[2],_t=d[3];return t[0]=l*_t+V*N+P*ot-C*w,t[1]=P*_t+V*w+C*N-l*ot,t[2]=C*_t+V*ot+l*w-P*N,t[3]=V*_t-l*N-P*w-C*ot,t}function F(t,r,d,l){const P=r[0],C=r[1],V=r[2],N=r[3];let w,ot,_t,ct,it,ut=d[0],lt=d[1],ft=d[2],Et=d[3];return ot=P*ut+C*lt+V*ft+N*Et,ot<0&&(ot=-ot,ut=-ut,lt=-lt,ft=-ft,Et=-Et),1-ot>B.E?(w=Math.acos(ot),_t=Math.sin(w),ct=Math.sin((1-l)*w)/_t,it=Math.sin(l*w)/_t):(ct=1-l,it=l),t[0]=ct*P+it*ut,t[1]=ct*C+it*lt,t[2]=ct*V+it*ft,t[3]=ct*N+it*Et,t}function z(t,r){return t[0]=-r[0],t[1]=-r[1],t[2]=-r[2],t[3]=r[3],t}function Q(t,r){const d=r[0]+r[4]+r[8];let l;if(d>0)l=Math.sqrt(d+1),t[3]=.5*l,l=.5/l,t[0]=(r[5]-r[7])*l,t[1]=(r[6]-r[2])*l,t[2]=(r[1]-r[3])*l;else{let P=0;r[4]>r[0]&&(P=1),r[8]>r[3*P+P]&&(P=2);const C=(P+1)%3,V=(P+2)%3;l=Math.sqrt(r[3*P+P]-r[3*C+C]-r[3*V+V]+1),t[P]=.5*l,l=.5/l,t[3]=(r[3*C+V]-r[3*V+C])*l,t[C]=(r[3*C+P]+r[3*P+C])*l,t[V]=(r[3*V+P]+r[3*P+V])*l}return t}function J(t,r,d,l){const P=.5*Math.PI/180;r*=P,d*=P,l*=P;const C=Math.sin(r),V=Math.cos(r),N=Math.sin(d),w=Math.cos(d),ot=Math.sin(l),_t=Math.cos(l);return t[0]=C*w*_t-V*N*ot,t[1]=V*N*_t+C*w*ot,t[2]=V*w*ot-C*N*_t,t[3]=V*w*_t+C*N*ot,t}const U=O.c,p=O.s,Y=O.a,K=c,$=O.b,et=O.d,H=O.l,k=O.e,x=k,q=O.f,G=q,M=O.n,L=O.g,o=O.h,n=(0,S.c)(),u=(0,S.f)(1,0,0),T=(0,S.f)(0,1,0),v=(0,j.a)(),nt=(0,j.a)(),st=(0,g.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:function m(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},setAxisAngle:y,getAxisAngle:h,multiply:c,rotateX:function W(t,r,d){d*=.5;const l=r[0],P=r[1],C=r[2],V=r[3],N=Math.sin(d),w=Math.cos(d);return t[0]=l*w+V*N,t[1]=P*w+C*N,t[2]=C*w-P*N,t[3]=V*w-l*N,t},rotateY:function f(t,r,d){d*=.5;const l=r[0],P=r[1],C=r[2],V=r[3],N=Math.sin(d),w=Math.cos(d);return t[0]=l*w-C*N,t[1]=P*w+V*N,t[2]=C*w+l*N,t[3]=V*w-P*N,t},rotateZ:function A(t,r,d){d*=.5;const l=r[0],P=r[1],C=r[2],V=r[3],N=Math.sin(d),w=Math.cos(d);return t[0]=l*w+P*N,t[1]=P*w-l*N,t[2]=C*w+V*N,t[3]=V*w-C*N,t},calculateW:function R(t,r){const d=r[0],l=r[1],P=r[2];return t[0]=d,t[1]=l,t[2]=P,t[3]=Math.sqrt(Math.abs(1-d*d-l*l-P*P)),t},slerp:F,random:function b(t){const r=(0,B.R)(),d=(0,B.R)(),l=(0,B.R)(),P=Math.sqrt(1-r),C=Math.sqrt(r);return t[0]=P*Math.sin(2*Math.PI*d),t[1]=P*Math.cos(2*Math.PI*d),t[2]=C*Math.sin(2*Math.PI*l),t[3]=C*Math.cos(2*Math.PI*l),t},invert:function Z(t,r){const d=r[0],l=r[1],P=r[2],C=r[3],V=d*d+l*l+P*P+C*C,N=V?1/V:0;return t[0]=-d*N,t[1]=-l*N,t[2]=-P*N,t[3]=C*N,t},conjugate:z,fromMat3:Q,fromEuler:J,str:function E(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"},copy:U,set:p,add:Y,mul:K,scale:$,dot:et,lerp:H,length:k,len:x,squaredLength:q,sqrLen:G,normalize:M,exactEquals:L,equals:o,rotationTo:function _(t,r,d){const l=(0,I.e)(r,d);return l<-.999999?((0,I.f)(n,u,r),(0,I.u)(n)<1e-6&&(0,I.f)(n,T,r),(0,I.n)(n,n),y(t,n,Math.PI),t):l>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,I.f)(n,r,d),t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=1+l,M(t,t))},sqlerp:function D(t,r,d,l,P,C){return F(v,r,P,C),F(nt,d,l,C),F(t,v,nt,2*C*(1-C)),t},setAxes:function rt(t,r,d,l){const P=st;return P[0]=d[0],P[3]=d[1],P[6]=d[2],P[1]=l[0],P[4]=l[1],P[7]=l[2],P[2]=-r[0],P[5]=-r[1],P[8]=-r[2],M(t,Q(t,P))}},Symbol.toStringTag,{value:"Module"}))},78451:(at,X,a)=>{function g(){return[0,0,0,1]}function j(m){return[m[0],m[1],m[2],m[3]]}function B(m,y){return new Float64Array(m,y,4)}a.d(X,{I:()=>I,a:()=>g,b:()=>j,c:()=>B});const I=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,create:g,clone:j,fromValues:function S(m,y,h,c){return[m,y,h,c]},createView:B,IDENTITY:I},Symbol.toStringTag,{value:"Module"}))},79800:(at,X,a)=>{a.d(X,{a:()=>S,b:()=>O,n:()=>I,s:()=>B,t:()=>j});var g=a(96286);function j(y,h,c){if(y.count!==h.count)return void g.c.error("source and destination buffers need to have the same number of elements");const W=y.count,f=c[0],A=c[1],R=c[2],F=c[4],b=c[5],Z=c[6],z=c[8],Q=c[9],J=c[10],E=c[12],U=c[13],p=c[14],Y=y.typedBuffer,K=y.typedBufferStride,$=h.typedBuffer,et=h.typedBufferStride;for(let H=0;H<W;H++){const k=H*K,x=H*et,q=$[x],G=$[x+1],M=$[x+2];Y[k]=f*q+F*G+z*M+E,Y[k+1]=A*q+b*G+Q*M+U,Y[k+2]=R*q+Z*G+J*M+p}}function S(y,h,c){if(y.count!==h.count)return void g.c.error("source and destination buffers need to have the same number of elements");const W=y.count,f=c[0],A=c[1],R=c[2],F=c[3],b=c[4],Z=c[5],z=c[6],Q=c[7],J=c[8],E=y.typedBuffer,U=y.typedBufferStride,p=h.typedBuffer,Y=h.typedBufferStride;for(let K=0;K<W;K++){const $=K*U,et=K*Y,H=p[et],k=p[et+1],x=p[et+2];E[$]=f*H+F*k+z*x,E[$+1]=A*H+b*k+Q*x,E[$+2]=R*H+Z*k+J*x}}function B(y,h,c){const W=Math.min(y.count,h.count),f=y.typedBuffer,A=y.typedBufferStride,R=h.typedBuffer,F=h.typedBufferStride;for(let b=0;b<W;b++){const Z=b*A,z=b*F;f[Z]=c*R[z],f[Z+1]=c*R[z+1],f[Z+2]=c*R[z+2]}}function I(y,h){const c=Math.min(y.count,h.count),W=y.typedBuffer,f=y.typedBufferStride,A=h.typedBuffer,R=h.typedBufferStride;for(let F=0;F<c;F++){const b=F*f,Z=F*R,z=A[Z],Q=A[Z+1],J=A[Z+2],E=z*z+Q*Q+J*J;if(E>0){const U=1/Math.sqrt(E);W[b]=U*z,W[b+1]=U*Q,W[b+2]=U*J}}}function O(y,h,c){const W=Math.min(y.count,h.count),f=y.typedBuffer,A=y.typedBufferStride,R=h.typedBuffer,F=h.typedBufferStride;for(let b=0;b<W;b++){const Z=b*A,z=b*F;f[Z]=R[z]>>c,f[Z+1]=R[z+1]>>c,f[Z+2]=R[z+2]>>c}}Object.freeze(Object.defineProperty({__proto__:null,transformMat4:j,transformMat3:S,scale:B,normalize:I,shiftRight:O},Symbol.toStringTag,{value:"Module"}))},9554:(at,X,a)=>{function g(B,I,O){const m=B.typedBuffer,y=B.typedBufferStride,h=I.typedBuffer,c=I.typedBufferStride,W=O?O.count:I.count;let f=(O&&O.dstIndex?O.dstIndex:0)*y,A=(O&&O.srcIndex?O.srcIndex:0)*c;for(let R=0;R<W;++R)m[f]=h[A],m[f+1]=h[A+1],m[f+2]=h[A+2],f+=y,A+=c}function j(B,I,O,m,y){var A,R;const h=B.typedBuffer,c=B.typedBufferStride,W=null!=(A=null==y?void 0:y.count)?A:B.count;let f=(null!=(R=null==y?void 0:y.dstIndex)?R:0)*c;for(let F=0;F<W;++F)h[f]=I,h[f+1]=O,h[f+2]=m,f+=c}a.d(X,{c:()=>g,f:()=>j}),Object.freeze(Object.defineProperty({__proto__:null,copy:g,fill:j},Symbol.toStringTag,{value:"Module"}))},68019:(at,X,a)=>{a.d(X,{Z:()=>U});var J,g=a(17626),j=a(86810),S=a(62208),B=a(77712),y=(a(85931),a(8314),a(90912),a(76898)),h=a(28347),c=a(43703),W=a(84161),f=a(28093),A=a(49672),R=a(54614),F=a(12080),b=a(89586),Z=a(60479),z=a(79800),Q=a(9554);let E=J=class extends j.wq{constructor(p){super(p),this.origin=(0,f.c)(),this.translation=(0,f.c)(),this.rotation=(0,b.Ue)(),this.scale=(0,f.f)(1,1,1),this.geographic=!0}get localMatrix(){const p=(0,c.c)();return(0,h.u)(p,this.scale),(0,h.e)(p,p,(0,b.WH)(this.rotation),(0,b.ZZ)(this.rotation)),(0,h.j)(p,p,this.translation),p}get localMatrixInverse(){return(0,h.a)((0,c.c)(),this.localMatrix)}applyLocal(p,Y){return(0,W.m)(Y,p,this.localMatrix)}applyLocalInverse(p,Y){return(0,W.m)(Y,p,this.localMatrixInverse)}project(p,Y){const K=new Float64Array(p.length),$=Z.fP.fromTypedArray(K),et=Z.fP.fromTypedArray(p);if(this.geographic){const x=(0,F.rS)(Y),q=(0,c.c)();return(0,R.Bm)(Y,this.origin,q,x),(0,h.m)(q,q,this.localMatrix),(0,z.t)($,et,q),(0,R.CM)(K,x,0,K,Y,0,K.length/3),K}const{localMatrix:H,origin:k}=this;(0,h.v)(H,c.I)?(0,Q.c)($,et):(0,z.t)($,et,H);for(let x=0;x<K.length;x+=3)K[x+0]+=k[0],K[x+1]+=k[1],K[x+2]+=k[2];return K}getOriginPoint(p){const[Y,K,$]=this.origin;return new A.Z({x:Y,y:K,z:$,spatialReference:p})}equals(p){return(0,S.pC)(p)&&this.geographic===p.geographic&&(0,W.k)(this.origin,p.origin)&&(0,h.w)(this.localMatrix,p.localMatrix)}clone(){const p={origin:(0,f.a)(this.origin),translation:(0,f.a)(this.translation),rotation:(0,b.Ue)(this.rotation),scale:(0,f.a)(this.scale),geographic:this.geographic};return new J(p)}};(0,g._)([(0,B.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"origin",void 0),(0,g._)([(0,B.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"translation",void 0),(0,g._)([(0,B.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"rotation",void 0),(0,g._)([(0,B.Cb)({type:[Number],nonNullable:!0,json:{write:!0}})],E.prototype,"scale",void 0),(0,g._)([(0,B.Cb)({type:Boolean,nonNullable:!0,json:{write:!0}})],E.prototype,"geographic",void 0),(0,g._)([(0,B.Cb)()],E.prototype,"localMatrix",null),(0,g._)([(0,B.Cb)()],E.prototype,"localMatrixInverse",null),E=J=(0,g._)([(0,y.j)("esri.geometry.support.MeshTransform")],E);const U=E},89586:(at,X,a)=>{a.d(X,{Ue:()=>I,WH:()=>F,ZZ:()=>A,qC:()=>f,uT:()=>c});var g=a(21286),j=a(48977),S=a(78451),B=a(84161);function I(E=Z){return[E[0],E[1],E[2],E[3]]}function c(E,U,p=I()){return(0,B.c)(p,E),p[3]=U,p}function f(E,U,p=I()){return(0,j.s)(z,E,F(E)),(0,j.s)(Q,U,F(U)),(0,j.m)(z,Q,z),function b(E,U){return E[3]=U,E}(p,(0,g.BV)((0,j.g)(p,z)))}function A(E){return E}function F(E){return(0,g.Vl)(E[3])}const Z=[0,0,1,0],z=(0,S.a)(),Q=(0,S.a)();I()},96286:(at,X,a)=>{a.d(X,{c:()=>j});const j=a(63290).Z.getLogger("esri.views.3d.support.buffer.math")},92545:(at,X,a)=>{function g(j,S){var B;return j.isGeographic||j.isWebMercator&&(null==(B=null==S?void 0:S.geographic)||B)}a.d(X,{h:()=>g})},60853:(at,X,a)=>{a.d(X,{FF:()=>Z,I5:()=>F,Yq:()=>z,iv:()=>R,w1:()=>b});var g=a(62208),j=a(16730),S=a(550),B=a(28347),I=a(43703),O=a(30217),m=a(54614),y=a(12080),h=a(68019),c=a(60479),W=a(79800),f=a(92545),A=a(65231);function R(o,_,n){return(0,f.h)(_.spatialReference,n)?function J(o,_,n){const u=_.spatialReference,T=$(_,n,q),D=new Float64Array(o.position.length),v=function E(o,_,n,u){(0,W.t)(c.fP.fromTypedArray(u),c.fP.fromTypedArray(o),_);const T=new Float64Array(o.length);return(0,A.To)(u,T,n)}(o.position,T,u,D),nt=(0,O.a)(M,T);return{position:v,normal:U(v,D,o.normal,nt,u),tangent:p(v,D,o.tangent,nt,u)}}(o,_,n):function Q(o,_,n){const u=new Float64Array(o.position.length),T=o.position,D=_.x,v=_.y,nt=_.z||0,{horizontal:rt,vertical:st}=x(n?n.unit:null,_.spatialReference);for(let tt=0;tt<T.length;tt+=3)u[tt+0]=T[tt+0]*rt+D,u[tt+1]=T[tt+1]*rt+v,u[tt+2]=T[tt+2]*st+nt;return{position:u,normal:o.normal,tangent:o.tangent}}(o,_,n)}function F(o,_,n){const{position:u,normal:T,tangent:D}=o;if((0,g.Wi)(_))return{position:u,normal:T,tangent:D};const v=_.localMatrix;return R({position:(0,A.zZ)(u,new Float64Array(u.length),v),normal:(0,g.pC)(T)?(0,A.w9)(T,new Float32Array(T.length),v):null,tangent:(0,g.pC)(D)?(0,A.VS)(D,new Float32Array(D.length),v):null},_.getOriginPoint(n),{geographic:_.geographic})}function b(o,_,n){var u;if(null!=n&&n.useTransform){const{position:T,normal:D,tangent:v}=o;return{vertexAttributes:{position:T,normal:D,tangent:v},transform:new h.Z({origin:[_.x,_.y,null!=(u=_.z)?u:0],geographic:(0,f.h)(_.spatialReference,n)})}}return{vertexAttributes:R(o,_,n),transform:null}}function Z(o,_,n){return(0,f.h)(_.spatialReference,n)?K(o,_,n):Y(o,_,n)}function z(o,_,n,u){if((0,g.Wi)(_))return Z(o,n,u);const T=F(o,_,n.spatialReference);return n.equals(_.getOriginPoint(n.spatialReference))?Y(T,n,u):(0,f.h)(n.spatialReference,u)?K(T,n,u):Y(T,n,u)}function U(o,_,n,u,T){if((0,g.Wi)(n))return null;const D=new Float32Array(n.length);return(0,W.a)(c.ct.fromTypedArray(D),c.ct.fromTypedArray(n),u),(0,A.Yk)(D,o,_,T,D),D}function p(o,_,n,u,T){if((0,g.Wi)(n))return null;const D=new Float32Array(n.length);(0,W.a)(c.ct.fromTypedArray(D,4*Float32Array.BYTES_PER_ELEMENT),c.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT),u);for(let v=3;v<D.length;v+=4)D[v]=n[v];return(0,A.M2)(D,o,_,T,D),D}function Y(o,_,n){const u=new Float64Array(o.position.length),T=o.position,D=_.x,v=_.y,nt=_.z||0,{horizontal:rt,vertical:st}=x(n?n.unit:null,_.spatialReference);for(let tt=0;tt<T.length;tt+=3)u[tt+0]=(T[tt+0]-D)/rt,u[tt+1]=(T[tt+1]-v)/rt,u[tt+2]=(T[tt+2]-nt)/st;return{position:u,normal:o.normal,tangent:o.tangent}}function K(o,_,n){const u=_.spatialReference;$(_,n,q);const T=(0,B.a)(G,q),D=new Float64Array(o.position.length),v=function et(o,_,n,u){const T=(0,A.XO)(o,_,u),D=c.fP.fromTypedArray(T),v=new Float64Array(T.length),nt=c.fP.fromTypedArray(v);return(0,W.t)(nt,D,n),v}(o.position,u,T,D),nt=(0,O.a)(M,T);return{position:v,normal:H(o.normal,o.position,D,u,nt),tangent:k(o.tangent,o.position,D,u,nt)}}function $(o,_,n){(0,m.Bm)(o.spatialReference,[o.x,o.y,o.z||0],n,(0,y.rS)(o.spatialReference));const{horizontal:u,vertical:T}=x(_?_.unit:null,o.spatialReference);return(0,B.h)(n,n,[u,u,T]),n}function H(o,_,n,u,T){if((0,g.Wi)(o))return null;const D=(0,A.Iz)(o,_,n,u,new Float32Array(o.length)),v=c.ct.fromTypedArray(D);return(0,W.a)(v,v,T),D}function k(o,_,n,u,T){if((0,g.Wi)(o))return null;const D=(0,A.wi)(o,_,n,u,new Float32Array(o.length)),v=c.ct.fromTypedArray(D,4*Float32Array.BYTES_PER_ELEMENT);return(0,W.a)(v,v,T),D}function x(o,_){if((0,g.Wi)(o))return L;const n=_.isGeographic?1:(0,j.c9)(_),u=_.isGeographic?1:(0,j._R)(_),T=(0,j.En)(1,o,"meters");return{horizontal:T*n,vertical:T*u}}const q=(0,I.c)(),G=(0,I.c)(),M=(0,S.c)(),L={horizontal:1,vertical:1}},65231:(at,X,a)=>{a.d(X,{Iz:()=>F,M2:()=>p,To:()=>z,VS:()=>E,XO:()=>Z,Yk:()=>b,w9:()=>J,wi:()=>U,zZ:()=>Q});var g=a(63290),j=a(62208),S=a(30217),B=a(550),I=a(43703),O=a(84161),m=a(28093),y=a(54614),h=a(12080),c=a(37053),W=a(46367),f=a(60479),A=a(79800);const R=g.Z.getLogger("esri.geometry.support.meshUtils.normalProjection");function F(M,L,o,_,n){return K(_)?(Y(H.TO_PCPF,f.ct.fromTypedArray(M),f.fP.fromTypedArray(L),f.fP.fromTypedArray(o),_,f.ct.fromTypedArray(n)),n):(R.error("Cannot convert spatial reference to PCPF"),n)}function b(M,L,o,_,n){return K(_)?(Y(H.FROM_PCPF,f.ct.fromTypedArray(M),f.fP.fromTypedArray(L),f.fP.fromTypedArray(o),_,f.ct.fromTypedArray(n)),n):(R.error("Cannot convert to spatial reference from PCPF"),n)}function Z(M,L,o){return(0,y.CM)(M,L,0,o,(0,h.rS)(L),0,M.length/3),o}function z(M,L,o){return(0,y.CM)(M,(0,h.rS)(o),0,L,o,0,M.length/3),L}function Q(M,L,o){if((0,j.Wi)(M))return L;const _=f.fP.fromTypedArray(M),n=f.fP.fromTypedArray(L);return(0,A.t)(n,_,o),L}function J(M,L,o){if((0,j.Wi)(M))return L;(0,S.a)(G,o);const _=f.ct.fromTypedArray(M),n=f.ct.fromTypedArray(L);return(0,A.a)(n,_,G),(0,S.i)(G)||(0,A.n)(n,n),L}function E(M,L,o){if((0,j.Wi)(M))return L;(0,S.a)(G,o);const _=f.ct.fromTypedArray(M,4*Float32Array.BYTES_PER_ELEMENT),n=f.ct.fromTypedArray(L,4*Float32Array.BYTES_PER_ELEMENT);if((0,A.a)(n,_,G),(0,S.i)(G)||(0,A.n)(n,n),M!==L)for(let u=3;u<M.length;u+=4)L[u]=M[u];return L}function U(M,L,o,_,n){if(!K(_))return R.error("Cannot convert spatial reference to PCPF"),n;Y(H.TO_PCPF,f.ct.fromTypedArray(M,4*Float32Array.BYTES_PER_ELEMENT),f.fP.fromTypedArray(L),f.fP.fromTypedArray(o),_,f.ct.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let u=3;u<M.length;u+=4)n[u]=M[u];return n}function p(M,L,o,_,n){if(!K(_))return R.error("Cannot convert to spatial reference from PCPF"),n;Y(H.FROM_PCPF,f.ct.fromTypedArray(M,16),f.fP.fromTypedArray(L),f.fP.fromTypedArray(o),_,f.ct.fromTypedArray(n,16));for(let u=3;u<M.length;u+=4)n[u]=M[u];return n}function Y(M,L,o,_,n,u){if(!L)return;const T=o.count,D=(0,h.rS)(n);if($(n))for(let v=0;v<T;v++)_.getVec(v,k),L.getVec(v,x),(0,y.Bm)(D,k,q,D),(0,S.f)(G,q),M===H.FROM_PCPF&&(0,S.t)(G,G),(0,O.t)(x,x,G),u.setVec(v,x);else for(let v=0;v<T;v++){_.getVec(v,k),L.getVec(v,x),(0,y.Bm)(D,k,q,D),(0,S.f)(G,q);const nt=(0,W.mZ)(o.get(v,1));let rt=Math.cos(nt);M===H.TO_PCPF&&(rt=1/rt),G[0]*=rt,G[1]*=rt,G[2]*=rt,G[3]*=rt,G[4]*=rt,G[5]*=rt,M===H.FROM_PCPF&&(0,S.t)(G,G),(0,O.t)(x,x,G),(0,O.n)(x,x),u.setVec(v,x)}return u}function K(M){return $(M)||function et(M){return M.isWebMercator}(M)}function $(M){return M.isWGS84||(0,c.yW)(M)||(0,c.BZ)(M)||(0,c.V2)(M)}var H,M;(M=H||(H={}))[M.TO_PCPF=0]="TO_PCPF",M[M.FROM_PCPF=1]="FROM_PCPF";const k=(0,m.c)(),x=(0,m.c)(),q=(0,I.c)(),G=(0,B.c)()}}]);