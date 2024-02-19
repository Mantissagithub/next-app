"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseImage = exports.coursePrice = exports.courseTitle = exports.courseDetails = exports.isCourseLoading = void 0;
var recoil_1 = require("recoil");
var course_1 = require("../atoms/course");
exports.isCourseLoading = (0, recoil_1.selector)({
    key: 'isCourseLoaingState',
    get: function (_a) {
        var get = _a.get;
        var state = get(course_1.courseState);
        return state.isLoading;
    },
});
exports.courseDetails = (0, recoil_1.selector)({
    key: 'courseDetailsState',
    get: function (_a) {
        var get = _a.get;
        var state = get(course_1.courseState);
        return state.course;
    },
});
exports.courseTitle = (0, recoil_1.selector)({
    key: 'courseTitleState',
    get: function (_a) {
        var get = _a.get;
        var state = get(course_1.courseState);
        if (state.course) {
            return state.course ? state.course.title : null;
        }
        return "";
    },
});
exports.coursePrice = (0, recoil_1.selector)({
    key: 'coursePriceState',
    get: function (_a) {
        var get = _a.get;
        var state = get(course_1.courseState);
        if (state.course) {
            return state.course.price;
        }
        return "";
    },
});
exports.courseImage = (0, recoil_1.selector)({
    key: 'courseImageState',
    get: function (_a) {
        var get = _a.get;
        var state = get(course_1.courseState);
        if (state.course) {
            return state.course ? state.course.image : null;
        }
        return "";
    },
});
