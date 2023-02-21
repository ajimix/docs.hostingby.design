"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[7843,8587],{8682:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return r},toc:function(){return p}});var i=a(3117),n=(a(7294),a(3905)),o=a(5532);const s={id:"emby",title:"Emby",sidebar_label:"Emby"},l=void 0,r={unversionedId:"application-hosting/applications/emby",id:"application-hosting/applications/emby",title:"Emby",description:"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets.",source:"@site/docs/application-hosting/applications/emby.mdx",sourceDirName:"application-hosting/applications",slug:"/application-hosting/applications/emby",permalink:"/application-hosting/applications/emby",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/applications/emby.mdx",tags:[],version:"current",frontMatter:{id:"emby",title:"Emby",sidebar_label:"Emby"},sidebar:"docs",previous:{title:"Tautulli",permalink:"/application-hosting/applications/tautulli"},next:{title:"Jellyfin",permalink:"/application-hosting/applications/jellyfin"}},d={},p=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"How to Access",id:"how-to-access",level:2},{value:"Emby Connect",id:"emby-connect",level:3},{value:"Service Management",id:"service-management",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Libraries",id:"libraries",level:3},{value:"Further setup",id:"further-setup",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Take your home videos, music, and photos with you wherever you go, even offline with Emby Mobile Sync. Emby mobile apps are available for Android, iPhone, iPad, Windows Phone and Windows Tablets."),(0,n.kt)("p",null,"Or sit back and enjoy Emby from the living room. Emby apps are available for Android TV, Amazon Fire TV, Chromecast, Roku, Xbox, Home Theater Computers, and more."),(0,n.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,n.kt)("p",null,"First you must connect to your slot via ssh. If you need help connecting to the server, please read the help article ",(0,n.kt)("a",{parentName:"p",href:"/application-hosting/getting-started/how-do-i-connect"},"here"),"."),(0,n.kt)("p",null,"Installing emby is easy. Simply issue the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"main",main:!0},"box install emby\n")),(0,n.kt)("p",null,"This command will configure an emby docker container for your user."),(0,n.kt)("h2",{id:"how-to-access"},"How to Access"),(0,n.kt)("p",null,"Emby can be accessed from your browser at ",(0,n.kt)("inlineCode",{parentName:"p"},"https://<hostname.io>/<username>/emby/"),". You'll need to visit this address to finish the installation wizard. Please do this step before moving on."),(0,n.kt)("h3",{id:"emby-connect"},"Emby Connect"),(0,n.kt)("p",null,"Due to the reverse proxy setup, you'll need to add your server manually to Emby Connect if you want to use Emby through the centralized service. Follow the steps to get your Emby connected:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Get to the server select screen (this is the default screen)"),(0,n.kt)("li",{parentName:"ol"},"Click add server"),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("inlineCode",{parentName:"li"},"https://<hostname.io>/<username>/emby/")," in the hostname field"),(0,n.kt)("li",{parentName:"ol"},"Leave the port field blank"),(0,n.kt)("li",{parentName:"ol"},"Click Connect"),(0,n.kt)("li",{parentName:"ol"},"Enter your user and password"),(0,n.kt)("li",{parentName:"ol"},"Click finish")),(0,n.kt)("p",null,"Emby is now connected!"),(0,n.kt)("h2",{id:"service-management"},"Service Management"),(0,n.kt)("p",null,"Like all box configured applications, you can manage emby via SSH with box with start, stop, restart, enable and disable commands."),(0,n.kt)(o.default,{service:"emby",mdxType:"SystemdTabs"}),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"When you load up Emby for the first time, you'll be greeted by the setup wizard. Setup is fairly straightforward. We've already gone ahead and added your two basic media libraries for you."),(0,n.kt)("h3",{id:"libraries"},"Libraries"),(0,n.kt)("p",null,"During the setup of Emby, we added two folders to your home directory and created a corresponding Library in Emby:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TV Shows > ",(0,n.kt)("inlineCode",{parentName:"li"},"~/media/TV Shows")),(0,n.kt)("li",{parentName:"ul"},"Movies > ",(0,n.kt)("inlineCode",{parentName:"li"},"~/media/Movies"))),(0,n.kt)("p",null,"These correspond to two different locations in your emby container:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TV Shows > ",(0,n.kt)("inlineCode",{parentName:"li"},"/data/media/TV Shows")),(0,n.kt)("li",{parentName:"ul"},"Movies > ",(0,n.kt)("inlineCode",{parentName:"li"},"/data/media/Movies"))),(0,n.kt)("p",null,"If you are needing to create a custom folder to your Library (in the instance of rclone or plexdrive), you will find that your entire home directory has been mounted under the /data folder of your Emby instance."),(0,n.kt)("h2",{id:"further-setup"},"Further setup"),(0,n.kt)("p",null,"While not covered in this documentation, there are further guides and documentations on the ",(0,n.kt)("a",{parentName:"p",href:"https://emby.media/community/index.php?/forum/24-tutorials-and-guides/"},"Emby Forum")))}c.isMDXComponent=!0},5532:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return c}});var i=a(3117),n=(a(7294),a(3905)),o=a(4866),s=a(5162),l=a(814);const r={},d=void 0,p={unversionedId:"application-hosting/snippets/systemdtabs",id:"application-hosting/snippets/systemdtabs",title:"systemdtabs",description:"<Tabs",source:"@site/docs/application-hosting/snippets/systemdtabs.mdx",sourceDirName:"application-hosting/snippets",slug:"/application-hosting/snippets/systemdtabs",permalink:"/application-hosting/snippets/systemdtabs",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/application-hosting/snippets/systemdtabs.mdx",tags:[],version:"current",frontMatter:{}},u={},c=[],m={toc:c};function b(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"code"},(0,n.kt)(o.Z,{defaultValue:"start",values:[{label:"Status",value:"status"},{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"status",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box status "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(s.Z,{value:"start",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box start "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(s.Z,{value:"stop",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box stop "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(s.Z,{value:"restart",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box restart "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(s.Z,{value:"enable",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box enable "+a.service,className:"bash",mdxType:"CodeBlock"})),(0,n.kt)(s.Z,{value:"disable",mdxType:"TabItem"},(0,n.kt)(l.Z,{children:"box disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}b.isMDXComponent=!0}}]);