"use client";
import { addPost } from "@/lib/manage";
import styles from "./AdminPostForm.module.css"
import { useState } from "react";

function AdminPostForm({userId})
{
    const [title, setTitle] =useState("");
    const [description, setDesc] =useState("");
    const [slug, setSlug] =useState("");
    const [image, setImage] =useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e)
    {
        e.preventDefault();
        if(!title || !description || !slug || !image)
        {
            setError("Input Required");
            return;
        }
        if (!image.startsWith("https://images.pexels.com/photos/"))
        {
            setError("Image Link must start with https://images.pexels.com/photos/")
        }
        else
        {
            setError(null);
            await addPost(title, description, slug, image, userId);
        }
        
    }

    return (
        <div className={styles.wrapper}>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
            <input onChange={(e) => setTitle(e.target.value)} className={styles.input} type="text" placeholder="title" name="title"/>
            <input onChange={(e) => setDesc(e.target.value)} className={styles.input} type="text" placeholder="description" name="description"/>
            <input onChange={(e) => setSlug(e.target.value)} className={styles.input} type="text" placeholder="slug" name="slug"/>
            <input onChange={(e) => setImage(e.target.value)} className={styles.input} type="text" placeholder="image(https://images.pexels.com/photos/...)" name="image"/>
            <button className={styles.button}>Add Post</button>
            {error && <p>{error}</p>}
        </form>
        </div>
    );
}

export default AdminPostForm