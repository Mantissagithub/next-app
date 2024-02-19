"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserLoading = void 0;
var user_1 = require("../atoms/user");
var recoil_1 = require("recoil");
exports.isUserLoading = (0, recoil_1.selector)({
    key: 'userLoadingState',
    get: function (_a) {
        var get = _a.get;
        var state = get(user_1.userState);
        return {
            isLoading: state.isLoading,
        };
    },
});
