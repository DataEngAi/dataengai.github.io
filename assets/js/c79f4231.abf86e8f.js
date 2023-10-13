"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2782],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"What is DataSQRL?"},i="What is DataSQRL?",s={unversionedId:"getting-started/concepts/datasqrl",id:"getting-started/concepts/datasqrl",title:"What is DataSQRL?",description:"DataSQRL is an open-source compiler and build tool for implementing data products as data pipelines. A data product processes, transforms, or analyzes data from one or multiple sources (user input, databases, data streams, API calls, file storage, etc.) and exposes the result as raw data, in a database, or through an API.",source:"@site/docs/getting-started/concepts/datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/datasqrl",permalink:"/docs/getting-started/concepts/datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/concepts/datasqrl.md",tags:[],version:"current",frontMatter:{title:"What is DataSQRL?"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/getting-started/intro/deploy"},next:{title:"Why Use DataSQRL?",permalink:"/docs/getting-started/concepts/why-datasqrl"}},l={},p=[{value:"How DataSQRL Works",id:"how-datasqrl-works",level:2},{value:"What DataSQRL Does",id:"what-datasqrl-does",level:2},{value:"Learn More",id:"learn-more",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-datasqrl"},"What is DataSQRL?"),(0,r.kt)("p",null,"DataSQRL is an open-source compiler and build tool for implementing data products as data pipelines. A ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/concepts/data-product"},"data product")," processes, transforms, or analyzes data from one or multiple sources (user input, databases, data streams, API calls, file storage, etc.) and exposes the result as raw data, in a database, or through an API. ",(0,r.kt)("br",null),"\nDataSQRL eliminates most of the laborious code of implementing and stitching together multiple technologies into data pipelines."),(0,r.kt)("p",null,"Building a data product with DataSQRL takes 3 steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Implement SQL script:")," You combine, transform, and analyze the input data using SQL."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Expose Data (optional):")," You define how to expose the transformed data in the API or database."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Compile Data Pipeline:")," DataSQRL compiles the SQL script and output specification into a fully integrated data pipeline. The compiled data pipeline ingests raw data, processes it according to the transformations and analyses defined in the SQL script, and serves the resulting data through the specified API or database.")),(0,r.kt)("p",null,"In a nutshell, DataSQRL is an abstraction layer that takes care of the nitty-gritties of building efficient data pipelines and gives developers an easy-to-use tool to build data products."),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart"},"quickstart tutorial")," to build a data product in a few minutes and see how DataSQRL works in practice."),(0,r.kt)("h2",{id:"how-datasqrl-works"},"How DataSQRL Works"),(0,r.kt)("img",{src:"/img/reference/compiledPipeline.svg",alt:"Compiled DataSQRL data pipeline >",width:"60%"}),(0,r.kt)("p",null,"DataSQRL compiles the SQL script and output specification into a data pipeline that uses data technologies like ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka"),", ",(0,r.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://postgresql.org/"},"Postgres"),". "),(0,r.kt)("p",null,"DataSQRL has a pluggable engine architecture which allows it to support various stream processors, databases, data warehouses, data streams, and API servers. Feel free to contribute your favorite data technology as a DataSQRL engine to the open-source, wink wink."),(0,r.kt)("p",null,"DataSQRL can generate data pipelines with multiple topologies. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/concepts/data-product#types"},"types of data products")," that DataSQRL can build. You can further customize those pipeline topologies in the DataSQRL ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/operations/package-config"},"package configuration")," which defines the data technologies at each stage of the resulting data pipeline. "),(0,r.kt)("p",null,"DataSQRL compiles executables for each engine in the pipeline which can be deployed on the data technologies and cloud services you already use.\nIn addition, DataSQRL provides development tooling that makes it easy to run and test data pipelines locally to speed up the development cycle."),(0,r.kt)("h2",{id:"what-datasqrl-does"},"What DataSQRL Does"),(0,r.kt)("p",null,"Okay, you get the idea of a compiler that produces integrated data pipelines. But what exactly does DataSQRL do for you? Glad you asked."),(0,r.kt)("img",{src:"/img/index/howDataSQRLWorksPipeline.svg",alt:"DataSQRL Compilation >",width:"50%"}),(0,r.kt)("p",null,"To produce fully integrated data pipelines, the DataSQLR compiler:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"resolves data imports to data source connectors and generates input schemas for the stream ingestion,"),(0,r.kt)("li",{parentName:"ul"},"synchronizes data schemas and data management across all engines in the data pipeline,"),(0,r.kt)("li",{parentName:"ul"},"aligns timestamps and watermarks across the engines,"),(0,r.kt)("li",{parentName:"ul"},"orchestrates optimal data flow between engines,"),(0,r.kt)("li",{parentName:"ul"},"translates the SQL script to the respective engine for execution,"),(0,r.kt)("li",{parentName:"ul"},"and generates an API server that implements the given API specification.")),(0,r.kt)("p",null,"To produce high-performance data pipelines that respond to new input data in realtime and provide low latency, high throughput APIs to many concurrent users, DataSQRL optimizes the compiled data pipeline by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"partitioning the data flow and co-locating data where possible."),(0,r.kt)("li",{parentName:"ul"},"pruning the execution graph and consolidating repetitive computations."),(0,r.kt)("li",{parentName:"ul"},"determining when to pre-compute data transformations in the streaming engine to reduce response latencies versus computing result sets at request time in the database or server to avoid data staleness and combinatorial explosion in pre-computed results."),(0,r.kt)("li",{parentName:"ul"},"determining the optimal set of index structures to install in the database.")),(0,r.kt)("p",null,"In other words, DataSQRL can save you a lot of time and allows you to focus on what matters: implementing the logic and API of your data product. "),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Read the ",(0,r.kt)("a",{parentName:"li",href:"../../quickstart"},"quickstart tutorial")," to get a feel for DataSQRL while building an entire data product in 10 minutes."),(0,r.kt)("li",{parentName:"ul"},"Find out ",(0,r.kt)("a",{parentName:"li",href:"../why-datasqrl"},"Why DataSQRL Exists")," and what benefits it provides."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../concepts/when-datasqrl"},"Compare DataSQRL")," to other data technologies and see when to use it."),(0,r.kt)("li",{parentName:"ul"},"Learn more about the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"DataSQRL Optimizer")," and how the DataSQRL compiler generates efficient data pipelines.")))}u.isMDXComponent=!0}}]);