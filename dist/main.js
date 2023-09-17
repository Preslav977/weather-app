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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! background/black-clouds-field.jpg */ "./src/background/black-clouds-field.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  flex: 1;\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  object-fit: none;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.current-weather-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 40px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.full-week-weather {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.monday-container,\r\n.tuesday-container,\r\n.wednesday-container,\r\n.thursday-container,\r\n.friday-container,\r\n.saturday-container,\r\n.sunday-container {\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.feels-like,\r\n.humidity-sub-container,\r\n.chance-of-rain-sub-container,\r\n.wind-speed-sub-container {\r\n  padding-bottom: 20px;\r\n  width: 200px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.thermometer {\r\n  margin-left: 8px;\r\n}\r\n\r\n.weather-condition {\r\n  font-size: 25px;\r\n}\r\n\r\n.city-name {\r\n  font-size: 18px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.local-time {\r\n  width: 50px;\r\n  font-size: 12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.today-degrees {\r\n  font-size: 20px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.display-f {\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.today-weather {\r\n  margin-left: -30px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.today-weather-icon {\r\n  width: 140px;\r\n  height: 140px;\r\n}\r\n\r\n.temperature-container {\r\n  margin-left: -5px;\r\n}\r\n\r\n.humidity-text-container,\r\n.chance-of-rain-text-container,\r\n.wind-speed-text-container {\r\n  margin-left: 5px;\r\n}\r\n\r\n.monday,\r\n.tuesday,\r\n.wednesday,\r\n.thursday,\r\n.friday,\r\n.saturday,\r\n.sunday {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.monday-min-temp,\r\n.tuesday-min-temp,\r\n.wednesday-min-temp,\r\n.thursday-min-temp,\r\n.friday-min-temp,\r\n.saturday-min-temp,\r\n.sunday-min-temp {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.monday-max-temp,\r\n.tuesday-max-temp,\r\n.wednesday-max-temp,\r\n.thursday-max-temp,\r\n.friday-max-temp,\r\n.saturday-max-temp,\r\n.sunday-max-temp {\r\n  font-size: 12px;\r\n}\r\n\r\n.feels-like-container {\r\n  /* outline: 2px solid black; */\r\n  margin-bottom: 40px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,OAAO;EACP,yDAA0D;EAC1D,gBAAgB;EAChB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;;;;;;;EAOE,kBAAkB;EAClB,aAAa;EACb,YAAY;AACd;;AAEA;;;;EAIE,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,2BAA2B;EAC3B,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;EAGE,gBAAgB;AAClB;;AAEA;;;;;;;EAOE,kBAAkB;AACpB;;AAEA;;;;;;;EAOE,kBAAkB;AACpB;;AAEA;;;;;;;EAOE,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,mBAAmB;AACrB","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  flex: 1;\r\n  background-image: url(\"background/black-clouds-field.jpg\");\r\n  object-fit: none;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.current-weather-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 40px;\r\n  margin-left: 40px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.full-week-weather {\r\n  margin-top: auto;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.monday-container,\r\n.tuesday-container,\r\n.wednesday-container,\r\n.thursday-container,\r\n.friday-container,\r\n.saturday-container,\r\n.sunday-container {\r\n  text-align: center;\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n.feels-like,\r\n.humidity-sub-container,\r\n.chance-of-rain-sub-container,\r\n.wind-speed-sub-container {\r\n  padding-bottom: 20px;\r\n  width: 200px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n.thermometer {\r\n  margin-left: 8px;\r\n}\r\n\r\n.weather-condition {\r\n  font-size: 25px;\r\n}\r\n\r\n.city-name {\r\n  font-size: 18px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.local-time {\r\n  width: 50px;\r\n  font-size: 12px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.today-degrees {\r\n  font-size: 20px;\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.display-f {\r\n  font-size: 12px;\r\n  cursor: pointer;\r\n}\r\n\r\n.today-weather {\r\n  margin-left: -30px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n.today-weather-icon {\r\n  width: 140px;\r\n  height: 140px;\r\n}\r\n\r\n.temperature-container {\r\n  margin-left: -5px;\r\n}\r\n\r\n.humidity-text-container,\r\n.chance-of-rain-text-container,\r\n.wind-speed-text-container {\r\n  margin-left: 5px;\r\n}\r\n\r\n.monday,\r\n.tuesday,\r\n.wednesday,\r\n.thursday,\r\n.friday,\r\n.saturday,\r\n.sunday {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.monday-min-temp,\r\n.tuesday-min-temp,\r\n.wednesday-min-temp,\r\n.thursday-min-temp,\r\n.friday-min-temp,\r\n.saturday-min-temp,\r\n.sunday-min-temp {\r\n  margin-bottom: 3px;\r\n}\r\n\r\n.monday-max-temp,\r\n.tuesday-max-temp,\r\n.wednesday-max-temp,\r\n.thursday-max-temp,\r\n.friday-max-temp,\r\n.saturday-max-temp,\r\n.sunday-max-temp {\r\n  font-size: 12px;\r\n}\r\n\r\n.feels-like-container {\r\n  /* outline: 2px solid black; */\r\n  margin-bottom: 40px;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/background/black-clouds-field.jpg":
/*!***********************************************!*\
  !*** ./src/background/black-clouds-field.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e71347162c3111db0aa6.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO0lBQ2hGdEQsa0JBQWtCLENBQUMrQyxXQUFXLEdBQUksR0FBRUcsa0JBQWtCLENBQUNXLG1CQUFvQixJQUFHO0lBQzlFNUQsb0JBQW9CLENBQUM4QyxXQUFXLEdBQUksR0FBRUcsa0JBQWtCLENBQUNZLHFCQUFzQixJQUFHO0lBQ2xGM0Qsb0JBQW9CLENBQUM0QyxXQUFXLEdBQUksR0FBRUcsa0JBQWtCLENBQUNnQixxQkFBc0IsSUFBRztFQUNwRjtBQUNGO0FBRUEvRSxjQUFjLENBQUN3RixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVELFVBQVUsQ0FBQztBQUVwRDVGLFdBQVcsQ0FBQzZGLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFPQyxDQUFDLElBQUs7RUFDbERBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7RUFDbEIsTUFBTXhELFdBQVcsR0FBRyxNQUFNZixpQkFBaUIsQ0FBQyxDQUFDO0VBQzdDMkMseUJBQXlCLENBQUM1QixXQUFXLENBQUM7RUFDdEM4QixzQkFBc0IsQ0FBQzlCLFdBQVcsQ0FBQztFQUNuQ2tELHFCQUFxQixDQUFDLENBQUM7RUFDdkJDLHNCQUFzQixDQUFDLENBQUM7RUFDeEIxRixXQUFXLENBQUNnRyxLQUFLLENBQUMsQ0FBQztBQUNyQixDQUFDLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLXJlcG9zaXRvcnkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUtcmVwb3NpdG9yeS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90ZW1wbGF0ZS1yZXBvc2l0b3J5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJiYWNrZ3JvdW5kL2JsYWNrLWNsb3Vkcy1maWVsZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIG9iamVjdC1maXQ6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudC13ZWF0aGVyLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICBtYXJnaW4tbGVmdDogNDBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZ1bGwtd2Vlay13ZWF0aGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LWNvbnRhaW5lcixcXHJcXG4udHVlc2RheS1jb250YWluZXIsXFxyXFxuLndlZG5lc2RheS1jb250YWluZXIsXFxyXFxuLnRodXJzZGF5LWNvbnRhaW5lcixcXHJcXG4uZnJpZGF5LWNvbnRhaW5lcixcXHJcXG4uc2F0dXJkYXktY29udGFpbmVyLFxcclxcbi5zdW5kYXktY29udGFpbmVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogMTAwcHg7XFxyXFxuICB3aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWVscy1saWtlLFxcclxcbi5odW1pZGl0eS1zdWItY29udGFpbmVyLFxcclxcbi5jaGFuY2Utb2YtcmFpbi1zdWItY29udGFpbmVyLFxcclxcbi53aW5kLXNwZWVkLXN1Yi1jb250YWluZXIge1xcclxcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxyXFxuICB3aWR0aDogMjAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZXJtb21ldGVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxufVxcclxcblxcclxcbi53ZWF0aGVyLWNvbmRpdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5jaXR5LW5hbWUge1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYWwtdGltZSB7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LWRlZ3JlZXMge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzcGxheS1mIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5LXdlYXRoZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktd2VhdGhlci1pY29uIHtcXHJcXG4gIHdpZHRoOiAxNDBweDtcXHJcXG4gIGhlaWdodDogMTQwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZW1wZXJhdHVyZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5odW1pZGl0eS10ZXh0LWNvbnRhaW5lcixcXHJcXG4uY2hhbmNlLW9mLXJhaW4tdGV4dC1jb250YWluZXIsXFxyXFxuLndpbmQtc3BlZWQtdGV4dC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheSxcXHJcXG4udHVlc2RheSxcXHJcXG4ud2VkbmVzZGF5LFxcclxcbi50aHVyc2RheSxcXHJcXG4uZnJpZGF5LFxcclxcbi5zYXR1cmRheSxcXHJcXG4uc3VuZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1taW4tdGVtcCxcXHJcXG4udHVlc2RheS1taW4tdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1pbi10ZW1wLFxcclxcbi50aHVyc2RheS1taW4tdGVtcCxcXHJcXG4uZnJpZGF5LW1pbi10ZW1wLFxcclxcbi5zYXR1cmRheS1taW4tdGVtcCxcXHJcXG4uc3VuZGF5LW1pbi10ZW1wIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vbmRheS1tYXgtdGVtcCxcXHJcXG4udHVlc2RheS1tYXgtdGVtcCxcXHJcXG4ud2VkbmVzZGF5LW1heC10ZW1wLFxcclxcbi50aHVyc2RheS1tYXgtdGVtcCxcXHJcXG4uZnJpZGF5LW1heC10ZW1wLFxcclxcbi5zYXR1cmRheS1tYXgtdGVtcCxcXHJcXG4uc3VuZGF5LW1heC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzLWxpa2UtY29udGFpbmVyIHtcXHJcXG4gIC8qIG91dGxpbmU6IDJweCBzb2xpZCBibGFjazsgKi9cXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCx5REFBMEQ7RUFDMUQsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBOzs7Ozs7O0VBT0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7Ozs7RUFJRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLGdCQUFnQjtBQUNsQjs7QUFFQTs7Ozs7OztFQU9FLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7OztFQU9FLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImJhY2tncm91bmQvYmxhY2stY2xvdWRzLWZpZWxkLmpwZ1xcXCIpO1xcclxcbiAgb2JqZWN0LWZpdDogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXdlYXRoZXItY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZnVsbC13ZWVrLXdlYXRoZXIge1xcclxcbiAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb25kYXktY29udGFpbmVyLFxcclxcbi50dWVzZGF5LWNvbnRhaW5lcixcXHJcXG4ud2VkbmVzZGF5LWNvbnRhaW5lcixcXHJcXG4udGh1cnNkYXktY29udGFpbmVyLFxcclxcbi5mcmlkYXktY29udGFpbmVyLFxcclxcbi5zYXR1cmRheS1jb250YWluZXIsXFxyXFxuLnN1bmRheS1jb250YWluZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZlZWxzLWxpa2UsXFxyXFxuLmh1bWlkaXR5LXN1Yi1jb250YWluZXIsXFxyXFxuLmNoYW5jZS1vZi1yYWluLXN1Yi1jb250YWluZXIsXFxyXFxuLndpbmQtc3BlZWQtc3ViLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlcm1vbWV0ZXIge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLndlYXRoZXItY29uZGl0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpdHktbmFtZSB7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhbC10aW1lIHtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktZGVncmVlcyB7XFxyXFxuICBmb250LXNpemU6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5LWYge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXktd2VhdGhlciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi50b2RheS13ZWF0aGVyLWljb24ge1xcclxcbiAgd2lkdGg6IDE0MHB4O1xcclxcbiAgaGVpZ2h0OiAxNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmh1bWlkaXR5LXRleHQtY29udGFpbmVyLFxcclxcbi5jaGFuY2Utb2YtcmFpbi10ZXh0LWNvbnRhaW5lcixcXHJcXG4ud2luZC1zcGVlZC10ZXh0LWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LFxcclxcbi50dWVzZGF5LFxcclxcbi53ZWRuZXNkYXksXFxyXFxuLnRodXJzZGF5LFxcclxcbi5mcmlkYXksXFxyXFxuLnNhdHVyZGF5LFxcclxcbi5zdW5kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LW1pbi10ZW1wLFxcclxcbi50dWVzZGF5LW1pbi10ZW1wLFxcclxcbi53ZWRuZXNkYXktbWluLXRlbXAsXFxyXFxuLnRodXJzZGF5LW1pbi10ZW1wLFxcclxcbi5mcmlkYXktbWluLXRlbXAsXFxyXFxuLnNhdHVyZGF5LW1pbi10ZW1wLFxcclxcbi5zdW5kYXktbWluLXRlbXAge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9uZGF5LW1heC10ZW1wLFxcclxcbi50dWVzZGF5LW1heC10ZW1wLFxcclxcbi53ZWRuZXNkYXktbWF4LXRlbXAsXFxyXFxuLnRodXJzZGF5LW1heC10ZW1wLFxcclxcbi5mcmlkYXktbWF4LXRlbXAsXFxyXFxuLnNhdHVyZGF5LW1heC10ZW1wLFxcclxcbi5zdW5kYXktbWF4LXRlbXAge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmVlbHMtbGlrZS1jb250YWluZXIge1xcclxcbiAgLyogb3V0bGluZTogMnB4IHNvbGlkIGJsYWNrOyAqL1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcblxyXG5jb25zdCB3ZWF0aGVyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1mb3JtXCIpO1xyXG5jb25zdCBzZWFyY2hpbmdMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoaW5nLWxvY2F0aW9uXCIpO1xyXG5jb25zdCB0b2dnbGVGcm9tQ3RvRiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWZhaHJlbmhlaXQtY2Vsc2l1c1wiKTtcclxuLy8gY3VycmVudCB3ZWF0aGVyIHZhcmlhYmxlc1xyXG5jb25zdCB3ZWF0aGVyQ29uZGl0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNvbmRpdGlvblwiKTtcclxuY29uc3QgY2l0eU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpdHktbmFtZVwiKTtcclxuY29uc3QgbG9jYWxUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhbC10aW1lXCIpO1xyXG5jb25zdCBjdXJyZW50RGF5RGVncmVlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktZGVncmVlc1wiKTtcclxuY29uc3QgdG9kYXlXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktd2VhdGhlci1pY29uXCIpO1xyXG5jb25zdCBmZWVsc0xpa2VEZWdyZWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWdyZWVzXCIpO1xyXG5jb25zdCBodW1pZGl0eVBlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmh1bWlkaXR5LXBlcmNlbnRcIik7XHJcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhbmNlLW9mLXJhaW4tcGVyY2VudFwiKTtcclxuY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkLWtpbG9tZXRlcnNcIik7XHJcbi8vIGZvcmVjYXN0IHdlYXRoZXIgdmFyaWFibGVzXHJcbi8vIG1vbmRheVxyXG5jb25zdCBtb25kYXlNb3JuaW5nVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9uZGF5LW1pbi10ZW1wXCIpO1xyXG5jb25zdCBtb25kYXlBZnRlcm5vb25UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25kYXktbWF4LXRlbXBcIik7XHJcbmNvbnN0IG1vbmRheVdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb25kYXktd2VhdGhlclwiKTtcclxuLy8gdHVlc2RheVxyXG5jb25zdCB0dWVzZGF5TW9ybmluZ1RlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1ZXNkYXktbWluLXRlbXBcIik7XHJcbmNvbnN0IHR1ZXNkYXlBZnRlcm5vb25UZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dWVzZGF5LW1heC10ZW1wXCIpO1xyXG5jb25zdCB0dWVzZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1ZXNkYXktd2VhdGhlclwiKTtcclxuLy8gd2VkbmVzZGF5XHJcbmNvbnN0IHdlZG5lc2RheU1vcm5pbmdUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWRuZXNkYXktbWluLXRlbXBcIik7XHJcbmNvbnN0IHdlZG5lc2RheUFmdGVybm9vblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZG5lc2RheS1tYXgtdGVtcFwiKTtcclxuY29uc3Qgd2VkbmVzZGF5V2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlZG5lc2RheS13ZWF0aGVyXCIpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyTG9jYXRpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lNWRlOTc1ZDMwZmY0OWVlYjlhNzA0MzYyMzExMDcmcT0ke3NlYXJjaGluZ0xvY2F0aW9uLnZhbHVlfSZkYXlzPTdgLFxyXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFVzZXJMb2NhdGlvbklQKCkge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9pcC5qc29uP2tleT1lNWRlOTc1ZDMwZmY0OWVlYjlhNzA0MzYyMzExMDcmcT1hdXRvOmlwYCxcclxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxyXG4gICkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJldHJpZXZlV2VhdGhlckxvY2F0aW9uQ2l0eShzZWFyY2hpbmdMb2NhdGlvbikge1xyXG4gIHJldHVybiBmZXRjaChcclxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lNWRlOTc1ZDMwZmY0OWVlYjlhNzA0MzYyMzExMDcmcT0ke3NlYXJjaGluZ0xvY2F0aW9ufSZkYXlzPTdgLFxyXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XHJcbiAgKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxufVxyXG5cclxubGV0IGN1cnJlbnRXZWF0aGVyT2JqID0ge307XHJcblxyXG4vLyBUT0RPOiBzZXBhcmF0ZSB0aGlzIGZ1bmN0aW9uLCBpbiB0d28gZnVuY3Rpb25zXHJcbi8vIHRoZSBmaXJzdCBvbmUgd291bGQgcHJvY2VzcyB0aGUgZGF0YVxyXG4vLyB0aGUgc2Vjb25kIHdvdWxkIGRpc3BsYXkgdGhlIGN1cnJlbnQgd2VhdGhlclxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyTG9jYXRpb24oKSB7XHJcbiAgY29uc3QgZ2V0SXBEYXRhID0gYXdhaXQgZmV0Y2hVc2VyTG9jYXRpb25JUCgpO1xyXG4gIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmV0cmlldmVXZWF0aGVyTG9jYXRpb25DaXR5KGdldElwRGF0YS5jaXR5KTtcclxuICBjdXJyZW50V2VhdGhlck9iaiA9IHtcclxuICAgIGNvbmRpdGlvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dCxcclxuICAgIGNpdHk6IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWUsXHJcbiAgICB0aW1lOiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUsXHJcbiAgICBkZWdyZWVzQ2Vsc2l1czogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2MsXHJcbiAgICBkZWdyZWVzRmFocmVuaGVpdDogd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YsXHJcbiAgICB0b2RheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uLFxyXG4gICAgZmVlbHNMaWtlQzogd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyxcclxuICAgIGZlZWxzTGlrZUY6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2YsXHJcbiAgICBodW1pZGl0eTogd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSxcclxuICAgIGNoYW5jZU9mUmFpbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluLFxyXG4gICAgd2luZFNwZWVkOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoLFxyXG4gICAgd2luZFNwZWVkTXBoOiB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfbXBoLFxyXG4gIH07XHJcblxyXG4gIHdlYXRoZXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jb25kaXRpb259YDtcclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNpdHl9YDtcclxuICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai50aW1lfWA7XHJcbiAgY3VycmVudERheURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5kZWdyZWVzQ2Vsc2l1c30gQ2A7XHJcbiAgdG9kYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtjdXJyZW50V2VhdGhlck9iai50b2RheVdlYXRoZXJJY29ufWA7XHJcbiAgZmVlbHNMaWtlRGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmZlZWxzTGlrZUN9IENgO1xyXG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmh1bWlkaXR5fSAlYDtcclxuICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jaGFuY2VPZlJhaW59ICVgO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLndpbmRTcGVlZH0ga20vaGA7XHJcbn1cclxuXHJcbmRpc3BsYXlDdXJyZW50V2VhdGhlckxvY2F0aW9uKCk7XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzQ3VycmVudFdlYXRoZXJKU09OKHdlYXRoZXJEYXRhKSB7XHJcbiAgY3VycmVudFdlYXRoZXJPYmogPSB7XHJcbiAgICBjb25kaXRpb246IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXHJcbiAgICBjaXR5OiB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lLFxyXG4gICAgdGltZTogd2VhdGhlckRhdGEubG9jYXRpb24ubG9jYWx0aW1lLFxyXG4gICAgZGVncmVlc0NlbHNpdXM6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jLFxyXG4gICAgZGVncmVlc0ZhaHJlbmhlaXQ6IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mLFxyXG4gICAgdG9kYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbixcclxuICAgIGZlZWxzTGlrZUM6IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MsXHJcbiAgICBmZWVsc0xpa2VGOiB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mLFxyXG4gICAgaHVtaWRpdHk6IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHksXHJcbiAgICBjaGFuY2VPZlJhaW46IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbixcclxuICAgIHdpbmRTcGVlZDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCxcclxuICAgIHdpbmRTcGVlZE1waDogd2VhdGhlckRhdGEuY3VycmVudC53aW5kX21waCxcclxuICB9O1xyXG4gIHJldHVybiBjdXJyZW50V2VhdGhlck9iajtcclxufVxyXG5cclxubGV0IGZvcmVjYXN0V2VhdGhlck9iaiA9IHt9O1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0Z1bGxXZWVrV2VhdGhlcih3ZWF0aGVyRGF0YSkge1xyXG4gIGZvcmVjYXN0V2VhdGhlck9iaiA9IHtcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICBtb25kYXlXZWF0aGVyQ29uZGl0aW9uOlxyXG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICBtb25kYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2MsXHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgdHVlc2RheVdlYXRoZXJDb25kaXRpb246XHJcbiAgICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5jb25kaXRpb24udGV4dCxcclxuICAgIHR1ZXNkYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIHdlZG5lc2RheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIHdlZG5lc2RheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9mLFxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICB3ZWRuZXNkYXlXZWF0aGVyQ29uZGl0aW9uOlxyXG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLnRleHQsXHJcbiAgICB3ZWRuZXNkYXlXZWF0aGVySWNvbjpcclxuICAgICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG4gIH07XHJcbiAgcmV0dXJuIGZvcmVjYXN0V2VhdGhlck9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUN1cnJlbnRXZWF0aGVyKCkge1xyXG4gIHdlYXRoZXJDb25kaXRpb24udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jb25kaXRpb259YDtcclxuICB0b2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLnRvZGF5V2VhdGhlckljb259YDtcclxuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmNpdHl9YDtcclxuICBsb2NhbFRpbWUudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai50aW1lfWA7XHJcbiAgKGN1cnJlbnREYXlEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZGVncmVlc0NlbHNpdXN9IENgKSxcclxuICAgIChmZWVsc0xpa2VEZWdyZWVzLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFdlYXRoZXJPYmouZmVlbHNMaWtlQ30gQ2ApO1xyXG4gIGh1bWlkaXR5UGVyY2VudC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmh1bWlkaXR5fSAlYDtcclxuICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5jaGFuY2VPZlJhaW59ICVgO1xyXG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLndpbmRTcGVlZH0ga20vaGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoKSB7XHJcbiAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICBtb25kYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgdHVlc2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5V2VhdGhlckljb259YDtcclxufVxyXG5cclxuLy8gVE9ETzogc2VwYXJhdGUgdGhpcyBmdW5jdGlvbiwgaW4gdHdvIGZ1bmN0aW9uc1xyXG4vLyB0aGUgZmlyc3Qgb25lIHdvdWxkIHByb2Nlc3MgdGhlIGRhdGFcclxuLy8gdGhlIHNlY29uZCB3b3VsZCBkaXNwbGF5IHRoZSBjdXJyZW50IHdlYXRoZXJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXJMb2NhdGlvbigpIHtcclxuICBjb25zdCBnZXRJcERhdGEgPSBhd2FpdCBmZXRjaFVzZXJMb2NhdGlvbklQKCk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXRyaWV2ZVdlYXRoZXJMb2NhdGlvbkNpdHkoZ2V0SXBEYXRhLmNpdHkpO1xyXG4gIGZvcmVjYXN0V2VhdGhlck9iaiA9IHtcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wQzogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5Lm1pbnRlbXBfYyxcclxuICAgIG1vbmRheUFmdGVybm9vblRlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWF4dGVtcF9jLFxyXG4gICAgbW9uZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkubWludGVtcF9mLFxyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5tYXh0ZW1wX2YsXHJcbiAgICBtb25kYXlXZWF0aGVySWNvbjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi5pY29uLFxyXG5cclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5taW50ZW1wX2MsXHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWludGVtcF9mLFxyXG4gICAgdHVlc2RheUFmdGVybm9vblRlbXBGOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkubWF4dGVtcF9mLFxyXG4gICAgdHVlc2RheVdlYXRoZXJJY29uOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsxXS5kYXkuY29uZGl0aW9uLmljb24sXHJcblxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXBDOiB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkubWludGVtcF9jLFxyXG4gICAgd2VkbmVzZGF5QWZ0ZXJub29uVGVtcEM6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5tYXh0ZW1wX2MsXHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcEY6IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzJdLmRheS5taW50ZW1wX2YsXHJcbiAgICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wRjogd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5Lm1heHRlbXBfZixcclxuICAgIHdlZG5lc2RheVdlYXRoZXJJY29uOlxyXG4gICAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXkuY29uZGl0aW9uLmljb24sXHJcbiAgfTtcclxuXHJcbiAgbW9uZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICBtb25kYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgdHVlc2RheVdlYXRoZXJJY29uLnNyYyA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5V2VhdGhlckljb259YDtcclxuXHJcbiAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLndlZG5lc2RheUFmdGVybm9vblRlbXBDfSBDYDtcclxuICB3ZWRuZXNkYXlXZWF0aGVySWNvbi5zcmMgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5V2VhdGhlckljb259YDtcclxufVxyXG5cclxuZGlzcGxheUZvcmVjYXN0V2VhdGhlckxvY2F0aW9uKCk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDdG9GKCkge1xyXG4gIGlmIChcclxuICAgIGN1cnJlbnREYXlEZWdyZWVzLnRleHRDb250ZW50ID09PSBgJHtjdXJyZW50V2VhdGhlck9iai5kZWdyZWVzQ2Vsc2l1c30gQ2AgJiZcclxuICAgIGZlZWxzTGlrZURlZ3JlZXMudGV4dENvbnRlbnQgPT09IGAke2N1cnJlbnRXZWF0aGVyT2JqLmZlZWxzTGlrZUN9IENgICYmXHJcbiAgICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPT09IGAke2N1cnJlbnRXZWF0aGVyT2JqLndpbmRTcGVlZH0ga20vaGAgJiZcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoubW9uZGF5TW9ybmluZ1RlbXBDfSBDYCAmJlxyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9PT1cclxuICAgICAgYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBDfSBDYCAmJlxyXG4gICAgdHVlc2RheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheU1vcm5pbmdUZW1wQ30gQ2AgJiZcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheUFmdGVybm9vblRlbXBDfSBDYCAmJlxyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPT09XHJcbiAgICAgIGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlNb3JuaW5nVGVtcEN9IENgICYmXHJcbiAgICB3ZWRuZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID09PVxyXG4gICAgICBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5QWZ0ZXJub29uVGVtcEN9IENgXHJcbiAgKSB7XHJcbiAgICBjdXJyZW50RGF5RGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmRlZ3JlZXNGYWhyZW5oZWl0fSBGYDtcclxuICAgIGZlZWxzTGlrZURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5mZWVsc0xpa2VGfSBGYDtcclxuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLndpbmRTcGVlZE1waH0gbXBoYDtcclxuICAgIG1vbmRheU1vcm5pbmdUZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheU1vcm5pbmdUZW1wRn0gRmA7XHJcbiAgICBtb25kYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLm1vbmRheUFmdGVybm9vblRlbXBGfSBGYDtcclxuICAgIHR1ZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5TW9ybmluZ1RlbXBGfSBGYDtcclxuICAgIHR1ZXNkYXlBZnRlcm5vb25UZW1wLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3RXZWF0aGVyT2JqLnR1ZXNkYXlBZnRlcm5vb25UZW1wRn0gRmA7XHJcbiAgICB3ZWRuZXNkYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai53ZWRuZXNkYXlNb3JuaW5nVGVtcEZ9IEZgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50RGF5RGVncmVlcy50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLmRlZ3JlZXNDZWxzaXVzfSBDYDtcclxuICAgIGZlZWxzTGlrZURlZ3JlZXMudGV4dENvbnRlbnQgPSBgJHtjdXJyZW50V2VhdGhlck9iai5mZWVsc0xpa2VDfSBDYDtcclxuICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRXZWF0aGVyT2JqLndpbmRTcGVlZH0ga20vaGA7XHJcbiAgICBtb25kYXlNb3JuaW5nVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlNb3JuaW5nVGVtcEN9IENgO1xyXG4gICAgbW9uZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai5tb25kYXlBZnRlcm5vb25UZW1wQ30gQ2A7XHJcbiAgICB0dWVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoudHVlc2RheU1vcm5pbmdUZW1wQ30gQ2A7XHJcbiAgICB0dWVzZGF5QWZ0ZXJub29uVGVtcC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0V2VhdGhlck9iai50dWVzZGF5QWZ0ZXJub29uVGVtcEN9IENgO1xyXG4gICAgd2VkbmVzZGF5TW9ybmluZ1RlbXAudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFdlYXRoZXJPYmoud2VkbmVzZGF5TW9ybmluZ1RlbXBDfSBDYDtcclxuICB9XHJcbn1cclxuXHJcbnRvZ2dsZUZyb21DdG9GLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVDdG9GKTtcclxuXHJcbndlYXRoZXJGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgYXN5bmMgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCBmZXRjaFVzZXJMb2NhdGlvbigpO1xyXG4gIHByb2Nlc3NDdXJyZW50V2VhdGhlckpTT04od2VhdGhlckRhdGEpO1xyXG4gIHByb2Nlc3NGdWxsV2Vla1dlYXRoZXIod2VhdGhlckRhdGEpO1xyXG4gIGRpc3BsYXlDdXJyZW50V2VhdGhlcigpO1xyXG4gIGRpc3BsYXlGb3JlY2FzdFdlYXRoZXIoKTtcclxuICB3ZWF0aGVyRm9ybS5yZXNldCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbIndlYXRoZXJGb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VhcmNoaW5nTG9jYXRpb24iLCJnZXRFbGVtZW50QnlJZCIsInRvZ2dsZUZyb21DdG9GIiwid2VhdGhlckNvbmRpdGlvbiIsImNpdHlOYW1lIiwibG9jYWxUaW1lIiwiY3VycmVudERheURlZ3JlZXMiLCJ0b2RheVdlYXRoZXJJY29uIiwiZmVlbHNMaWtlRGVncmVlcyIsImh1bWlkaXR5UGVyY2VudCIsImNoYW5jZU9mUmFpbiIsIndpbmRTcGVlZCIsIm1vbmRheU1vcm5pbmdUZW1wIiwibW9uZGF5QWZ0ZXJub29uVGVtcCIsIm1vbmRheVdlYXRoZXJJY29uIiwidHVlc2RheU1vcm5pbmdUZW1wIiwidHVlc2RheUFmdGVybm9vblRlbXAiLCJ0dWVzZGF5V2VhdGhlckljb24iLCJ3ZWRuZXNkYXlNb3JuaW5nVGVtcCIsIndlZG5lc2RheUFmdGVybm9vblRlbXAiLCJ3ZWRuZXNkYXlXZWF0aGVySWNvbiIsImZldGNoVXNlckxvY2F0aW9uIiwicmVzcG9uc2UiLCJmZXRjaCIsInZhbHVlIiwibW9kZSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXJMb2NhdGlvbklQIiwidGhlbiIsInJldHJpZXZlV2VhdGhlckxvY2F0aW9uQ2l0eSIsImN1cnJlbnRXZWF0aGVyT2JqIiwiZGlzcGxheUN1cnJlbnRXZWF0aGVyTG9jYXRpb24iLCJnZXRJcERhdGEiLCJ3ZWF0aGVyRGF0YSIsImNpdHkiLCJjb25kaXRpb24iLCJjdXJyZW50IiwidGV4dCIsImxvY2F0aW9uIiwibmFtZSIsInRpbWUiLCJsb2NhbHRpbWUiLCJkZWdyZWVzQ2Vsc2l1cyIsInRlbXBfYyIsImRlZ3JlZXNGYWhyZW5oZWl0IiwidGVtcF9mIiwiaWNvbiIsImZlZWxzTGlrZUMiLCJmZWVsc2xpa2VfYyIsImZlZWxzTGlrZUYiLCJmZWVsc2xpa2VfZiIsImh1bWlkaXR5IiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImRheSIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwid2luZF9rcGgiLCJ3aW5kU3BlZWRNcGgiLCJ3aW5kX21waCIsInRleHRDb250ZW50Iiwic3JjIiwicHJvY2Vzc0N1cnJlbnRXZWF0aGVySlNPTiIsImZvcmVjYXN0V2VhdGhlck9iaiIsInByb2Nlc3NGdWxsV2Vla1dlYXRoZXIiLCJtb25kYXlNb3JuaW5nVGVtcEMiLCJtaW50ZW1wX2MiLCJtb25kYXlBZnRlcm5vb25UZW1wQyIsIm1heHRlbXBfYyIsIm1vbmRheU1vcm5pbmdUZW1wRiIsIm1pbnRlbXBfZiIsIm1vbmRheUFmdGVybm9vblRlbXBGIiwibWF4dGVtcF9mIiwibW9uZGF5V2VhdGhlckNvbmRpdGlvbiIsInR1ZXNkYXlNb3JuaW5nVGVtcEMiLCJ0dWVzZGF5QWZ0ZXJub29uVGVtcEMiLCJ0dWVzZGF5TW9ybmluZ1RlbXBGIiwidHVlc2RheUFmdGVybm9vblRlbXBGIiwidHVlc2RheVdlYXRoZXJDb25kaXRpb24iLCJ3ZWRuZXNkYXlNb3JuaW5nVGVtcEMiLCJ3ZWRuZXNkYXlBZnRlcm5vb25UZW1wQyIsIndlZG5lc2RheU1vcm5pbmdUZW1wRiIsIndlZG5lc2RheUFmdGVybm9vblRlbXBGIiwid2VkbmVzZGF5V2VhdGhlckNvbmRpdGlvbiIsImRpc3BsYXlDdXJyZW50V2VhdGhlciIsImRpc3BsYXlGb3JlY2FzdFdlYXRoZXIiLCJkaXNwbGF5Rm9yZWNhc3RXZWF0aGVyTG9jYXRpb24iLCJ0b2dnbGVDdG9GIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==