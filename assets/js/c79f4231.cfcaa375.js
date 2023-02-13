"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={title:"What is DataSQRL?"},i="What is DataSQRL?",o={unversionedId:"getting-started/concepts/datasqrl",id:"getting-started/concepts/datasqrl",title:"What is DataSQRL?",description:"DataSQRL is an open-source compiler for building data services. A data service processes, transforms, or analyzes data from one or multiple sources (databases, data streams, file storage, etc.) and exposes the result through an API.",source:"@site/docs/getting-started/concepts/datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/datasqrl",permalink:"/docs/getting-started/concepts/datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/concepts/datasqrl.md",tags:[],version:"current",frontMatter:{title:"What is DataSQRL?"},sidebar:"docs",previous:{title:"Advanced Concepts",permalink:"/docs/getting-started/intro/advanced"},next:{title:"What is SQRL?",permalink:"/docs/getting-started/concepts/sqrl"}},l={},p=[{value:"How DataSQRL Works",id:"how-datasqrl-works",level:2},{value:"What DataSQRL Does",id:"what-datasqrl-does",level:2},{value:"Learn More",id:"learn-more",level:2},{value:"Footnotes",id:"footnotes",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-datasqrl"},"What is DataSQRL?"),(0,r.kt)("p",null,"DataSQRL is an open-source compiler for building data services. A ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/concepts/data-service"},"data service")," processes, transforms, or analyzes data from one or multiple sources (databases, data streams, file storage, etc.) and exposes the result through an API. ",(0,r.kt)("br",null),"\nDataSQRL eliminates most of the laborious code of stitching together data pipelines and makes it easier for developers to build data services."),(0,r.kt)("p",null,"Building a data service with DataSQRL takes 3 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Implement SQRL script:")," You combine, transform, and analyze the input data by implementing SQRL scripts. ",(0,r.kt)("a",{parentName:"li",href:"sqrl"},"SQRL")," is a language based on SQL with some added features that make it easy to express the logic and structure of your data service."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Customize API:")," The transformed data is exposed through an API which you can customize to meet your data service requirements by editing the API specification. This step is optional since DataSQRL can also generate a default API spec for you."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compile Data Pipeline:")," DataSQRL compiles the SQRL script and API specification into a fully integrated data pipeline. The compiled pipeline ingests the imported data, processes it according to the transformations and analyses defined in the SQRL script, and serves the resulting data through the specified API.")),(0,r.kt)("p",null,"In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient data pipelines and gives developers an easy-to-use tool to build custom data APIs."),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart"},"quickstart tutorial")," to build a data service in a few minutes and see how DataSQRL works in practice."),(0,r.kt)("h2",{id:"how-datasqrl-works"},"How DataSQRL Works"),(0,r.kt)("img",{src:"/img/generic/general-pipeline.svg",alt:"Compiled DataSQRL Pipeline",width:"100%"}),(0,r.kt)("p",null,"DataSQRL compiles the SQRL script and API specification into a data pipeline that consists of a streaming engine, database engine, and API server ",(0,r.kt)("a",{parentName:"p",href:"#footnotes"},"[1]"),". The streaming engine ingests the imported data, processes it, and writes the results to the database. The API server translates incoming requests into database queries and assembles the response from the returned query results. ",(0,r.kt)("br",null),"\nIt's like a harmonious orchestra of data technologies with DataSQRL as the conductor."),(0,r.kt)("p",null,"The engines can be packaged together to run on a single instance or can be scaled independently for large deployments. ",(0,r.kt)("br",null),"\nDataSQRL has a pluggable architecture which means it supports various streaming, database, and server engines such as ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres"),", ",(0,r.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vertx"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/engines/overview"},"and more"),". Feel free to contribute your favorite data technology as a DataSQRL engine to the open-source, wink wink."),(0,r.kt)("h2",{id:"what-datasqrl-does"},"What DataSQRL Does"),(0,r.kt)("p",null,"Okay, you get the idea of a compiler for data services that produces end-to-end data pipelines. But what exactly does DataSQRL do for you? Glad you asked."),(0,r.kt)("p",null,"To produce fully integrated data pipelines, the DataSQLR compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"resolves data imports to data source connectors and generates input schemas for the stream ingestion,"),(0,r.kt)("li",{parentName:"ul"},"synchronizes data schemas and data management across all engines in the pipeline,"),(0,r.kt)("li",{parentName:"ul"},"aligns timestamps and watermarks across the engines,"),(0,r.kt)("li",{parentName:"ul"},"orchestrates the pipeline for optimal data flow between engines,"),(0,r.kt)("li",{parentName:"ul"},"translates the SQRL script to the respective engine for execution,"),(0,r.kt)("li",{parentName:"ul"},"and generates an API server that implements the given API specification.")),(0,r.kt)("p",null,"To produce high-performance data services that respond to new input data in realtime and provide low latency, high throughput APIs to many concurrent users, DataSQRL optimizes the compiled data pipeline by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"partitioning the data flow and co-locating data where possible."),(0,r.kt)("li",{parentName:"ul"},"pruning the execution graph and consolidating repetitive computations."),(0,r.kt)("li",{parentName:"ul"},"determining when to pre-compute data transformations in the streaming engine to reduce response latencies versus computing result sets at request time in the database or server to avoid data staleness and combinatorial explosion in pre-computed results."),(0,r.kt)("li",{parentName:"ul"},"determining the optimal set of index structures to install in the database.")),(0,r.kt)("p",null,"In other words, DataSQRL can save you a lot of time and allows you to focus on what matters: implementing the logic and API of your data service. "),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"../quickstart"},"quickstart tutorial")," to get a feel for DataSQRL and the SQRL language while building an entire data service in 5 minutes."),(0,r.kt)("li",{parentName:"ul"},"Find out ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/concepts/why-datasqrl"},"Why DataSQRL Exists")," and what benefits it provides."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../comparison/overview"},"Compare DataSQRL")," to other data technologies and see when to use it."),(0,r.kt)("li",{parentName:"ul"},"Learn more about the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"DataSQRL Optimizer")," and how the DataSQRL compiler generates efficient data pipelines.")),(0,r.kt)("h2",{id:"footnotes"},"Footnotes"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[1]")," DataSQRL supports arbitrary DAG topologies for the underlying data pipeline and additional types of data engines. This is a simplification for the most common use cases."))}u.isMDXComponent=!0}}]);