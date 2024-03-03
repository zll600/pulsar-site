"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[22581],{15680:(e,a,n)=>{n.d(a,{xA:()=>g,yg:()=>c});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=t.createContext({}),s=function(e){var a=t.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},g=function(e){var a=s(e.components);return t.createElement(p.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,c=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?t.createElement(c,l(l({ref:a},g),{},{components:n})):t.createElement(c,l({ref:a},g))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48020:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=n(58168),r=(n(96540),n(15680));const i={id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager",description:"Get a comprehensive understanding of concepts, installation, and configuration of Pulsar Manager."},l=void 0,o={unversionedId:"administration-pulsar-manager",id:"version-3.2.x/administration-pulsar-manager",title:"Pulsar Manager",description:"Get a comprehensive understanding of concepts, installation, and configuration of Pulsar Manager.",source:"@site/versioned_docs/version-3.2.x/administration-pulsar-manager.md",sourceDirName:".",slug:"/administration-pulsar-manager",permalink:"/docs/3.2.x/administration-pulsar-manager",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/administration-pulsar-manager.md",tags:[],version:"3.2.x",frontMatter:{id:"administration-pulsar-manager",title:"Pulsar Manager",sidebar_label:"Pulsar Manager",description:"Get a comprehensive understanding of concepts, installation, and configuration of Pulsar Manager."},sidebar:"docsSidebar",previous:{title:"Geo-replication",permalink:"/docs/3.2.x/administration-geo"},next:{title:"Pulsar Shell",permalink:"/docs/3.2.x/administration-pulsar-shell"}},p={},s=[{value:"Install",id:"install",level:2},{value:"1. Quick Install",id:"1-quick-install",level:3},{value:"2. Configure Database or JWT authentication",id:"2-configure-database-or-jwt-authentication",level:3},{value:"Configure Database (optional)",id:"configure-database-optional",level:4},{value:"Enable JWT authentication (optional)",id:"enable-jwt-authentication-optional",level:4},{value:"3. Set the administrator account and password",id:"3-set-the-administrator-account-and-password",level:3},{value:"4. Configure the environment",id:"4-configure-the-environment",level:3},{value:"Other Installation",id:"other-installation",level:2},{value:"Bare-metal installation",id:"bare-metal-installation",level:3},{value:"Custom docker image installation",id:"custom-docker-image-installation",level:3},{value:"Configuration",id:"configuration",level:2}],g={toc:s},u="wrapper";function d(e){let{components:a,...n}=e;return(0,r.yg)(u,(0,t.A)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar Manager is a web-based GUI management and monitoring tool that helps administrators and users manage and monitor tenants, namespaces, topics, subscriptions, brokers, clusters, and so on, and supports dynamic configuration of multiple environments."),(0,r.yg)("h2",{id:"install"},"Install"),(0,r.yg)("p",null,"To install Pulsar Manager, complete the following steps."),(0,r.yg)("h3",{id:"1-quick-install"},"1. Quick Install"),(0,r.yg)("p",null,"The easiest way to use the Pulsar Manager is to run it inside a Docker container."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"docker pull apachepulsar/pulsar-manager:v0.3.0\ndocker run -it \\\n  -p 9527:9527 -p 7750:7750 \\\n  -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n  apachepulsar/pulsar-manager:v0.3.0\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Pulsar Manager is divided into front-end and back-end, the front-end service port is ",(0,r.yg)("inlineCode",{parentName:"li"},"9527")," and the back-end service port is ",(0,r.yg)("inlineCode",{parentName:"li"},"7750"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"SPRING_CONFIGURATION_FILE"),": Default configuration file for spring."),(0,r.yg)("li",{parentName:"ul"},"By default, Pulsar Manager uses the ",(0,r.yg)("inlineCode",{parentName:"li"},"herddb")," database. HerdDB is a SQL distributed database implemented in Java and can be found at ",(0,r.yg)("a",{parentName:"li",href:"https://herddb.org/"},"herddb.org")," for more information.")),(0,r.yg)("h3",{id:"2-configure-database-or-jwt-authentication"},"2. Configure Database or JWT authentication"),(0,r.yg)("h4",{id:"configure-database-optional"},"Configure Database (optional)"),(0,r.yg)("p",null,"If you have a large amount of data, you can use a custom database. Otherwise, some display errors may occur. For example, the topic information cannot be displayed when the topic exceeds 10000.\nThe following is an example of PostgreSQL."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Initialize database and table structures using the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/META-INF/sql/postgresql-schema.sql"},"file"),"."),(0,r.yg)("li",{parentName:"ol"},"Download and modify the ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/main/resources/application.properties"},"configuration file"),", then add the PostgreSQL configuration.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.driver-class-name=org.postgresql.Driver\nspring.datasource.url=jdbc:postgresql://127.0.0.1:5432/pulsar_manager\nspring.datasource.username=postgres\nspring.datasource.password=postgres\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Add a configuration mount and start with a docker image.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar-manager:v0.3.0\ndocker run -it \\\n    -p 9527:9527 -p 7750:7750 \\\n    -v /your-path/application.properties:/pulsar-manager/pulsar-manager/application.properties\n    -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n    apachepulsar/pulsar-manager:v0.3.0\n")),(0,r.yg)("h4",{id:"enable-jwt-authentication-optional"},"Enable JWT authentication (optional)"),(0,r.yg)("p",null,"If you want to turn on JWT authentication, configure the ",(0,r.yg)("inlineCode",{parentName:"p"},"application.properties")," file."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"backend.jwt.token=token\n\njwt.broker.token.mode=PRIVATE\njwt.broker.public.key=file:///path/broker-public.key\njwt.broker.private.key=file:///path/broker-private.key\n\nor\njwt.broker.token.mode=SECRET\njwt.broker.secret.key=file:///path/broker-secret.key\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"backend.jwt.token"),": token for the superuser. You need to configure this parameter during cluster initialization."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jwt.broker.token.mode"),": multiple modes of generating tokens, including PUBLIC, PRIVATE, and SECRET."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jwt.broker.public.key"),": configure this option if you use the PUBLIC mode."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jwt.broker.private.key"),": configure this option if you use the PRIVATE mode."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"jwt.broker.secret.key"),": configure this option if you use the SECRET mode.\nFor more information, see ",(0,r.yg)("a",{parentName:"li",href:"/docs/3.2.x/security-token-admin"},"Token Authentication Admin of Pulsar"),".")),(0,r.yg)("p",null,"Docker command to add profile and key files mount."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"docker pull apachepulsar/pulsar-manager:v0.3.0\ndocker run -it \\\n  -p 9527:9527 -p 7750:7750 \\\n  -v /your-path/application.properties:/pulsar-manager/pulsar-manager/application.properties\n  -v /your-path/private.key:/pulsar-manager/private.key\n  -e SPRING_CONFIGURATION_FILE=/pulsar-manager/pulsar-manager/application.properties \\\n  apachepulsar/pulsar-manager:v0.3.0\n")),(0,r.yg)("h3",{id:"3-set-the-administrator-account-and-password"},"3. Set the administrator account and password"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'CSRF_TOKEN=$(curl http://localhost:7750/pulsar-manager/csrf-token)\ncurl \\\n   -H \'X-XSRF-TOKEN: $CSRF_TOKEN\' \\\n   -H \'Cookie: XSRF-TOKEN=$CSRF_TOKEN;\' \\\n   -H "Content-Type: application/json" \\\n   -X PUT http://localhost:7750/pulsar-manager/users/superuser \\\n   -d \'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\'\n')),(0,r.yg)("p",null,"The request parameter in curl command:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{"name": "admin", "password": "apachepulsar", "description": "test", "email": "username@test.org"}\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"name")," is the Pulsar Manager login username, currently ",(0,r.yg)("inlineCode",{parentName:"li"},"admin"),"."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"password")," is the password of the current user of Pulsar Manager, currently ",(0,r.yg)("inlineCode",{parentName:"li"},"apachepulsar"),". The password should be more than or equal to 6 digits.")),(0,r.yg)("h3",{id:"4-configure-the-environment"},"4. Configure the environment"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Login to the system, Visit http://localhost:9527 to login. The current default account is  ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/apachepulsar"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Click "New Environment" button to add an environment.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Input the "Environment Name". The environment name is used for identifying an environment.')),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},'Input the "Service URL". The Service URL is the admin service URL of your Pulsar cluster.'))),(0,r.yg)("h2",{id:"other-installation"},"Other Installation"),(0,r.yg)("p",null,"There are some other installation methods."),(0,r.yg)("h3",{id:"bare-metal-installation"},"Bare-metal installation"),(0,r.yg)("p",null,"When using binary packages for direct deployment, you can follow these steps."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Download and unzip the binary package, which is available on the ",(0,r.yg)("a",{parentName:"p",href:"/download/"},"Pulsar Download")," page."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    wget https://dist.apache.org/repos/dist/release/pulsar/pulsar-manager/pulsar-manager-0.3.0/apache-pulsar-manager-0.3.0-bin.tar.gz\n    tar -zxvf apache-pulsar-manager-0.3.0-bin.tar.gz\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Extract the back-end service binary package and place the front-end resources in the back-end service directory."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"    cd pulsar-manager\n    tar -zxvf pulsar-manager.tar\n    cd pulsar-manager\n    cp -r ../dist ui\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Modify ",(0,r.yg)("inlineCode",{parentName:"p"},"application.properties")," configuration on demand."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"If you don't want to modify the ",(0,r.yg)("inlineCode",{parentName:"p"},"application.properties")," file, you can add the configuration to the startup parameters via ",(0,r.yg)("inlineCode",{parentName:"p"},". /bin/pulsar-manager --backend.jwt.token=token")," to add the configuration to the startup parameters. This is a capability of the spring boot framework."))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start Pulsar Manager"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"./bin/pulsar-manager\n")))),(0,r.yg)("h3",{id:"custom-docker-image-installation"},"Custom docker image installation"),(0,r.yg)("p",null,"You can find the docker image in the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/tree/master/docker"},"Docker Hub")," directory and build an image from the source code as well:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/apache/pulsar-manager\ncd pulsar-manager/front-end\nnpm install --save\nnpm run build:prod\ncd ..\n./gradlew build -x test\ncd ..\ndocker build -f docker/Dockerfile --build-arg BUILD_DATE=`date -u +"%Y-%m-%dT%H:%M:%SZ"` --build-arg VCS_REF=`latest` --build-arg VERSION=`latest` -t apachepulsar/pulsar-manager .\n')),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"application.properties"),(0,r.yg)("th",{parentName:"tr",align:null},"System env on Docker Image"),(0,r.yg)("th",{parentName:"tr",align:null},"Desc"),(0,r.yg)("th",{parentName:"tr",align:null},"Example"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"backend.jwt.token"),(0,r.yg)("td",{parentName:"tr",align:null},"JWT_TOKEN"),(0,r.yg)("td",{parentName:"tr",align:null},"token for the superuser. You need to configure this parameter during cluster initialization."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"token"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jwt.broker.token.mode"),(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"multiple modes of generating token, including PUBLIC, PRIVATE, and SECRET."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PUBLIC")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"PRIVATE")," or ",(0,r.yg)("inlineCode",{parentName:"td"},"SECRET"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jwt.broker.public.key"),(0,r.yg)("td",{parentName:"tr",align:null},"PUBLIC_KEY"),(0,r.yg)("td",{parentName:"tr",align:null},"configure this option if you use the PUBLIC mode."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"file:///path/broker-public.key"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jwt.broker.private.key"),(0,r.yg)("td",{parentName:"tr",align:null},"PRIVATE_KEY"),(0,r.yg)("td",{parentName:"tr",align:null},"configure this option if you use the PRIVATE mode."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"file:///path/broker-private.key"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"jwt.broker.secret.key"),(0,r.yg)("td",{parentName:"tr",align:null},"SECRET_KEY"),(0,r.yg)("td",{parentName:"tr",align:null},"configure this option if you use the SECRET mode."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"file:///path/broker-secret.key"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"spring.datasource.driver-class-name"),(0,r.yg)("td",{parentName:"tr",align:null},"DRIVER_CLASS_NAME"),(0,r.yg)("td",{parentName:"tr",align:null},"the driver class name of the database."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"org.postgresql.Driver"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"spring.datasource.url"),(0,r.yg)("td",{parentName:"tr",align:null},"URL"),(0,r.yg)("td",{parentName:"tr",align:null},"the JDBC URL of your  database."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"jdbc:postgresql://127.0.0.1:5432/pulsar_manager"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"spring.datasource.username"),(0,r.yg)("td",{parentName:"tr",align:null},"USERNAME"),(0,r.yg)("td",{parentName:"tr",align:null},"the username of database."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgres"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"spring.datasource.password"),(0,r.yg)("td",{parentName:"tr",align:null},"PASSWORD"),(0,r.yg)("td",{parentName:"tr",align:null},"the password of database."),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"postgres"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"N/A"),(0,r.yg)("td",{parentName:"tr",align:null},"LOG_LEVEL"),(0,r.yg)("td",{parentName:"tr",align:null},"the level of log."),(0,r.yg)("td",{parentName:"tr",align:null},"DEBUG")))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"For more information about backend configurations, see ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/blob/master/src/README"},"here"),"."),(0,r.yg)("li",{parentName:"ul"},"For more information about frontend configurations, see ",(0,r.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/tree/master/front-end"},"here"),".")))}d.isMDXComponent=!0}}]);