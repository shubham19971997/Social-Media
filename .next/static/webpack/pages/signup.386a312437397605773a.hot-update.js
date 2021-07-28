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
      setMediaPreview(URL.c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjIiwiY3Vyc29yIiwiY3VycmVudCIsImNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BUU87QUFBQSxNQVBIQyxXQU9HLFFBUEhBLFdBT0c7QUFBQSxNQU5IQyxjQU1HLFFBTkhBLGNBTUc7QUFBQSxNQUxIQyxRQUtHLFFBTEhBLFFBS0c7QUFBQSxNQUpIQyxZQUlHLFFBSkhBLFlBSUc7QUFBQSxNQUhIQyxZQUdHLFFBSEhBLFlBR0c7QUFBQSxNQUZIQyxlQUVHLFFBRkhBLGVBRUc7QUFBQSxNQURIQyxRQUNHLFFBREhBLFFBQ0c7QUFDSCxTQUNBLHFFQUNJLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUyxlQUFXLE1BQXBCO0FBQXFCLFNBQUssTUFBMUI7QUFBMkIsYUFBUyxNQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDQSxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFDO0FBQVQsS0FEUDtBQUVBLFFBQUksRUFBQyxNQUZMO0FBR0EsVUFBTSxFQUFDLFFBSFA7QUFJQSxZQUFRLEVBQUVKLFlBSlY7QUFLQSxRQUFJLEVBQUMsT0FMTDtBQU1BLE9BQUcsRUFBRUQsUUFOTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFVSTtBQUNBLGNBQVUsRUFBRSxvQkFBQ00sQ0FBRCxFQUFLO0FBQ2JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEtBSkQ7QUFNQSxlQUFXLEVBQUUscUJBQUFPLENBQUMsRUFBRTtBQUNoQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0MsS0FURDtBQVdBLFVBQU0sRUFBRSxnQkFBQ08sQ0FBRCxFQUFLO0FBQ1RBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBUixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBLFVBQU1TLFdBQVcsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdKLENBQUMsQ0FBQ0ssWUFBRixDQUFlQyxLQUExQixDQUFwQjtBQUNBUixjQUFRLENBQUNJLFdBQVcsQ0FBQyxDQUFELENBQVosQ0FBUjtBQUNBTCxxQkFBZSxDQUFDVSxHQUFHLENBQUNDLENBQUwsQ0FBZjtBQUNILEtBakJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FvQktaLFlBQVksS0FBRyxJQUFmLEdBQW9CLHFFQUVyQixNQUFDLHNEQUFEO0FBQVMsU0FBSyxFQUFFSixXQUFXLEdBQUMsT0FBRCxHQUFTLEVBQXBDO0FBQXdDLGVBQVcsTUFBbkQ7QUFBb0QsU0FBSyxNQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUNBLFFBQUksRUFBQyxvQkFETDtBQUVBLFNBQUssRUFBRTtBQUFDaUIsWUFBTSxFQUFDO0FBQVIsS0FGUDtBQUdBLFdBQU8sRUFBRTtBQUFBLGFBQUlmLFFBQVEsQ0FBQ2dCLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQUo7QUFBQSxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESix5Q0FGSixDQUZxQixDQUFwQixHQWVHLHFFQUVKLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxvREFBRDtBQUNBLE9BQUcsRUFBRWYsWUFETDtBQUVBLFFBQUksRUFBQyxRQUZMO0FBR0EsWUFBUSxNQUhSO0FBR1MsU0FBSyxFQUFFO0FBQUNhLFlBQU0sRUFBQztBQUFSLEtBSGhCO0FBSUEsV0FBTyxFQUFFO0FBQUEsYUFBSWYsUUFBUSxDQUFDZ0IsT0FBVCxDQUFpQkMsS0FBakIsRUFBSjtBQUFBLEtBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBRkksQ0FuQ1IsQ0FWSixDQURKLENBREosQ0FEQTtBQXFFSDs7S0E5RVFwQixZO0FBZ0ZULCtEQUFlQSxZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4zODZhMzEyNDM3Mzk3NjA1NzczYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLFNlZ21lbnQsSW1hZ2UsSWNvbixIZWFkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gSW1hZ2VEcm9wRGl2KHtcclxuICAgIGhpZ2hsaWdodGVkLFxyXG4gICAgc2V0SGlnaGxpZ2h0ZWQsXHJcbiAgICBpbnB1dFJlZixcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIG1lZGlhUHJldmlldyxcclxuICAgIHNldE1lZGlhUHJldmlldyxcclxuICAgIHNldE1lZGlhXHJcbiAgICB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgPFNlZ21lbnQgcGxhY2Vob2xkZXIgYmFzaWMgc2Vjb25kYXJ5PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5Olwibm9uZVwifX0gXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiIFxyXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZWRpYVwiIFxyXG4gICAgICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2U9PntcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9uRHJvcD17KGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRyb3BwZWRGaWxlID0gQXJyYXkuZnJvbShlLmRhdGFUcmFuc2Zlci5maWxlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWEoZHJvcHBlZEZpbGVbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuYylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3PT09bnVsbD88PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZD8nZ3JlZW4nOicnfSBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aW5wdXRSZWYuY3VycmVudC5jbGljaygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJncmVlblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==