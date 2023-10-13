"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||g[h]||s;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const s={slug:"preprocess-or-query",title:"To Preprocess or to Query, that\u2019s the Question!",authors:["matthias"],tags:["Kafka","Flink","Postgres","data pipeline","DataSQRL"]},i=void 0,o={permalink:"/blog/preprocess-or-query",editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/blog/2023-08-15-preprocess-or-query.md",source:"@site/blog/2023-08-15-preprocess-or-query.md",title:"To Preprocess or to Query, that\u2019s the Question!",description:"When developing streaming applications or event-driven microservices, you face the decision of whether to preprocess data transformations in the stream engine or execute them as queries against the database at request time. The choice impacts your application\u2019s performance, behavior, and cost. An incorrect decision results in unnecessary work and potential application failure.",date:"2023-08-15T00:00:00.000Z",formattedDate:"August 15, 2023",tags:[{label:"Kafka",permalink:"/blog/tags/kafka"},{label:"Flink",permalink:"/blog/tags/flink"},{label:"Postgres",permalink:"/blog/tags/postgres"},{label:"data pipeline",permalink:"/blog/tags/data-pipeline"},{label:"DataSQRL",permalink:"/blog/tags/data-sqrl"}],readingTime:13.65,hasTruncateMarker:!0,authors:[{name:"Matthias Broecheler",title:"CEO of DataSQRL",url:"https://github.com/mbroecheler",imageURL:"/img/headshots/matthias1.png",key:"matthias"}],frontMatter:{slug:"preprocess-or-query",title:"To Preprocess or to Query, that\u2019s the Question!",authors:["matthias"],tags:["Kafka","Flink","Postgres","data pipeline","DataSQRL"]},prevItem:{title:"Personalized Recommendations for Current23 with Vector Embeddings in Flink and Kafka",permalink:"/blog/recommendations-current23"},nextItem:{title:"Why Temporal Join is Stream Processing\u2019s Superpower",permalink:"/blog/temporal-join"}},l={authorsImageUrls:[void 0]},c=[{value:"Recap: Anatomy of a Streaming Application",id:"recap-anatomy-of-a-streaming-application",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{property:"og:image",content:"/img/blog/preprocessOrQuery.png"}),(0,n.kt)("meta",{name:"twitter:image",content:"/img/blog/preprocessOrQuery.png"})),(0,n.kt)("p",null,"When developing streaming applications or event-driven microservices, you face the decision of whether to preprocess data transformations in the stream engine or execute them as queries against the database at request time. The choice impacts your application\u2019s performance, behavior, and cost. An incorrect decision results in unnecessary work and potential application failure."),(0,n.kt)("img",{src:"/img/blog/preprocessOrQuery.png",alt:"To preprocess or to query? >|",width:"50%"}),(0,n.kt)("p",null,"In this article, we\u2019ll delve into the tradeoff between preprocessing and querying, guiding you to make the right decision. We\u2019ll also introduce tools to simplify this process. Plus, you\u2019ll learn how building streaming applications is related to fine cuisine. It\u2019ll be a fun journey through the land of stream processing and database querying. Let\u2019s go!"),(0,n.kt)("h2",{id:"recap-anatomy-of-a-streaming-application"},"Recap: Anatomy of a Streaming Application"),(0,n.kt)("p",null,"If you're in the process of building an event-driven microservice or streaming application, let's recap what that entails. An event-driven microservice consumes data from one or multiple data streams, processes the data, writes the results to a data store, and exposes the final data through an API for external users to access."),(0,n.kt)("p",null,"The figure below visualizes the high-level architecture of a streaming application and its components: data streams (e.g. Kafka), stream processor (e.g. Flink), database (e.g. Postgres), and API server (e.g. GraphQL server)."),(0,n.kt)("img",{src:"/img/blog/dataflow-stages.svg",alt:"Streaming Application Architecture",width:"100%"}),(0,n.kt)("p",null,"An actual event-driven microservice might have a more intricate architecture, but it will always include these four elements: a system for managing data streams, an engine for processing streaming data, a place to store the results, and a server to expose the service endpoint."),(0,n.kt)("p",null,"This means an event-driven architecture has two stages: the preprocess stage, which processes data as it streams in, and the query stage which processes user requests against the API. Each stage handles data, but they differ in what triggers the processing: incoming data triggers the preprocess stage, while user requests trigger the query stage. The preprocess stage handles data before the user needs it, and the query stage handles data when the user explicitly requests it."),(0,n.kt)("p",null,"Understanding these two stages is vital for the successful implementation of event-driven microservices. Unlike most web services with only a query stage or data pipelines with only a preprocess stage, event-driven microservices require a combination of both stages."),(0,n.kt)("p",null,"This leads to the question: Where should data transformations be processed? In the preprocessing stage or the query stage? And what\u2019s the difference, anyways? That\u2019s what we will be investigating in this article."))}g.isMDXComponent=!0}}]);