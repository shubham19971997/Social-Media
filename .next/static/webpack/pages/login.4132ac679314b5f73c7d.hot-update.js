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
    return e.preventDefault();
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
      lineNumber: 90,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwic2V0VXNlciIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2lyY3VsYXIiLCJsaW5rIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFVUMsK0NBQVEsQ0FBQztBQUM1QkMsU0FBSyxFQUFDLEVBRHNCO0FBRTVCQyxZQUFRLEVBQUM7QUFGbUIsR0FBRCxDQUZsQjtBQUFBLE1BRU5DLElBRk07QUFBQSxNQUVEQyxPQUZDOztBQUFBLE1BT05ILEtBUE0sR0FPVUUsSUFQVixDQU9ORixLQVBNO0FBQUEsTUFPQUMsUUFQQSxHQU9VQyxJQVBWLENBT0FELFFBUEE7O0FBQUEsbUJBUzBCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FUbEM7QUFBQSxNQVNOSyxZQVRNO0FBQUEsTUFTT0MsZUFUUDs7QUFBQSxtQkFVa0JOLCtDQUFRLENBQUMsSUFBRCxDQVYxQjtBQUFBLE1BVU5PLFFBVk07QUFBQSxNQVVHQyxXQVZIOztBQUFBLG1CQVd3QlIsK0NBQVEsQ0FBQyxLQUFELENBWGhDO0FBQUEsTUFXTlMsV0FYTTtBQUFBLE1BV01DLGNBWE47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QUFBO0FBQUE7QUFBQTtBQUFBLElBakNKLEVBa0NJLE1BQUMscURBQUQ7QUFFQSxXQUFPLEVBQUMsT0FGUjtBQUdBLFFBQUksRUFBQyxRQUhMO0FBSUEsU0FBSyxFQUFDLFFBSk47QUFLQSxZQUFRLEVBQUVNLGNBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxDSixDQVRELENBSkgsRUEwREcsTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBMURILENBREE7QUE4REg7O0dBeEZRWixLOztLQUFBQSxLO0FBMEZULCtEQUFlQSxLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjQxMzJhYzY3OTMxNGI1ZjczYzdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLEJ1dHRvbixNZXNzYWdlLFNlZ21lbnQsVGV4dEFyZWEsRGl2aWRlcix9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge0hlYWRlck1lc3NhZ2UsRm9vdGVyTWVzc2FnZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBMb2dpbigpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHsgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7ZW1haWwscGFzc3dvcmR9PXVzZXI7XHJcblxyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCxzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdWJtaXREaXNhYmxlZCxzZXRTdWJtaXREaXNhYmxlZF09dXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLHZhbHVlfT1lLnRhcmdldDtcclxuICAgICAgICBzZXRVc2VyKHByZXY9Pih7Li4ucHJldixbbmFtZV06dmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtlbWFpbCxwYXNzd29yZH0pLmV2ZXJ5KGl0ZW09PkJvb2xlYW4oaXRlbSkpXHJcbiAgICAgICAgaXNVc2VyP3NldFN1Ym1pdERpc2FibGVkKGZhbHNlKTpzZXRTdWJtaXREaXNhYmxlZCh0cnVlKVxyXG4gICAgICAgIH0sW3VzZXJdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgIDxIZWFkZXJNZXNzYWdlLz5cclxuXHJcblxyXG4gICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycj17ZXJyb3JNc2chPT1udWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBlcnJvciBcclxuICAgICAgICBoZWFkZXI9XCJPb3BzXCIgXHJcbiAgICAgICAgY29udGVudD17ZXJyb3JNc2d9IFxyXG4gICAgICAgIG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpXHJcbiAgICAgICAgfS8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnIFxyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgXHJcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6KCk9PnNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyd0ZXh0JzpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29udGVudD1cIkxvZ2luXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICA8Rm9vdGVyTWVzc2FnZS8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==