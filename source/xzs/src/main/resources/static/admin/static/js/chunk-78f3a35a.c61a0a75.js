(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f3a35a"],{"25f0":function(e,t,i){"use strict";var n=i("5e77").PROPER,r=i("cb2d"),o=i("825a"),s=i("577e"),a=i("d039"),c=i("90d8"),l="toString",u=RegExp.prototype,d=u[l],f=a((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),m=n&&d.name!=l;(f||m)&&r(RegExp.prototype,l,(function(){var e=o(this),t=s(e.source),i=s(c(e));return"/"+t+"/"+i}),{unsafe:!0})},"294d":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticStyle:{"line-height":"1.8"}},[1==e.qType||2==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}}),i("div",{staticClass:"q-content"},e._l(e.question.items,(function(t){return i("span",{key:t.id,staticClass:"q-item-contain"},[i("span",{staticClass:"q-item-prefix"},[e._v(e._s(t.prefix))]),i("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),0)]):3==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",staticStyle:{display:"inline","margin-right":"10px"},domProps:{innerHTML:e._s(e.question.title)}}),i("span",[e._v("（")]),e._l(e.question.items,(function(t){return i("span",{key:t.id},[i("span",{staticClass:"q-item-content",domProps:{innerHTML:e._s(t.content)}})])})),i("span",[e._v("）")])],2):4==e.qType||5==e.qType?i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.qLoading,expression:"qLoading"}]},[i("div",{staticClass:"q-title",domProps:{innerHTML:e._s(e.question.title)}})]):i("div")])},r=[],o=(i("a9e3"),{name:"QuestionShow",props:{question:{type:Object,default:function(){return{}}},qLoading:{type:Boolean,default:!1},qType:{type:Number,default:0}},methods:{}}),s=o,a=i("2877"),c=Object(a["a"])(s,n,r,!1,null,null,null);t["a"]=c.exports},"2ac8":function(e,t,i){"use strict";var n=i("b775");t["a"]={pageList:function(e){return Object(n["a"])("/api/admin/question/page",e)},edit:function(e){return Object(n["a"])("/api/admin/question/edit",e)},select:function(e){return Object(n["a"])("/api/admin/question/select/"+e)},deleteQuestion:function(e){return Object(n["a"])("/api/admin/question/delete/"+e)}}},"2c3e":function(e,t,i){var n=i("da84"),r=i("83ab"),o=i("9f7f").MISSED_STICKY,s=i("c6b6"),a=i("edd0"),c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;r&&o&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},"466d":function(e,t,i){"use strict";var n=i("c65b"),r=i("d784"),o=i("825a"),s=i("50c4"),a=i("577e"),c=i("1d80"),l=i("dc4a"),u=i("8aa5"),d=i("14c3");r("match",(function(e,t,i){return[function(t){var i=c(this),r=void 0==t?void 0:l(t,e);return r?n(r,t,i):new RegExp(t)[e](a(i))},function(e){var n=o(this),r=a(e),c=i(t,n,r);if(c.done)return c.value;if(!n.global)return d(n,r);var l=n.unicode;n.lastIndex=0;var f,m=[],p=0;while(null!==(f=d(n,r))){var h=a(f[0]);m[p]=h,""===h&&(n.lastIndex=u(r,s(n.lastIndex),l)),p++}return 0===p?null:m}]}))},"4d63":function(e,t,i){var n=i("83ab"),r=i("da84"),o=i("e330"),s=i("94ca"),a=i("7156"),c=i("9112"),l=i("241c").f,u=i("3a9b"),d=i("44e7"),f=i("577e"),m=i("90d8"),p=i("9f7f"),h=i("aeb0"),g=i("cb2d"),b=i("d039"),v=i("1a2d"),q=i("69f3").enforce,y=i("2626"),E=i("b622"),x=i("fce3"),w=i("107c"),j=E("match"),k=r.RegExp,C=k.prototype,L=r.SyntaxError,S=o(C.exec),_=o("".charAt),I=o("".replace),T=o("".indexOf),R=o("".slice),$=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,O=/a/g,N=/a/g,U=new k(O)!==O,V=p.MISSED_STICKY,F=p.UNSUPPORTED_Y,P=n&&(!U||V||x||w||b((function(){return N[j]=!1,k(O)!=O||k(N)==N||"/a/i"!=k(O,"i")}))),z=function(e){for(var t,i=e.length,n=0,r="",o=!1;n<=i;n++)t=_(e,n),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),r+=t):r+="[\\s\\S]":r+=t+_(e,++n);return r},M=function(e){for(var t,i=e.length,n=0,r="",o=[],s={},a=!1,c=!1,l=0,u="";n<=i;n++){if(t=_(e,n),"\\"===t)t+=_(e,++n);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:S($,R(e,n+1))&&(n+=2,c=!0),r+=t,l++;continue;case">"===t&&c:if(""===u||v(s,u))throw new L("Invalid capture group name");s[u]=!0,o[o.length]=[u,l],c=!1,u="";continue}c?u+=t:r+=t}return[r,o]};if(s("RegExp",P)){for(var Q=function(e,t){var i,n,r,o,s,l,p=u(C,this),h=d(e),g=void 0===t,b=[],v=e;if(!p&&h&&g&&e.constructor===Q)return e;if((h||u(C,e))&&(e=e.source,g&&(t=m(v))),e=void 0===e?"":f(e),t=void 0===t?"":f(t),v=e,x&&"dotAll"in O&&(n=!!t&&T(t,"s")>-1,n&&(t=I(t,/s/g,""))),i=t,V&&"sticky"in O&&(r=!!t&&T(t,"y")>-1,r&&F&&(t=I(t,/y/g,""))),w&&(o=M(e),e=o[0],b=o[1]),s=a(k(e,t),p?this:C,Q),(n||r||b.length)&&(l=q(s),n&&(l.dotAll=!0,l.raw=Q(z(e),i)),r&&(l.sticky=!0),b.length&&(l.groups=b)),e!==v)try{c(s,"source",""===v?"(?:)":v)}catch(y){}return s},A=l(k),H=0;A.length>H;)h(Q,k,A[H++]);C.constructor=Q,Q.prototype=C,g(r,"RegExp",Q)}y("RegExp")},"63f4":function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("script",{staticStyle:{height:"300px"},attrs:{id:e.randomId,type:"text/plain"}})])},r=[],o={name:"UE",props:{value:{default:function(){return""}}},data:function(){return{randomId:"editor_"+1e17*Math.random(),instance:null,ready:!1}},watch:{value:function(e,t){null!=e&&this.ready&&(this.instance=UE.getEditor(this.randomId),this.instance.setContent(e))}},mounted:function(){this.initEditor()},beforeDestroy:function(){null!==this.instance&&this.instance.destroy&&this.instance.destroy()},methods:{initEditor:function(){var e=this;this.$nextTick((function(){e.instance=UE.getEditor(e.randomId),e.instance.addListener("ready",(function(){e.ready=!0,e.$emit("ready",e.instance)}))}))},getUEContent:function(){return this.instance.getContent()},setText:function(e){this.instance=UE.getEditor(this.randomId),this.instance.setContent(e)}}},s=o,a=i("2877"),c=Object(a["a"])(s,n,r,!1,null,null,null);t["a"]=c.exports},"6d4c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.formLoading,expression:"formLoading"}],ref:"form",attrs:{model:e.form,"label-width":"100px",rules:e.rules}},[i("el-form-item",{attrs:{label:"年级：",prop:"gradeLevel",required:""}},[i("el-select",{attrs:{placeholder:"年级"},on:{change:e.levelChange},model:{value:e.form.gradeLevel,callback:function(t){e.$set(e.form,"gradeLevel",t)},expression:"form.gradeLevel"}},e._l(e.levelEnum,(function(e){return i("el-option",{key:e.key,attrs:{value:e.key,label:e.value}})})),1)],1),i("el-form-item",{attrs:{label:"学科：",prop:"subjectId",required:""}},[i("el-select",{attrs:{placeholder:"学科"},model:{value:e.form.subjectId,callback:function(t){e.$set(e.form,"subjectId",t)},expression:"form.subjectId"}},e._l(e.subjectFilter,(function(e){return i("el-option",{key:e.id,attrs:{value:e.id,label:e.name+" ( "+e.levelName+" )"}})})),1)],1),i("el-form-item",{attrs:{label:"题干：",prop:"title",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"title")}},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),i("el-form-item",{attrs:{label:"填空答案：",required:""}},e._l(e.form.items,(function(t){return i("el-form-item",{key:t.prefix,staticClass:"question-item-label",attrs:{label:t.prefix,"label-width":"50px"}},[i("el-input",{staticClass:"question-item-content-input",staticStyle:{width:"80%"},on:{focus:function(i){return e.inputClick(t,"content")}},model:{value:t.content,callback:function(i){e.$set(t,"content",i)},expression:"item.content"}}),i("span",{staticClass:"question-item-span"},[e._v("分数：")]),i("el-input-number",{attrs:{precision:1,step:1,max:100},model:{value:t.score,callback:function(i){e.$set(t,"score",i)},expression:"item.score"}})],1)})),1),i("el-form-item",{attrs:{label:"解析：",prop:"analyze",required:""}},[i("el-input",{on:{focus:function(t){return e.inputClick(e.form,"analyze")}},model:{value:e.form.analyze,callback:function(t){e.$set(e.form,"analyze",t)},expression:"form.analyze"}})],1),i("el-form-item",{attrs:{label:"分数：",prop:"score",required:""}},[i("el-input-number",{attrs:{precision:1,step:1,max:100},model:{value:e.form.score,callback:function(t){e.$set(e.form,"score",t)},expression:"form.score"}})],1),i("el-form-item",{attrs:{label:"难度：",required:""}},[i("el-rate",{staticClass:"question-item-rate",model:{value:e.form.difficult,callback:function(t){e.$set(e.form,"difficult",t)},expression:"form.difficult"}})],1),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("提交")]),i("el-button",{on:{click:e.resetForm}},[e._v("重置")]),i("el-button",{attrs:{type:"success"},on:{click:e.showQuestion}},[e._v("预览")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.richEditor.dialogVisible,"append-to-body":"","close-on-click-modal":!1,"show-close":!1,center:""},on:{"update:visible":function(t){return e.$set(e.richEditor,"dialogVisible",t)}}},[i("Ueditor",{on:{ready:e.editorReady}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.editorConfirm}},[e._v("确 定")]),i("el-button",{on:{click:function(t){e.richEditor.dialogVisible=!1}}},[e._v("取 消")])],1)],1),i("el-dialog",{staticStyle:{width:"100%",height:"100%"},attrs:{visible:e.questionShow.dialog},on:{"update:visible":function(t){return e.$set(e.questionShow,"dialog",t)}}},[i("QuestionShow",{attrs:{qType:e.questionShow.qType,question:e.questionShow.question,qLoading:e.questionShow.loading}})],1)],1)},r=[],o=i("5530"),s=(i("4d63"),i("c607"),i("ac1f"),i("2c3e"),i("25f0"),i("466d"),i("d3b7"),i("159b"),i("00b4"),i("4de4"),i("294d")),a=i("63f4"),c=i("2f62"),l=i("2ac8"),u={components:{Ueditor:a["a"],QuestionShow:s["a"]},data:function(){return{form:{id:null,questionType:4,gradeLevel:null,subjectId:null,title:"",items:[],analyze:"",correct:"",score:"",difficult:0},subjectFilter:null,formLoading:!1,rules:{gradeLevel:[{required:!0,message:"请选择年级",trigger:"change"}],subjectId:[{required:!0,message:"请选择学科",trigger:"change"}],title:[{required:!0,message:"请输入题干",trigger:"blur"}],analyze:[{required:!0,message:"请输入解析",trigger:"blur"}],score:[{required:!0,message:"请输入分数",trigger:"blur"}]},richEditor:{dialogVisible:!1,object:null,parameterName:"",instance:null},questionShow:{qType:0,dialog:!1,question:null,loading:!1}}},created:function(){var e=this.$route.query.id,t=this;this.initSubject((function(){t.subjectFilter=t.subjects})),e&&0!==parseInt(e)&&(t.formLoading=!0,l["a"].select(e).then((function(e){t.form=e.response,t.formLoading=!1})))},methods:Object(o["a"])(Object(o["a"])({editorReady:function(e){this.richEditor.instance=e;var t=this.richEditor.object[this.richEditor.parameterName];this.richEditor.instance.setContent(t),this.richEditor.instance.focus(!0)},inputClick:function(e,t){this.richEditor.object=e,this.richEditor.parameterName=t,this.richEditor.dialogVisible=!0},editorConfirm:function(){var e=this.richEditor.instance.getContent();"title"===this.richEditor.parameterName?this.questionItemReset(e)&&(this.richEditor.object[this.richEditor.parameterName]=e,this.richEditor.dialogVisible=!1):(this.richEditor.object[this.richEditor.parameterName]=e,this.richEditor.dialogVisible=!1)},questionItemReset:function(e){var t=new RegExp('<span class="gapfilling-span (.*?)">(.*?)<\\/span>',"g"),i=this,n=[],r=e.match(t);return null===r?(this.$message.error("请插入填空"),!1):(r.forEach((function(e,t){var i=/<span class="gapfilling-span (.*?)">(.*?)<\/span>/;i.test(e),n.push({id:null,itemUuid:RegExp.$1,prefix:RegExp.$2,content:"",score:"0"})})),n.forEach((function(e){i.form.items.some((function(t,i){if(t.itemUuid===e.itemUuid)return e.content=t.content,e.id=t.id,e.score=t.score,!0}))})),i.form.items=n,!0)},submitForm:function(){var e=this,t=this;this.$refs.form.validate((function(i){if(!i)return!1;e.formLoading=!0,l["a"].edit(e.form).then((function(i){1===i.code?(t.$message.success(i.message),t.delCurrentView(t).then((function(){t.$router.push("/exam/question/list")}))):(t.$message.error(i.message),e.formLoading=!1)})).catch((function(t){e.formLoading=!1}))}))},levelChange:function(){var e=this;this.form.subjectId=null,this.subjectFilter=this.subjects.filter((function(t){return t.level===e.form.gradeLevel}))},showQuestion:function(){this.questionShow.dialog=!0,this.questionShow.qType=this.form.questionType,this.questionShow.question=this.form},resetForm:function(){var e=this.form.id;this.$refs["form"].resetFields(),this.form={id:null,questionType:4,gradeLevel:null,subjectId:null,title:"",items:[],analyze:"",correct:"",score:"",difficult:0},this.form.id=e}},Object(c["b"])("exam",{initSubject:"initSubject"})),Object(c["b"])("tagsView",{delCurrentView:"delCurrentView"})),computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])("enumItem",["enumFormat"])),Object(c["e"])("enumItem",{questionTypeEnum:function(e){return e.exam.question.typeEnum},levelEnum:function(e){return e.user.levelEnum}})),Object(c["e"])("exam",{subjects:function(e){return e.subjects}}))},d=u,f=i("2877"),m=Object(f["a"])(d,n,r,!1,null,null,null);t["default"]=m.exports},"90d8":function(e,t,i){var n=i("c65b"),r=i("1a2d"),o=i("3a9b"),s=i("ad6d"),a=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in a||r(e,"flags")||!o(a,e)?t:n(s,e)}},c607:function(e,t,i){var n=i("da84"),r=i("83ab"),o=i("fce3"),s=i("c6b6"),a=i("edd0"),c=i("69f3").get,l=RegExp.prototype,u=n.TypeError;r&&o&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===s(this))return!!c(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},edd0:function(e,t,i){var n=i("13d2"),r=i("9bf2");e.exports=function(e,t,i){return i.get&&n(i.get,t,{getter:!0}),i.set&&n(i.set,t,{setter:!0}),r.f(e,t,i)}}}]);