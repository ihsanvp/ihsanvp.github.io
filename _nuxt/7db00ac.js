(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{375:function(e,t){e.exports=function(data,e,t,n){var r=new Blob(void 0!==n?[n,data]:[data],{type:t||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,e);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),c=document.createElement("a");c.style.display="none",c.href=o,c.setAttribute("download",e),void 0===c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(o)}),200)}}},394:function(e,t,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("365c4b46",content,!0,{sourceMap:!1})},407:function(e,t,n){"use strict";n(394)},408:function(e,t,n){var r=n(9)(!1);r.push([e.i,".page[data-v-74f63cbc]{background-color:#fff}",""]),e.exports=r},423:function(e,t,n){"use strict";n.r(t);var r=n(20),o=(n(68),n(32),n(49),n(27),n(23),n(88)),c=n.n(o),d=n(375),l=n.n(d),v={validate:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.params,r=e.store,!((o=r.state.data.videos).length>0)){t.next=7;break}return d=o.some((function(video){return video.id==n.id})),t.abrupt("return",d);case 7:return t.prev=7,t.next=10,c.a.get("".concat(r.state.backendUrl,"/videos/").concat(n.id,"/"));case 10:return t.abrupt("return",!0);case 13:t.prev=13,t.t0=t.catch(7),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[7,13]])})))()},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,r=e.store,t.next=3,c.a.get("".concat(r.state.backendUrl,"/videos/").concat(n.id,"/"));case 3:return o=t.sent,data=o.data,t.abrupt("return",{data:data});case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{progress:0}},methods:{download:function(){var e=this;c()({url:"".concat(e.$store.state.backendUrl,"/download/video/").concat(this.data.id,"/"),headers:{Authorization:"Token 07388e1dc0cbdfeaeb8dfe97f6adce5125369773"},method:"GET",responseType:"blob",onDownloadProgress:function(t){var progress=Math.round(t.loaded/t.total*100);console.log(t),e.progress=progress}}).then((function(t){var n=e.data.file.split("/").reverse()[0];l()(t.data,n)}))}},transition:function(e,t){return"view-video-id"==e.name?{name:"push-view",mode:""}:"view-video-id"==t.name?{name:"pop-view",mode:""}:""}},w=(n(407),n(17)),f=n(76),m=n.n(f),h=n(240),k=n(148),component=Object(w.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h3",[e._v("Video View")]),e._v("\n  "+e._s(e.data)+"\n  "),n("v-btn",{on:{click:e.download}},[e._v("download")]),e._v(" "),n("div",{staticClass:"pa-5"},[n("center",[n("v-progress-circular",{attrs:{size:"300",value:e.progress,color:"var(--swatch-1)",width:"5"}},[n("h1",[e._v(e._s(e.progress)+" %")])])],1)],1)],1)}),[],!1,null,"74f63cbc",null);t.default=component.exports;m()(component,{VBtn:h.a,VProgressCircular:k.a})}}]);