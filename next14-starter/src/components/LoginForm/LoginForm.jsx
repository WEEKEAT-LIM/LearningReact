"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from "./LoginForm.module.css"
import { signIn } from 'next-auth/react';

function LoginForm()
{
    // const [state, formAction] = useFormState(loginAction, undefined); 用useState比较好
    const [username, setUsername] =useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState();

    const router = useRouter();
    

    async function handleSubmit(e)
    {
        e.preventDefault();
        if(!username || !password)
        {
            setError("Input Required");
        }
        else
        {
        try 
        {
            const result = await signIn('credentials', { username, password, redirect: false });

            if (result.error)
            {
                setError("Username OR Password Incorrect");
            }
            else 
            {
                router.push('/login');
            }

        } 
        catch (error) 
        {
            console.error('Login form error()=>', error);
            setError('Something wrong');
        }
        }
    }

    return (
        <>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input onChange={(e)=> setUsername(e.target.value)} className={styles.input} type='text' placeholder='username' name='username'/>
            <input onChange={(e)=> setPassword(e.target.value)} className={styles.input} type='password' placeholder='password' name='password'/>
            <button className={styles.button}>Login with Credentials</button>
        </form>
        <button className={styles.btn} onClick={() => signIn("github")}>Login with Github</button>
        {/* {SError && <p>{SError}</p>} */}
        {error && <p>{error}</p>}
        <Link href="/register">
            {"Don't have account?"} <b>Register</b>
        </Link>
        </>
    );
}

export default LoginForm