"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/noresult.svg */ \"./assets/images/noresult.svg\");\n/* harmony import */ var _components_Property__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Property */ \"./components/Property.jsx\");\n/* harmony import */ var _components_SearchFilters__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SearchFilters */ \"./components/SearchFilters.jsx\");\n/* harmony import */ var _utils_fetchApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetchApi */ \"./utils/fetchApi.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"C:\\\\Users\\\\A\\\\Desktop\\\\react_estate\\\\pages\\\\search.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nvar Search = function Search(_ref) {\n  _s();\n\n  var properties = _ref.properties;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      searchFilters = _useState[0],\n      setSearchFilters = _useState[1];\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n      onClick: function onClick() {\n        return setSearchFilters(!searchFilters);\n      },\n      cursor: \"pointer\",\n      bg: \"gray.100\",\n      borderBottom: \"1px\",\n      borderColor: \"gray.200\",\n      p: \"2\",\n      fontWeight: \"black\",\n      fontSize: \"lg\",\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n        children: \"Search Property By Filters\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Icon, {\n        paddingLeft: \"2\",\n        w: \"7\",\n        as: react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFilter\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), searchFilters && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_SearchFilters__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n      fontSize: \"2xl\",\n      p: \"4\",\n      fontWeight: \"bold\",\n      children: [\"Properties \", router.query.purpose]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n      flexWrap: \"wrap\",\n      children: properties.map(function (property) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Property__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          property: property\n        }, property.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 39\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), properties.length === 0 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Flex, {\n      justifyContent: \"center\",\n      alignItems: \"center\",\n      flexDir: \"column\",\n      marginTop: \"5\",\n      marginBottom: \"5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n        src: _assets_images_noresult_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        alt: \"noresult\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n        fontSize: \"xl\",\n        marginTop: \"3\",\n        children: \"No Result Found.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Search, \"hUNRXgjJK/airz5aVEkX7fhH41o=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zZWFyY2guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTWEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBb0I7RUFBQTs7RUFBQSxJQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztFQUNqQyxnQkFBMENkLCtDQUFRLENBQUMsS0FBRCxDQUFsRDtFQUFBLElBQU9lLGFBQVA7RUFBQSxJQUFzQkMsZ0JBQXRCOztFQUNBLElBQU1DLE1BQU0sR0FBR2hCLHNEQUFTLEVBQXhCO0VBRUEsb0JBQ0UsOERBQUMsaURBQUQ7SUFBQSx3QkFDRSw4REFBQyxrREFBRDtNQUNFLE9BQU8sRUFBRTtRQUFBLE9BQU1lLGdCQUFnQixDQUFDLENBQUNELGFBQUYsQ0FBdEI7TUFBQSxDQURYO01BRUUsTUFBTSxFQUFDLFNBRlQ7TUFHRSxFQUFFLEVBQUMsVUFITDtNQUlFLFlBQVksRUFBQyxLQUpmO01BS0UsV0FBVyxFQUFDLFVBTGQ7TUFNRSxDQUFDLEVBQUMsR0FOSjtNQU9FLFVBQVUsRUFBQyxPQVBiO01BUUUsUUFBUSxFQUFDLElBUlg7TUFTRSxjQUFjLEVBQUMsUUFUakI7TUFVRSxVQUFVLEVBQUMsUUFWYjtNQUFBLHdCQVlFLDhEQUFDLGtEQUFEO1FBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBWkYsZUFhRSw4REFBQyxrREFBRDtRQUFNLFdBQVcsRUFBQyxHQUFsQjtRQUFzQixDQUFDLEVBQUMsR0FBeEI7UUFBNEIsRUFBRSxFQUFFUixvREFBUUE7TUFBeEM7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQWJGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQURGLEVBZ0JHUSxhQUFhLGlCQUFJLDhEQUFDLGlFQUFEO01BQUE7TUFBQTtNQUFBO0lBQUEsU0FoQnBCLGVBaUJFLDhEQUFDLGtEQUFEO01BQU0sUUFBUSxFQUFDLEtBQWY7TUFBcUIsQ0FBQyxFQUFDLEdBQXZCO01BQTJCLFVBQVUsRUFBQyxNQUF0QztNQUFBLDBCQUNjRSxNQUFNLENBQUNDLEtBQVAsQ0FBYUMsT0FEM0I7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBakJGLGVBb0JFLDhEQUFDLGtEQUFEO01BQU0sUUFBUSxFQUFDLE1BQWY7TUFBQSxVQUNHTCxVQUFVLENBQUNNLEdBQVgsQ0FBZSxVQUFDQyxRQUFEO1FBQUEsb0JBQWMsOERBQUMsNERBQUQ7VUFBVSxRQUFRLEVBQUVBO1FBQXBCLEdBQW1DQSxRQUFRLENBQUNDLEVBQTVDO1VBQUE7VUFBQTtVQUFBO1FBQUEsU0FBZDtNQUFBLENBQWY7SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBcEJGLEVBdUJHUixVQUFVLENBQUNTLE1BQVgsS0FBc0IsQ0FBdEIsaUJBQ0MsOERBQUMsa0RBQUQ7TUFBTSxjQUFjLEVBQUMsUUFBckI7TUFBOEIsVUFBVSxFQUFDLFFBQXpDO01BQWtELE9BQU8sRUFBQyxRQUExRDtNQUFtRSxTQUFTLEVBQUMsR0FBN0U7TUFBaUYsWUFBWSxFQUFDLEdBQTlGO01BQUEsd0JBQ0UsOERBQUMsbURBQUQ7UUFBTyxHQUFHLEVBQUVmLG1FQUFaO1FBQXVCLEdBQUcsRUFBQztNQUEzQjtRQUFBO1FBQUE7UUFBQTtNQUFBLFNBREYsZUFFRSw4REFBQyxrREFBRDtRQUFNLFFBQVEsRUFBQyxJQUFmO1FBQW9CLFNBQVMsRUFBQyxHQUE5QjtRQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQSxTQUZGO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQXhCSjtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUEsU0FERjtBQWdDRCxDQXBDRDs7R0FBTUs7VUFFV1o7OztLQUZYWTtBQXNDTiwrREFBZUEsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWFyY2guanM/OTIwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgRmxleCwgQm94LCBUZXh0LCBJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEJzRmlsdGVyIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgbm9yZXN1bHQgZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9ub3Jlc3VsdC5zdmcnXHJcbmltcG9ydCBQcm9wZXJ0eSBmcm9tICcuLi9jb21wb25lbnRzL1Byb3BlcnR5JztcclxuaW1wb3J0IFNlYXJjaEZpbHRlcnMgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hGaWx0ZXJzJztcclxuaW1wb3J0IHsgYmFzZVVybCwgZmV0Y2hBcGkgfSBmcm9tICcuLi91dGlscy9mZXRjaEFwaSc7XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoeyBwcm9wZXJ0aWVzIH0pID0+IHtcclxuICBjb25zdCBbc2VhcmNoRmlsdGVycywgc2V0U2VhcmNoRmlsdGVyc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94PlxyXG4gICAgICA8RmxleFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaEZpbHRlcnMoIXNlYXJjaEZpbHRlcnMpfVxyXG4gICAgICAgIGN1cnNvcj0ncG9pbnRlcidcclxuICAgICAgICBiZz0nZ3JheS4xMDAnXHJcbiAgICAgICAgYm9yZGVyQm90dG9tPScxcHgnXHJcbiAgICAgICAgYm9yZGVyQ29sb3I9J2dyYXkuMjAwJ1xyXG4gICAgICAgIHA9JzInXHJcbiAgICAgICAgZm9udFdlaWdodD0nYmxhY2snXHJcbiAgICAgICAgZm9udFNpemU9J2xnJ1xyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PSdjZW50ZXInXHJcbiAgICAgICAgYWxpZ25JdGVtcz0nY2VudGVyJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQ+U2VhcmNoIFByb3BlcnR5IEJ5IEZpbHRlcnM8L1RleHQ+XHJcbiAgICAgICAgPEljb24gcGFkZGluZ0xlZnQ9JzInIHc9JzcnIGFzPXtCc0ZpbHRlcn0gLz5cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICB7c2VhcmNoRmlsdGVycyAmJiA8U2VhcmNoRmlsdGVycyAvPn1cclxuICAgICAgPFRleHQgZm9udFNpemU9JzJ4bCcgcD0nNCcgZm9udFdlaWdodD0nYm9sZCc+XHJcbiAgICAgICAgUHJvcGVydGllcyB7cm91dGVyLnF1ZXJ5LnB1cnBvc2V9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPEZsZXggZmxleFdyYXA9J3dyYXAnPlxyXG4gICAgICAgIHtwcm9wZXJ0aWVzLm1hcCgocHJvcGVydHkpID0+IDxQcm9wZXJ0eSBwcm9wZXJ0eT17cHJvcGVydHl9IGtleT17cHJvcGVydHkuaWR9IC8+KX1cclxuICAgICAgPC9GbGV4PlxyXG4gICAgICB7cHJvcGVydGllcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PSdjZW50ZXInIGFsaWduSXRlbXM9J2NlbnRlcicgZmxleERpcj0nY29sdW1uJyBtYXJnaW5Ub3A9JzUnIG1hcmdpbkJvdHRvbT0nNSc+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtub3Jlc3VsdH0gIGFsdD1cIm5vcmVzdWx0XCIgLz5cclxuICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSd4bCcgbWFyZ2luVG9wPSczJz5ObyBSZXN1bHQgRm91bmQuPC9UZXh0PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaDtcclxuXHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkltYWdlIiwiRmxleCIsIkJveCIsIlRleHQiLCJJY29uIiwiQnNGaWx0ZXIiLCJub3Jlc3VsdCIsIlByb3BlcnR5IiwiU2VhcmNoRmlsdGVycyIsImJhc2VVcmwiLCJmZXRjaEFwaSIsIlNlYXJjaCIsInByb3BlcnRpZXMiLCJzZWFyY2hGaWx0ZXJzIiwic2V0U2VhcmNoRmlsdGVycyIsInJvdXRlciIsInF1ZXJ5IiwicHVycG9zZSIsIm1hcCIsInByb3BlcnR5IiwiaWQiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/search.js\n"));

/***/ })

});