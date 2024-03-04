"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[39974],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},h=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(t),h=n,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return t?r.createElement(m,s(s({ref:a},c),{},{components:t})):r.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},53992:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(58168),n=(t(96540),t(15680));const o={id:"administration-dashboard",title:"Pulsar dashboard",sidebar_label:"Dashboard",original_id:"administration-dashboard"},s=void 0,i={unversionedId:"administration-dashboard",id:"version-2.9.x/administration-dashboard",title:"Pulsar dashboard",description:"Pulsar dashboard is deprecated. We recommend you use Pulsar Manager to manage and monitor the stats of your topics.",source:"@site/versioned_docs/version-2.9.x/administration-dashboard.md",sourceDirName:".",slug:"/administration-dashboard",permalink:"/docs/2.9.x/administration-dashboard",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/administration-dashboard.md",tags:[],version:"2.9.x",frontMatter:{id:"administration-dashboard",title:"Pulsar dashboard",sidebar_label:"Dashboard",original_id:"administration-dashboard"}},l={},d=[{value:"Install",id:"install",level:2},{value:"Known issues",id:"known-issues",level:3}],c={toc:d},p="wrapper";function u(e){let{components:a,...t}=e;return(0,n.yg)(p,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"Pulsar dashboard is deprecated. We recommend you use ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/administration-pulsar-manager"},"Pulsar Manager")," to manage and monitor the stats of your topics.")),(0,n.yg)("p",null,"Pulsar dashboard is a web application that enables users to monitor current stats for all ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#topic"},"topics")," in tabular form."),(0,n.yg)("p",null,"The dashboard is a data collector that polls stats from all the brokers in a Pulsar instance (across multiple clusters) and stores all the information in a ",(0,n.yg)("a",{parentName:"p",href:"https://www.postgresql.org/"},"PostgreSQL")," database."),(0,n.yg)("p",null,"You can use the ",(0,n.yg)("a",{parentName:"p",href:"https://www.djangoproject.com"},"Django")," web app to render the collected data."),(0,n.yg)("h2",{id:"install"},"Install"),(0,n.yg)("p",null,"The easiest way to use the dashboard is to run it inside a Docker container."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ SERVICE_URL=http://broker.example.com:8080/\n$ docker run -p 80:80 \\\n  -e SERVICE_URL=$SERVICE_URL \\\n  apachepulsar/pulsar-dashboard:2.9.5\n\n")),(0,n.yg)("p",null,"You can find the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/tree/master//dashboard/Dockerfile"},"Dockerfile")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"dashboard")," directory and build an image from scratch as well:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ docker build -t apachepulsar/pulsar-dashboard dashboard\n\n")),(0,n.yg)("p",null,"If token authentication is enabled:"),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Provided token should have super-user access.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ SERVICE_URL=http://broker.example.com:8080/\n$ JWT_TOKEN=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n$ docker run -p 80:80 \\\n  -e SERVICE_URL=$SERVICE_URL \\\n  -e JWT_TOKEN=$JWT_TOKEN \\\n  apachepulsar/pulsar-dashboard\n\n")),(0,n.yg)("p",null,"You need to specify only one service URL for a Pulsar cluster. Internally, the collector figures out all the existing clusters and the brokers from where it needs to pull the metrics. If you connect the dashboard to Pulsar running in standalone mode, the URL is ",(0,n.yg)("inlineCode",{parentName:"p"},"http://<broker-ip>:8080")," by default. ",(0,n.yg)("inlineCode",{parentName:"p"},"<broker-ip>")," is the IP address or hostname of the machine that runs Pulsar standalone. The IP address or hostname should be accessible from the running dashboard in the docker instance."),(0,n.yg)("p",null,"Once the Docker container starts, the web dashboard is accessible via ",(0,n.yg)("inlineCode",{parentName:"p"},"localhost")," or whichever host that Docker uses."),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"The ",(0,n.yg)("inlineCode",{parentName:"p"},"SERVICE_URL")," that the dashboard uses needs to be reachable from inside the Docker container.")),(0,n.yg)("p",null,"If the Pulsar service runs in standalone mode in ",(0,n.yg)("inlineCode",{parentName:"p"},"localhost"),", the ",(0,n.yg)("inlineCode",{parentName:"p"},"SERVICE_URL")," has to\nbe the IP address of the machine."),(0,n.yg)("p",null,"Similarly, given the Pulsar standalone advertises itself with localhost by default, you need to\nexplicitly set the advertise address to the host IP address. For example:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"\n$ bin/pulsar standalone --advertised-address 1.2.3.4\n\n")),(0,n.yg)("h3",{id:"known-issues"},"Known issues"),(0,n.yg)("p",null,"Currently, only Pulsar Token ",(0,n.yg)("a",{parentName:"p",href:"/docs/2.9.x/security-overview#authentication-providers"},"authentication")," is supported."))}u.isMDXComponent=!0}}]);