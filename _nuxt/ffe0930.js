(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{366:function(e,t){e.exports=function(data,e,t,n){var o=new Blob(void 0!==n?[n,data]:[data],{type:t||"application/octet-stream"});if(void 0!==window.navigator.msSaveBlob)window.navigator.msSaveBlob(o,e);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(o):window.webkitURL.createObjectURL(o),c=document.createElement("a");c.style.display="none",c.href=r,c.setAttribute("download",e),void 0===c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(r)}),200)}}},382:function(e,t,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(13).default)("1d7f4529",content,!0,{sourceMap:!1})},394:function(e,t,n){"use strict";n(382)},395:function(e,t,n){var o=n(12)(!1);o.push([e.i,".page[data-v-d7f8f3aa]{background-color:#fff}",""]),e.exports=o},412:function(e,t,n){"use strict";n.r(t);var o=n(19),r=(n(49),n(26),n(24),n(67),n(92)),c=n.n(r),d=n(366),l=n.n(d),f={validate:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,r,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.params,o=e.store,!((r=o.state.data.images).length>0)){t.next=7;break}return d=r.some((function(image){return image.id==n.id})),t.abrupt("return",d);case 7:return t.prev=7,t.next=10,c.a.get("http://localhost:8000/images/".concat(n.id,"/"));case 10:return t.abrupt("return",!0);case 13:t.prev=13,t.t0=t.catch(7),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[7,13]])})))()},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,c.a.get("http://localhost:8000/images/".concat(n.id,"/"));case 3:return o=t.sent,data=o.data,t.abrupt("return",{data:data});case 6:case"end":return t.stop()}}),t)})))()},methods:{download:function(){var e=this;c()({url:"http://localhost:8000/download/image/".concat(this.data.id,"/"),headers:{Authorization:"Token 07388e1dc0cbdfeaeb8dfe97f6adce5125369773"},method:"GET",responseType:"blob"}).then((function(t){var n=e.data.file.split("/").reverse()[0];l()(t.data,n)}))}},transition:function(e,t){return"view-image-id"==e.name?{name:"push-view",mode:""}:"view-image-id"==t.name?{name:"pop-view",mode:""}:""}},w=(n(394),n(15)),v=n(78),m=n.n(v),h=n(235),component=Object(w.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",[e._v("Single Image View")]),e._v("\n  "+e._s(e.data)+"\n  "),n("v-btn",{on:{click:e.download}},[e._v("download")])],1)}),[],!1,null,"d7f8f3aa",null);t.default=component.exports;m()(component,{VBtn:h.a})}}]);