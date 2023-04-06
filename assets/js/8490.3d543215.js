"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=r,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?a.createElement(f,l(l({ref:t},m),{},{components:n})):a.createElement(f,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4881:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7294),r=n(5999),i=n(5281),l=n(7462),o=n(6010);const c={iconEdit:"iconEdit_Z9Sw"};function s(e){let{className:t,...n}=e;return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c.iconEdit,t),"aria-hidden":"true"},n),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:i.k.common.editThisPage},a.createElement(s,null),a.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},2503:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),i=n(6010),l=n(5999),o=n(6668),c=n(9960);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};function m(e){let{as:t,id:n,...m}=e;const{navbar:{hideOnScroll:d}}=(0,o.L)();if("h1"===t||!n)return r.createElement(t,(0,a.Z)({},m,{id:void 0}));const u=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof m.children?m.children:n});return r.createElement(t,(0,a.Z)({},m,{className:(0,i.Z)("anchor",d?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar,m.className),id:n}),m.children,r.createElement(c.Z,{className:"hash-link",to:`#${n}`,"aria-label":u,title:u},"\u200b"))}},5203:(e,t,n)=>{n.d(t,{Z:()=>P});var a=n(7294),r=n(3905),i=n(7462),l=n(5742);var o=n(814);var c=n(9960);var s=n(6010),m=n(2389),d=n(6043);const u={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function p(e){return!!e&&("SUMMARY"===e.tagName||p(e.parentElement))}function f(e,t){return!!e&&(e===t||f(e.parentElement,t))}function h(e){let{summary:t,children:n,...r}=e;const l=(0,m.Z)(),o=(0,a.useRef)(null),{collapsed:c,setCollapsed:h}=(0,d.u)({initialState:!r.open}),[g,v]=(0,a.useState)(r.open),E=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,i.Z)({},r,{ref:o,open:g,"data-collapsed":c,className:(0,s.Z)(u.details,l&&u.isBrowser,r.className),onMouseDown:e=>{p(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;p(t)&&f(t,o.current)&&(e.preventDefault(),c?(h(!1),v(!0)):h(!0))}}),E,a.createElement(d.z,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{h(e),v(!e)}},a.createElement("div",{className:u.collapsibleContent},n)))}const g={details:"details_b_Ee"},v="alert alert--info";function E(e){let{...t}=e;return a.createElement(h,(0,i.Z)({},t,{className:(0,s.Z)(v,g.details,t.className)}))}var b=n(2503);function y(e){return a.createElement(b.Z,e)}const Z={containsTaskList:"containsTaskList_mC6p"};const N={img:"img_ev3q"};var C=n(5281),T=n(5999);const k="admonition_LlT9",w="admonitionHeading_tbUL",O="admonitionIcon_kALy",_="admonitionContent_S0QG";const x={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(T.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(T.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(T.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(T.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},z={secondary:"note",important:"info",success:"tip",warning:"danger"};function j(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:r}}(e.children);return{...e,title:e.title??t,children:n}}const S={head:function(e){const t=a.Children.map(e.children,(e=>a.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return a.createElement(e.props.originalType,r)}return e}(e):e));return a.createElement(l.Z,e,t)},code:function(e){const t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return a.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,a.isValidElement)(e)&&t.includes(e.props?.mdxType)))?a.createElement("code",e):a.createElement(o.Z,e)},a:function(e){return a.createElement(c.Z,e)},pre:function(e){return a.createElement(o.Z,(0,a.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=a.Children.toArray(e.children),n=t.find((e=>a.isValidElement(e)&&"summary"===e.props?.mdxType)),r=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return a.createElement(E,(0,i.Z)({},e,{summary:n}),r)},ul:function(e){return a.createElement("ul",(0,i.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&Z.containsTaskList))}));var t},img:function(e){return a.createElement("img",(0,i.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,N.img))}));var t},h1:e=>a.createElement(y,(0,i.Z)({as:"h1"},e)),h2:e=>a.createElement(y,(0,i.Z)({as:"h2"},e)),h3:e=>a.createElement(y,(0,i.Z)({as:"h3"},e)),h4:e=>a.createElement(y,(0,i.Z)({as:"h4"},e)),h5:e=>a.createElement(y,(0,i.Z)({as:"h5"},e)),h6:e=>a.createElement(y,(0,i.Z)({as:"h6"},e)),admonition:function(e){const{children:t,type:n,title:r,icon:i}=j(e),l=function(e){const t=z[e]??e,n=x[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),x.info)}(n),o=r??l.label,{iconComponent:c}=l,m=i??a.createElement(c,null);return a.createElement("div",{className:(0,s.Z)(C.k.common.admonition,C.k.common.admonitionType(e.type),"alert",`alert--${l.infimaClassName}`,k)},a.createElement("div",{className:w},a.createElement("span",{className:O},m),o),a.createElement("div",{className:_},t))},mermaid:n(1875).Z};function P(e){let{children:t}=e;return a.createElement(r.Zo,{components:S},t)}},2244:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010),i=n(9960);function l(e){const{permalink:t,title:n,subLabel:l,isNext:o}=e;return a.createElement(i.Z,{className:(0,r.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&a.createElement("div",{className:"pagination-nav__sublabel"},l),a.createElement("div",{className:"pagination-nav__label"},n))}},3008:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010),i=n(9960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function o(e){let{permalink:t,label:n,count:o}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)(l.tag,o?l.tagWithCount:l.tagRegular)},n,o&&a.createElement("span",null,o))}},1526:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(6010),i=n(5999),l=n(3008);const o={tags:"tags_jXut",tag:"tag_QGVx"};function c(e){let{tags:t}=e;return a.createElement(a.Fragment,null,a.createElement("b",null,a.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),a.createElement("ul",{className:(0,r.Z)(o.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:n}=e;return a.createElement("li",{key:n,className:o.tag},a.createElement(l.Z,{label:t,permalink:n}))}))))}}}]);