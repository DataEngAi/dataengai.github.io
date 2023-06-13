"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9218:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(7462),n=(a(7294),a(3905));const r={title:"Why Use DataSQRL?"},i="Why Use DataSQRL?",s={unversionedId:"getting-started/concepts/why-datasqrl",id:"getting-started/concepts/why-datasqrl",title:"Why Use DataSQRL?",description:"We love building with data, but we got frustrated by how complicated it is to build data APIs from events or streaming data. Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data microservice that looks like Frankenstein on a bad hair day. We built DataSQRL to change that.",source:"@site/docs/getting-started/concepts/why-datasqrl.md",sourceDirName:"getting-started/concepts",slug:"/getting-started/concepts/why-datasqrl",permalink:"/docs/getting-started/concepts/why-datasqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/concepts/why-datasqrl.md",tags:[],version:"current",frontMatter:{title:"Why Use DataSQRL?"},sidebar:"docs",previous:{title:"What is DataSQRL?",permalink:"/docs/getting-started/concepts/datasqrl"},next:{title:"When to use DataSQRL",permalink:"/docs/getting-started/concepts/when-datasqrl"}},l={},c=[{value:"Benefits of DataSQLR",id:"benefits-of-datasqlr",level:2},{value:"Saves You Time",id:"save-time",level:3},{value:"Easy to Use",id:"easy-to-use",level:3},{value:"Fast &amp; Efficient",id:"performance",level:3},{value:"Learn more",id:"learn-more",level:2},{value:"Footnotes",id:"footnotes",level:2}],d={toc:c},u="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"why-use-datasqrl"},"Why Use DataSQRL?"),(0,n.kt)("p",null,"We love building with data, but we got frustrated by how complicated it is to build data APIs from events or streaming data. Why can you build a production-grade web service in a few days, but it takes months to build a mediocre data microservice that looks like Frankenstein on a bad hair day. We built ",(0,n.kt)("a",{parentName:"p",href:"../datasqrl"},"DataSQRL")," to change that.   "),(0,n.kt)("img",{src:"/img/index/undraw_questions_sqrl.svg",alt:"DataSQRL allows you to build with data >",width:"40%"}),(0,n.kt)("p",null,"We are developing DataSQRL as a tool for developers to build event-driven microservices, streaming applications, and data services. You write a SQL script that implements your data processing, customize the API, and DataSQRL compiles an integrated and efficient data microservice for you. We cut out all the stuff developers don't need and focused on building a tool that integrates with your workflow."),(0,n.kt)("h2",{id:"benefits-of-datasqlr"},"Benefits of DataSQLR"),(0,n.kt)("p",null,"If you are building a streaming application, data service, data API, or a event-driven feature for an application, DataSQRL can save you a lot of time, make your life easier, and produce better implementations."),(0,n.kt)("p",null,"Sounds a little ",(0,n.kt)("em",{parentName:"p"},"marketing-y"),"? Let's break it down:"),(0,n.kt)("h3",{id:"save-time"},"Saves You Time"),(0,n.kt)("img",{src:"/img/reference/reactive_microservice.svg",alt:"Building a data service >",width:"40%"}),(0,n.kt)("p",null,"To build a data service, you need an API layer that serves the data, a database to query the data returned by the API, Apache Flink to process the data asynchronously, and Apache Kafka to ingest and hold data.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The point is: There are a lot of pieces to a data service and assembling all these moving pieces yourself takes a ton of time, effort, and expertise."),(0,n.kt)("p",null,"DataSQRL compiles integrated data services based on proven data technologies like ",(0,n.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink"),", ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka"),", ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://vertx.io/"},"Vert.x")," ",(0,n.kt)("a",{parentName:"p",href:"#footnotes"},"[1]"),". That means you get a fast, robust, scalable, and fault-tolerant data service without the laborious work of implementing each of the components and plugging them together. DataSQRL synchronizes schemas and data management, orchestrates data flows, manages failures, provides visibility into and across components, and ",(0,n.kt)("a",{parentName:"p",href:"../datasqrl#what-datasqrl-does"},"so much more"),"."),(0,n.kt)("p",null,"In other words: DataSQRL handles all the time-consuming details for you. You implement the logic of your data service in SQL, and DataSQRL compiles that logic into a fully orchestrated data service for data ingest, transformation, analytics, and database storage as well as an API on top."),(0,n.kt)("img",{src:"/img/index/undraw_time_management_sqrl.svg",alt:"DataSQRL saves you time >",width:"40%"}),(0,n.kt)("p",null,"DataSQRL gives you a higher level of abstraction, so you don't get bogged down implementing, integrating, and optimizing low level data abstractions. ",(0,n.kt)("br",null),"\nYou don't write your software in low-level languages like ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Assembly_language"},"Assembly"),". You use a higher level language like Javascript, Python, Java, etc that compile into machine code to make you more productive. DataSQRL is a compiler for your data service to make you more productive."),(0,n.kt)("h3",{id:"easy-to-use"},"Easy to Use"),(0,n.kt)("p",null,"DataSQRL gives you a higher-level of abstraction for implementing data services. That makes things easier in two ways:"),(0,n.kt)("p",null,"First, DataSQRL handles a lot of things for you that you don't have to worry about at all. Schema management, data flows, data type conversions, stream orchestration, data synchronization - all of those things are handled by the DataSQRL compiler. When you implement a data service in DataSQRL you have to learn fewer concepts to be successful. DataSQRL doesn't hide any of these elements from you. You get full visibility and can control those elements if you like. But you don't have to and in most cases you never have to worry about it."),(0,n.kt)("p",null,'You can focus entirely on the logic of your data service by defining data transformations and analytics. DataSQRL uses those definitions to figure out what the schema should look like, how the data should flow, and how to retrieve it for API requests. This simplifies implementing a data service and saves you a ton of "data plumbing" code that holds a data service architecture together.'),(0,n.kt)("img",{src:"/img/index/undraw_programming_sqrl.svg",alt:"DataSQRL is easy to use >",width:"40%"}),(0,n.kt)("p",null,"Second, the DataSQRL compiler not only determines how to implement data operations but also ",(0,n.kt)("em",{parentName:"p"},"when"),". A common tradeoff data service implementations face is processing data at ingest time (i.e. when a new data record is ingested) versus at query time (i.e. when a user of the API issues a request). For example, suppose we are providing an API that shows customers the total amount of money they have spent at our e-commerce store. We can compute this value by summing over all the orders at query time or incrementally updating a sum at ingest time when a new order is placed. The result is the same but has different operational characteristics and can make the difference between things humming along and your database being brought to its knees. ",(0,n.kt)("br",null),"\nIf you are thinking \"why are you boring me with these data service implementation trivia\", that's exactly the point: With DataSQRL you don't have to think about this. It abstracts those tradeoffs away. If you are going the low-level route and assemble a data service architecture yourself, you'll have to worry about these and other tradeoffs as you design the system. And that makes it very expensive to evolve your application over time."),(0,n.kt)("h3",{id:"performance"},"Fast & Efficient"),(0,n.kt)("p",null,"Building a data service prototype is one thing, but getting a data service to production successfully is a whole different ballgame. With DataSQRL you can rest assured that the data service you are building is robust, fast, low-cost, and scalable."),(0,n.kt)("img",{src:"/img/index/undraw_fast_loading_sqrl.svg",alt:"DataSQRL is fast & efficient >",width:"40%"}),(0,n.kt)("p",null,"If you are dealing with a substantial amount of data, you need to handle the data efficiently. Otherwise, your data service is going to be costly, slow, and unstable. Even a trivial omission like a missing index structure can bring down an otherwise soundly engineered data service once you reach a few gigabytes of data with a handful of concurrent users. To make matters worse, you often don't find out about these issues until late in the game, or after you've shipped to production, which ruins game night with tacos."),(0,n.kt)("p",null,"DataSQRL has an ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/operations/optimizer"},"optimizer")," that picks optimal data structures, chooses the least expensive execution path, installs index structures, pushes down predicates, batches requests, and pools resources. All those things you really don't want to think about when you are building a data service on a timeline but can potentially come back to bite you. DataSQRL takes care of them for you."),(0,n.kt)("p",null,"DataSQRL compiles to proven streaming technologies like ",(0,n.kt)("a",{parentName:"p",href:"https://kafka.apache.org/"},"Apache Kafka")," for ingest and ",(0,n.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," for processing realtime data flows as well as mature databases like ",(0,n.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," to serve API requests. This means your data service runs on a robust, fast, and efficient architecture that is optimized by DataSQRL. The resulting data service runs on technologies that have been battle-tested for decades, so you can sleep peacefully at night."),(0,n.kt)("p",null,"If your data service becomes successful (fingers crossed \ud83e\udd1e) or the amount of data keeps growing, you'll need to scale. Building scale into a system after the fact is very expensive. With DataSQRL you are building on a scalable foundation and when it comes time to scale you know that you can add resources and the system will be able to manage more data and more traffic. Each component of the compiled data service can be scaled independently, or you can rely on managed offerings that auto-scale.\nHowever, DataSQRL doesn't slow you down initially with scalability concerns, and you can run the entire service on a single instance or your laptop."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To get a feel for DataSQRL and how easy it is to build data services, check out the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/quickstart"},"quickstart tutorial"),"."),(0,n.kt)("li",{parentName:"ul"},"If you are trying to figure out if DataSQLR is the right choice for you, take a look at the ",(0,n.kt)("a",{parentName:"li",href:"/docs/getting-started/concepts/when-datasqrl"},"comparison to other data systems")," to find out how DataSQRL compares."),(0,n.kt)("li",{parentName:"ul"},"To dive deeper into DataSQRL, explore how the ",(0,n.kt)("a",{parentName:"li",href:"/docs/reference/operations/optimizer"},"optimizer")," compiles SQL scripts into efficient data architectures, or read the ",(0,n.kt)("a",{parentName:"li",href:"/docs/intro"},"documentation")," for all the things.")),(0,n.kt)("h2",{id:"footnotes"},"Footnotes"),(0,n.kt)("p",null,"[1]"," DataSQRL has a pluggable engine architecture. Check out ",(0,n.kt)("a",{parentName:"p",href:"/docs/reference/operations/engines/overview"},"all the engines")," that DataSQRL supports."),(0,n.kt)("p",null,"[2]"," You can also import functions implemented in other languages if you prefer."))}h.isMDXComponent=!0}}]);