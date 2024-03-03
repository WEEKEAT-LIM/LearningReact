import { getPosts } from "@/lib/data";
import styles from "./blog.module.css"
import PostCard from "@/components/PostCard/PostCard";

async function getData()
{
    const res = await fetch("http://localhost:3000/api/blog",
    {next:{revalidate:3600}})//{next:{revalidate:3600}}=>每隔1小时刷新

    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }

    return res.json();
}

export const metadata = {
  title: 'Blog',
  description: 'Blog description',
}

async function blog()
{
    // const posts = await getPosts();
    const posts = await getData();

    return(
    <div className={styles.container}>
        {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                <PostCard post={post}/>
                </div>
            
        ))}

        {/* <div className={styles.post}><PostCard/></div> */}
    </div>);
}

export default blog