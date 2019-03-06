(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{152:function(e,t,r){e.exports=r(364)},363:function(e,t,r){},364:function(e,t,r){"use strict";r.r(t);r(153);var a=r(1),n=r.n(a),s=r(146),c=r(34),i=r(35),o=r(37),u=r(36),l=r(38),p=r(150),m=r(50),h=r(148),d=r(149),v=r(151),b=r(77),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GO_TO_MOVE":return[].concat(Object(b.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_ORDER":return e.map(function(e){return e.id===t.id?Object(v.a)({},e,{completed:!e.completed}):e});default:return e}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_SQUARE":return[].concat(Object(b.a)(e),[{id:t.id,text:t.text,completed:!1}]);default:return e}},j=Object(m.c)({moves:f,squares:O}),k=Object(d.createLogger)();var y=r(108),E=r(30),g=function(e){var t=e.status;return n.a.createElement("h1",{className:"header"},t)},w=function(e){var t=e.value,r=e.onClick,a=e.selected,s=e.number,c=e.winner;return n.a.createElement("button",{key:s,className:null===a?"square":a===s||c.includes(s)?"selSquare":"square",onClick:r},t)},N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(w,{key:e,value:this.props.squares[e],number:e,selected:this.props.selected,winner:this.props.winner,onClick:function(){return t.props.onClick(e)}})}},{key:"printBoard",value:function(){for(var e=[],t=0;t<3;t++){for(var r=[],a=3*t;a<3*t+3;a++)r.push(this.renderSquare(a));e.push(n.a.createElement("div",{key:t,className:"board-row"},r))}return e}},{key:"render",value:function(){return n.a.createElement("div",null,this.printBoard())}}]),t}(a.Component),C=function(e){var t=e.square,r=e.step,a=e.col,s=e.row,c=e.onClick;return n.a.createElement("button",{className:t===r?"currentMove":"move",onClick:c},"Go to move #",t," COL: ",a," ROW: ",s)},x=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"printMoveList",value:function(){var e=this,t=[],r=[];if(r.push(n.a.createElement("div",{key:"restart_toggle",className:"restart_toggle"},n.a.createElement("button",{key:-1,onClick:function(){return e.props.switchOrderList(e.props.ascending)}},"Switch order"),n.a.createElement("button",{key:0,onClick:function(){return e.props.jumpTo(0)}},"Go to game start"))),this.props.ascending)for(var a=function(t){var a=q(e.props.moves[t]),s=L(e.props.moves[t]);r.push(n.a.createElement("li",{key:t},n.a.createElement(C,{key:t,square:t,step:e.props.step,col:a,row:s,onClick:function(){return e.props.jumpTo(t)}})))},s=1;s<this.props.step+1;s++)a(s);else{var c=function(t){var a=q(e.props.moves[t]),s=L(e.props.moves[t]);r.push(n.a.createElement("li",{key:t},n.a.createElement(C,{key:t,square:t,step:e.props.step,col:a,row:s,onClick:function(){return e.props.jumpTo(t)}})))};for(s=this.props.step;s>0;s--)c(s)}return t.push(n.a.createElement("ol",{key:1,className:"move-list"},r)),t}},{key:"render",value:function(){return n.a.createElement("div",null,this.printMoveList())}}]),t}(a.Component);function q(e){var t=null;switch(e){case 0:case 3:case 6:t=1;break;case 1:case 4:case 7:t=2;break;default:t=3}return t}function L(e){var t=null;switch(e){case 0:case 1:case 2:t=1;break;case 3:case 4:case 5:t=2;break;default:t=3}return t}var T=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,moves:Array(10).fill(null),ascending:!0},r.jumpTo=r.jumpTo.bind(Object(E.a)(Object(E.a)(r))),r.switchOrderList=r.switchOrderList.bind(Object(E.a)(Object(E.a)(r))),r}return Object(l.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice(),a=this.state.moves.slice();S(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",a[this.state.stepNumber+1]=e,this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext,moves:a}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"switchOrderList",value:function(e){this.setState({ascending:!e})}},{key:"render",value:function(){var e,t=this,r=this.state.history[this.state.stepNumber],a=S(r.squares),s=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=[],a=0;a<t.length;a++){var n=Object(y.a)(t[a],3),s=n[0],c=n[1],i=n[2];e[s]&&e[s]===e[c]&&e[s]===e[i]&&(r=r.concat(t[a]))}return r}(r.squares),c=this.state.moves.slice();return e=a?"Winner: "+a:9===this.state.stepNumber?"Draw ":"Next player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-header"},n.a.createElement(g,{status:e})),n.a.createElement("div",{className:"game-board"},n.a.createElement(N,{winner:s||[],selected:c[this.state.stepNumber],squares:r.squares,onClick:function(e){return t.handleClick(e)}})),n.a.createElement("div",{className:"game-info"},n.a.createElement(x,{step:this.state.stepNumber,moves:c,ascending:this.state.ascending,jumpTo:this.jumpTo,switchOrderList:this.switchOrderList})))}}]),t}(a.Component);function S(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(y.a)(t[r],3),n=a[0],s=a[1],c=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[c])return e[n]}return null}var I,_=Object(m.d)(j,I,Object(m.a)(h.a,k)),G=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(p.a,{store:_},n.a.createElement(T,null))}}]),t}(a.Component);r(363);Object(s.render)(n.a.createElement(G,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.574e1dc9.chunk.js.map