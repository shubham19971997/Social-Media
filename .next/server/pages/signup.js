(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    twitter,
    youtube
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    t: true,
    ype: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CommonInputs);

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
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
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
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
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }), "Drag n Drop or Click to Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    plaaceholder: true,
    basic: true,
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
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ImageDropDiv);

/***/ }),

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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/uploadPicToCloudinary */ "./utils/uploadPicToCloudinary.js");
var _jsxFileName = "C:\\Users\\a\\OneDrive\\Desktop\\Social Media\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

function Signup() {
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: '',
    bio: '',
    facebook: '',
    youtube: '',
    twitter: '',
    instagram: ''
  });
  const {
    name,
    email,
    password,
    bio
  } = user;

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === 'media') {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  const handleSubmit = async e => {
    e.preventDefault();
    setFormLoading(true);
    let profilePicUrl;

    if (media !== null) {
      profilePicUrl = await (0,_utils_uploadPicToCloudinary__WEBPACK_IMPORTED_MODULE_8__.default)(media);
    }

    if (media !== null && !profilePicUrl) {
      setFormLoading(false);
      return setErrorMsg("Error in uploading image");
    }

    await (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_7__.registerUser)(user, profilePicUrl, setErrorMsg, setFormLoading);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_5___default().CancelToken);
      const res = await axios__WEBPACK_IMPORTED_MODULE_5___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_6__.default}/api/signup/${username}`, {
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });

      if (res.data === 'Available') {
        setUsernameAvailable(true);
        setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
          username
        }));
      }
    } catch (error) {
      setErrorMsg('Username Not Available');
    }

    setUsernameLoading(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    username === '' ? setUsernameAvailable(false) : checkUsername();
  }, [username]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    err: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 141,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 153,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: 'eye',
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? 'text' : 'password',
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    err: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
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
      lineNumber: 184,
      columnNumber: 11
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);





const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }
};

const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set('token', token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const catchErrors = (error, displayError) => {
//   let errorMsg = {};
//   if (error.response) {
//     // If the request was made and the server not responded with a status code in the range of 2xx
//     errorMsg = error.response.data;
//     console.error(errorMsg);
//   } else if (error.request) {
//     // if the request was made and no response was recevied from server
//     errorMsg = error.request;
//     console.error(errorMsg);
//   } else {
//     // if something else happened while making the request
//     errorMsg = error.message;
//     console.error(errorMsg);
//   }
//   displayError(errorMsg);
// };
// export default catchErrors;
const catchErrors = error => {
  let errorMsg = {};

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "./utils/uploadPicToCloudinary.js":
/*!****************************************!*\
  !*** ./utils/uploadPicToCloudinary.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const uploadPic = async media => {
  try {
    const form = new FormData();
    form.append('file', media);
    form.append('upload_preset', 'social_media');
    form.append('cloud_name', 'dbsiaezqv');
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post("https://api.cloudinary.com/v1_1/dbsiaezqv/image/upload", form);
    return res.data.url;
  } catch (error) {
    return;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (uploadPic);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMuanMiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2LmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvQ29tbW9uL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL3NpZ251cC5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL2NhdGNoRXJyb3JzLmpzIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS8uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeS5qcyIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2luZGVyLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vaW5kZXItc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9pbmRlci1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXGFcXE9uZURyaXZlXFxEZXNrdG9wXFxTb2NpYWwgTWVkaWFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb21tb25JbnB1dHMiLCJ1c2VyIiwiYmlvIiwiZmFjZWJvb2siLCJpbnN0YWdyYW0iLCJ0d2l0dGVyIiwieW91dHViZSIsImhhbmRsZUNoYW5nZSIsInNob3dTb2NpYWxMaW5rcyIsInNldFNob3dTb2NpYWxMaW5rcyIsIlRleHRBcmVhIiwiSW1hZ2VEcm9wRGl2IiwiaGlnaGxpZ2h0ZWQiLCJzZXRIaWdobGlnaHRlZCIsImlucHV0UmVmIiwibWVkaWFQcmV2aWV3Iiwic2V0TWVkaWFQcmV2aWV3Iiwic2V0TWVkaWEiLCJkaXNwbGF5IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZHJvcHBlZEZpbGUiLCJBcnJheSIsImZyb20iLCJkYXRhVHJhbnNmZXIiLCJmaWxlcyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsInJlZ2V4VXNlck5hbWUiLCJjYW5jZWwiLCJTaWdudXAiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJoYW5kbGVTdWJtaXQiLCJwcm9maWxlUGljVXJsIiwidXBsb2FkUGljIiwicmVnaXN0ZXJVc2VyIiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNoZWNrVXNlcm5hbWUiLCJDYW5jZWxUb2tlbiIsImF4aW9zIiwicmVzIiwiYmFzZVVybCIsImNhbmNlbFRva2VuIiwiY2FuY2VsZXIiLCJkYXRhIiwiZXJyb3IiLCJjaXJjdWxhciIsImxpbmsiLCJvbkNsaWNrIiwidGVzdCIsInNldEVycm9yIiwic2V0TG9hZGluZyIsInNldFRva2VuIiwiY2F0Y2hFcnJvcnMiLCJsb2dpblVzZXIiLCJ0b2tlbiIsImNvb2tpZSIsIlJvdXRlciIsInJlc3BvbnNlIiwiY29uc29sZSIsInJlcXVlc3QiLCJtZXNzYWdlIiwiZm9ybSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicHJvY2VzcyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUdBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBQ0MsTUFBSSxFQUFDO0FBQUNDLE9BQUQ7QUFBS0MsWUFBTDtBQUFjQyxhQUFkO0FBQXdCQyxXQUF4QjtBQUFnQ0M7QUFBaEMsR0FBTjtBQUErQ0MsY0FBL0M7QUFBNERDLGlCQUE1RDtBQUE0RUM7QUFBNUUsQ0FBdEIsRUFBdUg7QUFDbkgsU0FDSSxxRUFDQSxNQUFDLHlEQUFEO0FBQ0EsWUFBUSxNQURSO0FBRUEsV0FBTyxFQUFFQyx1REFGVDtBQUdBLFFBQUksRUFBQyxLQUhM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UCxFQUFjO0FBQ1o7QUFDSDtBQUVKLENBbEJEOztBQW9CQSwrREFBZWpCLFNBQWYsRTs7Ozs7Ozs7Ozs7QUN0QkEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Rm9ybSxCdXR0b24sTWVzc2FnZSxTZWdtZW50LFRleHRBcmVhLERpdmlkZXIsfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tb25JbnB1dHMoe3VzZXI6e2JpbyxmYWNlYm9vayxpbnN0YWdyYW0sdHdpdHRlcix5b3V0dWJlfSxoYW5kbGVDaGFuZ2Usc2hvd1NvY2lhbExpbmtzLHNldFNob3dTb2NpYWxMaW5rc30pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8Rm9ybS5GaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgY29udHJvbD17VGV4dEFyZWF9IFxyXG4gICAgICAgIG5hbWU9XCJiaW9cIiBcclxuICAgICAgICB2YWx1ZT17YmlvfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImJpb1wiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICBjb250ZW50PVwiQWRkIFNvY2lhbCBMaW5rc1wiIFxyXG4gICAgICAgIGNvbG9yPVwicmVkXCIgXHJcbiAgICAgICAgaWNvbj1cImF0XCIgdFxyXG4gICAgICAgIHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5zZXRTaG93U29jaWFsTGlua3MoIXNob3dTb2NpYWxMaW5rcyl9IFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtzaG93U29jaWFsTGlua3MgJiYgPD5cclxuICAgICAgICA8RGl2aWRlci8+XHJcbiAgICAgICAgPEZvcm0uSW5wdXQgXHJcbiAgICAgICAgaWNvbj1cImZhY2Vib29rIGZcIiBcclxuICAgICAgICBpY29uUG9zaXRpb249XCJsZWZ0XCIgXHJcbiAgICAgICAgbmFtZT1cImZhY2Vib29rXCIgXHJcbiAgICAgICAgdmFsdWU9e2ZhY2Vib29rfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwidHdpdHRlclwiIFxyXG4gICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICBuYW1lPVwidHdpdHRlclwiIFxyXG4gICAgICAgIHZhbHVlPXt0d2l0dGVyfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwiaW5zdGFncmFtXCIgXHJcbiAgICAgICAgaWNvblBvc2l0aW9uPVwibGVmdFwiIFxyXG4gICAgICAgIG5hbWU9XCJpbnN0YWdyYW1cIiBcclxuICAgICAgICB2YWx1ZT17aW5zdGFncmFtfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Rm9ybS5JbnB1dCBcclxuICAgICAgICBpY29uPVwieW91dHViZVwiIFxyXG4gICAgICAgIGljb25Qb3NpdGlvbj1cImxlZnRcIiBcclxuICAgICAgICBuYW1lPVwieW91dHViZVwiIFxyXG4gICAgICAgIHZhbHVlPXt5b3V0dWJlfSBcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8TWVzc2FnZSBcclxuICAgICAgICBpY29uPVwiYXR0ZW50aW9uXCIgXHJcbiAgICAgICAgaW5mbyBcclxuICAgICAgICBzaXplPVwic21hbGxcIiBcclxuICAgICAgICBoZWFkZXI9XCJTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsXCIgXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1vbklucHV0c1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Zvcm0sU2VnbWVudCxJbWFnZSxJY29uLEhlYWRlcn0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG4gICAgaGlnaGxpZ2h0ZWQsXHJcbiAgICBzZXRIaWdobGlnaHRlZCxcclxuICAgIGlucHV0UmVmLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgbWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFQcmV2aWV3LFxyXG4gICAgc2V0TWVkaWFcclxuICAgIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICA8U2VnbWVudCBwbGFjZWhvbGRlciBiYXNpYyBzZWNvbmRhcnk+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCIgXHJcbiAgICAgICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS9cIiBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lZGlhXCIgXHJcbiAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICBzZXRIaWdobGlnaHRlZCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZT0+e1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb25Ecm9wPXsoZSk9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7bWVkaWFQcmV2aWV3PT09bnVsbD88PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWdtZW50IGNvbG9yPXtoaWdobGlnaHRlZD8nZ3JlZW4nOicnfSBwbGFjZWhvbGRlciBiYXNpYz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaWxlIGltYWdlIG91dGxpbmVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+aW5wdXRSZWYuY3VycmVudC5jbGljaygpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEcmFnIG4gRHJvcCBvciBDbGljayB0byBVcGxvYWQgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgY29sb3I9XCJncmVlblwiIHBsYWFjZWhvbGRlciBiYXNpYz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXttZWRpYVByZXZpZXd9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibWVkaXVtXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkIHN0eWxlPXt7Y3Vyc29yOlwicG9pbnRlclwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT5pbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VnbWVudD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG4gICAgPC8+XHJcbiAgICBcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VEcm9wRGl2XHJcbiIsImltcG9ydCB7SWNvbixNZXNzYWdlLERpdmlkZXJ9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBIZWFkZXJNZXNzYWdlPSgpPT57XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lPT09XCIvc2lnbnVwXCI7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZCBcclxuICAgICAgICBjb2xvcj1cInRlYWxcIlxyXG4gICAgICAgIGhlYWRlcj17c2lnbnVwUm91dGU/J0dldCBTdGFydGVkJzonV2VsY29tZSBCYWNrJ30gXHJcbiAgICAgICAgaWNvbj17c2lnbnVwUm91dGU/J3NldHRpbmdzJzoncHJpdmFjeSd9IFxyXG4gICAgICAgIGNvbnRlbnQ9e3NpZ251cFJvdXRlP1wiQ3JlYXRlIE5ldyBBY2NvdW50XCI6XCJMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZFwifS8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJNZXNzYWdlPSgpPT57XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZT09PVwiL3NpZ251cFwiO1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7c2lnbnVwUm91dGU/PD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBhdHRhY2hlZD1cImJvdHRvbVwiIHdhcm5pbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImhlbHBcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgRXhpc3RpbmcgVXNlcntcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTG9naW4gSGVyZSBJbnN0ZWFkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgaGlkZGVuLz5cclxuICAgICAgICAgICAgPC8+Ojw+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGF0dGFjaGVkPVwiYm90dG9tXCIgaW5mbz5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwibG9ja1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Jlc2V0XCI+Rm9yZ290IFBhc3N3b3JkPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJoZWxwXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIE5ldyBVc2VyPyA8TGluayBocmVmPVwiL3NpZ251cFwiPlNpZ251cCBIZXJlPC9MaW5rPiBJbnN0ZWFke1wiXCJ9XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XHJcblxyXG4gICAgICAgICAgICA8Lz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcblxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEZvcm0sXHJcbiAgQnV0dG9uLFxyXG4gIE1lc3NhZ2UsXHJcbiAgU2VnbWVudCxcclxuICBUZXh0QXJlYSxcclxuICBEaXZpZGVyLFxyXG59IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5pbXBvcnQge1xyXG4gIEhlYWRlck1lc3NhZ2UsXHJcbiAgRm9vdGVyTWVzc2FnZSxcclxufSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSdcclxuaW1wb3J0IENvbW1vbklucHV0cyBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9Db21tb25JbnB1dHMnXHJcbmltcG9ydCBJbWFnZURyb3BEaXYgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vSW1hZ2VEcm9wRGl2J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4uL3V0aWxzL2Jhc2VVcmwnXHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciB9IGZyb20gJy4uL3V0aWxzL2F1dGhVc2VyJ1xyXG5pbXBvcnQgdXBsb2FkUGljIGZyb20gJy4uL3V0aWxzL3VwbG9hZFBpY1RvQ2xvdWRpbmFyeSdcclxuXHJcbmNvbnN0IHJlZ2V4VXNlck5hbWUgPSAvXig/IS4qXFwuXFwuKSg/IS4qXFwuJClbXlxcV11bXFx3Ll17MCwyOX0kL1xyXG5sZXQgY2FuY2VsXHJcblxyXG5mdW5jdGlvbiBTaWdudXAoKSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgbmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBiaW86ICcnLFxyXG4gICAgZmFjZWJvb2s6ICcnLFxyXG4gICAgeW91dHViZTogJycsXHJcbiAgICB0d2l0dGVyOiAnJyxcclxuICAgIGluc3RhZ3JhbTogJycsXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlclxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSwgZmlsZXMgfSA9IGUudGFyZ2V0XHJcblxyXG4gICAgaWYgKG5hbWUgPT09ICdtZWRpYScpIHtcclxuICAgICAgc2V0TWVkaWEoZmlsZXNbMF0pXHJcbiAgICAgIHNldE1lZGlhUHJldmlldyhVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKSlcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc3VibWl0RGlzYWJsZWQsIHNldFN1Ym1pdERpc2FibGVkXSA9IHVzZVN0YXRlKHRydWUpXHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt1c2VybmFtZUF2YWlsYWJsZSwgc2V0VXNlcm5hbWVBdmFpbGFibGVdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IFttZWRpYSwgc2V0TWVkaWFdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbaGlnaGxpZ2h0ZWQsIHNldEhpZ2hsaWdodGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHNldEZvcm1Mb2FkaW5nKHRydWUpXHJcblxyXG4gICAgbGV0IHByb2ZpbGVQaWNVcmxcclxuICAgIGlmIChtZWRpYSAhPT0gbnVsbCkge1xyXG4gICAgICBwcm9maWxlUGljVXJsID0gYXdhaXQgdXBsb2FkUGljKG1lZGlhKVxyXG4gICAgfVxyXG5cclxuICAgIGlmKG1lZGlhIT09bnVsbCAmJiAhcHJvZmlsZVBpY1VybCl7XHJcbiAgICAgICAgc2V0Rm9ybUxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzZXRFcnJvck1zZyhcIkVycm9yIGluIHVwbG9hZGluZyBpbWFnZVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IHJlZ2lzdGVyVXNlcih1c2VyLHByb2ZpbGVQaWNVcmwsc2V0RXJyb3JNc2csc2V0Rm9ybUxvYWRpbmcpOyAgXHJcbn1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGlzVXNlciA9IE9iamVjdC52YWx1ZXMoeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9KS5ldmVyeSgoaXRlbSkgPT5cclxuICAgICAgQm9vbGVhbihpdGVtKVxyXG4gICAgKVxyXG5cclxuICAgIGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpXHJcbiAgfSwgW3VzZXJdKVxyXG5cclxuICBjb25zdCBjaGVja1VzZXJuYW1lID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKHRydWUpXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKClcclxuXHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW5cclxuXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwLyR7dXNlcm5hbWV9YCwge1xyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oKGNhbmNlbGVyKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlclxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICBpZiAocmVzLmRhdGEgPT09ICdBdmFpbGFibGUnKSB7XHJcbiAgICAgICAgc2V0VXNlcm5hbWVBdmFpbGFibGUodHJ1ZSlcclxuICAgICAgICBzZXRVc2VyKChwcmV2KSA9PiAoeyAuLi5wcmV2LCB1c2VybmFtZSB9KSlcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3JNc2coJ1VzZXJuYW1lIE5vdCBBdmFpbGFibGUnKVxyXG4gICAgfVxyXG4gICAgc2V0VXNlcm5hbWVMb2FkaW5nKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVzZXJuYW1lID09PSAnJyA/IHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKSA6IGNoZWNrVXNlcm5hbWUoKVxyXG4gIH0sIFt1c2VybmFtZV0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcblxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfVxyXG4gICAgICAgIGVycj17ZXJyb3JNc2cgIT09IG51bGx9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgaGVhZGVyPSdPb3BzJ1xyXG4gICAgICAgICAgY29udGVudD17ZXJyb3JNc2d9XHJcbiAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxTZWdtZW50PlxyXG4gICAgICAgICAgPEltYWdlRHJvcERpdlxyXG4gICAgICAgICAgICBtZWRpYVByZXZpZXc9e21lZGlhUHJldmlld31cclxuICAgICAgICAgICAgc2V0TWVkaWFQcmV2aWV3PXtzZXRNZWRpYVByZXZpZXd9XHJcbiAgICAgICAgICAgIHNldE1lZGlhPXtzZXRNZWRpYX1cclxuICAgICAgICAgICAgaW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICBoaWdobGlnaHRlZD17aGlnaGxpZ2h0ZWR9XHJcbiAgICAgICAgICAgIHNldEhpZ2hsaWdodGVkPXtzZXRIaWdobGlnaHRlZH1cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9J05hbWUnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdOYW1lJ1xyXG4gICAgICAgICAgICBuYW1lPSduYW1lJ1xyXG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj0ndXNlcidcclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Rm9ybS5JbnB1dFxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICBsYWJlbD0nRW1haWwnXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCdcclxuICAgICAgICAgICAgbmFtZT0nZW1haWwnXHJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj0nZW52ZWxvcGUnXHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgdHlwZT0nZW1haWwnXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxGb3JtLklucHV0XHJcbiAgICAgICAgICAgIGxhYmVsPSdQYXNzd29yZCdcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG4gICAgICAgICAgICBuYW1lPSdwYXNzd29yZCdcclxuICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBmbHVpZFxyXG4gICAgICAgICAgICBpY29uPXt7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ2V5ZScsXHJcbiAgICAgICAgICAgICAgY2lyY3VsYXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgbGluazogdHJ1ZSxcclxuICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCksXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGljb25Qb3NpdGlvbj0nbGVmdCdcclxuICAgICAgICAgICAgdHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgPEZvcm0uSW5wdXRcclxuICAgICAgICAgICAgbG9hZGluZz17dXNlcm5hbWVMb2FkaW5nfVxyXG4gICAgICAgICAgICBlcnI9eyF1c2VybmFtZUF2YWlsYWJsZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nVXNlcm5hbWUnXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgaWYgKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpXHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lQXZhaWxhYmxlKGZhbHNlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgaWNvbj17dXNlcm5hbWVBdmFpbGFibGUgPyAnY2hlY2snIDogJ2Nsb3NlJ31cclxuICAgICAgICAgICAgaWNvblBvc2l0aW9uPSdsZWZ0J1xyXG4gICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICA8Q29tbW9uSW5wdXRzXHJcbiAgICAgICAgICAgIHVzZXI9e3VzZXJ9XHJcbiAgICAgICAgICAgIHNob3dTb2NpYWxMaW5rcz17c2hvd1NvY2lhbExpbmtzfVxyXG4gICAgICAgICAgICBzZXRTaG93U29jaWFsTGlua3M9e3NldFNob3dTb2NpYWxMaW5rc31cclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxEaXZpZGVyIGhpZGRlbiAvPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBpY29uPSdzaWdudXAnXHJcbiAgICAgICAgICAgIGNvbnRlbnQ9J1NpZ251cCdcclxuICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICBjb2xvcj0nb3JhbmdlJ1xyXG4gICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0RGlzYWJsZWQgfHwgIXVzZXJuYW1lQXZhaWxhYmxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgIDxGb290ZXJNZXNzYWdlIC8+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cFxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBiYXNlVXJsIGZyb20gJy4vYmFzZVVybCdcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gJy4vY2F0Y2hFcnJvcnMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyVXNlciA9IGFzeW5jIChcclxuICB1c2VyLFxyXG4gIHByb2ZpbGVQaWNVcmwsXHJcbiAgc2V0RXJyb3IsXHJcbiAgc2V0TG9hZGluZ1xyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvc2lnbnVwYCwge1xyXG4gICAgICB1c2VyLFxyXG4gICAgICBwcm9maWxlUGljVXJsLFxyXG4gICAgfSlcclxuXHJcbiAgICBzZXRUb2tlbihyZXMuZGF0YSlcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcilcclxuICAgIHNldEVycm9yKGVycm9yTXNnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jICh1c2VyLCBzZXRFcnJvciwgc2V0TG9hZGluZykgPT4ge1xyXG4gIHNldExvYWRpbmcodHJ1ZSlcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHsgdXNlciB9KVxyXG5cclxuICAgIHNldFRva2VuKHJlcy5kYXRhKVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKVxyXG4gICAgc2V0RXJyb3IoZXJyb3JNc2cpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzZXRUb2tlbiA9ICh0b2tlbikgPT4ge1xyXG4gIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4pXHJcblxyXG4gIFJvdXRlci5wdXNoKCcvJylcclxufVxyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiLy8gY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IsIGRpc3BsYXlFcnJvcikgPT4ge1xyXG4vLyAgIGxldCBlcnJvck1zZyA9IHt9O1xyXG5cclxuLy8gICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuLy8gICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbi8vICAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbi8vICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbi8vICAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbi8vICAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4vLyAgICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbi8vICAgfSBlbHNlIHtcclxuLy8gICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4vLyAgICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuLy8gICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4vLyAgIH1cclxuLy8gICBkaXNwbGF5RXJyb3IoZXJyb3JNc2cpO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2F0Y2hFcnJvcnM7XHJcblxyXG5jb25zdCBjYXRjaEVycm9ycyA9IChlcnJvcikgPT4ge1xyXG4gIGxldCBlcnJvck1zZyA9IHt9O1xyXG5cclxuICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcclxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIG5vdCByZXNwb25kZWQgd2l0aCBhIHN0YXR1cyBjb2RlIGluIHRoZSByYW5nZSBvZiAyeHhcclxuXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XHJcbiAgICAvLyBpZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgbm8gcmVzcG9uc2Ugd2FzIHJlY2V2aWVkIGZyb20gc2VydmVyXHJcbiAgICBlcnJvck1zZyA9IGVycm9yLnJlcXVlc3Q7XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihlcnJvck1zZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGlmIHNvbWV0aGluZyBlbHNlIGhhcHBlbmVkIHdoaWxlIG1ha2luZyB0aGUgcmVxdWVzdFxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5tZXNzYWdlO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH1cclxuICByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCB1cGxvYWRQaWMgPSBhc3luYyhtZWRpYSk9PntcclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICBmb3JtLmFwcGVuZCgnZmlsZScsbWVkaWEpXHJcbiAgICAgICAgZm9ybS5hcHBlbmQoJ3VwbG9hZF9wcmVzZXQnLCdzb2NpYWxfbWVkaWEnKVxyXG5cclxuICAgICAgICBmb3JtLmFwcGVuZCgnY2xvdWRfbmFtZScsJ2Ric2lhZXpxdicpXHJcblxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QocHJvY2Vzcy5lbnYuQ0xPVURJTkFSWV9VUkwsZm9ybSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhLnVybFxyXG4gICAgICAgIFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVwbG9hZFBpYyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9