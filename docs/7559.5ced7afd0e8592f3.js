"use strict";var Pe=Object.defineProperty,we=Object.defineProperties,Ze=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,$=(h,y,s)=>y in h?Pe(h,y,{enumerable:!0,configurable:!0,writable:!0,value:s}):h[y]=s,C=(h,y)=>{for(var s in y||(y={}))Ae.call(y,s)&&$(h,s,y[s]);if(H)for(var s of H(y))De.call(y,s)&&$(h,s,y[s]);return h},j=(h,y)=>we(h,Ze(y));(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[7559],{27559:(h,y,s)=>{s.r(y),s.d(y,{default:()=>je});var f=s(15861),i=s(17626),z=s(73281),B=(s(4832),s(49067),s(96794),s(69747),s(40425),s(69357),s(40342),s(14726),s(33474),s(32088)),U=s(84792),O=s(74333),u=s(26584),X=s(63290),p=s(62208),q=s(99959),N=s(10699),R=s(32917),k=s(21726),n=s(77712),_=(s(85931),s(8314),s(52323)),g=(s(90912),s(68653)),L=s(76898),Q=s(31283),ee=s(44917),te=s(50085),re=s(65088),se=s(49286),ie=s(6647),oe=s(99555),E=s(10157),ne=s(59787),b=s(13812),ae=s(83989),le=s(47058),de=s(74711),pe=s(55911),ye=s(60466),G=s(36630),S=s(35031),ue=s(170),V=s(62667),ce=s(2430),T=s(86810);let v=class extends T.wq{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};(0,i._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],v.prototype,"name",void 0),(0,i._)([(0,n.Cb)({type:String,json:{read:!0,write:!0}})],v.prototype,"field",void 0),(0,i._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],v.prototype,"currentRangeExtent",void 0),(0,i._)([(0,n.Cb)({type:[Number],json:{read:!0,write:!0}})],v.prototype,"fullRangeExtent",void 0),(0,i._)([(0,n.Cb)({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=(0,i._)([(0,L.j)("esri.layers.support.RangeInfo")],v);var F,he=s(72392),fe=s(58817),ve=s(40405),W=s(14889),x=(s(82255),s(37118)),J=s(54614);let P=F=class extends((0,T.eC)(O.Z.ofType(x.Z))){constructor(e){super(e)}clone(){return new F(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=null==(r=null==e?void 0:e.layer)?void 0:r.spatialReference;return t?this.toArray().map(a=>{if(!t.equals(a.spatialReference)){if(!(0,J.Up)(a.spatialReference,t))return e&&e.messages&&e.messages.push(new W.Z("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const d=new x.Z;(0,J.Wt)(a,d,t),a=d}const l=a.toJSON(e);return delete l.spatialReference,l}).filter(a=>null!=a):(null!=e&&e.messages&&e.messages.push(new W.Z("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(a=>a.toJSON(e)))}static fromJSON(e,t){const r=new F;return e.forEach(a=>r.add(x.Z.fromJSON(a,t))),r}};P=F=(0,i._)([(0,L.j)("esri.layers.support.PolygonCollection")],P);const w=P;var Z,ge=s(29840);let m=Z=class extends T.wq{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new w,this._geometriesSource=null,this._handles=new he.Z}initialize(){this._handles.add((0,R.on)(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,R.Z_))}destroy(){this._handles.destroy()}readGeometries(e,t,r){this._geometriesSource={url:(0,ge.f)(e,r),context:r}}loadGeometries(e,t){var r=this;return(0,f.Z)(function*(){if((0,p.Wi)(r._geometriesSource))return;const{url:a,context:l}=r._geometriesSource,d=yield(0,U.default)(a,{responseType:"json",signal:(0,p.U2)(t,"signal")}),c=e.toJSON(),A=d.data.map(D=>j(C({},D),{spatialReference:c}));r.geometries=w.fromJSON(A,l),r._geometriesSource=null})()}clone(){return new Z({geometries:(0,fe.d9)(this.geometries),spatialRelationship:this.spatialRelationship})}};(0,i._)([(0,n.Cb)({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],m.prototype,"spatialRelationship",void 0),(0,i._)([(0,n.Cb)({type:w,nonNullable:!0,json:{write:!0}}),(0,ve.B)({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],m.prototype,"geometries",void 0),(0,i._)([(0,g.r)(["web-scene","portal-item"],"geometries")],m.prototype,"readGeometries",null),m=Z=(0,i._)([(0,L.j)("esri.layers.support.SceneFilter")],m);const me=m;var Ie=s(39683),be=s(84952),Se=s(49430),Ce=s(92236);const Le=["3DObject","Point"],I=X.Z.getLogger("esri.layers.SceneLayer"),M=(0,pe.v)();let o=class extends((0,E.Vt)((0,re.Y)((0,se.q)((0,ie.I)((0,oe.M)((0,q.R)((0,te.V)(ee.Z)))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new O.Z,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?C({url:e},t):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a,l,d,c;const r=null==(l=null==(a=this.getFeatureType(null==t?void 0:t.feature))?void 0:a.domains)?void 0:l[e];return r&&"inherited"!==r.type?r:null!=(c=null==(d=this.getField(e))?void 0:d.domain)?c:null}getFeatureType(e){return e&&(0,p.pC)(this.associatedLayer)?this.associatedLayer.getFeatureType(e):null}get types(){return(0,p.pC)(this.associatedLayer)?this.associatedLayer.types:[]}get typeIdField(){return(0,p.pC)(this.associatedLayer)?this.associatedLayer.typeIdField:null}get formTemplate(){return(0,p.pC)(this.associatedLayer)?this.associatedLayer.formTemplate:null}get fieldsIndex(){return new ye.Z(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:S.U4.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Fe[this.profile]||"mesh"}set renderer(e){(0,G.YN)(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=(0,p.pC)(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:ne.C,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:a,supportsUploadWithItemId:l,supportsReturnServiceEditsInSourceSpatialReference:d},data:{supportsZ:c,supportsM:A,isVersioned:D,supportsAttachment:Oe},operations:{supportsEditing:Re,supportsUpdate:Ee,supportsQuery:Te,supportsQueryAttachments:xe}}=e,Y=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:d,supportsRollbackOnFailure:a,supportsGeometryUpdate:!1,supportsUploadWithItemId:l},data:{supportsAttachment:Oe,supportsZ:c,supportsM:A,isVersioned:D},operations:{supportsQuery:Te,supportsQueryAttachments:xe,supportsEditing:Re&&Y,supportsAdd:!1,supportsDelete:!1,supportsUpdate:Ee&&Y}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){null!=e?this._override("editingEnabled",e):this._clearOverride("editingEnabled")}get defaultPopupTemplate(){return(0,p.pC)(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>("esriFieldTypeOID"===r.type&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>("esriFieldTypeGlobalID"===r.type&&(e=r.name),!!e)),e||void 0}get displayField(){return(0,p.pC)(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const r=t.store.profile;return null!=r&&K[r]?K[r]:(I.error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=(0,p.pC)(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(N.r9).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),(0,p.pC)(this.filter)?this.filter.loadGeometries(this.spatialReference):null])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>(0,Ie.y)(this,{origin:"service"},t)).then(()=>(0,G.YN)(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}beforeSave(){var e=this;return(0,f.Z)(function*(){(0,p.pC)(e.filter)&&(yield e.load())})()}createQuery(){const e=new be.Z;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(null!=r&&r.features)for(const a of r.features)a.layer=this,a.sourceLayer=this;return r})}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(I.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return(0,Se.eZ)(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return(0,p.pC)(e)&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}_loadAssociatedLayerForQuery(){var e=this;return(0,f.Z)(function*(){if(yield e.load(),(0,p.Wi)(e.associatedLayer))throw new u.Z("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:e});try{yield e.associatedLayer.load()}catch(t){throw new u.Z("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:e,error:t})}return e.associatedLayer})()}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some(t=>t.name===e)}queryCachedStatistics(e,t){var r=this;return(0,f.Z)(function*(){if(yield r.load(t),!r.statisticsInfo)throw new u.Z("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const a=r.fieldsIndex.get(e);if(!a)throw new u.Z("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const l of r.statisticsInfo)if(l.name===a.name){const d=(0,k.v_)(r.parsedUrl.path,l.href);return(0,U.default)(d,{query:{f:"json",token:r.apiKey},responseType:"json",signal:t?t.signal:null}).then(c=>c.data)}throw new u.Z("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")})()}saveAs(e,t){var r=this;return(0,f.Z)(function*(){return r._debouncedSaveOperations(E.xp.SAVE_AS,j(C({},t),{getTypeKeywords:()=>r._getTypeKeywords(),portalItemLayerType:"scene"}),e)})()}save(){var e=this;return(0,f.Z)(function*(){const t={getTypeKeywords:()=>e._getTypeKeywords(),portalItemLayerType:"scene"};return e._debouncedSaveOperations(E.xp.SAVE,t)})()}applyEdits(e,t){var r=this;return(0,f.Z)(function*(){const a=yield s.e(1913).then(s.bind(s,81913));if(yield r.load(),(0,p.Wi)(r.associatedLayer))throw new u.Z(`${r.type}-layer:not-editable`,"Service is not editable");return yield r.associatedLayer.load(),a.applyEdits(r,r.associatedLayer.source,e,t)})()}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!Le.includes(e.layerType))throw new u.Z("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new u.Z("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new u.Z("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function t(r,a){let l=!1,d=!1;if(null==r)l=!0,d=!0;else{const c=a&&a.isGeographic;switch(r){case"east-north-up":case"earth-centered":l=!0,d=c;break;case"vertex-reference-frame":l=!0,d=!c;break;default:l=!1}}if(!l)throw new u.Z("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!d)throw new u.Z("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new u.Z("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(l=>l.name===e.name)),r=!!((0,p.pC)(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some(l=>l&&e.name===l.name));this._fieldUsageInfo[e.name]={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r}}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if((0,p.Wi)(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if((0,p.Wi)(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=(0,_.vw)(this);for(let r=0;r<e.length;r++){const a=e[r],l=this.originIdOf(a),d=this.associatedLayer.originIdOf(a);l<d&&(d===Q.s3.SERVICE||d===Q.s3.PORTAL_ITEM)&&t.setAtOrigin(a,this.associatedLayer[a],d)}}_setAssociatedFeatureLayer(e){var t=this;return(0,f.Z)(function*(){if(!["mesh-pyramids","points"].includes(t.profile))return;const r=new de.W(t.parsedUrl,t.portalItem,t.apiKey,e);try{t.associatedLayer=yield r.fetch()}catch(a){(0,N.D_)(a)||t._logWarningOnPopupEnabled()}})()}_logWarningOnPopupEnabled(){var e=this;return(0,f.Z)(function*(){yield(0,R.N1)(()=>e.popupEnabled&&null!=e.popupTemplate);const t=`this SceneLayer: ${e.title}`;null==e.attributeStorageInfo?I.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${t}`):I.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${t}`)})()}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"relative-to-scene"===e.mode&&I.warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&I.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};(0,i._)([(0,n.Cb)({types:{key:"type",base:ae.B,typeMap:{selection:le.Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],o.prototype,"featureReduction",void 0),(0,i._)([(0,n.Cb)({type:[v],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],o.prototype,"rangeInfos",void 0),(0,i._)([(0,n.Cb)({json:{read:!1}})],o.prototype,"associatedLayer",void 0),(0,i._)([(0,n.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,i._)([(0,n.Cb)({type:["ArcGISSceneServiceLayer"]})],o.prototype,"operationalLayerType",void 0),(0,i._)([(0,n.Cb)({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),(0,i._)([(0,n.Cb)(j(C({},M.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],o.prototype,"fields",void 0),(0,i._)([(0,n.Cb)()],o.prototype,"types",null),(0,i._)([(0,n.Cb)()],o.prototype,"typeIdField",null),(0,i._)([(0,n.Cb)()],o.prototype,"formTemplate",null),(0,i._)([(0,n.Cb)({readOnly:!0})],o.prototype,"fieldsIndex",null),(0,i._)([(0,n.Cb)({type:ce.Z,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],o.prototype,"floorInfo",void 0),(0,i._)([(0,n.Cb)(M.outFields)],o.prototype,"outFields",void 0),(0,i._)([(0,n.Cb)({type:S.U4,readOnly:!0,json:{read:!1}})],o.prototype,"nodePages",void 0),(0,i._)([(0,g.r)("service","nodePages",["nodePages","pointNodePages"])],o.prototype,"readNodePages",null),(0,i._)([(0,n.Cb)({type:[S.QI],readOnly:!0})],o.prototype,"materialDefinitions",void 0),(0,i._)([(0,n.Cb)({type:[S.Yh],readOnly:!0})],o.prototype,"textureSetDefinitions",void 0),(0,i._)([(0,n.Cb)({type:[S.H3],readOnly:!0})],o.prototype,"geometryDefinitions",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],o.prototype,"serviceUpdateTimeStamp",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),(0,i._)([(0,n.Cb)({readOnly:!0})],o.prototype,"statisticsInfo",void 0),(0,i._)([(0,n.Cb)({type:O.Z.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],o.prototype,"excludeObjectIds",void 0),(0,i._)([(0,n.Cb)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),(0,i._)([(0,n.Cb)({type:me,json:{name:"layerDefinition.polygonFilter",write:!0}})],o.prototype,"filter",void 0),(0,i._)([(0,n.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),(0,i._)([(0,n.Cb)(b.PV)],o.prototype,"elevationInfo",null),(0,i._)([(0,n.Cb)({type:String})],o.prototype,"geometryType",null),(0,i._)([(0,n.Cb)(b.iR)],o.prototype,"labelsVisible",void 0),(0,i._)([(0,n.Cb)({type:[ue.Z],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:V.r},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:V.r},write:!0}})],o.prototype,"labelingInfo",void 0),(0,i._)([(0,n.Cb)(b.rn)],o.prototype,"legendEnabled",void 0),(0,i._)([(0,n.Cb)({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var a,l;if("number"==typeof e&&e>=0&&e<=1)return e;const r=null==(l=null==(a=t.layerDefinition)?void 0:a.drawingInfo)?void 0:l.transparency;return void 0!==r?(0,Ce.b)(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],o.prototype,"opacity",void 0),(0,i._)([(0,n.Cb)({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"priority",void 0),(0,i._)([(0,n.Cb)({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],o.prototype,"semantic",void 0),(0,i._)([(0,n.Cb)({types:B.o,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],o.prototype,"renderer",null),(0,i._)([(0,n.Cb)({json:{read:!1}})],o.prototype,"cachedDrawingInfo",void 0),(0,i._)([(0,g.r)("service","cachedDrawingInfo")],o.prototype,"readCachedDrawingInfo",null),(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],o.prototype,"capabilities",null),(0,i._)([(0,n.Cb)({type:Boolean,json:{read:!1}})],o.prototype,"editingEnabled",null),(0,i._)([(0,n.Cb)(b.C_)],o.prototype,"popupEnabled",void 0),(0,i._)([(0,n.Cb)({type:z.Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),(0,i._)([(0,n.Cb)({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),(0,i._)([(0,n.Cb)({type:String,json:{read:!1}})],o.prototype,"objectIdField",void 0),(0,i._)([(0,g.r)("service","objectIdField",["objectIdField","fields"])],o.prototype,"readObjectIdField",null),(0,i._)([(0,n.Cb)({type:String,json:{read:!1}})],o.prototype,"globalIdField",void 0),(0,i._)([(0,g.r)("service","globalIdField",["globalIdField","fields"])],o.prototype,"readGlobalIdField",null),(0,i._)([(0,n.Cb)({readOnly:!0,type:String,json:{read:!1}})],o.prototype,"displayField",null),(0,i._)([(0,n.Cb)({type:String,json:{read:!1}})],o.prototype,"profile",void 0),(0,i._)([(0,g.r)("service","profile",["store.profile"])],o.prototype,"readProfile",null),(0,i._)([(0,n.Cb)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],o.prototype,"normalReferenceFrame",void 0),(0,i._)([(0,n.Cb)(b.YI)],o.prototype,"screenSizePerspectiveEnabled",void 0),o=(0,i._)([(0,L.j)("esri.layers.SceneLayer")],o);const K={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Fe={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},je=o}}]);