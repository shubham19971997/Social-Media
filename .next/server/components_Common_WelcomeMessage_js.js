exports.id = "components_Common_WelcomeMessage_js";
exports.ids = ["components_Common_WelcomeMessage_js"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: true,
    color: "teal",
    header: signupRoute ? 'Get Started' : 'Welcome Back',
    icon: signupRoute ? 'settings' : 'privacy',
    content: signupRoute ? "Create New Account" : "Login with Email and Password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === "/signup";
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), "Existing User", "", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "Login Here Instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Forgot Password")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }), "New User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 31
    }
  }, "Signup Here"), " Instead", "")));
};

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXGFcXE9uZURyaXZlXFxEZXNrdG9wXFxTb2NpYWwgTWVkaWFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLE1BQU9BLGFBQWEsR0FBQyxNQUFJO0FBQzVCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFrQixTQUF0QztBQUVBLFNBQ0ksTUFBQyxzREFBRDtBQUFTLFlBQVEsTUFBakI7QUFDQSxTQUFLLEVBQUMsTUFETjtBQUVBLFVBQU0sRUFBRUQsV0FBVyxHQUFDLGFBQUQsR0FBZSxjQUZsQztBQUdBLFFBQUksRUFBRUEsV0FBVyxHQUFDLFVBQUQsR0FBWSxTQUg3QjtBQUlBLFdBQU8sRUFBRUEsV0FBVyxHQUFDLG9CQUFELEdBQXNCLCtCQUoxQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREo7QUFPSCxDQVhNO0FBYUEsTUFBTUUsYUFBYSxHQUFDLE1BQUk7QUFFM0IsUUFBTUosTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQWtCLFNBQXRDO0FBRUEsU0FDSSxxRUFDS0QsV0FBVyxHQUFDLHFFQUVULE1BQUMsc0RBQUQ7QUFBUyxZQUFRLEVBQUMsUUFBbEI7QUFBMkIsV0FBTyxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixtQkFFa0IsRUFGbEIsRUFHSSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFISixDQUZTLEVBU1QsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVFMsQ0FBRCxHQVVSLHFFQUVBLE1BQUMsc0RBQUQ7QUFBUyxZQUFRLEVBQUMsUUFBbEI7QUFBMkIsUUFBSSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLENBRkEsRUFPQSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLGdCQUVjLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZkLGNBRThELEVBRjlELENBUEEsQ0FYUixDQURKO0FBNEJILENBakNNLEM7Ozs7Ozs7Ozs7QUNqQlAsZSIsImZpbGUiOiJjb21wb25lbnRzX0NvbW1vbl9XZWxjb21lTWVzc2FnZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SWNvbixNZXNzYWdlLERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBIZWFkZXJNZXNzYWdlPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lPT09XCIvc2lnbnVwXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZCBcclxuICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgIGhlYWRlcj17c2lnbnVwUm91dGU/J0dldCBTdGFydGVkJzonV2VsY29tZSBCYWNrJ30gXHJcbiAgICAgICAgaWNvbj17c2lnbnVwUm91dGU/J3NldHRpbmdzJzoncHJpdmFjeSd9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3NpZ251cFJvdXRlP1wiQ3JlYXRlIE5ldyBBY2NvdW50XCI6XCJMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZFwifS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlPSgpPT57XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2lnbnVwUm91dGU/PD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhpc3RpbmcgVXNlcntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gSGVyZSBJbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgaW5mbz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+Rm9yZ290IFBhc3N3b3JkPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ldyBVc2VyPyA8TGluayBocmVmPVwiL3NpZ251cFwiPlNpZ251cCBIZXJlPC9MaW5rPiBJbnN0ZWFke1wiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XHJcblxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==