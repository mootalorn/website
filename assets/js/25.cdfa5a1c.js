(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{313:function(e,t,u){},320:function(e,t,u){"use strict";u.r(t);var n={name:"LanguageSwitch",data:function(){return{selected:this.languages[0].uuid}},props:{languages:{type:Array,required:!0},values:{type:Object,required:!0}},created:function(){var e=this;this.$watch("languages",(function(){e.selected=e.languages[0].uuid}),{deep:!0})},methods:{switchLanguage:function(e){this.selected=e}}},a=(u(322),u(45)),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,u=e._self._c||t;return u("div",[e.languages.length>1?u("ul",{staticClass:"switch"},e._l(e.languages,(function(t){return u("li",{key:t.uuid,class:{selected:t.uuid===e.selected,filled:!!e.values[t.uuid]}},[u("button",{attrs:{title:t.name},on:{click:function(u){return u.preventDefault(),e.switchLanguage(t.uuid)}}},[e._v("\n        "+e._s(t.code)+"\n      ")])])})),0):e._e(),e._v(" "),e._t("default",null,{selected:e.selected})],2)}),[],!1,null,"12cabd62",null);t.default=s.exports},322:function(e,t,u){"use strict";u(313)}}]);