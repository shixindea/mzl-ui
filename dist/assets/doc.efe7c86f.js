import{_ as d,a,o as l,x as c,r as f,f as h,c as u,b as e,d as o,j as s}from"./index.bbef421e.js";import{p as r}from"./preview.29eadb2e.js";/* empty css                                                            */const g={};function x(i,n){const t=a("m-optfile");return l(),c(t,{label:"\u9009\u62E9\u6587\u4EF6"})}var b=d(g,[["render",x]]);const y={};function v(i,n){const t=a("m-optfile");return l(),c(t,{label:"\u9009\u62E9\u6587\u4EF6",type:"primary",showFileList:""})}var w=d(y,[["render",v]]);const B={};function N(i,n){const t=a("m-optfile");return l(),c(t,{showFileList:"",targetType:"box",accept:".png,.jpg",multiple:""})}var L=d(B,[["render",N]]);const S={};function $(i,n){const t=a("m-optfile");return l(),c(t,{label:"\u5C06\u6587\u4EF6\u62D6\u62FD\u5230\u6B64\u5904\u6216\u70B9\u51FB\u9009\u62E9\u6587\u4EF6",showFileList:"",targetType:"box",multiple:"",size:"big",drop:"",icon:"m-icon-shangchuan"})}var F=d(S,[["render",$]]);const T={};function j(i,n){const t=a("m-optfile");return l(),c(t,{label:"\u9009\u62E9\u6587\u4EF6",imgListShow:"",targetType:"box",multiple:"",drop:"",accept:".png,.jpg,.gif,.jpeg",icon:"m-icon-shangchuan"})}var k=d(T,[["render",j]]);const z={setup(i){const n=f({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"label",type:"String",red:"\u63D0\u793A\u6587\u5B57\u4FE1\u606F",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"targetType",type:"String",red:"\u7EC4\u4EF6\u5C55\u73B0\u65B9\u5F0F",sel:"btn / box",def:"btn"},{attr:"type",type:"String",red:"\u6309\u94AE\u7C7B\u578B\u7684type\uFF0C\u652F\u6301button\u7684type\u7684\u7C7B\u578B\uFF0Ccustom\u9664\u5916",sel:"default / primary / success / danger / warning / dashed / text",def:"default"},{attr:"size",type:"String",red:"\u76D2\u5B50\u7C7B\u578B\u65F6\u7EC4\u4EF6\u5927\u5C0F\uFF0CtargetType\u4E3Abox\u65F6\u6709\u6548",sel:"big",def:"\u2014\u2014"},{attr:"accept",type:"String",red:"\u63A5\u53D7\u7684\u6587\u4EF6\u7C7B\u578B",sel:"\u53C2\u8003\u539F\u751Finput=file\u7684accept\u5C5E\u6027",def:"\u2014\u2014"},{attr:"multiple",type:"Boolean",red:"\u662F\u5426\u542F\u7528\u591A\u9009",sel:"true / false",def:"false"},{attr:"icon",type:"String",red:"\u81EA\u5B9A\u4E49\u56FE\u6807",sel:"\u53C2\u8003\u56FE\u6807\u5E93",def:"m-icon-add-bold"},{attr:"showFileList",type:"Boolean",red:"\u662F\u5426\u663E\u793A\u6587\u4EF6\u4E0A\u4F20\u5217\u8868",sel:"true / false",def:"false"},{attr:"fileList",type:"Array",red:"\u6587\u4EF6\u4E0A\u4F20\u5217\u8868\uFF0C\u4F8B\uFF1A[{name:1.png},{name:2.png}]\uFF0CimgListShow\u4E3Afalse\u65F6\u6709\u6548",sel:"\u2014\u2014",def:"[]"},{attr:"drop",type:"Boolean",red:"\u662F\u5426\u542F\u7528\u62D6\u62FD\u529F\u80FD",sel:"true / false",def:"false"},{attr:"imgListShow",type:"Boolean",red:"\u662F\u5426\u9884\u89C8\u5DF2\u4E0A\u4F20\u56FE\u7247\uFF0CtargetType\u4E3Abox\u4E14showFileList\u4E3Afalse\u65F6\u6709\u6548",sel:"true / false",def:"false"},{attr:"customClass",type:"String",red:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7C7B\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:t}=n;return(p,m)=>{const _=a("m-table");return l(),c(_,{options:h(t),size:"small"},null,8,["options"])}}},C={setup(i){const n=f({options:{fileds:[{field:"name",title:"\u4E8B\u4EF6\u540D",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"attr",title:"\u56DE\u8C03\u53C2\u6570",align:"center"},{field:"exm",title:"\u793A\u4F8B",align:"center",width:"350px"}],datas:[{name:"beforeChange",red:"\u6587\u4EF6\u9009\u62E9\u4E4B\u524D",attr:"()",exm:'beforeChange = () =>{console.log("\u4E4B\u524D")}'},{name:"change",red:"\u6587\u4EF6\u9009\u62E9\u4E4B\u4E4B\u540E",attr:"(value:files)",exm:"change = (files) =>{console.log(files)}"}]}}),{options:t}=n;return(p,m)=>{const _=a("m-table");return l(),c(_,{options:h(t),size:"small"},null,8,["options"])}}},V={class:"markdown-body"},A=e("h1",null,"OptFile \u6587\u4EF6\u9009\u62E9",-1),E=e("h4",null,"\u5E38\u7528\u4E8E\u9009\u62E9\u6587\u4EF6\u8FDB\u884C\u4E0A\u4F20\u524D\u7684\u64CD\u4F5C",-1),O=e("br",null,null,-1),q=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),D=e("h4",null,"OptFile \u7EC4\u4EF6\u57FA\u672C\u4F7F\u7528\u793A\u4F8B\u3002",-1),G={class:"componetnsBox"},H=e("h2",null,"\u663E\u793A\u5DF2\u9009\u6587\u4EF6",-1),I=e("h4",null,[s("\u901A\u8FC7 "),e("em",null,"showFileList"),s(" \u542F\u7528\u3002")],-1),J={class:"componetnsBox"},K=e("h2",null,"\u5C55\u793A\u65B9\u5F0F",-1),M=e("h4",null,[s("\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"targetType"),s(" \u4E3A "),e("em",null,"box"),s(" \u5207\u6362\u3002")],-1),P={class:"componetnsBox"},Q=e("h2",null,"\u5F00\u542F\u62D6\u62FD",-1),R=e("h4",null,[s("\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"drop"),s(" \u542F\u7528\u3002")],-1),U={class:"componetnsBox"},W=e("h2",null,"\u9884\u89C8\u5DF2\u4E0A\u4F20\u56FE\u7247",-1),X=e("h4",null,[s("\u901A\u8FC7\u8BBE\u7F6E "),e("em",null,"imgListShow"),s(" \u542F\u7528\u3002")],-1),Y={class:"componetnsBox"},Z=e("h2",null,"Attributes \u53C2\u6570",-1),ee=e("br",null,null,-1),te=e("h2",null,"Event \u4E8B\u4EF6",-1),oe=e("br",null,null,-1),ie={setup(i,{expose:n}){return n({frontmatter:{}}),(p,m)=>(l(),u("div",V,[A,E,O,q,D,e("div",G,[o(b)]),o(r,{compName:"optfile",demoName:"demo1"}),H,I,e("div",J,[o(w)]),o(r,{compName:"optfile",demoName:"demo2"}),K,M,e("div",P,[o(L)]),o(r,{compName:"optfile",demoName:"demo3"}),Q,R,e("div",U,[o(F)]),o(r,{compName:"optfile",demoName:"demo4"}),W,X,e("div",Y,[o(k)]),o(r,{compName:"optfile",demoName:"demo5"}),Z,o(z),ee,te,o(C),oe]))}};export{ie as default};
