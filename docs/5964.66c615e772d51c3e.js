"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[5964],{25964:(j,h,s)=>{s.r(h),s.d(h,{default:()=>f});var _=s(17626),d=s(46882),E=s(47877),O=s(62208),M=s(99959),n=s(32917),l=s(77712),p=(s(85931),s(8314),s(52323)),c=(s(90912),s(76898)),P=s(99433),b=s(44917),L=s(552),C=s(49286),D=s(6647),u=s(99555),T=s(38953),R=s(6432),A=s(6119),I=s(32584);let t=class extends((0,L.h)((0,u.M)((0,C.q)((0,D.I)((0,A.Q)((0,R.K)((0,M.R)(b.Z)))))))){constructor(i){super(i),this._visibilityHandles={},this.allLayers=new d.Z({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,T.a)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group"}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.own((0,n.YP)(()=>this.visible,this._onVisibilityChange.bind(this),n.Z_))}_writeLayers(i,e,a,r){const o=[];if(!i)return o;i.forEach(v=>{const y=(0,I.Nw)(v,r.webmap?r.webmap.getLayerJSONFromResourceInfo(v):null,r);(0,O.pC)(y)&&y.layerType&&o.push(y)}),e.layers=o}set portalItem(i){this._set("portalItem",i)}set visibilityMode(i){const e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)}load(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),Promise.resolve(this)}loadAll(){return(0,E.G)(this,i=>{i(this.layers,this.tables)})}layerAdded(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=(0,n.YP)(()=>i.visible,e=>this._onChildVisibilityChange(i,e),n.Z_)}layerRemoved(i){const e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(i){this.layers.forEach(e=>{e!==i&&(e.visible=!1)})}_enforceVisibility(i,e){if(!(0,p.vw)(this).initialized)return;const a=this.layers;let r=a.find(o=>o.visible);switch(i){case"exclusive":a.length&&!r&&(r=a.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":a.forEach(o=>{o.visible=e})}}_onVisibilityChange(i){"inherited"===this.visibilityMode&&this.layers.forEach(e=>{e.visible=i})}_onChildVisibilityChange(i,e){switch(this.visibilityMode){case"exclusive":e?this._turnOffOtherLayers(i):this._isAnyLayerVisible()||(i.visible=!0);break;case"inherited":i.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some(i=>i.visible)}};(0,_._)([(0,l.Cb)({readOnly:!0,dependsOn:[]})],t.prototype,"allLayers",void 0),(0,_._)([(0,l.Cb)({readOnly:!0})],t.prototype,"allTables",void 0),(0,_._)([(0,l.Cb)()],t.prototype,"fullExtent",void 0),(0,_._)([(0,l.Cb)({json:{read:!1,write:{ignoreOrigin:!0}}})],t.prototype,"layers",void 0),(0,_._)([(0,P.c)("layers")],t.prototype,"_writeLayers",null),(0,_._)([(0,l.Cb)({type:["GroupLayer"]})],t.prototype,"operationalLayerType",void 0),(0,_._)([(0,l.Cb)({json:{origins:{"web-document":{read:!1,write:!1}}}})],t.prototype,"portalItem",null),(0,_._)([(0,l.Cb)()],t.prototype,"spatialReference",void 0),(0,_._)([(0,l.Cb)({json:{read:!1},readOnly:!0,value:"group"})],t.prototype,"type",void 0),(0,_._)([(0,l.Cb)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{read:!1,write:!1}}}})],t.prototype,"visibilityMode",null),t=(0,_._)([(0,c.j)("esri.layers.GroupLayer")],t);const f=t}}]);