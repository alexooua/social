(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{11:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",dialog:"Dialogs_dialog__lk_cw",avaDialogs:"Dialogs_avaDialogs__1hYcp",activeLink:"Dialogs_activeLink__34w6e",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},19:function(e,a,t){e.exports={header:"Header_header__1VCKf",label:"Header_label__1K-2H",logo:"Header_logo__3_SJs"}},21:function(e,a,t){e.exports={item:"FriendsInfo_item__2lrfS",fiendName:"FriendsInfo_fiendName__33ID3"}},3:function(e,a,t){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE",friendsItem:"Navbar_friendsItem__pqScm",friendsMy:"Navbar_friendsMy__tgW17"}},35:function(e,a,t){e.exports={screen:"ProfileInfo_screen__39D8W"}},36:function(e,a,t){e.exports={posts:"MyPosts_posts__3tZ1c"}},37:function(e,a,t){e.exports={item:"Post_item__ihtu9"}},39:function(e,a,t){e.exports={userPhoto:"users_userPhoto__1_En6"}},41:function(e,a,t){e.exports=t.p+"static/media/avatarUser.b9b0490a.png"},42:function(e,a,t){e.exports=t(75)},47:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},55:function(e,a,t){},56:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(17),l=t.n(n),s=t(0),r=t.n(s);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(47);var o=t(19),c=t.n(o),i=function(){return r.a.createElement("header",{className:c.a.header},r.a.createElement("div",{className:c.a.logo},r.a.createElement("div",null,r.a.createElement("img",{src:"https://cdn.worldvectorlogo.com/logos/react.svg",alt:""}))),r.a.createElement("div",{className:c.a.label},r.a.createElement("h3",null,"cool",r.a.createElement("span",null,"S"),"cial",r.a.createElement("span",null,"N"),"etwork")))},u=t(3),m=t.n(u),d=t(8),p=t(21),v=t.n(p),f=function(e){return r.a.createElement("div",{className:v.a.item},r.a.createElement("img",{src:e.ava,alt:e.name}),r.a.createElement("div",{className:v.a.fiendName},r.a.createElement("span",null,e.name)))},E=function(e){var a=e.stete.friends.map((function(e){return r.a.createElement(f,{key:e.id,name:e.name,ava:e.ava})}));return r.a.createElement("nav",{className:m.a.nav},r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:m.a.activeLink},"Profile")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:m.a.activeLink},"Messages")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:m.a.activeLink},"Users")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:m.a.activeLink},"News")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:m.a.activeLink},"Music")),r.a.createElement("div",{className:m.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:m.a.activeLink},"Settings")),r.a.createElement("div",{className:m.a.friendsItem},r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:m.a.friendsMy},a)))},g=(t(52),t(35)),h=t.n(g),w=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:h.a.screen},r.a.createElement("img",{src:"https://fartux.ru/wp-content/uploads/2018/03/fartux1055b_large-880x176.jpg",alt:""})),r.a.createElement("div",null,"Ava+description"))},_=t(13),N=t(9),b={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It's my first post",likesCount:32}],newPostText:""},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD-POST":return Object(N.a)({},e,{newPostText:"",posts:[].concat(Object(_.a)(e.posts),[{id:3,message:e.newPostText,likesCount:0}])});case"UPDATE-NEW-POST-TEXT":return Object(N.a)({},e,{newPostText:a.newText});default:return e}},k=t(36),P=t.n(k),j=t(37),O=t.n(j),S=function(e){return r.a.createElement("div",{className:O.a.item},r.a.createElement("img",{src:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like ",e.like)))},x=function(e){var a=e.posts.map((function(e,a){return r.a.createElement(S,{key:a,message:e.message,like:e.likesCount})})),t=r.a.createRef();return r.a.createElement("div",null,r.a.createElement("h3",null,"My Posts"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{ref:t,placeholder:"Put text",onChange:function(){var a=t.current.value;e.updateNewPostText(a)},value:e.newPostText})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.addPost()}},"Add posts"),r.a.createElement("button",null,"Remove"))),r.a.createElement("div",{className:P.a.posts},a))},D=t(12),T=Object(D.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{updateNewPostText:function(a){var t=function(e){return{type:"UPDATE-NEW-POST-TEXT",newText:e}}(a);e(t)},addPost:function(){e({type:"ADD-POST"})}}}))(x),M=function(e){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(T,null))},L=t(2),C=(t(54),function(e){return r.a.createElement("div",null,"News")}),I=(t(55),function(e){return r.a.createElement("div",null,"Music")}),A=(t(56),function(e){return r.a.createElement("div",null,"Settings")}),U={dialogs:[{id:1,name:"Dimych",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:2,name:"Andrey",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:3,name:"Sveta",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:4,name:"Sasha",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:5,name:"Viktor",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:6,name:"Valera",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"}],messages:[{id:1,ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",message:"hi"},{id:2,ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",message:"How are you?"},{id:3,ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",message:"I am fine and you."},{id:4,ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",message:"Fine and Cool!!!"}],newMessageBody:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"UPDATE-NEW-MESSAGE-BODY":return Object(N.a)({},e,{newMessageBody:a.body});case"SEND-MESSAGE":return Object(N.a)({},e,{messages:[].concat(Object(_.a)(e.messages),[{id:5,ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png",message:e.newMessageBody}]),newMessageBody:""});default:return e}},W=t(11),F=t.n(W),H=function(e){return r.a.createElement("div",{className:F.a.dialog+" "+F.a.active},r.a.createElement(d.b,{to:"/dialogs/"+e.id,activeClassName:F.a.activeLink},r.a.createElement("img",{className:F.a.avaDialogs,src:e.ava,alt:e.name}),e.name))},R=function(e){return r.a.createElement("div",{className:F.a.message},r.a.createElement("img",{src:e.ava,alt:""}),e.message)},G=function(e){var a=e.dialogsPage,t=a.dialogs.map((function(e,a){return r.a.createElement(H,{key:a,name:e.name,id:e.id,ava:e.ava})})),n=a.messages.map((function(e,a){return r.a.createElement(R,{key:a,id:e.id,message:e.message,ava:e.ava})})),l=a.newMessageBody;return r.a.createElement("div",{className:F.a.dialogs},r.a.createElement("div",{className:F.a.dialogsItems},t),r.a.createElement("div",{className:F.a.messages},r.a.createElement("div",null,n),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("textarea",{onChange:function(a){var t=a.target.value;e.updateNewMessageBody(t)},value:l,placeholder:"Enter your message"})),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.sendMessage()}},"Send")))))},V=Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(a){e(function(e){return{type:"UPDATE-NEW-MESSAGE-BODY",body:e}}(a))},sendMessage:function(){e({type:"SEND-MESSAGE"})}}}))(G),J={users:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"FOLLOW":return Object(N.a)({},e,{users:e.users.map((function(e){return e.id===a.userId?Object(N.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(N.a)({},e,{users:e.users.map((function(e){return e.id===a.userId?Object(N.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(N.a)({},e,{users:[].concat(Object(_.a)(e.users),Object(_.a)(a.users))});default:return e}},K=t(39),X=t.n(K),q=t(40),z=t(41),Z=t.n(z),$=Object(D.b)((function(e){return{users:e.usersPage.users}}),(function(e){return{follow:function(a){e(function(e){return{type:"FOLLOW",userId:e}}(a))},unfollow:function(a){e(function(e){return{type:"UNFOLLOW",userId:e}}(a))},setUsers:function(a){e(function(e){return{type:"SET_USERS",users:e}}(a))}}}))((function(e){return 0===e.users.length&&q.get("https://social-network.samuraijs.com/api/1.0/users").then((function(a){e.setUsers(a.data.items)})),r.a.createElement("div",null,e.users.map((function(a){return r.a.createElement("div",{key:a.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement("img",{src:null!==a.photos.small?a.photos.small:Z.a,alt:"",className:X.a.userPhoto})),a.followed?r.a.createElement("button",{onClick:function(){e.unfollow(a.id)}},"Unfollow"):r.a.createElement("button",{onClick:function(){e.follow(a.id)}},"Follow")),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,a.name),r.a.createElement("div",null,a.status)),r.a.createElement("span",null,r.a.createElement("div",null,"u.location.country"),r.a.createElement("div",null,"u.location.city"))))})))})),Q=Object(D.b)((function(e){return{state:e.sidebar}}),null)((function(e){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(i,null),r.a.createElement(E,{stete:e.state}),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(L.a,{path:"/dialogs",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(L.a,{path:"/profile",render:function(){return r.a.createElement(M,null)}}),r.a.createElement(L.a,{path:"/users",render:function(){return r.a.createElement($,null)}}),r.a.createElement(L.a,{path:"/news",render:function(){return r.a.createElement(C,null)}}),r.a.createElement(L.a,{path:"/music",render:function(){return r.a.createElement(I,null)}}),r.a.createElement(L.a,{path:"/settings",render:function(){return r.a.createElement(A,null)}})))})),ee=(t(74),t(16)),ae={friends:[{id:1,name:"Dimych",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:2,name:"Sveta",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"},{id:3,name:"Viktor",ava:"https://materiell.com/wp-content/uploads/2015/03/john-full.png"}]},te=Object(ee.b)({profilePage:y,dialogsPage:B,sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae;arguments.length>1&&arguments[1];return e},usersPage:Y}),ne=Object(ee.c)(te);window.store=ne;var le=ne;l.a.render(r.a.createElement(d.a,null,r.a.createElement(D.a,{store:le},r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.829a0a1b.chunk.js.map