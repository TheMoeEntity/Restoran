"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Helpers/index.js":
/*!**************************!*\
  !*** ./Helpers/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": function() { return /* binding */ animate; }\n/* harmony export */ });\nfunction animate(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150, animation = arguments.length > 2 ? arguments[2] : void 0;\n    let widths = container.current.children;\n    let height = window.innerHeight;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.opacity = \"1\";\n            child.style.transform = \"scale(1) translateY(0)\";\n            child.classList.add(animate);\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxRQUFRQyxTQUFTLEVBQTRCO1FBQTNCQyxjQUFBQSxpRUFBWSxHQUFHLEVBQUNDO0lBRzlDLElBQUlDLFNBQVNILFVBQVVJLE9BQU8sQ0FBQ0MsUUFBUTtJQUN2QyxJQUFJQyxTQUFTQyxPQUFPQyxXQUFXO0lBRS9CLEtBQUssTUFBTUMsU0FBU04sT0FBUTtRQUV4QixJQUFJTyxZQUFZRCxNQUFNRSxxQkFBcUIsR0FBR0MsR0FBRztRQUNqRCxJQUFJRixZQUFZSixTQUFTTCxhQUFhO1lBQ3BDUSxNQUFNSSxLQUFLLENBQUNDLE9BQU8sR0FBRTtZQUNyQkwsTUFBTUksS0FBSyxDQUFDRSxTQUFTLEdBQUc7WUFDeEJOLE1BQU1PLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDbEI7UUFDdEIsQ0FBQztJQUNMO0FBRUosQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9IZWxwZXJzL2luZGV4LmpzPzAxNGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoY29udGFpbmVyLHJldmVhbHBvaW50PTE1MCxhbmltYXRpb24pIHtcblxuXG4gICAgbGV0IHdpZHRocyA9IGNvbnRhaW5lci5jdXJyZW50LmNoaWxkcmVuXG4gICAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB3aWR0aHMpIHtcblxuICAgICAgICBsZXQgcmV2ZWFsVG9wID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHtcbiAgICAgICAgICBjaGlsZC5zdHlsZS5vcGFjaXR5PSAnMSdcbiAgICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSkgdHJhbnNsYXRlWSgwKSdcbiAgICAgICAgICBjaGlsZC5jbGFzc0xpc3QuYWRkKGFuaW1hdGUpXG4gICAgICAgIH0gXG4gICAgfVxuXG59Il0sIm5hbWVzIjpbImFuaW1hdGUiLCJjb250YWluZXIiLCJyZXZlYWxwb2ludCIsImFuaW1hdGlvbiIsIndpZHRocyIsImN1cnJlbnQiLCJjaGlsZHJlbiIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiY2hpbGQiLCJyZXZlYWxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJjbGFzc0xpc3QiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Helpers/index.js\n"));

/***/ })

});