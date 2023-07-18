"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[49954],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||l;return a?r.createElement(d,o(o({ref:t},p),{},{components:a})):r.createElement(d,o({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},72147:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"},o=void 0,i={unversionedId:"helm-overview",id:"version-2.4.1/helm-overview",title:"Apache Pulsar Helm Chart",description:"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's Helm Chart.",source:"@site/versioned_docs/version-2.4.1/helm-overview.md",sourceDirName:".",slug:"/helm-overview",permalink:"/docs/2.4.1/helm-overview",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.4.1/helm-overview.md",tags:[],version:"2.4.1",frontMatter:{id:"helm-overview",title:"Apache Pulsar Helm Chart",sidebar_label:"Overview",original_id:"helm-overview"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Pulsar Helm chart quick start",id:"pulsar-helm-chart-quick-start",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Installation",id:"installation",level:2},{value:"Upgrading",id:"upgrading",level:2},{value:"Uninstall",id:"uninstall",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This is the official supported Helm chart to install Apache Pulsar on a cloud-native environment. It was enhanced based on StreamNative's ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/streamnative/charts"},"Helm Chart"),"."),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The Apache Pulsar Helm chart is one of the most convenient ways\nto operate Pulsar on Kubernetes. This chart contains all the required components to get started and can scale to large deployments."),(0,n.kt)("p",null,"This chart includes all the components for a complete experience, but each part can be configured to install separately."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pulsar core components:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZooKeeper"),(0,n.kt)("li",{parentName:"ul"},"Bookies"),(0,n.kt)("li",{parentName:"ul"},"Brokers"),(0,n.kt)("li",{parentName:"ul"},"Function workers"),(0,n.kt)("li",{parentName:"ul"},"Proxies"))),(0,n.kt)("li",{parentName:"ul"},"Control Center:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Pulsar Manager"),(0,n.kt)("li",{parentName:"ul"},"Prometheus"),(0,n.kt)("li",{parentName:"ul"},"Grafana"),(0,n.kt)("li",{parentName:"ul"},"Alert Manager")))),(0,n.kt)("p",null,"It includes support for:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Security",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Automatically provisioned TLS certs, using ",(0,n.kt)("a",{parentName:"li",href:"https://www.jetstack.io/"},"Jetstack"),"'s ",(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/"},"cert-manager"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"self-signed"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://letsencrypt.org/"},"Let's Encrypt")))),(0,n.kt)("li",{parentName:"ul"},"TLS Encryption",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Proxy"),(0,n.kt)("li",{parentName:"ul"},"Broker"),(0,n.kt)("li",{parentName:"ul"},"Toolset"),(0,n.kt)("li",{parentName:"ul"},"Bookie"),(0,n.kt)("li",{parentName:"ul"},"ZooKeeper"))),(0,n.kt)("li",{parentName:"ul"},"Authentication",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"JWT"))),(0,n.kt)("li",{parentName:"ul"},"Authorization"))),(0,n.kt)("li",{parentName:"ul"},"Storage",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Non-persistence storage"),(0,n.kt)("li",{parentName:"ul"},"Persistence Volume"),(0,n.kt)("li",{parentName:"ul"},"Local Persistent Volumes"))),(0,n.kt)("li",{parentName:"ul"},"Functions",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Kubernetes Runtime"),(0,n.kt)("li",{parentName:"ul"},"Process Runtime"),(0,n.kt)("li",{parentName:"ul"},"Thread Runtime"))),(0,n.kt)("li",{parentName:"ul"},"Operations",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Independent Image Versions for all components, enabling controlled upgrades")))),(0,n.kt)("h2",{id:"pulsar-helm-chart-quick-start"},"Pulsar Helm chart quick start"),(0,n.kt)("p",null,"For those looking to get up and running with these charts as fast\nas possible, in a ",(0,n.kt)("strong",{parentName:"p"},"non-production")," use case, we provide\na ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/getting-started-helm"},"quick start guide")," for Proof of Concept (PoC) deployments."),(0,n.kt)("p",null,"This guide walks the user through deploying these charts with default\nvalues & features, but ",(0,n.kt)("em",{parentName:"p"},"does not")," meet production ready requirements.\nIf you wish to deploy these charts into production under sustained load,\nyou should follow the complete ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-install"},"Installation Guide"),"."),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,"We've done our best to make these charts as seamless as possible,\noccasionally troubles do surface outside of our control. We've collected\ntips and tricks for troubleshooting common issues. Please examine these first before raising an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/issues/new/choose"},"issue"),", and feel free to add to them by raising a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar/compare"},"Pull Request"),"!"),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"The Apache Pulsar Helm chart contains all required dependencies."),(0,n.kt)("p",null,"If you are just looking to deploy a Proof of Concept for testing,\nwe strongly suggest you follow our ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/getting-started-helm"},"Quick Start Guide")," for your first iteration."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/helm-prepare"},"Preparation")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/2.4.1/helm-deploy"},"Deployment"))),(0,n.kt)("h2",{id:"upgrading"},"Upgrading"),(0,n.kt)("p",null,"Once your Pulsar Chart is installed, configuration changes and chart\nupdates should be done using ",(0,n.kt)("inlineCode",{parentName:"p"},"helm upgrade"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\ngit clone https://github.com/apache/pulsar-helm-chart\ncd pulsar-helm-chart\nhelm get values <pulsar-release-name> > pulsar.yaml\nhelm upgrade <pulsar-release-name> charts/pulsar -f pulsar.yaml\n\n")),(0,n.kt)("p",null,"For more detailed information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.4.1/helm-upgrade"},"Upgrading"),"."),(0,n.kt)("h2",{id:"uninstall"},"Uninstall"),(0,n.kt)("p",null,"To uninstall the Pulsar Chart, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nhelm delete <pulsar-release-name>\n\n")),(0,n.kt)("p",null,"For the purposes of continuity, these charts have some Kubernetes objects that are not removed when performing ",(0,n.kt)("inlineCode",{parentName:"p"},"helm delete"),".\nThese items we require you to ",(0,n.kt)("em",{parentName:"p"},"consciously")," remove them, as they affect re-deployment should you choose to."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PVCs for stateful data, which you must ",(0,n.kt)("em",{parentName:"li"},"consciously")," remove",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"ZooKeeper: This is your metadata."),(0,n.kt)("li",{parentName:"ul"},"BookKeeper: This is your data."),(0,n.kt)("li",{parentName:"ul"},"Prometheus: This is your metrics data, which can be safely removed."))),(0,n.kt)("li",{parentName:"ul"},"Secrets, if generated by our ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/prepare_helm_release.sh"},"prepare release script"),". They contain secret keys, tokens, etc. You can use ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/pulsar-helm-chart/blob/master/scripts/pulsar/cleanup_helm_release.sh"},"cleanup release script")," to remove these secrets and tokens as needed.")))}m.isMDXComponent=!0}}]);