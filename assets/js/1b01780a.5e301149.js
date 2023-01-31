"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[9851,6779],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(4334),s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return T}});var n=a(3117),r=a(7294),s=a(4334),o=a(2466),l=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,u]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),h=(()=>{const e=i??d;return m({value:e,tabValues:s})?e:null})();(0,r.useEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var h=a(2389),g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,s.Z)("tabs__item",v,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},3146:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=a(3117),r=(a(7294),a(3905)),s=a(432);const o={id:"medusa",title:"Medusa",sidebar_label:"Medusa"},l=void 0,i={unversionedId:"appslots/applications/medusa",id:"appslots/applications/medusa",title:"Medusa",description:"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic.",source:"@site/docs/appslots/applications/medusa.mdx",sourceDirName:"appslots/applications",slug:"/appslots/applications/medusa",permalink:"/appslots/applications/medusa",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/applications/medusa.mdx",tags:[],version:"current",frontMatter:{id:"medusa",title:"Medusa",sidebar_label:"Medusa"},sidebar:"docs",previous:{title:"Autodl",permalink:"/appslots/applications/autodl"},next:{title:"Sonarr",permalink:"/appslots/applications/sonarr"}},u={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Connect to other clients",id:"connect-to-other-clients",level:2},{value:"rTorrent",id:"rtorrent",level:3},{value:"Deluge (via Daemon)",id:"deluge-via-daemon",level:3},{value:"Deluge (via Web)",id:"deluge-via-web",level:3},{value:"NZBget",id:"nzbget",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"(py)Medusa is an automatic video library manager for TV Shows written in Python. It watches for new episodes of your favorite shows, and when they are posted it does its magic."),(0,r.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,r.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,r.kt)("a",{parentName:"p",href:"/appslots/getting-started/how-do-i-connect"},"here"),"."),(0,r.kt)("p",null,"Installing Medusa is easy. Simply issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install medusa\n")),(0,r.kt)("p",null,"This command will configure medusa for your user."),(0,r.kt)("h2",{id:"how-to-access"},"How to Access"),(0,r.kt)("p",null,"After installation, you can access Medusa at the url: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://<yourhostname.io>/medusa")),(0,r.kt)("h2",{id:"service-management"},"Service Management"),(0,r.kt)("p",null,"Like all box configured applications, you can manage Medusa via SSH with box with start, stop, restart, enable and disable commands."),(0,r.kt)(s.default,{service:"medusa",mdxType:"SystemdTabs"}),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"If you are unfamiliar with Medusa, please check out their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pymedusa/Medusa/wiki"},"wiki")," for assistance in getting your trackers setup or learning how to add shows or setup post-processing."),(0,r.kt)("h2",{id:"connect-to-other-clients"},"Connect to other clients"),(0,r.kt)("h3",{id:"rtorrent"},"rTorrent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Send torrent files to: rTorrent\nrTorrent host/port: https://127.0.0.1/rutorrent/plugins/httprpc/action.php\nHttp Authentication: Basic\nVerify certificate: off (shouldn't need to be turned on)\nrTorrent username: <your username>\nrTorrent password: <your password>\nAdd label to torrent: TV (or anything else you desire)\nDownloaded files location: ~/torrents/rtorrent (or a custom directory)\n")),(0,r.kt)("h3",{id:"deluge-via-daemon"},"Deluge (via Daemon)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Send torrent files to: Deluge (via Daemon)\nDeluge: 127.0.0.1:<your daemon port>\nVerify certificate: off\nDeluge username: <your username>\nDeluge password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\n")),(0,r.kt)("h3",{id:"deluge-via-web"},"Deluge (via Web)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"Send torrent files to: Deluge (via Web)\nDeluge: 127.0.0.1:<your web port>\nVerify Certificate: off\nDeluge Password: <your password>\nAdd label to torrent: TV (or anything else you desire)\n* label plugin must be enabled in Deluge if you add a label\n")),(0,r.kt)("h3",{id:"nzbget"},"NZBget"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},'Send nzb files to: nzbget\nNZBget host:port: 127.0.0.1/nzbget\nConnect using HTTPS: ON\nnzbget username: <your username>\nnzbget Password: <your password>\nAdd label to torrent: Series (or anything else you desire)\n* label must exist under "Categories" in nzbGet\n')))}p.isMDXComponent=!0},432:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=a(3117),r=(a(7294),a(3905)),s=a(4866),o=a(5162),l=a(814);const i={},u=void 0,c={unversionedId:"appslots/snippets/systemdtabs",id:"appslots/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/appslots/snippets/systemdtabs.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/systemdtabs",permalink:"/appslots/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},d={},p=[],m={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"code"},(0,r.kt)(s.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,r.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,r.kt)(l.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);