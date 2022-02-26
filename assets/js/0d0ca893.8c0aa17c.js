"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[596],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return g}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),u=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},l=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(r),g=n,f=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return r?a.createElement(f,i(i({ref:e},l),{},{components:r})):a.createElement(f,i({ref:e},l))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5144:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return l},toc:function(){return d},default:function(){return g}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={},c="DataSQRL Training",u={unversionedId:"getting-started/intro/overview",id:"getting-started/intro/overview",title:"DataSQRL Training",description:'" width="300"/>',source:"@site/docs/getting-started/intro/overview.md",sourceDirName:"getting-started/intro",slug:"/getting-started/intro/overview",permalink:"/docs/getting-started/intro/overview",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/intro/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Intro Tutorial",permalink:"/docs/getting-started/nutshop-tutorial"},next:{title:"Connect Data Source",permalink:"/docs/getting-started/intro/data-sources"}},l={},d=[{value:"What is DataSQRL?",id:"whatis",level:2},{value:"How to build a data service in DataSQLR",id:"build",level:2}],p={toc:d};function g(t){var e=t.components,r=(0,n.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datasqrl-training"},"DataSQRL Training"),(0,o.kt)("img",{src:"/img/index/undraw_personal_training_sqrl.svg",alt:"Nut Shop Tutorial >",width:"300"}),(0,o.kt)("p",null,"This extended tutorial introduces you to the core concepts of DataSQRL and provides enough\ncontext for you to start building your own data services in DataSQRL."),(0,o.kt)("p",null,"We will extend our ",(0,o.kt)("a",{parentName:"p",href:"../nutshop-tutorial"},"Customer 360 data service")," for our nut shop to\nillustrate the concepts with examples. We are going to add product recommendations, a\nnutritional analysis, and more. It'll be a riot. Please read the\n",(0,o.kt)("a",{parentName:"p",href:"../nutshop-tutorial"},"introductory tutorial")," first, so you can follow along. It only takes\n10 minutes."),(0,o.kt)("h2",{id:"whatis"},"What is DataSQRL?"),(0,o.kt)("p",null,"DataSQRL is a data system for building data services from various sources of data.\nYou connect data sources to a running DataSQRL server and then write SQRL scripts that\nclean, transform, and analyze the data. Executing the script on the DataSQRL server\ngenerates a GraphQL API for you data service that you can consume any way you want."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Add Schematic drawing of DataSQRL server with incoming scripts & data and producing APIs")),(0,o.kt)("p",null,'SQRL (pronounced "squirrel") stands for ',(0,o.kt)("em",{parentName:"p"},'"Structured Query and Reaction Language"'),". It\nextends the popular database language SQL by some constructs and syntactic sugar to make\nit easier and more productive to build responsive data services from raw data. Specifically,\nSQRL provides support for realtime data streams and the ability to react to incoming data -\nhence the name. A big chunk of this tutorial is devoted to covering how SQRL extends\nSQL and the concepts it provides that make building data services easy. But we are getting\nahead of ourselves."),(0,o.kt)("h2",{id:"build"},"How to build a data service in DataSQLR"),(0,o.kt)("p",null,"There are 3 steps to building a data service in DataSQLR:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting-started/intro/data-sources"},"Connect data sources")),": Connecting a data source to\nDataSQLR server\nmakes the data available for use within our SQRL scripts. Hence, the first step to build a data\nservice is connecting the data we want to build with."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"sqrl"},"Write SQRL script")),": The SQRL script defines the data transformations and\ndata logic of our data service. It is the brains of the whole operation. "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"api"},"Access API")),": When we execute the SQRL script, the DataSQRL server generates\na GraphQL data API based on the result. You access the API from your application in\nthe programming language of your choice.")),(0,o.kt)("p",null,"Before we look more closely at those 3 steps, make sure that you have DataSQRL\n",(0,o.kt)("a",{parentName:"p",href:"../install"},"installed")," and ",(0,o.kt)("a",{parentName:"p",href:"../nutshop-tutorial#setup"},"running"),". Later, we'll look in\nmore detail at ",(0,o.kt)("a",{parentName:"p",href:"server"},"operating DataSQRL server"),"."),(0,o.kt)("p",null,"Alright, with all that preamble out of the way, let's buckle up and go on a ride.\nFirst stop: ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/getting-started/intro/data-sources"},"Connecting data sources")),"."))}g.isMDXComponent=!0}}]);