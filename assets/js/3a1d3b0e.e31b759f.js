"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4152],{5788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),g=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=g(n),s=a,y=u["".concat(m,".").concat(s)]||u[s]||d[s]||i;return n?r.createElement(y,l(l({ref:t},p),{},{components:n})):r.createElement(y,l({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>g});var r=n(5072),a=(n(1504),n(5788));const i={title:"Time Functions"},l="Time Functions",o={unversionedId:"reference/sqrl/functions/time",id:"reference/sqrl/functions/time",title:"Time Functions",description:"The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library.",source:"@site/docs/reference/sqrl/functions/time.md",sourceDirName:"reference/sqrl/functions",slug:"/reference/sqrl/functions/time",permalink:"/docs/reference/sqrl/functions/time",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/functions/time.md",tags:[],version:"current",frontMatter:{title:"Time Functions"},sidebar:"docs",previous:{title:"String Functions",permalink:"/docs/reference/sqrl/functions/string"},next:{title:"Text Functions",permalink:"/docs/reference/sqrl/functions/text"}},m={},g=[{value:"Reference",id:"reference",level:2}],p={toc:g},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"time-functions"},"Time Functions"),(0,a.yg)("p",null,"The time function package contains functions to convert, aggregate, and manipulate timestamps and DateTime scalars. The time function package is part of the standard SQRL function library."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"IMPORT time.*; -- imports all time functions\nIMPORT time.dayOfWeek; -- imports single time function\n")),(0,a.yg)("h2",{id:"reference"},"Reference"),(0,a.yg)("p",null,"The following table lists all the functions in the time package with a short description. The table also specifies whether a function is a ",(0,a.yg)("a",{parentName:"p",href:"../../stream##aggregation"},"time-window")," function."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Function Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"),(0,a.yg)("th",{parentName:"tr",align:null},"Time Window?"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"atZone"),(0,a.yg)("td",{parentName:"tr",align:null},"Returns the timestamp at the given timezone."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dayOfMonth"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the day of the month for a given date. For example, dayOfMonth('2020-07-15') would return 15."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dayOfWeek"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  an integer representing the day of the week for a given date. For example, dayOfWeek('2020-07-01') returns 3, indicating that July 1, 2020 is a Wednesday."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"dayOfYear"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the day of the year for a given date. For example, dayOfYear('2020-02-14') returns 45."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfDay"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of day for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfDay(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T23:59:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfHour"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of hour for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfHour(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T18:59:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfMinute"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of minute for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfMinute(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T18:23:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfMonth"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of month for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfMonth(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-31T23:59:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfSecond"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of second for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfSecond(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfWeek"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of week for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfWeek(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T23:59:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"endOfYear"),(0,a.yg)("td",{parentName:"tr",align:null},"Time window function that returns the end of year for the timestamp argument.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"endOfYear(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-12-31T23:59:59.999999999Z")),(0,a.yg)("td",{parentName:"tr",align:null},"yes")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"epochMilliToTimestamp"),(0,a.yg)("td",{parentName:"tr",align:null},"Converts the epoch timestamp in milliseconds to the corresponding timestamp.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"epochMilliToTimestamp(1678645414000)")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34Z")),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"epochToTimestamp"),(0,a.yg)("td",{parentName:"tr",align:null},"Converts the epoch timestamp in seconds to the corresponding timestamp.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"epochToTimestamp(1678645414)")," returns the timestamp ",(0,a.yg)("inlineCode",{parentName:"td"},"2023-03-12T18:23:34Z")),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hour"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the hour of a given time value. For example, hour('12:30:15') returns 12."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"minute"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the minute of a given time value. For example, minute('12:45:30') returns 45."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"month"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the month of a given date. For example, month('2020-07-01') returns 7."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"parseTimestamp"),(0,a.yg)("td",{parentName:"tr",align:null},"Parses a timestamp from an ISO timestamp string."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"quarter"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  an integer value representing the quarter of the year for a given date. For example, quarter('2020-07-15') returns 3, representing the third quarter of the year."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"second"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the second item in a list of items. For example, second('apple', 'banana', 'cherry') would return 'banana'."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"timestampToEpoch"),(0,a.yg)("td",{parentName:"tr",align:null},"Returns the seconds since epoch for the given timestamp.",(0,a.yg)("br",null),"E.g. ",(0,a.yg)("inlineCode",{parentName:"td"},"timestampToEpoch(parseTimestamp(2023-03-12T18:23:34.083Z))")," returns the number ",(0,a.yg)("inlineCode",{parentName:"td"},"1678645414")),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"timestampToString"),(0,a.yg)("td",{parentName:"tr",align:null},"Converts the timestamp to an ISO timestamp string"),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"week"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the week number of the year for a given date. For example, week('2020-02-14') returns 7, as February 14th is the 7th week of the year 2020."),(0,a.yg)("td",{parentName:"tr",align:null},"no")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"year"),(0,a.yg)("td",{parentName:"tr",align:null},"This SQL function returns  the year from a given date. For example, year('2020-01-01') would return 2020."),(0,a.yg)("td",{parentName:"tr",align:null},"no")))))}d.isMDXComponent=!0}}]);