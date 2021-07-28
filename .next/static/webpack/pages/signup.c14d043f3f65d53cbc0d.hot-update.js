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
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIl0sIm5hbWVzIjpbIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsImhhbmRsZUNoYW5nZSIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjdXJzb3IiLCJjdXJyZW50IiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsT0FRTztBQUFBLE1BUEhDLFdBT0csUUFQSEEsV0FPRztBQUFBLE1BTkhDLGNBTUcsUUFOSEEsY0FNRztBQUFBLE1BTEhDLFFBS0csUUFMSEEsUUFLRztBQUFBLE1BSkhDLFlBSUcsUUFKSEEsWUFJRztBQUFBLE1BSEhDLFlBR0csUUFISEEsWUFHRztBQUFBLE1BRkhDLGVBRUcsUUFGSEEsZUFFRztBQUFBLE1BREhDLFFBQ0csUUFESEEsUUFDRztBQUNILFNBQ0EscUVBQ0ksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFTLGVBQVcsTUFBcEI7QUFBcUIsU0FBSyxNQUExQjtBQUEyQixhQUFTLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNBLFNBQUssRUFBRTtBQUFDQyxhQUFPLEVBQUM7QUFBVCxLQURQO0FBRUEsUUFBSSxFQUFDLE1BRkw7QUFHQSxVQUFNLEVBQUMsUUFIUDtBQUlBLFlBQVEsRUFBRUosWUFKVjtBQUtBLFFBQUksRUFBQyxPQUxMO0FBTUEsT0FBRyxFQUFFRCxRQU5MO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQVVJO0FBQ0EsY0FBVSxFQUFFLG9CQUFDTSxDQUFELEVBQUs7QUFDYkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0gsS0FKRDtBQU1BLGVBQVcsRUFBRSxxQkFBQU8sQ0FBQyxFQUFFO0FBQ2hCQSxPQUFDLENBQUNDLGNBQUY7QUFDQVIsb0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQyxLQVREO0FBV0EsVUFBTSxFQUFFLGdCQUFDTyxDQUFELEVBQUs7QUFDVEEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FSLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0EsVUFBTVMsV0FBVyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV0osQ0FBQyxDQUFDSyxZQUFGLENBQWVDLEtBQTFCLENBQXBCO0FBQ0FSLGNBQVEsQ0FBQ0ksV0FBVyxDQUFDLENBQUQsQ0FBWixDQUFSO0FBQ0FMLHFCQUFlLENBQUNVLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQk4sV0FBVyxDQUFDLENBQUQsQ0FBL0IsQ0FBRCxDQUFmO0FBQ0gsS0FqQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW9CS04sWUFBWSxLQUFHLElBQWYsR0FBb0IscUVBRXJCLE1BQUMsc0RBQUQ7QUFBUyxTQUFLLEVBQUVKLFdBQVcsR0FBQyxPQUFELEdBQVMsRUFBcEM7QUFBd0MsZUFBVyxNQUFuRDtBQUFvRCxTQUFLLE1BQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQ0EsUUFBSSxFQUFDLG9CQURMO0FBRUEsU0FBSyxFQUFFO0FBQUNpQixZQUFNLEVBQUM7QUFBUixLQUZQO0FBR0EsV0FBTyxFQUFFO0FBQUEsYUFBSWYsUUFBUSxDQUFDZ0IsT0FBVCxDQUFpQkMsS0FBakIsRUFBSjtBQUFBLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLHlDQUZKLENBRnFCLENBQXBCLEdBZUcscUVBRUosTUFBQyxzREFBRDtBQUFTLFNBQUssRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLG9EQUFEO0FBQ0EsT0FBRyxFQUFFZixZQURMO0FBRUEsUUFBSSxFQUFDLFFBRkw7QUFHQSxZQUFRLE1BSFI7QUFHUyxTQUFLLEVBQUU7QUFBQ2EsWUFBTSxFQUFDO0FBQVIsS0FIaEI7QUFJQSxXQUFPLEVBQUU7QUFBQSxhQUFJZixRQUFRLENBQUNnQixPQUFULENBQWlCQyxLQUFqQixFQUFKO0FBQUEsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FGSSxDQW5DUixDQVZKLENBREosQ0FESixDQURBO0FBcUVIOztLQTlFUXBCLFk7QUFnRlQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmMxNGQwNDNmM2Y2NWQ1M2NiYzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sU2VnbWVudCxJbWFnZSxJY29uLEhlYWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG4gICAgaGlnaGxpZ2h0ZWQsXHJcbiAgICBzZXRIaWdobGlnaHRlZCxcclxuICAgIGlucHV0UmVmLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgbWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFcclxuICAgIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9cIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCIgXHJcbiAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3PT09bnVsbD88PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZD8nZ3JlZW4nOicnfSBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aW5wdXRSZWYuY3VycmVudC5jbGljaygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJncmVlblwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e21lZGlhUHJldmlld30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJtZWRpdW1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyZWQgc3R5bGU9e3tjdXJzb3I6XCJwb2ludGVyXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PmlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWdtZW50PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICA8Lz5cclxuICAgIFxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZURyb3BEaXZcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==