self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_1___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function Login() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    email: "",
    password: ""
  }),
      user = _useState[0],
      setUser = _useState[1];

  var email = user.email,
      password = user.password;

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      errorMsg = _useState3[0],
      setErrorMsg = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      formLoading = _useState4[0],
      setFormLoading = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      submitDisabled = _useState5[0],
      setSubmitDisabled = _useState5[1];

  var handleChange = function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;
    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({}, name, value));
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var isUser = Object.values({
      email: email,
      password: password
    }).every(function (item) {
      return Boolean(item);
    });
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  var handleSubmit = function handleSubmit(e) {
    return e.prevent;
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 8
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Form.Input, {
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
      lineNumber: 60,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    content: "Login",
    type: "submit",
    color: "orange",
    disabled: submitDisabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 8
    }
  }));
}

_s(Login, "OOkLZgP+zNrwdMQhPz0aVRfLrl8=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwic2V0VXNlciIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnQiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxHQUFpQjtBQUFBOztBQUFBLGtCQUVVQywrQ0FBUSxDQUFDO0FBQzVCQyxTQUFLLEVBQUMsRUFEc0I7QUFFNUJDLFlBQVEsRUFBQztBQUZtQixHQUFELENBRmxCO0FBQUEsTUFFTkMsSUFGTTtBQUFBLE1BRURDLE9BRkM7O0FBQUEsTUFPTkgsS0FQTSxHQU9VRSxJQVBWLENBT05GLEtBUE07QUFBQSxNQU9BQyxRQVBBLEdBT1VDLElBUFYsQ0FPQUQsUUFQQTs7QUFBQSxtQkFTMEJGLCtDQUFRLENBQUMsS0FBRCxDQVRsQztBQUFBLE1BU05LLFlBVE07QUFBQSxNQVNPQyxlQVRQOztBQUFBLG1CQVVrQk4sK0NBQVEsQ0FBQyxJQUFELENBVjFCO0FBQUEsTUFVTk8sUUFWTTtBQUFBLE1BVUdDLFdBVkg7O0FBQUEsbUJBV3dCUiwrQ0FBUSxDQUFDLEtBQUQsQ0FYaEM7QUFBQSxNQVdOUyxXQVhNO0FBQUEsTUFXTUMsY0FYTjs7QUFBQSxt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QTtBQUFBLElBakNKLEVBa0NJLE1BQUMscURBQUQ7QUFDQSxXQUFPLEVBQUMsT0FEUjtBQUVBLFFBQUksRUFBQyxRQUZMO0FBR0EsU0FBSyxFQUFDLFFBSE47QUFJQSxZQUFRLEVBQUVNLGNBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDSixDQVRELENBSkgsRUF5REcsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBekRILENBREE7QUE2REg7O0dBdkZRWixLOztLQUFBQSxLO0FBeUZULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjVlMTg5NzAyYmQ2YmFkNGJlOGJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLEJ1dHRvbixNZXNzYWdlLFNlZ21lbnQsVGV4dEFyZWEsRGl2aWRlcix9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge0hlYWRlck1lc3NhZ2UsRm9vdGVyTWVzc2FnZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHsgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7ZW1haWwscGFzc3dvcmR9PXVzZXI7XHJcblxyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCxzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdWJtaXREaXNhYmxlZCxzZXRTdWJtaXREaXNhYmxlZF09dXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLHZhbHVlfT1lLnRhcmdldDtcclxuICAgICAgICBzZXRVc2VyKHByZXY9Pih7Li4ucHJldixbbmFtZV06dmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtlbWFpbCxwYXNzd29yZH0pLmV2ZXJ5KGl0ZW09PkJvb2xlYW4oaXRlbSkpXHJcbiAgICAgICAgaXNVc2VyP3NldFN1Ym1pdERpc2FibGVkKGZhbHNlKTpzZXRTdWJtaXREaXNhYmxlZCh0cnVlKVxyXG4gICAgICAgIH0sW3VzZXJdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IGUucHJldmVudFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgPEhlYWRlck1lc3NhZ2UvPlxyXG5cclxuXHJcbiAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyPXtlcnJvck1zZyE9PW51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgIGVycm9yIFxyXG4gICAgICAgIGhlYWRlcj1cIk9vcHNcIiBcclxuICAgICAgICBjb250ZW50PXtlcnJvck1zZ30gXHJcbiAgICAgICAgb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbClcclxuICAgICAgICB9Lz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcgXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJMb2dpblwiIFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZH0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG4gICAgICAgPEZvb3Rlck1lc3NhZ2UvPlxyXG4gICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=