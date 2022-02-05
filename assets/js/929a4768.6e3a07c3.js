"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4676],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,m=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Intro Tutorial"},l="Customer 360 Tutorial",d={unversionedId:"getting-started/nutshop-tutorial",id:"getting-started/nutshop-tutorial",title:"Intro Tutorial",description:"Because we have the humor of a middle schooler on Adderall, this introductory tutorial",source:"@site/docs/getting-started/nutshop-tutorial.md",sourceDirName:"getting-started",slug:"/getting-started/nutshop-tutorial",permalink:"/docs/getting-started/nutshop-tutorial",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/nutshop-tutorial.md",tags:[],version:"current",frontMatter:{title:"Intro Tutorial"},sidebar:"docs",previous:{title:"Download & Install",permalink:"/docs/getting-started/install"},next:{title:"Introduction to DataSQRL",permalink:"/docs/getting-started/intro/overview"}},u=[{value:"Install",id:"setup",children:[],level:2},{value:"Step 1: Adding Data",id:"adding-data",children:[{value:"Querying the API",id:"api",children:[],level:3}],level:2},{value:"Step 2: Transforming Data",id:"transform",children:[{value:"Data Cleansing",id:"data-cleansing",children:[],level:3},{value:"Data Structure",id:"structure",children:[],level:3}],level:2},{value:"Step 3: Analyzing Data",id:"analysis",children:[],level:2},{value:"Step 4: Querying the API",id:"api",children:[],level:2},{value:"Next Steps",id:"next",children:[],level:2}],p={toc:u};function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"customer-360-tutorial"},"Customer 360 Tutorial"),(0,o.kt)("p",null,"Because we have the humor of a middle schooler on Adderall, this introductory tutorial\nwill implement data-driven features for our online DataSQRL nut shop. Nuts and squirrels -\nhow funny are we?"),(0,o.kt)("p",null,"The DataSQRL nut shop is a pretty basic online shop that processes and keeps track of orders\nplaced by customers. We want to add Customer 360 functionality to the shop, which means giving\ncustomers insights into their past orders and recommending products to purchase. In short, we\nwant to use the data we have about our customers to sell them nuts with a personalized touch."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DataSQRL Nut Shop",src:n(7352).Z,width:"800",height:"368"})),(0,o.kt)("h2",{id:"setup"},"Install"),(0,o.kt)("p",null,"Before the fun begins, we need to install DataSQRL so you can run the service we are building.\nFollow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/install"},"Download & Install"),"\ninstruction. It'll be quick. We will wait right here."),(0,o.kt)("p",null,"Let's fire up DataSQRL by executing the following command into your terminal or shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl run dev &\n")),(0,o.kt)("p",null,"This runs the DataSQRL server in development mode as a background process, so we can build a new\ndata service. When you are done with development, you can stop the process by executing\n",(0,o.kt)("inlineCode",{parentName:"p"},"datasqrl stop"),"."),(0,o.kt)("h2",{id:"adding-data"},"Step 1: Adding Data"),(0,o.kt)("p",null,"First, we are going to add some data from our online shop for us to play with. Navigate to\na directory on your computer where you can place files for this tutorial. ",(0,o.kt)("a",{parentName:"p",href:"/"},"Download this zip\narchive")," and unzip it in the folder. You should see the folder ",(0,o.kt)("inlineCode",{parentName:"p"},"nutshop-data")," which\ncontains the order and product data for our shop."),(0,o.kt)("p",null,"Let's feed that data to DataSQRL with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl source folder nutshop-data\n")),(0,o.kt)("p",null,"This command instructs DataSQRL to connect the data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nutshop-data")," folder as a\ndataset and gives you the following response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'Connecting source "nutshop-data" to DataSQRL server "localhost:7050"\nAdding dataset "nutshop-data"\nAdding table "nutshop-data.Products" with files [products.csv]\nAdding table "nutshop-data.Orders" with files [orders_*.json]\n')),(0,o.kt)("p",null,"We can now access the data and build a data service with it. Create a file called\n",(0,o.kt)("inlineCode",{parentName:"p"},"customer360.sqrl")," and open it in your favorite editor. This is the SQRL script where\nwe define the transformations and logic for our Customer 360 data service. SQRL is an\nextension of SQL that adds a few concepts and some syntactic sugar to make it easier to\ndevelop with SQL and build data services. SQRL is like adding bacon to a sandwich: it makes\nSQL better in ways that seem obvious in hindsight."),(0,o.kt)("p",null,"Add the following two import statements to your ",(0,o.kt)("inlineCode",{parentName:"p"},"customer360.sqrl")," script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.Products;\nIMPORT nutshop-data.Orders;\n")),(0,o.kt)("p",null,"This imports the ",(0,o.kt)("inlineCode",{parentName:"p"},"Products")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," tables from the ",(0,o.kt)("inlineCode",{parentName:"p"},"nutshop-data")," dataset to our script.\nIn DataSQLR, all data is structured as tables and tables are grouped into datasets."),(0,o.kt)("p",null,"In your terminal, execute the following command to run our little SQRL script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl dev customer360.sqrl\n")),(0,o.kt)("p",null,"This command continuously monitors your SQRL script and submits any changes to the running\nDataSQRL server for execution. The server executes the script and generates a data service\nfrom the result which is exposed as a GraphQL API."),(0,o.kt)("h3",{id:"api"},"Querying the API"),(0,o.kt)("p",null,"The command also opens a page in your browser where you can inspect the resulting API with\nGraphiQL, which is a lightweight IDE for your API. Try it out by pasting the following\nGraphQL query into the left hand side and hitting the run button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    products(filter: [{ id: {eq: "1"}}]) {\n        items {\n            name\n            sizing\n            weight_in_grams\n        }\n    } \n}\n')),(0,o.kt)("p",null,'You should see the requested information for the product with id equal to "1". You can modify\nthe filter condition to query for products by their fields.'),(0,o.kt)("p",null,"Voila, we got a functioning data service with ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," API entry points\nfor the respective tables that we imported. That was easier than making fun of the metaverse."),(0,o.kt)("h2",{id:"transform"},"Step 2: Transforming Data"),(0,o.kt)("h3",{id:"data-cleansing"},"Data Cleansing"),(0,o.kt)("p",null,'There are two certainties in life: death and messy data. Time to clean up! Luckily, our\ncurated tutorial data only has 2 little "messes".'),(0,o.kt)("p",null,"First, the ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," of an order is given as the number of milliseconds since Unix epoch. We\nneed to convert ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," to a proper DateTime field so we can handle it like a timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.date := util.time.fromEpochMillis(time);\n")),(0,o.kt)("p",null,"In this statement we are declaring a new field ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," table and define it\nby applying the utility function ",(0,o.kt)("inlineCode",{parentName:"p"},"util.time.fromEpochMillis")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," field."),(0,o.kt)("p",null,"Secondly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"discount")," field on the order entries is absent when no discount was applied.\nIt's pretty annoying to check for existence whenever we want to access that field. This\nis an easy fix which defaults ",(0,o.kt)("inlineCode",{parentName:"p"},"discount")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0")," when the field is missing using the\n",(0,o.kt)("inlineCode",{parentName:"p"},"coalesce")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.entries.discount := coalesce(discount, 0.0);\n")),(0,o.kt)("p",null,"Nice, our data already looks much better. Adding to and overwriting fields on tables\nincrementally makes it pretty easy to clean your data.\nWhen you save the script, you can see the new ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," field on ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," in the API."),(0,o.kt)("p",null,"Note the nested table syntax in ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders.entries")," to reference the nested ",(0,o.kt)("inlineCode",{parentName:"p"},"entries")," records\nwithin the ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," table. SQRL supports ",(0,o.kt)("a",{parentName:"p",href:"/"},"nested tables")," which is useful when dealing with\nhierarchical data like our ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," data."),(0,o.kt)("h3",{id:"structure"},"Data Structure"),(0,o.kt)("p",null,"A Customer 360 application is all about the customer, so let's restructure our data with\nthe customer at the center."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"SQRL is an extension of SQL and we are going to use some basic SQL syntax. If you are\nunfamiliar with SQL, we recommend you read our ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/sqrl/sql-primer"},"SQL Primer"),"\nfirst."))),(0,o.kt)("p",null,"First, we define a ",(0,o.kt)("inlineCode",{parentName:"p"},"Customers")," table based on the\nunique customer ids from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," table."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers := SELECT DISTINCT customerid AS id FROM Orders;\n")),(0,o.kt)("p",null,"So far, our tables are independent of one another. For our Customer 360, we want\nto link customers to their orders to display a customer's shopping history. We accomplish\nthis by defining a relationship between ",(0,o.kt)("inlineCode",{parentName:"p"},"Customers")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"Customers.purchases := JOIN Orders ON Orders.customerid = _.id ORDER BY Orders.time DESC\n")),(0,o.kt)("p",null,"A relationship is declared as a field on a table which references the related records as\ndefined by the ",(0,o.kt)("inlineCode",{parentName:"p"},"JOIN")," statement on the right. A JOIN relates records from two\ntables based on a JOIN predicate - in our case matching customer ids.\nThe underscore is syntactic sugar that SQRL adds to SQL for referring to the table on the\nleft hand side on which the relationship is defined."),(0,o.kt)("p",null,"Similarly, we want to link the ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders.entries")," to the actual product records that they\nreference. This calls for another relationship:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"Orders.entries.product := JOIN Products ON Products.id = _.productid LIMIT 1;\n")),(0,o.kt)("p",null,"When you save the script, a ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," endpoint has been added to the API and we can access\na customer's shopping history and the products in their orders through the relationships we\njust defined."),(0,o.kt)("p",null,"Try executing the following GraphQL query in GraphiQL to navigate through the relationships:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    customers(filter: [{ id: {eq: "50"}}]) {\n        items {\n            purchases(pageSize:10) {\n                id\n                time\n                entries {\n                    quantity\n                    product {\n                        name\n                        weight_in_grams\n                    }\n                }\n            }\n        }\n    } \n}\n')),(0,o.kt)("p",null,"We can now navigate through our data with the uncanny agility of Luke\nSkywalker in the Death Star."),(0,o.kt)("h2",{id:"analysis"},"Step 3: Analyzing Data"),(0,o.kt)("p",null,"Let's dig our hands even deeper into the data dough and do some data analysis. Our customers\nwould like to know how much they are spending and saving in our shop every month."),(0,o.kt)("p",null,"First, let's compute the total and savings for each order as separate fields."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Orders.entries.total := quantity * unit_price - discount;\nOrders.total := sum(entries.total);\nOrders.savings := sum(entries.discount);\n")),(0,o.kt)("p",null,"We can use those fields to aggregate those values for each customer by month."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-datasqrl"},"Customers.spending_by_month :=\n         SELECT util.time.truncateToMonth(date) AS month,\n                sum(total) AS total_spend,\n                sum(discount) AS total_savings\n         FROM _.purchases\n         GROUP BY month ORDER BY month DESC;\n")),(0,o.kt)("p",null,"This statement defines a nested table ",(0,o.kt)("inlineCode",{parentName:"p"},"spending_by_month")," beneath ",(0,o.kt)("inlineCode",{parentName:"p"},"Customers")," which takes\nall the orders referenced by the ",(0,o.kt)("inlineCode",{parentName:"p"},"purchases")," relationship on ",(0,o.kt)("inlineCode",{parentName:"p"},"Customers")," for each customer\nrecord and groups them by\nthe month of the order's date. It then sums up the total and savings for all the orders in each\ngroup. The utility function ",(0,o.kt)("inlineCode",{parentName:"p"},"truncateToMonth")," takes a date and returns the date for the\nbeginning of the month in which that input date occurred."),(0,o.kt)("h2",{id:"api"},"Step 4: Querying the API"),(0,o.kt)("p",null,"We got our data cleaned up, transformed into a customer-centric view, linked together through\nrelationships to access customers' shopping history, and we added a spending analysis.\n",(0,o.kt)("a",{parentName:"p",href:"/"},"Click here")," to see the full script."),(0,o.kt)("p",null,"That's a great start for a Customer 360 data service. And it is all readily accessible\nthrough the GraphQL API."),(0,o.kt)("p",null,"The final step is to access the API from your application. We'll look at an example in Javascript. Take a look at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/api/overview"},"API guides")," to learn how to query the API from your favorite language or framework."),(0,o.kt)("p",null,"Create the Javascript file ",(0,o.kt)("inlineCode",{parentName:"p"},"index.js")," with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { ApolloClient, gql} from \"@apollo/client\";\n\nconst client = new ApolloClient({ \n  uri: 'http://localhost:7050/graphql/customer360'\n});\n")),(0,o.kt)("p",null,"This imports and connects the ",(0,o.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo GraphQL client"),"  to our customer 360 API. If you don't have the client installed, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @apollo/client graphql")," first. \\\nWe can now run queries against it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'client\n  .query({\n    query: gql`\n      query GetProduct {\n        products(filter: [{ id: {eq: "1"}}]) {\n            items {\n                name\n                sizing\n                weight_in_grams\n            }\n        }\n      }\n    `\n  })\n  .then(result => console.log(result));\n')),(0,o.kt)("p",null,"Run this code to see the result printed to your console."),(0,o.kt)("h2",{id:"next"},"Next Steps"),(0,o.kt)("p",null,"You just built and accessed a Customer 360 data service. Good work!\nGive yourself a pat on the back."),(0,o.kt)("p",null,"This tutorial covered the basics of building data services in DataSQRL. We recommend that\nyou read the ",(0,o.kt)("a",{parentName:"p",href:"intro/overview"},"DataSQRL Introduction")," next because it extends this tutorial and\nexplains each of the concepts covered here in more detail. If you found this short tutorial too ",(0,o.kt)("em",{parentName:"p"},"dense")," or missing information, the complete ",(0,o.kt)("a",{parentName:"p",href:"intro/overview"},"DataSQRL Introduction")," will fill in the gaps and teach you everything you need to know to build your own data services in DataSQRL."))}c.isMDXComponent=!0},7352:function(e,t,n){t.Z=n.p+"assets/images/nutshop-f64d041f48e627c5dfcb7feef6e1afbd.jpg"}}]);