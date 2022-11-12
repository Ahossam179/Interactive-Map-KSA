"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[4367],{54367:(Tt,j,u)=>{u.r(j),u.d(j,{toBinaryGLTF:()=>ct});var p,r,b=u(21726),m=u(10699),_=u(49672);(r=p||(p={}))[r.JSON=1313821514]="JSON",r[r.BIN=5130562]="BIN";class O{constructor(e,s){if(!e)throw new Error("GLB requires a JSON gltf chunk");this.length=O.HEADER_SIZE,this.length+=O.CHUNK_HEADER_SIZE;const i=this._textToArrayBuffer(e);if(this.length+=this._alignTo(i.byteLength,4),s&&(this.length+=O.CHUNK_HEADER_SIZE,this.length+=s.byteLength,s.byteLength%4))throw new Error("Expected BIN chunk length to be divisible by 4 at this point");this.buffer=new ArrayBuffer(this.length),this.outView=new DataView(this.buffer),this._writeHeader();const n=this._writeChunk(i,12,p.JSON,32);s&&this._writeChunk(s,n,p.BIN)}_writeHeader(){this.outView.setUint32(0,O.MAGIC,!0),this.outView.setUint32(4,O.VERSION,!0),this.outView.setUint32(8,this.length,!0)}_writeChunk(e,s,i,n=0){const E=this._alignTo(e.byteLength,4);for(this.outView.setUint32(s,E,!0),this.outView.setUint32(s+=4,i,!0),this._writeArrayBuffer(this.outView.buffer,e,s+=4,0,e.byteLength),s+=e.byteLength;s%4;)n&&this.outView.setUint8(s,n),s++;return s}_writeArrayBuffer(e,s,i,n,E){new Uint8Array(e,i,E).set(new Uint8Array(s,n,E),0)}_textToArrayBuffer(e){return(new TextEncoder).encode(e).buffer}_alignTo(e,s){return s*Math.ceil(e/s)}}O.HEADER_SIZE=12,O.CHUNK_HEADER_SIZE=8,O.MAGIC=1179937895,O.VERSION=2;var M,L,d,f,y,F,H,V=u(88159),S=u(62208),x=u(48977),w=u(78451),l=u(84161),I=u(28093),Y=u(27530),z=u(60853);(function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"})(M||(M={})),function(r){r[r.External=0]="External",r[r.DataURI=1]="DataURI",r[r.GLB=2]="GLB"}(L||(L={})),function(r){r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(d||(d={})),function(r){r.SCALAR="SCALAR",r.VEC2="VEC2",r.VEC3="VEC3",r.VEC4="VEC4",r.MAT2="MAT2",r.MAT3="MAT3",r.MAT4="MAT4"}(f||(f={})),function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(y||(y={})),function(r){r.OPAQUE="OPAQUE",r.MASK="MASK",r.BLEND="BLEND"}(F||(F={})),function(r){r[r.NoColor=0]="NoColor",r[r.FaceColor=1]="FaceColor",r[r.VertexColor=2]="VertexColor"}(H||(H={}));var A=u(67969);class X{constructor(e,s,i,n,E){this.buffer=e,this.componentType=i,this.dataType=n,this.data=[],this.isFinalized=!1,this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,s.bufferViews||(s.bufferViews=[]),this.index=s.bufferViews.length,this.bufferView={buffer:e.index,byteLength:-1,target:E};const T=this._getElementSize();T>=4&&E!==d.ELEMENT_ARRAY_BUFFER&&(this.bufferView.byteStride=T),s.bufferViews.push(this.bufferView),this.numComponentsForDataType=this._calculateNumComponentsForDataType()}push(e){const s=this.data.length;if(this.data.push(e),this.accessorIndex>=0){const i=s%this.numComponentsForDataType,n=this.accessorMin[i];this.accessorMin[i]="number"!=typeof n?e:Math.min(n,e);const E=this.accessorMax[i];this.accessorMax[i]="number"!=typeof E?e:Math.max(E,e)}}get dataSize(){return this.data.length*this._sizeComponentType()}get byteSize(){return function e(s,i){return i*Math.ceil(s/i)}(this.dataSize,4)}getByteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}get byteOffset(){if(!this.isFinalized)throw new Error("Cannot get BufferView offset until it is finalized");return this.buffer.getByteOffset(this)}_createTypedArray(e,s){switch(this.componentType){case A.g.BYTE:return new Int8Array(e,s);case A.g.FLOAT:return new Float32Array(e,s);case A.g.SHORT:return new Int16Array(e,s);case A.g.UNSIGNED_BYTE:return new Uint8Array(e,s);case A.g.UNSIGNED_INT:return new Uint32Array(e,s);case A.g.UNSIGNED_SHORT:return new Uint16Array(e,s)}}writeOutToBuffer(e,s){this._createTypedArray(e,s).set(this.data)}writeAsync(e){if(this.asyncWritePromise)throw new Error("Can't write multiple bufferView values asynchronously");return this.asyncWritePromise=e.then(s=>{const i=new Uint8Array(s);for(let n=0;n<i.length;++n)this.data.push(i[n]);delete this.asyncWritePromise}),this.asyncWritePromise}startAccessor(e){if(this.accessorIndex>=0)throw new Error("Accessor was started without ending the previous one");this.accessorIndex=this.data.length,this.accessorAttribute=e;const s=this.numComponentsForDataType;this.accessorMin=new Array(s),this.accessorMax=new Array(s)}endAccessor(){if(this.accessorIndex<0)throw new Error("An accessor was not started, but was attempted to be ended");const e=this._getElementSize(),s=this.numComponentsForDataType,i=(this.data.length-this.accessorIndex)/s;if(i%1)throw new Error("An accessor was ended with missing component values");for(let E=0;E<this.accessorMin.length;++E)"number"!=typeof this.accessorMin[E]&&(this.accessorMin[E]=0),"number"!=typeof this.accessorMax[E]&&(this.accessorMax[E]=0);const n={byteOffset:e*(this.accessorIndex/s),componentType:this.componentType,count:i,type:this.dataType,min:this.accessorMin,max:this.accessorMax,name:this.accessorAttribute};switch(this.accessorAttribute){case"TEXCOORD_0":case"TEXCOORD_1":case"COLOR_0":case"WEIGHTS_0":switch(this.componentType){case A.g.UNSIGNED_BYTE:case A.g.UNSIGNED_SHORT:n.normalized=!0}}return this.accessorIndex=-1,this.accessorAttribute=null,this.accessorMin=null,this.accessorMax=null,n}get finalized(){return this.finalizedPromise?this.finalizedPromise:this.finalizedPromise=this.isFinalized?Promise.resolve():new Promise(e=>this.finalizedPromiseResolve=e)}finalize(){const e=this.bufferView;return new Promise(s=>{const i=this.buffer.getViewFinalizePromises(this);this.asyncWritePromise&&i.push(this.asyncWritePromise),s((0,m.as)(i))}).then(()=>{this.isFinalized=!0,e.byteOffset=this.getByteOffset(),e.byteLength=this.dataSize,this.finalizedPromiseResolve&&this.finalizedPromiseResolve()})}_getElementSize(){return this._sizeComponentType()*this.numComponentsForDataType}_sizeComponentType(){switch(this.componentType){case A.g.BYTE:case A.g.UNSIGNED_BYTE:return 1;case A.g.SHORT:case A.g.UNSIGNED_SHORT:return 2;case A.g.UNSIGNED_INT:case A.g.FLOAT:return 4}}_calculateNumComponentsForDataType(){switch(this.dataType){case f.SCALAR:return 1;case f.VEC2:return 2;case f.VEC3:return 3;case f.VEC4:case f.MAT2:return 4;case f.MAT3:return 9;case f.MAT4:return 16}}}class Q{constructor(e){this.gltf=e,this.bufferViews=[],this.isFinalized=!1,e.buffers||(e.buffers=[]),this.index=e.buffers.length;const s={byteLength:-1};e.buffers.push(s),this.buffer=s}addBufferView(e,s,i){if(this.finalizePromise)throw new Error("Cannot add buffer view after fiinalizing buffer");const n=new X(this,this.gltf,e,s,i);return this.bufferViews.push(n),n}getByteOffset(e){let s=0;for(const i of this.bufferViews){if(i===e)return s;s+=i.byteSize}throw new Error("Given bufferView was not present in this buffer")}getViewFinalizePromises(e){const s=[];for(const i of this.bufferViews){if(e&&i===e)return s;s.push(i.finalized)}return s}getArrayBuffer(){if(!this.isFinalized)throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");const e=this._getTotalSize(),s=new ArrayBuffer(e);let i=0;for(const n of this.bufferViews)n.writeOutToBuffer(s,i),i+=n.byteSize;return s}finalize(){if(this.finalizePromise)throw new Error(`Buffer ${this.index} was already finalized`);return this.finalizePromise=new Promise(e=>{e((0,m.as)(this.getViewFinalizePromises()))}).then(()=>{this.isFinalized=!0;const e=this.getArrayBuffer();this.buffer.byteLength=e.byteLength,this.buffer.uri=e}),this.gltf.extras.promises.push(this.finalizePromise),this.finalizePromise}_getTotalSize(){let e=0;for(const s of this.bufferViews)e+=s.byteSize;return e}}function W(r,e){(0,S.Wi)(e.normal)&&(e.normal=new Float32Array(e.position.length));const s=r.faces,{position:i,normal:n}=e,E=s.length/3;for(let T=0;T<E;++T){const a=3*s[3*T+0],R=3*s[3*T+1],o=3*s[3*T+2],c=(0,l.s)(Z,i[a+0],i[a+1],i[a+2]),C=(0,l.s)(K,i[R+0],i[R+1],i[R+2]),D=(0,l.s)(J,i[o+0],i[o+1],i[o+2]),B=(0,l.b)(C,C,c),G=(0,l.b)(D,D,c),h=(0,l.f)(B,B,G);n[a+0]+=h[0],n[a+1]+=h[1],n[a+2]+=h[2],n[R+0]+=h[0],n[R+1]+=h[1],n[R+2]+=h[2],n[o+0]+=h[0],n[o+1]+=h[1],n[o+2]+=h[2]}for(let T=0;T<n.length;T+=3)(0,l.s)(P,n[T],n[T+1],n[T+2]),(0,l.n)(P,P),n[T+0]=P[0],n[T+1]=P[1],n[T+2]=P[2]}const Z=(0,I.c)(),K=(0,I.c)(),J=(0,I.c)(),P=(0,I.c)();var U=u(57932);class k{constructor(e,s,i){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:s,binChunkBuffer:null,promises:[]}},i&&(this.params=i),this._addScenes(e)}_addScenes(e){this.gltf.scene=e.defaultScene;const s=this.gltf.extras.options.bufferOutputType===M.GLB||this.gltf.extras.options.imageOutputType===L.GLB;s&&(this.gltf.extras.binChunkBuffer=new Q(this.gltf)),e.forEachScene(i=>{this._addScene(i)}),s&&this.gltf.extras.binChunkBuffer.finalize()}_addScene(e){this.gltf.scenes||(this.gltf.scenes=[]);const s={};e.name&&(s.name=e.name),e.forEachNode(i=>{s.nodes||(s.nodes=[]);const n=this._addNode(i);s.nodes.push(n)}),this.gltf.scenes.push(s)}_addNode(e){this.gltf.nodes||(this.gltf.nodes=[]);const s={};e.name&&(s.name=e.name);const i=e.translation;(0,l.k)(i,I.Z)||(s.translation=(0,I.a)(i));const n=e.rotation;(0,x.j)(n,w.I)||(s.rotation=(0,w.b)(n));const E=e.scale;(0,l.k)(E,I.O)||(s.scale=(0,I.a)(E)),e.mesh&&e.mesh.vertexAttributes.position?s.mesh=this._addMesh(e.mesh):e.forEachNode(a=>{s.children||(s.children=[]);const R=this._addNode(a);s.children.push(R)});const T=this.gltf.nodes.length;return this.gltf.nodes.push(s),T}_addMesh(e){this.gltf.meshes||(this.gltf.meshes=[]);const s={primitives:[]},i=this.gltf.extras.options.bufferOutputType===M.GLB;let n;n=i?this.gltf.extras.binChunkBuffer:new Q(this.gltf),this.params.origin||(this.params.origin=function tt(r){return(0,S.pC)(r.transform)?r.transform.getOriginPoint(r.spatialReference):new _.Z({x:r.extent.xmax-r.extent.width/2,y:r.extent.ymax-r.extent.height/2,z:r.extent.zmin,spatialReference:r.extent.spatialReference})}(e));const E=(0,z.Yq)(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});(function v(r,e){if(r.components)for(const s of r.components)s.faces&&"smooth"===s.shading&&W(s,e)})(e,E),this._flipYZAxis(E);const T=n.addBufferView(A.g.FLOAT,f.VEC3,d.ARRAY_BUFFER);let a,R,o,c;E.normal&&(a=n.addBufferView(A.g.FLOAT,f.VEC3,d.ARRAY_BUFFER)),e.vertexAttributes.uv&&(R=n.addBufferView(A.g.FLOAT,f.VEC2,d.ARRAY_BUFFER)),E.tangent&&(o=n.addBufferView(A.g.FLOAT,f.VEC4,d.ARRAY_BUFFER)),e.vertexAttributes.color&&(c=n.addBufferView(A.g.UNSIGNED_BYTE,f.VEC4,d.ARRAY_BUFFER)),T.startAccessor("POSITION"),a&&a.startAccessor("NORMAL"),R&&R.startAccessor("TEXCOORD_0"),o&&o.startAccessor("TANGENT"),c&&c.startAccessor("COLOR_0");const C=E.position.length/3,{position:D,normal:B,tangent:G}=E,{color:h,uv:g}=e.vertexAttributes;for(let N=0;N<C;++N)T.push(D[3*N+0]),T.push(D[3*N+1]),T.push(D[3*N+2]),a&&(0,S.pC)(B)&&(a.push(B[3*N+0]),a.push(B[3*N+1]),a.push(B[3*N+2])),R&&(0,S.pC)(g)&&(R.push(g[2*N+0]),R.push(g[2*N+1])),o&&(0,S.pC)(G)&&(o.push(G[4*N+0]),o.push(G[4*N+1]),o.push(G[4*N+2]),o.push(G[4*N+3])),c&&(0,S.pC)(h)&&(c.push(h[4*N+0]),c.push(h[4*N+1]),c.push(h[4*N+2]),c.push(h[4*N+3]));const ft=T.endAccessor(),Et=this._addAccessor(T.index,ft);let et,st,it,rt,q;if(a){const N=a.endAccessor();et=this._addAccessor(a.index,N)}if(R){const N=R.endAccessor();st=this._addAccessor(R.index,N)}if(o){const N=o.endAccessor();it=this._addAccessor(o.index,N)}if(c){const N=c.endAccessor();rt=this._addAccessor(c.index,N)}e.components&&e.components.length>0&&e.components[0].faces?(q=n.addBufferView(A.g.UNSIGNED_INT,f.SCALAR,d.ELEMENT_ARRAY_BUFFER),this._addMeshVertexIndexed(q,e.components,s,Et,et,st,it,rt)):this._addMeshVertexNonIndexed(e.components,s,Et,et,st,it,rt),T.finalize(),a&&a.finalize(),R&&R.finalize(),o&&o.finalize(),q&&q.finalize(),c&&c.finalize(),i||n.finalize();const ut=this.gltf.meshes.length;return this.gltf.meshes.push(s),ut}_flipYZAxis({position:e,normal:s,tangent:i}){this._flipYZBuffer(e,3),this._flipYZBuffer(s,3),this._flipYZBuffer(i,4)}_flipYZBuffer(e,s){if(!(0,S.Wi)(e))for(let i=1,n=2;i<e.length;i+=s,n+=s){const E=e[i];e[i]=e[n],e[n]=-E}}_addMaterial(e){if(null===e)return;const s=this.materialMap.indexOf(e);if(-1!==s)return s;this.gltf.materials||(this.gltf.materials=[]);const i={};switch(e.alphaMode){case"mask":i.alphaMode=F.MASK;break;case"auto":case"blend":i.alphaMode=F.BLEND}.5!==e.alphaCutoff&&(i.alphaCutoff=e.alphaCutoff),e.doubleSided&&(i.doubleSided=e.doubleSided),i.pbrMetallicRoughness={};const n=a=>a**2.1,E=a=>{const R=a.toRgba();return R[0]=n(R[0]/255),R[1]=n(R[1]/255),R[2]=n(R[2]/255),R};if((0,S.pC)(e.color)&&(i.pbrMetallicRoughness.baseColorFactor=E(e.color)),(0,S.pC)(e.colorTexture)&&(i.pbrMetallicRoughness.baseColorTexture={index:this._addTexture(e.colorTexture)}),(0,S.pC)(e.normalTexture)&&(i.normalTexture={index:this._addTexture(e.normalTexture)}),e instanceof Y.Z){if((0,S.pC)(e.emissiveTexture)&&(i.emissiveTexture={index:this._addTexture(e.emissiveTexture)}),(0,S.pC)(e.emissiveColor)){const a=E(e.emissiveColor);i.emissiveFactor=[a[0],a[1],a[2]]}(0,S.pC)(e.occlusionTexture)&&(i.occlusionTexture={index:this._addTexture(e.occlusionTexture)}),(0,S.pC)(e.metallicRoughnessTexture)&&(i.pbrMetallicRoughness.metallicRoughnessTexture={index:this._addTexture(e.metallicRoughnessTexture)}),i.pbrMetallicRoughness.metallicFactor=e.metallic,i.pbrMetallicRoughness.roughnessFactor=e.roughness}else i.pbrMetallicRoughness.metallicFactor=1,i.pbrMetallicRoughness.roughnessFactor=1;const T=this.gltf.materials.length;return this.gltf.materials.push(i),this.materialMap.push(e),T}_addTexture(e){return this.gltf.textures||(this.gltf.textures=[]),(0,V.s1)(this.textureMap,e,()=>{const s={sampler:this._addSampler(e),source:this._addImage(e)},i=this.gltf.textures.length;return this.gltf.textures.push(s),i})}_addImage(e){const s=this.imageMap.get(e);if(null!=s)return s;this.gltf.images||(this.gltf.images=[]);const i={};if(e.url)i.uri=e.url;else{i.extras=e.data;for(let E=0;E<this.gltf.images.length;++E)if(e.data===this.gltf.images[E].extras)return E;switch(this.gltf.extras.options.imageOutputType){case L.GLB:{const E=this.gltf.extras.binChunkBuffer.addBufferView(A.g.UNSIGNED_BYTE,f.SCALAR),T=(0,U.lW)(e.data).then(({data:a,type:R})=>(i.mimeType=R,a));E.writeAsync(T).then(()=>{E.finalize()}),i.bufferView=E.index;break}case L.DataURI:i.uri=(0,U.$e)(e.data);break;default:this.gltf.extras.promises.push((0,U.lW)(e.data).then(({data:E,type:T})=>{i.uri=E,i.mimeType=T}))}}const n=this.gltf.images.length;return this.gltf.images.push(i),this.imageMap.set(e,n),n}_addSampler(e){this.gltf.samplers||(this.gltf.samplers=[]);let s=A.e8.REPEAT,i=A.e8.REPEAT;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":s=A.e8.CLAMP_TO_EDGE,i=A.e8.CLAMP_TO_EDGE;break;case"mirror":s=A.e8.MIRRORED_REPEAT,i=A.e8.MIRRORED_REPEAT}else{switch(e.wrap.vertical){case"clamp":i=A.e8.CLAMP_TO_EDGE;break;case"mirror":i=A.e8.MIRRORED_REPEAT}switch(e.wrap.horizontal){case"clamp":s=A.e8.CLAMP_TO_EDGE;break;case"mirror":s=A.e8.MIRRORED_REPEAT}}const n={wrapS:s,wrapT:i};for(let T=0;T<this.gltf.samplers.length;++T)if(JSON.stringify(n)===JSON.stringify(this.gltf.samplers[T]))return T;const E=this.gltf.samplers.length;return this.gltf.samplers.push(n),E}_addAccessor(e,s){this.gltf.accessors||(this.gltf.accessors=[]);const i={bufferView:e,byteOffset:s.byteOffset,componentType:s.componentType,count:s.count,type:s.type,min:s.min,max:s.max,name:s.name};s.normalized&&(i.normalized=!0);const n=this.gltf.accessors.length;return this.gltf.accessors.push(i),n}_addMeshVertexIndexed(e,s,i,n,E,T,a,R){for(const o of s){e.startAccessor("INDICES");for(let D=0;D<o.faces.length;++D)e.push(o.faces[D]);const c=e.endAccessor(),C={attributes:{POSITION:n},indices:this._addAccessor(e.index,c),material:this._addMaterial(o.material)};E&&"flat"!==o.shading&&(C.attributes.NORMAL=E),T&&(C.attributes.TEXCOORD_0=T),a&&"flat"!==o.shading&&(C.attributes.TANGENT=a),R&&(C.attributes.COLOR_0=R),i.primitives.push(C)}}_addMeshVertexNonIndexed(e,s,i,n,E,T,a){const R={attributes:{POSITION:i}};n&&(R.attributes.NORMAL=n),E&&(R.attributes.TEXCOORD_0=E),T&&(R.attributes.TANGENT=T),a&&(R.attributes.COLOR_0=a),e&&(R.material=this._addMaterial(e[0].material)),s.primitives.push(R)}}var $=u(85931);class t{constructor(){this.copyright="",this.defaultScene=0,this.generator="",this._scenes=[]}addScene(e){if(this._scenes.includes(e))throw new Error("Scene already added");this._scenes.push(e)}removeScene(e){(0,$.Od)(this._scenes,e)}forEachScene(e){this._scenes.forEach(e)}}class Rt{constructor(e){this.mesh=e,this.name="",this.translation=(0,I.c)(),this.rotation=(0,w.a)(),this.scale=(0,I.a)(I.O),this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}set rotationAngles(e){(0,x.k)(this.rotation,e[0],e[1],e[2])}}const nt="model.glb";class Nt{constructor(){this.name="",this._nodes=[]}addNode(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)}forEachNode(e){this._nodes.forEach(e)}}class ht{constructor(e,s){this._file={type:"model/gltf-binary",data:e},this.origin=s}buffer(){return Promise.resolve(this._file)}download(e){(0,b.io)(new Blob([this._file.data],{type:this._file.type}),e)}}function ct(r,e){const s=new t,i=new Nt;return s.addScene(i),i.addNode(new Rt(r)),function ot(r,e){return function At(r,e,s){const i=new k(r,e=e||{},s);let n=i.params;n?n.origin||(n.origin=new _.Z({x:-1,y:-1,z:-1})):n={origin:new _.Z({x:-1,y:-1,z:-1})};const E=n.origin,T=i.gltf;let R=1,o=1,c=null;return(0,m.as)(T.extras.promises).then(()=>{const C={origin:E};delete T.extras;const B=JSON.stringify(T,(G,h)=>{if("extras"!==G){if(h instanceof ArrayBuffer){if((0,U.$7)(h))switch(e.imageOutputType){case L.DataURI:case L.GLB:break;default:{const g=`img${o}.png`;return o++,C[g]=h,g}}switch(e.bufferOutputType){case M.DataURI:return(0,U.N5)(h);case M.GLB:if(c)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(c=h);default:{const g=`data${R}.bin`;return R++,C[g]=h,g}}}return h}},"number"==typeof e.jsonSpacing?e.jsonSpacing:4);return e.bufferOutputType===M.GLB||e.imageOutputType===L.GLB?C[nt]=new O(B,c).buffer:C["model.gltf"]=B,C})}(r,{bufferOutputType:M.GLB,imageOutputType:L.GLB,jsonSpacing:0},e)}(s,e).then(n=>new ht(n[nt],n.origin))}},67969:(Tt,j,u)=>{var b,m,_,p,O,V,S,x,w,l,I,Y,z,M,L,d,f,y,F,H,A,X,t;u.d(j,{Br:()=>d,Ho:()=>F,LR:()=>V,Ld:()=>Q,Lm:()=>A,Lu:()=>tt,MX:()=>m,No:()=>z,OU:()=>X,Se:()=>K,Tg:()=>f,V7:()=>k,VI:()=>M,VY:()=>W,Wf:()=>S,Y5:()=>U,_g:()=>v,cw:()=>I,db:()=>p,e8:()=>Y,g:()=>x,l1:()=>y,lP:()=>L,lk:()=>b,q_:()=>Z,qi:()=>H,w0:()=>O,wb:()=>w,xS:()=>l,zi:()=>_}),(t=b||(b={}))[t.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",t[t.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",t[t.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT",function(t){t[t.POINTS=0]="POINTS",t[t.LINES=1]="LINES",t[t.LINE_LOOP=2]="LINE_LOOP",t[t.LINE_STRIP=3]="LINE_STRIP",t[t.TRIANGLES=4]="TRIANGLES",t[t.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",t[t.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(m||(m={})),function(t){t[t.ZERO=0]="ZERO",t[t.ONE=1]="ONE",t[t.SRC_COLOR=768]="SRC_COLOR",t[t.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",t[t.SRC_ALPHA=770]="SRC_ALPHA",t[t.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",t[t.DST_ALPHA=772]="DST_ALPHA",t[t.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",t[t.DST_COLOR=774]="DST_COLOR",t[t.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",t[t.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",t[t.CONSTANT_COLOR=32769]="CONSTANT_COLOR",t[t.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",t[t.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",t[t.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(_||(_={})),function(t){t[t.ADD=32774]="ADD",t[t.SUBTRACT=32778]="SUBTRACT",t[t.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(p||(p={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",t[t.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",t[t.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",t[t.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",t[t.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",t[t.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(O||(O={})),function(t){t[t.FRONT=1028]="FRONT",t[t.BACK=1029]="BACK",t[t.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(V||(V={})),function(t){t[t.CW=2304]="CW",t[t.CCW=2305]="CCW"}(S||(S={})),function(t){t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.INT=5124]="INT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.FLOAT=5126]="FLOAT"}(x||(x={})),function(t){t[t.NEVER=512]="NEVER",t[t.LESS=513]="LESS",t[t.EQUAL=514]="EQUAL",t[t.LEQUAL=515]="LEQUAL",t[t.GREATER=516]="GREATER",t[t.NOTEQUAL=517]="NOTEQUAL",t[t.GEQUAL=518]="GEQUAL",t[t.ALWAYS=519]="ALWAYS"}(w||(w={})),function(t){t[t.ZERO=0]="ZERO",t[t.KEEP=7680]="KEEP",t[t.REPLACE=7681]="REPLACE",t[t.INCR=7682]="INCR",t[t.DECR=7683]="DECR",t[t.INVERT=5386]="INVERT",t[t.INCR_WRAP=34055]="INCR_WRAP",t[t.DECR_WRAP=34056]="DECR_WRAP"}(l||(l={})),function(t){t[t.NEAREST=9728]="NEAREST",t[t.LINEAR=9729]="LINEAR",t[t.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",t[t.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",t[t.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",t[t.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(I||(I={})),function(t){t[t.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",t[t.REPEAT=10497]="REPEAT",t[t.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(Y||(Y={})),function(t){t[t.TEXTURE_2D=3553]="TEXTURE_2D",t[t.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",t[t.TEXTURE_3D=32879]="TEXTURE_3D",t[t.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",t[t.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",t[t.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",t[t.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",t[t.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",t[t.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(z||(z={})),function(t){t[t.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.ALPHA=6406]="ALPHA",t[t.RGB=6407]="RGB",t[t.RGBA=6408]="RGBA",t[t.LUMINANCE=6409]="LUMINANCE",t[t.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",t[t.RED=6403]="RED",t[t.RG=33319]="RG",t[t.RED_INTEGER=36244]="RED_INTEGER",t[t.RG_INTEGER=33320]="RG_INTEGER",t[t.RGB_INTEGER=36248]="RGB_INTEGER",t[t.RGBA_INTEGER=36249]="RGBA_INTEGER"}(M||(M={})),function(t){t[t.RGBA4=32854]="RGBA4",t[t.R16F=33325]="R16F",t[t.RG16F=33327]="RG16F",t[t.RGB32F=34837]="RGB32F",t[t.RGBA16F=34842]="RGBA16F",t[t.R32F=33326]="R32F",t[t.RG32F=33328]="RG32F",t[t.RGBA32F=34836]="RGBA32F",t[t.R11F_G11F_B10F=35898]="R11F_G11F_B10F",t[t.RGB8=32849]="RGB8",t[t.RGBA8=32856]="RGBA8",t[t.RGB5_A1=32855]="RGB5_A1",t[t.R8=33321]="R8",t[t.RG8=33323]="RG8",t[t.R8I=33329]="R8I",t[t.R8UI=33330]="R8UI",t[t.R16I=33331]="R16I",t[t.R16UI=33332]="R16UI",t[t.R32I=33333]="R32I",t[t.R32UI=33334]="R32UI",t[t.RG8I=33335]="RG8I",t[t.RG8UI=33336]="RG8UI",t[t.RG16I=33337]="RG16I",t[t.RG16UI=33338]="RG16UI",t[t.RG32I=33339]="RG32I",t[t.RG32UI=33340]="RG32UI",t[t.RGB16F=34843]="RGB16F",t[t.RGB9_E5=35901]="RGB9_E5",t[t.SRGB8=35905]="SRGB8",t[t.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",t[t.RGB565=36194]="RGB565",t[t.RGBA32UI=36208]="RGBA32UI",t[t.RGB32UI=36209]="RGB32UI",t[t.RGBA16UI=36214]="RGBA16UI",t[t.RGB16UI=36215]="RGB16UI",t[t.RGBA8UI=36220]="RGBA8UI",t[t.RGB8UI=36221]="RGB8UI",t[t.RGBA32I=36226]="RGBA32I",t[t.RGB32I=36227]="RGB32I",t[t.RGBA16I=36232]="RGBA16I",t[t.RGB16I=36233]="RGB16I",t[t.RGBA8I=36238]="RGBA8I",t[t.RGB8I=36239]="RGB8I",t[t.R8_SNORM=36756]="R8_SNORM",t[t.RG8_SNORM=36757]="RG8_SNORM",t[t.RGB8_SNORM=36758]="RGB8_SNORM",t[t.RGBA8_SNORM=36759]="RGBA8_SNORM",t[t.RGB10_A2=32857]="RGB10_A2",t[t.RGB10_A2UI=36975]="RGB10_A2UI"}(L||(L={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",t[t.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",t[t.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",t[t.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",t[t.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",t[t.BYTE=5120]="BYTE",t[t.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",t[t.SHORT=5122]="SHORT",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.INT=5124]="INT",t[t.HALF_FLOAT=5131]="HALF_FLOAT",t[t.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",t[t.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",t[t.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",t[t.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(d||(d={})),function(t){t[t.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",t[t.STENCIL_INDEX8=36168]="STENCIL_INDEX8",t[t.DEPTH_STENCIL=34041]="DEPTH_STENCIL",t[t.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",t[t.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",t[t.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",t[t.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(f||(f={})),function(t){t[t.STATIC_DRAW=35044]="STATIC_DRAW",t[t.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",t[t.STREAM_DRAW=35040]="STREAM_DRAW",t[t.STATIC_READ=35045]="STATIC_READ",t[t.DYNAMIC_READ=35049]="DYNAMIC_READ",t[t.STREAM_READ=35041]="STREAM_READ",t[t.STATIC_COPY=35046]="STATIC_COPY",t[t.DYNAMIC_COPY=35050]="DYNAMIC_COPY",t[t.STREAM_COPY=35042]="STREAM_COPY"}(y||(y={})),function(t){t[t.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",t[t.VERTEX_SHADER=35633]="VERTEX_SHADER"}(F||(F={})),function(t){t[t.FRAMEBUFFER=36160]="FRAMEBUFFER",t[t.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",t[t.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(H||(H={})),function(t){t[t.TEXTURE=0]="TEXTURE",t[t.RENDER_BUFFER=1]="RENDER_BUFFER",t[t.CUBEMAP=2]="CUBEMAP"}(A||(A={})),function(t){t[t.NONE=0]="NONE",t[t.DEPTH_RENDER_BUFFER=1]="DEPTH_RENDER_BUFFER",t[t.STENCIL_RENDER_BUFFER=2]="STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_RENDER_BUFFER=3]="DEPTH_STENCIL_RENDER_BUFFER",t[t.DEPTH_STENCIL_TEXTURE=4]="DEPTH_STENCIL_TEXTURE"}(X||(X={}));const Q=33984;var v,W;(function(t){t[t.Texture=0]="Texture",t[t.BufferObject=1]="BufferObject",t[t.VertexArrayObject=2]="VertexArrayObject",t[t.Shader=3]="Shader",t[t.Program=4]="Program",t[t.FramebufferObject=5]="FramebufferObject",t[t.Renderbuffer=6]="Renderbuffer",t[t.Sync=7]="Sync",t[t.COUNT=8]="COUNT"})(v||(v={})),function(t){t[t.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",t[t.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",t[t.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",t[t.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",t[t.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",t[t.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",t[t.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",t[t.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",t[t.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",t[t.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",t[t.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",t[t.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",t[t.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",t[t.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",t[t.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",t[t.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(W||(W={}));const tt=33306;var Z,K,J,P,U,k,$;(function(t){t[t.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",t[t.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",t[t.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",t[t.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",t[t.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",t[t.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",t[t.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",t[t.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",t[t.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",t[t.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",t[t.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"})(Z||(Z={})),function(t){t[t.FLOAT=5126]="FLOAT",t[t.FLOAT_VEC2=35664]="FLOAT_VEC2",t[t.FLOAT_VEC3=35665]="FLOAT_VEC3",t[t.FLOAT_VEC4=35666]="FLOAT_VEC4",t[t.INT=5124]="INT",t[t.INT_VEC2=35667]="INT_VEC2",t[t.INT_VEC3=35668]="INT_VEC3",t[t.INT_VEC4=35669]="INT_VEC4",t[t.BOOL=35670]="BOOL",t[t.BOOL_VEC2=35671]="BOOL_VEC2",t[t.BOOL_VEC3=35672]="BOOL_VEC3",t[t.BOOL_VEC4=35673]="BOOL_VEC4",t[t.FLOAT_MAT2=35674]="FLOAT_MAT2",t[t.FLOAT_MAT3=35675]="FLOAT_MAT3",t[t.FLOAT_MAT4=35676]="FLOAT_MAT4",t[t.SAMPLER_2D=35678]="SAMPLER_2D",t[t.SAMPLER_CUBE=35680]="SAMPLER_CUBE",t[t.UNSIGNED_INT=5125]="UNSIGNED_INT",t[t.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",t[t.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",t[t.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",t[t.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",t[t.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",t[t.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",t[t.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",t[t.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",t[t.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",t[t.SAMPLER_3D=35679]="SAMPLER_3D",t[t.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",t[t.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",t[t.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",t[t.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",t[t.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",t[t.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",t[t.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",t[t.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",t[t.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",t[t.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",t[t.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",t[t.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(K||(K={})),function(t){t[t.OBJECT_TYPE=37138]="OBJECT_TYPE",t[t.SYNC_CONDITION=37139]="SYNC_CONDITION",t[t.SYNC_STATUS=37140]="SYNC_STATUS",t[t.SYNC_FLAGS=37141]="SYNC_FLAGS"}(J||(J={})),function(t){t[t.UNSIGNALED=37144]="UNSIGNALED",t[t.SIGNALED=37145]="SIGNALED"}(P||(P={})),function(t){t[t.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",t[t.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",t[t.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",t[t.WAIT_FAILED=37149]="WAIT_FAILED"}(U||(U={})),function(t){t[t.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(k||(k={})),function(t){t[t.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}($||($={}))}}]);