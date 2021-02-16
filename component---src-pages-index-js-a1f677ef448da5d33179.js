/*! For license information please see component---src-pages-index-js-a1f677ef448da5d33179.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0jh0":function(e,t){e.exports=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},Fxm3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var r=+new Date;!!t&&r<t+n?(clearTimeout(a),a=setTimeout((function(){t=r,e()}),n)):(t=r,e())}};t.default=n},IVAY:function(e,t,a){var n=a("Q83E");e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},Jmq7:function(e,t,a){var n=a("cjBy"),r=a("v06X");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?r(e):t}},R7tm:function(e,t,a){var n=a("qHws"),r=a("gC2u"),l=a("dQcQ"),o=a("m7BV");e.exports=function(e){return n(e)||r(e)||l(e)||o()}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("7oih"),o=a("9Hrx"),i=a("YIkO"),s=a.n(i);var c=a("dwco"),m=a.n(c),u=function(e){return e.children},d=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){m.a.polyfill()},a.handleClick=function(e){e.preventDefault();var t=0,a=!0,n=this.props,r=n.type,l=n.element,o=n.offset,i=n.timeout;if(r&&l)switch(r){case"class":a=!!(t=document.getElementsByClassName(l)[0]);break;case"id":a=!!(t=document.getElementById(l))}a?this.scrollTo(t,o,i):console.log("Element not found: "+l)},a.scrollTo=function(e,t,a){void 0===t&&(t=0),void 0===a&&(a=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;a?setTimeout((function(){window.scroll({top:n+t,left:0,behavior:"smooth"})}),a):window.scroll({top:n+t,left:0,behavior:"smooth"})},a.render=function(){return r.a.createElement(u,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick,onKeyDown:this.handleKeyDown,role:"button",tabIndex:0},this.props.children))},t}(r.a.Component),p=a("TUGy"),f=a.n(p),h=a("obyI"),v=a.n(h),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={tabs:[{content:"About",href:"about"},{content:"Experience",href:"experience"},{content:"Projects",href:"projects"},{content:"Education",href:"education"},{content:"Skills",href:"skills"},{content:"Interests",href:"interests"},{content:"Awards",href:"awards"}]},a}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.state.tabs;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},v.a.firstName," ",v.a.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:f.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement(s.a,{items:e.map((function(e){return e.href})),currentClassName:"active",offset:-300,className:"navbar-nav"},e.map((function(e,t){var a=e.href,n=e.content;return r.a.createElement("li",{className:"nav-item",key:a},r.a.createElement(d,{type:"id",element:a},r.a.createElement("a",{className:"nav-link",href:"#"+a},n)))})))))},t}(n.Component);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(g,null),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},v.a.firstName," ",r.a.createElement("span",{className:"text-primary"},v.a.lastName)),r.a.createElement("div",{className:"subheading mb-5"},v.a.address," · ",v.a.phone," · ",r.a.createElement("a",{href:"mailto:"+v.a.email},v.a.email)),r.a.createElement("p",{className:"lead mb-5"},"Insert headline here."))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},"Analyst, Supply Chain Optimization"),r.a.createElement("div",{className:"subheading mb-3"},"Nutrienn"),r.a.createElement("div",{className:"mb-3"},"Bring to the table several win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",r.a.createElement("div",{Style:"font-weight: bold;"},"Tools & Technology"),r.a.createElement("table",{cellspacing:"0",cellpadding:"0"},r.a.createElement("tr",null,r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE;"},"Host Communicator"),r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE; padding-left: 20px;"},"IBM Personal Communications")),r.a.createElement("tr",null,r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE;"},"Analytics"),r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE; padding-left: 20px;"},"Microsoft Excel, Power BI, Alteryx")),r.a.createElement("tr",null,r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE;"},"ETL"),r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE; padding-left: 20px;"},"Microsoft Excel, Llamasoft Data Guru")),r.a.createElement("tr",null,r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE;"},"Supply Chain Analytics"),r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE; padding-left: 20px;"},"Llamasoft Supply Chain Guru")),r.a.createElement("tr",null,r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE;"},"Programming"),r.a.createElement("td",{Style:"border-bottom:1px transparent #EEE; padding-left: 20px;"},"VBA, Power Query, DAX, Python"))))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"April 2020 - Present"))),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},"Teaching Assistant"),r.a.createElement("div",{className:"subheading mb-3"},"University of Calgary"),r.a.createElement("div",{Style:"font-weight: bold;"},"Highlights"),r.a.createElement("ul",{className:"fa-ul mb-3"},r.a.createElement("li",null,"- Mentored over 400 students in core areas of Mathematics, Statistics, Security and Privacy, Data Analysis, Machine Learning and Foundations of Computer Science"),r.a.createElement("li",null,"- Instilled sound design principles and quality programming standards among students resulting in cleaner assignment solutions and swifter evaluations")),r.a.createElement("div",{Style:"font-weight: bold;"},"Courses"),r.a.createElement("ul",{className:"fa-ul mb-3"},r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Introduction to Cryptography   ",r.a.createElement("img",{src:"https://img.shields.io/badge/java-68768A",alt:""})),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Introduction to Computability"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Advanced Programming Techniques   ",r.a.createElement("img",{src:"https://img.shields.io/badge/python-030387",alt:""}),"   ",r.a.createElement("img",{src:"https://img.shields.io/badge/java-68768A",alt:""})),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Explorations in Information Security"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Data Structures, Algorithms, and their Analyses   ",r.a.createElement("img",{src:"https://img.shields.io/badge/java-68768A",alt:""})),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Introduction to Problem Solving using Application Software"),r.a.createElement("li",null,r.a.createElement("i",{className:"fa-li text-primary"}),"Introduction to Computer Science for Multidisciplinary Studies I   ",r.a.createElement("img",{src:"https://img.shields.io/badge/python-68768A",alt:""})))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"September 2015 - December 2019"))))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"projects"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Projects"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,"Template Section")))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),r.a.createElement("div",{className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},"University of Calgary"),r.a.createElement("div",{className:"subheading mb-3"},"Master of Science, Computer Science"),r.a.createElement("div",{Style:"font-weight: bold;"},"Overview"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,"Conducted sophisticated research in Algebraic Number Theory and Cryptography"),r.a.createElement("li",null,"Applied advanced mathematical and computer optimization techniques to improve a modern encryption algorithm"),r.a.createElement("li",null,"Published ",r.a.createElement("a",{href:"https://link.springer.com/chapter/10.1007/978-3-030-16458-4_20"},"Improved Efficiency of a Linearly Homomorphic Cryptosystem")))),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},"September 2015 - August 2019"))))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"}," ***Template Section*** "),r.a.createElement("div",{className:"subheading mb-3"}," Programming Languages & Tools "),r.a.createElement("div",{className:"subheading mb-3"},"Workflow"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,"Mobile-First, Responsive Design"),r.a.createElement("li",null,"Cross Browser Testing & Debugging"),r.a.createElement("li",null,"Cross Functional Teams"),r.a.createElement("li",null,"Agile Development & Scrum")))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("div",{className:"subheading mb-3"}," ***Template Section*** "),r.a.createElement("p",null,"Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking."),r.a.createElement("p",{className:"mb-0"},"When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."))),r.a.createElement("hr",{className:"m-0"}),r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},r.a.createElement("li",null,"- Top 0.1% in Mathematics by virtue of 100% score in AISSE 2009"))))))}},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===l)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},TUGy:function(e,t,a){e.exports=a.p+"static/avatar-26d43268c229afe6e5b820d23946989a.png"},YIkO:function(e,t,a){"use strict";var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("j8BX")),l=n(a("0jh0")),o=n(a("R7tm")),i=n(a("phZJ")),s=n(a("Jmq7")),c=n(a("aDmP")),m=n(a("v06X")),u=n(a("lFqo")),d=n(a("IVAY")),p=n(a("17x9")),f=n(a("q1tI")),h=n(a("TSYQ")),v=n(a("Fxm3"));var g=function(e){function t(e){var a;return(0,i.default)(this,t),(a=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind((0,m.default)(a)),a}return(0,d.default)(t,e),(0,u.default)(t,null,[{key:"propTypes",get:function(){return{items:p.default.arrayOf(p.default.string).isRequired,currentClassName:p.default.string.isRequired,scrolledPastClassName:p.default.string,style:p.default.object,componentTag:p.default.oneOfType([p.default.string,p.default.element]),offset:p.default.number,rootEl:p.default.string,onUpdate:p.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,u.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,r=e.length;n<r;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],r=e||this.state.targetItems,l=!1,i=0,s=r.length;i<s;i++){var c=r[i],m=!l&&this._isInView(c);m?(l=!0,t.push(c)):a.push(c);var u=i===s-1,d=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!m&&u&&d&&(a.pop(),a.push.apply(a,(0,o.default)(t)),t=[c],n=this._fillArray(n,!1),m=!0),n.push(m)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,a=this.props,n=a.rootEl,r=a.offset;n&&(t=document.querySelector(n).getBoundingClientRect());var l=e.getBoundingClientRect(),o=n?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+o,c=n?l.top+i-t.top+r:l.top+i+r,m=c+e.offsetHeight;return c<s&&m>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},(function(){t._update(n)}))}},{key:"_update",value:function(e){var t,a;(t=this.state.inViewState,a=e,t.length===a.length&&t.every((function(e,t){return e===a[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,n=a.children,o=a.className,i=a.scrolledPastClassName,s=a.style,c=0,m=f.default.Children.map(n,(function(t,a){var n;if(!t)return null;var o=t.type,s=i&&e.state.isScrolledPast[a],m=(0,h.default)((n={},(0,l.default)(n,"".concat(t.props.className),t.props.className),(0,l.default)(n,"".concat(e.props.currentClassName),e.state.inViewState[a]),(0,l.default)(n,"".concat(e.props.scrolledPastClassName),s),n));return f.default.createElement(o,(0,r.default)({},t.props,{className:m,key:c++}),t.props.children)})),u=(0,h.default)((0,l.default)({},"".concat(o),o));return f.default.createElement(t,{className:u,style:s},m)}}]),t}(f.default.Component);t.default=g},aDmP:function(e,t){function a(t){return e.exports=a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},a(t)}e.exports=a},dQcQ:function(e,t,a){var n=a("hMe3");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},dwco:function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,r={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||i,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,o=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?f.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):r.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?r.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):f.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;f.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var a=d(this),n=a.getBoundingClientRect(),l=this.getBoundingClientRect();a!==t.body?(f.call(this,a,a.scrollLeft+l.left-n.left,a.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+o<e.scrollHeight:"X"===t?e.clientWidth+o<e.scrollWidth:void 0}function m(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function u(e){var t=c(e,"Y")&&m(e,"Y"),a=c(e,"X")&&m(e,"X");return t||a}function d(e){for(;e!==t.body&&!1===u(e);)e=e.parentNode||e.host;return e}function p(t){var a,n,r,o,i=(l()-t.startTime)/468;o=i=i>1?1:i,a=.5*(1-Math.cos(Math.PI*o)),n=t.startX+(t.x-t.startX)*a,r=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,r),n===t.x&&r===t.y||e.requestAnimationFrame(p.bind(e,t))}function f(a,n,o){var s,c,m,u,d=l();a===t.body?(s=e,c=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,u=r.scroll):(s=a,c=a.scrollLeft,m=a.scrollTop,u=i),p({scrollable:s,method:u,startTime:d,startX:c,startY:m,x:n,y:o})}}}}()},gC2u:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},hMe3:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},lFqo:function(e,t){function a(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}},m7BV:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},obyI:function(e,t){e.exports={siteTitle:"Parth Das | Resume",manifestName:"Resume",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/img/website-icon.png",pathPrefix:"./resume/",firstName:"Parth",lastName:"Das",socialLinks:[{icon:"fa-github-square",name:"Github",url:"https://github.com/daspeks"},{icon:"fa-linkedin",name:"Linkedin",url:"https://linkedin.com/in/daspeks/"}],email:"address@domainname.com",phone:"000-000-0000",address:"Calgary, AB"}},phZJ:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},qHws:function(e,t,a){var n=a("hMe3");e.exports=function(e){if(Array.isArray(e))return n(e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-a1f677ef448da5d33179.js.map