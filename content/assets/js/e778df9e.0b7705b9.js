"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[2898],{15680:(e,a,o)=>{o.d(a,{xA:()=>c,yg:()=>d});var n=o(96540);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,d=u["".concat(s,".").concat(m)]||u[m]||g[m]||t;return o?n.createElement(d,i(i({ref:a},c),{},{components:o})):n.createElement(d,i({ref:a},c))}));function d(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=o.length,i=new Array(t);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<t;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},61759:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var n=o(58168),r=(o(96540),o(15680));const t={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},i=void 0,l={unversionedId:"administration-zk-bk",id:"version-2.7.4/administration-zk-bk",title:"ZooKeeper and BookKeeper administration",description:"Pulsar relies on two external systems for essential tasks:",source:"@site/versioned_docs/version-2.7.4/administration-zk-bk.md",sourceDirName:".",slug:"/administration-zk-bk",permalink:"/docs/2.7.4/administration-zk-bk",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/administration-zk-bk.md",tags:[],version:"2.7.4",frontMatter:{id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Monitor",permalink:"/docs/2.7.4/deploy-monitoring"},next:{title:"Geo-replication",permalink:"/docs/2.7.4/administration-geo"}},s={},p=[{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Deploy local ZooKeeper",id:"deploy-local-zookeeper",level:3},{value:"Deploy configuration store",id:"deploy-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Start the service",id:"start-the-service",level:5},{value:"ZooKeeper configuration",id:"zookeeper-configuration",level:3},{value:"Local ZooKeeper",id:"local-zookeeper",level:4},{value:"Configuration Store",id:"configuration-store",level:4},{value:"BookKeeper",id:"bookkeeper",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Configure BookKeeper",id:"configure-bookkeeper",level:3},{value:"Deploy BookKeeper",id:"deploy-bookkeeper",level:3},{value:"Start bookies manually",id:"start-bookies-manually",level:3},{value:"Decommission bookies cleanly",id:"decommission-bookies-cleanly",level:3},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",level:2},{value:"Set persistence policies",id:"set-persistence-policies",level:3},{value:"Pulsar-admin",id:"pulsar-admin",level:4},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"List persistence policies",id:"list-persistence-policies",level:3},{value:"Pulsar-admin",id:"pulsar-admin-1",level:4},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"How Pulsar uses ZooKeeper and BookKeeper",id:"how-pulsar-uses-zookeeper-and-bookkeeper",level:2}],c={toc:p},u="wrapper";function g(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar relies on two external systems for essential tasks:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper")," is responsible for a wide variety of configuration-related and coordination-related tasks."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"BookKeeper")," is responsible for ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.7.4/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data.")),(0,r.yg)("p",null,"ZooKeeper and BookKeeper are both open-source ",(0,r.yg)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," projects."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Skip to the ",(0,r.yg)("a",{parentName:"p",href:"#how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper")," section below for a more schematic explanation of the role of these two systems in Pulsar.")),(0,r.yg)("h2",{id:"zookeeper"},"ZooKeeper"),(0,r.yg)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#deploy-local-zookeeper"},"Local ZooKeeper")," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#deploy-configuration-store"},"Configuration Store")," operates at the instance level and provides configuration management for the entire system (and thus across clusters). An independent cluster of machines or the same machines that local ZooKeeper uses can provide the configuration store quorum.")),(0,r.yg)("h3",{id:"deploy-local-zookeeper"},"Deploy local ZooKeeper"),(0,r.yg)("p",null,"ZooKeeper manages a variety of essential coordination-related and configuration-related tasks for Pulsar."),(0,r.yg)("p",null,"To deploy a Pulsar instance, you need to stand up one local ZooKeeper cluster ",(0,r.yg)("em",{parentName:"p"},"per Pulsar cluster"),"."),(0,r.yg)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#zookeeper"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,r.yg)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,r.yg)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. The following is an example for a three-node cluster:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n")),(0,r.yg)("p",null,"On each host, you need to specify the node ID in ",(0,r.yg)("inlineCode",{parentName:"p"},"myid")," file of each node, which is in ",(0,r.yg)("inlineCode",{parentName:"p"},"data/zookeeper")," folder of each server by default (you can change the file location via the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#zookeeper-dataDir"},(0,r.yg)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"See the ",(0,r.yg)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation for detailed information on ",(0,r.yg)("inlineCode",{parentName:"p"},"myid")," and more.")),(0,r.yg)("p",null,"On a ZooKeeper server at ",(0,r.yg)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you can set the ",(0,r.yg)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ mkdir -p data/zookeeper\n$ echo 1 > data/zookeeper/myid\n\n")),(0,r.yg)("p",null,"On ",(0,r.yg)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command is ",(0,r.yg)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,r.yg)("p",null,"Once you add each server to the ",(0,r.yg)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and each server has the appropriate ",(0,r.yg)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#pulsar-daemon"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start zookeeper\n\n")),(0,r.yg)("h3",{id:"deploy-configuration-store"},"Deploy configuration store"),(0,r.yg)("p",null,"The ZooKeeper cluster configured and started up in the section above is a ",(0,r.yg)("em",{parentName:"p"},"local")," ZooKeeper cluster that you can use to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,r.yg)("p",null,"If you deploy a ",(0,r.yg)("a",{parentName:"p",href:"#single-cluster-pulsar-instance"},"single-cluster")," instance, you do not need a separate cluster for the configuration store. If, however, you deploy a ",(0,r.yg)("a",{parentName:"p",href:"#multi-cluster-pulsar-instance"},"multi-cluster")," instance, you need to stand up a separate ZooKeeper cluster for configuration tasks."),(0,r.yg)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,r.yg)("p",null,"If your Pulsar instance consists of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but run on different TCP ports."),(0,r.yg)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers that the local quorum uses to the configuration file in ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#configuration-store"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,r.yg)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). The following is an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n\n")),(0,r.yg)("p",null,"As before, create the ",(0,r.yg)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,r.yg)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,r.yg)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,r.yg)("p",null,"When you deploy a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,r.yg)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3 regions and that other regions run as observers."),(0,r.yg)("p",null,"Again, given the very low expected load on the configuration store servers, you can share the same hosts used for the local ZooKeeper quorum."),(0,r.yg)("p",null,"For example, you can assume a Pulsar instance with the following clusters ",(0,r.yg)("inlineCode",{parentName:"p"},"us-west"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"us-east"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"us-central"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ap-south"),". Also you can assume, each cluster has its own local ZK servers named such as"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\nzk[1-3].${CLUSTER}.example.com\n\n")),(0,r.yg)("p",null,"In this scenario you want to pick the quorum participants from few clusters and let all the others be ZK observers. For example, to form a 7 servers quorum, you can pick 3 servers from ",(0,r.yg)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,r.yg)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,r.yg)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.yg)("p",null,"This guarantees that writes to configuration store is possible even if one of these regions is unreachable."),(0,r.yg)("p",null,"The ZK configuration in all the servers looks like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n\n")),(0,r.yg)("p",null,"Additionally, ZK observers need to have:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\npeerType=observer\n\n")),(0,r.yg)("h5",{id:"start-the-service"},"Start the service"),(0,r.yg)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#pulsar-daemon"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start configuration-store\n\n")),(0,r.yg)("h3",{id:"zookeeper-configuration"},"ZooKeeper configuration"),(0,r.yg)("p",null,"In Pulsar, ZooKeeper configuration is handled by two separate configuration files in the ",(0,r.yg)("inlineCode",{parentName:"p"},"conf")," directory of your Pulsar installation: ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/zookeeper.conf")," for ",(0,r.yg)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/global-zookeeper.conf")," for ",(0,r.yg)("a",{parentName:"p",href:"#configuration-store"},"configuration store"),"."),(0,r.yg)("h4",{id:"local-zookeeper"},"Local ZooKeeper"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#zookeeper"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file handles the configuration for local ZooKeeper. The table below shows the available parameters:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tickTime"),(0,r.yg)("td",{parentName:"tr",align:null},"The tick is the basic unit of time in ZooKeeper, measured in milliseconds and used to regulate things like heartbeats and timeouts. tickTime is the length of a single tick."),(0,r.yg)("td",{parentName:"tr",align:null},"2000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"initLimit"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that the leader ZooKeeper server allows follower ZooKeeper servers to successfully connect and sync. The tick time is set in milliseconds using the tickTime parameter."),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"syncLimit"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that a follower ZooKeeper server is allowed to sync with other ZooKeeper servers. The tick time is set in milliseconds using the tickTime parameter."),(0,r.yg)("td",{parentName:"tr",align:null},"5")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"dataDir"),(0,r.yg)("td",{parentName:"tr",align:null},"The location where ZooKeeper stores in-memory database snapshots as well as the transaction log of updates to the database."),(0,r.yg)("td",{parentName:"tr",align:null},"data/zookeeper")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"clientPort"),(0,r.yg)("td",{parentName:"tr",align:null},"The port on which the ZooKeeper server listens for connections."),(0,r.yg)("td",{parentName:"tr",align:null},"2181")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"autopurge.snapRetainCount"),(0,r.yg)("td",{parentName:"tr",align:null},"In ZooKeeper, auto purge determines how many recent snapshots of the database stored in dataDir to retain within the time interval specified by autopurge.purgeInterval (while deleting the rest)."),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"autopurge.purgeInterval"),(0,r.yg)("td",{parentName:"tr",align:null},"The time interval, in hours, which triggers the ZooKeeper database purge task. Setting to a non-zero number enables auto purge; setting to 0 disables. Read this guide before enabling auto purge."),(0,r.yg)("td",{parentName:"tr",align:null},"1")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxClientCnxns"),(0,r.yg)("td",{parentName:"tr",align:null},"The maximum number of client connections. Increase this if you need to handle more ZooKeeper clients."),(0,r.yg)("td",{parentName:"tr",align:null},"60")))),(0,r.yg)("h4",{id:"configuration-store"},"Configuration Store"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#configuration-store"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/global-zookeeper.conf"))," file handles the configuration for configuration store. The table below shows the available parameters:"),(0,r.yg)("h2",{id:"bookkeeper"},"BookKeeper"),(0,r.yg)("p",null,"BookKeeper stores all durable messages in Pulsar. BookKeeper is a distributed ",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," WAL system that guarantees read consistency of independent message logs calls ledgers. Individual BookKeeper servers are also called ",(0,r.yg)("em",{parentName:"p"},"bookies"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"To manage message persistence, retention, and expiry in Pulsar, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/cookbooks-retention-expiry"},"cookbook"),".")),(0,r.yg)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,r.yg)("p",null,"Bookie hosts store message data on disk. To provide optimal performance, ensure that the bookies have a suitable hardware configuration. The following are two key dimensions of bookie hardware capacity:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,r.yg)("li",{parentName:"ul"},"Storage capacity")),(0,r.yg)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgement to the Pulsar broker by default. To ensure low write latency, BookKeeper is designed to use multiple devices:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, it is critical to have fast ",(0,r.yg)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts. Typically, small and fast ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,r.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID")," controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,r.yg)("li",{parentName:"ul"},"A ",(0,r.yg)("strong",{parentName:"li"},"ledger storage device")," stores data. Writes happen in the background, so write I/O is not a big concern. Reads happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration involves multiple HDDs with a RAID controller.")),(0,r.yg)("h3",{id:"configure-bookkeeper"},"Configure BookKeeper"),(0,r.yg)("p",null,"You can configure BookKeeper bookies using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#bookkeeper"},(0,r.yg)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. When you configure each bookie, ensure that the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-configuration#bookkeeper-zkServers"},(0,r.yg)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for local ZooKeeper of the Pulsar cluster."),(0,r.yg)("p",null,"The minimum configuration changes required in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," are as follows:"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"journalDirectory")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ledgerDirectories")," carefully. It is difficilt to change them later.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"\n# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n\n")),(0,r.yg)("p",null,"To change the ZooKeeper root path that BookKeeper uses, use ",(0,r.yg)("inlineCode",{parentName:"p"},"zkLedgersRootPath=/MY-PREFIX/ledgers")," instead of ",(0,r.yg)("inlineCode",{parentName:"p"},"zkServers=localhost:2181/MY-PREFIX"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For more information about BookKeeper, refer to the official ",(0,r.yg)("a",{parentName:"p",href:"http://bookkeeper.apache.org"},"BookKeeper docs"),".")),(0,r.yg)("h3",{id:"deploy-bookkeeper"},"Deploy BookKeeper"),(0,r.yg)("p",null,"BookKeeper provides ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar. Each Pulsar broker has its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,r.yg)("h3",{id:"start-bookies-manually"},"Start bookies manually"),(0,r.yg)("p",null,"You can start a bookie in the foreground or as a background daemon."),(0,r.yg)("p",null,"To start a bookie in the foreground, use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#bookkeeper"},(0,r.yg)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/bookkeeper bookie\n\n")),(0,r.yg)("p",null,"To start a bookie in the background, use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#pulsar-daemon"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-daemon start bookie\n\n")),(0,r.yg)("p",null,"You can verify whether the bookie works properly with the ",(0,r.yg)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-cli-tools#bookkeeper-shell"},"BookKeeper shell"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/bookkeeper shell bookiesanity\n\n")),(0,r.yg)("p",null,"When you use this command, you create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."),(0,r.yg)("h3",{id:"decommission-bookies-cleanly"},"Decommission bookies cleanly"),(0,r.yg)("p",null,"Before you decommission a bookie, you need to check your environment and meet the following requirements."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure the state of your cluster supports decommissioning the target bookie. Check if ",(0,r.yg)("inlineCode",{parentName:"p"},"EnsembleSize >= Write Quorum >= Ack Quorum")," is ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," with one less bookie.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure the target bookie is listed after using the ",(0,r.yg)("inlineCode",{parentName:"p"},"listbookies")," command.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Ensure that no other process is ongoing (upgrade etc)."))),(0,r.yg)("p",null,"And then you can decommission bookies safely. To decommission bookies, complete the following steps."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Log in to the bookie node, check if there are underreplicated ledgers. The decommission command force to replicate the underreplicated ledgers.\n",(0,r.yg)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listunderreplicated"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Stop the bookie by killing the bookie process. Make sure that no liveness/readiness probes setup for the bookies to spin them back up if you deploy it in a Kubernetes environment.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the decommission command."),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If you have logged in to the node to be decommissioned, you do not need to provide ",(0,r.yg)("inlineCode",{parentName:"li"},"-bookieid"),"."),(0,r.yg)("li",{parentName:"ul"},"If you are running the decommission command for the target bookie node from another bookie node, you should mention the target bookie ID in the arguments for ",(0,r.yg)("inlineCode",{parentName:"li"},"-bookieid"),(0,r.yg)("inlineCode",{parentName:"li"},"$ bin/bookkeeper shell decommissionbookie"),"\nor\n",(0,r.yg)("inlineCode",{parentName:"li"},"$ bin/bookkeeper shell decommissionbookie -bookieid <target bookieid>")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Validate that no ledgers are on the decommissioned bookie.\n",(0,r.yg)("inlineCode",{parentName:"p"},"$ bin/bookkeeper shell listledgers -bookieid <target bookieid>")))),(0,r.yg)("p",null,"You can run the following command to check if the bookie you have decommissioned is listed in the bookies list:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n./bookkeeper shell listbookies -rw -h\n./bookkeeper shell listbookies -ro -h\n\n")),(0,r.yg)("h2",{id:"bookkeeper-persistence-policies"},"BookKeeper persistence policies"),(0,r.yg)("p",null,"In Pulsar, you can set ",(0,r.yg)("em",{parentName:"p"},"persistence policies")," at the namespace level, which determines how BookKeeper handles persistent storage of messages. Policies determine four things:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The number of acks (guaranteed copies) to wait for each ledger entry."),(0,r.yg)("li",{parentName:"ul"},"The number of bookies to use for a topic."),(0,r.yg)("li",{parentName:"ul"},"The number of writes to make for each ledger entry."),(0,r.yg)("li",{parentName:"ul"},"The throttling rate for mark-delete operations.")),(0,r.yg)("h3",{id:"set-persistence-policies"},"Set persistence policies"),(0,r.yg)("p",null,"You can set persistence policies for BookKeeper at the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-terminology#namespace"},"namespace")," level."),(0,r.yg)("h4",{id:"pulsar-admin"},"Pulsar-admin"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-pulsar-admin#namespaces-set-persistence"},(0,r.yg)("inlineCode",{parentName:"a"},"set-persistence"))," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"-a"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"--bookkeeper-ack-quorum")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The number of acks (guaranteed copies) to wait on for each entry"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"-e"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"--bookkeeper-ensemble")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The number of ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.7.4/reference-terminology#bookie"},"bookies")," to use for topics in the namespace"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"-w"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"--bookkeeper-write-quorum")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The number of writes to make for each entry"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"-r"),", ",(0,r.yg)("inlineCode",{parentName:"td"},"--ml-mark-delete-max-rate")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Throttling rate for mark-delete operations (0 means no throttle)"),(0,r.yg)("td",{parentName:"tr",align:"left"},"0")))),(0,r.yg)("p",null,"The following is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n  --bookkeeper-ack-quorum 3 \\\n  --bookkeeper-ensemble 2\n\n")),(0,r.yg)("h4",{id:"rest-api"},"REST API"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/setPersistence"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/setPersistence")),(0,r.yg)("h4",{id:"java"},"Java"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nint bkEnsemble = 2;\nint bkQuorum = 3;\nint bkAckQuorum = 2;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(ensemble, quorum, ackQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n\n")),(0,r.yg)("h3",{id:"list-persistence-policies"},"List persistence policies"),(0,r.yg)("p",null,"You can see which persistence policy currently applies to a namespace."),(0,r.yg)("h4",{id:"pulsar-admin-1"},"Pulsar-admin"),(0,r.yg)("p",null,"Use the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.7.4/reference-pulsar-admin#namespaces-get-persistence"},(0,r.yg)("inlineCode",{parentName:"a"},"get-persistence"))," subcommand and specify the namespace."),(0,r.yg)("p",null,"The following is an example:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n')),(0,r.yg)("h4",{id:"rest-api-1"},"REST API"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.7.4&apiversion=v2#operation/getPersistence"},"GET /admin/v2/namespaces/:tenant/:namespace/persistence/getPersistence")),(0,r.yg)("h4",{id:"java-1"},"Java"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"\nPersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n\n")),(0,r.yg)("h2",{id:"how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper"),(0,r.yg)("p",null,"This diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"ZooKeeper and BookKeeper",src:o(42702).A,width:"1181",height:"781"})),(0,r.yg)("p",null,"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."))}g.isMDXComponent=!0},42702:(e,a,o)=>{o.d(a,{A:()=>n});const n=o.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"}}]);