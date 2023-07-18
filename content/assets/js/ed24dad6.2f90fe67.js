"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[97148],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},42325:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},i=void 0,l={unversionedId:"administration-zk-bk",id:"version-2.4.0/administration-zk-bk",title:"ZooKeeper and BookKeeper administration",description:"Pulsar relies on two external systems for essential tasks:",source:"@site/versioned_docs/version-2.4.0/administration-zk-bk.md",sourceDirName:".",slug:"/administration-zk-bk",permalink:"/docs/2.4.0/administration-zk-bk",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.0/administration-zk-bk.md",tags:[],version:"2.4.0",frontMatter:{id:"administration-zk-bk",title:"ZooKeeper and BookKeeper administration",sidebar_label:"ZooKeeper and BookKeeper",original_id:"administration-zk-bk"},sidebar:"version-2.4.0/docsSidebar",previous:{title:"Monitor",permalink:"/docs/2.4.0/deploy-monitoring"},next:{title:"Geo-replication",permalink:"/docs/2.4.0/administration-geo"}},s={},p=[{value:"ZooKeeper",id:"zookeeper",level:2},{value:"Deploying local ZooKeeper",id:"deploying-local-zookeeper",level:3},{value:"Deploying configuration store",id:"deploying-configuration-store",level:3},{value:"Single-cluster Pulsar instance",id:"single-cluster-pulsar-instance",level:4},{value:"Multi-cluster Pulsar instance",id:"multi-cluster-pulsar-instance",level:4},{value:"Starting the service",id:"starting-the-service",level:5},{value:"ZooKeeper configuration",id:"zookeeper-configuration",level:3},{value:"Local ZooKeeper",id:"local-zookeeper",level:4},{value:"Configuration Store",id:"configuration-store",level:4},{value:"BookKeeper",id:"bookkeeper",level:2},{value:"Deploying BookKeeper",id:"deploying-bookkeeper",level:3},{value:"Configuring bookies",id:"configuring-bookies",level:3},{value:"Starting up bookies",id:"starting-up-bookies",level:3},{value:"Hardware considerations",id:"hardware-considerations",level:3},{value:"Configuring BookKeeper",id:"configuring-bookkeeper",level:3},{value:"BookKeeper persistence policies",id:"bookkeeper-persistence-policies",level:2},{value:"Set persistence policies",id:"set-persistence-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin",level:4},{value:"Example",id:"example",level:5},{value:"REST API",id:"rest-api",level:4},{value:"Java",id:"java",level:4},{value:"List persistence policies",id:"list-persistence-policies",level:3},{value:"pulsar-admin",id:"pulsar-admin-1",level:4},{value:"Example",id:"example-1",level:5},{value:"REST API",id:"rest-api-1",level:4},{value:"Java",id:"java-1",level:4},{value:"How Pulsar uses ZooKeeper and BookKeeper",id:"how-pulsar-uses-zookeeper-and-bookkeeper",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pulsar relies on two external systems for essential tasks:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/"},"ZooKeeper")," is responsible for a wide variety of configuration- and coordination-related tasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://bookkeeper.apache.org/"},"BookKeeper")," is responsible for ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.4.0/concepts-architecture-overview#persistent-storage"},"persistent storage")," of message data.")),(0,r.kt)("p",null,"ZooKeeper and BookKeeper are both open-source ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache")," projects."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Skip to the ",(0,r.kt)("a",{parentName:"p",href:"#how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper")," section below for a more schematic explanation of the role of these two systems in Pulsar.")),(0,r.kt)("h2",{id:"zookeeper"},"ZooKeeper"),(0,r.kt)("p",null,"Each Pulsar instance relies on two separate ZooKeeper quorums."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-local-zookeeper"},"Local ZooKeeper")," operates at the cluster level and provides cluster-specific configuration management and coordination. Each Pulsar cluster needs to have a dedicated ZooKeeper cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-configuration-store"},"Configuration Store")," operates at the instance level and provides configuration management for the entire system (and thus across clusters). The configuration store quorum can be provided by an independent cluster of machines or by the same machines used by local ZooKeeper.")),(0,r.kt)("h3",{id:"deploying-local-zookeeper"},"Deploying local ZooKeeper"),(0,r.kt)("p",null,"ZooKeeper manages a variety of essential coordination- and configuration-related tasks for Pulsar."),(0,r.kt)("p",null,"Deploying a Pulsar instance requires you to stand up one local ZooKeeper cluster ",(0,r.kt)("em",{parentName:"p"},"per Pulsar cluster"),"."),(0,r.kt)("p",null,"To begin, add all ZooKeeper servers to the quorum configuration specified in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#zookeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"server.N")," line for each node in the cluster to the configuration, where ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," is the number of the ZooKeeper node. Here's an example for a three-node cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nserver.1=zk1.us-west.example.com:2888:3888\nserver.2=zk2.us-west.example.com:2888:3888\nserver.3=zk3.us-west.example.com:2888:3888\n\n")),(0,r.kt)("p",null,"On each host, you need to specify the ID of the node in each node's ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," file, which is in each server's ",(0,r.kt)("inlineCode",{parentName:"p"},"data/zookeeper")," folder by default (this can be changed via the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#zookeeper-dataDir"},(0,r.kt)("inlineCode",{parentName:"a"},"dataDir"))," parameter)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/r3.4.10/zookeeperAdmin.html#sc_zkMulitServerSetup"},"Multi-server setup guide")," in the ZooKeeper documentation for detailed info on ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," and more.")),(0,r.kt)("p",null,"On a ZooKeeper server at ",(0,r.kt)("inlineCode",{parentName:"p"},"zk1.us-west.example.com"),", for example, you could set the ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," value like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ mkdir -p data/zookeeper\n$ echo 1 > data/zookeeper/myid\n\n")),(0,r.kt)("p",null,"On ",(0,r.kt)("inlineCode",{parentName:"p"},"zk2.us-west.example.com")," the command would be ",(0,r.kt)("inlineCode",{parentName:"p"},"echo 2 > data/zookeeper/myid")," and so on."),(0,r.kt)("p",null,"Once each server has been added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper.conf")," configuration and has the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," entry, you can start ZooKeeper on all hosts (in the background, using nohup) with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start zookeeper\n\n")),(0,r.kt)("h3",{id:"deploying-configuration-store"},"Deploying configuration store"),(0,r.kt)("p",null,"The ZooKeeper cluster configured and started up in the section above is a ",(0,r.kt)("em",{parentName:"p"},"local")," ZooKeeper cluster used to manage a single Pulsar cluster. In addition to a local cluster, however, a full Pulsar instance also requires a configuration store for handling some instance-level configuration and coordination tasks."),(0,r.kt)("p",null,"If you're deploying a ",(0,r.kt)("a",{parentName:"p",href:"#single-cluster-pulsar-instance"},"single-cluster")," instance, then you will not need a separate cluster for the configuration store. If, however, you're deploying a ",(0,r.kt)("a",{parentName:"p",href:"#multi-cluster-pulsar-instance"},"multi-cluster")," instance, then you should stand up a separate ZooKeeper cluster for configuration tasks."),(0,r.kt)("h4",{id:"single-cluster-pulsar-instance"},"Single-cluster Pulsar instance"),(0,r.kt)("p",null,"If your Pulsar instance will consist of just one cluster, then you can deploy a configuration store on the same machines as the local ZooKeeper quorum but running on different TCP ports."),(0,r.kt)("p",null,"To deploy a ZooKeeper configuration store in a single-cluster instance, add the same ZooKeeper servers used by the local quorum to the configuration file in ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#configuration-store"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/global_zookeeper.conf"))," using the same method for ",(0,r.kt)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper"),", but make sure to use a different port (2181 is the default for ZooKeeper). Here's an example that uses port 2184 for a three-node ZooKeeper cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\n\n")),(0,r.kt)("p",null,"As before, create the ",(0,r.kt)("inlineCode",{parentName:"p"},"myid")," files for each server on ",(0,r.kt)("inlineCode",{parentName:"p"},"data/global-zookeeper/myid"),"."),(0,r.kt)("h4",{id:"multi-cluster-pulsar-instance"},"Multi-cluster Pulsar instance"),(0,r.kt)("p",null,"When deploying a global Pulsar instance, with clusters distributed across different geographical regions, the configuration store serves as a highly available and strongly consistent metadata store that can tolerate failures and partitions spanning whole regions."),(0,r.kt)("p",null,"The key here is to make sure the ZK quorum members are spread across at least 3\nregions and that other regions are running as observers."),(0,r.kt)("p",null,"Again, given the very low expected load on the configuration store servers, we can\nshare the same hosts used for the local ZooKeeper quorum."),(0,r.kt)("p",null,"For example, let's assume a Pulsar instance with the following clusters ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"us-central"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"eu-central"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ap-south"),". Also let's assume, each cluster\nwill have its own local ZK servers named such as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nzk[1-3].${CLUSTER}.example.com\n\n")),(0,r.kt)("p",null,"In this scenario we want to pick the quorum participants from few clusters and\nlet all the others be ZK observers. For example, to form a 7 servers quorum, we\ncan pick 3 servers from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-west"),", 2 from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-central")," and 2 from ",(0,r.kt)("inlineCode",{parentName:"p"},"us-east"),"."),(0,r.kt)("p",null,"This will guarantee that writes to configuration store will be possible even if one\nof these regions is unreachable."),(0,r.kt)("p",null,"The ZK configuration in all the servers will look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\nclientPort=2184\nserver.1=zk1.us-west.example.com:2185:2186\nserver.2=zk2.us-west.example.com:2185:2186\nserver.3=zk3.us-west.example.com:2185:2186\nserver.4=zk1.us-central.example.com:2185:2186\nserver.5=zk2.us-central.example.com:2185:2186\nserver.6=zk3.us-central.example.com:2185:2186:observer\nserver.7=zk1.us-east.example.com:2185:2186\nserver.8=zk2.us-east.example.com:2185:2186\nserver.9=zk3.us-east.example.com:2185:2186:observer\nserver.10=zk1.eu-central.example.com:2185:2186:observer\nserver.11=zk2.eu-central.example.com:2185:2186:observer\nserver.12=zk3.eu-central.example.com:2185:2186:observer\nserver.13=zk1.ap-south.example.com:2185:2186:observer\nserver.14=zk2.ap-south.example.com:2185:2186:observer\nserver.15=zk3.ap-south.example.com:2185:2186:observer\n\n")),(0,r.kt)("p",null,"Additionally, ZK observers will need to have:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\npeerType=observer\n\n")),(0,r.kt)("h5",{id:"starting-the-service"},"Starting the service"),(0,r.kt)("p",null,"Once your configuration store configuration is in place, you can start up the service using ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar-daemon start configuration-store\n\n")),(0,r.kt)("h3",{id:"zookeeper-configuration"},"ZooKeeper configuration"),(0,r.kt)("p",null,"In Pulsar, ZooKeeper configuration is handled by two separate configuration files found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"conf")," directory of your Pulsar installation: ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/zookeeper.conf")," for ",(0,r.kt)("a",{parentName:"p",href:"#local-zookeeper"},"local ZooKeeper")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/global-zookeeper.conf")," for ",(0,r.kt)("a",{parentName:"p",href:"#configuration-store"},"configuration store"),"."),(0,r.kt)("h4",{id:"local-zookeeper"},"Local ZooKeeper"),(0,r.kt)("p",null,"Configuration for local ZooKeeper is handled by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#zookeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/zookeeper.conf"))," file. The table below shows the available parameters:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tickTime"),(0,r.kt)("td",{parentName:"tr",align:null},"The tick is the basic unit of time in ZooKeeper, measured in milliseconds and used to regulate things like heartbeats and timeouts. tickTime is the length of a single tick."),(0,r.kt)("td",{parentName:"tr",align:null},"2000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"initLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that the leader ZooKeeper server allows follower ZooKeeper servers to successfully connect and sync. The tick time is set in milliseconds using the tickTime parameter."),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncLimit"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum time, in ticks, that a follower ZooKeeper server is allowed to sync with other ZooKeeper servers. The tick time is set in milliseconds using the tickTime parameter."),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dataDir"),(0,r.kt)("td",{parentName:"tr",align:null},"The location where ZooKeeper will store in-memory database snapshots as well as the transaction log of updates to the database."),(0,r.kt)("td",{parentName:"tr",align:null},"data/zookeeper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientPort"),(0,r.kt)("td",{parentName:"tr",align:null},"The port on which the ZooKeeper server will listen for connections."),(0,r.kt)("td",{parentName:"tr",align:null},"2181")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autopurge.snapRetainCount"),(0,r.kt)("td",{parentName:"tr",align:null},"In ZooKeeper, auto purge determines how many recent snapshots of the database stored in dataDir to retain within the time interval specified by autopurge.purgeInterval (while deleting the rest)."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autopurge.purgeInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"The time interval, in hours, by which the ZooKeeper database purge task is triggered. Setting to a non-zero number will enable auto purge; setting to 0 will disable. Read this guide before enabling auto purge."),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxClientCnxns"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of client connections. Increase this if you need to handle more ZooKeeper clients."),(0,r.kt)("td",{parentName:"tr",align:null},"60")))),(0,r.kt)("h4",{id:"configuration-store"},"Configuration Store"),(0,r.kt)("p",null,"Configuration for configuration store is handled by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#configuration-store"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/global-zookeeper.conf"))," file. The table below shows the available parameters:"),(0,r.kt)("h2",{id:"bookkeeper"},"BookKeeper"),(0,r.kt)("p",null,"BookKeeper is responsible for all durable message storage in Pulsar. BookKeeper is a distributed ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Write-ahead_logging"},"write-ahead log")," WAL system that guarantees read consistency of independent message logs called ledgers. Individual BookKeeper servers are also called ",(0,r.kt)("em",{parentName:"p"},"bookies"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For a guide to managing message persistence, retention, and expiry in Pulsar, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/cookbooks-retention-expiry"},"this cookbook"),".")),(0,r.kt)("h3",{id:"deploying-bookkeeper"},"Deploying BookKeeper"),(0,r.kt)("p",null,"BookKeeper provides ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/concepts-architecture-overview#persistent-storage"},"persistent message storage")," for Pulsar."),(0,r.kt)("p",null,"Each Pulsar broker needs to have its own cluster of bookies. The BookKeeper cluster shares a local ZooKeeper quorum with the Pulsar cluster."),(0,r.kt)("h3",{id:"configuring-bookies"},"Configuring bookies"),(0,r.kt)("p",null,"BookKeeper bookies can be configured using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#bookkeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," configuration file. The most important aspect of configuring each bookie is ensuring that the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#bookkeeper-zkServers"},(0,r.kt)("inlineCode",{parentName:"a"},"zkServers"))," parameter is set to the connection string for the Pulsar cluster's local ZooKeeper."),(0,r.kt)("h3",{id:"starting-up-bookies"},"Starting up bookies"),(0,r.kt)("p",null,"You can start up a bookie in two ways: in the foreground or as a background daemon."),(0,r.kt)("p",null,"To start up a bookie in the foreground, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#bookkeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"bookkeeper"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/bookkeeper bookie\n\n")),(0,r.kt)("p",null,"To start a bookie in the background, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#pulsar-daemon"},(0,r.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-daemon start bookie\n\n")),(0,r.kt)("p",null,"You can verify that the bookie is working properly using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bookiesanity")," command for the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-cli-tools#bookkeeper-shell"},"BookKeeper shell"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/bookkeeper shell bookiesanity\n\n")),(0,r.kt)("p",null,"This will create a new ledger on the local bookie, write a few entries, read them back and finally delete the ledger."),(0,r.kt)("h3",{id:"hardware-considerations"},"Hardware considerations"),(0,r.kt)("p",null,"Bookie hosts are responsible for storing message data on disk. In order for bookies to provide optimal performance, it's essential that they have a suitable hardware configuration. There are two key dimensions to bookie hardware capacity:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Disk I/O capacity read/write"),(0,r.kt)("li",{parentName:"ul"},"Storage capacity")),(0,r.kt)("p",null,"Message entries written to bookies are always synced to disk before returning an acknowledgement to the Pulsar broker. To ensure low write latency, BookKeeper is\ndesigned to use multiple devices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"journal")," to ensure durability. For sequential writes, it's critical to have fast ",(0,r.kt)("a",{parentName:"li",href:"https://linux.die.net/man/2/fsync"},"fsync")," operations on bookie hosts. Typically, small and fast ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Solid-state_drive"},"solid-state drives")," (SSDs) should suffice, or ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Hard_disk_drive"},"hard disk drives")," (HDDs) with a ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/RAID"},"RAID"),"s controller and a battery-backed write cache. Both solutions can reach fsync latency of ~0.4 ms."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"ledger storage device")," is where data is stored until all consumers have acknowledged the message. Writes will happen in the background, so write I/O is not a big concern. Reads will happen sequentially most of the time and the backlog is drained only in case of consumer drain. To store large amounts of data, a typical configuration will involve multiple HDDs with a RAID controller.")),(0,r.kt)("h3",{id:"configuring-bookkeeper"},"Configuring BookKeeper"),(0,r.kt)("p",null,"Configurable parameters for BookKeeper bookies can be found in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-configuration#bookkeeper"},(0,r.kt)("inlineCode",{parentName:"a"},"conf/bookkeeper.conf"))," file."),(0,r.kt)("p",null,"Minimum configuration changes required  in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/bookkeeper.conf")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Change to point to journal disk mount point\njournalDirectory=data/bookkeeper/journal\n\n# Point to ledger storage disk mount point\nledgerDirectories=data/bookkeeper/ledgers\n\n# Point to local ZK quorum\nzkServers=zk1.example.com:2181,zk2.example.com:2181,zk3.example.com:2181\n\n#It is recommended to set this parameter. Otherwise, BookKeeper can't start normally in certain environments (for example, Huawei Cloud).\nadvertisedAddress=\n\n")),(0,r.kt)("p",null,"To change the zookeeper root path used by Bookkeeper, use zkLedgersRootPath=/MY-PREFIX/ledgers instead of zkServers=localhost:2181/MY-PREFIX"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Consult the official ",(0,r.kt)("a",{parentName:"p",href:"http://bookkeeper.apache.org"},"BookKeeper docs")," for more information about BookKeeper.")),(0,r.kt)("h2",{id:"bookkeeper-persistence-policies"},"BookKeeper persistence policies"),(0,r.kt)("p",null,"In Pulsar, you can set ",(0,r.kt)("em",{parentName:"p"},"persistence policies"),", at the namespace level, that determine how BookKeeper handles persistent storage of messages. Policies determine four things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of acks (guaranteed copies) to wait for each ledger entry"),(0,r.kt)("li",{parentName:"ul"},"The number of bookies to use for a topic"),(0,r.kt)("li",{parentName:"ul"},"How many writes to make for each ledger entry"),(0,r.kt)("li",{parentName:"ul"},"The throttling rate for mark-delete operations")),(0,r.kt)("h3",{id:"set-persistence-policies"},"Set persistence policies"),(0,r.kt)("p",null,"You can set persistence policies for BookKeeper at the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-terminology#namespace"},"namespace")," level."),(0,r.kt)("h4",{id:"pulsar-admin"},"pulsar-admin"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-ulsar-admin#namespaces-set-persistence"},(0,r.kt)("inlineCode",{parentName:"a"},"set-persistence"))," subcommand and specify a namespace as well as any policies that you want to apply. The available flags are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Flag"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-a"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ack-quorum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of acks (guaranteed copies) to wait on for each entry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-e"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-ensemble")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.4.0/reference-terminology#bookie"},"bookies")," to use for topics in the namespace"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-w"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--bookkeeper-write-quorum")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How many writes to make for each entry"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"-r"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"--ml-mark-delete-max-rate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Throttling rate for mark-delete operations (0 means no throttle)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0")))),(0,r.kt)("h5",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ pulsar-admin namespaces set-persistence my-tenant/my-ns \\\n  --bookkeeper-ack-quorum 3 \\\n  --bookkeeper-ensemble 2\n\n")),(0,r.kt)("h4",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/setPersistence"},"POST /admin/v2/namespaces/:tenant/:namespace/persistence/setPersistence")),(0,r.kt)("h4",{id:"java"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nint bkEnsemble = 2;\nint bkQuorum = 3;\nint bkAckQuorum = 2;\ndouble markDeleteRate = 0.7;\nPersistencePolicies policies =\n  new PersistencePolicies(ensemble, quorum, ackQuorum, markDeleteRate);\nadmin.namespaces().setPersistence(namespace, policies);\n\n")),(0,r.kt)("h3",{id:"list-persistence-policies"},"List persistence policies"),(0,r.kt)("p",null,"You can see which persistence policy currently applies to a namespace."),(0,r.kt)("h4",{id:"pulsar-admin-1"},"pulsar-admin"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.4.0/reference-ulsar-admin#namespaces-get-persistence"},(0,r.kt)("inlineCode",{parentName:"a"},"get-persistence"))," subcommand and specify the namespace."),(0,r.kt)("h5",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'\n$ pulsar-admin namespaces get-persistence my-tenant/my-ns\n{\n  "bookkeeperEnsemble": 1,\n  "bookkeeperWriteQuorum": 1,\n  "bookkeeperAckQuorum", 1,\n  "managedLedgerMaxMarkDeleteRate": 0\n}\n\n')),(0,r.kt)("h4",{id:"rest-api-1"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pulsar.apache.org/admin-rest-api?version=2.4.0&apiversion=v2#operation/getPersistence"},"GET /admin/v2/namespaces/:tenant/:namespace/persistence/getPersistence")),(0,r.kt)("h4",{id:"java-1"},"Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"\nPersistencePolicies policies = admin.namespaces().getPersistence(namespace);\n\n")),(0,r.kt)("h2",{id:"how-pulsar-uses-zookeeper-and-bookkeeper"},"How Pulsar uses ZooKeeper and BookKeeper"),(0,r.kt)("p",null,"This diagram illustrates the role of ZooKeeper and BookKeeper in a Pulsar cluster:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ZooKeeper and BookKeeper",src:a(83258).Z,width:"1181",height:"781"})),(0,r.kt)("p",null,"Each Pulsar cluster consists of one or more message brokers. Each broker relies on an ensemble of bookies."))}k.isMDXComponent=!0},83258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pulsar-system-architecture-6890df6b0c59a065a56492659ba87933.png"}}]);