webpackJsonp([16],{Y7fs:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"page-content"},[l("table-bar",{attrs:{showTop:!1}},[l("div",{attrs:{slot:"top"},slot:"top"},[l("el-form",{attrs:{"label-width":"70px"}},[l("el-row",{attrs:{gutter:20}},[l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"名称："}},[l("el-input",{attrs:{placeholder:"名称"}})],1)],1),t._v(" "),l("el-col",{attrs:{span:4}},[l("el-form-item",{attrs:{label:"IP："}},[l("el-input",{attrs:{placeholder:"IP"}})],1)],1),t._v(" "),l("el-row",{staticStyle:{float:"right","margin-right":"10px"},attrs:{span:4}},[l("el-button",{attrs:{type:"primary"}},[t._v("搜索")]),t._v(" "),l("el-button",[t._v("重置")])],1)],1)],1)],1),t._v(" "),l("div",{attrs:{slot:"bottom"},slot:"bottom"},[l("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){return t.showDialog("add")}}},[t._v("新增")])],1)]),t._v(" "),l("tao-table",{attrs:{data:t.serverList,showPage:!1}},[l("el-table-column",{attrs:{label:"名称",prop:"name"}}),t._v(" "),l("el-table-column",{attrs:{label:"ip",prop:"ip"}}),t._v(" "),l("el-table-column",{attrs:{label:"端口",prop:"port"}}),t._v(" "),l("el-table-column",{attrs:{label:"账号",prop:"account"}}),t._v(" "),l("el-table-column",{attrs:{label:"状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-tag",{attrs:{type:1===e.row.status?"success":"info"}},[t._v("\n          "+t._s(1===e.row.status?"启用":"禁用")+"\n        ")])]}}])}),t._v(" "),l("el-table-column",{attrs:{label:"创建日期",prop:"create_time"}}),t._v(" "),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150px"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(e){return t.showDialog("edit")}}},[t._v("\n          编辑\n        ")]),t._v(" "),l("el-button",{staticStyle:{color:"#FA6962"},attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(l){return t.deleteUser(e)}}},[t._v("\n          删除\n        ")])]}}])})],1),t._v(" "),l("el-dialog",{attrs:{title:t.dialogTitle,width:"500px",visible:t.dvEdit,top:"30vh"},on:{"update:visible":function(e){t.dvEdit=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称"}},[l("el-input",{model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"ip"}},[l("el-input",{model:{value:t.form.mibile,callback:function(e){t.$set(t.form,"mibile",e)},expression:"form.mibile"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"端口"}},[l("el-input",{model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"账号"}},[l("el-switch",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.dvEdit=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var a=l("VU/8")({data:function(){return{dvEdit:!1,dialogTitle:"",form:{username:"",mibile:"",email:"",sex:1,dep:"",status:!0},value:"",serverList:[{name:"SuperMan",ip:"43.133.133.133",port:"9000",account:"root",status:1,create_time:"2021-1-5"}]}},mounted:function(){},methods:{showDialog:function(t){this.dvEdit=!0,this.dialogTitle="add"===t?"新增":"编辑"},onSubmit:function(){this.dvEdit=!1},deleteUser:function(t){var e=this;this.$confirm("您确定要删除当前服务器吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then(function(){e.serverList.splice(t.$index,1)}).catch(function(){})}}},o,!1,function(t){l("xZlx")},"data-v-591473e8",null);e.default=a.exports},xZlx:function(t,e){}});