import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(request)
{
    try 
    {
        connectToDb()

        const posts = await Post.find();
        return NextResponse.json(posts);
    } 
    catch (error) 
    {
        console.log(error);
        throw new Error("Failed to fetch posts!")
    }
}

export async function POST(request)
{
    const {title, description, slug, image, userId} = await request.json();
    try 
    {
    connectToDb();
    const newPost = new Post({
        userId:userId, 
        title:title, 
        description, 
        slug:slug, 
        img:image});

    await newPost.save();
    console.log("saved to db");
    } 
    catch (error) 
    {
      console.log(error);
      throw new Error("Failed to add posts!")
    }
    return NextResponse.json("Post added");
}