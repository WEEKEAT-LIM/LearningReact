import {connectToDb} from "./utils"
import {Post, User} from "./models"
import { unstable_noStore  as noStore} from "next/cache";

export async function getPosts()
{
    const res = await fetch("http://localhost:3000/api/blog",{method:"GET"})//{next:{revalidate:3600}}=>每隔1小时刷新

    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

// export async function getPosts()
// {
//     try
//     {
//         await connectToDb();
//         const posts = await Post.find();
//         return posts;
//     }
//     catch(err)
//     {
//         console.log(err)
//         throw new Error("Failed to fetch posts!")
//     }
// }

export async function getPost(param)
{
    try
    {
        connectToDb();
        // console.log(`getPost()=> slug ::${param.slug}`);
        const post = await Post.findOne({slug:param.slug});
        return post;
    }
    catch(err)
    {
        console.log(err);
        throw new Error("Failed to fetch post!")
    }

}

export async function getUser(id)
{
    noStore();
    try
    {
        connectToDb();
        const user = await User.findById(id);
        return user;
    }
    catch(err)
    {
        console.log(err)
        // console.log(id);
        throw new Error("Failed to fetch user!")
    }
}

export async function getUsers()
{
    const res = await fetch("http://localhost:3000/api/user",{method:"GET"});//{next:{revalidate:3600}}=>每隔1小时刷新

    if (!res.ok)
    {
        throw new Error("Failed to fetch users!");
    }

    return res.json();
}

// export async function getUsers()
// {
//     try
//     {
//         connectToDb();
//         const users = await User.find();
//         return users;
//     }
//     catch(err)
//     {
//         console.log(err)
//         throw new Error("Failed to fetch users!")
//     }
// }

