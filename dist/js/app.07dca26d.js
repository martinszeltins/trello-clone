(function(t){function e(e){for(var a,s,u=e[0],i=e[1],l=e[2],f=0,d=[];f<u.length;f++)s=u[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var c=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"018a":function(t,e,n){"use strict";var a=n("f395"),r=n.n(a);r.a},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"158c":function(t,e,n){"use strict";var a=n("5410"),r=n.n(a);r.a},5410:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=(n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("7f7f"),n("2f62"));function o(){return Math.random().toString(16).slice(2)}function s(t){t.subscribe((function(t,e){return localStorage.setItem("boards",JSON.stringify(e.boards))}))}var u={name:"Workshop Board",columns:[{name:"todo",tasks:[{id:"1",name:"first task",description:"Take out the trash which is found on the fridge",userAssigned:null},{id:o(),name:"second task",description:"",userAssigned:null},{id:o(),name:"and thrid",description:"",userAssigned:null}]},{name:"in-progress",tasks:[{id:o(),name:"first task",description:"The bag is in the room",userAssigned:null}]},{name:"done",tasks:[{id:o(),name:"first task",description:"",userAssigned:null}]},{name:"do later",tasks:[{id:o(),name:"Do this thing later",description:"",userAssigned:null}]}]};function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=l(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,u=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return s=t.done,t},e:function(t){u=!0,o=t},f:function(){try{s||null==n.return||n.return()}finally{if(u)throw o}}}}function l(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}a["a"].use(r["a"]);var f=JSON.parse(localStorage.getItem("board"))||u,d=new r["a"].Store({plugins:[s],state:{board:f},mutations:{createTask:function(t,e){var n=e.tasks,a=e.name;n.push({name:a,id:o(),description:""})},updateTask:function(t,e){var n=e.task,r=e.key,o=e.value;a["a"].set(n,r,o)},moveTask:function(t,e){var n=e.fromTasks,a=e.toTasks,r=e.fromTaskIndex,o=e.toTaskIndex,s=n.splice(r,1)[0];a.splice(o,0,s)},moveColumn:function(t,e){var n=e.fromColumnIndex,a=e.toColumnIndex,r=t.board.columns,o=r.splice(n,1)[0];r.splice(a,0,o)},createColumn:function(t,e){var n=e.name;t.board.columns.push({name:n,tasks:[]})}},getters:{getTask:function(t){return function(e){var n,a=i(t.board.columns);try{for(a.s();!(n=a.n()).done;){var r,o=n.value,s=i(o.tasks);try{for(s.s();!(r=s.n()).done;){var u=r.value;if(u.id===e)return u}}catch(l){s.e(l)}finally{s.f()}}}catch(l){a.e(l)}finally{a.f()}}}}}),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},p=[],v=(n("034f"),n("2877")),k={},h=Object(v["a"])(k,m,p,!1,null,null,null),g=h.exports,b=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task-view"},[n("div",{staticClass:"flex flex-col flex-grow items-start justify-between px-4"},[n("input",{staticClass:"p-2 w-full mr-2 block text-xl font-bold",domProps:{value:t.task.name},on:{change:function(e){return t.updateTask(e,"name")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateTask(e,"name")}}}),n("textarea",{staticClass:"relative bg-transparent px-2 border mt-2 h-64 border-none leading-normal w-full",domProps:{value:t.task.description},on:{change:function(e){return t.updateTask(e,"description")}}})])])},T=[],C={methods:{updateTask:function(t,e){this.$store.commit("updateTask",{task:this.task,key:e,value:t.target.value})}},computed:{task:function(){return this.$store.getters.getTask(this.$route.params.id)}}},x=C,w=(n("b39f"),Object(v["a"])(x,y,T,!1,null,null,null)),_=w.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("div",{staticClass:"flex items-start"},[t._l(t.store.board.columns,(function(e,a){return n("div",{key:a,staticClass:"column",attrs:{draggable:""},on:{drop:function(n){return t.moveTaskOrColumn(n,e.tasks,a,t.taskIndex)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()},dragstart:function(e){return e.target!==e.currentTarget?null:t.pickupColumn(e,a)}}},[n("div",{staticClass:"flex items-center mb-2 font-bold"},[t._v("\n                "+t._s(e.name)+"\n            ")]),n("div",{staticClass:"list-reset"},[t._l(e.tasks,(function(r,o){return n("div",{key:r.id,staticClass:"task",attrs:{draggable:""},on:{click:function(e){return t.openTask(r)},dragstart:function(e){return t.pickupTask(e,o,a)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()},drop:function(n){return n.stopPropagation(),t.moveTaskOrColumn(n,e.tasks,a,o)}}},[n("span",{staticClass:"w-full flex-no-shrink font-bold"},[t._v("\n                        "+t._s(r.name)+"\n                    ")]),r.description?n("p",{staticClass:"w-full flex-no-shrink mt-1 text-sm"},[t._v("\n\n                        "+t._s(r.description)+"\n                    ")]):t._e()])})),n("input",{staticClass:"block p-2 w-full bg-transparent",attrs:{type:"text",placeholder:"+ Enter new task"},on:{keyup:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:t.createTask(n,e.tasks)}}})],2)])})),n("div",{staticClass:"column flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newColumnName,expression:"newColumnName"}],staticClass:"p-2 mr-2 flex-grow",attrs:{placeholder:"New Column Name",type:"text"},domProps:{value:t.newColumnName},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.createColumn(e)},input:function(e){e.target.composing||(t.newColumnName=e.target.value)}}})])],2),t.isTaskOpen?n("div",{staticClass:"task-bg",on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("router-view")],1):t._e()])},S=[],j={data:function(){return{store:this.$store.state,newColumnName:""}},methods:{createColumn:function(){this.$store.commit("createColumn",{name:this.newColumnName}),this.newColumnName=""},pickupTask:function(t,e,n){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("from-task-index",e),t.dataTransfer.setData("from-column-index",n),t.dataTransfer.setData("type","task")},moveTask:function(t,e,n){var a=t.dataTransfer.getData("from-column-index"),r=this.store.board.columns[a].tasks,o=t.dataTransfer.getData("from-task-index");this.$store.commit("moveTask",{fromTasks:r,toTasks:e,fromTaskIndex:o,toTaskIndex:n})},createTask:function(t,e){this.$store.commit("createTask",{name:t.target.value,tasks:e}),t.target.value=""},close:function(){this.$router.push({name:"board"})},openTask:function(t){this.$router.push({name:"task",params:{id:t.id}})},pickupColumn:function(t,e){t.dataTransfer.effectAllowed="move",t.dataTransfer.dropEffect="move",t.dataTransfer.setData("from-column-index",e),t.dataTransfer.setData("type","column")},moveTaskOrColumn:function(t,e,n,a){var r=t.dataTransfer.getData("type");if("task"==r){var o=void 0!==a?a:e.length;this.moveTask(t,e,o)}"column"==r&&this.moveColumn(t,n)},moveColumn:function(t,e){var n=t.dataTransfer.getData("from-column-index");this.$store.commit("moveColumn",{fromColumnIndex:n,toColumnIndex:e})}},computed:{isTaskOpen:function(){return"task"===this.$route.name}}},$=j,A=(n("158c"),Object(v["a"])($,O,S,!1,null,null,null)),I=A.exports;a["a"].use(b["a"]);var D=new b["a"]({mode:"history",base:"/",routes:[{path:"/",name:"board",component:I,children:[{path:"/task/:id",name:"task",component:_}]}]}),N=n("ecee"),E=n("c074"),P=n("ad3d");N["c"].add(E["a"]),a["a"].component("AppIcon",P["a"]);var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",class:t.typeClasses,attrs:{type:"button"}},[t._t("default")],2)},J=[],B={props:{type:{type:String}},computed:{typeClasses:function(){switch(this.type){case"danger":return"bg-red";default:return"bg-teal"}}}},U=B,W=(n("018a"),Object(v["a"])(U,M,J,!1,null,"4d8cab67",null)),q=W.exports;a["a"].component("AppButton",q),a["a"].config.productionTip=!1,new a["a"]({router:D,store:d,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},aedd:function(t,e,n){},b39f:function(t,e,n){"use strict";var a=n("aedd"),r=n.n(a);r.a},f395:function(t,e,n){}});
//# sourceMappingURL=app.07dca26d.js.map