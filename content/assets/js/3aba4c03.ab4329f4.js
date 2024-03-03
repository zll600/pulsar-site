"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2372],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return n?t.createElement(g,o(o({ref:a},u),{},{components:n})):t.createElement(g,o({ref:a},u))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38382:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const l={id:"pulsar-cs-0.11.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"},o=void 0,i={unversionedId:"versioned/pulsar-cs-0.11.0",id:"versioned/pulsar-cs-0.11.0",title:"Pulsar DotPulsar",description:"Added",source:"@site/release-notes/versioned/pulsar-cs-0.11.0.md",sourceDirName:"versioned",slug:"/versioned/pulsar-cs-0.11.0",permalink:"/release-notes/versioned/pulsar-cs-0.11.0",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/versioned/pulsar-cs-0.11.0.md",tags:[],version:"current",frontMatter:{id:"pulsar-cs-0.11.0",title:"Pulsar DotPulsar",sidebar_label:"Pulsar DotPulsar"}},s={},c=[{value:"Added",id:"added",level:2},{value:"Changed",id:"changed",level:2},{value:"Fixed",id:"fixed",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...n}=e;return(0,r.yg)(d,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"added"},"Added"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The Consumer and Reader now share the IReceive interface for receiving a single message: ValueTask\\<Message",">"," Receive(CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"The Consumer and Reader now share the ISeek interface for seeking on message-id and publish time"),(0,r.yg)("li",{parentName:"ul"},"The Consumer and Reader now share the IGetLastMessageId interface for getting the last message-id on a topic"),(0,r.yg)("li",{parentName:"ul"},"The Consumer, Reader, and Producer now share the IState interface adding 'OnStateChangeFrom' and 'OnStateChangeTo'"),(0,r.yg)("li",{parentName:"ul"},"The PulsarClient, Consumer, Reader, and Producer now have the read-only property 'ServiceUrl'"),(0,r.yg)("li",{parentName:"ul"},"The Consumer now have the read-only property 'SubscriptionName'"),(0,r.yg)("li",{parentName:"ul"},"All message compression types are now supported (listed below). Please read this ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-dotpulsar/wiki/Compression"},"compression how-to"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"LZ4"),(0,r.yg)("li",{parentName:"ul"},"SNAPPY"),(0,r.yg)("li",{parentName:"ul"},"ZLIB"),(0,r.yg)("li",{parentName:"ul"},"ZSTD")))),(0,r.yg)("h2",{id:"changed"},"Changed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'MessageId.ToString() now returns a string matching that of other clients: "{LedgerId}:{EntryId}:{Partition}:{BatchIndex}"'),(0,r.yg)("li",{parentName:"ul"},"A lot of methods were made into extension methods and now require a using statement for 'DotPulsar.Extensions'",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Producer.StateChangedTo(ProducerState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Producer.StateChangedFrom(ProducerState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Producer.Send(byte[] data, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Producer.Send(ReadOnlyMemory\\<byte",">"," data, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Producer.Send(MessageMetadata metadata, byte[] data, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Producer.Send(MessageMetadata metadata, ReadOnlyMemory\\<byte",">"," data, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.Acknowledge(Message message, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.AcknowledgeCumulative(Message message, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.StateChangedTo(ConsumerState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.StateChangedFrom(ConsumerState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.Messages(CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.Seek(DateTime publishTime, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Consumer.Seek(DateTimeOffset publishTime, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Reader.StateChangedTo(ReaderState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Reader.StateChangedFrom(ReaderState state, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Reader.Messages(CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Reader.Seek(DateTime publishTime, CancellationToken cancellationToken)"),(0,r.yg)("li",{parentName:"ul"},"Reader.Seek(DateTimeOffset publishTime, CancellationToken cancellationToken)")))),(0,r.yg)("h2",{id:"fixed"},"Fixed"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Before the Consumer and Reader would throw an ArgumentOutOfRangeException if they encountered a compressed message. Now they will throw a CompressionException if the compression type is not supported"),(0,r.yg)("li",{parentName:"ul"},"DotPulsarEventSource (performance counters) was only enabled for .NET Standard 2.1. Now it's enabled for all target frameworks except .NET Standard 2.0")))}p.isMDXComponent=!0}}]);