webpackJsonp([6],{EaSt:function(t,n,e){var a=e("MDTn");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("7b986b36",a,!0)},MDTn:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n#canteen[data-v-1c64d194]{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  background: white;\n  z-index: 4;\n}\nheader[data-v-1c64d194]{\n  width: 100%;\n  height: 450px;\n  background: #1296db;\n  overflow: hidden;\n}\n#back[data-v-1c64d194]{\n  width: 60px;\n  height: 60px;\n  padding: 40px 5%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.fixed-back[data-v-1c64d194]{\n  z-index: 4!important;\n}\n.canteen-name[data-v-1c64d194]{\n  position: relative;\n  top: 310px;\n  padding: 0 5% 0;\n  width: 95%;\n  height: 140px;\n  z-index: 3;\n  overflow: hidden;\n  background: #1296db;\n}\n.fixed-name[data-v-1c64d194]{\n  position: fixed!important;\n  top: 0;\n  left: 0;\n}\n.canteen-name p[data-v-1c64d194]{\n  font-size: 66px;\n  line-height: 140px;\n  color: white;\n  float: left;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n#filter-box[data-v-1c64d194]{\n  float: right;\n  width: 60px;\n  height: 60px;\n  padding: 40px 5%;\n  background-color: #1296db;\n}\n#foods[data-v-1c64d194]{\n  width: 100%;\n  height: auto;\n  z-index: 1;\n  margin-bottom: 30px;\n}\n#filter[data-v-1c64d194]{\n  width: 80%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  position: fixed;\n  background: white;\n  z-index: 5;\n}\n.animate-filter[data-v-1c64d194]{\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n.hide-filter[data-v-1c64d194]{\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.show-filter[data-v-1c64d194]{\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n","",{version:3,sources:["D:/Users/Documents/Study/Projects/onCanteen/src/components/restaurant.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,OAAO;EACP,QAAQ;EACR,WAAW;CACZ;AACD;EACE,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,0BAA0B;EAC1B,OAAO;EACP,QAAQ;CACT;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,0CAA0C;EAC1C,kCAAkC;EAClC,0BAA0B;EAC1B,iDAAiD;CAClD;AACD;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,aAAa;EACb,WAAW;EACX,oBAAoB;CACrB;AACD;EACE,WAAW;EACX,aAAa;EACb,OAAO;EACP,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,wCAAwC;UAChC,gCAAgC;EACxC,0CAA0C;EAC1C,kCAAkC;EAClC,0BAA0B;EAC1B,iDAAiD;CAClD;AACD;EACE,oCAAoC;UAC5B,4BAA4B;CACrC;AACD;EACE,iCAAiC;UACzB,yBAAyB;CAClC",file:"restaurant.vue",sourcesContent:["\n#canteen[data-v-1c64d194]{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  background: white;\n  z-index: 4;\n}\nheader[data-v-1c64d194]{\n  width: 100%;\n  height: 450px;\n  background: #1296db;\n  overflow: hidden;\n}\n#back[data-v-1c64d194]{\n  width: 60px;\n  height: 60px;\n  padding: 40px 5%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n.fixed-back[data-v-1c64d194]{\n  z-index: 4!important;\n}\n.canteen-name[data-v-1c64d194]{\n  position: relative;\n  top: 310px;\n  padding: 0 5% 0;\n  width: 95%;\n  height: 140px;\n  z-index: 3;\n  overflow: hidden;\n  background: #1296db;\n}\n.fixed-name[data-v-1c64d194]{\n  position: fixed!important;\n  top: 0;\n  left: 0;\n}\n.canteen-name p[data-v-1c64d194]{\n  font-size: 66px;\n  line-height: 140px;\n  color: white;\n  float: left;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n#filter-box[data-v-1c64d194]{\n  float: right;\n  width: 60px;\n  height: 60px;\n  padding: 40px 5%;\n  background-color: #1296db;\n}\n#foods[data-v-1c64d194]{\n  width: 100%;\n  height: auto;\n  z-index: 1;\n  margin-bottom: 30px;\n}\n#filter[data-v-1c64d194]{\n  width: 80%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  position: fixed;\n  background: white;\n  z-index: 5;\n}\n.animate-filter[data-v-1c64d194]{\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n.hide-filter[data-v-1c64d194]{\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n}\n.show-filter[data-v-1c64d194]{\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n"],sourceRoot:""}])},vwq4:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7t+N"),i=e.n(a),s={name:"canteen",data:function(){return{tag:!1,filtered:!1,y:0,posX:0,posY:0,listenTouch:!1}},methods:{back:function(){this.$router.push({path:"/center"})},wrapHeader:function(){var t=this;i()("#canteen").scroll(function(){i()(this).scrollTop()>=310?(t.tag=t.tag?t.tag:!t.tag,t.tag&&(i()(".canteen-name").addClass("fixed-name"),i()(".canteen-name p").css("-webkit-transform","translateX(100px)"),i()(".canteen-name p").css("transform","translateX(100px)"),i()("#back").addClass("fixed-back"))):t.tag&&(i()("#back").removeClass("fixed-back"),i()(".canteen-name").removeClass("fixed-name"),i()(".canteen-name p").css("-webkit-transform","translateX(0px)"),i()(".canteen-name p").css("transform","translateX(0px)"),t.tag=!1)})},filter:function(){this.filtered=!0,this.listenTouch=!0,i()("#filter").addClass("animate-filter"),i()("#filter").addClass("show-filter"),i()("#filter").removeClass("hide-filter"),setTimeout(function(){i()("#filter").removeClass("animate-filter")},200)},quit:function(){this.filtered=!1,this.listenTouch=!1,i()("#filter").removeClass("show-filter"),i()("#filter").removeAttr("style"),i()("#filter").addClass("animate-filter"),i()("#filter").addClass("hide-filter"),setTimeout(function(){i()("#filter").removeClass("animate-filter")},200)},test:function(){console.log(1)},touch:function(t){if(this.listenTouch){switch(t.type){case"touchstart":this.posX=t.targetTouches[0].pageX,this.posY=t.targetTouches[0].pageY,console.log("start");break;case"touchmove":var n=t.targetTouches[0].pageX-this.posX;break;case"touchend":n=t.changedTouches[0].pageX-this.posX}n>0&&i()("#filter").css("transform","translateX("+n+"px)"),n>.03*this.$root.width&&(this.filtered=!1,this.listenTouch=!1,i()("#filter").removeAttr("style"),i()("#filter").removeClass("show-filter"),i()("#filter").addClass("animate-filter"),i()("#filter").addClass("hide-filter"),setTimeout(function(){i()("#filter").removeClass("animate-filter")},200))}}},computed:{renderMenu:function(){return this.$store.state.menu},restaurant:function(){return console.log(this.$store.state.restaurantList[this.$store.state.restaurantIndex]),this.$store.state.restaurantList[this.$store.state.restaurantIndex]}},mounted:function(){this.wrapHeader()}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"subPage",attrs:{id:"canteen"}},[e("header",[e("img",{attrs:{id:"back",src:"static/assets/back.png",alt:"back"},on:{click:t.back}}),t._v(" "),e("div",{staticClass:"canteen-name"},[e("p",[t._v(t._s(t.restaurant.name)+"食堂")]),t._v(" "),e("img",{attrs:{id:"filter-box",src:"static/assets/filter.png",alt:"filter"},on:{click:t.filter}})])]),t._v(" "),e("div",{attrs:{id:"foods"}},t._l(t.renderMenu,function(n,a){return e("div",{staticClass:"food-item",attrs:{index:a}},[e("div",{staticClass:"item-content",on:{click:function(e){t.$root.learnFood(n)}}},[e("div",{staticClass:"fd-pic",style:t.$root.renderFoodPic(n.photo)}),t._v(" "),e("div",{staticClass:"fd-intro"},[e("p",[t._v(t._s(n.name))]),t._v(" "),e("p",[t._v("月售357份")]),t._v(" "),e("p",[t._v("好评率96%")]),t._v(" "),e("p",[t._v("￥"+t._s(n.price))])])]),t._v(" "),t._m(0,!0,!1)])})),t._v(" "),e("div",{staticClass:"hide-filter",attrs:{id:"filter"},on:{touchstart:t.touch,touchmove:t.touch,touchend:t.touch}}),t._v(" "),e("transition",{attrs:{name:"grey"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.filtered,expression:"filtered"}],staticClass:"grey",on:{click:function(n){n.stopPropagation(),t.quit(n)}}})])],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"cartBox"},[n("img",{attrs:{src:"static/assets/buy.png",alt:"buy"}})])}]},o=e("VU/8")(s,r,!1,function(t){e("EaSt")},"data-v-1c64d194",null);n.default=o.exports}});
//# sourceMappingURL=6.507327ebf261d0fe6a49.js.map