"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Login_tsx"],{

/***/ "./resources/js/Components/Navbar.tsx":
/*!********************************************!*\
  !*** ./resources/js/Components/Navbar.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var inertia_react_1 = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function Navbar() {
  return react_1["default"].createElement("nav", {
    className: " shadow-md"
  }, react_1["default"].createElement("div", {
    className: "max-w-7xl flex justify-between px-2 py-1 mx-auto"
  }, react_1["default"].createElement("div", {
    className: "flex items-center gap-3"
  }, react_1["default"].createElement("i", {
    className: "fas fa-bars tex"
  }), react_1["default"].createElement("h1", {
    className: "text-2xl"
  }, react_1["default"].createElement(inertia_react_1.Link, {
    href: "/"
  }, "WorldOnFire"))), react_1["default"].createElement("div", null, react_1["default"].createElement(inertia_react_1.Link, {
    href: "/login"
  }, "Sign In"))));
}

exports["default"] = Navbar;

/***/ }),

/***/ "./resources/js/Pages/Login.tsx":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var Navbar_1 = __importDefault(__webpack_require__(/*! ../Components/Navbar */ "./resources/js/Components/Navbar.tsx"));

function Login() {
  return react_1["default"].createElement("div", null, react_1["default"].createElement(Navbar_1["default"], null), react_1["default"].createElement("div", null, "LOGIN"));
}

exports["default"] = Login;

/***/ })

}]);