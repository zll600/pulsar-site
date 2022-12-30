"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[3277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?l.createElement(g,a(a({ref:t},c),{},{components:n})):l.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const o={id:"develop-cpp",title:"Building Pulsar C++ client",sidebar_label:"Building Pulsar C++ client",original_id:"develop-cpp"},a=void 0,i={unversionedId:"develop-cpp",id:"version-2.7.3/develop-cpp",title:"Building Pulsar C++ client",description:"Supported platforms",source:"@site/versioned_docs/version-2.7.3/develop-cpp.md",sourceDirName:".",slug:"/develop-cpp",permalink:"/docs/2.7.3/develop-cpp",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.7.3/develop-cpp.md",tags:[],version:"2.7.3",frontMatter:{id:"develop-cpp",title:"Building Pulsar C++ client",sidebar_label:"Building Pulsar C++ client",original_id:"develop-cpp"},sidebar:"version-2.7.3/docsSidebar",previous:{title:"Modular load manager",permalink:"/docs/2.7.3/develop-load-manager"},next:{title:"Terminology",permalink:"/docs/2.7.3/reference-terminology"}},p={},s=[{value:"Supported platforms",id:"supported-platforms",level:2},{value:"System requirements",id:"system-requirements",level:2},{value:"Compilation",id:"compilation",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"supported-platforms"},"Supported platforms"),(0,r.kt)("p",null,"The Pulsar C++ client has been successfully tested on ",(0,r.kt)("strong",{parentName:"p"},"MacOS")," and ",(0,r.kt)("strong",{parentName:"p"},"Linux"),"."),(0,r.kt)("h2",{id:"system-requirements"},"System requirements"),(0,r.kt)("p",null,"You need to have the following installed to use the C++ client:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/"},"CMake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.boost.org/"},"Boost")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/protocol-buffers/"},"Protocol Buffers")," 2.6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://logging.apache.org/log4cxx"},"Log4CXX")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.haxx.se/libcurl/"},"libcurl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/googletest"},"Google Test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-source-parsers/jsoncpp"},"JsonCpp"))),(0,r.kt)("h2",{id:"compilation"},"Compilation"),(0,r.kt)("p",null,"There are separate compilation instructions for ",(0,r.kt)("a",{parentName:"p",href:"#macos"},"MacOS")," and ",(0,r.kt)("a",{parentName:"p",href:"#linux"},"Linux"),". For both systems, start by cloning the Pulsar repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ git clone https://github.com/apache/pulsar\n\n")),(0,r.kt)("h3",{id:"linux"},"Linux"),(0,r.kt)("p",null,"First, install all of the necessary dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ apt-get install cmake libssl-dev libcurl4-openssl-dev liblog4cxx-dev \\\n  libprotobuf-dev protobuf-compiler libboost-all-dev google-mock libgtest-dev libjsoncpp-dev\n\n")),(0,r.kt)("p",null,"Then compile and install ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/google/googletest"},"Google Test"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n# libgtest-dev version is 1.18.0 or above\n$ cd /usr/src/googletest\n$ sudo cmake .\n$ sudo make\n$ sudo cp ./googlemock/libgmock.a ./googlemock/gtest/libgtest.a /usr/lib/\n\n# less than 1.18.0\n$ cd /usr/src/gtest\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgtest.a /usr/lib\n\n$ cd /usr/src/gmock\n$ sudo cmake .\n$ sudo make\n$ sudo cp libgmock.a /usr/lib\n\n")),(0,r.kt)("p",null,"Finally, compile the Pulsar client library for C++ inside the Pulsar repo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")),(0,r.kt)("p",null,"The resulting files, ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.so")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"libpulsar.a"),", will be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," folder of the repo while two tools, ",(0,r.kt)("inlineCode",{parentName:"p"},"perfProducer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"perfConsumer"),", will be placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"perf")," directory."),(0,r.kt)("h3",{id:"macos"},"MacOS"),(0,r.kt)("p",null,"First, install all of the necessary dependencies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n# OpenSSL installation\n$ brew install openssl\n$ export OPENSSL_INCLUDE_DIR=/usr/local/opt/openssl/include/\n$ export OPENSSL_ROOT_DIR=/usr/local/opt/openssl/\n\n# Protocol Buffers installation\n$ brew tap homebrew/versions\n$ brew install protobuf260\n$ brew install boost\n$ brew install log4cxx\n\n# Google Test installation\n$ git clone https://github.com/google/googletest.git\n$ cd googletest\n$ git checkout release-1.12.1\n$ cmake .\n$ make install\n\n")),(0,r.kt)("p",null,"Then compile the Pulsar client library in the repo that you cloned:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ cd pulsar-client-cpp\n$ cmake .\n$ make\n\n")))}u.isMDXComponent=!0}}]);