"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[7537],{63306:function(e,r,n){var t=n(75068),a=n(93333),s=n(81876),l=n(67294),i=n(44908);var o=function(e){function r(){return e.apply(this,arguments)||this}(0,t.Z)(r,e);var n=r.prototype;return n.componentDidMount=function(){var e=(0,s.bo)(),r=window.location.search,n=i[0],t=this.props.module||"pulsar-admin",a=(r=r.replace("?","")).split("&");if(a&&a.length>0)for(var l in a){var o=a[l].split("=");"version"===o[0]&&(e=o[1])}if("master"===e){var p=n.split(".");e=parseInt(p[0])+"."+(parseInt(p[1])+1)+".0"}var c=e.split("."),u=parseInt(c[0]),f=parseInt(c[1]),d=5,m="/pulsar-admin";"pulsar-client"===t?(d=8,m="/reference-cli-tools/#pulsar-client"):"pulsar-perf"===t?(d=8,m="/reference-cli-tools/#pulsar-perf"):"pulsar"===t&&(d=8,m="/reference-cli-tools/#pulsar"),u>1&&f<=d||1===u?window.location.href=e===n?"/docs"+m:"/docs/"+e+m:(e=parseInt(c[0])+"."+parseInt(c[1])+".0",window.location.href="/tools/"+t+"/"+e+"-SNAPSHOT")},n.render=function(){return l.createElement(a.Z,null,l.createElement("div",{className:"tailwind"},l.createElement("div",{className:"my-12 container"})))},r}(l.Component);r.Z=o},58272:function(e,r,n){n.r(r);var t=n(63306),a=n(67294);r.default=function(){return a.createElement(t.Z,{module:"pulsar-perf"})}}}]);