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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": function() { return /* binding */ animate; },\n/* harmony export */   \"slide\": function() { return /* binding */ slide; }\n/* harmony export */ });\nfunction animate(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150, galleryref1 = arguments.length > 2 ? arguments[2] : void 0, appear1 = arguments.length > 3 ? arguments[3] : void 0;\n    let height = window.innerHeight;\n    let widths = container.current.children;\n    for (const child of widths){\n        let revealTop = child.getBoundingClientRect().top;\n        if (revealTop < height - revealpoint) {\n            child.style.opacity = \"1\";\n            child.style.transform = \"scale(1) translateY(0)\";\n        }\n    }\n    const reveal = ()=>{\n        let counter = 0;\n        const interval = setInterval(()=>{\n            if (counter == 3) {\n                clearInterval(interval);\n                setTimeout(()=>{\n                    galleryref1.current.parentNode.parentNode.children[1].classList.add(appear1);\n                }, 700);\n            }\n            galleryref1.current.children[counter].classList.add(appear1);\n            counter++;\n        }, 550);\n    };\n    if (galleryref1.current.getBoundingClientRect().top < height - revealpoint) {\n        reveal();\n    }\n}\nfunction slide(container) {\n    let revealpoint = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 150;\n    let widths = container.current.children[1].children;\n    let height = window.innerHeight;\n    // for (const child of widths) {\n    //     let revealTop = child.getBoundingClientRect().top;\n    //     if (revealTop < height - revealpoint) {\n    //       child.style.transform = 'translateY(0)'\n    //       child.style.opacity= '1'\n    //     } \n    // }\n    const reveal = ()=>{\n        let counter = 0;\n        const interval = setInterval(()=>{\n            if (counter == 3) {\n                clearInterval(interval);\n                setTimeout(()=>{\n                    container.current.children[1].children[i].style.transform = \"translateY(0)\";\n                    container.current.children[1].children[i].child.style.opacity = \"1\";\n                }, 700);\n            }\n            galleryref.current.children[counter].classList.add(appear);\n            counter++;\n        }, 550);\n    };\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9IZWxwZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ08sU0FBU0EsUUFBUUMsU0FBUyxFQUFvQztRQUFuQ0MsY0FBQUEsaUVBQVksR0FBRyxFQUFDQyw0REFBV0M7SUFFekQsSUFBSUMsU0FBU0MsT0FBT0MsV0FBVztJQUMvQixJQUFJQyxTQUFTUCxVQUFVUSxPQUFPLENBQUNDLFFBQVE7SUFFdkMsS0FBSyxNQUFNQyxTQUFTSCxPQUFRO1FBRXhCLElBQUlJLFlBQVlELE1BQU1FLHFCQUFxQixHQUFHQyxHQUFHO1FBQ2pELElBQUlGLFlBQVlQLFNBQVNILGFBQWE7WUFDcENTLE1BQU1JLEtBQUssQ0FBQ0MsT0FBTyxHQUFFO1lBQ3JCTCxNQUFNSSxLQUFLLENBQUNFLFNBQVMsR0FBRztRQUMxQixDQUFDO0lBQ0w7SUFFQSxNQUFNQyxTQUFTLElBQUs7UUFDbEIsSUFBSUMsVUFBVTtRQUNkLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJRixXQUFXLEdBQUc7Z0JBQ2hCRyxjQUFjRjtnQkFDZEcsV0FBVyxJQUFNO29CQUNmcEIsWUFBV00sT0FBTyxDQUFDZSxVQUFVLENBQUNBLFVBQVUsQ0FBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQ2UsU0FBUyxDQUFDQyxHQUFHLENBQUN0QjtnQkFDckUsR0FBRztZQUVMLENBQUM7WUFFQ0QsWUFBV00sT0FBTyxDQUFDQyxRQUFRLENBQUNTLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUN0QjtZQUNuRGU7UUFDSixHQUFHO0lBQ1Q7SUFFQSxJQUFJaEIsWUFBV00sT0FBTyxDQUFDSSxxQkFBcUIsR0FBR0MsR0FBRyxHQUFHVCxTQUFTSCxhQUFhO1FBQ3pFZ0I7SUFDRixDQUFDO0FBRUgsQ0FBQztBQUVNLFNBQVNTLE1BQU0xQixTQUFTLEVBQWtCO1FBQWpCQyxjQUFBQSxpRUFBWSxHQUFHO0lBQzdDLElBQUlNLFNBQVNQLFVBQVVRLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0EsUUFBUTtJQUNuRCxJQUFJTCxTQUFTQyxPQUFPQyxXQUFXO0lBQy9CLGdDQUFnQztJQUVoQyx5REFBeUQ7SUFDekQsOENBQThDO0lBQzlDLGdEQUFnRDtJQUNoRCxpQ0FBaUM7SUFDakMsU0FBUztJQUNULElBQUk7SUFFSixNQUFNVyxTQUFTLElBQUs7UUFDbEIsSUFBSUMsVUFBVTtRQUNkLE1BQU1DLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJRixXQUFXLEdBQUc7Z0JBQ2hCRyxjQUFjRjtnQkFDZEcsV0FBVyxJQUFNO29CQUNmdEIsVUFBVVEsT0FBTyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDQSxRQUFRLENBQUNrQixFQUFFLENBQUNiLEtBQUssQ0FBQ0UsU0FBUyxHQUFHO29CQUM1RGhCLFVBQVVRLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLEVBQUUsQ0FBQ0EsUUFBUSxDQUFDa0IsRUFBRSxDQUFDakIsS0FBSyxDQUFDSSxLQUFLLENBQUNDLE9BQU8sR0FBRTtnQkFDakUsR0FBRztZQUVMLENBQUM7WUFFQ2IsV0FBV00sT0FBTyxDQUFDQyxRQUFRLENBQUNTLFFBQVEsQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUN0QjtZQUNuRGU7UUFDSixHQUFHO0lBQ1A7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0hlbHBlcnMvaW5kZXguanM/MDE0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBhbmltYXRlKGNvbnRhaW5lcixyZXZlYWxwb2ludD0xNTAsZ2FsbGVyeXJlZixhcHBlYXIpIHtcblxuICAgIGxldCBoZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICBsZXQgd2lkdGhzID0gY29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW5cbiAgXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiB3aWR0aHMpIHtcblxuICAgICAgICBsZXQgcmV2ZWFsVG9wID0gY2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBpZiAocmV2ZWFsVG9wIDwgaGVpZ2h0IC0gcmV2ZWFscG9pbnQpIHtcbiAgICAgICAgICBjaGlsZC5zdHlsZS5vcGFjaXR5PSAnMSdcbiAgICAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMSkgdHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBjb25zdCByZXZlYWwgPSAoKT0+IHtcbiAgICAgIGxldCBjb3VudGVyID0gMFxuICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgaWYgKGNvdW50ZXIgPT0gMykge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBnYWxsZXJ5cmVmLmN1cnJlbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNoaWxkcmVuWzFdLmNsYXNzTGlzdC5hZGQoYXBwZWFyKVxuICAgICAgICAgICAgfSwgNzAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZ2FsbGVyeXJlZi5jdXJyZW50LmNoaWxkcmVuW2NvdW50ZXJdLmNsYXNzTGlzdC5hZGQoYXBwZWFyKVxuICAgICAgICAgICAgY291bnRlcisrXG4gICAgICAgIH0sIDU1MCk7XG4gIH1cblxuICBpZiAoZ2FsbGVyeXJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA8IGhlaWdodCAtIHJldmVhbHBvaW50KSB7XG4gICAgcmV2ZWFsKClcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbGlkZShjb250YWluZXIscmV2ZWFscG9pbnQ9MTUwKSB7XG4gIGxldCB3aWR0aHMgPSBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblsxXS5jaGlsZHJlblxuICBsZXQgaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0XG4gIC8vIGZvciAoY29uc3QgY2hpbGQgb2Ygd2lkdGhzKSB7XG4gICAgIFxuICAvLyAgICAgbGV0IHJldmVhbFRvcCA9IGNoaWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgLy8gICAgIGlmIChyZXZlYWxUb3AgPCBoZWlnaHQgLSByZXZlYWxwb2ludCkge1xuICAvLyAgICAgICBjaGlsZC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgwKSdcbiAgLy8gICAgICAgY2hpbGQuc3R5bGUub3BhY2l0eT0gJzEnXG4gIC8vICAgICB9IFxuICAvLyB9XG5cbiAgY29uc3QgcmV2ZWFsID0gKCk9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmIChjb3VudGVyID09IDMpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKVxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29udGFpbmVyLmN1cnJlbnQuY2hpbGRyZW5bMV0uY2hpbGRyZW5baV0uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgICAgICBjb250YWluZXIuY3VycmVudC5jaGlsZHJlblsxXS5jaGlsZHJlbltpXS5jaGlsZC5zdHlsZS5vcGFjaXR5PSAnMSdcbiAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgZ2FsbGVyeXJlZi5jdXJyZW50LmNoaWxkcmVuW2NvdW50ZXJdLmNsYXNzTGlzdC5hZGQoYXBwZWFyKVxuICAgICAgICAgIGNvdW50ZXIrK1xuICAgICAgfSwgNTUwKTtcbiAgfVxufSAiXSwibmFtZXMiOlsiYW5pbWF0ZSIsImNvbnRhaW5lciIsInJldmVhbHBvaW50IiwiZ2FsbGVyeXJlZiIsImFwcGVhciIsImhlaWdodCIsIndpbmRvdyIsImlubmVySGVpZ2h0Iiwid2lkdGhzIiwiY3VycmVudCIsImNoaWxkcmVuIiwiY2hpbGQiLCJyZXZlYWxUb3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJzdHlsZSIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm0iLCJyZXZlYWwiLCJjb3VudGVyIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwicGFyZW50Tm9kZSIsImNsYXNzTGlzdCIsImFkZCIsInNsaWRlIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Helpers/index.js\n"));

/***/ })

});