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
var Loading_1 = require("./Loading"); // Check the path to ensure it's correct
var course_1 = require("../store/atoms/course");
var recoil_1 = require("recoil");
var course_2 = require("../store/selectors/course");
function Course() {
    var courseId = (0, react_router_dom_1.useParams)().courseId;
    var setCourse = (0, recoil_1.useSetRecoilState)(course_1.courseState);
    var courseLoading = (0, recoil_1.useRecoilValue)(course_2.isCourseLoading);
    (0, react_1.useEffect)(function () {
        axios_1.default.get("http://localhost:3000/admin/course/".concat(courseId), {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(function (res) {
            setCourse({ isLoading: false, course: res.data });
        })
            .catch(function (e) {
            setCourse({ isLoading: false, course: null });
        });
    }, []);
    if (courseLoading) {
        return (0, jsx_runtime_1.jsx)(Loading_1.Loading, {});
    }
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(GrayTopper, {}), (0, jsx_runtime_1.jsxs)(material_1.Grid, { container: true, children: [(0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, lg: 8, md: 12, sm: 12, children: (0, jsx_runtime_1.jsx)(UpdateCard, {}) }), (0, jsx_runtime_1.jsx)(material_1.Grid, { item: true, lg: 4, md: 12, sm: 12, children: (0, jsx_runtime_1.jsx)(CourseCard, {}) })] })] }));
}
function GrayTopper() {
    var title = (0, recoil_1.useRecoilValue)(course_2.courseTitle);
    return ((0, jsx_runtime_1.jsx)("div", { style: { height: 250, background: "#212121", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }, children: (0, jsx_runtime_1.jsx)("div", { style: { height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }, children: (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { style: { color: "white", fontWeight: 600 }, variant: "h3", textAlign: "center", children: title }) }) }) }));
}
function UpdateCard() {
    var _this = this;
    var _a, _b, _c, _d;
    var _e = (0, recoil_1.useRecoilState)(course_1.courseState), courseDetails = _e[0], setCourse = _e[1];
    var _f = (0, react_1.useState)(((_a = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _a === void 0 ? void 0 : _a.description) || ""), description = _f[0], setDescription = _f[1];
    var _g = (0, react_1.useState)(((_b = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _b === void 0 ? void 0 : _b._id) || ""), _id = _g[0], set_id = _g[1];
    var _h = (0, react_1.useState)(((_c = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _c === void 0 ? void 0 : _c.image) || ""), image = _h[0], setImage = _h[1];
    var _j = (0, react_1.useState)(((_d = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _d === void 0 ? void 0 : _d.price) || ""), price = _j[0], setPrice = _j[1];
    return ((0, jsx_runtime_1.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: (0, jsx_runtime_1.jsx)(material_1.Card, { variant: "outlined", style: { maxWidth: 600, marginTop: 200 }, children: (0, jsx_runtime_1.jsxs)("div", { style: { padding: 20 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { style: { marginBottom: 10 }, children: "Update course details" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { value: description, style: { marginBottom: 10 }, onChange: function (e) { return setDescription(e.target.value); }, fullWidth: true, label: "Description", variant: "outlined" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { value: _id, style: { marginBottom: 10 }, onChange: function (e) { return set_id(e.target.value); }, fullWidth: true, label: "ID", variant: "outlined" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { value: image, style: { marginBottom: 10 }, onChange: function (e) { return setImage(e.target.value); }, fullWidth: true, label: "Image link", variant: "outlined" }), (0, jsx_runtime_1.jsx)(material_1.TextField, { value: price, style: { marginBottom: 10 }, onChange: function (e) { return setPrice(parseFloat(e.target.value)); }, fullWidth: true, label: "Price", variant: "outlined" }), (0, jsx_runtime_1.jsx)(material_1.Button, { variant: "contained", onClick: function () { return __awaiter(_this, void 0, void 0, function () {
                            var updatedCourse;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                axios_1.default.put("http://localhost:3000/admin/courses/".concat(_id), {
                                    title: (_a = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _a === void 0 ? void 0 : _a.title,
                                    description: description,
                                    image: image,
                                    published: true,
                                    price: price
                                }, {
                                    headers: {
                                        "Content-type": "application/json",
                                        "Authorization": "Bearer " + localStorage.getItem("token")
                                    }
                                });
                                updatedCourse = {
                                    _id: _id,
                                    title: ((_b = courseDetails === null || courseDetails === void 0 ? void 0 : courseDetails.course) === null || _b === void 0 ? void 0 : _b.title) || "",
                                    description: description,
                                    image: image,
                                    price: price,
                                };
                                setCourse({ course: updatedCourse, isLoading: false });
                                return [2 /*return*/];
                            });
                        }); }, children: "Update course" })] }) }) }));
}
function CourseCard() {
    var title = (0, recoil_1.useRecoilValue)(course_2.courseTitle);
    var imageLink = (0, recoil_1.useRecoilValue)(course_2.courseImage);
    return ((0, jsx_runtime_1.jsx)("div", { style: { display: "flex", marginTop: 50, justifyContent: "center", width: "100%" }, children: (0, jsx_runtime_1.jsxs)(material_1.Card, { style: {
                margin: 10,
                width: 350,
                minHeight: 200,
                borderRadius: 20,
                marginRight: 50,
                paddingBottom: 15,
                zIndex: 2
            }, children: [(0, jsx_runtime_1.jsx)("img", { src: imageLink, style: { width: 350 }, alt: "course-img" }), (0, jsx_runtime_1.jsxs)("div", { style: { marginLeft: 10 }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", children: title }), (0, jsx_runtime_1.jsx)(Price, {})] })] }) }));
}
function Price() {
    var price = (0, recoil_1.useRecoilValue)(course_2.coursePrice);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle2", style: { color: "gray" }, children: "Price" }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "subtitle1", children: (0, jsx_runtime_1.jsxs)("b", { children: ["Rs ", price, " "] }) })] }));
}
exports.default = Course;
