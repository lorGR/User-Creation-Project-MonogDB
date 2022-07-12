import mongoose from "mongoose";
import Joi from "joi";
import { joiPassword } from 'joi-password';

const UserSchema = new mongoose.Schema({
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
        required: true,
    },
    repeatedPassword: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;

export const UserValidation = Joi.object({
    firstName:
        Joi.string()
            .min(2)
            .alphanum()
            .required(),
    lastName:
        Joi.string()
            .min(2)
            .alphanum()
            .required(),
    email:
        Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
    password:
        joiPassword.string()
            .min(6)
            .max(15)
            .minOfSpecialCharacters(1)
            .minOfLowercase(1)
            .minOfUppercase(1)
            .minOfNumeric(1)
            .noWhiteSpaces(),

    repeatedPassword:
        Joi.ref('password')
})

