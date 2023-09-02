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
// thursday
// const thursdayMorningTemp = document.querySelector(".thursday-min-temp");
// const thursdayAfternoonTemp = document.querySelector(".thursday-max-temp");
// const thursdayWeatherIcon = document.querySelector(".thursday-weather");
// friday
// const fridayMorningTemp = document.querySelector(".friday-min-temp");
// const fridayAfternoonTemp = document.querySelector(".friday-max-temp");
// const fridayWeatherIcon = document.querySelector(".friday-weather");
// saturday
// const saturdayMorningTemp = document.querySelector(".saturday-min-temp");
// const saturdayAfternoonTemp = document.querySelector(".saturday-max-temp");
// const saturdayWeatherIcon = document.querySelector(".saturday-weather");
// sunday
// const sundayMorningTemp = document.querySelector(".sunday-min-temp");
// const sundayAfternoonTemp = document.querySelector(".sunday-max-temp");
// const sundayWeatherIcon = document.querySelector(".sunday-weather");

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

    // thursdayMorningTempC: weatherData.forecast.forecastday[3].day.mintemp_c,
    // thursdayAfternoonTempC: weatherData.forecast.forecastday[3].day.maxtemp_c,
    // thursdayMorningTempF: weatherData.forecast.forecastday[3].day.mintemp_f,
    // thursdayAfternoonTempF: weatherData.forecast.forecastday[3].day.maxtemp_f,
    // thursdayWeatherCondition:
    //   weatherData.forecast.forecastday[3].day.condition.text,
    // thursdayWeatherIcon: weatherData.forecast.forecastday[3].day.condition.icon,

    // fridayMorningTempC: weatherData.forecast.forecastday[4].day.mintemp_c,
    // fridayAfternoonTempC: weatherData.forecast.forecastday[4].day.maxtemp_c,
    // fridayMorningTempF: weatherData.forecast.forecastday[4].day.mintemp_f,
    // fridayAfternoonTempF: weatherData.forecast.forecastday[4].day.maxtemp_f,
    // fridayWeatherCondition:
    //   weatherData.forecast.forecastday[4].day.condition.text,
    // fridayWeatherIcon: weatherData.forecast.forecastday[4].day.condition.icon,

    // saturdayMorningTempC: weatherData.forecast.forecastday[5].day.mintemp_c,
    // saturdayAfternoonTempC: weatherData.forecast.forecastday[5].day.maxtemp_c,
    // saturdayMorningTempF: weatherData.forecast.forecastday[5].day.mintemp_f,
    // saturdayAfternoonTempF: weatherData.forecast.forecastday[5].day.maxtemp_f,
    // saturdayWeatherCondition:
    //   weatherData.forecast.forecastday[5].day.condition.text,
    // saturdayWeatherIcon: weatherData.forecast.forecastday[5].day.condition.icon,

    // sundayMorningTempC: weatherData.forecast.forecastday[6].day.mintemp_c,
    // sundayAfternoonTempC: weatherData.forecast.forecastday[6].day.maxtemp_c,
    // sundayMorningTempF: weatherData.forecast.forecastday[6].day.mintemp_f,
    // sundayAfternoonTempF: weatherData.forecast.forecastday[6].day.maxtemp_f,
    // sundayWeatherCondition:
    //   weatherData.forecast.forecastday[6].day.condition.text,
    // sundayWeatherIcon: weatherData.forecast.forecastday[6].day.condition.icon,
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

  //   thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
  // thursdayAfternoonTemp.textContent = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
  //   thursdayWeatherIcon.src = `${forecastWeatherObj.thursdayWeatherIcon}`;

  //   fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
  //   fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
  //   fridayWeatherIcon.src = `${forecastWeatherObj.fridayWeatherIcon}`;

  //   saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
  // saturdayAfternoonTemp.textContent = `${forecastWeatherObj.saturdayAfternoonTempC} C`;
  //   saturdayWeatherIcon.src = `${forecastWeatherObj.saturdayWeatherIcon}`;

  //   sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
  //   sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
  //   sundayWeatherIcon.src = `${forecastWeatherObj.sundayWeatherIcon}`;
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

    // thursdayMorningTempC: weatherData.forecast.forecastday[3].day.mintemp_c,
    // thursdayAfternoonTempC: weatherData.forecast.forecastday[3].day.maxtemp_c,
    // thursdayMorningTempF: weatherData.forecast.forecastday[3].day.mintemp_f,
    // thursdayAfternoonTempF: weatherData.forecast.forecastday[3].day.maxtemp_f,
    // thursdayWeatherIcon: weatherData.forecast.forecastday[3].day.condition.icon,

    // fridayMorningTempC: weatherData.forecast.forecastday[4].day.mintemp_c,
    // fridayAfternoonTempC: weatherData.forecast.forecastday[4].day.maxtemp_c,
    // fridayMorningTempF: weatherData.forecast.forecastday[4].day.mintemp_f,
    // fridayAfternoonTempF: weatherData.forecast.forecastday[4].day.maxtemp_f,
    // fridayWeatherIcon: weatherData.forecast.forecastday[4].day.condition.icon,

    // saturdayMorningTempC: weatherData.forecast.forecastday[5].day.mintemp_c,
    // saturdayAfternoonTempC: weatherData.forecast.forecastday[5].day.maxtemp_c,
    // saturdayMorningTempF: weatherData.forecast.forecastday[5].day.mintemp_f,
    // saturdayAfternoonTempF: weatherData.forecast.forecastday[5].day.maxtemp_f,
    // saturdayWeatherIcon: weatherData.forecast.forecastday[5].day.condition.icon,

    // sundayMorningTempC: weatherData.forecast.forecastday[6].day.mintemp_c,
    // sundayAfternoonTempC: weatherData.forecast.forecastday[6].day.maxtemp_c,
    // sundayMorningTempF: weatherData.forecast.forecastday[6].day.mintemp_f,
    // sundayAfternoonTempF: weatherData.forecast.forecastday[6].day.maxtemp_f,
    // sundayWeatherIcon: weatherData.forecast.forecastday[6].day.condition.icon,
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

  //   thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
  // thursdayAfternoonTemp.textContent = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
  //   thursdayWeatherIcon.src = `${forecastWeatherObj.thursdayWeatherIcon}`;

  //   fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
  //   fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
  //   fridayWeatherIcon.src = `${forecastWeatherObj.fridayWeatherIcon}`;

  //   saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
  // saturdayAfternoonTemp.textContent = `${forecastWeatherObj.saturdayAfternoonTempC} C`;
  //   saturdayWeatherIcon.src = `${forecastWeatherObj.saturdayWeatherIcon}`;

  //   sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
  //   sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
  //   sundayWeatherIcon.src = `${forecastWeatherObj.sundayWeatherIcon}`;
}

displayForecastWeatherLocation();
function toggleCtoF() {
  if (currentDayDegrees.textContent === `${currentWeatherObj.degreesCelsius} C` && feelsLikeDegrees.textContent === `${currentWeatherObj.feelsLikeC} C` && windSpeed.textContent === `${currentWeatherObj.windSpeed} km/h` && mondayMorningTemp.textContent === `${forecastWeatherObj.mondayMorningTempC} C` && mondayAfternoonTemp.textContent === `${forecastWeatherObj.mondayAfternoonTempC} C` && tuesdayMorningTemp.textContent === `${forecastWeatherObj.tuesdayMorningTempC} C` && tuesdayAfternoonTemp.textContent === `${forecastWeatherObj.tuesdayAfternoonTempC} C` && wednesdayMorningTemp.textContent === `${forecastWeatherObj.wednesdayMorningTempC} C` && wednesdayAfternoonTemp.textContent === `${forecastWeatherObj.wednesdayAfternoonTempC} C`
  // thursdayMorningTemp.textContent ===
  //   `${forecastWeatherObj.thursdayMorningTempC} C` &&
  // thursdayAfternoonTemp.textContent ===
  //   `${forecastWeatherObj.thursdayAfternoonTempC} C` &&
  // fridayMorningTemp.textContent ===
  //   `${forecastWeatherObj.fridayMorningTempC} C` &&
  // fridayAfternoonTemp.textContent ===
  //   `${forecastWeatherObj.fridayAfternoonTempC} C` &&
  // saturdayMorningTemp.textContent ===
  //   `${forecastWeatherObj.saturdayMorningTempC} C` &&
  // saturdayAfternoonTemp.textContent ===
  //   `${forecastWeatherObj.saturdayAfternoonTempC} C` &&
  // sundayMorningTemp.textContent ===
  //   `${forecastWeatherObj.sundayMorningTempC} C` &&
  // sundayAfternoonTemp.textContent ===
  //   `${forecastWeatherObj.sundayAfternoonTempC} C`
  ) {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesFahrenheit} F`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeF} F`;
    windSpeed.textContent = `${currentWeatherObj.windSpeedMph} mph`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempF} F`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempF} F`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempF} F`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempF} F`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempF} F`;
    // wednesdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.wednesdayAfternoonTempF} F`;
    // thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempF} F`;
    // thursdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.thursdayAfternoonTempF} F`;
    // fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempF} F`;
    // fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempF} F`;
    // saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempF} F`;
    // saturdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.saturdayAfternoonTempF} F`;
    // sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempF} F`;
    // sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempF} F`;
  } else {
    currentDayDegrees.textContent = `${currentWeatherObj.degreesCelsius} C`;
    feelsLikeDegrees.textContent = `${currentWeatherObj.feelsLikeC} C`;
    windSpeed.textContent = `${currentWeatherObj.windSpeed} km/h`;
    mondayMorningTemp.textContent = `${forecastWeatherObj.mondayMorningTempC} C`;
    mondayAfternoonTemp.textContent = `${forecastWeatherObj.mondayAfternoonTempC} C`;
    tuesdayMorningTemp.textContent = `${forecastWeatherObj.tuesdayMorningTempC} C`;
    tuesdayAfternoonTemp.textContent = `${forecastWeatherObj.tuesdayAfternoonTempC} C`;
    wednesdayMorningTemp.textContent = `${forecastWeatherObj.wednesdayMorningTempC} C`;
    // wednesdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.wednesdayAfternoonTempC} C`;
    // thursdayMorningTemp.textContent = `${forecastWeatherObj.thursdayMorningTempC} C`;
    // thursdayAfternoonTemp.textContent
    // = `${forecastWeatherObj.thursdayAfternoonTempC} C`;
    // fridayMorningTemp.textContent = `${forecastWeatherObj.fridayMorningTempC} C`;
    // fridayAfternoonTemp.textContent = `${forecastWeatherObj.fridayAfternoonTempC} C`;
    // saturdayMorningTemp.textContent = `${forecastWeatherObj.saturdayMorningTempC} C`;
    // saturdayAfternoonTemp.textContent
    //= `${forecastWeatherObj.saturdayAfternoonTempC} C`;
    // sundayMorningTemp.textContent = `${forecastWeatherObj.sundayMorningTempC} C`;
    // sundayAfternoonTemp.textContent = `${forecastWeatherObj.sundayAfternoonTempC} C`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVwRDVGLFdBQVcsQ0FBQzZGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFPQyxDQUFDLElBQUs7RUFDbERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEIsTUFBTXhELFdBQVcsR0FBRyxNQUFNZixpQkFBaUIsQ0FBQyxDQUFDO0VBQzdDMkMseUJBQXlCLENBQUM1QixXQUFXLENBQUM7RUFDdEM4QixzQkFBc0IsQ0FBQzlCLFdBQVcsQ0FBQztFQUNuQ2tELHFCQUFxQixDQUFDLENBQUM7RUFDdkJDLHNCQUFzQixDQUFDLENBQUM7RUFDeEIxRixXQUFXLENBQUNnRyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtd2Vlay13ZWF0aGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LWNvbnRhaW5lcixcXHJcXG4udHVlc2RheS1jb250YWluZXIsXFxyXFxuLndlZG5lc2RheS1jb250YWluZXIsXFxyXFxuLnRodXJzZGF5LWNvbnRhaW5lcixcXHJcXG4uZnJpZGF5LWNvbnRhaW5lcixcXHJcXG4uc2F0dXJkYXktY29udGFpbmVyLFxcclxcbi5zdW5kYXktY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVscy1saWtlLFxcclxcbi5odW1pZGl0eS1zdWItY29udGFpbmVyLFxcclxcbi5jaGFuY2Utb2YtcmFpbi1zdWItY29udGFpbmVyLFxcclxcbi53aW5kLXNwZWVkLXN1Yi1jb250YWluZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZXJtb21ldGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYWwtdGltZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWRlZ3JlZXMge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXdlYXRoZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktd2VhdGhlci1pY29uIHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGhlaWdodDogMTQwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS10ZXh0LWNvbnRhaW5lcixcXHJcXG4uY2hhbmNlLW9mLXJhaW4tdGV4dC1jb250YWluZXIsXFxyXFxuLndpbmQtc3BlZWQtdGV4dC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheSxcXHJcXG4udHVlc2RheSxcXHJcXG4ud2VkbmVzZGF5LFxcclxcbi50aHVyc2RheSxcXHJcXG4uZnJpZGF5LFxcclxcbi5zYXR1cmRheSxcXHJcXG4uc3VuZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1taW4tdGVtcCxcXHJcXG4udHVlc2RheS1taW4tdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1pbi10ZW1wLFxcclxcbi50aHVyc2RheS1taW4tdGVtcCxcXHJcXG4uZnJpZGF5LW1pbi10ZW1wLFxcclxcbi5zYXR1cmRheS1taW4tdGVtcCxcXHJcXG4uc3VuZGF5LW1pbi10ZW1wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1tYXgtdGVtcCxcXHJcXG4udHVlc2RheS1tYXgtdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1heC10ZW1wLFxcclxcbi50aHVyc2RheS1tYXgtdGVtcCxcXHJcXG4uZnJpZGF5LW1heC10ZW1wLFxcclxcbi5zYXR1cmRheS1tYXgtdGVtcCxcXHJcXG4uc3VuZGF5LW1heC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzLWxpa2UtY29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCx5REFBa0Q7RUFDbEQsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7Ozs7RUFPRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTs7OztFQUlFLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7Ozs7O0VBT0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7O0VBT0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLmN1cnJlbnQtd2VhdGhlci1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5mdWxsLXdlZWstd2VhdGhlciB7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1jb250YWluZXIsXFxyXFxuLnR1ZXNkYXktY29udGFpbmVyLFxcclxcbi53ZWRuZXNkYXktY29udGFpbmVyLFxcclxcbi50aHVyc2RheS1jb250YWluZXIsXFxyXFxuLmZyaWRheS1jb250YWluZXIsXFxyXFxuLnNhdHVyZGF5LWNvbnRhaW5lcixcXHJcXG4uc3VuZGF5LWNvbnRhaW5lciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlbHMtbGlrZSxcXHJcXG4uaHVtaWRpdHktc3ViLWNvbnRhaW5lcixcXHJcXG4uY2hhbmNlLW9mLXJhaW4tc3ViLWNvbnRhaW5lcixcXHJcXG4ud2luZC1zcGVlZC1zdWItY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aGVybW9tZXRlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VhdGhlci1jb25kaXRpb24ge1xcclxcbiAgZm9udC1zaXplOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2l0eS1uYW1lIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2FsLXRpbWUge1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RheS1kZWdyZWVzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc3BsYXktZiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RheS13ZWF0aGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXdlYXRoZXItaWNvbiB7XFxyXFxuICB3aWR0aDogMTQwcHg7XFxyXFxuICBoZWlnaHQ6IDE0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcGVyYXR1cmUtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaHVtaWRpdHktdGV4dC1jb250YWluZXIsXFxyXFxuLmNoYW5jZS1vZi1yYWluLXRleHQtY29udGFpbmVyLFxcclxcbi53aW5kLXNwZWVkLXRleHQtY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb25kYXksXFxyXFxuLnR1ZXNkYXksXFxyXFxuLndlZG5lc2RheSxcXHJcXG4udGh1cnNkYXksXFxyXFxuLmZyaWRheSxcXHJcXG4uc2F0dXJkYXksXFxyXFxuLnN1bmRheSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb25kYXktbWluLXRlbXAsXFxyXFxuLnR1ZXNkYXktbWluLXRlbXAsXFxyXFxuLndlZG5lc2RheS1taW4tdGVtcCxcXHJcXG4udGh1cnNkYXktbWluLXRlbXAsXFxyXFxuLmZyaWRheS1taW4tdGVtcCxcXHJcXG4uc2F0dXJkYXktbWluLXRlbXAsXFxyXFxuLnN1bmRheS1taW4tdGVtcCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5tb25kYXktbWF4LXRlbXAsXFxyXFxuLnR1ZXNkYXktbWF4LXRlbXAsXFxyXFxuLndlZG5lc2RheS1tYXgtdGVtcCxcXHJcXG4udGh1cnNkYXktbWF4LXRlbXAsXFxyXFxuLmZyaWRheS1tYXgtdGVtcCxcXHJcXG4uc2F0dXJkYXktbWF4LXRlbXAsXFxyXFxuLnN1bmRheS1tYXgtdGVtcCB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVscy1saWtlLWNvbnRhaW5lciB7XFxyXFxuICAvKiBvdXRsaW5lOiAycHggc29saWQgYmxhY2s7ICovXFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuXHJcbmNvbnN0IHdlYXRoZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWZvcm1cIik7XHJcbmNvbnN0IHNlYXJjaGluZ0xvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hpbmctbG9jYXRpb25cIik7XHJcbmNvbnN0IHRvZ2dsZUZyb21DdG9GID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtZmFocmVuaGVpdC1jZWxzaXVzXCIpO1xyXG4vLyBjdXJyZW50IHdlYXRoZXIgdmFyaWFibGVzXHJcbmNvbnN0IHdlYXRoZXJDb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY29uZGl0aW9uXCIpO1xyXG5jb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0eS1uYW1lXCIpO1xyXG5jb25zdCBsb2NhbFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2FsLXRpbWVcIik7XHJcbmNvbnN0IGN1cnJlbnREYXlEZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS1kZWdyZWVzXCIpO1xyXG5jb25zdCB0b2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheS13ZWF0aGVyLWljb25cIik7XHJcbmNvbnN0IGZlZWxzTGlrZURlZ3JlZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlZ3JlZXNcIik7XHJcbmNvbnN0IGh1bWlkaXR5UGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHktcGVyY2VudFwiKTtcclxuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaGFuY2Utb2YtcmFpbi1wZXJjZW50XCIpO1xyXG5jb25zdCB3aW5kU3BlZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWQta2lsb21ldGVyc1wiKTtcclxuLy8gZm9yZWNhc3Qgd2VhdGhlciB2YXJpYWJsZXNcclxuLy8gbW9uZGF5XHJcbmNvbnN0IG1vbmRheU1vcm5pbmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25kYXktbWluLXRlbXBcIik7XHJcbmNvbnN0IG1vbmRheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmRheS1tYXgtdGVtcFwiKTtcclxuY29uc3QgbW9uZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vbmRheS13ZWF0aGVyXCIpO1xyXG4vLyB0dWVzZGF5XHJcbmNvbnN0IHR1ZXNkYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVlc2RheS1taW4tdGVtcFwiKTtcclxuY29uc3QgdHVlc2RheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1ZXNkYXktbWF4LXRlbXBcIik7XHJcbmNvbnN0IHR1ZXNkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVlc2RheS13ZWF0aGVyXCIpO1xyXG4vLyB3ZWRuZXNkYXlcclxuY29uc3Qgd2VkbmVzZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZG5lc2RheS1taW4tdGVtcFwiKTtcclxuY29uc3Qgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VkbmVzZGF5LW1heC10ZW1wXCIpO1xyXG5jb25zdCB3ZWRuZXNkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VkbmVzZGF5LXdlYXRoZXJcIik7XHJcbi8vIHRodXJzZGF5XHJcbi8vIGNvbnN0IHRodXJzZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRodXJzZGF5LW1pbi10ZW1wXCIpO1xyXG4vLyBjb25zdCB0aHVyc2RheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRodXJzZGF5LW1heC10ZW1wXCIpO1xyXG4vLyBjb25zdCB0aHVyc2RheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aHVyc2RheS13ZWF0aGVyXCIpO1xyXG4vLyBmcmlkYXlcclxuLy8gY29uc3QgZnJpZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZyaWRheS1taW4tdGVtcFwiKTtcclxuLy8gY29uc3QgZnJpZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJpZGF5LW1heC10ZW1wXCIpO1xyXG4vLyBjb25zdCBmcmlkYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnJpZGF5LXdlYXRoZXJcIik7XHJcbi8vIHNhdHVyZGF5XHJcbi8vIGNvbnN0IHNhdHVyZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdHVyZGF5LW1pbi10ZW1wXCIpO1xyXG4vLyBjb25zdCBzYXR1cmRheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNhdHVyZGF5LW1heC10ZW1wXCIpO1xyXG4vLyBjb25zdCBzYXR1cmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYXR1cmRheS13ZWF0aGVyXCIpO1xyXG4vLyBzdW5kYXlcclxuLy8gY29uc3Qgc3VuZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bmRheS1taW4tdGVtcFwiKTtcclxuLy8gY29uc3Qgc3VuZGF5QWZ0ZXJub29uVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VuZGF5LW1heC10ZW1wXCIpO1xyXG4vLyBjb25zdCBzdW5kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VuZGF5LXdlYXRoZXJcIik7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFVzZXJMb2NhdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWU1ZGU5NzVkMzBmZjQ5ZWViOWE3MDQzNjIzMTEwNyZxPSR7c2VhcmNoaW5nTG9jYXRpb24udmFsdWV9JmRheXM9N2AsXHJcbiAgICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoVXNlckxvY2F0aW9uSVAoKSB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2lwLmpzb24/a2V5PWU1ZGU5NzVkMzBmZjQ5ZWViOWE3MDQzNjIzMTEwNyZxPWF1dG86aXBgLFxyXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmV0cmlldmVXZWF0aGVyTG9jYXRpb25DaXR5KHNlYXJjaGluZ0xvY2F0aW9uKSB7XHJcbiAgcmV0dXJuIGZldGNoKFxyXG4gICAgYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWU1ZGU5NzVkMzBmZjQ5ZWViOWE3MDQzNjIzMTEwNyZxPSR7c2VhcmNoaW5nTG9jYXRpb259JmRheXM9N2AsXHJcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICApLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpO1xyXG59XHJcblxyXG5sZXQgY3VycmVudFdlYXRoZXJPYmogPSB7fTtcclxuXHJcbi8vIFRPRE86IHNlcGFyYXRlIHRoaXMgZnVuY3Rpb24sIGluIHR3byBmdW5jdGlvbnNcclxuLy8gdGhlIGZpcnN0IG9uZSB3b3VsZCBwcm9jZXNzIHRoZSBkYXRhXHJcbi8vIHRoZSBzZWNvbmQgd291bGQgZGlzcGxheSB0aGUgY3VycmVudCB3ZWF0aGVyXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXJMb2NhdGlvbigpIHtcclxuICBjb25zdCBnZXRJcERhdGEgPSBhd2FpdCBmZXRjaFVzZXJMb2NhdGlvbklQKCk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXRyaWV2ZVdlYXRoZXJMb2NhdGlvbkNpdHkoZ2V0SXBEYXRhLmNpdHkpO1xyXG4gIGN1cnJlbnRXZWF0aGVyT2JqID0ge1xyXG4gICAgY29uZGl0aW9uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgY2l0eTogd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZSxcclxuICAgIHRpbWU6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcclxuICAgIGRlZ3JlZXNDZWxzaXVzOiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyxcclxuICAgIGRlZ3JlZXNGYWhyZW5oZWl0OiB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZixcclxuICAgIHRvZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb24sXHJcbiAgICBmZWVsc0xpa2VDOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jLFxyXG4gICAgZmVlbHNMaWtlRjogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZixcclxuICAgIGh1bWlkaXR5OiB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5LFxyXG4gICAgY2hhbmNlT2ZSYWluOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4sXHJcbiAgICB3aW5kU3BlZWQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGgsXHJcbiAgICB3aW5kU3BlZWRNcGg6IHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9tcGgsXHJcbiAgfTtcclxuXHJcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNvbmRpdGlvbn1gO1xyXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY2l0eX1gO1xyXG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLnRpbWV9YDtcclxuICBjdXJyZW50RGF5RGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmRlZ3JlZXNDZWxzaXVzfSBDYDtcclxuICB0b2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLnRvZGF5V2VhdGhlckljb259YDtcclxuICBmZWVsc0xpa2VEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZmVlbHNMaWtlQ30gQ2A7XHJcbiAgaHVtaWRpdHlQZXJjZW50LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouaHVtaWRpdHl9ICVgO1xyXG4gIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNoYW5jZU9mUmFpbn0gJWA7XHJcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoud2luZFNwZWVkfSBrbS9oYDtcclxufVxyXG5cclxuZGlzcGxheUN1cnJlbnRXZWF0aGVyTG9jYXRpb24oKTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04od2VhdGhlckRhdGEpIHtcclxuICBjdXJyZW50V2VhdGhlck9iaiA9IHtcclxuICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICB0aW1lOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICBkZWdyZWVzQ2Vsc2l1czogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICBkZWdyZWVzRmFocmVuaGVpdDogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICB0b2RheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgZmVlbHNMaWtlQzogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgIGZlZWxzTGlrZUY6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXHJcbiAgICBodW1pZGl0eTogd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgIGNoYW5jZU9mUmFpbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgd2luZFNwZWVkOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxyXG4gICAgd2luZFNwZWVkTXBoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoLFxyXG4gIH07XHJcbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyT2JqO1xyXG59XHJcblxyXG5sZXQgZm9yZWNhc3RXZWF0aGVyT2JqID0ge307XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRnVsbFdlZWtXZWF0aGVyKHdlYXRoZXJEYXRhKSB7XHJcbiAgZm9yZWNhc3RXZWF0aGVyT2JqID0ge1xyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9jLFxyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2YsXHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfZixcclxuICAgIG1vbmRheVdlYXRoZXJDb25kaXRpb246XHJcbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24udGV4dCxcclxuICAgIG1vbmRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfYyxcclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2YsXHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICB0dWVzZGF5V2VhdGhlckNvbmRpdGlvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi50ZXh0LFxyXG4gICAgdHVlc2RheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgIHdlZG5lc2RheVdlYXRoZXJDb25kaXRpb246XHJcbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5jb25kaXRpb24udGV4dCxcclxuICAgIHdlZG5lc2RheVdlYXRoZXJJY29uOlxyXG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgLy8gdGh1cnNkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5taW50ZW1wX2MsXHJcbiAgICAvLyB0aHVyc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgLy8gdGh1cnNkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5taW50ZW1wX2YsXHJcbiAgICAvLyB0aHVyc2RheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgLy8gdGh1cnNkYXlXZWF0aGVyQ29uZGl0aW9uOlxyXG4gICAgLy8gICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAvLyB0aHVyc2RheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgLy8gZnJpZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkubWludGVtcF9jLFxyXG4gICAgLy8gZnJpZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAvLyBmcmlkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5taW50ZW1wX2YsXHJcbiAgICAvLyBmcmlkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5Lm1heHRlbXBfZixcclxuICAgIC8vIGZyaWRheVdlYXRoZXJDb25kaXRpb246XHJcbiAgICAvLyAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5jb25kaXRpb24udGV4dCxcclxuICAgIC8vIGZyaWRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgLy8gc2F0dXJkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzVdLmRheS5taW50ZW1wX2MsXHJcbiAgICAvLyBzYXR1cmRheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkubWF4dGVtcF9jLFxyXG4gICAgLy8gc2F0dXJkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzVdLmRheS5taW50ZW1wX2YsXHJcbiAgICAvLyBzYXR1cmRheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkubWF4dGVtcF9mLFxyXG4gICAgLy8gc2F0dXJkYXlXZWF0aGVyQ29uZGl0aW9uOlxyXG4gICAgLy8gICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICAvLyBzYXR1cmRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgLy8gc3VuZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs2XS5kYXkubWludGVtcF9jLFxyXG4gICAgLy8gc3VuZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAvLyBzdW5kYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheS5taW50ZW1wX2YsXHJcbiAgICAvLyBzdW5kYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNl0uZGF5Lm1heHRlbXBfZixcclxuICAgIC8vIHN1bmRheVdlYXRoZXJDb25kaXRpb246XHJcbiAgICAvLyAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheS5jb25kaXRpb24udGV4dCxcclxuICAgIC8vIHN1bmRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs2XS5kYXkuY29uZGl0aW9uLmljb24sXHJcbiAgfTtcclxuICByZXR1cm4gZm9yZWNhc3RXZWF0aGVyT2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5Q3VycmVudFdlYXRoZXIoKSB7XHJcbiAgd2VhdGhlckNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNvbmRpdGlvbn1gO1xyXG4gIHRvZGF5V2VhdGhlckljb24uc3JjID0gYCR7Y3VycmVudFdlYXRoZXJPYmoudG9kYXlXZWF0aGVySWNvbn1gO1xyXG4gIGNpdHlOYW1lLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouY2l0eX1gO1xyXG4gIGxvY2FsVGltZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLnRpbWV9YDtcclxuICAoY3VycmVudERheURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5kZWdyZWVzQ2Vsc2l1c30gQ2ApLFxyXG4gICAgKGZlZWxzTGlrZURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5mZWVsc0xpa2VDfSBDYCk7XHJcbiAgaHVtaWRpdHlQZXJjZW50LnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouaHVtaWRpdHl9ICVgO1xyXG4gIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNoYW5jZU9mUmFpbn0gJWA7XHJcbiAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoud2luZFNwZWVkfSBrbS9oYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcmVjYXN0V2VhdGhlcigpIHtcclxuICBtb25kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIG1vbmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIG1vbmRheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlXZWF0aGVySWNvbn1gO1xyXG5cclxuICB0dWVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgdHVlc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICB0dWVzZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlXZWF0aGVySWNvbn1gO1xyXG5cclxuICB3ZWRuZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIHdlZG5lc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIHdlZG5lc2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlXZWF0aGVySWNvbn1gO1xyXG5cclxuICAvLyAgIHRodXJzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudGh1cnNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIC8vIHRodXJzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50aHVyc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICAvLyAgIHRodXJzZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnRodXJzZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgLy8gICBmcmlkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5mcmlkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIC8vICAgZnJpZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5mcmlkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgLy8gICBmcmlkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouZnJpZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgLy8gICBzYXR1cmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnNhdHVyZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAvLyBzYXR1cmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouc2F0dXJkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgLy8gICBzYXR1cmRheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zYXR1cmRheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIC8vICAgc3VuZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouc3VuZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAvLyAgIHN1bmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouc3VuZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIC8vICAgc3VuZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheVdlYXRoZXJJY29ufWA7XHJcbn1cclxuXHJcbi8vIFRPRE86IHNlcGFyYXRlIHRoaXMgZnVuY3Rpb24sIGluIHR3byBmdW5jdGlvbnNcclxuLy8gdGhlIGZpcnN0IG9uZSB3b3VsZCBwcm9jZXNzIHRoZSBkYXRhXHJcbi8vIHRoZSBzZWNvbmQgd291bGQgZGlzcGxheSB0aGUgY3VycmVudCB3ZWF0aGVyXHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgZ2V0SXBEYXRhID0gYXdhaXQgZmV0Y2hVc2VyTG9jYXRpb25JUCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmV0cmlldmVXZWF0aGVyTG9jYXRpb25DaXR5KGdldElwRGF0YS5jaXR5KTtcclxuICBmb3JlY2FzdFdlYXRoZXJPYmogPSB7XHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5taW50ZW1wX2MsXHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1heHRlbXBfYyxcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfZixcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgbW9uZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9jLFxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1pbnRlbXBfZixcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5Lm1heHRlbXBfZixcclxuICAgIHR1ZXNkYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIHdlZG5lc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICB3ZWRuZXNkYXlXZWF0aGVySWNvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIC8vIHRodXJzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWludGVtcF9jLFxyXG4gICAgLy8gdGh1cnNkYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1heHRlbXBfYyxcclxuICAgIC8vIHRodXJzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVszXS5kYXkubWludGVtcF9mLFxyXG4gICAgLy8gdGh1cnNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbM10uZGF5Lm1heHRlbXBfZixcclxuICAgIC8vIHRodXJzZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzNdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICAvLyBmcmlkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5taW50ZW1wX2MsXHJcbiAgICAvLyBmcmlkYXlBZnRlcm5vb25UZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5Lm1heHRlbXBfYyxcclxuICAgIC8vIGZyaWRheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNF0uZGF5Lm1pbnRlbXBfZixcclxuICAgIC8vIGZyaWRheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs0XS5kYXkubWF4dGVtcF9mLFxyXG4gICAgLy8gZnJpZGF5V2VhdGhlckljb246IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzRdLmRheS5jb25kaXRpb24uaWNvbixcclxuXHJcbiAgICAvLyBzYXR1cmRheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNV0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIC8vIHNhdHVyZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzVdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAvLyBzYXR1cmRheU1vcm5pbmdUZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNV0uZGF5Lm1pbnRlbXBfZixcclxuICAgIC8vIHNhdHVyZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzVdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICAvLyBzYXR1cmRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs1XS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgLy8gc3VuZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs2XS5kYXkubWludGVtcF9jLFxyXG4gICAgLy8gc3VuZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICAvLyBzdW5kYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzZdLmRheS5taW50ZW1wX2YsXHJcbiAgICAvLyBzdW5kYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbNl0uZGF5Lm1heHRlbXBfZixcclxuICAgIC8vIHN1bmRheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVs2XS5kYXkuY29uZGl0aW9uLmljb24sXHJcbiAgfTtcclxuXHJcbiAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICBtb25kYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgdHVlc2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgLy8gICB0aHVyc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnRodXJzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAvLyB0aHVyc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudGh1cnNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgLy8gICB0aHVyc2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50aHVyc2RheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIC8vICAgZnJpZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouZnJpZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAvLyAgIGZyaWRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouZnJpZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIC8vICAgZnJpZGF5V2VhdGhlckljb24uc3JjID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLmZyaWRheVdlYXRoZXJJY29ufWA7XHJcblxyXG4gIC8vICAgc2F0dXJkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zYXR1cmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgLy8gc2F0dXJkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnNhdHVyZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gIC8vICAgc2F0dXJkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouc2F0dXJkYXlXZWF0aGVySWNvbn1gO1xyXG5cclxuICAvLyAgIHN1bmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgLy8gICBzdW5kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICAvLyAgIHN1bmRheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zdW5kYXlXZWF0aGVySWNvbn1gO1xyXG59XHJcblxyXG5kaXNwbGF5Rm9yZWNhc3RXZWF0aGVyTG9jYXRpb24oKTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUN0b0YoKSB7XHJcbiAgaWYgKFxyXG4gICAgY3VycmVudERheURlZ3JlZXMudGV4dENvbnRlbnQgPT09IGAke2N1cnJlbnRXZWF0aGVyT2JqLmRlZ3JlZXNDZWxzaXVzfSBDYCAmJlxyXG4gICAgZmVlbHNMaWtlRGVncmVlcy50ZXh0Q29udGVudCA9PT0gYCR7Y3VycmVudFdlYXRoZXJPYmouZmVlbHNMaWtlQ30gQ2AgJiZcclxuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9PT0gYCR7Y3VycmVudFdlYXRoZXJPYmoud2luZFNwZWVkfSBrbS9oYCAmJlxyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlNb3JuaW5nVGVtcEN9IENgICYmXHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5QWZ0ZXJub29uVGVtcEN9IENgICYmXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5TW9ybmluZ1RlbXBDfSBDYCAmJlxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5QWZ0ZXJub29uVGVtcEN9IENgICYmXHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIHdlZG5lc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2BcclxuICAgIC8vIHRodXJzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAvLyAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai50aHVyc2RheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIC8vIHRodXJzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgIC8vICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnRodXJzZGF5QWZ0ZXJub29uVGVtcEN9IENgICYmXHJcbiAgICAvLyBmcmlkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgIC8vICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLmZyaWRheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIC8vIGZyaWRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAvLyAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai5mcmlkYXlBZnRlcm5vb25UZW1wQ30gQ2AgJiZcclxuICAgIC8vIHNhdHVyZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAvLyAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai5zYXR1cmRheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIC8vIHNhdHVyZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgIC8vICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnNhdHVyZGF5QWZ0ZXJub29uVGVtcEN9IENgICYmXHJcbiAgICAvLyBzdW5kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgIC8vICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIC8vIHN1bmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAvLyAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai5zdW5kYXlBZnRlcm5vb25UZW1wQ30gQ2BcclxuICApIHtcclxuICAgIGN1cnJlbnREYXlEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZGVncmVlc0ZhaHJlbmhlaXR9IEZgO1xyXG4gICAgZmVlbHNMaWtlRGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmZlZWxzTGlrZUZ9IEZgO1xyXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoud2luZFNwZWVkTXBofSBtcGhgO1xyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBGfSBGYDtcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5QWZ0ZXJub29uVGVtcEZ9IEZgO1xyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEZ9IEZgO1xyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheUFmdGVybm9vblRlbXBGfSBGYDtcclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheU1vcm5pbmdUZW1wRn0gRmA7XHJcbiAgICAvLyB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50XHJcbiAgICAvLz0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheUFmdGVybm9vblRlbXBGfSBGYDtcclxuICAgIC8vIHRodXJzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudGh1cnNkYXlNb3JuaW5nVGVtcEZ9IEZgO1xyXG4gICAgLy8gdGh1cnNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50XHJcbiAgICAvLz0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnRodXJzZGF5QWZ0ZXJub29uVGVtcEZ9IEZgO1xyXG4gICAgLy8gZnJpZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouZnJpZGF5TW9ybmluZ1RlbXBGfSBGYDtcclxuICAgIC8vIGZyaWRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouZnJpZGF5QWZ0ZXJub29uVGVtcEZ9IEZgO1xyXG4gICAgLy8gc2F0dXJkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zYXR1cmRheU1vcm5pbmdUZW1wRn0gRmA7XHJcbiAgICAvLyBzYXR1cmRheUFmdGVybm9vblRlbXAudGV4dENvbnRlbnRcclxuICAgIC8vPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmouc2F0dXJkYXlBZnRlcm5vb25UZW1wRn0gRmA7XHJcbiAgICAvLyBzdW5kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zdW5kYXlNb3JuaW5nVGVtcEZ9IEZgO1xyXG4gICAgLy8gc3VuZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zdW5kYXlBZnRlcm5vb25UZW1wRn0gRmA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN1cnJlbnREYXlEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZGVncmVlc0NlbHNpdXN9IENgO1xyXG4gICAgZmVlbHNMaWtlRGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmZlZWxzTGlrZUN9IENgO1xyXG4gICAgd2luZFNwZWVkLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmoud2luZFNwZWVkfSBrbS9oYDtcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gICAgLy8gd2VkbmVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudFxyXG4gICAgLy89IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgICAvLyB0aHVyc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnRodXJzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAgIC8vIHRodXJzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudFxyXG4gICAgLy8gPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudGh1cnNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgICAvLyBmcmlkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5mcmlkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gICAgLy8gZnJpZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5mcmlkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgICAvLyBzYXR1cmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnNhdHVyZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICAgIC8vIHNhdHVyZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudFxyXG4gICAgLy89IGAke2ZvcmVjYXN0V2VhdGhlck9iai5zYXR1cmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICAgIC8vIHN1bmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgICAvLyBzdW5kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnN1bmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICB9XHJcbn1cclxuXHJcbnRvZ2dsZUZyb21DdG9GLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDdG9GKTtcclxuXHJcbndlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFVzZXJMb2NhdGlvbigpO1xyXG4gIHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04od2VhdGhlckRhdGEpO1xyXG4gIHByb2Nlc3NGdWxsV2Vla1dlYXRoZXIod2VhdGhlckRhdGEpO1xyXG4gIGRpc3BsYXlDdXJyZW50V2VhdGhlcigpO1xyXG4gIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoKTtcclxuICB3ZWF0aGVyRm9ybS5yZXNldCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIndlYXRoZXJGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoaW5nTG9jYXRpb24iLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUZyb21DdG9GIiwid2VhdGhlckNvbmRpdGlvbiIsImNpdHlOYW1lIiwibG9jYWxUaW1lIiwiY3VycmVudERheURlZ3JlZXMiLCJ0b2RheVdlYXRoZXJJY29uIiwiZmVlbHNMaWtlRGVncmVlcyIsImh1bWlkaXR5UGVyY2VudCIsImNoYW5jZU9mUmFpbiIsIndpbmRTcGVlZCIsIm1vbmRheU1vcm5pbmdUZW1wIiwibW9uZGF5QWZ0ZXJub29uVGVtcCIsIm1vbmRheVdlYXRoZXJJY29uIiwidHVlc2RheU1vcm5pbmdUZW1wIiwidHVlc2RheUFmdGVybm9vblRlbXAiLCJ0dWVzZGF5V2VhdGhlckljb24iLCJ3ZWRuZXNkYXlNb3JuaW5nVGVtcCIsIndlZG5lc2RheUFmdGVybm9vblRlbXAiLCJ3ZWRuZXNkYXlXZWF0aGVySWNvbiIsImZldGNoVXNlckxvY2F0aW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsInZhbHVlIiwibW9kZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXJMb2NhdGlvbklQIiwidGhlbiIsInJldHJpZXZlV2VhdGhlckxvY2F0aW9uQ2l0eSIsImN1cnJlbnRXZWF0aGVyT2JqIiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyTG9jYXRpb24iLCJnZXRJcERhdGEiLCJ3ZWF0aGVyRGF0YSIsImNpdHkiLCJjb25kaXRpb24iLCJjdXJyZW50IiwidGV4dCIsImxvY2F0aW9uIiwibmFtZSIsInRpbWUiLCJsb2NhbHRpbWUiLCJkZWdyZWVzQ2Vsc2l1cyIsInRlbXBfYyIsImRlZ3JlZXNGYWhyZW5oZWl0IiwidGVtcF9mIiwiaWNvbiIsImZlZWxzTGlrZUMiLCJmZWVsc2xpa2VfYyIsImZlZWxzTGlrZUYiLCJmZWVsc2xpa2VfZiIsImh1bWlkaXR5IiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwid2luZF9rcGgiLCJ3aW5kU3BlZWRNcGgiLCJ3aW5kX21waCIsInRleHRDb250ZW50Iiwic3JjIiwicHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTiIsImZvcmVjYXN0V2VhdGhlck9iaiIsInByb2Nlc3NGdWxsV2Vla1dlYXRoZXIiLCJtb25kYXlNb3JuaW5nVGVtcEMiLCJtaW50ZW1wX2MiLCJtb25kYXlBZnRlcm5vb25UZW1wQyIsIm1heHRlbXBfYyIsIm1vbmRheU1vcm5pbmdUZW1wRiIsIm1pbnRlbXBfZiIsIm1vbmRheUFmdGVybm9vblRlbXBGIiwibWF4dGVtcF9mIiwibW9uZGF5V2VhdGhlckNvbmRpdGlvbiIsInR1ZXNkYXlNb3JuaW5nVGVtcEMiLCJ0dWVzZGF5QWZ0ZXJub29uVGVtcEMiLCJ0dWVzZGF5TW9ybmluZ1RlbXBGIiwidHVlc2RheUFmdGVybm9vblRlbXBGIiwidHVlc2RheVdlYXRoZXJDb25kaXRpb24iLCJ3ZWRuZXNkYXlNb3JuaW5nVGVtcEMiLCJ3ZWRuZXNkYXlBZnRlcm5vb25UZW1wQyIsIndlZG5lc2RheU1vcm5pbmdUZW1wRiIsIndlZG5lc2RheUFmdGVybm9vblRlbXBGIiwid2VkbmVzZGF5V2VhdGhlckNvbmRpdGlvbiIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImRpc3BsYXlGb3JlY2FzdFdlYXRoZXIiLCJkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyTG9jYXRpb24iLCJ0b2dnbGVDdG9GIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==