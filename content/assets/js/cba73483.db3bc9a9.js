"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26906],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>m});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var g=n.createContext({}),u=function(e){var t=n.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(g.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,m=p["".concat(g,".").concat(y)]||p[y]||s[y]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},1807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(58168),a=(r(96540),r(15680));const i={id:"io-twitter-source",title:"Twitter Firehose source connector",sidebar_label:"Twitter Firehose source connector",original_id:"io-twitter-source"},l=void 0,o={unversionedId:"io-twitter-source",id:"version-2.7.2/io-twitter-source",title:"Twitter Firehose source connector",description:"The Twitter Firehose source connector receives tweets from Twitter Firehose and",source:"@site/versioned_docs/version-2.7.2/io-twitter-source.md",sourceDirName:".",slug:"/io-twitter-source",permalink:"/docs/2.7.2/io-twitter-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.2/io-twitter-source.md",tags:[],version:"2.7.2",frontMatter:{id:"io-twitter-source",title:"Twitter Firehose source connector",sidebar_label:"Twitter Firehose source connector",original_id:"io-twitter-source"}},g={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3}],c={toc:u},p="wrapper";function s(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Twitter Firehose source connector receives tweets from Twitter Firehose and\nwrites the tweets to Pulsar topics."),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"The configuration of the Twitter Firehose source connector has the following properties."),(0,a.yg)("h3",{id:"property"},"Property"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Type"),(0,a.yg)("th",{parentName:"tr",align:null},"Required"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"consumerKey")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter OAuth consumer key.",(0,a.yg)("br",null),(0,a.yg)("br",null),"For more information, see ",(0,a.yg)("a",{parentName:"td",href:"https://developer.twitter.com/en/docs/basics/authentication/guides/access-tokens"},"Access tokens"),".")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"consumerSecret")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter OAuth consumer secret.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"token")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter OAuth token.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"tokenSecret")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"true"),(0,a.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter OAuth secret.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"guestimateTweetTime")),(0,a.yg)("td",{parentName:"tr",align:null},"Boolean"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Most firehose events have null createdAt time.",(0,a.yg)("br",null),(0,a.yg)("br",null),"If ",(0,a.yg)("inlineCode",{parentName:"td"},"guestimateTweetTime")," set to true, the connector estimates the createdTime of each firehose event to be current time.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"clientName")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"openconnector-twitter-source"),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter firehose client name.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"clientHosts")),(0,a.yg)("td",{parentName:"tr",align:null},"String"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"Constants.STREAM_HOST"),(0,a.yg)("td",{parentName:"tr",align:null},"The twitter firehose hosts to which client connects.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"clientBufferSize")),(0,a.yg)("td",{parentName:"tr",align:null},"int"),(0,a.yg)("td",{parentName:"tr",align:null},"false"),(0,a.yg)("td",{parentName:"tr",align:null},"50000"),(0,a.yg)("td",{parentName:"tr",align:null},"The buffer size for buffering tweets fetched from twitter firehose.")))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"For more information about OAuth credentials, see ",(0,a.yg)("a",{parentName:"p",href:"https://developer.twitter.com/en.html"},"Twitter developers portal"),".")))}s.isMDXComponent=!0}}]);