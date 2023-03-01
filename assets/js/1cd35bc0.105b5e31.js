"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={},c="Implement Custom Functions",a={unversionedId:"reference/sqrl/functions/custom-functions",id:"reference/sqrl/functions/custom-functions",title:"Implement Custom Functions",description:"A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script.",source:"@site/docs/reference/sqrl/functions/custom-functions.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/custom-functions",permalink:"/docs/reference/sqrl/functions/custom-functions",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/docs/reference/sqrl/functions/custom-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Time Functions",permalink:"/docs/reference/sqrl/functions/time"},next:{title:"SQL Primer",permalink:"/docs/reference/sqrl/sql-primer"}},s={},u=[{value:"Functions in Java",id:"functions-in-java",level:2},{value:"Functions in JavaScript",id:"functions-in-javascript",level:2},{value:"Functions in Python",id:"functions-in-python",level:2}],l={toc:u},p="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"implement-custom-functions"},"Implement Custom Functions"),(0,o.kt)("p",null,"A custom function package contains function definitions and implementations that the DataSQRL compiler can import into a script."),(0,o.kt)("p",null,"::: info\nBefore implementing a custom function package, check if the function you need is part of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/category/functions"},"system function library")," or can be found in the repository.\n:::"),(0,o.kt)("p",null,"To create a new function package, first create a sub-folder ",(0,o.kt)("inlineCode",{parentName:"p"},"myFunctionPackage")," in the directory of the script where you want to import the functions. "),(0,o.kt)("p",null,"Then follow the instructions below for implementing a function package in the language of your choice."),(0,o.kt)("p",null,"Note, that function packages can be ",(0,o.kt)("a",{parentName:"p",href:"../../operations/repository#publish"},"published to the repository"),", so you can reuse your functions across scripts."),(0,o.kt)("h2",{id:"functions-in-java"},"Functions in Java"),(0,o.kt)("p",null,"work in progress - check back soon"),(0,o.kt)("h2",{id:"functions-in-javascript"},"Functions in JavaScript"),(0,o.kt)("p",null,"coming soon"),(0,o.kt)("h2",{id:"functions-in-python"},"Functions in Python"),(0,o.kt)("p",null,"coming soon"))}f.isMDXComponent=!0}}]);