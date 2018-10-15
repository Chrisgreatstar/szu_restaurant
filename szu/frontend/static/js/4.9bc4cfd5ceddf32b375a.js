webpackJsonp([4],{"+S5n":function(t,n,e){var a=e("odwe");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("3cddde46",a,!0)},"7T89":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e("7t+N"),o=e.n(a),i={name:"food",data:function(){return{tag:!1,color:["#FF5339","#FFB62D","#777777"],remarkList:[]}},methods:{back:function(){switch(this.$root.previous){case 0:this.$router.push({path:"/center/search"});break;case 1:this.$router.push({path:"/restaurant/"+this.foodInfo.restaurant_id});break;case 2:this.$router.push({path:"/orders"})}},remarkGrade:function(t){return t>=4?"满意":t>=3?"一般":"差评"},colorGrade:function(t){return t>=4?"color: "+this.color[0]:t>=3?"color: "+this.color[1]:"color: "+this.color[2]},wrapHeader:function(){var t=this;o()("#food").scroll(function(){o()(this).scrollTop()>=800?(t.tag=t.tag?t.tag:!t.tag,t.tag&&(o()(".detail").addClass("fixed-header"),o()("#feedback").css("margin-top","332px"))):t.tag&&(o()(".detail").removeClass("fixed-header"),o()("#feedback").css("margin-top","0"),t.tag=!1)})}},computed:{foodInfo:function(){return this.$store.state.foodInfo},renderPicture:function(){return"background-image: url("+this.foodInfo.photo+");"},totalAverage:function(){for(var t=0,n=0;n<this.remarkList.length;n++)t+=this.remarkList[n].grade;return t/this.remarkList.length}},mounted:function(){var t=this;this.wrapHeader(),o.a.ajax({async:!1,url:"/get_comments/",type:"POST",data:{dish_id:t.foodInfo.id,csrfmiddlewaretoken:csrf_token},success:function(n){t.remarkList=n},error:function(){console.log("获取评论失败！")}})}},A={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"subPage",attrs:{id:"food"}},[e("header",{style:t.renderPicture},[e("div",{staticClass:"back",attrs:{id:"closeBox"},on:{click:t.back}},[e("img",{attrs:{src:"static/assets/close.png",alt:"close"}})])]),t._v(" "),e("div",{staticClass:"detail"},[e("p",[t._v(t._s(t.foodInfo.name))]),t._v(" "),e("p",[t._v("月售721份")]),t._v(" "),e("p",[t._v("好评率92%")]),t._v(" "),e("p",[t._v("￥ "+t._s(t.foodInfo.price))]),t._v(" "),t._m(0,!1,!1)]),t._v(" "),e("div",{attrs:{id:"feedback"}},[e("div",[e("p",[t._v("评价")]),t._v(" "),e("p",[t._v(t._s(t.totalAverage))])]),t._v(" "),t._l(t.remarkList,function(n){return e("div",{staticClass:"fbItem"},[e("div",{staticClass:"fbBasic"},[e("img",{attrs:{src:"static/assets/user2.png",alt:"user"}}),t._v(" "),e("p",{staticClass:"fbGrade",style:t.colorGrade(n.grade)},[t._v(t._s(t.remarkGrade(n.grade)))])]),t._v(" "),e("div",{staticClass:"fbContent"},[e("p",[t._v(t._s(n.time.replace("T"," ")))]),t._v(" "),e("p",[t._v(t._s(n.comment))])])])})],2)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"cartBox"}},[n("img",{attrs:{src:"static/assets/cart.png",alt:"buy"}})])}]},d=e("VU/8")(i,A,!1,function(t){e("+S5n")},"data-v-b29c3494",null);n.default=d.exports},odwe:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n#food[data-v-b29c3494]{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  background: white;\n  z-index: 4;\n}\nheader[data-v-b29c3494]{\n  width: 100%;\n  height: 800px;\n  background-position: 50% 50%!important;\n  background-size: cover!important;\n  overflow: hidden;\n}\n.fixed-header[data-v-b29c3494]{\n  position: fixed;\n  top: 0;\n}\n#closeBox[data-v-b29c3494]{\n  width: 110px;\n  height: 110px;\n  margin: 5%;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.1);\n}\n#closeBox img[data-v-b29c3494]{\n  width: 50px;\n  height: 50px;\n  margin: 30px;\n}\n.detail[data-v-b29c3494]{\n  width: 100%;\n  height: 290px;\n  border-bottom: 3px solid #f0f2f5;\n  z-index: 2;\n  background-color: white;\n  padding-top: 40px;\n  overflow: hidden;\n}\n.detail p[data-v-b29c3494]:first-of-type{\n  font-size: 60px;\n  font-weight: bold;\n  margin: 0 0 10px 5%;\n}\n.detail p[data-v-b29c3494]:nth-of-type(2), .detail p[data-v-b29c3494]:nth-of-type(3){\n  font-size: 36px;\n  float: left;\n}\n.detail p[data-v-b29c3494]:nth-of-type(2){\n  margin: 10px 25px 0 5%;\n}\n.detail p[data-v-b29c3494]:nth-of-type(3){\n  margin-top: 10px;\n}\n.detail p[data-v-b29c3494]:nth-of-type(4){\n  margin: 130px 4.5% 0;\n  font-size: 54px;\n  color: #FF5339;\n}\n#cartBox[data-v-b29c3494]{\n  width: 13%;\n  height: 130px;\n  float: right;\n  position: relative;\n  bottom: 103px;\n  right: 20px;\n}\n.detail img[data-v-b29c3494]{\n  width: 70px;\n  position: relative;\n  top: 32px;\n  float: right;\n  right: calc(38.5% - 20px);\n}\n#feedback[data-v-b29c3494]{\n  width: 90%;\n  height: auto;\n  margin: 0 5%;\n  z-index: 1;\n  overflow: hidden;\n}\n#feedback>div[data-v-b29c3494]:first-of-type{\n  width: 100%;\n  height: 87px;\n  border-bottom: 3px solid #f0f2f5;\n}\n#feedback>div:first-of-type p[data-v-b29c3494]:first-of-type{\n  font-size: 54px;\n  font-weight: bold;\n  letter-spacing: 4px;\n  margin: 30px 0;\n}\n#feedback>div:first-of-type p[data-v-b29c3494]:nth-of-type(2){\n  font-size: 60px;\n  color: #FF5339;\n  position: relative;\n  bottom: 85px;\n  left: 140px;\n}\n.fbItem[data-v-b29c3494]{\n  width: 100%;\n  height: 300px;\n  border-bottom: 2px solid #f0f2f5;\n}\n.fbBasic[data-v-b29c3494]{\n  width: calc(4% + 114px);\n  height: 100%;\n  float: left;\n}\n.fbItem img[data-v-b29c3494]{\n  width: 114px;\n  float: left;\n  padding-top: 30px;\n}\n.fbGrade[data-v-b29c3494]{\n  float: left;\n  font-size: 40px;\n  position: relative;\n  top: 16px;\n  left: 18px;\n}\n.fbContent[data-v-b29c3494]{\n  width: calc(96% - 114px);\n  height: 100%;\n  float: left;\n  position: relative;\n  overflow: hidden;\n}\n.fbContent p[data-v-b29c3494]:first-of-type{\n  padding-top: 33px;\n  font-size: 36px;\n  padding-bottom: 3px;\n}\n.fbContent p[data-v-b29c3494]:nth-of-type(2){\n  line-height: 170%;\n  font-size: 40px;\n}\n","",{version:3,sources:["D:/Users/Documents/Study/Projects/onCanteen/src/components/food.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,YAAY;EACZ,cAAc;EACd,uCAAuC;EACvC,iCAAiC;EACjC,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,OAAO;CACR;AACD;EACE,aAAa;EACb,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,+BAA+B;CAChC;AACD;EACE,YAAY;EACZ,aAAa;EACb,aAAa;CACd;AACD;EACE,YAAY;EACZ,cAAc;EACd,iCAAiC;EACjC,WAAW;EACX,wBAAwB;EACxB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,YAAY;CACb;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,YAAY;CACb;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,WAAW;EACX,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,aAAa;EACb,iCAAiC;CAClC;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,aAAa;EACb,YAAY;CACb;AACD;EACE,YAAY;EACZ,cAAc;EACd,iCAAiC;CAClC;AACD;EACE,wBAAwB;EACxB,aAAa;EACb,YAAY;CACb;AACD;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,WAAW;CACZ;AACD;EACE,yBAAyB;EACzB,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,gBAAgB;CACjB",file:"food.vue",sourcesContent:["\n#food[data-v-b29c3494]{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n  background: white;\n  z-index: 4;\n}\nheader[data-v-b29c3494]{\n  width: 100%;\n  height: 800px;\n  background-position: 50% 50%!important;\n  background-size: cover!important;\n  overflow: hidden;\n}\n.fixed-header[data-v-b29c3494]{\n  position: fixed;\n  top: 0;\n}\n#closeBox[data-v-b29c3494]{\n  width: 110px;\n  height: 110px;\n  margin: 5%;\n  border-radius: 8px;\n  background: rgba(0, 0, 0, 0.1);\n}\n#closeBox img[data-v-b29c3494]{\n  width: 50px;\n  height: 50px;\n  margin: 30px;\n}\n.detail[data-v-b29c3494]{\n  width: 100%;\n  height: 290px;\n  border-bottom: 3px solid #f0f2f5;\n  z-index: 2;\n  background-color: white;\n  padding-top: 40px;\n  overflow: hidden;\n}\n.detail p[data-v-b29c3494]:first-of-type{\n  font-size: 60px;\n  font-weight: bold;\n  margin: 0 0 10px 5%;\n}\n.detail p[data-v-b29c3494]:nth-of-type(2), .detail p[data-v-b29c3494]:nth-of-type(3){\n  font-size: 36px;\n  float: left;\n}\n.detail p[data-v-b29c3494]:nth-of-type(2){\n  margin: 10px 25px 0 5%;\n}\n.detail p[data-v-b29c3494]:nth-of-type(3){\n  margin-top: 10px;\n}\n.detail p[data-v-b29c3494]:nth-of-type(4){\n  margin: 130px 4.5% 0;\n  font-size: 54px;\n  color: #FF5339;\n}\n#cartBox[data-v-b29c3494]{\n  width: 13%;\n  height: 130px;\n  float: right;\n  position: relative;\n  bottom: 103px;\n  right: 20px;\n}\n.detail img[data-v-b29c3494]{\n  width: 70px;\n  position: relative;\n  top: 32px;\n  float: right;\n  right: calc(38.5% - 20px);\n}\n#feedback[data-v-b29c3494]{\n  width: 90%;\n  height: auto;\n  margin: 0 5%;\n  z-index: 1;\n  overflow: hidden;\n}\n#feedback>div[data-v-b29c3494]:first-of-type{\n  width: 100%;\n  height: 87px;\n  border-bottom: 3px solid #f0f2f5;\n}\n#feedback>div:first-of-type p[data-v-b29c3494]:first-of-type{\n  font-size: 54px;\n  font-weight: bold;\n  letter-spacing: 4px;\n  margin: 30px 0;\n}\n#feedback>div:first-of-type p[data-v-b29c3494]:nth-of-type(2){\n  font-size: 60px;\n  color: #FF5339;\n  position: relative;\n  bottom: 85px;\n  left: 140px;\n}\n.fbItem[data-v-b29c3494]{\n  width: 100%;\n  height: 300px;\n  border-bottom: 2px solid #f0f2f5;\n}\n.fbBasic[data-v-b29c3494]{\n  width: calc(4% + 114px);\n  height: 100%;\n  float: left;\n}\n.fbItem img[data-v-b29c3494]{\n  width: 114px;\n  float: left;\n  padding-top: 30px;\n}\n.fbGrade[data-v-b29c3494]{\n  float: left;\n  font-size: 40px;\n  position: relative;\n  top: 16px;\n  left: 18px;\n}\n.fbContent[data-v-b29c3494]{\n  width: calc(96% - 114px);\n  height: 100%;\n  float: left;\n  position: relative;\n  overflow: hidden;\n}\n.fbContent p[data-v-b29c3494]:first-of-type{\n  padding-top: 33px;\n  font-size: 36px;\n  padding-bottom: 3px;\n}\n.fbContent p[data-v-b29c3494]:nth-of-type(2){\n  line-height: 170%;\n  font-size: 40px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.9bc4cfd5ceddf32b375a.js.map