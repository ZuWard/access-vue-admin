webpackJsonp([18],{DIsE:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-content"},[i("div",{staticClass:"open-head-btn",on:{click:function(e){t.headShow=!t.headShow}}}),t._v(" "),i("el-row",{staticClass:"head",style:{height:t.headShow?"38px":0}},[i("el-input",{staticStyle:{"max-width":"500px"},attrs:{placeholder:"请输入标题"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),t._v(" "),i("el-button",{staticStyle:{"margin-left":"0px"},attrs:{type:"primary",icon:"el-icon-search"}},[t._v("\n      查询\n    ")])],1),t._v(" "),i("div",{staticClass:"article-list"},t._l(t.articleList.concat(t.articleList),function(e,n){return i("div",{key:n,staticClass:"item"},[i("div",{staticClass:"left"},[i("h1",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"des"},[t._v(t._s(e.des))]),t._v(" "),t._m(0,!0)]),t._v(" "),i("div",{staticClass:"right"},[i("img",{attrs:{src:e.cover}})])])}),0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"outer"},[i("div",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v("56")])]),t._v(" "),i("div",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v("26")])]),t._v(" "),i("div",[i("i",{staticClass:"iconfont"},[t._v("")]),t._v(" "),i("span",[t._v("\n              2020-07-13\n            ")])])])}]};var s=i("VU/8")({data:function(){return{headShow:!1,form:{title:"",cover:""},articleList:[{title:"写给开发者的一封信",des:"你好，亲爱的开发者（准开发者），很高兴你能使用到我们新上线的开发者社区。从立项到现在已经经历了两年的时间，7 月 28 日是它两周岁的生日，在这一天，我们荣幸的召开了新品发布会并发布了3.0。对于初入社区的你，这篇文章将是一个很好的导引，下面就带你玩转Developer。",cover:"https://www.qiniu.lingchen.kim/white-wooden-table-with-chairs-3597114.jpg"},{title:"Vue Seo 页面优化之 Nuxt 服务器渲染",des:"Vue Seo 服务器渲染的坑 Nuxt，分享一下我从创建到部署远程服务器的相关经验。",cover:"https://www.qiniu.lingchen.kim/adult-books-business-coffee-374016.jpg"},{title:"相同特性组件的一种优化思路",des:"本文介绍了面对大量特性相同组件的代码组织问题的一种思路，主要应用了以下知识点：require.context、render函数以及functional组件。",cover:"https://www.qiniu.lingchen.kim/FtaF6XbAXnsjRreIN-dlQaywt5ML"},{title:"脱离 Table 组件的 Render 苦海",des:"在具体开发过程中，有些使用变扭的地方（和无关），比如 Table 组件的自定义列实现复杂，可展开 Table 不想单独建一个 vue 文件等。 在项目开发过程中发现的小技巧分享给大家，可提高代码编写效率与可维护性。",cover:"https://www.qiniu.lingchen.kim/Fvp72xdJ8rIYseGlp-oNB2nHk3nm"}]}},mounted:function(){},methods:{search:function(){}}},n,!1,function(t){i("x1TJ")},"data-v-45bed776",null);e.default=s.exports},x1TJ:function(t,e){}});