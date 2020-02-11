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

/***/ "./public/javascript/add-new-item.js":
/*!*******************************************!*\
  !*** ./public/javascript/add-new-item.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const buttonAdd = document.querySelectorAll('.button-add');\r\n\r\nif (buttonAdd) {\r\n  buttonAdd.forEach(btn =>\r\n    btn.addEventListener('click', event => {\r\n      const field = event.target.parentNode;\r\n      const fieldContainer = field.querySelector('.field__container');\r\n      const fieldItems = field.querySelectorAll('.field__input');\r\n      const newFieldItem = fieldItems[fieldItems.length - 1].cloneNode(true);\r\n\r\n      if (newFieldItem.value === '') return false;\r\n\r\n      newFieldItem.value = '';\r\n\r\n      return fieldContainer.appendChild(newFieldItem);\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/add-new-item.js?");

/***/ }),

/***/ "./public/javascript/index.js":
/*!************************************!*\
  !*** ./public/javascript/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_active__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-active */ \"./public/javascript/menu-active.js\");\n/* harmony import */ var _menu_active__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_active__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prevent_delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prevent-delete */ \"./public/javascript/prevent-delete.js\");\n/* harmony import */ var _prevent_delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prevent_delete__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_new_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-new-item */ \"./public/javascript/add-new-item.js\");\n/* harmony import */ var _add_new_item__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_new_item__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _photos_upload_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos-upload-preview */ \"./public/javascript/photos-upload-preview.js\");\n/* harmony import */ var _photos_upload_preview__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_photos_upload_preview__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _recipe_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-gallery */ \"./public/javascript/recipe-gallery.js\");\n/* harmony import */ var _recipe_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_recipe_gallery__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _photos_edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./photos-edit */ \"./public/javascript/photos-edit.js\");\n/* harmony import */ var _photos_edit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_photos_edit__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redirect_recipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirect-recipe */ \"./public/javascript/redirect-recipe.js\");\n/* harmony import */ var _redirect_recipe__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_redirect_recipe__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _redirect_chef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redirect-chef */ \"./public/javascript/redirect-chef.js\");\n/* harmony import */ var _redirect_chef__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_redirect_chef__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./public/javascript/index.js?");

/***/ }),

/***/ "./public/javascript/menu-active.js":
/*!******************************************!*\
  !*** ./public/javascript/menu-active.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const currentPage = location.pathname;\r\nconst menuItems = document.querySelectorAll('.menu__item');\r\n\r\nfor (const item of menuItems) {\r\n  const itemLink = item.querySelector('a');\r\n\r\n  if (currentPage.includes(itemLink.getAttribute('href'))) {\r\n    item.classList.add('menu__item--active');\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/menu-active.js?");

/***/ }),

/***/ "./public/javascript/photos-edit.js":
/*!******************************************!*\
  !*** ./public/javascript/photos-edit.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const photos = document.querySelectorAll('.upload-preview__photo img');\r\n\r\nif (photos) {\r\n  photos.forEach(photo =>\r\n    photo.addEventListener('click', event => {\r\n      const photoDiv = event.target.parentNode;\r\n      const removedFiles = document.querySelector('input[name=removed_files]');\r\n\r\n      removedFiles.value += `${photoDiv.id}, `;\r\n\r\n      return photoDiv.remove();\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/photos-edit.js?");

/***/ }),

/***/ "./public/javascript/photos-upload-preview.js":
/*!****************************************************!*\
  !*** ./public/javascript/photos-upload-preview.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class PhotosUploadPreview {\r\n  constructor(limitFiles) {\r\n    this.inputFile = document.querySelector('input[name=files]');\r\n    this.files = [];\r\n    this.limitFiles = limitFiles;\r\n    this.hasLimit = this.hasLimit.bind(this);\r\n    this.getAllFiles = this.getAllFiles.bind(this);\r\n    this.createContainerImg = this.createContainerImg.bind(this);\r\n    this.preview = this.preview.bind(this);\r\n  }\r\n\r\n  hasLimit(files) {\r\n    if (files.length > this.limitFiles) {\r\n      alert(`Envie no máximo ${this.limitFiles} fotos!`);\r\n\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n\r\n  getAllFiles() {\r\n    const dataTransfer = new DataTransfer();\r\n\r\n    this.files.forEach(file => dataTransfer.items.add(file));\r\n\r\n    return dataTransfer.files;\r\n  }\r\n\r\n  createContainerImg(src) {\r\n    const previewContainer = document.querySelector('.upload-preview');\r\n    const container = document.createElement('div');\r\n    const img = document.createElement('img');\r\n\r\n    img.src = src;\r\n\r\n    container.classList.add('upload-preview__photo');\r\n    container.appendChild(img);\r\n    container.addEventListener('click', event => {\r\n      const { target } = event;\r\n      const photo = target.parentNode;\r\n      const photos = Array.from(\r\n        document.querySelectorAll('.upload-preview__photo')\r\n      );\r\n      const index = photos.indexOf(photo);\r\n\r\n      photo.remove();\r\n\r\n      this.files.splice(index, 1);\r\n\r\n      this.inputFile.files = this.getAllFiles();\r\n\r\n      return this.inputFile.files;\r\n    });\r\n\r\n    previewContainer.appendChild(container);\r\n\r\n    return container;\r\n  }\r\n\r\n  preview(event) {\r\n    const { target } = event;\r\n\r\n    if (this.hasLimit(target.files)) {\r\n      target.value = '';\r\n\r\n      return true;\r\n    }\r\n\r\n    Array.from(target.files).forEach(file => {\r\n      const reader = new FileReader();\r\n\r\n      reader.readAsDataURL(file);\r\n      reader.onload = () => this.createContainerImg(reader.result);\r\n\r\n      return this.files.push(file);\r\n    });\r\n  }\r\n}\r\n\r\nconst photosUploadPreview = new PhotosUploadPreview(5);\r\nconst { inputFile, preview } = photosUploadPreview;\r\n\r\nif (inputFile) {\r\n  inputFile.addEventListener('change', event => preview(event));\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/photos-upload-preview.js?");

/***/ }),

/***/ "./public/javascript/prevent-delete.js":
/*!*********************************************!*\
  !*** ./public/javascript/prevent-delete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const formDelete = document.querySelector('.form-delete');\r\n\r\nif (formDelete) {\r\n  formDelete.addEventListener('submit', e => {\r\n    const confirmation = confirm('Você realmente deseja deletar?');\r\n\r\n    if (!confirmation) return e.preventDefault();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/prevent-delete.js?");

/***/ }),

/***/ "./public/javascript/recipe-gallery.js":
/*!*********************************************!*\
  !*** ./public/javascript/recipe-gallery.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const images = document.querySelectorAll('.photos-section__preview-img img');\r\n\r\nif (images) {\r\n  images.forEach(img =>\r\n    img.addEventListener('click', event => {\r\n      const highlight = document.querySelector(\r\n        '.photos-section__highlight img'\r\n      );\r\n\r\n      highlight.src = img.getAttribute('src');\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/recipe-gallery.js?");

/***/ }),

/***/ "./public/javascript/redirect-chef.js":
/*!********************************************!*\
  !*** ./public/javascript/redirect-chef.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const chefs = document.querySelectorAll('.chef-redirect');\r\n\r\nif (chefs) {\r\n  chefs.forEach(chef =>\r\n    chef.addEventListener('click', () => {\r\n      const id = chef.getAttribute('id');\r\n\r\n      location.href = `/chefs/${id}`;\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/redirect-chef.js?");

/***/ }),

/***/ "./public/javascript/redirect-recipe.js":
/*!**********************************************!*\
  !*** ./public/javascript/redirect-recipe.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const recipes = document.querySelectorAll('.recipe-redirect');\r\n\r\nif (recipes) {\r\n  recipes.forEach(recipe =>\r\n    recipe.addEventListener('click', () => {\r\n      const id = recipe.getAttribute('id');\r\n\r\n      location.href = `/recipes/${id}`;\r\n    })\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./public/javascript/redirect-recipe.js?");

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