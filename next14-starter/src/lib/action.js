"use server";

import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export async function registerAction(username, email, password, passwordRepeat)
{

    try {
        
        await connectToDb();

        const user = await User.findOne({username});

        if (user)
        {
            return {error:"Username already exists"};
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        console.log("register() => new user saved to database")
        return {success:true};
        
    } catch (error) {
        console.log(error);
        return ({error:"register() => Something went wrong"});
    }
}