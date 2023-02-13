"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9626],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),g=a,d=u["".concat(p,".").concat(g)]||u[g]||h[g]||o;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1769:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(7462),a=(t(7294),t(3905));const o={title:"Query"},l="Query GraphQL APIs",i={unversionedId:"reference/api/graphql/query",id:"reference/api/graphql/query",title:"Query",description:"GraphQL is a query language for APIs. DataSQRL exposes GraphQL APIs that can be queried from any programming language or application. This page provides examples for querying GraphQL APIs in various languages to help you get started. It is neither complete nor comprehensive. For a complete resource on GraphQL visit graphql.org.",source:"@site/docs/reference/api/graphql/query.md",sourceDirName:"reference/api/graphql",slug:"/reference/api/graphql/query",permalink:"/docs/reference/api/graphql/query",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/api/graphql/query.md",tags:[],version:"current",frontMatter:{title:"Query"},sidebar:"docs",previous:{title:"Design",permalink:"/docs/reference/api/graphql/design"},next:{title:"Design",permalink:"/docs/reference/api/graphql/design"}},p={},s=[{value:"GraphQL Playground",id:"graphql-playground",level:2},{value:"JavaScript",id:"javascript",level:2},{value:"Apollo Client",id:"apollo-client",level:3},{value:"Apollo Client React",id:"apollo-client-react",level:3},{value:"Java",id:"java",level:2},{value:"Spring Boot",id:"spring-boot",level:3}],c={toc:s},u="wrapper";function h(e){let{components:r,...t}=e;return(0,a.kt)(u,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-graphql-apis"},"Query GraphQL APIs"),(0,a.kt)("p",null,"GraphQL is a query language for APIs. DataSQRL exposes GraphQL APIs that can be queried from any programming language or application. This page provides examples for querying GraphQL APIs in various languages to help you get started. It is neither complete nor comprehensive. For a complete resource on GraphQL visit ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org"},"graphql.org"),"."),(0,a.kt)("p",null,"If you are unfamiliar with GraphQL, we recommend that you ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/"},"learn about GraphQL")," before proceeding."),(0,a.kt)("p",null,"For the example code snippets below, we are following the ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart"},"Quickstart tutorial")," and assume you are ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart#run"},"running")," the Quickstart SQRL script on your local machine. To connect to a different server or use a different example, you need to change the server URI and query examples."),(0,a.kt)("h2",{id:"graphql-playground"},"GraphQL Playground"),(0,a.kt)("p",null,"DataSQRL includes ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," which allows you to create, execute, and profile queries as well as inspect the GraphQL API directly in your browser."),(0,a.kt)("p",null,"After you ",(0,a.kt)("a",{parentName:"p",href:"../../operations/command#run"},"run")," your SQRL script on your machine, open the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/graphiql/")," in a browser to access GraphiQL."),(0,a.kt)("h2",{id:"javascript"},"JavaScript"),(0,a.kt)("h3",{id:"apollo-client"},"Apollo Client"),(0,a.kt)("p",null,"Import and configure the ",(0,a.kt)("a",{parentName:"p",href:"https://www.apollographql.com/docs/react/"},"Apollo GraphQL client")," as follows.\nIf you don't have the client installed, run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install @apollo/client graphql")," first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { ApolloClient, gql} from \"@apollo/client\";\n\nconst client = new ApolloClient({ \n  uri: 'http://localhost:8888/graphql/'\n});\n")),(0,a.kt)("p",null,"Now, you can execute GraphQL queries as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const CUSTOMER_SPENDING = gql`\n  query CustomerSpending($customerid: Int!) {\n    Customers(id: $customerid) {  \n        spending {\n            month\n            spend\n            saved\n        }\n    }\n  }\n`;\n\nconst customerid = 10;\n\nclient\n  .query({\n    query: CUSTOMER_SPENDING,\n    variables: { customerid },\n  })\n  .then(result => console.log(result));\n")),(0,a.kt)("h3",{id:"apollo-client-react"},"Apollo Client React"),(0,a.kt)("p",null,"additional clients coming soon"),(0,a.kt)("h2",{id:"java"},"Java"),(0,a.kt)("h3",{id:"spring-boot"},"Spring Boot"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/70519410/how-to-invoke-graphql-api-from-a-java-spring-boot-application-is-there-any-anno"},"https://stackoverflow.com/questions/70519410/how-to-invoke-graphql-api-from-a-java-spring-boot-application-is-there-any-anno")))}h.isMDXComponent=!0}}]);