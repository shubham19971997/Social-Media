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
              return axios__WEBPACK_IMPORTED_MODULE_7___default().get("".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_8__.default, "/api/signup/").concat(username));

            case 3:
              res = _context.sent;

              if (res.data === 'Available') {
                setUsernameAvailable(true);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              setErrorMsg('Username Not Available');

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
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
      lineNumber: 92,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
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
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
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
      lineNumber: 104,
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
      lineNumber: 113,
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
      lineNumber: 125,
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
      lineNumber: 138,
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
      lineNumber: 156,
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
      lineNumber: 175,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
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
      lineNumber: 183,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_4__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInNldE1lZGlhUHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2hlY2tVc2VybmFtZSIsImF4aW9zIiwiYmFzZVVybCIsInJlcyIsImRhdGEiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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NEJBQW9CLENBQUMsSUFBRCxDQUFwQjtBQUNILE9BRkQsTUFFSztBQUNEQSw0QkFBb0IsQ0FBQyxLQUFELENBQXBCO0FBQ0g7QUFDSixLQWREO0FBZUEsU0FBSyxNQWZMO0FBZU0sUUFBSSxFQUFFRCxpQkFBaUIsR0FBQyxPQUFELEdBQVMsT0FmdEM7QUFnQkEsZ0JBQVksRUFBQyxNQWhCYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckRKLEVBd0VJLE1BQUMsb0VBQUQ7QUFDQSxRQUFJLEVBQUUxQixJQUROO0FBRUEsbUJBQWUsRUFBRVksZUFGakI7QUFHQSxzQkFBa0IsRUFBRUMsa0JBSHBCO0FBSUEsZ0JBQVksRUFBRVgsWUFKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBeEVKLEVBK0VJLE1BQUMsc0RBQUQ7QUFBUyxVQUFNLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQS9FSixFQWdGSSxNQUFDLHFEQUFEO0FBQ0EsUUFBSSxFQUFDLFFBREw7QUFFQSxXQUFPLEVBQUMsUUFGUjtBQUdBLFFBQUksRUFBQyxRQUhMO0FBSUEsU0FBSyxFQUFDLFFBSk47QUFLQSxZQUFRLEVBQUVrQixjQUFjLElBQUksQ0FBQ00saUJBTDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoRkosQ0FUQSxDQUhBLEVBd0dJLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhHSixDQURKO0FBNEdIOztHQTFMUXBDLE07O0tBQUFBLE07QUE0TFQsK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmI1ODMzYWZiNGVlYWFkMGY1MjA5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse3VzZVN0YXRlLHVzZUVmZmVjdCx1c2VSZWZ9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLEJ1dHRvbixNZXNzYWdlLFNlZ21lbnQsVGV4dEFyZWEsRGl2aWRlcix9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQge0hlYWRlck1lc3NhZ2UsRm9vdGVyTWVzc2FnZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlXCI7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzJztcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tICcuLi91dGlscy9iYXNlVXJsJztcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kLztcclxuXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTpcIlwiLCAgICBcclxuICAgICAgICBlbWFpbDpcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOlwiXCIsXHJcbiAgICAgICAgYmlvOlwiXCIsXHJcbiAgICAgICAgZmFjZWJvb2s6XCJcIixcclxuICAgICAgICB5b3V0dWJlOlwiXCIsXHJcbiAgICAgICAgdHdpdHRlcjpcIlwiLFxyXG4gICAgICAgIGluc3RhZ3JhbTpcIlwiXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99PXVzZXI7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlPShlKT0+e1xyXG4gICAgICAgIGNvbnN0IHtuYW1lLHZhbHVlLGZpbGVzfT1lLnRhcmdldDtcclxuXHJcbiAgICAgICAgaWYobmFtZT09PSdtZWRpYScpe1xyXG4gICAgICAgICAgICBzZXRNZWRpYShmaWxlc1swXSlcclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VXNlcihwcmV2PT4oey4uLnByZXYsW25hbWVdOnZhbHVlfSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcyxzZXRTaG93U29jaWFsTGlua3NdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCxzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yTXNnLHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2Zvcm1Mb2FkaW5nLHNldEZvcm1Mb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdWJtaXREaXNhYmxlZCxzZXRTdWJtaXREaXNhYmxlZF09dXNlU3RhdGUodHJ1ZSlcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IFt1c2VybmFtZSxzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVMb2FkaW5nLHNldFVzZXJuYW1lTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsc2V0VXNlcm5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFttZWRpYSxzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFttZWRpYVByZXZpZXcsc2V0TWVkaWFQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2hpZ2hsaWdodGVkLHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9ZT0+ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgaXNVc2VyID0gT2JqZWN0LnZhbHVlcyh7bmFtZSxlbWFpbCxwYXNzd29yZCxiaW99KS5ldmVyeShpdGVtPT5Cb29sZWFuKGl0ZW0pKVxyXG5cclxuICAgIGlzVXNlcj9zZXRTdWJtaXREaXNhYmxlZChmYWxzZSk6c2V0U3VibWl0RGlzYWJsZWQodHJ1ZSlcclxuXHJcbiAgICB9LFt1c2VyXSk7XHJcblxyXG4gICAgY29uc3QgY2hlY2tVc2VybmFtZT1hc3luYygpPT57XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zaWdudXAvJHt1c2VybmFtZX1gKVxyXG4gICAgICAgICAgICBpZihyZXMuZGF0YT09PSdBdmFpbGFibGUnKXtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBzZXRFcnJvck1zZygnVXNlcm5hbWUgTm90IEF2YWlsYWJsZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICB1c2VybmFtZT09PVwiXCI/c2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpOmNoZWNrVXNlcm5hbWUoKVxyXG4gICAgfSxbdXNlcm5hbWVdKVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyTWVzc2FnZS8+XHJcblxyXG4gICAgICAgIDxGb3JtIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfSBlcnI9e2Vycm9yTXNnIT09bnVsbH0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPE1lc3NhZ2UgXHJcbiAgICAgICAgZXJyb3IgXHJcbiAgICAgICAgaGVhZGVyPVwiT29wc1wiIFxyXG4gICAgICAgIGNvbnRlbnQ9e2Vycm9yTXNnfSBcclxuICAgICAgICBvbkRpc21pc3M9eygpPT5zZXRFcnJvck1zZyhudWxsKVxyXG4gICAgICAgIH0vPlxyXG5cclxuICAgICAgICA8U2VnbWVudD5cclxuICAgICAgICAgICAgPEltYWdlRHJvcERpdiBcclxuICAgICAgICAgICAgbWVkaWFQcmV2aWV3PXttZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICBzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX0gXHJcbiAgICAgICAgICAgIGlucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2hpZ2hsaWdodGVkfVxyXG4gICAgICAgICAgICBzZXRIaWdobGlnaHRlZD17c2V0SGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJyBcclxuICAgICAgICAgICAgbmFtZT0nbmFtZScgXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cInVzZXJcIlxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwnIFxyXG4gICAgICAgICAgICBuYW1lPSdlbWFpbCcgXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIGZsdWlkIGljb249XCJlbnZlbG9wZVwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQYXNzd29yZCcgXHJcbiAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17e1xyXG4gICAgICAgICAgICAgICAgbmFtZTpcImV5ZVwiLFxyXG4gICAgICAgICAgICAgICAgY2lyY3VsYXI6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6dHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6KCk9PnNldFNob3dQYXNzd29yZCghc2hvd1Bhc3N3b3JkKVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkPyd0ZXh0JzpcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICBsb2FkaW5nID0ge3VzZXJuYW1lTG9hZGluZ31cclxuICAgICAgICAgICAgZXJyPXshdXNlcm5hbWVBdmFpbGFibGV9IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgIFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17ZT0+e1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICBpZihyZWdleFVzZXJOYW1lLnRlc3QoZS50YXJnZXQudmFsdWUpKXtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VybmFtZUF2YWlsYWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj17dXNlcm5hbWVBdmFpbGFibGU/J2NoZWNrJzonY2xvc2UnfVxyXG4gICAgICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCJcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxDb21tb25JbnB1dHMgXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9IFxyXG4gICAgICAgICAgICBzaG93U29jaWFsTGlua3M9e3Nob3dTb2NpYWxMaW5rc30gXHJcbiAgICAgICAgICAgIHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciBoaWRkZW4vPlxyXG4gICAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICBpY29uPVwic2lnbnVwXCJcclxuICAgICAgICAgICAgY29udGVudD1cIlNpZ251cFwiIFxyXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXHJcbiAgICAgICAgICAgIGNvbG9yPVwib3JhbmdlXCIgXHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZCB8fCAhdXNlcm5hbWVBdmFpbGFibGV9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb290ZXJNZXNzYWdlLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=