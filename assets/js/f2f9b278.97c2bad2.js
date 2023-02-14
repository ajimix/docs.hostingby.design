"use strict";(self.webpackChunkseedboxio=self.webpackChunkseedboxio||[]).push([[9218],{1152:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return p}});var o=n(3117),r=(n(7294),n(3905));const i={id:"mktorrent",title:"Making Torrents with mktorrent",sidebar:"mktorrent"},s=void 0,a={unversionedId:"appslots/guides/mktorrent",id:"appslots/guides/mktorrent",title:"Making Torrents with mktorrent",description:"Introduction",source:"@site/docs/appslots/guides/mktorrent.mdx",sourceDirName:"appslots/guides",slug:"/appslots/guides/mktorrent",permalink:"/appslots/guides/mktorrent",draft:!1,editUrl:"https://github.com/hostingbydesign/docs.hostingby.design/tree/master/docs/appslots/guides/mktorrent.mdx",tags:[],version:"current",frontMatter:{id:"mktorrent",title:"Making Torrents with mktorrent",sidebar:"mktorrent"},sidebar:"docs",previous:{title:"Stream via Kodi/XBMC",permalink:"/appslots/guides/kodi"},next:{title:"Systemd (Startup) Services",permalink:"/appslots/guides/systemd"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a Torrent",id:"creating-a-torrent",level:2},{value:"Piece Sizes",id:"piece-sizes",level:2},{value:"Loading your Torrent",id:"loading-your-torrent",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"For those who may need to make a torrent file, you may choose to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"mktorrent")," command built into the boxes. You will need to SSH into your box. If you need assistance with this, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/appslots/getting-started/how-do-i-connect"},"How do I connnect")," article."),(0,r.kt)("h2",{id:"creating-a-torrent"},"Creating a Torrent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/directory/with/torrent/prepped/\nmktorrent -v -p -l <piece-size> -a <anounce-url> -o ~/filename.torrent folder_or_file_name\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-v")," is for verbose, ",(0,r.kt)("inlineCode",{parentName:"p"},"-p")," is for private, ",(0,r.kt)("inlineCode",{parentName:"p"},"-a")," specifies an announce url, ",(0,r.kt)("inlineCode",{parentName:"p"},"-o")," specifies output file, last argument is the file/folder name that you'd like to make a torrent from."),(0,r.kt)("p",null,"For instance, lets say you made a remux of ",(0,r.kt)("inlineCode",{parentName:"p"},"Some.Movie.2016.1080p.DTS-MA.5.1.AVC-P2P.mkv")," inside the folder located at ",(0,r.kt)("inlineCode",{parentName:"p"},"~/torrents/Some.Movie.2016.1080p.DTS-MA.5.1.AVC-P2P/"),", and you wanted your torrent file to include the folder, your command would look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/torrents/\nmktorrent -v -p -l 24 -a https://some.tracker/announce/somerandomhashgoeshere -o ~/Some.Content.2016.1080p.DTS-MA.5.1.AVC-P2P.torrent Some.Content.2016.1080p.DTS-MA.5.1.AVC-P2P\n")),(0,r.kt)("h2",{id:"piece-sizes"},"Piece Sizes"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"19")," = 524 288 = 512 KiB for filesizes between 512 MiB - 1024 MiB"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"20")," = 1 048 576 = 1024 KiB for filesizes between 1 GiB - 2 GiB"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"21")," = 2 097 152 = 2048 KiB for filesizes between 2 GiB - 4 GiB"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"22")," = 4 194 304 = 4096 KiB for filesizes between 4 GiB - 8 GiB"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"23")," = 8 388 608 = 8192 KiB for filesizes between 8 GiB - 16 GiB"),(0,r.kt)("p",null,"2",(0,r.kt)("sup",null,"24")," = 16 777 216 = 16384 KiB for filesizes between 16 GiB - ??? GiB This is the maximum."),(0,r.kt)("h2",{id:"loading-your-torrent"},"Loading your Torrent"),(0,r.kt)("p",null,"Assuming that you put your torrent in the regular download directory, youy should be able to simply load it into your favourite torrent client and you'll be off to the races."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you're having issues with mktorrent, please consider joining our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/wv67teS"},"Discord")," or putting in a ",(0,r.kt)("a",{parentName:"p",href:"https://my.hostingby.design/submitticket.php?step=2&deptid=2"},"support ticket")," for more assistance.\nAlternatively, maybe try using ",(0,r.kt)("a",{parentName:"p",href:"/appslots/applications/rtorrent"},"rutorrent")," for generating your torrent files.")))}d.isMDXComponent=!0}}]);