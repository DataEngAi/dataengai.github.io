"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Quickstart Tutorial"},o="DataSQRL Quickstart in 5 Minutes",s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"Quickstart Tutorial",description:'|" width="35%"/>',source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/quickstart.md",tags:[],version:"current",frontMatter:{title:"Quickstart Tutorial"},sidebar:"docs",previous:{title:"Getting Started with DataSQRL",permalink:"/docs/getting-started/overview"},next:{title:"DataSQRL Tutorial",permalink:"/docs/getting-started/intro/overview"}},l={},p=[{value:"Create Script",id:"create-script",level:2},{value:"Run Script",id:"run",level:2},{value:"Query API",id:"query",level:2},{value:"Customize API",id:"customize-api",level:2},{value:"Ingest Metrics",id:"ingest-metrics",level:2},{value:"Next Steps",id:"next",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasqrl-quickstart-in-5-minutes"},"DataSQRL Quickstart in 5 Minutes"),(0,r.kt)("img",{src:"/img/getting-started/squirrel_computer.jpeg",alt:"Metrics Monitoring Quickstart >|",width:"35%"}),(0,r.kt)("p",null,"We are going to build a metrics monitoring service with DataSQRL in 5 minutes. Tik tok, let's go!"),(0,r.kt)("h2",{id:"create-script"},"Create Script"),(0,r.kt)("p",null,"First, we are going to define the data processing for our monitoring service using SQL."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are unfamiliar with SQL, we recommend you read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL Primer")," first.")),(0,r.kt)("p",null,"In the terminal or command line, create an empty folder for the SQL script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> mkdir metrics; cd metrics\n")),(0,r.kt)("p",null,"Then create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics.sqrl")," and copy-paste the following SQL code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"title=metrics.sqrl",title:"metrics.sqrl"},"IMPORT datasqrl.example.sensors.SensorReading; -- Import metrics\nIMPORT time.endOfSecond;  -- Import time function\n/* Aggregate sensor readings to second */\nSecReading := SELECT sensorid, endOfSecond(time) as timeSec,\n                     avg(temperature) as temp \n              FROM SensorReading GROUP BY sensorid, timeSec;\n/* Get max temperature in last minute per sensor */\nSensorMaxTemp := SELECT sensorid, max(temp) as maxTemp\n                 FROM SecReading\n                 WHERE timeSec >= now() - INTERVAL 1 MINUTE\n                 GROUP BY sensorid;\n")),(0,r.kt)("p",null,'DataSQRL\'s flavor of SQL is called "SQRL", has a more concise syntax, and allows explicit data and function imports.'),(0,r.kt)("p",null,"In the script, we import the sensor data we are monitoring and a time function we use for aggregation."),(0,r.kt)("p",null,"We define the ",(0,r.kt)("inlineCode",{parentName:"p"},"SecReading")," table that aggregates all sensor metrics within one second to smooth our temperature readings.\nWe define another table ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorMaxTemp")," which computes the maximum temperature in the last minute for each sensor."),(0,r.kt)("h2",{id:"run"},"Run Script"),(0,r.kt)("p",null,"DataSQRL compiles our SQRL script into an integrated microservice with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To run this command you need to have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on your machine and running. The first time you run this command takes an eternity to download. Make sure you are using docker-compose V2.")),(0,r.kt)("p",null,"To run the microservice, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(cd build/deploy; docker compose up)\n")),(0,r.kt)("p",null,"This will launch all components of the microservice to ingest, process, store, and serve the data through an API."),(0,r.kt)("h2",{id:"query"},"Query API"),(0,r.kt)("p",null,"Open your favorite browser and navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8888//graphiql/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8888//graphiql/"))," to access GraphiQL - a popular GraphQL IDE. Write GraphQL queries in the left-hand panel. For example, copy the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\nSensorMaxTemp (sensorid: 1) {\n    maxTemp\n}\n}\n")),(0,r.kt)("p",null,'When you hit the "run" button you get the maximum temperature for the sensor with id ',(0,r.kt)("inlineCode",{parentName:"p"},"1")," in the last minute."),(0,r.kt)("p",null,"And there you have it: a running data microservice that ingests metrics, aggregates them, and exposes the results through a GraphQL API which you can call in your applications."),(0,r.kt)("p",null,"To stop the microservice, interrupt it with ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL-C")," and shut it down with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose down -v\n")),(0,r.kt)("h2",{id:"customize-api"},"Customize API"),(0,r.kt)("p",null,"Got a little more time? Let's customize the GraphQL API and add a metrics ingestion endpoint."),(0,r.kt)("p",null,"By default, DataSQRL generates a GraphQL schema for us based on the tables we define in the SQRL script. That's great for rapid prototyping, but eventually we want to customize the API and limit data access."),(0,r.kt)("p",null,"To save us time, we are going to start with the GraphQL API that DataSQRL generates for us by running this command (to terminate the running DataSQRL microservice, hit ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL-C"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl -a graphql\n")),(0,r.kt)("p",null,"There is now a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphqls")," in the same folder as our script. Rename it to ",(0,r.kt)("inlineCode",{parentName:"p"},"metricsapi.graphqls")," and take a look.\nNotice, how each table defined in our SQRL script maps to a query endpoint in the API and an associated result type. The query endpoints accept arguments for each column of the table to filter the results by column values."),(0,r.kt)("p",null,"We are going to remove most of those arguments to only support querying by ",(0,r.kt)("inlineCode",{parentName:"p"},"sensorid"),". We will also remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorReading")," query endpoint and result type to only expose the smoothed-out sensor readings from the ",(0,r.kt)("inlineCode",{parentName:"p"},"SecReading")," table."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"metricsapi.graphqls")," file, remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"SensorReading")," type and replace the query definition with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  SecReading(sensorid: Int!): [SecReading!]\n  SensorMaxTemp(sensorid: Int): [SensorMaxTemp!]\n}\n")),(0,r.kt)("p",null,"Note, that we made ",(0,r.kt)("inlineCode",{parentName:"p"},"sensorid")," a required argument for the ",(0,r.kt)("inlineCode",{parentName:"p"},"SecReading")," query endpoint."),(0,r.kt)("p",null,"Now, run the compiler with the GraphQL schema we just created and then launch the updated microservice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile metrics.sqrl metricsapi.graphqls;\n(cd build/deploy; docker compose up)\n")),(0,r.kt)("p",null,"When you refresh GraphiQL in the browser, you see that the API is simpler and only exposes the data for our use case."),(0,r.kt)("h2",{id:"ingest-metrics"},"Ingest Metrics"),(0,r.kt)("p",null,"So far, we have ingested metrics data from an external source imported from the ",(0,r.kt)("a",{parentName:"p",href:"http://dev.datasqrl.com"},"DataSQRL repository"),". The data source is static which is convenient for whipping up an example data service, but we want our microservice to provide a metrics ingestion endpoint."),(0,r.kt)("p",null,"No problem, let's add it to our GraphQL schema by appending the following mutation to the ",(0,r.kt)("inlineCode",{parentName:"p"},"metricsapi.graphqls")," file we created above"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql",metastring:"title=metricsapi.graphqls",title:"metricsapi.graphqls"},"type Mutation {\n  AddReading(metric: SensorReading!): CreatedReading\n}\n\ninput SensorReading {\n  sensorid: Int!\n  temperature: Float!\n}\n\ntype CreatedReading {\n  _source_time: String!\n  sensorid: Int!\n}\n")),(0,r.kt)("p",null,"To use the data created by this mutation in our SQRL script, we have to import it. Replace the first two line of the ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics.sqrl")," script with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT metricsapi.AddReading AS SensorReading;\nIMPORT time.endOfSecond;\nSensorReading.time := _source_time;\n")),(0,r.kt)("p",null,"We are now using data ingested through the API mutation endpoint instead of the static example data. And for the timestamp on the metrics, we are using the special column ",(0,r.kt)("inlineCode",{parentName:"p"},"_source_time")," which captures the time data was ingested through the API."),(0,r.kt)("p",null,"Terminate the running service, run the compiler again, and re-launch the microservice. In GraphiQL, run the following mutation to add a temperature reading:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation addReading {\n  AddReading(metric: {\n    sensorid: 1,\n    temperature: 37.2\n  }) {\n    sensorid\n    _source_time\n  }\n}\n")),(0,r.kt)("p",null,"Hit the run button a few times and change the temperature and/or sensor id to insert multiple readings."),(0,r.kt)("p",null,"To query the maximum temperatures, run the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  SensorMaxTemp {\n    sensorid\n    maxTemp\n  }\n}\n")),(0,r.kt)("p",null,"Voila, we just built a fully-functioning monitoring service that ingests, aggregates, and services metrics data. And the best part? The DataSQRL compiler ensures that it is efficient, fast, robust, and scalable."),(0,r.kt)("h2",{id:"next"},"Next Steps"),(0,r.kt)("p",null,"DataSQRL provides a number of features that make it easy, fast, and efficient to build event-driven microservices and streaming applications. Read the ",(0,r.kt)("a",{parentName:"p",href:"../intro/overview"},"DataSQRL tutorial")," to learn about all the features while building a Customer 360\xb0 application and recommendation engine. It'll be fun!"))}d.isMDXComponent=!0}}]);