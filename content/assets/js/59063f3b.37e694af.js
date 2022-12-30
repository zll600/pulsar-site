"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[6325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30051:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare"},o=void 0,i={unversionedId:"helm-prepare",id:"version-2.5.1/helm-prepare",title:"Prepare Kubernetes resources",description:"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm chart. The following provides instructions to prepare the Kubernetes cluster before deploying the Pulsar Helm chart.",source:"@site/versioned_docs/version-2.5.1/helm-prepare.md",sourceDirName:".",slug:"/helm-prepare",permalink:"/docs/2.5.1/helm-prepare",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.5.1/helm-prepare.md",tags:[],version:"2.5.1",frontMatter:{id:"helm-prepare",title:"Prepare Kubernetes resources",sidebar_label:"Prepare"},sidebar:"version-2.5.1/docsSidebar",previous:{title:"Overview",permalink:"/docs/2.5.1/helm-overview"},next:{title:"Install ",permalink:"/docs/2.5.1/helm-install"}},s={},p=[{value:"Google Kubernetes Engine",id:"google-kubernetes-engine",level:2},{value:"Manual cluster creation",id:"manual-cluster-creation",level:3},{value:"Scripted cluster creation",id:"scripted-cluster-creation",level:3},{value:"Create cluster with local SSDs",id:"create-cluster-with-local-ssds",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"For a fully functional Pulsar cluster, you need a few resources before deploying the Apache Pulsar Helm chart. The following provides instructions to prepare the Kubernetes cluster before deploying the Pulsar Helm chart."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#google-kubernetes-engine"},"Google Kubernetes Engine"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#manual-cluster-creation"},"Manual cluster creation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#scripted-cluster-creation"},"Scripted cluster creation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#create-cluster-with-local-ssds"},"Create cluster with local SSDs"))))),(0,n.kt)("h2",{id:"google-kubernetes-engine"},"Google Kubernetes Engine"),(0,n.kt)("p",null,"To get started easier, a script is provided to create the cluster automatically. Alternatively, a cluster can be created manually as well."),(0,n.kt)("h3",{id:"manual-cluster-creation"},"Manual cluster creation"),(0,n.kt)("p",null,"To provision a Kubernetes cluster manually, follow the ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-cluster"},"GKE instructions"),"."),(0,n.kt)("h3",{id:"scripted-cluster-creation"},"Scripted cluster creation"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/streamnative/charts/tree/master/scripts/pulsar/gke_bootstrap_script.sh"},"bootstrap script")," has been created to automate much of the setup process for users on GCP/GKE."),(0,n.kt)("p",null,"The script can:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a new GKE cluster."),(0,n.kt)("li",{parentName:"ol"},"Allow the cluster to modify DNS (Domain Name Server) records."),(0,n.kt)("li",{parentName:"ol"},"Setup ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl"),", and connect it to the cluster.")),(0,n.kt)("p",null,"Google Cloud SDK is a dependency of this script, so ensure it is ",(0,n.kt)("a",{parentName:"p",href:"/docs/2.5.1/helm-tools#connect-to-a-gke-cluster"},"set up correctly")," for the script to work."),(0,n.kt)("p",null,"The script reads various parameters from environment variables and an argument ",(0,n.kt)("inlineCode",{parentName:"p"},"up")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"down")," for bootstrap and clean-up respectively."),(0,n.kt)("p",null,"The following table describes all variables."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Variable")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Description")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Default value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PROJECT"),(0,n.kt)("td",{parentName:"tr",align:null},"ID of your GCP project"),(0,n.kt)("td",{parentName:"tr",align:null},"No default value. It requires to be set.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CLUSTER_NAME"),(0,n.kt)("td",{parentName:"tr",align:null},"Name of the GKE cluster"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"pulsar-dev"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CONFDIR"),(0,n.kt)("td",{parentName:"tr",align:null},"Configuration directory to store Kubernetes configuration"),(0,n.kt)("td",{parentName:"tr",align:null},"${HOME}/.config/streamnative")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"INT_NETWORK"),(0,n.kt)("td",{parentName:"tr",align:null},"IP space to use within this cluster"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"default"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LOCAL_SSD_COUNT"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of local SSD counts"),(0,n.kt)("td",{parentName:"tr",align:null},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MACHINE_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"Type of machine to use for nodes"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"n1-standard-4"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NUM_NODES"),(0,n.kt)("td",{parentName:"tr",align:null},"Number of nodes to be created in each of the cluster's zones"),(0,n.kt)("td",{parentName:"tr",align:null},"4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PREEMPTIBLE"),(0,n.kt)("td",{parentName:"tr",align:null},"Create nodes using preemptible VM instances in the new cluster."),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"REGION"),(0,n.kt)("td",{parentName:"tr",align:null},"Compute region for the cluster"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"us-east1"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USE_LOCAL_SSD"),(0,n.kt)("td",{parentName:"tr",align:null},"Flag to create a cluster with local SSDs"),(0,n.kt)("td",{parentName:"tr",align:null},"false")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZONE"),(0,n.kt)("td",{parentName:"tr",align:null},"Compute zone for the cluster"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"us-east1-b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ZONE_EXTENSION"),(0,n.kt)("td",{parentName:"tr",align:null},"The extension (",(0,n.kt)("inlineCode",{parentName:"td"},"a"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"b"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"c"),") of the zone name of the cluster"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"b"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EXTRA_CREATE_ARGS"),(0,n.kt)("td",{parentName:"tr",align:null},"Extra arguments passed to create command"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"Run the script, by passing in your desired parameters. It can work with the default parameters except for ",(0,n.kt)("inlineCode",{parentName:"p"},"PROJECT")," which is required:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nPROJECT=<gcloud project id> scripts/pulsar/gke_bootstrap_script.sh up\n\n")),(0,n.kt)("p",null,"The script can also be used to clean up the created GKE resources."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nPROJECT=<gcloud project id> scripts/pulsar/gke_bootstrap_script.sh down\n\n")),(0,n.kt)("h4",{id:"create-cluster-with-local-ssds"},"Create cluster with local SSDs"),(0,n.kt)("p",null,"To install the Pulsar Helm chart using local persistent volumes, you need to create a GKE cluster with local SSDs. You can do so by specifying ",(0,n.kt)("inlineCode",{parentName:"p"},"USE_LOCAL_SSD")," to be ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," in the following command to create a Pulsar cluster with local SSDs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nPROJECT=<gcloud project id> USE_LOCAL_SSD=true LOCAL_SSD_COUNT=<local-ssd-count> scripts/pulsar/gke_bootstrap_script.sh up\n\n")))}c.isMDXComponent=!0}}]);