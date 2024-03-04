"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[33498],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>c});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),g=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=g(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=g(t),m=r,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(c,l(l({ref:a},s),{},{components:t})):n.createElement(c,l({ref:a},s))}));function c(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var g=2;g<o;g++)l[g]=t[g];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47010:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var n=t(58168),r=(t(96540),t(15680));const o={id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",sidebar_label:"GCS offloader",original_id:"tiered-storage-gcs"},l=void 0,i={unversionedId:"tiered-storage-gcs",id:"version-2.10.x/tiered-storage-gcs",title:"Use GCS offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the GCS offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.10.x/tiered-storage-gcs.md",sourceDirName:".",slug:"/tiered-storage-gcs",permalink:"/docs/2.10.x/tiered-storage-gcs",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/tiered-storage-gcs.md",tags:[],version:"2.10.x",frontMatter:{id:"tiered-storage-gcs",title:"Use GCS offloader with Pulsar",sidebar_label:"GCS offloader",original_id:"tiered-storage-gcs"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"AWS S3 offloader",permalink:"/docs/2.10.x/tiered-storage-aws"},next:{title:"Filesystem offloader",permalink:"/docs/2.10.x/tiered-storage-filesystem"}},p={},g=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure GCS offloader driver",id:"configure-gcs-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Bucket region (required)",id:"bucket-region-required",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Example",id:"example-2",level:5},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure GCS offloader to run automatically",id:"configure-gcs-offloader-to-run-automatically",level:3},{value:"Example",id:"example-3",level:4},{value:"Configure GCS offloader to run manually",id:"configure-gcs-offloader-to-run-manually",level:3},{value:"Example",id:"example-4",level:4},{value:"Tutorial",id:"tutorial",level:2}],s={toc:g},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This chapter guides you through every step of installing and configuring the GCS offloader and using it with Pulsar."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Follow the steps below to install the GCS offloader."),(0,r.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pulsar: 2.4.2 or later versions")),(0,r.yg)("h3",{id:"step"},"Step"),(0,r.yg)("p",null,"This example uses Pulsar 2.5.1."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download from the ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"download page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8S and DCOS), you can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,r.yg)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"As shown in the output, Pulsar uses ",(0,r.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support GCS and AWS S3 for long term storage."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")))),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to GCS, you need to configure some properties of the GCS offloader driver.")),(0,r.yg)("p",null,"Besides, you can also configure the GCS offloader to run it automatically or trigger it manually."),(0,r.yg)("h3",{id:"configure-gcs-offloader-driver"},"Configure GCS offloader driver"),(0,r.yg)("p",null,"You can configure GCS offloader driver in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Required")," configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive."),(0,r.yg)("td",{parentName:"tr",align:null},"google-cloud-storage")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.yg)("td",{parentName:"tr",align:null},"offloaders")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadBucket")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"pulsar-topic-offload")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadRegion")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket region"),(0,r.yg)("td",{parentName:"tr",align:null},"europe-west3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadServiceAccountKeyFile")),(0,r.yg)("td",{parentName:"tr",align:null},"Authentication"),(0,r.yg)("td",{parentName:"tr",align:null},"/Users/user-name/Downloads/project-804d5e6a6f33.json"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Optional configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadReadBufferSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Size of block read"),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Size of block write"),(0,r.yg)("td",{parentName:"tr",align:null},"64 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic."),(0,r.yg)("td",{parentName:"tr",align:null},"10")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.yg)("td",{parentName:"tr",align:null},"The max number of entries to append to a ledger before triggering a rollover."),(0,r.yg)("td",{parentName:"tr",align:null},"50000")))))),(0,r.yg)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.yg)("p",null,"A bucket is a basic container that holds your data. Everything you store in GCS ",(0,r.yg)("strong",{parentName:"p"},"must")," be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you can not nest a bucket."),(0,r.yg)("h5",{id:"example"},"Example"),(0,r.yg)("p",null,"This example names the bucket as ",(0,r.yg)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"\ngcsManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,r.yg)("h4",{id:"bucket-region-required"},"Bucket region (required)"),(0,r.yg)("p",null,"Bucket region is the region where a bucket is located. If a bucket region is not specified, the ",(0,r.yg)("strong",{parentName:"p"},"default")," region (",(0,r.yg)("inlineCode",{parentName:"p"},"us multi-regional location"),") is used."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about bucket location, see ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/bucket-locations"},"here"),".")),(0,r.yg)("h5",{id:"example-1"},"Example"),(0,r.yg)("p",null,"This example sets the bucket region as ",(0,r.yg)("em",{parentName:"p"},"europe-west3"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\ngcsManagedLedgerOffloadRegion=europe-west3\n\n")),(0,r.yg)("h4",{id:"authentication-required"},"Authentication (required)"),(0,r.yg)("p",null,"To enable a broker access GCS, you need to configure ",(0,r.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"gcsManagedLedgerOffloadServiceAccountKeyFile")," is\na JSON file, containing GCS credentials of a service account."),(0,r.yg)("h5",{id:"example-2"},"Example"),(0,r.yg)("p",null,"To generate service account credentials or view the public credentials that you've already generated, follow the following steps."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Navigate to the ",(0,r.yg)("a",{parentName:"p",href:"https://console.developers.google.com/iam-admin/serviceaccounts"},"Service accounts page"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select a project or create a new one.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Create service account"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"Create service account")," window, type a name for the service account and select ",(0,r.yg)("strong",{parentName:"p"},"Furnish a new private key"),"."),(0,r.yg)("p",{parentName:"li"},"If you want to ",(0,r.yg)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/OAuth2ServiceAccount#delegatingauthority"},"grant G Suite domain-wide authority")," to the service account, select ",(0,r.yg)("strong",{parentName:"p"},"Enable G Suite Domain-wide Delegation"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Create"),"."),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Make sure the service account you create has permission to operate GCS, you need to assign ",(0,r.yg)("strong",{parentName:"p"},"Storage Admin")," permission to your service account ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),"."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can get the following information and set this in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-conf"},'\ngcsManagedLedgerOffloadServiceAccountKeyFile="/Users/user-name/Downloads/project-804d5e6a6f33.json"\n\n')),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"For more information about how to create ",(0,r.yg)("inlineCode",{parentName:"li"},"gcsManagedLedgerOffloadServiceAccountKeyFile"),", see ",(0,r.yg)("a",{parentName:"li",href:"https://support.google.com/googleapi/answer/6158849"},"here"),"."),(0,r.yg)("li",{parentName:"ul"},"For more information about Google Cloud IAM, see ",(0,r.yg)("a",{parentName:"li",href:"https://cloud.google.com/storage/docs/access-control/iam"},"here"),"."))))),(0,r.yg)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,r.yg)("p",null,"You can configure the size of a request sent to or read from GCS in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadReadBufferSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from GCS.",(0,r.yg)("br",null),(0,r.yg)("br",null),"The ",(0,r.yg)("strong",{parentName:"td"},"default")," value is 1 MB.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"gcsManagedLedgerOffloadMaxBlockSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to GCS. ',(0,r.yg)("br",null),(0,r.yg)("br",null),"It ",(0,r.yg)("strong",{parentName:"td"},"can not")," be smaller than 5 MB. ",(0,r.yg)("br",null),(0,r.yg)("br",null),"The ",(0,r.yg)("strong",{parentName:"td"},"default")," value is 64 MB.")))),(0,r.yg)("h3",{id:"configure-gcs-offloader-to-run-automatically"},"Configure GCS offloader to run automatically"),(0,r.yg)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offload operation is triggered automatically."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.yg)("th",{parentName:"tr",align:null},"Action"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"= 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.yg)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,r.yg)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,r.yg)("p",null,"The offload configurations in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,r.yg)("a",{parentName:"p",href:"pathname:///reference/#/2.10.x/pulsar-admin/namespaces?id=set-offload-policies"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin namespaces set-offload-policies options"))," command."),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)("p",null,"This example sets the GCS offloader threshold size to 10 MB using pulsar-admin."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#set-offload-threshold"},"here"),".")),(0,r.yg)("h3",{id:"configure-gcs-offloader-to-run-manually"},"Configure GCS offloader to run manually"),(0,r.yg)("p",null,"For individual topics, you can trigger GCS offloader manually using one of the following methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin)."),(0,r.yg)("p",{parentName:"li"},"To trigger the GCS via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to GCS until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.yg)("h4",{id:"example-4"},"Example"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example triggers the GCS offloader to run manually using pulsar-admin with the command ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload (topic-name) (threshold)"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload persistent://my-tenant/my-namespace/topic1 10M\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#offload"},"here"),"."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example checks the GCS offloader status using pulsar-admin with the command ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,r.yg)("p",{parentName:"li"},"To wait for GCS to complete the job, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\npulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,r.yg)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, default values, and shorthands, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/pulsar-admin#offload-status"},"here"),".")))),(0,r.yg)("h2",{id:"tutorial"},"Tutorial"),(0,r.yg)("p",null,"For the complete and step-by-step instructions on how to use the GCS offloader with Pulsar, see ",(0,r.yg)("a",{parentName:"p",href:"https://hub.streamnative.io/offloaders/gcs/2.5.1#usage"},"here"),"."))}u.isMDXComponent=!0}}]);