"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[87398],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),g=r,m=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89996:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(58168),r=(n(96540),n(15680));const o={id:"transactions",title:"Transactions",sidebar_label:"Overview"},s=void 0,i={unversionedId:"transactions",id:"version-3.2.x/transactions",title:"Transactions",description:"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit.",source:"@site/versioned_docs/version-3.2.x/concepts-transactions.md",sourceDirName:".",slug:"/transactions",permalink:"/docs/3.2.x/transactions",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/concepts-transactions.md",tags:[],version:"3.2.x",frontMatter:{id:"transactions",title:"Transactions",sidebar_label:"Overview"}},c={},l=[{value:"Transaction coordinator and transaction log",id:"transaction-coordinator-and-transaction-log",level:2},{value:"Transaction ID",id:"transaction-id",level:2},{value:"Transaction buffer",id:"transaction-buffer",level:2},{value:"Pending acknowledge state",id:"pending-acknowledge-state",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Transactional semantics enable event streaming applications to consume, process, and produce messages in one atomic operation. In Pulsar, a producer or consumer can work with messages across multiple topics and partitions and ensure those messages are processed as a single unit."),(0,r.yg)("p",null,"The following concepts help you understand Pulsar transactions."),(0,r.yg)("h2",{id:"transaction-coordinator-and-transaction-log"},"Transaction coordinator and transaction log"),(0,r.yg)("p",null,"The transaction coordinator maintains the topics and subscriptions that interact in a transaction. When a transaction is committed, the transaction coordinator interacts with the topic owner broker to complete the transaction."),(0,r.yg)("p",null,"The transaction coordinator maintains the entire life cycle of transactions and prevents a transaction from incorrect status."),(0,r.yg)("p",null,"The transaction coordinator handles transaction timeout and ensures that the transaction is aborted after a transaction timeout."),(0,r.yg)("p",null,"All the transaction metadata is persisted in the transaction log. The transaction log is backed by a Pulsar topic. After the transaction coordinator crashes, it can restore the transaction metadata from the transaction log."),(0,r.yg)("h2",{id:"transaction-id"},"Transaction ID"),(0,r.yg)("p",null,"The transaction ID (TxnID) identifies a unique transaction in Pulsar. The transaction ID is 128-bit. The highest 16 bits are reserved for the ID of the transaction coordinator, and the remaining bits are used for monotonically increasing numbers in each transaction coordinator. It is easy to locate the transaction crash with the TxnID."),(0,r.yg)("h2",{id:"transaction-buffer"},"Transaction buffer"),(0,r.yg)("p",null,"Messages produced within a transaction are stored in the transaction buffer. The messages in transaction buffer are not materialized (visible) to consumers until the transactions are committed. The messages in the transaction buffer are discarded when the transactions are aborted."),(0,r.yg)("h2",{id:"pending-acknowledge-state"},"Pending acknowledge state"),(0,r.yg)("p",null,"Message acknowledges within a transaction are maintained by the pending acknowledge state before the transaction completes. If a message is in the pending acknowledge state, the message cannot be acknowledged by other transactions until the message is removed from the pending acknowledge state."),(0,r.yg)("p",null,"The pending acknowledge state is persisted in the pending acknowledge log. The pending acknowledge log is backed by a Pulsar topic. A new broker can restore the state from the pending acknowledge log to ensure the acknowledgment is not lost."))}u.isMDXComponent=!0}}]);