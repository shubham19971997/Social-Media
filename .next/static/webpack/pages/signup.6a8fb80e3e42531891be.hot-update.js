self["webpackHotUpdate_N_E"]("pages/signup",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicHJldiIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJzZXRNZWRpYSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsdUNBQXRCOztBQUdBLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFFU0MsK0NBQVEsQ0FBQztBQUM1QkMs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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTpcIlwiLCAgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgYmlvOlwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6XCJcIixcclxuICAgICAgICB5b3V0dWJlOlwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjpcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTpcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99PXVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc3Qge25hbWUsdmFsdWUsfT1lLnRhcmdldFxyXG5cclxuICAgICAgICBzZXRVc2VyKHByZXY9Pih7Li4ucHJldixbbmFtZV06dmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZm9ybUxvYWRpbmcsc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N1Ym1pdERpc2FibGVkLHNldFN1Ym1pdERpc2FibGVkXT11c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSxzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW21lZGlhLHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21lZGlhUHJldmlldyxzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaGlnaGxpZ2h0ZWQsc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD1lPT5lLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtuYW1lLGVtYWlsLHBhc3N3b3JkLGJpb30pLmV2ZXJ5KGl0ZW09PkJvb2xlYW4oaXRlbSkpXHJcblxyXG4gICAgaXNVc2VyP3NldFN1Ym1pdERpc2FibGVkKGZhbHNlKTpzZXRTdWJtaXREaXNhYmxlZCh0cnVlKVxyXG5cclxuICAgIH0sW3VzZXJdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyTWVzc2FnZS8+XHJcblxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnI9e2Vycm9yTXNnIT09bnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgaGVhZGVyPVwiT29wc1wiIFxyXG4gICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfSBcclxuICAgICAgICBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKVxyXG4gICAgICAgIH0vPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEltYWdlRHJvcERpdiBcclxuICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX0gXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJyBcclxuICAgICAgICAgICAgbmFtZT0nbmFtZScgXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnIFxyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgXHJcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6KCk9PnNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyd0ZXh0JzpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nID0ge3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyPXshdXNlcm5hbWVBdmFpbGFibGV9IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgIFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBpZihyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj17dXNlcm5hbWVBdmFpbGFibGU/J2NoZWNrJzonY2xvc2UnfVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tb25JbnB1dHMgXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9IFxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc30gXHJcbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvb3Rlck1lc3NhZ2UvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==