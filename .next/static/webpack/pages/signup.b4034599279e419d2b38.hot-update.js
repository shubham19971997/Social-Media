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
      var droppedFile = Array.from(e.dataTra);
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
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 29
    }
  }), "Drag n Drop or Click to Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYSIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxPQVFPO0FBQUEsTUFQSEMsV0FPRyxRQVBIQSxXQU9HO0FBQUEsTUFOSEMsY0FNRyxRQU5IQSxjQU1HO0FBQUEsTUFMSEMsUUFLRyxRQUxIQSxRQUtHO0FBQUEsTUFKSEMsWUFJRyxRQUpIQSxZQUlHO0FBQUEsTUFISEMsWUFHRyxRQUhIQSxZQUdHO0FBQUEsTUFGSEMsZUFFRyxRQUZIQSxlQUVHO0FBQUEsTUFESEMsUUFDRyxRQURIQSxRQUNHO0FBQ0gsU0FDQSxxRUFDSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQVMsZUFBVyxNQUFwQjtBQUFxQixTQUFLLE1BQTFCO0FBQTJCLGFBQVMsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsU0FBSyxFQUFFO0FBQUNDLGFBQU8sRUFBQztBQUFULEtBRFA7QUFFQSxRQUFJLEVBQUMsTUFGTDtBQUdBLFVBQU0sRUFBQyxRQUhQO0FBSUEsWUFBUSxFQUFFSixZQUpWO0FBS0EsUUFBSSxFQUFDLE9BTEw7QUFNQSxPQUFHLEVBQUVELFFBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBVUk7QUFDQSxjQUFVLEVBQUUsb0JBQUNNLENBQUQsRUFBSztBQUNiQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDSCxLQUpEO0FBTUEsZUFBVyxFQUFFLHFCQUFBTyxDQUFDLEVBQUU7QUFDaEJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixvQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNDLEtBVEQ7QUFXQSxVQUFNLEVBQUUsZ0JBQUNPLENBQUQsRUFBSztBQUNUQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQSxVQUFNUyxXQUFXLEdBQUdDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixDQUFDLENBQUNLLE9BQWIsQ0FBcEI7QUFDSCxLQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FrQktULFlBQVksS0FBRyxJQUFmLEdBQW9CLHFFQUVyQixNQUFDLHNEQUFEO0FBQVMsU0FBSyxFQUFFSixXQUFXLEdBQUMsT0FBRCxHQUFTLEVBQXBDO0FBQXdDLGVBQVcsTUFBbkQ7QUFBb0QsU0FBSyxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUNBLFFBQUksRUFBQyxvQkFETDtBQUVBLFNBQUssRUFBRTtBQUFDYyxZQUFNLEVBQUM7QUFBUixLQUZQO0FBR0EsV0FBTyxFQUFFO0FBQUEsYUFBSVosUUFBUSxDQUFDYSxPQUFULENBQWlCQyxLQUFqQixFQUFKO0FBQUEsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREoseUNBRkosQ0FGcUIsQ0FBcEIsR0FlRyxxRUFFSixNQUFDLHNEQUFEO0FBQVMsU0FBSyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsb0RBQUQ7QUFDQSxPQUFHLEVBQUVaLFlBREw7QUFFQSxRQUFJLEVBQUMsUUFGTDtBQUdBLFlBQVEsTUFIUjtBQUdTLFNBQUssRUFBRTtBQUFDVSxZQUFNLEVBQUM7QUFBUixLQUhoQjtBQUlBLFdBQU8sRUFBRTtBQUFBLGFBQUlaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkMsS0FBakIsRUFBSjtBQUFBLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRkksQ0FqQ1IsQ0FWSixDQURKLENBREosQ0FEQTtBQW1FSDs7S0E1RVFqQixZO0FBOEVULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5iNDAzNDU5OTI3OWU0MTlkMmIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLFNlZ21lbnQsSW1hZ2UsSWNvbixIZWFkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHtcclxuICAgIGhpZ2hsaWdodGVkLFxyXG4gICAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgICBpbnB1dFJlZixcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIG1lZGlhUHJldmlldyxcclxuICAgIHNldE1lZGlhUHJldmlldyxcclxuICAgIHNldE1lZGlhXHJcbiAgICB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiIFxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2U9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmEpXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge21lZGlhUHJldmlldz09PW51bGw/PD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8U2VnbWVudCBjb2xvcj17aGlnaGxpZ2h0ZWQ/J2dyZWVuJzonJ30gcGxhY2Vob2xkZXIgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlsZSBpbWFnZSBvdXRsaW5lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2N1cnNvcjpcInBvaW50ZXJcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRHJhZyBuIERyb3Agb3IgQ2xpY2sgdG8gVXBsb2FkIEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvPjo8PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPVwiZ3JlZW5cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5pbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=