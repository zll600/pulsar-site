"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[50620],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>b});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function o(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?o(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,b=d["".concat(l,".").concat(u)]||d[u]||g[u]||o;return r?t.createElement(b,s(s({ref:a},p),{},{components:r})):t.createElement(b,s({ref:a},p))}));function b(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6843:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const o={id:"concepts-broker-load-balancing-overview",title:"Overview",sidebar_label:"Overview"},s=void 0,i={unversionedId:"concepts-broker-load-balancing-overview",id:"version-3.2.x/concepts-broker-load-balancing-overview",title:"Overview",description:"Challenges of load balancing in distributed streaming systems",source:"@site/versioned_docs/version-3.2.x/concepts-broker-load-balancing-overview.md",sourceDirName:".",slug:"/concepts-broker-load-balancing-overview",permalink:"/docs/3.2.x/concepts-broker-load-balancing-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/concepts-broker-load-balancing-overview.md",tags:[],version:"3.2.x",frontMatter:{id:"concepts-broker-load-balancing-overview",title:"Overview",sidebar_label:"Overview"},sidebar:"docsSidebar",previous:{title:"Clients",permalink:"/docs/3.2.x/concepts-clients"},next:{title:"Use cases",permalink:"/docs/3.2.x/concepts-broker-load-balancing-use-cases"}},l={},c=[{value:"Challenges of load balancing in distributed streaming systems",id:"challenges-of-load-balancing-in-distributed-streaming-systems",level:2},{value:"Broker load balancing in Pulsar",id:"broker-load-balancing-in-pulsar",level:2},{value:"Related topics",id:"related-topics",level:2}],p={toc:c},d="wrapper";function g(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"challenges-of-load-balancing-in-distributed-streaming-systems"},"Challenges of load balancing in distributed streaming systems"),(0,n.yg)("p",null,"Like other distributed systems, load balancing is important in messaging and streaming systems. Without it, load imbalance can cause hot-spot brokers, resulting in performance degradation, cluster unavailability, and wasted broker resources."),(0,n.yg)("p",null,"Due to the unpredictable topic volume and physical distance among distributed brokers, it is not easy to dynamically distribute message loads among brokers. It requires the system to continuously monitor and route message loads based on changing conditions without compromising system performance. For example:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"When topics receive high traffic, exhausting CPU or memory resources on particular brokers, the cluster offloads the overloaded brokers and redistributes the load to other brokers.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"When brokers experience low traffic, become idle, or are added or removed, the cluster rebalances the load to avoid wasting resources.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"When topics are redistributed to other brokers, the cluster ensures the topics are instantaneously available to clients. The topics continue to guarantee the system performance, such as persistence, ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-messaging#ordering-guarantee"},"ordering"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-messaging#message-deduplication"},"deduplication"),", ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-messaging#subscription-types"},"subscription type"),", etc."))),(0,n.yg)("h2",{id:"broker-load-balancing-in-pulsar"},"Broker load balancing in Pulsar"),(0,n.yg)("p",null,"Because Pulsar uses a ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-architecture-overview"},"segment-centric architecture")," and separates the message serving and storage layer, it is designed to benefit load balancing. "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"At the persistence layer (",(0,n.yg)("a",{parentName:"p",href:"https://bookkeeper.apache.org/"},"BookKeeper"),"), message segments in topics are balanced across all the bookies in the cluster. When an individual bookie runs out of storage capacity, the rest segments are loaded into the available bookies. ")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"At the serving layer (",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-architecture-overview#brokers"},"broker"),"), topic rearrangement (balance) is seamless. Brokers do not need to copy messages from one broker to another when rebalancing topics among brokers. Instead, the current owner broker temporarily closes the topic and client sessions and transfers the ownership to the selected broker. Then, the selected broker takes ownership of the topic and opens the topic sessions to the clients."))),(0,n.yg)("p",null,"Pulsar uses automatic broker load balancing to monitor the brokers' load internally and then dynamically balances topic sessions according to the load across all available brokers as evenly, dynamically, and flexibly as possible. Consequently, it improves performance, availability, and usage of resources."),(0,n.yg)("h2",{id:"related-topics"},"Related topics"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To discover different usage scenarios, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-use-cases"},"Broker load balancing | Use cases"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To explore functionalities, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-features"},"Broker load balancing | Features"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To understand advantages, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-benefits"},"Broker load balancing | Benefits"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To learn essential fundamentals, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-concepts"},"Broker load balancing | Concepts"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To review various versions of broker load balancers, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-types"},"Broker load balancing | Types"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To get up quickly, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-quick-start"},"Broker load balancing | Quick start"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"To migrate one broker load balancer type to another, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/3.2.x/concepts-broker-load-balancing-migration"},"Broker load balancing | Migration"),"."))))}g.isMDXComponent=!0}}]);