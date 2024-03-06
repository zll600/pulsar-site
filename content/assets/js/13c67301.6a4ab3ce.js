"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8819],{15680:(e,r,o)=>{o.d(r,{xA:()=>u,yg:()=>h});var n=o(96540);function t(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,n,t=function(e,r){if(null==e)return{};var o,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||(t[o]=e[o]);return t}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),p=function(e){var r=n.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):i(i({},r),e)),o},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var o=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(o),d=t,h=c["".concat(l,".").concat(d)]||c[d]||y[d]||a;return o?n.createElement(h,i(i({ref:r},u),{},{components:o})):n.createElement(h,i({ref:r},u))}));function h(e,r){var o=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[c]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},52929:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(58168),t=(o(96540),o(15680));const a={id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},i=void 0,s={unversionedId:"administration-proxy",id:"version-2.7.3/administration-proxy",title:"Pulsar proxy",description:"Pulsar proxy is an optional gateway. Pulsar proxy is used when direction connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on Kubernetes or an analogous platform, you can run Pulsar proxy.",source:"@site/versioned_docs/version-2.7.3/administration-proxy.md",sourceDirName:".",slug:"/administration-proxy",permalink:"/docs/2.7.3/administration-proxy",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/administration-proxy.md",tags:[],version:"2.7.3",frontMatter:{id:"administration-proxy",title:"Pulsar proxy",sidebar_label:"Pulsar proxy",original_id:"administration-proxy"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Load balance",permalink:"/docs/2.7.3/administration-load-balance"},next:{title:"Upgrade",permalink:"/docs/2.7.3/administration-upgrade"}},l={},p=[{value:"Configure the proxy",id:"configure-the-proxy",level:2},{value:"Use service discovery",id:"use-service-discovery",level:3},{value:"Use broker URLs",id:"use-broker-urls",level:3},{value:"Start the proxy",id:"start-the-proxy",level:2},{value:"Stop the proxy",id:"stop-the-proxy",level:2},{value:"Proxy frontends",id:"proxy-frontends",level:2},{value:"Use Pulsar clients with the proxy",id:"use-pulsar-clients-with-the-proxy",level:2}],u={toc:p},c="wrapper";function y(e){let{components:r,...o}=e;return(0,t.yg)(c,(0,n.A)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"Pulsar proxy is an optional gateway. Pulsar proxy is used when direction connections between clients and Pulsar brokers are either infeasible or undesirable. For example, when you run Pulsar in a cloud environment or on ",(0,t.yg)("a",{parentName:"p",href:"https://kubernetes.io"},"Kubernetes")," or an analogous platform, you can run Pulsar proxy."),(0,t.yg)("h2",{id:"configure-the-proxy"},"Configure the proxy"),(0,t.yg)("p",null,"Before using the proxy, you need to configure it with the brokers addresses in the cluster. You can configure the proxy to connect directly to service discovery, or specify a broker URL in the configuration."),(0,t.yg)("h3",{id:"use-service-discovery"},"Use service discovery"),(0,t.yg)("p",null,"Pulsar uses ",(0,t.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org"},"ZooKeeper")," for service discovery. To connect the proxy to ZooKeeper, specify the following in ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/proxy.conf"),"."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"\nzookeeperServers=zk-0,zk-1,zk-2\nconfigurationStoreServers=zk-0:2184,zk-remote:2184\n\n")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"To use service discovery, you need to open the network ACLs, so the proxy can connects to the ZooKeeper nodes through the ZooKeeper client port (port ",(0,t.yg)("inlineCode",{parentName:"p"},"2181"),") and the configuration store client port (port ",(0,t.yg)("inlineCode",{parentName:"p"},"2184"),").")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"However, it is not secure to use service discovery. Because if the network ACL is open, when someone compromises a proxy, they have full access to ZooKeeper.")),(0,t.yg)("h3",{id:"use-broker-urls"},"Use broker URLs"),(0,t.yg)("p",null,"It is more secure to specify a URL to connect to the brokers."),(0,t.yg)("p",null,"Proxy authorization requires access to ZooKeeper, so if you use these broker URLs to connect to the brokers, you need to disable authorization at the Proxy level. Brokers still authorize requests after the proxy forwards them."),(0,t.yg)("p",null,"You can configure the broker URLs in ",(0,t.yg)("inlineCode",{parentName:"p"},"conf/proxy.conf")," as follows."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURL=pulsar://brokers.example.com:6650\nbrokerWebServiceURL=http://brokers.example.com:8080\nfunctionWorkerWebServiceURL=http://function-workers.example.com:8080\n\n")),(0,t.yg)("p",null,"If you use TLS, configure the broker URLs in the following way:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-properties"},"\nbrokerServiceURLTLS=pulsar+ssl://brokers.example.com:6651\nbrokerWebServiceURLTLS=https://brokers.example.com:8443\nfunctionWorkerWebServiceURL=https://function-workers.example.com:8443\n\n")),(0,t.yg)("p",null,"The hostname in the URLs provided should be a DNS entry which points to multiple brokers or a virtual IP address, which is backed by multiple broker IP addresses, so that the proxy does not lose connectivity to Pulsar cluster if a single broker becomes unavailable."),(0,t.yg)("p",null,"The ports to connect to the brokers (6650 and 8080, or in the case of TLS, 6651 and 8443) should be open in the network ACLs."),(0,t.yg)("p",null,"Note that if you do not use functions, you do not need to configure ",(0,t.yg)("inlineCode",{parentName:"p"},"functionWorkerWebServiceURL"),"."),(0,t.yg)("h2",{id:"start-the-proxy"},"Start the proxy"),(0,t.yg)("p",null,"To start the proxy:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ cd /path/to/pulsar/directory\n$ bin/pulsar proxy\n\n")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"You can run multiple instances of the Pulsar proxy in a cluster.")),(0,t.yg)("h2",{id:"stop-the-proxy"},"Stop the proxy"),(0,t.yg)("p",null,"Pulsar proxy runs in the foreground by default. To stop the proxy, simply stop the process in which the proxy is running."),(0,t.yg)("h2",{id:"proxy-frontends"},"Proxy frontends"),(0,t.yg)("p",null,"You can run Pulsar proxy behind some kind of load-distributing frontend, such as an ",(0,t.yg)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts"},"HAProxy")," load balancer."),(0,t.yg)("h2",{id:"use-pulsar-clients-with-the-proxy"},"Use Pulsar clients with the proxy"),(0,t.yg)("p",null,"Once your Pulsar proxy is up and running, preferably behind a load-distributing ",(0,t.yg)("a",{parentName:"p",href:"#proxy-frontends"},"frontend"),", clients can connect to the proxy via whichever address that the frontend uses. If the address is the DNS address ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar.cluster.default"),", for example, the connection URL for clients is ",(0,t.yg)("inlineCode",{parentName:"p"},"pulsar://pulsar.cluster.default:6650"),"."),(0,t.yg)("p",null,"For more information on Proxy configuration, refer to ",(0,t.yg)("a",{parentName:"p",href:"/docs/2.7.3/reference-configuration#pulsar-proxy"},"Pulsar proxy"),"."))}y.isMDXComponent=!0}}]);