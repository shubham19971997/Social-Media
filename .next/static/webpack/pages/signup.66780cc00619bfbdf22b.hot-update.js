self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\pages\\signup.js",
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_3___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
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
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__.default)({}, name, value));
    });
  };

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showSocialLinks = _useState2[0],
      setShowSocialLinks = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      showPassword = _useState3[0],
      setShowPassword = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      formLoading = _useState5[0],
      setFormLoading = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true),
      submitDisabled = _useState6[0],
      setSubmitDisabled = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),
      username = _useState7[0],
      setUsername = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      usernameLoading = _useState8[0],
      setUsernameLoading = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      usernameAvailable = _useState9[0],
      setUsernameAvailable = _useState9[1];

  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      media = _useState10[0],
      setMedia = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      mediaPreview = _useState11[0],
      setMediaPreview = _useState11[1];

  var _useState12 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      highlighted = _useState12[0],
      setHighlighted = _useState12[1];

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();

  var handleSubmit = function handleSubmit(e) {
    return e.preventDefault();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
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

  var checkUsername = /*#__PURE__*/function () {
    var _ref = (0,C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function checkUsername() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_6__.default, {
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
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Input, {
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
      lineNumber: 101,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Input, {
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
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Input, {
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
      lineNumber: 126,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form.Input, {
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
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_5__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }));
}

_s(Signup, "gYfp0N5CmkLrpMzmykoDKqulHuw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NpZ251cC5qcyJdLCJuYW1lcyI6WyJyZWdleFVzZXJOYW1lIiwiU2lnbnVwIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImJpbyIsImZhY2Vib29rIiwieW91dHViZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJ1c2VyIiwic2V0VXNlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImZpbGVzIiwic2V0TWVkaWEiLCJzZXRNZWRpYVByZXZpZXciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJwcmV2Iiwic2hvd1NvY2lhbExpbmtzIiwic2V0U2hvd1NvY2lhbExpbmtzIiwic2hvd1Bhc3N3b3JkIiwic2V0U2hvd1Bhc3N3b3JkIiwiZXJyb3JNc2ciLCJzZXRFcnJvck1zZyIsImZvcm1Mb2FkaW5nIiwic2V0Rm9ybUxvYWRpbmciLCJzdWJtaXREaXNhYmxlZCIsInNldFN1Ym1pdERpc2FibGVkIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZXJuYW1lTG9hZGluZyIsInNldFVzZXJuYW1lTG9hZGluZyIsInVzZXJuYW1lQXZhaWxhYmxlIiwic2V0VXNlcm5hbWVBdmFpbGFibGUiLCJtZWRpYSIsIm1lZGlhUHJldmlldyIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsInVzZVJlZiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztB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QUFDbENzQiw0QkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0gsT0FGRCxNQUVLO0FBQ0RBLDRCQUFvQixDQUFDLEtBQUQsQ0FBcEI7QUFDSDtBQUNKLEtBZEQ7QUFlQSxTQUFLLE1BZkw7QUFlTSxRQUFJLEVBQUVELGlCQUFpQixHQUFDLE9BQUQsR0FBUyxPQWZ0QztBQWdCQSxnQkFBWSxFQUFDLE1BaEJiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyREosRUF3RUksTUFBQyxvRUFBRDtBQUNBLFFBQUksRUFBRTFCLElBRE47QUFFQSxtQkFBZSxFQUFFWSxlQUZqQjtBQUdBLHNCQUFrQixFQUFFQyxrQkFIcEI7QUFJQSxnQkFBWSxFQUFFWCxZQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4RUosRUErRUksTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBL0VKLEVBZ0ZJLE1BQUMscURBQUQ7QUFDQSxRQUFJLEVBQUMsUUFETDtBQUVBLFdBQU8sRUFBQyxRQUZSO0FBR0EsUUFBSSxFQUFDLFFBSEw7QUFJQSxTQUFLLEVBQUMsUUFKTjtBQUtBLFlBQVEsRUFBRWtCLGNBQWMsSUFBSSxDQUFDTSxpQkFMN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhGSixDQVRBLENBSEEsRUF3R0ksTUFBQyw0RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEdKLENBREo7QUE0R0g7O0dBOUtRcEMsTTs7S0FBQUEsTTtBQWdMVCwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuNjY3ODBjYzAwNjE5YmZiZGYyMmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufSIsImltcG9ydCBSZWFjdCx7dXNlU3RhdGUsdXNlRWZmZWN0LHVzZVJlZn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sQnV0dG9uLE1lc3NhZ2UsU2VnbWVudCxUZXh0QXJlYSxEaXZpZGVyLH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCB7SGVhZGVyTWVzc2FnZSxGb290ZXJNZXNzYWdlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2VcIjtcclxuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMnO1xyXG5pbXBvcnQgSW1hZ2VEcm9wRGl2IGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0ltYWdlRHJvcERpdic7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnO1xyXG5cclxuY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNpZ251cCgpIHtcclxuXHJcbiAgICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOlwiXCIsICAgIFxyXG4gICAgICAgIGVtYWlsOlwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6XCJcIixcclxuICAgICAgICBiaW86XCJcIixcclxuICAgICAgICBmYWNlYm9vazpcIlwiLFxyXG4gICAgICAgIHlvdXR1YmU6XCJcIixcclxuICAgICAgICB0d2l0dGVyOlwiXCIsXHJcbiAgICAgICAgaW5zdGFncmFtOlwiXCJcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHtuYW1lLGVtYWlsLHBhc3N3b3JkLGJpb309dXNlcjtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2U9KGUpPT57XHJcbiAgICAgICAgY29uc3Qge25hbWUsdmFsdWUsZmlsZXN9PWUudGFyZ2V0O1xyXG5cclxuICAgICAgICBpZihuYW1lPT09J21lZGlhJyl7XHJcbiAgICAgICAgICAgIHNldE1lZGlhKGZpbGVzWzBdKVxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRVc2VyKHByZXY9Pih7Li4ucHJldixbbmFtZV06dmFsdWV9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3JNc2csc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbZm9ybUxvYWRpbmcsc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N1Ym1pdERpc2FibGVkLHNldFN1Ym1pdERpc2FibGVkXT11c2VTdGF0ZSh0cnVlKVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgW3VzZXJuYW1lLHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUxvYWRpbmcsc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSxzZXRVc2VybmFtZUF2YWlsYWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW21lZGlhLHNldE1lZGlhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW21lZGlhUHJldmlldyxzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbaGlnaGxpZ2h0ZWQsc2V0SGlnaGxpZ2h0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdD1lPT5lLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHtuYW1lLGVtYWlsLHBhc3N3b3JkLGJpb30pLmV2ZXJ5KGl0ZW09PkJvb2xlYW4oaXRlbSkpXHJcblxyXG4gICAgaXNVc2VyP3NldFN1Ym1pdERpc2FibGVkKGZhbHNlKTpzZXRTdWJtaXREaXNhYmxlZCh0cnVlKVxyXG5cclxuICAgIH0sW3VzZXJdKTtcclxuXHJcbiAgICBjb25zdCBjaGVja1VzZXJuYW1lPWFzeW5jKCk9Pnt9XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHVzZXJuYW1lPT09XCJcIj9zZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk6Y2hlY2tVc2VybmFtZSgpXHJcbiAgICB9LFt1c2VybmFtZV0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlLz5cclxuXHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycj17ZXJyb3JNc2chPT1udWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBlcnJvciBcclxuICAgICAgICBoZWFkZXI9XCJPb3BzXCIgXHJcbiAgICAgICAgY29udGVudD17ZXJyb3JNc2d9IFxyXG4gICAgICAgIG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpXHJcbiAgICAgICAgfS8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2VEcm9wRGl2IFxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfSBcclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnIFxyXG4gICAgICAgICAgICBuYW1lPSduYW1lJyBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcgXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPSB7dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnI9eyF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAgXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT57XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt1c2VybmFtZUF2YWlsYWJsZT8nY2hlY2snOidjbG9zZSd9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1vbklucHV0cyBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn0gXHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvb3Rlck1lc3NhZ2UvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==