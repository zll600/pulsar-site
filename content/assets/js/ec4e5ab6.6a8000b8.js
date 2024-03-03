"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6776],{15680:(e,n,t)=>{t.d(n,{xA:()=>s,yg:()=>f});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),y=i,f=u["".concat(p,".").concat(y)]||u[y]||d[y]||o;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=y;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(58168),i=(t(96540),t(15680));const o={id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",sidebar_label:"Enable end-to-end-encryption",description:"Enable end-to-end-encryption for a function in Pulsar."},a=void 0,c={unversionedId:"functions-deploy-cluster-encryption",id:"version-3.2.x/functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",description:"Enable end-to-end-encryption for a function in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-deploy-cluster-encryption.md",sourceDirName:".",slug:"/functions-deploy-cluster-encryption",permalink:"/docs/3.2.x/functions-deploy-cluster-encryption",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-deploy-cluster-encryption.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-deploy-cluster-encryption",title:"Enable end-to-end-encryption",sidebar_label:"Enable end-to-end-encryption",description:"Enable end-to-end-encryption for a function in Pulsar."},sidebar:"docsSidebar",previous:{title:"Enable parallel processing",permalink:"/docs/3.2.x/functions-deploy-cluster-parallelism"},next:{title:"Enable package management service",permalink:"/docs/3.2.x/functions-deploy-cluster-package"}},p={},l=[],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"To enable end-to-end ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.2.x/security-encryption"},"encryption"),", you can specify ",(0,i.yg)("inlineCode",{parentName:"p"},"--producer-config")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"--input-specs")," in the ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/pulsar-admin/"},(0,i.yg)("inlineCode",{parentName:"a"},"pulsar-admin"))," CLI with the public and private key pair configured by the application. Only the consumers with a valid key can decrypt the encrypted messages."),(0,i.yg)("p",null,"The encryption/decryption relevant configuration ",(0,i.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-cli"},(0,i.yg)("inlineCode",{parentName:"a"},"CryptoConfig"))," is included in both ",(0,i.yg)("inlineCode",{parentName:"p"},"ProducerConfig")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"inputSpecs"),". The specific configurable fields about ",(0,i.yg)("inlineCode",{parentName:"p"},"CryptoConfig")," are as follows:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"public class CryptoConfig {\n    private String cryptoKeyReaderClassName;\n    private Map<String, Object> cryptoKeyReaderConfig;\n\n    private String[] encryptionKeys;\n    private ProducerCryptoFailureAction producerCryptoFailureAction;\n\n    private ConsumerCryptoFailureAction consumerCryptoFailureAction;\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"producerCryptoFailureAction")," defines the action that a producer takes if it fails to encrypt the data. Available options are ",(0,i.yg)("inlineCode",{parentName:"li"},"FAIL")," or ",(0,i.yg)("inlineCode",{parentName:"li"},"SEND"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"consumerCryptoFailureAction")," defines the action that a consumer takes if it fails to decrypt the recieved data. Available options are ",(0,i.yg)("inlineCode",{parentName:"li"},"FAIL"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"DISCARD"),", or ",(0,i.yg)("inlineCode",{parentName:"li"},"CONSUME"),".")),(0,i.yg)("p",null,"For more information about these options, refer to ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/client/client-configuration-producer"},"producer configurations")," and ",(0,i.yg)("a",{parentName:"p",href:"pathname:///reference/#/3.2.x/client/client-configuration-consumer"},"consumer configurations"),"."))}d.isMDXComponent=!0}}]);