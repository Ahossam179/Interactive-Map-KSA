"use strict";var M=Object.defineProperty,O=Object.defineProperties,W=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,U=(n,r,i)=>r in n?M(n,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[r]=i,Z=(n,r)=>{for(var i in r||(r={}))X.call(r,i)&&U(n,i,r[i]);if(S)for(var i of S(r))$.call(r,i)&&U(n,i,r[i]);return n},C=(n,r)=>O(n,W(r));(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[5391],{55391:(n,r,i)=>{i.r(r),i.d(r,{default:()=>H});var f=i(15861),d=i(17626),F=i(63290),m=i(10699),L=i(32917),I=i(77712),V=(i(85931),i(8314),i(90912),i(76898)),R=i(37053),P=i(91082),x=i(37384),g=i(88893),D=i(9598),w=i(58098),z=i(8480),E=i(79527),A=i(45611),G=i(94421),Q=i(26584),j=i(62208),B=i(22264);const K=e=>{let t=class extends e{fetchPopupFeatures(l,v){var h=this;return(0,f.Z)(function*(){const{layer:u}=h;if(!l)throw new Q.Z("tilelayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:u});if("tile"!==u.type)throw new Q.Z("tilelayerview:fetchPopupFeatures","Layer type should be 'tile'",{type:u.type});const c=h.get("view.scale"),y=u.allSublayers.toArray().filter(s=>s.popupTemplate&&s.popupEnabled&&s.visible&&(0===s.minScale||c<=s.minScale)&&(0===s.maxScale||c>=s.maxScale));return(0,m.as)(y.map(function(){var s=(0,f.Z)(function*(a){const o=a.createQuery(),T=(0,j.pC)(v)?v.event:null,J=(0,B.k)({renderer:a.renderer,event:T});return o.geometry=h.createFetchPopupFeaturesQueryGeometry(l,J),o.outFields=yield a.popupTemplate.getRequiredFields(),(yield a.queryFeatures(o)).features});return function(a){return s.apply(this,arguments)}}())).then(s=>[].concat(...s.map(a=>a.value).filter(Boolean)))})()}};return(0,d._)([(0,I.Cb)()],t.prototype,"layer",void 0),t=(0,d._)([(0,V.j)("esri.layers.mixins.TileLayerView")],t),t};var Y=i(94672);const N=[0,0];let p=class extends(K((0,G.Z)((0,P.Y)((0,x.y)(A.Z))))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume()}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null;this._tileInfoView=new D.Z(this.layer.tileInfo,this.layer.fullExtent),this._fetchQueue=new z.Z({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(t,l)=>this.fetchTile(t,l)}),this._tileStrategy=new E.Z({cachePolicy:"keep",resampling:this.resampling,acquireTile:t=>this.acquireTile(t),releaseTile:t=>this.releaseTile(t),tileInfoView:this._tileInfoView}),this.requestUpdate(),this.handles.add((0,L.YP)(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){var t;return(0,R.fS)(null==(t=this.layer.tileInfo)?void 0:t.spatialReference,e)}createFetchPopupFeaturesQueryGeometry(e,t){return(0,Y.K)(e,t,this.view)}doRefresh(){var e=this;return(0,f.Z)(function*(){e.updateRequested||e.suspended||(e._fetchQueue.reset(),e._tileStrategy.tiles.forEach(t=>e._enqueueTileFetch(t)))})()}isUpdating(){var e,t;return null!=(t=null==(e=this._fetchQueue)?void 0:e.updating)&&t}acquireTile(e){const t=this._bitmapView.createTile(e),l=t.bitmap;return[l.x,l.y]=this._tileInfoView.getTileCoords(N,t.key),l.resolution=this._tileInfoView.getTileResolution(t.key),[l.width,l.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(t),this._bitmapView.addChild(t),this.requestUpdate(),t}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",()=>e.destroy()),this.requestUpdate()}fetchTile(e,t={}){var l=this;return(0,f.Z)(function*(){const v="tilemapCache"in l.layer?l.layer.tilemapCache:null,{signal:h,resamplingLevel:u=0}=t;if(!v)try{return yield l._fetchImage(e,h)}catch(s){if(!(0,m.D_)(s)&&!l.resampling)return(0,g.V)(l._tileInfoView.tileInfo.size);if(u<3){const a=l._tileInfoView.getTileParentId(e.id);if(a){const o=new w.Z(a),T=yield l.fetchTile(o,C(Z({},t),{resamplingLevel:u+1}));return(0,g.i)(l._tileInfoView,T,o,e)}}throw s}const c=new w.Z(0,0,0,0);let y;try{if(yield v.fetchAvailabilityUpsample(e.level,e.row,e.col,c,{signal:h}),c.level!==e.level&&!l.resampling)return(0,g.V)(l._tileInfoView.tileInfo.size);y=yield l._fetchImage(c,h)}catch(s){if((0,m.D_)(s))throw s;y=yield l._fetchImage(e,h)}return l.resampling?(0,g.i)(l._tileInfoView,y,c,e):y})()}_enqueueTileFetch(e){var t=this;return(0,f.Z)(function*(){if(!t._fetchQueue.has(e.key.id)){try{const l=yield t._fetchQueue.push(e.key);e.bitmap.source=l,e.bitmap.width=t._tileInfoView.tileInfo.size[0],e.bitmap.height=t._tileInfoView.tileInfo.size[1],e.once("attach",()=>t.requestUpdate())}catch(l){(0,m.D_)(l)||F.Z.getLogger(t.declaredClass).error(l)}t.requestUpdate()}})()}_fetchImage(e,t){var l=this;return(0,f.Z)(function*(){return l.layer.fetchTile(e.level,e.row,e.col,{signal:t})})()}};(0,d._)([(0,I.Cb)()],p.prototype,"_fetchQueue",void 0),(0,d._)([(0,I.Cb)()],p.prototype,"resampling",null),p=(0,d._)([(0,V.j)("esri.views.2d.layers.TileLayerView2D")],p);const H=p}}]);