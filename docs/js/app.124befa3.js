(function(t){function e(e){for(var i,a,s=e[0],u=e[1],l=e[2],m=0,p=[];m<s.length;m++)a=s[m],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/EyeRestTimer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var i=n("64a9"),r=n.n(i);r.a},"16b2":function(t,e,n){"use strict";var i=n("c54c"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},o=[],a=(n("034f"),n("2877")),s={},u=Object(a["a"])(s,r,o,!1,null,null,null),l=u.exports,c=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Rest Your Eye")]),n("p",[t._v("\n    Doctors recommend looking away 20 feet for 20 seconds every 20 minutes.\n  ")]),t.look_away_from_keyboard?n("div",{staticClass:"look_away"},[t._v("\n    Look away from your screen\n  ")]):t._e(),n("div",{staticClass:"bar"},[n("span",[t._v(t._s(t.display_time))])]),n("div",[t._v("\n    Select an interval:\n    "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.minutes,expression:"minutes"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.minutes=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"5"}},[t._v("5 seconds")]),n("option",{attrs:{value:"1200"}},[t._v("20 minutes")]),n("option",{attrs:{value:"2400"}},[t._v("40 minutes")]),n("option",{attrs:{value:"3600"}},[t._v("60 minutes")])])]),n("div",[t._v("\n    Volume:\n    "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticStyle:{width:"50px"},attrs:{type:"number",min:"0",max:"10"},domProps:{value:t.volume},on:{input:function(e){e.target.composing||(t.volume=e.target.value)}}}),t._v("\n     \n    "),n("button",{attrs:{disabled:t.playing_sound},on:{click:t.playAlarm}},[t._v("\n      play alarm\n    ")]),t._v("\n     \n    "),n("button",{attrs:{disabled:t.playing_sound},on:{click:t.playChime}},[t._v("\n      play chime\n    ")]),t._v("\n     \n  ")]),n("div",[n("button",{class:{start_timer:t.isStartTimer,stop_timer:!t.isStartTimer},on:{click:function(e){return t.startStopTimer()}}},[t._v("\n      "+t._s(t.button_face)+"\n    ")])])])},p=[],v=n("1e5c"),f=new v["Howl"]({src:["assets/chime.mp3"]}),h=new v["Howl"]({src:["assets/alarm.mp3"]}),d={data:function(){return{current_time:1200,display_time:"20 min 0 secs",minutes:1200,seconds:5,button_face:"Start Timer",interval:null,timeout:null,status:"minutes",chime:f,alarm:h,volume:7,playing_sound:!1,look_away_from_keyboard:!1}},methods:{decreaseTime:function(){var t=this;this.current_time-=1,0===this.current_time&&("minutes"===this.status?(this.alarm.play(),this.look_away_from_keyboard=!0,this.timeout=setTimeout((function(){return t.startTwentySecondTimer()}),3e3)):(this.chime.play(),this.look_away_from_keyboard=!1,this.timeout=setTimeout((function(){return t.startMainTimer()}),5e3)))},startStopTimer:function(){console.log(this.button_face),"Start Timer"===this.button_face?this.startMainTimer():this.resetTimer()},resetTimer:function(){this.current_time=this.minutes,this.button_face="Start Timer",this.status="minutes",this.look_away_from_keyboard=!1,this.playing_sound=!1,clearInterval(this.interval),clearTimeout(this.timeout)},startMainTimer:function(){console.log("Work timer starts"),clearInterval(this.interval),clearTimeout(this.timeout),this.current_time=this.minutes,this.button_face="Reset Timer",this.status="minutes",this.interval=setInterval(this.decreaseTime,1e3)},startTwentySecondTimer:function(){console.log("Look outside timer starts"),clearInterval(this.interval),clearTimeout(this.timeout),this.current_time=this.seconds,this.status="seconds",this.interval=setInterval(this.decreaseTime,1e3)},playAlarm:function(){var t=this;this.alarm.play(),this.playing_sound=!0,this.timeout=setTimeout((function(){t.resetTimer()}),3e3)},playChime:function(){var t=this;this.chime.play(),this.playing_sound=!0,this.timeout=setTimeout((function(){t.resetTimer()}),5e3)},updateDisplayTime:function(){var t=this.current_time;t<0&&(t=0);var e=Math.floor(t/60),n=t-60*e;this.display_time=e+" min "+n+" secs"}},watch:{volume:function(){var t;t=this.volume>0?this.volume/10:0,v["Howler"].volume(t)},minutes:function(){this.current_time=this.minutes,this.updateDisplayTime(),this.resetTimer()},current_time:function(){this.updateDisplayTime()}},computed:{isStartTimer:function(){return"Start Timer"===this.button_face}}},_=d,y=(n("16b2"),Object(a["a"])(_,m,p,!1,null,"4c6c4906",null)),b=y.exports;i["a"].use(c["a"]);var T=new c["a"]({mode:"history",base:"/EyeRestTimer/",routes:[{path:"/",name:"Timer",component:b}]});i["a"].config.productionTip=!1,new i["a"]({router:T,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},c54c:function(t,e,n){}});
//# sourceMappingURL=app.124befa3.js.map