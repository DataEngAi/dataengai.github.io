"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Design the API"},o="Querying and Designing the API",s={unversionedId:"getting-started/intro/api",id:"getting-started/intro/api",title:"Design the API",description:'" width="50%"/>',source:"@site/docs/getting-started/intro/api.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/api",permalink:"/docs/getting-started/intro/api",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/getting-started/intro/api.md",tags:[],version:"current",frontMatter:{title:"Design the API"},sidebar:"docs",previous:{title:"Connect Data Source",permalink:"/docs/getting-started/intro/data-sources"},next:{title:"Advanced Topics",permalink:"/docs/getting-started/intro/advanced"}},l={},p=[{value:"Querying the API",id:"querying-the-api",level:2},{value:"Customizing the API Specification",id:"customizing-the-api-specification",level:2},{value:"Pagination",id:"pagination",level:3},{value:"Mutations and Inserting Data",id:"mutations-and-inserting-data",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"querying-and-designing-the-api"},"Querying and Designing the API"),(0,r.kt)("img",{src:"/img/generic/undraw_specs.svg",alt:"Designing the API >",width:"50%"}),(0,r.kt)("p",null,"When we ",(0,r.kt)("a",{parentName:"p",href:"../overview#run"},"run")," our ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-sqrl.sqrl"},"script"),", DataSQRL compiles a data pipeline that exposes an API to access the resulting data. We ",(0,r.kt)("a",{parentName:"p",href:"../../quickstart#query"},"queried")," the API via GraphiQL in the browser by opening ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8888//graphiql/"),". Let's look at those queries in more detail."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We will be accessing the generated GraphQL API. If you are new to the GraphQL API standard, take a quick look at the documentation for ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/graphql/query"},"querying GraphQL"),". We ",(0,r.kt)("a",{parentName:"p",href:"/docs/dev/roadmap#rest"},"are working")," on REST support.")),(0,r.kt)("h2",{id:"querying-the-api"},"Querying the API"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"../overview"},"first chapter")," we retrieved the purchase history and spending analysis of the user with ",(0,r.kt)("inlineCode",{parentName:"p"},"id=10")," by running the following query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\nUsers (id: 10) {\n    purchases {\n        id\n        totals {\n            price\n            saving\n        }\n    }    \n    spending {\n        week\n        spend\n        saved\n    }\n}}\n")),(0,r.kt)("p",null,"At the root of this query, we are querying the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table for rows that match the given id. We then navigate along the ",(0,r.kt)("inlineCode",{parentName:"p"},"purchases")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spending")," relationships to query for the related rows from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Orders")," and nested ",(0,r.kt)("inlineCode",{parentName:"p"},"Users.spending")," tables, respectively."),(0,r.kt)("p",null,"Defining relationships explicitly in SQRL allows us to query related data easily in the API. We can also use filters in relationships to select the related rows we want to retrieve."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\nProducts (category: "acorns") {\n  name\n  weight_in_gram\n  category\n  volume_10day(country: "US") {\n    quantity\n    spend\n    weight\n  }\n}}\n')),(0,r.kt)("p",null,'This query retrieves all products from the "acorns" category. Acorns are a favorite among squirrels. We then navigate to the nested ',(0,r.kt)("inlineCode",{parentName:"p"},"volume_10day")," relationship to the nested table that aggregates orders of that product over the last 10 days and groups them by country. We filter those rows to only retrieve the aggregates for the US."),(0,r.kt)("p",null,"Relationships allow us to construct complex queries which return all the data we need in a single request. We don't have to stitch our desired result set together by querying multiple tables. That saves you a ton of time and is also a lot faster."),(0,r.kt)("h2",{id:"customizing-the-api-specification"},"Customizing the API Specification"),(0,r.kt)("p",null,"By default, DataSQRL generates an API specification that exposes query endpoints for all tables defined in the SQRL script and makes all fields in those tables accessible, including relationships to navigate to related tables. In addition, DataSQRL generates field filters for all queries and relationships that give the user of the API the option to filter out rows."),(0,r.kt)("p",null,"The easiest way to customize the GraphQL API is to start with the default GraphQL schema generated by DataSQRL with the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl -a graphql\n")),(0,r.kt)("p",null,"First, let's take a look at the API specification that DataSQRL generated in the file ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphqls"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type NumOrders {\n  count: Int!\n}\n\ntype Products {\n  id: Int!\n  name: String!\n  sizing: String!\n  weight_in_gram: Int!\n  type: String!\n  category: String!\n  usda_id: Int!\n  updated: String!\n  ordered_items(productid: Int, quantity: Int, unit_price: Float, discount: Float, total: Float): [items!]\n  volume_10day(country: String, quantity: Int, spend: Float, weight: Int): [volume_10day!]\n}\n\ntype Query {\n  NumOrders(count: Int): [NumOrders!]\n  Orders(id: Int, customerid: Int, time: String): [orders!]\n  Products(id: Int, name: String, sizing: String, weight_in_gram: Int, type: String, category: String, usda_id: Int, updated: String): [Products!]\n  Users(id: Int, first_name: String, last_name: String, email: String, ip_address: String, country: String, changed_on: Int, timestamp: String): [Users!]\n}\n\ntype Users {\n  id: Int!\n  first_name: String!\n  last_name: String!\n  email: String!\n  ip_address: String\n  country: String\n  changed_on: Int!\n  timestamp: String!\n  purchases(id: Int, customerid: Int, time: String): [orders!]\n  spending(week: String, spend: Float, saved: Float): [spending!]\n  past_purchases(productid: Int, num_orders: Int, total_quantity: Int): [past_purchases!]\n}\n\n.... [truncated]\n")),(0,r.kt)("p",null,"The GraphQL schema has one type for each table we defined in the SQRL script. The types have a field for each column in the associated table, including relationship columns. Tables map to types and columns map to fields based on name."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," type contains one query endpoint for each (non-nested) table. The queries and relationships have one argument for each field in the queried or related table. When those arguments are provided by a user querying the API, they translate to a filter on the returned rows from the underlying table. In our query examples above, we filtered ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," by id, ",(0,r.kt)("inlineCode",{parentName:"p"},"Products")," by category, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"volume_10day")," relationship traversal by country."),(0,r.kt)("p",null,"If we specify multiple arguments, only those rows are returned that match all filter conditions."),(0,r.kt)("p",null,"However, most of the filters we don't need in the API, so we are going to remove them and trim down the API. We are also going to limit the query endpoints and remove some fields we don't want to expose in the API."),(0,r.kt)("p",null,"Rename the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.graphqls")," file to ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.graphqls")," and change it to the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Products {\n  id: Int!\n  name: String!\n  sizing: String!\n  category: String!\n  volume_10day(country: String): [volume_10day!]\n}\n\ntype Query {\n  Products(id: Int, name: String, category: String): [Products!]\n  Users(id: Int!): Users\n}\n\ntype Users {\n  id: Int!\n  first_name: String!\n  last_name: String!\n  country: String\n  purchases: [orders!]\n  spending: [spending!]\n  past_purchases(productid: Int): [past_purchases!]\n}\n\ntype items {\n  quantity: Int!\n  unit_price: Float!\n  discount: Float!\n  total: Float!\n  product: Products!\n}\n\ntype orders {\n  id: Int!\n  time: String!\n  items: [items!]\n  totals: totals\n}\n\ntype past_purchases {\n  productid: Int!\n  num_orders: Int!\n  total_quantity: Int!\n}\n\ntype spending {\n  week: String!\n  spend: Float!\n  saved: Float!\n}\n\ntype totals {\n  price: Float!\n  saving: Float!\n}\n\ntype volume_10day {\n  country: String\n  quantity: Int!\n  spend: Float!\n  weight: Int!\n}\n")),(0,r.kt)("p",null,"Note, that we removed the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"NumOrders")," table because we don't need it for now.\nWe changed the ",(0,r.kt)("inlineCode",{parentName:"p"},"Users")," table query endpoint to ",(0,r.kt)("inlineCode",{parentName:"p"},"Users(id: Int!): Users")," to make a user id required and return only a single user (which may be ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if it doesn't exist) instead of a list of users ",(0,r.kt)("inlineCode",{parentName:"p"},"[Users!]"),"."),(0,r.kt)("p",null,"To instruct the DataSQRL compiler to use our custom API specification, we add it as a second argument to the command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -v $PWD:/build datasqrl/cmd compile seedshop.sqrl seedshop.graphqls --mnt $PWD\n")),(0,r.kt)("p",null,"To launch the updated pipeline, execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"(cd build/deploy; docker compose up)\n")),(0,r.kt)("p",null,"If refresh GraphiQL in the browser, you will see your custom API."),(0,r.kt)("p",null,"Another neat benefit of customizing and trimming down the API specification is that it allows DataSQRL to generate more efficient data pipelines. DataSQRL automatically removes computations that aren't visible in the API and selects optimal index structures for the database based on the filters that are available in the API."),(0,r.kt)("h3",{id:"pagination"},"Pagination"),(0,r.kt)("p",null,"Our current API always returns all filtered results for queries or when navigating relationships. In some cases, those result sets can be very large, and we don't want to transfer huge result sets through the API. Instead, we want to allow consumers of our API to page through the results."),(0,r.kt)("p",null,"We are going to add limit+offset based pagination to our API. It only requires adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit: Int, offset: Int")," arguments to queries and relationship fields."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Products {\n  id: Int!\n  name: String!\n  sizing: String!\n  category: String!\n  volume_10day(country: String, limit: Int = 20, offset: Int = 0): [volume_10day!]\n}\n\ntype Query {\n  Products(id: Int, name: String, category: String, limit: Int!, offset: Int = 0): [Products!]\n  Users(id: Int!): Users\n}\n\ntype Users {\n  id: Int!\n  first_name: String!\n  last_name: String!\n  country: String\n  purchases(limit: Int = 20, offset: Int = 0): [orders!]\n  spending: [spending!]\n  past_purchases(productid: Int): [past_purchases!]\n}\n.... [truncated]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," argument limits the size of the returned result set to the given number. The ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," argument moves to the given position in the result set before starting to retrieve records.\nBoth arguments can be made required and given a default value as shown in the example above."),(0,r.kt)("p",null,"Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.graphqls")," schema with limit+offset pagination as shown above, save the file, and re-run the script. You can now execute the following query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\nProducts (category: "acorns", limit: 2, offset: 2) {\n  name\n  category\n  volume_10day(limit: 2) {\n    quantity\n    spend\n    weight\n  }\n}}\n')),(0,r.kt)("p",null,"This query limits the number of returned products to 5 starting after position 2 in the complete result set. When you navigate through a relationship, you can filter records and use ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"offset")," in the same way you would when querying a table at the top level to specify which related records you want to be returned, in what order, and how many of them."),(0,r.kt)("p",null,"Note, that these arguments are applied locally for each record that is returned. In the query above, ",(0,r.kt)("inlineCode",{parentName:"p"},"volume_10day(limit: 2) ")," means that we are asking for up to 2 results ",(0,r.kt)("em",{parentName:"p"},"for each")," product and not 2 total for the entire request. ",(0,r.kt)("br",null),"\nAs we navigate through relationships, we need to keep in mind that result set cardinalities multiply and choose small enough page sizes to avoid huge responses from the server."),(0,r.kt)("h2",{id:"mutations-and-inserting-data"},"Mutations and Inserting Data"),(0,r.kt)("p",null,"Next, we are going to collect product visits through the API in order to improve our recommendation engine with recent user behavior. We are going to capture when a user visits a product page and aggregate those product visits to determine which products a user is interested in."),(0,r.kt)("p",null,"First, we are going to add a mutation to our GraphQL API schema to capture the product visit event. Add the following to the end of the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.graphqls")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Mutation {\n  ProductVisit(event: VisitEvent!): CreatedProductVisit\n}\n\ninput VisitEvent {\n  userid: Int!\n  productid: Int!\n}\n\ntype CreatedProductVisit {\n  _source_time: String!\n  productid: Int!\n  userid: Int!\n}\n")),(0,r.kt)("p",null,"We created a mutation (i.e. an API endpoint that accepts data) called ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductVisit")," that accepts an input of type ",(0,r.kt)("inlineCode",{parentName:"p"},"VisitEvent")," and returns the type ",(0,r.kt)("inlineCode",{parentName:"p"},"CreatedProductVisit"),"."),(0,r.kt)("p",null,"When you create mutations, the input type can have arbitrary fields to represent the data you want to capture. The fields of the mutation return type must be a subset of those fields plus the special field ",(0,r.kt)("inlineCode",{parentName:"p"},"_source_time")," which returns the time when the event was created on the server."),(0,r.kt)("p",null,"The use the product visits in our SQRL script, we import it like the other data before. Add the following line to the imports in the ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop.sqrl"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"IMPORT seedshop.ProductVisit;\n")),(0,r.kt)("p",null,"To import the data from a mutation, you use the name of the GraphQL schema file as the package name (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"seedshop"),") and the mutation name as the table name (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"ProductVisit"),")."),(0,r.kt)("p",null,"Now, we can aggregate the product visits over the last 90 days for each user to determine what products they might like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"Users.product_visits := SELECT productid, count(1) as visits\n      FROM @ JOIN ProductVisit v ON @.id = v.userid\n      WHERE v._source_time > now() - INTERVAL 90 DAY\n      GROUP BY productid ORDER BY visits DESC;\n")),(0,r.kt)("p",null,"Add the table definition after ",(0,r.kt)("inlineCode",{parentName:"p"},"Users.past_purchases")," and save the SQRL script."),(0,r.kt)("p",null,"To retrieve ",(0,r.kt)("inlineCode",{parentName:"p"},"product_visits")," through the API, we add the corresponding type and relationship to the GraphQL schema:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"\ntype User {\n  [existing fields...]\n  product_visits: [product_visits!]\n}\n\ntype product_visits {\n  productid: Int!\n  visits: Int!\n}\n")),(0,r.kt)("p",null,"And there we have our custom, polished data API in GraphQL that allows us to query and add data. Check out the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-mutation.graphqls"},"final GraphQL schema")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DataSQRL/sqrl/blob/main/sqrl-examples/quickstart/quickstart-mutation.sqrl"},"corresponding SQRL script"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"Wonderful, you have completed the 3 essential steps of building a data pipeline with DataSQRL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Writing SQRL scripts"),(0,r.kt)("li",{parentName:"ul"},"Connecting data sources"),(0,r.kt)("li",{parentName:"ul"},"Designing and querying the data API")),(0,r.kt)("p",null,"Now you can go off, build amazing data products, and ",(0,r.kt)("a",{parentName:"p",href:"/community"},"tell us")," about it."),(0,r.kt)("p",null,"If you are eager to continue learning, we have two more optional chapters in this tutorial:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../advanced"},(0,r.kt)("strong",{parentName:"a"},"Advanced Topics"))," covers additional features of DataSQRL."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../deploy"},(0,r.kt)("strong",{parentName:"a"},"Deployment"))," shows you how to deploy the data pipeline compiled by DataSQRL.")),(0,r.kt)("p",null,"If you want to learn more about querying the data API from your application or favorite programming language, the ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/graphql/query"},"reference documentation")," has an overview. It also ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/api/graphql/design"},"covers API design")," in more detail."))}c.isMDXComponent=!0}}]);