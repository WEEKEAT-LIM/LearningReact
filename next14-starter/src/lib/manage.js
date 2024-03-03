"use server";

import { revalidatePath } from "next/cache";
import { User, Post } from "./models";
import { connectToDb } from "./utils";
import bcrypt from "bcryptjs";

export async function addPost(title, description, slug, image, userId)
{
    const data =
    {
        title: title,
        description : description,
        slug : slug,
        image : image,
        userId : userId,
    };
    const res = await fetch(`http://localhost:3000/api/blog`,{
      method:"POST",
      headers:{"Content-Type": "application/json",},
      body: JSON.stringify(data)
    })
    //{next:{revalidate:3600}}=>每隔1小时刷新【第三个参数】
    //{method:"DELETE"}=>可以出发DELETE函数【第二个参数】
    revalidatePath("/blog");
    revalidatePath("/admin");
    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

// export const addPost = async (prevState,formData) => {
//   // const title = formData.get("title");
//   // const desc = formData.get("desc");
//   // const slug = formData.get("slug");

//   const { title, desc, slug, userId } = Object.fromEntries(formData);

//   try {
//     connectToDb();
//     const newPost = new Post({
//       title,
//       desc,
//       slug,
//       userId,
//     });

//     await newPost.save();
//     console.log("saved to db");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } catch (err) {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };

export async function deletePost(slug)
{
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{method:"DELETE"})
    //{next:{revalidate:3600}}=>每隔1小时刷新【第三个参数】
    //{method:"DELETE"}=>可以出发DELETE函数【第二个参数】
    revalidatePath("/blog");
    revalidatePath("/admin");
    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

// export async function deletePost(id)
// {
//   try 
//   {
//     connectToDb();

//     await Post.findByIdAndDelete(id);
//     console.log("deleted from db");
//     revalidatePath("/blog");
//     revalidatePath("/admin");
//   } 
//   catch (err) 
//   {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };

// export async function addUser(username, email, password)
// {

//     try {
        
//         await connectToDb();

//         const user = await User.findOne({username});

//         if (user)
//         {
//             return {error:"Username already exists"};
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);
//         const newUser = new User({
//             username,
//             email,
//             password: hashedPassword,
//         });

//         await newUser.save();
//         console.log("addUser() => new user saved to database")
//         revalidatePath("/admin");
//         return {success:true};
        
//     } catch (error) {
//         console.log(error);
//         return ({error:"addUser() => Something went wrong"});
//     }
// }

export async function deleteUser(id)
{
    const res = await fetch(`http://localhost:3000/api/user/${id}`,{method:"DELETE"})
    //{next:{revalidate:3600}}=>每隔1小时刷新【第三个参数】
    //{method:"DELETE"}=>可以出发DELETE函数【第二个参数】
    revalidatePath("/blog");
    revalidatePath("/admin");
    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

// export const deleteUser = async (formData) => {
//   const { id } = Object.fromEntries(formData);

//   try {
//     connectToDb();

//     await Post.deleteMany({ userId: id });
//     await User.findByIdAndDelete(id);
//     console.log("deleted from db");
//     revalidatePath("/admin");
//   } catch (err) {
//     console.log(err);
//     return { error: "Something went wrong!" };
//   }
// };

export async function addUser(username, email, password)
{
            
    await connectToDb();
    const user = await User.findOne({username});

    if (user)
    {
        return {error:"Username already exists"};
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const data ={username, email, hashedPassword};
    const res = await fetch(`http://localhost:3000/api/user`,{
      method:"POST",
      headers:{"Content-Type": "application/json",},
      body: JSON.stringify(data)
    })
    //{next:{revalidate:3600}}=>每隔1小时刷新【第三个参数】
    //{method:"DELETE"}=>可以出发DELETE函数【第二个参数】

    revalidatePath("/admin");
    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}