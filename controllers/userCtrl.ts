import express from 'express';
import UserModel from '../models/userModel';
import { UserValidation } from '../models/userModel';

export async function register(req: express.Request, res: express.Response) {
    try {
        const { firstName , lastName, email, password, repeatedPassword } = req.body;
        if (!firstName) throw new Error ("Couldn't recieve firstName from body");
        if (!lastName) throw new Error ("Couldn't recieve lastName from body");
        if (!email) throw new Error ("Couldn't recieve email from body");
        if (!password) throw new Error ("Couldn't recieve password from body");
        if (!repeatedPassword) throw new Error ("Couldn't recieve reapeatedPassword from body");

        const { error } = UserValidation.validate({firstName, lastName, email, password, repeatedPassword});
        if (error) throw error;

        const user = new UserModel({firstName, lastName, email, password, repeatedPassword});
        await user.save();

        res.send({ register: true, user: user});
    } catch (error) {
        res.send({ error: error.message });
    }
} 