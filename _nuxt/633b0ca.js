(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{395:function(t,e,n){var content=n(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("5311e010",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n(395)},410:function(t,e,n){var o=n(9)(!1);o.push([t.i,".bottom-fixed[data-v-272d7b6a]{position:fixed;bottom:0}.futura[data-v-272d7b6a]{font-family:futura}.wrapper[data-v-272d7b6a]{overflow:hidden}.content[data-v-272d7b6a]{width:100vw}.slide-left-enter-active[data-v-272d7b6a],.slide-left-leave-active[data-v-272d7b6a]{transition:all .2s ease}.slide-left-enter[data-v-272d7b6a]{transform:translateX(-100%)}.slide-left-enter-to[data-v-272d7b6a],.slide-left-leave[data-v-272d7b6a]{transform:translate(0);opacity:1}.slide-left-leave-to[data-v-272d7b6a]{transform:translateX(100%)}.slide-right-enter-active[data-v-272d7b6a],.slide-right-leave-active[data-v-272d7b6a]{transition:all .2s ease}.slide-right-enter[data-v-272d7b6a]{transform:translateX(100%)}.slide-right-enter-to[data-v-272d7b6a],.slide-right-leave[data-v-272d7b6a]{transform:translate(0);opacity:1}.slide-right-leave-to[data-v-272d7b6a]{transform:translateX(-100%)}.bottom-space[data-v-272d7b6a]{height:0;transition:height .3s ease}.bottom-space.active[data-v-272d7b6a]{height:56px}",""]),t.exports=o},411:function(t,e,n){var content=n(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("5ea6d85e",content,!0,{sourceMap:!1})},412:function(t,e,n){var o=n(9)(!1);o.push([t.i,".theme--light.v-bottom-navigation{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active){color:rgba(0,0,0,.6)!important}.theme--dark.v-bottom-navigation{background-color:#2e2e2e;color:#fff}.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active){color:hsla(0,0%,100%,.7)!important}.v-item-group.v-bottom-navigation{bottom:0;display:flex;left:0;justify-content:center;width:100%;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-item-group.v-bottom-navigation .v-btn{background-color:transparent;border-radius:0;box-shadow:none;flex:0 1 auto;font-size:.75rem;height:inherit;max-width:168px;min-width:80px;position:relative;text-transform:none}.v-item-group.v-bottom-navigation .v-btn:after{content:none}.v-item-group.v-bottom-navigation .v-btn .v-btn__content{flex-direction:column-reverse;height:inherit}.v-item-group.v-bottom-navigation .v-btn .v-btn__content>:not(.v-icon){line-height:1.2}.v-item-group.v-bottom-navigation .v-btn.v-btn--active{color:inherit}.v-item-group.v-bottom-navigation .v-btn.v-btn--active:not(:hover):before{opacity:0}.v-item-group.v-bottom-navigation--absolute,.v-item-group.v-bottom-navigation--fixed{z-index:4}.v-item-group.v-bottom-navigation--absolute{position:absolute}.v-item-group.v-bottom-navigation--active{transform:translate(0)}.v-item-group.v-bottom-navigation--fixed{position:fixed}.v-item-group.v-bottom-navigation--grow .v-btn{width:100%}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content{flex-direction:row-reverse}.v-item-group.v-bottom-navigation--horizontal .v-btn>.v-btn__content>.v-icon{margin-bottom:0;margin-right:16px}.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content>:not(.v-icon){opacity:0;position:absolute;top:calc(100% - 12px);transform:scale(.9);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>.v-icon{transform:translateY(-8px)}.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content>:not(.v-icon){opacity:1;top:calc(100% - 22px);transform:scale(1)}",""]),t.exports=o},413:function(t,e,n){"use strict";var o=n(4),r=n(87).findIndex,l=n(100),c="findIndex",v=!0;c in[]&&Array(1).findIndex((function(){v=!1})),o({target:"Array",proto:!0,forced:v},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},414:function(t,e,n){var content=n(415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("73707fd0",content,!0,{sourceMap:!1})},415:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-item-group{flex:0 1 auto;position:relative;max-width:100%;transition:.3s cubic-bezier(.25,.8,.5,1)}",""]),t.exports=o},419:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(55),n(68),n(88)),l=n.n(r),c={fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,e.next=3,l.a.get("".concat(n.state.backendUrl,"/images/"));case 3:return o=e.sent,e.next=6,l.a.get("".concat(n.state.backendUrl,"/videos/"));case 6:return r=e.sent,e.next=9,l.a.get("".concat(n.state.backendUrl,"/items/"));case 9:c=e.sent,n.commit("data/setImages",o.data),n.commit("data/setVideos",r.data),n.commit("data/setItems",c.data);case 13:case"end":return e.stop()}}),e)})))()},data:function(){return{showBottomBar:!1,transitionName:""}},methods:{navigate:function(t){var e=this;this.showBottomBar=!1,this.$store.commit("setIndexScrollOffset",document.documentElement.scrollTop),this.$vuetify.goTo(0,{duration:300}),setTimeout((function(){return e.$router.push(t)}),300)}},computed:{value:{get:function(){return this.$store.state.bottomBarValue},set:function(t){this.$store.commit("setBottomBarValue",t)}},color:function(){switch(this.value){case 0:return"var(--swatch-1)";case 1:return"var(--swatch-6)";case 2:return"var(--swatch-5)";case 3:return"blue-grey";default:return"var(--swatch-1)"}}},watch:{value:function(t,e){this.transitionName=t>e?"slide-right":"slide-left",window.scrollTo(0,{})}},mounted:function(){var t=this;setTimeout((function(){t.showBottomBar=!0,t.$vuetify.goTo(t.$store.state.indexScrollOffset,{duration:300})}),300)}},v=(n(409),n(17)),d=n(76),h=n.n(d),m=n(2),f=(n(33),n(163),n(13),n(5),n(16),n(18),n(11),n(19),n(411),n(211)),y=(n(44),n(59),n(245),n(38),n(101),n(413),n(414),n(0));var x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return y.default.extend({name:"proxyable",model:{prop:t,event:e},props:Object(m.a)({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:Object(m.a)({},t,(function(t){this.internalLazyValue=t}))})}(),w=n(64),O=n(24),V=n(7);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j=Object(O.a)(x,w.a).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,n){return t.toggleMethod(t.getValue(e,n))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(V.c)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,i){return null==t.value||""===t.value?i:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,n=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,n)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),n=this.getValue(t,e);if(this.items.splice(e,1),!(this.selectedValues.indexOf(n)<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==n})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var n=this.getValue(t,e);t.isActive=this.toggleMethod(n)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var n=e.find((function(t){return!t.disabled}));if(n){var o=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,o))}}},updateMultiple:function(t){var e=(Array.isArray(this.internalValue)?this.internalValue:[]).slice(),n=e.findIndex((function(e){return e===t}));this.mandatory&&n>-1&&e.length-1<1||null!=this.max&&n<0&&e.length+1>this.max||(n>-1?e.splice(n,1):e.push(t),this.internalValue=e)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t(this.tag,this.genData(),this.$slots.default)}}),k=(j.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),j.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return j.options.computed.classes.call(this)}},methods:{genData:j.options.methods.genData}})),I=n(65),B=n(82),S=n(147),A=n(83);function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(O.a)(Object(f.a)("bottom",["height","inputValue"]),I.a,B.a,Object(A.b)("inputValue"),x,S.a,w.a).extend({name:"v-bottom-navigation",props:{activeClass:{type:String,default:"v-btn--active"},backgroundColor:String,grow:Boolean,height:{type:[Number,String],default:56},hideOnScroll:Boolean,horizontal:Boolean,inputValue:{type:Boolean,default:!0},mandatory:Boolean,shift:Boolean,tag:{type:String,default:"div"}},data:function(){return{isActive:this.inputValue}},computed:{canScroll:function(){return S.a.options.computed.canScroll.call(this)&&(this.hideOnScroll||!this.inputValue)},classes:function(){return{"v-bottom-navigation--absolute":this.absolute,"v-bottom-navigation--grow":this.grow,"v-bottom-navigation--fixed":!this.absolute&&(this.app||this.fixed),"v-bottom-navigation--horizontal":this.horizontal,"v-bottom-navigation--shift":this.shift}},styles:function(){return $($({},this.measurableStyles),{},{transform:this.isActive?"none":"translateY(100%)"})}},created:function(){this.$attrs.hasOwnProperty("active")&&Object(V.a)("active.sync","value or v-model",this)},methods:{thresholdMet:function(){this.isActive=!this.isScrollingUp,this.$emit("update:input-value",this.isActive)},updateApplication:function(){return this.$el?this.$el.clientHeight:0},updateValue:function(t){this.$emit("change",t)}},render:function(t){var data=this.setBackgroundColor(this.backgroundColor,{staticClass:"v-bottom-navigation",class:this.classes,style:this.styles,props:{activeClass:this.activeClass,mandatory:Boolean(this.mandatory||void 0!==this.value),tag:this.tag,value:this.internalValue},on:{change:this.updateValue}});return this.canScroll&&(data.directives=data.directives||[],data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t(k,this.setTextColor(this.color,data),this.$slots.default)}}),z=n(240),C=n(149),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[0==t.value?n("image-view",{key:"image",on:{"item:click":t.navigate}}):t._e(),t._v(" "),1==t.value?n("video-view",{key:"video",on:{"video:click":t.navigate}}):t._e(),t._v(" "),2==t.value?n("view-3",{key:"music"}):t._e(),t._v(" "),3==t.value?n("view-4",{key:"book"}):t._e()],1),t._v(" "),n("div",{staticClass:"bottom-space",class:{active:t.showBottomBar}}),t._v(" "),n("v-bottom-navigation",{staticClass:"bottom-fixed",attrs:{"input-value":t.showBottomBar,"background-color":t.color,dark:"",shift:""},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("v-btn",[n("span",[t._v("Image")]),t._v(" "),n("v-icon",[t._v("mdi-image")])],1),t._v(" "),n("v-btn",[n("span",[t._v("Video")]),t._v(" "),n("v-icon",[t._v("mdi-television-play")])],1),t._v(" "),n("v-btn",[n("span",[t._v("Music")]),t._v(" "),n("v-icon",[t._v("mdi-music-note")])],1),t._v(" "),n("v-btn",[n("span",[t._v("Book")]),t._v(" "),n("v-icon",[t._v("mdi-book")])],1)],1)],1)}),[],!1,null,"272d7b6a",null);e.default=component.exports;h()(component,{ImageView:n(165).default,VideoView:n(169).default}),h()(component,{VBottomNavigation:P,VBtn:z.a,VIcon:C.a})}}]);