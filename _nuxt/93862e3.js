(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{showInstall:!1}},methods:{handleNavIconClick:function(){this.$emit("click:nav")}},mounted:function(){var t,e=this.$refs.install.$el,n=this;window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),t=e,n.showInstall=!0,console.log("before install fired")})),e.addEventListener("click",(function(e){t.prompt(),t.userChoice.then((function(e){"accepted"===e.outcome?(console.log("User accepted the A2HS prompt"),n.showInstall=!1):(console.log("User dismissed the A2HS prompt"),n.showInstall=!0),t=null}))}))}},o=n(17),c=n(76),l=n.n(c),d=n(369),f=n(370),v=n(240),h=n(149),m=n(371),w=n(233),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{app:"","inverted-scroll":"","scroll-threshold":100,color:"white"}},[n("v-app-bar-nav-icon",{on:{click:t.handleNavIconClick}}),t._v(" "),n("v-toolbar-title",[t._v("Georges Markhoul")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showInstall,expression:"showInstall"}],ref:"install",attrs:{icon:"",color:"#7f87f1"}},[n("v-icon",[t._v("mdi-download")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAppBar:d.a,VAppBarNavIcon:f.a,VBtn:v.a,VIcon:h.a,VSpacer:m.a,VToolbarTitle:w.a})},156:function(t,e,n){"use strict";var r=n(0),o=n(236),c=n.n(o);n(358);r.default.use(c.a)},157:function(t,e,n){"use strict";n.r(e);var r={},o=(n(328),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("header"),t._v(" "),n("div",{staticClass:"horizontal-view"},[t._t("default")],2),t._v(" "),t._t("footer")],2)}),[],!1,null,null,null);e.default=component.exports},165:function(t,e,n){"use strict";n.r(e);n(13),n(5),n(16),n(18),n(19);var r=n(2),o=(n(49),n(27),n(52),n(11),n(73));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={methods:{getImageSize:function(image){var t,e,n=image.dimension.split("x")[0],r=image.dimension.split("x")[1];if(Math.max(n,r)==n){var o=r/n;t=600,e=Math.round(600*o)}else{var c=n/r;e=600,t=Math.round(600*c)}return{width:t,height:e}}},computed:l(l({},Object(o.b)("data",{images:"images",items:"items"})),{},{finalItems:function(){var t=this,e=this.items.map((function(t){return t.object})),n={col1:[],col2:[],additional:[]},r={col1:0,col2:0};return this.items.forEach((function(o,c){var image=o.object,l=t.getImageSize(image);c==e.length-1&&Math.abs(r.col1-r.col2)<300?n.additional.push(o):r.col1>r.col2?(n.col2.push(o),r.col2+=l.height):(n.col1.push(o),r.col1+=l.height)})),n}})},f=(n(330),n(17)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"grid-col"},t._l(t.finalItems.col1,(function(e){return n("div",{key:e.id,staticClass:"item",on:{click:function(n){return t.$emit("item:click","/view/item/"+e.id)}}},[n("img",{attrs:{src:e.object.thumbnail,alt:""}})])})),0),t._v(" "),n("div",{staticClass:"grid-col"},t._l(t.finalItems.col2,(function(e){return n("div",{key:e.id,staticClass:"item",on:{click:function(n){return t.$emit("item:click","/view/item/"+e.id)}}},[n("img",{attrs:{src:e.object.thumbnail,alt:""}})])})),0)]),t._v(" "),n("div",{staticClass:"px-2"},t._l(t.finalItems.additional,(function(e){return n("div",{key:e.id,staticClass:"item",on:{click:function(n){return t.$emit("item:click","/view/item/"+e.id)}}},[n("img",{attrs:{src:e.object.thumbnail,alt:""}})])})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"top"},[n("div",{staticClass:"blue-grey--text text--darken-3 futura head"},[t._v("\n      Images\n    ")])])}],!1,null,"1836545c",null);e.default=component.exports},166:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:""}}},o=(n(332),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-1 mx-auto"},[n("h3",[t._v(t._s(t.text))])])}),[],!1,null,"955ac686",null);e.default=component.exports},167:function(t,e,n){"use strict";n.r(e);var r={props:{text:{type:String,default:""},img:{type:String,required:!0}}},o=(n(334),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-2"},[n("div",{staticClass:"overlay"}),t._v(" "),n("div",{staticClass:"content"},[t._v("\n    "+t._s(t.text)+"\n  ")]),t._v(" "),n("div",{staticClass:"fallback"})])}),[],!1,null,"108bef6e",null);e.default=component.exports},168:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{title:{type:String,default:"Lorem Ipsum"},price:{type:Number,default:0},img:{type:String,required:!0}}},o=(n(336),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-3"},[t._m(0),t._v(" "),n("div",{staticClass:"details pt-2"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"price"},[t._v("USD "+t._s(t.price))])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("div",{staticClass:"fallback"})])}],!1,null,"cd22d850",null);e.default=component.exports},169:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{}}},o=(n(338),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"slider-container"},t._l(t.$store.state.data.videos,(function(video){return n("div",{key:video.id,staticClass:"item",on:{click:function(e){return t.$emit("video:click","/view/video/"+video.id)}}},[n("div",{staticClass:"inner"})])})),0)])}),[],!1,null,"34b40c5c",null);e.default=component.exports},204:function(t,e,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7388ab72",content,!0,{sourceMap:!1})},213:function(t,e,n){var content=n(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("7eaf0cc0",content,!0,{sourceMap:!1})},214:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("fdbc13ec",content,!0,{sourceMap:!1})},215:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("926522b8",content,!0,{sourceMap:!1})},216:function(t,e,n){var content=n(335);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("e52507b4",content,!0,{sourceMap:!1})},217:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("19834211",content,!0,{sourceMap:!1})},218:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("3f99b2ed",content,!0,{sourceMap:!1})},227:function(t,e,n){"use strict";n.r(e);var r=n(17),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",[t._v("Music")])])}],!1,null,null,null);e.default=component.exports},228:function(t,e,n){"use strict";n.r(e);var r=n(17),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",[t._v("Book")])])}],!1,null,null,null);e.default=component.exports},239:function(t,e,n){"use strict";var r={components:{Appbar:n(119).default},data:function(){return{drawer:!1,installBanner:!1,bannerClosed:!1,onAppInstall:function(){}}},methods:{onClickNavIcon:function(){this.drawer=!this.drawer}},mounted:function(){var t,e=this;window.addEventListener("beforeinstallprompt",(function(n){n.preventDefault(),t=n,e.bannerClosed||(e.installBanner=!0),console.log("before install fired")})),e.onAppInstall=function(){t.prompt(),t.userChoice.then((function(n){"accepted"===n.outcome?(console.log("User accepted the A2HS prompt"),e.bannerClosed=!0):(console.log("User dismissed the A2HS prompt"),e.bannerClosed=!0),e.installBanner=!1,t=null}))}}},o=n(17),c=n(76),l=n.n(c),d=n(368),f=n(150),v=n(373),h=n(240),m=n(149),w=n(372),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("client-only",[n("v-banner",{attrs:{sticky:"","single-line":"",dark:"",color:"blue-grey",value:t.installBanner},scopedSlots:t._u([{key:"actions",fn:function(){return[n("v-btn",{attrs:{depressed:"",icon:"",color:"white"},on:{click:t.onAppInstall}},[n("v-icon",[t._v("\n            mdi-download\n          ")])],1),t._v(" "),n("v-btn",{attrs:{icon:"",color:"white"}},[n("v-icon",{attrs:{"x-small":""},on:{click:function(e){e.preventDefault(),t.installBanner=!1}}},[t._v("\n            mdi-close\n          ")])],1)]},proxy:!0}])},[n("v-avatar",{attrs:{slot:"icon",color:"white",size:"40"},slot:"icon"},[n("v-icon",{attrs:{icon:"mdi-lock",color:"blue-grey"}},[t._v("\n          mdi-download\n        ")])],1),t._v("\n\n      Get App\n\n      ")],1)],1),t._v(" "),n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VAvatar:f.a,VBanner:v.a,VBtn:h.a,VIcon:m.a,VMain:w.a})},249:function(t,e,n){n(250),t.exports=n(251)},275:function(t,e,n){"use strict";n(204)},276:function(t,e,n){var r=n(9)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},281:function(t,e,n){var content=n(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("52279404",content,!0,{sourceMap:!1})},282:function(t,e,n){var r=n(9)(!1);r.push([t.i,":root{--swatch-1:#ff5867;--swatch-2:#23cfbf;--swatch-3:#a6a5ec;--swatch-4:#92f8b4;--swatch-5:#00bec8;--swatch-6:#7f87f1;--swatch-7:#ffefca;--swatch-3-1:rgba(166,165,236,0.48627)}.push-view-enter-active,.push-view-leave-active{transition:all .3s ease;position:absolute;width:100vw;min-height:100vh}.push-view-enter-active{z-index:2}.push-view-leave-active{z-index:1}.push-view-enter{transform:translateX(100%)}.push-view-enter-to,.push-view-leave{transform:translate(0)}.push-view-leave-to{transform:translateX(0)}.pop-view-enter-active,.pop-view-leave-active{transition:all .3s ease;position:fixed;width:100vw;min-height:100vh}.pop-view-enter-active{z-index:1}.pop-view-leave-active{z-index:2}.pop-view-enter{transform:translateX(0)}.pop-view-enter-to,.pop-view-leave{transform:translate(0)}.pop-view-leave-to{transform:translateX(100%)}",""]),t.exports=r},283:function(t,e,n){var content=n(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("c3ae2b30",content,!0,{sourceMap:!1})},284:function(t,e,n){var r=n(9),o=n(285),c=n(286),l=r(!1),d=o(c);l.push([t.i,"@font-face{font-family:futura;src:url("+d+")}",""]),t.exports=l},286:function(t,e,n){t.exports=n.p+"fonts/futura medium bt.4e762c2.ttf"},326:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{indexScrollOffset:0,bottomBarValue:0,backendUrl:"https://ihsan.pythonanywhere.com"}},o={setIndexScrollOffset:function(t,data){return t.indexScrollOffset=data},setBottomBarValue:function(t,data){return t.bottomBarValue=data}}},327:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{items:[],artists:[],images:[],videos:[]}},o={setItems:function(t,data){return t.items=data},setArtists:function(t,data){return t.artists=data},setImages:function(t,data){return t.images=data},setVideos:function(t,data){return t.videos=data}}},328:function(t,e,n){"use strict";n(213)},329:function(t,e,n){var r=n(9)(!1);r.push([t.i,".horizontal-view{overflow:auto;white-space:nowrap}.horizontal-view::-webkit-scrollbar{display:none;scroll-behavior:smooth}.horizontal-view *{display:inline-block}",""]),t.exports=r},330:function(t,e,n){"use strict";n(214)},331:function(t,e,n){var r=n(9)(!1);r.push([t.i,".content[data-v-1836545c]{background-color:#fff}.grid-container[data-v-1836545c]{padding:0 10px;display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;gap:10px}.item[data-v-1836545c]{width:100%;overflow:hidden;border-radius:10px;margin-bottom:10px}.item img[data-v-1836545c]{position:relative;display:block;width:100%;-o-object-fit:contain;object-fit:contain}.top[data-v-1836545c]{display:grid;height:80px;align-items:center;justify-items:center;place-items:center}.head[data-v-1836545c]{font-size:1.2rem;font-weight:600;font-family:futura}",""]),t.exports=r},332:function(t,e,n){"use strict";n(215)},333:function(t,e,n){var r=n(9)(!1);r.push([t.i,".item-1[data-v-955ac686]{width:100%;height:20vw;background-color:var(--swatch-6);border-radius:clamp(20px,4vw,100px);display:grid;align-items:center;justify-items:center;place-items:center}.item-1 h3[data-v-955ac686]{color:#fff;font-size:clamp(1rem,4vw,4rem)}@media screen and (min-width:600px){.item-1[data-v-955ac686]{min-height:16vw}}",""]),t.exports=r},334:function(t,e,n){"use strict";n(216)},335:function(t,e,n){var r=n(9)(!1);r.push([t.i,".item-2[data-v-108bef6e]{position:relative;width:70vw;height:90vw;overflow:hidden;border-radius:clamp(20px,4vw,100px)}.item-2 img[data-v-108bef6e]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.item-2 .overlay[data-v-108bef6e]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.4);z-index:1}.item-2 .content[data-v-108bef6e]{position:absolute;bottom:20px;left:20px;color:#fff;font-size:clamp(1rem,5vw,3rem);z-index:2}.fallback[data-v-108bef6e]{width:100%;height:100%;background-color:var(--swatch-3)}",""]),t.exports=r},336:function(t,e,n){"use strict";n(217)},337:function(t,e,n){var r=n(9)(!1);r.push([t.i,".item-3[data-v-cd22d850]{margin:10px 0}.item-3 .img-wrapper[data-v-cd22d850]{width:100%;height:55vw;overflow:hidden;border-radius:clamp(20px,4vw,100px)}.item-3 img[data-v-cd22d850]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.item-3 .details[data-v-cd22d850]{display:flex;align-items:center;justify-content:space-between}.item-3 .details .price[data-v-cd22d850]{font-weight:600;color:var(--swatch-6)}.fallback[data-v-cd22d850]{width:100%;height:100%;background-color:var(--swatch-1)}",""]),t.exports=r},338:function(t,e,n){"use strict";n(218)},339:function(t,e,n){var r=n(9)(!1);r.push([t.i,".slider-container[data-v-34b40c5c]{width:100vw;height:calc(100vh - 56px)}.item[data-v-34b40c5c]{width:100%;padding:10px}.item .inner[data-v-34b40c5c]{background-color:teal;height:200px;border-radius:10px}",""]),t.exports=r},66:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(275),n(17)),c=n(76),l=n.n(c),d=n(368),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[249,7,1,8]]]);