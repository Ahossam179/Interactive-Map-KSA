"use strict";(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[2900],{90301:(D,p,t)=>{t.d(p,{eY:()=>x});var _=t(62208),l=t(30217),R=t(49966),a=t(9545),f=t(57477),d=t(14403),c=t(67969),o=t(55086);function u(s,e,r){const m={target:c.No.TEXTURE_2D,pixelFormat:c.VI.RGBA,internalFormat:c.VI.RGBA,dataType:c.Br.UNSIGNED_BYTE,wrapMode:c.e8.CLAMP_TO_EDGE};return e&&r&&(m.width=e,m.height=r),new o.x(s,m)}class x extends f.s{constructor(e=null,r,m=!0){super(),this.requestRenderOnSourceChangedEnabled=m,this._textureInvalidated=!0,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.blendFunction=r,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null)}get isSourceScaled(){return this.width!==this.sourceWidth||this.height!==this.sourceHeight}get height(){return void 0!==this._height?this._height:this.sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){this._source=e,this.invalidateTexture()}get sourceHeight(){return this._source instanceof HTMLImageElement?this._source.naturalHeight:this._source.height}get sourceWidth(){return this._source instanceof HTMLImageElement?this._source.naturalWidth:this._source.width}get width(){return void 0!==this._width?this._width:this.sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e.context)}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}_createTransforms(){return{dvs:(0,R.c)()}}setTransform(e){const r=(0,l.b)(this.transforms.dvs),[m,v]=e.toScreenNoRotation([0,0],[this.x,this.y]),g=this.resolution/this.pixelRatio/e.resolution,E=g*this.width,y=g*this.height,T=Math.PI*this.rotation/180;(0,l.c)(r,r,(0,a.f)(m,v)),(0,l.c)(r,r,(0,a.f)(E/2,y/2)),(0,l.r)(r,r,-T),(0,l.c)(r,r,(0,a.f)(-E/2,-y/2)),(0,l.j)(r,r,(0,a.f)(E,y)),(0,l.m)(this.transforms.dvs,e.displayViewMat3,r)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,r){this._texture&&e.bindTexture(this._texture,r)}updateTexture(e){var m;if(!this.stage)return null==(m=this._texture)||m.dispose(),void(this._texture=null);if(!this._textureInvalidated)return;this._textureInvalidated=!1,this._texture||(this._texture=this.source?u(e,this.sourceWidth,this.sourceHeight):u(e));const r=this.source;if(r){if(this._texture.resize(this.sourceWidth,this.sourceHeight),function n(s){return s&&"render"in s}(r))if(r instanceof d.Z){const v=r.getRenderedRasterPixels();this._texture.setData((0,_.pC)(v)?v.renderedRasterPixels:null)}else this._texture.setData(function i(s){const e=document.createElement("canvas");return e.width=s.width,e.height=s.height,s.render(e.getContext("2d")),e}(r));else(function h(s){return s&&!("render"in s)})(r)&&this._texture.setData(r);this.ready()}else this._texture.setData(null)}onAttach(){this.invalidateTexture()}onDetach(){this.invalidateTexture()}}},71379:(D,p,t)=>{t.d(p,{s:()=>n});var _=t(65401),l=t(49966),R=t(90301),a=t(43783);class f extends a.I{constructor(i,u,x,s,e,r=null){super(i,u,x,s,e),this.bitmap=new R.eY(r,"standard",!1),this.bitmap.coordScale=[s,e],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(i){super.beforeRender(i),this.bitmap.beforeRender(i)}afterRender(i){super.afterRender(i),this.bitmap.afterRender(i)}set stencilRef(i){this.bitmap.stencilRef=i}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,l.c)(),tileMat3:(0,l.c)()}}setTransform(i,u){super.setTransform(i,u),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var d=t(51434),c=t(39406),o=t(26268);class n extends o.Z{get requiresDedicatedFBO(){return this.children.some(i=>"additive"===i.bitmap.blendFunction)}createTile(i){const u=this._tileInfoView.getTileBounds((0,_.Ue)(),i),[x,s]=this._tileInfoView.tileInfo.size;return new f(i,u[0],u[3],x,s)}prepareRenderPasses(i){const u=i.registerRenderPass({name:"bitmap (tile)",brushes:[d.U.bitmap],target:()=>this.children.map(x=>x.bitmap),drawPhase:c.jx.MAP});return[...super.prepareRenderPasses(i),u]}doRender(i){this.visible&&i.drawPhase===c.jx.MAP&&super.doRender(i)}}},14403:(D,p,t)=>{t.d(p,{Z:()=>l});var _=t(62208);class l{constructor(a,f,d){this.pixelBlock=a,this.extent=f,this.originalPixelBlock=d}get width(){return(0,_.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,_.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(a){const f=this.pixelBlock;if((0,_.Wi)(f))return;const d=this.filter({pixelBlock:f});if((0,_.Wi)(d.pixelBlock))return;const c=d.pixelBlock.getAsRGBA(),o=a.createImageData(d.pixelBlock.width,d.pixelBlock.height);o.data.set(c),a.putImageData(o,0,0)}getRenderedRasterPixels(){const a=this.filter({pixelBlock:this.pixelBlock});return(0,_.Wi)(a.pixelBlock)?null:{width:a.pixelBlock.width,height:a.pixelBlock.height,renderedRasterPixels:new Uint8Array(a.pixelBlock.getAsRGBA().buffer)}}}},26268:(D,p,t)=>{t.d(p,{Z:()=>c});var _=t(8314),l=t(39406),R=t(44589),a=t(29384),f=t(13382);const d=(o,n)=>o.key.level-n.key.level!=0?o.key.level-n.key.level:o.key.row-n.key.row!=0?o.key.row-n.key.row:o.key.col-n.key.col;class c extends R.Z{constructor(n){super(),this._tileInfoView=n}get requiresDedicatedFBO(){return!1}renderChildren(n){this.sortChildren(d),this.setStencilReference(n),super.renderChildren(n)}createRenderParams(n){const{state:h}=n,i=super.createRenderParams(n);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(h.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(h.scale),i}prepareRenderPasses(n){const h=super.prepareRenderPasses(n);return h.push(n.registerRenderPass({name:"stencil",brushes:[f.Z],drawPhase:l.jx.DEBUG|l.jx.MAP|l.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,_.Z)("esri-tiles-debug")&&h.push(n.registerRenderPass({name:"tileInfo",brushes:[a.Z],drawPhase:l.jx.DEBUG,target:()=>this.children})),h}getStencilTarget(){return this.children}updateTransforms(n){for(const h of this.children){const i=this._tileInfoView.getTileResolution(h.key);h.setTransform(n,i)}}setStencilReference(n){let h=1;for(const i of this.children)i.stencilRef=h++}}},43783:(D,p,t)=>{t.d(p,{I:()=>a});var _=t(30217),l=t(57477),R=t(58098);class a extends l.s{constructor(d,c,o,n,h,i=n,u=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new R.Z(d),this.x=c,this.y=o,this.width=n,this.height=h,this.rangeX=i,this.rangeY=u}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(d,c){const o=c/(d.resolution*d.pixelRatio),n=this.transforms.tileMat3,[h,i]=d.toScreenNoRotation([0,0],[this.x,this.y]);(0,_.s)(n,this.width/this.rangeX*o,0,0,0,this.height/this.rangeY*o,0,h,i,1),(0,_.m)(this.transforms.dvs,d.displayViewMat3,n)}}},32900:(D,p,t)=>{t.r(p),t.d(p,{default:()=>x});var _=t(17626),c=(t(63290),t(90912),t(85931),t(8314),t(82255),t(76898)),o=t(36859),n=t(71379),h=t(84225);class i{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){(0,o.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let u=class extends h.Z{constructor(s){super(s),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new n.s(s.tileInfoView)}createTile(s){const e=this._container.createTile(s);return this.tileInfoView.getTileCoords(e.bitmap,s),e.bitmap.resolution=this.tileInfoView.getTileResolution(s),e}onConfigUpdate(){const s=this.layer.renderer;if("heatmap"===s.type){const{minDensity:e,maxDensity:r,colorStops:m}=s;this._intensityInfo.minDensity=e,this._intensityInfo.maxDensity=r,this._gradient=(0,o.uI)(m),this.tiles.forEach(v=>{const g=v.bitmap.source;g&&(g.minDensity=e,g.maxDensity=r,g.gradient=this._gradient,v.bitmap.invalidateTexture())})}}hitTest(){return Promise.resolve([])}install(s){s.addChild(this._container)}uninstall(s){this._container.removeAllChildren(),s.removeChild(this._container)}disposeTile(s){this._container.removeChild(s),s.destroy()}supportsRenderer(s){return s&&"heatmap"===s.type}onTileData(s){const e=this.tiles.get(s.tileKey);if(!e)return;const r=s.intensityInfo,{minDensity:m,maxDensity:v}=this._intensityInfo,g=e.bitmap.source||new i;g.intensities=r&&r.matrix||null,g.minDensity=m,g.maxDensity=v,g.gradient=this._gradient,e.bitmap.source=g,this._container.addChild(e),this._container.requestRender(),this.requestUpdate()}onTileError(s){console.error(s)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(s,e){return console.error(s),Promise.reject()}};u=(0,_._)([(0,c.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],u);const x=u}}]);