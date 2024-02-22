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
var material_1 = require("@mui/material");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var axios_1 = require("axios");
function Courses() {
    var _this = this;
    var _a = (0, react_1.useState)([]), courses = _a[0], setCourses = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(null), error = _c[0], setError = _c[1];
    (0, react_1.useEffect)(function () {
        var fetchCourses = function () { return __awaiter(_this, void 0, void 0, function () {
            var response, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get("http://localhost:3000/admin/courses/", {
                                headers: {
                                    Authorization: "Bearer ".concat(localStorage.getItem('token'))
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        setCourses(response.data);
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        setError("Error fetching courses. Please try again later.");
                        setLoading(false);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        fetchCourses();
    }, []);
    if (loading) {
        return (0, jsx_runtime_1.jsx)(material_1.CircularProgress, {});
    }
    if (error) {
        return (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", color: "error", children: error });
    }
    if (courses.length === 0) {
        return (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", children: "No courses available." });
    }
    return ((0, jsx_runtime_1.jsx)("div", { style: { display: "flex", flexWrap: "wrap", justifyContent: "center" }, children: courses.map(function (course) { return ((0, jsx_runtime_1.jsx)(Course, { course: course }, course._id)); }) }));
}
function Course(_a) {
    var course = _a.course;
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Card, { style: { margin: 10, width: 300, minHeight: 200, padding: 20 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { textAlign: "center", variant: "h5", children: course.title }), (0, jsx_runtime_1.jsx)(material_1.Typography, { textAlign: "center", variant: "subtitle1", children: course.description }), (0, jsx_runtime_1.jsx)("img", { src: course.image, style: { width: 300 }, alt: course.title }), (0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center", marginTop: 20 }, children: (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", size: "large", onClick: function () { return navigate("/course/".concat(course._id)); }, children: "Edit" }) })] }));
}
exports.default = Courses;
