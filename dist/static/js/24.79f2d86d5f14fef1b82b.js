webpackJsonp([24],{2:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.rdMark=void 0;var r=t(3),a=o(r);n.rdMark=a.default},3:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),a=o(r);n.default={functional:!0,render:function(e,n){var t="",o=!0,r=!1,i=void 0;try{for(var d,l=(0,a.default)(n.children);!(o=(d=l.next()).done);o=!0){var c=d.value;t+=c.text}}catch(e){r=!0,i=e}finally{try{!o&&l.return&&l.return()}finally{if(r)throw i}}return e("div",{class:["marked"],domProps:{innerHTML:window.marked(t)}})}}},251:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(2),r=t(5);n.default={data:function(){return{code:{one:'<rd-upload  \n    accept="image/*" \n    @add="addFileAction" \n    @remove="removeFileAction"\n></rd-upload>'}}},components:{rdUpload:r.rdUpload,rdMark:o.rdMark},methods:{addFileAction:function(e,n){console.log("add",e)},removeFileAction:function(e){console.log("remove",e)}}}},607:function(e,n,t){var o,r;o=t(251);var a=t(657);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=o},657:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;return n("div",{staticClass:"ex-content"},[n("h2")," ",n("div",{staticClass:"ex-card"},[n("rd-mark",["\n# Upload 上传组件\n\n## 示例\n        "])," ",n("p",[n("rd-upload",{attrs:{accept:"image/png,image/jpg,image/jpeg,image/gif"},on:{add:e.addFileAction,remove:e.removeFileAction}})])," ",n("rd-mark",["\n```\n"+e._s(e.code.one)+"\n```\n\n```\nmethods: {\n    addFileAction (newFile, list) {\n        console.log('add', file)\n        let formData = new FormData()\n        formData.append('file', newFile.file, newFile.file.name)\n        this.$http.post('/upload/attachment/imgup', formData)\n        .then(res => {\n            console.log('success')\n        })\n        .catch(console.log)\n    },\n    removeFileAction (item) {\n        console.log('remove', item)\n    }\n}\n```\n### API\n\n`Prop`：\n\n| 参数            | 类型   | 说明           |\n| :------------- |:-------|:--------------|\n| accept         | String | file 类型（.jpg,.png,.doc） |\n\n`Event`：\n\n| 参数            | 类型   | 参数             | 说明          |\n| :------------- |:-------|:----------------|:--------------|\n| add            | Event  | file, fileList  | *1            |\n| remove         | Event  | file            | 移除的文件对象  |\n\n *1. 第一个参数为新的文件对象，包含 file 和 src 属性，第二个为当前所有选择文件列表\n\n ```\n{\n    file: File, // File Object, \n    src: 'blob:http://127.0.0.1:9090/23565ed3-fbb8-4252-848f-24518022cbb2' // preview src\n}\n ```\n        "])])])},staticRenderFns:[]}}});