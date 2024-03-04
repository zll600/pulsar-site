"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[24651],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),s=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},g=function(e){var a=s(e.components);return r.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,l(l({ref:a},g),{},{components:t})):r.createElement(y,l({ref:a},g))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94190:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(58168),n=(t(96540),t(15680));const o={id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader",original_id:"tiered-storage-azure"},l=void 0,i={unversionedId:"tiered-storage-azure",id:"version-2.10.x/tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.10.x/tiered-storage-azure.md",sourceDirName:".",slug:"/tiered-storage-azure",permalink:"/docs/2.10.x/tiered-storage-azure",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/tiered-storage-azure.md",tags:[],version:"2.10.x",frontMatter:{id:"tiered-storage-azure",title:"Use Azure BlobStore offloader with Pulsar",sidebar_label:"Azure BlobStore offloader",original_id:"tiered-storage-azure"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Filesystem offloader",permalink:"/docs/2.10.x/tiered-storage-filesystem"},next:{title:"Aliyun OSS offloader",permalink:"/docs/2.10.x/tiered-storage-aliyun"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure Azure BlobStore offloader driver",id:"configure-azure-blobstore-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure Azure BlobStore offloader to run automatically",id:"configure-azure-blobstore-offloader-to-run-automatically",level:3},{value:"Example",id:"example-1",level:4},{value:"Configure Azure BlobStore offloader to run manually",id:"configure-azure-blobstore-offloader-to-run-manually",level:3},{value:"Example",id:"example-2",level:4}],g={toc:s},d="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"This chapter guides you through every step of installing and configuring the Azure BlobStore offloader and using it with Pulsar."),(0,n.yg)("h2",{id:"installation"},"Installation"),(0,n.yg)("p",null,"Follow the steps below to install the Azure BlobStore offloader."),(0,n.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Pulsar: 2.6.2 or later versions")),(0,n.yg)("h3",{id:"step"},"Step"),(0,n.yg)("p",null,"This example uses Pulsar 2.6.2."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Download from the ",(0,n.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz"},"Apache mirror"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Download from the Pulsar ",(0,n.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use ",(0,n.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.6.2/apache-pulsar-2.6.2-bin.tar.gz\n\n"))))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.6.2/apache-pulsar-offloaders-2.6.2-bin.tar.gz\ntar xvfz apache-pulsar-offloaders-2.6.2-bin.tar.gz\n\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,n.yg)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.6.2/offloaders apache-pulsar-2.6.2/offloaders\n\nls offloaders\n\n")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,n.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,n.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3"),",  ",(0,n.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS")," and ",(0,n.yg)("a",{parentName:"p",href:"https://portal.azure.com/#home"},"Azure")," for long term storage."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.6.2.nar\ntiered-storage-jcloud-2.6.2.nar\n\n")),(0,n.yg)("admonition",{parentName:"li",type:"note"},(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,n.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,n.yg)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,n.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,n.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,n.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,n.yg)("h2",{id:"configuration"},"Configuration"),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to Azure BlobStore, you need to configure some properties of the Azure BlobStore offload driver.")),(0,n.yg)("p",null,"Besides, you can also configure the Azure BlobStore offloader to run it automatically or trigger it manually."),(0,n.yg)("h3",{id:"configure-azure-blobstore-offloader-driver"},"Configure Azure BlobStore offloader driver"),(0,n.yg)("p",null,"You can configure the Azure BlobStore offloader driver in the configuration file ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,n.yg)("table",{parentName:"li"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Required configuration"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,n.yg)("td",{parentName:"tr",align:null},"Offloader driver name"),(0,n.yg)("td",{parentName:"tr",align:null},"azureblob")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,n.yg)("td",{parentName:"tr",align:null},"Offloader directory"),(0,n.yg)("td",{parentName:"tr",align:null},"offloaders")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadBucket")),(0,n.yg)("td",{parentName:"tr",align:null},"Bucket"),(0,n.yg)("td",{parentName:"tr",align:null},"pulsar-topic-offload"))))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,n.yg)("table",{parentName:"li"},(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Optional"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,n.yg)("td",{parentName:"tr",align:null},"Size of block read"),(0,n.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,n.yg)("td",{parentName:"tr",align:null},"Size of block write"),(0,n.yg)("td",{parentName:"tr",align:null},"64 MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,n.yg)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.yg)("td",{parentName:"tr",align:null},"10")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,n.yg)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,n.yg)("td",{parentName:"tr",align:null},"50000")))))),(0,n.yg)("h4",{id:"bucket-required"},"Bucket (required)"),(0,n.yg)("p",null,"A bucket is a basic container that holds your data. Everything you store in Azure BlobStore must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,n.yg)("h5",{id:"example"},"Example"),(0,n.yg)("p",null,"This example names the bucket as ",(0,n.yg)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-conf"},"\nmanagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,n.yg)("h4",{id:"authentication-required"},"Authentication (required)"),(0,n.yg)("p",null,"To be able to access Azure BlobStore, you need to authenticate with Azure BlobStore."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Set the environment variables ",(0,n.yg)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCOUNT")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"AZURE_STORAGE_ACCESS_KEY")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,n.yg)("p",{parentName:"li"},'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nexport AZURE_STORAGE_ACCOUNT=ABC123456789\nexport AZURE_STORAGE_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n")))),(0,n.yg)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,n.yg)("p",null,"You can configure the size of a request sent to or read from Azure BlobStore in the configuration file ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadReadBufferSizeInBytes")),(0,n.yg)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from Azure BlobStore store."),(0,n.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadMaxBlockSizeInBytes")),(0,n.yg)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to Azure BlobStore store. It ',(0,n.yg)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,n.yg)("td",{parentName:"tr",align:null},"64 MB")))),(0,n.yg)("h3",{id:"configure-azure-blobstore-offloader-to-run-automatically"},"Configure Azure BlobStore offloader to run automatically"),(0,n.yg)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Threshold value"),(0,n.yg)("th",{parentName:"tr",align:null},"Action"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"> 0"),(0,n.yg)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"= 0"),(0,n.yg)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"< 0"),(0,n.yg)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,n.yg)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,n.yg)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,n.yg)("p",null,"The offload configurations in ",(0,n.yg)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/namespaces?id=set-offload-policies"},(0,n.yg)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,n.yg)("h4",{id:"example-1"},"Example"),(0,n.yg)("p",null,"This example sets the Azure BlobStore offloader threshold size to 10 MB using pulsar-admin."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"For more information about the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin docs"),".")),(0,n.yg)("h3",{id:"configure-azure-blobstore-offloader-to-run-manually"},"Configure Azure BlobStore offloader to run manually"),(0,n.yg)("p",null,"For individual topics, you can trigger Azure BlobStore offloader manually using one of the following methods:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use REST endpoint.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin)."),(0,n.yg)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to Azure BlobStore until the threshold is no longer exceeded. Older segments are moved first."))),(0,n.yg)("h4",{id:"example-2"},"Example"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"This example triggers the Azure BlobStore offloader to run manually using pulsar-admin."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,n.yg)("admonition",{parentName:"li",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"For more information about the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin docs"),"."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"This example checks the Azure BlobStore offloader status using pulsar-admin."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,n.yg)("p",{parentName:"li"},"To wait for the Azure BlobStore offloader to complete the job, add the ",(0,n.yg)("inlineCode",{parentName:"p"},"-w")," flag."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,n.yg)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Output")),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException:\n\n")),(0,n.yg)("admonition",{parentName:"li",type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"For more information about the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see ",(0,n.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},"Pulsar admin docs"),".")))))}u.isMDXComponent=!0}}]);