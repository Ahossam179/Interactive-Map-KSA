"use strict";var x=Object.defineProperty,C=Object.defineProperties,g=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,U=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,D=(a,r,s)=>r in a?x(a,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[r]=s,P=(a,r)=>{for(var s in r||(r={}))U.call(r,s)&&D(a,s,r[s]);if(d)for(var s of d(r))j.call(r,s)&&D(a,s,r[s]);return a},v=(a,r)=>C(a,g(r));(self.webpackChunkdemo2=self.webpackChunkdemo2||[]).push([[5976],{15976:(a,r,s)=>{s.r(r),s.d(r,{default:()=>y});var _=s(15861),m=(s(29132),s(62208)),M=s(98346),l=s(60295),S=s(8614),c=s(79751),f=s(28594),h=s(17057),O=s(30994),p=s(46572),B=s(54805),T=s(37084),E=s(2004);class y{convertVectorFieldData(t){const e=l.Z.fromJSON(t.pixelBlock),o=(0,O.KC)(e,t.type);return Promise.resolve((0,m.pC)(o)&&o.toJSON())}decode(t){return(0,_.Z)(function*(){const e=yield(0,S.J)(t.data,t.options);return e&&e.toJSON()})()}symbolize(t){t.pixelBlock=l.Z.fromJSON(t.pixelBlock),t.extent=t.extent?E.Z.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}updateSymbolizer(t){var e=this;return(0,_.Z)(function*(){var o;e.symbolizer=B.Z.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===(null==(o=e.symbolizer)?void 0:o.rendererJSON.type)&&(e.symbolizer.rendererJSON.histograms=t.histograms)})()}stretch(t){const e=this.symbolizer.simpleStretch(l.Z.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve((0,m.pC)(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=(0,h.Hv)(l.Z.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=(0,c.Vl)(l.Z.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((o,n)=>{e.set(n,null==o?void 0:o.toJSON())}),Promise.resolve(e)}mosaicAndTransform(t){return(0,_.Z)(function*(){const e=t.srcPixelBlocks.map(u=>u?new l.Z(u):null),o=(0,c.us)(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let n,i=o;return t.coefs&&(i=(0,c.Uk)(o,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(n=(0,c.Qh)(t.destDimension,t.gcsGrid),i=(0,m.Wg)((0,O.xQ)(i,t.isUV?"vector-uv":"vector-magdir",n))),{pixelBlock:null==i?void 0:i.toJSON(),localNorthDirections:n}})()}createFlowMesh(t,e){return(0,_.Z)(function*(){const o={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:n,indexData:i}=yield(0,T.GE)(t.meshType,t.simulationSettings,o,e.signal);return{result:{vertexBuffer:n.buffer,indexBuffer:i.buffer},transferList:[n.buffer,i.buffer]}})()}getProjectionOffsetGrid(t){return(0,_.Z)(function*(){const e=E.Z.fromJSON(t.projectedExtent),o=E.Z.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationSteps&&(n=new M.Z({steps:t.datumTransformationSteps})),(t.includeGCSGrid||(0,f.Mk)(e.spatialReference,o.spatialReference,n))&&(yield(0,f.zD)());const i=t.rasterTransform?(0,p.c)(t.rasterTransform):null;return(0,f.Qp)(v(P({},t),{projectedExtent:e,srcBufferExtent:o,datumTransformation:n,rasterTransform:i}))})()}}}}]);