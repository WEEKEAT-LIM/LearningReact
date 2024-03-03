import { useState } from "react";
import { addUser } from "@/lib/manage";
import styles from "./AdminUserForm.module.css"

function AdminUserForm()
{
    const [username, setUsername] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e)
    {
        e.preventDefault();
        if(!username || !email || !password)
        {
            setError("Input Required");
            return;
        }
        else
        {
            setError(null);
            const result = await addUser(username, email, password);
            {result.error && setError(result.error)}
        }
        
        
    }

    return (
        <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input onChange={(e) => setUsername(e.target.value)} className={styles.input} type="text" placeholder="username" name="username"/>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="email" name="email"/>
            <input onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder="password" name="password"/>
            <button className={styles.button}>Add User</button>
            {error && <p>{error}</p>}
        </form>
        </div>
    );
}

export default AdminUserForm