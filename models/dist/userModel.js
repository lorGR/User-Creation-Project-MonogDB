"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserModel = new mongoose_1["default"].Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});
