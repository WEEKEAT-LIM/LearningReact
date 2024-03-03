"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import styles from "./login.module.css";
import LoginForm from '@/components/LoginForm/LoginForm';


function login()
{
    const {data:session} = useSession();

    if (session)
    {
        const UEmail = session?.user?.email
        
        return(
            <>
            <h1>Hello {UEmail}</h1>
            <br/>
            <button className={styles.btn} onClick={signOut}>Sign Out</button>
            </>
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
            <LoginForm/>
            
            </div>
            
        </div>
        
    );
}

export default login