"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8227],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={title:"Implement SQRL Script"},s="Implementing SQRL Scripts",o={unversionedId:"getting-started/intro/sqrl",id:"getting-started/intro/sqrl",title:"Implement SQRL Script",description:'" width="40%"/>',source:"@site/docs/getting-started/intro/sqrl.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/sqrl",permalink:"/docs/getting-started/intro/sqrl",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/intro/sqrl.md",tags:[],version:"current",frontMatter:{title:"Implement SQRL Script"},sidebar:"docs",previous:{title:"DataSQRL Introduction",permalink:"/docs/getting-started/intro/overview"},next:{title:"Connect Data Source",permalink:"/docs/getting-started/intro/data-sources"}},l={},d=[{value:"What&#39;s in a SQRL Script?",id:"whats-in-a-sqrl-script",level:2},{value:"Tables",id:"tables",level:2},{value:"Import Table",id:"import-table",level:3},{value:"Query Table",id:"query-table",level:3},{value:"Incremental Table Definition",id:"incremental-table-definition",level:4},{value:"Relationships",id:"relationships",level:2},{value:"Nested Tables",id:"nested-tables",level:2},{value:"Stream vs State Tables",id:"stream-state",level:2},{value:"Time",id:"time",level:2},{value:"Time Windows for Grouping",id:"time-windows-for-grouping",level:3},{value:"Time Slices for Recency",id:"time-slices-for-recency",level:3},{value:"Next Steps",id:"next-steps",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"implementing-sqrl-scripts"},"Implementing SQRL Scripts"),(0,r.kt)("img",{src:"/img/index/undraw_programming_sqrl.svg",alt:"Programming in SQRL >",width:"40%"}),(0,r.kt)("p",null,"The logic and function of a data service is defined in the SQRL script.\nThat's where the action is. We are going to dive deeper into\nthe SQRL language and how to write SQRL scripts by reviewing and extending the\n",(0,r.kt)("a",{parentName:"p",href:"../quickstart"},"Quickstart tutorial"),"."),(0,r.kt)("p",null,"When you make it through this document, you will know the key concepts\nof SQRL, be ready to write your own SQRL scripts, and lay down some serious data APIs."),(0,r.kt)("h2",{id:"whats-in-a-sqrl-script"},"What's in a SQRL Script?"),(0,r.kt)("p",null,"An SQRL script defines tables and relationships between them. Together, they\nform the data model of the data service which is exposed as an API."),(0,r.kt)("p",null,"Tables and relationships are defined in SQL - with some additions and a little\nbit of syntactic sugar thrown in there to make your life easier. We call\nthe resulting language variant ",(0,r.kt)("strong",{parentName:"p"},"SQRL"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are unfamiliar with SQL, we recommend you read the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL Primer")," which introduces\nthe basic concepts of SQL. You'll have to learn SQL eventually, might as well start now.")),(0,r.kt)("h2",{id:"tables"},"Tables"),(0,r.kt)("p",null,"A table is made up of columns (or fields) and rows. A row represents a data record.\nColumns have a data type and represent an attribute of a record in the table. We often\nrefer to columns as ",(0,r.kt)("em",{parentName:"p"},"fields")," in the context of a data record. Records and rows, columns\nand fields, Darth Vader and Anakin Skywalker are all name pairs that describe the same\nthing."),(0,r.kt)("p",null,"Tables are the central concept of SQRL. Tables structure and contain all the data you\nare building with in an SQRL script. Tables can be exposed as endpoints in the API, so you can query the data in them."),(0,r.kt)("p",null,"You define tables in SQRL through import or query statements."),(0,r.kt)("h3",{id:"import-table"},"Import Table"),(0,r.kt)("p",null,"An important statement adds a table from an external data source to your SQRL script.\nIn the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#adding-data"},"quickstart tutorial")," we imported the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Orders;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," is contained in the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop")," package. When importing tables, we specify the full\npath to the table, including the package, so DataSQRL can locate it."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl.seedshop")," package we are using for this example is downloaded from the DataSQRL ",(0,r.kt)("a",{parentName:"p",href:"https://dev.datasqrl.com"},"repository")," as a dependency. In the ",(0,r.kt)("a",{parentName:"p",href:"data-sources"},"next chapter")," we will define a custom data source package and table."),(0,r.kt)("p",null,"Let's add more data to our script by importing the products data from our seedshop:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT datasqrl.seedshop.Products;\n")),(0,r.kt)("p",null,"Import statements are at the top of your SQRL script, so you can see all the data you are importing\nat one glance."),(0,r.kt)("h3",{id:"query-table"},"Query Table"),(0,r.kt)("p",null,"Once you have imported tables, you build with the data they contain.\nYou do this by defining new tables that query the data in existing ones."),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#structure"},"Quickstart tutorial")," we defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table by querying\nfor all the unique customer ids in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,r.kt)("p",null,"You can use all the SQL you already know to define new tables in SQRL.\nFor example, suppose PM is telling us that they want to add a McDonald's inspired\n",(0,r.kt)("em",{parentName:"p"},'"over X million orders served"')," banner to the nut shop homepage. \\\nWe define a new ",(0,r.kt)("inlineCode",{parentName:"p"},"NumOrders")," table that contains the count:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"NumOrders := SELECT COUNT(*) AS count FROM Orders;\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"NumOrders")," table gets exposed in our data service API as an additional endpoint\nthrough which the frontend team can query for the current order count. ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#run"},"Run")," the modified script and ",(0,r.kt)("a",{parentName:"p",href:"../quickstart#query"},"execute")," the following query: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    NumOrders\n    {\n        count\n    } \n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"DataSQRL is still young, and we are actively working on SQL feature parity in SQRL.\nTake a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/roadmap#sql-parity"},"roadmap")," for current\nlimitations and what we are working on.")),(0,r.kt)("h4",{id:"incremental-table-definition"},"Incremental Table Definition"),(0,r.kt)("p",null,"You can also define tables incrementally by adding new columns to an\nexisting table."),(0,r.kt)("p",null,"For example, we defined the ",(0,r.kt)("inlineCode",{parentName:"p"},"total")," column on the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.items.total := quantity * unit_price - discount?0.0\n")),(0,r.kt)("p",null,"The part on the left-hand side of the\nassignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},":=")," is the fully specified ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items.total")," column\nwe are defining. The part on the right-hand side is the expression that computes the total price of each order item."),(0,r.kt)("p",null,"This is a ",(0,r.kt)("strong",{parentName:"p"},"localized expression")," that is evaluated within the context\nof the table on the left-hand side - in this case ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items"),". That's why\nwe can refer to the ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"unit_price"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"discount")," columns of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table without any\nqualifiers."),(0,r.kt)("p",null,"Note, that we have to use the conditional expression ",(0,r.kt)("inlineCode",{parentName:"p"},"discount?0.0")," because our input data is a bit messy and some rows don't have a ",(0,r.kt)("inlineCode",{parentName:"p"},"discount")," column."),(0,r.kt)("p",null,"Incremental column definitions are a great way to clean up such inconsistencies in data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.items.discount := discount?0.0;\nOrders.items.total := quantity * unit_price - discount;\n")),(0,r.kt)("p",null,"We overwrote the ",(0,r.kt)("inlineCode",{parentName:"p"},"discount")," column with a cleaned-up version, so any future references to the column don't have to."),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("p",null,"Relationships relate records within and between tables. Defining relationships has two benefits:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Relationships can be used in queries and expressions instead of explicit JOINs which simplifies queries and makes them more readable."),(0,r.kt)("li",{parentName:"ol"},"Relationships are exposed in the API allowing consumers to retrieve related records within a single request.")),(0,r.kt)("p",null,"We defined the relationship column ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table to relate to a user's ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.purchases := JOIN Orders ON Orders.customerid = @.id;\n")),(0,r.kt)("p",null,"A relationship column is defined as a JOIN between two or more tables using the standard\nSQL ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN ... ON ...")," syntax. The starting point of the JOIN is always the table\non the left-hand side, and we can use the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to\nit in the JOIN expression. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," is our ",(0,r.kt)("em",{parentName:"p"},"start")," table and\n",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," is our ",(0,r.kt)("em",{parentName:"p"},"end")," table of the relationship definition."),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN [table] ON [condition]")," expression, a relationship\ndefinition can end with an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LIMIT")," clause. The order\nis used as the default ordering when the relationship is accessed through the API.\nThe limit specifies the maximum number of related rows that are returned\nwhen traversing the relationship (i.e. the maximum multiplicity)."),(0,r.kt)("p",null,"To order user purchases by time, we change the relationship definition to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time;\n")),(0,r.kt)("p",null,"The relationship is defined as a field on the start table, and we can query it in the API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\nUsers (id: 10) {\n    purchases {\n        id\n        totals {\n            price\n            saving\n        }\n    }  \n}}\n")),(0,r.kt)("p",null,"Relationship columns make the relationships in the data explicit. Adding structure to your data by explicitly defining relationships also clarifies the data itself and how you plan to use it. ",(0,r.kt)("br",null),"\nRelationships can also be used in joins and expressions, which makes them easier to read and write as we'll see in the following section."),(0,r.kt)("h2",{id:"nested-tables"},"Nested Tables"),(0,r.kt)("p",null,"SQRL supports nested and hierarchical data like JSON through nested tables.\nA nested table has a parent table and all rows in a nested table are associated\nwith a single parent row in the parent table."),(0,r.kt)("p",null,"In the nut shop tutorial the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table has a nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table\nthat contains the item records for each order. When referring to a nested table,\nwe have to use the fully qualified name of the table which includes the parent.\n",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM Orders.items")," is valid but ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM items")," is not because\nthere is no table with that name in the global namespace of the SQRL script."),(0,r.kt)("p",null,"SQRL automatically adds a ",(0,r.kt)("inlineCode",{parentName:"p"},"parent")," relationship on the child table which relates\nrows to their parent rows in the parent table. Likewise, SQRL also adds a relationship field with the name of the nested table to the parent table which relates all child records to the parent record. The ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table can be used to query\nthe item records for a particular order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.totals := SELECT sum(total) as price,\n                  sum(discount) as saving FROM @.items;\n")),(0,r.kt)("p",null,"This statement defines a new nested table ",(0,r.kt)("inlineCode",{parentName:"p"},"totals")," underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," by aggregating the total price and discount over all items in each order."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query on the right is a ",(0,r.kt)("strong",{parentName:"p"},"localized query")," that is evaluated within\nthe context of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table because it selects from the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@"),". Think of a localized query as being executed for each row of table on the left-hand side. We can use the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to each row from the parent table.\nIn this instance, ",(0,r.kt)("inlineCode",{parentName:"p"},"@.items")," refers to the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship column of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,r.kt)("p",null,"Localized queries are a feature of SQRL that make it easy to express nested, grouped, or partitioned operations."),(0,r.kt)("p",null,"Nested tables are useful when we want to analyze our data in partitions, like order totals and spending by user as defined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"User.spending")," table.\nWhenever you want to build data analysis ",(0,r.kt)("strong",{parentName:"p"},"by dimension")," or compute a result set ",(0,r.kt)("strong",{parentName:"p"},"for each record"),", nested tables are your friend."),(0,r.kt)("p",null,"For example, let's build the simplest and most effective product recommendation\nfor our seed shop: recommending products users have already purchased,\nordered by frequency. In other words, we want to look at all the products purchased\n",(0,r.kt)("strong",{parentName:"p"},"for each customer")," and sort them by frequency of purchase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.past_purchases := SELECT i.productid, count(1) as num_orders,\n         sum(i.quantity) as total_quantity\n      FROM @.purchases.items i\n      GROUP BY i.productid\n      ORDER BY num_orders DESC, total_quantity DESC;\n")),(0,r.kt)("p",null,"The table ",(0,r.kt)("inlineCode",{parentName:"p"},"past_purchases")," is defined as a nested table underneath ",(0,r.kt)("inlineCode",{parentName:"p"},"Users"),".\nThe SQL query on the right-hand side is a ",(0,r.kt)("em",{parentName:"p"},"localized query")," which means it is evaluated in the context of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table. Nested tables are always defined in the context of the parent table, and we can think of the query definition as being applied to ",(0,r.kt)("em",{parentName:"p"},"each row")," of the\nparent table."),(0,r.kt)("p",null,"We use the special table handle ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," to refer to each row in the parent\n",(0,r.kt)("inlineCode",{parentName:"p"},"Uses")," table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"FROM")," clause ",(0,r.kt)("inlineCode",{parentName:"p"},"@.purchases.items")," chains together\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship on ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," relationship\non ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," to retrieve all item records for all order records associated\nwith a single customer record. Chaining together relationships allows us to\navoid the complexity of multiple JOIN expressions in this query."),(0,r.kt)("h2",{id:"stream-state"},"Stream vs State Tables"),(0,r.kt)("p",null,"We distinguish between stream and state tables in SQRL."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"stream table")," consists of immutable (i.e. unchanging) rows of data that\nare incrementally added to the table over time and never deleted.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table is a stream table because an order does not change once\nit has been processed."),(0,r.kt)("p",null,"In a ",(0,r.kt)("strong",{parentName:"p"},"state table")," the column values of rows change over time and rows\nare added to and deleted from the table. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table is a state\ntable because it represents our current list of users based on the set of unique ",(0,r.kt)("inlineCode",{parentName:"p"},"customerid"),"."),(0,r.kt)("p",null,"Why is this distinction important? Because ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/stream"},"stream tables")," have special features in SQRL and are treated differently from state tables. Stream tables give SQRL the ability to ",(0,r.kt)("em",{parentName:"p"},"react")," to data and synchronize with arbitrary data sources."),(0,r.kt)("p",null,"All tables imported from external data sources are stream tables. In case of our imported ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," table, we get a change stream of product updates."),(0,r.kt)("p",null,"To turn ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," into a state table we overwrite it with the following de-duplication query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products := DISTINCT Products ON id ORDER BY updated DESC;\n")),(0,r.kt)("p",null,"This special SQRL query selects the most recent version (as identified by the ",(0,r.kt)("inlineCode",{parentName:"p"},"updated")," timestamp) for each product (as identified by the key ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," column)."),(0,r.kt)("p",null,"When we are dealing with static data, there is no real difference\nbetween stream and state tables. However, when dealing with\nstreaming data and connecting to data in databases it is important\nto understand the difference."),(0,r.kt)("p",null,"A useful way to think about it: a stream table contains events happen and don't change\nafter the fact whereas state tables represent entities that evolve over time. When you import\na table from a source that you want to treat as an entity, make sure to use a\n",(0,r.kt)("inlineCode",{parentName:"p"},"DISTINCT")," query to define the table as an entity table."),(0,r.kt)("p",null,"Now, that we have our ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," state table defined, let's relate it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.items.product := JOIN Products ON Products.id = @.productid LIMIT 1;\nProducts.ordered_items := JOIN Orders.items i ON i.productid = @.id;\n")),(0,r.kt)("p",null,"These two relationship column establish a bidirectional relationship."),(0,r.kt)("h2",{id:"time"},"Time"),(0,r.kt)("p",null,"When building real-time data services, ",(0,r.kt)("em",{parentName:"p"},"time")," is often an important aspect.\nThe two most common time-based transformations on data are grouping data\npoints by time windows and aggregating over recent time intervals. SQRL provides\nconvenience features to address both of those."),(0,r.kt)("h3",{id:"time-windows-for-grouping"},"Time Windows for Grouping"),(0,r.kt)("p",null,"For the Quickstart tutorial we computed customer spending and savings\nprofiles by week."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Users.spending := SELECT endOfWeek(p.time) AS week,\n         sum(t.price) AS spend, sum(t.saving) AS saved\n      FROM @.purchases p JOIN p.totals t\n      GROUP BY week ORDER BY week DESC;\n")),(0,r.kt)("p",null,"This defines a nested table which aggregates over the orders for each user.\nSQRL has a built-in library of ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/functions/time"},(0,r.kt)("em",{parentName:"a"},"time")," functions"),"\nthat compute time windows of various durations. "),(0,r.kt)("p",null,"We can then group on those windows in order to compute\naggregates across non-overlapping time intervals. In this statement, we\nbucket order records into week-long intervals based on the order date to\nsum up the total and discounts for each week."),(0,r.kt)("h3",{id:"time-slices-for-recency"},"Time Slices for Recency"),(0,r.kt)("p",null,"Another common time analysis is by recent time slice, i.e. you want to analyze\nall records that are younger than some amount of time. "),(0,r.kt)("p",null,"For our seed shop, we want to analyze the order volume for each product over the last 10 days."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Products.volume_10day := SELECT sum(i.quantity) as quantity,\n         sum(i.total) as spend, sum(i.quantity * @.weight_in_gram) as weight\n      FROM @.ordered_items i JOIN i.parent o\n      WHERE o.time > now() - INTERVAL 10 DAY;\n")),(0,r.kt)("p",null,"This statement defines the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"volume_10day")," table similar to previously defined aggregations. The difference here is that we filter out orders that are older than 10 days by using the special ",(0,r.kt)("inlineCode",{parentName:"p"},"now()")," time function to refer to the current point in time."),(0,r.kt)("p",null,"Note, that this query will return an empty result set for now. We are going to fix that in the next chapter."),(0,r.kt)("p",null,"And that, my friend, is a pretty good start for our seed shop data API."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"We've built a complete e-commerce data service with customer analysis, recommendation engine, and business intelligence. Good work \ud83d\udcaa! Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-basic.sqrl"},"final SQRL script")," that includes the changes and additions we discussed in this chapter. You've learned enough about SQRL to start building data services on your own. "),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"data-sources"},(0,r.kt)("strong",{parentName:"a"},"next chapter")),", we are going to define our own data source and looks at imports in more detail."),(0,r.kt)("p",null,"We covered many aspects of SQRL in this document. If you want to explore SQRL in more detail, take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/overview"},"SQRL reference documentation"),", which provides detailed explanations of key SQRL concepts like ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/table"},"tables"),",\n",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/relationship"},"relationships"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/stream"},"stream tables"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/time"},"time"),"."))}c.isMDXComponent=!0}}]);