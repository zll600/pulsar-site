"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={id:"functions-worker",title:"Deploy and manage functions worker",sidebar_label:"Setup: Pulsar Functions Worker",original_id:"functions-worker"},i=void 0,l={unversionedId:"functions-worker",id:"version-2.9.x/functions-worker",title:"Deploy and manage functions worker",description:"Before using Pulsar Functions, you need to learn how to set up Pulsar Functions worker and how to configure Functions runtime.",source:"@site/versioned_docs/version-2.9.x/functions-worker.md",sourceDirName:".",slug:"/functions-worker",permalink:"/docs/2.9.x/functions-worker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/functions-worker.md",tags:[],version:"2.9.x",frontMatter:{id:"functions-worker",title:"Deploy and manage functions worker",sidebar_label:"Setup: Pulsar Functions Worker",original_id:"functions-worker"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Setup: Configure Functions runtime",permalink:"/docs/2.9.x/functions-runtime"},next:{title:"How-to: Develop",permalink:"/docs/2.9.x/functions-develop"}},s={},u=[{value:"Run Functions-worker with brokers",id:"run-functions-worker-with-brokers",level:2},{value:"Configure Functions-Worker to run with brokers",id:"configure-functions-worker-to-run-with-brokers",level:3},{value:"Configure Stateful-Functions to run with broker",id:"configure-stateful-functions-to-run-with-broker",level:3},{value:"Start Functions-worker with broker",id:"start-functions-worker-with-broker",level:3},{value:"Run Functions-worker separately",id:"run-functions-worker-separately",level:2},{value:"Configure Functions-worker to run separately",id:"configure-functions-worker-to-run-separately",level:3},{value:"Worker parameters",id:"worker-parameters",level:4},{value:"Function package parameter",id:"function-package-parameter",level:4},{value:"Function metadata parameter",id:"function-metadata-parameter",level:4},{value:"Security settings",id:"security-settings",level:4},{value:"Enable TLS transport encryption",id:"enable-tls-transport-encryption",level:5},{value:"Enable Authentication Provider",id:"enable-authentication-provider",level:5},{value:"Enable Authorization Provider",id:"enable-authorization-provider",level:5},{value:"Enable End-to-End Encryption",id:"enable-end-to-end-encryption",level:5},{value:"BookKeeper Authentication",id:"bookkeeper-authentication",level:4},{value:"Start Functions-worker",id:"start-functions-worker",level:3},{value:"Configure Proxies for Functions-workers",id:"configure-proxies-for-functions-workers",level:3},{value:"Compare the Run-with-Broker and Run-separately modes",id:"compare-the-run-with-broker-and-run-separately-modes",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Before using Pulsar Functions, you need to learn how to set up Pulsar Functions worker and how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/functions-runtime"},"configure Functions runtime"),".  "),(0,o.kt)("p",null,"Pulsar ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," is a logic component to run Pulsar Functions in cluster mode. Two options are available, and you can select either based on your requirements. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-functions-worker-with-brokers"},"run with brokers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#run-functions-worker-separately"},"run it separately")," in a different broker")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--- Service Urls---")," lines in the following diagrams represent Pulsar service URLs that Pulsar client and admin use to connect to a Pulsar cluster.")),(0,o.kt)("h2",{id:"run-functions-worker-with-brokers"},"Run Functions-worker with brokers"),(0,o.kt)("p",null,"The following diagram illustrates the deployment of functions-workers running along with brokers."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"assets/functions-worker-corun.png",src:n(47524).Z,width:"718",height:"476"})),(0,o.kt)("p",null,"To enable functions-worker running as part of a broker, you need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"broker.conf")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"\nfunctionsWorkerEnabled=true\n\n")),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the functions-worker is started as part of a broker. You need to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file to customize your functions_worker."),(0,o.kt)("p",null,"Before you run Functions-worker with broker, you have to configure Functions-worker, and then start it with brokers."),(0,o.kt)("h3",{id:"configure-functions-worker-to-run-with-brokers"},"Configure Functions-Worker to run with brokers"),(0,o.kt)("p",null,"In this mode, most of the settings are already inherited from your broker configuration (for example, configurationStore settings, authentication settings, and so on) since ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," is running as part of the broker."),(0,o.kt)("p",null,"Pay attention to the following required settings when configuring functions-worker in this mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numFunctionPackageReplicas"),": The number of replicas to store function packages. The default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),", which is good for standalone deployment. For production deployment, to ensure high availability, set it to be larger than ",(0,o.kt)("inlineCode",{parentName:"li"},"2"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"initializedDlogMetadata"),": Whether to initialize distributed log metadata in runtime. If it is set to ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", you must ensure that it has been initialized by ",(0,o.kt)("inlineCode",{parentName:"li"},"bin/pulsar initialize-cluster-metadata")," command.")),(0,o.kt)("p",null,"If authentication is enabled on the BookKeeper cluster, configure the following BookKeeper authentication settings."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationPlugin"),": the BookKeeper client authentication plugin name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParametersName"),": the BookKeeper client authentication plugin parameters name."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParameters"),": the BookKeeper client authentication plugin parameters.")),(0,o.kt)("h3",{id:"configure-stateful-functions-to-run-with-broker"},"Configure Stateful-Functions to run with broker"),(0,o.kt)("p",null,"If you want to use Stateful-Functions related functions (for example,  ",(0,o.kt)("inlineCode",{parentName:"p"},"putState()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"queryState()")," related interfaces), follow steps below."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enable the ",(0,o.kt)("strong",{parentName:"p"},"streamStorage")," service in the BookKeeper."),(0,o.kt)("p",{parentName:"li"},"Currently, the service uses the NAR package, so you need to set the configuration in ",(0,o.kt)("inlineCode",{parentName:"p"},"bookkeeper.conf"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\nextraServerComponents=org.apache.bookkeeper.stream.server.StreamStorageLifecycleComponent\n\n")),(0,o.kt)("p",{parentName:"li"},"After starting bookie, use the following methods to check whether the streamStorage service is started correctly."),(0,o.kt)("p",{parentName:"li"},"Input:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\ntelnet localhost 4181\n\n")),(0,o.kt)("p",{parentName:"li"},"Output:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\nTrying 127.0.0.1...\nConnected to localhost.\nEscape character is '^]'.\n\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Turn on this function in ",(0,o.kt)("inlineCode",{parentName:"p"},"functions_worker.yml"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\nstateStorageServiceUrl: bk://<bk-service-url>:4181\n\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"bk-service-url")," is the service URL pointing to the BookKeeper table service."))),(0,o.kt)("h3",{id:"start-functions-worker-with-broker"},"Start Functions-worker with broker"),(0,o.kt)("p",null,"Once you have configured the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions_worker.yml")," file, you can start or restart your broker. "),(0,o.kt)("p",null,"And then you can use the following command to verify if ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," is running well."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\ncurl <broker-ip>:8080/admin/v2/worker/cluster\n\n")),(0,o.kt)("p",null,"After entering the command above, a list of active function workers in the cluster is returned. The output is similar to the following."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n[{"workerId":"<worker-id>","workerHostname":"<worker-hostname>","port":8080}]\n\n')),(0,o.kt)("h2",{id:"run-functions-worker-separately"},"Run Functions-worker separately"),(0,o.kt)("p",null,"This section illustrates how to run ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," as a separate process in separate machines."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"assets/functions-worker-separated.png",src:n(945).Z,width:"1121",height:"667"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In this mode, make sure ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", so you won't start ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," with brokers by mistake. Also, while accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," to manage any of the functions, the ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," CLI tool or any of the clients should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"workerHostname")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"workerPort")," that you set in ",(0,o.kt)("a",{parentName:"p",href:"#worker-parameters"},"Worker parameters")," to generate an ",(0,o.kt)("inlineCode",{parentName:"p"},"--admin-url"),".")),(0,o.kt)("h3",{id:"configure-functions-worker-to-run-separately"},"Configure Functions-worker to run separately"),(0,o.kt)("p",null,"To run function-worker separately, you have to configure the following parameters. "),(0,o.kt)("h4",{id:"worker-parameters"},"Worker parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workerId"),": The type is string. It is unique across clusters, which is used to identify a worker machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workerHostname"),": The hostname of the worker machine."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workerPort"),": The port that the worker server listens on. Keep it as default if you don't customize it."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workerPortTls"),": The TLS port that the worker server listens on. Keep it as default if you don't customize it.")),(0,o.kt)("h4",{id:"function-package-parameter"},"Function package parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numFunctionPackageReplicas"),": The number of replicas to store function packages. The default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,o.kt)("h4",{id:"function-metadata-parameter"},"Function metadata parameter"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsarServiceUrl"),": The Pulsar service URL for your broker cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsarWebServiceUrl"),": The Pulsar web service URL for your broker cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pulsarFunctionsCluster"),": Set the value to your Pulsar cluster name (same as the ",(0,o.kt)("inlineCode",{parentName:"li"},"clusterName")," setting in the broker configuration).")),(0,o.kt)("p",null,"If authentication is enabled for your broker cluster, you ",(0,o.kt)("em",{parentName:"p"},"should")," configure the authentication plugin and parameters for the functions worker to communicate with the brokers."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"brokerClientAuthenticationEnabled"),": Whether to enable the broker client authentication used by function workers to talk to brokers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientAuthenticationPlugin"),": The authentication plugin to be used by the Pulsar client used in worker service."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"clientAuthenticationParameters"),": The authentication parameter to be used by the Pulsar client used in worker service.")),(0,o.kt)("h4",{id:"security-settings"},"Security settings"),(0,o.kt)("p",null,"If you want to enable security on functions workers, you ",(0,o.kt)("em",{parentName:"p"},"should"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-tls-transport-encryption"},"Enable TLS transport encryption")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-authentication-provider"},"Enable Authentication Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-authorization-provider"},"Enable Authorization Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#enable-end-to-end-encryption"},"Enable End-to-End Encryption"))),(0,o.kt)("h5",{id:"enable-tls-transport-encryption"},"Enable TLS transport encryption"),(0,o.kt)("p",null,"To enable TLS transport encryption, configure the following settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nuseTLS: true\npulsarServiceUrl: pulsar+ssl://localhost:6651/\npulsarWebServiceUrl: https://localhost:8443\n\ntlsEnabled: true\ntlsCertificateFilePath: /path/to/functions-worker.cert.pem\ntlsKeyFilePath:         /path/to/functions-worker.key-pk8.pem\ntlsTrustCertsFilePath:  /path/to/ca.cert.pem\n\n// The path to trusted certificates used by the Pulsar client to authenticate with Pulsar brokers\nbrokerClientTrustCertsFilePath: /path/to/ca.cert.pem\n\n")),(0,o.kt)("p",null,"For details on TLS encryption, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-tls-transport"},"Transport Encryption using TLS"),"."),(0,o.kt)("h5",{id:"enable-authentication-provider"},"Enable Authentication Provider"),(0,o.kt)("p",null,"To enable authentication on Functions Worker, you need to configure the following settings."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Substitute the ",(0,o.kt)("em",{parentName:"p"},"providers list")," with the providers you want to enable.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nauthenticationEnabled: true\nauthenticationProviders: [ provider1, provider2 ]\n\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("em",{parentName:"p"},"TLS Authentication")," provider, follow the example below to add the necessary settings.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-tls-authentication"},"TLS Authentication")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nbrokerClientAuthenticationPlugin: org.apache.pulsar.client.impl.auth.AuthenticationTls\nbrokerClientAuthenticationParameters: tlsCertFile:/path/to/admin.cert.pem,tlsKeyFile:/path/to/admin.key-pk8.pem\n\nauthenticationEnabled: true\nauthenticationProviders: ['org.apache.pulsar.broker.authentication.AuthenticationProviderTls']\n\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("em",{parentName:"p"},"SASL Authentication")," provider, add ",(0,o.kt)("inlineCode",{parentName:"p"},"saslJaasClientAllowedIds")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"saslJaasBrokerSectionName"),"\nunder ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," if needed. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nproperties:\n  saslJaasClientAllowedIds: .*pulsar.*\n  saslJaasBrokerSectionName: Broker\n\n")),(0,o.kt)("p",null,"For ",(0,o.kt)("em",{parentName:"p"},"Token Authentication")," provider, add necessary settings for ",(0,o.kt)("inlineCode",{parentName:"p"},"properties")," if needed.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-jwt"},"Token Authentication")," for more details.\nNote: key files must be DER-encoded"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nproperties:\n  tokenSecretKey:       file://my/secret.key \n  # If using public/private\n  # tokenPublicKey:     file:///path/to/public.key\n\n")),(0,o.kt)("h5",{id:"enable-authorization-provider"},"Enable Authorization Provider"),(0,o.kt)("p",null,"To enable authorization on Functions Worker, you need to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizationEnabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"authorizationProvider")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"configurationStoreServers"),". The authentication provider connects to ",(0,o.kt)("inlineCode",{parentName:"p"},"configurationStoreServers")," to receive namespace policies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\nauthorizationEnabled: true\nauthorizationProvider: org.apache.pulsar.broker.authorization.PulsarAuthorizationProvider\nconfigurationStoreServers: <configuration-store-servers>\n\n")),(0,o.kt)("p",null,"You should also configure a list of superuser roles. The superuser roles are able to access any admin API. The following is a configuration example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"\nsuperUserRoles:\n  - role1\n  - role2\n  - role3\n\n")),(0,o.kt)("h5",{id:"enable-end-to-end-encryption"},"Enable End-to-End Encryption"),(0,o.kt)("p",null,"You can use the public and private key pair that the application configures to perform encryption. Only the consumers with a valid key can decrypt the encrypted messages."),(0,o.kt)("p",null,"To enable End-to-End encryption on Functions Worker, you can set it by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"--producer-config")," in the command line terminal, for more information, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/security-encryption"},"here"),"."),(0,o.kt)("p",null,"We include the relevant configuration information of ",(0,o.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"ProducerConfig"),". The specific configurable field information about ",(0,o.kt)("inlineCode",{parentName:"p"},"CryptoConfig")," is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\npublic class CryptoConfig {\n    private String cryptoKeyReaderClassName;\n    private Map<String, Object> cryptoKeyReaderConfig;\n\n    private String[] encryptionKeys;\n    private ProducerCryptoFailureAction producerCryptoFailureAction;\n\n    private ConsumerCryptoFailureAction consumerCryptoFailureAction;\n}\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"producerCryptoFailureAction"),": define the action if producer fail to encrypt data one of ",(0,o.kt)("inlineCode",{parentName:"li"},"FAIL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"SEND"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"consumerCryptoFailureAction"),": define the action if consumer fail to decrypt data one of ",(0,o.kt)("inlineCode",{parentName:"li"},"FAIL"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"DISCARD"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"CONSUME"),".")),(0,o.kt)("h4",{id:"bookkeeper-authentication"},"BookKeeper Authentication"),(0,o.kt)("p",null,"If authentication is enabled on the BookKeeper cluster, you need configure the BookKeeper authentication settings as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationPlugin"),": the plugin name of BookKeeper client authentication."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParametersName"),": the plugin parameters name of BookKeeper client authentication."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bookkeeperClientAuthenticationParameters"),": the plugin parameters of BookKeeper client authentication.")),(0,o.kt)("h3",{id:"start-functions-worker"},"Start Functions-worker"),(0,o.kt)("p",null,"Once you have finished configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions_worker.yml")," configuration file, you can start a ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," in the background by using ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Nohup"},"nohup")," with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-cli-tools#pulsar-daemon"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-daemon"))," CLI tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-daemon start functions-worker\n\n")),(0,o.kt)("p",null,"You can also start ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," in the foreground by using ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar")," CLI tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar functions-worker\n\n")),(0,o.kt)("h3",{id:"configure-proxies-for-functions-workers"},"Configure Proxies for Functions-workers"),(0,o.kt)("p",null,"When you are running ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," in a separate cluster, the admin rest endpoints are split into two clusters. ",(0,o.kt)("inlineCode",{parentName:"p"},"functions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"function-worker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sink")," endpoints are now served\nby the ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," cluster, while all the other remaining endpoints are served by the broker cluster.\nHence you need to configure your ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsar-admin")," to use the right service URL accordingly."),(0,o.kt)("p",null,"In order to address this inconvenience, you can start a proxy cluster for routing the admin rest requests accordingly. Hence you will have one central entry point for your admin service."),(0,o.kt)("p",null,"If you already have a proxy cluster, continue reading. If you haven't setup a proxy cluster before, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"http://pulsar.apache.org/docs/en/administration-proxy/"},"instructions")," to\nstart proxies.    "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"assets/functions-worker-separated.png",src:n(16795).Z,width:"1079",height:"912"})),(0,o.kt)("p",null,"To enable routing functions related admin requests to ",(0,o.kt)("inlineCode",{parentName:"p"},"functions-worker")," in a proxy, you can edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"proxy.conf")," file to modify the following settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},"\nfunctionWorkerWebServiceURL=<pulsar-functions-worker-web-service-url>\nfunctionWorkerWebServiceURLTLS=<pulsar-functions-worker-web-service-url>\n\n")),(0,o.kt)("h2",{id:"compare-the-run-with-broker-and-run-separately-modes"},"Compare the Run-with-Broker and Run-separately modes"),(0,o.kt)("p",null,"As described above, you can run Function-worker with brokers, or run it separately. And it is more convenient to run functions-workers along with brokers. However, running functions-workers in a separate cluster provides better resource isolation for running functions in ",(0,o.kt)("inlineCode",{parentName:"p"},"Process")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Thread")," mode."),(0,o.kt)("p",null,"Use which mode for your cases, refer to the following guidelines to determine."),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run-with-Broker")," mode in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a) if resource isolation is not required when running functions in ",(0,o.kt)("inlineCode",{parentName:"li"},"Process")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Thread")," mode; "),(0,o.kt)("li",{parentName:"ul"},"b) if you configure the functions-worker to run functions on Kubernetes (where the resource isolation problem is addressed by Kubernetes).")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run-separately")," mode in the following cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a) you don't have a Kubernetes cluster; "),(0,o.kt)("li",{parentName:"ul"},"b) if you want to run functions and brokers separately.")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Error message: Namespace missing local cluster name in clusters list")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nFailed to get partitioned topic metadata: org.apache.pulsar.client.api.PulsarClientException$BrokerMetadataException: Namespace missing local cluster name in clusters list: local_cluster=xyz ns=public/functions clusters=[standalone]\n\n")),(0,o.kt)("p",null,"The error message prompts when either of the cases occurs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a) a broker is started with ",(0,o.kt)("inlineCode",{parentName:"li"},"functionsWorkerEnabled=true"),", but the ",(0,o.kt)("inlineCode",{parentName:"li"},"pulsarFunctionsCluster")," is not set to the correct cluster in the ",(0,o.kt)("inlineCode",{parentName:"li"},"conf/functions_worker.yaml")," file;"),(0,o.kt)("li",{parentName:"ul"},"b) setting up a geo-replicated Pulsar cluster with ",(0,o.kt)("inlineCode",{parentName:"li"},"functionsWorkerEnabled=true"),", while brokers in one cluster run well, brokers in the other cluster do not work well.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Workaround")),(0,o.kt)("p",null,"If any of these cases happens, follow the instructions below to fix the problem:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable Functions Worker by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled=false"),", and restart brokers.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Get the current clusters list of ",(0,o.kt)("inlineCode",{parentName:"p"},"public/functions")," namespace."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces get-clusters public/functions\n\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Check if the cluster is in the clusters list. If the cluster is not in the list, add it to the list and update the clusters list.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\nbin/pulsar-admin namespaces set-clusters --clusters <existing-clusters>,<new-cluster> public/functions\n\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After setting the cluster successfully, enable functions worker by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"functionsWorkerEnabled=true"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the correct cluster name in ",(0,o.kt)("inlineCode",{parentName:"p"},"pulsarFunctionsCluster")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/functions_worker.yml")," file, and restart brokers."))))}c.isMDXComponent=!0},47524:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/functions-worker-corun-1e97464581d9ed837aad294946bd35f6.png"},16795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/functions-worker-separated-proxy-dbc4927f522e4ed19c925baca826e0cc.png"},945:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/functions-worker-separated-b484198781204f02277e700746966249.png"}}]);