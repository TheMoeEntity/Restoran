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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": function() { return /* binding */ animate; },\n/* harmony export */   \"slide\": function() { return /* binding */ slide; }\n/* harmony export */ });\nfunction animate(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150, galleryref = arguments.length > 2 ? arguments[2] : void 0, appear = arguments.length > 3 ? arguments[3] : void 0;\n    let height = window.innerHeight;\n    let widths = container.current.children;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.opacity = \"1\";\n            child.style.transform = \"scale(1) translateY(0)\";\n        }\n    }\n    const reveal = ()=>{\n        let counter = 0;\n        const interval = setInterval(()=>{\n            if (counter == 3) {\n                clearInterval(interval);\n                setTimeout(()=>{\n                    galleryref.current.parentNode.parentNode.children[1].classList.add(appear);\n                }, 700);\n            }\n            galleryref.current.children[counter].classList.add(appear);\n            counter++;\n        }, 550);\n    };\n    if (galleryref.current.getBoundingClientRect().top < height - revealpoint) {\n        reveal();\n    }\n}\nfunction slide(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150;\n    let widths = container.current.children[1].children;\n    let height = window.innerHeight;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.transform = \"translateY(0)\";\n            child.style.opacity = \"1\";\n        }\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ08sU0FBU0EsUUFBUUMsU0FBUyxFQUFvQztRQUFuQ0MsY0FBQUEsaUVBQVksR0FBRyxFQUFDQywyREFBV0M7SUFFekQsSUFBSUMsU0FBU0MsT0FBT0MsV0FBVztJQUMvQixJQUFJQyxTQUFTUCxVQUFVUSxPQUFPLENBQUNDLFFBQVE7SUFFdkMsS0FBSyxNQUFNQyxTQUFTSCxPQUFRO1FBRXhCLElBQUlJLFlBQVlELE1BQU1FLHFCQUFxQixHQUFHQyxHQUFHO1FBQ2pELElBQUlGLFlBQVlQLFNBQVNILGFBQWE7WUFDcENTLE1BQU1JLEtBQUssQ0FBQ0MsT0FBTyxHQUFFO1lBQ3JCTCxNQUFNSSxLQUFLLENBQUNFLFNBQVMsR0FBRztRQUMxQixDQUFDO0lBQ0w7SUFFQSxNQUFNQyxTQUFTLElBQUs7UUFDbEIsSUFBSUMsVUFBVTtRQUNkLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJRixXQUFXLEdBQUc7Z0JBQ2hCRyxjQUFjRjtnQkFDZEcsV0FBVyxJQUFNO29CQUNmcEIsV0FBV00sT0FBTyxDQUFDZSxVQUFVLENBQUNBLFVBQVUsQ0FBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQ2UsU0FBUyxDQUFDQyxHQUFHLENBQUN0QjtnQkFDckUsR0FBRztZQUVMLENBQUM7WUFFQ0QsV0FBV00sT0FBTyxDQUFDQyxRQUFRLENBQUNTLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUN0QjtZQUNuRGU7UUFDSixHQUFHO0lBQ1Q7SUFFQSxJQUFJaEIsV0FBV00sT0FBTyxDQUFDSSxxQkFBcUIsR0FBR0MsR0FBRyxHQUFHVCxTQUFTSCxhQUFhO1FBQ3pFZ0I7SUFDRixDQUFDO0FBRUgsQ0FBQztBQUVNLFNBQVNTLE1BQU0xQixTQUFTLEVBQWtCO1FBQWpCQyxjQUFBQSxpRUFBWSxHQUFHO0lBQzdDLElBQUlNLFNBQVNQLFVBQVVRLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0EsUUFBUTtJQUNuRCxJQUFJTCxTQUFTQyxPQUFPQyxXQUFXO0lBQy9CLEtBQUssTUFBTUksU0FBU0gsT0FBUTtRQUV4QixJQUFJSSxZQUFZRCxNQUFNRSxxQkFBcUIsR0FBR0MsR0FBRztRQUNqRCxJQUFJRixZQUFZUCxTQUFTSCxhQUFhO1lBQ3BDUyxNQUFNSSxLQUFLLENBQUNFLFNBQVMsR0FBRztZQUN4Qk4sTUFBTUksS0FBSyxDQUFDQyxPQUFPLEdBQUU7UUFDdkIsQ0FBQztJQUNMO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9IZWxwZXJzL2luZGV4LmpzPzAxNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZShjb250YWluZXIscmV2ZWFscG9pbnQ9MTUwLGdhbGxlcnlyZWYsYXBwZWFyKSB7XG5cbiAgICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgbGV0IHdpZHRocyA9IGNvbnRhaW5lci5jdXJyZW50LmNoaWxkcmVuXG4gIFxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygd2lkdGhzKSB7XG5cbiAgICAgICAgbGV0IHJldmVhbFRvcCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgaWYgKHJldmVhbFRvcCA8IGhlaWdodCAtIHJldmVhbHBvaW50KSB7XG4gICAgICAgICAgY2hpbGQuc3R5bGUub3BhY2l0eT0gJzEnXG4gICAgICAgICAgY2hpbGQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpIHRyYW5zbGF0ZVkoMCknXG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY29uc3QgcmV2ZWFsID0gKCk9PiB7XG4gICAgICBsZXQgY291bnRlciA9IDBcbiAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGlmIChjb3VudGVyID09IDMpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgZ2FsbGVyeXJlZi5jdXJyZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZS5jaGlsZHJlblsxXS5jbGFzc0xpc3QuYWRkKGFwcGVhcilcbiAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdhbGxlcnlyZWYuY3VycmVudC5jaGlsZHJlbltjb3VudGVyXS5jbGFzc0xpc3QuYWRkKGFwcGVhcilcbiAgICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgICB9LCA1NTApO1xuICB9XG5cbiAgaWYgKGdhbGxlcnlyZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPCBoZWlnaHQgLSByZXZlYWxwb2ludCkge1xuICAgIHJldmVhbCgpXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2xpZGUoY29udGFpbmVyLHJldmVhbHBvaW50PTE1MCkge1xuICBsZXQgd2lkdGhzID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5cbiAgbGV0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIHdpZHRocykge1xuICAgICBcbiAgICAgIGxldCByZXZlYWxUb3AgPSBjaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHtcbiAgICAgICAgY2hpbGQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgIGNoaWxkLnN0eWxlLm9wYWNpdHk9ICcxJ1xuICAgICAgfSBcbiAgfVxufSAiXSwibmFtZXMiOlsiYW5pbWF0ZSIsImNvbnRhaW5lciIsInJldmVhbHBvaW50IiwiZ2FsbGVyeXJlZiIsImFwcGVhciIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGhzIiwiY3VycmVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJyZXZlYWxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJyZXZlYWwiLCJjb3VudGVyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsInNsaWRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Helpers/index.js\n"));

/***/ })

});