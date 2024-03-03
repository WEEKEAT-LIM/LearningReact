import styles from "./singlePost.module.css"
import Image from "next/image";
import PostUser from "@/components/PostUser/PostUser";

import { getPost } from "@/lib/data";

async function getData(slug)
{
    const res = await fetch(`http://localhost:3000/api/blog/${slug}`,
    {cache:"no-store"})
    //{next:{revalidate:3600}}=>每隔1小时刷新【第三个参数】
    //{method:"DELETE"}=>可以出发DELETE函数【第二个参数】

    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

export async function generateMetadata ({params})
{
//   const post = await getPost({params})
    const {slug} = params;
    const post = await getData(slug);

  return {
    title:post.title,
    description:post.description,
  };
}

async function slug({params}) 
{
    // console.log(params.slug) //{ slug: 'post' }
    // const post = await getPost(params)
    // console.log(post)

    const {slug} = params;
    const post = await getData(slug);
    return(
    <div className={styles.container}>
        {  post.img && (
            <div className={styles.imgContainer}>
            <Image src={post.img} 
                alt="" fill className={styles.img}/>
            </div>
        )}
        <div className={styles.textContainer}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.detail}>
                
            {post && (
                
                <PostUser id={{val:post.userId}}/>

            )}
            
            <div className={styles.detailText}>
                <span className={styles.detailTitle}>Published</span>
                <span className={styles.detailValue}>{(post.createdAt).toString().slice(0, 16)}</span>
            </div>
            </div>
            <p className={styles.content}>
                {post.description}
            </p>
        </div>
    </div>);
}

export default slug