(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-004f1213"],{"00b4":function(e,t,r){"use strict";r("ac1f");var a=r("23e7"),s=r("da84"),i=r("c65b"),n=r("e330"),o=r("1626"),c=r("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),u=s.Error,d=n(/./.test);a({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var r=i(t,this,e);if(null!==r&&!c(r))throw new u("RegExp exec method returned something other than an Object or null");return!!r}})},1230:function(e,t,r){"use strict";r("f8f5")},2481:function(e,t,r){"use strict";r("9c44")},2797:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"reply-modal"},[r("div",{staticClass:"close",on:{click:e.closeModal}},[r("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z",fill:"#FF6600"}})])]),r("div",{staticClass:"tweet-block"},[r("img",{staticClass:"avatar",attrs:{src:e._f("imageFilter")(e.tweet.userAvatar)}}),r("div",{staticClass:"tweet-info"},[r("div",{staticClass:"tweet-owner"},[r("div",[e._v(e._s(e.tweet.userName))]),r("div",[e._v("@"+e._s(e.tweet.userAccount))]),r("div",[e._v("．")]),r("div",[e._v(e._s(e._f("fromNow")(e.tweet.createdAt)))])]),r("div",{staticClass:"tweet-content"},[e._v(" "+e._s(e.tweet.description)+" ")]),r("div",{staticClass:"reply"},[e._v(" 回覆給"),r("span",[e._v("@"+e._s(e.tweet.userAccount))])])])]),r("span",{staticClass:"connect-line"}),r("div",{staticClass:"reply-block"},[r("img",{staticClass:"avatar",attrs:{src:e._f("imageFilter")(e.currentUser.avatar)}}),r("div",{staticClass:"reply-content"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reply,expression:"reply"}],staticClass:"reply-input",attrs:{id:"reply",rows:"5",cols:"40",placeholder:"推你的回覆"},domProps:{value:e.reply},on:{input:function(t){t.target.composing||(e.reply=t.target.value)}}})])]),r("div",{staticClass:"button-group"},[r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isReplyValid&&e.isChecked,expression:"!isReplyValid && isChecked"}]},[e._v("回覆不可空白")]),r("base-button",{staticClass:"reply-button",attrs:{mode:"action",position:"right",isDisabled:e.isProcessing},on:{handleClick:function(t){return e.submitReply(e.tweet.id)}}},[e._v("回覆")])],1)])])},s=[],i=r("5530"),n=r("1da1"),o=(r("d9e2"),r("498a"),r("96cf"),r("a64c")),c=r("2708"),l=r("c968"),u=r("2f62"),d=r("6783"),f={mixins:[c["c"],c["d"]],components:{BaseButton:o["a"]},data:function(){return{reply:"",isProcessing:!1,isChecked:!1}},props:{tweet:{type:Object,required:!0}},inject:{reload:{from:"reload"},reFetchProfileUser:{from:"reFetchProfileUser",default:function(){return function(){}}}},methods:{submitReply:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t.isProcessing=!0,t.isReplyValid){r.next=5;break}return t.isChecked=!0,r.abrupt("return");case 5:return r.next=7,t.trySubmitReply(e);case 7:t.$emit("closeModal"),t.reload(),t.reFetchProfileUser(),l["b"].fireSuccess("回覆成功"),r.next=17;break;case 13:r.prev=13,r.t0=r["catch"](0),console.log(r.t0),l["b"].fireError("無法發送回覆");case 17:return r.prev=17,t.isProcessing=!1,r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[0,13,17,20]])})))()},closeModal:function(){this.isChecked=!1,this.reply="",this.$emit("closeModal")},trySubmitReply:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].createReply({tweetId:e,comment:t.reply});case 3:if(a=r.sent,"OK"===a.statusText){r.next=6;break}throw Error(a.data.message);case 6:r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()}},computed:Object(i["a"])(Object(i["a"])({},Object(u["c"])(["currentUser"])),{},{isReplyValid:function(){return""!==this.reply.trim()}})},v=f,h=(r("4f26"),r("2877")),p=Object(h["a"])(v,a,s,!1,null,"a2245fea",null);t["a"]=p.exports},2909:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function s(e){if(Array.isArray(e))return a(e)}r.d(t,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function n(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}r("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return s(e)||i(e)||n(e)||o()}},4385:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main-layout",[r("TweetOverview")],1)},s=[],i=r("947a"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("TweetModal",{attrs:{"is-modal":!1}}),r("transition",{attrs:{name:"fade"}},[r("ReplyModal",{directives:[{name:"show",rawName:"v-show",value:e.replyModalSwitch,expression:"replyModalSwitch"}],attrs:{tweet:e.modalTweets},on:{closeModal:function(t){return e.closeModal("reply")}}})],1),r("TweetList",{on:{openReplyModal:e.handleOpenModal}})],1)},o=[],c=r("4287"),l=r("4c78"),u=r("2708"),d=r("2797"),f={name:"TweetOverview",mixins:[u["f"]],components:{TweetList:l["default"],TweetModal:c["a"],ReplyModal:d["a"]},methods:{}},v=f,h=(r("2481"),r("2877")),p=Object(h["a"])(v,n,o,!1,null,"2d558efa",null),w=p.exports,m={components:{MainLayout:i["a"],TweetOverview:w}},b=m,y=Object(h["a"])(b,a,s,!1,null,null,null);t["default"]=y.exports},"4df4":function(e,t,r){"use strict";var a=r("da84"),s=r("0366"),i=r("c65b"),n=r("7b0b"),o=r("9bdd"),c=r("e95a"),l=r("68ee"),u=r("07fa"),d=r("8418"),f=r("9a1f"),v=r("35a1"),h=a.Array;e.exports=function(e){var t=n(e),r=l(this),a=arguments.length,p=a>1?arguments[1]:void 0,w=void 0!==p;w&&(p=s(p,a>2?arguments[2]:void 0));var m,b,y,g,C,x,_=v(t),A=0;if(!_||this==h&&c(_))for(m=u(t),b=r?new this(m):h(m);m>A;A++)x=w?p(t[A],A):t[A],d(b,A,x);else for(g=f(t,_),C=g.next,b=r?new this:[];!(y=i(C,g)).done;A++)x=w?o(g,p,[y.value,A],!0):y.value,d(b,A,x);return b.length=A,b}},"4f26":function(e,t,r){"use strict";r("8aa3")},"83fa":function(e,t,r){},"8aa3":function(e,t,r){},"947a":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MobileNavbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Navbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Header",{attrs:{isReady:e.isHeaderReady}}),r("PopularList"),r("transition",{attrs:{name:"fade"}},[r("TweetModal",{directives:[{name:"show",rawName:"v-show",value:e.tweetModalSwitch,expression:"tweetModalSwitch"}],staticClass:"modal",attrs:{"is-modal":!0},on:{closeModal:function(t){return e.closeModal("tweet")}}})],1),e.isRouteAlive?r("div",{staticClass:"slot"},[e._t("default")],2):e._e()],1)},s=[],i=r("6ea3"),n=r("f47d"),o=r("d178"),c=r("0418"),l=r("4287"),u=r("2708"),d={mixins:[u["f"]],components:{MobileNavbar:i["a"],Navbar:o["a"],Header:c["a"],PopularList:n["a"],TweetModal:l["a"]},data:function(){return{isRouteAlive:!0,isHeaderReady:!1}},provide:function(){return{reload:this.reload,turnHeaderShow:this.turnHeaderShow}},methods:{reload:function(){var e=this;this.isRouteAlive=!1,this.$nextTick((function(){e.isRouteAlive=!0}))},turnHeaderShow:function(){this.isHeaderReady=!0}}},f=d,v=(r("dc0d"),r("2877")),h=Object(v["a"])(f,a,s,!1,null,"7f94a262",null);t["a"]=h.exports},"9bdd":function(e,t,r){var a=r("825a"),s=r("2a62");e.exports=function(e,t,r,i){try{return i?t(a(r)[0],r[1]):t(r)}catch(n){s(e,"throw",n)}}},"9c44":function(e,t,r){},a630:function(e,t,r){var a=r("23e7"),s=r("4df4"),i=r("1c7e"),n=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:n},{from:s})},d28b:function(e,t,r){var a=r("746f");a("iterator")},dc0d:function(e,t,r){"use strict";r("83fa")},f47d:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("ul",{staticClass:"popularList"},[r("li",{staticClass:"list-item head"},[e._v("Popular")]),r("transition-group",{attrs:{name:"list"}},e._l(e.showedUsers,(function(t){return r("li",{key:t.id,staticClass:"list-item"},[r("img",{staticClass:"image",attrs:{src:e._f("imageFilter")(t.avatar)}}),r("router-link",{staticClass:"user-info",attrs:{to:{name:"userTweets",params:{id:t.id}}}},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"account"},[e._v("@"+e._s(t.account))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"button-wrapper"},[t.isFollowed?r("base-button",{key:"followed",staticClass:"popularList-button",attrs:{mode:"action",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndDeleteFollow(t.id)}}},[e._v("正在跟隨")]):r("base-button",{key:"follow",staticClass:"popularList-button",attrs:{mode:"actionOutline",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndAddFollow(t.id)}}},[e._v("跟隨")])],1)],1)})),0),r("transition",{attrs:{name:"list"},on:{afterEnter:function(t){e.isTailIn=!0},afterLeave:e.showAll}},[r("li",{directives:[{name:"show",rawName:"v-show",value:e.tailShow&&e.notOverSix,expression:"tailShow && notOverSix"}],key:"tail",staticClass:"list-item",class:{tail:!e.isTailIn,"tail-in":e.isTailIn},on:{click:function(t){e.tailShow=!1}}},[e._v(" 顯示更多 ")])])],1)])},s=[],i=r("2909"),n=r("1da1"),o=r("5530"),c=(r("96cf"),r("d81d"),r("d9e2"),r("2708")),l=r("a64c"),u=r("4cce"),d=r("2f62"),f=r("c968"),v={components:{BaseButton:l["a"]},mixins:[c["d"],c["e"]],created:function(){this.fetchTopUser()},data:function(){return{showedUsers:[],users:[],tailShow:!0,isTailIn:!1,activeId:0}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(d["c"])(["currentUser"])),Object(d["c"])("follow",["followData"])),{},{notOverSix:function(){return this.users.length>7}}),watch:{followData:function(e){e.userId&&(this.showedUsers=this.showedUsers.map((function(t){return t.id===e.userId?Object(o["a"])(Object(o["a"])({},t),{},{isFollowed:e.isFollowed}):Object(o["a"])({},t)})))}},methods:{fetchTopUser:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u["a"].getTop();case 3:if(r=t.sent,"OK"===r.statusText){t.next=6;break}throw Error(r.data.message);case 6:e.users=Object(i["a"])(r.data),e.showSixUsers(),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),f["b"].fireError("無法熱門用戶失敗");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},showSixUsers:function(){for(var e=this.users.length>6?6:this.users.length,t=0;t<e;t++)this.showedUsers.push(this.users[t])},showAll:function(){for(var e=6;e<this.users.length;e++)this.showedUsers.push(this.users[e])},setActive:function(e){this.activeId=e},setActiveAndDeleteFollow:function(e){this.setActive(e),this.deleteFollowing(e,"popular")},setActiveAndAddFollow:function(e){this.setActive(e),this.addFollowing(e,"popular")}}},h=v,p=(r("1230"),r("2877")),w=Object(p["a"])(h,a,s,!1,null,"229135c4",null);t["a"]=w.exports},f8f5:function(e,t,r){},fb6a:function(e,t,r){"use strict";var a=r("23e7"),s=r("da84"),i=r("e8b5"),n=r("68ee"),o=r("861d"),c=r("23cb"),l=r("07fa"),u=r("fc6a"),d=r("8418"),f=r("b622"),v=r("1dde"),h=r("f36a"),p=v("slice"),w=f("species"),m=s.Array,b=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var r,a,s,f=u(this),v=l(f),p=c(e,v),y=c(void 0===t?v:t,v);if(i(f)&&(r=f.constructor,n(r)&&(r===m||i(r.prototype))?r=void 0:o(r)&&(r=r[w],null===r&&(r=void 0)),r===m||void 0===r))return h(f,p,y);for(a=new(void 0===r?m:r)(b(y-p,0)),s=0;p<y;p++,s++)p in f&&d(a,s,f[p]);return a.length=s,a}})}}]);
//# sourceMappingURL=chunk-004f1213.4fc5ac07.js.map