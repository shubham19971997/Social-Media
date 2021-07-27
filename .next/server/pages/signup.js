(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    twitter,
    youtube
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    t: true,
    ype: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    color: "teal",
    header: signupRoute ? 'Get Started' : 'Welcome Back',
    icon: signupRoute ? 'settings' : 'privacy',
    content: signupRoute ? "Create New Account" : "Login with Email and Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), "Existing User", "", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Login Here Instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Forgot Password")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), "New User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, "Signup Here"), " Instead", "")));
};

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const handleSubmit = e => e.preventDefault();

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: "eye",
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? 'text' : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    err: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? 'check' : 'close',
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXGFcXE9uZURyaXZlXFxEZXNrdG9wXFxTb2NpYWwgTWVkaWFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSGVhZGVyTWVzc2FnZSIsInJvdXRlciIsInVzZVJvdXRlciIsInNpZ251cFJvdXRlIiwicGF0aG5hbWUiLCJGb290ZXJNZXNzYWdlIiwicmVnZXhVc2VyTmFtZSIsIlNpZ251cCIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxZQUFULENBQXNCO0FBQUNDLE1BQUksRUFBQztBQUFDQyxPQUFEO0FBQUtDLFlBQUw7QUFBY0MsYUFBZDtBQUF3QkMsV0FBeEI7QUFBZ0NDO0FBQWhDLEdBQU47QUFBK0NDLGNBQS9DO0FBQTREQyxpQkFBNUQ7QUFBNEVDO0FBQTVFLENBQXRCLEVBQXVIO0FBQ25ILFNBQ0kscUVBQ0EsTUFBQyx5REFBRDtBQUNBLFlBQVEsTUFEUjtBQUVBLFdBQU8sRUFBRUMsdURBRlQ7QUFHQSxRQUFJLEVBQUMsS0FITDtBQUlBLFNBQUssRUFBRVIsR0FKUDtBQUtBLFlBQVEsRUFBRUss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ZXRCLE1BQWYsRTs7Ozs7Ozs7Ozs7QUN0SkEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe3VzZXI6e2JpbyxmYWNlYm9vayxpbnN0YWdyYW0sdHdpdHRlcix5b3V0dWJlfSxoYW5kbGVDaGFuZ2Usc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY29udHJvbD17VGV4dEFyZWF9IFxyXG4gICAgICAgIG5hbWU9XCJiaW9cIiBcclxuICAgICAgICB2YWx1ZT17YmlvfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiIFxyXG4gICAgICAgIGNvbG9yPVwicmVkXCIgXHJcbiAgICAgICAgaWNvbj1cImF0XCIgdFxyXG4gICAgICAgIHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5zZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9IFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgPD5cclxuICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIiBcclxuICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgbmFtZT1cImZhY2Vib29rXCIgXHJcbiAgICAgICAgdmFsdWU9e2ZhY2Vib29rfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwidHdpdHRlclwiIFxyXG4gICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICBuYW1lPVwidHdpdHRlclwiIFxyXG4gICAgICAgIHZhbHVlPXt0d2l0dGVyfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwiaW5zdGFncmFtXCIgXHJcbiAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIiBcclxuICAgICAgICB2YWx1ZT17aW5zdGFncmFtfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwieW91dHViZVwiIFxyXG4gICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICBuYW1lPVwieW91dHViZVwiIFxyXG4gICAgICAgIHZhbHVlPXt5b3V0dWJlfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCIgXHJcbiAgICAgICAgaW5mbyBcclxuICAgICAgICBzaXplPVwic21hbGxcIiBcclxuICAgICAgICBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsXCIgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbklucHV0c1xyXG4iLCJpbXBvcnQge0ljb24sTWVzc2FnZSxEaXZpZGVyfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBjb25zdCAgSGVhZGVyTWVzc2FnZT0oKT0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQgXHJcbiAgICAgICAgY29sb3I9XCJ0ZWFsXCJcclxuICAgICAgICBoZWFkZXI9e3NpZ251cFJvdXRlPydHZXQgU3RhcnRlZCc6J1dlbGNvbWUgQmFjayd9IFxyXG4gICAgICAgIGljb249e3NpZ251cFJvdXRlPydzZXR0aW5ncyc6J3ByaXZhY3knfSBcclxuICAgICAgICBjb250ZW50PXtzaWdudXBSb3V0ZT9cIkNyZWF0ZSBOZXcgQWNjb3VudFwiOlwiTG9naW4gd2l0aCBFbWFpbCBhbmQgUGFzc3dvcmRcIn0vPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZT0oKT0+e1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWU9PT1cIi9zaWdudXBcIjtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3NpZ251cFJvdXRlPzw+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2UgYXR0YWNoZWQ9XCJib3R0b21cIiB3YXJuaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIEV4aXN0aW5nIFVzZXJ7XCJcIn1cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luIEhlcmUgSW5zdGVhZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDwvPjo8PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIGluZm8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImxvY2tcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXNldFwiPkZvcmdvdCBQYXNzd29yZDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaGVscFwiLz5cclxuICAgICAgICAgICAgICAgICAgICBOZXcgVXNlcj8gPExpbmsgaHJlZj1cIi9zaWdudXBcIj5TaWdudXAgSGVyZTwvTGluaz4gSW5zdGVhZHtcIlwifVxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG5cclxufSIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLE1lc3NhZ2UsU2VnbWVudCxUZXh0QXJlYSxEaXZpZGVyLH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7SGVhZGVyTWVzc2FnZSxGb290ZXJNZXNzYWdlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMnO1xyXG5cclxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOlwiXCIsXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBwYXNzd29yZDpcIlwiLFxyXG4gICAgICAgIGJpbzpcIlwiLFxyXG4gICAgICAgIGZhY2Vib29rOlwiXCIsXHJcbiAgICAgICAgeW91dHViZTpcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6XCJcIixcclxuICAgICAgICBpbnN0YWdyYW06XCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge25hbWUsZW1haWwscGFzc3dvcmQsYmlvfT11c2VyXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLHZhbHVlfT1lLnRhcmdldFxyXG5cclxuICAgICAgICBzZXRVc2VyKHByZXY9Pih7Li4ucHJldixbbmFtZV06dmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZm9ybUxvYWRpbmcsc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N1Ym1pdERpc2FibGVkLHNldFN1Ym1pdERpc2FibGVkXT11c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSxzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD1lPT5lLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtuYW1lLGVtYWlsLHBhc3N3b3JkLGJpb30pLmV2ZXJ5KGl0ZW09PkJvb2xlYW4oaXRlbSkpXHJcblxyXG4gICAgaXNVc2VyP3NldFN1Ym1pdERpc2FibGVkKGZhbHNlKTpzZXRTdWJtaXREaXNhYmxlZCh0cnVlKVxyXG5cclxuICAgIH0sW3VzZXJdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyTWVzc2FnZS8+XHJcblxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnI9e2Vycm9yTXNnIT09bnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgaGVhZGVyPVwiT29wc1wiIFxyXG4gICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfSBcclxuICAgICAgICBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKVxyXG4gICAgICAgIH0vPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZScgXHJcbiAgICAgICAgICAgIG5hbWU9J25hbWUnIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJyBcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIFxyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZyA9IHt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycj17IXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnICBcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249e3VzZXJuYW1lQXZhaWxhYmxlPydjaGVjayc6J2Nsb3NlJ31cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q29tbW9uSW5wdXRzIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfSBcclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc30gXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXJNZXNzYWdlLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9