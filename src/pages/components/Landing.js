"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Landing = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var react_router_dom_1 = require("react-router-dom");
var recoil_1 = require("recoil");
var userEmail_1 = require("../store/selectors/userEmail");
var isUserLoading_1 = require("../store/selectors/isUserLoading");
var Landing = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var userEmail = (0, recoil_1.useRecoilValue)(userEmail_1.userEmailState);
    var userLoading = (0, recoil_1.useRecoilValue)(isUserLoading_1.isUserLoading);
    if (userLoading) {
        return (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {});
    }
    if (!userEmail) {
        return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, style: { padding: "5vw" }, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, md: 6, lg: 6, children: (0, jsx_runtime_1.jsxs)("div", { style: { marginTop: 100 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h2", children: "Coursera Admin" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", children: "A place to learn, earn and grow" }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", marginTop: 20 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginRight: 10 }, children: (0, jsx_runtime_1.jsx)(material_1.Button, { size: "large", variant: "contained", onClick: function () { return navigate("/signup"); }, children: "Signup" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(material_1.Button, { size: "large", variant: "contained", onClick: function () { return navigate("/signin"); }, children: "Signin" }) })] })] }) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, xs: 12, md: 6, lg: 6, style: { marginTop: 20 }, children: (0, jsx_runtime_1.jsx)("img", { src: "/class.jpeg", alt: "class", width: "100%" }) })] }) }));
    }
    return null; // Or you can redirect to another page if the user is already authenticated
};
exports.Landing = Landing;
