"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3697],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5873:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Download & Install"},s=void 0,u={unversionedId:"getting-started/install",id:"getting-started/install",title:"Download & Install",description:"Work in progress - not ready yet",source:"@site/docs/getting-started/install.md",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/docs/getting-started/install",editUrl:"https://github.com/dataengai/dataengai.github.io/edit/main/docs/docs/getting-started/install.md",tags:[],version:"current",frontMatter:{title:"Download & Install"},sidebar:"docs",previous:{title:"Getting Started with DataSQRL",permalink:"/docs/getting-started/overview"},next:{title:"Intro Tutorial",permalink:"/docs/getting-started/nutshop-tutorial"}},c={},d=[{value:"DataSQRL Command",id:"binaries",level:2},{value:"Run Docker Image",id:"docker",level:2},{value:"Build from Source",id:"build",level:2}],p={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Work in progress - not ready yet"))),(0,o.kt)("h1",{id:"how-to-run-datasqrl"},"How to Run DataSQRL"),(0,o.kt)("p",null,"Let's get you up and running with DataSQRL in no time so you can follow the examples\nand play with DataSQRL on your own."),(0,o.kt)("p",null,"Pick from the following installation options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#binaries"},"DataSQRL Command")),": Install the DataSQRL binaries on your machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#docker"},"Docker")),": The easiest way to fire up DataSQRL if you already have Docker\ninstalled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"#build"},"Build Yourself")),": For the adventurous developer, you can build DataSQRL\non your local machine. ")),(0,o.kt)("h2",{id:"binaries"},"DataSQRL Command"),(0,o.kt)("h2",{id:"docker"},"Run Docker Image"),(0,o.kt)("h2",{id:"build"},"Build from Source"))}m.isMDXComponent=!0}}]);