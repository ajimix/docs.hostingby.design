"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[176,6779],{5162:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),s=a(6010),r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,o),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(3117),s=a(7294),r=a(6010),o=a(2466),l=a(6550),i=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}function d(e){const{values:t,children:a}=e;return(0,s.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=d(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=b({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,s.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),f=(()=>{const e=i??p;return m({value:e,tabValues:r})?e:null})();(0,s.useEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var f=a(2389),v="tabList__CuJ",g="tabItem_LNqP";function k(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,r.Z)("tabs__item",g,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(t){const e=a.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=h(e);return s.createElement("div",{className:(0,r.Z)("tabs-container",v)},s.createElement(k,(0,n.Z)({},e,t)),s.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return s.createElement(T,(0,n.Z)({key:String(t)},e))}},642:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c}});var n=a(3117),s=(a(7294),a(3905)),r=a(432);const o={id:"application-basics",title:"Application Basics",sidebar_label:"Basics"},l=void 0,i={unversionedId:"appslots/applications/application-basics",id:"appslots/applications/application-basics",title:"Application Basics",description:"In the following section, you can learn more about the applications offered by the HostingByDesign installer, how to install them and configure them for use with other applications provided by box.",source:"@site/docs/appslots/applications/basics.mdx",sourceDirName:"appslots/applications",slug:"/appslots/applications/application-basics",permalink:"/appslots/applications/application-basics",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/applications/basics.mdx",tags:[],version:"current",frontMatter:{id:"application-basics",title:"Application Basics",sidebar_label:"Basics"},sidebar:"docs",previous:{title:"FTP bouncers",permalink:"/appslots/getting-started/ftp-bouncer"},next:{title:"rTorrent",permalink:"/appslots/applications/rtorrent"}},u={},c=[{value:"Installation and Removal",id:"installation-and-removal",level:2},{value:"Service Management",id:"service-management",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In the following section, you can learn more about the applications offered by the HostingByDesign installer, how to install them and configure them for use with other applications provided by box."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Many applications offer a significant array of configuration options. Most of them won't be covered in the following pages. Rather, you should read the wikis and manual pages for the applications in question to understand the full breadth of the options available."),(0,s.kt)("p",{parentName:"admonition"},"That said, when looking over the options, ",(0,s.kt)("strong",{parentName:"p"},"you should never adjust variables such as ",(0,s.kt)("inlineCode",{parentName:"strong"},"URL Base"),", ",(0,s.kt)("inlineCode",{parentName:"strong"},"Bind IP")," and ",(0,s.kt)("inlineCode",{parentName:"strong"},"Port")),". Doing so may break the integration with your services and may result in broken packages.")),(0,s.kt)("h2",{id:"installation-and-removal"},"Installation and Removal"),(0,s.kt)("p",null,"For all packages managed by box, the command to install a package is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"box install <package name>\n")),(0,s.kt)("p",null,"Packages can also be removed with the command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"box remove <package name>\n")),(0,s.kt)("admonition",{type:"warning"},(0,s.kt)("p",{parentName:"admonition"},"Please be aware that removing a package will remove ",(0,s.kt)("strong",{parentName:"p"},"all")," associated data with that application. This operation cannot be undone.")),(0,s.kt)("h2",{id:"service-management"},"Service Management"),(0,s.kt)("p",null,"All box configured applications can be managed with start, stop, restart, enable and disable commands."),(0,s.kt)(r.default,{service:"btsync",mdxType:"SystemdTabs"}),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Enable and disable refer to whether or not the package should be started when the server is booted. ",(0,s.kt)("inlineCode",{parentName:"p"},"enable")," means start at boot and ",(0,s.kt)("inlineCode",{parentName:"p"},"disable")," means remove it auto start entries.")))}d.isMDXComponent=!0},432:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=a(3117),s=(a(7294),a(3905)),r=a(4866),o=a(5162),l=a(814);const i={},u=void 0,c={unversionedId:"appslots/snippets/systemdtabs",id:"appslots/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/appslots/snippets/systemdtabs.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/systemdtabs",permalink:"/appslots/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(o.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(l.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);