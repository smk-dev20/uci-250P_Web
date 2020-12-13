/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Modules.ts":
/*!************************!*\
  !*** ./src/Modules.ts ***!
  \************************/
/*! namespace exports */
/*! export starship [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"starship\": () => /* binding */ starship\n/* harmony export */ });\nfunction starship(name, captain, firstOfficer) {\r\n    return name + \" with Captain \" + captain + \" and First Officer \" + firstOfficer;\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/Modules.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules */ \"./src/Modules.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar greeting = function (name) {\r\n    alert(\"Hello, \" + name + \"!\");\r\n};\r\ngreeting(\"Star Trek Newbie!\");\r\nvar Show = /** @class */ (function () {\r\n    function Show(show, cap, firstO) {\r\n        this.name = \"none\";\r\n        this.name = show;\r\n        this.captain = cap;\r\n        this.firstOfficer = firstO;\r\n    }\r\n    Show.prototype.printShowDetails = function () {\r\n        var showDetails = this.name + \" with Captain \" + this.captain + \" and First Officer \" + this.firstOfficer;\r\n        console.log(showDetails);\r\n        return showDetails;\r\n    };\r\n    return Show;\r\n}());\r\nvar TNG = /** @class */ (function (_super) {\r\n    __extends(TNG, _super);\r\n    function TNG() {\r\n        return _super.call(this, \"The Next Generation\", \"Picard\", \"Riker\") || this;\r\n    }\r\n    return TNG;\r\n}(Show));\r\nvar show1 = new TNG();\r\nvar el = document.getElementById(\"to-watch1\");\r\nif (el)\r\n    el.innerHTML = show1.printShowDetails();\r\nvar Voyager = /** @class */ (function (_super) {\r\n    __extends(Voyager, _super);\r\n    function Voyager() {\r\n        return _super.call(this, \"Voyager\", \"Janeway\", \"Chakotay\") || this;\r\n    }\r\n    return Voyager;\r\n}(Show));\r\nvar show2 = new Voyager();\r\nvar el1 = document.getElementById(\"to-watch2\");\r\nif (el1)\r\n    el1.innerHTML = show2.printShowDetails();\r\nvar show3 = (0,_Modules__WEBPACK_IMPORTED_MODULE_0__.starship)(\"Enterprise\", \"Archer\", \"T'Pol\");\r\nvar el2 = document.getElementById(\"to-watch3\");\r\nif (el2)\r\n    el2.innerHTML = show3;\r\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;