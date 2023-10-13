"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),l=p(n),h=a,u=l["".concat(m,".").concat(h)]||l[h]||d[h]||i;return n?r.createElement(u,s(s({ref:t},c),{},{components:n})):r.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[l]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Time"},s="Time in SQRL",o={unversionedId:"reference/sqrl/time",id:"reference/sqrl/time",title:"Time",description:"Time is an important concept in SQRL because it determines how data streams are processed.",source:"@site/docs/reference/sqrl/time.md",sourceDirName:"reference/sqrl",slug:"/reference/sqrl/time",permalink:"/docs/reference/sqrl/time",draft:!1,editUrl:"https://github.com/DataSQRL/datasqrl.github.io/edit/main/docs/reference/sqrl/time.md",tags:[],version:"current",frontMatter:{title:"Time"},sidebar:"docs",previous:{title:"Stream Table",permalink:"/docs/reference/sqrl/stream"},next:{title:"Import",permalink:"/docs/reference/sqrl/import"}},m={},p=[{value:"Now",id:"now",level:2},{value:"Determining Timestamps",id:"determining-timestamps",level:2},{value:"Time Synchronization",id:"time-synchronization",level:2}],c={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"time-in-sqrl"},"Time in SQRL"),(0,a.kt)("p",null,"Time is an important concept in SQRL because it determines how data streams are processed."),(0,a.kt)("p",null,"For stream processing, it is useful to think of time as a timeline that stretches from the past through the present and into the future. The blue line in the picture below visualizes a timeline."),(0,a.kt)("img",{src:"/img/reference/timeline.svg",alt:"SQRL Timeline",width:"100%"}),(0,a.kt)("p",null,"The blue vertical bar on the timeline represents the present. The present moment continuously advances on the timeline."),(0,a.kt)("p",null,"Each stream record processed by the system (shown as grey circles) is associated with a point on the timeline before the present. We call this point in time the ",(0,a.kt)("strong",{parentName:"p"},"timestamp")," of a stream record. The timestamp can be the time when an event occurred, a metric was observed, or a change happened."),(0,a.kt)("h2",{id:"now"},"Now"),(0,a.kt)("p",null,"SQRL uses the term ",(0,a.kt)("strong",{parentName:"p"},"now")," to designate the point in time to which the data pipeline has caught up in processing stream records. Now is the present moment from the perspective of the data pipeline. Now is marked as the orange vertical bar on the timeline."),(0,a.kt)("p",null,"Now is always behind the present. Now monotonically advances like the present, but it may not advance smoothly. If the data pipeline is operating with low latency, now can be just a few milliseconds behind the present. If stream records arrive with delay or the data pipeline is under a lot of load, now can be multiple seconds behind the present. And if the data pipeline crashes and restarts, now may fall minutes or hours behind the present and then catches back up as stream records are processed."),(0,a.kt)("p",null,"Now determines how time-based computations are executed. For example, when aggregating stream tables by time window, now determines when the time window closes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Users.spending := SELECT endOfWeek(p.time) AS week,\n         sum(t.price) AS spend, sum(t.saving) AS saved\n      FROM @.purchases p JOIN p.totals t\n      GROUP BY week ORDER BY week DESC;\n")),(0,a.kt)("p",null,"The nested ",(0,a.kt)("inlineCode",{parentName:"p"},"spending")," table aggregates users' orders by week and produces a stream table that contains one record per user per week with the weekly aggregates. That record is produced at the end of the week. The end of the week is determined by now and not the present time."),(0,a.kt)("p",null,"SQRL provides the function ",(0,a.kt)("inlineCode",{parentName:"p"},"now()")," to refer to now in SQRL scripts."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"Users.spending_last_week := SELECT sum(i.total) AS spend, \n            sum(i.discount) AS saved\n      FROM @.purchases p JOIN p.items i\n      WHERE p.time > now() - INTERVAL 7 DAY;\n")),(0,a.kt)("p",null,"The nested ",(0,a.kt)("inlineCode",{parentName:"p"},"spending_last_week")," table aggregates users' orders for the last week. It produces a state table since the aggregate changes as now advances, i.e. as older orders drop out of the aggregate and newer orders are added."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To summarize, use ",(0,a.kt)("inlineCode",{parentName:"p"},"now()")," for recency comparisons and to refer to the present time in the data pipeline. ")),(0,a.kt)("p",null,"Note, that ",(0,a.kt)("inlineCode",{parentName:"p"},"now()")," is different from the standard SQL function ",(0,a.kt)("inlineCode",{parentName:"p"},"CURRENT_TIMESTAMP")," or database specific current-time functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"now()")," in MySQL. These SQL function return the current system time of the system that is executing the function. ",(0,a.kt)("inlineCode",{parentName:"p"},"now()")," in SQRL returns the time to which the data pipeline has caught up in processing stream records. "),(0,a.kt)("h2",{id:"determining-timestamps"},"Determining Timestamps"),(0,a.kt)("p",null,"The timestamp of a stream table determines how stream records are associated with a point on the timeline and how now advances in the data pipeline."),(0,a.kt)("p",null,"In many cases, the DataSQRL compiler automatically determines the timestamp column based on the query or how the table is used."),(0,a.kt)("p",null,"For stream tables that are imported from a data source, the timestamp can be configured explicitly in the ",(0,a.kt)("a",{parentName:"p",href:"../import#timestamp"},"import statement"),"."),(0,a.kt)("p",null,"Stream tables that are imported from a data source have a hidden column ",(0,a.kt)("inlineCode",{parentName:"p"},"_ingest_time")," which captures the system time when a given record was ingested by the system. In addition, the table has a hidden ",(0,a.kt)("inlineCode",{parentName:"p"},"_source_time")," column if the system from which the record was ingested produces a timestamp for each record."),(0,a.kt)("h2",{id:"time-synchronization"},"Time Synchronization"),(0,a.kt)("p",null,"The DataSQRL compiler synchronizes time between the components and systems of the data pipeline to ensure that all systems agree on now. However, millisecond imprecisions can arise at system boundaries due to communication overhead. "),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Time synchronization between the stream engine and database engine is not yet implemented. Database engines\nuse the system time to represent now which can lead to inaccuracies if now has fallen far behind the present moment or the system time is configured incorrectly.")))}d.isMDXComponent=!0}}]);