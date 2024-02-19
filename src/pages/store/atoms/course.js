"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseState = void 0;
var recoil_1 = require("recoil");
exports.courseState = (0, recoil_1.atom)({
    key: 'courseState',
    default: {
        isLoading: true,
        course: null
    },
});
// export const Course = atom<Course>({
//     key : 'Course',
//     default:{
//         title : null,
//         price : null,
//         image : null
//     }
// })
