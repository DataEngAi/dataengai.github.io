"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8646],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9151:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={title:"Connect Data Source"},s="Connecting Data Sources",i={unversionedId:"getting-started/intro/data-sources",id:"getting-started/intro/data-sources",title:"Connect Data Source",description:'" width="40%"/>',source:"@site/docs/getting-started/intro/data-sources.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/data-sources",permalink:"/docs/getting-started/intro/data-sources",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/intro/data-sources.md",tags:[],version:"current",frontMatter:{title:"Connect Data Source"},sidebar:"docs",previous:{title:"Implement SQRL Script",permalink:"/docs/getting-started/intro/sqrl"},next:{title:"Design the API",permalink:"/docs/getting-started/intro/api"}},l={},p=[{value:"What is a Data Source?",id:"what-is-a-data-source",level:2},{value:"What is a Data Package?",id:"what-is-a-data-package",level:2},{value:"Resolving Imports",id:"resolving-imports",level:2},{value:"Creating a Data Package",id:"creating-a-data-package",level:2},{value:"Table Timestamps",id:"table-timestamps",level:2},{value:"Importing Functions",id:"importing-functions",level:2},{value:"Updating the SQRL Script",id:"updating-the-sqrl-script",level:2},{value:"Temporal Join",id:"temporal-join",level:3},{value:"Developing with Data Sources",id:"variant",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connecting-data-sources"},"Connecting Data Sources"),(0,r.kt)("img",{src:"/img/index/undraw_connection_sqrl.svg",alt:"Connecting Data Sources >",width:"40%"}),(0,r.kt)("p",null,"SQRL scripts import data from external data sources into tables. ",(0,r.kt)("a",{parentName:"p",href:"sqrl"},"In the last chapter")," we imported ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," data."),(0,r.kt)("p",null,"In this chapter, we'll take a closer look at importing data and creating a custom data package for importing our own data."),(0,r.kt)("h2",{id:"what-is-a-data-source"},"What is a Data Source?"),(0,r.kt)("p",null,"A data source is a system that holds data and allows access to the data. DataSQRL supports many types of data systems as data sources: filesystems, cloud storage, database systems, queues, logs, and more. Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/data-system"},"full list of supported data systems")," which links to detailed information on how to connect them to DataSQRL."),(0,r.kt)("h2",{id:"what-is-a-data-package"},"What is a Data Package?"),(0,r.kt)("p",null,"A data package contains configuration files that specify the location and structure of one or multiple tables in a data source."),(0,r.kt)("p",null,"DataSQRL loads the data package for each ",(0,r.kt)("inlineCode",{parentName:"p"},"IMPORT")," statement at compile time to identify and locate the imported table. A data package is a DataSQRL specific artifact used to define an external data stream which is ingested by the data pipeline that the DataSQRL compiler generates."),(0,r.kt)("p",null,"That's a lot of concepts to throw around. Let's summarize:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"data system")," is a computer system or piece of infrastructure that holds data."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"data source")," specifies how to access a dataset on a data system."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"data package")," contains the configuration DataSQRL needs to read table data from a data source."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"IMPORT")," statement make table data from a data package available for querying and transformation in an SQRL script. ")),(0,r.kt)("h2",{id:"resolving-imports"},"Resolving Imports"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart"},"Quickstart tutorial")," we imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders;\n")),(0,r.kt)("p",null,"The last element of the import path specifies the table ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," we are importing and the rest defines the data package ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop")," we are importing from. We can use the asterisk character ",(0,r.kt)("inlineCode",{parentName:"p"},"*")," instead of a table name to import all tables from a package."),(0,r.kt)("p",null,"DataSQRL first attempts to resolve a package as a folder path relative to where the DataSQRL compiler is invoked. In our example, DataSQRL looks for the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl/seedshop")," (on Unix based systems) relative to where you placed the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," script."),(0,r.kt)("p",null,"When a local folder for the package does not exist, DataSQRL looks up the package in the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"repository")," and downloads it if it exists. That's what happens in our example."),(0,r.kt)("p",null,"DataSQRL uses the latest version of the package in the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"repository"),". You can also ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/overview#remote"},"declare package dependencies")," explicitly with version."),(0,r.kt)("h2",{id:"creating-a-data-package"},"Creating a Data Package"),(0,r.kt)("p",null,"If the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"repository")," does not contain the data you need, or you want to import data from your own data source, you create a new data package."),(0,r.kt)("p",null,"For example, we want to add user data from our customer database to our seed shop data API.\nFirst, download the customer data and place it into a sub-folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir mydata; cd mydata; \nwget https://github.com/DataSQRL/sqrl/raw/main/sqrl-examples/quickstart/data/customers.json.gz;\ncd ..\n")),(0,r.kt)("p",null,"We are going to use DataSQRL's data discovery command to create a data package for us."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -v $PWD:/build datasqrl/datasqrl-cmd discover mydata -o mysourcepackage\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," command takes the directory in which we placed the data as an argument. It inspects the files in the directory and creates table configurations for them. Those configurations are written to the output directory ",(0,r.kt)("inlineCode",{parentName:"p"},"mysourcepackage")," specified via the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," option."),(0,r.kt)("h2",{id:"table-timestamps"},"Table Timestamps"),(0,r.kt)("p",null,"We can now import the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customer")," table from our custom package into our script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT mysourcepackage.Customers AS Users TIMESTAMP epochMilliToTimestamp(changed_on) AS timestamp;\n")),(0,r.kt)("p",null,"The package name is ",(0,r.kt)("inlineCode",{parentName:"p"},"mysourcepackage")," which maps onto the folder we just created that contains the data package configuration files."),(0,r.kt)("p",null,"We are renaming the table as ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," in our script to match the previously defined ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table."),(0,r.kt)("p",null,"We are also adding an explicit timestamp column to our table. As we discussed in the ",(0,r.kt)("a",{parentName:"p",href:"sqrl"},"previous chapter"),', all tables imported from data sources are stream tables. Each row of a stream table must have a timestamp that places the row on the timeline. This is important because DataSQRL needs to know when the row "happened" for realtime processing.'),(0,r.kt)("p",null,"In many cases, the DataSQRL compiler can automatically figure out what the timestamp column of a table is. For ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," DataSQRL correctly inferred the timestamp column based on how we used the tables in the scripts."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table, however, does not have a timestamp column. It has the column ",(0,r.kt)("inlineCode",{parentName:"p"},"changed_on")," which contains a number that represents the timestamp as milliseconds since epoch. We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"epochMilliToTimestamp")," function to convert it to a timestamp as store the result in the added ",(0,r.kt)("inlineCode",{parentName:"p"},"timestamp")," column on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table we are importing."),(0,r.kt)("h2",{id:"importing-functions"},"Importing Functions"),(0,r.kt)("p",null,"We import functions similarly to tables. We imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"endOfWeek")," time-window function from the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," package."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT time.endOfWeek;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"time")," is a system library package that is part of DataSQRL."),(0,r.kt)("p",null,"In addition, we need the ",(0,r.kt)("inlineCode",{parentName:"p"},"epochMilliToTimestamp")," for the timestamp conversion. Rather than add another import, we are just going to import all time functions. We need to be careful to import the functions before we use them. That means, our imports should look like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders;\nIMPORT datasqrl.seedshop.Products;\nIMPORT time.*;\nIMPORT mysourcepackage.Customers AS Users TIMESTAMP epochMilliToTimestamp(changed_on) AS timestamp;\n")),(0,r.kt)("h2",{id:"updating-the-sqrl-script"},"Updating the SQRL Script"),(0,r.kt)("p",null,"Now, that we have imported our user data, let's update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table definition to de-duplicate the change stream of customer data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users := DISTINCT Users ON id ORDER BY timestamp DESC;\n")),(0,r.kt)("p",null,"This statement re-defines the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table as the most-recent version of each user as identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("p",null,"In addition, we are going to do a little bit of data cleaning and add a relationship from ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Users"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.country := country?'none';\nOrders.user := JOIN Users ON @.customerid = Users.id;\n")),(0,r.kt)("p",null,"This preparation work allows us to refine the product analysis we added at the end of the last chapter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products.volume_10day := SELECT u.country, sum(i.quantity) as quantity,\n         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight\n      FROM @.ordered_items i JOIN i.parent o  JOIN o.user u\n      WHERE o.time > now() - INTERVAL 10 DAY GROUP BY u.country;\n")),(0,r.kt)("p",null,"We are updating the query for the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"volume_10day")," query to group by the country of the user. That gives us a more detailed view of recent product volume by country."),(0,r.kt)("h3",{id:"temporal-join"},"Temporal Join"),(0,r.kt)("p",null,"It also gives us an opportunity to introduce another important concept in SQRL: temporal joins."),(0,r.kt)("p",null,"When joining stream with state tables, you often want to join the stream with the state as it was at the time that a particular row in the stream occurred, i.e. the timestamp of the row.\nHowever, an inner join - which is the default join in SQL - joins a stream row with the most current version of the state table. That means the result of the join can change as the state table changes."),(0,r.kt)("p",null,"That's usually not what we want. In our example query, we want the country that the user was in when the order was placed and not the country that the user is in currently. For example, if a user placed an order while living in Germany 5 days ago and then moves to France, we don't want the order to get re-assigned to France in our product volume aggregation."),(0,r.kt)("p",null,"To join stream with state tables at the timestamp of the stream, SQRL supports temporal joins. And SQRL makes temporal joins the default join type when joining on a state tables key columns as we do in the example above. That means, we don't have to write out the temporal join explicitly, but we can do that for additional clarity:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products.volume_10day := SELECT u.country, sum(i.quantity) as quantity,\n         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight\n      FROM @.ordered_items i JOIN i.parent o TEMPORAL JOIN o.user u\n      WHERE o.time > now() - INTERVAL 10 DAY GROUP BY u.country;\n")),(0,r.kt)("h2",{id:"variant"},"Developing with Data Sources"),(0,r.kt)("p",null,"During development, we prefer to work with static files because it is predictable and easy to debug. That's why we are using only file-based data sources for our getting started tutorials. It allows us to quickly iterate on our SQRL script without having to worry about changing data and complex infrastructure setup to connect to data systems."),(0,r.kt)("p",null,"However, a downside of static data is that it doesn't evolve over time which makes it hard to develop recency queries like ",(0,r.kt)("inlineCode",{parentName:"p"},"Products.volume_10day")," query. If you tried to access that table in the API you found that it was empty. That's because the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," data we are using for the seed shop example is more than 10 days old, which means there is no recent data to aggregate."),(0,r.kt)("p",null,"One easy way to fix this is to time-travel static data during development. In our example, we do this by moving the timestamps of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," data forward in time. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders TIMESTAMP time + INTERVAL 8 DAY AS time; -- Adjust the number of days!!\n")),(0,r.kt)("p",null,"The last order from that dataset is placed on 2023-02-21. We are writing this tutorial on March 1st, 2023 which is 8 days later. Hence, we are adding 8 days. You will have to add a larger number of days depending on how long ago 2023-02-21 is for you."),(0,r.kt)("p",null,"DataSQRL is built specifically for realtime and streaming data and supports data sources like ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/overview"},"queues, logs, and databases")," which store streaming or changing data. In DataSQRL every source table is a (potentially endless) stream of rows. But during development it is nice to work with static data until we have iterated our data API to the point we are ready to go to production."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Our seed shop data service now includes user data and improved business intelligence. Nicely done. Take a look at the resulting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-user.sqrl"},"seedshop.sqrl")," script."),(0,r.kt)("p",null,"You've already learned about SQRL and how to create custom data packages. ",(0,r.kt)("a",{parentName:"p",href:"api"},(0,r.kt)("strong",{parentName:"a"},"In the next chapter"))," we are going to complete the trifecta and design the API for our data service."),(0,r.kt)("p",null,"If you want to learn more about data sources in more detail, check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/overview"},"data sources documentation"),". In this introduction, we only covered file system sources. Check out the other ",(0,r.kt)("a",{parentName:"p",href:"/docs/category/data-system"},"data systems")," that DataSQRL supports and how to use data discovery to create data packages from them."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If DataSQRL does not yet support a data system you want to use as a data source, ",(0,r.kt)("a",{parentName:"p",href:"/community"},"let us know"),".")))}u.isMDXComponent=!0}}]);