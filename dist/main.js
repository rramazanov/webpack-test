/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/addresses.csv":
/*!******************************!*\
  !*** ./assets/addresses.csv ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"],["Jack","McGinnis","220 hobo Av.","Phila"," PA","09119"],["John \"Da Man\"","Repici","120 Jefferson St.","Riverside"," NJ","08075"],["Stephen","Tyler","7452 Terrace \"At the Plaza\" road","SomeTown","SD"," 91234"],["","Blankman","","SomeTown"," SD"," 00298"],["Joan \"the bone\", Anne","Jet","9th, at Terrace plc","Desert City","CO","00123"],[""]]

/***/ }),

/***/ "./assets/file.json":
/*!**************************!*\
  !*** ./assets/file.json ***!
  \**************************/
/*! exports provided: title, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"some title\"}");

/***/ }),

/***/ "./assets/note.xml":
/*!*************************!*\
  !*** ./assets/note.xml ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {"note":{"to":["Tove"],"from":["Jani"],"heading":["Reminder"],"body":["Don't forget me this weekend!"]}}

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", Promise.resolve('it working'));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

start().then(console.log);

var Util = function Util() {
  _classCallCheck(this, Util);
};

_defineProperty(Util, "id", Date.now());

console.log('Util', Util.id);

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./post.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_note_xml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/note.xml */ "./assets/note.xml");
/* harmony import */ var _assets_note_xml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_note_xml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_file_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/file.json */ "./assets/file.json");
var _assets_file_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./assets/file.json */ "./assets/file.json", 1);
/* harmony import */ var _assets_addresses_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/addresses.csv */ "./assets/addresses.csv");
/* harmony import */ var _assets_addresses_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_addresses_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./babel */ "./babel.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style/style.css */ "./style/style.css");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_style_less_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style/style-less.less */ "./style/style-less.less");
/* harmony import */ var _style_style_less_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_style_less_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _style_style_scss_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style/style-scss.scss */ "./style/style-scss.scss");
/* harmony import */ var _style_style_scss_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_style_scss_scss__WEBPACK_IMPORTED_MODULE_9__);

 //import * as $ from 'jquery'









var post = new _post__WEBPACK_IMPORTED_MODULE_2___default.a('new title'); // $('.block-json').text(post.toString())

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Webpack config"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre", {
    className: "block-json"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-analytics"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-less"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "LESS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-scss"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "SCSS")));
}

Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));
console.log('post', post.toString());
console.log('xml', _assets_note_xml__WEBPACK_IMPORTED_MODULE_3___default.a);
console.log('json', _assets_file_json__WEBPACK_IMPORTED_MODULE_4__);
console.log('csv', _assets_addresses_csv__WEBPACK_IMPORTED_MODULE_5___default.a);

/***/ }),

/***/ "./post.js":
/*!*****************!*\
  !*** ./post.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = /*#__PURE__*/function () {
  function Post(title) {
    _classCallCheck(this, Post);

    this.title = title;
    this.date = new Date();
  }

  _createClass(Post, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON()
      }, null, 2);
    }
  }]);

  return Post;
}();

module.exports = Post;

/***/ }),

/***/ "./style/style-less.less":
/*!*******************************!*\
  !*** ./style/style-less.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./style/style-scss.scss":
/*!*******************************!*\
  !*** ./style/style-scss.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });