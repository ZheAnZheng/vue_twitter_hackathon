(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1b0144e"],{"189f":function(e,t,n){"use strict";n("3928")},3928:function(e,t,n){},"3a9c":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-tweet-list-container"},[e.isLoading?n("BaseSpinner"):e._e(),n("transition-group",{attrs:{name:"slide",tag:"li",mode:"out-in"}},e._l(e.tweetLists,(function(t){return n("adminTweetListCard",{key:t.id,attrs:{"initial-tweet":t},on:{"after-delete-tweet":e.handleDeleteTweet}})})),1)],1)},s=[],i=n("1da1"),r=(n("96cf"),n("d9e2"),n("d81d"),n("b0c0"),n("a4d3"),n("e01a"),n("4de4"),n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-wrapper"},[n("img",{attrs:{src:e._f("imageFilter")(e.tweet.image),alt:"user-image"}}),n("div",{staticClass:"user-info"},[n("span",{staticClass:"name"},[e._v(e._s(e.tweet.name))]),n("span",{staticClass:"account"},[e._v(e._s(e._f("addAtFilter")(e.tweet.account)))]),n("span",{staticClass:"dot"},[e._v("·")]),n("span",{staticClass:"created-time"},[e._v(e._s(e._f("fromNow")(e.tweet.createdAt)))]),n("div",{staticClass:"user-tweet"},[e._v(" "+e._s(e.tweetContentLimit(e.tweet.tweetContent))+" ")])]),n("div",{staticClass:"cross-icon"},[n("i",{staticClass:"fas fa-times",on:{click:function(t){return e.deleteTweet(e.tweet.id)}}})])])}),c=[],o=n("5530"),u=n("2708"),d={name:"adminTweetListCard",mixins:[u["a"],u["d"],u["c"]],props:{initialTweet:{type:Object,required:!0}},methods:{deleteTweet:function(e){this.$emit("after-delete-tweet",e)},tweetContentLimit:function(e){return 50===e.length?e+"...":e}},data:function(){return{tweet:Object(o["a"])({},this.initialTweet)}}},l=d,w=(n("b4b0"),n("2877")),f=Object(w["a"])(l,r,c,!1,null,"3720e6cb",null),m=f.exports,v=n("be6c"),p=n("c968"),b=n("7b95"),h={name:"adminTweetList",components:{adminTweetListCard:m,BaseSpinner:b["a"]},data:function(){return{tweetLists:[],isLoading:!0}},created:function(){this.fetchTweetLists()},methods:{fetchTweetLists:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v["a"].tweets.getAll();case 3:if(n=t.sent,a=n.data,s=a.tweets,"success"===a.status){t.next=8;break}throw new Error(a.message);case 8:e.tweetLists=s.map((function(e){var t=e.User,n=t.name,a=t.account,s=t.avatar,i=e.id,r=e.description,c=e.createdAt;return{id:i,name:n,account:a,image:s,tweetContent:r,createdAt:c}})),e.isLoading=!1,t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log("Error",t.t0),p["b"].fireError("目前無法取得所有推文，請稍後再試");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))()},handleDeleteTweet:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,v["a"].tweets.delete({tweetId:e});case 3:if(a=n.sent,s=a.data,"success"===s.status){n.next=10;break}throw p["b"].fireError("目前無法刪除推文，請稍後再試"),new Error(s.message);case 10:p["b"].fireSuccess("成功刪除推文");case 11:t.tweetLists=t.tweetLists.filter((function(t){return t.id!==e})),n.next=17;break;case 14:n.prev=14,n.t0=n["catch"](0),console.log("Error",n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()}}},_=h,g=(n("189f"),Object(w["a"])(_,a,s,!1,null,"260bd0ee",null));t["default"]=g.exports},"5e34":function(e,t,n){"use strict";n("b8ae")},"7b95":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"ball-box"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])])}],i=(n("5e34"),n("2877")),r={},c=Object(i["a"])(r,a,s,!1,null,"f131ec16",null);t["a"]=c.exports},b4b0:function(e,t,n){"use strict";n("e389")},b8ae:function(e,t,n){},e389:function(e,t,n){}}]);
//# sourceMappingURL=chunk-e1b0144e.26c18b34.js.map