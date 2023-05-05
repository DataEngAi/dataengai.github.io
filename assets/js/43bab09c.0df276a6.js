"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9452],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Postgres"},o="Postgres Database Engine",l={unversionedId:"reference/operations/engines/postgres",id:"reference/operations/engines/postgres",title:"Postgres",description:"Postgres is an open-source relational database management system (RDBMS) that emphasizes extensibility and compliance with SQL standards. Postgres offers a powerful set of data manipulation and analysis tools, including advanced indexing options, query optimization, and support for full-text search. In addition, it provides a robust security model with built-in authentication, authorization, and auditing capabilities. Postgres is widely used in enterprise and web-based applications, as well as in academic and scientific environments, and has a large and active user community that contributes to its ongoing development and improvement.",source:"@site/docs/reference/operations/engines/postgres.md",sourceDirName:"reference/operations/engines",slug:"/reference/operations/engines/postgres",permalink:"/docs/reference/operations/engines/postgres",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/operations/engines/postgres.md",tags:[],version:"current",frontMatter:{title:"Postgres"},sidebar:"docs",previous:{title:"Flink",permalink:"/docs/reference/operations/engines/flink"},next:{title:"Vertx",permalink:"/docs/reference/operations/engines/vertx"}},s={},d=[{value:"Configure",id:"configure",level:2},{value:"Deploy",id:"deploy",level:2},{value:"Deployment Artifacts",id:"deployment-artifacts",level:3},{value:"Build Executable",id:"build-executable",level:3},{value:"Deploy Executable",id:"deploy-executable",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"postgres-database-engine"},"Postgres Database Engine"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.postgresql.org/"},"Postgres")," is an open-source relational database management system (RDBMS) that emphasizes extensibility and compliance with SQL standards. Postgres offers a powerful set of data manipulation and analysis tools, including advanced indexing options, query optimization, and support for full-text search. In addition, it provides a robust security model with built-in authentication, authorization, and auditing capabilities. Postgres is widely used in enterprise and web-based applications, as well as in academic and scientific environments, and has a large and active user community that contributes to its ongoing development and improvement."),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"The Postgres database engine is configured as an engine in the ",(0,r.kt)("a",{parentName:"p",href:"../../package-config#engine"},"package configuration")," with the following configuration options."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jdbc")," string literal"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"url"),(0,r.kt)("td",{parentName:"tr",align:null},"The JDBC URL for connecting to the database."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"driver"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the string ",(0,r.kt)("inlineCode",{parentName:"td"},"org.postgresql.Driver"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dialect"),(0,r.kt)("td",{parentName:"tr",align:null},"Use the string ",(0,r.kt)("inlineCode",{parentName:"td"},"postgres"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"database"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the database to use for storing data."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"User name for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"Password for authentication."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h2",{id:"deploy"},"Deploy"),(0,r.kt)("h3",{id:"deployment-artifacts"},"Deployment Artifacts"),(0,r.kt)("p",null,"The DataSQRL compiler generates a database schema for Postgres that includes all table definitions and optimal index structures. The schema is generated in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build/deploy/database-schema.sql")," file. "),(0,r.kt)("h3",{id:"build-executable"},"Build Executable"),(0,r.kt)("p",null,"The Postgres database engine does not require building an executable. You can install the schema directly in the database."),(0,r.kt)("h3",{id:"deploy-executable"},"Deploy Executable"),(0,r.kt)("p",null,"Install the database schema from the sql file in the database by running the SQL DDL statements contained in the file."),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"../../deploy/docker"},"docker documentation")," for using docker to automate the setup of a Postgres database and using Postgres initialization to install the schema."))}u.isMDXComponent=!0}}]);