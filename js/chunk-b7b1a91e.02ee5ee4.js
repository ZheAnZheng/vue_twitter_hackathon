(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7b1a91e"],{"00a5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main-layout",[r("BaseSpinner",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}]}),r("router-view",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}]})],1)},n=[],i=r("5530"),s=r("1da1"),o=(r("d9e2"),r("96cf"),r("947a")),c=r("7b95"),u=r("2708"),l=r("c968"),d=r("4cce"),f={mixins:[u["g"]],components:{MainLayout:o["a"],BaseSpinner:c["a"]},created:function(){var e=this.$route.params.id;this.fetchProfileUser(e)},data:function(){return{user:{},isLoading:!0}},provide:function(){return{reFetchProfileUser:this.reFetchUser}},beforeRouteUpdate:function(e,t,r){var a=e.params.id,n=t.params.id;a!==n&&(this.isLoading=!0),this.fetchProfileUser(a),r()},methods:{fetchProfileUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.tryFetchProfileUser(e);case 3:t.isLoading=!1,r.next=13;break;case 6:if(r.prev=6,r.t0=r["catch"](0),"Request failed with status code 500"!==r.t0.message){r.next=12;break}return t.$router.go(-1),l["b"].fireError("無此用戶"),r.abrupt("return");case 12:l["b"].fireError("讀取用戶失敗");case 13:case"end":return r.stop()}}),r,null,[[0,6]])})))()},tryFetchProfileUser:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,d["a"].get({userId:e});case 3:if(a=r.sent,"OK"===a.statusText){r.next=6;break}throw Error(a.data.message);case 6:t.user=Object(i["a"])({},a.data),r.next=12;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},reFetchUser:function(){this.isLoading=!0;var e=this.$route.params.id;this.fetchProfileUser(e)}}},h=f,v=r("2877"),p=Object(v["a"])(h,a,n,!1,null,null,null);t["default"]=p.exports},"00b4":function(e,t,r){"use strict";r("ac1f");var a=r("23e7"),n=r("da84"),i=r("c65b"),s=r("e330"),o=r("1626"),c=r("861d"),u=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=n.Error,d=s(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(e){var t=this.exec;if(!o(t))return d(this,e);var r=i(t,this,e);if(null!==r&&!c(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},1230:function(e,t,r){"use strict";r("f8f5")},2909:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e){if(Array.isArray(e))return a(e)}r.d(t,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function s(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}r("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return n(e)||i(e)||s(e)||o()}},"4df4":function(e,t,r){"use strict";var a=r("da84"),n=r("0366"),i=r("c65b"),s=r("7b0b"),o=r("9bdd"),c=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),f=r("9a1f"),h=r("35a1"),v=a.Array;e.exports=function(e){var t=s(e),r=u(this),a=arguments.length,p=a>1?arguments[1]:void 0,w=void 0!==p;w&&(p=n(p,a>2?arguments[2]:void 0));var b,m,g,x,y,A,O=h(t),U=0;if(!O||this==v&&c(O))for(b=l(t),m=r?new this(b):v(b);b>U;U++)A=w?p(t[U],U):t[U],d(m,U,A);else for(x=f(t,O),y=x.next,m=r?new this:[];!(g=i(y,x)).done;U++)A=w?o(x,p,[g.value,U],!0):g.value,d(m,U,A);return m.length=U,m}},"5e34":function(e,t,r){"use strict";r("b8ae")},"7b95":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"spinner"},[r("div",{staticClass:"ball-box"},[r("div"),r("div"),r("div"),r("div"),r("div"),r("div"),r("div")])])}],i=(r("5e34"),r("2877")),s={},o=Object(i["a"])(s,a,n,!1,null,"f131ec16",null);t["a"]=o.exports},"83fa":function(e,t,r){},"947a":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("MobileNavbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Navbar",{on:{openModal:function(t){return e.openModal("tweet")}}}),r("Header",{attrs:{isReady:e.isHeaderReady}}),r("PopularList"),r("transition",{attrs:{name:"fade"}},[r("TweetModal",{directives:[{name:"show",rawName:"v-show",value:e.tweetModalSwitch,expression:"tweetModalSwitch"}],staticClass:"modal",attrs:{"is-modal":!0},on:{closeModal:function(t){return e.closeModal("tweet")}}})],1),e.isRouteAlive?r("div",{staticClass:"slot"},[e._t("default")],2):e._e()],1)},n=[],i=r("6ea3"),s=r("f47d"),o=r("d178"),c=r("0418"),u=r("4287"),l=r("2708"),d={mixins:[l["f"]],components:{MobileNavbar:i["a"],Navbar:o["a"],Header:c["a"],PopularList:s["a"],TweetModal:u["a"]},data:function(){return{isRouteAlive:!0,isHeaderReady:!1}},provide:function(){return{reload:this.reload,turnHeaderShow:this.turnHeaderShow}},methods:{reload:function(){var e=this;this.isRouteAlive=!1,this.$nextTick((function(){e.isRouteAlive=!0}))},turnHeaderShow:function(){this.isHeaderReady=!0}}},f=d,h=(r("dc0d"),r("2877")),v=Object(h["a"])(f,a,n,!1,null,"7f94a262",null);t["a"]=v.exports},"9bdd":function(e,t,r){var a=r("825a"),n=r("2a62");e.exports=function(e,t,r,i){try{return i?t(a(r)[0],r[1]):t(r)}catch(s){n(e,"throw",s)}}},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),s=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:s},{from:n})},b8ae:function(e,t,r){},d28b:function(e,t,r){var a=r("746f");a("iterator")},dc0d:function(e,t,r){"use strict";r("83fa")},f47d:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("ul",{staticClass:"popularList"},[r("li",{staticClass:"list-item head"},[e._v("Popular")]),r("transition-group",{attrs:{name:"list"}},e._l(e.showedUsers,(function(t){return r("li",{key:t.id,staticClass:"list-item"},[r("img",{staticClass:"image",attrs:{src:e._f("imageFilter")(t.avatar)}}),r("router-link",{staticClass:"user-info",attrs:{to:{name:"userTweets",params:{id:t.id}}}},[r("div",{staticClass:"name"},[e._v(e._s(t.name))]),r("div",{staticClass:"account"},[e._v("@"+e._s(t.account))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.id!==e.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"button-wrapper"},[t.isFollowed?r("base-button",{key:"followed",staticClass:"popularList-button",attrs:{mode:"action",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndDeleteFollow(t.id)}}},[e._v("正在跟隨")]):r("base-button",{key:"follow",staticClass:"popularList-button",attrs:{mode:"actionOutline",isDisabled:e.isProcessing&&e.activeId===t.id},on:{handleClick:function(r){return e.setActiveAndAddFollow(t.id)}}},[e._v("跟隨")])],1)],1)})),0),r("transition",{attrs:{name:"list"},on:{afterEnter:function(t){e.isTailIn=!0},afterLeave:e.showAll}},[r("li",{directives:[{name:"show",rawName:"v-show",value:e.tailShow&&e.notOverSix,expression:"tailShow && notOverSix"}],key:"tail",staticClass:"list-item",class:{tail:!e.isTailIn,"tail-in":e.isTailIn},on:{click:function(t){e.tailShow=!1}}},[e._v(" 顯示更多 ")])])],1)])},n=[],i=r("2909"),s=r("1da1"),o=r("5530"),c=(r("96cf"),r("d81d"),r("d9e2"),r("2708")),u=r("a64c"),l=r("4cce"),d=r("2f62"),f=r("c968"),h={components:{BaseButton:u["a"]},mixins:[c["d"],c["e"]],created:function(){this.fetchTopUser()},data:function(){return{showedUsers:[],users:[],tailShow:!0,isTailIn:!1,activeId:0}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(d["c"])(["currentUser"])),Object(d["c"])("follow",["followData"])),{},{notOverSix:function(){return this.users.length>7}}),watch:{followData:function(e){e.userId&&(this.showedUsers=this.showedUsers.map((function(t){return t.id===e.userId?Object(o["a"])(Object(o["a"])({},t),{},{isFollowed:e.isFollowed}):Object(o["a"])({},t)})))}},methods:{fetchTopUser:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l["a"].getTop();case 3:if(r=t.sent,"OK"===r.statusText){t.next=6;break}throw Error(r.data.message);case 6:e.users=Object(i["a"])(r.data),e.showSixUsers(),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),f["b"].fireError("無法熱門用戶失敗");case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},showSixUsers:function(){for(var e=this.users.length>6?6:this.users.length,t=0;t<e;t++)this.showedUsers.push(this.users[t])},showAll:function(){for(var e=6;e<this.users.length;e++)this.showedUsers.push(this.users[e])},setActive:function(e){this.activeId=e},setActiveAndDeleteFollow:function(e){this.setActive(e),this.deleteFollowing(e,"popular")},setActiveAndAddFollow:function(e){this.setActive(e),this.addFollowing(e,"popular")}}},v=h,p=(r("1230"),r("2877")),w=Object(p["a"])(v,a,n,!1,null,"229135c4",null);t["a"]=w.exports},f8f5:function(e,t,r){},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("da84"),i=r("e8b5"),s=r("68ee"),o=r("861d"),c=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),h=r("1dde"),v=r("f36a"),p=h("slice"),w=f("species"),b=n.Array,m=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var r,a,n,f=l(this),h=u(f),p=c(e,h),g=c(void 0===t?h:t,h);if(i(f)&&(r=f.constructor,s(r)&&(r===b||i(r.prototype))?r=void 0:o(r)&&(r=r[w],null===r&&(r=void 0)),r===b||void 0===r))return v(f,p,g);for(a=new(void 0===r?b:r)(m(g-p,0)),n=0;p<g;p++,n++)p in f&&d(a,n,f[p]);return a.length=n,a}})}}]);
//# sourceMappingURL=chunk-b7b1a91e.02ee5ee4.js.map