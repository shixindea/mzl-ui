import{r as _,a as r,o as c,x as u,f as i,c as j,d as t,F as w,b as e,w as p,t as S,j as l}from"./index.bbef421e.js";import{p as b}from"./preview.29eadb2e.js";/* empty css                                                            */const N={setup(m){const o=_({options:{fileds:[{field:"id",title:"ID",align:"center"},{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A",align:"center"},{field:"address",title:"\u5730\u5740",align:"center"},{field:"from",title:"\u7C4D\u8D2F",align:"center"}],datas:[{id:10,name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{id:13,name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{id:2,name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{id:11,name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]}}),{options:n}=o;return(d,a)=>{const s=r("m-table");return c(),u(s,{options:i(n)},null,8,["options"])}}},$=e("p",null,"\u5C0F\u7684",-1),v=e("p",null,"\u66F4\u5C0F\u7684",-1),z={setup(m){const o=_({options:{fileds:[{field:"id",title:"ID",align:"center"},{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A",align:"center"},{field:"address",title:"\u5730\u5740",align:"center"},{field:"from",title:"\u7C4D\u8D2F",align:"center"}],datas:[{id:10,name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{id:13,name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{id:2,name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{id:11,name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]}}),{options:n}=o;return(d,a)=>{const s=r("m-table");return c(),j(w,null,[$,t(s,{options:i(n),size:"small"},null,8,["options"]),v,t(s,{options:i(n),size:"mini"},null,8,["options"])],64)}}},I={style:{color:"#008dff"}},B=l("\u7F16\u8F91"),C=l("\u5220\u9664"),k={setup(m){const o=_({options:{fileds:[{field:"id",title:"ID",align:"center"},{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A",align:"center"},{field:"address",title:"\u5730\u5740",align:"center"},{field:"from",title:"\u7C4D\u8D2F",align:"center"},{field:"action",title:"\u64CD\u4F5C",align:"center"}],datas:[{id:10,name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{id:13,name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{id:2,name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{id:11,name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]},dorpoptions:[{label:"\u653E\u7F8A\u5A03",icon:"m-icon-file"},{label:"\u5F92\u5F1F",icon:"m-icon-keyboard-9"},{label:"\u519C\u6C11",icon:"m-icon-link"},{label:"\u5996\u7CBE",icon:"m-icon-file"}]}),n=(s,h)=>{console.log(s,h)},{options:d,dorpoptions:a}=o;return(s,h)=>{const g=r("m-dropdown"),y=r("m-button"),x=r("m-table");return c(),u(x,{options:i(d)},{"head-job":p(f=>[t(g,{title:f.scope.title,options:i(a),onChange:n,size:"mini"},null,8,["title","options"])]),id:p(f=>[e("div",I,S(f.scope.row.id),1)]),action:p(f=>[t(y,{type:"text",leftIcon:"m-icon-edit",size:"small",disabled:f.scope.rowIndex%2==0},{default:p(()=>[B]),_:2},1032,["disabled"]),t(y,{type:"text",leftIcon:"m-icon-ashbin",style:{color:"#ec3437"},size:"small"},{default:p(()=>[C]),_:1})]),_:1},8,["options"])}}},D={setup(m){const o=_({options:{fileds:[{field:"id",title:"ID",align:"center"},{field:"name",title:"\u59D3\u540D",align:"center"},{field:"job",title:"\u804C\u4E1A",align:"center"},{field:"address",title:"\u5730\u5740",align:"center"},{field:"from",title:"\u7C4D\u8D2F",align:"center"}],datas:[{id:10,name:"\u738B\u5C0F\u4E8C",job:"\u653E\u7F8A\u5A03",address:"\u5728\u90A3\u9065\u8FDC\u7684\u5C0F\u5C71\u6751",from:"\u6C11\u95F4\u6D41\u4F20\u6545\u4E8B"},{id:13,name:"\u732A\u516B\u6212",job:"\u5F92\u5F1F",address:"\u9AD8\u8001\u5E84",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"},{id:2,name:"\u5218\u8001\u56DB",job:"\u519C\u6C11",address:"\u53EF\u80FD\u5728\u4E2D\u56FD",from:"\u60F3\u8C61\u51FA\u6765\u7684"},{id:11,name:"\u767D\u9AA8\u7CBE",job:"\u5996\u7CBE",address:"\u897F\u6E38\u8BB0",from:"\u897F\u6E38\u8BB0\u795E\u8BDD\u6545\u4E8B"}]},headStyle:{color:"#fff",borderColor:"#4c94d1",backgroundColor:"rgba(25,66,120,.9)"},rowStyle:{borderColor:"#4c94d1"}}),{options:n,headStyle:d,rowStyle:a}=o;return(s,h)=>{const g=r("m-table");return c(),u(g,{options:i(n),headStyle:i(d),rowStyle:i(a),size:"mini"},null,8,["options","headStyle","rowStyle"])}}},A={setup(m){const o=_({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"options",type:"Object",red:"\u8868\u683C\u6570\u636E,fileds \u548C datas,fileds\u4F5C\u4E3A\u6574\u4F53\u7EA6\u675F\uFF08\u5177\u4F53\u89C1\u4E0B\u65B9API\uFF09\uFF0Cdatas\u4F5C\u4E3A\u6570\u636E\u5B9A\u4E49",sel:"\u2014\u2014",def:"{fileds:[], datas:[]}"},{attr:"size",type:"String",red:"\u8868\u683C\u5C3A\u5BF8\u5927\u5C0F",sel:"default / small / mini",def:"default"},{attr:"showHeader",type:"Boolean",red:"\u662F\u5426\u663E\u793A\u8868\u5934",sel:"true / false",def:"true"},{attr:"headStyle",type:"Object",red:"\u81EA\u5B9A\u4E49\u8868\u5934\u6837\u5F0F",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"rowStyle",type:"Object",red:"\u81EA\u5B9A\u4E49\u8868\u683C\u5185\u5BB9\u533A\u57DF\u7684\u6837\u5F0F",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"customClass",type:"String",red:"\u81EA\u5B9A\u4E49\u8868\u683C\u7EC4\u4EF6\u6574\u4F53\u7684Class\u7C7B\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:n}=o;return(d,a)=>{const s=r("m-table");return c(),u(s,{options:i(n),size:"small"},null,8,["options"])}}},O={setup(m){const o=_({options:{fileds:[{field:"attr",title:"\u53C2\u6570",align:"center"},{field:"type",title:"\u7C7B\u578B",align:"center"},{field:"red",title:"\u8BF4\u660E",align:"center",width:"350px"},{field:"sel",title:"\u53EF\u9009\u503C",align:"center"},{field:"def",title:"\u9ED8\u8BA4\u503C",align:"center"}],datas:[{attr:"field",type:"String",red:"\uFF08\u56FA\u5B9A\uFF09\u5B9A\u4E49\u8868\u683C\u5217\u7684\u53C2\u6570\u540D\uFF0C\u5BF9\u5E94datas\u6570\u636E\u4E0B\u67D0\u9879\u7684\u952E\u540D",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"title",type:"String",red:"\uFF08\u56FA\u5B9A\uFF09\u5B9A\u4E49\u8868\u5934\u663E\u793A\u7684\u540D\u79F0",sel:"\u2014\u2014",def:"\u2014\u2014"},{attr:"align",type:"String",red:"\u5B9A\u4E49\u8868\u683C\u5185\u5BB9\u5C55\u793A\u4F4D\u7F6E",sel:"left / center / right",def:"left"},{attr:"width",type:"String",red:"\u5B9A\u4E49\u8868\u683C\u5217\u7684\u5BBD\u5EA6,\u652F\u6301\u4EFB\u610F\u6D4F\u89C8\u5668\u652F\u6301\u7684\u5355\u4F4D(vw,%,px)",sel:"\u2014\u2014",def:"\u2014\u2014"}]}}),{options:n}=o;return(d,a)=>{const s=r("m-table");return c(),u(s,{options:i(n),size:"small"},null,8,["options"])}}},V={class:"markdown-body"},F=e("h1",null,"Table \u8868\u683C",-1),P=e("h4",null,"\u7528\u4E8E\u5C55\u793A\u591A\u5C42\u6B21\u7ED3\u6784\u7684\u6570\u636E\uFF0C\u53EF\u81EA\u5B9A\u4E49\u5E76\u4FDD\u6301\u9AD8\u5EA6\u7075\u6D3B",-1),T=e("br",null,null,-1),E=e("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),H=e("h4",null,[l("table \u8868\u683C\u57FA\u672C\u4F7F\u7528\u793A\u4F8B,\u9700\u8981\u4E00\u4E2A\u4E3B\u8981\u7684 "),e("em",null,"options"),l(" \u53C2\u6570\u3002")],-1),q={class:"componetnsBox"},G=e("h2",null,"\u4E0D\u540C\u5927\u5C0F",-1),J=e("h4",null,[l("\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A "),e("em",null,"size"),l(" \u6765\u786E\u5B9A\u8868\u683C\u7684\u4E0D\u540C\u5927\u5C0F\uFF0C\u4EE5\u9002\u914D\u4E0D\u540C\u7684\u5E94\u7528\u573A\u666F")],-1),K={class:"componetnsBox"},L=e("h2",null,"\u81EA\u5B9A\u4E49\u63D2\u69FD\u5185\u5BB9",-1),M=e("h4",null,[l("\u6839\u636E\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u683C\u7684\u63D2\u69FD\u5185\u5BB9\uFF0C\u63D2\u69FD\u63A5\u53D7\u9700\u8981\u5B9A\u4E49\u8868\u683C\u5217\u7684 "),e("em",null,"field"),l(" \u5E76\u8FD4\u56DE\u5F53\u524D\u884C\u7684\u6570\u636E "),e("em",null,"rowItem"),l(" \uFF0C\u5982\u679C\u662F\u5B9A\u4E49\u8868\u5934\uFF0C\u9700\u8981\u5728\u63D2\u69FD\u540D\u52A0\u4E0A "),e("em",null,"head-"),l(" \u524D\u7F00\u4F5C\u4E3A\u8BC6\u522B\u7B26")],-1),Q={class:"componetnsBox"},R=e("h2",null,"\u81EA\u5B9A\u4E49\u8868\u5934\u53CA\u8868\u683C\u6837\u5F0F",-1),U=e("h4",null,[l("\u4F7F\u7528 "),e("em",null,"headStyle"),l(" \u81EA\u5B9A\u4E49\u8868\u5934\u7684\u6837\u5F0F\uFF0C\u4F7F\u7528 "),e("em",null,"rowStyle"),l(" \u81EA\u5B9A\u4E49\u8868\u683C\u5185\u5BB9\u533A\u57DF\u7684\u6837\u5F0F")],-1),W={class:"componetnsBox"},X=e("h2",null,"Attributes \u53C2\u6570",-1),Y=e("br",null,null,-1),Z=e("h2",null,"fileds API",-1),ee=e("br",null,null,-1),le={setup(m,{expose:o}){return o({frontmatter:{}}),(d,a)=>(c(),j("div",V,[F,P,T,E,H,e("div",q,[t(N)]),t(b,{compName:"table",demoName:"demo1"}),G,J,e("div",K,[t(z)]),t(b,{compName:"table",demoName:"demo2"}),L,M,e("div",Q,[t(k)]),t(b,{compName:"table",demoName:"demo3"}),R,U,e("div",W,[t(D)]),t(b,{compName:"table",demoName:"demo4"}),X,t(A),Y,Z,t(O),ee]))}};export{le as default};
