"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var mongoose_1 = require("mongoose");
var joi_1 = require("joi");
var joi_password_1 = require("joi-password");
var UserSchema = new mongoose_1["default"].Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    repeatedPassword: {
        type: String,
        required: true
    }
});
var UserModel = mongoose_1["default"].model('users', UserSchema);
exports["default"] = UserModel;
exports.UserValidation = joi_1["default"].object({
    firstName: joi_1["default"].string()
        .min(2)
        .alphanum()
        .required(),
    lastName: joi_1["default"].string()
        .min(2)
        .alphanum()
        .required(),
    email: joi_1["default"].string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
    password: joi_password_1.joiPassword.string()
        .min(6)
        .max(15)
        .minOfSpecialCharacters(1)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .noWhiteSpaces(),
    repeatedPassword: joi_1["default"].ref('password')
});
