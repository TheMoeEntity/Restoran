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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": function() { return /* binding */ animate; },\n/* harmony export */   \"slide\": function() { return /* binding */ slide; }\n/* harmony export */ });\nlet height = window.innerHeight;\nfunction animate(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150, galleryref = arguments.length > 2 ? arguments[2] : void 0, appear = arguments.length > 3 ? arguments[3] : void 0;\n    let widths = container.current.children;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.opacity = \"1\";\n            child.style.transform = \"scale(1) translateY(0)\";\n        }\n    }\n    const reveal = ()=>{\n        let counter = 0;\n        const interval = setInterval(()=>{\n            if (counter == 3) {\n                clearInterval(interval);\n                setTimeout(()=>{\n                    galleryref.current.parentNode.parentNode.children[1].classList.add(appear);\n                }, 700);\n            }\n            galleryref.current.children[counter].classList.add(appear);\n            counter++;\n        }, 550);\n    };\n    if (galleryref.current.getBoundingClientRect().top < height - revealpoint) {\n        reveal();\n    }\n}\nfunction slide(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150, slide = arguments.length > 2 ? arguments[2] : void 0;\n    let widths = container.current.children;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.transform = \"translateY(0)\";\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBSUEsU0FBU0MsT0FBT0MsV0FBVztBQUN4QixTQUFTQyxRQUFRQyxTQUFTLEVBQW9DO1FBQW5DQyxjQUFBQSxpRUFBWSxHQUFHLEVBQUNDLDJEQUFXQztJQUd6RCxJQUFJQyxTQUFTSixVQUFVSyxPQUFPLENBQUNDLFFBQVE7SUFFdkMsS0FBSyxNQUFNQyxTQUFTSCxPQUFRO1FBRXhCLElBQUlJLFlBQVlELE1BQU1FLHFCQUFxQixHQUFHQyxHQUFHO1FBQ2pELElBQUlGLFlBQVlaLFNBQVNLLGFBQWE7WUFDcENNLE1BQU1JLEtBQUssQ0FBQ0MsT0FBTyxHQUFFO1lBQ3JCTCxNQUFNSSxLQUFLLENBQUNFLFNBQVMsR0FBRztRQUMxQixDQUFDO0lBQ0w7SUFFQSxNQUFNQyxTQUFTLElBQUs7UUFDbEIsSUFBSUMsVUFBVTtRQUNkLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJRixXQUFXLEdBQUc7Z0JBQ2hCRyxjQUFjRjtnQkFDZEcsV0FBVyxJQUFNO29CQUNmakIsV0FBV0csT0FBTyxDQUFDZSxVQUFVLENBQUNBLFVBQVUsQ0FBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQ2UsU0FBUyxDQUFDQyxHQUFHLENBQUNuQjtnQkFDckUsR0FBRztZQUVMLENBQUM7WUFFQ0QsV0FBV0csT0FBTyxDQUFDQyxRQUFRLENBQUNTLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUNuQjtZQUNuRFk7UUFDSixHQUFHO0lBQ1Q7SUFFQSxJQUFJYixXQUFXRyxPQUFPLENBQUNJLHFCQUFxQixHQUFHQyxHQUFHLEdBQUdkLFNBQVNLLGFBQWE7UUFDekVhO0lBQ0YsQ0FBQztBQUVILENBQUM7QUFFTSxTQUFTUyxNQUFNdkIsU0FBUyxFQUF3QjtRQUF2QkMsY0FBQUEsaUVBQVksR0FBRyxFQUFDc0I7SUFDOUMsSUFBSW5CLFNBQVNKLFVBQVVLLE9BQU8sQ0FBQ0MsUUFBUTtJQUV2QyxLQUFLLE1BQU1DLFNBQVNILE9BQVE7UUFFeEIsSUFBSUksWUFBWUQsTUFBTUUscUJBQXFCLEdBQUdDLEdBQUc7UUFDakQsSUFBSUYsWUFBWVosU0FBU0ssYUFBYTtZQUNwQ00sTUFBTUksS0FBSyxDQUFDRSxTQUFTLEdBQUc7UUFDMUIsQ0FBQztJQUNMO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9IZWxwZXJzL2luZGV4LmpzPzAxNGMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuZXhwb3J0IGZ1bmN0aW9uIGFuaW1hdGUoY29udGFpbmVyLHJldmVhbHBvaW50PTE1MCxnYWxsZXJ5cmVmLGFwcGVhcikge1xuXG5cbiAgICBsZXQgd2lkdGhzID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW5cbiAgXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB3aWR0aHMpIHtcblxuICAgICAgICBsZXQgcmV2ZWFsVG9wID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHtcbiAgICAgICAgICBjaGlsZC5zdHlsZS5vcGFjaXR5PSAnMSdcbiAgICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSkgdHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCByZXZlYWwgPSAoKT0+IHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBnYWxsZXJ5cmVmLmN1cnJlbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoYXBwZWFyKVxuICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2FsbGVyeXJlZi5jdXJyZW50LmNoaWxkcmVuW2NvdW50ZXJdLmNsYXNzTGlzdC5hZGQoYXBwZWFyKVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0sIDU1MCk7XG4gIH1cblxuICBpZiAoZ2FsbGVyeXJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IGhlaWdodCAtIHJldmVhbHBvaW50KSB7XG4gICAgcmV2ZWFsKClcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZShjb250YWluZXIscmV2ZWFscG9pbnQ9MTUwLHNsaWRlKSB7XG4gIGxldCB3aWR0aHMgPSBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblxuICBcbiAgZm9yIChjb25zdCBjaGlsZCBvZiB3aWR0aHMpIHtcblxuICAgICAgbGV0IHJldmVhbFRvcCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIGlmIChyZXZlYWxUb3AgPCBoZWlnaHQgLSByZXZlYWxwb2ludCkge1xuICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSdcbiAgICAgIH0gXG4gIH1cbn0gIl0sIm5hbWVzIjpbImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiYW5pbWF0ZSIsImNvbnRhaW5lciIsInJldmVhbHBvaW50IiwiZ2FsbGVyeXJlZiIsImFwcGVhciIsIndpZHRocyIsImN1cnJlbnQiLCJjaGlsZHJlbiIsImNoaWxkIiwicmV2ZWFsVG9wIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic3R5bGUiLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwicmV2ZWFsIiwiY291bnRlciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2V0VGltZW91dCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzbGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Helpers/index.js\n"));

/***/ })

});