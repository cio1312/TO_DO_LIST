(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports=[]},11:function(e,t,n){e.exports=n(25)},16:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),c=n(5),s=n(6),l=n(7),u=n(10),p=n(9),d=n(1),m=(n(16),n(8)),f=n.n(m),b=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).deletenote=function(e){delete d[e],a.setState({note:""})},a.addnote=function(e){if(0===a.state.note.trim().length||""===a.state.note)alert("please write a note ");else{var t={id:a.state.count,priority:parseInt(a.state.priority),note:a.state.note};a.setState({count:a.state.count+1}),d.push(t),d.sort(function(e,t){return console.log(d),console.log(e.priority),console.log(t.priority),parseInt(e.priority)-parseInt(t.priority)})}},a.shownotes=function(){var e=[];return d.map(function(t,n){var o=parseInt(t.priority),i=t.note,c="black";switch(o){case 1:c="verydarkred";break;case 2:c="darkred";break;case 3:c="mediumred";break;case 4:c="lightred";break;case 5:c="verylightred"}e.push(r.a.createElement("tr",null,r.a.createElement("td",{id:c},i),r.a.createElement("td",null,r.a.createElement("button",{id:c,onClick:function(e){return a.deletenote(n)}},r.a.createElement("i",{class:"fa fa-trash"})))))}),e},a.state={pass:0,note:"",priority:1,count:0},a}return Object(l.a)(n,[{key:"updateInput",value:function(e){var t=e.target.name,n=e.target.value;this.setState(Object(c.a)({},t,n)),console.log(n)}},{key:"render",value:function(){var e=this;if(0==this.state.pass)return r.a.createElement("body",null,r.a.createElement("div",null,r.a.createElement(f.a,{bodyAttributes:{style:'background-image : url("https://static2.businessinsider.com/image/5732437c910584716f8c1d57/theres-a-secret-term-vcs-use-to-insult-some-founders-not-blue-flame-enough.jpg");'}}),r.a.createElement("p",{id:"headings"},"To Do List"),r.a.createElement("form",{id:"centering"},r.a.createElement("input",{id:"notearea",type:"text",name:"note",onChange:function(t){return e.updateInput(t)}}),r.a.createElement("select",{id:"priorityonarea",name:"priority",onChange:function(t){return e.updateInput(t)}},r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4"),r.a.createElement("option",{value:"5"},"5")),r.a.createElement("input",{id:"buttonarea",type:"button",value:"Add",onClick:function(t){return e.addnote(t)}})),r.a.createElement("table",{id:"tabling"},this.shownotes())))}}]),n}(r.a.Component),h=document.getElementById("root");i.a.render(r.a.createElement(b,null),h)}},[[11,1,2]]]);
//# sourceMappingURL=main.79a924a9.chunk.js.map