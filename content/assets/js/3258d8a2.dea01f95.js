"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[60834],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>f});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},g=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return t?o.createElement(f,a(a({ref:n},g),{},{components:t})):o.createElement(f,a({ref:n},g))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=t(58168),i=(t(96540),t(15680));const r={id:"functions-debug-log-topic",title:"Debug with log topic",sidebar_label:"Debug with log topic",description:"Learn to debug functions with log topic in Pulsar."},a=void 0,l={unversionedId:"functions-debug-log-topic",id:"version-3.2.x/functions-debug-log-topic",title:"Debug with log topic",description:"Learn to debug functions with log topic in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-debug-log-topic.md",sourceDirName:".",slug:"/functions-debug-log-topic",permalink:"/docs/3.2.x/functions-debug-log-topic",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-debug-log-topic.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-debug-log-topic",title:"Debug with log topic",sidebar_label:"Debug with log topic",description:"Learn to debug functions with log topic in Pulsar."},sidebar:"docsSidebar",previous:{title:"Debug with localrun mode",permalink:"/docs/3.2.x/functions-debug-localrun"},next:{title:"Debug with Functions CLI",permalink:"/docs/3.2.x/functions-debug-cli"}},c={},s=[],g={toc:s},u="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(u,(0,o.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"When using Pulsar Functions, you can generate logs predefined in functions to a specified log topic and configure consumers to consume messages from the log topic."),(0,i.yg)("p",null,"For example, the following function logs either a WARNING-level or INFO-level log based on whether the incoming string contains the word ",(0,i.yg)("inlineCode",{parentName:"p"},"danger")," or not."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class LoggingFunction implements Function<String, Void> {\n    @Override\n    public void apply(String input, Context context) {\n        Logger LOG = context.getLogger();\n        String messageId = new String(context.getMessageId());\n\n        if (input.contains("danger")) {\n            LOG.warn("A warning was received in message {}", messageId);\n        } else {\n            LOG.info("Message {} received\\nContent: {}", messageId, input);\n        }\n\n        return null;\n    }\n}\n')),(0,i.yg)("p",null,"As shown in the example, you can get the logger via ",(0,i.yg)("inlineCode",{parentName:"p"},"context.getLogger()")," and assign the logger to the ",(0,i.yg)("inlineCode",{parentName:"p"},"LOG")," variable of ",(0,i.yg)("inlineCode",{parentName:"p"},"slf4j"),", so you can define your desired logs in a function using the ",(0,i.yg)("inlineCode",{parentName:"p"},"LOG")," variable."),(0,i.yg)("p",null,"Meanwhile, you need to specify the topic that the logs can be produced to. The following is an example."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"bin/pulsar-admin functions create \\\n  --log-topic persistent://public/default/logging-function-logs \\\n  # Other function configs\n")),(0,i.yg)("p",null,"The message published to a log topic contains several properties:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"loglevel"),": the level of the log message."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"fqn"),": the fully qualified function name that pushes this log message."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"instance"),": the ID of the function instance that pushes this log message.")))}p.isMDXComponent=!0}}]);