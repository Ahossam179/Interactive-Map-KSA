"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[3375],{63375:(L,_,t)=>{t.r(_),t.d(_,{default:()=>r});var s=t(15861),E=t(17626),C=t(88879),P=t(74333),l=t(77712),p=(t(85931),t(8314),t(90912),t(76898)),g=t(37384),R=t(36275),M=t(35627),I=t(45611);const h={remove(){},pause(){},resume(){}};let y=class extends((0,g.y)(I.Z)){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new M.Z({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new R.Z(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.handles.add(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler),"graphicslayerview2d")}detach(){this.container.removeAllChildren(),this.graphicsView.destroy(),this.graphicsView=null,this.handles.remove("graphicslayerview2d")}hitTest(i){var e=this;return(0,s.Z)(function*(){return e.graphicsView?e.graphicsView.hitTest(i).map(o=>({type:"graphic",graphic:o,mapPoint:i,layer:e.layer})):null})()}fetchPopupFeatures(i){var e=this;return(0,s.Z)(function*(){if(e.graphicsView)return e.graphicsView.hitTest(i).filter(o=>!!o.popupTemplate)})()}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let e;return"number"==typeof i?e=[i]:i instanceof C.Z?e=[i.uid]:Array.isArray(i)&&i.length>0?e="number"==typeof i[0]?i:i.map(o=>o&&o.uid):P.Z.isCollection(i)&&i.length>0&&(e=i.map(o=>o&&o.uid).toArray()),e=null==e?void 0:e.filter(o=>null!=o),e.length?(this._addHighlight(e),{remove:()=>this._removeHighlight(e)}):h}_addHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const o=this._highlightIds.get(e);this._highlightIds.set(e,o+1)}else this._highlightIds.set(e,1);this._updateHighlight()}_removeHighlight(i){for(const e of i)if(this._highlightIds.has(e)){const o=this._highlightIds.get(e)-1;0===o?this._highlightIds.delete(e):this._highlightIds.set(e,o)}this._updateHighlight()}_updateHighlight(){var i;null==(i=this.graphicsView)||i.setHighlight(Array.from(this._highlightIds.keys()))}};(0,E._)([(0,l.Cb)()],y.prototype,"graphicsView",void 0),y=(0,E._)([(0,p.j)("esri.views.2d.layers.GraphicsLayerView2D")],y);const r=y},37384:(L,_,t)=>{t.d(_,{y:()=>x});var s=t(17626),E=t(74333),C=t(89726),P=t(26584),l=t(32917),a=t(77712),g=(t(85931),t(8314),t(90912),t(76898)),R=t(1011),M=t(86810);t(63290),t(82255);let y=class extends M.wq{};y=(0,s._)([(0,g.j)("esri.views.layers.support.ClipArea")],y);const r=y;var i;let e=i=class extends r{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new i({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],e.prototype,"left",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],e.prototype,"right",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],e.prototype,"top",void 0),(0,s._)([(0,a.Cb)({type:[Number,String],json:{write:!0}})],e.prototype,"bottom",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],e.prototype,"version",null),e=i=(0,s._)([(0,g.j)("esri.views.layers.support.ClipRect")],e);const o=e;t(29132);var A,S=t(21674),W=t(91179),B=t(2004),V=t(37118);const K={base:S.Z,key:"type",typeMap:{extent:B.Z,polygon:V.Z}};let m=A=class extends r{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new A({geometry:this.geometry.clone()})}};(0,s._)([(0,a.Cb)({types:K,json:{read:W.im,write:!0}})],m.prototype,"geometry",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],m.prototype,"version",null),m=A=(0,s._)([(0,g.j)("esri.views.layers.support.Geometry")],m);const Z=m;let O=class extends r{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,a.Cb)({type:[[[Number]]],json:{write:!0}})],O.prototype,"path",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],O.prototype,"version",null),O=(0,s._)([(0,g.j)("esri.views.layers.support.Path")],O);const j=E.Z.ofType({key:"type",base:r,typeMap:{rect:o,path:O,geometry:Z}}),x=G=>{let d=class extends G{constructor(){super(...arguments),this.attached=!1,this.clips=new j,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var v,f,T,b;const n=null==(f=null==(v=this.view)?void 0:v.spatialReferenceLocked)||f;(null==(T=this.view)?void 0:T.spatialReference)&&n&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new P.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new R.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,l.YP)(()=>this.suspended,c=>{this.container&&(this.container.visible=!c),this.view&&!c&&this.updateRequested&&this.view.requestUpdate()},l.tX),(0,l.YP)(()=>{var c,w;return null!=(w=null==(c=this.layer)?void 0:c.opacity)?w:1},c=>{this.container&&(this.container.opacity=c)},l.tX),(0,l.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",c=>{this.container&&(this.container.blendMode=c)},l.tX),(0,l.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,c=>{this.container&&(this.container.effect=c)},l.tX),(0,l.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(b=this.view)&&b.whenLayerView?this.view.whenLayerView(this.layer).then(c=>{c===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var u;const n=null==(u=this.view)?void 0:u.spatialReference;return null==n||this.supportsSpatialReference(n)}get updating(){var n;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(n=this.updatingHandles)||!n.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(n){const u=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!u)return!0;const{minScale:v,maxScale:f}=u;return(0===v||n<=v)&&(0===f||n>=f)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(n){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",n),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(n))):this.updateRequested=!1}hitTest(n,u){return Promise.resolve(null)}supportsSpatialReference(n){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const n=super.getSuspendInfo(),u=!this.spatialReferenceSupported,v=this.visibleAtCurrentScale;return u&&(n.spatialReferenceNotSupported=u),v&&(n.outsideScaleRange=v),n}};return(0,s._)([(0,a.Cb)()],d.prototype,"attached",void 0),(0,s._)([(0,a.Cb)({type:j,set(n){const u=(0,C.Z)(n,this._get("clips"),j);this._set("clips",u)}})],d.prototype,"clips",void 0),(0,s._)([(0,a.Cb)()],d.prototype,"container",void 0),(0,s._)([(0,a.Cb)()],d.prototype,"moving",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],d.prototype,"spatialReferenceSupported",null),(0,s._)([(0,a.Cb)({readOnly:!0})],d.prototype,"updateParameters",void 0),(0,s._)([(0,a.Cb)()],d.prototype,"updateRequested",void 0),(0,s._)([(0,a.Cb)()],d.prototype,"updating",null),(0,s._)([(0,a.Cb)()],d.prototype,"view",void 0),(0,s._)([(0,a.Cb)({readOnly:!0})],d.prototype,"visibleAtCurrentScale",null),d=(0,s._)([(0,g.j)("esri.views.2d.layers.LayerView2D")],d),d}},45611:(L,_,t)=>{t.d(_,{Z:()=>y});var s=t(17626),E=t(14517),C=t(61885),P=t(80542),l=t(61996),a=t(63290),D=t(62208),U=t(60330),p=t(77712),I=(t(85931),t(8314),t(90912),t(76898));let h=class extends((0,P.p)((0,l.IG)((0,U.v)(C.Z.EventedMixin(E.Z))))){constructor(r){super(r),this.layer=null,this.parent=null}initialize(){this.when().catch(r=>{if("layerview:create-error"!==r.name){const i=this.layer&&this.layer.id||"no id",e=this.layer&&this.layer.title||"no title";a.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${e}', id: '${i}')`,r)}})}get fullOpacity(){return(0,D.Pt)(this.get("layer.opacity"),1)*(0,D.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var r;return!this.suspended&&!0===(null==(r=this.layer)?void 0:r.legendEnabled)}get updating(){var r;return!!(null!=(r=this.updatingHandles)&&r.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var r;return!0===(null==(r=this.layer)?void 0:r.visible)}set visible(r){void 0!==r?this._override("visible",r):this._clearOverride("visible")}canResume(){var r,i,e;return this.visible&&(null==(r=this.layer)?void 0:r.loaded)&&!(null!=(i=this.parent)&&i.suspended)&&(null==(e=this.view)?void 0:e.ready)||!1}getSuspendInfo(){const r=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(r.viewNotReady=!0),this.layer&&this.layer.loaded||(r.layerNotLoaded=!0),this.visible||(r.layerInvisible=!0),r}isUpdating(){return!1}};(0,s._)([(0,p.Cb)()],h.prototype,"fullOpacity",null),(0,s._)([(0,p.Cb)()],h.prototype,"layer",void 0),(0,s._)([(0,p.Cb)()],h.prototype,"parent",void 0),(0,s._)([(0,p.Cb)({readOnly:!0})],h.prototype,"suspended",null),(0,s._)([(0,p.Cb)({readOnly:!0})],h.prototype,"suspendInfo",null),(0,s._)([(0,p.Cb)({readOnly:!0})],h.prototype,"legendEnabled",null),(0,s._)([(0,p.Cb)({type:Boolean,readOnly:!0})],h.prototype,"updating",null),(0,s._)([(0,p.Cb)({readOnly:!0})],h.prototype,"updatingProgress",null),(0,s._)([(0,p.Cb)()],h.prototype,"visible",null),(0,s._)([(0,p.Cb)()],h.prototype,"view",void 0),h=(0,s._)([(0,I.j)("esri.views.layers.LayerView")],h);const y=h}}]);