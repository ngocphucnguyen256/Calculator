(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,function(_,e,t){"use strict";var a=t(3),s=t(4),c=t(6),l=t(5),r=t(2),n=t.n(r),i=(t(18),t(0)),E=function(_){Object(c.a)(t,_);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"button",onClick:this.props.onClick,datasize:this.props.size,datavalue:this.props.value,children:this.props.label})}}]),t}(n.a.Component);e.a=E},,,,,,function(_,e,t){"use strict";var a=t(3),s=t(4),c=t(6),l=t(5),r=t(2),n=t.n(r),i=(t(20),t(0)),E=function(_){Object(c.a)(t,_);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"keypad",children:this.props.children})}}]),t}(n.a.Component);e.a=E},,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Button_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),_Keypad_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),_Display_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),_componentsCss_Calculator_css__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(22),_componentsCss_Calculator_css__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_componentsCss_Calculator_css__WEBPACK_IMPORTED_MODULE_8__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__),Calculator=function(_React$Component){Object(C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_React$Component);var _super=Object(C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(props){var _this;return Object(C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),_this=_super.call(this,props),_this.handleClick=function(_){var e=_.target.getAttribute("datavalue");switch(e){case"clear":_this.setState({data:""});break;case"equal":_this.calculate();break;case"backspace":var t=_this.state.data.slice(0,-1);_this.setState({data:t});break;default:_this.setState({data:_this.state.data+e})}},_this.calculate=function(){try{var result=eval(_this.state.data);_this.setState({data:result})}catch(e){_this.setState({data:"error"})}},_this.state={data:""},_this}return Object(C_Users_Pin_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Display_js__WEBPACK_IMPORTED_MODULE_7__.a,{data:this.state.data}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Keypad_js__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"C",value:"clear"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"<=",value:"backspace"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"^",value:"^"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"/",value:"/"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Keypad_js__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"7",value:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"8",value:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"9",value:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"x",value:"x"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Keypad_js__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"4",value:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"5",value:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"6",value:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"-",value:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Keypad_js__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"1",value:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"2",value:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"3",value:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"+",value:"+"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Keypad_js__WEBPACK_IMPORTED_MODULE_6__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:".",value:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"0",value:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"mod",value:"%"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button_js__WEBPACK_IMPORTED_MODULE_5__.a,{onClick:this.handleClick,label:"=",value:"equal"})]})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);__webpack_exports__.a=Calculator},function(_,e,t){"use strict";var a=t(3),s=t(4),c=t(6),l=t(5),r=t(2),n=t.n(r),i=(t(21),t(0)),E=function(_){Object(c.a)(t,_);var e=Object(l.a)(t);function t(){return Object(a.a)(this,t),e.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"display",children:this.props.data})}}]),t}(n.a.Component);e.a=E},,,,,function(_,e,t){},function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(2),s=t.n(a),c=t(9),l=t.n(c),r=(t(16),t(3)),n=t(4),i=t(6),E=t(5),u=(t(17),t(10)),O=t(0),o=function(_){Object(i.a)(t,_);var e=Object(E.a)(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return Object(O.jsx)(u.a,{})}}]),t}(s.a.Component),P=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,l=e.getTTFB;t(_),a(_),s(_),c(_),l(_)}))};l.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(o,{})}),document.getElementById("root")),P()}],[[23,1,2]]]);
//# sourceMappingURL=main.2bf5189d.chunk.js.map