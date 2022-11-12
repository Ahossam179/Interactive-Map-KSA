"use strict";var Bt=Object.defineProperty,it=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,nt=(C,y,o)=>y in C?Bt(C,y,{enumerable:!0,configurable:!0,writable:!0,value:o}):C[y]=o,at=(C,y)=>{for(var o in y||(y={}))St.call(y,o)&&nt(C,o,y[o]);if(it)for(var o of it(y))Ut.call(y,o)&&nt(C,o,y[o]);return C};(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[3036],{99666:(C,y,o)=>{o.d(y,{KS:()=>M,PX:()=>V,QS:()=>k,_I:()=>L,jL:()=>Y,nE:()=>R,vs:()=>P,xp:()=>I});const L=8388607,S=8388608,V=0,I=1,P=n=>(n&S)>>>23,Y=n=>n&L,M=n=>P(n)===I?254:255;function R(n){return P(n)===I}function k(n,F){return((F?S:0)|n)>>>0}},31982:(C,y,o)=>{o.d(y,{J:()=>S,g:()=>L});const L=(x,A)=>x&&((...V)=>A.warn("DEBUG:",...V))||(()=>null),S=!1},19268:(C,y,o)=>{o.r(y),o.d(y,{default:()=>Ct});var L=o(15861),S=o(17626),x=o(8314),A=o(10699),M=(o(63290),o(90912),o(85931),o(82255),o(76898)),R=o(65401),k=o(65389),n=o(62208),F=o(31478),K=o(12225),O=o(67831),X=o(9545),a=o(39406),l=o(64288),f=o(29443);const _=4294967296;class T{constructor(t){this._head=t,this._cursor=t}static from(t){const e=B.from(new Float32Array(t));return new T(e)}get id(){return this._cursor.id}get baseZoom(){return this._cursor.baseZoom}get anchorX(){return this._cursor.anchorX}get anchorY(){return this._cursor.anchorY}get directionX(){return this._cursor.directionX}get directionY(){return this._cursor.directionY}get size(){return this._cursor.size}get materialKey(){return this._cursor.materialKey}get boundsCount(){return this._cursor.boundsCount}computedMinZoom(){return this._cursor.computedMinZoom()}setComputedMinZoom(t){return this._cursor.setComputedMinZoom(t)}boundsComputedAnchorX(t){return this._cursor.boundsComputedAnchorX(t)}boundsComputedAnchorY(t){return this._cursor.boundsComputedAnchorY(t)}setBoundsComputedAnchorX(t,e){return this._cursor.setBoundsComputedAnchorX(t,e)}setBoundsComputedAnchorY(t,e){return this._cursor.setBoundsComputedAnchorY(t,e)}boundsX(t){return this._cursor.boundsX(t)}boundsY(t){return this._cursor.boundsY(t)}boundsWidth(t){return this._cursor.boundsWidth(t)}boundsHeight(t){return this._cursor.boundsHeight(t)}link(t){if((0,n.pC)(t._head))return this._cursor.link(t._head)}getCursor(){return this.copy()}copy(){var r;const t=new T(null==(r=this._head)?void 0:r.copy());if(!t._head)return t;let e=t._head,s=t._head._link;for(;s;)e._link=s.copy(),e=s,s=e._link;return t}peekId(){var t;return null!=(t=this._cursor.peekId())?t:this._cursor._link.peekId()}nextId(){const t=this.id;for(;t===this.id;)if(!this.next())return!1;return!0}save(){this._savedCursor=this._cursor,this._savedOffset=this._cursor._offset}restore(){this._cursor=this._savedCursor,this._cursor._offset=this._savedOffset}next(){if(!this._cursor)return!1;if(!this._cursor.next()){if(!this._cursor._link)return!1;this._cursor=this._cursor._link,this._cursor._offset=0}return!0}lookup(t){for(this._cursor=this._head;this._cursor&&!this._cursor.lookup(t);){if(!this._cursor._link)return!1;this._cursor=this._cursor._link}return!!this._cursor}delete(t){let e=this._head,s=null;for(;e;){if(e.delete(t))return e.isEmpty()&&(0,n.pC)(s)&&(s._link=e._link),!0;s=e,e=e._link}return!1}}class B{constructor(t){this._offset=-1,this._link=null,this._count=0,this._deletedCount=0,this._offsets={instance:null},this._buffer=t}static from(t){return new B(new Float32Array(t))}isEmpty(){return this._deletedCount===this.count}get count(){return this._count||(this._count=this._computeCount()),this._count}get id(){return this._buffer[this._offset+0]}set id(t){this._buffer[this._offset+0]=t}get baseZoom(){return this._buffer[this._offset+1]}get anchorX(){return this._buffer[this._offset+2]}get anchorY(){return this._buffer[this._offset+3]}get directionX(){return this._buffer[this._offset+4]}get directionY(){return this._buffer[this._offset+5]}get size(){return this._buffer[this._offset+6]}get materialKey(){return this._buffer[this._offset+7]}computedMinZoom(){return this._buffer[this._offset+8]}setComputedMinZoom(t){this._buffer[this._offset+8]=t}get boundsCount(){return this._buffer[this._offset+9]}boundsComputedAnchorX(t){return this._buffer[this._offset+10+6*t+0]}boundsComputedAnchorY(t){return this._buffer[this._offset+10+6*t+1]}setBoundsComputedAnchorX(t,e){this._buffer[this._offset+10+6*t+0]=e}setBoundsComputedAnchorY(t,e){this._buffer[this._offset+10+6*t+1]=e}boundsX(t){return this._buffer[this._offset+10+6*t+2]}boundsY(t){return this._buffer[this._offset+10+6*t+3]}boundsWidth(t){return this._buffer[this._offset+10+6*t+4]}boundsHeight(t){return this._buffer[this._offset+10+6*t+5]}link(t){let e=this;for(;e._link;)e=e._link;e._link=t}getCursor(){return this.copy()}copy(){const t=new B(this._buffer);return t._link=this._link,t._offset=this._offset,t._deletedCount=this._deletedCount,t._offsets=this._offsets,t._count=this._count,t}peekId(){const t=this._offset+10+6*this.boundsCount+0;return t>=this._buffer.length?0:this._buffer[t]}next(){let t=0;for(;this._offset<this._buffer.length&&t++<100&&(-1===this._offset?this._offset=0:this._offset+=10+6*this.boundsCount,this.id===_););return this.id!==_&&this._offset<this._buffer.length}delete(t){const e=this._offset,s=this.lookup(t);if(s)for(this.id=4294967295,++this._deletedCount;this.next()&&this.id===t;)this.id=4294967295,++this._deletedCount;return this._offset=e,s}lookup(t){const e=this._offset;if((0,n.Wi)(this._offsets.instance)){this._offsets.instance=new Map;const s=this.copy();s._offset=-1;let r=0;for(;s.next();)s.id!==r&&(this._offsets.instance.set(s.id,s._offset),r=s.id)}return!!this._offsets.instance.has(t)&&(this._offset=this._offsets.instance.get(t),this.id!==_||(this._offset=e,!1))}_computeCount(){const t=this._offset;let e=0;for(this._offset=-1;this.next();)e++;return this._offset=t,e}}class w{constructor(t){if(!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let s=1;s<t.length;s++)e.next=new w([t[s]]),e=e.next}*values(){let t=this;for(;t;)yield t.data,t=t.next}forEach(t){let e=this;for(;e;)t(e.data),e=e.next}find(t){var e;return t(this.data)?this:null==(e=this.next)?void 0:e.find(t)}max(t,e=this){const s=t(this.data)>t(e.data)?this:e;return this.next?this.next.max(t,s):s}remove(t,e=null){return this===t?e?(e.next=this.next,e):this.next:this.next.remove(t,this)}get last(){return this.next?this.next.last:this}}class H{constructor(t){this._head=null,(0,n.Wi)(t)||(this._head=new w(t))}get head(){return this._head}maxAvailableSpace(){if((0,n.Wi)(this._head))return 0;const t=this._head.max(e=>e.end-e.start);return t.data.end-t.data.start}firstFit(t){if((0,n.Wi)(this._head))return null;let e=null,s=this._head;for(;s;){const r=s.data.end-s.data.start;if(r===t)return e?e.next=s.next:this._head=s.next,s.data.start;if(r>t){const i=s.data.start;return s.data.start+=t,i}e=s,s=s.next}return null}free(t,e){const s=t+e;if((0,n.Wi)(this._head)){const c=new w({start:t,end:s});return void(this._head=c)}if(s<=this._head.data.start){if(s===this._head.data.start)return void(this._head.data.start-=e);const c=new w({start:t,end:s});return c.next=this._head,void(this._head=c)}let r=this._head,i=r.next;for(;i;){if(i.data.start>=s){if(r.data.end===t)return r.data.end+=e,r.data.end===i.data.start?(r.data.end+=i.data.end-i.data.start,void(r.next=i.next)):void 0;if(i.data.start===s)return void(i.data.start-=e);const c=new w({start:t,end:s});return c.next=r.next,void(r.next=c)}r=i,i=i.next}if(t===r.data.end)return void(r.data.end+=e);const h=new w({start:t,end:s});r.next=h}}class z{constructor(t,e,s,r,i){this.target=t,this.geometryType=e,this.materialKey=s,this.indexFrom=r,this.indexCount=i}get indexEnd(){return this.indexFrom+this.indexCount}extend(t){this.indexCount+=t}}class G{constructor(t,e){this.geometryType=0,this._target=t,this.geometryType=e}static from(t,e,s,r){const i=new G(t,e);if((0,n.pC)(r))for(const h of r)s.seekIndex(h),i.addRecord(s);else for(;s.next();)i.addRecord(s);return i}addRecord(t){const e=this._target,s=this.geometryType,r=t.materialKey;let i=t.indexFrom,h=t.indexCount;if(h||(i=t.vertexFrom,h=t.vertexCount),(0,n.Wi)(this._head)){const v=new z(e,s,r,i,h);return void(this._head=new w(v))}let m=null,g=this._head;for(;g;){if(i<g.data.indexFrom)return this._insert(r,i,h,m,g);m=g,g=g.next}this._insert(r,i,h,m,null)}forEach(t){(0,n.pC)(this._head)&&this._head.forEach(t)}*infos(){if((0,n.pC)(this._head))for(const t of this._head.values())yield t}_insert(t,e,s,r,i){if((0,n.Wi)(r)&&(0,n.Wi)(i)){const h=new z(this._target,this.geometryType,t,e,s);this._head=new w(h)}return(0,n.Wi)(r)&&(0,n.pC)(i)?this._insertAtHead(t,e,s,i):(0,n.pC)(r)&&(0,n.Wi)(i)?this._insertAtEnd(t,e,s,r):(0,n.pC)(r)&&(0,n.pC)(i)?this._insertAtMiddle(t,e,s,r,i):void 0}_insertAtHead(t,e,s,r){if(t===r.data.materialKey&&e+s===r.data.indexFrom)r.data.indexFrom=e,r.data.indexCount+=s;else{const h=new z(this._target,this.geometryType,t,e,s);this._head=new w(h),this._head.next=r}}_insertAtEnd(t,e,s,r){if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s;else{const i=new z(this._target,this.geometryType,t,e,s),h=new w(i);r.next=h}}_insertAtMiddle(t,e,s,r,i){const h=e+s;if(r.data.materialKey===t&&r.data.indexEnd===e)r.data.indexCount+=s,r.data.materialKey===i.data.materialKey&&r.data.indexEnd===i.data.indexFrom&&(r.data.indexCount+=i.data.indexCount,r.next=i.next);else if(t===i.data.materialKey&&h===i.data.indexFrom)i.data.indexFrom=e,i.data.indexCount+=s;else{const c=new z(this._target,this.geometryType,t,e,s),p=new w(c);r.next=p,p.next=i}}}const J=(0,x.Z)("esri-2d-log-allocations");class Z{constructor(t){this._array=t}get array(){return this._array}get length(){return this._array.length}static create(t){const e=D.acquire(t);return new Z(e)}expand(t){const e=D.acquire(t);e.set(this._array),D.release(this._array),this._array=e}destroy(){D.release(this._array)}set(t,e){this._array.set(t._array,e)}slice(){const t=D.acquire(this._array.byteLength);return t.set(this._array),new Z(t)}}class W{constructor(){this._data=new ArrayBuffer(W.BYTE_LENGTH),this._freeList=new H({start:0,end:this._data.byteLength})}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t){const e=this._freeList.firstFit(t);return(0,n.Wi)(e)?null:new Uint32Array(this._data,e,t/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength)}}const D=new class ot{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage()}get _bytesTotal(){return this._pages.length*W.BYTE_LENGTH}acquire(t){if(this._bytesAllocated+=t,J&&console.log(`Allocating ${t}, (${this._bytesAllocated} / ${this._bytesTotal})`),t>W.BYTE_LENGTH)return new Uint32Array(t/Uint32Array.BYTES_PER_ELEMENT);for(const e of this._pages){const s=e.allocate(t);if((0,n.pC)(s))return s}return(0,n.s3)(this._addPage().allocate(t),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,J&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t)}_addPage(){const t=new W;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}};var $=o(83994),Q=o(67969);class tt{constructor(t,e,s){const r=Z.create(e*s*Uint32Array.BYTES_PER_ELEMENT);this.size=e,this.strideInt=s,this.bufferType=t,this.dirty={start:1/0,end:0},this._gpu=null,this._cpu=r,this.clear()}get elementSize(){return this._cpu.length/this.strideInt}get invalidated(){return this.bufferSize&&!this._gpu}get invalidatedComputeBuffer(){return this.bufferSize&&!this._gpuComputeTriangles}invalidate(){this._invalidateTriangleBuffer(),(0,n.yw)(this._gpu,t=>t.dispose()),this._gpu=null}_invalidateTriangleBuffer(){(0,n.yw)(this._gpuComputeTriangles,t=>t.dispose()),this._gpuComputeTriangles=null}destroy(){(0,n.yw)(this._gpu,t=>t.dispose()),(0,n.yw)(this._gpuComputeTriangles,t=>t.dispose()),(0,n.yw)(this._cpu,t=>t.destroy()),(0,n.yw)(this._cpu2,t=>t.destroy())}clear(){this.dirty.start=1/0,this.dirty.end=0,this.freeList=new H({start:0,end:this._cpu.length/this.strideInt}),this.fillPointer=0}ensure(t){if(!(this.maxAvailableSpace()>=t)&&t*this.strideInt>this._cpu.length-this.fillPointer){this.invalidate();const e=this._cpu.length/this.strideInt,s=Math.round(1.25*(e+t));this._cpu.expand(s*this.strideInt*Uint32Array.BYTES_PER_ELEMENT),this.freeList.free(e,s-e)}}set(t,e){this._cpu.array[t]!==e&&(this._cpu.array[t]=e,this.dirty.start=Math.min(t,this.dirty.start),this.dirty.end=Math.max(t,this.dirty.end))}getGPUBuffer(t,e=!1){if(!this.bufferSize)return null;if(e){if("index"!==this.bufferType)throw new Error("Tired to get triangle buffer, but target is not an index buffer");return(0,n.Wi)(this._gpuComputeTriangles)&&(this._gpuComputeTriangles=this._createComputeBuffer(t)),this._gpuComputeTriangles}return(0,n.Wi)(this._gpu)&&(this._gpu=this._createBuffer(t)),this._gpu}getCPUBuffer(){if(!this._cpu2){const t=this._cpu.slice();this._cpu2=t}return this._cpu2.length!==this._cpu.length&&this._cpu2.expand(this._cpu.length*this._cpu.array.BYTES_PER_ELEMENT),this._cpu2.set(this._cpu),this._cpu2}get bufferSize(){return this._cpu.length/this.strideInt}maxAvailableSpace(){return this.freeList.maxAvailableSpace()}insert(t,e,s,r){const i=s*this.strideInt;if(!i)return 0;const h=e*this.strideInt*Uint32Array.BYTES_PER_ELEMENT,c=new Uint32Array(t,h,i),p=(0,n.s3)(this.freeList.firstFit(s),"First fit region must be defined")*this.strideInt,m=i,g=p/this.strideInt-e;if(0!==r)for(let v=0;v<c.length;v++)c[v]+=r;return this._cpu.array.set(c,p),this.dirty.start=Math.min(this.dirty.start,p),this.dirty.end=Math.max(this.dirty.end,p+m),this.fillPointer=Math.max(this.fillPointer,p+m),g}free(t,e,s){const r=t*this.strideInt,i=(t+e)*this.strideInt;if(!0===s)for(let h=t;h!==t+e;h++)this._cpu.array[h*this.strideInt]=2147450879;this.dirty.start=Math.min(this.dirty.start,r),this.dirty.end=Math.max(this.dirty.end,i),this.freeList.free(t,e)}upload(){if(this.dirty.end){if(this._invalidateTriangleBuffer(),(0,n.Wi)(this._gpu))return this.dirty.start=1/0,void(this.dirty.end=0);this._gpu.setSubDataFromView(this._cpu.array,this.dirty.start,this.dirty.start,this.dirty.end),this.dirty.start=1/0,this.dirty.end=0}}_createBuffer(t){const e=Q.l1.DYNAMIC_DRAW;return"index"===this.bufferType?$.f.createIndex(t,e,this._cpu.array):$.f.createVertex(t,e,this._cpu.array)}_createComputeBuffer(t){const e=Q.l1.DYNAMIC_DRAW,s=new Uint32Array(this.fillPointer/3);for(let r=0;r<this.fillPointer;r+=3)s[r/3]=this._cpu.array[r];return $.f.createIndex(t,e,s)}}var et=o(37633),dt=o(49353);class ct{constructor(t,e){this._vaos=new Map,this._indicesInvalid=!1,this.geometryType=t}destroy(){for(const[t,e]of this._vaos)(0,n.pC)(e)&&e.dispose(!1);this._indexBuffer=(0,n.SC)(this._indexBuffer),this._vertexBuffer=(0,n.SC)(this._vertexBuffer)}insert(t,e,s){if(!t.records.byteLength)return;const r=t.stride;if(this._vertexBuffer&&this._indexBuffer){const h=t.vertices.byteLength/r;this._indexBuffer.ensure(t.indices.byteLength/4),this._vertexBuffer.ensure(h);const{vertices:c,indices:p}=t,m=et.$.from(t.records),g=this._vertexBuffer.insert(c,0,c.byteLength/r,0),v=this._indexBuffer.insert(p,0,p.byteLength/4,g);if(m.forEach(E=>{E.indexFrom+=v,E.vertexFrom+=g}),(0,n.s3)(this._records,"Expected records to be defined").link(m),e)this._indicesInvalid=!0;else if(this._displayList){const E=m.getCursor();for(;E.next();)this._displayList.addRecord(E)}}else{const i=t.indices.byteLength/4,h=t.vertices.byteLength/r,c=r/Uint32Array.BYTES_PER_ELEMENT;this._records=et.$.from(t.records),this._indexBuffer=new tt("index",i,1),this._vertexBuffer=new tt("vertex",h,c),this._indexBuffer.insert(t.indices,0,t.indices.byteLength/4,0),this._vertexBuffer.insert(t.vertices,0,t.vertices.byteLength/r,0),e&&(this._indicesInvalid=!0)}}remove(t){if(!(0,n.Wi)(this._records))for(const e of t){const s=this._records.getCursor();if(!s.lookup(e))continue;const r=s.indexFrom,i=s.vertexFrom;let h=s.indexCount,c=s.vertexCount;for(;s.next()&&s.id===e;)h+=s.indexCount,c+=s.vertexCount;this._indexBuffer.free(r,h),this._vertexBuffer.free(i,c,!0),this._records.delete(e)}}getVAO(t,e,s,r){if(!this._vertexBuffer||!this._indexBuffer||(0,n.Wi)(this._records)||!this._vertexBuffer.bufferSize)return null;const i=r?1:0;let h=this._vaos.get(i);(this._vertexBuffer.invalidated||this._indexBuffer.invalidated||r&&this._indexBuffer.invalidatedComputeBuffer)&&((0,n.yw)(h,m=>m.dispose(!1)),h=null),this._vertexBuffer.upload(),this._indexBuffer.upload();const c=this._indexBuffer.getGPUBuffer(t,1===i),p=this._vertexBuffer.getGPUBuffer(t);return h||(h=new dt.U(t,s,e,{geometry:p},c),this._vaos.set(i,h)),h}forEachCommand(t){if(!(0,n.Wi)(this._records)){if(this._sortIndices(this._records),!this._displayList){const e=this._cursorIndexOrder;this._displayList=G.from(this,this.geometryType,this._records.getCursor(),e)}this._displayList.forEach(t)}}_sortIndices(t){const e=!!this._indexBuffer.bufferSize;if(!this._indicesInvalid)return;this._indicesInvalid=!1;let s=0;const r=t.getCursor(),i=[],h=[],c=[];for(;r.next();)h.push(r.index),c.push(r.sortKey),i.push(r.id);h.sort((g,v)=>{const E=c[v],U=c[g];return U===E?i[v]-i[g]:E-U});const p=t.getCursor(),m=e?this._indexBuffer.getCPUBuffer():this._vertexBuffer.getCPUBuffer();for(const g of h){if(!p.seekIndex(g))throw new Error("Expected to find index");if(e){const{indexFrom:v,indexCount:E}=p;p.indexFrom=s;for(let U=0;U<E;U++)this._indexBuffer.set(s++,m.array[v+U])}else{const{vertexFrom:v,vertexCount:E}=p,U=this._vertexBuffer.strideInt,rt=v*U,Tt=rt+E*U;p.vertexFrom=s/U;for(let j=rt;j<Tt;j++)this._vertexBuffer.set(s++,m.array[j])}}this._cursorIndexOrder=h,this._displayList=null}}let yt=0;class gt extends f.o{constructor(t,e,s,r,i){super(t,e,s),this.instanceId=yt++,this.patchCount=0,this._renderState={current:{geometry:new Map,metrics:null},next:null,swap:!1,swapFrames:0,locked:!1},this._patches=new k.Z(100),this._bufferPatches=new k.Z(100),this._lastCommitTime=0,this.transforms.labelMat2d=(0,K.c)(),this._store=r,this._requestLabelUpdate=i}destroy(){super.destroy(),this._renderState.current.geometry.forEach(t=>t.destroy())}get labelMetrics(){return this._renderState.current.metrics}get hasData(){return!!this._renderState.current.geometry.size}getGeometry(t){return this._renderState.current.geometry.get(t)}setTransform(t,e){super.setTransform(t,e);const s=this.transforms.labelMat2d,r=t.getScreenTransform(s,e),i=(0,X.c)();(0,O.t)(i,[this.x,this.y],r),(0,F.a)(s,i),(0,F.m)(s,t.viewMat2d,s)}patch(t,e){this.patchCount++,(0,x.Z)("esri-2d-update-debug")&&!0===t.clear&&console.debug(this.key.id,"FeatureTile:patch:clear",t.clear),t.clear&&this._patches.size>=50&&this._dropPatches();const s=t;e&&s.addOrUpdate&&this.key.id!==s.addOrUpdate.tileKeyOrigin?this._bufferPatches.enqueue(s):(s.sort=s.sort&&!e,this._patches.enqueue(s)),this.requestRender()}commit(t){if(this._lastCommitTime!==t.time){this._lastCommitTime=t.time;for(let e=0;e<4;e++)this._updateMesh(),this.isReady&&this._updateBufferMesh();this._renderState.swap&&(this._swapRenderStates(),this.requestRender())}}lock(){this._renderState.locked=!0}unlock(){this._renderState.locked=!1,this._flushUpdates(),this._swap()}_swapRenderStates(){if(this._renderState.next){if(this._renderState.locked)return this._renderState.swap=!0,void this.requestRender();this._renderState.swap=!0,this._swap()}}_swap(){this._renderState.swap&&(this._renderState.swap=!1,(0,n.pC)(this._renderState.next)&&(this._renderState.current.geometry.forEach(t=>t.destroy()),this._renderState.current=this._renderState.next,this._renderState.next=null,this._requestLabelUpdate()))}_flushUpdates(){let t=this._patches.maxSize;for(;this._patches.size&&t--;)this._updateMesh(),this._swap()}_updateBufferMesh(){const t=this._bufferPatches.peek();if(!(0,n.pC)(t)||!t.clear||null===this._renderState.next)for(;this._bufferPatches.size;){const e=this._bufferPatches.dequeue();(0,n.pC)(e)&&this._patchBuffer(e)}}_updateMesh(){const t=this._patches.dequeue();(0,n.pC)(t)&&(!0===t.clear&&((0,n.pC)(this._renderState.next)&&(this._renderState.next.geometry.forEach(e=>e.destroy()),this._renderState.next=null),this._renderState.next={geometry:new Map,metrics:null},(0,x.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Creating new renderState")),this.requestRender(),this._patch(t),t.end&&((0,x.Z)("esri-2d-update-debug")&&console.debug(this.key.id,"FeatureTile:_updateMesh - Encountered end message"),this.ready(),this._swapRenderStates()))}_patch(t){(0,l.Z_)(e=>{this._remove(e,t.remove),this._insert(e,t,!1)})}_patchBuffer(t){(0,l.Z_)(e=>{this._insert(e,t,!0)})}_insert(t,e,s){var r;try{const i=(0,n.Pt)(this._renderState.next,this._renderState.current),h=null==(r=e.addOrUpdate)?void 0:r.data[t],c=i.geometry;if((0,n.Wi)(h))return;c.has(t)||((0,x.Z)("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Creating geometry buffer ${t}`),c.set(t,new ct(t,this.stage))),(0,x.Z)("esri-2d-update-debug")&&console.debug(this.key.id,`FeatureTile:_insert - Inserting into ${t}, version=${e.addOrUpdate.version} stride=${h.stride}`),c.get(t).insert(h,e.sort,s),t===a.LW.LABEL&&this._insertLabelMetrics(e.type,h.metrics,e.clear)}catch(i){}}_insertLabelMetrics(t,e,s){const r=(0,n.Pt)(this._renderState.next,this._renderState.current);if((0,n.Wi)(e))return;const i=T.from(e);if((0,n.Wi)(r.metrics))r.metrics=i;else{if("update"===t){const h=i.getCursor();for(;h.next();)r.metrics.delete(h.id)}r.metrics.link(i)}}_remove(t,e){const s=(0,n.Pt)(this._renderState.next,this._renderState.current).geometry.get(t);e&&e.length&&s&&(s.remove(e),this._removeLabelMetrics(e))}_removeLabelMetrics(t){const{metrics:e}=(0,n.Pt)(this._renderState.next,this._renderState.current);if(!(0,n.Wi)(e)&&t.length)for(const s of t)for(;e.delete(s););}_dropPatches(){const t=new Array;let e=!1;for(;this._patches.size;){const s=this._patches.dequeue();if((0,n.Wi)(s))break;if(s.clear){if(e)break;e=!0}t.push(s)}this._patches.clear(),t.forEach(s=>this._patches.enqueue(s))}}var mt=o(22418),xt=o(84225),bt=o(6257),b=o(51434),vt=o(7441);const wt=(0,x.Z)("featurelayer-order-by-server-enabled");class Et extends vt.T{constructor(t,e,s,r){super(t),this._pointToCallbacks=[],this._layer=s,this._layerView=e,this._onUpdate=r}renderChildren(t){this.attributeView.update(),this.hasAnimation&&t.painter.effects.integrate.draw(t,t.attributeView),super.renderChildren(t)}hasEmptyAttributeView(){return this.attributeView.isEmpty()}isUpdating(){return this.attributeView.isUpdating()}hitTest(t){const e=(0,A.hh)();return this._pointToCallbacks.push({point:t,resolver:e}),this.requestRender(),e.promise}onTileData(t,e){const s=wt&&"orderBy"in this._layer&&this._layer.orderBy;t.patch(e,s&&this._layerView.orderByFields===((null==s?void 0:s.length)&&!s[0].valueExpression&&s[0].field)),this.contains(t)||this.addChild(t),this.requestRender()}onTileError(t){this.contains(t)||this.addChild(t)}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._layerView.featureEffectView.transitionStep(t,e),this._layerView.featureEffectView.transitioning&&this.requestRender()}doRender(t){const{minScale:e,maxScale:s}=this._layer,r=t.state.scale;r<=(e||1/0)&&r>=s&&super.doRender(t)}onAttributeStoreUpdate(){this.hasLabels&&this._layerView.view.labelManager.requestUpdate(),this._onUpdate()}get hasAnimation(){return this.hasLabels}setStencilReference(t){const{rendererSchema:e}=t.rendererInfo;if("dot-density"===e.type&&e.dotSize>1)for(const r of this.children)r.stencilRef=r.key.level+1;else super.setStencilReference(t)}get hasLabels(){if("sublayers"in this._layer)return this._layer.sublayers.some(s=>s.labelingInfo&&s.labelingInfo.length&&s.labelsVisible);const t=this._layer.featureReduction;return this._layer.labelingInfo&&this._layer.labelingInfo.length&&this._layer.labelsVisible||!!(t&&"labelingInfo"in t&&t.labelsVisible&&t.labelingInfo&&t.labelingInfo.length)}prepareRenderPasses(t){const e=t.registerRenderPass({name:"label",brushes:[b.U.label],target:()=>this.hasLabels?this.children:null,drawPhase:a.jx.LABEL|a.jx.LABEL_ALPHA}),s=t.registerRenderPass({name:"geometry",brushes:[b.U.fill,b.U.dotDensity,b.U.line,b.U.marker,b.U.heatmap,b.U.pieChart,b.U.text],target:()=>this.children,enableDefaultDraw:()=>!this._layerView.featureEffectView.hasEffects,effects:[{apply:t.effects.outsideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.excludedEffects},{apply:t.effects.insideEffect,enable:()=>this._layerView.featureEffectView.hasEffects,args:()=>this._layerView.featureEffectView.includedEffects},{apply:t.effects.hittest,enable:()=>!!this._pointToCallbacks.length,args:()=>this._pointToCallbacks}]}),r=t.registerRenderPass({name:"highlight",brushes:[b.U.fill,b.U.dotDensity,b.U.line,b.U.marker,b.U.pieChart,b.U.text],target:()=>this.children,drawPhase:a.jx.HIGHLIGHT,enableDefaultDraw:()=>!1,effects:[{apply:t.effects.highlight,enable:()=>!!this._layerView.hasHighlight()}]});return[...super.prepareRenderPasses(t),s,r,e]}}let N=class extends xt.Z{constructor(){super(...arguments),this.type="symbol"}install(d){const e=new Et(this.tileInfoView,this.layerView,this.layer,()=>this.notifyChange("updating"));this.featuresView=e,d.addChild(e)}uninstall(d){d.removeChild(this.featuresView),this.featuresView.destroy(),this.featuresView=null}fetchResource(d,t){const{url:e}=d,s=this.featuresView.stage;try{return s.resourceManager.fetchResource(e,{signal:t.signal})}catch(r){return(0,A.D_)(r)?Promise.resolve({width:0,height:0}):Promise.reject(r)}}isUpdating(){var r;const d=super.isUpdating(),t=!this.featuresView||this.featuresView.isUpdating(),e=null==(r=this.featuresView)?void 0:r.hasEmptyAttributeView(),s=d||t||d&&e;return(0,x.Z)("esri-2d-log-updating")&&console.log(`Updating SymbolTileRenderer ${s}\n  -> updatingTiles ${d}\n  -> hasFeaturesView ${!!this.featuresView}\n  -> updatingFeaturesView ${t}`),s}hitTest(d){return this.featuresView.hitTest(d)}supportsRenderer(d){return null!=d&&["simple","class-breaks","unique-value","dot-density","dictionary","heatmap","pie-chart"].includes(d.type)}onConfigUpdate(d){let t=null;if("visualVariables"in d){const e=((0,mt.aR)(d).visualVariables||[]).map(s=>{const r=s.clone();return"normalizationField"in s&&(r.normalizationField=null),s.valueExpression&&"$view.scale"!==s.valueExpression&&(r.valueExpression=null,r.field="nop"),r});t=(0,bt.I)(e)}this.featuresView.setRendererInfo(d,t,this.layerView.featureEffect)}onTileData(d){const t=this.tiles.get(d.tileKey);t&&d.data&&this.featuresView.onTileData(t,d.data),this.layerView.view.labelManager.requestUpdate()}onTileError(d){const t=this.tiles.get(d.tileKey);t&&this.featuresView.onTileError(t)}forceAttributeTextureUpload(){this.featuresView.attributeView.forceTextureUpload()}lockGPUUploads(){this.featuresView.attributeView.lockTextureUpload(),this.tiles.forEach(d=>d.lock())}unlockGPUUploads(){this.featuresView.attributeView.unlockTextureUpload(),this.tiles.forEach(d=>d.unlock())}getMaterialItems(d){var t=this;return(0,L.Z)(function*(){return t.featuresView.getMaterialItems(d)})()}invalidateLabels(){this.featuresView.hasLabels&&this.layerView.view.labelManager.requestUpdate()}createTile(d){const t=this.tileInfoView.getTileBounds((0,R.Ue)(),d);return new gt(d,t[0],t[3],this.featuresView.attributeView,()=>this.layerView.view.labelManager.requestUpdate())}disposeTile(d){this.featuresView.removeChild(d),d.destroy(),this.layerView.view.labelManager.requestUpdate()}};N=(0,S._)([(0,M.j)("esri.views.2d.layers.features.tileRenderers.SymbolTileRenderer")],N);const Ct=N},6257:(C,y,o)=>{o.d(y,{I:()=>F,qc:()=>P});var L=o(62208),S=o(23841),x=o(81295),A=o(39351),V=o(39406),I=o(25310);function P(a,l){if(!a||!l)return a;switch(l){case"radius":case"distance":return 2*a;case"diameter":case"width":return a;case"area":return Math.sqrt(a)}return a}function M(a){return a.map(l=>function Y(a){return{value:a.value,size:(0,S.t_)(a.size)}}(l))}function R(a){return"string"==typeof a||"number"==typeof a?(0,S.t_)(a):{type:"size",expression:a.expression,stops:M(a.stops)}}const n=a=>{const l=[],f=[],u=M(a),_=u.length;for(let T=0;T<6;T++){const B=u[Math.min(T,_-1)];l.push(B.value),f.push(null==B.size?A.AI:(0,S.F2)(B.size))}return{values:new Float32Array(l),sizes:new Float32Array(f)}};function F(a){const l=a&&a.length>0?{}:null,f=l?{}:null;if(!l)return{vvFields:l,vvRanges:f};for(const u of a)if(u.field&&(l[u.type]=u.field),"size"===u.type){f.size||(f.size={});const _=u;switch((0,I.a)(_)){case V.X.SIZE_MINMAX_VALUE:f.size.minMaxValue={minDataValue:_.minDataValue,maxDataValue:_.maxDataValue,minSize:R(_.minSize),maxSize:R(_.maxSize)};break;case V.X.SIZE_SCALE_STOPS:f.size.scaleStops={stops:M(_.stops)};break;case V.X.SIZE_FIELD_STOPS:if(_.levels){const T={};for(const B in _.levels)T[B]=n(_.levels[B]);f.size.fieldStops={type:"level-dependent",levels:T}}else f.size.fieldStops=at({type:"static"},n(_.stops));break;case V.X.SIZE_UNIT_VALUE:f.size.unitValue={unit:_.valueUnit,valueRepresentation:_.valueRepresentation}}}else"color"===u.type?f.color=X(u):"opacity"===u.type?f.opacity=K(u):"rotation"===u.type&&(f.rotation={type:u.rotationType});return{vvFields:l,vvRanges:f}}function K(a){const l={values:[0,0,0,0,0,0,0,0],opacities:[0,0,0,0,0,0,0,0]};if("string"==typeof a.field){if(!a.stops)return null;{if(a.stops.length>8)return null;const f=a.stops;for(let u=0;u<8;++u){const _=f[Math.min(u,f.length-1)];l.values[u]=_.value,l.opacities[u]=_.opacity}}}else{if(!(a.stops&&a.stops.length>=0))return null;{const f=a.stops&&a.stops.length>=0&&a.stops[0].opacity;for(let u=0;u<8;u++)l.values[u]=1/0,l.opacities[u]=f}}return l}function O(a,l,f){a[4*l+0]=f.r/255,a[4*l+1]=f.g/255,a[4*l+2]=f.b/255,a[4*l+3]=f.a}function X(a){if((0,L.Wi)(a)||a.normalizationField)return null;const l={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};if("string"==typeof a.field){if(!a.stops)return null;{if(a.stops.length>8)return null;l.field=a.field;const f=a.stops;for(let u=0;u<8;++u){const _=f[Math.min(u,f.length-1)];l.values[u]=_.value,O(l.colors,u,_.color)}}}else{if(!(a.stops&&a.stops.length>=0))return null;{const f=a.stops&&a.stops.length>=0&&a.stops[0].color;for(let u=0;u<8;u++)l.values[u]=1/0,O(l.colors,u,f)}}for(let f=0;f<32;f+=4)(0,x.pr)(l.colors,f,!0);return l}}}]);