self["webpackHotUpdate_N_E"]("pages/signup",{

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv(_ref) {
  var highlighted = _ref.highlighted,
      setHighlighted = _ref.setHighlighted,
      inputRef = _ref.inputRef,
      handleChange = _ref.handleChange,
      mediaPreview = _ref.mediaPreview,
      setMediaPreview = _ref.setMediaPreview,
      setMedia = _ref.setMedia;
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("input", {
    style: {
      display: "none"
    },
    type: "file",
    accept: "image/",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx("div", {
    onDragOver: function onDragOver(e) {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: function onDragLeave(e) {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: function onDrop(e) {
      e.preventDefault();
      setHighlighted(true);
      var droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(U);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: highlighted ? 'green' : '',
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }), "Drag n Drop or Click to Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: "pointer"
    },
    onClick: function onClick() {
      return inputRef.current.click();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })))))));
}

_c = ImageDropDiv;
/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

var _c;

$RefreshReg$(_c, "ImageDropDiv");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BUU87QUFBQSxNQVBIQyxXQU9HLFFBUEhBLFdBT0c7QUFBQSxNQU5IQyxjQU1HLFFBTkhBLGNBTUc7QUFBQSxNQUxIQyxRQUtHLFFBTEhBLFFBS0c7QUFBQSxNQUpIQyxZQUlHLFFBSkhBLFlBSUc7QUFBQSxNQUhIQyxZQUdHLFFBSEhBLFlBR0c7QUFBQSxNQUZIQyxlQUVHLFFBRkhBLGVBRUc7QUFBQSxNQURIQyxRQUNHLFFBREhBLFFBQ0c7QUFDSCxTQUNBLHFFQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUyxlQUFXLE1BQXBCO0FBQXFCLFNBQUssTUFBMUI7QUFBMkIsYUFBUyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFDO0FBQVQsS0FEUDtBQUVBLFFBQUksRUFBQyxNQUZMO0FBR0EsVUFBTSxFQUFDLFFBSFA7QUFJQSxZQUFRLEVBQUVKLFlBSlY7QUFLQSxRQUFJLEVBQUMsT0FMTDtBQU1BLE9BQUcsRUFBRUQsUUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFVSTtBQUNBLGNBQVUsRUFBRSxvQkFBQ00sQ0FBRCxFQUFLO0FBQ2JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEtBSkQ7QUFNQSxlQUFXLEVBQUUscUJBQUFPLENBQUMsRUFBRTtBQUNoQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0MsS0FURDtBQVdBLFVBQU0sRUFBRSxnQkFBQ08sQ0FBRCxFQUFLO0FBQ1RBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBLFVBQU1TLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdKLENBQUMsQ0FBQ0ssWUFBRixDQUFlQyxLQUExQixDQUFwQjtBQUNBUixjQUFRLENBQUNJLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBUjtBQUNBTCxxQkFBZSxDQUFDVSxDQUFELENBQWY7QUFDSCxLQWpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBb0JLWCxZQUFZLEtBQUcsSUFBZixHQUFvQixxRUFFckIsTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBRUosV0FBVyxHQUFDLE9BQUQsR0FBUyxFQUFwQztBQUF3QyxlQUFXLE1BQW5EO0FBQW9ELFNBQUssTUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFDQSxRQUFJLEVBQUMsb0JBREw7QUFFQSxTQUFLLEVBQUU7QUFBQ2dCLFlBQU0sRUFBQztBQUFSLEtBRlA7QUFHQSxXQUFPLEVBQUU7QUFBQSxhQUFJZCxRQUFRLENBQUNlLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQUo7QUFBQSxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESix5Q0FGSixDQUZxQixDQUFwQixHQWVHLHFFQUVKLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxvREFBRDtBQUNBLE9BQUcsRUFBRWQsWUFETDtBQUVBLFFBQUksRUFBQyxRQUZMO0FBR0EsWUFBUSxNQUhSO0FBR1MsU0FBSyxFQUFFO0FBQUNZLFlBQU0sRUFBQztBQUFSLEtBSGhCO0FBSUEsV0FBTyxFQUFFO0FBQUEsYUFBSWQsUUFBUSxDQUFDZSxPQUFULENBQWlCQyxLQUFqQixFQUFKO0FBQUEsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FGSSxDQW5DUixDQVZKLENBREosQ0FESixDQURBO0FBcUVIOztLQTlFUW5CLFk7QUFnRlQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjc4Y2EyOWRlNjI4MzkzMzk0OGFhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sU2VnbWVudCxJbWFnZSxJY29uLEhlYWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG4gICAgaGlnaGxpZ2h0ZWQsXHJcbiAgICBzZXRIaWdobGlnaHRlZCxcclxuICAgIGlucHV0UmVmLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgbWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFcclxuICAgIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9cIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCIgXHJcbiAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFUpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21lZGlhUHJldmlldz09PW51bGw/PD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj17aGlnaGxpZ2h0ZWQ/J2dyZWVuJzonJ30gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgdG8gVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPjo8PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5pbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=