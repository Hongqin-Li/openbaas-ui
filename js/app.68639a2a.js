(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({dashboard:"dashboard",login:"login"}[e]||e)+"."+{dashboard:"d7183cee",login:"09060257"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={dashboard:1,login:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({dashboard:"dashboard",login:"login"}[e]||e)+"."+{dashboard:"d1c8ee93",login:"549c2a46"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/openbaas-ui/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("appbar"),n("v-main",[n("v-container",{attrs:{fluid:""}},[n("v-fade-transition",{attrs:{appear:""}},[n("router-view")],1)],1)],1)],1)},a=[],i=(n("4de4"),n("c975"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{color:"white",app:""}},[n("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:!e.$vuetify.breakpoint.mdAndUp,expression:"!$vuetify.breakpoint.mdAndUp"}],on:{click:function(t){return e.$store.commit("toggleDrawer")}}}),n("v-toolbar-title",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}]},[e._v(e._s(e.title))]),n("v-spacer"),n("v-autocomplete",{staticClass:"mx-2 mx-md-4",class:e.isSearching?"rounded-b-0":" rounded-lg",attrs:{loading:e.loading,items:e.items,"search-input":e.search,"background-color":e.isFocused?void 0:"grey lighten-3",flat:!e.isFocused&&!e.isSearching,autocomplete:"off","hide-details":"",solo:"",dense:"","hide-no-data":"",label:"What state are you from?"},on:{"update:searchInput":function(t){e.search=t},"update:search-input":function(t){e.search=t},focus:e.onFocus,blur:e.onBlur},scopedSlots:e._u([{key:"prepend-inner",fn:function(){return[n("v-icon",{staticClass:"ml-1 mr-2",attrs:{color:e.isFocused?void 0:"grey"}},[e._v("mdi-magnify ")])]},proxy:!0}]),model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e.$vuetify.breakpoint.mdAndUp?[n("v-divider",{staticClass:"mx-2",staticStyle:{"margin-top":"auto","margin-bottom":"auto","max-height":"1.5em"},attrs:{vertical:"",inset:""}}),n("v-btn",{attrs:{text:""}},[e._v("Doc ")]),n("v-tooltip",{attrs:{"open-delay":"500",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.onClickUser}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-account-circle-outline")])],1)]}}],null,!1,1652765325)},[n("span",[e._v("User")])]),n("v-tooltip",{attrs:{"open-delay":"500",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,3221905750)},[n("span",[e._v("Settings")])])]:e._e()],2)}),s=[],c=o["a"].extend({name:"Appbar",data:function(){return{title:"OpenBaas",loading:!1,items:[],search:null,select:null,states:["Alabama"],isSearching:!1,isFocused:!1}},watch:{search:function(e){e&&e!==this.select&&this.querySelections(e)}},methods:{querySelections:function(e){var t=this;this.loading=!0,setTimeout((function(){t.items=t.states.filter((function(t){return(t||"").toLowerCase().indexOf((e||"").toLowerCase())>-1})),t.loading=!1}),500)},onClickUser:function(){this.$router.push("login")},onFocus:function(){this.isFocused=!0},onBlur:function(){this.isFocused=!1}}}),l=c,u=n("2877"),d=n("6544"),p=n.n(d),f=n("40dc"),h=n("5bc1"),v=n("c6a6"),m=n("8336"),g=n("ce7e"),b=n("132d"),y=n("2fa4"),w=n("2a7f"),k=n("3a2f"),_=Object(u["a"])(l,i,s,!1,null,null,null),S=_.exports;p()(_,{VAppBar:f["a"],VAppBarNavIcon:h["a"],VAutocomplete:v["a"],VBtn:m["a"],VDivider:g["a"],VIcon:b["a"],VSpacer:y["a"],VToolbarTitle:w["a"],VTooltip:k["a"]});var A=o["a"].extend({name:"App",components:{Appbar:S},data:function(){return{title:"OpenBaas",loading:!1,items:[],search:null,select:null,states:["Alabama"]}},watch:{search:function(e){e&&e!==this.select&&this.querySelections(e)}},methods:{querySelections:function(e){var t=this;this.loading=!0,setTimeout((function(){t.items=t.states.filter((function(t){return(t||"").toLowerCase().indexOf((e||"").toLowerCase())>-1})),t.loading=!1}),500)}}}),x=A,O=n("7496"),C=n("a523"),j=n("0789"),T=n("f6c4"),V=Object(u["a"])(x,r,a,!1,null,null,null),B=V.exports;p()(V,{VApp:O["a"],VContainer:C["a"],VFadeTransition:j["d"],VMain:T["a"]});var E=n("9483");Object(E["a"])("".concat("/openbaas-ui/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var F=n("8c4f");o["a"].use(F["a"]);var D=[{path:"/dashboard",name:"Dashboard",component:function(){return n.e("dashboard").then(n.bind(null,"7277"))}},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/signup",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],L=new F["a"]({mode:"history",base:"/openbaas-ui/",routes:D}),N=L,P=n("2f62");o["a"].use(P["a"]);var $=new P["a"].Store({state:{openDrawer:!0},mutations:{toggleDrawer:function(e){e.openDrawer=!e.openDrawer,console.log("toggle drawer",e.openDrawer)}},actions:{},modules:{}}),U=n("f309"),q=n("fcf4");o["a"].use(U["a"]);var M=new U["a"]({breakpoint:{mobileBreakpoint:"sm"},theme:{themes:{light:{primary:q["a"].indigo.darken1,secondary:q["a"].red.lighten1,accent:q["a"].indigo.base}}}});o["a"].config.productionTip=!1,new o["a"]({router:N,store:$,vuetify:M,render:function(e){return e(B)}}).$mount("#app")}});
//# sourceMappingURL=app.68639a2a.js.map