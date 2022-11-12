"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[6926],{30994:(It,pt,W)=>{W.d(pt,{BH:()=>gt,K:()=>y,KC:()=>Q,NL:()=>z,QI:()=>Mt,Tg:()=>R,Yx:()=>X,nb:()=>g,wF:()=>I,xQ:()=>_t});var tt=W(2076),lt=W(62208),Z=W(60295),et=W(79751);const H=new Map;H.set("meter-per-second",1),H.set("kilometer-per-hour",.277778),H.set("knots",.514444),H.set("feet-per-second",.3048),H.set("mile-per-hour",.44704);const G=180/Math.PI,z=new tt.X({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function X(t,a){return H.get(t)/H.get(a)||1}function ct(t){return(450-t)%360}function R(t,a="geographic"){const[r,o]=t,e=Math.sqrt(r*r+o*o);let n=Math.atan2(o,r)*G;return n=(360+n)%360,"geographic"===a&&(n=ct(n)),[e,n]}function ht(t,a="geographic"){let r=t[1];"geographic"===a&&(r=ct(r)),r%=360;const o=t[0];return[o*Math.cos(r/G),o*Math.sin(r/G)]}function _t(t,a,r,o="geographic"){if(!(0,et.nk)(t)||(0,lt.Wi)(r))return t;const e="vector-magdir"===a?t.clone():(0,lt.Wg)(Q(t,a)),n=e.pixels[1];for(let i=0;i<n.length;i++)n[i]="geographic"===o?(n[i]+r[i]+270)%360:(n[i]+360-r[i])%360;return"vector-magdir"===a?e:Q(e,"vector-magdir")}function Q(t,a,r="geographic",o=1){if(!(0,et.nk)(t))return t;const{pixels:e,width:n,height:i}=t,p=n*i,c=e[0],s=e[1],f=t.pixelType.startsWith("f")?t.pixelType:"f32",h=Z.Z.createEmptyBand(f,p),M=Z.Z.createEmptyBand(f,p);let d=0;for(let _=0;_<i;_++)for(let l=0;l<n;l++)"vector-uv"===a?([h[d],M[d]]=R([c[d],s[d]],r),h[d]*=o):([h[d],M[d]]=ht([c[d],s[d]],r),h[d]*=o,M[d]*=o),d++;const w=new Z.Z({pixelType:f,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[h,M]});return w.updateStatistics(),w}function Mt(t,a,r=1){if(1===r||!(0,et.nk)(t))return t;const o=t.clone(),{pixels:e,width:n,height:i}=o,p=e[0],c=e[1];let s=0;for(let f=0;f<i;f++)for(let h=0;h<n;h++)"vector-uv"===a?(p[s]*=r,c[s]*=r):p[s]*=r,s++;return o.updateStatistics(),o}function gt(t,a,r,o,e){if((0,lt.Wi)(e)||!e.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(a/o),height:Math.round(r/o),resolution:t.width/a};const n=e.xmin,i=e.ymax,p=(t.xmax-t.xmin)/a*o,c=(t.ymax-t.ymin)/r*o,s=(p+c)/2;return t.xmin=n+Math.floor((t.xmin-n)/p)*p,t.xmax=n+Math.ceil((t.xmax-n)/p)*p,t.ymin=i+Math.floor((t.ymin-i)/c)*c,t.ymax=i+Math.ceil((t.ymax-i)/c)*c,{extent:t,width:Math.round(t.width/p),height:Math.round(t.height/c),resolution:s}}const rt=function xt(t=0,a=0,r=Math.PI,o=!0){o&&(r=(2*Math.PI-r)%(2*Math.PI));const e=o?-1:1,n=13*e,i=-7*e,p=-2*e,c=-16*e,s=21.75,[f,h]=C(0,a+n,r,s),[M,d]=C(t-5.5,a+i,r,s),[w,_]=C(t+5.5,a+i,r,s),[l,u]=C(t-1.5,a+p,r,s),[k,P]=C(t+1.5,a+p,r,s),[D,A]=C(t-1.5,a+c,r,s),[L,O]=C(t+1.5,a+c,r,s);return[f,h,M,d,l,u,k,P,w,_,D,A,L,O]}(0,0,0);function yt(t=0,a=Math.PI,r=!0){r&&(a=(2*Math.PI-a)%(2*Math.PI));const e=r?-1:1,n=5*e,i=20*e,p=25*e,c=45,d=2*e;let[w,_]=[5,0-i],[l,u]=[w+2,_],[k,P]=[l-0,u+d],[D,A]=[-5,0-p],[L,O]=[D+0,A-d],E=Math.ceil(t/5),b=Math.floor(E/10);E-=8*b;const v=[],U=[];for(let at=0;at<E/2;at++,b--){b<=0&&E%2==1&&at===(E-1)/2&&(D=0,L=D+0,A=(A+_)/2,O=A-d);const[dt,mt]=C(D,A,a,c);if(b>0){const[S,B]=C(l,A,a,c),[st,it]=C(w,_,a,c);v.push(S),v.push(B),v.push(dt),v.push(mt),v.push(st),v.push(it)}else{const[S,B]=C(l,u,a,c),[st,it]=C(k,P,a,c),[At,Dt]=C(L,O,a,c);U.push(dt),U.push(mt),U.push(At),U.push(Dt),U.push(st),U.push(it),U.push(S),U.push(B)}A+=n,_+=n,u+=n,P+=n,O+=n}const[F,T]=C(5,0+i,a,c),[J,K]=C(7,0+i,a,c),[j,$]=C(5,0-p,a,c),[q,Pt]=C(7,0-p,a,c);return{pennants:v,barbs:U,shaft:[F,T,J,K,j,$,q,Pt]}}function C(t,a,r,o=1){const e=Math.sqrt(t*t+a*a)/o,n=(2*Math.PI+Math.atan2(a,t))%(2*Math.PI);return[e,(2*Math.PI+n-r)%(2*Math.PI)]}const Y=[0,1,3,6,10,16,21,27,33,40,47,55,63],ut=[0,.5,1,1.5,2],wt=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function N(t,a,r,o){const e=X(o||"knots",r);let n;for(n=1;n<a.length;n++)if(n===a.length-1){if(t<a[n]*e)break}else if(t<=a[n]*e)break;return Math.min(n-1,a.length-2)}function ft(t,a,r,o,e){let n=0;switch(a){case"beaufort_kn":n=N(t,Y,"knots",r);break;case"beaufort_km":n=N(t,Y,"kilometer-per-hour",r);break;case"beaufort_ft":n=N(t,Y,"feet-per-second",r);break;case"beaufort_m":n=N(t,Y,"meter-per-second",r);break;case"classified_arrow":n=N(t,e,o,r);break;case"ocean_current_m":n=N(t,ut,"meter-per-second",r);break;case"ocean_current_kn":n=N(t,wt,"knots",r)}return n}const x=[];function y(t,a){let o=0,e=0;const{width:n,height:i,mask:p}=t,c=t.pixels[0],s=[],f=[],h=X(z.fromJSON(a.inputUnit),"knots"),M="wind_speed"===a.style?5:Number.MAX_VALUE;for(let d=0;d<i;d++)for(let w=0;w<n;w++){const _=c[d*n+w]*h;if((!p||p[d*n+w])&&_<M){for(let u=0;u<4;u++)s[o++]=(w+.5)/n,s[o++]=(d+.5)/i,s[o++]=u<2?-.5:.5,s[o++]=u%2==0?-.5:.5,s[o++]=0,s[o++]=_;const l=4*(o/24-1);f[e++]=l,f[e++]=l+1,f[e++]=l+2,f[e++]=l+1,f[e++]=l+2,f[e++]=l+3}}return{vertexData:new Float32Array(s),indexData:new Uint32Array(f)}}function I(t,a){return"simple_scalar"===a.style?y(t,a):"wind_speed"===a.style?function m(t,a){if(0===x.length)for(let d=0;d<30;d++)x.push(yt(5*d,0));const r=X(z.fromJSON(a.inputUnit),"knots"),{width:o,height:e,mask:n}=t,i=t.pixels[0],p=t.pixels[1],s=[],f=[];let h=0,M=0;for(let d=0;d<e;d++)for(let w=0;w<o;w++){const _=d*o+w,l=i[_]*r;if((!n||n[d*o+w])&&l>=5){const u=(p[_]+360)%360/180*Math.PI,{pennants:k,barbs:P,shaft:D}=x[Math.min(Math.floor(l/5),29)];if(k.length+P.length===0)continue;let A=s.length/6;const L=(w+.5)/o,O=(d+.5)/e;for(let E=0;E<k.length;E+=2)s[h++]=L,s[h++]=O,s[h++]=k[E],s[h++]=k[E+1]+u,s[h++]=0,s[h++]=l;for(let E=0;E<P.length;E+=2)s[h++]=L,s[h++]=O,s[h++]=P[E],s[h++]=P[E+1]+u,s[h++]=0,s[h++]=l;for(let E=0;E<D.length;E+=2)s[h++]=L,s[h++]=O,s[h++]=D[E],s[h++]=D[E+1]+u,s[h++]=0,s[h++]=l;for(let E=0;E<k.length/6;E++)f[M++]=A,f[M++]=A+1,f[M++]=A+2,A+=3;for(let E=0;E<P.length/8;E++)f[M++]=A,f[M++]=A+1,f[M++]=A+2,f[M++]=A+1,f[M++]=A+2,f[M++]=A+3,A+=4;f[M++]=A+0,f[M++]=A+1,f[M++]=A+2,f[M++]=A+1,f[M++]=A+3,f[M++]=A+2,A+=4}}return{vertexData:new Float32Array(s),indexData:new Uint32Array(f)}}(t,a):function ot(t,a){const{style:r,inputUnit:o,outputUnit:e,breakValues:n}=a,i=z.fromJSON(o),p=z.fromJSON(e);let f=0,h=0;const{width:M,height:d,mask:w}=t,_=t.pixels[0],l=t.pixels[1],u=w?w.filter(D=>D>0).length:M*d,k=new Float32Array(42*u),P=new Uint32Array(15*u);for(let D=0;D<d;D++)for(let A=0;A<M;A++){const L=D*M+A;if(!w||w[D*M+A]){const O=(l[L]+360)%360/180*Math.PI,E=ft(_[L],r,i,p,n);for(let v=0;v<rt.length;v+=2)k[f++]=(A+.5)/M,k[f++]=(D+.5)/d,k[f++]=rt[v],k[f++]=rt[v+1]+O,k[f++]=E,k[f++]=_[L];const b=7*(f/42-1);P[h++]=b,P[h++]=b+1,P[h++]=b+2,P[h++]=b+0,P[h++]=b+4,P[h++]=b+3,P[h++]=b+0,P[h++]=b+2,P[h++]=b+3,P[h++]=b+2,P[h++]=b+5,P[h++]=b+3,P[h++]=b+5,P[h++]=b+6,P[h++]=b+3}}return{vertexData:k,indexData:P}}(t,a)}function g(t,a,r,o=[0,0],e=.5){const{width:n,height:i,mask:p}=t,[c,s]=t.pixels,[f,h]=o,M=Math.round((n-f)/r),d=Math.round((i-h)/r),w=M*d,_=new Float32Array(w),l=new Float32Array(w),u=new Uint8Array(w),k="vector-uv"===a;for(let D=0;D<d;D++)for(let A=0;A<M;A++){let L=0;const O=D*M+A,E=Math.max(0,D*r+h),b=Math.max(0,A*r+f),v=Math.min(i,E+r),U=Math.min(n,b+r);for(let F=E;F<v;F++)for(let T=b;T<U;T++){const V=F*n+T;if(!p||p[V]){L++;const J=k?[c[V],s[V]]:[c[V],(360+s[V])%360],[K,j]=k?J:ht(J);_[O]+=K,l[O]+=j}}if(L>=(v-E)*(U-b)*(1-e)){u[O]=1;const[F,T]=R([_[O]/L,l[O]/L]);_[O]=F,l[O]=T}else u[O]=0,_[O]=0,l[O]=0}const P=new Z.Z({width:M,height:d,pixels:[_,l],mask:u});return P.updateStatistics(),P}},37084:(It,pt,W)=>{W.d(pt,{GE:()=>_t,KK:()=>wt});var tt=W(15861),Z=(W(29132),W(8314)),et=W(63290),H=W(21286),G=W(62208),nt=W(10699),z=W(4619),X=W(37053),ct=W(2004);const R=et.Z.getLogger("esri.views.2d.engine.flow.dataUtils");function _t(x,m,y,I){return Q.apply(this,arguments)}function Q(){return(Q=(0,tt.Z)(function*(x,m,y,I){const g=performance.now(),t=Mt(m,y),a=performance.now(),r=rt(m,t,y.width,y.height),o=performance.now(),e=yt(r,!0),n=performance.now(),i="Streamlines"===x?C(e,10):Y(e),p=performance.now();return(0,Z.Z)("esri-2d-profiler")&&(R.info("I.1","_createFlowFieldFromData (ms)",Math.round(a-g)),R.info("I.2","_getStreamlines (ms)",Math.round(o-a)),R.info("I.3","createAnimatedLinesData (ms)",Math.round(n-o)),R.info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(p-n)),R.info("I.5","createFlowMesh (ms)",Math.round(p-g)),R.info("I.6","Mesh size (bytes)",i.vertexData.buffer.byteLength+i.indexData.buffer.byteLength)),yield Promise.resolve(),(0,nt.k_)(I),i})).apply(this,arguments)}function Mt(x,m){const y=function xt(x,m,y,I){if(0===I)return x;const g=Math.round(3*I),t=new Array(2*g+1);let a=0;for(let e=-g;e<=g;e++){const n=Math.exp(-e*e/(I*I));t[e+g]=n,a+=n}for(let e=-g;e<=g;e++)t[e+g]/=a;const r=new Float32Array(x.length);for(let e=0;e<y;e++)for(let n=0;n<m;n++){let i=0,p=0;for(let c=-g;c<=g;c++){if(n+c<0||n+c>=m)continue;const s=t[c+g];i+=s*x[2*(e*m+(n+c))+0],p+=s*x[2*(e*m+(n+c))+1]}r[2*(e*m+n)+0]=i,r[2*(e*m+n)+1]=p}const o=new Float32Array(x.length);for(let e=0;e<m;e++)for(let n=0;n<y;n++){let i=0,p=0;for(let c=-g;c<=g;c++){if(n+c<0||n+c>=y)continue;const s=t[c+g];i+=s*r[2*((n+c)*m+e)+0],p+=s*r[2*((n+c)*m+e)+1]}o[2*(n*m+e)+0]=i,o[2*(n*m+e)+1]=p}return o}(m.data,m.width,m.height,x.smoothing);return x.interpolate?(I,g)=>{const t=Math.floor(I),a=Math.floor(g);if(t<0||t>=m.width)return[0,0];if(a<0||a>=m.height)return[0,0];const r=I-t,o=g-a,i=t<m.width-1?t+1:t,p=a<m.height-1?a+1:a;return[(y[2*(a*m.width+t)]*(1-o)+y[2*(p*m.width+t)]*o)*(1-r)+(y[2*(a*m.width+i)]*(1-o)+y[2*(p*m.width+i)]*o)*r,(y[2*(a*m.width+t)+1]*(1-o)+y[2*(p*m.width+t)+1]*o)*(1-r)+(y[2*(a*m.width+i)+1]*(1-o)+y[2*(p*m.width+i)+1]*o)*r]}:(I,g)=>{const t=Math.round(I),a=Math.round(g);return t<0||t>=m.width||a<0||a>=m.height?[0,0]:[y[2*(a*m.width+t)+0],y[2*(a*m.width+t)+1]]}}function gt(x,m,y,I,g,t,a,r,o){const e=[];let n=y,i=I,p=0,[c,s]=m(n,i);c*=x.velocityScale,s*=x.velocityScale;const f=Math.sqrt(c*c+s*s);let h,M;e.push({x:n,y:i,t:p,speed:f});for(let d=0;d<x.verticesPerLine;d++){let[w,_]=m(n,i);w*=x.velocityScale,_*=x.velocityScale;const l=Math.sqrt(w*w+_*_);if(l<x.minSpeedThreshold)return e;const u=w/l,k=_/l;if(n+=u*x.segmentLength,i+=k*x.segmentLength,p+=x.segmentLength/l,Math.acos(u*h+k*M)>x.maxTurnAngle)return e;if(x.collisions){const P=Math.round(n*o),D=Math.round(i*o);if(P<0||P>a-1||D<0||D>r-1)return e;const A=t[D*a+P];if(-1!==A&&A!==g)return e;t[D*a+P]=g}e.push({x:n,y:i,t:p,speed:l}),h=u,M=k}return e}function rt(x,m,y,I){const g=[],t=new z.Z,a=1/Math.max(x.lineCollisionWidth,1),r=Math.round(y*a),o=Math.round(I*a),e=new Int32Array(r*o);for(let i=0;i<e.length;i++)e[i]=-1;const n=[];for(let i=0;i<I;i+=x.lineSpacing)for(let p=0;p<y;p+=x.lineSpacing)n.push({x:p,y:i,sort:t.getFloat()});n.sort((i,p)=>i.sort-p.sort);for(const{x:i,y:p}of n)if(t.getFloat()<x.density){const c=gt(x,m,i,p,g.length,e,r,o,a);if(c.length<2)continue;g.push(c)}return g}function yt(x,m){const y=new z.Z,I=x.reduce((o,e)=>o+e.length,0),g=new Float32Array(4*I),t=new Array(x.length);let a=0,r=0;for(const o of x){const e=a;for(const n of o)g[4*a+0]=n.x,g[4*a+1]=n.y,g[4*a+2]=n.t,g[4*a+3]=n.speed,a++;t[r++]={startVertex:e,numberOfVertices:o.length,totalTime:o[o.length-1].t,timeSeed:m?y.getFloat():0}}return{lineVertices:g,lineDescriptors:t}}function C(x,m){const{lineVertices:I,lineDescriptors:g}=x;let t=0,a=0;for(const c of g)t+=2*c.numberOfVertices,a+=6*(c.numberOfVertices-1);const r=new Float32Array(9*t),o=new Uint32Array(a);let e=0,n=0;function p(c,s,f,h,M,d,w,_){const l=9*e;let u=0;r[l+u++]=c,r[l+u++]=s,r[l+u++]=1,r[l+u++]=f,r[l+u++]=d,r[l+u++]=w,r[l+u++]=h/2,r[l+u++]=M/2,r[l+u++]=_,e++,r[l+u++]=c,r[l+u++]=s,r[l+u++]=-1,r[l+u++]=f,r[l+u++]=d,r[l+u++]=w,r[l+u++]=-h/2,r[l+u++]=-M/2,r[l+u++]=_,e++}for(const c of g){const{totalTime:s,timeSeed:f}=c;let h=null,M=null,d=null,w=null,_=null,l=null;for(let u=0;u<c.numberOfVertices;u++){const k=I[4*(c.startVertex+u)+0],P=I[4*(c.startVertex+u)+1],D=I[4*(c.startVertex+u)+2],A=I[4*(c.startVertex+u)+3];let L=null,O=null,E=null,b=null;if(u>0){L=k-h,O=P-M;const v=Math.sqrt(L*L+O*O);if(L/=v,O/=v,u>1){let U=L+_,F=O+l;const T=Math.sqrt(U*U+F*F);U/=T,F/=T;const V=Math.min(1/(U*L+F*O),m);U*=V,F*=V,E=-F,b=U}else E=-O,b=L;null!==E&&null!==b&&(p(h,M,d,E,b,s,f,A),o[n++]=e-2,o[n++]=e,o[n++]=e-1,o[n++]=e,o[n++]=e+1,o[n++]=e-1)}h=k,M=P,d=D,_=L,l=O,w=A}p(h,M,d,-l,_,s,f,w)}return{vertexData:r,indexData:o}}function Y(x){const{lineVertices:g,lineDescriptors:t}=x;let a=0,r=0;for(const v of t){const U=v.numberOfVertices-1;a+=4*U*2,r+=6*U*2}const o=new Float32Array(16*a),e=new Uint32Array(r);let n,i,p,c,s,f,h,M,d,w,_,l,u,k,P=0,D=0;function O(v,U){let F=d+_,T=w+l;const V=Math.sqrt(F*F+T*T);F/=V,T/=V;const J=d*F+w*T;F/=J,T/=J;let K=_+u,j=l+k;const $=Math.sqrt(K*K+j*j);K/=$,j/=$;const q=_*K+l*j;K/=q,j/=q,function L(v,U,F,T,V,J,K,j,$,q,Pt,at,dt,mt){const S=16*P;let B=0;for(const st of[1,2])for(const it of[1,2,3,4])o[S+B++]=v,o[S+B++]=U,o[S+B++]=F,o[S+B++]=T,o[S+B++]=K,o[S+B++]=j,o[S+B++]=$,o[S+B++]=q,o[S+B++]=st,o[S+B++]=it,o[S+B++]=dt,o[S+B++]=mt,o[S+B++]=V/2,o[S+B++]=J/2,o[S+B++]=Pt/2,o[S+B++]=at/2,P++}(n,i,p,c,-T,F,s,f,h,M,-j,K,v,U),function A(){e[D++]=P-8,e[D++]=P-7,e[D++]=P-6,e[D++]=P-7,e[D++]=P-5,e[D++]=P-6,e[D++]=P-4,e[D++]=P-3,e[D++]=P-2,e[D++]=P-3,e[D++]=P-1,e[D++]=P-2}()}function E(v,U,F,T,V,J){if(d=_,w=l,_=u,l=k,null==d&&null==w&&(d=_,w=l),null!=s&&null!=f){u=v-s,k=U-f;const K=Math.sqrt(u*u+k*k);u/=K,k/=K}null!=d&&null!=w&&O(V,J),n=s,i=f,p=h,c=M,s=v,f=U,h=F,M=T}function b(v,U){d=_,w=l,_=u,l=k,null==d&&null==w&&(d=_,w=l),null!=d&&null!=w&&O(v,U)}for(const v of t){n=null,i=null,p=null,c=null,s=null,f=null,h=null,M=null,d=null,w=null,_=null,l=null,u=null,k=null;const{totalTime:U,timeSeed:F}=v;for(let T=0;T<v.numberOfVertices;T++)E(g[4*(v.startVertex+T)+0],g[4*(v.startVertex+T)+1],g[4*(v.startVertex+T)+2],g[4*(v.startVertex+T)+3],U,F);b(U,F)}return{vertexData:o,indexData:e}}function ut(x,m){const y=m.pixels,{width:I,height:g}=m,t=new Float32Array(I*g*2),a=m.mask||new Uint8Array(I*g*2);if(m.mask||a.fill(255),"vector-uv"===x)for(let r=0;r<I*g;r++)t[2*r+0]=y[0][r],t[2*r+1]=-y[1][r];else if("vector-magdir"===x)for(let r=0;r<I*g;r++){const o=y[0][r],e=(0,H.Vl)(y[1][r]),n=Math.cos(e-Math.PI/2),i=Math.sin(e-Math.PI/2);t[2*r+0]=n*o,t[2*r+1]=i*o}return{data:t,mask:a,width:I,height:g}}function wt(x,m,y,I,g,t){return N.apply(this,arguments)}function N(){return(N=(0,tt.Z)(function*(x,m,y,I,g,t){const a=performance.now(),r=(0,X.C5)(m.spatialReference);if(!r){const _=yield ft(x,m,y,I,g,t);return(0,Z.Z)("esri-2d-profiler")&&R.info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-a)),(0,Z.Z)("esri-2d-profiler")&&R.info("I.9","Number of parts",1),_}const[o,e]=r.valid,i=Math.ceil(m.width/(e-o)),p=m.width/i,c=Math.round(y/i);let s=m.xmin;const f=[],h=performance.now();for(let _=0;_<i;_++){const l=new ct.Z({xmin:s,xmax:s+p,ymin:m.ymin,ymax:m.ymax,spatialReference:m.spatialReference});f.push(ft(x,l,c,I,g,t)),s+=p}const M=yield Promise.all(f);(0,Z.Z)("esri-2d-profiler")&&R.info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-h)),(0,Z.Z)("esri-2d-profiler")&&R.info("I.9","Number of parts",M.length);const d={data:new Float32Array(y*I*2),mask:new Uint8Array(y*I),width:y,height:I};let w=0;for(const _ of M){for(let l=0;l<_.height;l++)for(let u=0;u<_.width;u++)w+u>=y||(d.data[2*(l*y+w+u)+0]=_.data[2*(l*_.width+u)+0],d.data[2*(l*y+w+u)+1]=_.data[2*(l*_.width+u)+1],d.mask[l*y+w+u]=_.mask[l*_.width+u]);w+=_.width}return(0,Z.Z)("esri-2d-profiler")&&R.info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-a)),d})).apply(this,arguments)}function ft(x,m,y,I,g,t){return ot.apply(this,arguments)}function ot(){return(ot=(0,tt.Z)(function*(x,m,y,I,g,t){const a={requestProjectedLocalDirections:!0,signal:t};if((0,G.pC)(g)&&(a.timeExtent=g),"imagery"===x.type){yield x.load({signal:t});const e=x.rasterInfo.dataType,n=yield x.fetchImage(m,y,I,a);return!n||(0,G.Wi)(n.pixelData)||(0,G.Wi)(n.pixelData.pixelBlock)?{data:new Float32Array(y*I*2),mask:new Uint8Array(y*I),width:y,height:I}:ut(e,n.pixelData.pixelBlock)}yield x.load({signal:t});const r=x.rasterInfo.dataType,o=yield x.fetchPixels(m,y,I,a);return!o||(0,G.Wi)(o.pixelBlock)?{data:new Float32Array(y*I*2),mask:new Uint8Array(y*I),width:y,height:I}:ut(r,o.pixelBlock)})).apply(this,arguments)}}}]);