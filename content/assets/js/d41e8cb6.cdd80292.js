"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[37138],{15680:(e,n,i)=>{i.d(n,{xA:()=>m,yg:()=>y});var r=i(96540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,a=function(e,n){if(null==e)return{};var i,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},m=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var i=e.components,a=e.mdxType,t=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=d(i),c=a,y=u["".concat(p,".").concat(c)]||u[c]||g[c]||t;return i?r.createElement(y,l(l({ref:n},m),{},{components:i})):r.createElement(y,l({ref:n},m))}));function y(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var t=i.length,l=new Array(t);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<t;d++)l[d]=i[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},71607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(58168),a=(i(96540),i(15680));const t={id:"pulsar-client-go-0.1.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"},l=void 0,o={unversionedId:"versioned/pulsar-client-go-0.1.0",id:"versioned/pulsar-client-go-0.1.0",title:"Pulsar Client Go",description:"Client",source:"@site/release-notes/versioned/pulsar-client-go-0.1.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-client-go-0.1.0",permalink:"/release-notes/versioned/pulsar-client-go-0.1.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-client-go-0.1.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-client-go-0.1.0",title:"Pulsar Client Go",sidebar_label:"Pulsar Client Go"}},p={},d=[{value:"Client",id:"client",level:3},{value:"Producer",id:"producer",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Reader",id:"reader",level:3}],m={toc:d},u="wrapper";function g(e){let{components:n,...i}=e;return(0,a.yg)(u,(0,r.A)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h3",{id:"client"},"Client"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"TLS")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Authentication")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Proxy")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Hostname verification")," logic")),(0,a.yg)("h3",{id:"producer"},"Producer"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Send()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"SendAsync()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"LastSequenceID()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Flush()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Close()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Topic()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Name()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Producer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"MessageRouter")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"batch")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"compression message")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"HashingScheme")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"User defined properties producer")," logic")),(0,a.yg)("h3",{id:"consumer"},"Consumer"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Subscription()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Unsubscribe()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Receive()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Ack()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"AckID()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Nack()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"NackID()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Seek()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"SeekByTime()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Close()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Consumer")," interface"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Dead Letter Queue")," consumer policy"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Topics Pattern")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Topics")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"topic consumer regx")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"multi topics consumer")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Exclusive"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Failover"),", ",(0,a.yg)("inlineCode",{parentName:"li"},"Shared")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"KeyShared")," subscribe type logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Latest")," and ",(0,a.yg)("inlineCode",{parentName:"li"},"Earliest")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"ReadCompacted")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"ReplicateSubscriptionState")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"User defined properties consumer")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"Delayed Delivery Messages")," logic")),(0,a.yg)("h3",{id:"reader"},"Reader"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Topic()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Reader")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Next()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Reader")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"HasNext()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Reader")," interface"),(0,a.yg)("li",{parentName:"ul"},"Add ",(0,a.yg)("inlineCode",{parentName:"li"},"Close()")," method in ",(0,a.yg)("inlineCode",{parentName:"li"},"Reader")," interface"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"read compacted")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"start messageID")," logic"),(0,a.yg)("li",{parentName:"ul"},"Support ",(0,a.yg)("inlineCode",{parentName:"li"},"User defined properties reader")," logic")))}g.isMDXComponent=!0}}]);