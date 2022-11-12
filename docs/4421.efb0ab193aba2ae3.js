"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[4421],{4421:(le,A,p)=>{p.r(A),p.d(A,{default:()=>se});var U=p(15861),l=p(17626),W=p(14517),E=p(79608),X=p(61996),L=p(86810),a=p(62208),u=p(77712),m=(p(85931),p(8314),p(90912),p(76898));let Y=0,g=class extends((0,L.eC)((0,E.J)((0,X.IG)(W.Z)))){constructor(i){super(i),this.id=`${Date.now().toString(16)}-analysis-${Y++}`,this.title=null}get parent(){return this._get("parent")}set parent(i){const s=this.parent;if((0,a.pC)(s))switch(s.type){case"line-of-sight":s.removeAnalysis(this);break;case"2d":case"3d":s.analyses.includes(this)&&s.analyses.remove(this)}this._set("parent",i)}get isEditable(){return this.requiredPropertiesForEditing.every(a.pC)}};(0,l._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],g.prototype,"id",void 0),(0,l._)([(0,u.Cb)({type:String})],g.prototype,"title",void 0),(0,l._)([(0,u.Cb)({constructOnly:!0})],g.prototype,"type",void 0),(0,l._)([(0,u.Cb)({clonable:!1,value:null})],g.prototype,"parent",null),(0,l._)([(0,u.Cb)({readOnly:!0})],g.prototype,"extent",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],g.prototype,"isEditable",null),(0,l._)([(0,u.Cb)({readOnly:!0})],g.prototype,"requiredPropertiesForEditing",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],g.prototype,"nonEditableMessage",void 0),g=(0,l._)([(0,m.j)("esri.analysis.Analysis")],g);const D=g;function z(i,s){return F(i)===F(s)}function F(i){if((0,a.Wi)(i))return null;let r=null;return r=null!=i.objectId?i.objectId:null!=i.layer&&"objectIdField"in i.layer&&null!=i.layer.objectIdField&&null!=i.attributes?i.attributes[i.layer.objectIdField]:i.uid,null==r?null:`o-${null!=i.layer?i.layer.id:""}-${r}`}const w={json:{write:{writer:function K(i,s){var r;(0,a.Wi)(i)||null==(null==(r=i.layer)?void 0:r.objectIdField)||null==i.attributes||(s.feature={layerId:i.layer.id,objectId:i.attributes[i.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function Q(i){if(null!=i.layerId&&null!=i.objectId)return{uid:null,layer:{id:i.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:i.objectId}}}}}}};var x=p(40405),T=p(49672),B=p(82706);let I=class extends((0,L.eC)((0,E.J)(W.Z))){constructor(i){super(i),this.position=null,this.elevationInfo=null,this.feature=null}equals(i){return(0,a._W)(this.position,i.position)&&(0,a._W)(this.elevationInfo,i.elevationInfo)&&z(this.feature,i.feature)}};(0,l._)([(0,u.Cb)({type:T.Z}),(0,x.B)()],I.prototype,"position",void 0),(0,l._)([(0,u.Cb)({type:B.ZP}),(0,x.B)()],I.prototype,"elevationInfo",void 0),(0,l._)([(0,u.Cb)(w)],I.prototype,"feature",void 0),I=(0,l._)([(0,m.j)("esri.analysis.LineOfSightAnalysisObserver")],I);const N=I;let O=class extends((0,L.eC)(E.j)){constructor(i){super(i),this.position=null,this.elevationInfo=null,this.feature=null}equals(i){return(0,a._W)(this.position,i.position)&&(0,a._W)(this.elevationInfo,i.elevationInfo)&&z(this.feature,i.feature)}};(0,l._)([(0,u.Cb)({type:T.Z}),(0,x.B)()],O.prototype,"position",void 0),(0,l._)([(0,u.Cb)({type:B.ZP}),(0,x.B)()],O.prototype,"elevationInfo",void 0),(0,l._)([(0,u.Cb)(w)],O.prototype,"feature",void 0),O=(0,l._)([(0,m.j)("esri.analysis.LineOfSightAnalysisTarget")],O);const M=O;var J=p(74333),$=p(89726),j=p(32917),V=p(54614),S=p(5548);p(29505);const R=J.Z.ofType(M);let b=class extends D{constructor(i){super(i),this.type="line-of-sight",this.observer=null,this.extent=null,this.nonEditableMessage="Assign an observer location to the analysis to allow editing."}initialize(){this.own((0,j.YP)(()=>this._computeExtent(),i=>{((0,a.Wi)(i)||(0,a.Wi)(i.pending))&&this._set("extent",(0,a.pC)(i)?i.extent:null)},j.tX))}get targets(){return this._get("targets")||new R}set targets(i){this._set("targets",(0,$.Z)(i,this.targets,R))}get spatialReference(){return(0,a.pC)(this.observer)&&(0,a.pC)(this.observer.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[(0,a.yw)(this.observer,i=>i.position)]}waitComputeExtent(){var i=this;return(0,U.Z)(function*(){const s=i._computeExtent();return(0,a.pC)(s)?(0,a.Wg)(s.pending):null})()}_computeExtent(){const i=this.spatialReference;if((0,a.Wi)(this.observer)||(0,a.Wi)(this.observer.position)||(0,a.Wi)(i))return null;const s=f=>"absolute-height"===function Z(i,s){return function q(i,s){return(0,a.Wi)(s)||!s.mode?i?"absolute-height":"on-the-ground":s.mode}(!!(0,a.pC)(i)&&i.hasZ,s)}(f.position,f.elevationInfo),r=this.observer.position,y=(0,S.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const f of this.targets)if((0,a.pC)(f.position)){const v=(0,V.dz)(f.position,i);if((0,a.pC)(v.pending))return{pending:v.pending,extent:null};if((0,a.pC)(v.geometry)){const{x:c,y:C,z:re}=v.geometry;(0,S.pp)(y,[c,C,re])}}const d=(0,S.HH)(y,i);return s(this.observer)&&this.targets.every(s)||(d.zmin=null,d.zmax=null),{pending:null,extent:d}}clear(){this.observer=null,this.targets.removeAll()}};(0,l._)([(0,u.Cb)({type:["line-of-sight"]})],b.prototype,"type",void 0),(0,l._)([(0,u.Cb)({type:N,json:{read:!0,write:!0}})],b.prototype,"observer",void 0),(0,l._)([(0,u.Cb)({cast:$.R,type:R,nonNullable:!0,json:{read:!0,write:!0}})],b.prototype,"targets",null),(0,l._)([(0,u.Cb)({value:null,readOnly:!0})],b.prototype,"extent",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],b.prototype,"spatialReference",null),(0,l._)([(0,u.Cb)({readOnly:!0})],b.prototype,"requiredPropertiesForEditing",null),(0,l._)([(0,u.Cb)({readOnly:!0})],b.prototype,"nonEditableMessage",void 0),b=(0,l._)([(0,m.j)("esri.analysis.LineOfSightAnalysis")],b);const H=b;var te=p(99959),ne=p(44917),ie=p(49286);const oe=J.Z.ofType(M);let h=class extends((0,ie.q)((0,te.R)(ne.Z))){constructor(i){super(i),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new H,this.opacity=1}initialize(){this.own((0,j.YP)(()=>this.analysis,(i,s)=>{(0,a.pC)(s)&&s.parent===this&&(s.parent=null),(0,a.pC)(i)&&(i.parent=this)},j.tX))}load(){var i=this;return(0,U.Z)(function*(){return(0,a.pC)(i.analysis)&&i.addResolvingPromise(i.analysis.waitComputeExtent()),i})()}get observer(){return(0,a.yw)(this.analysis,i=>i.observer)}set observer(i){(0,a.yw)(this.analysis,s=>s.observer=i)}get targets(){return(0,a.pC)(this.analysis)?this.analysis.targets:null}set targets(i){(0,a.yw)(this.analysis,s=>s.targets=i)}get fullExtent(){return(0,a.pC)(this.analysis)?this.analysis.extent:null}get spatialReference(){return(0,a.pC)(this.analysis)?this.analysis.spatialReference:null}removeAnalysis(i){this.analysis===i&&(this.analysis=new H)}};(0,l._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],h.prototype,"type",void 0),(0,l._)([(0,u.Cb)({type:["LineOfSightLayer"]})],h.prototype,"operationalLayerType",void 0),(0,l._)([(0,u.Cb)({type:N,json:{read:!0,write:{ignoreOrigin:!0}}})],h.prototype,"observer",null),(0,l._)([(0,u.Cb)({type:oe,json:{read:!0,write:{ignoreOrigin:!0}}})],h.prototype,"targets",null),(0,l._)([(0,u.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],h.prototype,"analysis",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],h.prototype,"fullExtent",null),(0,l._)([(0,u.Cb)({readOnly:!0})],h.prototype,"spatialReference",null),(0,l._)([(0,u.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],h.prototype,"opacity",void 0),(0,l._)([(0,u.Cb)({type:["show","hide"]})],h.prototype,"listMode",void 0),h=(0,l._)([(0,m.j)("esri.layers.LineOfSightLayer")],h);const se=h}}]);