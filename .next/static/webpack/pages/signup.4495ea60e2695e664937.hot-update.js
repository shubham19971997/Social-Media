self["webpackHotUpdate_N_E"]("pages/signup",{

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
      var res;
      return C_Users_a_OneDrive_Desktop_Social_Media_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__.default));

            case 3:
              res = _context.sent;
              _context.next = 9;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);
              setErrorMsg('Username Not Available');

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
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
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
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
      lineNumber: 110,
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
      lineNumber: 122,
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
      lineNumber: 135,
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
      lineNumber: 153,
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
      lineNumber: 172,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
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
      lineNumber: 180,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInNldE1lZGlhUHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2hlY2tVc2VybmFtZSIsImF4aW9zIiwiYmFzZVVybCIsInJlcyIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUksRUFBRUQsaUJBQWlCLEdBQUMsT0FBRCxHQUFTLE9BZnRDO0FBZ0JBLGdCQUFZLEVBQUMsTUFoQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJESixFQXdFSSxNQUFDLG9FQUFEO0FBQ0EsUUFBSSxFQUFFMUIsSUFETjtBQUVBLG1CQUFlLEVBQUVZLGVBRmpCO0FBR0Esc0JBQWtCLEVBQUVDLGtCQUhwQjtBQUlBLGdCQUFZLEVBQUVYLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFSixFQStFSSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvRUosRUFnRkksTUFBQyxxREFBRDtBQUNBLFFBQUksRUFBQyxRQURMO0FBRUEsV0FBTyxFQUFDLFFBRlI7QUFHQSxRQUFJLEVBQUMsUUFITDtBQUlBLFNBQUssRUFBQyxRQUpOO0FBS0EsWUFBUSxFQUFFa0IsY0FBYyxJQUFJLENBQUNNLGlCQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZKLENBVEEsQ0FIQSxFQXdHSSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4R0osQ0FESjtBQTRHSDs7R0F2TFFwQyxNOztLQUFBQSxNO0FBeUxULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC40NDk1ZWE2MGUyNjk1ZTY2NDkzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6XCJcIiwgICAgXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBwYXNzd29yZDpcIlwiLFxyXG4gICAgICAgIGJpbzpcIlwiLFxyXG4gICAgICAgIGZhY2Vib29rOlwiXCIsXHJcbiAgICAgICAgeW91dHViZTpcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6XCJcIixcclxuICAgICAgICBpbnN0YWdyYW06XCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge25hbWUsZW1haWwscGFzc3dvcmQsYmlvfT11c2VyO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcclxuICAgICAgICBjb25zdCB7bmFtZSx2YWx1ZSxmaWxlc309ZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmKG5hbWU9PT0nbWVkaWEnKXtcclxuICAgICAgICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIocHJldj0+KHsuLi5wcmV2LFtuYW1lXTp2YWx1ZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZyxzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3VibWl0RGlzYWJsZWQsc2V0U3VibWl0RGlzYWJsZWRdPXVzZVN0YXRlKHRydWUpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lTG9hZGluZyxzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVkaWEsc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVkaWFQcmV2aWV3LHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtoaWdobGlnaHRlZCxzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PWU9PmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoe25hbWUsZW1haWwscGFzc3dvcmQsYmlvfSkuZXZlcnkoaXRlbT0+Qm9vbGVhbihpdGVtKSlcclxuXHJcbiAgICBpc1VzZXI/c2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpOnNldFN1Ym1pdERpc2FibGVkKHRydWUpXHJcblxyXG4gICAgfSxbdXNlcl0pO1xyXG5cclxuICAgIGNvbnN0IGNoZWNrVXNlcm5hbWU9YXN5bmMoKT0+e1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfWApXHJcblxyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgc2V0RXJyb3JNc2coJ1VzZXJuYW1lIE5vdCBBdmFpbGFibGUnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgdXNlcm5hbWU9PT1cIlwiP3NldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTpjaGVja1VzZXJuYW1lKClcclxuICAgIH0sW3VzZXJuYW1lXSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlck1lc3NhZ2UvPlxyXG5cclxuICAgICAgICA8Rm9ybSBsb2FkaW5nPXtmb3JtTG9hZGluZ30gZXJyPXtlcnJvck1zZyE9PW51bGx9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgIGVycm9yIFxyXG4gICAgICAgIGhlYWRlcj1cIk9vcHNcIiBcclxuICAgICAgICBjb250ZW50PXtlcnJvck1zZ30gXHJcbiAgICAgICAgb25EaXNtaXNzPXsoKT0+c2V0RXJyb3JNc2cobnVsbClcclxuICAgICAgICB9Lz5cclxuXHJcbiAgICAgICAgPFNlZ21lbnQ+XHJcbiAgICAgICAgICAgIDxJbWFnZURyb3BEaXYgXHJcbiAgICAgICAgICAgIG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICBzZXRNZWRpYT17c2V0TWVkaWF9IFxyXG4gICAgICAgICAgICBpbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZScgXHJcbiAgICAgICAgICAgIG5hbWU9J25hbWUnIFxyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJ1c2VyXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRW1haWxcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsJyBcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnIFxyXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWx9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwiZW52ZWxvcGVcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUGFzc3dvcmQnIFxyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgIGljb249e3tcclxuICAgICAgICAgICAgICAgIG5hbWU6XCJleWVcIixcclxuICAgICAgICAgICAgICAgIGNpcmN1bGFyOnRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOnRydWUsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOigpPT5zZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZClcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9e3Nob3dQYXNzd29yZD8ndGV4dCc6XCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZyA9IHt1c2VybmFtZUxvYWRpbmd9XHJcbiAgICAgICAgICAgIGVycj17IXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnICBcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2U9PntcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgaWYocmVnZXhVc2VyTmFtZS50ZXN0KGUudGFyZ2V0LnZhbHVlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249e3VzZXJuYW1lQXZhaWxhYmxlPydjaGVjayc6J2Nsb3NlJ31cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q29tbW9uSW5wdXRzIFxyXG4gICAgICAgICAgICB1c2VyPXt1c2VyfSBcclxuICAgICAgICAgICAgc2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc30gXHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgaWNvbj1cInNpZ251cFwiXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJTaWdudXBcIiBcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxyXG4gICAgICAgICAgICBjb2xvcj1cIm9yYW5nZVwiIFxyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfSBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgIDwvRm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9vdGVyTWVzc2FnZS8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iXSwic291cmNlUm9vdCI6IiJ9