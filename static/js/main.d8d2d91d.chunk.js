(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{56:function(e,t,a){e.exports=a(84)},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),c=a(17),i=(a(36),a(49)),s=a.n(i),m=a(26),d=a.n(m),p=a(48),u=a.n(p),b=a(113),g=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar fixed-bottom  justify-content-center"},r.a.createElement("span",{style:{background:"#1f1e1e",paddingLeft:"25px",paddingRight:"25px",paddingTop:"12px",paddingBottom:"12px",color:"gray",borderRadius:"5px",fontSize:"15px",width:"250px",textAlign:"center"}},"Developed by ",r.a.createElement("span",{style:{color:"red"}},"Amol Dalwai"))))},f=a(114),h=a(115),v=a(116),E=a(117),x=a(112),w=a(111),y=a(45),k=a(47),j=a.n(k),S=function(e){var t=Object(y.a)(),a=Object(w.a)(t.breakpoints.down("xl")),l=r.a.useState(!0),o=Object(c.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)(),p=Object(c.a)(m,2),u=p[0],b=p[1];d.a.get("https://www.omdbapi.com/?apikey=4eb65943&i=".concat(e.imval)).then(function(t){b('javascript:window.location.replace("https://database.gdriveplayer.io/player.php?imdb='.concat(e.imval,'")'))});var g=function(){s(!1),e.funsetdetailbool()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{open:i,fullScreen:a,onClose:g,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement("iframe",{src:u,title:"movieServer",width:"100%",height:"100%",style:{border:"none"},sandbox:"allow-same-origin allow-scripts  allow-forms"}),r.a.createElement(x.a,{onClick:g,style:{position:"absolute",top:"0px",left:"0px",color:"white",width:"80px",height:"80px"}},r.a.createElement(j.a,{fontSize:"large"})),r.a.createElement(x.a,{onClick:function(){b("https://123moviesplayer.com/movie/".concat(e.imval))},style:{position:"absolute",top:"0px",right:"4vw",color:"white",width:"120px",height:"60px",fontWeight:"bolder",background:"rgb(0,0,0,0.5)",borderRadius:"5px"}},"Server 2")))},O=function(){var e=Object(n.useState)("avengers"),t=Object(c.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)([]),i=Object(c.a)(o,2),m=i[0],p=i[1],E=Object(n.useState)(!1),x=Object(c.a)(E,2),w=x[0],y=x[1],k=Object(n.useState)(),j=Object(c.a)(k,2),O=j[0],C=j[1],N=function(){d.a.get("https://www.omdbapi.com/?apikey=4eb65943&s=".concat(a)).then(function(e){p(e.data.Search.map(function(e){return e}))}).catch(function(e){alert("No search results found!! Check for spelling ")})};return Object(n.useEffect)(function(){N()},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("center",null,r.a.createElement("div",{className:" navbar-dark bg-dark"},r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:a,onChange:function(e){l(e.target.value.toLowerCase())},placeholder:"Search movies/series",style:{height:"57px",width:"250px",borderRadius:"5px",paddingLeft:"30px",color:"white",background:"#212121",border:"2px"}}),r.a.createElement(b.a,{color:"primary","aria-label":"add",style:{background:"#b71c1c",borderRadius:"7px"}},r.a.createElement(u.a,{onClick:N})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("br",null),m.map(function(e){return r.a.createElement("div",{key:e.imdbID,onClick:function(){return t=e.imdbID,y(!0),void C(t);var t},className:"resultContainer"},r.a.createElement(f.a,{className:"movieCard"},r.a.createElement(h.a,null,r.a.createElement("img",{className:"moviePoster",src:e.Poster,alt:e.Title}),r.a.createElement(v.a,{variant:"contained",style:{position:"absolute",top:"0px",right:"0px",background:"rgba(0, 0, 0, 0.5)",color:"white",borderRadius:"4px"}},r.a.createElement("b",null," ",e.Year)),r.a.createElement("div",{className:"middle"},r.a.createElement("div",{className:"text"},r.a.createElement(s.a,{className:"playHoverIcon",fontSize:"large",style:{color:"#aa2e25",fontSize:"60px"}}))),r.a.createElement("div",{className:"overlay"},e.Title))))}),w?r.a.createElement(S,{imval:O,funsetdetailbool:function(){y(!1)}}):null),r.a.createElement(g,null))};a(83);o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.d8d2d91d.chunk.js.map