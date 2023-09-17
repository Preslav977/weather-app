/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background/background.jpg */ "./src/background/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  flex: 1;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.current-weather-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 40px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.full-week-weather {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.monday-container,\r\n.tuesday-container,\r\n.wednesday-container,\r\n.thursday-container,\r\n.friday-container,\r\n.saturday-container,\r\n.sunday-container {\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.feels-like,\r\n.humidity-sub-container,\r\n.chance-of-rain-sub-container,\r\n.wind-speed-sub-container {\r\n  padding-bottom: 20px;\r\n  width: 200px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.thermometer {\r\n  margin-left: 8px;\r\n}\r\n\r\n.weather-condition {\r\n  font-size: 25px;\r\n}\r\n\r\n.city-name {\r\n  font-size: 18px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.local-time {\r\n  width: 50px;\r\n  font-size: 12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.today-degrees {\r\n  font-size: 20px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.display-f {\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.today-weather {\r\n  margin-left: -30px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.today-weather-icon {\r\n  width: 140px;\r\n  height: 140px;\r\n}\r\n\r\n.temperature-container {\r\n  margin-left: -5px;\r\n}\r\n\r\n.humidity-text-container,\r\n.chance-of-rain-text-container,\r\n.wind-speed-text-container {\r\n  margin-left: 5px;\r\n}\r\n\r\n.monday,\r\n.tuesday,\r\n.wednesday,\r\n.thursday,\r\n.friday,\r\n.saturday,\r\n.sunday {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.monday-min-temp,\r\n.tuesday-min-temp,\r\n.wednesday-min-temp,\r\n.thursday-min-temp,\r\n.friday-min-temp,\r\n.saturday-min-temp,\r\n.sunday-min-temp {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.monday-max-temp,\r\n.tuesday-max-temp,\r\n.wednesday-max-temp,\r\n.thursday-max-temp,\r\n.friday-max-temp,\r\n.saturday-max-temp,\r\n.sunday-max-temp {\r\n  font-size: 12px;\r\n}\r\n\r\n.feels-like-container {\r\n  /* outline: 2px solid black; */\r\n  margin-bottom: 40px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,OAAO;EACP,yDAAkD;EAClD,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;;;;;;EAOE,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;;;;EAIE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;;;;;;;EAOE,kBAAkB;AACpB;;AAEA;;;;;;;EAOE,kBAAkB;AACpB;;AAEA;;;;;;;EAOE,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  flex: 1;\r\n  background-image: url(\"background/background.jpg\");\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.current-weather-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 40px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.full-week-weather {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.monday-container,\r\n.tuesday-container,\r\n.wednesday-container,\r\n.thursday-container,\r\n.friday-container,\r\n.saturday-container,\r\n.sunday-container {\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.feels-like,\r\n.humidity-sub-container,\r\n.chance-of-rain-sub-container,\r\n.wind-speed-sub-container {\r\n  padding-bottom: 20px;\r\n  width: 200px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.thermometer {\r\n  margin-left: 8px;\r\n}\r\n\r\n.weather-condition {\r\n  font-size: 25px;\r\n}\r\n\r\n.city-name {\r\n  font-size: 18px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.local-time {\r\n  width: 50px;\r\n  font-size: 12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.today-degrees {\r\n  font-size: 20px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.display-f {\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.today-weather {\r\n  margin-left: -30px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.today-weather-icon {\r\n  width: 140px;\r\n  height: 140px;\r\n}\r\n\r\n.temperature-container {\r\n  margin-left: -5px;\r\n}\r\n\r\n.humidity-text-container,\r\n.chance-of-rain-text-container,\r\n.wind-speed-text-container {\r\n  margin-left: 5px;\r\n}\r\n\r\n.monday,\r\n.tuesday,\r\n.wednesday,\r\n.thursday,\r\n.friday,\r\n.saturday,\r\n.sunday {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.monday-min-temp,\r\n.tuesday-min-temp,\r\n.wednesday-min-temp,\r\n.thursday-min-temp,\r\n.friday-min-temp,\r\n.saturday-min-temp,\r\n.sunday-min-temp {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.monday-max-temp,\r\n.tuesday-max-temp,\r\n.wednesday-max-temp,\r\n.thursday-max-temp,\r\n.friday-max-temp,\r\n.saturday-max-temp,\r\n.sunday-max-temp {\r\n  font-size: 12px;\r\n}\r\n\r\n.feels-like-container {\r\n  /* outline: 2px solid black; */\r\n  margin-bottom: 40px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/background/background.jpg":
/*!***************************************!*\
  !*** ./src/background/background.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "522c2b667607a3c5c3a6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const weatherForm = document.querySelector(".weather-form");
const searchingLocation = document.getElementById("searching-location");
const toggleFromCtoF = document.getElementById("toggle-fahrenheit-celsius");
// current weather variables
const weatherCondition = document.querySelector(".weather-condition");
const cityName = document.querySelector(".city-name");
const localTime = document.querySelector(".local-time");
const currentDayDegrees = document.querySelector(".today-degrees");
const todayWeatherIcon = document.querySelector(".today-weather-icon");
const feelsLikeDegrees = document.querySelector(".degrees");
const humidityPercent = document.querySelector(".humidity-percent");
const chanceOfRain = document.querySelector(".chance-of-rain-percent");
const windSpeed = document.querySelector(".wind-speed-kilometers");
// forecast weather variables
// monday
const mondayMorningTemp = document.querySelector(".monday-min-temp");
const mondayAfternoonTemp = document.querySelector(".monday-max-temp");
const mondayWeatherIcon = document.querySelector(".monday-weather");
// tuesday
const tuesdayMorningTemp = document.querySelector(".tuesday-min-temp");
const tuesdayAfternoonTemp = document.querySelector(".tuesday-max-temp");
const tuesdayWeatherIcon = document.querySelector(".tuesday-weather");
// wednesday
const wednesdayMorningTemp = document.querySelector(".wednesday-min-temp");
const wednesdayAfternoonTemp = document.querySelector(".wednesday-max-temp");
const wednesdayWeatherIcon = document.querySelector(".wednesday-weather");
async function fetchUserLocation() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation.value}&days=7`, {
      mode: "cors"
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
function fetchUserLocationIP() {
  return fetch(`https://api.weatherapi.com/v1/ip.json?key=e5de975d30ff49eeb9a70436231107&q=auto:ip`, {
    mode: "cors"
  }).then(response => response.json());
}
function retrieveWeatherLocationCity(searchingLocation) {
  return fetch(`https://api.weatherapi.com/v1/forecast.json?key=e5de975d30ff49eeb9a70436231107&q=${searchingLocation}&days=7`, {
    mode: "cors"
  }).then(response => response.json());
}
let currentWeatherObj = {};

// TODO: separate this function, in two functions
// the first one would process the data
// the second would display the current weather

async function displayCurrentWeatherLocation() {
  const getIpData = await fetchUserLocationIP();
  const weatherData = await retrieveWeatherLocationCity(getIpData.city);
  currentWeatherObj = {
    condition: weatherData.current.condition.text,
    city: weatherData.location.name,
    time: weatherData.location.localtime,
    degreesCelsius: weatherData.current.temp_c,
    degreesFahrenheit: weatherData.current.temp_f,
    todayWeatherIcon: weatherData.current.condition.icon,
    feelsLikeC: weatherData.current.feelslike_c,
    feelsLikeF: weatherData.current.feelslike_f,
    humidity: weatherData.current.humidity,
    chanceOfRain: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    windSpeed: weatherData.current.wind_kph,
    windSpeedMph: weatherData.current.wind_mph
  };
  weatherCondition.textContent = `${currentWeatherObj.condition}`;
  cityName.textContent = `${currentWeatherObj.city}`;
  localTime.textContent = `${currentWeatherObj.time}`;
  currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`;
  todayWeatherIcon.src = `${currentWeatherObj.todayWeatherIcon}`;
  feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
  humidityPercent.textContent = `${currentWeatherObj.humidity} %`;
  chanceOfRain.textContent = `${currentWeatherObj.chanceOfRain} %`;
  windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
}
displayCurrentWeatherLocation();
function processCurrentWeatherJSON(weatherData) {
  currentWeatherObj = {
    condition: weatherData.current.condition.text,
    city: weatherData.location.name,
    time: weatherData.location.localtime,
    degreesCelsius: weatherData.current.temp_c,
    degreesFahrenheit: weatherData.current.temp_f,
    todayWeatherIcon: weatherData.current.condition.icon,
    feelsLikeC: weatherData.current.feelslike_c,
    feelsLikeF: weatherData.current.feelslike_f,
    humidity: weatherData.current.humidity,
    chanceOfRain: weatherData.forecast.forecastday[0].day.daily_chance_of_rain,
    windSpeed: weatherData.current.wind_kph,
    windSpeedMph: weatherData.current.wind_mph
  };
  return currentWeatherObj;
}
let forecastWeatherObj = {};
function processFullWeekWeather(weatherData) {
  forecastWeatherObj = {
    mondayMorningTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    mondayAfternoonTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    mondayMorningTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    mondayAfternoonTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    mondayWeatherCondition: weatherData.forecast.forecastday[0].day.condition.text,
    mondayWeatherIcon: weatherData.forecast.forecastday[0].day.condition.icon,
    tuesdayMorningTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
    tuesdayAfternoonTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
    tuesdayMorningTempF: weatherData.forecast.forecastday[1].day.mintemp_f,
    tuesdayAfternoonTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
    tuesdayWeatherCondition: weatherData.forecast.forecastday[1].day.condition.text,
    tuesdayWeatherIcon: weatherData.forecast.forecastday[1].day.condition.icon,
    wednesdayMorningTempC: weatherData.forecast.forecastday[2].day.mintemp_c,
    wednesdayAfternoonTempC: weatherData.forecast.forecastday[2].day.maxtemp_c,
    wednesdayMorningTempF: weatherData.forecast.forecastday[2].day.mintemp_f,
    wednesdayAfternoonTempF: weatherData.forecast.forecastday[2].day.maxtemp_f,
    wednesdayWeatherCondition: weatherData.forecast.forecastday[2].day.condition.text,
    wednesdayWeatherIcon: weatherData.forecast.forecastday[2].day.condition.icon
  };
  return forecastWeatherObj;
}
function displayCurrentWeather() {
  weatherCondition.textContent = `${currentWeatherObj.condition}`;
  todayWeatherIcon.src = `${currentWeatherObj.todayWeatherIcon}`;
  cityName.textContent = `${currentWeatherObj.city}`;
  localTime.textContent = `${currentWeatherObj.time}`;
  currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`, feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
  humidityPercent.textContent = `${currentWeatherObj.humidity} %`;
  chanceOfRain.textContent = `${currentWeatherObj.chanceOfRain} %`;
  windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
}
function displayForecastWeather() {
  mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
  mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
  mondayWeatherIcon.src = `${forecastWeatherObj.mondayWeatherIcon}`;
  tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
  tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
  tuesdayWeatherIcon.src = `${forecastWeatherObj.tuesdayWeatherIcon}`;
  wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
  wednesdayAfternoonTemp.textContent = `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
  wednesdayWeatherIcon.src = `${forecastWeatherObj.wednesdayWeatherIcon}`;
}

// TODO: separate this function, in two functions
// the first one would process the data
// the second would display the current weather

async function displayForecastWeatherLocation() {
  const getIpData = await fetchUserLocationIP();
  const weatherData = await retrieveWeatherLocationCity(getIpData.city);
  forecastWeatherObj = {
    mondayMorningTempC: weatherData.forecast.forecastday[0].day.mintemp_c,
    mondayAfternoonTempC: weatherData.forecast.forecastday[0].day.maxtemp_c,
    mondayMorningTempF: weatherData.forecast.forecastday[0].day.mintemp_f,
    mondayAfternoonTempF: weatherData.forecast.forecastday[0].day.maxtemp_f,
    mondayWeatherIcon: weatherData.forecast.forecastday[0].day.condition.icon,
    tuesdayMorningTempC: weatherData.forecast.forecastday[1].day.mintemp_c,
    tuesdayAfternoonTempC: weatherData.forecast.forecastday[1].day.maxtemp_c,
    tuesdayMorningTempF: weatherData.forecast.forecastday[1].day.mintemp_f,
    tuesdayAfternoonTempF: weatherData.forecast.forecastday[1].day.maxtemp_f,
    tuesdayWeatherIcon: weatherData.forecast.forecastday[1].day.condition.icon,
    wednesdayMorningTempC: weatherData.forecast.forecastday[2].day.mintemp_c,
    wednesdayAfternoonTempC: weatherData.forecast.forecastday[2].day.maxtemp_c,
    wednesdayMorningTempF: weatherData.forecast.forecastday[2].day.mintemp_f,
    wednesdayAfternoonTempF: weatherData.forecast.forecastday[2].day.maxtemp_f,
    wednesdayWeatherIcon: weatherData.forecast.forecastday[2].day.condition.icon
  };
  mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
  mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
  mondayWeatherIcon.src = `${forecastWeatherObj.mondayWeatherIcon}`;
  tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
  tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
  tuesdayWeatherIcon.src = `${forecastWeatherObj.tuesdayWeatherIcon}`;
  wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
  wednesdayAfternoonTemp.textContent = `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
  wednesdayWeatherIcon.src = `${forecastWeatherObj.wednesdayWeatherIcon}`;
}
displayForecastWeatherLocation();
function toggleCtoF() {
  if (currentDayDegrees.textContent === `${currentWeatherObj.degreesCelsius} C` && feelsLikeDegrees.textContent === `${currentWeatherObj.feelsLikeC} C` && windSpeed.textContent === `${currentWeatherObj.windSpeed} km/h` && mondayMorningTemp.textContent === `${forecastWeatherObj.mondayMorningTempC} C` && mondayAfternoonTemp.textContent === `${forecastWeatherObj.mondayAfternoonTempC} C` && tuesdayMorningTemp.textContent === `${forecastWeatherObj.tuesdayMorningTempC} C` && tuesdayAfternoonTemp.textContent === `${forecastWeatherObj.tuesdayAfternoonTempC} C` && wednesdayMorningTemp.textContent === `${forecastWeatherObj.wednesdayMorningTempC} C` && wednesdayAfternoonTemp.textContent === `${forecastWeatherObj.wednesdayAfternoonTempC} C`) {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesFahrenheit} F`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeF} F`;
    windSpeed.textContent = `${currentWeatherObj.windSpeedMph} mph`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempF} F`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempF} F`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempF} F`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempF} F`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempF} F`;
  } else {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
    windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
  }
}
toggleFromCtoF.addEventListener("click", toggleCtoF);
weatherForm.addEventListener("submit", async e => {
  e.preventDefault();
  const weatherData = await fetchUserLocation();
  processCurrentWeatherJSON(weatherData);
  processFullWeekWeather(weatherData);
  displayCurrentWeather();
  displayForecastWeather();
  weatherForm.reset();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQytDLFdBQVcsR0FBSSxHQUFFRyxrQkFBa0IsQ0FBQ1csbUJBQW9CLElBQUc7SUFDOUU1RCxvQkFBb0IsQ0FBQzhDLFdBQVcsR0FBSSxHQUFFRyxrQkFBa0IsQ0FBQ1kscUJBQXNCLElBQUc7SUFDbEYzRCxvQkFBb0IsQ0FBQzRDLFdBQVcsR0FBSSxHQUFFRyxrQkFBa0IsQ0FBQ2dCLHFCQUFzQixJQUFHO0VBQ3BGO0FBQ0Y7QUFFQS9FLGNBQWMsQ0FBQ3dGLGdCQUFnQixDQUFDLE9BQU8sRUFBRUQsVUFBVSxDQUFDO0FBRXBENUYsV0FBVyxDQUFDNkYsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU9DLENBQUMsSUFBSztFQUNsREEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUNsQixNQUFNeEQsV0FBVyxHQUFHLE1BQU1mLGlCQUFpQixDQUFDLENBQUM7RUFDN0MyQyx5QkFBeUIsQ0FBQzVCLFdBQVcsQ0FBQztFQUN0QzhCLHNCQUFzQixDQUFDOUIsV0FBVyxDQUFDO0VBQ25Da0QscUJBQXFCLENBQUMsQ0FBQztFQUN2QkMsc0JBQXNCLENBQUMsQ0FBQztFQUN4QjFGLFdBQVcsQ0FBQ2dHLEtBQUssQ0FBQyxDQUFDO0FBQ3JCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImJhY2tncm91bmQvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC13ZWVrLXdlYXRoZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb25kYXktY29udGFpbmVyLFxcclxcbi50dWVzZGF5LWNvbnRhaW5lcixcXHJcXG4ud2VkbmVzZGF5LWNvbnRhaW5lcixcXHJcXG4udGh1cnNkYXktY29udGFpbmVyLFxcclxcbi5mcmlkYXktY29udGFpbmVyLFxcclxcbi5zYXR1cmRheS1jb250YWluZXIsXFxyXFxuLnN1bmRheS1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzLWxpa2UsXFxyXFxuLmh1bWlkaXR5LXN1Yi1jb250YWluZXIsXFxyXFxuLmNoYW5jZS1vZi1yYWluLXN1Yi1jb250YWluZXIsXFxyXFxuLndpbmQtc3BlZWQtc3ViLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlcm1vbWV0ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhbC10aW1lIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktZGVncmVlcyB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWYge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktd2VhdGhlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RheS13ZWF0aGVyLWljb24ge1xcclxcbiAgd2lkdGg6IDE0MHB4O1xcclxcbiAgaGVpZ2h0OiAxNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LXRleHQtY29udGFpbmVyLFxcclxcbi5jaGFuY2Utb2YtcmFpbi10ZXh0LWNvbnRhaW5lcixcXHJcXG4ud2luZC1zcGVlZC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LFxcclxcbi50dWVzZGF5LFxcclxcbi53ZWRuZXNkYXksXFxyXFxuLnRodXJzZGF5LFxcclxcbi5mcmlkYXksXFxyXFxuLnNhdHVyZGF5LFxcclxcbi5zdW5kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LW1pbi10ZW1wLFxcclxcbi50dWVzZGF5LW1pbi10ZW1wLFxcclxcbi53ZWRuZXNkYXktbWluLXRlbXAsXFxyXFxuLnRodXJzZGF5LW1pbi10ZW1wLFxcclxcbi5mcmlkYXktbWluLXRlbXAsXFxyXFxuLnNhdHVyZGF5LW1pbi10ZW1wLFxcclxcbi5zdW5kYXktbWluLXRlbXAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LW1heC10ZW1wLFxcclxcbi50dWVzZGF5LW1heC10ZW1wLFxcclxcbi53ZWRuZXNkYXktbWF4LXRlbXAsXFxyXFxuLnRodXJzZGF5LW1heC10ZW1wLFxcclxcbi5mcmlkYXktbWF4LXRlbXAsXFxyXFxuLnNhdHVyZGF5LW1heC10ZW1wLFxcclxcbi5zdW5kYXktbWF4LXRlbXAge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlbHMtbGlrZS1jb250YWluZXIge1xcclxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsT0FBTztFQUNQLHlEQUFrRDtFQUNsRCw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7OztFQU9FLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBOzs7O0VBSUUsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxnQkFBZ0I7QUFDbEI7O0FBRUE7Ozs7Ozs7RUFPRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7RUFPRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7Ozs7RUFPRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJiYWNrZ3JvdW5kL2JhY2tncm91bmQuanBnXFxcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtd2Vlay13ZWF0aGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LWNvbnRhaW5lcixcXHJcXG4udHVlc2RheS1jb250YWluZXIsXFxyXFxuLndlZG5lc2RheS1jb250YWluZXIsXFxyXFxuLnRodXJzZGF5LWNvbnRhaW5lcixcXHJcXG4uZnJpZGF5LWNvbnRhaW5lcixcXHJcXG4uc2F0dXJkYXktY29udGFpbmVyLFxcclxcbi5zdW5kYXktY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVscy1saWtlLFxcclxcbi5odW1pZGl0eS1zdWItY29udGFpbmVyLFxcclxcbi5jaGFuY2Utb2YtcmFpbi1zdWItY29udGFpbmVyLFxcclxcbi53aW5kLXNwZWVkLXN1Yi1jb250YWluZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZXJtb21ldGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYWwtdGltZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWRlZ3JlZXMge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXdlYXRoZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktd2VhdGhlci1pY29uIHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGhlaWdodDogMTQwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS10ZXh0LWNvbnRhaW5lcixcXHJcXG4uY2hhbmNlLW9mLXJhaW4tdGV4dC1jb250YWluZXIsXFxyXFxuLndpbmQtc3BlZWQtdGV4dC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheSxcXHJcXG4udHVlc2RheSxcXHJcXG4ud2VkbmVzZGF5LFxcclxcbi50aHVyc2RheSxcXHJcXG4uZnJpZGF5LFxcclxcbi5zYXR1cmRheSxcXHJcXG4uc3VuZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1taW4tdGVtcCxcXHJcXG4udHVlc2RheS1taW4tdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1pbi10ZW1wLFxcclxcbi50aHVyc2RheS1taW4tdGVtcCxcXHJcXG4uZnJpZGF5LW1pbi10ZW1wLFxcclxcbi5zYXR1cmRheS1taW4tdGVtcCxcXHJcXG4uc3VuZGF5LW1pbi10ZW1wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1tYXgtdGVtcCxcXHJcXG4udHVlc2RheS1tYXgtdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1heC10ZW1wLFxcclxcbi50aHVyc2RheS1tYXgtdGVtcCxcXHJcXG4uZnJpZGF5LW1heC10ZW1wLFxcclxcbi5zYXR1cmRheS1tYXgtdGVtcCxcXHJcXG4uc3VuZGF5LW1heC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzLWxpa2UtY29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3Qgd2VhdGhlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItZm9ybVwiKTtcclxuY29uc3Qgc2VhcmNoaW5nTG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaGluZy1sb2NhdGlvblwiKTtcclxuY29uc3QgdG9nZ2xlRnJvbUN0b0YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1mYWhyZW5oZWl0LWNlbHNpdXNcIik7XHJcbi8vIGN1cnJlbnQgd2VhdGhlciB2YXJpYWJsZXNcclxuY29uc3Qgd2VhdGhlckNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jb25kaXRpb25cIik7XHJcbmNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXR5LW5hbWVcIik7XHJcbmNvbnN0IGxvY2FsVGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9jYWwtdGltZVwiKTtcclxuY29uc3QgY3VycmVudERheURlZ3JlZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LWRlZ3JlZXNcIik7XHJcbmNvbnN0IHRvZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXdlYXRoZXItaWNvblwiKTtcclxuY29uc3QgZmVlbHNMaWtlRGVncmVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVncmVlc1wiKTtcclxuY29uc3QgaHVtaWRpdHlQZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eS1wZXJjZW50XCIpO1xyXG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNoYW5jZS1vZi1yYWluLXBlcmNlbnRcIik7XHJcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1zcGVlZC1raWxvbWV0ZXJzXCIpO1xyXG4vLyBmb3JlY2FzdCB3ZWF0aGVyIHZhcmlhYmxlc1xyXG4vLyBtb25kYXlcclxuY29uc3QgbW9uZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmRheS1taW4tdGVtcFwiKTtcclxuY29uc3QgbW9uZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZGF5LW1heC10ZW1wXCIpO1xyXG5jb25zdCBtb25kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZGF5LXdlYXRoZXJcIik7XHJcbi8vIHR1ZXNkYXlcclxuY29uc3QgdHVlc2RheU1vcm5pbmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dWVzZGF5LW1pbi10ZW1wXCIpO1xyXG5jb25zdCB0dWVzZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVlc2RheS1tYXgtdGVtcFwiKTtcclxuY29uc3QgdHVlc2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dWVzZGF5LXdlYXRoZXJcIik7XHJcbi8vIHdlZG5lc2RheVxyXG5jb25zdCB3ZWRuZXNkYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VkbmVzZGF5LW1pbi10ZW1wXCIpO1xyXG5jb25zdCB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWRuZXNkYXktbWF4LXRlbXBcIik7XHJcbmNvbnN0IHdlZG5lc2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWRuZXNkYXktd2VhdGhlclwiKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlckxvY2F0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZTVkZTk3NWQzMGZmNDllZWI5YTcwNDM2MjMxMTA3JnE9JHtzZWFyY2hpbmdMb2NhdGlvbi52YWx1ZX0mZGF5cz03YCxcclxuICAgICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hVc2VyTG9jYXRpb25JUCgpIHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvaXAuanNvbj9rZXk9ZTVkZTk3NWQzMGZmNDllZWI5YTcwNDM2MjMxMTA3JnE9YXV0bzppcGAsXHJcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXRyaWV2ZVdlYXRoZXJMb2NhdGlvbkNpdHkoc2VhcmNoaW5nTG9jYXRpb24pIHtcclxuICByZXR1cm4gZmV0Y2goXHJcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZTVkZTk3NWQzMGZmNDllZWI5YTcwNDM2MjMxMTA3JnE9JHtzZWFyY2hpbmdMb2NhdGlvbn0mZGF5cz03YCxcclxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuXHJcbmxldCBjdXJyZW50V2VhdGhlck9iaiA9IHt9O1xyXG5cclxuLy8gVE9ETzogc2VwYXJhdGUgdGhpcyBmdW5jdGlvbiwgaW4gdHdvIGZ1bmN0aW9uc1xyXG4vLyB0aGUgZmlyc3Qgb25lIHdvdWxkIHByb2Nlc3MgdGhlIGRhdGFcclxuLy8gdGhlIHNlY29uZCB3b3VsZCBkaXNwbGF5IHRoZSBjdXJyZW50IHdlYXRoZXJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlckxvY2F0aW9uKCkge1xyXG4gIGNvbnN0IGdldElwRGF0YSA9IGF3YWl0IGZldGNoVXNlckxvY2F0aW9uSVAoKTtcclxuICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJldHJpZXZlV2VhdGhlckxvY2F0aW9uQ2l0eShnZXRJcERhdGEuY2l0eSk7XHJcbiAgY3VycmVudFdlYXRoZXJPYmogPSB7XHJcbiAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgdGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgZGVncmVlc0NlbHNpdXM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgZGVncmVlc0ZhaHJlbmhlaXQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgdG9kYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcclxuICAgIGZlZWxzTGlrZUM6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICBmZWVsc0xpa2VGOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxyXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHksXHJcbiAgICBjaGFuY2VPZlJhaW46IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgIHdpbmRTcGVlZDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgIHdpbmRTcGVlZE1waDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waCxcclxuICB9O1xyXG5cclxuICB3ZWF0aGVyQ29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY29uZGl0aW9ufWA7XHJcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jaXR5fWA7XHJcbiAgbG9jYWxUaW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoudGltZX1gO1xyXG4gIGN1cnJlbnREYXlEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZGVncmVlc0NlbHNpdXN9IENgO1xyXG4gIHRvZGF5V2VhdGhlckljb24uc3JjID0gYCR7Y3VycmVudFdlYXRoZXJPYmoudG9kYXlXZWF0aGVySWNvbn1gO1xyXG4gIGZlZWxzTGlrZURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5mZWVsc0xpa2VDfSBDYDtcclxuICBodW1pZGl0eVBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5odW1pZGl0eX0gJWA7XHJcbiAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY2hhbmNlT2ZSYWlufSAlYDtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai53aW5kU3BlZWR9IGttL2hgO1xyXG59XHJcblxyXG5kaXNwbGF5Q3VycmVudFdlYXRoZXJMb2NhdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTih3ZWF0aGVyRGF0YSkge1xyXG4gIGN1cnJlbnRXZWF0aGVyT2JqID0ge1xyXG4gICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgY2l0eTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIHRpbWU6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICAgIGRlZ3JlZXNDZWxzaXVzOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyxcclxuICAgIGRlZ3JlZXNGYWhyZW5oZWl0OiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgIHRvZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcbiAgICBmZWVsc0xpa2VDOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgZmVlbHNMaWtlRjogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgY2hhbmNlT2ZSYWluOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICB3aW5kU3BlZWQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGgsXHJcbiAgICB3aW5kU3BlZWRNcGg6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGgsXHJcbiAgfTtcclxuICByZXR1cm4gY3VycmVudFdlYXRoZXJPYmo7XHJcbn1cclxuXHJcbmxldCBmb3JlY2FzdFdlYXRoZXJPYmogPSB7fTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NGdWxsV2Vla1dlYXRoZXIod2VhdGhlckRhdGEpIHtcclxuICBmb3JlY2FzdFdlYXRoZXJPYmogPSB7XHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZixcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgbW9uZGF5V2VhdGhlckNvbmRpdGlvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgbW9uZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcclxuICAgIHR1ZXNkYXlXZWF0aGVyQ29uZGl0aW9uOlxyXG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICB0dWVzZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2MsXHJcbiAgICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfYyxcclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfZixcclxuICAgIHdlZG5lc2RheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgd2VkbmVzZGF5V2VhdGhlckNvbmRpdGlvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgd2VkbmVzZGF5V2VhdGhlckljb246XHJcbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24uaWNvbixcclxuICB9O1xyXG4gIHJldHVybiBmb3JlY2FzdFdlYXRoZXJPYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlDdXJyZW50V2VhdGhlcigpIHtcclxuICB3ZWF0aGVyQ29uZGl0aW9uLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY29uZGl0aW9ufWA7XHJcbiAgdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtjdXJyZW50V2VhdGhlck9iai50b2RheVdlYXRoZXJJY29ufWA7XHJcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jaXR5fWA7XHJcbiAgbG9jYWxUaW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoudGltZX1gO1xyXG4gIChjdXJyZW50RGF5RGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmRlZ3JlZXNDZWxzaXVzfSBDYCksXHJcbiAgICAoZmVlbHNMaWtlRGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmZlZWxzTGlrZUN9IENgKTtcclxuICBodW1pZGl0eVBlcmNlbnQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5odW1pZGl0eX0gJWA7XHJcbiAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY2hhbmNlT2ZSYWlufSAlYDtcclxuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai53aW5kU3BlZWR9IGttL2hgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyKCkge1xyXG4gIG1vbmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgbW9uZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgbW9uZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIHR1ZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB0dWVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIHR1ZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIHdlZG5lc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgd2VkbmVzZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheVdlYXRoZXJJY29ufWA7XHJcbn1cclxuXHJcbi8vIFRPRE86IHNlcGFyYXRlIHRoaXMgZnVuY3Rpb24sIGluIHR3byBmdW5jdGlvbnNcclxuLy8gdGhlIGZpcnN0IG9uZSB3b3VsZCBwcm9jZXNzIHRoZSBkYXRhXHJcbi8vIHRoZSBzZWNvbmQgd291bGQgZGlzcGxheSB0aGUgY3VycmVudCB3ZWF0aGVyXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgZ2V0SXBEYXRhID0gYXdhaXQgZmV0Y2hVc2VyTG9jYXRpb25JUCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmV0cmlldmVXZWF0aGVyTG9jYXRpb25DaXR5KGdldElwRGF0YS5jaXR5KTtcclxuICBmb3JlY2FzdFdlYXRoZXJPYmogPSB7XHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZixcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgbW9uZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcclxuICAgIHR1ZXNkYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIHdlZG5lc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICB3ZWRuZXNkYXlXZWF0aGVySWNvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG4gIH07XHJcblxyXG4gIG1vbmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgbW9uZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgbW9uZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIHR1ZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB0dWVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIHR1ZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIHdlZG5lc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgd2VkbmVzZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheVdlYXRoZXJJY29ufWA7XHJcbn1cclxuXHJcbmRpc3BsYXlGb3JlY2FzdFdlYXRoZXJMb2NhdGlvbigpO1xyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ3RvRigpIHtcclxuICBpZiAoXHJcbiAgICBjdXJyZW50RGF5RGVncmVlcy50ZXh0Q29udGVudCA9PT0gYCR7Y3VycmVudFdlYXRoZXJPYmouZGVncmVlc0NlbHNpdXN9IENgICYmXHJcbiAgICBmZWVsc0xpa2VEZWdyZWVzLnRleHRDb250ZW50ID09PSBgJHtjdXJyZW50V2VhdGhlck9iai5mZWVsc0xpa2VDfSBDYCAmJlxyXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID09PSBgJHtjdXJyZW50V2VhdGhlck9iai53aW5kU3BlZWR9IGttL2hgICYmXHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlBZnRlcm5vb25UZW1wQ30gQ2AgJiZcclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEN9IENgICYmXHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2AgJiZcclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBDfSBDYCAmJlxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheUFmdGVybm9vblRlbXBDfSBDYFxyXG4gICkge1xyXG4gICAgY3VycmVudERheURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5kZWdyZWVzRmFocmVuaGVpdH0gRmA7XHJcbiAgICBmZWVsc0xpa2VEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZmVlbHNMaWtlRn0gRmA7XHJcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai53aW5kU3BlZWRNcGh9IG1waGA7XHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlNb3JuaW5nVGVtcEZ9IEZgO1xyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlBZnRlcm5vb25UZW1wRn0gRmA7XHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheU1vcm5pbmdUZW1wRn0gRmA7XHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5QWZ0ZXJub29uVGVtcEZ9IEZgO1xyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBGfSBGYDtcclxuICB9IGVsc2Uge1xyXG4gICAgY3VycmVudERheURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5kZWdyZWVzQ2Vsc2l1c30gQ2A7XHJcbiAgICBmZWVsc0xpa2VEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZmVlbHNMaWtlQ30gQ2A7XHJcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai53aW5kU3BlZWR9IGttL2hgO1xyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgfVxyXG59XHJcblxyXG50b2dnbGVGcm9tQ3RvRi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlQ3RvRik7XHJcblxyXG53ZWF0aGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgZmV0Y2hVc2VyTG9jYXRpb24oKTtcclxuICBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKHdlYXRoZXJEYXRhKTtcclxuICBwcm9jZXNzRnVsbFdlZWtXZWF0aGVyKHdlYXRoZXJEYXRhKTtcclxuICBkaXNwbGF5Q3VycmVudFdlYXRoZXIoKTtcclxuICBkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyKCk7XHJcbiAgd2VhdGhlckZvcm0ucmVzZXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ3ZWF0aGVyRm9ybSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaGluZ0xvY2F0aW9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2dnbGVGcm9tQ3RvRiIsIndlYXRoZXJDb25kaXRpb24iLCJjaXR5TmFtZSIsImxvY2FsVGltZSIsImN1cnJlbnREYXlEZWdyZWVzIiwidG9kYXlXZWF0aGVySWNvbiIsImZlZWxzTGlrZURlZ3JlZXMiLCJodW1pZGl0eVBlcmNlbnQiLCJjaGFuY2VPZlJhaW4iLCJ3aW5kU3BlZWQiLCJtb25kYXlNb3JuaW5nVGVtcCIsIm1vbmRheUFmdGVybm9vblRlbXAiLCJtb25kYXlXZWF0aGVySWNvbiIsInR1ZXNkYXlNb3JuaW5nVGVtcCIsInR1ZXNkYXlBZnRlcm5vb25UZW1wIiwidHVlc2RheVdlYXRoZXJJY29uIiwid2VkbmVzZGF5TW9ybmluZ1RlbXAiLCJ3ZWRuZXNkYXlBZnRlcm5vb25UZW1wIiwid2VkbmVzZGF5V2VhdGhlckljb24iLCJmZXRjaFVzZXJMb2NhdGlvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJ2YWx1ZSIsIm1vZGUiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hVc2VyTG9jYXRpb25JUCIsInRoZW4iLCJyZXRyaWV2ZVdlYXRoZXJMb2NhdGlvbkNpdHkiLCJjdXJyZW50V2VhdGhlck9iaiIsImRpc3BsYXlDdXJyZW50V2VhdGhlckxvY2F0aW9uIiwiZ2V0SXBEYXRhIiwid2VhdGhlckRhdGEiLCJjaXR5IiwiY29uZGl0aW9uIiwiY3VycmVudCIsInRleHQiLCJsb2NhdGlvbiIsIm5hbWUiLCJ0aW1lIiwibG9jYWx0aW1lIiwiZGVncmVlc0NlbHNpdXMiLCJ0ZW1wX2MiLCJkZWdyZWVzRmFocmVuaGVpdCIsInRlbXBfZiIsImljb24iLCJmZWVsc0xpa2VDIiwiZmVlbHNsaWtlX2MiLCJmZWVsc0xpa2VGIiwiZmVlbHNsaWtlX2YiLCJodW1pZGl0eSIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJkYXkiLCJkYWlseV9jaGFuY2Vfb2ZfcmFpbiIsIndpbmRfa3BoIiwid2luZFNwZWVkTXBoIiwid2luZF9tcGgiLCJ0ZXh0Q29udGVudCIsInNyYyIsInByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04iLCJmb3JlY2FzdFdlYXRoZXJPYmoiLCJwcm9jZXNzRnVsbFdlZWtXZWF0aGVyIiwibW9uZGF5TW9ybmluZ1RlbXBDIiwibWludGVtcF9jIiwibW9uZGF5QWZ0ZXJub29uVGVtcEMiLCJtYXh0ZW1wX2MiLCJtb25kYXlNb3JuaW5nVGVtcEYiLCJtaW50ZW1wX2YiLCJtb25kYXlBZnRlcm5vb25UZW1wRiIsIm1heHRlbXBfZiIsIm1vbmRheVdlYXRoZXJDb25kaXRpb24iLCJ0dWVzZGF5TW9ybmluZ1RlbXBDIiwidHVlc2RheUFmdGVybm9vblRlbXBDIiwidHVlc2RheU1vcm5pbmdUZW1wRiIsInR1ZXNkYXlBZnRlcm5vb25UZW1wRiIsInR1ZXNkYXlXZWF0aGVyQ29uZGl0aW9uIiwid2VkbmVzZGF5TW9ybmluZ1RlbXBDIiwid2VkbmVzZGF5QWZ0ZXJub29uVGVtcEMiLCJ3ZWRuZXNkYXlNb3JuaW5nVGVtcEYiLCJ3ZWRuZXNkYXlBZnRlcm5vb25UZW1wRiIsIndlZG5lc2RheVdlYXRoZXJDb25kaXRpb24iLCJkaXNwbGF5Q3VycmVudFdlYXRoZXIiLCJkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyIiwiZGlzcGxheUZvcmVjYXN0V2VhdGhlckxvY2F0aW9uIiwidG9nZ2xlQ3RvRiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=