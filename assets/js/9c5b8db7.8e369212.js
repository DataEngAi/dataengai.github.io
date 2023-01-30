"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1796],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var a=o.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=c(e.components);return o.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},h=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||n;return t?o.createElement(m,i(i({ref:a},d),{},{components:t})):o.createElement(m,i({ref:a},d))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=h;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<n;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2382:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=t(7462),r=(t(7294),t(3905));const n={title:"Data Service"},i="What is a Data Service?",s={unversionedId:"reference/concepts/data-service",id:"reference/concepts/data-service",title:"Data Service",description:"A data service processes, transforms, or analyzes data from one or multiple sources and exposes the result through an API.",source:"@site/docs/reference/concepts/data-service.md",sourceDirName:"reference/concepts",slug:"/reference/concepts/data-service",permalink:"/docs/reference/concepts/data-service",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/concepts/data-service.md",tags:[],version:"current",frontMatter:{title:"Data Service"},sidebar:"docs",previous:{title:"Key Concepts",permalink:"/docs/category/key-concepts"},next:{title:"Deep-Dive & Developer Documentation",permalink:"/docs/dev/overview"}},l={},c=[{value:"What does a Data Service Do?",id:"components",level:2},{value:"What distinguishes a Data Service from a Backend Service?",id:"difference",level:2},{value:"Do You need to Break Out Your Data Services?",id:"breakout",level:2},{value:"Reason 1: Complex Data or Data Logic",id:"reason-1-complex-data-or-data-logic",level:3},{value:"Complex Data",id:"complex-data",level:4},{value:"Complex Data Logic",id:"complex-data-logic",level:4},{value:"Reason 2: Data Value Add Essential to Service",id:"reason-2-data-value-add-essential-to-service",level:3},{value:"Reasons Not to Build a Data Service",id:"reasons-not-to-build-a-data-service",level:3},{value:"Where to Go from Here?",id:"where-to-go-from-here",level:2}],d={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-a-data-service"},"What is a Data Service?"),(0,r.kt)("p",null,"A data service processes, transforms, or analyzes data from one or multiple sources and exposes the result through an API."),(0,r.kt)("p",null,"A data service is a type of backend service focused on adding value to data by combining, enriching, and analyzing the raw source data for consumers of the service. A data service is used by frontend applications to provide the value to an end-users or by business services that further process the value-added data."),(0,r.kt)("p",null,"In modern software architectures data services are distinct from other backend services to separate concerns, provide agility for changes to the data logic, increase robustness, and decrease costs.\nIn other words, encapsulating all your data logic in a service makes your life a lot easier and ensures that your data spaghetti and your application or business spaghetti doesn't get mixed up in one giant bowl of impenetrable code spaghetti. You hungry yet?"),(0,r.kt)("h2",{id:"components"},"What does a Data Service Do?"),(0,r.kt)("p",null,"A data service provides a standard interface to data entities for users. It's a convenience store for data: you grab the data you need from a neatly arranged shelf and get out. "),(0,r.kt)("p",null,"A data service usually consists of the following components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Source Data"),": A data service ingests or accesses one or multiple sources of data from other data systems like databases, file systems, queues, logs, data warehouses, data lakes, etc. A data service is responsive to changes in source data by consuming streams of data in realtime."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Preparation"),": A data service prepares the input data for processing. Data preparation may require schema mapping, data normalization and augmentation, data cleansing, etc. Since a data service doesn't control the sources of data, there can be quite a bit of work in making the data readily usable."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Integration"),": A data service transforms and links the input data into one coherent dataset for analysis. A data service transforms the input data to map it onto the ",(0,r.kt)("em",{parentName:"li"},"right")," structure and establishes links or relationships between data records to enrich the combined dataset."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Analysis"),": A data service analyzes the prepared data to derive valuable information in the form of a new dataset or enriching the prepared dataset. The analysis is defined by the logic of the data service and is often considered the ",(0,r.kt)("em",{parentName:"li"},"core component")," of a data service."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Presentation"),": A data service maps the resulting dataset onto an entity-relationship structure that aligns with how the users of the service think about the data to make it intuitive to consume the service.")),(0,r.kt)("p",null,"The benefit of a data service is providing all of this value behind a well-defined API that users across the organization can consume as needed for additional processing or serving of the data."),(0,r.kt)("h2",{id:"difference"},"What distinguishes a Data Service from a Backend Service?"),(0,r.kt)("p",null,"A data service is a special type of backend service focused on data transformation and analytics\nto provide additional value from raw data.\nA data service is a backend service that's all about data."),(0,r.kt)("p",null,"It's useful to distinguish between data and other type of backend services because\ndata services have ",(0,r.kt)("a",{parentName:"p",href:"#components"},"specific concerns")," that are easier to address, change, and manage\nwhen they are contained in their own service. Chickens are a lot easier to handle\nwhen you don't have a bunch of ferrets mixed into the population. So is your data\nservice when you don't mix it with application or business service concerns like\ntransaction handling, verification, page rendering, or business process execution."),(0,r.kt)("p",null,"The other benefit of building separate data services as part of your backend\narchitecture is that you can use dedicated tools that make building data services\nmore productive. ",(0,r.kt)("a",{parentName:"p",href:"/"},"DataSQRL")," makes it easy and efficient to build data services\nand allows the developer to focus on their data logic by providing specific support\nfor the ",(0,r.kt)("a",{parentName:"p",href:"#components"},"components that a data service needs"),"."),(0,r.kt)("p",null,"If you are building a backend service that needs to do a non-trivial amount of\ndata wrangling, data transformation, data analysis, or data integration it is\nbest to put that data logic in a separate data service and use dedicated tools\nfor building data services like ",(0,r.kt)("a",{parentName:"p",href:"/"},"DataSQRL"),". You'll save a lot of time, cost,\nand sanity."),(0,r.kt)("h2",{id:"breakout"},"Do You need to Break Out Your Data Services?"),(0,r.kt)("p",null,"You have build or about to build a backend service that contains some data logic.\nDo you need to break that logic out into its own data service?"),(0,r.kt)("p",null,"Here is the answer you love so much: It depends."),(0,r.kt)("p",null,"First: If it ain't broke, don't fix it. If you have a working backend service which\nmixes application-level concerns with data logic, but it's working and nobody is\nhurting, then leave it alone."),(0,r.kt)("p",null,"It's perfectly normal for backend services to contain some data logic and not all\ndata logic needs to live in its own service. Don't make your life harder\nunnecessarily by throwing another service into the mix."),(0,r.kt)("p",null,"As a general rule of thumb: Consider building a separate data service if your\ndata logic is complex or an important part of your value proposition, i.e. the\nreason why your service exists in the first place. Let's look at those two reasons\nin more detail."),(0,r.kt)("h3",{id:"reason-1-complex-data-or-data-logic"},"Reason 1: Complex Data or Data Logic"),(0,r.kt)("p",null,"If you are dealing with complex data or complex data logic there are a lot of advantages\nto encapsulating those aspects in a dedicated data service. A dedicated data service\nachieves ",(0,r.kt)("a",{parentName:"p",href:"#difference"},"separation of concerns")," and allows you to better address the\n",(0,r.kt)("a",{parentName:"p",href:"#components"},"unique aspects")," of a data service using appropriate tools like ",(0,r.kt)("a",{parentName:"p",href:"/"},"DataSQRL"),"."),(0,r.kt)("p",null,"Even though it seems that having another service in your architecture is more work, you will\nactually save time by having simpler services that can be changed more quickly and\nmaintained with less headache."),(0,r.kt)("p",null,"How do you know if you are dealing with complex data or complex data logic? Like the hipness\nof stickers on a laptop cover, it's a somewhat subjective assessment but here are some\nrough guidelines."),(0,r.kt)("h4",{id:"complex-data"},"Complex Data"),(0,r.kt)("p",null,"The data itself can be complex to handle and require specialized tools, data structures, or\nother types of infrastructure and optimization that warrant a dedicated data service."),(0,r.kt)("p",null,"Data is considered complex for one or multiple of the following reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"High Volume"),": You are dealing with a lot of data. So much data that you cannot simply\nthrow it all in a hashmap or other simple data structure to process further. With a high\nvolume of data, you need to be smart about how you store and access the data to avoid\nwasting time and space when processing the data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"High Velocity"),": The data is coming at you at a high rate and you want to process the data\nquickly to respond. Similar to a high volume, this requires smart handling of data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Heterogeneous Data"),": The structure of the data is complex, or you are dealing with multiple\ndifferent sources of data that all have different structures. In those cases having support\nfor data normalization and integration can save a lot of time.")),(0,r.kt)("h4",{id:"complex-data-logic"},"Complex Data Logic"),(0,r.kt)("p",null,"The other source of complexity is in the logic you are applying to your data to produce\nadditional value. If you are doing multiple levels of data transformation, linking records,\neliciting relationships, or computing analytics - those are all sources of data logic\ncomplexity."),(0,r.kt)("p",null,'When is the complexity high enough to warrant a dedicated data service? When does your\nTwitter feed becomes so boring that you go back to work? It depends on your preferences.\nIf you find that you are writing a lot of code to handle data or are considering\n"optimizations" to increase efficiency, you should explore the option of moving the data\nlogic into a dedicated data service. The goal is to focus your efforts on adding value to\nthe data - not writing a bunch of code and infrastructure to wrangle the data.'),(0,r.kt)("h3",{id:"reason-2-data-value-add-essential-to-service"},"Reason 2: Data Value Add Essential to Service"),(0,r.kt)("p",null,"When you are starting a greenfield data project you may not (yet) be dealing with complex data\nand your prototype implementation seems simple enough to implement the whole thing as a\nsimple web service. However, if deriving value from data is a core motivation for the project\nyou can benefit a lot from building a dedicated data service because it provides a greater\ndegree of agility and saves you lot of time as the project progresses."),(0,r.kt)("p",null,'For example, suppose you are adding a product recommendation feature to an existing online\nstore. The motivation for this initiative is to use the data on customers shopping history\nto provide valuable recommendations and improve sales. A classic example of "deriving value\nfrom data". For the prototype, you are pulling a customer\'s most recent purchases from a\nflat csv file that is exported from the purchase-order database. Simple enough to code\nsomething up in Node, Rails, Spring, or (insert your favorite framework), right? Sure, but\nas the project progresses (realtime data ingest from database, normalizing input data,\nhandling schema evolution in the source data, adding error handling, etc) and your\nrecommendations become "smarter" (time-weighted repeat purchases, grouping by product\ncategory, seeding for new customers, etc) you will be writing a lot of data handling and\n',(0,r.kt)("em",{parentName:"p"},"plumbing")," code that distracts from the actual value you are trying to deliver."),(0,r.kt)("p",null,"It's equally easy to start such a project with a dedicated framework for building data\nservices like ",(0,r.kt)("a",{parentName:"p",href:"/"},"DataSQRL")," to build the prototype and a lot easier to improve the\nrecommendation service as the requirements mature."),(0,r.kt)("p",null,"If you are working on a data project where data value-add is a primary motivation, you will\nsave yourself a lot of hassle and time if you architect your system with a dedicated\ndata service and use the right tool for the job."),(0,r.kt)("h3",{id:"reasons-not-to-build-a-data-service"},"Reasons Not to Build a Data Service"),(0,r.kt)("p",null,"If you are building a backend service that executes CRUD\n(i.e. Create, Read, Update, Delete) operations or transactional operations against a\ndatabase, you are better off using one of the gazillion ORM framework to interface\nwith the database instead of a dedicated data service."),(0,r.kt)("p",null,"Likewise, if you have simple data logic sprinkled across your backend service\ndon't pull it out into a data service until you expect significant benefits from that\nmodularity."),(0,r.kt)("h2",{id:"where-to-go-from-here"},"Where to Go from Here?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Learn how to ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},"build a data service in DataSQRL")," in 10 minutes."),(0,r.kt)("li",{parentName:"ul"},"Find out ",(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/concepts/why-datasqrl"},"why you should use DataSQRL")," to implement your data services."),(0,r.kt)("li",{parentName:"ul"},"Read more about ",(0,r.kt)("a",{parentName:"li",href:"https://www.infoq.com/articles/narayanan-soa-data-services/"},"data services")," on InfoQ."),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"https://martinfowler.com/articles/microservices.html"},"Microservice Architectures")," in general of which data services are a part.")))}u.isMDXComponent=!0}}]);