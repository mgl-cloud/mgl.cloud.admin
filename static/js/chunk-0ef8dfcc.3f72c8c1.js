(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ef8dfcc"],{"4b72":function(e,t,l){"use strict";l.d(t,"g",(function(){return a})),l.d(t,"f",(function(){return n})),l.d(t,"c",(function(){return r})),l.d(t,"d",(function(){return s})),l.d(t,"i",(function(){return i})),l.d(t,"e",(function(){return c})),l.d(t,"h",(function(){return u})),l.d(t,"b",(function(){return m})),l.d(t,"a",(function(){return f}));var o=l("b775");function a(e){return Object(o["a"])({url:"/system/tools/gen/tableList",method:"get",params:e})}function n(e){return Object(o["a"])({url:"/system/tools/gen/dataList",method:"get",params:e})}function r(e){return Object(o["a"])({url:"/system/tools/gen/columnList?tableId="+e,method:"get"})}function s(){return Object(o["a"])({url:"/system/tools/gen/relationTable",method:"get"})}function i(e){return Object(o["a"])({url:"/system/tools/gen/editSave",method:"put",data:e})}function c(e){return Object(o["a"])({url:"/system/tools/gen/importTableSave",method:"post",params:e})}function u(e){return Object(o["a"])({url:"/system/tools/gen/preview?tableId="+e,method:"get"})}function m(e){return Object(o["a"])({url:"/system/tools/gen/delete",method:"delete",data:{ids:e}})}function f(e){return Object(o["a"])({url:"/system/tools/gen/batchGenCode",method:"put",data:{ids:e}})}},5164:function(e,t,l){},"6a66":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{ref:"genInfoForm",attrs:{model:e.info,rules:e.rules,"label-width":"150px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"tplCategory"}},[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("生成模板")]),e._v(" "),l("el-select",{model:{value:e.info.tplCategory,callback:function(t){e.$set(e.info,"tplCategory",t)},expression:"info.tplCategory"}},[l("el-option",{attrs:{label:"单表（增删改查）",value:"crud"}}),e._v(" "),l("el-option",{attrs:{label:"树表（增删改查）",value:"tree"}})],1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"packageName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          生成包路径\n          "),l("el-tooltip",{attrs:{content:"生成在哪个包下，例如 gfast/app/system",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-input",{model:{value:e.info.packageName,callback:function(t){e.$set(e.info,"packageName",t)},expression:"info.packageName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"moduleName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          生成模块名\n          "),l("el-tooltip",{attrs:{content:"可理解为子系统名，例如 system",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-input",{model:{value:e.info.moduleName,callback:function(t){e.$set(e.info,"moduleName",t)},expression:"info.moduleName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"businessName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          生成业务名\n          "),l("el-tooltip",{attrs:{content:"可理解为功能英文名，例如 user",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-input",{model:{value:e.info.businessName,callback:function(t){e.$set(e.info,"businessName",t)},expression:"info.businessName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{prop:"functionName"}},[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          生成功能名\n          "),l("el-tooltip",{attrs:{content:"用作类描述，例如 用户",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-input",{model:{value:e.info.functionName,callback:function(t){e.$set(e.info,"functionName",t)},expression:"info.functionName"}})],1)],1)],1),e._v(" "),l("el-row",{directives:[{name:"show",rawName:"v-show",value:"tree"==e.info.tplCategory,expression:"info.tplCategory == 'tree'"}]},[l("h4",{staticClass:"form-header"},[e._v("其他信息")]),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          树编码字段\n          "),l("el-tooltip",{attrs:{content:"树显示的编码字段名， 如：dept_id",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeCode,callback:function(t){e.$set(e.info,"treeCode",t)},expression:"info.treeCode"}},e._l(e.info.columns,(function(e){return l("el-option",{key:e.htmlField,attrs:{label:e.columnName+"："+e.columnComment,value:e.htmlField}})})),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          树父编码字段\n          "),l("el-tooltip",{attrs:{content:"树显示的父编码字段名， 如：parent_Id",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeParentCode,callback:function(t){e.$set(e.info,"treeParentCode",t)},expression:"info.treeParentCode"}},e._l(e.info.columns,(function(e){return l("el-option",{key:e.htmlField,attrs:{label:e.columnName+"："+e.columnComment,value:e.htmlField}})})),1)],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",[l("span",{attrs:{slot:"label"},slot:"label"},[e._v("\n          树名称字段\n          "),l("el-tooltip",{attrs:{content:"树节点的显示名称字段名， 如：dept_name",placement:"top"}},[l("i",{staticClass:"el-icon-question"})])],1),e._v(" "),l("el-select",{attrs:{placeholder:"请选择"},model:{value:e.info.treeName,callback:function(t){e.$set(e.info,"treeName",t)},expression:"info.treeName"}},e._l(e.info.columns,(function(e){return l("el-option",{key:e.htmlField,attrs:{label:e.columnName+"："+e.columnComment,value:e.htmlField}})})),1)],1)],1)],1)],1)},a=[],n={name:"BasicInfoForm",props:{info:{type:Object,default:null}},data:function(){return{rules:{tplCategory:[{required:!0,message:"请选择生成模板",trigger:"blur"}],packageName:[{required:!0,message:"请输入生成包路径",trigger:"blur"}],moduleName:[{required:!0,message:"请输入生成模块名",trigger:"blur"}],businessName:[{required:!0,message:"请输入生成业务名",trigger:"blur"}],functionName:[{required:!0,message:"请输入生成功能名",trigger:"blur"}]}}},beforeCreate:function(){}},r=n,s=l("2877"),i=Object(s["a"])(r,o,a,!1,null,null,null);t["default"]=i.exports},"6ff4":function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{ref:"basicInfoForm",attrs:{model:e.info,rules:e.rules,"label-width":"150px"}},[l("el-row",[l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[l("el-input",{attrs:{placeholder:"请输入仓库名称"},model:{value:e.info.tableName,callback:function(t){e.$set(e.info,"tableName",t)},expression:"info.tableName"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.tableComment,callback:function(t){e.$set(e.info,"tableComment",t)},expression:"info.tableComment"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"实体类名称",prop:"className"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.className,callback:function(t){e.$set(e.info,"className",t)},expression:"info.className"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:12}},[l("el-form-item",{attrs:{label:"作者",prop:"functionAuthor"}},[l("el-input",{attrs:{placeholder:"请输入"},model:{value:e.info.functionAuthor,callback:function(t){e.$set(e.info,"functionAuthor",t)},expression:"info.functionAuthor"}})],1)],1),e._v(" "),l("el-col",{attrs:{span:24}},[l("el-form-item",{attrs:{label:"备注",prop:"remark"}},[l("el-input",{attrs:{type:"textarea",rows:3},model:{value:e.info.remark,callback:function(t){e.$set(e.info,"remark",t)},expression:"info.remark"}})],1)],1)],1)],1)},a=[],n={name:"BasicInfoForm",props:{info:{type:Object,default:null}},data:function(){return{rules:{tableName:[{required:!0,message:"请输入表名称",trigger:"blur"}],tableComment:[{required:!0,message:"请输入表描述",trigger:"blur"}],className:[{required:!0,message:"请输入实体类名称",trigger:"blur"}],functionAuthor:[{required:!0,message:"请输入作者",trigger:"blur"}]}}}},r=n,s=l("2877"),i=Object(s["a"])(r,o,a,!1,null,null,null);t["default"]=i.exports},"9b3f":function(e,t,l){"use strict";l("5164")},c6bd:function(e,t,l){"use strict";l.r(t);var o=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-card",[l("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"基本信息",name:"basic"}},[l("basic-info-form",{ref:"basicInfo",attrs:{info:e.info}})],1),e._v(" "),l("el-tab-pane",{attrs:{label:"字段信息",name:"cloum"}},[l("el-alert",{attrs:{title:"⚠️表字段中的created_by、updated_by、updated_at、deleted_at的字段在此列表中已经隐藏",type:"warning","show-icon":""}}),e._v(" "),l("el-table",{ref:"dragTable",attrs:{border:"",data:e.cloumns,"row-key":"columnId","max-height":e.tableHeight,width:"100%"}},[l("el-table-column",{attrs:{label:"序号",type:"index",width:"50",fixed:""}}),e._v(" "),l("el-table-column",{attrs:{label:"字段列名",prop:"columnName",width:"150",fixed:"","show-overflow-tooltip":!0}}),e._v(" "),l("el-table-column",{attrs:{label:"字段描述",width:"150",fixed:""},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.columnComment,callback:function(l){e.$set(t.row,"columnComment",l)},expression:"scope.row.columnComment"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{"class-name":"allowDrag",label:"物理类型",prop:"columnType",width:"120","show-overflow-tooltip":!0}}),e._v(" "),l("el-table-column",{attrs:{label:"go类型",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{model:{value:t.row.goType,callback:function(l){e.$set(t.row,"goType",l)},expression:"scope.row.goType"}},[l("el-option",{attrs:{label:"int",value:"int"}}),e._v(" "),l("el-option",{attrs:{label:"uint",value:"uint"}}),e._v(" "),l("el-option",{attrs:{label:"int64",value:"int64"}}),e._v(" "),l("el-option",{attrs:{label:"uint64",value:"uint64"}}),e._v(" "),l("el-option",{attrs:{label:"float64",value:"float64"}}),e._v(" "),l("el-option",{attrs:{label:"string",value:"string"}}),e._v(" "),l("el-option",{attrs:{label:"Time",value:"Time"}}),e._v(" "),l("el-option",{attrs:{label:"byte",value:"byte"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"go属性",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.goField,callback:function(l){e.$set(t.row,"goField",l)},expression:"scope.row.goField"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"json属性",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{model:{value:t.row.htmlField,callback:function(l){e.$set(t.row,"htmlField",l)},expression:"scope.row.htmlField"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"插入",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{attrs:{"true-label":"1",disabled:"1"==t.row.isPk||"created_at"==t.row.columnName},model:{value:t.row.isInsert,callback:function(l){e.$set(t.row,"isInsert",l)},expression:"scope.row.isInsert"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"编辑",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{attrs:{"true-label":"1",disabled:"1"==t.row.isPk||"created_at"==t.row.columnName},model:{value:t.row.isEdit,callback:function(l){e.$set(t.row,"isEdit",l)},expression:"scope.row.isEdit"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"列表",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{attrs:{"true-label":"1",disabled:t.row.htmlField==e.info.treeParentCode},model:{value:t.row.isList,callback:function(l){e.$set(t.row,"isList",l)},expression:"scope.row.isList"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"查询",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{attrs:{"true-label":"1",disabled:t.row.htmlField==e.info.treeParentCode},model:{value:t.row.isQuery,callback:function(l){e.$set(t.row,"isQuery",l)},expression:"scope.row.isQuery"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"查询方式",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{model:{value:t.row.queryType,callback:function(l){e.$set(t.row,"queryType",l)},expression:"scope.row.queryType"}},[l("el-option",{attrs:{label:"=",value:"EQ"}}),e._v(" "),l("el-option",{attrs:{label:"!=",value:"NE"}}),e._v(" "),l("el-option",{attrs:{label:">",value:"GT"}}),e._v(" "),l("el-option",{attrs:{label:">=",value:"GTE"}}),e._v(" "),l("el-option",{attrs:{label:"<",value:"LT"}}),e._v(" "),l("el-option",{attrs:{label:"<=",value:"LTE"}}),e._v(" "),l("el-option",{attrs:{label:"LIKE",value:"LIKE"}}),e._v(" "),l("el-option",{attrs:{label:"BETWEEN",value:"BETWEEN"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"必填",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-checkbox",{attrs:{"true-label":"1"},model:{value:t.row.isRequired,callback:function(l){e.$set(t.row,"isRequired",l)},expression:"scope.row.isRequired"}})]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"显示类型",width:"140"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{disabled:t.row.htmlField==e.info.treeParentCode},model:{value:t.row.htmlType,callback:function(l){e.$set(t.row,"htmlType",l)},expression:"scope.row.htmlType"}},[l("el-option",{attrs:{label:"文本框",value:"input"}}),e._v(" "),l("el-option",{attrs:{label:"文本域",value:"textarea"}}),e._v(" "),l("el-option",{attrs:{label:"下拉框",value:"select"}}),e._v(" "),l("el-option",{attrs:{label:"单选框",value:"radio"}}),e._v(" "),l("el-option",{attrs:{label:"复选框",value:"checkbox"}}),e._v(" "),l("el-option",{attrs:{label:"日期控件",value:"datetime"}})],1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"字典类型",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.row.dictType,callback:function(l){e.$set(t.row,"dictType",l)},expression:"scope.row.dictType"}},e._l(e.dictOptions,(function(t){return l("el-option",{key:t.dictType,attrs:{label:t.dictName,value:t.dictType}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.dictName))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.dictType))])])})),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"关联表",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:function(l){return e.handleChangeConfig(t.row,t.$index)}},model:{value:t.row.linkTableName,callback:function(l){e.$set(t.row,"linkTableName",l)},expression:"scope.row.linkTableName"}},e._l(e.relationTable,(function(t){return l("el-option",{key:t.tableName,attrs:{label:t.tableName,value:t.tableName}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.tableName))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.tableComment))])])})),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"关联表key",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.row.linkLabelId,callback:function(l){e.$set(t.row,"linkLabelId",l)},expression:"scope.row.linkLabelId"}},e._l(t.row.fkCol,(function(t){return l("el-option",{key:t.columnName,attrs:{label:t.columnName,value:t.htmlField}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.htmlField))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.columnComment))])])})),1)]}}])}),e._v(" "),l("el-table-column",{attrs:{label:"关联表value",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-select",{attrs:{clearable:"",filterable:"",placeholder:"请选择"},model:{value:t.row.linkLabelName,callback:function(l){e.$set(t.row,"linkLabelName",l)},expression:"scope.row.linkLabelName"}},e._l(t.row.fkCol,(function(t){return l("el-option",{key:t.columnName,attrs:{label:t.columnName,value:t.htmlField}},[l("span",{staticStyle:{float:"left"}},[e._v(e._s(t.htmlField))]),e._v(" "),l("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.columnComment))])])})),1)]}}])})],1)],1),e._v(" "),l("el-tab-pane",{attrs:{label:"生成信息",name:"genInfo"}},[l("gen-info-form",{ref:"genInfo",attrs:{info:e.info}})],1)],1),e._v(" "),l("el-form",{attrs:{"label-width":"100px"}},[l("el-form-item",{staticStyle:{"text-align":"center","margin-left":"-100px","margin-top":"10px"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),e._v(" "),l("el-button",{on:{click:function(t){return e.close()}}},[e._v("返回")])],1)],1)],1)},a=[],n=(l("ac6a"),l("5df3"),l("6762"),l("2fdb"),l("4b72")),r=l("ed45"),s=l("6ff4"),i=l("6a66"),c=l("53fe"),u=l.n(c),m={name:"GenEdit",components:{basicInfoForm:s["default"],genInfoForm:i["default"]},data:function(){return{activeName:"cloum",tableHeight:document.documentElement.scrollHeight-245+"px",cloumns:[],dictOptions:[],info:{},relationTable:[]}},beforeCreate:function(){var e=this,t=this.$route.query.tableId;t&&(Object(n["c"])(t).then((function(t){var l=[];l=t.data.rows.filter((function(e){return!["created_by","updated_by","updated_at","deleted_at"].includes(e.columnName)})),e.cloumns=l,e.info=t.data.info,e.info.columns=e.cloumns})),Object(r["f"])().then((function(t){e.dictOptions=t.data})),Object(n["d"])().then((function(t){e.relationTable=t.data})))},methods:{submitForm:function(){var e=this,t=this.$refs.basicInfo.$refs.basicInfoForm,l=this.$refs.genInfo.$refs.genInfoForm;Promise.all([t,l].map(this.getFormPromise)).then((function(o){var a=o.every((function(e){return!!e}));if(a){var r=Object.assign({},t.model,l.model);r.columns=e.cloumns,r.params={treeCode:r.treeCode,treeName:r.treeName,treeParentCode:r.treeParentCode},Object(n["i"])(r).then((function(t){e.msgSuccess(t.data),0===t.code&&e.close()}))}else e.msgError("表单校验未通过，请重新检查提交内容")}))},setInfoColumn:function(e){this.info.column=e},getFormPromise:function(e){return new Promise((function(t){e.validate((function(e){t(e)}))}))},close:function(){this.$store.dispatch("tagsView/delView",this.$route),this.$router.push({path:"/system/tools/gen",query:{t:Date.now()}})},handleChangeConfig:function(e,t){this.relationTable.filter((function(t){t.tableName===e.linkTableName&&(e.fkCol=t.columns)}))}},mounted:function(){var e=this,t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];u.a.create(t,{handle:".allowDrag",onEnd:function(t){var l=e.cloumns.splice(t.oldIndex,1)[0];for(var o in e.cloumns.splice(t.newIndex,0,l),e.cloumns)e.cloumns[o].sort=parseInt(o)+1}})}},f=m,d=(l("9b3f"),l("2877")),p=Object(d["a"])(f,o,a,!1,null,null,null);t["default"]=p.exports},ed45:function(e,t,l){"use strict";l.d(t,"e",(function(){return a})),l.d(t,"d",(function(){return n})),l.d(t,"a",(function(){return r})),l.d(t,"g",(function(){return s})),l.d(t,"f",(function(){return i})),l.d(t,"b",(function(){return c})),l.d(t,"c",(function(){return u}));var o=l("b775");function a(e){return Object(o["a"])({url:"/system/config/dict/type/list",method:"get",params:e})}function n(e){return Object(o["a"])({url:"/system/config/dict/type/one?dictId="+e,method:"get"})}function r(e){return Object(o["a"])({url:"/system/config/dict/type/add",method:"post",data:e})}function s(e){return Object(o["a"])({url:"/system/config/dict/type/edit",method:"put",data:e})}function i(){return Object(o["a"])({url:"/system/config/dict/type/optionSelect",method:"get"})}function c(e){return Object(o["a"])({url:"/system/config/dict/type/delete",method:"delete",data:{dictIds:e}})}function u(e){return Object(o["a"])({url:"/system/dict/type/export",method:"get",params:e})}}}]);