import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request, {params})
{
    const {slug} = params;
    try 
    {
        connectToDb();
        const post = await Post.findOne({slug});
        return NextResponse.json(post);
    } 
    catch (error) 
    {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}


export async function DELETE(request, {params})
{
    const {slug} = params;
    try 
    {
        connectToDb();
        await Post.deleteOne({slug});
        return NextResponse.json("Post Deleted");
    } 
    catch (error) 
    {
        console.log(error)
        throw new Error("Failed to fetch posts!");
    }
}