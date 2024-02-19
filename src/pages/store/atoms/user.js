"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userState = void 0;
var recoil_1 = require("recoil");
exports.userState = (0, recoil_1.atom)({
    key: 'userState',
    default: {
        isLoading: true,
        userEmail: null
    },
});
