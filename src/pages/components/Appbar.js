"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var material_1 = require("@mui/material");
var Button_1 = require("@mui/material/Button");
var react_router_dom_1 = require("react-router-dom");
var isUserLoading_1 = require("../store/selectors/isUserLoading");
var recoil_1 = require("recoil");
var user_js_1 = require("../store/atoms/user.js");
var userEmail_1 = require("../store/selectors/userEmail");
// interface UserState {
//   isLoading: boolean;
//   userEmail: string | null;
//   token : string | null;
// }
function Appbar() {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var userLoading = (0, recoil_1.useRecoilValue)(isUserLoading_1.isUserLoading);
    var userEmail = (0, recoil_1.useRecoilValue)(userEmail_1.userEmailState);
    var setUser = (0, recoil_1.useSetRecoilState)(user_js_1.userState);
    var handleLogout = function () {
        localStorage.removeItem("token");
        setUser({ isLoading: false, userEmail: null });
    };
    if (userLoading) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
    }
    if (userEmail) {
        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", padding: 4, zIndex: 1 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginLeft: 10, cursor: "pointer" }, onClick: function () { return navigate("/"); }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: "Coursera" }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex" }, children: (0, jsx_runtime_1.jsxs)("div", { style: { marginRight: 10, display: "flex" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginRight: 10 }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: function () { return navigate("/addcourse"); }, children: "Add course" }) }), (0, jsx_runtime_1.jsx)("div", { style: { marginRight: 10 }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: function () { return navigate("/courses"); }, children: "Courses" }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: function () { return handleLogout(); }, children: "Logout" })] }) })] }));
    }
    else {
        return ((0, jsx_runtime_1.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", padding: 4, zIndex: 1 }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginLeft: 10, cursor: "pointer" }, onClick: function () { return navigate("/"); }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: "Coursera" }) }), (0, jsx_runtime_1.jsxs)("div", { style: { display: "flex" }, children: [(0, jsx_runtime_1.jsx)("div", { style: { marginRight: 10 }, children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: function () { return navigate("/signup"); }, children: "Signup" }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: function () { return navigate("/signin"); }, children: "Signin" }) })] })] }));
    }
}
exports.default = Appbar;
