(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1441)}])},1992:function(e,i,t){"use strict";var n=t(5893),a=t(7735),s=t(2141);i.Z=function(e){var i=e.className,t=e.animateIn,r=e.speed,l=e.style,o=e.initiallyVisible,c=e.delay,d=e.children;return(0,n.jsx)(a.n,{className:i,animateIn:t||"fadeIn",animateOnce:!0,style:l,initiallyVisible:o,delay:c,children:r?(0,n.jsx)(s.VS,{speed:r,easing:"easeInQuad",children:d}):d})}},2191:function(e,i,t){"use strict";t.d(i,{Z:function(){return h}});var n=t(5893),a=t(1664),s=t.n(a),r=t(4184),l=t.n(r),o=t(3794),c=t.n(o),d=t(6763),m=t(1992),u=["/images/join/avatar-1.png","/images/join/avatar-2.png","/images/join/avatar-3.png","/images/join/avatar-4.png","/images/join/avatar-5.png"],_=[{src:"/images/join/image-1.png",width:343,height:343,alt:"Picture"},{src:"/images/join/image-2.png",width:217,height:217,alt:"Picture"},{src:"/images/join/image-8.png",width:297,height:297,alt:"Picture"},{src:"/images/join/image-9.png",width:340,height:340,alt:"Picture"},{src:"/images/join/image-3.png",width:121,height:121,alt:"Smile"},{src:"/images/join/image-4.png",width:156,height:156,alt:"Smile"},{src:"/images/join/image-5.png",width:22,height:22,alt:"Circle"},{src:"/images/join/image-6.png",width:22,height:22,alt:"Circle"},{src:"/images/join/image-7.png",width:159,height:159,alt:"Smile"}],h=function(e){return e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}(),(0,n.jsx)("div",{className:c().join,children:(0,n.jsxs)("div",{className:l()("container",c().container),children:[(0,n.jsxs)("div",{className:c().wrap,children:[(0,n.jsx)("div",{className:l()("h1",c().title),children:"Ready to use Paradox?"}),(0,n.jsx)("div",{className:l()("h4M",c().info),children:"Join thousand users and teams in the community"}),(0,n.jsx)("div",{className:c().avatars,children:u.map((function(e,i){return(0,n.jsx)("div",{className:c().avatar,children:(0,n.jsx)(d.Z,{src:e,layout:"fill",alt:"Avatar",priority:!0})},i)}))}),(0,n.jsx)(s(),{href:"/pricing",children:(0,n.jsx)("a",{className:l()("button",c().button),children:"Get started"})})]}),(0,n.jsx)("div",{className:c().images,children:_.map((function(e,i){return(0,n.jsx)(m.Z,{className:c().image,animateIn:"fadeIn",speed:i<4?-5:0,children:(0,n.jsx)(d.Z,{src:e.src,width:e.width,height:e.height,alt:e.alt})},i)}))})]})})}},9179:function(e,i,t){"use strict";var n=t(5893),a=t(9253),s=t.n(a),r=t(3817);i.Z=function(e){var i=e.title,t=e.onScroll;return(0,n.jsxs)("button",{className:s().scroll,onClick:t,children:[(0,n.jsx)("div",{className:s().icon,children:(0,n.jsx)(r.Z,{name:"arrow-down"})}),i]})}},5192:function(e,i,t){"use strict";var n=t(5893),a=t(7294),s=t(9834),r=t(4184),l=t.n(r),o=t(8672),c=t.n(o),d=t(3817);function m(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}i.Z=function(e){var i,t=e.className,r=e.toggleClassName,o=e.title,u=e.value,_=e.onChange,h=e.options,v=e.icon,g=e.small,p=(0,a.useState)(!1),f=p[0],x=p[1],j=h.filter((function(e){return e.value===u}));return(0,n.jsx)("div",{className:l()(c().select,(i={},m(i,c().selectIcon,v),m(i,c().selectSmall,g),m(i,c().active,f),i),t),children:(0,n.jsx)(s.default,{onOutsideClick:function(){return x(!1)},children:(0,n.jsxs)("div",{className:c().inner,children:[(0,n.jsxs)("button",{className:l()(c().toggle,r),onClick:function(){return x(!f)},type:"button",children:[j.length>0?j[0].title:(0,n.jsx)("span",{className:c().title,children:o}),v&&(0,n.jsx)(d.Z,{className:c().icon,name:v}),(0,n.jsx)(d.Z,{className:c().arrow,name:"chevron-down"})]}),f&&(0,n.jsx)("div",{className:c().dropdown,children:[h.map((function(e,i){return(0,n.jsx)("button",{className:l()(c().option,m({},c().active,u===e.value)),onClick:function(){return i=e.value,_(i),void x(!1);var i},type:"button",children:e.title},i)}))]})]})})})}},6386:function(e,i,t){"use strict";var n=t(5893),a=t(4184),s=t.n(a),r=t(6573),l=t.n(r);i.Z=function(e){var i=e.className,t=e.items,a=e.value,r=e.setValue;return(0,n.jsx)("div",{className:s()(l().tabs,i),children:t.map((function(e,i){return(0,n.jsxs)("button",{className:s()(l().button,(t={},o=l().active,c=a===e.value,o in t?Object.defineProperty(t,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[o]=c,t)),onClick:function(){return function(e,i){r(e),i&&i()}(e.value,e.onClick)},children:[e.title,e.mark&&(0,n.jsx)("div",{className:l().mark,children:Array.from(Array(4).keys()).map((function(e){return(0,n.jsx)("span",{},e)}))})]},i);var t,o,c}))})}},1441:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return ue}});var n=t(5893),a=t(7294),s=t(8792),r=t(1664),l=t.n(r),o=t(4184),c=t.n(o),d=t(5285),m=t.n(d),u=t(6763),_=t(9179),h=t(1992),v=function(e){var i=e.scrollToRef;return(0,n.jsx)("div",{className:c()("section",m().main),children:(0,n.jsxs)("div",{className:c()("container",m().container),children:[(0,n.jsxs)("div",{className:m().wrap,children:[(0,n.jsx)("h1",{className:c()("hero",m().title),children:"Paradox"}),(0,n.jsx)("div",{className:c()("h4M",m().info),children:"The Real-time & powerful 3D design for web."}),(0,n.jsxs)("div",{className:m().btns,children:[(0,n.jsx)("a",{className:c()("button",m().button),href:"/",target:"_blank",rel:"noreferrer",children:"Launch app"}),(0,n.jsx)(l(),{href:"/about-us",children:(0,n.jsx)("a",{className:c()("button-gray",m().button),children:"Learn more"})})]})]}),(0,n.jsxs)("div",{className:m().preview,children:[(0,n.jsx)(u.Z,{src:"/images/main-pic-1.png",width:980,height:735,alt:"Hero"}),(0,n.jsx)("div",{className:m().ball}),(0,n.jsx)("div",{className:m().circles,children:Array.from(Array(4).keys()).map((function(e){return(0,n.jsx)(h.Z,{className:m().circle,animateIn:"fadeAlways",speed:-4,initiallyVisible:!0,children:(0,n.jsx)("span",{})},e)}))})]}),(0,n.jsx)(_.Z,{title:"Scroll down",onScroll:function(){return i.current.scrollIntoView({behavior:"smooth"})}})]})})},g=t(8702),p=t.n(g),f=t(7478),x=t.n(f),j=t(9364),w=t(3817),b=function(e){var i=e.className,t=e.onSubmit,a=e.type,s=e.value,r=e.setValue,l=e.placeholder,o=e.icon;return(0,n.jsxs)("form",{className:c()(x().form,i),action:"",onSubmit:t,children:[(0,n.jsx)(j.Z,{inputClassName:x().input,placeholder:l,type:a,icon:o,value:s,onChange:function(e){return r(e.target.value)},required:!0}),(0,n.jsx)("button",{className:x().button,children:(0,n.jsx)(w.Z,{name:"arrow-right"})})]})},N=function(e){var i=e.scrollToRef,t=(0,a.useState)(""),s=t[0],r=t[1];return(0,n.jsxs)("div",{className:c()("section-border",p().website),children:[(0,n.jsx)("div",{className:p().anchor,ref:i}),(0,n.jsxs)("div",{className:c()("container",p().container),children:[(0,n.jsxs)("div",{className:p().wrap,children:[(0,n.jsx)("h2",{className:c()("h2",p().title),children:"Go from 3D to website in no time."}),(0,n.jsx)("div",{className:c()("h5M",p().info),children:"Without any effort, save a ton of time."}),(0,n.jsx)(b,{className:p().form,placeholder:"Your email",type:"email",icon:"mail",value:s,setValue:r,onSubmit:function(){return console.log("Submit")}})]}),(0,n.jsx)("div",{className:p().previewMobile,children:(0,n.jsx)(u.Z,{src:"/images/website-pic-mobile.png",width:400,height:1101,alt:"Hero"})}),(0,n.jsx)("div",{className:p().previewDesktop,children:(0,n.jsx)(u.Z,{src:"/images/website-pic-desktop.png",width:864,height:500,alt:"Hero"})}),(0,n.jsx)("div",{className:p().preview,children:(0,n.jsx)(u.Z,{src:"/images/website-pic.png",width:720,height:500,alt:"Hero"})})]})]})},y=t(1852),C=t(6861),k=t.n(C),D=[{title:"3D team assets",content:"Make your design more attractive",label:"new",image:"/images/generation-pic-1.png",color:"#E1D3FA"},{title:"Shared materials",content:"Create, enable and use across your team",image:"/images/generation-pic-2.png",color:"#B6DFEC",delay:300},{title:"Live share",content:"Make your design more attractive",image:"/images/generation-pic-3.png",color:"#CCE8BE",delay:600}],I=function(e){e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}();var i=(0,y.useMediaQuery)({query:"(max-width: 767px)"});return(0,n.jsx)("div",{className:c()("section-border",k().generation),children:(0,n.jsxs)("div",{className:c()("container",k().container),children:[(0,n.jsx)("h2",{className:c()("h2",k().title),children:"The 3D generation is here."}),(0,n.jsx)("div",{className:k().list,children:D.map((function(e,t){return(0,n.jsxs)(h.Z,{className:k().item,animateIn:"fadeInDown",delay:i?0:e.delay,children:[(0,n.jsxs)("div",{className:k().preview,style:{backgroundColor:e.color},children:[e.label&&(0,n.jsx)("div",{className:c()((a={},s="label",r="new"===e.label,s in a?Object.defineProperty(a,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[s]=r,a),k().label),children:e.label}),(0,n.jsx)("div",{className:k().image,children:(0,n.jsx)(u.Z,{src:e.image,width:160,height:64,alt:"Generation",priority:!0})})]}),(0,n.jsx)("div",{className:c()("h5",k().subtitle),children:e.title}),(0,n.jsx)("div",{className:k().content,children:e.content})]},t);var a,s,r}))})]})})},S=t(9149),Z=t.n(S),M=t(6386),T=t(148),A=t(5192),E=[{title:"Render faster",value:"render-faster",info:"8x",content:"Faster live render than other 3D design app for web.",video:"BHACKCNDMW8",image:{src:"/images/details-pic-1.png",width:412,height:412,alt:"Details"}},{title:"Realistic materials",value:"realistic-materials",info:"Realistic materials",content:"Faster live render than other 3D design app for web.",video:"BHACKCNDMW8",image:{src:"/images/details-pic-2.png",width:619,height:465,alt:"Details"}},{title:"Live interaction",value:"live-interaction",info:"Realistic materials",content:"Faster live render than other 3D design app for web.",video:"BHACKCNDMW8",image:{src:"/images/details-pic-3.png",width:683,height:512,alt:"Details"}}];function R(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}var W=function(e){e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}();var i=(0,a.useState)("render-faster"),t=i[0],s=i[1],r=(0,a.useState)(!1),l=r[0],o=r[1];return(0,n.jsx)("div",{className:c()("section",Z().details),children:(0,n.jsxs)("div",{className:c()("container",Z().container),children:[(0,n.jsxs)("div",{className:Z().head,children:[(0,n.jsx)(M.Z,{className:Z().tabs,items:E,value:t,setValue:s}),(0,n.jsx)(A.Z,{className:Z().select,value:t,onChange:function(e){return s(e)},options:E,small:!0})]}),(0,n.jsx)("div",{className:Z().list,children:E.filter((function(e){return e.value===t})).map((function(e,i){var t;return(0,n.jsxs)("div",{className:c()(Z().item,(t={},R(t,Z().item1,"render-faster"===e.value),R(t,Z().item2,"realistic-materials"===e.value),R(t,Z().item3,"live-interaction"===e.value),t)),children:[(0,n.jsxs)("div",{className:Z().wrap,children:[(0,n.jsx)("div",{className:c()("h2",Z().title),children:e.info}),(0,n.jsx)("div",{className:c()("h5M",Z().content),children:e.content}),(0,n.jsx)("button",{className:c()("button",Z().button),onClick:function(){return o(!0)},children:"Launch a demo"}),(0,n.jsx)(T.Z,{visible:l,onClose:function(){return o(!1)},video:!0,children:(0,n.jsx)("div",{className:Z().video,children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(e.video,"?autoplay=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]}),(0,n.jsx)("div",{className:Z().preview,children:(0,n.jsx)("div",{className:Z().image,children:(0,n.jsx)(u.Z,{src:e.image.src,width:e.image.width,height:e.image.height,alt:e.image.alt})})})]},i)}))})]})})},F=t(6272),P=t.n(F),B=[{title:"Framer",image:"/images/framer.svg",color:"#C4B5EE"},{title:"Webflow",image:"/images/webflow.svg",color:"#B6DFEC"},{title:"Robot",image:"/images/robot.svg",color:"#C2DAB3"}],H=function(e){return e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}(),(0,n.jsx)("div",{className:c()("section",P().integration),children:(0,n.jsxs)("div",{className:c()("container",P().container),children:[(0,n.jsxs)("div",{className:P().preview,children:[(0,n.jsx)(u.Z,{src:"/images/iphone.png",width:768,height:740,alt:"Iphone"}),(0,n.jsx)("div",{className:P().circles,children:Array.from(Array(3).keys()).map((function(e){return(0,n.jsx)(h.Z,{className:P().circle,animateIn:"fadeIn",speed:-4,children:(0,n.jsx)("span",{})},e)}))})]}),(0,n.jsxs)("div",{className:P().wrap,children:[(0,n.jsx)("h2",{className:c()("h2",P().title),children:"Integrate your 3D designs"}),(0,n.jsx)("div",{className:c()("h5M",P().info),children:"Without any effort, save a ton of time."}),(0,n.jsx)("div",{className:P().list,children:B.map((function(e,i){return(0,n.jsxs)("div",{className:P().item,children:[(0,n.jsx)("div",{className:P().icon,style:{backgroundColor:e.color},children:(0,n.jsx)(u.Z,{src:e.image,layout:"fill",alt:e.title})}),e.title]},i)}))})]})]})})},L=t(1385),J=t.n(L),K=t(8938),V=t.n(K),z=t(7257),Y=t.n(z),q=function(e){var i=e.className,t=e.title,s=e.video,r=(0,a.useState)(!1),l=r[0],o=r[1];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{className:c()(Y().play,i),onClick:function(){return o(!0)},children:[(0,n.jsx)("span",{className:Y().icon,children:(0,n.jsx)(w.Z,{name:"play"})}),t]}),(0,n.jsx)(T.Z,{visible:l,onClose:function(){return o(!1)},video:!0,children:(0,n.jsx)("div",{className:Y().video,children:(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/".concat(s,"?autoplay=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})]})},G=function(e){var i=e.className,t=e.title,a=e.info,s=e.video,r=e.children;return(0,n.jsxs)("div",{className:c()(V().item,i),children:[(0,n.jsxs)("div",{className:V().col,children:[(0,n.jsx)("div",{className:c()("h3",V().title),children:t}),(0,n.jsx)("div",{className:c()("h6",V().info),children:a}),(0,n.jsx)(q,{title:"Watch tutorial",video:s})]}),(0,n.jsx)("div",{className:V().col,children:r})]})},X=t(103),O=t.n(X),Q=function(e){var i=e.list;return(0,n.jsx)("div",{className:O().list,children:i.map((function(e,i){return(0,n.jsxs)("div",{className:O().box,children:[(0,n.jsxs)("div",{className:O().details,children:[(0,n.jsx)("div",{className:c()("h6",O().subtitle),children:e.title}),(0,n.jsx)("div",{className:O().content,children:e.content})]}),(0,n.jsx)("div",{className:O().icon,style:{backgroundColor:e.color},children:(0,n.jsx)(u.Z,{src:e.image,width:32,height:32,alt:"Icon"})})]},i)}))})},U=t(72),$=t.n(U),ee=function(e){return e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}(),(0,n.jsxs)("div",{className:$().preview,children:[(0,n.jsx)("div",{className:$().image,children:(0,n.jsx)(u.Z,{src:"/images/models/model-blue.png",width:1093,height:797,alt:"Model"})}),(0,n.jsx)("div",{className:$().circles,children:Array.from(Array(3).keys()).map((function(e){return(0,n.jsx)(h.Z,{className:$().circle,animateIn:"fadeIn",speed:-4,children:(0,n.jsx)("span",{})},e)}))})]})},ie=[{title:"Shared materials",content:"Create, enable and use across your team",image:"/images/toggle-off.svg",color:"#C4B5EE"},{title:"Live interaction",content:"Create, enable and use across your team",image:"/images/mouse.svg",color:"#B6DFEC"},{title:"Realtime collaboration",content:"Create, enable and use across your team",image:"/images/lightning.svg",color:"#CCE7BE"}],te=function(e){return e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}(),(0,n.jsx)("div",{className:c()("section",J().discover),children:(0,n.jsxs)("div",{className:c()("container",J().container),children:[(0,n.jsx)("h2",{className:c()("h2",J().title),children:"Discover how it work"}),(0,n.jsxs)("div",{className:J().list,children:[(0,n.jsx)(G,{className:J().item,title:"Set up your perfect scene.",info:"Amet minim mollit non deserunt ullamco est.",video:"BHACKCNDMW8",children:(0,n.jsx)(Q,{list:ie})}),(0,n.jsx)(G,{className:J().item,title:"Build simple or complex models.",info:"Amet minim mollit non deserunt ullamco est.",video:"BHACKCNDMW8",children:(0,n.jsx)(ee,{})})]})]})})},ne=t(7663),ae=t.n(ne),se=[{author:"Emine Isik",position:"Nursing Assistant",avatar:"/images/avatar-1.png",content:"“It has been an absolute pleasure dealing with Scan during the lockdown. Our church began to livestream our services, and Scan had a great selection of hardware....”"},{author:"Fattum Bozok",position:"Web Designer",avatar:"/images/avatar-2.png",content:"“I was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It’s the book I wish I had when I started my dev career.”",delay:300},{author:"Veli Dincer",position:"Dog Trainer",avatar:"/images/avatar-3.png",content:"“Wow! The immense wealth of knowledge and experience shared in “The Coding Career Handbook” cannot be overstated. I love how Shawn is able to take his own experience and what he's observed in the careers of others and generalize it to principles that will help others level up their own careers. 5 stars ⭐⭐⭐⭐⭐”",delay:600},{author:"Mansur Sarica",position:"Medical Assistant",avatar:"/images/avatar-4.png",content:"“The links to high-value blog posts already make the book worth it, never mind the amazing insight and context provided by Shawn. Must buy for #CodeNewbies looking to break in or senior engineers looking to grow!”"},{author:"M. Kemal Yilmaz",position:"President of Sales",avatar:"/images/avatar-5.png",content:"“For anyone looking for career advice as a coder but is tired of being told they have to do X or never do Y. Shawn is sharing his personal experiences and knowledge of navigating these sometimes overwhelming waters in the hopes you might find something useful. It's like having a caring big brother in your pocket! (if you read on your phone)”",delay:300},{author:"Emine Simsek",position:"Marketing Coordinator",avatar:"/images/avatar-6.png",content:"“I wish I had this book when I was switching jobs. It helps you understand what skills you should leverage and really encourages you not underlevel yourself!”",delay:600}],re=function(e){e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}();var i=(0,y.useMediaQuery)({query:"(max-width: 767px)"});return(0,n.jsx)("div",{className:c()("section-padding",ae().reviews),children:(0,n.jsxs)("div",{className:c()("container",ae().container),children:[(0,n.jsxs)("div",{className:ae().head,children:[(0,n.jsx)("div",{className:c()("h2",ae().title),children:"People are talking..."}),(0,n.jsx)("div",{className:c()("h6",ae().info),children:"Amet minim mollit non deserunt ullamco est."})]}),(0,n.jsx)("div",{className:ae().list,children:se.map((function(e,t){return(0,n.jsxs)(h.Z,{className:ae().item,animateIn:"fadeInDown",delay:i?0:e.delay,children:[(0,n.jsx)("div",{className:ae().avatar,children:(0,n.jsx)(u.Z,{src:e.avatar,layout:"fill",alt:"Avatar",priority:!0})}),(0,n.jsx)("div",{className:ae().content,children:e.content}),(0,n.jsx)("div",{className:ae().author,children:e.author}),(0,n.jsx)("div",{className:ae().position,children:e.position})]},t)}))})]})})},le=t(1820),oe=t.n(le),ce=function(e){return e=null!==e?e:function(e){throw new TypeError("Cannot destructure undefined")}(),(0,n.jsx)("div",{className:oe().design,children:(0,n.jsxs)("div",{className:c()("container",oe().container),children:[(0,n.jsx)("div",{className:c()("h2",oe().title),children:"Delightfully simple & powerful 3D design tool"}),(0,n.jsxs)("div",{className:oe().preview,children:[(0,n.jsx)(u.Z,{src:"/images/design.jpg",width:1184,height:737,alt:"Design"}),(0,n.jsx)("div",{className:oe().circles,children:Array.from(Array(4).keys()).map((function(e){return(0,n.jsx)(h.Z,{className:oe().circle,animateIn:"fadeIn",speed:-4,children:(0,n.jsx)("span",{})},e)}))})]})]})})},de=t(2191),me=function(){var e=(0,a.useRef)(null);return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(v,{scrollToRef:e}),(0,n.jsx)(N,{scrollToRef:e}),(0,n.jsx)(I,{}),(0,n.jsx)(W,{}),(0,n.jsx)(H,{}),(0,n.jsx)(te,{}),(0,n.jsx)(re,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(de.Z,{})]})},ue=function(){return(0,n.jsx)(me,{})}},7478:function(e){e.exports={form:"Form_form__ocboS",input:"Form_input___5hP0",button:"Form_button__az__q"}},3794:function(e){e.exports={join:"JoinCommunity_join__3l5QQ",container:"JoinCommunity_container__KiY8Q",wrap:"JoinCommunity_wrap___LJoi",title:"JoinCommunity_title__qYqoW",info:"JoinCommunity_info__aqrcp",avatars:"JoinCommunity_avatars__mKkW5",avatar:"JoinCommunity_avatar__5bHK4",image:"JoinCommunity_image__9gJdz"}},7257:function(e){e.exports={play:"Play_play__o1m2f",icon:"Play_icon__gKulJ",video:"Play_video__GVyJH"}},9253:function(e){e.exports={scroll:"Scroll_scroll__nJNdt",icon:"Scroll_icon__ldHqI"}},8672:function(e){e.exports={select:"Select_select__DfYFj",selectIcon:"Select_selectIcon__Avz9Z",toggle:"Select_toggle__cz6zg",selectSmall:"Select_selectSmall__YpkLt",option:"Select_option__7ALzP",active:"Select_active__S1jmA",arrow:"Select_arrow__aQAHJ",icon:"Select_icon__eKCJD",inner:"Select_inner__148AU",title:"Select_title__q_qRp",dropdown:"Select_dropdown__FdFck"}},6573:function(e){e.exports={tabs:"Tabs_tabs__IBu1d",button:"Tabs_button__6_dcq",active:"Tabs_active__q8zTJ",mark:"Tabs_mark__ULBKj",circle:"Tabs_circle__ae_KH"}},1820:function(e){e.exports={design:"Design_design__TrRjl",title:"Design_title__xJVk3",preview:"Design_preview__1MzLj",circle:"Design_circle__VAsVE"}},9149:function(e){e.exports={details:"Details_details__Ol_fk",container:"Details_container__knW_0",head:"Details_head__5Wlm1",tabs:"Details_tabs__I_SDi",select:"Details_select__ibkAS",item:"Details_item__UR8WC",item1:"Details_item1__Yz6kX",title:"Details_title__UFWh1",image:"Details_image__QMS1b",item2:"Details_item2__ZrCYI",item3:"Details_item3__udbta",wrap:"Details_wrap__VaXz3",content:"Details_content__UaKwH",preview:"Details_preview__793l_",video:"Details_video__Zc6gs"}},1385:function(e){e.exports={discover:"Discover_discover__2H_8_",title:"Discover_title__CjLSY"}},8938:function(e){e.exports={item:"Item_item__8SEZT",col:"Item_col__gY3_G",title:"Item_title__YXLoX",info:"Item_info___AVGv"}},103:function(e){e.exports={list:"List_list___T07_",box:"List_box__a6LxW",details:"List_details__02t8f",content:"List_content__PyFh3",icon:"List_icon__TtGd6"}},72:function(e){e.exports={nav:"Models_nav__ERuEB",button:"Models_button__14uQE",active:"Models_active__eFFjz",preview:"Models_preview__XKqFE",image:"Models_image__qy37w",circle:"Models_circle__028LW"}},6861:function(e){e.exports={generation:"Generation_generation__VCXXK",title:"Generation_title__uNsNV",list:"Generation_list__edKSD",item:"Generation_item__HLUi0",preview:"Generation_preview__eZzuT",image:"Generation_image__MZDHm",label:"Generation_label__NrTmj",content:"Generation_content__BKCHR"}},6272:function(e){e.exports={integration:"Integration_integration__1uaZC",container:"Integration_container__vRrAs",preview:"Integration_preview__ihTIt",wrap:"Integration_wrap__z_UX_",title:"Integration_title__alHAd",info:"Integration_info__5S3MY",item:"Integration_item__5kPsv",icon:"Integration_icon__1QWuz",circle:"Integration_circle__pP5mA"}},5285:function(e){e.exports={main:"Main_main__X9Sbw",wrap:"Main_wrap__3YDrA",title:"Main_title__LHY_P",info:"Main_info__3FiTc",btns:"Main_btns__VuYwI",button:"Main_button__Td96w",preview:"Main_preview__XVGKC",ball:"Main_ball___wjqr",circle:"Main_circle__4ZRHb"}},7663:function(e){e.exports={reviews:"Reviews_reviews__YYJCV",head:"Reviews_head__L2qal",title:"Reviews_title__dJ2Q6",info:"Reviews_info__9_0hX",list:"Reviews_list__xkM81",item:"Reviews_item__h6oNK",avatar:"Reviews_avatar__Dd7KF",content:"Reviews_content__Ke4BZ",author:"Reviews_author__OZYIF",position:"Reviews_position__jCzFs"}},8702:function(e){e.exports={website:"Website_website__bEZOS",anchor:"Website_anchor__wRTbA",container:"Website_container____x_j",wrap:"Website_wrap__luy_y",title:"Website_title__mJkDP",info:"Website_info__XBlvZ",form:"Website_form__Cpizu",preview:"Website_preview__N4RzT",previewDesktop:"Website_previewDesktop__ViNno",previewMobile:"Website_previewMobile__DIyrJ"}}},function(e){e.O(0,[664,151,735,834,852,792,774,888,179],(function(){return 8312,e(e.s=8312)}));var i=e.O();_N_E=i}]);