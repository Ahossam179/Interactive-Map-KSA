"use strict";var Fe=Object.defineProperty,Ee=Object.defineProperties,me=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,J=(m,y,o)=>y in m?Fe(m,y,{enumerable:!0,configurable:!0,writable:!0,value:o}):m[y]=o,U=(m,y)=>{for(var o in y||(y={}))Te.call(y,o)&&J(m,o,y[o]);if(W)for(var o of W(y))Se.call(y,o)&&J(m,o,y[o]);return m},w=(m,y)=>Ee(m,me(y));(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[6354],{86354:(m,y,o)=>{o.r(y),o.d(y,{FeatureServiceSnappingSourceWorker:()=>_,default:()=>Ce});var d=o(15861),h=o(17626),L=o(61885),Q=o(72392),a=o(62208),F=o(10699),I=o(32917),c=o(77712),V=o(85931),b=(o(8314),o(90912),o(76898)),G=o(17760),Z=o(65234),k=o(82708),$=o(58175),O=o(2584),Y=o(62708),A=o(84952),M=o(14517);let R=class extends M.Z{constructor(){super(...arguments),this.updating=!1,this.pending=[]}push(e,t){this.pending.push({promise:e,callback:t}),1===this.pending.length&&this._process()}_process(){if(!this.pending.length)return void(this.updating=!1);this.updating=!0;const e=this.pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this.pending.shift(),this._process()})}};(0,h._)([(0,c.Cb)()],R.prototype,"updating",void 0),R=(0,h._)([(0,b.j)("esri.core.AsyncSequence")],R);var l,e,K=o(80542),X=o(54024),q=o(63290),ee=o(2004),E=o(65401),P=o(82054),te=o(38305),ie=o(98558),x=o(20477),z=o(59213);class se{constructor(t,i){this.data=t,this.resolution=i,this.state={type:l.CREATED},this.alive=!0}process(t){switch(this.state.type){case l.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_COUNT:break;case l.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case l.FETCH_FEATURES:break;case l.FETCHED_FEATURES:this.state=this._goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this.featureCount,state:this.stateToString}}get featureCount(){switch(this.state.type){case l.CREATED:case l.FETCH_COUNT:return 0;case l.FETCHED_COUNT:return this.state.featureCount;case l.FETCH_FEATURES:return this.state.previous.featureCount;case l.FETCHED_FEATURES:return this.state.features.length;case l.DONE:return this.state.previous.features.length}}get stateToString(){switch(this.state.type){case l.CREATED:return"created";case l.FETCH_COUNT:return"fetch-count";case l.FETCHED_COUNT:return"fetched-count";case l.FETCH_FEATURES:return"fetch-features";case l.FETCHED_FEATURES:return"fetched-features";case l.DONE:return"done"}}_gotoFetchCount(t,i){var s=this;return{type:l.FETCH_COUNT,previous:t,task:(0,F.vr)(function(){var r=(0,d.Z)(function*(n){const u=yield(0,z.mt)(i.fetchCount(s,n));s.state.type===l.FETCH_COUNT&&(s.state=s._gotoFetchedCount(s.state,u.ok?u.value:1/0))});return function(n){return r.apply(this,arguments)}}())}}_gotoFetchedCount(t,i){return{type:l.FETCHED_COUNT,featureCount:i,previous:t}}_gotoFetchFeatures(t,i){var s=this;return{type:l.FETCH_FEATURES,previous:t,task:(0,F.vr)(function(){var r=(0,d.Z)(function*(n){const u=yield(0,z.mt)(i.fetchFeatures(s,t.featureCount,n));s.state.type===l.FETCH_FEATURES&&(s.state=s._gotoFetchedFeatures(s.state,u.ok?u.value:[]))});return function(n){return r.apply(this,arguments)}}())}}_gotoFetchedFeatures(t,i){return{type:l.FETCHED_FEATURES,previous:t,features:i}}_goToDone(t,i){return i.finish(this,t.features),{type:l.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:l.CREATED},t.type){case l.CREATED:case l.FETCHED_COUNT:case l.FETCHED_FEATURES:case l.DONE:break;case l.FETCH_COUNT:case l.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!(0,a.Wi)(t)&&this.data.extent)||((0,E.oJ)(t,j),(0,E.kK)(this.data.extent,j))}}(e=l||(l={}))[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE";const j=(0,E.Ue)(),re=q.Z.getLogger("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher");let f=class extends K.r{constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this.pendingTiles=new Map,this.pendingEdits=new R,this.pendingEditsAbortController=new AbortController}get minimumVerticesPerFeature(){var e;switch(null==(e=this.store)?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),i=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(i)&&this._set("filter",i)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&((0,a.pC)(e)&&(0,a.pC)(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingHandles.updating||this.pendingEdits.updating}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this.configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{(0,V.fS)(e,t,({id:i},{id:s})=>i===s)||this._process()},I.Z_)}destroy(){this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this.pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this.pendingEditsAbortController.abort(),this.pendingEditsAbortController=null}refresh(){this.store.refresh(),this.pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){var t=this;this.pendingEdits.push(e,function(){var i=(0,d.Z)(function*(s){if(0===s.addedFeatures.length&&0===s.updatedFeatures.length&&0===s.deletedFeatures.length)return;for(const[,n]of t.pendingTiles)n.reset();const r=w(U({},s),{deletedFeatures:s.deletedFeatures.map(({objectId:n,globalId:u})=>n&&-1!==n?n:t._lookupObjectIdByGlobalId(u))});yield t.updatingHandles.addPromise(t.store.processEdits(r,(n,u)=>t._queryFeaturesById(n,u),t.pendingEditsAbortController.signal)),t._processPendingTiles()});return function(s){return i.apply(this,arguments)}}())}_initializeFetchExtent(){var e=this;if(!this.capabilities.query.supportsExtent||!(0,te.M8)(this.url))return;const t=(0,F.vr)(function(){var i=(0,d.Z)(function*(s){var r;try{const n=yield(0,x.executeQueryForExtent)(e.url,new A.Z({where:"1=1",outSpatialReference:e.spatialReference,cacheHint:!!e.capabilities.query.supportsCacheHint||void 0}),{query:e.configuration.customParameters,signal:s});e.store.extent=ee.Z.fromJSON(null==(r=n.data)?void 0:r.extent)}catch(n){(0,F.r9)(n),re.warn("Failed to fetch data extent",n)}});return function(s){return i.apply(this,arguments)}}());this.updatingHandles.addPromise(t.promise.then(()=>this._process())),this.handles.add((0,X.kB)(()=>t.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this.pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this.pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea),!(0,a.Wi)(e))for(const{data:t,resolution:i}of e.missingTiles){const s=this.pendingTiles.get(t.id);s?(s.resolution=i,s.alive=!0):this._createPendingTile(t,i)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.store.process(this.tilesOfInterest[t],(r,n)=>this._verifyTileComplexity(r,n));(0,a.Wi)(e)?e=s:e.prepend(s)}return e}_deletePendingTiles(){for(const[,e]of this.pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,i)=>this._fetchCount(t,i),fetchFeatures:(t,i,s)=>this._fetchFeatures(t,i,s),finish:(t,i)=>this._finishPendingTile(t,i),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this.pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this.minimumVerticesPerFeature<oe}_verifyFeatureDensity(e,t){if((0,a.Wi)(this.tileInfo))return!1;const i=this.tileSize*t;return e*(ae/(i*i))<le}_ensureFetchAllCounts(e){let t=!0;for(const[,i]of this.pendingTiles)i.state.type<l.FETCHED_COUNT&&this.updatingHandles.addPromise(i.process(e)),i.state.type<=l.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability((0,a.Wi)(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const i=new se(e,t);return this.pendingTiles.set(e.id,i),i}_deletePendingTile(e){e.reset(),this.pendingTiles.delete(e.data.id)}_fetchCount(e,t){var i=this;return(0,d.Z)(function*(){return i.store.fetchCount(e.data,i.url,i._createCountQuery(e),{query:i.customParameters,timeout:D,signal:t})})()}_fetchFeatures(e,t,i){var s=this;return(0,d.Z)(function*(){let r,n=0,u=0,C=t;for(;;){const p=s._createFeaturesQuery(e),g=s._setPagingParameters(p,n,C),{features:v,exceededTransferLimit:ve}=yield s._queryFeatures(p,i);if(g&&(n+=(0,a.Wg)(p.num)),u+=v.length,r=r?r.concat(v):v,C=t-u,!g||!ve||C<=0)return r}})()}_filterProperties(e){return(0,a.Wi)(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,i=this.objectIdField;if((0,a.Wi)(t))throw new Error("Expected globalIdField to be defined");let s=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(s=null!=(n=r.objectId)?n:r.attributes[i])}),(0,a.Wi)(s))throw new Error(`Expected to find a feature with globalId ${e}`);return s}_queryFeaturesById(e,t){const i=this._createFeaturesQuery(null);return i.objectIds=e,this._queryFeatures(i,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}_queryFeaturesPBF(e,t){var i=this;return(0,d.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,x.executeQueryPBF)(i.url,e,new ie.J({sourceSpatialReference:s}),{query:i.configuration.customParameters,timeout:D,signal:t});return(0,P.lM)(r)})()}_queryFeaturesJSON(e,t){var i=this;return(0,d.Z)(function*(){const{sourceSpatialReference:s}=i,{data:r}=yield(0,x.executeQuery)(i.url,e,s,{query:i.configuration.customParameters,timeout:D,signal:t});return(0,P.h_)(r,i.objectIdField)})()}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,(0,a.pC)(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new A.Z({returnZ:!1,returnM:!1,geometry:(0,a.pC)(this.tileInfo)&&(0,a.pC)(e)?(0,E.HH)(e.data.extent,this.tileInfo.spatialReference):void 0}),i=this.configuration.filter;return(0,a.pC)(i)&&(t.where=i.where,t.gdbVersion=i.gdbVersion,t.timeExtent=i.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,i){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:s,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:u,supportsResultType:C}=this.capabilities.query,p=s?A.Z.MAX_MAX_RECORD_COUNT_FACTOR:1,g=p*((C||r)&&n?n:u||ne);return e.start=t,s?(e.maxRecordCountFactor=Math.min(p,Math.ceil(i/g)),e.num=Math.min(i,e.maxRecordCountFactor*g)):e.num=Math.min(i,g),!0}};(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"url",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"objectIdField",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"globalIdField",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"capabilities",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"sourceSpatialReference",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"spatialReference",void 0),(0,h._)([(0,c.Cb)({constructOnly:!0})],f.prototype,"store",void 0),(0,h._)([(0,c.Cb)({readOnly:!0})],f.prototype,"minimumVerticesPerFeature",null),(0,h._)([(0,c.Cb)()],f.prototype,"filter",null),(0,h._)([(0,c.Cb)()],f.prototype,"customParameters",null),(0,h._)([(0,c.Cb)({readOnly:!0})],f.prototype,"configuration",null),(0,h._)([(0,c.Cb)()],f.prototype,"tileInfo",null),(0,h._)([(0,c.Cb)()],f.prototype,"tileSize",null),(0,h._)([(0,c.Cb)()],f.prototype,"tilesOfInterest",void 0),(0,h._)([(0,c.Cb)({readOnly:!0})],f.prototype,"updating",null),(0,h._)([(0,c.Cb)({readOnly:!0})],f.prototype,"availability",void 0),f=(0,h._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],f);const ne=2e3,D=6e5,oe=1e6,ae=25,le=1;var H=o(27306),ue=o(61256);class he{constructor(){this._store=new Map,this._byteSize=0}set(t,i){this.delete(t),this._store.set(t,i),this._byteSize+=i.byteSize}delete(t){const i=this._store.get(t);return!!this._store.delete(t)&&(this._byteSize-=i.byteSize,!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,i){for(const[s,r]of this._store){if(this._byteSize<=t)break;this.delete(s),i(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const i=this._store.get(t);i&&(this._store.delete(t),this._store.set(t,i))}}let S=class extends M.Z{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*H.Y8.MEGABYTES,this.tileBounds=new ue.H,this.tiles=new he,this.refCounts=new Map,this.tileFeatureCounts=new Map,this.tmpBoundingRect=(0,E.Ue)()}add(e,t){const i=[];for(const s of t)this._referenceFeature(s.objectId)===T.ADDED&&i.push(s);this._addTileStorage(e,new Set(t.map(({objectId:s})=>s)),function ce(e){return e.reduce((t,i)=>t+function de(e){return 32+function fe(e){if((0,a.Wi)(e))return 0;const t=(0,H.do)(e.lengths,4);return 32+(0,H.do)(e.coords,8)+t}(e.geometry)+(0,H.f2)(e.attributes)}(i),0)}(t)),this.featureStore.addMany(i),this.tiles.applyByteSizeLimit(this.maximumByteSize,s=>this._removeTileStorage(s))}destroy(){this.clear(),this.tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this.tileBounds.clear(),this.tiles.clear(),this.refCounts.clear()}refresh(){this.clear(),this.tileFeatureCounts.clear()}processEdits(e,t,i){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,i)}_addTileStorage(e,t,i){this.tiles.set(e.id,new pe(e,t,i)),this.tileBounds.set(e.id,e.extent),this.tileFeatureCounts.set(e.id,t.size)}_remove({id:e}){const t=this.tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const s of e.objectIds)this._unreferenceFeature(s)===T.REMOVED&&t.push(s);this.featureStore.removeManyById(t);const i=e.data.id;this.tiles.delete(i),this.tileBounds.delete(i)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this.tiles){for(const i of e)t.objectIds.delete(i);this.tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this.refCounts.delete(t)}_processEditsRefetch(e,t,i){var s=this;return(0,d.Z)(function*(){const r=(yield t(e,i)).features,{hasZ:n,hasM:u}=s.featureStore;for(const C of r){const p=(0,P.$)(s.tmpBoundingRect,C.geometry,n,u);(0,a.Wi)(p)||s.tileBounds.forEachInBounds(p,g=>{const v=s.tiles.get(g);s.featureStore.add(C),v.objectIds.has(C.objectId)||(v.objectIds.add(C.objectId),s._referenceFeature(C.objectId),s.tileFeatureCounts.set(v.data.id,v.objectIds.size))})}})()}process(e,t=(()=>!0)){if((0,a.Wi)(this.tileInfo)||!e.extent||(0,a.pC)(this.extent)&&!(0,E.kK)((0,E.oJ)(this.extent,this.tmpBoundingRect),e.extent))return new N(e);if(this.tiles.has(e.id))return new N(e);const i=this._createTileTree(e,this.tileInfo);return this._simplify(i,t,null,0,1),this._collectMissingTiles(e,i,this.tileInfo)}get debugInfo(){return Array.from(this.tiles.values()).map(({data:e})=>({data:e,featureCount:this.tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){var t;return null!=(t=this.tileFeatureCounts.get(e.id))?t:0}fetchCount(e,t,i,s){var r=this;return(0,d.Z)(function*(){const n=r.tileFeatureCounts.get(e.id);if(null!=n)return n;const u=yield(0,x.executeQueryForCount)(t,i,s);return r.tileFeatureCounts.set(e.id,u.data.count),u.data.count})()}_createTileTree(e,t){const i=new B(e.level,e.row,e.col);return t.updateTileInfo(i,O.Z.ExtrapolateOptions.POWER_OF_TWO),this.tileBounds.forEachInBounds(e.extent,s=>{const r=this.tiles.get(s).data;this._tilesAreRelated(e,r)&&this._populateChildren(i,r,t,this.tileFeatureCounts.get(r.id)||0)}),i}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const i=e.level<t.level,s=i?e:t,r=i?t:e,n=1<<r.level-s.level;return Math.floor(r.row/n)===s.row&&Math.floor(r.col/n)===s.col}_populateChildren(e,t,i,s){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,u=t.col>>r,p=u-(e.col<<1)+(n-(e.row<<1)<<1),g=e.children[p];if((0,a.pC)(g))this._populateChildren(g,t,i,s);else{const v=new B(e.level+1,n,u);i.updateTileInfo(v,O.Z.ExtrapolateOptions.POWER_OF_TWO),e.children[p]=v,this._populateChildren(v,t,i,s)}}_simplify(e,t,i,s,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),(0,a.pC)(i)&&(i.children[s]=null),n);const u=r/2,C=u*u;let p=0;for(let g=0;g<e.children.length;g++){const v=e.children[g];p+=(0,a.pC)(v)?this._simplify(v,t,e,g,u):C}return 0===p?this._mergeChildren(e):1-p/n<ye&&(this._purge(e),(0,a.pC)(i)&&(i.children[s]=null),p=n),p}_mergeChildren(e){const t=new Set;let i=0;this._forEachLeaf(e,s=>{const r=this.tiles.get(s.id);if(r){i+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(s)}}),this._addTileStorage(e,t,i),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this.tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const i of e.children)(0,a.Wi)(i)||(i.isLeaf?t(i):this._forEachLeaf(i,t))}_purge(e){if(!(0,a.Wi)(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++)this._purge(e.children[t]),e.children[t]=null}_collectMissingTiles(e,t,i){const s=new ge(i,e,this.extent);return this._collectMissingTilesRecurse(t,s,1),s.info}_collectMissingTilesRecurse(e,t,i){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,i);const s=i/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];(0,a.Wi)(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),s):this._collectMissingTilesRecurse(n,t,s)}}_referenceFeature(e){const t=(this.refCounts.get(e)||0)+1;return this.refCounts.set(e,t),1===t?T.ADDED:T.UNCHANGED}_unreferenceFeature(e){const t=(this.refCounts.get(e)||0)-1;return 0===t?(this.refCounts.delete(e),T.REMOVED):(t>0&&this.refCounts.set(e,t),T.UNCHANGED)}get test(){return{tiles:Array.from(this.tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this.refCounts.keys()).map(e=>`${e}:${this.refCounts.get(e)}`)}}};(0,h._)([(0,c.Cb)({constructOnly:!0})],S.prototype,"featureStore",void 0),(0,h._)([(0,c.Cb)()],S.prototype,"tileInfo",void 0),(0,h._)([(0,c.Cb)()],S.prototype,"extent",void 0),(0,h._)([(0,c.Cb)()],S.prototype,"maximumByteSize",void 0),S=(0,h._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],S);class pe{constructor(t,i,s){this.data=t,this.objectIds=i,this.byteSize=s}}class B{constructor(t,i,s){this.level=t,this.row=i,this.col=s,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&((0,a.pC)(this.children[0])||(0,a.pC)(this.children[1])||(0,a.pC)(this.children[2])||(0,a.pC)(this.children[3]))}}class N{constructor(t,i=[]){this.missingTiles=i,this.fullArea=0,this.coveredArea=0,this.fullArea=(0,E.SO)(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class ge{constructor(t,i,s){this.tileInfo=t,this.extent=null,this.info=new N(i),(0,a.pC)(s)&&(this.extent=(0,E.oJ)(s))}addMissing(t,i,s,r){const n={id:null,level:t,row:i,col:s};this.tileInfo.updateTileInfo(n,O.Z.ExtrapolateOptions.POWER_OF_TWO),(0,a.Wi)(n.extent)||(0,a.pC)(this.extent)&&!(0,E.kK)(this.extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=(0,E.SO)(n.extent))}}const ye=.18751;var T;!function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"}(T||(T={}));let _=class extends L.Z.EventedAccessor{constructor(){super(...arguments),this.isInitializing=!0,this.whenSetup=(0,F.dD)(),this.handles=new Q.Z,this.updatingHandles=new G.t,this.pendingApplyEdits=new Map}get updating(){return this.featureFetcher.updating||this.isInitializing||this.updatingHandles.updating}destroy(){this.featureFetcher.destroy(),this.queryEngine.destroy(),this.featureStore.clear(),this.handles.destroy()}setup(e){var t=this;return(0,d.Z)(function*(){const{geometryType:i,objectIdField:s,timeInfo:r,fields:n}=e.serviceInfo;return t.featureStore=new k.Z(w(U({},e.serviceInfo),{hasZ:!1,hasM:!1})),t.queryEngine=new $.q({spatialReference:e.spatialReference,featureStore:t.featureStore,geometryType:i,fields:n,hasZ:!1,hasM:!1,objectIdField:s,timeInfo:r?Y.Z.fromJSON(r):null}),t.featureFetcher=new f({store:new S({featureStore:t.featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:Z.Z.fromJSON(e.spatialReference),sourceSpatialReference:Z.Z.fromJSON(e.serviceInfo.spatialReference)}),t.handles.add([(0,I.YP)(()=>t.featureFetcher.availability,u=>t.emit("notify-availability",{availability:u}),I.Z_),(0,I.YP)(()=>t.updating,()=>t._notifyUpdating())]),t.whenSetup.resolve(),t.isInitializing=!1,t.configure(e.configuration)})()}configure(e){var t=this;return(0,d.Z)(function*(){return yield t.updatingHandles.addPromise(t.whenSetup.promise),t._updateFeatureFetcherConfiguration(e),{result:{}}})()}fetchCandidates(e,t){var i=this;return(0,d.Z)(function*(){return yield i.whenSetup.promise,(0,F.k_)(t),{result:yield i.queryEngine.executeQueryForSnapping({point:e.point,distance:e.distance,types:e.types,query:(0,a.pC)(e.filter)?e.filter:{where:"1=1"}},(0,a.pC)(t)?t.signal:null)}})()}updateTiles(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),i.featureFetcher.tileSize=e.tileSize,i.featureFetcher.tilesOfInterest=e.tiles,i.featureFetcher.tileInfo=(0,a.pC)(e.tileInfo)?O.Z.fromJSON(e.tileInfo):null,{result:{}}})()}refresh(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),i.featureFetcher.refresh(),{result:{}}})()}whenNotUpdating(e,t){var i=this;return(0,d.Z)(function*(){return yield i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t),yield(0,I.N1)(()=>!i.updating,t),(0,F.k_)(t),{result:{}}})()}getDebugInfo(e,t){var i=this;return(0,d.Z)(function*(){return(0,F.k_)(t),{result:i.featureFetcher.debugInfo}})()}beginApplyEdits(e,t){var i=this;return(0,d.Z)(function*(){i.updatingHandles.addPromise(i.whenSetup.promise),(0,F.k_)(t);const s=(0,F.dD)();return i.pendingApplyEdits.set(e.id,s),i.featureFetcher.applyEdits(s.promise),i.updatingHandles.addPromise(s.promise),{result:{}}})()}endApplyEdits(e,t){var i=this;return(0,d.Z)(function*(){const s=i.pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),(0,F.k_)(t),{result:{}}})()}_updateFeatureFetcherConfiguration(e){this.featureFetcher.filter=(0,a.pC)(e.filter)?A.Z.fromJSON(e.filter):null,this.featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};function Ce(){return new _}(0,h._)([(0,c.Cb)({readOnly:!0})],_.prototype,"updating",null),(0,h._)([(0,c.Cb)()],_.prototype,"isInitializing",void 0),_=(0,h._)([(0,b.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],_)}}]);