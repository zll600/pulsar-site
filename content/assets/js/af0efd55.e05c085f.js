"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[82835],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>g});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),y=r,g=c["".concat(s,".").concat(y)]||c[y]||d[y]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},11248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const i={id:"functions-develop-serde",title:"Use SerDe",sidebar_label:"Use SerDe",description:"Learn to develop functions using Serialization and Deserialization in Pulsar."},o=void 0,l={unversionedId:"functions-develop-serde",id:"version-3.2.x/functions-develop-serde",title:"Use SerDe",description:"Learn to develop functions using Serialization and Deserialization in Pulsar.",source:"@site/versioned_docs/version-3.2.x/functions-develop-serde.md",sourceDirName:".",slug:"/functions-develop-serde",permalink:"/docs/3.2.x/functions-develop-serde",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-3.2.x/functions-develop-serde.md",tags:[],version:"3.2.x",frontMatter:{id:"functions-develop-serde",title:"Use SerDe",sidebar_label:"Use SerDe",description:"Learn to develop functions using Serialization and Deserialization in Pulsar."},sidebar:"docsSidebar",previous:{title:"Use schema registry",permalink:"/docs/3.2.x/functions-develop-schema-registry"},next:{title:"Tutorials",permalink:"/docs/3.2.x/functions-develop-tutorial"}},s={},p=[{value:"Use SerDe for Java functions",id:"use-serde-for-java-functions",level:2},{value:"Use SerDe for Python functions",id:"use-serde-for-python-functions",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Pulsar Functions use SerDe (",(0,r.yg)("strong",{parentName:"p"},"Ser"),"ialization and ",(0,r.yg)("strong",{parentName:"p"},"De"),"serialization) when publishing data to or consuming data from Pulsar topics. How SerDe works by default depends on the language you use (Java or Python) for a particular function. In both languages, however, you can write custom SerDe logic for more complex, application-specific types."),(0,r.yg)("h2",{id:"use-serde-for-java-functions"},"Use SerDe for Java functions"),(0,r.yg)("p",null,"The following basic Java types are built-in and supported by default for Java functions: ",(0,r.yg)("inlineCode",{parentName:"p"},"string"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"double"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"integer"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"float"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"long"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"short"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"byte"),"."),(0,r.yg)("p",null,"To customize Java types, you need to implement the following interface."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public interface SerDe<T> {\n    T deserialize(byte[] input);\n    byte[] serialize(T input);\n}\n")),(0,r.yg)("p",null,"SerDe works in the following ways for Java functions."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the input and output topics have a schema, Pulsar Functions use the schema for SerDe."),(0,r.yg)("li",{parentName:"ul"},"If the input or output topics do not exist, Pulsar Functions adopt the following rules to determine SerDe:",(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"If the schema type is specified, Pulsar Functions use the specified schema type."),(0,r.yg)("li",{parentName:"ul"},"If SerDe is specified, Pulsar Functions use the specified SerDe, and the schema type for input and output topics is ",(0,r.yg)("inlineCode",{parentName:"li"},"byte"),"."),(0,r.yg)("li",{parentName:"ul"},"If neither the schema type nor SerDe is specified, Pulsar Functions use the built-in SerDe. For non-primitive schema types, the built-in SerDe serializes and deserializes objects in the ",(0,r.yg)("inlineCode",{parentName:"li"},"JSON")," format.")))),(0,r.yg)("p",null,"For example, imagine that you're writing a function that processes tweet objects. You can refer to the following example of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Tweet")," class in Java."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class Tweet {\n    private String username;\n    private String tweetContent;\n\n    public Tweet(String username, String tweetContent) {\n        this.username = username;\n        this.tweetContent = tweetContent;\n    }\n\n    // Standard setters and getters\n}\n")),(0,r.yg)("p",null,"To pass ",(0,r.yg)("inlineCode",{parentName:"p"},"Tweet")," objects directly between functions, you need to provide a custom SerDe class. In the example below, ",(0,r.yg)("inlineCode",{parentName:"p"},"Tweet")," objects are basically strings, and username and tweet content are separated by ",(0,r.yg)("inlineCode",{parentName:"p"},"|"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'package com.example.serde;\n\nimport org.apache.pulsar.functions.api.SerDe;\n\nimport java.util.regex.Pattern;\n\npublic class TweetSerde implements SerDe<Tweet> {\n    public Tweet deserialize(byte[] input) {\n        String s = new String(input);\n        String[] fields = s.split(Pattern.quote("|"));\n        return new Tweet(fields[0], fields[1]);\n    }\n\n    public byte[] serialize(Tweet input) {\n        return "%s|%s".format(input.getUsername(), input.getTweetContent()).getBytes();\n    }\n}\n')),(0,r.yg)("p",null,"To apply a customized SerDe to a particular function, you need to:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Package the ",(0,r.yg)("inlineCode",{parentName:"li"},"Tweet")," and ",(0,r.yg)("inlineCode",{parentName:"li"},"TweetSerde")," classes into a JAR."),(0,r.yg)("li",{parentName:"ul"},"Specify a path to the JAR and SerDe class names when deploying the function.")),(0,r.yg)("p",null,"The following is an example of using the ",(0,r.yg)("inlineCode",{parentName:"p"},"create")," command to deploy a function by applying a customized SerDe."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"}," bin/pulsar-admin functions create \\\n  --jar /path/to/your.jar \\\n  --output-serde-classname com.example.serde.TweetSerde \\\n  # Other function attributes\n")),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Custom SerDe classes must be packaged with your function JARs.")),(0,r.yg)("h2",{id:"use-serde-for-python-functions"},"Use SerDe for Python functions"),(0,r.yg)("p",null,"In Python, the default SerDe is an identity, meaning that the type is serialized as whatever type the function returns."),(0,r.yg)("p",null,"For example, you can specify the SerDe as follows when deploying a function in ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.2.x/functions-deploy-cluster"},"cluster mode"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'bin/pulsar-admin functions create \\\n  --tenant public \\\n  --namespace default \\\n  --name my_function \\\n  --py my_function.py \\\n  --classname my_function.MyFunction \\\n  --custom-serde-inputs \'{"input-topic-1":"Serde1","input-topic-2":"Serde2"}\' \\\n  --output-serde-classname Serde3 \\\n  --output output-topic-1\n')),(0,r.yg)("p",null,"This case contains two input topics: ",(0,r.yg)("inlineCode",{parentName:"p"},"input-topic-1")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"input-topic-2"),", each of which is mapped to a different SerDe class (the mapping must be specified as a JSON string). The output topic ",(0,r.yg)("inlineCode",{parentName:"p"},"output-topic-1")," uses the ",(0,r.yg)("inlineCode",{parentName:"p"},"Serde3")," class for SerDe."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"All function-related logic, including processing and SerDe classes, must be contained within a single Python file.")),(0,r.yg)("p",null,"The table outlines three SerDe options for Python functions."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"SerDe option"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"),(0,r.yg)("th",{parentName:"tr",align:null},"Use case"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"IdentitySerde")," (default)"),(0,r.yg)("td",{parentName:"tr",align:null},"Use the ",(0,r.yg)("inlineCode",{parentName:"td"},"IdentitySerde"),", which leaves the data unchanged. Creating or running a function without explicitly specifying SerDe means that this option is used."),(0,r.yg)("td",{parentName:"tr",align:null},"When you work with simple types like strings, booleans, integers.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"PickleSerDe")),(0,r.yg)("td",{parentName:"tr",align:null},"Use the ",(0,r.yg)("inlineCode",{parentName:"td"},"PickleSerDe"),", which uses Python ",(0,r.yg)("a",{parentName:"td",href:"https://docs.python.org/3/library/pickle.html"},(0,r.yg)("inlineCode",{parentName:"a"},"pickle"))," for SerDe."),(0,r.yg)("td",{parentName:"tr",align:null},'When you work with complex, application-specific types and are comfortable with the "best-effort" approach of ',(0,r.yg)("inlineCode",{parentName:"td"},"pickle"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Custom SerDe")),(0,r.yg)("td",{parentName:"tr",align:null},"Create a custom SerDe class by implementing the baseline ",(0,r.yg)("inlineCode",{parentName:"td"},"SerDe")," class, which has just two methods:",(0,r.yg)("br",null),(0,r.yg)("em",{parentName:"td"}," ",(0,r.yg)("inlineCode",{parentName:"em"},"serialize")," for converting the object into bytes.",(0,r.yg)("br",null))," ",(0,r.yg)("inlineCode",{parentName:"td"},"deserialize")," for converting bytes into an object of the required application-specific type."),(0,r.yg)("td",{parentName:"tr",align:null},"When you require explicit control over SerDe, potentially for performance or data compatibility purposes.")))),(0,r.yg)("p",null,"For example, imagine that you are writing a function that processes tweet objects. You can refer to the following example of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Tweet")," class in Python."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"class Tweet(object):\n    def __init__(self, username, tweet_content):\n        self.username = username\n        self.tweet_content = tweet_content\n")),(0,r.yg)("p",null,"To use this class in Pulsar Functions, you have two options:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Specify ",(0,r.yg)("inlineCode",{parentName:"li"},"PickleSerDe"),", which applies the ",(0,r.yg)("inlineCode",{parentName:"li"},"pickle")," library for SerDe."),(0,r.yg)("li",{parentName:"ul"},"Create your own SerDe class. The following is an example.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-python"},"from pulsar import SerDe\n\nclass TweetSerDe(SerDe):\n\n    def serialize(self, input):\n        return bytes(\"{0}|{1}\".format(input.username, input.tweet_content))\n\n    def deserialize(self, input_bytes):\n        tweet_components = str(input_bytes).split('|')\n        return Tweet(tweet_components[0], tweet_componentsp[1])\n")),(0,r.yg)("p",null,"For more details, see ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-functions/python-examples/custom_object_function.py"},"code example"),"."))}d.isMDXComponent=!0}}]);