webpackJsonp([4],{2:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0}),t.rdMark=void 0;var o=e(3),s=i(o);t.rdMark=s.default},3:function(n,t,e){"use strict";function i(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(t,"__esModule",{value:!0});var o=e(4),s=i(o);t.default={functional:!0,render:function(n,t){var e="",i=!0,o=!1,r=void 0;try{for(var d,a=(0,s.default)(t.children);!(i=(d=a.next()).done);i=!0){var c=d.value;e+=c.text}}catch(n){o=!0,r=n}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return n("div",{class:["marked"],domProps:{innerHTML:window.marked(e)}})}}},52:function(n,t,e){t=n.exports=e(17)(),t.push([n.id,".contacts{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #fff;margin-bottom:1rem}.contact{color:#fff;font-size:14px;width:100%;line-height:3rem;text-align:center;border-bottom:2px solid transparent;cursor:pointer}.contact.active{border-bottom:2px solid #fff}.swiper-box{height:500px;width:100%;margin:auto;background:#2196f3;padding:1rem}.swiper-box .rd-swipe{height:400px;width:100%}@media screen and (max-width:768px){.swiper-box{height:300px;box-sizing:border-box}.swiper-box .rd-swipe{height:200px}}","",{version:3,sources:["/./src/views/basic/swipe.vue"],names:[],mappings:"AACA,UACE,oBAAqB,AACrB,aAAc,AACd,qBAAsB,AAClB,uBAAwB,AAC5B,6BAA8B,AAC9B,kBAAoB,CACrB,AACD,SACE,WAAY,AACZ,eAAgB,AAChB,WAAY,AACZ,iBAAkB,AAClB,kBAAmB,AACnB,oCAAuC,AACvC,cAAgB,CACjB,AACD,gBACE,4BAA8B,CAC/B,AACD,YACI,aAAc,AACd,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,YAAc,CACjB,AACD,sBACE,aAAc,AACd,UAAY,CACb,AACD,oCACA,YACM,aAAc,AACd,qBAAuB,CAC5B,AACD,sBACI,YAAc,CACjB,CACA",file:"swipe.vue",sourcesContent:["\n.contacts {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  border-bottom: 1px solid #fff;\n  margin-bottom: 1rem;\n}\n.contact {\n  color: #fff;\n  font-size: 14px;\n  width: 100%;\n  line-height: 3rem;\n  text-align: center;\n  border-bottom: 2px solid rgba(0,0,0,0);\n  cursor: pointer;\n}\n.contact.active {\n  border-bottom: 2px solid #fff;\n}\n.swiper-box {\n    height: 500px;\n    width: 100%;\n    margin: auto;\n    background: #2196F3;\n    padding: 1rem;\n}\n.swiper-box  .rd-swipe {\n  height: 400px;\n  width: 100%;\n}\n@media screen and (max-width: 768px) {\n.swiper-box {\n      height: 300px;\n      box-sizing: border-box;\n}\n.swiper-box  .rd-swipe {\n    height: 200px;\n}\n}\n"],sourceRoot:"webpack://"}])},241:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(2),o=e(5);t.default={data:function(){return{swipe:{activeIndex:0},contacts:[{text:"Page 1"},{text:"Page 2"},{text:"Page 3"},{text:"Page 4"}],imgs:["http://covteam.u.qiniudn.com/test18.jpg","http://covteam.u.qiniudn.com/test19.jpg","http://covteam.u.qiniudn.com/test20.jpg","http://covteam.u.qiniudn.com/test21.jpg"],code:{one:'    <rd-swipe>\n        <div class="rd-swipe-item rd-swipe-item-3">\n            <span class="index-text">index: 1</span>\n        </div>\n        <div class="rd-swipe-item rd-swipe-item-1">\n            <span class="index-text">index: 2</span>\n        </div>\n        <div class="rd-swipe-item rd-swipe-item-2">\n            <span class="index-text">index: 3</span>\n        </div>\n        <div class="rd-swipe-item rd-swipe-item-3">\n            <span class="index-text">index: 4</span>\n        </div>\n        <div class="rd-swipe-item rd-swipe-item-1">\n            <span class="index-text">index: 5</span>\n        </div>\n        <div class="rd-swipe-item rd-swipe-item-2">\n            <span class="index-text">index: 6</span>\n        </div>\n    </rd-swipe>',two:"<rd-drop-button></rd-drop-button>",three:"<rd-button></rd-button>"}}},components:{rdSwipe:o.rdSwipe,rdMark:i.rdMark,rdButton:o.rdButton},methods:{slideTo:function(n){this.$children.map(function(t){t.turnTo&&(t.stopAutoPlay(),t.turnTo(n))})}}}},369:function(n,t,e){var i=e(52);"string"==typeof i&&(i=[[n.id,i,""]]);var o=e(18)(i,{});i.locals&&(n.exports=i.locals),i.locals||n.hot.accept(52,function(){var t=e(52);"string"==typeof t&&(t=[[n.id,t,""]]),o(t)}),n.hot.dispose(function(){o()})},597:function(n,t,e){var i,o;e(369),i=e(241);var s=e(682);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,n.exports=i},682:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return t("div",{staticClass:"ex-content ex-swiper"},[t("div",{staticClass:"ex-card"},[t("rd-mark",["\n# 轮播\n\n### 示例\n    "])," ",t("div",{staticClass:"swiper-box"},[t("div",{staticClass:"contacts"},[n._l(n.contacts,function(e,i){return t("div",{staticClass:"contact",class:{active:i===n.swipe.activeIndex},on:{click:function(t){n.slideTo(i)}}},["\n              "+n._s(e.text)+"\n            "])})])," ",t("rd-swipe",{attrs:{swipe:n.swipe}},[n._l(n.imgs,function(n,e){return t("div",{staticClass:"rd-swipe-item",style:{"background-image":"url("+n+")"}})})])])," ",t("p",[t("rd-button",{on:{click:function(t){n.slideTo(0)}}},["move to 1"])," ",t("rd-button",{on:{click:function(t){n.slideTo(1)}}},["move to 2"])," ",t("rd-button",{on:{click:function(t){n.slideTo(2)}}},["move to 3"])," ",t("rd-button",{on:{click:function(t){n.slideTo(3)}}},["move to 4"])])," ",t("rd-mark",["\n### 代码\n```html\n"+n._s(n.code.one)+"\n```\n\n### API\n\n`props`：swipe:Object\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| autoplay       | Number       | 自动播放切换时间 (ms)|\n\n\n`event`：\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| change         | event       | 轮播切换hook |\n\n\n\n`methods`：\n\n| 参数            | 类型         | 说明           |\n| :------------- |:-------------|:--------------|\n| turnTo         | function     | 入参 index: Number|\n| stopAutoPlay   | function     |                 |\n| startAutoPlay  | function     |                 |\n\n    "])])])},staticRenderFns:[]}}});