(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e01f281c"],{"00b4":function(t,e,r){"use strict";r("ac1f");var a=r("23e7"),n=r("da84"),s=r("c65b"),i=r("e330"),o=r("1626"),c=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=n.Error,d=i(/./.test);a({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!o(e))return d(this,t);var r=s(e,this,t);if(null!==r&&!c(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},1230:function(t,e,r){"use strict";r("f8f5")},2909:function(t,e,r){"use strict";function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function n(t){if(Array.isArray(t))return a(t)}r.d(e,"a",(function(){return c}));r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function i(t,e){if(t){if("string"===typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}r("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return n(t)||s(t)||i(t)||o()}},"4df4":function(t,e,r){"use strict";var a=r("da84"),n=r("0366"),s=r("c65b"),i=r("7b0b"),o=r("9bdd"),c=r("e95a"),u=r("68ee"),l=r("07fa"),d=r("8418"),f=r("9a1f"),h=r("35a1"),v=a.Array;t.exports=function(t){var e=i(t),r=u(this),a=arguments.length,p=a>1?arguments[1]:void 0,w=void 0!==p;w&&(p=n(p,a>2?arguments[2]:void 0));var b,m,g,x,y,A,O=h(e),U=0;if(!O||this==v&&c(O))for(b=l(e),m=r?new this(b):v(b);b>U;U++)A=w?p(e[U],U):e[U],d(m,U,A);else for(x=f(e,O),y=x.next,m=r?new this:[];!(g=s(y,x)).done;U++)A=w?o(x,p,[g.value,U],!0):g.value,d(m,U,A);return m.length=U,m}},7943:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main-layout",[r("router-view")],1)},n=[],s=r("5530"),i=r("1da1"),o=(r("96cf"),r("d9e2"),r("947a")),c=r("2708"),u=r("4cce"),l=r("c968"),d={mixins:[c["g"]],components:{MainLayout:o["a"]},data:function(){return{user:{}}},created:function(){var t=this.$route.params.id;this.fetchUser(t)},provide:function(){return{reFetchUser:this.reFetchUser}},methods:{fetchUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u["a"].get({userId:t});case 3:if(a=r.sent,"OK"===a.statusText){r.next=6;break}throw Error(a.date.message);case 6:e.user=Object(s["a"])({},a.data),r.next=13;break;case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0),l["b"].fireError("無法讀取用戶");case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))()},reFetchUser:function(){var t=this.$route.params.id;this.fetchUser(t)}}},f=d,h=r("2877"),v=Object(h["a"])(f,a,n,!1,null,null,null);e["default"]=v.exports},"83fa":function(t,e,r){},"947a":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("MobileNavbar",{on:{openModal:function(e){return t.openModal("tweet")}}}),r("Navbar",{on:{openModal:function(e){return t.openModal("tweet")}}}),r("Header",{attrs:{isReady:t.isHeaderReady}}),r("PopularList"),r("transition",{attrs:{name:"fade"}},[r("TweetModal",{directives:[{name:"show",rawName:"v-show",value:t.tweetModalSwitch,expression:"tweetModalSwitch"}],staticClass:"modal",attrs:{"is-modal":!0},on:{closeModal:function(e){return t.closeModal("tweet")}}})],1),t.isRouteAlive?r("div",{staticClass:"slot"},[t._t("default")],2):t._e()],1)},n=[],s=r("6ea3"),i=r("f47d"),o=r("d178"),c=r("0418"),u=r("4287"),l=r("2708"),d={mixins:[l["f"]],components:{MobileNavbar:s["a"],Navbar:o["a"],Header:c["a"],PopularList:i["a"],TweetModal:u["a"]},data:function(){return{isRouteAlive:!0,isHeaderReady:!1}},provide:function(){return{reload:this.reload,turnHeaderShow:this.turnHeaderShow}},methods:{reload:function(){var t=this;this.isRouteAlive=!1,this.$nextTick((function(){t.isRouteAlive=!0}))},turnHeaderShow:function(){this.isHeaderReady=!0}}},f=d,h=(r("dc0d"),r("2877")),v=Object(h["a"])(f,a,n,!1,null,"7f94a262",null);e["a"]=v.exports},"9bdd":function(t,e,r){var a=r("825a"),n=r("2a62");t.exports=function(t,e,r,s){try{return s?e(a(r)[0],r[1]):e(r)}catch(i){n(t,"throw",i)}}},a630:function(t,e,r){var a=r("23e7"),n=r("4df4"),s=r("1c7e"),i=!s((function(t){Array.from(t)}));a({target:"Array",stat:!0,forced:i},{from:n})},d28b:function(t,e,r){var a=r("746f");a("iterator")},dc0d:function(t,e,r){"use strict";r("83fa")},f47d:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("ul",{staticClass:"popularList"},[r("li",{staticClass:"list-item head"},[t._v("Popular")]),r("transition-group",{attrs:{name:"list"}},t._l(t.showedUsers,(function(e){return r("li",{key:e.id,staticClass:"list-item"},[r("img",{staticClass:"image",attrs:{src:t._f("imageFilter")(e.avatar)}}),r("router-link",{staticClass:"user-info",attrs:{to:{name:"userTweets",params:{id:e.id}}}},[r("div",{staticClass:"name"},[t._v(t._s(e.name))]),r("div",{staticClass:"account"},[t._v("@"+t._s(e.account))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.id!==t.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"button-wrapper"},[e.isFollowed?r("base-button",{key:"followed",staticClass:"popularList-button",attrs:{mode:"action",isDisabled:t.isProcessing&&t.activeId===e.id},on:{handleClick:function(r){return t.setActiveAndDeleteFollow(e.id)}}},[t._v("正在跟隨")]):r("base-button",{key:"follow",staticClass:"popularList-button",attrs:{mode:"actionOutline",isDisabled:t.isProcessing&&t.activeId===e.id},on:{handleClick:function(r){return t.setActiveAndAddFollow(e.id)}}},[t._v("跟隨")])],1)],1)})),0),r("transition",{attrs:{name:"list"},on:{afterEnter:function(e){t.isTailIn=!0},afterLeave:t.showAll}},[r("li",{directives:[{name:"show",rawName:"v-show",value:t.tailShow&&t.notOverSix,expression:"tailShow && notOverSix"}],key:"tail",staticClass:"list-item",class:{tail:!t.isTailIn,"tail-in":t.isTailIn},on:{click:function(e){t.tailShow=!1}}},[t._v(" 顯示更多 ")])])],1)])},n=[],s=r("2909"),i=r("1da1"),o=r("5530"),c=(r("96cf"),r("d81d"),r("d9e2"),r("2708")),u=r("a64c"),l=r("4cce"),d=r("2f62"),f=r("c968"),h={components:{BaseButton:u["a"]},mixins:[c["d"],c["e"]],created:function(){this.fetchTopUser()},data:function(){return{showedUsers:[],users:[],tailShow:!0,isTailIn:!1,activeId:0}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(d["c"])(["currentUser"])),Object(d["c"])("follow",["followData"])),{},{notOverSix:function(){return this.users.length>7}}),watch:{followData:function(t){t.userId&&(this.showedUsers=this.showedUsers.map((function(e){return e.id===t.userId?Object(o["a"])(Object(o["a"])({},e),{},{isFollowed:t.isFollowed}):Object(o["a"])({},e)})))}},methods:{fetchTopUser:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getTop();case 3:if(r=e.sent,"OK"===r.statusText){e.next=6;break}throw Error(r.data.message);case 6:t.users=Object(s["a"])(r.data),t.showSixUsers(),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0),f["b"].fireError("無法熱門用戶失敗");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()},showSixUsers:function(){for(var t=this.users.length>6?6:this.users.length,e=0;e<t;e++)this.showedUsers.push(this.users[e])},showAll:function(){for(var t=6;t<this.users.length;t++)this.showedUsers.push(this.users[t])},setActive:function(t){this.activeId=t},setActiveAndDeleteFollow:function(t){this.setActive(t),this.deleteFollowing(t,"popular")},setActiveAndAddFollow:function(t){this.setActive(t),this.addFollowing(t,"popular")}}},v=h,p=(r("1230"),r("2877")),w=Object(p["a"])(v,a,n,!1,null,"229135c4",null);e["a"]=w.exports},f8f5:function(t,e,r){},fb6a:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("e8b5"),i=r("68ee"),o=r("861d"),c=r("23cb"),u=r("07fa"),l=r("fc6a"),d=r("8418"),f=r("b622"),h=r("1dde"),v=r("f36a"),p=h("slice"),w=f("species"),b=n.Array,m=Math.max;a({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,a,n,f=l(this),h=u(f),p=c(t,h),g=c(void 0===e?h:e,h);if(s(f)&&(r=f.constructor,i(r)&&(r===b||s(r.prototype))?r=void 0:o(r)&&(r=r[w],null===r&&(r=void 0)),r===b||void 0===r))return v(f,p,g);for(a=new(void 0===r?b:r)(m(g-p,0)),n=0;p<g;p++,n++)p in f&&d(a,n,f[p]);return a.length=n,a}})}}]);
//# sourceMappingURL=chunk-e01f281c.b0d16251.js.map