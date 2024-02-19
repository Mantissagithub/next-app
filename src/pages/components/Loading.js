"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loading = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Loading = function () {
    return (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "100%", height: "100vh" }, children: (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {}) }) });
};
exports.Loading = Loading;
