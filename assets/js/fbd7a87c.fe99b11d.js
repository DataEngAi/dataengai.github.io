"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"QuickStart Tutorial"},o="DataSQRL Intro in 5 Minutes",s={unversionedId:"getting-started/quickstart",id:"getting-started/quickstart",title:"QuickStart Tutorial",description:'|" width="250"/>',source:"@site/docs/getting-started/quickstart.md",sourceDirName:"getting-started",slug:"/getting-started/quickstart",permalink:"/docs/getting-started/quickstart",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/getting-started/quickstart.md",tags:[],version:"current",frontMatter:{title:"QuickStart Tutorial"},sidebar:"docs",previous:{title:"Getting Started with DataSQRL",permalink:"/docs/getting-started/overview"},next:{title:"DataSQRL Training",permalink:"/docs/getting-started/intro/overview"}},l={},d=[{value:"Run SQRL Script",id:"run-sqrl-script",level:2},{value:"Introduction to SQRL",id:"introduction-to-sqrl",level:2},{value:"Imports",id:"imports",level:3},{value:"Data Augmentation",id:"data-augmentation",level:3},{value:"Install",id:"setup",level:2},{value:"Step 1: Connect Data",id:"adding-data",level:2},{value:"Query the API",id:"api",level:3},{value:"Step 2: Implement Data Logic",id:"transform",level:2},{value:"Data Cleansing",id:"data-cleansing",level:3},{value:"Data Structure",id:"structure",level:3},{value:"Data Analysis",id:"analysis",level:3},{value:"Step 3: Access the API",id:"api",level:2},{value:"Next Steps",id:"next",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datasqrl-intro-in-5-minutes"},"DataSQRL Intro in 5 Minutes"),(0,r.kt)("img",{src:"/img/getting-started/tutorial/nutshop.jpg",alt:"Nut Shop Tutorial >|",width:"250"}),(0,r.kt)("p",null,"Because we have the humor of middle schoolers on Adderall, this quickstart tutorial\nimplements data-driven features for our online DataSQRL seed shop. Seeds and squirrels -\nhow funny are we?"),(0,r.kt)("p",null,"We want to build a data service that exposes a Customer's purchase history and provides a spending analysis. Let's create an SQRL script for this purpose."),(0,r.kt)("h2",{id:"run-sqrl-script"},"Run SQRL Script"),(0,r.kt)("p",null,"In the terminal or command line, create an empty folder for our script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> mkdir seedshop; cd seedshop\n")),(0,r.kt)("p",null,"Create a new file in that folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"c360.sqrl")," and paste the following content into the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT seedshop.Orders;      \nIMPORT time.round_to_month;\n\nOrders.items.total := quantity * unit_price - discount?0.0;\nOrders.totals := SELECT sum(total) as price,\n                        sum(discount) as savings FROM @.items;\n\nCustomers := SELECT DISTINCT customerid AS id FROM Orders;\nCustomers.purchases := JOIN Orders ON Orders.customerid = @.id\n                                   ORDER BY Orders.time DESC;\nCustomers.spending :=\n         SELECT round_to_month(p.timestamp) AS month,\n                sum(t.price) AS spend, sum(t.savings) AS saved\n         FROM @.purchases p JOIN p.totals t\n         GROUP BY month ORDER BY month DESC;\n")),(0,r.kt)("p",null,"Now run the DataSQRL compiler to build a data service from the data transformations and aggregations defined in the script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8888:8888 -v $PWD:/build datasqrl/datasqrl-cmd run c360.sqrl\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To run this command you need to have ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Docker")," installed on your machine.")),(0,r.kt)("p",null,"You can experiment with the GraphQL API of this data service by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/graphiql/ ")," in your browser and writing GraphQL queries in the left-hand panel. For example, copy the following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\nCustomers ( id: 10) {\n    purchases (limit: 10) {\n        id\n        totals {\n            price\n            savings\n        }\n    }    \n    spending {\n        month\n        spend\n        saved\n    }\n}}\n")),(0,r.kt)("p",null,'When you hit the "run" button you get the purchase history and spending analysis for the customer with ',(0,r.kt)("inlineCode",{parentName:"p"},"id=10")," in the right-hand panel. Pretty easy, right?"),(0,r.kt)("h2",{id:"introduction-to-sqrl"},"Introduction to SQRL"),(0,r.kt)("p",null,"Let's take a closer look at the SQRL script for our data service to understand what it does and how it compiles to the API."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"SQRL is an extension of SQL and we are going to use some basic SQL syntax. If you are\nunfamiliar with SQL, we recommend you read our ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL Primer"),"\nfirst.")),(0,r.kt)("h3",{id:"imports"},"Imports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT seedshop.Orders;      \n")),(0,r.kt)("p",null,"The first line of the script imports the order stream data that we are building with. DataSQRL locates the data source for our seedshop orders based on this import definition."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT time.round_to_month;\n")),(0,r.kt)("p",null,"Next, we import a time function that rounds a timestamp to the current month which we will later use in an aggregation. That's all the imports we need."),(0,r.kt)("h3",{id:"data-augmentation"},"Data Augmentation"),(0,r.kt)("h2",{id:"setup"},"Install"),(0,r.kt)("p",null,"Before the fun begins, we need to install DataSQRL so you can run the service we are building.\nFollow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/getting-started/install"},"Download & Install"),"\ninstruction. It'll be quick. We will wait right here."),(0,r.kt)("p",null,"Let's fire up DataSQRL by executing the following command into your terminal or shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl run dev &\n")),(0,r.kt)("p",null,"This runs the DataSQRL server in development mode as a background process, so we can build a new\ndata service. When you are done with development, you can stop the process by executing\n",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl stop"),"."),(0,r.kt)("h2",{id:"adding-data"},"Step 1: Connect Data"),(0,r.kt)("p",null,"First, we are going to add some data from our online shop for us to play with. Navigate to\na directory on your computer where you can place files for this tutorial. ",(0,r.kt)("a",{parentName:"p",href:"/"},"Download this zip\narchive")," and unzip it in the folder. You should see the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"nutshop-data")," which\ncontains the order and product data for our shop."),(0,r.kt)("p",null,"Let's feed that data to DataSQRL with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl source folder nutshop-data\n")),(0,r.kt)("p",null,"This command instructs DataSQRL to connect the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"nutshop-data")," folder as a\ndataset and gives you the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Connecting source "nutshop-data" to DataSQRL server "localhost:7050"\nAdding dataset "nutshop-data"\nAdding table "nutshop-data.Products" with files [products.csv]\nAdding table "nutshop-data.Orders" with files [orders_*.json]\n')),(0,r.kt)("p",null,"We can now access the data and build a data service with it. Run the following command to create an SQRL script called ",(0,r.kt)("inlineCode",{parentName:"p"},"customer360.sqrl")," (make sure the file does not already exist):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl watch customer360.sqrl\n")),(0,r.kt)("p",null,"The SQRL script is where we define the transformations and logic for our Customer 360 data service. SQRL is an extension of SQL that adds a few concepts and some syntactic sugar to make it easier to develop with SQL and build data services. SQRL is like adding bacon to a sandwich: it makes SQL better in ways that seem obvious in hindsight.\nOpen the 'customer360.sqrl' file in your favorite editor and you'll see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.*;\n")),(0,r.kt)("p",null,"This imports the ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," tables from the ",(0,r.kt)("inlineCode",{parentName:"p"},"nutshop-data")," dataset to our script.\nIn DataSQLR, all data is structured as tables and tables are grouped into datasets."),(0,r.kt)("p",null,"In your terminal, execute the following command to run our little SQRL script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl watch customer360.sqrl\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"datasqrl watch")," command not only creates but also continuously monitors our SQRL script and submits any changes to the running DataSQRL server for execution. The server executes the script and generates a data service from the result which is exposed as a GraphQL API."),(0,r.kt)("h3",{id:"api"},"Query the API"),(0,r.kt)("p",null,"The command also opens a page in your browser where you can inspect the resulting API with\nGraphiQL, which is a lightweight IDE for your API. Try it out by pasting the following\nGraphQL query into the left hand side and hitting the run button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    Products(id: "1") {\n        name\n        sizing\n        weight_in_grams\n    } \n}\n')),(0,r.kt)("p",null,'You should see the requested information for the product with id equal to "1". You can modify\nthe filter condition to query for products by their fields.'),(0,r.kt)("p",null,"Voila, we got a functioning data service with ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"orders")," API entry points\nfor the respective tables that we imported. That was easier than making fun of the metaverse."),(0,r.kt)("h2",{id:"transform"},"Step 2: Implement Data Logic"),(0,r.kt)("p",null,"Now it's time to implement the logic of our data service in the SQRL script. We are going to clean up the data, structure it according to our needs, and analyze the data to add additional value to our Customer 360."),(0,r.kt)("h3",{id:"data-cleansing"},"Data Cleansing"),(0,r.kt)("p",null,'There are two certainties in life: death and messy data. Time to clean up! Luckily, our\ncurated tutorial data only has 2 little "messes".'),(0,r.kt)("p",null,"First, the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," of an order is given as the number of milliseconds since Unix epoch. We\nneed to convert ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," to a proper DateTime field so we can handle it like a timestamp."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.date := util.time.fromEpochMillis(time);\n")),(0,r.kt)("p",null,"In this statement we are declaring a new field ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table and defining it\nby applying the utility function ",(0,r.kt)("inlineCode",{parentName:"p"},"util.time.fromEpochMillis")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," field."),(0,r.kt)("p",null,"Secondly, the ",(0,r.kt)("inlineCode",{parentName:"p"},"discount")," field is missing from the order items when no discount was applied. It's pretty annoying to have to check for its existence every time we want to access that field. This is an easy fix which defaults ",(0,r.kt)("inlineCode",{parentName:"p"},"discount")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0")," when the field is missing using the ",(0,r.kt)("inlineCode",{parentName:"p"},"coalesce")," function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.items.discount := coalesce(discount, 0.0);\n")),(0,r.kt)("p",null,"Nice, our data already looks much better. Adding to and overwriting fields on tables\nincrementally makes it pretty easy to clean your data.\nWhen you save the script, you can see the new ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," field on ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," in the API."),(0,r.kt)("p",null,"Note the nested table syntax in ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," to reference the nested ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," records\nwithin the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table. SQRL supports ",(0,r.kt)("a",{parentName:"p",href:"/"},"nested tables")," which is useful when dealing with\nhierarchical data like our ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," data."),(0,r.kt)("h3",{id:"structure"},"Data Structure"),(0,r.kt)("p",null,"A Customer 360 application is all about the customer, so let's restructure our data with\nthe customer at the center."),(0,r.kt)("p",null,"First, we define a ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," table based on the\nunique customer ids from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,r.kt)("p",null,"So far, our tables are independent of one another. For our Customer 360, we want\nto link customers to their orders to display a customer's shopping history. We accomplish\nthis by defining a relationship between ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.purchases := JOIN Orders ON Orders.customerid = @.id ORDER BY Orders.time DESC\n")),(0,r.kt)("p",null,"A relationship is a connection between two things. In this case, it is a connection between two\ntables in a database. A relationship is declared as a field on a table which references the related records as\ndefined by the ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," statement on the right. A JOIN relates records from two\ntables based on a JOIN predicate - in our case matching customer ids.\nThe underscore is syntactic sugar that SQRL adds to SQL for referring to the table on the\nleft hand side on which the relationship is defined."),(0,r.kt)("p",null,"Similarly, we want to link the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders.items")," to the actual product records that they\nreference. This calls for another relationship:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.items.product := JOIN Products ON Products.id = @.productid LIMIT 1;\n")),(0,r.kt)("p",null,"When you save the script, a ",(0,r.kt)("inlineCode",{parentName:"p"},"customers")," endpoint has been added to the API and we can access\na customer's shopping history and the products in their orders through the relationships we\njust defined."),(0,r.kt)("p",null,"Try executing the following GraphQL query in GraphiQL to navigate through the relationships:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    Customers(id: "50") {\n        purchases(limit:10) {\n            id\n            time\n            items {\n                quantity\n                product {\n                    name\n                    weight_in_grams\n                }\n            }\n        }\n    } \n}\n')),(0,r.kt)("p",null,"We can now navigate through our data with the uncanny agility of Luke\nSkywalker in the Death Star."),(0,r.kt)("h3",{id:"analysis"},"Data Analysis"),(0,r.kt)("p",null,"Let's dig our hands even deeper into the data dough and do some data analysis. Our customers\nwould like to know how much they are spending and saving in our shop every month."),(0,r.kt)("p",null,"First, let's compute the total and savings for each order as separate fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.items.total := quantity * unit_price - discount;\nOrders.total := sum(items.total);\nOrders.savings := sum(items.discount);\n")),(0,r.kt)("p",null,'We can use those fields to aggregate those values for each customer by month. Recall that we\'ve\npreviously created a relationship from Customers to Orders called "purchases".'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Customers.spending_by_month :=\n         SELECT util.time.truncateToMonth(date) AS month,\n                sum(total) AS total_spend,\n                sum(savings) AS total_savings\n         FROM @.purchases\n         GROUP BY month ORDER BY month DESC;\n")),(0,r.kt)("p",null,"This statement defines a nested table ",(0,r.kt)("inlineCode",{parentName:"p"},"spending_by_month")," beneath ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," which takes\nall the orders referenced by the ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," relationship on ",(0,r.kt)("inlineCode",{parentName:"p"},"Customers")," for each customer\nrecord and groups them by\nthe month of the order's date. It then sums up the total and savings for all the orders in each\ngroup. The utility function ",(0,r.kt)("inlineCode",{parentName:"p"},"truncateToMonth")," takes a date and returns the date for the\nbeginning of the month in which that input date occurred."),(0,r.kt)("h2",{id:"api"},"Step 3: Access the API"),(0,r.kt)("p",null,"We got our data cleaned up, transformed into a customer-centric view, linked together through\nrelationships to access customers' shopping history, and we added a spending analysis.\n",(0,r.kt)("a",{parentName:"p",href:"/"},"Click here")," to see the full script."),(0,r.kt)("p",null,"That's a great start for a Customer 360 data service. And it is all readily accessible\nthrough the GraphQL API."),(0,r.kt)("p",null,"The final step is to access the API from your application. We'll look at an example in Javascript. Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/api/overview"},"API guides")," to learn how to query the API from your favorite language or framework."),(0,r.kt)("p",null,"Create the Javascript file ",(0,r.kt)("inlineCode",{parentName:"p"},"index.js")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { ApolloClient, gql} from \"@apollo/client\";\n\nconst client = new ApolloClient({ \n  uri: 'http://localhost:7050/graphql/customer360/v0'\n});\n")),(0,r.kt)("p",null,"This imports and connects the ",(0,r.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo GraphQL client"),"  to our customer 360 API. If you don't have the client installed, run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm install @apollo/client graphql")," first.\nWe can now run queries against it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'client\n  .query({\n    query: gql`\n      query GetProduct {\n        Products(id: "1") {\n            name\n            sizing\n            weight_in_grams\n        }\n      }\n    `\n  })\n  .then(result => console.log(result));\n')),(0,r.kt)("p",null,"Run this code to see the result printed to your console."),(0,r.kt)("h2",{id:"next"},"Next Steps"),(0,r.kt)("p",null,"You just built and accessed a Customer 360 data service. Good work!\nGive yourself a pat on the back."),(0,r.kt)("p",null,"This tutorial covered the basics of building data services in DataSQRL. Next, we recommend that\nyou continue with the ",(0,r.kt)("a",{parentName:"p",href:"intro/overview"},"DataSQRL Training")," because it extends this tutorial and\nexplains each of the concepts covered here in more detail. If you found this short tutorial too dense or missing information, the complete ",(0,r.kt)("a",{parentName:"p",href:"intro/overview"},"DataSQRL Training")," will fill in the gaps and teach you everything you need to know to build your own data services in DataSQRL."))}p.isMDXComponent=!0}}]);