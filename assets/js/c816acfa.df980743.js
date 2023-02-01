"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[4953,5342],{5162:function(e,t,n){n.d(t,{Z:function(){return a}});var s=n(7294),o=n(4334),r="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return s.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,a),hidden:n},t)}},4866:function(e,t,n){n.d(t,{Z:function(){return T}});var s=n(3117),o=n(7294),r=n(4334),a=n(2466),i=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(s.location.search);t.set(r,e),s.replace({...s.location,search:t.toString()})}),[r,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,r=m(e),[a,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[l,u]=h({queryString:n,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,r]=(0,c.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),b=(()=>{const e=l??p;return d({value:e,tabValues:r})?e:null})();(0,o.useEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,o.useCallback)((e=>{if(!d({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var b=n(2389),g="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,a.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),s=u[n].value;s!==i&&(p(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,s.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},a,{className:(0,r.Z)("tabs__item",y,a?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:s}=e;if(t){const e=n.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s}))))}function w(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g)},o.createElement(v,(0,s.Z)({},e,t)),o.createElement(k,(0,s.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return o.createElement(w,(0,s.Z)({key:String(t)},e))}},1922:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var s=n(3117),o=(n(7294),n(3905)),r=n(4359),a=n(5578);const i={id:"lounge",title:"The Lounge",sidebar_label:"The Lounge"},l=void 0,u={unversionedId:"appslots/community-applications/lounge",id:"appslots/community-applications/lounge",title:"The Lounge",description:"A frequently asked question we get from customers is if we have support for The Lounge. At the time of writing, we don't officially support it, but it can be installed using a script a community member has written.",source:"@site/docs/appslots/community-applications/lounge.mdx",sourceDirName:"appslots/community-applications",slug:"/appslots/community-applications/lounge",permalink:"/appslots/community-applications/lounge",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/community-applications/lounge.mdx",tags:[],version:"current",frontMatter:{id:"lounge",title:"The Lounge",sidebar_label:"The Lounge"},sidebar:"docs",previous:{title:"Filebrowser",permalink:"/appslots/community-applications/filebrowser"},next:{title:"Overseerr",permalink:"/appslots/community-applications/overseerr"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Controlling the Systemd Service",id:"controlling-the-systemd-service",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"I Can&#39;t Remember my Port Number",id:"i-cant-remember-my-port-number",level:4},{value:"Viewing logs",id:"viewing-logs",level:4}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A frequently asked question we get from customers is if we have support for The Lounge. At the time of writing, we don't officially support it, but it can be installed using a script a community member has written."),(0,o.kt)("p",null,"To follow this guide, you will need to SSH into your server. If you need help with this, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/appslots/getting-started/how-do-i-connect"},"how do I connect")," article."),(0,o.kt)(r.default,{mdxType:"Community"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This installer will use your existing username and a password of your choice to secure The Lounge. Please consider ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/brettpetch/hosted-scripts/raw/master/lounge.sh"},"reading the script")," before running it. The installer will output a port number with how to access The Lounge install on completion. Please remember this number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sL https://github.com/brettpetch/hosted-scripts/raw/master/lounge.sh)\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If something goes wrong during your install, please consider checking the logs. You may find them by running the following:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"less -r +G ~/.logs/lounge.log\n")),(0,o.kt)("p",{parentName:"admonition"},"These can be helpful in cases where you need to see the output from installation.")),(0,o.kt)("p",null,"On first run, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>:<yourportnumber>")," to access The Lounge. This should ask you for a login. You will also receive a warning about SSL, which can be ignored safely."),(0,o.kt)("h2",{id:"controlling-the-systemd-service"},"Controlling the Systemd Service"),(0,o.kt)(a.default,{service:"lounge",mdxType:"UserSystemd"}),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"i-cant-remember-my-port-number"},"I Can't Remember my Port Number"),(0,o.kt)("p",null,"Please run ",(0,o.kt)("inlineCode",{parentName:"p"},"grep port: ~/.thelounge/config.js")),(0,o.kt)("p",null,"Your port number will be the first number."),(0,o.kt)("h4",{id:"viewing-logs"},"Viewing logs"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For application specific logs, consider running the following:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl --user status lounge\n")),(0,o.kt)("p",{parentName:"admonition"},"You can exit ",(0,o.kt)("inlineCode",{parentName:"p"},"less")," by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"q")," at any point.")))}d.isMDXComponent=!0},4359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return u}});var s=n(3117),o=(n(7294),n(3905));const r={},a=void 0,i={unversionedId:"appslots/snippets/community",id:"appslots/snippets/community",title:"community",description:"These tools are not officially supported. Please consider reaching out to our Discord for unofficial community-driven support on anything listed below.",source:"@site/docs/appslots/snippets/community.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/community",permalink:"/appslots/snippets/community",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/snippets/community.mdx",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"These tools are not officially supported. Please consider reaching out to ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wv67teS"},"our Discord")," for unofficial community-driven support on anything listed below.")))}p.isMDXComponent=!0},5578:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var s=n(3117),o=(n(7294),n(3905)),r=n(4866),a=n(5162),i=n(814);const l={},u=void 0,c={unversionedId:"appslots/snippets/usersystemd",id:"appslots/snippets/usersystemd",title:"usersystemd",description:"<Tabs",source:"@site/docs/appslots/snippets/usersystemd.mdx",sourceDirName:"appslots/snippets",slug:"/appslots/snippets/usersystemd",permalink:"/appslots/snippets/usersystemd",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/snippets/usersystemd.mdx",tags:[],version:"current",frontMatter:{}},p={},m=[],d={toc:m};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"code"},(0,o.kt)(r.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,o.kt)(a.Z,{value:"status",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user status "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(a.Z,{value:"start",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user start "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(a.Z,{value:"stop",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user stop "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(a.Z,{value:"restart",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user restart "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(a.Z,{value:"enable",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user enable "+n.service,className:"bash",mdxType:"CodeBlock"})),(0,o.kt)(a.Z,{value:"disable",mdxType:"TabItem"},(0,o.kt)(i.Z,{children:"systemctl --user disable "+n.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);