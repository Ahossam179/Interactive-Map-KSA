"use strict";var lt=Object.defineProperty,at=Object.defineProperties,dt=Object.getOwnPropertyDescriptors,me=Object.getOwnPropertySymbols,yt=Object.prototype.hasOwnProperty,pt=Object.prototype.propertyIsEnumerable,Se=(h,y,s)=>y in h?lt(h,y,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[y]=s,Ce=(h,y)=>{for(var s in y||(y={}))yt.call(y,s)&&Se(h,s,y[s]);if(me)for(var s of me(y))pt.call(y,s)&&Se(h,s,y[s]);return h},Fe=(h,y)=>at(h,dt(y));(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[9319],{19319:(h,y,s)=>{s.r(y),s.d(y,{default:()=>nt});var C=s(15861),t=s(17626),F=s(74333),Be=s(46882),A=s(26584),v=s(58817),ee=s(47877),D=s(63290),u=s(62208),te=s(99959),Ie=s(10699),je=s(21726),i=s(77712),xe=s(90912),x=s(68653),d=s(76898),re=s(65234),Oe=s(44917),Le=s(73281),Te=(s(4832),s(49067),s(96794),s(69747),s(40425),s(69357),s(40342),s(14726),s(33474),s(32088)),ie=s(84792),we=s(2076),se=s(47996),oe=s(60330),ne=(s(85931),s(8314),s(55342)),Ae=s(2004),le=s(32258),Re=s(61996),B=s(13812);let c=class extends((0,Re.IG)(te.w)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.visible=!0,this.opacity=1}readTitle(e,r){return"string"==typeof r.alias?r.alias:"string"==typeof r.name?r.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:void 0}};(0,t._)([(0,i.Cb)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],c.prototype,"title",void 0),(0,t._)([(0,x.r)("service","title",["alias","name"])],c.prototype,"readTitle",null),(0,t._)([(0,i.Cb)()],c.prototype,"layer",void 0),(0,t._)([(0,i.Cb)({type:xe.z8,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],c.prototype,"id",void 0),(0,t._)([(0,x.r)("service","id")],c.prototype,"readIdOnlyOnce",null),(0,t._)([(0,i.Cb)((0,B.Lx)(String))],c.prototype,"modelName",void 0),(0,t._)([(0,i.Cb)((0,B.Lx)(Boolean))],c.prototype,"isEmpty",void 0),(0,t._)([(0,i.Cb)({type:Boolean,json:{name:"visibility",write:!0}})],c.prototype,"visible",void 0),(0,t._)([(0,i.Cb)({type:Number,json:{write:!0}})],c.prototype,"opacity",void 0),c=(0,t._)([(0,d.j)("esri.layers.buildingSublayers.BuildingSublayer")],c);const ae=c;var Ee=s(59787),Ze=s(55911),Me=s(60466),Pe=s(60595),R=s(35031),Ne=s(84952),Ue=s(49430),De=s(82706);const Qe=D.Z.getLogger("esri.layers.buildingSublayers.BuildingComponentSublayer"),de=(0,Ze.v)();let n=class extends(se.Z.LoadableMixin((0,oe.v)(ae))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.fields=null,this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl.path}/sublayers/${this.id}`,query:this.layer.parsedUrl.query}:null}get fieldsIndex(){return new Me.Z(this.fields)}readAssociatedLayer(e,r){const o=this.layer.associatedFeatureServiceItem,l=r.associatedLayerID;return(0,u.pC)(o)&&"number"==typeof l?new le.default({portalItem:o,layerId:l}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}get apiKey(){return this.layer.apiKey}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const r=(0,u.pC)(e)?e.signal:null,o=this._fetchService(r).then(()=>{this.indexInfo=(0,Pe.T)(this.parsedUrl.path,this.rootNode,this.nodePages,this.apiKey,Qe,r)});return this.addResolvingPromise(o),Promise.resolve(this)}createPopupTemplate(e){return(0,Ue.eZ)(this,e)}_fetchService(e){var r=this;return(0,C.Z)(function*(){const o=(yield(0,ie.default)(r.parsedUrl.path,{query:{f:"json",token:r.apiKey},responseType:"json",signal:e})).data;r.read(o,{origin:"service",url:r.parsedUrl})})()}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){var l,p,S,be;const o=null==(p=null==(l=this.getFeatureType(null==r?void 0:r.feature))?void 0:l.domains)?void 0:p[e];return o&&"inherited"!==o.type?o:null!=(be=null==(S=this.getField(e))?void 0:S.domain)?be:null}getFeatureType(e){return e&&(0,u.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,u.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=(0,u.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:Ee.C,{query:r,data:{supportsZ:o,supportsM:l,isVersioned:p}}=e;return{query:r,data:{supportsZ:o,supportsM:l,isVersioned:p}}}createQuery(){const e=new Ne.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryExtent(e||this.createQuery(),r))}queryFeatureCount(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatureCount(e||this.createQuery(),r))}queryFeatures(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryFeatures(e||this.createQuery(),r)).then(o=>{if(null!=o&&o.features)for(const l of o.features)l.layer=this.layer,l.sourceLayer=this;return o})}queryObjectIds(e,r){return this._getAssociatedLayerForQuery().then(o=>o.queryObjectIds(e||this.createQuery(),r))}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:(0,u.pC)(this.associatedLayer)}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,u.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,C.Z)(function*(){if(yield e.load(),(0,u.Wi)(e.associatedLayer))throw new A.Z("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(r){throw new A.Z("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:e,error:r})}return e.associatedLayer})()}};(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"parsedUrl",null),(0,t._)([(0,i.Cb)({type:R.U4,readOnly:!0})],n.prototype,"nodePages",void 0),(0,t._)([(0,i.Cb)({type:[R.QI],readOnly:!0})],n.prototype,"materialDefinitions",void 0),(0,t._)([(0,i.Cb)({type:[R.Yh],readOnly:!0})],n.prototype,"textureSetDefinitions",void 0),(0,t._)([(0,i.Cb)({type:[R.H3],readOnly:!0})],n.prototype,"geometryDefinitions",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"serviceUpdateTimeStamp",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"store",void 0),(0,t._)([(0,i.Cb)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],n.prototype,"rootNode",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"attributeStorageInfo",void 0),(0,t._)([(0,i.Cb)(de.fields)],n.prototype,"fields",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"fieldsIndex",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:le.default})],n.prototype,"associatedLayer",void 0),(0,t._)([(0,x.r)("service","associatedLayer",["associatedLayerID"])],n.prototype,"readAssociatedLayer",null),(0,t._)([(0,i.Cb)(de.outFields)],n.prototype,"outFields",void 0),(0,t._)([(0,i.Cb)({type:String,readOnly:!0})],n.prototype,"objectIdField",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:String,json:{read:!1}})],n.prototype,"displayField",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:String})],n.prototype,"apiKey",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:Ae.Z})],n.prototype,"fullExtent",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:re.Z})],n.prototype,"spatialReference",null),(0,t._)([(0,i.Cb)({readOnly:!0})],n.prototype,"version",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:De.ZP})],n.prototype,"elevationInfo",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:Number})],n.prototype,"minScale",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:Number})],n.prototype,"maxScale",null),(0,t._)([(0,i.Cb)({readOnly:!0,type:Number})],n.prototype,"effectiveScaleRange",null),(0,t._)([(0,i.Cb)({type:["hide","show"],json:{write:!0}})],n.prototype,"listMode",void 0),(0,t._)([(0,i.Cb)({types:Te.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],n.prototype,"renderer",void 0),(0,t._)([(0,i.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],n.prototype,"definitionExpression",void 0),(0,t._)([(0,i.Cb)(B.C_)],n.prototype,"popupEnabled",void 0),(0,t._)([(0,i.Cb)({type:Le.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],n.prototype,"popupTemplate",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],n.prototype,"normalReferenceFrame",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],n.prototype,"defaultPopupTemplate",null),(0,t._)([(0,i.Cb)()],n.prototype,"types",null),(0,t._)([(0,i.Cb)()],n.prototype,"typeIdField",null),(0,t._)([(0,i.Cb)({json:{write:!1}}),(0,ne.J)(new we.X({"3DObject":"3d-object",Point:"point"}))],n.prototype,"layerType",void 0),(0,t._)([(0,i.Cb)()],n.prototype,"geometryType",null),(0,t._)([(0,i.Cb)()],n.prototype,"profile",null),(0,t._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],n.prototype,"capabilities",null),n=(0,t._)([(0,d.j)("esri.layers.buildingSublayers.BuildingComponentSublayer")],n);const Q=n;var V,Ve=s(14889);const ye={type:F.Z,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:pe}}},read:!1}};function pe(e,r,o){if(e&&Array.isArray(e))return new F.Z(e.map(l=>{const p=function Ke(e){return"group"===e.layerType?f:Q}(l);if(p){const S=new p;return S.read(l,o),S}o&&o.messages&&l&&o.messages.push(new Ve.Z("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(l.type||"unknown")+"' are not supported",{definition:l,context:o}))}))}let f=V=class extends ae{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return(0,ee.w)(this,e=>V.forEachSublayer(this.sublayers,r=>{"building-group"!==r.type&&e(r)}))}};var e;(0,t._)([(0,i.Cb)({type:["hide","show","hide-children"],json:{write:!0}})],f.prototype,"listMode",void 0),(0,t._)([(0,i.Cb)(ye)],f.prototype,"sublayers",void 0),f=V=(0,t._)([(0,d.j)("esri.layers.buildingSublayers.BuildingGroupSublayer")],f),(e=f||(f={})).sublayersProperty=ye,e.readSublayers=pe,e.forEachSublayer=function r(o,l){o.forEach(p=>{l(p),"building-group"===p.type&&r(p.sublayers,l)})};const I=f;var Je=s(50085),Ge=s(65088),We=s(49286),He=s(6647),Xe=s(99555),K=s(10157),b=s(86810),ze=s(35948);let E=class extends b.wq{constructor(){super(...arguments),this.type=null}};(0,t._)([(0,i.Cb)({type:String,readOnly:!0,json:{write:!0}})],E.prototype,"type",void 0),E=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterAuthoringInfo")],E);const ue=E;var J;let O=J=class extends b.wq{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new J({filterType:this.filterType,filterValues:(0,v.d9)(this.filterValues)})}};var G;(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],O.prototype,"filterType",void 0),(0,t._)([(0,i.Cb)({type:[String],json:{write:!0}})],O.prototype,"filterValues",void 0),O=J=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterAuthoringInfoType")],O);const $e=F.Z.ofType(O);let Z=G=class extends b.wq{clone(){return new G({filterTypes:(0,v.d9)(this.filterTypes)})}};var W;(0,t._)([(0,i.Cb)({type:$e,json:{write:!0}})],Z.prototype,"filterTypes",void 0),Z=G=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Z);const ke=F.Z.ofType(Z);let L=W=class extends ue{constructor(){super(...arguments),this.type="checkbox"}clone(){return new W({filterBlocks:(0,v.d9)(this.filterBlocks)})}};(0,t._)([(0,i.Cb)({type:["checkbox"]})],L.prototype,"type",void 0),(0,t._)([(0,i.Cb)({type:ke,json:{write:!0}})],L.prototype,"filterBlocks",void 0),L=W=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],L);const ce=L;let M=class extends b.wq{};(0,t._)([(0,i.Cb)({readOnly:!0,json:{read:!1}})],M.prototype,"type",void 0),M=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterMode")],M);const P=M;var H;let N=H=class extends P{constructor(){super(...arguments),this.type="solid"}clone(){return new H}};(0,t._)([(0,i.Cb)({type:["solid"],readOnly:!0,json:{write:!0}})],N.prototype,"type",void 0),N=H=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterModeSolid")],N);const X=N;var z,_e=s(89441);let T=z=class extends P{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new z({edges:(0,v.d9)(this.edges)})}};(0,t._)([(0,ne.J)({wireFrame:"wire-frame"})],T.prototype,"type",void 0),(0,t._)([(0,i.Cb)(_e.Z)],T.prototype,"edges",void 0),T=z=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterModeWireFrame")],T);const he=T;var Y;let U=Y=class extends P{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Y}};(0,t._)([(0,i.Cb)({type:["x-ray"],readOnly:!0,json:{write:!0}})],U.prototype,"type",void 0),U=Y=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterModeXRay")],U);const ge=U;var $;const et={nonNullable:!0,types:{key:"type",base:P,typeMap:{solid:X,"wire-frame":he,"x-ray":ge}},json:{read:e=>{switch(e&&e.type){case"solid":return X.fromJSON(e);case"wireFrame":return he.fromJSON(e);case"x-ray":return ge.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let j=$=class extends b.wq{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new X,this.title=""}clone(){return new $({filterExpression:this.filterExpression,filterMode:(0,v.d9)(this.filterMode),title:this.title})}};var q;(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"filterExpression",void 0),(0,t._)([(0,i.Cb)(et)],j.prototype,"filterMode",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],j.prototype,"title",void 0),j=$=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilterBlock")],j);const rt=F.Z.ofType(j);let m=q=class extends b.wq{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,ze.D)(),this.name=null}clone(){return new q({description:this.description,filterBlocks:(0,v.d9)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,v.d9)(this.filterAuthoringInfo)})}};(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],m.prototype,"description",void 0),(0,t._)([(0,i.Cb)({type:rt,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterBlocks",void 0),(0,t._)([(0,i.Cb)({types:{key:"type",base:ue,typeMap:{checkbox:ce}},json:{read:e=>"checkbox"===(e&&e.type)?ce.fromJSON(e):null,write:!0}})],m.prototype,"filterAuthoringInfo",void 0),(0,t._)([(0,i.Cb)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"id",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"name",void 0),m=q=(0,t._)([(0,d.j)("esri.layers.support.BuildingFilter")],m);const it=m,st=D.Z.getLogger("esri.layers.support.BuildingSummaryStatistics");let g=class extends b.wq{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,t._)([(0,i.Cb)({type:String})],g.prototype,"fieldName",void 0),(0,t._)([(0,i.Cb)({type:String})],g.prototype,"modelName",void 0),(0,t._)([(0,i.Cb)({type:String})],g.prototype,"label",void 0),(0,t._)([(0,i.Cb)({type:Number})],g.prototype,"min",void 0),(0,t._)([(0,i.Cb)({type:Number})],g.prototype,"max",void 0),(0,t._)([(0,i.Cb)({json:{read:e=>Array.isArray(e)&&(e.every(r=>"string"==typeof r)||e.every(r=>"number"==typeof r))?e.slice():null}})],g.prototype,"mostFrequentValues",void 0),(0,t._)([(0,i.Cb)({type:[Number]})],g.prototype,"subLayerIds",void 0),g=(0,t._)([(0,d.j)("esri.layers.support.BuildingFieldStatistics")],g);let w=class extends(se.Z.LoadableMixin((0,oe.v)(b.wq))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(st.error("building summary statistics are not loaded"),null)}load(e){const r=(0,u.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}_fetchService(e){var r=this;return(0,C.Z)(function*(){const o=(yield(0,ie.default)(r.url,{query:{f:"json"},responseType:"json",signal:e})).data;r.read(o,{origin:"service"})})()}};(0,t._)([(0,i.Cb)({constructOnly:!0,type:String})],w.prototype,"url",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,type:[g],json:{read:{source:"summary"}}})],w.prototype,"fields",null),w=(0,t._)([(0,d.j)("esri.layers.support.BuildingSummaryStatistics")],w);const ve=w;var ot=s(74711);const k=D.Z.getLogger("esri.layers.BuildingSceneLayer"),fe=F.Z.ofType(it),_=(0,v.d9)(I.sublayersProperty);_.json.origins["web-scene"]={type:[Q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},_.json.origins["portal-item"]={type:[Q],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}};let a=class extends((0,K.Vt)((0,Ge.Y)((0,We.q)((0,He.I)((0,Xe.M)((0,te.R)((0,Je.V)(Oe.Z)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new Be.Z({getCollections:()=>[this.sublayers],getChildrenFunction:r=>"building-group"===r.type?r.sublayers:null}),this.sublayers=null,this.sublayerOverrides=null,this.filters=new fe,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const l=I.readSublayers(e,r,o);return I.forEachSublayer(l,p=>p.layer=this),this.sublayerOverrides&&(this.applySublayerOverrides(l,this.sublayerOverrides),this.sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:o}){I.forEachSublayer(e,l=>l.read(r.get(l.id),o))}readSublayerOverrides(e,r){const o=new Map;for(const l of e)null!=l&&"object"==typeof l&&"number"==typeof l.id?o.set(l.id,l):r.messages.push(new A.Z("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:l}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const l=[];I.forEachSublayer(this.sublayers,p=>{const S=p.write({},o);Object.keys(S).length>1&&l.push(S)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push((0,v.d9)(o))})}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this.sublayerOverrides&&this.writeUnappliedOverrides(this.sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&("web-scene"===r.origin||"portal-item"===r.origin)&&null!=e&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this.sublayerOverrides=o}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef){const o=(0,je.v_)(this.parsedUrl.path,r.statisticsHRef);return new ve({url:o})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=(0,u.pC)(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(Ie.r9).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return(0,ee.G)(this,e=>{I.forEachSublayer(this.sublayers,r=>{"building-group"!==r.type&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}saveAs(e,r){var o=this;return(0,C.Z)(function*(){return o._debouncedSaveOperations(K.xp.SAVE_AS,Fe(Ce({},r),{getTypeKeywords:()=>o._getTypeKeywords(),portalItemLayerType:"building-scene"}),e)})()}save(){var e=this;return(0,C.Z)(function*(){const r={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"building-scene"};return e._debouncedSaveOperations(K.xp.SAVE,r)})()}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new A.Z("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}_validateElevationInfo(){const e=this.elevationInfo;e&&("absolute-height"!==e.mode&&k.warn(".elevationInfo=","Building scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&k.warn(".elevationInfo=","Building scene layers do not support featureExpressionInfo"))}_fetchAssociatedFeatureService(e){var r=this;return(0,C.Z)(function*(){const o=new ot.W(r.parsedUrl,r.portalItem,r.apiKey,e);try{r.associatedFeatureServiceItem=yield o.fetchPortalItem()}catch(l){k.warn("Associated feature service item could not be loaded",l)}})()}};(0,t._)([(0,i.Cb)({type:["BuildingSceneLayer"]})],a.prototype,"operationalLayerType",void 0),(0,t._)([(0,i.Cb)({readOnly:!0})],a.prototype,"allSublayers",void 0),(0,t._)([(0,i.Cb)(_)],a.prototype,"sublayers",void 0),(0,t._)([(0,x.r)("service","sublayers")],a.prototype,"readSublayers",null),(0,t._)([(0,i.Cb)({type:fe,nonNullable:!0,json:{write:!0}})],a.prototype,"filters",void 0),(0,t._)([(0,i.Cb)({type:String,json:{write:!0}})],a.prototype,"activeFilterId",void 0),(0,t._)([(0,i.Cb)({readOnly:!0,type:ve})],a.prototype,"summaryStatistics",void 0),(0,t._)([(0,x.r)("summaryStatistics",["statisticsHRef"])],a.prototype,"readSummaryStatistics",null),(0,t._)([(0,i.Cb)({type:[String],json:{read:!1}})],a.prototype,"outFields",void 0),(0,t._)([(0,i.Cb)(B.vg)],a.prototype,"fullExtent",void 0),(0,t._)([(0,i.Cb)({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),(0,t._)([(0,i.Cb)((0,B.Lx)(re.Z))],a.prototype,"spatialReference",void 0),(0,t._)([(0,i.Cb)(B.PV)],a.prototype,"elevationInfo",null),(0,t._)([(0,i.Cb)({json:{read:!1},readOnly:!0})],a.prototype,"type",void 0),(0,t._)([(0,i.Cb)()],a.prototype,"associatedFeatureServiceItem",void 0),a=(0,t._)([(0,d.j)("esri.layers.BuildingSceneLayer")],a);const nt=a}}]);