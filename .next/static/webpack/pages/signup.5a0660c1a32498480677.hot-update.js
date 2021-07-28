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
      setMedia(files);
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
      lineNumber: 64,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 68,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
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
      lineNumber: 76,
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
      lineNumber: 85,
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
      lineNumber: 97,
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
      lineNumber: 110,
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
      lineNumber: 128,
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
      lineNumber: 147,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
      lineNumber: 155,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayIsInRlc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyx1Q0FBdEI7O0FBR0EsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUVTQywrQ0FBUSxDQUFD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SjtBQTJHSDs7R0EvSlFqQyxNOztLQUFBQSxNO0FBaUtULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC41YTA2NjBjMWEzMjQ5ODQ4MDY3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTpcIlwiLCAgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgYmlvOlwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6XCJcIixcclxuICAgICAgICB5b3V0dWJlOlwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjpcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTpcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99PXVzZXJcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc3Qge25hbWUsdmFsdWUsZmlsZXN9PWUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZihuYW1lPT09J21lZGlhJyl7XHJcbiAgICAgICAgICAgIHNldE1lZGlhKGZpbGVzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcihwcmV2PT4oey4uLnByZXYsW25hbWVdOnZhbHVlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcyxzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCxzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdWJtaXREaXNhYmxlZCxzZXRTdWJtaXREaXNhYmxlZF09dXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsc2V0VXNlcm5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFttZWRpYSxzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFttZWRpYVByZXZpZXcsc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2hpZ2hsaWdodGVkLHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99KS5ldmVyeShpdGVtPT5Cb29sZWFuKGl0ZW0pKVxyXG5cclxuICAgIGlzVXNlcj9zZXRTdWJtaXREaXNhYmxlZChmYWxzZSk6c2V0U3VibWl0RGlzYWJsZWQodHJ1ZSlcclxuXHJcbiAgICB9LFt1c2VyXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlck1lc3NhZ2UvPlxyXG5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyPXtlcnJvck1zZyE9PW51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgIGVycm9yIFxyXG4gICAgICAgIGhlYWRlcj1cIk9vcHNcIiBcclxuICAgICAgICBjb250ZW50PXtlcnJvck1zZ30gXHJcbiAgICAgICAgb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbClcclxuICAgICAgICB9Lz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgIDxJbWFnZURyb3BEaXYgXHJcbiAgICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9IFxyXG4gICAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZScgXHJcbiAgICAgICAgICAgIG5hbWU9J25hbWUnIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJyBcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIFxyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZyA9IHt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycj17IXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnICBcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249e3VzZXJuYW1lQXZhaWxhYmxlPydjaGVjayc6J2Nsb3NlJ31cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q29tbW9uSW5wdXRzIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfSBcclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc30gXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXJNZXNzYWdlLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=