"use strict";var H=Object.defineProperty,d=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable,m=(a,_,e)=>_ in a?H(a,_,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[_]=e,D=(a,_)=>{for(var e in _||(_={}))J.call(_,e)&&m(a,e,_[e]);if(d)for(var e of d(_))N.call(_,e)&&m(a,e,_[e]);return a};(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[6306],{96306:(a,_,e)=>{e.r(_),e.d(_,{default:()=>z});var p=e(15861),s=e(17626),O=e(59318),v=e(84792),C=(e(65787),e(62208)),h=e(99959),u=e(10699),S=e(21726),l=e(77712),c=(e(85931),e(8314),e(90912),e(68653)),L=e(76898),R=e(2004),j=e(37053),T=e(44917),f=e(552),g=e(49286),I=e(6647),U=e(30346),A=e(99555),E=e(13812),P=e(10012),B=e(52068),W=e(13546),K=e(57213),b=e(88493);const x=["atom","xml"],G={base:P.Z,key:"type",typeMap:{"simple-line":B.Z},errorContext:"symbol"},Z={base:P.Z,key:"type",typeMap:{"picture-marker":W.Z,"simple-marker":K.Z},errorContext:"symbol"},F={base:P.Z,key:"type",typeMap:{"simple-fill":b.Z},errorContext:"symbol"};let o=class extends((0,f.h)((0,U.Q)((0,g.q)((0,I.I)((0,A.M)((0,h.R)(T.Z))))))){constructor(...t){super(...t),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(t,r){return"string"==typeof t?D({url:t},r):t}readFeatureCollections(t,r){return r.featureCollection.layers.forEach(i=>{var y;const n=i.layerDefinition.drawingInfo.renderer.symbol;n&&"esriSFS"===n.type&&(null==(y=n.outline)?void 0:y.style.includes("esriSFS"))&&(n.outline.style="esriSLSSolid")}),r.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){const t=this._get("title");return t&&"defaults"!==this.originOf("title")?t:this.url?(0,S.vt)(this.url,x)||"GeoRSS":t||""}set title(t){this._set("title",t)}load(t){const r=(0,C.pC)(t)?t.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},t).catch(u.r9).then(()=>this._fetchService(r)).then(i=>{this.read(i,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){var t=this;return(0,p.Z)(function*(){const r=yield t._fetchService();return t.read(r,{origin:"service",ignoreDefaults:!0}),!0})()}_fetchService(t){var r=this;return(0,p.Z)(function*(){var y;const i=r.spatialReference,{data:n}=yield(0,v.default)(O.Z.geoRSSServiceUrl,{query:{url:r.url,refresh:!!r.loaded||void 0,outSR:(0,j.oR)(i)?void 0:null!=(y=i.wkid)?y:JSON.stringify(i)},signal:t});return n})()}_hasGeometry(t){var r,i;return null!=(i=null==(r=this.featureCollections)?void 0:r.some(n=>{var y,M;return(null==(y=n.featureSet)?void 0:y.geometryType)===t&&(null==(M=n.featureSet.features)?void 0:M.length)>0}))&&i}};(0,s._)([(0,l.Cb)()],o.prototype,"description",void 0),(0,s._)([(0,l.Cb)()],o.prototype,"featureCollections",void 0),(0,s._)([(0,c.r)("service","featureCollections",["featureCollection.layers"])],o.prototype,"readFeatureCollections",null),(0,s._)([(0,l.Cb)({type:R.Z,json:{name:"lookAtExtent"}})],o.prototype,"fullExtent",void 0),(0,s._)([(0,l.Cb)(E.id)],o.prototype,"id",void 0),(0,s._)([(0,l.Cb)(E.rn)],o.prototype,"legendEnabled",void 0),(0,s._)([(0,l.Cb)({types:G,json:{write:!0}})],o.prototype,"lineSymbol",void 0),(0,s._)([(0,l.Cb)({type:["show","hide"]})],o.prototype,"listMode",void 0),(0,s._)([(0,l.Cb)({types:Z,json:{write:!0}})],o.prototype,"pointSymbol",void 0),(0,s._)([(0,l.Cb)({types:F,json:{write:!0}})],o.prototype,"polygonSymbol",void 0),(0,s._)([(0,l.Cb)({type:["GeoRSS"]})],o.prototype,"operationalLayerType",void 0),(0,s._)([(0,l.Cb)(E.HQ)],o.prototype,"url",void 0),(0,s._)([(0,l.Cb)({json:{origins:{service:{read:{source:"name",reader:t=>t||void 0}}}}})],o.prototype,"title",null),(0,s._)([(0,l.Cb)({readOnly:!0,json:{read:!1},value:"geo-rss"})],o.prototype,"type",void 0),o=(0,s._)([(0,L.j)("esri.layers.GeoRSSLayer")],o);const z=o}}]);