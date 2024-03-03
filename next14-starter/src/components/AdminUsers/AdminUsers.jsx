"use client";
import { getUsers } from "@/lib/data"
import styles from "./AdminUsers.module.css"
import { deleteUser } from "@/lib/manage";
import Image from "next/image";

async function AdminUsers()
{
    const users = await getUsers();
    // console.log(users);

    async function handleDelete(e, userId) 
    {
        e.preventDefault(); // 阻止表单默认提交行为
        await deleteUser(userId);
    }

    return (
        <div className={styles.container}>
            <h1><b>Users</b></h1>
            {
                users.map(user =>(
                    <div className={styles.user} key={user._id}>
                        <div className={styles.detail} key={user._id}>
                            <Image src={user.img || "/noavatar.png"}
                            alt="" width={50} height={50}/>
                            <span className={styles.username}>{user.username}</span>
                        </div>
                        <form onSubmit={(e) => handleDelete(e, user._id)}>
                            <input type="hidden" name="id" value={user._id}/>
                            <button className={styles.userButton}>Delete</button>
                        </form>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminUsers