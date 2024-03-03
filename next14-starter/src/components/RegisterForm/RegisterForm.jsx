"use client"
import styles from "./RegisterForm.module.css"
import  {registerAction} from "@/lib/action";
import { useState} from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterForm()
{
    const [username, setUsername] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [passwordRepeat, setPasswordRepeat] =useState("");
    const [error, setError] = useState(null);

    const router = useRouter();
    
    async function handleSubmit(e)
    {
        e.preventDefault();
        if(!username || !email || !password || !passwordRepeat)
        {
            setError("Input Required");
            return;
        }
        if (password !== passwordRepeat)
        {
            setError("Password doesn't match!")
            return;
        }
        else
        {
            setError(null);
            try
            {
            const result = await registerAction(username, email, password, passwordRepeat);
            if (result?.error)
            {
                setError(`${result.error}`);
                return;
            }
            if (result?.success)
            {
                router.push("/login")
            }
            }
            catch(ERROR)
            {
                console.log(`register form handleSubmit => ${ERROR}`);
            }
        }
        
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input onChange={(e) => setUsername(e.target.value)} className={styles.input} type="text" placeholder="username" name="username"/>
            <input onChange={(e) => setEmail(e.target.value)} className={styles.input} type="email" placeholder="email" name="email"/>
            <input onChange={(e) => setPassword(e.target.value)} className={styles.input} type="password" placeholder="password" name="password"/>
            <input onChange={(e) => setPasswordRepeat(e.target.value)} className={styles.input} type="password" placeholder="password confirmation" name="passwordRepeat"/>
            <button className={styles.button}>Register</button>
            {error && <p>{error}</p>}
            <Link href="/login">Have an account? <b>Login</b></Link>
        </form>
    );
}

export default RegisterForm