"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[27624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78675:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={id:"client-libraries-dotnet-setup",title:"Set up C# client",sidebar_label:"Set up"},o=void 0,i={unversionedId:"client-libraries-dotnet-setup",id:"version-3.1.x/client-libraries-dotnet-setup",title:"Set up C# client",description:"Install C client library",source:"@site/versioned_docs/version-3.1.x/client-libraries-dotnet-setup.md",sourceDirName:".",slug:"/client-libraries-dotnet-setup",permalink:"/docs/3.1.x/client-libraries-dotnet-setup",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.1.x/client-libraries-dotnet-setup.md",tags:[],version:"3.1.x",frontMatter:{id:"client-libraries-dotnet-setup",title:"Set up C# client",sidebar_label:"Set up"},sidebar:"docsSidebar",previous:{title:"C# client",permalink:"/docs/3.1.x/client-libraries-dotnet"},next:{title:"Initialize",permalink:"/docs/3.1.x/client-libraries-dotnet-initialize"}},p={},s=[{value:"Install C# client library",id:"install-c-client-library",level:2},{value:"Connect to Pulsar cluster",id:"connect-to-pulsar-cluster",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"install-c-client-library"},"Install C# client library"),(0,a.kt)("p",null,"This section describes how to install the Pulsar C# client library through the dotnet CLI."),(0,a.kt)("p",null,"Alternatively, you can install the Pulsar C# client library through Visual Studio. Note that starting from Visual Studio 2017, the dotnet CLI is automatically installed with any .NET Core related workloads. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/visualstudio/mac/nuget-walkthrough?view=vsmac-2019"},"Microsoft documentation"),"."),(0,a.kt)("p",null,"To install the Pulsar C# client library using the dotnet CLI, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/"},".NET Core SDK"),", which provides the dotnet CLI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a project."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a folder for the project.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal window and switch to the new folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create the project using the following command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"dotnet new console\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet run")," to test that the app has been created properly.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the DotPulsar NuGet package."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use the following command to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"DotPulsar")," package."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"dotnet add package DotPulsar\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After the command completes, open the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file to see the added reference."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<ItemGroup>\n  <PackageReference Include="DotPulsar" Version="2.0.1" />\n</ItemGroup>\n')))))),(0,a.kt)("h2",{id:"connect-to-pulsar-cluster"},"Connect to Pulsar cluster"),(0,a.kt)("p",null,"To connect to Pulsar using client libraries, you need to specify a ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.1.x/developing-binary-protocol"},"Pulsar protocol")," URL."),(0,a.kt)("p",null,"You can assign Pulsar protocol URLs to specific clusters and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"pulsar")," scheme. The following is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with the default port ",(0,a.kt)("inlineCode",{parentName:"p"},"6650"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6650\n")),(0,a.kt)("p",null,"If you have multiple brokers, separate ",(0,a.kt)("inlineCode",{parentName:"p"},"IP:port")," by commas:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar://localhost:6550,localhost:6651,localhost:6652\n")),(0,a.kt)("p",null,"If you use ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.1.x/security-tls-authentication"},"mTLS")," authentication, add ",(0,a.kt)("inlineCode",{parentName:"p"},"+ssl")," in the scheme:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"pulsar+ssl://pulsar.us-west.example.com:6651\n")))}d.isMDXComponent=!0}}]);