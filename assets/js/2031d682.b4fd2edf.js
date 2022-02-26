"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2848],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1392:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={title:"Data Sources and Sinks"},u="What are Data Sources and Sinks?",s={unversionedId:"reference/sources/overview",id:"reference/sources/overview",title:"Data Sources and Sinks",description:"To be written",source:"@site/docs/reference/sources/overview.md",sourceDirName:"reference/sources",slug:"/reference/sources/overview",permalink:"/docs/reference/sources/overview",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/reference/sources/overview.md",tags:[],version:"current",frontMatter:{title:"Data Sources and Sinks"},sidebar:"docs",previous:{title:"Reference Documentation",permalink:"/docs/reference/overview"},next:{title:"Data Source API",permalink:"/docs/reference/sources/api"}},l={},p=[{value:"How to Connect Data Sources",id:"how-to-connect-data-sources",level:2},{value:"Source Data Schema",id:"source-data-schema",level:2},{value:"Adding a Data Source Type",id:"adding-a-data-source-type",level:2},{value:"How to Connect Data Sinks",id:"how-to-connect-data-sinks",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-are-data-sources-and-sinks"},"What are Data Sources and Sinks?"),(0,a.kt)("p",null,"To be written"),(0,a.kt)("h2",{id:"how-to-connect-data-sources"},"How to Connect Data Sources"),(0,a.kt)("p",null,"You can connect data sources to a DataSQRL server instance either through the\n",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API")," exposed by the server or using the\n",(0,a.kt)("a",{parentName:"p",href:"../cmd#sources"},"DataSQLR command line utility"),"."),(0,a.kt)("p",null,"The command line utility is a wrapper around the ",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API")," which makes it\nconvenient and easy to use.\nHowever, the utility may not support a particular type of data source or all of the\nconfiguration options available in the API. For all the options, we recommend that you\ncheck out the reference documentation for the ",(0,a.kt)("a",{parentName:"p",href:"api"},"data sources API"),"."),(0,a.kt)("p",null,"If you are trying to connect a particular type of data source to DataSQRL, take a look at\nthe ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/sources/overview"},"full list of supported data sources"),"\nwhich detailed guides on how to connect them."),(0,a.kt)("h2",{id:"source-data-schema"},"Source Data Schema"),(0,a.kt)("p",null,"link to schema-management"),(0,a.kt)("h2",{id:"adding-a-data-source-type"},"Adding a Data Source Type"),(0,a.kt)("p",null,"link to dev docs"),(0,a.kt)("h2",{id:"how-to-connect-data-sinks"},"How to Connect Data Sinks"))}f.isMDXComponent=!0}}]);