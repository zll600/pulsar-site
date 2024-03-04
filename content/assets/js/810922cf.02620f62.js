"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[66156],{15680:(e,r,o)=>{o.d(r,{xA:()=>s,yg:()=>m});var t=o(96540);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function a(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function l(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?a(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function p(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),i=function(e){var r=t.useContext(c),o=r;return e&&(o="function"==typeof e?e(r):l(l({},r),e)),o},s=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=i(o),y=n,m=u["".concat(c,".").concat(y)]||u[y]||d[y]||a;return o?t.createElement(m,l(l({ref:r},s),{},{components:o})):t.createElement(m,l({ref:r},s))}));function m(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=y;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[u]="string"==typeof e?e:n,l[1]=p;for(var i=2;i<a;i++)l[i]=o[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,o)}y.displayName="MDXCreateElement"},69247:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var t=o(58168),n=(o(96540),o(15680));const a={id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",original_id:"deploy-docker"},l=void 0,p={unversionedId:"deploy-docker",id:"version-2.10.x/deploy-docker",title:"Deploy a cluster on Docker",description:"To deploy a Pulsar cluster on Docker, complete the following steps:",source:"@site/versioned_docs/version-2.10.x/deploy-docker.md",sourceDirName:".",slug:"/deploy-docker",permalink:"/docs/2.10.x/deploy-docker",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.10.x/deploy-docker.md",tags:[],version:"2.10.x",frontMatter:{id:"deploy-docker",title:"Deploy a cluster on Docker",sidebar_label:"Docker",original_id:"deploy-docker"},sidebar:"version-2.10.x/docsSidebar",previous:{title:"Bare metal multi-cluster",permalink:"/docs/2.10.x/deploy-bare-metal-multi-cluster"},next:{title:"Monitor",permalink:"/docs/2.10.x/deploy-monitoring"}},c={},i=[{value:"Prepare",id:"prepare",level:2},{value:"Pull a Pulsar image",id:"pull-a-pulsar-image",level:3},{value:"Create three containers",id:"create-three-containers",level:3},{value:"Create a network",id:"create-a-network",level:3},{value:"Connect containers to network",id:"connect-containers-to-network",level:3}],s={toc:i},u="wrapper";function d(e){let{components:r,...o}=e;return(0,n.yg)(u,(0,t.A)({},s,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"To deploy a Pulsar cluster on Docker, complete the following steps:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Deploy a ZooKeeper cluster (optional)"),(0,n.yg)("li",{parentName:"ol"},"Initialize cluster metadata"),(0,n.yg)("li",{parentName:"ol"},"Deploy a BookKeeper cluster"),(0,n.yg)("li",{parentName:"ol"},"Deploy one or more Pulsar brokers")),(0,n.yg)("h2",{id:"prepare"},"Prepare"),(0,n.yg)("p",null,"To run Pulsar on Docker, you need to create a container for each Pulsar component: ZooKeeper, BookKeeper and broker. You can pull the images of ZooKeeper and BookKeeper separately on ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),", and pull a ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Pulsar image")," for the broker. You can also pull only one ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Pulsar image")," and create three containers with this image. This tutorial takes the second option as an example."),(0,n.yg)("h3",{id:"pull-a-pulsar-image"},"Pull a Pulsar image"),(0,n.yg)("p",null,"You can pull a Pulsar image from ",(0,n.yg)("a",{parentName:"p",href:"https://hub.docker.com/r/apachepulsar/pulsar-all/tags"},"Docker Hub")," with the following command."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\ndocker pull apachepulsar/pulsar-all:latest\n\n")),(0,n.yg)("h3",{id:"create-three-containers"},"Create three containers"),(0,n.yg)("p",null,"Create containers for ZooKeeper, BookKeeper and broker. In this example, they are named as ",(0,n.yg)("inlineCode",{parentName:"p"},"zookeeper"),", ",(0,n.yg)("inlineCode",{parentName:"p"},"bookkeeper")," and ",(0,n.yg)("inlineCode",{parentName:"p"},"broker")," respectively. You can name them as you want with the ",(0,n.yg)("inlineCode",{parentName:"p"},"--name")," flag. By default, the container names are created randomly."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\ndocker run -it --name bookkeeper apachepulsar/pulsar-all:latest /bin/bash\ndocker run -it --name zookeeper apachepulsar/pulsar-all:latest /bin/bash\ndocker run -it --name broker apachepulsar/pulsar-all:latest /bin/bash\n\n")),(0,n.yg)("h3",{id:"create-a-network"},"Create a network"),(0,n.yg)("p",null,"To deploy a Pulsar cluster on Docker, you need to create a ",(0,n.yg)("inlineCode",{parentName:"p"},"network")," and connect the containers of ZooKeeper, BookKeeper and broker to this network. The following command creates the network ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\ndocker network create pulsar\n\n")),(0,n.yg)("h3",{id:"connect-containers-to-network"},"Connect containers to network"),(0,n.yg)("p",null,"Connect the containers of ZooKeeper, BookKeeper and broker to the ",(0,n.yg)("inlineCode",{parentName:"p"},"pulsar")," network with the following commands."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"\ndocker network connect pulsar zookeeper\ndocker network connect pulsar bookkeeper\ndocker network connect pulsar broker\n\n")),(0,n.yg)("p",null,"To check whether the containers are successfully connected to the network, enter the ",(0,n.yg)("inlineCode",{parentName:"p"},"docker network inspect pulsar")," command."),(0,n.yg)("p",null,"For detailed information about how to deploy ZooKeeper cluster, BookKeeper cluster, brokers, see ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.10.x/deploy-bare-metal"},"deploy a cluster on bare metal"),"."))}d.isMDXComponent=!0}}]);