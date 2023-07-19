"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4195],{1503:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),r=a(7294),s=a(6010),l=a(9960),i=a(9329);function o(e){let{image:t,title:a,link:n,linkText:o,description:c}=e,m="";t&&(m=r.createElement("div",{className:"text--center"},r.createElement("img",{className:i.Z.featureSvg,loading:"lazy",src:t,alt:a})));let u="";n&&(u=r.createElement("div",{className:"text--center"},r.createElement(l.Z,{className:"button button--secondary button--sm",to:n},o)));let d="";return c&&(d=r.createElement("p",{className:"text--left margin-bottom--sm"},c)),r.createElement("div",{className:(0,s.Z)("col col--4",i.Z.feature)},m,r.createElement("div",{className:"padding-horiz--md"},r.createElement("h3",{className:"text--center"},a),d,u))}function c(e){let t,{FeatureList:a,headline:s}=e;return t=s?r.createElement("h2",{className:"margin-bottom--md"},s):"",r.createElement("section",{className:i.Z.features},r.createElement("div",{className:"container"},t,r.createElement("div",{className:"row"},a.map(((e,t)=>r.createElement(o,(0,n.Z)({key:t},e)))))))}},9913:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010),s=(a(179),a(9960));const l={heroBanner:"heroBanner_zMUS",col:"col_lecs",pictureCol:"pictureCol_KIwo",bannerSvg:"bannerSvg_s3Mi"};function i(e){let t,{title:a,tagLine:i,text:o,buttonLink:c,buttonText:m,LogoSvg:u,youtubeURL:d}=e;t=c?n.createElement("div",{className:(0,r.Z)("margin-bottom--lg",l.buttons)},n.createElement(s.Z,{className:"button button--primary button--lg",to:c},m)):"";return n.createElement("header",{className:(0,r.Z)("hero hero--secondary",l.heroBanner)},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col col--8",l.col)},n.createElement("h1",{className:"hero__title"},i),n.createElement("p",{className:"hero__subtitle"},o),t),n.createElement("div",{className:(0,r.Z)("col col--4",l.pictureCol)},d?n.createElement("iframe",{width:"100%",height:"100%",src:d,title:"DataSQRL Introduction",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):n.createElement(u,{className:l.bannerSvg,alt:"DataSQRL Header Picture"})))))}},6825:(e,t,a)=>{a.r(t),a.d(t,{default:()=>L});var n=a(7294),r=a(6010),s=a(179),l=a(9960),i=a(614),o=a(2263),c=a(1207),m=a(1503),u=a(9913);const d="section_HxI7",g=e=>{let{teaser:t,links:a}=e;const[r,s]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const e=setInterval((()=>{s((e=>(e+1)%a.length))}),4e3);return()=>{clearInterval(e)}}),[a.length]),n.createElement("section",{className:d},n.createElement("div",{className:"container"},t,n.createElement("a",{href:a[r].url},a[r].text)))};var p=a(7462);const E={section:"section_PlXm",feature:"feature_mLhw",featureSvg:"featureSvg_wraa",featureText:"featureText_Ohfm"};function h(e){let t,{image:a,title:r,link:s}=e;return t=s?n.createElement(l.Z,{to:s},r):n.createElement("span",null,r),n.createElement("div",{className:"text--center"},n.createElement("div",null,n.createElement("img",{className:E.featureSvg,src:a,loading:"lazy",alt:r})),n.createElement("div",{className:E.featureText},t))}function b(e){let t,{FeatureList:a,header:s,columnBase:l}=e;t=s?n.createElement("h2",{className:"margin-bottom--md"},s):"";const i=12/l;return n.createElement("div",{className:"container"},t,(()=>{const e=a.map(((e,t)=>n.createElement("div",{className:(0,r.Z)("col col--"+l,E.feature)},n.createElement(h,(0,p.Z)({key:t},e))))),t=[];for(let a=0;a<e.length;a+=i)t.push(n.createElement("div",{key:a,className:"row"},e.slice(a,a+i)));return t})())}const v={title:"Build Streaming Applications",tagLine:"Build Streaming Data Apps Faster, Cheaper, and Better",text:n.createElement(n.Fragment,null,"DataSQRL integrates Apache Flink, Kafka, Postgres, and GraphQL so you can focus on building and not data plumbing."),buttonLink:"/docs/getting-started/quickstart",buttonText:"Get Started in 5 minutes",youtubeURL:"https://www.youtube.com/embed/mf5q-IdbVQY"},S=[{title:"Fully Customizable",image:"/img/generic/undraw_building_blocks.svg"},{title:"Open Source",image:"/img/generic/undraw_code.svg"},{title:"Robust & Scalable",image:"/img/generic/undraw_secure_server.svg"}],f=[{title:"Saves You Time",image:"/img/index/undraw_time_management_sqrl.svg",description:n.createElement(n.Fragment,null,"DataSQRL allows you to focus on your data logic because it handles all the annoying parts of implementing streaming applications that make you want to choke on your keyboard: data plumbing, schema management, error handling, data serving, API generation, and so on.")},{title:"Easy to Use",image:"/img/index/undraw_programming_sqrl.svg",description:n.createElement(n.Fragment,null,'Express your data logic, transformations, and analytics with the SQL you already know. DataSQRL allows you to focus on the "what" and worry less about the "how". Import your functions when SQL is not enough - DataSQRL makes custom code integration easy.')},{title:"Fast & Efficient",image:"/img/index/undraw_fast_loading_sqrl.svg",description:n.createElement(n.Fragment,null,"DataSQRL builds efficient event-driven microservices that optimize data processing, partitioning, index selection, view materialization, denormalization, and query execution. There actually is some neat technology behind this buzzword bingo.")}],w=[{name:"Clickstream",usecase:"Recommendations",description:n.createElement(n.Fragment,null,"Develop a recommendation engine for your customers based on visits to your website.",n.createElement("br",null),n.createElement("br",null),"DataSQRL builds on the SQL you already know for a low learning curve."),script:"IMPORT datasqrl.example.clickstream.Click;  -- Import data\n/* Find next page visits within 10 minutes */\nVisitAfter := SELECT b.url AS beforeURL, a.url AS afterURL,\n    a.timestamp AS timestamp\n    FROM Click b JOIN Click a ON b.userid=a.userid AND\n        b.timestamp <= a.timestamp AND\n        b.timestamp >= a.timestamp - INTERVAL 10 MINUTE;\n/* Recommend pages that are frequently co-visited */\nRecommendation := SELECT beforeURL AS url, afterURL AS rec,\n    count(1) AS frequency FROM VisitAfter\n    GROUP BY url, rec ORDER BY url ASC, frequency DESC;",queryURL:'?query=query%20ContentRecommendation(%24pageURL%3A%20String!)%20%7B%0A%09Recommendation(url%3A%20%24pageURL)%20%7B%0A%20%20%20%20rec%0A%20%20%20%20frequency%0A%20%20%7D%0A%7D&operationName=ContentRecommendation&variables=%7B%0A%20%20"pageURL"%3A%20"mascot_books%2Fa_time_of_gifts"%0A%7D',link:"docs/getting-started/tutorials/recommendations/intro"},{name:"Sensors",usecase:"Metrics & Monitoring",description:n.createElement(n.Fragment,null,"Ingest sensor data, aggregate readings, and monitor maximum temperature in the last minute.",n.createElement("br",null),n.createElement("br",null),"DataSQRL makes time-window aggregations easy."),script:"IMPORT datasqrl.example.sensors.*; -- Import sensor data\nIMPORT time.endOfSecond;  -- Import time function\n/* Aggregate sensor readings to second */\nSecReading := SELECT sensorid, endOfSecond(time) as timeSec,\n        avg(temperature) as temp FROM SensorReading\n    GROUP BY sensorid, timeSec;\n/* Get max temperature in last minute */\nSensorMaxTemp := SELECT sensorid, max(temp) as maxTemp\n    FROM SecReading\n    WHERE timeSec >= now() - INTERVAL 1 MINUTE\n    GROUP BY sensorid;",queryURL:'?query=query%20MachineTemperature(%24machine%3A%20Int!)%20%7B%0A%09Machine(machineid%3A%20%24machine)%20%7B%0A%20%20%20%20maxTemp%0A%20%20%20%20avgTemp%0A%20%20%7D%0A%7D&variables=%7B%0A%20%20"machine"%3A%202%0A%7D',link:"docs/getting-started/tutorials/iot/intro"},{name:"Seedshop",usecase:"Customer 360\xb0",description:n.createElement(n.Fragment,null,"Integrate customer data from multiple sources and integrate it into a customer 360.",n.createElement("br",null),n.createElement("br",null),"DataSQRL supports relationships and nested tables to structure data."),script:"IMPORT datasqrl.seedshop.Orders;  -- Import orders stream\nIMPORT time.endOfWeek;            -- Import time function\n/* Create new table of unique customers */\nUsers := SELECT DISTINCT customerid AS id FROM Orders;\n/* Create relationship between customers and orders */\nUsers.purchases := JOIN Orders ON Orders.customerid = @.id;\n/* Aggregate the purchase history for each user by week */\nUsers.spending := SELECT endOfWeek(p.time) AS week,\n         sum(i.quantity * i.unit_price) AS spend\n      FROM @.purchases p JOIN p.items i\n      GROUP BY week ORDER BY week DESC;",queryURL:'?query=query%20UserSpending(%24userid%3A%20Int!)%20%7B%0A%09Users(id%3A%20%24userid)%20%7B%0A%20%20%20%20spending%20%7B%0A%20%20%20%20%20%20week%0A%20%20%20%20%20%20spend%0A%20%20%20%20%20%20saved%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=UserSpending&variables=%7B%0A%20%20"userid"%3A%202%0A%7D',link:"/docs/getting-started/quickstart"}],y=(e,t)=>t,N=[{url:"/docs/getting-started/concepts/why-datasqrl",text:"Benefits of DataSQRL"},{url:"docs/getting-started/concepts/datasqrl",text:"How DataSQRL Works"},{url:"docs/getting-started/concepts/when-datasqrl",text:"When to Use DataSQRL"},{url:"/docs/getting-started/quickstart",text:"Getting Started with DataSQRL"},{url:"docs/getting-started/intro/overview",text:"The DataSQRL Tutorial"}],R=[{image:"/img/external/aws_logo.svg",title:"AWS"},{image:"/img/external/gcp_logo.svg",title:"GCP"},{image:"/img/external/azure_logo.svg",title:"Azure"},{image:"/img/external/docker_logo.svg",title:"Docker"},{image:"/img/external/kubernetes_logo.svg",title:"Kubernetes"},{image:"/img/external/confluent_logo.svg",title:"Confluent Cloud"}];function L(){const[e,t]=(0,n.useState)(0),[a,d]=(0,n.useState)(!1),{siteConfig:p}=(0,o.Z)();return n.createElement(s.Z,{title:v.title,description:v.tagline},n.createElement(u.Z,v),n.createElement("main",null,n.createElement("section",{className:c.Z.content},n.createElement("div",{className:"container"},n.createElement("div",{className:"row margin-bottom--xl margin-top--lg"},n.createElement("div",{className:"col col--6"},n.createElement("div",{class:c.Z.usecase},"Pick an Example:\xa0",n.createElement("select",{onChange:e=>{const a=e.target.selectedIndex;t(a)}},w.map(((e,t)=>n.createElement("option",{key:t,value:e.name},y(e.name,e.usecase)))))),n.createElement(i.Z,{language:"sql"},w[e].script)),n.createElement("div",{className:"col col--5 text--left"},n.createElement("h2",null,"Step 1: Implement in SQL"),n.createElement("p",{className:"hero__subtitle"},w[e].description))),n.createElement("div",{className:"row margin-bottom--xl"},n.createElement("div",{className:"col col--6 text--center"},n.createElement("img",{width:"400",src:"/img/reference/compiledMicroservice.svg",alt:"DataSQRL compiled microservice"})),n.createElement("div",{className:"col col--5 text--left"},n.createElement("h2",null,"Step 2: Compile to Microservice"),n.createElement("p",{className:"hero__subtitle"},"DataSQRL compiles your script into a complete microservice integrating Apache Flink, Kafka, database, and API layer into a fast, scalable, and robust application."))),n.createElement("div",{className:"row margin-bottom--xs"},n.createElement("div",{className:"col col--6 hide-small-screens"},n.createElement(b,{FeatureList:R,columnBase:4})),n.createElement("div",{className:"col col--5 text--left"},n.createElement("h2",null,"Step 3: Deploy Anywhere"),n.createElement("p",{className:"hero__subtitle"},"DataSQRL builds optimized executables for each component that run efficiently on your preferred cloud, managed service, or self-hosted."),n.createElement("div",{className:c.Z.buttons},n.createElement(l.Z,{className:"button button--primary button--lg",to:w[e].link},"Try Out DataSQRL in 5 Minutes!")))))),n.createElement(m.Z,{FeatureList:f}),n.createElement("section",{className:c.Z.content},n.createElement("div",{className:"container"},n.createElement("h2",null,"How to build event-driven microservices",n.createElement("button",{id:"withDataSQRLButton",className:(0,r.Z)("button button--secondary",c.Z.headerButton,a&&"button--outline"),onClick:()=>{d(!1)}},"with DataSQRL"),n.createElement("button",{id:"withoutDataSQRLButton",className:(0,r.Z)("button button--secondary",c.Z.headerButton,!a&&"button--outline"),onClick:()=>{d(!0)}},"without DataSQRL")),n.createElement("div",{id:"withDataSQRLRow",className:(0,r.Z)("row",a&&c.Z.notVisible)},n.createElement("div",{className:"col col--8"},n.createElement("img",{className:c.Z.pipelineSvg,src:"/img/index/withDataSQRL.svg",loading:"lazy",alt:"Building Data APIs with DataSQRL"})),n.createElement("div",{className:"col col--4"},n.createElement("p",{className:"text--left margin-bottom--sm"},"DataSQRL compiles an event-driven microservice from the SQL script that defines your data processing and GraphQL schema that defines your API. All plumbing installed and ready to go."),n.createElement("p",{className:"text--left margin-bottom--sm"},"Wanna know exactly what DataSQRL does and how it works? Click below!"),n.createElement("div",{className:"text--center"},n.createElement(l.Z,{className:"button button--primary",to:"/docs/getting-started/concepts/datasqrl"},"How DataSQRL Works")))),n.createElement("div",{id:"withoutDataSQRLRow",className:(0,r.Z)("row",!a&&c.Z.notVisible)},n.createElement("div",{className:"col col--8"},n.createElement("img",{className:c.Z.pipelineSvg,src:"/img/index/withoutDataSQRL.svg",loading:"lazy",alt:"Building Data APIs without DataSQRL"})),n.createElement("div",{className:"col col--4"},n.createElement("p",{className:"text--left margin-bottom--sm"},"Without DataSQRL you have to implement Flink, Kafka, the database, and API separately and then integrate the components and make sure the data flows efficiently between them. Plus testing, deployment, monitoring and so forth."),n.createElement("p",{className:"text--left margin-bottom--sm"},"DataSQRL saves you from all that low-level data plumbing work."),n.createElement("div",{className:"text--center"},n.createElement(l.Z,{className:"button button--primary",to:"/docs/getting-started/concepts/why-datasqrl"},"Why Should I Use DataSQRL?")))))),n.createElement(m.Z,{FeatureList:S}),n.createElement(g,{teaser:"Learn more: ",links:N})))}},9329:(e,t,a)=>{a.d(t,{Z:()=>n});const n={features:"features_xdhU",feature:"feature_eSJM",featureSvg:"featureSvg__8YW",featureProfile:"featureProfile_MVWl"}},1207:(e,t,a)=>{a.d(t,{Z:()=>n});const n={pipelineSvg:"pipelineSvg_u6tu",usecase:"usecase_AwXe",verticalForm:"verticalForm_TINq",emailForm:"emailForm_YZHj",closer:"closer_FyJE",heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",code:"code_wG_E",codeContent:"codeContent_DXTl",headerButton:"headerButton_zTOk",notVisible:"notVisible_Sg8i",content:"content_ewlY",table:"table_aDIh"}}}]);