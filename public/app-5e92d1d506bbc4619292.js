webpackJsonp([0xd2a57dc1d883],{233:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(856),options:{plugins:[]}},{plugin:t(859),options:{plugins:[]}},{plugin:t(857),options:{plugins:[]}},{plugin:t(607),options:{plugins:[]}}]},600:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(810),"component---src-templates-post-template-js":t(816),"component---src-templates-page-template-js":t(815),"component---src-pages-contact-js":t(812),"component---src-pages-index-js":t(813),"component---src-pages-search-js":t(814)},e.json={"layout-index.json":t(817),"offline-plugin-app-shell-fallback.json":t(840),"keeping-this-guide-offline.json":t(837),"testing-milk-quality.json":t(852),"milk-transportation.json":t(839),"keeping-records.json":t(836),"choosing-forages-to-cultivate.json":t(820),"prevention-of-ketosis.json":t(844),"dairy-cattle-sheds-introduction.json":t(823),"clean-milk-production.json":t(821),"tail-rot.json":t(851),"calf-rearing.json":t(819),"sleeping-sickness.json":t(847),"foot-and-mouth-disease.json":t(830),"sore-mouth.json":t(848),"malignant-catarrhal-fever.json":t(838),"when-to-serve-and-ai.json":t(854),"signs-for-a-cow-on-heat.json":t(846),"deworming.json":t(824),"heifer-rearing.json":t(832),"increasing-milk-production-part-2.json":t(834),"feeding-dry-cows.json":t(827),"preventing-mastitus.json":t(843),"getting-better-prices.json":t(831),"understanding-breeds.json":t(853),"feeding-your-cow-basics.json":t(829),"increasing-milk-production-part-1.json":t(833),"east-coast-fever-disease.json":t(825),"preventing-and-managing-bloat.json":t(841),"feeding-milking-cows.json":t(828),"preventing-and-treating-milk-fever.json":t(842),"success.json":t(850),"about.json":t(818),"starters.json":t(849),"feeding-calf.json":t(826),"contact.json":t(822),"index.json":t(835),"search.json":t(845)},e.layouts={"layout---index":t(811)}},601:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(2),p=o(l),f=t(387),d=o(f),m=t(173),h=o(m),g=t(233),y=t(1413),j=o(y),x=function(n){var e=n.children;return c.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},173:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(1125),r=o(a),u=(0,r.default)();n.exports=u},602:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(169),r=t(388),u=o(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return i=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return i=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return i=n,s[r]=n,!0}return!1}),i}}},603:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(271),r=o(a),u=t(233),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},818:function(n,e,t){t(12),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(869)})})}},819:function(n,e,t){t(12),n.exports=function(n){return t.e(0x8c4f0d14723e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(870)})})}},820:function(n,e,t){t(12),n.exports=function(n){return t.e(34852434669071,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(871)})})}},821:function(n,e,t){t(12),n.exports=function(n){return t.e(0xf55bba38d277,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(872)})})}},822:function(n,e,t){t(12),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(873)})})}},823:function(n,e,t){t(12),n.exports=function(n){return t.e(58124802777686,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(874)})})}},824:function(n,e,t){t(12),n.exports=function(n){return t.e(0x9e7eb06dfaff,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(875)})})}},825:function(n,e,t){t(12),n.exports=function(n){return t.e(0xc1ae41d9caf,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(876)})})}},826:function(n,e,t){t(12),n.exports=function(n){return t.e(0x68a2d625ef9f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(877)})})}},827:function(n,e,t){t(12),n.exports=function(n){return t.e(0xdd99c72bd454,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(878)})})}},828:function(n,e,t){t(12),n.exports=function(n){return t.e(0x5b393fc4f253,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(879)})})}},829:function(n,e,t){t(12),n.exports=function(n){return t.e(0xba86e6ecd157,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(880)})})}},830:function(n,e,t){t(12),n.exports=function(n){return t.e(68922459823442,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(881)})})}},831:function(n,e,t){t(12),n.exports=function(n){return t.e(77872298969548,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(882)})})}},832:function(n,e,t){t(12),n.exports=function(n){return t.e(0x6d5a69b1ced0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(883)})})}},833:function(n,e,t){t(12),n.exports=function(n){return t.e(4192667201539,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(884)})})}},834:function(n,e,t){t(12),n.exports=function(n){return t.e(85358636293582,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(885)})})}},835:function(n,e,t){t(12),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(886)})})}},836:function(n,e,t){t(12),n.exports=function(n){return t.e(0xbc9c1650c928,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(887)})})}},837:function(n,e,t){t(12),n.exports=function(n){return t.e(0xe43bc0de3fa6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(888)})})}},817:function(n,e,t){t(12),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(274)})})}},838:function(n,e,t){t(12),n.exports=function(n){return t.e(25040941501588,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(889)})})}},839:function(n,e,t){t(12),n.exports=function(n){return t.e(0xf96116d2a063,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(890)})})}},840:function(n,e,t){t(12),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(891)})})}},841:function(n,e,t){t(12),n.exports=function(n){return t.e(0xc2df5a7b6fa,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(892)})})}},842:function(n,e,t){t(12),n.exports=function(n){return t.e(0x702695031a2e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(893)})})}},843:function(n,e,t){t(12),n.exports=function(n){return t.e(0xa98dbcc86d3e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(894)})})}},844:function(n,e,t){t(12),n.exports=function(n){return t.e(0xde6396b3a4c1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(895)})})}},845:function(n,e,t){t(12),n.exports=function(n){return t.e(0xe7884ae5879b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(896)})})}},846:function(n,e,t){t(12),n.exports=function(n){return t.e(65753350447288,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(897)})})}},847:function(n,e,t){t(12),n.exports=function(n){return t.e(0xabbbc8645253,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(898)})})}},848:function(n,e,t){t(12),n.exports=function(n){return t.e(0xbae63431df8d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(899)})})}},849:function(n,e,t){t(12),n.exports=function(n){return t.e(0xd13e24b67c6b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(900)})})}},850:function(n,e,t){t(12),n.exports=function(n){return t.e(0x9b544cfa2a85,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(901)})})}},851:function(n,e,t){t(12),n.exports=function(n){return t.e(0xc7fb23f21e31,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(902)})})}},852:function(n,e,t){t(12),n.exports=function(n){return t.e(50815995376799,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(903)})})}},853:function(n,e,t){t(12),n.exports=function(n){return t.e(64357724802778,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(904)})})}},854:function(n,e,t){t(12),n.exports=function(n){return t.e(99279208769231,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(905)})})}},811:function(n,e,t){t(12),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(604)})})}},387:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(1),r=(o(a),t(602)),u=o(r),s=t(173),i=o(s),c=t(388),l=o(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],x={},v="",C=[],k={},N=function(n){return n&&n.default||n},b=void 0,R=!0,w=[],_={},P={},E=5;b=t(605)({getNextQueuedResources:function(){return C.slice(-1)[0]},createResourceDownload:function(n){S(n,function(){C=C.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var O=function(n,e){return k[n]>k[e]?1:k[n]<k[e]?-1:0},L=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,w.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),w=w.slice(-E),t(n,o)})}},A=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):S(e,function(n,o){if(n)t(n);else{var a=N(o());g[e]=a,t(n,a)}})},T=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=w.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),T()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],x={},k={},C=[],y=[],v=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,x[e]?x[e]+=1:x[e]=1,U.has(e)||j.unshift(e),j.sort(L);var o=p(e);return o.jsonName&&(k[o.jsonName]?k[o.jsonName]+=1+t:k[o.jsonName]=1+t,C.indexOf(o.jsonName)!==-1||h[o.jsonName]||C.unshift(o.jsonName)),o.componentChunkName&&(k[o.componentChunkName]?k[o.componentChunkName]+=1+t:k[o.componentChunkName]=1+t,C.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||C.unshift(o.componentChunkName)),C.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:C,resourcesCount:k}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return A(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),A(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,s()}),void(o.layoutComponentChunkName&&A(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(51))},906:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"keeping-this-guide-offline.json",path:"/keeping-this-guide-offline/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"testing-milk-quality.json",path:"/testing-milk-quality/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"milk-transportation.json",path:"/milk-transportation/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"keeping-records.json",path:"/keeping-records/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"choosing-forages-to-cultivate.json",path:"/choosing-forages-to-cultivate/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"prevention-of-ketosis.json",path:"/prevention-of-ketosis/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"dairy-cattle-sheds-introduction.json",path:"/dairy-cattle-sheds-introduction/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"clean-milk-production.json",path:"/clean-milk-production/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tail-rot.json",path:"/tail-rot/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"calf-rearing.json",path:"/calf-rearing/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sleeping-sickness.json",path:"/sleeping-sickness/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"foot-and-mouth-disease.json",path:"/foot-and-mouth-disease/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sore-mouth.json",path:"/sore-mouth/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"malignant-catarrhal-fever.json",path:"/malignant-catarrhal-fever/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"when-to-serve-and-ai.json",path:"/when-to-serve-and-ai/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"signs-for-a-cow-on-heat.json",path:"/signs-for-a-cow-on-heat/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"deworming.json",path:"/deworming/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"heifer-rearing.json",path:"/heifer-rearing/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"increasing-milk-production-part-2.json",path:"/increasing-milk-production-part-2/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"feeding-dry-cows.json",path:"/feeding-dry-cows/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"preventing-mastitus.json",path:"/preventing-mastitus/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"getting-better-prices.json",path:"/getting-better-prices/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"understanding-breeds.json",path:"/understanding-breeds/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"feeding-your-cow-basics.json",path:"/feeding-your-cow-basics/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"increasing-milk-production-part-1.json",path:"/increasing-milk-production-part-1/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"east-coast-fever-disease.json",path:"/east-coast-fever-disease/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"preventing-and-managing-bloat.json",path:"/preventing-and-managing-bloat/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"feeding-milking-cows.json",path:"/feeding-milking-cows/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"preventing-and-treating-milk-fever.json",path:"/preventing-and-treating-milk-fever/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"success.json",path:"/success/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"starters.json",path:"/starters/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"feeding-calf.json",path:"/feeding-calf/"},{componentChunkName:"component---src-pages-contact-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-search-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"search.json",path:"/search/"}]},605:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(233),u=t(1),s=o(u),i=t(21),c=o(i),l=t(169),p=t(863),f=t(794),d=o(f),m=t(273),h=t(603),g=o(h),y=t(173),j=o(y),x=t(906),v=o(x),C=t(907),k=o(C),N=t(601),b=o(N),R=t(600),w=o(R),_=t(387),P=o(_);t(683),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(w.default),window.asyncRequires=w.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=k.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(606);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),o=t.pathname,a=E[o];a&&(o=a.toPath);var r=window.location;if(r.pathname!==t.pathname||r.search!==t.search||r.hash!==t.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(u),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,a({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},907:function(n,e){n.exports=[]},606:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(173),r=o(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},388:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},607:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(1),r=o(a),u=t(169),s=t(55),i=t(2),c=o(i),l=t(47),p=o(l);e.onInitialClientRender=function(){var n=window.document.getElementById("server-side-jss");n&&n.parentNode.removeChild(n)},e.replaceRouterComponent=function(n){var e=n.history,t=(0,p.default)(),o=function(n){var o=n.children;return r.default.createElement(s.Provider,{store:t},r.default.createElement(u.Router,{history:e},o))};return o.propTypes={children:c.default.object.isRequired},o}},794:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},12:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!r&&e&&e[o]?void c(!0):(a(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},855:function(n,e,t){"use strict";var o=t(63);n.exports=function(n,e){n.addEventListener("click",function(n){if(0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey||n.defaultPrevented)return!0;for(var t=null,a=n.target;a.parentNode;a=a.parentNode)if("A"===a.nodeName){t=a;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;
if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,r.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+r.host+r.pathname)||(n.preventDefault(),e(t.getAttribute("href")),!1)})}},856:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(63),r=t(855),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},857:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},810:function(n,e,t){t(12),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(858)})})}},859:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},1125:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},1413:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},812:function(n,e,t){t(12),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(649)})})}},813:function(n,e,t){t(12),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(650)})})}},814:function(n,e,t){t(12),n.exports=function(n){return t.e(0x81e20e680ce7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(651)})})}},815:function(n,e,t){t(12),n.exports=function(n){return t.e(0xd5d9d741ef0b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(653)})})}},816:function(n,e,t){t(12),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(654)})})}}});
//# sourceMappingURL=app-5e92d1d506bbc4619292.js.map