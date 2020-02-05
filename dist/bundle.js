/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/main.scss */ \"./public/sass/main.scss\");\n/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascript_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/index */ \"./public/javascript/index.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/index.js?");

/***/ }),

/***/ "./public/javascript/hide-messages.js":
/*!********************************************!*\
  !*** ./public/javascript/hide-messages.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const messages = document.querySelectorAll('.messages__box');\r\n\r\nsetTimeout(() => {\r\n  messages.forEach(message => message.remove());\r\n}, 3000);\r\n\n\n//# sourceURL=webpack:///./public/javascript/hide-messages.js?");

/***/ }),

/***/ "./public/javascript/index.js":
/*!************************************!*\
  !*** ./public/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-active */ \"./public/javascript/menu-active.js\");\n/* harmony import */ var _menu_active__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_active__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _validation_form_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validation-form-login */ \"./public/javascript/validation-form-login.js\");\n/* harmony import */ var _validation_form_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_validation_form_login__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hide_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hide-messages */ \"./public/javascript/hide-messages.js\");\n/* harmony import */ var _hide_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hide_messages__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/javascript/index.js?");

/***/ }),

/***/ "./public/javascript/menu-active.js":
/*!******************************************!*\
  !*** ./public/javascript/menu-active.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const currentPage = location.pathname;\r\nconst menuItems = document.querySelectorAll('.menu__item');\r\n\r\nfor (const item of menuItems) {\r\n  const itemLink = item.querySelector('a');\r\n\r\n  if (currentPage.includes(itemLink.getAttribute('href'))) {\r\n    item.classList.add('menu__item--active');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/menu-active.js?");

/***/ }),

/***/ "./public/javascript/validation-form-login.js":
/*!****************************************************!*\
  !*** ./public/javascript/validation-form-login.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fields = document.querySelectorAll('.session-form__field input');\r\nconst form = document.querySelector('#login');\r\n\r\nform.addEventListener('submit', e => {\r\n  const inputs = [...e.target.elements];\r\n\r\n  for (const { value } of inputs) {\r\n    if (value === '') {\r\n      e.preventDefault();\r\n\r\n      const err = document.createElement('div');\r\n      const message = 'Por favor, preencha todos os campos';\r\n\r\n      err.classList.add('messages__box');\r\n      err.classList.add('messages--err');\r\n      err.innerHTML = message;\r\n\r\n      fields.forEach(field => field.classList.add('is-invalid'));\r\n\r\n      document.querySelector('.messages').appendChild(err);\r\n\r\n      return;\r\n    }\r\n  }\r\n});\r\n\r\nfor (const field of fields) {\r\n  field.addEventListener('invalid', e => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.validity.valid) {\r\n      if (e.target.name === 'email') {\r\n        const err = document.createElement('div');\r\n        const message = 'Email inválido';\r\n\r\n        err.classList.add('messages__box');\r\n        err.classList.add('messages--err');\r\n        err.innerHTML = message;\r\n\r\n        document.querySelector('.messages').appendChild(err);\r\n      }\r\n\r\n      if (e.target.name === 'password') {\r\n        const err = document.createElement('div');\r\n        const message =\r\n          'A senha deve conter no mínimo 1 letra minúscula, 1 letra maiúscula, 1 número e 6 caracteres';\r\n\r\n        err.classList.add('messages__box');\r\n        err.classList.add('messages--err');\r\n        err.innerHTML = message;\r\n\r\n        document.querySelector('.messages').appendChild(err);\r\n      }\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/validation-form-login.js?");

/***/ }),

/***/ "./public/sass/main.scss":
/*!*******************************!*\
  !*** ./public/sass/main.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./public/sass/main.scss?");

/***/ })

/******/ });