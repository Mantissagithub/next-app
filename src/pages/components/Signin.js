"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var material_1 = require("@mui/material");
var react_1 = require("react");
var axios_1 = require("axios");
var react_router_dom_1 = require("react-router-dom");
var recoil_1 = require("recoil");
var user_js_1 = require("../store/atoms/user.js");
function Signin() {
    var _this = this;
    var _a = (0, react_1.useState)(""), email = _a[0], setEmail = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var setUser = (0, recoil_1.useSetRecoilState)(user_js_1.userState);
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { style: {
                    paddingTop: 150,
                    marginBottom: 10,
                    display: "flex",
                    justifyContent: "center"
                }, children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: "Welcome to Coursera. Sign up below" }) }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: (0, jsx_runtime_1.jsxs)(material_1.Card, { variant: "outlined", style: { width: 400, padding: 20 }, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { onChange: function (evant11) {
                                var elemt = evant11.target;
                                setEmail(elemt.value);
                            }, fullWidth: true, label: "Email", variant: "outlined" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(TextField_1.default, { onChange: function (e) {
                                setPassword(e.target.value);
                            }, fullWidth: true, label: "Password", variant: "outlined", type: "password" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(Button_1.default, { size: "large", variant: "contained", onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                                var res, data;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, axios_1.default.post("http://localhost:3000/admin/login", {
                                                username: email,
                                                password: password
                                            }, {
                                                headers: {
                                                    "Content-type": "application/json"
                                                }
                                            })];
                                        case 1:
                                            res = _a.sent();
                                            data = res.data;
                                            localStorage.setItem("token", data.token);
                                            // window.location = "/"
                                            setUser({
                                                userEmail: email,
                                                isLoading: false
                                            });
                                            navigate("/courses");
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, children: " Signin" })] }) })] });
}
exports.default = Signin;
