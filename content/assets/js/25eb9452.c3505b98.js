"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[18023],{15680:(e,n,a)=>{a.d(n,{xA:()=>l,yg:()=>d});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,d=u["".concat(p,".").concat(m)]||u[m]||g[m]||i;return a?t.createElement(d,o(o({ref:n},l),{},{components:a})):t.createElement(d,o({ref:n},l))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32251:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const i={id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions",description:"Learn to package Java functions in Pulsar."},o=void 0,c={unversionedId:"functions-package-java",id:"functions-package-java",title:"Package Java Functions",description:"Learn to package Java functions in Pulsar.",source:"@site/docs/functions-package-java.md",sourceDirName:".",slug:"/functions-package-java",permalink:"/docs/next/functions-package-java",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/docs/functions-package-java.md",tags:[],version:"current",frontMatter:{id:"functions-package-java",title:"Package Java Functions",sidebar_label:"Package Java Functions",description:"Learn to package Java functions in Pulsar."},sidebar:"docsSidebar",previous:{title:"How to package",permalink:"/docs/next/functions-package"},next:{title:"Package Python Functions",permalink:"/docs/next/functions-package-python"}},p={},s=[{value:"Package as JAR",id:"package-as-jar",level:2},{value:"Package as NAR",id:"package-as-nar",level:2}],l={toc:s},u="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.A)({},l,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"If you plan to package and distribute your function for others to use, you are obligated to\nlicense and copyright your own code properly. Remember to add the license and copyright to\nall libraries your code uses and to your distribution."),(0,r.yg)("p",{parentName:"admonition"},"If you use the ",(0,r.yg)("a",{parentName:"p",href:"#package-as-nar"},"NAR")," method, the NAR plugin\nautomatically creates a ",(0,r.yg)("inlineCode",{parentName:"p"},"DEPENDENCIES")," file in the generated NAR package, including the proper\nlicensing and copyrights of all libraries of your function."),(0,r.yg)("p",{parentName:"admonition"},"For the runtime Java version, refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/README.md#pulsar-runtime-java-version-recommendation"},"Pulsar Runtime Java Version Recommendation")," according to your target Pulsar version.")),(0,r.yg)("p",null,"There are two methods to package Java Functions:"),(0,r.yg)("h2",{id:"package-as-jar"},"Package as JAR"),(0,r.yg)("p",null,"To package a Java function as JAR, complete the following steps."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new maven project with a pom file. In the following code sample, the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"mainClass")," is your package name."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>3.3.1</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <artifactId>maven-assembly-plugin</artifactId>\n                 <configuration>\n                     <appendAssemblyId>false</appendAssemblyId>\n                     <descriptorRefs>\n                         <descriptorRef>jar-with-dependencies</descriptorRef>\n                     </descriptorRefs>\n                     <archive>\n                     <manifest>\n                         <mainClass>org.example.test.ExclamationFunction</mainClass>\n                     </manifest>\n                 </archive>\n                 </configuration>\n                 <executions>\n                     <execution>\n                         <id>make-assembly</id>\n                         <phase>package</phase>\n                         <goals>\n                             <goal>assembly</goal>\n                         </goals>\n                     </execution>\n                 </executions>\n             </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <version>3.11.0</version>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Package your Java function."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"}," mvn package\n")),(0,r.yg)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," directory to check if there is a JAR package similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.jar"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the Java function using the following command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions localrun \\\n    --classname org.example.test.ExclamationFunction \\\n    --jar $PWD/target/java-function-1.0-SNAPSHOT.jar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n")),(0,r.yg)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))),(0,r.yg)("h2",{id:"package-as-nar"},"Package as NAR"),(0,r.yg)("p",null,"To package a Java function as NAR, complete the following steps."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new maven project with a pom file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-xml"},' <?xml version="1.0" encoding="UTF-8"?>\n <project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n     <modelVersion>4.0.0</modelVersion>\n\n     <groupId>java-function</groupId>\n     <artifactId>java-function</artifactId>\n     <version>1.0-SNAPSHOT</version>\n\n     <dependencies>\n         <dependency>\n             <groupId>org.apache.pulsar</groupId>\n             <artifactId>pulsar-functions-api</artifactId>\n             <version>3.3.1</version>\n         </dependency>\n     </dependencies>\n\n     <build>\n         <plugins>\n             <plugin>\n                 <groupId>org.apache.nifi</groupId>\n                 <artifactId>nifi-nar-maven-plugin</artifactId>\n                 <version>1.5.0</version>\n                 </plugin>\n             <plugin>\n                 <groupId>org.apache.maven.plugins</groupId>\n                 <artifactId>maven-compiler-plugin</artifactId>\n                 <version>3.11.0</version>\n                 <configuration>\n                     <release>17</release>\n                 </configuration>\n             </plugin>\n         </plugins>\n     </build>\n\n </project>\n')),(0,r.yg)("p",{parentName:"li"},"You must also create a ",(0,r.yg)("inlineCode",{parentName:"p"},"resources/META-INF/services/pulsar-io.yaml")," file. In the following code sample, the value of ",(0,r.yg)("inlineCode",{parentName:"p"},"functionClass")," is your function class name. The ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," is the one used when the Function is deployed as a ",(0,r.yg)("a",{parentName:"p",href:"/docs/next/functions-deploy-cluster-builtin"},"built-in")," one."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"name: java-function\ndescription: my java function\nfunctionClass: org.example.test.ExclamationFunction\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Package your Java function."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"mvn package\n")),(0,r.yg)("p",{parentName:"li"},"After the Java function is packaged, a ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," directory is created automatically. Open the ",(0,r.yg)("inlineCode",{parentName:"p"},"target")," directory to check if there is a NAR package similar to ",(0,r.yg)("inlineCode",{parentName:"p"},"java-function-1.0-SNAPSHOT.nar"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Run the Java function using the following command."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"}," ./bin/pulsar-admin functions localrun \\\n    --jar $PWD/target/java-function-1.0-SNAPSHOT.nar \\\n    --inputs persistent://public/default/my-topic-1 \\\n    --output persistent://public/default/test-1 \\\n    --tenant public \\\n    --namespace default \\\n    --name JavaFunction\n")),(0,r.yg)("p",{parentName:"li"},"The following log indicates that the Java function starts successfully."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text"}," ...\n 07:55:03.724 [main] INFO  org.apache.pulsar.functions.runtime.ProcessRuntime - Started process successfully\n ...\n")))))}g.isMDXComponent=!0}}]);