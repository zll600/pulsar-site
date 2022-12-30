"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41145:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment"},l=void 0,s={unversionedId:"sql-deployment-configurations",id:"version-2.3.0/sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",description:"You can configure Presto Pulsar connector and deploy a cluster with the following instruction.",source:"@site/versioned_docs/version-2.3.0/sql-deployment-configurations.md",sourceDirName:".",slug:"/sql-deployment-configurations",permalink:"/docs/2.3.0/sql-deployment-configurations",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.3.0/sql-deployment-configurations.md",tags:[],version:"2.3.0",frontMatter:{id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment"},sidebar:"version-2.3.0/docsSidebar",previous:{title:"Query data",permalink:"/docs/2.3.0/sql-getting-started"},next:{title:"Amazon Web Services",permalink:"/docs/2.3.0/deploy-aws"}},i={},u=[{value:"Configure Presto Pulsar Connector",id:"configure-presto-pulsar-connector",level:2},{value:"Query data from existing Presto clusters",id:"query-data-from-existing-presto-clusters",level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",level:2},{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",level:3}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can configure Presto Pulsar connector and deploy a cluster with the following instruction."),(0,o.kt)("h2",{id:"configure-presto-pulsar-connector"},"Configure Presto Pulsar Connector"),(0,o.kt)("p",null,"You can configure Presto Pulsar Connector in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," properties file. The configuration for the connector and the default values are as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'\n# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the url of Pulsar broker service\npulsar.web-service-url=http://localhost:8080\n\n# URI of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n# max size of one batch message (default value is 5MB)\npulsar.max-message-size=5242880\n\n# number of split used when querying data from pulsar\npulsar.target-num-splits=2\n\n# size of queue to buffer entry read from pulsar\npulsar.max-split-entry-queue-size=1000\n\n# size of queue to buffer message extract from entries\npulsar.max-split-message-queue-size=10000\n\n# status provider to record connector metrics\npulsar.stats-provider=org.apache.bookkeeper.stats.NullStatsProvider\n\n# config in map format for stats provider e.g. {"key1":"val1","key2":"val2"}\npulsar.stats-provider-configs={}\n\n# whether to rewrite Pulsar\'s default topic delimiter \'/\'\npulsar.namespace-delimiter-rewrite-enable=false\n\n# delimiter used to rewrite Pulsar\'s default delimiter \'/\', use if default is causing incompatibility with other system like Superset\npulsar.rewrite-namespace-delimiter="/"\n\n# maximum number of thread pool size for ledger offloader.\npulsar.managed-ledger-offload-max-threads=2\n\n# driver used to offload or read cold data to or from long-term storage\npulsar.managed-ledger-offload-driver=null\n\n# directory to load offloaders nar file.\npulsar.offloaders-directory="./offloaders"\n\n# properties and configurations related to specific offloader implementation as map e.g. {"key1":"val1","key2":"val2"}\npulsar.offloader-properties={}\n\n# authentication plugin used to authenticate to Pulsar cluster\npulsar.auth-plugin=null\n\n# authentication parameter used to authenticate to the Pulsar cluster as a string e.g. "key1:val1,key2:val2".\npulsar.auth-params=null\n\n# whether the Pulsar client accept an untrusted TLS certificate from broker\npulsar.tls-allow-insecure-connection=null\n\n# whether to allow hostname verification when a client connects to broker over TLS.\npulsar.tls-hostname-verification-enable=null\n\n# path for the trusted TLS certificate file of Pulsar broker\npulsar.tls-trust-cert-file-path=null\n\n# set the threshold for BookKeeper request throttle, default is disabled\npulsar.bookkeeper-throttle-value=0\n\n# set the number of IO thread\npulsar.bookkeeper-num-io-threads=2 * Runtime.getRuntime().availableProcessors()\n\n# set the number of worker thread\npulsar.bookkeeper-num-worker-threads=Runtime.getRuntime().availableProcessors()\n\n# whether to use BookKeeper V2 wire protocol\npulsar.bookkeeper-use-v2-protocol=true\n\n# interval to check the need for sending an explicit LAC, default is disabled\npulsar.bookkeeper-explicit-interval=0\n\n# size for managed ledger entry cache (in MB).\npulsar.managed-ledger-cache-size-MB=0\n\n# number of threads to be used for managed ledger tasks dispatching\npulsar.managed-ledger-num-worker-threads=Runtime.getRuntime().availableProcessors()\n\n# number of threads to be used for managed ledger scheduled tasks\npulsar.managed-ledger-num-scheduler-threads=Runtime.getRuntime().availableProcessors()\n\n# directory used to store extraction NAR file\npulsar.nar-extraction-directory=System.getProperty("java.io.tmpdir")\n\n')),(0,o.kt)("p",null,"You can connect Presto to a Pulsar cluster with multiple hosts. To configure multiple hosts for brokers, add multiple URLs to ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.web-service-url"),". To configure multiple hosts for ZooKeeper, add multiple URIs to ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri"),". The following is an example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\npulsar.web-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note: by default, Pulsar SQL does not get the last message in a topic"),". It is by design and controlled by settings. By default, BookKeeper LAC only advances when subsequent entries are added. If there is no subsequent entry added, the last written entry is not visible to readers until the ledger is closed. This is not a problem for Pulsar which uses managed ledger, but Pulsar SQL directly reads from BookKeeper ledger. "),(0,o.kt)("p",null,"If you want to get the last message in a topic, set the following configurations:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For the broker configuration, set ",(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperExplicitLacIntervalInMills")," > 0 in ",(0,o.kt)("inlineCode",{parentName:"li"},"broker.conf")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"standalone.conf"),"."),(0,o.kt)("li",{parentName:"ol"},"For the Presto configuration, set ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar.bookkeeper-explicit-interval")," > 0 and ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsar.bookkeeper-use-v2-protocol=false"),".")),(0,o.kt)("p",null,"However, using BookKeeper V3 protocol introduces additional GC overhead to BK as it uses Protobuf."),(0,o.kt)("h2",{id:"query-data-from-existing-presto-clusters"},"Query data from existing Presto clusters"),(0,o.kt)("p",null,"If you already have a Presto cluster, you can copy the Presto Pulsar connector plugin to your existing cluster. Download the archived plugin package with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/apache-pulsar-2.3.0-bin.tar.gz\n\n")),(0,o.kt)("h2",{id:"deploy-a-new-cluster"},"Deploy a new cluster"),(0,o.kt)("p",null,"Since Pulsar SQL is powered by ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io"},"Trino (formerly Presto SQL)"),", the configuration for deployment is the same for the Pulsar SQL worker. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For how to set up a standalone single node environment, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.3.0/sql-getting-started"},"Query data"),". ")),(0,o.kt)("p",null,"You can use the same CLI args as the Presto launcher."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker --help\nUsage: launcher [options] command\n\nCommands: run, start, stop, restart, kill, status\n\nOptions:\n  -h, --help            show this help message and exit\n  -v, --verbose         Run verbosely\n  --etc-dir=DIR         Defaults to INSTALL_PATH/etc\n  --launcher-config=FILE\n                        Defaults to INSTALL_PATH/bin/launcher.properties\n  --node-config=FILE    Defaults to ETC_DIR/node.properties\n  --jvm-config=FILE     Defaults to ETC_DIR/jvm.config\n  --config=FILE         Defaults to ETC_DIR/config.properties\n  --log-levels-file=FILE\n                        Defaults to ETC_DIR/log.properties\n  --data-dir=DIR        Defaults to INSTALL_PATH\n  --pid-file=FILE       Defaults to DATA_DIR/var/run/launcher.pid\n  --launcher-log-file=FILE\n                        Defaults to DATA_DIR/var/log/launcher.log (only in\n                        daemon mode)\n  --server-log-file=FILE\n                        Defaults to DATA_DIR/var/log/server.log (only in\n                        daemon mode)\n  -D NAME=VALUE         Set a Java system property\n\n")),(0,o.kt)("p",null,"The default configuration for the cluster is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto"),". You can customize your deployment by modifying the default configuration."),(0,o.kt)("p",null,"You can set the worker to read from a different configuration directory, or set a different directory to write data. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker run --etc-dir /tmp/incubator-pulsar/conf/presto --data-dir /tmp/presto-1\n\n")),(0,o.kt)("p",null,"You can start the worker as daemon process."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql-worker start\n\n")),(0,o.kt)("h3",{id:"deploy-a-cluster-on-multiple-nodes"},"Deploy a cluster on multiple nodes"),(0,o.kt)("p",null,"You can deploy a Pulsar SQL cluster or Presto cluster on multiple nodes. The following example shows how to deploy a cluster on three-node cluster. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the Pulsar binary distribution to three nodes.")),(0,o.kt)("p",null,"The first node runs as Presto coordinator. The minimal configuration requirement in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/config.properties")," file is as follows. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.kt)("p",null,"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},"\ncoordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.web-service-url")," and  ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri")," configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"${project.root}/conf/presto/catalog/pulsar.properties")," file accordingly for the three nodes.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the coordinator node."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start worker nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n$ ./bin/pulsar sql-worker run\n\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Start the SQL CLI and check the status of your cluster.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ./bin/pulsar sql --server <coordinate_url>\n\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Check the status of your nodes.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\npresto> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state  \n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active \n 3       | http://192.168.2.2:8081 | testversion  | false       | active \n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n\n")),(0,o.kt)("p",null,"For more information about deployment in Presto, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://trino.io/docs/current/installation/deployment.html"},"Presto deployment"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'The broker does not advance LAC, so when Pulsar SQL bypass broker to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the broker.conf.')))}c.isMDXComponent=!0}}]);