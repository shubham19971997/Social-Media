self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv(_ref) {
  var highlighted = _ref.highlighted,
      setHighlighted = _ref.setHighlighted,
      inputRef = _ref.inputRef,
      handleChange = _ref.handleChange,
      mediaPreview = _ref.mediaPreview,
      setMediaPreview = _ref.setMediaPreview,
      setMedia = _ref.setMedia;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      setHighlighted(true);
      var droppedFile = Array.from;
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? 'green' : '',
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }), "Drag n Drop or Click to Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  })))))));
}

_c = ImageDropDiv;
/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

var _c;

$RefreshReg$(_c, "ImageDropDiv");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var name = user.name,
      email = user.email,
      password = user.password,
      bio = user.bio;

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      submitDisabled = _useState6[0],
      setSubmitDisabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      username = _useState7[0],
      setUsername = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameLoading = _useState8[0],
      setUsernameLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      usernameAvailable = _useState9[0],
      setUsernameAvailable = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      media = _useState10[0],
      setMedia = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      mediaPreview = _useState11[0],
      setMediaPreview = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      highlighted = _useState12[0],
      setHighlighted = _useState12[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  var handleSubmit = function handleSubmit(e) {
    return e.preventDefault();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isUser = Object.values({
      name: name,
      email: email,
      password: password,
      bio: bio
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
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
      lineNumber: 81,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
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
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
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
      onClick: function onClick() {
        return setShowPassword(!showPassword);
      }
    },
    iconPosition: "left",
    type: showPassword ? 'text' : "password",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Input, {
    loading: usernameLoading,
    err: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: function onChange(e) {
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
      lineNumber: 124,
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
      lineNumber: 143,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }));
}

_s(Signup, "yc5pnQZcr+c1B2fp5H9el/khRCQ=");

_c = Signup;
/* harmony default export */ __webpack_exports__["default"] = (Signup);

var _c;

$RefreshReg$(_c, "Signup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWdudXAuanMiXSwibmFtZXMiOlsiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwiaGFuZGxlQ2hhbmdlIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siLCJyZWdleFVzZXJOYW1lIiwiU2lnbnVwIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJpbyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJ1c2VyIiwic2V0VXNlciIsInRhcmdldCIsInZhbHVlIiwicHJldiIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJoYW5kbGVTdWJtaXQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FRTztBQUFBLE1BUEhDLFdBT0csUUFQSEEsV0FPRztBQUFBLE1BTkhDLGNBTUcsUUFOSEEsY0FNRztBQUFBLE1BTEhDLFFBS0csUUFMSEEsUUFLRztBQUFBLE1BSkhDLFlBSUcsUUFKSEEsWUFJRztBQUFBLE1BSEhDLFlBR0csUUFISEEsWUFHRztBQUFBLE1BRkhDLGVBRUcsUUFGSEEsZUFFRztBQUFBLE1BREhDLFFBQ0csUUFESEEsUUFDRztBQUNILFNBQ0EscUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFTLGVBQVcsTUFBcEI7QUFBcUIsU0FBSyxNQUExQjtBQUEyQixhQUFTLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUM7QUFBVCxLQURQO0FBRUEsUUFBSSxFQUFDLE1BRkw7QUFHQSxVQUFNLEVBQUMsUUFIUDtBQUlBLFlBQVEsRUFBRUosWUFKVjtBQUtBLFFBQUksRUFBQyxPQUxMO0FBTUEsT0FBRyxFQUFFRCxRQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVVJO0FBQ0EsY0FBVSxFQUFFLG9CQUFDTSxDQUFELEVBQUs7QUFDYkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsS0FKRDtBQU1BLGVBQVcsRUFBRSxxQkFBQU8sQ0FBQyxFQUFFO0FBQ2hCQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQyxLQVREO0FBV0EsVUFBTSxFQUFFLGdCQUFDTyxDQUFELEVBQUs7QUFDVEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0EsVUFBTVMsV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQTFCO0FBQ0gsS0FmRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBa0JLUixZQUFZLEtBQUcsSUFBZixHQUFvQixxRUFFckIsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBRUosV0FBVyxHQUFDLE9BQUQsR0FBUyxFQUFwQztBQUF3QyxlQUFXLE1BQW5EO0FBQW9ELFNBQUssTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFDQSxRQUFJLEVBQUMsb0JBREw7QUFFQSxTQUFLLEVBQUU7QUFBQ2EsWUFBTSxFQUFDO0FBQVIsS0FGUDtBQUdBLFdBQU8sRUFBRTtBQUFBLGFBQUlYLFFBQVEsQ0FBQ1ksT0FBVCxDQUFpQkMsS0FBakIsRUFBSjtBQUFBLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLHlDQUZKLENBRnFCLENBQXBCLEdBZUcscUVBRUosTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLG9EQUFEO0FBQ0EsT0FBRyxFQUFFWCxZQURMO0FBRUEsUUFBSSxFQUFDLFFBRkw7QUFHQSxZQUFRLE1BSFI7QUFHUyxTQUFLLEVBQUU7QUFBQ1MsWUFBTSxFQUFDO0FBQVIsS0FIaEI7QUFJQSxXQUFPLEVBQUU7QUFBQSxhQUFJWCxRQUFRLENBQUNZLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQUo7QUFBQSxLQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQUZJLENBakNSLENBVkosQ0FESixDQURKLENBREE7QUFtRUg7O0tBNUVRaEIsWTtBQThFVCwrREFBZUEsWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTWlCLGFBQWEsR0FBRyx1Q0FBdEI7O0FBR0EsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVTQywrQ0FBUSxDQUFDO0FBQzVCQyxRQUFJLEVBQUMsRUFEdUI7QUFFNUJDLFNBQUssRUFBQyxFQUZzQjtBQUc1QkMsWUFBUSxFQUFDLEVBSG1CO0FBSTVCQyxPQUFHLEVBQUMsRUFKd0I7QUFLNUJDLFlBQVEsRUFBQyxFQUxtQjtBQU01QkMsV0FBTyxFQUFDLEVBTm9CO0FBTzVCQyxXQUFPLEVBQUMsRUFQb0I7QUFRNUJDLGFBQVMsRUFBQztBQVJrQixHQUFELENBRmpCO0FBQUEsTUFFUEMsSUFGTztBQUFBLE1BRUZDLE9BRkU7O0FBQUEsTUFhUFQsSUFiTyxHQWFrQlEsSUFibEIsQ0FhUFIsSUFiTztBQUFBLE1BYUZDLEtBYkUsR0Fha0JPLElBYmxCLENBYUZQLEtBYkU7QUFBQSxNQWFJQyxRQWJKLEdBYWtCTSxJQWJsQixDQWFJTixRQWJKO0FBQUEsTUFhYUMsR0FiYixHQWFrQkssSUFibEIsQ0FhYUwsR0FiYjs7QUFlZCxNQUFNbkIsWUFBWSxHQUFDLFNBQWJBLFlBQWEsQ0FBQ0ssQ0FBRCxFQUFLO0FBQUEsb0JBQ0RBLENBQUMsQ0FBQ3FCLE1BREQ7QUFBQSxRQUNiVixJQURhLGFBQ2JBLElBRGE7QUFBQSxRQUNSVyxLQURRLGFBQ1JBLEtBRFE7QUFHcEJGLFdBQU8sQ0FBQyxVQUFBRyxJQUFJO0FBQUEsNkNBQU9BLElBQVAsa0pBQWFaLElBQWIsRUFBbUJXLEtBQW5CO0FBQUEsS0FBTCxDQUFQO0FBQ0gsR0FKRDs7QUFmYyxtQkFxQitCWiwrQ0FBUSxDQUFDLEtBQUQsQ0FyQnZDO0FBQUEsTUFxQlBjLGVBckJPO0FBQUEsTUFxQlNDLGtCQXJCVDs7QUFBQSxtQkFzQnlCZiwrQ0FBUSxDQUFDLEtBQUQsQ0F0QmpDO0FBQUEsTUFzQlBnQixZQXRCTztBQUFBLE1Bc0JNQyxlQXRCTjs7QUFBQSxtQkF1QmlCakIsK0NBQVEsQ0FBQyxJQUFELENBdkJ6QjtBQUFBLE1BdUJQa0IsUUF2Qk87QUFBQSxNQXVCRUMsV0F2QkY7O0FBQUEsbUJBd0J1Qm5CLCtDQUFRLENBQUMsS0FBRCxDQXhCL0I7QUFBQSxNQXdCUG9CLFdBeEJPO0FBQUEsTUF3QktDLGNBeEJMOztBQUFBLG1CQXlCMkJyQiwrQ0FBUSxDQUFDLElBQUQsQ0F6Qm5DO0FBQUEsTUF5QlBzQixjQXpCTztBQUFBLE1BeUJRQyxpQkF6QlI7O0FBQUEsbUJBNkJpQnZCLCtDQUFRLENBQUMsRUFBRCxDQTdCekI7QUFBQSxNQTZCUHdCLFFBN0JPO0FBQUEsTUE2QkVDLFdBN0JGOztBQUFBLG1CQThCK0J6QiwrQ0FBUSxDQUFDLEtBQUQsQ0E5QnZDO0FBQUEsTUE4QlAwQixlQTlCTztBQUFBLE1BOEJTQyxrQkE5QlQ7O0FBQUEsbUJBK0JtQzNCLCtDQUFRLENBQUMsS0FBRCxDQS9CM0M7QUFBQSxNQStCUDRCLGlCQS9CTztBQUFBLE1BK0JXQyxvQkEvQlg7O0FBQUEsb0JBaUNXN0IsK0NBQVEsQ0FBQyxJQUFELENBakNuQjtBQUFBLE1BaUNQOEIsS0FqQ087QUFBQSxNQWlDRDFDLFFBakNDOztBQUFBLG9CQWtDeUJZLCtDQUFRLENBQUMsSUFBRCxDQWxDakM7QUFBQSxNQWtDUGQsWUFsQ087QUFBQSxNQWtDTUMsZUFsQ047O0FBQUEsb0JBbUN1QmEsK0NBQVEsQ0FBQyxLQUFELENBbkMvQjtBQUFBLE1BbUNQbEIsV0FuQ087QUFBQSxNQW1DS0MsY0FuQ0w7O0FBcUNkLE1BQU1DLFFBQVEsR0FBRytDLDZDQUFNLEVBQXZCOztBQUdBLE1BQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUExQyxDQUFDO0FBQUEsV0FBRUEsQ0FBQyxDQUFDQyxjQUFGLEVBQUY7QUFBQSxHQUFwQjs7QUFFQTBDLGtEQUFTLENBQUMsWUFBSTtBQUNkLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ25DLFVBQUksRUFBSkEsSUFBRDtBQUFNQyxXQUFLLEVBQUxBLEtBQU47QUFBWUMsY0FBUSxFQUFSQSxRQUFaO0FBQXFCQyxTQUFHLEVBQUhBO0FBQXJCLEtBQWQsRUFBeUNpQyxLQUF6QyxDQUErQyxVQUFBQyxJQUFJO0FBQUEsYUFBRUMsT0FBTyxDQUFDRCxJQUFELENBQVQ7QUFBQSxLQUFuRCxDQUFmO0FBRUFKLFVBQU0sR0FBQ1gsaUJBQWlCLENBQUMsS0FBRCxDQUFsQixHQUEwQkEsaUJBQWlCLENBQUMsSUFBRCxDQUFqRDtBQUVDLEdBTFEsRUFLUCxDQUFDZCxJQUFELENBTE8sQ0FBVDtBQU1BLFNBQ0kscUVBQ0ksTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFHQSxNQUFDLG1EQUFEO0FBQU0sV0FBTyxFQUFFVyxXQUFmO0FBQTRCLE9BQUcsRUFBRUYsUUFBUSxLQUFHLElBQTVDO0FBQWtELFlBQVEsRUFBRWMsWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQUMsc0RBQUQ7QUFDQSxTQUFLLE1BREw7QUFFQSxVQUFNLEVBQUMsTUFGUDtBQUdBLFdBQU8sRUFBRWQsUUFIVDtBQUlBLGFBQVMsRUFBRTtBQUFBLGFBQUlDLFdBQVcsQ0FBQyxJQUFELENBQWY7QUFBQSxLQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQSxFQVNBLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0VBQUQ7QUFDQSxnQkFBWSxFQUFFakMsWUFEZDtBQUVBLG1CQUFlLEVBQUVDLGVBRmpCO0FBR0EsWUFBUSxFQUFFQyxRQUhWO0FBSUEsWUFBUSxFQUFFSixRQUpWO0FBS0EsZUFBVyxFQUFFRixXQUxiO0FBTUEsa0JBQWMsRUFBRUMsY0FOaEI7QUFPQSxnQkFBWSxFQUFFRSxZQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVVJLE1BQUMseURBQUQ7QUFDQSxZQUFRLE1BRFI7QUFFQSxTQUFLLEVBQUMsTUFGTjtBQUdBLGVBQVcsRUFBQyxNQUhaO0FBSUEsUUFBSSxFQUFDLE1BSkw7QUFLQSxTQUFLLEVBQUVnQixJQUxQO0FBTUEsWUFBUSxFQUFFaEIsWUFOVjtBQU9BLFNBQUssTUFQTDtBQU9NLFFBQUksRUFBQyxNQVBYO0FBUUEsZ0JBQVksRUFBQyxNQVJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQXNCSSxNQUFDLHlEQUFEO0FBQ0EsWUFBUSxNQURSO0FBRUEsU0FBSyxFQUFDLE9BRk47QUFHQSxlQUFXLEVBQUMsT0FIWjtBQUlBLFFBQUksRUFBQyxPQUpMO0FBS0EsU0FBSyxFQUFFaUIsS0FMUDtBQU1BLFlBQVEsRUFBRWpCLFlBTlY7QUFPQSxTQUFLLE1BUEw7QUFPTSxRQUFJLEVBQUMsVUFQWDtBQVFBLGdCQUFZLEVBQUMsTUFSYjtBQVNBLFFBQUksRUFBQyxPQVRMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkosRUFtQ0ksTUFBQyx5REFBRDtBQUNBLFNBQUssRUFBQyxVQUROO0FBRUEsZUFBVyxFQUFDLFVBRlo7QUFHQSxRQUFJLEVBQUMsVUFITDtBQUlBLFNBQUssRUFBRWtCLFFBSlA7QUFLQSxZQUFRLEVBQUVsQixZQUxWO0FBTUEsU0FBSyxNQU5MO0FBT0EsUUFBSSxFQUFFO0FBQ0ZnQixVQUFJLEVBQUMsS0FESDtBQUVGdUMsY0FBUSxFQUFDLElBRlA7QUFHRkMsVUFBSSxFQUFDLElBSEg7QUFJRkMsYUFBTyxFQUFDO0FBQUEsZUFBSXpCLGVBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQW5CO0FBQUE7QUFKTixLQVBOO0FBYUEsZ0JBQVksRUFBQyxNQWJiO0FBY0EsUUFBSSxFQUFFQSxZQUFZLEdBQUMsTUFBRCxHQUFRLFVBZDFCO0FBZUEsWUFBUSxNQWZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQ0osRUFxREksTUFBQyx5REFBRDtBQUNBLFdBQU8sRUFBSVUsZUFEWDtBQUVBLE9BQUcsRUFBRSxDQUFDRSxpQkFGTjtBQUdBLFlBQVEsTUFIUjtBQUlBLFNBQUssRUFBQyxVQUpOO0FBS0EsZUFBVyxFQUFDLFVBTFo7QUFNQSxTQUFLLEVBQUVKLFFBTlA7QUFPQSxZQUFRLEVBQUUsa0JBQUFsQyxDQUFDLEVBQUU7QUFDVG1DLGlCQUFXLENBQUNuQyxDQUFDLENBQUNxQixNQUFGLENBQVNDLEtBQVYsQ0FBWDs7QUFDQSxVQUFHZCxhQUFhLENBQUM2QyxJQUFkLENBQW1CckQsQ0FBQyxDQUFDcUIsTUFBRixDQUFTQyxLQUE1QixDQUFILEVBQXNDO0FBQ2xDaUIsNEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNILE9BRkQsTUFFSztBQUNEQSw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0g7QUFDSixLQWREO0FBZUEsU0FBSyxNQWZMO0FBZU0sUUFBSSxFQUFFRCxpQkFBaUIsR0FBQyxPQUFELEdBQVMsT0FmdEM7QUFnQkEsZ0JBQVksRUFBQyxNQWhCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRKLEVBd0VJLE1BQUMsb0VBQUQ7QUFDQSxRQUFJLEVBQUVuQixJQUROO0FBRUEsbUJBQWUsRUFBRUssZUFGakI7QUFHQSxzQkFBa0IsRUFBRUMsa0JBSHBCO0FBSUEsZ0JBQVksRUFBRTlCLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFSixFQStFSSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvRUosRUFnRkksTUFBQyxxREFBRDtBQUNBLFdBQU8sRUFBQyxRQURSO0FBRUEsUUFBSSxFQUFDLFFBRkw7QUFHQSxTQUFLLEVBQUMsUUFITjtBQUlBLFlBQVEsRUFBRXFDLGNBQWMsSUFBSSxDQUFDTSxpQkFKN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhGSixDQVRBLENBSEEsRUF1R0ksTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkdKLENBREo7QUEyR0g7O0dBM0pRN0IsTTs7S0FBQUEsTTtBQTZKVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMzM2NjBiM2UxZjQxMzEwNWUyZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxTZWdtZW50LEltYWdlLEljb24sSGVhZGVyfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlRHJvcERpdih7XHJcbiAgICBoaWdobGlnaHRlZCxcclxuICAgIHNldEhpZ2hsaWdodGVkLFxyXG4gICAgaW5wdXRSZWYsXHJcbiAgICBoYW5kbGVDaGFuZ2UsXHJcbiAgICBtZWRpYVByZXZpZXcsXHJcbiAgICBzZXRNZWRpYVByZXZpZXcsXHJcbiAgICBzZXRNZWRpYVxyXG4gICAgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICAgPEZvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgIDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIiBcclxuICAgICAgICAgICAgICAgIGFjY2VwdD1cImltYWdlL1wiIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVkaWFcIiBcclxuICAgICAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtlPT57XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvbkRyb3A9eyhlKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkcm9wcGVkRmlsZSA9IEFycmF5LmZyb21cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3PT09bnVsbD88PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZD8nZ3JlZW4nOicnfSBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aW5wdXRSZWYuY3VycmVudC5jbGljaygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJncmVlblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXZcclxuIiwiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTpcIlwiLCAgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgYmlvOlwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6XCJcIixcclxuICAgICAgICB5b3V0dWJlOlwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjpcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTpcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99PXVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc3Qge25hbWUsdmFsdWV9PWUudGFyZ2V0XHJcblxyXG4gICAgICAgIHNldFVzZXIocHJldj0+KHsuLi5wcmV2LFtuYW1lXTp2YWx1ZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZyxzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3VibWl0RGlzYWJsZWQsc2V0U3VibWl0RGlzYWJsZWRdPXVzZVN0YXRlKHRydWUpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lTG9hZGluZyxzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVkaWEsc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVkaWFQcmV2aWV3LHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtoaWdobGlnaHRlZCxzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PWU9PmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoe25hbWUsZW1haWwscGFzc3dvcmQsYmlvfSkuZXZlcnkoaXRlbT0+Qm9vbGVhbihpdGVtKSlcclxuXHJcbiAgICBpc1VzZXI/c2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpOnNldFN1Ym1pdERpc2FibGVkKHRydWUpXHJcblxyXG4gICAgfSxbdXNlcl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlLz5cclxuXHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycj17ZXJyb3JNc2chPT1udWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBlcnJvciBcclxuICAgICAgICBoZWFkZXI9XCJPb3BzXCIgXHJcbiAgICAgICAgY29udGVudD17ZXJyb3JNc2d9IFxyXG4gICAgICAgIG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpXHJcbiAgICAgICAgfS8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2VEcm9wRGl2IFxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfSBcclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnIFxyXG4gICAgICAgICAgICBuYW1lPSduYW1lJyBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcgXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPSB7dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnI9eyF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAgXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT57XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt1c2VybmFtZUF2YWlsYWJsZT8nY2hlY2snOidjbG9zZSd9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1vbklucHV0cyBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn0gXHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIiBcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiIFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyTWVzc2FnZS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9