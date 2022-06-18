"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3085],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,v=d["".concat(o,".").concat(f)]||d[f]||m[f]||l;return t?r.createElement(v,i(i({ref:n},s),{},{components:t})):r.createElement(v,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2503:function(e,n,t){t.d(n,{Z:function(){return d}});var r=t(7462),a=t(3366),l=t(7294),i=t(6010),c=t(5999),o=t(6668),u="anchorWithStickyNavbar_LWe7",s="anchorWithHideOnScrollNavbar_WYt5",m=["as","id"];function d(e){var n=e.as,t=e.id,d=(0,a.Z)(e,m),f=(0,o.L)().navbar.hideOnScroll;return"h1"!==n&&t?l.createElement(n,(0,r.Z)({},d,{className:(0,i.Z)("anchor",f?s:u),id:t}),d.children,l.createElement("a",{className:"hash-link",href:"#"+t,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(n,(0,r.Z)({},d,{id:void 0}))}},76:function(e,n,t){t.d(n,{Z:function(){return H}});var r=t(7294),a=t(3905),l=t(7462),i=t(3366),c=t(5742),o=["mdxType","originalType"];var u=t(6975);var s=t(9960);var m=t(6010),d=t(2389),f=t(6043),v="details_lb9f",p="isBrowser_bmU9",g="collapsibleContent_i85q",h=["summary","children"];function E(e){return!!e&&("SUMMARY"===e.tagName||E(e.parentElement))}function y(e,n){return!!e&&(e===n||y(e.parentElement,n))}function b(e){var n=e.summary,t=e.children,a=(0,i.Z)(e,h),c=(0,d.Z)(),o=(0,r.useRef)(null),u=(0,f.u)({initialState:!a.open}),s=u.collapsed,b=u.setCollapsed,N=(0,r.useState)(a.open),Z=N[0],L=N[1];return r.createElement("details",(0,l.Z)({},a,{ref:o,open:Z,"data-collapsed":s,className:(0,m.Z)(v,c&&p,a.className),onMouseDown:function(e){E(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;E(n)&&y(n,o.current)&&(e.preventDefault(),s?(b(!1),L(!0)):b(!0))}}),null!=n?n:r.createElement("summary",null,"Details"),r.createElement(f.z,{lazy:!1,collapsed:s,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){b(e),L(!e)}},r.createElement("div",{className:g},t)))}var N="details_b_Ee";function Z(e){var n=Object.assign({},e);return r.createElement(b,(0,l.Z)({},n,{className:(0,m.Z)("alert alert--info",N,n.className)}))}var L=t(2503);function O(e){return r.createElement(L.Z,e)}var x="containsTaskList_mC6p";var C="img_ev3q";var k={head:function(e){var n=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var n;if(null!=(n=e.props)&&n.mdxType&&e.props.originalType){var t=e.props,a=(t.mdxType,t.originalType,(0,i.Z)(t,o));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(c.Z,e,n)},code:function(e){var n=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((function(e){return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&n.includes(e.props.mdxType)}))?r.createElement("code",e):r.createElement(u.Z,e)},a:function(e){return r.createElement(s.Z,e)},pre:function(e){var n;return r.createElement(u.Z,(0,r.isValidElement)(e.children)&&"code"===(null==(n=e.children.props)?void 0:n.originalType)?e.children.props:Object.assign({},e))},details:function(e){var n=r.Children.toArray(e.children),t=n.find((function(e){var n;return r.isValidElement(e)&&"summary"===(null==(n=e.props)?void 0:n.mdxType)})),a=r.createElement(r.Fragment,null,n.filter((function(e){return e!==t})));return r.createElement(Z,(0,l.Z)({},e,{summary:t}),a)},ul:function(e){return r.createElement("ul",(0,l.Z)({},e,{className:(n=e.className,(0,m.Z)(n,(null==n?void 0:n.includes("contains-task-list"))&&x))}));var n},img:function(e){return r.createElement("img",(0,l.Z)({loading:"lazy"},e,{className:(n=e.className,(0,m.Z)(n,C))}));var n},h1:function(e){return r.createElement(O,(0,l.Z)({as:"h1"},e))},h2:function(e){return r.createElement(O,(0,l.Z)({as:"h2"},e))},h3:function(e){return r.createElement(O,(0,l.Z)({as:"h3"},e))},h4:function(e){return r.createElement(O,(0,l.Z)({as:"h4"},e))},h5:function(e){return r.createElement(O,(0,l.Z)({as:"h5"},e))},h6:function(e){return r.createElement(O,(0,l.Z)({as:"h6"},e))}};function H(e){var n=e.children;return r.createElement(a.Zo,{components:k},n)}},4247:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7294),a=t(6010),l=t(1944),i=t(5281),c=t(5257),o=t(76),u=t(9407),s="mdxPageWrapper_j9I6";function m(e){var n=e.content,t=n.metadata,m=t.title,d=t.description,f=t.frontMatter,v=f.wrapperClassName,p=f.hide_table_of_contents;return r.createElement(l.FG,{className:(0,a.Z)(null!=v?v:i.k.wrapper.mdxPages,i.k.page.mdxPage)},r.createElement(l.d,{title:m,description:d}),r.createElement(c.Z,null,r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,a.Z)("row",s)},r.createElement("div",{className:(0,a.Z)("col",!p&&"col--8")},r.createElement(o.Z,null,r.createElement(n,null))),!p&&n.toc&&r.createElement("div",{className:"col col--2"},r.createElement(u.Z,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level}))))))}},9407:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(7462),a=t(3366),l=t(7294),i=t(6010),c=t(3743),o="tableOfContents_bqdL",u=["className"];function s(e){var n=e.className,t=(0,a.Z)(e,u);return l.createElement("div",{className:(0,i.Z)(o,"thin-scrollbar",n)},l.createElement(c.Z,(0,r.Z)({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(7462),a=t(3366),l=t(7294),i=["parentIndex"];function c(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var r=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),t[e.level]=n}));var r=[];return n.forEach((function(e){var t=e.parentIndex,l=(0,a.Z)(e,i);t>=0?n[t].children.push(l):r.push(l)})),r}function o(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}var u=t(6668);function s(e){var n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function m(e,n){var t,r,a=n.anchorTopOffset,l=e.find((function(e){return s(e).top>=a}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(l))?l:null!=(r=e[e.indexOf(l)-1])?r:null:null!=(t=e[e.length-1])?t:null}function d(){var e=(0,l.useRef)(0),n=(0,u.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function f(e){var n=(0,l.useRef)(void 0),t=d();(0,l.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function c(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],a=n;a<=t;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),o=m(c,{anchorTopOffset:t.current}),u=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,t])}function v(e){var n=e.toc,t=e.className,r=e.linkClassName,a=e.isChild;return n.length?l.createElement("ul",{className:a?void 0:t},n.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(v,{isChild:!0,toc:e.children,className:t,linkClassName:r}))}))):null}var p=l.memo(v),g=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var n=e.toc,t=e.className,i=void 0===t?"table-of-contents table-of-contents__left-border":t,s=e.linkClassName,m=void 0===s?"table-of-contents__link":s,d=e.linkActiveClassName,v=void 0===d?void 0:d,h=e.minHeadingLevel,E=e.maxHeadingLevel,y=(0,a.Z)(e,g),b=(0,u.L)(),N=null!=h?h:b.tableOfContents.minHeadingLevel,Z=null!=E?E:b.tableOfContents.maxHeadingLevel,L=function(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,l.useMemo)((function(){return o({toc:c(n),minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}({toc:n,minHeadingLevel:N,maxHeadingLevel:Z});return f((0,l.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:N,maxHeadingLevel:Z}}),[m,v,N,Z])),l.createElement(p,(0,r.Z)({toc:L,className:i,linkClassName:m},y))}}}]);