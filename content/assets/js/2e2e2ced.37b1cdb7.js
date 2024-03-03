"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[51749],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(96540),a=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>C});var r=n(58168),a=n(96540),o=n(20053),i=n(23104),s=n(56347),u=n(57485),l=n(31682),c=n(89466);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,l]=g({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),y=(()=>{const e=u??p;return f({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),m(e)}),[l,m,o]),tabValues:o}}var y=n(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:u,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.a_)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),r=l[n].value;r!==s&&(p(t),u(r))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:d},i,{className:(0,o.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.A)("tabs-container",v.tabList)},a.createElement(b,(0,r.A)({},e,t)),a.createElement(h,(0,r.A)({},e,t)))}function C(e){const t=(0,y.A)();return a.createElement(w,(0,r.A)({key:String(t)},e))}},67267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680)),o=n(11470),i=n(19365);const s={id:"functions-develop-security",title:"Enable security on functions",sidebar_label:"Enable security on functions",description:"Learn to enable security on functions in Pulsar."},u=void 0,l={unversionedId:"functions-develop-security",id:"version-3.2.x/functions-develop-security",title:"Enable security on functions",description:"Learn to enable security on functions in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-develop-security.md",sourceDirName:".",slug:"/functions-develop-security",permalink:"/docs/3.2.x/functions-develop-security",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-develop-security.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-develop-security",title:"Enable security on functions",sidebar_label:"Enable security on functions",description:"Learn to enable security on functions in Pulsar."},sidebar:"docsSidebar",previous:{title:"Use metrics to monitor functions",permalink:"/docs/3.2.x/functions-develop-metrics"},next:{title:"Configure state storage",permalink:"/docs/3.2.x/functions-develop-state"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Configure function workers",id:"step-1-configure-function-workers",level:2},{value:"Step 2: Get the secret",id:"step-2-get-the-secret",level:2}],d={toc:p},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(f,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"If you want to enable security on functions, complete the following steps."),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"If you want to enable security on functions, you need to ",(0,a.yg)("a",{parentName:"li",href:"/docs/3.2.x/functions-worker"},"enable security settings")," on function workers first.")),(0,a.yg)("h2",{id:"step-1-configure-function-workers"},"Step 1: Configure function workers"),(0,a.yg)("p",null,"To use the secret APIs from the context, you need to set the following two parameters for function workers."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"secretsProviderConfiguratorClassName")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"secretsProviderConfiguratorConfig"))),(0,a.yg)("p",null,"Pulsar Functions provided two types of ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," implementation and both can be used as the value of ",(0,a.yg)("inlineCode",{parentName:"p"},"secretsProviderConfiguratorClassName")," directly:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"org.apache.pulsar.functions.secretsproviderconfigurator.DefaultSecretsProviderConfigurator"),": This is a barebones version of a secrets provider which wires in ",(0,a.yg)("inlineCode",{parentName:"li"},"ClearTextSecretsProvider")," to the function instances."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"org.apache.pulsar.functions.secretsproviderconfigurator.KubernetesSecretsProviderConfigurator"),": This is used by default for running in Kubernetes and it uses Kubernetes built-in secrets and binds them as environment variables (via ",(0,a.yg)("inlineCode",{parentName:"li"},"EnvironmentBasedSecretsProvider"),") within the function container to ensure that the secrets are available to the function at runtime.")),(0,a.yg)("p",null,"Function workers use the ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsproviderconfigurator.SecretsProviderConfigurator")," interface to choose the ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProvider")," class name and its associated configurations at the time of starting the function instances."),(0,a.yg)("p",null,"Function instances use the ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.pulsar.functions.secretsprovider.SecretsProvider")," interface to fetch the secrets. The implementation that ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProvider")," uses is determined by ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator"),"."),(0,a.yg)("p",null,"You can also implement your own ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," if you want to use different ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProvider")," for function instances."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"Currently, only Java and Python runtime support ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProvider"),". The Java and Python Runtime have the following two providers:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"ClearTextSecretsProvider (default for ",(0,a.yg)("inlineCode",{parentName:"li"},"DefaultSecretsProviderConfigurator"),")"),(0,a.yg)("li",{parentName:"ul"},"EnvironmentBasedSecretsProvider (default for ",(0,a.yg)("inlineCode",{parentName:"li"},"KubernetesSecretsProviderConfigurator"),")"))),(0,a.yg)("h2",{id:"step-2-get-the-secret"},"Step 2: Get the secret"),(0,a.yg)("p",null,"Once ",(0,a.yg)("inlineCode",{parentName:"p"},"SecretsProviderConfigurator")," is set, you can get the secret using the ",(0,a.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-concepts#context"},(0,a.yg)("inlineCode",{parentName:"a"},"Context"))," object as follows."),(0,a.yg)(o.A,{groupId:"lang-choice",defaultValue:"Java",values:[{label:"Java",value:"Java"},{label:"Python",value:"Python"}],mdxType:"Tabs"},(0,a.yg)(i.A,{value:"Java",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},'import org.apache.pulsar.functions.api.Context;\nimport org.apache.pulsar.functions.api.Function;\nimport org.slf4j.Logger;\n\npublic class GetSecretValueFunction implements Function<String, Void> {\n\n    @Override\n    public Void process(String input, Context context) throws Exception {\n        Logger LOG = context.getLogger();\n        String secretValue = context.getSecret(input);\n\n        if (!secretValue.isEmpty()) {\n            LOG.info("The secret {} has value {}", input, secretValue);\n        } else {\n            LOG.warn("No secret with key {}", input);\n        }\n\n        return null;\n    }\n}\n'))),(0,a.yg)(i.A,{value:"Python",mdxType:"TabItem"},(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},"from pulsar import Function\n\nclass GetSecretValueFunction(Function):\n    def process(self, input, context):\n        logger = context.get_logger()\n        secret_value = context.get_secret(input)\n        if secret_provider is None:\n            logger.warn('No secret with key {0} '.format(input))\n        else:\n            logger.info(\"The secret {0} has value {1}\".format(input, secret_value))\n")))))}g.isMDXComponent=!0}}]);