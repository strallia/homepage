/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf */ "./src/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/Roboto-Regular.ttf */ "./src/assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Playfair';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto';
}

html {
  font-size: 16px;
}

body {
  padding: 1rem;
  display: grid;
  row-gap: 3rem;
  margin: 0 auto 0;
  position: relative;
  justify-content: center;
}
body > * {
  max-width: 1000px;
}
@media (width >= 500px) {
  body {
    padding: 1rem 2rem;
  }
}

/* HEADER */
.header {
  display: grid;
  gap: 10px;
  justify-items: center;
}
header::before {
  content: '';
  height: 230px;
  background-color: cornflowerblue;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform-origin: bottom left;
  transform: skewY(-18deg);
  z-index: -1;
}
.header__image-container {
  position: relative;
}
.header__image {
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
.header__name {
  color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  min-width: max-content;
  bottom: 5px;
  text-shadow: 3px 3px 8px rgba(0, 0, 0, 1);
}
.header__title {
  padding-top: 10px;
}
.header__para {
  color: gray;
}
.header__icons-container {
  display: flex;
  gap: 15px;
  justify-content: center;
}
@media (500px <= width <=1000px) {
  .header {
    display: block;
    background-color: white;
    margin: 5rem 4rem 0 4rem;
    padding: 0 1rem;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  }
  header::before {
    height: 270px;
    transform: skewY(-10deg);
  }
  .header__image-container {
    float: left;
    margin-right: 1rem;
    height: 140px;
  }
  .header__image {
    margin-left: -50px;
    margin-top: -70px;
  }
  .header__name {
    left: -50%;
    top: -40%;
    right: -110%;
    transform: translate(50%);
  }
  .header__title {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 15px;
  }
  .header__icons-container {
    padding-top: 25px;
    padding-bottom: 1rem;
    justify-content: flex-end;
  }
}
@media (width > 1000px) {
  .header {
    margin-top: 3rem;
    padding-right: 2rem;
    background-color: white;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
    height: 220px;
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(3, min-content);
    align-items: center;
    align-content: center;
    gap: 0;
  }
  header::before {
    transform: skewY(-7deg);
  }
  .header__image-container {
    grid-row: 1/4;
    margin-right: 2rem;
  }
  .header__image {
    width: 250px;
  }
  .header__title {
    align-self: flex-end;
  }
  .header__icons-container {
    align-self: flex-start;
    justify-self: end;
  }
}

/* PROJECTS */
.projects__title {
  text-align: center;
}
.projects {
  display: grid;
  gap: 20px;
}
.projects__cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
}
.card {
  background-color: cornflowerblue;
  min-width: 100%;
  border-radius: 5px;
  height: 330px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);

  display: grid;
  grid-template-rows: 200px 1fr;
}
.card__details-container {
  background-color: whitesmoke;
  padding: 15px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: min-content 1fr;
  gap: 10px;
}
.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__description {
  grid-column: 1/3;
}
.card__icons-container {
  display: flex;
  gap: 10px;
}
@media (width >= 500px) {
  .projects__title {
    text-align: left;
  }
}

/* FOOTER */
footer {
  margin: 0 -1rem -1rem -1rem;
  background-color: cornflowerblue;
}
.footer-wrapper {
  display: grid;
  gap: 30px;
  margin-top: 1.5rem;
}
.contact-info {
  color: white;
  margin-left: 1rem;
  margin-right: 1rem;

  display: grid;
  gap: 20px;
  grid-template-rows: repeat(6, min-content);
  align-self: center;
}
.contact-info__title {
  text-align: center;
}
.contact-info__icons-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.contact-info__headshot {
  min-width: 100%;
}
.contact-info__phone,
.contact-info__email {
  display: flex;
  align-items: center;
  gap: 10px;
}
footer .icon {
  filter: invert(1);
}
@media (width >=500px) {
  footer {
    background-color: transparent;
  }
  footer::before {
    content: '';
    background-color: cornflowerblue;
    height: 360px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin-bottom: -1rem;
  }
  .footer-wrapper {
    grid-template-columns: 1fr 1fr;
    margin: 0 -2rem -1rem -2rem;
    padding: 0 3rem;
  }
  .contact-info__headshot {
    width: 100px;
    margin: 2rem 0;
    height: 300px;
    object-fit: cover;
    object-position: 50% 10%;
  }
}

/* FONTS */
h1,
h2,
h3 {
  font-family: 'Playfair';
}

/* IMAGES */
img {
  width: 200px;
}
.icon {
  width: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,uBAAuB;EACvB,4CAAgE;AAClE;;AAEA;EACE,qBAAqB;EACrB,4CAA6C;AAC/C;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,uBAAuB;AACzB;AACA;EACE,iBAAiB;AACnB;AACA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA,WAAW;AACX;EACE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,6BAA6B;EAC7B,wBAAwB;EACxB,WAAW;AACb;AACA;EACE,kBAAkB;AACpB;AACA;EACE,2CAA2C;AAC7C;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,0BAA0B;EAC1B,sBAAsB;EACtB,WAAW;EACX,yCAAyC;AAC3C;AACA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;AACA;EACE;IACE,cAAc;IACd,uBAAuB;IACvB,wBAAwB;IACxB,eAAe;IACf,2CAA2C;EAC7C;EACA;IACE,aAAa;IACb,wBAAwB;EAC1B;EACA;IACE,WAAW;IACX,kBAAkB;IAClB,aAAa;EACf;EACA;IACE,kBAAkB;IAClB,iBAAiB;EACnB;EACA;IACE,UAAU;IACV,SAAS;IACT,YAAY;IACZ,yBAAyB;EAC3B;EACA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;EACtB;EACA;IACE,iBAAiB;IACjB,oBAAoB;IACpB,yBAAyB;EAC3B;AACF;AACA;EACE;IACE,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,2CAA2C;IAC3C,aAAa;IACb,+BAA+B;IAC/B,0CAA0C;IAC1C,mBAAmB;IACnB,qBAAqB;IACrB,MAAM;EACR;EACA;IACE,uBAAuB;EACzB;EACA;IACE,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,YAAY;EACd;EACA;IACE,oBAAoB;EACtB;EACA;IACE,sBAAsB;IACtB,iBAAiB;EACnB;AACF;;AAEA,aAAa;AACb;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;AACX;AACA;EACE,gCAAgC;EAChC,eAAe;EACf,kBAAkB;EAClB,aAAa;EACb,2CAA2C;;EAE3C,aAAa;EACb,6BAA6B;AAC/B;AACA;EACE,4BAA4B;EAC5B,aAAa;;EAEb,aAAa;EACb,+BAA+B;EAC/B,mCAAmC;EACnC,SAAS;AACX;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,SAAS;AACX;AACA;EACE;IACE,gBAAgB;EAClB;AACF;;AAEA,WAAW;AACX;EACE,2BAA2B;EAC3B,gCAAgC;AAClC;AACA;EACE,aAAa;EACb,SAAS;EACT,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;;EAElB,aAAa;EACb,SAAS;EACT,0CAA0C;EAC1C,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,SAAS;EACT,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;AACA;EACE,iBAAiB;AACnB;AACA;EACE;IACE,6BAA6B;EAC/B;EACA;IACE,WAAW;IACX,gCAAgC;IAChC,aAAa;IACb,kBAAkB;IAClB,OAAO;IACP,QAAQ;IACR,SAAS;IACT,WAAW;IACX,oBAAoB;EACtB;EACA;IACE,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;EACjB;EACA;IACE,YAAY;IACZ,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,wBAAwB;EAC1B;AACF;;AAEA,UAAU;AACV;;;EAGE,uBAAuB;AACzB;;AAEA,WAAW;AACX;EACE,YAAY;AACd;AACA;EACE,WAAW;AACb","sourcesContent":["@font-face {\n  font-family: 'Playfair';\n  src: url('./assets/fonts/PlayfairDisplay-VariableFont_wght.ttf');\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url('./assets/fonts/Roboto-Regular.ttf');\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: 'Roboto';\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  padding: 1rem;\n  display: grid;\n  row-gap: 3rem;\n  margin: 0 auto 0;\n  position: relative;\n  justify-content: center;\n}\nbody > * {\n  max-width: 1000px;\n}\n@media (width >= 500px) {\n  body {\n    padding: 1rem 2rem;\n  }\n}\n\n/* HEADER */\n.header {\n  display: grid;\n  gap: 10px;\n  justify-items: center;\n}\nheader::before {\n  content: '';\n  height: 230px;\n  background-color: cornflowerblue;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  transform-origin: bottom left;\n  transform: skewY(-18deg);\n  z-index: -1;\n}\n.header__image-container {\n  position: relative;\n}\n.header__image {\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n}\n.header__name {\n  color: white;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%);\n  min-width: max-content;\n  bottom: 5px;\n  text-shadow: 3px 3px 8px rgba(0, 0, 0, 1);\n}\n.header__title {\n  padding-top: 10px;\n}\n.header__para {\n  color: gray;\n}\n.header__icons-container {\n  display: flex;\n  gap: 15px;\n  justify-content: center;\n}\n@media (500px <= width <=1000px) {\n  .header {\n    display: block;\n    background-color: white;\n    margin: 5rem 4rem 0 4rem;\n    padding: 0 1rem;\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n  }\n  header::before {\n    height: 270px;\n    transform: skewY(-10deg);\n  }\n  .header__image-container {\n    float: left;\n    margin-right: 1rem;\n    height: 140px;\n  }\n  .header__image {\n    margin-left: -50px;\n    margin-top: -70px;\n  }\n  .header__name {\n    left: -50%;\n    top: -40%;\n    right: -110%;\n    transform: translate(50%);\n  }\n  .header__title {\n    text-align: center;\n    padding-top: 40px;\n    padding-bottom: 15px;\n  }\n  .header__icons-container {\n    padding-top: 25px;\n    padding-bottom: 1rem;\n    justify-content: flex-end;\n  }\n}\n@media (width > 1000px) {\n  .header {\n    margin-top: 3rem;\n    padding-right: 2rem;\n    background-color: white;\n    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n    height: 220px;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: repeat(3, min-content);\n    align-items: center;\n    align-content: center;\n    gap: 0;\n  }\n  header::before {\n    transform: skewY(-7deg);\n  }\n  .header__image-container {\n    grid-row: 1/4;\n    margin-right: 2rem;\n  }\n  .header__image {\n    width: 250px;\n  }\n  .header__title {\n    align-self: flex-end;\n  }\n  .header__icons-container {\n    align-self: flex-start;\n    justify-self: end;\n  }\n}\n\n/* PROJECTS */\n.projects__title {\n  text-align: center;\n}\n.projects {\n  display: grid;\n  gap: 20px;\n}\n.projects__cards-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  gap: 40px;\n}\n.card {\n  background-color: cornflowerblue;\n  min-width: 100%;\n  border-radius: 5px;\n  height: 330px;\n  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);\n\n  display: grid;\n  grid-template-rows: 200px 1fr;\n}\n.card__details-container {\n  background-color: whitesmoke;\n  padding: 15px;\n\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-template-rows: min-content 1fr;\n  gap: 10px;\n}\n.card__image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.card__description {\n  grid-column: 1/3;\n}\n.card__icons-container {\n  display: flex;\n  gap: 10px;\n}\n@media (width >= 500px) {\n  .projects__title {\n    text-align: left;\n  }\n}\n\n/* FOOTER */\nfooter {\n  margin: 0 -1rem -1rem -1rem;\n  background-color: cornflowerblue;\n}\n.footer-wrapper {\n  display: grid;\n  gap: 30px;\n  margin-top: 1.5rem;\n}\n.contact-info {\n  color: white;\n  margin-left: 1rem;\n  margin-right: 1rem;\n\n  display: grid;\n  gap: 20px;\n  grid-template-rows: repeat(6, min-content);\n  align-self: center;\n}\n.contact-info__title {\n  text-align: center;\n}\n.contact-info__icons-container {\n  display: flex;\n  gap: 20px;\n  justify-content: center;\n}\n.contact-info__headshot {\n  min-width: 100%;\n}\n.contact-info__phone,\n.contact-info__email {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\nfooter .icon {\n  filter: invert(1);\n}\n@media (width >=500px) {\n  footer {\n    background-color: transparent;\n  }\n  footer::before {\n    content: '';\n    background-color: cornflowerblue;\n    height: 360px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    z-index: -1;\n    margin-bottom: -1rem;\n  }\n  .footer-wrapper {\n    grid-template-columns: 1fr 1fr;\n    margin: 0 -2rem -1rem -2rem;\n    padding: 0 3rem;\n  }\n  .contact-info__headshot {\n    width: 100px;\n    margin: 2rem 0;\n    height: 300px;\n    object-fit: cover;\n    object-position: 50% 10%;\n  }\n}\n\n/* FONTS */\nh1,\nh2,\nh3 {\n  font-family: 'Playfair';\n}\n\n/* IMAGES */\nimg {\n  width: 200px;\n}\n.icon {\n  width: 20px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf":
/*!****************************************************************!*\
  !*** ./src/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf46a6bcddc9999a295e.ttf";

/***/ }),

/***/ "./src/assets/fonts/Roboto-Regular.ttf":
/*!*********************************************!*\
  !*** ./src/assets/fonts/Roboto-Regular.ttf ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFMQUF1RTtBQUNuSCw0Q0FBNEMsK0lBQW9EO0FBQ2hHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFB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Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9QbGF5ZmFpckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHJvdy1nYXA6IDNyZW07XG4gIG1hcmdpbjogMCBhdXRvIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5ib2R5ID4gKiB7XG4gIG1heC13aWR0aDogMTAwMHB4O1xufVxuQG1lZGlhICh3aWR0aCA+PSA1MDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIH1cbn1cblxuLyogSEVBREVSICovXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5oZWFkZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDIzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcbiAgdHJhbnNmb3JtOiBza2V3WSgtMThkZWcpO1xuICB6LWluZGV4OiAtMTtcbn1cbi5oZWFkZXJfX2ltYWdlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5oZWFkZXJfX2ltYWdlIHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cbi5oZWFkZXJfX25hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcbiAgYm90dG9tOiA1cHg7XG4gIHRleHQtc2hhZG93OiAzcHggM3B4IDhweCByZ2JhKDAsIDAsIDAsIDEpO1xufVxuLmhlYWRlcl9fdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5oZWFkZXJfX3BhcmEge1xuICBjb2xvcjogZ3JheTtcbn1cbi5oZWFkZXJfX2ljb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5AbWVkaWEgKDUwMHB4IDw9IHdpZHRoIDw9MTAwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNXJlbSA0cmVtIDAgNHJlbTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuICBoZWFkZXI6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0xMGRlZyk7XG4gIH1cbiAgLmhlYWRlcl9faW1hZ2UtY29udGFpbmVyIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxuICAuaGVhZGVyX19pbWFnZSB7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICB9XG4gIC5oZWFkZXJfX25hbWUge1xuICAgIGxlZnQ6IC01MCU7XG4gICAgdG9wOiAtNDAlO1xuICAgIHJpZ2h0OiAtMTEwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUpO1xuICB9XG4gIC5oZWFkZXJfX3RpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIH1cbiAgLmhlYWRlcl9faWNvbnMtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG59XG5AbWVkaWEgKHdpZHRoID4gMTAwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGhlaWdodDogMjIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW4tY29udGVudCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwO1xuICB9XG4gIGhlYWRlcjo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC03ZGVnKTtcbiAgfVxuICAuaGVhZGVyX19pbWFnZS1jb250YWluZXIge1xuICAgIGdyaWQtcm93OiAxLzQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICB9XG4gIC5oZWFkZXJfX2ltYWdlIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAgLmhlYWRlcl9fdGl0bGUge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG4gIC5oZWFkZXJfX2ljb25zLWNvbnRhaW5lciB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgfVxufVxuXG4vKiBQUk9KRUNUUyAqL1xuLnByb2plY3RzX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9qZWN0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbn1cbi5wcm9qZWN0c19fY2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBnYXA6IDQwcHg7XG59XG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAzMzBweDtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDIwMHB4IDFmcjtcbn1cbi5jYXJkX19kZXRhaWxzLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XG4gIGdhcDogMTBweDtcbn1cbi5jYXJkX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmNhcmRfX2Rlc2NyaXB0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbn1cbi5jYXJkX19pY29ucy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5AbWVkaWEgKHdpZHRoID49IDUwMHB4KSB7XG4gIC5wcm9qZWN0c19fdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cblxuLyogRk9PVEVSICovXG5mb290ZXIge1xuICBtYXJnaW46IDAgLTFyZW0gLTFyZW0gLTFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuLmZvb3Rlci13cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4uY29udGFjdC1pbmZvIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNiwgbWluLWNvbnRlbnQpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29udGFjdC1pbmZvX190aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250YWN0LWluZm9fX2ljb25zLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFjdC1pbmZvX19oZWFkc2hvdCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5jb250YWN0LWluZm9fX3Bob25lLFxuLmNvbnRhY3QtaW5mb19fZW1haWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG59XG5mb290ZXIgLmljb24ge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cbkBtZWRpYSAod2lkdGggPj01MDBweCkge1xuICBmb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIGZvb3Rlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbiAgICBoZWlnaHQ6IDM2MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMXJlbTtcbiAgfVxuICAuZm9vdGVyLXdyYXBwZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBtYXJnaW46IDAgLTJyZW0gLTFyZW0gLTJyZW07XG4gICAgcGFkZGluZzogMCAzcmVtO1xuICB9XG4gIC5jb250YWN0LWluZm9fX2hlYWRzaG90IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IDUwJSAxMCU7XG4gIH1cbn1cblxuLyogRk9OVFMgKi9cbmgxLFxuaDIsXG5oMyB7XG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xufVxuXG4vKiBJTUFHRVMgKi9cbmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cbi5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFnRTtBQUNsRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7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QUFlO0FBQ2pCO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsMkJBQTJCO0lBQzNCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQSxVQUFVO0FBQ1Y7OztFQUdFLHVCQUF1QjtBQUN6Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXInO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL2ZvbnRzL1BsYXlmYWlyRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYnKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcm93LWdhcDogM3JlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuYm9keSA+ICoge1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxufVxcbkBtZWRpYSAod2lkdGggPj0gNTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxuICB9XFxufVxcblxcbi8qIEhFQURFUiAqL1xcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDIzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG4gIHRyYW5zZm9ybTogc2tld1koLTE4ZGVnKTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uaGVhZGVyX19pbWFnZS1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uaGVhZGVyX19pbWFnZSB7XFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4uaGVhZGVyX19uYW1lIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xcbiAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gIGJvdHRvbTogNXB4O1xcbiAgdGV4dC1zaGFkb3c6IDNweCAzcHggOHB4IHJnYmEoMCwgMCwgMCwgMSk7XFxufVxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG4uaGVhZGVyX19wYXJhIHtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG4uaGVhZGVyX19pY29ucy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgKDUwMHB4IDw9IHdpZHRoIDw9MTAwMHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDVyZW0gNHJlbSAwIDRyZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIH1cXG4gIGhlYWRlcjo6YmVmb3JlIHtcXG4gICAgaGVpZ2h0OiAyNzBweDtcXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtMTBkZWcpO1xcbiAgfVxcbiAgLmhlYWRlcl9faW1hZ2UtY29udGFpbmVyIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxNDBweDtcXG4gIH1cXG4gIC5oZWFkZXJfX2ltYWdlIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAtNzBweDtcXG4gIH1cXG4gIC5oZWFkZXJfX25hbWUge1xcbiAgICBsZWZ0OiAtNTAlO1xcbiAgICB0b3A6IC00MCU7XFxuICAgIHJpZ2h0OiAtMTEwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlKTtcXG4gIH1cXG4gIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICB9XFxuICAuaGVhZGVyX19pY29ucy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB9XFxufVxcbkBtZWRpYSAod2lkdGggPiAxMDAwcHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgaGVpZ2h0OiAyMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgbWluLWNvbnRlbnQpO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMDtcXG4gIH1cXG4gIGhlYWRlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBza2V3WSgtN2RlZyk7XFxuICB9XFxuICAuaGVhZGVyX19pbWFnZS1jb250YWluZXIge1xcbiAgICBncmlkLXJvdzogMS80O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxuICB9XFxuICAuaGVhZGVyX19pbWFnZSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gIH1cXG4gIC5oZWFkZXJfX3RpdGxlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICB9XFxuICAuaGVhZGVyX19pY29ucy1jb250YWluZXIge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIH1cXG59XFxuXFxuLyogUFJPSkVDVFMgKi9cXG4ucHJvamVjdHNfX3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxufVxcbi5wcm9qZWN0c19fY2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBnYXA6IDQwcHg7XFxufVxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAzMzBweDtcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMDBweCAxZnI7XFxufVxcbi5jYXJkX19kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMTVweDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcbi5jYXJkX19pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uY2FyZF9fZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG59XFxuLmNhcmRfX2ljb25zLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5AbWVkaWEgKHdpZHRoID49IDUwMHB4KSB7XFxuICAucHJvamVjdHNfX3RpdGxlIHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIH1cXG59XFxuXFxuLyogRk9PVEVSICovXFxuZm9vdGVyIHtcXG4gIG1hcmdpbjogMCAtMXJlbSAtMXJlbSAtMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcbn1cXG4uZm9vdGVyLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuLmNvbnRhY3QtaW5mbyB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg2LCBtaW4tY29udGVudCk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5jb250YWN0LWluZm9fX3RpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtaW5mb19faWNvbnMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmNvbnRhY3QtaW5mb19faGVhZHNob3Qge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbn1cXG4uY29udGFjdC1pbmZvX19waG9uZSxcXG4uY29udGFjdC1pbmZvX19lbWFpbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuZm9vdGVyIC5pY29uIHtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5AbWVkaWEgKHdpZHRoID49NTAwcHgpIHtcXG4gIGZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgZm9vdGVyOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuICAgIGhlaWdodDogMzYwcHg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xcmVtO1xcbiAgfVxcbiAgLmZvb3Rlci13cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBtYXJnaW46IDAgLTJyZW0gLTFyZW0gLTJyZW07XFxuICAgIHBhZGRpbmc6IDAgM3JlbTtcXG4gIH1cXG4gIC5jb250YWN0LWluZm9fX2hlYWRzaG90IHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG9iamVjdC1wb3NpdGlvbjogNTAlIDEwJTtcXG4gIH1cXG59XFxuXFxuLyogRk9OVFMgKi9cXG5oMSxcXG5oMixcXG5oMyB7XFxuICBmb250LWZhbWlseTogJ1BsYXlmYWlyJztcXG59XFxuXFxuLyogSU1BR0VTICovXFxuaW1nIHtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuLmljb24ge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==