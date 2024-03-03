import { User, Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";


export async function DELETE(request, {params})
{
    const {id} = params;
    // console.log(id);
    try 
    {
        connectToDb();
        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        return NextResponse.json("User Deleted");
    } 
    catch (error) 
    {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}