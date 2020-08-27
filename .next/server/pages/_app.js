module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./styles/tailwind.css
var tailwind = __webpack_require__("Rpix");

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__("zPlV");

// EXTERNAL MODULE: ./styles/styles.css
var styles = __webpack_require__("vJJZ");

// CONCATENATED MODULE: ./components/Header/Header.jsx

var __jsx = external_react_default.a.createElement;

const Header = () => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("div", {
    className: "bg-green-100 border-b-2 border-green-300"
  }, __jsx("header", {
    className: "flex justify-between mx-6 py-3"
  }, __jsx("div", {
    className: "flex items-center"
  }, __jsx("a", {
    href: "#"
  }, __jsx("figure", {
    className: "bg-white border-solid border-2 border-green-300 rounded-full shadow-lg mr-3 animate__animated animate__backInLeft"
  }, __jsx("img", {
    className: "rounded-full object-cover w-12 h-12",
    src: "/bambo-logo-face.png",
    alt: "bambo-logo-face"
  }))), __jsx("div", {
    className: "flex-col"
  }, __jsx("h6", {
    className: "text-xl font-extrabold leading-none pt-2 tracking-wide sm-hidden-navbar text-gray-900"
  }, "Bambo"), __jsx("p", {
    className: "text-lg font-medium leading-none tracking-wide sm-hidden-navbar text-gray-900"
  }, "Colombia - Barranquilla"))), __jsx("div", {
    className: "flex items-center"
  }, __jsx("ul", {
    className: "flex"
  }, __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900"
  }, __jsx("i", {
    className: "text-lg mdi mdi-instagram"
  }))), __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900"
  }, __jsx("i", {
    className: "text-lg mdi mdi-twitter"
  }))), __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "border-2 border-green-300 py-1 px-2 mx-1 my-1 rounded-full transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300 text-gray-900"
  }, __jsx("i", {
    className: "text-lg mdi mdi-facebook"
  })))))), __jsx("nav", {
    className: "flex justify-end mx-4 mt-1 sm-hidden-navbar"
  }, __jsx("ul", {
    className: "flex"
  }, __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "px-3 border-b-4 border-green-500 text-gray-900"
  }, __jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Inicio"))), __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "px-3 text-gray-900"
  }, __jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Productos"))), __jsx("a", {
    href: "#"
  }, __jsx("li", {
    className: "px-3 text-gray-900"
  }, __jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Informaci\xF3n")))))));
};

/* harmony default export */ var Header_Header = (Header);
// CONCATENATED MODULE: ./components/Footer/Footer.jsx

var Footer_jsx = external_react_default.a.createElement;
const DATE = new Date().getFullYear();

const Footer = () => {
  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("footer", {
    className: "bg-gray-200 h-54 pb-24 px-8 pt-2 flex justify-between"
  }, Footer_jsx("div", {
    className: "mx-2"
  }, Footer_jsx("p", {
    className: "font-bold text-lg text-gray-900"
  }, "Designed and developed by Angel Archbold \uD83D\uDC9A")), Footer_jsx("div", {
    className: "mx-2"
  }, Footer_jsx("p", {
    className: "font-bold text-lg text-gray-900"
  }, " \xA9 ", DATE, " - Bambo \uD83D\uDC3C"))));
};

/* harmony default export */ var Footer_Footer = (Footer);
// CONCATENATED MODULE: ./components/NavbarFooter/NavbarFooter.jsx

var NavbarFooter_jsx = external_react_default.a.createElement;

const NavbarFooter = () => {
  return NavbarFooter_jsx(external_react_default.a.Fragment, null, NavbarFooter_jsx("div", {
    className: "sm-hidden"
  }, NavbarFooter_jsx("nav", {
    className: "bg-gray-100 navbarFooter flex justify-center h-16"
  }, NavbarFooter_jsx("ul", {
    className: "flex items-center text-center"
  }, NavbarFooter_jsx("a", {
    href: "#"
  }, NavbarFooter_jsx("li", {
    className: "px-3 border-b-4 border-green-400 py-0 text-gray-900"
  }, NavbarFooter_jsx("i", {
    className: "mdi mdi-home text-lg py-0"
  }), NavbarFooter_jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Inicio"))), NavbarFooter_jsx("a", {
    href: "#"
  }, NavbarFooter_jsx("li", {
    className: "px-3 border-l-2 border-r-2 py-0 text-gray-900"
  }, NavbarFooter_jsx("i", {
    className: "mdi mdi-package text-lg py-0"
  }), NavbarFooter_jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Productos"))), NavbarFooter_jsx("a", {
    href: "#"
  }, NavbarFooter_jsx("li", {
    className: "px-3 py-0 text-gray-900"
  }, NavbarFooter_jsx("i", {
    className: "mdi mdi-card-text telg-xl py-0"
  }), NavbarFooter_jsx("p", {
    className: "text-lg font-semibold font-medium leading-none tracking-wide transform motion-reduce:transform-none hover:-translate-y-1 hover:scale-110 transition ease-in-out duration-300"
  }, "Informaci\xF3n")))))));
};

/* harmony default export */ var NavbarFooter_NavbarFooter = (NavbarFooter);
// CONCATENATED MODULE: ./components/Layout/Layout.jsx

var Layout_jsx = external_react_default.a.createElement;




const Layout = props => {
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(Header_Header, null), props.children, Layout_jsx(Footer_Footer, null), Layout_jsx(NavbarFooter_NavbarFooter, null));
};

/* harmony default export */ var Layout_Layout = (Layout);
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;





function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(Layout_Layout, null, _app_jsx(Component, pageProps));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "Rpix":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "vJJZ":
/***/ (function(module, exports) {



/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });