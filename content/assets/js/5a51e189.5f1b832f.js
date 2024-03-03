"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[69436],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(96540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return t?n.createElement(m,l(l({ref:r},p),{},{components:t})):n.createElement(m,l({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=g;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36114:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(58168),o=(t(96540),t(15680));const a={id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",description:"Configure the Pulsar Trino plugin and deploy a Pulsar SQL cluster."},l=void 0,i={unversionedId:"sql-deployment-configurations",id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",description:"Configure the Pulsar Trino plugin and deploy a Pulsar SQL cluster.",source:"@site/docs/sql-deployment-configurations.md",sourceDirName:".",slug:"/sql-deployment-configurations",permalink:"/docs/next/sql-deployment-configurations",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/sql-deployment-configurations.md",tags:[],version:"current",frontMatter:{id:"sql-deployment-configurations",title:"Pulsar SQL configuration and deployment",sidebar_label:"Configuration and deployment",description:"Configure the Pulsar Trino plugin and deploy a Pulsar SQL cluster."},sidebar:"docsSidebar",previous:{title:"Query data",permalink:"/docs/next/sql-getting-started"},next:{title:"REST APIs",permalink:"/docs/next/sql-rest-api"}},s={},u=[{value:"Configure Pulsar Trino plugin",id:"configure-pulsar-trino-plugin",level:2},{value:"Enable authentication and authorization between Pulsar and Pulsar SQL",id:"enable-authentication-and-authorization-between-pulsar-and-pulsar-sql",level:3},{value:"Connect Trino to Pulsar with multiple hosts",id:"connect-trino-to-pulsar-with-multiple-hosts",level:3},{value:"Get the last message in a topic",id:"get-the-last-message-in-a-topic",level:3},{value:"Query data from existing Trino clusters",id:"query-data-from-existing-trino-clusters",level:2},{value:"Deploy a new cluster",id:"deploy-a-new-cluster",level:2},{value:"Deploy a cluster on multiple nodes",id:"deploy-a-cluster-on-multiple-nodes",level:3}],p={toc:u},d="wrapper";function c(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"You can configure the Pulsar Trino plugin and deploy a cluster with the following instruction."),(0,o.yg)("h2",{id:"configure-pulsar-trino-plugin"},"Configure Pulsar Trino plugin"),(0,o.yg)("p",null,"To configure the Pulsar Trino plugin, you can modify the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/trino/conf/catalog/pulsar.properties")," properties file. The configuration for the connector and the default values are as follows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},'# name of the connector to be displayed in the catalog\nconnector.name=pulsar\n\n# the URL of Pulsar broker service\npulsar.web-service-url=http://localhost:8080\n\n# the URL of Pulsar broker binary service\npulsar.broker-binary-service-url=pulsar://localhost:6650\n\n# the URL of Zookeeper cluster\npulsar.zookeeper-uri=localhost:2181\n\n# minimum number of entries to read at a single time\npulsar.entry-read-batch-size=100\n\n# default number of splits to use per query\npulsar.target-num-splits=4\n\n# max size of one batch message (default value is 5MB)\npulsar.max-message-size=5242880\n\n# number of split used when querying data from Pulsar\npulsar.target-num-splits=2\n\n# size of queue to buffer entry read from Pulsar\npulsar.max-split-entry-queue-size=1000\n\n# size of queue to buffer message extract from entries\npulsar.max-split-message-queue-size=10000\n\n# status provider to record connector metrics\npulsar.stats-provider=org.apache.bookkeeper.stats.NullStatsProvider\n\n# config in map format for stats provider e.g. {"key1":"val1","key2":"val2"}\npulsar.stats-provider-configs={}\n\n# whether to rewrite Pulsar\'s default topic delimiter \'/\'\npulsar.namespace-delimiter-rewrite-enable=false\n\n# delimiter used to rewrite Pulsar\'s default delimiter \'/\', use if default is causing incompatibility with other system like Superset\npulsar.rewrite-namespace-delimiter="/"\n\n# maximum number of thread pool size for ledger offloader.\npulsar.managed-ledger-offload-max-threads=2\n\n# driver used to offload or read cold data to or from long-term storage\npulsar.managed-ledger-offload-driver=null\n\n# directory to load offloaders nar file.\npulsar.offloaders-directory="./offloaders"\n\n# properties and configurations related to specific offloader implementation as map e.g. {"key1":"val1","key2":"val2"}\npulsar.offloader-properties={}\n\n# authentication plugin used to authenticate to Pulsar cluster\npulsar.auth-plugin=null\n\n# authentication parameter used to authenticate to the Pulsar cluster as a string e.g. "key1:val1,key2:val2".\npulsar.auth-params=null\n\n# whether the Pulsar client accept an untrusted TLS certificate from broker\npulsar.tls-allow-insecure-connection=null\n\n# whether to allow hostname verification when a client connects to broker over TLS.\npulsar.tls-hostname-verification-enable=null\n\n# path for the trusted TLS certificate file of Pulsar broker\npulsar.tls-trust-cert-file-path=null\n\n## whether to enable Pulsar authorization\npulsar.authorization-enabled=false\n\n# set the threshold for BookKeeper request throttle, default is disabled\npulsar.bookkeeper-throttle-value=0\n\n# set the number of IO thread\npulsar.bookkeeper-num-io-threads=2 * Runtime.getRuntime().availableProcessors()\n\n# set the number of worker thread\npulsar.bookkeeper-num-worker-threads=Runtime.getRuntime().availableProcessors()\n\n# whether to use BookKeeper V2 wire protocol\npulsar.bookkeeper-use-v2-protocol=true\n\n# interval to check the need for sending an explicit LAC, default is disabled\npulsar.bookkeeper-explicit-interval=0\n\n# size for managed ledger entry cache (in MB).\npulsar.managed-ledger-cache-size-MB=0\n\n# number of threads to be used for managed ledger tasks dispatching\npulsar.managed-ledger-num-worker-threads=Runtime.getRuntime().availableProcessors()\n\n# number of threads to be used for managed ledger scheduled tasks\npulsar.managed-ledger-num-scheduler-threads=Runtime.getRuntime().availableProcessors()\n\n# directory used to store extraction NAR file\npulsar.nar-extraction-directory=System.getProperty("java.io.tmpdir")\n')),(0,o.yg)("h3",{id:"enable-authentication-and-authorization-between-pulsar-and-pulsar-sql"},"Enable authentication and authorization between Pulsar and Pulsar SQL"),(0,o.yg)("p",null,"To enable authentication and authorization between Pulsar and Pulsar SQL, you need to set the following configurations in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/trino/conf/catalog/pulsar.properties")," properties file:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"pulsar.authorization-enabled=true\npulsar.broker-binary-service-url=pulsar://localhost:6650\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"By default, the authentication and authorization between Pulsar and Pulsar SQL are ",(0,o.yg)("strong",{parentName:"p"},"disabled"),".")),(0,o.yg)("h3",{id:"connect-trino-to-pulsar-with-multiple-hosts"},"Connect Trino to Pulsar with multiple hosts"),(0,o.yg)("p",null,"To connect Trino with multiple hosts for brokers, add multiple URLs to ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.web-service-url"),".\nTo connect Trino with multiple hosts for ZooKeeper, add multiple URLs to ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.web-service-url"),"."),(0,o.yg)("p",null,"The following is an example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"pulsar.web-service-url=http://localhost:8080,localhost:8081,localhost:8082\npulsar.zookeeper-uri=localhost1,localhost2:2181\n")),(0,o.yg)("h3",{id:"get-the-last-message-in-a-topic"},"Get the last message in a topic"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"By default, Pulsar SQL ",(0,o.yg)("strong",{parentName:"p"},"does not get the last message in a topic"),". It is by design and controlled by settings. By default, BookKeeper LAC only advances when subsequent entries are added. If there is no subsequent entry added, the last written entry is not visible to readers until the ledger is closed. This is not a problem for Pulsar which uses managed ledger, but Pulsar SQL directly reads from BookKeeper ledger.")),(0,o.yg)("p",null,"To get the last message in a topic, you need to set the following configurations:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"For the broker configuration, set ",(0,o.yg)("inlineCode",{parentName:"p"},"bookkeeperExplicitLacIntervalInMills")," > 0 in ",(0,o.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"standalone.conf"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"For the Trino configuration, set ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.bookkeeper-explicit-interval")," > 0 and ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.bookkeeper-use-v2-protocol=false"),"."))),(0,o.yg)("p",null,"However, using BookKeeper V3 protocol introduces additional GC overhead to BK as it uses Protobuf."),(0,o.yg)("h2",{id:"query-data-from-existing-trino-clusters"},"Query data from existing Trino clusters"),(0,o.yg)("p",null,"If you already have a Trino cluster compatible to version 363, you can copy the Pulsar Trino plugin to your existing cluster. Download the archived plugin package with the following command."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-3.2.0/apache-pulsar-3.2.0-bin.tar.gz\n")),(0,o.yg)("h2",{id:"deploy-a-new-cluster"},"Deploy a new cluster"),(0,o.yg)("p",null,"Since Pulsar SQL is powered by Trino, the configuration for deployment is the same for the Pulsar SQL worker."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"For how to set up a standalone single node environment, refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/next/sql-getting-started"},"Query data"),".")),(0,o.yg)("p",null,"You can use the same CLI args as the Trino launcher."),(0,o.yg)("p",null,"The default configuration for the cluster is located in ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/trino/conf"),". You can customize your deployment by modifying the default configuration."),(0,o.yg)("p",null,"You can set the worker to read from a different configuration directory, or set a different directory to write data."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql-worker run --etc-dir /tmp/pulsar/trino/conf --data-dir /tmp/trino-1\n")),(0,o.yg)("p",null,"You can start the worker as daemon process."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql-worker start\n")),(0,o.yg)("h3",{id:"deploy-a-cluster-on-multiple-nodes"},"Deploy a cluster on multiple nodes"),(0,o.yg)("p",null,"You can deploy a Pulsar SQL cluster or Trino cluster on multiple nodes. The following steps shows how to deploy a cluster on three-node cluster."),(0,o.yg)("p",null,"Step 1: Copy the Pulsar binary distribution to three nodes."),(0,o.yg)("p",null,"The first node runs as Trino coordinator. The minimal configuration required in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/trino/conf/config.properties")," file is as follows."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"coordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery-server.enabled=true\ndiscovery.uri=<coordinator-url>\n")),(0,o.yg)("p",null,"The other two nodes serve as worker nodes, you can use the following configuration for worker nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-properties"},"coordinator=false\nhttp-server.http.port=8080\nquery.max-memory=50GB\nquery.max-memory-per-node=1GB\ndiscovery.uri=<coordinator-url>\n")),(0,o.yg)("p",null,"step 2: Modify ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.web-service-url")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"pulsar.zookeeper-uri")," configuration in the ",(0,o.yg)("inlineCode",{parentName:"p"},"${project.root}/trino/conf/catalog/pulsar.properties")," file accordingly for the three nodes."),(0,o.yg)("p",null,"Step 3: Start the coordinator node."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql-worker run\n")),(0,o.yg)("p",null,"Step 4: Start worker nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql-worker run\n")),(0,o.yg)("p",null,"Step 5: Start the SQL CLI and check the status of your cluster."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar sql --server <coordinate_url>\n")),(0,o.yg)("p",null,"Step 6: Check the status of your nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"trino> SELECT * FROM system.runtime.nodes;\n node_id |        http_uri         | node_version | coordinator | state\n---------+-------------------------+--------------+-------------+--------\n 1       | http://192.168.2.1:8081 | testversion  | true        | active\n 3       | http://192.168.2.2:8081 | testversion  | false       | active\n 2       | http://192.168.2.3:8081 | testversion  | false       | active\n")),(0,o.yg)("p",null,"For more information about the deployment in Trino, refer to ",(0,o.yg)("a",{parentName:"p",href:"https://trino.io/docs/363/installation/deployment.html"},"Trino deployment"),"."),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},'The broker does not advance LAC, so when Pulsar SQL bypasses brokers to query data, it can only read entries up to the LAC that all the bookies learned. You can enable periodically write LAC on the broker by setting "bookkeeperExplicitLacIntervalInMills" in the ',(0,o.yg)("inlineCode",{parentName:"p"},"broker.conf")," file.")))}c.isMDXComponent=!0}}]);