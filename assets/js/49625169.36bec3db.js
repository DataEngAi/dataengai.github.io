"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2715],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),p=n,m=c["".concat(l,".").concat(p)]||c[p]||h[p]||r;return a?o.createElement(m,i(i({ref:t},u),{},{components:a})):o.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=a[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6791:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=a(7462),n=(a(7294),a(3905));const r={title:"When to use DataSQRL"},i="When Should I Use DataSQRL?",s={unversionedId:"getting-started/concepts/when-datasqrl",id:"getting-started/concepts/when-datasqrl",title:"When to use DataSQRL",description:'" width="40%"/>',source:"@site/docs/getting-started/concepts/when-datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/when-datasqrl",permalink:"/docs/getting-started/concepts/when-datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/concepts/when-datasqrl.md",tags:[],version:"current",frontMatter:{title:"When to use DataSQRL"},sidebar:"docs",previous:{title:"Why Use DataSQRL?",permalink:"/docs/getting-started/concepts/why-datasqrl"},next:{title:"DataSQRL Tutorials",permalink:"/docs/getting-started/tutorials/overview"}},l={},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Full Version",id:"full-version",level:2},{value:"Database",id:"database",level:2},{value:"Data Warehouse / Lake",id:"data-warehouse--lake",level:2},{value:"Custom Data service",id:"custom-data-service",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Wait, but what about X New Technology?",id:"wait-but-what-about-x-new-technology",level:2}],u={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"when-should-i-use-datasqrl"},"When Should I Use DataSQRL?"),(0,n.kt)("img",{src:"/img/reference/datasqrl_decision_tree.svg",alt:"When to use DataSQRL >",width:"40%"}),(0,n.kt)("p",null,"DataSQRL is a build tool for event-driven microservices, streaming applications, and data services. But what exactly are those and how do I know if my application would benefit from DataSQRL? This page breaks that down for you."),(0,n.kt)("h2",{id:"tldr"},"TL;DR"),(0,n.kt)("p",null,"If you are building a CRUD app or need ACID transactions, use a database. ",(0,n.kt)("br",null),"\nIf you need a responsive API or react to data in realtime, use DataSQRL. ",(0,n.kt)("br",null),"\nOtherwise, use a data warehouse or data lake."),(0,n.kt)("h2",{id:"full-version"},"Full Version"),(0,n.kt)("p",null,"The figure on the left shows a decision tree for determining whether your project, application, or service will benefit from DataSQRL:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If you are building a ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," application or need ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ACID"},"ACID")," transaction, then use a database with an ORM library."),(0,n.kt)("li",{parentName:"ol"},"If you need to expose the result data through an API or trigger actions in realtime based on incoming data, start building a prototype of your data API in DataSQRL. With DataSQRL you can build  data APIs in a fraction of the time and iterate much quicker than building custom data services. If you find DataSQRL lacking of features you need, you can still build a custom data service once you have narrowed down your requirements."),(0,n.kt)("li",{parentName:"ol"},"If DataSQRL is good enough for your use case, you can take your project to production without much extra work."),(0,n.kt)("li",{parentName:"ol"},"If you ",(0,n.kt)("strong",{parentName:"li"},"don't")," need an API for your data and delayed responses to incoming data are acceptable, then use a data warehouse or data lake.")),(0,n.kt)("p",null,"As with any heuristic, this decision tree simplifies the decision process, and it doesn't account for specifics of your project. You can find more details for each of the decision points below."),(0,n.kt)("h2",{id:"database"},"Database"),(0,n.kt)("p",null,"Here is the deal: For simple data storage and retrieval, a database is good enough. Databases have been around for decades, are very robust, and widely available. If your data is already in a database (or it's trivial to get it there), then the database should be your first choice."),(0,n.kt)("p",null,"If you cannot directly access the database or are concerned about adding another workload to it, then DataSQRL makes it easy to set up your data service on separate infrastructure with that database as the source."),(0,n.kt)("p",null,"If your data needs are complex enough that a database will be taxed significantly or find yourself deep in the database weeds (e.g. you are implementing stored procedures, hand tuning queries, denormalizing data, etc), then give DataSQRL a try. DataSQRL is specifically designed to build efficient data services around your database with little effort and can save you a lot of time and headache. Before you go down the path of implementing a custom data service, give DataSQRL a try."),(0,n.kt)("p",null,"You also want to start with DataSQRL if you need to integrate data from multiple sources. Doing so in a database is a lot of pain. DataSQRL's data connectors, import manager, automatic data type discovery, and schema management will save you a lot of time and manual effort."),(0,n.kt)("p",null,"In summary, use DataSQRL when you need more than just a database. Otherwise, use a database with an ORM or database abstraction library for your preferred programming language."),(0,n.kt)("h2",{id:"data-warehouse--lake"},"Data Warehouse / Lake"),(0,n.kt)("p",null,"Before you chose DataSQRL, check whether your data warehouse (or data lake or analytics engine) already has all the data you need integrated and processed. Many organizations have a central data warehouse/lake. If your data service does not need to be responsive to data changes (i.e. serving stale data is ok), then you can avoid the complexity of streaming data and do a regularly scheduled export from the data warehouse into a database and put an ORM on top to serve the API. Such batch processing into a serving service is a common choice for data services that don't need to respond to data changes in realtime. If you already have all that infrastructure and data integration inside your organization, that might be the quickest way to a data service implementation."),(0,n.kt)("p",null,"Unlike a data warehouse, DataSQRL immediately processes incoming data streams so that the results are directly available through the API. And DataSQRL removes the need for a serving service that provides the low-latency and high-throughput access to data that you need for serving concurrent API requests. That makes DataSQRL a better choice for responsive data services or situations where going through the data warehouse takes too much time (in terms of data latency, implementation effort, or political wrangling)."),(0,n.kt)("p",null,"Going through a data warehouse can also be a pain if the data isn't already processed for your needs. Before you start hacking together a bunch of SQL queries, give DataSQRL a try because the convenience of ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/overview"},"SQRL")," and the fully automated data management could save you a lot of time. DataSQRL can use the same data pipelines that your data warehouse uses as a data source."),(0,n.kt)("h2",{id:"custom-data-service"},"Custom Data service"),(0,n.kt)("p",null,"On the other end of the spectrum, your data needs may be so complex that they require a team of data scientists, data engineers, ML specialist, and MLOps to be satisfied. In that case, you likely need a custom data service that glues together multiple data systems and are looking at a pretty big project. "),(0,n.kt)("p",null,"However, give DataSQRL a quick try and see if it can get the job done. That can save you a lot of trouble. We frequently see organizations that think they need to bring in the whole caboodle of data scientists, data engineers, MLOps, etc to build some data analytics into their product. You don't need to build the Golden Gate Bridge to cross a river."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"DataSQRL is still young and may be missing a feature that you need for your data service. If that's the case, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/issues"},"place a feature request")," and we'll get on it.")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"If you are building a data API that doesn't need ACID transactions, give DataSQRL a try. It's a pragmatic choice that gets you good results quickly with little effort."),(0,n.kt)("h2",{id:"wait-but-what-about-x-new-technology"},"Wait, but what about X New Technology?"),(0,n.kt)("p",null,"There are a lot of new technologies coming to market that promise to make building data services easier. We are excited about the increased innovation in this space because it is desperately needed."),(0,n.kt)("p",null,"As you evaluate new technologies that promise to be a one-stop-shop for building data services or APIs, keep the following in mind: Any such system needs to have a streaming component (for realtime data ingest and computation), a data storage component (for serving data), and an API service (for serving API requests)."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"What are they using for each of those components? Are those proven technologies that have stood the test of time? Data technologies are notoriously hard to mature because there are so many failure conditions to address. It usually takes many years of intense development effort to mature a data technology to production quality."),(0,n.kt)("li",{parentName:"ul"},"Can those components be independently operated and scaled? Does your team already have operational expertise to manage those components or is it possible to outsource such management?"),(0,n.kt)("li",{parentName:"ul"},"How are these components evolving over time? Are these independent projects that are widely used or is it one team that develops all of them?")),(0,n.kt)("p",null,"Instead of building a new data system, we believe that the compiler approach to building data services is more promising because:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It relies on existing, proven data technologies and benefits from continuous innovation that's happening in that space."),(0,n.kt)("li",{parentName:"ul"},"It doesn't burden your team with yet another data technology to learn, understand, and operate. Your data infrastructure is already complex enough."),(0,n.kt)("li",{parentName:"ul"},"More fundamentally, we don't need another data technology, we need an abstraction layer that makes existing technologies easier to use.")))}h.isMDXComponent=!0}}]);