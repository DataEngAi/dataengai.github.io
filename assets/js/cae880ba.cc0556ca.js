"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8227],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4506:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Implement SQRL Script"},o="Implementing SQRL Scripts",s={unversionedId:"getting-started/intro/sqrl",id:"getting-started/intro/sqrl",title:"Implement SQRL Script",description:"The logic and function of a data service is defined in the SQRL script.",source:"@site/docs/getting-started/intro/sqrl.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/sqrl",permalink:"/docs/getting-started/intro/sqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/intro/sqrl.md",tags:[],version:"current",frontMatter:{title:"Implement SQRL Script"},sidebar:"docs",previous:{title:"Connect Data Source",permalink:"/docs/getting-started/intro/data-sources"},next:{title:"Access the API",permalink:"/docs/getting-started/intro/api"}},l={},d=[{value:"What&#39;s in a SQRL Script?",id:"whats-in-a-sqrl-script",level:2},{value:"Tables",id:"tables",level:2},{value:"Import",id:"import",level:3},{value:"Query",id:"query",level:3},{value:"Incrementally",id:"incrementally",level:3},{value:"Table Schema",id:"table-schema",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Nested Tables",id:"nested-tables",level:2},{value:"Defining Nested Tables",id:"defining-nested-tables",level:3},{value:"Event vs Entity Tables",id:"event-entity",level:2},{value:"Time",id:"time",level:2},{value:"Time Buckets for Grouping",id:"time-buckets-for-grouping",level:3},{value:"Time Slices for Recency",id:"time-slices-for-recency",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implementing-sqrl-scripts"},"Implementing SQRL Scripts"),(0,r.kt)("p",null,"The logic and function of a data service is defined in the SQRL script.\nThat's where the action is. We are going to dive deeper into\nthe SQRL language and how to write SQRL scripts by reviewing and extending the\n",(0,r.kt)("a",{parentName:"p",href:"../quickstart"},"nut shop tutorial"),"."),(0,r.kt)("p",null,"When you make it through this document, you will know the key concepts\nof SQRL, be ready to write your own SQRL scripts, and take the world by storm\nwith your new data service."),(0,r.kt)("h2",{id:"whats-in-a-sqrl-script"},"What's in a SQRL Script?"),(0,r.kt)("p",null,"An SQRL script defines tables and relationships between them. Together, they\nform the data model of the data service which is exposed as an API."),(0,r.kt)("p",null,"That's pretty much all there is to it. You define tables holding rows of data\nand relationships between those row records and the resulting data model\ncan be navigated through an API that DataSQRL generates for you."),(0,r.kt)("p",null,"Tables and relationships are defined in SQL - with some additions and a little\nbit of syntactic sugar thrown in there to make your life easier. We call\nthe resulting language variant ",(0,r.kt)("strong",{parentName:"p"},"SQRL"),"."),(0,r.kt)("p",null,"The rest of this document explains how to define tables and relationships\nin SQRL so you can build the data service of your dreams."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are unfamiliar with SQL, we recommend you read the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL Primer")," which introduces\nthe basic concepts of SQL.")),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"A table is made up of columns (or fields) and rows. A row represents a data record.\nColumns have a data type and represent an attribute of a record in the table. We often\nrefer to columns as ",(0,r.kt)("em",{parentName:"p"},"fields")," in the context of a data record. Records and rows, columns\nand fields, Darth Vader and Anakin Skywalker are all name pairs that describe the same\nthing."),(0,r.kt)("p",null,"Tables are the central concept of SQRL. Tables structure and contain all the data you\nare building with in an SQRL script. Tables are exposed as endpoints in the API that\nDataSQRL generates for you, so you can query the data in them."),(0,r.kt)("p",null,"You define most tables in SQRL using one of 3 ways: by import, by query, or incrementally."),(0,r.kt)("h3",{id:"import"},"Import"),(0,r.kt)("p",null,"An important statement adds the table you are importing to your SQRL script.\nIn the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#adding-data"},"nut shop tutorial")," we imported the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," tables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.*;\n")),(0,r.kt)("p",null,"These tables are now defined in our script and we can transform, query, or otherwise build with\nthe data they contain. The ",(0,r.kt)("a",{parentName:"p",href:"data-sources#basics"},"previous section")," explains how to connect\ndata sources to DataSQRL for importing data."),(0,r.kt)("p",null,"Import statements are at the top of your SQRL script so you can see all the data you are importing\nat one glance."),(0,r.kt)("p",null,"Let's import the nutritional information from our cloud bucket data source by adding the\nfollowing import statement to the top of our customer 360 script: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT usda-data.Nuts;\n")),(0,r.kt)("p",null,"This defines a ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuts")," table based on the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nuts.json")," file that's contained in the\nconnected cloud bucket. Each JSON object in that file is represented by a row in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuts")," table.\nWe'll use the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuts")," table for our recommendation engine later on."),(0,r.kt)("h3",{id:"query"},"Query"),(0,r.kt)("p",null,"Once you have imported tables, you build with the data they contain.\nYou do this by defining new tables that query the data in existing ones."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#structure"},"intro tutorial")," we defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table by querying\nfor all the unique customer ids in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,r.kt)("p",null,"You can bring to bear all the SQL you already know to define new tables in SQRL.\nFor example, suppose PM is telling us that they want to add a McDonald's inspired\n",(0,r.kt)("em",{parentName:"p"},'"over X million orders served"')," banner to the nut shop homepage. \\\nWe define a new ",(0,r.kt)("inlineCode",{parentName:"p"},"NumOrders")," table that contains the count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NumOrders := SELECT COUNT(*) AS count FROM Orders;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NumOrders")," table gets exposed in our data service API as an additional endpoint\nthrough which the frontend team can query for the current order count."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    NumOrders\n    {\n        count\n    } \n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"DataSQRL is still young and we are actively working on SQL feature parity in SQRL.\nTake a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/roadmap#sql-parity"},"roadmap")," for current\nlimitations and what we are working on.")),(0,r.kt)("h3",{id:"incrementally"},"Incrementally"),(0,r.kt)("p",null,"You can also define tables incrementally by adding new columns to an\nexisting table."),(0,r.kt)("p",null,"In the nut shop tutorial, we added the column ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.date := function.time.fromEpochMillis(time);\n")),(0,r.kt)("p",null,"The part on the left-hand side of the\nassignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," is the fully specified ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.date")," column\nwe are defining. The part on the right-hand side is the actual definition.\nIn this case, we are applying the function ",(0,r.kt)("inlineCode",{parentName:"p"},"fromEpochMillis")," within the\n",(0,r.kt)("inlineCode",{parentName:"p"},"time")," function package to the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," column to convert it to a ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),"."),(0,r.kt)("p",null,"This is a ",(0,r.kt)("strong",{parentName:"p"},"localized expression")," that is evaluated within the context\nof the table on the left-hand side - in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders"),". That's why\nwe can refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," column of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table without any\nqualifiers."),(0,r.kt)("p",null,"For more complex column definitions,\nwe can use the full ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query syntax."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.since := SELECT MIN(o.date) FROM Orders o WHERE o.customerid = @.id;\n")),(0,r.kt)("p",null,"This statement defines a new column ",(0,r.kt)("inlineCode",{parentName:"p"},"since")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table as the\ndate when the customer placed their first order."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query on the right is a ",(0,r.kt)("strong",{parentName:"p"},"localized query")," that is evaluated within\nthe context of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table. Think of a localized query\nas being executed for each row of table on the left-hand side. We can use the special table\nhandle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to column values of that row. \\\nIn this instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"@.id")," refers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," columns of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table."),(0,r.kt)("p",null,"Localized queries are a feature of SQRL that allows incremental table definitions\nand simplifies queries because we don't have to write the implicit JOIN between\n",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," in the statement above."),(0,r.kt)("p",null,"Localized queries in incremental column definitions must return a single value\nwhich gets assigned to the defined column. In other words, the query must be\nguaranteed to return a single row with a single column in it."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"table-schema"},"Table Schema"),(0,r.kt)("p",null,"The data type of columns is inferred from the input data or definition of the table.\nIn our example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," column on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table is of type ",(0,r.kt)("inlineCode",{parentName:"p"},"Number")," which\nDataSQRL inferred from the records in the orders data. The data type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," column\ndefined above is ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," which is inferred from the result type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fromEpochMillis"),"\nfunction."),(0,r.kt)("p",null,"In most cases, type inference is obvious and you can let DataSQRL handle data types and schema for you.\nOne less thing to worry about. \\\nRead more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sources/schema-management"},"schema management"),"\nand how to ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/sources/manual-schema"},"manually define data types")," for\ndatasets with heterogeneous or very messy data where it isn't obvious."),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("p",null,"Relationships relate records within and between tables.\nDefining relationships has two benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Relationships are exposed in the API allowing consumers\nto retrieve related records within a single request."),(0,r.kt)("li",{parentName:"ol"},"Relationships can be used in queries instead of explicit\nJOINs which simplifies queries and makes them more readable.\nThis is particularly useful when we query along the same\nrelationship multiple times.")),(0,r.kt)("p",null,"In the nut shop tutorial, we defined the following relationship between\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time DESC;\n")),(0,r.kt)("p",null,"A relationship is defined by a JOIN between two or more tables using the standard\nSQL ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN ... ON ...")," syntax. The starting point of the JOIN is always the table\non the left-hand side and we can use the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to\nit in the JOIN expression. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," is our ",(0,r.kt)("em",{parentName:"p"},"start")," table and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," is our ",(0,r.kt)("em",{parentName:"p"},"end")," table of the relationship definition."),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN [table] ON [condition]")," expression, a relationship\ndefinition can end with an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause. The order\nis used as the default ordering when the relationship is accessed through the API.\nThe limit specifies the maximum number of related rows that are returned\nwhen traversing the relationship (i.e. the maximum multiplicity)."),(0,r.kt)("p",null,"The relationship is defined as a field\non the start table, which is how we access it in the script or through the API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    Customers(id: "50")\n    {\n        purchases(limit:10)\n        {\n            id\n            time\n        }\n    } \n}\n')),(0,r.kt)("p",null,"We can also access relationships when we define tables or columns in our\nSQRL script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customer.total_orders := SUM(purchases.total);\n")),(0,r.kt)("p",null,"In this incremental column definition from the nut shop tutorial, we are summing\nthe total value of all orders related to a particular customer record by the\n",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship."),(0,r.kt)("p",null,"This expression is much easier to read and write than the equivalent\ndefinition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.total_orders := SELECT SUM(o.total) FROM Orders o WHERE o.customerid = @.id;\n")),(0,r.kt)("p",null,"And we can reuse relationships across definitions. For instance, we can rewrite\nthe definition of the ",(0,r.kt)("inlineCode",{parentName:"p"},"since")," column on ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.since := MIN(purchases.date);\n")),(0,r.kt)("p",null,"Relationships make it easier to implement SQRL scripts, allow you to reuse JOINs\nbetween queries, and add structure to your data model which is accessible through\nthe API. Adding structure to your data by explicitly defining relationships also\nclarifies the data itself and how you plan to use it."),(0,r.kt)("p",null,"For example, by defining relationships between the ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuts")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," tables\nwe explicitly establish a 1-to-1 relationship between those two sets of records\nthat we can use to enrich our ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," data with additional information."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products.nutrition := JOIN Nuts ON Nuts.fdcID = @.usda_id LIMIT 1;\nNuts.product := JOIN Products ON @.fdcID = Products.usda_id LIMIT 1;\n")),(0,r.kt)("h2",{id:"nested-tables"},"Nested Tables"),(0,r.kt)("p",null,"SQRL supports nested and hierarchical data like JSON objects through nested tables.\nA nested table has a parent table and all rows in a nested table are associated\nwith a single parent row in the parent table."),(0,r.kt)("p",null,"In the nut shop tutorial the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table has a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table\nthat contains the item records for each order. When referring to a nested table,\nwe have to use the fully qualified name of the table which includes the parent.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM Orders.items")," is valid but ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM items")," is not because\nthere is no table with that name in the global namespace of the SQRL script."),(0,r.kt)("p",null,"SQRL automatically adds a relationship field with the name of the nested\ntable to the parent table which relates all child records to the parent\nrecord. The ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table can be used to query\nthe item records for a particular order, e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT SUM(items.discount) AS order_discount FROM Orders"),". \\\nLikewise, SQRL adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," relationship on the child table which relates\nrows to their parent rows in the parent table. This relationship can be used\nto refer to parent row attributes, e.g.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT productid, parent.date FROM Orders.items")),(0,r.kt)("h3",{id:"defining-nested-tables"},"Defining Nested Tables"),(0,r.kt)("p",null,"We can also define nested tables in SQRL. In the nut shop tutorial, we defined\nthe nested table ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers.spending_by_month")," to aggregate spending by month\nfor each customer. Nested tables are useful when we want to analyze our data\nin partitions, like order totals and discounts by customer."),(0,r.kt)("p",null,"Whenever you want to build data analysis ",(0,r.kt)("strong",{parentName:"p"},"by dimension")," or compute a\nresult set ",(0,r.kt)("strong",{parentName:"p"},"for each record"),", nested tables are your friend."),(0,r.kt)("p",null,"For example, let's build the simplest and most effective product recommendation\ninto our customer 360: recommending products customers have already purchased\norderd by frequency. In other words, we want to look at all the products purchased\n",(0,r.kt)("strong",{parentName:"p"},"for each customer")," and sort them by frequency of purchase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.past_purchases :=\n         SELECT i.productid, count(i.*) as num_orders, sum(i.quantity) as total_quantity\n         FROM @.purchases.items i\n         GROUP BY i.productid\n         ORDER BY num_orders DESC, total_quantity DESC;\n")),(0,r.kt)("p",null,"The table ",(0,r.kt)("inlineCode",{parentName:"p"},"past_purchases")," is defined as a nested table within ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers"),".\nThe SQL query on the right-hand side is a\n",(0,r.kt)("em",{parentName:"p"},"localized query")," which means it is evaluated in the context of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers"),"\ntable. Nested tables are always defined in the context of the parent table\nand we can think of the query definition as being applied to ",(0,r.kt)("em",{parentName:"p"},"each row")," of the\nparent table."),(0,r.kt)("p",null,"We use the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to each row in the parent\n",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause ",(0,r.kt)("inlineCode",{parentName:"p"},"@.purchases.items")," chains together\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship on ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship\non ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," to retrieve all item records for all order records associated\nwith a single customer record. Chaining together relationships allows us to\navoid the complexity of multiple JOIN expressions in this query."),(0,r.kt)("h2",{id:"event-entity"},"Event vs Entity Tables"),(0,r.kt)("p",null,"We distinguish between event and entity tables in SQRL."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"event table")," consists of immutable (i.e. unchanging) rows of data that\nare incrementally added to the table over time and never deleted.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table in the\nnut shop tutorial is an event table because an order does not change once\nit has been processed."),(0,r.kt)("p",null,"In an ",(0,r.kt)("strong",{parentName:"p"},"entity table")," the column values of rows change over time and rows\nare added to and deleted from the table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," table is an entity\ntable because it represents our current list of products which may change\nover time."),(0,r.kt)("p",null,"Why is this distinction important? Because DataSQRL treats all data\nproduced by data sources as event tables. When you import a table, you\nget an event table of immutable records that are ingested from the\ndata source in realtime."),(0,r.kt)("p",null,"Let's do a little experiment to see how this works. While you still have\nthe nut shop data service running, open up an editor to modify the\n",(0,r.kt)("inlineCode",{parentName:"p"},"products.csv")," file by removing the word ",(0,r.kt)("em",{parentName:"p"},'"(desiccated)"')," from the product\nname of the first record on line 2. Then save the file. Because the\ndata was modified, this triggers an update from the data source and\nDataSQRL ingests all the product records again."),(0,r.kt)("p",null,"When we ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#api"},"query the API"),"\nfor products with ",(0,r.kt)("inlineCode",{parentName:"p"},"id=1")," we get\ntwo results with slightly different names."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    Products(id: "1") {\n        name\n        sizing\n        weight_in_grams\n    } \n}\n')),(0,r.kt)("p",null,"In fact, we now have duplicate records for all products: one from\nbefore we edited the file and one from after. That's because\nDataSQRL treats all source data as an event stream. If the underlying\ndata are entities, like products in our case, then we get an event\nstream of updates to those entities."),(0,r.kt)("p",null,"To get a ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," entity table with a single, most-recent version\nof each product, we have to\ndefine ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," as a deduplicated entity table at the top of our\nSQRL script after the imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products := DISTINCT Products ON id ORDER BY _ingest_time DESC;\n")),(0,r.kt)("p",null,"This defines an entity table that takes the most recent update\nfor each product by id. In this case ",(0,r.kt)("em",{parentName:"p"},"recency")," is defined by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"_ingest_time")," column which is a column that exists on all\nevent tables and marks the time when a record was ingested by\nDataSQRL."),(0,r.kt)("p",null,"When you run the products API query again you only get a single\nresult with the most current product."),(0,r.kt)("p",null,"When we are dealing with static data, there is no real difference\nbetween event and entity tables. However, when dealing with\nstreaming data and connecting to data in databases it is important\nto understand the difference."),(0,r.kt)("p",null,"A useful way to think about it: events happen and don't change\nafter the fact whereas entities evolve over time. When you import\na table that you want to treat as an entity, make sure to use a\n",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," query to define the table as an entity table."),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("p",null,"When building real-time data services, ",(0,r.kt)("em",{parentName:"p"},"time")," is often an important aspect.\nThe two most common time-based transformations on data are grouping data\npoints by time buckets and slicing data by recent time interval. SQRL provides\nconvenience features to address both of those."),(0,r.kt)("h3",{id:"time-buckets-for-grouping"},"Time Buckets for Grouping"),(0,r.kt)("p",null,"For our nut shop customer 360 we computed customer spending and savings\nprofiles by month as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.spending_by_month :=\n         SELECT function.time.truncateToMonth(date) AS month,\n                sum(total) AS total_spend,\n                sum(discount) AS total_savings\n         FROM @.purchases\n         GROUP BY month ORDER BY month DESC;\n")),(0,r.kt)("p",null,"This defines a nested table which aggregates over the orders for each customer.\nSQRL has a built-in library of ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/functions/time-fct"},(0,r.kt)("em",{parentName:"a"},"time")," functions"),"\nthat compute time buckets of\nvarious durations. We can then group on those buckets in order to compute\naggregates across non-overlapping time intervals. In this example, we\nbucket order records into month-long intervals based on the order date to\nsum up the total and discounts for each month."),(0,r.kt)("h3",{id:"time-slices-for-recency"},"Time Slices for Recency"),(0,r.kt)("p",null,"Another common time analysis is by recent time slice, i.e. you want to analyze\nall records that are younger than some amount of time."),(0,r.kt)("p",null,"For our nut shop, we want to add\nanother recommendation service that recommends products our customers are likely\nto buy but might not have bought yet. \\\nOur nut shop customers closely watch their protein intake.\nAfter all, if you are climbing trees all day you\nneed to feed your muscles. That's why we want to recommend products that\nhave a similar protein content to the average amount of protein a customer\nhas recently consumed."),(0,r.kt)("p",null,"First, let's compute the average recent protein intake based on a customer's\npast purchases."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.recent_avg_protein :=\n      SELECT SUM(e.quantity * p.weight_in_gram * n.protein)/SUM(e.quantity * p.weight_in_gram)\n      FROM @.purchases.items e JOIN e.product p JOIN p.nutrition n\n      WHERE e.parent.date > now() - INTERVAL 6 MONTH;\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause of this query, we are joining the order items a customer has\nbought with the product information and the nutritional information so we can compute\nthe average protein content. Note, how we are using the previously defined relationships\ninstead of table names in the JOIN expressions to chain the relationships together.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," clause we are filtering out any order that is older than 6 months by using\nthe special ",(0,r.kt)("inlineCode",{parentName:"p"},"now()")," function which is used to define recent time slices."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"now()")," stands for the current system time which means the result of this query will\nchange as time progresses."),(0,r.kt)("p",null,"We will use the value ",(0,r.kt)("inlineCode",{parentName:"p"},"recent_avg_protein")," defined above to define another\nnested table that ranks all the nut products we offer in the store by similarity\nof protein content."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.products_by_protein :=\nSELECT p.id AS productid, \n       ABS(p.nutrition.protein - @.recent_avg_protein) AS protein_difference \nFROM Products p ORDER BY protein_difference ASC LIMIT 20;\n")),(0,r.kt)("p",null,"Finally, we add a relationship to this nested table to relate those records back\nto our ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.products_by_protein.product := JOIN Products ON Products.id = _productid LIMIT 1;\n")),(0,r.kt)("p",null,"And that, my friend, is a pretty good start for a novel product recommendation engine."),(0,r.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,r.kt)("p",null,"The last feature we want to implement in our customer 360 is a trigger or\nnotification when a customer has more than $100 in purchases so that we can\nemail them with a special coupon to reward their loyalty."),(0,r.kt)("p",null,"SQRL supports subscriptions which observe an underlying table and trigger\nevents."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NewCustomerPromotion := SUBSCRIPTION ON ADD AS\n      SELECT customerid, total_orders \n      FROM Customers WHERE total_orders >= 100;\n")),(0,r.kt)("p",null,"We define the subscription ",(0,r.kt)("inlineCode",{parentName:"p"},"NewCustomerPromotion")," which observes the table\ndefined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query for all customers with more than $100 in total\npurchases. The ",(0,r.kt)("inlineCode",{parentName:"p"},"ON ADD")," qualifier for this subscription means that an event\nis triggered whenever a new row is added to that table."),(0,r.kt)("p",null,"A subscription defines an event table that contains a row for every\nevent that is triggered by the underlying table. We can treat it like any other\ntable, for example, by defining a relationship to ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NewCustomerPromotion.customer := JOIN Customers ON Customers.id = @.customerid;\n")),(0,r.kt)("p",null,"However, subscriptions are special in that they are exposed as WebSockets in the\nAPI that proactively sent out events when they occur to subscribing users. In\naddition, we can register queues with DataSQRL server where subscription events\nget posted to notify downstream systems. We are going to look into\nboth of those subscription access methods in more detail in the ",(0,r.kt)("a",{parentName:"p",href:"api"},"next section"),"."),(0,r.kt)("p",null,"Subscriptions are a powerful feature to ",(0,r.kt)("em",{parentName:"p"},"react")," to changes in the data and\nnotify downstream systems or consumers of the API immediately."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"We've built a complete customer 360 with two complementary recommendation engines and\npromotions. Good work \ud83d\udcaa! Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/"},"final Customer 360 SQRL script"),"."),(0,r.kt)("p",null,"You've learned enough about SQRL to start building data services on your own. Next,\nwe are going to take a closer look at the API that DataSQRL generates from your\nscripts and how to access it."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We've covered the 80% of SQRL you need in this document. If you want to know more:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Take a look at the ",(0,r.kt)("a",{parentName:"li",href:"/docs/guides/sqrl/overview"},"SQRL guides")," for\nadvice on solving specific problems in SQRL"),(0,r.kt)("li",{parentName:"ul"},"Learn more about the key SQRL concepts of ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/table"},"tables"),",\n",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/relationship"},"relationships"),", and ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/time"},"time"),"."),(0,r.kt)("li",{parentName:"ul"},"If you want to know it ",(0,r.kt)("em",{parentName:"li"},"all"),", take a look at the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/sqrl/grammar"},"SQRL language reference"),".")))}u.isMDXComponent=!0}}]);