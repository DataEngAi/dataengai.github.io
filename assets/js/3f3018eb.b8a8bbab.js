"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1750],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,f=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8945:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={slug:"datasqrl-01-release",title:"DataSQRL 0.1: A SQRL is born",authors:["daniel"],tags:["DataSQRL","release"]},i="DataSQRL 0.1: A SQRL is born",l={permalink:"/blog/datasqrl-01-release",editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-05-11-datasqrl-v0.1.md",source:"@site/blog/2023-05-11-datasqrl-v0.1.md",title:"DataSQRL 0.1: A SQRL is born",description:'" width="40%"/>',date:"2023-05-11T00:00:00.000Z",formattedDate:"May 11, 2023",tags:[{label:"DataSQRL",permalink:"/blog/tags/data-sqrl"},{label:"release",permalink:"/blog/tags/release"}],readingTime:1.63,hasTruncateMarker:!0,authors:[{name:"Daniel Henneberger",title:"Founder of DataSQRL",url:"https://github.com/henneberger",imageURL:"/img/headshots/daniel1.png",key:"daniel"}],frontMatter:{slug:"datasqrl-01-release",title:"DataSQRL 0.1: A SQRL is born",authors:["daniel"],tags:["DataSQRL","release"]},nextItem:{title:"The Two Core Data Problems for Developers: Transactional & Reactive",permalink:"/blog/types-of-data-problems-transactional-reactive"}},s={authorsImageUrls:[void 0]},u=[{value:"Our Vision",id:"our-vision",level:2},{value:"Simplicity Through SQL",id:"simplicity-through-sql",level:2},{value:"Flexible APIs",id:"flexible-apis",level:2},{value:"Our Road Ahead",id:"our-road-ahead",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/blog/datasqrlv0.1.jpeg",alt:"DataSQRL v0.1 release: A SQRL is Born >",width:"40%"}),(0,n.kt)("p",null,"After two long years of research, development, and teamwork, we're excited to announce DataSQRL 0.1! ",(0,n.kt)("a",{parentName:"p",href:"/"},"DataSQRL")," is a tool for building APIs from your data streams and datasets by defining your use case in a ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/sqrl"},"SQL dialect"),"."),(0,n.kt)("p",null,"This is our first \u201cofficial\u201d release of DataSQRL after many months of testing and bug-fixing. ",(0,n.kt)("br",null),"\nCheck out the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/releases/tag/v0.1.0"},"release notes")," on GitHub for a rundown of all the features."),(0,n.kt)("h2",{id:"our-vision"},"Our Vision"),(0,n.kt)("p",null,"Every time we wanted to build a new use case for our application and expose a data API, we found ourselves getting distracted. Distracted by all the orchestration, the technology choices, all the micro-decisions, and the 'plumbing' that goes into the modern data layer. So we up-leveled the abstraction and kept it simple. We ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/why-datasqrl"},"designed DataSQRL")," to handle those nitty-gritty details, so you could stay focused on what truly mattered - building cool things."),(0,n.kt)("h2",{id:"simplicity-through-sql"},"Simplicity Through SQL"),(0,n.kt)("p",null,"We've kept ",(0,n.kt)("a",{parentName:"p",href:"/docs/getting-started/concepts/sqrl"},"DataSQRL true to SQL"),", so it feels familiar and easy to use. We enhanced and modernized the language while maintaining the simplicity of SQL queries. No more wrestling with subqueries, window functions, or repetitive joins - just straightforward SQL."),(0,n.kt)("h2",{id:"flexible-apis"},"Flexible APIs"),(0,n.kt)("p",null,"One size doesn't fit all when it comes to APIs. We made DataSQRL non-opinionated, giving you the freedom to use your ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/api/graphql/design"},"preferred GraphQL schema")," and customize your query patterns with SQRL scripts."),(0,n.kt)("h2",{id:"our-road-ahead"},"Our Road Ahead"),(0,n.kt)("p",null,"We're seeking ",(0,n.kt)("a",{parentName:"p",href:"/community"},"your feedback")," to help shape the future of DataSQRL. Our current architecture supports a range of platforms, and we're working on making it more extensible and useful. Your input is invaluable as we continue to refine and expand DataSQRL's capabilities."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The only danger now is that your boss might think he can start coding again. ",(0,n.kt)("a",{parentName:"p",href:"/community"},"Join us")," as we explore the story behind DataSQRL, its impact on the world of data processing, and the exciting possibilities it holds for the future."))}p.isMDXComponent=!0}}]);