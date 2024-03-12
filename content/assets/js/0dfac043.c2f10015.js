"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[15578],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=p(n),c=r,y=g["".concat(i,".").concat(c)]||g[c]||d[c]||l;return n?t.createElement(y,o(o({ref:a},u),{},{components:n})):t.createElement(y,o({ref:a},u))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},47689:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},o=void 0,s={unversionedId:"getting-started-standalone",id:"version-2.10.x/getting-started-standalone",title:"Set up a standalone Pulsar locally",description:"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary RocksDB and BookKeeper components running inside of a single Java Virtual Machine (JVM) process.",source:"@site/versioned_docs/version-2.10.x/getting-started-standalone.md",sourceDirName:".",slug:"/getting-started-standalone",permalink:"/docs/2.10.x/getting-started-standalone",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/getting-started-standalone.md",tags:[],version:"2.10.x",frontMatter:{id:"getting-started-standalone",title:"Set up a standalone Pulsar locally",sidebar_label:"Run Pulsar locally",original_id:"getting-started-standalone"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Get Started",permalink:"/docs/2.10.x/getting-started-home"},next:{title:"Run Pulsar in Docker",permalink:"/docs/2.10.x/getting-started-docker"}},i={},p=[{value:"Install Pulsar standalone",id:"install-pulsar-standalone",level:2},{value:"System requirements",id:"system-requirements",level:3},{value:"Install JDK on M1",id:"install-jdk-on-m1",level:4},{value:"Install Pulsar using binary release",id:"install-pulsar-using-binary-release",level:3},{value:"What your package contains",id:"what-your-package-contains",level:4},{value:"Install builtin connectors (optional)",id:"install-builtin-connectors-optional",level:3},{value:"Install tiered storage offloaders (optional)",id:"install-tiered-storage-offloaders-optional",level:3},{value:"Start Pulsar standalone",id:"start-pulsar-standalone",level:2},{value:"Use Pulsar standalone",id:"use-pulsar-standalone",level:2},{value:"Consume a message",id:"consume-a-message",level:3},{value:"Produce a message",id:"produce-a-message",level:3},{value:"Stop Pulsar standalone",id:"stop-pulsar-standalone",level:2}],u={toc:p},g="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"For local development and testing, you can run Pulsar in standalone mode on your machine. The standalone mode includes a Pulsar broker, the necessary ",(0,r.yg)("a",{parentName:"p",href:"http://rocksdb.org/"},"RocksDB")," and BookKeeper components running inside of a single Java Virtual Machine (JVM) process."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("strong",{parentName:"p"},"Pulsar in production?"),"\nIf you're looking to run a full production Pulsar installation, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/deploy-bare-metal"},"Deploying a Pulsar instance")," guide.")),(0,r.yg)("h2",{id:"install-pulsar-standalone"},"Install Pulsar standalone"),(0,r.yg)("p",null,"This tutorial guides you through every step of installing Pulsar locally."),(0,r.yg)("h3",{id:"system-requirements"},"System requirements"),(0,r.yg)("p",null,"Currently, Pulsar is available for 64-bit ",(0,r.yg)("strong",{parentName:"p"},"macOS"),", ",(0,r.yg)("strong",{parentName:"p"},"Linux"),", and ",(0,r.yg)("strong",{parentName:"p"},"Windows"),". To use Pulsar, you need to install 64-bit JRE/JDK 8 or later versions"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"By default, Pulsar allocates 2G JVM heap memory to start. It can be changed in ",(0,r.yg)("inlineCode",{parentName:"p"},"conf/pulsar_env.sh")," file under ",(0,r.yg)("inlineCode",{parentName:"p"},"PULSAR_MEM"),". This is an extra option passed into JVM.")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Broker is only supported on 64-bit JVM.")),(0,r.yg)("h4",{id:"install-jdk-on-m1"},"Install JDK on M1"),(0,r.yg)("p",null,"In the current version, Pulsar uses a BookKeeper version which in turn uses RocksDB. RocksDB is compiled to work on x86 architecture and not ARM. Therefore, Pulsar can only work with x86 JDK. This is planned to be fixed in future versions of Pulsar."),(0,r.yg)("p",null,"One of the ways to easily install an x86 JDK is to use ",(0,r.yg)("a",{parentName:"p",href:"http://sdkman.io"},"SDKMan")," as outlined in the following steps:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Install ",(0,r.yg)("a",{parentName:"li",href:"http://sdkman.io"},"SDKMan"),".")),(0,r.yg)("p",null,"Follow the instructions on the SDKMan website."),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Turn on Rosetta2 compatibility for SDKMan by editing ",(0,r.yg)("inlineCode",{parentName:"li"},"~/.sdkman/etc/config")," and changing the following property from ",(0,r.yg)("inlineCode",{parentName:"li"},"false")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"true"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"sdkman_rosetta2_compatible=true\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Close the current shell / terminal window and open a new one."),(0,r.yg)("li",{parentName:"ol"},"Make sure you don't have any previously installed JVM of the same version by listing existing installed versions.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sdk list java|grep installed\n")),(0,r.yg)("p",null,"Example output:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},"               | >>> | 17.0.3.6.1   | amzn    | installed  | 17.0.3.6.1-amzn\n")),(0,r.yg)("p",null,"If you have any Java 17 version installed, uninstall it."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sdk uinstall java 17.0.3.6.1\n")),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Install any Java versions greater than Java 8.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sdk install java 17.0.3.6.1-amzn\n")),(0,r.yg)("h3",{id:"install-pulsar-using-binary-release"},"Install Pulsar using binary release"),(0,r.yg)("p",null,"To get started with Pulsar, download a binary tarball release in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror (",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.6/apache-pulsar-2.10.6-bin.tar.gz",download:!0},"Pulsar 2.10.6 binary release"),")")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.6/apache-pulsar-2.10.6-bin.tar.gz\n")))),(0,r.yg)("p",null,"After you download the tarball, untar it and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"cd")," command to navigate to the resulting directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tar xvfz apache-pulsar-2.10.6-bin.tar.gz\ncd apache-pulsar-2.10.6\n")),(0,r.yg)("h4",{id:"what-your-package-contains"},"What your package contains"),(0,r.yg)("p",null,"The Pulsar binary package initially contains the following directories:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"bin")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Pulsar's command-line tools, such as ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.10.x/reference-cli-tools#pulsar"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar"))," and ",(0,r.yg)("a",{parentName:"td",href:"pathname:///reference/#/2.10.x/pulsar-admin/"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-admin")),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"conf")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Configuration files for Pulsar, including ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.10.x/reference-configuration#broker"},"broker configuration")," and more.",(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note:")," Pulsar standalone uses RocksDB as the local metadata store and its configuration file path ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.10.x/reference-configuration"},(0,r.yg)("inlineCode",{parentName:"a"},"metadataStoreConfigPath"))," is configurable in the ",(0,r.yg)("inlineCode",{parentName:"td"},"standalone.conf")," file. For more information about the configurations of RocksDB, see ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/facebook/rocksdb/blob/main/examples/rocksdb_option_file_example.ini"},"here")," and related ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/facebook/rocksdb/wiki/RocksDB-Tuning-Guide"},"documentation"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"examples")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A Java JAR file containing ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.10.x/functions-overview"},"Pulsar Functions")," example.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"instances")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Artifacts created for ",(0,r.yg)("a",{parentName:"td",href:"/docs/2.10.x/functions-overview"},"Pulsar Functions"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"lib")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The ",(0,r.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," files used by Pulsar.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"licenses")),(0,r.yg)("td",{parentName:"tr",align:"left"},"License files, in the",(0,r.yg)("inlineCode",{parentName:"td"},".txt")," form, for various components of the Pulsar ",(0,r.yg)("a",{parentName:"td",href:"https://github.com/apache/pulsar"},"codebase"),".")))),(0,r.yg)("p",null,"These directories are created once you begin running Pulsar."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Directory"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Contains"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"data")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The data storage directory used by RocksDB and BookKeeper.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"logs")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Logs created by the installation.")))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you want to use built-in connectors and tiered storage offloaders, you can install them according to the following instructions\uff1a"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#install-builtin-connectors-optional"},"Install built-in connectors (optional)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),"\nOtherwise, skip this step and perform the next step ",(0,r.yg)("a",{parentName:"li",href:"#start-pulsar-standalone"},"Start Pulsar standalone"),". Pulsar can be successfully installed without installing built-in connectors and tiered storage offloaders."))),(0,r.yg)("h3",{id:"install-builtin-connectors-optional"},"Install builtin connectors (optional)"),(0,r.yg)("p",null,"Since ",(0,r.yg)("inlineCode",{parentName:"p"},"2.1.0-incubating")," release, Pulsar releases a separate binary distribution, containing all the ",(0,r.yg)("inlineCode",{parentName:"p"},"built-in")," connectors.\nTo enable those ",(0,r.yg)("inlineCode",{parentName:"p"},"builtin")," connectors, you can download the connectors tarball release in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.6/connectors",download:!0},"Pulsar IO Connectors 2.10.6 release"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.6/connectors/{connector}-2.10.6.nar\n")))),(0,r.yg)("p",null,"After you download the NAR file, copy the file to the ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors")," directory in the pulsar directory.\nFor example, if you download the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-io-aerospike-2.10.6.nar")," connector file, enter the following commands:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mkdir connectors\nmv pulsar-io-aerospike-2.10.6.nar connectors\n\nls connectors\npulsar-io-aerospike-2.10.6.nar\n...\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure ",(0,r.yg)("inlineCode",{parentName:"li"},"connectors")," tarball is unzipped in every pulsar directory of the broker (or in every pulsar directory of function-worker if you are running a separate worker cluster for Pulsar Functions)."),(0,r.yg)("li",{parentName:"ul"},"If you are ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.10.x/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.10.x/deploy-kubernetes"},"K8S")," or ",(0,r.yg)("a",{parentName:"li",href:"https://dcos.io/"},"DC/OS"),", you can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.10.x/io-overview#working-with-connectors"},"all built-in connectors"),"."))),(0,r.yg)("h3",{id:"install-tiered-storage-offloaders-optional"},"Install tiered storage offloaders (optional)"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Since ",(0,r.yg)("inlineCode",{parentName:"li"},"2.2.0")," release, Pulsar releases a separate binary distribution, containing the tiered storage offloaders."),(0,r.yg)("li",{parentName:"ul"},"To enable the tiered storage feature, follow the instructions below; otherwise skip this section."))),(0,r.yg)("p",null,"To get started with ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/concepts-tiered-storage"},"tiered storage offloaders"),", you need to download the offloaders tarball release on every broker node in one of the following ways:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Apache mirror ",(0,r.yg)("a",{href:"https://archive.apache.org/dist/pulsar/pulsar-2.10.6/apache-pulsar-offloaders-2.10.6-bin.tar.gz",download:!0},"Pulsar Tiered Storage Offloaders 2.10.6 release"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"/download"},"downloads page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"download from the Pulsar ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/releases/latest"},"releases page"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"use ",(0,r.yg)("a",{parentName:"p",href:"https://www.gnu.org/software/wget"},"wget"),":"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"wget https://archive.apache.org/dist/pulsar/pulsar-2.10.6/apache-pulsar-offloaders-2.10.6-bin.tar.gz\n")))),(0,r.yg)("p",null,"After you download the tarball, untar the offloaders package and copy the offloaders as ",(0,r.yg)("inlineCode",{parentName:"p"},"offloaders"),"\nin the pulsar directory:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"tar xvfz apache-pulsar-offloaders-2.10.6-bin.tar.gz\n\n// you will find a directory named `apache-pulsar-offloaders-2.10.6` in the pulsar directory\n// then copy the offloaders\n\nmv apache-pulsar-offloaders-2.10.6/offloaders offloaders\n\nls offloaders\ntiered-storage-jcloud-2.10.6.nar\n\n")),(0,r.yg)("p",null,"For more information on how to configure tiered storage, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/cookbooks-tiered-storage"},"Tiered storage cookbook"),"."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you are running Pulsar in a bare metal cluster, make sure that ",(0,r.yg)("inlineCode",{parentName:"li"},"offloaders")," tarball is unzipped in every broker's pulsar directory."),(0,r.yg)("li",{parentName:"ul"},"If you are ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.10.x/getting-started-docker"},"running Pulsar in Docker")," or deploying Pulsar using a docker image (e.g. ",(0,r.yg)("a",{parentName:"li",href:"/docs/2.10.x/deploy-kubernetes"},"K8S")," or DC/OS), you can use the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image instead of the ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar")," image. ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar/pulsar-all")," image has already bundled tiered storage offloaders."))),(0,r.yg)("h2",{id:"start-pulsar-standalone"},"Start Pulsar standalone"),(0,r.yg)("p",null,"Once you have an up-to-date local copy of the release, you can start a local cluster using the ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar"))," command, which is stored in the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory, and specifying that you want to start Pulsar in standalone mode."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar standalone\n")),(0,r.yg)("p",null,"If you have started Pulsar successfully, you will see ",(0,r.yg)("inlineCode",{parentName:"p"},"INFO"),"-level log messages like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"21:59:29.327 [DLM-/stream/storage-OrderedScheduler-3-0] INFO  org.apache.bookkeeper.stream.storage.impl.sc.StorageContainerImpl - Successfully started storage container (0).\n21:59:34.576 [main] INFO  org.apache.pulsar.broker.authentication.AuthenticationService - Authentication is disabled\n21:59:34.576 [main] INFO  org.apache.pulsar.websocket.WebSocketService - Pulsar WebSocket Service started\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The service is running on your terminal, which is under your direct control. If you need to run other commands, open a new terminal window."))),(0,r.yg)("p",null,"You can also run the service as a background process using the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/pulsar-daemon start standalone")," command. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-daemon"},"pulsar-daemon"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"By default, there is no encryption, authentication, or authorization configured. Apache Pulsar can be accessed from remote server without any authorization. Please do check ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/security-overview"},"Security Overview")," document to secure your deployment.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"When you start a local standalone cluster, a ",(0,r.yg)("inlineCode",{parentName:"p"},"public/default")," ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/concepts-messaging#namespaces"},"namespace")," is created automatically. The namespace is used for development purposes. All Pulsar topics are managed within namespaces. For more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/concepts-messaging#topics"},"Topics"),".")))),(0,r.yg)("h2",{id:"use-pulsar-standalone"},"Use Pulsar standalone"),(0,r.yg)("p",null,"Pulsar provides a CLI tool called ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-client"},(0,r.yg)("inlineCode",{parentName:"a"},"pulsar-client")),". The pulsar-client tool enables you to consume and produce messages to a Pulsar topic in a running cluster."),(0,r.yg)("h3",{id:"consume-a-message"},"Consume a message"),(0,r.yg)("p",null,"The following command consumes a message with the subscription name ",(0,r.yg)("inlineCode",{parentName:"p"},"first-subscription")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client consume my-topic -s "first-subscription"\n')),(0,r.yg)("p",null,"If the message has been successfully consumed, you will see a confirmation like the following in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"22:17:16.781 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully consumed\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"As you have noticed that we do not explicitly create the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic, from which we consume the message. When you consume a message from a topic that does not yet exist, Pulsar creates that topic for you automatically. Producing a message to a topic that does not exist will automatically create that topic for you as well.")),(0,r.yg)("h3",{id:"produce-a-message"},"Produce a message"),(0,r.yg)("p",null,"The following command produces a message saying ",(0,r.yg)("inlineCode",{parentName:"p"},"hello-pulsar")," to the ",(0,r.yg)("inlineCode",{parentName:"p"},"my-topic")," topic:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-client produce my-topic --messages "hello-pulsar"\n')),(0,r.yg)("p",null,"If the message has been successfully published to the topic, you will see a confirmation like the following in the ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client")," logs:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"22:21:08.693 [main] INFO  org.apache.pulsar.client.cli.PulsarClientTool - 1 messages successfully produced\n")),(0,r.yg)("h2",{id:"stop-pulsar-standalone"},"Stop Pulsar standalone"),(0,r.yg)("p",null,"Press ",(0,r.yg)("inlineCode",{parentName:"p"},"Ctrl+C")," to stop a local standalone Pulsar."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If the service runs as a background process using the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/pulsar-daemon start standalone")," command, then use the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin/pulsar-daemon stop standalone")," command to stop the service.\nFor more information, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.10.x/reference-cli-tools#pulsar-daemon"},"pulsar-daemon"),".")))}d.isMDXComponent=!0}}]);