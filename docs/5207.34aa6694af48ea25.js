"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[5207],{90301:(w,P,t)=>{t.d(P,{eY:()=>A});var s=t(62208),p=t(30217),O=t(49966),g=t(9545),h=t(57477),l=t(14403),M=t(67969),B=t(55086);function D(d,a,e){const y={target:M.No.TEXTURE_2D,pixelFormat:M.VI.RGBA,internalFormat:M.VI.RGBA,dataType:M.Br.UNSIGNED_BYTE,wrapMode:M.e8.CLAMP_TO_EDGE};return a&&e&&(y.width=a,y.height=e),new B.x(d,y)}class A extends h.s{constructor(a=null,e,y=!0){super(),this.requestRenderOnSourceChangedEnabled=y,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=e,this.source=a,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(a){this._height=a}get source(){return this._source}set source(a){this._source=a,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(a){this._width=a}beforeRender(a){super.beforeRender(a),this.updateTexture(a.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,O.c)()}}setTransform(a){const e=(0,p.b)(this.transforms.dvs),[y,m]=a.toScreenNoRotation([0,0],[this.x,this.y]),V=this.resolution/this.pixelRatio/a.resolution,K=V*this.width,W=V*this.height,G=Math.PI*this.rotation/180;(0,p.c)(e,e,(0,g.f)(y,m)),(0,p.c)(e,e,(0,g.f)(K/2,W/2)),(0,p.r)(e,e,-G),(0,p.c)(e,e,(0,g.f)(-K/2,-W/2)),(0,p.j)(e,e,(0,g.f)(K,W)),(0,p.m)(this.transforms.dvs,a.displayViewMat3,e)}setSamplingProfile(a){this._texture&&(a.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(a.samplingMode))}bind(a,e){this._texture&&a.bindTexture(this._texture,e)}updateTexture(a){var y;if(!this.stage)return null==(y=this._texture)||y.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this._texture=this.source?D(a,this.sourceWidth,this.sourceHeight):D(a));const e=this.source;if(e){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function x(d){return d&&"render"in d}(e))if(e instanceof l.Z){const m=e.getRenderedRasterPixels();this._texture.setData((0,s.pC)(m)?m.renderedRasterPixels:null)}else this._texture.setData(function U(d){const a=document.createElement("canvas");return a.width=d.width,a.height=d.height,d.render(a.getContext("2d")),a}(e));else(function C(d){return d&&!("render"in d)})(e)&&this._texture.setData(e);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},91757:(w,P,t)=>{t.d(P,{c:()=>g});var s=t(51434),p=t(39406),O=t(44589);class g extends O.Z{get requiresDedicatedFBO(){return this.children.some(l=>"additive"===l.blendFunction)}prepareRenderPasses(l){const M=l.registerRenderPass({name:"bitmap",brushes:[s.U.bitmap],target:()=>this.children,drawPhase:p.jx.MAP});return[...super.prepareRenderPasses(l),M]}}},14403:(w,P,t)=>{t.d(P,{Z:()=>p});var s=t(62208);class p{constructor(g,h,l){this.pixelBlock=g,this.extent=h,this.originalPixelBlock=l}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(g){const h=this.pixelBlock;if((0,s.Wi)(h))return;const l=this.filter({pixelBlock:h});if((0,s.Wi)(l.pixelBlock))return;const M=l.pixelBlock.getAsRGBA(),B=g.createImageData(l.pixelBlock.width,l.pixelBlock.height);B.data.set(M),g.putImageData(B,0,0)}getRenderedRasterPixels(){const g=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(g.pixelBlock)?null:{width:g.pixelBlock.width,height:g.pixelBlock.height,renderedRasterPixels:new Uint8Array(g.pixelBlock.getAsRGBA().buffer)}}}},37384:(w,P,t)=>{t.d(P,{y:()=>_});var s=t(17626),p=t(74333),O=t(89726),g=t(26584),h=t(32917),l=t(77712),C=(t(85931),t(8314),t(90912),t(76898)),U=t(1011),D=t(86810);t(63290),t(82255);let a=class extends D.wq{};a=(0,s._)([(0,C.j)("esri.views.layers.support.ClipArea")],a);const e=a;var y;let m=y=class extends e{constructor(){super(...arguments),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"left",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"right",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"top",void 0),(0,s._)([(0,l.Cb)({type:[Number,String],json:{write:!0}})],m.prototype,"bottom",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"version",null),m=y=(0,s._)([(0,C.j)("esri.views.layers.support.ClipRect")],m);const V=m;t(29132);var Z,W=t(21674),G=t(91179),S=t(2004),b=t(37118);const j={base:W.Z,key:"type",typeMap:{extent:S.Z,polygon:b.Z}};let f=Z=class extends e{constructor(){super(...arguments),this.type="geometry",this.geometry=null}get version(){return(this._get("version")||0)+1}clone(){return new Z({geometry:this.geometry.clone()})}};(0,s._)([(0,l.Cb)({types:j,json:{read:G.im,write:!0}})],f.prototype,"geometry",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],f.prototype,"version",null),f=Z=(0,s._)([(0,C.j)("esri.views.layers.support.Geometry")],f);const Y=f;let n=class extends e{constructor(){super(...arguments),this.type="path",this.path=[]}get version(){return(this._get("version")||0)+1}};(0,s._)([(0,l.Cb)({type:[[[Number]]],json:{write:!0}})],n.prototype,"path",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],n.prototype,"version",null),n=(0,s._)([(0,C.j)("esri.views.layers.support.Path")],n);const E=p.Z.ofType({key:"type",base:e,typeMap:{rect:V,path:n,geometry:Y}}),_=v=>{let r=class extends v{constructor(){super(...arguments),this.attached=!1,this.clips=new E,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1}initialize(){var c,T,N,L;const o=null==(T=null==(c=this.view)?void 0:c.spatialReferenceLocked)||T;(null==(N=this.view)?void 0:N.spatialReference)&&o&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new g.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new U.W),this.container.fadeTransitionEnabled=!0,this.container.opacity=0,this.container.clips=this.clips,this.handles.add([(0,h.YP)(()=>this.suspended,R=>{this.container&&(this.container.visible=!R),this.view&&!R&&this.updateRequested&&this.view.requestUpdate()},h.tX),(0,h.YP)(()=>{var R,F;return null!=(F=null==(R=this.layer)?void 0:R.opacity)?F:1},R=>{this.container&&(this.container.opacity=R)},h.tX),(0,h.YP)(()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal",R=>{this.container&&(this.container.blendMode=R)},h.tX),(0,h.YP)(()=>this.layer&&"effect"in this.layer?this.layer.effect:null,R=>{this.container&&(this.container.effect=R)},h.tX),(0,h.on)(()=>this.clips,"change",()=>{this.container&&(this.container.clips=this.clips)})]),null!=(L=this.view)&&L.whenLayerView?this.view.whenLayerView(this.layer).then(R=>{R===this&&this.processAttach()},()=>{}):this.when().then(()=>{this.processAttach()},()=>{}))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var u;const o=null==(u=this.view)?void 0:u.spatialReference;return null==o||this.supportsSpatialReference(o)}get updating(){var o;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null==(o=this.updatingHandles)||!o.updating))}get visibleAtCurrentScale(){return this.isVisibleAtScale(this.view.scale)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(o){const u=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!u)return!0;const{minScale:c,maxScale:T}=u;return(0===c||o<=c)&&(0===T||o>=T)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(o){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",o),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(o))):this.updateRequested=!1}hitTest(o,u){return Promise.resolve(null)}supportsSpatialReference(o){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const o=super.getSuspendInfo(),u=!this.spatialReferenceSupported,c=this.visibleAtCurrentScale;return u&&(o.spatialReferenceNotSupported=u),c&&(o.outsideScaleRange=c),o}};return(0,s._)([(0,l.Cb)()],r.prototype,"attached",void 0),(0,s._)([(0,l.Cb)({type:E,set(o){const u=(0,O.Z)(o,this._get("clips"),E);this._set("clips",u)}})],r.prototype,"clips",void 0),(0,s._)([(0,l.Cb)()],r.prototype,"container",void 0),(0,s._)([(0,l.Cb)()],r.prototype,"moving",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],r.prototype,"spatialReferenceSupported",null),(0,s._)([(0,l.Cb)({readOnly:!0})],r.prototype,"updateParameters",void 0),(0,s._)([(0,l.Cb)()],r.prototype,"updateRequested",void 0),(0,s._)([(0,l.Cb)()],r.prototype,"updating",null),(0,s._)([(0,l.Cb)()],r.prototype,"view",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],r.prototype,"visibleAtCurrentScale",null),r=(0,s._)([(0,C.j)("esri.views.2d.layers.LayerView2D")],r),r}},67802:(w,P,t)=>{t.d(P,{Z:()=>Y});var s=t(15861),p=t(17626),O=t(14517),g=t(10699),h=t(77712),x=(t(85931),t(8314),t(90912),t(76898)),C=t(2004),U=t(65401),D=t(37053),A=t(2584);const d=Math.PI/180;var K=t(90301),W=t(9598),G=t(58098);const S=(0,U.Ue)(),b=[0,0],Z=new G.Z(0,0,0,0);let f=class extends O.Z{constructor(n){var i;super(n),i=this,this._imagePromise=null,this.bitmaps=[],this.hidpi=false,this.imageMaxWidth=2048,this.imageMaxHeight=2048,this.imageRotationSupported=false,this.imageNormalizationSupported=false,this.update=(0,g.Ds)(function(){var E=(0,s.Z)(function*(_,v){if(!_.stationary||i.destroyed)return null;const r=_.state,o=(0,D.C5)(r.spatialReference),u=i.hidpi?_.pixelRatio:1,c=i.imageNormalizationSupported&&r.worldScreenWidth&&r.worldScreenWidth<r.size[0];c?(b[0]=r.worldScreenWidth,b[1]=r.size[1]):i.imageRotationSupported?(b[0]=r.size[0],b[1]=r.size[1]):function y(n,i){const E=function a(n){return n*d}(i.rotation),_=Math.abs(Math.cos(E)),v=Math.abs(Math.sin(E)),[r,o]=i.size;return n[0]=Math.round(o*v+r*_),n[1]=Math.round(o*_+r*v),n}(b,r);const T=Math.floor(b[0]*u)>i.imageMaxWidth||Math.floor(b[1]*u)>i.imageMaxHeight,L=!i.imageNormalizationSupported&&o&&(r.extent.xmin<o.valid[0]||r.extent.xmax>o.valid[1]);if(T||L){let I=Math.min(i.imageMaxWidth,i.imageMaxHeight);L&&(I=Math.min(r.worldScreenWidth,I)),i._imagePromise=i._tiledExport(r,I,u,v)}else i._imagePromise=i._singleExport(r,b,c?r.paddedViewState.center:r.center,r.resolution,i.imageRotationSupported?r.rotation:0,u,v);return i._imagePromise.then(function(){var I=(0,s.Z)(function*(z){if(i._imagePromise=null,!i.destroyed){i.bitmaps=null!=z?z:[];for(const H of i.container.children)z.includes(H)||H.fadeOut().then(()=>{H.remove()});for(const H of z)i.container.addChild(H),H.fadeIn()}});return function(z){return I.apply(this,arguments)}}()).catch(I=>{throw i._imagePromise=null,I})});return function(_,v){return E.apply(this,arguments)}}(),5e3)}destroy(){this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}updateExports(n){for(const i of this.container.children){if(!i.visible||!i.stage)return;n(i),i.invalidateTexture(),i.requestRender()}}_export(n,i,E,_,v,r){var o=this;return(0,s.Z)(function*(){const u=yield o.fetchSource(n,Math.floor(i*v),Math.floor(E*v),{rotation:_,pixelRatio:v,signal:r}),c=new K.eY(u,"additive");return c.x=n.xmin,c.y=n.ymax,c.resolution=n.width/i,c.rotation=_,c.pixelRatio=v,c})()}_singleExport(n,i,E,_,v,r,o){var u=this;return(0,s.Z)(function*(){!function m(n,i,E,_){const[v,r]=i,[o,u]=_,c=.5*E;n[0]=v-c*o,n[1]=r-c*u,n[2]=v+c*o,n[3]=r+c*u}(S,E,_,i);const c=new C.Z(S[0],S[1],S[2],S[3],n.spatialReference);return[yield u._export(c,i[0],i[1],v,r,o)]})()}_tiledExport(n,i,E,_){const v=A.Z.create({size:i,spatialReference:n.spatialReference,scales:[n.scale]}),r=new W.Z(v),o=r.getTileCoverage(n);if(!o)return null;const u=[];return o.forEach((c,T,N,L)=>{Z.set(c,T,N,L),r.getTileBounds(S,Z);const R=new C.Z(S[0],S[1],S[2],S[3],n.spatialReference);u.push(this._export(R,i,i,0,E,_))}),Promise.all(u)}};(0,p._)([(0,h.Cb)()],f.prototype,"_imagePromise",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"bitmaps",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"container",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"fetchSource",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"hidpi",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"imageMaxWidth",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"imageMaxHeight",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"imageRotationSupported",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"imageNormalizationSupported",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"requestUpdate",void 0),(0,p._)([(0,h.Cb)()],f.prototype,"updating",null),f=(0,p._)([(0,x.j)("esri.views.2d.layers.support.ExportStrategy")],f);const Y=f},45611:(w,P,t)=>{t.d(P,{Z:()=>a});var s=t(17626),p=t(14517),O=t(61885),g=t(80542),h=t(61996),l=t(63290),M=t(62208),B=t(60330),x=t(77712),A=(t(85931),t(8314),t(90912),t(76898));let d=class extends((0,g.p)((0,h.IG)((0,B.v)(O.Z.EventedMixin(p.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if("layerview:create-error"!==e.name){const y=this.layer&&this.layer.id||"no id",m=this.layer&&this.layer.title||"no title";l.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${m}', id: '${y}')`,e)}})}get fullOpacity(){return(0,M.Pt)(this.get("layer.opacity"),1)*(0,M.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null==(e=this.layer)?void 0:e.legendEnabled)}get updating(){var e;return!!(null!=(e=this.updatingHandles)&&e.updating||this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null==(e=this.layer)?void 0:e.visible)}set visible(e){void 0!==e?this._override("visible",e):this._clearOverride("visible")}canResume(){var e,y,m;return this.visible&&(null==(e=this.layer)?void 0:e.loaded)&&!(null!=(y=this.parent)&&y.suspended)&&(null==(m=this.view)?void 0:m.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{};return this.view&&this.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,x.Cb)()],d.prototype,"fullOpacity",null),(0,s._)([(0,x.Cb)()],d.prototype,"layer",void 0),(0,s._)([(0,x.Cb)()],d.prototype,"parent",void 0),(0,s._)([(0,x.Cb)({readOnly:!0})],d.prototype,"suspended",null),(0,s._)([(0,x.Cb)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,s._)([(0,x.Cb)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,s._)([(0,x.Cb)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,s._)([(0,x.Cb)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,s._)([(0,x.Cb)()],d.prototype,"visible",null),(0,s._)([(0,x.Cb)()],d.prototype,"view",void 0),d=(0,s._)([(0,A.j)("esri.views.layers.LayerView")],d);const a=d},94421:(w,P,t)=>{t.d(P,{Z:()=>C});var s=t(17626),p=t(63290),O=t(10699),g=t(32917),h=t(77712),x=(t(85931),t(8314),t(90912),t(76898));const C=U=>{let D=class extends U{initialize(){this.handles.add((0,g.on)(()=>this.layer,"refresh",A=>{this.doRefresh(A.dataChanged).catch(d=>{(0,O.D_)(d)||p.Z.getLogger(this.declaredClass).error(d)})}),"RefreshableLayerView")}};return(0,s._)([(0,h.Cb)()],D.prototype,"layer",void 0),D=(0,s._)([(0,x.j)("esri.layers.mixins.RefreshableLayerView")],D),D}}}]);