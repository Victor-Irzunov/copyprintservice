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

/***/ "./components/sections/ServiceSection.js":
/*!***********************************************!*\
  !*** ./components/sections/ServiceSection.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_Constants_animation_AnimationConst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @component/Constants/animation/AnimationConst */ \"./Constants/animation/AnimationConst.js\");\n/* harmony import */ var _component_Constants_data_ServiceMainConst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/Constants/data/ServiceMainConst */ \"./Constants/data/ServiceMainConst.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _modal_ModalComp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/ModalComp */ \"./components/modal/ModalComp.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import { getBlurryPlaceholder } from 'next/image-optimization-utils'\nconst { Panel  } = antd__WEBPACK_IMPORTED_MODULE_6__.Collapse;\nconst ServiceSection = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\");\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [prevScrollPos, setPrevScrollPos] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);\n    const [scrollDirection, setScrollDirection] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const animation = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation)();\n    // const blurryImage = getBlurryPlaceholder('/logo.webp', 20);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        function handleScroll() {\n            const currentScrollPos = window.pageYOffset;\n            if (prevScrollPos > currentScrollPos) {\n                setScrollDirection(false);\n            } else {\n                setScrollDirection(true);\n            }\n            setPrevScrollPos(currentScrollPos);\n        }\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        prevScrollPos\n    ]);\n    const showModal = ()=>{\n        setIsModalOpen(true);\n    };\n    const handleCancel = ()=>{\n        setIsModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \" backdrop-blur-xl    dark:bg-[#414141]/40 pt-5 pb-4 z-10 relative mb-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container mx-auto relative py-8\",\n                id: \"service\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-2xl mb-10 text-center uppercase\",\n                        children: \"Наши услуги\"\n                    }, void 0, false, {\n                        fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                        lineNumber: 48,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, undefined),\n                    _component_Constants_data_ServiceMainConst__WEBPACK_IMPORTED_MODULE_2__.dataMainService.map((el)=>{\n                        return(// <motion.div\n                        // \tinitial=\"hidden\"\n                        // \twhileInView=\"visible\"\n                        // \tkey={el.id}\n                        // \tid={el.id}\n                        // \tvariants={!scrollDirection ? yAnimation : yAnimation3}\n                        // \tanimate={animation}\n                        // >\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white mb-16 pb-8 rounded-md\",\n                            id: el.id,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: el.img,\n                                    alt: el.alt,\n                                    width: 1280,\n                                    height: 900,\n                                    className: \"rounded-t-md\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"px-1 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"uppercase mt-3 mb-2 text-[#C2398E] text-xl font-semibold\",\n                                            children: el.h3\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 10\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-xs font-extralight leading-none\",\n                                            children: el.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 9\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-5 px-1.5\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-center mb-2 text-[#18AECA] uppercase\",\n                                            children: [\n                                                \"Стоимость \",\n                                                el.id === 7 || el.id === 8 ? \"\" : \"печати\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 10\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Collapse, {\n                                            accordion: true,\n                                            defaultActiveKey: [\n                                                \"1\"\n                                            ],\n                                            children: el.price.map((elem)=>{\n                                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Panel, {\n                                                    header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: \"uppercase text-xs text-center text-[#C2398E]\",\n                                                        children: elem.title\n                                                    }, elem.id, false, void 0, void 0),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        children: [\n                                                            elem.list ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"text-center mb-2\",\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                        className: \"mb-1 uppercase text-xs\",\n                                                                        children: \"Варианты изображений\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                                        lineNumber: 106,\n                                                                        columnNumber: 18\n                                                                    }, undefined),\n                                                                    elem.list\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                                lineNumber: 105,\n                                                                columnNumber: 17\n                                                            }, undefined) : null,\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                                                src: elem.img_price,\n                                                                alt: elem.alt_price,\n                                                                width: 1306,\n                                                                height: 652,\n                                                                placeholder: \"blur\",\n                                                                blurDataURL: \"/loading.webp\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                                lineNumber: 114,\n                                                                columnNumber: 15\n                                                            }, undefined),\n                                                            elem.err ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"w-full px-2 mt-3 text-[8px]\",\n                                                                children: elem.err\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                                lineNumber: 122,\n                                                                columnNumber: 27\n                                                            }, undefined) : null\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                        lineNumber: 102,\n                                                        columnNumber: 14\n                                                    }, undefined)\n                                                }, elem.id, false, {\n                                                    fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 13\n                                                }, undefined);\n                                            })\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 10\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-5 flex justify-center items-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                                                type: \"primary\",\n                                                shape: \"round\",\n                                                className: \"bg-[#18AECA] pb-1 pt-1.5 px-4 shadow-xl uppercase text-xs flex items-center justify-center\",\n                                                onClick: ()=>{\n                                                    showModal();\n                                                    setTitle(el.h3);\n                                                },\n                                                children: \"Заказать\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                                lineNumber: 131,\n                                                columnNumber: 11\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                            lineNumber: 129,\n                                            columnNumber: 10\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 9\n                                }, undefined)\n                            ]\n                        }, el.id, true, {\n                            fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                            lineNumber: 63,\n                            columnNumber: 8\n                        }, undefined));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                lineNumber: 47,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_ModalComp__WEBPACK_IMPORTED_MODULE_4__.ModalComp, {\n                isModalOpen: isModalOpen,\n                title: title,\n                handleCancel: handleCancel\n            }, void 0, false, {\n                fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n                lineNumber: 150,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/viktor/Programing/WORK/copyPrint/components/sections/ServiceSection.js\",\n        lineNumber: 43,\n        columnNumber: 3\n    }, undefined);\n};\n_s(ServiceSection, \"hyil27GepcyHuhaoFrc+N1YVrKo=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useAnimation\n    ];\n});\n_c = ServiceSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ServiceSection);\nvar _c;\n$RefreshReg$(_c, \"ServiceSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL1NlcnZpY2VTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVGO0FBQ1g7QUFDeEI7QUFDdEI7QUFDUztBQUNPO0FBQ0g7QUFDM0MsdUVBQXVFO0FBR3ZFLE1BQU0sRUFBRVcsTUFBSyxFQUFFLEdBQUdMLDBDQUFRQTtBQUUxQixNQUFNTSxpQkFBaUIsSUFBTTs7SUFDNUIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25ELE1BQU0sQ0FBQ1UsaUJBQWlCQyxtQkFBbUIsR0FBR1gsK0NBQVFBLENBQUMsSUFBSTtJQUMzRCxNQUFNWSxZQUFZakIsMkRBQVlBO0lBRTlCLDhEQUE4RDtJQUU5RE0sZ0RBQVNBLENBQUMsSUFBTTtRQUNmLFNBQVNZLGVBQWU7WUFDdkIsTUFBTUMsbUJBQW1CQyxPQUFPQyxXQUFXO1lBQzNDLElBQUlSLGdCQUFnQk0sa0JBQWtCO2dCQUNyQ0gsbUJBQW1CLEtBQUs7WUFDekIsT0FBTztnQkFDTkEsbUJBQW1CLElBQUk7WUFDeEIsQ0FBQztZQUNERixpQkFBaUJLO1FBQ2xCO1FBQ0FDLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBQ2xDLE9BQU8sSUFBTUUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7SUFDbkQsR0FBRztRQUFDTDtLQUFjO0lBRWxCLE1BQU1XLFlBQVksSUFBTTtRQUN2QlosZUFBZSxJQUFJO0lBQ3BCO0lBQ0EsTUFBTWEsZUFBZSxJQUFNO1FBQzFCYixlQUFlLEtBQUs7SUFDckI7SUFDQSxxQkFDQyw4REFBQ2M7UUFDQUMsV0FBVTs7MEJBR1YsOERBQUNDO2dCQUFJRCxXQUFVO2dCQUFrQ0UsSUFBRzs7a0NBQ25ELDhEQUFDQzt3QkFBR0gsV0FBVTtrQ0FBa0Q7Ozs7OztrQ0FHaEUsOERBQUNDO3dCQUFJRCxXQUFVOzs7Ozs7b0JBRWQ3QiwyRkFBbUIsQ0FBQ2tDLENBQUFBLEtBQU07d0JBQ3pCLE9BQ0MsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLHlCQUF5Qjt3QkFDekIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLDBEQUEwRDt3QkFDMUQsdUJBQXVCO3dCQUN2QixJQUFJO3NDQUNKLDhEQUFDSjs0QkFDQUQsV0FBVTs0QkFFVkUsSUFBSUcsR0FBR0gsRUFBRTs7OENBSVQsOERBQUM1QixtREFBS0E7b0NBQ0xnQyxLQUFLRCxHQUFHRSxHQUFHO29DQUNYQyxLQUFLSCxHQUFHRyxHQUFHO29DQUNYQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSVixXQUFVOzs7Ozs7OENBSVgsOERBQUNDO29DQUFJRCxXQUFVOztzREFDZCw4REFBQ1c7NENBQUdYLFdBQVU7c0RBQ1pLLEdBQUdNLEVBQUU7Ozs7OztzREFFUCw4REFBQ1Y7NENBQUlELFdBQVU7c0RBQ2JLLEdBQUdPLE9BQU87Ozs7Ozs7Ozs7Ozs4Q0FHYiw4REFBQ1g7b0NBQUlELFdBQVU7O3NEQUNkLDhEQUFDYTs0Q0FBR2IsV0FBVTs7Z0RBQTRDO2dEQUFZSyxHQUFHSCxFQUFFLEtBQUssS0FBS0csR0FBR0gsRUFBRSxLQUFLLElBQUssS0FBSyxRQUFROzs7Ozs7O3NEQUNqSCw4REFBQzNCLDBDQUFRQTs0Q0FDUnVDLFNBQVM7NENBQ1RDLGtCQUFrQjtnREFBQzs2Q0FBSTtzREFFdEJWLEdBQUdXLEtBQUssQ0FBQ1osR0FBRyxDQUFDYSxDQUFBQSxPQUFRO2dEQUNyQixxQkFDQyw4REFBQ3JDO29EQUNBc0Msc0JBQVEsOERBQUNDO3dEQUFFbkIsV0FBVTtrRUFHbkJpQixLQUFLbkMsS0FBSzt1REFGTm1DLEtBQUtmLEVBQUU7OERBS2IsNEVBQUNEOzs0REFFQ2dCLEtBQUtHLElBQUksaUJBQ1IsOERBQUNuQjtnRUFBSUQsV0FBVTs7a0ZBQ2QsOERBQUNtQjt3RUFBRW5CLFdBQVU7a0ZBQXlCOzs7Ozs7b0VBR3JDaUIsS0FBS0csSUFBSTs7Ozs7OzRFQUdYLElBQUk7MEVBRU4sOERBQUM5QyxtREFBS0E7Z0VBQ0xnQyxLQUFLVyxLQUFLSSxTQUFTO2dFQUNuQmIsS0FBS1MsS0FBS0ssU0FBUztnRUFDbkJiLE9BQU87Z0VBQ1BDLFFBQVE7Z0VBQ1JhLGFBQVk7Z0VBQ1pDLGFBQVk7Ozs7Ozs0REFFWlAsS0FBS1EsR0FBRyxpQkFBRyw4REFBQ3hCO2dFQUFJRCxXQUFVOzBFQUErQmlCLEtBQUtRLEdBQUc7Ozs7OzRFQUFVLElBQUk7Ozs7Ozs7bURBckIxRVIsS0FBS2YsRUFBRTs7Ozs7NENBeUJqQjs7Ozs7O3NEQUdELDhEQUFDRDs0Q0FBSUQsV0FBVTtzREFFZCw0RUFBQ3hCLHdDQUFNQTtnREFDTmtELE1BQUs7Z0RBQ0xDLE9BQU07Z0RBQ04zQixXQUFVO2dEQUNWNEIsU0FBUyxJQUFNO29EQUNkL0I7b0RBQ0FkLFNBQVNzQixHQUFHTSxFQUFFO2dEQUNmOzBEQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBMUVFTixHQUFHSCxFQUFFOzs7OztvQkFrRmI7Ozs7Ozs7MEJBR0YsOERBQUN6Qix1REFBU0E7Z0JBQUNPLGFBQWFBO2dCQUFhRixPQUFPQTtnQkFBT2dCLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHcEU7R0E1SU1qQjs7UUFLYVIsdURBQVlBOzs7S0FMekJRO0FBOElOLCtEQUFlQSxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvU2VydmljZVNlY3Rpb24uanM/Y2JkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB5QW5pbWF0aW9uLCB5QW5pbWF0aW9uMyB9IGZyb20gXCJAY29tcG9uZW50L0NvbnN0YW50cy9hbmltYXRpb24vQW5pbWF0aW9uQ29uc3RcIlxuaW1wb3J0IHsgZGF0YU1haW5TZXJ2aWNlIH0gZnJvbSBcIkBjb21wb25lbnQvQ29uc3RhbnRzL2RhdGEvU2VydmljZU1haW5Db25zdFwiXG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXG5pbXBvcnQgeyBDb2xsYXBzZSwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IE1vZGFsQ29tcCB9IGZyb20gXCIuLi9tb2RhbC9Nb2RhbENvbXBcIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG4vLyBpbXBvcnQgeyBnZXRCbHVycnlQbGFjZWhvbGRlciB9IGZyb20gJ25leHQvaW1hZ2Utb3B0aW1pemF0aW9uLXV0aWxzJ1xuXG5cbmNvbnN0IHsgUGFuZWwgfSA9IENvbGxhcHNlXG5cbmNvbnN0IFNlcnZpY2VTZWN0aW9uID0gKCkgPT4ge1xuXHRjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKVxuXHRjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbcHJldlNjcm9sbFBvcywgc2V0UHJldlNjcm9sbFBvc10gPSB1c2VTdGF0ZSgwKVxuXHRjb25zdCBbc2Nyb2xsRGlyZWN0aW9uLCBzZXRTY3JvbGxEaXJlY3Rpb25dID0gdXNlU3RhdGUobnVsbClcblx0Y29uc3QgYW5pbWF0aW9uID0gdXNlQW5pbWF0aW9uKClcblxuXHQvLyBjb25zdCBibHVycnlJbWFnZSA9IGdldEJsdXJyeVBsYWNlaG9sZGVyKCcvbG9nby53ZWJwJywgMjApO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuXHRcdFx0Y29uc3QgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRcdGlmIChwcmV2U2Nyb2xsUG9zID4gY3VycmVudFNjcm9sbFBvcykgeyAvL9C/0YDQvtC60YDRg9GC0LrQsCDQstCy0LXRgNGFXG5cdFx0XHRcdHNldFNjcm9sbERpcmVjdGlvbihmYWxzZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRTY3JvbGxEaXJlY3Rpb24odHJ1ZSk7XG5cdFx0XHR9XG5cdFx0XHRzZXRQcmV2U2Nyb2xsUG9zKGN1cnJlbnRTY3JvbGxQb3MpXG5cdFx0fVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cdFx0cmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cdH0sIFtwcmV2U2Nyb2xsUG9zXSk7XG5cblx0Y29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xuXHRcdHNldElzTW9kYWxPcGVuKHRydWUpO1xuXHR9XG5cdGNvbnN0IGhhbmRsZUNhbmNlbCA9ICgpID0+IHtcblx0XHRzZXRJc01vZGFsT3BlbihmYWxzZSk7XG5cdH1cblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvblxuXHRcdFx0Y2xhc3NOYW1lPVwiIGJhY2tkcm9wLWJsdXIteGxcblx0XHRcdGRhcms6YmctWyM0MTQxNDFdLzQwIHB0LTUgcGItNCB6LTEwIHJlbGF0aXZlIG1iLTIwXCJcblx0XHQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHJlbGF0aXZlIHB5LThcIiBpZD1cInNlcnZpY2VcIj5cblx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC0yeGwgbWItMTAgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+XG5cdFx0XHRcdFx00J3QsNGI0Lgg0YPRgdC70YPQs9C4XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiXCI+PC9kaXY+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRkYXRhTWFpblNlcnZpY2UubWFwKGVsID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdC8vIDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdC8vIFx0aW5pdGlhbD1cImhpZGRlblwiXG5cdFx0XHRcdFx0XHRcdC8vIFx0d2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcblx0XHRcdFx0XHRcdFx0Ly8gXHRrZXk9e2VsLmlkfVxuXHRcdFx0XHRcdFx0XHQvLyBcdGlkPXtlbC5pZH1cblx0XHRcdFx0XHRcdFx0Ly8gXHR2YXJpYW50cz17IXNjcm9sbERpcmVjdGlvbiA/IHlBbmltYXRpb24gOiB5QW5pbWF0aW9uM31cblx0XHRcdFx0XHRcdFx0Ly8gXHRhbmltYXRlPXthbmltYXRpb259XG5cdFx0XHRcdFx0XHRcdC8vID5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJnLXdoaXRlIG1iLTE2IHBiLTggcm91bmRlZC1tZFwiXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtlbC5pZH1cblx0XHRcdFx0XHRcdFx0XHRpZD17ZWwuaWR9XG5cdFx0XHRcdFx0XHRcdD5cblxuXG5cdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VsLmltZ31cblx0XHRcdFx0XHRcdFx0XHRcdGFsdD17ZWwuYWx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0d2lkdGg9ezEyODB9XG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezkwMH1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWQtdC1tZFwiXG5cdFx0XHRcdFx0XHRcdFx0Lz5cblxuXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJweC0xIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwidXBwZXJjYXNlIG10LTMgbWItMiB0ZXh0LVsjQzIzOThFXSB0ZXh0LXhsIGZvbnQtc2VtaWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2VsLmgzfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LWV4dHJhbGlnaHQgbGVhZGluZy1ub25lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlbC5jb250ZW50fVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC01IHB4LTEuNVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTIgdGV4dC1bIzE4QUVDQV0gdXBwZXJjYXNlXCI+0KHRgtC+0LjQvNC+0YHRgtGMIHsoZWwuaWQgPT09IDcgfHwgZWwuaWQgPT09IDgpID8gJycgOiAn0L/QtdGH0LDRgtC4J308L2g0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbGxhcHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFjY29yZGlvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0QWN0aXZlS2V5PXtbJzEnXX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2VsLnByaWNlLm1hcChlbGVtID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFBhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlcj17PHAgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQteHMgdGV4dC1jZW50ZXIgdGV4dC1bI0MyMzk4RV1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17ZWxlbS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlbGVtLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0ga2V5PXtlbGVtLmlkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbS5saXN0ID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMSB1cHBlcmNhc2UgdGV4dC14c1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx00JLQsNGA0LjQsNC90YLRiyDQuNC30L7QsdGA0LDQttC10L3QuNC5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlbGVtLmxpc3R9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG51bGxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2VsZW0uaW1nX3ByaWNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWx0PXtlbGVtLmFsdF9wcmljZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPXsxMzA2fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXs2NTJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImJsdXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ymx1ckRhdGFVUkw9Jy9sb2FkaW5nLndlYnAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZWxlbS5lcnIgPyA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0yIG10LTMgdGV4dC1bOHB4XVwiPntlbGVtLmVycn08L2Rpdj4gOiBudWxsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvUGFuZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hhcGU9XCJyb3VuZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmctWyMxOEFFQ0FdIHBiLTEgcHQtMS41IHB4LTQgc2hhZG93LXhsIHVwcGVyY2FzZSB0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaG93TW9kYWwoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VGl0bGUoZWwuaDMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdNCX0LDQutCw0LfQsNGC0Yxcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdC8vIDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxNb2RhbENvbXAgaXNNb2RhbE9wZW49e2lzTW9kYWxPcGVufSB0aXRsZT17dGl0bGV9IGhhbmRsZUNhbmNlbD17aGFuZGxlQ2FuY2VsfSAvPlxuXHRcdDwvc2VjdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlU2VjdGlvbiJdLCJuYW1lcyI6WyJ5QW5pbWF0aW9uIiwieUFuaW1hdGlvbjMiLCJkYXRhTWFpblNlcnZpY2UiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJJbWFnZSIsIkNvbGxhcHNlIiwiQnV0dG9uIiwiTW9kYWxDb21wIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQYW5lbCIsIlNlcnZpY2VTZWN0aW9uIiwidGl0bGUiLCJzZXRUaXRsZSIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJwcmV2U2Nyb2xsUG9zIiwic2V0UHJldlNjcm9sbFBvcyIsInNjcm9sbERpcmVjdGlvbiIsInNldFNjcm9sbERpcmVjdGlvbiIsImFuaW1hdGlvbiIsImhhbmRsZVNjcm9sbCIsImN1cnJlbnRTY3JvbGxQb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2hvd01vZGFsIiwiaGFuZGxlQ2FuY2VsIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwiaDIiLCJtYXAiLCJlbCIsInNyYyIsImltZyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJjb250ZW50IiwiaDQiLCJhY2NvcmRpb24iLCJkZWZhdWx0QWN0aXZlS2V5IiwicHJpY2UiLCJlbGVtIiwiaGVhZGVyIiwicCIsImxpc3QiLCJpbWdfcHJpY2UiLCJhbHRfcHJpY2UiLCJwbGFjZWhvbGRlciIsImJsdXJEYXRhVVJMIiwiZXJyIiwidHlwZSIsInNoYXBlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/ServiceSection.js\n"));

/***/ })

});