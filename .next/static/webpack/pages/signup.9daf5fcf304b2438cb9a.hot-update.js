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
        value = _e$target.value,
        files = _e$target.files;

    if (name === 'media') {
      setMedia(files[0]);
    }

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
      lineNumber: 65,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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
      lineNumber: 69,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
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
      lineNumber: 77,
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
      lineNumber: 86,
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
      lineNumber: 98,
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
      lineNumber: 111,
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
      lineNumber: 129,
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
      lineNumber: 148,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
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
      lineNumber: 156,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyx1Q0FBdEI7O0FBR0EsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVTQywrQ0FBUSxDQUFD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O0FBQUEsSUF2R0osQ0FESjtBQTJHSDs7R0FoS1FqQyxNOztLQUFBQSxNO0FBa0tULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC45ZGFmNWZjZjMwNGIyNDM4Y2I5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTpcIlwiLCAgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgYmlvOlwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6XCJcIixcclxuICAgICAgICB5b3V0dWJlOlwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjpcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTpcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99PXVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc3Qge25hbWUsdmFsdWUsZmlsZXN9PWUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZihuYW1lPT09J21lZGlhJyl7XHJcbiAgICAgICAgICAgIHNldE1lZGlhKGZpbGVzWzBdKVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIocHJldj0+KHsuLi5wcmV2LFtuYW1lXTp2YWx1ZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZyxzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3VibWl0RGlzYWJsZWQsc2V0U3VibWl0RGlzYWJsZWRdPXVzZVN0YXRlKHRydWUpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lTG9hZGluZyxzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVkaWEsc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVkaWFQcmV2aWV3LHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtoaWdobGlnaHRlZCxzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PWU9PmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoe25hbWUsZW1haWwscGFzc3dvcmQsYmlvfSkuZXZlcnkoaXRlbT0+Qm9vbGVhbihpdGVtKSlcclxuXHJcbiAgICBpc1VzZXI/c2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpOnNldFN1Ym1pdERpc2FibGVkKHRydWUpXHJcblxyXG4gICAgfSxbdXNlcl0pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlLz5cclxuXHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycj17ZXJyb3JNc2chPT1udWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBlcnJvciBcclxuICAgICAgICBoZWFkZXI9XCJPb3BzXCIgXHJcbiAgICAgICAgY29udGVudD17ZXJyb3JNc2d9IFxyXG4gICAgICAgIG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpXHJcbiAgICAgICAgfS8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2VEcm9wRGl2IFxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfSBcclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnIFxyXG4gICAgICAgICAgICBuYW1lPSduYW1lJyBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcgXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPSB7dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnI9eyF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAgXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT57XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt1c2VybmFtZUF2YWlsYWJsZT8nY2hlY2snOidjbG9zZSd9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1vbklucHV0cyBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn0gXHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIiBcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiIFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyTWVzc2FnZS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9