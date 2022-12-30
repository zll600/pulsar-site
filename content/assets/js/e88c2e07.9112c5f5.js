"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[8709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},70998:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={id:"deploy-aws",title:"Deploying a Pulsar cluster on AWS using Terraform and Ansible",sidebar_label:"Amazon Web Services",original_id:"deploy-aws"},o=void 0,s={unversionedId:"deploy-aws",id:"version-2.9.x/deploy-aws",title:"Deploying a Pulsar cluster on AWS using Terraform and Ansible",description:"For instructions on deploying a single Pulsar cluster manually rather than using Terraform and Ansible, see Deploying a Pulsar cluster on bare metal. For instructions on manually deploying a multi-cluster Pulsar instance, see Deploying a Pulsar instance on bare metal.",source:"@site/versioned_docs/version-2.9.x/deploy-aws.md",sourceDirName:".",slug:"/deploy-aws",permalink:"/docs/2.9.x/deploy-aws",draft:!1,editUrl:"https://github.com/apache/pulsar-site/edit/main/versioned_docs/version-2.9.x/deploy-aws.md",tags:[],version:"2.9.x",frontMatter:{id:"deploy-aws",title:"Deploying a Pulsar cluster on AWS using Terraform and Ansible",sidebar_label:"Amazon Web Services",original_id:"deploy-aws"},sidebar:"version-2.9.x/docsSidebar",previous:{title:"Required Tools",permalink:"/docs/2.9.x/helm-tools"},next:{title:"Kubernetes",permalink:"/docs/2.9.x/deploy-kubernetes"}},i={},p=[{value:"Requirements and setup",id:"requirements-and-setup",level:2},{value:"Installation",id:"installation",level:2},{value:"SSH setup",id:"ssh-setup",level:2},{value:"Create AWS resources using Terraform",id:"create-aws-resources-using-terraform",level:2},{value:"Apply a non-default configuration",id:"apply-a-non-default-configuration",level:3},{value:"What is installed",id:"what-is-installed",level:3},{value:"Fetch your Pulsar connection URL",id:"fetch-your-pulsar-connection-url",level:3},{value:"Destroy your cluster",id:"destroy-your-cluster",level:3},{value:"Setup Disks",id:"setup-disks",level:2},{value:"Run the Pulsar playbook",id:"run-the-pulsar-playbook",level:2},{value:"Access the cluster",id:"access-the-cluster",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For instructions on deploying a single Pulsar cluster manually rather than using Terraform and Ansible, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/deploy-bare-metal"},"Deploying a Pulsar cluster on bare metal"),". For instructions on manually deploying a multi-cluster Pulsar instance, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/deploy-bare-metal-multi-cluster"},"Deploying a Pulsar instance on bare metal"),".")),(0,r.kt)("p",null,"One of the easiest ways to get a Pulsar ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/reference-terminology#cluster"},"cluster")," running on ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"Amazon Web Services")," (AWS) is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://terraform.io"},"Terraform")," infrastructure provisioning tool and the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ansible.com"},"Ansible")," server automation tool. Terraform can create the resources necessary for running the Pulsar cluster---",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/"},"EC2")," instances, networking and security infrastructure, etc.---While Ansible can install and run Pulsar on the provisioned resources."),(0,r.kt)("h2",{id:"requirements-and-setup"},"Requirements and setup"),(0,r.kt)("p",null,"In order to install a Pulsar cluster on AWS using Terraform and Ansible, you need to prepare the following things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/account/"},"AWS account")," and the ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},(0,r.kt)("inlineCode",{parentName:"a"},"aws"))," command-line tool"),(0,r.kt)("li",{parentName:"ul"},"Python and ",(0,r.kt)("a",{parentName:"li",href:"https://pip.pypa.io/en/stable/"},"pip")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/adammck/terraform-inventory"},(0,r.kt)("inlineCode",{parentName:"a"},"terraform-inventory"))," tool, which enables Ansible to use Terraform artifacts")),(0,r.kt)("p",null,"You also need to make sure that you are currently logged into your AWS account via the ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," tool:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ aws configure\n\n")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You can install Ansible on Linux or macOS using pip."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pip install ansible\n\n")),(0,r.kt)("p",null,"You can install Terraform using the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"here"),"."),(0,r.kt)("p",null,"You also need to have the Terraform and Ansible configuration for Pulsar locally on your machine. You can find them in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/pulsar"},"GitHub repository")," of Pulsar, which you can fetch using Git commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ git clone https://github.com/apache/pulsar\n$ cd pulsar/deployment/terraform-ansible/aws\n\n")),(0,r.kt)("h2",{id:"ssh-setup"},"SSH setup"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If you already have an SSH key and want to use it, you can skip the step of generating an SSH key and update ",(0,r.kt)("inlineCode",{parentName:"p"},"private_key_file")," setting\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"ansible.cfg")," file and ",(0,r.kt)("inlineCode",{parentName:"p"},"public_key_path")," setting in ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," file."),(0,r.kt)("p",{parentName:"blockquote"},"For example, if you already have a private SSH key in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/pulsar_aws")," and a public key in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/pulsar_aws.pub"),",\nfollow the steps below:"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"ansible.cfg")," with following values:"))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nprivate_key_file=~/.ssh/pulsar_aws\n\n\n"))),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"update ",(0,r.kt)("inlineCode",{parentName:"li"},"terraform.tfvars")," with following values:"))),(0,r.kt)("blockquote",null,(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\npublic_key_path=~/.ssh/pulsar_aws.pub\n\n\n"))),(0,r.kt)("p",null,"In order to create the necessary AWS resources using Terraform, you need to create an SSH key. Enter the following commands to create a private SSH key in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa")," and a public key in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa.pub"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ssh-keygen -t rsa\n\n")),(0,r.kt)("p",null,"Do ",(0,r.kt)("em",{parentName:"p"},"not")," enter a passphrase (hit ",(0,r.kt)("strong",{parentName:"p"},"Enter")," instead when the prompt comes out). Enter the following command to verify that a key has been created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ls ~/.ssh\nid_rsa               id_rsa.pub\n\n")),(0,r.kt)("h2",{id:"create-aws-resources-using-terraform"},"Create AWS resources using Terraform"),(0,r.kt)("p",null,"To start building AWS resources with Terraform, you need to install all Terraform dependencies. Enter the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ terraform init\n# This will create a .terraform folder\n\n")),(0,r.kt)("p",null,"After that, you can apply the default Terraform configuration by entering this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ terraform apply\n\n")),(0,r.kt)("p",null,"Then you see this prompt below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nDo you want to perform these actions?\n  Terraform will perform the actions described above.\n  Only 'yes' will be accepted to approve.\n\n  Enter a value:\n\n")),(0,r.kt)("p",null,"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," and hit ",(0,r.kt)("strong",{parentName:"p"},"Enter"),". Applying the configuration could take several minutes. When the configuration applying finishes, you can see ",(0,r.kt)("inlineCode",{parentName:"p"},"Apply complete!")," along with some other information, including the number of resources created."),(0,r.kt)("h3",{id:"apply-a-non-default-configuration"},"Apply a non-default configuration"),(0,r.kt)("p",null,"You can apply a non-default Terraform configuration by changing the values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," file. The following variables are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Variable name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"public_key_path")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The path of the public key that you have generated."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"~/.ssh/id_rsa.pub"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"region")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The AWS region in which the Pulsar cluster runs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"us-west-2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"availability_zone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The AWS availability zone in which the Pulsar cluster runs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"us-west-2a"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"aws_ami")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html"},"Amazon Machine Image")," (AMI) that the cluster uses"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ami-9fa343e7"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num_zookeeper_nodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of ",(0,r.kt)("a",{parentName:"td",href:"https://zookeeper.apache.org"},"ZooKeeper")," nodes in the ZooKeeper cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num_bookie_nodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of bookies that runs in the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num_broker_nodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of Pulsar brokers that runs in the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"num_proxy_nodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of Pulsar proxies that runs in the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"base_cidr_block")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The root ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing"},"CIDR")," that network assets uses for the cluster"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"10.0.0.0/16"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"instance_types")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The EC2 instance types to be used. This variable is a map with two keys: ",(0,r.kt)("inlineCode",{parentName:"td"},"zookeeper")," for the ZooKeeper instances, ",(0,r.kt)("inlineCode",{parentName:"td"},"bookie")," for the BookKeeper bookies and ",(0,r.kt)("inlineCode",{parentName:"td"},"broker")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"proxy")," for Pulsar brokers and bookies"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"t2.small")," (ZooKeeper), ",(0,r.kt)("inlineCode",{parentName:"td"},"i3.xlarge")," (BookKeeper) and ",(0,r.kt)("inlineCode",{parentName:"td"},"c5.2xlarge")," (Brokers/Proxies)")))),(0,r.kt)("h3",{id:"what-is-installed"},"What is installed"),(0,r.kt)("p",null,"When you run the Ansible playbook, the following AWS resources are used:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"9 total ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/ec2"},"Elastic Compute Cloud")," (EC2) instances running the ",(0,r.kt)("a",{parentName:"li",href:"https://access.redhat.com/articles/3135091"},"ami-9fa343e7")," Amazon Machine Image (AMI), which runs ",(0,r.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html-single/7.4_release_notes/index"},"Red Hat Enterprise Linux (RHEL) 7.4"),". By default, that includes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3 small VMs for ZooKeeper (",(0,r.kt)("a",{parentName:"li",href:"https://www.ec2instances.info/?selected=t2.small"},"t2.small")," instances)"),(0,r.kt)("li",{parentName:"ul"},"3 larger VMs for BookKeeper ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.9.x/reference-terminology#bookie"},"bookies")," (",(0,r.kt)("a",{parentName:"li",href:"https://www.ec2instances.info/?selected=i3.xlarge"},"i3.xlarge")," instances)"),(0,r.kt)("li",{parentName:"ul"},"2 larger VMs for Pulsar ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.9.x/reference-terminology#broker"},"brokers")," (",(0,r.kt)("a",{parentName:"li",href:"https://www.ec2instances.info/?selected=c5.2xlarge"},"c5.2xlarge")," instances)"),(0,r.kt)("li",{parentName:"ul"},"1 larger VMs for Pulsar ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.9.x/reference-terminology#proxy"},"proxy")," (",(0,r.kt)("a",{parentName:"li",href:"https://www.ec2instances.info/?selected=c5.2xlarge"},"c5.2xlarge")," instances)"))),(0,r.kt)("li",{parentName:"ul"},"An EC2 ",(0,r.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html"},"security group")),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/vpc/"},"virtual private cloud")," (VPC) for security"),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/api-gateway/"},"API Gateway")," for connections from the outside world"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Route_Tables.html"},"route table")," for the Pulsar cluster's VPC"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"http://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_Subnets.html"},"subnet")," for the VPC")),(0,r.kt)("p",null,"All EC2 instances for the cluster run in the ",(0,r.kt)("a",{parentName:"p",href:"http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html"},"us-west-2")," region."),(0,r.kt)("h3",{id:"fetch-your-pulsar-connection-url"},"Fetch your Pulsar connection URL"),(0,r.kt)("p",null,"When you apply the Terraform configuration by entering the command ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform apply"),", Terraform outputs a value for the ",(0,r.kt)("inlineCode",{parentName:"p"},"pulsar_service_url"),". The value should look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\npulsar://pulsar-elb-1800761694.us-west-2.elb.amazonaws.com:6650\n\n")),(0,r.kt)("p",null,"You can fetch that value at any time by entering the command ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform output pulsar_service_url")," or parsing the ",(0,r.kt)("inlineCode",{parentName:"p"},"terraform.tstate")," file (which is JSON, even though the filename does not reflect that):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ cat terraform.tfstate | jq .modules[0].outputs.pulsar_service_url.value\n\n")),(0,r.kt)("h3",{id:"destroy-your-cluster"},"Destroy your cluster"),(0,r.kt)("p",null,"At any point, you can destroy all AWS resources associated with your cluster using Terraform's ",(0,r.kt)("inlineCode",{parentName:"p"},"destroy")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ terraform destroy\n\n")),(0,r.kt)("h2",{id:"setup-disks"},"Setup Disks"),(0,r.kt)("p",null,"Before you run the Pulsar playbook, you need to mount the disks to the correct directories on those bookie nodes. Since different types of machines have different disk layouts, you need to update the task defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-disk.yaml")," file after changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"instance_types")," in your terraform config,"),(0,r.kt)("p",null,"To setup disks on bookie nodes, enter this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  setup-disk.yaml\n\n")),(0,r.kt)("p",null,"After that, the disks are mounted under ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/journal")," as journal disk, and ",(0,r.kt)("inlineCode",{parentName:"p"},"/mnt/storage")," as ledger disk.\nRemember to enter this command just only once. If you attempt to enter this command again after you have run Pulsar playbook, your disks might potentially be erased again, causing the bookies to fail to start up."),(0,r.kt)("h2",{id:"run-the-pulsar-playbook"},"Run the Pulsar playbook"),(0,r.kt)("p",null,"Once you have created the necessary AWS resources using Terraform, you can install and run Pulsar on the Terraform-created EC2 instances using Ansible. "),(0,r.kt)("p",null,"(Optional) If you want to use any ",(0,r.kt)("a",{parentName:"p",href:"/docs/2.9.x/io-connectors"},"built-in IO connectors")," , edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Download Pulsar IO packages")," task in the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy-pulsar.yaml")," file and uncomment the connectors you want to use. "),(0,r.kt)("p",null,"To run the playbook, enter this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  ../deploy-pulsar.yaml\n\n")),(0,r.kt)("p",null,"If you have created a private SSH key at a location different from ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.ssh/id_rsa"),", you can specify the different location using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--private-key")," flag in the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ ansible-playbook \\\n  --user='ec2-user' \\\n  --inventory=`which terraform-inventory` \\\n  --private-key=\"~/.ssh/some-non-default-key\" \\\n  ../deploy-pulsar.yaml\n\n")),(0,r.kt)("h2",{id:"access-the-cluster"},"Access the cluster"),(0,r.kt)("p",null,"You can now access your running Pulsar using the unique Pulsar connection URL for your cluster, which you can obtain following the instructions ",(0,r.kt)("a",{parentName:"p",href:"#fetching-your-pulsar-connection-url"},"above"),"."),(0,r.kt)("p",null,"For a quick demonstration of accessing the cluster, we can use the Python client for Pulsar and the Python shell. First, install the Pulsar Python module using pip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ pip install pulsar-client\n\n")),(0,r.kt)("p",null,"Now, open up the Python shell using the ",(0,r.kt)("inlineCode",{parentName:"p"},"python")," command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ python\n\n")),(0,r.kt)("p",null,"Once you are in the shell, enter the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n>>> import pulsar\n>>> client = pulsar.Client('pulsar://pulsar-elb-1800761694.us-west-2.elb.amazonaws.com:6650')\n# Make sure to use your connection URL\n>>> producer = client.create_producer('persistent://public/default/test-topic')\n>>> producer.send('Hello world')\n>>> client.close()\n\n")),(0,r.kt)("p",null,"If all of these commands are successful, Pulsar clients can now use your cluster!"))}c.isMDXComponent=!0}}]);