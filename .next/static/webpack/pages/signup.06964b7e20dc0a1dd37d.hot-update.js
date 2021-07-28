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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
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
      setMediaPreview(URL.createObjectURL(files[0]));
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
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: function onDismiss() {
      return setErrorMsg(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
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
      lineNumber: 89,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Input, {
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
      lineNumber: 98,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Input, {
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
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Input, {
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
      lineNumber: 123,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Form.Input, {
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
      lineNumber: 141,
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
      lineNumber: 160,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiYmlvIiwiZmFjZWJvb2siLCJ5b3V0dWJlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInVzZXIiLCJzZXRVc2VyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiLCJzZXRNZWRpYSIsInNldE1lZGlhUHJldmlldyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInByZXYiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlcm5hbWVMb2FkaW5nIiwic2V0VXNlcm5hbWVMb2FkaW5nIiwidXNlcm5hbWVBdmFpbGFibGUiLCJzZXRVc2VybmFtZUF2YWlsYWJsZSIsIm1lZGlhIiwibWVkaWFQcmV2aWV3IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1c2VFZmZlY3QiLCJpc1VzZXIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJldmVyeSIsIml0ZW0iLCJCb29sZWFuIiwiY2hlY2tVc2VybmFtZSIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHLHVDQUF0Qjs7QUFHQSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQUEsa0JBRVNDLCtDQUFRLENBQUM7QUFDNUJDLFFBQUksRUFBQyxFQUR1QjtBQUU1QkMsU0FBSyxFQUFDLEVBRnNCO0FBRzVCQyxZQUFRLEVBQUMsRUFIbUI7QUFJNUJDLE9BQUcsRUFBQyxFQUp3QjtBQUs1QkMsWUFBUSxFQUFDLEVBTG1CO0FBTTVCQyxXQUFPLEVBQUMsRUFOb0I7QUFPNUJDLFdBQU8sRUFBQyxFQVBvQjtBQVE1QkMsYUFBUyxFQUFDO0FBUmtCLEdBQUQsQ0FGakI7QUFBQSxNQUVQQyxJQUZPO0FBQUEsTUFFRkMsT0FGRTs7QUFBQSxNQWFQVCxJQWJPLEdBYWtCUSxJQWJsQixDQWFQUixJQWJPO0FBQUEsTUFhRkMsS0FiRSxHQWFrQk8sSUFibEIsQ0FhRlAsS0FiRTtBQUFBLE1BYUlDLFFBYkosR0Fha0JNLElBYmxCLENBYUlOLFFBYko7QUFBQSxNQWFhQyxHQWJiLEdBYWtCSyxJQWJsQixDQWFhTCxHQWJiOztBQWVkLE1BQU1PLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUNDLENBQUQsRUFBSztBQUFBLG9CQUNLQSxDQUFDLENBQUNDLE1BRFA7QUFBQSxRQUNiWixJQURhLGFBQ2JBLElBRGE7QUFBQSxRQUNSYSxLQURRLGFBQ1JBLEtBRFE7QUFBQSxRQUNGQyxLQURFLGFBQ0ZBLEtBREU7O0FBR3BCLFFBQUdkLElBQUksS0FBRyxPQUFWLEVBQWtCO0FBQ2RlLGNBQVEsQ0FBQ0QsS0FBSyxDQUFDLENBQUQsQ0FBTixDQUFSO0FBQ0FFLHFCQUFlLENBQUNDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQkosS0FBSyxDQUFDLENBQUQsQ0FBekIsQ0FBRCxDQUFmO0FBQ0g7O0FBRURMLFdBQU8sQ0FBQyxVQUFBVSxJQUFJO0FBQUEsNkNBQU9BLElBQVAsa0pBQWFuQixJQUFiLEVBQW1CYSxLQUFuQjtBQUFBLEtBQUwsQ0FBUDtBQUNILEdBVEQ7O0FBZmMsbUJBMEIrQmQsK0NBQVEsQ0FBQyxLQUFELENBMUJ2QztBQUFBLE1BMEJQcUIsZUExQk87QUFBQSxNQTBCU0Msa0JBMUJUOztBQUFBLG1CQTJCeUJ0QiwrQ0FBUSxDQUFDLEtBQUQsQ0EzQmpDO0FBQUEsTUEyQlB1QixZQTNCTztBQUFBLE1BMkJNQyxlQTNCTjs7QUFBQSxtQkE0QmlCeEIsK0NBQVEsQ0FBQyxJQUFELENBNUJ6QjtBQUFBLE1BNEJQeUIsUUE1Qk87QUFBQSxNQTRCRUMsV0E1QkY7O0FBQUEsbUJBNkJ1QjFCLCtDQUFRLENBQUMsS0FBRCxDQTdCL0I7QUFBQSxNQTZCUDJCLFdBN0JPO0FBQUEsTUE2QktDLGNBN0JMOztBQUFBLG1CQThCMkI1QiwrQ0FBUSxDQUFDLElBQUQsQ0E5Qm5DO0FBQUEsTUE4QlA2QixjQTlCTztBQUFBLE1BOEJRQyxpQkE5QlI7O0FBQUEsbUJBa0NpQjlCLCtDQUFRLENBQUMsRUFBRCxDQWxDekI7QUFBQSxNQWtDUCtCLFFBbENPO0FBQUEsTUFrQ0VDLFdBbENGOztBQUFBLG1CQW1DK0JoQywrQ0FBUSxDQUFDLEtBQUQsQ0FuQ3ZDO0FBQUEsTUFtQ1BpQyxlQW5DTztBQUFBLE1BbUNTQyxrQkFuQ1Q7O0FBQUEsbUJBb0NtQ2xDLCtDQUFRLENBQUMsS0FBRCxDQXBDM0M7QUFBQSxNQW9DUG1DLGlCQXBDTztBQUFBLE1Bb0NXQyxvQkFwQ1g7O0FBQUEsb0JBc0NXcEMsK0NBQVEsQ0FBQyxJQUFELENBdENuQjtBQUFBLE1Bc0NQcUMsS0F0Q087QUFBQSxNQXNDRHJCLFFBdENDOztBQUFBLG9CQXVDeUJoQiwrQ0FBUSxDQUFDLElBQUQsQ0F2Q2pDO0FBQUEsTUF1Q1BzQyxZQXZDTztBQUFBLE1BdUNNckIsZUF2Q047O0FBQUEsb0JBd0N1QmpCLCtDQUFRLENBQUMsS0FBRCxDQXhDL0I7QUFBQSxNQXdDUHVDLFdBeENPO0FBQUEsTUF3Q0tDLGNBeENMOztBQTBDZCxNQUFNQyxRQUFRLEdBQUdDLDZDQUFNLEVBQXZCOztBQUdBLE1BQU1DLFlBQVksR0FBQyxTQUFiQSxZQUFhLENBQUEvQixDQUFDO0FBQUEsV0FBRUEsQ0FBQyxDQUFDZ0MsY0FBRixFQUFGO0FBQUEsR0FBcEI7O0FBRUFDLGtEQUFTLENBQUMsWUFBSTtBQUNkLFFBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQy9DLFVBQUksRUFBSkEsSUFBRDtBQUFNQyxXQUFLLEVBQUxBLEtBQU47QUFBWUMsY0FBUSxFQUFSQSxRQUFaO0FBQXFCQyxTQUFHLEVBQUhBO0FBQXJCLEtBQWQsRUFBeUM2QyxLQUF6QyxDQUErQyxVQUFBQyxJQUFJO0FBQUEsYUFBRUMsT0FBTyxDQUFDRCxJQUFELENBQVQ7QUFBQSxLQUFuRCxDQUFmO0FBRUFKLFVBQU0sR0FBQ2hCLGlCQUFpQixDQUFDLEtBQUQsQ0FBbEIsR0FBMEJBLGlCQUFpQixDQUFDLElBQUQsQ0FBakQ7QUFFQyxHQUxRLEVBS1AsQ0FBQ3JCLElBQUQsQ0FMTyxDQUFUO0FBT0FvQyxrREFBUyxDQUFDLFlBQUk7QUFDVmQsWUFBUSxLQUFHLEVBQVgsR0FBY0ssb0JBQW9CLENBQUMsS0FBRCxDQUFsQyxHQUEwQ2dCLGFBQWEsRUFBdkQ7QUFDSCxHQUZRLEVBRVAsQ0FBQ3JCLFFBQUQsQ0FGTyxDQUFUO0FBU0EsU0FDSSxxRUFDSSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUdBLE1BQUMsbURBQUQ7QUFBTSxXQUFPLEVBQUVKLFdBQWY7QUFBNEIsT0FBRyxFQUFFRixRQUFRLEtBQUcsSUFBNUM7QUFBa0QsWUFBUSxFQUFFa0IsWUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBLE1BQUMsc0RBQUQ7QUFDQSxTQUFLLE1BREw7QUFFQSxVQUFNLEVBQUMsTUFGUDtBQUdBLFdBQU8sRUFBRWxCLFFBSFQ7QUFJQSxhQUFTLEVBQUU7QUFBQSxhQUFJQyxXQUFXLENBQUMsSUFBRCxDQUFmO0FBQUEsS0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFTQSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9FQUFEO0FBQ0EsZ0JBQVksRUFBRVksWUFEZDtBQUVBLG1CQUFlLEVBQUVyQixlQUZqQjtBQUdBLFlBQVEsRUFBRUQsUUFIVjtBQUlBLFlBQVEsRUFBRXlCLFFBSlY7QUFLQSxlQUFXLEVBQUVGLFdBTGI7QUFNQSxrQkFBYyxFQUFFQyxjQU5oQjtBQU9BLGdCQUFZLEVBQUU3QixZQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVVJLE1BQUMseURBQUQ7QUFDQSxZQUFRLE1BRFI7QUFFQSxTQUFLLEVBQUMsTUFGTjtBQUdBLGVBQVcsRUFBQyxNQUhaO0FBSUEsUUFBSSxFQUFDLE1BSkw7QUFLQSxTQUFLLEVBQUVWLElBTFA7QUFNQSxZQUFRLEVBQUVVLFlBTlY7QUFPQSxTQUFLLE1BUEw7QUFPTSxRQUFJLEVBQUMsTUFQWDtBQVFBLGdCQUFZLEVBQUMsTUFSYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkosRUFzQkksTUFBQyx5REFBRDtBQUNBLFlBQVEsTUFEUjtBQUVBLFNBQUssRUFBQyxPQUZOO0FBR0EsZUFBVyxFQUFDLE9BSFo7QUFJQSxRQUFJLEVBQUMsT0FKTDtBQUtBLFNBQUssRUFBRVQsS0FMUDtBQU1BLFlBQVEsRUFBRVMsWUFOVjtBQU9BLFNBQUssTUFQTDtBQU9NLFFBQUksRUFBQyxVQVBYO0FBUUEsZ0JBQVksRUFBQyxNQVJiO0FBU0EsUUFBSSxFQUFDLE9BVEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCSixFQW1DSSxNQUFDLHlEQUFEO0FBQ0EsU0FBSyxFQUFDLFVBRE47QUFFQSxlQUFXLEVBQUMsVUFGWjtBQUdBLFFBQUksRUFBQyxVQUhMO0FBSUEsU0FBSyxFQUFFUixRQUpQO0FBS0EsWUFBUSxFQUFFUSxZQUxWO0FBTUEsU0FBSyxNQU5MO0FBT0EsUUFBSSxFQUFFO0FBQ0ZWLFVBQUksRUFBQyxLQURIO0FBRUZvRCxjQUFRLEVBQUMsSUFGUDtBQUdGQyxVQUFJLEVBQUMsSUFISDtBQUlGQyxhQUFPLEVBQUM7QUFBQSxlQUFJL0IsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBbkI7QUFBQTtBQUpOLEtBUE47QUFhQSxnQkFBWSxFQUFDLE1BYmI7QUFjQSxRQUFJLEVBQUVBLFlBQVksR0FBQyxNQUFELEdBQVEsVUFkMUI7QUFlQSxZQUFRLE1BZlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5DSixFQXFESSxNQUFDLHlEQUFEO0FBQ0EsV0FBTyxFQUFJVSxlQURYO0FBRUEsT0FBRyxFQUFFLENBQUNFLGlCQUZOO0FBR0EsWUFBUSxNQUhSO0FBSUEsU0FBSyxFQUFDLFVBSk47QUFLQSxlQUFXLEVBQUMsVUFMWjtBQU1BLFNBQUssRUFBRUosUUFOUDtBQU9BLFlBQVEsRUFBRSxrQkFBQW5CLENBQUMsRUFBRTtBQUNUb0IsaUJBQVcsQ0FBQ3BCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7O0FBQ0EsVUFBR2hCLGFBQWEsQ0FBQzBELElBQWQsQ0FBbUI1QyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBNUIsQ0FBSCxFQUFzQztBQUNsQ3NCLDRCQUFvQixDQUFDLElBQUQsQ0FBcEI7QUFDSCxPQUZELE1BRUs7QUFDREEsNEJBQW9CLENBQUMsS0FBRCxDQUFwQjtBQUNIO0FBQ0osS0FkRDtBQWVBLFNBQUssTUFmTDtBQWVNLFFBQUksRUFBRUQsaUJBQWlCLEdBQUMsT0FBRCxHQUFTLE9BZnRDO0FBZ0JBLGdCQUFZLEVBQUMsTUFoQmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJESixFQXdFSSxNQUFDLG9FQUFEO0FBQ0EsUUFBSSxFQUFFMUIsSUFETjtBQUVBLG1CQUFlLEVBQUVZLGVBRmpCO0FBR0Esc0JBQWtCLEVBQUVDLGtCQUhwQjtBQUlBLGdCQUFZLEVBQUVYLFlBSmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhFSixFQStFSSxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvRUosRUFnRkksTUFBQyxxREFBRDtBQUNBLFFBQUksRUFBQyxRQURMO0FBRUEsV0FBTyxFQUFDLFFBRlI7QUFHQSxRQUFJLEVBQUMsUUFITDtBQUlBLFNBQUssRUFBQyxRQUpOO0FBS0EsWUFBUSxFQUFFa0IsY0FBYyxJQUFJLENBQUNNLGlCQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaEZKLENBVEEsQ0FIQSxFQXdHSSxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF4R0osQ0FESjtBQTRHSDs7R0EzS1FwQyxNOztLQUFBQSxNO0FBNktULCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4wNjk2NGI3ZTIwZGMwYTFkZDM3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZSx1c2VFZmZlY3QsdXNlUmVmfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHtIZWFkZXJNZXNzYWdlLEZvb3Rlck1lc3NhZ2V9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZVwiO1xyXG5pbXBvcnQgQ29tbW9uSW5wdXRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbW9uL0NvbW1vbklucHV0cyc7XHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGJhc2VVcmwgZnJvbSAnLi4vdXRpbHMvYmFzZVVybCc7XHJcblxyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5cclxuZnVuY3Rpb24gU2lnbnVwKCkge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6XCJcIiwgICAgXHJcbiAgICAgICAgZW1haWw6XCJcIixcclxuICAgICAgICBwYXNzd29yZDpcIlwiLFxyXG4gICAgICAgIGJpbzpcIlwiLFxyXG4gICAgICAgIGZhY2Vib29rOlwiXCIsXHJcbiAgICAgICAgeW91dHViZTpcIlwiLFxyXG4gICAgICAgIHR3aXR0ZXI6XCJcIixcclxuICAgICAgICBpbnN0YWdyYW06XCJcIlxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qge25hbWUsZW1haWwscGFzc3dvcmQsYmlvfT11c2VyO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZT0oZSk9PntcclxuICAgICAgICBjb25zdCB7bmFtZSx2YWx1ZSxmaWxlc309ZS50YXJnZXQ7XHJcblxyXG4gICAgICAgIGlmKG5hbWU9PT0nbWVkaWEnKXtcclxuICAgICAgICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFVzZXIocHJldj0+KHsuLi5wcmV2LFtuYW1lXTp2YWx1ZX0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IFtzaG93U29jaWFsTGlua3Msc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzaG93UGFzc3dvcmQsc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvck1zZyxzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtmb3JtTG9hZGluZyxzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc3VibWl0RGlzYWJsZWQsc2V0U3VibWl0RGlzYWJsZWRdPXVzZVN0YXRlKHRydWUpXHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBbdXNlcm5hbWUsc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lTG9hZGluZyxzZXRVc2VybmFtZUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3VzZXJuYW1lQXZhaWxhYmxlLHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVkaWEsc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbbWVkaWFQcmV2aWV3LHNldE1lZGlhUHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtoaWdobGlnaHRlZCxzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PWU9PmUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoe25hbWUsZW1haWwscGFzc3dvcmQsYmlvfSkuZXZlcnkoaXRlbT0+Qm9vbGVhbihpdGVtKSlcclxuXHJcbiAgICBpc1VzZXI/c2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpOnNldFN1Ym1pdERpc2FibGVkKHRydWUpXHJcblxyXG4gICAgfSxbdXNlcl0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHVzZXJuYW1lPT09XCJcIj9zZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk6Y2hlY2tVc2VybmFtZSgpXHJcbiAgICB9LFt1c2VybmFtZV0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJNZXNzYWdlLz5cclxuXHJcbiAgICAgICAgPEZvcm0gbG9hZGluZz17Zm9ybUxvYWRpbmd9IGVycj17ZXJyb3JNc2chPT1udWxsfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICBcclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBlcnJvciBcclxuICAgICAgICBoZWFkZXI9XCJPb3BzXCIgXHJcbiAgICAgICAgY29udGVudD17ZXJyb3JNc2d9IFxyXG4gICAgICAgIG9uRGlzbWlzcz17KCk9PnNldEVycm9yTXNnKG51bGwpXHJcbiAgICAgICAgfS8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgICA8SW1hZ2VEcm9wRGl2IFxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgIHNldE1lZGlhUHJldmlldz17c2V0TWVkaWFQcmV2aWV3fSBcclxuICAgICAgICAgICAgc2V0TWVkaWE9e3NldE1lZGlhfSBcclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIk5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J05hbWUnIFxyXG4gICAgICAgICAgICBuYW1lPSduYW1lJyBcclxuICAgICAgICAgICAgdmFsdWU9e25hbWV9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPVwidXNlclwiXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0IFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCIgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCcgXHJcbiAgICAgICAgICAgIG5hbWU9J2VtYWlsJyBcclxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfSBcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWQgaWNvbj1cImVudmVsb3BlXCJcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJyBcclxuICAgICAgICAgICAgbmFtZT0ncGFzc3dvcmQnIFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9IFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgICBuYW1lOlwiZXllXCIsXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazp0cnVlLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazooKT0+c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICB0eXBlPXtzaG93UGFzc3dvcmQ/J3RleHQnOlwicGFzc3dvcmRcIn1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxvYWRpbmcgPSB7dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnI9eyF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIiBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAgXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX0gXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlPT57XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmbHVpZCBpY29uPXt1c2VybmFtZUF2YWlsYWJsZT8nY2hlY2snOidjbG9zZSd9XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENvbW1vbklucHV0cyBcclxuICAgICAgICAgICAgdXNlcj17dXNlcn0gXHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfSBcclxuICAgICAgICAgICAgc2V0U2hvd1NvY2lhbExpbmtzPXtzZXRTaG93U29jaWFsTGlua3N9IFxyXG4gICAgICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbi8+XHJcbiAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgIGljb249XCJzaWdudXBcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwiU2lnbnVwXCIgXHJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcclxuICAgICAgICAgICAgY29sb3I9XCJvcmFuZ2VcIiBcclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX0gXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICA8L0Zvcm0+XHJcblxyXG5cclxuICAgICAgICAgICAgPEZvb3Rlck1lc3NhZ2UvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWdudXBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==