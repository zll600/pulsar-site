"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[11100],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},g=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(y,l(l({ref:a},g),{},{components:t})):n.createElement(y,l({ref:a},g))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},97760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=t(58168),r=(t(96540),t(15680));const o={id:"tiered-storage-aws",title:"Use AWS S3 offloader with Pulsar",sidebar_label:"AWS S3 offloader",original_id:"tiered-storage-aws"},l=void 0,i={unversionedId:"tiered-storage-aws",id:"version-2.7.4/tiered-storage-aws",title:"Use AWS S3 offloader with Pulsar",description:"This chapter guides you through every step of installing and configuring the AWS S3 offloader and using it with Pulsar.",source:"@site/versioned_docs/version-2.7.4/tiered-storage-aws.md",sourceDirName:".",slug:"/tiered-storage-aws",permalink:"/docs/2.7.4/tiered-storage-aws",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.4/tiered-storage-aws.md",tags:[],version:"2.7.4",frontMatter:{id:"tiered-storage-aws",title:"Use AWS S3 offloader with Pulsar",sidebar_label:"AWS S3 offloader",original_id:"tiered-storage-aws"},sidebar:"version-2.7.4/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.7.4/tiered-storage-overview"},next:{title:"GCS offloader",permalink:"/docs/2.7.4/tiered-storage-gcs"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Step",id:"step",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Configure AWS S3 offloader driver",id:"configure-aws-s3-offloader-driver",level:3},{value:"Bucket (required)",id:"bucket-required",level:4},{value:"Example",id:"example",level:5},{value:"Bucket region",id:"bucket-region",level:4},{value:"Example",id:"example-1",level:5},{value:"Authentication (required)",id:"authentication-required",level:4},{value:"Size of block read/write",id:"size-of-block-readwrite",level:4},{value:"Configure AWS S3 offloader to run automatically",id:"configure-aws-s3-offloader-to-run-automatically",level:3},{value:"Example",id:"example-2",level:4},{value:"Configure AWS S3 offloader to run manually",id:"configure-aws-s3-offloader-to-run-manually",level:3},{value:"Example",id:"example-3",level:4},{value:"Tutorial",id:"tutorial",level:2}],g={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,r.yg)(d,(0,n.A)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This chapter guides you through every step of installing and configuring the AWS S3 offloader and using it with Pulsar."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"Follow the steps below to install the AWS S3 offloader."),(0,r.yg)("h3",{id:"prerequisite"},"Prerequisite"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pulsar: 2.4.2 or later versions")),(0,r.yg)("h3",{id:"step"},"Step"),(0,r.yg)("p",null,"This example uses Pulsar 2.5.1."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download the Pulsar tarball using one of the following ways:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download from the ",(0,r.yg)("a",{parentName:"p",href:"https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz"},"Apache mirror"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://pulsar.apache.org/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"\nwget https://archive.apache.org/dist/pulsar/pulsar-2.5.1/apache-pulsar-2.5.1-bin.tar.gz\n\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download and untar the Pulsar offloaders package."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nwget https://downloads.apache.org/pulsar/pulsar-2.5.1/apache-pulsar-offloaders-2.5.1-bin.tar.gz\ntar xvfz apache-pulsar-offloaders-2.5.1-bin.tar.gz\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the Pulsar offloaders as ",(0,r.yg)("inlineCode",{parentName:"p"},"offloaders")," in the Pulsar directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nmv apache-pulsar-offloaders-2.5.1/offloaders apache-pulsar-2.5.1/offloaders\n\nls offloaders\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("p",{parentName:"li"},"As shown from the output, Pulsar uses ",(0,r.yg)("a",{parentName:"p",href:"https://jclouds.apache.org"},"Apache jclouds")," to support ",(0,r.yg)("a",{parentName:"p",href:"https://aws.amazon.com/s3/"},"AWS S3")," and ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.google.com/storage/"},"GCS")," for long term storage."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\ntiered-storage-file-system-2.5.1.nar\ntiered-storage-jcloud-2.5.1.nar\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's Pulsar directory."),(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in Docker or deploying Pulsar using a Docker image (such as K8s and DCOS), you can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))))),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Before offloading data from BookKeeper to AWS S3, you need to configure some properties of the AWS S3 offload driver.")),(0,r.yg)("p",null,"Besides, you can also configure the AWS S3 offloader to run it automatically or trigger it manually."),(0,r.yg)("h3",{id:"configure-aws-s3-offloader-driver"},"Configure AWS S3 offloader driver"),(0,r.yg)("p",null,"You can configure the AWS S3 offloader driver in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Required")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Required configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerOffloadDriver")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader driver name, which is case-insensitive. ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": there is a third driver type, S3, which is identical to AWS S3, though S3 requires that you specify an endpoint URL using ",(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadServiceEndpoint"),". This is useful if using an S3 compatible data store other than AWS S3."),(0,r.yg)("td",{parentName:"tr",align:null},"aws-s3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"offloadersDirectory")),(0,r.yg)("td",{parentName:"tr",align:null},"Offloader directory"),(0,r.yg)("td",{parentName:"tr",align:null},"offloaders")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadBucket")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket"),(0,r.yg)("td",{parentName:"tr",align:null},"pulsar-topic-offload"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Optional")," configurations are as below."),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Optional"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Example value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadRegion")),(0,r.yg)("td",{parentName:"tr",align:null},"Bucket region ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": before specifying a value for this parameter, you need to set the following configurations. Otherwise, you might get an error.",(0,r.yg)("br",null),(0,r.yg)("br",null),"- Set ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/general/latest/gr/s3.html"},(0,r.yg)("inlineCode",{parentName:"a"},"s3ManagedLedgerOffloadServiceEndpoint")),".",(0,r.yg)("br",null),(0,r.yg)("br",null),"Example",(0,r.yg)("br",null),(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadServiceEndpoint=https://s3.YOUR_REGION.amazonaws.com"),(0,r.yg)("br",null),(0,r.yg)("br",null),"- Grant ",(0,r.yg)("inlineCode",{parentName:"td"},"GetBucketLocation")," permission to a user.",(0,r.yg)("br",null),(0,r.yg)("br",null),"For how to grant ",(0,r.yg)("inlineCode",{parentName:"td"},"GetBucketLocation")," permission to a user, see ",(0,r.yg)("a",{parentName:"td",href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/using-with-s3-actions.html#using-with-s3-actions-related-to-buckets"},"here"),"."),(0,r.yg)("td",{parentName:"tr",align:null},"eu-west-3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadReadBufferSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Size of block read"),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadMaxBlockSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Size of block write"),(0,r.yg)("td",{parentName:"tr",align:null},"64 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMinLedgerRolloverTimeMinutes")),(0,r.yg)("td",{parentName:"tr",align:null},"Minimum time between ledger rollover for a topic",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,r.yg)("td",{parentName:"tr",align:null},"2")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"managedLedgerMaxEntriesPerLedger")),(0,r.yg)("td",{parentName:"tr",align:null},"Maximum number of entries to append to a ledger before triggering a rollover.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note"),": it is not recommended that you set this configuration in the production environment."),(0,r.yg)("td",{parentName:"tr",align:null},"5000")))))),(0,r.yg)("h4",{id:"bucket-required"},"Bucket (required)"),(0,r.yg)("p",null,"A bucket is a basic container that holds your data. Everything you store in AWS S3 must be contained in a bucket. You can use a bucket to organize your data and control access to your data, but unlike directory and folder, you cannot nest a bucket."),(0,r.yg)("h5",{id:"example"},"Example"),(0,r.yg)("p",null,"This example names the bucket as ",(0,r.yg)("em",{parentName:"p"},"pulsar-topic-offload"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadBucket=pulsar-topic-offload\n\n")),(0,r.yg)("h4",{id:"bucket-region"},"Bucket region"),(0,r.yg)("p",null,"A bucket region is a region where a bucket is located. If a bucket region is not specified, the ",(0,r.yg)("strong",{parentName:"p"},"default")," region (",(0,r.yg)("inlineCode",{parentName:"p"},"US East (N. Virginia)"),") is used."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about AWS regions and endpoints, see ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/rande.html"},"here"),".")),(0,r.yg)("h5",{id:"example-1"},"Example"),(0,r.yg)("p",null,"This example sets the bucket region as ",(0,r.yg)("em",{parentName:"p"},"europe-west-3"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"\ns3ManagedLedgerOffloadRegion=eu-west-3\n\n")),(0,r.yg)("h4",{id:"authentication-required"},"Authentication (required)"),(0,r.yg)("p",null,"To be able to access AWS S3, you need to authenticate with AWS S3."),(0,r.yg)("p",null,"Pulsar does not provide any direct methods of configuring authentication for AWS S3,\nbut relies on the mechanisms supported by the ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaSDK/latest/javadoc/com/amazonaws/auth/DefaultAWSCredentialsProviderChain.html"},"DefaultAWSCredentialsProviderChain"),"."),(0,r.yg)("p",null,"Once you have created a set of credentials in the AWS IAM console, you can configure credentials using one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use EC2 instance metadata credentials."),(0,r.yg)("p",{parentName:"li"},"If you are on AWS instance with an instance profile that provides credentials, Pulsar uses these credentials if no other mechanism is provided.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set the environment variables ",(0,r.yg)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,r.yg)("p",{parentName:"li"},'"export" is important so that the variables are made available in the environment of spawned processes.'),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nexport AWS_ACCESS_KEY_ID=ABC123456789\nexport AWS_SECRET_ACCESS_KEY=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Add the Java system properties ",(0,r.yg)("inlineCode",{parentName:"p"},"aws.accessKeyId")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"aws.secretKey")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_EXTRA_OPTS")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'\nPULSAR_EXTRA_OPTS="${PULSAR_EXTRA_OPTS} ${PULSAR_MEM} ${PULSAR_GC} -Daws.accessKeyId=ABC123456789 -Daws.secretKey=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c -Dio.netty.leakDetectionLevel=disabled -Dio.netty.recycler.maxCapacityPerThread=4096"\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set the access credentials in ",(0,r.yg)("inlineCode",{parentName:"p"},"~/.aws/credentials"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"\n[default]\naws_access_key_id=ABC123456789\naws_secret_access_key=ded7db27a4558e2ea8bbf0bf37ae0e8521618f366c\n\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Assume an IAM role."),(0,r.yg)("p",{parentName:"li"},"This example uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"DefaultAWSCredentialsProviderChain")," for assuming this role."),(0,r.yg)("p",{parentName:"li"},"The broker must be rebooted for credentials specified in ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar_env")," to take effect."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-conf"},"\ns3ManagedLedgerOffloadRole=<aws role arn>\ns3ManagedLedgerOffloadRoleSessionName=pulsar-s3-offload\n\n")))),(0,r.yg)("h4",{id:"size-of-block-readwrite"},"Size of block read/write"),(0,r.yg)("p",null,"You can configure the size of a request sent to or read from AWS S3 in the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf"),"."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Default value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadReadBufferSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},"Block size for each individual read when reading back data from AWS S3."),(0,r.yg)("td",{parentName:"tr",align:null},"1 MB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"s3ManagedLedgerOffloadMaxBlockSizeInBytes")),(0,r.yg)("td",{parentName:"tr",align:null},'Maximum size of a "part" sent during a multipart upload to AWS S3. It ',(0,r.yg)("strong",{parentName:"td"},"cannot")," be smaller than 5 MB."),(0,r.yg)("td",{parentName:"tr",align:null},"64 MB")))),(0,r.yg)("h3",{id:"configure-aws-s3-offloader-to-run-automatically"},"Configure AWS S3 offloader to run automatically"),(0,r.yg)("p",null,"Namespace policy can be configured to offload data automatically once a threshold is reached. The threshold is based on the size of data that a topic has stored on a Pulsar cluster. Once the topic reaches the threshold, an offloading operation is triggered automatically."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Threshold value"),(0,r.yg)("th",{parentName:"tr",align:null},"Action"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It triggers the offloading operation if the topic storage reaches its threshold.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"= 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It causes a broker to offload data as soon as possible.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 0"),(0,r.yg)("td",{parentName:"tr",align:null},"It disables automatic offloading operation.")))),(0,r.yg)("p",null,"Automatic offloading runs when a new segment is added to a topic log. If you set the threshold on a namespace, but few messages are being produced to the topic, offloader does not work until the current segment is full."),(0,r.yg)("p",null,"You can configure the threshold size using CLI tools, such as pulsar-admin."),(0,r.yg)("p",null,"The offload configurations in ",(0,r.yg)("inlineCode",{parentName:"p"},"broker.conf")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"standalone.conf")," are used for the namespaces that do not have namespace level offload policies. Each namespace can have its own offload policy. If you want to set offload policy for each namespace, use the command ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-policies options")," command."),(0,r.yg)("h4",{id:"example-2"},"Example"),(0,r.yg)("p",null,"This example sets the AWS S3 offloader threshold size to 10 MB using pulsar-admin."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-offload-threshold --size 10M my-tenant/my-namespace\n\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin namespaces set-offload-threshold options")," command, including flags, descriptions, and default values, see here.")),(0,r.yg)("h3",{id:"configure-aws-s3-offloader-to-run-manually"},"Configure AWS S3 offloader to run manually"),(0,r.yg)("p",null,"For individual topics, you can trigger AWS S3 offloader manually using one of the following methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use REST endpoint.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Use CLI tools (such as pulsar-admin)."),(0,r.yg)("p",{parentName:"li"},"To trigger it via CLI tools, you need to specify the maximum amount of data (threshold) that should be retained on a Pulsar cluster for a topic. If the size of the topic data on the Pulsar cluster exceeds this threshold, segments from the topic are moved to AWS S3 until the threshold is no longer exceeded. Older segments are moved first."))),(0,r.yg)("h4",{id:"example-3"},"Example"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example triggers the AWS S3 offloader to run manually using pulsar-admin."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload --size-threshold 10M my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload triggered for persistent://my-tenant/my-namespace/topic1 for messages before 2:0:-1\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload options")," command, including flags, descriptions, and default values, see here."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This example checks the AWS S3 offloader status using pulsar-admin."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nOffload is currently running\n\n")),(0,r.yg)("p",{parentName:"li"},"To wait for the AWS S3 offloader to complete the job, add the ",(0,r.yg)("inlineCode",{parentName:"p"},"-w")," flag."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status -w persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nOffload was a success\n\n")),(0,r.yg)("p",{parentName:"li"},"If there is an error in offloading, the error is propagated to the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status")," command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin topics offload-status persistent://my-tenant/my-namespace/topic1\n\n")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Output")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\nError in offload\nnull\n\nReason: Error offloading: org.apache.bookkeeper.mledger.ManagedLedgerException: java.util.concurrent.CompletionException: com.amazonaws.services.s3.model.AmazonS3Exception: Anonymous users cannot initiate multipart uploads.  Please authenticate. (Service: Amazon S3; Status Code: 403; Error Code: AccessDenied; Request ID: 798758DE3F1776DF; S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=), S3 Extended Request ID: dhBFz/lZm1oiG/oBEepeNlhrtsDlzoOhocuYMpKihQGXe6EG8puRGOkK6UwqzVrMXTWBxxHcS+g=\n\n")),(0,r.yg)("admonition",{parentName:"li",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For more information about the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-admin topics offload-status options")," command, including flags, descriptions, and default values, see here.")))),(0,r.yg)("h2",{id:"tutorial"},"Tutorial"),(0,r.yg)("p",null,"For the complete and step-by-step instructions on how to use the AWS S3 offloader with Pulsar, see ",(0,r.yg)("a",{parentName:"p",href:"https://hub.streamnative.io/offloaders/aws-s3/2.5.1#usage"},"here"),"."))}u.isMDXComponent=!0}}]);