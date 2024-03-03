import { getUser } from "@/lib/data";
import styles from "./PostUser.module.css"
import Image from "next/image";
import { Suspense } from "react";

async function getData(num)
{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${num}`,
    {cache:"no-store"})//{next:{revalidate:3600}}=>每隔1小时刷新

    if (!res.ok)
    {
        throw new Error("Something wnt wrong");
    }
    return res.json();
}

async function PostUser({id})
{
    // console.log(id);
    const user = await getUser(id.val)
    // console.log(user)
    return (
        <div className={styles.container}>
            <Suspense fallback={<div>Loading...</div>}>
            <Image className={styles.avatar} src={user.img?user.img:"/noavatar.png"}
                alt="" width={50} height={50}/>
            </Suspense>

            <div className={styles.texts}>
                <span className={styles.title}>Author</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    );
}

export default PostUser