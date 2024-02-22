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
var react_router_dom_1 = require("react-router-dom");
var Signin_1 = require("./components/Signin");
var Signup_1 = require("./components/Signup");
var Appbar_1 = require("./components/Appbar");
var AddCourse_1 = require("./components/AddCourse");
var Courses_1 = require("./components/Courses");
var Course_1 = require("./components/Course");
var Landing_1 = require("./components/Landing");
var user_1 = require("./store/atoms/user");
var recoil_1 = require("recoil");
var axios_1 = require("axios");
// import { BASE_URL } from "./config";
var react_1 = require("react");
function App() {
    return ((0, jsx_runtime_1.jsx)(recoil_1.RecoilRoot, { children: (0, jsx_runtime_1.jsx)("div", { style: { width: "100vw", height: "100vh", backgroundColor: "#eeeeee" }, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(Appbar_1.default, {}), (0, jsx_runtime_1.jsx)(InitUser, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/addcourse", element: (0, jsx_runtime_1.jsx)(AddCourse_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/course/:courseId", element: (0, jsx_runtime_1.jsx)(Course_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/courses", element: (0, jsx_runtime_1.jsx)(Courses_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signin", element: (0, jsx_runtime_1.jsx)(Signin_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/signup", element: (0, jsx_runtime_1.jsx)(Signup_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Landing_1.Landing, {}) })] }) }) }));
}
function InitUser() {
    var _this = this;
    var setUser = (0, recoil_1.useSetRecoilState)(user_1.userState);
    var init = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default.get("http:localhost:3000/admin/me", {
                            headers: {
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (response.data.username) {
                        setUser({
                            isLoading: false,
                            userEmail: response.data.username
                        });
                    }
                    else {
                        setUser({
                            isLoading: false,
                            userEmail: null
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    setUser({
                        isLoading: false,
                        userEmail: null
                    });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    (0, react_1.useEffect)(function () {
        init();
    }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {});
}
exports.default = App;
