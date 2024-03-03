"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8682],{15680:(e,a,r)=>{r.d(a,{xA:()=>m,yg:()=>c});var t=r(96540);function l(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){l(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,t,l=function(e,a){if(null==e)return{};var r,t,l={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(l[r]=e[r]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=t.createContext({}),g=function(e){var a=t.useContext(u),r=a;return e&&(r="function"==typeof e?e(a):p(p({},a),e)),r},m=function(e){var a=g(e.components);return t.createElement(u.Provider,{value:a},e.children)},s="mdxType",o={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=g(r),h=l,c=s["".concat(u,".").concat(h)]||s[h]||o[h]||n;return r?t.createElement(c,p(p({ref:a},m),{},{components:r})):t.createElement(c,p({ref:a},m))}));function c(e,a){var r=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var n=r.length,p=new Array(n);p[0]=h;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i[s]="string"==typeof e?e:l,p[1]=i;for(var g=2;g<n;g++)p[g]=r[g];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},86496:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>p,default:()=>o,frontMatter:()=>n,metadata:()=>i,toc:()=>g});var t=r(58168),l=(r(96540),r(15680));const n={id:"pulsar-manager",title:"Pulsar Manager Release Notes",sidebar_label:"Pulsar Manager Release Notes"},p=void 0,i={unversionedId:"pulsar-manager",id:"pulsar-manager",title:"Pulsar Manager Release Notes",description:"0.4.0 &mdash; 2023-05-09",source:"@site/release-notes/pulsar-manager.md",sourceDirName:".",slug:"/pulsar-manager",permalink:"/release-notes/pulsar-manager",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/release-notes/pulsar-manager.md",tags:[],version:"current",frontMatter:{id:"pulsar-manager",title:"Pulsar Manager Release Notes",sidebar_label:"Pulsar Manager Release Notes"},sidebar:"releaseNote",previous:{title:"C# Client",permalink:"/release-notes/client-cs"}},u={},g=[{value:'0.4.0 \u2014 2023-05-09 <a id="0.4.0"></a>',id:"040--2023-05-09-",level:2},{value:"What&#39;s Changed",id:"whats-changed",level:4},{value:"New Contributors",id:"new-contributors",level:4},{value:'0.3.0 \u2014 2022-05-25 <a id="0.3.0"></a>',id:"030--2022-05-25-",level:2},{value:'0.2.0 \u2014 2020-09-28 <a id="0.2.0"></a>',id:"020--2020-09-28-",level:2},{value:'0.1.0 \u2014 2019-11-25 <a id="0.1.0"></a>',id:"010--2019-11-25-",level:2}],m={toc:g},s="wrapper";function o(e){let{components:a,...r}=e;return(0,l.yg)(s,(0,t.A)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"040--2023-05-09-"},"0.4.0 ","\u2014"," 2023-05-09 ",(0,l.yg)("a",{id:"0.4.0"})),(0,l.yg)("h4",{id:"whats-changed"},"What's Changed"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Update stale description of creating environment in README by @maxsxu in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/462"},"PR-462")),(0,l.yg)("li",{parentName:"ul"},"feat:upgrade version to 0.3.0 by @urfreespace in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/458"},"PR-458")),(0,l.yg)("li",{parentName:"ul"},"Move version to 0.3.0 by @urfreespace in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/455"},"PR-455")),(0,l.yg)("li",{parentName:"ul"},"Align BouncyCastle transitive dependecies to 1.68 by @nicoloboschi in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/466"},"PR-466")),(0,l.yg)("li",{parentName:"ul"},"Fix URL for example in README.md by @corymacd in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/475"},"PR-475")),(0,l.yg)("li",{parentName:"ul"},"Removing conflicting dependencies by @gurleen-gks in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/482"},"PR-482")),(0,l.yg)("li",{parentName:"ul"},"Removing transitive dependencies for log4j by @gurleen-gks in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/488"},"PR-488")),(0,l.yg)("li",{parentName:"ul"},"Redirect notifications to the commits@ list instead of dev by @merlimat in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/490"},"PR-490")),(0,l.yg)("li",{parentName:"ul"},"For #492, Remove unused 'token' by @Hongten in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/493"},"PR-493")),(0,l.yg)("li",{parentName:"ul"},"Use correct path for initdb and pg_ctl by @mzwennes in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/478"},"PR-478")),(0,l.yg)("li",{parentName:"ul"},"Update support for casdoor  by @jakiuncle in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/484"},"PR-484")),(0,l.yg)("li",{parentName:"ul"},"[improve][doc]"," Add casdoor document for administration-pulsar-manager by @jakiuncle in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/499"},"PR-499")),(0,l.yg)("li",{parentName:"ul"},"Fix create topic failure for non-partitioned topic by @Apurva007 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/504"},"PR-504")),(0,l.yg)("li",{parentName:"ul"},"Fix 307 redirect errors when connecting to multi-broker cluster by @Apurva007 in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/503"},"PR-503")),(0,l.yg)("li",{parentName:"ul"},"Use existing database if present by @vfauth in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/501"},"PR-501")),(0,l.yg)("li",{parentName:"ul"},"Upgrade Gradle and Gralde Node Plugin to fix build issues by @tisonkun in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/510"},"PR-510")),(0,l.yg)("li",{parentName:"ul"},"Fix GHA workflow syntax by @tisonkun in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/511"},"PR-511")),(0,l.yg)("li",{parentName:"ul"},"build: upgrade deps for building on modern machine by @tisonkun in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/513"},"PR-513"))),(0,l.yg)("h4",{id:"new-contributors"},"New Contributors"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"@maxsxu made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/462"},"PR-462")),(0,l.yg)("li",{parentName:"ul"},"@nicoloboschi made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/466"},"PR-466")),(0,l.yg)("li",{parentName:"ul"},"@corymacd made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/475"},"PR-475")),(0,l.yg)("li",{parentName:"ul"},"@gurleen-gks made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/482"},"PR-482")),(0,l.yg)("li",{parentName:"ul"},"@merlimat made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/490"},"PR-490")),(0,l.yg)("li",{parentName:"ul"},"@Hongten made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/493"},"PR-493")),(0,l.yg)("li",{parentName:"ul"},"@mzwennes made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/478"},"PR-478")),(0,l.yg)("li",{parentName:"ul"},"@jakiuncle made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/484"},"PR-484")),(0,l.yg)("li",{parentName:"ul"},"@Apurva007 made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/504"},"PR-504")),(0,l.yg)("li",{parentName:"ul"},"@vfauth made their first contribution in ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/501"},"PR-501"))),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar-manager/compare/v0.3.0...v0.4.0"},"https://github.com/apache/pulsar-manager/compare/v0.3.0...v0.4.0")),(0,l.yg)("h2",{id:"030--2022-05-25-"},"0.3.0 ","\u2014"," 2022-05-25 ",(0,l.yg)("a",{id:"0.3.0"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Fix MySQL schema field token error ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/339"},"PR-339")),(0,l.yg)("li",{parentName:"ul"},"Fix the bugs in topics list page and search topics ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/342"},"PR-342")),(0,l.yg)("li",{parentName:"ul"},"Fix the issue of Swagger does not work ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/369"},"PR-369")),(0,l.yg)("li",{parentName:"ul"},"Add offload threshold input ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/375"},"PR-375")),(0,l.yg)("li",{parentName:"ul"},"Add dashboard service for aggregated information collection ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/326"},"PR-326")),(0,l.yg)("li",{parentName:"ul"},"Add multi bookie cluster support ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/388"},"PR-388")),(0,l.yg)("li",{parentName:"ul"},"Fix the bug that admin roles cannot be deleted ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/397"},"PR-397")),(0,l.yg)("li",{parentName:"ul"},"Add Filtering support for tenant/namespace/topic ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/440"},"PR-440")),(0,l.yg)("li",{parentName:"ul"},"Fix Log4J security vulnerabilities ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/438"},"PR-438")),(0,l.yg)("li",{parentName:"ul"},"Allow user to assign tenant as resource to role ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/436"},"PR-436")),(0,l.yg)("li",{parentName:"ul"},"Add support for Casdoor ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/446"},"PR-446")),(0,l.yg)("li",{parentName:"ul"},"Fix unload namespace error ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/386"},"PR-386"))),(0,l.yg)("h2",{id:"020--2020-09-28-"},"0.2.0 ","\u2014"," 2020-09-28 ",(0,l.yg)("a",{id:"0.2.0"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Support multiple addresses for the broker stats ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/306"},"PR-306"),"."),(0,l.yg)("li",{parentName:"ul"},"Use ",(0,l.yg)("inlineCode",{parentName:"li"},"PulsarAdmin")," instead of ",(0,l.yg)("inlineCode",{parentName:"li"},"HttpUti"),"l in ",(0,l.yg)("inlineCode",{parentName:"li"},"BrokerStatsServiceImpl")," ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/315"},"PR-315"),"."),(0,l.yg)("li",{parentName:"ul"},"Serve frontend directly from Pulsar Manager backend process ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/288"},"PR-288"),"."),(0,l.yg)("li",{parentName:"ul"},"Support docker for JWT ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/218"},"PR-218"),"."),(0,l.yg)("li",{parentName:"ul"},"Support sub and unsub operations ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/240"},"PR-240"),"."),(0,l.yg)("li",{parentName:"ul"},"Support peeking messages from the Pulsar broker ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/241"},"PR-241"),"."),(0,l.yg)("li",{parentName:"ul"},"Support BookKeeper visual manager 1.2.0 ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/300"},"PR-300"),"."),(0,l.yg)("li",{parentName:"ul"},"Support forwarding messages through HTTPS ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/258"},"PR-258"),"."),(0,l.yg)("li",{parentName:"ul"},"Support displaying stats for tenants and namespaces ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/243"},"PR-243"),"."),(0,l.yg)("li",{parentName:"ul"},"Add a configuration file for the backend service of Pulsar manager ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/236"},"PR-236"),"."),(0,l.yg)("li",{parentName:"ul"},"Add default configurations for the environment ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/242"},"PR-242"),"."),(0,l.yg)("li",{parentName:"ul"},"Fixe an SQL syntax error ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/298"},"PR-298"),"."),(0,l.yg)("li",{parentName:"ul"},"Fix the issue that Pulsar Manager fail to process the request sent to the Pulsar proxy ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/281"},"PR-281"),"."),(0,l.yg)("li",{parentName:"ul"},"Change the default port and replace the request URI ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/316"},"PR-316"),".")),(0,l.yg)("h2",{id:"010--2019-11-25-"},"0.1.0 ","\u2014"," 2019-11-25 ",(0,l.yg)("a",{id:"0.1.0"})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Remove streamnative from the project ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/213"},"PR-213"),"."),(0,l.yg)("li",{parentName:"ul"},"Add license file for pulsar-manager ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/209"},"PR-209"),"."),(0,l.yg)("li",{parentName:"ul"},"Support management of jwt for pulsar-manager ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/205"},"PR-205"),"."),(0,l.yg)("li",{parentName:"ul"},"Support redirect.scheme ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/204"},"PR-204"),"."),(0,l.yg)("li",{parentName:"ul"},"Fix reset cursor by time ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/179"},"PR-179"),"."),(0,l.yg)("li",{parentName:"ul"},"Fix wrong broker display error ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/187"},"PR-187"),"."),(0,l.yg)("li",{parentName:"ul"},"Remove dependency package jszip ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/189"},"PR-189"),"."),(0,l.yg)("li",{parentName:"ul"},"Add developer guide ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/186"},"PR-186"),"."),(0,l.yg)("li",{parentName:"ul"},"Keep table and column name fields lowercase ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/190"},"PR-190"),"."),(0,l.yg)("li",{parentName:"ul"},"Fix loggin level ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/191"},"PR-191"),"."),(0,l.yg)("li",{parentName:"ul"},"Fix wrong place for license scan badge ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/193"},"PR-193"),"."),(0,l.yg)("li",{parentName:"ul"},"Add support for HerdDB database ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/183"},"PR-183"),"."),(0,l.yg)("li",{parentName:"ul"},"Make default environment persistent ",(0,l.yg)("a",{parentName:"li",href:"https://github.com/apache/pulsar-manager/pull/197"},"PR-197"),".")))}o.isMDXComponent=!0}}]);