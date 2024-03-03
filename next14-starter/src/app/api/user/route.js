import { User } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request)
{
    try 
    {
        await connectToDb()

        const users = await User.find();
        return NextResponse.json(users);
    } 
    catch (error) 
    {
        console.log(error);
        throw new Error("Failed to fetch users!")
    }
}

export async function POST(request)
{
    const {username, email, hashedPassword} = await request.json();

    try
    {
        connectToDb();

        const newUser = new User({
            username, 
            email, 
            password:hashedPassword});
        await newUser.save();
        console.log("save to db")
    }
    catch(error)
    {
        console.log(error);
        throw new Error("Failed to add user")
    }

    return NextResponse.json("User added")
}