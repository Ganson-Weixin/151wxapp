(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/zhongzhijidi/detail"],{"2fd1":function(t,e,n){"use strict";n.r(e);var i=n("d3b6"),a=n("4340");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("a2f6");var r,u=n("f0c5"),o=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=o.exports},4340:function(t,e,n){"use strict";n.r(e);var i=n("9191"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},"4a37":function(t,e,n){"use strict";(function(t){n("b8ea"),n("921b");i(n("66fd"));var e=i(n("2fd1"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},9191:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,i,a,s,r){try{var u=t[s](r),o=u.value}catch(c){return void n(c)}u.done?e(o):Promise.resolve(o).then(i,a)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function u(t){s(r,i,a,u,o,"next",t)}function o(t){s(r,i,a,u,o,"throw",t)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0}},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id;case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var e=r(i.default.mark((function e(n){var a,s;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.init(),a=t.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:s=e.sent,this.user=s.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup();case 8:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){},methods:{onPayTap:function(){t.setStorageSync("paytable","zhongzhijidi"),t.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=r(i.default.mark((function t(){var e,n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"zhongzhijidi",userid:this.user.id},t.next=3,this.$api.list("storeup",e);case 3:n=t.sent,this.storeupFlag=n.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var e=r(i.default.mark((function e(){var n,a,s,u;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this,a={page:1,limit:1,refid:n.detail.id,tablename:"zhongzhijidi",userid:n.user.id},e.next=4,n.$api.list("storeup",a);case 4:if(s=e.sent,1!=s.data.list.length){e.next=9;break}return u=s.data.list[0].id,t.showModal({title:"提示",content:"是否取消",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.del("storeup",JSON.stringify([u]));case 3:n.$utils.msg("取消成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}),e.abrupt("return");case 9:t.showModal({title:"提示",content:"是否收藏",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return t.next=3,n.$api.add("storeup",{userid:n.user.id,name:n.detail.zhongzhijidi,picture:n.swiperList[0],refid:n.detail.id,tablename:"zhongzhijidi"});case 3:n.$utils.msg("收藏成功"),n.getStoreup();case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 10:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onAcrossTap:function(e){t.setStorageSync("crossTable","zhongzhijidi"),t.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(e,"/add-or-update?cross=true"))},init:function(){var t=r(i.default.mark((function t(){var e;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("zhongzhijidi",this.id);case 2:e=t.sent,this.detail=e.data,this.detail.jidijieshao=this.detail.jidijieshao.replace(/img src/gi,'img style="width:100%;" src'),this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[];case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=r(i.default.mark((function t(e){var n;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discusszhongzhijidi",{page:e.num,limit:e.size,refid:this.id});case 2:n=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(n.data.list),0==n.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(e){var n=this;t.downloadFile({url:e,success:function(t){200===t.statusCode&&(n.$utils.msg("下载成功"),window.open(e))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discusszhongzhijidi/add-or-update?refid=".concat(this.id))},zan:function(){var e=r(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点赞",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.thumbsupnum=parseInt(n.detail.thumbsupnum)+1,t.next=4,n.$api.update("zhongzhijidi",n.detail);case 4:n.$utils.msg("点赞成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),cai:function(){var e=r(i.default.mark((function e(){var n;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this,t.showModal({title:"提示",content:"是否点踩",success:function(){var t=r(i.default.mark((function t(e){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.confirm){t.next=5;break}return n.detail.crazilynum=parseInt(n.detail.crazilynum)+1,t.next=4,n.$api.update("zhongzhijidi",n.detail);case 4:n.$utils.msg("点踩成功");case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()});case 2:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=r(i.default.mark((function t(){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("zhongzhijidi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=u}).call(this,n("543d")["default"])},a2f6:function(t,e,n){"use strict";var i=n("cb85"),a=n.n(i);a.a},cb85:function(t,e,n){},d3b6:function(t,e,n){"use strict";var i={"mescroll-uni":function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"9845"))},"uni-popup":function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"fa87"))}},a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}))}},[["4a37","common/runtime","common/vendor"]]]);