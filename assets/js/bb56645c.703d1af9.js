"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[1129,8587],{9748:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return r},toc:function(){return c}});var n=a(3117),s=(a(7294),a(3905)),i=a(5532);const l={id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},o=void 0,r={unversionedId:"application-hosting/applications/jellyfin",id:"application-hosting/applications/jellyfin",title:"Jellyfin",description:"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project.",source:"@site/docs/application-hosting/applications/jellyfin.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/jellyfin",permalink:"/application-hosting/applications/jellyfin",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/jellyfin.mdx",tags:[],version:"current",frontMatter:{id:"jellyfin",title:"Jellyfin",sidebar_label:"Jellyfin"},sidebar:"docs",previous:{title:"Emby",permalink:"/application-hosting/applications/emby"},next:{title:"Resilio (bt)Sync",permalink:"/application-hosting/applications/btsync"}},p={},c=[{value:"Installation",id:"installation",level:2},{value:"Access",id:"access",level:2},{value:"User management",id:"user-management",level:2},{value:"Service management",id:"service-management",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Jellyfin is a self-hosted AV streaming platform. It is a FOSS fork of the Emby project."),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"You can install Jellyfin using the following command."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo box install jellyfin\n")),(0,s.kt)("admonition",{title:"Finish install in browser",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Please make sure to finish the setup of the application through the web browser, and create your admin user.")),(0,s.kt)("h2",{id:"access"},"Access"),(0,s.kt)("p",null,"You can access jellyfin through ",(0,s.kt)("inlineCode",{parentName:"p"},"https://appxx.lw.hostingby.design/<yourusername>/jellyfin"),"."),(0,s.kt)("h2",{id:"user-management"},"User management"),(0,s.kt)("p",null,"Jellyfin manages its users in a separate database. Please use the Web-UI to manage users and media."),(0,s.kt)("h2",{id:"service-management"},"Service management"),(0,s.kt)(i.default,{service:"jellyfin",mdxType:"SystemdTabs"}),(0,s.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,s.kt)("p",null,'If you were early-access to the apprange and have been experiencing issues with Jellyfin, please change your transcode hardware acceleration to "none".'),(0,s.kt)("p",null,"Jellyfin has a general ",(0,s.kt)("a",{parentName:"p",href:"https://jellyfin.org/docs/general/administration/troubleshooting.html"},"Troubleshooting guide")," which we highly suggest you follow first in case you have any issues."),(0,s.kt)("p",null,"If you recently reinstalled Jellyfin, you may need to clear your cookies and cache for your appbox url to properly access the web interface."),(0,s.kt)("p",null,"If all else fails, consider putting in a ",(0,s.kt)("a",{parentName:"p",href:"https://my.hostingby.design/submitticket.php?step=2&deptid=2"},"ticket"),"."))}d.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var n=a(3117),s=(a(7294),a(3905)),i=a(4866),l=a(5162),o=a(814);const r={},p=void 0,c={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},u={},d=[],m={toc:d};function h(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"code"},(0,s.kt)(i.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"status",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"start",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"stop",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"restart",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"enable",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,s.kt)(l.Z,{value:"disable",mdxType:"TabItem"},(0,s.kt)(o.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}h.isMDXComponent=!0}}]);