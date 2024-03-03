import Image from "next/image";
import styles from "./PostCard.module.css"
import Link from "next/link";



function PostCard({post})
{

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {   post.img &&
                    <div className={styles.imgContainer}>
                    <Image src={post.img} 
                    alt="" fill className={styles.img}/>
                    </div>
                }
                <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.description}>
                    {post.description}
                </p>
                <Link className={styles.link} href={`/blog/${post.slug}`}>Read More</Link>
            </div>
        </div>

    );
}

export default PostCard