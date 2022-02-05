"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8646],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(m,s(s({ref:t},c),{},{components:a})):n.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9151:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={title:"Connect Data Source"},l="Connecting Data Sources",d={unversionedId:"getting-started/intro/data-sources",id:"getting-started/intro/data-sources",title:"Connect Data Source",description:"Before we can use data in our scripts, we have to connect the data source with DataSQRL",source:"@site/docs/getting-started/intro/data-sources.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/data-sources",permalink:"/docs/getting-started/intro/data-sources",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/intro/data-sources.md",tags:[],version:"current",frontMatter:{title:"Connect Data Source"},sidebar:"docs",previous:{title:"Introduction to DataSQRL",permalink:"/docs/getting-started/intro/overview"},next:{title:"Write SQRL Script",permalink:"/docs/getting-started/intro/sqrl"}},c=[{value:"What is a Data Source?",id:"what-is-a-data-source",children:[],level:2},{value:"Data Source Basics",id:"basics",children:[],level:2},{value:"Developing with Data Sources",id:"developing-with-data-sources",children:[{value:"Streaming Data",id:"streaming-data",children:[],level:3}],level:2},{value:"Cloud Storage Data Source",id:"cloud-storage-data-source",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-data-sources"},"Connecting Data Sources"),(0,o.kt)("p",null,"Before we can use data in our scripts, we have to connect the data source with DataSQRL\nserver so the server knows how to access the data."),(0,o.kt)("h2",{id:"what-is-a-data-source"},"What is a Data Source?"),(0,o.kt)("p",null,"A data source is a system that holds data and allows access to the data. DataSQRL supports\nmany types of data sources: filesystems, cloud storage, database systems, queues, logs,\nand more. Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/sources/overview"},"full list of supported data sources"),"\nwhich links to detailed information on how to connect them to DataSQRL."),(0,o.kt)("p",null,"A data source is connected to the DataSQRL server via the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cmd#sources"},"command line utility"),"\nor through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/sources/api"},"data source API"),". Connecting a data source\ntells the DataSQRL server where it can find data and how to access it. That's why connecting\na data source is the first step for building data services with DataSQRL: without\ndata sources there is no data to build with."),(0,o.kt)("h2",{id:"basics"},"Data Source Basics"),(0,o.kt)("p",null,"In our ",(0,o.kt)("a",{parentName:"p",href:"../nutshop-tutorial#adding-data"},"introductory tutorial")," we connected a folder\nas a data source to DataSQRL with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl source folder nutshop-data\n")),(0,o.kt)("p",null,"This adds the dataset ",(0,o.kt)("inlineCode",{parentName:"p"},"nutshop-data")," to the server and a table for each file contained\nwithin the folder: the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," table for data in ",(0,o.kt)("inlineCode",{parentName:"p"},"products.csv")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," table\nfor records in ",(0,o.kt)("inlineCode",{parentName:"p"},"orders_1.json"),"."),(0,o.kt)("p",null,"DataSQRL structures data into tables with fields (or columns). A data record is represented as\na table row. Tables can be nested to represent hierarchical data. \\\nFor example, the json file ",(0,o.kt)("inlineCode",{parentName:"p"},"orders_1.json")," is made\navailable in DataSQRL as the table ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," with fields like ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"customerid")," and each order\nrecord is a row in the table. The ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," table has a nested ",(0,o.kt)("inlineCode",{parentName:"p"},"entries")," table for each order\nentry in the hierarchical json source data."),(0,o.kt)("p",null,"Tables are grouped into datasets. A dataset usually consists of tables that are related or\nlogically belong together like the ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," tables in our tutorial."),(0,o.kt)("p",null,"A data source provides access to one or multiple datasets. A folder data source adds a\nsingle dataset to the DataSQRL server which has the same name as the folder by default.\nSome data sources add multiple datasets. Datasets must be unique on a single server instance,\ni.e. if two data sources try to add datasets with the same name, you'll get an error and\nhave to ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cmd#sources"},"specify a different")," name for the duplicate dataset. \\\nLikewise, tables within a dataset must have unique names. "),(0,o.kt)("p",null,"To use a table within your SQRL script, you import the table through an import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.Products;\nIMPORT nutshop-data.Orders;\n")),(0,o.kt)("p",null,"When the DataSQRL server executes this script, it looks up the ",(0,o.kt)("inlineCode",{parentName:"p"},"products")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"orders"),"\ntables in the ",(0,o.kt)("inlineCode",{parentName:"p"},"nutshop-data")," dataset and makes that data available for processing within\nthe script. \\\nNote, that dataset and table names are NOT case-sensitive.\n",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Orders")," are treated as the same name unless the name is explicitly delimited."),(0,o.kt)("p",null,"You can also import all tables from a dataset with a single import statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sqrl"},"IMPORT nutshop-data.*;\n")),(0,o.kt)("p",null,"This import statement is equivalent to the two above."),(0,o.kt)("p",null,"That's a lot of concepts and explanation. To summarize:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"table")," contains of data structured by fields with each record as a row."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"dataset")," is a group of related tables."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"data source")," is a configuration that tells DataSQRL where and how to access datasets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IMPORT")," statements make tables available within a SQRL script for processing.")),(0,o.kt)("h2",{id:"developing-with-data-sources"},"Developing with Data Sources"),(0,o.kt)("p",null,"During development, we prefer to work with static files because it\nis predictable and easy to debug. That's why we are using only file-based data sources\nfor our getting started tutorials. It allows us to quickly iterate on our SQRL script\nwithout having to worry about changing data."),(0,o.kt)("p",null,"However, DataSQRL is built specifically for realtime and streaming\ndata and supports data sources like ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/sources/overview"},"queues, logs, and databases"),"\nwhich store streaming or changing data. In DataSQRL every source table is a (potentially\nendless) stream of rows."),(0,o.kt)("h3",{id:"streaming-data"},"Streaming Data"),(0,o.kt)("p",null,"To test this streaming feature of DataSQRL during development with static files, we\ncan add additional data to the data source folder while our script is running. Here is how:"),(0,o.kt)("p",null,"First, make sure you followed the ",(0,o.kt)("a",{parentName:"p",href:"../nutshop-tutorial"},"nut shop tutorial")," and are still\nrunning the ",(0,o.kt)("inlineCode",{parentName:"p"},"customer360")," SQRL script in development mode via the\n",(0,o.kt)("inlineCode",{parentName:"p"},"datasqrl dev customer360.sqrl")," command."),(0,o.kt)("p",null,"Run the following query in GraphiQL and notice the result."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n    customers(filter: [{ id: {eq: "50"}}])\n    {\n        data\n        {\n            orders(limit:10)\n            {\n                id\n                time\n                total\n                savings\n            }\n        }\n    } \n}\n')),(0,o.kt)("p",null,"Now, add the ",(0,o.kt)("a",{parentName:"p",href:"/"},"orders_2.json")," file into the nutshop-folder to add some additional orders.\nDataSQRL treats files which have a name (ignoring the extension) that ends in ",(0,o.kt)("inlineCode",{parentName:"p"},"_[number]"),"\nas part files, i.e. parts of one large file. DataSQRL considers ",(0,o.kt)("inlineCode",{parentName:"p"},"orders_1.json")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"orders_2.json")," to be two parts of the same ",(0,o.kt)("inlineCode",{parentName:"p"},"orders.json")," file.\nThis explains why DataSQRL used ",(0,o.kt)("inlineCode",{parentName:"p"},"orders")," as the table name for the ",(0,o.kt)("inlineCode",{parentName:"p"},"orders_1.json")," file."),(0,o.kt)("p",null,"DataSQRL monitors folder data sources for additional files and when a new part file\nshows up, it ingests those new records and treats them as additional rows in the ",(0,o.kt)("inlineCode",{parentName:"p"},"orders"),"\ntable."),(0,o.kt)("p",null,"You can verify this by running the above query again. You should see a different set of\norders returned because newer orders have been added through ",(0,o.kt)("inlineCode",{parentName:"p"},"orders_2.json"),"."),(0,o.kt)("h2",{id:"cloud-storage-data-source"},"Cloud Storage Data Source"),(0,o.kt)("p",null,"Another popular data source for development is cloud storage because it is easier\nto share and centrally control the data files used for development."),(0,o.kt)("p",null,"In fact, we got some USDA food and nutritional information about the nuts that we sell\nsitting in an S3 bucket. Let's add it as a data source so we can use the nut information\nin our product recommendation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"datasqrl source cloud arn:aws:s3:::usda-data \n")),(0,o.kt)("p",null,"(is this what it should look like?)"),(0,o.kt)("p",null,"Adding a cloud bucket is very similar to adding a folder: DataSQRL adds a dataset for the\nbucket and a table for each file contained therein. However, instead of accessing the data\nlocally, we are now ingesting data from a cloud bucket."),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"You've learned more than enough to get you started with data sources. Next, we are going\n",(0,o.kt)("a",{parentName:"p",href:"sqrl"},"learn more about writing SQRL scripts"),", so you can build powerful data services."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you want to learn more about data sources in DataSQRL, here are a couple of topics to\ndive deeper:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Other Types of Data Sources"),": DataSQRL supports a range of ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/sources/overview"},"different data sources"),"\nfor many popular data systems. You can also ",(0,o.kt)("a",{parentName:"li",href:"/docs/dev/architecture/data-source"},"implement a data source connector"),"\nto connect data sources that aren't supported yet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Source Customization"),": The ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/sources/api"},"data source API")," and\nthe ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/cmd#sources"},"command line utility")," have a number of configuration options\nto customize how data sources are connected. You can change the default dataset name,\nthe pattern DataSQRL uses to recognize part files, refresh intervals, and much, much more.\nCheck out the respective reference pages to learn more."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Schema Discovery"),": DataSQRL automatically analyzes the data in data sources to\ndiscover the schema. DataSQRL supports flexible schemas and heterogeneous data types,\nwhich means you don't have to worry about schema in most cases. Learn more about\n",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/concepts/schema-management"},"schema management")," in DataSQRL and how you can\n",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/sources/manual-schema"},"overwrite the schema")," when you are dealing with complex or messy data.")))}p.isMDXComponent=!0}}]);