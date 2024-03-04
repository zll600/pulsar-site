"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[36139],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>y});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),p=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(i.Provider,{value:a},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(n),u=r,y=g["".concat(i,".").concat(u)]||g[u]||m[u]||l;return n?t.createElement(y,o(o({ref:a},c),{},{components:n})):t.createElement(y,o({ref:a},c))}));function y(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23959:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var t=n(58168),r=(n(96540),n(15680));const l={id:"io-canal-source",title:"Canal source connector",sidebar_label:"Canal source connector",original_id:"io-canal-source"},o=void 0,s={unversionedId:"io-canal-source",id:"version-2.9.x/io-canal-source",title:"Canal source connector",description:"The Canal source connector pulls messages from MySQL to Pulsar topics.",source:"@site/versioned_docs/version-2.9.x/io-canal-source.md",sourceDirName:".",slug:"/io-canal-source",permalink:"/docs/2.9.x/io-canal-source",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/io-canal-source.md",tags:[],version:"2.9.x",frontMatter:{id:"io-canal-source",title:"Canal source connector",sidebar_label:"Canal source connector",original_id:"io-canal-source"}},i={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Property",id:"property",level:3},{value:"Example",id:"example",level:3},{value:"Usage",id:"usage",level:2}],c={toc:p},g="wrapper";function m(e){let{components:a,...n}=e;return(0,r.yg)(g,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Canal source connector pulls messages from MySQL to Pulsar topics."),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("p",null,"The configuration of Canal source connector has the following properties."),(0,r.yg)("h3",{id:"property"},"Property"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Default"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"username")),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Canal server account (not MySQL).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"password")),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Canal server password (not MySQL).")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"destination")),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Source destination that Canal source connector connects to.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"singleHostname")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Canal server address.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"singlePort")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Canal server port.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"cluster")),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether to enable cluster mode based on Canal server configuration or not.",(0,r.yg)("br",null),(0,r.yg)("br",null),(0,r.yg)("li",null,"true: ",(0,r.yg)("strong",{parentName:"td"},"cluster")," mode.",(0,r.yg)("br",null),"If set to true, it talks to ",(0,r.yg)("inlineCode",{parentName:"td"},"zkServers")," to figure out the actual database host.",(0,r.yg)("br",null),(0,r.yg)("br",null)),(0,r.yg)("li",null,"false: ",(0,r.yg)("strong",{parentName:"td"},"standalone")," mode.",(0,r.yg)("br",null),"If set to false, it connects to the database specified by ",(0,r.yg)("inlineCode",{parentName:"td"},"singleHostname")," and ",(0,r.yg)("inlineCode",{parentName:"td"},"singlePort"),". "))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"zkServers")),(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"None"),(0,r.yg)("td",{parentName:"tr",align:null},"Address and port of the Zookeeper that Canal source connector talks to figure out the actual database host.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"batchSize")),(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"1000"),(0,r.yg)("td",{parentName:"tr",align:null},"Batch size to fetch from Canal.")))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"Before using the Canal connector, you can create a configuration file through one of the following methods."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"JSON"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-json"},'\n{\n    "zkServers": "127.0.0.1:2181",\n    "batchSize": "5120",\n    "destination": "example",\n    "username": "",\n    "password": "",\n    "cluster": false,\n    "singleHostname": "127.0.0.1",\n    "singlePort": "11111",\n}\n\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"YAML"),(0,r.yg)("p",{parentName:"li"},"You can create a YAML file and copy the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/pulsar/blob/master/pulsar-io/canal/src/main/resources/canal-mysql-source-config.yaml"},"contents")," below to your YAML file."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    zkServers: "127.0.0.1:2181"\n    batchSize: 5120\n    destination: "example"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "127.0.0.1"\n    singlePort: 11111\n\n')))),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"Here is an example of storing MySQL data using the configuration file as above."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull mysql:5.7\n$ docker run -d -it --rm --name pulsar-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=canal -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw mysql:5.7\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"mysqld.cnf"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n[mysqld]\npid-file    = /var/run/mysqld/mysqld.pid\nsocket      = /var/run/mysqld/mysqld.sock\ndatadir     = /var/lib/mysql\n#log-error  = /var/log/mysql/error.log\n# By default we only accept connections from localhost\n#bind-address   = 127.0.0.1\n# Disabling symbolic-links is recommended to prevent assorted security risks\nsymbolic-links=0\nlog-bin=mysql-bin\nbinlog-format=ROW\nserver_id=1\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"mysqld.cnf")," to MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp mysqld.cnf pulsar-mysql:/etc/mysql/mysql.conf.d/\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Restart the MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker restart pulsar-mysql\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a test database in MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal -e 'create database test;'\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start a Canal server and connect to MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"\n$ docker pull canal/canal-server:v1.1.2\n$ docker run -d -it --link pulsar-mysql -e canal.auto.scan=false -e canal.destinations=test -e canal.instance.master.address=pulsar-mysql:3306 -e canal.instance.dbUsername=root -e canal.instance.dbPassword=canal -e canal.instance.connectionCharset=UTF-8 -e canal.instance.tsdb.enable=true -e canal.instance.gtidon=false --name=pulsar-canal-server -p 8000:8000 -p 2222:2222 -p 11111:11111 -p 11112:11112 -m 4096m canal/canal-server:v1.1.2\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Start Pulsar standalone."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker pull apachepulsar/pulsar:2.3.0\n$ docker run -d -it --link pulsar-canal-server -p 6650:6650 -p 8080:8080 -v $PWD/data:/pulsar/data --name pulsar-standalone apachepulsar/pulsar:2.3.0 bin/pulsar standalone\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"canal-mysql-source-config.yaml"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'\nconfigs:\n    zkServers: ""\n    batchSize: "5120"\n    destination: "test"\n    username: ""\n    password: ""\n    cluster: false\n    singleHostname: "pulsar-canal-server"\n    singlePort: "11111"\n\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a consumer file ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client.py"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-python"},"\nimport pulsar\n\nclient = pulsar.Client('pulsar://localhost:6650')\nconsumer = client.subscribe('my-topic',\n                            subscription_name='my-sub')\n\nwhile True:\n    msg = consumer.receive()\n    print(\"Received message: '%s'\" % msg.data())\n    consumer.acknowledge(msg)\n\nclient.close()\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the configuration file ",(0,r.yg)("inlineCode",{parentName:"p"},"canal-mysql-source-config.yaml")," and the consumer file  ",(0,r.yg)("inlineCode",{parentName:"p"},"pulsar-client.py")," to Pulsar server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker cp canal-mysql-source-config.yaml pulsar-standalone:/pulsar/conf/\n$ docker cp pulsar-client.py pulsar-standalone:/pulsar/\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download a Canal connector and start it."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-standalone /bin/bash\n$ wget https://archive.apache.org/dist/pulsar/pulsar-2.3.0/connectors/pulsar-io-canal-2.3.0.nar -P connectors\n$ ./bin/pulsar-admin source localrun \\\n--archive ./connectors/pulsar-io-canal-2.3.0.nar \\\n--classname org.apache.pulsar.io.canal.CanalStringSource \\\n--tenant public \\\n--namespace default \\\n--name canal \\\n--destination-topic-name my-topic \\\n--source-config-file /pulsar/conf/canal-mysql-source-config.yaml \\\n--parallelism 1\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Consume data from MySQL."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-standalone /bin/bash\n$ python pulsar-client.py\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open another window to log in MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\n$ docker exec -it pulsar-mysql /bin/bash\n$ mysql -h 127.0.0.1 -uroot -pcanal\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a table, and insert, delete, and update data in MySQL server."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"\nmysql> use test;\nmysql> show tables;\nmysql> CREATE TABLE IF NOT EXISTS `test_table`(`test_id` INT UNSIGNED AUTO_INCREMENT,`test_title` VARCHAR(100) NOT NULL,\n`test_author` VARCHAR(40) NOT NULL,\n`test_date` DATE,PRIMARY KEY ( `test_id` ))ENGINE=InnoDB DEFAULT CHARSET=utf8;\nmysql> INSERT INTO test_table (test_title, test_author, test_date) VALUES(\"a\", \"b\", NOW());\nmysql> UPDATE test_table SET test_title='c' WHERE test_title='a';\nmysql> DELETE FROM test_table WHERE test_title='c';\n\n")))))}m.isMDXComponent=!0}}]);