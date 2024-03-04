"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[26842],{15680:(e,n,t)=>{t.d(n,{xA:()=>g,yg:()=>u});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,u=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return t?a.createElement(u,i(i({ref:n},g),{},{components:t})):a.createElement(u,i({ref:n},g))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=t(58168),r=(t(96540),t(15680));const l={id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"},i=void 0,o={unversionedId:"io-jdbc-sink",id:"version-2.8.x/io-jdbc-sink",title:"JDBC sink connector",description:"The JDBC sink connectors allow pulling messages from Pulsar topics",source:"@site/versioned_docs/version-2.8.x/io-jdbc-sink.md",sourceDirName:".",slug:"/io-jdbc-sink",permalink:"/docs/2.8.x/io-jdbc-sink",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.8.x/io-jdbc-sink.md",tags:[],version:"2.8.x",frontMatter:{id:"io-jdbc-sink",title:"JDBC sink connector",sidebar_label:"JDBC sink connector",original_id:"io-jdbc-sink"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example for ClickHouse",id:"example-for-clickhouse",level:3},{value:"Example for MariaDB",id:"example-for-mariadb",level:3},{value:"Example for PostgreSQL",id:"example-for-postgresql",level:3},{value:"Example for SQLite",id:"example-for-sqlite",level:3}],g={toc:p},c="wrapper";function d(e){let{components:n,...t}=e;return(0,r.yg)(c,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The JDBC sink connectors allow pulling messages from Pulsar topics\nand persists the messages to ClickHouse, MariaDB, PostgreSQL, and SQLite."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Currently, INSERT, DELETE and UPDATE operations are supported.")),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of all JDBC sink connectors has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"userName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The username used to connect to the database specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbcUrl"),".",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: ",(0,r.yg)("inlineCode",{parentName:"strong"},"userName")," is case-sensitive."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The password used to connect to the database specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"jdbcUrl"),". ",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("strong",{parentName:"td"},"Note: ",(0,r.yg)("inlineCode",{parentName:"strong"},"password")," is case-sensitive."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"jdbcUrl")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC URL of the database to which the connector connects.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"tableName")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"The name of the table to which the connector writes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"nonKey")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in updating events.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"key")),(0,r.yg)("td",{parentName:"tr",align:null},"String"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},'" " (empty string)'),(0,r.yg)("td",{parentName:"tr",align:null},"A comma-separated list contains the fields used in ",(0,r.yg)("inlineCode",{parentName:"td"},"where")," condition of updating and deleting events.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"timeoutMs")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"500"),(0,r.yg)("td",{parentName:"tr",align:null},"The JDBC operation timeout in milliseconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"200"),(0,r.yg)("td",{parentName:"tr",align:null},"The batch size of updates made to the database.")))),(0,r.yg)("h3",{id:"example-for-clickhouse"},"Example for ClickHouse"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "clickhouse",\n    "password": "password",\n    "jdbcUrl": "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink",\n    "tableName": "pulsar_clickhouse_jdbc_sink"\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-clickhouse-sink"\ntopicName: "persistent://public/default/jdbc-clickhouse-topic"\nsinkType: "jdbc-clickhouse"\nconfigs:\n    userName: "clickhouse"\n    password: "password"\n    jdbcUrl: "jdbc:clickhouse://localhost:8123/pulsar_clickhouse_jdbc_sink"\n    tableName: "pulsar_clickhouse_jdbc_sink"\n\n')))),(0,r.yg)("h3",{id:"example-for-mariadb"},"Example for MariaDB"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "mariadb",\n    "password": "password",\n    "jdbcUrl": "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink",\n    "tableName": "pulsar_mariadb_jdbc_sink"\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-mariadb-sink"\ntopicName: "persistent://public/default/jdbc-mariadb-topic"\nsinkType: "jdbc-mariadb"\nconfigs:\n    userName: "mariadb"\n    password: "password"\n    jdbcUrl: "jdbc:mariadb://localhost:3306/pulsar_mariadb_jdbc_sink"\n    tableName: "pulsar_mariadb_jdbc_sink"\n\n')))),(0,r.yg)("h3",{id:"example-for-postgresql"},"Example for PostgreSQL"),(0,r.yg)("p",null,"Before using the JDBC PostgreSQL sink connector, you need to create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "userName": "postgres",\n    "password": "password",\n    "jdbcUrl": "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink",\n    "tableName": "pulsar_postgres_jdbc_sink"\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-postgres-sink"\ntopicName: "persistent://public/default/jdbc-postgres-topic"\nsinkType: "jdbc-postgres"\nconfigs:\n    userName: "postgres"\n    password: "password"\n    jdbcUrl: "jdbc:postgresql://localhost:5432/pulsar_postgres_jdbc_sink"\n    tableName: "pulsar_postgres_jdbc_sink"\n\n')))),(0,r.yg)("p",null,"For more information on ",(0,r.yg)("strong",{parentName:"p"},"how to use this JDBC sink connector"),", see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.8.x/io-quickstart#connect-pulsar-to-postgresql"},"connect Pulsar to PostgreSQL"),"."),(0,r.yg)("h3",{id:"example-for-sqlite"},"Example for SQLite"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "jdbcUrl": "jdbc:sqlite:db.sqlite",\n    "tableName": "pulsar_sqlite_jdbc_sink"\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\ntenant: "public"\nnamespace: "default"\nname: "jdbc-sqlite-sink"\ntopicName: "persistent://public/default/jdbc-sqlite-topic"\nsinkType: "jdbc-sqlite"\nconfigs:\n    jdbcUrl: "jdbc:sqlite:db.sqlite"\n    tableName: "pulsar_sqlite_jdbc_sink"\n\n')))))}d.isMDXComponent=!0}}]);