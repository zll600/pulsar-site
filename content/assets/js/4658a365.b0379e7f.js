"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[1718],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),k=i,d=u["".concat(l,".").concat(k)]||u[k]||h[k]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},87666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"security-tls-keystore",title:"Using TLS with KeyStore configure",sidebar_label:"Using TLS with KeyStore configure",original_id:"security-tls-keystore"},o=void 0,s={unversionedId:"security-tls-keystore",id:"version-2.6.1/security-tls-keystore",title:"Using TLS with KeyStore configure",description:"Overview",source:"@site/versioned_docs/version-2.6.1/security-tls-keystore.md",sourceDirName:".",slug:"/security-tls-keystore",permalink:"/docs/2.6.1/security-tls-keystore",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.6.1/security-tls-keystore.md",tags:[],version:"2.6.1",frontMatter:{id:"security-tls-keystore",title:"Using TLS with KeyStore configure",sidebar_label:"Using TLS with KeyStore configure",original_id:"security-tls-keystore"},sidebar:"version-2.6.1/docsSidebar",previous:{title:"Authentication using TLS",permalink:"/docs/2.6.1/security-tls-authentication"},next:{title:"Authentication using JWT",permalink:"/docs/2.6.1/security-jwt"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"TLS encryption with KeyStore configure",id:"tls-encryption-with-keystore-configure",level:2},{value:"Generate TLS key and certificate",id:"generate-tls-key-and-certificate",level:3},{value:"Creating your own CA",id:"creating-your-own-ca",level:3},{value:"Signing the certificate",id:"signing-the-certificate",level:3},{value:"Configuring brokers",id:"configuring-brokers",level:3},{value:"Configuring Clients",id:"configuring-clients",level:3},{value:"TLS authentication with KeyStore configure",id:"tls-authentication-with-keystore-configure",level:2},{value:"broker authentication config",id:"broker-authentication-config",level:3},{value:"client authentication configuring",id:"client-authentication-configuring",level:3},{value:"Enabling TLS Logging",id:"enabling-tls-logging",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Apache Pulsar supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/security-tls-transport"},"TLS encryption")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/security-tls-authentication"},"TLS authentication")," between clients and Apache Pulsar service.\nBy default it uses PEM format file configuration. This page tries to describe use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_KeyStore"},"KeyStore")," type configure for TLS."),(0,i.kt)("h2",{id:"tls-encryption-with-keystore-configure"},"TLS encryption with KeyStore configure"),(0,i.kt)("h3",{id:"generate-tls-key-and-certificate"},"Generate TLS key and certificate"),(0,i.kt)("p",null,"The first step of deploying TLS is to generate the key and the certificate for each machine in the cluster.\nYou can use Java\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"keytool")," utility to accomplish this task. We will generate the key into a temporary keystore\ninitially for broker, so that we can export and sign it later with CA."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nkeytool -keystore broker.keystore.jks -alias localhost -validity {validity} -genkeypair -keyalg RSA\n\n")),(0,i.kt)("p",null,"You need to specify two parameters in the above command:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keystore"),": the keystore file that stores the certificate. The ",(0,i.kt)("em",{parentName:"li"},"keystore")," file contains the private key of\nthe certificate; hence, it needs to be kept safely."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"validity"),": the valid time of the certificate in days.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ensure that common name (CN) matches exactly with the fully qualified domain name (FQDN) of the server.\nThe client compares the CN with the DNS domain name to ensure that it is indeed connecting to the desired server, not a malicious one.")),(0,i.kt)("h3",{id:"creating-your-own-ca"},"Creating your own CA"),(0,i.kt)("p",null,"After the first step, each broker in the cluster has a public-private key pair, and a certificate to identify the machine.\nThe certificate, however, is unsigned, which means that an attacker can create such a certificate to pretend to be any machine."),(0,i.kt)("p",null,"Therefore, it is important to prevent forged certificates by signing them for each machine in the cluster.\nA ",(0,i.kt)("inlineCode",{parentName:"p"},"certificate authority (CA)")," is responsible for signing certificates. CA works likes a government that issues passports \u2014\nthe government stamps (signs) each passport so that the passport becomes difficult to forge. Other governments verify the stamps\nto ensure the passport is authentic. Similarly, the CA signs the certificates, and the cryptography guarantees that a signed\ncertificate is computationally difficult to forge. Thus, as long as the CA is a genuine and trusted authority, the clients have\nhigh assurance that they are connecting to the authentic machines."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl req -new -x509 -keyout ca-key -out ca-cert -days 365\n\n")),(0,i.kt)("p",null,"The generated CA is simply a ",(0,i.kt)("em",{parentName:"p"},"public-private")," key pair and certificate, and it is intended to sign other certificates."),(0,i.kt)("p",null,"The next step is to add the generated CA to the clients' truststore so that the clients can trust this CA:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nkeytool -keystore client.truststore.jks -alias CARoot -import -file ca-cert\n\n")),(0,i.kt)("p",null,"NOTE: If you configure the brokers to require client authentication by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"tlsRequireTrustedClientCertOnConnect")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," on the\nbroker configuration, then you must also provide a truststore for the brokers and it should have all the CA certificates that clients keys were signed by."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nkeytool -keystore broker.truststore.jks -alias CARoot -import -file ca-cert\n\n")),(0,i.kt)("p",null,"In contrast to the keystore, which stores each machine\u2019s own identity, the truststore of a client stores all the certificates\nthat the client should trust. Importing a certificate into one\u2019s truststore also means trusting all certificates that are signed\nby that certificate. As the analogy above, trusting the government (CA) also means trusting all passports (certificates) that\nit has issued. This attribute is called the chain of trust, and it is particularly useful when deploying TLS on a large BookKeeper cluster.\nYou can sign all certificates in the cluster with a single CA, and have all machines share the same truststore that trusts the CA.\nThat way all machines can authenticate all other machines."),(0,i.kt)("h3",{id:"signing-the-certificate"},"Signing the certificate"),(0,i.kt)("p",null,"The next step is to sign all certificates in the keystore with the CA we generated. First, you need to export the certificate from the keystore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nkeytool -keystore broker.keystore.jks -alias localhost -certreq -file cert-file\n\n")),(0,i.kt)("p",null,"Then sign it with the CA:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nopenssl x509 -req -CA ca-cert -CAkey ca-key -in cert-file -out cert-signed -days {validity} -CAcreateserial -passin pass:{ca-password}\n\n")),(0,i.kt)("p",null,"Finally, you need to import both the certificate of the CA and the signed certificate into the keystore:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\nkeytool -keystore broker.keystore.jks -alias CARoot -import -file ca-cert\nkeytool -keystore broker.keystore.jks -alias localhost -import -file cert-signed\n\n")),(0,i.kt)("p",null,"The definitions of the parameters are the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"keystore"),": the location of the keystore"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ca-cert"),": the certificate of the CA"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ca-key"),": the private key of the CA"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"ca-password"),": the passphrase of the CA"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cert-file"),": the exported, unsigned certificate of the broker"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cert-signed"),": the signed certificate of the broker")),(0,i.kt)("h3",{id:"configuring-brokers"},"Configuring brokers"),(0,i.kt)("p",null,"Brokers enable TLS by provide valid ",(0,i.kt)("inlineCode",{parentName:"p"},"brokerServicePortTls")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"webServicePortTls"),", and also need set ",(0,i.kt)("inlineCode",{parentName:"p"},"tlsEnabledWithKeyStore")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," for using KeyStore type configuration.\nBesides this, KeyStore path,  KeyStore password, TrustStore path, and TrustStore password need to provided.\nAnd since broker will create internal client/admin client to communicate with other brokers, user also need to provide config for them, this is similar to how user config the outside client/admin-client.\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"tlsRequireTrustedClientCertOnConnect")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", broker will reject the Connection if the Client Certificate is not trusted. "),(0,i.kt)("p",null,"The following TLS configs are needed on the broker side:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\ntlsEnabledWithKeyStore=true\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n\n")),(0,i.kt)("p",null,"NOTE: it is important to restrict access to the store files via filesystem permissions."),(0,i.kt)("p",null,"Optional settings that may worth consider:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"tlsClientAuthentication=false: Enable/Disable using TLS for authentication. This config when enabled will authenticate the other end\nof the communication channel. It should be enabled on both brokers and clients for mutual TLS."),(0,i.kt)("li",{parentName:"ol"},"tlsCiphers=","[TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256]",", A cipher suite is a named combination of authentication, encryption, MAC and key exchange\nalgorithm used to negotiate the security settings for a network connection using TLS network protocol. By default,\nit is null. ",(0,i.kt)("a",{parentName:"li",href:"https://www.openssl.org/docs/man1.0.2/apps/ciphers.html"},"OpenSSL Ciphers"),(0,i.kt)("a",{parentName:"li",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites"},"JDK Ciphers")),(0,i.kt)("li",{parentName:"ol"},"tlsProtocols=","[TLSv1.2,TLSv1.1,TLSv1]"," (list out the TLS protocols that you are going to accept from clients).\nBy default, it is not set.")),(0,i.kt)("h3",{id:"configuring-clients"},"Configuring Clients"),(0,i.kt)("p",null,"This is similar to ","[TLS encryption configuing for client with PEM type]","(/docs/2.6.1/security-tls-transport#Client configuration).\nFor a a minimal configuration, user need to provide the TrustStore information."),(0,i.kt)("p",null,"e.g. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools"},"Command-line tools")," like ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-perf"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-client"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for java client"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .build();\n\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for java admin client"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n                .useKeyStoreTls(true)\n                .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n                .tlsTrustStorePassword("clientpw")\n                .allowTlsInsecureConnection(false)\n                .build();\n\n')),(0,i.kt)("h2",{id:"tls-authentication-with-keystore-configure"},"TLS authentication with KeyStore configure"),(0,i.kt)("p",null,"This similar to ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/security-tls-authentication"},"TLS authentication with PEM type")),(0,i.kt)("h3",{id:"broker-authentication-config"},"broker authentication config"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"broker.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"\n# Configuration to enable authentication\nauthenticationEnabled=true\nauthenticationProviders=org.apache.pulsar.broker.authentication.AuthenticationProviderTls\n\n# this should be the CN for one of client keystore.\nsuperUserRoles=admin\n\n# Enable KeyStore type\ntlsEnabledWithKeyStore=true\nrequireTrustedClientCertOnConnect=true\n\n# key store\ntlsKeyStoreType=JKS\ntlsKeyStore=/var/private/tls/broker.keystore.jks\ntlsKeyStorePassword=brokerpw\n\n# trust store\ntlsTrustStoreType=JKS\ntlsTrustStore=/var/private/tls/broker.truststore.jks\ntlsTrustStorePassword=brokerpw\n\n# internal client/admin-client config\nbrokerClientTlsEnabled=true\nbrokerClientTlsEnabledWithKeyStore=true\nbrokerClientTlsTrustStoreType=JKS\nbrokerClientTlsTrustStore=/var/private/tls/client.truststore.jks\nbrokerClientTlsTrustStorePassword=clientpw\n# internal auth config\nbrokerClientAuthenticationPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nbrokerClientAuthenticationParameters=keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw\n# currently websocket not support keystore type\nwebSocketServiceEnabled=false\n\n")),(0,i.kt)("h3",{id:"client-authentication-configuring"},"client authentication configuring"),(0,i.kt)("p",null,"Besides the TLS encryption configuring. The main work is configuring the KeyStore, which contains a valid CN as client role, for client."),(0,i.kt)("p",null,"e.g. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for ",(0,i.kt)("a",{parentName:"p",href:"/docs/2.6.1/reference-cli-tools"},"Command-line tools")," like ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-admin"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-admin")),", ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-perf"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-perf")),", and ",(0,i.kt)("a",{parentName:"p",href:"reference-cli-tools#pulsar-client"},(0,i.kt)("inlineCode",{parentName:"a"},"pulsar-client"))," use the ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/client.conf")," config file in a Pulsar installation."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'\nwebServiceUrl=https://broker.example.com:8443/\nbrokerServiceUrl=pulsar+ssl://broker.example.com:6651/\nuseKeyStoreTls=true\ntlsTrustStoreType=JKS\ntlsTrustStorePath=/var/private/tls/client.truststore.jks\ntlsTrustStorePassword=clientpw\nauthPlugin=org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls\nauthParams={"keyStoreType":"JKS","keyStorePath":"/path/to/keystorefile","keyStorePassword":"keystorepw"}\n\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for java client"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\nimport org.apache.pulsar.client.api.PulsarClient;\n\nPulsarClient client = PulsarClient.builder()\n    .serviceUrl("pulsar+ssl://broker.example.com:6651/")\n    .enableTls(true)\n    .useKeyStoreTls(true)\n    .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n    .tlsTrustStorePassword("clientpw")\n    .allowTlsInsecureConnection(false)\n    .authentication(\n            "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n            "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n    .build();\n\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"for java admin client"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'\n    PulsarAdmin amdin = PulsarAdmin.builder().serviceHttpUrl("https://broker.example.com:8443")\n        .useKeyStoreTls(true)\n        .tlsTrustStorePath("/var/private/tls/client.truststore.jks")\n        .tlsTrustStorePassword("clientpw")\n        .allowTlsInsecureConnection(false)\n        .authentication(\n               "org.apache.pulsar.client.impl.auth.AuthenticationKeyStoreTls",\n               "keyStoreType:JKS,keyStorePath:/var/private/tls/client.keystore.jks,keyStorePassword:clientpw")\n        .build();\n\n')))),(0,i.kt)("h2",{id:"enabling-tls-logging"},"Enabling TLS Logging"),(0,i.kt)("p",null,"You can enable TLS debug logging at the JVM level by starting the brokers and/or clients with ",(0,i.kt)("inlineCode",{parentName:"p"},"javax.net.debug")," system property. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\n-Djavax.net.debug=all\n\n")),(0,i.kt)("p",null,"You can find more details on this in ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"Oracle documentation")," on ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/ReadDebug.html"},"debugging SSL/TLS connections"),"."))}u.isMDXComponent=!0}}]);