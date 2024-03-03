import { getPosts} from "@/lib/data"
import styles from "./AdminPosts.module.css"
import Image from "next/image";
import { deletePost } from "@/lib/manage";



async function AdminPosts()
{

    const posts = await getPosts();
    // console.log(posts);

    async function handleDelete(e, postSlug) 
    {
        e.preventDefault(); // 阻止表单默认提交行为
        await deletePost(postSlug);
    }

    return (
        <div className={styles.container}>
            <h1><b>Posts</b></h1>
            {
                posts.map(post =>(
                    <div className={styles.post} key={post.id}>
                        <div className={styles.detail} key={post.id}>
                            <Image src={post.img || "/noavatar.png"}
                            alt="" width={50} height={50}/>
                            <span className={styles.postTitle}>{post.title}</span>
                        </div>
                        <form onSubmit={(e) => handleDelete(e, post.slug)}>
                            <input type="hidden" name="id" value={post.slug}/>
                            <button className={styles.postButton}>Delete</button>
                        </form>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminPosts