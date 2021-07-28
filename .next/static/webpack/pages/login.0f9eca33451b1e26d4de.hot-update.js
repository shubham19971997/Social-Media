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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJ1c2VyIiwic2V0VXNlciIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJwcmV2IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImhhbmRsZVN1Ym1pdCIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsa0JBRVVDLCtDQUFRLENBQUM7QUFDNUJDLFNBQUssRUFBQyxFQURzQjtBQUU1QkMsWUFBUSxFQUFDO0FBRm1CLEdBQUQsQ0FGbEI7QUFBQSxNQUVOQyxJQUZNO0FBQUEsTUFFREMsT0FGQzs7QUFBQSxNQU9OSCxLQVBNLEdBT1VFLElBUFYsQ0FPTkYsS0FQTTtBQUFBLE1BT0FDLFFBUEEsR0FPVUMsSUFQVixDQU9BRCxRQVBBOztBQUFBLG1CQVMwQkYsK0NBQVEsQ0FBQyxLQUFELENBVGxDO0FBQUEsTUFTTkssWUFUTTtBQUFBLE1BU09DLGVBVFA7O0FBQUEsbUJBVWtCTiwrQ0FBUSxDQUFDLElBQUQsQ0FWMUI7QUFBQSxNQVVOTyxRQVZNO0FBQUEsTUFVR0MsV0FWSDs7QUFBQSxtQkFXd0JSLCtDQUFRLENBQUMsS0FBRCxDQVhoQztBQUFBLE1BV05TLFdBWE07QUFBQSxNQVdNQyxjQVhOOztBQUFBLG1CQVk0QlYsK0NB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WUFBUSxFQUFFTSxjQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFsQ0osQ0FURCxDQUpILEVBeURHLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXpESCxDQURBO0FBNkRIOztHQXZGUVosSzs7S0FBQUEsSztBQXlGVCwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi4wZjllY2EzMzQ1MWIxZTI2ZDRkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5cclxuZnVuY3Rpb24gTG9naW4oKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7ICAgXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBwYXNzd29yZDpcIlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge2VtYWlsLHBhc3N3b3JkfT11c2VyO1xyXG5cclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZyxzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3VibWl0RGlzYWJsZWQsc2V0U3VibWl0RGlzYWJsZWRdPXVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcclxuICAgICAgICBjb25zdCB7bmFtZSx2YWx1ZX09ZS50YXJnZXQ7XHJcbiAgICAgICAgc2V0VXNlcihwcmV2PT4oey4uLnByZXYsW25hbWVdOnZhbHVlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7ZW1haWwscGFzc3dvcmR9KS5ldmVyeShpdGVtPT5Cb29sZWFuKGl0ZW0pKVxyXG4gICAgICAgIGlzVXNlcj9zZXRTdWJtaXREaXNhYmxlZChmYWxzZSk6c2V0U3VibWl0RGlzYWJsZWQodHJ1ZSlcclxuICAgICAgICB9LFt1c2VyXSk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgICA8SGVhZGVyTWVzc2FnZS8+XHJcblxyXG5cclxuICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnI9e2Vycm9yTXNnIT09bnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgaGVhZGVyPVwiT29wc1wiIFxyXG4gICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfSBcclxuICAgICAgICBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKVxyXG4gICAgICAgIH0vPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJyBcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIFxyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgY29udGVudD1cIkxvZ2luXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICA8Rm9vdGVyTWVzc2FnZS8+XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==