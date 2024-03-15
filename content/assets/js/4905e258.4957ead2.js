"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66641],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>y});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(t),d=n,y=u["".concat(s,".").concat(d)]||u[d]||g[d]||l;return t?r.createElement(y,p(p({ref:a},c),{},{components:t})):r.createElement(y,p({ref:a},c))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33741:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=t(58168),n=(t(96540),t(15680));const l={id:"client-libraries-cpp-setup",title:"Set up Pulsar C++ client",sidebar_label:"Set up",description:"Learn how to set up C++ client library in Pulsar."},p=void 0,i={unversionedId:"client-libraries-cpp-setup",id:"client-libraries-cpp-setup",title:"Set up Pulsar C++ client",description:"Learn how to set up C++ client library in Pulsar.",source:"@site/docs/client-libraries-cpp-setup.md",sourceDirName:".",slug:"/client-libraries-cpp-setup",permalink:"/docs/next/client-libraries-cpp-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/client-libraries-cpp-setup.md",tags:[],version:"current",frontMatter:{id:"client-libraries-cpp-setup",title:"Set up Pulsar C++ client",sidebar_label:"Set up",description:"Learn how to set up C++ client library in Pulsar."},sidebar:"docsSidebar",previous:{title:"C++ client",permalink:"/docs/next/client-libraries-cpp"},next:{title:"Initialize",permalink:"/docs/next/client-libraries-cpp-initialize"}},s={},o=[{value:"Step 1: Install C++ client library",id:"step-1-install-c-client-library",level:2},{value:"Brew",id:"brew",level:3},{value:"Deb",id:"deb",level:3},{value:"RPM",id:"rpm",level:3},{value:"APK",id:"apk",level:3},{value:"Step 2: Connect to Pulsar cluster",id:"step-2-connect-to-pulsar-cluster",level:2}],c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.yg)("div",a)},u=c("Tabs"),g=c("TabItem"),d={toc:o},y="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(y,(0,r.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"To set up C++ client library in Pulsar, complete the following steps."),(0,n.yg)("h2",{id:"step-1-install-c-client-library"},"Step 1: Install C++ client library"),(0,n.yg)("p",null,"Use one of the following methods to install a Pulsar C++ client."),(0,n.yg)("h3",{id:"brew"},"Brew"),(0,n.yg)("p",null,"Use ",(0,n.yg)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install the latest tagged version with the library and headers:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"brew install libpulsar\n")),(0,n.yg)("h3",{id:"deb"},"Deb"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download any one of the Deb packages:"),(0,n.yg)(u,{mdxType:"Tabs"},(0,n.yg)(g,{value:"client",mdxType:"TabItem"},(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.5.0/deb-x86_64/apache-pulsar-client.deb\n")),(0,n.yg)("p",{parentName:"li"},"This package contains shared libraries ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,n.yg)(g,{value:"client-devel",mdxType:"TabItem"},(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.5.0/deb-x86_64/apache-pulsar-client-dev.deb\n")),(0,n.yg)("p",{parentName:"li"},"This package contains static libraries: ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a"),", and C/C++ headers.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Install the package using the following command:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"apt install ./apache-pulsar-client*.deb\n")))),(0,n.yg)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,n.yg)("h3",{id:"rpm"},"RPM"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download any one of the RPM packages:"),(0,n.yg)(u,{mdxType:"Tabs"},(0,n.yg)(g,{value:"client",mdxType:"TabItem"},(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.5.0/rpm-x86_64/x86_64/apache-pulsar-client-3.5.0-1.x86_64.rpm\n")),(0,n.yg)("p",{parentName:"li"},"This package contains shared libraries: ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarnossl.so"),".")),(0,n.yg)(g,{value:"client-debuginfo",mdxType:"TabItem"},(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.5.0/rpm-x86_64/x86_64/apache-pulsar-client-debuginfo-3.5.0-1.x86_64.rpm\n")),(0,n.yg)("p",{parentName:"li"},"This package contains debug symbols for ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.so"),".")),(0,n.yg)(g,{value:"client-devel",mdxType:"TabItem"},(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://archive.apache.org/dist/pulsar/pulsar-client-cpp-3.5.0/rpm-x86_64/x86_64/apache-pulsar-client-devel-3.5.0-1.x86_64.rpm\n")),(0,n.yg)("p",{parentName:"li"},"This package contains static libraries: ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsar.a"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"libpulsarwithdeps.a")," and C/C++ headers.")))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Install the package using the following command:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"rpm -ivh apache-pulsar-client*.rpm\n")))),(0,n.yg)("p",null,"Now, you can see Pulsar C++ client libraries installed under the ",(0,n.yg)("inlineCode",{parentName:"p"},"/usr/lib")," directory."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'If you get an error like "libpulsar.so: cannot open shared object file: No such file or directory" when starting a Pulsar client, you need to run ',(0,n.yg)("inlineCode",{parentName:"p"},"ldconfig")," first.")),(0,n.yg)("h3",{id:"apk"},"APK"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"apk add --allow-untrusted ./apache-pulsar-client-*.apk\n")),(0,n.yg)("h2",{id:"step-2-connect-to-pulsar-cluster"},"Step 2: Connect to Pulsar cluster"),(0,n.yg)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,n.yg)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,n.yg)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,n.yg)("inlineCode",{parentName:"p"},"6650"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,n.yg)("p",null,"If you have multiple brokers, separate ",(0,n.yg)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,n.yg)("p",null,"If you use ",(0,n.yg)("a",{parentName:"p",href:"/docs/next/security-tls-authentication"},"mTLS")," authentication, add ",(0,n.yg)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}m.isMDXComponent=!0}}]);